(() => {
  'use strict';
  var t,
    n = {
      867: (t) => {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var r = '',
                  o = void 0 !== n[5];
                return (
                  n[4] && (r += '@supports ('.concat(n[4], ') {')),
                  n[2] && (r += '@media '.concat(n[2], ' {')),
                  o &&
                    (r += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (r += t(n)),
                  o && (r += '}'),
                  n[2] && (r += '}'),
                  n[4] && (r += '}'),
                  r
                );
              }).join('');
            }),
            (n.i = function (t, r, o, e, c) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var d = [].concat(t[s]);
                (o && a[d[0]]) ||
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
                  e &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = e))
                      : (d[4] = ''.concat(e))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      805: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      426: (t, n, r) => {
        r.d(n, { Z: () => i });
        var o = r(805),
          e = r.n(o),
          c = r(867),
          a = r.n(c)()(e());
        a.push([t.id, 'div {\n  font-style: italic;\n}\n', '']);
        const i = a;
      },
    },
    r = {};
  function o(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var c = (r[t] = { id: t, exports: {} });
    return n[t](c, c.exports, o), c.exports;
  }
  (o.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return o.d(n, { a: n }), n;
  }),
    (o.d = (t, n) => {
      for (var r in n)
        o.o(n, r) &&
          !o.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (o.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (t = o(426)),
    document.head.appendChild(
      (function (t) {
        const n = document.createElement('style');
        return (n.innerHTML = t), n;
      })(t.Z.toString())
    );
})();
