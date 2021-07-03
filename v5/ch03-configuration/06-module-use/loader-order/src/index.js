// ch03-configuration/06-module-use/loader-order/src/index.js
import '../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // a1 a2 b1 b2 c1 c2 d1 d2
// import '!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // a1 a2 c1 c2 d1 d2
// import '-!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // c1 c2 d1 d2
// import '!!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // c1 c2
