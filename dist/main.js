/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/***/ ((module) => {

eval("!function (t, e, n, r, o) {\n  if (\"customElements\" in n) o();else {\n    if (n.AWAITING_WEB_COMPONENTS_POLYFILL) return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);\n    var a = n.AWAITING_WEB_COMPONENTS_POLYFILL = f();\n    a.then(o);\n    var i = n.WEB_COMPONENTS_POLYFILL || \"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js\",\n        s = n.ES6_CORE_POLYFILL || \"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js\";\n    \"Promise\" in n ? c(i).then(function () {\n      a.isDone = !0, a.exec();\n    }) : c(s).then(function () {\n      c(i).then(function () {\n        a.isDone = !0, a.exec();\n      });\n    });\n  }\n\n  function f() {\n    var t = [];\n    return t.isDone = !1, t.exec = function () {\n      t.splice(0).forEach(function (t) {\n        t();\n      });\n    }, t.then = function (e) {\n      return t.isDone ? e() : t.push(e), t;\n    }, t;\n  }\n\n  function c(t) {\n    var e = f(),\n        n = r.createElement(\"script\");\n    return n.type = \"text/javascript\", n.readyState ? n.onreadystatechange = function () {\n      \"loaded\" != n.readyState && \"complete\" != n.readyState || (n.onreadystatechange = null, e.isDone = !0, e.exec());\n    } : n.onload = function () {\n      e.isDone = !0, e.exec();\n    }, n.src = t, r.getElementsByTagName(\"head\")[0].appendChild(n), n.then = e.then, n;\n  }\n}(0, 0, window, document, function () {\n  var t, e;\n  t = window, e = function () {\n    return function (t) {\n      var e = {};\n\n      function n(r) {\n        if (e[r]) return e[r].exports;\n        var o = e[r] = {\n          i: r,\n          l: !1,\n          exports: {}\n        };\n        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n      }\n\n      return n.m = t, n.c = e, n.d = function (t, e, r) {\n        n.o(t, e) || Object.defineProperty(t, e, {\n          enumerable: !0,\n          get: r\n        });\n      }, n.r = function (t) {\n        \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n          value: \"Module\"\n        }), Object.defineProperty(t, \"__esModule\", {\n          value: !0\n        });\n      }, n.t = function (t, e) {\n        if (1 & e && (t = n(t)), 8 & e) return t;\n        if (4 & e && \"object\" == typeof t && t && t.__esModule) return t;\n        var r = Object.create(null);\n        if (n.r(r), Object.defineProperty(r, \"default\", {\n          enumerable: !0,\n          value: t\n        }), 2 & e && \"string\" != typeof t) for (var o in t) n.d(r, o, function (e) {\n          return t[e];\n        }.bind(null, o));\n        return r;\n      }, n.n = function (t) {\n        var e = t && t.__esModule ? function () {\n          return t.default;\n        } : function () {\n          return t;\n        };\n        return n.d(e, \"a\", e), e;\n      }, n.o = function (t, e) {\n        return Object.prototype.hasOwnProperty.call(t, e);\n      }, n.p = \"\", n(n.s = 5);\n    }([function (t, e) {\n      t.exports = function (t) {\n        var e = [];\n        return e.toString = function () {\n          return this.map(function (e) {\n            var n = function (t, e) {\n              var n,\n                  r = t[1] || \"\",\n                  o = t[3];\n              if (!o) return r;\n\n              if (e && \"function\" == typeof btoa) {\n                var a = (n = o, \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + \" */\"),\n                    i = o.sources.map(function (t) {\n                  return \"/*# sourceURL=\" + o.sourceRoot + t + \" */\";\n                });\n                return [r].concat(i).concat([a]).join(\"\\n\");\n              }\n\n              return [r].join(\"\\n\");\n            }(e, t);\n\n            return e[2] ? \"@media \" + e[2] + \"{\" + n + \"}\" : n;\n          }).join(\"\");\n        }, e.i = function (t, n) {\n          \"string\" == typeof t && (t = [[null, t, \"\"]]);\n\n          for (var r = {}, o = 0; o < this.length; o++) {\n            var a = this[o][0];\n            \"number\" == typeof a && (r[a] = !0);\n          }\n\n          for (o = 0; o < t.length; o++) {\n            var i = t[o];\n            \"number\" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = \"(\" + i[2] + \") and (\" + n + \")\"), e.push(i));\n          }\n        }, e;\n      };\n    }, function (t, e, n) {\n      var r = n(3);\n      t.exports = \"string\" == typeof r ? r : r.toString();\n    }, function (t, e, n) {\n      var r = n(4);\n      t.exports = \"string\" == typeof r ? r : r.toString();\n    }, function (t, e, n) {\n      (t.exports = n(0)(!1)).push([t.i, \"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}\", \"\"]);\n    }, function (t, e, n) {\n      (t.exports = n(0)(!1)).push([t.i, '.bx-rotate-90{transform:rotate(90deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}', \"\"]);\n    }, function (t, e, n) {\n      \"use strict\";\n\n      n.r(e), n.d(e, \"BoxIconElement\", function () {\n        return g;\n      });\n\n      var r,\n          o,\n          a,\n          i,\n          s = n(1),\n          f = n.n(s),\n          c = n(2),\n          l = n.n(c),\n          m = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (t) {\n        return typeof t;\n      } : function (t) {\n        return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t;\n      },\n          u = function () {\n        function t(t, e) {\n          for (var n = 0; n < e.length; n++) {\n            var r = e[n];\n            r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);\n          }\n        }\n\n        return function (e, n, r) {\n          return n && t(e.prototype, n), r && t(e, r), e;\n        };\n      }(),\n          d = (o = (r = Object).getPrototypeOf || function (t) {\n        return t.__proto__;\n      }, a = r.setPrototypeOf || function (t, e) {\n        return t.__proto__ = e, t;\n      }, i = \"object\" === (\"undefined\" == typeof Reflect ? \"undefined\" : m(Reflect)) ? Reflect.construct : function (t, e, n) {\n        var r,\n            o = [null];\n        return o.push.apply(o, e), r = t.bind.apply(t, o), a(new r(), n.prototype);\n      }, function (t) {\n        var e = o(t);\n        return a(t, a(function () {\n          return i(e, arguments, o(this).constructor);\n        }, e));\n      }),\n          p = window,\n          b = {},\n          y = document.createElement(\"template\"),\n          h = function () {\n        return !!p.ShadyCSS;\n      };\n\n      y.innerHTML = '\\n<style>\\n:host {\\n  display: inline-block;\\n  font-size: initial;\\n  box-sizing: border-box;\\n  width: 24px;\\n  height: 24px;\\n}\\n:host([size=xs]) {\\n    width: 0.8rem;\\n    height: 0.8rem;\\n}\\n:host([size=sm]) {\\n    width: 1.55rem;\\n    height: 1.55rem;\\n}\\n:host([size=md]) {\\n    width: 2.25rem;\\n    height: 2.25rem;\\n}\\n:host([size=lg]) {\\n    width: 3.0rem;\\n    height: 3.0rem;\\n}\\n\\n:host([size]:not([size=\"\"]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\\n    width: auto;\\n    height: auto;\\n}\\n:host([pull=left]) #icon {\\n    float: left;\\n    margin-right: .3em!important;\\n}\\n:host([pull=right]) #icon {\\n    float: right;\\n    margin-left: .3em!important;\\n}\\n:host([border=square]) #icon {\\n    padding: .25em;\\n    border: .07em solid rgba(0,0,0,.1);\\n    border-radius: .25em;\\n}\\n:host([border=circle]) #icon {\\n    padding: .25em;\\n    border: .07em solid rgba(0,0,0,.1);\\n    border-radius: 50%;\\n}\\n#icon,\\nsvg {\\n  width: 100%;\\n  height: 100%;\\n}\\n#icon {\\n    box-sizing: border-box;\\n} \\n' + f.a + \"\\n\" + l.a + '\\n</style>\\n<div id=\"icon\"></div>';\n      var g = d(function (t) {\n        function e() {\n          !function (t, e) {\n            if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, e);\n\n          var t = function (t, e) {\n            if (!t) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n            return !e || \"object\" != typeof e && \"function\" != typeof e ? t : e;\n          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));\n\n          return t.$ui = t.attachShadow({\n            mode: \"open\"\n          }), t.$ui.appendChild(t.ownerDocument.importNode(y.content, !0)), h() && p.ShadyCSS.styleElement(t), t._state = {\n            $iconHolder: t.$ui.getElementById(\"icon\"),\n            type: t.getAttribute(\"type\")\n          }, t;\n        }\n\n        return function (t, e) {\n          if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function, not \" + typeof e);\n          t.prototype = Object.create(e && e.prototype, {\n            constructor: {\n              value: t,\n              enumerable: !1,\n              writable: !0,\n              configurable: !0\n            }\n          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);\n        }(e, HTMLElement), u(e, null, [{\n          key: \"getIconSvg\",\n          value: function (t, e) {\n            var n = this.cdnUrl + \"/regular/bx-\" + t + \".svg\";\n            return \"solid\" === e ? n = this.cdnUrl + \"/solid/bxs-\" + t + \".svg\" : \"logo\" === e && (n = this.cdnUrl + \"/logos/bxl-\" + t + \".svg\"), n && b[n] || (b[n] = new Promise(function (t, e) {\n              var r = new XMLHttpRequest();\n              r.addEventListener(\"load\", function () {\n                this.status < 200 || this.status >= 300 ? e(new Error(this.status + \" \" + this.responseText)) : t(this.responseText);\n              }), r.onerror = e, r.onabort = e, r.open(\"GET\", n), r.send();\n            })), b[n];\n          }\n        }, {\n          key: \"define\",\n          value: function (t) {\n            t = t || this.tagName, h() && p.ShadyCSS.prepareTemplate(y, t), customElements.define(t, this);\n          }\n        }, {\n          key: \"cdnUrl\",\n          get: function () {\n            return \"//unpkg.com/boxicons@2.1.1/svg\";\n          }\n        }, {\n          key: \"tagName\",\n          get: function () {\n            return \"box-icon\";\n          }\n        }, {\n          key: \"observedAttributes\",\n          get: function () {\n            return [\"type\", \"name\", \"color\", \"size\", \"rotate\", \"flip\", \"animation\", \"border\", \"pull\"];\n          }\n        }]), u(e, [{\n          key: \"attributeChangedCallback\",\n          value: function (t, e, n) {\n            var r = this._state.$iconHolder;\n\n            switch (t) {\n              case \"type\":\n                !function (t, e, n) {\n                  var r = t._state;\n                  r.$iconHolder.textContent = \"\", r.type && (r.type = null), r.type = !n || \"solid\" !== n && \"logo\" !== n ? \"regular\" : n, void 0 !== r.currentName && t.constructor.getIconSvg(r.currentName, r.type).then(function (t) {\n                    r.type === n && (r.$iconHolder.innerHTML = t);\n                  }).catch(function (t) {\n                    console.error(\"Failed to load icon: \" + r.currentName + \"\\n\" + t);\n                  });\n                }(this, 0, n);\n                break;\n\n              case \"name\":\n                !function (t, e, n) {\n                  var r = t._state;\n                  r.currentName = n, r.$iconHolder.textContent = \"\", n && void 0 !== r.type && t.constructor.getIconSvg(n, r.type).then(function (t) {\n                    r.currentName === n && (r.$iconHolder.innerHTML = t);\n                  }).catch(function (t) {\n                    console.error(\"Failed to load icon: \" + n + \"\\n\" + t);\n                  });\n                }(this, 0, n);\n                break;\n\n              case \"color\":\n                r.style.fill = n || \"\";\n                break;\n\n              case \"size\":\n                !function (t, e, n) {\n                  var r = t._state;\n                  r.size && (r.$iconHolder.style.width = r.$iconHolder.style.height = \"\", r.size = r.sizeType = null), n && !/^(xs|sm|md|lg)$/.test(r.size) && (r.size = n.trim(), r.$iconHolder.style.width = r.$iconHolder.style.height = r.size);\n                }(this, 0, n);\n                break;\n\n              case \"rotate\":\n                e && r.classList.remove(\"bx-rotate-\" + e), n && r.classList.add(\"bx-rotate-\" + n);\n                break;\n\n              case \"flip\":\n                e && r.classList.remove(\"bx-flip-\" + e), n && r.classList.add(\"bx-flip-\" + n);\n                break;\n\n              case \"animation\":\n                e && r.classList.remove(\"bx-\" + e), n && r.classList.add(\"bx-\" + n);\n            }\n          }\n        }, {\n          key: \"connectedCallback\",\n          value: function () {\n            h() && p.ShadyCSS.styleElement(this);\n          }\n        }]), e;\n      }());\n      e.default = g, g.define();\n    }]);\n  },  true ? module.exports = e() : 0;\n});\n\n//# sourceURL=webpack://capstone-2/./node_modules/boxicons/dist/boxicons.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boxicons */ \"./node_modules/boxicons/dist/boxicons.js\");\n/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_commectBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commectBtn.js */ \"./src/modules/commectBtn.js\");\n/* harmony import */ var _modules_homeCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/homeCounter.js */ \"./src/modules/homeCounter.js\");\n\n\n\n\n\n(0,_modules_commectBtn_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_homeCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://capstone-2/./src/index.js?");

/***/ }),

/***/ "./src/modules/commectBtn.js":
/*!***********************************!*\
  !*** ./src/modules/commectBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n\n\nconst overflo = document.querySelector('.container');\noverflo.classList.remove('container');\n\nconst commentBtnEvent = async () => {\n  await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const commentBtns = document.querySelectorAll('.comment-btn');\n  commentBtns.forEach(element => {\n    element.addEventListener('click', e => {\n      overflo.classList.add('container');\n      const idBtn = e.target.getAttribute('data-value');\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idBtn);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentBtnEvent);\n\n//# sourceURL=webpack://capstone-2/./src/modules/commectBtn.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getObj.js */ \"./src/modules/getObj.js\");\n\n\nasync function display() {\n  const meals = await _getObj_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const displaySection = document.querySelector('.meals');\n\n  for (let i = 0; i < meals.length; i += 1) {\n    const card = document.createElement('div');\n    card.classList.add('card');\n    card.innerHTML = `<img src=\"${meals[i].strMealThumb}\">\n                      <div class=\"cardTitle\">\n                      <h1>${meals[i].strMeal}</h1>\n                      <box-icon data-value=\"${meals[i].idMeal}\" class=\"heart\" name='heart'></box-icon>\n                      </div>\n                      <p data-value=\"${meals[i].idMeal}\" class=\"likes\">0 likes</p>\n                      <div class=\"btns\">\n                      <button data-value=\"${meals[i].idMeal}\" type=\"button\" class=\"comment-btn\">Comments</button>\n                      </div>\n    `;\n    displaySection.appendChild(card);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://capstone-2/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/getObj.js":
/*!*******************************!*\
  !*** ./src/modules/getObj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';\nconst getObj = new Promise(resolve => {\n  fetch(url).then(res => res.json()).then(data => {\n    resolve(data.meals);\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getObj);\n\n//# sourceURL=webpack://capstone-2/./src/modules/getObj.js?");

/***/ }),

/***/ "./src/modules/homeCounter.js":
/*!************************************!*\
  !*** ./src/modules/homeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getObj.js */ \"./src/modules/getObj.js\");\n\n\nconst homeCounter = async () => {\n  await _getObj_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const counterP = document.querySelector('.home-counter-p');\n  const cards = document.querySelectorAll('.card');\n  counterP.textContent = `look up for a total of ${cards.length} canadian meals`;\n  return cards.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeCounter);\n\n//# sourceURL=webpack://capstone-2/./src/modules/homeCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getObj.js */ \"./src/modules/getObj.js\");\n\nconst likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZsdppEqh4CnoIqF1n5yO/likes';\n\nasync function displayLikes() {\n  await _getObj_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const items = document.querySelectorAll('.heart');\n  const likesP = document.querySelectorAll('.likes');\n  fetch(likesUrl).then(res => res.json()).then(data => {\n    likesP.forEach(item => {\n      item.textContent = `${data.filter(obj => obj.item_id === item.getAttribute('data-value'))[0].likes} likes`;\n    });\n  }); // add like to api //\n\n  items.forEach(item => {\n    item.addEventListener('click', e => {\n      const id = e.target.getAttribute('data-value');\n      fetch(likesUrl, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: id\n        }),\n        headers: {\n          'content-type': 'application/json'\n        }\n      }).then(() => {\n        fetch(likesUrl).then(res => res.json()).then(data => {\n          data = data.filter(item => item.item_id === e.target.getAttribute('data-value'));\n          e.target.parentNode.nextSibling.nextSibling.innerHTML = `${data[0].likes} likes`;\n        });\n      });\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n//# sourceURL=webpack://capstone-2/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popUpCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUpCounter.js */ \"./src/modules/popUpCounter.js\");\n\nconst modalDiv = document.getElementById('modals');\n\nconst getItem = async id => {\n  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;\n  const response = await fetch(url);\n  const result = await response.json();\n  return result.meals[0];\n};\n\nconst createModal = async id => {\n  modalDiv.classList.remove('no-modal');\n  modalDiv.classList.add('modal');\n  const foodObj = await getItem(id);\n  const image = foodObj.strMealThumb;\n  const food = foodObj.strMeal;\n  const prep = [];\n  prep.push(foodObj.strInstructions);\n  const modalContent = document.createElement('div');\n  modalContent.classList.add('modal-content');\n  modalDiv.appendChild(modalContent);\n  const modalImg = document.createElement('div');\n  modalImg.classList.add('img-div');\n  modalContent.appendChild(modalImg);\n  const img = document.createElement('img');\n  img.setAttribute('src', image);\n  img.setAttribute('alt', food);\n  img.classList.add('modal-img');\n  modalImg.appendChild(img);\n  const nameDiv = document.createElement('div');\n  nameDiv.classList.add('food-name-div');\n  modalImg.appendChild(nameDiv);\n  const foodTitle = document.createElement('h2');\n  foodTitle.classList.add('food-title');\n  foodTitle.innerHTML = food;\n  nameDiv.appendChild(foodTitle);\n  const modalDetails = document.createElement('div');\n  modalDetails.classList.add('modal-details');\n  modalContent.appendChild(modalDetails);\n  const modalPrep = document.createElement('div');\n  modalPrep.classList.add('prep-div');\n  modalDetails.appendChild(modalPrep);\n  const preparation = document.createElement('h4');\n  preparation.classList.add('preparation-title');\n  preparation.innerText = 'Preparation';\n  modalPrep.appendChild(preparation);\n  const modalPreparation = document.createElement('div');\n  modalPreparation.classList.add('modal-prep');\n  modalPrep.appendChild(modalPreparation);\n  const prepStep = document.createElement('p');\n  prepStep.classList.add('prep');\n  [prepStep.innerText] = [prep];\n  modalPreparation.appendChild(prepStep);\n  const commentDiv = document.createElement('div');\n  commentDiv.classList.add('modal-comment-list-div');\n  modalDetails.appendChild(commentDiv);\n  const commentTitle = document.createElement('h4');\n  commentTitle.classList.add('comments-title');\n  commentDiv.appendChild(commentTitle);\n  (0,_popUpCounter_js__WEBPACK_IMPORTED_MODULE_0__.renderCounter)(commentTitle, id);\n  const commentList = document.createElement('div');\n  commentList.classList.add('modal-comment-list');\n  commentDiv.append(commentList);\n\n  const renderComments = async () => {\n    try {\n      const comments = await (0,_popUpCounter_js__WEBPACK_IMPORTED_MODULE_0__.commentsApi)(id);\n      comments.forEach(elem => {\n        const p = document.createElement('p');\n        p.classList.add('comments');\n        p.innerHTML = `${elem.username}: ${elem.comment}`;\n        commentList.appendChild(p);\n      });\n    } catch (err) {\n      const error = document.createElement('p');\n      error.innerHTML = 'Enter the first Comment!';\n      error.classList.add('comments');\n      commentList.appendChild(error);\n    }\n  };\n\n  renderComments();\n  const modalCommentForm = document.createElement('div');\n  modalCommentForm.classList.add('modal-comment');\n  modalContent.appendChild(modalCommentForm);\n  const nameInput = document.createElement('input');\n  nameInput.setAttribute('type', 'text');\n  nameInput.setAttribute('name', 'userName');\n  nameInput.setAttribute('id', 'userName');\n  nameInput.setAttribute('placeholder', 'Name');\n  nameInput.classList.add('comment-input');\n  modalCommentForm.appendChild(nameInput);\n  const commentInput = document.createElement('input');\n  commentInput.setAttribute('type', 'text');\n  commentInput.setAttribute('name', 'comment');\n  commentInput.setAttribute('id', 'comment');\n  commentInput.setAttribute('placeholder', 'Comment');\n  commentInput.classList.add('comment-input');\n  modalCommentForm.appendChild(commentInput);\n  const submitBtn = document.createElement('input');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.setAttribute('name', 'submit');\n  submitBtn.setAttribute('id', 'submit');\n  submitBtn.setAttribute('value', 'Submit');\n  submitBtn.classList.add('submit-btn');\n  modalCommentForm.appendChild(submitBtn);\n  submitBtn.addEventListener('click', async () => {\n    const postComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YVelr1C6jXi1hzKriDIQ/comments';\n    await fetch(postComments, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: nameInput.value,\n        comment: commentInput.value\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    });\n    commentList.innerHTML = '';\n    (0,_popUpCounter_js__WEBPACK_IMPORTED_MODULE_0__.renderCounter)(commentTitle, id);\n    renderComments();\n    nameInput.value = '';\n    commentInput.value = '';\n  });\n  const overflo = document.querySelector('.container');\n  const closeBtn = document.createElement('p');\n  closeBtn.innerHTML = '&#x2715';\n  closeBtn.classList.add('closeBtn');\n  modalContent.appendChild(closeBtn);\n  closeBtn.addEventListener('click', () => {\n    modalDiv.classList.add('no-modal');\n    modalDiv.classList.remove('modal');\n    overflo.classList.remove('container');\n    modalDiv.innerHTML = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);\n\n//# sourceURL=webpack://capstone-2/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/popUpCounter.js":
/*!*************************************!*\
  !*** ./src/modules/popUpCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentsApi\": () => (/* binding */ commentsApi),\n/* harmony export */   \"renderCounter\": () => (/* binding */ renderCounter)\n/* harmony export */ });\nconst commentsApi = async id => {\n  const comments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YVelr1C6jXi1hzKriDIQ/comments?item_id=${id}`;\n  const response = await fetch(comments);\n  const result = await response.json();\n  return result;\n};\n\nconst counterComment = async id => {\n  const comments = await commentsApi(id);\n  return comments.length;\n};\n\nconst renderCounter = async (element, id) => {\n  const numberCounter = await counterComment(id);\n  element.innerHTML = `(${numberCounter}) Comments`;\n};\n\n\n\n//# sourceURL=webpack://capstone-2/./src/modules/popUpCounter.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./food.svg */ \"./src/food.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Comforter&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quintessential&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Quintessential', cursive;\\n}\\n\\n.container {\\n  overflow: hidden;\\n}\\n\\n.meals {\\n  display: flex;\\n  width: 100%;\\n  height: auto;\\n  gap: 50px;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.card {\\n  min-width: 23vw;\\n  max-width: 24vw;\\n  min-height: 60vh;\\n  max-height: 61vh;\\n  display: flex;\\n  flex-direction: column;\\n  border: 4px solid #f37a5d;\\n  border-radius: 5%;\\n  padding: 10px;\\n}\\n\\n.card > img {\\n  margin: 5px auto;\\n  border-radius: 5px;\\n  width: 95%;\\n  height: 35vh;\\n}\\n\\n.cardTitle {\\n  font-size: 12px;\\n  padding: 5px 20px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.likes {\\n  width: 96%;\\n  text-align: end;\\n  font-family: 'Open Sans', sans-serif;\\n  font-weight: bold;\\n  font-size: 12px;\\n  margin-bottom: 10px;\\n}\\n\\n.comment-btn {\\n  background-color: #fff;\\n  font-weight: bold;\\n  width: 80%;\\n  height: 40px;\\n  border: 3px solid #f37a5d;\\n  border-radius: 5px;\\n}\\n\\n.comment-btn:hover {\\n  cursor: pointer;\\n  box-shadow: 1px 1px 14px -2px rgba(243, 122, 93, 1);\\n  -webkit-box-shadow: 1px 1px 14px -2px rgba(243, 122, 93, 1);\\n  -moz-box-shadow: 1px 1px 14px -2px rgba(243, 122, 93, 1);\\n}\\n\\n.heart:hover {\\n  cursor: pointer;\\n}\\n\\n.btns {\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.no-modal {\\n  display: none;\\n}\\n\\n.modal {\\n  display: inline;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-content {\\n  overflow: auto;\\n  height: 82vh;\\n  width: 620px;\\n  margin: 100px auto;\\n  position: relative;\\n  background-color: #f37a5d;\\n  border-radius: 5% 0 0 5%;\\n}\\n\\n.img-div {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.modal-img {\\n  max-width: 400px;\\n  max-height: 400px;\\n  border-radius: 10px;\\n  box-shadow: 10px 5px 5px white;\\n  margin-top: 2rem;\\n}\\n\\n.food-title {\\n  margin-top: 25px;\\n  color: white;\\n}\\n\\n.preparation-title {\\n  color: white;\\n  margin-left: 6rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.comments-title {\\n  color: white;\\n  margin-right: 1rem;\\n  margin-top: 2rem;\\n}\\n\\n.closeBtn {\\n  position: absolute;\\n  font-size: 25px;\\n  top: 15px;\\n  right: 20px;\\n  color: white;\\n  cursor: pointer;\\n}\\n\\n.modal-details {\\n  margin-top: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  align-self: center;\\n  text-align: center;\\n  justify-content: center;\\n  margin-left: 0.8rem;\\n}\\n\\n.modal-comment-list {\\n  max-height: 150px;\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n  overflow: auto;\\n  background-color: white;\\n  border-radius: 5px;\\n  width: 300px;\\n  height: 100px;\\n  margin-left: 10rem;\\n}\\n\\n.modal-comment {\\n  display: flex;\\n  flex-direction: column;\\n  width: 45%;\\n  margin-left: 11rem;\\n}\\n\\n.prep-div {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 3rem;\\n  max-width: 400px;\\n}\\n\\n.modal-prep {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  max-height: 110px;\\n  width: 500px;\\n  overflow: auto;\\n  background-color: rgba(241, 241, 241, 1);\\n  border-radius: 2px;\\n}\\n\\n.prep {\\n  background-color: white;\\n  text-align: center;\\n}\\n\\n.comments {\\n  background-color: white;\\n  display: flex;\\n}\\n\\n.comments:nth-child(odd) {\\n  background-color: rgba(242, 216, 192, 0.981);\\n}\\n\\n.comment-input {\\n  border-radius: 5px;\\n  text-align: center;\\n  margin: 5px auto;\\n  height: 20px;\\n  width: 200px;\\n}\\n\\n.submit-btn {\\n  width: 25%;\\n  margin: 15px auto 20px;\\n  font-weight: bold;\\n  border-radius: 5px;\\n  color: white;\\n  text-decoration: none;\\n  padding: 10px;\\n  border: none;\\n  background-color: black;\\n}\\n\\n.submit-btn:hover {\\n  color: rgba(238, 227, 216, 0.749);\\n  background-color: rgb(48, 48, 48);\\n}\\n\\n.counter-cont {\\n  text-align: center;\\n  margin: 25px 0;\\n  font-size: 25px;\\n}\\n\\nfooter {\\n  width: 100%;\\n  background: #f37a5d;\\n  text-align: center;\\n  font-weight: bold;\\n  line-height: 20px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 5px 5px 0 0;\\n  height: 70px;\\n  margin-top: 20px;\\n}\\n\\nfooter > div {\\n  display: flex;\\n  justify-content: center;\\n  gap: 20px;\\n  color: #fff;\\n}\\n\\nheader {\\n  width: 90%;\\n  margin: auto;\\n  height: 80px;\\n  display: flex;\\n  gap: 50px;\\n  justify-content: start;\\n  align-items: center;\\n  border-bottom: 2px solid #f37a5d;\\n  margin-bottom: 40px;\\n}\\n\\n.logo-img {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center;\\n  background-size: 100% 100%;\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.logo {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: #f37a5d;\\n  font-size: 25px;\\n  gap: 10px;\\n  text-decoration: none;\\n  font-weight: bold;\\n  font-family: 'Comforter', cursive;\\n}\\n\\n.home-counter-p {\\n  font-size: 20px;\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/food.svg":
/*!**********************!*\
  !*** ./src/food.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"681f95f7f077d3142956.svg\";\n\n//# sourceURL=webpack://capstone-2/./src/food.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;