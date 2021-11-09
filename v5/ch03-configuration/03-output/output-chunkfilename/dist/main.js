(() => {
  var e,
    r = {},
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) return n.exports;
    var i = (t[e] = { exports: {} });
    return r[e](i, i.exports, o), i.exports;
  }
  (o.m = r),
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) &&
          !o.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((r, t) => (o.f[t](e, r), r), []))),
    (o.u = (e) => e + '.chunk.js'),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (o.l = (r, t, n, i) => {
      if (e[r]) e[r].push(t);
      else {
        var a, l;
        if (void 0 !== n)
          for (
            var u = document.getElementsByTagName('script'), c = 0;
            c < u.length;
            c++
          ) {
            var s = u[c];
            if (s.getAttribute('src') == r) {
              a = s;
              break;
            }
          }
        a ||
          ((l = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          o.nc && a.setAttribute('nonce', o.nc),
          (a.src = r)),
          (e[r] = [t]);
        var d = (t, o) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var n = e[r];
            if (
              (delete e[r],
              a.parentNode && a.parentNode.removeChild(a),
              n && n.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          p = setTimeout(
            d.bind(null, void 0, { type: 'timeout', target: a }),
            12e4
          );
        (a.onerror = d.bind(null, a.onerror)),
          (a.onload = d.bind(null, a.onload)),
          l && document.head.appendChild(a);
      }
    }),
    (o.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + '');
      var r = o.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (o.p = e);
    })(),
    (() => {
      var e = { 179: 0 };
      o.f.j = (r, t) => {
        var n = o.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else {
            var i = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = i));
            var a = o.p + o.u(r),
              l = new Error();
            o.l(
              a,
              (t) => {
                if (o.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var i = t && ('load' === t.type ? 'missing' : t.type),
                    a = t && t.target && t.target.src;
                  (l.message =
                    'Loading chunk ' + r + ' failed.\n(' + i + ': ' + a + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = i),
                    (l.request = a),
                    n[1](l);
                }
              },
              'chunk-' + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            i,
            [a, l, u] = t,
            c = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (n in l) o.o(l, n) && (o.m[n] = l[n]);
            u && u(o);
          }
          for (r && r(t); c < a.length; c++)
            (i = a[c]), o.o(e, i) && e[i] && e[i][0](), (e[a[c]] = 0);
        },
        t = (self.webpackChunk = self.webpackChunk || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (async function () {
      const { default: e } = await o.e(395).then(o.bind(o, 395));
      return e;
    })().then((e) => {
      console.log(e);
    });
})();
