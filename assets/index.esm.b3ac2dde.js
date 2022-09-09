import { L as LogLevel, F as FirebaseError, c as createMockUserToken, g as getModularInstance, _ as _getProvider, d as deepEqual, a as getApp, b as _removeServiceInstance, S as SDK_VERSION, e as _registerComponent, r as registerVersion, f as Logger, h as getUA, i as isIndexedDBAvailable, C as Component, j as isSafari, k as isMobileCordova, l as isReactNative, m as isElectron, n as isIE, o as isUWP, p as isBrowserExtension } from "./index.esm2017.ce458832.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var k$1, goog = goog || {}, l = commonjsGlobal || self;
function aa$1() {
}
function ba$1(a) {
  var b = typeof a;
  b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function da$1(a) {
  return Object.prototype.hasOwnProperty.call(a, ea$1) && a[ea$1] || (a[ea$1] = ++fa$1);
}
var ea$1 = "closure_uid_" + (1e9 * Math.random() >>> 0), fa$1 = 0;
function ha$1(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia$1(a, b, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function q$1(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q$1 = ha$1 : q$1 = ia$1;
  return q$1.apply(null, arguments);
}
function ja$1(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Z = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Vb = function(d, e, f) {
    for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
      h[n - 2] = arguments[n];
    return b.prototype[e].apply(d, h);
  };
}
function v() {
  this.s = this.s;
  this.o = this.o;
}
var ka$1 = 0;
v.prototype.s = false;
v.prototype.na = function() {
  if (!this.s && (this.s = true, this.M(), 0 != ka$1)) {
    da$1(this);
  }
};
v.prototype.M = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
const ma$1 = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
  if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
  for (let c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
      return c;
  return -1;
}, na$1 = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  const d = a.length, e = "string" === typeof a ? a.split("") : a;
  for (let f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a);
};
function oa$1(a) {
  a: {
    var b = pa$1;
    const c = a.length, d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
function qa$1(a) {
  return Array.prototype.concat.apply([], arguments);
}
function ra$1(a) {
  const b = a.length;
  if (0 < b) {
    const c = Array(b);
    for (let d = 0; d < b; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function sa$1(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ta$1 = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function w(a, b) {
  return -1 != a.indexOf(b);
}
function ua$1(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var x$1;
a: {
  var va$1 = l.navigator;
  if (va$1) {
    var wa$1 = va$1.userAgent;
    if (wa$1) {
      x$1 = wa$1;
      break a;
    }
  }
  x$1 = "";
}
function xa$1(a, b, c) {
  for (const d in a)
    b.call(c, a[d], d, a);
}
function ya$1(a) {
  const b = {};
  for (const c in a)
    b[c] = a[c];
  return b;
}
var za$1 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Aa$1(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (let f = 0; f < za$1.length; f++)
      c = za$1[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ca$1(a) {
  Ca$1[" "](a);
  return a;
}
Ca$1[" "] = aa$1;
function Fa$1(a) {
  var b = Ga$1;
  return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9);
}
var Ha$1 = w(x$1, "Opera"), y = w(x$1, "Trident") || w(x$1, "MSIE"), Ia$1 = w(x$1, "Edge"), Ja$1 = Ia$1 || y, Ka$1 = w(x$1, "Gecko") && !(w(x$1.toLowerCase(), "webkit") && !w(x$1, "Edge")) && !(w(x$1, "Trident") || w(x$1, "MSIE")) && !w(x$1, "Edge"), La$1 = w(x$1.toLowerCase(), "webkit") && !w(x$1, "Edge");
function Ma$1() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Na$1;
a: {
  var Oa$1 = "", Pa$1 = function() {
    var a = x$1;
    if (Ka$1)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia$1)
      return /Edge\/([\d\.]+)/.exec(a);
    if (y)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La$1)
      return /WebKit\/(\S+)/.exec(a);
    if (Ha$1)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Pa$1 && (Oa$1 = Pa$1 ? Pa$1[1] : "");
  if (y) {
    var Qa$1 = Ma$1();
    if (null != Qa$1 && Qa$1 > parseFloat(Oa$1)) {
      Na$1 = String(Qa$1);
      break a;
    }
  }
  Na$1 = Oa$1;
}
var Ga$1 = {};
function Ra$1() {
  return Fa$1(function() {
    let a = 0;
    const b = ta$1(String(Na$1)).split("."), c = ta$1("9").split("."), d = Math.max(b.length, c.length);
    for (let h = 0; 0 == a && h < d; h++) {
      var e = b[h] || "", f = c[h] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length)
          break;
        a = ua$1(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ua$1(0 == e[2].length, 0 == f[2].length) || ua$1(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == a);
    }
    return 0 <= a;
  });
}
var Sa$1;
if (l.document && y) {
  var Ta$1 = Ma$1();
  Sa$1 = Ta$1 ? Ta$1 : parseInt(Na$1, 10) || void 0;
} else
  Sa$1 = void 0;
var Ua$1 = Sa$1;
var Va$1 = function() {
  if (!l.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    l.addEventListener("test", aa$1, b), l.removeEventListener("test", aa$1, b);
  } catch (c) {
  }
  return a;
}();
function z$1(a, b) {
  this.type = a;
  this.g = this.target = b;
  this.defaultPrevented = false;
}
z$1.prototype.h = function() {
  this.defaultPrevented = true;
};
function A(a, b) {
  z$1.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    if (b = a.relatedTarget) {
      if (Ka$1) {
        a: {
          try {
            Ca$1(b.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b = null);
      }
    } else
      "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Wa$1[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && A.Z.h.call(this);
  }
}
t(A, z$1);
var Wa$1 = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.h = function() {
  A.Z.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var B$1 = "closure_listenable_" + (1e6 * Math.random() | 0);
var Xa$1 = 0;
function Ya$1(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.ia = e;
  this.key = ++Xa$1;
  this.ca = this.fa = false;
}
function Za$1(a) {
  a.ca = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ia = null;
}
function $a$1(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
$a$1.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || (a = this.g[f] = [], this.h++);
  var h = ab(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.fa = false)) : (b = new Ya$1(b, this.src, f, !!d, e), b.fa = c, a.push(b));
  return b;
};
function bb(a, b) {
  var c = b.type;
  if (c in a.g) {
    var d = a.g[c], e = ma$1(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Za$1(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  }
}
function ab(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.ca && f.listener == b && f.capture == !!c && f.ia == d)
      return e;
  }
  return -1;
}
var cb = "closure_lm_" + (1e6 * Math.random() | 0), db = {};
function fb(a, b, c, d, e) {
  if (d && d.once)
    return gb(a, b, c, d, e);
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      fb(a, b[f], c, d, e);
    return null;
  }
  c = hb(c);
  return a && a[B$1] ? a.N(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, false, d, e);
}
function ib(a, b, c, d, e, f) {
  if (!b)
    throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n = jb(a);
  n || (a[cb] = n = new $a$1(a));
  c = n.add(b, c, d, h, f);
  if (c.proxy)
    return c;
  d = kb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Va$1 || (e = h), void 0 === e && (e = false), a.addEventListener(b.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(lb(b.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function kb() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = mb;
  return a;
}
function gb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      gb(a, b[f], c, d, e);
    return null;
  }
  c = hb(c);
  return a && a[B$1] ? a.O(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, true, d, e);
}
function nb(a, b, c, d, e) {
  if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
      nb(a, b[f], c, d, e);
  else
    (d = p(d) ? !!d.capture : !!d, c = hb(c), a && a[B$1]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = ab(f, c, d, e), -1 < c && (Za$1(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.h--)))) : a && (a = jb(a)) && (b = a.g[b.toString()], a = -1, b && (a = ab(b, c, d, e)), (c = -1 < a ? b[a] : null) && ob(c));
}
function ob(a) {
  if ("number" !== typeof a && a && !a.ca) {
    var b = a.src;
    if (b && b[B$1])
      bb(b.i, a);
    else {
      var c = a.type, d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      (c = jb(b)) ? (bb(c, a), 0 == c.h && (c.src = null, b[cb] = null)) : Za$1(a);
    }
  }
}
function lb(a) {
  return a in db ? db[a] : db[a] = "on" + a;
}
function mb(a, b) {
  if (a.ca)
    a = true;
  else {
    b = new A(b, this);
    var c = a.listener, d = a.ia || a.src;
    a.fa && ob(a);
    a = c.call(d, b);
  }
  return a;
}
function jb(a) {
  a = a[cb];
  return a instanceof $a$1 ? a : null;
}
var pb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function hb(a) {
  if ("function" === typeof a)
    return a;
  a[pb] || (a[pb] = function(b) {
    return a.handleEvent(b);
  });
  return a[pb];
}
function C$1() {
  v.call(this);
  this.i = new $a$1(this);
  this.P = this;
  this.I = null;
}
t(C$1, v);
C$1.prototype[B$1] = true;
C$1.prototype.removeEventListener = function(a, b, c, d) {
  nb(this, a, b, c, d);
};
function D$1(a, b) {
  var c, d = a.I;
  if (d)
    for (c = []; d; d = d.I)
      c.push(d);
  a = a.P;
  d = b.type || b;
  if ("string" === typeof b)
    b = new z$1(b, a);
  else if (b instanceof z$1)
    b.target = b.target || a;
  else {
    var e = b;
    b = new z$1(d, a);
    Aa$1(b, e);
  }
  e = true;
  if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
      var h = b.g = c[f];
      e = qb(h, d, true, b) && e;
    }
  h = b.g = a;
  e = qb(h, d, true, b) && e;
  e = qb(h, d, false, b) && e;
  if (c)
    for (f = 0; f < c.length; f++)
      h = b.g = c[f], e = qb(h, d, false, b) && e;
}
C$1.prototype.M = function() {
  C$1.Z.M.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++)
        Za$1(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.I = null;
};
C$1.prototype.N = function(a, b, c, d) {
  return this.i.add(String(a), b, false, c, d);
};
C$1.prototype.O = function(a, b, c, d) {
  return this.i.add(String(a), b, true, c, d);
};
function qb(a, b, c, d) {
  b = a.i.g[String(b)];
  if (!b)
    return true;
  b = b.concat();
  for (var e = true, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.ca && h.capture == c) {
      var n = h.listener, u = h.ia || h.src;
      h.fa && bb(a.i, h);
      e = false !== n.call(u, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var rb = l.JSON.stringify;
function sb() {
  var a = tb;
  let b = null;
  a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
  return b;
}
class ub {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b) {
    const c = vb.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
}
var vb = new class {
  constructor(a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
}(() => new wb(), (a) => a.reset());
class wb {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function yb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
function zb(a, b) {
  Ab || Bb();
  Cb || (Ab(), Cb = true);
  tb.add(a, b);
}
var Ab;
function Bb() {
  var a = l.Promise.resolve(void 0);
  Ab = function() {
    a.then(Db);
  };
}
var Cb = false, tb = new ub();
function Db() {
  for (var a; a = sb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      yb(c);
    }
    var b = vb;
    b.j(a);
    100 > b.h && (b.h++, a.next = b.g, b.g = a);
  }
  Cb = false;
}
function Eb(a, b) {
  C$1.call(this);
  this.h = a || 1;
  this.g = b || l;
  this.j = q$1(this.kb, this);
  this.l = Date.now();
}
t(Eb, C$1);
k$1 = Eb.prototype;
k$1.da = false;
k$1.S = null;
k$1.kb = function() {
  if (this.da) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - a) : (this.S && (this.g.clearTimeout(this.S), this.S = null), D$1(this, "tick"), this.da && (Fb(this), this.start()));
  }
};
k$1.start = function() {
  this.da = true;
  this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function Fb(a) {
  a.da = false;
  a.S && (a.g.clearTimeout(a.S), a.S = null);
}
k$1.M = function() {
  Eb.Z.M.call(this);
  Fb(this);
  delete this.g;
};
function Gb(a, b, c) {
  if ("function" === typeof a)
    c && (a = q$1(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = q$1(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
}
function Hb(a) {
  a.g = Gb(() => {
    a.g = null;
    a.i && (a.i = false, Hb(a));
  }, a.j);
  const b = a.h;
  a.h = null;
  a.m.apply(null, b);
}
class Ib extends v {
  constructor(a, b) {
    super();
    this.m = a;
    this.j = b;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : Hb(this);
  }
  M() {
    super.M();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
}
function E(a) {
  v.call(this);
  this.h = a;
  this.g = {};
}
t(E, v);
var Jb = [];
function Kb(a, b, c, d) {
  Array.isArray(c) || (c && (Jb[0] = c.toString()), c = Jb);
  for (var e = 0; e < c.length; e++) {
    var f = fb(b, c[e], d || a.handleEvent, false, a.h || a);
    if (!f)
      break;
    a.g[f.key] = f;
  }
}
function Lb(a) {
  xa$1(a.g, function(b, c) {
    this.g.hasOwnProperty(c) && ob(b);
  }, a);
  a.g = {};
}
E.prototype.M = function() {
  E.Z.M.call(this);
  Lb(this);
};
E.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Mb() {
  this.g = true;
}
Mb.prototype.Aa = function() {
  this.g = false;
};
function Nb(a, b, c, d, e, f) {
  a.info(function() {
    if (a.g)
      if (f) {
        var h = "";
        for (var n = f.split("&"), u = 0; u < n.length; u++) {
          var m = n[u].split("=");
          if (1 < m.length) {
            var r = m[0];
            m = m[1];
            var G2 = r.split("_");
            h = 2 <= G2.length && "type" == G2[1] ? h + (r + "=" + m + "&") : h + (r + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
  });
}
function Ob(a, b, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
  });
}
function F$1(a, b, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b + "): " + Pb(a, c) + (d ? " " + d : "");
  });
}
function Qb(a, b) {
  a.info(function() {
    return "TIMEOUT: " + b;
  });
}
Mb.prototype.info = function() {
};
function Pb(a, b) {
  if (!a.g)
    return b;
  if (!b)
    return null;
  try {
    var c = JSON.parse(b);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return rb(c);
  } catch (n) {
    return b;
  }
}
var H$1 = {}, Rb = null;
function Sb() {
  return Rb = Rb || new C$1();
}
H$1.Ma = "serverreachability";
function Tb(a) {
  z$1.call(this, H$1.Ma, a);
}
t(Tb, z$1);
function I(a) {
  const b = Sb();
  D$1(b, new Tb(b));
}
H$1.STAT_EVENT = "statevent";
function Ub(a, b) {
  z$1.call(this, H$1.STAT_EVENT, a);
  this.stat = b;
}
t(Ub, z$1);
function J$1(a) {
  const b = Sb();
  D$1(b, new Ub(b, a));
}
H$1.Na = "timingevent";
function Vb(a, b) {
  z$1.call(this, H$1.Na, a);
  this.size = b;
}
t(Vb, z$1);
function K$1(a, b) {
  if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b);
}
var Wb = { NO_ERROR: 0, lb: 1, yb: 2, xb: 3, sb: 4, wb: 5, zb: 6, Ja: 7, TIMEOUT: 8, Cb: 9 };
var Xb = { qb: "complete", Mb: "success", Ka: "error", Ja: "abort", Eb: "ready", Fb: "readystatechange", TIMEOUT: "timeout", Ab: "incrementaldata", Db: "progress", tb: "downloadprogress", Ub: "uploadprogress" };
function Yb() {
}
Yb.prototype.h = null;
function Zb(a) {
  return a.h || (a.h = a.i());
}
function $b() {
}
var L$1 = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
function ac$1() {
  z$1.call(this, "d");
}
t(ac$1, z$1);
function bc$1() {
  z$1.call(this, "c");
}
t(bc$1, z$1);
var cc$1;
function dc$1() {
}
t(dc$1, Yb);
dc$1.prototype.g = function() {
  return new XMLHttpRequest();
};
dc$1.prototype.i = function() {
  return {};
};
cc$1 = new dc$1();
function M$1(a, b, c, d) {
  this.l = a;
  this.j = b;
  this.m = c;
  this.X = d || 1;
  this.V = new E(this);
  this.P = ec$1;
  a = Ja$1 ? 125 : void 0;
  this.W = new Eb(a);
  this.H = null;
  this.i = false;
  this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null;
  this.D = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.N = -1;
  this.I = false;
  this.O = 0;
  this.L = null;
  this.aa = this.J = this.$ = this.U = false;
  this.h = new fc$1();
}
function fc$1() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var ec$1 = 45e3, gc$1 = {}, hc$1 = {};
k$1 = M$1.prototype;
k$1.setTimeout = function(a) {
  this.P = a;
};
function ic$1(a, b, c) {
  a.K = 1;
  a.v = jc$1(N$1(b));
  a.s = c;
  a.U = true;
  kc$1(a, null);
}
function kc$1(a, b) {
  a.F = Date.now();
  lc$1(a);
  a.A = N$1(a.v);
  var c = a.A, d = a.X;
  Array.isArray(d) || (d = [String(d)]);
  mc$1(c.h, "t", d);
  a.C = 0;
  c = a.l.H;
  a.h = new fc$1();
  a.g = nc$1(a.l, c ? b : null, !a.s);
  0 < a.O && (a.L = new Ib(q$1(a.Ia, a, a.g), a.O));
  Kb(a.V, a.g, "readystatechange", a.gb);
  b = a.H ? ya$1(a.H) : {};
  a.s ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.s, b)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b));
  I();
  Nb(a.j, a.u, a.A, a.m, a.X, a.s);
}
k$1.gb = function(a) {
  a = a.target;
  const b = this.L;
  b && 3 == O$1(a) ? b.l() : this.Ia(a);
};
k$1.Ia = function(a) {
  try {
    if (a == this.g)
      a: {
        const r = O$1(this.g);
        var b = this.g.Da();
        const G2 = this.g.ba();
        if (!(3 > r) && (3 != r || Ja$1 || this.g && (this.h.h || this.g.ga() || oc$1(this.g)))) {
          this.I || 4 != r || 7 == b || (8 == b || 0 >= G2 ? I(3) : I(2));
          pc$1(this);
          var c = this.g.ba();
          this.N = c;
          b:
            if (qc$1(this)) {
              var d = oc$1(this.g);
              a = "";
              var e = d.length, f = 4 == O$1(this.g);
              if (!this.h.i) {
                if ("undefined" === typeof TextDecoder) {
                  P(this);
                  rc$1(this);
                  var h = "";
                  break b;
                }
                this.h.i = new l.TextDecoder();
              }
              for (b = 0; b < e; b++)
                this.h.h = true, a += this.h.i.decode(d[b], { stream: f && b == e - 1 });
              d.splice(
                0,
                e
              );
              this.h.g += a;
              this.C = 0;
              h = this.h.g;
            } else
              h = this.g.ga();
          this.i = 200 == c;
          Ob(this.j, this.u, this.A, this.m, this.X, r, c);
          if (this.i) {
            if (this.$ && !this.J) {
              b: {
                if (this.g) {
                  var n, u = this.g;
                  if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa$1(n)) {
                    var m = n;
                    break b;
                  }
                }
                m = null;
              }
              if (c = m)
                F$1(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, sc$1(this, c);
              else {
                this.i = false;
                this.o = 3;
                J$1(12);
                P(this);
                rc$1(this);
                break a;
              }
            }
            this.U ? (tc$1(this, r, h), Ja$1 && this.i && 3 == r && (Kb(this.V, this.W, "tick", this.fb), this.W.start())) : (F$1(this.j, this.m, h, null), sc$1(this, h));
            4 == r && P(this);
            this.i && !this.I && (4 == r ? uc$1(this.l, this) : (this.i = false, lc$1(this)));
          } else
            400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, J$1(12)) : (this.o = 0, J$1(13)), P(this), rc$1(this);
        }
      }
  } catch (r) {
  } finally {
  }
};
function qc$1(a) {
  return a.g ? "GET" == a.u && 2 != a.K && a.l.Ba : false;
}
function tc$1(a, b, c) {
  let d = true, e;
  for (; !a.I && a.C < c.length; )
    if (e = vc$1(a, c), e == hc$1) {
      4 == b && (a.o = 4, J$1(14), d = false);
      F$1(a.j, a.m, null, "[Incomplete Response]");
      break;
    } else if (e == gc$1) {
      a.o = 4;
      J$1(15);
      F$1(a.j, a.m, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      F$1(a.j, a.m, e, null), sc$1(a, e);
  qc$1(a) && e != hc$1 && e != gc$1 && (a.h.g = "", a.C = 0);
  4 != b || 0 != c.length || a.h.h || (a.o = 1, J$1(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.aa && (a.aa = true, b = a.l, b.g == a && b.$ && !b.L && (b.h.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc$1(b), b.L = true, J$1(11))) : (F$1(
    a.j,
    a.m,
    c,
    "[Invalid Chunked Response]"
  ), P(a), rc$1(a));
}
k$1.fb = function() {
  if (this.g) {
    var a = O$1(this.g), b = this.g.ga();
    this.C < b.length && (pc$1(this), tc$1(this, a, b), this.i && 4 != a && lc$1(this));
  }
};
function vc$1(a, b) {
  var c = a.C, d = b.indexOf("\n", c);
  if (-1 == d)
    return hc$1;
  c = Number(b.substring(c, d));
  if (isNaN(c))
    return gc$1;
  d += 1;
  if (d + c > b.length)
    return hc$1;
  b = b.substr(d, c);
  a.C = d + c;
  return b;
}
k$1.cancel = function() {
  this.I = true;
  P(this);
};
function lc$1(a) {
  a.Y = Date.now() + a.P;
  xc$1(a, a.P);
}
function xc$1(a, b) {
  if (null != a.B)
    throw Error("WatchDog timer not null");
  a.B = K$1(q$1(a.eb, a), b);
}
function pc$1(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k$1.eb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.Y ? (Qb(this.j, this.A), 2 != this.K && (I(), J$1(17)), P(this), this.o = 2, rc$1(this)) : xc$1(this, this.Y - a);
};
function rc$1(a) {
  0 == a.l.G || a.I || uc$1(a.l, a);
}
function P(a) {
  pc$1(a);
  var b = a.L;
  b && "function" == typeof b.na && b.na();
  a.L = null;
  Fb(a.W);
  Lb(a.V);
  a.g && (b = a.g, a.g = null, b.abort(), b.na());
}
function sc$1(a, b) {
  try {
    var c = a.l;
    if (0 != c.G && (c.g == a || yc$1(c.i, a))) {
      if (c.I = a.N, !a.J && yc$1(c.i, a) && 3 == c.G) {
        try {
          var d = c.Ca.g.parse(b);
        } catch (m) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.u) {
                if (c.g)
                  if (c.g.F + 3e3 < a.F)
                    zc$1(c), Ac$1(c);
                  else
                    break a;
                Bc$1(c);
                J$1(18);
              }
            }
          else
            c.ta = e[1], 0 < c.ta - c.U && 37500 > e[2] && c.N && 0 == c.A && !c.v && (c.v = K$1(q$1(c.ab, c), 6e3));
          if (1 >= Cc$1(c.i) && c.ka) {
            try {
              c.ka();
            } catch (m) {
            }
            c.ka = void 0;
          }
        } else
          Q$1(c, 11);
      } else if ((a.J || c.g == a) && zc$1(c), !sa$1(b))
        for (e = c.Ca.g.parse(b), b = 0; b < e.length; b++) {
          let m = e[b];
          c.U = m[0];
          m = m[1];
          if (2 == c.G)
            if ("c" == m[0]) {
              c.J = m[1];
              c.la = m[2];
              const r = m[3];
              null != r && (c.ma = r, c.h.info("VER=" + c.ma));
              const G2 = m[4];
              null != G2 && (c.za = G2, c.h.info("SVER=" + c.za));
              const Da2 = m[5];
              null != Da2 && "number" === typeof Da2 && 0 < Da2 && (d = 1.5 * Da2, c.K = d, c.h.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const ca2 = a.g;
              if (ca2) {
                const Ea2 = ca2.g ? ca2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (Ea2) {
                  var f = d.i;
                  !f.g && (w(Ea2, "spdy") || w(Ea2, "quic") || w(Ea2, "h2")) && (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (Dc$1(f, f.h), f.h = null));
                }
                if (d.D) {
                  const xb = ca2.g ? ca2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  xb && (d.sa = xb, R(d.F, d.D, xb));
                }
              }
              c.G = 3;
              c.j && c.j.xa();
              c.$ && (c.O = Date.now() - a.F, c.h.info("Handshake RTT: " + c.O + "ms"));
              d = c;
              var h = a;
              d.oa = Ec$1(d, d.H ? d.la : null, d.W);
              if (h.J) {
                Fc$1(d.i, h);
                var n = h, u = d.K;
                u && n.setTimeout(u);
                n.B && (pc$1(n), lc$1(n));
                d.g = h;
              } else
                Gc$1(d);
              0 < c.l.length && Hc$1(c);
            } else
              "stop" != m[0] && "close" != m[0] || Q$1(c, 7);
          else
            3 == c.G && ("stop" == m[0] || "close" == m[0] ? "stop" == m[0] ? Q$1(c, 7) : Ic$1(c) : "noop" != m[0] && c.j && c.j.wa(m), c.A = 0);
        }
    }
    I(4);
  } catch (m) {
  }
}
function Jc$1(a) {
  if (a.R && "function" == typeof a.R)
    return a.R();
  if ("string" === typeof a)
    return a.split("");
  if (ba$1(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d]);
    return b;
  }
  b = [];
  c = 0;
  for (d in a)
    b[c++] = a[d];
  return b;
}
function Kc$1(a, b) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
  else if (ba$1(a) || "string" === typeof a)
    na$1(a, b, void 0);
  else {
    if (a.T && "function" == typeof a.T)
      var c = a.T();
    else if (a.R && "function" == typeof a.R)
      c = void 0;
    else if (ba$1(a) || "string" === typeof a) {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Jc$1(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b.call(void 0, d[f], c && c[f], a);
  }
}
function S(a, b) {
  this.h = {};
  this.g = [];
  this.i = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof S)
      for (c = a.T(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
k$1 = S.prototype;
k$1.R = function() {
  Lc$1(this);
  for (var a = [], b = 0; b < this.g.length; b++)
    a.push(this.h[this.g[b]]);
  return a;
};
k$1.T = function() {
  Lc$1(this);
  return this.g.concat();
};
function Lc$1(a) {
  if (a.i != a.g.length) {
    for (var b = 0, c = 0; b < a.g.length; ) {
      var d = a.g[b];
      T(a.h, d) && (a.g[c++] = d);
      b++;
    }
    a.g.length = c;
  }
  if (a.i != a.g.length) {
    var e = {};
    for (c = b = 0; b < a.g.length; )
      d = a.g[b], T(e, d) || (a.g[c++] = d, e[d] = 1), b++;
    a.g.length = c;
  }
}
k$1.get = function(a, b) {
  return T(this.h, a) ? this.h[a] : b;
};
k$1.set = function(a, b) {
  T(this.h, a) || (this.i++, this.g.push(a));
  this.h[a] = b;
};
k$1.forEach = function(a, b) {
  for (var c = this.T(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
function T(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var Mc$1 = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Nc$1(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function U$1(a, b) {
  this.i = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.g = false;
  if (a instanceof U$1) {
    this.g = void 0 !== b ? b : a.g;
    Oc$1(this, a.j);
    this.s = a.s;
    Pc$1(this, a.i);
    Qc$1(this, a.m);
    this.l = a.l;
    b = a.h;
    var c = new Rc$1();
    c.i = b.i;
    b.g && (c.g = new S(b.g), c.h = b.h);
    Sc$1(this, c);
    this.o = a.o;
  } else
    a && (c = String(a).match(Mc$1)) ? (this.g = !!b, Oc$1(this, c[1] || "", true), this.s = Tc$1(c[2] || ""), Pc$1(this, c[3] || "", true), Qc$1(this, c[4]), this.l = Tc$1(c[5] || "", true), Sc$1(this, c[6] || "", true), this.o = Tc$1(c[7] || "")) : (this.g = !!b, this.h = new Rc$1(null, this.g));
}
U$1.prototype.toString = function() {
  var a = [], b = this.j;
  b && a.push(Uc$1(b, Vc$1, true), ":");
  var c = this.i;
  if (c || "file" == b)
    a.push("//"), (b = this.s) && a.push(Uc$1(b, Vc$1, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  if (c = this.l)
    this.i && "/" != c.charAt(0) && a.push("/"), a.push(Uc$1(c, "/" == c.charAt(0) ? Wc$1 : Xc$1, true));
  (c = this.h.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Uc$1(c, Yc$1));
  return a.join("");
};
function N$1(a) {
  return new U$1(a);
}
function Oc$1(a, b, c) {
  a.j = c ? Tc$1(b, true) : b;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Pc$1(a, b, c) {
  a.i = c ? Tc$1(b, true) : b;
}
function Qc$1(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
      throw Error("Bad port number " + b);
    a.m = b;
  } else
    a.m = null;
}
function Sc$1(a, b, c) {
  b instanceof Rc$1 ? (a.h = b, Zc$1(a.h, a.g)) : (c || (b = Uc$1(b, $c$1)), a.h = new Rc$1(b, a.g));
}
function R(a, b, c) {
  a.h.set(b, c);
}
function jc$1(a) {
  R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function ad(a) {
  return a instanceof U$1 ? N$1(a) : new U$1(a, void 0);
}
function bd(a, b, c, d) {
  var e = new U$1(null, void 0);
  a && Oc$1(e, a);
  b && Pc$1(e, b);
  c && Qc$1(e, c);
  d && (e.l = d);
  return e;
}
function Tc$1(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Uc$1(a, b, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Vc$1 = /[#\/\?@]/g, Xc$1 = /[#\?:]/g, Wc$1 = /[#\?]/g, $c$1 = /[#\?@]/g, Yc$1 = /#/g;
function Rc$1(a, b) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b;
}
function V(a) {
  a.g || (a.g = new S(), a.h = 0, a.i && Nc$1(a.i, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
k$1 = Rc$1.prototype;
k$1.add = function(a, b) {
  V(this);
  this.i = null;
  a = W$1(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b);
  this.h += 1;
  return this;
};
function dd(a, b) {
  V(a);
  b = W$1(a, b);
  T(a.g.h, b) && (a.i = null, a.h -= a.g.get(b).length, a = a.g, T(a.h, b) && (delete a.h[b], a.i--, a.g.length > 2 * a.i && Lc$1(a)));
}
function ed(a, b) {
  V(a);
  b = W$1(a, b);
  return T(a.g.h, b);
}
k$1.forEach = function(a, b) {
  V(this);
  this.g.forEach(function(c, d) {
    na$1(c, function(e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
k$1.T = function() {
  V(this);
  for (var a = this.g.R(), b = this.g.T(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b[d]);
  return c;
};
k$1.R = function(a) {
  V(this);
  var b = [];
  if ("string" === typeof a)
    ed(this, a) && (b = qa$1(b, this.g.get(W$1(this, a))));
  else {
    a = this.g.R();
    for (var c = 0; c < a.length; c++)
      b = qa$1(b, a[c]);
  }
  return b;
};
k$1.set = function(a, b) {
  V(this);
  this.i = null;
  a = W$1(this, a);
  ed(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b]);
  this.h += 1;
  return this;
};
k$1.get = function(a, b) {
  if (!a)
    return b;
  a = this.R(a);
  return 0 < a.length ? String(a[0]) : b;
};
function mc$1(a, b, c) {
  dd(a, b);
  0 < c.length && (a.i = null, a.g.set(W$1(a, b), ra$1(c)), a.h += c.length);
}
k$1.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  for (var a = [], b = this.g.T(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.R(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.i = a.join("&");
};
function W$1(a, b) {
  b = String(b);
  a.j && (b = b.toLowerCase());
  return b;
}
function Zc$1(a, b) {
  b && !a.j && (V(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), mc$1(this, e, c));
  }, a));
  a.j = b;
}
var fd = class {
  constructor(a, b) {
    this.h = a;
    this.g = b;
  }
};
function gd(a) {
  this.l = a || hd;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ea && l.g.Ea() && l.g.Ea().Zb);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = /* @__PURE__ */ new Set());
  this.h = null;
  this.i = [];
}
var hd = 10;
function id(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function Cc$1(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function yc$1(a, b) {
  return a.h ? a.h == b : a.g ? a.g.has(b) : false;
}
function Dc$1(a, b) {
  a.g ? a.g.add(b) : a.h = b;
}
function Fc$1(a, b) {
  a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
}
gd.prototype.cancel = function() {
  this.i = jd(this);
  if (this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && 0 !== this.g.size) {
    for (const a of this.g.values())
      a.cancel();
    this.g.clear();
  }
};
function jd(a) {
  if (null != a.h)
    return a.i.concat(a.h.D);
  if (null != a.g && 0 !== a.g.size) {
    let b = a.i;
    for (const c of a.g.values())
      b = b.concat(c.D);
    return b;
  }
  return ra$1(a.i);
}
function kd() {
}
kd.prototype.stringify = function(a) {
  return l.JSON.stringify(a, void 0);
};
kd.prototype.parse = function(a) {
  return l.JSON.parse(a, void 0);
};
function ld() {
  this.g = new kd();
}
function md(a, b, c) {
  const d = c || "";
  try {
    Kc$1(a, function(e, f) {
      let h = e;
      p(e) && (h = rb(e));
      b.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function nd(a, b) {
  const c = new Mb();
  if (l.Image) {
    const d = new Image();
    d.onload = ja$1(od, c, d, "TestLoadImage: loaded", true, b);
    d.onerror = ja$1(od, c, d, "TestLoadImage: error", false, b);
    d.onabort = ja$1(od, c, d, "TestLoadImage: abort", false, b);
    d.ontimeout = ja$1(od, c, d, "TestLoadImage: timeout", false, b);
    l.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b(false);
}
function od(a, b, c, d, e) {
  try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
  } catch (f) {
  }
}
function pd(a) {
  this.l = a.$b || null;
  this.j = a.ib || false;
}
t(pd, Yb);
pd.prototype.g = function() {
  return new qd(this.l, this.j);
};
pd.prototype.i = function(a) {
  return function() {
    return a;
  };
}({});
function qd(a, b) {
  C$1.call(this);
  this.D = a;
  this.u = b;
  this.m = void 0;
  this.readyState = rd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
t(qd, C$1);
var rd = 0;
k$1 = qd.prototype;
k$1.open = function(a, b) {
  if (this.readyState != rd)
    throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b;
  this.readyState = 1;
  sd(this);
};
k$1.send = function(a) {
  if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  a && (b.body = a);
  (this.D || l).fetch(new Request(this.B, b)).then(this.Va.bind(this), this.ha.bind(this));
};
k$1.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.");
  1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, td(this));
  this.readyState = rd;
};
k$1.Va = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, sd(this)), this.g && (this.readyState = 3, sd(this), this.g)))
    if ("arraybuffer" === this.responseType)
      a.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
    else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
      this.j = a.body.getReader();
      if (this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      ud(this);
    } else
      a.text().then(this.Ua.bind(this), this.ha.bind(this));
};
function ud(a) {
  a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a));
}
k$1.Sa = function(a) {
  if (this.g) {
    if (this.u && a.value)
      this.response.push(a.value);
    else if (!this.u) {
      var b = a.value ? a.value : new Uint8Array(0);
      if (b = this.A.decode(b, { stream: !a.done }))
        this.response = this.responseText += b;
    }
    a.done ? td(this) : sd(this);
    3 == this.readyState && ud(this);
  }
};
k$1.Ua = function(a) {
  this.g && (this.response = this.responseText = a, td(this));
};
k$1.Ta = function(a) {
  this.g && (this.response = a, td(this));
};
k$1.ha = function() {
  this.g && td(this);
};
function td(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  sd(a);
}
k$1.setRequestHeader = function(a, b) {
  this.v.append(a, b);
};
k$1.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k$1.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const a = [], b = this.h.entries();
  for (var c = b.next(); !c.done; )
    c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
  return a.join("\r\n");
};
function sd(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(qd.prototype, "withCredentials", { get: function() {
  return "include" === this.m;
}, set: function(a) {
  this.m = a ? "include" : "same-origin";
} });
var vd = l.JSON.parse;
function X$1(a) {
  C$1.call(this);
  this.headers = new S();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.H = "";
  this.m = 0;
  this.j = "";
  this.l = this.F = this.v = this.D = false;
  this.B = 0;
  this.A = null;
  this.J = wd;
  this.K = this.L = false;
}
t(X$1, C$1);
var wd = "", xd = /^https?$/i, yd = ["POST", "PUT"];
k$1 = X$1.prototype;
k$1.ea = function(a, b, c, d) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.H = a;
  this.j = "";
  this.m = 0;
  this.D = false;
  this.h = true;
  this.g = this.u ? this.u.g() : cc$1.g();
  this.C = this.u ? Zb(this.u) : Zb(cc$1);
  this.g.onreadystatechange = q$1(this.Fa, this);
  try {
    this.F = true, this.g.open(b, String(a), true), this.F = false;
  } catch (f) {
    zd(this, f);
    return;
  }
  a = c || "";
  const e = new S(this.headers);
  d && Kc$1(d, function(f, h) {
    e.set(h, f);
  });
  d = oa$1(e.T());
  c = l.FormData && a instanceof l.FormData;
  !(0 <= ma$1(yd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.g.setRequestHeader(h, f);
  }, this);
  this.J && (this.g.responseType = this.J);
  "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
  try {
    Ad(this), 0 < this.B && ((this.K = Bd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q$1(this.pa, this)) : this.A = Gb(this.pa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f) {
    zd(this, f);
  }
};
function Bd(a) {
  return y && Ra$1() && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
function pa$1(a) {
  return "content-type" == a.toLowerCase();
}
k$1.pa = function() {
  "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, D$1(this, "timeout"), this.abort(8));
};
function zd(a, b) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b;
  a.m = 5;
  Cd(a);
  Dd(a);
}
function Cd(a) {
  a.D || (a.D = true, D$1(a, "complete"), D$1(a, "error"));
}
k$1.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, D$1(this, "complete"), D$1(this, "abort"), Dd(this));
};
k$1.M = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), Dd(this, true));
  X$1.Z.M.call(this);
};
k$1.Fa = function() {
  this.s || (this.F || this.v || this.l ? Ed(this) : this.cb());
};
k$1.cb = function() {
  Ed(this);
};
function Ed(a) {
  if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != O$1(a) || 2 != a.ba())) {
    if (a.v && 4 == O$1(a))
      Gb(a.Fa, 0, a);
    else if (D$1(a, "readystatechange"), 4 == O$1(a)) {
      a.h = false;
      try {
        const n = a.ba();
        a:
          switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b = true;
              break a;
            default:
              b = false;
          }
        var c;
        if (!(c = b)) {
          var d;
          if (d = 0 === n) {
            var e = String(a.H).match(Mc$1)[1] || null;
            if (!e && l.self && l.self.location) {
              var f = l.self.location.protocol;
              e = f.substr(0, f.length - 1);
            }
            d = !xd.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c)
          D$1(a, "complete"), D$1(
            a,
            "success"
          );
        else {
          a.m = 6;
          try {
            var h = 2 < O$1(a) ? a.g.statusText : "";
          } catch (u) {
            h = "";
          }
          a.j = h + " [" + a.ba() + "]";
          Cd(a);
        }
      } finally {
        Dd(a);
      }
    }
  }
}
function Dd(a, b) {
  if (a.g) {
    Ad(a);
    const c = a.g, d = a.C[0] ? aa$1 : null;
    a.g = null;
    a.C = null;
    b || D$1(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Ad(a) {
  a.g && a.K && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
function O$1(a) {
  return a.g ? a.g.readyState : 0;
}
k$1.ba = function() {
  try {
    return 2 < O$1(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k$1.ga = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k$1.Qa = function(a) {
  if (this.g) {
    var b = this.g.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return vd(b);
  }
};
function oc$1(a) {
  try {
    if (!a.g)
      return null;
    if ("response" in a.g)
      return a.g.response;
    switch (a.J) {
      case wd:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g)
          return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b) {
    return null;
  }
}
k$1.Da = function() {
  return this.m;
};
k$1.La = function() {
  return "string" === typeof this.j ? this.j : String(this.j);
};
function Fd(a) {
  let b = "";
  xa$1(a, function(c, d) {
    b += d;
    b += ":";
    b += c;
    b += "\r\n";
  });
  return b;
}
function Gd(a, b, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = Fd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : R(a, b, c));
}
function Hd(a, b, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
}
function Id(a) {
  this.za = 0;
  this.l = [];
  this.h = new Mb();
  this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null;
  this.Za = this.V = 0;
  this.Xa = Hd("failFast", false, a);
  this.N = this.v = this.u = this.m = this.j = null;
  this.X = true;
  this.I = this.ta = this.U = -1;
  this.Y = this.A = this.C = 0;
  this.Pa = Hd("baseRetryDelayMs", 5e3, a);
  this.$a = Hd("retryDelaySeedMs", 1e4, a);
  this.Ya = Hd("forwardChannelMaxRetries", 2, a);
  this.ra = Hd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.qa = a && a.xmlHttpFactory || void 0;
  this.Ba = a && a.Yb || false;
  this.K = void 0;
  this.H = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.i = new gd(a && a.concurrentRequestLimit);
  this.Ca = new ld();
  this.ja = a && a.fastHandshake || false;
  this.Ra = a && a.Wb || false;
  a && a.Aa && this.h.Aa();
  a && a.forceLongPolling && (this.X = false);
  this.$ = !this.ja && this.X && a && a.detectBufferingProxy || false;
  this.ka = void 0;
  this.O = 0;
  this.L = false;
  this.B = null;
  this.Wa = !a || false !== a.Xb;
}
k$1 = Id.prototype;
k$1.ma = 8;
k$1.G = 1;
function Ic$1(a) {
  Jd(a);
  if (3 == a.G) {
    var b = a.V++, c = N$1(a.F);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Kd(a, c);
    b = new M$1(a, a.h, b, void 0);
    b.K = 2;
    b.v = jc$1(N$1(c));
    c = false;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b.v.toString(), ""));
    !c && l.Image && (new Image().src = b.v, c = true);
    c || (b.g = nc$1(b.l, null), b.g.ea(b.v));
    b.F = Date.now();
    lc$1(b);
  }
  Ld(a);
}
k$1.hb = function(a) {
  try {
    this.h.info("Origin Trials invoked: " + a);
  } catch (b) {
  }
};
function Ac$1(a) {
  a.g && (wc$1(a), a.g.cancel(), a.g = null);
}
function Jd(a) {
  Ac$1(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  zc$1(a);
  a.i.cancel();
  a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
}
function Md(a, b) {
  a.l.push(new fd(a.Za++, b));
  3 == a.G && Hc$1(a);
}
function Hc$1(a) {
  id(a.i) || a.m || (a.m = true, zb(a.Ha, a), a.C = 0);
}
function Nd(a, b) {
  if (Cc$1(a.i) >= a.i.j - (a.m ? 1 : 0))
    return false;
  if (a.m)
    return a.l = b.D.concat(a.l), true;
  if (1 == a.G || 2 == a.G || a.C >= (a.Xa ? 0 : a.Ya))
    return false;
  a.m = K$1(q$1(a.Ha, a, b), Od(a, a.C));
  a.C++;
  return true;
}
k$1.Ha = function(a) {
  if (this.m)
    if (this.m = null, 1 == this.G) {
      if (!a) {
        this.V = Math.floor(1e5 * Math.random());
        a = this.V++;
        const e = new M$1(this, this.h, a, void 0);
        let f = this.s;
        this.P && (f ? (f = ya$1(f), Aa$1(f, this.P)) : f = this.P);
        null === this.o && (e.H = f);
        if (this.ja)
          a: {
            var b = 0;
            for (var c = 0; c < this.l.length; c++) {
              b: {
                var d = this.l[c];
                if ("__data__" in d.g && (d = d.g.__data__, "string" === typeof d)) {
                  d = d.length;
                  break b;
                }
                d = void 0;
              }
              if (void 0 === d)
                break;
              b += d;
              if (4096 < b) {
                b = c;
                break a;
              }
              if (4096 === b || c === this.l.length - 1) {
                b = c + 1;
                break a;
              }
            }
            b = 1e3;
          }
        else
          b = 1e3;
        b = Pd(this, e, b);
        c = N$1(this.F);
        R(c, "RID", a);
        R(c, "CVER", 22);
        this.D && R(c, "X-HTTP-Session-Id", this.D);
        Kd(this, c);
        this.o && f && Gd(c, this.o, f);
        Dc$1(this.i, e);
        this.Ra && R(c, "TYPE", "init");
        this.ja ? (R(c, "$req", b), R(c, "SID", "null"), e.$ = true, ic$1(e, c, null)) : ic$1(e, c, b);
        this.G = 2;
      }
    } else
      3 == this.G && (a ? Qd(this, a) : 0 == this.l.length || id(this.i) || Qd(this));
};
function Qd(a, b) {
  var c;
  b ? c = b.m : c = a.V++;
  const d = N$1(a.F);
  R(d, "SID", a.J);
  R(d, "RID", c);
  R(d, "AID", a.U);
  Kd(a, d);
  a.o && a.s && Gd(d, a.o, a.s);
  c = new M$1(a, a.h, c, a.C + 1);
  null === a.o && (c.H = a.s);
  b && (a.l = b.D.concat(a.l));
  b = Pd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ra) + Math.round(0.5 * a.ra * Math.random()));
  Dc$1(a.i, c);
  ic$1(c, d, b);
}
function Kd(a, b) {
  a.j && Kc$1({}, function(c, d) {
    R(b, d, c);
  });
}
function Pd(a, b, c) {
  c = Math.min(a.l.length, c);
  var d = a.j ? q$1(a.j.Oa, a.j, a) : null;
  a: {
    var e = a.l;
    let f = -1;
    for (; ; ) {
      const h = ["count=" + c];
      -1 == f ? 0 < c ? (f = e[0].h, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      let n = true;
      for (let u = 0; u < c; u++) {
        let m = e[u].h;
        const r = e[u].g;
        m -= f;
        if (0 > m)
          f = Math.max(0, e[u].h - 100), n = false;
        else
          try {
            md(r, h, "req" + m + "_");
          } catch (G2) {
            d && d(r);
          }
      }
      if (n) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.l.splice(0, c);
  b.D = a;
  return d;
}
function Gc$1(a) {
  a.g || a.u || (a.Y = 1, zb(a.Ga, a), a.A = 0);
}
function Bc$1(a) {
  if (a.g || a.u || 3 <= a.A)
    return false;
  a.Y++;
  a.u = K$1(q$1(a.Ga, a), Od(a, a.A));
  a.A++;
  return true;
}
k$1.Ga = function() {
  this.u = null;
  Rd(this);
  if (this.$ && !(this.L || null == this.g || 0 >= this.O)) {
    var a = 2 * this.O;
    this.h.info("BP detection timer enabled: " + a);
    this.B = K$1(q$1(this.bb, this), a);
  }
};
k$1.bb = function() {
  this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = false, this.L = true, J$1(10), Ac$1(this), Rd(this));
};
function wc$1(a) {
  null != a.B && (l.clearTimeout(a.B), a.B = null);
}
function Rd(a) {
  a.g = new M$1(a, a.h, "rpc", a.Y);
  null === a.o && (a.g.H = a.s);
  a.g.O = 0;
  var b = N$1(a.oa);
  R(b, "RID", "rpc");
  R(b, "SID", a.J);
  R(b, "CI", a.N ? "0" : "1");
  R(b, "AID", a.U);
  Kd(a, b);
  R(b, "TYPE", "xmlhttp");
  a.o && a.s && Gd(b, a.o, a.s);
  a.K && a.g.setTimeout(a.K);
  var c = a.g;
  a = a.la;
  c.K = 1;
  c.v = jc$1(N$1(b));
  c.s = null;
  c.U = true;
  kc$1(c, a);
}
k$1.ab = function() {
  null != this.v && (this.v = null, Ac$1(this), Bc$1(this), J$1(19));
};
function zc$1(a) {
  null != a.v && (l.clearTimeout(a.v), a.v = null);
}
function uc$1(a, b) {
  var c = null;
  if (a.g == b) {
    zc$1(a);
    wc$1(a);
    a.g = null;
    var d = 2;
  } else if (yc$1(a.i, b))
    c = b.D, Fc$1(a.i, b), d = 1;
  else
    return;
  a.I = b.N;
  if (0 != a.G) {
    if (b.i)
      if (1 == d) {
        c = b.s ? b.s.length : 0;
        b = Date.now() - b.F;
        var e = a.C;
        d = Sb();
        D$1(d, new Vb(d, c));
        Hc$1(a);
      } else
        Gc$1(a);
    else if (e = b.o, 3 == e || 0 == e && 0 < a.I || !(1 == d && Nd(a, b) || 2 == d && Bc$1(a)))
      switch (c && 0 < c.length && (b = a.i, b.i = b.i.concat(c)), e) {
        case 1:
          Q$1(a, 5);
          break;
        case 4:
          Q$1(a, 10);
          break;
        case 3:
          Q$1(a, 6);
          break;
        default:
          Q$1(a, 2);
      }
  }
}
function Od(a, b) {
  let c = a.Pa + Math.floor(Math.random() * a.$a);
  a.j || (c *= 2);
  return c * b;
}
function Q$1(a, b) {
  a.h.info("Error code " + b);
  if (2 == b) {
    var c = null;
    a.j && (c = null);
    var d = q$1(a.jb, a);
    c || (c = new U$1("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Oc$1(c, "https"), jc$1(c));
    nd(c.toString(), d);
  } else
    J$1(2);
  a.G = 0;
  a.j && a.j.va(b);
  Ld(a);
  Jd(a);
}
k$1.jb = function(a) {
  a ? (this.h.info("Successfully pinged google.com"), J$1(2)) : (this.h.info("Failed to ping google.com"), J$1(1));
};
function Ld(a) {
  a.G = 0;
  a.I = -1;
  if (a.j) {
    if (0 != jd(a.i).length || 0 != a.l.length)
      a.i.i.length = 0, ra$1(a.l), a.l.length = 0;
    a.j.ua();
  }
}
function Ec$1(a, b, c) {
  let d = ad(c);
  if ("" != d.i)
    b && Pc$1(d, b + "." + d.i), Qc$1(d, d.m);
  else {
    const e = l.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.aa && xa$1(a.aa, function(e, f) {
    R(d, f, e);
  });
  b = a.D;
  c = a.sa;
  b && c && R(d, b, c);
  R(d, "VER", a.ma);
  Kd(a, d);
  return d;
}
function nc$1(a, b, c) {
  if (b && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b = c && a.Ba && !a.qa ? new X$1(new pd({ ib: true })) : new X$1(a.qa);
  b.L = a.H;
  return b;
}
function Sd() {
}
k$1 = Sd.prototype;
k$1.xa = function() {
};
k$1.wa = function() {
};
k$1.va = function() {
};
k$1.ua = function() {
};
k$1.Oa = function() {
};
function Td() {
  if (y && !(10 <= Number(Ua$1)))
    throw Error("Environmental error: no available transport.");
}
Td.prototype.g = function(a, b) {
  return new Y$1(a, b);
};
function Y$1(a, b) {
  C$1.call(this);
  this.g = new Id(b);
  this.l = a;
  this.h = b && b.messageUrlParams || null;
  a = b && b.messageHeaders || null;
  b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.g.s = a;
  a = b && b.initMessageHeaders || null;
  b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
  b && b.ya && (a ? a["X-WebChannel-Client-Profile"] = b.ya : a = { "X-WebChannel-Client-Profile": b.ya });
  this.g.P = a;
  (a = b && b.httpHeadersOverwriteParam) && !sa$1(a) && (this.g.o = a);
  this.A = b && b.supportsCrossDomainXhr || false;
  this.v = b && b.sendRawJson || false;
  (b = b && b.httpSessionIdParam) && !sa$1(b) && (this.g.D = b, a = this.h, null !== a && b in a && (a = this.h, b in a && delete a[b]));
  this.j = new Z$1(this);
}
t(Y$1, C$1);
Y$1.prototype.m = function() {
  this.g.j = this.j;
  this.A && (this.g.H = true);
  var a = this.g, b = this.l, c = this.h || void 0;
  a.Wa && (a.h.info("Origin Trials enabled."), zb(q$1(a.hb, a, b)));
  J$1(0);
  a.W = b;
  a.aa = c || {};
  a.N = a.X;
  a.F = Ec$1(a, null, a.W);
  Hc$1(a);
};
Y$1.prototype.close = function() {
  Ic$1(this.g);
};
Y$1.prototype.u = function(a) {
  if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Md(this.g, b);
  } else
    this.v ? (b = {}, b.__data__ = rb(a), Md(this.g, b)) : Md(this.g, a);
};
Y$1.prototype.M = function() {
  this.g.j = null;
  delete this.j;
  Ic$1(this.g);
  delete this.g;
  Y$1.Z.M.call(this);
};
function Ud(a) {
  ac$1.call(this);
  var b = a.__sm__;
  if (b) {
    a: {
      for (const c in b) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a)
      a = this.i, b = null !== b && a in b ? b[a] : void 0;
    this.data = b;
  } else
    this.data = a;
}
t(Ud, ac$1);
function Vd() {
  bc$1.call(this);
  this.status = 1;
}
t(Vd, bc$1);
function Z$1(a) {
  this.g = a;
}
t(Z$1, Sd);
Z$1.prototype.xa = function() {
  D$1(this.g, "a");
};
Z$1.prototype.wa = function(a) {
  D$1(this.g, new Ud(a));
};
Z$1.prototype.va = function(a) {
  D$1(this.g, new Vd());
};
Z$1.prototype.ua = function() {
  D$1(this.g, "b");
};
Td.prototype.createWebChannel = Td.prototype.g;
Y$1.prototype.send = Y$1.prototype.u;
Y$1.prototype.open = Y$1.prototype.m;
Y$1.prototype.close = Y$1.prototype.close;
Wb.NO_ERROR = 0;
Wb.TIMEOUT = 8;
Wb.HTTP_ERROR = 6;
Xb.COMPLETE = "complete";
$b.EventType = L$1;
L$1.OPEN = "a";
L$1.CLOSE = "b";
L$1.ERROR = "c";
L$1.MESSAGE = "d";
C$1.prototype.listen = C$1.prototype.N;
X$1.prototype.listenOnce = X$1.prototype.O;
X$1.prototype.getLastError = X$1.prototype.La;
X$1.prototype.getLastErrorCode = X$1.prototype.Da;
X$1.prototype.getStatus = X$1.prototype.ba;
X$1.prototype.getResponseJson = X$1.prototype.Qa;
X$1.prototype.getResponseText = X$1.prototype.ga;
X$1.prototype.send = X$1.prototype.ea;
var createWebChannelTransport = function() {
  return new Td();
};
var getStatEventTarget = function() {
  return Sb();
};
var ErrorCode = Wb;
var EventType = Xb;
var Event = H$1;
var Stat = { rb: 0, ub: 1, vb: 2, Ob: 3, Tb: 4, Qb: 5, Rb: 6, Pb: 7, Nb: 8, Sb: 9, PROXY: 10, NOPROXY: 11, Lb: 12, Hb: 13, Ib: 14, Gb: 15, Jb: 16, Kb: 17, nb: 18, mb: 19, ob: 20 };
var FetchXmlHttpFactory = pd;
var WebChannel = $b;
var XhrIo = X$1;
const D = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C {
  constructor(t2) {
    this.uid = t2;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t2) {
    return t2.uid === this.uid;
  }
}
C.UNAUTHENTICATED = new C(null), C.GOOGLE_CREDENTIALS = new C("google-credentials-uid"), C.FIRST_PARTY = new C("first-party-uid"), C.MOCK_USER = new C("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let x = "9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N = new Logger("@firebase/firestore");
function k() {
  return N.logLevel;
}
function M(t2) {
  N.setLogLevel(t2);
}
function O(t2, ...e) {
  if (N.logLevel <= LogLevel.DEBUG) {
    const n = e.map(B);
    N.debug(`Firestore (${x}): ${t2}`, ...n);
  }
}
function F(t2, ...e) {
  if (N.logLevel <= LogLevel.ERROR) {
    const n = e.map(B);
    N.error(`Firestore (${x}): ${t2}`, ...n);
  }
}
function $(t2, ...e) {
  if (N.logLevel <= LogLevel.WARN) {
    const n = e.map(B);
    N.warn(`Firestore (${x}): ${t2}`, ...n);
  }
}
function B(t2) {
  if ("string" == typeof t2)
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t2 = "Unexpected state") {
  const e = `FIRESTORE (${x}) INTERNAL ASSERTION FAILED: ` + t2;
  throw F(e), new Error(e);
}
function U(t2, e) {
  t2 || L();
}
function q(t2, e) {
  t2 || L();
}
function K(t2, e) {
  return t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class Q extends FirebaseError {
  constructor(t2, e) {
    super(t2, e), this.code = t2, this.message = e, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j {
  constructor() {
    this.promise = new Promise((t2, e) => {
      this.resolve = t2, this.reject = e;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W {
  constructor(t2, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
  }
}
class z {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(C.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class H {
  constructor(t2) {
    this.token = t2, this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t2, e) {
    this.changeListener = e, t2.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class J {
  constructor(t2) {
    this.t = t2, this.currentUser = C.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t2, e) {
    let n = this.i;
    const s = (t3) => this.i !== n ? (n = this.i, e(t3)) : Promise.resolve();
    let i = new j();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new j(), t2.enqueueRetryable(() => s(this.currentUser));
    };
    const r = () => {
      const e2 = i;
      t2.enqueueRetryable(async () => {
        await e2.promise, await s(this.currentUser);
      });
    }, o = (t3) => {
      O("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r();
    };
    this.t.onInit((t3) => o(t3)), setTimeout(() => {
      if (!this.auth) {
        const t3 = this.t.getImmediate({
          optional: true
        });
        t3 ? o(t3) : (O("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new j());
      }
    }, 0), r();
  }
  getToken() {
    const t2 = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => this.i !== t2 ? (O("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (U("string" == typeof e2.accessToken), new W(e2.accessToken, this.currentUser)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t2 = this.auth && this.auth.getUid();
    return U(null === t2 || "string" == typeof t2), new C(t2);
  }
}
class Y {
  constructor(t2, e, n) {
    this.type = "FirstParty", this.user = C.FIRST_PARTY, this.headers = /* @__PURE__ */ new Map(), this.headers.set("X-Goog-AuthUser", e);
    const s = t2.auth.getAuthHeaderValueForFirstParty([]);
    s && this.headers.set("Authorization", s), n && this.headers.set("X-Goog-Iam-Authorization-Token", n);
  }
}
class X {
  constructor(t2, e, n) {
    this.h = t2, this.l = e, this.m = n;
  }
  getToken() {
    return Promise.resolve(new Y(this.h, this.l, this.m));
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(C.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class Z {
  constructor(t2) {
    this.value = t2, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class tt {
  constructor(t2) {
    this.g = t2, this.forceRefresh = false, this.appCheck = null, this.p = null;
  }
  start(t2, e) {
    const n = (t3) => {
      null != t3.error && O("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t3.error.message}`);
      const n2 = t3.token !== this.p;
      return this.p = t3.token, O("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? e(t3.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t2.enqueueRetryable(() => n(e2));
    };
    const s = (t3) => {
      O("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t3, this.appCheck.addTokenListener(this.o);
    };
    this.g.onInit((t3) => s(t3)), setTimeout(() => {
      if (!this.appCheck) {
        const t3 = this.g.getImmediate({
          optional: true
        });
        t3 ? s(t3) : O("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
      }
    }, 0);
  }
  getToken() {
    const t2 = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t2).then((t3) => t3 ? (U("string" == typeof t3.token), this.p = t3.token, new Z(t3.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
class et {
  getToken() {
    return Promise.resolve(new Z(""));
  }
  invalidateToken() {
  }
  start(t2, e) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nt(t2) {
  const e = "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t2);
  if (e && "function" == typeof e.getRandomValues)
    e.getRandomValues(n);
  else
    for (let e2 = 0; e2 < t2; e2++)
      n[e2] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st {
  static I() {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
    let n = "";
    for (; n.length < 20; ) {
      const s = nt(40);
      for (let i = 0; i < s.length; ++i)
        n.length < 20 && s[i] < e && (n += t2.charAt(s[i] % t2.length));
    }
    return n;
  }
}
function it(t2, e) {
  return t2 < e ? -1 : t2 > e ? 1 : 0;
}
function rt(t2, e, n) {
  return t2.length === e.length && t2.every((t3, s) => n(t3, e[s]));
}
function ot(t2) {
  return t2 + "\0";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut {
  constructor(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  static now() {
    return ut.fromMillis(Date.now());
  }
  static fromDate(t2) {
    return ut.fromMillis(t2.getTime());
  }
  static fromMillis(t2) {
    const e = Math.floor(t2 / 1e3), n = Math.floor(1e6 * (t2 - 1e3 * e));
    return new ut(e, n);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t2) {
    return this.seconds === t2.seconds ? it(this.nanoseconds, t2.nanoseconds) : it(this.seconds, t2.seconds);
  }
  isEqual(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  valueOf() {
    const t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct {
  constructor(t2) {
    this.timestamp = t2;
  }
  static fromTimestamp(t2) {
    return new ct(t2);
  }
  static min() {
    return new ct(new ut(0, 0));
  }
  static max() {
    return new ct(new ut(253402300799, 999999999));
  }
  compareTo(t2) {
    return this.timestamp._compareTo(t2.timestamp);
  }
  isEqual(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at {
  constructor(t2, e, n) {
    void 0 === e ? e = 0 : e > t2.length && L(), void 0 === n ? n = t2.length - e : n > t2.length - e && L(), this.segments = t2, this.offset = e, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(t2) {
    return 0 === at.comparator(this, t2);
  }
  child(t2) {
    const e = this.segments.slice(this.offset, this.limit());
    return t2 instanceof at ? t2.forEach((t3) => {
      e.push(t3);
    }) : e.push(t2), this.construct(e);
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t2) {
    return t2 = void 0 === t2 ? 1 : t2, this.construct(this.segments, this.offset + t2, this.length - t2);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t2) {
    return this.segments[this.offset + t2];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t2) {
    if (t2.length < this.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  isImmediateParentOf(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  forEach(t2) {
    for (let e = this.offset, n = this.limit(); e < n; e++)
      t2(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t2, e) {
    const n = Math.min(t2.length, e.length);
    for (let s = 0; s < n; s++) {
      const n2 = t2.get(s), i = e.get(s);
      if (n2 < i)
        return -1;
      if (n2 > i)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }
}
class ht extends at {
  construct(t2, e, n) {
    return new ht(t2, e, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...t2) {
    const e = [];
    for (const n of t2) {
      if (n.indexOf("//") >= 0)
        throw new Q(G.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      e.push(...n.split("/").filter((t3) => t3.length > 0));
    }
    return new ht(e);
  }
  static emptyPath() {
    return new ht([]);
  }
}
const lt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ft extends at {
  construct(t2, e, n) {
    return new ft(t2, e, n);
  }
  static isValidIdentifier(t2) {
    return lt.test(t2);
  }
  canonicalString() {
    return this.toArray().map((t2) => (t2 = t2.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ft.isValidIdentifier(t2) || (t2 = "`" + t2 + "`"), t2)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  static keyField() {
    return new ft(["__name__"]);
  }
  static fromServerFormat(t2) {
    const e = [];
    let n = "", s = 0;
    const i = () => {
      if (0 === n.length)
        throw new Q(G.INVALID_ARGUMENT, `Invalid field path (${t2}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(n), n = "";
    };
    let r = false;
    for (; s < t2.length; ) {
      const e2 = t2[s];
      if ("\\" === e2) {
        if (s + 1 === t2.length)
          throw new Q(G.INVALID_ARGUMENT, "Path has trailing escape character: " + t2);
        const e3 = t2[s + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3)
          throw new Q(G.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t2);
        n += e3, s += 2;
      } else
        "`" === e2 ? (r = !r, s++) : "." !== e2 || r ? (n += e2, s++) : (i(), s++);
    }
    if (i(), r)
      throw new Q(G.INVALID_ARGUMENT, "Unterminated ` in path: " + t2);
    return new ft(e);
  }
  static emptyPath() {
    return new ft([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt {
  constructor(t2) {
    this.path = t2;
  }
  static fromPath(t2) {
    return new dt(ht.fromString(t2));
  }
  static fromName(t2) {
    return new dt(ht.fromString(t2).popFirst(5));
  }
  static empty() {
    return new dt(ht.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t2) {
    return null !== t2 && 0 === ht.comparator(this.path, t2.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t2, e) {
    return ht.comparator(t2.path, e.path);
  }
  static isDocumentKey(t2) {
    return t2.length % 2 == 0;
  }
  static fromSegments(t2) {
    return new dt(new ht(t2.slice()));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t {
  constructor(t2, e, n, s) {
    this.indexId = t2, this.collectionGroup = e, this.fields = n, this.indexState = s;
  }
}
function wt(t2) {
  return t2.fields.find((t3) => 2 === t3.kind);
}
function mt(t2) {
  return t2.fields.filter((t3) => 2 !== t3.kind);
}
function gt(t2, e) {
  let n = it(t2.collectionGroup, e.collectionGroup);
  if (0 !== n)
    return n;
  for (let s = 0; s < Math.min(t2.fields.length, e.fields.length); ++s)
    if (n = pt(t2.fields[s], e.fields[s]), 0 !== n)
      return n;
  return it(t2.fields.length, e.fields.length);
}
_t.UNKNOWN_ID = -1;
class yt {
  constructor(t2, e) {
    this.fieldPath = t2, this.kind = e;
  }
}
function pt(t2, e) {
  const n = ft.comparator(t2.fieldPath, e.fieldPath);
  return 0 !== n ? n : it(t2.kind, e.kind);
}
class It {
  constructor(t2, e) {
    this.sequenceNumber = t2, this.offset = e;
  }
  static empty() {
    return new It(0, At.min());
  }
}
function Tt(t2, e) {
  const n = t2.toTimestamp().seconds, s = t2.toTimestamp().nanoseconds + 1, i = ct.fromTimestamp(1e9 === s ? new ut(n + 1, 0) : new ut(n, s));
  return new At(i, dt.empty(), e);
}
function Et(t2) {
  return new At(t2.readTime, t2.key, -1);
}
class At {
  constructor(t2, e, n) {
    this.readTime = t2, this.documentKey = e, this.largestBatchId = n;
  }
  static min() {
    return new At(ct.min(), dt.empty(), -1);
  }
  static max() {
    return new At(ct.max(), dt.empty(), -1);
  }
}
function Rt(t2, e) {
  let n = t2.readTime.compareTo(e.readTime);
  return 0 !== n ? n : (n = dt.comparator(t2.documentKey, e.documentKey), 0 !== n ? n : it(t2.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class Pt {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t2) {
    this.onCommittedListeners.push(t2);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t2) => t2());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vt(t2) {
  if (t2.code !== G.FAILED_PRECONDITION || t2.message !== bt)
    throw t2;
  O("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt {
  constructor(t2) {
    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t2((t3) => {
      this.isDone = true, this.result = t3, this.nextCallback && this.nextCallback(t3);
    }, (t3) => {
      this.isDone = true, this.error = t3, this.catchCallback && this.catchCallback(t3);
    });
  }
  catch(t2) {
    return this.next(void 0, t2);
  }
  next(t2, e) {
    return this.callbackAttached && L(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t2, this.result) : new Vt((n, s) => {
      this.nextCallback = (e2) => {
        this.wrapSuccess(t2, e2).next(n, s);
      }, this.catchCallback = (t3) => {
        this.wrapFailure(e, t3).next(n, s);
      };
    });
  }
  toPromise() {
    return new Promise((t2, e) => {
      this.next(t2, e);
    });
  }
  wrapUserFunction(t2) {
    try {
      const e = t2();
      return e instanceof Vt ? e : Vt.resolve(e);
    } catch (t3) {
      return Vt.reject(t3);
    }
  }
  wrapSuccess(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : Vt.resolve(e);
  }
  wrapFailure(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : Vt.reject(e);
  }
  static resolve(t2) {
    return new Vt((e, n) => {
      e(t2);
    });
  }
  static reject(t2) {
    return new Vt((e, n) => {
      n(t2);
    });
  }
  static waitFor(t2) {
    return new Vt((e, n) => {
      let s = 0, i = 0, r = false;
      t2.forEach((t3) => {
        ++s, t3.next(() => {
          ++i, r && i === s && e();
        }, (t4) => n(t4));
      }), r = true, i === s && e();
    });
  }
  static or(t2) {
    let e = Vt.resolve(false);
    for (const n of t2)
      e = e.next((t3) => t3 ? Vt.resolve(t3) : n());
    return e;
  }
  static forEach(t2, e) {
    const n = [];
    return t2.forEach((t3, s) => {
      n.push(e.call(this, t3, s));
    }), this.waitFor(n);
  }
  static mapArray(t2, e) {
    return new Vt((n, s) => {
      const i = t2.length, r = new Array(i);
      let o = 0;
      for (let u = 0; u < i; u++) {
        const c = u;
        e(t2[c]).next((t3) => {
          r[c] = t3, ++o, o === i && n(r);
        }, (t3) => s(t3));
      }
    });
  }
  static doWhile(t2, e) {
    return new Vt((n, s) => {
      const i = () => {
        true === t2() ? e().next(() => {
          i();
        }, s) : n();
      };
      i();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St {
  constructor(t2, e) {
    this.action = t2, this.transaction = e, this.aborted = false, this.T = new j(), this.transaction.oncomplete = () => {
      this.T.resolve();
    }, this.transaction.onabort = () => {
      e.error ? this.T.reject(new xt(t2, e.error)) : this.T.resolve();
    }, this.transaction.onerror = (e2) => {
      const n = Ft(e2.target.error);
      this.T.reject(new xt(t2, n));
    };
  }
  static open(t2, e, n, s) {
    try {
      return new St(e, t2.transaction(s, n));
    } catch (t3) {
      throw new xt(e, t3);
    }
  }
  get A() {
    return this.T.promise;
  }
  abort(t2) {
    t2 && this.T.reject(t2), this.aborted || (O("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }
  R() {
    const t2 = this.transaction;
    this.aborted || "function" != typeof t2.commit || t2.commit();
  }
  store(t2) {
    const e = this.transaction.objectStore(t2);
    return new kt(e);
  }
}
class Dt {
  constructor(t2, e, n) {
    this.name = t2, this.version = e, this.P = n;
    12.2 === Dt.v(getUA()) && F("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  static delete(t2) {
    return O("SimpleDb", "Removing database:", t2), Mt(window.indexedDB.deleteDatabase(t2)).toPromise();
  }
  static V() {
    if (!isIndexedDBAvailable())
      return false;
    if (Dt.S())
      return true;
    const t2 = getUA(), e = Dt.v(t2), n = 0 < e && e < 10, s = Dt.D(t2), i = 0 < s && s < 4.5;
    return !(t2.indexOf("MSIE ") > 0 || t2.indexOf("Trident/") > 0 || t2.indexOf("Edge/") > 0 || n || i);
  }
  static S() {
    var t2;
    return "undefined" != typeof process && "YES" === (null === (t2 = process.env) || void 0 === t2 ? void 0 : t2.C);
  }
  static N(t2, e) {
    return t2.store(e);
  }
  static v(t2) {
    const e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  static D(t2) {
    const e = t2.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  async k(t2) {
    return this.db || (O("SimpleDb", "Opening database:", this.name), this.db = await new Promise((e, n) => {
      const s = indexedDB.open(this.name, this.version);
      s.onsuccess = (t3) => {
        const n2 = t3.target.result;
        e(n2);
      }, s.onblocked = () => {
        n(new xt(t2, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
      }, s.onerror = (e2) => {
        const s2 = e2.target.error;
        "VersionError" === s2.name ? n(new Q(G.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === s2.name ? n(new Q(G.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + s2)) : n(new xt(t2, s2));
      }, s.onupgradeneeded = (t3) => {
        O("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t3.oldVersion);
        const e2 = t3.target.result;
        this.P.M(e2, s.transaction, t3.oldVersion, this.version).next(() => {
          O("SimpleDb", "Database upgrade to version " + this.version + " complete");
        });
      };
    })), this.O && (this.db.onversionchange = (t3) => this.O(t3)), this.db;
  }
  F(t2) {
    this.O = t2, this.db && (this.db.onversionchange = (e) => t2(e));
  }
  async runTransaction(t2, e, n, s) {
    const i = "readonly" === e;
    let r = 0;
    for (; ; ) {
      ++r;
      try {
        this.db = await this.k(t2);
        const e2 = St.open(this.db, t2, i ? "readonly" : "readwrite", n), r2 = s(e2).next((t3) => (e2.R(), t3)).catch((t3) => (e2.abort(t3), Vt.reject(t3))).toPromise();
        return r2.catch(() => {
        }), await e2.A, r2;
      } catch (t3) {
        const e2 = t3, n2 = "FirebaseError" !== e2.name && r < 3;
        if (O("SimpleDb", "Transaction failed with error:", e2.message, "Retrying:", n2), this.close(), !n2)
          return Promise.reject(e2);
      }
    }
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
}
class Ct {
  constructor(t2) {
    this.$ = t2, this.B = false, this.L = null;
  }
  get isDone() {
    return this.B;
  }
  get U() {
    return this.L;
  }
  set cursor(t2) {
    this.$ = t2;
  }
  done() {
    this.B = true;
  }
  q(t2) {
    this.L = t2;
  }
  delete() {
    return Mt(this.$.delete());
  }
}
class xt extends Q {
  constructor(t2, e) {
    super(G.UNAVAILABLE, `IndexedDB transaction '${t2}' failed: ${e}`), this.name = "IndexedDbTransactionError";
  }
}
function Nt(t2) {
  return "IndexedDbTransactionError" === t2.name;
}
class kt {
  constructor(t2) {
    this.store = t2;
  }
  put(t2, e) {
    let n;
    return void 0 !== e ? (O("SimpleDb", "PUT", this.store.name, t2, e), n = this.store.put(e, t2)) : (O("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n = this.store.put(t2)), Mt(n);
  }
  add(t2) {
    O("SimpleDb", "ADD", this.store.name, t2, t2);
    return Mt(this.store.add(t2));
  }
  get(t2) {
    return Mt(this.store.get(t2)).next((e) => (void 0 === e && (e = null), O("SimpleDb", "GET", this.store.name, t2, e), e));
  }
  delete(t2) {
    O("SimpleDb", "DELETE", this.store.name, t2);
    return Mt(this.store.delete(t2));
  }
  count() {
    O("SimpleDb", "COUNT", this.store.name);
    return Mt(this.store.count());
  }
  K(t2, e) {
    const n = this.options(t2, e);
    if (n.index || "function" != typeof this.store.getAll) {
      const t3 = this.cursor(n), e2 = [];
      return this.G(t3, (t4, n2) => {
        e2.push(n2);
      }).next(() => e2);
    }
    {
      const t3 = this.store.getAll(n.range);
      return new Vt((e2, n2) => {
        t3.onerror = (t4) => {
          n2(t4.target.error);
        }, t3.onsuccess = (t4) => {
          e2(t4.target.result);
        };
      });
    }
  }
  j(t2, e) {
    const n = this.store.getAll(t2, null === e ? void 0 : e);
    return new Vt((t3, e2) => {
      n.onerror = (t4) => {
        e2(t4.target.error);
      }, n.onsuccess = (e3) => {
        t3(e3.target.result);
      };
    });
  }
  W(t2, e) {
    O("SimpleDb", "DELETE ALL", this.store.name);
    const n = this.options(t2, e);
    n.H = false;
    const s = this.cursor(n);
    return this.G(s, (t3, e2, n2) => n2.delete());
  }
  J(t2, e) {
    let n;
    e ? n = t2 : (n = {}, e = t2);
    const s = this.cursor(n);
    return this.G(s, e);
  }
  Y(t2) {
    const e = this.cursor({});
    return new Vt((n, s) => {
      e.onerror = (t3) => {
        const e2 = Ft(t3.target.error);
        s(e2);
      }, e.onsuccess = (e2) => {
        const s2 = e2.target.result;
        s2 ? t2(s2.primaryKey, s2.value).next((t3) => {
          t3 ? s2.continue() : n();
        }) : n();
      };
    });
  }
  G(t2, e) {
    const n = [];
    return new Vt((s, i) => {
      t2.onerror = (t3) => {
        i(t3.target.error);
      }, t2.onsuccess = (t3) => {
        const i2 = t3.target.result;
        if (!i2)
          return void s();
        const r = new Ct(i2), o = e(i2.primaryKey, i2.value, r);
        if (o instanceof Vt) {
          const t4 = o.catch((t5) => (r.done(), Vt.reject(t5)));
          n.push(t4);
        }
        r.isDone ? s() : null === r.U ? i2.continue() : i2.continue(r.U);
      };
    }).next(() => Vt.waitFor(n));
  }
  options(t2, e) {
    let n;
    return void 0 !== t2 && ("string" == typeof t2 ? n = t2 : e = t2), {
      index: n,
      range: e
    };
  }
  cursor(t2) {
    let e = "next";
    if (t2.reverse && (e = "prev"), t2.index) {
      const n = this.store.index(t2.index);
      return t2.H ? n.openKeyCursor(t2.range, e) : n.openCursor(t2.range, e);
    }
    return this.store.openCursor(t2.range, e);
  }
}
function Mt(t2) {
  return new Vt((e, n) => {
    t2.onsuccess = (t3) => {
      const n2 = t3.target.result;
      e(n2);
    }, t2.onerror = (t3) => {
      const e2 = Ft(t3.target.error);
      n(e2);
    };
  });
}
let Ot = false;
function Ft(t2) {
  const e = Dt.v(getUA());
  if (e >= 12.2 && e < 13) {
    const e2 = "An internal error was encountered in the Indexed Database server";
    if (t2.message.indexOf(e2) >= 0) {
      const t3 = new Q("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return Ot || (Ot = true, setTimeout(() => {
        throw t3;
      }, 0)), t3;
    }
  }
  return t2;
}
class $t {
  constructor(t2, e) {
    this.asyncQueue = t2, this.X = e, this.task = null;
  }
  start() {
    this.Z(15);
  }
  stop() {
    this.task && (this.task.cancel(), this.task = null);
  }
  get started() {
    return null !== this.task;
  }
  Z(t2) {
    O("IndexBackiller", `Scheduled in ${t2}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", t2, async () => {
      this.task = null;
      try {
        O("IndexBackiller", `Documents written: ${await this.X.tt()}`);
      } catch (t3) {
        Nt(t3) ? O("IndexBackiller", "Ignoring IndexedDB error during index backfill: ", t3) : await vt(t3);
      }
      await this.Z(1);
    });
  }
}
class Bt {
  constructor(t2, e) {
    this.localStore = t2, this.persistence = e;
  }
  async tt(t2 = 50) {
    return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (e) => this.et(e, t2));
  }
  et(t2, e) {
    const n = /* @__PURE__ */ new Set();
    let s = e, i = true;
    return Vt.doWhile(() => true === i && s > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(t2).next((e2) => {
      if (null !== e2 && !n.has(e2))
        return O("IndexBackiller", `Processing collection: ${e2}`), this.nt(t2, e2, s).next((t3) => {
          s -= t3, n.add(e2);
        });
      i = false;
    })).next(() => e - s);
  }
  nt(t2, e, n) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t2, e).next((s) => this.localStore.localDocuments.getNextDocuments(t2, e, s, n).next((n2) => {
      const i = n2.changes;
      return this.localStore.indexManager.updateIndexEntries(t2, i).next(() => this.st(s, n2)).next((n3) => (O("IndexBackiller", `Updating offset: ${n3}`), this.localStore.indexManager.updateCollectionGroup(t2, e, n3))).next(() => i.size);
    }));
  }
  st(t2, e) {
    let n = t2;
    return e.changes.forEach((t3, e2) => {
      const s = Et(e2);
      Rt(s, n) > 0 && (n = s);
    }), new At(n.readTime, n.documentKey, Math.max(e.batchId, t2.largestBatchId));
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt {
  constructor(t2, e) {
    this.previousValue = t2, e && (e.sequenceNumberHandler = (t3) => this.it(t3), this.rt = (t3) => e.writeSequenceNumber(t3));
  }
  it(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }
  next() {
    const t2 = ++this.previousValue;
    return this.rt && this.rt(t2), t2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut(t2) {
  let e = 0;
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e++;
  return e;
}
function qt(t2, e) {
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e(n, t2[n]);
}
function Kt(t2) {
  for (const e in t2)
    if (Object.prototype.hasOwnProperty.call(t2, e))
      return false;
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Lt.ot = -1;
class Gt {
  constructor(t2, e) {
    this.comparator = t2, this.root = e || jt.EMPTY;
  }
  insert(t2, e) {
    return new Gt(this.comparator, this.root.insert(t2, e, this.comparator).copy(null, null, jt.BLACK, null, null));
  }
  remove(t2) {
    return new Gt(this.comparator, this.root.remove(t2, this.comparator).copy(null, null, jt.BLACK, null, null));
  }
  get(t2) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n = this.comparator(t2, e.key);
      if (0 === n)
        return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t2) {
    let e = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const s = this.comparator(t2, n.key);
      if (0 === s)
        return e + n.left.size;
      s < 0 ? n = n.left : (e += n.left.size + 1, n = n.right);
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t2) {
    return this.root.inorderTraversal(t2);
  }
  forEach(t2) {
    this.inorderTraversal((e, n) => (t2(e, n), false));
  }
  toString() {
    const t2 = [];
    return this.inorderTraversal((e, n) => (t2.push(`${e}:${n}`), false)), `{${t2.join(", ")}}`;
  }
  reverseTraversal(t2) {
    return this.root.reverseTraversal(t2);
  }
  getIterator() {
    return new Qt(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t2) {
    return new Qt(this.root, t2, this.comparator, false);
  }
  getReverseIterator() {
    return new Qt(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t2) {
    return new Qt(this.root, t2, this.comparator, true);
  }
}
class Qt {
  constructor(t2, e, n, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !t2.isEmpty(); )
      if (i = e ? n(t2.key, e) : 1, e && s && (i *= -1), i < 0)
        t2 = this.isReverse ? t2.left : t2.right;
      else {
        if (0 === i) {
          this.nodeStack.push(t2);
          break;
        }
        this.nodeStack.push(t2), t2 = this.isReverse ? t2.right : t2.left;
      }
  }
  getNext() {
    let t2 = this.nodeStack.pop();
    const e = {
      key: t2.key,
      value: t2.value
    };
    if (this.isReverse)
      for (t2 = t2.left; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length)
      return null;
    const t2 = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }
}
class jt {
  constructor(t2, e, n, s, i) {
    this.key = t2, this.value = e, this.color = null != n ? n : jt.RED, this.left = null != s ? s : jt.EMPTY, this.right = null != i ? i : jt.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  copy(t2, e, n, s, i) {
    return new jt(null != t2 ? t2 : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(t2) {
    return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
  }
  reverseTraversal(t2) {
    return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t2, e, n) {
    let s = this;
    const i = n(t2, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(t2, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t2, e, n)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return jt.EMPTY;
    let t2 = this;
    return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
  }
  remove(t2, e) {
    let n, s = this;
    if (e(t2, s.key) < 0)
      s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t2, e), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 0 === e(t2, s.key)) {
        if (s.right.isEmpty())
          return jt.EMPTY;
        n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t2, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t2 = this;
    return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
  }
  moveRedLeft() {
    let t2 = this.colorFlip();
    return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
  }
  moveRedRight() {
    let t2 = this.colorFlip();
    return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
  }
  rotateLeft() {
    const t2 = this.copy(null, null, jt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t2, null);
  }
  rotateRight() {
    const t2 = this.copy(null, null, jt.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t2);
  }
  colorFlip() {
    const t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }
  checkMaxDepth() {
    const t2 = this.check();
    return Math.pow(2, t2) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw L();
    if (this.right.isRed())
      throw L();
    const t2 = this.left.check();
    if (t2 !== this.right.check())
      throw L();
    return t2 + (this.isRed() ? 0 : 1);
  }
}
jt.EMPTY = null, jt.RED = true, jt.BLACK = false;
jt.EMPTY = new class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw L();
  }
  get value() {
    throw L();
  }
  get color() {
    throw L();
  }
  get left() {
    throw L();
  }
  get right() {
    throw L();
  }
  copy(t2, e, n, s, i) {
    return this;
  }
  insert(t2, e, n) {
    return new jt(t2, e);
  }
  remove(t2, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t2) {
    return false;
  }
  reverseTraversal(t2) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt {
  constructor(t2) {
    this.comparator = t2, this.data = new Gt(this.comparator);
  }
  has(t2) {
    return null !== this.data.get(t2);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t2) {
    return this.data.indexOf(t2);
  }
  forEach(t2) {
    this.data.inorderTraversal((e, n) => (t2(e), false));
  }
  forEachInRange(t2, e) {
    const n = this.data.getIteratorFrom(t2[0]);
    for (; n.hasNext(); ) {
      const s = n.getNext();
      if (this.comparator(s.key, t2[1]) >= 0)
        return;
      e(s.key);
    }
  }
  forEachWhile(t2, e) {
    let n;
    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
      if (!t2(n.getNext().key))
        return;
    }
  }
  firstAfterOrEqual(t2) {
    const e = this.data.getIteratorFrom(t2);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new zt(this.data.getIterator());
  }
  getIteratorFrom(t2) {
    return new zt(this.data.getIteratorFrom(t2));
  }
  add(t2) {
    return this.copy(this.data.remove(t2).insert(t2, true));
  }
  delete(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t2) {
    let e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach((t3) => {
      e = e.add(t3);
    }), e;
  }
  isEqual(t2) {
    if (!(t2 instanceof Wt))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.data.getIterator(), n = t2.data.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (0 !== this.comparator(t3, s))
        return false;
    }
    return true;
  }
  toArray() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e);
    }), t2;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), "SortedSet(" + t2.toString() + ")";
  }
  copy(t2) {
    const e = new Wt(this.comparator);
    return e.data = t2, e;
  }
}
class zt {
  constructor(t2) {
    this.iter = t2;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
function Ht(t2) {
  return t2.hasNext() ? t2.getNext() : void 0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt {
  constructor(t2) {
    this.fields = t2, t2.sort(ft.comparator);
  }
  static empty() {
    return new Jt([]);
  }
  unionWith(t2) {
    let e = new Wt(ft.comparator);
    for (const t3 of this.fields)
      e = e.add(t3);
    for (const n of t2)
      e = e.add(n);
    return new Jt(e.toArray());
  }
  covers(t2) {
    for (const e of this.fields)
      if (e.isPrefixOf(t2))
        return true;
    return false;
  }
  isEqual(t2) {
    return rt(this.fields, t2.fields, (t3, e) => t3.isEqual(e));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt() {
  return "undefined" != typeof atob;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt {
  constructor(t2) {
    this.binaryString = t2;
  }
  static fromBase64String(t2) {
    const e = atob(t2);
    return new Xt(e);
  }
  static fromUint8Array(t2) {
    const e = function(t3) {
      let e2 = "";
      for (let n = 0; n < t3.length; ++n)
        e2 += String.fromCharCode(t3[n]);
      return e2;
    }(t2);
    return new Xt(e);
  }
  [Symbol.iterator]() {
    let t2 = 0;
    return {
      next: () => t2 < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t2++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return t2 = this.binaryString, btoa(t2);
    var t2;
  }
  toUint8Array() {
    return function(t2) {
      const e = new Uint8Array(t2.length);
      for (let n = 0; n < t2.length; n++)
        e[n] = t2.charCodeAt(n);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t2) {
    return it(this.binaryString, t2.binaryString);
  }
  isEqual(t2) {
    return this.binaryString === t2.binaryString;
  }
}
Xt.EMPTY_BYTE_STRING = new Xt("");
const Zt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function te(t2) {
  if (U(!!t2), "string" == typeof t2) {
    let e = 0;
    const n = Zt.exec(t2);
    if (U(!!n), n[1]) {
      let t3 = n[1];
      t3 = (t3 + "000000000").substr(0, 9), e = Number(t3);
    }
    const s = new Date(t2);
    return {
      seconds: Math.floor(s.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ee(t2.seconds),
    nanos: ee(t2.nanos)
  };
}
function ee(t2) {
  return "number" == typeof t2 ? t2 : "string" == typeof t2 ? Number(t2) : 0;
}
function ne(t2) {
  return "string" == typeof t2 ? Xt.fromBase64String(t2) : Xt.fromUint8Array(t2);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(t2) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t2 ? void 0 : t2.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function ie(t2) {
  const e = t2.mapValue.fields.__previous_value__;
  return se(e) ? ie(e) : e;
}
function re(t2) {
  const e = te(t2.mapValue.fields.__local_write_time__.timestampValue);
  return new ut(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe {
  constructor(t2, e, n, s, i, r, o, u) {
    this.databaseId = t2, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = u;
  }
}
class ue {
  constructor(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  static empty() {
    return new ue("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t2) {
    return t2 instanceof ue && t2.projectId === this.projectId && t2.database === this.database;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t2) {
  return null == t2;
}
function ae(t2) {
  return 0 === t2 && 1 / t2 == -1 / 0;
}
function he(t2) {
  return "number" == typeof t2 && Number.isInteger(t2) && !ae(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const le = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
}, fe = {
  nullValue: "NULL_VALUE"
};
function de(t2) {
  return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? se(t2) ? 4 : ve(t2) ? 9007199254740991 : 10 : L();
}
function _e(t2, e) {
  if (t2 === e)
    return true;
  const n = de(t2);
  if (n !== de(e))
    return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t2.booleanValue === e.booleanValue;
    case 4:
      return re(t2).isEqual(re(e));
    case 3:
      return function(t3, e2) {
        if ("string" == typeof t3.timestampValue && "string" == typeof e2.timestampValue && t3.timestampValue.length === e2.timestampValue.length)
          return t3.timestampValue === e2.timestampValue;
        const n2 = te(t3.timestampValue), s = te(e2.timestampValue);
        return n2.seconds === s.seconds && n2.nanos === s.nanos;
      }(t2, e);
    case 5:
      return t2.stringValue === e.stringValue;
    case 6:
      return function(t3, e2) {
        return ne(t3.bytesValue).isEqual(ne(e2.bytesValue));
      }(t2, e);
    case 7:
      return t2.referenceValue === e.referenceValue;
    case 8:
      return function(t3, e2) {
        return ee(t3.geoPointValue.latitude) === ee(e2.geoPointValue.latitude) && ee(t3.geoPointValue.longitude) === ee(e2.geoPointValue.longitude);
      }(t2, e);
    case 2:
      return function(t3, e2) {
        if ("integerValue" in t3 && "integerValue" in e2)
          return ee(t3.integerValue) === ee(e2.integerValue);
        if ("doubleValue" in t3 && "doubleValue" in e2) {
          const n2 = ee(t3.doubleValue), s = ee(e2.doubleValue);
          return n2 === s ? ae(n2) === ae(s) : isNaN(n2) && isNaN(s);
        }
        return false;
      }(t2, e);
    case 9:
      return rt(t2.arrayValue.values || [], e.arrayValue.values || [], _e);
    case 10:
      return function(t3, e2) {
        const n2 = t3.mapValue.fields || {}, s = e2.mapValue.fields || {};
        if (Ut(n2) !== Ut(s))
          return false;
        for (const t4 in n2)
          if (n2.hasOwnProperty(t4) && (void 0 === s[t4] || !_e(n2[t4], s[t4])))
            return false;
        return true;
      }(t2, e);
    default:
      return L();
  }
}
function we(t2, e) {
  return void 0 !== (t2.values || []).find((t3) => _e(t3, e));
}
function me(t2, e) {
  if (t2 === e)
    return 0;
  const n = de(t2), s = de(e);
  if (n !== s)
    return it(n, s);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return it(t2.booleanValue, e.booleanValue);
    case 2:
      return function(t3, e2) {
        const n2 = ee(t3.integerValue || t3.doubleValue), s2 = ee(e2.integerValue || e2.doubleValue);
        return n2 < s2 ? -1 : n2 > s2 ? 1 : n2 === s2 ? 0 : isNaN(n2) ? isNaN(s2) ? 0 : -1 : 1;
      }(t2, e);
    case 3:
      return ge(t2.timestampValue, e.timestampValue);
    case 4:
      return ge(re(t2), re(e));
    case 5:
      return it(t2.stringValue, e.stringValue);
    case 6:
      return function(t3, e2) {
        const n2 = ne(t3), s2 = ne(e2);
        return n2.compareTo(s2);
      }(t2.bytesValue, e.bytesValue);
    case 7:
      return function(t3, e2) {
        const n2 = t3.split("/"), s2 = e2.split("/");
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; t4++) {
          const e3 = it(n2[t4], s2[t4]);
          if (0 !== e3)
            return e3;
        }
        return it(n2.length, s2.length);
      }(t2.referenceValue, e.referenceValue);
    case 8:
      return function(t3, e2) {
        const n2 = it(ee(t3.latitude), ee(e2.latitude));
        if (0 !== n2)
          return n2;
        return it(ee(t3.longitude), ee(e2.longitude));
      }(t2.geoPointValue, e.geoPointValue);
    case 9:
      return function(t3, e2) {
        const n2 = t3.values || [], s2 = e2.values || [];
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; ++t4) {
          const e3 = me(n2[t4], s2[t4]);
          if (e3)
            return e3;
        }
        return it(n2.length, s2.length);
      }(t2.arrayValue, e.arrayValue);
    case 10:
      return function(t3, e2) {
        if (t3 === le.mapValue && e2 === le.mapValue)
          return 0;
        if (t3 === le.mapValue)
          return 1;
        if (e2 === le.mapValue)
          return -1;
        const n2 = t3.fields || {}, s2 = Object.keys(n2), i = e2.fields || {}, r = Object.keys(i);
        s2.sort(), r.sort();
        for (let t4 = 0; t4 < s2.length && t4 < r.length; ++t4) {
          const e3 = it(s2[t4], r[t4]);
          if (0 !== e3)
            return e3;
          const o = me(n2[s2[t4]], i[r[t4]]);
          if (0 !== o)
            return o;
        }
        return it(s2.length, r.length);
      }(t2.mapValue, e.mapValue);
    default:
      throw L();
  }
}
function ge(t2, e) {
  if ("string" == typeof t2 && "string" == typeof e && t2.length === e.length)
    return it(t2, e);
  const n = te(t2), s = te(e), i = it(n.seconds, s.seconds);
  return 0 !== i ? i : it(n.nanos, s.nanos);
}
function ye(t2) {
  return pe(t2);
}
function pe(t2) {
  return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
    const e2 = te(t3);
    return `time(${e2.seconds},${e2.nanos})`;
  }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? ne(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n = t2.referenceValue, dt.fromName(n).toString()) : "geoPointValue" in t2 ? `geo(${(e = t2.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t2 ? function(t3) {
    let e2 = "[", n2 = true;
    for (const s of t3.values || [])
      n2 ? n2 = false : e2 += ",", e2 += pe(s);
    return e2 + "]";
  }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
    const e2 = Object.keys(t3.fields || {}).sort();
    let n2 = "{", s = true;
    for (const i of e2)
      s ? s = false : n2 += ",", n2 += `${i}:${pe(t3.fields[i])}`;
    return n2 + "}";
  }(t2.mapValue) : L();
  var e, n;
}
function Ie(t2, e) {
  return {
    referenceValue: `projects/${t2.projectId}/databases/${t2.database}/documents/${e.path.canonicalString()}`
  };
}
function Te(t2) {
  return !!t2 && "integerValue" in t2;
}
function Ee(t2) {
  return !!t2 && "arrayValue" in t2;
}
function Ae(t2) {
  return !!t2 && "nullValue" in t2;
}
function Re(t2) {
  return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
}
function be(t2) {
  return !!t2 && "mapValue" in t2;
}
function Pe(t2) {
  if (t2.geoPointValue)
    return {
      geoPointValue: Object.assign({}, t2.geoPointValue)
    };
  if (t2.timestampValue && "object" == typeof t2.timestampValue)
    return {
      timestampValue: Object.assign({}, t2.timestampValue)
    };
  if (t2.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return qt(t2.mapValue.fields, (t3, n) => e.mapValue.fields[t3] = Pe(n)), e;
  }
  if (t2.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t2.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Pe(t2.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t2);
}
function ve(t2) {
  return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function Ve(t2) {
  return "nullValue" in t2 ? fe : "booleanValue" in t2 ? {
    booleanValue: false
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    doubleValue: NaN
  } : "timestampValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "stringValue" in t2 ? {
    stringValue: ""
  } : "bytesValue" in t2 ? {
    bytesValue: ""
  } : "referenceValue" in t2 ? Ie(ue.empty(), dt.empty()) : "geoPointValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "arrayValue" in t2 ? {
    arrayValue: {}
  } : "mapValue" in t2 ? {
    mapValue: {}
  } : L();
}
function Se(t2) {
  return "nullValue" in t2 ? {
    booleanValue: false
  } : "booleanValue" in t2 ? {
    doubleValue: NaN
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "timestampValue" in t2 ? {
    stringValue: ""
  } : "stringValue" in t2 ? {
    bytesValue: ""
  } : "bytesValue" in t2 ? Ie(ue.empty(), dt.empty()) : "referenceValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "geoPointValue" in t2 ? {
    arrayValue: {}
  } : "arrayValue" in t2 ? {
    mapValue: {}
  } : "mapValue" in t2 ? le : L();
}
function De(t2, e) {
  const n = me(t2.value, e.value);
  return 0 !== n ? n : t2.inclusive && !e.inclusive ? -1 : !t2.inclusive && e.inclusive ? 1 : 0;
}
function Ce(t2, e) {
  const n = me(t2.value, e.value);
  return 0 !== n ? n : t2.inclusive && !e.inclusive ? 1 : !t2.inclusive && e.inclusive ? -1 : 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe {
  constructor(t2) {
    this.value = t2;
  }
  static empty() {
    return new xe({
      mapValue: {}
    });
  }
  field(t2) {
    if (t2.isEmpty())
      return this.value;
    {
      let e = this.value;
      for (let n = 0; n < t2.length - 1; ++n)
        if (e = (e.mapValue.fields || {})[t2.get(n)], !be(e))
          return null;
      return e = (e.mapValue.fields || {})[t2.lastSegment()], e || null;
    }
  }
  set(t2, e) {
    this.getFieldsMap(t2.popLast())[t2.lastSegment()] = Pe(e);
  }
  setAll(t2) {
    let e = ft.emptyPath(), n = {}, s = [];
    t2.forEach((t3, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t4 = this.getFieldsMap(e);
        this.applyChanges(t4, n, s), n = {}, s = [], e = i2.popLast();
      }
      t3 ? n[i2.lastSegment()] = Pe(t3) : s.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n, s);
  }
  delete(t2) {
    const e = this.field(t2.popLast());
    be(e) && e.mapValue.fields && delete e.mapValue.fields[t2.lastSegment()];
  }
  isEqual(t2) {
    return _e(this.value, t2.value);
  }
  getFieldsMap(t2) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let n = 0; n < t2.length; ++n) {
      let s = e.mapValue.fields[t2.get(n)];
      be(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t2.get(n)] = s), e = s;
    }
    return e.mapValue.fields;
  }
  applyChanges(t2, e, n) {
    qt(e, (e2, n2) => t2[e2] = n2);
    for (const e2 of n)
      delete t2[e2];
  }
  clone() {
    return new xe(Pe(this.value));
  }
}
function Ne(t2) {
  const e = [];
  return qt(t2.fields, (t3, n) => {
    const s = new ft([t3]);
    if (be(n)) {
      const t4 = Ne(n.mapValue).fields;
      if (0 === t4.length)
        e.push(s);
      else
        for (const n2 of t4)
          e.push(s.child(n2));
    } else
      e.push(s);
  }), new Jt(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke {
  constructor(t2, e, n, s, i, r) {
    this.key = t2, this.documentType = e, this.version = n, this.readTime = s, this.data = i, this.documentState = r;
  }
  static newInvalidDocument(t2) {
    return new ke(t2, 0, ct.min(), ct.min(), xe.empty(), 0);
  }
  static newFoundDocument(t2, e, n) {
    return new ke(t2, 1, e, ct.min(), n, 0);
  }
  static newNoDocument(t2, e) {
    return new ke(t2, 2, e, ct.min(), xe.empty(), 0);
  }
  static newUnknownDocument(t2, e) {
    return new ke(t2, 3, e, ct.min(), xe.empty(), 2);
  }
  convertToFoundDocument(t2, e) {
    return this.version = t2, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  convertToNoDocument(t2) {
    return this.version = t2, this.documentType = 2, this.data = xe.empty(), this.documentState = 0, this;
  }
  convertToUnknownDocument(t2) {
    return this.version = t2, this.documentType = 3, this.data = xe.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = ct.min(), this;
  }
  setReadTime(t2) {
    return this.readTime = t2, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t2) {
    return t2 instanceof ke && this.key.isEqual(t2.key) && this.version.isEqual(t2.version) && this.documentType === t2.documentType && this.documentState === t2.documentState && this.data.isEqual(t2.data);
  }
  mutableCopy() {
    return new ke(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me {
  constructor(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
    this.path = t2, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, this.startAt = r, this.endAt = o, this.ut = null;
  }
}
function Oe(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
  return new Me(t2, e, n, s, i, r, o);
}
function Fe(t2) {
  const e = K(t2);
  if (null === e.ut) {
    let t3 = e.path.canonicalString();
    null !== e.collectionGroup && (t3 += "|cg:" + e.collectionGroup), t3 += "|f:", t3 += e.filters.map((t4) => {
      return (e2 = t4).field.canonicalString() + e2.op.toString() + ye(e2.value);
      var e2;
    }).join(","), t3 += "|ob:", t3 += e.orderBy.map((t4) => function(t5) {
      return t5.field.canonicalString() + t5.dir;
    }(t4)).join(","), ce(e.limit) || (t3 += "|l:", t3 += e.limit), e.startAt && (t3 += "|lb:", t3 += e.startAt.inclusive ? "b:" : "a:", t3 += e.startAt.position.map((t4) => ye(t4)).join(",")), e.endAt && (t3 += "|ub:", t3 += e.endAt.inclusive ? "a:" : "b:", t3 += e.endAt.position.map((t4) => ye(t4)).join(",")), e.ut = t3;
  }
  return e.ut;
}
function $e(t2) {
  let e = t2.path.canonicalString();
  return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += `, filters: [${t2.filters.map((t3) => {
    return `${(e2 = t3).field.canonicalString()} ${e2.op} ${ye(e2.value)}`;
    var e2;
  }).join(", ")}]`), ce(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += `, orderBy: [${t2.orderBy.map((t3) => function(t4) {
    return `${t4.field.canonicalString()} (${t4.dir})`;
  }(t3)).join(", ")}]`), t2.startAt && (e += ", startAt: ", e += t2.startAt.inclusive ? "b:" : "a:", e += t2.startAt.position.map((t3) => ye(t3)).join(",")), t2.endAt && (e += ", endAt: ", e += t2.endAt.inclusive ? "a:" : "b:", e += t2.endAt.position.map((t3) => ye(t3)).join(",")), `Target(${e})`;
}
function Be(t2, e) {
  if (t2.limit !== e.limit)
    return false;
  if (t2.orderBy.length !== e.orderBy.length)
    return false;
  for (let n2 = 0; n2 < t2.orderBy.length; n2++)
    if (!en(t2.orderBy[n2], e.orderBy[n2]))
      return false;
  if (t2.filters.length !== e.filters.length)
    return false;
  for (let i = 0; i < t2.filters.length; i++)
    if (n = t2.filters[i], s = e.filters[i], n.op !== s.op || !n.field.isEqual(s.field) || !_e(n.value, s.value))
      return false;
  var n, s;
  return t2.collectionGroup === e.collectionGroup && (!!t2.path.isEqual(e.path) && (!!sn(t2.startAt, e.startAt) && sn(t2.endAt, e.endAt)));
}
function Le(t2) {
  return dt.isDocumentKey(t2.path) && null === t2.collectionGroup && 0 === t2.filters.length;
}
function Ue(t2, e) {
  return t2.filters.filter((t3) => t3 instanceof Ge && t3.field.isEqual(e));
}
function qe(t2, e, n) {
  let s = fe, i = true;
  for (const n2 of Ue(t2, e)) {
    let t3 = fe, e2 = true;
    switch (n2.op) {
      case "<":
      case "<=":
        t3 = Ve(n2.value);
        break;
      case "==":
      case "in":
      case ">=":
        t3 = n2.value;
        break;
      case ">":
        t3 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = fe;
    }
    De({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) < 0 && (s = t3, i = e2);
  }
  if (null !== n)
    for (let r = 0; r < t2.orderBy.length; ++r) {
      if (t2.orderBy[r].field.isEqual(e)) {
        const t3 = n.position[r];
        De({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n.inclusive
        }) < 0 && (s = t3, i = n.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
function Ke(t2, e, n) {
  let s = le, i = true;
  for (const n2 of Ue(t2, e)) {
    let t3 = le, e2 = true;
    switch (n2.op) {
      case ">=":
      case ">":
        t3 = Se(n2.value), e2 = false;
        break;
      case "==":
      case "in":
      case "<=":
        t3 = n2.value;
        break;
      case "<":
        t3 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = le;
    }
    Ce({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) > 0 && (s = t3, i = e2);
  }
  if (null !== n)
    for (let r = 0; r < t2.orderBy.length; ++r) {
      if (t2.orderBy[r].field.isEqual(e)) {
        const t3 = n.position[r];
        Ce({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n.inclusive
        }) > 0 && (s = t3, i = n.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
class Ge extends class {
} {
  constructor(t2, e, n) {
    super(), this.field = t2, this.op = e, this.value = n;
  }
  static create(t2, e, n) {
    return t2.isKeyField() ? "in" === e || "not-in" === e ? this.ct(t2, e, n) : new Qe(t2, e, n) : "array-contains" === e ? new He(t2, n) : "in" === e ? new Je(t2, n) : "not-in" === e ? new Ye(t2, n) : "array-contains-any" === e ? new Xe(t2, n) : new Ge(t2, e, n);
  }
  static ct(t2, e, n) {
    return "in" === e ? new je(t2, n) : new We(t2, n);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return "!=" === this.op ? null !== e && this.at(me(e, this.value)) : null !== e && de(this.value) === de(e) && this.at(me(e, this.value));
  }
  at(t2) {
    switch (this.op) {
      case "<":
        return t2 < 0;
      case "<=":
        return t2 <= 0;
      case "==":
        return 0 === t2;
      case "!=":
        return 0 !== t2;
      case ">":
        return t2 > 0;
      case ">=":
        return t2 >= 0;
      default:
        return L();
    }
  }
  ht() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
}
class Qe extends Ge {
  constructor(t2, e, n) {
    super(t2, e, n), this.key = dt.fromName(n.referenceValue);
  }
  matches(t2) {
    const e = dt.comparator(t2.key, this.key);
    return this.at(e);
  }
}
class je extends Ge {
  constructor(t2, e) {
    super(t2, "in", e), this.keys = ze("in", e);
  }
  matches(t2) {
    return this.keys.some((e) => e.isEqual(t2.key));
  }
}
class We extends Ge {
  constructor(t2, e) {
    super(t2, "not-in", e), this.keys = ze("not-in", e);
  }
  matches(t2) {
    return !this.keys.some((e) => e.isEqual(t2.key));
  }
}
function ze(t2, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t3) => dt.fromName(t3.referenceValue));
}
class He extends Ge {
  constructor(t2, e) {
    super(t2, "array-contains", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return Ee(e) && we(e.arrayValue, this.value);
  }
}
class Je extends Ge {
  constructor(t2, e) {
    super(t2, "in", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return null !== e && we(this.value.arrayValue, e);
  }
}
class Ye extends Ge {
  constructor(t2, e) {
    super(t2, "not-in", e);
  }
  matches(t2) {
    if (we(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    const e = t2.data.field(this.field);
    return null !== e && !we(this.value.arrayValue, e);
  }
}
class Xe extends Ge {
  constructor(t2, e) {
    super(t2, "array-contains-any", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return !(!Ee(e) || !e.arrayValue.values) && e.arrayValue.values.some((t3) => we(this.value.arrayValue, t3));
  }
}
class Ze {
  constructor(t2, e) {
    this.position = t2, this.inclusive = e;
  }
}
class tn {
  constructor(t2, e = "asc") {
    this.field = t2, this.dir = e;
  }
}
function en(t2, e) {
  return t2.dir === e.dir && t2.field.isEqual(e.field);
}
function nn(t2, e, n) {
  let s = 0;
  for (let i = 0; i < t2.position.length; i++) {
    const r = e[i], o = t2.position[i];
    if (r.field.isKeyField())
      s = dt.comparator(dt.fromName(o.referenceValue), n.key);
    else {
      s = me(o, n.data.field(r.field));
    }
    if ("desc" === r.dir && (s *= -1), 0 !== s)
      break;
  }
  return s;
}
function sn(t2, e) {
  if (null === t2)
    return null === e;
  if (null === e)
    return false;
  if (t2.inclusive !== e.inclusive || t2.position.length !== e.position.length)
    return false;
  for (let n = 0; n < t2.position.length; n++) {
    if (!_e(t2.position[n], e.position[n]))
      return false;
  }
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn {
  constructor(t2, e = null, n = [], s = [], i = null, r = "F", o = null, u = null) {
    this.path = t2, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, this.limit = i, this.limitType = r, this.startAt = o, this.endAt = u, this.lt = null, this.ft = null, this.startAt, this.endAt;
  }
}
function on(t2, e, n, s, i, r, o, u) {
  return new rn(t2, e, n, s, i, r, o, u);
}
function un(t2) {
  return new rn(t2);
}
function cn(t2) {
  return 0 === t2.filters.length && null === t2.limit && null == t2.startAt && null == t2.endAt && (0 === t2.explicitOrderBy.length || 1 === t2.explicitOrderBy.length && t2.explicitOrderBy[0].field.isKeyField());
}
function an(t2) {
  return t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[0].field : null;
}
function hn(t2) {
  for (const e of t2.filters)
    if (e.ht())
      return e.field;
  return null;
}
function ln(t2) {
  return null !== t2.collectionGroup;
}
function fn(t2) {
  const e = K(t2);
  if (null === e.lt) {
    e.lt = [];
    const t3 = hn(e), n = an(e);
    if (null !== t3 && null === n)
      t3.isKeyField() || e.lt.push(new tn(t3)), e.lt.push(new tn(ft.keyField(), "asc"));
    else {
      let t4 = false;
      for (const n2 of e.explicitOrderBy)
        e.lt.push(n2), n2.field.isKeyField() && (t4 = true);
      if (!t4) {
        const t5 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e.lt.push(new tn(ft.keyField(), t5));
      }
    }
  }
  return e.lt;
}
function dn(t2) {
  const e = K(t2);
  if (!e.ft)
    if ("F" === e.limitType)
      e.ft = Oe(e.path, e.collectionGroup, fn(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const t3 = [];
      for (const n2 of fn(e)) {
        const e2 = "desc" === n2.dir ? "asc" : "desc";
        t3.push(new tn(n2.field, e2));
      }
      const n = e.endAt ? new Ze(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new Ze(e.startAt.position, e.startAt.inclusive) : null;
      e.ft = Oe(e.path, e.collectionGroup, t3, e.filters, e.limit, n, s);
    }
  return e.ft;
}
function _n(t2, e, n) {
  return new rn(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, n, t2.startAt, t2.endAt);
}
function wn(t2, e) {
  return Be(dn(t2), dn(e)) && t2.limitType === e.limitType;
}
function mn(t2) {
  return `${Fe(dn(t2))}|lt:${t2.limitType}`;
}
function gn(t2) {
  return `Query(target=${$e(dn(t2))}; limitType=${t2.limitType})`;
}
function yn(t2, e) {
  return e.isFoundDocument() && function(t3, e2) {
    const n = e2.key.path;
    return null !== t3.collectionGroup ? e2.key.hasCollectionId(t3.collectionGroup) && t3.path.isPrefixOf(n) : dt.isDocumentKey(t3.path) ? t3.path.isEqual(n) : t3.path.isImmediateParentOf(n);
  }(t2, e) && function(t3, e2) {
    for (const n of t3.explicitOrderBy)
      if (!n.field.isKeyField() && null === e2.data.field(n.field))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    for (const n of t3.filters)
      if (!n.matches(e2))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    if (t3.startAt && !function(t4, e3, n) {
      const s = nn(t4, e3, n);
      return t4.inclusive ? s <= 0 : s < 0;
    }(t3.startAt, fn(t3), e2))
      return false;
    if (t3.endAt && !function(t4, e3, n) {
      const s = nn(t4, e3, n);
      return t4.inclusive ? s >= 0 : s > 0;
    }(t3.endAt, fn(t3), e2))
      return false;
    return true;
  }(t2, e);
}
function pn(t2) {
  return t2.collectionGroup || (t2.path.length % 2 == 1 ? t2.path.lastSegment() : t2.path.get(t2.path.length - 2));
}
function In(t2) {
  return (e, n) => {
    let s = false;
    for (const i of fn(t2)) {
      const t3 = Tn(i, e, n);
      if (0 !== t3)
        return t3;
      s = s || i.field.isKeyField();
    }
    return 0;
  };
}
function Tn(t2, e, n) {
  const s = t2.field.isKeyField() ? dt.comparator(e.key, n.key) : function(t3, e2, n2) {
    const s2 = e2.data.field(t3), i = n2.data.field(t3);
    return null !== s2 && null !== i ? me(s2, i) : L();
  }(t2.field, e, n);
  switch (t2.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return L();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(t2, e) {
  if (t2.dt) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: ae(e) ? "-0" : e
  };
}
function An(t2) {
  return {
    integerValue: "" + t2
  };
}
function Rn(t2, e) {
  return he(e) ? An(e) : En(t2, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn {
  constructor() {
    this._ = void 0;
  }
}
function Pn(t2, e, n) {
  return t2 instanceof Sn ? function(t3, e2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t3.seconds,
            nanos: t3.nanoseconds
          }
        }
      }
    };
    return e2 && (n2.fields.__previous_value__ = e2), {
      mapValue: n2
    };
  }(n, e) : t2 instanceof Dn ? Cn(t2, e) : t2 instanceof xn ? Nn(t2, e) : function(t3, e2) {
    const n2 = Vn(t3, e2), s = Mn(n2) + Mn(t3._t);
    return Te(n2) && Te(t3._t) ? An(s) : En(t3.wt, s);
  }(t2, e);
}
function vn(t2, e, n) {
  return t2 instanceof Dn ? Cn(t2, e) : t2 instanceof xn ? Nn(t2, e) : n;
}
function Vn(t2, e) {
  return t2 instanceof kn ? Te(n = e) || function(t3) {
    return !!t3 && "doubleValue" in t3;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
class Sn extends bn {
}
class Dn extends bn {
  constructor(t2) {
    super(), this.elements = t2;
  }
}
function Cn(t2, e) {
  const n = On(e);
  for (const e2 of t2.elements)
    n.some((t3) => _e(t3, e2)) || n.push(e2);
  return {
    arrayValue: {
      values: n
    }
  };
}
class xn extends bn {
  constructor(t2) {
    super(), this.elements = t2;
  }
}
function Nn(t2, e) {
  let n = On(e);
  for (const e2 of t2.elements)
    n = n.filter((t3) => !_e(t3, e2));
  return {
    arrayValue: {
      values: n
    }
  };
}
class kn extends bn {
  constructor(t2, e) {
    super(), this.wt = t2, this._t = e;
  }
}
function Mn(t2) {
  return ee(t2.integerValue || t2.doubleValue);
}
function On(t2) {
  return Ee(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn {
  constructor(t2, e) {
    this.field = t2, this.transform = e;
  }
}
function $n(t2, e) {
  return t2.field.isEqual(e.field) && function(t3, e2) {
    return t3 instanceof Dn && e2 instanceof Dn || t3 instanceof xn && e2 instanceof xn ? rt(t3.elements, e2.elements, _e) : t3 instanceof kn && e2 instanceof kn ? _e(t3._t, e2._t) : t3 instanceof Sn && e2 instanceof Sn;
  }(t2.transform, e.transform);
}
class Bn {
  constructor(t2, e) {
    this.version = t2, this.transformResults = e;
  }
}
class Ln {
  constructor(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  static none() {
    return new Ln();
  }
  static exists(t2) {
    return new Ln(void 0, t2);
  }
  static updateTime(t2) {
    return new Ln(t2);
  }
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }
}
function Un(t2, e) {
  return void 0 !== t2.updateTime ? e.isFoundDocument() && e.version.isEqual(t2.updateTime) : void 0 === t2.exists || t2.exists === e.isFoundDocument();
}
class qn {
}
function Kn(t2, e) {
  if (!t2.hasLocalMutations || e && 0 === e.fields.length)
    return null;
  if (null === e)
    return t2.isNoDocument() ? new Zn(t2.key, Ln.none()) : new zn(t2.key, t2.data, Ln.none());
  {
    const n = t2.data, s = xe.empty();
    let i = new Wt(ft.comparator);
    for (let t3 of e.fields)
      if (!i.has(t3)) {
        let e2 = n.field(t3);
        null === e2 && t3.length > 1 && (t3 = t3.popLast(), e2 = n.field(t3)), null === e2 ? s.delete(t3) : s.set(t3, e2), i = i.add(t3);
      }
    return new Hn(t2.key, s, new Jt(i.toArray()), Ln.none());
  }
}
function Gn(t2, e, n) {
  t2 instanceof zn ? function(t3, e2, n2) {
    const s = t3.value.clone(), i = Yn(t3.fieldTransforms, e2, n2.transformResults);
    s.setAll(i), e2.convertToFoundDocument(n2.version, s).setHasCommittedMutations();
  }(t2, e, n) : t2 instanceof Hn ? function(t3, e2, n2) {
    if (!Un(t3.precondition, e2))
      return void e2.convertToUnknownDocument(n2.version);
    const s = Yn(t3.fieldTransforms, e2, n2.transformResults), i = e2.data;
    i.setAll(Jn(t3)), i.setAll(s), e2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(t2, e, n) : function(t3, e2, n2) {
    e2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, e, n);
}
function Qn(t2, e, n, s) {
  return t2 instanceof zn ? function(t3, e2, n2, s2) {
    if (!Un(t3.precondition, e2))
      return n2;
    const i = t3.value.clone(), r = Xn(t3.fieldTransforms, s2, e2);
    return i.setAll(r), e2.convertToFoundDocument(e2.version, i).setHasLocalMutations(), null;
  }(t2, e, n, s) : t2 instanceof Hn ? function(t3, e2, n2, s2) {
    if (!Un(t3.precondition, e2))
      return n2;
    const i = Xn(t3.fieldTransforms, s2, e2), r = e2.data;
    if (r.setAll(Jn(t3)), r.setAll(i), e2.convertToFoundDocument(e2.version, r).setHasLocalMutations(), null === n2)
      return null;
    return n2.unionWith(t3.fieldMask.fields).unionWith(t3.fieldTransforms.map((t4) => t4.field));
  }(t2, e, n, s) : function(t3, e2, n2) {
    if (Un(t3.precondition, e2))
      return e2.convertToNoDocument(e2.version).setHasLocalMutations(), null;
    return n2;
  }(t2, e, n);
}
function jn(t2, e) {
  let n = null;
  for (const s of t2.fieldTransforms) {
    const t3 = e.data.field(s.field), i = Vn(s.transform, t3 || null);
    null != i && (null === n && (n = xe.empty()), n.set(s.field, i));
  }
  return n || null;
}
function Wn(t2, e) {
  return t2.type === e.type && (!!t2.key.isEqual(e.key) && (!!t2.precondition.isEqual(e.precondition) && (!!function(t3, e2) {
    return void 0 === t3 && void 0 === e2 || !(!t3 || !e2) && rt(t3, e2, (t4, e3) => $n(t4, e3));
  }(t2.fieldTransforms, e.fieldTransforms) && (0 === t2.type ? t2.value.isEqual(e.value) : 1 !== t2.type || t2.data.isEqual(e.data) && t2.fieldMask.isEqual(e.fieldMask)))));
}
class zn extends qn {
  constructor(t2, e, n, s = []) {
    super(), this.key = t2, this.value = e, this.precondition = n, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class Hn extends qn {
  constructor(t2, e, n, s, i = []) {
    super(), this.key = t2, this.data = e, this.fieldMask = n, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Jn(t2) {
  const e = /* @__PURE__ */ new Map();
  return t2.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const s = t2.data.field(n);
      e.set(n, s);
    }
  }), e;
}
function Yn(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  U(t2.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const r = t2[i], o = r.transform, u = e.data.field(r.field);
    s.set(r.field, vn(o, u, n[i]));
  }
  return s;
}
function Xn(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  for (const i of t2) {
    const t3 = i.transform, r = n.data.field(i.field);
    s.set(i.field, Pn(t3, r, e));
  }
  return s;
}
class Zn extends qn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class ts extends qn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es {
  constructor(t2) {
    this.count = t2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns, ss;
function is(t2) {
  switch (t2) {
    default:
      return L();
    case G.CANCELLED:
    case G.UNKNOWN:
    case G.DEADLINE_EXCEEDED:
    case G.RESOURCE_EXHAUSTED:
    case G.INTERNAL:
    case G.UNAVAILABLE:
    case G.UNAUTHENTICATED:
      return false;
    case G.INVALID_ARGUMENT:
    case G.NOT_FOUND:
    case G.ALREADY_EXISTS:
    case G.PERMISSION_DENIED:
    case G.FAILED_PRECONDITION:
    case G.ABORTED:
    case G.OUT_OF_RANGE:
    case G.UNIMPLEMENTED:
    case G.DATA_LOSS:
      return true;
  }
}
function rs(t2) {
  if (void 0 === t2)
    return F("GRPC error has no .code"), G.UNKNOWN;
  switch (t2) {
    case ns.OK:
      return G.OK;
    case ns.CANCELLED:
      return G.CANCELLED;
    case ns.UNKNOWN:
      return G.UNKNOWN;
    case ns.DEADLINE_EXCEEDED:
      return G.DEADLINE_EXCEEDED;
    case ns.RESOURCE_EXHAUSTED:
      return G.RESOURCE_EXHAUSTED;
    case ns.INTERNAL:
      return G.INTERNAL;
    case ns.UNAVAILABLE:
      return G.UNAVAILABLE;
    case ns.UNAUTHENTICATED:
      return G.UNAUTHENTICATED;
    case ns.INVALID_ARGUMENT:
      return G.INVALID_ARGUMENT;
    case ns.NOT_FOUND:
      return G.NOT_FOUND;
    case ns.ALREADY_EXISTS:
      return G.ALREADY_EXISTS;
    case ns.PERMISSION_DENIED:
      return G.PERMISSION_DENIED;
    case ns.FAILED_PRECONDITION:
      return G.FAILED_PRECONDITION;
    case ns.ABORTED:
      return G.ABORTED;
    case ns.OUT_OF_RANGE:
      return G.OUT_OF_RANGE;
    case ns.UNIMPLEMENTED:
      return G.UNIMPLEMENTED;
    case ns.DATA_LOSS:
      return G.DATA_LOSS;
    default:
      return L();
  }
}
(ss = ns || (ns = {}))[ss.OK = 0] = "OK", ss[ss.CANCELLED = 1] = "CANCELLED", ss[ss.UNKNOWN = 2] = "UNKNOWN", ss[ss.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ss[ss.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ss[ss.NOT_FOUND = 5] = "NOT_FOUND", ss[ss.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ss[ss.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ss[ss.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ss[ss.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ss[ss.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ss[ss.ABORTED = 10] = "ABORTED", ss[ss.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ss[ss.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ss[ss.INTERNAL = 13] = "INTERNAL", ss[ss.UNAVAILABLE = 14] = "UNAVAILABLE", ss[ss.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os {
  constructor(t2, e) {
    this.mapKeyFn = t2, this.equalsFn = e, this.inner = {}, this.innerSize = 0;
  }
  get(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 !== n) {
      for (const [e2, s] of n)
        if (this.equalsFn(e2, t2))
          return s;
    }
  }
  has(t2) {
    return void 0 !== this.get(t2);
  }
  set(t2, e) {
    const n = this.mapKeyFn(t2), s = this.inner[n];
    if (void 0 === s)
      return this.inner[n] = [[t2, e]], void this.innerSize++;
    for (let n2 = 0; n2 < s.length; n2++)
      if (this.equalsFn(s[n2][0], t2))
        return void (s[n2] = [t2, e]);
    s.push([t2, e]), this.innerSize++;
  }
  delete(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 === n)
      return false;
    for (let s = 0; s < n.length; s++)
      if (this.equalsFn(n[s][0], t2))
        return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), this.innerSize--, true;
    return false;
  }
  forEach(t2) {
    qt(this.inner, (e, n) => {
      for (const [e2, s] of n)
        t2(e2, s);
    });
  }
  isEmpty() {
    return Kt(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const us = new Gt(dt.comparator);
function cs() {
  return us;
}
const as = new Gt(dt.comparator);
function hs(...t2) {
  let e = as;
  for (const n of t2)
    e = e.insert(n.key, n);
  return e;
}
function ls(t2) {
  let e = as;
  return t2.forEach((t3, n) => e = e.insert(t3, n.overlayedDocument)), e;
}
function fs() {
  return _s();
}
function ds() {
  return _s();
}
function _s() {
  return new os((t2) => t2.toString(), (t2, e) => t2.isEqual(e));
}
const ws = new Gt(dt.comparator);
const ms = new Wt(dt.comparator);
function gs(...t2) {
  let e = ms;
  for (const n of t2)
    e = e.add(n);
  return e;
}
const ys = new Wt(it);
function ps() {
  return ys;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is {
  constructor(t2, e, n, s, i) {
    this.snapshotVersion = t2, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, this.resolvedLimboDocuments = i;
  }
  static createSynthesizedRemoteEventForCurrentChange(t2, e) {
    const n = /* @__PURE__ */ new Map();
    return n.set(t2, Ts.createSynthesizedTargetChangeForCurrentChange(t2, e)), new Is(ct.min(), n, ps(), cs(), gs());
  }
}
class Ts {
  constructor(t2, e, n, s, i) {
    this.resumeToken = t2, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, this.removedDocuments = i;
  }
  static createSynthesizedTargetChangeForCurrentChange(t2, e) {
    return new Ts(Xt.EMPTY_BYTE_STRING, e, gs(), gs(), gs());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es {
  constructor(t2, e, n, s) {
    this.gt = t2, this.removedTargetIds = e, this.key = n, this.yt = s;
  }
}
class As {
  constructor(t2, e) {
    this.targetId = t2, this.It = e;
  }
}
class Rs {
  constructor(t2, e, n = Xt.EMPTY_BYTE_STRING, s = null) {
    this.state = t2, this.targetIds = e, this.resumeToken = n, this.cause = s;
  }
}
class bs {
  constructor() {
    this.Tt = 0, this.Et = Vs(), this.At = Xt.EMPTY_BYTE_STRING, this.Rt = false, this.bt = true;
  }
  get current() {
    return this.Rt;
  }
  get resumeToken() {
    return this.At;
  }
  get Pt() {
    return 0 !== this.Tt;
  }
  get vt() {
    return this.bt;
  }
  Vt(t2) {
    t2.approximateByteSize() > 0 && (this.bt = true, this.At = t2);
  }
  St() {
    let t2 = gs(), e = gs(), n = gs();
    return this.Et.forEach((s, i) => {
      switch (i) {
        case 0:
          t2 = t2.add(s);
          break;
        case 2:
          e = e.add(s);
          break;
        case 1:
          n = n.add(s);
          break;
        default:
          L();
      }
    }), new Ts(this.At, this.Rt, t2, e, n);
  }
  Dt() {
    this.bt = false, this.Et = Vs();
  }
  Ct(t2, e) {
    this.bt = true, this.Et = this.Et.insert(t2, e);
  }
  xt(t2) {
    this.bt = true, this.Et = this.Et.remove(t2);
  }
  Nt() {
    this.Tt += 1;
  }
  kt() {
    this.Tt -= 1;
  }
  Mt() {
    this.bt = true, this.Rt = true;
  }
}
class Ps {
  constructor(t2) {
    this.Ot = t2, this.Ft = /* @__PURE__ */ new Map(), this.$t = cs(), this.Bt = vs(), this.Lt = new Wt(it);
  }
  Ut(t2) {
    for (const e of t2.gt)
      t2.yt && t2.yt.isFoundDocument() ? this.qt(e, t2.yt) : this.Kt(e, t2.key, t2.yt);
    for (const e of t2.removedTargetIds)
      this.Kt(e, t2.key, t2.yt);
  }
  Gt(t2) {
    this.forEachTarget(t2, (e) => {
      const n = this.Qt(e);
      switch (t2.state) {
        case 0:
          this.jt(e) && n.Vt(t2.resumeToken);
          break;
        case 1:
          n.kt(), n.Pt || n.Dt(), n.Vt(t2.resumeToken);
          break;
        case 2:
          n.kt(), n.Pt || this.removeTarget(e);
          break;
        case 3:
          this.jt(e) && (n.Mt(), n.Vt(t2.resumeToken));
          break;
        case 4:
          this.jt(e) && (this.Wt(e), n.Vt(t2.resumeToken));
          break;
        default:
          L();
      }
    });
  }
  forEachTarget(t2, e) {
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Ft.forEach((t3, n) => {
      this.jt(n) && e(n);
    });
  }
  zt(t2) {
    const e = t2.targetId, n = t2.It.count, s = this.Ht(e);
    if (s) {
      const t3 = s.target;
      if (Le(t3))
        if (0 === n) {
          const n2 = new dt(t3.path);
          this.Kt(e, n2, ke.newNoDocument(n2, ct.min()));
        } else
          U(1 === n);
      else {
        this.Jt(e) !== n && (this.Wt(e), this.Lt = this.Lt.add(e));
      }
    }
  }
  Yt(t2) {
    const e = /* @__PURE__ */ new Map();
    this.Ft.forEach((n2, s2) => {
      const i = this.Ht(s2);
      if (i) {
        if (n2.current && Le(i.target)) {
          const e2 = new dt(i.target.path);
          null !== this.$t.get(e2) || this.Xt(s2, e2) || this.Kt(s2, e2, ke.newNoDocument(e2, t2));
        }
        n2.vt && (e.set(s2, n2.St()), n2.Dt());
      }
    });
    let n = gs();
    this.Bt.forEach((t3, e2) => {
      let s2 = true;
      e2.forEachWhile((t4) => {
        const e3 = this.Ht(t4);
        return !e3 || 2 === e3.purpose || (s2 = false, false);
      }), s2 && (n = n.add(t3));
    }), this.$t.forEach((e2, n2) => n2.setReadTime(t2));
    const s = new Is(t2, e, this.Lt, this.$t, n);
    return this.$t = cs(), this.Bt = vs(), this.Lt = new Wt(it), s;
  }
  qt(t2, e) {
    if (!this.jt(t2))
      return;
    const n = this.Xt(t2, e.key) ? 2 : 0;
    this.Qt(t2).Ct(e.key, n), this.$t = this.$t.insert(e.key, e), this.Bt = this.Bt.insert(e.key, this.Zt(e.key).add(t2));
  }
  Kt(t2, e, n) {
    if (!this.jt(t2))
      return;
    const s = this.Qt(t2);
    this.Xt(t2, e) ? s.Ct(e, 1) : s.xt(e), this.Bt = this.Bt.insert(e, this.Zt(e).delete(t2)), n && (this.$t = this.$t.insert(e, n));
  }
  removeTarget(t2) {
    this.Ft.delete(t2);
  }
  Jt(t2) {
    const e = this.Qt(t2).St();
    return this.Ot.getRemoteKeysForTarget(t2).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  Nt(t2) {
    this.Qt(t2).Nt();
  }
  Qt(t2) {
    let e = this.Ft.get(t2);
    return e || (e = new bs(), this.Ft.set(t2, e)), e;
  }
  Zt(t2) {
    let e = this.Bt.get(t2);
    return e || (e = new Wt(it), this.Bt = this.Bt.insert(t2, e)), e;
  }
  jt(t2) {
    const e = null !== this.Ht(t2);
    return e || O("WatchChangeAggregator", "Detected inactive target", t2), e;
  }
  Ht(t2) {
    const e = this.Ft.get(t2);
    return e && e.Pt ? null : this.Ot.te(t2);
  }
  Wt(t2) {
    this.Ft.set(t2, new bs());
    this.Ot.getRemoteKeysForTarget(t2).forEach((e) => {
      this.Kt(t2, e, null);
    });
  }
  Xt(t2, e) {
    return this.Ot.getRemoteKeysForTarget(t2).has(e);
  }
}
function vs() {
  return new Gt(dt.comparator);
}
function Vs() {
  return new Gt(dt.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss = (() => {
  const t2 = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t2;
})(), Ds = (() => {
  const t2 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t2;
})();
class Cs {
  constructor(t2, e) {
    this.databaseId = t2, this.dt = e;
  }
}
function xs(t2, e) {
  if (t2.dt) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Ns(t2, e) {
  return t2.dt ? e.toBase64() : e.toUint8Array();
}
function ks(t2, e) {
  return xs(t2, e.toTimestamp());
}
function Ms(t2) {
  return U(!!t2), ct.fromTimestamp(function(t3) {
    const e = te(t3);
    return new ut(e.seconds, e.nanos);
  }(t2));
}
function Os(t2, e) {
  return function(t3) {
    return new ht(["projects", t3.projectId, "databases", t3.database]);
  }(t2).child("documents").child(e).canonicalString();
}
function Fs(t2) {
  const e = ht.fromString(t2);
  return U(ai(e)), e;
}
function $s(t2, e) {
  return Os(t2.databaseId, e.path);
}
function Bs(t2, e) {
  const n = Fs(e);
  if (n.get(1) !== t2.databaseId.projectId)
    throw new Q(G.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t2.databaseId.projectId);
  if (n.get(3) !== t2.databaseId.database)
    throw new Q(G.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t2.databaseId.database);
  return new dt(Ks(n));
}
function Ls(t2, e) {
  return Os(t2.databaseId, e);
}
function Us(t2) {
  const e = Fs(t2);
  return 4 === e.length ? ht.emptyPath() : Ks(e);
}
function qs(t2) {
  return new ht(["projects", t2.databaseId.projectId, "databases", t2.databaseId.database]).canonicalString();
}
function Ks(t2) {
  return U(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
}
function Gs(t2, e, n) {
  return {
    name: $s(t2, e),
    fields: n.value.mapValue.fields
  };
}
function Qs(t2, e, n) {
  const s = Bs(t2, e.name), i = Ms(e.updateTime), r = new xe({
    mapValue: {
      fields: e.fields
    }
  }), o = ke.newFoundDocument(s, i, r);
  return n && o.setHasCommittedMutations(), n ? o.setHasCommittedMutations() : o;
}
function js(t2, e) {
  return "found" in e ? function(t3, e2) {
    U(!!e2.found), e2.found.name, e2.found.updateTime;
    const n = Bs(t3, e2.found.name), s = Ms(e2.found.updateTime), i = new xe({
      mapValue: {
        fields: e2.found.fields
      }
    });
    return ke.newFoundDocument(n, s, i);
  }(t2, e) : "missing" in e ? function(t3, e2) {
    U(!!e2.missing), U(!!e2.readTime);
    const n = Bs(t3, e2.missing), s = Ms(e2.readTime);
    return ke.newNoDocument(n, s);
  }(t2, e) : L();
}
function Ws(t2, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const s = function(t3) {
      return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : L();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t3, e2) {
      return t3.dt ? (U(void 0 === e2 || "string" == typeof e2), Xt.fromBase64String(e2 || "")) : (U(void 0 === e2 || e2 instanceof Uint8Array), Xt.fromUint8Array(e2 || new Uint8Array()));
    }(t2, e.targetChange.resumeToken), o = e.targetChange.cause, u = o && function(t3) {
      const e2 = void 0 === t3.code ? G.UNKNOWN : rs(t3.code);
      return new Q(e2, t3.message || "");
    }(o);
    n = new Rs(s, i, r, u || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const i = Bs(t2, s.document.name), r = Ms(s.document.updateTime), o = new xe({
      mapValue: {
        fields: s.document.fields
      }
    }), u = ke.newFoundDocument(i, r, o), c = s.targetIds || [], a = s.removedTargetIds || [];
    n = new Es(c, a, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const i = Bs(t2, s.document), r = s.readTime ? Ms(s.readTime) : ct.min(), o = ke.newNoDocument(i, r), u = s.removedTargetIds || [];
    n = new Es([], u, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const i = Bs(t2, s.document), r = s.removedTargetIds || [];
    n = new Es([], r, i, null);
  } else {
    if (!("filter" in e))
      return L();
    {
      e.filter;
      const t3 = e.filter;
      t3.targetId;
      const s = t3.count || 0, i = new es(s), r = t3.targetId;
      n = new As(r, i);
    }
  }
  return n;
}
function zs(t2, e) {
  let n;
  if (e instanceof zn)
    n = {
      update: Gs(t2, e.key, e.value)
    };
  else if (e instanceof Zn)
    n = {
      delete: $s(t2, e.key)
    };
  else if (e instanceof Hn)
    n = {
      update: Gs(t2, e.key, e.data),
      updateMask: ci(e.fieldMask)
    };
  else {
    if (!(e instanceof ts))
      return L();
    n = {
      verify: $s(t2, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t3) => function(t4, e2) {
    const n2 = e2.transform;
    if (n2 instanceof Sn)
      return {
        fieldPath: e2.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (n2 instanceof Dn)
      return {
        fieldPath: e2.field.canonicalString(),
        appendMissingElements: {
          values: n2.elements
        }
      };
    if (n2 instanceof xn)
      return {
        fieldPath: e2.field.canonicalString(),
        removeAllFromArray: {
          values: n2.elements
        }
      };
    if (n2 instanceof kn)
      return {
        fieldPath: e2.field.canonicalString(),
        increment: n2._t
      };
    throw L();
  }(0, t3))), e.precondition.isNone || (n.currentDocument = function(t3, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: ks(t3, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : L();
  }(t2, e.precondition)), n;
}
function Hs(t2, e) {
  const n = e.currentDocument ? function(t3) {
    return void 0 !== t3.updateTime ? Ln.updateTime(Ms(t3.updateTime)) : void 0 !== t3.exists ? Ln.exists(t3.exists) : Ln.none();
  }(e.currentDocument) : Ln.none(), s = e.updateTransforms ? e.updateTransforms.map((e2) => function(t3, e3) {
    let n2 = null;
    if ("setToServerValue" in e3)
      U("REQUEST_TIME" === e3.setToServerValue), n2 = new Sn();
    else if ("appendMissingElements" in e3) {
      const t4 = e3.appendMissingElements.values || [];
      n2 = new Dn(t4);
    } else if ("removeAllFromArray" in e3) {
      const t4 = e3.removeAllFromArray.values || [];
      n2 = new xn(t4);
    } else
      "increment" in e3 ? n2 = new kn(t3, e3.increment) : L();
    const s2 = ft.fromServerFormat(e3.fieldPath);
    return new Fn(s2, n2);
  }(t2, e2)) : [];
  if (e.update) {
    e.update.name;
    const i = Bs(t2, e.update.name), r = new xe({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      const t3 = function(t4) {
        const e2 = t4.fieldPaths || [];
        return new Jt(e2.map((t5) => ft.fromServerFormat(t5)));
      }(e.updateMask);
      return new Hn(i, r, t3, n, s);
    }
    return new zn(i, r, n, s);
  }
  if (e.delete) {
    const s2 = Bs(t2, e.delete);
    return new Zn(s2, n);
  }
  if (e.verify) {
    const s2 = Bs(t2, e.verify);
    return new ts(s2, n);
  }
  return L();
}
function Js(t2, e) {
  return t2 && t2.length > 0 ? (U(void 0 !== e), t2.map((t3) => function(t4, e2) {
    let n = t4.updateTime ? Ms(t4.updateTime) : Ms(e2);
    return n.isEqual(ct.min()) && (n = Ms(e2)), new Bn(n, t4.transformResults || []);
  }(t3, e))) : [];
}
function Ys(t2, e) {
  return {
    documents: [Ls(t2, e.path)]
  };
}
function Xs(t2, e) {
  const n = {
    structuredQuery: {}
  }, s = e.path;
  null !== e.collectionGroup ? (n.parent = Ls(t2, s), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n.parent = Ls(t2, s.popLast()), n.structuredQuery.from = [{
    collectionId: s.lastSegment()
  }]);
  const i = function(t3) {
    if (0 === t3.length)
      return;
    const e2 = t3.map((t4) => function(t5) {
      if ("==" === t5.op) {
        if (Re(t5.value))
          return {
            unaryFilter: {
              field: ii(t5.field),
              op: "IS_NAN"
            }
          };
        if (Ae(t5.value))
          return {
            unaryFilter: {
              field: ii(t5.field),
              op: "IS_NULL"
            }
          };
      } else if ("!=" === t5.op) {
        if (Re(t5.value))
          return {
            unaryFilter: {
              field: ii(t5.field),
              op: "IS_NOT_NAN"
            }
          };
        if (Ae(t5.value))
          return {
            unaryFilter: {
              field: ii(t5.field),
              op: "IS_NOT_NULL"
            }
          };
      }
      return {
        fieldFilter: {
          field: ii(t5.field),
          op: si(t5.op),
          value: t5.value
        }
      };
    }(t4));
    if (1 === e2.length)
      return e2[0];
    return {
      compositeFilter: {
        op: "AND",
        filters: e2
      }
    };
  }(e.filters);
  i && (n.structuredQuery.where = i);
  const r = function(t3) {
    if (0 === t3.length)
      return;
    return t3.map((t4) => function(t5) {
      return {
        field: ii(t5.field),
        direction: ni(t5.dir)
      };
    }(t4));
  }(e.orderBy);
  r && (n.structuredQuery.orderBy = r);
  const o = function(t3, e2) {
    return t3.dt || ce(e2) ? e2 : {
      value: e2
    };
  }(t2, e.limit);
  var u;
  return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
    before: (u = e.startAt).inclusive,
    values: u.position
  }), e.endAt && (n.structuredQuery.endAt = function(t3) {
    return {
      before: !t3.inclusive,
      values: t3.position
    };
  }(e.endAt)), n;
}
function Zs(t2) {
  let e = Us(t2.parent);
  const n = t2.structuredQuery, s = n.from ? n.from.length : 0;
  let i = null;
  if (s > 0) {
    U(1 === s);
    const t3 = n.from[0];
    t3.allDescendants ? i = t3.collectionId : e = e.child(t3.collectionId);
  }
  let r = [];
  n.where && (r = ei(n.where));
  let o = [];
  n.orderBy && (o = n.orderBy.map((t3) => function(t4) {
    return new tn(
      ri(t4.field),
      function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction)
    );
  }(t3)));
  let u = null;
  n.limit && (u = function(t3) {
    let e2;
    return e2 = "object" == typeof t3 ? t3.value : t3, ce(e2) ? null : e2;
  }(n.limit));
  let c = null;
  n.startAt && (c = function(t3) {
    const e2 = !!t3.before, n2 = t3.values || [];
    return new Ze(n2, e2);
  }(n.startAt));
  let a = null;
  return n.endAt && (a = function(t3) {
    const e2 = !t3.before, n2 = t3.values || [];
    return new Ze(n2, e2);
  }(n.endAt)), on(e, i, o, r, u, "F", c, a);
}
function ti(t2, e) {
  const n = function(t3, e2) {
    switch (e2) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return L();
    }
  }(0, e.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function ei(t2) {
  return t2 ? void 0 !== t2.unaryFilter ? [ui(t2)] : void 0 !== t2.fieldFilter ? [oi(t2)] : void 0 !== t2.compositeFilter ? t2.compositeFilter.filters.map((t3) => ei(t3)).reduce((t3, e) => t3.concat(e)) : L() : [];
}
function ni(t2) {
  return Ss[t2];
}
function si(t2) {
  return Ds[t2];
}
function ii(t2) {
  return {
    fieldPath: t2.canonicalString()
  };
}
function ri(t2) {
  return ft.fromServerFormat(t2.fieldPath);
}
function oi(t2) {
  return Ge.create(ri(t2.fieldFilter.field), function(t3) {
    switch (t3) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      default:
        return L();
    }
  }(t2.fieldFilter.op), t2.fieldFilter.value);
}
function ui(t2) {
  switch (t2.unaryFilter.op) {
    case "IS_NAN":
      const e = ri(t2.unaryFilter.field);
      return Ge.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      const n = ri(t2.unaryFilter.field);
      return Ge.create(n, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      const s = ri(t2.unaryFilter.field);
      return Ge.create(s, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      const i = ri(t2.unaryFilter.field);
      return Ge.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    default:
      return L();
  }
}
function ci(t2) {
  const e = [];
  return t2.fields.forEach((t3) => e.push(t3.canonicalString())), {
    fieldPaths: e
  };
}
function ai(t2) {
  return t2.length >= 4 && "projects" === t2.get(0) && "databases" === t2.get(2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(t2) {
  let e = "";
  for (let n = 0; n < t2.length; n++)
    e.length > 0 && (e = fi(e)), e = li(t2.get(n), e);
  return fi(e);
}
function li(t2, e) {
  let n = e;
  const s = t2.length;
  for (let e2 = 0; e2 < s; e2++) {
    const s2 = t2.charAt(e2);
    switch (s2) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += s2;
    }
  }
  return n;
}
function fi(t2) {
  return t2 + "";
}
function di(t2) {
  const e = t2.length;
  if (U(e >= 2), 2 === e)
    return U("" === t2.charAt(0) && "" === t2.charAt(1)), ht.emptyPath();
  const n = e - 2, s = [];
  let i = "";
  for (let r = 0; r < e; ) {
    const e2 = t2.indexOf("", r);
    (e2 < 0 || e2 > n) && L();
    switch (t2.charAt(e2 + 1)) {
      case "":
        const n2 = t2.substring(r, e2);
        let o;
        0 === i.length ? o = n2 : (i += n2, o = i, i = ""), s.push(o);
        break;
      case "":
        i += t2.substring(r, e2), i += "\0";
        break;
      case "":
        i += t2.substring(r, e2 + 1);
        break;
      default:
        L();
    }
    r = e2 + 2;
  }
  return new ht(s);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _i = ["userId", "batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(t2, e) {
  return [t2, hi(e)];
}
function mi(t2, e, n) {
  return [t2, hi(e), n];
}
const gi = {}, yi = ["prefixPath", "collectionGroup", "readTime", "documentId"], pi = ["prefixPath", "collectionGroup", "documentId"], Ii = ["collectionGroup", "readTime", "prefixPath", "documentId"], Ti = ["canonicalId", "targetId"], Ei = ["targetId", "path"], Ai = ["path", "targetId"], Ri = ["collectionId", "parent"], bi = ["indexId", "uid"], Pi = ["uid", "sequenceNumber"], vi = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"], Vi = ["indexId", "uid", "orderedDocumentKey"], Si = ["userId", "collectionPath", "documentId"], Di = ["userId", "collectionPath", "largestBatchId"], Ci = ["userId", "collectionGroup", "largestBatchId"], xi = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"], Ni = [...xi, "documentOverlays"], ki = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"], Mi = ki, Oi = [...Mi, "indexConfiguration", "indexState", "indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi extends Pt {
  constructor(t2, e) {
    super(), this.ee = t2, this.currentSequenceNumber = e;
  }
}
function $i(t2, e) {
  const n = K(t2);
  return Dt.N(n.ee, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi {
  constructor(t2, e, n, s) {
    this.batchId = t2, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
  }
  applyToRemoteDocument(t2, e) {
    const n = e.mutationResults;
    for (let e2 = 0; e2 < this.mutations.length; e2++) {
      const s = this.mutations[e2];
      if (s.key.isEqual(t2.key)) {
        Gn(s, t2, n[e2]);
      }
    }
  }
  applyToLocalView(t2, e) {
    for (const n of this.baseMutations)
      n.key.isEqual(t2.key) && (e = Qn(n, t2, e, this.localWriteTime));
    for (const n of this.mutations)
      n.key.isEqual(t2.key) && (e = Qn(n, t2, e, this.localWriteTime));
    return e;
  }
  applyToLocalDocumentSet(t2, e) {
    const n = ds();
    return this.mutations.forEach((s) => {
      const i = t2.get(s.key), r = i.overlayedDocument;
      let o = this.applyToLocalView(r, i.mutatedFields);
      o = e.has(s.key) ? null : o;
      const u = Kn(r, o);
      null !== u && n.set(s.key, u), r.isValidDocument() || r.convertToNoDocument(ct.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((t2, e) => t2.add(e.key), gs());
  }
  isEqual(t2) {
    return this.batchId === t2.batchId && rt(this.mutations, t2.mutations, (t3, e) => Wn(t3, e)) && rt(this.baseMutations, t2.baseMutations, (t3, e) => Wn(t3, e));
  }
}
class Li {
  constructor(t2, e, n, s) {
    this.batch = t2, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
  }
  static from(t2, e, n) {
    U(t2.mutations.length === n.length);
    let s = ws;
    const i = t2.mutations;
    for (let t3 = 0; t3 < i.length; t3++)
      s = s.insert(i[t3].key, n[t3].version);
    return new Li(t2, e, n, s);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui {
  constructor(t2, e) {
    this.largestBatchId = t2, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t2) {
    return null !== t2 && this.mutation === t2.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi {
  constructor(t2, e, n, s, i = ct.min(), r = ct.min(), o = Xt.EMPTY_BYTE_STRING) {
    this.target = t2, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
  }
  withSequenceNumber(t2) {
    return new qi(this.target, this.targetId, this.purpose, t2, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }
  withResumeToken(t2, e) {
    return new qi(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t2);
  }
  withLastLimboFreeSnapshotVersion(t2) {
    return new qi(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t2, this.resumeToken);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki {
  constructor(t2) {
    this.ne = t2;
  }
}
function Gi(t2, e) {
  let n;
  if (e.document)
    n = Qs(t2.ne, e.document, !!e.hasCommittedMutations);
  else if (e.noDocument) {
    const t3 = dt.fromSegments(e.noDocument.path), s = zi(e.noDocument.readTime);
    n = ke.newNoDocument(t3, s), e.hasCommittedMutations && n.setHasCommittedMutations();
  } else {
    if (!e.unknownDocument)
      return L();
    {
      const t3 = dt.fromSegments(e.unknownDocument.path), s = zi(e.unknownDocument.version);
      n = ke.newUnknownDocument(t3, s);
    }
  }
  return e.readTime && n.setReadTime(function(t3) {
    const e2 = new ut(t3[0], t3[1]);
    return ct.fromTimestamp(e2);
  }(e.readTime)), n;
}
function Qi(t2, e) {
  const n = e.key, s = {
    prefixPath: n.getCollectionPath().popLast().toArray(),
    collectionGroup: n.collectionGroup,
    documentId: n.path.lastSegment(),
    readTime: ji(e.readTime),
    hasCommittedMutations: e.hasCommittedMutations
  };
  if (e.isFoundDocument())
    s.document = function(t3, e2) {
      return {
        name: $s(t3, e2.key),
        fields: e2.data.value.mapValue.fields,
        updateTime: xs(t3, e2.version.toTimestamp())
      };
    }(t2.ne, e);
  else if (e.isNoDocument())
    s.noDocument = {
      path: n.path.toArray(),
      readTime: Wi(e.version)
    };
  else {
    if (!e.isUnknownDocument())
      return L();
    s.unknownDocument = {
      path: n.path.toArray(),
      version: Wi(e.version)
    };
  }
  return s;
}
function ji(t2) {
  const e = t2.toTimestamp();
  return [e.seconds, e.nanoseconds];
}
function Wi(t2) {
  const e = t2.toTimestamp();
  return {
    seconds: e.seconds,
    nanoseconds: e.nanoseconds
  };
}
function zi(t2) {
  const e = new ut(t2.seconds, t2.nanoseconds);
  return ct.fromTimestamp(e);
}
function Hi(t2, e) {
  const n = (e.baseMutations || []).map((e2) => Hs(t2.ne, e2));
  for (let t3 = 0; t3 < e.mutations.length - 1; ++t3) {
    const n2 = e.mutations[t3];
    if (t3 + 1 < e.mutations.length && void 0 !== e.mutations[t3 + 1].transform) {
      const s2 = e.mutations[t3 + 1];
      n2.updateTransforms = s2.transform.fieldTransforms, e.mutations.splice(t3 + 1, 1), ++t3;
    }
  }
  const s = e.mutations.map((e2) => Hs(t2.ne, e2)), i = ut.fromMillis(e.localWriteTimeMs);
  return new Bi(e.batchId, i, n, s);
}
function Ji(t2) {
  const e = zi(t2.readTime), n = void 0 !== t2.lastLimboFreeSnapshotVersion ? zi(t2.lastLimboFreeSnapshotVersion) : ct.min();
  let s;
  var i;
  return void 0 !== t2.query.documents ? (U(1 === (i = t2.query).documents.length), s = dn(un(Us(i.documents[0])))) : s = function(t3) {
    return dn(Zs(t3));
  }(t2.query), new qi(s, t2.targetId, 0, t2.lastListenSequenceNumber, e, n, Xt.fromBase64String(t2.resumeToken));
}
function Yi(t2, e) {
  const n = Wi(e.snapshotVersion), s = Wi(e.lastLimboFreeSnapshotVersion);
  let i;
  i = Le(e.target) ? Ys(t2.ne, e.target) : Xs(t2.ne, e.target);
  const r = e.resumeToken.toBase64();
  return {
    targetId: e.targetId,
    canonicalId: Fe(e.target),
    readTime: n,
    resumeToken: r,
    lastListenSequenceNumber: e.sequenceNumber,
    lastLimboFreeSnapshotVersion: s,
    query: i
  };
}
function Xi(t2) {
  const e = Zs({
    parent: t2.parent,
    structuredQuery: t2.structuredQuery
  });
  return "LAST" === t2.limitType ? _n(e, e.limit, "L") : e;
}
function Zi(t2, e) {
  return new Ui(e.largestBatchId, Hs(t2.ne, e.overlayMutation));
}
function tr(t2, e) {
  const n = e.path.lastSegment();
  return [t2, hi(e.path.popLast()), n];
}
function er(t2, e, n, s) {
  return {
    indexId: t2,
    uid: e.uid || "",
    sequenceNumber: n,
    readTime: Wi(s.readTime),
    documentKey: hi(s.documentKey.path),
    largestBatchId: s.largestBatchId
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr {
  getBundleMetadata(t2, e) {
    return sr(t2).get(e).next((t3) => {
      if (t3)
        return {
          id: (e2 = t3).bundleId,
          createTime: zi(e2.createTime),
          version: e2.version
        };
      var e2;
    });
  }
  saveBundleMetadata(t2, e) {
    return sr(t2).put({
      bundleId: (n = e).id,
      createTime: Wi(Ms(n.createTime)),
      version: n.version
    });
    var n;
  }
  getNamedQuery(t2, e) {
    return ir(t2).get(e).next((t3) => {
      if (t3)
        return {
          name: (e2 = t3).name,
          query: Xi(e2.bundledQuery),
          readTime: zi(e2.readTime)
        };
      var e2;
    });
  }
  saveNamedQuery(t2, e) {
    return ir(t2).put(function(t3) {
      return {
        name: t3.name,
        readTime: Wi(Ms(t3.readTime)),
        bundledQuery: t3.bundledQuery
      };
    }(e));
  }
}
function sr(t2) {
  return $i(t2, "bundles");
}
function ir(t2) {
  return $i(t2, "namedQueries");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr {
  constructor(t2, e) {
    this.wt = t2, this.userId = e;
  }
  static se(t2, e) {
    const n = e.uid || "";
    return new rr(t2, n);
  }
  getOverlay(t2, e) {
    return or(t2).get(tr(this.userId, e)).next((t3) => t3 ? Zi(this.wt, t3) : null);
  }
  getOverlays(t2, e) {
    const n = fs();
    return Vt.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    const s = [];
    return n.forEach((n2, i) => {
      const r = new Ui(e, i);
      s.push(this.ie(t2, r));
    }), Vt.waitFor(s);
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = /* @__PURE__ */ new Set();
    e.forEach((t3) => s.add(hi(t3.getCollectionPath())));
    const i = [];
    return s.forEach((e2) => {
      const s2 = IDBKeyRange.bound(
        [this.userId, e2, n],
        [this.userId, e2, n + 1],
        false,
        true
      );
      i.push(or(t2).W("collectionPathOverlayIndex", s2));
    }), Vt.waitFor(i);
  }
  getOverlaysForCollection(t2, e, n) {
    const s = fs(), i = hi(e), r = IDBKeyRange.bound(
      [this.userId, i, n],
      [this.userId, i, Number.POSITIVE_INFINITY],
      true
    );
    return or(t2).K("collectionPathOverlayIndex", r).next((t3) => {
      for (const e2 of t3) {
        const t4 = Zi(this.wt, e2);
        s.set(t4.getKey(), t4);
      }
      return s;
    });
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    const i = fs();
    let r;
    const o = IDBKeyRange.bound(
      [this.userId, e, n],
      [this.userId, e, Number.POSITIVE_INFINITY],
      true
    );
    return or(t2).J({
      index: "collectionGroupOverlayIndex",
      range: o
    }, (t3, e2, n2) => {
      const o2 = Zi(this.wt, e2);
      i.size() < s || o2.largestBatchId === r ? (i.set(o2.getKey(), o2), r = o2.largestBatchId) : n2.done();
    }).next(() => i);
  }
  ie(t2, e) {
    return or(t2).put(function(t3, e2, n) {
      const [s, i, r] = tr(e2, n.mutation.key);
      return {
        userId: e2,
        collectionPath: i,
        documentId: r,
        collectionGroup: n.mutation.key.getCollectionGroup(),
        largestBatchId: n.largestBatchId,
        overlayMutation: zs(t3.ne, n.mutation)
      };
    }(this.wt, this.userId, e));
  }
}
function or(t2) {
  return $i(t2, "documentOverlays");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur {
  constructor() {
  }
  re(t2, e) {
    this.oe(t2, e), e.ue();
  }
  oe(t2, e) {
    if ("nullValue" in t2)
      this.ce(e, 5);
    else if ("booleanValue" in t2)
      this.ce(e, 10), e.ae(t2.booleanValue ? 1 : 0);
    else if ("integerValue" in t2)
      this.ce(e, 15), e.ae(ee(t2.integerValue));
    else if ("doubleValue" in t2) {
      const n = ee(t2.doubleValue);
      isNaN(n) ? this.ce(e, 13) : (this.ce(e, 15), ae(n) ? e.ae(0) : e.ae(n));
    } else if ("timestampValue" in t2) {
      const n = t2.timestampValue;
      this.ce(e, 20), "string" == typeof n ? e.he(n) : (e.he(`${n.seconds || ""}`), e.ae(n.nanos || 0));
    } else if ("stringValue" in t2)
      this.le(t2.stringValue, e), this.fe(e);
    else if ("bytesValue" in t2)
      this.ce(e, 30), e.de(ne(t2.bytesValue)), this.fe(e);
    else if ("referenceValue" in t2)
      this._e(t2.referenceValue, e);
    else if ("geoPointValue" in t2) {
      const n = t2.geoPointValue;
      this.ce(e, 45), e.ae(n.latitude || 0), e.ae(n.longitude || 0);
    } else
      "mapValue" in t2 ? ve(t2) ? this.ce(e, Number.MAX_SAFE_INTEGER) : (this.we(t2.mapValue, e), this.fe(e)) : "arrayValue" in t2 ? (this.me(t2.arrayValue, e), this.fe(e)) : L();
  }
  le(t2, e) {
    this.ce(e, 25), this.ge(t2, e);
  }
  ge(t2, e) {
    e.he(t2);
  }
  we(t2, e) {
    const n = t2.fields || {};
    this.ce(e, 55);
    for (const t3 of Object.keys(n))
      this.le(t3, e), this.oe(n[t3], e);
  }
  me(t2, e) {
    const n = t2.values || [];
    this.ce(e, 50);
    for (const t3 of n)
      this.oe(t3, e);
  }
  _e(t2, e) {
    this.ce(e, 37);
    dt.fromName(t2).path.forEach((t3) => {
      this.ce(e, 60), this.ge(t3, e);
    });
  }
  ce(t2, e) {
    t2.ae(e);
  }
  fe(t2) {
    t2.ae(2);
  }
}
ur.ye = new ur();
function cr(t2) {
  if (0 === t2)
    return 8;
  let e = 0;
  return t2 >> 4 == 0 && (e += 4, t2 <<= 4), t2 >> 6 == 0 && (e += 2, t2 <<= 2), t2 >> 7 == 0 && (e += 1), e;
}
function ar(t2) {
  const e = 64 - function(t3) {
    let e2 = 0;
    for (let n = 0; n < 8; ++n) {
      const s = cr(255 & t3[n]);
      if (e2 += s, 8 !== s)
        break;
    }
    return e2;
  }(t2);
  return Math.ceil(e / 8);
}
class hr {
  constructor() {
    this.buffer = new Uint8Array(1024), this.position = 0;
  }
  pe(t2) {
    const e = t2[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; )
      this.Ie(n.value), n = e.next();
    this.Te();
  }
  Ee(t2) {
    const e = t2[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; )
      this.Ae(n.value), n = e.next();
    this.Re();
  }
  be(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Ie(t3);
      else if (t3 < 2048)
        this.Ie(960 | t3 >>> 6), this.Ie(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Ie(480 | t3 >>> 12), this.Ie(128 | 63 & t3 >>> 6), this.Ie(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Ie(240 | t4 >>> 18), this.Ie(128 | 63 & t4 >>> 12), this.Ie(128 | 63 & t4 >>> 6), this.Ie(128 | 63 & t4);
      }
    }
    this.Te();
  }
  Pe(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Ae(t3);
      else if (t3 < 2048)
        this.Ae(960 | t3 >>> 6), this.Ae(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Ae(480 | t3 >>> 12), this.Ae(128 | 63 & t3 >>> 6), this.Ae(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Ae(240 | t4 >>> 18), this.Ae(128 | 63 & t4 >>> 12), this.Ae(128 | 63 & t4 >>> 6), this.Ae(128 | 63 & t4);
      }
    }
    this.Re();
  }
  ve(t2) {
    const e = this.Ve(t2), n = ar(e);
    this.Se(1 + n), this.buffer[this.position++] = 255 & n;
    for (let t3 = e.length - n; t3 < e.length; ++t3)
      this.buffer[this.position++] = 255 & e[t3];
  }
  De(t2) {
    const e = this.Ve(t2), n = ar(e);
    this.Se(1 + n), this.buffer[this.position++] = ~(255 & n);
    for (let t3 = e.length - n; t3 < e.length; ++t3)
      this.buffer[this.position++] = ~(255 & e[t3]);
  }
  Ce() {
    this.xe(255), this.xe(255);
  }
  Ne() {
    this.ke(255), this.ke(255);
  }
  reset() {
    this.position = 0;
  }
  seed(t2) {
    this.Se(t2.length), this.buffer.set(t2, this.position), this.position += t2.length;
  }
  Me() {
    return this.buffer.slice(0, this.position);
  }
  Ve(t2) {
    const e = function(t3) {
      const e2 = new DataView(new ArrayBuffer(8));
      return e2.setFloat64(0, t3, false), new Uint8Array(e2.buffer);
    }(t2), n = 0 != (128 & e[0]);
    e[0] ^= n ? 255 : 128;
    for (let t3 = 1; t3 < e.length; ++t3)
      e[t3] ^= n ? 255 : 0;
    return e;
  }
  Ie(t2) {
    const e = 255 & t2;
    0 === e ? (this.xe(0), this.xe(255)) : 255 === e ? (this.xe(255), this.xe(0)) : this.xe(e);
  }
  Ae(t2) {
    const e = 255 & t2;
    0 === e ? (this.ke(0), this.ke(255)) : 255 === e ? (this.ke(255), this.ke(0)) : this.ke(t2);
  }
  Te() {
    this.xe(0), this.xe(1);
  }
  Re() {
    this.ke(0), this.ke(1);
  }
  xe(t2) {
    this.Se(1), this.buffer[this.position++] = t2;
  }
  ke(t2) {
    this.Se(1), this.buffer[this.position++] = ~t2;
  }
  Se(t2) {
    const e = t2 + this.position;
    if (e <= this.buffer.length)
      return;
    let n = 2 * this.buffer.length;
    n < e && (n = e);
    const s = new Uint8Array(n);
    s.set(this.buffer), this.buffer = s;
  }
}
class lr {
  constructor(t2) {
    this.Oe = t2;
  }
  de(t2) {
    this.Oe.pe(t2);
  }
  he(t2) {
    this.Oe.be(t2);
  }
  ae(t2) {
    this.Oe.ve(t2);
  }
  ue() {
    this.Oe.Ce();
  }
}
class fr {
  constructor(t2) {
    this.Oe = t2;
  }
  de(t2) {
    this.Oe.Ee(t2);
  }
  he(t2) {
    this.Oe.Pe(t2);
  }
  ae(t2) {
    this.Oe.De(t2);
  }
  ue() {
    this.Oe.Ne();
  }
}
class dr {
  constructor() {
    this.Oe = new hr(), this.Fe = new lr(this.Oe), this.$e = new fr(this.Oe);
  }
  seed(t2) {
    this.Oe.seed(t2);
  }
  Be(t2) {
    return 0 === t2 ? this.Fe : this.$e;
  }
  Me() {
    return this.Oe.Me();
  }
  reset() {
    this.Oe.reset();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r {
  constructor(t2, e, n, s) {
    this.indexId = t2, this.documentKey = e, this.arrayValue = n, this.directionalValue = s;
  }
  Le() {
    const t2 = this.directionalValue.length, e = 0 === t2 || 255 === this.directionalValue[t2 - 1] ? t2 + 1 : t2, n = new Uint8Array(e);
    return n.set(this.directionalValue, 0), e !== t2 ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new _r(this.indexId, this.documentKey, this.arrayValue, n);
  }
}
function wr(t2, e) {
  let n = t2.indexId - e.indexId;
  return 0 !== n ? n : (n = mr(t2.arrayValue, e.arrayValue), 0 !== n ? n : (n = mr(t2.directionalValue, e.directionalValue), 0 !== n ? n : dt.comparator(t2.documentKey, e.documentKey)));
}
function mr(t2, e) {
  for (let n = 0; n < t2.length && n < e.length; ++n) {
    const s = t2[n] - e[n];
    if (0 !== s)
      return s;
  }
  return t2.length - e.length;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr {
  constructor(t2) {
    this.collectionId = null != t2.collectionGroup ? t2.collectionGroup : t2.path.lastSegment(), this.Ue = t2.orderBy, this.qe = [];
    for (const e of t2.filters) {
      const t3 = e;
      t3.ht() ? this.Ke = t3 : this.qe.push(t3);
    }
  }
  Ge(t2) {
    const e = wt(t2);
    if (void 0 !== e && !this.Qe(e))
      return false;
    const n = mt(t2);
    let s = 0, i = 0;
    for (; s < n.length && this.Qe(n[s]); ++s)
      ;
    if (s === n.length)
      return true;
    if (void 0 !== this.Ke) {
      const t3 = n[s];
      if (!this.je(this.Ke, t3) || !this.We(this.Ue[i++], t3))
        return false;
      ++s;
    }
    for (; s < n.length; ++s) {
      const t3 = n[s];
      if (i >= this.Ue.length || !this.We(this.Ue[i++], t3))
        return false;
    }
    return true;
  }
  Qe(t2) {
    for (const e of this.qe)
      if (this.je(e, t2))
        return true;
    return false;
  }
  je(t2, e) {
    if (void 0 === t2 || !t2.field.isEqual(e.fieldPath))
      return false;
    const n = "array-contains" === t2.op || "array-contains-any" === t2.op;
    return 2 === e.kind === n;
  }
  We(t2, e) {
    return !!t2.field.isEqual(e.fieldPath) && (0 === e.kind && "asc" === t2.dir || 1 === e.kind && "desc" === t2.dir);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr {
  constructor() {
    this.ze = new pr();
  }
  addToCollectionParentIndex(t2, e) {
    return this.ze.add(e), Vt.resolve();
  }
  getCollectionParents(t2, e) {
    return Vt.resolve(this.ze.getEntries(e));
  }
  addFieldIndex(t2, e) {
    return Vt.resolve();
  }
  deleteFieldIndex(t2, e) {
    return Vt.resolve();
  }
  getDocumentsMatchingTarget(t2, e) {
    return Vt.resolve(null);
  }
  getIndexType(t2, e) {
    return Vt.resolve(0);
  }
  getFieldIndexes(t2, e) {
    return Vt.resolve([]);
  }
  getNextCollectionGroupToUpdate(t2) {
    return Vt.resolve(null);
  }
  getMinOffset(t2, e) {
    return Vt.resolve(At.min());
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return Vt.resolve(At.min());
  }
  updateCollectionGroup(t2, e, n) {
    return Vt.resolve();
  }
  updateIndexEntries(t2, e) {
    return Vt.resolve();
  }
}
class pr {
  constructor() {
    this.index = {};
  }
  add(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e] || new Wt(ht.comparator), i = !s.has(n);
    return this.index[e] = s.add(n), i;
  }
  has(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e];
    return s && s.has(n);
  }
  getEntries(t2) {
    return (this.index[t2] || new Wt(ht.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ir = new Uint8Array(0);
class Tr {
  constructor(t2, e) {
    this.user = t2, this.databaseId = e, this.He = new pr(), this.Je = new os((t3) => Fe(t3), (t3, e2) => Be(t3, e2)), this.uid = t2.uid || "";
  }
  addToCollectionParentIndex(t2, e) {
    if (!this.He.has(e)) {
      const n = e.lastSegment(), s = e.popLast();
      t2.addOnCommittedListener(() => {
        this.He.add(e);
      });
      const i = {
        collectionId: n,
        parent: hi(s)
      };
      return Er(t2).put(i);
    }
    return Vt.resolve();
  }
  getCollectionParents(t2, e) {
    const n = [], s = IDBKeyRange.bound(
      [e, ""],
      [ot(e), ""],
      false,
      true
    );
    return Er(t2).K(s).next((t3) => {
      for (const s2 of t3) {
        if (s2.collectionId !== e)
          break;
        n.push(di(s2.parent));
      }
      return n;
    });
  }
  addFieldIndex(t2, e) {
    const n = Rr(t2), s = function(t3) {
      return {
        indexId: t3.indexId,
        collectionGroup: t3.collectionGroup,
        fields: t3.fields.map((t4) => [t4.fieldPath.canonicalString(), t4.kind])
      };
    }(e);
    delete s.indexId;
    const i = n.add(s);
    if (e.indexState) {
      const n2 = br(t2);
      return i.next((t3) => {
        n2.put(er(t3, this.user, e.indexState.sequenceNumber, e.indexState.offset));
      });
    }
    return i.next();
  }
  deleteFieldIndex(t2, e) {
    const n = Rr(t2), s = br(t2), i = Ar(t2);
    return n.delete(e.indexId).next(() => s.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      false,
      true
    ))).next(() => i.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      false,
      true
    )));
  }
  getDocumentsMatchingTarget(t2, e) {
    const n = Ar(t2);
    let s = true;
    const i = /* @__PURE__ */ new Map();
    return Vt.forEach(this.Ye(e), (e2) => this.Xe(t2, e2).next((t3) => {
      s && (s = !!t3), i.set(e2, t3);
    })).next(() => {
      if (s) {
        let t3 = gs();
        const s2 = [];
        return Vt.forEach(i, (i2, r) => {
          var o;
          O("IndexedDbIndexManager", `Using index ${o = i2, `id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t4) => `${t4.fieldPath}:${t4.kind}`).join(",")}`} to execute ${Fe(e)}`);
          const u = function(t4, e2) {
            const n2 = wt(e2);
            if (void 0 === n2)
              return null;
            for (const e3 of Ue(t4, n2.fieldPath))
              switch (e3.op) {
                case "array-contains-any":
                  return e3.value.arrayValue.values || [];
                case "array-contains":
                  return [e3.value];
              }
            return null;
          }(r, i2), c = function(t4, e2) {
            const n2 = /* @__PURE__ */ new Map();
            for (const s3 of mt(e2))
              for (const e3 of Ue(t4, s3.fieldPath))
                switch (e3.op) {
                  case "==":
                  case "in":
                    n2.set(s3.fieldPath.canonicalString(), e3.value);
                    break;
                  case "not-in":
                  case "!=":
                    return n2.set(s3.fieldPath.canonicalString(), e3.value), Array.from(n2.values());
                }
            return null;
          }(r, i2), a = function(t4, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of mt(e2)) {
              const e3 = 0 === i3.kind ? qe(t4, i3.fieldPath, t4.startAt) : Ke(t4, i3.fieldPath, t4.startAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new Ze(n2, s3);
          }(r, i2), h = function(t4, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of mt(e2)) {
              const e3 = 0 === i3.kind ? Ke(t4, i3.fieldPath, t4.endAt) : qe(t4, i3.fieldPath, t4.endAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new Ze(n2, s3);
          }(r, i2), l2 = this.Ze(i2, r, a), f = this.Ze(i2, r, h), d = this.tn(i2, r, c), _ = this.en(i2.indexId, u, l2, a.inclusive, f, h.inclusive, d);
          return Vt.forEach(_, (i3) => n.j(i3, e.limit).next((e2) => {
            e2.forEach((e3) => {
              const n2 = dt.fromSegments(e3.documentKey);
              t3.has(n2) || (t3 = t3.add(n2), s2.push(n2));
            });
          }));
        }).next(() => s2);
      }
      return Vt.resolve(null);
    });
  }
  Ye(t2) {
    let e = this.Je.get(t2);
    return e || (e = [t2], this.Je.set(t2, e), e);
  }
  en(t2, e, n, s, i, r, o) {
    const u = (null != e ? e.length : 1) * Math.max(n.length, i.length), c = u / (null != e ? e.length : 1), a = [];
    for (let h = 0; h < u; ++h) {
      const u2 = e ? this.nn(e[h / c]) : Ir, l2 = this.sn(t2, u2, n[h % c], s), f = this.rn(t2, u2, i[h % c], r), d = o.map((e2) => this.sn(
        t2,
        u2,
        e2,
        true
      ));
      a.push(...this.createRange(l2, f, d));
    }
    return a;
  }
  sn(t2, e, n, s) {
    const i = new _r(t2, dt.empty(), e, n);
    return s ? i : i.Le();
  }
  rn(t2, e, n, s) {
    const i = new _r(t2, dt.empty(), e, n);
    return s ? i.Le() : i;
  }
  Xe(t2, e) {
    const n = new gr(e), s = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment();
    return this.getFieldIndexes(t2, s).next((t3) => {
      let e2 = null;
      for (const s2 of t3) {
        n.Ge(s2) && (!e2 || s2.fields.length > e2.fields.length) && (e2 = s2);
      }
      return e2;
    });
  }
  getIndexType(t2, e) {
    let n = 2;
    return Vt.forEach(this.Ye(e), (e2) => this.Xe(t2, e2).next((t3) => {
      t3 ? 0 !== n && t3.fields.length < function(t4) {
        let e3 = new Wt(ft.comparator), n2 = false;
        for (const s of t4.filters) {
          const t5 = s;
          t5.field.isKeyField() || ("array-contains" === t5.op || "array-contains-any" === t5.op ? n2 = true : e3 = e3.add(t5.field));
        }
        for (const n3 of t4.orderBy)
          n3.field.isKeyField() || (e3 = e3.add(n3.field));
        return e3.size + (n2 ? 1 : 0);
      }(e2) && (n = 1) : n = 0;
    })).next(() => n);
  }
  on(t2, e) {
    const n = new dr();
    for (const s of mt(t2)) {
      const t3 = e.data.field(s.fieldPath);
      if (null == t3)
        return null;
      const i = n.Be(s.kind);
      ur.ye.re(t3, i);
    }
    return n.Me();
  }
  nn(t2) {
    const e = new dr();
    return ur.ye.re(t2, e.Be(0)), e.Me();
  }
  un(t2, e) {
    const n = new dr();
    return ur.ye.re(Ie(this.databaseId, e), n.Be(function(t3) {
      const e2 = mt(t3);
      return 0 === e2.length ? 0 : e2[e2.length - 1].kind;
    }(t2))), n.Me();
  }
  tn(t2, e, n) {
    if (null === n)
      return [];
    let s = [];
    s.push(new dr());
    let i = 0;
    for (const r of mt(t2)) {
      const t3 = n[i++];
      for (const n2 of s)
        if (this.cn(e, r.fieldPath) && Ee(t3))
          s = this.an(s, r, t3);
        else {
          const e2 = n2.Be(r.kind);
          ur.ye.re(t3, e2);
        }
    }
    return this.hn(s);
  }
  Ze(t2, e, n) {
    return this.tn(t2, e, n.position);
  }
  hn(t2) {
    const e = [];
    for (let n = 0; n < t2.length; ++n)
      e[n] = t2[n].Me();
    return e;
  }
  an(t2, e, n) {
    const s = [...t2], i = [];
    for (const t3 of n.arrayValue.values || [])
      for (const n2 of s) {
        const s2 = new dr();
        s2.seed(n2.Me()), ur.ye.re(t3, s2.Be(e.kind)), i.push(s2);
      }
    return i;
  }
  cn(t2, e) {
    return !!t2.filters.find((t3) => t3 instanceof Ge && t3.field.isEqual(e) && ("in" === t3.op || "not-in" === t3.op));
  }
  getFieldIndexes(t2, e) {
    const n = Rr(t2), s = br(t2);
    return (e ? n.K("collectionGroupIndex", IDBKeyRange.bound(e, e)) : n.K()).next((t3) => {
      const e2 = [];
      return Vt.forEach(t3, (t4) => s.get([t4.indexId, this.uid]).next((n2) => {
        e2.push(function(t5, e3) {
          const n3 = e3 ? new It(e3.sequenceNumber, new At(zi(e3.readTime), new dt(di(e3.documentKey)), e3.largestBatchId)) : It.empty(), s2 = t5.fields.map(([t6, e4]) => new yt(ft.fromServerFormat(t6), e4));
          return new _t(t5.indexId, t5.collectionGroup, s2, n3);
        }(t4, n2));
      })).next(() => e2);
    });
  }
  getNextCollectionGroupToUpdate(t2) {
    return this.getFieldIndexes(t2).next((t3) => 0 === t3.length ? null : (t3.sort((t4, e) => {
      const n = t4.indexState.sequenceNumber - e.indexState.sequenceNumber;
      return 0 !== n ? n : it(t4.collectionGroup, e.collectionGroup);
    }), t3[0].collectionGroup));
  }
  updateCollectionGroup(t2, e, n) {
    const s = Rr(t2), i = br(t2);
    return this.ln(t2).next((t3) => s.K("collectionGroupIndex", IDBKeyRange.bound(e, e)).next((e2) => Vt.forEach(e2, (e3) => i.put(er(e3.indexId, this.user, t3, n)))));
  }
  updateIndexEntries(t2, e) {
    const n = /* @__PURE__ */ new Map();
    return Vt.forEach(e, (e2, s) => {
      const i = n.get(e2.collectionGroup);
      return (i ? Vt.resolve(i) : this.getFieldIndexes(t2, e2.collectionGroup)).next((i2) => (n.set(e2.collectionGroup, i2), Vt.forEach(i2, (n2) => this.fn(t2, e2, n2).next((e3) => {
        const i3 = this.dn(s, n2);
        return e3.isEqual(i3) ? Vt.resolve() : this._n(t2, s, n2, e3, i3);
      }))));
    });
  }
  wn(t2, e, n, s) {
    return Ar(t2).put({
      indexId: s.indexId,
      uid: this.uid,
      arrayValue: s.arrayValue,
      directionalValue: s.directionalValue,
      orderedDocumentKey: this.un(n, e.key),
      documentKey: e.key.path.toArray()
    });
  }
  mn(t2, e, n, s) {
    return Ar(t2).delete([s.indexId, this.uid, s.arrayValue, s.directionalValue, this.un(n, e.key), e.key.path.toArray()]);
  }
  fn(t2, e, n) {
    const s = Ar(t2);
    let i = new Wt(wr);
    return s.J({
      index: "documentKeyIndex",
      range: IDBKeyRange.only([n.indexId, this.uid, this.un(n, e)])
    }, (t3, s2) => {
      i = i.add(new _r(n.indexId, e, s2.arrayValue, s2.directionalValue));
    }).next(() => i);
  }
  dn(t2, e) {
    let n = new Wt(wr);
    const s = this.on(e, t2);
    if (null == s)
      return n;
    const i = wt(e);
    if (null != i) {
      const r = t2.data.field(i.fieldPath);
      if (Ee(r))
        for (const i2 of r.arrayValue.values || [])
          n = n.add(new _r(e.indexId, t2.key, this.nn(i2), s));
    } else
      n = n.add(new _r(e.indexId, t2.key, Ir, s));
    return n;
  }
  _n(t2, e, n, s, i) {
    O("IndexedDbIndexManager", "Updating index entries for document '%s'", e.key);
    const r = [];
    return function(t3, e2, n2, s2, i2) {
      const r2 = t3.getIterator(), o = e2.getIterator();
      let u = Ht(r2), c = Ht(o);
      for (; u || c; ) {
        let t4 = false, e3 = false;
        if (u && c) {
          const s3 = n2(u, c);
          s3 < 0 ? e3 = true : s3 > 0 && (t4 = true);
        } else
          null != u ? e3 = true : t4 = true;
        t4 ? (s2(c), c = Ht(o)) : e3 ? (i2(u), u = Ht(r2)) : (u = Ht(r2), c = Ht(o));
      }
    }(s, i, wr, (s2) => {
      r.push(this.wn(t2, e, n, s2));
    }, (s2) => {
      r.push(this.mn(t2, e, n, s2));
    }), Vt.waitFor(r);
  }
  ln(t2) {
    let e = 1;
    return br(t2).J({
      index: "sequenceNumberIndex",
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (t3, n, s) => {
      s.done(), e = n.sequenceNumber + 1;
    }).next(() => e);
  }
  createRange(t2, e, n) {
    n = n.sort((t3, e2) => wr(t3, e2)).filter((t3, e2, n2) => !e2 || 0 !== wr(t3, n2[e2 - 1]));
    const s = [];
    s.push(t2);
    for (const i2 of n) {
      const n2 = wr(i2, t2), r = wr(i2, e);
      if (0 === n2)
        s[0] = t2.Le();
      else if (n2 > 0 && r < 0)
        s.push(i2), s.push(i2.Le());
      else if (r > 0)
        break;
    }
    s.push(e);
    const i = [];
    for (let t3 = 0; t3 < s.length; t3 += 2)
      i.push(IDBKeyRange.bound([s[t3].indexId, this.uid, s[t3].arrayValue, s[t3].directionalValue, Ir, []], [s[t3 + 1].indexId, this.uid, s[t3 + 1].arrayValue, s[t3 + 1].directionalValue, Ir, []]));
    return i;
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return this.getFieldIndexes(t2, e).next(Pr);
  }
  getMinOffset(t2, e) {
    return Vt.mapArray(this.Ye(e), (e2) => this.Xe(t2, e2).next((t3) => t3 || L())).next(Pr);
  }
}
function Er(t2) {
  return $i(t2, "collectionParents");
}
function Ar(t2) {
  return $i(t2, "indexEntries");
}
function Rr(t2) {
  return $i(t2, "indexConfiguration");
}
function br(t2) {
  return $i(t2, "indexState");
}
function Pr(t2) {
  U(0 !== t2.length);
  let e = t2[0].indexState.offset, n = e.largestBatchId;
  for (let s = 1; s < t2.length; s++) {
    const i = t2[s].indexState.offset;
    Rt(i, e) < 0 && (e = i), n < i.largestBatchId && (n = i.largestBatchId);
  }
  return new At(e.readTime, e.documentKey, n);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vr = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
class Vr {
  constructor(t2, e, n) {
    this.cacheSizeCollectionThreshold = t2, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
  }
  static withCacheSize(t2) {
    return new Vr(t2, Vr.DEFAULT_COLLECTION_PERCENTILE, Vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sr(t2, e, n) {
  const s = t2.store("mutations"), i = t2.store("documentMutations"), r = [], o = IDBKeyRange.only(n.batchId);
  let u = 0;
  const c = s.J({
    range: o
  }, (t3, e2, n2) => (u++, n2.delete()));
  r.push(c.next(() => {
    U(1 === u);
  }));
  const a = [];
  for (const t3 of n.mutations) {
    const s2 = mi(e, t3.key.path, n.batchId);
    r.push(i.delete(s2)), a.push(t3.key);
  }
  return Vt.waitFor(r).next(() => a);
}
function Dr(t2) {
  if (!t2)
    return 0;
  let e;
  if (t2.document)
    e = t2.document;
  else if (t2.unknownDocument)
    e = t2.unknownDocument;
  else {
    if (!t2.noDocument)
      throw L();
    e = t2.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vr.DEFAULT_COLLECTION_PERCENTILE = 10, Vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Vr.DEFAULT = new Vr(41943040, Vr.DEFAULT_COLLECTION_PERCENTILE, Vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Vr.DISABLED = new Vr(-1, 0, 0);
class Cr {
  constructor(t2, e, n, s) {
    this.userId = t2, this.wt = e, this.indexManager = n, this.referenceDelegate = s, this.gn = {};
  }
  static se(t2, e, n, s) {
    U("" !== t2.uid);
    const i = t2.isAuthenticated() ? t2.uid : "";
    return new Cr(i, e, n, s);
  }
  checkEmpty(t2) {
    let e = true;
    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Nr(t2).J({
      index: "userMutationsIndex",
      range: n
    }, (t3, n2, s) => {
      e = false, s.done();
    }).next(() => e);
  }
  addMutationBatch(t2, e, n, s) {
    const i = kr(t2), r = Nr(t2);
    return r.add({}).next((o) => {
      U("number" == typeof o);
      const u = new Bi(o, e, n, s), c = function(t3, e2, n2) {
        const s2 = n2.baseMutations.map((e3) => zs(t3.ne, e3)), i2 = n2.mutations.map((e3) => zs(t3.ne, e3));
        return {
          userId: e2,
          batchId: n2.batchId,
          localWriteTimeMs: n2.localWriteTime.toMillis(),
          baseMutations: s2,
          mutations: i2
        };
      }(this.wt, this.userId, u), a = [];
      let h = new Wt((t3, e2) => it(t3.canonicalString(), e2.canonicalString()));
      for (const t3 of s) {
        const e2 = mi(this.userId, t3.key.path, o);
        h = h.add(t3.key.path.popLast()), a.push(r.put(c)), a.push(i.put(e2, gi));
      }
      return h.forEach((e2) => {
        a.push(this.indexManager.addToCollectionParentIndex(t2, e2));
      }), t2.addOnCommittedListener(() => {
        this.gn[o] = u.keys();
      }), Vt.waitFor(a).next(() => u);
    });
  }
  lookupMutationBatch(t2, e) {
    return Nr(t2).get(e).next((t3) => t3 ? (U(t3.userId === this.userId), Hi(this.wt, t3)) : null);
  }
  yn(t2, e) {
    return this.gn[e] ? Vt.resolve(this.gn[e]) : this.lookupMutationBatch(t2, e).next((t3) => {
      if (t3) {
        const n = t3.keys();
        return this.gn[e] = n, n;
      }
      return null;
    });
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = IDBKeyRange.lowerBound([this.userId, n]);
    let i = null;
    return Nr(t2).J({
      index: "userMutationsIndex",
      range: s
    }, (t3, e2, s2) => {
      e2.userId === this.userId && (U(e2.batchId >= n), i = Hi(this.wt, e2)), s2.done();
    }).next(() => i);
  }
  getHighestUnacknowledgedBatchId(t2) {
    const e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n = -1;
    return Nr(t2).J({
      index: "userMutationsIndex",
      range: e,
      reverse: true
    }, (t3, e2, s) => {
      n = e2.batchId, s.done();
    }).next(() => n);
  }
  getAllMutationBatches(t2) {
    const e = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Nr(t2).K("userMutationsIndex", e).next((t3) => t3.map((t4) => Hi(this.wt, t4)));
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = wi(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
    return kr(t2).J({
      range: s
    }, (n2, s2, r) => {
      const [o, u, c] = n2, a = di(u);
      if (o === this.userId && e.path.isEqual(a))
        return Nr(t2).get(c).next((t3) => {
          if (!t3)
            throw L();
          U(t3.userId === this.userId), i.push(Hi(this.wt, t3));
        });
      r.done();
    }).next(() => i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new Wt(it);
    const s = [];
    return e.forEach((e2) => {
      const i = wi(this.userId, e2.path), r = IDBKeyRange.lowerBound(i), o = kr(t2).J({
        range: r
      }, (t3, s2, i2) => {
        const [r2, o2, u] = t3, c = di(o2);
        r2 === this.userId && e2.path.isEqual(c) ? n = n.add(u) : i2.done();
      });
      s.push(o);
    }), Vt.waitFor(s).next(() => this.pn(t2, n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1, i = wi(this.userId, n), r = IDBKeyRange.lowerBound(i);
    let o = new Wt(it);
    return kr(t2).J({
      range: r
    }, (t3, e2, i2) => {
      const [r2, u, c] = t3, a = di(u);
      r2 === this.userId && n.isPrefixOf(a) ? a.length === s && (o = o.add(c)) : i2.done();
    }).next(() => this.pn(t2, o));
  }
  pn(t2, e) {
    const n = [], s = [];
    return e.forEach((e2) => {
      s.push(Nr(t2).get(e2).next((t3) => {
        if (null === t3)
          throw L();
        U(t3.userId === this.userId), n.push(Hi(this.wt, t3));
      }));
    }), Vt.waitFor(s).next(() => n);
  }
  removeMutationBatch(t2, e) {
    return Sr(t2.ee, this.userId, e).next((n) => (t2.addOnCommittedListener(() => {
      this.In(e.batchId);
    }), Vt.forEach(n, (e2) => this.referenceDelegate.markPotentiallyOrphaned(t2, e2))));
  }
  In(t2) {
    delete this.gn[t2];
  }
  performConsistencyCheck(t2) {
    return this.checkEmpty(t2).next((e) => {
      if (!e)
        return Vt.resolve();
      const n = IDBKeyRange.lowerBound([this.userId]);
      const s = [];
      return kr(t2).J({
        range: n
      }, (t3, e2, n2) => {
        if (t3[0] === this.userId) {
          const e3 = di(t3[1]);
          s.push(e3);
        } else
          n2.done();
      }).next(() => {
        U(0 === s.length);
      });
    });
  }
  containsKey(t2, e) {
    return xr(t2, this.userId, e);
  }
  Tn(t2) {
    return Mr(t2).get(this.userId).next((t3) => t3 || {
      userId: this.userId,
      lastAcknowledgedBatchId: -1,
      lastStreamToken: ""
    });
  }
}
function xr(t2, e, n) {
  const s = wi(e, n.path), i = s[1], r = IDBKeyRange.lowerBound(s);
  let o = false;
  return kr(t2).J({
    range: r,
    H: true
  }, (t3, n2, s2) => {
    const [r2, u, c] = t3;
    r2 === e && u === i && (o = true), s2.done();
  }).next(() => o);
}
function Nr(t2) {
  return $i(t2, "mutations");
}
function kr(t2) {
  return $i(t2, "documentMutations");
}
function Mr(t2) {
  return $i(t2, "mutationQueues");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or {
  constructor(t2) {
    this.En = t2;
  }
  next() {
    return this.En += 2, this.En;
  }
  static An() {
    return new Or(0);
  }
  static Rn() {
    return new Or(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr {
  constructor(t2, e) {
    this.referenceDelegate = t2, this.wt = e;
  }
  allocateTargetId(t2) {
    return this.bn(t2).next((e) => {
      const n = new Or(e.highestTargetId);
      return e.highestTargetId = n.next(), this.Pn(t2, e).next(() => e.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(t2) {
    return this.bn(t2).next((t3) => ct.fromTimestamp(new ut(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(t2) {
    return this.bn(t2).next((t3) => t3.highestListenSequenceNumber);
  }
  setTargetsMetadata(t2, e, n) {
    return this.bn(t2).next((s) => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.toTimestamp()), e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Pn(t2, s)));
  }
  addTargetData(t2, e) {
    return this.vn(t2, e).next(() => this.bn(t2).next((n) => (n.targetCount += 1, this.Vn(e, n), this.Pn(t2, n))));
  }
  updateTargetData(t2, e) {
    return this.vn(t2, e);
  }
  removeTargetData(t2, e) {
    return this.removeMatchingKeysForTargetId(t2, e.targetId).next(() => $r(t2).delete(e.targetId)).next(() => this.bn(t2)).next((e2) => (U(e2.targetCount > 0), e2.targetCount -= 1, this.Pn(t2, e2)));
  }
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return $r(t2).J((r, o) => {
      const u = Ji(o);
      u.sequenceNumber <= e && null === n.get(u.targetId) && (s++, i.push(this.removeTargetData(t2, u)));
    }).next(() => Vt.waitFor(i)).next(() => s);
  }
  forEachTarget(t2, e) {
    return $r(t2).J((t3, n) => {
      const s = Ji(n);
      e(s);
    });
  }
  bn(t2) {
    return Br(t2).get("targetGlobalKey").next((t3) => (U(null !== t3), t3));
  }
  Pn(t2, e) {
    return Br(t2).put("targetGlobalKey", e);
  }
  vn(t2, e) {
    return $r(t2).put(Yi(this.wt, e));
  }
  Vn(t2, e) {
    let n = false;
    return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n = true), n;
  }
  getTargetCount(t2) {
    return this.bn(t2).next((t3) => t3.targetCount);
  }
  getTargetData(t2, e) {
    const n = Fe(e), s = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
    let i = null;
    return $r(t2).J({
      range: s,
      index: "queryTargetsIndex"
    }, (t3, n2, s2) => {
      const r = Ji(n2);
      Be(e, r.target) && (i = r, s2.done());
    }).next(() => i);
  }
  addMatchingKeys(t2, e, n) {
    const s = [], i = Lr(t2);
    return e.forEach((e2) => {
      const r = hi(e2.path);
      s.push(i.put({
        targetId: n,
        path: r
      })), s.push(this.referenceDelegate.addReference(t2, n, e2));
    }), Vt.waitFor(s);
  }
  removeMatchingKeys(t2, e, n) {
    const s = Lr(t2);
    return Vt.forEach(e, (e2) => {
      const i = hi(e2.path);
      return Vt.waitFor([s.delete([n, i]), this.referenceDelegate.removeReference(t2, n, e2)]);
    });
  }
  removeMatchingKeysForTargetId(t2, e) {
    const n = Lr(t2), s = IDBKeyRange.bound(
      [e],
      [e + 1],
      false,
      true
    );
    return n.delete(s);
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = IDBKeyRange.bound(
      [e],
      [e + 1],
      false,
      true
    ), s = Lr(t2);
    let i = gs();
    return s.J({
      range: n,
      H: true
    }, (t3, e2, n2) => {
      const s2 = di(t3[1]), r = new dt(s2);
      i = i.add(r);
    }).next(() => i);
  }
  containsKey(t2, e) {
    const n = hi(e.path), s = IDBKeyRange.bound(
      [n],
      [ot(n)],
      false,
      true
    );
    let i = 0;
    return Lr(t2).J({
      index: "documentTargetsIndex",
      H: true,
      range: s
    }, ([t3, e2], n2, s2) => {
      0 !== t3 && (i++, s2.done());
    }).next(() => i > 0);
  }
  te(t2, e) {
    return $r(t2).get(e).next((t3) => t3 ? Ji(t3) : null);
  }
}
function $r(t2) {
  return $i(t2, "targets");
}
function Br(t2) {
  return $i(t2, "targetGlobal");
}
function Lr(t2) {
  return $i(t2, "targetDocuments");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur([t2, e], [n, s]) {
  const i = it(t2, n);
  return 0 === i ? it(e, s) : i;
}
class qr {
  constructor(t2) {
    this.Sn = t2, this.buffer = new Wt(Ur), this.Dn = 0;
  }
  Cn() {
    return ++this.Dn;
  }
  xn(t2) {
    const e = [t2, this.Cn()];
    if (this.buffer.size < this.Sn)
      this.buffer = this.buffer.add(e);
    else {
      const t3 = this.buffer.last();
      Ur(e, t3) < 0 && (this.buffer = this.buffer.delete(t3).add(e));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class Kr {
  constructor(t2, e, n) {
    this.garbageCollector = t2, this.asyncQueue = e, this.localStore = n, this.Nn = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.kn(6e4);
  }
  stop() {
    this.Nn && (this.Nn.cancel(), this.Nn = null);
  }
  get started() {
    return null !== this.Nn;
  }
  kn(t2) {
    O("LruGarbageCollector", `Garbage collection scheduled in ${t2}ms`), this.Nn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t2, async () => {
      this.Nn = null;
      try {
        await this.localStore.collectGarbage(this.garbageCollector);
      } catch (t3) {
        Nt(t3) ? O("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t3) : await vt(t3);
      }
      await this.kn(3e5);
    });
  }
}
class Gr {
  constructor(t2, e) {
    this.Mn = t2, this.params = e;
  }
  calculateTargetCount(t2, e) {
    return this.Mn.On(t2).next((t3) => Math.floor(e / 100 * t3));
  }
  nthSequenceNumber(t2, e) {
    if (0 === e)
      return Vt.resolve(Lt.ot);
    const n = new qr(e);
    return this.Mn.forEachTarget(t2, (t3) => n.xn(t3.sequenceNumber)).next(() => this.Mn.Fn(t2, (t3) => n.xn(t3))).next(() => n.maxValue);
  }
  removeTargets(t2, e, n) {
    return this.Mn.removeTargets(t2, e, n);
  }
  removeOrphanedDocuments(t2, e) {
    return this.Mn.removeOrphanedDocuments(t2, e);
  }
  collect(t2, e) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (O("LruGarbageCollector", "Garbage collection skipped; disabled"), Vt.resolve(vr)) : this.getCacheSize(t2).next((n) => n < this.params.cacheSizeCollectionThreshold ? (O("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), vr) : this.$n(t2, e));
  }
  getCacheSize(t2) {
    return this.Mn.getCacheSize(t2);
  }
  $n(t2, e) {
    let n, s, i, r, o, c, a;
    const h = Date.now();
    return this.calculateTargetCount(t2, this.params.percentileToCollect).next((e2) => (e2 > this.params.maximumSequenceNumbersToCollect ? (O("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e2}`), s = this.params.maximumSequenceNumbersToCollect) : s = e2, r = Date.now(), this.nthSequenceNumber(t2, s))).next((s2) => (n = s2, o = Date.now(), this.removeTargets(t2, n, e))).next((e2) => (i = e2, c = Date.now(), this.removeOrphanedDocuments(t2, n))).next((t3) => {
      if (a = Date.now(), k() <= LogLevel.DEBUG) {
        O("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${r - h}ms
	Determined least recently used ${s} in ` + (o - r) + `ms
	Removed ${i} targets in ` + (c - o) + `ms
	Removed ${t3} documents in ` + (a - c) + `ms
Total Duration: ${a - h}ms`);
      }
      return Vt.resolve({
        didRun: true,
        sequenceNumbersCollected: s,
        targetsRemoved: i,
        documentsRemoved: t3
      });
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr {
  constructor(t2, e) {
    this.db = t2, this.garbageCollector = function(t3, e2) {
      return new Gr(t3, e2);
    }(this, e);
  }
  On(t2) {
    const e = this.Bn(t2);
    return this.db.getTargetCache().getTargetCount(t2).next((t3) => e.next((e2) => t3 + e2));
  }
  Bn(t2) {
    let e = 0;
    return this.Fn(t2, (t3) => {
      e++;
    }).next(() => e);
  }
  forEachTarget(t2, e) {
    return this.db.getTargetCache().forEachTarget(t2, e);
  }
  Fn(t2, e) {
    return this.Ln(t2, (t3, n) => e(n));
  }
  addReference(t2, e, n) {
    return jr(t2, n);
  }
  removeReference(t2, e, n) {
    return jr(t2, n);
  }
  removeTargets(t2, e, n) {
    return this.db.getTargetCache().removeTargets(t2, e, n);
  }
  markPotentiallyOrphaned(t2, e) {
    return jr(t2, e);
  }
  Un(t2, e) {
    return function(t3, e2) {
      let n = false;
      return Mr(t3).Y((s) => xr(t3, s, e2).next((t4) => (t4 && (n = true), Vt.resolve(!t4)))).next(() => n);
    }(t2, e);
  }
  removeOrphanedDocuments(t2, e) {
    const n = this.db.getRemoteDocumentCache().newChangeBuffer(), s = [];
    let i = 0;
    return this.Ln(t2, (r, o) => {
      if (o <= e) {
        const e2 = this.Un(t2, r).next((e3) => {
          if (!e3)
            return i++, n.getEntry(t2, r).next(() => (n.removeEntry(r, ct.min()), Lr(t2).delete([0, hi(r.path)])));
        });
        s.push(e2);
      }
    }).next(() => Vt.waitFor(s)).next(() => n.apply(t2)).next(() => i);
  }
  removeTarget(t2, e) {
    const n = e.withSequenceNumber(t2.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t2, n);
  }
  updateLimboDocument(t2, e) {
    return jr(t2, e);
  }
  Ln(t2, e) {
    const n = Lr(t2);
    let s, i = Lt.ot;
    return n.J({
      index: "documentTargetsIndex"
    }, ([t3, n2], { path: r, sequenceNumber: o }) => {
      0 === t3 ? (i !== Lt.ot && e(new dt(di(s)), i), i = o, s = r) : i = Lt.ot;
    }).next(() => {
      i !== Lt.ot && e(new dt(di(s)), i);
    });
  }
  getCacheSize(t2) {
    return this.db.getRemoteDocumentCache().getSize(t2);
  }
}
function jr(t2, e) {
  return Lr(t2).put(
    function(t3, e2) {
      return {
        targetId: 0,
        path: hi(t3.path),
        sequenceNumber: e2
      };
    }(e, t2.currentSequenceNumber)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr {
  constructor() {
    this.changes = new os((t2) => t2.toString(), (t2, e) => t2.isEqual(e)), this.changesApplied = false;
  }
  addEntry(t2) {
    this.assertNotApplied(), this.changes.set(t2.key, t2);
  }
  removeEntry(t2, e) {
    this.assertNotApplied(), this.changes.set(t2, ke.newInvalidDocument(t2).setReadTime(e));
  }
  getEntry(t2, e) {
    this.assertNotApplied();
    const n = this.changes.get(e);
    return void 0 !== n ? Vt.resolve(n) : this.getFromCache(t2, e);
  }
  getEntries(t2, e) {
    return this.getAllFromCache(t2, e);
  }
  apply(t2) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t2);
  }
  assertNotApplied() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr {
  constructor(t2) {
    this.wt = t2;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e, n) {
    return Xr(t2).put(n);
  }
  removeEntry(t2, e, n) {
    return Xr(t2).delete(
      function(t3, e2) {
        const n2 = t3.path.toArray();
        return [
          n2.slice(0, n2.length - 2),
          n2[n2.length - 2],
          ji(e2),
          n2[n2.length - 1]
        ];
      }(e, n)
    );
  }
  updateMetadata(t2, e) {
    return this.getMetadata(t2).next((n) => (n.byteSize += e, this.qn(t2, n)));
  }
  getEntry(t2, e) {
    let n = ke.newInvalidDocument(e);
    return Xr(t2).J({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(Zr(e))
    }, (t3, s) => {
      n = this.Kn(e, s);
    }).next(() => n);
  }
  Gn(t2, e) {
    let n = {
      size: 0,
      document: ke.newInvalidDocument(e)
    };
    return Xr(t2).J({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(Zr(e))
    }, (t3, s) => {
      n = {
        document: this.Kn(e, s),
        size: Dr(s)
      };
    }).next(() => n);
  }
  getEntries(t2, e) {
    let n = cs();
    return this.Qn(t2, e, (t3, e2) => {
      const s = this.Kn(t3, e2);
      n = n.insert(t3, s);
    }).next(() => n);
  }
  jn(t2, e) {
    let n = cs(), s = new Gt(dt.comparator);
    return this.Qn(t2, e, (t3, e2) => {
      const i = this.Kn(t3, e2);
      n = n.insert(t3, i), s = s.insert(t3, Dr(e2));
    }).next(() => ({
      documents: n,
      Wn: s
    }));
  }
  Qn(t2, e, n) {
    if (e.isEmpty())
      return Vt.resolve();
    let s = new Wt(eo);
    e.forEach((t3) => s = s.add(t3));
    const i = IDBKeyRange.bound(Zr(s.first()), Zr(s.last())), r = s.getIterator();
    let o = r.getNext();
    return Xr(t2).J({
      index: "documentKeyIndex",
      range: i
    }, (t3, e2, s2) => {
      const i2 = dt.fromSegments([...e2.prefixPath, e2.collectionGroup, e2.documentId]);
      for (; o && eo(o, i2) < 0; )
        n(o, null), o = r.getNext();
      o && o.isEqual(i2) && (n(o, e2), o = r.hasNext() ? r.getNext() : null), o ? s2.q(Zr(o)) : s2.done();
    }).next(() => {
      for (; o; )
        n(o, null), o = r.hasNext() ? r.getNext() : null;
    });
  }
  getAllFromCollection(t2, e, n) {
    const s = [e.popLast().toArray(), e.lastSegment(), ji(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()], i = [e.popLast().toArray(), e.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return Xr(t2).K(IDBKeyRange.bound(s, i, true)).next((t3) => {
      let e2 = cs();
      for (const n2 of t3) {
        const t4 = this.Kn(dt.fromSegments(n2.prefixPath.concat(n2.collectionGroup, n2.documentId)), n2);
        e2 = e2.insert(t4.key, t4);
      }
      return e2;
    });
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    let i = cs();
    const r = to(e, n), o = to(e, At.max());
    return Xr(t2).J({
      index: "collectionGroupIndex",
      range: IDBKeyRange.bound(r, o, true)
    }, (t3, e2, n2) => {
      const r2 = this.Kn(dt.fromSegments(e2.prefixPath.concat(e2.collectionGroup, e2.documentId)), e2);
      i = i.insert(r2.key, r2), i.size === s && n2.done();
    }).next(() => i);
  }
  newChangeBuffer(t2) {
    return new Jr(this, !!t2 && t2.trackRemovals);
  }
  getSize(t2) {
    return this.getMetadata(t2).next((t3) => t3.byteSize);
  }
  getMetadata(t2) {
    return Yr(t2).get("remoteDocumentGlobalKey").next((t3) => (U(!!t3), t3));
  }
  qn(t2, e) {
    return Yr(t2).put("remoteDocumentGlobalKey", e);
  }
  Kn(t2, e) {
    if (e) {
      const t3 = Gi(this.wt, e);
      if (!(t3.isNoDocument() && t3.version.isEqual(ct.min())))
        return t3;
    }
    return ke.newInvalidDocument(t2);
  }
}
function Hr(t2) {
  return new zr(t2);
}
class Jr extends Wr {
  constructor(t2, e) {
    super(), this.zn = t2, this.trackRemovals = e, this.Hn = new os((t3) => t3.toString(), (t3, e2) => t3.isEqual(e2));
  }
  applyChanges(t2) {
    const e = [];
    let n = 0, s = new Wt((t3, e2) => it(t3.canonicalString(), e2.canonicalString()));
    return this.changes.forEach((i, r) => {
      const o = this.Hn.get(i);
      if (e.push(this.zn.removeEntry(t2, i, o.readTime)), r.isValidDocument()) {
        const u = Qi(this.zn.wt, r);
        s = s.add(i.path.popLast());
        const c = Dr(u);
        n += c - o.size, e.push(this.zn.addEntry(t2, i, u));
      } else if (n -= o.size, this.trackRemovals) {
        const n2 = Qi(this.zn.wt, r.convertToNoDocument(ct.min()));
        e.push(this.zn.addEntry(t2, i, n2));
      }
    }), s.forEach((n2) => {
      e.push(this.zn.indexManager.addToCollectionParentIndex(t2, n2));
    }), e.push(this.zn.updateMetadata(t2, n)), Vt.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.zn.Gn(t2, e).next((t3) => (this.Hn.set(e, {
      size: t3.size,
      readTime: t3.document.readTime
    }), t3.document));
  }
  getAllFromCache(t2, e) {
    return this.zn.jn(t2, e).next(({ documents: t3, Wn: e2 }) => (e2.forEach((e3, n) => {
      this.Hn.set(e3, {
        size: n,
        readTime: t3.get(e3).readTime
      });
    }), t3));
  }
}
function Yr(t2) {
  return $i(t2, "remoteDocumentGlobal");
}
function Xr(t2) {
  return $i(t2, "remoteDocumentsV14");
}
function Zr(t2) {
  const e = t2.path.toArray();
  return [
    e.slice(0, e.length - 2),
    e[e.length - 2],
    e[e.length - 1]
  ];
}
function to(t2, e) {
  const n = e.documentKey.path.toArray();
  return [
    t2,
    ji(e.readTime),
    n.slice(0, n.length - 2),
    n.length > 0 ? n[n.length - 1] : ""
  ];
}
function eo(t2, e) {
  const n = t2.path.toArray(), s = e.path.toArray();
  let i = 0;
  for (let t3 = 0; t3 < n.length - 2 && t3 < s.length - 2; ++t3)
    if (i = it(n[t3], s[t3]), i)
      return i;
  return i = it(n.length, s.length), i || (i = it(n[n.length - 2], s[s.length - 2]), i || it(n[n.length - 1], s[s.length - 1]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no {
  constructor(t2, e) {
    this.overlayedDocument = t2, this.mutatedFields = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so {
  constructor(t2, e, n, s) {
    this.remoteDocumentCache = t2, this.mutationQueue = e, this.documentOverlayCache = n, this.indexManager = s;
  }
  getDocument(t2, e) {
    let n = null;
    return this.documentOverlayCache.getOverlay(t2, e).next((s) => (n = s, this.getBaseDocument(t2, e, n))).next((t3) => (null !== n && Qn(n.mutation, t3, Jt.empty(), ut.now()), t3));
  }
  getDocuments(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.getLocalViewOfDocuments(t2, e2, gs()).next(() => e2));
  }
  getLocalViewOfDocuments(t2, e, n = gs()) {
    const s = fs();
    return this.populateOverlays(t2, s, e).next(() => this.computeViews(t2, e, s, n).next((t3) => {
      let e2 = hs();
      return t3.forEach((t4, n2) => {
        e2 = e2.insert(t4, n2.overlayedDocument);
      }), e2;
    }));
  }
  getOverlayedDocuments(t2, e) {
    const n = fs();
    return this.populateOverlays(t2, n, e).next(() => this.computeViews(t2, e, n, gs()));
  }
  populateOverlays(t2, e, n) {
    const s = [];
    return n.forEach((t3) => {
      e.has(t3) || s.push(t3);
    }), this.documentOverlayCache.getOverlays(t2, s).next((t3) => {
      t3.forEach((t4, n2) => {
        e.set(t4, n2);
      });
    });
  }
  computeViews(t2, e, n, s) {
    let i = cs();
    const r = _s(), o = _s();
    return e.forEach((t3, e2) => {
      const o2 = n.get(e2.key);
      s.has(e2.key) && (void 0 === o2 || o2.mutation instanceof Hn) ? i = i.insert(e2.key, e2) : void 0 !== o2 && (r.set(e2.key, o2.mutation.getFieldMask()), Qn(o2.mutation, e2, o2.mutation.getFieldMask(), ut.now()));
    }), this.recalculateAndSaveOverlays(t2, i).next((t3) => (t3.forEach((t4, e2) => r.set(t4, e2)), e.forEach((t4, e2) => {
      var n2;
      return o.set(t4, new no(e2, null !== (n2 = r.get(t4)) && void 0 !== n2 ? n2 : null));
    }), o));
  }
  recalculateAndSaveOverlays(t2, e) {
    const n = _s();
    let s = new Gt((t3, e2) => t3 - e2), i = gs();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t2, e).next((t3) => {
      for (const i2 of t3)
        i2.keys().forEach((t4) => {
          const r = e.get(t4);
          if (null === r)
            return;
          let o = n.get(t4) || Jt.empty();
          o = i2.applyToLocalView(r, o), n.set(t4, o);
          const u = (s.get(i2.batchId) || gs()).add(t4);
          s = s.insert(i2.batchId, u);
        });
    }).next(() => {
      const r = [], o = s.getReverseIterator();
      for (; o.hasNext(); ) {
        const s2 = o.getNext(), u = s2.key, c = s2.value, a = ds();
        c.forEach((t3) => {
          if (!i.has(t3)) {
            const s3 = Kn(e.get(t3), n.get(t3));
            null !== s3 && a.set(t3, s3), i = i.add(t3);
          }
        }), r.push(this.documentOverlayCache.saveOverlays(t2, u, a));
      }
      return Vt.waitFor(r);
    }).next(() => n);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.recalculateAndSaveOverlays(t2, e2));
  }
  getDocumentsMatchingQuery(t2, e, n) {
    return function(t3) {
      return dt.isDocumentKey(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t2, e.path) : ln(e) ? this.getDocumentsMatchingCollectionGroupQuery(t2, e, n) : this.getDocumentsMatchingCollectionQuery(t2, e, n);
  }
  getNextDocuments(t2, e, n, s) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t2, e, n, s).next((i) => {
      const r = s - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t2, e, n.largestBatchId, s - i.size) : Vt.resolve(fs());
      let o = -1, u = i;
      return r.next((e2) => Vt.forEach(e2, (e3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(e3) ? Vt.resolve() : this.getBaseDocument(t2, e3, n2).next((t3) => {
        u = u.insert(e3, t3);
      }))).next(() => this.populateOverlays(t2, e2, i)).next(() => this.computeViews(t2, u, e2, gs())).next((t3) => ({
        batchId: o,
        changes: ls(t3)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t2, e) {
    return this.getDocument(t2, new dt(e)).next((t3) => {
      let e2 = hs();
      return t3.isFoundDocument() && (e2 = e2.insert(t3.key, t3)), e2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t2, e, n) {
    const s = e.collectionGroup;
    let i = hs();
    return this.indexManager.getCollectionParents(t2, s).next((r) => Vt.forEach(r, (r2) => {
      const o = function(t3, e2) {
        return new rn(
          e2,
          null,
          t3.explicitOrderBy.slice(),
          t3.filters.slice(),
          t3.limit,
          t3.limitType,
          t3.startAt,
          t3.endAt
        );
      }(e, r2.child(s));
      return this.getDocumentsMatchingCollectionQuery(t2, o, n).next((t3) => {
        t3.forEach((t4, e2) => {
          i = i.insert(t4, e2);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(t2, e, n) {
    let s;
    return this.remoteDocumentCache.getAllFromCollection(t2, e.path, n).next((i) => (s = i, this.documentOverlayCache.getOverlaysForCollection(t2, e.path, n.largestBatchId))).next((t3) => {
      t3.forEach((t4, e2) => {
        const n3 = e2.getKey();
        null === s.get(n3) && (s = s.insert(n3, ke.newInvalidDocument(n3)));
      });
      let n2 = hs();
      return s.forEach((s2, i) => {
        const r = t3.get(s2);
        void 0 !== r && Qn(r.mutation, i, Jt.empty(), ut.now()), yn(e, i) && (n2 = n2.insert(s2, i));
      }), n2;
    });
  }
  getBaseDocument(t2, e, n) {
    return null === n || 1 === n.mutation.type ? this.remoteDocumentCache.getEntry(t2, e) : Vt.resolve(ke.newInvalidDocument(e));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io {
  constructor(t2) {
    this.wt = t2, this.Jn = /* @__PURE__ */ new Map(), this.Yn = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t2, e) {
    return Vt.resolve(this.Jn.get(e));
  }
  saveBundleMetadata(t2, e) {
    var n;
    return this.Jn.set(e.id, {
      id: (n = e).id,
      version: n.version,
      createTime: Ms(n.createTime)
    }), Vt.resolve();
  }
  getNamedQuery(t2, e) {
    return Vt.resolve(this.Yn.get(e));
  }
  saveNamedQuery(t2, e) {
    return this.Yn.set(e.name, function(t3) {
      return {
        name: t3.name,
        query: Xi(t3.bundledQuery),
        readTime: Ms(t3.readTime)
      };
    }(e)), Vt.resolve();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro {
  constructor() {
    this.overlays = new Gt(dt.comparator), this.Xn = /* @__PURE__ */ new Map();
  }
  getOverlay(t2, e) {
    return Vt.resolve(this.overlays.get(e));
  }
  getOverlays(t2, e) {
    const n = fs();
    return Vt.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    return n.forEach((n2, s) => {
      this.ie(t2, e, s);
    }), Vt.resolve();
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = this.Xn.get(n);
    return void 0 !== s && (s.forEach((t3) => this.overlays = this.overlays.remove(t3)), this.Xn.delete(n)), Vt.resolve();
  }
  getOverlaysForCollection(t2, e, n) {
    const s = fs(), i = e.length + 1, r = new dt(e.child("")), o = this.overlays.getIteratorFrom(r);
    for (; o.hasNext(); ) {
      const t3 = o.getNext().value, r2 = t3.getKey();
      if (!e.isPrefixOf(r2.path))
        break;
      r2.path.length === i && (t3.largestBatchId > n && s.set(t3.getKey(), t3));
    }
    return Vt.resolve(s);
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    let i = new Gt((t3, e2) => t3 - e2);
    const r = this.overlays.getIterator();
    for (; r.hasNext(); ) {
      const t3 = r.getNext().value;
      if (t3.getKey().getCollectionGroup() === e && t3.largestBatchId > n) {
        let e2 = i.get(t3.largestBatchId);
        null === e2 && (e2 = fs(), i = i.insert(t3.largestBatchId, e2)), e2.set(t3.getKey(), t3);
      }
    }
    const o = fs(), u = i.getIterator();
    for (; u.hasNext(); ) {
      if (u.getNext().value.forEach((t3, e2) => o.set(t3, e2)), o.size() >= s)
        break;
    }
    return Vt.resolve(o);
  }
  ie(t2, e, n) {
    const s = this.overlays.get(n.key);
    if (null !== s) {
      const t3 = this.Xn.get(s.largestBatchId).delete(n.key);
      this.Xn.set(s.largestBatchId, t3);
    }
    this.overlays = this.overlays.insert(n.key, new Ui(e, n));
    let i = this.Xn.get(e);
    void 0 === i && (i = gs(), this.Xn.set(e, i)), this.Xn.set(e, i.add(n.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo {
  constructor() {
    this.Zn = new Wt(uo.ts), this.es = new Wt(uo.ns);
  }
  isEmpty() {
    return this.Zn.isEmpty();
  }
  addReference(t2, e) {
    const n = new uo(t2, e);
    this.Zn = this.Zn.add(n), this.es = this.es.add(n);
  }
  ss(t2, e) {
    t2.forEach((t3) => this.addReference(t3, e));
  }
  removeReference(t2, e) {
    this.rs(new uo(t2, e));
  }
  os(t2, e) {
    t2.forEach((t3) => this.removeReference(t3, e));
  }
  us(t2) {
    const e = new dt(new ht([])), n = new uo(e, t2), s = new uo(e, t2 + 1), i = [];
    return this.es.forEachInRange([n, s], (t3) => {
      this.rs(t3), i.push(t3.key);
    }), i;
  }
  cs() {
    this.Zn.forEach((t2) => this.rs(t2));
  }
  rs(t2) {
    this.Zn = this.Zn.delete(t2), this.es = this.es.delete(t2);
  }
  hs(t2) {
    const e = new dt(new ht([])), n = new uo(e, t2), s = new uo(e, t2 + 1);
    let i = gs();
    return this.es.forEachInRange([n, s], (t3) => {
      i = i.add(t3.key);
    }), i;
  }
  containsKey(t2) {
    const e = new uo(t2, 0), n = this.Zn.firstAfterOrEqual(e);
    return null !== n && t2.isEqual(n.key);
  }
}
class uo {
  constructor(t2, e) {
    this.key = t2, this.ls = e;
  }
  static ts(t2, e) {
    return dt.comparator(t2.key, e.key) || it(t2.ls, e.ls);
  }
  static ns(t2, e) {
    return it(t2.ls, e.ls) || dt.comparator(t2.key, e.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co {
  constructor(t2, e) {
    this.indexManager = t2, this.referenceDelegate = e, this.mutationQueue = [], this.fs = 1, this.ds = new Wt(uo.ts);
  }
  checkEmpty(t2) {
    return Vt.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(t2, e, n, s) {
    const i = this.fs;
    this.fs++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const r = new Bi(i, e, n, s);
    this.mutationQueue.push(r);
    for (const e2 of s)
      this.ds = this.ds.add(new uo(e2.key, i)), this.indexManager.addToCollectionParentIndex(t2, e2.key.path.popLast());
    return Vt.resolve(r);
  }
  lookupMutationBatch(t2, e) {
    return Vt.resolve(this._s(e));
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = this.ws(n), i = s < 0 ? 0 : s;
    return Vt.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return Vt.resolve(0 === this.mutationQueue.length ? -1 : this.fs - 1);
  }
  getAllMutationBatches(t2) {
    return Vt.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = new uo(e, 0), s = new uo(e, Number.POSITIVE_INFINITY), i = [];
    return this.ds.forEachInRange([n, s], (t3) => {
      const e2 = this._s(t3.ls);
      i.push(e2);
    }), Vt.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new Wt(it);
    return e.forEach((t3) => {
      const e2 = new uo(t3, 0), s = new uo(t3, Number.POSITIVE_INFINITY);
      this.ds.forEachInRange([e2, s], (t4) => {
        n = n.add(t4.ls);
      });
    }), Vt.resolve(this.gs(n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1;
    let i = n;
    dt.isDocumentKey(i) || (i = i.child(""));
    const r = new uo(new dt(i), 0);
    let o = new Wt(it);
    return this.ds.forEachWhile((t3) => {
      const e2 = t3.key.path;
      return !!n.isPrefixOf(e2) && (e2.length === s && (o = o.add(t3.ls)), true);
    }, r), Vt.resolve(this.gs(o));
  }
  gs(t2) {
    const e = [];
    return t2.forEach((t3) => {
      const n = this._s(t3);
      null !== n && e.push(n);
    }), e;
  }
  removeMutationBatch(t2, e) {
    U(0 === this.ys(e.batchId, "removed")), this.mutationQueue.shift();
    let n = this.ds;
    return Vt.forEach(e.mutations, (s) => {
      const i = new uo(s.key, e.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t2, s.key);
    }).next(() => {
      this.ds = n;
    });
  }
  In(t2) {
  }
  containsKey(t2, e) {
    const n = new uo(e, 0), s = this.ds.firstAfterOrEqual(n);
    return Vt.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t2) {
    return this.mutationQueue.length, Vt.resolve();
  }
  ys(t2, e) {
    return this.ws(t2);
  }
  ws(t2) {
    if (0 === this.mutationQueue.length)
      return 0;
    return t2 - this.mutationQueue[0].batchId;
  }
  _s(t2) {
    const e = this.ws(t2);
    if (e < 0 || e >= this.mutationQueue.length)
      return null;
    return this.mutationQueue[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao {
  constructor(t2) {
    this.ps = t2, this.docs = new Gt(dt.comparator), this.size = 0;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e) {
    const n = e.key, s = this.docs.get(n), i = s ? s.size : 0, r = this.ps(e);
    return this.docs = this.docs.insert(n, {
      document: e.mutableCopy(),
      size: r
    }), this.size += r - i, this.indexManager.addToCollectionParentIndex(t2, n.path.popLast());
  }
  removeEntry(t2) {
    const e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }
  getEntry(t2, e) {
    const n = this.docs.get(e);
    return Vt.resolve(n ? n.document.mutableCopy() : ke.newInvalidDocument(e));
  }
  getEntries(t2, e) {
    let n = cs();
    return e.forEach((t3) => {
      const e2 = this.docs.get(t3);
      n = n.insert(t3, e2 ? e2.document.mutableCopy() : ke.newInvalidDocument(t3));
    }), Vt.resolve(n);
  }
  getAllFromCollection(t2, e, n) {
    let s = cs();
    const i = new dt(e.child("")), r = this.docs.getIteratorFrom(i);
    for (; r.hasNext(); ) {
      const { key: t3, value: { document: i2 } } = r.getNext();
      if (!e.isPrefixOf(t3.path))
        break;
      t3.path.length > e.length + 1 || (Rt(Et(i2), n) <= 0 || (s = s.insert(i2.key, i2.mutableCopy())));
    }
    return Vt.resolve(s);
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    L();
  }
  Is(t2, e) {
    return Vt.forEach(this.docs, (t3) => e(t3));
  }
  newChangeBuffer(t2) {
    return new ho(this);
  }
  getSize(t2) {
    return Vt.resolve(this.size);
  }
}
class ho extends Wr {
  constructor(t2) {
    super(), this.zn = t2;
  }
  applyChanges(t2) {
    const e = [];
    return this.changes.forEach((n, s) => {
      s.isValidDocument() ? e.push(this.zn.addEntry(t2, s)) : this.zn.removeEntry(n);
    }), Vt.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.zn.getEntry(t2, e);
  }
  getAllFromCache(t2, e) {
    return this.zn.getEntries(t2, e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo {
  constructor(t2) {
    this.persistence = t2, this.Ts = new os((t3) => Fe(t3), Be), this.lastRemoteSnapshotVersion = ct.min(), this.highestTargetId = 0, this.Es = 0, this.As = new oo(), this.targetCount = 0, this.Rs = Or.An();
  }
  forEachTarget(t2, e) {
    return this.Ts.forEach((t3, n) => e(n)), Vt.resolve();
  }
  getLastRemoteSnapshotVersion(t2) {
    return Vt.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t2) {
    return Vt.resolve(this.Es);
  }
  allocateTargetId(t2) {
    return this.highestTargetId = this.Rs.next(), Vt.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t2, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.Es && (this.Es = e), Vt.resolve();
  }
  vn(t2) {
    this.Ts.set(t2.target, t2);
    const e = t2.targetId;
    e > this.highestTargetId && (this.Rs = new Or(e), this.highestTargetId = e), t2.sequenceNumber > this.Es && (this.Es = t2.sequenceNumber);
  }
  addTargetData(t2, e) {
    return this.vn(e), this.targetCount += 1, Vt.resolve();
  }
  updateTargetData(t2, e) {
    return this.vn(e), Vt.resolve();
  }
  removeTargetData(t2, e) {
    return this.Ts.delete(e.target), this.As.us(e.targetId), this.targetCount -= 1, Vt.resolve();
  }
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return this.Ts.forEach((r, o) => {
      o.sequenceNumber <= e && null === n.get(o.targetId) && (this.Ts.delete(r), i.push(this.removeMatchingKeysForTargetId(t2, o.targetId)), s++);
    }), Vt.waitFor(i).next(() => s);
  }
  getTargetCount(t2) {
    return Vt.resolve(this.targetCount);
  }
  getTargetData(t2, e) {
    const n = this.Ts.get(e) || null;
    return Vt.resolve(n);
  }
  addMatchingKeys(t2, e, n) {
    return this.As.ss(e, n), Vt.resolve();
  }
  removeMatchingKeys(t2, e, n) {
    this.As.os(e, n);
    const s = this.persistence.referenceDelegate, i = [];
    return s && e.forEach((e2) => {
      i.push(s.markPotentiallyOrphaned(t2, e2));
    }), Vt.waitFor(i);
  }
  removeMatchingKeysForTargetId(t2, e) {
    return this.As.us(e), Vt.resolve();
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = this.As.hs(e);
    return Vt.resolve(n);
  }
  containsKey(t2, e) {
    return Vt.resolve(this.As.containsKey(e));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo {
  constructor(t2, e) {
    this.bs = {}, this.overlays = {}, this.Ps = new Lt(0), this.vs = false, this.vs = true, this.referenceDelegate = t2(this), this.Vs = new lo(this);
    this.indexManager = new yr(), this.remoteDocumentCache = function(t3) {
      return new ao(t3);
    }((t3) => this.referenceDelegate.Ss(t3)), this.wt = new Ki(e), this.Ds = new io(this.wt);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.vs = false, Promise.resolve();
  }
  get started() {
    return this.vs;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t2) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t2) {
    let e = this.overlays[t2.toKey()];
    return e || (e = new ro(), this.overlays[t2.toKey()] = e), e;
  }
  getMutationQueue(t2, e) {
    let n = this.bs[t2.toKey()];
    return n || (n = new co(e, this.referenceDelegate), this.bs[t2.toKey()] = n), n;
  }
  getTargetCache() {
    return this.Vs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ds;
  }
  runTransaction(t2, e, n) {
    O("MemoryPersistence", "Starting transaction:", t2);
    const s = new _o(this.Ps.next());
    return this.referenceDelegate.Cs(), n(s).next((t3) => this.referenceDelegate.xs(s).next(() => t3)).toPromise().then((t3) => (s.raiseOnCommittedEvent(), t3));
  }
  Ns(t2, e) {
    return Vt.or(Object.values(this.bs).map((n) => () => n.containsKey(t2, e)));
  }
}
class _o extends Pt {
  constructor(t2) {
    super(), this.currentSequenceNumber = t2;
  }
}
class wo {
  constructor(t2) {
    this.persistence = t2, this.ks = new oo(), this.Ms = null;
  }
  static Os(t2) {
    return new wo(t2);
  }
  get Fs() {
    if (this.Ms)
      return this.Ms;
    throw L();
  }
  addReference(t2, e, n) {
    return this.ks.addReference(n, e), this.Fs.delete(n.toString()), Vt.resolve();
  }
  removeReference(t2, e, n) {
    return this.ks.removeReference(n, e), this.Fs.add(n.toString()), Vt.resolve();
  }
  markPotentiallyOrphaned(t2, e) {
    return this.Fs.add(e.toString()), Vt.resolve();
  }
  removeTarget(t2, e) {
    this.ks.us(e.targetId).forEach((t3) => this.Fs.add(t3.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(t2, e.targetId).next((t3) => {
      t3.forEach((t4) => this.Fs.add(t4.toString()));
    }).next(() => n.removeTargetData(t2, e));
  }
  Cs() {
    this.Ms = /* @__PURE__ */ new Set();
  }
  xs(t2) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return Vt.forEach(this.Fs, (n) => {
      const s = dt.fromPath(n);
      return this.$s(t2, s).next((t3) => {
        t3 || e.removeEntry(s, ct.min());
      });
    }).next(() => (this.Ms = null, e.apply(t2)));
  }
  updateLimboDocument(t2, e) {
    return this.$s(t2, e).next((t3) => {
      t3 ? this.Fs.delete(e.toString()) : this.Fs.add(e.toString());
    });
  }
  Ss(t2) {
    return 0;
  }
  $s(t2, e) {
    return Vt.or([() => Vt.resolve(this.ks.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t2, e), () => this.persistence.Ns(t2, e)]);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo {
  constructor(t2) {
    this.wt = t2;
  }
  M(t2, e, n, s) {
    const i = new St("createOrUpgrade", e);
    n < 1 && s >= 1 && (function(t3) {
      t3.createObjectStore("owner");
    }(t2), function(t3) {
      t3.createObjectStore("mutationQueues", {
        keyPath: "userId"
      });
      t3.createObjectStore("mutations", {
        keyPath: "batchId",
        autoIncrement: true
      }).createIndex("userMutationsIndex", _i, {
        unique: true
      }), t3.createObjectStore("documentMutations");
    }(t2), go(t2), function(t3) {
      t3.createObjectStore("remoteDocuments");
    }(t2));
    let r = Vt.resolve();
    return n < 3 && s >= 3 && (0 !== n && (!function(t3) {
      t3.deleteObjectStore("targetDocuments"), t3.deleteObjectStore("targets"), t3.deleteObjectStore("targetGlobal");
    }(t2), go(t2)), r = r.next(() => function(t3) {
      const e2 = t3.store("targetGlobal"), n2 = {
        highestTargetId: 0,
        highestListenSequenceNumber: 0,
        lastRemoteSnapshotVersion: ct.min().toTimestamp(),
        targetCount: 0
      };
      return e2.put("targetGlobalKey", n2);
    }(i))), n < 4 && s >= 4 && (0 !== n && (r = r.next(() => function(t3, e2) {
      return e2.store("mutations").K().next((n2) => {
        t3.deleteObjectStore("mutations");
        t3.createObjectStore("mutations", {
          keyPath: "batchId",
          autoIncrement: true
        }).createIndex("userMutationsIndex", _i, {
          unique: true
        });
        const s2 = e2.store("mutations"), i2 = n2.map((t4) => s2.put(t4));
        return Vt.waitFor(i2);
      });
    }(t2, i))), r = r.next(() => {
      !function(t3) {
        t3.createObjectStore("clientMetadata", {
          keyPath: "clientId"
        });
      }(t2);
    })), n < 5 && s >= 5 && (r = r.next(() => this.Bs(i))), n < 6 && s >= 6 && (r = r.next(() => (function(t3) {
      t3.createObjectStore("remoteDocumentGlobal");
    }(t2), this.Ls(i)))), n < 7 && s >= 7 && (r = r.next(() => this.Us(i))), n < 8 && s >= 8 && (r = r.next(() => this.qs(t2, i))), n < 9 && s >= 9 && (r = r.next(() => {
      !function(t3) {
        t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
      }(t2);
    })), n < 10 && s >= 10 && (r = r.next(() => this.Ks(i))), n < 11 && s >= 11 && (r = r.next(() => {
      !function(t3) {
        t3.createObjectStore("bundles", {
          keyPath: "bundleId"
        });
      }(t2), function(t3) {
        t3.createObjectStore("namedQueries", {
          keyPath: "name"
        });
      }(t2);
    })), n < 12 && s >= 12 && (r = r.next(() => {
      !function(t3) {
        const e2 = t3.createObjectStore("documentOverlays", {
          keyPath: Si
        });
        e2.createIndex("collectionPathOverlayIndex", Di, {
          unique: false
        }), e2.createIndex("collectionGroupOverlayIndex", Ci, {
          unique: false
        });
      }(t2);
    })), n < 13 && s >= 13 && (r = r.next(() => function(t3) {
      const e2 = t3.createObjectStore("remoteDocumentsV14", {
        keyPath: yi
      });
      e2.createIndex("documentKeyIndex", pi), e2.createIndex("collectionGroupIndex", Ii);
    }(t2)).next(() => this.Gs(t2, i)).next(() => t2.deleteObjectStore("remoteDocuments"))), n < 14 && s >= 14 && (r = r.next(() => this.Qs(t2, i))), n < 15 && s >= 15 && (r = r.next(() => function(t3) {
      t3.createObjectStore("indexConfiguration", {
        keyPath: "indexId",
        autoIncrement: true
      }).createIndex("collectionGroupIndex", "collectionGroup", {
        unique: false
      });
      t3.createObjectStore("indexState", {
        keyPath: bi
      }).createIndex("sequenceNumberIndex", Pi, {
        unique: false
      });
      t3.createObjectStore("indexEntries", {
        keyPath: vi
      }).createIndex("documentKeyIndex", Vi, {
        unique: false
      });
    }(t2))), r;
  }
  Ls(t2) {
    let e = 0;
    return t2.store("remoteDocuments").J((t3, n) => {
      e += Dr(n);
    }).next(() => {
      const n = {
        byteSize: e
      };
      return t2.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n);
    });
  }
  Bs(t2) {
    const e = t2.store("mutationQueues"), n = t2.store("mutations");
    return e.K().next((e2) => Vt.forEach(e2, (e3) => {
      const s = IDBKeyRange.bound([e3.userId, -1], [e3.userId, e3.lastAcknowledgedBatchId]);
      return n.K("userMutationsIndex", s).next((n2) => Vt.forEach(n2, (n3) => {
        U(n3.userId === e3.userId);
        const s2 = Hi(this.wt, n3);
        return Sr(t2, e3.userId, s2).next(() => {
        });
      }));
    }));
  }
  Us(t2) {
    const e = t2.store("targetDocuments"), n = t2.store("remoteDocuments");
    return t2.store("targetGlobal").get("targetGlobalKey").next((t3) => {
      const s = [];
      return n.J((n2, i) => {
        const r = new ht(n2), o = function(t4) {
          return [0, hi(t4)];
        }(r);
        s.push(e.get(o).next((n3) => n3 ? Vt.resolve() : ((n4) => e.put({
          targetId: 0,
          path: hi(n4),
          sequenceNumber: t3.highestListenSequenceNumber
        }))(r)));
      }).next(() => Vt.waitFor(s));
    });
  }
  qs(t2, e) {
    t2.createObjectStore("collectionParents", {
      keyPath: Ri
    });
    const n = e.store("collectionParents"), s = new pr(), i = (t3) => {
      if (s.add(t3)) {
        const e2 = t3.lastSegment(), s2 = t3.popLast();
        return n.put({
          collectionId: e2,
          parent: hi(s2)
        });
      }
    };
    return e.store("remoteDocuments").J({
      H: true
    }, (t3, e2) => {
      const n2 = new ht(t3);
      return i(n2.popLast());
    }).next(() => e.store("documentMutations").J({
      H: true
    }, ([t3, e2, n2], s2) => {
      const r = di(e2);
      return i(r.popLast());
    }));
  }
  Ks(t2) {
    const e = t2.store("targets");
    return e.J((t3, n) => {
      const s = Ji(n), i = Yi(this.wt, s);
      return e.put(i);
    });
  }
  Gs(t2, e) {
    const n = e.store("remoteDocuments"), s = [];
    return n.J((t3, n2) => {
      const i = e.store("remoteDocumentsV14"), r = (o = n2, o.document ? new dt(ht.fromString(o.document.name).popFirst(5)) : o.noDocument ? dt.fromSegments(o.noDocument.path) : o.unknownDocument ? dt.fromSegments(o.unknownDocument.path) : L()).path.toArray();
      var o;
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
      const u = {
        prefixPath: r.slice(0, r.length - 2),
        collectionGroup: r[r.length - 2],
        documentId: r[r.length - 1],
        readTime: n2.readTime || [0, 0],
        unknownDocument: n2.unknownDocument,
        noDocument: n2.noDocument,
        document: n2.document,
        hasCommittedMutations: !!n2.hasCommittedMutations
      };
      s.push(i.put(u));
    }).next(() => Vt.waitFor(s));
  }
  Qs(t2, e) {
    const n = e.store("mutations"), s = Hr(this.wt), i = new fo(wo.Os, this.wt.ne);
    return n.K().next((t3) => {
      const n2 = /* @__PURE__ */ new Map();
      return t3.forEach((t4) => {
        var e2;
        let s2 = null !== (e2 = n2.get(t4.userId)) && void 0 !== e2 ? e2 : gs();
        Hi(this.wt, t4).keys().forEach((t5) => s2 = s2.add(t5)), n2.set(t4.userId, s2);
      }), Vt.forEach(n2, (t4, n3) => {
        const r = new C(n3), o = rr.se(this.wt, r), u = i.getIndexManager(r), c = Cr.se(r, this.wt, u, i.referenceDelegate);
        return new so(s, c, o, u).recalculateAndSaveOverlaysForDocumentKeys(new Fi(e, Lt.ot), t4).next();
      });
    });
  }
}
function go(t2) {
  t2.createObjectStore("targetDocuments", {
    keyPath: Ei
  }).createIndex("documentTargetsIndex", Ai, {
    unique: true
  });
  t2.createObjectStore("targets", {
    keyPath: "targetId"
  }).createIndex("queryTargetsIndex", Ti, {
    unique: true
  }), t2.createObjectStore("targetGlobal");
}
const yo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
class po {
  constructor(t2, e, n, s, i, r, o, u, c, a, h = 15) {
    if (this.allowTabSynchronization = t2, this.persistenceKey = e, this.clientId = n, this.js = i, this.window = r, this.document = o, this.Ws = c, this.zs = a, this.Hs = h, this.Ps = null, this.vs = false, this.isPrimary = false, this.networkEnabled = true, this.Js = null, this.inForeground = false, this.Ys = null, this.Xs = null, this.Zs = Number.NEGATIVE_INFINITY, this.ti = (t3) => Promise.resolve(), !po.V())
      throw new Q(G.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new Qr(this, s), this.ei = e + "main", this.wt = new Ki(u), this.ni = new Dt(this.ei, this.Hs, new mo(this.wt)), this.Vs = new Fr(this.referenceDelegate, this.wt), this.remoteDocumentCache = Hr(this.wt), this.Ds = new nr(), this.window && this.window.localStorage ? this.si = this.window.localStorage : (this.si = null, false === a && F("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  start() {
    return this.ii().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization)
        throw new Q(G.FAILED_PRECONDITION, yo);
      return this.ri(), this.oi(), this.ui(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t2) => this.Vs.getHighestSequenceNumber(t2));
    }).then((t2) => {
      this.Ps = new Lt(t2, this.Ws);
    }).then(() => {
      this.vs = true;
    }).catch((t2) => (this.ni && this.ni.close(), Promise.reject(t2)));
  }
  ci(t2) {
    return this.ti = async (e) => {
      if (this.started)
        return t2(e);
    }, t2(this.isPrimary);
  }
  setDatabaseDeletedListener(t2) {
    this.ni.F(async (e) => {
      null === e.newVersion && await t2();
    });
  }
  setNetworkEnabled(t2) {
    this.networkEnabled !== t2 && (this.networkEnabled = t2, this.js.enqueueAndForget(async () => {
      this.started && await this.ii();
    }));
  }
  ii() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t2) => To(t2).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary)
        return this.ai(t2).next((t3) => {
          t3 || (this.isPrimary = false, this.js.enqueueRetryable(() => this.ti(false)));
        });
    }).next(() => this.hi(t2)).next((e) => this.isPrimary && !e ? this.li(t2).next(() => false) : !!e && this.fi(t2).next(() => true))).catch((t2) => {
      if (Nt(t2))
        return O("IndexedDbPersistence", "Failed to extend owner lease: ", t2), this.isPrimary;
      if (!this.allowTabSynchronization)
        throw t2;
      return O("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t2), false;
    }).then((t2) => {
      this.isPrimary !== t2 && this.js.enqueueRetryable(() => this.ti(t2)), this.isPrimary = t2;
    });
  }
  ai(t2) {
    return Io(t2).get("owner").next((t3) => Vt.resolve(this.di(t3)));
  }
  _i(t2) {
    return To(t2).delete(this.clientId);
  }
  async wi() {
    if (this.isPrimary && !this.mi(this.Zs, 18e5)) {
      this.Zs = Date.now();
      const t2 = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t3) => {
        const e = $i(t3, "clientMetadata");
        return e.K().next((t4) => {
          const n = this.gi(t4, 18e5), s = t4.filter((t5) => -1 === n.indexOf(t5));
          return Vt.forEach(s, (t5) => e.delete(t5.clientId)).next(() => s);
        });
      }).catch(() => []);
      if (this.si)
        for (const e of t2)
          this.si.removeItem(this.yi(e.clientId));
    }
  }
  ui() {
    this.Xs = this.js.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.ii().then(() => this.wi()).then(() => this.ui()));
  }
  di(t2) {
    return !!t2 && t2.ownerId === this.clientId;
  }
  hi(t2) {
    if (this.zs)
      return Vt.resolve(true);
    return Io(t2).get("owner").next((e) => {
      if (null !== e && this.mi(e.leaseTimestampMs, 5e3) && !this.pi(e.ownerId)) {
        if (this.di(e) && this.networkEnabled)
          return true;
        if (!this.di(e)) {
          if (!e.allowTabSynchronization)
            throw new Q(G.FAILED_PRECONDITION, yo);
          return false;
        }
      }
      return !(!this.networkEnabled || !this.inForeground) || To(t2).K().next((t3) => void 0 === this.gi(t3, 5e3).find((t4) => {
        if (this.clientId !== t4.clientId) {
          const e2 = !this.networkEnabled && t4.networkEnabled, n = !this.inForeground && t4.inForeground, s = this.networkEnabled === t4.networkEnabled;
          if (e2 || n && s)
            return true;
        }
        return false;
      }));
    }).next((t3) => (this.isPrimary !== t3 && O("IndexedDbPersistence", `Client ${t3 ? "is" : "is not"} eligible for a primary lease.`), t3));
  }
  async shutdown() {
    this.vs = false, this.Ii(), this.Xs && (this.Xs.cancel(), this.Xs = null), this.Ti(), this.Ei(), await this.ni.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (t2) => {
      const e = new Fi(t2, Lt.ot);
      return this.li(e).next(() => this._i(e));
    }), this.ni.close(), this.Ai();
  }
  gi(t2, e) {
    return t2.filter((t3) => this.mi(t3.updateTimeMs, e) && !this.pi(t3.clientId));
  }
  Ri() {
    return this.runTransaction("getActiveClients", "readonly", (t2) => To(t2).K().next((t3) => this.gi(t3, 18e5).map((t4) => t4.clientId)));
  }
  get started() {
    return this.vs;
  }
  getMutationQueue(t2, e) {
    return Cr.se(t2, this.wt, e, this.referenceDelegate);
  }
  getTargetCache() {
    return this.Vs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(t2) {
    return new Tr(t2, this.wt.ne.databaseId);
  }
  getDocumentOverlayCache(t2) {
    return rr.se(this.wt, t2);
  }
  getBundleCache() {
    return this.Ds;
  }
  runTransaction(t2, e, n) {
    O("IndexedDbPersistence", "Starting transaction:", t2);
    const s = "readonly" === e ? "readonly" : "readwrite", i = 15 === (r = this.Hs) ? Oi : 14 === r ? Mi : 13 === r ? ki : 12 === r ? Ni : 11 === r ? xi : void L();
    var r;
    let o;
    return this.ni.runTransaction(t2, s, i, (s2) => (o = new Fi(s2, this.Ps ? this.Ps.next() : Lt.ot), "readwrite-primary" === e ? this.ai(o).next((t3) => !!t3 || this.hi(o)).next((e2) => {
      if (!e2)
        throw F(`Failed to obtain primary lease for action '${t2}'.`), this.isPrimary = false, this.js.enqueueRetryable(() => this.ti(false)), new Q(G.FAILED_PRECONDITION, bt);
      return n(o);
    }).next((t3) => this.fi(o).next(() => t3)) : this.bi(o).next(() => n(o)))).then((t3) => (o.raiseOnCommittedEvent(), t3));
  }
  bi(t2) {
    return Io(t2).get("owner").next((t3) => {
      if (null !== t3 && this.mi(t3.leaseTimestampMs, 5e3) && !this.pi(t3.ownerId) && !this.di(t3) && !(this.zs || this.allowTabSynchronization && t3.allowTabSynchronization))
        throw new Q(G.FAILED_PRECONDITION, yo);
    });
  }
  fi(t2) {
    const e = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return Io(t2).put("owner", e);
  }
  static V() {
    return Dt.V();
  }
  li(t2) {
    const e = Io(t2);
    return e.get("owner").next((t3) => this.di(t3) ? (O("IndexedDbPersistence", "Releasing primary lease."), e.delete("owner")) : Vt.resolve());
  }
  mi(t2, e) {
    const n = Date.now();
    return !(t2 < n - e) && (!(t2 > n) || (F(`Detected an update time that is in the future: ${t2} > ${n}`), false));
  }
  ri() {
    null !== this.document && "function" == typeof this.document.addEventListener && (this.Ys = () => {
      this.js.enqueueAndForget(() => (this.inForeground = "visible" === this.document.visibilityState, this.ii()));
    }, this.document.addEventListener("visibilitychange", this.Ys), this.inForeground = "visible" === this.document.visibilityState);
  }
  Ti() {
    this.Ys && (this.document.removeEventListener("visibilitychange", this.Ys), this.Ys = null);
  }
  oi() {
    var t2;
    "function" == typeof (null === (t2 = this.window) || void 0 === t2 ? void 0 : t2.addEventListener) && (this.Js = () => {
      this.Ii(), isSafari() && navigator.appVersion.match(/Version\/1[45]/) && this.js.enterRestrictedMode(true), this.js.enqueueAndForget(() => this.shutdown());
    }, this.window.addEventListener("pagehide", this.Js));
  }
  Ei() {
    this.Js && (this.window.removeEventListener("pagehide", this.Js), this.Js = null);
  }
  pi(t2) {
    var e;
    try {
      const n = null !== (null === (e = this.si) || void 0 === e ? void 0 : e.getItem(this.yi(t2)));
      return O("IndexedDbPersistence", `Client '${t2}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
    } catch (t3) {
      return F("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
    }
  }
  Ii() {
    if (this.si)
      try {
        this.si.setItem(this.yi(this.clientId), String(Date.now()));
      } catch (t2) {
        F("Failed to set zombie client id.", t2);
      }
  }
  Ai() {
    if (this.si)
      try {
        this.si.removeItem(this.yi(this.clientId));
      } catch (t2) {
      }
  }
  yi(t2) {
    return `firestore_zombie_${this.persistenceKey}_${t2}`;
  }
}
function Io(t2) {
  return $i(t2, "owner");
}
function To(t2) {
  return $i(t2, "clientMetadata");
}
function Eo(t2, e) {
  let n = t2.projectId;
  return t2.isDefaultDatabase || (n += "." + t2.database), "firestore/" + e + "/" + n + "/";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao {
  constructor(t2, e, n, s) {
    this.targetId = t2, this.fromCache = e, this.Pi = n, this.vi = s;
  }
  static Vi(t2, e) {
    let n = gs(), s = gs();
    for (const t3 of e.docChanges)
      switch (t3.type) {
        case 0:
          n = n.add(t3.doc.key);
          break;
        case 1:
          s = s.add(t3.doc.key);
      }
    return new Ao(t2, e.fromCache, n, s);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro {
  constructor() {
    this.Si = false;
  }
  initialize(t2, e) {
    this.Di = t2, this.indexManager = e, this.Si = true;
  }
  getDocumentsMatchingQuery(t2, e, n, s) {
    return this.Ci(t2, e).next((i) => i || this.xi(t2, e, s, n)).next((n2) => n2 || this.Ni(t2, e));
  }
  Ci(t2, e) {
    if (cn(e))
      return Vt.resolve(null);
    let n = dn(e);
    return this.indexManager.getIndexType(t2, n).next((s) => 0 === s ? null : (null !== e.limit && 1 === s && (e = _n(e, null, "F"), n = dn(e)), this.indexManager.getDocumentsMatchingTarget(t2, n).next((s2) => {
      const i = gs(...s2);
      return this.Di.getDocuments(t2, i).next((s3) => this.indexManager.getMinOffset(t2, n).next((n2) => {
        const r = this.ki(e, s3);
        return this.Mi(e, r, i, n2.readTime) ? this.Ci(t2, _n(e, null, "F")) : this.Oi(t2, r, e, n2);
      }));
    })));
  }
  xi(t2, e, n, s) {
    return cn(e) || s.isEqual(ct.min()) ? this.Ni(t2, e) : this.Di.getDocuments(t2, n).next((i) => {
      const r = this.ki(e, i);
      return this.Mi(e, r, n, s) ? this.Ni(t2, e) : (k() <= LogLevel.DEBUG && O("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), gn(e)), this.Oi(t2, r, e, Tt(s, -1)));
    });
  }
  ki(t2, e) {
    let n = new Wt(In(t2));
    return e.forEach((e2, s) => {
      yn(t2, s) && (n = n.add(s));
    }), n;
  }
  Mi(t2, e, n, s) {
    if (null === t2.limit)
      return false;
    if (n.size !== e.size)
      return true;
    const i = "F" === t2.limitType ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Ni(t2, e) {
    return k() <= LogLevel.DEBUG && O("QueryEngine", "Using full collection scan to execute query:", gn(e)), this.Di.getDocumentsMatchingQuery(t2, e, At.min());
  }
  Oi(t2, e, n, s) {
    return this.Di.getDocumentsMatchingQuery(t2, n, s).next((t3) => (e.forEach((e2) => {
      t3 = t3.insert(e2.key, e2);
    }), t3));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo {
  constructor(t2, e, n, s) {
    this.persistence = t2, this.Fi = e, this.wt = s, this.$i = new Gt(it), this.Bi = new os((t3) => Fe(t3), Be), this.Li = /* @__PURE__ */ new Map(), this.Ui = t2.getRemoteDocumentCache(), this.Vs = t2.getTargetCache(), this.Ds = t2.getBundleCache(), this.qi(n);
  }
  qi(t2) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t2), this.indexManager = this.persistence.getIndexManager(t2), this.mutationQueue = this.persistence.getMutationQueue(t2, this.indexManager), this.localDocuments = new so(this.Ui, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Ui.setIndexManager(this.indexManager), this.Fi.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t2) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t2.collect(e, this.$i));
  }
}
function Po(t2, e, n, s) {
  return new bo(t2, e, n, s);
}
async function vo(t2, e) {
  const n = K(t2);
  return await n.persistence.runTransaction("Handle user change", "readonly", (t3) => {
    let s;
    return n.mutationQueue.getAllMutationBatches(t3).next((i) => (s = i, n.qi(e), n.mutationQueue.getAllMutationBatches(t3))).next((e2) => {
      const i = [], r = [];
      let o = gs();
      for (const t4 of s) {
        i.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      for (const t4 of e2) {
        r.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      return n.localDocuments.getDocuments(t3, o).next((t4) => ({
        Ki: t4,
        removedBatchIds: i,
        addedBatchIds: r
      }));
    });
  });
}
function Vo(t2, e) {
  const n = K(t2);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t3) => {
    const s = e.batch.keys(), i = n.Ui.newChangeBuffer({
      trackRemovals: true
    });
    return function(t4, e2, n2, s2) {
      const i2 = n2.batch, r = i2.keys();
      let o = Vt.resolve();
      return r.forEach((t5) => {
        o = o.next(() => s2.getEntry(e2, t5)).next((e3) => {
          const r2 = n2.docVersions.get(t5);
          U(null !== r2), e3.version.compareTo(r2) < 0 && (i2.applyToRemoteDocument(e3, n2), e3.isValidDocument() && (e3.setReadTime(n2.commitVersion), s2.addEntry(e3)));
        });
      }), o.next(() => t4.mutationQueue.removeMutationBatch(e2, i2));
    }(n, t3, e, i).next(() => i.apply(t3)).next(() => n.mutationQueue.performConsistencyCheck(t3)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(t3, s, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t3, function(t4) {
      let e2 = gs();
      for (let n2 = 0; n2 < t4.mutationResults.length; ++n2) {
        t4.mutationResults[n2].transformResults.length > 0 && (e2 = e2.add(t4.batch.mutations[n2].key));
      }
      return e2;
    }(e))).next(() => n.localDocuments.getDocuments(t3, s));
  });
}
function So(t2) {
  const e = K(t2);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t3) => e.Vs.getLastRemoteSnapshotVersion(t3));
}
function Do(t2, e) {
  const n = K(t2), s = e.snapshotVersion;
  let i = n.$i;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t3) => {
    const r = n.Ui.newChangeBuffer({
      trackRemovals: true
    });
    i = n.$i;
    const o = [];
    e.targetChanges.forEach((r2, u2) => {
      const c2 = i.get(u2);
      if (!c2)
        return;
      o.push(n.Vs.removeMatchingKeys(t3, r2.removedDocuments, u2).next(() => n.Vs.addMatchingKeys(t3, r2.addedDocuments, u2)));
      let a = c2.withSequenceNumber(t3.currentSequenceNumber);
      e.targetMismatches.has(u2) ? a = a.withResumeToken(Xt.EMPTY_BYTE_STRING, ct.min()).withLastLimboFreeSnapshotVersion(ct.min()) : r2.resumeToken.approximateByteSize() > 0 && (a = a.withResumeToken(r2.resumeToken, s)), i = i.insert(u2, a), function(t4, e2, n2) {
        if (0 === t4.resumeToken.approximateByteSize())
          return true;
        if (e2.snapshotVersion.toMicroseconds() - t4.snapshotVersion.toMicroseconds() >= 3e8)
          return true;
        return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
      }(c2, a, r2) && o.push(n.Vs.updateTargetData(t3, a));
    });
    let u = cs(), c = gs();
    if (e.documentUpdates.forEach((s2) => {
      e.resolvedLimboDocuments.has(s2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t3, s2));
    }), o.push(Co(t3, r, e.documentUpdates).next((t4) => {
      u = t4.Gi, c = t4.Qi;
    })), !s.isEqual(ct.min())) {
      const e2 = n.Vs.getLastRemoteSnapshotVersion(t3).next((e3) => n.Vs.setTargetsMetadata(t3, t3.currentSequenceNumber, s));
      o.push(e2);
    }
    return Vt.waitFor(o).next(() => r.apply(t3)).next(() => n.localDocuments.getLocalViewOfDocuments(t3, u, c)).next(() => u);
  }).then((t3) => (n.$i = i, t3));
}
function Co(t2, e, n) {
  let s = gs(), i = gs();
  return n.forEach((t3) => s = s.add(t3)), e.getEntries(t2, s).next((t3) => {
    let s2 = cs();
    return n.forEach((n2, r) => {
      const o = t3.get(n2);
      r.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), r.isNoDocument() && r.version.isEqual(ct.min()) ? (e.removeEntry(n2, r.readTime), s2 = s2.insert(n2, r)) : !o.isValidDocument() || r.version.compareTo(o.version) > 0 || 0 === r.version.compareTo(o.version) && o.hasPendingWrites ? (e.addEntry(r), s2 = s2.insert(n2, r)) : O("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", r.version);
    }), {
      Gi: s2,
      Qi: i
    };
  });
}
function xo(t2, e) {
  const n = K(t2);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (t3) => (void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t3, e)));
}
function No(t2, e) {
  const n = K(t2);
  return n.persistence.runTransaction("Allocate target", "readwrite", (t3) => {
    let s;
    return n.Vs.getTargetData(t3, e).next((i) => i ? (s = i, Vt.resolve(s)) : n.Vs.allocateTargetId(t3).next((i2) => (s = new qi(e, i2, 0, t3.currentSequenceNumber), n.Vs.addTargetData(t3, s).next(() => s))));
  }).then((t3) => {
    const s = n.$i.get(t3.targetId);
    return (null === s || t3.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.$i = n.$i.insert(t3.targetId, t3), n.Bi.set(e, t3.targetId)), t3;
  });
}
async function ko(t2, e, n) {
  const s = K(t2), i = s.$i.get(e), r = n ? "readwrite" : "readwrite-primary";
  try {
    n || await s.persistence.runTransaction("Release target", r, (t3) => s.persistence.referenceDelegate.removeTarget(t3, i));
  } catch (t3) {
    if (!Nt(t3))
      throw t3;
    O("LocalStore", `Failed to update sequence numbers for target ${e}: ${t3}`);
  }
  s.$i = s.$i.remove(e), s.Bi.delete(i.target);
}
function Mo(t2, e, n) {
  const s = K(t2);
  let i = ct.min(), r = gs();
  return s.persistence.runTransaction("Execute query", "readonly", (t3) => function(t4, e2, n2) {
    const s2 = K(t4), i2 = s2.Bi.get(n2);
    return void 0 !== i2 ? Vt.resolve(s2.$i.get(i2)) : s2.Vs.getTargetData(e2, n2);
  }(s, t3, dn(e)).next((e2) => {
    if (e2)
      return i = e2.lastLimboFreeSnapshotVersion, s.Vs.getMatchingKeysForTargetId(t3, e2.targetId).next((t4) => {
        r = t4;
      });
  }).next(() => s.Fi.getDocumentsMatchingQuery(t3, e, n ? i : ct.min(), n ? r : gs())).next((t4) => ($o(s, pn(e), t4), {
    documents: t4,
    ji: r
  })));
}
function Oo(t2, e) {
  const n = K(t2), s = K(n.Vs), i = n.$i.get(e);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (t3) => s.te(t3, e).next((t4) => t4 ? t4.target : null));
}
function Fo(t2, e) {
  const n = K(t2), s = n.Li.get(e) || ct.min();
  return n.persistence.runTransaction("Get new document changes", "readonly", (t3) => n.Ui.getAllFromCollectionGroup(
    t3,
    e,
    Tt(s, -1),
    Number.MAX_SAFE_INTEGER
  )).then((t3) => ($o(n, e, t3), t3));
}
function $o(t2, e, n) {
  let s = ct.min();
  n.forEach((t3, e2) => {
    e2.readTime.compareTo(s) > 0 && (s = e2.readTime);
  }), t2.Li.set(e, s);
}
async function Bo(t2, e, n, s) {
  const i = K(t2);
  let r = gs(), o = cs();
  for (const t3 of n) {
    const n2 = e.Wi(t3.metadata.name);
    t3.document && (r = r.add(n2));
    const s2 = e.zi(t3);
    s2.setReadTime(e.Hi(t3.metadata.readTime)), o = o.insert(n2, s2);
  }
  const u = i.Ui.newChangeBuffer({
    trackRemovals: true
  }), c = await No(i, function(t3) {
    return dn(un(ht.fromString(`__bundle__/docs/${t3}`)));
  }(s));
  return i.persistence.runTransaction("Apply bundle documents", "readwrite", (t3) => Co(t3, u, o).next((e2) => (u.apply(t3), e2)).next((e2) => i.Vs.removeMatchingKeysForTargetId(t3, c.targetId).next(() => i.Vs.addMatchingKeys(t3, r, c.targetId)).next(() => i.localDocuments.getLocalViewOfDocuments(t3, e2.Gi, e2.Qi)).next(() => e2.Gi)));
}
async function Lo(t2, e, n = gs()) {
  const s = await No(t2, dn(Xi(e.bundledQuery))), i = K(t2);
  return i.persistence.runTransaction("Save named query", "readwrite", (t3) => {
    const r = Ms(e.readTime);
    if (s.snapshotVersion.compareTo(r) >= 0)
      return i.Ds.saveNamedQuery(t3, e);
    const o = s.withResumeToken(Xt.EMPTY_BYTE_STRING, r);
    return i.$i = i.$i.insert(o.targetId, o), i.Vs.updateTargetData(t3, o).next(() => i.Vs.removeMatchingKeysForTargetId(t3, s.targetId)).next(() => i.Vs.addMatchingKeys(t3, n, s.targetId)).next(() => i.Ds.saveNamedQuery(t3, e));
  });
}
function Uo(t2, e) {
  return `firestore_clients_${t2}_${e}`;
}
function qo(t2, e, n) {
  let s = `firestore_mutations_${t2}_${n}`;
  return e.isAuthenticated() && (s += `_${e.uid}`), s;
}
function Ko(t2, e) {
  return `firestore_targets_${t2}_${e}`;
}
class Go {
  constructor(t2, e, n, s) {
    this.user = t2, this.batchId = e, this.state = n, this.error = s;
  }
  static Ji(t2, e, n) {
    const s = JSON.parse(n);
    let i, r = "object" == typeof s && -1 !== ["pending", "acknowledged", "rejected"].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error);
    return r && s.error && (r = "string" == typeof s.error.message && "string" == typeof s.error.code, r && (i = new Q(s.error.code, s.error.message))), r ? new Go(t2, e, s.state, i) : (F("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n}`), null);
  }
  Yi() {
    const t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }
}
class Qo {
  constructor(t2, e, n) {
    this.targetId = t2, this.state = e, this.error = n;
  }
  static Ji(t2, e) {
    const n = JSON.parse(e);
    let s, i = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
    return i && n.error && (i = "string" == typeof n.error.message && "string" == typeof n.error.code, i && (s = new Q(n.error.code, n.error.message))), i ? new Qo(t2, n.state, s) : (F("SharedClientState", `Failed to parse target state for ID '${t2}': ${e}`), null);
  }
  Yi() {
    const t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }
}
class jo {
  constructor(t2, e) {
    this.clientId = t2, this.activeTargetIds = e;
  }
  static Ji(t2, e) {
    const n = JSON.parse(e);
    let s = "object" == typeof n && n.activeTargetIds instanceof Array, i = ps();
    for (let t3 = 0; s && t3 < n.activeTargetIds.length; ++t3)
      s = he(n.activeTargetIds[t3]), i = i.add(n.activeTargetIds[t3]);
    return s ? new jo(t2, i) : (F("SharedClientState", `Failed to parse client data for instance '${t2}': ${e}`), null);
  }
}
class Wo {
  constructor(t2, e) {
    this.clientId = t2, this.onlineState = e;
  }
  static Ji(t2) {
    const e = JSON.parse(t2);
    return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new Wo(e.clientId, e.onlineState) : (F("SharedClientState", `Failed to parse online state: ${t2}`), null);
  }
}
class zo {
  constructor() {
    this.activeTargetIds = ps();
  }
  Xi(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }
  Zi(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }
  Yi() {
    const t2 = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }
}
class Ho {
  constructor(t2, e, n, s, i) {
    this.window = t2, this.js = e, this.persistenceKey = n, this.tr = s, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.er = this.nr.bind(this), this.sr = new Gt(it), this.started = false, this.ir = [];
    const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.rr = Uo(this.persistenceKey, this.tr), this.ur = function(t3) {
      return `firestore_sequence_number_${t3}`;
    }(this.persistenceKey), this.sr = this.sr.insert(this.tr, new zo()), this.cr = new RegExp(`^firestore_clients_${r}_([^_]*)$`), this.ar = new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`), this.hr = new RegExp(`^firestore_targets_${r}_(\\d+)$`), this.lr = function(t3) {
      return `firestore_online_state_${t3}`;
    }(this.persistenceKey), this.dr = function(t3) {
      return `firestore_bundle_loaded_v2_${t3}`;
    }(this.persistenceKey), this.window.addEventListener("storage", this.er);
  }
  static V(t2) {
    return !(!t2 || !t2.localStorage);
  }
  async start() {
    const t2 = await this.syncEngine.Ri();
    for (const e2 of t2) {
      if (e2 === this.tr)
        continue;
      const t3 = this.getItem(Uo(this.persistenceKey, e2));
      if (t3) {
        const n = jo.Ji(e2, t3);
        n && (this.sr = this.sr.insert(n.clientId, n));
      }
    }
    this._r();
    const e = this.storage.getItem(this.lr);
    if (e) {
      const t3 = this.wr(e);
      t3 && this.mr(t3);
    }
    for (const t3 of this.ir)
      this.nr(t3);
    this.ir = [], this.window.addEventListener("pagehide", () => this.shutdown()), this.started = true;
  }
  writeSequenceNumber(t2) {
    this.setItem(this.ur, JSON.stringify(t2));
  }
  getAllActiveQueryTargets() {
    return this.gr(this.sr);
  }
  isActiveQueryTarget(t2) {
    let e = false;
    return this.sr.forEach((n, s) => {
      s.activeTargetIds.has(t2) && (e = true);
    }), e;
  }
  addPendingMutation(t2) {
    this.yr(t2, "pending");
  }
  updateMutationState(t2, e, n) {
    this.yr(t2, e, n), this.pr(t2);
  }
  addLocalQueryTarget(t2) {
    let e = "not-current";
    if (this.isActiveQueryTarget(t2)) {
      const n = this.storage.getItem(Ko(this.persistenceKey, t2));
      if (n) {
        const s = Qo.Ji(t2, n);
        s && (e = s.state);
      }
    }
    return this.Ir.Xi(t2), this._r(), e;
  }
  removeLocalQueryTarget(t2) {
    this.Ir.Zi(t2), this._r();
  }
  isLocalQueryTarget(t2) {
    return this.Ir.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    this.removeItem(Ko(this.persistenceKey, t2));
  }
  updateQueryState(t2, e, n) {
    this.Tr(t2, e, n);
  }
  handleUserChange(t2, e, n) {
    e.forEach((t3) => {
      this.pr(t3);
    }), this.currentUser = t2, n.forEach((t3) => {
      this.addPendingMutation(t3);
    });
  }
  setOnlineState(t2) {
    this.Er(t2);
  }
  notifyBundleLoaded(t2) {
    this.Ar(t2);
  }
  shutdown() {
    this.started && (this.window.removeEventListener("storage", this.er), this.removeItem(this.rr), this.started = false);
  }
  getItem(t2) {
    const e = this.storage.getItem(t2);
    return O("SharedClientState", "READ", t2, e), e;
  }
  setItem(t2, e) {
    O("SharedClientState", "SET", t2, e), this.storage.setItem(t2, e);
  }
  removeItem(t2) {
    O("SharedClientState", "REMOVE", t2), this.storage.removeItem(t2);
  }
  nr(t2) {
    const e = t2;
    if (e.storageArea === this.storage) {
      if (O("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.rr)
        return void F("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.js.enqueueRetryable(async () => {
        if (this.started) {
          if (null !== e.key) {
            if (this.cr.test(e.key)) {
              if (null == e.newValue) {
                const t3 = this.Rr(e.key);
                return this.br(t3, null);
              }
              {
                const t3 = this.Pr(e.key, e.newValue);
                if (t3)
                  return this.br(t3.clientId, t3);
              }
            } else if (this.ar.test(e.key)) {
              if (null !== e.newValue) {
                const t3 = this.vr(e.key, e.newValue);
                if (t3)
                  return this.Vr(t3);
              }
            } else if (this.hr.test(e.key)) {
              if (null !== e.newValue) {
                const t3 = this.Sr(e.key, e.newValue);
                if (t3)
                  return this.Dr(t3);
              }
            } else if (e.key === this.lr) {
              if (null !== e.newValue) {
                const t3 = this.wr(e.newValue);
                if (t3)
                  return this.mr(t3);
              }
            } else if (e.key === this.ur) {
              const t3 = function(t4) {
                let e2 = Lt.ot;
                if (null != t4)
                  try {
                    const n = JSON.parse(t4);
                    U("number" == typeof n), e2 = n;
                  } catch (t5) {
                    F("SharedClientState", "Failed to read sequence number from WebStorage", t5);
                  }
                return e2;
              }(e.newValue);
              t3 !== Lt.ot && this.sequenceNumberHandler(t3);
            } else if (e.key === this.dr) {
              const t3 = this.Cr(e.newValue);
              await Promise.all(t3.map((t4) => this.syncEngine.Nr(t4)));
            }
          }
        } else
          this.ir.push(e);
      });
    }
  }
  get Ir() {
    return this.sr.get(this.tr);
  }
  _r() {
    this.setItem(this.rr, this.Ir.Yi());
  }
  yr(t2, e, n) {
    const s = new Go(this.currentUser, t2, e, n), i = qo(this.persistenceKey, this.currentUser, t2);
    this.setItem(i, s.Yi());
  }
  pr(t2) {
    const e = qo(this.persistenceKey, this.currentUser, t2);
    this.removeItem(e);
  }
  Er(t2) {
    const e = {
      clientId: this.tr,
      onlineState: t2
    };
    this.storage.setItem(this.lr, JSON.stringify(e));
  }
  Tr(t2, e, n) {
    const s = Ko(this.persistenceKey, t2), i = new Qo(t2, e, n);
    this.setItem(s, i.Yi());
  }
  Ar(t2) {
    const e = JSON.stringify(Array.from(t2));
    this.setItem(this.dr, e);
  }
  Rr(t2) {
    const e = this.cr.exec(t2);
    return e ? e[1] : null;
  }
  Pr(t2, e) {
    const n = this.Rr(t2);
    return jo.Ji(n, e);
  }
  vr(t2, e) {
    const n = this.ar.exec(t2), s = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
    return Go.Ji(new C(i), s, e);
  }
  Sr(t2, e) {
    const n = this.hr.exec(t2), s = Number(n[1]);
    return Qo.Ji(s, e);
  }
  wr(t2) {
    return Wo.Ji(t2);
  }
  Cr(t2) {
    return JSON.parse(t2);
  }
  async Vr(t2) {
    if (t2.user.uid === this.currentUser.uid)
      return this.syncEngine.kr(t2.batchId, t2.state, t2.error);
    O("SharedClientState", `Ignoring mutation for non-active user ${t2.user.uid}`);
  }
  Dr(t2) {
    return this.syncEngine.Mr(t2.targetId, t2.state, t2.error);
  }
  br(t2, e) {
    const n = e ? this.sr.insert(t2, e) : this.sr.remove(t2), s = this.gr(this.sr), i = this.gr(n), r = [], o = [];
    return i.forEach((t3) => {
      s.has(t3) || r.push(t3);
    }), s.forEach((t3) => {
      i.has(t3) || o.push(t3);
    }), this.syncEngine.Or(r, o).then(() => {
      this.sr = n;
    });
  }
  mr(t2) {
    this.sr.get(t2.clientId) && this.onlineStateHandler(t2.onlineState);
  }
  gr(t2) {
    let e = ps();
    return t2.forEach((t3, n) => {
      e = e.unionWith(n.activeTargetIds);
    }), e;
  }
}
class Jo {
  constructor() {
    this.Fr = new zo(), this.$r = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t2) {
  }
  updateMutationState(t2, e, n) {
  }
  addLocalQueryTarget(t2) {
    return this.Fr.Xi(t2), this.$r[t2] || "not-current";
  }
  updateQueryState(t2, e, n) {
    this.$r[t2] = e;
  }
  removeLocalQueryTarget(t2) {
    this.Fr.Zi(t2);
  }
  isLocalQueryTarget(t2) {
    return this.Fr.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    delete this.$r[t2];
  }
  getAllActiveQueryTargets() {
    return this.Fr.activeTargetIds;
  }
  isActiveQueryTarget(t2) {
    return this.Fr.activeTargetIds.has(t2);
  }
  start() {
    return this.Fr = new zo(), Promise.resolve();
  }
  handleUserChange(t2, e, n) {
  }
  setOnlineState(t2) {
  }
  shutdown() {
  }
  writeSequenceNumber(t2) {
  }
  notifyBundleLoaded(t2) {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo {
  Br(t2) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo {
  constructor() {
    this.Lr = () => this.Ur(), this.qr = () => this.Kr(), this.Gr = [], this.Qr();
  }
  Br(t2) {
    this.Gr.push(t2);
  }
  shutdown() {
    window.removeEventListener("online", this.Lr), window.removeEventListener("offline", this.qr);
  }
  Qr() {
    window.addEventListener("online", this.Lr), window.addEventListener("offline", this.qr);
  }
  Ur() {
    O("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t2 of this.Gr)
      t2(0);
  }
  Kr() {
    O("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t2 of this.Gr)
      t2(1);
  }
  static V() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tu {
  constructor(t2) {
    this.jr = t2.jr, this.Wr = t2.Wr;
  }
  zr(t2) {
    this.Hr = t2;
  }
  Jr(t2) {
    this.Yr = t2;
  }
  onMessage(t2) {
    this.Xr = t2;
  }
  close() {
    this.Wr();
  }
  send(t2) {
    this.jr(t2);
  }
  Zr() {
    this.Hr();
  }
  eo(t2) {
    this.Yr(t2);
  }
  no(t2) {
    this.Xr(t2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu extends class {
  constructor(t2) {
    this.databaseInfo = t2, this.databaseId = t2.databaseId;
    const e = t2.ssl ? "https" : "http";
    this.so = e + "://" + t2.host, this.io = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  ro(t2, e, n, s, i) {
    const r = this.oo(t2, e);
    O("RestConnection", "Sending: ", r, n);
    const o = {};
    return this.uo(o, s, i), this.co(t2, r, o, n).then((t3) => (O("RestConnection", "Received: ", t3), t3), (e2) => {
      throw $("RestConnection", `${t2} failed with error: `, e2, "url: ", r, "request:", n), e2;
    });
  }
  ao(t2, e, n, s, i, r) {
    return this.ro(t2, e, n, s, i);
  }
  uo(t2, e, n) {
    t2["X-Goog-Api-Client"] = "gl-js/ fire/" + x, t2["Content-Type"] = "text/plain", this.databaseInfo.appId && (t2["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, n2) => t2[n2] = e2), n && n.headers.forEach((e2, n2) => t2[n2] = e2);
  }
  oo(t2, e) {
    const n = Zo[t2];
    return `${this.so}/v1/${e}:${n}`;
  }
} {
  constructor(t2) {
    super(t2), this.forceLongPolling = t2.forceLongPolling, this.autoDetectLongPolling = t2.autoDetectLongPolling, this.useFetchStreams = t2.useFetchStreams;
  }
  co(t2, e, n, s) {
    return new Promise((i, r) => {
      const o = new XhrIo();
      o.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (o.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const e2 = o.getResponseJson();
              O("Connection", "XHR received:", JSON.stringify(e2)), i(e2);
              break;
            case ErrorCode.TIMEOUT:
              O("Connection", 'RPC "' + t2 + '" timed out'), r(new Q(G.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n2 = o.getStatus();
              if (O("Connection", 'RPC "' + t2 + '" failed with status:', n2, "response text:", o.getResponseText()), n2 > 0) {
                const t3 = o.getResponseJson().error;
                if (t3 && t3.status && t3.message) {
                  const e3 = function(t4) {
                    const e4 = t4.toLowerCase().replace(/_/g, "-");
                    return Object.values(G).indexOf(e4) >= 0 ? e4 : G.UNKNOWN;
                  }(t3.status);
                  r(new Q(e3, t3.message));
                } else
                  r(new Q(G.UNKNOWN, "Server responded with status " + o.getStatus()));
              } else
                r(new Q(G.UNAVAILABLE, "Connection failed."));
              break;
            default:
              L();
          }
        } finally {
          O("Connection", 'RPC "' + t2 + '" completed.');
        }
      });
      const u = JSON.stringify(s);
      o.send(e, "POST", u, n, 15);
    });
  }
  ho(t2, e, n) {
    const s = [this.so, "/", "google.firestore.v1.Firestore", "/", t2, "/channel"], i = createWebChannelTransport(), r = getStatEventTarget(), o = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    this.useFetchStreams && (o.xmlHttpFactory = new FetchXmlHttpFactory({})), this.uo(o.initMessageHeaders, e, n), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
    const u = s.join("");
    O("Connection", "Creating WebChannel: " + u, o);
    const c = i.createWebChannel(u, o);
    let a = false, h = false;
    const l2 = new tu({
      jr: (t3) => {
        h ? O("Connection", "Not sending because WebChannel is closed:", t3) : (a || (O("Connection", "Opening WebChannel transport."), c.open(), a = true), O("Connection", "WebChannel sending:", t3), c.send(t3));
      },
      Wr: () => c.close()
    }), y2 = (t3, e2, n2) => {
      t3.listen(e2, (t4) => {
        try {
          n2(t4);
        } catch (t5) {
          setTimeout(() => {
            throw t5;
          }, 0);
        }
      });
    };
    return y2(c, WebChannel.EventType.OPEN, () => {
      h || O("Connection", "WebChannel transport opened.");
    }), y2(c, WebChannel.EventType.CLOSE, () => {
      h || (h = true, O("Connection", "WebChannel transport closed"), l2.eo());
    }), y2(c, WebChannel.EventType.ERROR, (t3) => {
      h || (h = true, $("Connection", "WebChannel transport errored:", t3), l2.eo(new Q(G.UNAVAILABLE, "The operation could not be completed")));
    }), y2(c, WebChannel.EventType.MESSAGE, (t3) => {
      var e2;
      if (!h) {
        const n2 = t3.data[0];
        U(!!n2);
        const s2 = n2, i2 = s2.error || (null === (e2 = s2[0]) || void 0 === e2 ? void 0 : e2.error);
        if (i2) {
          O("Connection", "WebChannel received error:", i2);
          const t4 = i2.status;
          let e3 = function(t5) {
            const e4 = ns[t5];
            if (void 0 !== e4)
              return rs(e4);
          }(t4), n3 = i2.message;
          void 0 === e3 && (e3 = G.INTERNAL, n3 = "Unknown error status: " + t4 + " with message " + i2.message), h = true, l2.eo(new Q(e3, n3)), c.close();
        } else
          O("Connection", "WebChannel received:", n2), l2.no(n2);
      }
    }), y2(r, Event.STAT_EVENT, (t3) => {
      t3.stat === Stat.PROXY ? O("Connection", "Detected buffering proxy") : t3.stat === Stat.NOPROXY && O("Connection", "Detected no buffering proxy");
    }), setTimeout(() => {
      l2.Zr();
    }, 0), l2;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nu() {
  return "undefined" != typeof window ? window : null;
}
function su() {
  return "undefined" != typeof document ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function iu(t2) {
  return new Cs(t2, true);
}
class ru {
  constructor(t2, e, n = 1e3, s = 1.5, i = 6e4) {
    this.js = t2, this.timerId = e, this.lo = n, this.fo = s, this._o = i, this.wo = 0, this.mo = null, this.yo = Date.now(), this.reset();
  }
  reset() {
    this.wo = 0;
  }
  po() {
    this.wo = this._o;
  }
  Io(t2) {
    this.cancel();
    const e = Math.floor(this.wo + this.To()), n = Math.max(0, Date.now() - this.yo), s = Math.max(0, e - n);
    s > 0 && O("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.mo = this.js.enqueueAfterDelay(this.timerId, s, () => (this.yo = Date.now(), t2())), this.wo *= this.fo, this.wo < this.lo && (this.wo = this.lo), this.wo > this._o && (this.wo = this._o);
  }
  Eo() {
    null !== this.mo && (this.mo.skipDelay(), this.mo = null);
  }
  cancel() {
    null !== this.mo && (this.mo.cancel(), this.mo = null);
  }
  To() {
    return (Math.random() - 0.5) * this.wo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ou {
  constructor(t2, e, n, s, i, r, o, u) {
    this.js = t2, this.Ao = n, this.Ro = s, this.bo = i, this.authCredentialsProvider = r, this.appCheckCredentialsProvider = o, this.listener = u, this.state = 0, this.Po = 0, this.vo = null, this.Vo = null, this.stream = null, this.So = new ru(t2, e);
  }
  Do() {
    return 1 === this.state || 5 === this.state || this.Co();
  }
  Co() {
    return 2 === this.state || 3 === this.state;
  }
  start() {
    4 !== this.state ? this.auth() : this.xo();
  }
  async stop() {
    this.Do() && await this.close(0);
  }
  No() {
    this.state = 0, this.So.reset();
  }
  ko() {
    this.Co() && null === this.vo && (this.vo = this.js.enqueueAfterDelay(this.Ao, 6e4, () => this.Mo()));
  }
  Oo(t2) {
    this.Fo(), this.stream.send(t2);
  }
  async Mo() {
    if (this.Co())
      return this.close(0);
  }
  Fo() {
    this.vo && (this.vo.cancel(), this.vo = null);
  }
  $o() {
    this.Vo && (this.Vo.cancel(), this.Vo = null);
  }
  async close(t2, e) {
    this.Fo(), this.$o(), this.So.cancel(), this.Po++, 4 !== t2 ? this.So.reset() : e && e.code === G.RESOURCE_EXHAUSTED ? (F(e.toString()), F("Using maximum backoff delay to prevent overloading the backend."), this.So.po()) : e && e.code === G.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.Bo(), this.stream.close(), this.stream = null), this.state = t2, await this.listener.Jr(e);
  }
  Bo() {
  }
  auth() {
    this.state = 1;
    const t2 = this.Lo(this.Po), e = this.Po;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t3, n]) => {
      this.Po === e && this.Uo(t3, n);
    }, (e2) => {
      t2(() => {
        const t3 = new Q(G.UNKNOWN, "Fetching auth token failed: " + e2.message);
        return this.qo(t3);
      });
    });
  }
  Uo(t2, e) {
    const n = this.Lo(this.Po);
    this.stream = this.Ko(t2, e), this.stream.zr(() => {
      n(() => (this.state = 2, this.Vo = this.js.enqueueAfterDelay(this.Ro, 1e4, () => (this.Co() && (this.state = 3), Promise.resolve())), this.listener.zr()));
    }), this.stream.Jr((t3) => {
      n(() => this.qo(t3));
    }), this.stream.onMessage((t3) => {
      n(() => this.onMessage(t3));
    });
  }
  xo() {
    this.state = 5, this.So.Io(async () => {
      this.state = 0, this.start();
    });
  }
  qo(t2) {
    return O("PersistentStream", `close with error: ${t2}`), this.stream = null, this.close(4, t2);
  }
  Lo(t2) {
    return (e) => {
      this.js.enqueueAndForget(() => this.Po === t2 ? e() : (O("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class uu extends ou {
  constructor(t2, e, n, s, i, r) {
    super(t2, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, s, r), this.wt = i;
  }
  Ko(t2, e) {
    return this.bo.ho("Listen", t2, e);
  }
  onMessage(t2) {
    this.So.reset();
    const e = Ws(this.wt, t2), n = function(t3) {
      if (!("targetChange" in t3))
        return ct.min();
      const e2 = t3.targetChange;
      return e2.targetIds && e2.targetIds.length ? ct.min() : e2.readTime ? Ms(e2.readTime) : ct.min();
    }(t2);
    return this.listener.Go(e, n);
  }
  Qo(t2) {
    const e = {};
    e.database = qs(this.wt), e.addTarget = function(t3, e2) {
      let n2;
      const s = e2.target;
      return n2 = Le(s) ? {
        documents: Ys(t3, s)
      } : {
        query: Xs(t3, s)
      }, n2.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0 ? n2.resumeToken = Ns(t3, e2.resumeToken) : e2.snapshotVersion.compareTo(ct.min()) > 0 && (n2.readTime = xs(t3, e2.snapshotVersion.toTimestamp())), n2;
    }(this.wt, t2);
    const n = ti(this.wt, t2);
    n && (e.labels = n), this.Oo(e);
  }
  jo(t2) {
    const e = {};
    e.database = qs(this.wt), e.removeTarget = t2, this.Oo(e);
  }
}
class cu extends ou {
  constructor(t2, e, n, s, i, r) {
    super(t2, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n, s, r), this.wt = i, this.Wo = false;
  }
  get zo() {
    return this.Wo;
  }
  start() {
    this.Wo = false, this.lastStreamToken = void 0, super.start();
  }
  Bo() {
    this.Wo && this.Ho([]);
  }
  Ko(t2, e) {
    return this.bo.ho("Write", t2, e);
  }
  onMessage(t2) {
    if (U(!!t2.streamToken), this.lastStreamToken = t2.streamToken, this.Wo) {
      this.So.reset();
      const e = Js(t2.writeResults, t2.commitTime), n = Ms(t2.commitTime);
      return this.listener.Jo(n, e);
    }
    return U(!t2.writeResults || 0 === t2.writeResults.length), this.Wo = true, this.listener.Yo();
  }
  Xo() {
    const t2 = {};
    t2.database = qs(this.wt), this.Oo(t2);
  }
  Ho(t2) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t2.map((t3) => zs(this.wt, t3))
    };
    this.Oo(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au extends class {
} {
  constructor(t2, e, n, s) {
    super(), this.authCredentials = t2, this.appCheckCredentials = e, this.bo = n, this.wt = s, this.Zo = false;
  }
  tu() {
    if (this.Zo)
      throw new Q(G.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  ro(t2, e, n) {
    return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.bo.ro(t2, e, n, s, i)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === G.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new Q(G.UNKNOWN, t3.toString());
    });
  }
  ao(t2, e, n, s) {
    return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, r]) => this.bo.ao(t2, e, n, i, r, s)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === G.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new Q(G.UNKNOWN, t3.toString());
    });
  }
  terminate() {
    this.Zo = true;
  }
}
class hu {
  constructor(t2, e) {
    this.asyncQueue = t2, this.onlineStateHandler = e, this.state = "Unknown", this.eu = 0, this.nu = null, this.su = true;
  }
  iu() {
    0 === this.eu && (this.ru("Unknown"), this.nu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.nu = null, this.ou("Backend didn't respond within 10 seconds."), this.ru("Offline"), Promise.resolve())));
  }
  uu(t2) {
    "Online" === this.state ? this.ru("Unknown") : (this.eu++, this.eu >= 1 && (this.cu(), this.ou(`Connection failed 1 times. Most recent error: ${t2.toString()}`), this.ru("Offline")));
  }
  set(t2) {
    this.cu(), this.eu = 0, "Online" === t2 && (this.su = false), this.ru(t2);
  }
  ru(t2) {
    t2 !== this.state && (this.state = t2, this.onlineStateHandler(t2));
  }
  ou(t2) {
    const e = `Could not reach Cloud Firestore backend. ${t2}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.su ? (F(e), this.su = false) : O("OnlineStateTracker", e);
  }
  cu() {
    null !== this.nu && (this.nu.cancel(), this.nu = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu {
  constructor(t2, e, n, s, i) {
    this.localStore = t2, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.au = [], this.hu = /* @__PURE__ */ new Map(), this.lu = /* @__PURE__ */ new Set(), this.fu = [], this.du = i, this.du.Br((t3) => {
      n.enqueueAndForget(async () => {
        Iu(this) && (O("RemoteStore", "Restarting streams for network reachability change."), await async function(t4) {
          const e2 = K(t4);
          e2.lu.add(4), await du(e2), e2._u.set("Unknown"), e2.lu.delete(4), await fu(e2);
        }(this));
      });
    }), this._u = new hu(n, s);
  }
}
async function fu(t2) {
  if (Iu(t2))
    for (const e of t2.fu)
      await e(true);
}
async function du(t2) {
  for (const e of t2.fu)
    await e(false);
}
function _u(t2, e) {
  const n = K(t2);
  n.hu.has(e.targetId) || (n.hu.set(e.targetId, e), pu(n) ? yu(n) : $u(n).Co() && mu(n, e));
}
function wu(t2, e) {
  const n = K(t2), s = $u(n);
  n.hu.delete(e), s.Co() && gu(n, e), 0 === n.hu.size && (s.Co() ? s.ko() : Iu(n) && n._u.set("Unknown"));
}
function mu(t2, e) {
  t2.wu.Nt(e.targetId), $u(t2).Qo(e);
}
function gu(t2, e) {
  t2.wu.Nt(e), $u(t2).jo(e);
}
function yu(t2) {
  t2.wu = new Ps({
    getRemoteKeysForTarget: (e) => t2.remoteSyncer.getRemoteKeysForTarget(e),
    te: (e) => t2.hu.get(e) || null
  }), $u(t2).start(), t2._u.iu();
}
function pu(t2) {
  return Iu(t2) && !$u(t2).Do() && t2.hu.size > 0;
}
function Iu(t2) {
  return 0 === K(t2).lu.size;
}
function Tu(t2) {
  t2.wu = void 0;
}
async function Eu(t2) {
  t2.hu.forEach((e, n) => {
    mu(t2, e);
  });
}
async function Au(t2, e) {
  Tu(t2), pu(t2) ? (t2._u.uu(e), yu(t2)) : t2._u.set("Unknown");
}
async function Ru(t2, e, n) {
  if (t2._u.set("Online"), e instanceof Rs && 2 === e.state && e.cause)
    try {
      await async function(t3, e2) {
        const n2 = e2.cause;
        for (const s of e2.targetIds)
          t3.hu.has(s) && (await t3.remoteSyncer.rejectListen(s, n2), t3.hu.delete(s), t3.wu.removeTarget(s));
      }(t2, e);
    } catch (n2) {
      O("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n2), await bu(t2, n2);
    }
  else if (e instanceof Es ? t2.wu.Ut(e) : e instanceof As ? t2.wu.zt(e) : t2.wu.Gt(e), !n.isEqual(ct.min()))
    try {
      const e2 = await So(t2.localStore);
      n.compareTo(e2) >= 0 && await function(t3, e3) {
        const n2 = t3.wu.Yt(e3);
        return n2.targetChanges.forEach((n3, s) => {
          if (n3.resumeToken.approximateByteSize() > 0) {
            const i = t3.hu.get(s);
            i && t3.hu.set(s, i.withResumeToken(n3.resumeToken, e3));
          }
        }), n2.targetMismatches.forEach((e4) => {
          const n3 = t3.hu.get(e4);
          if (!n3)
            return;
          t3.hu.set(e4, n3.withResumeToken(Xt.EMPTY_BYTE_STRING, n3.snapshotVersion)), gu(t3, e4);
          const s = new qi(n3.target, e4, 1, n3.sequenceNumber);
          mu(t3, s);
        }), t3.remoteSyncer.applyRemoteEvent(n2);
      }(t2, n);
    } catch (e2) {
      O("RemoteStore", "Failed to raise snapshot:", e2), await bu(t2, e2);
    }
}
async function bu(t2, e, n) {
  if (!Nt(e))
    throw e;
  t2.lu.add(1), await du(t2), t2._u.set("Offline"), n || (n = () => So(t2.localStore)), t2.asyncQueue.enqueueRetryable(async () => {
    O("RemoteStore", "Retrying IndexedDB access"), await n(), t2.lu.delete(1), await fu(t2);
  });
}
function Pu(t2, e) {
  return e().catch((n) => bu(t2, n, e));
}
async function vu(t2) {
  const e = K(t2), n = Bu(e);
  let s = e.au.length > 0 ? e.au[e.au.length - 1].batchId : -1;
  for (; Vu(e); )
    try {
      const t3 = await xo(e.localStore, s);
      if (null === t3) {
        0 === e.au.length && n.ko();
        break;
      }
      s = t3.batchId, Su(e, t3);
    } catch (t3) {
      await bu(e, t3);
    }
  Du(e) && Cu(e);
}
function Vu(t2) {
  return Iu(t2) && t2.au.length < 10;
}
function Su(t2, e) {
  t2.au.push(e);
  const n = Bu(t2);
  n.Co() && n.zo && n.Ho(e.mutations);
}
function Du(t2) {
  return Iu(t2) && !Bu(t2).Do() && t2.au.length > 0;
}
function Cu(t2) {
  Bu(t2).start();
}
async function xu(t2) {
  Bu(t2).Xo();
}
async function Nu(t2) {
  const e = Bu(t2);
  for (const n of t2.au)
    e.Ho(n.mutations);
}
async function ku(t2, e, n) {
  const s = t2.au.shift(), i = Li.from(s, e, n);
  await Pu(t2, () => t2.remoteSyncer.applySuccessfulWrite(i)), await vu(t2);
}
async function Mu(t2, e) {
  e && Bu(t2).zo && await async function(t3, e2) {
    if (n = e2.code, is(n) && n !== G.ABORTED) {
      const n2 = t3.au.shift();
      Bu(t3).No(), await Pu(t3, () => t3.remoteSyncer.rejectFailedWrite(n2.batchId, e2)), await vu(t3);
    }
    var n;
  }(t2, e), Du(t2) && Cu(t2);
}
async function Ou(t2, e) {
  const n = K(t2);
  n.asyncQueue.verifyOperationInProgress(), O("RemoteStore", "RemoteStore received new credentials");
  const s = Iu(n);
  n.lu.add(3), await du(n), s && n._u.set("Unknown"), await n.remoteSyncer.handleCredentialChange(e), n.lu.delete(3), await fu(n);
}
async function Fu(t2, e) {
  const n = K(t2);
  e ? (n.lu.delete(2), await fu(n)) : e || (n.lu.add(2), await du(n), n._u.set("Unknown"));
}
function $u(t2) {
  return t2.mu || (t2.mu = function(t3, e, n) {
    const s = K(t3);
    return s.tu(), new uu(e, s.bo, s.authCredentials, s.appCheckCredentials, s.wt, n);
  }(t2.datastore, t2.asyncQueue, {
    zr: Eu.bind(null, t2),
    Jr: Au.bind(null, t2),
    Go: Ru.bind(null, t2)
  }), t2.fu.push(async (e) => {
    e ? (t2.mu.No(), pu(t2) ? yu(t2) : t2._u.set("Unknown")) : (await t2.mu.stop(), Tu(t2));
  })), t2.mu;
}
function Bu(t2) {
  return t2.gu || (t2.gu = function(t3, e, n) {
    const s = K(t3);
    return s.tu(), new cu(e, s.bo, s.authCredentials, s.appCheckCredentials, s.wt, n);
  }(t2.datastore, t2.asyncQueue, {
    zr: xu.bind(null, t2),
    Jr: Mu.bind(null, t2),
    Yo: Nu.bind(null, t2),
    Jo: ku.bind(null, t2)
  }), t2.fu.push(async (e) => {
    e ? (t2.gu.No(), await vu(t2)) : (await t2.gu.stop(), t2.au.length > 0 && (O("RemoteStore", `Stopping write stream with ${t2.au.length} pending writes`), t2.au = []));
  })), t2.gu;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new j(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t3) => {
    });
  }
  static createAndSchedule(t2, e, n, s, i) {
    const r = Date.now() + n, o = new Lu(t2, e, r, s, i);
    return o.start(n), o;
  }
  start(t2) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t2) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Q(G.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Uu(t2, e) {
  if (F("AsyncQueue", `${e}: ${t2}`), Nt(t2))
    return new Q(G.UNAVAILABLE, `${e}: ${t2}`);
  throw t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu {
  constructor(t2) {
    this.comparator = t2 ? (e, n) => t2(e, n) || dt.comparator(e.key, n.key) : (t3, e) => dt.comparator(t3.key, e.key), this.keyedMap = hs(), this.sortedSet = new Gt(this.comparator);
  }
  static emptySet(t2) {
    return new qu(t2.comparator);
  }
  has(t2) {
    return null != this.keyedMap.get(t2);
  }
  get(t2) {
    return this.keyedMap.get(t2);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t2) {
    const e = this.keyedMap.get(t2);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t2) {
    this.sortedSet.inorderTraversal((e, n) => (t2(e), false));
  }
  add(t2) {
    const e = this.delete(t2.key);
    return e.copy(e.keyedMap.insert(t2.key, t2), e.sortedSet.insert(t2, null));
  }
  delete(t2) {
    const e = this.get(t2);
    return e ? this.copy(this.keyedMap.remove(t2), this.sortedSet.remove(e)) : this;
  }
  isEqual(t2) {
    if (!(t2 instanceof qu))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.sortedSet.getIterator(), n = t2.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (!t3.isEqual(s))
        return false;
    }
    return true;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e.toString());
    }), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }
  copy(t2, e) {
    const n = new qu();
    return n.comparator = this.comparator, n.keyedMap = t2, n.sortedSet = e, n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku {
  constructor() {
    this.yu = new Gt(dt.comparator);
  }
  track(t2) {
    const e = t2.doc.key, n = this.yu.get(e);
    n ? 0 !== t2.type && 3 === n.type ? this.yu = this.yu.insert(e, t2) : 3 === t2.type && 1 !== n.type ? this.yu = this.yu.insert(e, {
      type: n.type,
      doc: t2.doc
    }) : 2 === t2.type && 2 === n.type ? this.yu = this.yu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : 2 === t2.type && 0 === n.type ? this.yu = this.yu.insert(e, {
      type: 0,
      doc: t2.doc
    }) : 1 === t2.type && 0 === n.type ? this.yu = this.yu.remove(e) : 1 === t2.type && 2 === n.type ? this.yu = this.yu.insert(e, {
      type: 1,
      doc: n.doc
    }) : 0 === t2.type && 1 === n.type ? this.yu = this.yu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : L() : this.yu = this.yu.insert(e, t2);
  }
  pu() {
    const t2 = [];
    return this.yu.inorderTraversal((e, n) => {
      t2.push(n);
    }), t2;
  }
}
class Gu {
  constructor(t2, e, n, s, i, r, o, u) {
    this.query = t2, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = u;
  }
  static fromInitialDocuments(t2, e, n, s) {
    const i = [];
    return e.forEach((t3) => {
      i.push({
        type: 0,
        doc: t3
      });
    }), new Gu(
      t2,
      e,
      qu.emptySet(e),
      i,
      n,
      s,
      true,
      false
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t2) {
    if (!(this.fromCache === t2.fromCache && this.syncStateChanged === t2.syncStateChanged && this.mutatedKeys.isEqual(t2.mutatedKeys) && wn(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.oldDocs.isEqual(t2.oldDocs)))
      return false;
    const e = this.docChanges, n = t2.docChanges;
    if (e.length !== n.length)
      return false;
    for (let t3 = 0; t3 < e.length; t3++)
      if (e[t3].type !== n[t3].type || !e[t3].doc.isEqual(n[t3].doc))
        return false;
    return true;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qu {
  constructor() {
    this.Iu = void 0, this.listeners = [];
  }
}
class ju {
  constructor() {
    this.queries = new os((t2) => mn(t2), wn), this.onlineState = "Unknown", this.Tu = /* @__PURE__ */ new Set();
  }
}
async function Wu(t2, e) {
  const n = K(t2), s = e.query;
  let i = false, r = n.queries.get(s);
  if (r || (i = true, r = new Qu()), i)
    try {
      r.Iu = await n.onListen(s);
    } catch (t3) {
      const n2 = Uu(t3, `Initialization of query '${gn(e.query)}' failed`);
      return void e.onError(n2);
    }
  if (n.queries.set(s, r), r.listeners.push(e), e.Eu(n.onlineState), r.Iu) {
    e.Au(r.Iu) && Yu(n);
  }
}
async function zu(t2, e) {
  const n = K(t2), s = e.query;
  let i = false;
  const r = n.queries.get(s);
  if (r) {
    const t3 = r.listeners.indexOf(e);
    t3 >= 0 && (r.listeners.splice(t3, 1), i = 0 === r.listeners.length);
  }
  if (i)
    return n.queries.delete(s), n.onUnlisten(s);
}
function Hu(t2, e) {
  const n = K(t2);
  let s = false;
  for (const t3 of e) {
    const e2 = t3.query, i = n.queries.get(e2);
    if (i) {
      for (const e3 of i.listeners)
        e3.Au(t3) && (s = true);
      i.Iu = t3;
    }
  }
  s && Yu(n);
}
function Ju(t2, e, n) {
  const s = K(t2), i = s.queries.get(e);
  if (i)
    for (const t3 of i.listeners)
      t3.onError(n);
  s.queries.delete(e);
}
function Yu(t2) {
  t2.Tu.forEach((t3) => {
    t3.next();
  });
}
class Xu {
  constructor(t2, e, n) {
    this.query = t2, this.Ru = e, this.bu = false, this.Pu = null, this.onlineState = "Unknown", this.options = n || {};
  }
  Au(t2) {
    if (!this.options.includeMetadataChanges) {
      const e2 = [];
      for (const n of t2.docChanges)
        3 !== n.type && e2.push(n);
      t2 = new Gu(
        t2.query,
        t2.docs,
        t2.oldDocs,
        e2,
        t2.mutatedKeys,
        t2.fromCache,
        t2.syncStateChanged,
        true
      );
    }
    let e = false;
    return this.bu ? this.vu(t2) && (this.Ru.next(t2), e = true) : this.Vu(t2, this.onlineState) && (this.Su(t2), e = true), this.Pu = t2, e;
  }
  onError(t2) {
    this.Ru.error(t2);
  }
  Eu(t2) {
    this.onlineState = t2;
    let e = false;
    return this.Pu && !this.bu && this.Vu(this.Pu, t2) && (this.Su(this.Pu), e = true), e;
  }
  Vu(t2, e) {
    if (!t2.fromCache)
      return true;
    const n = "Offline" !== e;
    return (!this.options.Du || !n) && (!t2.docs.isEmpty() || "Offline" === e);
  }
  vu(t2) {
    if (t2.docChanges.length > 0)
      return true;
    const e = this.Pu && this.Pu.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.syncStateChanged && !e) && true === this.options.includeMetadataChanges;
  }
  Su(t2) {
    t2 = Gu.fromInitialDocuments(t2.query, t2.docs, t2.mutatedKeys, t2.fromCache), this.bu = true, this.Ru.next(t2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu {
  constructor(t2, e) {
    this.payload = t2, this.byteLength = e;
  }
  Cu() {
    return "metadata" in this.payload;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc {
  constructor(t2) {
    this.wt = t2;
  }
  Wi(t2) {
    return Bs(this.wt, t2);
  }
  zi(t2) {
    return t2.metadata.exists ? Qs(this.wt, t2.document, false) : ke.newNoDocument(this.Wi(t2.metadata.name), this.Hi(t2.metadata.readTime));
  }
  Hi(t2) {
    return Ms(t2);
  }
}
class ec {
  constructor(t2, e, n) {
    this.xu = t2, this.localStore = e, this.wt = n, this.queries = [], this.documents = [], this.collectionGroups = /* @__PURE__ */ new Set(), this.progress = nc(t2);
  }
  Nu(t2) {
    this.progress.bytesLoaded += t2.byteLength;
    let e = this.progress.documentsLoaded;
    if (t2.payload.namedQuery)
      this.queries.push(t2.payload.namedQuery);
    else if (t2.payload.documentMetadata) {
      this.documents.push({
        metadata: t2.payload.documentMetadata
      }), t2.payload.documentMetadata.exists || ++e;
      const n = ht.fromString(t2.payload.documentMetadata.name);
      this.collectionGroups.add(n.get(n.length - 2));
    } else
      t2.payload.document && (this.documents[this.documents.length - 1].document = t2.payload.document, ++e);
    return e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null;
  }
  ku(t2) {
    const e = /* @__PURE__ */ new Map(), n = new tc(this.wt);
    for (const s of t2)
      if (s.metadata.queries) {
        const t3 = n.Wi(s.metadata.name);
        for (const n2 of s.metadata.queries) {
          const s2 = (e.get(n2) || gs()).add(t3);
          e.set(n2, s2);
        }
      }
    return e;
  }
  async complete() {
    const t2 = await Bo(this.localStore, new tc(this.wt), this.documents, this.xu.id), e = this.ku(this.documents);
    for (const t3 of this.queries)
      await Lo(this.localStore, t3, e.get(t3.name));
    return this.progress.taskState = "Success", {
      progress: this.progress,
      Mu: this.collectionGroups,
      Ou: t2
    };
  }
}
function nc(t2) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: t2.totalDocuments,
    totalBytes: t2.totalBytes
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc {
  constructor(t2) {
    this.key = t2;
  }
}
class ic {
  constructor(t2) {
    this.key = t2;
  }
}
class rc {
  constructor(t2, e) {
    this.query = t2, this.Fu = e, this.$u = null, this.current = false, this.Bu = gs(), this.mutatedKeys = gs(), this.Lu = In(t2), this.Uu = new qu(this.Lu);
  }
  get qu() {
    return this.Fu;
  }
  Ku(t2, e) {
    const n = e ? e.Gu : new Ku(), s = e ? e.Uu : this.Uu;
    let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = false;
    const u = "F" === this.query.limitType && s.size === this.query.limit ? s.last() : null, c = "L" === this.query.limitType && s.size === this.query.limit ? s.first() : null;
    if (t2.inorderTraversal((t3, e2) => {
      const a = s.get(t3), h = yn(this.query, e2) ? e2 : null, l2 = !!a && this.mutatedKeys.has(a.key), f = !!h && (h.hasLocalMutations || this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
      let d = false;
      if (a && h) {
        a.data.isEqual(h.data) ? l2 !== f && (n.track({
          type: 3,
          doc: h
        }), d = true) : this.Qu(a, h) || (n.track({
          type: 2,
          doc: h
        }), d = true, (u && this.Lu(h, u) > 0 || c && this.Lu(h, c) < 0) && (o = true));
      } else
        !a && h ? (n.track({
          type: 0,
          doc: h
        }), d = true) : a && !h && (n.track({
          type: 1,
          doc: a
        }), d = true, (u || c) && (o = true));
      d && (h ? (r = r.add(h), i = f ? i.add(t3) : i.delete(t3)) : (r = r.delete(t3), i = i.delete(t3)));
    }), null !== this.query.limit)
      for (; r.size > this.query.limit; ) {
        const t3 = "F" === this.query.limitType ? r.last() : r.first();
        r = r.delete(t3.key), i = i.delete(t3.key), n.track({
          type: 1,
          doc: t3
        });
      }
    return {
      Uu: r,
      Gu: n,
      Mi: o,
      mutatedKeys: i
    };
  }
  Qu(t2, e) {
    return t2.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  applyChanges(t2, e, n) {
    const s = this.Uu;
    this.Uu = t2.Uu, this.mutatedKeys = t2.mutatedKeys;
    const i = t2.Gu.pu();
    i.sort((t3, e2) => function(t4, e3) {
      const n2 = (t5) => {
        switch (t5) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return L();
        }
      };
      return n2(t4) - n2(e3);
    }(t3.type, e2.type) || this.Lu(t3.doc, e2.doc)), this.ju(n);
    const r = e ? this.Wu() : [], o = 0 === this.Bu.size && this.current ? 1 : 0, u = o !== this.$u;
    if (this.$u = o, 0 !== i.length || u) {
      return {
        snapshot: new Gu(
          this.query,
          t2.Uu,
          s,
          i,
          t2.mutatedKeys,
          0 === o,
          u,
          false
        ),
        zu: r
      };
    }
    return {
      zu: r
    };
  }
  Eu(t2) {
    return this.current && "Offline" === t2 ? (this.current = false, this.applyChanges(
      {
        Uu: this.Uu,
        Gu: new Ku(),
        mutatedKeys: this.mutatedKeys,
        Mi: false
      },
      false
    )) : {
      zu: []
    };
  }
  Hu(t2) {
    return !this.Fu.has(t2) && (!!this.Uu.has(t2) && !this.Uu.get(t2).hasLocalMutations);
  }
  ju(t2) {
    t2 && (t2.addedDocuments.forEach((t3) => this.Fu = this.Fu.add(t3)), t2.modifiedDocuments.forEach((t3) => {
    }), t2.removedDocuments.forEach((t3) => this.Fu = this.Fu.delete(t3)), this.current = t2.current);
  }
  Wu() {
    if (!this.current)
      return [];
    const t2 = this.Bu;
    this.Bu = gs(), this.Uu.forEach((t3) => {
      this.Hu(t3.key) && (this.Bu = this.Bu.add(t3.key));
    });
    const e = [];
    return t2.forEach((t3) => {
      this.Bu.has(t3) || e.push(new ic(t3));
    }), this.Bu.forEach((n) => {
      t2.has(n) || e.push(new sc(n));
    }), e;
  }
  Ju(t2) {
    this.Fu = t2.ji, this.Bu = gs();
    const e = this.Ku(t2.documents);
    return this.applyChanges(e, true);
  }
  Yu() {
    return Gu.fromInitialDocuments(this.query, this.Uu, this.mutatedKeys, 0 === this.$u);
  }
}
class oc {
  constructor(t2, e, n) {
    this.query = t2, this.targetId = e, this.view = n;
  }
}
class uc {
  constructor(t2) {
    this.key = t2, this.Xu = false;
  }
}
class cc {
  constructor(t2, e, n, s, i, r) {
    this.localStore = t2, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.Zu = {}, this.tc = new os((t3) => mn(t3), wn), this.ec = /* @__PURE__ */ new Map(), this.nc = /* @__PURE__ */ new Set(), this.sc = new Gt(dt.comparator), this.ic = /* @__PURE__ */ new Map(), this.rc = new oo(), this.oc = {}, this.uc = /* @__PURE__ */ new Map(), this.cc = Or.Rn(), this.onlineState = "Unknown", this.ac = void 0;
  }
  get isPrimaryClient() {
    return true === this.ac;
  }
}
async function ac(t2, e) {
  const n = $c(t2);
  let s, i;
  const r = n.tc.get(e);
  if (r)
    s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.Yu();
  else {
    const t3 = await No(n.localStore, dn(e));
    n.isPrimaryClient && _u(n.remoteStore, t3);
    const r2 = n.sharedClientState.addLocalQueryTarget(t3.targetId);
    s = t3.targetId, i = await hc(n, e, s, "current" === r2);
  }
  return i;
}
async function hc(t2, e, n, s) {
  t2.hc = (e2, n2, s2) => async function(t3, e3, n3, s3) {
    let i2 = e3.view.Ku(n3);
    i2.Mi && (i2 = await Mo(
      t3.localStore,
      e3.query,
      false
    ).then(({ documents: t4 }) => e3.view.Ku(t4, i2)));
    const r2 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(
      i2,
      t3.isPrimaryClient,
      r2
    );
    return Ac(t3, e3.targetId, o2.zu), o2.snapshot;
  }(t2, e2, n2, s2);
  const i = await Mo(
    t2.localStore,
    e,
    true
  ), r = new rc(e, i.ji), o = r.Ku(i.documents), u = Ts.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" !== t2.onlineState), c = r.applyChanges(
    o,
    t2.isPrimaryClient,
    u
  );
  Ac(t2, n, c.zu);
  const a = new oc(e, n, r);
  return t2.tc.set(e, a), t2.ec.has(n) ? t2.ec.get(n).push(e) : t2.ec.set(n, [e]), c.snapshot;
}
async function lc(t2, e) {
  const n = K(t2), s = n.tc.get(e), i = n.ec.get(s.targetId);
  if (i.length > 1)
    return n.ec.set(s.targetId, i.filter((t3) => !wn(t3, e))), void n.tc.delete(e);
  if (n.isPrimaryClient) {
    n.sharedClientState.removeLocalQueryTarget(s.targetId);
    n.sharedClientState.isActiveQueryTarget(s.targetId) || await ko(
      n.localStore,
      s.targetId,
      false
    ).then(() => {
      n.sharedClientState.clearQueryState(s.targetId), wu(n.remoteStore, s.targetId), Tc(n, s.targetId);
    }).catch(vt);
  } else
    Tc(n, s.targetId), await ko(
      n.localStore,
      s.targetId,
      true
    );
}
async function fc(t2, e, n) {
  const s = Bc(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = K(t4), s2 = ut.now(), i = e2.reduce((t5, e3) => t5.add(e3.key), gs());
      let r, o;
      return n2.persistence.runTransaction("Locally write mutations", "readwrite", (t5) => {
        let u = cs(), c = gs();
        return n2.Ui.getEntries(t5, i).next((t6) => {
          u = t6, u.forEach((t7, e3) => {
            e3.isValidDocument() || (c = c.add(t7));
          });
        }).next(() => n2.localDocuments.getOverlayedDocuments(t5, u)).next((i2) => {
          r = i2;
          const o2 = [];
          for (const t6 of e2) {
            const e3 = jn(t6, r.get(t6.key).overlayedDocument);
            null != e3 && o2.push(new Hn(t6.key, e3, Ne(e3.value.mapValue), Ln.exists(true)));
          }
          return n2.mutationQueue.addMutationBatch(t5, s2, o2, e2);
        }).next((e3) => {
          o = e3;
          const s3 = e3.applyToLocalDocumentSet(r, c);
          return n2.documentOverlayCache.saveOverlays(t5, e3.batchId, s3);
        });
      }).then(() => ({
        batchId: o.batchId,
        changes: ls(r)
      }));
    }(s.localStore, e);
    s.sharedClientState.addPendingMutation(t3.batchId), function(t4, e2, n2) {
      let s2 = t4.oc[t4.currentUser.toKey()];
      s2 || (s2 = new Gt(it));
      s2 = s2.insert(e2, n2), t4.oc[t4.currentUser.toKey()] = s2;
    }(s, t3.batchId, n), await Pc(s, t3.changes), await vu(s.remoteStore);
  } catch (t3) {
    const e2 = Uu(t3, "Failed to persist write");
    n.reject(e2);
  }
}
async function dc(t2, e) {
  const n = K(t2);
  try {
    const t3 = await Do(n.localStore, e);
    e.targetChanges.forEach((t4, e2) => {
      const s = n.ic.get(e2);
      s && (U(t4.addedDocuments.size + t4.modifiedDocuments.size + t4.removedDocuments.size <= 1), t4.addedDocuments.size > 0 ? s.Xu = true : t4.modifiedDocuments.size > 0 ? U(s.Xu) : t4.removedDocuments.size > 0 && (U(s.Xu), s.Xu = false));
    }), await Pc(n, t3, e);
  } catch (t3) {
    await vt(t3);
  }
}
function _c(t2, e, n) {
  const s = K(t2);
  if (s.isPrimaryClient && 0 === n || !s.isPrimaryClient && 1 === n) {
    const t3 = [];
    s.tc.forEach((n2, s2) => {
      const i = s2.view.Eu(e);
      i.snapshot && t3.push(i.snapshot);
    }), function(t4, e2) {
      const n2 = K(t4);
      n2.onlineState = e2;
      let s2 = false;
      n2.queries.forEach((t5, n3) => {
        for (const t6 of n3.listeners)
          t6.Eu(e2) && (s2 = true);
      }), s2 && Yu(n2);
    }(s.eventManager, e), t3.length && s.Zu.Go(t3), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
async function wc(t2, e, n) {
  const s = K(t2);
  s.sharedClientState.updateQueryState(e, "rejected", n);
  const i = s.ic.get(e), r = i && i.key;
  if (r) {
    let t3 = new Gt(dt.comparator);
    t3 = t3.insert(r, ke.newNoDocument(r, ct.min()));
    const n2 = gs().add(r), i2 = new Is(
      ct.min(),
      /* @__PURE__ */ new Map(),
      new Wt(it),
      t3,
      n2
    );
    await dc(s, i2), s.sc = s.sc.remove(r), s.ic.delete(e), bc(s);
  } else
    await ko(
      s.localStore,
      e,
      false
    ).then(() => Tc(s, e, n)).catch(vt);
}
async function mc(t2, e) {
  const n = K(t2), s = e.batch.batchId;
  try {
    const t3 = await Vo(n.localStore, e);
    Ic(n, s, null), pc(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), await Pc(n, t3);
  } catch (t3) {
    await vt(t3);
  }
}
async function gc(t2, e, n) {
  const s = K(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = K(t4);
      return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (t5) => {
        let s2;
        return n2.mutationQueue.lookupMutationBatch(t5, e2).next((e3) => (U(null !== e3), s2 = e3.keys(), n2.mutationQueue.removeMutationBatch(t5, e3))).next(() => n2.mutationQueue.performConsistencyCheck(t5)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(t5, s2, e2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t5, s2)).next(() => n2.localDocuments.getDocuments(t5, s2));
      });
    }(s.localStore, e);
    Ic(s, e, n), pc(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), await Pc(s, t3);
  } catch (n2) {
    await vt(n2);
  }
}
async function yc(t2, e) {
  const n = K(t2);
  Iu(n.remoteStore) || O("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
  try {
    const t3 = await function(t4) {
      const e2 = K(t4);
      return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t5) => e2.mutationQueue.getHighestUnacknowledgedBatchId(t5));
    }(n.localStore);
    if (-1 === t3)
      return void e.resolve();
    const s = n.uc.get(t3) || [];
    s.push(e), n.uc.set(t3, s);
  } catch (t3) {
    const n2 = Uu(t3, "Initialization of waitForPendingWrites() operation failed");
    e.reject(n2);
  }
}
function pc(t2, e) {
  (t2.uc.get(e) || []).forEach((t3) => {
    t3.resolve();
  }), t2.uc.delete(e);
}
function Ic(t2, e, n) {
  const s = K(t2);
  let i = s.oc[s.currentUser.toKey()];
  if (i) {
    const t3 = i.get(e);
    t3 && (n ? t3.reject(n) : t3.resolve(), i = i.remove(e)), s.oc[s.currentUser.toKey()] = i;
  }
}
function Tc(t2, e, n = null) {
  t2.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t2.ec.get(e))
    t2.tc.delete(s), n && t2.Zu.lc(s, n);
  if (t2.ec.delete(e), t2.isPrimaryClient) {
    t2.rc.us(e).forEach((e2) => {
      t2.rc.containsKey(e2) || Ec(t2, e2);
    });
  }
}
function Ec(t2, e) {
  t2.nc.delete(e.path.canonicalString());
  const n = t2.sc.get(e);
  null !== n && (wu(t2.remoteStore, n), t2.sc = t2.sc.remove(e), t2.ic.delete(n), bc(t2));
}
function Ac(t2, e, n) {
  for (const s of n)
    if (s instanceof sc)
      t2.rc.addReference(s.key, e), Rc(t2, s);
    else if (s instanceof ic) {
      O("SyncEngine", "Document no longer in limbo: " + s.key), t2.rc.removeReference(s.key, e);
      t2.rc.containsKey(s.key) || Ec(t2, s.key);
    } else
      L();
}
function Rc(t2, e) {
  const n = e.key, s = n.path.canonicalString();
  t2.sc.get(n) || t2.nc.has(s) || (O("SyncEngine", "New document in limbo: " + n), t2.nc.add(s), bc(t2));
}
function bc(t2) {
  for (; t2.nc.size > 0 && t2.sc.size < t2.maxConcurrentLimboResolutions; ) {
    const e = t2.nc.values().next().value;
    t2.nc.delete(e);
    const n = new dt(ht.fromString(e)), s = t2.cc.next();
    t2.ic.set(s, new uc(n)), t2.sc = t2.sc.insert(n, s), _u(t2.remoteStore, new qi(dn(un(n.path)), s, 2, Lt.ot));
  }
}
async function Pc(t2, e, n) {
  const s = K(t2), i = [], r = [], o = [];
  s.tc.isEmpty() || (s.tc.forEach((t3, u) => {
    o.push(s.hc(u, e, n).then((t4) => {
      if (t4) {
        s.isPrimaryClient && s.sharedClientState.updateQueryState(u.targetId, t4.fromCache ? "not-current" : "current"), i.push(t4);
        const e2 = Ao.Vi(u.targetId, t4);
        r.push(e2);
      }
    }));
  }), await Promise.all(o), s.Zu.Go(i), await async function(t3, e2) {
    const n2 = K(t3);
    try {
      await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t4) => Vt.forEach(e2, (e3) => Vt.forEach(e3.Pi, (s2) => n2.persistence.referenceDelegate.addReference(t4, e3.targetId, s2)).next(() => Vt.forEach(e3.vi, (s2) => n2.persistence.referenceDelegate.removeReference(t4, e3.targetId, s2)))));
    } catch (t4) {
      if (!Nt(t4))
        throw t4;
      O("LocalStore", "Failed to update sequence numbers: " + t4);
    }
    for (const t4 of e2) {
      const e3 = t4.targetId;
      if (!t4.fromCache) {
        const t5 = n2.$i.get(e3), s2 = t5.snapshotVersion, i2 = t5.withLastLimboFreeSnapshotVersion(s2);
        n2.$i = n2.$i.insert(e3, i2);
      }
    }
  }(s.localStore, r));
}
async function vc(t2, e) {
  const n = K(t2);
  if (!n.currentUser.isEqual(e)) {
    O("SyncEngine", "User change. New user:", e.toKey());
    const t3 = await vo(n.localStore, e);
    n.currentUser = e, function(t4, e2) {
      t4.uc.forEach((t5) => {
        t5.forEach((t6) => {
          t6.reject(new Q(G.CANCELLED, e2));
        });
      }), t4.uc.clear();
    }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, t3.removedBatchIds, t3.addedBatchIds), await Pc(n, t3.Ki);
  }
}
function Vc(t2, e) {
  const n = K(t2), s = n.ic.get(e);
  if (s && s.Xu)
    return gs().add(s.key);
  {
    let t3 = gs();
    const s2 = n.ec.get(e);
    if (!s2)
      return t3;
    for (const e2 of s2) {
      const s3 = n.tc.get(e2);
      t3 = t3.unionWith(s3.view.qu);
    }
    return t3;
  }
}
async function Sc(t2, e) {
  const n = K(t2), s = await Mo(
    n.localStore,
    e.query,
    true
  ), i = e.view.Ju(s);
  return n.isPrimaryClient && Ac(n, e.targetId, i.zu), i;
}
async function Dc(t2, e) {
  const n = K(t2);
  return Fo(n.localStore, e).then((t3) => Pc(n, t3));
}
async function Cc(t2, e, n, s) {
  const i = K(t2), r = await function(t3, e2) {
    const n2 = K(t3), s2 = K(n2.mutationQueue);
    return n2.persistence.runTransaction("Lookup mutation documents", "readonly", (t4) => s2.yn(t4, e2).next((e3) => e3 ? n2.localDocuments.getDocuments(t4, e3) : Vt.resolve(null)));
  }(i.localStore, e);
  null !== r ? ("pending" === n ? await vu(i.remoteStore) : "acknowledged" === n || "rejected" === n ? (Ic(i, e, s || null), pc(i, e), function(t3, e2) {
    K(K(t3).mutationQueue).In(e2);
  }(i.localStore, e)) : L(), await Pc(i, r)) : O("SyncEngine", "Cannot apply mutation batch with id: " + e);
}
async function xc(t2, e) {
  const n = K(t2);
  if ($c(n), Bc(n), true === e && true !== n.ac) {
    const t3 = n.sharedClientState.getAllActiveQueryTargets(), e2 = await Nc(n, t3.toArray());
    n.ac = true, await Fu(n.remoteStore, true);
    for (const t4 of e2)
      _u(n.remoteStore, t4);
  } else if (false === e && false !== n.ac) {
    const t3 = [];
    let e2 = Promise.resolve();
    n.ec.forEach((s, i) => {
      n.sharedClientState.isLocalQueryTarget(i) ? t3.push(i) : e2 = e2.then(() => (Tc(n, i), ko(
        n.localStore,
        i,
        true
      ))), wu(n.remoteStore, i);
    }), await e2, await Nc(n, t3), function(t4) {
      const e3 = K(t4);
      e3.ic.forEach((t5, n2) => {
        wu(e3.remoteStore, n2);
      }), e3.rc.cs(), e3.ic = /* @__PURE__ */ new Map(), e3.sc = new Gt(dt.comparator);
    }(n), n.ac = false, await Fu(n.remoteStore, false);
  }
}
async function Nc(t2, e, n) {
  const s = K(t2), i = [], r = [];
  for (const t3 of e) {
    let e2;
    const n2 = s.ec.get(t3);
    if (n2 && 0 !== n2.length) {
      e2 = await No(s.localStore, dn(n2[0]));
      for (const t4 of n2) {
        const e3 = s.tc.get(t4), n3 = await Sc(s, e3);
        n3.snapshot && r.push(n3.snapshot);
      }
    } else {
      const n3 = await Oo(s.localStore, t3);
      e2 = await No(s.localStore, n3), await hc(
        s,
        kc(n3),
        t3,
        false
      );
    }
    i.push(e2);
  }
  return s.Zu.Go(r), i;
}
function kc(t2) {
  return on(t2.path, t2.collectionGroup, t2.orderBy, t2.filters, t2.limit, "F", t2.startAt, t2.endAt);
}
function Mc(t2) {
  const e = K(t2);
  return K(K(e.localStore).persistence).Ri();
}
async function Oc(t2, e, n, s) {
  const i = K(t2);
  if (i.ac)
    return void O("SyncEngine", "Ignoring unexpected query state notification.");
  const r = i.ec.get(e);
  if (r && r.length > 0)
    switch (n) {
      case "current":
      case "not-current": {
        const t3 = await Fo(i.localStore, pn(r[0])), s2 = Is.createSynthesizedRemoteEventForCurrentChange(e, "current" === n);
        await Pc(i, t3, s2);
        break;
      }
      case "rejected":
        await ko(
          i.localStore,
          e,
          true
        ), Tc(i, e, s);
        break;
      default:
        L();
    }
}
async function Fc(t2, e, n) {
  const s = $c(t2);
  if (s.ac) {
    for (const t3 of e) {
      if (s.ec.has(t3)) {
        O("SyncEngine", "Adding an already active target " + t3);
        continue;
      }
      const e2 = await Oo(s.localStore, t3), n2 = await No(s.localStore, e2);
      await hc(
        s,
        kc(e2),
        n2.targetId,
        false
      ), _u(s.remoteStore, n2);
    }
    for (const t3 of n)
      s.ec.has(t3) && await ko(
        s.localStore,
        t3,
        false
      ).then(() => {
        wu(s.remoteStore, t3), Tc(s, t3);
      }).catch(vt);
  }
}
function $c(t2) {
  const e = K(t2);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = dc.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Vc.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = wc.bind(null, e), e.Zu.Go = Hu.bind(null, e.eventManager), e.Zu.lc = Ju.bind(null, e.eventManager), e;
}
function Bc(t2) {
  const e = K(t2);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = mc.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = gc.bind(null, e), e;
}
function Lc(t2, e, n) {
  const s = K(t2);
  (async function(t3, e2, n2) {
    try {
      const s2 = await e2.getMetadata();
      if (await function(t4, e3) {
        const n3 = K(t4), s3 = Ms(e3.createTime);
        return n3.persistence.runTransaction("hasNewerBundle", "readonly", (t5) => n3.Ds.getBundleMetadata(t5, e3.id)).then((t5) => !!t5 && t5.createTime.compareTo(s3) >= 0);
      }(t3.localStore, s2))
        return await e2.close(), n2._completeWith(function(t4) {
          return {
            taskState: "Success",
            documentsLoaded: t4.totalDocuments,
            bytesLoaded: t4.totalBytes,
            totalDocuments: t4.totalDocuments,
            totalBytes: t4.totalBytes
          };
        }(s2)), Promise.resolve(/* @__PURE__ */ new Set());
      n2._updateProgress(nc(s2));
      const i = new ec(s2, t3.localStore, e2.wt);
      let r = await e2.fc();
      for (; r; ) {
        const t4 = await i.Nu(r);
        t4 && n2._updateProgress(t4), r = await e2.fc();
      }
      const o = await i.complete();
      return await Pc(
        t3,
        o.Ou,
        void 0
      ), await function(t4, e3) {
        const n3 = K(t4);
        return n3.persistence.runTransaction("Save bundle", "readwrite", (t5) => n3.Ds.saveBundleMetadata(t5, e3));
      }(t3.localStore, s2), n2._completeWith(o.progress), Promise.resolve(o.Mu);
    } catch (t4) {
      return $("SyncEngine", `Loading bundle failed with ${t4}`), n2._failWith(t4), Promise.resolve(/* @__PURE__ */ new Set());
    }
  })(s, e, n).then((t3) => {
    s.sharedClientState.notifyBundleLoaded(t3);
  });
}
class Uc {
  constructor() {
    this.synchronizeTabs = false;
  }
  async initialize(t2) {
    this.wt = iu(t2.databaseInfo.databaseId), this.sharedClientState = this.dc(t2), this.persistence = this._c(t2), await this.persistence.start(), this.localStore = this.wc(t2), this.gcScheduler = this.mc(t2, this.localStore), this.indexBackfillerScheduler = this.gc(t2, this.localStore);
  }
  mc(t2, e) {
    return null;
  }
  gc(t2, e) {
    return null;
  }
  wc(t2) {
    return Po(this.persistence, new Ro(), t2.initialUser, this.wt);
  }
  _c(t2) {
    return new fo(wo.Os, this.wt);
  }
  dc(t2) {
    return new Jo();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
class qc extends Uc {
  constructor(t2, e, n) {
    super(), this.yc = t2, this.cacheSizeBytes = e, this.forceOwnership = n, this.synchronizeTabs = false;
  }
  async initialize(t2) {
    await super.initialize(t2), await this.yc.initialize(this, t2), await Bc(this.yc.syncEngine), await vu(this.yc.remoteStore), await this.persistence.ci(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve()));
  }
  wc(t2) {
    return Po(this.persistence, new Ro(), t2.initialUser, this.wt);
  }
  mc(t2, e) {
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new Kr(n, t2.asyncQueue, e);
  }
  gc(t2, e) {
    const n = new Bt(e, this.persistence);
    return new $t(t2.asyncQueue, n);
  }
  _c(t2) {
    const e = Eo(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? Vr.withCacheSize(this.cacheSizeBytes) : Vr.DEFAULT;
    return new po(this.synchronizeTabs, e, t2.clientId, n, t2.asyncQueue, nu(), su(), this.wt, this.sharedClientState, !!this.forceOwnership);
  }
  dc(t2) {
    return new Jo();
  }
}
class Kc extends qc {
  constructor(t2, e) {
    super(t2, e, false), this.yc = t2, this.cacheSizeBytes = e, this.synchronizeTabs = true;
  }
  async initialize(t2) {
    await super.initialize(t2);
    const e = this.yc.syncEngine;
    this.sharedClientState instanceof Ho && (this.sharedClientState.syncEngine = {
      kr: Cc.bind(null, e),
      Mr: Oc.bind(null, e),
      Or: Fc.bind(null, e),
      Ri: Mc.bind(null, e),
      Nr: Dc.bind(null, e)
    }, await this.sharedClientState.start()), await this.persistence.ci(async (t3) => {
      await xc(this.yc.syncEngine, t3), this.gcScheduler && (t3 && !this.gcScheduler.started ? this.gcScheduler.start() : t3 || this.gcScheduler.stop()), this.indexBackfillerScheduler && (t3 && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : t3 || this.indexBackfillerScheduler.stop());
    });
  }
  dc(t2) {
    const e = nu();
    if (!Ho.V(e))
      throw new Q(G.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    const n = Eo(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey);
    return new Ho(e, t2.asyncQueue, n, t2.clientId, t2.initialUser);
  }
}
class Gc {
  async initialize(t2, e) {
    this.localStore || (this.localStore = t2.localStore, this.sharedClientState = t2.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
      e,
      !t2.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (t3) => _c(this.syncEngine, t3, 1), this.remoteStore.remoteSyncer.handleCredentialChange = vc.bind(null, this.syncEngine), await Fu(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t2) {
    return new ju();
  }
  createDatastore(t2) {
    const e = iu(t2.databaseInfo.databaseId), n = (s = t2.databaseInfo, new eu(s));
    var s;
    return function(t3, e2, n2, s2) {
      return new au(t3, e2, n2, s2);
    }(t2.authCredentials, t2.appCheckCredentials, n, e);
  }
  createRemoteStore(t2) {
    return e = this.localStore, n = this.datastore, s = t2.asyncQueue, i = (t3) => _c(this.syncEngine, t3, 0), r = Xo.V() ? new Xo() : new Yo(), new lu(e, n, s, i, r);
    var e, n, s, i, r;
  }
  createSyncEngine(t2, e) {
    return function(t3, e2, n, s, i, r, o) {
      const u = new cc(t3, e2, n, s, i, r);
      return o && (u.ac = true), u;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t2.initialUser, t2.maxConcurrentLimboResolutions, e);
  }
  terminate() {
    return async function(t2) {
      const e = K(t2);
      O("RemoteStore", "RemoteStore shutting down."), e.lu.add(5), await du(e), e.du.shutdown(), e._u.set("Unknown");
    }(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qc(t2, e = 10240) {
  let n = 0;
  return {
    async read() {
      if (n < t2.byteLength) {
        const s = {
          value: t2.slice(n, n + e),
          done: false
        };
        return n += e, s;
      }
      return {
        done: true
      };
    },
    async cancel() {
    },
    releaseLock() {
    },
    closed: Promise.reject("unimplemented")
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc {
  constructor(t2) {
    this.observer = t2, this.muted = false;
  }
  next(t2) {
    this.observer.next && this.Ic(this.observer.next, t2);
  }
  error(t2) {
    this.observer.error ? this.Ic(this.observer.error, t2) : F("Uncaught Error in snapshot listener:", t2);
  }
  Tc() {
    this.muted = true;
  }
  Ic(t2, e) {
    this.muted || setTimeout(() => {
      this.muted || t2(e);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wc {
  constructor(t2, e) {
    this.Ec = t2, this.wt = e, this.metadata = new j(), this.buffer = new Uint8Array(), this.Ac = new TextDecoder("utf-8"), this.Rc().then((t3) => {
      t3 && t3.Cu() ? this.metadata.resolve(t3.payload.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null == t3 ? void 0 : t3.payload)}`));
    }, (t3) => this.metadata.reject(t3));
  }
  close() {
    return this.Ec.cancel();
  }
  async getMetadata() {
    return this.metadata.promise;
  }
  async fc() {
    return await this.getMetadata(), this.Rc();
  }
  async Rc() {
    const t2 = await this.bc();
    if (null === t2)
      return null;
    const e = this.Ac.decode(t2), n = Number(e);
    isNaN(n) && this.Pc(`length string (${e}) is not valid number`);
    const s = await this.vc(n);
    return new Zu(JSON.parse(s), t2.length + n);
  }
  Vc() {
    return this.buffer.findIndex((t2) => t2 === "{".charCodeAt(0));
  }
  async bc() {
    for (; this.Vc() < 0; ) {
      if (await this.Sc())
        break;
    }
    if (0 === this.buffer.length)
      return null;
    const t2 = this.Vc();
    t2 < 0 && this.Pc("Reached the end of bundle when a length string is expected.");
    const e = this.buffer.slice(0, t2);
    return this.buffer = this.buffer.slice(t2), e;
  }
  async vc(t2) {
    for (; this.buffer.length < t2; ) {
      await this.Sc() && this.Pc("Reached the end of bundle when more is expected.");
    }
    const e = this.Ac.decode(this.buffer.slice(0, t2));
    return this.buffer = this.buffer.slice(t2), e;
  }
  Pc(t2) {
    throw this.Ec.cancel(), new Error(`Invalid bundle format: ${t2}`);
  }
  async Sc() {
    const t2 = await this.Ec.read();
    if (!t2.done) {
      const e = new Uint8Array(this.buffer.length + t2.value.length);
      e.set(this.buffer), e.set(t2.value, this.buffer.length), this.buffer = e;
    }
    return t2.done;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc {
  constructor(t2) {
    this.datastore = t2, this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, this.lastWriteError = null, this.writtenDocs = /* @__PURE__ */ new Set();
  }
  async lookup(t2) {
    if (this.ensureCommitNotCalled(), this.mutations.length > 0)
      throw new Q(G.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
    const e = await async function(t3, e2) {
      const n = K(t3), s = qs(n.wt) + "/documents", i = {
        documents: e2.map((t4) => $s(n.wt, t4))
      }, r = await n.ao("BatchGetDocuments", s, i, e2.length), o = /* @__PURE__ */ new Map();
      r.forEach((t4) => {
        const e3 = js(n.wt, t4);
        o.set(e3.key.toString(), e3);
      });
      const u = [];
      return e2.forEach((t4) => {
        const e3 = o.get(t4.toString());
        U(!!e3), u.push(e3);
      }), u;
    }(this.datastore, t2);
    return e.forEach((t3) => this.recordVersion(t3)), e;
  }
  set(t2, e) {
    this.write(e.toMutation(t2, this.precondition(t2))), this.writtenDocs.add(t2.toString());
  }
  update(t2, e) {
    try {
      this.write(e.toMutation(t2, this.preconditionForUpdate(t2)));
    } catch (t3) {
      this.lastWriteError = t3;
    }
    this.writtenDocs.add(t2.toString());
  }
  delete(t2) {
    this.write(new Zn(t2, this.precondition(t2))), this.writtenDocs.add(t2.toString());
  }
  async commit() {
    if (this.ensureCommitNotCalled(), this.lastWriteError)
      throw this.lastWriteError;
    const t2 = this.readVersions;
    this.mutations.forEach((e) => {
      t2.delete(e.key.toString());
    }), t2.forEach((t3, e) => {
      const n = dt.fromPath(e);
      this.mutations.push(new ts(n, this.precondition(n)));
    }), await async function(t3, e) {
      const n = K(t3), s = qs(n.wt) + "/documents", i = {
        writes: e.map((t4) => zs(n.wt, t4))
      };
      await n.ro("Commit", s, i);
    }(this.datastore, this.mutations), this.committed = true;
  }
  recordVersion(t2) {
    let e;
    if (t2.isFoundDocument())
      e = t2.version;
    else {
      if (!t2.isNoDocument())
        throw L();
      e = ct.min();
    }
    const n = this.readVersions.get(t2.key.toString());
    if (n) {
      if (!e.isEqual(n))
        throw new Q(G.ABORTED, "Document version changed between two reads.");
    } else
      this.readVersions.set(t2.key.toString(), e);
  }
  precondition(t2) {
    const e = this.readVersions.get(t2.toString());
    return !this.writtenDocs.has(t2.toString()) && e ? Ln.updateTime(e) : Ln.none();
  }
  preconditionForUpdate(t2) {
    const e = this.readVersions.get(t2.toString());
    if (!this.writtenDocs.has(t2.toString()) && e) {
      if (e.isEqual(ct.min()))
        throw new Q(G.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return Ln.updateTime(e);
    }
    return Ln.exists(true);
  }
  write(t2) {
    this.ensureCommitNotCalled(), this.mutations.push(t2);
  }
  ensureCommitNotCalled() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.datastore = e, this.options = n, this.updateFunction = s, this.deferred = i, this.Dc = n.maxAttempts, this.So = new ru(this.asyncQueue, "transaction_retry");
  }
  run() {
    this.Dc -= 1, this.Cc();
  }
  Cc() {
    this.So.Io(async () => {
      const t2 = new zc(this.datastore), e = this.xc(t2);
      e && e.then((e2) => {
        this.asyncQueue.enqueueAndForget(() => t2.commit().then(() => {
          this.deferred.resolve(e2);
        }).catch((t3) => {
          this.Nc(t3);
        }));
      }).catch((t3) => {
        this.Nc(t3);
      });
    });
  }
  xc(t2) {
    try {
      const e = this.updateFunction(t2);
      return !ce(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t3) {
      return this.deferred.reject(t3), null;
    }
  }
  Nc(t2) {
    this.Dc > 0 && this.kc(t2) ? (this.Dc -= 1, this.asyncQueue.enqueueAndForget(() => (this.Cc(), Promise.resolve()))) : this.deferred.reject(t2);
  }
  kc(t2) {
    if ("FirebaseError" === t2.name) {
      const e = t2.code;
      return "aborted" === e || "failed-precondition" === e || !is(e);
    }
    return false;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc {
  constructor(t2, e, n, s) {
    this.authCredentials = t2, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, this.user = C.UNAUTHENTICATED, this.clientId = st.I(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async (t3) => {
      O("FirestoreClient", "Received user=", t3.uid), await this.authCredentialListener(t3), this.user = t3;
    }), this.appCheckCredentials.start(n, (t3) => (O("FirestoreClient", "Received new app check token=", t3), this.appCheckCredentialListener(t3, this.user)));
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t2) {
    this.authCredentialListener = t2;
  }
  setAppCheckTokenChangeListener(t2) {
    this.appCheckCredentialListener = t2;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new Q(G.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t2 = new j();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t2.resolve();
      } catch (e) {
        const n = Uu(e, "Failed to shutdown persistence");
        t2.reject(n);
      }
    }), t2.promise;
  }
}
async function Yc(t2, e) {
  t2.asyncQueue.verifyOperationInProgress(), O("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t2.getConfiguration();
  await e.initialize(n);
  let s = n.initialUser;
  t2.setCredentialChangeListener(async (t3) => {
    s.isEqual(t3) || (await vo(e.localStore, t3), s = t3);
  }), e.persistence.setDatabaseDeletedListener(() => t2.terminate()), t2.offlineComponents = e;
}
async function Xc(t2, e) {
  t2.asyncQueue.verifyOperationInProgress();
  const n = await Zc(t2);
  O("FirestoreClient", "Initializing OnlineComponentProvider");
  const s = await t2.getConfiguration();
  await e.initialize(n, s), t2.setCredentialChangeListener((t3) => Ou(e.remoteStore, t3)), t2.setAppCheckTokenChangeListener((t3, n2) => Ou(e.remoteStore, n2)), t2.onlineComponents = e;
}
async function Zc(t2) {
  return t2.offlineComponents || (O("FirestoreClient", "Using default OfflineComponentProvider"), await Yc(t2, new Uc())), t2.offlineComponents;
}
async function ta(t2) {
  return t2.onlineComponents || (O("FirestoreClient", "Using default OnlineComponentProvider"), await Xc(t2, new Gc())), t2.onlineComponents;
}
function ea(t2) {
  return Zc(t2).then((t3) => t3.persistence);
}
function na(t2) {
  return Zc(t2).then((t3) => t3.localStore);
}
function sa(t2) {
  return ta(t2).then((t3) => t3.remoteStore);
}
function ia(t2) {
  return ta(t2).then((t3) => t3.syncEngine);
}
async function ra(t2) {
  const e = await ta(t2), n = e.eventManager;
  return n.onListen = ac.bind(null, e.syncEngine), n.onUnlisten = lc.bind(null, e.syncEngine), n;
}
function oa(t2) {
  return t2.asyncQueue.enqueue(async () => {
    const e = await ea(t2), n = await sa(t2);
    return e.setNetworkEnabled(true), function(t3) {
      const e2 = K(t3);
      return e2.lu.delete(0), fu(e2);
    }(n);
  });
}
function ua(t2) {
  return t2.asyncQueue.enqueue(async () => {
    const e = await ea(t2), n = await sa(t2);
    return e.setNetworkEnabled(false), async function(t3) {
      const e2 = K(t3);
      e2.lu.add(0), await du(e2), e2._u.set("Offline");
    }(n);
  });
}
function ca(t2, e) {
  const n = new j();
  return t2.asyncQueue.enqueueAndForget(async () => async function(t3, e2, n2) {
    try {
      const s = await function(t4, e3) {
        const n3 = K(t4);
        return n3.persistence.runTransaction("read document", "readonly", (t5) => n3.localDocuments.getDocument(t5, e3));
      }(t3, e2);
      s.isFoundDocument() ? n2.resolve(s) : s.isNoDocument() ? n2.resolve(null) : n2.reject(new Q(G.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
    } catch (t4) {
      const s = Uu(t4, `Failed to get document '${e2} from cache`);
      n2.reject(s);
    }
  }(await na(t2), e, n)), n.promise;
}
function aa(t2, e, n = {}) {
  const s = new j();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n2, s2, i) {
    const r = new jc({
      next: (r2) => {
        e2.enqueueAndForget(() => zu(t3, o));
        const u = r2.docs.has(n2);
        !u && r2.fromCache ? i.reject(new Q(G.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && r2.fromCache && s2 && "server" === s2.source ? i.reject(new Q(G.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r2);
      },
      error: (t4) => i.reject(t4)
    }), o = new Xu(un(n2.path), r, {
      includeMetadataChanges: true,
      Du: true
    });
    return Wu(t3, o);
  }(await ra(t2), t2.asyncQueue, e, n, s)), s.promise;
}
function ha(t2, e) {
  const n = new j();
  return t2.asyncQueue.enqueueAndForget(async () => async function(t3, e2, n2) {
    try {
      const s = await Mo(
        t3,
        e2,
        true
      ), i = new rc(e2, s.ji), r = i.Ku(s.documents), o = i.applyChanges(
        r,
        false
      );
      n2.resolve(o.snapshot);
    } catch (t4) {
      const s = Uu(t4, `Failed to execute query '${e2} against cache`);
      n2.reject(s);
    }
  }(await na(t2), e, n)), n.promise;
}
function la(t2, e, n = {}) {
  const s = new j();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n2, s2, i) {
    const r = new jc({
      next: (n3) => {
        e2.enqueueAndForget(() => zu(t3, o)), n3.fromCache && "server" === s2.source ? i.reject(new Q(G.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n3);
      },
      error: (t4) => i.reject(t4)
    }), o = new Xu(n2, r, {
      includeMetadataChanges: true,
      Du: true
    });
    return Wu(t3, o);
  }(await ra(t2), t2.asyncQueue, e, n, s)), s.promise;
}
function fa(t2, e) {
  const n = new jc(e);
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2) {
    K(t3).Tu.add(e2), e2.next();
  }(await ra(t2), n)), () => {
    n.Tc(), t2.asyncQueue.enqueueAndForget(async () => function(t3, e2) {
      K(t3).Tu.delete(e2);
    }(await ra(t2), n));
  };
}
function da(t2, e, n) {
  const s = new j();
  return t2.asyncQueue.enqueueAndForget(async () => {
    const i = await function(t3) {
      return ta(t3).then((t4) => t4.datastore);
    }(t2);
    new Hc(t2.asyncQueue, i, n, e, s).run();
  }), s.promise;
}
function _a(t2, e, n, s) {
  const i = function(t3, e2) {
    let n2;
    n2 = "string" == typeof t3 ? new TextEncoder().encode(t3) : t3;
    return function(t4, e3) {
      return new Wc(t4, e3);
    }(function(t4, e3) {
      if (t4 instanceof Uint8Array)
        return Qc(t4, e3);
      if (t4 instanceof ArrayBuffer)
        return Qc(new Uint8Array(t4), e3);
      if (t4 instanceof ReadableStream)
        return t4.getReader();
      throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
    }(n2), e2);
  }(n, iu(e));
  t2.asyncQueue.enqueueAndForget(async () => {
    Lc(await ia(t2), i, s);
  });
}
function wa(t2, e) {
  return t2.asyncQueue.enqueue(async () => function(t3, e2) {
    const n = K(t3);
    return n.persistence.runTransaction("Get named query", "readonly", (t4) => n.Ds.getNamedQuery(t4, e2));
  }(await na(t2), e));
}
const ma = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ga(t2, e, n) {
  if (!n)
    throw new Q(G.INVALID_ARGUMENT, `Function ${t2}() cannot be called with an empty ${e}.`);
}
function ya(t2, e, n, s) {
  if (true === e && true === s)
    throw new Q(G.INVALID_ARGUMENT, `${t2} and ${n} cannot be used together.`);
}
function pa(t2) {
  if (!dt.isDocumentKey(t2))
    throw new Q(G.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t2} has ${t2.length}.`);
}
function Ia(t2) {
  if (dt.isDocumentKey(t2))
    throw new Q(G.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t2} has ${t2.length}.`);
}
function Ta(t2) {
  if (void 0 === t2)
    return "undefined";
  if (null === t2)
    return "null";
  if ("string" == typeof t2)
    return t2.length > 20 && (t2 = `${t2.substring(0, 20)}...`), JSON.stringify(t2);
  if ("number" == typeof t2 || "boolean" == typeof t2)
    return "" + t2;
  if ("object" == typeof t2) {
    if (t2 instanceof Array)
      return "an array";
    {
      const e = function(t3) {
        if (t3.constructor)
          return t3.constructor.name;
        return null;
      }(t2);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t2 ? "a function" : L();
}
function Ea(t2, e) {
  if ("_delegate" in t2 && (t2 = t2._delegate), !(t2 instanceof e)) {
    if (e.name === t2.constructor.name)
      throw new Q(G.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = Ta(t2);
      throw new Q(G.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t2;
}
function Aa(t2, e) {
  if (e <= 0)
    throw new Q(G.INVALID_ARGUMENT, `Function ${t2}() requires a positive number, but it was: ${e}.`);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra {
  constructor(t2) {
    var e;
    if (void 0 === t2.host) {
      if (void 0 !== t2.ssl)
        throw new Q(G.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t2.host, this.ssl = null === (e = t2.ssl) || void 0 === e || e;
    if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, void 0 === t2.cacheSizeBytes)
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
        throw new Q(G.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, ya("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
  }
  isEqual(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba {
  constructor(t2, e, n) {
    this._authCredentials = e, this._appCheckCredentials = n, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Ra({}), this._settingsFrozen = false, t2 instanceof ue ? this._databaseId = t2 : (this._app = t2, this._databaseId = function(t3) {
      if (!Object.prototype.hasOwnProperty.apply(t3.options, ["projectId"]))
        throw new Q(G.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ue(t3.options.projectId);
    }(t2));
  }
  get app() {
    if (!this._app)
      throw new Q(G.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t2) {
    if (this._settingsFrozen)
      throw new Q(G.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Ra(t2), void 0 !== t2.credentials && (this._authCredentials = function(t3) {
      if (!t3)
        return new z();
      switch (t3.type) {
        case "gapi":
          const e = t3.client;
          return U(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new X(e, t3.sessionIndex || "0", t3.iamToken || null);
        case "provider":
          return t3.client;
        default:
          throw new Q(G.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t2.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    return function(t2) {
      const e = ma.get(t2);
      e && (O("ComponentProvider", "Removing Datastore"), ma.delete(t2), e.terminate());
    }(this), Promise.resolve();
  }
}
function Pa(t2, e, n, s = {}) {
  var i;
  const r = (t2 = Ea(t2, ba))._getSettings();
  if ("firestore.googleapis.com" !== r.host && r.host !== e && $("Host has been set in both settings() and useEmulator(), emulator host will be used"), t2._setSettings(Object.assign(Object.assign({}, r), {
    host: `${e}:${n}`,
    ssl: false
  })), s.mockUserToken) {
    let e2, n2;
    if ("string" == typeof s.mockUserToken)
      e2 = s.mockUserToken, n2 = C.MOCK_USER;
    else {
      e2 = createMockUserToken(s.mockUserToken, null === (i = t2._app) || void 0 === i ? void 0 : i.options.projectId);
      const r2 = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!r2)
        throw new Q(G.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new C(r2);
    }
    t2._authCredentials = new H(new W(e2, n2));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va {
  constructor(t2, e, n) {
    this.converter = e, this._key = n, this.type = "document", this.firestore = t2;
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Sa(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t2) {
    return new va(this.firestore, t2, this._key);
  }
}
class Va {
  constructor(t2, e, n) {
    this.converter = e, this._query = n, this.type = "query", this.firestore = t2;
  }
  withConverter(t2) {
    return new Va(this.firestore, t2, this._query);
  }
}
class Sa extends Va {
  constructor(t2, e, n) {
    super(t2, e, un(n)), this._path = n, this.type = "collection";
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t2 = this._path.popLast();
    return t2.isEmpty() ? null : new va(
      this.firestore,
      null,
      new dt(t2)
    );
  }
  withConverter(t2) {
    return new Sa(this.firestore, t2, this._path);
  }
}
function Da(t2, e, ...n) {
  if (t2 = getModularInstance(t2), ga("collection", "path", e), t2 instanceof ba) {
    const s = ht.fromString(e, ...n);
    return Ia(s), new Sa(t2, null, s);
  }
  {
    if (!(t2 instanceof va || t2 instanceof Sa))
      throw new Q(G.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(ht.fromString(e, ...n));
    return Ia(s), new Sa(
      t2.firestore,
      null,
      s
    );
  }
}
function Ca(t2, e) {
  if (t2 = Ea(t2, ba), ga("collectionGroup", "collection id", e), e.indexOf("/") >= 0)
    throw new Q(G.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new Va(
    t2,
    null,
    function(t3) {
      return new rn(ht.emptyPath(), t3);
    }(e)
  );
}
function xa(t2, e, ...n) {
  if (t2 = getModularInstance(t2), 1 === arguments.length && (e = st.I()), ga("doc", "path", e), t2 instanceof ba) {
    const s = ht.fromString(e, ...n);
    return pa(s), new va(
      t2,
      null,
      new dt(s)
    );
  }
  {
    if (!(t2 instanceof va || t2 instanceof Sa))
      throw new Q(G.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(ht.fromString(e, ...n));
    return pa(s), new va(t2.firestore, t2 instanceof Sa ? t2.converter : null, new dt(s));
  }
}
function Na(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), (t2 instanceof va || t2 instanceof Sa) && (e instanceof va || e instanceof Sa) && (t2.firestore === e.firestore && t2.path === e.path && t2.converter === e.converter);
}
function ka(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), t2 instanceof Va && e instanceof Va && (t2.firestore === e.firestore && wn(t2._query, e._query) && t2.converter === e.converter);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma {
  constructor() {
    this.Mc = Promise.resolve(), this.Oc = [], this.Fc = false, this.$c = [], this.Bc = null, this.Lc = false, this.Uc = false, this.qc = [], this.So = new ru(this, "async_queue_retry"), this.Kc = () => {
      const t3 = su();
      t3 && O("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.So.Eo();
    };
    const t2 = su();
    t2 && "function" == typeof t2.addEventListener && t2.addEventListener("visibilitychange", this.Kc);
  }
  get isShuttingDown() {
    return this.Fc;
  }
  enqueueAndForget(t2) {
    this.enqueue(t2);
  }
  enqueueAndForgetEvenWhileRestricted(t2) {
    this.Gc(), this.Qc(t2);
  }
  enterRestrictedMode(t2) {
    if (!this.Fc) {
      this.Fc = true, this.Uc = t2 || false;
      const e = su();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Kc);
    }
  }
  enqueue(t2) {
    if (this.Gc(), this.Fc)
      return new Promise(() => {
      });
    const e = new j();
    return this.Qc(() => this.Fc && this.Uc ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t2) {
    this.enqueueAndForget(() => (this.Oc.push(t2), this.jc()));
  }
  async jc() {
    if (0 !== this.Oc.length) {
      try {
        await this.Oc[0](), this.Oc.shift(), this.So.reset();
      } catch (t2) {
        if (!Nt(t2))
          throw t2;
        O("AsyncQueue", "Operation failed with retryable error: " + t2);
      }
      this.Oc.length > 0 && this.So.Io(() => this.jc());
    }
  }
  Qc(t2) {
    const e = this.Mc.then(() => (this.Lc = true, t2().catch((t3) => {
      this.Bc = t3, this.Lc = false;
      const e2 = function(t4) {
        let e3 = t4.message || "";
        t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
        return e3;
      }(t3);
      throw F("INTERNAL UNHANDLED ERROR: ", e2), t3;
    }).then((t3) => (this.Lc = false, t3))));
    return this.Mc = e, e;
  }
  enqueueAfterDelay(t2, e, n) {
    this.Gc(), this.qc.indexOf(t2) > -1 && (e = 0);
    const s = Lu.createAndSchedule(this, t2, e, n, (t3) => this.Wc(t3));
    return this.$c.push(s), s;
  }
  Gc() {
    this.Bc && L();
  }
  verifyOperationInProgress() {
  }
  async zc() {
    let t2;
    do {
      t2 = this.Mc, await t2;
    } while (t2 !== this.Mc);
  }
  Hc(t2) {
    for (const e of this.$c)
      if (e.timerId === t2)
        return true;
    return false;
  }
  Jc(t2) {
    return this.zc().then(() => {
      this.$c.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
      for (const e of this.$c)
        if (e.skipDelay(), "all" !== t2 && e.timerId === t2)
          break;
      return this.zc();
    });
  }
  Yc(t2) {
    this.qc.push(t2);
  }
  Wc(t2) {
    const e = this.$c.indexOf(t2);
    this.$c.splice(e, 1);
  }
}
function Oa(t2) {
  return function(t3, e) {
    if ("object" != typeof t3 || null === t3)
      return false;
    const n = t3;
    for (const t4 of e)
      if (t4 in n && "function" == typeof n[t4])
        return true;
    return false;
  }(t2, ["next", "error", "complete"]);
}
class Fa {
  constructor() {
    this._progressObserver = {}, this._taskCompletionResolver = new j(), this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    };
  }
  onProgress(t2, e, n) {
    this._progressObserver = {
      next: t2,
      error: e,
      complete: n
    };
  }
  catch(t2) {
    return this._taskCompletionResolver.promise.catch(t2);
  }
  then(t2, e) {
    return this._taskCompletionResolver.promise.then(t2, e);
  }
  _completeWith(t2) {
    this._updateProgress(t2), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t2);
  }
  _failWith(t2) {
    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t2), this._taskCompletionResolver.reject(t2);
  }
  _updateProgress(t2) {
    this._lastProgress = t2, this._progressObserver.next && this._progressObserver.next(t2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $a = -1;
class Ba extends ba {
  constructor(t2, e, n) {
    super(t2, e, n), this.type = "firestore", this._queue = new Ma(), this._persistenceKey = "name" in t2 ? t2.name : "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || Ka(this), this._firestoreClient.terminate();
  }
}
function La(t2, e) {
  const n = _getProvider(t2, "firestore");
  if (n.isInitialized()) {
    const t3 = n.getImmediate(), s = n.getOptions();
    if (deepEqual(s, e))
      return t3;
    throw new Q(G.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== e.cacheSizeBytes && -1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
    throw new Q(G.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return n.initialize({
    options: e
  });
}
function Ua(e = getApp()) {
  return _getProvider(e, "firestore").getImmediate();
}
function qa(t2) {
  return t2._firestoreClient || Ka(t2), t2._firestoreClient.verifyNotTerminated(), t2._firestoreClient;
}
function Ka(t2) {
  var e;
  const n = t2._freezeSettings(), s = function(t3, e2, n2, s2) {
    return new oe(t3, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
  }(t2._databaseId, (null === (e = t2._app) || void 0 === e ? void 0 : e.options.appId) || "", t2._persistenceKey, n);
  t2._firestoreClient = new Jc(t2._authCredentials, t2._appCheckCredentials, t2._queue, s);
}
function Ga(t2, e) {
  th(t2 = Ea(t2, Ba));
  const n = qa(t2), s = t2._freezeSettings(), i = new Gc();
  return ja(n, i, new qc(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
}
function Qa(t2) {
  th(t2 = Ea(t2, Ba));
  const e = qa(t2), n = t2._freezeSettings(), s = new Gc();
  return ja(e, s, new Kc(s, n.cacheSizeBytes));
}
function ja(t2, e, n) {
  const s = new j();
  return t2.asyncQueue.enqueue(async () => {
    try {
      await Yc(t2, n), await Xc(t2, e), s.resolve();
    } catch (t3) {
      const e2 = t3;
      if (!function(t4) {
        if ("FirebaseError" === t4.name)
          return t4.code === G.FAILED_PRECONDITION || t4.code === G.UNIMPLEMENTED;
        if ("undefined" != typeof DOMException && t4 instanceof DOMException)
          return 22 === t4.code || 20 === t4.code || 11 === t4.code;
        return true;
      }(e2))
        throw e2;
      $("Error enabling offline persistence. Falling back to persistence disabled: " + e2), s.reject(e2);
    }
  }).then(() => s.promise);
}
function Wa(t2) {
  if (t2._initialized && !t2._terminated)
    throw new Q(G.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
  const e = new j();
  return t2._queue.enqueueAndForgetEvenWhileRestricted(async () => {
    try {
      await async function(t3) {
        if (!Dt.V())
          return Promise.resolve();
        const e2 = t3 + "main";
        await Dt.delete(e2);
      }(Eo(t2._databaseId, t2._persistenceKey)), e.resolve();
    } catch (t3) {
      e.reject(t3);
    }
  }), e.promise;
}
function za(t2) {
  return function(t3) {
    const e = new j();
    return t3.asyncQueue.enqueueAndForget(async () => yc(await ia(t3), e)), e.promise;
  }(qa(t2 = Ea(t2, Ba)));
}
function Ha(t2) {
  return oa(qa(t2 = Ea(t2, Ba)));
}
function Ja(t2) {
  return ua(qa(t2 = Ea(t2, Ba)));
}
function Ya(t2) {
  return _removeServiceInstance(t2.app, "firestore"), t2._delete();
}
function Xa(t2, e) {
  const n = qa(t2 = Ea(t2, Ba)), s = new Fa();
  return _a(n, t2._databaseId, e, s), s;
}
function Za(t2, e) {
  return wa(qa(t2 = Ea(t2, Ba)), e).then((e2) => e2 ? new Va(t2, null, e2.query) : null);
}
function th(t2) {
  if (t2._initialized || t2._terminated)
    throw new Q(G.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh {
  constructor(...t2) {
    for (let e = 0; e < t2.length; ++e)
      if (0 === t2[e].length)
        throw new Q(G.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new ft(t2);
  }
  isEqual(t2) {
    return this._internalPath.isEqual(t2._internalPath);
  }
}
function nh() {
  return new eh("__name__");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh {
  constructor(t2) {
    this._byteString = t2;
  }
  static fromBase64String(t2) {
    try {
      return new sh(Xt.fromBase64String(t2));
    } catch (t3) {
      throw new Q(G.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t3);
    }
  }
  static fromUint8Array(t2) {
    return new sh(Xt.fromUint8Array(t2));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t2) {
    return this._byteString.isEqual(t2._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih {
  constructor(t2) {
    this._methodName = t2;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh {
  constructor(t2, e) {
    if (!isFinite(t2) || t2 < -90 || t2 > 90)
      throw new Q(G.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new Q(G.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t2, this._long = e;
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t2) {
    return this._lat === t2._lat && this._long === t2._long;
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  _compareTo(t2) {
    return it(this._lat, t2._lat) || it(this._long, t2._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oh = /^__.*__$/;
class uh {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return null !== this.fieldMask ? new Hn(t2, this.data, this.fieldMask, e, this.fieldTransforms) : new zn(t2, this.data, e, this.fieldTransforms);
  }
}
class ch {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return new Hn(t2, this.data, this.fieldMask, e, this.fieldTransforms);
  }
}
function ah(t2) {
  switch (t2) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw L();
  }
}
class hh {
  constructor(t2, e, n, s, i, r) {
    this.settings = t2, this.databaseId = e, this.wt = n, this.ignoreUndefinedProperties = s, void 0 === i && this.Xc(), this.fieldTransforms = i || [], this.fieldMask = r || [];
  }
  get path() {
    return this.settings.path;
  }
  get Zc() {
    return this.settings.Zc;
  }
  ta(t2) {
    return new hh(Object.assign(Object.assign({}, this.settings), t2), this.databaseId, this.wt, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  ea(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ta({
      path: n,
      na: false
    });
    return s.sa(t2), s;
  }
  ia(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ta({
      path: n,
      na: false
    });
    return s.Xc(), s;
  }
  ra(t2) {
    return this.ta({
      path: void 0,
      na: true
    });
  }
  oa(t2) {
    return Dh(t2, this.settings.methodName, this.settings.ua || false, this.path, this.settings.ca);
  }
  contains(t2) {
    return void 0 !== this.fieldMask.find((e) => t2.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t2.isPrefixOf(e.field));
  }
  Xc() {
    if (this.path)
      for (let t2 = 0; t2 < this.path.length; t2++)
        this.sa(this.path.get(t2));
  }
  sa(t2) {
    if (0 === t2.length)
      throw this.oa("Document fields must not be empty");
    if (ah(this.Zc) && oh.test(t2))
      throw this.oa('Document fields cannot begin and end with "__"');
  }
}
class lh {
  constructor(t2, e, n) {
    this.databaseId = t2, this.ignoreUndefinedProperties = e, this.wt = n || iu(t2);
  }
  aa(t2, e, n, s = false) {
    return new hh({
      Zc: t2,
      methodName: e,
      ca: n,
      path: ft.emptyPath(),
      na: false,
      ua: s
    }, this.databaseId, this.wt, this.ignoreUndefinedProperties);
  }
}
function fh(t2) {
  const e = t2._freezeSettings(), n = iu(t2._databaseId);
  return new lh(t2._databaseId, !!e.ignoreUndefinedProperties, n);
}
function dh(t2, e, n, s, i, r = {}) {
  const o = t2.aa(r.merge || r.mergeFields ? 2 : 0, e, n, i);
  Ph("Data must be an object, but it was:", o, s);
  const u = Rh(s, o);
  let c, a;
  if (r.merge)
    c = new Jt(o.fieldMask), a = o.fieldTransforms;
  else if (r.mergeFields) {
    const t3 = [];
    for (const s2 of r.mergeFields) {
      const i2 = vh(e, s2, n);
      if (!o.contains(i2))
        throw new Q(G.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      Ch(t3, i2) || t3.push(i2);
    }
    c = new Jt(t3), a = o.fieldTransforms.filter((t4) => c.covers(t4.field));
  } else
    c = null, a = o.fieldTransforms;
  return new uh(new xe(u), c, a);
}
class _h extends ih {
  _toFieldTransform(t2) {
    if (2 !== t2.Zc)
      throw 1 === t2.Zc ? t2.oa(`${this._methodName}() can only appear at the top level of your update data`) : t2.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t2.fieldMask.push(t2.path), null;
  }
  isEqual(t2) {
    return t2 instanceof _h;
  }
}
function wh(t2, e, n) {
  return new hh({
    Zc: 3,
    ca: e.settings.ca,
    methodName: t2._methodName,
    na: n
  }, e.databaseId, e.wt, e.ignoreUndefinedProperties);
}
class mh extends ih {
  _toFieldTransform(t2) {
    return new Fn(t2.path, new Sn());
  }
  isEqual(t2) {
    return t2 instanceof mh;
  }
}
class gh extends ih {
  constructor(t2, e) {
    super(t2), this.ha = e;
  }
  _toFieldTransform(t2) {
    const e = wh(
      this,
      t2,
      true
    ), n = this.ha.map((t3) => Ah(t3, e)), s = new Dn(n);
    return new Fn(t2.path, s);
  }
  isEqual(t2) {
    return this === t2;
  }
}
class yh extends ih {
  constructor(t2, e) {
    super(t2), this.ha = e;
  }
  _toFieldTransform(t2) {
    const e = wh(
      this,
      t2,
      true
    ), n = this.ha.map((t3) => Ah(t3, e)), s = new xn(n);
    return new Fn(t2.path, s);
  }
  isEqual(t2) {
    return this === t2;
  }
}
class ph extends ih {
  constructor(t2, e) {
    super(t2), this.la = e;
  }
  _toFieldTransform(t2) {
    const e = new kn(t2.wt, Rn(t2.wt, this.la));
    return new Fn(t2.path, e);
  }
  isEqual(t2) {
    return this === t2;
  }
}
function Ih(t2, e, n, s) {
  const i = t2.aa(1, e, n);
  Ph("Data must be an object, but it was:", i, s);
  const r = [], o = xe.empty();
  qt(s, (t3, s2) => {
    const u2 = Sh(e, t3, n);
    s2 = getModularInstance(s2);
    const c = i.ia(u2);
    if (s2 instanceof _h)
      r.push(u2);
    else {
      const t4 = Ah(s2, c);
      null != t4 && (r.push(u2), o.set(u2, t4));
    }
  });
  const u = new Jt(r);
  return new ch(o, u, i.fieldTransforms);
}
function Th(t2, e, n, s, i, r) {
  const o = t2.aa(1, e, n), u = [vh(e, s, n)], c = [i];
  if (r.length % 2 != 0)
    throw new Q(G.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t3 = 0; t3 < r.length; t3 += 2)
    u.push(vh(e, r[t3])), c.push(r[t3 + 1]);
  const a = [], h = xe.empty();
  for (let t3 = u.length - 1; t3 >= 0; --t3)
    if (!Ch(a, u[t3])) {
      const e2 = u[t3];
      let n2 = c[t3];
      n2 = getModularInstance(n2);
      const s2 = o.ia(e2);
      if (n2 instanceof _h)
        a.push(e2);
      else {
        const t4 = Ah(n2, s2);
        null != t4 && (a.push(e2), h.set(e2, t4));
      }
    }
  const l2 = new Jt(a);
  return new ch(h, l2, o.fieldTransforms);
}
function Eh(t2, e, n, s = false) {
  return Ah(n, t2.aa(s ? 4 : 3, e));
}
function Ah(t2, e) {
  if (bh(
    t2 = getModularInstance(t2)
  ))
    return Ph("Unsupported field value:", e, t2), Rh(t2, e);
  if (t2 instanceof ih)
    return function(t3, e2) {
      if (!ah(e2.Zc))
        throw e2.oa(`${t3._methodName}() can only be used with update() and set()`);
      if (!e2.path)
        throw e2.oa(`${t3._methodName}() is not currently supported inside arrays`);
      const n = t3._toFieldTransform(e2);
      n && e2.fieldTransforms.push(n);
    }(t2, e), null;
  if (void 0 === t2 && e.ignoreUndefinedProperties)
    return null;
  if (e.path && e.fieldMask.push(e.path), t2 instanceof Array) {
    if (e.settings.na && 4 !== e.Zc)
      throw e.oa("Nested arrays are not supported");
    return function(t3, e2) {
      const n = [];
      let s = 0;
      for (const i of t3) {
        let t4 = Ah(i, e2.ra(s));
        null == t4 && (t4 = {
          nullValue: "NULL_VALUE"
        }), n.push(t4), s++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(t2, e);
  }
  return function(t3, e2) {
    if (null === (t3 = getModularInstance(t3)))
      return {
        nullValue: "NULL_VALUE"
      };
    if ("number" == typeof t3)
      return Rn(e2.wt, t3);
    if ("boolean" == typeof t3)
      return {
        booleanValue: t3
      };
    if ("string" == typeof t3)
      return {
        stringValue: t3
      };
    if (t3 instanceof Date) {
      const n = ut.fromDate(t3);
      return {
        timestampValue: xs(e2.wt, n)
      };
    }
    if (t3 instanceof ut) {
      const n = new ut(t3.seconds, 1e3 * Math.floor(t3.nanoseconds / 1e3));
      return {
        timestampValue: xs(e2.wt, n)
      };
    }
    if (t3 instanceof rh)
      return {
        geoPointValue: {
          latitude: t3.latitude,
          longitude: t3.longitude
        }
      };
    if (t3 instanceof sh)
      return {
        bytesValue: Ns(e2.wt, t3._byteString)
      };
    if (t3 instanceof va) {
      const n = e2.databaseId, s = t3.firestore._databaseId;
      if (!s.isEqual(n))
        throw e2.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: Os(t3.firestore._databaseId || e2.databaseId, t3._key.path)
      };
    }
    throw e2.oa(`Unsupported field value: ${Ta(t3)}`);
  }(t2, e);
}
function Rh(t2, e) {
  const n = {};
  return Kt(t2) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : qt(t2, (t3, s) => {
    const i = Ah(s, e.ea(t3));
    null != i && (n[t3] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function bh(t2) {
  return !("object" != typeof t2 || null === t2 || t2 instanceof Array || t2 instanceof Date || t2 instanceof ut || t2 instanceof rh || t2 instanceof sh || t2 instanceof va || t2 instanceof ih);
}
function Ph(t2, e, n) {
  if (!bh(n) || !function(t3) {
    return "object" == typeof t3 && null !== t3 && (Object.getPrototypeOf(t3) === Object.prototype || null === Object.getPrototypeOf(t3));
  }(n)) {
    const s = Ta(n);
    throw "an object" === s ? e.oa(t2 + " a custom object") : e.oa(t2 + " " + s);
  }
}
function vh(t2, e, n) {
  if ((e = getModularInstance(e)) instanceof eh)
    return e._internalPath;
  if ("string" == typeof e)
    return Sh(t2, e);
  throw Dh(
    "Field path arguments must be of type string or ",
    t2,
    false,
    void 0,
    n
  );
}
const Vh = new RegExp("[~\\*/\\[\\]]");
function Sh(t2, e, n) {
  if (e.search(Vh) >= 0)
    throw Dh(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t2,
      false,
      void 0,
      n
    );
  try {
    return new eh(...e.split("."))._internalPath;
  } catch (s) {
    throw Dh(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t2,
      false,
      void 0,
      n
    );
  }
}
function Dh(t2, e, n, s, i) {
  const r = s && !s.isEmpty(), o = void 0 !== i;
  let u = `Function ${e}() called with invalid data`;
  n && (u += " (via `toFirestore()`)"), u += ". ";
  let c = "";
  return (r || o) && (c += " (found", r && (c += ` in field ${s}`), o && (c += ` in document ${i}`), c += ")"), new Q(G.INVALID_ARGUMENT, u + t2 + c);
}
function Ch(t2, e) {
  return t2.some((t3) => t3.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh {
  constructor(t2, e, n, s, i) {
    this._firestore = t2, this._userDataWriter = e, this._key = n, this._document = s, this._converter = i;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new va(this._firestore, this._converter, this._key);
  }
  exists() {
    return null !== this._document;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t2 = new Nh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t2) {
    if (this._document) {
      const e = this._document.data.field(kh("DocumentSnapshot.get", t2));
      if (null !== e)
        return this._userDataWriter.convertValue(e);
    }
  }
}
class Nh extends xh {
  data() {
    return super.data();
  }
}
function kh(t2, e) {
  return "string" == typeof e ? Sh(t2, e) : e instanceof eh ? e._internalPath : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh {
  constructor(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  isEqual(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }
}
class Oh extends xh {
  constructor(t2, e, n, s, i, r) {
    super(t2, e, n, s, r), this._firestore = t2, this._firestoreImpl = t2, this.metadata = i;
  }
  exists() {
    return super.exists();
  }
  data(t2 = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new Fh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(e, t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t2.serverTimestamps);
    }
  }
  get(t2, e = {}) {
    if (this._document) {
      const n = this._document.data.field(kh("DocumentSnapshot.get", t2));
      if (null !== n)
        return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }
}
class Fh extends Oh {
  data(t2 = {}) {
    return super.data(t2);
  }
}
class $h {
  constructor(t2, e, n, s) {
    this._firestore = t2, this._userDataWriter = e, this._snapshot = s, this.metadata = new Mh(s.hasPendingWrites, s.fromCache), this.query = n;
  }
  get docs() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), t2;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return 0 === this.size;
  }
  forEach(t2, e) {
    this._snapshot.docs.forEach((n) => {
      t2.call(e, new Fh(this._firestore, this._userDataWriter, n.key, n, new Mh(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  docChanges(t2 = {}) {
    const e = !!t2.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new Q(G.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(t3, e2) {
      if (t3._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t3._snapshot.docChanges.map((n) => ({
          type: "added",
          doc: new Fh(t3._firestore, t3._userDataWriter, n.doc.key, n.doc, new Mh(t3._snapshot.mutatedKeys.has(n.doc.key), t3._snapshot.fromCache), t3.query.converter),
          oldIndex: -1,
          newIndex: e3++
        }));
      }
      {
        let n = t3._snapshot.oldDocs;
        return t3._snapshot.docChanges.filter((t4) => e2 || 3 !== t4.type).map((e3) => {
          const s = new Fh(t3._firestore, t3._userDataWriter, e3.doc.key, e3.doc, new Mh(t3._snapshot.mutatedKeys.has(e3.doc.key), t3._snapshot.fromCache), t3.query.converter);
          let i = -1, r = -1;
          return 0 !== e3.type && (i = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), 1 !== e3.type && (n = n.add(e3.doc), r = n.indexOf(e3.doc.key)), {
            type: Bh(e3.type),
            doc: s,
            oldIndex: i,
            newIndex: r
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
}
function Bh(t2) {
  switch (t2) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return L();
  }
}
function Lh(t2, e) {
  return t2 instanceof Oh && e instanceof Oh ? t2._firestore === e._firestore && t2._key.isEqual(e._key) && (null === t2._document ? null === e._document : t2._document.isEqual(e._document)) && t2._converter === e._converter : t2 instanceof $h && e instanceof $h && (t2._firestore === e._firestore && ka(t2.query, e.query) && t2.metadata.isEqual(e.metadata) && t2._snapshot.isEqual(e._snapshot));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uh(t2) {
  if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length)
    throw new Q(G.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class qh {
}
function Kh(t2, ...e) {
  for (const n of e)
    t2 = n._apply(t2);
  return t2;
}
class Gh extends qh {
  constructor(t2, e, n) {
    super(), this.fa = t2, this.da = e, this._a = n, this.type = "where";
  }
  _apply(t2) {
    const e = fh(t2.firestore), n = function(t3, e2, n2, s, i, r, o) {
      let u;
      if (i.isKeyField()) {
        if ("array-contains" === r || "array-contains-any" === r)
          throw new Q(G.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on documentId().`);
        if ("in" === r || "not-in" === r) {
          rl(o, r);
          const e3 = [];
          for (const n3 of o)
            e3.push(il(s, t3, n3));
          u = {
            arrayValue: {
              values: e3
            }
          };
        } else
          u = il(s, t3, o);
      } else
        "in" !== r && "not-in" !== r && "array-contains-any" !== r || rl(o, r), u = Eh(
          n2,
          e2,
          o,
          "in" === r || "not-in" === r
        );
      const c = Ge.create(i, r, u);
      return function(t4, e3) {
        if (e3.ht()) {
          const n4 = hn(t4);
          if (null !== n4 && !n4.isEqual(e3.field))
            throw new Q(G.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n4.toString()}' and '${e3.field.toString()}'`);
          const s2 = an(t4);
          null !== s2 && ol(t4, e3.field, s2);
        }
        const n3 = function(t5, e4) {
          for (const n4 of t5.filters)
            if (e4.indexOf(n4.op) >= 0)
              return n4.op;
          return null;
        }(
          t4,
          function(t5) {
            switch (t5) {
              case "!=":
                return ["!=", "not-in"];
              case "array-contains":
                return ["array-contains", "array-contains-any", "not-in"];
              case "in":
                return ["array-contains-any", "in", "not-in"];
              case "array-contains-any":
                return ["array-contains", "array-contains-any", "in", "not-in"];
              case "not-in":
                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
              default:
                return [];
            }
          }(e3.op)
        );
        if (null !== n3)
          throw n3 === e3.op ? new Q(G.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e3.op.toString()}' filter.`) : new Q(G.INVALID_ARGUMENT, `Invalid query. You cannot use '${e3.op.toString()}' filters with '${n3.toString()}' filters.`);
      }(t3, c), c;
    }(t2._query, "where", e, t2.firestore._databaseId, this.fa, this.da, this._a);
    return new Va(t2.firestore, t2.converter, function(t3, e2) {
      const n2 = t3.filters.concat([e2]);
      return new rn(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), n2, t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, n));
  }
}
function Qh(t2, e, n) {
  const s = e, i = kh("where", t2);
  return new Gh(i, s, n);
}
class jh extends qh {
  constructor(t2, e) {
    super(), this.fa = t2, this.wa = e, this.type = "orderBy";
  }
  _apply(t2) {
    const e = function(t3, e2, n) {
      if (null !== t3.startAt)
        throw new Q(G.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t3.endAt)
        throw new Q(G.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      const s = new tn(e2, n);
      return function(t4, e3) {
        if (null === an(t4)) {
          const n2 = hn(t4);
          null !== n2 && ol(t4, n2, e3.field);
        }
      }(t3, s), s;
    }(t2._query, this.fa, this.wa);
    return new Va(t2.firestore, t2.converter, function(t3, e2) {
      const n = t3.explicitOrderBy.concat([e2]);
      return new rn(t3.path, t3.collectionGroup, n, t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, e));
  }
}
function Wh(t2, e = "asc") {
  const n = e, s = kh("orderBy", t2);
  return new jh(s, n);
}
class zh extends qh {
  constructor(t2, e, n) {
    super(), this.type = t2, this.ma = e, this.ga = n;
  }
  _apply(t2) {
    return new Va(t2.firestore, t2.converter, _n(t2._query, this.ma, this.ga));
  }
}
function Hh(t2) {
  return Aa("limit", t2), new zh("limit", t2, "F");
}
function Jh(t2) {
  return Aa("limitToLast", t2), new zh("limitToLast", t2, "L");
}
class Yh extends qh {
  constructor(t2, e, n) {
    super(), this.type = t2, this.ya = e, this.pa = n;
  }
  _apply(t2) {
    const e = sl(t2, this.type, this.ya, this.pa);
    return new Va(t2.firestore, t2.converter, function(t3, e2) {
      return new rn(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, e2, t3.endAt);
    }(t2._query, e));
  }
}
function Xh(...t2) {
  return new Yh(
    "startAt",
    t2,
    true
  );
}
function Zh(...t2) {
  return new Yh(
    "startAfter",
    t2,
    false
  );
}
class tl extends qh {
  constructor(t2, e, n) {
    super(), this.type = t2, this.ya = e, this.pa = n;
  }
  _apply(t2) {
    const e = sl(t2, this.type, this.ya, this.pa);
    return new Va(t2.firestore, t2.converter, function(t3, e2) {
      return new rn(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, e2);
    }(t2._query, e));
  }
}
function el(...t2) {
  return new tl(
    "endBefore",
    t2,
    false
  );
}
function nl(...t2) {
  return new tl("endAt", t2, true);
}
function sl(t2, e, n, s) {
  if (n[0] = getModularInstance(n[0]), n[0] instanceof xh)
    return function(t3, e2, n2, s2, i) {
      if (!s2)
        throw new Q(G.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n2}().`);
      const r = [];
      for (const n3 of fn(t3))
        if (n3.field.isKeyField())
          r.push(Ie(e2, s2.key));
        else {
          const t4 = s2.data.field(n3.field);
          if (se(t4))
            throw new Q(G.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n3.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
          if (null === t4) {
            const t5 = n3.field.canonicalString();
            throw new Q(G.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t5}' (used as the orderBy) does not exist.`);
          }
          r.push(t4);
        }
      return new Ze(r, i);
    }(t2._query, t2.firestore._databaseId, e, n[0]._document, s);
  {
    const i = fh(t2.firestore);
    return function(t3, e2, n2, s2, i2, r) {
      const o = t3.explicitOrderBy;
      if (i2.length > o.length)
        throw new Q(G.INVALID_ARGUMENT, `Too many arguments provided to ${s2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const u = [];
      for (let r2 = 0; r2 < i2.length; r2++) {
        const c = i2[r2];
        if (o[r2].field.isKeyField()) {
          if ("string" != typeof c)
            throw new Q(G.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s2}(), but got a ${typeof c}`);
          if (!ln(t3) && -1 !== c.indexOf("/"))
            throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s2}() must be a plain document ID, but '${c}' contains a slash.`);
          const n3 = t3.path.child(ht.fromString(c));
          if (!dt.isDocumentKey(n3))
            throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s2}() must result in a valid document path, but '${n3}' is not because it contains an odd number of segments.`);
          const i3 = new dt(n3);
          u.push(Ie(e2, i3));
        } else {
          const t4 = Eh(n2, s2, c);
          u.push(t4);
        }
      }
      return new Ze(u, r);
    }(t2._query, t2.firestore._databaseId, i, e, n, s);
  }
}
function il(t2, e, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n)
      throw new Q(G.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!ln(e) && -1 !== n.indexOf("/"))
      throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const s = e.path.child(ht.fromString(n));
    if (!dt.isDocumentKey(s))
      throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
    return Ie(t2, new dt(s));
  }
  if (n instanceof va)
    return Ie(t2, n._key);
  throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(n)}.`);
}
function rl(t2, e) {
  if (!Array.isArray(t2) || 0 === t2.length)
    throw new Q(G.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
  if (t2.length > 10)
    throw new Q(G.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}
function ol(t2, e, n) {
  if (!n.isEqual(e))
    throw new Q(G.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ul = {
  maxAttempts: 5
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl {
  convertValue(t2, e = "none") {
    switch (de(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return ee(t2.integerValue || t2.doubleValue);
      case 3:
        return this.convertTimestamp(t2.timestampValue);
      case 4:
        return this.convertServerTimestamp(t2, e);
      case 5:
        return t2.stringValue;
      case 6:
        return this.convertBytes(ne(t2.bytesValue));
      case 7:
        return this.convertReference(t2.referenceValue);
      case 8:
        return this.convertGeoPoint(t2.geoPointValue);
      case 9:
        return this.convertArray(t2.arrayValue, e);
      case 10:
        return this.convertObject(t2.mapValue, e);
      default:
        throw L();
    }
  }
  convertObject(t2, e) {
    const n = {};
    return qt(t2.fields, (t3, s) => {
      n[t3] = this.convertValue(s, e);
    }), n;
  }
  convertGeoPoint(t2) {
    return new rh(ee(t2.latitude), ee(t2.longitude));
  }
  convertArray(t2, e) {
    return (t2.values || []).map((t3) => this.convertValue(t3, e));
  }
  convertServerTimestamp(t2, e) {
    switch (e) {
      case "previous":
        const n = ie(t2);
        return null == n ? null : this.convertValue(n, e);
      case "estimate":
        return this.convertTimestamp(re(t2));
      default:
        return null;
    }
  }
  convertTimestamp(t2) {
    const e = te(t2);
    return new ut(e.seconds, e.nanos);
  }
  convertDocumentKey(t2, e) {
    const n = ht.fromString(t2);
    U(ai(n));
    const s = new ue(n.get(1), n.get(3)), i = new dt(n.popFirst(5));
    return s.isEqual(e) || F(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function al(t2, e, n) {
  let s;
  return s = t2 ? n && (n.merge || n.mergeFields) ? t2.toFirestore(e, n) : t2.toFirestore(e) : e, s;
}
class hl extends cl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new sh(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new va(this.firestore, null, e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll {
  constructor(t2, e) {
    this._firestore = t2, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = fh(t2);
  }
  set(t2, e, n) {
    this._verifyNotCommitted();
    const s = fl(t2, this._firestore), i = al(s.converter, e, n), r = dh(this._dataReader, "WriteBatch.set", s._key, i, null !== s.converter, n);
    return this._mutations.push(r.toMutation(s._key, Ln.none())), this;
  }
  update(t2, e, n, ...s) {
    this._verifyNotCommitted();
    const i = fl(t2, this._firestore);
    let r;
    return r = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Th(this._dataReader, "WriteBatch.update", i._key, e, n, s) : Ih(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(r.toMutation(i._key, Ln.exists(true))), this;
  }
  delete(t2) {
    this._verifyNotCommitted();
    const e = fl(t2, this._firestore);
    return this._mutations = this._mutations.concat(new Zn(e._key, Ln.none())), this;
  }
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed)
      throw new Q(G.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
}
function fl(t2, e) {
  if ((t2 = getModularInstance(t2)).firestore !== e)
    throw new Q(G.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dl(t2) {
  t2 = Ea(t2, va);
  const e = Ea(t2.firestore, Ba);
  return aa(qa(e), t2._key).then((n) => vl(e, t2, n));
}
class _l extends cl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new sh(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new va(this.firestore, null, e);
  }
}
function wl(t2) {
  t2 = Ea(t2, va);
  const e = Ea(t2.firestore, Ba), n = qa(e), s = new _l(e);
  return ca(n, t2._key).then((n2) => new Oh(e, s, t2._key, n2, new Mh(
    null !== n2 && n2.hasLocalMutations,
    true
  ), t2.converter));
}
function ml(t2) {
  t2 = Ea(t2, va);
  const e = Ea(t2.firestore, Ba);
  return aa(qa(e), t2._key, {
    source: "server"
  }).then((n) => vl(e, t2, n));
}
function gl(t2) {
  t2 = Ea(t2, Va);
  const e = Ea(t2.firestore, Ba), n = qa(e), s = new _l(e);
  return Uh(t2._query), la(n, t2._query).then((n2) => new $h(e, s, t2, n2));
}
function yl(t2) {
  t2 = Ea(t2, Va);
  const e = Ea(t2.firestore, Ba), n = qa(e), s = new _l(e);
  return ha(n, t2._query).then((n2) => new $h(e, s, t2, n2));
}
function pl(t2) {
  t2 = Ea(t2, Va);
  const e = Ea(t2.firestore, Ba), n = qa(e), s = new _l(e);
  return la(n, t2._query, {
    source: "server"
  }).then((n2) => new $h(e, s, t2, n2));
}
function Il(t2, e, n) {
  t2 = Ea(t2, va);
  const s = Ea(t2.firestore, Ba), i = al(t2.converter, e, n);
  return Pl(s, [dh(fh(s), "setDoc", t2._key, i, null !== t2.converter, n).toMutation(t2._key, Ln.none())]);
}
function Tl(t2, e, n, ...s) {
  t2 = Ea(t2, va);
  const i = Ea(t2.firestore, Ba), r = fh(i);
  let o;
  o = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Th(r, "updateDoc", t2._key, e, n, s) : Ih(r, "updateDoc", t2._key, e);
  return Pl(i, [o.toMutation(t2._key, Ln.exists(true))]);
}
function El(t2) {
  return Pl(Ea(t2.firestore, Ba), [new Zn(t2._key, Ln.none())]);
}
function Al(t2, e) {
  const n = Ea(t2.firestore, Ba), s = xa(t2), i = al(t2.converter, e);
  return Pl(n, [dh(fh(t2.firestore), "addDoc", s._key, i, null !== t2.converter, {}).toMutation(s._key, Ln.exists(false))]).then(() => s);
}
function Rl(t2, ...e) {
  var n, s, i;
  t2 = getModularInstance(t2);
  let r = {
    includeMetadataChanges: false
  }, o = 0;
  "object" != typeof e[o] || Oa(e[o]) || (r = e[o], o++);
  const u = {
    includeMetadataChanges: r.includeMetadataChanges
  };
  if (Oa(e[o])) {
    const t3 = e[o];
    e[o] = null === (n = t3.next) || void 0 === n ? void 0 : n.bind(t3), e[o + 1] = null === (s = t3.error) || void 0 === s ? void 0 : s.bind(t3), e[o + 2] = null === (i = t3.complete) || void 0 === i ? void 0 : i.bind(t3);
  }
  let c, a, h;
  if (t2 instanceof va)
    a = Ea(t2.firestore, Ba), h = un(t2._key.path), c = {
      next: (n2) => {
        e[o] && e[o](vl(a, t2, n2));
      },
      error: e[o + 1],
      complete: e[o + 2]
    };
  else {
    const n2 = Ea(t2, Va);
    a = Ea(n2.firestore, Ba), h = n2._query;
    const s2 = new _l(a);
    c = {
      next: (t3) => {
        e[o] && e[o](new $h(a, s2, n2, t3));
      },
      error: e[o + 1],
      complete: e[o + 2]
    }, Uh(t2._query);
  }
  return function(t3, e2, n2, s2) {
    const i2 = new jc(s2), r2 = new Xu(e2, i2, n2);
    return t3.asyncQueue.enqueueAndForget(async () => Wu(await ra(t3), r2)), () => {
      i2.Tc(), t3.asyncQueue.enqueueAndForget(async () => zu(await ra(t3), r2));
    };
  }(qa(a), h, u, c);
}
function bl(t2, e) {
  return fa(qa(t2 = Ea(t2, Ba)), Oa(e) ? e : {
    next: e
  });
}
function Pl(t2, e) {
  return function(t3, e2) {
    const n = new j();
    return t3.asyncQueue.enqueueAndForget(async () => fc(await ia(t3), e2, n)), n.promise;
  }(qa(t2), e);
}
function vl(t2, e, n) {
  const s = n.docs.get(e._key), i = new _l(t2);
  return new Oh(t2, i, e._key, s, new Mh(n.hasPendingWrites, n.fromCache), e.converter);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vl extends class {
  constructor(t2, e) {
    this._firestore = t2, this._transaction = e, this._dataReader = fh(t2);
  }
  get(t2) {
    const e = fl(t2, this._firestore), n = new hl(this._firestore);
    return this._transaction.lookup([e._key]).then((t3) => {
      if (!t3 || 1 !== t3.length)
        return L();
      const s = t3[0];
      if (s.isFoundDocument())
        return new xh(this._firestore, n, s.key, s, e.converter);
      if (s.isNoDocument())
        return new xh(this._firestore, n, e._key, null, e.converter);
      throw L();
    });
  }
  set(t2, e, n) {
    const s = fl(t2, this._firestore), i = al(s.converter, e, n), r = dh(this._dataReader, "Transaction.set", s._key, i, null !== s.converter, n);
    return this._transaction.set(s._key, r), this;
  }
  update(t2, e, n, ...s) {
    const i = fl(t2, this._firestore);
    let r;
    return r = "string" == typeof (e = getModularInstance(e)) || e instanceof eh ? Th(this._dataReader, "Transaction.update", i._key, e, n, s) : Ih(this._dataReader, "Transaction.update", i._key, e), this._transaction.update(i._key, r), this;
  }
  delete(t2) {
    const e = fl(t2, this._firestore);
    return this._transaction.delete(e._key), this;
  }
} {
  constructor(t2, e) {
    super(t2, e), this._firestore = t2;
  }
  get(t2) {
    const e = fl(t2, this._firestore), n = new _l(this._firestore);
    return super.get(t2).then((t3) => new Oh(this._firestore, n, e._key, t3._document, new Mh(
      false,
      false
    ), e.converter));
  }
}
function Sl(t2, e, n) {
  t2 = Ea(t2, Ba);
  const s = Object.assign(Object.assign({}, ul), n);
  !function(t3) {
    if (t3.maxAttempts < 1)
      throw new Q(G.INVALID_ARGUMENT, "Max attempts must be at least 1");
  }(s);
  return da(qa(t2), (n2) => e(new Vl(t2, n2)), s);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dl() {
  return new _h("deleteField");
}
function Cl() {
  return new mh("serverTimestamp");
}
function xl(...t2) {
  return new gh("arrayUnion", t2);
}
function Nl(...t2) {
  return new yh("arrayRemove", t2);
}
function kl(t2) {
  return new ph("increment", t2);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ml(t2) {
  return qa(t2 = Ea(t2, Ba)), new ll(t2, (e) => Pl(t2, e));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ol(t2, e) {
  var n;
  const s = qa(t2 = Ea(t2, Ba));
  if (!(null === (n = s.offlineComponents) || void 0 === n ? void 0 : n.indexBackfillerScheduler))
    return $("Cannot enable indexes when persistence is disabled"), Promise.resolve();
  const i = function(t3) {
    const e2 = "string" == typeof t3 ? function(t4) {
      var e3;
      try {
        return JSON.parse(t4);
      } catch (t5) {
        throw new Q(G.INVALID_ARGUMENT, "Failed to parse JSON: " + (null === (e3 = t5) || void 0 === e3 ? void 0 : e3.message));
      }
    }(t3) : t3, n2 = [];
    if (Array.isArray(e2.indexes))
      for (const t4 of e2.indexes) {
        const e3 = Fl(t4, "collectionGroup"), s2 = [];
        if (Array.isArray(t4.fields))
          for (const e4 of t4.fields) {
            const t5 = Sh("setIndexConfiguration", Fl(e4, "fieldPath"));
            "CONTAINS" === e4.arrayConfig ? s2.push(new yt(t5, 2)) : "ASCENDING" === e4.order ? s2.push(new yt(t5, 0)) : "DESCENDING" === e4.order && s2.push(new yt(t5, 1));
          }
        n2.push(new _t(_t.UNKNOWN_ID, e3, s2, It.empty()));
      }
    return n2;
  }(e);
  return na(s).then((t3) => async function(t4, e2) {
    const n2 = K(t4), s2 = n2.indexManager, i2 = [];
    return n2.persistence.runTransaction("Configure indexes", "readwrite", (t5) => s2.getFieldIndexes(t5).next((n3) => function(t6, e3, n4, s3, i3) {
      t6 = [...t6], e3 = [...e3], t6.sort(n4), e3.sort(n4);
      const r = t6.length, o = e3.length;
      let u = 0, c = 0;
      for (; u < o && c < r; ) {
        const r2 = n4(t6[c], e3[u]);
        r2 < 0 ? i3(t6[c++]) : r2 > 0 ? s3(e3[u++]) : (u++, c++);
      }
      for (; u < o; )
        s3(e3[u++]);
      for (; c < r; )
        i3(t6[c++]);
    }(n3, e2, gt, (e3) => {
      i2.push(s2.addFieldIndex(t5, e3));
    }, (e3) => {
      i2.push(s2.deleteFieldIndex(t5, e3));
    })).next(() => Vt.waitFor(i2)));
  }(t3, i));
}
function Fl(t2, e) {
  if ("string" != typeof t2[e])
    throw new Q(G.INVALID_ARGUMENT, "Missing string value for: " + e);
  return t2[e];
}
!function(t2, e = true) {
  !function(t3) {
    x = t3;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { options: n }) => {
    const s = t3.getProvider("app").getImmediate(), i = new Ba(s, new J(t3.getProvider("auth-internal")), new tt(t3.getProvider("app-check-internal")));
    return n = Object.assign({
      useFetchStreams: e
    }, n), i._setSettings(n), i;
  }, "PUBLIC")), registerVersion(D, "3.4.14", t2), registerVersion(D, "3.4.14", "esm2017");
}();
export {
  cl as AbstractUserDataWriter,
  sh as Bytes,
  $a as CACHE_SIZE_UNLIMITED,
  Sa as CollectionReference,
  va as DocumentReference,
  Oh as DocumentSnapshot,
  eh as FieldPath,
  ih as FieldValue,
  Ba as Firestore,
  Q as FirestoreError,
  rh as GeoPoint,
  Fa as LoadBundleTask,
  Va as Query,
  qh as QueryConstraint,
  Fh as QueryDocumentSnapshot,
  $h as QuerySnapshot,
  Mh as SnapshotMetadata,
  ut as Timestamp,
  Vl as Transaction,
  ll as WriteBatch,
  ue as _DatabaseId,
  dt as _DocumentKey,
  et as _EmptyAppCheckTokenProvider,
  z as _EmptyAuthCredentialsProvider,
  ft as _FieldPath,
  Ea as _cast,
  q as _debugAssert,
  Yt as _isBase64Available,
  $ as _logWarn,
  ya as _validateIsNotUsedTogether,
  Al as addDoc,
  Nl as arrayRemove,
  xl as arrayUnion,
  Wa as clearIndexedDbPersistence,
  Da as collection,
  Ca as collectionGroup,
  Pa as connectFirestoreEmulator,
  El as deleteDoc,
  Dl as deleteField,
  Ja as disableNetwork,
  xa as doc,
  nh as documentId,
  Ga as enableIndexedDbPersistence,
  Qa as enableMultiTabIndexedDbPersistence,
  Ha as enableNetwork,
  nl as endAt,
  el as endBefore,
  qa as ensureFirestoreConfigured,
  Pl as executeWrite,
  dl as getDoc,
  wl as getDocFromCache,
  ml as getDocFromServer,
  gl as getDocs,
  yl as getDocsFromCache,
  pl as getDocsFromServer,
  Ua as getFirestore,
  kl as increment,
  La as initializeFirestore,
  Hh as limit,
  Jh as limitToLast,
  Xa as loadBundle,
  Za as namedQuery,
  Rl as onSnapshot,
  bl as onSnapshotsInSync,
  Wh as orderBy,
  Kh as query,
  ka as queryEqual,
  Na as refEqual,
  Sl as runTransaction,
  Cl as serverTimestamp,
  Il as setDoc,
  Ol as setIndexConfiguration,
  M as setLogLevel,
  Lh as snapshotEqual,
  Zh as startAfter,
  Xh as startAt,
  Ya as terminate,
  Tl as updateDoc,
  za as waitForPendingWrites,
  Qh as where,
  Ml as writeBatch
};
