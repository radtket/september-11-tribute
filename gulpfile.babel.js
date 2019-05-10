import gulp from "gulp";

import autoprefixer from "autoprefixer";
import chalk from "chalk";
import del from "del";
import prettyBytes from "pretty-bytes";
import pxtorem from "postcss-pxtorem";
import vinylPaths from "vinyl-paths";

const gulpPlugins = require("gulp-load-plugins")();

const browsersync = require("browser-sync").create();

const rollup = require("rollup");
const rollupUglify = require("rollup-plugin-uglify");
const es2015 = require("rollup-plugin-buble");

const pkg = require("./package.json");

// project
const project = { root: __dirname };
project.dist = `${project.root}/docs`;

project.assets = `${project.root}/src`;
project.favicon = `${project.assets}/favicon`;
project.fonts = `${project.assets}/fonts`;
project.img = `${project.assets}/img`;
project.js = `${project.assets}/js`;
project.pdf = `${project.assets}/pdf`;
project.video = `${project.assets}/video`;
project.scss = `${project.assets}/scss`;
project.node = `${project.root}/node_modules`;
project.vendor = `${project.assets}/vendor`;

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

const banner = `/*!
 * DO NOT OVERRIDE THIS FILE.
 * Generated with \`npm run build\`
 *
 * ${pkg.description} - ${pkg.author.shorthandUrl}
 * @version ${pkg.version}
 * @author ${pkg.author.name}
 * @link ${pkg.author.url}
 */
 `;

// Clean assets
function clean() {
	return del([`${project.dist}`]);
}

// Copy copyVendor
function copyVendor() {
	return gulp
		.src(`${project.vendor}/**/*`)
		.pipe(gulp.dest(`${project.dist}/vendor/`));
}

// Copy PDF Assets
function pdf() {
	return gulp
		.src(`${project.pdf}/**/*`)
		.pipe(gulp.dest(`${project.dist}/pdf/`));
}

// Copy Video Assets
function video() {
	const { newer } = gulpPlugins;
	return gulp
		.src(`${project.video}/**/*`)
		.pipe(newer(`${project.dist}/video/`))
		.pipe(gulp.dest(`${project.dist}/video/`));
}

// Copy Font Assets
function fonts() {
	return gulp
		.src(`${project.fonts}/**/*`)
		.pipe(gulp.dest(`${project.dist}/fonts/`));
}

// Copy Favicon Assets
function favicon() {
	return gulp.src(`${project.favicon}/**/*`).pipe(gulp.dest(`${project.dist}`));
}

// Minify HTML
function buildHtml() {
	const { htmlmin, rename } = gulpPlugins;
	return gulp
		.src(`${project.assets}/*.html`)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(`${project.dist}`))
		.pipe(rename({ extname: ".aspx" }))
		.pipe(gulp.dest(`${project.dist}`));
}

function buildImg() {
	const { imagemin, size, newer } = gulpPlugins;
	return gulp
		.src(`${project.img}/**/*`)
		.pipe(newer(`${project.dist}/img/`))
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [
						{
							removeViewBox: false,
							collapseGroups: true
						}
					]
				})
			])
		)
		.pipe(
			size({
				showFiles: true,
				title: "imagemin"
			})
		)
		.pipe(gulp.dest(`${project.dist}/img/`));
}

function buildCss() {
	const {
		csso,
		filter,
		header,
		mergeMediaQueries,
		notify,
		plumber,
		postcss,
		rename,
		sass,
		sassGlob,
		size,
		sourcemaps,
		util
	} = gulpPlugins;

	const { noop } = util;
	const filterCSS = filter(["**/*.css"], { restore: true });
	const sync = () =>
		browsersync ? browsersync.stream({ match: "**/*.css" }) : noop();

	return (
		gulp
			.src([`${project.scss}/**/*.scss`, `!_*.scss`])
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(sassGlob())
			.pipe(
				sass({
					outputStyle: "expanded"
				}).on("error", sass.logError)
			)
			.pipe(
				postcss([
					autoprefixer({
						browsers: ["last 2 versions", "ie 11"]
					}),
					pxtorem({
						replace: false
					})
				])
			)
			.pipe(header(banner))
			.pipe(
				size({
					showFiles: true,
					title: "sass"
				})
			)
			.pipe(sourcemaps.write("."))
			.on("error", util.log)
			.pipe(gulp.dest(`${project.dist}/css/`))
			.pipe(sync())

			// minified version
			.pipe(filterCSS)
			.pipe(mergeMediaQueries({ log: true }))
			.pipe(rename({ suffix: ".min" }))
			.pipe(csso())
			.on("error", util.log)
			.pipe(
				size({
					showFiles: true,
					title: "sass"
				})
			)
			.pipe(sourcemaps.write("."))
			.on("error", util.log)
			.pipe(filterCSS.restore)

			// create both files
			.pipe(gulp.dest(`${project.dist}/css/`))
			.pipe(sync())
			.pipe(notify({ message: 'TASK: "styles" Completed! 💯', onLast: true }))
	);
}

function buildJs() {
	// edit these
	const globals = {
		jquery: "jQuery",
		modernizr: "Modernizr"
	};

	const { util } = gulpPlugins;
	const { noop } = util;

	const log = (() => {
		const cache = Object.create(null);

		return (fileName, msg) => {
			if (!(fileName in cache)) {
				cache[fileName] = Object.create(null);
			}

			if (msg in cache[fileName]) {
				return;
			}

			const title = `${chalk.cyan("rollup")} `;
			util.log(`${title + chalk.blue(fileName)} ${msg}`);

			cache[fileName][msg] = true;
		};
	})();

	const getPaths = path => {
		const fileName = path.replace(`${project.js}/`, "").slice(0, -3);
		const dest = `${project.dist}/js/${fileName}.js`;
		const minDest = `${project.dist}/js/${fileName}.min.js`;
		const moduleName = fileName[0].toUpperCase() + fileName.slice(1);

		moduleName
			.replace(/(-|_|\.|\s)+(.)?/g, (match, separator, chr) =>
				chr ? chr.toUpperCase() : ""
			)
			.replace(/(^|\/)([A-Z])/g, match => match.toLowerCase());

		return { path, fileName, dest, minDest, moduleName };
	};

	const writeFiles = (bundle, path, fileName, moduleName, dest) => {
		const opts = {
			globals,
			sourceMap: true,
			moduleName,
			banner,
			exports: "named",
			format: "umd",
			dest
		};

		const result = bundle.generate(opts);
		let size = Buffer.byteLength(result.code, "utf8");
		size = prettyBytes(size);
		size = chalk.magenta(size);

		log(fileName, chalk.magenta(size));

		return bundle.write(opts);
	};

	// delete dist files
	del.sync([`${project.dist}/js/**/*.js`, `${project.dist}/js/**/*.js.map`]);

	// read js files

	return gulp
		.src([`${project.js}/**/*.js`, `!${project.js}/**/*/_*.js`], {
			read: false
		})
		.pipe(
			vinylPaths(path => {
				const fileName = path.replace(`${project.js}/`, "");

				// skip if file has a _ as the first character
				if (fileName[0] === "_") {
					return Promise.resolve();
				}

				return new Promise((resolve, reject) => {
					// eslint-disable-next-line no-shadow
					const { fileName, dest, minDest, moduleName } = getPaths(path);
					// compile original file
					return (
						rollup
							.rollup({
								entry: path,
								external: Object.keys(globals),
								onwarn: msg => log(`${fileName}.js`, msg),
								plugins: [es2015()]
							})
							// write original file
							.then(bundle =>
								writeFiles(bundle, path, `${fileName}.js`, moduleName, dest)
							)

							// compile minified file
							.then(() =>
								rollup.rollup({
									entry: path,
									external: Object.keys(globals),
									onwarn: msg => log(`${fileName}.min.js`, msg),
									plugins: [es2015(), rollupUglify()]
								})
							)
							// write minified file
							.then(bundle =>
								writeFiles(
									bundle,
									path,
									`${fileName}.min.js`,
									moduleName,
									minDest
								)
							)

							.then(() => {
								const sync = () =>
									browsersync ? browsersync.reload() : noop();
								sync();
							})

							// handle promise
							.then(resolve)
							.catch(reject)
					);
				}).catch(err => console.log(err));
			})
		);
}

function buildVendorCopyFromNpm() {
	const { size } = gulpPlugins;
	const npmFiles = Object.keys(pkg.dependencies).map(
		name => `${project.node}/${name}/**/*`
	);

	return gulp
		.src(npmFiles, { base: project.node })
		.pipe(size({ title: "vendor" }))
		.pipe(gulp.dest(project.vendor));
}

function buildVendorModernizr() {
	const { header, modernizr, rename, sourcemaps, uglify } = gulpPlugins;

	return (
		gulp
			.src([`${project.scss}/**/*.scss`, `${project.js}/**/*.js`])
			.pipe(
				modernizr({
					options: [
						"setClasses",
						"addTest",
						"html5printshiv",
						"testProp",
						"fnBind"
					]
				})
			)
			.pipe(gulp.dest(`${project.vendor}/modernizr`))

			// minified version
			.pipe(sourcemaps.init())
			.pipe(rename({ suffix: ".min" }))
			.pipe(
				uglify({
					preserveComments: "license"
				})
			)
			.pipe(header(banner))
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest(`${project.vendor}/modernizr`))
	);
}

// watch
function watch() {
	gulp.watch(
		`${project.scss}/**/*.scss`,
		gulp.series(buildCss, browserSyncReload)
	);
	gulp.watch(`${project.js}/**/*.js`, gulp.series(buildJs, browserSyncReload));
	gulp.watch(`${project.img}/**/*`, gulp.series(buildImg, browserSyncReload));
	gulp.watch(
		`${project.assets}/*.html`,
		gulp.series(buildHtml, browserSyncReload)
	);
}

// serve
function serveFiles() {
	const files = [
		`${project.assets}/*.html`,
		`${project.scss}/**/*`,
		`${project.js}/**/*`,
		`${project.img}/**/*`
	];
	browsersync.init(files, {
		server: {
			baseDir: `${project.dist}/`
		},
		port: 3000,
		// Inject CSS changes
		injectChanges: true
	});
}

const buildVendor = gulp.series(buildVendorCopyFromNpm, buildVendorModernizr);

const build = gulp.series(
	clean,
	buildVendor,
	copyVendor,
	favicon,
	fonts,
	pdf,
	video,
	gulp.parallel(buildHtml, buildImg, buildCss, buildJs)
);

const serve = gulp.parallel(serveFiles, watch);

export {
	build,
	buildCss,
	buildHtml,
	buildImg,
	buildJs,
	buildVendor,
	copyVendor,
	clean,
	serve,
	watch
};

export default build;
