// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"vendor/modernizr/modernizr.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * DO NOT OVERRIDE THIS FILE.
 * Generated with `npm run build`
 *
 * ice-september-eleven - Booz Allen Hamilton
 * one page website honoring HSI personnel who supported recovery and security eff­orts following the September 11th attacks
 * @version 1.0.0
 * @author Taylor Radtke
 * @contact radtke_taylor@bah.com
 */

/*!
* modernizr v3.7.1
* Build https://modernizr.com/download?-flash-addtest-fnbind-printshiv-setclasses-testprop-dontmin
*
* Copyright (c)
*  Faruk Ates
*  Paul Irish
*  Alex Sexton
*  Ryan Seddon
*  Patrick Kettner
*  Stu Cox
*  Richard Herrera
*  Veeck
 * MIT License
*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }

  function o(e) {
    var t = E.className,
        n = g._config.classPrefix || "";

    if (C && (t = t.baseVal), g._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    g._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), C ? E.className.baseVal = t : E.className = t);
  }

  function i(e, t) {
    if ("object" == _typeof(e)) for (var n in e) {
      y(e, n) && i(n, e[n]);
    } else {
      e = e.toLowerCase();
      var r = e.split("."),
          a = g[r[0]];
      if (2 === r.length && (a = a[r[1]]), void 0 !== a) return g;
      t = "function" == typeof t ? t() : t, 1 === r.length ? g[r[0]] = t : (!g[r[0]] || g[r[0]] instanceof Boolean || (g[r[0]] = new Boolean(g[r[0]])), g[r[0]][r[1]] = t), o([(t && !1 !== t ? "" : "no-") + r.join("-")]), g._trigger(e, t);
    }
    return g;
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function l() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function s() {
    var e = t.body;
    return e || (e = l(C ? "svg" : "body"), e.fake = !0), e;
  }

  function c(e, n, r, o) {
    var i,
        a,
        c,
        u,
        f = "modernizr",
        d = l("div"),
        p = s();
    if (parseInt(r, 10)) for (; r--;) {
      c = l("div"), c.id = o ? o[r] : f + (r + 1), d.appendChild(c);
    }
    return i = l("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = u, E.offsetHeight) : d.parentNode.removeChild(d), !!a;
  }

  function u(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function f(t, n, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (i) {
        var a = i.error ? "error" : "log";
        i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];

    return o;
  }

  function d(t, r) {
    var o = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(u(t[o]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) {
        i.push("(" + u(t[o]) + ":" + r + ")");
      }

      return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" === f(e, null, "position");
      });
    }

    return n;
  }

  function p(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function h(e, t, o, i) {
    function s() {
      u && (delete w.style, delete w.modElem);
    }

    if (i = !r(i, "undefined") && i, !r(o, "undefined")) {
      var c = d(e, o);
      if (!r(c, "undefined")) return c;
    }

    for (var u, f, h, m, v, g = ["modernizr", "tspan", "samp"]; !w.style && g.length;) {
      u = !0, w.modElem = l(g.shift()), w.style = w.modElem.style;
    }

    for (h = e.length, f = 0; f < h; f++) {
      if (m = e[f], v = w.style[m], a(m, "-") && (m = p(m)), w.style[m] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" !== t || m;

        try {
          w.style[m] = o;
        } catch (e) {}

        if (w.style[m] !== v) return s(), "pfx" !== t || m;
      }
    }

    return s(), !1;
  }

  var m = [],
      v = {
    _version: "3.7.1",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      m.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      m.push({
        name: null,
        fn: e
      });
    }
  },
      g = function g() {};

  g.prototype = v, g = new g();
  var y,
      b = [],
      E = t.documentElement,
      C = "svg" === E.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    y = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), v._l = {}, v.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), g.hasOwnProperty(e) && setTimeout(function () {
      g._trigger(e, g[e]);
    }, 0);
  }, v._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function () {
        var e;

        for (e = 0; e < n.length; e++) {
          (0, n[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, g._q.push(function () {
    v.addTest = i;
  });
  C || function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
    }

    function r() {
      var e = w.elements;
      return "string" == typeof e ? e.split(" ") : e;
    }

    function o(e, t) {
      var n = w.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = n + " " + e, c(t);
    }

    function i(e) {
      var t = S[e[E]];
      return t || (t = {}, C++, e[E] = C, S[C] = t), t;
    }

    function a(e, n, r) {
      if (n || (n = t), v) return n.createElement(e);
      r || (r = i(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : b.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || y.test(e) || o.tagUrn ? o : r.frag.appendChild(o);
    }

    function l(e, n) {
      if (e || (e = t), v) return e.createDocumentFragment();
      n = n || i(e);

      for (var o = n.frag.cloneNode(), a = 0, l = r(), s = l.length; a < s; a++) {
        o.createElement(l[a]);
      }

      return o;
    }

    function s(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return w.shivMethods ? a(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ");return n}")(w, t.frag);
    }

    function c(e) {
      e || (e = t);
      var r = i(e);
      return !w.shivCSS || m || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || s(e, r), e;
    }

    function u(e) {
      for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) {
        t = n[o], i.test(t.nodeName) && a.push(t.applyElement(f(t)));
      }

      return a;
    }

    function f(e) {
      for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(N + ":" + e.nodeName); r--;) {
        t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
      }

      return o.style.cssText = e.style.cssText, o;
    }

    function d(e) {
      for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + N + "\\:$2"; o--;) {
        t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
      }

      return n.join("{");
    }

    function p(e) {
      for (var t = e.length; t--;) {
        e[t].removeNode();
      }
    }

    function h(e) {
      function t() {
        clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null;
      }

      var r,
          o,
          a = i(e),
          l = e.namespaces,
          s = e.parentWindow;
      return !_ || e.printShived ? e : (void 0 === l[N] && l.add(N), s.attachEvent("onbeforeprint", function () {
        t();

        for (var i, a, l, s = e.styleSheets, c = [], f = s.length, p = Array(f); f--;) {
          p[f] = s[f];
        }

        for (; l = p.pop();) {
          if (!l.disabled && T.test(l.media)) {
            try {
              i = l.imports, a = i.length;
            } catch (e) {
              a = 0;
            }

            for (f = 0; f < a; f++) {
              p.push(i[f]);
            }

            try {
              c.push(l.cssText);
            } catch (e) {}
          }
        }

        c = d(c.reverse().join("")), o = u(e), r = n(e, c);
      }), s.attachEvent("onafterprint", function () {
        p(o), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500);
      }), e.printShived = !0, e);
    }

    var m,
        v,
        g = e.html5 || {},
        y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        b = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        E = "_html5shiv",
        C = 0,
        S = {};
    !function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", m = "hidden" in e, v = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
        }();
      } catch (e) {
        m = !0, v = !0;
      }
    }();
    var w = {
      elements: g.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: "3.7.3",
      shivCSS: !1 !== g.shivCSS,
      supportsUnknownElements: v,
      shivMethods: !1 !== g.shivMethods,
      type: "default",
      shivDocument: c,
      createElement: a,
      createDocumentFragment: l,
      addElements: o
    };
    e.html5 = w, c(t);

    var T = /^$|\b(?:all|print)\b/,
        N = "html5shiv",
        _ = !v && function () {
      var n = t.documentElement;
      return !(void 0 === t.namespaces || void 0 === t.parentWindow || void 0 === n.applyElement || void 0 === n.removeNode || void 0 === e.attachEvent);
    }();

    w.type += " print", w.shivPrint = h, h(t), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = w);
  }(void 0 !== e ? e : this, t);
  var S = {
    elem: l("modernizr")
  };

  g._q.push(function () {
    delete S.elem;
  });

  var w = {
    style: S.elem.style
  };

  g._q.unshift(function () {
    delete w.style;
  });

  v.testProp = function (e, t, r) {
    return h([e], n, t, r);
  };
  /*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/


  g.addAsyncTest(function () {
    var n,
        r = function r(e) {
      E.contains(e) || E.appendChild(e);
    },
        o = function o(e) {
      e.fake && e.parentNode && e.parentNode.removeChild(e);
    },
        a = function a(e, t) {
      var n = !!e;

      if (n && (n = new Boolean(n), n.blocked = "blocked" === e), i("flash", function () {
        return n;
      }), t && d.contains(t)) {
        for (; t.parentNode !== d;) {
          t = t.parentNode;
        }

        d.removeChild(t);
      }
    };

    try {
      n = "ActiveXObject" in e && "Pan" in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    } catch (e) {}

    if (!("plugins" in navigator && "Shockwave Flash" in navigator.plugins || n) || C) a(!1);else {
      var _c,
          u,
          f = l("embed"),
          d = s();

      if (f.type = "application/x-shockwave-flash", d.appendChild(f), !("Pan" in f || n)) return r(d), a("blocked", f), void o(d);
      _c = function c() {
        if (r(d), !E.contains(d)) return d = t.body || d, f = l("embed"), f.type = "application/x-shockwave-flash", d.appendChild(f), setTimeout(_c, 1e3);
        E.contains(f) ? (u = f.style.cssText, "" !== u ? a("blocked", f) : a(!0, f)) : a("blocked"), o(d);
      }, setTimeout(_c, 10);
    }
  }), function () {
    var e, t, n, o, i, a, l;

    for (var s in m) {
      if (m.hasOwnProperty(s)) {
        if (e = [], t = m[s], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) {
          a = e[i], l = a.split("."), 1 === l.length ? g[l[0]] = o : (!g[l[0]] || g[l[0]] instanceof Boolean || (g[l[0]] = new Boolean(g[l[0]])), g[l[0]][l[1]] = o), b.push((o ? "" : "no-") + l.join("-"));
        }
      }
    }
  }(), o(b), delete v.addTest, delete v.addAsyncTest;

  for (var T = 0; T < g._q.length; T++) {
    g._q[T]();
  }

  e.Modernizr = g;
}(window, document);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57424" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","vendor/modernizr/modernizr.min.js"], null)
//# sourceMappingURL=/modernizr.min.5c354702.js.map