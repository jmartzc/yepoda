(() => {
  var t = {
      487: function () {
        "use strict";
        window.tram = (function (t) {
          function e(t, e) {
            return new S.Bare().init(t, e);
          }
          function n(t) {
            var e = parseInt(t.slice(1), 16);
            return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
          }
          function i(t, e, n) {
            return (
              "#" + (0x1000000 | (t << 16) | (e << 8) | n).toString(16).slice(1)
            );
          }
          function r() {}
          function a(t, e, n) {
            if ((void 0 !== e && (n = e), void 0 === t)) return n;
            var i = n;
            return (
              Z.test(t) || !K.test(t)
                ? (i = parseInt(t, 10))
                : K.test(t) && (i = 1e3 * parseFloat(t)),
              0 > i && (i = 0),
              i == i ? i : n
            );
          }
          function o(t) {
            H.debug && window && window.console.warn(t);
          }
          var s,
            u,
            c,
            l = (function (t, e, n) {
              function i(t) {
                return "object" == typeof t;
              }
              function r(t) {
                return "function" == typeof t;
              }
              function a() {}
              return function o(s, u) {
                function c() {
                  var t = new l();
                  return r(t.init) && t.init.apply(t, arguments), t;
                }
                function l() {}
                u === n && ((u = s), (s = Object)), (c.Bare = l);
                var d,
                  f = (a[t] = s[t]),
                  h = (l[t] = c[t] = new a());
                return (
                  (h.constructobadger = c),
                  (c.mixin = function (e) {
                    return (l[t] = c[t] = o(c, e)[t]), c;
                  }),
                  (c.open = function (t) {
                    if (
                      ((d = {}),
                      r(t) ? (d = t.call(c, h, f, c, s)) : i(t) && (d = t),
                      i(d))
                    )
                      for (var n in d) e.call(d, n) && (h[n] = d[n]);
                    return r(h.init) || (h.init = s), c;
                  }),
                  c.open(u)
                );
              };
            })("prototype", {}.hasOwnProperty),
            d = {
              ease: [
                "ease",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return (
                    e +
                    n *
                      (-2.75 * a * r +
                        11 * r * r +
                        -15.5 * a +
                        8 * r +
                        0.25 * t)
                  );
                },
              ],
              "ease-in": [
                "ease-in",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return e + n * (-1 * a * r + 3 * r * r + -3 * a + 2 * r);
                },
              ],
              "ease-out": [
                "ease-out",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return (
                    e +
                    n *
                      (0.3 * a * r +
                        -1.6 * r * r +
                        2.2 * a +
                        -1.8 * r +
                        1.9 * t)
                  );
                },
              ],
              "ease-in-out": [
                "ease-in-out",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return e + n * (2 * a * r + -5 * r * r + 2 * a + 2 * r);
                },
              ],
              linear: [
                "linear",
                function (t, e, n, i) {
                  return (n * t) / i + e;
                },
              ],
              "ease-in-quad": [
                "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                function (t, e, n, i) {
                  return n * (t /= i) * t + e;
                },
              ],
              "ease-out-quad": [
                "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                function (t, e, n, i) {
                  return -n * (t /= i) * (t - 2) + e;
                },
              ],
              "ease-in-out-quad": [
                "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t + e
                    : (-n / 2) * (--t * (t - 2) - 1) + e;
                },
              ],
              "ease-in-cubic": [
                "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                function (t, e, n, i) {
                  return n * (t /= i) * t * t + e;
                },
              ],
              "ease-out-cubic": [
                "cubic-bezier(0.215, 0.610, 0.355, 1)",
                function (t, e, n, i) {
                  return n * ((t = t / i - 1) * t * t + 1) + e;
                },
              ],
              "ease-in-out-cubic": [
                "cubic-bezier(0.645, 0.045, 0.355, 1)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t * t + e
                    : (n / 2) * ((t -= 2) * t * t + 2) + e;
                },
              ],
              "ease-in-quart": [
                "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                function (t, e, n, i) {
                  return n * (t /= i) * t * t * t + e;
                },
              ],
              "ease-out-quart": [
                "cubic-bezier(0.165, 0.840, 0.440, 1)",
                function (t, e, n, i) {
                  return -n * ((t = t / i - 1) * t * t * t - 1) + e;
                },
              ],
              "ease-in-out-quart": [
                "cubic-bezier(0.770, 0, 0.175, 1)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t * t * t + e
                    : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                },
              ],
              "ease-in-quint": [
                "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                function (t, e, n, i) {
                  return n * (t /= i) * t * t * t * t + e;
                },
              ],
              "ease-out-quint": [
                "cubic-bezier(0.230, 1, 0.320, 1)",
                function (t, e, n, i) {
                  return n * ((t = t / i - 1) * t * t * t * t + 1) + e;
                },
              ],
              "ease-in-out-quint": [
                "cubic-bezier(0.860, 0, 0.070, 1)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t * t * t * t + e
                    : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                },
              ],
              "ease-in-sine": [
                "cubic-bezier(0.470, 0, 0.745, 0.715)",
                function (t, e, n, i) {
                  return -n * Math.cos((t / i) * (Math.PI / 2)) + n + e;
                },
              ],
              "ease-out-sine": [
                "cubic-bezier(0.390, 0.575, 0.565, 1)",
                function (t, e, n, i) {
                  return n * Math.sin((t / i) * (Math.PI / 2)) + e;
                },
              ],
              "ease-in-out-sine": [
                "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                function (t, e, n, i) {
                  return (-n / 2) * (Math.cos((Math.PI * t) / i) - 1) + e;
                },
              ],
              "ease-in-expo": [
                "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                function (t, e, n, i) {
                  return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e;
                },
              ],
              "ease-out-expo": [
                "cubic-bezier(0.190, 1, 0.220, 1)",
                function (t, e, n, i) {
                  return t === i
                    ? e + n
                    : n * (-Math.pow(2, (-10 * t) / i) + 1) + e;
                },
              ],
              "ease-in-out-expo": [
                "cubic-bezier(1, 0, 0, 1)",
                function (t, e, n, i) {
                  return 0 === t
                    ? e
                    : t === i
                    ? e + n
                    : (t /= i / 2) < 1
                    ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                    : (n / 2) * (-Math.pow(2, -10 * --t) + 2) + e;
                },
              ],
              "ease-in-circ": [
                "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                function (t, e, n, i) {
                  return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e;
                },
              ],
              "ease-out-circ": [
                "cubic-bezier(0.075, 0.820, 0.165, 1)",
                function (t, e, n, i) {
                  return n * Math.sqrt(1 - (t = t / i - 1) * t) + e;
                },
              ],
              "ease-in-out-circ": [
                "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                    : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                },
              ],
              "ease-in-back": [
                "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                function (t, e, n, i, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    n * (t /= i) * t * ((r + 1) * t - r) + e
                  );
                },
              ],
              "ease-out-back": [
                "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                function (t, e, n, i, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                  );
                },
              ],
              "ease-in-out-back": [
                "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                function (t, e, n, i, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    (t /= i / 2) < 1
                      ? (n / 2) * t * t * (((r *= 1.525) + 1) * t - r) + e
                      : (n / 2) *
                          ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) +
                        e
                  );
                },
              ],
            },
            f = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
            },
            h = window,
            v = "bkwld-tram",
            p = /[\-\.0-9]/g,
            m = /[A-Z]/,
            w = "number",
            g = /^(rgb|#)/,
            b = /(em|cm|mm|in|pt|pc|px)$/,
            y = /(em|cm|mm|in|pt|pc|px|%)$/,
            x = /(deg|rad|turn)$/,
            k = "unitless",
            E = /(all|none) 0s ease 0s/,
            _ = /^(width|height)$/,
            L = document.createElement("a"),
            T = ["Webkit", "Moz", "O", "ms"],
            A = ["-webkit-", "-moz-", "-o-", "-ms-"],
            O = function (t) {
              if (t in L.style) return { dom: t, css: t };
              var e,
                n,
                i = "",
                r = t.split("-");
              for (e = 0; e < r.length; e++)
                i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
              for (e = 0; e < T.length; e++)
                if ((n = T[e] + i) in L.style) return { dom: n, css: A[e] + t };
            },
            z = (e.support = {
              bind: Function.prototype.bind,
              transform: O("transform"),
              transition: O("transition"),
              backface: O("backface-visibility"),
              timing: O("transition-timing-function"),
            });
          if (z.transition) {
            var R = z.timing.dom;
            if (((L.style[R] = d["ease-in-back"][0]), !L.style[R]))
              for (var C in f) d[C][0] = f[C];
          }
          var $ = (e.frame =
              (s =
                h.requestAnimationFrame ||
                h.webkitRequestAnimationFrame ||
                h.mozRequestAnimationFrame ||
                h.oRequestAnimationFrame ||
                h.msRequestAnimationFrame) && z.bind
                ? s.bind(h)
                : function (t) {
                    h.setTimeout(t, 16);
                  }),
            I = (e.now =
              (c =
                (u = h.performance) &&
                (u.now || u.webkitNow || u.msNow || u.mozNow)) && z.bind
                ? c.bind(u)
                : Date.now ||
                  function () {
                    return +new Date();
                  }),
            M = l(function (e) {
              function n(t, e) {
                var n = (function (t) {
                    for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
                      var r = t[e];
                      r && i.push(r);
                    }
                    return i;
                  })(("" + t).split(" ")),
                  i = n[0];
                e = e || {};
                var r = G[i];
                if (!r) return o("Unsupported property: " + i);
                if (!e.weak || !this.props[i]) {
                  var a = r[0],
                    s = this.props[i];
                  return (
                    s || (s = this.props[i] = new a.Bare()),
                    s.init(this.$el, n, r, e),
                    s
                  );
                }
              }
              function i(t, e, i) {
                if (t) {
                  var o = typeof t;
                  if (
                    (e ||
                      (this.timer && this.timer.destroy(),
                      (this.queue = []),
                      (this.active = !1)),
                    "number" == o && e)
                  )
                    return (
                      (this.timer = new D({
                        duration: t,
                        context: this,
                        complete: r,
                      })),
                      void (this.active = !0)
                    );
                  if ("string" == o && e) {
                    switch (t) {
                      case "hide":
                        u.call(this);
                        break;
                      case "stop":
                        s.call(this);
                        break;
                      case "redraw":
                        c.call(this);
                        break;
                      default:
                        n.call(this, t, i && i[1]);
                    }
                    return r.call(this);
                  }
                  if ("function" == o) return void t.call(this, this);
                  if ("object" == o) {
                    var f = 0;
                    d.call(
                      this,
                      t,
                      function (t, e) {
                        t.span > f && (f = t.span), t.stop(), t.animate(e);
                      },
                      function (t) {
                        "wait" in t && (f = a(t.wait, 0));
                      }
                    ),
                      l.call(this),
                      f > 0 &&
                        ((this.timer = new D({ duration: f, context: this })),
                        (this.active = !0),
                        e && (this.timer.complete = r));
                    var h = this,
                      v = !1,
                      p = {};
                    $(function () {
                      d.call(h, t, function (t) {
                        t.active && ((v = !0), (p[t.name] = t.nextStyle));
                      }),
                        v && h.$el.css(p);
                    });
                  }
                }
              }
              function r() {
                if (
                  (this.timer && this.timer.destroy(),
                  (this.active = !1),
                  this.queue.length)
                ) {
                  var t = this.queue.shift();
                  i.call(this, t.options, !0, t.args);
                }
              }
              function s(t) {
                var e;
                this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1),
                  "string" == typeof t
                    ? ((e = {})[t] = 1)
                    : (e = "object" == typeof t && null != t ? t : this.props),
                  d.call(this, e, f),
                  l.call(this);
              }
              function u() {
                s.call(this), (this.el.style.display = "none");
              }
              function c() {
                this.el.offsetHeight;
              }
              function l() {
                var t,
                  e,
                  n = [];
                for (t in (this.upstream && n.push(this.upstream), this.props))
                  (e = this.props[t]).active && n.push(e.string);
                (n = n.join(",")),
                  this.style !== n &&
                    ((this.style = n), (this.el.style[z.transition.dom] = n));
              }
              function d(t, e, i) {
                var r,
                  a,
                  o,
                  s,
                  u = e !== f,
                  c = {};
                for (r in t)
                  (o = t[r]),
                    r in Y
                      ? (c.transform || (c.transform = {}),
                        (c.transform[r] = o))
                      : (m.test(r) &&
                          (r = r.replace(/[A-Z]/g, function (t) {
                            return "-" + t.toLowerCase();
                          })),
                        r in G ? (c[r] = o) : (s || (s = {}), (s[r] = o)));
                for (r in c) {
                  if (((o = c[r]), !(a = this.props[r]))) {
                    if (!u) continue;
                    a = n.call(this, r);
                  }
                  e.call(this, a, o);
                }
                i && s && i.call(this, s);
              }
              function f(t) {
                t.stop();
              }
              function h(t, e) {
                t.set(e);
              }
              function p(t) {
                this.$el.css(t);
              }
              function w(t, n) {
                e[t] = function () {
                  return this.children
                    ? g.call(this, n, arguments)
                    : (this.el && n.apply(this, arguments), this);
                };
              }
              function g(t, e) {
                var n,
                  i = this.children.length;
                for (n = 0; i > n; n++) t.apply(this.children[n], e);
                return this;
              }
              (e.init = function (e) {
                if (
                  ((this.$el = t(e)),
                  (this.el = this.$el[0]),
                  (this.props = {}),
                  (this.queue = []),
                  (this.style = ""),
                  (this.active = !1),
                  H.keepInherited && !H.fallback)
                ) {
                  var n = X(this.el, "transition");
                  n && !E.test(n) && (this.upstream = n);
                }
                z.backface &&
                  H.hideBackface &&
                  B(this.el, z.backface.css, "hidden");
              }),
                w("add", n),
                w("start", i),
                w("wait", function (t) {
                  (t = a(t, 0)),
                    this.active
                      ? this.queue.push({ options: t })
                      : ((this.timer = new D({
                          duration: t,
                          context: this,
                          complete: r,
                        })),
                        (this.active = !0));
                }),
                w("then", function (t) {
                  return this.active
                    ? (this.queue.push({ options: t, args: arguments }),
                      void (this.timer.complete = r))
                    : o(
                        "No active transition timer. Use start() or wait() before then()."
                      );
                }),
                w("next", r),
                w("stop", s),
                w("set", function (t) {
                  s.call(this, t), d.call(this, t, h, p);
                }),
                w("show", function (t) {
                  "string" != typeof t && (t = "block"),
                    (this.el.style.display = t);
                }),
                w("hide", u),
                w("redraw", c),
                w("destroy", function () {
                  s.call(this),
                    t.removeData(this.el, v),
                    (this.$el = this.el = null);
                });
            }),
            S = l(M, function (e) {
              function n(e, n) {
                var i = t.data(e, v) || t.data(e, v, new M.Bare());
                return i.el || i.init(e), n ? i.start(n) : i;
              }
              e.init = function (e, i) {
                var r = t(e);
                if (!r.length) return this;
                if (1 === r.length) return n(r[0], i);
                var a = [];
                return (
                  r.each(function (t, e) {
                    a.push(n(e, i));
                  }),
                  (this.children = a),
                  this
                );
              };
            }),
            N = l(function (t) {
              function e() {
                var t = this.get();
                this.update("auto");
                var e = this.get();
                return this.update(t), e;
              }
              var n = 500,
                r = "ease",
                s = 0;
              (t.init = function (t, e, i, o) {
                (this.$el = t), (this.el = t[0]);
                var u,
                  c,
                  l,
                  f = e[0];
                i[2] && (f = i[2]),
                  U[f] && (f = U[f]),
                  (this.name = f),
                  (this.type = i[1]),
                  (this.duration = a(e[1], this.duration, n)),
                  (this.ease =
                    ((u = e[2]),
                    (c = this.ease),
                    (l = r),
                    void 0 !== c && (l = c),
                    u in d ? u : l)),
                  (this.delay = a(e[3], this.delay, s)),
                  (this.span = this.duration + this.delay),
                  (this.active = !1),
                  (this.nextStyle = null),
                  (this.auto = _.test(this.name)),
                  (this.unit = o.unit || this.unit || H.defaultUnit),
                  (this.angle = o.angle || this.angle || H.defaultAngle),
                  H.fallback || o.fallback
                    ? (this.animate = this.fallback)
                    : ((this.animate = this.transition),
                      (this.string =
                        this.name +
                        " " +
                        this.duration +
                        "ms" +
                        ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                        (this.delay ? " " + this.delay + "ms" : "")));
              }),
                (t.set = function (t) {
                  (t = this.convert(t, this.type)),
                    this.update(t),
                    this.redraw();
                }),
                (t.transition = function (t) {
                  (this.active = !0),
                    (t = this.convert(t, this.type)),
                    this.auto &&
                      ("auto" == this.el.style[this.name] &&
                        (this.update(this.get()), this.redraw()),
                      "auto" == t && (t = e.call(this))),
                    (this.nextStyle = t);
                }),
                (t.fallback = function (t) {
                  var n =
                    this.el.style[this.name] ||
                    this.convert(this.get(), this.type);
                  (t = this.convert(t, this.type)),
                    this.auto &&
                      ("auto" == n && (n = this.convert(this.get(), this.type)),
                      "auto" == t && (t = e.call(this))),
                    (this.tween = new j({
                      from: n,
                      to: t,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this,
                    }));
                }),
                (t.get = function () {
                  return X(this.el, this.name);
                }),
                (t.update = function (t) {
                  B(this.el, this.name, t);
                }),
                (t.stop = function () {
                  (this.active || this.nextStyle) &&
                    ((this.active = !1),
                    (this.nextStyle = null),
                    B(this.el, this.name, this.get()));
                  var t = this.tween;
                  t && t.context && t.destroy();
                }),
                (t.convert = function (t, e) {
                  if ("auto" == t && this.auto) return t;
                  var n,
                    r,
                    a,
                    s,
                    u = "number" == typeof t,
                    c = "string" == typeof t;
                  switch (e) {
                    case w:
                      if (u) return t;
                      if (c && "" === t.replace(p, "")) return +t;
                      s = "number(unitless)";
                      break;
                    case g:
                      if (c) {
                        if ("" === t && this.original) return this.original;
                        if (e.test(t)) {
                          return "#" == t.charAt(0) && 7 == t.length
                            ? t
                            : ((n = t),
                              ((r = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n))
                                ? i(r[1], r[2], r[3])
                                : n
                              ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                        }
                      }
                      s = "hex or rgb string";
                      break;
                    case b:
                      if (u) return t + this.unit;
                      if (c && e.test(t)) return t;
                      s = "number(px) or string(unit)";
                      break;
                    case y:
                      if (u) return t + this.unit;
                      if (c && e.test(t)) return t;
                      s = "number(px) or string(unit or %)";
                      break;
                    case x:
                      if (u) return t + this.angle;
                      if (c && e.test(t)) return t;
                      s = "number(deg) or string(angle)";
                      break;
                    case k:
                      if (u || (c && y.test(t))) return t;
                      s = "number(unitless) or string(unit or %)";
                  }
                  return (
                    o(
                      "Type warning: Expected: [" +
                        s +
                        "] Got: [" +
                        typeof (a = t) +
                        "] " +
                        a
                    ),
                    t
                  );
                }),
                (t.redraw = function () {
                  this.el.offsetHeight;
                });
            }),
            q = l(N, function (t, e) {
              t.init = function () {
                e.init.apply(this, arguments),
                  this.original ||
                    (this.original = this.convert(this.get(), g));
              };
            }),
            F = l(N, function (t, e) {
              (t.init = function () {
                e.init.apply(this, arguments), (this.animate = this.fallback);
              }),
                (t.get = function () {
                  return this.$el[this.name]();
                }),
                (t.update = function (t) {
                  this.$el[this.name](t);
                });
            }),
            W = l(N, function (t, e) {
              function n(t, e) {
                var n, i, r, a, o;
                for (n in t)
                  (r = (a = Y[n])[0]),
                    (i = a[1] || n),
                    (o = this.convert(t[n], r)),
                    e.call(this, i, o, r);
              }
              (t.init = function () {
                e.init.apply(this, arguments),
                  this.current ||
                    ((this.current = {}),
                    Y.perspective &&
                      H.perspective &&
                      ((this.current.perspective = H.perspective),
                      B(this.el, this.name, this.style(this.current)),
                      this.redraw()));
              }),
                (t.set = function (t) {
                  n.call(this, t, function (t, e) {
                    this.current[t] = e;
                  }),
                    B(this.el, this.name, this.style(this.current)),
                    this.redraw();
                }),
                (t.transition = function (t) {
                  var e = this.values(t);
                  this.tween = new P({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                  });
                  var n,
                    i = {};
                  for (n in this.current)
                    i[n] = n in e ? e[n] : this.current[n];
                  (this.active = !0), (this.nextStyle = this.style(i));
                }),
                (t.fallback = function (t) {
                  var e = this.values(t);
                  this.tween = new P({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  });
                }),
                (t.update = function () {
                  B(this.el, this.name, this.style(this.current));
                }),
                (t.style = function (t) {
                  var e,
                    n = "";
                  for (e in t) n += e + "(" + t[e] + ") ";
                  return n;
                }),
                (t.values = function (t) {
                  var e,
                    i = {};
                  return (
                    n.call(this, t, function (t, n, r) {
                      (i[t] = n),
                        void 0 === this.current[t] &&
                          ((e = 0),
                          ~t.indexOf("scale") && (e = 1),
                          (this.current[t] = this.convert(e, r)));
                    }),
                    i
                  );
                });
            }),
            j = l(function (e) {
              function a() {
                var t,
                  e,
                  n,
                  i = u.length;
                if (i)
                  for ($(a), e = I(), t = i; t--; ) (n = u[t]) && n.render(e);
              }
              var s = { ease: d.ease[1], from: 0, to: 1 };
              (e.init = function (t) {
                (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                var e = t.ease || s.ease;
                d[e] && (e = d[e][1]),
                  "function" != typeof e && (e = s.ease),
                  (this.ease = e),
                  (this.update = t.update || r),
                  (this.complete = t.complete || r),
                  (this.context = t.context || this),
                  (this.name = t.name);
                var n = t.from,
                  i = t.to;
                void 0 === n && (n = s.from),
                  void 0 === i && (i = s.to),
                  (this.unit = t.unit || ""),
                  "number" == typeof n && "number" == typeof i
                    ? ((this.begin = n), (this.change = i - n))
                    : this.format(i, n),
                  (this.value = this.begin + this.unit),
                  (this.start = I()),
                  !1 !== t.autoplay && this.play();
              }),
                (e.play = function () {
                  var t;
                  this.active ||
                    (this.start || (this.start = I()),
                    (this.active = !0),
                    (t = this),
                    1 === u.push(t) && $(a));
                }),
                (e.stop = function () {
                  var e, n, i;
                  this.active &&
                    ((this.active = !1),
                    (e = this),
                    (i = t.inArray(e, u)) >= 0 &&
                      ((n = u.slice(i + 1)),
                      (u.length = i),
                      n.length && (u = u.concat(n))));
                }),
                (e.render = function (t) {
                  var e,
                    n = t - this.start;
                  if (this.delay) {
                    if (n <= this.delay) return;
                    n -= this.delay;
                  }
                  if (n < this.duration) {
                    var r,
                      a,
                      o,
                      s = this.ease(n, 0, 1, this.duration);
                    return (
                      (e = this.startRGB
                        ? ((r = this.startRGB),
                          (a = this.endRGB),
                          (o = s),
                          i(
                            r[0] + o * (a[0] - r[0]),
                            r[1] + o * (a[1] - r[1]),
                            r[2] + o * (a[2] - r[2])
                          ))
                        : Math.round((this.begin + s * this.change) * c) / c),
                      (this.value = e + this.unit),
                      void this.update.call(this.context, this.value)
                    );
                  }
                  (e = this.endHex || this.begin + this.change),
                    (this.value = e + this.unit),
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy();
                }),
                (e.format = function (t, e) {
                  if (((e += ""), "#" == (t += "").charAt(0)))
                    return (
                      (this.startRGB = n(e)),
                      (this.endRGB = n(t)),
                      (this.endHex = t),
                      (this.begin = 0),
                      void (this.change = 1)
                    );
                  if (!this.unit) {
                    var i = e.replace(p, "");
                    i !== t.replace(p, "") &&
                      o("Units do not match [tween]: " + e + ", " + t),
                      (this.unit = i);
                  }
                  (e = parseFloat(e)),
                    (t = parseFloat(t)),
                    (this.begin = this.value = e),
                    (this.change = t - e);
                }),
                (e.destroy = function () {
                  this.stop(),
                    (this.context = null),
                    (this.ease = this.update = this.complete = r);
                });
              var u = [],
                c = 1e3;
            }),
            D = l(j, function (t) {
              (t.init = function (t) {
                (this.duration = t.duration || 0),
                  (this.complete = t.complete || r),
                  (this.context = t.context),
                  this.play();
              }),
                (t.render = function (t) {
                  t - this.start < this.duration ||
                    (this.complete.call(this.context), this.destroy());
                });
            }),
            P = l(j, function (t, e) {
              (t.init = function (t) {
                var e, n;
                for (e in ((this.context = t.context),
                (this.update = t.update),
                (this.tweens = []),
                (this.current = t.current),
                t.values))
                  (n = t.values[e]),
                    this.current[e] !== n &&
                      this.tweens.push(
                        new j({
                          name: e,
                          from: this.current[e],
                          to: n,
                          duration: t.duration,
                          delay: t.delay,
                          ease: t.ease,
                          autoplay: !1,
                        })
                      );
                this.play();
              }),
                (t.render = function (t) {
                  var e,
                    n,
                    i = this.tweens.length,
                    r = !1;
                  for (e = i; e--; )
                    (n = this.tweens[e]).context &&
                      (n.render(t), (this.current[n.name] = n.value), (r = !0));
                  return r
                    ? void (this.update && this.update.call(this.context))
                    : this.destroy();
                }),
                (t.destroy = function () {
                  if ((e.destroy.call(this), this.tweens)) {
                    var t, n;
                    for (t = this.tweens.length; t--; )
                      this.tweens[t].destroy();
                    (this.tweens = null), (this.current = null);
                  }
                });
            }),
            H = (e.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !z.transition,
              agentTests: [],
            });
          (e.fallback = function (t) {
            if (!z.transition) return (H.fallback = !0);
            H.agentTests.push("(" + t + ")");
            var e = RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent);
          }),
            e.fallback("6.0.[2-5] Safari"),
            (e.tween = function (t) {
              return new j(t);
            }),
            (e.delay = function (t, e, n) {
              return new D({ complete: e, duration: t, context: n });
            }),
            (t.fn.tram = function (t) {
              return e.call(null, this, t);
            });
          var B = t.style,
            X = t.css,
            U = { transform: z.transform && z.transform.css },
            G = {
              color: [q, g],
              background: [q, g, "background-color"],
              "outline-color": [q, g],
              "border-color": [q, g],
              "border-top-color": [q, g],
              "border-right-color": [q, g],
              "border-bottom-color": [q, g],
              "border-left-color": [q, g],
              "border-width": [N, b],
              "border-top-width": [N, b],
              "border-right-width": [N, b],
              "border-bottom-width": [N, b],
              "border-left-width": [N, b],
              "border-spacing": [N, b],
              "letter-spacing": [N, b],
              margin: [N, b],
              "margin-top": [N, b],
              "margin-right": [N, b],
              "margin-bottom": [N, b],
              "margin-left": [N, b],
              padding: [N, b],
              "padding-top": [N, b],
              "padding-right": [N, b],
              "padding-bottom": [N, b],
              "padding-left": [N, b],
              "outline-width": [N, b],
              opacity: [N, w],
              top: [N, y],
              right: [N, y],
              bottom: [N, y],
              left: [N, y],
              "font-size": [N, y],
              "text-indent": [N, y],
              "word-spacing": [N, y],
              width: [N, y],
              "min-width": [N, y],
              "max-width": [N, y],
              height: [N, y],
              "min-height": [N, y],
              "max-height": [N, y],
              "line-height": [N, k],
              "scroll-top": [F, w, "scrollTop"],
              "scroll-left": [F, w, "scrollLeft"],
            },
            Y = {};
          z.transform &&
            ((G.transform = [W]),
            (Y = {
              x: [y, "translateX"],
              y: [y, "translateY"],
              rotate: [x],
              rotateX: [x],
              rotateY: [x],
              scale: [w],
              scaleX: [w],
              scaleY: [w],
              skew: [x],
              skewX: [x],
              skewY: [x],
            })),
            z.transform &&
              z.backface &&
              ((Y.z = [y, "translateZ"]),
              (Y.rotateZ = [x]),
              (Y.scaleZ = [w]),
              (Y.perspective = [b]));
          var Z = /ms/,
            K = /s|\./;
          return (t.tram = e);
        })(window.jQuery);
      },
      756: function (t, e, n) {
        "use strict";
        var i,
          r,
          a,
          o,
          s,
          u,
          c,
          l,
          d,
          f,
          h,
          v,
          p,
          m,
          w,
          g,
          b,
          y,
          x,
          k,
          E = window.$,
          _ = n(487) && E.tram;
        t.exports =
          (((i = {}).VERSION = "1.6.0-Webflow"),
          (r = {}),
          (a = Array.prototype),
          (o = Object.prototype),
          (s = Function.prototype),
          a.push,
          (u = a.slice),
          (c = (a.concat, o.toString, o.hasOwnProperty)),
          (l = a.forEach),
          (d = a.map),
          (f = (a.reduce, a.reduceRight, a.filter)),
          (h = (a.every, a.some)),
          (v = a.indexOf),
          (p = (a.lastIndexOf, Object.keys)),
          s.bind,
          (m =
            i.each =
            i.forEach =
              function (t, e, n) {
                if (null == t) return t;
                if (l && t.forEach === l) t.forEach(e, n);
                else if (t.length === +t.length) {
                  for (var a = 0, o = t.length; a < o; a++)
                    if (e.call(n, t[a], a, t) === r) return;
                } else {
                  for (var s = i.keys(t), a = 0, o = s.length; a < o; a++)
                    if (e.call(n, t[s[a]], s[a], t) === r) return;
                }
                return t;
              }),
          (i.map = i.collect =
            function (t, e, n) {
              var i = [];
              return null == t
                ? i
                : d && t.map === d
                ? t.map(e, n)
                : (m(t, function (t, r, a) {
                    i.push(e.call(n, t, r, a));
                  }),
                  i);
            }),
          (i.find = i.detect =
            function (t, e, n) {
              var i;
              return (
                w(t, function (t, r, a) {
                  if (e.call(n, t, r, a)) return (i = t), !0;
                }),
                i
              );
            }),
          (i.filter = i.select =
            function (t, e, n) {
              var i = [];
              return null == t
                ? i
                : f && t.filter === f
                ? t.filter(e, n)
                : (m(t, function (t, r, a) {
                    e.call(n, t, r, a) && i.push(t);
                  }),
                  i);
            }),
          (w =
            i.some =
            i.any =
              function (t, e, n) {
                e || (e = i.identity);
                var a = !1;
                return null == t
                  ? a
                  : h && t.some === h
                  ? t.some(e, n)
                  : (m(t, function (t, i, o) {
                      if (a || (a = e.call(n, t, i, o))) return r;
                    }),
                    !!a);
              }),
          (i.contains = i.include =
            function (t, e) {
              return (
                null != t &&
                (v && t.indexOf === v
                  ? -1 != t.indexOf(e)
                  : w(t, function (t) {
                      return t === e;
                    }))
              );
            }),
          (i.delay = function (t, e) {
            var n = u.call(arguments, 2);
            return setTimeout(function () {
              return t.apply(null, n);
            }, e);
          }),
          (i.defer = function (t) {
            return i.delay.apply(i, [t, 1].concat(u.call(arguments, 1)));
          }),
          (i.throttle = function (t) {
            var e, n, i;
            return function () {
              !e &&
                ((e = !0),
                (n = arguments),
                (i = this),
                _.frame(function () {
                  (e = !1), t.apply(i, n);
                }));
            };
          }),
          (i.debounce = function (t, e, n) {
            var r,
              a,
              o,
              s,
              u,
              c = function () {
                var l = i.now() - s;
                l < e
                  ? (r = setTimeout(c, e - l))
                  : ((r = null), !n && ((u = t.apply(o, a)), (o = a = null)));
              };
            return function () {
              (o = this), (a = arguments), (s = i.now());
              var l = n && !r;
              return (
                !r && (r = setTimeout(c, e)),
                l && ((u = t.apply(o, a)), (o = a = null)),
                u
              );
            };
          }),
          (i.defaults = function (t) {
            if (!i.isObject(t)) return t;
            for (var e = 1, n = arguments.length; e < n; e++) {
              var r = arguments[e];
              for (var a in r) void 0 === t[a] && (t[a] = r[a]);
            }
            return t;
          }),
          (i.keys = function (t) {
            if (!i.isObject(t)) return [];
            if (p) return p(t);
            var e = [];
            for (var n in t) i.has(t, n) && e.push(n);
            return e;
          }),
          (i.has = function (t, e) {
            return c.call(t, e);
          }),
          (i.isObject = function (t) {
            return t === Object(t);
          }),
          (i.now =
            Date.now ||
            function () {
              return new Date().getTime();
            }),
          (i.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          }),
          (g = /(.)^/),
          (b = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029",
          }),
          (y = /\\|'|\r|\n|\u2028|\u2029/g),
          (x = function (t) {
            return "\\" + b[t];
          }),
          (k = /^\s*(\w|\$)+\s*$/),
          (i.template = function (t, e, n) {
            !e && n && (e = n);
            var r,
              a = RegExp(
                [
                  ((e = i.defaults({}, e, i.templateSettings)).escape || g)
                    .source,
                  (e.interpolate || g).source,
                  (e.evaluate || g).source,
                ].join("|") + "|$",
                "g"
              ),
              o = 0,
              s = "__p+='";
            t.replace(a, function (e, n, i, r, a) {
              return (
                (s += t.slice(o, a).replace(y, x)),
                (o = a + e.length),
                n
                  ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                  : i
                  ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : r && (s += "';\n" + r + "\n__p+='"),
                e
              );
            }),
              (s += "';\n");
            var u = e.variable;
            if (u) {
              if (!k.test(u))
                throw Error("variable is not a bare identifier: " + u);
            } else (s = "with(obj||{}){\n" + s + "}\n"), (u = "obj");
            s =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              s +
              "return __p;\n";
            try {
              r = Function(e.variable || "obj", "_", s);
            } catch (t) {
              throw ((t.source = s), t);
            }
            var c = function (t) {
              return r.call(this, t, i);
            };
            return (c.source = "function(" + u + "){\n" + s + "}"), c;
          }),
          i);
      },
      461: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "brand",
          (t.exports = function (t) {
            var e,
              n = {},
              r = document,
              a = t("html"),
              o = t("body"),
              s = window.location,
              u = /PhantomJS/i.test(navigator.userAgent),
              c =
                "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function l() {
              var n =
                r.fullScreen ||
                r.mozFullScreen ||
                r.webkitIsFullScreen ||
                r.msFullscreenElement ||
                !!r.webkitFullscreenElement;
              t(e).attr("style", n ? "display: none !important;" : "");
            }
            n.ready = function () {
              var n = a.attr("data-wf-status"),
                i = a.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(i) && s.hostname !== i && (n = !0),
                n &&
                  !u &&
                  ((e =
                    e ||
                    (function () {})()),
                  d(),
                  setTimeout(d, 500),
                  t(r).off(c, l).on(c, l));
            };
            function d() {
              var t = o.children(".w-webflow-badge"),
                n = t.length && t.get(0) === e,
                r = i.env("editor");
              if (n) {
                r && t.remove();
                return;
              }
              t.length && t.remove(), !r && o.append(e);
            }
            return n;
          })
        );
      },
      322: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "edit",
          (t.exports = function (t, e, n) {
            if (
              ((n = n || {}),
              (i.env("test") || i.env("frame")) &&
                !n.fixture &&
                !(function () {
                  try {
                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                  } catch (t) {
                    return !1;
                  }
                })())
            )
              return { exit: 1 };
            var r,
              a = t(window),
              o = t(document.documentElement),
              s = document.location,
              u = "hashchange",
              c =
                n.load ||
                function () {
                  (r = !0),
                    (window.WebflowEditor = !0),
                    a.off(u, d),
                    (function (t) {
                      var e = window.document.createElement("iframe");
                      (e.src =
                        "https://webflow.com/site/third-party-cookie-check.html"),
                        (e.style.display = "none"),
                        (e.sandbox = "allow-scripts allow-same-origin");
                      var n = function (i) {
                        "WF_third_party_cookies_unsupported" === i.data
                          ? (v(e, n), t(!1))
                          : "WF_third_party_cookies_supported" === i.data &&
                            (v(e, n), t(!0));
                      };
                      (e.onerror = function () {
                        v(e, n), t(!1);
                      }),
                        window.addEventListener("message", n, !1),
                        window.document.body.appendChild(e);
                    })(function (e) {
                      t.ajax({
                        url: h(
                          "https://editor-api.webflow.com/api/editor/view"
                        ),
                        data: { siteId: o.attr("data-wf-site") },
                        xhrFields: { withCredentials: !0 },
                        dataType: "json",
                        crossDomain: !0,
                        success: (function (e) {
                          return function (n) {
                            if (!n) {
                              console.error("Could not load editor data");
                              return;
                            }
                            (n.thirdPartyCookiesSupported = e),
                              (function (e, n) {
                                t.ajax({
                                  type: "GET",
                                  url: e,
                                  dataType: "script",
                                  cache: !0,
                                }).then(n, f);
                              })(
                                (function (t) {
                                  return t.indexOf("//") >= 0
                                    ? t
                                    : h("https://editor-api.webflow.com" + t);
                                })(n.scriptPath),
                                function () {
                                  window.WebflowEditor(n);
                                }
                              );
                          };
                        })(e),
                      });
                    });
                },
              l = !1;
            try {
              l =
                localStorage &&
                localStorage.getItem &&
                localStorage.getItem("WebflowEditor");
            } catch (t) {}
            function d() {
              if (!r) /\?edit/.test(s.hash) && c();
            }
            l
              ? c()
              : s.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
                  /\?edit$/.test(s.href)) &&
                c()
              : a.on(u, d).triggerHandler(u);
            function f(t, e, n) {
              throw (console.error("Could not load editor script: " + e), n);
            }
            function h(t) {
              return t.replace(/([^:])\/\//g, "$1/");
            }
            function v(t, e) {
              window.removeEventListener("message", e, !1), t.remove();
            }
            return {};
          })
        );
      },
      338: function (t, e, n) {
        "use strict";
        n(949).define(
          "focus-visible",
          (t.exports = function () {
            return {
              ready: function () {
                if ("undefined" != typeof document)
                  try {
                    document.querySelector(":focus-visible");
                  } catch (t) {
                    !(function (t) {
                      var e = !0,
                        n = !1,
                        i = null,
                        r = {
                          text: !0,
                          search: !0,
                          url: !0,
                          tel: !0,
                          email: !0,
                          password: !0,
                          number: !0,
                          date: !0,
                          month: !0,
                          week: !0,
                          time: !0,
                          datetime: !0,
                          "datetime-local": !0,
                        };
                      function a(t) {
                        return (
                          (!!t &&
                            t !== document &&
                            "HTML" !== t.nodeName &&
                            "BODY" !== t.nodeName &&
                            "classList" in t &&
                            "contains" in t.classList) ||
                          !1
                        );
                      }
                      function o(t) {
                        if (!t.getAttribute("data-wf-focus-visible"))
                          t.setAttribute("data-wf-focus-visible", "true");
                      }
                      function s() {
                        e = !1;
                      }
                      function u() {
                        document.addEventListener("mousemove", c),
                          document.addEventListener("mousedown", c),
                          document.addEventListener("mouseup", c),
                          document.addEventListener("pointermove", c),
                          document.addEventListener("pointerdown", c),
                          document.addEventListener("pointerup", c),
                          document.addEventListener("touchmove", c),
                          document.addEventListener("touchstart", c),
                          document.addEventListener("touchend", c);
                      }
                      function c(t) {
                        if (
                          !t.target.nodeName ||
                          "html" !== t.target.nodeName.toLowerCase()
                        )
                          (e = !1),
                            document.removeEventListener("mousemove", c),
                            document.removeEventListener("mousedown", c),
                            document.removeEventListener("mouseup", c),
                            document.removeEventListener("pointermove", c),
                            document.removeEventListener("pointerdown", c),
                            document.removeEventListener("pointerup", c),
                            document.removeEventListener("touchmove", c),
                            document.removeEventListener("touchstart", c),
                            document.removeEventListener("touchend", c);
                      }
                      document.addEventListener(
                        "keydown",
                        function (n) {
                          if (!n.metaKey && !n.altKey && !n.ctrlKey)
                            a(t.activeElement) && o(t.activeElement), (e = !0);
                        },
                        !0
                      ),
                        document.addEventListener("mousedown", s, !0),
                        document.addEventListener("pointerdown", s, !0),
                        document.addEventListener("touchstart", s, !0),
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            "hidden" === document.visibilityState &&
                              (n && (e = !0), u());
                          },
                          !0
                        ),
                        u(),
                        t.addEventListener(
                          "focus",
                          function (t) {
                            var n, i, s;
                            if (!!a(t.target)) {
                              if (
                                e ||
                                ((i = (n = t.target).type),
                                ("INPUT" === (s = n.tagName) &&
                                  r[i] &&
                                  !n.readOnly) ||
                                  ("TEXTAREA" === s && !n.readOnly) ||
                                  n.isContentEditable)
                              )
                                o(t.target);
                            }
                          },
                          !0
                        ),
                        t.addEventListener(
                          "blur",
                          function (t) {
                            if (!!a(t.target))
                              t.target.hasAttribute("data-wf-focus-visible") &&
                                ((n = !0),
                                window.clearTimeout(i),
                                (i = window.setTimeout(function () {
                                  n = !1;
                                }, 100)),
                                !(function (t) {
                                  if (!!t.getAttribute("data-wf-focus-visible"))
                                    t.removeAttribute("data-wf-focus-visible");
                                })(t.target));
                          },
                          !0
                        );
                    })(document);
                  }
              },
            };
          })
        );
      },
      334: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "focus",
          (t.exports = function () {
            var t = [],
              e = !1;
            function n(n) {
              e &&
                (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                t.unshift(n));
            }
            function r(n) {
              var i, r;
              if (
                ((r = (i = n.target).tagName),
                (/^a$/i.test(r) && null != i.href) ||
                  (/^(button|textarea)$/i.test(r) && !0 !== i.disabled) ||
                  (/^input$/i.test(r) &&
                    /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                    !i.disabled) ||
                  (!/^(button|input|textarea|select|a)$/i.test(r) &&
                    !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                  /^audio$/i.test(r) ||
                  (/^video$/i.test(r) && !0 === i.controls))
              )
                (e = !0),
                  setTimeout(() => {
                    for (e = !1, n.target.focus(); t.length > 0; ) {
                      var i = t.pop();
                      i.target.dispatchEvent(new MouseEvent(i.type, i));
                    }
                  }, 0);
            }
            return {
              ready: function () {
                "undefined" != typeof document &&
                  document.body.hasAttribute("data-wf-focus-within") &&
                  i.env.safari &&
                  (document.addEventListener("mousedown", r, !0),
                  document.addEventListener("mouseup", n, !0),
                  document.addEventListener("click", n, !0));
              },
            };
          })
        );
      },
      199: function (t) {
        "use strict";
        var e = window.jQuery,
          n = {},
          i = [],
          r = ".w-ix",
          a = {
            reset: function (t, e) {
              e.__wf_intro = null;
            },
            intro: function (t, i) {
              if (!i.__wf_intro)
                (i.__wf_intro = !0), e(i).triggerHandler(n.types.INTRO);
            },
            outro: function (t, i) {
              if (!!i.__wf_intro)
                (i.__wf_intro = null), e(i).triggerHandler(n.types.OUTRO);
            },
          };
        (n.triggers = {}),
          (n.types = { INTRO: "w-ix-intro" + r, OUTRO: "w-ix-outro" + r }),
          (n.init = function () {
            for (var t = i.length, r = 0; r < t; r++) {
              var o = i[r];
              o[0](0, o[1]);
            }
            (i = []), e.extend(n.triggers, a);
          }),
          (n.async = function () {
            for (var t in a) {
              var e = a[t];
              if (!!a.hasOwnProperty(t))
                n.triggers[t] = function (t, n) {
                  i.push([e, n]);
                };
            }
          }),
          n.async(),
          (t.exports = n);
      },
      134: function (t, e, n) {
        "use strict";
        var i = n(199);
        function r(t, e) {
          var n = document.createEvent("CustomEvent");
          n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var a = window.jQuery,
          o = {},
          s = ".w-ix";
        (o.triggers = {}),
          (o.types = { INTRO: "w-ix-intro" + s, OUTRO: "w-ix-outro" + s }),
          a.extend(o.triggers, {
            reset: function (t, e) {
              i.triggers.reset(t, e);
            },
            intro: function (t, e) {
              i.triggers.intro(t, e), r(e, "COMPONENT_ACTIVE");
            },
            outro: function (t, e) {
              i.triggers.outro(t, e), r(e, "COMPONENT_INACTIVE");
            },
          }),
          (t.exports = o);
      },
      949: function (t, e, n) {
        "use strict";
        var i,
          r,
          a = {},
          o = {},
          s = [],
          u = window.Webflow || [],
          c = window.jQuery,
          l = c(window),
          d = c(document),
          f = c.isFunction,
          h = (a._ = n(756)),
          v = (a.tram = n(487) && c.tram),
          p = !1,
          m = !1;
        function w(t) {
          a.env() &&
            (f(t.design) && l.on("__wf_design", t.design),
            f(t.preview) && l.on("__wf_preview", t.preview)),
            f(t.destroy) && l.on("__wf_destroy", t.destroy),
            t.ready &&
              f(t.ready) &&
              (function (t) {
                if (p) {
                  t.ready();
                  return;
                }
                if (!h.contains(s, t.ready)) s.push(t.ready);
              })(t);
        }
        (v.config.hideBackface = !1),
          (v.config.keepInherited = !0),
          (a.define = function (t, e, n) {
            o[t] && g(o[t]);
            var i = (o[t] = e(c, h, n) || {});
            return w(i), i;
          }),
          (a.require = function (t) {
            return o[t];
          });
        function g(t) {
          f(t.design) && l.off("__wf_design", t.design),
            f(t.preview) && l.off("__wf_preview", t.preview),
            f(t.destroy) && l.off("__wf_destroy", t.destroy),
            t.ready &&
              f(t.ready) &&
              (function (t) {
                s = h.filter(s, function (e) {
                  return e !== t.ready;
                });
              })(t);
        }
        (a.push = function (t) {
          if (p) {
            f(t) && t();
            return;
          }
          u.push(t);
        }),
          (a.env = function (t) {
            var e = window.__wf_design,
              n = void 0 !== e;
            return t
              ? "design" === t
                ? n && e
                : "preview" === t
                ? n && !e
                : "slug" === t
                ? n && window.__wf_slug
                : "editor" === t
                ? window.WebflowEditor
                : "test" === t
                ? window.__wf_test
                : "frame" === t
                ? window !== window.top
                : void 0
              : n;
          });
        var b = navigator.userAgent.toLowerCase(),
          y = (a.env.touch =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)),
          x = (a.env.chrome =
            /chrome/.test(b) &&
            /Google/.test(navigator.vendor) &&
            parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
          k = (a.env.ios = /(ipod|iphone|ipad)/.test(b));
        (a.env.safari = /safari/.test(b) && !x && !k),
          y &&
            d.on("touchstart mousedown", function (t) {
              i = t.target;
            }),
          (a.validClick = y
            ? function (t) {
                return t === i || c.contains(t, i);
              }
            : function () {
                return !0;
              });
        var E = "resize.webflow orientationchange.webflow load.webflow",
          _ = "scroll.webflow " + E;
        function L(t, e) {
          var n = [],
            i = {};
          return (
            (i.up = h.throttle(function (t) {
              h.each(n, function (e) {
                e(t);
              });
            })),
            t && e && t.on(e, i.up),
            (i.on = function (t) {
              if (!("function" != typeof t || h.contains(n, t))) n.push(t);
            }),
            (i.off = function (t) {
              if (!arguments.length) {
                n = [];
                return;
              }
              n = h.filter(n, function (e) {
                return e !== t;
              });
            }),
            i
          );
        }
        function T(t) {
          f(t) && t();
        }
        (a.resize = L(l, E)),
          (a.scroll = L(l, _)),
          (a.redraw = L()),
          (a.location = function (t) {
            window.location = t;
          }),
          a.env() && (a.location = function () {}),
          (a.ready = function () {
            (p = !0),
              m
                ? (function () {
                    (m = !1), h.each(o, w);
                  })()
                : h.each(s, T),
              h.each(u, T),
              a.resize.up();
          });
        function A() {
          r && (r.reject(), l.off("load", r.resolve)),
            (r = new c.Deferred()),
            l.on("load", r.resolve);
        }
        (a.load = function (t) {
          r.then(t);
        }),
          (a.destroy = function (t) {
            (t = t || {}),
              (m = !0),
              l.triggerHandler("__wf_destroy"),
              null != t.domready && (p = t.domready),
              h.each(o, g),
              a.resize.off(),
              a.scroll.off(),
              a.redraw.off(),
              (s = []),
              (u = []),
              "pending" === r.state() && A();
          }),
          c(a.ready),
          A(),
          (t.exports = window.Webflow = a);
      },
      624: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "links",
          (t.exports = function (t, e) {
            var n,
              r,
              a,
              o = {},
              s = t(window),
              u = i.env(),
              c = window.location,
              l = document.createElement("a"),
              d = "w--current",
              f = /index\.(html|php)$/,
              h = /\/$/;
            o.ready =
              o.design =
              o.preview =
                function () {
                  (n = u && i.env("design")),
                    (a = i.env("slug") || c.pathname || ""),
                    i.scroll.off(v),
                    (r = []);
                  for (var e = document.links, o = 0; o < e.length; ++o)
                    (function (e) {
                      if (e.getAttribute("hreflang")) return;
                      var i =
                        (n && e.getAttribute("href-disabled")) ||
                        e.getAttribute("href");
                      if (((l.href = i), i.indexOf(":") >= 0)) return;
                      var o = t(e);
                      if (
                        l.hash.length > 1 &&
                        l.host + l.pathname === c.host + c.pathname
                      ) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                        var s = t(l.hash);
                        s.length && r.push({ link: o, sec: s, active: !1 });
                        return;
                      }
                      if ("#" !== i && "" !== i)
                        p(
                          o,
                          d,
                          l.href === c.href ||
                            i === a ||
                            (f.test(i) && h.test(a))
                        );
                    })(e[o]);
                  r.length && (i.scroll.on(v), v());
                };
            function v() {
              var t = s.scrollTop(),
                n = s.height();
              e.each(r, function (e) {
                if (e.link.attr("hreflang")) return;
                var i = e.link,
                  r = e.sec,
                  a = r.offset().top,
                  o = r.outerHeight(),
                  s = 0.5 * n,
                  u = r.is(":visible") && a + o - s >= t && a + s <= t + n;
                if (e.active !== u) (e.active = u), p(i, d, u);
              });
            }
            function p(t, e, n) {
              var i = t.hasClass(e);
              if ((!n || !i) && (!!n || !!i))
                n ? t.addClass(e) : t.removeClass(e);
            }
            return o;
          })
        );
      },
      286: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "scroll",
          (t.exports = function (t) {
            var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll",
              },
              n = window.location,
              r = (function () {
                try {
                  return !!window.frameElement;
                } catch (t) {
                  return !0;
                }
              })()
                ? null
                : window.history,
              a = t(window),
              o = t(document),
              s = t(document.body),
              u =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (t) {
                  window.setTimeout(t, 15);
                },
              c = i.env("editor") ? ".w-editor-body" : "body",
              l =
                "header, " +
                c +
                " > .header, " +
                c +
                " > .w-nav:not([data-no-scroll])",
              d = 'a[href="#"]',
              f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
              h = document.createElement("style");
            h.appendChild(
              document.createTextNode(
                '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              )
            );
            var v = /^#[a-zA-Z0-9][\w:.-]*$/;
            let p =
              "function" == typeof window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)");
            function m(t, e) {
              var n;
              switch (e) {
                case "add":
                  (n = t.attr("tabindex"))
                    ? t.attr("data-wf-tabindex-swap", n)
                    : t.attr("tabindex", "-1");
                  break;
                case "remove":
                  (n = t.attr("data-wf-tabindex-swap"))
                    ? (t.attr("tabindex", n),
                      t.removeAttr("data-wf-tabindex-swap"))
                    : t.removeAttr("tabindex");
              }
              t.toggleClass("wf-force-outline-none", "add" === e);
            }
            function w(e) {
              var o,
                c = e.currentTarget;
              if (
                !(
                  i.env("design") ||
                  (window.$.mobile &&
                    /(?:^|\s)ui-link(?:$|\s)/.test(c.className))
                )
              ) {
                var d = ((o = c),
                v.test(o.hash) && o.host + o.pathname === n.host + n.pathname)
                  ? c.hash
                  : "";
                if ("" !== d) {
                  var f = t(d);
                  if (!f.length) return;
                  e && (e.preventDefault(), e.stopPropagation()),
                    (function (t) {
                      n.hash !== t &&
                        r &&
                        r.pushState &&
                        !(i.env.chrome && "file:" === n.protocol) &&
                        (r.state && r.state.hash) !== t &&
                        r.pushState({ hash: t }, "", t);
                    })(d, e),
                    window.setTimeout(
                      function () {
                        (function (e, n) {
                          var i = a.scrollTop(),
                            r = (function (e) {
                              var n = t(l),
                                i =
                                  "fixed" === n.css("position")
                                    ? n.outerHeight()
                                    : 0,
                                r = e.offset().top - i;
                              if ("mid" === e.data("scroll")) {
                                var o = a.height() - i,
                                  s = e.outerHeight();
                                s < o && (r -= Math.round((o - s) / 2));
                              }
                              return r;
                            })(e);
                          if (i !== r) {
                            var o = (function (t, e, n) {
                                if (
                                  "none" ===
                                    document.body.getAttribute(
                                      "data-wf-scroll-motion"
                                    ) ||
                                  p.matches
                                )
                                  return 0;
                                var i = 1;
                                return (
                                  s.add(t).each(function (t, e) {
                                    var n = parseFloat(
                                      e.getAttribute("data-scroll-time")
                                    );
                                    !isNaN(n) && n >= 0 && (i = n);
                                  }),
                                  (472.143 * Math.log(Math.abs(e - n) + 125) -
                                    2e3) *
                                    i
                                );
                              })(e, i, r),
                              c = Date.now(),
                              d = function () {
                                var t = Date.now() - c;
                                window.scroll(
                                  0,
                                  (function (t, e, n, i) {
                                    return n > i
                                      ? e
                                      : t +
                                          (e - t) *
                                            (function (t) {
                                              return t < 0.5
                                                ? 4 * t * t * t
                                                : (t - 1) *
                                                    (2 * t - 2) *
                                                    (2 * t - 2) +
                                                    1;
                                            })(n / i);
                                  })(i, r, t, o)
                                ),
                                  t <= o ? u(d) : "function" == typeof n && n();
                              };
                            u(d);
                          }
                        })(f, function () {
                          m(f, "add"),
                            f.get(0).focus({ preventScroll: !0 }),
                            m(f, "remove");
                        });
                      },
                      e ? 0 : 300
                    );
                }
              }
            }
            return {
              ready: function () {
                var { WF_CLICK_EMPTY: t, WF_CLICK_SCROLL: n } = e;
                o.on(n, f, w),
                  o.on(t, d, function (t) {
                    t.preventDefault();
                  }),
                  document.head.insertBefore(h, document.head.firstChild);
              },
            };
          })
        );
      },
      695: function (t, e, n) {
        "use strict";
        n(949).define(
          "touch",
          (t.exports = function (t) {
            var e = {},
              n = window.getSelection;
            function i(e) {
              var i,
                r,
                a = !1,
                o = !1,
                s = Math.min(Math.round(0.04 * window.innerWidth), 40);
              function u(t) {
                var e = t.touches;
                if (!e || !(e.length > 1))
                  (a = !0),
                    e ? ((o = !0), (i = e[0].clientX)) : (i = t.clientX),
                    (r = i);
              }
              function c(e) {
                if (!!a) {
                  if (o && "mousemove" === e.type) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                  }
                  var i = e.touches,
                    u = i ? i[0].clientX : e.clientX,
                    c = u - r;
                  (r = u),
                    Math.abs(c) > s &&
                      n &&
                      "" === String(n()) &&
                      ((function (e, n, i) {
                        var r = t.Event(e, { originalEvent: n });
                        t(n.target).trigger(r, i);
                      })("swipe", e, { direction: c > 0 ? "right" : "left" }),
                      d());
                }
              }
              function l(t) {
                if (!!a) {
                  if (((a = !1), o && "mouseup" === t.type)) {
                    t.preventDefault(), t.stopPropagation(), (o = !1);
                    return;
                  }
                }
              }
              function d() {
                a = !1;
              }
              e.addEventListener("touchstart", u, !1),
                e.addEventListener("touchmove", c, !1),
                e.addEventListener("touchend", l, !1),
                e.addEventListener("touchcancel", d, !1),
                e.addEventListener("mousedown", u, !1),
                e.addEventListener("mousemove", c, !1),
                e.addEventListener("mouseup", l, !1),
                e.addEventListener("mouseout", d, !1);
              this.destroy = function () {
                e.removeEventListener("touchstart", u, !1),
                  e.removeEventListener("touchmove", c, !1),
                  e.removeEventListener("touchend", l, !1),
                  e.removeEventListener("touchcancel", d, !1),
                  e.removeEventListener("mousedown", u, !1),
                  e.removeEventListener("mousemove", c, !1),
                  e.removeEventListener("mouseup", l, !1),
                  e.removeEventListener("mouseout", d, !1),
                  (e = null);
              };
            }
            return (
              (t.event.special.tap = {
                bindType: "click",
                delegateType: "click",
              }),
              (e.init = function (e) {
                return (e = "string" == typeof e ? t(e).get(0) : e)
                  ? new i(e)
                  : null;
              }),
              (e.instance = e.init(document)),
              e
            );
          })
        );
      },
      345: function (t, e, n) {
        "use strict";
        var i = n(949),
          r = n(134);
        let a = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35,
          },
          o =
            'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        i.define(
          "slider",
          (t.exports = function (t, e) {
            var n,
              s,
              u,
              c = {},
              l = t.tram,
              d = t(document),
              f = i.env(),
              h = ".w-slider",
              v = "w-slider-force-show",
              p = r.triggers,
              m = !1;
            function w() {
              if (!(n = d.find(h)).length) return;
              if ((n.each(y), !u))
                g(),
                  (function () {
                    i.resize.on(b), i.redraw.on(c.redraw);
                  })();
            }
            function g() {
              i.resize.off(b), i.redraw.off(c.redraw);
            }
            (c.ready = function () {
              (s = i.env("design")), w();
            }),
              (c.design = function () {
                (s = !0), setTimeout(w, 1e3);
              }),
              (c.preview = function () {
                (s = !1), w();
              }),
              (c.redraw = function () {
                (m = !0), w(), (m = !1);
              }),
              (c.destroy = g);
            function b() {
              n.filter(":visible").each($);
            }
            function y(e, n) {
              var i = t(n),
                r = t.data(n, h);
              !r &&
                (r = t.data(n, h, {
                  index: 0,
                  depth: 1,
                  hasFocus: { keyboard: !1, mouse: !1 },
                  el: i,
                  config: {},
                })),
                (r.mask = i.children(".w-slider-mask")),
                (r.left = i.children(".w-slider-arrow-left")),
                (r.right = i.children(".w-slider-arrow-right")),
                (r.nav = i.children(".w-slider-nav")),
                (r.slides = r.mask.children(".w-slide")),
                r.slides.each(p.reset),
                m && (r.maskWidth = 0),
                void 0 === i.attr("role") && i.attr("role", "region"),
                void 0 === i.attr("aria-label") &&
                  i.attr("aria-label", "carousel");
              var a = r.mask.attr("id");
              if (
                (!a && ((a = "w-slider-mask-" + e), r.mask.attr("id", a)),
                !s &&
                  !r.ariaLiveLabel &&
                  (r.ariaLiveLabel = t(
                    '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                  ).appendTo(r.mask)),
                r.left.attr("role", "button"),
                r.left.attr("tabindex", "0"),
                r.left.attr("aria-controls", a),
                void 0 === r.left.attr("aria-label") &&
                  r.left.attr("aria-label", "previous slide"),
                r.right.attr("role", "button"),
                r.right.attr("tabindex", "0"),
                r.right.attr("aria-controls", a),
                void 0 === r.right.attr("aria-label") &&
                  r.right.attr("aria-label", "next slide"),
                !l.support.transform)
              ) {
                r.left.hide(), r.right.hide(), r.nav.hide(), (u = !0);
                return;
              }
              r.el.off(h),
                r.left.off(h),
                r.right.off(h),
                r.nav.off(h),
                x(r),
                s
                  ? (r.el.on("setting" + h, z(r)), O(r), (r.hasTimer = !1))
                  : (r.el.on("swipe" + h, z(r)),
                    r.left.on("click" + h, L(r)),
                    r.right.on("click" + h, T(r)),
                    r.left.on("keydown" + h, _(r, L)),
                    r.right.on("keydown" + h, _(r, T)),
                    r.nav.on("keydown" + h, "> div", z(r)),
                    r.config.autoplay &&
                      !r.hasTimer &&
                      ((r.hasTimer = !0), (r.timerCount = 1), A(r)),
                    r.el.on("mouseenter" + h, E(r, !0, "mouse")),
                    r.el.on("focusin" + h, E(r, !0, "keyboard")),
                    r.el.on("mouseleave" + h, E(r, !1, "mouse")),
                    r.el.on("focusout" + h, E(r, !1, "keyboard"))),
                r.nav.on("click" + h, "> div", z(r)),
                !f &&
                  r.mask
                    .contents()
                    .filter(function () {
                      return 3 === this.nodeType;
                    })
                    .remove();
              var o = i.filter(":hidden");
              o.addClass(v);
              var c = i.parents(":hidden");
              c.addClass(v), !m && $(e, n), o.removeClass(v), c.removeClass(v);
            }
            function x(t) {
              var e = {};
              (e.crossOver = 0),
                (e.animation = t.el.attr("data-animation") || "slide"),
                "outin" === e.animation &&
                  ((e.animation = "cross"), (e.crossOver = 0.5)),
                (e.easing = t.el.attr("data-easing") || "ease");
              var n = t.el.attr("data-duration");
              if (
                ((e.duration = null != n ? parseInt(n, 10) : 500),
                k(t.el.attr("data-infinite")) && (e.infinite = !0),
                k(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                k(t.el.attr("data-hide-arrows"))
                  ? (e.hideArrows = !0)
                  : t.config.hideArrows && (t.left.show(), t.right.show()),
                k(t.el.attr("data-autoplay")))
              ) {
                (e.autoplay = !0),
                  (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3),
                  (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
                var i = "mousedown" + h + " touchstart" + h;
                !s &&
                  t.el.off(i).one(i, function () {
                    O(t);
                  });
              }
              var r = t.right.width();
              (e.edge = r ? r + 40 : 100), (t.config = e);
            }
            function k(t) {
              return "1" === t || "true" === t;
            }
            function E(e, n, i) {
              return function (r) {
                if (n) e.hasFocus[i] = n;
                else {
                  if (t.contains(e.el.get(0), r.relatedTarget)) return;
                  if (
                    ((e.hasFocus[i] = n),
                    (e.hasFocus.mouse && "keyboard" === i) ||
                      (e.hasFocus.keyboard && "mouse" === i))
                  )
                    return;
                }
                n
                  ? (e.ariaLiveLabel.attr("aria-live", "polite"),
                    e.hasTimer && O(e))
                  : (e.ariaLiveLabel.attr("aria-live", "off"),
                    e.hasTimer && A(e));
              };
            }
            function _(t, e) {
              return function (n) {
                switch (n.keyCode) {
                  case a.SPACE:
                  case a.ENTER:
                    return e(t)(), n.preventDefault(), n.stopPropagation();
                }
              };
            }
            function L(t) {
              return function () {
                C(t, { index: t.index - 1, vector: -1 });
              };
            }
            function T(t) {
              return function () {
                C(t, { index: t.index + 1, vector: 1 });
              };
            }
            function A(t) {
              O(t);
              var e = t.config,
                n = e.timerMax;
              if (!(n && t.timerCount++ > n))
                t.timerId = window.setTimeout(function () {
                  if (null != t.timerId && !s) T(t)(), A(t);
                }, e.delay);
            }
            function O(t) {
              window.clearTimeout(t.timerId), (t.timerId = null);
            }
            function z(n) {
              return function (r, o) {
                o = o || {};
                var u,
                  c,
                  l,
                  d = n.config;
                if (s && "setting" === r.type) {
                  if ("prev" === o.select) return L(n)();
                  if ("next" === o.select) return T(n)();
                  if ((x(n), I(n), null == o.select)) return;
                  return (
                    (u = n),
                    (c = o.select),
                    (l = null),
                    c === u.slides.length && (w(), I(u)),
                    e.each(u.anchors, function (e, n) {
                      t(e.els).each(function (e, i) {
                        t(i).index() === c && (l = n);
                      });
                    }),
                    null != l && C(u, { index: l, immediate: !0 }),
                    void 0
                  );
                }
                if ("swipe" === r.type)
                  return d.disableSwipe || i.env("editor")
                    ? void 0
                    : "left" === o.direction
                    ? T(n)()
                    : "right" === o.direction
                    ? L(n)()
                    : void 0;
                if (n.nav.has(r.target).length) {
                  var f = t(r.target).index();
                  if (
                    ("click" === r.type && C(n, { index: f }),
                    "keydown" === r.type)
                  )
                    switch (r.keyCode) {
                      case a.ENTER:
                      case a.SPACE:
                        C(n, { index: f }), r.preventDefault();
                        break;
                      case a.ARROW_LEFT:
                      case a.ARROW_UP:
                        R(n.nav, Math.max(f - 1, 0)), r.preventDefault();
                        break;
                      case a.ARROW_RIGHT:
                      case a.ARROW_DOWN:
                        R(n.nav, Math.min(f + 1, n.pages)), r.preventDefault();
                        break;
                      case a.HOME:
                        R(n.nav, 0), r.preventDefault();
                        break;
                      case a.END:
                        R(n.nav, n.pages), r.preventDefault();
                        break;
                      default:
                        return;
                    }
                }
              };
            }
            function R(t, e) {
              var n = t.children().eq(e).focus();
              t.children().not(n);
            }
            function C(e, n) {
              n = n || {};
              var i = e.config,
                r = e.anchors;
              e.previous = e.index;
              var a = n.index,
                u = {};
              a < 0
                ? ((a = r.length - 1),
                  i.infinite &&
                    ((u.x = -e.endX), (u.from = 0), (u.to = r[0].width)))
                : a >= r.length &&
                  ((a = 0),
                  i.infinite &&
                    ((u.x = r[r.length - 1].width),
                    (u.from = -r[r.length - 1].x),
                    (u.to = u.from - u.x))),
                (e.index = a);
              var c = e.nav
                .children()
                .eq(a)
                .addClass("w-active")
                .attr("aria-pressed", "true")
                .attr("tabindex", "0");
              e.nav
                .children()
                .not(c)
                .removeClass("w-active")
                .attr("aria-pressed", "false")
                .attr("tabindex", "-1"),
                i.hideArrows &&
                  (e.index === r.length - 1 ? e.right.hide() : e.right.show(),
                  0 === e.index ? e.left.hide() : e.left.show());
              var d = e.offsetX || 0,
                f = (e.offsetX = -r[e.index].x),
                h = { x: f, opacity: 1, visibility: "" },
                v = t(r[e.index].els),
                w = t(r[e.previous] && r[e.previous].els),
                g = e.slides.not(v),
                b = i.animation,
                y = i.easing,
                x = Math.round(i.duration),
                k = n.vector || (e.index > e.previous ? 1 : -1),
                E = "opacity " + x + "ms " + y,
                _ = "transform " + x + "ms " + y;
              if (
                (v.find(o).removeAttr("tabindex"),
                v.removeAttr("aria-hidden"),
                v.find("*").removeAttr("aria-hidden"),
                g.find(o).attr("tabindex", "-1"),
                g.attr("aria-hidden", "true"),
                g.find("*").attr("aria-hidden", "true"),
                !s && (v.each(p.intro), g.each(p.outro)),
                n.immediate && !m)
              ) {
                l(v).set(h), A();
                return;
              }
              if (e.index !== e.previous) {
                if (
                  (!s && e.ariaLiveLabel.text(`Slide ${a + 1} of ${r.length}.`),
                  "cross" === b)
                ) {
                  var L = Math.round(x - x * i.crossOver),
                    T = Math.round(x - L);
                  (E = "opacity " + L + "ms " + y),
                    l(w).set({ visibility: "" }).add(E).start({ opacity: 0 }),
                    l(v)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++,
                      })
                      .add(E)
                      .wait(T)
                      .then({ opacity: 1 })
                      .then(A);
                  return;
                }
                if ("fade" === b) {
                  l(w).set({ visibility: "" }).stop(),
                    l(v)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++,
                      })
                      .add(E)
                      .start({ opacity: 1 })
                      .then(A);
                  return;
                }
                if ("over" === b) {
                  (h = { x: e.endX }),
                    l(w).set({ visibility: "" }).stop(),
                    l(v)
                      .set({
                        visibility: "",
                        zIndex: e.depth++,
                        x: f + r[e.index].width * k,
                      })
                      .add(_)
                      .start({ x: f })
                      .then(A);
                  return;
                }
                i.infinite && u.x
                  ? (l(e.slides.not(w))
                      .set({ visibility: "", x: u.x })
                      .add(_)
                      .start({ x: f }),
                    l(w)
                      .set({ visibility: "", x: u.from })
                      .add(_)
                      .start({ x: u.to }),
                    (e.shifted = w))
                  : (i.infinite &&
                      e.shifted &&
                      (l(e.shifted).set({ visibility: "", x: d }),
                      (e.shifted = null)),
                    l(e.slides).set({ visibility: "" }).add(_).start({ x: f }));
              }
              function A() {
                (v = t(r[e.index].els)),
                  (g = e.slides.not(v)),
                  "slide" !== b && (h.visibility = "hidden"),
                  l(g).set(h);
              }
            }
            function $(e, n) {
              var i = t.data(n, h);
              if (!!i) {
                if (
                  (function (t) {
                    var e = t.mask.width();
                    return t.maskWidth !== e && ((t.maskWidth = e), !0);
                  })(i)
                )
                  return I(i);
                s &&
                  (function (e) {
                    var n = 0;
                    return (
                      e.slides.each(function (e, i) {
                        n += t(i).outerWidth(!0);
                      }),
                      e.slidesWidth !== n && ((e.slidesWidth = n), !0)
                    );
                  })(i) &&
                  I(i);
              }
            }
            function I(e) {
              var n = 1,
                i = 0,
                r = 0,
                a = 0,
                o = e.maskWidth,
                u = o - e.config.edge;
              u < 0 && (u = 0),
                (e.anchors = [{ els: [], x: 0, width: 0 }]),
                e.slides.each(function (s, c) {
                  r - i > u &&
                    (n++,
                    (i += o),
                    (e.anchors[n - 1] = { els: [], x: r, width: 0 })),
                    (a = t(c).outerWidth(!0)),
                    (r += a),
                    (e.anchors[n - 1].width += a),
                    e.anchors[n - 1].els.push(c);
                  var l = s + 1 + " of " + e.slides.length;
                  t(c).attr("aria-label", l), t(c).attr("role", "group");
                }),
                (e.endX = r),
                s && (e.pages = null),
                e.nav.length &&
                  e.pages !== n &&
                  ((e.pages = n),
                  (function (e) {
                    var n,
                      i = [],
                      r = e.el.attr("data-nav-spacing");
                    r && (r = parseFloat(r) + "px");
                    for (var a = 0, o = e.pages; a < o; a++)
                      (n = t('<div class="w-slider-dot" data-wf-ignore />'))
                        .attr(
                          "aria-label",
                          "Show slide " + (a + 1) + " of " + o
                        )
                        .attr("aria-pressed", "false")
                        .attr("role", "button")
                        .attr("tabindex", "-1"),
                        e.nav.hasClass("w-num") && n.text(a + 1),
                        null != r &&
                          n.css({ "margin-left": r, "margin-right": r }),
                        i.push(n);
                    e.nav.empty().append(i);
                  })(e));
              var c = e.index;
              c >= n && (c = n - 1), C(e, { immediate: !0, index: c });
            }
            return c;
          })
        );
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  (n.rv = function () {
    return "1.1.8";
  }),
    (n.ruid = "bundler=rspack@1.1.8"),
    n(461),
    n(624),
    n(286),
    n(334),
    n(338),
    n(695),
    n(322),
    n(345);
})();
