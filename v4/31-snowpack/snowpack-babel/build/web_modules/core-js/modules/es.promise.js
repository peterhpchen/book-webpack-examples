import {
  c as commonjsGlobal,
  a as createCommonjsModule,
} from "../../common/_commonjsHelpers-6d0ad781.js";

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == "object" && globalThis) ||
  check(typeof window == "object" && window) ||
  check(typeof self == "object" && self) ||
  check(typeof commonjsGlobal == "object" && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  Function("return this")();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return (
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1] != 7
  );
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG =
  getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG
  ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    }
  : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
  f: f,
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value,
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = "".split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object("z").propertyIsEnumerable(0);
})
  ? function (it) {
      return classofRaw(it) == "String" ? split.call(it, "") : Object(it);
    }
  : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === "object" ? it !== null : typeof it === "function";
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (
    PREFERRED_STRING &&
    typeof (fn = input.toString) == "function" &&
    !isObject((val = fn.call(input)))
  )
    return val;
  if (
    typeof (fn = input.valueOf) == "function" &&
    !isObject((val = fn.call(input)))
  )
    return val;
  if (
    !PREFERRED_STRING &&
    typeof (fn = input.toString) == "function" &&
    !isObject((val = fn.call(input)))
  )
    return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine =
  !descriptors &&
  !fails(function () {
    return (
      Object.defineProperty(documentCreateElement("div"), "a", {
        get: function () {
          return 7;
        },
      }).a != 7
    );
  });

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors
  ? nativeGetOwnPropertyDescriptor
  : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (ie8DomDefine)
        try {
          return nativeGetOwnPropertyDescriptor(O, P);
        } catch (error) {
          /* empty */
        }
      if (has(O, P))
        return createPropertyDescriptor(
          !objectPropertyIsEnumerable.f.call(O, P),
          O[P]
        );
    };

var objectGetOwnPropertyDescriptor = {
  f: f$1,
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + " is not an object");
  }
  return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors
  ? nativeDefineProperty
  : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (ie8DomDefine)
        try {
          return nativeDefineProperty(O, P, Attributes);
        } catch (error) {
          /* empty */
        }
      if ("get" in Attributes || "set" in Attributes)
        throw TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };

var objectDefineProperty = {
  f: f$2,
};

var createNonEnumerableProperty = descriptors
  ? function (object, key, value) {
      return objectDefineProperty.f(
        object,
        key,
        createPropertyDescriptor(1, value)
      );
    }
  : function (object, key, value) {
      object[key] = value;
      return object;
    };

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  }
  return value;
};

var SHARED = "__core-js_shared__";
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != "function") {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap = global_1.WeakMap;

var nativeWeakMap =
  typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));

var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return (
      sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {})
    );
  })("versions", []).push({
    version: "3.6.5",
    mode: "global",
    copyright: "?? 2020 Denis Pushkarev (zloirock.ru)",
  });
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return (
    "Symbol(" +
    String(key === undefined ? "" : key) +
    ")_" +
    (++id + postfix).toString(36)
  );
};

var keys = shared("keys");

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$1();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey("state");
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor,
};

var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split("String");

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    if (typeof value == "function") {
      if (typeof key == "string" && !has(value, "name"))
        createNonEnumerableProperty(value, "name", key);
      enforceInternalState(value).source = TEMPLATE.join(
        typeof key == "string" ? key : ""
      );
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, "toString", function toString() {
    return (
      (typeof this == "function" && getInternalState(this).source) ||
      inspectSource(this)
    );
  });
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == "function" ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2
    ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : (path[namespace] && path[namespace][method]) ||
        (global_1[namespace] && global_1[namespace][method]);
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN((argument = +argument))
    ? 0
    : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false),
};

var indexOf = arrayIncludes.indexOf;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i)
    if (has(O, (key = names[i++]))) {
      ~indexOf(result, key) || result.push(key);
    }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
];

var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 =
  Object.getOwnPropertyNames ||
  function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

var objectGetOwnPropertyNames = {
  f: f$3,
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
  f: f$4,
};

// all object keys, includes non-enumerable and symbols
var ownKeys =
  getBuiltIn("Reflect", "ownKeys") ||
  function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols
      ? keys.concat(getOwnPropertySymbols(it))
      : keys;
  };

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key))
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL
    ? true
    : value == NATIVE
    ? false
    : typeof detection == "function"
    ? fails(detection)
    : !!detection;
};

var normalize = (isForced.normalize = function (string) {
  return String(string).replace(replacement, ".").toLowerCase();
});

var data = (isForced.data = {});
var NATIVE = (isForced.NATIVE = "N");
var POLYFILL = (isForced.POLYFILL = "P");

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(
        GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key,
        options.forced
      );
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, "sham", true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
};

var nativePromiseConstructor = global_1.Promise;

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var nativeSymbol =
  !!Object.getOwnPropertySymbols &&
  !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

var useSymbolAsUid =
  nativeSymbol &&
  // eslint-disable-next-line no-undef
  !Symbol.sham &&
  // eslint-disable-next-line no-undef
  typeof Symbol.iterator == "symbol";

var WellKnownSymbolsStore = shared("wks");
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid
  ? Symbol$1
  : (Symbol$1 && Symbol$1.withoutSetter) || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name))
      WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore[name];
};

var defineProperty = objectDefineProperty.f;

var TO_STRING_TAG = wellKnownSymbol("toStringTag");

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var SPECIES = wellKnownSymbol("species");

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
};

var aFunction$1 = function (it) {
  if (typeof it != "function") {
    throw TypeError(String(it) + " is not a function");
  }
  return it;
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
  }
  return it;
};

var iterators = {};

var ITERATOR = wellKnownSymbol("iterator");
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return (
    it !== undefined &&
    (iterators.Array === it || ArrayPrototype[ITERATOR] === it)
  );
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var TO_STRING_TAG$1 = wellKnownSymbol("toStringTag");
var test = {};

test[TO_STRING_TAG$1] = "z";

var toStringTagSupport = String(test) === "[object z]";

var TO_STRING_TAG$2 = wellKnownSymbol("toStringTag");
// ES3 wrong here
var CORRECT_ARGUMENTS =
  classofRaw(
    (function () {
      return arguments;
    })()
  ) == "Arguments";

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport
  ? classofRaw
  : function (it) {
      var O, tag, result;
      return it === undefined
        ? "Undefined"
        : it === null
        ? "Null"
        : // @@toStringTag case
        typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG$2)) == "string"
        ? tag
        : // builtinTag case
        CORRECT_ARGUMENTS
        ? classofRaw(O)
        : // ES3 arguments fallback
        (result = classofRaw(O)) == "Object" && typeof O.callee == "function"
        ? "Arguments"
        : result;
    };

var ITERATOR$1 = wellKnownSymbol("iterator");

var getIteratorMethod = function (it) {
  if (it != undefined)
    return it[ITERATOR$1] || it["@@iterator"] || iterators[classof(it)];
};

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator["return"];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

var iterate_1 = createCommonjsModule(function (module) {
  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate = (module.exports = function (
    iterable,
    fn,
    that,
    AS_ENTRIES,
    IS_ITERATOR
  ) {
    var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
    var iterator, iterFn, index, length, result, next, step;

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (typeof iterFn != "function")
        throw TypeError("Target is not iterable");
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (
          index = 0, length = toLength(iterable.length);
          length > index;
          index++
        ) {
          result = AS_ENTRIES
            ? boundFunction(anObject((step = iterable[index]))[0], step[1])
            : boundFunction(iterable[index]);
          if (result && result instanceof Result) return result;
        }
        return new Result(false);
      }
      iterator = iterFn.call(iterable);
    }

    next = iterator.next;
    while (!(step = next.call(iterator)).done) {
      result = callWithSafeIterationClosing(
        iterator,
        boundFunction,
        step.value,
        AS_ENTRIES
      );
      if (typeof result == "object" && result && result instanceof Result)
        return result;
    }
    return new Result(false);
  });

  iterate.stop = function (result) {
    return new Result(true, result);
  };
});

var ITERATOR$2 = wellKnownSymbol("iterator");
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    return: function () {
      SAFE_CLOSING = true;
    },
  };
  iteratorWithReturn[ITERATOR$2] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$2] = function () {
      return {
        next: function () {
          return { done: (ITERATION_SUPPORT = true) };
        },
      };
    };
    exec(object);
  } catch (error) {
    /* empty */
  }
  return ITERATION_SUPPORT;
};

var SPECIES$1 = wellKnownSymbol("species");

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined
    ? defaultConstructor
    : aFunction$1(S);
};

var html = getBuiltIn("document", "documentElement");

var engineUserAgent = getBuiltIn("navigator", "userAgent") || "";

var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

var location = global_1.location;
var set$1 = global_1.setImmediate;
var clear = global_1.clearImmediate;
var process = global_1.process;
var MessageChannel = global_1.MessageChannel;
var Dispatch = global_1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global_1.postMessage(id + "", location.protocol + "//" + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == "function" ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classofRaw(process) == "process") {
    defer = function (id) {
      process.nextTick(runner(id));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global_1.addEventListener &&
    typeof postMessage == "function" &&
    !global_1.importScripts &&
    !fails(post) &&
    location.protocol !== "file:"
  ) {
    defer = post;
    global_1.addEventListener("message", listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement("script")) {
    defer = function (id) {
      html.appendChild(documentCreateElement("script"))[
        ONREADYSTATECHANGE
      ] = function () {
        html.removeChild(this);
        run(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task = {
  set: set$1,
  clear: clear,
};

var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;

var macrotask = task.set;

var MutationObserver =
  global_1.MutationObserver || global_1.WebKitMutationObserver;
var process$1 = global_1.process;
var Promise = global_1.Promise;
var IS_NODE = classofRaw(process$1) == "process";
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(
  global_1,
  "queueMicrotask"
);
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    }
    last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process$1.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !engineIsIos) {
    toggle = true;
    node = document.createTextNode("");
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global_1, flush);
    };
  }
}

var microtask =
  queueMicrotask ||
  function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined)
      throw TypeError("Bad Promise constructor");
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject = aFunction$1(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
var f$5 = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability = {
  f: f$5,
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var hostReportErrors = function (a, b) {
  var console = global_1.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var perform = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var process$2 = global_1.process;
var versions = process$2 && process$2.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split(".");
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var task$1 = task.set;

var SPECIES$2 = wellKnownSymbol("species");
var PROMISE = "Promise";
var getInternalState = internalState.get;
var setInternalState = internalState.set;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var PromiseConstructor = nativePromiseConstructor;
var TypeError$1 = global_1.TypeError;
var document$2 = global_1.document;
var process$3 = global_1.process;
var $fetch = getBuiltIn("fetch");
var newPromiseCapability$1 = newPromiseCapability.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var IS_NODE$1 = classofRaw(process$3) == "process";
var DISPATCH_EVENT = !!(
  document$2 &&
  document$2.createEvent &&
  global_1.dispatchEvent
);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced_1(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE =
    inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (engineV8Version === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE$1 && typeof PromiseRejectionEvent != "function") return true;
  }
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor))
    return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(
      function () {
        /* empty */
      },
      function () {
        /* empty */
      }
    );
  };
  var constructor = (promise.constructor = {});
  constructor[SPECIES$2] = FakePromise;
  return !(
    promise.then(function () {
      /* empty */
    }) instanceof FakePromise
  );
});

var INCORRECT_ITERATION =
  FORCED ||
  !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)["catch"](function () {
      /* empty */
    });
  });

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == "function" ? then : false;
};

var notify$1 = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED)
              onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1("Promise-chain cycle"));
          } else if ((then = isThenable(result))) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$2.createEvent("Event");
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global_1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if ((handler = global_1["on" + name])) handler(event);
  else if (name === UNHANDLED_REJECTION)
    hostReportErrors("Unhandled promise rejection", reason);
};

var onUnhandled = function (promise, state) {
  task$1.call(global_1, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE$1) {
          process$3.emit("unhandledRejection", value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task$1.call(global_1, function () {
    if (IS_NODE$1) {
      process$3.emit("rejectionHandled", promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify$1(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value)
      throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(
            value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify$1(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction$1(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(
        bind(internalResolve, this, state),
        bind(internalReject, this, state)
      );
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined,
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(
        speciesConstructor(this, PromiseConstructor)
      );
      reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
      reaction.fail = typeof onRejected == "function" && onRejected;
      reaction.domain = IS_NODE$1 ? process$3.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify$1(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    catch: function (onRejected) {
      return this.then(undefined, onRejected);
    },
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (typeof nativePromiseConstructor == "function") {
    nativeThen = nativePromiseConstructor.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(
      nativePromiseConstructor.prototype,
      "then",
      function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
      },
      { unsafe: true }
    );

    // wrap fetch result
    if (typeof $fetch == "function")
      _export(
        { global: true, enumerable: true, forced: true },
        {
          // eslint-disable-next-line no-unused-vars
          fetch: function fetch(input /* , init */) {
            return promiseResolve(
              PromiseConstructor,
              $fetch.apply(global_1, arguments)
            );
          },
        }
      );
  }
}

_export(
  { global: true, wrap: true, forced: FORCED },
  {
    Promise: PromiseConstructor,
  }
);

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
_export(
  { target: PROMISE, stat: true, forced: FORCED },
  {
    // `Promise.reject` method
    // https://tc39.github.io/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    },
  }
);

_export(
  { target: PROMISE, stat: true, forced: FORCED },
  {
    // `Promise.resolve` method
    // https://tc39.github.io/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    },
  }
);

_export(
  { target: PROMISE, stat: true, forced: INCORRECT_ITERATION },
  {
    // `Promise.all` method
    // https://tc39.github.io/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate_1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.github.io/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$1(C.resolve);
        iterate_1(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
  }
);

var es_promise = {};

export default es_promise;
