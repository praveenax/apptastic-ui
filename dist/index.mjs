import * as Rr from "react";
import ve, { forwardRef as _r, useState as ne, useEffect as ye, useRef as xe, useCallback as Pr, useMemo as Mt } from "react";
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} }, se = {};
var ht;
function Tr() {
  if (ht) return se;
  ht = 1;
  var e = ve, t = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, u, d) {
    var h, p = {}, m = null, y = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (h in u) n.call(u, h) && !a.hasOwnProperty(h) && (p[h] = u[h]);
    if (l && l.defaultProps) for (h in u = l.defaultProps, u) p[h] === void 0 && (p[h] = u[h]);
    return { $$typeof: t, type: l, key: m, ref: y, props: p, _owner: o.current };
  }
  return se.Fragment = r, se.jsx = c, se.jsxs = c, se;
}
var ce = {};
var mt;
function Or() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = ve, t = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), l = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.suspense_list"), p = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.offscreen"), k = Symbol.iterator, C = "@@iterator";
    function L(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = k && i[k] || i[C];
      return typeof f == "function" ? f : null;
    }
    var z = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(i) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
          g[w - 1] = arguments[w];
        _("error", i, g);
      }
    }
    function _(i, f, g) {
      {
        var w = z.ReactDebugCurrentFrame, j = w.getStackAddendum();
        j !== "" && (f += "%s", g = g.concat([j]));
        var E = g.map(function(v) {
          return String(v);
        });
        E.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, E);
      }
    }
    var x = !1, A = !1, B = !1, H = !1, W = !1, ie;
    ie = /* @__PURE__ */ Symbol.for("react.module.reference");
    function K(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === a || W || i === o || i === d || i === h || H || i === y || x || A || B || typeof i == "object" && i !== null && (i.$$typeof === m || i.$$typeof === p || i.$$typeof === c || i.$$typeof === l || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === ie || i.getModuleId !== void 0));
    }
    function ue(i, f, g) {
      var w = i.displayName;
      if (w)
        return w;
      var j = f.displayName || f.name || "";
      return j !== "" ? g + "(" + j + ")" : g;
    }
    function Y(i) {
      return i.displayName || "Context";
    }
    function U(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var f = i;
            return Y(f) + ".Consumer";
          case c:
            var g = i;
            return Y(g._context) + ".Provider";
          case u:
            return ue(i, i.render, "ForwardRef");
          case p:
            var w = i.displayName || null;
            return w !== null ? w : U(i.type) || "Memo";
          case m: {
            var j = i, E = j._payload, v = j._init;
            try {
              return U(v(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ae = 0, Be, Ue, qe, Ke, Ye, Xe, Ge;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function er() {
      {
        if (ae === 0) {
          Be = console.log, Ue = console.info, qe = console.warn, Ke = console.error, Ye = console.group, Xe = console.groupCollapsed, Ge = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ae++;
      }
    }
    function tr() {
      {
        if (ae--, ae === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, i, {
              value: Be
            }),
            info: X({}, i, {
              value: Ue
            }),
            warn: X({}, i, {
              value: qe
            }),
            error: X({}, i, {
              value: Ke
            }),
            group: X({}, i, {
              value: Ye
            }),
            groupCollapsed: X({}, i, {
              value: Xe
            }),
            groupEnd: X({}, i, {
              value: Ge
            })
          });
        }
        ae < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = z.ReactCurrentDispatcher, Pe;
    function de(i, f, g) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (j) {
            var w = j.stack.trim().match(/\n( *(at )?)/);
            Pe = w && w[1] || "";
          }
        return `
` + Pe + i;
      }
    }
    var Te = !1, fe;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new rr();
    }
    function Qe(i, f) {
      if (!i || Te)
        return "";
      {
        var g = fe.get(i);
        if (g !== void 0)
          return g;
      }
      var w;
      Te = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = _e.current, _e.current = null, er();
      try {
        if (f) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (F) {
              w = F;
            }
            Reflect.construct(i, [], v);
          } else {
            try {
              v.call();
            } catch (F) {
              w = F;
            }
            i.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            w = F;
          }
          i();
        }
      } catch (F) {
        if (F && w && typeof F.stack == "string") {
          for (var b = F.stack.split(`
`), I = w.stack.split(`
`), O = b.length - 1, N = I.length - 1; O >= 1 && N >= 0 && b[O] !== I[N]; )
            N--;
          for (; O >= 1 && N >= 0; O--, N--)
            if (b[O] !== I[N]) {
              if (O !== 1 || N !== 1)
                do
                  if (O--, N--, N < 0 || b[O] !== I[N]) {
                    var V = `
` + b[O].replace(" at new ", " at ");
                    return i.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", i.displayName)), typeof i == "function" && fe.set(i, V), V;
                  }
                while (O >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        Te = !1, _e.current = E, tr(), Error.prepareStackTrace = j;
      }
      var ee = i ? i.displayName || i.name : "", G = ee ? de(ee) : "";
      return typeof i == "function" && fe.set(i, G), G;
    }
    function nr(i, f, g) {
      return Qe(i, !1);
    }
    function ir(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function he(i, f, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Qe(i, ir(i));
      if (typeof i == "string")
        return de(i);
      switch (i) {
        case d:
          return de("Suspense");
        case h:
          return de("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return nr(i.render);
          case p:
            return he(i.type, f, g);
          case m: {
            var w = i, j = w._payload, E = w._init;
            try {
              return he(E(j), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Ze = {}, et = z.ReactDebugCurrentFrame;
    function me(i) {
      if (i) {
        var f = i._owner, g = he(i.type, i._source, f ? f.type : null);
        et.setExtraStackFrame(g);
      } else
        et.setExtraStackFrame(null);
    }
    function ar(i, f, g, w, j) {
      {
        var E = Function.call.bind(oe);
        for (var v in i)
          if (E(i, v)) {
            var b = void 0;
            try {
              if (typeof i[v] != "function") {
                var I = Error((w || "React class") + ": " + g + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              b = i[v](f, v, w, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              b = O;
            }
            b && !(b instanceof Error) && (me(j), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", g, v, typeof b), me(null)), b instanceof Error && !(b.message in Ze) && (Ze[b.message] = !0, me(j), R("Failed %s type: %s", g, b.message), me(null));
          }
      }
    }
    var or = Array.isArray;
    function Oe(i) {
      return or(i);
    }
    function sr(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function cr(i) {
      try {
        return tt(i), !1;
      } catch {
        return !0;
      }
    }
    function tt(i) {
      return "" + i;
    }
    function rt(i) {
      if (cr(i))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(i)), tt(i);
    }
    var nt = z.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, it, at;
    function ur(i) {
      if (oe.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function dr(i) {
      if (oe.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function fr(i, f) {
      typeof i.ref == "string" && nt.current;
    }
    function hr(i, f) {
      {
        var g = function() {
          it || (it = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function mr(i, f) {
      {
        var g = function() {
          at || (at = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var gr = function(i, f, g, w, j, E, v) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: g,
        props: v,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function pr(i, f, g, w, j) {
      {
        var E, v = {}, b = null, I = null;
        g !== void 0 && (rt(g), b = "" + g), dr(f) && (rt(f.key), b = "" + f.key), ur(f) && (I = f.ref, fr(f, j));
        for (E in f)
          oe.call(f, E) && !lr.hasOwnProperty(E) && (v[E] = f[E]);
        if (i && i.defaultProps) {
          var O = i.defaultProps;
          for (E in O)
            v[E] === void 0 && (v[E] = O[E]);
        }
        if (b || I) {
          var N = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          b && hr(v, N), I && mr(v, N);
        }
        return gr(i, b, I, j, w, nt.current, v);
      }
    }
    var ze = z.ReactCurrentOwner, ot = z.ReactDebugCurrentFrame;
    function Z(i) {
      if (i) {
        var f = i._owner, g = he(i.type, i._source, f ? f.type : null);
        ot.setExtraStackFrame(g);
      } else
        ot.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ne(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function st() {
      {
        if (ze.current) {
          var i = U(ze.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function wr(i) {
      return "";
    }
    var ct = {};
    function br(i) {
      {
        var f = st();
        if (!f) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function lt(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = br(f);
        if (ct[g])
          return;
        ct[g] = !0;
        var w = "";
        i && i._owner && i._owner !== ze.current && (w = " It was passed a child from " + U(i._owner.type) + "."), Z(i), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, w), Z(null);
      }
    }
    function ut(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Oe(i))
          for (var g = 0; g < i.length; g++) {
            var w = i[g];
            Ne(w) && lt(w, f);
          }
        else if (Ne(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var j = L(i);
          if (typeof j == "function" && j !== i.entries)
            for (var E = j.call(i), v; !(v = E.next()).done; )
              Ne(v.value) && lt(v.value, f);
        }
      }
    }
    function xr(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          g = f.propTypes;
        else
          return;
        if (g) {
          var w = U(f);
          ar(g, i.props, "prop", w, i);
        } else if (f.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var j = U(f);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(i) {
      {
        for (var f = Object.keys(i.props), g = 0; g < f.length; g++) {
          var w = f[g];
          if (w !== "children" && w !== "key") {
            Z(i), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Z(null);
            break;
          }
        }
        i.ref !== null && (Z(i), R("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var dt = {};
    function ft(i, f, g, w, j, E) {
      {
        var v = K(i);
        if (!v) {
          var b = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = wr();
          I ? b += I : b += st();
          var O;
          i === null ? O = "null" : Oe(i) ? O = "array" : i !== void 0 && i.$$typeof === t ? (O = "<" + (U(i.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : O = typeof i, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, b);
        }
        var N = pr(i, f, g, j, E);
        if (N == null)
          return N;
        if (v) {
          var V = f.children;
          if (V !== void 0)
            if (w)
              if (Oe(V)) {
                for (var ee = 0; ee < V.length; ee++)
                  ut(V[ee], i);
                Object.freeze && Object.freeze(V);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ut(V, i);
        }
        if (oe.call(f, "key")) {
          var G = U(i), F = Object.keys(f).filter(function(Er) {
            return Er !== "key";
          }), Le = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dt[G + Le]) {
            var Cr = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Le, G, Cr, G), dt[G + Le] = !0;
          }
        }
        return i === n ? vr(N) : xr(N), N;
      }
    }
    function yr(i, f, g) {
      return ft(i, f, g, !0);
    }
    function kr(i, f, g) {
      return ft(i, f, g, !1);
    }
    var jr = kr, Sr = yr;
    ce.Fragment = n, ce.jsx = jr, ce.jsxs = Sr;
  })()), ce;
}
var gt;
function zr() {
  return gt || (gt = 1, process.env.NODE_ENV === "production" ? ge.exports = Tr() : ge.exports = Or()), ge.exports;
}
var s = zr(), Ie = { exports: {} };
var pt;
function Ar() {
  return pt || (pt = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", c = 0; c < arguments.length; c++) {
          var l = arguments[c];
          l && (a = o(a, n(l)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var c = "";
        for (var l in a)
          t.call(a, l) && a[l] && (c = o(c, l));
        return c;
      }
      function o(a, c) {
        return c ? a ? a + " " + c : a + c : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Ie)), Ie.exports;
}
var Nr = Ar();
const Ht = /* @__PURE__ */ $t(Nr);
var pe = { exports: {} }, we = { exports: {} }, Fe, wt;
function Lr() {
  if (wt) return Fe;
  wt = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, o = n * 365.25;
  Fe = function(d, h) {
    h = h || {};
    var p = typeof d;
    if (p === "string" && d.length > 0)
      return a(d);
    if (p === "number" && isNaN(d) === !1)
      return h.long ? l(d) : c(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(d)
    );
  };
  function a(d) {
    if (d = String(d), !(d.length > 100)) {
      var h = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        d
      );
      if (h) {
        var p = parseFloat(h[1]), m = (h[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * o;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function c(d) {
    return d >= n ? Math.round(d / n) + "d" : d >= r ? Math.round(d / r) + "h" : d >= t ? Math.round(d / t) + "m" : d >= e ? Math.round(d / e) + "s" : d + "ms";
  }
  function l(d) {
    return u(d, n, "day") || u(d, r, "hour") || u(d, t, "minute") || u(d, e, "second") || d + " ms";
  }
  function u(d, h, p) {
    if (!(d < h))
      return d < h * 1.5 ? Math.floor(d / h) + " " + p : Math.ceil(d / h) + " " + p + "s";
  }
  return Fe;
}
var bt;
function Ir() {
  return bt || (bt = 1, (function(e, t) {
    t = e.exports = o.debug = o.default = o, t.coerce = u, t.disable = c, t.enable = a, t.enabled = l, t.humanize = Lr(), t.names = [], t.skips = [], t.formatters = {};
    var r;
    function n(d) {
      var h = 0, p;
      for (p in d)
        h = (h << 5) - h + d.charCodeAt(p), h |= 0;
      return t.colors[Math.abs(h) % t.colors.length];
    }
    function o(d) {
      function h() {
        if (h.enabled) {
          var p = h, m = +/* @__PURE__ */ new Date(), y = m - (r || m);
          p.diff = y, p.prev = r, p.curr = m, r = m;
          for (var k = new Array(arguments.length), C = 0; C < k.length; C++)
            k[C] = arguments[C];
          k[0] = t.coerce(k[0]), typeof k[0] != "string" && k.unshift("%O");
          var L = 0;
          k[0] = k[0].replace(/%([a-zA-Z%])/g, function(R, _) {
            if (R === "%%") return R;
            L++;
            var x = t.formatters[_];
            if (typeof x == "function") {
              var A = k[L];
              R = x.call(p, A), k.splice(L, 1), L--;
            }
            return R;
          }), t.formatArgs.call(p, k);
          var z = h.log || t.log || console.log.bind(console);
          z.apply(p, k);
        }
      }
      return h.namespace = d, h.enabled = t.enabled(d), h.useColors = t.useColors(), h.color = n(d), typeof t.init == "function" && t.init(h), h;
    }
    function a(d) {
      t.save(d), t.names = [], t.skips = [];
      for (var h = (typeof d == "string" ? d : "").split(/[\s,]+/), p = h.length, m = 0; m < p; m++)
        h[m] && (d = h[m].replace(/\*/g, ".*?"), d[0] === "-" ? t.skips.push(new RegExp("^" + d.substr(1) + "$")) : t.names.push(new RegExp("^" + d + "$")));
    }
    function c() {
      t.enable("");
    }
    function l(d) {
      var h, p;
      for (h = 0, p = t.skips.length; h < p; h++)
        if (t.skips[h].test(d))
          return !1;
      for (h = 0, p = t.names.length; h < p; h++)
        if (t.names[h].test(d))
          return !0;
      return !1;
    }
    function u(d) {
      return d instanceof Error ? d.stack || d.message : d;
    }
  })(we, we.exports)), we.exports;
}
var xt;
function Fr() {
  return xt || (xt = 1, (function(e, t) {
    t = e.exports = Ir(), t.log = o, t.formatArgs = n, t.save = a, t.load = c, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : l(), t.colors = [
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
    t.formatters.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (d) {
        return "[UnexpectedJSONParseError]: " + d.message;
      }
    };
    function n(u) {
      var d = this.useColors;
      if (u[0] = (d ? "%c" : "") + this.namespace + (d ? " %c" : " ") + u[0] + (d ? "%c " : " ") + "+" + t.humanize(this.diff), !!d) {
        var h = "color: " + this.color;
        u.splice(1, 0, h, "color: inherit");
        var p = 0, m = 0;
        u[0].replace(/%[a-zA-Z%]/g, function(y) {
          y !== "%%" && (p++, y === "%c" && (m = p));
        }), u.splice(m, 0, h);
      }
    }
    function o() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function a(u) {
      try {
        u == null ? t.storage.removeItem("debug") : t.storage.debug = u;
      } catch {
      }
    }
    function c() {
      var u;
      try {
        u = t.storage.debug;
      } catch {
      }
      return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
    }
    t.enable(c());
    function l() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  })(pe, pe.exports)), pe.exports;
}
var De, vt;
function Dr() {
  if (vt) return De;
  vt = 1;
  var e = Fr()("jsonp");
  De = n;
  var t = 0;
  function r() {
  }
  function n(o, a, c) {
    typeof a == "function" && (c = a, a = {}), a || (a = {});
    var l = a.prefix || "__jp", u = a.name || l + t++, d = a.param || "callback", h = a.timeout != null ? a.timeout : 6e4, p = encodeURIComponent, m = document.getElementsByTagName("script")[0] || document.head, y, k;
    h && (k = setTimeout(function() {
      C(), c && c(new Error("Timeout"));
    }, h));
    function C() {
      y.parentNode && y.parentNode.removeChild(y), window[u] = r, k && clearTimeout(k);
    }
    function L() {
      window[u] && C();
    }
    return window[u] = function(z) {
      e("jsonp got", z), C(), c && c(null, z);
    }, o += (~o.indexOf("?") ? "&" : "?") + d + "=" + p(u), o = o.replace("?&", "?"), e('jsonp req "%s"', o), y = document.createElement("script"), y.src = o, m.parentNode.insertBefore(y, m), L;
  }
  return De;
}
var Wr = Dr();
const J = /* @__PURE__ */ $t(Wr);
var Mr = Object.defineProperty, $r = Object.defineProperties, Hr = Object.getOwnPropertyDescriptors, ke = Object.getOwnPropertySymbols, Vt = Object.prototype.hasOwnProperty, Bt = Object.prototype.propertyIsEnumerable, yt = (e, t, r) => t in e ? Mr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $ = (e, t) => {
  for (var r in t || (t = {}))
    Vt.call(t, r) && yt(e, r, t[r]);
  if (ke)
    for (var r of ke(t))
      Bt.call(t, r) && yt(e, r, t[r]);
  return e;
}, Ce = (e, t) => $r(e, Hr(t)), Ee = (e, t) => {
  var r = {};
  for (var n in e)
    Vt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ke)
    for (var n of ke(e))
      t.indexOf(n) < 0 && Bt.call(e, n) && (r[n] = e[n]);
  return r;
};
function le(e) {
  return (r) => {
    var n = r, {
      bgStyle: o = {},
      borderRadius: a = 0,
      iconFillColor: c = "white",
      round: l = !1,
      size: u = 64
    } = n, d = Ee(n, [
      "bgStyle",
      "borderRadius",
      "iconFillColor",
      "round",
      "size"
    ]);
    return /* @__PURE__ */ s.jsxs("svg", Ce($({ viewBox: "0 0 64 64", width: u, height: u }, d), { children: [
      l ? /* @__PURE__ */ s.jsx("circle", { cx: "32", cy: "32", r: "32", fill: e.color, style: o }) : /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx("path", { d: e.path, fill: c })
    ] }));
  };
}
class Vr extends Error {
  constructor(t) {
    super(t), this.name = "AssertionError";
  }
}
function P(e, t) {
  if (!e)
    throw new Vr(t);
}
function S(e) {
  const t = Object.entries(e).filter(([, r]) => r != null).map(([r, n]) => `${encodeURIComponent(r)}=${encodeURIComponent(String(n))}`);
  return t.length > 0 ? `?${t.join("&")}` : "";
}
const Br = (e) => !!e && (typeof e == "object" || typeof e == "function") && "then" in e && typeof e.then == "function", Ur = (e, t) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
}), qr = (e, t) => ({
  top: (window.screen.height - t) / 2,
  left: (window.screen.width - e) / 2
});
function Kr(e, t, r) {
  var n = t, { height: o, width: a } = n, c = Ee(n, ["height", "width"]);
  const l = $({
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
  }, c), u = window.open(
    e,
    "",
    Object.keys(l).map((d) => `${d}=${l[d]}`).join(", ")
  );
  if (r) {
    const d = window.setInterval(() => {
      try {
        (u === null || u.closed) && (window.clearInterval(d), r(u));
      } catch (h) {
        console.error(h);
      }
    }, 1e3);
  }
  return u;
}
function Yr(e) {
  var t = e, {
    beforeOnClick: r,
    children: n,
    className: o,
    disabled: a,
    disabledStyle: c = { opacity: 0.6 },
    forwardedRef: l,
    htmlTitle: u,
    networkLink: d,
    networkName: h,
    onClick: p,
    onShareWindowClose: m,
    openShareDialogOnClick: y = !0,
    opts: k,
    resetButtonStyle: C = !0,
    style: L,
    title: z,
    url: R,
    windowHeight: _ = 400,
    windowPosition: x = "windowCenter",
    windowWidth: A = 550
  } = t, B = Ee(t, [
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
    const ue = d(R, k);
    if (!a) {
      if (K.preventDefault(), r) {
        const Y = r();
        Br(Y) && await Y;
      }
      if (y) {
        const Y = $({
          height: _,
          width: A
        }, x === "windowCenter" ? Ur(A, _) : qr(A, _));
        Kr(ue, Y, m);
      }
      p && p(K, ue);
    }
  }, W = Ht(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!a,
      disabled: !!a
    },
    o
  ), ie = $($(C ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, L), a && c);
  return /* @__PURE__ */ s.jsx(
    "button",
    Ce($({}, B), {
      className: W,
      onClick: H,
      ref: l,
      style: ie,
      title: u,
      children: n
    })
  );
}
function T(e, t, r, n) {
  const o = (a, c) => {
    const l = r(a), u = $({}, a);
    return Object.keys(l).forEach((h) => {
      delete u[h];
    }), /* @__PURE__ */ s.jsx(
      Yr,
      Ce($($({}, n), u), {
        forwardedRef: c,
        networkName: e,
        networkLink: t,
        opts: l
      })
    );
  };
  return o.displayName = `ShareButton-${e}`, _r(o);
}
function Xr(e, { title: t, separator: r }) {
  return P(e, "bluesky.url"), "https://bsky.app/intent/compose" + S({
    text: t ? t + r + e : e
  });
}
T(
  "bluesky",
  Xr,
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
function Gr(e, { subject: t, body: r, separator: n }) {
  return "mailto:" + S({ subject: t, body: r ? r + n + e : e });
}
T(
  "email",
  Gr,
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
const kt = le({
  color: "#0965FE",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
});
function Jr(e, { appId: t, redirectUri: r, to: n }) {
  return "https://www.facebook.com/dialog/send" + S({
    link: e,
    redirect_uri: r || e,
    app_id: t,
    to: n
  });
}
T(
  "facebookmessenger",
  Jr,
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
function Qr(e, { hashtag: t }) {
  return P(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + S({ u: e, hashtag: t });
}
const jt = T(
  "facebook",
  Qr,
  (e) => ({ hashtag: e.hashtag }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
function Zr() {
  const e = xe(!1);
  return ye(() => (e.current = !0, () => {
    e.current = !1;
  }), []), Pr(() => e.current, []);
}
function en(e) {
  var t = e, {
    children: r = (m) => m,
    className: n,
    getCount: o,
    url: a
  } = t, c = Ee(t, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const l = Zr(), [u, d] = ne(void 0), [h, p] = ne(!1);
  return ye(() => {
    p(!0), o(a, (m) => {
      l() && (d(m), p(!1));
    });
  }, [a]), /* @__PURE__ */ s.jsx("span", Ce($({ className: Ht("react-share__ShareCount", n) }, c), { children: !h && u !== void 0 && r(u) }));
}
function Q(e) {
  const t = (r) => /* @__PURE__ */ s.jsx(en, $({ getCount: e }, r));
  return t.displayName = `ShareCount(${e.name})`, t;
}
function tn(e, t) {
  const r = `https://graph.facebook.com/?id=${e}&fields=og_object{engagement}`;
  J(r, (n, o) => {
    t(
      !n && o && o.og_object && o.og_object.engagement ? o.og_object.engagement.count : void 0
    );
  });
}
Q(tn);
function rn(e, { title: t }) {
  return P(e, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${e}&title=${t}`;
}
T(
  "hatena",
  rn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
function nn(e, t) {
  J(
    "https://bookmark.hatenaapis.com/count/entry" + S({
      url: e
    }),
    (n, o) => {
      t(o ?? void 0);
    }
  );
}
Q(nn);
function an(e, { title: t, description: r }) {
  return P(e, "instapaper.url"), "http://www.instapaper.com/hello2" + S({
    url: e,
    title: t,
    description: r
  });
}
T(
  "instapaper",
  an,
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
function on(e, { title: t }) {
  return P(e, "line.url"), "https://social-plugins.line.me/lineit/share" + S({
    url: e,
    text: t
  });
}
T(
  "line",
  on,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
const St = le({
  color: "#0077B5",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function sn(e, { title: t, summary: r, source: n }) {
  return P(e, "linkedin.url"), "https://linkedin.com/shareArticle" + S({ url: e, mini: "true", title: t, summary: r, source: n });
}
const Ct = T(
  "linkedin",
  sn,
  ({ title: e, summary: t, source: r }) => ({ title: e, summary: t, source: r }),
  {
    windowWidth: 750,
    windowHeight: 600
  }
);
function cn(e, { title: t, description: r }) {
  return P(e, "livejournal.url"), "https://www.livejournal.com/update.bml" + S({
    subject: t,
    event: r
  });
}
T(
  "livejournal",
  cn,
  (e) => ({
    title: e.title,
    description: e.description
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function ln(e, { title: t, description: r, imageUrl: n }) {
  return P(e, "mailru.url"), "https://connect.mail.ru/share" + S({
    url: e,
    title: t,
    description: r,
    image_url: n
  });
}
T(
  "mailru",
  ln,
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
function un(e, { title: t, description: r, image: n }) {
  return P(e, "ok.url"), "https://connect.ok.ru/offer" + S({
    url: e,
    title: t,
    description: r,
    imageUrl: n
  });
}
T(
  "ok",
  un,
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
function dn(e, t) {
  window.OK || (window.OK = {
    Share: {
      count: function(a, c) {
        var l, u;
        (u = (l = window.OK.callbacks)[a]) == null || u.call(l, c);
      }
    },
    callbacks: []
  });
  const r = "https://connect.ok.ru/dk", n = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(o, a) {
      var c, l;
      const u = o === "" ? 0 : parseInt(o.replace("react-share-", ""), 10);
      (l = (c = window.OK.callbacks)[u]) == null || l.call(c, a === "" ? void 0 : parseInt(a, 10));
    }
  }, window.OK.callbacks.push(t), J(
    r + S({
      "st.cmd": "extLike",
      uid: `react-share-${n}`,
      ref: e
    })
  );
}
Q(dn);
function fn(e, { media: t, description: r, pinId: n }) {
  return n ? `https://pinterest.com/pin/${n}/repin/x/` : (P(e, "pinterest.url"), P(t, "pinterest.media"), "https://pinterest.com/pin/create/button/" + S({
    url: e,
    media: t,
    description: r
  }));
}
T(
  "pinterest",
  fn,
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
function hn(e, t) {
  J(
    "https://api.pinterest.com/v1/urls/count.json" + S({
      url: e
    }),
    (n, o) => {
      t(o ? o.count : void 0);
    }
  );
}
Q(hn);
function mn(e, { title: t }) {
  return P(e, "pocket.url"), "https://getpocket.com/save" + S({
    url: e,
    title: t
  });
}
T(
  "pocket",
  mn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
function gn(e, { title: t }) {
  return P(e, "reddit.url"), "https://www.reddit.com/web/submit" + S({
    url: e,
    title: t
  });
}
T(
  "reddit",
  gn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
function pn(e, { title: t }) {
  return P(e, "gab.url"), "https://gab.com/compose" + S({
    url: e,
    text: t
  });
}
T(
  "gab",
  pn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: "windowCenter"
  }
);
function wn(e, t) {
  const r = `https://www.reddit.com/api/info.json?limit=1&url=${e}`;
  J(r, { param: "jsonp" }, (n, o) => {
    t(
      !n && o && o.data && o.data.children.length > 0 && o.data.children[0].data.score ? o.data.children[0].data.score : void 0
    );
  });
}
Q(wn);
function bn(e, { title: t }) {
  return P(e, "telegram.url"), "https://telegram.me/share/url" + S({
    url: e,
    text: t
  });
}
T(
  "telegram",
  bn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const Et = le({
  color: "#000000",
  path: "M41.4569 31.0027C41.2867 30.9181 41.1138 30.8366 40.9386 30.7586C40.6336 24.9274 37.5624 21.5891 32.4055 21.5549C32.3821 21.5548 32.3589 21.5548 32.3355 21.5548C29.251 21.5548 26.6857 22.9207 25.1067 25.4063L27.9429 27.4247C29.1224 25.5681 30.9736 25.1723 32.3369 25.1723C32.3526 25.1723 32.3684 25.1723 32.384 25.1724C34.082 25.1837 35.3633 25.6958 36.1926 26.6947C36.7961 27.4218 37.1997 28.4267 37.3996 29.6949C35.8941 29.4294 34.266 29.3478 32.5255 29.4513C27.6225 29.7443 24.4705 32.711 24.6822 36.8332C24.7896 38.9242 25.7937 40.7231 27.5094 41.8982C28.96 42.8916 30.8282 43.3774 32.7699 43.2674C35.3341 43.1216 37.3456 42.1066 38.749 40.2507C39.8148 38.8413 40.4889 37.0149 40.7865 34.7136C42.0085 35.4787 42.9142 36.4855 43.4144 37.6959C44.2649 39.7534 44.3145 43.1344 41.6553 45.8908C39.3255 48.3055 36.525 49.3501 32.2926 49.3824C27.5977 49.3463 24.0471 47.7842 21.7385 44.7396C19.5768 41.8886 18.4595 37.7706 18.4179 32.5C18.4595 27.2293 19.5768 23.1113 21.7385 20.2604C24.0471 17.2157 27.5977 15.6537 32.2925 15.6175C37.0215 15.654 40.634 17.2235 43.0309 20.2829C44.2062 21.7831 45.0923 23.6698 45.6764 25.8696L49 24.9496C48.2919 22.2419 47.1778 19.9087 45.6616 17.9736C42.5888 14.0514 38.0947 12.0417 32.3041 12H32.2809C26.5022 12.0415 22.0584 14.0589 19.073 17.9961C16.4165 21.4997 15.0462 26.3747 15.0001 32.4856L15 32.5L15.0001 32.5144C15.0462 38.6252 16.4165 43.5004 19.073 47.004C22.0584 50.941 26.5022 52.9586 32.2809 53H32.3041C37.4418 52.9631 41.0632 51.5676 44.0465 48.4753C47.9496 44.4297 47.8321 39.3587 46.5457 36.2457C45.6227 34.0134 43.8631 32.2002 41.4569 31.0027ZM32.5863 39.6551C30.4374 39.7807 28.205 38.78 28.0949 36.6367C28.0133 35.0476 29.185 33.2743 32.7182 33.0631C33.1228 33.0389 33.5199 33.027 33.9099 33.027C35.1933 33.027 36.3939 33.1564 37.4854 33.4039C37.0783 38.6788 34.6902 39.5353 32.5863 39.6551Z"
});
function xn(e, { title: t }) {
  return P(e, "threads.url"), "https://threads.net/intent/post" + S({
    url: e,
    text: t
  });
}
const Rt = T(
  "threads",
  xn,
  (e) => ({
    title: e.title
  }),
  {
    windowWidth: 550,
    windowHeight: 600
  }
);
function vn(e, {
  title: t,
  caption: r,
  tags: n,
  posttype: o
}) {
  return P(e, "tumblr.url"), "https://www.tumblr.com/widgets/share/tool" + S({
    canonicalUrl: e,
    title: t,
    caption: r,
    tags: n,
    posttype: o
  });
}
T(
  "tumblr",
  vn,
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
function yn(e, t) {
  return J(
    "https://api.tumblr.com/v2/share/stats" + S({
      url: e
    }),
    (n, o) => {
      t(!n && o && o.response ? o.response.note_count : void 0);
    }
  );
}
Q(yn);
function kn(e, {
  title: t,
  via: r,
  hashtags: n = [],
  related: o = []
}) {
  return P(e, "twitter.url"), P(Array.isArray(n), "twitter.hashtags is not an array"), P(Array.isArray(o), "twitter.related is not an array"), "https://twitter.com/intent/tweet" + S({
    url: e,
    text: t,
    via: r,
    hashtags: n.length > 0 ? n.join(",") : void 0,
    related: o.length > 0 ? o.join(",") : void 0
  });
}
const _t = T(
  "twitter",
  kn,
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
function jn(e, { title: t, separator: r }) {
  return P(e, "viber.url"), "viber://forward" + S({
    text: t ? t + r + e : e
  });
}
T(
  "viber",
  jn,
  (e) => ({
    title: e.title,
    separator: e.separator || " "
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
function Sn(e, { title: t, image: r, noParse: n, noVkLinks: o }) {
  return P(e, "vk.url"), "https://vk.com/share.php" + S({
    url: e,
    title: t,
    image: r,
    noparse: n ? 1 : 0,
    no_vk_links: o ? 1 : 0
  });
}
T(
  "vk",
  Sn,
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
      var c, l;
      return (l = (c = window.VK.callbacks) == null ? void 0 : c[o]) == null ? void 0 : l.call(c, a);
    }
  }, window.VK.callbacks = [];
  const r = "https://vk.com/share.php", n = window.VK.callbacks.length;
  return window.VK.callbacks.push(t), J(
    r + S({
      act: "count",
      index: n,
      url: e
    })
  );
}
Q(Cn);
function En(e, { title: t, image: r }) {
  return P(e, "weibo.url"), "http://service.weibo.com/share/share.php" + S({
    url: e,
    title: t,
    pic: r
  });
}
T(
  "weibo",
  En,
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
const Pt = le({
  color: "#25D366",
  path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
});
function Rn() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function _n(e, { title: t, separator: r }) {
  return P(e, "whatsapp.url"), "https://" + (Rn() ? "api" : "web") + ".whatsapp.com/send" + S({
    text: t ? t + r + e : e
  });
}
const Tt = T(
  "whatsapp",
  _n,
  (e) => ({
    title: e.title,
    separator: e.separator || " "
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
function Pn(e, { quote: t, hashtag: r }) {
  return P(e, "workplace.url"), "https://work.facebook.com/sharer.php" + S({
    u: e,
    quote: t,
    hashtag: r
  });
}
T(
  "workplace",
  Pn,
  (e) => ({
    quote: e.quote,
    hashtag: e.hashtag
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const Ot = le({
  color: "#000000",
  path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
});
function _i({ currentUrl: e }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end", children: [
    /* @__PURE__ */ s.jsx("section", { className: "block md:hidden", children: /* @__PURE__ */ s.jsxs("div", { className: "flex w-full justify-end gap-2", children: [
      /* @__PURE__ */ s.jsx(jt, { url: e, children: /* @__PURE__ */ s.jsx(kt, { size: 24, round: !0 }) }),
      /* @__PURE__ */ s.jsx(_t, { url: e, children: /* @__PURE__ */ s.jsx(Ot, { size: 24, round: !0 }) }),
      /* @__PURE__ */ s.jsx(Ct, { url: e, children: /* @__PURE__ */ s.jsx(St, { size: 24, round: !0 }) }),
      /* @__PURE__ */ s.jsx(Rt, { url: e, children: /* @__PURE__ */ s.jsx(Et, { size: 24, round: !0 }) }),
      /* @__PURE__ */ s.jsx(Tt, { url: e, children: /* @__PURE__ */ s.jsx(Pt, { size: 24, round: !0 }) })
    ] }) }),
    /* @__PURE__ */ s.jsx("section", { className: "hidden md:block", children: /* @__PURE__ */ s.jsxs("div", { className: "flex w-full justify-end gap-2", children: [
      /* @__PURE__ */ s.jsx(jt, { url: e, children: /* @__PURE__ */ s.jsx(kt, { size: 32, round: !0 }) }),
      /* @__PURE__ */ s.jsx(_t, { url: e, children: /* @__PURE__ */ s.jsx(Ot, { size: 32, round: !0 }) }),
      /* @__PURE__ */ s.jsx(Ct, { url: e, children: /* @__PURE__ */ s.jsx(St, { size: 32, round: !0 }) }),
      /* @__PURE__ */ s.jsx(Rt, { url: e, children: /* @__PURE__ */ s.jsx(Et, { size: 32, round: !0 }) }),
      /* @__PURE__ */ s.jsx(Tt, { url: e, children: /* @__PURE__ */ s.jsx(Pt, { size: 32, round: !0 }) })
    ] }) })
  ] });
}
function Pi({ mode: e, setMode: t }) {
  const r = e === "quick";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `\r
        flex items-center justify-between gap-3 rounded-xl border p-3\r
        border-zinc-200 bg-white\r
        dark:border-zinc-800 dark:bg-zinc-950/60\r
        backdrop-blur mt-3\r
      `,
      children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("div", { className: "text-sm font-semibold text-zinc-900 dark:text-zinc-100", children: "Quick mode" }),
          /* @__PURE__ */ s.jsx("div", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: "Switch between full article and quick carousel" })
        ] }),
        /* @__PURE__ */ s.jsx(
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
            children: /* @__PURE__ */ s.jsx(
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
function Tn({ goTo: e, index: t, pagesHtml: r }) {
  return /* @__PURE__ */ s.jsx("div", { className: "mt-4 flex w-full items-center gap-1 mb-3", children: r.map((n, o) => {
    const a = o === t, c = o < t;
    return /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: () => e(o),
        "aria-label": `Go to page ${o + 1}`,
        className: "flex-1",
        children: /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `
            h-1.5 w-full rounded-full transition-all duration-300
            ${a ? "bg-zinc-900" : c ? "bg-zinc-700" : "bg-zinc-300"}
          `
          }
        )
      },
      o
    );
  }) });
}
function On(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const r = document.implementation.createHTMLDocument(), n = r.createElement("base"), o = r.createElement("a");
  return r.head.appendChild(n), r.body.appendChild(o), t && (n.href = t), o.href = e, o.href;
}
const zn = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function q(e) {
  const t = [];
  for (let r = 0, n = e.length; r < n; r++)
    t.push(e[r]);
  return t;
}
let te = null;
function Ut(e = {}) {
  return te || (e.includeStyleProperties ? (te = e.includeStyleProperties, te) : (te = q(window.getComputedStyle(document.documentElement)), te));
}
function je(e, t) {
  const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return n ? parseFloat(n.replace("px", "")) : 0;
}
function An(e) {
  const t = je(e, "border-left-width"), r = je(e, "border-right-width");
  return e.clientWidth + t + r;
}
function Nn(e) {
  const t = je(e, "border-top-width"), r = je(e, "border-bottom-width");
  return e.clientHeight + t + r;
}
function qt(e, t = {}) {
  const r = t.width || An(e), n = t.height || Nn(e);
  return { width: r, height: n };
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
function In(e) {
  (e.width > M || e.height > M) && (e.width > M && e.height > M ? e.width > e.height ? (e.height *= M / e.width, e.width = M) : (e.width *= M / e.height, e.height = M) : e.width > M ? (e.height *= M / e.width, e.width = M) : (e.width *= M / e.height, e.height = M));
}
function Se(e) {
  return new Promise((t, r) => {
    const n = new Image();
    n.onload = () => {
      n.decode().then(() => {
        requestAnimationFrame(() => t(n));
      });
    }, n.onerror = r, n.crossOrigin = "anonymous", n.decoding = "async", n.src = e;
  });
}
async function Fn(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function Dn(e, t, r) {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), a = document.createElementNS(n, "foreignObject");
  return o.setAttribute("width", `${t}`), o.setAttribute("height", `${r}`), o.setAttribute("viewBox", `0 0 ${t} ${r}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(e), Fn(o);
}
const D = (e, t) => {
  if (e instanceof t)
    return !0;
  const r = Object.getPrototypeOf(e);
  return r === null ? !1 : r.constructor.name === t.name || D(r, t);
};
function Wn(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function Mn(e, t) {
  return Ut(t).map((r) => {
    const n = e.getPropertyValue(r), o = e.getPropertyPriority(r);
    return `${r}: ${n}${o ? " !important" : ""};`;
  }).join(" ");
}
function $n(e, t, r, n) {
  const o = `.${e}:${t}`, a = r.cssText ? Wn(r) : Mn(r, n);
  return document.createTextNode(`${o}{${a}}`);
}
function zt(e, t, r, n) {
  const o = window.getComputedStyle(e, r), a = o.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const c = zn();
  try {
    t.className = `${t.className} ${c}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild($n(c, r, o, n)), t.appendChild(l);
}
function Hn(e, t, r) {
  zt(e, t, ":before", r), zt(e, t, ":after", r);
}
const At = "application/font-woff", Nt = "image/jpeg", Vn = {
  woff: At,
  woff2: At,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Nt,
  jpeg: Nt,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Bn(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function He(e) {
  const t = Bn(e).toLowerCase();
  return Vn[t] || "";
}
function Un(e) {
  return e.split(/,/)[1];
}
function $e(e) {
  return e.search(/^(data:)/) !== -1;
}
function qn(e, t) {
  return `data:${t};base64,${e}`;
}
async function Kt(e, t, r) {
  const n = await fetch(e, t);
  if (n.status === 404)
    throw new Error(`Resource "${n.url}" not found`);
  const o = await n.blob();
  return new Promise((a, c) => {
    const l = new FileReader();
    l.onerror = c, l.onloadend = () => {
      try {
        a(r({ res: n, result: l.result }));
      } catch (u) {
        c(u);
      }
    }, l.readAsDataURL(o);
  });
}
const We = {};
function Kn(e, t, r) {
  let n = e.replace(/\?.*/, "");
  return r && (n = e), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), t ? `[${t}]${n}` : n;
}
async function Ve(e, t, r) {
  const n = Kn(e, t, r.includeQueryParams);
  if (We[n] != null)
    return We[n];
  r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const a = await Kt(e, r.fetchRequestInit, ({ res: c, result: l }) => (t || (t = c.headers.get("Content-Type") || ""), Un(l)));
    o = qn(a, t);
  } catch (a) {
    o = r.imagePlaceholder || "";
    let c = `Failed to fetch resource: ${e}`;
    a && (c = typeof a == "string" ? a : a.message), c && console.warn(c);
  }
  return We[n] = o, o;
}
async function Yn(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Se(t);
}
async function Xn(e, t) {
  if (e.currentSrc) {
    const a = document.createElement("canvas"), c = a.getContext("2d");
    a.width = e.clientWidth, a.height = e.clientHeight, c?.drawImage(e, 0, 0, a.width, a.height);
    const l = a.toDataURL();
    return Se(l);
  }
  const r = e.poster, n = He(r), o = await Ve(r, n, t);
  return Se(o);
}
async function Gn(e, t) {
  var r;
  try {
    if (!((r = e?.contentDocument) === null || r === void 0) && r.body)
      return await Re(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Jn(e, t) {
  return D(e, HTMLCanvasElement) ? Yn(e) : D(e, HTMLVideoElement) ? Xn(e, t) : D(e, HTMLIFrameElement) ? Gn(e, t) : e.cloneNode(Yt(e));
}
const Qn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Yt = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Zn(e, t, r) {
  var n, o;
  if (Yt(t))
    return t;
  let a = [];
  return Qn(e) && e.assignedNodes ? a = q(e.assignedNodes()) : D(e, HTMLIFrameElement) && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? a = q(e.contentDocument.body.childNodes) : a = q(((o = e.shadowRoot) !== null && o !== void 0 ? o : e).childNodes), a.length === 0 || D(e, HTMLVideoElement) || await a.reduce((c, l) => c.then(() => Re(l, r)).then((u) => {
    u && t.appendChild(u);
  }), Promise.resolve()), t;
}
function ei(e, t, r) {
  const n = t.style;
  if (!n)
    return;
  const o = window.getComputedStyle(e);
  o.cssText ? (n.cssText = o.cssText, n.transformOrigin = o.transformOrigin) : Ut(r).forEach((a) => {
    let c = o.getPropertyValue(a);
    a === "font-size" && c.endsWith("px") && (c = `${Math.floor(parseFloat(c.substring(0, c.length - 2))) - 0.1}px`), D(e, HTMLIFrameElement) && a === "display" && c === "inline" && (c = "block"), a === "d" && t.getAttribute("d") && (c = `path(${t.getAttribute("d")})`), n.setProperty(a, c, o.getPropertyPriority(a));
  });
}
function ti(e, t) {
  D(e, HTMLTextAreaElement) && (t.innerHTML = e.value), D(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function ri(e, t) {
  if (D(e, HTMLSelectElement)) {
    const n = Array.from(t.children).find((o) => e.value === o.getAttribute("value"));
    n && n.setAttribute("selected", "");
  }
}
function ni(e, t, r) {
  return D(t, Element) && (ei(e, t, r), Hn(e, t, r), ti(e, t), ri(e, t)), t;
}
async function ii(e, t) {
  const r = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (r.length === 0)
    return e;
  const n = {};
  for (let a = 0; a < r.length; a++) {
    const l = r[a].getAttribute("xlink:href");
    if (l) {
      const u = e.querySelector(l), d = document.querySelector(l);
      !u && d && !n[l] && (n[l] = await Re(d, t, !0));
    }
  }
  const o = Object.values(n);
  if (o.length) {
    const a = "http://www.w3.org/1999/xhtml", c = document.createElementNS(a, "svg");
    c.setAttribute("xmlns", a), c.style.position = "absolute", c.style.width = "0", c.style.height = "0", c.style.overflow = "hidden", c.style.display = "none";
    const l = document.createElementNS(a, "defs");
    c.appendChild(l);
    for (let u = 0; u < o.length; u++)
      l.appendChild(o[u]);
    e.appendChild(c);
  }
  return e;
}
async function Re(e, t, r) {
  return !r && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((n) => Jn(n, t)).then((n) => Zn(e, n, t)).then((n) => ni(e, n, t)).then((n) => ii(n, t));
}
const Xt = /url\((['"]?)([^'"]+?)\1\)/g, ai = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, oi = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function si(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function ci(e) {
  const t = [];
  return e.replace(Xt, (r, n, o) => (t.push(o), r)), t.filter((r) => !$e(r));
}
async function li(e, t, r, n, o) {
  try {
    const a = r ? On(t, r) : t, c = He(t);
    let l;
    return o || (l = await Ve(a, c, n)), e.replace(si(t), `$1${l}$3`);
  } catch {
  }
  return e;
}
function ui(e, { preferredFontFormat: t }) {
  return t ? e.replace(oi, (r) => {
    for (; ; ) {
      const [n, , o] = ai.exec(r) || [];
      if (!o)
        return "";
      if (o === t)
        return `src: ${n};`;
    }
  }) : e;
}
function Gt(e) {
  return e.search(Xt) !== -1;
}
async function Jt(e, t, r) {
  if (!Gt(e))
    return e;
  const n = ui(e, r);
  return ci(n).reduce((a, c) => a.then((l) => li(l, c, t, r)), Promise.resolve(n));
}
async function re(e, t, r) {
  var n;
  const o = (n = t.style) === null || n === void 0 ? void 0 : n.getPropertyValue(e);
  if (o) {
    const a = await Jt(o, null, r);
    return t.style.setProperty(e, a, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function di(e, t) {
  await re("background", e, t) || await re("background-image", e, t), await re("mask", e, t) || await re("-webkit-mask", e, t) || await re("mask-image", e, t) || await re("-webkit-mask-image", e, t);
}
async function fi(e, t) {
  const r = D(e, HTMLImageElement);
  if (!(r && !$e(e.src)) && !(D(e, SVGImageElement) && !$e(e.href.baseVal)))
    return;
  const n = r ? e.src : e.href.baseVal, o = await Ve(n, He(n), t);
  await new Promise((a, c) => {
    e.onload = a, e.onerror = t.onImageErrorHandler ? (...u) => {
      try {
        a(t.onImageErrorHandler(...u));
      } catch (d) {
        c(d);
      }
    } : c;
    const l = e;
    l.decode && (l.decode = a), l.loading === "lazy" && (l.loading = "eager"), r ? (e.srcset = "", e.src = o) : e.href.baseVal = o;
  });
}
async function hi(e, t) {
  const n = q(e.childNodes).map((o) => Qt(o, t));
  await Promise.all(n).then(() => e);
}
async function Qt(e, t) {
  D(e, Element) && (await di(e, t), await fi(e, t), await hi(e, t));
}
function mi(e, t) {
  const { style: r } = e;
  t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.width && (r.width = `${t.width}px`), t.height && (r.height = `${t.height}px`);
  const n = t.style;
  return n != null && Object.keys(n).forEach((o) => {
    r[o] = n[o];
  }), e;
}
const Lt = {};
async function It(e) {
  let t = Lt[e];
  if (t != null)
    return t;
  const n = await (await fetch(e)).text();
  return t = { url: e, cssText: n }, Lt[e] = t, t;
}
async function Ft(e, t) {
  let r = e.cssText;
  const n = /url\(["']?([^"')]+)["']?\)/g, a = (r.match(/url\([^)]+\)/g) || []).map(async (c) => {
    let l = c.replace(n, "$1");
    return l.startsWith("https://") || (l = new URL(l, e.url).href), Kt(l, t.fetchRequestInit, ({ result: u }) => (r = r.replace(c, `url(${u})`), [c, u]));
  });
  return Promise.all(a).then(() => r);
}
function Dt(e) {
  if (e == null)
    return [];
  const t = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let n = e.replace(r, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const u = o.exec(n);
    if (u === null)
      break;
    t.push(u[0]);
  }
  n = n.replace(o, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, c = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", l = new RegExp(c, "gi");
  for (; ; ) {
    let u = a.exec(n);
    if (u === null) {
      if (u = l.exec(n), u === null)
        break;
      a.lastIndex = l.lastIndex;
    } else
      l.lastIndex = a.lastIndex;
    t.push(u[0]);
  }
  return t;
}
async function gi(e, t) {
  const r = [], n = [];
  return e.forEach((o) => {
    if ("cssRules" in o)
      try {
        q(o.cssRules || []).forEach((a, c) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let l = c + 1;
            const u = a.href, d = It(u).then((h) => Ft(h, t)).then((h) => Dt(h).forEach((p) => {
              try {
                o.insertRule(p, p.startsWith("@import") ? l += 1 : o.cssRules.length);
              } catch (m) {
                console.error("Error inserting rule from remote css", {
                  rule: p,
                  error: m
                });
              }
            })).catch((h) => {
              console.error("Error loading remote css", h.toString());
            });
            n.push(d);
          }
        });
      } catch (a) {
        const c = e.find((l) => l.href == null) || document.styleSheets[0];
        o.href != null && n.push(It(o.href).then((l) => Ft(l, t)).then((l) => Dt(l).forEach((u) => {
          c.insertRule(u, c.cssRules.length);
        })).catch((l) => {
          console.error("Error loading remote stylesheet", l);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(n).then(() => (e.forEach((o) => {
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
function pi(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Gt(t.style.getPropertyValue("src")));
}
async function wi(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = q(e.ownerDocument.styleSheets), n = await gi(r, t);
  return pi(n);
}
function Zt(e) {
  return e.trim().replace(/["']/g, "");
}
function bi(e) {
  const t = /* @__PURE__ */ new Set();
  function r(n) {
    (n.style.fontFamily || getComputedStyle(n).fontFamily).split(",").forEach((a) => {
      t.add(Zt(a));
    }), Array.from(n.children).forEach((a) => {
      a instanceof HTMLElement && r(a);
    });
  }
  return r(e), t;
}
async function xi(e, t) {
  const r = await wi(e, t), n = bi(e);
  return (await Promise.all(r.filter((a) => n.has(Zt(a.style.fontFamily))).map((a) => {
    const c = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return Jt(a.cssText, c, t);
  }))).join(`
`);
}
async function vi(e, t) {
  const r = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await xi(e, t);
  if (r) {
    const n = document.createElement("style"), o = document.createTextNode(r);
    n.appendChild(o), e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n);
  }
}
async function yi(e, t = {}) {
  const { width: r, height: n } = qt(e, t), o = await Re(e, t, !0);
  return await vi(o, t), await Qt(o, t), mi(o, t), await Dn(o, r, n);
}
async function ki(e, t = {}) {
  const { width: r, height: n } = qt(e, t), o = await yi(e, t), a = await Se(o), c = document.createElement("canvas"), l = c.getContext("2d"), u = t.pixelRatio || Ln(), d = t.canvasWidth || r, h = t.canvasHeight || n;
  return c.width = d * u, c.height = h * u, t.skipAutoScale || In(c), c.style.width = `${d}`, c.style.height = `${h}`, t.backgroundColor && (l.fillStyle = t.backgroundColor, l.fillRect(0, 0, c.width, c.height)), l.drawImage(a, 0, 0, c.width, c.height), c;
}
async function ji(e, t = {}) {
  return (await ki(e, t)).toDataURL();
}
function Wt(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ti({
  pagesHtml: e,
  title: t,
  initialIndex: r = 0,
  className: n = ""
}) {
  const o = xe([]), [a, c] = ne(!1), [l, u] = ne(
    () => Wt(r, 0, Math.max(0, e.length - 1))
  ), d = xe(null), h = xe(null), p = e.length, m = l > 0, y = l < p - 1, k = (x) => u(Wt(x, 0, p - 1)), C = () => m && u((x) => x - 1), L = () => y && u((x) => x + 1);
  ye(() => {
    function x(A) {
      A.key === "ArrowLeft" && C(), A.key === "ArrowRight" && L();
    }
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [m, y]), ye(() => {
    const x = d.current;
    if (!x) return;
    const A = (H) => {
      h.current = (H.touches[0] && H.touches[0].clientX) ?? null;
    }, B = (H) => {
      const W = h.current;
      if (h.current = null, W == null) return;
      const K = ((H.changedTouches[0] && H.changedTouches[0].clientX) ?? W) - W;
      Math.abs(K) < 40 || (K > 0 ? C() : L());
    };
    return x.addEventListener("touchstart", A, { passive: !0 }), x.addEventListener("touchend", B, { passive: !0 }), () => {
      x.removeEventListener("touchstart", A), x.removeEventListener("touchend", B);
    };
  }, [m, y]);
  const z = Mt(() => `${l + 1} / ${p}`, [l, p]);
  if (!e || e.length === 0) return null;
  async function R() {
    const x = o.current[l];
    if (!x) throw new Error("Slide not found");
    const A = x.style.backgroundColor;
    A || (x.style.backgroundColor = "#09090b");
    try {
      return await ji(x, {
        pixelRatio: 2,
        // crisper image
        cacheBust: !0
      });
    } finally {
      x.style.backgroundColor = A;
    }
  }
  async function _() {
    try {
      c(!0);
      const x = await R(), B = await (await fetch(x)).blob(), H = new File([B], `slide-${l + 1}.png`, {
        type: "image/png"
      });
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [H] })) {
        await navigator.share({
          title: "Slide",
          text: `Slide ${l + 1} / ${e.length}`,
          files: [H]
        });
        return;
      }
      const W = document.createElement("a");
      W.href = x, W.download = `slide-${l + 1}.png`, document.body.appendChild(W), W.click(), W.remove();
    } catch (x) {
      console.error(x), alert("Could not create image. Try again.");
    } finally {
      c(!1);
    }
  }
  return /* @__PURE__ */ s.jsxs("section", { className: `w-full ${n}`, children: [
    /* @__PURE__ */ s.jsx(Tn, { goTo: k, index: l, pagesHtml: e }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: d,
        className: "relative overflow-hidden rounded-xl border border-zinc-600 ",
        children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "flex transition-transform duration-300 ease-out",
              style: { transform: `translateX(-${l * 100}%)` },
              children: e.map((x, A) => /* @__PURE__ */ s.jsxs(
                "article",
                {
                  ref: (B) => o.current[A] = B,
                  className: "w-full shrink-0 p-2 px-4  prose prose-zinc max-w-none flex items-center relative  pt-[36px] pb-[30px] md:p-[26px] ",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        className: "pointer-events-none select-none absolute top-3 left-4 text-xs tracking-widest uppercase text-zinc-400",
                        style: { fontSize: "10px" },
                        children: t
                      }
                    ),
                    /* @__PURE__ */ s.jsx("div", { className: "pointer-events-none select-none absolute bottom-3 right-4 text-xs tracking-widest uppercase text-zinc-500/60", children: "Apptastic Coder" }),
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        className: "carousel-content md:text-[16px]",
                        dangerouslySetInnerHTML: { __html: x }
                      }
                    )
                  ]
                },
                A
              ))
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3 p-2", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-zinc-500", children: [
              "Quick read ",
              /* @__PURE__ */ s.jsx("span", { className: "mx-2", children: "•" }),
              /* @__PURE__ */ s.jsx("span", { className: "font-medium text-zinc-700", children: z })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: C,
                  disabled: !m,
                  className: "rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50",
                  children: "Prev"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: L,
                  disabled: !y,
                  className: "rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50",
                  children: "Next"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: _,
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
function Oi({ faqs: e = [] }) {
  const [t, r] = Rr.useState(0);
  if (!e.length) return null;
  const n = (o) => {
    r((a) => a === o ? null : o);
  };
  return /* @__PURE__ */ s.jsx("main", { className: "bg-slate-950 text-slate-50", children: /* @__PURE__ */ s.jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8", children: [
    /* @__PURE__ */ s.jsxs("header", { className: "mb-8 text-center sm:mb-10", children: [
      /* @__PURE__ */ s.jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-indigo-300", children: "Help & Information" }),
      /* @__PURE__ */ s.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ s.jsx("p", { className: "mt-3 text-sm text-slate-300 sm:text-base", children: "A quick overview of what Apptastic Coder is about, how the site works, and how you can get the most value from the content, tools, and job listings shared here." })
    ] }),
    /* @__PURE__ */ s.jsx("section", { className: "space-y-6", children: e.map((o, a) => {
      const c = t === a, l = `faq-panel-${a}`;
      return /* @__PURE__ */ s.jsxs("div", { className: "px-4 py-3 sm:px-5 sm:py-4", children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            onClick: () => n(a),
            className: "flex w-full items-center justify-between gap-4 text-left cursor-pointer",
            "aria-expanded": c,
            "aria-controls": l,
            children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-sm font-semibold text-slate-100 sm:text-base dark:text-sky-400 text-sky-700", children: o.question }),
              /* @__PURE__ */ s.jsx(
                "span",
                {
                  className: `inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-transform ${c ? "rotate-90" : ""}`,
                  children: /* @__PURE__ */ s.jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      className: "h-3 w-3",
                      children: /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M7.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4A1 1 0 017.293 12.293L10.586 9 7.293 5.707a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                }
              )
            ]
          }
        ),
        c && /* @__PURE__ */ s.jsx(
          "div",
          {
            id: l,
            className: "mt-2 text-sm leading-relaxed text-slate-300",
            children: o.answer
          }
        )
      ] }, a);
    }) })
  ] }) });
}
function Si(e) {
  return typeof e == "string" && e.toLowerCase() === "a";
}
function be(e, t) {
  return t ? t === "/" ? e === "/" : e === t || e.startsWith(t) : !1;
}
function zi({
  brand: e,
  links: t = [],
  currentPath: r = "",
  LinkComponent: n = "a",
  sticky: o = !0
}) {
  const [a, c] = ne(!1), l = Si(n), u = Mt(
    () => t.map((m) => Array.isArray(m.items) ? {
      type: "group",
      label: m.label,
      items: m.items
    } : {
      type: "item",
      to: m.to,
      label: m.label
    }),
    [t]
  ), d = e?.homeHref || "/", h = (m, y) => l ? /* @__PURE__ */ s.jsx("a", { href: m.to, className: y, children: m.label }) : /* @__PURE__ */ s.jsx(n, { to: m.to, className: y, children: m.label }), p = (m) => l ? /* @__PURE__ */ s.jsxs("a", { href: d, className: m, "aria-label": e?.ariaLabel, children: [
    e?.logoSrc ? /* @__PURE__ */ s.jsx(
      "img",
      {
        src: e.logoSrc,
        alt: e?.logoAlt || `${e?.name || "Site"} logo`,
        width: 40,
        height: 40,
        className: "rounded-full",
        loading: "eager"
      }
    ) : null,
    /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold tracking-tight", children: e?.name })
  ] }) : /* @__PURE__ */ s.jsxs(
    n,
    {
      to: d,
      className: m,
      "aria-label": e?.ariaLabel,
      children: [
        e?.logoSrc ? /* @__PURE__ */ s.jsx(
          "img",
          {
            src: e.logoSrc,
            alt: e?.logoAlt || `${e?.name || "Site"} logo`,
            width: 40,
            height: 40,
            className: "rounded-full",
            loading: "eager"
          }
        ) : null,
        /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold tracking-tight", children: e?.name })
      ]
    }
  );
  return /* @__PURE__ */ s.jsxs(
    "header",
    {
      className: `border-b border-zinc-800 bg-zinc-950/80 backdrop-blur ${o ? "sticky top-0 z-40" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "mx-auto flex items-center justify-between px-4 py-3", children: [
          p("inline-flex items-center gap-3 text-white"),
          /* @__PURE__ */ s.jsx("nav", { className: "hidden items-center gap-3 md:flex", children: u.map((m) => {
            if (m.type === "group")
              return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ s.jsx("span", { className: "px-2 text-xs font-semibold uppercase tracking-wide text-zinc-400", children: m.label }),
                m.items.map((C) => {
                  const z = `rounded-lg px-3 py-2 text-sm transition ${be(r, C.to) ? "bg-indigo-600 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`;
                  return /* @__PURE__ */ s.jsx(ve.Fragment, { children: h(C, z) }, C.to);
                })
              ] }, m.label);
            const k = `rounded-lg px-3 py-2 text-sm transition ${be(r, m.to) ? "bg-indigo-600 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`;
            return /* @__PURE__ */ s.jsx(ve.Fragment, { children: h(m, k) }, m.to);
          }) }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: () => c((m) => !m),
              className: "rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 md:hidden",
              "aria-label": "Toggle navigation",
              "aria-expanded": a ? "true" : "false",
              children: "Menu"
            }
          )
        ] }),
        a ? /* @__PURE__ */ s.jsx("nav", { className: "border-t border-zinc-800 px-4 py-3 md:hidden", children: /* @__PURE__ */ s.jsx("div", { className: "flex flex-col gap-2", children: u.map((m) => {
          if (m.type === "group")
            return /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "space-y-1 rounded-md border border-zinc-800 p-2",
                children: [
                  /* @__PURE__ */ s.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-zinc-500", children: m.label }),
                  m.items.map((C) => {
                    const z = `block rounded-md px-3 py-2 text-sm transition ${be(r, C.to) ? "bg-indigo-600 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`;
                    return /* @__PURE__ */ s.jsx("div", { onClick: () => c(!1), children: h(C, z) }, C.to);
                  })
                ]
              },
              m.label
            );
          const k = `block rounded-md px-3 py-2 text-sm transition ${be(r, m.to) ? "bg-indigo-600 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`;
          return /* @__PURE__ */ s.jsx("div", { onClick: () => c(!1), children: h(m, k) }, m.to);
        }) }) }) : null
      ]
    }
  );
}
function Ci(e) {
  return typeof e == "string" && e.toLowerCase() === "a";
}
function Me({ LinkComponent: e, to: t, className: r, children: n }) {
  return Ci(e) ? /* @__PURE__ */ s.jsx("a", { href: t, className: r, children: n }) : /* @__PURE__ */ s.jsx(e, { to: t, className: r, children: n });
}
function Ai({
  badgeText: e,
  titlePrefix: t,
  titleHighlight: r,
  titleSuffix: n,
  description: o,
  primaryCta: a,
  secondaryCta: c,
  quickLinks: l = [],
  LinkComponent: u = "a"
}) {
  return /* @__PURE__ */ s.jsxs("section", { className: "relative isolate overflow-hidden border-zinc-800 bg-zinc-950", children: [
    /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" }),
    /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.14),transparent_32%)]" }),
    /* @__PURE__ */ s.jsx("div", { className: "absolute -top-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" }),
    /* @__PURE__ */ s.jsx("div", { className: "absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 bg-zinc-950/55" }),
    /* @__PURE__ */ s.jsx("div", { className: "relative mx-auto max-w-6xl px-4 py-14 sm:py-20", children: /* @__PURE__ */ s.jsxs("div", { className: "max-w-3xl", children: [
      e ? /* @__PURE__ */ s.jsx("p", { className: "inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200", children: e }) : null,
      /* @__PURE__ */ s.jsxs("h1", { className: "mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl", children: [
        t,
        " ",
        /* @__PURE__ */ s.jsx("span", { className: "text-sky-400", children: r }),
        " ",
        n
      ] }),
      o ? /* @__PURE__ */ s.jsx("p", { className: "mt-5 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg", children: o }) : null,
      /* @__PURE__ */ s.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
        a?.to && a?.label ? /* @__PURE__ */ s.jsx(
          Me,
          {
            LinkComponent: u,
            to: a.to,
            className: "inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400",
            children: a.label
          }
        ) : null,
        c?.to && c?.label ? /* @__PURE__ */ s.jsx(
          Me,
          {
            LinkComponent: u,
            to: c.to,
            className: "inline-flex items-center gap-2 rounded-lg border border-zinc-500/40 bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700",
            children: c.label
          }
        ) : null
      ] }),
      l.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: l.map((d) => /* @__PURE__ */ s.jsx(
        Me,
        {
          LinkComponent: u,
          to: d.to,
          className: "inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-sky-400/50 hover:text-white",
          children: d.label
        },
        d.to
      )) }) : null
    ] }) })
  ] });
}
function Ei(e) {
  return typeof e == "string" && e.toLowerCase() === "a";
}
function Ni({
  brand: e,
  tagline: t,
  socialHeading: r = "Social",
  companyHeading: n = "Company",
  newsletterHeading: o = "Newsletter",
  socialLinks: a = [],
  companyLinks: c = [],
  newsletterPlaceholder: l = "Email address",
  newsletterButtonLabel: u = "Subscribe",
  onNewsletterSubmit: d,
  LinkComponent: h = "a",
  showCookiePreferences: p = !1,
  onCookiePreferencesClick: m,
  copyrightName: y
}) {
  const [k, C] = ne(""), L = Ei(h), z = (_) => L ? /* @__PURE__ */ s.jsx(
    "a",
    {
      href: _.to,
      className: "inline-flex items-center gap-2 hover:text-blue-600 hover:underline",
      children: _.label
    }
  ) : /* @__PURE__ */ s.jsx(
    h,
    {
      to: _.to,
      className: "inline-flex items-center gap-2 hover:text-blue-600 hover:underline",
      children: _.label
    }
  ), R = (_) => {
    _.preventDefault(), d && d(k), C("");
  };
  return /* @__PURE__ */ s.jsxs("footer", { className: "mt-16 border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col justify-between gap-12 px-4 lg:flex-row", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex flex-shrink-0 flex-col items-center text-center lg:items-start lg:text-left", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
          e?.logoSrc ? /* @__PURE__ */ s.jsx(
            "img",
            {
              src: e.logoSrc,
              alt: e?.logoAlt || `${e?.name || "Site"} logo`,
              width: 56,
              height: 56,
              className: "rounded-full",
              loading: "lazy"
            }
          ) : null,
          /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold text-zinc-800 dark:text-zinc-200", children: e?.name })
        ] }),
        t ? /* @__PURE__ */ s.jsx("p", { className: "mt-2 text-sm text-zinc-500 dark:text-zinc-400", children: t }) : null
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex w-full flex-wrap justify-between gap-8 lg:w-3/4", children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("h3", { className: "mb-3 font-semibold text-zinc-800 dark:text-zinc-200", children: r }),
          /* @__PURE__ */ s.jsx("ul", { className: "space-y-2 text-zinc-600 dark:text-zinc-400", children: a.map((_) => /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
            "a",
            {
              href: _.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": _.label,
              className: "flex items-center space-x-2 transition-colors hover:text-blue-600",
              children: /* @__PURE__ */ s.jsx("span", { children: _.label })
            }
          ) }, _.href)) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("h3", { className: "mb-3 font-semibold text-zinc-800 dark:text-zinc-200", children: n }),
          /* @__PURE__ */ s.jsxs("ul", { className: "space-y-2 text-zinc-600 dark:text-zinc-400", children: [
            c.map((_) => /* @__PURE__ */ s.jsx("li", { children: z(_) }, _.to)),
            p ? /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: m,
                className: "inline-flex items-center gap-2 hover:text-blue-600 hover:underline",
                children: "Cookie Preferences"
              }
            ) }) : null
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "w-full lg:w-auto", children: [
          /* @__PURE__ */ s.jsx("h3", { className: "mb-3 font-semibold text-zinc-800 dark:text-zinc-200", children: o }),
          /* @__PURE__ */ s.jsxs(
            "form",
            {
              className: "flex flex-col items-start gap-2 sm:flex-row sm:items-center",
              onSubmit: R,
              children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "site-footer-email", className: "sr-only", children: "Email address" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: "site-footer-email",
                    type: "email",
                    required: !0,
                    value: k,
                    onChange: (_) => C(_.target.value),
                    placeholder: l,
                    className: "flex-grow rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-zinc-200"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-white transition-colors hover:bg-blue-700",
                    children: u
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400", children: [
      "Copyright ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      y || e?.name,
      ". All rights reserved."
    ] })
  ] });
}
function Li(e, t = 20) {
  const r = /<hr\s*\/?>|<!--pagebreak-->|<!--\s*page\s*break\s*-->/i;
  let n = e.split(r).map((a) => a.trim()).filter(Boolean);
  const o = [];
  return n.forEach((a) => {
    a.replace(/<[^>]+>/g, "").split(/\s+/).length < t && o.length > 0 || o.push(a);
  }), o;
}
export {
  Ti as ArticleCarousel,
  Oi as FAQ,
  Ai as HeroSection,
  Pi as ReadModeToggle,
  Ni as SiteFooter,
  zi as SiteHeader,
  _i as SocialButtons,
  Tn as WhatsappProgress,
  Li as splitAndNormalizeSections
};
