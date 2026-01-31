import zt, { forwardRef as Sr, useState as ve, useEffect as be, useRef as pe, useCallback as Er, useMemo as Rr } from "react";
import "gatsby";
function Wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} }, ae = {};
var ut;
function _r() {
  if (ut) return ae;
  ut = 1;
  var e = zt, t = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var d, g = {}, p = null, _ = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (_ = l.ref);
    for (d in l) i.call(l, d) && !a.hasOwnProperty(d) && (g[d] = l[d]);
    if (c && c.defaultProps) for (d in l = c.defaultProps, l) g[d] === void 0 && (g[d] = l[d]);
    return { $$typeof: t, type: c, key: p, ref: _, props: g, _owner: o.current };
  }
  return ae.Fragment = r, ae.jsx = s, ae.jsxs = s, ae;
}
var se = {};
var ft;
function jr() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = zt, t = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.provider"), c = /* @__PURE__ */ Symbol.for("react.context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), u = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.suspense_list"), g = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.offscreen"), j = Symbol.iterator, L = "@@iterator";
    function A(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = j && n[j] || n[L];
      return typeof f == "function" ? f : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(n) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
          h[w - 1] = arguments[w];
        U("error", n, h);
      }
    }
    function U(n, f, h) {
      {
        var w = F.ReactDebugCurrentFrame, x = w.getStackAddendum();
        x !== "" && (f += "%s", h = h.concat([x]));
        var k = h.map(function(y) {
          return String(y);
        });
        k.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, k);
      }
    }
    var b = !1, T = !1, B = !1, H = !1, W = !1, ne;
    ne = /* @__PURE__ */ Symbol.for("react.module.reference");
    function K(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || W || n === o || n === u || n === d || H || n === _ || b || T || B || typeof n == "object" && n !== null && (n.$$typeof === p || n.$$typeof === g || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === ne || n.getModuleId !== void 0));
    }
    function le(n, f, h) {
      var w = n.displayName;
      if (w)
        return w;
      var x = f.displayName || f.name || "";
      return x !== "" ? h + "(" + x + ")" : h;
    }
    function Y(n) {
      return n.displayName || "Context";
    }
    function N(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var f = n;
            return Y(f) + ".Consumer";
          case s:
            var h = n;
            return Y(h._context) + ".Provider";
          case l:
            return le(n, n.render, "ForwardRef");
          case g:
            var w = n.displayName || null;
            return w !== null ? w : N(n.type) || "Memo";
          case p: {
            var x = n, k = x._payload, y = x._init;
            try {
              return N(y(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ie = 0, He, $e, Be, Ue, Ne, qe, Ke;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Jt() {
      {
        if (ie === 0) {
          He = console.log, $e = console.info, Be = console.warn, Ue = console.error, Ne = console.group, qe = console.groupCollapsed, Ke = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ie++;
      }
    }
    function Zt() {
      {
        if (ie--, ie === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, n, {
              value: He
            }),
            info: X({}, n, {
              value: $e
            }),
            warn: X({}, n, {
              value: Be
            }),
            error: X({}, n, {
              value: Ue
            }),
            group: X({}, n, {
              value: Ne
            }),
            groupCollapsed: X({}, n, {
              value: qe
            }),
            groupEnd: X({}, n, {
              value: Ke
            })
          });
        }
        ie < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = F.ReactCurrentDispatcher, _e;
    function ue(n, f, h) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (x) {
            var w = x.stack.trim().match(/\n( *(at )?)/);
            _e = w && w[1] || "";
          }
        return `
` + _e + n;
      }
    }
    var je = !1, fe;
    {
      var Qt = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Qt();
    }
    function Xe(n, f) {
      if (!n || je)
        return "";
      {
        var h = fe.get(n);
        if (h !== void 0)
          return h;
      }
      var w;
      je = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Re.current, Re.current = null, Jt();
      try {
        if (f) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (D) {
              w = D;
            }
            Reflect.construct(n, [], y);
          } else {
            try {
              y.call();
            } catch (D) {
              w = D;
            }
            n.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            w = D;
          }
          n();
        }
      } catch (D) {
        if (D && w && typeof D.stack == "string") {
          for (var v = D.stack.split(`
`), I = w.stack.split(`
`), P = v.length - 1, O = I.length - 1; P >= 1 && O >= 0 && v[P] !== I[O]; )
            O--;
          for (; P >= 1 && O >= 0; P--, O--)
            if (v[P] !== I[O]) {
              if (P !== 1 || O !== 1)
                do
                  if (P--, O--, O < 0 || v[P] !== I[O]) {
                    var $ = `
` + v[P].replace(" at new ", " at ");
                    return n.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", n.displayName)), typeof n == "function" && fe.set(n, $), $;
                  }
                while (P >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        je = !1, Re.current = k, Zt(), Error.prepareStackTrace = x;
      }
      var ee = n ? n.displayName || n.name : "", G = ee ? ue(ee) : "";
      return typeof n == "function" && fe.set(n, G), G;
    }
    function er(n, f, h) {
      return Xe(n, !1);
    }
    function tr(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function de(n, f, h) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Xe(n, tr(n));
      if (typeof n == "string")
        return ue(n);
      switch (n) {
        case u:
          return ue("Suspense");
        case d:
          return ue("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return er(n.render);
          case g:
            return de(n.type, f, h);
          case p: {
            var w = n, x = w._payload, k = w._init;
            try {
              return de(k(x), f, h);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Ge = {}, Je = F.ReactDebugCurrentFrame;
    function he(n) {
      if (n) {
        var f = n._owner, h = de(n.type, n._source, f ? f.type : null);
        Je.setExtraStackFrame(h);
      } else
        Je.setExtraStackFrame(null);
    }
    function rr(n, f, h, w, x) {
      {
        var k = Function.call.bind(oe);
        for (var y in n)
          if (k(n, y)) {
            var v = void 0;
            try {
              if (typeof n[y] != "function") {
                var I = Error((w || "React class") + ": " + h + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              v = n[y](f, y, w, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              v = P;
            }
            v && !(v instanceof Error) && (he(x), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", h, y, typeof v), he(null)), v instanceof Error && !(v.message in Ge) && (Ge[v.message] = !0, he(x), E("Failed %s type: %s", h, v.message), he(null));
          }
      }
    }
    var nr = Array.isArray;
    function Pe(n) {
      return nr(n);
    }
    function ir(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return h;
      }
    }
    function or(n) {
      try {
        return Ze(n), !1;
      } catch {
        return !0;
      }
    }
    function Ze(n) {
      return "" + n;
    }
    function Qe(n) {
      if (or(n))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(n)), Ze(n);
    }
    var et = F.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, rt;
    function sr(n) {
      if (oe.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function cr(n) {
      if (oe.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function lr(n, f) {
      typeof n.ref == "string" && et.current;
    }
    function ur(n, f) {
      {
        var h = function() {
          tt || (tt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function fr(n, f) {
      {
        var h = function() {
          rt || (rt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var dr = function(n, f, h, w, x, k, y) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: h,
        props: y,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function hr(n, f, h, w, x) {
      {
        var k, y = {}, v = null, I = null;
        h !== void 0 && (Qe(h), v = "" + h), cr(f) && (Qe(f.key), v = "" + f.key), sr(f) && (I = f.ref, lr(f, x));
        for (k in f)
          oe.call(f, k) && !ar.hasOwnProperty(k) && (y[k] = f[k]);
        if (n && n.defaultProps) {
          var P = n.defaultProps;
          for (k in P)
            y[k] === void 0 && (y[k] = P[k]);
        }
        if (v || I) {
          var O = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && ur(y, O), I && fr(y, O);
        }
        return dr(n, v, I, x, w, et.current, y);
      }
    }
    var Te = F.ReactCurrentOwner, nt = F.ReactDebugCurrentFrame;
    function Q(n) {
      if (n) {
        var f = n._owner, h = de(n.type, n._source, f ? f.type : null);
        nt.setExtraStackFrame(h);
      } else
        nt.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Le(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function it() {
      {
        if (Te.current) {
          var n = N(Te.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function gr(n) {
      return "";
    }
    var ot = {};
    function mr(n) {
      {
        var f = it();
        if (!f) {
          var h = typeof n == "string" ? n : n.displayName || n.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function at(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var h = mr(f);
        if (ot[h])
          return;
        ot[h] = !0;
        var w = "";
        n && n._owner && n._owner !== Te.current && (w = " It was passed a child from " + N(n._owner.type) + "."), Q(n), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, w), Q(null);
      }
    }
    function st(n, f) {
      {
        if (typeof n != "object")
          return;
        if (Pe(n))
          for (var h = 0; h < n.length; h++) {
            var w = n[h];
            Le(w) && at(w, f);
          }
        else if (Le(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var x = A(n);
          if (typeof x == "function" && x !== n.entries)
            for (var k = x.call(n), y; !(y = k.next()).done; )
              Le(y.value) && at(y.value, f);
        }
      }
    }
    function wr(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === g))
          h = f.propTypes;
        else
          return;
        if (h) {
          var w = N(f);
          rr(h, n.props, "prop", w, n);
        } else if (f.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var x = N(f);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(n) {
      {
        for (var f = Object.keys(n.props), h = 0; h < f.length; h++) {
          var w = f[h];
          if (w !== "children" && w !== "key") {
            Q(n), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Q(null);
            break;
          }
        }
        n.ref !== null && (Q(n), E("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var ct = {};
    function lt(n, f, h, w, x, k) {
      {
        var y = K(n);
        if (!y) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = gr();
          I ? v += I : v += it();
          var P;
          n === null ? P = "null" : Pe(n) ? P = "array" : n !== void 0 && n.$$typeof === t ? (P = "<" + (N(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : P = typeof n, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, v);
        }
        var O = hr(n, f, h, x, k);
        if (O == null)
          return O;
        if (y) {
          var $ = f.children;
          if ($ !== void 0)
            if (w)
              if (Pe($)) {
                for (var ee = 0; ee < $.length; ee++)
                  st($[ee], n);
                Object.freeze && Object.freeze($);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st($, n);
        }
        if (oe.call(f, "key")) {
          var G = N(n), D = Object.keys(f).filter(function(kr) {
            return kr !== "key";
          }), Ae = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ct[G + Ae]) {
            var Cr = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ae, G, Cr, G), ct[G + Ae] = !0;
          }
        }
        return n === i ? pr(O) : wr(O), O;
      }
    }
    function vr(n, f, h) {
      return lt(n, f, h, !0);
    }
    function br(n, f, h) {
      return lt(n, f, h, !1);
    }
    var yr = br, xr = vr;
    se.Fragment = i, se.jsx = yr, se.jsxs = xr;
  })()), se;
}
var dt;
function Pr() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? ge.exports = _r() : ge.exports = jr()), ge.exports;
}
var m = Pr(), Ie = { exports: {} };
var ht;
function Tr() {
  return ht || (ht = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", s = 0; s < arguments.length; s++) {
          var c = arguments[s];
          c && (a = o(a, i(c)));
        }
        return a;
      }
      function i(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var s = "";
        for (var c in a)
          t.call(a, c) && a[c] && (s = o(s, c));
        return s;
      }
      function o(a, s) {
        return s ? a ? a + " " + s : a + s : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Ie)), Ie.exports;
}
var Or = Tr();
const Mt = /* @__PURE__ */ Wt(Or);
var me = { exports: {} }, we = { exports: {} }, Fe, gt;
function Lr() {
  if (gt) return Fe;
  gt = 1;
  var e = 1e3, t = e * 60, r = t * 60, i = r * 24, o = i * 365.25;
  Fe = function(u, d) {
    d = d || {};
    var g = typeof u;
    if (g === "string" && u.length > 0)
      return a(u);
    if (g === "number" && isNaN(u) === !1)
      return d.long ? c(u) : s(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function a(u) {
    if (u = String(u), !(u.length > 100)) {
      var d = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        u
      );
      if (d) {
        var g = parseFloat(d[1]), p = (d[2] || "ms").toLowerCase();
        switch (p) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return g * o;
          case "days":
          case "day":
          case "d":
            return g * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return g * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return g * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return g * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function s(u) {
    return u >= i ? Math.round(u / i) + "d" : u >= r ? Math.round(u / r) + "h" : u >= t ? Math.round(u / t) + "m" : u >= e ? Math.round(u / e) + "s" : u + "ms";
  }
  function c(u) {
    return l(u, i, "day") || l(u, r, "hour") || l(u, t, "minute") || l(u, e, "second") || u + " ms";
  }
  function l(u, d, g) {
    if (!(u < d))
      return u < d * 1.5 ? Math.floor(u / d) + " " + g : Math.ceil(u / d) + " " + g + "s";
  }
  return Fe;
}
var mt;
function Ar() {
  return mt || (mt = 1, (function(e, t) {
    t = e.exports = o.debug = o.default = o, t.coerce = l, t.disable = s, t.enable = a, t.enabled = c, t.humanize = Lr(), t.names = [], t.skips = [], t.formatters = {};
    var r;
    function i(u) {
      var d = 0, g;
      for (g in u)
        d = (d << 5) - d + u.charCodeAt(g), d |= 0;
      return t.colors[Math.abs(d) % t.colors.length];
    }
    function o(u) {
      function d() {
        if (d.enabled) {
          var g = d, p = +/* @__PURE__ */ new Date(), _ = p - (r || p);
          g.diff = _, g.prev = r, g.curr = p, r = p;
          for (var j = new Array(arguments.length), L = 0; L < j.length; L++)
            j[L] = arguments[L];
          j[0] = t.coerce(j[0]), typeof j[0] != "string" && j.unshift("%O");
          var A = 0;
          j[0] = j[0].replace(/%([a-zA-Z%])/g, function(E, U) {
            if (E === "%%") return E;
            A++;
            var b = t.formatters[U];
            if (typeof b == "function") {
              var T = j[A];
              E = b.call(g, T), j.splice(A, 1), A--;
            }
            return E;
          }), t.formatArgs.call(g, j);
          var F = d.log || t.log || console.log.bind(console);
          F.apply(g, j);
        }
      }
      return d.namespace = u, d.enabled = t.enabled(u), d.useColors = t.useColors(), d.color = i(u), typeof t.init == "function" && t.init(d), d;
    }
    function a(u) {
      t.save(u), t.names = [], t.skips = [];
      for (var d = (typeof u == "string" ? u : "").split(/[\s,]+/), g = d.length, p = 0; p < g; p++)
        d[p] && (u = d[p].replace(/\*/g, ".*?"), u[0] === "-" ? t.skips.push(new RegExp("^" + u.substr(1) + "$")) : t.names.push(new RegExp("^" + u + "$")));
    }
    function s() {
      t.enable("");
    }
    function c(u) {
      var d, g;
      for (d = 0, g = t.skips.length; d < g; d++)
        if (t.skips[d].test(u))
          return !1;
      for (d = 0, g = t.names.length; d < g; d++)
        if (t.names[d].test(u))
          return !0;
      return !1;
    }
    function l(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
  })(we, we.exports)), we.exports;
}
var wt;
function Ir() {
  return wt || (wt = 1, (function(e, t) {
    t = e.exports = Ar(), t.log = o, t.formatArgs = i, t.save = a, t.load = s, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : c(), t.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function r() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    t.formatters.j = function(l) {
      try {
        return JSON.stringify(l);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
    function i(l) {
      var u = this.useColors;
      if (l[0] = (u ? "%c" : "") + this.namespace + (u ? " %c" : " ") + l[0] + (u ? "%c " : " ") + "+" + t.humanize(this.diff), !!u) {
        var d = "color: " + this.color;
        l.splice(1, 0, d, "color: inherit");
        var g = 0, p = 0;
        l[0].replace(/%[a-zA-Z%]/g, function(_) {
          _ !== "%%" && (g++, _ === "%c" && (p = g));
        }), l.splice(p, 0, d);
      }
    }
    function o() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function a(l) {
      try {
        l == null ? t.storage.removeItem("debug") : t.storage.debug = l;
      } catch {
      }
    }
    function s() {
      var l;
      try {
        l = t.storage.debug;
      } catch {
      }
      return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
    }
    t.enable(s());
    function c() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  })(me, me.exports)), me.exports;
}
var De, pt;
function Fr() {
  if (pt) return De;
  pt = 1;
  var e = Ir()("jsonp");
  De = i;
  var t = 0;
  function r() {
  }
  function i(o, a, s) {
    typeof a == "function" && (s = a, a = {}), a || (a = {});
    var c = a.prefix || "__jp", l = a.name || c + t++, u = a.param || "callback", d = a.timeout != null ? a.timeout : 6e4, g = encodeURIComponent, p = document.getElementsByTagName("script")[0] || document.head, _, j;
    d && (j = setTimeout(function() {
      L(), s && s(new Error("Timeout"));
    }, d));
    function L() {
      _.parentNode && _.parentNode.removeChild(_), window[l] = r, j && clearTimeout(j);
    }
    function A() {
      window[l] && L();
    }
    return window[l] = function(F) {
      e("jsonp got", F), L(), s && s(null, F);
    }, o += (~o.indexOf("?") ? "&" : "?") + u + "=" + g(l), o = o.replace("?&", "?"), e('jsonp req "%s"', o), _ = document.createElement("script"), _.src = o, p.parentNode.insertBefore(_, p), A;
  }
  return De;
}
var Dr = Fr();
const J = /* @__PURE__ */ Wt(Dr);
var zr = Object.defineProperty, Wr = Object.defineProperties, Mr = Object.getOwnPropertyDescriptors, ye = Object.getOwnPropertySymbols, Vt = Object.prototype.hasOwnProperty, Ht = Object.prototype.propertyIsEnumerable, vt = (e, t, r) => t in e ? zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, V = (e, t) => {
  for (var r in t || (t = {}))
    Vt.call(t, r) && vt(e, r, t[r]);
  if (ye)
    for (var r of ye(t))
      Ht.call(t, r) && vt(e, r, t[r]);
  return e;
}, ke = (e, t) => Wr(e, Mr(t)), Se = (e, t) => {
  var r = {};
  for (var i in e)
    Vt.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && ye)
    for (var i of ye(e))
      t.indexOf(i) < 0 && Ht.call(e, i) && (r[i] = e[i]);
  return r;
};
function ce(e) {
  return (r) => {
    var i = r, {
      bgStyle: o = {},
      borderRadius: a = 0,
      iconFillColor: s = "white",
      round: c = !1,
      size: l = 64
    } = i, u = Se(i, [
      "bgStyle",
      "borderRadius",
      "iconFillColor",
      "round",
      "size"
    ]);
    return /* @__PURE__ */ m.jsxs("svg", ke(V({ viewBox: "0 0 64 64", width: l, height: l }, u), { children: [
      c ? /* @__PURE__ */ m.jsx("circle", { cx: "32", cy: "32", r: "32", fill: e.color, style: o }) : /* @__PURE__ */ m.jsx(
        "rect",
        {
          width: "64",
          height: "64",
          rx: a,
          ry: a,
          fill: e.color,
          style: o
        }
      ),
      /* @__PURE__ */ m.jsx("path", { d: e.path, fill: s })
    ] }));
  };
}
class Vr extends Error {
  constructor(t) {
    super(t), this.name = "AssertionError";
  }
}
function S(e, t) {
  if (!e)
    throw new Vr(t);
}
function C(e) {
  const t = Object.entries(e).filter(([, r]) => r != null).map(([r, i]) => `${encodeURIComponent(r)}=${encodeURIComponent(String(i))}`);
  return t.length > 0 ? `?${t.join("&")}` : "";
}
const Hr = (e) => !!e && (typeof e == "object" || typeof e == "function") && "then" in e && typeof e.then == "function", $r = (e, t) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
}), Br = (e, t) => ({
  top: (window.screen.height - t) / 2,
  left: (window.screen.width - e) / 2
});
function Ur(e, t, r) {
  var i = t, { height: o, width: a } = i, s = Se(i, ["height", "width"]);
  const c = V({
    height: o,
    width: a,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes"
  }, s), l = window.open(
    e,
    "",
    Object.keys(c).map((u) => `${u}=${c[u]}`).join(", ")
  );
  if (r) {
    const u = window.setInterval(() => {
      try {
        (l === null || l.closed) && (window.clearInterval(u), r(l));
      } catch (d) {
        console.error(d);
      }
    }, 1e3);
  }
  return l;
}
function Nr(e) {
  var t = e, {
    beforeOnClick: r,
    children: i,
    className: o,
    disabled: a,
    disabledStyle: s = { opacity: 0.6 },
    forwardedRef: c,
    htmlTitle: l,
    networkLink: u,
    networkName: d,
    onClick: g,
    onShareWindowClose: p,
    openShareDialogOnClick: _ = !0,
    opts: j,
    resetButtonStyle: L = !0,
    style: A,
    title: F,
    url: E,
    windowHeight: U = 400,
    windowPosition: b = "windowCenter",
    windowWidth: T = 550
  } = t, B = Se(t, [
    "beforeOnClick",
    "children",
    "className",
    "disabled",
    "disabledStyle",
    "forwardedRef",
    "htmlTitle",
    "networkLink",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "networkName",
    // deconstructed from ...rest to prevent passing it to the button element
    "onClick",
    "onShareWindowClose",
    "openShareDialogOnClick",
    "opts",
    "resetButtonStyle",
    "style",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "title",
    // deconstructed from ...rest to prevent passing it to the button element
    "url",
    "windowHeight",
    "windowPosition",
    "windowWidth"
  ]);
  const H = async (K) => {
    const le = u(E, j);
    if (!a) {
      if (K.preventDefault(), r) {
        const Y = r();
        Hr(Y) && await Y;
      }
      if (_) {
        const Y = V({
          height: U,
          width: T
        }, b === "windowCenter" ? $r(T, U) : Br(T, U));
        Ur(le, Y, p);
      }
      g && g(K, le);
    }
  }, W = Mt(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!a,
      disabled: !!a
    },
    o
  ), ne = V(V(L ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, A), a && s);
  return /* @__PURE__ */ m.jsx(
    "button",
    ke(V({}, B), {
      className: W,
      onClick: H,
      ref: c,
      style: ne,
      title: l,
      children: i
    })
  );
}
function R(e, t, r, i) {
  const o = (a, s) => {
    const c = r(a), l = V({}, a);
    return Object.keys(c).forEach((d) => {
      delete l[d];
    }), /* @__PURE__ */ m.jsx(
      Nr,
      ke(V(V({}, i), l), {
        forwardedRef: s,
        networkName: e,
        networkLink: t,
        opts: c
      })
    );
  };
  return o.displayName = `ShareButton-${e}`, Sr(o);
}
function qr(e, { title: t, separator: r }) {
  return S(e, "bluesky.url"), "https://bsky.app/intent/compose" + C({
    text: t ? t + r + e : e
  });
}
R(
  "bluesky",
  qr,
  (e) => ({
    title: e.title,
    separator: e.separator || " "
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
function Kr(e, { subject: t, body: r, separator: i }) {
  return "mailto:" + C({ subject: t, body: r ? r + i + e : e });
}
R(
  "email",
  Kr,
  (e) => ({
    subject: e.subject,
    body: e.body,
    separator: e.separator || " "
  }),
  {
    openShareDialogOnClick: !1,
    onClick: (e, t) => {
      window.location.href = t;
    }
  }
);
const bt = ce({
  color: "#0965FE",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
});
function Yr(e, { appId: t, redirectUri: r, to: i }) {
  return "https://www.facebook.com/dialog/send" + C({
    link: e,
    redirect_uri: r || e,
    app_id: t,
    to: i
  });
}
R(
  "facebookmessenger",
  Yr,
  (e) => ({
    appId: e.appId,
    redirectUri: e.redirectUri,
    to: e.to
  }),
  {
    windowWidth: 1e3,
    windowHeight: 820
  }
);
function Xr(e, { hashtag: t }) {
  return S(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + C({ u: e, hashtag: t });
}
const yt = R(
  "facebook",
  Xr,
  (e) => ({ hashtag: e.hashtag }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
function Gr() {
  const e = pe(!1);
  return be(() => (e.current = !0, () => {
    e.current = !1;
  }), []), Er(() => e.current, []);
}
function Jr(e) {
  var t = e, {
    children: r = (p) => p,
    className: i,
    getCount: o,
    url: a
  } = t, s = Se(t, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const c = Gr(), [l, u] = ve(void 0), [d, g] = ve(!1);
  return be(() => {
    g(!0), o(a, (p) => {
      c() && (u(p), g(!1));
    });
  }, [a]), /* @__PURE__ */ m.jsx("span", ke(V({ className: Mt("react-share__ShareCount", i) }, s), { children: !d && l !== void 0 && r(l) }));
}
function Z(e) {
  const t = (r) => /* @__PURE__ */ m.jsx(Jr, V({ getCount: e }, r));
  return t.displayName = `ShareCount(${e.name})`, t;
}
function Zr(e, t) {
  const r = `https://graph.facebook.com/?id=${e}&fields=og_object{engagement}`;
  J(r, (i, o) => {
    t(
      !i && o && o.og_object && o.og_object.engagement ? o.og_object.engagement.count : void 0
    );
  });
}
Z(Zr);
function Qr(e, { title: t }) {
  return S(e, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${e}&title=${t}`;
}
R(
  "hatena",
  Qr,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
function en(e, t) {
  J(
    "https://bookmark.hatenaapis.com/count/entry" + C({
      url: e
    }),
    (i, o) => {
      t(o ?? void 0);
    }
  );
}
Z(en);
function tn(e, { title: t, description: r }) {
  return S(e, "instapaper.url"), "http://www.instapaper.com/hello2" + C({
    url: e,
    title: t,
    description: r
  });
}
R(
  "instapaper",
  tn,
  (e) => ({
    title: e.title,
    description: e.description
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: "windowCenter"
  }
);
function rn(e, { title: t }) {
  return S(e, "line.url"), "https://social-plugins.line.me/lineit/share" + C({
    url: e,
    text: t
  });
}
R(
  "line",
  rn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
const xt = ce({
  color: "#0077B5",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function nn(e, { title: t, summary: r, source: i }) {
  return S(e, "linkedin.url"), "https://linkedin.com/shareArticle" + C({ url: e, mini: "true", title: t, summary: r, source: i });
}
const Ct = R(
  "linkedin",
  nn,
  ({ title: e, summary: t, source: r }) => ({ title: e, summary: t, source: r }),
  {
    windowWidth: 750,
    windowHeight: 600
  }
);
function on(e, { title: t, description: r }) {
  return S(e, "livejournal.url"), "https://www.livejournal.com/update.bml" + C({
    subject: t,
    event: r
  });
}
R(
  "livejournal",
  on,
  (e) => ({
    title: e.title,
    description: e.description
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function an(e, { title: t, description: r, imageUrl: i }) {
  return S(e, "mailru.url"), "https://connect.mail.ru/share" + C({
    url: e,
    title: t,
    description: r,
    image_url: i
  });
}
R(
  "mailru",
  an,
  (e) => ({
    title: e.title,
    description: e.description,
    imageUrl: e.imageUrl
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function sn(e, { title: t, description: r, image: i }) {
  return S(e, "ok.url"), "https://connect.ok.ru/offer" + C({
    url: e,
    title: t,
    description: r,
    imageUrl: i
  });
}
R(
  "ok",
  sn,
  (e) => ({
    title: e.title,
    description: e.description,
    image: e.image
  }),
  {
    windowWidth: 588,
    windowHeight: 480,
    windowPosition: "screenCenter"
  }
);
function cn(e, t) {
  window.OK || (window.OK = {
    Share: {
      count: function(a, s) {
        var c, l;
        (l = (c = window.OK.callbacks)[a]) == null || l.call(c, s);
      }
    },
    callbacks: []
  });
  const r = "https://connect.ok.ru/dk", i = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(o, a) {
      var s, c;
      const l = o === "" ? 0 : parseInt(o.replace("react-share-", ""), 10);
      (c = (s = window.OK.callbacks)[l]) == null || c.call(s, a === "" ? void 0 : parseInt(a, 10));
    }
  }, window.OK.callbacks.push(t), J(
    r + C({
      "st.cmd": "extLike",
      uid: `react-share-${i}`,
      ref: e
    })
  );
}
Z(cn);
function ln(e, { media: t, description: r, pinId: i }) {
  return i ? `https://pinterest.com/pin/${i}/repin/x/` : (S(e, "pinterest.url"), S(t, "pinterest.media"), "https://pinterest.com/pin/create/button/" + C({
    url: e,
    media: t,
    description: r
  }));
}
R(
  "pinterest",
  ln,
  (e) => ({
    media: e.media,
    description: e.description,
    pinId: e.pinId
  }),
  {
    windowWidth: 1e3,
    windowHeight: 730
  }
);
function un(e, t) {
  J(
    "https://api.pinterest.com/v1/urls/count.json" + C({
      url: e
    }),
    (i, o) => {
      t(o ? o.count : void 0);
    }
  );
}
Z(un);
function fn(e, { title: t }) {
  return S(e, "pocket.url"), "https://getpocket.com/save" + C({
    url: e,
    title: t
  });
}
R(
  "pocket",
  fn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
function dn(e, { title: t }) {
  return S(e, "reddit.url"), "https://www.reddit.com/web/submit" + C({
    url: e,
    title: t
  });
}
R(
  "reddit",
  dn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
function hn(e, { title: t }) {
  return S(e, "gab.url"), "https://gab.com/compose" + C({
    url: e,
    text: t
  });
}
R(
  "gab",
  hn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: "windowCenter"
  }
);
function gn(e, t) {
  const r = `https://www.reddit.com/api/info.json?limit=1&url=${e}`;
  J(r, { param: "jsonp" }, (i, o) => {
    t(
      !i && o && o.data && o.data.children.length > 0 && o.data.children[0].data.score ? o.data.children[0].data.score : void 0
    );
  });
}
Z(gn);
function mn(e, { title: t }) {
  return S(e, "telegram.url"), "https://telegram.me/share/url" + C({
    url: e,
    text: t
  });
}
R(
  "telegram",
  mn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const kt = ce({
  color: "#000000",
  path: "M41.4569 31.0027C41.2867 30.9181 41.1138 30.8366 40.9386 30.7586C40.6336 24.9274 37.5624 21.5891 32.4055 21.5549C32.3821 21.5548 32.3589 21.5548 32.3355 21.5548C29.251 21.5548 26.6857 22.9207 25.1067 25.4063L27.9429 27.4247C29.1224 25.5681 30.9736 25.1723 32.3369 25.1723C32.3526 25.1723 32.3684 25.1723 32.384 25.1724C34.082 25.1837 35.3633 25.6958 36.1926 26.6947C36.7961 27.4218 37.1997 28.4267 37.3996 29.6949C35.8941 29.4294 34.266 29.3478 32.5255 29.4513C27.6225 29.7443 24.4705 32.711 24.6822 36.8332C24.7896 38.9242 25.7937 40.7231 27.5094 41.8982C28.96 42.8916 30.8282 43.3774 32.7699 43.2674C35.3341 43.1216 37.3456 42.1066 38.749 40.2507C39.8148 38.8413 40.4889 37.0149 40.7865 34.7136C42.0085 35.4787 42.9142 36.4855 43.4144 37.6959C44.2649 39.7534 44.3145 43.1344 41.6553 45.8908C39.3255 48.3055 36.525 49.3501 32.2926 49.3824C27.5977 49.3463 24.0471 47.7842 21.7385 44.7396C19.5768 41.8886 18.4595 37.7706 18.4179 32.5C18.4595 27.2293 19.5768 23.1113 21.7385 20.2604C24.0471 17.2157 27.5977 15.6537 32.2925 15.6175C37.0215 15.654 40.634 17.2235 43.0309 20.2829C44.2062 21.7831 45.0923 23.6698 45.6764 25.8696L49 24.9496C48.2919 22.2419 47.1778 19.9087 45.6616 17.9736C42.5888 14.0514 38.0947 12.0417 32.3041 12H32.2809C26.5022 12.0415 22.0584 14.0589 19.073 17.9961C16.4165 21.4997 15.0462 26.3747 15.0001 32.4856L15 32.5L15.0001 32.5144C15.0462 38.6252 16.4165 43.5004 19.073 47.004C22.0584 50.941 26.5022 52.9586 32.2809 53H32.3041C37.4418 52.9631 41.0632 51.5676 44.0465 48.4753C47.9496 44.4297 47.8321 39.3587 46.5457 36.2457C45.6227 34.0134 43.8631 32.2002 41.4569 31.0027ZM32.5863 39.6551C30.4374 39.7807 28.205 38.78 28.0949 36.6367C28.0133 35.0476 29.185 33.2743 32.7182 33.0631C33.1228 33.0389 33.5199 33.027 33.9099 33.027C35.1933 33.027 36.3939 33.1564 37.4854 33.4039C37.0783 38.6788 34.6902 39.5353 32.5863 39.6551Z"
});
function wn(e, { title: t }) {
  return S(e, "threads.url"), "https://threads.net/intent/post" + C({
    url: e,
    text: t
  });
}
const St = R(
  "threads",
  wn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 550,
    windowHeight: 600
  }
);
function pn(e, {
  title: t,
  caption: r,
  tags: i,
  posttype: o
}) {
  return S(e, "tumblr.url"), "https://www.tumblr.com/widgets/share/tool" + C({
    canonicalUrl: e,
    title: t,
    caption: r,
    tags: i,
    posttype: o
  });
}
R(
  "tumblr",
  pn,
  (e) => ({
    title: e.title,
    tags: (e.tags || []).join(","),
    caption: e.caption,
    posttype: e.posttype || "link"
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function vn(e, t) {
  return J(
    "https://api.tumblr.com/v2/share/stats" + C({
      url: e
    }),
    (i, o) => {
      t(!i && o && o.response ? o.response.note_count : void 0);
    }
  );
}
Z(vn);
function bn(e, {
  title: t,
  via: r,
  hashtags: i = [],
  related: o = []
}) {
  return S(e, "twitter.url"), S(Array.isArray(i), "twitter.hashtags is not an array"), S(Array.isArray(o), "twitter.related is not an array"), "https://twitter.com/intent/tweet" + C({
    url: e,
    text: t,
    via: r,
    hashtags: i.length > 0 ? i.join(",") : void 0,
    related: o.length > 0 ? o.join(",") : void 0
  });
}
const Et = R(
  "twitter",
  bn,
  (e) => ({
    hashtags: e.hashtags,
    title: e.title,
    via: e.via,
    related: e.related
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
function yn(e, { title: t, separator: r }) {
  return S(e, "viber.url"), "viber://forward" + C({
    text: t ? t + r + e : e
  });
}
R(
  "viber",
  yn,
  (e) => ({
    title: e.title,
    separator: e.separator || " "
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function xn(e, { title: t, image: r, noParse: i, noVkLinks: o }) {
  return S(e, "vk.url"), "https://vk.com/share.php" + C({
    url: e,
    title: t,
    image: r,
    noparse: i ? 1 : 0,
    no_vk_links: o ? 1 : 0
  });
}
R(
  "vk",
  xn,
  (e) => ({
    title: e.title,
    image: e.image,
    noParse: e.noParse,
    noVkLinks: e.noVkLinks
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function Cn(e, t) {
  window.VK || (window.VK = {}), window.VK.Share = {
    count: (o, a) => {
      var s, c;
      return (c = (s = window.VK.callbacks) == null ? void 0 : s[o]) == null ? void 0 : c.call(s, a);
    }
  }, window.VK.callbacks = [];
  const r = "https://vk.com/share.php", i = window.VK.callbacks.length;
  return window.VK.callbacks.push(t), J(
    r + C({
      act: "count",
      index: i,
      url: e
    })
  );
}
Z(Cn);
function kn(e, { title: t, image: r }) {
  return S(e, "weibo.url"), "http://service.weibo.com/share/share.php" + C({
    url: e,
    title: t,
    pic: r
  });
}
R(
  "weibo",
  kn,
  (e) => ({
    title: e.title,
    image: e.image
  }),
  {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: "screenCenter"
  }
);
const Rt = ce({
  color: "#25D366",
  path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
});
function Sn() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function En(e, { title: t, separator: r }) {
  return S(e, "whatsapp.url"), "https://" + (Sn() ? "api" : "web") + ".whatsapp.com/send" + C({
    text: t ? t + r + e : e
  });
}
const _t = R(
  "whatsapp",
  En,
  (e) => ({
    title: e.title,
    separator: e.separator || " "
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
function Rn(e, { quote: t, hashtag: r }) {
  return S(e, "workplace.url"), "https://work.facebook.com/sharer.php" + C({
    u: e,
    quote: t,
    hashtag: r
  });
}
R(
  "workplace",
  Rn,
  (e) => ({
    quote: e.quote,
    hashtag: e.hashtag
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const jt = ce({
  color: "#000000",
  path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
});
function ki({ currentUrl: e }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "flex justify-end", children: [
    /* @__PURE__ */ m.jsx("section", { className: "block md:hidden", children: /* @__PURE__ */ m.jsxs("div", { className: "flex w-full justify-end gap-2", children: [
      /* @__PURE__ */ m.jsx(yt, { url: e, children: /* @__PURE__ */ m.jsx(bt, { size: 24, round: !0 }) }),
      /* @__PURE__ */ m.jsx(Et, { url: e, children: /* @__PURE__ */ m.jsx(jt, { size: 24, round: !0 }) }),
      /* @__PURE__ */ m.jsx(Ct, { url: e, children: /* @__PURE__ */ m.jsx(xt, { size: 24, round: !0 }) }),
      /* @__PURE__ */ m.jsx(St, { url: e, children: /* @__PURE__ */ m.jsx(kt, { size: 24, round: !0 }) }),
      /* @__PURE__ */ m.jsx(_t, { url: e, children: /* @__PURE__ */ m.jsx(Rt, { size: 24, round: !0 }) })
    ] }) }),
    /* @__PURE__ */ m.jsx("section", { className: "hidden md:block", children: /* @__PURE__ */ m.jsxs("div", { className: "flex w-full justify-end gap-2", children: [
      /* @__PURE__ */ m.jsx(yt, { url: e, children: /* @__PURE__ */ m.jsx(bt, { size: 32, round: !0 }) }),
      /* @__PURE__ */ m.jsx(Et, { url: e, children: /* @__PURE__ */ m.jsx(jt, { size: 32, round: !0 }) }),
      /* @__PURE__ */ m.jsx(Ct, { url: e, children: /* @__PURE__ */ m.jsx(xt, { size: 32, round: !0 }) }),
      /* @__PURE__ */ m.jsx(St, { url: e, children: /* @__PURE__ */ m.jsx(kt, { size: 32, round: !0 }) }),
      /* @__PURE__ */ m.jsx(_t, { url: e, children: /* @__PURE__ */ m.jsx(Rt, { size: 32, round: !0 }) })
    ] }) })
  ] });
}
function Si({ mode: e, setMode: t }) {
  const r = e === "quick";
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `\r
        flex items-center justify-between gap-3 rounded-xl border p-3\r
        border-zinc-200 bg-white\r
        dark:border-zinc-800 dark:bg-zinc-950/60\r
        backdrop-blur mt-3\r
      `,
      children: [
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("div", { className: "text-sm font-semibold text-zinc-900 dark:text-zinc-100", children: "Quick mode" }),
          /* @__PURE__ */ m.jsx("div", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: "Switch between full article and quick carousel" })
        ] }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            onClick: () => t(r ? "full" : "quick"),
            className: `
          relative inline-flex h-7 w-12 items-center rounded-full border transition
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-zinc-400 dark:focus:ring-zinc-700
          focus:ring-offset-white dark:focus:ring-offset-zinc-950
          ${r ? "border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100" : "border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"}
        `,
            "aria-pressed": r,
            "aria-label": "Toggle quick read",
            children: /* @__PURE__ */ m.jsx(
              "span",
              {
                className: `
            inline-block h-5 w-5 transform rounded-full transition
            ${r ? "translate-x-6 bg-white dark:bg-zinc-950" : "translate-x-1 bg-white dark:bg-zinc-200"}
          `
              }
            )
          }
        )
      ]
    }
  );
}
function _n({ goTo: e, index: t, pagesHtml: r }) {
  return /* @__PURE__ */ m.jsx("div", { className: "mt-4 flex w-full items-center gap-1 mb-3", children: r.map((i, o) => {
    const a = o === t, s = o < t;
    return /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        onClick: () => e(o),
        "aria-label": `Go to page ${o + 1}`,
        className: "flex-1",
        children: /* @__PURE__ */ m.jsx(
          "div",
          {
            className: `
            h-1.5 w-full rounded-full transition-all duration-300
            ${a ? "bg-zinc-900" : s ? "bg-zinc-700" : "bg-zinc-300"}
          `
          }
        )
      },
      o
    );
  }) });
}
function jn(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const r = document.implementation.createHTMLDocument(), i = r.createElement("base"), o = r.createElement("a");
  return r.head.appendChild(i), r.body.appendChild(o), t && (i.href = t), o.href = e, o.href;
}
const Pn = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function q(e) {
  const t = [];
  for (let r = 0, i = e.length; r < i; r++)
    t.push(e[r]);
  return t;
}
let te = null;
function $t(e = {}) {
  return te || (e.includeStyleProperties ? (te = e.includeStyleProperties, te) : (te = q(window.getComputedStyle(document.documentElement)), te));
}
function xe(e, t) {
  const i = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return i ? parseFloat(i.replace("px", "")) : 0;
}
function Tn(e) {
  const t = xe(e, "border-left-width"), r = xe(e, "border-right-width");
  return e.clientWidth + t + r;
}
function On(e) {
  const t = xe(e, "border-top-width"), r = xe(e, "border-bottom-width");
  return e.clientHeight + t + r;
}
function Bt(e, t = {}) {
  const r = t.width || Tn(e), i = t.height || On(e);
  return { width: r, height: i };
}
function Ln() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const r = t && t.env ? t.env.devicePixelRatio : null;
  return r && (e = parseInt(r, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const M = 16384;
function An(e) {
  (e.width > M || e.height > M) && (e.width > M && e.height > M ? e.width > e.height ? (e.height *= M / e.width, e.width = M) : (e.width *= M / e.height, e.height = M) : e.width > M ? (e.height *= M / e.width, e.width = M) : (e.width *= M / e.height, e.height = M));
}
function Ce(e) {
  return new Promise((t, r) => {
    const i = new Image();
    i.onload = () => {
      i.decode().then(() => {
        requestAnimationFrame(() => t(i));
      });
    }, i.onerror = r, i.crossOrigin = "anonymous", i.decoding = "async", i.src = e;
  });
}
async function In(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function Fn(e, t, r) {
  const i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
  return o.setAttribute("width", `${t}`), o.setAttribute("height", `${r}`), o.setAttribute("viewBox", `0 0 ${t} ${r}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(e), In(o);
}
const z = (e, t) => {
  if (e instanceof t)
    return !0;
  const r = Object.getPrototypeOf(e);
  return r === null ? !1 : r.constructor.name === t.name || z(r, t);
};
function Dn(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function zn(e, t) {
  return $t(t).map((r) => {
    const i = e.getPropertyValue(r), o = e.getPropertyPriority(r);
    return `${r}: ${i}${o ? " !important" : ""};`;
  }).join(" ");
}
function Wn(e, t, r, i) {
  const o = `.${e}:${t}`, a = r.cssText ? Dn(r) : zn(r, i);
  return document.createTextNode(`${o}{${a}}`);
}
function Pt(e, t, r, i) {
  const o = window.getComputedStyle(e, r), a = o.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const s = Pn();
  try {
    t.className = `${t.className} ${s}`;
  } catch {
    return;
  }
  const c = document.createElement("style");
  c.appendChild(Wn(s, r, o, i)), t.appendChild(c);
}
function Mn(e, t, r) {
  Pt(e, t, ":before", r), Pt(e, t, ":after", r);
}
const Tt = "application/font-woff", Ot = "image/jpeg", Vn = {
  woff: Tt,
  woff2: Tt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Ot,
  jpeg: Ot,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Hn(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Me(e) {
  const t = Hn(e).toLowerCase();
  return Vn[t] || "";
}
function $n(e) {
  return e.split(/,/)[1];
}
function We(e) {
  return e.search(/^(data:)/) !== -1;
}
function Bn(e, t) {
  return `data:${t};base64,${e}`;
}
async function Ut(e, t, r) {
  const i = await fetch(e, t);
  if (i.status === 404)
    throw new Error(`Resource "${i.url}" not found`);
  const o = await i.blob();
  return new Promise((a, s) => {
    const c = new FileReader();
    c.onerror = s, c.onloadend = () => {
      try {
        a(r({ res: i, result: c.result }));
      } catch (l) {
        s(l);
      }
    }, c.readAsDataURL(o);
  });
}
const ze = {};
function Un(e, t, r) {
  let i = e.replace(/\?.*/, "");
  return r && (i = e), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")), t ? `[${t}]${i}` : i;
}
async function Ve(e, t, r) {
  const i = Un(e, t, r.includeQueryParams);
  if (ze[i] != null)
    return ze[i];
  r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const a = await Ut(e, r.fetchRequestInit, ({ res: s, result: c }) => (t || (t = s.headers.get("Content-Type") || ""), $n(c)));
    o = Bn(a, t);
  } catch (a) {
    o = r.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${e}`;
    a && (s = typeof a == "string" ? a : a.message), s && console.warn(s);
  }
  return ze[i] = o, o;
}
async function Nn(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Ce(t);
}
async function qn(e, t) {
  if (e.currentSrc) {
    const a = document.createElement("canvas"), s = a.getContext("2d");
    a.width = e.clientWidth, a.height = e.clientHeight, s?.drawImage(e, 0, 0, a.width, a.height);
    const c = a.toDataURL();
    return Ce(c);
  }
  const r = e.poster, i = Me(r), o = await Ve(r, i, t);
  return Ce(o);
}
async function Kn(e, t) {
  var r;
  try {
    if (!((r = e?.contentDocument) === null || r === void 0) && r.body)
      return await Ee(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Yn(e, t) {
  return z(e, HTMLCanvasElement) ? Nn(e) : z(e, HTMLVideoElement) ? qn(e, t) : z(e, HTMLIFrameElement) ? Kn(e, t) : e.cloneNode(Nt(e));
}
const Xn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Nt = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Gn(e, t, r) {
  var i, o;
  if (Nt(t))
    return t;
  let a = [];
  return Xn(e) && e.assignedNodes ? a = q(e.assignedNodes()) : z(e, HTMLIFrameElement) && (!((i = e.contentDocument) === null || i === void 0) && i.body) ? a = q(e.contentDocument.body.childNodes) : a = q(((o = e.shadowRoot) !== null && o !== void 0 ? o : e).childNodes), a.length === 0 || z(e, HTMLVideoElement) || await a.reduce((s, c) => s.then(() => Ee(c, r)).then((l) => {
    l && t.appendChild(l);
  }), Promise.resolve()), t;
}
function Jn(e, t, r) {
  const i = t.style;
  if (!i)
    return;
  const o = window.getComputedStyle(e);
  o.cssText ? (i.cssText = o.cssText, i.transformOrigin = o.transformOrigin) : $t(r).forEach((a) => {
    let s = o.getPropertyValue(a);
    a === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1}px`), z(e, HTMLIFrameElement) && a === "display" && s === "inline" && (s = "block"), a === "d" && t.getAttribute("d") && (s = `path(${t.getAttribute("d")})`), i.setProperty(a, s, o.getPropertyPriority(a));
  });
}
function Zn(e, t) {
  z(e, HTMLTextAreaElement) && (t.innerHTML = e.value), z(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function Qn(e, t) {
  if (z(e, HTMLSelectElement)) {
    const i = Array.from(t.children).find((o) => e.value === o.getAttribute("value"));
    i && i.setAttribute("selected", "");
  }
}
function ei(e, t, r) {
  return z(t, Element) && (Jn(e, t, r), Mn(e, t, r), Zn(e, t), Qn(e, t)), t;
}
async function ti(e, t) {
  const r = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (r.length === 0)
    return e;
  const i = {};
  for (let a = 0; a < r.length; a++) {
    const c = r[a].getAttribute("xlink:href");
    if (c) {
      const l = e.querySelector(c), u = document.querySelector(c);
      !l && u && !i[c] && (i[c] = await Ee(u, t, !0));
    }
  }
  const o = Object.values(i);
  if (o.length) {
    const a = "http://www.w3.org/1999/xhtml", s = document.createElementNS(a, "svg");
    s.setAttribute("xmlns", a), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const c = document.createElementNS(a, "defs");
    s.appendChild(c);
    for (let l = 0; l < o.length; l++)
      c.appendChild(o[l]);
    e.appendChild(s);
  }
  return e;
}
async function Ee(e, t, r) {
  return !r && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((i) => Yn(i, t)).then((i) => Gn(e, i, t)).then((i) => ei(e, i, t)).then((i) => ti(i, t));
}
const qt = /url\((['"]?)([^'"]+?)\1\)/g, ri = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ni = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ii(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function oi(e) {
  const t = [];
  return e.replace(qt, (r, i, o) => (t.push(o), r)), t.filter((r) => !We(r));
}
async function ai(e, t, r, i, o) {
  try {
    const a = r ? jn(t, r) : t, s = Me(t);
    let c;
    return o || (c = await Ve(a, s, i)), e.replace(ii(t), `$1${c}$3`);
  } catch {
  }
  return e;
}
function si(e, { preferredFontFormat: t }) {
  return t ? e.replace(ni, (r) => {
    for (; ; ) {
      const [i, , o] = ri.exec(r) || [];
      if (!o)
        return "";
      if (o === t)
        return `src: ${i};`;
    }
  }) : e;
}
function Kt(e) {
  return e.search(qt) !== -1;
}
async function Yt(e, t, r) {
  if (!Kt(e))
    return e;
  const i = si(e, r);
  return oi(i).reduce((a, s) => a.then((c) => ai(c, s, t, r)), Promise.resolve(i));
}
async function re(e, t, r) {
  var i;
  const o = (i = t.style) === null || i === void 0 ? void 0 : i.getPropertyValue(e);
  if (o) {
    const a = await Yt(o, null, r);
    return t.style.setProperty(e, a, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function ci(e, t) {
  await re("background", e, t) || await re("background-image", e, t), await re("mask", e, t) || await re("-webkit-mask", e, t) || await re("mask-image", e, t) || await re("-webkit-mask-image", e, t);
}
async function li(e, t) {
  const r = z(e, HTMLImageElement);
  if (!(r && !We(e.src)) && !(z(e, SVGImageElement) && !We(e.href.baseVal)))
    return;
  const i = r ? e.src : e.href.baseVal, o = await Ve(i, Me(i), t);
  await new Promise((a, s) => {
    e.onload = a, e.onerror = t.onImageErrorHandler ? (...l) => {
      try {
        a(t.onImageErrorHandler(...l));
      } catch (u) {
        s(u);
      }
    } : s;
    const c = e;
    c.decode && (c.decode = a), c.loading === "lazy" && (c.loading = "eager"), r ? (e.srcset = "", e.src = o) : e.href.baseVal = o;
  });
}
async function ui(e, t) {
  const i = q(e.childNodes).map((o) => Xt(o, t));
  await Promise.all(i).then(() => e);
}
async function Xt(e, t) {
  z(e, Element) && (await ci(e, t), await li(e, t), await ui(e, t));
}
function fi(e, t) {
  const { style: r } = e;
  t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.width && (r.width = `${t.width}px`), t.height && (r.height = `${t.height}px`);
  const i = t.style;
  return i != null && Object.keys(i).forEach((o) => {
    r[o] = i[o];
  }), e;
}
const Lt = {};
async function At(e) {
  let t = Lt[e];
  if (t != null)
    return t;
  const i = await (await fetch(e)).text();
  return t = { url: e, cssText: i }, Lt[e] = t, t;
}
async function It(e, t) {
  let r = e.cssText;
  const i = /url\(["']?([^"')]+)["']?\)/g, a = (r.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let c = s.replace(i, "$1");
    return c.startsWith("https://") || (c = new URL(c, e.url).href), Ut(c, t.fetchRequestInit, ({ result: l }) => (r = r.replace(s, `url(${l})`), [s, l]));
  });
  return Promise.all(a).then(() => r);
}
function Ft(e) {
  if (e == null)
    return [];
  const t = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let i = e.replace(r, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = o.exec(i);
    if (l === null)
      break;
    t.push(l[0]);
  }
  i = i.replace(o, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c = new RegExp(s, "gi");
  for (; ; ) {
    let l = a.exec(i);
    if (l === null) {
      if (l = c.exec(i), l === null)
        break;
      a.lastIndex = c.lastIndex;
    } else
      c.lastIndex = a.lastIndex;
    t.push(l[0]);
  }
  return t;
}
async function di(e, t) {
  const r = [], i = [];
  return e.forEach((o) => {
    if ("cssRules" in o)
      try {
        q(o.cssRules || []).forEach((a, s) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let c = s + 1;
            const l = a.href, u = At(l).then((d) => It(d, t)).then((d) => Ft(d).forEach((g) => {
              try {
                o.insertRule(g, g.startsWith("@import") ? c += 1 : o.cssRules.length);
              } catch (p) {
                console.error("Error inserting rule from remote css", {
                  rule: g,
                  error: p
                });
              }
            })).catch((d) => {
              console.error("Error loading remote css", d.toString());
            });
            i.push(u);
          }
        });
      } catch (a) {
        const s = e.find((c) => c.href == null) || document.styleSheets[0];
        o.href != null && i.push(At(o.href).then((c) => It(c, t)).then((c) => Ft(c).forEach((l) => {
          s.insertRule(l, s.cssRules.length);
        })).catch((c) => {
          console.error("Error loading remote stylesheet", c);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(i).then(() => (e.forEach((o) => {
    if ("cssRules" in o)
      try {
        q(o.cssRules || []).forEach((a) => {
          r.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${o.href}`, a);
      }
  }), r));
}
function hi(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Kt(t.style.getPropertyValue("src")));
}
async function gi(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = q(e.ownerDocument.styleSheets), i = await di(r, t);
  return hi(i);
}
function Gt(e) {
  return e.trim().replace(/["']/g, "");
}
function mi(e) {
  const t = /* @__PURE__ */ new Set();
  function r(i) {
    (i.style.fontFamily || getComputedStyle(i).fontFamily).split(",").forEach((a) => {
      t.add(Gt(a));
    }), Array.from(i.children).forEach((a) => {
      a instanceof HTMLElement && r(a);
    });
  }
  return r(e), t;
}
async function wi(e, t) {
  const r = await gi(e, t), i = mi(e);
  return (await Promise.all(r.filter((a) => i.has(Gt(a.style.fontFamily))).map((a) => {
    const s = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return Yt(a.cssText, s, t);
  }))).join(`
`);
}
async function pi(e, t) {
  const r = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await wi(e, t);
  if (r) {
    const i = document.createElement("style"), o = document.createTextNode(r);
    i.appendChild(o), e.firstChild ? e.insertBefore(i, e.firstChild) : e.appendChild(i);
  }
}
async function vi(e, t = {}) {
  const { width: r, height: i } = Bt(e, t), o = await Ee(e, t, !0);
  return await pi(o, t), await Xt(o, t), fi(o, t), await Fn(o, r, i);
}
async function bi(e, t = {}) {
  const { width: r, height: i } = Bt(e, t), o = await vi(e, t), a = await Ce(o), s = document.createElement("canvas"), c = s.getContext("2d"), l = t.pixelRatio || Ln(), u = t.canvasWidth || r, d = t.canvasHeight || i;
  return s.width = u * l, s.height = d * l, t.skipAutoScale || An(s), s.style.width = `${u}`, s.style.height = `${d}`, t.backgroundColor && (c.fillStyle = t.backgroundColor, c.fillRect(0, 0, s.width, s.height)), c.drawImage(a, 0, 0, s.width, s.height), s;
}
async function yi(e, t = {}) {
  return (await bi(e, t)).toDataURL();
}
function Dt(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ei({
  pagesHtml: e,
  title: t,
  initialIndex: r = 0,
  className: i = ""
}) {
  const o = pe([]), [a, s] = ve(!1), [c, l] = ve(
    () => Dt(r, 0, Math.max(0, e.length - 1))
  ), u = pe(null), d = pe(null), g = e.length, p = c > 0, _ = c < g - 1, j = (b) => l(Dt(b, 0, g - 1)), L = () => p && l((b) => b - 1), A = () => _ && l((b) => b + 1);
  be(() => {
    function b(T) {
      T.key === "ArrowLeft" && L(), T.key === "ArrowRight" && A();
    }
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [p, _]), be(() => {
    const b = u.current;
    if (!b) return;
    const T = (H) => {
      d.current = (H.touches[0] && H.touches[0].clientX) ?? null;
    }, B = (H) => {
      const W = d.current;
      if (d.current = null, W == null) return;
      const K = ((H.changedTouches[0] && H.changedTouches[0].clientX) ?? W) - W;
      Math.abs(K) < 40 || (K > 0 ? L() : A());
    };
    return b.addEventListener("touchstart", T, { passive: !0 }), b.addEventListener("touchend", B, { passive: !0 }), () => {
      b.removeEventListener("touchstart", T), b.removeEventListener("touchend", B);
    };
  }, [p, _]);
  const F = Rr(() => `${c + 1} / ${g}`, [c, g]);
  if (!e || e.length === 0) return null;
  async function E() {
    const b = o.current[c];
    if (!b) throw new Error("Slide not found");
    const T = b.style.backgroundColor;
    T || (b.style.backgroundColor = "#09090b");
    try {
      return await yi(b, {
        pixelRatio: 2,
        // crisper image
        cacheBust: !0
      });
    } finally {
      b.style.backgroundColor = T;
    }
  }
  async function U() {
    try {
      s(!0);
      const b = await E(), B = await (await fetch(b)).blob(), H = new File([B], `slide-${c + 1}.png`, {
        type: "image/png"
      });
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [H] })) {
        await navigator.share({
          title: "Slide",
          text: `Slide ${c + 1} / ${e.length}`,
          files: [H]
        });
        return;
      }
      const W = document.createElement("a");
      W.href = b, W.download = `slide-${c + 1}.png`, document.body.appendChild(W), W.click(), W.remove();
    } catch (b) {
      console.error(b), alert("Could not create image. Try again.");
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ m.jsxs("section", { className: `w-full ${i}`, children: [
    /* @__PURE__ */ m.jsx(_n, { goTo: j, index: c, pagesHtml: e }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: u,
        className: "relative overflow-hidden rounded-xl border border-zinc-600 ",
        children: [
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "flex transition-transform duration-300 ease-out",
              style: { transform: `translateX(-${c * 100}%)` },
              children: e.map((b, T) => /* @__PURE__ */ m.jsxs(
                "article",
                {
                  ref: (B) => o.current[T] = B,
                  className: "w-full shrink-0 p-2 px-4  prose prose-zinc max-w-none flex items-center relative  pt-[36px] pb-[30px] md:p-[26px] ",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        className: "pointer-events-none select-none absolute top-3 left-4 text-xs tracking-widest uppercase text-zinc-400",
                        style: { fontSize: "10px" },
                        children: t
                      }
                    ),
                    /* @__PURE__ */ m.jsx("div", { className: "pointer-events-none select-none absolute bottom-3 right-4 text-xs tracking-widest uppercase text-zinc-500/60", children: "Apptastic Coder" }),
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        className: "carousel-content md:text-[16px]",
                        dangerouslySetInnerHTML: { __html: b }
                      }
                    )
                  ]
                },
                T
              ))
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3 p-2", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "text-sm text-zinc-500", children: [
              "Quick read ",
              /* @__PURE__ */ m.jsx("span", { className: "mx-2", children: "•" }),
              /* @__PURE__ */ m.jsx("span", { className: "font-medium text-zinc-700", children: F })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  onClick: L,
                  disabled: !p,
                  className: "rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50",
                  children: "Prev"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  onClick: A,
                  disabled: !_,
                  className: "rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50",
                  children: "Next"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  onClick: U,
                  disabled: a,
                  className: "rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50",
                  children: a ? "Preparing…" : "Export"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Ri(e, t = 20) {
  const r = /<hr\s*\/?>|<!--pagebreak-->|<!--\s*page\s*break\s*-->/i;
  let i = e.split(r).map((a) => a.trim()).filter(Boolean);
  const o = [];
  return i.forEach((a) => {
    a.replace(/<[^>]+>/g, "").split(/\s+/).length < t && o.length > 0 || o.push(a);
  }), o;
}
export {
  Ei as ArticleCarousel,
  Si as ReadModeToggle,
  ki as SocialButtons,
  _n as WhatsappProgress,
  Ri as splitAndNormalizeSections
};
