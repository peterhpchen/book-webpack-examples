(() => {
  'use strict';
  var t,
    n = {
      426: (t, n, o) => {
        o.d(n, { Z: () => i });
        var r = o(81),
          e = o.n(r),
          c = o(645),
          a = o.n(c)()(e());
        a.push([t.id, '.demo {\n  color: blue;\n}\n', '']);
        const i = a;
      },
      645: (t) => {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var o = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (o += '@supports ('.concat(n[4], ') {')),
                  n[2] && (o += '@media '.concat(n[2], ' {')),
                  r &&
                    (o += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (o += t(n)),
                  r && (o += '}'),
                  n[2] && (o += '}'),
                  n[4] && (o += '}'),
                  o
                );
              }).join('');
            }),
            (n.i = function (t, o, r, e, c) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var d = [].concat(t[s]);
                (r && a[d[0]]) ||
                  (void 0 !== c &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = c)),
                  o &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = o))
                      : (d[2] = o)),
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
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
    },
    o = {};
  function r(t) {
    var e = o[t];
    if (void 0 !== e) return e.exports;
    var c = (o[t] = { id: t, exports: {} });
    return n[t](c, c.exports, r), c.exports;
  }
  (r.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return r.d(n, { a: n }), n;
  }),
    (r.d = (t, n) => {
      for (var o in n)
        r.o(n, o) &&
          !r.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
    }),
    (r.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (t = r(426)),
    document.head.appendChild(
      (function (t) {
        const n = document.createElement('style');
        return (n.innerHTML = t), n;
      })(t.Z.toString())
    );
})();
