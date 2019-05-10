import gulp from "gulp";
import autoprefixer from "autoprefixer";
import browsersync from "browser-sync";
import cssnano from "cssnano";
import del from "del";
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import rename from "gulp-rename";
import sass from "gulp-sass";
import webpack from "webpack";
import webpackstream from "webpack-stream";
import sassGlob from "gulp-sass-glob";
import sourcemaps from "gulp-sourcemaps";
import webpackconfig from "./webpack.config";

browsersync.create();

// project
const project = { root: __dirname };
project.dist = `${project.root}/docs`;

project.assets = `${project.root}/src`;
project.favicon = `${project.assets}/favicon`;
project.fonts = `${project.assets}/fonts`;
project.img = `${project.assets}/img`;
project.js = `${project.assets}/js`;
project.pdf = `${project.assets}/pdf`;
project.scss = `${project.assets}/scss`;

// BrowserSync

function reload(done) {
	browsersync.reload();
	done();
}

function serve(done) {
	// watch files
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
	done();
}

// Clean assets
function clean() {
	return del([`${project.dist}`]);
}

// Copy PDF Assets
function pdf() {
	return gulp
		.src(`${project.pdf}/**/*`)
		.pipe(gulp.dest(`${project.dist}/pdf/`));
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

// Copy Modernizr
function modernizr() {
	return gulp
		.src(`${project.assets}/modernizr.min.js`)
		.pipe(gulp.dest(`${project.dist}/js`));
}

// Copy Video
function video() {
	return gulp
		.src(`${project.assets}/video`)
		.pipe(gulp.dest(`${project.dist}/video/`));
}

// Minify HTML
function html() {
	return gulp
		.src(`${project.assets}/index.html`)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(`${project.dist}`))
		.pipe(rename({ extname: ".aspx" }))
		.pipe(gulp.dest(`${project.dist}`));
}

// Optimize Images
function images() {
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
		.pipe(gulp.dest(`${project.dist}/img/`));
}

// CSS task
function css() {
	return gulp
		.src(`${project.scss}/**/*.scss`)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(gulp.dest(`${project.dist}/css/`))
		.pipe(rename({ suffix: ".min" }))
		.pipe(
			postcss([
				autoprefixer({
					browsers: ["last 4 versions", "ie 11"]
				}),
				cssnano()
			])
		)
		.pipe(gulp.dest(`${project.dist}/css/`))
		.pipe(browsersync.stream());
}

// Transpile, concatenate and minify scripts
function scripts() {
	return (
		gulp
			.src([`${project.js}/**/*`])
			.pipe(plumber())
			.pipe(webpackstream(webpackconfig, webpack))
			// folder only, filename is specified in webpack config
			.pipe(gulp.dest(`${project.dist}/js/`))
			.pipe(browsersync.stream())
	);
}

// Watch files
function watch() {
	gulp.watch(`${project.scss}/**/*.scss`, gulp.series(css, reload));
	gulp.watch(`${project.assets}/*.html`, gulp.series(html, reload));
	gulp.watch(`${project.js}/**/*`, gulp.series(scripts, reload));
	// gulp.watch(`${project.img}/**/*`, images);
}

// define complex tasks
const build = gulp.series(
	html,
	css,
	favicon,
	images,
	pdf,
	fonts,
	video,
	modernizr,
	scripts
);

const start = gulp.series(build, gulp.parallel(serve, watch));
// const js = gulp.series(scriptsLint, scripts);
// const build = gulp.series(
// 	gulp.parallel(html, css, favicon, images, pdf, fonts, js, serve, watch)
// );

// export tasks
export {
	html,
	images,
	favicon,
	css,
	clean,
	fonts,
	build,
	serve,
	video,
	watch,
	modernizr,
	start
};

export default build;
