(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  /*! pace 0.5.3 */
  (function () {
    var txt = document.querySelector("[data-pace-title]").getAttribute("data-pace-title");

    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        _u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W = [].slice,
        X = {}.hasOwnProperty,
        Y = function Y(a, b) {
      function c() {
        this.constructor = a;
      }

      for (var d in b) {
        X.call(b, d) && (a[d] = b[d]);
      }

      return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
    },
        Z = [].indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) {
        if (b in this && this[b] === a) return b;
      }

      return -1;
    };

    for (t = {
      catchupTime: 500,
      initialRate: .03,
      minTime: 500,
      ghostTime: 500,
      maxProgressPerFrame: 10,
      easeFactor: 1.25,
      startOnPageLoad: !0,
      restartOnPushState: !0,
      restartOnRequestAfter: 500,
      target: "body",
      elements: {
        checkInterval: 100,
        selectors: ["body"]
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ["GET"],
        trackWebSockets: !0,
        ignoreURLs: []
      }
    }, B = function B() {
      var a;
      return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
    }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function D(a) {
      return setTimeout(a, 50);
    }, s = function s(a) {
      return clearTimeout(a);
    }), F = function F(a) {
      var b, _c;

      return b = B(), (_c = function c() {
        var d;
        return d = B() - b, d >= 33 ? (b = B(), a(d, function () {
          return D(_c);
        })) : setTimeout(_c, 33 - d);
      })();
    }, E = function E() {
      var a, b, c;
      return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? W.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
    }, _u = function u() {
      var a, b, c, d, e, f, g;

      for (b = arguments[0], d = 2 <= arguments.length ? W.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
        if (c = d[f]) for (a in c) {
          X.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _u(b[a], e) : b[a] = e);
        }
      }

      return b;
    }, p = function p(a) {
      var b, c, d, e, f;

      for (c = b = 0, e = 0, f = a.length; f > e; e++) {
        d = a[e], c += Math.abs(d), b++;
      }

      return c / b;
    }, w = function w(a, b) {
      var c, d, e;

      if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
        if (c = e.getAttribute("data-pace-" + a), !b) return c;

        try {
          return JSON.parse(c);
        } catch (f) {
          return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
        }
      }
    }, g = function () {
      function a() {}

      return a.prototype.on = function (a, b, c, d) {
        var e;
        return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
          handler: b,
          ctx: c,
          once: d
        });
      }, a.prototype.once = function (a, b, c) {
        return this.on(a, b, c, !0);
      }, a.prototype.off = function (a, b) {
        var c, d, e;

        if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
          if (null == b) return delete this.bindings[a];

          for (c = 0, e = []; c < this.bindings[a].length;) {
            e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
          }

          return e;
        }
      }, a.prototype.trigger = function () {
        var a, b, c, d, e, f, g, h, i;

        if (c = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
          for (e = 0, i = []; e < this.bindings[c].length;) {
            h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
          }

          return i;
        }
      }, a;
    }(), null == window.Pace && (window.Pace = {}), _u(Pace, g.prototype), C = Pace.options = _u({}, t, window.paceOptions, w()), T = ["ajax", "document", "eventLag", "elements"], P = 0, R = T.length; R > P; P++) {
      J = T[P], C[J] === !0 && (C[J] = t[J]);
    }

    i = function (a) {
      function b() {
        return U = b.__super__.constructor.apply(this, arguments);
      }

      return Y(b, a), b;
    }(Error), b = function () {
      function a() {
        this.progress = 0;
      }

      return a.prototype.getElement = function () {
        var a;

        if (null == this.el) {
          if (a = document.querySelector(C.target), !a) throw new i();
          this.el = document.createElement("div"), this.el.setAttribute('data-title', txt), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
        }

        return this.el;
      }, a.prototype.finish = function () {
        var a;
        return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
      }, a.prototype.update = function (a) {
        return this.progress = a, this.render();
      }, a.prototype.destroy = function () {
        try {
          this.getElement().parentNode.removeChild(this.getElement());
        } catch (a) {
          i = a;
        }

        return this.el = void 0;
      }, a.prototype.render = function () {
        var a, b;
        return null == document.querySelector(C.target) ? !1 : (a = this.getElement(), a.children[0].style.height = "" + (100 - this.progress) + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress);
      }, a.prototype.done = function () {
        return this.progress >= 100;
      }, a;
    }(), h = function () {
      function a() {
        this.bindings = {};
      }

      return a.prototype.trigger = function (a, b) {
        var c, d, e, f, g;

        if (null != this.bindings[a]) {
          for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
            c = f[d], g.push(c.call(this, b));
          }

          return g;
        }
      }, a.prototype.on = function (a, b) {
        var c;
        return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
      }, a;
    }(), O = window.XMLHttpRequest, N = window.XDomainRequest, M = window.WebSocket, v = function v(a, b) {
      var d, e, f;
      f = [];

      for (d in b.prototype) {
        try {
          e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
        } catch (g) {
        }
      }

      return f;
    }, z = [], Pace.ignore = function () {
      var a, b, c;
      return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("ignore"), c = b.apply(null, a), z.shift(), c;
    }, Pace.track = function () {
      var a, b, c;
      return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("track"), c = b.apply(null, a), z.shift(), c;
    }, I = function I(a) {
      var b;
      if (null == a && (a = "GET"), "track" === z[0]) return "force";

      if (!z.length && C.ajax) {
        if ("socket" === a && C.ajax.trackWebSockets) return !0;
        if (b = a.toUpperCase(), Z.call(C.ajax.trackMethods, b) >= 0) return !0;
      }

      return !1;
    }, j = function (a) {
      function b() {
        var a,
            c = this;
        b.__super__.constructor.apply(this, arguments), a = function a(_a) {
          var b;
          return b = _a.open, _a.open = function (d, e) {
            return I(d) && c.trigger("request", {
              type: d,
              url: e,
              request: _a
            }), b.apply(_a, arguments);
          };
        }, window.XMLHttpRequest = function (b) {
          var c;
          return c = new O(b), a(c), c;
        }, v(window.XMLHttpRequest, O), null != N && (window.XDomainRequest = function () {
          var b;
          return b = new N(), a(b), b;
        }, v(window.XDomainRequest, N)), null != M && C.ajax.trackWebSockets && (window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new M(a, b) : new M(a), I("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d;
        }, v(window.WebSocket, M));
      }

      return Y(b, a), b;
    }(h), Q = null, x = function x() {
      return null == Q && (Q = new j()), Q;
    }, H = function H(a) {
      var b, c, d, e;

      for (e = C.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
        if (b = e[c], "string" == typeof b) {
          if (-1 !== a.indexOf(b)) return !0;
        } else if (b.test(a)) return !0;
      }

      return !1;
    }, x().on("request", function (b) {
      var c, d, e, f, g;
      return f = b.type, e = b.request, g = b.url, H(g) ? void 0 : Pace.running || C.restartOnRequestAfter === !1 && "force" !== I(f) ? void 0 : (d = arguments, c = C.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
        var b, c, g, h, i, j;

        if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
          for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
            if (J = i[c], J instanceof a) {
              J.watch.apply(J, d);
              break;
            }

            j.push(void 0);
          }

          return j;
        }
      }, c));
    }), a = function () {
      function a() {
        var a = this;
        this.elements = [], x().on("request", function () {
          return a.watch.apply(a, arguments);
        });
      }

      return a.prototype.watch = function (a) {
        var b, c, d, e;
        return d = a.type, b = a.request, e = a.url, H(e) ? void 0 : (c = "socket" === d ? new m(b) : new n(b), this.elements.push(c));
      }, a;
    }(), n = function () {
      function a(a) {
        var b,
            d,
            e,
            f,
            g,
            h = this;
        if (this.progress = 0, null != window.ProgressEvent) for (a.addEventListener("progress", function (a) {
          return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
        }), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
          b = g[d], a.addEventListener(b, function () {
            return h.progress = 100;
          });
        } else f = a.onreadystatechange, a.onreadystatechange = function () {
          var b;
          return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
        };
      }

      return a;
    }(), m = function () {
      function a(a) {
        var b,
            c,
            d,
            e,
            f = this;

        for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
          b = e[c], a.addEventListener(b, function () {
            return f.progress = 100;
          });
        }
      }

      return a;
    }(), d = function () {
      function a(a) {
        var b, c, d, f;

        for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
          b = f[c], this.elements.push(new e(b));
        }
      }

      return a;
    }(), e = function () {
      function a(a) {
        this.selector = a, this.progress = 0, this.check();
      }

      return a.prototype.check = function () {
        var a = this;
        return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
          return a.check();
        }, C.elements.checkInterval);
      }, a.prototype.done = function () {
        return this.progress = 100;
      }, a;
    }(), c = function () {
      function a() {
        var a,
            b,
            c = this;
        this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
          return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
        };
      }

      return a.prototype.states = {
        loading: 0,
        interactive: 50,
        complete: 100
      }, a;
    }(), f = function () {
      function a() {
        var a,
            b,
            c,
            d,
            e,
            f = this;
        this.progress = 0, a = 0, e = [], d = 0, c = B(), b = setInterval(function () {
          var g;
          return g = B() - c - 50, c = B(), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), a = p(e), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
        }, 50);
      }

      return a;
    }(), l = function () {
      function a(a) {
        this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress"));
      }

      return a.prototype.tick = function (a, b) {
        var c;
        return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, C.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
      }, a;
    }(), K = null, G = null, q = null, L = null, o = null, r = null, Pace.running = !1, y = function y() {
      return C.restartOnPushState ? Pace.restart() : void 0;
    }, null != window.history.pushState && (S = window.history.pushState, window.history.pushState = function () {
      return y(), S.apply(window.history, arguments);
    }), null != window.history.replaceState && (V = window.history.replaceState, window.history.replaceState = function () {
      return y(), V.apply(window.history, arguments);
    }), k = {
      ajax: a,
      elements: d,
      document: c,
      eventLag: f
    }, (A = function A() {
      var a, c, d, e, f, g, h, i;

      for (Pace.sources = K = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
        a = g[c], C[a] !== !1 && K.push(new k[a](C[a]));
      }

      for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
        J = i[d], K.push(new J(C));
      }

      return Pace.bar = q = new b(), G = [], L = new l();
    })(), Pace.stop = function () {
      return Pace.trigger("stop"), Pace.running = !1, q.destroy(), r = !0, null != o && ("function" == typeof s && s(o), o = null), A();
    }, Pace.restart = function () {
      return Pace.trigger("restart"), Pace.stop(), Pace.start();
    }, Pace.go = function () {
      var a;
      return Pace.running = !0, q.render(), a = B(), r = !1, o = F(function (b, c) {
        var d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;

        for (k = 100 - q.progress, e = o = 0, f = !0, i = p = 0, t = K.length; t > p; i = ++p) {
          for (J = K[i], n = null != G[i] ? G[i] : G[i] = [], h = null != (v = J.elements) ? v : [J], j = s = 0, u = h.length; u > s; j = ++s) {
            g = h[j], m = null != n[j] ? n[j] : n[j] = new l(g), f &= m.done, m.done || (e++, o += m.tick(b));
          }
        }

        return d = o / e, q.update(L.tick(b, d)), q.done() || f || r ? (q.update(100), Pace.trigger("done"), setTimeout(function () {
          return q.finish(), Pace.running = !1, Pace.trigger("hide");
        }, Math.max(C.ghostTime, Math.max(C.minTime - (B() - a), 0)))) : c();
      });
    }, Pace.start = function (a) {
      _u(C, a), Pace.running = !0;

      try {
        q.render();
      } catch (b) {
        i = b;
      }

      return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
    }, "function" == typeof define && define.amd ? define(function () {
      return Pace;
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = Pace : C.startOnPageLoad && Pace.start();
  }).call(undefined);

  document.documentElement.classList.remove('no-js');
  window.paceOptions = {
    ajax: false,
    document: false,
    eventLag: false,
    elements: false
  };

  /**
   * Swiper 4.5.0
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * http://www.idangero.us/swiper/
   *
   * Copyright 2014-2019 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: February 22, 2019
   */
  !function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
  }(undefined, function () {

    var f = "undefined" == typeof document ? {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      location: {
        hash: ""
      }
    } : document,
        J = "undefined" == typeof window ? {
      document: f,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {}
    } : window,
        l = function l(e) {
      for (var t = 0; t < e.length; t += 1) {
        this[t] = e[t];
      }

      return this.length = e.length, this;
    };

    function L(e, t) {
      var a = [],
          i = 0;
      if (e && !t && e instanceof l) return e;
      if (e) if ("string" == typeof e) {
        var s,
            r,
            n = e.trim();

        if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
          var o = "div";

          for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) {
            a.push(r.childNodes[i]);
          }
        } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) {
          s[i] && a.push(s[i]);
        }
      } else if (e.nodeType || e === J || e === f) a.push(e);else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) {
        a.push(e[i]);
      }
      return new l(a);
    }

    function r(e) {
      for (var t = [], a = 0; a < e.length; a += 1) {
        -1 === t.indexOf(e[a]) && t.push(e[a]);
      }

      return t;
    }

    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
      addClass: function addClass(e) {
        if (void 0 === e) return this;

        for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
          for (var i = 0; i < this.length; i += 1) {
            void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
          }
        }

        return this;
      },
      removeClass: function removeClass(e) {
        for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
          for (var i = 0; i < this.length; i += 1) {
            void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
          }
        }

        return this;
      },
      hasClass: function hasClass(e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function toggleClass(e) {
        for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
          for (var i = 0; i < this.length; i += 1) {
            void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
          }
        }

        return this;
      },
      attr: function attr(e, t) {
        var a = arguments;
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var i = 0; i < this.length; i += 1) {
          if (2 === a.length) this[i].setAttribute(e, t);else for (var s in e) {
            this[i][s] = e[s], this[i].setAttribute(s, e[s]);
          }
        }

        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].removeAttribute(e);
        }

        return this;
      },
      data: function data(e, t) {
        var a;

        if (void 0 !== t) {
          for (var i = 0; i < this.length; i += 1) {
            (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
          }

          return this;
        }

        if (a = this[0]) {
          if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
          var s = a.getAttribute("data-" + e);
          return s || void 0;
        }
      },
      transform: function transform(e) {
        for (var t = 0; t < this.length; t += 1) {
          var a = this[t].style;
          a.webkitTransform = e, a.transform = e;
        }

        return this;
      },
      transition: function transition(e) {
        "string" != typeof e && (e += "ms");

        for (var t = 0; t < this.length; t += 1) {
          var a = this[t].style;
          a.webkitTransitionDuration = e, a.transitionDuration = e;
        }

        return this;
      },
      on: function on() {
        for (var e, t = [], a = arguments.length; a--;) {
          t[a] = arguments[a];
        }

        var i = t[0],
            r = t[1],
            n = t[2],
            s = t[3];

        function o(e) {
          var t = e.target;

          if (t) {
            var a = e.target.dom7EventData || [];
            if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) {
              L(i[s]).is(r) && n.apply(i[s], a);
            }
          }
        }

        function l(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }

        "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);

        for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
          var u = this[c];
          if (r) for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
              listener: n,
              proxyListener: o
            }), u.addEventListener(h, o, s);
          } else for (d = 0; d < p.length; d += 1) {
            var v = p[d];
            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
              listener: n,
              proxyListener: l
            }), u.addEventListener(v, l, s);
          }
        }

        return this;
      },
      off: function off() {
        for (var e, t = [], a = arguments.length; a--;) {
          t[a] = arguments[a];
        }

        var i = t[0],
            s = t[1],
            r = t[2],
            n = t[3];
        "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);

        for (var o = i.split(" "), l = 0; l < o.length; l += 1) {
          for (var d = o[l], p = 0; p < this.length; p += 1) {
            var c = this[p],
                u = void 0;
            if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
              var v = u[h];
              r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
            }
          }
        }

        return this;
      },
      trigger: function trigger() {
        for (var e = [], t = arguments.length; t--;) {
          e[t] = arguments[t];
        }

        for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) {
          for (var r = a[s], n = 0; n < this.length; n += 1) {
            var o = this[n],
                l = void 0;

            try {
              l = new J.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0
              });
            } catch (e) {
              (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i;
            }

            o.dom7EventData = e.filter(function (e, t) {
              return 0 < t;
            }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
          }
        }

        return this;
      },
      transitionEnd: function transitionEnd(t) {
        var a,
            i = ["webkitTransitionEnd", "transitionend"],
            s = this;

        function r(e) {
          if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) {
            s.off(i[a], r);
          }
        }

        if (t) for (a = 0; a < i.length; a += 1) {
          s.on(i[a], r);
        }
        return this;
      },
      outerWidth: function outerWidth(e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function outerHeight(e) {
        if (0 < this.length) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      offset: function offset() {
        if (0 < this.length) {
          var e = this[0],
              t = e.getBoundingClientRect(),
              a = f.body,
              i = e.clientTop || a.clientTop || 0,
              s = e.clientLeft || a.clientLeft || 0,
              r = e === J ? J.scrollY : e.scrollTop,
              n = e === J ? J.scrollX : e.scrollLeft;
          return {
            top: t.top + r - i,
            left: t.left + n - s
          };
        }

        return null;
      },
      css: function css(e, t) {
        var a;

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1) {
              for (var i in e) {
                this[a].style[i] = e[i];
              }
            }

            return this;
          }

          if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) {
            this[a].style[e] = t;
          }

          return this;
        }

        return this;
      },
      each: function each(e) {
        if (!e) return this;

        for (var t = 0; t < this.length; t += 1) {
          if (!1 === e.call(this[t], t, this[t])) return this;
        }

        return this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

        for (var t = 0; t < this.length; t += 1) {
          this[t].innerHTML = e;
        }

        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].textContent = e;
        }

        return this;
      },
      is: function is(e) {
        var t,
            a,
            i = this[0];
        if (!i || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);

          for (t = L(e), a = 0; a < t.length; a += 1) {
            if (t[a] === i) return !0;
          }

          return !1;
        }

        if (e === f) return i === f;
        if (e === J) return i === J;

        if (e.nodeType || e instanceof l) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
            if (t[a] === i) return !0;
          }

          return !1;
        }

        return !1;
      },
      index: function index() {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) {
            1 === t.nodeType && (e += 1);
          }

          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t,
            a = this.length;
        return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]);
      },
      append: function append() {
        for (var e, t = [], a = arguments.length; a--;) {
          t[a] = arguments[a];
        }

        for (var i = 0; i < t.length; i += 1) {
          e = t[i];

          for (var s = 0; s < this.length; s += 1) {
            if ("string" == typeof e) {
              var r = f.createElement("div");

              for (r.innerHTML = e; r.firstChild;) {
                this[s].appendChild(r.firstChild);
              }
            } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) {
              this[s].appendChild(e[n]);
            } else this[s].appendChild(e);
          }
        }

        return this;
      },
      prepend: function prepend(e) {
        var t, a;

        for (t = 0; t < this.length; t += 1) {
          if ("string" == typeof e) {
            var i = f.createElement("div");

            for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) {
              this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
            }
          } else if (e instanceof l) for (a = 0; a < e.length; a += 1) {
            this[t].insertBefore(e[a], this[t].childNodes[0]);
          } else this[t].insertBefore(e, this[t].childNodes[0]);
        }

        return this;
      },
      next: function next(e) {
        return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
      },
      nextAll: function nextAll(e) {
        var t = [],
            a = this[0];
        if (!a) return new l([]);

        for (; a.nextElementSibling;) {
          var i = a.nextElementSibling;
          e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
        }

        return new l(t);
      },
      prev: function prev(e) {
        if (0 < this.length) {
          var t = this[0];
          return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
        }

        return new l([]);
      },
      prevAll: function prevAll(e) {
        var t = [],
            a = this[0];
        if (!a) return new l([]);

        for (; a.previousElementSibling;) {
          var i = a.previousElementSibling;
          e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
        }

        return new l(t);
      },
      parent: function parent(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
        }

        return L(r(t));
      },
      parents: function parents(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          for (var i = this[a].parentNode; i;) {
            e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
          }
        }

        return L(r(t));
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
            t.push(i[s]);
          }
        }

        return new l(t);
      },
      children: function children(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) {
            e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
          }
        }

        return new l(r(t));
      },
      remove: function remove() {
        for (var e = 0; e < this.length; e += 1) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }

        return this;
      },
      add: function add() {
        for (var e = [], t = arguments.length; t--;) {
          e[t] = arguments[t];
        }

        var a, i;

        for (a = 0; a < e.length; a += 1) {
          var s = L(e[a]);

          for (i = 0; i < s.length; i += 1) {
            this[this.length] = s[i], this.length += 1;
          }
        }

        return this;
      },
      styles: function styles() {
        return this[0] ? J.getComputedStyle(this[0], null) : {};
      }
    };
    Object.keys(t).forEach(function (e) {
      L.fn[e] = t[e];
    });

    var e,
        a,
        i,
        s,
        ee = {
      deleteProps: function deleteProps(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}

          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function nextTick(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(e, t) {
        var a, i, s;
        void 0 === t && (t = "x");
        var r = J.getComputedStyle(e, null);
        return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
      },
      parseUrlQuery: function parseUrlQuery(e) {
        var t,
            a,
            i,
            s,
            r = {},
            n = e || J.location.href;
        if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
          return "" !== e;
        })).length, t = 0; t < s; t += 1) {
          i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
        }
        return r;
      },
      isObject: function isObject(e) {
        return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
      },
      extend: function extend() {
        for (var e = [], t = arguments.length; t--;) {
          e[t] = arguments[t];
        }

        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
            var l = r[n],
                d = Object.getOwnPropertyDescriptor(s, l);
            void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l]);
          }
        }

        return a;
      }
    },
        te = (i = f.createElement("div"), {
      touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
      pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
      prefixedPointerEvents: !!J.navigator.msPointerEnabled,
      transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
      transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
      flexbox: function () {
        for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) {
          if (t[a] in e) return !0;
        }

        return !1;
      }(),
      observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
      passiveListener: function () {
        var e = !1;

        try {
          var t = Object.defineProperty({}, "passive", {
            get: function get() {
              e = !0;
            }
          });
          J.addEventListener("testPassiveListener", null, t);
        } catch (e) {}

        return e;
      }(),
      gestures: "ongesturestart" in J
    }),
        I = {
      isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
      isEdge: !!J.navigator.userAgent.match(/Edge/g),
      isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    },
        n = function n(e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    },
        o = {
      components: {
        configurable: !0
      }
    };

    n.prototype.on = function (e, t, a) {
      var i = this;
      if ("function" != typeof t) return i;
      var s = a ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
      }), i;
    }, n.prototype.once = function (a, i, e) {
      var s = this;
      if ("function" != typeof i) return s;

      function r() {
        for (var e = [], t = arguments.length; t--;) {
          e[t] = arguments[t];
        }

        i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
      }

      return r.f7proxy = i, s.on(a, r, e);
    }, n.prototype.off = function (e, i) {
      var s = this;
      return s.eventsListeners && e.split(" ").forEach(function (a) {
        void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
          (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1);
        });
      }), s;
    }, n.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      var a,
          i,
          s,
          r = this;
      return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
        if (r.eventsListeners && r.eventsListeners[e]) {
          var t = [];
          r.eventsListeners[e].forEach(function (e) {
            t.push(e);
          }), t.forEach(function (e) {
            e.apply(s, i);
          });
        }
      })), r;
    }, n.prototype.useModulesParams = function (a) {
      var i = this;
      i.modules && Object.keys(i.modules).forEach(function (e) {
        var t = i.modules[e];
        t.params && ee.extend(a, t.params);
      });
    }, n.prototype.useModules = function (i) {
      void 0 === i && (i = {});
      var s = this;
      s.modules && Object.keys(s.modules).forEach(function (e) {
        var a = s.modules[e],
            t = i[e] || {};
        a.instance && Object.keys(a.instance).forEach(function (e) {
          var t = a.instance[e];
          s[e] = "function" == typeof t ? t.bind(s) : t;
        }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
          s.on(e, a.on[e]);
        }), a.create && a.create.bind(s)(t);
      });
    }, o.components.set = function (e) {
      this.use && this.use(e);
    }, n.installModule = function (t) {
      for (var e = [], a = arguments.length - 1; 0 < a--;) {
        e[a] = arguments[a + 1];
      }

      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
      return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
        i.prototype[e] = t.proto[e];
      }), t.static && Object.keys(t.static).forEach(function (e) {
        i[e] = t.static[e];
      }), t.install && t.install.apply(i, e), i;
    }, n.use = function (e) {
      for (var t = [], a = arguments.length - 1; 0 < a--;) {
        t[a] = arguments[a + 1];
      }

      var i = this;
      return Array.isArray(e) ? (e.forEach(function (e) {
        return i.installModule(e);
      }), i) : i.installModule.apply(i, [e].concat(t));
    }, Object.defineProperties(n, o);
    var d = {
      updateSize: function updateSize() {
        var e,
            t,
            a = this,
            i = a.$el;
        e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = this,
            t = e.params,
            a = e.$wrapperEl,
            i = e.size,
            s = e.rtlTranslate,
            r = e.wrongRTL,
            n = e.virtual && t.virtual.enabled,
            o = n ? e.virtual.slides.length : e.slides.length,
            l = a.children("." + e.params.slideClass),
            d = n ? e.virtual.slides.length : l.length,
            p = [],
            c = [],
            u = [],
            h = t.slidesOffsetBefore;
        "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
        var v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
        var f = e.snapGrid.length,
            m = e.snapGrid.length,
            g = t.spaceBetween,
            b = -h,
            w = 0,
            y = 0;

        if (void 0 !== i) {
          var x, T;
          "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
            marginLeft: "",
            marginTop: ""
          }) : l.css({
            marginRight: "",
            marginBottom: ""
          }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));

          for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
            T = 0;
            var P = l.eq(z);

            if (1 < t.slidesPerColumn) {
              var k = void 0,
                  $ = void 0,
                  L = void 0;
              "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
                "-webkit-box-ordinal-group": k,
                "-moz-box-ordinal-group": k,
                "-ms-flex-order": k,
                "-webkit-order": k,
                order: k
              })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L);
            }

            if ("none" !== P.css("display")) {
              if ("auto" === t.slidesPerView) {
                var I = J.getComputedStyle(P[0], null),
                    D = P[0].style.transform,
                    O = P[0].style.webkitTransform;
                if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);else if (e.isHorizontal()) {
                  var A = parseFloat(I.getPropertyValue("width")),
                      H = parseFloat(I.getPropertyValue("padding-left")),
                      N = parseFloat(I.getPropertyValue("padding-right")),
                      G = parseFloat(I.getPropertyValue("margin-left")),
                      B = parseFloat(I.getPropertyValue("margin-right")),
                      X = I.getPropertyValue("box-sizing");
                  T = X && "border-box" === X ? A + G + B : A + H + N + G + B;
                } else {
                  var Y = parseFloat(I.getPropertyValue("height")),
                      V = parseFloat(I.getPropertyValue("padding-top")),
                      F = parseFloat(I.getPropertyValue("padding-bottom")),
                      R = parseFloat(I.getPropertyValue("margin-top")),
                      q = parseFloat(I.getPropertyValue("margin-bottom")),
                      W = I.getPropertyValue("box-sizing");
                  T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q;
                }
                D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T));
              } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");

              l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1;
            }
          }

          if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
            width: e.virtualSize + t.spaceBetween + "px"
          }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
            width: e.virtualSize + t.spaceBetween + "px"
          }) : a.css({
            height: e.virtualSize + t.spaceBetween + "px"
          })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
            width: e.virtualSize + t.spaceBetween + "px"
          }) : a.css({
            height: e.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            E = [];

            for (var j = 0; j < p.length; j += 1) {
              var U = p[j];
              t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U);
            }

            p = E;
          }

          if (!t.centeredSlides) {
            E = [];

            for (var K = 0; K < p.length; K += 1) {
              var _ = p[K];
              t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_);
            }

            p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
          }

          if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
            marginLeft: g + "px"
          }) : l.css({
            marginRight: g + "px"
          }) : l.css({
            marginBottom: g + "px"
          })), t.centerInsufficientSlides) {
            var Z = 0;

            if (u.forEach(function (e) {
              Z += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (Z -= t.spaceBetween) < i) {
              var Q = (i - Z) / 2;
              p.forEach(function (e, t) {
                p[t] = e - Q;
              }), c.forEach(function (e, t) {
                c[t] = e + Q;
              });
            }
          }

          ee.extend(e, {
            slides: l,
            snapGrid: p,
            slidesGrid: c,
            slidesSizesGrid: u
          }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            a = this,
            i = [],
            s = 0;
        if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          var r = a.activeIndex + t;
          if (r > a.slides.length) break;
          i.push(a.slides.eq(r)[0]);
        } else i.push(a.slides.eq(a.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var n = i[t].offsetHeight;
            s = s < n ? n : s;
          }
        }

        s && a.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

          for (var n = 0; n < i.length; n += 1) {
            var o = i[n],
                l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);

            if (a.watchSlidesVisibility) {
              var d = -(r - o.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
              (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
            }

            o.progress = s ? -l : l;
          }

          t.visibleSlides = L(t.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this,
            a = t.params,
            i = t.maxTranslate() - t.minTranslate(),
            s = t.progress,
            r = t.isBeginning,
            n = t.isEnd,
            o = r,
            l = n;
        0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
          progress: s,
          isBeginning: r,
          isEnd: n
        }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            o = t.virtual && i.virtual.enabled;
        a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
        var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
        var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            o = a.activeIndex,
            l = a.realIndex,
            d = a.snapIndex,
            p = e;

        if (void 0 === p) {
          for (var c = 0; c < s.length; c += 1) {
            void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
          }

          n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
        }

        if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
          var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
          ee.extend(a, {
            snapIndex: t,
            realIndex: u,
            previousIndex: o,
            activeIndex: p
          }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
        } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this,
            a = t.params,
            i = L(e.target).closest("." + a.slideClass)[0],
            s = !1;
        if (i) for (var r = 0; r < t.slides.length; r += 1) {
          t.slides[r] === i && (s = !0);
        }
        if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
      }
    };
    var p = {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            a = this.rtlTranslate,
            i = this.translate,
            s = this.$wrapperEl;
        if (t.virtualTranslate) return a ? -i : i;
        var r = ee.getTranslate(s[0], e);
        return a && (r = -r), r || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.progress,
            o = 0,
            l = 0;
        a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
        var d = a.maxTranslate() - a.minTranslate();
        (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }
    };
    var c = {
      setTransition: function setTransition(e, t) {
        this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;
        s.autoHeight && a.updateAutoHeight();
        var n = t;

        if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
          if ("reset" === n) return void a.emit("slideResetTransitionStart");
          a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.previousIndex;
        a.animating = !1, a.setTransition(0);
        var r = t;

        if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
          if ("reset" === r) return void a.emit("slideResetTransitionEnd");
          a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
        }
      }
    };
    var u = {
      slideTo: function slideTo(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var s = this,
            r = e;
        r < 0 && (r = 0);
        var n = s.params,
            o = s.snapGrid,
            l = s.slidesGrid,
            d = s.previousIndex,
            p = s.activeIndex,
            c = s.rtlTranslate;
        if (s.animating && n.preventInteractionOnTransition) return !1;
        var u = Math.floor(r / n.slidesPerGroup);
        u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
        var h,
            v = -o[u];
        if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) {
          -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
        }

        if (s.initialized && r !== p) {
          if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
          if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
        }

        return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
          s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h));
        }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0);
      },
      slideToLoop: function slideToLoop(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var s = e;
        return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
      },
      slideNext: function slideNext(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating;
        return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
      },
      slidePrev: function slidePrev(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            o = i.slidesGrid,
            l = i.rtlTranslate;

        if (s.loop) {
          if (r) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var p,
            c = d(l ? i.translate : -i.translate),
            u = n.map(function (e) {
          return d(e);
        }),
            h = (o.map(function (e) {
          return d(e);
        }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
        return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
      },
      slideReset: function slideReset(e, t, a) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
      },
      slideToClosest: function slideToClosest(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.activeIndex,
            r = Math.floor(s / i.params.slidesPerGroup);

        if (r < i.snapGrid.length - 1) {
          var n = i.rtlTranslate ? i.translate : -i.translate,
              o = i.snapGrid[r];
          (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
        }

        return i.slideTo(s, e, t, a);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
            r = t.clickedIndex;

        if (a.loop) {
          if (t.animating) return;
          e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    };
    var h = {
      loopCreate: function loopCreate() {
        var i = this,
            e = i.params,
            t = i.$wrapperEl;
        t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
        var s = t.children("." + e.slideClass);

        if (e.loopFillGroupWithBlank) {
          var a = e.slidesPerGroup - s.length % e.slidesPerGroup;

          if (a !== e.slidesPerGroup) {
            for (var r = 0; r < a; r += 1) {
              var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
              t.append(n);
            }

            s = t.children("." + e.slideClass);
          }
        }

        "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
        var o = [],
            l = [];
        s.each(function (e, t) {
          var a = L(t);
          e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
        });

        for (var d = 0; d < l.length; d += 1) {
          t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
        }

        for (var p = o.length - 1; 0 <= p; p -= 1) {
          t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e,
            t = this,
            a = t.params,
            i = t.activeIndex,
            s = t.slides,
            r = t.loopedSlides,
            n = t.allowSlidePrev,
            o = t.allowSlideNext,
            l = t.snapGrid,
            d = t.rtlTranslate;
        t.allowSlidePrev = !0, t.allowSlideNext = !0;
        var p = -l[i] - t.getTranslate();
        i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
        t.allowSlidePrev = n, t.allowSlideNext = o;
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            a = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index");
      }
    };
    var v = {
      setGrabCursor: function setGrabCursor(e) {
        if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
      }
    };

    var m = {
      appendSlide: function appendSlide(e) {
        var t = this,
            a = t.$wrapperEl,
            i = t.params;
        if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && a.append(e[s]);
        } else a.append(e);
        i.loop && t.loopCreate(), i.observer && te.observer || t.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            e[n] && i.prepend(e[n]);
          }

          r = s + e.length;
        } else i.prepend(e);

        a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
        s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);else if (n <= e) a.appendSlide(t);else {
          for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var c = 0; c < t.length; c += 1) {
              t[c] && i.append(t[c]);
            }

            o = e < r ? r + t.length : r;
          } else i.append(t);

          for (var u = 0; u < l.length; u += 1) {
            i.append(l[u]);
          }

          s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r,
            n = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var o = 0; o < e.length; o += 1) {
            r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          }

          n = Math.max(n, 0);
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

        a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
        g = function () {
      var e = J.navigator.userAgent,
          t = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        windows: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        cordova: J.cordova || J.phonegap,
        phonegap: J.cordova || J.phonegap
      },
          a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          s = e.match(/(iPad).*OS\s([\d_]+)/),
          r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

      if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
        var o = t.osVersion.split("."),
            l = f.querySelector('meta[name="viewport"]');
        t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
      }

      return t.pixelRatio = J.devicePixelRatio || 1, t;
    }();

    function b() {
      var e = this,
          t = e.params,
          a = e.el;

      if (!a || 0 !== a.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var i = e.allowSlideNext,
            s = e.allowSlidePrev,
            r = e.snapGrid;

        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
          var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);

        e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
    }

    var w = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
        y = {
      update: d,
      translate: p,
      transition: c,
      slide: u,
      loop: h,
      grabCursor: v,
      manipulation: m,
      events: {
        attachEvents: function attachEvents() {
          var e = this,
              t = e.params,
              a = e.touchEvents,
              i = e.el,
              s = e.wrapperEl;
          e.onTouchStart = function (e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches;

            if (!t.animating || !i.preventInteractionOnTransition) {
              var r = e;
              if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                var n = s.currentX,
                    o = s.currentY,
                    l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;

                if (!l || !(n <= d || n >= J.screen.width - d)) {
                  if (ee.extend(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                  }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                    var p = !0;
                    L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                    var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                    (i.touchStartForcePreventDefault || c) && r.preventDefault();
                  }

                  t.emit("touchStart", r);
                }
              }
            }
          }.bind(e), e.onTouchMove = function (e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                n = e;

            if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
              if (!a.isTouchEvent || "mousemove" !== n.type) {
                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                    l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, {
                  startX: o,
                  startY: l,
                  currentX: o,
                  currentY: l
                }), a.touchStartTime = ee.now()));
                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                  if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
                } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);

                if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                  s.currentX = o, s.currentY = l;
                  var d,
                      p = s.currentX - s.startX,
                      c = s.currentY - s.startY;
                  if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;else if (a.startMoving) {
                    t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                    var u = t.isHorizontal() ? p : c;
                    s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                    var h = !0,
                        v = i.resistanceRatio;

                    if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                      if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                      if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                    }

                    i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                      position: s[t.isHorizontal() ? "startX" : "startY"],
                      time: a.touchStartTime
                    }), a.velocities.push({
                      position: s[t.isHorizontal() ? "currentX" : "currentY"],
                      time: ee.now()
                    })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate));
                  }
                }
              }
            } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
          }.bind(e), e.onTouchEnd = function (e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
            if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var p,
                c = ee.now(),
                u = c - a.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
              t && !t.destroyed && t.emit("click", d);
            }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
              t.destroyed || (t.allowClick = !0);
            }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);

            if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
              if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

              if (i.freeModeMomentum) {
                if (1 < a.velocities.length) {
                  var h = a.velocities.pop(),
                      v = a.velocities.pop(),
                      f = h.position - v.position,
                      m = h.time - v.time;
                  t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0);
                } else t.velocity = 0;

                t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                var g = 1e3 * i.freeModeMomentumRatio,
                    b = t.velocity * g,
                    w = t.translate + b;
                r && (w = -w);
                var y,
                    x,
                    T = !1,
                    E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);else if (i.freeModeSticky) {
                  for (var S, C = 0; C < l.length; C += 1) {
                    if (l[C] > -w) {
                      S = C;
                      break;
                    }
                  }

                  w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
                }
                if (x && t.once("transitionEnd", function () {
                  t.loopFix();
                }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();
                i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                  t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
                })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
              } else if (i.freeModeSticky) return void t.slideToClosest();

              (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
              for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) {
                void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
              }

              var k = (p - o[M]) / z;

              if (u > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
              } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
              }
            }
          }.bind(e), e.onClick = function (e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
          }.bind(e);
          var r = "container" === t.touchEventsTarget ? i : s,
              n = !!t.nested;

          if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
            if (te.touch) {
              var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                passive: !1,
                capture: n
              } : n), r.addEventListener(a.end, e.onTouchEnd, o);
            }

            (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
          } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);

          (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0);
        },
        detachEvents: function detachEvents() {
          var e = this,
              t = e.params,
              a = e.touchEvents,
              i = e.el,
              s = e.wrapperEl,
              r = "container" === t.touchEventsTarget ? i : s,
              n = !!t.nested;

          if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
            if (te.touch) {
              var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
            }

            (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
          } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);

          (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
              t = e.activeIndex,
              a = e.initialized,
              i = e.loopedSlides;
          void 0 === i && (i = 0);
          var s = e.params,
              r = s.breakpoints;

          if (r && (!r || 0 !== Object.keys(r).length)) {
            var n = e.getBreakpoint(r);

            if (n && e.currentBreakpoint !== n) {
              var o = n in r ? r[n] : void 0;
              o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                var t = o[e];
                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var l = o || e.originalParams,
                  d = l.direction && l.direction !== s.direction,
                  p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
              d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e) {
          if (e) {
            var t = !1,
                a = [];
            Object.keys(e).forEach(function (e) {
              a.push(e);
            }), a.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            });

            for (var i = 0; i < a.length; i += 1) {
              var s = a[i];
              this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s);
            }

            return t || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
              t = e.isLocked;
          e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var t = this.classNames,
              a = this.params,
              e = this.rtl,
              i = this.$el,
              s = [];
          s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
            t.push(a.containerModifierClass + e);
          }), i.addClass(t.join(" "));
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
              t = this.classNames;
          e.removeClass(t.join(" "));
        }
      },
      images: {
        loadImage: function loadImage(e, t, a, i, s, r) {
          var n;

          function o() {
            r && r();
          }

          e.complete && s ? o() : t ? ((n = new J.Image()).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
        },
        preloadImages: function preloadImages() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        x = {},
        T = function (u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--;) {
          a[i] = arguments[i];
        }

        1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function (t) {
          Object.keys(y[t]).forEach(function (e) {
            h.prototype[e] || (h.prototype[e] = y[t][e]);
          });
        });
        var r = this;
        void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
          var t = r.modules[e];

          if (t.params) {
            var a = Object.keys(t.params)[0],
                i = t.params[a];
            if ("object" != _typeof(i) || null === i) return;
            if (!(a in s && "enabled" in i)) return;
            !0 === s[a] && (s[a] = {
              enabled: !0
            }), "object" != _typeof(s[a]) || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
              enabled: !1
            });
          }
        });
        var n = ee.extend({}, w);
        r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
        var o = (r.$ = L)(r.params.el);

        if (t = o[0]) {
          if (1 < o.length) {
            var l = [];
            return o.each(function (e, t) {
              var a = ee.extend({}, s, {
                el: t
              });
              l.push(new h(a));
            }), l;
          }

          t.swiper = r, o.data("swiper", r);
          var d,
              p,
              c = o.children("." + r.params.wrapperClass);
          return ee.extend(r, {
            $el: o,
            el: t,
            $wrapperEl: c,
            wrapperEl: c[0],
            classNames: [],
            slides: L(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function isHorizontal() {
              return "horizontal" === r.params.direction;
            },
            isVertical: function isVertical() {
              return "vertical" === r.params.direction;
            },
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
            rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
            wrongRTL: "-webkit-box" === c.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
              start: d[0],
              move: d[1],
              end: d[2]
            }, r.touchEventsDesktop = {
              start: p[0],
              move: p[1],
              end: p[2]
            }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: ee.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), r.useModules(), r.params.init && r.init(), r;
        }
      }

      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: {
          configurable: !0
        },
        defaults: {
          configurable: !0
        },
        Class: {
          configurable: !0
        },
        $: {
          configurable: !0
        }
      };
      return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
        var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;

        if (t.centeredSlides) {
          for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
            a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
          }

          for (var p = r - 1; 0 <= p; p -= 1) {
            a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0));
          }
        } else for (var c = r + 1; c < a.length; c += 1) {
          i[c] - i[r] < s && (n += 1);
        }

        return n;
      }, h.prototype.update = function () {
        var a = this;

        if (a && !a.destroyed) {
          var e = a.snapGrid,
              t = a.params;
          t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update");
        }

        function i() {
          var e = a.rtlTranslate ? -1 * a.translate : a.translate,
              t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
          a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
        }
      }, h.prototype.changeDirection = function (a, e) {
        void 0 === e && (e = !0);
        var t = this,
            i = t.params.direction;
        return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function (e, t) {
          "vertical" === a ? t.style.width = "" : t.style.height = "";
        }), t.emit("changeDirection"), e && t.update()), t;
      }, h.prototype.init = function () {
        var e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
      }, h.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides;
        return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
          a.off(e);
        }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null;
      }, h.extendDefaults = function (e) {
        ee.extend(x, e);
      }, e.extendedDefaults.get = function () {
        return x;
      }, e.defaults.get = function () {
        return w;
      }, e.Class.get = function () {
        return u;
      }, e.$.get = function () {
        return L;
      }, Object.defineProperties(h, e), h;
    }(n),
        E = {
      name: "device",
      proto: {
        device: g
      },
      static: {
        device: g
      }
    },
        S = {
      name: "support",
      proto: {
        support: te
      },
      static: {
        support: te
      }
    },
        C = {
      name: "browser",
      proto: {
        browser: I
      },
      static: {
        browser: I
      }
    },
        M = {
      name: "resize",
      create: function create() {
        var e = this;
        ee.extend(e, {
          resize: {
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init() {
          J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
        }
      }
    },
        z = {
      func: J.MutationObserver || J.WebkitMutationObserver,
      attach: function attach(e, t) {
        void 0 === t && (t = {});
        var a = this,
            i = new z.func(function (e) {
          if (1 !== e.length) {
            var t = function t() {
              a.emit("observerUpdate", e[0]);
            };

            J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0);
          } else a.emit("observerUpdate", e[0]);
        });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), a.observer.observers.push(i);
      },
      init: function init() {
        var e = this;

        if (te.observer && e.params.observer) {
          if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
            e.observer.attach(t[a]);
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
        P = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        ee.extend(this, {
          observer: {
            init: z.init.bind(this),
            attach: z.attach.bind(this),
            destroy: z.destroy.bind(this),
            observers: []
          }
        });
      },
      on: {
        init: function init() {
          this.observer.init();
        },
        destroy: function destroy() {
          this.observer.destroy();
        }
      }
    },
        k = {
      update: function update(e) {
        var t = this,
            a = t.params,
            i = a.slidesPerView,
            s = a.slidesPerGroup,
            r = a.centeredSlides,
            n = t.params.virtual,
            o = n.addSlidesBefore,
            l = n.addSlidesAfter,
            d = t.virtual,
            p = d.from,
            c = d.to,
            u = d.slides,
            h = d.slidesGrid,
            v = d.renderSlide,
            f = d.offset;
        t.updateActiveIndex();
        var m,
            g,
            b,
            w = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
        var y = Math.max((w || 0) - b, 0),
            x = Math.min((w || 0) + g, u.length - 1),
            T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

        function E() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }

        if (ee.extend(t.virtual, {
          from: y,
          to: x,
          offset: T,
          slidesGrid: t.slidesGrid
        }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: T,
          from: y,
          to: x,
          slides: function () {
            for (var e = [], t = y; t <= x; t += 1) {
              e.push(u[t]);
            }

            return e;
          }()
        }), void E();
        var S = [],
            C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var M = p; M <= c; M += 1) {
          (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
        }

        for (var z = 0; z < u.length; z += 1) {
          y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
        }

        C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }), S.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(v(u[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E();
      },
      renderSlide: function renderSlide(e, t) {
        var a = this,
            i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
      },
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
          e[t] && this.virtual.slides.push(e[t]);
        } else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            a = t.activeIndex,
            i = a + 1,
            s = 1;

        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1) {
            e[r] && t.virtual.slides.unshift(e[r]);
          }

          i = a + e.length, s = e.length;
        } else t.virtual.slides.unshift(e);

        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
              o = {};
          Object.keys(n).forEach(function (e) {
            o[parseInt(e, 10) + s] = n[e];
          }), t.virtual.cache = o;
        }

        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        var t = this;

        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; i -= 1) {
            t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
          } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    },
        $ = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          virtual: {
            update: k.update.bind(e),
            appendSlide: k.appendSlide.bind(e),
            prependSlide: k.prependSlide.bind(e),
            removeSlide: k.removeSlide.bind(e),
            removeAllSlides: k.removeAllSlides.bind(e),
            renderSlide: k.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;

          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        }
      }
    },
        D = {
      handle: function handle(e) {
        var t = this,
            a = t.rtlTranslate,
            i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;

        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
            var r = !1;
            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var n = J.innerWidth,
                o = J.innerHeight,
                l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);

            for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
            }

            if (!r) return;
          }

          t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s);
        }
      },
      enable: function enable() {
        this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function disable() {
        this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    },
        O = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function create() {
        ee.extend(this, {
          keyboard: {
            enabled: !1,
            enable: D.enable.bind(this),
            disable: D.disable.bind(this),
            handle: D.handle.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function destroy() {
          this.keyboard.enabled && this.keyboard.disable();
        }
      }
    };

    var A = {
      lastScrollTime: ee.now(),
      event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
        var e = "onwheel",
            t = e in f;

        if (!t) {
          var a = f.createElement("div");
          a.setAttribute(e, "return;"), t = "function" == typeof a[e];
        }

        return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel",
      normalize: function normalize(e) {
        var t = 0,
            a = 0,
            i = 0,
            s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle: function handle(e) {
        var t = e,
            a = this,
            i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var s = 0,
            r = a.rtlTranslate ? -1 : 1,
            n = A.normalize(t);
        if (i.forceToAxis) {
          if (a.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            s = n.pixelX * r;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            s = n.pixelY;
          }
        } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
        if (0 === s) return !0;

        if (i.invert && (s = -s), a.params.freeMode) {
          a.params.loop && a.loopFix();
          var o = a.getTranslate() + s * i.sensitivity,
              l = a.isBeginning,
              d = a.isEnd;
          if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
            a.slideToClosest();
          }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0;
        } else {
          if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) {
            if (a.isEnd && !a.params.loop || a.animating) {
              if (i.releaseOnEdges) return !0;
            } else a.slideNext(), a.emit("scroll", t);
          } else if (a.isBeginning && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) return !0;
          } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = new J.Date().getTime();
        }

        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      enable: function enable() {
        var e = this;
        if (!A.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0;
      },
      disable: function disable() {
        var e = this;
        if (!A.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
      }
    },
        H = {
      update: function update() {
        var e = this,
            t = e.params.navigation;

        if (!e.params.loop) {
          var a = e.navigation,
              i = a.$nextEl,
              s = a.$prevEl;
          s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function init() {
        var e,
            t,
            a = this,
            i = a.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }));
      },
      destroy: function destroy() {
        var e = this,
            t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
      }
    },
        N = {
      update: function update() {
        var e = this,
            t = e.rtl,
            s = e.params.pagination;

        if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var r,
              a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

          if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
            var o,
                l,
                d,
                p = e.pagination.bullets;
            if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
              var a = L(t),
                  i = a.index();
              i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"));
            });else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
              for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) {
                p.eq(h).addClass(s.bulletActiveClass + "-main");
              }

              c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next");
            }

            if (s.dynamicBullets) {
              var v = Math.min(p.length, s.dynamicMainBullets + 4),
                  f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                  m = t ? "right" : "left";
              p.css(e.isHorizontal() ? m : "top", f + "px");
            }
          }

          if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
            var g;
            g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            var b = (r + 1) / n,
                w = 1,
                y = 1;
            "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed);
          }

          "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
      },
      render: function render() {
        var e = this,
            t = e.params.pagination;

        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              s = "";

          if ("bullets" === t.type) {
            for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
              t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            }

            i.html(s), e.pagination.bullets = i.find("." + t.bulletClass);
          }

          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function init() {
        var a = this,
            e = a.params.pagination;

        if (e.el) {
          var t = L(e.el);
          0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
            e.preventDefault();
            var t = L(this).index() * a.params.slidesPerGroup;
            a.params.loop && (t += a.loopedSlides), a.slideTo(t);
          }), ee.extend(a.pagination, {
            $el: t,
            el: t[0]
          }));
        }
      },
      destroy: function destroy() {
        var e = this,
            t = e.params.pagination;

        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
        }
      }
    },
        G = {
      setTranslate: function setTranslate() {
        var e = this;

        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
              a = e.rtlTranslate,
              i = e.progress,
              s = t.dragSize,
              r = t.trackSize,
              n = t.$dragEl,
              o = t.$el,
              l = e.params.scrollbar,
              d = s,
              p = (r - s) * i;
          a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            o[0].style.opacity = 0, o.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        var e = this;

        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
              a = t.$dragEl,
              i = t.$el;
          a[0].style.width = "", a[0].style.height = "";
          var s,
              r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              n = e.size / e.virtualSize,
              o = n * (r / e.size);
          s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, {
            trackSize: r,
            divider: n,
            moveDivider: o,
            dragSize: s
          }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
        }
      },
      setDragPosition: function setDragPosition(e) {
        var t,
            a = this,
            i = a.scrollbar,
            s = a.rtlTranslate,
            r = i.$el,
            n = i.dragSize,
            o = i.trackSize;
        t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this,
            a = t.params.scrollbar,
            i = t.scrollbar,
            s = t.$wrapperEl,
            r = i.$el,
            n = i.$dragEl;
        t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this.scrollbar,
            a = this.$wrapperEl,
            i = t.$el,
            s = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this,
            a = t.params.scrollbar,
            i = t.scrollbar.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
          i.css("opacity", 0), i.transition(400);
        }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
              a = e.touchEventsTouch,
              i = e.touchEventsDesktop,
              s = e.params,
              r = t.$el[0],
              n = !(!te.passiveListener || !s.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              o = !(!te.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function disableDraggable() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
              a = e.touchEventsTouch,
              i = e.touchEventsDesktop,
              s = e.params,
              r = t.$el[0],
              n = !(!te.passiveListener || !s.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              o = !(!te.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      init: function init() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
              a = e.$el,
              i = e.params.scrollbar,
              s = L(i.el);
          e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && t.enableDraggable();
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
        B = {
      setTransform: function setTransform(e, t) {
        var a = this.rtl,
            i = L(e),
            s = a ? -1 : 1,
            r = i.attr("data-swiper-parallax") || "0",
            n = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y"),
            l = i.attr("data-swiper-parallax-scale"),
            d = i.attr("data-swiper-parallax-opacity");

        if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }

        if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
        }
      },
      setTranslate: function setTranslate() {
        var i = this,
            e = i.$el,
            t = i.slides,
            s = i.progress,
            r = i.snapGrid;
        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          i.parallax.setTransform(t, s);
        }), t.each(function (e, t) {
          var a = t.progress;
          1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
            i.parallax.setTransform(t, a);
          });
        });
      },
      setTransition: function setTransition(s) {
        void 0 === s && (s = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          var a = L(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
          0 === s && (i = 0), a.transition(i);
        });
      }
    },
        X = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
            a = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this,
            a = t.params.zoom,
            i = t.zoom,
            s = i.gesture;

        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e);
        }

        s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this.params.zoom,
            a = this.zoom,
            i = a.gesture;

        if (!te.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e);
        }

        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this.params.zoom,
            a = this.zoom,
            i = a.gesture;

        if (!te.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
        }

        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.zoom,
            a = t.gesture,
            i = t.image;
        a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this,
            a = t.zoom,
            i = a.gesture,
            s = a.image,
            r = a.velocity;

        if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var n = s.width * a.scale,
              o = s.height * a.scale;

          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
              if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }

            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
            t = e.gesture,
            a = e.image,
            i = e.velocity;

        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
          a.isTouched = !1, a.isMoved = !1;
          var s = 300,
              r = 300,
              n = i.x * s,
              o = a.currentX + n,
              l = i.y * r,
              d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          a.currentX = o, a.currentY = d;
          var c = a.width * e.scale,
              u = a.height * e.scale;
          a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this.zoom,
            t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function _in(e) {
        var t,
            a,
            i,
            s,
            r,
            n,
            o,
            l,
            d,
            p,
            c,
            u,
            h,
            v,
            f,
            m,
            g = this,
            b = g.zoom,
            w = g.params.zoom,
            y = b.gesture,
            x = b.image;
        (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function out() {
        var e = this,
            t = e.zoom,
            a = e.params.zoom,
            i = t.gesture;
        i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
      },
      enable: function enable() {
        var e = this,
            t = e.zoom;

        if (!t.enabled) {
          t.enabled = !0;
          var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
        }
      },
      disable: function disable() {
        var e = this,
            t = e.zoom;

        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
        }
      }
    },
        Y = {
      loadInSlide: function loadInSlide(e, l) {
        void 0 === l && (l = !0);
        var d = this,
            p = d.params.lazy;

        if (void 0 !== e && 0 !== d.slides.length) {
          var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
              t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
          !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
            var i = L(t);
            i.addClass(p.loadingClass);
            var s = i.attr("data-background"),
                r = i.attr("data-src"),
                n = i.attr("data-srcset"),
                o = i.attr("data-sizes");
            d.loadImage(i[0], r || s, n, o, !1, function () {
              if (null != d && d && (!d || d.params) && !d.destroyed) {
                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                  var e = c.attr("data-swiper-slide-index");

                  if (c.hasClass(d.params.slideDuplicateClass)) {
                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                    d.lazy.loadInSlide(t.index(), !1);
                  } else {
                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    d.lazy.loadInSlide(a.index(), !1);
                  }
                }

                d.emit("lazyImageReady", c[0], i[0]);
              }
            }), d.emit("lazyImageLoad", c[0], i[0]);
          });
        }
      },
      load: function load() {
        var i = this,
            t = i.$wrapperEl,
            a = i.params,
            s = i.slides,
            e = i.activeIndex,
            r = i.virtual && a.virtual.enabled,
            n = a.lazy,
            o = a.slidesPerView;

        function l(e) {
          if (r) {
            if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (s[e]) return !0;

          return !1;
        }

        function d(e) {
          return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
        }

        if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
          var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
          i.lazy.loadInSlide(a);
        });else if (1 < o) for (var p = e; p < e + o; p += 1) {
          l(p) && i.lazy.loadInSlide(p);
        } else i.lazy.loadInSlide(e);
        if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
          for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) {
            l(f) && i.lazy.loadInSlide(f);
          }

          for (var m = v; m < e; m += 1) {
            l(m) && i.lazy.loadInSlide(m);
          }
        } else {
          var g = t.children("." + a.slideNextClass);
          0 < g.length && i.lazy.loadInSlide(d(g));
          var b = t.children("." + a.slidePrevClass);
          0 < b.length && i.lazy.loadInSlide(d(b));
        }
      }
    },
        V = {
      LinearSpline: function LinearSpline(e, t) {
        var a,
            i,
            s,
            r,
            n,
            o = function o(e, t) {
          for (i = -1, a = e.length; 1 < a - i;) {
            e[s = a + i >> 1] <= t ? i = s : a = s;
          }

          return a;
        };

        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var a,
            i,
            s = this,
            r = s.controller.control;

        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
          r[o] !== t && r[o] instanceof T && n(r[o]);
        } else r instanceof T && t !== r && n(r);
      },
      setTransition: function setTransition(t, e) {
        var a,
            i = this,
            s = i.controller.control;

        function r(e) {
          e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
            e.updateAutoHeight();
          }), e.$wrapperEl.transitionEnd(function () {
            s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
          }));
        }

        if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) {
          s[a] !== e && s[a] instanceof T && r(s[a]);
        } else s instanceof T && e !== s && r(s);
      }
    },
        F = {
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function onEnterKey(e) {
        var t = this,
            a = t.params.a11y;

        if (13 === e.keyCode) {
          var i = L(e.target);
          t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        var e = this;

        if (!e.params.loop) {
          var t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
          i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function updatePagination() {
        var i = this,
            s = i.params.a11y;
        i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
          var a = L(t);
          i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
        });
      },
      init: function init() {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
            a,
            i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
      },
      destroy: function destroy() {
        var e,
            t,
            a = this;
        a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
      }
    },
        R = {
      init: function init() {
        var e = this;

        if (e.params.history) {
          if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          var t = e.history;
          t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function getPathValues() {
        var e = J.location.pathname.slice(1).split("/").filter(function (e) {
          return "" !== e;
        }),
            t = e.length;
        return {
          key: e[t - 2],
          value: e[t - 1]
        };
      },
      setHistory: function setHistory(e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
              i = R.slugify(a.attr("data-history"));
          J.location.pathname.includes(e) || (i = e + "/" + i);
          var s = J.history.state;
          s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
            value: i
          }, null, i) : J.history.pushState({
            value: i
          }, null, i));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, a) {
        var i = this;
        if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
          var n = i.slides.eq(s);

          if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
            var o = n.index();
            i.slideTo(o, e, a);
          }
        } else i.slideTo(0, e, a);
      }
    },
        q = {
      onHashCange: function onHashCange() {
        var e = this,
            t = f.location.hash.replace("#", "");

        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === a) return;
          e.slideTo(a);
        }
      },
      setHash: function setHash() {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");else {
          var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
          f.location.hash = a || "";
        }
      },
      init: function init() {
        var e = this;

        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
          e.hashNavigation.initialized = !0;
          var t = f.location.hash.replace("#", "");
          if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
            var s = e.slides.eq(a);

            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
              var r = s.index();
              e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
            }
          }
          e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
        W = {
      run: function run() {
        var e = this,
            t = e.slides.eq(e.activeIndex),
            a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
        }, a);
      },
      start: function start() {
        var e = this;
        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
      },
      stop: function stop() {
        var e = this;
        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
      }
    },
        j = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
              s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || (r = s, s = 0);
          var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: n
          }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var a = this,
            t = a.slides,
            i = a.$wrapperEl;

        if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
          var s = !1;
          t.transitionEnd(function () {
            if (!s && a && !a.destroyed) {
              s = !0, a.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
                i.trigger(e[t]);
              }
            }
          });
        }
      }
    },
        U = {
      setTranslate: function setTranslate() {
        var e,
            t = this,
            a = t.$el,
            i = t.$wrapperEl,
            s = t.slides,
            r = t.width,
            n = t.height,
            o = t.rtlTranslate,
            l = t.size,
            d = t.params.cubeEffect,
            p = t.isHorizontal(),
            c = t.virtual && t.params.virtual.enabled,
            u = 0;
        d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));

        for (var h = 0; h < s.length; h += 1) {
          var v = s.eq(h),
              f = h;
          c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
              g = Math.floor(m / 360);
          o && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
              w = 0,
              y = 0,
              x = 0;
          f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
          var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";

          if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
            var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }

        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
          var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
              z = d.shadowScale,
              P = d.shadowScale / M,
              k = d.shadowOffset;
          e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
        }
        var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    },
        K = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
          var s = t.eq(i),
              r = s[0].progress;
          e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
              o = 0,
              l = -s[0].swiperSlideOffset,
              d = 0;

          if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
            var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
          }

          s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var a = this,
            t = a.slides,
            i = a.activeIndex,
            s = a.$wrapperEl;

        if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
          var r = !1;
          t.eq(i).transitionEnd(function () {
            if (!r && a && !a.destroyed) {
              r = !0, a.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
                s.trigger(e[t]);
              }
            }
          });
        }
      }
    },
        _ = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
          var v = i.eq(u),
              f = r[u],
              m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
              g = o ? p * m : 0,
              b = o ? 0 : p * m,
              w = -c * Math.abs(m),
              y = o ? 0 : n.stretch * m,
              x = o ? n.stretch * m : 0;
          Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
          var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";

          if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
            var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
          }
        }

        (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
        Z = {
      init: function init() {
        var e = this,
            t = e.params.thumbs,
            a = e.constructor;
        t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), ee.extend(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var e = this,
            t = e.thumbs.swiper;

        if (t) {
          var a = t.clickedIndex,
              i = t.clickedSlide;

          if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
            var s;

            if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
              var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                  o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }

            e.slideTo(s);
          }
        }
      },
      update: function update(e) {
        var t = this,
            a = t.thumbs.swiper;

        if (a) {
          var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;

          if (t.realIndex !== a.realIndex) {
            var s,
                r = a.activeIndex;

            if (a.params.loop) {
              a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
              var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                  o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
              s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n;
            } else s = t.realIndex;

            a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
          }

          var l = 1,
              d = t.params.thumbs.slideThumbActiveClass;
          if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) {
            a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
          } else for (var c = 0; c < l; c += 1) {
            a.slides.eq(t.realIndex + c).addClass(d);
          }
        }
      }
    },
        Q = [E, S, C, M, P, $, O, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: A.enable.bind(e),
            disable: A.disable.bind(e),
            handle: A.handle.bind(e),
            handleMouseEnter: A.handleMouseEnter.bind(e),
            handleMouseLeave: A.handleMouseLeave.bind(e),
            lastScrollTime: ee.now()
          }
        });
      },
      on: {
        init: function init() {
          this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy: function destroy() {
          this.mousewheel.enabled && this.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          navigation: {
            init: H.init.bind(e),
            update: H.update.bind(e),
            destroy: H.destroy.bind(e),
            onNextClick: H.onNextClick.bind(e),
            onPrevClick: H.onPrevClick.bind(e)
          }
        });
      },
      on: {
        init: function init() {
          this.navigation.init(), this.navigation.update();
        },
        toEdge: function toEdge() {
          this.navigation.update();
        },
        fromEdge: function fromEdge() {
          this.navigation.update();
        },
        destroy: function destroy() {
          this.navigation.destroy();
        },
        click: function click(e) {
          var t,
              a = this,
              i = a.navigation,
              s = i.$nextEl,
              r = i.$prevEl;
          !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          pagination: {
            init: N.init.bind(e),
            render: N.render.bind(e),
            update: N.update.bind(e),
            destroy: N.destroy.bind(e),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function init() {
          this.pagination.init(), this.pagination.render(), this.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
        },
        snapIndexChange: function snapIndexChange() {
          this.params.loop || this.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange() {
          this.params.loop && (this.pagination.render(), this.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange() {
          this.params.loop || (this.pagination.render(), this.pagination.update());
        },
        destroy: function destroy() {
          this.pagination.destroy();
        },
        click: function click(e) {
          var t = this;
          t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          scrollbar: {
            init: G.init.bind(e),
            destroy: G.destroy.bind(e),
            updateSize: G.updateSize.bind(e),
            setTranslate: G.setTranslate.bind(e),
            setTransition: G.setTransition.bind(e),
            enableDraggable: G.enableDraggable.bind(e),
            disableDraggable: G.disableDraggable.bind(e),
            setDragPosition: G.setDragPosition.bind(e),
            onDragStart: G.onDragStart.bind(e),
            onDragMove: G.onDragMove.bind(e),
            onDragEnd: G.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function init() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
        },
        update: function update() {
          this.scrollbar.updateSize();
        },
        resize: function resize() {
          this.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          this.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          this.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function destroy() {
          this.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        ee.extend(this, {
          parallax: {
            setTransform: B.setTransform.bind(this),
            setTranslate: B.setTranslate.bind(this),
            setTransition: B.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        init: function init() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var i = this,
            t = {
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
          t[e] = X[e].bind(i);
        }), ee.extend(i, {
          zoom: t
        });
        var s = 1;
        Object.defineProperty(i.zoom, "scale", {
          get: function get() {
            return s;
          },
          set: function set(e) {
            if (s !== e) {
              var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                  a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
              i.emit("zoomChange", e, t, a);
            }

            s = e;
          }
        });
      },
      on: {
        init: function init() {
          this.params.zoom.enabled && this.zoom.enable();
        },
        destroy: function destroy() {
          this.zoom.disable();
        },
        touchStart: function touchStart(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
        },
        transitionEnd: function transitionEnd() {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        ee.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: Y.load.bind(this),
            loadInSlide: Y.loadInSlide.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
        },
        init: function init() {
          this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
        },
        scroll: function scroll() {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
        },
        resize: function resize() {
          this.params.lazy.enabled && this.lazy.load();
        },
        scrollbarDragMove: function scrollbarDragMove() {
          this.params.lazy.enabled && this.lazy.load();
        },
        transitionStart: function transitionStart() {
          var e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function transitionEnd() {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: V.getInterpolateFunction.bind(e),
            setTranslate: V.setTranslate.bind(e),
            setTransition: V.setTransition.bind(e)
          }
        });
      },
      on: {
        update: function update() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        resize: function resize() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        observerUpdate: function observerUpdate() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        setTranslate: function setTranslate(e, t) {
          this.controller.control && this.controller.setTranslate(e, t);
        },
        setTransition: function setTransition(e, t) {
          this.controller.control && this.controller.setTransition(e, t);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function create() {
        var t = this;
        ee.extend(t, {
          a11y: {
            liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(F).forEach(function (e) {
          t.a11y[e] = F[e].bind(t);
        });
      },
      on: {
        init: function init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
        },
        toEdge: function toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy: function destroy() {
          this.params.a11y.enabled && this.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          history: {
            init: R.init.bind(e),
            setHistory: R.setHistory.bind(e),
            setHistoryPopState: R.setHistoryPopState.bind(e),
            scrollToSlide: R.scrollToSlide.bind(e),
            destroy: R.destroy.bind(e)
          }
        });
      },
      on: {
        init: function init() {
          this.params.history.enabled && this.history.init();
        },
        destroy: function destroy() {
          this.params.history.enabled && this.history.destroy();
        },
        transitionEnd: function transitionEnd() {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        var e = this;
        ee.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: q.init.bind(e),
            destroy: q.destroy.bind(e),
            setHash: q.setHash.bind(e),
            onHashCange: q.onHashCange.bind(e)
          }
        });
      },
      on: {
        init: function init() {
          this.params.hashNavigation.enabled && this.hashNavigation.init();
        },
        destroy: function destroy() {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy();
        },
        transitionEnd: function transitionEnd() {
          this.hashNavigation.initialized && this.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function create() {
        var t = this;
        ee.extend(t, {
          autoplay: {
            running: !1,
            paused: !1,
            run: W.run.bind(t),
            start: W.start.bind(t),
            stop: W.stop.bind(t),
            pause: W.pause.bind(t),
            onTransitionEnd: function onTransitionEnd(e) {
              t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
            }
          }
        });
      },
      on: {
        init: function init() {
          this.params.autoplay.enabled && this.autoplay.start();
        },
        beforeTransitionStart: function beforeTransitionStart(e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove() {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
        },
        destroy: function destroy() {
          this.autoplay.running && this.autoplay.stop();
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        ee.extend(this, {
          fadeEffect: {
            setTranslate: j.setTranslate.bind(this),
            setTransition: j.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;

          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        ee.extend(this, {
          cubeEffect: {
            setTranslate: U.setTranslate.bind(this),
            setTransition: U.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;

          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        ee.extend(this, {
          flipEffect: {
            setTranslate: K.setTranslate.bind(this),
            setTransition: K.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;

          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate() {
          "flip" === this.params.effect && this.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        ee.extend(this, {
          coverflowEffect: {
            setTranslate: _.setTranslate.bind(this),
            setTransition: _.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this;
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        ee.extend(this, {
          thumbs: {
            swiper: null,
            init: Z.init.bind(this),
            update: Z.update.bind(this),
            onThumbClick: Z.onThumbClick.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
        },
        slideChange: function slideChange() {
          this.thumbs.swiper && this.thumbs.update();
        },
        update: function update() {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize: function resize() {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition: function setTransition(e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy: function beforeDestroy() {
          var e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy();
        }
      }
    }];
    return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T;
  });

  // var getImgSrc = function (img) {
  //   return img.currentSrc || img.src;
  // };
  //
  // window.setParallaxBg = function (slider) {
  //   var wrapper = slider.el.querySelector('.swiper-wrapper');
  //   var bg = getImgSrc(wrapper.children[0].querySelector('img'));
  //
  //   $(wrapper).parallax({
  //     imageSrc: bg
  //   });
  //
  //   if (!document.querySelector('.parallax-mirror')) {
  //     document.body.classList.add('no-parallax');
  //   }
  // }
  //
  // window.changeParallaxBg = function (slider) {
  //   var wrapper = slider.el.querySelector('.swiper-wrapper');
  //   var previousBg = getImgSrc(wrapper.children[slider.previousIndex].querySelector('img'));
  //   var newBg = getImgSrc(wrapper.children[slider.realIndex].querySelector('img'));
  //
  //   if (!document.querySelector('.parallax-mirror')) {
  //     document.body.classList.add('no-parallax');
  //   }
  //
  //   $('.parallax-mirror').each(function() {
  //     var mirror = this.querySelector('.parallax-slider');
  //
  //     var resetAnimation = function (animationName) {
  //       mirror.classList.remove('slideInLeft');
  //       mirror.classList.remove('slideInRight');
  //       mirror.classList.remove('slideOutLeft');
  //       mirror.classList.remove('slideOutRight');
  //
  //       if (animationName) {
  //         mirror.classList.add(animationName);
  //       }
  //     };
  //
  //     if (mirror.src === previousBg) {
  //       mirror.classList.add('animated');
  //       mirror.style.animationDuration = '0.4s';
  //
  //       var coords = mirror.style.transform.match(/\((.*)\)/)[1].split(", ");
  //       mirror.style.left = coords[0];
  //       mirror.style.top = coords[1];
  //
  //       if (slider.previousIndex < slider.realIndex) {
  //         resetAnimation('slideOutLeft');
  //       } else {
  //         resetAnimation('slideOutRight');
  //       }
  //
  //       var onSlideChanging = function () {
  //         mirror.src = newBg;
  //
  //         if (slider.previousIndex < slider.realIndex) {
  //           resetAnimation('slideInRight');
  //         } else {
  //           resetAnimation('slideInLeft');
  //         }
  //
  //         mirror.addEventListener('animationend', onSlideChanged);
  //         mirror.removeEventListener('animationend',onSlideChanging);
  //       };
  //
  //       var onSlideChanged = function () {
  //         mirror.style.left = '';
  //         mirror.style.top = '';
  //         resetAnimation();
  //         mirror.classList.remove('animated');
  //         mirror.removeEventListener('animationend',onSlideChanged);
  //       };
  //
  //       mirror.addEventListener('animationend', onSlideChanging);
  //     }
  //   });
  // };
  var slider = new Swiper('.slider', {
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    } // on: {
    //   init: function () {
    //     window.setParallaxBg(this);
    //   },
    //   slideChange: function () {
    //     window.changeParallaxBg(this);
    //   },
    // },

  });

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9qcy92ZW5kb3IvcGFjZS5taW4uanMiLCJzcmMvanMvbW9kdWxlcy9wYWNlLmpzIiwic3JjL2pzL3ZlbmRvci9zd2lwZXIubWluLmpzIiwic3JjL2pzL21vZHVsZXMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBwYWNlIDAuNS4zICovXG4oZnVuY3Rpb24oKXt2YXIgdHh0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWNlLXRpdGxlXVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhY2UtdGl0bGVcIik7dmFyIGEsYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1LHYsdyx4LHkseixBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFc9W10uc2xpY2UsWD17fS5oYXNPd25Qcm9wZXJ0eSxZPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe3RoaXMuY29uc3RydWN0b3I9YX1mb3IodmFyIGQgaW4gYilYLmNhbGwoYixkKSYmKGFbZF09YltkXSk7cmV0dXJuIGMucHJvdG90eXBlPWIucHJvdG90eXBlLGEucHJvdG90eXBlPW5ldyBjLGEuX19zdXBlcl9fPWIucHJvdG90eXBlLGF9LFo9W10uaW5kZXhPZnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmxlbmd0aDtjPmI7YisrKWlmKGIgaW4gdGhpcyYmdGhpc1tiXT09PWEpcmV0dXJuIGI7cmV0dXJuLTF9O2Zvcih0PXtjYXRjaHVwVGltZTo1MDAsaW5pdGlhbFJhdGU6LjAzLG1pblRpbWU6NTAwLGdob3N0VGltZTo1MDAsbWF4UHJvZ3Jlc3NQZXJGcmFtZToxMCxlYXNlRmFjdG9yOjEuMjUsc3RhcnRPblBhZ2VMb2FkOiEwLHJlc3RhcnRPblB1c2hTdGF0ZTohMCxyZXN0YXJ0T25SZXF1ZXN0QWZ0ZXI6NTAwLHRhcmdldDpcImJvZHlcIixlbGVtZW50czp7Y2hlY2tJbnRlcnZhbDoxMDAsc2VsZWN0b3JzOltcImJvZHlcIl19LGV2ZW50TGFnOnttaW5TYW1wbGVzOjEwLHNhbXBsZUNvdW50OjMsbGFnVGhyZXNob2xkOjN9LGFqYXg6e3RyYWNrTWV0aG9kczpbXCJHRVRcIl0sdHJhY2tXZWJTb2NrZXRzOiEwLGlnbm9yZVVSTHM6W119fSxCPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIG51bGwhPShhPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBwZXJmb3JtYW5jZSYmbnVsbCE9PXBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3c/cGVyZm9ybWFuY2Uubm93KCk6dm9pZCAwKT9hOituZXcgRGF0ZX0sRD13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUscz13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSxudWxsPT1EJiYoRD1mdW5jdGlvbihhKXtyZXR1cm4gc2V0VGltZW91dChhLDUwKX0scz1mdW5jdGlvbihhKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGEpfSksRj1mdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiBiPUIoKSwoYz1mdW5jdGlvbigpe3ZhciBkO3JldHVybiBkPUIoKS1iLGQ+PTMzPyhiPUIoKSxhKGQsZnVuY3Rpb24oKXtyZXR1cm4gRChjKX0pKTpzZXRUaW1lb3V0KGMsMzMtZCl9KSgpfSxFPWZ1bmN0aW9uKCl7dmFyIGEsYixjO3JldHVybiBjPWFyZ3VtZW50c1swXSxiPWFyZ3VtZW50c1sxXSxhPTM8PWFyZ3VtZW50cy5sZW5ndGg/Vy5jYWxsKGFyZ3VtZW50cywyKTpbXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjW2JdP2NbYl0uYXBwbHkoYyxhKTpjW2JdfSx1PWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc7Zm9yKGI9YXJndW1lbnRzWzBdLGQ9Mjw9YXJndW1lbnRzLmxlbmd0aD9XLmNhbGwoYXJndW1lbnRzLDEpOltdLGY9MCxnPWQubGVuZ3RoO2c+ZjtmKyspaWYoYz1kW2ZdKWZvcihhIGluIGMpWC5jYWxsKGMsYSkmJihlPWNbYV0sbnVsbCE9YlthXSYmXCJvYmplY3RcIj09dHlwZW9mIGJbYV0mJm51bGwhPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP3UoYlthXSxlKTpiW2FdPWUpO3JldHVybiBifSxwPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7Zm9yKGM9Yj0wLGU9MCxmPWEubGVuZ3RoO2Y+ZTtlKyspZD1hW2VdLGMrPU1hdGguYWJzKGQpLGIrKztyZXR1cm4gYy9ifSx3PWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO2lmKG51bGw9PWEmJihhPVwib3B0aW9uc1wiKSxudWxsPT1iJiYoYj0hMCksZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIithK1wiXVwiKSl7aWYoYz1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGFjZS1cIithKSwhYilyZXR1cm4gYzt0cnl7cmV0dXJuIEpTT04ucGFyc2UoYyl9Y2F0Y2goZil7cmV0dXJuIGQ9ZixcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmbnVsbCE9PWNvbnNvbGU/Y29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgaW5saW5lIHBhY2Ugb3B0aW9uc1wiLGQpOnZvaWQgMH19fSxnPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe31yZXR1cm4gYS5wcm90b3R5cGUub249ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU7cmV0dXJuIG51bGw9PWQmJihkPSExKSxudWxsPT10aGlzLmJpbmRpbmdzJiYodGhpcy5iaW5kaW5ncz17fSksbnVsbD09KGU9dGhpcy5iaW5kaW5ncylbYV0mJihlW2FdPVtdKSx0aGlzLmJpbmRpbmdzW2FdLnB1c2goe2hhbmRsZXI6YixjdHg6YyxvbmNlOmR9KX0sYS5wcm90b3R5cGUub25jZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxiLGMsITApfSxhLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYobnVsbCE9KG51bGwhPShkPXRoaXMuYmluZGluZ3MpP2RbYV06dm9pZCAwKSl7aWYobnVsbD09YilyZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbYV07Zm9yKGM9MCxlPVtdO2M8dGhpcy5iaW5kaW5nc1thXS5sZW5ndGg7KWUucHVzaCh0aGlzLmJpbmRpbmdzW2FdW2NdLmhhbmRsZXI9PT1iP3RoaXMuYmluZGluZ3NbYV0uc3BsaWNlKGMsMSk6YysrKTtyZXR1cm4gZX19LGEucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZyxoLGk7aWYoYz1hcmd1bWVudHNbMF0sYT0yPD1hcmd1bWVudHMubGVuZ3RoP1cuY2FsbChhcmd1bWVudHMsMSk6W10sbnVsbCE9KGc9dGhpcy5iaW5kaW5ncyk/Z1tjXTp2b2lkIDApe2ZvcihlPTAsaT1bXTtlPHRoaXMuYmluZGluZ3NbY10ubGVuZ3RoOyloPXRoaXMuYmluZGluZ3NbY11bZV0sZD1oLmhhbmRsZXIsYj1oLmN0eCxmPWgub25jZSxkLmFwcGx5KG51bGwhPWI/Yjp0aGlzLGEpLGkucHVzaChmP3RoaXMuYmluZGluZ3NbY10uc3BsaWNlKGUsMSk6ZSsrKTtyZXR1cm4gaX19LGF9KCksbnVsbD09d2luZG93LlBhY2UmJih3aW5kb3cuUGFjZT17fSksdShQYWNlLGcucHJvdG90eXBlKSxDPVBhY2Uub3B0aW9ucz11KHt9LHQsd2luZG93LnBhY2VPcHRpb25zLHcoKSksVD1bXCJhamF4XCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIixcImVsZW1lbnRzXCJdLFA9MCxSPVQubGVuZ3RoO1I+UDtQKyspSj1UW1BdLENbSl09PT0hMCYmKENbSl09dFtKXSk7aT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7cmV0dXJuIFU9Yi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBZKGIsYSksYn0oRXJyb3IpLGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dGhpcy5wcm9ncmVzcz0wfXJldHVybiBhLnByb3RvdHlwZS5nZXRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGE7aWYobnVsbD09dGhpcy5lbCl7aWYoYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKEMudGFyZ2V0KSwhYSl0aHJvdyBuZXcgaTt0aGlzLmVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLHR4dCksdGhpcy5lbC5jbGFzc05hbWU9XCJwYWNlIHBhY2UtYWN0aXZlXCIsZG9jdW1lbnQuYm9keS5jbGFzc05hbWU9ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgvcGFjZS1kb25lL2csXCJcIiksZG9jdW1lbnQuYm9keS5jbGFzc05hbWUrPVwiIHBhY2UtcnVubmluZ1wiLHRoaXMuZWwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzc1wiPlxcbiAgPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwicGFjZS1hY3Rpdml0eVwiPjwvZGl2PicsbnVsbCE9YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKHRoaXMuZWwpfXJldHVybiB0aGlzLmVsfSxhLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gYT10aGlzLmdldEVsZW1lbnQoKSxhLmNsYXNzTmFtZT1hLmNsYXNzTmFtZS5yZXBsYWNlKFwicGFjZS1hY3RpdmVcIixcIlwiKSxhLmNsYXNzTmFtZSs9XCIgcGFjZS1pbmFjdGl2ZVwiLGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lPWRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLXJ1bm5pbmdcIixcIlwiKSxkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSs9XCIgcGFjZS1kb25lXCJ9LGEucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wcm9ncmVzcz1hLHRoaXMucmVuZGVyKCl9LGEucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0cnl7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSl9Y2F0Y2goYSl7aT1hfXJldHVybiB0aGlzLmVsPXZvaWQgMH0sYS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGEsYjtyZXR1cm4gbnVsbD09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDLnRhcmdldCk/ITE6KGE9dGhpcy5nZXRFbGVtZW50KCksYS5jaGlsZHJlblswXS5zdHlsZS5oZWlnaHQ9XCJcIisoMTAwLXRoaXMucHJvZ3Jlc3MpK1wiJVwiLCghdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzc3x8dGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzc3wwIT09dGhpcy5wcm9ncmVzc3wwKSYmKGEuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzcy10ZXh0XCIsXCJcIisoMHx0aGlzLnByb2dyZXNzKStcIiVcIiksdGhpcy5wcm9ncmVzcz49MTAwP2I9XCI5OVwiOihiPXRoaXMucHJvZ3Jlc3M8MTA/XCIwXCI6XCJcIixiKz0wfHRoaXMucHJvZ3Jlc3MpLGEuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc1wiLFwiXCIrYikpLHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3M9dGhpcy5wcm9ncmVzcyl9LGEucHJvdG90eXBlLmRvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcm9ncmVzcz49MTAwfSxhfSgpLGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dGhpcy5iaW5kaW5ncz17fX1yZXR1cm4gYS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc7aWYobnVsbCE9dGhpcy5iaW5kaW5nc1thXSl7Zm9yKGY9dGhpcy5iaW5kaW5nc1thXSxnPVtdLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspYz1mW2RdLGcucHVzaChjLmNhbGwodGhpcyxiKSk7cmV0dXJuIGd9fSxhLnByb3RvdHlwZS5vbj1mdW5jdGlvbihhLGIpe3ZhciBjO3JldHVybiBudWxsPT0oYz10aGlzLmJpbmRpbmdzKVthXSYmKGNbYV09W10pLHRoaXMuYmluZGluZ3NbYV0ucHVzaChiKX0sYX0oKSxPPXdpbmRvdy5YTUxIdHRwUmVxdWVzdCxOPXdpbmRvdy5YRG9tYWluUmVxdWVzdCxNPXdpbmRvdy5XZWJTb2NrZXQsdj1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmO2Y9W107Zm9yKGQgaW4gYi5wcm90b3R5cGUpdHJ5e2U9Yi5wcm90b3R5cGVbZF0sZi5wdXNoKG51bGw9PWFbZF0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/YVtkXT1lOnZvaWQgMCl9Y2F0Y2goZyl7Yz1nfXJldHVybiBmfSx6PVtdLFBhY2UuaWdub3JlPWZ1bmN0aW9uKCl7dmFyIGEsYixjO3JldHVybiBiPWFyZ3VtZW50c1swXSxhPTI8PWFyZ3VtZW50cy5sZW5ndGg/Vy5jYWxsKGFyZ3VtZW50cywxKTpbXSx6LnVuc2hpZnQoXCJpZ25vcmVcIiksYz1iLmFwcGx5KG51bGwsYSksei5zaGlmdCgpLGN9LFBhY2UudHJhY2s9ZnVuY3Rpb24oKXt2YXIgYSxiLGM7cmV0dXJuIGI9YXJndW1lbnRzWzBdLGE9Mjw9YXJndW1lbnRzLmxlbmd0aD9XLmNhbGwoYXJndW1lbnRzLDEpOltdLHoudW5zaGlmdChcInRyYWNrXCIpLGM9Yi5hcHBseShudWxsLGEpLHouc2hpZnQoKSxjfSxJPWZ1bmN0aW9uKGEpe3ZhciBiO2lmKG51bGw9PWEmJihhPVwiR0VUXCIpLFwidHJhY2tcIj09PXpbMF0pcmV0dXJuXCJmb3JjZVwiO2lmKCF6Lmxlbmd0aCYmQy5hamF4KXtpZihcInNvY2tldFwiPT09YSYmQy5hamF4LnRyYWNrV2ViU29ja2V0cylyZXR1cm4hMDtpZihiPWEudG9VcHBlckNhc2UoKSxaLmNhbGwoQy5hamF4LnRyYWNrTWV0aG9kcyxiKT49MClyZXR1cm4hMH1yZXR1cm4hMX0saj1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7dmFyIGEsYz10aGlzO2IuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBiPWEub3BlbixhLm9wZW49ZnVuY3Rpb24oZCxlKXtyZXR1cm4gSShkKSYmYy50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOmQsdXJsOmUscmVxdWVzdDphfSksYi5hcHBseShhLGFyZ3VtZW50cyl9fSx3aW5kb3cuWE1MSHR0cFJlcXVlc3Q9ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuIGM9bmV3IE8oYiksYShjKSxjfSx2KHdpbmRvdy5YTUxIdHRwUmVxdWVzdCxPKSxudWxsIT1OJiYod2luZG93LlhEb21haW5SZXF1ZXN0PWZ1bmN0aW9uKCl7dmFyIGI7cmV0dXJuIGI9bmV3IE4sYShiKSxifSx2KHdpbmRvdy5YRG9tYWluUmVxdWVzdCxOKSksbnVsbCE9TSYmQy5hamF4LnRyYWNrV2ViU29ja2V0cyYmKHdpbmRvdy5XZWJTb2NrZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgZDtyZXR1cm4gZD1udWxsIT1iP25ldyBNKGEsYik6bmV3IE0oYSksSShcInNvY2tldFwiKSYmYy50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOlwic29ja2V0XCIsdXJsOmEscHJvdG9jb2xzOmIscmVxdWVzdDpkfSksZH0sdih3aW5kb3cuV2ViU29ja2V0LE0pKX1yZXR1cm4gWShiLGEpLGJ9KGgpLFE9bnVsbCx4PWZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PVEmJihRPW5ldyBqKSxRfSxIPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlO2ZvcihlPUMuYWpheC5pZ25vcmVVUkxzLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspaWYoYj1lW2NdLFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZigtMSE9PWEuaW5kZXhPZihiKSlyZXR1cm4hMH1lbHNlIGlmKGIudGVzdChhKSlyZXR1cm4hMDtyZXR1cm4hMX0seCgpLm9uKFwicmVxdWVzdFwiLGZ1bmN0aW9uKGIpe3ZhciBjLGQsZSxmLGc7cmV0dXJuIGY9Yi50eXBlLGU9Yi5yZXF1ZXN0LGc9Yi51cmwsSChnKT92b2lkIDA6UGFjZS5ydW5uaW5nfHxDLnJlc3RhcnRPblJlcXVlc3RBZnRlcj09PSExJiZcImZvcmNlXCIhPT1JKGYpP3ZvaWQgMDooZD1hcmd1bWVudHMsYz1DLnJlc3RhcnRPblJlcXVlc3RBZnRlcnx8MCxcImJvb2xlYW5cIj09dHlwZW9mIGMmJihjPTApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYixjLGcsaCxpLGo7aWYoYj1cInNvY2tldFwiPT09Zj9lLnJlYWR5U3RhdGU8MjowPChoPWUucmVhZHlTdGF0ZSkmJjQ+aCl7Zm9yKFBhY2UucmVzdGFydCgpLGk9UGFjZS5zb3VyY2VzLGo9W10sYz0wLGc9aS5sZW5ndGg7Zz5jO2MrKyl7aWYoSj1pW2NdLEogaW5zdGFuY2VvZiBhKXtKLndhdGNoLmFwcGx5KEosZCk7YnJlYWt9ai5wdXNoKHZvaWQgMCl9cmV0dXJuIGp9fSxjKSl9KSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3ZhciBhPXRoaXM7dGhpcy5lbGVtZW50cz1bXSx4KCkub24oXCJyZXF1ZXN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gYS53YXRjaC5hcHBseShhLGFyZ3VtZW50cyl9KX1yZXR1cm4gYS5wcm90b3R5cGUud2F0Y2g9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU7cmV0dXJuIGQ9YS50eXBlLGI9YS5yZXF1ZXN0LGU9YS51cmwsSChlKT92b2lkIDA6KGM9XCJzb2NrZXRcIj09PWQ/bmV3IG0oYik6bmV3IG4oYiksdGhpcy5lbGVtZW50cy5wdXNoKGMpKX0sYX0oKSxuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXt2YXIgYixjLGQsZSxmLGcsaD10aGlzO2lmKHRoaXMucHJvZ3Jlc3M9MCxudWxsIT13aW5kb3cuUHJvZ3Jlc3NFdmVudClmb3IoYz1udWxsLGEuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGgucHJvZ3Jlc3M9YS5sZW5ndGhDb21wdXRhYmxlPzEwMCphLmxvYWRlZC9hLnRvdGFsOmgucHJvZ3Jlc3MrKDEwMC1oLnByb2dyZXNzKS8yfSksZz1bXCJsb2FkXCIsXCJhYm9ydFwiLFwidGltZW91dFwiLFwiZXJyb3JcIl0sZD0wLGU9Zy5sZW5ndGg7ZT5kO2QrKyliPWdbZF0sYS5hZGRFdmVudExpc3RlbmVyKGIsZnVuY3Rpb24oKXtyZXR1cm4gaC5wcm9ncmVzcz0xMDB9KTtlbHNlIGY9YS5vbnJlYWR5c3RhdGVjaGFuZ2UsYS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgYjtyZXR1cm4gMD09PShiPWEucmVhZHlTdGF0ZSl8fDQ9PT1iP2gucHJvZ3Jlc3M9MTAwOjM9PT1hLnJlYWR5U3RhdGUmJihoLnByb2dyZXNzPTUwKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmP2YuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH19cmV0dXJuIGF9KCksbT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dmFyIGIsYyxkLGUsZj10aGlzO2Zvcih0aGlzLnByb2dyZXNzPTAsZT1bXCJlcnJvclwiLFwib3BlblwiXSxjPTAsZD1lLmxlbmd0aDtkPmM7YysrKWI9ZVtjXSxhLmFkZEV2ZW50TGlzdGVuZXIoYixmdW5jdGlvbigpe3JldHVybiBmLnByb2dyZXNzPTEwMH0pfXJldHVybiBhfSgpLGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3ZhciBiLGMsZCxmO2ZvcihudWxsPT1hJiYoYT17fSksdGhpcy5lbGVtZW50cz1bXSxudWxsPT1hLnNlbGVjdG9ycyYmKGEuc2VsZWN0b3JzPVtdKSxmPWEuc2VsZWN0b3JzLGM9MCxkPWYubGVuZ3RoO2Q+YztjKyspYj1mW2NdLHRoaXMuZWxlbWVudHMucHVzaChuZXcgZShiKSl9cmV0dXJuIGF9KCksZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dGhpcy5zZWxlY3Rvcj1hLHRoaXMucHJvZ3Jlc3M9MCx0aGlzLmNoZWNrKCl9cmV0dXJuIGEucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKT90aGlzLmRvbmUoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGEuY2hlY2soKX0sQy5lbGVtZW50cy5jaGVja0ludGVydmFsKX0sYS5wcm90b3R5cGUuZG9uZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb2dyZXNzPTEwMH0sYX0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3ZhciBhLGIsYz10aGlzO3RoaXMucHJvZ3Jlc3M9bnVsbCE9KGI9dGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pP2I6MTAwLGE9ZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlLGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT1jLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSYmKGMucHJvZ3Jlc3M9Yy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfX1yZXR1cm4gYS5wcm90b3R5cGUuc3RhdGVzPXtsb2FkaW5nOjAsaW50ZXJhY3RpdmU6NTAsY29tcGxldGU6MTAwfSxhfSgpLGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dmFyIGEsYixjLGQsZSxmPXRoaXM7dGhpcy5wcm9ncmVzcz0wLGE9MCxlPVtdLGQ9MCxjPUIoKSxiPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIGc7cmV0dXJuIGc9QigpLWMtNTAsYz1CKCksZS5wdXNoKGcpLGUubGVuZ3RoPkMuZXZlbnRMYWcuc2FtcGxlQ291bnQmJmUuc2hpZnQoKSxhPXAoZSksKytkPj1DLmV2ZW50TGFnLm1pblNhbXBsZXMmJmE8Qy5ldmVudExhZy5sYWdUaHJlc2hvbGQ/KGYucHJvZ3Jlc3M9MTAwLGNsZWFySW50ZXJ2YWwoYikpOmYucHJvZ3Jlc3M9MTAwKigzLyhhKzMpKX0sNTApfXJldHVybiBhfSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3RoaXMuc291cmNlPWEsdGhpcy5sYXN0PXRoaXMuc2luY2VMYXN0VXBkYXRlPTAsdGhpcy5yYXRlPUMuaW5pdGlhbFJhdGUsdGhpcy5jYXRjaHVwPTAsdGhpcy5wcm9ncmVzcz10aGlzLmxhc3RQcm9ncmVzcz0wLG51bGwhPXRoaXMuc291cmNlJiYodGhpcy5wcm9ncmVzcz1FKHRoaXMuc291cmNlLFwicHJvZ3Jlc3NcIikpfXJldHVybiBhLnByb3RvdHlwZS50aWNrPWZ1bmN0aW9uKGEsYil7dmFyIGM7cmV0dXJuIG51bGw9PWImJihiPUUodGhpcy5zb3VyY2UsXCJwcm9ncmVzc1wiKSksYj49MTAwJiYodGhpcy5kb25lPSEwKSxiPT09dGhpcy5sYXN0P3RoaXMuc2luY2VMYXN0VXBkYXRlKz1hOih0aGlzLnNpbmNlTGFzdFVwZGF0ZSYmKHRoaXMucmF0ZT0oYi10aGlzLmxhc3QpL3RoaXMuc2luY2VMYXN0VXBkYXRlKSx0aGlzLmNhdGNodXA9KGItdGhpcy5wcm9ncmVzcykvQy5jYXRjaHVwVGltZSx0aGlzLnNpbmNlTGFzdFVwZGF0ZT0wLHRoaXMubGFzdD1iKSxiPnRoaXMucHJvZ3Jlc3MmJih0aGlzLnByb2dyZXNzKz10aGlzLmNhdGNodXAqYSksYz0xLU1hdGgucG93KHRoaXMucHJvZ3Jlc3MvMTAwLEMuZWFzZUZhY3RvciksdGhpcy5wcm9ncmVzcys9Yyp0aGlzLnJhdGUqYSx0aGlzLnByb2dyZXNzPU1hdGgubWluKHRoaXMubGFzdFByb2dyZXNzK0MubWF4UHJvZ3Jlc3NQZXJGcmFtZSx0aGlzLnByb2dyZXNzKSx0aGlzLnByb2dyZXNzPU1hdGgubWF4KDAsdGhpcy5wcm9ncmVzcyksdGhpcy5wcm9ncmVzcz1NYXRoLm1pbigxMDAsdGhpcy5wcm9ncmVzcyksdGhpcy5sYXN0UHJvZ3Jlc3M9dGhpcy5wcm9ncmVzcyx0aGlzLnByb2dyZXNzfSxhfSgpLEs9bnVsbCxHPW51bGwscT1udWxsLEw9bnVsbCxvPW51bGwscj1udWxsLFBhY2UucnVubmluZz0hMSx5PWZ1bmN0aW9uKCl7cmV0dXJuIEMucmVzdGFydE9uUHVzaFN0YXRlP1BhY2UucmVzdGFydCgpOnZvaWQgMH0sbnVsbCE9d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlJiYoUz13aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHkoKSxTLmFwcGx5KHdpbmRvdy5oaXN0b3J5LGFyZ3VtZW50cyl9KSxudWxsIT13aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUmJihWPXdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSx3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4geSgpLFYuYXBwbHkod2luZG93Lmhpc3RvcnksYXJndW1lbnRzKX0pLGs9e2FqYXg6YSxlbGVtZW50czpkLGRvY3VtZW50OmMsZXZlbnRMYWc6Zn0sKEE9ZnVuY3Rpb24oKXt2YXIgYSxjLGQsZSxmLGcsaCxpO2ZvcihQYWNlLnNvdXJjZXM9Sz1bXSxnPVtcImFqYXhcIixcImVsZW1lbnRzXCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIl0sYz0wLGU9Zy5sZW5ndGg7ZT5jO2MrKylhPWdbY10sQ1thXSE9PSExJiZLLnB1c2gobmV3IGtbYV0oQ1thXSkpO2ZvcihpPW51bGwhPShoPUMuZXh0cmFTb3VyY2VzKT9oOltdLGQ9MCxmPWkubGVuZ3RoO2Y+ZDtkKyspSj1pW2RdLEsucHVzaChuZXcgSihDKSk7cmV0dXJuIFBhY2UuYmFyPXE9bmV3IGIsRz1bXSxMPW5ldyBsfSkoKSxQYWNlLnN0b3A9ZnVuY3Rpb24oKXtyZXR1cm4gUGFjZS50cmlnZ2VyKFwic3RvcFwiKSxQYWNlLnJ1bm5pbmc9ITEscS5kZXN0cm95KCkscj0hMCxudWxsIT1vJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgcyYmcyhvKSxvPW51bGwpLEEoKX0sUGFjZS5yZXN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIFBhY2UudHJpZ2dlcihcInJlc3RhcnRcIiksUGFjZS5zdG9wKCksUGFjZS5zdGFydCgpfSxQYWNlLmdvPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIFBhY2UucnVubmluZz0hMCxxLnJlbmRlcigpLGE9QigpLHI9ITEsbz1GKGZ1bmN0aW9uKGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxtLG4sbyxwLHMsdCx1LHY7Zm9yKGs9MTAwLXEucHJvZ3Jlc3MsZT1vPTAsZj0hMCxpPXA9MCx0PUsubGVuZ3RoO3Q+cDtpPSsrcClmb3IoSj1LW2ldLG49bnVsbCE9R1tpXT9HW2ldOkdbaV09W10saD1udWxsIT0odj1KLmVsZW1lbnRzKT92OltKXSxqPXM9MCx1PWgubGVuZ3RoO3U+cztqPSsrcylnPWhbal0sbT1udWxsIT1uW2pdP25bal06bltqXT1uZXcgbChnKSxmJj1tLmRvbmUsbS5kb25lfHwoZSsrLG8rPW0udGljayhiKSk7cmV0dXJuIGQ9by9lLHEudXBkYXRlKEwudGljayhiLGQpKSxxLmRvbmUoKXx8Znx8cj8ocS51cGRhdGUoMTAwKSxQYWNlLnRyaWdnZXIoXCJkb25lXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gcS5maW5pc2goKSxQYWNlLnJ1bm5pbmc9ITEsUGFjZS50cmlnZ2VyKFwiaGlkZVwiKX0sTWF0aC5tYXgoQy5naG9zdFRpbWUsTWF0aC5tYXgoQy5taW5UaW1lLShCKCktYSksMCkpKSk6YygpfSl9LFBhY2Uuc3RhcnQ9ZnVuY3Rpb24oYSl7dShDLGEpLFBhY2UucnVubmluZz0hMDt0cnl7cS5yZW5kZXIoKX1jYXRjaChiKXtpPWJ9cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFjZVwiKT8oUGFjZS50cmlnZ2VyKFwic3RhcnRcIiksUGFjZS5nbygpKTpzZXRUaW1lb3V0KFBhY2Uuc3RhcnQsNTApfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIFBhY2V9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1QYWNlOkMuc3RhcnRPblBhZ2VMb2FkJiZQYWNlLnN0YXJ0KCl9KS5jYWxsKHRoaXMpO1xuZXhwb3J0IGRlZmF1bHQge31cbiIsImRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xud2luZG93LnBhY2VPcHRpb25zID0ge1xuICBhamF4OiBmYWxzZSxcbiAgZG9jdW1lbnQ6IGZhbHNlLFxuICBldmVudExhZzogZmFsc2UsXG4gIGVsZW1lbnRzOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQge31cbiIsIi8qKlxuICogU3dpcGVyIDQuNS4wXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxOSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBGZWJydWFyeSAyMiwgMjAxOVxuICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmKS5Td2lwZXI9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50P3tib2R5Ont9LGFkZEV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oKXt9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oKXt9LGFjdGl2ZUVsZW1lbnQ6e2JsdXI6ZnVuY3Rpb24oKXt9LG5vZGVOYW1lOlwiXCJ9LHF1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbigpe3JldHVybltdfSxnZXRFbGVtZW50QnlJZDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxjcmVhdGVFdmVudDpmdW5jdGlvbigpe3JldHVybntpbml0RXZlbnQ6ZnVuY3Rpb24oKXt9fX0sY3JlYXRlRWxlbWVudDpmdW5jdGlvbigpe3JldHVybntjaGlsZHJlbjpbXSxjaGlsZE5vZGVzOltdLHN0eWxlOnt9LHNldEF0dHJpYnV0ZTpmdW5jdGlvbigpe30sZ2V0RWxlbWVudHNCeVRhZ05hbWU6ZnVuY3Rpb24oKXtyZXR1cm5bXX19fSxsb2NhdGlvbjp7aGFzaDpcIlwifX06ZG9jdW1lbnQsSj1cInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93P3tkb2N1bWVudDpmLG5hdmlnYXRvcjp7dXNlckFnZW50OlwiXCJ9LGxvY2F0aW9uOnt9LGhpc3Rvcnk6e30sQ3VzdG9tRXZlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sYWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbigpe30scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbigpe30sZ2V0Q29tcHV0ZWRTdHlsZTpmdW5jdGlvbigpe3JldHVybntnZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn19fSxJbWFnZTpmdW5jdGlvbigpe30sRGF0ZTpmdW5jdGlvbigpe30sc2NyZWVuOnt9LHNldFRpbWVvdXQ6ZnVuY3Rpb24oKXt9LGNsZWFyVGltZW91dDpmdW5jdGlvbigpe319OndpbmRvdyxsPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCs9MSl0aGlzW3RdPWVbdF07cmV0dXJuIHRoaXMubGVuZ3RoPWUubGVuZ3RoLHRoaXN9O2Z1bmN0aW9uIEwoZSx0KXt2YXIgYT1bXSxpPTA7aWYoZSYmIXQmJmUgaW5zdGFuY2VvZiBsKXJldHVybiBlO2lmKGUpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzLHIsbj1lLnRyaW0oKTtpZigwPD1uLmluZGV4T2YoXCI8XCIpJiYwPD1uLmluZGV4T2YoXCI+XCIpKXt2YXIgbz1cImRpdlwiO2ZvcigwPT09bi5pbmRleE9mKFwiPGxpXCIpJiYobz1cInVsXCIpLDA9PT1uLmluZGV4T2YoXCI8dHJcIikmJihvPVwidGJvZHlcIiksMCE9PW4uaW5kZXhPZihcIjx0ZFwiKSYmMCE9PW4uaW5kZXhPZihcIjx0aFwiKXx8KG89XCJ0clwiKSwwPT09bi5pbmRleE9mKFwiPHRib2R5XCIpJiYobz1cInRhYmxlXCIpLDA9PT1uLmluZGV4T2YoXCI8b3B0aW9uXCIpJiYobz1cInNlbGVjdFwiKSwocj1mLmNyZWF0ZUVsZW1lbnQobykpLmlubmVySFRNTD1uLGk9MDtpPHIuY2hpbGROb2Rlcy5sZW5ndGg7aSs9MSlhLnB1c2goci5jaGlsZE5vZGVzW2ldKX1lbHNlIGZvcihzPXR8fFwiI1wiIT09ZVswXXx8ZS5tYXRjaCgvWyAuPD46fl0vKT8odHx8ZikucXVlcnlTZWxlY3RvckFsbChlLnRyaW0oKSk6W2YuZ2V0RWxlbWVudEJ5SWQoZS50cmltKCkuc3BsaXQoXCIjXCIpWzFdKV0saT0wO2k8cy5sZW5ndGg7aSs9MSlzW2ldJiZhLnB1c2goc1tpXSl9ZWxzZSBpZihlLm5vZGVUeXBlfHxlPT09Snx8ZT09PWYpYS5wdXNoKGUpO2Vsc2UgaWYoMDxlLmxlbmd0aCYmZVswXS5ub2RlVHlwZSlmb3IoaT0wO2k8ZS5sZW5ndGg7aSs9MSlhLnB1c2goZVtpXSk7cmV0dXJuIG5ldyBsKGEpfWZ1bmN0aW9uIHIoZSl7Zm9yKHZhciB0PVtdLGE9MDthPGUubGVuZ3RoO2ErPTEpLTE9PT10LmluZGV4T2YoZVthXSkmJnQucHVzaChlW2FdKTtyZXR1cm4gdH1MLmZuPWwucHJvdG90eXBlLEwuQ2xhc3M9bCxMLkRvbTc9bDt2YXIgdD17YWRkQ2xhc3M6ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSlyZXR1cm4gdGhpcztmb3IodmFyIHQ9ZS5zcGxpdChcIiBcIiksYT0wO2E8dC5sZW5ndGg7YSs9MSlmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krPTEpdm9pZCAwIT09dGhpc1tpXSYmdm9pZCAwIT09dGhpc1tpXS5jbGFzc0xpc3QmJnRoaXNbaV0uY2xhc3NMaXN0LmFkZCh0W2FdKTtyZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIgXCIpLGE9MDthPHQubGVuZ3RoO2ErPTEpZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKz0xKXZvaWQgMCE9PXRoaXNbaV0mJnZvaWQgMCE9PXRoaXNbaV0uY2xhc3NMaXN0JiZ0aGlzW2ldLmNsYXNzTGlzdC5yZW1vdmUodFthXSk7cmV0dXJuIHRoaXN9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3JldHVybiEhdGhpc1swXSYmdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnMoZSl9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnNwbGl0KFwiIFwiKSxhPTA7YTx0Lmxlbmd0aDthKz0xKWZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSs9MSl2b2lkIDAhPT10aGlzW2ldJiZ2b2lkIDAhPT10aGlzW2ldLmNsYXNzTGlzdCYmdGhpc1tpXS5jbGFzc0xpc3QudG9nZ2xlKHRbYV0pO3JldHVybiB0aGlzfSxhdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIGE9YXJndW1lbnRzO2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gdGhpc1swXT90aGlzWzBdLmdldEF0dHJpYnV0ZShlKTp2b2lkIDA7Zm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKz0xKWlmKDI9PT1hLmxlbmd0aCl0aGlzW2ldLnNldEF0dHJpYnV0ZShlLHQpO2Vsc2UgZm9yKHZhciBzIGluIGUpdGhpc1tpXVtzXT1lW3NdLHRoaXNbaV0uc2V0QXR0cmlidXRlKHMsZVtzXSk7cmV0dXJuIHRoaXN9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKXRoaXNbdF0ucmVtb3ZlQXR0cmlidXRlKGUpO3JldHVybiB0aGlzfSxkYXRhOmZ1bmN0aW9uKGUsdCl7dmFyIGE7aWYodm9pZCAwIT09dCl7Zm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKz0xKShhPXRoaXNbaV0pLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2V8fChhLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2U9e30pLGEuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtlXT10O3JldHVybiB0aGlzfWlmKGE9dGhpc1swXSl7aWYoYS5kb203RWxlbWVudERhdGFTdG9yYWdlJiZlIGluIGEuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSlyZXR1cm4gYS5kb203RWxlbWVudERhdGFTdG9yYWdlW2VdO3ZhciBzPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIitlKTtyZXR1cm4gc3x8dm9pZCAwfX0sdHJhbnNmb3JtOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSl7dmFyIGE9dGhpc1t0XS5zdHlsZTthLndlYmtpdFRyYW5zZm9ybT1lLGEudHJhbnNmb3JtPWV9cmV0dXJuIHRoaXN9LHRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJihlKz1cIm1zXCIpO2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSl7dmFyIGE9dGhpc1t0XS5zdHlsZTthLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbj1lLGEudHJhbnNpdGlvbkR1cmF0aW9uPWV9cmV0dXJuIHRoaXN9LG9uOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9W10sYT1hcmd1bWVudHMubGVuZ3RoO2EtLTspdFthXT1hcmd1bWVudHNbYV07dmFyIGk9dFswXSxyPXRbMV0sbj10WzJdLHM9dFszXTtmdW5jdGlvbiBvKGUpe3ZhciB0PWUudGFyZ2V0O2lmKHQpe3ZhciBhPWUudGFyZ2V0LmRvbTdFdmVudERhdGF8fFtdO2lmKGEuaW5kZXhPZihlKTwwJiZhLnVuc2hpZnQoZSksTCh0KS5pcyhyKSluLmFwcGx5KHQsYSk7ZWxzZSBmb3IodmFyIGk9TCh0KS5wYXJlbnRzKCkscz0wO3M8aS5sZW5ndGg7cys9MSlMKGlbc10pLmlzKHIpJiZuLmFwcGx5KGlbc10sYSl9fWZ1bmN0aW9uIGwoZSl7dmFyIHQ9ZSYmZS50YXJnZXQmJmUudGFyZ2V0LmRvbTdFdmVudERhdGF8fFtdO3QuaW5kZXhPZihlKTwwJiZ0LnVuc2hpZnQoZSksbi5hcHBseSh0aGlzLHQpfVwiZnVuY3Rpb25cIj09dHlwZW9mIHRbMV0mJihpPShlPXQpWzBdLG49ZVsxXSxzPWVbMl0scj12b2lkIDApLHN8fChzPSExKTtmb3IodmFyIGQscD1pLnNwbGl0KFwiIFwiKSxjPTA7Yzx0aGlzLmxlbmd0aDtjKz0xKXt2YXIgdT10aGlzW2NdO2lmKHIpZm9yKGQ9MDtkPHAubGVuZ3RoO2QrPTEpe3ZhciBoPXBbZF07dS5kb203TGl2ZUxpc3RlbmVyc3x8KHUuZG9tN0xpdmVMaXN0ZW5lcnM9e30pLHUuZG9tN0xpdmVMaXN0ZW5lcnNbaF18fCh1LmRvbTdMaXZlTGlzdGVuZXJzW2hdPVtdKSx1LmRvbTdMaXZlTGlzdGVuZXJzW2hdLnB1c2goe2xpc3RlbmVyOm4scHJveHlMaXN0ZW5lcjpvfSksdS5hZGRFdmVudExpc3RlbmVyKGgsbyxzKX1lbHNlIGZvcihkPTA7ZDxwLmxlbmd0aDtkKz0xKXt2YXIgdj1wW2RdO3UuZG9tN0xpc3RlbmVyc3x8KHUuZG9tN0xpc3RlbmVycz17fSksdS5kb203TGlzdGVuZXJzW3ZdfHwodS5kb203TGlzdGVuZXJzW3ZdPVtdKSx1LmRvbTdMaXN0ZW5lcnNbdl0ucHVzaCh7bGlzdGVuZXI6bixwcm94eUxpc3RlbmVyOmx9KSx1LmFkZEV2ZW50TGlzdGVuZXIodixsLHMpfX1yZXR1cm4gdGhpc30sb2ZmOmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9W10sYT1hcmd1bWVudHMubGVuZ3RoO2EtLTspdFthXT1hcmd1bWVudHNbYV07dmFyIGk9dFswXSxzPXRbMV0scj10WzJdLG49dFszXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0WzFdJiYoaT0oZT10KVswXSxyPWVbMV0sbj1lWzJdLHM9dm9pZCAwKSxufHwobj0hMSk7Zm9yKHZhciBvPWkuc3BsaXQoXCIgXCIpLGw9MDtsPG8ubGVuZ3RoO2wrPTEpZm9yKHZhciBkPW9bbF0scD0wO3A8dGhpcy5sZW5ndGg7cCs9MSl7dmFyIGM9dGhpc1twXSx1PXZvaWQgMDtpZighcyYmYy5kb203TGlzdGVuZXJzP3U9Yy5kb203TGlzdGVuZXJzW2RdOnMmJmMuZG9tN0xpdmVMaXN0ZW5lcnMmJih1PWMuZG9tN0xpdmVMaXN0ZW5lcnNbZF0pLHUmJnUubGVuZ3RoKWZvcih2YXIgaD11Lmxlbmd0aC0xOzA8PWg7aC09MSl7dmFyIHY9dVtoXTtyJiZ2Lmxpc3RlbmVyPT09cj8oYy5yZW1vdmVFdmVudExpc3RlbmVyKGQsdi5wcm94eUxpc3RlbmVyLG4pLHUuc3BsaWNlKGgsMSkpOnImJnYubGlzdGVuZXImJnYubGlzdGVuZXIuZG9tN3Byb3h5JiZ2Lmxpc3RlbmVyLmRvbTdwcm94eT09PXI/KGMucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHYucHJveHlMaXN0ZW5lcixuKSx1LnNwbGljZShoLDEpKTpyfHwoYy5yZW1vdmVFdmVudExpc3RlbmVyKGQsdi5wcm94eUxpc3RlbmVyLG4pLHUuc3BsaWNlKGgsMSkpfX1yZXR1cm4gdGhpc30sdHJpZ2dlcjpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PWFyZ3VtZW50cy5sZW5ndGg7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTtmb3IodmFyIGE9ZVswXS5zcGxpdChcIiBcIiksaT1lWzFdLHM9MDtzPGEubGVuZ3RoO3MrPTEpZm9yKHZhciByPWFbc10sbj0wO248dGhpcy5sZW5ndGg7bis9MSl7dmFyIG89dGhpc1tuXSxsPXZvaWQgMDt0cnl7bD1uZXcgSi5DdXN0b21FdmVudChyLHtkZXRhaWw6aSxidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KX1jYXRjaChlKXsobD1mLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLmluaXRFdmVudChyLCEwLCEwKSxsLmRldGFpbD1pfW8uZG9tN0V2ZW50RGF0YT1lLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiAwPHR9KSxvLmRpc3BhdGNoRXZlbnQobCksby5kb203RXZlbnREYXRhPVtdLGRlbGV0ZSBvLmRvbTdFdmVudERhdGF9cmV0dXJuIHRoaXN9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24odCl7dmFyIGEsaT1bXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXCJ0cmFuc2l0aW9uZW5kXCJdLHM9dGhpcztmdW5jdGlvbiByKGUpe2lmKGUudGFyZ2V0PT09dGhpcylmb3IodC5jYWxsKHRoaXMsZSksYT0wO2E8aS5sZW5ndGg7YSs9MSlzLm9mZihpW2FdLHIpfWlmKHQpZm9yKGE9MDthPGkubGVuZ3RoO2ErPTEpcy5vbihpW2FdLHIpO3JldHVybiB0aGlzfSxvdXRlcldpZHRoOmZ1bmN0aW9uKGUpe2lmKDA8dGhpcy5sZW5ndGgpe2lmKGUpe3ZhciB0PXRoaXMuc3R5bGVzKCk7cmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGgrcGFyc2VGbG9hdCh0LmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tcmlnaHRcIikpK3BhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWxlZnRcIikpfXJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRofXJldHVybiBudWxsfSxvdXRlckhlaWdodDpmdW5jdGlvbihlKXtpZigwPHRoaXMubGVuZ3RoKXtpZihlKXt2YXIgdD10aGlzLnN0eWxlcygpO3JldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCtwYXJzZUZsb2F0KHQuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi10b3BcIikpK3BhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWJvdHRvbVwiKSl9cmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0fXJldHVybiBudWxsfSxvZmZzZXQ6ZnVuY3Rpb24oKXtpZigwPHRoaXMubGVuZ3RoKXt2YXIgZT10aGlzWzBdLHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWYuYm9keSxpPWUuY2xpZW50VG9wfHxhLmNsaWVudFRvcHx8MCxzPWUuY2xpZW50TGVmdHx8YS5jbGllbnRMZWZ0fHwwLHI9ZT09PUo/Si5zY3JvbGxZOmUuc2Nyb2xsVG9wLG49ZT09PUo/Si5zY3JvbGxYOmUuc2Nyb2xsTGVmdDtyZXR1cm57dG9wOnQudG9wK3ItaSxsZWZ0OnQubGVmdCtuLXN9fXJldHVybiBudWxsfSxjc3M6ZnVuY3Rpb24oZSx0KXt2YXIgYTtpZigxPT09YXJndW1lbnRzLmxlbmd0aCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpe2ZvcihhPTA7YTx0aGlzLmxlbmd0aDthKz0xKWZvcih2YXIgaSBpbiBlKXRoaXNbYV0uc3R5bGVbaV09ZVtpXTtyZXR1cm4gdGhpc31pZih0aGlzWzBdKXJldHVybiBKLmdldENvbXB1dGVkU3R5bGUodGhpc1swXSxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKGUpfWlmKDI9PT1hcmd1bWVudHMubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgZSl7Zm9yKGE9MDthPHRoaXMubGVuZ3RoO2ErPTEpdGhpc1thXS5zdHlsZVtlXT10O3JldHVybiB0aGlzfXJldHVybiB0aGlzfSxlYWNoOmZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiB0aGlzO2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSlpZighMT09PWUuY2FsbCh0aGlzW3RdLHQsdGhpc1t0XSkpcmV0dXJuIHRoaXM7cmV0dXJuIHRoaXN9LGh0bWw6ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSlyZXR1cm4gdGhpc1swXT90aGlzWzBdLmlubmVySFRNTDp2b2lkIDA7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKXRoaXNbdF0uaW5uZXJIVE1MPWU7cmV0dXJuIHRoaXN9LHRleHQ6ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSlyZXR1cm4gdGhpc1swXT90aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTpudWxsO2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSl0aGlzW3RdLnRleHRDb250ZW50PWU7cmV0dXJuIHRoaXN9LGlzOmZ1bmN0aW9uKGUpe3ZhciB0LGEsaT10aGlzWzBdO2lmKCFpfHx2b2lkIDA9PT1lKXJldHVybiExO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZihpLm1hdGNoZXMpcmV0dXJuIGkubWF0Y2hlcyhlKTtpZihpLndlYmtpdE1hdGNoZXNTZWxlY3RvcilyZXR1cm4gaS53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSk7aWYoaS5tc01hdGNoZXNTZWxlY3RvcilyZXR1cm4gaS5tc01hdGNoZXNTZWxlY3RvcihlKTtmb3IodD1MKGUpLGE9MDthPHQubGVuZ3RoO2ErPTEpaWYodFthXT09PWkpcmV0dXJuITA7cmV0dXJuITF9aWYoZT09PWYpcmV0dXJuIGk9PT1mO2lmKGU9PT1KKXJldHVybiBpPT09SjtpZihlLm5vZGVUeXBlfHxlIGluc3RhbmNlb2YgbCl7Zm9yKHQ9ZS5ub2RlVHlwZT9bZV06ZSxhPTA7YTx0Lmxlbmd0aDthKz0xKWlmKHRbYV09PT1pKXJldHVybiEwO3JldHVybiExfXJldHVybiExfSxpbmRleDpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpc1swXTtpZih0KXtmb3IoZT0wO251bGwhPT0odD10LnByZXZpb3VzU2libGluZyk7KTE9PT10Lm5vZGVUeXBlJiYoZSs9MSk7cmV0dXJuIGV9fSxlcTpmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXJldHVybiB0aGlzO3ZhciB0LGE9dGhpcy5sZW5ndGg7cmV0dXJuIG5ldyBsKGEtMTxlP1tdOmU8MD8odD1hK2UpPDA/W106W3RoaXNbdF1dOlt0aGlzW2VdXSl9LGFwcGVuZDpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLGE9YXJndW1lbnRzLmxlbmd0aDthLS07KXRbYV09YXJndW1lbnRzW2FdO2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSs9MSl7ZT10W2ldO2Zvcih2YXIgcz0wO3M8dGhpcy5sZW5ndGg7cys9MSlpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHI9Zi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihyLmlubmVySFRNTD1lO3IuZmlyc3RDaGlsZDspdGhpc1tzXS5hcHBlbmRDaGlsZChyLmZpcnN0Q2hpbGQpfWVsc2UgaWYoZSBpbnN0YW5jZW9mIGwpZm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKz0xKXRoaXNbc10uYXBwZW5kQ2hpbGQoZVtuXSk7ZWxzZSB0aGlzW3NdLmFwcGVuZENoaWxkKGUpfXJldHVybiB0aGlzfSxwcmVwZW5kOmZ1bmN0aW9uKGUpe3ZhciB0LGE7Zm9yKHQ9MDt0PHRoaXMubGVuZ3RoO3QrPTEpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBpPWYuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoaS5pbm5lckhUTUw9ZSxhPWkuY2hpbGROb2Rlcy5sZW5ndGgtMTswPD1hO2EtPTEpdGhpc1t0XS5pbnNlcnRCZWZvcmUoaS5jaGlsZE5vZGVzW2FdLHRoaXNbdF0uY2hpbGROb2Rlc1swXSl9ZWxzZSBpZihlIGluc3RhbmNlb2YgbClmb3IoYT0wO2E8ZS5sZW5ndGg7YSs9MSl0aGlzW3RdLmluc2VydEJlZm9yZShlW2FdLHRoaXNbdF0uY2hpbGROb2Rlc1swXSk7ZWxzZSB0aGlzW3RdLmluc2VydEJlZm9yZShlLHRoaXNbdF0uY2hpbGROb2Rlc1swXSk7cmV0dXJuIHRoaXN9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIDA8dGhpcy5sZW5ndGg/ZT90aGlzWzBdLm5leHRFbGVtZW50U2libGluZyYmTCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMoZSk/bmV3IGwoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk6bmV3IGwoW10pOnRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nP25ldyBsKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pOm5ldyBsKFtdKTpuZXcgbChbXSl9LG5leHRBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ9W10sYT10aGlzWzBdO2lmKCFhKXJldHVybiBuZXcgbChbXSk7Zm9yKDthLm5leHRFbGVtZW50U2libGluZzspe3ZhciBpPWEubmV4dEVsZW1lbnRTaWJsaW5nO2U/TChpKS5pcyhlKSYmdC5wdXNoKGkpOnQucHVzaChpKSxhPWl9cmV0dXJuIG5ldyBsKHQpfSxwcmV2OmZ1bmN0aW9uKGUpe2lmKDA8dGhpcy5sZW5ndGgpe3ZhciB0PXRoaXNbMF07cmV0dXJuIGU/dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nJiZMKHQucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoZSk/bmV3IGwoW3QucHJldmlvdXNFbGVtZW50U2libGluZ10pOm5ldyBsKFtdKTp0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/bmV3IGwoW3QucHJldmlvdXNFbGVtZW50U2libGluZ10pOm5ldyBsKFtdKX1yZXR1cm4gbmV3IGwoW10pfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3ZhciB0PVtdLGE9dGhpc1swXTtpZighYSlyZXR1cm4gbmV3IGwoW10pO2Zvcig7YS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyl7dmFyIGk9YS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2U/TChpKS5pcyhlKSYmdC5wdXNoKGkpOnQucHVzaChpKSxhPWl9cmV0dXJuIG5ldyBsKHQpfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGE9MDthPHRoaXMubGVuZ3RoO2ErPTEpbnVsbCE9PXRoaXNbYV0ucGFyZW50Tm9kZSYmKGU/TCh0aGlzW2FdLnBhcmVudE5vZGUpLmlzKGUpJiZ0LnB1c2godGhpc1thXS5wYXJlbnROb2RlKTp0LnB1c2godGhpc1thXS5wYXJlbnROb2RlKSk7cmV0dXJuIEwocih0KSl9LHBhcmVudHM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGE9MDthPHRoaXMubGVuZ3RoO2ErPTEpZm9yKHZhciBpPXRoaXNbYV0ucGFyZW50Tm9kZTtpOyllP0woaSkuaXMoZSkmJnQucHVzaChpKTp0LnB1c2goaSksaT1pLnBhcmVudE5vZGU7cmV0dXJuIEwocih0KSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdm9pZCAwPT09ZT9uZXcgbChbXSk6KHQuaXMoZSl8fCh0PXQucGFyZW50cyhlKS5lcSgwKSksdCl9LGZpbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGE9MDthPHRoaXMubGVuZ3RoO2ErPTEpZm9yKHZhciBpPXRoaXNbYV0ucXVlcnlTZWxlY3RvckFsbChlKSxzPTA7czxpLmxlbmd0aDtzKz0xKXQucHVzaChpW3NdKTtyZXR1cm4gbmV3IGwodCl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxhPTA7YTx0aGlzLmxlbmd0aDthKz0xKWZvcih2YXIgaT10aGlzW2FdLmNoaWxkTm9kZXMscz0wO3M8aS5sZW5ndGg7cys9MSllPzE9PT1pW3NdLm5vZGVUeXBlJiZMKGlbc10pLmlzKGUpJiZ0LnB1c2goaVtzXSk6MT09PWlbc10ubm9kZVR5cGUmJnQucHVzaChpW3NdKTtyZXR1cm4gbmV3IGwocih0KSl9LHJlbW92ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8dGhpcy5sZW5ndGg7ZSs9MSl0aGlzW2VdLnBhcmVudE5vZGUmJnRoaXNbZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2VdKTtyZXR1cm4gdGhpc30sYWRkOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9YXJndW1lbnRzLmxlbmd0aDt0LS07KWVbdF09YXJndW1lbnRzW3RdO3ZhciBhLGk7Zm9yKGE9MDthPGUubGVuZ3RoO2ErPTEpe3ZhciBzPUwoZVthXSk7Zm9yKGk9MDtpPHMubGVuZ3RoO2krPTEpdGhpc1t0aGlzLmxlbmd0aF09c1tpXSx0aGlzLmxlbmd0aCs9MX1yZXR1cm4gdGhpc30sc3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbMF0/Si5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sbnVsbCk6e319fTtPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0wuZm5bZV09dFtlXX0pO3ZhciBlLGEsaSxzLGVlPXtkZWxldGVQcm9wczpmdW5jdGlvbihlKXt2YXIgdD1lO09iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24oZSl7dHJ5e3RbZV09bnVsbH1jYXRjaChlKXt9dHJ5e2RlbGV0ZSB0W2VdfWNhdGNoKGUpe319KX0sbmV4dFRpY2s6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksc2V0VGltZW91dChlLHQpfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKX0sZ2V0VHJhbnNsYXRlOmZ1bmN0aW9uKGUsdCl7dmFyIGEsaSxzO3ZvaWQgMD09PXQmJih0PVwieFwiKTt2YXIgcj1KLmdldENvbXB1dGVkU3R5bGUoZSxudWxsKTtyZXR1cm4gSi5XZWJLaXRDU1NNYXRyaXg/KDY8KGk9ci50cmFuc2Zvcm18fHIud2Via2l0VHJhbnNmb3JtKS5zcGxpdChcIixcIikubGVuZ3RoJiYoaT1pLnNwbGl0KFwiLCBcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoXCIsXCIsXCIuXCIpfSkuam9pbihcIiwgXCIpKSxzPW5ldyBKLldlYktpdENTU01hdHJpeChcIm5vbmVcIj09PWk/XCJcIjppKSk6YT0ocz1yLk1velRyYW5zZm9ybXx8ci5PVHJhbnNmb3JtfHxyLk1zVHJhbnNmb3JtfHxyLm1zVHJhbnNmb3JtfHxyLnRyYW5zZm9ybXx8ci5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpLnJlcGxhY2UoXCJ0cmFuc2xhdGUoXCIsXCJtYXRyaXgoMSwgMCwgMCwgMSxcIikpLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLFwieFwiPT09dCYmKGk9Si5XZWJLaXRDU1NNYXRyaXg/cy5tNDE6MTY9PT1hLmxlbmd0aD9wYXJzZUZsb2F0KGFbMTJdKTpwYXJzZUZsb2F0KGFbNF0pKSxcInlcIj09PXQmJihpPUouV2ViS2l0Q1NTTWF0cml4P3MubTQyOjE2PT09YS5sZW5ndGg/cGFyc2VGbG9hdChhWzEzXSk6cGFyc2VGbG9hdChhWzVdKSksaXx8MH0scGFyc2VVcmxRdWVyeTpmdW5jdGlvbihlKXt2YXIgdCxhLGkscyxyPXt9LG49ZXx8Si5sb2NhdGlvbi5ocmVmO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuJiZuLmxlbmd0aClmb3Iocz0oYT0obj0tMTxuLmluZGV4T2YoXCI/XCIpP24ucmVwbGFjZSgvXFxTKlxcPy8sXCJcIik6XCJcIikuc3BsaXQoXCImXCIpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cIlwiIT09ZX0pKS5sZW5ndGgsdD0wO3Q8czt0Kz0xKWk9YVt0XS5yZXBsYWNlKC8jXFxTKy9nLFwiXCIpLnNwbGl0KFwiPVwiKSxyW2RlY29kZVVSSUNvbXBvbmVudChpWzBdKV09dm9pZCAwPT09aVsxXT92b2lkIDA6ZGVjb2RlVVJJQ29tcG9uZW50KGlbMV0pfHxcIlwiO3JldHVybiByfSxpc09iamVjdDpmdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJmUuY29uc3RydWN0b3ImJmUuY29uc3RydWN0b3I9PT1PYmplY3R9LGV4dGVuZDpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PWFyZ3VtZW50cy5sZW5ndGg7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTtmb3IodmFyIGE9T2JqZWN0KGVbMF0pLGk9MTtpPGUubGVuZ3RoO2krPTEpe3ZhciBzPWVbaV07aWYobnVsbCE9cylmb3IodmFyIHI9T2JqZWN0LmtleXMoT2JqZWN0KHMpKSxuPTAsbz1yLmxlbmd0aDtuPG87bis9MSl7dmFyIGw9cltuXSxkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocyxsKTt2b2lkIDAhPT1kJiZkLmVudW1lcmFibGUmJihlZS5pc09iamVjdChhW2xdKSYmZWUuaXNPYmplY3Qoc1tsXSk/ZWUuZXh0ZW5kKGFbbF0sc1tsXSk6IWVlLmlzT2JqZWN0KGFbbF0pJiZlZS5pc09iamVjdChzW2xdKT8oYVtsXT17fSxlZS5leHRlbmQoYVtsXSxzW2xdKSk6YVtsXT1zW2xdKX19cmV0dXJuIGF9fSx0ZT0oaT1mLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikse3RvdWNoOkouTW9kZXJuaXpyJiYhMD09PUouTW9kZXJuaXpyLnRvdWNofHwhISgwPEoubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzfHxcIm9udG91Y2hzdGFydFwiaW4gSnx8Si5Eb2N1bWVudFRvdWNoJiZmIGluc3RhbmNlb2YgSi5Eb2N1bWVudFRvdWNoKSxwb2ludGVyRXZlbnRzOiEhKEoubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkfHxKLlBvaW50ZXJFdmVudHx8XCJtYXhUb3VjaFBvaW50c1wiaW4gSi5uYXZpZ2F0b3ImJjA8Si5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpLHByZWZpeGVkUG9pbnRlckV2ZW50czohIUoubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsdHJhbnNpdGlvbjooYT1pLnN0eWxlLFwidHJhbnNpdGlvblwiaW4gYXx8XCJ3ZWJraXRUcmFuc2l0aW9uXCJpbiBhfHxcIk1velRyYW5zaXRpb25cImluIGEpLHRyYW5zZm9ybXMzZDpKLk1vZGVybml6ciYmITA9PT1KLk1vZGVybml6ci5jc3N0cmFuc2Zvcm1zM2R8fChlPWkuc3R5bGUsXCJ3ZWJraXRQZXJzcGVjdGl2ZVwiaW4gZXx8XCJNb3pQZXJzcGVjdGl2ZVwiaW4gZXx8XCJPUGVyc3BlY3RpdmVcImluIGV8fFwiTXNQZXJzcGVjdGl2ZVwiaW4gZXx8XCJwZXJzcGVjdGl2ZVwiaW4gZSksZmxleGJveDpmdW5jdGlvbigpe2Zvcih2YXIgZT1pLnN0eWxlLHQ9XCJhbGlnbkl0ZW1zIHdlYmtpdEFsaWduSXRlbXMgd2Via2l0Qm94QWxpZ24gbXNGbGV4QWxpZ24gbW96Qm94QWxpZ24gd2Via2l0RmxleERpcmVjdGlvbiBtc0ZsZXhEaXJlY3Rpb24gbW96Qm94RGlyZWN0aW9uIG1vekJveE9yaWVudCB3ZWJraXRCb3hEaXJlY3Rpb24gd2Via2l0Qm94T3JpZW50XCIuc3BsaXQoXCIgXCIpLGE9MDthPHQubGVuZ3RoO2ErPTEpaWYodFthXWluIGUpcmV0dXJuITA7cmV0dXJuITF9KCksb2JzZXJ2ZXI6XCJNdXRhdGlvbk9ic2VydmVyXCJpbiBKfHxcIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXJcImluIEoscGFzc2l2ZUxpc3RlbmVyOmZ1bmN0aW9uKCl7dmFyIGU9ITE7dHJ5e3ZhciB0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7ZT0hMH19KTtKLmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZUxpc3RlbmVyXCIsbnVsbCx0KX1jYXRjaChlKXt9cmV0dXJuIGV9KCksZ2VzdHVyZXM6XCJvbmdlc3R1cmVzdGFydFwiaW4gSn0pLEk9e2lzSUU6ISFKLm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvZyl8fCEhSi5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFL2cpLGlzRWRnZTohIUoubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxpc1NhZmFyaToocz1KLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSwwPD1zLmluZGV4T2YoXCJzYWZhcmlcIikmJnMuaW5kZXhPZihcImNocm9tZVwiKTwwJiZzLmluZGV4T2YoXCJhbmRyb2lkXCIpPDApLGlzVWlXZWJWaWV3Oi8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdChKLm5hdmlnYXRvci51c2VyQWdlbnQpfSxuPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgdD10aGlzO3QucGFyYW1zPWUsdC5ldmVudHNMaXN0ZW5lcnM9e30sdC5wYXJhbXMmJnQucGFyYW1zLm9uJiZPYmplY3Qua2V5cyh0LnBhcmFtcy5vbikuZm9yRWFjaChmdW5jdGlvbihlKXt0Lm9uKGUsdC5wYXJhbXMub25bZV0pfSl9LG89e2NvbXBvbmVudHM6e2NvbmZpZ3VyYWJsZTohMH19O24ucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsdCxhKXt2YXIgaT10aGlzO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIGk7dmFyIHM9YT9cInVuc2hpZnRcIjpcInB1c2hcIjtyZXR1cm4gZS5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXtpLmV2ZW50c0xpc3RlbmVyc1tlXXx8KGkuZXZlbnRzTGlzdGVuZXJzW2VdPVtdKSxpLmV2ZW50c0xpc3RlbmVyc1tlXVtzXSh0KX0pLGl9LG4ucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24oYSxpLGUpe3ZhciBzPXRoaXM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgaSlyZXR1cm4gcztmdW5jdGlvbiByKCl7Zm9yKHZhciBlPVtdLHQ9YXJndW1lbnRzLmxlbmd0aDt0LS07KWVbdF09YXJndW1lbnRzW3RdO2kuYXBwbHkocyxlKSxzLm9mZihhLHIpLHIuZjdwcm94eSYmZGVsZXRlIHIuZjdwcm94eX1yZXR1cm4gci5mN3Byb3h5PWkscy5vbihhLHIsZSl9LG4ucHJvdG90eXBlLm9mZj1mdW5jdGlvbihlLGkpe3ZhciBzPXRoaXM7cmV0dXJuIHMuZXZlbnRzTGlzdGVuZXJzJiZlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWk/cy5ldmVudHNMaXN0ZW5lcnNbYV09W106cy5ldmVudHNMaXN0ZW5lcnNbYV0mJnMuZXZlbnRzTGlzdGVuZXJzW2FdLmxlbmd0aCYmcy5ldmVudHNMaXN0ZW5lcnNbYV0uZm9yRWFjaChmdW5jdGlvbihlLHQpeyhlPT09aXx8ZS5mN3Byb3h5JiZlLmY3cHJveHk9PT1pKSYmcy5ldmVudHNMaXN0ZW5lcnNbYV0uc3BsaWNlKHQsMSl9KX0pLHN9LG4ucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD1hcmd1bWVudHMubGVuZ3RoO3QtLTspZVt0XT1hcmd1bWVudHNbdF07dmFyIGEsaSxzLHI9dGhpcztyZXR1cm4gci5ldmVudHNMaXN0ZW5lcnMmJihcInN0cmluZ1wiPT10eXBlb2YgZVswXXx8QXJyYXkuaXNBcnJheShlWzBdKT8oYT1lWzBdLGk9ZS5zbGljZSgxLGUubGVuZ3RoKSxzPXIpOihhPWVbMF0uZXZlbnRzLGk9ZVswXS5kYXRhLHM9ZVswXS5jb250ZXh0fHxyKSwoQXJyYXkuaXNBcnJheShhKT9hOmEuc3BsaXQoXCIgXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKHIuZXZlbnRzTGlzdGVuZXJzJiZyLmV2ZW50c0xpc3RlbmVyc1tlXSl7dmFyIHQ9W107ci5ldmVudHNMaXN0ZW5lcnNbZV0uZm9yRWFjaChmdW5jdGlvbihlKXt0LnB1c2goZSl9KSx0LmZvckVhY2goZnVuY3Rpb24oZSl7ZS5hcHBseShzLGkpfSl9fSkpLHJ9LG4ucHJvdG90eXBlLnVzZU1vZHVsZXNQYXJhbXM9ZnVuY3Rpb24oYSl7dmFyIGk9dGhpcztpLm1vZHVsZXMmJk9iamVjdC5rZXlzKGkubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1pLm1vZHVsZXNbZV07dC5wYXJhbXMmJmVlLmV4dGVuZChhLHQucGFyYW1zKX0pfSxuLnByb3RvdHlwZS51c2VNb2R1bGVzPWZ1bmN0aW9uKGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgcz10aGlzO3MubW9kdWxlcyYmT2JqZWN0LmtleXMocy5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPXMubW9kdWxlc1tlXSx0PWlbZV18fHt9O2EuaW5zdGFuY2UmJk9iamVjdC5rZXlzKGEuaW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9YS5pbnN0YW5jZVtlXTtzW2VdPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5iaW5kKHMpOnR9KSxhLm9uJiZzLm9uJiZPYmplY3Qua2V5cyhhLm9uKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Mub24oZSxhLm9uW2VdKX0pLGEuY3JlYXRlJiZhLmNyZWF0ZS5iaW5kKHMpKHQpfSl9LG8uY29tcG9uZW50cy5zZXQ9ZnVuY3Rpb24oZSl7dGhpcy51c2UmJnRoaXMudXNlKGUpfSxuLmluc3RhbGxNb2R1bGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLGE9YXJndW1lbnRzLmxlbmd0aC0xOzA8YS0tOyllW2FdPWFyZ3VtZW50c1thKzFdO3ZhciBpPXRoaXM7aS5wcm90b3R5cGUubW9kdWxlc3x8KGkucHJvdG90eXBlLm1vZHVsZXM9e30pO3ZhciBzPXQubmFtZXx8T2JqZWN0LmtleXMoaS5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RoK1wiX1wiK2VlLm5vdygpO3JldHVybihpLnByb3RvdHlwZS5tb2R1bGVzW3NdPXQpLnByb3RvJiZPYmplY3Qua2V5cyh0LnByb3RvKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kucHJvdG90eXBlW2VdPXQucHJvdG9bZV19KSx0LnN0YXRpYyYmT2JqZWN0LmtleXModC5zdGF0aWMpLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT10LnN0YXRpY1tlXX0pLHQuaW5zdGFsbCYmdC5pbnN0YWxsLmFwcGx5KGksZSksaX0sbi51c2U9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGE9YXJndW1lbnRzLmxlbmd0aC0xOzA8YS0tOyl0W2FdPWFyZ3VtZW50c1thKzFdO3ZhciBpPXRoaXM7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/KGUuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gaS5pbnN0YWxsTW9kdWxlKGUpfSksaSk6aS5pbnN0YWxsTW9kdWxlLmFwcGx5KGksW2VdLmNvbmNhdCh0KSl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG4sbyk7dmFyIGQ9e3VwZGF0ZVNpemU6ZnVuY3Rpb24oKXt2YXIgZSx0LGE9dGhpcyxpPWEuJGVsO2U9dm9pZCAwIT09YS5wYXJhbXMud2lkdGg/YS5wYXJhbXMud2lkdGg6aVswXS5jbGllbnRXaWR0aCx0PXZvaWQgMCE9PWEucGFyYW1zLmhlaWdodD9hLnBhcmFtcy5oZWlnaHQ6aVswXS5jbGllbnRIZWlnaHQsMD09PWUmJmEuaXNIb3Jpem9udGFsKCl8fDA9PT10JiZhLmlzVmVydGljYWwoKXx8KGU9ZS1wYXJzZUludChpLmNzcyhcInBhZGRpbmctbGVmdFwiKSwxMCktcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpLDEwKSx0PXQtcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLXRvcFwiKSwxMCktcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCksZWUuZXh0ZW5kKGEse3dpZHRoOmUsaGVpZ2h0OnQsc2l6ZTphLmlzSG9yaXpvbnRhbCgpP2U6dH0pKX0sdXBkYXRlU2xpZGVzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUucGFyYW1zLGE9ZS4kd3JhcHBlckVsLGk9ZS5zaXplLHM9ZS5ydGxUcmFuc2xhdGUscj1lLndyb25nUlRMLG49ZS52aXJ0dWFsJiZ0LnZpcnR1YWwuZW5hYmxlZCxvPW4/ZS52aXJ0dWFsLnNsaWRlcy5sZW5ndGg6ZS5zbGlkZXMubGVuZ3RoLGw9YS5jaGlsZHJlbihcIi5cIitlLnBhcmFtcy5zbGlkZUNsYXNzKSxkPW4/ZS52aXJ0dWFsLnNsaWRlcy5sZW5ndGg6bC5sZW5ndGgscD1bXSxjPVtdLHU9W10saD10LnNsaWRlc09mZnNldEJlZm9yZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBoJiYoaD10LnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKGUpKTt2YXIgdj10LnNsaWRlc09mZnNldEFmdGVyO1wiZnVuY3Rpb25cIj09dHlwZW9mIHYmJih2PXQuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbChlKSk7dmFyIGY9ZS5zbmFwR3JpZC5sZW5ndGgsbT1lLnNuYXBHcmlkLmxlbmd0aCxnPXQuc3BhY2VCZXR3ZWVuLGI9LWgsdz0wLHk9MDtpZih2b2lkIDAhPT1pKXt2YXIgeCxUO1wic3RyaW5nXCI9PXR5cGVvZiBnJiYwPD1nLmluZGV4T2YoXCIlXCIpJiYoZz1wYXJzZUZsb2F0KGcucmVwbGFjZShcIiVcIixcIlwiKSkvMTAwKmkpLGUudmlydHVhbFNpemU9LWcscz9sLmNzcyh7bWFyZ2luTGVmdDpcIlwiLG1hcmdpblRvcDpcIlwifSk6bC5jc3Moe21hcmdpblJpZ2h0OlwiXCIsbWFyZ2luQm90dG9tOlwiXCJ9KSwxPHQuc2xpZGVzUGVyQ29sdW1uJiYoeD1NYXRoLmZsb29yKGQvdC5zbGlkZXNQZXJDb2x1bW4pPT09ZC9lLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4/ZDpNYXRoLmNlaWwoZC90LnNsaWRlc1BlckNvbHVtbikqdC5zbGlkZXNQZXJDb2x1bW4sXCJhdXRvXCIhPT10LnNsaWRlc1BlclZpZXcmJlwicm93XCI9PT10LnNsaWRlc1BlckNvbHVtbkZpbGwmJih4PU1hdGgubWF4KHgsdC5zbGlkZXNQZXJWaWV3KnQuc2xpZGVzUGVyQ29sdW1uKSkpO2Zvcih2YXIgRSxTPXQuc2xpZGVzUGVyQ29sdW1uLEM9eC9TLE09TWF0aC5mbG9vcihkL3Quc2xpZGVzUGVyQ29sdW1uKSx6PTA7ejxkO3orPTEpe1Q9MDt2YXIgUD1sLmVxKHopO2lmKDE8dC5zbGlkZXNQZXJDb2x1bW4pe3ZhciBrPXZvaWQgMCwkPXZvaWQgMCxMPXZvaWQgMDtcImNvbHVtblwiPT09dC5zbGlkZXNQZXJDb2x1bW5GaWxsPyhMPXotKCQ9TWF0aC5mbG9vcih6L1MpKSpTLChNPCR8fCQ9PT1NJiZMPT09Uy0xKSYmUzw9KEwrPTEpJiYoTD0wLCQrPTEpLGs9JCtMKngvUyxQLmNzcyh7XCItd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwXCI6ayxcIi1tb3otYm94LW9yZGluYWwtZ3JvdXBcIjprLFwiLW1zLWZsZXgtb3JkZXJcIjprLFwiLXdlYmtpdC1vcmRlclwiOmssb3JkZXI6a30pKTokPXotKEw9TWF0aC5mbG9vcih6L0MpKSpDLFAuY3NzKFwibWFyZ2luLVwiKyhlLmlzSG9yaXpvbnRhbCgpP1widG9wXCI6XCJsZWZ0XCIpLDAhPT1MJiZ0LnNwYWNlQmV0d2VlbiYmdC5zcGFjZUJldHdlZW4rXCJweFwiKS5hdHRyKFwiZGF0YS1zd2lwZXItY29sdW1uXCIsJCkuYXR0cihcImRhdGEtc3dpcGVyLXJvd1wiLEwpfWlmKFwibm9uZVwiIT09UC5jc3MoXCJkaXNwbGF5XCIpKXtpZihcImF1dG9cIj09PXQuc2xpZGVzUGVyVmlldyl7dmFyIEk9Si5nZXRDb21wdXRlZFN0eWxlKFBbMF0sbnVsbCksRD1QWzBdLnN0eWxlLnRyYW5zZm9ybSxPPVBbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtO2lmKEQmJihQWzBdLnN0eWxlLnRyYW5zZm9ybT1cIm5vbmVcIiksTyYmKFBbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtPVwibm9uZVwiKSx0LnJvdW5kTGVuZ3RocylUPWUuaXNIb3Jpem9udGFsKCk/UC5vdXRlcldpZHRoKCEwKTpQLm91dGVySGVpZ2h0KCEwKTtlbHNlIGlmKGUuaXNIb3Jpem9udGFsKCkpe3ZhciBBPXBhcnNlRmxvYXQoSS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpLEg9cGFyc2VGbG9hdChJLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWxlZnRcIikpLE49cGFyc2VGbG9hdChJLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpKSxHPXBhcnNlRmxvYXQoSS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWxlZnRcIikpLEI9cGFyc2VGbG9hdChJLmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tcmlnaHRcIikpLFg9SS5nZXRQcm9wZXJ0eVZhbHVlKFwiYm94LXNpemluZ1wiKTtUPVgmJlwiYm9yZGVyLWJveFwiPT09WD9BK0crQjpBK0grTitHK0J9ZWxzZXt2YXIgWT1wYXJzZUZsb2F0KEkuZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKSksVj1wYXJzZUZsb2F0KEkuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctdG9wXCIpKSxGPXBhcnNlRmxvYXQoSS5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1ib3R0b21cIikpLFI9cGFyc2VGbG9hdChJLmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tdG9wXCIpKSxxPXBhcnNlRmxvYXQoSS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWJvdHRvbVwiKSksVz1JLmdldFByb3BlcnR5VmFsdWUoXCJib3gtc2l6aW5nXCIpO1Q9VyYmXCJib3JkZXItYm94XCI9PT1XP1krUitxOlkrVitGK1IrcX1EJiYoUFswXS5zdHlsZS50cmFuc2Zvcm09RCksTyYmKFBbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtPU8pLHQucm91bmRMZW5ndGhzJiYoVD1NYXRoLmZsb29yKFQpKX1lbHNlIFQ9KGktKHQuc2xpZGVzUGVyVmlldy0xKSpnKS90LnNsaWRlc1BlclZpZXcsdC5yb3VuZExlbmd0aHMmJihUPU1hdGguZmxvb3IoVCkpLGxbel0mJihlLmlzSG9yaXpvbnRhbCgpP2xbel0uc3R5bGUud2lkdGg9VCtcInB4XCI6bFt6XS5zdHlsZS5oZWlnaHQ9VCtcInB4XCIpO2xbel0mJihsW3pdLnN3aXBlclNsaWRlU2l6ZT1UKSx1LnB1c2goVCksdC5jZW50ZXJlZFNsaWRlcz8oYj1iK1QvMit3LzIrZywwPT09dyYmMCE9PXomJihiPWItaS8yLWcpLDA9PT16JiYoYj1iLWkvMi1nKSxNYXRoLmFicyhiKTwuMDAxJiYoYj0wKSx0LnJvdW5kTGVuZ3RocyYmKGI9TWF0aC5mbG9vcihiKSkseSV0LnNsaWRlc1Blckdyb3VwPT0wJiZwLnB1c2goYiksYy5wdXNoKGIpKToodC5yb3VuZExlbmd0aHMmJihiPU1hdGguZmxvb3IoYikpLHkldC5zbGlkZXNQZXJHcm91cD09MCYmcC5wdXNoKGIpLGMucHVzaChiKSxiPWIrVCtnKSxlLnZpcnR1YWxTaXplKz1UK2csdz1ULHkrPTF9fWlmKGUudmlydHVhbFNpemU9TWF0aC5tYXgoZS52aXJ0dWFsU2l6ZSxpKSt2LHMmJnImJihcInNsaWRlXCI9PT10LmVmZmVjdHx8XCJjb3ZlcmZsb3dcIj09PXQuZWZmZWN0KSYmYS5jc3Moe3dpZHRoOmUudmlydHVhbFNpemUrdC5zcGFjZUJldHdlZW4rXCJweFwifSksdGUuZmxleGJveCYmIXQuc2V0V3JhcHBlclNpemV8fChlLmlzSG9yaXpvbnRhbCgpP2EuY3NzKHt3aWR0aDplLnZpcnR1YWxTaXplK3Quc3BhY2VCZXR3ZWVuK1wicHhcIn0pOmEuY3NzKHtoZWlnaHQ6ZS52aXJ0dWFsU2l6ZSt0LnNwYWNlQmV0d2VlbitcInB4XCJ9KSksMTx0LnNsaWRlc1BlckNvbHVtbiYmKGUudmlydHVhbFNpemU9KFQrdC5zcGFjZUJldHdlZW4pKngsZS52aXJ0dWFsU2l6ZT1NYXRoLmNlaWwoZS52aXJ0dWFsU2l6ZS90LnNsaWRlc1BlckNvbHVtbiktdC5zcGFjZUJldHdlZW4sZS5pc0hvcml6b250YWwoKT9hLmNzcyh7d2lkdGg6ZS52aXJ0dWFsU2l6ZSt0LnNwYWNlQmV0d2VlbitcInB4XCJ9KTphLmNzcyh7aGVpZ2h0OmUudmlydHVhbFNpemUrdC5zcGFjZUJldHdlZW4rXCJweFwifSksdC5jZW50ZXJlZFNsaWRlcykpe0U9W107Zm9yKHZhciBqPTA7ajxwLmxlbmd0aDtqKz0xKXt2YXIgVT1wW2pdO3Qucm91bmRMZW5ndGhzJiYoVT1NYXRoLmZsb29yKFUpKSxwW2pdPGUudmlydHVhbFNpemUrcFswXSYmRS5wdXNoKFUpfXA9RX1pZighdC5jZW50ZXJlZFNsaWRlcyl7RT1bXTtmb3IodmFyIEs9MDtLPHAubGVuZ3RoO0srPTEpe3ZhciBfPXBbS107dC5yb3VuZExlbmd0aHMmJihfPU1hdGguZmxvb3IoXykpLHBbS108PWUudmlydHVhbFNpemUtaSYmRS5wdXNoKF8pfXA9RSwxPE1hdGguZmxvb3IoZS52aXJ0dWFsU2l6ZS1pKS1NYXRoLmZsb29yKHBbcC5sZW5ndGgtMV0pJiZwLnB1c2goZS52aXJ0dWFsU2l6ZS1pKX1pZigwPT09cC5sZW5ndGgmJihwPVswXSksMCE9PXQuc3BhY2VCZXR3ZWVuJiYoZS5pc0hvcml6b250YWwoKT9zP2wuY3NzKHttYXJnaW5MZWZ0OmcrXCJweFwifSk6bC5jc3Moe21hcmdpblJpZ2h0OmcrXCJweFwifSk6bC5jc3Moe21hcmdpbkJvdHRvbTpnK1wicHhcIn0pKSx0LmNlbnRlckluc3VmZmljaWVudFNsaWRlcyl7dmFyIFo9MDtpZih1LmZvckVhY2goZnVuY3Rpb24oZSl7Wis9ZSsodC5zcGFjZUJldHdlZW4/dC5zcGFjZUJldHdlZW46MCl9KSwoWi09dC5zcGFjZUJldHdlZW4pPGkpe3ZhciBRPShpLVopLzI7cC5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cFt0XT1lLVF9KSxjLmZvckVhY2goZnVuY3Rpb24oZSx0KXtjW3RdPWUrUX0pfX1lZS5leHRlbmQoZSx7c2xpZGVzOmwsc25hcEdyaWQ6cCxzbGlkZXNHcmlkOmMsc2xpZGVzU2l6ZXNHcmlkOnV9KSxkIT09byYmZS5lbWl0KFwic2xpZGVzTGVuZ3RoQ2hhbmdlXCIpLHAubGVuZ3RoIT09ZiYmKGUucGFyYW1zLndhdGNoT3ZlcmZsb3cmJmUuY2hlY2tPdmVyZmxvdygpLGUuZW1pdChcInNuYXBHcmlkTGVuZ3RoQ2hhbmdlXCIpKSxjLmxlbmd0aCE9PW0mJmUuZW1pdChcInNsaWRlc0dyaWRMZW5ndGhDaGFuZ2VcIiksKHQud2F0Y2hTbGlkZXNQcm9ncmVzc3x8dC53YXRjaFNsaWRlc1Zpc2liaWxpdHkpJiZlLnVwZGF0ZVNsaWRlc09mZnNldCgpfX0sdXBkYXRlQXV0b0hlaWdodDpmdW5jdGlvbihlKXt2YXIgdCxhPXRoaXMsaT1bXSxzPTA7aWYoXCJudW1iZXJcIj09dHlwZW9mIGU/YS5zZXRUcmFuc2l0aW9uKGUpOiEwPT09ZSYmYS5zZXRUcmFuc2l0aW9uKGEucGFyYW1zLnNwZWVkKSxcImF1dG9cIiE9PWEucGFyYW1zLnNsaWRlc1BlclZpZXcmJjE8YS5wYXJhbXMuc2xpZGVzUGVyVmlldylmb3IodD0wO3Q8TWF0aC5jZWlsKGEucGFyYW1zLnNsaWRlc1BlclZpZXcpO3QrPTEpe3ZhciByPWEuYWN0aXZlSW5kZXgrdDtpZihyPmEuc2xpZGVzLmxlbmd0aClicmVhaztpLnB1c2goYS5zbGlkZXMuZXEocilbMF0pfWVsc2UgaS5wdXNoKGEuc2xpZGVzLmVxKGEuYWN0aXZlSW5kZXgpWzBdKTtmb3IodD0wO3Q8aS5sZW5ndGg7dCs9MSlpZih2b2lkIDAhPT1pW3RdKXt2YXIgbj1pW3RdLm9mZnNldEhlaWdodDtzPXM8bj9uOnN9cyYmYS4kd3JhcHBlckVsLmNzcyhcImhlaWdodFwiLHMrXCJweFwiKX0sdXBkYXRlU2xpZGVzT2Zmc2V0OmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuc2xpZGVzLHQ9MDt0PGUubGVuZ3RoO3QrPTEpZVt0XS5zd2lwZXJTbGlkZU9mZnNldD10aGlzLmlzSG9yaXpvbnRhbCgpP2VbdF0ub2Zmc2V0TGVmdDplW3RdLm9mZnNldFRvcH0sdXBkYXRlU2xpZGVzUHJvZ3Jlc3M6ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9dGhpcyYmdGhpcy50cmFuc2xhdGV8fDApO3ZhciB0PXRoaXMsYT10LnBhcmFtcyxpPXQuc2xpZGVzLHM9dC5ydGxUcmFuc2xhdGU7aWYoMCE9PWkubGVuZ3RoKXt2b2lkIDA9PT1pWzBdLnN3aXBlclNsaWRlT2Zmc2V0JiZ0LnVwZGF0ZVNsaWRlc09mZnNldCgpO3ZhciByPS1lO3MmJihyPWUpLGkucmVtb3ZlQ2xhc3MoYS5zbGlkZVZpc2libGVDbGFzcyksdC52aXNpYmxlU2xpZGVzSW5kZXhlcz1bXSx0LnZpc2libGVTbGlkZXM9W107Zm9yKHZhciBuPTA7bjxpLmxlbmd0aDtuKz0xKXt2YXIgbz1pW25dLGw9KHIrKGEuY2VudGVyZWRTbGlkZXM/dC5taW5UcmFuc2xhdGUoKTowKS1vLnN3aXBlclNsaWRlT2Zmc2V0KS8oby5zd2lwZXJTbGlkZVNpemUrYS5zcGFjZUJldHdlZW4pO2lmKGEud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KXt2YXIgZD0tKHItby5zd2lwZXJTbGlkZU9mZnNldCkscD1kK3Quc2xpZGVzU2l6ZXNHcmlkW25dOygwPD1kJiZkPHQuc2l6ZXx8MDxwJiZwPD10LnNpemV8fGQ8PTAmJnA+PXQuc2l6ZSkmJih0LnZpc2libGVTbGlkZXMucHVzaChvKSx0LnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2gobiksaS5lcShuKS5hZGRDbGFzcyhhLnNsaWRlVmlzaWJsZUNsYXNzKSl9by5wcm9ncmVzcz1zPy1sOmx9dC52aXNpYmxlU2xpZGVzPUwodC52aXNpYmxlU2xpZGVzKX19LHVwZGF0ZVByb2dyZXNzOmZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXRoaXMmJnRoaXMudHJhbnNsYXRlfHwwKTt2YXIgdD10aGlzLGE9dC5wYXJhbXMsaT10Lm1heFRyYW5zbGF0ZSgpLXQubWluVHJhbnNsYXRlKCkscz10LnByb2dyZXNzLHI9dC5pc0JlZ2lubmluZyxuPXQuaXNFbmQsbz1yLGw9bjswPT09aT9uPXI9IShzPTApOihyPShzPShlLXQubWluVHJhbnNsYXRlKCkpL2kpPD0wLG49MTw9cyksZWUuZXh0ZW5kKHQse3Byb2dyZXNzOnMsaXNCZWdpbm5pbmc6cixpc0VuZDpufSksKGEud2F0Y2hTbGlkZXNQcm9ncmVzc3x8YS53YXRjaFNsaWRlc1Zpc2liaWxpdHkpJiZ0LnVwZGF0ZVNsaWRlc1Byb2dyZXNzKGUpLHImJiFvJiZ0LmVtaXQoXCJyZWFjaEJlZ2lubmluZyB0b0VkZ2VcIiksbiYmIWwmJnQuZW1pdChcInJlYWNoRW5kIHRvRWRnZVwiKSwobyYmIXJ8fGwmJiFuKSYmdC5lbWl0KFwiZnJvbUVkZ2VcIiksdC5lbWl0KFwicHJvZ3Jlc3NcIixzKX0sdXBkYXRlU2xpZGVzQ2xhc3NlczpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcyxhPXQuc2xpZGVzLGk9dC5wYXJhbXMscz10LiR3cmFwcGVyRWwscj10LmFjdGl2ZUluZGV4LG49dC5yZWFsSW5kZXgsbz10LnZpcnR1YWwmJmkudmlydHVhbC5lbmFibGVkO2EucmVtb3ZlQ2xhc3MoaS5zbGlkZUFjdGl2ZUNsYXNzK1wiIFwiK2kuc2xpZGVOZXh0Q2xhc3MrXCIgXCIraS5zbGlkZVByZXZDbGFzcytcIiBcIitpLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MrXCIgXCIraS5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcytcIiBcIitpLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKSwoZT1vP3QuJHdyYXBwZXJFbC5maW5kKFwiLlwiK2kuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytyKydcIl0nKTphLmVxKHIpKS5hZGRDbGFzcyhpLnNsaWRlQWN0aXZlQ2xhc3MpLGkubG9vcCYmKGUuaGFzQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKT9zLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIjpub3QoLlwiK2kuc2xpZGVEdXBsaWNhdGVDbGFzcysnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrbisnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTpzLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIi5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrbisnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKSk7dmFyIGw9ZS5uZXh0QWxsKFwiLlwiK2kuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MoaS5zbGlkZU5leHRDbGFzcyk7aS5sb29wJiYwPT09bC5sZW5ndGgmJihsPWEuZXEoMCkpLmFkZENsYXNzKGkuc2xpZGVOZXh0Q2xhc3MpO3ZhciBkPWUucHJldkFsbChcIi5cIitpLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKGkuc2xpZGVQcmV2Q2xhc3MpO2kubG9vcCYmMD09PWQubGVuZ3RoJiYoZD1hLmVxKC0xKSkuYWRkQ2xhc3MoaS5zbGlkZVByZXZDbGFzcyksaS5sb29wJiYobC5oYXNDbGFzcyhpLnNsaWRlRHVwbGljYXRlQ2xhc3MpP3MuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzK1wiOm5vdCguXCIraS5zbGlkZUR1cGxpY2F0ZUNsYXNzKycpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytsLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSsnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk6cy5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrXCIuXCIraS5zbGlkZUR1cGxpY2F0ZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2wuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKSxkLmhhc0NsYXNzKGkuc2xpZGVEdXBsaWNhdGVDbGFzcyk/cy5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrXCI6bm90KC5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJylbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2QuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTpzLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIi5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZC5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikrJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpKX0sdXBkYXRlQWN0aXZlSW5kZXg6ZnVuY3Rpb24oZSl7dmFyIHQsYT10aGlzLGk9YS5ydGxUcmFuc2xhdGU/YS50cmFuc2xhdGU6LWEudHJhbnNsYXRlLHM9YS5zbGlkZXNHcmlkLHI9YS5zbmFwR3JpZCxuPWEucGFyYW1zLG89YS5hY3RpdmVJbmRleCxsPWEucmVhbEluZGV4LGQ9YS5zbmFwSW5kZXgscD1lO2lmKHZvaWQgMD09PXApe2Zvcih2YXIgYz0wO2M8cy5sZW5ndGg7Yys9MSl2b2lkIDAhPT1zW2MrMV0/aT49c1tjXSYmaTxzW2MrMV0tKHNbYysxXS1zW2NdKS8yP3A9YzppPj1zW2NdJiZpPHNbYysxXSYmKHA9YysxKTppPj1zW2NdJiYocD1jKTtuLm5vcm1hbGl6ZVNsaWRlSW5kZXgmJihwPDB8fHZvaWQgMD09PXApJiYocD0wKX1pZigodD0wPD1yLmluZGV4T2YoaSk/ci5pbmRleE9mKGkpOk1hdGguZmxvb3IocC9uLnNsaWRlc1Blckdyb3VwKSk+PXIubGVuZ3RoJiYodD1yLmxlbmd0aC0xKSxwIT09byl7dmFyIHU9cGFyc2VJbnQoYS5zbGlkZXMuZXEocCkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpfHxwLDEwKTtlZS5leHRlbmQoYSx7c25hcEluZGV4OnQscmVhbEluZGV4OnUscHJldmlvdXNJbmRleDpvLGFjdGl2ZUluZGV4OnB9KSxhLmVtaXQoXCJhY3RpdmVJbmRleENoYW5nZVwiKSxhLmVtaXQoXCJzbmFwSW5kZXhDaGFuZ2VcIiksbCE9PXUmJmEuZW1pdChcInJlYWxJbmRleENoYW5nZVwiKSxhLmVtaXQoXCJzbGlkZUNoYW5nZVwiKX1lbHNlIHQhPT1kJiYoYS5zbmFwSW5kZXg9dCxhLmVtaXQoXCJzbmFwSW5kZXhDaGFuZ2VcIikpfSx1cGRhdGVDbGlja2VkU2xpZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxhPXQucGFyYW1zLGk9TChlLnRhcmdldCkuY2xvc2VzdChcIi5cIithLnNsaWRlQ2xhc3MpWzBdLHM9ITE7aWYoaSlmb3IodmFyIHI9MDtyPHQuc2xpZGVzLmxlbmd0aDtyKz0xKXQuc2xpZGVzW3JdPT09aSYmKHM9ITApO2lmKCFpfHwhcylyZXR1cm4gdC5jbGlja2VkU2xpZGU9dm9pZCAwLHZvaWQodC5jbGlja2VkSW5kZXg9dm9pZCAwKTt0LmNsaWNrZWRTbGlkZT1pLHQudmlydHVhbCYmdC5wYXJhbXMudmlydHVhbC5lbmFibGVkP3QuY2xpY2tlZEluZGV4PXBhcnNlSW50KEwoaSkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpLDEwKTp0LmNsaWNrZWRJbmRleD1MKGkpLmluZGV4KCksYS5zbGlkZVRvQ2xpY2tlZFNsaWRlJiZ2b2lkIDAhPT10LmNsaWNrZWRJbmRleCYmdC5jbGlja2VkSW5kZXghPT10LmFjdGl2ZUluZGV4JiZ0LnNsaWRlVG9DbGlja2VkU2xpZGUoKX19O3ZhciBwPXtnZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9dGhpcy5pc0hvcml6b250YWwoKT9cInhcIjpcInlcIik7dmFyIHQ9dGhpcy5wYXJhbXMsYT10aGlzLnJ0bFRyYW5zbGF0ZSxpPXRoaXMudHJhbnNsYXRlLHM9dGhpcy4kd3JhcHBlckVsO2lmKHQudmlydHVhbFRyYW5zbGF0ZSlyZXR1cm4gYT8taTppO3ZhciByPWVlLmdldFRyYW5zbGF0ZShzWzBdLGUpO3JldHVybiBhJiYocj0tcikscnx8MH0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKGUsdCl7dmFyIGE9dGhpcyxpPWEucnRsVHJhbnNsYXRlLHM9YS5wYXJhbXMscj1hLiR3cmFwcGVyRWwsbj1hLnByb2dyZXNzLG89MCxsPTA7YS5pc0hvcml6b250YWwoKT9vPWk/LWU6ZTpsPWUscy5yb3VuZExlbmd0aHMmJihvPU1hdGguZmxvb3IobyksbD1NYXRoLmZsb29yKGwpKSxzLnZpcnR1YWxUcmFuc2xhdGV8fCh0ZS50cmFuc2Zvcm1zM2Q/ci50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIitvK1wicHgsIFwiK2wrXCJweCwgMHB4KVwiKTpyLnRyYW5zZm9ybShcInRyYW5zbGF0ZShcIitvK1wicHgsIFwiK2wrXCJweClcIikpLGEucHJldmlvdXNUcmFuc2xhdGU9YS50cmFuc2xhdGUsYS50cmFuc2xhdGU9YS5pc0hvcml6b250YWwoKT9vOmw7dmFyIGQ9YS5tYXhUcmFuc2xhdGUoKS1hLm1pblRyYW5zbGF0ZSgpOygwPT09ZD8wOihlLWEubWluVHJhbnNsYXRlKCkpL2QpIT09biYmYS51cGRhdGVQcm9ncmVzcyhlKSxhLmVtaXQoXCJzZXRUcmFuc2xhdGVcIixhLnRyYW5zbGF0ZSx0KX0sbWluVHJhbnNsYXRlOmZ1bmN0aW9uKCl7cmV0dXJuLXRoaXMuc25hcEdyaWRbMF19LG1heFRyYW5zbGF0ZTpmdW5jdGlvbigpe3JldHVybi10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoLTFdfX07dmFyIGM9e3NldFRyYW5zaXRpb246ZnVuY3Rpb24oZSx0KXt0aGlzLiR3cmFwcGVyRWwudHJhbnNpdGlvbihlKSx0aGlzLmVtaXQoXCJzZXRUcmFuc2l0aW9uXCIsZSx0KX0sdHJhbnNpdGlvblN0YXJ0OmZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9ITApO3ZhciBhPXRoaXMsaT1hLmFjdGl2ZUluZGV4LHM9YS5wYXJhbXMscj1hLnByZXZpb3VzSW5kZXg7cy5hdXRvSGVpZ2h0JiZhLnVwZGF0ZUF1dG9IZWlnaHQoKTt2YXIgbj10O2lmKG58fChuPXI8aT9cIm5leHRcIjppPHI/XCJwcmV2XCI6XCJyZXNldFwiKSxhLmVtaXQoXCJ0cmFuc2l0aW9uU3RhcnRcIiksZSYmaSE9PXIpe2lmKFwicmVzZXRcIj09PW4pcmV0dXJuIHZvaWQgYS5lbWl0KFwic2xpZGVSZXNldFRyYW5zaXRpb25TdGFydFwiKTthLmVtaXQoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydFwiKSxcIm5leHRcIj09PW4/YS5lbWl0KFwic2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0XCIpOmEuZW1pdChcInNsaWRlUHJldlRyYW5zaXRpb25TdGFydFwiKX19LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0hMCk7dmFyIGE9dGhpcyxpPWEuYWN0aXZlSW5kZXgscz1hLnByZXZpb3VzSW5kZXg7YS5hbmltYXRpbmc9ITEsYS5zZXRUcmFuc2l0aW9uKDApO3ZhciByPXQ7aWYocnx8KHI9czxpP1wibmV4dFwiOmk8cz9cInByZXZcIjpcInJlc2V0XCIpLGEuZW1pdChcInRyYW5zaXRpb25FbmRcIiksZSYmaSE9PXMpe2lmKFwicmVzZXRcIj09PXIpcmV0dXJuIHZvaWQgYS5lbWl0KFwic2xpZGVSZXNldFRyYW5zaXRpb25FbmRcIik7YS5lbWl0KFwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kXCIpLFwibmV4dFwiPT09cj9hLmVtaXQoXCJzbGlkZU5leHRUcmFuc2l0aW9uRW5kXCIpOmEuZW1pdChcInNsaWRlUHJldlRyYW5zaXRpb25FbmRcIil9fX07dmFyIHU9e3NsaWRlVG86ZnVuY3Rpb24oZSx0LGEsaSl7dm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09dCYmKHQ9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PWEmJihhPSEwKTt2YXIgcz10aGlzLHI9ZTtyPDAmJihyPTApO3ZhciBuPXMucGFyYW1zLG89cy5zbmFwR3JpZCxsPXMuc2xpZGVzR3JpZCxkPXMucHJldmlvdXNJbmRleCxwPXMuYWN0aXZlSW5kZXgsYz1zLnJ0bFRyYW5zbGF0ZTtpZihzLmFuaW1hdGluZyYmbi5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pcmV0dXJuITE7dmFyIHU9TWF0aC5mbG9vcihyL24uc2xpZGVzUGVyR3JvdXApO3U+PW8ubGVuZ3RoJiYodT1vLmxlbmd0aC0xKSwocHx8bi5pbml0aWFsU2xpZGV8fDApPT09KGR8fDApJiZhJiZzLmVtaXQoXCJiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0XCIpO3ZhciBoLHY9LW9bdV07aWYocy51cGRhdGVQcm9ncmVzcyh2KSxuLm5vcm1hbGl6ZVNsaWRlSW5kZXgpZm9yKHZhciBmPTA7ZjxsLmxlbmd0aDtmKz0xKS1NYXRoLmZsb29yKDEwMCp2KT49TWF0aC5mbG9vcigxMDAqbFtmXSkmJihyPWYpO2lmKHMuaW5pdGlhbGl6ZWQmJnIhPT1wKXtpZighcy5hbGxvd1NsaWRlTmV4dCYmdjxzLnRyYW5zbGF0ZSYmdjxzLm1pblRyYW5zbGF0ZSgpKXJldHVybiExO2lmKCFzLmFsbG93U2xpZGVQcmV2JiZ2PnMudHJhbnNsYXRlJiZ2PnMubWF4VHJhbnNsYXRlKCkmJihwfHwwKSE9PXIpcmV0dXJuITF9cmV0dXJuIGg9cDxyP1wibmV4dFwiOnI8cD9cInByZXZcIjpcInJlc2V0XCIsYyYmLXY9PT1zLnRyYW5zbGF0ZXx8IWMmJnY9PT1zLnRyYW5zbGF0ZT8ocy51cGRhdGVBY3RpdmVJbmRleChyKSxuLmF1dG9IZWlnaHQmJnMudXBkYXRlQXV0b0hlaWdodCgpLHMudXBkYXRlU2xpZGVzQ2xhc3NlcygpLFwic2xpZGVcIiE9PW4uZWZmZWN0JiZzLnNldFRyYW5zbGF0ZSh2KSxcInJlc2V0XCIhPT1oJiYocy50cmFuc2l0aW9uU3RhcnQoYSxoKSxzLnRyYW5zaXRpb25FbmQoYSxoKSksITEpOigwIT09dCYmdGUudHJhbnNpdGlvbj8ocy5zZXRUcmFuc2l0aW9uKHQpLHMuc2V0VHJhbnNsYXRlKHYpLHMudXBkYXRlQWN0aXZlSW5kZXgocikscy51cGRhdGVTbGlkZXNDbGFzc2VzKCkscy5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsdCxpKSxzLnRyYW5zaXRpb25TdGFydChhLGgpLHMuYW5pbWF0aW5nfHwocy5hbmltYXRpbmc9ITAscy5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZHx8KHMub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oZSl7cyYmIXMuZGVzdHJveWVkJiZlLnRhcmdldD09PXRoaXMmJihzLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixzLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSxzLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIixzLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSxzLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kPW51bGwsZGVsZXRlIHMub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQscy50cmFuc2l0aW9uRW5kKGEsaCkpfSkscy4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIscy5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkscy4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIscy5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkpKToocy5zZXRUcmFuc2l0aW9uKDApLHMuc2V0VHJhbnNsYXRlKHYpLHMudXBkYXRlQWN0aXZlSW5kZXgocikscy51cGRhdGVTbGlkZXNDbGFzc2VzKCkscy5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsdCxpKSxzLnRyYW5zaXRpb25TdGFydChhLGgpLHMudHJhbnNpdGlvbkVuZChhLGgpKSwhMCl9LHNsaWRlVG9Mb29wOmZ1bmN0aW9uKGUsdCxhLGkpe3ZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT1hJiYoYT0hMCk7dmFyIHM9ZTtyZXR1cm4gdGhpcy5wYXJhbXMubG9vcCYmKHMrPXRoaXMubG9vcGVkU2xpZGVzKSx0aGlzLnNsaWRlVG8ocyx0LGEsaSl9LHNsaWRlTmV4dDpmdW5jdGlvbihlLHQsYSl7dm9pZCAwPT09ZSYmKGU9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PXQmJih0PSEwKTt2YXIgaT10aGlzLHM9aS5wYXJhbXMscj1pLmFuaW1hdGluZztyZXR1cm4gcy5sb29wPyFyJiYoaS5sb29wRml4KCksaS5fY2xpZW50TGVmdD1pLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdCxpLnNsaWRlVG8oaS5hY3RpdmVJbmRleCtzLnNsaWRlc1Blckdyb3VwLGUsdCxhKSk6aS5zbGlkZVRvKGkuYWN0aXZlSW5kZXgrcy5zbGlkZXNQZXJHcm91cCxlLHQsYSl9LHNsaWRlUHJldjpmdW5jdGlvbihlLHQsYSl7dm9pZCAwPT09ZSYmKGU9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PXQmJih0PSEwKTt2YXIgaT10aGlzLHM9aS5wYXJhbXMscj1pLmFuaW1hdGluZyxuPWkuc25hcEdyaWQsbz1pLnNsaWRlc0dyaWQsbD1pLnJ0bFRyYW5zbGF0ZTtpZihzLmxvb3Ape2lmKHIpcmV0dXJuITE7aS5sb29wRml4KCksaS5fY2xpZW50TGVmdD1pLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdH1mdW5jdGlvbiBkKGUpe3JldHVybiBlPDA/LU1hdGguZmxvb3IoTWF0aC5hYnMoZSkpOk1hdGguZmxvb3IoZSl9dmFyIHAsYz1kKGw/aS50cmFuc2xhdGU6LWkudHJhbnNsYXRlKSx1PW4ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBkKGUpfSksaD0oby5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGQoZSl9KSxuW3UuaW5kZXhPZihjKV0sblt1LmluZGV4T2YoYyktMV0pO3JldHVybiB2b2lkIDAhPT1oJiYocD1vLmluZGV4T2YoaCkpPDAmJihwPWkuYWN0aXZlSW5kZXgtMSksaS5zbGlkZVRvKHAsZSx0LGEpfSxzbGlkZVJlc2V0OmZ1bmN0aW9uKGUsdCxhKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PXQmJih0PSEwKSx0aGlzLnNsaWRlVG8odGhpcy5hY3RpdmVJbmRleCxlLHQsYSl9LHNsaWRlVG9DbG9zZXN0OmZ1bmN0aW9uKGUsdCxhKXt2b2lkIDA9PT1lJiYoZT10aGlzLnBhcmFtcy5zcGVlZCksdm9pZCAwPT09dCYmKHQ9ITApO3ZhciBpPXRoaXMscz1pLmFjdGl2ZUluZGV4LHI9TWF0aC5mbG9vcihzL2kucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtpZihyPGkuc25hcEdyaWQubGVuZ3RoLTEpe3ZhciBuPWkucnRsVHJhbnNsYXRlP2kudHJhbnNsYXRlOi1pLnRyYW5zbGF0ZSxvPWkuc25hcEdyaWRbcl07KGkuc25hcEdyaWRbcisxXS1vKS8yPG4tbyYmKHM9aS5wYXJhbXMuc2xpZGVzUGVyR3JvdXApfXJldHVybiBpLnNsaWRlVG8ocyxlLHQsYSl9LHNsaWRlVG9DbGlja2VkU2xpZGU6ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMsYT10LnBhcmFtcyxpPXQuJHdyYXBwZXJFbCxzPVwiYXV0b1wiPT09YS5zbGlkZXNQZXJWaWV3P3Quc2xpZGVzUGVyVmlld0R5bmFtaWMoKTphLnNsaWRlc1BlclZpZXcscj10LmNsaWNrZWRJbmRleDtpZihhLmxvb3Ape2lmKHQuYW5pbWF0aW5nKXJldHVybjtlPXBhcnNlSW50KEwodC5jbGlja2VkU2xpZGUpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwxMCksYS5jZW50ZXJlZFNsaWRlcz9yPHQubG9vcGVkU2xpZGVzLXMvMnx8cj50LnNsaWRlcy5sZW5ndGgtdC5sb29wZWRTbGlkZXMrcy8yPyh0Lmxvb3BGaXgoKSxyPWkuY2hpbGRyZW4oXCIuXCIrYS5zbGlkZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2UrJ1wiXTpub3QoLicrYS5zbGlkZUR1cGxpY2F0ZUNsYXNzK1wiKVwiKS5lcSgwKS5pbmRleCgpLGVlLm5leHRUaWNrKGZ1bmN0aW9uKCl7dC5zbGlkZVRvKHIpfSkpOnQuc2xpZGVUbyhyKTpyPnQuc2xpZGVzLmxlbmd0aC1zPyh0Lmxvb3BGaXgoKSxyPWkuY2hpbGRyZW4oXCIuXCIrYS5zbGlkZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2UrJ1wiXTpub3QoLicrYS5zbGlkZUR1cGxpY2F0ZUNsYXNzK1wiKVwiKS5lcSgwKS5pbmRleCgpLGVlLm5leHRUaWNrKGZ1bmN0aW9uKCl7dC5zbGlkZVRvKHIpfSkpOnQuc2xpZGVUbyhyKX1lbHNlIHQuc2xpZGVUbyhyKX19O3ZhciBoPXtsb29wQ3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxlPWkucGFyYW1zLHQ9aS4kd3JhcHBlckVsO3QuY2hpbGRyZW4oXCIuXCIrZS5zbGlkZUNsYXNzK1wiLlwiK2Uuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7dmFyIHM9dC5jaGlsZHJlbihcIi5cIitlLnNsaWRlQ2xhc3MpO2lmKGUubG9vcEZpbGxHcm91cFdpdGhCbGFuayl7dmFyIGE9ZS5zbGlkZXNQZXJHcm91cC1zLmxlbmd0aCVlLnNsaWRlc1Blckdyb3VwO2lmKGEhPT1lLnNsaWRlc1Blckdyb3VwKXtmb3IodmFyIHI9MDtyPGE7cis9MSl7dmFyIG49TChmLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKGUuc2xpZGVDbGFzcytcIiBcIitlLnNsaWRlQmxhbmtDbGFzcyk7dC5hcHBlbmQobil9cz10LmNoaWxkcmVuKFwiLlwiK2Uuc2xpZGVDbGFzcyl9fVwiYXV0b1wiIT09ZS5zbGlkZXNQZXJWaWV3fHxlLmxvb3BlZFNsaWRlc3x8KGUubG9vcGVkU2xpZGVzPXMubGVuZ3RoKSxpLmxvb3BlZFNsaWRlcz1wYXJzZUludChlLmxvb3BlZFNsaWRlc3x8ZS5zbGlkZXNQZXJWaWV3LDEwKSxpLmxvb3BlZFNsaWRlcys9ZS5sb29wQWRkaXRpb25hbFNsaWRlcyxpLmxvb3BlZFNsaWRlcz5zLmxlbmd0aCYmKGkubG9vcGVkU2xpZGVzPXMubGVuZ3RoKTt2YXIgbz1bXSxsPVtdO3MuZWFjaChmdW5jdGlvbihlLHQpe3ZhciBhPUwodCk7ZTxpLmxvb3BlZFNsaWRlcyYmbC5wdXNoKHQpLGU8cy5sZW5ndGgmJmU+PXMubGVuZ3RoLWkubG9vcGVkU2xpZGVzJiZvLnB1c2godCksYS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIixlKX0pO2Zvcih2YXIgZD0wO2Q8bC5sZW5ndGg7ZCs9MSl0LmFwcGVuZChMKGxbZF0uY2xvbmVOb2RlKCEwKSkuYWRkQ2xhc3MoZS5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7Zm9yKHZhciBwPW8ubGVuZ3RoLTE7MDw9cDtwLT0xKXQucHJlcGVuZChMKG9bcF0uY2xvbmVOb2RlKCEwKSkuYWRkQ2xhc3MoZS5zbGlkZUR1cGxpY2F0ZUNsYXNzKSl9LGxvb3BGaXg6ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMsYT10LnBhcmFtcyxpPXQuYWN0aXZlSW5kZXgscz10LnNsaWRlcyxyPXQubG9vcGVkU2xpZGVzLG49dC5hbGxvd1NsaWRlUHJldixvPXQuYWxsb3dTbGlkZU5leHQsbD10LnNuYXBHcmlkLGQ9dC5ydGxUcmFuc2xhdGU7dC5hbGxvd1NsaWRlUHJldj0hMCx0LmFsbG93U2xpZGVOZXh0PSEwO3ZhciBwPS1sW2ldLXQuZ2V0VHJhbnNsYXRlKCk7aTxyPyhlPXMubGVuZ3RoLTMqcitpLGUrPXIsdC5zbGlkZVRvKGUsMCwhMSwhMCkmJjAhPT1wJiZ0LnNldFRyYW5zbGF0ZSgoZD8tdC50cmFuc2xhdGU6dC50cmFuc2xhdGUpLXApKTooXCJhdXRvXCI9PT1hLnNsaWRlc1BlclZpZXcmJjIqcjw9aXx8aT49cy5sZW5ndGgtcikmJihlPS1zLmxlbmd0aCtpK3IsZSs9cix0LnNsaWRlVG8oZSwwLCExLCEwKSYmMCE9PXAmJnQuc2V0VHJhbnNsYXRlKChkPy10LnRyYW5zbGF0ZTp0LnRyYW5zbGF0ZSktcCkpO3QuYWxsb3dTbGlkZVByZXY9bix0LmFsbG93U2xpZGVOZXh0PW99LGxvb3BEZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy4kd3JhcHBlckVsLHQ9dGhpcy5wYXJhbXMsYT10aGlzLnNsaWRlcztlLmNoaWxkcmVuKFwiLlwiK3Quc2xpZGVDbGFzcytcIi5cIit0LnNsaWRlRHVwbGljYXRlQ2xhc3MrXCIsLlwiK3Quc2xpZGVDbGFzcytcIi5cIit0LnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCksYS5yZW1vdmVBdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIil9fTt2YXIgdj17c2V0R3JhYkN1cnNvcjpmdW5jdGlvbihlKXtpZighKHRlLnRvdWNofHwhdGhpcy5wYXJhbXMuc2ltdWxhdGVUb3VjaHx8dGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmdGhpcy5pc0xvY2tlZCkpe3ZhciB0PXRoaXMuZWw7dC5zdHlsZS5jdXJzb3I9XCJtb3ZlXCIsdC5zdHlsZS5jdXJzb3I9ZT9cIi13ZWJraXQtZ3JhYmJpbmdcIjpcIi13ZWJraXQtZ3JhYlwiLHQuc3R5bGUuY3Vyc29yPWU/XCItbW96LWdyYWJiaW5cIjpcIi1tb3otZ3JhYlwiLHQuc3R5bGUuY3Vyc29yPWU/XCJncmFiYmluZ1wiOlwiZ3JhYlwifX0sdW5zZXRHcmFiQ3Vyc29yOmZ1bmN0aW9uKCl7dGUudG91Y2h8fHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuaXNMb2NrZWR8fCh0aGlzLmVsLnN0eWxlLmN1cnNvcj1cIlwiKX19O3ZhciBtPXthcHBlbmRTbGlkZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dC4kd3JhcHBlckVsLGk9dC5wYXJhbXM7aWYoaS5sb29wJiZ0Lmxvb3BEZXN0cm95KCksXCJvYmplY3RcIj09dHlwZW9mIGUmJlwibGVuZ3RoXCJpbiBlKWZvcih2YXIgcz0wO3M8ZS5sZW5ndGg7cys9MSllW3NdJiZhLmFwcGVuZChlW3NdKTtlbHNlIGEuYXBwZW5kKGUpO2kubG9vcCYmdC5sb29wQ3JlYXRlKCksaS5vYnNlcnZlciYmdGUub2JzZXJ2ZXJ8fHQudXBkYXRlKCl9LHByZXBlbmRTbGlkZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dC5wYXJhbXMsaT10LiR3cmFwcGVyRWwscz10LmFjdGl2ZUluZGV4O2EubG9vcCYmdC5sb29wRGVzdHJveSgpO3ZhciByPXMrMTtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJsZW5ndGhcImluIGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bis9MSllW25dJiZpLnByZXBlbmQoZVtuXSk7cj1zK2UubGVuZ3RofWVsc2UgaS5wcmVwZW5kKGUpO2EubG9vcCYmdC5sb29wQ3JlYXRlKCksYS5vYnNlcnZlciYmdGUub2JzZXJ2ZXJ8fHQudXBkYXRlKCksdC5zbGlkZVRvKHIsMCwhMSl9LGFkZFNsaWRlOmZ1bmN0aW9uKGUsdCl7dmFyIGE9dGhpcyxpPWEuJHdyYXBwZXJFbCxzPWEucGFyYW1zLHI9YS5hY3RpdmVJbmRleDtzLmxvb3AmJihyLT1hLmxvb3BlZFNsaWRlcyxhLmxvb3BEZXN0cm95KCksYS5zbGlkZXM9aS5jaGlsZHJlbihcIi5cIitzLnNsaWRlQ2xhc3MpKTt2YXIgbj1hLnNsaWRlcy5sZW5ndGg7aWYoZTw9MClhLnByZXBlbmRTbGlkZSh0KTtlbHNlIGlmKG48PWUpYS5hcHBlbmRTbGlkZSh0KTtlbHNle2Zvcih2YXIgbz1lPHI/cisxOnIsbD1bXSxkPW4tMTtlPD1kO2QtPTEpe3ZhciBwPWEuc2xpZGVzLmVxKGQpO3AucmVtb3ZlKCksbC51bnNoaWZ0KHApfWlmKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZcImxlbmd0aFwiaW4gdCl7Zm9yKHZhciBjPTA7Yzx0Lmxlbmd0aDtjKz0xKXRbY10mJmkuYXBwZW5kKHRbY10pO289ZTxyP3IrdC5sZW5ndGg6cn1lbHNlIGkuYXBwZW5kKHQpO2Zvcih2YXIgdT0wO3U8bC5sZW5ndGg7dSs9MSlpLmFwcGVuZChsW3VdKTtzLmxvb3AmJmEubG9vcENyZWF0ZSgpLHMub2JzZXJ2ZXImJnRlLm9ic2VydmVyfHxhLnVwZGF0ZSgpLHMubG9vcD9hLnNsaWRlVG8obythLmxvb3BlZFNsaWRlcywwLCExKTphLnNsaWRlVG8obywwLCExKX19LHJlbW92ZVNsaWRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsYT10LnBhcmFtcyxpPXQuJHdyYXBwZXJFbCxzPXQuYWN0aXZlSW5kZXg7YS5sb29wJiYocy09dC5sb29wZWRTbGlkZXMsdC5sb29wRGVzdHJveSgpLHQuc2xpZGVzPWkuY2hpbGRyZW4oXCIuXCIrYS5zbGlkZUNsYXNzKSk7dmFyIHIsbj1zO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImxlbmd0aFwiaW4gZSl7Zm9yKHZhciBvPTA7bzxlLmxlbmd0aDtvKz0xKXI9ZVtvXSx0LnNsaWRlc1tyXSYmdC5zbGlkZXMuZXEocikucmVtb3ZlKCkscjxuJiYobi09MSk7bj1NYXRoLm1heChuLDApfWVsc2Ugcj1lLHQuc2xpZGVzW3JdJiZ0LnNsaWRlcy5lcShyKS5yZW1vdmUoKSxyPG4mJihuLT0xKSxuPU1hdGgubWF4KG4sMCk7YS5sb29wJiZ0Lmxvb3BDcmVhdGUoKSxhLm9ic2VydmVyJiZ0ZS5vYnNlcnZlcnx8dC51cGRhdGUoKSxhLmxvb3A/dC5zbGlkZVRvKG4rdC5sb29wZWRTbGlkZXMsMCwhMSk6dC5zbGlkZVRvKG4sMCwhMSl9LHJlbW92ZUFsbFNsaWRlczpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDx0aGlzLnNsaWRlcy5sZW5ndGg7dCs9MSllLnB1c2godCk7dGhpcy5yZW1vdmVTbGlkZShlKX19LGc9ZnVuY3Rpb24oKXt2YXIgZT1KLm5hdmlnYXRvci51c2VyQWdlbnQsdD17aW9zOiExLGFuZHJvaWQ6ITEsYW5kcm9pZENocm9tZTohMSxkZXNrdG9wOiExLHdpbmRvd3M6ITEsaXBob25lOiExLGlwb2Q6ITEsaXBhZDohMSxjb3Jkb3ZhOkouY29yZG92YXx8Si5waG9uZWdhcCxwaG9uZWdhcDpKLmNvcmRvdmF8fEoucGhvbmVnYXB9LGE9ZS5tYXRjaCgvKFdpbmRvd3MgUGhvbmUpOz9bXFxzXFwvXSsoW1xcZC5dKyk/LyksaT1lLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKSxzPWUubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKSxyPWUubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKSxuPSFzJiZlLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO2lmKGEmJih0Lm9zPVwid2luZG93c1wiLHQub3NWZXJzaW9uPWFbMl0sdC53aW5kb3dzPSEwKSxpJiYhYSYmKHQub3M9XCJhbmRyb2lkXCIsdC5vc1ZlcnNpb249aVsyXSx0LmFuZHJvaWQ9ITAsdC5hbmRyb2lkQ2hyb21lPTA8PWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiY2hyb21lXCIpKSwoc3x8bnx8cikmJih0Lm9zPVwiaW9zXCIsdC5pb3M9ITApLG4mJiFyJiYodC5vc1ZlcnNpb249blsyXS5yZXBsYWNlKC9fL2csXCIuXCIpLHQuaXBob25lPSEwKSxzJiYodC5vc1ZlcnNpb249c1syXS5yZXBsYWNlKC9fL2csXCIuXCIpLHQuaXBhZD0hMCksciYmKHQub3NWZXJzaW9uPXJbM10/clszXS5yZXBsYWNlKC9fL2csXCIuXCIpOm51bGwsdC5pcGhvbmU9ITApLHQuaW9zJiZ0Lm9zVmVyc2lvbiYmMDw9ZS5pbmRleE9mKFwiVmVyc2lvbi9cIikmJlwiMTBcIj09PXQub3NWZXJzaW9uLnNwbGl0KFwiLlwiKVswXSYmKHQub3NWZXJzaW9uPWUudG9Mb3dlckNhc2UoKS5zcGxpdChcInZlcnNpb24vXCIpWzFdLnNwbGl0KFwiIFwiKVswXSksdC5kZXNrdG9wPSEodC5vc3x8dC5hbmRyb2lkfHx0LndlYlZpZXcpLHQud2ViVmlldz0obnx8c3x8cikmJmUubWF0Y2goLy4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaSksdC5vcyYmXCJpb3NcIj09PXQub3Mpe3ZhciBvPXQub3NWZXJzaW9uLnNwbGl0KFwiLlwiKSxsPWYucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKTt0Lm1pbmltYWxVaT0hdC53ZWJWaWV3JiYocnx8bikmJigxKm9bMF09PTc/MTw9MSpvWzFdOjc8MSpvWzBdKSYmbCYmMDw9bC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLmluZGV4T2YoXCJtaW5pbWFsLXVpXCIpfXJldHVybiB0LnBpeGVsUmF0aW89Si5kZXZpY2VQaXhlbFJhdGlvfHwxLHR9KCk7ZnVuY3Rpb24gYigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcyxhPWUuZWw7aWYoIWF8fDAhPT1hLm9mZnNldFdpZHRoKXt0LmJyZWFrcG9pbnRzJiZlLnNldEJyZWFrcG9pbnQoKTt2YXIgaT1lLmFsbG93U2xpZGVOZXh0LHM9ZS5hbGxvd1NsaWRlUHJldixyPWUuc25hcEdyaWQ7aWYoZS5hbGxvd1NsaWRlTmV4dD0hMCxlLmFsbG93U2xpZGVQcmV2PSEwLGUudXBkYXRlU2l6ZSgpLGUudXBkYXRlU2xpZGVzKCksdC5mcmVlTW9kZSl7dmFyIG49TWF0aC5taW4oTWF0aC5tYXgoZS50cmFuc2xhdGUsZS5tYXhUcmFuc2xhdGUoKSksZS5taW5UcmFuc2xhdGUoKSk7ZS5zZXRUcmFuc2xhdGUobiksZS51cGRhdGVBY3RpdmVJbmRleCgpLGUudXBkYXRlU2xpZGVzQ2xhc3NlcygpLHQuYXV0b0hlaWdodCYmZS51cGRhdGVBdXRvSGVpZ2h0KCl9ZWxzZSBlLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSwoXCJhdXRvXCI9PT10LnNsaWRlc1BlclZpZXd8fDE8dC5zbGlkZXNQZXJWaWV3KSYmZS5pc0VuZCYmIWUucGFyYW1zLmNlbnRlcmVkU2xpZGVzP2Uuc2xpZGVUbyhlLnNsaWRlcy5sZW5ndGgtMSwwLCExLCEwKTplLnNsaWRlVG8oZS5hY3RpdmVJbmRleCwwLCExLCEwKTtlLmFsbG93U2xpZGVQcmV2PXMsZS5hbGxvd1NsaWRlTmV4dD1pLGUucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnIhPT1lLnNuYXBHcmlkJiZlLmNoZWNrT3ZlcmZsb3coKX19dmFyIHc9e2luaXQ6ITAsZGlyZWN0aW9uOlwiaG9yaXpvbnRhbFwiLHRvdWNoRXZlbnRzVGFyZ2V0OlwiY29udGFpbmVyXCIsaW5pdGlhbFNsaWRlOjAsc3BlZWQ6MzAwLHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjohMSxlZGdlU3dpcGVEZXRlY3Rpb246ITEsZWRnZVN3aXBlVGhyZXNob2xkOjIwLGZyZWVNb2RlOiExLGZyZWVNb2RlTW9tZW50dW06ITAsZnJlZU1vZGVNb21lbnR1bVJhdGlvOjEsZnJlZU1vZGVNb21lbnR1bUJvdW5jZTohMCxmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86MSxmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzoxLGZyZWVNb2RlU3RpY2t5OiExLGZyZWVNb2RlTWluaW11bVZlbG9jaXR5Oi4wMixhdXRvSGVpZ2h0OiExLHNldFdyYXBwZXJTaXplOiExLHZpcnR1YWxUcmFuc2xhdGU6ITEsZWZmZWN0Olwic2xpZGVcIixicmVha3BvaW50czp2b2lkIDAsYnJlYWtwb2ludHNJbnZlcnNlOiExLHNwYWNlQmV0d2VlbjowLHNsaWRlc1BlclZpZXc6MSxzbGlkZXNQZXJDb2x1bW46MSxzbGlkZXNQZXJDb2x1bW5GaWxsOlwiY29sdW1uXCIsc2xpZGVzUGVyR3JvdXA6MSxjZW50ZXJlZFNsaWRlczohMSxzbGlkZXNPZmZzZXRCZWZvcmU6MCxzbGlkZXNPZmZzZXRBZnRlcjowLG5vcm1hbGl6ZVNsaWRlSW5kZXg6ITAsY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiExLHdhdGNoT3ZlcmZsb3c6ITEscm91bmRMZW5ndGhzOiExLHRvdWNoUmF0aW86MSx0b3VjaEFuZ2xlOjQ1LHNpbXVsYXRlVG91Y2g6ITAsc2hvcnRTd2lwZXM6ITAsbG9uZ1N3aXBlczohMCxsb25nU3dpcGVzUmF0aW86LjUsbG9uZ1N3aXBlc01zOjMwMCxmb2xsb3dGaW5nZXI6ITAsYWxsb3dUb3VjaE1vdmU6ITAsdGhyZXNob2xkOjAsdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiEwLHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDohMCx0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDohMSx0b3VjaFJlbGVhc2VPbkVkZ2VzOiExLHVuaXF1ZU5hdkVsZW1lbnRzOiEwLHJlc2lzdGFuY2U6ITAscmVzaXN0YW5jZVJhdGlvOi44NSx3YXRjaFNsaWRlc1Byb2dyZXNzOiExLHdhdGNoU2xpZGVzVmlzaWJpbGl0eTohMSxncmFiQ3Vyc29yOiExLHByZXZlbnRDbGlja3M6ITAscHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiEwLHNsaWRlVG9DbGlja2VkU2xpZGU6ITEscHJlbG9hZEltYWdlczohMCx1cGRhdGVPbkltYWdlc1JlYWR5OiEwLGxvb3A6ITEsbG9vcEFkZGl0aW9uYWxTbGlkZXM6MCxsb29wZWRTbGlkZXM6bnVsbCxsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiExLGFsbG93U2xpZGVQcmV2OiEwLGFsbG93U2xpZGVOZXh0OiEwLHN3aXBlSGFuZGxlcjpudWxsLG5vU3dpcGluZzohMCxub1N3aXBpbmdDbGFzczpcInN3aXBlci1uby1zd2lwaW5nXCIsbm9Td2lwaW5nU2VsZWN0b3I6bnVsbCxwYXNzaXZlTGlzdGVuZXJzOiEwLGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6XCJzd2lwZXItY29udGFpbmVyLVwiLHNsaWRlQ2xhc3M6XCJzd2lwZXItc2xpZGVcIixzbGlkZUJsYW5rQ2xhc3M6XCJzd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rXCIsc2xpZGVBY3RpdmVDbGFzczpcInN3aXBlci1zbGlkZS1hY3RpdmVcIixzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOlwic3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1hY3RpdmVcIixzbGlkZVZpc2libGVDbGFzczpcInN3aXBlci1zbGlkZS12aXNpYmxlXCIsc2xpZGVEdXBsaWNhdGVDbGFzczpcInN3aXBlci1zbGlkZS1kdXBsaWNhdGVcIixzbGlkZU5leHRDbGFzczpcInN3aXBlci1zbGlkZS1uZXh0XCIsc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6XCJzd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHRcIixzbGlkZVByZXZDbGFzczpcInN3aXBlci1zbGlkZS1wcmV2XCIsc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6XCJzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXZcIix3cmFwcGVyQ2xhc3M6XCJzd2lwZXItd3JhcHBlclwiLHJ1bkNhbGxiYWNrc09uSW5pdDohMH0seT17dXBkYXRlOmQsdHJhbnNsYXRlOnAsdHJhbnNpdGlvbjpjLHNsaWRlOnUsbG9vcDpoLGdyYWJDdXJzb3I6dixtYW5pcHVsYXRpb246bSxldmVudHM6e2F0dGFjaEV2ZW50czpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcyxhPWUudG91Y2hFdmVudHMsaT1lLmVsLHM9ZS53cmFwcGVyRWw7ZS5vblRvdWNoU3RhcnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxhPXQudG91Y2hFdmVudHNEYXRhLGk9dC5wYXJhbXMscz10LnRvdWNoZXM7aWYoIXQuYW5pbWF0aW5nfHwhaS5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pe3ZhciByPWU7aWYoci5vcmlnaW5hbEV2ZW50JiYocj1yLm9yaWdpbmFsRXZlbnQpLGEuaXNUb3VjaEV2ZW50PVwidG91Y2hzdGFydFwiPT09ci50eXBlLChhLmlzVG91Y2hFdmVudHx8IShcIndoaWNoXCJpbiByKXx8MyE9PXIud2hpY2gpJiYhKCFhLmlzVG91Y2hFdmVudCYmXCJidXR0b25cImluIHImJjA8ci5idXR0b258fGEuaXNUb3VjaGVkJiZhLmlzTW92ZWQpKWlmKGkubm9Td2lwaW5nJiZMKHIudGFyZ2V0KS5jbG9zZXN0KGkubm9Td2lwaW5nU2VsZWN0b3I/aS5ub1N3aXBpbmdTZWxlY3RvcjpcIi5cIitpLm5vU3dpcGluZ0NsYXNzKVswXSl0LmFsbG93Q2xpY2s9ITA7ZWxzZSBpZighaS5zd2lwZUhhbmRsZXJ8fEwocikuY2xvc2VzdChpLnN3aXBlSGFuZGxlcilbMF0pe3MuY3VycmVudFg9XCJ0b3VjaHN0YXJ0XCI9PT1yLnR5cGU/ci50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYOnIucGFnZVgscy5jdXJyZW50WT1cInRvdWNoc3RhcnRcIj09PXIudHlwZT9yLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6ci5wYWdlWTt2YXIgbj1zLmN1cnJlbnRYLG89cy5jdXJyZW50WSxsPWkuZWRnZVN3aXBlRGV0ZWN0aW9ufHxpLmlPU0VkZ2VTd2lwZURldGVjdGlvbixkPWkuZWRnZVN3aXBlVGhyZXNob2xkfHxpLmlPU0VkZ2VTd2lwZVRocmVzaG9sZDtpZighbHx8IShuPD1kfHxuPj1KLnNjcmVlbi53aWR0aC1kKSl7aWYoZWUuZXh0ZW5kKGEse2lzVG91Y2hlZDohMCxpc01vdmVkOiExLGFsbG93VG91Y2hDYWxsYmFja3M6ITAsaXNTY3JvbGxpbmc6dm9pZCAwLHN0YXJ0TW92aW5nOnZvaWQgMH0pLHMuc3RhcnRYPW4scy5zdGFydFk9byxhLnRvdWNoU3RhcnRUaW1lPWVlLm5vdygpLHQuYWxsb3dDbGljaz0hMCx0LnVwZGF0ZVNpemUoKSx0LnN3aXBlRGlyZWN0aW9uPXZvaWQgMCwwPGkudGhyZXNob2xkJiYoYS5hbGxvd1RocmVzaG9sZE1vdmU9ITEpLFwidG91Y2hzdGFydFwiIT09ci50eXBlKXt2YXIgcD0hMDtMKHIudGFyZ2V0KS5pcyhhLmZvcm1FbGVtZW50cykmJihwPSExKSxmLmFjdGl2ZUVsZW1lbnQmJkwoZi5hY3RpdmVFbGVtZW50KS5pcyhhLmZvcm1FbGVtZW50cykmJmYuYWN0aXZlRWxlbWVudCE9PXIudGFyZ2V0JiZmLmFjdGl2ZUVsZW1lbnQuYmx1cigpO3ZhciBjPXAmJnQuYWxsb3dUb3VjaE1vdmUmJmkudG91Y2hTdGFydFByZXZlbnREZWZhdWx0OyhpLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0fHxjKSYmci5wcmV2ZW50RGVmYXVsdCgpfXQuZW1pdChcInRvdWNoU3RhcnRcIixyKX19fX0uYmluZChlKSxlLm9uVG91Y2hNb3ZlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsYT10LnRvdWNoRXZlbnRzRGF0YSxpPXQucGFyYW1zLHM9dC50b3VjaGVzLHI9dC5ydGxUcmFuc2xhdGUsbj1lO2lmKG4ub3JpZ2luYWxFdmVudCYmKG49bi5vcmlnaW5hbEV2ZW50KSxhLmlzVG91Y2hlZCl7aWYoIWEuaXNUb3VjaEV2ZW50fHxcIm1vdXNlbW92ZVwiIT09bi50eXBlKXt2YXIgbz1cInRvdWNobW92ZVwiPT09bi50eXBlP24udGFyZ2V0VG91Y2hlc1swXS5wYWdlWDpuLnBhZ2VYLGw9XCJ0b3VjaG1vdmVcIj09PW4udHlwZT9uLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6bi5wYWdlWTtpZihuLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKXJldHVybiBzLnN0YXJ0WD1vLHZvaWQocy5zdGFydFk9bCk7aWYoIXQuYWxsb3dUb3VjaE1vdmUpcmV0dXJuIHQuYWxsb3dDbGljaz0hMSx2b2lkKGEuaXNUb3VjaGVkJiYoZWUuZXh0ZW5kKHMse3N0YXJ0WDpvLHN0YXJ0WTpsLGN1cnJlbnRYOm8sY3VycmVudFk6bH0pLGEudG91Y2hTdGFydFRpbWU9ZWUubm93KCkpKTtpZihhLmlzVG91Y2hFdmVudCYmaS50b3VjaFJlbGVhc2VPbkVkZ2VzJiYhaS5sb29wKWlmKHQuaXNWZXJ0aWNhbCgpKXtpZihsPHMuc3RhcnRZJiZ0LnRyYW5zbGF0ZTw9dC5tYXhUcmFuc2xhdGUoKXx8bD5zLnN0YXJ0WSYmdC50cmFuc2xhdGU+PXQubWluVHJhbnNsYXRlKCkpcmV0dXJuIGEuaXNUb3VjaGVkPSExLHZvaWQoYS5pc01vdmVkPSExKX1lbHNlIGlmKG88cy5zdGFydFgmJnQudHJhbnNsYXRlPD10Lm1heFRyYW5zbGF0ZSgpfHxvPnMuc3RhcnRYJiZ0LnRyYW5zbGF0ZT49dC5taW5UcmFuc2xhdGUoKSlyZXR1cm47aWYoYS5pc1RvdWNoRXZlbnQmJmYuYWN0aXZlRWxlbWVudCYmbi50YXJnZXQ9PT1mLmFjdGl2ZUVsZW1lbnQmJkwobi50YXJnZXQpLmlzKGEuZm9ybUVsZW1lbnRzKSlyZXR1cm4gYS5pc01vdmVkPSEwLHZvaWQodC5hbGxvd0NsaWNrPSExKTtpZihhLmFsbG93VG91Y2hDYWxsYmFja3MmJnQuZW1pdChcInRvdWNoTW92ZVwiLG4pLCEobi50YXJnZXRUb3VjaGVzJiYxPG4udGFyZ2V0VG91Y2hlcy5sZW5ndGgpKXtzLmN1cnJlbnRYPW8scy5jdXJyZW50WT1sO3ZhciBkLHA9cy5jdXJyZW50WC1zLnN0YXJ0WCxjPXMuY3VycmVudFktcy5zdGFydFk7aWYoISh0LnBhcmFtcy50aHJlc2hvbGQmJk1hdGguc3FydChNYXRoLnBvdyhwLDIpK01hdGgucG93KGMsMikpPHQucGFyYW1zLnRocmVzaG9sZCkpaWYodm9pZCAwPT09YS5pc1Njcm9sbGluZyYmKHQuaXNIb3Jpem9udGFsKCkmJnMuY3VycmVudFk9PT1zLnN0YXJ0WXx8dC5pc1ZlcnRpY2FsKCkmJnMuY3VycmVudFg9PT1zLnN0YXJ0WD9hLmlzU2Nyb2xsaW5nPSExOjI1PD1wKnArYypjJiYoZD0xODAqTWF0aC5hdGFuMihNYXRoLmFicyhjKSxNYXRoLmFicyhwKSkvTWF0aC5QSSxhLmlzU2Nyb2xsaW5nPXQuaXNIb3Jpem9udGFsKCk/ZD5pLnRvdWNoQW5nbGU6OTAtZD5pLnRvdWNoQW5nbGUpKSxhLmlzU2Nyb2xsaW5nJiZ0LmVtaXQoXCJ0b3VjaE1vdmVPcHBvc2l0ZVwiLG4pLHZvaWQgMD09PWEuc3RhcnRNb3ZpbmcmJihzLmN1cnJlbnRYPT09cy5zdGFydFgmJnMuY3VycmVudFk9PT1zLnN0YXJ0WXx8KGEuc3RhcnRNb3Zpbmc9ITApKSxhLmlzU2Nyb2xsaW5nKWEuaXNUb3VjaGVkPSExO2Vsc2UgaWYoYS5zdGFydE1vdmluZyl7dC5hbGxvd0NsaWNrPSExLG4ucHJldmVudERlZmF1bHQoKSxpLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiYmIWkubmVzdGVkJiZuLnN0b3BQcm9wYWdhdGlvbigpLGEuaXNNb3ZlZHx8KGkubG9vcCYmdC5sb29wRml4KCksYS5zdGFydFRyYW5zbGF0ZT10LmdldFRyYW5zbGF0ZSgpLHQuc2V0VHJhbnNpdGlvbigwKSx0LmFuaW1hdGluZyYmdC4kd3JhcHBlckVsLnRyaWdnZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIiksYS5hbGxvd01vbWVudHVtQm91bmNlPSExLCFpLmdyYWJDdXJzb3J8fCEwIT09dC5hbGxvd1NsaWRlTmV4dCYmITAhPT10LmFsbG93U2xpZGVQcmV2fHx0LnNldEdyYWJDdXJzb3IoITApLHQuZW1pdChcInNsaWRlckZpcnN0TW92ZVwiLG4pKSx0LmVtaXQoXCJzbGlkZXJNb3ZlXCIsbiksYS5pc01vdmVkPSEwO3ZhciB1PXQuaXNIb3Jpem9udGFsKCk/cDpjO3MuZGlmZj11LHUqPWkudG91Y2hSYXRpbyxyJiYodT0tdSksdC5zd2lwZURpcmVjdGlvbj0wPHU/XCJwcmV2XCI6XCJuZXh0XCIsYS5jdXJyZW50VHJhbnNsYXRlPXUrYS5zdGFydFRyYW5zbGF0ZTt2YXIgaD0hMCx2PWkucmVzaXN0YW5jZVJhdGlvO2lmKGkudG91Y2hSZWxlYXNlT25FZGdlcyYmKHY9MCksMDx1JiZhLmN1cnJlbnRUcmFuc2xhdGU+dC5taW5UcmFuc2xhdGUoKT8oaD0hMSxpLnJlc2lzdGFuY2UmJihhLmN1cnJlbnRUcmFuc2xhdGU9dC5taW5UcmFuc2xhdGUoKS0xK01hdGgucG93KC10Lm1pblRyYW5zbGF0ZSgpK2Euc3RhcnRUcmFuc2xhdGUrdSx2KSkpOnU8MCYmYS5jdXJyZW50VHJhbnNsYXRlPHQubWF4VHJhbnNsYXRlKCkmJihoPSExLGkucmVzaXN0YW5jZSYmKGEuY3VycmVudFRyYW5zbGF0ZT10Lm1heFRyYW5zbGF0ZSgpKzEtTWF0aC5wb3codC5tYXhUcmFuc2xhdGUoKS1hLnN0YXJ0VHJhbnNsYXRlLXUsdikpKSxoJiYobi5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcj0hMCksIXQuYWxsb3dTbGlkZU5leHQmJlwibmV4dFwiPT09dC5zd2lwZURpcmVjdGlvbiYmYS5jdXJyZW50VHJhbnNsYXRlPGEuc3RhcnRUcmFuc2xhdGUmJihhLmN1cnJlbnRUcmFuc2xhdGU9YS5zdGFydFRyYW5zbGF0ZSksIXQuYWxsb3dTbGlkZVByZXYmJlwicHJldlwiPT09dC5zd2lwZURpcmVjdGlvbiYmYS5jdXJyZW50VHJhbnNsYXRlPmEuc3RhcnRUcmFuc2xhdGUmJihhLmN1cnJlbnRUcmFuc2xhdGU9YS5zdGFydFRyYW5zbGF0ZSksMDxpLnRocmVzaG9sZCl7aWYoIShNYXRoLmFicyh1KT5pLnRocmVzaG9sZHx8YS5hbGxvd1RocmVzaG9sZE1vdmUpKXJldHVybiB2b2lkKGEuY3VycmVudFRyYW5zbGF0ZT1hLnN0YXJ0VHJhbnNsYXRlKTtpZighYS5hbGxvd1RocmVzaG9sZE1vdmUpcmV0dXJuIGEuYWxsb3dUaHJlc2hvbGRNb3ZlPSEwLHMuc3RhcnRYPXMuY3VycmVudFgscy5zdGFydFk9cy5jdXJyZW50WSxhLmN1cnJlbnRUcmFuc2xhdGU9YS5zdGFydFRyYW5zbGF0ZSx2b2lkKHMuZGlmZj10LmlzSG9yaXpvbnRhbCgpP3MuY3VycmVudFgtcy5zdGFydFg6cy5jdXJyZW50WS1zLnN0YXJ0WSl9aS5mb2xsb3dGaW5nZXImJigoaS5mcmVlTW9kZXx8aS53YXRjaFNsaWRlc1Byb2dyZXNzfHxpLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkmJih0LnVwZGF0ZUFjdGl2ZUluZGV4KCksdC51cGRhdGVTbGlkZXNDbGFzc2VzKCkpLGkuZnJlZU1vZGUmJigwPT09YS52ZWxvY2l0aWVzLmxlbmd0aCYmYS52ZWxvY2l0aWVzLnB1c2goe3Bvc2l0aW9uOnNbdC5pc0hvcml6b250YWwoKT9cInN0YXJ0WFwiOlwic3RhcnRZXCJdLHRpbWU6YS50b3VjaFN0YXJ0VGltZX0pLGEudmVsb2NpdGllcy5wdXNoKHtwb3NpdGlvbjpzW3QuaXNIb3Jpem9udGFsKCk/XCJjdXJyZW50WFwiOlwiY3VycmVudFlcIl0sdGltZTplZS5ub3coKX0pKSx0LnVwZGF0ZVByb2dyZXNzKGEuY3VycmVudFRyYW5zbGF0ZSksdC5zZXRUcmFuc2xhdGUoYS5jdXJyZW50VHJhbnNsYXRlKSl9fX19ZWxzZSBhLnN0YXJ0TW92aW5nJiZhLmlzU2Nyb2xsaW5nJiZ0LmVtaXQoXCJ0b3VjaE1vdmVPcHBvc2l0ZVwiLG4pfS5iaW5kKGUpLGUub25Ub3VjaEVuZD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dC50b3VjaEV2ZW50c0RhdGEsaT10LnBhcmFtcyxzPXQudG91Y2hlcyxyPXQucnRsVHJhbnNsYXRlLG49dC4kd3JhcHBlckVsLG89dC5zbGlkZXNHcmlkLGw9dC5zbmFwR3JpZCxkPWU7aWYoZC5vcmlnaW5hbEV2ZW50JiYoZD1kLm9yaWdpbmFsRXZlbnQpLGEuYWxsb3dUb3VjaENhbGxiYWNrcyYmdC5lbWl0KFwidG91Y2hFbmRcIixkKSxhLmFsbG93VG91Y2hDYWxsYmFja3M9ITEsIWEuaXNUb3VjaGVkKXJldHVybiBhLmlzTW92ZWQmJmkuZ3JhYkN1cnNvciYmdC5zZXRHcmFiQ3Vyc29yKCExKSxhLmlzTW92ZWQ9ITEsdm9pZChhLnN0YXJ0TW92aW5nPSExKTtpLmdyYWJDdXJzb3ImJmEuaXNNb3ZlZCYmYS5pc1RvdWNoZWQmJighMD09PXQuYWxsb3dTbGlkZU5leHR8fCEwPT09dC5hbGxvd1NsaWRlUHJldikmJnQuc2V0R3JhYkN1cnNvcighMSk7dmFyIHAsYz1lZS5ub3coKSx1PWMtYS50b3VjaFN0YXJ0VGltZTtpZih0LmFsbG93Q2xpY2smJih0LnVwZGF0ZUNsaWNrZWRTbGlkZShkKSx0LmVtaXQoXCJ0YXBcIixkKSx1PDMwMCYmMzAwPGMtYS5sYXN0Q2xpY2tUaW1lJiYoYS5jbGlja1RpbWVvdXQmJmNsZWFyVGltZW91dChhLmNsaWNrVGltZW91dCksYS5jbGlja1RpbWVvdXQ9ZWUubmV4dFRpY2soZnVuY3Rpb24oKXt0JiYhdC5kZXN0cm95ZWQmJnQuZW1pdChcImNsaWNrXCIsZCl9LDMwMCkpLHU8MzAwJiZjLWEubGFzdENsaWNrVGltZTwzMDAmJihhLmNsaWNrVGltZW91dCYmY2xlYXJUaW1lb3V0KGEuY2xpY2tUaW1lb3V0KSx0LmVtaXQoXCJkb3VibGVUYXBcIixkKSkpLGEubGFzdENsaWNrVGltZT1lZS5ub3coKSxlZS5uZXh0VGljayhmdW5jdGlvbigpe3QuZGVzdHJveWVkfHwodC5hbGxvd0NsaWNrPSEwKX0pLCFhLmlzVG91Y2hlZHx8IWEuaXNNb3ZlZHx8IXQuc3dpcGVEaXJlY3Rpb258fDA9PT1zLmRpZmZ8fGEuY3VycmVudFRyYW5zbGF0ZT09PWEuc3RhcnRUcmFuc2xhdGUpcmV0dXJuIGEuaXNUb3VjaGVkPSExLGEuaXNNb3ZlZD0hMSx2b2lkKGEuc3RhcnRNb3Zpbmc9ITEpO2lmKGEuaXNUb3VjaGVkPSExLGEuaXNNb3ZlZD0hMSxhLnN0YXJ0TW92aW5nPSExLHA9aS5mb2xsb3dGaW5nZXI/cj90LnRyYW5zbGF0ZTotdC50cmFuc2xhdGU6LWEuY3VycmVudFRyYW5zbGF0ZSxpLmZyZWVNb2RlKXtpZihwPC10Lm1pblRyYW5zbGF0ZSgpKXJldHVybiB2b2lkIHQuc2xpZGVUbyh0LmFjdGl2ZUluZGV4KTtpZihwPi10Lm1heFRyYW5zbGF0ZSgpKXJldHVybiB2b2lkKHQuc2xpZGVzLmxlbmd0aDxsLmxlbmd0aD90LnNsaWRlVG8obC5sZW5ndGgtMSk6dC5zbGlkZVRvKHQuc2xpZGVzLmxlbmd0aC0xKSk7aWYoaS5mcmVlTW9kZU1vbWVudHVtKXtpZigxPGEudmVsb2NpdGllcy5sZW5ndGgpe3ZhciBoPWEudmVsb2NpdGllcy5wb3AoKSx2PWEudmVsb2NpdGllcy5wb3AoKSxmPWgucG9zaXRpb24tdi5wb3NpdGlvbixtPWgudGltZS12LnRpbWU7dC52ZWxvY2l0eT1mL20sdC52ZWxvY2l0eS89MixNYXRoLmFicyh0LnZlbG9jaXR5KTxpLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5JiYodC52ZWxvY2l0eT0wKSwoMTUwPG18fDMwMDxlZS5ub3coKS1oLnRpbWUpJiYodC52ZWxvY2l0eT0wKX1lbHNlIHQudmVsb2NpdHk9MDt0LnZlbG9jaXR5Kj1pLmZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvLGEudmVsb2NpdGllcy5sZW5ndGg9MDt2YXIgZz0xZTMqaS5mcmVlTW9kZU1vbWVudHVtUmF0aW8sYj10LnZlbG9jaXR5Kmcsdz10LnRyYW5zbGF0ZStiO3ImJih3PS13KTt2YXIgeSx4LFQ9ITEsRT0yMCpNYXRoLmFicyh0LnZlbG9jaXR5KSppLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbztpZih3PHQubWF4VHJhbnNsYXRlKCkpaS5mcmVlTW9kZU1vbWVudHVtQm91bmNlPyh3K3QubWF4VHJhbnNsYXRlKCk8LUUmJih3PXQubWF4VHJhbnNsYXRlKCktRSkseT10Lm1heFRyYW5zbGF0ZSgpLFQ9ITAsYS5hbGxvd01vbWVudHVtQm91bmNlPSEwKTp3PXQubWF4VHJhbnNsYXRlKCksaS5sb29wJiZpLmNlbnRlcmVkU2xpZGVzJiYoeD0hMCk7ZWxzZSBpZih3PnQubWluVHJhbnNsYXRlKCkpaS5mcmVlTW9kZU1vbWVudHVtQm91bmNlPyh3LXQubWluVHJhbnNsYXRlKCk+RSYmKHc9dC5taW5UcmFuc2xhdGUoKStFKSx5PXQubWluVHJhbnNsYXRlKCksVD0hMCxhLmFsbG93TW9tZW50dW1Cb3VuY2U9ITApOnc9dC5taW5UcmFuc2xhdGUoKSxpLmxvb3AmJmkuY2VudGVyZWRTbGlkZXMmJih4PSEwKTtlbHNlIGlmKGkuZnJlZU1vZGVTdGlja3kpe2Zvcih2YXIgUyxDPTA7QzxsLmxlbmd0aDtDKz0xKWlmKGxbQ10+LXcpe1M9QzticmVha313PS0odz1NYXRoLmFicyhsW1NdLXcpPE1hdGguYWJzKGxbUy0xXS13KXx8XCJuZXh0XCI9PT10LnN3aXBlRGlyZWN0aW9uP2xbU106bFtTLTFdKX1pZih4JiZ0Lm9uY2UoXCJ0cmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXt0Lmxvb3BGaXgoKX0pLDAhPT10LnZlbG9jaXR5KWc9cj9NYXRoLmFicygoLXctdC50cmFuc2xhdGUpL3QudmVsb2NpdHkpOk1hdGguYWJzKCh3LXQudHJhbnNsYXRlKS90LnZlbG9jaXR5KTtlbHNlIGlmKGkuZnJlZU1vZGVTdGlja3kpcmV0dXJuIHZvaWQgdC5zbGlkZVRvQ2xvc2VzdCgpO2kuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSYmVD8odC51cGRhdGVQcm9ncmVzcyh5KSx0LnNldFRyYW5zaXRpb24oZyksdC5zZXRUcmFuc2xhdGUodyksdC50cmFuc2l0aW9uU3RhcnQoITAsdC5zd2lwZURpcmVjdGlvbiksdC5hbmltYXRpbmc9ITAsbi50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7dCYmIXQuZGVzdHJveWVkJiZhLmFsbG93TW9tZW50dW1Cb3VuY2UmJih0LmVtaXQoXCJtb21lbnR1bUJvdW5jZVwiKSx0LnNldFRyYW5zaXRpb24oaS5zcGVlZCksdC5zZXRUcmFuc2xhdGUoeSksbi50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7dCYmIXQuZGVzdHJveWVkJiZ0LnRyYW5zaXRpb25FbmQoKX0pKX0pKTp0LnZlbG9jaXR5Pyh0LnVwZGF0ZVByb2dyZXNzKHcpLHQuc2V0VHJhbnNpdGlvbihnKSx0LnNldFRyYW5zbGF0ZSh3KSx0LnRyYW5zaXRpb25TdGFydCghMCx0LnN3aXBlRGlyZWN0aW9uKSx0LmFuaW1hdGluZ3x8KHQuYW5pbWF0aW5nPSEwLG4udHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3QmJiF0LmRlc3Ryb3llZCYmdC50cmFuc2l0aW9uRW5kKCl9KSkpOnQudXBkYXRlUHJvZ3Jlc3ModyksdC51cGRhdGVBY3RpdmVJbmRleCgpLHQudXBkYXRlU2xpZGVzQ2xhc3NlcygpfWVsc2UgaWYoaS5mcmVlTW9kZVN0aWNreSlyZXR1cm4gdm9pZCB0LnNsaWRlVG9DbG9zZXN0KCk7KCFpLmZyZWVNb2RlTW9tZW50dW18fHU+PWkubG9uZ1N3aXBlc01zKSYmKHQudXBkYXRlUHJvZ3Jlc3MoKSx0LnVwZGF0ZUFjdGl2ZUluZGV4KCksdC51cGRhdGVTbGlkZXNDbGFzc2VzKCkpfWVsc2V7Zm9yKHZhciBNPTAsej10LnNsaWRlc1NpemVzR3JpZFswXSxQPTA7UDxvLmxlbmd0aDtQKz1pLnNsaWRlc1Blckdyb3VwKXZvaWQgMCE9PW9bUCtpLnNsaWRlc1Blckdyb3VwXT9wPj1vW1BdJiZwPG9bUCtpLnNsaWRlc1Blckdyb3VwXSYmKHo9b1soTT1QKStpLnNsaWRlc1Blckdyb3VwXS1vW1BdKTpwPj1vW1BdJiYoTT1QLHo9b1tvLmxlbmd0aC0xXS1vW28ubGVuZ3RoLTJdKTt2YXIgaz0ocC1vW01dKS96O2lmKHU+aS5sb25nU3dpcGVzTXMpe2lmKCFpLmxvbmdTd2lwZXMpcmV0dXJuIHZvaWQgdC5zbGlkZVRvKHQuYWN0aXZlSW5kZXgpO1wibmV4dFwiPT09dC5zd2lwZURpcmVjdGlvbiYmKGs+PWkubG9uZ1N3aXBlc1JhdGlvP3Quc2xpZGVUbyhNK2kuc2xpZGVzUGVyR3JvdXApOnQuc2xpZGVUbyhNKSksXCJwcmV2XCI9PT10LnN3aXBlRGlyZWN0aW9uJiYoaz4xLWkubG9uZ1N3aXBlc1JhdGlvP3Quc2xpZGVUbyhNK2kuc2xpZGVzUGVyR3JvdXApOnQuc2xpZGVUbyhNKSl9ZWxzZXtpZighaS5zaG9ydFN3aXBlcylyZXR1cm4gdm9pZCB0LnNsaWRlVG8odC5hY3RpdmVJbmRleCk7XCJuZXh0XCI9PT10LnN3aXBlRGlyZWN0aW9uJiZ0LnNsaWRlVG8oTStpLnNsaWRlc1Blckdyb3VwKSxcInByZXZcIj09PXQuc3dpcGVEaXJlY3Rpb24mJnQuc2xpZGVUbyhNKX19fS5iaW5kKGUpLGUub25DbGljaz1mdW5jdGlvbihlKXt0aGlzLmFsbG93Q2xpY2t8fCh0aGlzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uJiZ0aGlzLmFuaW1hdGluZyYmKGUuc3RvcFByb3BhZ2F0aW9uKCksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSkpfS5iaW5kKGUpO3ZhciByPVwiY29udGFpbmVyXCI9PT10LnRvdWNoRXZlbnRzVGFyZ2V0P2k6cyxuPSEhdC5uZXN0ZWQ7aWYodGUudG91Y2h8fCF0ZS5wb2ludGVyRXZlbnRzJiYhdGUucHJlZml4ZWRQb2ludGVyRXZlbnRzKXtpZih0ZS50b3VjaCl7dmFyIG89IShcInRvdWNoc3RhcnRcIiE9PWEuc3RhcnR8fCF0ZS5wYXNzaXZlTGlzdGVuZXJ8fCF0LnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTtyLmFkZEV2ZW50TGlzdGVuZXIoYS5zdGFydCxlLm9uVG91Y2hTdGFydCxvKSxyLmFkZEV2ZW50TGlzdGVuZXIoYS5tb3ZlLGUub25Ub3VjaE1vdmUsdGUucGFzc2l2ZUxpc3RlbmVyP3twYXNzaXZlOiExLGNhcHR1cmU6bn06biksci5hZGRFdmVudExpc3RlbmVyKGEuZW5kLGUub25Ub3VjaEVuZCxvKX0odC5zaW11bGF0ZVRvdWNoJiYhZy5pb3MmJiFnLmFuZHJvaWR8fHQuc2ltdWxhdGVUb3VjaCYmIXRlLnRvdWNoJiZnLmlvcykmJihyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixlLm9uVG91Y2hTdGFydCwhMSksZi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsZS5vblRvdWNoTW92ZSxuKSxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsZS5vblRvdWNoRW5kLCExKSl9ZWxzZSByLmFkZEV2ZW50TGlzdGVuZXIoYS5zdGFydCxlLm9uVG91Y2hTdGFydCwhMSksZi5hZGRFdmVudExpc3RlbmVyKGEubW92ZSxlLm9uVG91Y2hNb3ZlLG4pLGYuYWRkRXZlbnRMaXN0ZW5lcihhLmVuZCxlLm9uVG91Y2hFbmQsITEpOyh0LnByZXZlbnRDbGlja3N8fHQucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSYmci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLm9uQ2xpY2ssITApLGUub24oZy5pb3N8fGcuYW5kcm9pZD9cInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZVwiOlwicmVzaXplIG9ic2VydmVyVXBkYXRlXCIsYiwhMCl9LGRldGFjaEV2ZW50czpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcyxhPWUudG91Y2hFdmVudHMsaT1lLmVsLHM9ZS53cmFwcGVyRWwscj1cImNvbnRhaW5lclwiPT09dC50b3VjaEV2ZW50c1RhcmdldD9pOnMsbj0hIXQubmVzdGVkO2lmKHRlLnRvdWNofHwhdGUucG9pbnRlckV2ZW50cyYmIXRlLnByZWZpeGVkUG9pbnRlckV2ZW50cyl7aWYodGUudG91Y2gpe3ZhciBvPSEoXCJvblRvdWNoU3RhcnRcIiE9PWEuc3RhcnR8fCF0ZS5wYXNzaXZlTGlzdGVuZXJ8fCF0LnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTtyLnJlbW92ZUV2ZW50TGlzdGVuZXIoYS5zdGFydCxlLm9uVG91Y2hTdGFydCxvKSxyLnJlbW92ZUV2ZW50TGlzdGVuZXIoYS5tb3ZlLGUub25Ub3VjaE1vdmUsbiksci5yZW1vdmVFdmVudExpc3RlbmVyKGEuZW5kLGUub25Ub3VjaEVuZCxvKX0odC5zaW11bGF0ZVRvdWNoJiYhZy5pb3MmJiFnLmFuZHJvaWR8fHQuc2ltdWxhdGVUb3VjaCYmIXRlLnRvdWNoJiZnLmlvcykmJihyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixlLm9uVG91Y2hTdGFydCwhMSksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsZS5vblRvdWNoTW92ZSxuKSxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsZS5vblRvdWNoRW5kLCExKSl9ZWxzZSByLnJlbW92ZUV2ZW50TGlzdGVuZXIoYS5zdGFydCxlLm9uVG91Y2hTdGFydCwhMSksZi5yZW1vdmVFdmVudExpc3RlbmVyKGEubW92ZSxlLm9uVG91Y2hNb3ZlLG4pLGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLmVuZCxlLm9uVG91Y2hFbmQsITEpOyh0LnByZXZlbnRDbGlja3N8fHQucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSYmci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlLm9uQ2xpY2ssITApLGUub2ZmKGcuaW9zfHxnLmFuZHJvaWQ/XCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGVcIjpcInJlc2l6ZSBvYnNlcnZlclVwZGF0ZVwiLGIpfX0sYnJlYWtwb2ludHM6e3NldEJyZWFrcG9pbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5hY3RpdmVJbmRleCxhPWUuaW5pdGlhbGl6ZWQsaT1lLmxvb3BlZFNsaWRlczt2b2lkIDA9PT1pJiYoaT0wKTt2YXIgcz1lLnBhcmFtcyxyPXMuYnJlYWtwb2ludHM7aWYociYmKCFyfHwwIT09T2JqZWN0LmtleXMocikubGVuZ3RoKSl7dmFyIG49ZS5nZXRCcmVha3BvaW50KHIpO2lmKG4mJmUuY3VycmVudEJyZWFrcG9pbnQhPT1uKXt2YXIgbz1uIGluIHI/cltuXTp2b2lkIDA7byYmW1wic2xpZGVzUGVyVmlld1wiLFwic3BhY2VCZXR3ZWVuXCIsXCJzbGlkZXNQZXJHcm91cFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PW9bZV07dm9pZCAwIT09dCYmKG9bZV09XCJzbGlkZXNQZXJWaWV3XCIhPT1lfHxcIkFVVE9cIiE9PXQmJlwiYXV0b1wiIT09dD9cInNsaWRlc1BlclZpZXdcIj09PWU/cGFyc2VGbG9hdCh0KTpwYXJzZUludCh0LDEwKTpcImF1dG9cIil9KTt2YXIgbD1vfHxlLm9yaWdpbmFsUGFyYW1zLGQ9bC5kaXJlY3Rpb24mJmwuZGlyZWN0aW9uIT09cy5kaXJlY3Rpb24scD1zLmxvb3AmJihsLnNsaWRlc1BlclZpZXchPT1zLnNsaWRlc1BlclZpZXd8fGQpO2QmJmEmJmUuY2hhbmdlRGlyZWN0aW9uKCksZWUuZXh0ZW5kKGUucGFyYW1zLGwpLGVlLmV4dGVuZChlLHthbGxvd1RvdWNoTW92ZTplLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxhbGxvd1NsaWRlTmV4dDplLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxhbGxvd1NsaWRlUHJldjplLnBhcmFtcy5hbGxvd1NsaWRlUHJldn0pLGUuY3VycmVudEJyZWFrcG9pbnQ9bixwJiZhJiYoZS5sb29wRGVzdHJveSgpLGUubG9vcENyZWF0ZSgpLGUudXBkYXRlU2xpZGVzKCksZS5zbGlkZVRvKHQtaStlLmxvb3BlZFNsaWRlcywwLCExKSksZS5lbWl0KFwiYnJlYWtwb2ludFwiLGwpfX19LGdldEJyZWFrcG9pbnQ6ZnVuY3Rpb24oZSl7aWYoZSl7dmFyIHQ9ITEsYT1bXTtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2EucHVzaChlKX0pLGEuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBwYXJzZUludChlLDEwKS1wYXJzZUludCh0LDEwKX0pO2Zvcih2YXIgaT0wO2k8YS5sZW5ndGg7aSs9MSl7dmFyIHM9YVtpXTt0aGlzLnBhcmFtcy5icmVha3BvaW50c0ludmVyc2U/czw9Si5pbm5lcldpZHRoJiYodD1zKTpzPj1KLmlubmVyV2lkdGgmJiF0JiYodD1zKX1yZXR1cm4gdHx8XCJtYXhcIn19fSxjaGVja092ZXJmbG93OntjaGVja092ZXJmbG93OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaXNMb2NrZWQ7ZS5pc0xvY2tlZD0xPT09ZS5zbmFwR3JpZC5sZW5ndGgsZS5hbGxvd1NsaWRlTmV4dD0hZS5pc0xvY2tlZCxlLmFsbG93U2xpZGVQcmV2PSFlLmlzTG9ja2VkLHQhPT1lLmlzTG9ja2VkJiZlLmVtaXQoZS5pc0xvY2tlZD9cImxvY2tcIjpcInVubG9ja1wiKSx0JiZ0IT09ZS5pc0xvY2tlZCYmKGUuaXNFbmQ9ITEsZS5uYXZpZ2F0aW9uLnVwZGF0ZSgpKX19LGNsYXNzZXM6e2FkZENsYXNzZXM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNsYXNzTmFtZXMsYT10aGlzLnBhcmFtcyxlPXRoaXMucnRsLGk9dGhpcy4kZWwscz1bXTtzLnB1c2goXCJpbml0aWFsaXplZFwiKSxzLnB1c2goYS5kaXJlY3Rpb24pLGEuZnJlZU1vZGUmJnMucHVzaChcImZyZWUtbW9kZVwiKSx0ZS5mbGV4Ym94fHxzLnB1c2goXCJuby1mbGV4Ym94XCIpLGEuYXV0b0hlaWdodCYmcy5wdXNoKFwiYXV0b2hlaWdodFwiKSxlJiZzLnB1c2goXCJydGxcIiksMTxhLnNsaWRlc1BlckNvbHVtbiYmcy5wdXNoKFwibXVsdGlyb3dcIiksZy5hbmRyb2lkJiZzLnB1c2goXCJhbmRyb2lkXCIpLGcuaW9zJiZzLnB1c2goXCJpb3NcIiksKEkuaXNJRXx8SS5pc0VkZ2UpJiYodGUucG9pbnRlckV2ZW50c3x8dGUucHJlZml4ZWRQb2ludGVyRXZlbnRzKSYmcy5wdXNoKFwid3A4LVwiK2EuZGlyZWN0aW9uKSxzLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKGEuY29udGFpbmVyTW9kaWZpZXJDbGFzcytlKX0pLGkuYWRkQ2xhc3ModC5qb2luKFwiIFwiKSl9LHJlbW92ZUNsYXNzZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRlbCx0PXRoaXMuY2xhc3NOYW1lcztlLnJlbW92ZUNsYXNzKHQuam9pbihcIiBcIikpfX0saW1hZ2VzOntsb2FkSW1hZ2U6ZnVuY3Rpb24oZSx0LGEsaSxzLHIpe3ZhciBuO2Z1bmN0aW9uIG8oKXtyJiZyKCl9ZS5jb21wbGV0ZSYmcz9vKCk6dD8oKG49bmV3IEouSW1hZ2UpLm9ubG9hZD1vLG4ub25lcnJvcj1vLGkmJihuLnNpemVzPWkpLGEmJihuLnNyY3NldD1hKSx0JiYobi5zcmM9dCkpOm8oKX0scHJlbG9hZEltYWdlczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZnVuY3Rpb24gdCgpe251bGwhPWUmJmUmJiFlLmRlc3Ryb3llZCYmKHZvaWQgMCE9PWUuaW1hZ2VzTG9hZGVkJiYoZS5pbWFnZXNMb2FkZWQrPTEpLGUuaW1hZ2VzTG9hZGVkPT09ZS5pbWFnZXNUb0xvYWQubGVuZ3RoJiYoZS5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSYmZS51cGRhdGUoKSxlLmVtaXQoXCJpbWFnZXNSZWFkeVwiKSkpfWUuaW1hZ2VzVG9Mb2FkPWUuJGVsLmZpbmQoXCJpbWdcIik7Zm9yKHZhciBhPTA7YTxlLmltYWdlc1RvTG9hZC5sZW5ndGg7YSs9MSl7dmFyIGk9ZS5pbWFnZXNUb0xvYWRbYV07ZS5sb2FkSW1hZ2UoaSxpLmN1cnJlbnRTcmN8fGkuZ2V0QXR0cmlidXRlKFwic3JjXCIpLGkuc3Jjc2V0fHxpLmdldEF0dHJpYnV0ZShcInNyY3NldFwiKSxpLnNpemVzfHxpLmdldEF0dHJpYnV0ZShcInNpemVzXCIpLCEwLHQpfX19fSx4PXt9LFQ9ZnVuY3Rpb24odSl7ZnVuY3Rpb24gaCgpe2Zvcih2YXIgZSx0LHMsYT1bXSxpPWFyZ3VtZW50cy5sZW5ndGg7aS0tOylhW2ldPWFyZ3VtZW50c1tpXTsxPT09YS5sZW5ndGgmJmFbMF0uY29uc3RydWN0b3ImJmFbMF0uY29uc3RydWN0b3I9PT1PYmplY3Q/cz1hWzBdOih0PShlPWEpWzBdLHM9ZVsxXSksc3x8KHM9e30pLHM9ZWUuZXh0ZW5kKHt9LHMpLHQmJiFzLmVsJiYocy5lbD10KSx1LmNhbGwodGhpcyxzKSxPYmplY3Qua2V5cyh5KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5rZXlzKHlbdF0pLmZvckVhY2goZnVuY3Rpb24oZSl7aC5wcm90b3R5cGVbZV18fChoLnByb3RvdHlwZVtlXT15W3RdW2VdKX0pfSk7dmFyIHI9dGhpczt2b2lkIDA9PT1yLm1vZHVsZXMmJihyLm1vZHVsZXM9e30pLE9iamVjdC5rZXlzKHIubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1yLm1vZHVsZXNbZV07aWYodC5wYXJhbXMpe3ZhciBhPU9iamVjdC5rZXlzKHQucGFyYW1zKVswXSxpPXQucGFyYW1zW2FdO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBpfHxudWxsPT09aSlyZXR1cm47aWYoIShhIGluIHMmJlwiZW5hYmxlZFwiaW4gaSkpcmV0dXJuOyEwPT09c1thXSYmKHNbYV09e2VuYWJsZWQ6ITB9KSxcIm9iamVjdFwiIT10eXBlb2Ygc1thXXx8XCJlbmFibGVkXCJpbiBzW2FdfHwoc1thXS5lbmFibGVkPSEwKSxzW2FdfHwoc1thXT17ZW5hYmxlZDohMX0pfX0pO3ZhciBuPWVlLmV4dGVuZCh7fSx3KTtyLnVzZU1vZHVsZXNQYXJhbXMobiksci5wYXJhbXM9ZWUuZXh0ZW5kKHt9LG4seCxzKSxyLm9yaWdpbmFsUGFyYW1zPWVlLmV4dGVuZCh7fSxyLnBhcmFtcyksci5wYXNzZWRQYXJhbXM9ZWUuZXh0ZW5kKHt9LHMpO3ZhciBvPShyLiQ9TCkoci5wYXJhbXMuZWwpO2lmKHQ9b1swXSl7aWYoMTxvLmxlbmd0aCl7dmFyIGw9W107cmV0dXJuIG8uZWFjaChmdW5jdGlvbihlLHQpe3ZhciBhPWVlLmV4dGVuZCh7fSxzLHtlbDp0fSk7bC5wdXNoKG5ldyBoKGEpKX0pLGx9dC5zd2lwZXI9cixvLmRhdGEoXCJzd2lwZXJcIixyKTt2YXIgZCxwLGM9by5jaGlsZHJlbihcIi5cIityLnBhcmFtcy53cmFwcGVyQ2xhc3MpO3JldHVybiBlZS5leHRlbmQocix7JGVsOm8sZWw6dCwkd3JhcHBlckVsOmMsd3JhcHBlckVsOmNbMF0sY2xhc3NOYW1lczpbXSxzbGlkZXM6TCgpLHNsaWRlc0dyaWQ6W10sc25hcEdyaWQ6W10sc2xpZGVzU2l6ZXNHcmlkOltdLGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3JldHVyblwiaG9yaXpvbnRhbFwiPT09ci5wYXJhbXMuZGlyZWN0aW9ufSxpc1ZlcnRpY2FsOmZ1bmN0aW9uKCl7cmV0dXJuXCJ2ZXJ0aWNhbFwiPT09ci5wYXJhbXMuZGlyZWN0aW9ufSxydGw6XCJydGxcIj09PXQuZGlyLnRvTG93ZXJDYXNlKCl8fFwicnRsXCI9PT1vLmNzcyhcImRpcmVjdGlvblwiKSxydGxUcmFuc2xhdGU6XCJob3Jpem9udGFsXCI9PT1yLnBhcmFtcy5kaXJlY3Rpb24mJihcInJ0bFwiPT09dC5kaXIudG9Mb3dlckNhc2UoKXx8XCJydGxcIj09PW8uY3NzKFwiZGlyZWN0aW9uXCIpKSx3cm9uZ1JUTDpcIi13ZWJraXQtYm94XCI9PT1jLmNzcyhcImRpc3BsYXlcIiksYWN0aXZlSW5kZXg6MCxyZWFsSW5kZXg6MCxpc0JlZ2lubmluZzohMCxpc0VuZDohMSx0cmFuc2xhdGU6MCxwcmV2aW91c1RyYW5zbGF0ZTowLHByb2dyZXNzOjAsdmVsb2NpdHk6MCxhbmltYXRpbmc6ITEsYWxsb3dTbGlkZU5leHQ6ci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsYWxsb3dTbGlkZVByZXY6ci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsdG91Y2hFdmVudHM6KGQ9W1widG91Y2hzdGFydFwiLFwidG91Y2htb3ZlXCIsXCJ0b3VjaGVuZFwiXSxwPVtcIm1vdXNlZG93blwiLFwibW91c2Vtb3ZlXCIsXCJtb3VzZXVwXCJdLHRlLnBvaW50ZXJFdmVudHM/cD1bXCJwb2ludGVyZG93blwiLFwicG9pbnRlcm1vdmVcIixcInBvaW50ZXJ1cFwiXTp0ZS5wcmVmaXhlZFBvaW50ZXJFdmVudHMmJihwPVtcIk1TUG9pbnRlckRvd25cIixcIk1TUG9pbnRlck1vdmVcIixcIk1TUG9pbnRlclVwXCJdKSxyLnRvdWNoRXZlbnRzVG91Y2g9e3N0YXJ0OmRbMF0sbW92ZTpkWzFdLGVuZDpkWzJdfSxyLnRvdWNoRXZlbnRzRGVza3RvcD17c3RhcnQ6cFswXSxtb3ZlOnBbMV0sZW5kOnBbMl19LHRlLnRvdWNofHwhci5wYXJhbXMuc2ltdWxhdGVUb3VjaD9yLnRvdWNoRXZlbnRzVG91Y2g6ci50b3VjaEV2ZW50c0Rlc2t0b3ApLHRvdWNoRXZlbnRzRGF0YTp7aXNUb3VjaGVkOnZvaWQgMCxpc01vdmVkOnZvaWQgMCxhbGxvd1RvdWNoQ2FsbGJhY2tzOnZvaWQgMCx0b3VjaFN0YXJ0VGltZTp2b2lkIDAsaXNTY3JvbGxpbmc6dm9pZCAwLGN1cnJlbnRUcmFuc2xhdGU6dm9pZCAwLHN0YXJ0VHJhbnNsYXRlOnZvaWQgMCxhbGxvd1RocmVzaG9sZE1vdmU6dm9pZCAwLGZvcm1FbGVtZW50czpcImlucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW9cIixsYXN0Q2xpY2tUaW1lOmVlLm5vdygpLGNsaWNrVGltZW91dDp2b2lkIDAsdmVsb2NpdGllczpbXSxhbGxvd01vbWVudHVtQm91bmNlOnZvaWQgMCxpc1RvdWNoRXZlbnQ6dm9pZCAwLHN0YXJ0TW92aW5nOnZvaWQgMH0sYWxsb3dDbGljazohMCxhbGxvd1RvdWNoTW92ZTpyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSx0b3VjaGVzOntzdGFydFg6MCxzdGFydFk6MCxjdXJyZW50WDowLGN1cnJlbnRZOjAsZGlmZjowfSxpbWFnZXNUb0xvYWQ6W10saW1hZ2VzTG9hZGVkOjB9KSxyLnVzZU1vZHVsZXMoKSxyLnBhcmFtcy5pbml0JiZyLmluaXQoKSxyfX11JiYoaC5fX3Byb3RvX189dSk7dmFyIGU9e2V4dGVuZGVkRGVmYXVsdHM6e2NvbmZpZ3VyYWJsZTohMH0sZGVmYXVsdHM6e2NvbmZpZ3VyYWJsZTohMH0sQ2xhc3M6e2NvbmZpZ3VyYWJsZTohMH0sJDp7Y29uZmlndXJhYmxlOiEwfX07cmV0dXJuKChoLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHUmJnUucHJvdG90eXBlKSkuY29uc3RydWN0b3I9aCkucHJvdG90eXBlLnNsaWRlc1BlclZpZXdEeW5hbWljPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUucGFyYW1zLGE9ZS5zbGlkZXMsaT1lLnNsaWRlc0dyaWQscz1lLnNpemUscj1lLmFjdGl2ZUluZGV4LG49MTtpZih0LmNlbnRlcmVkU2xpZGVzKXtmb3IodmFyIG8sbD1hW3JdLnN3aXBlclNsaWRlU2l6ZSxkPXIrMTtkPGEubGVuZ3RoO2QrPTEpYVtkXSYmIW8mJihuKz0xLHM8KGwrPWFbZF0uc3dpcGVyU2xpZGVTaXplKSYmKG89ITApKTtmb3IodmFyIHA9ci0xOzA8PXA7cC09MSlhW3BdJiYhbyYmKG4rPTEsczwobCs9YVtwXS5zd2lwZXJTbGlkZVNpemUpJiYobz0hMCkpfWVsc2UgZm9yKHZhciBjPXIrMTtjPGEubGVuZ3RoO2MrPTEpaVtjXS1pW3JdPHMmJihuKz0xKTtyZXR1cm4gbn0saC5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZihhJiYhYS5kZXN0cm95ZWQpe3ZhciBlPWEuc25hcEdyaWQsdD1hLnBhcmFtczt0LmJyZWFrcG9pbnRzJiZhLnNldEJyZWFrcG9pbnQoKSxhLnVwZGF0ZVNpemUoKSxhLnVwZGF0ZVNsaWRlcygpLGEudXBkYXRlUHJvZ3Jlc3MoKSxhLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSxhLnBhcmFtcy5mcmVlTW9kZT8oaSgpLGEucGFyYW1zLmF1dG9IZWlnaHQmJmEudXBkYXRlQXV0b0hlaWdodCgpKTooKFwiYXV0b1wiPT09YS5wYXJhbXMuc2xpZGVzUGVyVmlld3x8MTxhLnBhcmFtcy5zbGlkZXNQZXJWaWV3KSYmYS5pc0VuZCYmIWEucGFyYW1zLmNlbnRlcmVkU2xpZGVzP2Euc2xpZGVUbyhhLnNsaWRlcy5sZW5ndGgtMSwwLCExLCEwKTphLnNsaWRlVG8oYS5hY3RpdmVJbmRleCwwLCExLCEwKSl8fGkoKSx0LndhdGNoT3ZlcmZsb3cmJmUhPT1hLnNuYXBHcmlkJiZhLmNoZWNrT3ZlcmZsb3coKSxhLmVtaXQoXCJ1cGRhdGVcIil9ZnVuY3Rpb24gaSgpe3ZhciBlPWEucnRsVHJhbnNsYXRlPy0xKmEudHJhbnNsYXRlOmEudHJhbnNsYXRlLHQ9TWF0aC5taW4oTWF0aC5tYXgoZSxhLm1heFRyYW5zbGF0ZSgpKSxhLm1pblRyYW5zbGF0ZSgpKTthLnNldFRyYW5zbGF0ZSh0KSxhLnVwZGF0ZUFjdGl2ZUluZGV4KCksYS51cGRhdGVTbGlkZXNDbGFzc2VzKCl9fSxoLnByb3RvdHlwZS5jaGFuZ2VEaXJlY3Rpb249ZnVuY3Rpb24oYSxlKXt2b2lkIDA9PT1lJiYoZT0hMCk7dmFyIHQ9dGhpcyxpPXQucGFyYW1zLmRpcmVjdGlvbjtyZXR1cm4gYXx8KGE9XCJob3Jpem9udGFsXCI9PT1pP1widmVydGljYWxcIjpcImhvcml6b250YWxcIiksYT09PWl8fFwiaG9yaXpvbnRhbFwiIT09YSYmXCJ2ZXJ0aWNhbFwiIT09YXx8KFwidmVydGljYWxcIj09PWkmJih0LiRlbC5yZW1vdmVDbGFzcyh0LnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1widmVydGljYWwgd3A4LXZlcnRpY2FsXCIpLmFkZENsYXNzKFwiXCIrdC5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcythKSwoSS5pc0lFfHxJLmlzRWRnZSkmJih0ZS5wb2ludGVyRXZlbnRzfHx0ZS5wcmVmaXhlZFBvaW50ZXJFdmVudHMpJiZ0LiRlbC5hZGRDbGFzcyh0LnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wid3A4LVwiK2EpKSxcImhvcml6b250YWxcIj09PWkmJih0LiRlbC5yZW1vdmVDbGFzcyh0LnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiaG9yaXpvbnRhbCB3cDgtaG9yaXpvbnRhbFwiKS5hZGRDbGFzcyhcIlwiK3QucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrYSksKEkuaXNJRXx8SS5pc0VkZ2UpJiYodGUucG9pbnRlckV2ZW50c3x8dGUucHJlZml4ZWRQb2ludGVyRXZlbnRzKSYmdC4kZWwuYWRkQ2xhc3ModC5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIndwOC1cIithKSksdC5wYXJhbXMuZGlyZWN0aW9uPWEsdC5zbGlkZXMuZWFjaChmdW5jdGlvbihlLHQpe1widmVydGljYWxcIj09PWE/dC5zdHlsZS53aWR0aD1cIlwiOnQuc3R5bGUuaGVpZ2h0PVwiXCJ9KSx0LmVtaXQoXCJjaGFuZ2VEaXJlY3Rpb25cIiksZSYmdC51cGRhdGUoKSksdH0saC5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5pbml0aWFsaXplZHx8KGUuZW1pdChcImJlZm9yZUluaXRcIiksZS5wYXJhbXMuYnJlYWtwb2ludHMmJmUuc2V0QnJlYWtwb2ludCgpLGUuYWRkQ2xhc3NlcygpLGUucGFyYW1zLmxvb3AmJmUubG9vcENyZWF0ZSgpLGUudXBkYXRlU2l6ZSgpLGUudXBkYXRlU2xpZGVzKCksZS5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmZS5jaGVja092ZXJmbG93KCksZS5wYXJhbXMuZ3JhYkN1cnNvciYmZS5zZXRHcmFiQ3Vyc29yKCksZS5wYXJhbXMucHJlbG9hZEltYWdlcyYmZS5wcmVsb2FkSW1hZ2VzKCksZS5wYXJhbXMubG9vcD9lLnNsaWRlVG8oZS5wYXJhbXMuaW5pdGlhbFNsaWRlK2UubG9vcGVkU2xpZGVzLDAsZS5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTplLnNsaWRlVG8oZS5wYXJhbXMuaW5pdGlhbFNsaWRlLDAsZS5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSxlLmF0dGFjaEV2ZW50cygpLGUuaW5pdGlhbGl6ZWQ9ITAsZS5lbWl0KFwiaW5pdFwiKSl9LGgucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0hMCksdm9pZCAwPT09dCYmKHQ9ITApO3ZhciBhPXRoaXMsaT1hLnBhcmFtcyxzPWEuJGVsLHI9YS4kd3JhcHBlckVsLG49YS5zbGlkZXM7cmV0dXJuIHZvaWQgMD09PWEucGFyYW1zfHxhLmRlc3Ryb3llZHx8KGEuZW1pdChcImJlZm9yZURlc3Ryb3lcIiksYS5pbml0aWFsaXplZD0hMSxhLmRldGFjaEV2ZW50cygpLGkubG9vcCYmYS5sb29wRGVzdHJveSgpLHQmJihhLnJlbW92ZUNsYXNzZXMoKSxzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxyLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxuJiZuLmxlbmd0aCYmbi5yZW1vdmVDbGFzcyhbaS5zbGlkZVZpc2libGVDbGFzcyxpLnNsaWRlQWN0aXZlQ2xhc3MsaS5zbGlkZU5leHRDbGFzcyxpLnNsaWRlUHJldkNsYXNzXS5qb2luKFwiIFwiKSkucmVtb3ZlQXR0cihcInN0eWxlXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zd2lwZXItY29sdW1uXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXN3aXBlci1yb3dcIikpLGEuZW1pdChcImRlc3Ryb3lcIiksT2JqZWN0LmtleXMoYS5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goZnVuY3Rpb24oZSl7YS5vZmYoZSl9KSwhMSE9PWUmJihhLiRlbFswXS5zd2lwZXI9bnVsbCxhLiRlbC5kYXRhKFwic3dpcGVyXCIsbnVsbCksZWUuZGVsZXRlUHJvcHMoYSkpLGEuZGVzdHJveWVkPSEwKSxudWxsfSxoLmV4dGVuZERlZmF1bHRzPWZ1bmN0aW9uKGUpe2VlLmV4dGVuZCh4LGUpfSxlLmV4dGVuZGVkRGVmYXVsdHMuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHh9LGUuZGVmYXVsdHMuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHd9LGUuQ2xhc3MuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHV9LGUuJC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTH0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaCxlKSxofShuKSxFPXtuYW1lOlwiZGV2aWNlXCIscHJvdG86e2RldmljZTpnfSxzdGF0aWM6e2RldmljZTpnfX0sUz17bmFtZTpcInN1cHBvcnRcIixwcm90bzp7c3VwcG9ydDp0ZX0sc3RhdGljOntzdXBwb3J0OnRlfX0sQz17bmFtZTpcImJyb3dzZXJcIixwcm90bzp7YnJvd3NlcjpJfSxzdGF0aWM6e2Jyb3dzZXI6SX19LE09e25hbWU6XCJyZXNpemVcIixjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2VlLmV4dGVuZChlLHtyZXNpemU6e3Jlc2l6ZUhhbmRsZXI6ZnVuY3Rpb24oKXtlJiYhZS5kZXN0cm95ZWQmJmUuaW5pdGlhbGl6ZWQmJihlLmVtaXQoXCJiZWZvcmVSZXNpemVcIiksZS5lbWl0KFwicmVzaXplXCIpKX0sb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyOmZ1bmN0aW9uKCl7ZSYmIWUuZGVzdHJveWVkJiZlLmluaXRpYWxpemVkJiZlLmVtaXQoXCJvcmllbnRhdGlvbmNoYW5nZVwiKX19fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7Si5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemUucmVzaXplSGFuZGxlciksSi5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7Si5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemUucmVzaXplSGFuZGxlciksSi5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpfX19LHo9e2Z1bmM6Si5NdXRhdGlvbk9ic2VydmVyfHxKLldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIsYXR0YWNoOmZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9e30pO3ZhciBhPXRoaXMsaT1uZXcgei5mdW5jKGZ1bmN0aW9uKGUpe2lmKDEhPT1lLmxlbmd0aCl7dmFyIHQ9ZnVuY3Rpb24oKXthLmVtaXQoXCJvYnNlcnZlclVwZGF0ZVwiLGVbMF0pfTtKLnJlcXVlc3RBbmltYXRpb25GcmFtZT9KLnJlcXVlc3RBbmltYXRpb25GcmFtZSh0KTpKLnNldFRpbWVvdXQodCwwKX1lbHNlIGEuZW1pdChcIm9ic2VydmVyVXBkYXRlXCIsZVswXSl9KTtpLm9ic2VydmUoZSx7YXR0cmlidXRlczp2b2lkIDA9PT10LmF0dHJpYnV0ZXN8fHQuYXR0cmlidXRlcyxjaGlsZExpc3Q6dm9pZCAwPT09dC5jaGlsZExpc3R8fHQuY2hpbGRMaXN0LGNoYXJhY3RlckRhdGE6dm9pZCAwPT09dC5jaGFyYWN0ZXJEYXRhfHx0LmNoYXJhY3RlckRhdGF9KSxhLm9ic2VydmVyLm9ic2VydmVycy5wdXNoKGkpfSxpbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0ZS5vYnNlcnZlciYmZS5wYXJhbXMub2JzZXJ2ZXIpe2lmKGUucGFyYW1zLm9ic2VydmVQYXJlbnRzKWZvcih2YXIgdD1lLiRlbC5wYXJlbnRzKCksYT0wO2E8dC5sZW5ndGg7YSs9MSllLm9ic2VydmVyLmF0dGFjaCh0W2FdKTtlLm9ic2VydmVyLmF0dGFjaChlLiRlbFswXSx7Y2hpbGRMaXN0OmUucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVufSksZS5vYnNlcnZlci5hdHRhY2goZS4kd3JhcHBlckVsWzBdLHthdHRyaWJ1dGVzOiExfSl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5vYnNlcnZlci5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbihlKXtlLmRpc2Nvbm5lY3QoKX0pLHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZXJzPVtdfX0sUD17bmFtZTpcIm9ic2VydmVyXCIscGFyYW1zOntvYnNlcnZlcjohMSxvYnNlcnZlUGFyZW50czohMSxvYnNlcnZlU2xpZGVDaGlsZHJlbjohMX0sY3JlYXRlOmZ1bmN0aW9uKCl7ZWUuZXh0ZW5kKHRoaXMse29ic2VydmVyOntpbml0OnouaW5pdC5iaW5kKHRoaXMpLGF0dGFjaDp6LmF0dGFjaC5iaW5kKHRoaXMpLGRlc3Ryb3k6ei5kZXN0cm95LmJpbmQodGhpcyksb2JzZXJ2ZXJzOltdfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMub2JzZXJ2ZXIuaW5pdCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5vYnNlcnZlci5kZXN0cm95KCl9fX0saz17dXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsYT10LnBhcmFtcyxpPWEuc2xpZGVzUGVyVmlldyxzPWEuc2xpZGVzUGVyR3JvdXAscj1hLmNlbnRlcmVkU2xpZGVzLG49dC5wYXJhbXMudmlydHVhbCxvPW4uYWRkU2xpZGVzQmVmb3JlLGw9bi5hZGRTbGlkZXNBZnRlcixkPXQudmlydHVhbCxwPWQuZnJvbSxjPWQudG8sdT1kLnNsaWRlcyxoPWQuc2xpZGVzR3JpZCx2PWQucmVuZGVyU2xpZGUsZj1kLm9mZnNldDt0LnVwZGF0ZUFjdGl2ZUluZGV4KCk7dmFyIG0sZyxiLHc9dC5hY3RpdmVJbmRleHx8MDttPXQucnRsVHJhbnNsYXRlP1wicmlnaHRcIjp0LmlzSG9yaXpvbnRhbCgpP1wibGVmdFwiOlwidG9wXCIscj8oZz1NYXRoLmZsb29yKGkvMikrcytvLGI9TWF0aC5mbG9vcihpLzIpK3MrbCk6KGc9aSsocy0xKStvLGI9cytsKTt2YXIgeT1NYXRoLm1heCgod3x8MCktYiwwKSx4PU1hdGgubWluKCh3fHwwKStnLHUubGVuZ3RoLTEpLFQ9KHQuc2xpZGVzR3JpZFt5XXx8MCktKHQuc2xpZGVzR3JpZFswXXx8MCk7ZnVuY3Rpb24gRSgpe3QudXBkYXRlU2xpZGVzKCksdC51cGRhdGVQcm9ncmVzcygpLHQudXBkYXRlU2xpZGVzQ2xhc3NlcygpLHQubGF6eSYmdC5wYXJhbXMubGF6eS5lbmFibGVkJiZ0LmxhenkubG9hZCgpfWlmKGVlLmV4dGVuZCh0LnZpcnR1YWwse2Zyb206eSx0bzp4LG9mZnNldDpULHNsaWRlc0dyaWQ6dC5zbGlkZXNHcmlkfSkscD09PXkmJmM9PT14JiYhZSlyZXR1cm4gdC5zbGlkZXNHcmlkIT09aCYmVCE9PWYmJnQuc2xpZGVzLmNzcyhtLFQrXCJweFwiKSx2b2lkIHQudXBkYXRlUHJvZ3Jlc3MoKTtpZih0LnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsKXJldHVybiB0LnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwodCx7b2Zmc2V0OlQsZnJvbTp5LHRvOngsc2xpZGVzOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9eTt0PD14O3QrPTEpZS5wdXNoKHVbdF0pO3JldHVybiBlfSgpfSksdm9pZCBFKCk7dmFyIFM9W10sQz1bXTtpZihlKXQuJHdyYXBwZXJFbC5maW5kKFwiLlwiK3QucGFyYW1zLnNsaWRlQ2xhc3MpLnJlbW92ZSgpO2Vsc2UgZm9yKHZhciBNPXA7TTw9YztNKz0xKShNPHl8fHg8TSkmJnQuJHdyYXBwZXJFbC5maW5kKFwiLlwiK3QucGFyYW1zLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrTSsnXCJdJykucmVtb3ZlKCk7Zm9yKHZhciB6PTA7ejx1Lmxlbmd0aDt6Kz0xKXk8PXomJno8PXgmJih2b2lkIDA9PT1jfHxlP0MucHVzaCh6KTooYzx6JiZDLnB1c2goeiksejxwJiZTLnB1c2goeikpKTtDLmZvckVhY2goZnVuY3Rpb24oZSl7dC4kd3JhcHBlckVsLmFwcGVuZCh2KHVbZV0sZSkpfSksUy5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQtZX0pLmZvckVhY2goZnVuY3Rpb24oZSl7dC4kd3JhcHBlckVsLnByZXBlbmQodih1W2VdLGUpKX0pLHQuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5zd2lwZXItc2xpZGVcIikuY3NzKG0sVCtcInB4XCIpLEUoKX0scmVuZGVyU2xpZGU6ZnVuY3Rpb24oZSx0KXt2YXIgYT10aGlzLGk9YS5wYXJhbXMudmlydHVhbDtpZihpLmNhY2hlJiZhLnZpcnR1YWwuY2FjaGVbdF0pcmV0dXJuIGEudmlydHVhbC5jYWNoZVt0XTt2YXIgcz1pLnJlbmRlclNsaWRlP0woaS5yZW5kZXJTbGlkZS5jYWxsKGEsZSx0KSk6TCgnPGRpdiBjbGFzcz1cIicrYS5wYXJhbXMuc2xpZGVDbGFzcysnXCIgZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3QrJ1wiPicrZStcIjwvZGl2PlwiKTtyZXR1cm4gcy5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIil8fHMuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIsdCksaS5jYWNoZSYmKGEudmlydHVhbC5jYWNoZVt0XT1zKSxzfSxhcHBlbmRTbGlkZTpmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJsZW5ndGhcImluIGUpZm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKWVbdF0mJnRoaXMudmlydHVhbC5zbGlkZXMucHVzaChlW3RdKTtlbHNlIHRoaXMudmlydHVhbC5zbGlkZXMucHVzaChlKTt0aGlzLnZpcnR1YWwudXBkYXRlKCEwKX0scHJlcGVuZFNsaWRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsYT10LmFjdGl2ZUluZGV4LGk9YSsxLHM9MTtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrPTEpZVtyXSYmdC52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KGVbcl0pO2k9YStlLmxlbmd0aCxzPWUubGVuZ3RofWVsc2UgdC52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KGUpO2lmKHQucGFyYW1zLnZpcnR1YWwuY2FjaGUpe3ZhciBuPXQudmlydHVhbC5jYWNoZSxvPXt9O09iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24oZSl7b1twYXJzZUludChlLDEwKStzXT1uW2VdfSksdC52aXJ0dWFsLmNhY2hlPW99dC52aXJ0dWFsLnVwZGF0ZSghMCksdC5zbGlkZVRvKGksMCl9LHJlbW92ZVNsaWRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYobnVsbCE9ZSl7dmFyIGE9dC5hY3RpdmVJbmRleDtpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgaT1lLmxlbmd0aC0xOzA8PWk7aS09MSl0LnZpcnR1YWwuc2xpZGVzLnNwbGljZShlW2ldLDEpLHQucGFyYW1zLnZpcnR1YWwuY2FjaGUmJmRlbGV0ZSB0LnZpcnR1YWwuY2FjaGVbZVtpXV0sZVtpXTxhJiYoYS09MSksYT1NYXRoLm1heChhLDApO2Vsc2UgdC52aXJ0dWFsLnNsaWRlcy5zcGxpY2UoZSwxKSx0LnBhcmFtcy52aXJ0dWFsLmNhY2hlJiZkZWxldGUgdC52aXJ0dWFsLmNhY2hlW2VdLGU8YSYmKGEtPTEpLGE9TWF0aC5tYXgoYSwwKTt0LnZpcnR1YWwudXBkYXRlKCEwKSx0LnNsaWRlVG8oYSwwKX19LHJlbW92ZUFsbFNsaWRlczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS52aXJ0dWFsLnNsaWRlcz1bXSxlLnBhcmFtcy52aXJ0dWFsLmNhY2hlJiYoZS52aXJ0dWFsLmNhY2hlPXt9KSxlLnZpcnR1YWwudXBkYXRlKCEwKSxlLnNsaWRlVG8oMCwwKX19LCQ9e25hbWU6XCJ2aXJ0dWFsXCIscGFyYW1zOnt2aXJ0dWFsOntlbmFibGVkOiExLHNsaWRlczpbXSxjYWNoZTohMCxyZW5kZXJTbGlkZTpudWxsLHJlbmRlckV4dGVybmFsOm51bGwsYWRkU2xpZGVzQmVmb3JlOjAsYWRkU2xpZGVzQWZ0ZXI6MH19LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZWUuZXh0ZW5kKGUse3ZpcnR1YWw6e3VwZGF0ZTprLnVwZGF0ZS5iaW5kKGUpLGFwcGVuZFNsaWRlOmsuYXBwZW5kU2xpZGUuYmluZChlKSxwcmVwZW5kU2xpZGU6ay5wcmVwZW5kU2xpZGUuYmluZChlKSxyZW1vdmVTbGlkZTprLnJlbW92ZVNsaWRlLmJpbmQoZSkscmVtb3ZlQWxsU2xpZGVzOmsucmVtb3ZlQWxsU2xpZGVzLmJpbmQoZSkscmVuZGVyU2xpZGU6ay5yZW5kZXJTbGlkZS5iaW5kKGUpLHNsaWRlczplLnBhcmFtcy52aXJ0dWFsLnNsaWRlcyxjYWNoZTp7fX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGUucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCl7ZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcInZpcnR1YWxcIik7dmFyIHQ9e3dhdGNoU2xpZGVzUHJvZ3Jlc3M6ITB9O2VlLmV4dGVuZChlLnBhcmFtcyx0KSxlZS5leHRlbmQoZS5vcmlnaW5hbFBhcmFtcyx0KSxlLnBhcmFtcy5pbml0aWFsU2xpZGV8fGUudmlydHVhbC51cGRhdGUoKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCYmdGhpcy52aXJ0dWFsLnVwZGF0ZSgpfX19LEQ9e2hhbmRsZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dC5ydGxUcmFuc2xhdGUsaT1lO2kub3JpZ2luYWxFdmVudCYmKGk9aS5vcmlnaW5hbEV2ZW50KTt2YXIgcz1pLmtleUNvZGV8fGkuY2hhckNvZGU7aWYoIXQuYWxsb3dTbGlkZU5leHQmJih0LmlzSG9yaXpvbnRhbCgpJiYzOT09PXN8fHQuaXNWZXJ0aWNhbCgpJiY0MD09PXMpKXJldHVybiExO2lmKCF0LmFsbG93U2xpZGVQcmV2JiYodC5pc0hvcml6b250YWwoKSYmMzc9PT1zfHx0LmlzVmVydGljYWwoKSYmMzg9PT1zKSlyZXR1cm4hMTtpZighKGkuc2hpZnRLZXl8fGkuYWx0S2V5fHxpLmN0cmxLZXl8fGkubWV0YUtleXx8Zi5hY3RpdmVFbGVtZW50JiZmLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUmJihcImlucHV0XCI9PT1mLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKXx8XCJ0ZXh0YXJlYVwiPT09Zi5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSl7aWYodC5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQmJigzNz09PXN8fDM5PT09c3x8Mzg9PT1zfHw0MD09PXMpKXt2YXIgcj0hMTtpZigwPHQuJGVsLnBhcmVudHMoXCIuXCIrdC5wYXJhbXMuc2xpZGVDbGFzcykubGVuZ3RoJiYwPT09dC4kZWwucGFyZW50cyhcIi5cIit0LnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKS5sZW5ndGgpcmV0dXJuO3ZhciBuPUouaW5uZXJXaWR0aCxvPUouaW5uZXJIZWlnaHQsbD10LiRlbC5vZmZzZXQoKTthJiYobC5sZWZ0LT10LiRlbFswXS5zY3JvbGxMZWZ0KTtmb3IodmFyIGQ9W1tsLmxlZnQsbC50b3BdLFtsLmxlZnQrdC53aWR0aCxsLnRvcF0sW2wubGVmdCxsLnRvcCt0LmhlaWdodF0sW2wubGVmdCt0LndpZHRoLGwudG9wK3QuaGVpZ2h0XV0scD0wO3A8ZC5sZW5ndGg7cCs9MSl7dmFyIGM9ZFtwXTswPD1jWzBdJiZjWzBdPD1uJiYwPD1jWzFdJiZjWzFdPD1vJiYocj0hMCl9aWYoIXIpcmV0dXJufXQuaXNIb3Jpem9udGFsKCk/KDM3IT09cyYmMzkhPT1zfHwoaS5wcmV2ZW50RGVmYXVsdD9pLnByZXZlbnREZWZhdWx0KCk6aS5yZXR1cm5WYWx1ZT0hMSksKDM5PT09cyYmIWF8fDM3PT09cyYmYSkmJnQuc2xpZGVOZXh0KCksKDM3PT09cyYmIWF8fDM5PT09cyYmYSkmJnQuc2xpZGVQcmV2KCkpOigzOCE9PXMmJjQwIT09c3x8KGkucHJldmVudERlZmF1bHQ/aS5wcmV2ZW50RGVmYXVsdCgpOmkucmV0dXJuVmFsdWU9ITEpLDQwPT09cyYmdC5zbGlkZU5leHQoKSwzOD09PXMmJnQuc2xpZGVQcmV2KCkpLHQuZW1pdChcImtleVByZXNzXCIscyl9fSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmtleWJvYXJkLmVuYWJsZWR8fChMKGYpLm9uKFwia2V5ZG93blwiLHRoaXMua2V5Ym9hcmQuaGFuZGxlKSx0aGlzLmtleWJvYXJkLmVuYWJsZWQ9ITApfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5rZXlib2FyZC5lbmFibGVkJiYoTChmKS5vZmYoXCJrZXlkb3duXCIsdGhpcy5rZXlib2FyZC5oYW5kbGUpLHRoaXMua2V5Ym9hcmQuZW5hYmxlZD0hMSl9fSxPPXtuYW1lOlwia2V5Ym9hcmRcIixwYXJhbXM6e2tleWJvYXJkOntlbmFibGVkOiExLG9ubHlJblZpZXdwb3J0OiEwfX0sY3JlYXRlOmZ1bmN0aW9uKCl7ZWUuZXh0ZW5kKHRoaXMse2tleWJvYXJkOntlbmFibGVkOiExLGVuYWJsZTpELmVuYWJsZS5iaW5kKHRoaXMpLGRpc2FibGU6RC5kaXNhYmxlLmJpbmQodGhpcyksaGFuZGxlOkQuaGFuZGxlLmJpbmQodGhpcyl9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMua2V5Ym9hcmQuZW5hYmxlZCYmdGhpcy5rZXlib2FyZC5lbmFibGUoKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMua2V5Ym9hcmQuZW5hYmxlZCYmdGhpcy5rZXlib2FyZC5kaXNhYmxlKCl9fX07dmFyIEE9e2xhc3RTY3JvbGxUaW1lOmVlLm5vdygpLGV2ZW50Oi0xPEoubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiZmlyZWZveFwiKT9cIkRPTU1vdXNlU2Nyb2xsXCI6ZnVuY3Rpb24oKXt2YXIgZT1cIm9ud2hlZWxcIix0PWUgaW4gZjtpZighdCl7dmFyIGE9Zi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Euc2V0QXR0cmlidXRlKGUsXCJyZXR1cm47XCIpLHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgYVtlXX1yZXR1cm4hdCYmZi5pbXBsZW1lbnRhdGlvbiYmZi5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlJiYhMCE9PWYuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcIlwiLFwiXCIpJiYodD1mLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoXCJFdmVudHMud2hlZWxcIixcIjMuMFwiKSksdH0oKT9cIndoZWVsXCI6XCJtb3VzZXdoZWVsXCIsbm9ybWFsaXplOmZ1bmN0aW9uKGUpe3ZhciB0PTAsYT0wLGk9MCxzPTA7cmV0dXJuXCJkZXRhaWxcImluIGUmJihhPWUuZGV0YWlsKSxcIndoZWVsRGVsdGFcImluIGUmJihhPS1lLndoZWVsRGVsdGEvMTIwKSxcIndoZWVsRGVsdGFZXCJpbiBlJiYoYT0tZS53aGVlbERlbHRhWS8xMjApLFwid2hlZWxEZWx0YVhcImluIGUmJih0PS1lLndoZWVsRGVsdGFYLzEyMCksXCJheGlzXCJpbiBlJiZlLmF4aXM9PT1lLkhPUklaT05UQUxfQVhJUyYmKHQ9YSxhPTApLGk9MTAqdCxzPTEwKmEsXCJkZWx0YVlcImluIGUmJihzPWUuZGVsdGFZKSxcImRlbHRhWFwiaW4gZSYmKGk9ZS5kZWx0YVgpLChpfHxzKSYmZS5kZWx0YU1vZGUmJigxPT09ZS5kZWx0YU1vZGU/KGkqPTQwLHMqPTQwKTooaSo9ODAwLHMqPTgwMCkpLGkmJiF0JiYodD1pPDE/LTE6MSkscyYmIWEmJihhPXM8MT8tMToxKSx7c3Bpblg6dCxzcGluWTphLHBpeGVsWDppLHBpeGVsWTpzfX0saGFuZGxlTW91c2VFbnRlcjpmdW5jdGlvbigpe3RoaXMubW91c2VFbnRlcmVkPSEwfSxoYW5kbGVNb3VzZUxlYXZlOmZ1bmN0aW9uKCl7dGhpcy5tb3VzZUVudGVyZWQ9ITF9LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdD1lLGE9dGhpcyxpPWEucGFyYW1zLm1vdXNld2hlZWw7aWYoIWEubW91c2VFbnRlcmVkJiYhaS5yZWxlYXNlT25FZGdlcylyZXR1cm4hMDt0Lm9yaWdpbmFsRXZlbnQmJih0PXQub3JpZ2luYWxFdmVudCk7dmFyIHM9MCxyPWEucnRsVHJhbnNsYXRlPy0xOjEsbj1BLm5vcm1hbGl6ZSh0KTtpZihpLmZvcmNlVG9BeGlzKWlmKGEuaXNIb3Jpem9udGFsKCkpe2lmKCEoTWF0aC5hYnMobi5waXhlbFgpPk1hdGguYWJzKG4ucGl4ZWxZKSkpcmV0dXJuITA7cz1uLnBpeGVsWCpyfWVsc2V7aWYoIShNYXRoLmFicyhuLnBpeGVsWSk+TWF0aC5hYnMobi5waXhlbFgpKSlyZXR1cm4hMDtzPW4ucGl4ZWxZfWVsc2Ugcz1NYXRoLmFicyhuLnBpeGVsWCk+TWF0aC5hYnMobi5waXhlbFkpPy1uLnBpeGVsWCpyOi1uLnBpeGVsWTtpZigwPT09cylyZXR1cm4hMDtpZihpLmludmVydCYmKHM9LXMpLGEucGFyYW1zLmZyZWVNb2RlKXthLnBhcmFtcy5sb29wJiZhLmxvb3BGaXgoKTt2YXIgbz1hLmdldFRyYW5zbGF0ZSgpK3MqaS5zZW5zaXRpdml0eSxsPWEuaXNCZWdpbm5pbmcsZD1hLmlzRW5kO2lmKG8+PWEubWluVHJhbnNsYXRlKCkmJihvPWEubWluVHJhbnNsYXRlKCkpLG88PWEubWF4VHJhbnNsYXRlKCkmJihvPWEubWF4VHJhbnNsYXRlKCkpLGEuc2V0VHJhbnNpdGlvbigwKSxhLnNldFRyYW5zbGF0ZShvKSxhLnVwZGF0ZVByb2dyZXNzKCksYS51cGRhdGVBY3RpdmVJbmRleCgpLGEudXBkYXRlU2xpZGVzQ2xhc3NlcygpLCghbCYmYS5pc0JlZ2lubmluZ3x8IWQmJmEuaXNFbmQpJiZhLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSxhLnBhcmFtcy5mcmVlTW9kZVN0aWNreSYmKGNsZWFyVGltZW91dChhLm1vdXNld2hlZWwudGltZW91dCksYS5tb3VzZXdoZWVsLnRpbWVvdXQ9ZWUubmV4dFRpY2soZnVuY3Rpb24oKXthLnNsaWRlVG9DbG9zZXN0KCl9LDMwMCkpLGEuZW1pdChcInNjcm9sbFwiLHQpLGEucGFyYW1zLmF1dG9wbGF5JiZhLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uJiZhLmF1dG9wbGF5LnN0b3AoKSxvPT09YS5taW5UcmFuc2xhdGUoKXx8bz09PWEubWF4VHJhbnNsYXRlKCkpcmV0dXJuITB9ZWxzZXtpZig2MDxlZS5ub3coKS1hLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUpaWYoczwwKWlmKGEuaXNFbmQmJiFhLnBhcmFtcy5sb29wfHxhLmFuaW1hdGluZyl7aWYoaS5yZWxlYXNlT25FZGdlcylyZXR1cm4hMH1lbHNlIGEuc2xpZGVOZXh0KCksYS5lbWl0KFwic2Nyb2xsXCIsdCk7ZWxzZSBpZihhLmlzQmVnaW5uaW5nJiYhYS5wYXJhbXMubG9vcHx8YS5hbmltYXRpbmcpe2lmKGkucmVsZWFzZU9uRWRnZXMpcmV0dXJuITB9ZWxzZSBhLnNsaWRlUHJldigpLGEuZW1pdChcInNjcm9sbFwiLHQpO2EubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZT0obmV3IEouRGF0ZSkuZ2V0VGltZSgpfXJldHVybiB0LnByZXZlbnREZWZhdWx0P3QucHJldmVudERlZmF1bHQoKTp0LnJldHVyblZhbHVlPSExLCExfSxlbmFibGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCFBLmV2ZW50KXJldHVybiExO2lmKGUubW91c2V3aGVlbC5lbmFibGVkKXJldHVybiExO3ZhciB0PWUuJGVsO3JldHVyblwiY29udGFpbmVyXCIhPT1lLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCYmKHQ9TChlLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCkpLHQub24oXCJtb3VzZWVudGVyXCIsZS5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlRW50ZXIpLHQub24oXCJtb3VzZWxlYXZlXCIsZS5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlTGVhdmUpLHQub24oQS5ldmVudCxlLm1vdXNld2hlZWwuaGFuZGxlKSxlLm1vdXNld2hlZWwuZW5hYmxlZD0hMH0sZGlzYWJsZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoIUEuZXZlbnQpcmV0dXJuITE7aWYoIWUubW91c2V3aGVlbC5lbmFibGVkKXJldHVybiExO3ZhciB0PWUuJGVsO3JldHVyblwiY29udGFpbmVyXCIhPT1lLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCYmKHQ9TChlLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCkpLHQub2ZmKEEuZXZlbnQsZS5tb3VzZXdoZWVsLmhhbmRsZSksIShlLm1vdXNld2hlZWwuZW5hYmxlZD0hMSl9fSxIPXt1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5wYXJhbXMubmF2aWdhdGlvbjtpZighZS5wYXJhbXMubG9vcCl7dmFyIGE9ZS5uYXZpZ2F0aW9uLGk9YS4kbmV4dEVsLHM9YS4kcHJldkVsO3MmJjA8cy5sZW5ndGgmJihlLmlzQmVnaW5uaW5nP3MuYWRkQ2xhc3ModC5kaXNhYmxlZENsYXNzKTpzLnJlbW92ZUNsYXNzKHQuZGlzYWJsZWRDbGFzcyksc1tlLnBhcmFtcy53YXRjaE92ZXJmbG93JiZlLmlzTG9ja2VkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKHQubG9ja0NsYXNzKSksaSYmMDxpLmxlbmd0aCYmKGUuaXNFbmQ/aS5hZGRDbGFzcyh0LmRpc2FibGVkQ2xhc3MpOmkucmVtb3ZlQ2xhc3ModC5kaXNhYmxlZENsYXNzKSxpW2UucGFyYW1zLndhdGNoT3ZlcmZsb3cmJmUuaXNMb2NrZWQ/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0odC5sb2NrQ2xhc3MpKX19LG9uUHJldkNsaWNrOmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmlzQmVnaW5uaW5nJiYhdGhpcy5wYXJhbXMubG9vcHx8dGhpcy5zbGlkZVByZXYoKX0sb25OZXh0Q2xpY2s6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaXNFbmQmJiF0aGlzLnBhcmFtcy5sb29wfHx0aGlzLnNsaWRlTmV4dCgpfSxpbml0OmZ1bmN0aW9uKCl7dmFyIGUsdCxhPXRoaXMsaT1hLnBhcmFtcy5uYXZpZ2F0aW9uOyhpLm5leHRFbHx8aS5wcmV2RWwpJiYoaS5uZXh0RWwmJihlPUwoaS5uZXh0RWwpLGEucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgaS5uZXh0RWwmJjE8ZS5sZW5ndGgmJjE9PT1hLiRlbC5maW5kKGkubmV4dEVsKS5sZW5ndGgmJihlPWEuJGVsLmZpbmQoaS5uZXh0RWwpKSksaS5wcmV2RWwmJih0PUwoaS5wcmV2RWwpLGEucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgaS5wcmV2RWwmJjE8dC5sZW5ndGgmJjE9PT1hLiRlbC5maW5kKGkucHJldkVsKS5sZW5ndGgmJih0PWEuJGVsLmZpbmQoaS5wcmV2RWwpKSksZSYmMDxlLmxlbmd0aCYmZS5vbihcImNsaWNrXCIsYS5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKSx0JiYwPHQubGVuZ3RoJiZ0Lm9uKFwiY2xpY2tcIixhLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spLGVlLmV4dGVuZChhLm5hdmlnYXRpb24seyRuZXh0RWw6ZSxuZXh0RWw6ZSYmZVswXSwkcHJldkVsOnQscHJldkVsOnQmJnRbMF19KSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5uYXZpZ2F0aW9uLGE9dC4kbmV4dEVsLGk9dC4kcHJldkVsO2EmJmEubGVuZ3RoJiYoYS5vZmYoXCJjbGlja1wiLGUubmF2aWdhdGlvbi5vbk5leHRDbGljayksYS5yZW1vdmVDbGFzcyhlLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpKSxpJiZpLmxlbmd0aCYmKGkub2ZmKFwiY2xpY2tcIixlLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spLGkucmVtb3ZlQ2xhc3MoZS5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKSl9fSxOPXt1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5ydGwscz1lLnBhcmFtcy5wYWdpbmF0aW9uO2lmKHMuZWwmJmUucGFnaW5hdGlvbi5lbCYmZS5wYWdpbmF0aW9uLiRlbCYmMCE9PWUucGFnaW5hdGlvbi4kZWwubGVuZ3RoKXt2YXIgcixhPWUudmlydHVhbCYmZS5wYXJhbXMudmlydHVhbC5lbmFibGVkP2UudmlydHVhbC5zbGlkZXMubGVuZ3RoOmUuc2xpZGVzLmxlbmd0aCxpPWUucGFnaW5hdGlvbi4kZWwsbj1lLnBhcmFtcy5sb29wP01hdGguY2VpbCgoYS0yKmUubG9vcGVkU2xpZGVzKS9lLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk6ZS5zbmFwR3JpZC5sZW5ndGg7aWYoZS5wYXJhbXMubG9vcD8oKHI9TWF0aC5jZWlsKChlLmFjdGl2ZUluZGV4LWUubG9vcGVkU2xpZGVzKS9lLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkpPmEtMS0yKmUubG9vcGVkU2xpZGVzJiYoci09YS0yKmUubG9vcGVkU2xpZGVzKSxuLTE8ciYmKHItPW4pLHI8MCYmXCJidWxsZXRzXCIhPT1lLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSYmKHI9bityKSk6cj12b2lkIDAhPT1lLnNuYXBJbmRleD9lLnNuYXBJbmRleDplLmFjdGl2ZUluZGV4fHwwLFwiYnVsbGV0c1wiPT09cy50eXBlJiZlLnBhZ2luYXRpb24uYnVsbGV0cyYmMDxlLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGgpe3ZhciBvLGwsZCxwPWUucGFnaW5hdGlvbi5idWxsZXRzO2lmKHMuZHluYW1pY0J1bGxldHMmJihlLnBhZ2luYXRpb24uYnVsbGV0U2l6ZT1wLmVxKDApW2UuaXNIb3Jpem9udGFsKCk/XCJvdXRlcldpZHRoXCI6XCJvdXRlckhlaWdodFwiXSghMCksaS5jc3MoZS5pc0hvcml6b250YWwoKT9cIndpZHRoXCI6XCJoZWlnaHRcIixlLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSoocy5keW5hbWljTWFpbkJ1bGxldHMrNCkrXCJweFwiKSwxPHMuZHluYW1pY01haW5CdWxsZXRzJiZ2b2lkIDAhPT1lLnByZXZpb3VzSW5kZXgmJihlLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4Kz1yLWUucHJldmlvdXNJbmRleCxlLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4PnMuZHluYW1pY01haW5CdWxsZXRzLTE/ZS5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleD1zLmR5bmFtaWNNYWluQnVsbGV0cy0xOmUucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg8MCYmKGUucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg9MCkpLG89ci1lLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4LGQ9KChsPW8rKE1hdGgubWluKHAubGVuZ3RoLHMuZHluYW1pY01haW5CdWxsZXRzKS0xKSkrbykvMikscC5yZW1vdmVDbGFzcyhzLmJ1bGxldEFjdGl2ZUNsYXNzK1wiIFwiK3MuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbmV4dCBcIitzLmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQtbmV4dCBcIitzLmJ1bGxldEFjdGl2ZUNsYXNzK1wiLXByZXYgXCIrcy5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2LXByZXYgXCIrcy5idWxsZXRBY3RpdmVDbGFzcytcIi1tYWluXCIpLDE8aS5sZW5ndGgpcC5lYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGE9TCh0KSxpPWEuaW5kZXgoKTtpPT09ciYmYS5hZGRDbGFzcyhzLmJ1bGxldEFjdGl2ZUNsYXNzKSxzLmR5bmFtaWNCdWxsZXRzJiYobzw9aSYmaTw9bCYmYS5hZGRDbGFzcyhzLmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW1haW5cIiksaT09PW8mJmEucHJldigpLmFkZENsYXNzKHMuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3Mocy5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2LXByZXZcIiksaT09PWwmJmEubmV4dCgpLmFkZENsYXNzKHMuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3Mocy5idWxsZXRBY3RpdmVDbGFzcytcIi1uZXh0LW5leHRcIikpfSk7ZWxzZSBpZihwLmVxKHIpLmFkZENsYXNzKHMuYnVsbGV0QWN0aXZlQ2xhc3MpLHMuZHluYW1pY0J1bGxldHMpe2Zvcih2YXIgYz1wLmVxKG8pLHU9cC5lcShsKSxoPW87aDw9bDtoKz0xKXAuZXEoaCkuYWRkQ2xhc3Mocy5idWxsZXRBY3RpdmVDbGFzcytcIi1tYWluXCIpO2MucHJldigpLmFkZENsYXNzKHMuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3Mocy5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2LXByZXZcIiksdS5uZXh0KCkuYWRkQ2xhc3Mocy5idWxsZXRBY3RpdmVDbGFzcytcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyhzLmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQtbmV4dFwiKX1pZihzLmR5bmFtaWNCdWxsZXRzKXt2YXIgdj1NYXRoLm1pbihwLmxlbmd0aCxzLmR5bmFtaWNNYWluQnVsbGV0cys0KSxmPShlLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSp2LWUucGFnaW5hdGlvbi5idWxsZXRTaXplKS8yLWQqZS5wYWdpbmF0aW9uLmJ1bGxldFNpemUsbT10P1wicmlnaHRcIjpcImxlZnRcIjtwLmNzcyhlLmlzSG9yaXpvbnRhbCgpP206XCJ0b3BcIixmK1wicHhcIil9fWlmKFwiZnJhY3Rpb25cIj09PXMudHlwZSYmKGkuZmluZChcIi5cIitzLmN1cnJlbnRDbGFzcykudGV4dChzLmZvcm1hdEZyYWN0aW9uQ3VycmVudChyKzEpKSxpLmZpbmQoXCIuXCIrcy50b3RhbENsYXNzKS50ZXh0KHMuZm9ybWF0RnJhY3Rpb25Ub3RhbChuKSkpLFwicHJvZ3Jlc3NiYXJcIj09PXMudHlwZSl7dmFyIGc7Zz1zLnByb2dyZXNzYmFyT3Bwb3NpdGU/ZS5pc0hvcml6b250YWwoKT9cInZlcnRpY2FsXCI6XCJob3Jpem9udGFsXCI6ZS5pc0hvcml6b250YWwoKT9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCI7dmFyIGI9KHIrMSkvbix3PTEseT0xO1wiaG9yaXpvbnRhbFwiPT09Zz93PWI6eT1iLGkuZmluZChcIi5cIitzLnByb2dyZXNzYmFyRmlsbENsYXNzKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKFwiK3crXCIpIHNjYWxlWShcIit5K1wiKVwiKS50cmFuc2l0aW9uKGUucGFyYW1zLnNwZWVkKX1cImN1c3RvbVwiPT09cy50eXBlJiZzLnJlbmRlckN1c3RvbT8oaS5odG1sKHMucmVuZGVyQ3VzdG9tKGUscisxLG4pKSxlLmVtaXQoXCJwYWdpbmF0aW9uUmVuZGVyXCIsZSxpWzBdKSk6ZS5lbWl0KFwicGFnaW5hdGlvblVwZGF0ZVwiLGUsaVswXSksaVtlLnBhcmFtcy53YXRjaE92ZXJmbG93JiZlLmlzTG9ja2VkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKHMubG9ja0NsYXNzKX19LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcy5wYWdpbmF0aW9uO2lmKHQuZWwmJmUucGFnaW5hdGlvbi5lbCYmZS5wYWdpbmF0aW9uLiRlbCYmMCE9PWUucGFnaW5hdGlvbi4kZWwubGVuZ3RoKXt2YXIgYT1lLnZpcnR1YWwmJmUucGFyYW1zLnZpcnR1YWwuZW5hYmxlZD9lLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDplLnNsaWRlcy5sZW5ndGgsaT1lLnBhZ2luYXRpb24uJGVsLHM9XCJcIjtpZihcImJ1bGxldHNcIj09PXQudHlwZSl7Zm9yKHZhciByPWUucGFyYW1zLmxvb3A/TWF0aC5jZWlsKChhLTIqZS5sb29wZWRTbGlkZXMpL2UucGFyYW1zLnNsaWRlc1Blckdyb3VwKTplLnNuYXBHcmlkLmxlbmd0aCxuPTA7bjxyO24rPTEpdC5yZW5kZXJCdWxsZXQ/cys9dC5yZW5kZXJCdWxsZXQuY2FsbChlLG4sdC5idWxsZXRDbGFzcyk6cys9XCI8XCIrdC5idWxsZXRFbGVtZW50KycgY2xhc3M9XCInK3QuYnVsbGV0Q2xhc3MrJ1wiPjwvJyt0LmJ1bGxldEVsZW1lbnQrXCI+XCI7aS5odG1sKHMpLGUucGFnaW5hdGlvbi5idWxsZXRzPWkuZmluZChcIi5cIit0LmJ1bGxldENsYXNzKX1cImZyYWN0aW9uXCI9PT10LnR5cGUmJihzPXQucmVuZGVyRnJhY3Rpb24/dC5yZW5kZXJGcmFjdGlvbi5jYWxsKGUsdC5jdXJyZW50Q2xhc3MsdC50b3RhbENsYXNzKTonPHNwYW4gY2xhc3M9XCInK3QuY3VycmVudENsYXNzKydcIj48L3NwYW4+IC8gPHNwYW4gY2xhc3M9XCInK3QudG90YWxDbGFzcysnXCI+PC9zcGFuPicsaS5odG1sKHMpKSxcInByb2dyZXNzYmFyXCI9PT10LnR5cGUmJihzPXQucmVuZGVyUHJvZ3Jlc3NiYXI/dC5yZW5kZXJQcm9ncmVzc2Jhci5jYWxsKGUsdC5wcm9ncmVzc2JhckZpbGxDbGFzcyk6JzxzcGFuIGNsYXNzPVwiJyt0LnByb2dyZXNzYmFyRmlsbENsYXNzKydcIj48L3NwYW4+JyxpLmh0bWwocykpLFwiY3VzdG9tXCIhPT10LnR5cGUmJmUuZW1pdChcInBhZ2luYXRpb25SZW5kZXJcIixlLnBhZ2luYXRpb24uJGVsWzBdKX19LGluaXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGU9YS5wYXJhbXMucGFnaW5hdGlvbjtpZihlLmVsKXt2YXIgdD1MKGUuZWwpOzAhPT10Lmxlbmd0aCYmKGEucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgZS5lbCYmMTx0Lmxlbmd0aCYmMT09PWEuJGVsLmZpbmQoZS5lbCkubGVuZ3RoJiYodD1hLiRlbC5maW5kKGUuZWwpKSxcImJ1bGxldHNcIj09PWUudHlwZSYmZS5jbGlja2FibGUmJnQuYWRkQ2xhc3MoZS5jbGlja2FibGVDbGFzcyksdC5hZGRDbGFzcyhlLm1vZGlmaWVyQ2xhc3MrZS50eXBlKSxcImJ1bGxldHNcIj09PWUudHlwZSYmZS5keW5hbWljQnVsbGV0cyYmKHQuYWRkQ2xhc3MoXCJcIitlLm1vZGlmaWVyQ2xhc3MrZS50eXBlK1wiLWR5bmFtaWNcIiksYS5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleD0wLGUuZHluYW1pY01haW5CdWxsZXRzPDEmJihlLmR5bmFtaWNNYWluQnVsbGV0cz0xKSksXCJwcm9ncmVzc2JhclwiPT09ZS50eXBlJiZlLnByb2dyZXNzYmFyT3Bwb3NpdGUmJnQuYWRkQ2xhc3MoZS5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpLGUuY2xpY2thYmxlJiZ0Lm9uKFwiY2xpY2tcIixcIi5cIitlLmJ1bGxldENsYXNzLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD1MKHRoaXMpLmluZGV4KCkqYS5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7YS5wYXJhbXMubG9vcCYmKHQrPWEubG9vcGVkU2xpZGVzKSxhLnNsaWRlVG8odCl9KSxlZS5leHRlbmQoYS5wYWdpbmF0aW9uLHskZWw6dCxlbDp0WzBdfSkpfX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcy5wYWdpbmF0aW9uO2lmKHQuZWwmJmUucGFnaW5hdGlvbi5lbCYmZS5wYWdpbmF0aW9uLiRlbCYmMCE9PWUucGFnaW5hdGlvbi4kZWwubGVuZ3RoKXt2YXIgYT1lLnBhZ2luYXRpb24uJGVsO2EucmVtb3ZlQ2xhc3ModC5oaWRkZW5DbGFzcyksYS5yZW1vdmVDbGFzcyh0Lm1vZGlmaWVyQ2xhc3MrdC50eXBlKSxlLnBhZ2luYXRpb24uYnVsbGV0cyYmZS5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyksdC5jbGlja2FibGUmJmEub2ZmKFwiY2xpY2tcIixcIi5cIit0LmJ1bGxldENsYXNzKX19fSxHPXtzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGUucGFyYW1zLnNjcm9sbGJhci5lbCYmZS5zY3JvbGxiYXIuZWwpe3ZhciB0PWUuc2Nyb2xsYmFyLGE9ZS5ydGxUcmFuc2xhdGUsaT1lLnByb2dyZXNzLHM9dC5kcmFnU2l6ZSxyPXQudHJhY2tTaXplLG49dC4kZHJhZ0VsLG89dC4kZWwsbD1lLnBhcmFtcy5zY3JvbGxiYXIsZD1zLHA9KHItcykqaTthPzA8KHA9LXApPyhkPXMtcCxwPTApOnI8LXArcyYmKGQ9citwKTpwPDA/KGQ9cytwLHA9MCk6cjxwK3MmJihkPXItcCksZS5pc0hvcml6b250YWwoKT8odGUudHJhbnNmb3JtczNkP24udHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrcCtcInB4LCAwLCAwKVwiKTpuLnRyYW5zZm9ybShcInRyYW5zbGF0ZVgoXCIrcCtcInB4KVwiKSxuWzBdLnN0eWxlLndpZHRoPWQrXCJweFwiKToodGUudHJhbnNmb3JtczNkP24udHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIitwK1wicHgsIDApXCIpOm4udHJhbnNmb3JtKFwidHJhbnNsYXRlWShcIitwK1wicHgpXCIpLG5bMF0uc3R5bGUuaGVpZ2h0PWQrXCJweFwiKSxsLmhpZGUmJihjbGVhclRpbWVvdXQoZS5zY3JvbGxiYXIudGltZW91dCksb1swXS5zdHlsZS5vcGFjaXR5PTEsZS5zY3JvbGxiYXIudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b1swXS5zdHlsZS5vcGFjaXR5PTAsby50cmFuc2l0aW9uKDQwMCl9LDFlMykpfX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZWwmJnRoaXMuc2Nyb2xsYmFyLmVsJiZ0aGlzLnNjcm9sbGJhci4kZHJhZ0VsLnRyYW5zaXRpb24oZSl9LHVwZGF0ZVNpemU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGUucGFyYW1zLnNjcm9sbGJhci5lbCYmZS5zY3JvbGxiYXIuZWwpe3ZhciB0PWUuc2Nyb2xsYmFyLGE9dC4kZHJhZ0VsLGk9dC4kZWw7YVswXS5zdHlsZS53aWR0aD1cIlwiLGFbMF0uc3R5bGUuaGVpZ2h0PVwiXCI7dmFyIHMscj1lLmlzSG9yaXpvbnRhbCgpP2lbMF0ub2Zmc2V0V2lkdGg6aVswXS5vZmZzZXRIZWlnaHQsbj1lLnNpemUvZS52aXJ0dWFsU2l6ZSxvPW4qKHIvZS5zaXplKTtzPVwiYXV0b1wiPT09ZS5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplP3IqbjpwYXJzZUludChlLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUsMTApLGUuaXNIb3Jpem9udGFsKCk/YVswXS5zdHlsZS53aWR0aD1zK1wicHhcIjphWzBdLnN0eWxlLmhlaWdodD1zK1wicHhcIixpWzBdLnN0eWxlLmRpc3BsYXk9MTw9bj9cIm5vbmVcIjpcIlwiLGUucGFyYW1zLnNjcm9sbGJhci5oaWRlJiYoaVswXS5zdHlsZS5vcGFjaXR5PTApLGVlLmV4dGVuZCh0LHt0cmFja1NpemU6cixkaXZpZGVyOm4sbW92ZURpdmlkZXI6byxkcmFnU2l6ZTpzfSksdC4kZWxbZS5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmZS5pc0xvY2tlZD9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShlLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKX19LHNldERyYWdQb3NpdGlvbjpmdW5jdGlvbihlKXt2YXIgdCxhPXRoaXMsaT1hLnNjcm9sbGJhcixzPWEucnRsVHJhbnNsYXRlLHI9aS4kZWwsbj1pLmRyYWdTaXplLG89aS50cmFja1NpemU7dD0oKGEuaXNIb3Jpem9udGFsKCk/XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGV8fFwidG91Y2htb3ZlXCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYOmUucGFnZVh8fGUuY2xpZW50WDpcInRvdWNoc3RhcnRcIj09PWUudHlwZXx8XCJ0b3VjaG1vdmVcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6ZS5wYWdlWXx8ZS5jbGllbnRZKS1yLm9mZnNldCgpW2EuaXNIb3Jpem9udGFsKCk/XCJsZWZ0XCI6XCJ0b3BcIl0tbi8yKS8oby1uKSx0PU1hdGgubWF4KE1hdGgubWluKHQsMSksMCkscyYmKHQ9MS10KTt2YXIgbD1hLm1pblRyYW5zbGF0ZSgpKyhhLm1heFRyYW5zbGF0ZSgpLWEubWluVHJhbnNsYXRlKCkpKnQ7YS51cGRhdGVQcm9ncmVzcyhsKSxhLnNldFRyYW5zbGF0ZShsKSxhLnVwZGF0ZUFjdGl2ZUluZGV4KCksYS51cGRhdGVTbGlkZXNDbGFzc2VzKCl9LG9uRHJhZ1N0YXJ0OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsYT10LnBhcmFtcy5zY3JvbGxiYXIsaT10LnNjcm9sbGJhcixzPXQuJHdyYXBwZXJFbCxyPWkuJGVsLG49aS4kZHJhZ0VsO3Quc2Nyb2xsYmFyLmlzVG91Y2hlZD0hMCxlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSxzLnRyYW5zaXRpb24oMTAwKSxuLnRyYW5zaXRpb24oMTAwKSxpLnNldERyYWdQb3NpdGlvbihlKSxjbGVhclRpbWVvdXQodC5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpLHIudHJhbnNpdGlvbigwKSxhLmhpZGUmJnIuY3NzKFwib3BhY2l0eVwiLDEpLHQuZW1pdChcInNjcm9sbGJhckRyYWdTdGFydFwiLGUpfSxvbkRyYWdNb3ZlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2Nyb2xsYmFyLGE9dGhpcy4kd3JhcHBlckVsLGk9dC4kZWwscz10LiRkcmFnRWw7dGhpcy5zY3JvbGxiYXIuaXNUb3VjaGVkJiYoZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSx0LnNldERyYWdQb3NpdGlvbihlKSxhLnRyYW5zaXRpb24oMCksaS50cmFuc2l0aW9uKDApLHMudHJhbnNpdGlvbigwKSx0aGlzLmVtaXQoXCJzY3JvbGxiYXJEcmFnTW92ZVwiLGUpKX0sb25EcmFnRW5kOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsYT10LnBhcmFtcy5zY3JvbGxiYXIsaT10LnNjcm9sbGJhci4kZWw7dC5zY3JvbGxiYXIuaXNUb3VjaGVkJiYodC5zY3JvbGxiYXIuaXNUb3VjaGVkPSExLGEuaGlkZSYmKGNsZWFyVGltZW91dCh0LnNjcm9sbGJhci5kcmFnVGltZW91dCksdC5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQ9ZWUubmV4dFRpY2soZnVuY3Rpb24oKXtpLmNzcyhcIm9wYWNpdHlcIiwwKSxpLnRyYW5zaXRpb24oNDAwKX0sMWUzKSksdC5lbWl0KFwic2Nyb2xsYmFyRHJhZ0VuZFwiLGUpLGEuc25hcE9uUmVsZWFzZSYmdC5zbGlkZVRvQ2xvc2VzdCgpKX0sZW5hYmxlRHJhZ2dhYmxlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihlLnBhcmFtcy5zY3JvbGxiYXIuZWwpe3ZhciB0PWUuc2Nyb2xsYmFyLGE9ZS50b3VjaEV2ZW50c1RvdWNoLGk9ZS50b3VjaEV2ZW50c0Rlc2t0b3Ascz1lLnBhcmFtcyxyPXQuJGVsWzBdLG49ISghdGUucGFzc2l2ZUxpc3RlbmVyfHwhcy5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0sbz0hKCF0ZS5wYXNzaXZlTGlzdGVuZXJ8fCFzLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTt0ZS50b3VjaD8oci5hZGRFdmVudExpc3RlbmVyKGEuc3RhcnQsZS5zY3JvbGxiYXIub25EcmFnU3RhcnQsbiksci5hZGRFdmVudExpc3RlbmVyKGEubW92ZSxlLnNjcm9sbGJhci5vbkRyYWdNb3ZlLG4pLHIuYWRkRXZlbnRMaXN0ZW5lcihhLmVuZCxlLnNjcm9sbGJhci5vbkRyYWdFbmQsbykpOihyLmFkZEV2ZW50TGlzdGVuZXIoaS5zdGFydCxlLnNjcm9sbGJhci5vbkRyYWdTdGFydCxuKSxmLmFkZEV2ZW50TGlzdGVuZXIoaS5tb3ZlLGUuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsbiksZi5hZGRFdmVudExpc3RlbmVyKGkuZW5kLGUuc2Nyb2xsYmFyLm9uRHJhZ0VuZCxvKSl9fSxkaXNhYmxlRHJhZ2dhYmxlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihlLnBhcmFtcy5zY3JvbGxiYXIuZWwpe3ZhciB0PWUuc2Nyb2xsYmFyLGE9ZS50b3VjaEV2ZW50c1RvdWNoLGk9ZS50b3VjaEV2ZW50c0Rlc2t0b3Ascz1lLnBhcmFtcyxyPXQuJGVsWzBdLG49ISghdGUucGFzc2l2ZUxpc3RlbmVyfHwhcy5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0sbz0hKCF0ZS5wYXNzaXZlTGlzdGVuZXJ8fCFzLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTt0ZS50b3VjaD8oci5yZW1vdmVFdmVudExpc3RlbmVyKGEuc3RhcnQsZS5zY3JvbGxiYXIub25EcmFnU3RhcnQsbiksci5yZW1vdmVFdmVudExpc3RlbmVyKGEubW92ZSxlLnNjcm9sbGJhci5vbkRyYWdNb3ZlLG4pLHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLmVuZCxlLnNjcm9sbGJhci5vbkRyYWdFbmQsbykpOihyLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5zdGFydCxlLnNjcm9sbGJhci5vbkRyYWdTdGFydCxuKSxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5tb3ZlLGUuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsbiksZi5yZW1vdmVFdmVudExpc3RlbmVyKGkuZW5kLGUuc2Nyb2xsYmFyLm9uRHJhZ0VuZCxvKSl9fSxpbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihlLnBhcmFtcy5zY3JvbGxiYXIuZWwpe3ZhciB0PWUuc2Nyb2xsYmFyLGE9ZS4kZWwsaT1lLnBhcmFtcy5zY3JvbGxiYXIscz1MKGkuZWwpO2UucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgaS5lbCYmMTxzLmxlbmd0aCYmMT09PWEuZmluZChpLmVsKS5sZW5ndGgmJihzPWEuZmluZChpLmVsKSk7dmFyIHI9cy5maW5kKFwiLlwiK2UucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MpOzA9PT1yLmxlbmd0aCYmKHI9TCgnPGRpdiBjbGFzcz1cIicrZS5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcysnXCI+PC9kaXY+Jykscy5hcHBlbmQocikpLGVlLmV4dGVuZCh0LHskZWw6cyxlbDpzWzBdLCRkcmFnRWw6cixkcmFnRWw6clswXX0pLGkuZHJhZ2dhYmxlJiZ0LmVuYWJsZURyYWdnYWJsZSgpfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsYmFyLmRpc2FibGVEcmFnZ2FibGUoKX19LEI9e3NldFRyYW5zZm9ybTpmdW5jdGlvbihlLHQpe3ZhciBhPXRoaXMucnRsLGk9TChlKSxzPWE/LTE6MSxyPWkuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4XCIpfHxcIjBcIixuPWkuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4LXhcIiksbz1pLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC15XCIpLGw9aS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVcIiksZD1pLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XCIpO2lmKG58fG8/KG49bnx8XCIwXCIsbz1vfHxcIjBcIik6dGhpcy5pc0hvcml6b250YWwoKT8obj1yLG89XCIwXCIpOihvPXIsbj1cIjBcIiksbj0wPD1uLmluZGV4T2YoXCIlXCIpP3BhcnNlSW50KG4sMTApKnQqcytcIiVcIjpuKnQqcytcInB4XCIsbz0wPD1vLmluZGV4T2YoXCIlXCIpP3BhcnNlSW50KG8sMTApKnQrXCIlXCI6byp0K1wicHhcIixudWxsIT1kKXt2YXIgcD1kLShkLTEpKigxLU1hdGguYWJzKHQpKTtpWzBdLnN0eWxlLm9wYWNpdHk9cH1pZihudWxsPT1sKWkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrbitcIiwgXCIrbytcIiwgMHB4KVwiKTtlbHNle3ZhciBjPWwtKGwtMSkqKDEtTWF0aC5hYnModCkpO2kudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrbitcIiwgXCIrbytcIiwgMHB4KSBzY2FsZShcIitjK1wiKVwiKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3ZhciBpPXRoaXMsZT1pLiRlbCx0PWkuc2xpZGVzLHM9aS5wcm9ncmVzcyxyPWkuc25hcEdyaWQ7ZS5jaGlsZHJlbihcIltkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldXCIpLmVhY2goZnVuY3Rpb24oZSx0KXtpLnBhcmFsbGF4LnNldFRyYW5zZm9ybSh0LHMpfSksdC5lYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGE9dC5wcm9ncmVzczsxPGkucGFyYW1zLnNsaWRlc1Blckdyb3VwJiZcImF1dG9cIiE9PWkucGFyYW1zLnNsaWRlc1BlclZpZXcmJihhKz1NYXRoLmNlaWwoZS8yKS1zKihyLmxlbmd0aC0xKSksYT1NYXRoLm1pbihNYXRoLm1heChhLC0xKSwxKSxMKHQpLmZpbmQoXCJbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XVwiKS5lYWNoKGZ1bmN0aW9uKGUsdCl7aS5wYXJhbGxheC5zZXRUcmFuc2Zvcm0odCxhKX0pfSl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24ocyl7dm9pZCAwPT09cyYmKHM9dGhpcy5wYXJhbXMuc3BlZWQpO3RoaXMuJGVsLmZpbmQoXCJbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XVwiKS5lYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGE9TCh0KSxpPXBhcnNlSW50KGEuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4LWR1cmF0aW9uXCIpLDEwKXx8czswPT09cyYmKGk9MCksYS50cmFuc2l0aW9uKGkpfSl9fSxYPXtnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzOmZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGg8MilyZXR1cm4gMTt2YXIgdD1lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsYT1lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVksaT1lLnRhcmdldFRvdWNoZXNbMV0ucGFnZVgscz1lLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhpLXQsMikrTWF0aC5wb3cocy1hLDIpKX0sb25HZXN0dXJlU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxhPXQucGFyYW1zLnpvb20saT10Lnpvb20scz1pLmdlc3R1cmU7aWYoaS5mYWtlR2VzdHVyZVRvdWNoZWQ9ITEsaS5mYWtlR2VzdHVyZU1vdmVkPSExLCF0ZS5nZXN0dXJlcyl7aWYoXCJ0b3VjaHN0YXJ0XCIhPT1lLnR5cGV8fFwidG91Y2hzdGFydFwiPT09ZS50eXBlJiZlLnRhcmdldFRvdWNoZXMubGVuZ3RoPDIpcmV0dXJuO2kuZmFrZUdlc3R1cmVUb3VjaGVkPSEwLHMuc2NhbGVTdGFydD1YLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSl9cy4kc2xpZGVFbCYmcy4kc2xpZGVFbC5sZW5ndGh8fChzLiRzbGlkZUVsPUwoZS50YXJnZXQpLmNsb3Nlc3QoXCIuc3dpcGVyLXNsaWRlXCIpLDA9PT1zLiRzbGlkZUVsLmxlbmd0aCYmKHMuJHNsaWRlRWw9dC5zbGlkZXMuZXEodC5hY3RpdmVJbmRleCkpLHMuJGltYWdlRWw9cy4kc2xpZGVFbC5maW5kKFwiaW1nLCBzdmcsIGNhbnZhc1wiKSxzLiRpbWFnZVdyYXBFbD1zLiRpbWFnZUVsLnBhcmVudChcIi5cIithLmNvbnRhaW5lckNsYXNzKSxzLm1heFJhdGlvPXMuJGltYWdlV3JhcEVsLmF0dHIoXCJkYXRhLXN3aXBlci16b29tXCIpfHxhLm1heFJhdGlvLDAhPT1zLiRpbWFnZVdyYXBFbC5sZW5ndGgpPyhzLiRpbWFnZUVsLnRyYW5zaXRpb24oMCksdC56b29tLmlzU2NhbGluZz0hMCk6cy4kaW1hZ2VFbD12b2lkIDB9LG9uR2VzdHVyZUNoYW5nZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmFtcy56b29tLGE9dGhpcy56b29tLGk9YS5nZXN0dXJlO2lmKCF0ZS5nZXN0dXJlcyl7aWYoXCJ0b3VjaG1vdmVcIiE9PWUudHlwZXx8XCJ0b3VjaG1vdmVcIj09PWUudHlwZSYmZS50YXJnZXRUb3VjaGVzLmxlbmd0aDwyKXJldHVybjthLmZha2VHZXN0dXJlTW92ZWQ9ITAsaS5zY2FsZU1vdmU9WC5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpfWkuJGltYWdlRWwmJjAhPT1pLiRpbWFnZUVsLmxlbmd0aCYmKGEuc2NhbGU9dGUuZ2VzdHVyZXM/ZS5zY2FsZSphLmN1cnJlbnRTY2FsZTppLnNjYWxlTW92ZS9pLnNjYWxlU3RhcnQqYS5jdXJyZW50U2NhbGUsYS5zY2FsZT5pLm1heFJhdGlvJiYoYS5zY2FsZT1pLm1heFJhdGlvLTErTWF0aC5wb3coYS5zY2FsZS1pLm1heFJhdGlvKzEsLjUpKSxhLnNjYWxlPHQubWluUmF0aW8mJihhLnNjYWxlPXQubWluUmF0aW8rMS1NYXRoLnBvdyh0Lm1pblJhdGlvLWEuc2NhbGUrMSwuNSkpLGkuJGltYWdlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiK2Euc2NhbGUrXCIpXCIpKX0sb25HZXN0dXJlRW5kOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLnpvb20sYT10aGlzLnpvb20saT1hLmdlc3R1cmU7aWYoIXRlLmdlc3R1cmVzKXtpZighYS5mYWtlR2VzdHVyZVRvdWNoZWR8fCFhLmZha2VHZXN0dXJlTW92ZWQpcmV0dXJuO2lmKFwidG91Y2hlbmRcIiE9PWUudHlwZXx8XCJ0b3VjaGVuZFwiPT09ZS50eXBlJiZlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDwyJiYhZy5hbmRyb2lkKXJldHVybjthLmZha2VHZXN0dXJlVG91Y2hlZD0hMSxhLmZha2VHZXN0dXJlTW92ZWQ9ITF9aS4kaW1hZ2VFbCYmMCE9PWkuJGltYWdlRWwubGVuZ3RoJiYoYS5zY2FsZT1NYXRoLm1heChNYXRoLm1pbihhLnNjYWxlLGkubWF4UmF0aW8pLHQubWluUmF0aW8pLGkuJGltYWdlRWwudHJhbnNpdGlvbih0aGlzLnBhcmFtcy5zcGVlZCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiK2Euc2NhbGUrXCIpXCIpLGEuY3VycmVudFNjYWxlPWEuc2NhbGUsYS5pc1NjYWxpbmc9ITEsMT09PWEuc2NhbGUmJihpLiRzbGlkZUVsPXZvaWQgMCkpfSxvblRvdWNoU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy56b29tLGE9dC5nZXN0dXJlLGk9dC5pbWFnZTthLiRpbWFnZUVsJiYwIT09YS4kaW1hZ2VFbC5sZW5ndGgmJihpLmlzVG91Y2hlZHx8KGcuYW5kcm9pZCYmZS5wcmV2ZW50RGVmYXVsdCgpLGkuaXNUb3VjaGVkPSEwLGkudG91Y2hlc1N0YXJ0Lng9XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYOmUucGFnZVgsaS50b3VjaGVzU3RhcnQueT1cInRvdWNoc3RhcnRcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6ZS5wYWdlWSkpfSxvblRvdWNoTW92ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dC56b29tLGk9YS5nZXN0dXJlLHM9YS5pbWFnZSxyPWEudmVsb2NpdHk7aWYoaS4kaW1hZ2VFbCYmMCE9PWkuJGltYWdlRWwubGVuZ3RoJiYodC5hbGxvd0NsaWNrPSExLHMuaXNUb3VjaGVkJiZpLiRzbGlkZUVsKSl7cy5pc01vdmVkfHwocy53aWR0aD1pLiRpbWFnZUVsWzBdLm9mZnNldFdpZHRoLHMuaGVpZ2h0PWkuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0LHMuc3RhcnRYPWVlLmdldFRyYW5zbGF0ZShpLiRpbWFnZVdyYXBFbFswXSxcInhcIil8fDAscy5zdGFydFk9ZWUuZ2V0VHJhbnNsYXRlKGkuJGltYWdlV3JhcEVsWzBdLFwieVwiKXx8MCxpLnNsaWRlV2lkdGg9aS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aCxpLnNsaWRlSGVpZ2h0PWkuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0LGkuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMCksdC5ydGwmJihzLnN0YXJ0WD0tcy5zdGFydFgscy5zdGFydFk9LXMuc3RhcnRZKSk7dmFyIG49cy53aWR0aCphLnNjYWxlLG89cy5oZWlnaHQqYS5zY2FsZTtpZighKG48aS5zbGlkZVdpZHRoJiZvPGkuc2xpZGVIZWlnaHQpKXtpZihzLm1pblg9TWF0aC5taW4oaS5zbGlkZVdpZHRoLzItbi8yLDApLHMubWF4WD0tcy5taW5YLHMubWluWT1NYXRoLm1pbihpLnNsaWRlSGVpZ2h0LzItby8yLDApLHMubWF4WT0tcy5taW5ZLHMudG91Y2hlc0N1cnJlbnQueD1cInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDplLnBhZ2VYLHMudG91Y2hlc0N1cnJlbnQueT1cInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTplLnBhZ2VZLCFzLmlzTW92ZWQmJiFhLmlzU2NhbGluZyl7aWYodC5pc0hvcml6b250YWwoKSYmKE1hdGguZmxvb3Iocy5taW5YKT09PU1hdGguZmxvb3Iocy5zdGFydFgpJiZzLnRvdWNoZXNDdXJyZW50Lng8cy50b3VjaGVzU3RhcnQueHx8TWF0aC5mbG9vcihzLm1heFgpPT09TWF0aC5mbG9vcihzLnN0YXJ0WCkmJnMudG91Y2hlc0N1cnJlbnQueD5zLnRvdWNoZXNTdGFydC54KSlyZXR1cm4gdm9pZChzLmlzVG91Y2hlZD0hMSk7aWYoIXQuaXNIb3Jpem9udGFsKCkmJihNYXRoLmZsb29yKHMubWluWSk9PT1NYXRoLmZsb29yKHMuc3RhcnRZKSYmcy50b3VjaGVzQ3VycmVudC55PHMudG91Y2hlc1N0YXJ0Lnl8fE1hdGguZmxvb3Iocy5tYXhZKT09PU1hdGguZmxvb3Iocy5zdGFydFkpJiZzLnRvdWNoZXNDdXJyZW50Lnk+cy50b3VjaGVzU3RhcnQueSkpcmV0dXJuIHZvaWQocy5pc1RvdWNoZWQ9ITEpfWUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHMuaXNNb3ZlZD0hMCxzLmN1cnJlbnRYPXMudG91Y2hlc0N1cnJlbnQueC1zLnRvdWNoZXNTdGFydC54K3Muc3RhcnRYLHMuY3VycmVudFk9cy50b3VjaGVzQ3VycmVudC55LXMudG91Y2hlc1N0YXJ0Lnkrcy5zdGFydFkscy5jdXJyZW50WDxzLm1pblgmJihzLmN1cnJlbnRYPXMubWluWCsxLU1hdGgucG93KHMubWluWC1zLmN1cnJlbnRYKzEsLjgpKSxzLmN1cnJlbnRYPnMubWF4WCYmKHMuY3VycmVudFg9cy5tYXhYLTErTWF0aC5wb3cocy5jdXJyZW50WC1zLm1heFgrMSwuOCkpLHMuY3VycmVudFk8cy5taW5ZJiYocy5jdXJyZW50WT1zLm1pblkrMS1NYXRoLnBvdyhzLm1pblktcy5jdXJyZW50WSsxLC44KSkscy5jdXJyZW50WT5zLm1heFkmJihzLmN1cnJlbnRZPXMubWF4WS0xK01hdGgucG93KHMuY3VycmVudFktcy5tYXhZKzEsLjgpKSxyLnByZXZQb3NpdGlvblh8fChyLnByZXZQb3NpdGlvblg9cy50b3VjaGVzQ3VycmVudC54KSxyLnByZXZQb3NpdGlvbll8fChyLnByZXZQb3NpdGlvblk9cy50b3VjaGVzQ3VycmVudC55KSxyLnByZXZUaW1lfHwoci5wcmV2VGltZT1EYXRlLm5vdygpKSxyLng9KHMudG91Y2hlc0N1cnJlbnQueC1yLnByZXZQb3NpdGlvblgpLyhEYXRlLm5vdygpLXIucHJldlRpbWUpLzIsci55PShzLnRvdWNoZXNDdXJyZW50Lnktci5wcmV2UG9zaXRpb25ZKS8oRGF0ZS5ub3coKS1yLnByZXZUaW1lKS8yLE1hdGguYWJzKHMudG91Y2hlc0N1cnJlbnQueC1yLnByZXZQb3NpdGlvblgpPDImJihyLng9MCksTWF0aC5hYnMocy50b3VjaGVzQ3VycmVudC55LXIucHJldlBvc2l0aW9uWSk8MiYmKHIueT0wKSxyLnByZXZQb3NpdGlvblg9cy50b3VjaGVzQ3VycmVudC54LHIucHJldlBvc2l0aW9uWT1zLnRvdWNoZXNDdXJyZW50Lnksci5wcmV2VGltZT1EYXRlLm5vdygpLGkuJGltYWdlV3JhcEVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK3MuY3VycmVudFgrXCJweCwgXCIrcy5jdXJyZW50WStcInB4LDApXCIpfX19LG9uVG91Y2hFbmQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb20sdD1lLmdlc3R1cmUsYT1lLmltYWdlLGk9ZS52ZWxvY2l0eTtpZih0LiRpbWFnZUVsJiYwIT09dC4kaW1hZ2VFbC5sZW5ndGgpe2lmKCFhLmlzVG91Y2hlZHx8IWEuaXNNb3ZlZClyZXR1cm4gYS5pc1RvdWNoZWQ9ITEsdm9pZChhLmlzTW92ZWQ9ITEpO2EuaXNUb3VjaGVkPSExLGEuaXNNb3ZlZD0hMTt2YXIgcz0zMDAscj0zMDAsbj1pLngqcyxvPWEuY3VycmVudFgrbixsPWkueSpyLGQ9YS5jdXJyZW50WStsOzAhPT1pLngmJihzPU1hdGguYWJzKChvLWEuY3VycmVudFgpL2kueCkpLDAhPT1pLnkmJihyPU1hdGguYWJzKChkLWEuY3VycmVudFkpL2kueSkpO3ZhciBwPU1hdGgubWF4KHMscik7YS5jdXJyZW50WD1vLGEuY3VycmVudFk9ZDt2YXIgYz1hLndpZHRoKmUuc2NhbGUsdT1hLmhlaWdodCplLnNjYWxlO2EubWluWD1NYXRoLm1pbih0LnNsaWRlV2lkdGgvMi1jLzIsMCksYS5tYXhYPS1hLm1pblgsYS5taW5ZPU1hdGgubWluKHQuc2xpZGVIZWlnaHQvMi11LzIsMCksYS5tYXhZPS1hLm1pblksYS5jdXJyZW50WD1NYXRoLm1heChNYXRoLm1pbihhLmN1cnJlbnRYLGEubWF4WCksYS5taW5YKSxhLmN1cnJlbnRZPU1hdGgubWF4KE1hdGgubWluKGEuY3VycmVudFksYS5tYXhZKSxhLm1pblkpLHQuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24ocCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrYS5jdXJyZW50WCtcInB4LCBcIithLmN1cnJlbnRZK1wicHgsMClcIil9fSxvblRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb20sdD1lLmdlc3R1cmU7dC4kc2xpZGVFbCYmdGhpcy5wcmV2aW91c0luZGV4IT09dGhpcy5hY3RpdmVJbmRleCYmKHQuJGltYWdlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpXCIpLHQuJGltYWdlV3JhcEVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxlLnNjYWxlPTEsZS5jdXJyZW50U2NhbGU9MSx0LiRzbGlkZUVsPXZvaWQgMCx0LiRpbWFnZUVsPXZvaWQgMCx0LiRpbWFnZVdyYXBFbD12b2lkIDApfSx0b2dnbGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy56b29tO3Quc2NhbGUmJjEhPT10LnNjYWxlP3Qub3V0KCk6dC5pbihlKX0saW46ZnVuY3Rpb24oZSl7dmFyIHQsYSxpLHMscixuLG8sbCxkLHAsYyx1LGgsdixmLG0sZz10aGlzLGI9Zy56b29tLHc9Zy5wYXJhbXMuem9vbSx5PWIuZ2VzdHVyZSx4PWIuaW1hZ2U7KHkuJHNsaWRlRWx8fCh5LiRzbGlkZUVsPWcuY2xpY2tlZFNsaWRlP0woZy5jbGlja2VkU2xpZGUpOmcuc2xpZGVzLmVxKGcuYWN0aXZlSW5kZXgpLHkuJGltYWdlRWw9eS4kc2xpZGVFbC5maW5kKFwiaW1nLCBzdmcsIGNhbnZhc1wiKSx5LiRpbWFnZVdyYXBFbD15LiRpbWFnZUVsLnBhcmVudChcIi5cIit3LmNvbnRhaW5lckNsYXNzKSkseS4kaW1hZ2VFbCYmMCE9PXkuJGltYWdlRWwubGVuZ3RoKSYmKHkuJHNsaWRlRWwuYWRkQ2xhc3MoXCJcIit3Lnpvb21lZFNsaWRlQ2xhc3MpLHZvaWQgMD09PXgudG91Y2hlc1N0YXJ0LngmJmU/KHQ9XCJ0b3VjaGVuZFwiPT09ZS50eXBlP2UuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg6ZS5wYWdlWCxhPVwidG91Y2hlbmRcIj09PWUudHlwZT9lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZOmUucGFnZVkpOih0PXgudG91Y2hlc1N0YXJ0LngsYT14LnRvdWNoZXNTdGFydC55KSxiLnNjYWxlPXkuJGltYWdlV3JhcEVsLmF0dHIoXCJkYXRhLXN3aXBlci16b29tXCIpfHx3Lm1heFJhdGlvLGIuY3VycmVudFNjYWxlPXkuJGltYWdlV3JhcEVsLmF0dHIoXCJkYXRhLXN3aXBlci16b29tXCIpfHx3Lm1heFJhdGlvLGU/KGY9eS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aCxtPXkuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0LGk9eS4kc2xpZGVFbC5vZmZzZXQoKS5sZWZ0K2YvMi10LHM9eS4kc2xpZGVFbC5vZmZzZXQoKS50b3ArbS8yLWEsbz15LiRpbWFnZUVsWzBdLm9mZnNldFdpZHRoLGw9eS4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQsZD1vKmIuc2NhbGUscD1sKmIuc2NhbGUsaD0tKGM9TWF0aC5taW4oZi8yLWQvMiwwKSksdj0tKHU9TWF0aC5taW4obS8yLXAvMiwwKSksKHI9aSpiLnNjYWxlKTxjJiYocj1jKSxoPHImJihyPWgpLChuPXMqYi5zY2FsZSk8dSYmKG49dSksdjxuJiYobj12KSk6bj1yPTAseS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgXCIrbitcInB4LDApXCIpLHkuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIitiLnNjYWxlK1wiKVwiKSl9LG91dDpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnpvb20sYT1lLnBhcmFtcy56b29tLGk9dC5nZXN0dXJlO2kuJHNsaWRlRWx8fChpLiRzbGlkZUVsPWUuY2xpY2tlZFNsaWRlP0woZS5jbGlja2VkU2xpZGUpOmUuc2xpZGVzLmVxKGUuYWN0aXZlSW5kZXgpLGkuJGltYWdlRWw9aS4kc2xpZGVFbC5maW5kKFwiaW1nLCBzdmcsIGNhbnZhc1wiKSxpLiRpbWFnZVdyYXBFbD1pLiRpbWFnZUVsLnBhcmVudChcIi5cIithLmNvbnRhaW5lckNsYXNzKSksaS4kaW1hZ2VFbCYmMCE9PWkuJGltYWdlRWwubGVuZ3RoJiYodC5zY2FsZT0xLHQuY3VycmVudFNjYWxlPTEsaS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxpLiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSlcIiksaS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhcIlwiK2Euem9vbWVkU2xpZGVDbGFzcyksaS4kc2xpZGVFbD12b2lkIDApfSxlbmFibGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS56b29tO2lmKCF0LmVuYWJsZWQpe3QuZW5hYmxlZD0hMDt2YXIgYT0hKFwidG91Y2hzdGFydFwiIT09ZS50b3VjaEV2ZW50cy5zdGFydHx8IXRlLnBhc3NpdmVMaXN0ZW5lcnx8IWUucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTt0ZS5nZXN0dXJlcz8oZS4kd3JhcHBlckVsLm9uKFwiZ2VzdHVyZXN0YXJ0XCIsXCIuc3dpcGVyLXNsaWRlXCIsdC5vbkdlc3R1cmVTdGFydCxhKSxlLiR3cmFwcGVyRWwub24oXCJnZXN0dXJlY2hhbmdlXCIsXCIuc3dpcGVyLXNsaWRlXCIsdC5vbkdlc3R1cmVDaGFuZ2UsYSksZS4kd3JhcHBlckVsLm9uKFwiZ2VzdHVyZWVuZFwiLFwiLnN3aXBlci1zbGlkZVwiLHQub25HZXN0dXJlRW5kLGEpKTpcInRvdWNoc3RhcnRcIj09PWUudG91Y2hFdmVudHMuc3RhcnQmJihlLiR3cmFwcGVyRWwub24oZS50b3VjaEV2ZW50cy5zdGFydCxcIi5zd2lwZXItc2xpZGVcIix0Lm9uR2VzdHVyZVN0YXJ0LGEpLGUuJHdyYXBwZXJFbC5vbihlLnRvdWNoRXZlbnRzLm1vdmUsXCIuc3dpcGVyLXNsaWRlXCIsdC5vbkdlc3R1cmVDaGFuZ2UsYSksZS4kd3JhcHBlckVsLm9uKGUudG91Y2hFdmVudHMuZW5kLFwiLnN3aXBlci1zbGlkZVwiLHQub25HZXN0dXJlRW5kLGEpKSxlLiR3cmFwcGVyRWwub24oZS50b3VjaEV2ZW50cy5tb3ZlLFwiLlwiK2UucGFyYW1zLnpvb20uY29udGFpbmVyQ2xhc3MsdC5vblRvdWNoTW92ZSl9fSxkaXNhYmxlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuem9vbTtpZih0LmVuYWJsZWQpe2Uuem9vbS5lbmFibGVkPSExO3ZhciBhPSEoXCJ0b3VjaHN0YXJ0XCIhPT1lLnRvdWNoRXZlbnRzLnN0YXJ0fHwhdGUucGFzc2l2ZUxpc3RlbmVyfHwhZS5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiEwLGNhcHR1cmU6ITF9O3RlLmdlc3R1cmVzPyhlLiR3cmFwcGVyRWwub2ZmKFwiZ2VzdHVyZXN0YXJ0XCIsXCIuc3dpcGVyLXNsaWRlXCIsdC5vbkdlc3R1cmVTdGFydCxhKSxlLiR3cmFwcGVyRWwub2ZmKFwiZ2VzdHVyZWNoYW5nZVwiLFwiLnN3aXBlci1zbGlkZVwiLHQub25HZXN0dXJlQ2hhbmdlLGEpLGUuJHdyYXBwZXJFbC5vZmYoXCJnZXN0dXJlZW5kXCIsXCIuc3dpcGVyLXNsaWRlXCIsdC5vbkdlc3R1cmVFbmQsYSkpOlwidG91Y2hzdGFydFwiPT09ZS50b3VjaEV2ZW50cy5zdGFydCYmKGUuJHdyYXBwZXJFbC5vZmYoZS50b3VjaEV2ZW50cy5zdGFydCxcIi5zd2lwZXItc2xpZGVcIix0Lm9uR2VzdHVyZVN0YXJ0LGEpLGUuJHdyYXBwZXJFbC5vZmYoZS50b3VjaEV2ZW50cy5tb3ZlLFwiLnN3aXBlci1zbGlkZVwiLHQub25HZXN0dXJlQ2hhbmdlLGEpLGUuJHdyYXBwZXJFbC5vZmYoZS50b3VjaEV2ZW50cy5lbmQsXCIuc3dpcGVyLXNsaWRlXCIsdC5vbkdlc3R1cmVFbmQsYSkpLGUuJHdyYXBwZXJFbC5vZmYoZS50b3VjaEV2ZW50cy5tb3ZlLFwiLlwiK2UucGFyYW1zLnpvb20uY29udGFpbmVyQ2xhc3MsdC5vblRvdWNoTW92ZSl9fX0sWT17bG9hZEluU2xpZGU6ZnVuY3Rpb24oZSxsKXt2b2lkIDA9PT1sJiYobD0hMCk7dmFyIGQ9dGhpcyxwPWQucGFyYW1zLmxhenk7aWYodm9pZCAwIT09ZSYmMCE9PWQuc2xpZGVzLmxlbmd0aCl7dmFyIGM9ZC52aXJ0dWFsJiZkLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ/ZC4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiK2QucGFyYW1zLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdJyk6ZC5zbGlkZXMuZXEoZSksdD1jLmZpbmQoXCIuXCIrcC5lbGVtZW50Q2xhc3MrXCI6bm90KC5cIitwLmxvYWRlZENsYXNzK1wiKTpub3QoLlwiK3AubG9hZGluZ0NsYXNzK1wiKVwiKTshYy5oYXNDbGFzcyhwLmVsZW1lbnRDbGFzcyl8fGMuaGFzQ2xhc3MocC5sb2FkZWRDbGFzcyl8fGMuaGFzQ2xhc3MocC5sb2FkaW5nQ2xhc3MpfHwodD10LmFkZChjWzBdKSksMCE9PXQubGVuZ3RoJiZ0LmVhY2goZnVuY3Rpb24oZSx0KXt2YXIgaT1MKHQpO2kuYWRkQ2xhc3MocC5sb2FkaW5nQ2xhc3MpO3ZhciBzPWkuYXR0cihcImRhdGEtYmFja2dyb3VuZFwiKSxyPWkuYXR0cihcImRhdGEtc3JjXCIpLG49aS5hdHRyKFwiZGF0YS1zcmNzZXRcIiksbz1pLmF0dHIoXCJkYXRhLXNpemVzXCIpO2QubG9hZEltYWdlKGlbMF0scnx8cyxuLG8sITEsZnVuY3Rpb24oKXtpZihudWxsIT1kJiZkJiYoIWR8fGQucGFyYW1zKSYmIWQuZGVzdHJveWVkKXtpZihzPyhpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwndXJsKFwiJytzKydcIiknKSxpLnJlbW92ZUF0dHIoXCJkYXRhLWJhY2tncm91bmRcIikpOihuJiYoaS5hdHRyKFwic3Jjc2V0XCIsbiksaS5yZW1vdmVBdHRyKFwiZGF0YS1zcmNzZXRcIikpLG8mJihpLmF0dHIoXCJzaXplc1wiLG8pLGkucmVtb3ZlQXR0cihcImRhdGEtc2l6ZXNcIikpLHImJihpLmF0dHIoXCJzcmNcIixyKSxpLnJlbW92ZUF0dHIoXCJkYXRhLXNyY1wiKSkpLGkuYWRkQ2xhc3MocC5sb2FkZWRDbGFzcykucmVtb3ZlQ2xhc3MocC5sb2FkaW5nQ2xhc3MpLGMuZmluZChcIi5cIitwLnByZWxvYWRlckNsYXNzKS5yZW1vdmUoKSxkLnBhcmFtcy5sb29wJiZsKXt2YXIgZT1jLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKTtpZihjLmhhc0NsYXNzKGQucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKXt2YXIgdD1kLiR3cmFwcGVyRWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdOm5vdCguJytkLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzK1wiKVwiKTtkLmxhenkubG9hZEluU2xpZGUodC5pbmRleCgpLCExKX1lbHNle3ZhciBhPWQuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIitkLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2UrJ1wiXScpO2QubGF6eS5sb2FkSW5TbGlkZShhLmluZGV4KCksITEpfX1kLmVtaXQoXCJsYXp5SW1hZ2VSZWFkeVwiLGNbMF0saVswXSl9fSksZC5lbWl0KFwibGF6eUltYWdlTG9hZFwiLGNbMF0saVswXSl9KX19LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLHQ9aS4kd3JhcHBlckVsLGE9aS5wYXJhbXMscz1pLnNsaWRlcyxlPWkuYWN0aXZlSW5kZXgscj1pLnZpcnR1YWwmJmEudmlydHVhbC5lbmFibGVkLG49YS5sYXp5LG89YS5zbGlkZXNQZXJWaWV3O2Z1bmN0aW9uIGwoZSl7aWYocil7aWYodC5jaGlsZHJlbihcIi5cIithLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdJykubGVuZ3RoKXJldHVybiEwfWVsc2UgaWYoc1tlXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBkKGUpe3JldHVybiByP0woZSkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpOkwoZSkuaW5kZXgoKX1pZihcImF1dG9cIj09PW8mJihvPTApLGkubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWR8fChpLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkPSEwKSxpLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpdC5jaGlsZHJlbihcIi5cIithLnNsaWRlVmlzaWJsZUNsYXNzKS5lYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGE9cj9MKHQpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKTpMKHQpLmluZGV4KCk7aS5sYXp5LmxvYWRJblNsaWRlKGEpfSk7ZWxzZSBpZigxPG8pZm9yKHZhciBwPWU7cDxlK287cCs9MSlsKHApJiZpLmxhenkubG9hZEluU2xpZGUocCk7ZWxzZSBpLmxhenkubG9hZEluU2xpZGUoZSk7aWYobi5sb2FkUHJldk5leHQpaWYoMTxvfHxuLmxvYWRQcmV2TmV4dEFtb3VudCYmMTxuLmxvYWRQcmV2TmV4dEFtb3VudCl7Zm9yKHZhciBjPW4ubG9hZFByZXZOZXh0QW1vdW50LHU9byxoPU1hdGgubWluKGUrdStNYXRoLm1heChjLHUpLHMubGVuZ3RoKSx2PU1hdGgubWF4KGUtTWF0aC5tYXgodSxjKSwwKSxmPWUrbztmPGg7Zis9MSlsKGYpJiZpLmxhenkubG9hZEluU2xpZGUoZik7Zm9yKHZhciBtPXY7bTxlO20rPTEpbChtKSYmaS5sYXp5LmxvYWRJblNsaWRlKG0pfWVsc2V7dmFyIGc9dC5jaGlsZHJlbihcIi5cIithLnNsaWRlTmV4dENsYXNzKTswPGcubGVuZ3RoJiZpLmxhenkubG9hZEluU2xpZGUoZChnKSk7dmFyIGI9dC5jaGlsZHJlbihcIi5cIithLnNsaWRlUHJldkNsYXNzKTswPGIubGVuZ3RoJiZpLmxhenkubG9hZEluU2xpZGUoZChiKSl9fX0sVj17TGluZWFyU3BsaW5lOmZ1bmN0aW9uKGUsdCl7dmFyIGEsaSxzLHIsbixvPWZ1bmN0aW9uKGUsdCl7Zm9yKGk9LTEsYT1lLmxlbmd0aDsxPGEtaTspZVtzPWEraT4+MV08PXQ/aT1zOmE9cztyZXR1cm4gYX07cmV0dXJuIHRoaXMueD1lLHRoaXMueT10LHRoaXMubGFzdEluZGV4PWUubGVuZ3RoLTEsdGhpcy5pbnRlcnBvbGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gZT8obj1vKHRoaXMueCxlKSxyPW4tMSwoZS10aGlzLnhbcl0pKih0aGlzLnlbbl0tdGhpcy55W3JdKS8odGhpcy54W25dLXRoaXMueFtyXSkrdGhpcy55W3JdKTowfSx0aGlzfSxnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5jb250cm9sbGVyLnNwbGluZXx8KHQuY29udHJvbGxlci5zcGxpbmU9dC5wYXJhbXMubG9vcD9uZXcgVi5MaW5lYXJTcGxpbmUodC5zbGlkZXNHcmlkLGUuc2xpZGVzR3JpZCk6bmV3IFYuTGluZWFyU3BsaW5lKHQuc25hcEdyaWQsZS5zbmFwR3JpZCkpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSx0KXt2YXIgYSxpLHM9dGhpcyxyPXMuY29udHJvbGxlci5jb250cm9sO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9cy5ydGxUcmFuc2xhdGU/LXMudHJhbnNsYXRlOnMudHJhbnNsYXRlO1wic2xpZGVcIj09PXMucGFyYW1zLmNvbnRyb2xsZXIuYnkmJihzLmNvbnRyb2xsZXIuZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbihlKSxpPS1zLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10KSksaSYmXCJjb250YWluZXJcIiE9PXMucGFyYW1zLmNvbnRyb2xsZXIuYnl8fChhPShlLm1heFRyYW5zbGF0ZSgpLWUubWluVHJhbnNsYXRlKCkpLyhzLm1heFRyYW5zbGF0ZSgpLXMubWluVHJhbnNsYXRlKCkpLGk9KHQtcy5taW5UcmFuc2xhdGUoKSkqYStlLm1pblRyYW5zbGF0ZSgpKSxzLnBhcmFtcy5jb250cm9sbGVyLmludmVyc2UmJihpPWUubWF4VHJhbnNsYXRlKCktaSksZS51cGRhdGVQcm9ncmVzcyhpKSxlLnNldFRyYW5zbGF0ZShpLHMpLGUudXBkYXRlQWN0aXZlSW5kZXgoKSxlLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKX1pZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgbz0wO288ci5sZW5ndGg7bys9MSlyW29dIT09dCYmcltvXWluc3RhbmNlb2YgVCYmbihyW29dKTtlbHNlIHIgaW5zdGFuY2VvZiBUJiZ0IT09ciYmbihyKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbih0LGUpe3ZhciBhLGk9dGhpcyxzPWkuY29udHJvbGxlci5jb250cm9sO2Z1bmN0aW9uIHIoZSl7ZS5zZXRUcmFuc2l0aW9uKHQsaSksMCE9PXQmJihlLnRyYW5zaXRpb25TdGFydCgpLGUucGFyYW1zLmF1dG9IZWlnaHQmJmVlLm5leHRUaWNrKGZ1bmN0aW9uKCl7ZS51cGRhdGVBdXRvSGVpZ2h0KCl9KSxlLiR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3MmJihlLnBhcmFtcy5sb29wJiZcInNsaWRlXCI9PT1pLnBhcmFtcy5jb250cm9sbGVyLmJ5JiZlLmxvb3BGaXgoKSxlLnRyYW5zaXRpb25FbmQoKSl9KSl9aWYoQXJyYXkuaXNBcnJheShzKSlmb3IoYT0wO2E8cy5sZW5ndGg7YSs9MSlzW2FdIT09ZSYmc1thXWluc3RhbmNlb2YgVCYmcihzW2FdKTtlbHNlIHMgaW5zdGFuY2VvZiBUJiZlIT09cyYmcihzKX19LEY9e21ha2VFbEZvY3VzYWJsZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5hdHRyKFwidGFiSW5kZXhcIixcIjBcIiksZX0sYWRkRWxSb2xlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuYXR0cihcInJvbGVcIix0KSxlfSxhZGRFbExhYmVsOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuYXR0cihcImFyaWEtbGFiZWxcIix0KSxlfSxkaXNhYmxlRWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwhMCksZX0sZW5hYmxlRWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwhMSksZX0sb25FbnRlcktleTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dC5wYXJhbXMuYTExeTtpZigxMz09PWUua2V5Q29kZSl7dmFyIGk9TChlLnRhcmdldCk7dC5uYXZpZ2F0aW9uJiZ0Lm5hdmlnYXRpb24uJG5leHRFbCYmaS5pcyh0Lm5hdmlnYXRpb24uJG5leHRFbCkmJih0LmlzRW5kJiYhdC5wYXJhbXMubG9vcHx8dC5zbGlkZU5leHQoKSx0LmlzRW5kP3QuYTExeS5ub3RpZnkoYS5sYXN0U2xpZGVNZXNzYWdlKTp0LmExMXkubm90aWZ5KGEubmV4dFNsaWRlTWVzc2FnZSkpLHQubmF2aWdhdGlvbiYmdC5uYXZpZ2F0aW9uLiRwcmV2RWwmJmkuaXModC5uYXZpZ2F0aW9uLiRwcmV2RWwpJiYodC5pc0JlZ2lubmluZyYmIXQucGFyYW1zLmxvb3B8fHQuc2xpZGVQcmV2KCksdC5pc0JlZ2lubmluZz90LmExMXkubm90aWZ5KGEuZmlyc3RTbGlkZU1lc3NhZ2UpOnQuYTExeS5ub3RpZnkoYS5wcmV2U2xpZGVNZXNzYWdlKSksdC5wYWdpbmF0aW9uJiZpLmlzKFwiLlwiK3QucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpJiZpWzBdLmNsaWNrKCl9fSxub3RpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5hMTF5LmxpdmVSZWdpb247MCE9PXQubGVuZ3RoJiYodC5odG1sKFwiXCIpLHQuaHRtbChlKSl9LHVwZGF0ZU5hdmlnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCFlLnBhcmFtcy5sb29wKXt2YXIgdD1lLm5hdmlnYXRpb24sYT10LiRuZXh0RWwsaT10LiRwcmV2RWw7aSYmMDxpLmxlbmd0aCYmKGUuaXNCZWdpbm5pbmc/ZS5hMTF5LmRpc2FibGVFbChpKTplLmExMXkuZW5hYmxlRWwoaSkpLGEmJjA8YS5sZW5ndGgmJihlLmlzRW5kP2UuYTExeS5kaXNhYmxlRWwoYSk6ZS5hMTF5LmVuYWJsZUVsKGEpKX19LHVwZGF0ZVBhZ2luYXRpb246ZnVuY3Rpb24oKXt2YXIgaT10aGlzLHM9aS5wYXJhbXMuYTExeTtpLnBhZ2luYXRpb24mJmkucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlJiZpLnBhZ2luYXRpb24uYnVsbGV0cyYmaS5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoJiZpLnBhZ2luYXRpb24uYnVsbGV0cy5lYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGE9TCh0KTtpLmExMXkubWFrZUVsRm9jdXNhYmxlKGEpLGkuYTExeS5hZGRFbFJvbGUoYSxcImJ1dHRvblwiKSxpLmExMXkuYWRkRWxMYWJlbChhLHMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgve3tpbmRleH19LyxhLmluZGV4KCkrMSkpfSl9LGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJGVsLmFwcGVuZChlLmExMXkubGl2ZVJlZ2lvbik7dmFyIHQsYSxpPWUucGFyYW1zLmExMXk7ZS5uYXZpZ2F0aW9uJiZlLm5hdmlnYXRpb24uJG5leHRFbCYmKHQ9ZS5uYXZpZ2F0aW9uLiRuZXh0RWwpLGUubmF2aWdhdGlvbiYmZS5uYXZpZ2F0aW9uLiRwcmV2RWwmJihhPWUubmF2aWdhdGlvbi4kcHJldkVsKSx0JiYoZS5hMTF5Lm1ha2VFbEZvY3VzYWJsZSh0KSxlLmExMXkuYWRkRWxSb2xlKHQsXCJidXR0b25cIiksZS5hMTF5LmFkZEVsTGFiZWwodCxpLm5leHRTbGlkZU1lc3NhZ2UpLHQub24oXCJrZXlkb3duXCIsZS5hMTF5Lm9uRW50ZXJLZXkpKSxhJiYoZS5hMTF5Lm1ha2VFbEZvY3VzYWJsZShhKSxlLmExMXkuYWRkRWxSb2xlKGEsXCJidXR0b25cIiksZS5hMTF5LmFkZEVsTGFiZWwoYSxpLnByZXZTbGlkZU1lc3NhZ2UpLGEub24oXCJrZXlkb3duXCIsZS5hMTF5Lm9uRW50ZXJLZXkpKSxlLnBhZ2luYXRpb24mJmUucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlJiZlLnBhZ2luYXRpb24uYnVsbGV0cyYmZS5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoJiZlLnBhZ2luYXRpb24uJGVsLm9uKFwia2V5ZG93blwiLFwiLlwiK2UucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MsZS5hMTF5Lm9uRW50ZXJLZXkpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGUsdCxhPXRoaXM7YS5hMTF5LmxpdmVSZWdpb24mJjA8YS5hMTF5LmxpdmVSZWdpb24ubGVuZ3RoJiZhLmExMXkubGl2ZVJlZ2lvbi5yZW1vdmUoKSxhLm5hdmlnYXRpb24mJmEubmF2aWdhdGlvbi4kbmV4dEVsJiYoZT1hLm5hdmlnYXRpb24uJG5leHRFbCksYS5uYXZpZ2F0aW9uJiZhLm5hdmlnYXRpb24uJHByZXZFbCYmKHQ9YS5uYXZpZ2F0aW9uLiRwcmV2RWwpLGUmJmUub2ZmKFwia2V5ZG93blwiLGEuYTExeS5vbkVudGVyS2V5KSx0JiZ0Lm9mZihcImtleWRvd25cIixhLmExMXkub25FbnRlcktleSksYS5wYWdpbmF0aW9uJiZhLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSYmYS5wYWdpbmF0aW9uLmJ1bGxldHMmJmEucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCYmYS5wYWdpbmF0aW9uLiRlbC5vZmYoXCJrZXlkb3duXCIsXCIuXCIrYS5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcyxhLmExMXkub25FbnRlcktleSl9fSxSPXtpbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihlLnBhcmFtcy5oaXN0b3J5KXtpZighSi5oaXN0b3J5fHwhSi5oaXN0b3J5LnB1c2hTdGF0ZSlyZXR1cm4gZS5wYXJhbXMuaGlzdG9yeS5lbmFibGVkPSExLHZvaWQoZS5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZD0hMCk7dmFyIHQ9ZS5oaXN0b3J5O3QuaW5pdGlhbGl6ZWQ9ITAsdC5wYXRocz1SLmdldFBhdGhWYWx1ZXMoKSwodC5wYXRocy5rZXl8fHQucGF0aHMudmFsdWUpJiYodC5zY3JvbGxUb1NsaWRlKDAsdC5wYXRocy52YWx1ZSxlLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpLGUucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlfHxKLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLGUuaGlzdG9yeS5zZXRIaXN0b3J5UG9wU3RhdGUpKX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZXx8Si5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIix0aGlzLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKX0sc2V0SGlzdG9yeVBvcFN0YXRlOmZ1bmN0aW9uKCl7dGhpcy5oaXN0b3J5LnBhdGhzPVIuZ2V0UGF0aFZhbHVlcygpLHRoaXMuaGlzdG9yeS5zY3JvbGxUb1NsaWRlKHRoaXMucGFyYW1zLnNwZWVkLHRoaXMuaGlzdG9yeS5wYXRocy52YWx1ZSwhMSl9LGdldFBhdGhWYWx1ZXM6ZnVuY3Rpb24oKXt2YXIgZT1KLmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KFwiL1wiKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCJcIiE9PWV9KSx0PWUubGVuZ3RoO3JldHVybntrZXk6ZVt0LTJdLHZhbHVlOmVbdC0xXX19LHNldEhpc3Rvcnk6ZnVuY3Rpb24oZSx0KXtpZih0aGlzLmhpc3RvcnkuaW5pdGlhbGl6ZWQmJnRoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCl7dmFyIGE9dGhpcy5zbGlkZXMuZXEodCksaT1SLnNsdWdpZnkoYS5hdHRyKFwiZGF0YS1oaXN0b3J5XCIpKTtKLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGUpfHwoaT1lK1wiL1wiK2kpO3ZhciBzPUouaGlzdG9yeS5zdGF0ZTtzJiZzLnZhbHVlPT09aXx8KHRoaXMucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlP0ouaGlzdG9yeS5yZXBsYWNlU3RhdGUoe3ZhbHVlOml9LG51bGwsaSk6Si5oaXN0b3J5LnB1c2hTdGF0ZSh7dmFsdWU6aX0sbnVsbCxpKSl9fSxzbHVnaWZ5OmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzKy9nLFwiLVwiKS5yZXBsYWNlKC9bXlxcdy1dKy9nLFwiXCIpLnJlcGxhY2UoLy0tKy9nLFwiLVwiKS5yZXBsYWNlKC9eLSsvLFwiXCIpLnJlcGxhY2UoLy0rJC8sXCJcIil9LHNjcm9sbFRvU2xpZGU6ZnVuY3Rpb24oZSx0LGEpe3ZhciBpPXRoaXM7aWYodClmb3IodmFyIHM9MCxyPWkuc2xpZGVzLmxlbmd0aDtzPHI7cys9MSl7dmFyIG49aS5zbGlkZXMuZXEocyk7aWYoUi5zbHVnaWZ5KG4uYXR0cihcImRhdGEtaGlzdG9yeVwiKSk9PT10JiYhbi5oYXNDbGFzcyhpLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSl7dmFyIG89bi5pbmRleCgpO2kuc2xpZGVUbyhvLGUsYSl9fWVsc2UgaS5zbGlkZVRvKDAsZSxhKX19LHE9e29uSGFzaENhbmdlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWYubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLFwiXCIpO2lmKHQhPT1lLnNsaWRlcy5lcShlLmFjdGl2ZUluZGV4KS5hdHRyKFwiZGF0YS1oYXNoXCIpKXt2YXIgYT1lLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIrZS5wYXJhbXMuc2xpZGVDbGFzcysnW2RhdGEtaGFzaD1cIicrdCsnXCJdJykuaW5kZXgoKTtpZih2b2lkIDA9PT1hKXJldHVybjtlLnNsaWRlVG8oYSl9fSxzZXRIYXNoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihlLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkJiZlLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKWlmKGUucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZSYmSi5oaXN0b3J5JiZKLmhpc3RvcnkucmVwbGFjZVN0YXRlKUouaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCxudWxsLFwiI1wiK2Uuc2xpZGVzLmVxKGUuYWN0aXZlSW5kZXgpLmF0dHIoXCJkYXRhLWhhc2hcIil8fFwiXCIpO2Vsc2V7dmFyIHQ9ZS5zbGlkZXMuZXEoZS5hY3RpdmVJbmRleCksYT10LmF0dHIoXCJkYXRhLWhhc2hcIil8fHQuYXR0cihcImRhdGEtaGlzdG9yeVwiKTtmLmxvY2F0aW9uLmhhc2g9YXx8XCJcIn19LGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCEoIWUucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWR8fGUucGFyYW1zLmhpc3RvcnkmJmUucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkpe2UuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQ9ITA7dmFyIHQ9Zi5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsXCJcIik7aWYodClmb3IodmFyIGE9MCxpPWUuc2xpZGVzLmxlbmd0aDthPGk7YSs9MSl7dmFyIHM9ZS5zbGlkZXMuZXEoYSk7aWYoKHMuYXR0cihcImRhdGEtaGFzaFwiKXx8cy5hdHRyKFwiZGF0YS1oaXN0b3J5XCIpKT09PXQmJiFzLmhhc0NsYXNzKGUucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKXt2YXIgcj1zLmluZGV4KCk7ZS5zbGlkZVRvKHIsMCxlLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsITApfX1lLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlJiZMKEopLm9uKFwiaGFzaGNoYW5nZVwiLGUuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUmJkwoSikub2ZmKFwiaGFzaGNoYW5nZVwiLHRoaXMuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpfX0sVz17cnVuOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuc2xpZGVzLmVxKGUuYWN0aXZlSW5kZXgpLGE9ZS5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7dC5hdHRyKFwiZGF0YS1zd2lwZXItYXV0b3BsYXlcIikmJihhPXQuYXR0cihcImRhdGEtc3dpcGVyLWF1dG9wbGF5XCIpfHxlLnBhcmFtcy5hdXRvcGxheS5kZWxheSksZS5hdXRvcGxheS50aW1lb3V0PWVlLm5leHRUaWNrKGZ1bmN0aW9uKCl7ZS5wYXJhbXMuYXV0b3BsYXkucmV2ZXJzZURpcmVjdGlvbj9lLnBhcmFtcy5sb29wPyhlLmxvb3BGaXgoKSxlLnNsaWRlUHJldihlLnBhcmFtcy5zcGVlZCwhMCwhMCksZS5lbWl0KFwiYXV0b3BsYXlcIikpOmUuaXNCZWdpbm5pbmc/ZS5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlP2UuYXV0b3BsYXkuc3RvcCgpOihlLnNsaWRlVG8oZS5zbGlkZXMubGVuZ3RoLTEsZS5wYXJhbXMuc3BlZWQsITAsITApLGUuZW1pdChcImF1dG9wbGF5XCIpKTooZS5zbGlkZVByZXYoZS5wYXJhbXMuc3BlZWQsITAsITApLGUuZW1pdChcImF1dG9wbGF5XCIpKTplLnBhcmFtcy5sb29wPyhlLmxvb3BGaXgoKSxlLnNsaWRlTmV4dChlLnBhcmFtcy5zcGVlZCwhMCwhMCksZS5lbWl0KFwiYXV0b3BsYXlcIikpOmUuaXNFbmQ/ZS5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlP2UuYXV0b3BsYXkuc3RvcCgpOihlLnNsaWRlVG8oMCxlLnBhcmFtcy5zcGVlZCwhMCwhMCksZS5lbWl0KFwiYXV0b3BsYXlcIikpOihlLnNsaWRlTmV4dChlLnBhcmFtcy5zcGVlZCwhMCwhMCksZS5lbWl0KFwiYXV0b3BsYXlcIikpfSxhKX0sc3RhcnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB2b2lkIDA9PT1lLmF1dG9wbGF5LnRpbWVvdXQmJighZS5hdXRvcGxheS5ydW5uaW5nJiYoZS5hdXRvcGxheS5ydW5uaW5nPSEwLGUuZW1pdChcImF1dG9wbGF5U3RhcnRcIiksZS5hdXRvcGxheS5ydW4oKSwhMCkpfSxzdG9wOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4hIWUuYXV0b3BsYXkucnVubmluZyYmKHZvaWQgMCE9PWUuYXV0b3BsYXkudGltZW91dCYmKGUuYXV0b3BsYXkudGltZW91dCYmKGNsZWFyVGltZW91dChlLmF1dG9wbGF5LnRpbWVvdXQpLGUuYXV0b3BsYXkudGltZW91dD12b2lkIDApLGUuYXV0b3BsYXkucnVubmluZz0hMSxlLmVtaXQoXCJhdXRvcGxheVN0b3BcIiksITApKX0scGF1c2U6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0LmF1dG9wbGF5LnJ1bm5pbmcmJih0LmF1dG9wbGF5LnBhdXNlZHx8KHQuYXV0b3BsYXkudGltZW91dCYmY2xlYXJUaW1lb3V0KHQuYXV0b3BsYXkudGltZW91dCksdC5hdXRvcGxheS5wYXVzZWQ9ITAsMCE9PWUmJnQucGFyYW1zLmF1dG9wbGF5LndhaXRGb3JUcmFuc2l0aW9uPyh0LiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0LmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCksdC4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsdC5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpKToodC5hdXRvcGxheS5wYXVzZWQ9ITEsdC5hdXRvcGxheS5ydW4oKSkpKX19LGo9e3NldFRyYW5zbGF0ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9ZS5zbGlkZXMsYT0wO2E8dC5sZW5ndGg7YSs9MSl7dmFyIGk9ZS5zbGlkZXMuZXEoYSkscz0taVswXS5zd2lwZXJTbGlkZU9mZnNldDtlLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlfHwocy09ZS50cmFuc2xhdGUpO3ZhciByPTA7ZS5pc0hvcml6b250YWwoKXx8KHI9cyxzPTApO3ZhciBuPWUucGFyYW1zLmZhZGVFZmZlY3QuY3Jvc3NGYWRlP01hdGgubWF4KDEtTWF0aC5hYnMoaVswXS5wcm9ncmVzcyksMCk6MStNYXRoLm1pbihNYXRoLm1heChpWzBdLnByb2dyZXNzLC0xKSwwKTtpLmNzcyh7b3BhY2l0eTpufSkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrcytcInB4LCBcIityK1wicHgsIDBweClcIil9fSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXMsdD1hLnNsaWRlcyxpPWEuJHdyYXBwZXJFbDtpZih0LnRyYW5zaXRpb24oZSksYS5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSYmMCE9PWUpe3ZhciBzPSExO3QudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe2lmKCFzJiZhJiYhYS5kZXN0cm95ZWQpe3M9ITAsYS5hbmltYXRpbmc9ITE7Zm9yKHZhciBlPVtcIndlYmtpdFRyYW5zaXRpb25FbmRcIixcInRyYW5zaXRpb25lbmRcIl0sdD0wO3Q8ZS5sZW5ndGg7dCs9MSlpLnRyaWdnZXIoZVt0XSl9fSl9fX0sVT17c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzLGE9dC4kZWwsaT10LiR3cmFwcGVyRWwscz10LnNsaWRlcyxyPXQud2lkdGgsbj10LmhlaWdodCxvPXQucnRsVHJhbnNsYXRlLGw9dC5zaXplLGQ9dC5wYXJhbXMuY3ViZUVmZmVjdCxwPXQuaXNIb3Jpem9udGFsKCksYz10LnZpcnR1YWwmJnQucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCx1PTA7ZC5zaGFkb3cmJihwPygwPT09KGU9aS5maW5kKFwiLnN3aXBlci1jdWJlLXNoYWRvd1wiKSkubGVuZ3RoJiYoZT1MKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+JyksaS5hcHBlbmQoZSkpLGUuY3NzKHtoZWlnaHQ6citcInB4XCJ9KSk6MD09PShlPWEuZmluZChcIi5zd2lwZXItY3ViZS1zaGFkb3dcIikpLmxlbmd0aCYmKGU9TCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpLGEuYXBwZW5kKGUpKSk7Zm9yKHZhciBoPTA7aDxzLmxlbmd0aDtoKz0xKXt2YXIgdj1zLmVxKGgpLGY9aDtjJiYoZj1wYXJzZUludCh2LmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwxMCkpO3ZhciBtPTkwKmYsZz1NYXRoLmZsb29yKG0vMzYwKTtvJiYobT0tbSxnPU1hdGguZmxvb3IoLW0vMzYwKSk7dmFyIGI9TWF0aC5tYXgoTWF0aC5taW4odlswXS5wcm9ncmVzcywxKSwtMSksdz0wLHk9MCx4PTA7ZiU0PT0wPyh3PTQqLWcqbCx4PTApOihmLTEpJTQ9PTA/KHc9MCx4PTQqLWcqbCk6KGYtMiklND09MD8odz1sKzQqZypsLHg9bCk6KGYtMyklND09MCYmKHc9LWwseD0zKmwrNCpsKmcpLG8mJih3PS13KSxwfHwoeT13LHc9MCk7dmFyIFQ9XCJyb3RhdGVYKFwiKyhwPzA6LW0pK1wiZGVnKSByb3RhdGVZKFwiKyhwP206MCkrXCJkZWcpIHRyYW5zbGF0ZTNkKFwiK3crXCJweCwgXCIreStcInB4LCBcIit4K1wicHgpXCI7aWYoYjw9MSYmLTE8YiYmKHU9OTAqZis5MCpiLG8mJih1PTkwKi1mLTkwKmIpKSx2LnRyYW5zZm9ybShUKSxkLnNsaWRlU2hhZG93cyl7dmFyIEU9cD92LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpOnYuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcFwiKSxTPXA/di5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHRcIik6di5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tXCIpOzA9PT1FLmxlbmd0aCYmKEU9TCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysocD9cImxlZnRcIjpcInRvcFwiKSsnXCI+PC9kaXY+Jyksdi5hcHBlbmQoRSkpLDA9PT1TLmxlbmd0aCYmKFM9TCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysocD9cInJpZ2h0XCI6XCJib3R0b21cIikrJ1wiPjwvZGl2PicpLHYuYXBwZW5kKFMpKSxFLmxlbmd0aCYmKEVbMF0uc3R5bGUub3BhY2l0eT1NYXRoLm1heCgtYiwwKSksUy5sZW5ndGgmJihTWzBdLnN0eWxlLm9wYWNpdHk9TWF0aC5tYXgoYiwwKSl9fWlmKGkuY3NzKHtcIi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIrbC8yK1wicHhcIixcIi1tb3otdHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIrbC8yK1wicHhcIixcIi1tcy10cmFuc2Zvcm0tb3JpZ2luXCI6XCI1MCUgNTAlIC1cIitsLzIrXCJweFwiLFwidHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIrbC8yK1wicHhcIn0pLGQuc2hhZG93KWlmKHApZS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsIFwiKyhyLzIrZC5zaGFkb3dPZmZzZXQpK1wicHgsIFwiKy1yLzIrXCJweCkgcm90YXRlWCg5MGRlZykgcm90YXRlWigwZGVnKSBzY2FsZShcIitkLnNoYWRvd1NjYWxlK1wiKVwiKTtlbHNle3ZhciBDPU1hdGguYWJzKHUpLTkwKk1hdGguZmxvb3IoTWF0aC5hYnModSkvOTApLE09MS41LShNYXRoLnNpbigyKkMqTWF0aC5QSS8zNjApLzIrTWF0aC5jb3MoMipDKk1hdGguUEkvMzYwKS8yKSx6PWQuc2hhZG93U2NhbGUsUD1kLnNoYWRvd1NjYWxlL00saz1kLnNoYWRvd09mZnNldDtlLnRyYW5zZm9ybShcInNjYWxlM2QoXCIreitcIiwgMSwgXCIrUCtcIikgdHJhbnNsYXRlM2QoMHB4LCBcIisobi8yK2spK1wicHgsIFwiKy1uLzIvUCtcInB4KSByb3RhdGVYKC05MGRlZylcIil9dmFyICQ9SS5pc1NhZmFyaXx8SS5pc1VpV2ViVmlldz8tbC8yOjA7aS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsMCxcIiskK1wicHgpIHJvdGF0ZVgoXCIrKHQuaXNIb3Jpem9udGFsKCk/MDp1KStcImRlZykgcm90YXRlWShcIisodC5pc0hvcml6b250YWwoKT8tdTowKStcImRlZylcIil9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy4kZWw7dGhpcy5zbGlkZXMudHJhbnNpdGlvbihlKS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpLnRyYW5zaXRpb24oZSksdGhpcy5wYXJhbXMuY3ViZUVmZmVjdC5zaGFkb3cmJiF0aGlzLmlzSG9yaXpvbnRhbCgpJiZ0LmZpbmQoXCIuc3dpcGVyLWN1YmUtc2hhZG93XCIpLnRyYW5zaXRpb24oZSl9fSxLPXtzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PWUuc2xpZGVzLGE9ZS5ydGxUcmFuc2xhdGUsaT0wO2k8dC5sZW5ndGg7aSs9MSl7dmFyIHM9dC5lcShpKSxyPXNbMF0ucHJvZ3Jlc3M7ZS5wYXJhbXMuZmxpcEVmZmVjdC5saW1pdFJvdGF0aW9uJiYocj1NYXRoLm1heChNYXRoLm1pbihzWzBdLnByb2dyZXNzLDEpLC0xKSk7dmFyIG49LTE4MCpyLG89MCxsPS1zWzBdLnN3aXBlclNsaWRlT2Zmc2V0LGQ9MDtpZihlLmlzSG9yaXpvbnRhbCgpP2EmJihuPS1uKTooZD1sLG89LW4sbj1sPTApLHNbMF0uc3R5bGUuekluZGV4PS1NYXRoLmFicyhNYXRoLnJvdW5kKHIpKSt0Lmxlbmd0aCxlLnBhcmFtcy5mbGlwRWZmZWN0LnNsaWRlU2hhZG93cyl7dmFyIHA9ZS5pc0hvcml6b250YWwoKT9zLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpOnMuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcFwiKSxjPWUuaXNIb3Jpem9udGFsKCk/cy5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHRcIik6cy5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tXCIpOzA9PT1wLmxlbmd0aCYmKHA9TCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysoZS5pc0hvcml6b250YWwoKT9cImxlZnRcIjpcInRvcFwiKSsnXCI+PC9kaXY+Jykscy5hcHBlbmQocCkpLDA9PT1jLmxlbmd0aCYmKGM9TCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysoZS5pc0hvcml6b250YWwoKT9cInJpZ2h0XCI6XCJib3R0b21cIikrJ1wiPjwvZGl2PicpLHMuYXBwZW5kKGMpKSxwLmxlbmd0aCYmKHBbMF0uc3R5bGUub3BhY2l0eT1NYXRoLm1heCgtciwwKSksYy5sZW5ndGgmJihjWzBdLnN0eWxlLm9wYWNpdHk9TWF0aC5tYXgociwwKSl9cy50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIitsK1wicHgsIFwiK2QrXCJweCwgMHB4KSByb3RhdGVYKFwiK28rXCJkZWcpIHJvdGF0ZVkoXCIrbitcImRlZylcIil9fSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXMsdD1hLnNsaWRlcyxpPWEuYWN0aXZlSW5kZXgscz1hLiR3cmFwcGVyRWw7aWYodC50cmFuc2l0aW9uKGUpLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikudHJhbnNpdGlvbihlKSxhLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlJiYwIT09ZSl7dmFyIHI9ITE7dC5lcShpKS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7aWYoIXImJmEmJiFhLmRlc3Ryb3llZCl7cj0hMCxhLmFuaW1hdGluZz0hMTtmb3IodmFyIGU9W1wid2Via2l0VHJhbnNpdGlvbkVuZFwiLFwidHJhbnNpdGlvbmVuZFwiXSx0PTA7dDxlLmxlbmd0aDt0Kz0xKXMudHJpZ2dlcihlW3RdKX19KX19fSxfPXtzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PWUud2lkdGgsYT1lLmhlaWdodCxpPWUuc2xpZGVzLHM9ZS4kd3JhcHBlckVsLHI9ZS5zbGlkZXNTaXplc0dyaWQsbj1lLnBhcmFtcy5jb3ZlcmZsb3dFZmZlY3Qsbz1lLmlzSG9yaXpvbnRhbCgpLGw9ZS50cmFuc2xhdGUsZD1vP3QvMi1sOmEvMi1sLHA9bz9uLnJvdGF0ZTotbi5yb3RhdGUsYz1uLmRlcHRoLHU9MCxoPWkubGVuZ3RoO3U8aDt1Kz0xKXt2YXIgdj1pLmVxKHUpLGY9clt1XSxtPShkLXZbMF0uc3dpcGVyU2xpZGVPZmZzZXQtZi8yKS9mKm4ubW9kaWZpZXIsZz1vP3AqbTowLGI9bz8wOnAqbSx3PS1jKk1hdGguYWJzKG0pLHk9bz8wOm4uc3RyZXRjaCptLHg9bz9uLnN0cmV0Y2gqbTowO01hdGguYWJzKHgpPC4wMDEmJih4PTApLE1hdGguYWJzKHkpPC4wMDEmJih5PTApLE1hdGguYWJzKHcpPC4wMDEmJih3PTApLE1hdGguYWJzKGcpPC4wMDEmJihnPTApLE1hdGguYWJzKGIpPC4wMDEmJihiPTApO3ZhciBUPVwidHJhbnNsYXRlM2QoXCIreCtcInB4LFwiK3krXCJweCxcIit3K1wicHgpICByb3RhdGVYKFwiK2IrXCJkZWcpIHJvdGF0ZVkoXCIrZytcImRlZylcIjtpZih2LnRyYW5zZm9ybShUKSx2WzBdLnN0eWxlLnpJbmRleD0xLU1hdGguYWJzKE1hdGgucm91bmQobSkpLG4uc2xpZGVTaGFkb3dzKXt2YXIgRT1vP3YuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIik6di5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLFM9bz92LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiKTp2LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIik7MD09PUUubGVuZ3RoJiYoRT1MKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyhvP1wibGVmdFwiOlwidG9wXCIpKydcIj48L2Rpdj4nKSx2LmFwcGVuZChFKSksMD09PVMubGVuZ3RoJiYoUz1MKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyhvP1wicmlnaHRcIjpcImJvdHRvbVwiKSsnXCI+PC9kaXY+Jyksdi5hcHBlbmQoUykpLEUubGVuZ3RoJiYoRVswXS5zdHlsZS5vcGFjaXR5PTA8bT9tOjApLFMubGVuZ3RoJiYoU1swXS5zdHlsZS5vcGFjaXR5PTA8LW0/LW06MCl9fSh0ZS5wb2ludGVyRXZlbnRzfHx0ZS5wcmVmaXhlZFBvaW50ZXJFdmVudHMpJiYoc1swXS5zdHlsZS5wZXJzcGVjdGl2ZU9yaWdpbj1kK1wicHggNTAlXCIpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3RoaXMuc2xpZGVzLnRyYW5zaXRpb24oZSkuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKS50cmFuc2l0aW9uKGUpfX0sWj17aW5pdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcy50aHVtYnMsYT1lLmNvbnN0cnVjdG9yO3Quc3dpcGVyIGluc3RhbmNlb2YgYT8oZS50aHVtYnMuc3dpcGVyPXQuc3dpcGVyLGVlLmV4dGVuZChlLnRodW1icy5zd2lwZXIub3JpZ2luYWxQYXJhbXMse3dhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc2xpZGVUb0NsaWNrZWRTbGlkZTohMX0pLGVlLmV4dGVuZChlLnRodW1icy5zd2lwZXIucGFyYW1zLHt3YXRjaFNsaWRlc1Byb2dyZXNzOiEwLHNsaWRlVG9DbGlja2VkU2xpZGU6ITF9KSk6ZWUuaXNPYmplY3QodC5zd2lwZXIpJiYoZS50aHVtYnMuc3dpcGVyPW5ldyBhKGVlLmV4dGVuZCh7fSx0LnN3aXBlcix7d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiEwLHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc2xpZGVUb0NsaWNrZWRTbGlkZTohMX0pKSxlLnRodW1icy5zd2lwZXJDcmVhdGVkPSEwKSxlLnRodW1icy5zd2lwZXIuJGVsLmFkZENsYXNzKGUucGFyYW1zLnRodW1icy50aHVtYnNDb250YWluZXJDbGFzcyksZS50aHVtYnMuc3dpcGVyLm9uKFwidGFwXCIsZS50aHVtYnMub25UaHVtYkNsaWNrKX0sb25UaHVtYkNsaWNrOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUudGh1bWJzLnN3aXBlcjtpZih0KXt2YXIgYT10LmNsaWNrZWRJbmRleCxpPXQuY2xpY2tlZFNsaWRlO2lmKCEoaSYmTChpKS5oYXNDbGFzcyhlLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzKXx8bnVsbD09YSkpe3ZhciBzO2lmKHM9dC5wYXJhbXMubG9vcD9wYXJzZUludChMKHQuY2xpY2tlZFNsaWRlKS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIiksMTApOmEsZS5wYXJhbXMubG9vcCl7dmFyIHI9ZS5hY3RpdmVJbmRleDtlLnNsaWRlcy5lcShyKS5oYXNDbGFzcyhlLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSYmKGUubG9vcEZpeCgpLGUuX2NsaWVudExlZnQ9ZS4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQscj1lLmFjdGl2ZUluZGV4KTt2YXIgbj1lLnNsaWRlcy5lcShyKS5wcmV2QWxsKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3MrJ1wiXScpLmVxKDApLmluZGV4KCksbz1lLnNsaWRlcy5lcShyKS5uZXh0QWxsKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3MrJ1wiXScpLmVxKDApLmluZGV4KCk7cz12b2lkIDA9PT1uP286dm9pZCAwPT09bz9uOm8tcjxyLW4/bzpufWUuc2xpZGVUbyhzKX19fSx1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxhPXQudGh1bWJzLnN3aXBlcjtpZihhKXt2YXIgaT1cImF1dG9cIj09PWEucGFyYW1zLnNsaWRlc1BlclZpZXc/YS5zbGlkZXNQZXJWaWV3RHluYW1pYygpOmEucGFyYW1zLnNsaWRlc1BlclZpZXc7aWYodC5yZWFsSW5kZXghPT1hLnJlYWxJbmRleCl7dmFyIHMscj1hLmFjdGl2ZUluZGV4O2lmKGEucGFyYW1zLmxvb3Ape2Euc2xpZGVzLmVxKHIpLmhhc0NsYXNzKGEucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpJiYoYS5sb29wRml4KCksYS5fY2xpZW50TGVmdD1hLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdCxyPWEuYWN0aXZlSW5kZXgpO3ZhciBuPWEuc2xpZGVzLmVxKHIpLnByZXZBbGwoJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrdC5yZWFsSW5kZXgrJ1wiXScpLmVxKDApLmluZGV4KCksbz1hLnNsaWRlcy5lcShyKS5uZXh0QWxsKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3QucmVhbEluZGV4KydcIl0nKS5lcSgwKS5pbmRleCgpO3M9dm9pZCAwPT09bj9vOnZvaWQgMD09PW8/bjpvLXI9PXItbj9yOm8tcjxyLW4/bzpufWVsc2Ugcz10LnJlYWxJbmRleDthLnZpc2libGVTbGlkZXNJbmRleGVzLmluZGV4T2Yocyk8MCYmKGEucGFyYW1zLmNlbnRlcmVkU2xpZGVzP3M9cjxzP3MtTWF0aC5mbG9vcihpLzIpKzE6cytNYXRoLmZsb29yKGkvMiktMTpyPHMmJihzPXMtaSsxKSxhLnNsaWRlVG8ocyxlPzA6dm9pZCAwKSl9dmFyIGw9MSxkPXQucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3M7aWYoMTx0LnBhcmFtcy5zbGlkZXNQZXJWaWV3JiYhdC5wYXJhbXMuY2VudGVyZWRTbGlkZXMmJihsPXQucGFyYW1zLnNsaWRlc1BlclZpZXcpLGEuc2xpZGVzLnJlbW92ZUNsYXNzKGQpLGEucGFyYW1zLmxvb3ApZm9yKHZhciBwPTA7cDxsO3ArPTEpYS4kd3JhcHBlckVsLmNoaWxkcmVuKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInKyh0LnJlYWxJbmRleCtwKSsnXCJdJykuYWRkQ2xhc3MoZCk7ZWxzZSBmb3IodmFyIGM9MDtjPGw7Yys9MSlhLnNsaWRlcy5lcSh0LnJlYWxJbmRleCtjKS5hZGRDbGFzcyhkKX19fSxRPVtFLFMsQyxNLFAsJCxPLHtuYW1lOlwibW91c2V3aGVlbFwiLHBhcmFtczp7bW91c2V3aGVlbDp7ZW5hYmxlZDohMSxyZWxlYXNlT25FZGdlczohMSxpbnZlcnQ6ITEsZm9yY2VUb0F4aXM6ITEsc2Vuc2l0aXZpdHk6MSxldmVudHNUYXJnZWQ6XCJjb250YWluZXJcIn19LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZWUuZXh0ZW5kKGUse21vdXNld2hlZWw6e2VuYWJsZWQ6ITEsZW5hYmxlOkEuZW5hYmxlLmJpbmQoZSksZGlzYWJsZTpBLmRpc2FibGUuYmluZChlKSxoYW5kbGU6QS5oYW5kbGUuYmluZChlKSxoYW5kbGVNb3VzZUVudGVyOkEuaGFuZGxlTW91c2VFbnRlci5iaW5kKGUpLGhhbmRsZU1vdXNlTGVhdmU6QS5oYW5kbGVNb3VzZUxlYXZlLmJpbmQoZSksbGFzdFNjcm9sbFRpbWU6ZWUubm93KCl9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkJiZ0aGlzLm1vdXNld2hlZWwuZW5hYmxlKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLm1vdXNld2hlZWwuZW5hYmxlZCYmdGhpcy5tb3VzZXdoZWVsLmRpc2FibGUoKX19fSx7bmFtZTpcIm5hdmlnYXRpb25cIixwYXJhbXM6e25hdmlnYXRpb246e25leHRFbDpudWxsLHByZXZFbDpudWxsLGhpZGVPbkNsaWNrOiExLGRpc2FibGVkQ2xhc3M6XCJzd2lwZXItYnV0dG9uLWRpc2FibGVkXCIsaGlkZGVuQ2xhc3M6XCJzd2lwZXItYnV0dG9uLWhpZGRlblwiLGxvY2tDbGFzczpcInN3aXBlci1idXR0b24tbG9ja1wifX0sY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlZS5leHRlbmQoZSx7bmF2aWdhdGlvbjp7aW5pdDpILmluaXQuYmluZChlKSx1cGRhdGU6SC51cGRhdGUuYmluZChlKSxkZXN0cm95OkguZGVzdHJveS5iaW5kKGUpLG9uTmV4dENsaWNrOkgub25OZXh0Q2xpY2suYmluZChlKSxvblByZXZDbGljazpILm9uUHJldkNsaWNrLmJpbmQoZSl9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5uYXZpZ2F0aW9uLmluaXQoKSx0aGlzLm5hdmlnYXRpb24udXBkYXRlKCl9LHRvRWRnZTpmdW5jdGlvbigpe3RoaXMubmF2aWdhdGlvbi51cGRhdGUoKX0sZnJvbUVkZ2U6ZnVuY3Rpb24oKXt0aGlzLm5hdmlnYXRpb24udXBkYXRlKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLm5hdmlnYXRpb24uZGVzdHJveSgpfSxjbGljazpmdW5jdGlvbihlKXt2YXIgdCxhPXRoaXMsaT1hLm5hdmlnYXRpb24scz1pLiRuZXh0RWwscj1pLiRwcmV2RWw7IWEucGFyYW1zLm5hdmlnYXRpb24uaGlkZU9uQ2xpY2t8fEwoZS50YXJnZXQpLmlzKHIpfHxMKGUudGFyZ2V0KS5pcyhzKXx8KHM/dD1zLmhhc0NsYXNzKGEucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpOnImJih0PXIuaGFzQ2xhc3MoYS5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykpLCEwPT09dD9hLmVtaXQoXCJuYXZpZ2F0aW9uU2hvd1wiLGEpOmEuZW1pdChcIm5hdmlnYXRpb25IaWRlXCIsYSkscyYmcy50b2dnbGVDbGFzcyhhLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKSxyJiZyLnRvZ2dsZUNsYXNzKGEucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpKX19fSx7bmFtZTpcInBhZ2luYXRpb25cIixwYXJhbXM6e3BhZ2luYXRpb246e2VsOm51bGwsYnVsbGV0RWxlbWVudDpcInNwYW5cIixjbGlja2FibGU6ITEsaGlkZU9uQ2xpY2s6ITEscmVuZGVyQnVsbGV0Om51bGwscmVuZGVyUHJvZ3Jlc3NiYXI6bnVsbCxyZW5kZXJGcmFjdGlvbjpudWxsLHJlbmRlckN1c3RvbTpudWxsLHByb2dyZXNzYmFyT3Bwb3NpdGU6ITEsdHlwZTpcImJ1bGxldHNcIixkeW5hbWljQnVsbGV0czohMSxkeW5hbWljTWFpbkJ1bGxldHM6MSxmb3JtYXRGcmFjdGlvbkN1cnJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGZvcm1hdEZyYWN0aW9uVG90YWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGJ1bGxldENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0XCIsYnVsbGV0QWN0aXZlQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCIsbW9kaWZpZXJDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLVwiLGN1cnJlbnRDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnRcIix0b3RhbENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tdG90YWxcIixoaWRkZW5DbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWhpZGRlblwiLHByb2dyZXNzYmFyRmlsbENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbFwiLHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlXCIsY2xpY2thYmxlQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIixsb2NrQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1sb2NrXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2VlLmV4dGVuZChlLHtwYWdpbmF0aW9uOntpbml0Ok4uaW5pdC5iaW5kKGUpLHJlbmRlcjpOLnJlbmRlci5iaW5kKGUpLHVwZGF0ZTpOLnVwZGF0ZS5iaW5kKGUpLGRlc3Ryb3k6Ti5kZXN0cm95LmJpbmQoZSksZHluYW1pY0J1bGxldEluZGV4OjB9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYWdpbmF0aW9uLmluaXQoKSx0aGlzLnBhZ2luYXRpb24ucmVuZGVyKCksdGhpcy5wYWdpbmF0aW9uLnVwZGF0ZSgpfSxhY3RpdmVJbmRleENoYW5nZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxvb3A/dGhpcy5wYWdpbmF0aW9uLnVwZGF0ZSgpOnZvaWQgMD09PXRoaXMuc25hcEluZGV4JiZ0aGlzLnBhZ2luYXRpb24udXBkYXRlKCl9LHNuYXBJbmRleENoYW5nZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxvb3B8fHRoaXMucGFnaW5hdGlvbi51cGRhdGUoKX0sc2xpZGVzTGVuZ3RoQ2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubG9vcCYmKHRoaXMucGFnaW5hdGlvbi5yZW5kZXIoKSx0aGlzLnBhZ2luYXRpb24udXBkYXRlKCkpfSxzbmFwR3JpZExlbmd0aENoYW5nZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxvb3B8fCh0aGlzLnBhZ2luYXRpb24ucmVuZGVyKCksdGhpcy5wYWdpbmF0aW9uLnVwZGF0ZSgpKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFnaW5hdGlvbi5kZXN0cm95KCl9LGNsaWNrOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5wYXJhbXMucGFnaW5hdGlvbi5lbCYmdC5wYXJhbXMucGFnaW5hdGlvbi5oaWRlT25DbGljayYmMDx0LnBhZ2luYXRpb24uJGVsLmxlbmd0aCYmIUwoZS50YXJnZXQpLmhhc0NsYXNzKHQucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpJiYoITA9PT10LnBhZ2luYXRpb24uJGVsLmhhc0NsYXNzKHQucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpP3QuZW1pdChcInBhZ2luYXRpb25TaG93XCIsdCk6dC5lbWl0KFwicGFnaW5hdGlvbkhpZGVcIix0KSx0LnBhZ2luYXRpb24uJGVsLnRvZ2dsZUNsYXNzKHQucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpKX19fSx7bmFtZTpcInNjcm9sbGJhclwiLHBhcmFtczp7c2Nyb2xsYmFyOntlbDpudWxsLGRyYWdTaXplOlwiYXV0b1wiLGhpZGU6ITEsZHJhZ2dhYmxlOiExLHNuYXBPblJlbGVhc2U6ITAsbG9ja0NsYXNzOlwic3dpcGVyLXNjcm9sbGJhci1sb2NrXCIsZHJhZ0NsYXNzOlwic3dpcGVyLXNjcm9sbGJhci1kcmFnXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2VlLmV4dGVuZChlLHtzY3JvbGxiYXI6e2luaXQ6Ry5pbml0LmJpbmQoZSksZGVzdHJveTpHLmRlc3Ryb3kuYmluZChlKSx1cGRhdGVTaXplOkcudXBkYXRlU2l6ZS5iaW5kKGUpLHNldFRyYW5zbGF0ZTpHLnNldFRyYW5zbGF0ZS5iaW5kKGUpLHNldFRyYW5zaXRpb246Ry5zZXRUcmFuc2l0aW9uLmJpbmQoZSksZW5hYmxlRHJhZ2dhYmxlOkcuZW5hYmxlRHJhZ2dhYmxlLmJpbmQoZSksZGlzYWJsZURyYWdnYWJsZTpHLmRpc2FibGVEcmFnZ2FibGUuYmluZChlKSxzZXREcmFnUG9zaXRpb246Ry5zZXREcmFnUG9zaXRpb24uYmluZChlKSxvbkRyYWdTdGFydDpHLm9uRHJhZ1N0YXJ0LmJpbmQoZSksb25EcmFnTW92ZTpHLm9uRHJhZ01vdmUuYmluZChlKSxvbkRyYWdFbmQ6Ry5vbkRyYWdFbmQuYmluZChlKSxpc1RvdWNoZWQ6ITEsdGltZW91dDpudWxsLGRyYWdUaW1lb3V0Om51bGx9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIuaW5pdCgpLHRoaXMuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKSx0aGlzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpfSxyZXNpemU6ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbGJhci51cGRhdGVTaXplKCl9LG9ic2VydmVyVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt0aGlzLnNjcm9sbGJhci5zZXRUcmFuc2l0aW9uKGUpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIuZGVzdHJveSgpfX19LHtuYW1lOlwicGFyYWxsYXhcIixwYXJhbXM6e3BhcmFsbGF4OntlbmFibGVkOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7ZWUuZXh0ZW5kKHRoaXMse3BhcmFsbGF4OntzZXRUcmFuc2Zvcm06Qi5zZXRUcmFuc2Zvcm0uYmluZCh0aGlzKSxzZXRUcmFuc2xhdGU6Qi5zZXRUcmFuc2xhdGUuYmluZCh0aGlzKSxzZXRUcmFuc2l0aW9uOkIuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQmJih0aGlzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzPSEwLHRoaXMub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcz0hMCl9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkJiZ0aGlzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkJiZ0aGlzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3RoaXMucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQmJnRoaXMucGFyYWxsYXguc2V0VHJhbnNpdGlvbihlKX19fSx7bmFtZTpcInpvb21cIixwYXJhbXM6e3pvb206e2VuYWJsZWQ6ITEsbWF4UmF0aW86MyxtaW5SYXRpbzoxLHRvZ2dsZTohMCxjb250YWluZXJDbGFzczpcInN3aXBlci16b29tLWNvbnRhaW5lclwiLHpvb21lZFNsaWRlQ2xhc3M6XCJzd2lwZXItc2xpZGUtem9vbWVkXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLHQ9e2VuYWJsZWQ6ITEsc2NhbGU6MSxjdXJyZW50U2NhbGU6MSxpc1NjYWxpbmc6ITEsZ2VzdHVyZTp7JHNsaWRlRWw6dm9pZCAwLHNsaWRlV2lkdGg6dm9pZCAwLHNsaWRlSGVpZ2h0OnZvaWQgMCwkaW1hZ2VFbDp2b2lkIDAsJGltYWdlV3JhcEVsOnZvaWQgMCxtYXhSYXRpbzozfSxpbWFnZTp7aXNUb3VjaGVkOnZvaWQgMCxpc01vdmVkOnZvaWQgMCxjdXJyZW50WDp2b2lkIDAsY3VycmVudFk6dm9pZCAwLG1pblg6dm9pZCAwLG1pblk6dm9pZCAwLG1heFg6dm9pZCAwLG1heFk6dm9pZCAwLHdpZHRoOnZvaWQgMCxoZWlnaHQ6dm9pZCAwLHN0YXJ0WDp2b2lkIDAsc3RhcnRZOnZvaWQgMCx0b3VjaGVzU3RhcnQ6e30sdG91Y2hlc0N1cnJlbnQ6e319LHZlbG9jaXR5Ont4OnZvaWQgMCx5OnZvaWQgMCxwcmV2UG9zaXRpb25YOnZvaWQgMCxwcmV2UG9zaXRpb25ZOnZvaWQgMCxwcmV2VGltZTp2b2lkIDB9fTtcIm9uR2VzdHVyZVN0YXJ0IG9uR2VzdHVyZUNoYW5nZSBvbkdlc3R1cmVFbmQgb25Ub3VjaFN0YXJ0IG9uVG91Y2hNb3ZlIG9uVG91Y2hFbmQgb25UcmFuc2l0aW9uRW5kIHRvZ2dsZSBlbmFibGUgZGlzYWJsZSBpbiBvdXRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXt0W2VdPVhbZV0uYmluZChpKX0pLGVlLmV4dGVuZChpLHt6b29tOnR9KTt2YXIgcz0xO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLnpvb20sXCJzY2FsZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUpe2lmKHMhPT1lKXt2YXIgdD1pLnpvb20uZ2VzdHVyZS4kaW1hZ2VFbD9pLnpvb20uZ2VzdHVyZS4kaW1hZ2VFbFswXTp2b2lkIDAsYT1pLnpvb20uZ2VzdHVyZS4kc2xpZGVFbD9pLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXTp2b2lkIDA7aS5lbWl0KFwiem9vbUNoYW5nZVwiLGUsdCxhKX1zPWV9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuem9vbS5lbmFibGVkJiZ0aGlzLnpvb20uZW5hYmxlKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnpvb20uZGlzYWJsZSgpfSx0b3VjaFN0YXJ0OmZ1bmN0aW9uKGUpe3RoaXMuem9vbS5lbmFibGVkJiZ0aGlzLnpvb20ub25Ub3VjaFN0YXJ0KGUpfSx0b3VjaEVuZDpmdW5jdGlvbihlKXt0aGlzLnpvb20uZW5hYmxlZCYmdGhpcy56b29tLm9uVG91Y2hFbmQoZSl9LGRvdWJsZVRhcDpmdW5jdGlvbihlKXt0aGlzLnBhcmFtcy56b29tLmVuYWJsZWQmJnRoaXMuem9vbS5lbmFibGVkJiZ0aGlzLnBhcmFtcy56b29tLnRvZ2dsZSYmdGhpcy56b29tLnRvZ2dsZShlKX0sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbigpe3RoaXMuem9vbS5lbmFibGVkJiZ0aGlzLnBhcmFtcy56b29tLmVuYWJsZWQmJnRoaXMuem9vbS5vblRyYW5zaXRpb25FbmQoKX19fSx7bmFtZTpcImxhenlcIixwYXJhbXM6e2xhenk6e2VuYWJsZWQ6ITEsbG9hZFByZXZOZXh0OiExLGxvYWRQcmV2TmV4dEFtb3VudDoxLGxvYWRPblRyYW5zaXRpb25TdGFydDohMSxlbGVtZW50Q2xhc3M6XCJzd2lwZXItbGF6eVwiLGxvYWRpbmdDbGFzczpcInN3aXBlci1sYXp5LWxvYWRpbmdcIixsb2FkZWRDbGFzczpcInN3aXBlci1sYXp5LWxvYWRlZFwiLHByZWxvYWRlckNsYXNzOlwic3dpcGVyLWxhenktcHJlbG9hZGVyXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtlZS5leHRlbmQodGhpcyx7bGF6eTp7aW5pdGlhbEltYWdlTG9hZGVkOiExLGxvYWQ6WS5sb2FkLmJpbmQodGhpcyksbG9hZEluU2xpZGU6WS5sb2FkSW5TbGlkZS5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmdGhpcy5wYXJhbXMucHJlbG9hZEltYWdlcyYmKHRoaXMucGFyYW1zLnByZWxvYWRJbWFnZXM9ITEpfSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiYhdGhpcy5wYXJhbXMubG9vcCYmMD09PXRoaXMucGFyYW1zLmluaXRpYWxTbGlkZSYmdGhpcy5sYXp5LmxvYWQoKX0sc2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuZnJlZU1vZGUmJiF0aGlzLnBhcmFtcy5mcmVlTW9kZVN0aWNreSYmdGhpcy5sYXp5LmxvYWQoKX0scmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiZ0aGlzLmxhenkubG9hZCgpfSxzY3JvbGxiYXJEcmFnTW92ZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmdGhpcy5sYXp5LmxvYWQoKX0sdHJhbnNpdGlvblN0YXJ0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLnBhcmFtcy5sYXp5LmVuYWJsZWQmJihlLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydHx8IWUucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0JiYhZS5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkmJmUubGF6eS5sb2FkKCl9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5sYXp5LmVuYWJsZWQmJiF0aGlzLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCYmdGhpcy5sYXp5LmxvYWQoKX19fSx7bmFtZTpcImNvbnRyb2xsZXJcIixwYXJhbXM6e2NvbnRyb2xsZXI6e2NvbnRyb2w6dm9pZCAwLGludmVyc2U6ITEsYnk6XCJzbGlkZVwifX0sY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlZS5leHRlbmQoZSx7Y29udHJvbGxlcjp7Y29udHJvbDplLnBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wsZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbjpWLmdldEludGVycG9sYXRlRnVuY3Rpb24uYmluZChlKSxzZXRUcmFuc2xhdGU6Vi5zZXRUcmFuc2xhdGUuYmluZChlKSxzZXRUcmFuc2l0aW9uOlYuc2V0VHJhbnNpdGlvbi5iaW5kKGUpfX0pfSxvbjp7dXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5jb250cm9sbGVyLmNvbnRyb2wmJnRoaXMuY29udHJvbGxlci5zcGxpbmUmJih0aGlzLmNvbnRyb2xsZXIuc3BsaW5lPXZvaWQgMCxkZWxldGUgdGhpcy5jb250cm9sbGVyLnNwbGluZSl9LHJlc2l6ZTpmdW5jdGlvbigpe3RoaXMuY29udHJvbGxlci5jb250cm9sJiZ0aGlzLmNvbnRyb2xsZXIuc3BsaW5lJiYodGhpcy5jb250cm9sbGVyLnNwbGluZT12b2lkIDAsZGVsZXRlIHRoaXMuY29udHJvbGxlci5zcGxpbmUpfSxvYnNlcnZlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuY29udHJvbGxlci5jb250cm9sJiZ0aGlzLmNvbnRyb2xsZXIuc3BsaW5lJiYodGhpcy5jb250cm9sbGVyLnNwbGluZT12b2lkIDAsZGVsZXRlIHRoaXMuY29udHJvbGxlci5zcGxpbmUpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSx0KXt0aGlzLmNvbnRyb2xsZXIuY29udHJvbCYmdGhpcy5jb250cm9sbGVyLnNldFRyYW5zbGF0ZShlLHQpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUsdCl7dGhpcy5jb250cm9sbGVyLmNvbnRyb2wmJnRoaXMuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGUsdCl9fX0se25hbWU6XCJhMTF5XCIscGFyYW1zOnthMTF5OntlbmFibGVkOiEwLG5vdGlmaWNhdGlvbkNsYXNzOlwic3dpcGVyLW5vdGlmaWNhdGlvblwiLHByZXZTbGlkZU1lc3NhZ2U6XCJQcmV2aW91cyBzbGlkZVwiLG5leHRTbGlkZU1lc3NhZ2U6XCJOZXh0IHNsaWRlXCIsZmlyc3RTbGlkZU1lc3NhZ2U6XCJUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZVwiLGxhc3RTbGlkZU1lc3NhZ2U6XCJUaGlzIGlzIHRoZSBsYXN0IHNsaWRlXCIscGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6XCJHbyB0byBzbGlkZSB7e2luZGV4fX1cIn19LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7ZWUuZXh0ZW5kKHQse2ExMXk6e2xpdmVSZWdpb246TCgnPHNwYW4gY2xhc3M9XCInK3QucGFyYW1zLmExMXkubm90aWZpY2F0aW9uQ2xhc3MrJ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPjwvc3Bhbj4nKX19KSxPYmplY3Qua2V5cyhGKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QuYTExeVtlXT1GW2VdLmJpbmQodCl9KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJih0aGlzLmExMXkuaW5pdCgpLHRoaXMuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCkpfSx0b0VkZ2U6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJnRoaXMuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCl9LGZyb21FZGdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuYTExeS5lbmFibGVkJiZ0aGlzLmExMXkudXBkYXRlTmF2aWdhdGlvbigpfSxwYWdpbmF0aW9uVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuYTExeS5lbmFibGVkJiZ0aGlzLmExMXkudXBkYXRlUGFnaW5hdGlvbigpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuYTExeS5lbmFibGVkJiZ0aGlzLmExMXkuZGVzdHJveSgpfX19LHtuYW1lOlwiaGlzdG9yeVwiLHBhcmFtczp7aGlzdG9yeTp7ZW5hYmxlZDohMSxyZXBsYWNlU3RhdGU6ITEsa2V5Olwic2xpZGVzXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2VlLmV4dGVuZChlLHtoaXN0b3J5Ontpbml0OlIuaW5pdC5iaW5kKGUpLHNldEhpc3Rvcnk6Ui5zZXRIaXN0b3J5LmJpbmQoZSksc2V0SGlzdG9yeVBvcFN0YXRlOlIuc2V0SGlzdG9yeVBvcFN0YXRlLmJpbmQoZSksc2Nyb2xsVG9TbGlkZTpSLnNjcm9sbFRvU2xpZGUuYmluZChlKSxkZXN0cm95OlIuZGVzdHJveS5iaW5kKGUpfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCYmdGhpcy5oaXN0b3J5LmluaXQoKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCYmdGhpcy5oaXN0b3J5LmRlc3Ryb3koKX0sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbigpe3RoaXMuaGlzdG9yeS5pbml0aWFsaXplZCYmdGhpcy5oaXN0b3J5LnNldEhpc3RvcnkodGhpcy5wYXJhbXMuaGlzdG9yeS5rZXksdGhpcy5hY3RpdmVJbmRleCl9fX0se25hbWU6XCJoYXNoLW5hdmlnYXRpb25cIixwYXJhbXM6e2hhc2hOYXZpZ2F0aW9uOntlbmFibGVkOiExLHJlcGxhY2VTdGF0ZTohMSx3YXRjaFN0YXRlOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlZS5leHRlbmQoZSx7aGFzaE5hdmlnYXRpb246e2luaXRpYWxpemVkOiExLGluaXQ6cS5pbml0LmJpbmQoZSksZGVzdHJveTpxLmRlc3Ryb3kuYmluZChlKSxzZXRIYXNoOnEuc2V0SGFzaC5iaW5kKGUpLG9uSGFzaENhbmdlOnEub25IYXNoQ2FuZ2UuYmluZChlKX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkJiZ0aGlzLmhhc2hOYXZpZ2F0aW9uLmluaXQoKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQmJnRoaXMuaGFzaE5hdmlnYXRpb24uZGVzdHJveSgpfSx0cmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7dGhpcy5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCYmdGhpcy5oYXNoTmF2aWdhdGlvbi5zZXRIYXNoKCl9fX0se25hbWU6XCJhdXRvcGxheVwiLHBhcmFtczp7YXV0b3BsYXk6e2VuYWJsZWQ6ITEsZGVsYXk6M2UzLHdhaXRGb3JUcmFuc2l0aW9uOiEwLGRpc2FibGVPbkludGVyYWN0aW9uOiEwLHN0b3BPbkxhc3RTbGlkZTohMSxyZXZlcnNlRGlyZWN0aW9uOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztlZS5leHRlbmQodCx7YXV0b3BsYXk6e3J1bm5pbmc6ITEscGF1c2VkOiExLHJ1bjpXLnJ1bi5iaW5kKHQpLHN0YXJ0Olcuc3RhcnQuYmluZCh0KSxzdG9wOlcuc3RvcC5iaW5kKHQpLHBhdXNlOlcucGF1c2UuYmluZCh0KSxvblRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oZSl7dCYmIXQuZGVzdHJveWVkJiZ0LiR3cmFwcGVyRWwmJmUudGFyZ2V0PT09dGhpcyYmKHQuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHQuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKSx0LiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIix0LmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCksdC5hdXRvcGxheS5wYXVzZWQ9ITEsdC5hdXRvcGxheS5ydW5uaW5nP3QuYXV0b3BsYXkucnVuKCk6dC5hdXRvcGxheS5zdG9wKCkpfX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkJiZ0aGlzLmF1dG9wbGF5LnN0YXJ0KCl9LGJlZm9yZVRyYW5zaXRpb25TdGFydDpmdW5jdGlvbihlLHQpe3RoaXMuYXV0b3BsYXkucnVubmluZyYmKHR8fCF0aGlzLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbj90aGlzLmF1dG9wbGF5LnBhdXNlKGUpOnRoaXMuYXV0b3BsYXkuc3RvcCgpKX0sc2xpZGVyRmlyc3RNb3ZlOmZ1bmN0aW9uKCl7dGhpcy5hdXRvcGxheS5ydW5uaW5nJiYodGhpcy5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24/dGhpcy5hdXRvcGxheS5zdG9wKCk6dGhpcy5hdXRvcGxheS5wYXVzZSgpKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuYXV0b3BsYXkucnVubmluZyYmdGhpcy5hdXRvcGxheS5zdG9wKCl9fX0se25hbWU6XCJlZmZlY3QtZmFkZVwiLHBhcmFtczp7ZmFkZUVmZmVjdDp7Y3Jvc3NGYWRlOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7ZWUuZXh0ZW5kKHRoaXMse2ZhZGVFZmZlY3Q6e3NldFRyYW5zbGF0ZTpqLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246ai5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyl9fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihcImZhZGVcIj09PWUucGFyYW1zLmVmZmVjdCl7ZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImZhZGVcIik7dmFyIHQ9e3NsaWRlc1BlclZpZXc6MSxzbGlkZXNQZXJDb2x1bW46MSxzbGlkZXNQZXJHcm91cDoxLHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc3BhY2VCZXR3ZWVuOjAsdmlydHVhbFRyYW5zbGF0ZTohMH07ZWUuZXh0ZW5kKGUucGFyYW1zLHQpLGVlLmV4dGVuZChlLm9yaWdpbmFsUGFyYW1zLHQpfX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7XCJmYWRlXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuZmFkZUVmZmVjdC5zZXRUcmFuc2xhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXtcImZhZGVcIj09PXRoaXMucGFyYW1zLmVmZmVjdCYmdGhpcy5mYWRlRWZmZWN0LnNldFRyYW5zaXRpb24oZSl9fX0se25hbWU6XCJlZmZlY3QtY3ViZVwiLHBhcmFtczp7Y3ViZUVmZmVjdDp7c2xpZGVTaGFkb3dzOiEwLHNoYWRvdzohMCxzaGFkb3dPZmZzZXQ6MjAsc2hhZG93U2NhbGU6Ljk0fX0sY3JlYXRlOmZ1bmN0aW9uKCl7ZWUuZXh0ZW5kKHRoaXMse2N1YmVFZmZlY3Q6e3NldFRyYW5zbGF0ZTpVLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246VS5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyl9fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihcImN1YmVcIj09PWUucGFyYW1zLmVmZmVjdCl7ZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImN1YmVcIiksZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIjNkXCIpO3ZhciB0PXtzbGlkZXNQZXJWaWV3OjEsc2xpZGVzUGVyQ29sdW1uOjEsc2xpZGVzUGVyR3JvdXA6MSx3YXRjaFNsaWRlc1Byb2dyZXNzOiEwLHJlc2lzdGFuY2VSYXRpbzowLHNwYWNlQmV0d2VlbjowLGNlbnRlcmVkU2xpZGVzOiExLHZpcnR1YWxUcmFuc2xhdGU6ITB9O2VlLmV4dGVuZChlLnBhcmFtcyx0KSxlZS5leHRlbmQoZS5vcmlnaW5hbFBhcmFtcyx0KX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe1wiY3ViZVwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmN1YmVFZmZlY3Quc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJjdWJlXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuY3ViZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwiZWZmZWN0LWZsaXBcIixwYXJhbXM6e2ZsaXBFZmZlY3Q6e3NsaWRlU2hhZG93czohMCxsaW1pdFJvdGF0aW9uOiEwfX0sY3JlYXRlOmZ1bmN0aW9uKCl7ZWUuZXh0ZW5kKHRoaXMse2ZsaXBFZmZlY3Q6e3NldFRyYW5zbGF0ZTpLLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246Sy5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyl9fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihcImZsaXBcIj09PWUucGFyYW1zLmVmZmVjdCl7ZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImZsaXBcIiksZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIjNkXCIpO3ZhciB0PXtzbGlkZXNQZXJWaWV3OjEsc2xpZGVzUGVyQ29sdW1uOjEsc2xpZGVzUGVyR3JvdXA6MSx3YXRjaFNsaWRlc1Byb2dyZXNzOiEwLHNwYWNlQmV0d2VlbjowLHZpcnR1YWxUcmFuc2xhdGU6ITB9O2VlLmV4dGVuZChlLnBhcmFtcyx0KSxlZS5leHRlbmQoZS5vcmlnaW5hbFBhcmFtcyx0KX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe1wiZmxpcFwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmZsaXBFZmZlY3Quc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJmbGlwXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuZmxpcEVmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwiZWZmZWN0LWNvdmVyZmxvd1wiLHBhcmFtczp7Y292ZXJmbG93RWZmZWN0Ontyb3RhdGU6NTAsc3RyZXRjaDowLGRlcHRoOjEwMCxtb2RpZmllcjoxLHNsaWRlU2hhZG93czohMH19LGNyZWF0ZTpmdW5jdGlvbigpe2VlLmV4dGVuZCh0aGlzLHtjb3ZlcmZsb3dFZmZlY3Q6e3NldFRyYW5zbGF0ZTpfLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246Xy5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyl9fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztcImNvdmVyZmxvd1wiPT09ZS5wYXJhbXMuZWZmZWN0JiYoZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImNvdmVyZmxvd1wiKSxlLmNsYXNzTmFtZXMucHVzaChlLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiM2RcIiksZS5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcz0hMCxlLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3M9ITApfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtcImNvdmVyZmxvd1wiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2xhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXtcImNvdmVyZmxvd1wiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwidGh1bWJzXCIscGFyYW1zOnt0aHVtYnM6e3N3aXBlcjpudWxsLHNsaWRlVGh1bWJBY3RpdmVDbGFzczpcInN3aXBlci1zbGlkZS10aHVtYi1hY3RpdmVcIix0aHVtYnNDb250YWluZXJDbGFzczpcInN3aXBlci1jb250YWluZXItdGh1bWJzXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtlZS5leHRlbmQodGhpcyx7dGh1bWJzOntzd2lwZXI6bnVsbCxpbml0OlouaW5pdC5iaW5kKHRoaXMpLHVwZGF0ZTpaLnVwZGF0ZS5iaW5kKHRoaXMpLG9uVGh1bWJDbGljazpaLm9uVGh1bWJDbGljay5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLnRodW1icztlJiZlLnN3aXBlciYmKHRoaXMudGh1bWJzLmluaXQoKSx0aGlzLnRodW1icy51cGRhdGUoITApKX0sc2xpZGVDaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLnRodW1icy5zd2lwZXImJnRoaXMudGh1bWJzLnVwZGF0ZSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1icy5zd2lwZXImJnRoaXMudGh1bWJzLnVwZGF0ZSgpfSxyZXNpemU6ZnVuY3Rpb24oKXt0aGlzLnRodW1icy5zd2lwZXImJnRoaXMudGh1bWJzLnVwZGF0ZSgpfSxvYnNlcnZlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJzLnN3aXBlciYmdGhpcy50aHVtYnMudXBkYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy50aHVtYnMuc3dpcGVyO3QmJnQuc2V0VHJhbnNpdGlvbihlKX0sYmVmb3JlRGVzdHJveTpmdW5jdGlvbigpe3ZhciBlPXRoaXMudGh1bWJzLnN3aXBlcjtlJiZ0aGlzLnRodW1icy5zd2lwZXJDcmVhdGVkJiZlJiZlLmRlc3Ryb3koKX19fV07cmV0dXJuIHZvaWQgMD09PVQudXNlJiYoVC51c2U9VC5DbGFzcy51c2UsVC5pbnN0YWxsTW9kdWxlPVQuQ2xhc3MuaW5zdGFsbE1vZHVsZSksVC51c2UoUSksVH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpcGVyLm1pbi5qcy5tYXBcbmV4cG9ydCBkZWZhdWx0IHt9XG4iLCIvLyB2YXIgZ2V0SW1nU3JjID0gZnVuY3Rpb24gKGltZykge1xuLy8gICByZXR1cm4gaW1nLmN1cnJlbnRTcmMgfHwgaW1nLnNyYztcbi8vIH07XG4vL1xuLy8gd2luZG93LnNldFBhcmFsbGF4QmcgPSBmdW5jdGlvbiAoc2xpZGVyKSB7XG4vLyAgIHZhciB3cmFwcGVyID0gc2xpZGVyLmVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItd3JhcHBlcicpO1xuLy8gICB2YXIgYmcgPSBnZXRJbWdTcmMod3JhcHBlci5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yKCdpbWcnKSk7XG4vL1xuLy8gICAkKHdyYXBwZXIpLnBhcmFsbGF4KHtcbi8vICAgICBpbWFnZVNyYzogYmdcbi8vICAgfSk7XG4vL1xuLy8gICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1taXJyb3InKSkge1xuLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcGFyYWxsYXgnKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIHdpbmRvdy5jaGFuZ2VQYXJhbGxheEJnID0gZnVuY3Rpb24gKHNsaWRlcikge1xuLy8gICB2YXIgd3JhcHBlciA9IHNsaWRlci5lbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXdyYXBwZXInKTtcbi8vICAgdmFyIHByZXZpb3VzQmcgPSBnZXRJbWdTcmMod3JhcHBlci5jaGlsZHJlbltzbGlkZXIucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaW1nJykpO1xuLy8gICB2YXIgbmV3QmcgPSBnZXRJbWdTcmMod3JhcHBlci5jaGlsZHJlbltzbGlkZXIucmVhbEluZGV4XS5xdWVyeVNlbGVjdG9yKCdpbWcnKSk7XG4vL1xuLy8gICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1taXJyb3InKSkge1xuLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcGFyYWxsYXgnKTtcbi8vICAgfVxuLy9cbi8vICAgJCgnLnBhcmFsbGF4LW1pcnJvcicpLmVhY2goZnVuY3Rpb24oKSB7XG4vLyAgICAgdmFyIG1pcnJvciA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LXNsaWRlcicpO1xuLy9cbi8vICAgICB2YXIgcmVzZXRBbmltYXRpb24gPSBmdW5jdGlvbiAoYW5pbWF0aW9uTmFtZSkge1xuLy8gICAgICAgbWlycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlSW5MZWZ0Jyk7XG4vLyAgICAgICBtaXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVJblJpZ2h0Jyk7XG4vLyAgICAgICBtaXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVPdXRMZWZ0Jyk7XG4vLyAgICAgICBtaXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVPdXRSaWdodCcpO1xuLy9cbi8vICAgICAgIGlmIChhbmltYXRpb25OYW1lKSB7XG4vLyAgICAgICAgIG1pcnJvci5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbk5hbWUpO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG4vL1xuLy8gICAgIGlmIChtaXJyb3Iuc3JjID09PSBwcmV2aW91c0JnKSB7XG4vLyAgICAgICBtaXJyb3IuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcbi8vICAgICAgIG1pcnJvci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9ICcwLjRzJztcbi8vXG4vLyAgICAgICB2YXIgY29vcmRzID0gbWlycm9yLnN0eWxlLnRyYW5zZm9ybS5tYXRjaCgvXFwoKC4qKVxcKS8pWzFdLnNwbGl0KFwiLCBcIik7XG4vLyAgICAgICBtaXJyb3Iuc3R5bGUubGVmdCA9IGNvb3Jkc1swXTtcbi8vICAgICAgIG1pcnJvci5zdHlsZS50b3AgPSBjb29yZHNbMV07XG4vL1xuLy8gICAgICAgaWYgKHNsaWRlci5wcmV2aW91c0luZGV4IDwgc2xpZGVyLnJlYWxJbmRleCkge1xuLy8gICAgICAgICByZXNldEFuaW1hdGlvbignc2xpZGVPdXRMZWZ0Jyk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXNldEFuaW1hdGlvbignc2xpZGVPdXRSaWdodCcpO1xuLy8gICAgICAgfVxuLy9cbi8vICAgICAgIHZhciBvblNsaWRlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIG1pcnJvci5zcmMgPSBuZXdCZztcbi8vXG4vLyAgICAgICAgIGlmIChzbGlkZXIucHJldmlvdXNJbmRleCA8IHNsaWRlci5yZWFsSW5kZXgpIHtcbi8vICAgICAgICAgICByZXNldEFuaW1hdGlvbignc2xpZGVJblJpZ2h0Jyk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgcmVzZXRBbmltYXRpb24oJ3NsaWRlSW5MZWZ0Jyk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvblNsaWRlQ2hhbmdlZCk7XG4vLyAgICAgICAgIG1pcnJvci5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLG9uU2xpZGVDaGFuZ2luZyk7XG4vLyAgICAgICB9O1xuLy9cbi8vICAgICAgIHZhciBvblNsaWRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgbWlycm9yLnN0eWxlLmxlZnQgPSAnJztcbi8vICAgICAgICAgbWlycm9yLnN0eWxlLnRvcCA9ICcnO1xuLy8gICAgICAgICByZXNldEFuaW1hdGlvbigpO1xuLy8gICAgICAgICBtaXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcbi8vICAgICAgICAgbWlycm9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsb25TbGlkZUNoYW5nZWQpO1xuLy8gICAgICAgfTtcbi8vXG4vLyAgICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25TbGlkZUNoYW5naW5nKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfTtcblxudmFyIHNsaWRlciA9IG5ldyBTd2lwZXIoJy5zbGlkZXInLCB7XG4gIGtleWJvYXJkOiB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgLy8gb246IHtcbiAgLy8gICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICB3aW5kb3cuc2V0UGFyYWxsYXhCZyh0aGlzKTtcbiAgLy8gICB9LFxuICAvLyAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICB3aW5kb3cuY2hhbmdlUGFyYWxsYXhCZyh0aGlzKTtcbiAgLy8gICB9LFxuICAvLyB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHt9XG4iXSwibmFtZXMiOlsidHh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJpIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicCIsInEiLCJyIiwicyIsInQiLCJ1IiwidiIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiRSIsIkYiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJNIiwiTiIsIk8iLCJQIiwiUSIsIlIiLCJTIiwiVCIsIlUiLCJWIiwiVyIsInNsaWNlIiwiWCIsImhhc093blByb3BlcnR5IiwiWSIsImNvbnN0cnVjdG9yIiwiY2FsbCIsInByb3RvdHlwZSIsIl9fc3VwZXJfXyIsIloiLCJpbmRleE9mIiwibGVuZ3RoIiwiY2F0Y2h1cFRpbWUiLCJpbml0aWFsUmF0ZSIsIm1pblRpbWUiLCJnaG9zdFRpbWUiLCJtYXhQcm9ncmVzc1BlckZyYW1lIiwiZWFzZUZhY3RvciIsInN0YXJ0T25QYWdlTG9hZCIsInJlc3RhcnRPblB1c2hTdGF0ZSIsInJlc3RhcnRPblJlcXVlc3RBZnRlciIsInRhcmdldCIsImVsZW1lbnRzIiwiY2hlY2tJbnRlcnZhbCIsInNlbGVjdG9ycyIsImV2ZW50TGFnIiwibWluU2FtcGxlcyIsInNhbXBsZUNvdW50IiwibGFnVGhyZXNob2xkIiwiYWpheCIsInRyYWNrTWV0aG9kcyIsInRyYWNrV2ViU29ja2V0cyIsImlnbm9yZVVSTHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYXJndW1lbnRzIiwiYXBwbHkiLCJNYXRoIiwiYWJzIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImVycm9yIiwib24iLCJiaW5kaW5ncyIsInB1c2giLCJoYW5kbGVyIiwiY3R4Iiwib25jZSIsIm9mZiIsInNwbGljZSIsInRyaWdnZXIiLCJQYWNlIiwib3B0aW9ucyIsInBhY2VPcHRpb25zIiwiRXJyb3IiLCJwcm9ncmVzcyIsImdldEVsZW1lbnQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJib2R5IiwicmVwbGFjZSIsImlubmVySFRNTCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImZpbmlzaCIsInVwZGF0ZSIsInJlbmRlciIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZHJlbiIsInN0eWxlIiwiaGVpZ2h0IiwibGFzdFJlbmRlcmVkUHJvZ3Jlc3MiLCJkb25lIiwiWE1MSHR0cFJlcXVlc3QiLCJYRG9tYWluUmVxdWVzdCIsIldlYlNvY2tldCIsImlnbm9yZSIsInVuc2hpZnQiLCJzaGlmdCIsInRyYWNrIiwidG9VcHBlckNhc2UiLCJvcGVuIiwidHlwZSIsInVybCIsInJlcXVlc3QiLCJwcm90b2NvbHMiLCJ0ZXN0IiwicnVubmluZyIsInJlYWR5U3RhdGUiLCJyZXN0YXJ0Iiwic291cmNlcyIsIndhdGNoIiwiUHJvZ3Jlc3NFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGhDb21wdXRhYmxlIiwibG9hZGVkIiwidG90YWwiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzZWxlY3RvciIsImNoZWNrIiwic3RhdGVzIiwibG9hZGluZyIsImludGVyYWN0aXZlIiwiY29tcGxldGUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzb3VyY2UiLCJsYXN0Iiwic2luY2VMYXN0VXBkYXRlIiwicmF0ZSIsImNhdGNodXAiLCJsYXN0UHJvZ3Jlc3MiLCJ0aWNrIiwicG93IiwibWluIiwibWF4IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImV4dHJhU291cmNlcyIsImJhciIsInN0b3AiLCJzdGFydCIsImdvIiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInRoaXMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZWxmIiwiU3dpcGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImNoaWxkTm9kZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxvY2F0aW9uIiwiaGFzaCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIkN1c3RvbUV2ZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJJbWFnZSIsInNjcmVlbiIsInRyaW0iLCJtYXRjaCIsInNwbGl0Iiwibm9kZVR5cGUiLCJmbiIsIkNsYXNzIiwiRG9tNyIsImFkZENsYXNzIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJhdHRyIiwicmVtb3ZlQXR0ciIsInJlbW92ZUF0dHJpYnV0ZSIsImRhdGEiLCJkb203RWxlbWVudERhdGFTdG9yYWdlIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsIndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsImRvbTdFdmVudERhdGEiLCJpcyIsInBhcmVudHMiLCJkb203TGl2ZUxpc3RlbmVycyIsImxpc3RlbmVyIiwicHJveHlMaXN0ZW5lciIsImRvbTdMaXN0ZW5lcnMiLCJkb203cHJveHkiLCJkZXRhaWwiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImZpbHRlciIsImRpc3BhdGNoRXZlbnQiLCJ0cmFuc2l0aW9uRW5kIiwib3V0ZXJXaWR0aCIsInN0eWxlcyIsIm9mZnNldFdpZHRoIiwicGFyc2VGbG9hdCIsIm91dGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInNjcm9sbFkiLCJzY3JvbGxUb3AiLCJzY3JvbGxYIiwic2Nyb2xsTGVmdCIsInRvcCIsImxlZnQiLCJjc3MiLCJlYWNoIiwiaHRtbCIsInRleHQiLCJ0ZXh0Q29udGVudCIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImluZGV4IiwicHJldmlvdXNTaWJsaW5nIiwiZXEiLCJhcHBlbmQiLCJwcmVwZW5kIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsIm5leHRBbGwiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByZXZBbGwiLCJwYXJlbnQiLCJjbG9zZXN0IiwiZmluZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZWUiLCJkZWxldGVQcm9wcyIsIm5leHRUaWNrIiwiZ2V0VHJhbnNsYXRlIiwiV2ViS2l0Q1NTTWF0cml4IiwibWFwIiwiam9pbiIsIk1velRyYW5zZm9ybSIsIk9UcmFuc2Zvcm0iLCJNc1RyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidG9TdHJpbmciLCJtNDEiLCJtNDIiLCJwYXJzZVVybFF1ZXJ5IiwiaHJlZiIsImRlY29kZVVSSUNvbXBvbmVudCIsImlzT2JqZWN0IiwiZXh0ZW5kIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInRlIiwidG91Y2giLCJNb2Rlcm5penIiLCJtYXhUb3VjaFBvaW50cyIsIkRvY3VtZW50VG91Y2giLCJwb2ludGVyRXZlbnRzIiwicG9pbnRlckVuYWJsZWQiLCJQb2ludGVyRXZlbnQiLCJwcmVmaXhlZFBvaW50ZXJFdmVudHMiLCJtc1BvaW50ZXJFbmFibGVkIiwidHJhbnNmb3JtczNkIiwiY3NzdHJhbnNmb3JtczNkIiwiZmxleGJveCIsIm9ic2VydmVyIiwicGFzc2l2ZUxpc3RlbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXN0dXJlcyIsImlzSUUiLCJpc0VkZ2UiLCJpc1NhZmFyaSIsInRvTG93ZXJDYXNlIiwiaXNVaVdlYlZpZXciLCJwYXJhbXMiLCJldmVudHNMaXN0ZW5lcnMiLCJjb21wb25lbnRzIiwiY29uZmlndXJhYmxlIiwiZjdwcm94eSIsImVtaXQiLCJBcnJheSIsImlzQXJyYXkiLCJldmVudHMiLCJjb250ZXh0IiwidXNlTW9kdWxlc1BhcmFtcyIsIm1vZHVsZXMiLCJ1c2VNb2R1bGVzIiwiaW5zdGFuY2UiLCJiaW5kIiwiY3JlYXRlIiwic2V0IiwidXNlIiwiaW5zdGFsbE1vZHVsZSIsIm5hbWUiLCJwcm90byIsInN0YXRpYyIsImluc3RhbGwiLCJjb25jYXQiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidXBkYXRlU2l6ZSIsIiRlbCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpc0hvcml6b250YWwiLCJpc1ZlcnRpY2FsIiwicGFyc2VJbnQiLCJzaXplIiwidXBkYXRlU2xpZGVzIiwiJHdyYXBwZXJFbCIsInJ0bFRyYW5zbGF0ZSIsIndyb25nUlRMIiwidmlydHVhbCIsImVuYWJsZWQiLCJzbGlkZXMiLCJzbGlkZUNsYXNzIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwic2xpZGVzT2Zmc2V0QWZ0ZXIiLCJzbmFwR3JpZCIsInNwYWNlQmV0d2VlbiIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic2xpZGVzUGVyQ29sdW1uIiwiZmxvb3IiLCJjZWlsIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1BlckNvbHVtbkZpbGwiLCIkIiwib3JkZXIiLCJyb3VuZExlbmd0aHMiLCJzd2lwZXJTbGlkZVNpemUiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlc1Blckdyb3VwIiwiZWZmZWN0Iiwic2V0V3JhcHBlclNpemUiLCJfIiwiY2VudGVySW5zdWZmaWNpZW50U2xpZGVzIiwic2xpZGVzR3JpZCIsInNsaWRlc1NpemVzR3JpZCIsIndhdGNoT3ZlcmZsb3ciLCJjaGVja092ZXJmbG93Iiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsInVwZGF0ZVNsaWRlc09mZnNldCIsInVwZGF0ZUF1dG9IZWlnaHQiLCJzZXRUcmFuc2l0aW9uIiwic3BlZWQiLCJhY3RpdmVJbmRleCIsInN3aXBlclNsaWRlT2Zmc2V0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInVwZGF0ZVNsaWRlc1Byb2dyZXNzIiwidHJhbnNsYXRlIiwic2xpZGVWaXNpYmxlQ2xhc3MiLCJ2aXNpYmxlU2xpZGVzSW5kZXhlcyIsInZpc2libGVTbGlkZXMiLCJtaW5UcmFuc2xhdGUiLCJ1cGRhdGVQcm9ncmVzcyIsIm1heFRyYW5zbGF0ZSIsImlzQmVnaW5uaW5nIiwiaXNFbmQiLCJ1cGRhdGVTbGlkZXNDbGFzc2VzIiwicmVhbEluZGV4Iiwic2xpZGVBY3RpdmVDbGFzcyIsInNsaWRlTmV4dENsYXNzIiwic2xpZGVQcmV2Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzIiwic2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyIsImxvb3AiLCJzbGlkZUR1cGxpY2F0ZUNsYXNzIiwidXBkYXRlQWN0aXZlSW5kZXgiLCJzbmFwSW5kZXgiLCJub3JtYWxpemVTbGlkZUluZGV4IiwicHJldmlvdXNJbmRleCIsInVwZGF0ZUNsaWNrZWRTbGlkZSIsImNsaWNrZWRTbGlkZSIsImNsaWNrZWRJbmRleCIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJ2aXJ0dWFsVHJhbnNsYXRlIiwic2V0VHJhbnNsYXRlIiwicHJldmlvdXNUcmFuc2xhdGUiLCJ0cmFuc2l0aW9uU3RhcnQiLCJhdXRvSGVpZ2h0IiwiYW5pbWF0aW5nIiwic2xpZGVUbyIsInByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiIsImluaXRpYWxTbGlkZSIsImluaXRpYWxpemVkIiwiYWxsb3dTbGlkZU5leHQiLCJhbGxvd1NsaWRlUHJldiIsIm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kIiwiZGVzdHJveWVkIiwic2xpZGVUb0xvb3AiLCJsb29wZWRTbGlkZXMiLCJzbGlkZU5leHQiLCJsb29wRml4IiwiX2NsaWVudExlZnQiLCJzbGlkZVByZXYiLCJzbGlkZVJlc2V0Iiwic2xpZGVUb0Nsb3Nlc3QiLCJzbGlkZXNQZXJWaWV3RHluYW1pYyIsImxvb3BDcmVhdGUiLCJsb29wRmlsbEdyb3VwV2l0aEJsYW5rIiwic2xpZGVCbGFua0NsYXNzIiwibG9vcEFkZGl0aW9uYWxTbGlkZXMiLCJjbG9uZU5vZGUiLCJsb29wRGVzdHJveSIsInNldEdyYWJDdXJzb3IiLCJzaW11bGF0ZVRvdWNoIiwiaXNMb2NrZWQiLCJjdXJzb3IiLCJ1bnNldEdyYWJDdXJzb3IiLCJhcHBlbmRTbGlkZSIsInByZXBlbmRTbGlkZSIsImFkZFNsaWRlIiwicmVtb3ZlU2xpZGUiLCJyZW1vdmVBbGxTbGlkZXMiLCJpb3MiLCJhbmRyb2lkIiwiYW5kcm9pZENocm9tZSIsImRlc2t0b3AiLCJ3aW5kb3dzIiwiaXBob25lIiwiaXBvZCIsImlwYWQiLCJjb3Jkb3ZhIiwicGhvbmVnYXAiLCJvcyIsIm9zVmVyc2lvbiIsIndlYlZpZXciLCJtaW5pbWFsVWkiLCJwaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImJyZWFrcG9pbnRzIiwic2V0QnJlYWtwb2ludCIsImZyZWVNb2RlIiwiaW5pdCIsImRpcmVjdGlvbiIsInRvdWNoRXZlbnRzVGFyZ2V0IiwiZWRnZVN3aXBlRGV0ZWN0aW9uIiwiZWRnZVN3aXBlVGhyZXNob2xkIiwiZnJlZU1vZGVNb21lbnR1bSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImZyZWVNb2RlTW9tZW50dW1Cb3VuY2UiLCJmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW8iLCJmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbyIsImZyZWVNb2RlU3RpY2t5IiwiZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkiLCJicmVha3BvaW50c0ludmVyc2UiLCJ0b3VjaFJhdGlvIiwidG91Y2hBbmdsZSIsInNob3J0U3dpcGVzIiwibG9uZ1N3aXBlcyIsImxvbmdTd2lwZXNSYXRpbyIsImxvbmdTd2lwZXNNcyIsImZvbGxvd0ZpbmdlciIsImFsbG93VG91Y2hNb3ZlIiwidGhyZXNob2xkIiwidG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uIiwidG91Y2hTdGFydFByZXZlbnREZWZhdWx0IiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCJ0b3VjaFJlbGVhc2VPbkVkZ2VzIiwidW5pcXVlTmF2RWxlbWVudHMiLCJyZXNpc3RhbmNlIiwicmVzaXN0YW5jZVJhdGlvIiwiZ3JhYkN1cnNvciIsInByZXZlbnRDbGlja3MiLCJwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24iLCJwcmVsb2FkSW1hZ2VzIiwidXBkYXRlT25JbWFnZXNSZWFkeSIsInN3aXBlSGFuZGxlciIsIm5vU3dpcGluZyIsIm5vU3dpcGluZ0NsYXNzIiwibm9Td2lwaW5nU2VsZWN0b3IiLCJwYXNzaXZlTGlzdGVuZXJzIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsIndyYXBwZXJDbGFzcyIsInJ1bkNhbGxiYWNrc09uSW5pdCIsInNsaWRlIiwibWFuaXB1bGF0aW9uIiwiYXR0YWNoRXZlbnRzIiwidG91Y2hFdmVudHMiLCJ3cmFwcGVyRWwiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaEV2ZW50c0RhdGEiLCJ0b3VjaGVzIiwib3JpZ2luYWxFdmVudCIsImlzVG91Y2hFdmVudCIsIndoaWNoIiwiYnV0dG9uIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsImFsbG93Q2xpY2siLCJjdXJyZW50WCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsImN1cnJlbnRZIiwicGFnZVkiLCJpT1NFZGdlU3dpcGVEZXRlY3Rpb24iLCJpT1NFZGdlU3dpcGVUaHJlc2hvbGQiLCJhbGxvd1RvdWNoQ2FsbGJhY2tzIiwiaXNTY3JvbGxpbmciLCJzdGFydE1vdmluZyIsInN0YXJ0WCIsInN0YXJ0WSIsInRvdWNoU3RhcnRUaW1lIiwic3dpcGVEaXJlY3Rpb24iLCJhbGxvd1RocmVzaG9sZE1vdmUiLCJmb3JtRWxlbWVudHMiLCJwcmV2ZW50RGVmYXVsdCIsIm9uVG91Y2hNb3ZlIiwicHJldmVudGVkQnlOZXN0ZWRTd2lwZXIiLCJzcXJ0IiwiYXRhbjIiLCJQSSIsIm5lc3RlZCIsInN0b3BQcm9wYWdhdGlvbiIsInN0YXJ0VHJhbnNsYXRlIiwiYWxsb3dNb21lbnR1bUJvdW5jZSIsImRpZmYiLCJjdXJyZW50VHJhbnNsYXRlIiwidmVsb2NpdGllcyIsInBvc2l0aW9uIiwidGltZSIsIm9uVG91Y2hFbmQiLCJsYXN0Q2xpY2tUaW1lIiwiY2xpY2tUaW1lb3V0IiwicG9wIiwidmVsb2NpdHkiLCJvbkNsaWNrIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJtb3ZlIiwiZW5kIiwiZGV0YWNoRXZlbnRzIiwiZ2V0QnJlYWtwb2ludCIsImN1cnJlbnRCcmVha3BvaW50Iiwib3JpZ2luYWxQYXJhbXMiLCJjaGFuZ2VEaXJlY3Rpb24iLCJzb3J0IiwiaW5uZXJXaWR0aCIsIm5hdmlnYXRpb24iLCJjbGFzc2VzIiwiYWRkQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJydGwiLCJyZW1vdmVDbGFzc2VzIiwiaW1hZ2VzIiwibG9hZEltYWdlIiwib25sb2FkIiwib25lcnJvciIsInNpemVzIiwic3Jjc2V0Iiwic3JjIiwiaW1hZ2VzTG9hZGVkIiwiaW1hZ2VzVG9Mb2FkIiwiY3VycmVudFNyYyIsInBhc3NlZFBhcmFtcyIsInN3aXBlciIsImRpciIsInRvdWNoRXZlbnRzVG91Y2giLCJ0b3VjaEV2ZW50c0Rlc2t0b3AiLCJfX3Byb3RvX18iLCJleHRlbmRlZERlZmF1bHRzIiwiZGVmYXVsdHMiLCJleHRlbmREZWZhdWx0cyIsImRldmljZSIsInN1cHBvcnQiLCJicm93c2VyIiwicmVzaXplIiwicmVzaXplSGFuZGxlciIsIm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlciIsImZ1bmMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2Via2l0TXV0YXRpb25PYnNlcnZlciIsImF0dGFjaCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsIm9ic2VydmVycyIsIm9ic2VydmVQYXJlbnRzIiwib2JzZXJ2ZVNsaWRlQ2hpbGRyZW4iLCJkaXNjb25uZWN0IiwiYWRkU2xpZGVzQmVmb3JlIiwiYWRkU2xpZGVzQWZ0ZXIiLCJmcm9tIiwidG8iLCJyZW5kZXJTbGlkZSIsImxhenkiLCJsb2FkIiwicmVuZGVyRXh0ZXJuYWwiLCJjYWNoZSIsImJlZm9yZUluaXQiLCJoYW5kbGUiLCJrZXlDb2RlIiwiY2hhckNvZGUiLCJzaGlmdEtleSIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwia2V5Ym9hcmQiLCJvbmx5SW5WaWV3cG9ydCIsImlubmVySGVpZ2h0IiwicmV0dXJuVmFsdWUiLCJlbmFibGUiLCJkaXNhYmxlIiwibGFzdFNjcm9sbFRpbWUiLCJldmVudCIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsIm5vcm1hbGl6ZSIsIndoZWVsRGVsdGEiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwiYXhpcyIsIkhPUklaT05UQUxfQVhJUyIsImRlbHRhWSIsImRlbHRhWCIsImRlbHRhTW9kZSIsInNwaW5YIiwic3BpblkiLCJwaXhlbFgiLCJwaXhlbFkiLCJoYW5kbGVNb3VzZUVudGVyIiwibW91c2VFbnRlcmVkIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm1vdXNld2hlZWwiLCJyZWxlYXNlT25FZGdlcyIsImZvcmNlVG9BeGlzIiwiaW52ZXJ0Iiwic2Vuc2l0aXZpdHkiLCJ0aW1lb3V0IiwiYXV0b3BsYXkiLCJhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uIiwiZ2V0VGltZSIsImV2ZW50c1RhcmdlZCIsIiRuZXh0RWwiLCIkcHJldkVsIiwiZGlzYWJsZWRDbGFzcyIsImxvY2tDbGFzcyIsIm9uUHJldkNsaWNrIiwib25OZXh0Q2xpY2siLCJuZXh0RWwiLCJwcmV2RWwiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJidWxsZXRzIiwiZHluYW1pY0J1bGxldHMiLCJidWxsZXRTaXplIiwiZHluYW1pY01haW5CdWxsZXRzIiwiZHluYW1pY0J1bGxldEluZGV4IiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJjdXJyZW50Q2xhc3MiLCJmb3JtYXRGcmFjdGlvbkN1cnJlbnQiLCJ0b3RhbENsYXNzIiwiZm9ybWF0RnJhY3Rpb25Ub3RhbCIsInByb2dyZXNzYmFyT3Bwb3NpdGUiLCJwcm9ncmVzc2JhckZpbGxDbGFzcyIsInJlbmRlckN1c3RvbSIsInJlbmRlckJ1bGxldCIsImJ1bGxldENsYXNzIiwiYnVsbGV0RWxlbWVudCIsInJlbmRlckZyYWN0aW9uIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjbGlja2FibGUiLCJjbGlja2FibGVDbGFzcyIsIm1vZGlmaWVyQ2xhc3MiLCJwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MiLCJoaWRkZW5DbGFzcyIsInNjcm9sbGJhciIsImRyYWdTaXplIiwidHJhY2tTaXplIiwiJGRyYWdFbCIsImhpZGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImRpdmlkZXIiLCJtb3ZlRGl2aWRlciIsInNldERyYWdQb3NpdGlvbiIsImNsaWVudFgiLCJjbGllbnRZIiwib25EcmFnU3RhcnQiLCJkcmFnVGltZW91dCIsIm9uRHJhZ01vdmUiLCJvbkRyYWdFbmQiLCJzbmFwT25SZWxlYXNlIiwiZW5hYmxlRHJhZ2dhYmxlIiwiZGlzYWJsZURyYWdnYWJsZSIsImRyYWdDbGFzcyIsImRyYWdFbCIsImRyYWdnYWJsZSIsInNldFRyYW5zZm9ybSIsInBhcmFsbGF4IiwiZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyIsIm9uR2VzdHVyZVN0YXJ0Iiwiem9vbSIsImdlc3R1cmUiLCJmYWtlR2VzdHVyZVRvdWNoZWQiLCJmYWtlR2VzdHVyZU1vdmVkIiwic2NhbGVTdGFydCIsIiRzbGlkZUVsIiwiJGltYWdlRWwiLCIkaW1hZ2VXcmFwRWwiLCJjb250YWluZXJDbGFzcyIsIm1heFJhdGlvIiwiaXNTY2FsaW5nIiwib25HZXN0dXJlQ2hhbmdlIiwic2NhbGVNb3ZlIiwic2NhbGUiLCJjdXJyZW50U2NhbGUiLCJtaW5SYXRpbyIsIm9uR2VzdHVyZUVuZCIsImNoYW5nZWRUb3VjaGVzIiwiaW1hZ2UiLCJ0b3VjaGVzU3RhcnQiLCJzbGlkZVdpZHRoIiwic2xpZGVIZWlnaHQiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwidG91Y2hlc0N1cnJlbnQiLCJwcmV2UG9zaXRpb25YIiwicHJldlBvc2l0aW9uWSIsInByZXZUaW1lIiwib25UcmFuc2l0aW9uRW5kIiwib3V0IiwiaW4iLCJ6b29tZWRTbGlkZUNsYXNzIiwibG9hZEluU2xpZGUiLCJlbGVtZW50Q2xhc3MiLCJsb2FkZWRDbGFzcyIsImxvYWRpbmdDbGFzcyIsInByZWxvYWRlckNsYXNzIiwiaW5pdGlhbEltYWdlTG9hZGVkIiwibG9hZFByZXZOZXh0IiwibG9hZFByZXZOZXh0QW1vdW50IiwiTGluZWFyU3BsaW5lIiwibGFzdEluZGV4IiwiaW50ZXJwb2xhdGUiLCJnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uIiwiY29udHJvbGxlciIsInNwbGluZSIsImNvbnRyb2wiLCJieSIsImludmVyc2UiLCJtYWtlRWxGb2N1c2FibGUiLCJhZGRFbFJvbGUiLCJhZGRFbExhYmVsIiwiZGlzYWJsZUVsIiwiZW5hYmxlRWwiLCJvbkVudGVyS2V5IiwiYTExeSIsIm5vdGlmeSIsImxhc3RTbGlkZU1lc3NhZ2UiLCJuZXh0U2xpZGVNZXNzYWdlIiwiZmlyc3RTbGlkZU1lc3NhZ2UiLCJwcmV2U2xpZGVNZXNzYWdlIiwiY2xpY2siLCJsaXZlUmVnaW9uIiwidXBkYXRlTmF2aWdhdGlvbiIsInVwZGF0ZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZSIsImhhc2hOYXZpZ2F0aW9uIiwicGF0aHMiLCJnZXRQYXRoVmFsdWVzIiwia2V5IiwidmFsdWUiLCJzY3JvbGxUb1NsaWRlIiwic2V0SGlzdG9yeVBvcFN0YXRlIiwicGF0aG5hbWUiLCJzZXRIaXN0b3J5Iiwic2x1Z2lmeSIsImluY2x1ZGVzIiwic3RhdGUiLCJvbkhhc2hDYW5nZSIsInNldEhhc2giLCJ3YXRjaFN0YXRlIiwicnVuIiwiZGVsYXkiLCJyZXZlcnNlRGlyZWN0aW9uIiwic3RvcE9uTGFzdFNsaWRlIiwicGF1c2UiLCJwYXVzZWQiLCJ3YWl0Rm9yVHJhbnNpdGlvbiIsImZhZGVFZmZlY3QiLCJjcm9zc0ZhZGUiLCJjdWJlRWZmZWN0Iiwic2hhZG93Iiwic2xpZGVTaGFkb3dzIiwic2hhZG93T2Zmc2V0Iiwic2hhZG93U2NhbGUiLCJzaW4iLCJjb3MiLCJmbGlwRWZmZWN0IiwibGltaXRSb3RhdGlvbiIsInpJbmRleCIsInJvdW5kIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwiZGVwdGgiLCJtb2RpZmllciIsInN0cmV0Y2giLCJwZXJzcGVjdGl2ZU9yaWdpbiIsInRodW1icyIsInN3aXBlckNyZWF0ZWQiLCJ0aHVtYnNDb250YWluZXJDbGFzcyIsIm9uVGh1bWJDbGljayIsInNsaWRlVGh1bWJBY3RpdmVDbGFzcyIsImhpZGVPbkNsaWNrIiwidG9FZGdlIiwiZnJvbUVkZ2UiLCJhY3RpdmVJbmRleENoYW5nZSIsInNuYXBJbmRleENoYW5nZSIsInNsaWRlc0xlbmd0aENoYW5nZSIsInNuYXBHcmlkTGVuZ3RoQ2hhbmdlIiwib2JzZXJ2ZXJVcGRhdGUiLCJ0b3VjaFN0YXJ0IiwidG91Y2hFbmQiLCJkb3VibGVUYXAiLCJsb2FkT25UcmFuc2l0aW9uU3RhcnQiLCJzY3JvbGwiLCJzY3JvbGxiYXJEcmFnTW92ZSIsIm5vdGlmaWNhdGlvbkNsYXNzIiwicGFnaW5hdGlvblVwZGF0ZSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0Iiwic2xpZGVyRmlyc3RNb3ZlIiwic2xpZGVDaGFuZ2UiLCJiZWZvcmVEZXN0cm95Iiwic2xpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0VBQ0EsQ0FBQyxZQUFVO0VBQUMsTUFBSUEsR0FBRyxHQUFDQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDQyxZQUE1QyxDQUF5RCxpQkFBekQsQ0FBUjs7RUFBb0YsTUFBSUMsQ0FBSjtFQUFBLE1BQU1DLENBQU47RUFBQSxNQUFRQyxDQUFSO0VBQUEsTUFBVUMsQ0FBVjtFQUFBLE1BQVlDLENBQVo7RUFBQSxNQUFjQyxDQUFkO0VBQUEsTUFBZ0JDLENBQWhCO0VBQUEsTUFBa0JDLENBQWxCO0VBQUEsTUFBb0JDLENBQXBCO0VBQUEsTUFBc0JDLENBQXRCO0VBQUEsTUFBd0JDLENBQXhCO0VBQUEsTUFBMEJDLENBQTFCO0VBQUEsTUFBNEJDLENBQTVCO0VBQUEsTUFBOEJDLENBQTlCO0VBQUEsTUFBZ0NDLENBQWhDO0VBQUEsTUFBa0NDLENBQWxDO0VBQUEsTUFBb0NDLENBQXBDO0VBQUEsTUFBc0NDLENBQXRDO0VBQUEsTUFBd0NDLENBQXhDO0VBQUEsTUFBMENDLENBQTFDO0VBQUEsTUFBNENDLEVBQTVDO0VBQUEsTUFBOENDLENBQTlDO0VB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
