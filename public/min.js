!function() {
    function p(e, t) {
        for (var r of e) t(r);
        return e
    }
    const h = (e, t) => e.push(t),
        y = e => p(e, e => e()),
        m = (e, t, r) => e.setAttribute(t, r),
        v = (e, t) => e.insertBefore(t, e.firstChild),
        f = e => {
            var t = document.createElement("div");
            return m(t, "id", e), t
        },
        E = e => e.offsetHeight,
        w = e => e.getBoundingClientRect(),
        L = (t, e, r) => {
            const n = [];
            return p(e.split(" "), e => {
                h(n, ((e, t, r) => e.removeEventListener(t, r)).bind(0, t, e, r)),
                t.addEventListener(e, r)
            }), y.bind(0, n)
        },
        g = (e, t, r) => r ? r.a / (r.a + r.b) : w(e).height / w(t).height;
    return e => {
        const t = ((e => {
            const [t, r] = (() => {
                const n = new Map;
                return [
                    (e, t) => {
                        const r = n.get(e) || new Set;
                        return n.set(e, r), p([t], e => r.add(e))
                    },
                    (e, t) => p((e = n.get(e), Array.from(e)), e => e(t))
                ]
            })();
            const n = {
                Z: d = (e = e.ownerDocument).documentElement,
                J: d,
                d: d,
                e: e,
                f: e.defaultView,
                c: e
            };
            const o = (c = n, [() => c, e => c = e]);
            const i = o[0];
            const s = (() => {
                const e = ((e => {
                    const t = o[1];
                    return () => t({
                        a: e.f.innerHeight,
                        b: e.J.scrollHeight - e.f.innerHeight
                    })
                }))(n);
                return () => p([e], e => e())
            })();
            var a = i.bind(0);
            var c, d;
            return n, d = n.Z, new ResizeObserver(() => {
                s(), r("u")
            }).observe(d), a.n = e => t("u", e), a.m = n, a
        })(e), r = ((e => {
            const [t] = (() => {
                var t, r, n, o;
                const {
                    c: i,
                    Z: s,
                    d: a
                } = e,
                    c = (e, n) => p(e, t => {
                        var [t, r] = n(t);
                        p(Object.keys(r), e => t.style[e] = r[e])
                    }),
                    d = [];
                return r = {
                    g: e = f("os"),
                    h: o = f("track"),
                    i: t = f("handle")
                }, v(e, o), v(o, t), h(d, r), n = r, m, e = i, o = a, y.bind(0, (((u, p, h, m) => {
                    const {
                        i: v,
                        h: f
                    } = n, g = "scrollTop", b = "clientY";
                    return L(f, "pointerdown", e => {
                        var r;
                        const n = Element.prototype.closest.call(e.target, "#handle") === v,
                            t = n ? v : f;
                        if (0 === e.button && e.isPrimary && n && u.scrollbars.pointers.includes(e.pointerType)) {
                            r = h[g];
                            const o = e[b],
                                i = w(v),
                                s = w(f),
                                a = i.top - s.top + i.height / 2,
                                c = n ? 0 : o - s.top - a,
                                d = e => {
                                    y(l), t.releasePointerCapture(e.pointerId)
                                },
                                l = [L(p, "pointerup pointerleave pointercancel lostpointercapture", d), L(f, "pointermove", e => {
                                    var t;
                                    e = e[b] - o, n && (e = c + e, t = m().b, e = e / (E(f) - E(v)) * t, h[g] = r + e)
                                })];
                            v.setPointerCapture(e.pointerId)
                        }
                    })
                })(l, e, o, u)), [{
                    k: r => c(d, e => {
                        var {
                            i: e,
                            h: t
                        } = e;
                        return [e, {
                            height: (100 * g(e, t, r)).toFixed(3) + "%"
                        }]
                    }),
                    l: o => c(d, e => {
                        var t, {
                            i: r,
                            h: n
                        } = e;
                        return [e, {
                            transform: `translateY(${(100 * (t = o.b, r = a.scrollTop / t, 1 / (t = g(e, n)) * (1 - t) * r)).toFixed(3)}%)`
                        }]
                    })
                }, v(s, d[0].g)])})(e.m, l = {
                    scrollbars: {
                        dragScroll: !0,
                        pointers: ["mouse", "touch", "pen"]
                    }
                }, u = e), r = e.m.e, {
                    k: n,
                    l: o
                } = t;
            var l, u;
            return L(r, "scroll", () => o(e())), () => {
                n(e()), o(e())
            }
        })(t);
        return t.n(() => r())
    }
}(document.body);
