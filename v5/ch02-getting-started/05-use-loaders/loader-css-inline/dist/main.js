(() => {
  'use strict';
  var t,
    n = {
      426: (t, n, r) => {
        r.d(n, { Z: () => i });
        var e = r(81),
          o = r.n(e),
          c = r(645),
          a = r.n(c)()(o());
        a.push([
          t.id,
          '/* ch02-getting-started/05-use-loaders/loader-css-inline/src/style.css */\n.demo {\n  color: blue;\n}\n',
          '',
        ]);
        const i = a;
      },
      645: (t) => {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var r = '',
                  e = void 0 !== n[5];
                return (
                  n[4] && (r += '@supports ('.concat(n[4], ') {')),
                  n[2] && (r += '@media '.concat(n[2], ' {')),
                  e &&
                    (r += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (r += t(n)),
                  e && (r += '}'),
                  n[2] && (r += '}'),
                  n[4] && (r += '}'),
                  r
                );
              }).join('');
            }),
            (n.i = function (t, r, e, o, c) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (e)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var d = [].concat(t[u]);
                (e && a[d[0]]) ||
                  (void 0 !== c &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = c)),
                  r &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = r))
                      : (d[2] = r)),
                  o &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = o))
                      : (d[4] = ''.concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
    },
    r = {};
  function e(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var c = (r[t] = { id: t, exports: {} });
    return n[t](c, c.exports, e), c.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (t = e(426)),
    document.head.appendChild(
      (function (t) {
        const n = document.createElement('style');
        return (n.innerHTML = t), n;
      })(t.Z.toString())
    );
})();
