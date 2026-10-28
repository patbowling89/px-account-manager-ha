// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = /* @__PURE__ */ s(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, ee = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function te(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function O(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var k = /\/+/g;
	function A(e, t) {
		return typeof e == "object" && e && e.key != null ? O("" + e.key) : t.toString(36);
	}
	function ne(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function j(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, j(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + A(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(k, "$&/") + "/"), j(o, r, i, "", function(e) {
			return e;
		})) : o != null && (te(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(k, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + A(a, u), c += j(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + A(a, u++), c += j(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return j(ne(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function M(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return j(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function N(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var re = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function ie(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, re);
		} catch (e) {
			re(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function ae(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else ie(ae.bind(null, e));
	}
	var oe = {
		map: M,
		forEach: function(e, t, n) {
			M(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return M(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return M(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!te(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = oe, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = ae, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !ee.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) ee.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = te, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: N
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = ie, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.1";
})), f = /* @__PURE__ */ s(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ s(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, D());
			else {
				var t = n(l);
				t !== null && k(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function ee() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function E() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && k(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? D() : S = !1;
			}
		}
	}
	var D;
	if (typeof y == "function") D = function() {
		y(E);
	};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(), O = te.port2;
		te.port1.onmessage = E, D = function() {
			O.postMessage(null);
		};
	} else D = function() {
		_(E, 0);
	};
	function k(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, k(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, D()))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), m = /* @__PURE__ */ s(((e, t) => {
	t.exports = p();
})), h = /* @__PURE__ */ s(((e) => {
	var t = f();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function u(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = u(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = u(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.1";
})), g = /* @__PURE__ */ s(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = /* @__PURE__ */ s(((e) => {
	var t = m(), n = f(), r = g();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function u(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function d(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = d(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function p(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && p(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function h(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = h(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function ee(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var E = Object.assign, D = Symbol.for("react.element"), te = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), M = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), ce = Symbol.for("react.legacy_hidden"), le = Symbol.for("react.memo_cache_sentinel"), ue = Symbol.for("react.view_transition"), de = Symbol.for("react.recoverable"), fe = Symbol.iterator;
	function pe(e) {
		return typeof e != "object" || !e ? null : (e = fe && e[fe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var me = Symbol.for("react.client.reference");
	function he(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === me ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case k: return "Fragment";
			case ne: return "Profiler";
			case A: return "StrictMode";
			case re: return "Suspense";
			case ie: return "SuspenseList";
			case se: return "Activity";
			case ue: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case O: return "Portal";
			case M: return e.displayName || "Context";
			case j: return (e._context.displayName || "Context") + ".Consumer";
			case N:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ae: return t = e.displayName || null, t === null ? he(e.type) || "Memo" : t;
			case oe:
				t = e._payload, e = e._init;
				try {
					return he(e(t));
				} catch {}
		}
		return null;
	}
	var ge = Array.isArray, P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, ve = [], ye = -1;
	function be(e) {
		return { current: e };
	}
	function xe(e) {
		0 > ye || (e.current = ve[ye], ve[ye] = null, ye--);
	}
	function Se(e, t) {
		ye++, ve[ye] = e.current, e.current = t;
	}
	var Ce = be(null), we = be(null), Te = be(null), Ee = be(null);
	function De(e, t) {
		switch (Se(Te, t), Se(we, e), Se(Ce, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? dp(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = dp(t), e = fp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		xe(Ce), Se(Ce, e);
	}
	function Oe() {
		xe(Ce), xe(we), xe(Te);
	}
	function ke(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, Se(Ee, e)), t = Ce.current;
		var n = fp(t, e.type);
		t !== n && (Se(we, e), Se(Ce, n));
	}
	function Ae(e) {
		we.current === e && (xe(Ce), xe(we)), Ee.current === e && (xe(Ee), sh._currentValue = _e);
	}
	var je, Me;
	function Ne(e) {
		if (je === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			je = t && t[1] || "", Me = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + je + e + Me;
	}
	var Pe = !1;
	function Fe(e, t) {
		if (!e || Pe) return "";
		Pe = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Pe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ne(n) : "";
	}
	function Ie(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ne(e.type);
			case 16: return Ne("Lazy");
			case 13: return e.child !== t && t !== null ? Ne("Suspense Fallback") : Ne("Suspense");
			case 19: return Ne("SuspenseList");
			case 0:
			case 15: return Fe(e.type, !1);
			case 11: return Fe(e.type.render, !1);
			case 1: return Fe(e.type, !0);
			case 31: return Ne("Activity");
			case 30: return Ne("ViewTransition");
			default: return "";
		}
	}
	function Le(e) {
		try {
			var t = "", n = null;
			do
				t += Ie(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Re = Object.prototype.hasOwnProperty, ze = t.unstable_scheduleCallback, Be = t.unstable_cancelCallback, Ve = t.unstable_shouldYield, He = t.unstable_requestPaint, Ue = t.unstable_now, We = t.unstable_getCurrentPriorityLevel, Ge = t.unstable_ImmediatePriority, Ke = t.unstable_UserBlockingPriority, qe = t.unstable_NormalPriority, Je = t.unstable_LowPriority, Ye = t.unstable_IdlePriority, Xe = t.log, Ze = t.unstable_setDisableYieldValue, Qe = null, $e = null;
	function et(e) {
		if (typeof Xe == "function" && Ze(e), $e && typeof $e.setStrictMode == "function") try {
			$e.setStrictMode(Qe, e);
		} catch {}
	}
	var tt = Math.clz32 ? Math.clz32 : it, nt = Math.log, rt = Math.LN2;
	function it(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (nt(e) / rt | 0) | 0;
	}
	var at = 256, ot = 262144, st = 4194304;
	function ct(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function lt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ct(n))) : i = ct(o) : i = ct(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ct(n))) : i = ct(o)) : i = ct(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ut(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function dt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - tt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function ft(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function pt() {
		var e = st;
		return st <<= 1, !(st & 62914560) && (st = 4194304), e;
	}
	function mt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ht(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function gt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - tt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && _t(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function _t(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - tt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function vt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - tt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function yt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : bt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function bt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function xt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function St() {
		var e = F.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function Ct(e, t) {
		var n = F.p;
		try {
			return F.p = e, t();
		} finally {
			F.p = n;
		}
	}
	var wt = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + wt, Et = "__reactProps$" + wt, Dt = "__reactContainer$" + wt, Ot = "__reactEvents$" + wt, I = "__reactListeners$" + wt, kt = "__reactHandles$" + wt, At = "__reactResources$" + wt, jt = "__reactMarker$" + wt, Mt = "__reactLoad$" + wt;
	function Nt(e) {
		delete e[Tt], delete e[Et], delete e[I], delete e[kt];
	}
	function Pt(e) {
		var t;
		if (t = e[Tt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Dt] || n[Tt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = pm(e); e !== null;) {
					if (n = e[Tt]) return n;
					e = pm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Ft(e) {
		if (e = e[Tt] || e[Dt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function It(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Lt(e) {
		var t = e[At];
		return t ||= e[At] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Rt(e) {
		e[jt] = !0;
	}
	function zt(e) {
		e[Mt] = void 0;
	}
	var Bt = /* @__PURE__ */ new Set(), Vt = {};
	function Ht(e, t) {
		Ut(e, t), Ut(e + "Capture", t);
	}
	function Ut(e, t) {
		for (Vt[e] = t, e = 0; e < t.length; e++) Bt.add(t[e]);
	}
	var Wt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gt = {}, Kt = {};
	function qt(e) {
		return Re.call(Kt, e) ? !0 : Re.call(Gt, e) ? !1 : Wt.test(e) ? Kt[e] = !0 : (Gt[e] = !0, !1);
	}
	var L = !1;
	function Jt() {
		var e = L;
		return L = !1, e;
	}
	function Yt(e, t, n) {
		if (qt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Xt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Zt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Qt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function $t(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function en(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function tn(e) {
		if (!e._valueTracker) {
			var t = $t(e) ? "checked" : "value";
			e._valueTracker = en(e, t, "" + e[t]);
		}
	}
	function nn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = $t(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var rn = /[\n"\\]/g;
	function an(e) {
		return e.replace(rn, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function on(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : cn(e, Qt(n)) : o === "number" && e.value == t ? cn(e, Qt(e.value)) : cn(e, Qt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Qt(s) : e.removeAttribute("name");
	}
	function sn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				tn(e);
				return;
			}
			n = n == null ? "" : "" + Qt(n), t = t == null ? n : "" + Qt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), tn(e);
	}
	function cn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function ln(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Qt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function un(e, t, n) {
		t != null && (t = "" + Qt(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + Qt(n);
	}
	function dn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ge(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Qt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), tn(e);
	}
	function R(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var fn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function pn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || fn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function mn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", L = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (pn(e, a, r), L = !0);
		} else for (var o in t) t.hasOwnProperty(o) && pn(e, o, t[o]);
	}
	function hn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var gn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), _n = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function vn(e) {
		return _n.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function yn() {}
	var bn = null;
	function xn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Sn = null, Cn = null;
	function wn(e) {
		var t = Ft(e);
		if (t && (e = t.stateNode)) {
			var n = e[Et] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (on(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + an("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Et] || null;
								if (!a) throw Error(i(90));
								on(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && nn(r);
					}
					break a;
				case "textarea":
					un(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && ln(e, !!n.multiple, t, !1);
			}
		}
	}
	var Tn = !1;
	function En(e, t, n) {
		if (Tn) return e(t, n);
		Tn = !0;
		try {
			return e(t);
		} finally {
			if (Tn = !1, (Sn !== null || Cn !== null) && (Rd(), Sn && (t = Sn, e = Cn, Cn = Sn = null, wn(t), e))) for (t = 0; t < e.length; t++) wn(e[t]);
		}
	}
	function Dn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Et] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var On = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, kn = !1;
	if (On) try {
		var An = {};
		Object.defineProperty(An, "passive", { get: function() {
			kn = !0;
		} }), window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
	} catch {
		kn = !1;
	}
	var jn = null, Mn = null, Nn = null;
	function Pn() {
		if (Nn) return Nn;
		var e, t = Mn, n = t.length, r, i = "value" in jn ? jn.value : jn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Nn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Fn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function In() {
		return !0;
	}
	function Ln() {
		return !1;
	}
	function Rn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? In : Ln, this.isPropagationStopped = Ln, this;
		}
		return E(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = In);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = In);
			},
			persist: function() {},
			isPersistent: In
		}), t;
	}
	var zn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Bn = Rn(zn), Vn = E({}, zn, {
		view: 0,
		detail: 0
	}), Hn = Rn(Vn), Un, Wn, Gn, Kn = E({}, Vn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: rr,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (Un = e.screenX - Gn.screenX, Wn = e.screenY - Gn.screenY) : Wn = Un = 0, Gn = e), Un);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Wn;
		}
	}), qn = Rn(Kn), Jn = Rn(E({}, Kn, { dataTransfer: 0 })), Yn = Rn(E({}, Vn, { relatedTarget: 0 })), Xn = Rn(E({}, zn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zn = Rn(E({}, zn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Qn = Rn(E({}, zn, { data: 0 })), $n = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, er = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, tr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function nr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = tr[e]) ? !!t[e] : !1;
	}
	function rr() {
		return nr;
	}
	var ir = Rn(E({}, Vn, {
		key: function(e) {
			if (e.key) {
				var t = $n[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Fn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? er[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: rr,
		charCode: function(e) {
			return e.type === "keypress" ? Fn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Fn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), ar = Rn(E({}, Kn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), or = Rn(E({}, zn, { submitter: 0 })), sr = Rn(E({}, Vn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: rr
	})), cr = Rn(E({}, zn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), lr = Rn(E({}, Kn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ur = Rn(E({}, zn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), dr = [
		9,
		13,
		27,
		32
	], fr = On && "CompositionEvent" in window, pr = null;
	On && "documentMode" in document && (pr = document.documentMode);
	var mr = On && "TextEvent" in window && !pr, hr = On && (!fr || pr && 8 < pr && 11 >= pr), gr = " ", _r = !1;
	function vr(e, t) {
		switch (e) {
			case "keyup": return dr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function yr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var br = !1;
	function xr(e, t) {
		switch (e) {
			case "compositionend": return yr(t);
			case "keypress": return t.which === 32 ? (_r = !0, gr) : null;
			case "textInput": return e = t.data, e === gr && _r ? null : e;
			default: return null;
		}
	}
	function Sr(e, t) {
		if (br) return e === "compositionend" || !fr && vr(e, t) ? (e = Pn(), Nn = Mn = jn = null, br = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return hr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Cr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function z(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Cr[e.type] : t === "textarea";
	}
	function wr(e, t, n, r) {
		Sn ? Cn ? Cn.push(r) : Cn = [r] : Sn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new Bn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Tr = null, Er = null;
	function Dr(e) {
		Vf(e, 0);
	}
	function Or(e) {
		if (nn(It(e))) return e;
	}
	function kr(e, t) {
		if (e === "change") return t;
	}
	var Ar = !1;
	if (On) {
		var jr;
		if (On) {
			var Mr = "oninput" in document;
			if (!Mr) {
				var Nr = document.createElement("div");
				Nr.setAttribute("oninput", "return;"), Mr = typeof Nr.oninput == "function";
			}
			jr = Mr;
		} else jr = !1;
		Ar = jr && (!document.documentMode || 9 < document.documentMode);
	}
	function Pr() {
		Tr && (Tr.detachEvent("onpropertychange", B), Er = Tr = null);
	}
	function B(e) {
		if (e.propertyName === "value" && Or(Er)) {
			var t = [];
			wr(t, Er, e, xn(e)), En(Dr, t);
		}
	}
	function Fr(e, t, n) {
		e === "focusin" ? (Pr(), Tr = t, Er = n, Tr.attachEvent("onpropertychange", B)) : e === "focusout" && Pr();
	}
	function Ir(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Or(Er);
	}
	function Lr(e, t) {
		if (e === "click") return Or(t);
	}
	function Rr(e, t) {
		if (e === "input" || e === "change") return Or(t);
	}
	function zr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Br = typeof Object.is == "function" ? Object.is : zr;
	function Vr(e, t) {
		if (Br(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Re.call(t, i) || !Br(e[i], t[i])) return !1;
		}
		return !0;
	}
	function V(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Hr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Ur(e, t) {
		var n = Hr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Hr(n);
		}
	}
	function Wr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Gr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = V(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = V(e.document);
		}
		return t;
	}
	function Kr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var qr = On && "documentMode" in document && 11 >= document.documentMode, Jr = null, Yr = null, Xr = null, Zr = !1;
	function Qr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Zr || Jr == null || Jr !== V(r) || (r = Jr, "selectionStart" in r && Kr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Xr && Vr(Xr, r) || (Xr = r, r = Jf(Yr, "onSelect"), 0 < r.length && (t = new Bn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Jr)));
	}
	function $r(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ei = {
		animationend: $r("Animation", "AnimationEnd"),
		animationiteration: $r("Animation", "AnimationIteration"),
		animationstart: $r("Animation", "AnimationStart"),
		transitionrun: $r("Transition", "TransitionRun"),
		transitionstart: $r("Transition", "TransitionStart"),
		transitioncancel: $r("Transition", "TransitionCancel"),
		transitionend: $r("Transition", "TransitionEnd")
	}, ti = {}, ni = {};
	On && (ni = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
	function ri(e) {
		if (ti[e]) return ti[e];
		if (!ei[e]) return e;
		var t = ei[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ni) return ti[e] = t[n];
		return e;
	}
	var ii = ri("animationend"), ai = ri("animationiteration"), H = ri("animationstart"), oi = ri("transitionrun"), si = ri("transitionstart"), ci = ri("transitioncancel"), li = ri("transitionend"), ui = /* @__PURE__ */ new Map(), U = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	U.push("scrollEnd");
	function di(e, t) {
		ui.set(e, t), Ht(t, [e]);
	}
	var fi = 0;
	function pi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = yd.identifierPrefix;
		var n = fi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function mi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Dd;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function hi(e, t) {
		return e = mi(e), t = mi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var gi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, _i = [], vi = 0, yi = 0;
	function bi() {
		for (var e = vi, t = yi = vi = 0; t < e;) {
			var n = _i[t];
			_i[t++] = null;
			var r = _i[t];
			_i[t++] = null;
			var i = _i[t];
			_i[t++] = null;
			var a = _i[t];
			if (_i[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && wi(n, i, a);
		}
	}
	function xi(e, t, n, r) {
		_i[vi++] = e, _i[vi++] = t, _i[vi++] = n, _i[vi++] = r, yi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Si(e, t, n, r) {
		return xi(e, t, n, r), Ti(e);
	}
	function Ci(e, t) {
		return xi(e, null, null, t), Ti(e);
	}
	function wi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - tt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ti(e) {
		if (50 < Od) throw Od = 0, kd = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ei = {};
	function Di(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Oi(e, t, n, r) {
		return new Di(e, t, n, r);
	}
	function ki(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function W(e, t) {
		var n = e.alternate;
		return n === null ? (n = Oi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function G(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Ai(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") ki(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, Ce.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case se: return e = Oi(31, n, t, a), e.elementType = se, e.lanes = o, e;
			case k: return ji(n.children, a, o, t);
			case A:
				s = 8, a |= 24;
				break;
			case ne: return e = Oi(12, n, t, a | 2), e.elementType = ne, e.lanes = o, e;
			case re: return e = Oi(13, n, t, a), e.elementType = re, e.lanes = o, e;
			case ie: return e = Oi(19, n, t, a), e.elementType = ie, e.lanes = o, e;
			case ce:
			case ue: return e = a | 32, e = Oi(30, n, t, e), e.elementType = ue, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case M:
						s = 10;
						break a;
					case j:
						s = 9;
						break a;
					case N:
						s = 11;
						break a;
					case ae:
						s = 14;
						break a;
					case oe:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Oi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function ji(e, t, n, r) {
		return e = Oi(7, e, r, t), e.lanes = n, e;
	}
	function Mi(e, t, n) {
		return e = Oi(6, e, null, t), e.lanes = n, e;
	}
	function Ni(e) {
		var t = Oi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Pi(e, t, n) {
		return t = Oi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Fi = /* @__PURE__ */ new WeakMap();
	function K(e, t) {
		if (typeof e == "object" && e) {
			var n = Fi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Le(t)
			}, Fi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Le(t)
		};
	}
	var Ii = [], Li = 0, Ri = null, zi = 0, Bi = [], Vi = 0, Hi = null, Ui = 1, Wi = "";
	function Gi(e, t) {
		Ii[Li++] = zi, Ii[Li++] = Ri, Ri = e, zi = t;
	}
	function Ki(e, t, n) {
		Bi[Vi++] = Ui, Bi[Vi++] = Wi, Bi[Vi++] = Hi, Hi = e;
		var r = Ui;
		e = Wi;
		var i = 32 - tt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - tt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Ui = 1 << 32 - tt(t) + i | n << i | r, Wi = a + e;
		} else Ui = 1 << a | n << i | r, Wi = e;
	}
	function qi(e) {
		e.return !== null && (Gi(e, 1), Ki(e, 1, 0));
	}
	function Ji(e) {
		for (; e === Ri;) Ri = Ii[--Li], Ii[Li] = null, zi = Ii[--Li], Ii[Li] = null;
		for (; e === Hi;) Hi = Bi[--Vi], Bi[Vi] = null, Wi = Bi[--Vi], Bi[Vi] = null, Ui = Bi[--Vi], Bi[Vi] = null;
	}
	function Yi(e, t) {
		Bi[Vi++] = Ui, Bi[Vi++] = Wi, Bi[Vi++] = Hi, Ui = t.id, Wi = t.overflow, Hi = e;
	}
	var Xi = null, Zi = null, q = !1, Qi = null, $i = !1, ea = Error(i(519));
	function ta(e) {
		throw sa(K(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ea;
	}
	function na(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Tt] = e, t[Et] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), sn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), dn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = yn), t = !0) : t = !1, t || ta(e, !0);
	}
	function ra(e) {
		for (Xi = e.return; Xi;) switch (Xi.tag) {
			case 5:
			case 31:
			case 13:
				$i = !1;
				return;
			case 27:
			case 3:
				$i = !0;
				return;
			default: Xi = Xi.return;
		}
	}
	function ia(e) {
		if (e !== Xi) return !1;
		if (!q) return ra(e), q = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || mp(e.type, e.memoizedProps)), n = !n), n && Zi && ta(e), ra(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			Zi = fm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			Zi = fm(e);
		} else t === 27 ? (t = Zi, Cp(e.type) ? (e = dm, dm = null, Zi = e) : Zi = t) : Zi = Xi ? um(e.stateNode.nextSibling) : null;
		return !0;
	}
	function aa() {
		Zi = Xi = null, q = !1;
	}
	function oa() {
		var e = Qi;
		return e !== null && (dd === null ? dd = e : dd.push.apply(dd, e), Qi = null), e;
	}
	function sa(e) {
		Qi === null ? Qi = [e] : Qi.push(e);
	}
	var ca = be(null), la = null, ua = null;
	function da(e, t, n) {
		Se(ca, t._currentValue), t._currentValue = n;
	}
	function fa(e) {
		e._currentValue = ca.current, xe(ca);
	}
	function pa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ma(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), pa(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), pa(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), pa(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ha(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Br(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === Ee.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && ma(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ga(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Br(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function _a(e) {
		la = e, ua = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function va(e) {
		return ba(la, e);
	}
	function ya(e, t) {
		return la === null && _a(e), ba(e, t);
	}
	function ba(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ua === null) {
			if (e === null) throw Error(i(308));
			ua = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ua = ua.next = t;
		return n;
	}
	var xa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Sa = t.unstable_scheduleCallback, Ca = t.unstable_NormalPriority, wa = {
		$$typeof: M,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Ta() {
		return {
			controller: new xa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Ea(e) {
		e.refCount--, e.refCount === 0 && Sa(Ca, function() {
			e.controller.abort();
		});
	}
	function Da(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Oa = null;
	function ka(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Aa = null, ja = 0, Ma = 0, Na = null;
	function Pa(e, t) {
		if (Aa === null) {
			var n = Aa = [];
			ja = 0, Ma = Pf(), Na = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ja++, t.then(Fa, Fa), t;
	}
	function Fa() {
		if (--ja === 0 && (Oa = null, Aa !== null)) {
			Na !== null && (Na.status = "fulfilled");
			var e = Aa;
			Aa = null, Ma = 0, Na = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ia(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var La = P.S;
	P.S = function(e, t) {
		if (md = Ue(), typeof t == "object" && t && typeof t.then == "function" && Pa(e, t), Oa !== null) for (var n = bf; n !== null;) Da(n, Oa), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) Da(r, n), r = r.next;
			if (Ma !== 0) {
				r = Oa, r === null && (r = Oa = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		La !== null && La(e, t);
	};
	var Ra = be(null);
	function za() {
		var e = Ra.current;
		return e === null ? Qu.pooledCache : e;
	}
	function Ba(e, t) {
		t === null ? Se(Ra, Ra.current) : Se(Ra, t.pool);
	}
	function Va() {
		var e = za();
		return e === null ? null : {
			parent: wa._currentValue,
			pool: e
		};
	}
	var Ha = Error(i(460)), Ua = Error(i(474)), Wa = Error(i(542)), Ga = { then: function() {} };
	function Ka(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function qa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(yn, yn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Za(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(yn, yn);
				else {
					if (e = Qu, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Za(e), e;
				}
				throw Ya = t, Ha;
		}
	}
	function Ja(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Ya = e, Ha) : e;
		}
	}
	var Ya = null;
	function Xa() {
		if (Ya === null) throw Error(i(459));
		var e = Ya;
		return Ya = null, e;
	}
	function Za(e) {
		if (e === Ha || e === Wa) throw Error(i(483));
	}
	var Qa = null, $a = 0;
	function eo(e) {
		var t = $a;
		return $a += 1, Qa === null && (Qa = []), qa(Qa, e, t);
	}
	function to(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function no(e, t) {
		throw t.$$typeof === D ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function ro(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = W(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Mi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === k ? (e = d(e, t, n.props.children, r, n.key), to(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === oe && Ja(i) === t.type) ? (t = a(t, n.props), to(t, n), t.return = e, t) : (t = Ai(n.type, n.key, n.props, null, e.mode, r), to(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Pi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = ji(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Mi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case te: return n = Ai(t.type, t.key, t.props, null, e.mode, n), to(n, t), n.return = e, n;
					case O: return t = Pi(t, e.mode, n), t.return = e, t;
					case oe: return t = Ja(t), f(e, t, n);
				}
				if (ge(t) || pe(t)) return t = ji(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, eo(t), n);
				if (t.$$typeof === M) return f(e, ya(e, t), n);
				no(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case te: return n.key === i ? l(e, t, n, r) : null;
					case O: return n.key === i ? u(e, t, n, r) : null;
					case oe: return n = Ja(n), p(e, t, n, r);
				}
				if (ge(n) || pe(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, eo(n), r);
				if (n.$$typeof === M) return p(e, t, ya(e, n), r);
				no(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case te: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case O: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case oe: return r = Ja(r), m(e, t, n, r, i);
				}
				if (ge(r) || pe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, eo(r), i);
				if (r.$$typeof === M) return m(e, t, n, ya(t, r), i);
				no(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), q && Gi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return q && Gi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), q && Gi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), q && Gi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return q && Gi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), q && Gi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === k && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case te:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === k) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), to(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === oe && Ja(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), to(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === k ? (c = ji(o.props.children, e.mode, c, o.key), to(c, o), c.return = e, e = c) : (c = Ai(o.type, o.key, o.props, null, e.mode, c), to(c, o), c.return = e, e = c);
						}
						return s(e);
					case O:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Pi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case oe: return o = Ja(o), _(e, r, o, c);
				}
				if (ge(o)) return h(e, r, o, c);
				if (pe(o)) {
					if (l = pe(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, eo(o), c);
				if (o.$$typeof === M) return _(e, r, ya(e, o), c);
				no(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Mi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				$a = 0;
				var i = _(e, t, n, r);
				return Qa = null, i;
			} catch (t) {
				if (t === Ha || t === Wa) throw t;
				var a = Oi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var io = ro(!0), ao = ro(!1), oo = !1;
	function so(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function co(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function lo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function uo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Zu & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ti(e), wi(e, null, n), t;
		}
		return xi(e, r, t, n), Ti(e);
	}
	function fo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, vt(e, n);
		}
	}
	function po(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var mo = !1;
	function ho() {
		if (mo) {
			var e = Na;
			if (e !== null) throw e;
		}
	}
	function go(e, t, n, r) {
		mo = !1;
		var i = e.updateQueue;
		oo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (X & f) === f : (r & f) === f) {
					f !== 0 && f === Ma && (mo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = E({}, d, f);
								break a;
							case 2: oo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), ad |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function _o(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function vo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) _o(n[e], t);
	}
	var yo = be(null), bo = be(0);
	function xo(e, t) {
		e = rd, Se(bo, e), Se(yo, t), rd = e | t.baseLanes;
	}
	function So() {
		Se(bo, rd), Se(yo, yo.current);
	}
	function Co() {
		rd = bo.current, xe(yo), xe(bo);
	}
	var wo = be(null), To = null;
	function Eo(e) {
		var t = e.alternate;
		Se(jo, jo.current & 1), Se(wo, e), To === null && (t === null || yo.current !== null || t.memoizedState !== null) && (To = e);
	}
	function Do(e) {
		Se(jo, jo.current), Se(wo, e), To === null && (To = e);
	}
	function Oo(e) {
		e.tag === 22 ? (Se(jo, jo.current), Se(wo, e), To === null && (To = e)) : ko();
	}
	function ko() {
		Se(jo, jo.current), Se(wo, wo.current);
	}
	function Ao(e) {
		xe(wo), To === e && (To = null), xe(jo);
	}
	var jo = be(0);
	function Mo(e, t) {
		Se(wo, wo.current), Se(jo, t);
	}
	function No(e) {
		xe(jo), xe(wo), To === e && (To = null);
	}
	function Po(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || sm(n) || cm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Fo = 0, J = null, Io = null, Lo = null, Ro = !1, zo = !1, Bo = !1, Vo = 0, Ho = 0, Uo = null, Wo = 0;
	function Go() {
		throw Error(i(321));
	}
	function Ko(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Br(e[n], t[n])) return !1;
		return !0;
	}
	function qo(e, t, n, r, i, a) {
		return Fo = a, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? uc : dc, Bo = !1, a = n(r, i), Bo = !1, zo && (a = Yo(t, n, r, i)), Jo(e), a;
	}
	function Jo(e) {
		P.H = lc;
		var t = Io !== null && Io.next !== null;
		if (Fo = 0, Lo = Io = J = null, Ro = !1, Ho = 0, Uo = null, t) throw Error(i(300));
		e === null || Oc || (e = e.dependencies, e !== null && ga(e) && (Oc = !0));
	}
	function Yo(e, t, n, r) {
		J = e;
		var a = 0;
		do {
			if (zo && (Uo = null), Ho = 0, zo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Lo = Io = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			P.H = fc, o = t(n, r);
		} while (zo);
		return o;
	}
	function Xo() {
		var e = P.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? rs(t) : t, e = e.useState()[0], (Io === null ? null : Io.memoizedState) !== e && (J.flags |= 1024), t;
	}
	function Zo() {
		var e = Vo !== 0;
		return Vo = 0, e;
	}
	function Qo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function $o(e) {
		if (Ro) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Ro = !1;
		}
		Fo = 0, Lo = Io = J = null, zo = !1, Ho = Vo = 0, Uo = null;
	}
	function es() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Lo === null ? J.memoizedState = Lo = e : Lo = Lo.next = e, Lo;
	}
	function ts() {
		if (Io === null) {
			var e = J.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Io.next;
		var t = Lo === null ? J.memoizedState : Lo.next;
		if (t !== null) Lo = t, Io = e;
		else {
			if (e === null) throw J.alternate === null ? Error(i(467)) : Error(i(310));
			Io = e, e = {
				memoizedState: Io.memoizedState,
				baseState: Io.baseState,
				baseQueue: Io.baseQueue,
				queue: Io.queue,
				next: null
			}, Lo === null ? J.memoizedState = Lo = e : Lo = Lo.next = e;
		}
		return Lo;
	}
	function ns() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function rs(e) {
		var t = Ho;
		return Ho += 1, Uo === null && (Uo = []), e = qa(Uo, e, t), t = J, (Lo === null ? t.memoizedState : Lo.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? uc : dc), e;
	}
	function is(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return rs(e);
			if (e.$$typeof === de) return;
			if (e.$$typeof === M) return va(e);
		}
		throw Error(i(438, String(e)));
	}
	function as(e) {
		var t = null, n = J.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = J.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = ns(), J.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = le;
		return t.index++, n;
	}
	function os(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ss(e) {
		return cs(ts(), Io, e);
	}
	function cs(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Fo & f) === f : (X & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Ma && (d = !0);
					else if ((Fo & p) === p) {
						u = u.next, p === Ma && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, J.lanes |= p, ad |= p;
					f = u.action, Bo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, J.lanes |= f, ad |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Br(o, e.memoizedState) && (Oc = !0, d && (n = Na, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function ls(e) {
		var t = ts(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Br(o, t.memoizedState) || (Oc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function us(e, t, n) {
		var r = J, a = ts(), o = q;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Br((Io || a).memoizedState, n);
		if (s && (a.memoizedState = n, Oc = !0), a = a.queue, Fs(ps.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Lo !== null && !!(Lo.memoizedState.tag & 1), As(e ? 9 : 8, { destroy: void 0 }, fs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, Qu === null) throw Error(i(349));
			o || Fo & 127 || ds(r, t, n);
		}
		return n;
	}
	function ds(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = J.updateQueue, t === null ? (t = ns(), J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function fs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, ms(t) && hs(e);
	}
	function ps(e, t, n) {
		return n(function() {
			ms(t) && hs(e);
		});
	}
	function ms(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Br(e, n);
		} catch {
			return !0;
		}
	}
	function hs(e) {
		var t = Ci(e, 2);
		t !== null && Nd(t, e, 2);
	}
	function gs(e) {
		var t = es();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Bo) {
				et(!0);
				try {
					n();
				} finally {
					et(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: os,
			lastRenderedState: e
		}, t;
	}
	function _s(e, t, n, r) {
		return e.baseState = n, cs(e, Io, typeof r == "function" ? r : os);
	}
	function vs(e, t, n, r, a) {
		if (oc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			P.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, ys(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function ys(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = P.T, o = {};
			o.types = a === null ? null : a.types, P.T = o;
			try {
				var s = n(i, r), c = P.S;
				c !== null && c(o, s), bs(e, t, s);
			} catch (n) {
				Ss(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), P.T = a;
			}
		} else try {
			a = n(i, r), bs(e, t, a);
		} catch (n) {
			Ss(e, t, n);
		}
	}
	function bs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			xs(e, t, n);
		}, function(n) {
			return Ss(e, t, n);
		}) : xs(e, t, n);
	}
	function xs(e, t, n) {
		t.status = "fulfilled", t.value = n, Cs(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ys(e, n)));
	}
	function Ss(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Cs(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Cs(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function ws(e, t) {
		return t;
	}
	function Ts(e, t) {
		if (q) {
			var n = Qu.formState;
			if (n !== null) {
				a: {
					var r = J;
					if (q) {
						if (Zi) {
							b: {
								for (var i = Zi, a = $i; i.nodeType !== 8;) if (!a || (i = um(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								Zi = um(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ta(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = es(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ws,
			lastRenderedState: t
		}, n.queue = r, n = rc.bind(null, J, r), r.dispatch = n, r = gs(!1), a = ac.bind(null, J, !1, r.queue), r = es(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = vs.bind(null, J, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Es(e) {
		return Ds(ts(), Io, e);
	}
	function Ds(e, t, n) {
		if (t = cs(e, t, ws)[0], e = ss(os)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = rs(t);
		} catch (e) {
			throw e === Ha ? Wa : e;
		}
		else r = t;
		t = ts();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (J.flags |= 2048, As(9, { destroy: void 0 }, Os.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Os(e, t) {
		e.action = t;
	}
	function ks(e) {
		var t = ts(), n = Io;
		if (n !== null) return Ds(t, n, e);
		ts(), t = t.memoizedState, n = ts();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function As(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = J.updateQueue, t === null && (t = ns(), J.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function js() {
		return ts().memoizedState;
	}
	function Ms(e, t, n, r) {
		var i = es();
		J.flags |= e, i.memoizedState = As(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Ns(e, t, n, r) {
		var i = ts();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		Io !== null && r !== null && Ko(r, Io.memoizedState.deps) ? i.memoizedState = As(t, a, n, r) : (J.flags |= e, i.memoizedState = As(1 | t, a, n, r));
	}
	function Ps(e, t) {
		Ms(8390656, 8, e, t);
	}
	function Fs(e, t) {
		Ns(2048, 8, e, t);
	}
	function Is(e) {
		J.flags |= 4;
		var t = J.updateQueue;
		if (t === null) t = ns(), J.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Ls(e) {
		var t = ts().memoizedState;
		return Is({
			ref: t,
			nextImpl: e
		}), function() {
			if (Zu & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Rs(e, t) {
		return Ns(4, 2, e, t);
	}
	function zs(e, t) {
		return Ns(4, 4, e, t);
	}
	function Bs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Vs(e, t, n) {
		n = n == null ? null : n.concat([e]), Ns(4, 4, Bs.bind(null, t, e), n);
	}
	function Hs() {}
	function Us(e, t) {
		var n = ts();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Ko(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ws(e, t) {
		var n = ts();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Ko(t, r[1])) return r[0];
		if (r = e(), Bo) {
			et(!0);
			try {
				e();
			} finally {
				et(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Gs(e, t, n) {
		return n === void 0 || Fo & 1073741824 && !(X & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = jd(), J.lanes |= e, ad |= e, n);
	}
	function Ks(e, t, n, r) {
		return Br(n, t) ? n : yo.current === null ? !(Fo & 106) || Fo & 1073741824 && !(X & 261930) ? (Oc = !0, e.memoizedState = n) : (e = jd(), J.lanes |= e, ad |= e, t) : (e = Gs(e, n, r), Br(e, t) || (Oc = !0), e);
	}
	function qs(e, t, n, r, i) {
		var a = F.p;
		F.p = a !== 0 && 8 > a ? a : 8;
		var o = P.T, s = {};
		s.types = o === null ? null : o.types, P.T = s, ac(e, !1, t, n);
		try {
			var c = i(), l = P.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? ic(e, t, Ia(c, r), Ad(e)) : ic(e, t, r, Ad(e));
		} catch (n) {
			ic(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Ad());
		} finally {
			F.p = a, o !== null && s.types !== null && (o.types = s.types), P.T = o;
		}
	}
	function Js() {}
	function Ys(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Xs(e).queue;
		qs(e, a, t, _e, n === null ? Js : function() {
			return Zs(e), n(r);
		});
	}
	function Xs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: _e,
			baseState: _e,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: _e
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Zs(e) {
		var t = Xs(e);
		t.next === null && (t = e.alternate.memoizedState), ic(e, t.next.queue, {}, Ad());
	}
	function Qs() {
		return va(sh);
	}
	function $s() {
		return ts().memoizedState;
	}
	function ec() {
		return ts().memoizedState;
	}
	function tc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Ad();
					e = lo(n);
					var r = uo(t, e, n);
					r !== null && (Nd(r, t, n), fo(r, t, n)), t = { cache: Ta() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function nc(e, t, n) {
		var r = Ad();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oc(e) ? sc(t, n) : (n = Si(e, t, n, r), n !== null && (Nd(n, e, r), cc(n, t, r)));
	}
	function rc(e, t, n) {
		ic(e, t, n, Ad());
	}
	function ic(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (oc(e)) sc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Br(s, o)) return xi(e, t, i, 0), Qu === null && bi(), !1;
			} catch {}
			if (n = Si(e, t, i, r), n !== null) return Nd(n, e, r), cc(n, t, r), !0;
		}
		return !1;
	}
	function ac(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oc(e)) {
			if (t) throw Error(i(479));
		} else t = Si(e, n, r, 2), t !== null && Nd(t, e, 2);
	}
	function oc(e) {
		var t = e.alternate;
		return e === J || t !== null && t === J;
	}
	function sc(e, t) {
		zo = Ro = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function cc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, vt(e, n);
		}
	}
	var lc = {
		readContext: va,
		use: is,
		useCallback: Go,
		useContext: Go,
		useEffect: Go,
		useImperativeHandle: Go,
		useLayoutEffect: Go,
		useInsertionEffect: Go,
		useMemo: Go,
		useReducer: Go,
		useRef: Go,
		useState: Go,
		useDebugValue: Go,
		useDeferredValue: Go,
		useTransition: Go,
		useSyncExternalStore: Go,
		useId: Go,
		useHostTransitionStatus: Go,
		useFormState: Go,
		useActionState: Go,
		useOptimistic: Go,
		useMemoCache: Go,
		useCacheRefresh: Go,
		useEffectEvent: Go
	}, uc = {
		readContext: va,
		use: is,
		useCallback: function(e, t) {
			return es().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: va,
		useEffect: Ps,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Ms(4194308, 4, Bs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Ms(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Ms(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = es();
			t = t === void 0 ? null : t;
			var r = e();
			if (Bo) {
				et(!0);
				try {
					e();
				} finally {
					et(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = es();
			if (n !== void 0) {
				var i = n(t);
				if (Bo) {
					et(!0);
					try {
						n(t);
					} finally {
						et(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = nc.bind(null, J, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = es();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = gs(e);
			var t = e.queue, n = rc.bind(null, J, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			return Gs(es(), e, t);
		},
		useTransition: function() {
			var e = gs(!1);
			return e = qs.bind(null, J, e.queue, !0, !1), es().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = J, a = es();
			if (q) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Qu === null) throw Error(i(349));
				X & 127 || ds(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ps(ps.bind(null, r, o, e), [e]), r.flags |= 2048, As(9, { destroy: void 0 }, fs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = es(), t = Qu.identifierPrefix;
			if (q) {
				var n = Wi, r = Ui;
				n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Vo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Wo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Qs,
		useFormState: Ts,
		useActionState: Ts,
		useOptimistic: function(e) {
			var t = es();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = ac.bind(null, J, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: as,
		useCacheRefresh: function() {
			return es().memoizedState = tc.bind(null, J);
		},
		useEffectEvent: function(e) {
			var t = es(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Zu & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, dc = {
		readContext: va,
		use: is,
		useCallback: Us,
		useContext: va,
		useEffect: Fs,
		useImperativeHandle: Vs,
		useInsertionEffect: Rs,
		useLayoutEffect: zs,
		useMemo: Ws,
		useReducer: ss,
		useRef: js,
		useState: function() {
			return ss(os);
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			return Ks(ts(), Io.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ss(os)[0], t = ts().memoizedState;
			return [typeof e == "boolean" ? e : rs(e), t];
		},
		useSyncExternalStore: us,
		useId: $s,
		useHostTransitionStatus: Qs,
		useFormState: Es,
		useActionState: Es,
		useOptimistic: function(e, t) {
			return _s(ts(), Io, e, t);
		},
		useMemoCache: as,
		useCacheRefresh: ec,
		useEffectEvent: Ls
	}, fc = {
		readContext: va,
		use: is,
		useCallback: Us,
		useContext: va,
		useEffect: Fs,
		useImperativeHandle: Vs,
		useInsertionEffect: Rs,
		useLayoutEffect: zs,
		useMemo: Ws,
		useReducer: ls,
		useRef: js,
		useState: function() {
			return ls(os);
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			var n = ts();
			return Io === null ? Gs(n, e, t) : Ks(n, Io.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ls(os)[0], t = ts().memoizedState;
			return [typeof e == "boolean" ? e : rs(e), t];
		},
		useSyncExternalStore: us,
		useId: $s,
		useHostTransitionStatus: Qs,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			var n = ts();
			return Io === null ? (n.baseState = e, [e, n.queue.dispatch]) : _s(n, Io, e, t);
		},
		useMemoCache: as,
		useCacheRefresh: ec,
		useEffectEvent: Ls
	};
	function pc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var mc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = Ad(), i = lo(r);
			i.payload = t, n != null && (i.callback = n), t = uo(e, i, r), t !== null && (Nd(t, e, r), fo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = Ad(), i = lo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = uo(e, i, r), t !== null && (Nd(t, e, r), fo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = Ad(), r = lo(n);
			r.tag = 2, t != null && (r.callback = t), t = uo(e, r, n), t !== null && (Nd(t, e, n), fo(t, e, n));
		}
	};
	function hc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(i, a) : !0;
	}
	function gc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mc.enqueueReplaceState(t, t.state, null);
	}
	function _c(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = E({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function vc(e) {
		gi(e);
	}
	function yc(e) {
		console.error(e);
	}
	function bc(e) {
		gi(e);
	}
	function xc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Sc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Cc(e, t, n) {
		return n = lo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			xc(e, t);
		}, n;
	}
	function wc(e) {
		return e = lo(e), e.tag = 3, e;
	}
	function Tc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Sc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Sc(t, n, r), typeof i != "function" && (_d === null ? _d = /* @__PURE__ */ new Set([this]) : _d.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Ec(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ha(t, n, a, !0), n = wo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return To === null ? Gd() : n.alternate === null && id === 0 && (id = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return mf(e, r, a), Gd(), !1;
		}
		if (q) return t = wo.current, t === null ? (r !== ea && (t = Error(i(423), { cause: r }), sa(K(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = K(r, n), a = Cc(e.stateNode, r, a), po(e, a), id !== 4 && (id = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ea && (e = Error(i(422), { cause: r }), sa(K(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = K(o, n), ud === null ? ud = [o] : ud.push(o), id !== 4 && (id = 2), t === null) return !0;
		r = K(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Cc(n.stateNode, r, e), po(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (_d === null || !_d.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = wc(a), Tc(a, e, n, r), po(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Dc = Error(i(461)), Oc = !1;
	function kc(e, t, n, r) {
		t.child = e === null ? ao(t, null, n, r) : io(t, e.child, n, r);
	}
	function Ac(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return _a(t), r = qo(e, t, n, o, a, i), s = Zo(), e !== null && !Oc ? (Qo(e, t, i), il(e, t, i)) : (q && s && qi(t), t.flags |= 1, kc(e, t, r, i), t.child);
	}
	function jc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ki(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Mc(e, t, a, r, i)) : (e = Ai(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !al(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Vr : n, n(o, r) && e.ref === t.ref) return il(e, t, i);
		}
		return t.flags |= 1, e = W(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Mc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Vr(a, r) && e.ref === t.ref) {
				if (Oc = !1, t.pendingProps = r = a, al(e, i)) e.flags & 131072 && (Oc = !0);
				else return t.lanes = e.lanes, il(e, t, i);
			}
		}
		return Bc(e, t, n, r, i);
	}
	function Nc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Fc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ba(t, a === null ? null : a.cachePool), a === null ? So() : xo(t, a), Oo(t);
			else return r = t.lanes = 536870912, Fc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ba(t, null), So(), ko()) : (Ba(t, a.cachePool), xo(t, a), ko(), t.memoizedState = null);
		return kc(e, t, i, n), t.child;
	}
	function Pc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Fc(e, t, n, r, i) {
		var a = za();
		return a = a === null ? null : {
			parent: wa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ba(t, null), So(), Oo(t), e !== null && ha(e, t, r, !0), t.childLanes = i, null;
	}
	function Ic(e, t) {
		return t = Yc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Lc(e, t, n) {
		return io(t, e.child, null, n), e = Ic(t, t.pendingProps), e.flags |= 2, Ao(t), t.memoizedState = null, e;
	}
	function Rc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (q) {
				if (r.mode === "hidden") return e = Ic(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Pc(null, e);
				if (Do(t), (e = Zi) ? (e = om(e, $i), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Hi === null ? null : {
						id: Ui,
						overflow: Wi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ni(e), n.return = t, t.child = n, Xi = t, Zi = null)) : e = null, e === null) throw ta(t);
				return t.lanes = 536870912, null;
			}
			return Ic(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Do(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Lc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Oc || ha(e, t, n, !1), a = (n & e.childLanes) !== 0, Oc || a) {
				if (yo.current === null) {
					if (r = Qu, r !== null && (s = yt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Ci(e, s), Nd(r, e, s), Dc;
					Gd();
				}
				t = Lc(e, t, n);
			} else e = o.treeContext, Zi = um(s.nextSibling), Xi = t, q = !0, Qi = null, $i = !1, e !== null && Yi(t, e), t = Ic(t, r), t.flags |= 134221824;
			return t;
		}
		return e = W(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function zc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Bc(e, t, n, r, i) {
		return _a(t), n = qo(e, t, n, r, void 0, i), r = Zo(), e !== null && !Oc ? (Qo(e, t, i), il(e, t, i)) : (q && r && qi(t), t.flags |= 1, kc(e, t, n, i), t.child);
	}
	function Vc(e, t, n, r, i, a) {
		return _a(t), t.updateQueue = null, n = Yo(t, r, n, i), Jo(e), r = Zo(), e !== null && !Oc ? (Qo(e, t, a), il(e, t, a)) : (q && r && qi(t), t.flags |= 1, kc(e, t, n, a), t.child);
	}
	function Hc(e, t, n, r, i) {
		if (_a(t), t.stateNode === null) {
			var a = Ei, o = n.contextType;
			typeof o == "object" && o && (a = va(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = mc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, so(t), o = n.contextType, a.context = typeof o == "object" && o ? va(o) : Ei, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (pc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && mc.enqueueReplaceState(a, a.state, null), go(t, r, a, i), ho(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = _c(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ei, typeof u == "object" && u && (o = va(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && gc(t, a, r, o), oo = !1;
			var f = t.memoizedState;
			a.state = f, go(t, r, a, i), ho(), l = t.memoizedState, s || f !== l || oo ? (typeof d == "function" && (pc(t, n, d, r), l = t.memoizedState), (c = oo || hc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, co(e, t), o = t.memoizedProps, u = _c(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ei, typeof l == "object" && l && (c = va(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && gc(t, a, r, c), oo = !1, f = t.memoizedState, a.state = f, go(t, r, a, i), ho();
			var p = t.memoizedState;
			o !== d || f !== p || oo || e !== null && e.dependencies !== null && ga(e.dependencies) ? (typeof s == "function" && (pc(t, n, s, r), p = t.memoizedState), (u = oo || hc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ga(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, zc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = io(t, e.child, null, i), t.child = io(t, null, n, i)) : kc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = il(e, t, i), e;
	}
	function Uc(e, t, n, r) {
		return aa(), t.flags |= 256, kc(e, t, n, r), t.child;
	}
	var Wc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Gc(e) {
		return {
			baseLanes: e,
			cachePool: Va()
		};
	}
	function Kc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= cd), e;
	}
	function qc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(jo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (q) {
				if (i ? Eo(t) : ko(), (e = Zi) ? (e = om(e, $i), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Hi === null ? null : {
						id: Ui,
						overflow: Wi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Ni(e), n.return = t, t.child = n, Xi = t, Zi = null)) : e = null, e === null) throw ta(t);
				return t.lanes = cm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (ko(), i = t.mode, a = Yc({
				mode: "hidden",
				children: a
			}, i), r = ji(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Gc(n), r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(null, r)) : (Eo(t), Jc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return Zc(e, t, a, o, r, c, s, n);
		}
		return i ? (ko(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = W(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = ji(i, a, n, null), i.flags |= 2) : i = W(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Pc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Gc(n) : (a = i.cachePool, a === null ? a = Va() : (s = wa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(e.child, r)) : (Eo(t), n = e.child, e = n.sibling, n = W(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Jc(e, t) {
		return t = Yc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Yc(e, t) {
		return e = Oi(22, e, null, t), e.lanes = 0, e;
	}
	function Xc(e, t, n) {
		return io(t, e.child, null, n), e = Jc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Eo(t), t.flags &= -257, Xc(e, t, c)) : t.memoizedState === null ? (ko(), o = a.fallback, s = t.mode, a = Yc({
			mode: "visible",
			children: a.children
		}, s), o = ji(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, io(t, e.child, null, c), a = t.child, a.memoizedState = Gc(c), a.childLanes = Kc(e, r, c), t.memoizedState = Wc, Pc(null, a)) : (ko(), t.child = e.child, t.flags |= 128, null);
		if (Eo(t), cm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, sa({
				value: a,
				source: null,
				stack: null
			})), Xc(e, t, c);
		}
		if (Oc || ha(e, t, c, !1), r = (c & e.childLanes) !== 0, Oc || r) {
			if (yo.current !== null) return Xc(e, t, c);
			if (r = Qu, r !== null && (a = yt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ci(e, a), Nd(r, e, a), Dc;
			return sm(o) || Gd(), Xc(e, t, c);
		}
		return sm(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Zi = um(o.nextSibling), Xi = t, q = !0, Qi = null, $i = !1, e !== null && Yi(t, e), t = Jc(t, a.children), t.flags |= 134221824, t);
	}
	function Qc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), pa(e.return, t, n);
	}
	function $c(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Po(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function el(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function tl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function nl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = jo.current;
		if (t.flags & 128) return Mo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Mo(t, o), i === "backwards" && e !== null ? (tl(e), kc(e, t, r, n), tl(e)) : kc(e, t, r, n), r = q ? zi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Qc(e, n, t);
			else if (e.tag === 19) Qc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = $c(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, tl(t)), el(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Po(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				el(t, !0, n, null, a, r);
				break;
			case "together":
				el(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = $c(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), el(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function rl(e, t, n) {
		var r = t.pendingProps;
		return da(t, t.type, r.value), kc(e, t, r.children, n), t.child;
	}
	function il(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), ad |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ha(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = W(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = W(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function al(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ga(e)));
	}
	function ol(e, t, n) {
		switch (t.tag) {
			case 3:
				De(t, t.stateNode.containerInfo), da(t, wa, e.memoizedState.cache), aa();
				break;
			case 27:
			case 5:
				ke(t);
				break;
			case 4:
				De(t, t.stateNode.containerInfo);
				break;
			case 10:
				da(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Do(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Eo(t), t.flags |= 128, null;
					r = ha(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? qc(e, t, n) : (Eo(t), e = il(e, t, n), e === null ? null : e.sibling);
				}
				Eo(t);
				break;
			case 19:
				if (t.flags & 128) return nl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ha(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return nl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Mo(t, jo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Nc(e, t, n, t.pendingProps);
			case 24: da(t, wa, e.memoizedState.cache);
		}
		return il(e, t, n);
	}
	function sl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Oc = !0;
			else {
				if (!al(e, n) && !(t.flags & 128)) return Oc = !1, ol(e, t, n);
				Oc = !!(e.flags & 131072);
			}
		} else Oc = !1, q && t.flags & 1048576 && Ki(t, zi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ja(t.elementType), t.type = e, typeof e == "function") ki(e) ? (r = _c(e, r), t.tag = 1, t = Hc(null, t, e, r, n)) : (t.tag = 0, t = Bc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === N) {
								t.tag = 11, t = Ac(null, t, e, r, n);
								break a;
							}
							if (a === ae) {
								t.tag = 14, t = jc(null, t, e, r, n);
								break a;
							}
							if (a === M) {
								t.tag = 10, t.type = e, t = rl(null, t, n);
								break a;
							}
						}
						throw t = he(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Bc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = _c(r, t.pendingProps), Hc(e, t, r, a, n);
			case 3:
				a: {
					if (De(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, co(e, t), go(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, da(t, wa, r), r !== o.cache && ma(t, [wa], n, !0), ho(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Uc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = K(Error(i(424)), t), sa(a), t = Uc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (Zi = um(e.firstChild), Xi = t, q = !0, Qi = null, $i = !0, n = ao(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (aa(), r === a) {
							t = il(e, t, n);
							break a;
						}
						kc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return zc(e, t), e === null ? (n = Pm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : q || (t.stateNode = pp(t.type, t.pendingProps, Te.current, t)) : t.memoizedState = Pm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return ke(t), e === null && q && (r = t.stateNode = gm(t.type, t.pendingProps, Te.current), Xi = t, $i = !0, a = Zi, Cp(t.type) ? (dm = a, Zi = um(r.firstChild)) : Zi = a), kc(e, t, t.pendingProps.children, n), zc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && q && ((a = r = Zi) && (r = im(r, t.type, t.pendingProps, $i), r === null ? a = !1 : (t.stateNode = r, Xi = t, Zi = um(r.firstChild), $i = !1, a = !0)), a || ta(t)), ke(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, mp(a, o) ? r = null : s !== null && mp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = qo(e, t, Xo, null, null, n), sh._currentValue = a), zc(e, t), kc(e, t, r, n), t.child;
			case 6: return e === null && q && ((e = n = Zi) && (n = am(n, t.pendingProps, $i), n === null ? e = !1 : (t.stateNode = n, Xi = t, Zi = null, e = !0)), e || ta(t)), null;
			case 13: return qc(e, t, n);
			case 4: return De(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = io(t, null, r, n) : kc(e, t, r, n), t.child;
			case 11: return Ac(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, zc(e, t), kc(e, t, r, n), t.child;
			case 8: return kc(e, t, t.pendingProps.children, n), t.child;
			case 12: return kc(e, t, t.pendingProps.children, n), t.child;
			case 10: return rl(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, _a(t), a = va(a), r = r(a), t.flags |= 1, kc(e, t, r, n), t.child;
			case 14: return jc(e, t, t.type, t.pendingProps, n);
			case 15: return Mc(e, t, t.type, t.pendingProps, n);
			case 19: return nl(e, t, n);
			case 31: return Rc(e, t, n);
			case 22: return Nc(e, t, n, t.pendingProps);
			case 24: return _a(t), r = va(wa), e === null ? (a = za(), a === null && (a = Qu, o = Ta(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, so(t), da(t, wa, a)) : ((e.lanes & n) !== 0 && (co(e, t), go(t, null, null, n), ho()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, da(t, wa, r), r !== a.cache && ma(t, [wa], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), da(t, wa, r))), kc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : q && qi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : zc(e, t), kc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function cl(e) {
		e.flags |= 4;
	}
	function ll(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Hd()) e.flags |= 8192;
				else throw Ya = Ga, Ua;
			}
		} else e.flags &= -16777217;
	}
	function ul(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Hd()) e.flags |= 8192;
			else throw Ya = Ga, Ua;
		}
	}
	function dl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : pt(), e.lanes |= t, ld |= t);
	}
	function fl(e, t) {
		if (!q) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function pl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function ml(e, t, n) {
		var r = t.pendingProps;
		switch (Ji(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return pl(t), null;
			case 1: return pl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), fa(wa), Oe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ia(t) ? cl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, oa())), pl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (cl(t), o === null ? (pl(t), ll(t, a, null, r, n)) : (pl(t), ul(t, o))) : o ? o === e.memoizedState ? (pl(t), t.flags &= -16777217) : (cl(t), pl(t), ul(t, o)) : (e = e.memoizedProps, e !== r && cl(t), pl(t), ll(t, a, e, r, n)), null;
			case 27:
				if (Ae(t), n = Te.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					e = Ce.current, ia(t) ? na(t, e) : (e = gm(a, r, n), t.stateNode = e, cl(t));
				}
				return pl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Ae(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = Ce.current, ia(t)) na(t, o);
					else {
						var s = up(Te.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[Tt] = t, o[Et] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (rp(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && cl(t);
					}
				}
				return pl(t), t.subtreeFlags &= -33554433, ll(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = Te.current, ia(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Xi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[Tt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || ta(t, !0);
					} else e = up(e).createTextNode(r), e[Tt] = t, t.stateNode = e;
				}
				return pl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ia(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[Tt] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), e = !1;
					} else n = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return pl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = ia(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[Tt] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), a = !1;
					} else a = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null);
				}
				return Ao(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dl(t, t.updateQueue), pl(t), null);
			case 4: return Oe(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, pl(t), null;
			case 10: return fa(t.type), pl(t), null;
			case 19:
				if (No(t), r = t.memoizedState, r === null) return pl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) fl(r, !1);
					else {
						if (id !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Po(e), o !== null) {
								for (t.flags |= 128, fl(r, !1), e = o.updateQueue, t.updateQueue = e, dl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) G(n, e), n = n.sibling;
								return Mo(t, jo.current & 1 | 2), q && Gi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ue() > hd && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Po(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, dl(t, e), fl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !q) return pl(t), null;
						} else 2 * Ue() - r.renderingStartTime > hd && n !== 536870912 && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ue(), e.sibling = null, o = jo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || q ? Mo(t, o) : (n = o, Se(wo, t), Se(jo, n), To === null && (To = t)), q && Gi(t, r.treeForkCount), e;
				}
				return pl(t), null;
			case 22:
			case 23: return Ao(t), Co(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (pl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pl(t), n = t.updateQueue, n !== null && dl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && xe(Ra), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), fa(wa), pl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, pl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function hl(e, t) {
		switch (Ji(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return fa(wa), Oe(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Ae(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Ao(t), t.alternate === null) throw Error(i(340));
					aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Ao(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return No(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Oe(), null;
			case 10: return fa(t.type), null;
			case 22:
			case 23: return Ao(t), Co(), e !== null && xe(Ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return fa(wa), null;
			case 25: return null;
			default: return null;
		}
	}
	function gl(e, t) {
		switch (Ji(t), t.tag) {
			case 3:
				fa(wa), Oe();
				break;
			case 26:
			case 27:
			case 5:
				Ae(t);
				break;
			case 4:
				Oe();
				break;
			case 31:
				t.memoizedState !== null && Ao(t);
				break;
			case 13:
				Ao(t);
				break;
			case 19:
				No(t);
				break;
			case 10:
				fa(t.type);
				break;
			case 22:
			case 23:
				Ao(t), Co(), e !== null && xe(Ra);
				break;
			case 24: fa(wa);
		}
	}
	function _l(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			pf(t, t.return, e);
		}
	}
	function vl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								pf(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			pf(t, t.return, e);
		}
	}
	function yl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				vo(t, n);
			} catch (t) {
				pf(e, e.return, t);
			}
		}
	}
	function bl(e, t, n) {
		n.props = _c(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			pf(e, t, n);
		}
	}
	function xl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = pi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Fp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Ip(e);
							p(e.child, !1, $p, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			pf(e, t, n);
		}
	}
	function Sl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				pf(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				pf(e, t, n);
			}
			else n.current = null;
		}
	}
	function Cl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) tm(e.stateNode, t[n]);
	}
	function wl(e) {
		for (var t = e.return; t !== null && (Dl(t) && tm(e.stateNode, t.stateNode), !El(t));) t = t.return;
	}
	function Tl(e) {
		for (var t = e.return; t !== null && (Dl(t) && nm(e.stateNode, t.stateNode), !El(t));) t = t.return;
	}
	function El(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Dl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Ol(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			pf(e, e.return, t);
		}
	}
	function kl(e, t, n) {
		try {
			var r = e.stateNode;
			ap(r, e.type, n, t), r[Et] = t;
		} catch (t) {
			pf(e, e.return, t);
		}
	}
	function Al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Cp(e.type) || e.tag === 4;
	}
	function jl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Al(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Cp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ml(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yn)), Cl(e, r), L = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, Cp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ml(e, t, n, r), e = e.sibling; e !== null;) Ml(e, t, n, r), e = e.sibling;
	}
	function Nl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Cl(e, r), L = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, Cp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Nl(e, t, n, r), e = e.sibling; e !== null;) Nl(e, t, n, r), e = e.sibling;
	}
	function Pl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			rp(t, r, n), t[Tt] = e, t[Et] = n;
		} catch (t) {
			pf(e, e.return, t);
		}
	}
	var Fl = !1, Il = null;
	function Ll(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Fl = !0);
	}
	var Rl = null;
	function zl() {
		var e = Rl;
		return Rl = null, e;
	}
	var Bl = 0;
	function Vl(e, t, n, r, i) {
		return Bl = 0, Hl(e.child, t, n, r, i);
	}
	function Hl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = kp(o);
					r.push(s), s.view && (a = !0);
				} else a || kp(o).view && (a = !0);
				Fl = !0, Ep(o, Bl === 0 ? t : t + "_" + Bl, n), Bl++;
			} else e.tag === 22 && e.memoizedState !== null || e.tag === 30 && i || Hl(e.child, t, n, r, i) && (a = !0);
			e = e.sibling;
		}
		return a;
	}
	function Ul(e, t) {
		for (; e !== null;) e.tag === 5 ? Dp(e.stateNode, e.memoizedProps) : e.tag === 22 && e.memoizedState !== null || e.tag === 30 && t || Ul(e.child, t), e = e.sibling;
	}
	function Wl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Wl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = hi(t.default, t.share), t !== "none" && (Vl(e, n, t, null, !1) || Ul(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Gl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = pi(r, n), a = hi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Wl(e) : Vl(e, i, a, null, !1) ? (Wl(e), n.paired || t || Md(e, r.onEnter)) : Ul(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Gl(e, t), e = e.sibling;
		else Wl(e);
	}
	function Kl(e) {
		if (Il !== null && Il.size !== 0) {
			var t = Il;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = hi(n.default, n.share);
								if (a !== "none" && (Vl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Md(e, n.onShare)) : Ul(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Kl(e);
				}
				e = e.sibling;
			}
		}
	}
	function ql(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = pi(t, e.stateNode), r = Il === null ? void 0 : Il.get(n), i = hi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Vl(e, n, i, null, !1) ? r === void 0 ? Md(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Il.delete(n), Md(e, t.onShare)) : Ul(e.child, !1)), Il !== null && Kl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ql(e), e = e.sibling;
		else Il !== null && Kl(e);
	}
	function Jl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = pi(t, e.stateNode);
				t = hi(t.default, t.update), e.flags &= -5, t !== "none" && Vl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Jl(e);
			e = e.sibling;
		}
	}
	function Yl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Ul(e.child, !1));
				}
				Yl(e);
			}
			e = e.sibling;
		}
	}
	function Xl(e) {
		if (e.tag === 30) e.stateNode.paired = null, Ul(e.child, !1), Yl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Xl(e), e = e.sibling;
		else Yl(e);
	}
	function Zl(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Ul(e.child, !1) : e.subtreeFlags & 33554432 && Zl(e), e = e.sibling;
	}
	function Ql(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Bl < a.length) {
					var l = a[Bl], u = kp(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Ep(c, Bl === 0 ? n : n + "_" + Bl, i), s && e.flags & 4 || (Rl === null && (Rl = []), Rl.push(c, Bl === 0 ? r : r + "_" + Bl, t.memoizedProps)), Bl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : Ql(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function $l(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = pi(n, r), a = hi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(Ap);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Bl = 0, i = Ql(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Md(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && $l(e, t);
			e = e.sibling;
		}
	}
	var eu = !1, tu = !1, nu = !1, ru = !1, iu = typeof WeakSet == "function" ? WeakSet : Set, au = null, ou = !1, su = !1, cu = !1, lu = !1;
	function uu(e, t, n) {
		if (e = e.containerInfo, cp = gh, e = Gr(e), Kr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (lp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, au = t, t = n ? 9270 : 1024; au !== null;) {
			if (e = au, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && ql(r[a]);
			if (e.alternate === null && e.flags & 2) n && Ll(e), du(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && ql(r), du(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Ll(e), du(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, au = r) : (n && Jl(e), du(n));
			}
		}
		Il = null;
	}
	function du(e) {
		for (; au !== null;) {
			var t = au, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = _c(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							pf(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) rm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								rm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = pi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = hi(a.default, a.update), a !== "none" && Vl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, au = r;
				break;
			}
			au = t.return;
		}
	}
	function fu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Mu(e, n), r & 4 && _l(5, n);
				break;
			case 1:
				if (Mu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						pf(n, n.return, e);
					}
					else {
						var i = _c(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							pf(n, n.return, e);
						}
					}
				}
				r & 64 && yl(n), r & 512 && xl(n, n.return);
				break;
			case 3:
				if (Mu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						vo(e, t);
					} catch (e) {
						pf(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Pl(n);
			case 26:
			case 5:
				Mu(e, n), t === null && r & 4 && Ol(n), r & 512 && xl(n, n.return);
				break;
			case 12:
				Mu(e, n);
				break;
			case 31:
				Mu(e, n), r & 4 && xu(e, n);
				break;
			case 13:
				Mu(e, n), r & 4 && Su(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), lm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || eu, !r) {
					var a = t !== null && t.memoizedState !== null || tu;
					t = eu, i = tu, eu = r, (tu = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Pu(e, n, r)) : Mu(e, n), eu = t, tu = i;
				}
				break;
			case 30:
				Mu(e, n), r & 512 && xl(n, n.return);
				break;
			case 7: r & 512 && xl(n, n.return);
			default: Mu(e, n);
		}
	}
	function pu(e, t) {
		for (e = e.child; e !== null;) mu(e, t), e = e.sibling;
	}
	function mu(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					pf(e, e.return, t);
				}
				hu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, L = !0;
				} catch (t) {
					pf(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? Tp(s, !0) : Tp(e.stateNode, !1);
				} catch (t) {
					pf(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && pu(e, t);
				break;
			default: pu(e, t);
		}
	}
	function hu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						mu(n, r);
						break a;
					case 22:
						n.memoizedState === null && hu(n, r);
						break a;
					default: hu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function gu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, gu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Nt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var _u = null, vu = !1;
	function yu(e, t, n) {
		for (n = n.child; n !== null;) bu(e, t, n), n = n.sibling;
	}
	function bu(e, t, n) {
		if ($e && typeof $e.onCommitFiberUnmount == "function") try {
			$e.onCommitFiberUnmount(Qe, n);
		} catch {}
		switch (n.tag) {
			case 26:
				tu || Sl(n, t), yu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !tu && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				tu || Sl(n, t), Tl(n);
				var r = _u, i = vu;
				Cp(n.type) && (_u = n.stateNode, vu = !1), yu(e, t, n), _m(n.stateNode, n.type, n.memoizedProps), _u = r, vu = i;
				break;
			case 5: tu || Sl(n, t), Tl(n);
			case 6:
				if (n.tag === 6 && Tl(n), r = _u, i = vu, _u = null, yu(e, t, n), _u = r, vu = i, _u !== null) {
					if (vu) try {
						(_u.nodeType === 9 ? _u.body : _u.nodeName === "HTML" ? _u.ownerDocument.body : _u).removeChild(n.stateNode), L = !0;
					} catch (e) {
						pf(n, t, e);
					}
					else try {
						_u.removeChild(n.stateNode), L = !0;
					} catch (e) {
						pf(n, t, e);
					}
				}
				break;
			case 18:
				_u !== null && (vu ? (e = _u, wp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : wp(_u, n.stateNode));
				break;
			case 4:
				r = _u, i = vu, _u = n.stateNode.containerInfo, vu = !0, yu(e, t, n), _u = r, vu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				vl(2, n, t), tu || vl(4, n, t), yu(e, t, n);
				break;
			case 1:
				tu || (Sl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && bl(n, t, r)), yu(e, t, n);
				break;
			case 21:
				yu(e, t, n);
				break;
			case 22:
				tu = (r = tu) || n.memoizedState !== null, yu(e, t, n), tu = r;
				break;
			case 30:
				Sl(n, t), yu(e, t, n);
				break;
			case 7:
				tu || Sl(n, t), yu(e, t, n);
				break;
			default: yu(e, t, n);
		}
	}
	function xu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				pf(t, t.return, e);
			}
		}
	}
	function Su(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			pf(t, t.return, e);
		}
	}
	function Cu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new iu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new iu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function wu(e, t) {
		var n = Cu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Tu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Cp(l.type)) {
							_u = l.stateNode, vu = !1;
							break a;
						}
						break;
					case 5:
						_u = l.stateNode, vu = !1;
						break a;
					case 3:
					case 4:
						_u = l.stateNode.containerInfo, vu = !0;
						break a;
				}
				l = l.return;
			}
			if (_u === null) throw Error(i(160));
			bu(s, c, o), _u = null, vu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Du(t, e, n), t = t.sibling;
	}
	var Eu = null;
	function Du(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Tu(t, e, n), Ou(e), a & 4 && (vl(3, e, e.return), _l(3, e), vl(5, e, e.return));
				break;
			case 1:
				Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), a & 64 && eu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Eu, Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (eu) e.stateNode = pp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[jt] || r[Tt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), rp(r, t, n), r[Tt] = e, Rt(r), t = r;
												break a;
											case "link":
												if (o = $("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), rp(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = $("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), rp(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[Tt] = e, Rt(r), t = r;
									}
									e.stateNode = t;
								}
							} else eu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Vm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && kl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || tu || t.parentNode.removeChild(t)) : a.count--, n === null ? eu || Km(o, e.type, e.stateNode) : Vm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), r !== null && a & 4 && kl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = nu, nu = !1, Tu(t, e, n), nu = o, Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						R(t, ""), L = !0;
					} catch (t) {
						pf(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, kl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ru = !0);
				break;
			case 6:
				if (Tu(t, e, n), Ou(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, L = !0;
					} catch (t) {
						pf(e, e.return, t);
					}
				}
				break;
			case 3:
				if (L = !1, Gm = null, o = Eu, Eu = xm(t.containerInfo), Tu(t, e, n), Eu = o, Ou(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					pf(e, e.return, t);
				}
				ru && (ru = !1, ku(e)), L = !1;
				break;
			case 4:
				a = nu, nu = eu, r = Jt(), o = Eu, Eu = xm(e.stateNode.containerInfo), Tu(t, e, n), Ou(e), Eu = o, L && su && (cu = !0), L = r, nu = a;
				break;
			case 12:
				Tu(t, e, n), Ou(e);
				break;
			case 31:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 13:
				Tu(t, e, n), Ou(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (pd = Ue()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = eu, l = tu, u = nu;
				eu = c || o, nu = u || o, tu = l || s, Tu(t, e, n), tu = l, nu = u, eu = c, Ou(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || eu || tu || (t = s || tu, n = eu, r = tu, eu = o || eu, tu = t, Nu(e, 2), eu = n, tu = r), !o && nu || pu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, wu(e, n))));
				break;
			case 19:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 30:
				a & 512 && (tu || r === null || Sl(r, r.return)), a = Jt(), o = su, s = (n & 335544064) === n, c = e.memoizedProps, su = s && hi(c.default, c.update) !== "none", Tu(t, e, n), Ou(e), s && r !== null && L && (e.flags |= 4), su = o, L = a;
				break;
			case 21: break;
			case 7: a & 512 && (tu || r === null || Sl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Tu(t, e, n), Ou(e);
		}
	}
	function Ou(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Al(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Dl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (El(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Nl(e, jl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (R(l, ""), n.flags &= -33), Nl(e, jl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ml(e, jl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				pf(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function ku(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			ku(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Au(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) ju(t, e), t = t.sibling;
		else $l(t, !1);
	}
	function ju(e, t) {
		var n = e.alternate;
		if (n === null) Gl(e, !1);
		else switch (e.tag) {
			case 3:
				if (lu = ou = !1, zl(), Au(t, e), !ou && !cu) {
					if (e = Rl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Dp(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), lu = !0;
				}
				Rl = null;
				break;
			case 5:
				Au(t, e);
				break;
			case 4:
				r = ou, ou = !1, Au(t, e), ou && (cu = !0), ou = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Au(t, e) : Gl(e, !1));
				break;
			case 30:
				r = ou, i = zl(), ou = !1, Au(t, e), ou && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = pi(a, o), o = pi(n.memoizedProps, o);
				var s = hi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Bl = 0, t = Ql(e, n, t, o, s, a, !0), Bl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Md(e, e.memoizedProps.onUpdate), Rl = i) : i !== null && (i.push.apply(i, Rl), Rl = i), ou = e.flags & 32 ? !0 : r;
				break;
			default: Au(t, e);
		}
	}
	function Mu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) fu(e, t.alternate, t), t = t.sibling;
	}
	function Nu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					vl(4, n, n.return), Nu(n, r);
					break;
				case 1:
					Sl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && bl(n, n.return, i), Nu(n, r);
					break;
				case 27: r & 2 && _m(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Sl(n, n.return), n.tag !== 5 && n.tag !== 27 || Tl(n), Nu(n, r);
					break;
				case 6:
					Tl(n);
					break;
				case 26:
					Sl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || tu || i.parentNode.removeChild(i), Nu(n, r);
					break;
				case 22:
					n.memoizedState === null && Nu(n, r);
					break;
				case 30:
					Sl(n, n.return), Nu(n, r);
					break;
				case 7: Sl(n, n.return);
				default: Nu(n, r);
			}
			e = e.sibling;
		}
	}
	function Pu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Pu(i, a, n), _l(4, a);
					break;
				case 1:
					if (Pu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						pf(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) _o(l[i], c);
						} catch (e) {
							pf(r, r.return, e);
						}
					}
					s && o & 64 && yl(a), xl(a, a.return);
					break;
				case 27: n & 2 && Pl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || wl(a), Pu(i, a, n), s && r === null && o & 4 && Ol(a), xl(a, a.return);
					break;
				case 6:
					wl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || eu || Km(xm(c.ownerDocument), a.type, c), Pu(i, a, n), s && r === null && o & 4 && Ol(a), xl(a, a.return);
					break;
				case 12:
					Pu(i, a, n);
					break;
				case 31:
					Pu(i, a, n), s && o & 4 && xu(i, a);
					break;
				case 13:
					Pu(i, a, n), s && o & 4 && Su(i, a);
					break;
				case 22:
					a.memoizedState === null && Pu(i, a, n), xl(a, a.return);
					break;
				case 30:
					Pu(i, a, n), xl(a, a.return);
					break;
				case 7: xl(a, a.return);
				default: Pu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Fu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ea(n));
	}
	function Iu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ea(e));
	}
	function Lu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Ru(e, t, n, r), t = t.sibling;
		else i && Zl(t);
	}
	function Ru(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && Xl(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Lu(e, t, n, r), a & 2048 && _l(9, t);
				break;
			case 1:
				Lu(e, t, n, r);
				break;
			case 3:
				Lu(e, t, n, r), i && lu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Ea(a)));
				break;
			case 12:
				if (a & 2048) {
					Lu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						pf(t, t.return, e);
					}
				} else Lu(e, t, n, r);
				break;
			case 31:
				Lu(e, t, n, r);
				break;
			case 13:
				Lu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Xl(t), o._visibility & 2 ? Lu(e, t, n, r) : (o._visibility |= 2, zu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Xl(s), o._visibility & 2 ? Lu(e, t, n, r) : Bu(e, t)), a & 2048 && Fu(s, t);
				break;
			case 24:
				Lu(e, t, n, r), a & 2048 && Iu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Ul(a.child, !0), Ul(t.child, !0))), Lu(e, t, n, r);
				break;
			default: Lu(e, t, n, r);
		}
	}
	function zu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					zu(a, o, s, c, i), _l(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, zu(a, o, s, c, i)) : u._visibility & 2 ? zu(a, o, s, c, i) : Bu(a, o), i && l & 2048 && Fu(o.alternate, o);
					break;
				case 24:
					zu(a, o, s, c, i), i && l & 2048 && Iu(o.alternate, o);
					break;
				default: zu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Bu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Bu(n, r), i & 2048 && Fu(r.alternate, r);
					break;
				case 24:
					Bu(n, r), i & 2048 && Iu(r.alternate, r);
					break;
				default: Bu(n, r);
			}
			t = t.sibling;
		}
	}
	var Vu = 8192;
	function Hu(e, t, n) {
		if (e.subtreeFlags & Vu) for (e = e.child; e !== null;) Uu(e, t, n), e = e.sibling;
	}
	function Uu(e, t, n) {
		switch (e.tag) {
			case 26:
				Hu(e, t, n), e.flags & Vu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Eu, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Hu(e, t, n), e.flags & Vu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Eu;
				Eu = xm(e.stateNode.containerInfo), Hu(e, t, n), Eu = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Vu, Vu = 16777216, Hu(e, t, n), Vu = r) : Hu(e, t, n));
				break;
			case 30:
				if ((e.flags & Vu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Il === null && (Il = /* @__PURE__ */ new Map()), Il.set(r, i);
				}
				Hu(e, t, n);
				break;
			default: Hu(e, t, n);
		}
	}
	function Wu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Gu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ku(e), e = e.sibling;
	}
	function Ku(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Gu(e), e.flags & 2048 && vl(9, e, e.return);
				break;
			case 3:
				Gu(e);
				break;
			case 12:
				Gu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : Gu(e);
				break;
			default: Gu(e);
		}
	}
	function qu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					vl(8, t, t.return), qu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, qu(t));
					break;
				default: qu(t);
			}
			e = e.sibling;
		}
	}
	function Ju(e, t) {
		for (; au !== null;) {
			var n = au;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					vl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Ea(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, au = r;
			else a: for (n = e; au !== null;) {
				r = au;
				var i = r.sibling, a = r.return;
				if (gu(r), r === n) {
					au = null;
					break a;
				}
				if (i !== null) {
					i.return = a, au = i;
					break a;
				}
				au = a;
			}
		}
	}
	var Yu = {
		getCacheForType: function(e) {
			var t = va(wa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return va(wa).controller.signal;
		}
	}, Xu = typeof WeakMap == "function" ? WeakMap : Map, Zu = 0, Qu = null, Y = null, X = 0, $u = 0, ed = null, td = !1, nd = !1, Z = !1, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = null, dd = null, fd = !1, pd = 0, md = 0, hd = Infinity, gd = null, _d = null, vd = 0, yd = null, bd = null, xd = 0, Sd = 0, Cd = null, wd = null, Td = null, Ed = null, Dd = null, Od = 0, kd = null;
	function Ad() {
		return Zu & 2 && X !== 0 ? X & -X : P.T === null ? St() : Pf();
	}
	function jd() {
		if (cd === 0) {
			if (!(X & 536870912) || q) {
				var e = ot;
				ot <<= 1, !(ot & 3932160) && (ot = 262144), cd = e;
			} else cd = 536870912;
		}
		return e = wo.current, e !== null && (e.flags |= 32), cd;
	}
	function Md(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Fp(pi(e.memoizedProps, n))), Ed === null && (Ed = []), Ed.push(t.bind(null, r));
		}
	}
	function Nd(e, t, n) {
		(e === Qu && ($u === 2 || $u === 9) || e.cancelPendingCommit !== null) && (Bd(e, 0), Ld(e, X, cd, !1)), ht(e, n), Zu & 2 && e === Qu || (e === Qu && (!(Zu & 2) && (od |= n), id === 4 && Ld(e, X, cd, !1)), Ef(e));
	}
	function Pd(e, t, n) {
		if (Zu & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ut(e, t), a = r ? Jd(e, t) : Kd(e, t, !0), o = r;
		do {
			if (a === 0) {
				nd && !r && Ld(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Id(n)) a = Kd(e, t, !1), o = !1;
			else {
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = ud;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Bd(c, s).flags |= 256), s = Kd(c, s, !1), s !== 2 && s !== 6) {
								if (Z && !l) {
									c.errorRecoveryDisabledLanes |= o, od |= o, a = 4;
									break a;
								}
								o = dd, dd = a, o !== null && (dd === null ? dd = o : dd.push.apply(dd, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					Bd(e, 0), Ld(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Ld(r, t, cd, !td);
							break a;
						case 2:
							dd = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = pd + 300 - Ue(), 10 < a)) {
						if (Ld(r, t, cd, !td), lt(r, 0, !0) !== 0) break a;
						xd = t, r.timeoutHandle = _p(Fd.bind(null, r, n, dd, gd, fd, t, cd, od, ld, td, o, "Throttled", -0, 0), a);
						break a;
					}
					Fd(r, n, dd, gd, fd, t, cd, od, ld, td, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		Ef(e);
	}
	function Fd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: yn
		}, Il = null, Uu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? pd - Ue() : (a & 4194048) === a ? md - Ue() : 0, m = eh(d, m), m !== null) ? (xd = a, e.cancelPendingCommit = m(tf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Ld(e, a, o, !l)) : tf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Id(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Br(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Ld(e, t, n, r) {
		t = dt(e, t), t &= ~sd, t &= ~od, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - tt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && _t(e, n, t);
	}
	function Rd() {
		return Zu & 6 ? !0 : (Df(0, !1), !1);
	}
	function zd() {
		if (Y !== null) {
			if ($u === 0) var e = Y.return;
			else e = Y, ua = la = null, $o(e), Qa = null, $a = 0, e = Y;
			for (; e !== null;) gl(e.alternate, e), e = e.return;
			Y = null;
		}
	}
	function Bd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, vp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), xd = 0, zd(), Qu = e, Y = n = W(e.current, null), X = t, $u = 0, ed = null, td = !1, nd = ut(e, t), Z = !1, ld = cd = sd = od = ad = id = 0, dd = ud = null, fd = !1, rd = dt(e, t), bi(), n;
	}
	function Vd(e, t) {
		J = null, P.H = lc, t === Ha || t === Wa ? (t = Xa(), $u = 3) : t === Ua ? (t = Xa(), $u = 4) : $u = t === Dc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, Y === null && (id = 1, xc(e, K(t, e.current)));
	}
	function Hd() {
		var e = wo.current;
		return e === null ? !0 : (X & 4194048) === X ? To === null : (X & 62914560) === X || X & 536870912 ? e === To : !1;
	}
	function Ud() {
		var e = P.H;
		return P.H = lc, e === null ? lc : e;
	}
	function Wd() {
		var e = P.A;
		return P.A = Yu, e;
	}
	function Gd() {
		id = 4, td || (X & 4194048) !== X && wo.current !== null || (nd = !0), !(ad & 134217727) && !(od & 134217727) || Qu === null || Ld(Qu, X, cd, !1);
	}
	function Kd(e, t, n) {
		var r = Zu;
		Zu |= 2;
		var i = Ud(), a = Wd();
		(Qu !== e || X !== t) && (gd = null, Bd(e, t)), t = !1;
		var o = id;
		a: do
			try {
				if ($u !== 0 && Y !== null) {
					var s = Y, c = ed;
					switch ($u) {
						case 8:
							zd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							wo.current === null && (t = !0);
							var l = $u;
							if ($u = 0, ed = null, Qd(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = $u, $u = 0, ed = null, Qd(e, s, c, l);
					}
				}
				qd(), o = id;
				break;
			} catch (t) {
				Vd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ua = la = null, Zu = r, P.H = i, P.A = a, Y === null && (Qu = null, X = 0, bi()), o;
	}
	function qd() {
		for (; Y !== null;) Xd(Y);
	}
	function Jd(e, t) {
		var n = Zu;
		Zu |= 2;
		var r = Ud(), a = Wd();
		Qu !== e || X !== t ? (gd = null, hd = Ue() + 500, Bd(e, t)) : nd = ut(e, t);
		a: do
			try {
				if ($u !== 0 && Y !== null) {
					t = Y;
					var o = ed;
					b: switch ($u) {
						case 1:
							$u = 0, ed = null, Qd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ka(o)) {
								$u = 0, ed = null, Zd(t);
								break;
							}
							t = function() {
								$u !== 2 && $u !== 9 || Qu !== e || ($u = 7), Ef(e);
							}, o.then(t, t);
							break a;
						case 3:
							$u = 7;
							break a;
						case 4:
							$u = 5;
							break a;
						case 7:
							Ka(o) ? ($u = 0, ed = null, Zd(t)) : ($u = 0, ed = null, Qd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Y.tag) {
								case 26: s = Y.memoizedState;
								case 5:
								case 27:
									var c = Y;
									if (s ? Ym(s) : c.stateNode.complete) {
										$u = 0, ed = null;
										var l = c.sibling;
										if (l !== null) Y = l;
										else {
											var u = c.return;
											u === null ? Y = null : (Y = u, $d(u));
										}
										break b;
									}
							}
							$u = 0, ed = null, Qd(e, t, o, 5);
							break;
						case 6:
							$u = 0, ed = null, Qd(e, t, o, 6);
							break;
						case 8:
							zd(), id = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Yd();
				break;
			} catch (t) {
				Vd(e, t);
			}
		while (1);
		return ua = la = null, P.H = r, P.A = a, Zu = n, Y === null ? (Qu = null, X = 0, bi(), id) : 0;
	}
	function Yd() {
		for (; Y !== null && !Ve();) Xd(Y);
	}
	function Xd(e) {
		var t = sl(e.alternate, e, rd);
		e.memoizedProps = e.pendingProps, t === null ? $d(e) : Y = t;
	}
	function Zd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Vc(n, t, t.pendingProps, t.type, void 0, X);
				break;
			case 11:
				t = Vc(n, t, t.pendingProps, t.type.render, t.ref, X);
				break;
			case 5:
				$o(t);
				var r = t;
				r === Xi && (q ? (ra(r), r.tag === 5 && r.stateNode != null && (Zi = r.stateNode)) : (ra(r), q = !0));
			default: gl(n, t), t = Y = G(t, rd), t = sl(n, t, rd);
		}
		e.memoizedProps = e.pendingProps, t === null ? $d(e) : Y = t;
	}
	function Qd(e, t, n, r) {
		ua = la = null, $o(t), Qa = null, $a = 0;
		var i = t.return;
		try {
			if (Ec(e, i, t, n, X)) {
				id = 1, xc(e, K(n, e.current)), Y = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Y = i, t;
			id = 1, xc(e, K(n, e.current)), Y = null;
			return;
		}
		t.flags & 32768 ? (q || r === 1 ? e = !0 : nd || X & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = wo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), ef(t, e)) : $d(t);
	}
	function $d(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				ef(t, td);
				return;
			}
			e = t.return;
			var n = ml(t.alternate, t, rd);
			if (n !== null) {
				Y = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Y = t;
				return;
			}
			Y = t = e;
		} while (t !== null);
		id === 0 && (id = 5);
	}
	function ef(e, t) {
		do {
			var n = hl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Y = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Y = e;
				return;
			}
			Y = e = n;
		} while (e !== null);
		id = 6, Y = null;
	}
	function tf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			uf();
		while (vd !== 0);
		if (Zu & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Qu && (Y = Qu = null, X = 0), bd = t, yd = e, xd = n, Cd = a, wd = r, nf(e, t, n, s, c, l, f);
		}
	}
	function nf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Sd = s, s |= yi, gt(e, n, s, r, i, a), Ed = null, (n & 335544064) === n ? (Dd = ka(e), r = 10262) : (Dd = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(qe, function() {
			return df(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Fl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = P.T, P.T = null, i = F.p, F.p = 2, a = Zu, Zu |= 4;
			try {
				uu(e, t, n);
			} finally {
				Zu = a, F.p = i, P.T = r;
			}
		}
		vd = 1, Fl ? Td = Np(o, e.containerInfo, Dd, of, sf, af, cf, df, rf, null, null) : (of(), sf(), cf());
	}
	function rf(e) {
		if (vd !== 0) {
			var t = yd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function af() {
		vd === 3 && (vd = 0, ju(bd, yd), vd = 4);
	}
	function of() {
		if (vd === 1) {
			vd = 0;
			var e = yd, t = bd, n = xd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = P.T, P.T = null;
				var i = F.p;
				F.p = 2;
				var a = Zu;
				Zu |= 4;
				try {
					su = cu = !1, Du(t, e, n), n = lp;
					var o = Gr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Wr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Kr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Ur(s, h), v = Ur(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!cp, lp = cp = null;
				} finally {
					Zu = a, F.p = i, P.T = r;
				}
			}
			e.current = t, vd = 2;
		}
	}
	function sf() {
		if (vd === 2) {
			vd = 0;
			var e = yd, t = bd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = P.T, P.T = null;
				var r = F.p;
				F.p = 2;
				var i = Zu;
				Zu |= 4;
				try {
					fu(e, t.alternate, t);
				} finally {
					Zu = i, F.p = r, P.T = n;
				}
			}
			vd = 3;
		}
	}
	function cf() {
		if (vd === 4 || vd === 3) {
			vd = 0;
			var e = Td;
			Td = null, He();
			var t = yd, n = bd, r = xd, i = wd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? vd = 5 : (vd = 0, bd = yd = null, lf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (_d = null), xt(r), n = n.stateNode, $e && typeof $e.onCommitFiberRoot == "function") try {
				$e.onCommitFiberRoot(Qe, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = P.T, a = F.p, F.p = 2, P.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					P.T = n, F.p = a;
				}
			}
			if (i = Ed, o = Dd, Dd = null, i !== null && (Ed = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			xd & 3 && uf(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === kd ? Od++ : (Od = 0, kd = t) : (Od = 0, kd = null), Df(0, !1);
		}
	}
	function lf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ea(t)));
	}
	function uf() {
		return Td !== null && (Td.skipTransition(), Td = null), of(), sf(), cf(), df();
	}
	function df() {
		if (vd !== 5) return !1;
		var e = yd, t = Sd;
		Sd = 0;
		var n = xt(xd), r = P.T, a = F.p;
		try {
			F.p = 32 > n ? 32 : n, P.T = null, n = Cd, Cd = null;
			var o = yd, s = xd;
			if (vd = 0, bd = yd = null, xd = 0, Zu & 6) throw Error(i(331));
			var c = Zu;
			if (Zu |= 4, Ku(o.current), Ru(o, o.current, s, n), Zu = c, Df(0, !1), $e && typeof $e.onPostCommitFiberRoot == "function") try {
				$e.onPostCommitFiberRoot(Qe, o);
			} catch {}
			return !0;
		} finally {
			F.p = a, P.T = r, lf(e, t);
		}
	}
	function ff(e, t, n) {
		t = K(n, t), t = Cc(e.stateNode, t, 2), e = uo(e, t, 2), e !== null && (ht(e, 2), Ef(e));
	}
	function pf(e, t, n) {
		if (e.tag === 3) ff(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				ff(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_d === null || !_d.has(r))) {
					e = K(n, e), n = wc(2), r = uo(t, n, 2), r !== null && (Tc(n, r, t, e), ht(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Xu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Z = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Qu === e && (X & n) === n && (id === 4 || id === 3 && (X & 62914560) === X && 300 > Ue() - pd ? Zu & 2 ? sd |= n : Bd(e, 0) : sd |= n, ld === X && (ld = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = pt()), e = Ci(e, t), e !== null && (ht(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return ze(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - tt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = X, a = lt(r, r === Qu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ut(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && gp() && (e = Tf);
		for (var t = Ue(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		vd !== 0 && vd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - tt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = ft(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Qu, n = X, n = lt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && ($u === 2 || $u === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Be(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ut(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Be(r), xt(n)) {
				case 2:
				case 8:
					n = Ke;
					break;
				case 32:
					n = qe;
					break;
				case 268435456:
					n = Ye;
					break;
				default: n = qe;
			}
			return r = jf.bind(null, e), n = ze(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Be(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (vd !== 0 && vd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (uf() && e.callbackNode !== n) return null;
		var r = X;
		return r = lt(e, e === Qu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Pd(e, r, t), Af(e, Ue()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (uf()) return null;
		Pd(e, t, !0);
	}
	function Nf() {
		xp(function() {
			Zu & 6 ? ze(Ge, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = Ma;
			e === 0 && (e = at, at <<= 1, !(at & 261888) && (at = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Et] || null).action), o = r.submitter;
			o && (t = (t = o[Et] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Bn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								Ys(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Ys(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < U.length; Lf++) {
		var Rf = U[Lf];
		di(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	di(ii, "onAnimationEnd"), di(ai, "onAnimationIteration"), di(H, "onAnimationStart"), di("dblclick", "onDoubleClick"), di("focusin", "onFocus"), di("focusout", "onBlur"), di(oi, "onTransitionRun"), di(si, "onTransitionStart"), di(ci, "onTransitionCancel"), di(li, "onTransitionEnd"), Ut("onMouseEnter", ["mouseout", "mouseover"]), Ut("onMouseLeave", ["mouseout", "mouseover"]), Ut("onPointerEnter", ["pointerout", "pointerover"]), Ut("onPointerLeave", ["pointerout", "pointerover"]), Ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ht("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						gi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						gi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[Ot];
		n === void 0 && (n = t[Ot] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, Bt.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !kn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Pt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		En(function() {
			var r = a, i = xn(n), s = [];
			a: {
				var c = ui.get(e);
				if (c !== void 0) {
					var l = Bn, u = e;
					switch (e) {
						case "keypress": if (Fn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = ir;
							break;
						case "focusin":
							u = "focus", l = Yn;
							break;
						case "focusout":
							u = "blur", l = Yn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Yn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = qn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Jn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = sr;
							break;
						case ii:
						case ai:
						case H:
							l = Xn;
							break;
						case li:
							l = cr;
							break;
						case "scroll":
						case "scrollend":
							l = Hn;
							break;
						case "wheel":
							l = lr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Zn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = ar;
							break;
						case "submit":
							l = or;
							break;
						case "toggle":
						case "beforetoggle": l = ur;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Dn(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== bn && (u = n.relatedTarget || n.fromElement) && (Pt(u) || u[Dt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Pt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = qn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = ar, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : It(c), h = l == null ? u : It(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Pt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? ee(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? It(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = kr;
					else if (z(c)) {
						if (Ar) _ = Rr;
						else {
							_ = Ir;
							var v = Fr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && hn(r.elementType) && (_ = kr) : _ = Lr;
					if (_ &&= _(e, r)) {
						wr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? It(r) : window, e) {
					case "focusin":
						(z(v) || v.contentEditable === "true") && (Jr = v, Yr = r, Xr = null);
						break;
					case "focusout":
						Xr = Yr = Jr = null;
						break;
					case "mousedown":
						Zr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Zr = !1, Qr(s, n, i);
						break;
					case "selectionchange": if (qr) break;
					case "keydown":
					case "keyup": Qr(s, n, i);
				}
				var y;
				if (fr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else br ? vr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (hr && n.locale !== "ko" && (br || b !== "onCompositionStart" ? b === "onCompositionEnd" && br && (y = Pn()) : (jn = i, Mn = "value" in jn ? jn.value : jn.textContent, br = !0)), v = Jf(r, b), 0 < v.length && (b = new Qn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = yr(n), y !== null && (b.data = y)))), (y = mr ? xr(e, n) : Sr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new Qn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), If(s, e, r, n, i);
			}
			Vf(s, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Dn(e, n), i != null && r.unshift(qf(e, i, a)), i = Dn(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Dn(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = Dn(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || R(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && R(e, "" + r);
				else return;
				break;
			case "className":
				Xt(e, "class", r);
				break;
			case "tabIndex":
				Xt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Xt(e, n, r);
				break;
			case "style":
				mn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Xt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = vn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && tp(e, t, "name", a.name, a, null), tp(e, t, "formEncType", a.formEncType, a, null), tp(e, t, "formMethod", a.formMethod, a, null), tp(e, t, "formTarget", a.formTarget, a, null)) : (tp(e, t, "encType", a.encType, a, null), tp(e, t, "method", a.method, a, null), tp(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = vn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = yn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = vn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Yt(e, "popover", r);
				break;
			case "xlinkActuate":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Zt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Zt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Yt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = gn.get(n) || n, Yt(e, n, r);
			else return;
		}
		L = !0;
	}
	function np(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				mn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") R(e, r);
				else if (typeof r == "number" || typeof r == "bigint") R(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = yn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Vt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Et] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					L = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Yt(e, n, r);
				}
				return;
		}
		L = !0;
	}
	function rp(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: tp(e, t, o, s, n, null);
					}
				}
				a && tp(e, t, "srcSet", n.srcSet, n, null), r && tp(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: tp(e, t, r, d, n, null);
					}
				}
				sn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: tp(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && ln(e, !!r, n, !0) : ln(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: tp(e, t, s, c, n, null);
				}
				dn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: tp(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: tp(e, t, u, r, n, null);
				}
				return;
			default: if (hn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && np(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && tp(e, t, c, r, n, null));
	}
	var ip = {};
	function ap(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || tp(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (L = !0), o = m;
							break;
						case "name":
							m !== f && (L = !0), a = m;
							break;
						case "checked":
							m !== f && (L = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (L = !0), d = m;
							break;
						case "value":
							m !== f && (L = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (L = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && tp(e, t, p, m, r, f);
					}
				}
				on(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || tp(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (L = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (L = !0), c = o;
						break;
					case "multiple": o !== l && (L = !0), s = o;
					default: o !== l && tp(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? ln(e, !!n, n ? [] : "", !1) : ln(e, !!n, t, !0)) : ln(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: tp(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (L = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (L = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && tp(e, t, s, a, r, o);
				}
				un(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: tp(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (L = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: tp(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && tp(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: tp(e, t, u, p, r, m);
				}
				return;
			default: if (hn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && np(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || np(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && tp(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || tp(e, t, f, p, r, m);
	}
	function op(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function sp() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && op(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && op(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var cp = null, lp = null;
	function up(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function dp(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function fp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function pp(e, t, n, r) {
		return n = up(n).createElement(e), n[Tt] = r, n[Et] = t, rp(n, e, t), Rt(n), n;
	}
	function mp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var hp = null;
	function gp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== hp && (hp = e, !0) : (hp = null, !1);
	}
	var _p = typeof setTimeout == "function" ? setTimeout : void 0, vp = typeof clearTimeout == "function" ? clearTimeout : void 0, yp = typeof Promise == "function" ? Promise : void 0, bp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : _p, xp = typeof queueMicrotask == "function" ? queueMicrotask : yp === void 0 ? _p : function(e) {
		return yp.resolve(null).then(e).catch(Sp);
	};
	function Sp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Cp(e) {
		return e === "head";
	}
	function wp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") vm(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, vm(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[jt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && vm(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function Tp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Ep(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Dp(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Op(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function kp(e) {
		return Op(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function Ap(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Op(t, n, e);
	}
	function jp(e) {
		return e.documentElement.clientHeight;
	}
	function Mp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Np(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (jp(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(Mp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Pp(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Pp.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : E({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Pp.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Pp.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Fp(e) {
		return {
			name: e,
			group: new Pp("group", e),
			imagePair: new Pp("image-pair", e),
			old: new Pp("old", e),
			new: new Pp("new", e)
		};
	}
	function Ip(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Ip.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Vp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = zp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), p(this._fragmentFiber.child, !1, Lp, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Lp(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Ip.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Vp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = zp(i.optionsOrUseCapture), p(this._fragmentFiber.child, !1, Rp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Rp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function zp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function Bp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Vp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = Bp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && Bp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Ip.prototype.dispatchEvent = function(e) {
		var t = h(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, zp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, zp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Ip.prototype.focus = function(e) {
		p(this._fragmentFiber.child, !0, Hp, e, void 0, void 0);
	};
	function Hp(e, t) {
		return e.tag !== 6 && (e = b(e), mm(e, t));
	}
	Ip.prototype.focusLast = function(e) {
		var t = [];
		p(this._fragmentFiber.child, !0, Up, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Hp(t[n], e); n--);
	};
	function Up(e, t) {
		return t.push(e), !1;
	}
	Ip.prototype.blur = function() {
		var e = h(this._fragmentFiber);
		e !== null && (e = b(e), e = up(e).activeElement, e !== null && p(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Ip.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
	};
	function Gp(e, t) {
		return e.tag === 6 || (e = b(e), t.observe(e)), !1;
	}
	Ip.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), p(this._fragmentFiber.child, !1, Kp, e, void 0, void 0);
			for (var n = t = 0; n < qp.length; n++) {
				var r = qp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : qp[t++] = r;
			}
			qp.length = t;
		}
	};
	function Kp(e, t) {
		return e.tag === 6 || (e = b(e), t.unobserve(e)), !1;
	}
	var qp = [], Jp = !1;
	function Yp(e, t, n) {
		qp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), Jp || (Jp = !0, hm(function() {
			Jp = !1;
			var e = qp;
			qp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Ip.prototype.getClientRects = function() {
		var e = [];
		return p(this._fragmentFiber.child, !1, Xp, e, void 0, void 0), e;
	};
	function Xp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Ip.prototype.getRootNode = function(e) {
		var t = h(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Ip.prototype.compareDocumentPosition = function(e) {
		var t = h(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		p(this._fragmentFiber.child, !1, Up, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Zp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Zp(e, t, n, r, i) {
		var a = Pt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = h(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = ee(n, a, T), t === null ? t = !1 : (p(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = ee(r, a, T), t === null ? t = !1 : (p(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Qp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Ip.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		p(this._fragmentFiber.child, !1, Up, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || h(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Qp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), Qp(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function $p(e, t) {
		return e = b(e), em(e, t), !1;
	}
	function em(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, zp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < qp.length; i++) {
				var a = qp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (qp[r++] = a);
			}
			qp.length = r, n.observe(e);
		}), em(e, t));
	}
	function nm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, zp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Yp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function rm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					rm(n), Nt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function im(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[jt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = um(e.nextSibling), e === null) break;
		}
		return null;
	}
	function am(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = um(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = um(e.nextSibling), e === null)) return null;
		return e;
	}
	function sm(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function cm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function lm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function um(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var dm = null;
	function fm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return um(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function pm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function mm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function hm(e) {
		bp(function() {
			bp(function(t) {
				return e(t);
			});
		});
	}
	function gm(e, t, n) {
		switch (t = up(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function _m(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && tp(e, t, r, null, ip, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === yn && (e.onclick = null), Nt(e);
	}
	function vm(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Nt(e);
	}
	var ym = /* @__PURE__ */ new Map(), bm = /* @__PURE__ */ new Set();
	function xm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var Sm = F.d;
	F.d = {
		f: Cm,
		r: wm,
		D: Dm,
		C: Om,
		L: km,
		m: Am,
		X: Mm,
		S: jm,
		M: Nm
	};
	function Cm() {
		var e = Sm.f(), t = Rd();
		return e || t;
	}
	function wm(e) {
		var t = Ft(e);
		t !== null && t.tag === 5 && t.type === "form" ? Zs(t) : Sm.r(e);
	}
	var Tm = typeof document > "u" ? null : document;
	function Em(e, t, n) {
		var r = Tm;
		if (r && typeof t == "string" && t) {
			var i = an(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), bm.has(i) || (bm.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), rp(t, "link", e), Rt(t), r.head.appendChild(t)));
		}
	}
	function Dm(e) {
		Sm.D(e), Em("dns-prefetch", e, null);
	}
	function Om(e, t) {
		Sm.C(e, t), Em("preconnect", e, t);
	}
	function km(e, t, n) {
		Sm.L(e, t, n);
		var r = Tm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + an(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + an(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + an(n.imageSizes) + "\"]")) : i += "[href=\"" + an(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Fm(e);
					break;
				case "script": a = zm(e);
			}
			if (!(ym.has(a) || (e = E({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), ym.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Im(a)) || t === "script" && r.querySelector(Bm(a))))) {
				var o = r.createElement("link");
				rp(o, "link", e), t === "style" && (o[Mt] = !0, o.onload = o.onerror = function() {
					zt(o);
				}), Rt(o), r.head.appendChild(o);
			}
		}
	}
	function Am(e, t) {
		Sm.m(e, t);
		var n = Tm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + an(r) + "\"][href=\"" + an(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = zm(e);
			}
			if (!ym.has(a) && (e = E({
				rel: "modulepreload",
				href: e
			}, t), ym.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Bm(a))) return;
				}
				r = n.createElement("link"), rp(r, "link", e), Rt(r), n.head.appendChild(r);
			}
		}
	}
	function jm(e, t, n) {
		Sm.S(e, t, n);
		var r = Tm;
		if (r && e) {
			var i = Lt(r).hoistableStyles, a = Fm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Im(a))) s.loading = 5;
				else {
					e = E({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = ym.get(a)) && Um(e, n);
					var c = o = r.createElement("link");
					Rt(c), rp(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Hm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Mm(e, t) {
		Sm.X(e, t);
		var n = Tm;
		if (n && e) {
			var r = Lt(n).hoistableScripts, i = zm(e), a = r.get(i);
			a || (a = n.querySelector(Bm(i)), a || (e = E({
				src: e,
				async: !0
			}, t), (t = ym.get(i)) && Wm(e, t), a = n.createElement("script"), Rt(a), rp(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t) {
		Sm.M(e, t);
		var n = Tm;
		if (n && e) {
			var r = Lt(n).hoistableScripts, i = zm(e), a = r.get(i);
			a || (a = n.querySelector(Bm(i)), a || (e = E({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = ym.get(i)) && Wm(e, t), a = n.createElement("script"), Rt(a), rp(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Pm(e, t, n, r) {
		var a = (a = Te.current) ? xm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Fm(n.href), t = Lt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Fm(n.href);
					var o = Lt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Im(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = ym.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, ym.set(e, o)), Rm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = zm(n), t = Lt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Fm(e) {
		return "href=\"" + an(e) + "\"";
	}
	function Im(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Lm(e) {
		return E({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Rm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Mt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Mt] = !0, t.onload = t.onerror = zt.bind(null, t), rp(t, "link", n), Rt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function zm(e) {
		return "[src=\"" + an(e) + "\"]";
	}
	function Bm(e) {
		return "script[async]" + e;
	}
	function Vm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + an(n.href) + "\"]");
				if (r) return t.instance = r, Rt(r), r;
				var a = E({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Rt(r), rp(r, "style", a), Hm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Fm(n.href);
				var o = e.querySelector(Im(a));
				if (o) return t.state.loading |= 4, t.instance = o, Rt(o), o;
				r = Lm(n), (a = ym.get(a)) && Um(r, a), o = (e.ownerDocument || e).createElement("link"), Rt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), rp(o, "link", r), t.state.loading |= 4, Hm(o, n.precedence, e), t.instance = o;
			case "script": return o = zm(n.src), (a = e.querySelector(Bm(o))) ? (t.instance = a, Rt(a), a) : (r = n, (a = ym.get(o)) && (r = E({}, n), Wm(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Rt(a), rp(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Hm(r, n.precedence, e));
		return t.instance;
	}
	function Hm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Wm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Gm = null;
	function $(e, t, n) {
		if (Gm === null) {
			var r = /* @__PURE__ */ new Map(), i = Gm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Gm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[jt] || a[Tt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Fm(r.href), a = t.querySelector(Im(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Rt(a);
					return;
				}
				a = t.ownerDocument || t, r = Lm(r), (i = ym.get(i)) && Um(r, i), a = a.createElement("link"), Rt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), rp(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * sp());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: M,
		Provider: null,
		Consumer: null,
		_currentValue: _e,
		_currentValue2: _e,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.hiddenUpdates = mt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Oi(3, null, null, t), e.current = a, a.stateNode = e, t = Ta(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, so(a), e;
	}
	function uh(e) {
		return e ? (e = Ei, e) : Ei;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = lo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = uo(e, r, t), n !== null && (Nd(n, e, t), fo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ci(e, 67108864);
			t !== null && Nd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ad();
			t = bt(t);
			var n = Ci(e, t);
			n !== null && Nd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 2, yh(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 8, yh(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Ft(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = ct(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - tt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(Zu & 6) && (hd = Ue() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Ci(a, 2), s !== null && Nd(s, a, 2), Rd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = xn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Pt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (We()) {
				case Ge: return 2;
				case Ke: return 8;
				case qe:
				case Je: return 32;
				case Ye: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Ft(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Pt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, Ct(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, Ct(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				bn = r, n.target.dispatchEvent(r), bn = null;
			} else return t = Ft(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Ft(n);
				a !== null && (e.splice(t, 3), t -= 3, Ys(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Et] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Et] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, Ad(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Rd(), t[Dt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = St();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.1") throw Error(i(527, Kh, "19.3.1"));
	F.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: P,
		reconcilerVersion: "19.3.1"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			Qe = Jh.inject(qh), $e = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = vc, s = yc, c = bc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[Dt] = t.current, Wf(e), new Wh(t);
	};
})), v = /* @__PURE__ */ s(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = _();
})), y = /* @__PURE__ */ s(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), b = /* @__PURE__ */ s(((e, t) => {
	t.exports = y();
})), x = /* @__PURE__ */ u(f(), 1), S = b(), C = x.createContext(void 0), w = (e) => {
	let t = x.useContext(C);
	if (e) return e;
	if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return t;
}, T = ({ client: e, children: t }) => (x.useEffect(() => (e.mount(), () => {
	e.unmount();
}), [e]), /* @__PURE__ */ (0, S.jsx)(C.Provider, {
	value: e,
	children: t
})), ee = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, E = new class {
	#e = ee;
	setTimeoutProvider(e) {
		this.#e = e;
	}
	setTimeout(e, t) {
		return this.#e.setTimeout(e, t);
	}
	clearTimeout(e) {
		this.#e.clearTimeout(e);
	}
	setInterval(e, t) {
		return this.#e.setInterval(e, t);
	}
	clearInterval(e) {
		this.#e.clearInterval(e);
	}
}();
function D(e) {
	setTimeout(e, 0);
}
// node_modules/@tanstack/query-core/build/modern/utils.js
var te = typeof window > "u" || "Deno" in globalThis;
function O() {}
function k(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function A(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function ne(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function j(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function M(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== re(o, t.options)) return !1;
		} else if (!ae(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function N(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (ie(t.options.mutationKey) !== ie(a)) return !1;
		} else if (!ae(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function re(e, t) {
	return (t?.queryKeyHashFn || ie)(e);
}
function ie(e) {
	return JSON.stringify(e, (e, t) => ue(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function ae(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (Array.isArray(e) && Array.isArray(t)) {
			if (t.length > e.length) return !1;
			for (let n = 0; n < t.length; n++) if (!ae(e[n], t[n])) return !1;
			return !0;
		}
		let n = Object.keys(t);
		for (let r of n) if (!ae(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var oe = Object.prototype.hasOwnProperty;
function se(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = le(e) && le(t);
	if (!r && !(ue(e) && ue(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : oe.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = se(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function ce(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function le(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ue(e) {
	if (!de(e)) return !1;
	let t = Object.getPrototypeOf(e), n = t?.constructor;
	if (n === void 0) return !0;
	if (typeof n != "function") return !1;
	let r = n.prototype;
	return !(!de(r) || !r.hasOwnProperty("isPrototypeOf") || t !== Object.prototype);
}
function de(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function fe(e) {
	return new Promise((t) => {
		E.setTimeout(t, e);
	});
}
function pe(e, t, n) {
	return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : se(e, t);
}
function me(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function he(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var ge = Symbol();
function P(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === ge ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function F(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function _e(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r || (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 })), i)
	}), e;
}
// node_modules/@tanstack/query-core/build/modern/environmentManager.js
var ve = () => te, ye = () => ve(), be = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
	}
	subscribe(e) {
		return this.listeners.add(e), this.onSubscribe(), () => {
			this.listeners.delete(e), this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}, xe = new class extends be {
	#e;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e();
				return window.addEventListener("visibilitychange", t, !1), () => {
					window.removeEventListener("visibilitychange", t);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e((e) => {
			typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
		});
	}
	setFocused(e) {
		this.#e !== e && (this.#e = e, this.onFocus());
	}
	onFocus() {
		let e = this.isFocused();
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	isFocused() {
		return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
	}
}(), Se = D;
function Ce() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = Se, a = (r) => {
		t ? e.push(r) : i(() => {
			n(r);
		});
	}, o = () => {
		let t = e;
		e = [], t.length && i(() => {
			r(() => {
				t.forEach((e) => {
					n(e);
				});
			});
		});
	};
	return {
		batch: (e) => {
			let n;
			t++;
			try {
				n = e();
			} finally {
				t--, t || o();
			}
			return n;
		},
		batchCalls: (e) => (...t) => {
			a(() => {
				e(...t);
			});
		},
		schedule: a,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			r = e;
		},
		setScheduler: (e) => {
			i = e;
		}
	};
}
var we = Ce(), Te = new class extends be {
	#e = !0;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e(!0), n = () => e(!1);
				return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
					window.removeEventListener("online", t), window.removeEventListener("offline", n);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
	}
	setOnline(e) {
		this.#e !== e && (this.#e = e, this.listeners.forEach((t) => {
			t(e);
		}));
	}
	isOnline() {
		return this.#e;
	}
}();
// node_modules/@tanstack/query-core/build/modern/retryer.js
function Ee(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function De(e) {
	return (e ?? "online") !== "online" || Te.isOnline();
}
var Oe = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function ke(e) {
	let t = !1, n = 0, r, i = "pending", a, o, s = new Promise((e, t) => {
		a = e, o = t;
	});
	s.catch(O);
	let c = () => i !== "pending", l = (t) => {
		if (!c()) {
			let n = new Oe(t);
			h(n), e.onCancel?.(n);
		}
	}, u = () => {
		t = !0;
	}, d = () => {
		t = !1;
	}, f = () => xe.isFocused() && (e.networkMode === "always" || Te.isOnline()) && e.canRun(), p = () => De(e.networkMode) && e.canRun(), m = (e) => {
		c() || (r?.(), i = "resolved", a(e));
	}, h = (e) => {
		c() || (r?.(), i = "rejected", o(e));
	}, g = (t) => new Promise((n) => {
		r = (e) => {
			(c() || t()) && n(e);
		}, e.onPause?.();
	}).then(() => {
		r = void 0, c() || e.onContinue?.();
	}), _ = () => {
		if (c()) return;
		let r, i = n === 0 ? e.initialPromise : void 0;
		try {
			r = i ?? e.fn();
		} catch (e) {
			r = Promise.reject(e);
		}
		Promise.resolve(r).then(m).catch((r) => {
			if (c()) return;
			let i = e.retry ?? (ye() ? 0 : 3), a = e.retryDelay ?? Ee, o = typeof a == "function" ? a(n, r) : a, s = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			t || !s ? h(r) : (n++, e.onFail?.(n, r), fe(o).then(() => f() ? void 0 : g(f)).then(() => {
				t ? h(r) : _();
			}));
		});
	};
	return {
		promise: s,
		status: () => i,
		cancel: l,
		continue: () => (r?.(), s),
		cancelRetry: u,
		continueRetry: d,
		canStart: p,
		start: () => (p() ? _() : g(p).then(_), s)
	};
}
// node_modules/@tanstack/query-core/build/modern/removable.js
var Ae = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), A(this.gcTime) && (this.#e = E.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (ye() ? Infinity : 3e5));
	}
	clearGcTimeout() {
		this.#e !== void 0 && (E.clearTimeout(this.#e), this.#e = void 0);
	}
};
// node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function je(e) {
	return { onFetch: (t, n) => {
		let r = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], o = t.state.data?.pageParams || [], s = {
			pages: [],
			pageParams: []
		}, c = 0, l = async () => {
			let n = !1, l = (e) => {
				_e(e, () => t.signal, () => n = !0);
			}, u = P(t.options, t.fetchOptions), d = async (e, r, i) => {
				if (n) return Promise.reject(t.signal.reason);
				if (r == null && e.pages.length) return Promise.resolve(e);
				let a = (() => {
					let e = {
						client: t.client,
						queryKey: t.queryKey,
						pageParam: r,
						direction: i ? "backward" : "forward",
						meta: t.options.meta
					};
					return l(e), e;
				})(), o = await u(a), { maxPages: s } = t.options, c = i ? he : me;
				return {
					pages: c(e.pages, o, s),
					pageParams: c(e.pageParams, r, s)
				};
			};
			if (i && a.length) {
				let e = i === "backward", t = e ? Ne : Me, n = {
					pages: a,
					pageParams: o
				};
				s = await d(n, t(r, n), e);
			} else {
				let t = e ?? a.length;
				do {
					let e = c === 0 ? o[0] === void 0 ? r.initialPageParam : o[0] : Me(r, s);
					if (c > 0 && e == null) break;
					s = await d(s, e), c++;
				} while (c < t);
			}
			return s;
		};
		t.fetchFn = t.options.persister ? () => t.options.persister?.(l, {
			client: t.client,
			queryKey: t.queryKey,
			meta: t.options.meta,
			signal: t.signal
		}, n) : l;
	} };
}
function Me(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Ne(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
// node_modules/@tanstack/query-core/build/modern/query.js
var Pe = class extends Ae {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e) {
		super(), this.#s = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#r = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = Le(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#e;
	}
	get promise() {
		return this.#a?.promise;
	}
	setOptions(e) {
		if (this.options = {
			...this.#o,
			...e
		}, e?._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
			let e = Le(this.options);
			e.data !== void 0 && (this.setState(Ie(e.data, e.dataUpdatedAt)), this.#t = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
	}
	setData(e, t) {
		let n = pe(this.state.data, e, this.options);
		return this.#c({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e) {
		this.#c({
			type: "setState",
			state: e
		});
	}
	cancel(e) {
		let t = this.#a?.promise;
		return this.#a?.cancel(e), t ? t.then(O).catch(O) : Promise.resolve();
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	get resetState() {
		return this.#t;
	}
	reset() {
		this.destroy(), this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((e) => j(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ge || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => j(e.options.staleTime, this) === "static");
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !ne(this.state.dataUpdatedAt, e);
	}
	onFocus() {
		this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	onOnline() {
		this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	addObserver(e) {
		this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({
			type: "observerAdded",
			query: this,
			observer: e
		}));
	}
	removeObserver(e) {
		let t = this.observers.indexOf(e);
		t !== -1 && (this.observers.splice(t, 1), this.observers.length || (this.#a && (this.#s || this.state.fetchStatus === "paused" && this.state.status === "pending" ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()), this.scheduleGc()), this.#r.notify({
			type: "observerRemoved",
			query: this,
			observer: e
		}));
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		this.state.isInvalidated || this.#c({ type: "invalidate" });
	}
	async fetch(e, t) {
		if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
			if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
		}
		if (e && this.setOptions(e), !this.options.queryFn) {
			let e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		let n = new AbortController(), r = (e) => {
			Object.defineProperty(e, "signal", {
				enumerable: !0,
				get: () => (this.#s = !0, n.signal)
			});
		}, i = () => {
			let e = P(this.options, t), n = (() => {
				let e = {
					client: this.#i,
					queryKey: this.queryKey,
					meta: this.meta
				};
				return r(e), e;
			})();
			return this.#s = !1, this.options.persister ? this.options.persister(e, n, this) : e(n);
		}, a = (() => {
			let e = {
				fetchOptions: t,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#i,
				state: this.state,
				fetchFn: i
			};
			return r(e), e;
		})();
		(this.#e === "infinite" ? je(this.options.pages) : this.options.behavior)?.onFetch(a, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#c({
			type: "fetch",
			meta: a.fetchOptions?.meta
		});
		let o = this.#a = ke({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof Oe && e.revert && this.setState({
					...this.#n,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#c({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#c({ type: "pause" });
			},
			onContinue: () => {
				this.#c({ type: "continue" });
			},
			retry: a.options.retry,
			retryDelay: a.options.retryDelay,
			networkMode: a.options.networkMode,
			canRun: () => !0
		});
		try {
			let e = await o.start();
			if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
			return this.setData(e), this.#r.config.onSuccess?.(e, this), this.#r.config.onSettled?.(e, this.state.error, this), e;
		} catch (e) {
			if (e instanceof Oe) {
				if (e.silent) return this.#a.promise;
				if (e.revert) {
					if (this.state.data === void 0) throw e;
					return this.state.data;
				}
			}
			throw this.#c({
				type: "error",
				error: e
			}), this.#r.config.onError?.(e, this), this.#r.config.onSettled?.(this.state.data, e, this), e;
		} finally {
			this.#a === o && (this.#a = void 0), this.scheduleGc();
		}
	}
	#c(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					fetchFailureCount: e.failureCount,
					fetchFailureReason: e.error
				};
				case "pause": return {
					...t,
					fetchStatus: "paused"
				};
				case "continue": return {
					...t,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...t,
					...Fe(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...Ie(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return this.#n = e.manual ? n : void 0, n;
				case "error":
					let r = e.error;
					return {
						...t,
						error: r,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: r,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: !0
					};
				case "invalidate": return {
					...t,
					isInvalidated: !0
				};
				case "setState": return {
					...t,
					...e.state
				};
			}
		};
		this.state = t(this.state), we.batch(() => {
			this.observers.slice().forEach((e) => {
				e.onQueryUpdate();
			}), this.#r.notify({
				query: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Fe(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: De(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function Ie(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function Le(e) {
	let t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	};
}
// node_modules/@tanstack/query-core/build/modern/queryObserver.js
var Re = class extends be {
	#e;
	#t = void 0;
	#n = void 0;
	#r = void 0;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p = /* @__PURE__ */ new Set();
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#o = null, this.bindMethods(), this.setOptions(t);
	}
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), Be(this.#t, this.options) ? this.#m() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return Ve(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return Ve(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof j(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !ce(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && He(this.#t, n, this.options, t) && this.#m(), this.updateResult(), r && (this.#t !== n || j(this.options.enabled, this.#t) !== j(t.enabled, this.#t) || j(this.options.staleTime, this.#t) !== j(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || j(this.options.enabled, this.#t) !== j(t.enabled, this.#t) || i !== this.#f) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return ce(this.getCurrentResult(), n) || (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
	}
	getCurrentResult() {
		return this.#r;
	}
	trackResult(e, t) {
		return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), Reflect.get(e, n)) });
	}
	trackProp(e) {
		this.#p.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		let t = this.#e.defaultQueryOptions(e), n = this.#e.getQueryCache().build(this.#e, t), r = () => {}, i, a = new Promise((e) => {
			i = e, r = this.#e.getQueryCache().subscribe((i) => {
				i.type === "updated" && i.query.queryHash === n.queryHash && n.state.data !== void 0 && (r(), e(this.createResult(n, t)));
			});
		});
		return Promise.race([n.fetch(t).then(() => {
			let e = this.createResult(n, t);
			return i?.(e), e;
		}).finally(() => {
			r();
		}), a]);
	}
	fetch(e) {
		return this.#m({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#r));
	}
	#m(e) {
		this.#S();
		let t = this.#t.fetch(this.options, e);
		return e?.throwOnError || (t = t.catch(O)), t;
	}
	#h(e) {
		return !ye() && j(this.options.enabled, this.#t) !== !1 && A(e);
	}
	#g() {
		this.#b();
		let e = j(this.options.staleTime, this.#t);
		if (this.#r.isStale || !this.#h(e)) return;
		let t = ne(this.#r.dataUpdatedAt, e) + 1;
		this.#u = E.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return j(this.options.refetchInterval, this.#t) ?? !1;
	}
	#v(e) {
		this.#x(), this.#f = e, this.#f !== 0 && this.#h(this.#f) && (this.#d = E.setInterval(() => {
			(this.options.refetchIntervalInBackground || xe.isFocused()) && this.#m();
		}, this.#f));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#u !== void 0 && (E.clearTimeout(this.#u), this.#u = void 0);
	}
	#x() {
		this.#d !== void 0 && (E.clearInterval(this.#d), this.#d = void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: c } = e, l = { ...c }, u = !1, d;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && Be(e, t), o = i && He(e, n, t, r);
			(a || o) && (l = {
				...l,
				...Fe(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: p, status: m } = l;
		d = l.data;
		let h = !1;
		if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#l?.state.data, this.#l) : t.placeholderData, e !== void 0 && (m = "success", d = pe(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !h) {
			if (i && d === a?.data && t.select === this.#s) d = this.#c;
			else try {
				this.#s = t.select, d = t.select(d), d = pe(i?.data, d, t), this.#c = d, this.#o = null;
			} catch (e) {
				this.#o = e;
			}
		} else d === void 0 && (this.#o = null);
		this.#o && (f = this.#o, d = this.#c, p = Date.now(), m = "error", u = !1);
		let g = l.fetchStatus === "fetching", _ = m === "pending", v = m === "error", y = _ && g, b = d !== void 0;
		return {
			status: m,
			fetchStatus: l.fetchStatus,
			isPending: _,
			isSuccess: m === "success",
			isError: v,
			isInitialLoading: y,
			isLoading: y,
			data: d,
			dataUpdatedAt: l.dataUpdatedAt,
			error: f,
			errorUpdatedAt: p,
			failureCount: l.fetchFailureCount,
			failureReason: l.fetchFailureReason,
			errorUpdateCount: l.errorUpdateCount,
			isFetched: e.isFetched(),
			isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
			isFetching: g,
			isRefetching: g && !_,
			isLoadingError: v && !b,
			isPaused: l.fetchStatus === "paused",
			isPlaceholderData: u,
			isRefetchError: v && b,
			isStale: Ue(e, t),
			refetch: this.refetch,
			isEnabled: j(t.enabled, e) !== !1
		};
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		if (this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#l = this.#t), ce(t, e)) return;
		this.#r = t;
		let n = (() => {
			if (!e) return !0;
			let { notifyOnChangeProps: t } = this.options, n = typeof t == "function" ? t() : t;
			if (n === "all" || !n && !this.#p.size) return !0;
			let r = new Set(n ?? this.#p);
			return this.options.throwOnError && r.add("error"), Object.keys(this.#r).some((t) => {
				let n = t;
				return this.#r[n] !== e[n] && r.has(n);
			});
		})();
		we.batch(() => {
			n && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
	#S() {
		let e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		let t = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#y();
	}
};
function ze(e, t) {
	return j(t.enabled, e) !== !1 && e.state.data === void 0 && (e.state.status !== "error" || j(t.retryOnMount, e) !== !1);
}
function Be(e, t) {
	return ze(e, t) || e.state.data !== void 0 && Ve(e, t, t.refetchOnMount);
}
function Ve(e, t, n) {
	if (j(t.enabled, e) !== !1 && j(t.staleTime, e) !== "static") {
		let r = j(n, e);
		return r === "always" || r !== !1 && Ue(e, t);
	}
	return !1;
}
function He(e, t, n, r) {
	return (e !== t || j(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Ue(e, n);
}
function Ue(e, t) {
	return j(t.enabled, e) !== !1 && e.isStaleByTime(j(t.staleTime, e));
}
// node_modules/@tanstack/query-core/build/modern/mutation.js
var We = class extends Ae {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || Ge(), this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
	}
	continue() {
		return this.#r?.continue() ?? (this.state.status === "pending" ? this.execute(this.state.variables) : Promise.resolve());
	}
	async execute(e) {
		let t = () => {
			this.#i({ type: "continue" });
		}, n = {
			client: this.#e,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		}, r = this.#r = ke({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#i({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#i({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		}), i = this.state.status === "pending", a = !r.canStart();
		try {
			if (i) t();
			else {
				this.#i({
					type: "pending",
					variables: e,
					isPaused: a
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
				let t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#i({
					type: "pending",
					context: t,
					variables: e,
					isPaused: a
				});
			}
			let o = await r.start();
			return await this.#n.config.onSuccess?.(o, e, this.state.context, this, n), await this.options.onSuccess?.(o, e, this.state.context, n), await this.#n.config.onSettled?.(o, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(o, null, e, this.state.context, n), this.#i({
				type: "success",
				data: o
			}), o;
		} catch (t) {
			try {
				await this.#n.config.onError?.(t, e, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			throw this.#i({
				type: "error",
				error: t
			}), t;
		} finally {
			this.#r === r && (this.#r = void 0), this.#n.runNext(this);
		}
	}
	#i(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		};
		this.state = t(this.state), we.batch(() => {
			this.#t.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Ge() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
// node_modules/@tanstack/query-core/build/modern/mutationCache.js
var Ke = class extends be {
	#e;
	#t;
	#n;
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	build(e, t, n) {
		let r = new We({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(r), r;
	}
	add(e) {
		this.#e.add(e);
		let t = qe(e);
		if (typeof t == "string") {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = qe(e);
			if (typeof t == "string") {
				let n = this.#t.get(t);
				if (n) {
					if (n.length > 1) {
						let t = n.indexOf(e);
						t !== -1 && n.splice(t, 1);
					} else n[0] === e && this.#t.delete(t);
				}
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		let t = qe(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		let t = qe(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		we.batch(() => {
			let e = this.getAll();
			this.#e.clear(), this.#t.clear(), e.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			});
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => N(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => N(e, t));
	}
	notify(e) {
		we.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return we.batch(() => Promise.all(e.map((e) => e.continue().catch(O))));
	}
};
function qe(e) {
	return e.options.scope?.id;
}
// node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var Je = class extends be {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), ce(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && ie(t.mutationKey) !== ie(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onSubscribe() {
		this.listeners.size === 1 && this.#n && (this.#n.addObserver(this), this.#i());
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? Ge();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		we.batch(() => {
			let t = this.#r;
			if (t && this.hasListeners()) {
				let n = this.#t.variables, r = this.#t.context, i = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						t.onSuccess?.(e.data, n, r, i);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						t.onSettled?.(e.data, null, n, r, i);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						t.onError?.(e.error, n, r, i);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						t.onSettled?.(void 0, e.error, n, r, i);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
}, Ye = class extends be {
	#e;
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? re(r, t), a = this.get(i);
		return a || (a = new Pe({
			client: e,
			queryKey: r,
			queryHash: i,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(r)
		}), this.add(a)), a;
	}
	add(e) {
		this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		this.#e.get(e.queryHash) === e && (e.destroy(), this.#e.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		we.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#e.get(e);
	}
	getAll() {
		return [...this.#e.values()];
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => M(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => M(e, t)) : t;
	}
	notify(e) {
		we.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		we.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		we.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, Xe = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new Ye(), this.#t = e.mutationCache || new Ke(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = xe.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = Te.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onOnline());
		}));
	}
	unmount() {
		this.#a--, this.#a === 0 && (this.#o?.(), this.#o = void 0, this.#s?.(), this.#s = void 0);
	}
	isFetching(e) {
		return this.#e.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#t.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		let t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(j(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
	}
	getQueriesData(e) {
		return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		let r = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(r.queryHash)?.state.data, a = k(t, i);
		if (a !== void 0) return this.#e.build(this, r).setData(a, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return we.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		we.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return we.batch(() => {
			let r = n.findAll(e), i = new Set(r);
			return r.forEach((e) => {
				e.reset();
			}), this.refetchQueries({
				type: "active",
				predicate: (e) => i.has(e)
			}, t);
		});
	}
	cancelQueries(e, t = {}) {
		let n = {
			revert: !0,
			...t
		}, r = we.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(O).catch(O);
	}
	invalidateQueries(e, t = {}) {
		return we.batch(() => (this.#e.findAll(e).forEach((e) => {
			e.invalidate();
		}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		let n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, r = we.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(O)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(O);
	}
	async query(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t), r = n.isStaleByTime(j(t.staleTime, n)) ? await n.fetch(t) : n.state.data, i = t.select;
		return i ? i(r) : r;
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(j(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(O).catch(O);
	}
	infiniteQuery(e) {
		return e._type = "infinite", this.query(e);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(O).catch(O);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return Te.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#e;
	}
	getMutationCache() {
		return this.#t;
	}
	getDefaultOptions() {
		return this.#n;
	}
	setDefaultOptions(e) {
		this.#n = e;
	}
	setQueryDefaults(e, t) {
		this.#r.set(ie(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			ae(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(ie(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			ae(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		let t = {
			...this.#n.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash ||= re(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ge && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#n.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
}, Ze = x.createContext(!1), Qe = () => x.useContext(Ze);
Ze.Provider;
// node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function $e() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var et = x.createContext($e()), tt = () => x.useContext(et), nt = (e, t, n) => {
	let r = n?.state.status === "error" && typeof e.throwOnError == "function" ? F(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || r) && (t.isReset() || (e.retryOnMount = !1));
}, rt = (e) => {
	x.useEffect(() => {
		e.clearReset();
	}, [e]);
}, it = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || F(n, [e.error, r])), at = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, ot = (e, t) => e?.suspense && t.isPending, st = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
// node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function ct(e, t, n) {
	let r = Qe(), i = tt(), a = w(n), o = a.defaultQueryOptions(e), s = a.getQueryCache().get(o.queryHash), c = e.subscribed !== !1;
	o._optimisticResults = r ? "isRestoring" : c ? "optimistic" : void 0, at(o), nt(o, i, s), rt(i);
	let [l] = x.useState(() => new t(a, o)), u = l.getOptimisticResult(o), d = !r && c;
	if (x.useSyncExternalStore(x.useCallback((e) => {
		let t = d ? l.subscribe(we.batchCalls(e)) : O;
		return l.updateResult(), t;
	}, [l, d]), () => l.getCurrentResult(), () => l.getCurrentResult()), x.useEffect(() => {
		l.setOptions(o);
	}, [o, l]), ot(o, u)) throw st(o, l, i);
	if (it({
		result: u,
		errorResetBoundary: i,
		throwOnError: o.throwOnError,
		query: s,
		suspense: o.suspense
	})) throw u.error;
	return o.notifyOnChangeProps ? u : l.trackResult(u);
}
// node_modules/@tanstack/react-query/build/modern/useQuery.js
function lt(e, t) {
	return ct(e, Re, t);
}
// node_modules/@tanstack/react-query/build/modern/useMutation.js
function ut(e, t) {
	let n = w(t), [r] = x.useState(() => new Je(n, e));
	x.useEffect(() => {
		r.setOptions(e);
	}, [r, e]);
	let i = x.useSyncExternalStore(x.useCallback((e) => r.subscribe(we.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), a = x.useCallback((...e) => {
		r.mutate(e[0], e[1]).catch(O);
	}, [r]);
	if (i.error && F(r.options.throwOnError, [i.error])) throw i.error;
	return {
		...i,
		mutate: a,
		mutateAsync: i.mutate
	};
}
// node_modules/sonner/dist/index.mjs
var dt = v(), ft = /* @__PURE__ */ u(g(), 1);
function pt(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var mt = (e) => {
	switch (e) {
		case "success": return _t;
		case "info": return yt;
		case "warning": return vt;
		case "error": return bt;
		default: return null;
	}
}, ht = Array(12).fill(0), gt = ({ visible: e, className: t }) => /*#__PURE__*/ x.createElement("div", {
	className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
	"data-visible": e
}, /*#__PURE__*/ x.createElement("div", { className: "sonner-spinner" }, ht.map((e, t) => /*#__PURE__*/ x.createElement("div", {
	className: "sonner-loading-bar",
	key: `spinner-bar-${t}`
})))), _t = /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /*#__PURE__*/ x.createElement("path", {
	fillRule: "evenodd",
	d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
	clipRule: "evenodd"
})), vt = /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /*#__PURE__*/ x.createElement("path", {
	fillRule: "evenodd",
	d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
	clipRule: "evenodd"
})), yt = /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /*#__PURE__*/ x.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
	clipRule: "evenodd"
})), bt = /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /*#__PURE__*/ x.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
	clipRule: "evenodd"
})), xt = /*#__PURE__*/ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	"aria-hidden": "true"
}, /*#__PURE__*/ x.createElement("line", {
	x1: "18",
	y1: "6",
	x2: "6",
	y2: "18"
}), /*#__PURE__*/ x.createElement("line", {
	x1: "6",
	y1: "6",
	x2: "18",
	y2: "18"
})), St = () => {
	let [e, t] = x.useState(document.hidden);
	return x.useEffect(() => {
		let e = () => {
			t(document.hidden);
		};
		return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e);
	}, []), e;
}, Ct = 1, wt = 100, Tt = (e) => typeof e?.id == "number" || e?.id?.length > 0 ? e.id : Ct++, Et = new class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), this.getActiveToasts().forEach((t) => e(t)), () => {
			let t = this.subscribers.indexOf(e);
			this.subscribers.splice(t, 1);
		}), this.publish = (e) => {
			this.subscribers.forEach((t) => t(e));
		}, this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e], this.trimHistory();
		}, this.trimHistory = () => {
			let e = this.toasts.length - wt;
			e <= 0 || (this.toasts = this.toasts.filter((t) => e > 0 && this.dismissedToasts.has(t.id) ? (this.dismissedToasts.delete(t.id), e--, !1) : !0));
		}, this.create = (e) => {
			let { message: t, ...n } = e, r = Tt(e), i = this.pendingDismissals.get(r);
			i !== void 0 && (cancelAnimationFrame(i), this.pendingDismissals.delete(r), this.dismissedToasts.delete(r));
			let a = this.dismissedToasts.has(r), o = e.dismissible === void 0 || e.dismissible;
			return a && (this.dismissedToasts.delete(r), this.toasts = this.toasts.filter((e) => e.id !== r)), !a && this.toasts.find((e) => e.id === r) ? this.toasts = this.toasts.map((n) => n.id === r ? (this.publish({
				...n,
				...e,
				id: r,
				title: t
			}), {
				...n,
				...e,
				id: r,
				dismissible: o,
				title: t
			}) : n) : this.addToast({
				title: t,
				...n,
				dismissible: o,
				id: r
			}), r;
		}, this.dismiss = (e) => {
			if (e == null) return this.getActiveToasts().forEach((e) => {
				this.dismissedToasts.add(e.id), this.subscribers.forEach((t) => t({
					id: e.id,
					dismiss: !0
				}));
			}), e;
			this.dismissedToasts.add(e);
			let t = this.pendingDismissals.get(e);
			return t !== void 0 && cancelAnimationFrame(t), this.pendingDismissals.set(e, requestAnimationFrame(() => {
				this.pendingDismissals.delete(e), this.subscribers.forEach((t) => t({
					id: e,
					dismiss: !0
				}));
			})), e;
		}, this.message = (e, t) => this.create({
			...t,
			message: e,
			type: void 0
		}), this.error = (e, t) => this.create({
			...t,
			message: e,
			type: "error"
		}), this.success = (e, t) => this.create({
			...t,
			type: "success",
			message: e
		}), this.info = (e, t) => this.create({
			...t,
			type: "info",
			message: e
		}), this.warning = (e, t) => this.create({
			...t,
			type: "warning",
			message: e
		}), this.loading = (e, t) => this.create({
			...t,
			type: "loading",
			message: e
		}), this.promise = (e, t) => {
			if (!t) return;
			let n;
			t.loading !== void 0 && (n = this.create({
				...t,
				promise: e,
				type: "loading",
				message: t.loading,
				description: typeof t.description == "function" ? void 0 : t.description
			}));
			let r = Promise.resolve(e instanceof Function ? e() : e), i = n !== void 0, a, o = r.then(async (e) => {
				if (a = ["resolve", e], x.isValidElement(e)) i = !1, this.create({
					id: n,
					type: "default",
					message: e
				});
				else if (Ot(e) && !e.ok) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, o = typeof r == "object" && !x.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...o
					});
				} else if (e instanceof Error) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !x.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...o
					});
				} else if (t.success !== void 0) {
					i = !1;
					let r = typeof t.success == "function" ? await t.success(e) : t.success, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !x.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "success",
						description: a,
						...o
					});
				}
			}).catch(async (e) => {
				if (a = ["reject", e], t.error !== void 0) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !x.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...o
					});
				}
			}).finally(() => {
				i && (this.dismiss(n), n = void 0), t.finally == null || t.finally.call(t);
			}), s = () => new Promise((e, t) => o.then(() => a[0] === "reject" ? t(a[1]) : e(a[1])).catch(t));
			return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
		}, this.custom = (e, t) => {
			let n = Tt(t);
			return this.create({
				...t,
				jsx: e(n),
				id: n,
				type: void 0
			}), n;
		}, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set(), this.pendingDismissals = /* @__PURE__ */ new Map();
	}
}(), Dt = (e, t) => Et.message(e, t), Ot = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", I = Object.assign(Dt, {
	success: Et.success,
	info: Et.info,
	warning: Et.warning,
	error: Et.error,
	custom: Et.custom,
	message: Et.message,
	promise: Et.promise,
	dismiss: Et.dismiss,
	loading: Et.loading
}, {
	getHistory: () => Et.toasts,
	getToasts: () => Et.getActiveToasts()
});
pt("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function kt(e) {
	return e.label !== void 0;
}
var At = 3, jt = "24px", Mt = "16px", Nt = 4e3, Pt = 356, Ft = 14, It = 45, Lt = 200;
function Rt(...e) {
	return e.filter(Boolean).join(" ");
}
function zt(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
var Bt = (e) => {
	let { invert: t, toast: n, unstyled: r, interacting: i, setHeights: a, visibleToasts: o, heights: s, index: c, toasts: l, expanded: u, removeToast: d, defaultRichColors: f, closeButton: p, style: m, cancelButtonStyle: h, actionButtonStyle: g, className: _ = "", descriptionClassName: v = "", duration: y, position: b, gap: S, expandByDefault: C, classNames: w, icons: T, closeButtonAriaLabel: ee = "Close toast" } = e, [E, D] = x.useState(null), [te, O] = x.useState(null), [k, A] = x.useState(!1), [ne, j] = x.useState(!1), [M, N] = x.useState(!1), [re, ie] = x.useState(!1), [ae, oe] = x.useState(!1), [se, ce] = x.useState(0), [le, ue] = x.useState(0), de = x.useRef(n.duration || y || Nt), fe = x.useRef(null), pe = x.useRef(null), me = c === 0, he = c + 1 <= o, ge = n.type, P = ge ?? "default", F = n.dismissible !== !1, _e = n.className || "", ve = n.descriptionClassName || "", ye = x.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]), be = x.useMemo(() => n.closeButton ?? p, [n.closeButton, p]), xe = x.useMemo(() => n.duration || y || Nt, [n.duration, y]), Se = x.useRef(0), Ce = x.useRef(0), we = x.useRef(0), Te = x.useRef(null), [Ee, De] = b.split("-"), Oe = x.useMemo(() => s.reduce((e, t, n) => n >= ye ? e : e + t.height, 0), [s, ye]), ke = St(), Ae = x.useMemo(() => e.swipeDirections ?? zt(b), [e.swipeDirections, b]), je = n.invert || t, Me = ge === "loading";
	Ce.current = x.useMemo(() => ye * S + Oe, [ye, Oe]), x.useEffect(() => {
		de.current = xe;
	}, [xe]), x.useEffect(() => {
		A(!0);
	}, []), x.useEffect(() => {
		let e = pe.current;
		if (e) {
			let t = e.getBoundingClientRect().height;
			return ue(t), a((e) => [{
				toastId: n.id,
				height: t,
				position: n.position
			}, ...e]), () => a((e) => e.filter((e) => e.toastId !== n.id));
		}
	}, [a, n.id]), x.useLayoutEffect(() => {
		if (!k) return;
		let e = pe.current, t = e.style.height;
		e.style.height = "auto";
		let r = e.getBoundingClientRect().height;
		e.style.height = t, ue(r), a((e) => e.find((e) => e.toastId === n.id) ? e.map((e) => e.toastId === n.id ? {
			...e,
			height: r
		} : e) : [{
			toastId: n.id,
			height: r,
			position: n.position
		}, ...e]);
	}, [
		k,
		n.title,
		n.description,
		a,
		n.id,
		n.jsx,
		n.action,
		n.cancel
	]);
	let Ne = x.useCallback(() => {
		j(!0), ce(Ce.current), a((e) => e.filter((e) => e.toastId !== n.id)), setTimeout(() => {
			d(n);
		}, Lt);
	}, [
		n,
		d,
		a,
		Ce
	]);
	x.useEffect(() => {
		if (n.promise && ge === "loading" || n.duration === Infinity || n.type === "loading") return;
		let e;
		return u || i || ke ? (() => {
			if (we.current < Se.current) {
				let e = (/* @__PURE__ */ new Date()).getTime() - Se.current;
				de.current -= e;
			}
			we.current = (/* @__PURE__ */ new Date()).getTime();
		})() : de.current !== Infinity && (Se.current = (/* @__PURE__ */ new Date()).getTime(), e = setTimeout(() => {
			n.onAutoClose == null || n.onAutoClose.call(n, n), Ne();
		}, de.current)), () => clearTimeout(e);
	}, [
		u,
		i,
		n,
		ge,
		ke,
		Ne
	]), x.useEffect(() => {
		n.delete && (Ne(), n.onDismiss == null || n.onDismiss.call(n, n));
	}, [Ne, n.delete]);
	function Pe() {
		return T?.loading ? /*#__PURE__*/ x.createElement("div", {
			className: Rt(w?.loader, n?.classNames?.loader, "sonner-loader"),
			"data-visible": ge === "loading"
		}, T.loading) : /*#__PURE__*/ x.createElement(gt, {
			className: Rt(w?.loader, n?.classNames?.loader),
			visible: ge === "loading"
		});
	}
	let Fe = n.icon || T?.[ge] || mt(ge);
	return /*#__PURE__*/ x.createElement("li", {
		tabIndex: 0,
		ref: pe,
		className: Rt(_, _e, w?.toast, n?.classNames?.toast, w?.[P], n?.classNames?.[P]),
		"data-sonner-toast": "",
		"data-rich-colors": n.richColors ?? f,
		"data-styled": !(n.jsx || n.unstyled || r),
		"data-mounted": k,
		"data-promise": !!n.promise,
		"data-swiped": ae,
		"data-removed": ne,
		"data-visible": he,
		"data-y-position": Ee,
		"data-x-position": De,
		"data-index": c,
		"data-front": me,
		"data-swiping": M,
		"data-dismissible": F,
		"data-type": ge,
		"data-invert": je,
		"data-swipe-out": re,
		"data-swipe-direction": te,
		"data-expanded": !!(u || C && k),
		"data-testid": n.testId,
		style: {
			"--index": c,
			"--toasts-before": c,
			"--z-index": l.length - c,
			"--offset": `${ne ? se : Ce.current}px`,
			"--initial-height": C ? "auto" : `${le}px`,
			...m,
			...n.style
		},
		onDragEnd: () => {
			N(!1), D(null), Te.current = null;
		},
		onPointerDown: (e) => {
			e.button !== 2 && !Me && F && (fe.current = /* @__PURE__ */ new Date(), ce(Ce.current), e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (N(!0), Te.current = {
				x: e.clientX,
				y: e.clientY
			}));
		},
		onPointerUp: () => {
			if (re || !F) return;
			Te.current = null;
			let e = Number(pe.current?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(pe.current?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), r = (/* @__PURE__ */ new Date()).getTime() - fe.current?.getTime(), i = E === "x" ? e : t, a = Math.abs(i) / r;
			if ((E === "x" ? Ae.includes(e > 0 ? "right" : "left") : Ae.includes(t > 0 ? "bottom" : "top")) && (Math.abs(i) >= It || a > .11)) ce(Ce.current), n.onDismiss == null || n.onDismiss.call(n, n), O(E === "x" ? e > 0 ? "right" : "left" : t > 0 ? "down" : "up"), Ne(), ie(!0);
			else {
				var o, s;
				(o = pe.current) == null || o.style.setProperty("--swipe-amount-x", "0px"), (s = pe.current) == null || s.style.setProperty("--swipe-amount-y", "0px"), oe(!1), N(!1), D(null);
			}
		},
		onPointerMove: (e) => {
			var t, n;
			if (!Te.current || !F || window.getSelection()?.toString().length > 0) return;
			let r = e.clientY - Te.current.y, i = e.clientX - Te.current.x;
			!E && (Math.abs(i) > 1 || Math.abs(r) > 1) && D(Math.abs(i) > Math.abs(r) ? "x" : "y");
			let a = {
				x: 0,
				y: 0
			}, o = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (E === "y") {
				if (Ae.includes("top") || Ae.includes("bottom")) {
					if (Ae.includes("top") && r < 0 || Ae.includes("bottom") && r > 0) a.y = r;
					else {
						let e = r * o(r);
						a.y = Math.abs(e) < Math.abs(r) ? e : r;
					}
				}
			} else if (E === "x" && (Ae.includes("left") || Ae.includes("right"))) {
				if (Ae.includes("left") && i < 0 || Ae.includes("right") && i > 0) a.x = i;
				else {
					let e = i * o(i);
					a.x = Math.abs(e) < Math.abs(i) ? e : i;
				}
			}
			(Math.abs(a.x) > 0 || Math.abs(a.y) > 0) && oe(!0), (t = pe.current) == null || t.style.setProperty("--swipe-amount-x", `${a.x}px`), (n = pe.current) == null || n.style.setProperty("--swipe-amount-y", `${a.y}px`);
		}
	}, be && !n.jsx && ge !== "loading" ? /*#__PURE__*/ x.createElement("button", {
		"aria-label": ee,
		"data-disabled": Me,
		"data-close-button": !0,
		onClick: Me || !F ? () => {} : () => {
			Ne(), n.onDismiss == null || n.onDismiss.call(n, n);
		},
		className: Rt(w?.closeButton, n?.classNames?.closeButton)
	}, T?.close ?? xt) : null, (ge || n.icon || n.promise) && n.icon !== null && (T?.[ge] !== null || n.icon) ? /*#__PURE__*/ x.createElement("div", {
		"data-icon": "",
		className: Rt(w?.icon, n?.classNames?.icon)
	}, ge === "loading" ? n.icon || Pe() : n.promise ? Pe() : null, ge === "loading" ? null : Fe) : null, /*#__PURE__*/ x.createElement("div", {
		"data-content": "",
		className: Rt(w?.content, n?.classNames?.content)
	}, /*#__PURE__*/ x.createElement("div", {
		"data-title": "",
		className: Rt(w?.title, n?.classNames?.title)
	}, n.jsx ? n.jsx : typeof n.title == "function" ? n.title() : n.title), n.description ? /*#__PURE__*/ x.createElement("div", {
		"data-description": "",
		className: Rt(v, ve, w?.description, n?.classNames?.description)
	}, typeof n.description == "function" ? n.description() : n.description) : null), /*#__PURE__*/ x.isValidElement(n.cancel) ? n.cancel : n.cancel && kt(n.cancel) ? /*#__PURE__*/ x.createElement("button", {
		"data-button": !0,
		"data-cancel": !0,
		style: n.cancelButtonStyle || h,
		onClick: (e) => {
			kt(n.cancel) && F && (n.cancel.onClick == null || n.cancel.onClick.call(n.cancel, e), Ne());
		},
		className: Rt(w?.cancelButton, n?.classNames?.cancelButton)
	}, n.cancel.label) : null, /*#__PURE__*/ x.isValidElement(n.action) ? n.action : n.action && kt(n.action) ? /*#__PURE__*/ x.createElement("button", {
		"data-button": !0,
		"data-action": !0,
		style: n.actionButtonStyle || g,
		onClick: (e) => {
			kt(n.action) && (n.action.onClick == null || n.action.onClick.call(n.action, e), !e.defaultPrevented && Ne());
		},
		className: Rt(w?.actionButton, n?.classNames?.actionButton)
	}, n.action.label) : null);
};
function Vt() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Ht(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? Mt : jt;
		function o(e) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((t) => {
				n[`${i}-${t}`] = typeof e == "number" ? `${e}px` : e;
			});
		}
		typeof e == "number" || typeof e == "string" ? o(e) : typeof e == "object" ? [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((t) => {
			e[t] === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof e[t] == "number" ? `${e[t]}px` : e[t];
		}) : o(a);
	}), n;
}
var Ut = /*#__PURE__*/ x.forwardRef(function(e, t) {
	let { id: n, invert: r, position: i = "bottom-right", hotkey: a = ["altKey", "KeyT"], expand: o, closeButton: s, className: c, offset: l, mobileOffset: u, theme: d = "light", richColors: f, duration: p, style: m, visibleToasts: h = At, toastOptions: g, dir: _ = Vt(), gap: v = Ft, icons: y, customAriaLabel: b, containerAriaLabel: S = "Notifications" } = e, [C, w] = x.useState([]), T = x.useMemo(() => n ? C.filter((e) => e.toasterId === n) : C.filter((e) => !e.toasterId), [C, n]), ee = x.useMemo(() => Array.from(new Set([i].concat(T.filter((e) => e.position).map((e) => e.position)))), [T, i]), [E, D] = x.useState([]), [te, O] = x.useState(!1), [k, A] = x.useState(!1), [ne, j] = x.useState(d === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : d), M = x.useRef(null), N = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), re = x.useRef(null), ie = x.useRef(!1), ae = x.useCallback((e) => {
		w((t) => (t.find((t) => t.id === e.id)?.delete || Et.dismiss(e.id), t.filter(({ id: t }) => t !== e.id)));
	}, []);
	return x.useEffect(() => Et.subscribe((e) => {
		e.dismiss ? requestAnimationFrame(() => {
			w((t) => t.map((t) => t.id === e.id ? {
				...t,
				delete: !0
			} : t));
		}) : setTimeout(() => {
			ft.flushSync(() => {
				w((t) => {
					let n = t.findIndex((t) => t.id === e.id);
					return n === -1 ? [e, ...t] : [
						...t.slice(0, n),
						{
							...t[n],
							...e
						},
						...t.slice(n + 1)
					];
				});
			});
		});
	}), []), x.useEffect(() => {
		if (d !== "system") {
			j(d);
			return;
		}
		if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? j("dark") : j("light")), typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			e.addEventListener("change", ({ matches: e }) => {
				j(e ? "dark" : "light");
			});
		} catch {
			e.addListener(({ matches: e }) => {
				try {
					j(e ? "dark" : "light");
				} catch (e) {
					console.error(e);
				}
			});
		}
	}, [d]), x.useEffect(() => {
		C.length <= 1 && O(!1);
	}, [C]), x.useEffect(() => {
		let e = (e) => {
			if (a.length > 0 && a.every((t) => e[t] || e.code === t)) {
				var t;
				O(!0), (t = M.current) == null || t.focus();
			}
			e.code === "Escape" && (document.activeElement === M.current || M.current?.contains(document.activeElement)) && O(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [a]), x.useEffect(() => {
		if (M.current) return () => {
			re.current && (re.current.focus({ preventScroll: !0 }), re.current = null, ie.current = !1);
		};
	}, [M.current]), /*#__PURE__*/ x.createElement("section", {
		ref: t,
		"aria-label": b ?? `${S} ${N}`,
		tabIndex: -1,
		"aria-live": "polite",
		"aria-relevant": "additions text",
		"aria-atomic": "false",
		suppressHydrationWarning: !0,
		"data-react-aria-top-layer": !0
	}, ee.map((t, n) => {
		let [i, a] = t.split("-");
		return T.length ? /*#__PURE__*/ x.createElement("ol", {
			key: t,
			dir: _ === "auto" ? Vt() : _,
			tabIndex: -1,
			ref: M,
			className: c,
			"data-sonner-toaster": !0,
			"data-sonner-theme": ne,
			"data-y-position": i,
			"data-x-position": a,
			style: {
				"--front-toast-height": `${E[0]?.height || 0}px`,
				"--width": `${Pt}px`,
				"--gap": `${v}px`,
				...m,
				...Ht(l, u)
			},
			onBlur: (e) => {
				ie.current && !e.currentTarget.contains(e.relatedTarget) && (ie.current = !1, re.current &&= (re.current.focus({ preventScroll: !0 }), null));
			},
			onFocus: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || ie.current || (ie.current = !0, re.current = e.relatedTarget);
			},
			onMouseEnter: () => O(!0),
			onMouseMove: () => O(!0),
			onMouseLeave: () => {
				k || O(!1);
			},
			onDragEnd: () => O(!1),
			onPointerDown: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || A(!0);
			},
			onPointerUp: () => A(!1)
		}, T.filter((e) => !e.position && n === 0 || e.position === t).map((n, i) => /*#__PURE__*/ x.createElement(Bt, {
			key: n.id,
			icons: y,
			index: i,
			toast: n,
			defaultRichColors: f,
			duration: g?.duration ?? p,
			className: g?.className,
			descriptionClassName: g?.descriptionClassName,
			invert: r,
			visibleToasts: h,
			closeButton: g?.closeButton ?? s,
			interacting: k,
			position: t,
			style: g?.style,
			unstyled: g?.unstyled,
			classNames: g?.classNames,
			cancelButtonStyle: g?.cancelButtonStyle,
			actionButtonStyle: g?.actionButtonStyle,
			closeButtonAriaLabel: g?.closeButtonAriaLabel,
			removeToast: ae,
			toasts: T.filter((e) => e.position == n.position),
			heights: E.filter((e) => e.position == n.position),
			setHeights: D,
			expandByDefault: o,
			gap: v,
			expanded: te,
			swipeDirections: e.swipeDirections
		}))) : null;
	}));
});
// src/lib/ha.ts
function Wt(e) {
	Kt = e;
}
async function Gt(e, t = {}) {
	if (!Kt?.user?.is_admin) throw Error("Home Assistant administrator access is required");
	try {
		return await Kt.callWS({
			type: "px_account_manager/command",
			action: e,
			args: t
		});
	} catch (e) {
		throw Error(e?.message || "Home Assistant connection failed");
	}
}
var Kt, qt, L, Jt = o((() => {
	qt = class {
		table;
		operation = "select";
		values;
		filters = [];
		sort;
		count;
		one = !1;
		constructor(e) {
			this.table = e;
		}
		select(e) {
			return this;
		}
		insert(e) {
			return this.operation = "insert", this.values = e, this;
		}
		update(e) {
			return this.operation = "update", this.values = e, this;
		}
		delete() {
			return this.operation = "delete", this;
		}
		eq(e, t) {
			return this.filters.push([e, t]), this;
		}
		order(e, t) {
			return this.sort = [e, t.ascending], this;
		}
		limit(e) {
			return this.count = e, this;
		}
		single() {
			return this.one = !0, this;
		}
		maybeSingle() {
			return this.single();
		}
		async run() {
			try {
				if (this.operation === "select") {
					let e = await Gt("list", { table: this.table });
					if (e = e.filter((e) => this.filters.every(([t, n]) => e[t] === n)), this.sort) {
						let [t, n] = this.sort;
						e.sort((e, r) => String(e[t] ?? "").localeCompare(String(r[t] ?? "")) * (n ? 1 : -1));
					}
					return this.count !== void 0 && (e = e.slice(0, this.count)), {
						data: this.one ? e[0] ?? null : e,
						error: null
					};
				}
				if (this.table !== "plex_home_members") throw Error("Use the billing commands for account changes");
				let e = this.filters.find(([e]) => e === "id")?.[1];
				if (this.operation !== "insert" && typeof e != "string") throw Error("A member ID is required");
				return {
					data: await Gt(this.operation === "insert" ? "create_member" : this.operation === "update" ? "update_member" : "delete_member", this.operation === "insert" ? this.values : {
						id: e,
						values: this.values
					}),
					error: null
				};
			} catch (e) {
				return {
					data: null,
					error: e
				};
			}
		}
		then(e, t) {
			return this.run().then(e, t);
		}
	}, L = {
		from: (e) => new qt(e),
		auth: { getUser: async () => ({ data: { user: Kt.user } }) }
	};
}));
// src/theme.tsx
Jt();
var Yt = "px-account-manager-theme", Xt = (0, x.createContext)({
	preference: "auto",
	setPreference: () => {}
});
function Zt() {
	let { preference: e, setPreference: t } = (0, x.useContext)(Xt);
	return /* @__PURE__ */ (0, S.jsxs)("label", {
		className: "flex items-center gap-2 text-xs text-muted-foreground",
		children: [/* @__PURE__ */ (0, S.jsx)("span", { children: "Theme" }), /* @__PURE__ */ (0, S.jsxs)("select", {
			"aria-label": "Color theme",
			value: e,
			onChange: (e) => t(e.target.value),
			className: "h-9 max-w-44 rounded-md border border-input bg-background px-2 text-sm text-foreground",
			children: [
				/* @__PURE__ */ (0, S.jsx)("option", {
					value: "auto",
					children: "Follow Home Assistant"
				}),
				/* @__PURE__ */ (0, S.jsx)("option", {
					value: "light",
					children: "Light"
				}),
				/* @__PURE__ */ (0, S.jsx)("option", {
					value: "dark",
					children: "Dark"
				})
			]
		})]
	});
}
// src/lib/plex.functions.ts
var Qt = (e) => (t) => Gt("plex", {
	operation: e,
	...t.data
}), $t = Qt("test"), en = Qt("invite"), tn = Qt("remove"), nn = Qt("sync"), rn = Qt("convert"), an = Qt("revoke");
// src/lib/outlook-signup.ts
function on(e) {
	let t = e.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
	return `https://signup.live.com/signup?${new URLSearchParams({
		lic: "1",
		username: t
	}).toString()}`;
}
function sn(e) {
	let t = e.trim().toLowerCase().normalize("NFKD").replace(/[^\w\s.-]/g, "").replace(/\s+/g, ".");
	if (!t) return [];
	let n = (/* @__PURE__ */ new Date()).getFullYear().toString().slice(-2);
	return [
		t,
		`${t}${Math.floor(10 + Math.random() * 89)}`,
		`${t}.${n}`
	];
}
// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var cn = Object.defineProperty, ln = (e, t) => cn(e, "name", {
	value: t,
	configurable: !0
});
function un(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
ln(un, "setRef");
function dn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = un(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : un(e[t], null);
			}
		};
	};
}
ln(dn, "composeRefs");
function R(...e) {
	return x.useCallback(dn(...e), e);
}
ln(R, "useComposedRefs");
// node_modules/@radix-ui/react-slot/dist/index.mjs
var fn = Object.defineProperty, pn = (e, t) => fn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function mn(e) {
	let t = x.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		r = Tn(r), x.Children.forEach(r, (e) => {
			if (xn(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				for (; Cn(n) && typeof kn == "function";) n = kn(n._payload);
				a = vn(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = x.cloneElement(a, void 0, s) : !o && x.Children.count(r) === 1 && x.isValidElement(r) && (a = r);
		let c = a ? bn(a) : void 0, l = R(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? On(e) : Dn(e));
			return r;
		}
		let u = yn(i, a.props ?? {});
		return a.type !== x.Fragment && (u.ref = n ? l : c), x.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
pn(mn, "createSlot");
var hn = /* @__PURE__ */ mn("Slot"), gn = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function _n(e) {
	let t = /* @__PURE__ */ pn((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = gn, t;
}
pn(_n, "createSlottable");
var vn = /* @__PURE__ */ pn((e, t) => "child" in e.props ? x.isValidElement(t) ? x.cloneElement(t, void 0, e.props.children(t.props.children)) : null : x.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function yn(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = En(a, i));
	}
	return {
		...e,
		...n
	};
}
pn(yn, "mergeProps");
function bn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
pn(bn, "getElementRef");
function xn(e) {
	return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gn;
}
pn(xn, "isSlottable");
var Sn = Symbol.for("react.lazy");
function Cn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Sn && "_payload" in e && wn(e._payload);
}
pn(Cn, "isLazyComponent");
function wn(e) {
	return typeof e == "object" && !!e && "then" in e;
}
pn(wn, "isPromiseLike");
function Tn(e) {
	let t = e;
	for (; Cn(t) && typeof kn == "function";) t = kn(t._payload);
	return t;
}
pn(Tn, "useUnwrappedLazy");
function En(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
pn(En, "concatAriaDescribedby");
var Dn = /* @__PURE__ */ pn((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), On = /* @__PURE__ */ pn((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), kn = x.use;
// node_modules/clsx/dist/clsx.mjs
function An(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = An(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function jn() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = An(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/class-variance-authority/dist/index.mjs
var Mn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Nn = jn, Pn = (e, t) => (n) => {
	if (t?.variants == null) return Nn(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Mn(t) || Mn(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Nn(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, Fn = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, In = (e, t) => ({
	classGroupId: e,
	validator: t
}), Ln = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Rn = "-", zn = [], Bn = "arbitrary..", Vn = (e) => {
	let t = Wn(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Un(e);
			let n = e.split(Rn);
			return Hn(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Fn(i, t) : t : i || zn;
			}
			return n[e] || zn;
		}
	};
}, Hn = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Hn(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Rn) : e.slice(t).join(Rn), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Un = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Bn + r : void 0;
})(), Wn = (e) => {
	let { theme: t, classGroups: n } = e;
	return Gn(n, t);
}, Gn = (e, t) => {
	let n = Ln();
	for (let r in e) {
		let i = e[r];
		Kn(i, n, r, t);
	}
	return n;
}, Kn = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		qn(i, t, n, r);
	}
}, qn = (e, t, n, r) => {
	typeof e == "string" ? Jn(e, t, n) : typeof e == "function" ? Yn(e, t, n, r) : Xn(e, t, n, r);
}, Jn = (e, t, n) => {
	let r = e === "" ? t : Zn(t, e);
	r.classGroupId = n;
}, Yn = (e, t, n, r) => {
	Qn(e) ? Kn(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(In(n, e)));
}, Xn = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Kn(o, Zn(t, a), n, r);
	}
}, Zn = (e, t) => {
	let n = e, r = t.split(Rn), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Ln(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Qn = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, $n = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, er = "!", tr = ":", nr = [], rr = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), ir = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === tr) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(er) ? (c = s.slice(0, -1), l = !0) : s.startsWith(er) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return rr(t, l, c, u);
	};
	if (t) {
		let e = t + tr, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : rr(nr, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ar = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, or = (e) => ({
	cache: $n(e.cacheSize),
	parseClassName: ir(e),
	sortModifiers: ar(e),
	postfixLookupClassGroupIds: sr(e),
	...Vn(e)
}), sr = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, cr = /\s+/, lr = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(cr), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h || (g = r(p), !g)) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + er : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, ur = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = dr(n)) && (i && (i += " "), i += r);
	return i;
}, dr = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = dr(e[r])) && (n && (n += " "), n += t);
	return n;
}, fr = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = or(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = lr(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ur(...e));
}, pr = [], mr = (e) => {
	let t = (t) => t[e] || pr;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, hr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, gr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, _r = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, vr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, br = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, xr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Cr = (e) => _r.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), wr = (e) => !!e && Number.isInteger(Number(e)), Tr = (e) => e.endsWith("%") && z(e.slice(0, -1)), Er = (e) => vr.test(e), Dr = () => !0, Or = (e) => yr.test(e) && !br.test(e), kr = () => !1, Ar = (e) => xr.test(e), jr = (e) => Sr.test(e), Mr = (e) => !B(e) && !V(e), Nr = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Pr = (e) => Yr(e, $r, kr), B = (e) => hr.test(e), Fr = (e) => Yr(e, ei, Or), Ir = (e) => Yr(e, ti, z), Lr = (e) => Yr(e, ri, Dr), Rr = (e) => Yr(e, ni, kr), zr = (e) => Yr(e, Zr, kr), Br = (e) => Yr(e, Qr, jr), Vr = (e) => Yr(e, ii, Ar), V = (e) => gr.test(e), Hr = (e) => Xr(e, ei), Ur = (e) => Xr(e, ni), Wr = (e) => Xr(e, Zr), Gr = (e) => Xr(e, $r), Kr = (e) => Xr(e, Qr), qr = (e) => Xr(e, ii, !0), Jr = (e) => Xr(e, ri, !0), Yr = (e, t, n) => {
	let r = hr.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Xr = (e, t, n = !1) => {
	let r = gr.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Zr = (e) => e === "position" || e === "percentage", Qr = (e) => e === "image" || e === "url", $r = (e) => e === "length" || e === "size" || e === "bg-size", ei = (e) => e === "length", ti = (e) => e === "number", ni = (e) => e === "family-name", ri = (e) => e === "number" || e === "weight", ii = (e) => e === "shadow", ai = /*#__PURE__*/ fr(() => {
	let e = mr("color"), t = mr("font"), n = mr("text"), r = mr("font-weight"), i = mr("tracking"), a = mr("leading"), o = mr("breakpoint"), s = mr("container"), c = mr("spacing"), l = mr("radius"), u = mr("shadow"), d = mr("inset-shadow"), f = mr("text-shadow"), p = mr("drop-shadow"), m = mr("blur"), h = mr("perspective"), g = mr("aspect"), _ = mr("ease"), v = mr("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		V,
		B
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		V,
		B,
		c
	], T = () => [
		Cr,
		"full",
		"auto",
		...w()
	], ee = () => [
		wr,
		"none",
		"subgrid",
		V,
		B
	], E = () => [
		"auto",
		{ span: [
			"full",
			wr,
			V,
			B
		] },
		wr,
		V,
		B
	], D = () => [
		wr,
		"auto",
		V,
		B
	], te = () => [
		"auto",
		"min",
		"max",
		"fr",
		V,
		B
	], O = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], k = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], A = () => ["auto", ...w()], ne = () => [
		Cr,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		s,
		Cr,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], M = () => [
		Cr,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], N = () => [
		e,
		V,
		B
	], re = () => [
		...b(),
		Wr,
		zr,
		{ position: [V, B] }
	], ie = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ae = () => [
		"auto",
		"cover",
		"contain",
		Gr,
		Pr,
		{ size: [V, B] }
	], oe = () => [
		Tr,
		Hr,
		Fr
	], se = () => [
		"",
		"none",
		"full",
		l,
		V,
		B
	], ce = () => [
		"",
		z,
		Hr,
		Fr
	], le = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ue = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], de = () => [
		z,
		Tr,
		Wr,
		zr
	], fe = () => [
		"",
		"none",
		m,
		V,
		B
	], pe = () => [
		"none",
		z,
		V,
		B
	], me = () => [
		"none",
		z,
		V,
		B
	], he = () => [
		z,
		V,
		B
	], ge = () => [
		Cr,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Er],
			breakpoint: [Er],
			color: [Dr],
			container: [Er],
			"drop-shadow": [Er],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Mr],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Er],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Er],
			shadow: [Er],
			spacing: ["px", z],
			text: [Er],
			"text-shadow": [Er],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Cr,
				B,
				V,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				V,
				B
			] }],
			"container-named": [Nr],
			columns: [{ columns: [
				z,
				"auto",
				B,
				V,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				wr,
				"auto",
				V,
				B
			] }],
			basis: [{ basis: [
				Cr,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				z,
				Cr,
				"auto",
				"initial",
				"none",
				B
			] }],
			grow: [{ grow: [
				"",
				z,
				V,
				B
			] }],
			shrink: [{ shrink: [
				"",
				z,
				V,
				B
			] }],
			order: [{ order: [
				wr,
				"first",
				"last",
				"none",
				V,
				B
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": D() }],
			"col-end": [{ "col-end": D() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": D() }],
			"row-end": [{ "row-end": D() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": te() }],
			"auto-rows": [{ "auto-rows": te() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...O(), "normal"] }],
			"justify-items": [{ "justify-items": [...k(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...k()] }],
			"align-content": [{ content: ["normal", ...O()] }],
			"align-items": [{ items: [...k(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...k(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": O() }],
			"place-items": [{ "place-items": [...k(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...k()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: A() }],
			mx: [{ mx: A() }],
			my: [{ my: A() }],
			ms: [{ ms: A() }],
			me: [{ me: A() }],
			mbs: [{ mbs: A() }],
			mbe: [{ mbe: A() }],
			mt: [{ mt: A() }],
			mr: [{ mr: A() }],
			mb: [{ mb: A() }],
			ml: [{ ml: A() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ne() }],
			"inline-size": [{ inline: ["auto", ...j()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...j()] }],
			"max-inline-size": [{ "max-inline": ["none", ...j()] }],
			"block-size": [{ block: ["auto", ...M()] }],
			"min-block-size": [{ "min-block": ["auto", ...M()] }],
			"max-block-size": [{ "max-block": ["none", ...M()] }],
			w: [{ w: [
				s,
				"screen",
				...ne()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ne()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ne()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ne()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ne()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...ne()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Hr,
				Fr
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Jr,
				Lr
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Tr,
				B
			] }],
			"font-family": [{ font: [
				Ur,
				Rr,
				t
			] }],
			"font-features": [{ "font-features": [B] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				V,
				B
			] }],
			"line-clamp": [{ "line-clamp": [
				z,
				"none",
				V,
				Ir
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				V,
				B
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				V,
				B
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: N() }],
			"text-color": [{ text: N() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...le(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				z,
				"from-font",
				"auto",
				V,
				Fr
			] }],
			"text-decoration-color": [{ decoration: N() }],
			"underline-offset": [{ "underline-offset": [
				z,
				"auto",
				V,
				B
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				wr,
				V,
				B
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				V,
				B
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				V,
				B
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: re() }],
			"bg-repeat": [{ bg: ie() }],
			"bg-size": [{ bg: ae() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						wr,
						V,
						B
					],
					radial: [
						"",
						V,
						B
					],
					conic: [
						"",
						wr,
						V,
						B
					]
				},
				Kr,
				Br
			] }],
			"bg-color": [{ bg: N() }],
			"gradient-from-pos": [{ from: oe() }],
			"gradient-via-pos": [{ via: oe() }],
			"gradient-to-pos": [{ to: oe() }],
			"gradient-from": [{ from: N() }],
			"gradient-via": [{ via: N() }],
			"gradient-to": [{ to: N() }],
			rounded: [{ rounded: se() }],
			"rounded-s": [{ "rounded-s": se() }],
			"rounded-e": [{ "rounded-e": se() }],
			"rounded-t": [{ "rounded-t": se() }],
			"rounded-r": [{ "rounded-r": se() }],
			"rounded-b": [{ "rounded-b": se() }],
			"rounded-l": [{ "rounded-l": se() }],
			"rounded-ss": [{ "rounded-ss": se() }],
			"rounded-se": [{ "rounded-se": se() }],
			"rounded-ee": [{ "rounded-ee": se() }],
			"rounded-es": [{ "rounded-es": se() }],
			"rounded-tl": [{ "rounded-tl": se() }],
			"rounded-tr": [{ "rounded-tr": se() }],
			"rounded-br": [{ "rounded-br": se() }],
			"rounded-bl": [{ "rounded-bl": se() }],
			"border-w": [{ border: ce() }],
			"border-w-x": [{ "border-x": ce() }],
			"border-w-y": [{ "border-y": ce() }],
			"border-w-s": [{ "border-s": ce() }],
			"border-w-e": [{ "border-e": ce() }],
			"border-w-bs": [{ "border-bs": ce() }],
			"border-w-be": [{ "border-be": ce() }],
			"border-w-t": [{ "border-t": ce() }],
			"border-w-r": [{ "border-r": ce() }],
			"border-w-b": [{ "border-b": ce() }],
			"border-w-l": [{ "border-l": ce() }],
			"divide-x": [{ "divide-x": ce() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ce() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...le(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...le(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: N() }],
			"border-color-x": [{ "border-x": N() }],
			"border-color-y": [{ "border-y": N() }],
			"border-color-s": [{ "border-s": N() }],
			"border-color-e": [{ "border-e": N() }],
			"border-color-bs": [{ "border-bs": N() }],
			"border-color-be": [{ "border-be": N() }],
			"border-color-t": [{ "border-t": N() }],
			"border-color-r": [{ "border-r": N() }],
			"border-color-b": [{ "border-b": N() }],
			"border-color-l": [{ "border-l": N() }],
			"divide-color": [{ divide: N() }],
			"outline-style": [{ outline: [
				...le(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				z,
				V,
				B
			] }],
			"outline-w": [{ outline: [
				"",
				z,
				Hr,
				Fr
			] }],
			"outline-color": [{ outline: N() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				qr,
				Vr
			] }],
			"shadow-color": [{ shadow: N() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				qr,
				Vr
			] }],
			"inset-shadow-color": [{ "inset-shadow": N() }],
			"ring-w": [{ ring: ce() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: N() }],
			"ring-offset-w": [{ "ring-offset": [z, Fr] }],
			"ring-offset-color": [{ "ring-offset": N() }],
			"inset-ring-w": [{ "inset-ring": ce() }],
			"inset-ring-color": [{ "inset-ring": N() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				qr,
				Vr
			] }],
			"text-shadow-color": [{ "text-shadow": N() }],
			opacity: [{ opacity: [
				z,
				V,
				B
			] }],
			"mix-blend": [{ "mix-blend": [
				...ue(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ue() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [z] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": de() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": de() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": N() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": N() }],
			"mask-image-t-from-pos": [{ "mask-t-from": de() }],
			"mask-image-t-to-pos": [{ "mask-t-to": de() }],
			"mask-image-t-from-color": [{ "mask-t-from": N() }],
			"mask-image-t-to-color": [{ "mask-t-to": N() }],
			"mask-image-r-from-pos": [{ "mask-r-from": de() }],
			"mask-image-r-to-pos": [{ "mask-r-to": de() }],
			"mask-image-r-from-color": [{ "mask-r-from": N() }],
			"mask-image-r-to-color": [{ "mask-r-to": N() }],
			"mask-image-b-from-pos": [{ "mask-b-from": de() }],
			"mask-image-b-to-pos": [{ "mask-b-to": de() }],
			"mask-image-b-from-color": [{ "mask-b-from": N() }],
			"mask-image-b-to-color": [{ "mask-b-to": N() }],
			"mask-image-l-from-pos": [{ "mask-l-from": de() }],
			"mask-image-l-to-pos": [{ "mask-l-to": de() }],
			"mask-image-l-from-color": [{ "mask-l-from": N() }],
			"mask-image-l-to-color": [{ "mask-l-to": N() }],
			"mask-image-x-from-pos": [{ "mask-x-from": de() }],
			"mask-image-x-to-pos": [{ "mask-x-to": de() }],
			"mask-image-x-from-color": [{ "mask-x-from": N() }],
			"mask-image-x-to-color": [{ "mask-x-to": N() }],
			"mask-image-y-from-pos": [{ "mask-y-from": de() }],
			"mask-image-y-to-pos": [{ "mask-y-to": de() }],
			"mask-image-y-from-color": [{ "mask-y-from": N() }],
			"mask-image-y-to-color": [{ "mask-y-to": N() }],
			"mask-image-radial": [{ "mask-radial": [V, B] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": de() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": de() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": N() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": N() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [z] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": de() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": de() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": N() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": N() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: re() }],
			"mask-repeat": [{ mask: ie() }],
			"mask-size": [{ mask: ae() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				V,
				B
			] }],
			filter: [{ filter: [
				"",
				"none",
				V,
				B
			] }],
			blur: [{ blur: fe() }],
			brightness: [{ brightness: [
				z,
				V,
				B
			] }],
			contrast: [{ contrast: [
				z,
				V,
				B
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				qr,
				Vr
			] }],
			"drop-shadow-color": [{ "drop-shadow": N() }],
			grayscale: [{ grayscale: [
				"",
				z,
				V,
				B
			] }],
			"hue-rotate": [{ "hue-rotate": [
				z,
				V,
				B
			] }],
			invert: [{ invert: [
				"",
				z,
				V,
				B
			] }],
			saturate: [{ saturate: [
				z,
				V,
				B
			] }],
			sepia: [{ sepia: [
				"",
				z,
				V,
				B
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				V,
				B
			] }],
			"backdrop-blur": [{ "backdrop-blur": fe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				z,
				V,
				B
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				z,
				V,
				B
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				z,
				V,
				B
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				z,
				V,
				B
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				z,
				V,
				B
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				z,
				V,
				B
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				z,
				V,
				B
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				z,
				V,
				B
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				V,
				B
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				z,
				"initial",
				V,
				B
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				V,
				B
			] }],
			delay: [{ delay: [
				z,
				V,
				B
			] }],
			animate: [{ animate: [
				"none",
				v,
				V,
				B
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				V,
				B
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: pe() }],
			"rotate-x": [{ "rotate-x": pe() }],
			"rotate-y": [{ "rotate-y": pe() }],
			"rotate-z": [{ "rotate-z": pe() }],
			scale: [{ scale: me() }],
			"scale-x": [{ "scale-x": me() }],
			"scale-y": [{ "scale-y": me() }],
			"scale-z": [{ "scale-z": me() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: he() }],
			"skew-x": [{ "skew-x": he() }],
			"skew-y": [{ "skew-y": he() }],
			transform: [{ transform: [
				V,
				B,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ge() }],
			"translate-x": [{ "translate-x": ge() }],
			"translate-y": [{ "translate-y": ge() }],
			"translate-z": [{ "translate-z": ge() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				wr,
				V,
				B
			] }],
			accent: [{ accent: N() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: N() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				V,
				B
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": N() }],
			"scrollbar-track-color": [{ "scrollbar-track": N() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				V,
				B
			] }],
			fill: [{ fill: ["none", ...N()] }],
			"stroke-w": [{ stroke: [
				z,
				Hr,
				Fr,
				Ir
			] }],
			stroke: [{ stroke: ["none", ...N()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
// src/lib/utils.ts
function H(...e) {
	return ai(jn(e));
}
// src/components/ui/button.tsx
var oi = Pn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), si = x.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ (0, S.jsx)(r ? hn : "button", {
	className: H(oi({
		variant: t,
		size: n,
		className: e
	})),
	ref: a,
	...i
}));
si.displayName = "Button";
// src/components/ui/input.tsx
var ci = x.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)("input", {
	type: t,
	className: H("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	ref: r,
	...n
}));
ci.displayName = "Input";
// node_modules/@radix-ui/react-primitive/dist/index.mjs
var li = Object.defineProperty, ui = (e, t) => li(e, "name", {
	value: t,
	configurable: !0
}), U = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ mn(`Primitive.${t}`), r = x.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, S.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function di(e, t) {
	e && ft.flushSync(() => e.dispatchEvent(t));
}
ui(di, "dispatchDiscreteCustomEvent");
// node_modules/@radix-ui/react-label/dist/index.mjs
var fi = Object.defineProperty, pi = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ ((e, t) => fi(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ (0, S.jsx)(U.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), mi = Pn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), hi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(pi, {
	ref: n,
	className: H(mi(), e),
	...t
}));
hi.displayName = pi.displayName;
// src/components/ui/textarea.tsx
var gi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("textarea", {
	className: H("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	ref: n,
	...t
}));
gi.displayName = "Textarea";
// src/components/ui/badge.tsx
var _i = Pn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function vi({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ (0, S.jsx)("div", {
		className: H(_i({ variant: t }), e),
		...n
	});
}
// src/components/ui/card.tsx
var yi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	"data-slot": "card",
	className: H("rounded-xl border bg-card text-card-foreground shadow", e),
	...t
}));
yi.displayName = "Card";
var bi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: H("flex flex-col space-y-1.5 p-6", e),
	...t
}));
bi.displayName = "CardHeader";
var xi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: H("font-semibold leading-none tracking-tight", e),
	...t
}));
xi.displayName = "CardTitle";
var Si = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: H("text-sm text-muted-foreground", e),
	...t
}));
Si.displayName = "CardDescription";
var Ci = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: H("p-6 pt-0", e),
	...t
}));
Ci.displayName = "CardContent";
var wi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: H("flex items-center p-6 pt-0", e),
	...t
}));
wi.displayName = "CardFooter";
// src/components/ui/table.tsx
var Ti = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	"data-slot": "table-container",
	className: "relative w-full overflow-auto rounded-lg border border-border",
	children: /* @__PURE__ */ (0, S.jsx)("table", {
		ref: n,
		className: H("w-full caption-bottom text-sm", e),
		...t
	})
}));
Ti.displayName = "Table";
var Ei = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("thead", {
	ref: n,
	className: H("[&_tr]:border-b", e),
	...t
}));
Ei.displayName = "TableHeader";
var Di = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("tbody", {
	ref: n,
	className: H("[&_tr:last-child]:border-0", e),
	...t
}));
Di.displayName = "TableBody";
var Oi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("tfoot", {
	ref: n,
	className: H("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
	...t
}));
Oi.displayName = "TableFooter";
var ki = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("tr", {
	ref: n,
	className: H("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
	...t
}));
ki.displayName = "TableRow";
var W = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("th", {
	ref: n,
	className: H("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
	...t
}));
W.displayName = "TableHead";
var G = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("td", {
	ref: n,
	className: H("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
	...t
}));
G.displayName = "TableCell";
var Ai = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("caption", {
	ref: n,
	className: H("mt-4 text-sm text-muted-foreground", e),
	...t
}));
Ai.displayName = "TableCaption";
// src/portal.tsx
var ji = (0, x.createContext)(void 0), Mi = () => (0, x.useContext)(ji), Ni = Object.defineProperty, Pi = (e, t) => Ni(e, "name", {
	value: t,
	configurable: !0
}), Fi = !!(typeof window < "u" && window.document && window.document.createElement);
function K(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Pi(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Pi(K, "composeEventHandlers");
function Ii(e) {
	if (!Fi) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Pi(Ii, "getOwnerWindow");
function Li(e) {
	if (!Fi) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Pi(Li, "getOwnerDocument");
function Ri(e, t = !1) {
	let { activeElement: n } = Li(e);
	if (!n?.nodeName) return null;
	if (zi(n) && n.contentDocument) return Ri(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Li(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Pi(Ri, "getActiveElement");
function zi(e) {
	return e.tagName === "IFRAME";
}
Pi(zi, "isFrame");
// node_modules/@radix-ui/react-context/dist/index.mjs
var Bi = Object.defineProperty, Vi = (e, t) => Bi(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Hi(e, t) {
	let n = x.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ Vi((e) => {
		let { children: t, ...r } = e, i = x.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, S.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = x.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return Vi(i, "useContext"), [r, i];
}
Vi(Hi, "createContext");
// @__NO_SIDE_EFFECTS__
function Ui(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = x.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ Vi((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = x.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, S.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = x.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return Vi(s, "useContext"), [o, s];
	}
	Vi(r, "createContext");
	let i = /* @__PURE__ */ Vi(() => {
		let t = n.map((e) => x.createContext(e));
		return /* @__PURE__ */ Vi(function(n) {
			let r = n?.[e] || t;
			return x.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, Wi(i, ...t)];
}
Vi(Ui, "createContextScope");
function Wi(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ Vi(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ Vi(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return x.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
Vi(Wi, "composeContextScopes");
// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Gi = globalThis?.document ? x.useLayoutEffect : () => {}, Ki = Object.defineProperty, qi = (e, t) => Ki(e, "name", {
	value: t,
	configurable: !0
}), Ji = x.useEffectEvent, Yi = x.useInsertionEffect;
function Xi(e) {
	if (typeof Ji == "function") return Ji(e);
	let t = x.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Yi == "function" ? Yi(() => {
		t.current = e;
	}) : Gi(() => {
		t.current = e;
	}), x.useMemo(() => ((...e) => t.current?.(...e)), []);
}
qi(Xi, "useEffectEvent");
// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Zi = Object.defineProperty, q = (e, t) => Zi(e, "name", {
	value: t,
	configurable: !0
}), Qi = x.useInsertionEffect || Gi;
function $i({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ q(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = ea({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, x.useCallback((t) => {
		if (s) {
			let n = ta(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
q($i, "useControllableState");
function ea({ defaultProp: e, onChange: t }) {
	let [n, r] = x.useState(e), i = x.useRef(n), a = x.useRef(t);
	return Qi(() => {
		a.current = t;
	}, [t]), x.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
q(ea, "useUncontrolledState");
function ta(e) {
	return typeof e == "function";
}
q(ta, "isFunction");
var na = Symbol("RADIX:SYNC_STATE");
function ra(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Xi(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = x.useReducer((t, n) => {
		if (n.type === na) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), p = d.state, m = x.useRef(p);
	x.useEffect(() => {
		m.current !== p && (m.current = p, c || l(p));
	}, [
		p,
		m,
		c
	]);
	let h = x.useMemo(() => i === void 0 ? d : {
		...d,
		state: i
	}, [d, i]);
	return x.useEffect(() => {
		c && !Object.is(i, d.state) && f({
			type: na,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [h, f];
}
q(ra, "useControllableStateReducer");
// node_modules/@radix-ui/react-collection/dist/index.mjs
var ia = Object.defineProperty, aa = (e, t) => ia(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function oa(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Ui(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = /* @__PURE__ */ aa((e) => {
		let { scope: t, children: n } = e, r = x.useRef(null), a = x.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, S.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ mn(s), l = x.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = R(t, a(s, n).collectionRef);
		return /* @__PURE__ */ (0, S.jsx)(c, {
			ref: i,
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ mn(u), p = x.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = x.useRef(null), s = R(t, o), c = a(u, n);
		return x.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ (0, S.jsx)(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return x.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return aa(m, "useCollection"), [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
aa(oa, "createCollection");
var sa = /* @__PURE__ */ new WeakMap(), ca = class e extends Map {
	static {
		aa(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], sa.set(this, !0);
	}
	set(e, t) {
		return sa.get(this) && !this.has(e) && this.#e.push(e), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = r ? this.size : this.size + 1, a = da(e), o = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
		if (r ? this.#e.indexOf(t) === o : o === this.size) return this.set(t, n), this;
		let s = this.#e.filter((e) => e !== t);
		s.splice(o, 0, t);
		let c = s.map((e) => [e, e === t ? n : this.get(e)]);
		this.clear();
		for (let [e, t] of c) this.set(e, t);
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		if (r === -1) return this;
		let i = this.#e.indexOf(t), a = i !== -1 && i < r ? r - 1 : r;
		return this.insert(a, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		if (r === -1) return this;
		let i = this.#e.indexOf(t), a = i !== -1 && i <= r ? r : r + 1;
		return this.insert(a, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = la(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = la(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return la(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = e.length > 1;
		if (!r && this.size === 0) throw TypeError("Reduce of empty OrderedDict with no initial value");
		let i = 0, a = n;
		for (let e of this) a = i === 0 && !r ? e : Reflect.apply(t, this, [
			a,
			e,
			i,
			this
		]), i++;
		return a;
	}
	reduceRight(...e) {
		let [t, n] = e, r = e.length > 1;
		if (!r && this.size === 0) throw TypeError("Reduce of empty OrderedDict with no initial value");
		let i = n;
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.entryAt(e);
			i = e === this.size - 1 && !r ? n : Reflect.apply(t, this, [
				i,
				n,
				e,
				this
			]);
		}
		return i;
	}
	sort(e) {
		if (typeof e != "function") throw TypeError("OrderedDict.sort requires a compare function");
		let t = [...this.entries()].sort(e);
		this.clear();
		for (let [e, n] of t) this.set(e, n);
		return this;
	}
	toSorted(t) {
		if (typeof t != "function") throw TypeError("OrderedDict.toSorted requires a compare function");
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e();
		for (let e of this.#e.slice(t, n)) r.set(e, this.get(e));
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function la(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = ua(e, t);
	return n === -1 ? void 0 : e[n];
}
aa(la, "at");
function ua(e, t) {
	let n = e.length, r = da(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
aa(ua, "toSafeIndex");
function da(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
aa(da, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function fa(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Ui(t), [i, a] = n(t);
	i.displayName = e + "CollectionStableContextProvider";
	let [o, s] = n(t);
	o.displayName = e + "CollectionStatefulContextProvider";
	let c = /* @__PURE__ */ aa(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, S.jsx)(u, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, S.jsx)(l, { ...t }), "CollectionProvider");
	c.displayName = t;
	let l = /* @__PURE__ */ aa((e) => {
		let t = _();
		return /* @__PURE__ */ (0, S.jsx)(u, {
			...e,
			state: t
		});
	}, "CollectionInit");
	l.displayName = e + "CollectionInit";
	let u = /* @__PURE__ */ aa((e) => {
		let { scope: t, children: n, state: r } = e, a = x.useRef(null), [s, c] = x.useState(null), l = R(a, c), [u, d] = r, f = x.useRef(new ca()), p = x.useCallback(() => {
			let e = f.current;
			return ha(e) || e.sort(ga), e;
		}, []);
		return x.useEffect(() => {
			if (!s) return;
			let e = _a(() => {
				d((e) => {
					let t = e.toSorted(ga);
					return t.some(([t], n) => e.keyAt(n) !== t) ? t : e;
				});
			});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s, d]), /* @__PURE__ */ (0, S.jsx)(i, {
			scope: t,
			collectionElementRef: l,
			collectionElementRefObject: a,
			getCollection: p,
			setCollection: d,
			registryRef: f,
			children: /* @__PURE__ */ (0, S.jsx)(o, {
				scope: t,
				collectionElement: s,
				collection: u,
				children: n
			})
		});
	}, "CollectionProviderImpl");
	u.displayName = e + "CollectionProviderImpl";
	let d = e + "CollectionSlot", f = /* @__PURE__ */ mn(d), p = x.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = R(t, a(d, n).collectionElementRef);
		return /* @__PURE__ */ (0, S.jsx)(f, {
			ref: i,
			children: r
		});
	});
	p.displayName = d;
	let m = e + "CollectionItemSlot", h = /* @__PURE__ */ mn(m), g = x.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = x.useRef(null), { setCollection: s, registryRef: c } = a(m, n), l = x.useRef(i);
		pa(l.current, i) || (l.current = i);
		let u = l.current, d = R(t, x.useCallback((e) => {
			let t = c.current;
			e ? t.set(e, {
				...l.current,
				element: e
			}) : o.current && t.delete(o.current);
		}, [c]), o);
		Gi(() => {
			let e = o.current, t = c.current;
			e && t.has(e) && t.set(e, {
				...u,
				element: e
			});
		}, [u, c]);
		let f = x.useRef(null);
		return x.useEffect(() => {
			let e = o.current, t = f.current;
			((t?.element ?? null) !== e || e && t?.itemData !== u) && (f.current = e ? {
				element: e,
				itemData: u
			} : null, s((n) => {
				let r = new ca(n);
				return t && t.element !== e && r.delete(t.element), e && r.set(e, {
					...u,
					element: e
				}), r.sort(ga);
			}));
		}), x.useEffect(() => () => {
			let e = f.current;
			f.current = null, e && s((t) => {
				if (!t.has(e.element)) return t;
				let n = new ca(t);
				return n.delete(e.element), n;
			});
		}, [s]), /* @__PURE__ */ (0, S.jsx)(h, {
			"data-radix-collection-item": "",
			ref: d,
			children: r
		});
	});
	g.displayName = m;
	function _() {
		return x.useState(new ca());
	}
	aa(_, "useInitCollection");
	function v(t) {
		let { collection: n } = s(e + "CollectionConsumer", t);
		return n;
	}
	aa(v, "useCollection");
	function y(t) {
		let { getCollection: n } = a(e + "CollectionConsumer", t);
		return n;
	}
	return aa(y, "useGetCollection"), [{
		Provider: c,
		Slot: p,
		ItemSlot: g
	}, {
		createCollectionScope: r,
		useCollection: v,
		useGetCollection: y,
		useInitCollection: _
	}];
}
aa(fa, "createCollection");
function pa(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
aa(pa, "shallowEqual");
function ma(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
aa(ma, "isElementPreceding");
function ha(e) {
	let t;
	for (let n of e.keys()) {
		if (t) {
			let e = t.compareDocumentPosition(n);
			if (!(e & Node.DOCUMENT_POSITION_DISCONNECTED) && e & Node.DOCUMENT_POSITION_PRECEDING) return !1;
		}
		t = n;
	}
	return !0;
}
aa(ha, "isInDocumentOrder");
function ga(e, t) {
	return !e[1].element || !t[1].element ? 0 : ma(e[1].element, t[1].element) ? -1 : 1;
}
aa(ga, "sortByDocumentPosition");
function _a(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
aa(_a, "getChildListObserver");
// node_modules/@radix-ui/react-direction/dist/index.mjs
var va = Object.defineProperty, ya = (e, t) => va(e, "name", {
	value: t,
	configurable: !0
}), ba = {
	LTR: "ltr",
	RTL: "rtl"
}, xa = x.createContext(void 0);
function Sa(e) {
	let t = x.useContext(xa);
	return e || t || ba.LTR;
}
ya(Sa, "useDirection");
// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var Ca = Object.defineProperty, wa = (e, t) => Ca(e, "name", {
	value: t,
	configurable: !0
}), Ta = x.useInsertionEffect;
function Ea(e) {
	let t = x.useRef(e);
	return typeof Ta == "function" ? Ta(() => {
		t.current = e;
	}) : Gi(() => {
		t.current = e;
	}), x.useMemo(() => ((...e) => t.current?.(...e)), []);
}
wa(Ea, "useCallbackRef");
// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Da = Object.defineProperty, Oa = (e, t) => Da(e, "name", {
	value: t,
	configurable: !0
}), ka = "dismissableLayer.update", Aa = "dismissableLayer.pointerDownOutside", ja = "dismissableLayer.focusOutside", Ma, Na = x.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), Pa = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Oa(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = x.useContext(Na), [d, f] = x.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = x.useState({}), h = R(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = _ ? g.indexOf(_) : -1, y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= v, w = x.useRef(!1), T = La((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: w,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: x.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return C && !t;
		}, [u.branches, C])
	}), ee = Ra((e) => {
		if (r && w.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), E = d ? y === g.length - 1 : !1, D = Ea((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return x.useEffect(() => {
		if (E) return p.addEventListener("keydown", D, { capture: !0 }), () => p.removeEventListener("keydown", D, { capture: !0 });
	}, [
		p,
		E,
		D
	]), x.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ma = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), za(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = Ma));
		};
	}, [
		d,
		p,
		n,
		u
	]), x.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), za());
	}, [d, u]), x.useEffect(() => {
		let e = /* @__PURE__ */ Oa(() => m({}), "handleUpdate");
		return document.addEventListener(ka, e), () => document.removeEventListener(ka, e);
	}, []), /* @__PURE__ */ (0, S.jsx)(U.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? C ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: K(e.onFocusCapture, ee.onFocusCapture),
		onBlurCapture: K(e.onBlurCapture, ee.onBlurCapture),
		onPointerDownCapture: K(e.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function Fa() {
	let e = x.useContext(Na), [t, n] = x.useState(null);
	return x.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
Oa(Fa, "useDismissableLayerSurface");
var Ia = /* @__PURE__ */ Oa(() => !0, "IS_TRUE");
function La(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = Ia } = t, s = Ea(e), c = x.useRef(!1), l = x.useRef(!1), u = x.useRef(/* @__PURE__ */ new Map()), d = x.useRef(() => {});
	return x.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		Oa(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		Oa(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		Oa(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		Oa(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Oa((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || Ba(Aa, s, p, { discrete: !0 });
				};
				if (Oa(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", d.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, { once: !0 }));
			} else n.removeEventListener("click", d.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current);
			for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ Oa(() => c.current = !0, "onPointerDownCapture") };
}
Oa(La, "usePointerDownOutside");
function Ra(e, t = globalThis?.document) {
	let n = Ea(e), r = x.useRef(!1);
	return x.useEffect(() => {
		let e = /* @__PURE__ */ Oa((e) => {
			e.target && !r.current && Ba(ja, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ Oa(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Oa(() => r.current = !1, "onBlurCapture")
	};
}
Oa(Ra, "useFocusOutside");
function za() {
	let e = new CustomEvent(ka);
	document.dispatchEvent(e);
}
Oa(za, "dispatchUpdate");
function Ba(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? di(i, a) : i.dispatchEvent(a);
}
Oa(Ba, "handleAndDispatchCustomEvent");
// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Va = Object.defineProperty, Ha = (e, t) => Va(e, "name", {
	value: t,
	configurable: !0
}), Ua = 0, Wa = null;
function Ga(e) {
	return Ka(), e.children;
}
Ha(Ga, "FocusGuards");
function Ka() {
	x.useEffect(() => {
		Wa ||= {
			start: qa(),
			end: qa()
		};
		let { start: e, end: t } = Wa;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Ua++, () => {
			Ua === 1 && (Wa?.start.remove(), Wa?.end.remove(), Wa = null), Ua = Math.max(0, Ua - 1);
		};
	}, []);
}
Ha(Ka, "useFocusGuards");
function qa() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Ha(qa, "createFocusGuard");
// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Ja = Object.defineProperty, Ya = (e, t) => Ja(e, "name", {
	value: t,
	configurable: !0
}), Xa = "focusScope.autoFocusOnMount", Za = "focusScope.autoFocusOnUnmount", Qa = {
	bubbles: !1,
	cancelable: !0
}, $a = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Ya(function(e, t) {
	let { loop: n = !1, trapped: r = !1, branches: i, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [c, l] = x.useState(null), u = Ea(a), d = Ea(o), f = x.useRef(null), p = R(t, l), m = x.useRef(i);
	x.useEffect(() => {
		m.current = i;
	});
	let h = x.useCallback((e) => e ? c?.contains(e) ? !0 : !!m.current?.some((t) => t.contains(e)) : !1, [c]), g = x.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	x.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (g.paused || !c) return;
				let t = e.target;
				h(t) ? f.current = t : uo(f.current, { select: !0 });
			}, t = function(e) {
				if (g.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (h(t) || uo(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && uo(c);
			};
			Ya(e, "handleFocusIn"), Ya(t, "handleFocusOut"), Ya(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		c,
		g.paused,
		h
	]), x.useEffect(() => {
		if (c) {
			fo.add(g);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(Xa, Qa);
				c.addEventListener(Xa, u), c.dispatchEvent(t), t.defaultPrevented || (io(ho(oo(c)), { select: !0 }), document.activeElement === e && uo(c));
			}
			return () => {
				c.removeEventListener(Xa, u);
				let t = c.ownerDocument, n = CustomEvent;
				setTimeout(() => {
					let r = new n(Za, Qa);
					c.addEventListener(Za, d), c.dispatchEvent(r), r.defaultPrevented || uo(e ?? t.body, { select: !0 }), c.removeEventListener(Za, d), fo.remove(g);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		g
	]);
	let _ = x.useCallback((e) => {
		if (!n && !r || g.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = ao(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && uo(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && uo(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		g.paused
	]);
	return /* @__PURE__ */ (0, S.jsx)(U.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: _
	});
}, "FocusScope")), eo = x.createContext(null);
function to({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ (0, S.jsx)(eo.Provider, {
		value: e,
		children: t
	}) : t;
}
Ya(to, "FocusScopeBranchProvider");
function no() {
	let [e, t] = x.useState([]);
	return {
		nodes: e,
		registry: x.useMemo(() => ({
			add: /* @__PURE__ */ Ya((e) => t((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Ya((e) => t((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Ya(no, "useFocusScopeBranchRegistry");
function ro(e) {
	let t = x.useContext(eo);
	x.useEffect(() => {
		if (e && t) return t.add(e), () => t.remove(e);
	}, [e, t]);
}
Ya(ro, "useFocusScopeBranch");
function io(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (uo(r, { select: t }), document.activeElement !== n) return;
}
Ya(io, "focusFirst");
function ao(e) {
	let t = oo(e);
	return [so(t, e), so(t.reverse(), e)];
}
Ya(ao, "getTabbableEdges");
function oo(e) {
	let t = [], n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Ya((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Ya(oo, "getTabbableCandidates");
function so(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : co(r, { upTo: t }))) return r;
}
Ya(so, "findVisible");
function co(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Ya(co, "isHidden");
function lo(e) {
	return e.tagName === "INPUT" && typeof e.select == "function";
}
Ya(lo, "isSelectableInput");
function uo(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = (e.ownerDocument ?? document).activeElement;
		e.focus({ preventScroll: !0 }), e !== n && lo(e) && t && e.select();
	}
}
Ya(uo, "focus");
var fo = po();
function po() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = mo(e, t), e.unshift(t);
		},
		remove(t) {
			e = mo(e, t), e[0]?.resume();
		}
	};
}
Ya(po, "createFocusScopesStack");
function mo(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Ya(mo, "arrayRemove");
function ho(e) {
	return e.filter((e) => e.tagName !== "A");
}
Ya(ho, "removeLinks");
// node_modules/@radix-ui/react-id/dist/index.mjs
var go = Object.defineProperty, _o = (e, t) => go(e, "name", {
	value: t,
	configurable: !0
}), vo = x.useId || (() => void 0), yo = 0;
function bo(e) {
	let [t, n] = x.useState(vo());
	return Gi(() => {
		e || n((e) => e ?? String(yo++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
_o(bo, "useId");
// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var xo = [
	"top",
	"right",
	"bottom",
	"left"
], So = Math.min, Co = Math.max, wo = Math.round, To = Math.floor, Eo = (e) => ({
	x: e,
	y: e
}), Do = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Oo(e, t, n) {
	return Co(e, So(t, n));
}
function ko(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ao(e) {
	return e.split("-")[0];
}
function jo(e) {
	return e.split("-")[1];
}
function Mo(e) {
	return e === "x" ? "y" : "x";
}
function No(e) {
	return e === "y" ? "height" : "width";
}
function Po(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Fo(e) {
	return Mo(Po(e));
}
function J(e, t, n) {
	n === void 0 && (n = !1);
	let r = jo(e), i = Fo(e), a = No(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Wo(o)), [o, Wo(o)];
}
function Io(e) {
	let t = Wo(e);
	return [
		Lo(e),
		t,
		Lo(t)
	];
}
function Lo(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ro = ["left", "right"], zo = ["right", "left"], Bo = ["top", "bottom"], Vo = ["bottom", "top"];
function Ho(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? zo : Ro : t ? Ro : zo;
		case "left":
		case "right": return t ? Bo : Vo;
		default: return [];
	}
}
function Uo(e, t, n, r) {
	let i = jo(e), a = Ho(Ao(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Lo)))), a;
}
function Wo(e) {
	let t = Ao(e);
	return Do[t] + e.slice(t.length);
}
function Go(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Ko(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Go(e);
}
function qo(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Jo(e, t, n) {
	let { reference: r, floating: i } = e, a = Po(t), o = Fo(t), s = No(o), c = Ao(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = jo(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Yo(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ko(t, e), p = Ko(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = qo(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = qo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Xo = 50, Zo = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Yo
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Jo(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Xo && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Jo(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Qo = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ko(e, t) || {};
		if (l == null) return {};
		let d = Ko(u), f = {
			x: n,
			y: r
		}, p = Fo(i), m = No(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		C && await (o.isElement == null ? void 0 : o.isElement(S)) || (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, ee = So(d[_], T), E = So(d[v], T), D = C - h[m] - E, te = C / 2 - h[m] / 2 + w, O = Oo(ee, te, D), k = !c.arrow && jo(i) != null && te !== O && a.reference[m] / 2 - (te < ee ? ee : E) - h[m] / 2 < 0, A = k ? te < ee ? te - ee : te - D : 0;
		return {
			[p]: f[p] + A,
			data: {
				[p]: O,
				centerOffset: te - O - A,
				...k && { alignmentOffset: A }
			},
			reset: k
		};
	}
}), $o = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ko(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ao(r), _ = Po(o), v = Ao(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Wo(o)] : Io(o)), x = p !== "none";
			!d && x && b.push(...Uo(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = J(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Po(t) || T.every((e) => Po(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Po(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function es(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function ts(e) {
	return xo.some((t) => e[t] >= 0);
}
var ns = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = ko(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = es(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: ts(e)
					} };
				}
				case "escaped": {
					let e = es(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: ts(e)
					} };
				}
				default: return {};
			}
		}
	};
}, rs = /*#__PURE__*/ new Set(["left", "top"]);
async function is(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ao(n), s = jo(n), c = Po(n) === "y", l = rs.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ko(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var as = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await is(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, os = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = ko(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Po(i), p = Mo(f), m = u[p], h = u[f], g = (e, t) => Oo(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, ss = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = ko(e, t), u = {
				x: n,
				y: r
			}, d = Po(i), f = Mo(d), p = u[f], m = u[d], h = ko(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = rs.has(Ao(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, cs = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = ko(e, t), c = await i.detectOverflow(t, s), l = Ao(n), u = jo(n), d = Po(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = So(p - c[m], g), y = So(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Co(c.left, c.right) : S = p - 2 * Co(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function ls() {
	return typeof window < "u";
}
function us(e) {
	return ps(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ds(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fs(e) {
	return ((ps(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ps(e) {
	return ls() ? e instanceof Node || e instanceof ds(e).Node : !1;
}
function ms(e) {
	return ls() ? e instanceof Element || e instanceof ds(e).Element : !1;
}
function hs(e) {
	return ls() ? e instanceof HTMLElement || e instanceof ds(e).HTMLElement : !1;
}
function gs(e) {
	return !ls() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ds(e).ShadowRoot;
}
function _s(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Os(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function vs(e) {
	return /^(table|td|th)$/.test(us(e));
}
function ys(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var bs = /transform|translate|scale|rotate|perspective|filter/, xs = /paint|layout|strict|content/, Ss = (e) => !!e && e !== "none", Cs;
function ws(e) {
	let t = ms(e) ? Os(e) : e;
	return Ss(t.transform) || Ss(t.translate) || Ss(t.scale) || Ss(t.rotate) || Ss(t.perspective) || !Es() && (Ss(t.backdropFilter) || Ss(t.filter)) || bs.test(t.willChange || "") || xs.test(t.contain || "");
}
function Ts(e) {
	let t = As(e);
	for (; hs(t) && !Ds(t);) {
		if (ws(t)) return t;
		if (ys(t)) return null;
		t = As(t);
	}
	return null;
}
function Es() {
	return Cs ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Cs;
}
function Ds(e) {
	return /^(html|body|#document)$/.test(us(e));
}
function Os(e) {
	return ds(e).getComputedStyle(e);
}
function ks(e) {
	return ms(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function As(e) {
	if (us(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || gs(e) && e.host || fs(e);
	return gs(t) ? t.host : t;
}
function js(e) {
	let t = As(e);
	return Ds(t) ? (e.ownerDocument || e).body : hs(t) && _s(t) ? t : js(t);
}
function Ms(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = js(e), i = r === e.ownerDocument?.body, a = ds(r);
	if (i) {
		let e = Ns(a);
		return t.concat(a, a.visualViewport || [], _s(r) ? r : [], e && n ? Ms(e) : []);
	}
	return t.concat(r, Ms(r, [], n));
}
function Ns(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Ps(e) {
	let t = Os(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = hs(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = wo(n) !== a || wo(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Fs(e) {
	return ms(e) ? e : e.contextElement;
}
function Is(e) {
	let t = Fs(e);
	if (!hs(t)) return Eo(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Ps(t), o = (a ? wo(n.width) : n.width) / r, s = (a ? wo(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var Ls = /*#__PURE__*/ Eo(0);
function Rs(e) {
	let t = ds(e);
	return !Es() || !t.visualViewport ? Ls : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function zs(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === ds(e);
}
function Bs(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Fs(e), o = Eo(1);
	t && (r ? ms(r) && (o = Is(r)) : o = Is(e));
	let s = zs(a, n, r) ? Rs(a) : Eo(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = ds(a), t = ms(r) ? ds(r) : r, n = e, i = Ns(n);
		for (; i && t !== n;) {
			let e = Is(i), t = i.getBoundingClientRect(), r = Os(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = ds(i), i = Ns(n);
		}
	}
	return qo({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Vs(e, t) {
	let n = ks(e).scrollLeft;
	return t ? t.left + n : Bs(fs(e)).left + n;
}
function Hs(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Vs(e, n),
		y: n.top + t.scrollTop
	};
}
function Us(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = fs(r), s = t ? ys(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Eo(1), u = Eo(0), d = hs(r);
	if ((d || !a) && ((us(r) !== "body" || _s(o)) && (c = ks(r)), d)) {
		let e = Bs(r);
		l = Is(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Hs(o, c) : Eo(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ws(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Gs(e) {
	let t = ks(e), n = e.ownerDocument.body, r = Co(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Co(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Vs(e), o = -t.scrollTop;
	return Os(n).direction === "rtl" && (a += Co(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Ks = 25;
function qs(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = ds(e), a = fs(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Es() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Vs(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Ks && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Js(e, t) {
	let n = Bs(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Is(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ys(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = qs(e, n, t);
	else if (t === "document") r = Gs(fs(e));
	else if (ms(t)) r = Js(t, n);
	else {
		let n = Rs(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return qo(r);
}
function Xs(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ms(e, [], !1).filter((e) => ms(e) && us(e) !== "body"), i = null, a = Os(e).position === "fixed", o = a ? As(e) : e;
	for (; ms(o) && !Ds(o);) {
		let e = Os(o), t = ws(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = As(o);
	}
	return t.set(e, r), r;
}
function Zs(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ys(t) ? [] : Xs(t, this._c) : [].concat(n), r], o = Ys(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ys(t, a[e], i);
		s = Co(n.top, s), c = So(n.right, c), l = So(n.bottom, l), u = Co(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Qs(e) {
	let { width: t, height: n } = Ps(e);
	return {
		width: t,
		height: n
	};
}
function $s(e, t, n) {
	let r = hs(t), i = fs(t), a = n === "fixed", o = Bs(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Eo(0);
	if ((r || !a) && ((us(t) !== "body" || _s(i)) && (s = ks(t)), r)) {
		let e = Bs(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Vs(i));
	let l = i && !r && !a ? Hs(i, s) : Eo(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function ec(e) {
	return Os(e).position === "static";
}
function tc(e, t) {
	if (!hs(e) || Os(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return fs(e) === n && (n = n.ownerDocument.body), n;
}
function nc(e, t) {
	let n = ds(e);
	if (ys(e)) return n;
	if (!hs(e)) {
		let t = As(e);
		for (; t && !Ds(t);) {
			if (ms(t) && !ec(t)) return t;
			t = As(t);
		}
		return n;
	}
	let r = tc(e, t);
	for (; r && vs(r) && ec(r);) r = tc(r, t);
	return r && Ds(r) && ec(r) && !ws(r) ? n : r || Ts(e) || n;
}
var rc = async function(e) {
	let t = this.getOffsetParent || nc, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: $s(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ic(e) {
	return Os(e).direction === "rtl";
}
var ac = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Us,
	getDocumentElement: fs,
	getClippingRect: Zs,
	getOffsetParent: nc,
	getElementRects: rc,
	getClientRects: Ws,
	getDimensions: Qs,
	getScale: Is,
	isElement: ms,
	isRTL: ic
};
function oc(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sc(e, t, n) {
	let r = null, i, a = fs(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = To(d), h = To(a.clientWidth - (u + f)), g = To(a.clientHeight - (d + p)), _ = To(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Co(0, So(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!oc(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = ds(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function cc(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Fs(e), u = i || a ? [...l ? Ms(l) : [], ...t ? Ms(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? sc(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Bs(e) : null;
	c && g();
	function g() {
		let t = Bs(e);
		h && !oc(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var lc = as, uc = os, dc = $o, fc = cs, pc = ns, mc = Qo, hc = ss, gc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...ac,
		...i.platform,
		_c: r
	};
	return Zo(e, t, {
		...i,
		platform: a
	});
}, _c = typeof document < "u" ? x.useLayoutEffect : function() {};
function vc(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!vc(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !vc(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function yc(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bc(e, t) {
	let n = yc(e);
	return Math.round(t * n) / n;
}
function xc(e) {
	let t = x.useRef(e);
	return _c(() => {
		t.current = e;
	}), t;
}
function Sc(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = x.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = x.useState(r);
	vc(f, r) || p(r);
	let [m, h] = x.useState(null), [g, _] = x.useState(null), v = x.useCallback((e) => {
		e !== C.current && (C.current = e, h(e));
	}, []), y = x.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), b = a || m, S = o || g, C = x.useRef(null), w = x.useRef(null), T = x.useRef(u), ee = c != null, E = xc(c), D = xc(i), te = xc(l), O = x.useCallback(() => {
		if (!C.current || !w.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), gc(C.current, w.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: te.current !== !1
			};
			k.current && !vc(T.current, t) && (T.current = t, ft.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		te
	]);
	_c(() => {
		l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let k = x.useRef(!1);
	_c(() => (k.current = !0, () => {
		k.current = !1;
	}), []), _c(() => {
		if (b && (C.current = b), S && (w.current = S), b && S) {
			if (E.current) return E.current(b, S, O);
			O();
		}
	}, [
		b,
		S,
		O,
		E,
		ee
	]);
	let A = x.useMemo(() => ({
		reference: C,
		floating: w,
		setReference: v,
		setFloating: y
	}), [v, y]), ne = x.useMemo(() => ({
		reference: b,
		floating: S
	}), [b, S]), j = x.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!ne.floating) return e;
		let t = bc(ne.floating, u.x), r = bc(ne.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...yc(ne.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		ne.floating,
		u.x,
		u.y
	]);
	return x.useMemo(() => ({
		...u,
		update: O,
		refs: A,
		elements: ne,
		floatingStyles: j
	}), [
		u,
		O,
		A,
		ne,
		j
	]);
}
var Cc = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : mc({
				element: r.current,
				padding: i
			}).fn(n) : r ? mc({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, wc = (e, t) => {
	let n = lc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Tc = (e, t) => {
	let n = uc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ec = (e, t) => ({
	fn: hc(e).fn,
	options: [e, t]
}), Dc = (e, t) => {
	let n = dc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Oc = (e, t) => {
	let n = fc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, kc = (e, t) => {
	let n = pc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ac = (e, t) => {
	let n = Cc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, jc = Object.defineProperty, Mc = (e, t) => jc(e, "name", {
	value: t,
	configurable: !0
});
function Nc(e) {
	let [t, n] = x.useState(void 0);
	return Gi(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = 0, r = new ResizeObserver((r) => {
				if (!Array.isArray(r) || !r.length) return;
				let i = r[0];
				window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
					let t, r;
					if ("borderBoxSize" in i) {
						let e = i.borderBoxSize, n = Array.isArray(e) ? e[0] : e;
						t = n.inlineSize, r = n.blockSize;
					} else t = e.offsetWidth, r = e.offsetHeight;
					n({
						width: t,
						height: r
					});
				});
			});
			return r.observe(e, { box: "border-box" }), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
		n(void 0);
	}, [e]), t;
}
Mc(Nc, "useSize");
// node_modules/@radix-ui/react-popper/dist/index.mjs
var Pc = Object.defineProperty, Fc = (e, t) => Pc(e, "name", {
	value: t,
	configurable: !0
}), Ic = {
	Partial: "partial",
	Always: "always"
}, Lc = {
	Optimized: "optimized",
	Always: "always"
}, Rc = "Popper", [zc, Bc] = /* @__PURE__ */ Ui(Rc), [Vc, Hc] = zc(Rc), Uc = /* @__PURE__ */ Fc((e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = x.useState(null), [a, o] = x.useState(void 0);
	return /* @__PURE__ */ (0, S.jsx)(Vc, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
}, "Popper"), Wc = "PopperAnchor", Gc = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Fc(function(e, t) {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Hc(Wc, n), o = x.useRef(null), s = a.onAnchorChange, c = R(t, x.useCallback((e) => {
		o.current = e, e && s(e);
	}, [s])), l = x.useRef(null);
	x.useEffect(() => {
		if (!r) return;
		let e = l.current;
		l.current = r.current, e !== l.current && s(l.current);
	});
	let u = a.placementState && Qc(a.placementState), d = u?.[0], f = u?.[1];
	return r ? null : /* @__PURE__ */ (0, S.jsx)(U.div, {
		"data-radix-popper-side": d,
		"data-radix-popper-align": f,
		...i,
		ref: c
	});
}, "PopperAnchor")), Kc = "PopperContent", [qc, Jc] = zc(Kc), Yc = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Fc(function(e, t) {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = Ic.Partial, hideWhenDetached: f = !1, updatePositionStrategy: p = Lc.Optimized, onPlaced: m, ...h } = e, g = Hc(Kc, n), [_, v] = x.useState(null), y = R(t, v), [b, C] = x.useState(null), w = Nc(b), T = w?.width ?? 0, ee = w?.height ?? 0, E = r + (a === "center" ? "" : "-" + a), D = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, te = Array.isArray(l) ? l : [l], O = te.length > 0, k = {
		padding: D,
		boundary: te.filter(Xc),
		altBoundary: O
	}, { refs: A, floatingStyles: ne, placement: j, isPositioned: M, middlewareData: N } = Sc({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: /* @__PURE__ */ Fc((...e) => cc(...e, { animationFrame: p === Lc.Always }), "whileElementsMounted"),
		elements: { reference: g.anchor },
		middleware: [
			wc({
				mainAxis: i + ee,
				alignmentAxis: o
			}),
			c && Tc({
				mainAxis: !0,
				crossAxis: !1,
				...d === Ic.Partial ? { limiter: Ec() } : {},
				...k
			}),
			c && Dc({ ...k }),
			Oc({
				...k,
				apply: /* @__PURE__ */ Fc(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			b && Ac({
				element: b,
				padding: s
			}),
			Zc({
				arrowWidth: T,
				arrowHeight: ee
			}),
			f && kc(O ? {
				strategy: "referenceHidden",
				...k
			} : {
				strategy: "referenceHidden",
				padding: k.padding,
				altBoundary: k.altBoundary
			})
		]
	}), re = g.setPlacementState;
	Gi(() => (re(j), () => {
		re(void 0);
	}), [j, re]);
	let [ie, ae] = Qc(j), oe = Ea(m);
	Gi(() => {
		M && oe?.();
	}, [M, oe]);
	let se = N.arrow?.x, ce = N.arrow?.y, le = N.arrow?.centerOffset !== 0, [ue, de] = x.useState();
	return Gi(() => {
		_ && de(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ (0, S.jsx)("div", {
		ref: A.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...ne,
			transform: M ? ne.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ue,
			"--radix-popper-transform-origin": [N.transformOrigin?.x, N.transformOrigin?.y].join(" "),
			...N.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, S.jsx)(qc, {
			scope: n,
			placedSide: ie,
			placedAlign: ae,
			onArrowChange: C,
			arrowX: se,
			arrowY: ce,
			shouldHideArrow: le,
			children: /* @__PURE__ */ (0, S.jsx)(U.div, {
				"data-side": ie,
				"data-align": ae,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: M ? h.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function Xc(e) {
	return e !== null;
}
Fc(Xc, "isNotNull");
var Zc = /* @__PURE__ */ Fc((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Qc(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function Qc(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Fc(Qc, "getSideAndAlignFromPlacement");
// node_modules/@radix-ui/react-portal/dist/index.mjs
var $c = Object.defineProperty, el = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ ((e, t) => $c(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = x.useState(!1);
	Gi(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? ft.createPortal(/* @__PURE__ */ (0, S.jsx)(U.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), tl = Object.defineProperty, nl = (e, t) => tl(e, "name", {
	value: t,
	configurable: !0
});
function rl(e, t) {
	return x.useReducer((e, n) => t[e][n] ?? e, e);
}
nl(rl, "useStateMachine");
var il = /* @__PURE__ */ nl((e) => {
	let { present: t, children: n } = e, r = al(t), i = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), a = sl(r.ref, ll(i));
	return typeof n == "function" || r.isPresent ? x.cloneElement(i, { ref: a }) : null;
}, "Presence");
function al(e) {
	let [t, n] = x.useState(), r = x.useRef(null), i = x.useRef(e), a = x.useRef("none"), o = x.useRef(void 0), [s, c] = rl(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return x.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? cl(r.current), o.current = void 0) : a.current = "none";
	}, [s]), Gi(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = cl(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), Gi(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ nl((a) => {
				let o = cl(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ nl((e) => {
				e.target === t && (a.current = cl(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: x.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = cl(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
nl(al, "usePresence");
function ol(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
nl(ol, "setRef");
function sl(...e) {
	let t = x.useRef(e);
	return t.current = e, x.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = ol(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : ol(n[e], null);
			}
		};
	}, []);
}
nl(sl, "useStableComposedRefs");
function cl(e) {
	return e?.animationName || "none";
}
nl(cl, "getAnimationName");
function ll(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
nl(ll, "getElementRef");
// node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var ul = Object.defineProperty, dl = (e, t) => ul(e, "name", {
	value: t,
	configurable: !0
}), fl = !1;
function pl() {
	let [e, t] = x.useState(fl);
	return x.useEffect(() => {
		fl || (fl = !0, t(!0));
	}, []), e;
}
dl(pl, "useIsHydrated");
var ml = x.useSyncExternalStore;
function hl() {
	return () => {};
}
dl(hl, "subscribe");
function gl() {
	return ml(hl, () => !0, () => !1);
}
dl(gl, "useIsHydratedModern");
var _l = typeof ml == "function" ? gl : pl, vl = Object.defineProperty, yl = (e, t) => vl(e, "name", {
	value: t,
	configurable: !0
}), bl = "rovingFocusGroup.onEntryFocus", xl = {
	bubbles: !1,
	cancelable: !0
}, Sl = "RovingFocusGroup", [Cl, wl, Tl] = /* @__PURE__ */ oa(Sl), [El, Dl] = /* @__PURE__ */ Ui(Sl, [Tl]), Ol = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, kl = {
	LTR: "ltr",
	RTL: "rtl"
}, [Al, jl] = El(Sl), Ml = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ yl(function(e, t) {
	return /* @__PURE__ */ (0, S.jsx)(Cl.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, S.jsx)(Cl.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, S.jsx)(Nl, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), Nl = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ yl(function(e, t) {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: i = !1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, preventScrollOnEntryFocus: u = !1, ...d } = e, f = x.useRef(null), p = R(t, f), m = Sa(a), [h, g] = $i({
		prop: o,
		defaultProp: s ?? null,
		onChange: c,
		caller: Sl
	}), [_, v] = x.useState(!1), y = Ea(l), b = wl(n), C = x.useRef(!1), [w, T] = x.useState(0);
	return x.useEffect(() => {
		let e = f.current;
		if (e) return e.addEventListener(bl, y), () => e.removeEventListener(bl, y);
	}, [y]), /* @__PURE__ */ (0, S.jsx)(Al, {
		scope: n,
		orientation: r,
		dir: m,
		loop: i,
		currentTabStopId: h,
		onItemFocus: x.useCallback((e) => g(e), [g]),
		onItemShiftTab: x.useCallback(() => v(!0), []),
		onFocusableItemAdd: x.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: x.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ (0, S.jsx)(U.div, {
			tabIndex: _ || w === 0 ? -1 : 0,
			"data-orientation": r,
			...d,
			ref: p,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: K(e.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: K(e.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !_) {
					let t = new CustomEvent(bl, xl);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = b().filter((e) => e.focusable);
						zl([
							e.find((e) => e.active),
							e.find((e) => e.id === h),
							...e
						].filter(Boolean).map((e) => e.ref.current), u);
					}
				}
				C.current = !1;
			}),
			onBlur: K(e.onBlur, () => v(!1))
		})
	});
}, "RovingFocusGroupImpl")), Pl = "RovingFocusGroupItem", Fl = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ yl(function(e, t) {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = bo(), l = a || c, u = jl(Pl, n), d = u.currentTabStopId === l, f = wl(n), { onFocusableItemAdd: p, onFocusableItemRemove: m, currentTabStopId: h } = u, g = _l();
	return Gi(() => {
		if (g && r) return p(), () => m();
	}, [
		g,
		r,
		p,
		m
	]), x.useEffect(() => {
		if (!g && r) return p(), () => m();
	}, [
		g,
		r,
		p,
		m
	]), /* @__PURE__ */ (0, S.jsx)(Cl.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, S.jsx)(U.span, {
			tabIndex: d ? 0 : -1,
			"data-orientation": u.orientation,
			...s,
			ref: t,
			onMouseDown: K(e.onMouseDown, (e) => {
				r ? u.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: K(e.onFocus, () => u.onItemFocus(l)),
			onKeyDown: K(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					u.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = Rl(e, u.orientation, u.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = f().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = u.loop ? Bl(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => zl(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: d,
				hasTabStop: h != null
			}) : o
		})
	});
}, "RovingFocusGroupItem")), Il = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Ll(e, t) {
	return t === kl.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
yl(Ll, "getDirectionAwareKey");
function Rl(e, t, n) {
	let r = Ll(e.key, n);
	if (!(t === Ol.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === Ol.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return Il[r];
}
yl(Rl, "getFocusIntent");
function zl(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
yl(zl, "focusFirst");
function Bl(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
yl(Bl, "wrapArray");
// node_modules/aria-hidden/dist/es2015/index.js
var Vl = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Hl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Wl = {}, Gl = 0, Kl = function(e) {
	return e && (e.host || Kl(e.parentNode));
}, ql = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Kl(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Jl = function(e, t, n, r) {
	var i = ql(t, Array.isArray(e) ? e : [e]);
	Wl[n] || (Wl[n] = /* @__PURE__ */ new WeakMap());
	var a = Wl[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Hl.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Hl.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Ul.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Gl++, function() {
		o.forEach(function(e) {
			var t = Hl.get(e) - 1, i = a.get(e) - 1;
			Hl.set(e, t), a.set(e, i), t || (Ul.has(e) || e.removeAttribute(r), Ul.delete(e)), i || e.removeAttribute(n);
		}), Gl--, Gl || (Hl = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Wl = {});
	};
}, Yl = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Vl(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Jl(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Xl = function() {
	return Xl = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Xl.apply(this, arguments);
};
function Zl(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Ql(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var $l = "right-scroll-bar-position", eu = "width-before-scroll-bar", tu = "with-scroll-bars-hidden", nu = "--removed-body-scroll-bar-size";
// node_modules/use-callback-ref/dist/es2015/assignRef.js
function ru(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/use-callback-ref/dist/es2015/useRef.js
function iu(e, t) {
	var n = (0, x.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var au = typeof window < "u" ? x.useLayoutEffect : x.useEffect, ou = /* @__PURE__ */ new WeakMap();
function su(e, t) {
	var n = iu(t || null, function(t) {
		return e.forEach(function(e) {
			return ru(e, t);
		});
	});
	return au(function() {
		var t = ou.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || ru(e, null);
			}), i.forEach(function(e) {
				r.has(e) || ru(e, a);
			});
		}
		ou.set(n, e);
	}, [e]), n;
}
// node_modules/use-sidecar/dist/es2015/medium.js
function cu(e) {
	return e;
}
function lu(e, t) {
	t === void 0 && (t = cu);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function uu(e) {
	e === void 0 && (e = {});
	var t = lu(null);
	return t.options = Xl({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/use-sidecar/dist/es2015/exports.js
var du = function(e) {
	var t = e.sideCar, n = Zl(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return x.createElement(r, Xl({}, n));
};
du.isSideCarExport = !0;
function fu(e, t) {
	return e.useMedium(t), du;
}
// node_modules/react-remove-scroll/dist/es2015/medium.js
var pu = uu(), mu = function() {}, hu = x.forwardRef(function(e, t) {
	var n = x.useRef(null), r = x.useState({
		onScrollCapture: mu,
		onWheelCapture: mu,
		onTouchMoveCapture: mu
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = Zl(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = f, C = su([n, t]), w = Xl(Xl({}, b), i);
	return x.createElement(x.Fragment, null, u && x.createElement(S, {
		sideCar: pu,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? x.cloneElement(x.Children.only(s), Xl(Xl({}, w), { ref: C })) : x.createElement(v, Xl({}, w, {
		className: c,
		ref: C
	}), s));
});
hu.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, hu.classNames = {
	fullWidth: eu,
	zeroRight: $l
};
// node_modules/get-nonce/dist/es2015/index.js
var gu = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/react-style-singleton/dist/es2015/singleton.js
function _u() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = gu();
	return t && e.setAttribute("nonce", t), e;
}
function vu(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function yu(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var bu = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = _u()) && (vu(t, n), yu(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, xu = function() {
	var e = bu();
	return function(t, n) {
		x.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Su = function() {
	var e = xu();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Cu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, wu = function(e) {
	return parseInt(e || "", 10) || 0;
}, Tu = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		wu(n),
		wu(r),
		wu(i)
	];
}, Eu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Cu;
	var t = Tu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Du = Su(), Ou = "data-scroll-locked", ku = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${tu} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Ou}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${$l} {
    right: ${s}px ${r};
  }
  
  .${eu} {
    margin-right: ${s}px ${r};
  }
  
  .${$l} .${$l} {
    right: 0 ${r};
  }
  
  .${eu} .${eu} {
    margin-right: 0 ${r};
  }
  
  body[${Ou}] {
    ${nu}: ${s}px;
  }
`;
}, Au = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, ju = function() {
	x.useEffect(function() {
		return document.body.setAttribute(Ou, (Au() + 1).toString()), function() {
			var e = Au() - 1;
			e <= 0 ? document.body.removeAttribute(Ou) : document.body.setAttribute(Ou, e.toString());
		};
	}, []);
}, Mu = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	ju();
	var a = x.useMemo(function() {
		return Eu(i);
	}, [i]);
	return x.createElement(Du, { styles: ku(a, !t, i, n ? "" : "!important") });
}, Nu = !1;
if (typeof window < "u") try {
	var Pu = Object.defineProperty({}, "passive", { get: function() {
		return Nu = !0, !0;
	} });
	window.addEventListener("test", Pu, Pu), window.removeEventListener("test", Pu, Pu);
} catch {
	Nu = !1;
}
var Fu = Nu ? { passive: !1 } : !1, Iu = function(e) {
	return e.tagName === "TEXTAREA";
}, Lu = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Iu(e) && n[t] === "visible");
}, Ru = function(e) {
	return Lu(e, "overflowY");
}, zu = function(e) {
	return Lu(e, "overflowX");
}, Bu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Uu(e, r)) {
			var i = Wu(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Vu = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Hu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Uu = function(e, t) {
	return e === "v" ? Ru(t) : zu(t);
}, Wu = function(e, t) {
	return e === "v" ? Vu(t) : Hu(t);
}, Gu = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Ku = function(e, t, n, r, i) {
	var a = Gu(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Wu(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Uu(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, qu = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ju = function(e) {
	return [e.deltaX, e.deltaY];
}, Yu = function(e) {
	return e && "current" in e ? e.current : e;
}, Xu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Zu = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Qu = 0, Y = [];
function X(e) {
	var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), i = x.useState(Qu++)[0], a = x.useState(Su)[0], o = x.useRef(e);
	x.useEffect(function() {
		o.current = e;
	}, [e]), x.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Ql([e.lockRef.current], (e.shards || []).map(Yu), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = x.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = qu(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Bu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Bu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Ku(h, t, e, h === "h" ? s : c, !0);
	}, []), c = x.useCallback(function(e) {
		var n = e;
		if (Y.length && Y[Y.length - 1] === a) {
			var r = "deltaY" in n ? Ju(n) : qu(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Xu(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
				var c = (o.current.shards || []).map(Yu).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = x.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: $u(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = x.useCallback(function(e) {
		n.current = qu(e), r.current = void 0;
	}, []), d = x.useCallback(function(t) {
		l(t.type, Ju(t), t.target, s(t, e.lockRef.current));
	}, []), f = x.useCallback(function(t) {
		l(t.type, qu(t), t.target, s(t, e.lockRef.current));
	}, []);
	x.useEffect(function() {
		return Y.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, Fu), document.addEventListener("touchmove", c, Fu), document.addEventListener("touchstart", u, Fu), function() {
			Y = Y.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Fu), document.removeEventListener("touchmove", c, Fu), document.removeEventListener("touchstart", u, Fu);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return x.createElement(x.Fragment, null, m ? x.createElement(a, { styles: Zu(i) }) : null, p ? x.createElement(Mu, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function $u(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var ed = fu(pu, X), td = x.forwardRef(function(e, t) {
	return x.createElement(hu, Xl({}, e, {
		ref: t,
		sideCar: ed
	}));
});
td.classNames = hu.classNames;
// node_modules/@radix-ui/react-menu/dist/index.mjs
var nd = Object.defineProperty, Z = (e, t) => nd(e, "name", {
	value: t,
	configurable: !0
}), rd = {
	LTR: "ltr",
	RTL: "rtl"
}, id = ["Enter", " "], ad = [
	"ArrowDown",
	"PageUp",
	"Home"
], od = [
	"ArrowUp",
	"PageDown",
	"End"
], sd = [...ad, ...od], cd = {
	ltr: [...id, "ArrowRight"],
	rtl: [...id, "ArrowLeft"]
}, ld = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, ud = "Menu", [dd, fd, pd] = /* @__PURE__ */ oa(ud), [md, hd] = /* @__PURE__ */ Ui(ud, [
	pd,
	Bc,
	Dl
]), gd = Bc(), _d = Dl(), [vd, yd] = md(ud), [bd, xd] = md(ud), Sd = /* @__PURE__ */ Z((e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = gd(t), [c, l] = x.useState(null), u = x.useRef(!1), d = Ea(a), f = Sa(i);
	return x.useEffect(() => {
		let e = /* @__PURE__ */ Z(() => {
			u.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, "handleKeyDown"), t = /* @__PURE__ */ Z(() => u.current = !1, "handlePointer");
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), x.useEffect(() => {
		if (!n) return;
		let e = /* @__PURE__ */ Z(() => d(!1), "handleBlur");
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [n, d]), /* @__PURE__ */ (0, S.jsx)(Uc, {
		...s,
		children: /* @__PURE__ */ (0, S.jsx)(vd, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ (0, S.jsx)(bd, {
				scope: t,
				onClose: x.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
}, "Menu"), Cd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = gd(n);
	return /* @__PURE__ */ (0, S.jsx)(Gc, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), wd = "MenuPortal", [Td, Ed] = md(wd, { forceMount: void 0 }), Dd = /* @__PURE__ */ Z((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = yd(wd, t);
	return /* @__PURE__ */ (0, S.jsx)(Td, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, S.jsx)(il, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, S.jsx)(el, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), Od = "MenuContent", [kd, Ad] = md(Od), jd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = Ed(Od, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = yd(Od, e.__scopeMenu), o = xd(Od, e.__scopeMenu);
	return /* @__PURE__ */ (0, S.jsx)(dd.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, S.jsx)(il, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, S.jsx)(dd.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, S.jsx)(Md, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, S.jsx)(Nd, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), Md = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = yd(Od, e.__scopeMenu), r = x.useRef(null), i = R(t, r);
	return x.useEffect(() => {
		let e = r.current;
		if (e) return Yl(e);
	}, []), /* @__PURE__ */ (0, S.jsx)(Fd, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: K(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentModal")), Nd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = yd(Od, e.__scopeMenu);
	return /* @__PURE__ */ (0, S.jsx)(Fd, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), Pd = /* @__PURE__ */ mn("MenuContent.ScrollLock"), Fd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, loop: r = !1, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...h } = e, g = yd(Od, n), _ = xd(Od, n), v = gd(n), y = _d(n), b = fd(n), [C, w] = x.useState(null), T = x.useRef(null), [ee, E] = x.useState(null);
	ro(ee);
	let { nodes: D, registry: te } = no(), O = !!(i || m), k = R(t, T, g.onContentChange, E), A = x.useRef(0), ne = x.useRef(""), j = x.useRef(0), M = x.useRef(null), N = x.useRef("right"), re = x.useRef(0), ie = x.useMemo(() => m ? [T, ...D.map((e) => ({ current: e }))] : [], [
		T,
		D,
		m
	]), ae = m ? td : x.Fragment, oe = m ? {
		as: Pd,
		allowPinchZoom: !0,
		shards: ie
	} : void 0, se = /* @__PURE__ */ Z((e) => {
		let t = ne.current + e, n = b().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = lf(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		function s(e) {
			ne.current = e, window.clearTimeout(A.current), e !== "" && (A.current = window.setTimeout(() => s(""), 1e3));
		}
		Z(s, "updateSearch"), s(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	x.useEffect(() => () => window.clearTimeout(A.current), []), Ka();
	let ce = x.useCallback((e) => N.current === M.current?.side && df(e, M.current?.area), []);
	return /* @__PURE__ */ (0, S.jsx)(kd, {
		scope: n,
		searchRef: ne,
		onItemEnter: x.useCallback((e) => {
			ce(e) && e.preventDefault();
		}, [ce]),
		onItemLeave: x.useCallback((e) => {
			ce(e) || (T.current?.focus(), w(null));
		}, [ce]),
		onTriggerLeave: x.useCallback((e) => {
			ce(e) && e.preventDefault();
		}, [ce]),
		pointerGraceTimerRef: j,
		onPointerGraceIntentChange: x.useCallback((e) => {
			M.current = e;
		}, []),
		children: /* @__PURE__ */ (0, S.jsx)(to, {
			registry: O ? te : null,
			children: /* @__PURE__ */ (0, S.jsx)(ae, {
				...oe,
				children: /* @__PURE__ */ (0, S.jsx)($a, {
					asChild: !0,
					trapped: i,
					branches: D,
					onMountAutoFocus: K(a, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: o,
					children: /* @__PURE__ */ (0, S.jsx)(Pa, {
						asChild: !0,
						disableOutsidePointerEvents: s,
						onEscapeKeyDown: l,
						onPointerDownOutside: u,
						onFocusOutside: d,
						onInteractOutside: f,
						onDismiss: p,
						children: /* @__PURE__ */ (0, S.jsx)(Ml, {
							asChild: !0,
							...y,
							dir: _.dir,
							orientation: "vertical",
							loop: r,
							currentTabStopId: C,
							onCurrentTabStopIdChange: w,
							onEntryFocus: K(c, (e) => {
								_.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ (0, S.jsx)(Yc, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": rf(g.open),
								"data-radix-menu-content": "",
								dir: _.dir,
								...v,
								...h,
								ref: k,
								style: {
									outline: "none",
									...h.style
								},
								onKeyDown: K(h.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && se(e.key));
									let i = T.current;
									if (e.target !== i || !sd.includes(e.key)) return;
									e.preventDefault();
									let a = b().filter((e) => !e.disabled).map((e) => e.ref.current);
									od.includes(e.key) && a.reverse(), sf(a);
								}),
								onBlur: K(e.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(A.current), ne.current = "");
								}),
								onPointerMove: K(e.onPointerMove, ff((e) => {
									let t = e.target, n = re.current !== e.clientX;
									if (e.currentTarget.contains(t) && n) {
										let t = e.clientX > re.current ? "right" : "left";
										N.current = t, re.current = e.clientX;
									}
								}))
							})
						})
					})
				})
			})
		})
	});
}, "MenuContentImpl")), Id = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(U.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), Ld = "MenuItem", Rd = "menu.itemSelect", zd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = x.useRef(null), o = xd(Ld, e.__scopeMenu), s = Ad(Ld, e.__scopeMenu), c = R(t, a), l = x.useRef(!1), u = /* @__PURE__ */ Z(() => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(Rd, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Rd, (e) => r?.(e), { once: !0 }), di(e, t), t.defaultPrevented ? l.current = !1 : o.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ (0, S.jsx)(Bd, {
		...i,
		ref: c,
		disabled: n,
		onClick: K(e.onClick, u),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), l.current = !0;
		},
		onPointerUp: K(e.onPointerUp, (e) => {
			l.current || e.currentTarget?.click();
		}),
		onKeyDown: K(e.onKeyDown, (e) => {
			n || e.target !== e.currentTarget || (s.searchRef.current === "" || e.key !== " ") && id.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Bd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = Ad(Ld, n), s = _d(n), c = x.useRef(null), l = R(t, c), [u, d] = x.useState(!1), [f, p] = x.useState("");
	return x.useEffect(() => {
		let e = c.current;
		e && p((e.textContent ?? "").trim());
	}, [a.children]), /* @__PURE__ */ (0, S.jsx)(dd.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: i ?? f,
		children: /* @__PURE__ */ (0, S.jsx)(Fl, {
			asChild: !0,
			...s,
			focusable: !r,
			children: /* @__PURE__ */ (0, S.jsx)(U.div, {
				role: "menuitem",
				"data-highlighted": u ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...a,
				ref: l,
				onPointerMove: K(e.onPointerMove, ff((e) => {
					r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: K(e.onPointerLeave, ff((e) => o.onItemLeave(e))),
				onFocus: K(e.onFocus, () => d(!0)),
				onBlur: K(e.onBlur, () => d(!1))
			})
		})
	});
}, "MenuItemImpl")), Vd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, S.jsx)(qd, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, S.jsx)(zd, {
			role: "menuitemcheckbox",
			"aria-checked": af(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": of(n),
			onSelect: K(i.onSelect, () => r?.(af(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [Hd, Ud] = md("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Z(() => {}, "onValueChange")
}), Wd = "MenuRadioItem", Gd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { value: n, ...r } = e, i = Ud(Wd, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, S.jsx)(qd, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, S.jsx)(zd, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": of(a),
			onSelect: K(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), Kd = "MenuItemIndicator", [qd, Jd] = md(Kd, { checked: !1 }), Yd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Jd(Kd, n);
	return /* @__PURE__ */ (0, S.jsx)(il, {
		present: r || af(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, S.jsx)(U.span, {
			...i,
			ref: t,
			"data-state": of(a.checked)
		})
	});
}, "MenuItemIndicator")), Xd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(U.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), [Zd, Qd] = md("MenuSub"), $d = "MenuSubTrigger", ef = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = yd($d, e.__scopeMenu), r = xd($d, e.__scopeMenu), i = Qd($d, e.__scopeMenu), a = Ad($d, e.__scopeMenu), o = x.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = x.useCallback(() => {
		o.current && window.clearTimeout(o.current), o.current = null;
	}, []);
	x.useEffect(() => u, [u]), x.useEffect(() => {
		let e = s.current;
		return () => {
			window.clearTimeout(e), c(null);
		};
	}, [s, c]);
	let d = R(t, i.onTriggerChange);
	return /* @__PURE__ */ (0, S.jsx)(Cd, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ (0, S.jsx)(Bd, {
			id: i.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": n.open ? i.contentId : void 0,
			"data-state": rf(n.open),
			...e,
			ref: d,
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: K(e.onPointerMove, ff((t) => {
				a.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || o.current || (a.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
					n.onOpenChange(!0), u();
				}, 100));
			})),
			onPointerLeave: K(e.onPointerLeave, ff((e) => {
				u();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", o = i ? -5 : 5, c = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					a.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + o,
								y: e.clientY
							},
							{
								x: c,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: c,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(s.current), s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300);
				} else {
					if (a.onTriggerLeave(e), e.defaultPrevented) return;
					a.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: K(e.onKeyDown, (t) => {
				e.disabled || t.target !== t.currentTarget || (a.searchRef.current === "" || t.key !== " ") && cd[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), tf = "MenuSubContent", nf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = Ed(Od, e.__scopeMenu), { forceMount: r = n.forceMount, align: i = "start", ...a } = e, o = yd(Od, e.__scopeMenu), s = xd(Od, e.__scopeMenu), c = Qd(tf, e.__scopeMenu), l = x.useRef(null), u = R(t, l);
	return /* @__PURE__ */ (0, S.jsx)(dd.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, S.jsx)(il, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, S.jsx)(dd.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, S.jsx)(Fd, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: i,
					side: s.dir === rd.RTL ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: K(e.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: K(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: K(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = ld[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function rf(e) {
	return e ? "open" : "closed";
}
Z(rf, "getOpenState");
function af(e) {
	return e === "indeterminate";
}
Z(af, "isIndeterminate");
function of(e) {
	return af(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Z(of, "getCheckedState");
function sf(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Z(sf, "focusFirst");
function cf(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Z(cf, "wrapArray");
function lf(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = cf(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Z(lf, "getNextMatch");
function uf(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Z(uf, "isPointInPolygon");
function df(e, t) {
	return t ? uf({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Z(df, "isPointerInGraceArea");
function ff(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Z(ff, "whenMouse");
// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var pf = Object.defineProperty, mf = (e, t) => pf(e, "name", {
	value: t,
	configurable: !0
}), hf = "DropdownMenu", [gf, _f] = /* @__PURE__ */ Ui(hf, [hd]), vf = hd(), [yf, bf] = gf(hf), xf = /* @__PURE__ */ mf((e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = vf(t), l = x.useRef(null), [u, d] = $i({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: hf
	});
	return /* @__PURE__ */ (0, S.jsx)(yf, {
		scope: t,
		triggerId: bo(),
		triggerRef: l,
		contentId: bo(),
		open: u,
		onOpenChange: d,
		onOpenToggle: x.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ (0, S.jsx)(Sd, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
}, "DropdownMenu"), Sf = "DropdownMenuTrigger", Cf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = bf(Sf, n), o = vf(n), s = R(t, a.triggerRef);
	return /* @__PURE__ */ (0, S.jsx)(Cd, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, S.jsx)(U.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: s,
			onPointerDown: K(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: K(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), wf = /* @__PURE__ */ mf((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = vf(t);
	return /* @__PURE__ */ (0, S.jsx)(Dd, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), Tf = "DropdownMenuContent", Ef = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = bf(Tf, n), a = vf(n), o = x.useRef(!1);
	return /* @__PURE__ */ (0, S.jsx)(jd, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: K(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: K(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "DropdownMenuContent")), Df = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(Id, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), Of = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(zd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), kf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(Vd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), Af = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(Gd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), jf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(Yd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItemIndicator")), Mf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(Xd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), Nf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(ef, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), Pf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ mf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = vf(n);
	return /* @__PURE__ */ (0, S.jsx)(nf, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "DropdownMenuSubContent")), Ff = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), If = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lf = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Rf = (e) => {
	let t = Lf(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, zf = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Bf = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Vf = (0, x.forwardRef)(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => (0, x.createElement)("svg", {
	ref: c,
	...zf,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: Ff("lucide", i),
	...!a && !Bf(s) && { "aria-hidden": "true" },
	...s
}, [...o.map(([e, t]) => (0, x.createElement)(e, t)), ...Array.isArray(a) ? a : [a]])), Q = (e, t) => {
	let n = (0, x.forwardRef)(({ className: n, ...r }, i) => (0, x.createElement)(Vf, {
		ref: i,
		iconNode: t,
		className: Ff(`lucide-${If(Rf(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Rf(e), n;
}, Hf = Q("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), Uf = Q("calendar-clock", [
	["path", {
		d: "M16 14v2.2l1.6 1",
		key: "fo4ql5"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
		key: "1osxxc"
	}],
	["path", {
		d: "M3 10h5",
		key: "r794hk"
	}],
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["circle", {
		cx: "16",
		cy: "16",
		r: "6",
		key: "qoo3c4"
	}]
]), Wf = Q("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Gf = Q("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Kf = Q("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), qf = Q("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Jf = Q("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), Yf = Q("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), Xf = Q("circle-dollar-sign", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
		key: "1h4pet"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}]
]), Zf = Q("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Qf = Q("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), $f = Q("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), ep = Q("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), tp = Q("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), np = Q("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), rp = Q("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]), ip = Q("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]), ap = Q("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), op = Q("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), sp = Q("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), cp = Q("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), lp = Q("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), up = Q("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), dp = Q("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), fp = Q("user-plus", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["line", {
		x1: "19",
		x2: "19",
		y1: "8",
		y2: "14",
		key: "1bvyxn"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11",
		key: "1shjgl"
	}]
]), pp = Q("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), mp = Q("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), hp = xf, gp = Cf, _p = x.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ (0, S.jsxs)(Nf, {
	ref: i,
	className: H("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ (0, S.jsx)(Kf, { className: "ml-auto" })]
}));
_p.displayName = Nf.displayName;
var vp = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Pf, {
	ref: n,
	className: H("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", e),
	...t
}));
vp.displayName = Pf.displayName;
var yp = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(wf, {
	container: Mi(),
	children: /* @__PURE__ */ (0, S.jsx)(Ef, {
		ref: r,
		sideOffset: t,
		className: H("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", e),
		...n
	})
}));
yp.displayName = Ef.displayName;
var bp = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(Of, {
	ref: r,
	className: H("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e),
	...n
}));
bp.displayName = Of.displayName;
var xp = x.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ (0, S.jsxs)(kf, {
	ref: i,
	className: H("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ (0, S.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, S.jsx)(jf, { children: /* @__PURE__ */ (0, S.jsx)(Wf, { className: "h-4 w-4" }) })
	}), t]
}));
xp.displayName = kf.displayName;
var Sp = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsxs)(Af, {
	ref: r,
	className: H("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, S.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, S.jsx)(jf, { children: /* @__PURE__ */ (0, S.jsx)(Zf, { className: "h-2 w-2 fill-current" }) })
	}), t]
}));
Sp.displayName = Af.displayName;
var Cp = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(Df, {
	ref: r,
	className: H("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
	...n
}));
Cp.displayName = Df.displayName;
var wp = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Mf, {
	ref: n,
	className: H("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
wp.displayName = Mf.displayName;
var Tp = /* @__PURE__ */ c({
	computeNextDue: () => Op,
	createAccount: () => Fp,
	deleteAccount: () => Lp,
	deleteAccountPayment: () => Bp,
	formatMoney: () => Ap,
	listAccountPayments: () => Mp,
	listAccounts: () => Pp,
	overdueMonths: () => Np,
	recordAccountPayment: () => jp,
	setAccountMembers: () => zp,
	setMemberAccount: () => Rp,
	statusFor: () => kp,
	updateAccount: () => Ip
});
function Ep(e, t, n) {
	let r = new Date(e, t + 1, 0).getDate();
	return Math.min(n, r);
}
function Dp(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Op(e, t = /* @__PURE__ */ new Date()) {
	let n = new Date(t.getFullYear(), t.getMonth(), Ep(t.getFullYear(), t.getMonth(), e));
	if (n <= t) {
		let n = t.getMonth() === 11 ? t.getFullYear() + 1 : t.getFullYear(), r = (t.getMonth() + 1) % 12;
		return Dp(new Date(n, r, Ep(n, r, e)));
	}
	return Dp(n);
}
function kp(e) {
	if (!e) return {
		status: "none",
		daysDiff: 0
	};
	if (e.is_free) return {
		status: "free",
		daysDiff: 0
	};
	if (!e.next_due_date) return {
		status: "none",
		daysDiff: 0
	};
	let t = /* @__PURE__ */ new Date();
	t.setHours(0, 0, 0, 0);
	let n = (/* @__PURE__ */ new Date(e.next_due_date + "T00:00:00")).getTime() - t.getTime(), r = Math.round(n / 864e5);
	return r < 0 ? {
		status: "overdue",
		daysDiff: -r
	} : r <= 5 ? {
		status: "due_soon",
		daysDiff: r
	} : {
		status: "paid",
		daysDiff: r
	};
}
function Ap(e, t = "USD") {
	try {
		return new Intl.NumberFormat(void 0, {
			style: "currency",
			currency: t
		}).format(e / 100);
	} catch {
		return `${(e / 100).toFixed(2)} ${t}`;
	}
}
async function jp(e) {
	if (!(await Pp()).find((t) => t.id === e.accountId)) throw Error("Account not found");
	await Gt("record_payment", {
		...e,
		requestId: crypto.randomUUID()
	});
}
async function Mp(e) {
	return (await Gt("list", { table: "plex_account_payments" })).filter((t) => t.account_id === e).reverse();
}
function Np(e, t = /* @__PURE__ */ new Date()) {
	if (e.is_free || !e.next_due_date) return 0;
	let n = /* @__PURE__ */ new Date(e.next_due_date + "T00:00:00"), r = new Date(t.getFullYear(), t.getMonth(), t.getDate()), i = 0;
	for (; n < r && i < 12e3;) {
		i++;
		let t = n.getFullYear() + +(n.getMonth() === 11), r = (n.getMonth() + 1) % 12;
		n = new Date(t, r, Ep(t, r, e.billing_day));
	}
	return i;
}
var Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp = o((() => {
	Jt(), Pp = () => Gt("list", { table: "plex_billing_accounts" }), Fp = (e) => Gt("create_account", e), Ip = (e) => Gt("update_account", e), Lp = (e) => Gt("delete_account", { id: e }), Rp = (e, t) => Gt("update_member", {
		id: e,
		values: { account_id: t }
	}), zp = (e, t) => Gt("assign_members", {
		accountId: e,
		memberIds: t
	}), Bp = (e) => Gt("delete_payment", { id: e });
}));
// node_modules/@radix-ui/react-switch/dist/index.mjs
Vp();
var Hp = Object.defineProperty, Up = (e, t) => Hp(e, "name", {
	value: t,
	configurable: !0
}), Wp = "Switch", [Gp, Kp] = /* @__PURE__ */ Ui(Wp), [qp, Jp] = Gp(Wp);
function Yp(e) {
	let { __scopeSwitch: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u = "on", internal_do_not_use_render: d } = e, [f, p] = $i({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: Wp
	}), [m, h] = x.useState(null), [g, _] = x.useState(null), [v, y] = x.useState(null), b = {
		checked: f,
		setChecked: p,
		disabled: a,
		control: m,
		setControl: h,
		name: s,
		form: o,
		value: u,
		userClick: v,
		onUserClick: y,
		required: l,
		defaultChecked: i,
		isFormControl: !m || !!o || !!m.closest("form"),
		bubbleInput: g,
		setBubbleInput: _
	};
	return /* @__PURE__ */ (0, S.jsx)(qp, {
		scope: t,
		...b,
		children: rm(d) ? d(b) : r
	});
}
Up(Yp, "SwitchProvider");
var Xp = "SwitchTrigger", Zp = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Up(function({ __scopeSwitch: e, onClick: t, ...n }, r) {
	let { control: i, form: a, value: o, disabled: s, checked: c, required: l, setControl: u, setChecked: d, onUserClick: f, isFormControl: p, bubbleInput: m } = Jp(Xp, e), h = R(r, u), g = x.useRef(c);
	return x.useEffect(() => {
		let e = a ? i?.ownerDocument.getElementById(a) : i?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ Up(() => d(g.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		i,
		a,
		d
	]), /* @__PURE__ */ (0, S.jsx)(U.button, {
		type: "button",
		role: "switch",
		"aria-checked": c,
		"aria-required": l,
		"data-state": im(c),
		"data-disabled": s ? "" : void 0,
		disabled: s,
		value: o,
		...n,
		ref: h,
		onClick: K(t, (e) => {
			let t = e.isPropagationStopped();
			f({
				requestedChecked: !c,
				hasConsumerStoppedPropagation: t
			}), d((e) => !e), m && p && (t || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), Qp = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ (0, S.jsx)(Yp, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(Zp, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ (0, S.jsx)(nm, { __scopeSwitch: n })] })
	});
}, "Switch")), $p = "SwitchThumb", em = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = Jp($p, n);
	return /* @__PURE__ */ (0, S.jsx)(U.span, {
		"data-state": im(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), tm = "SwitchBubbleInput", nm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Up(function({ __scopeSwitch: e, onClick: t, ...n }, r) {
	let { control: i, userClick: a, checked: o, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = Jp(tm, e), h = R(r, m), g = Nc(i), _ = x.useRef(!1), v = x.useRef(o), y = x.useRef(a), b = x.useRef(null);
	x.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (!n) return;
		let r = v.current !== o;
		v.current = o;
		let i = a !== null && a !== y.current;
		if (y.current = a, i) b.current = r ? null : a, r && n.call(e, o), e.dispatchEvent(new Event("click", { bubbles: !a.hasConsumerStoppedPropagation }));
		else if (r) {
			let t = b.current;
			b.current = null;
			let r = t?.requestedChecked === o;
			_.current = !0, n.call(e, o), e.dispatchEvent(new Event("click", { bubbles: !(r && t.hasConsumerStoppedPropagation) })), _.current = !1;
		}
	}, [
		p,
		o,
		a
	]);
	let C = x.useRef(o);
	return /* @__PURE__ */ (0, S.jsx)(U.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? C.current,
		required: c,
		disabled: l,
		name: u,
		value: d,
		form: f,
		...n,
		tabIndex: -1,
		ref: h,
		onClick: K(t, (e) => {
			_.current && e.stopPropagation();
		}),
		style: {
			...n.style,
			...g,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "SwitchBubbleInput"));
function rm(e) {
	return typeof e == "function";
}
Up(rm, "isFunction");
function im(e) {
	return e ? "checked" : "unchecked";
}
Up(im, "getState");
// src/components/ui/switch.tsx
var am = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Qp, {
	className: H("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
	...t,
	ref: n,
	children: /* @__PURE__ */ (0, S.jsx)(em, { className: H("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
am.displayName = Qp.displayName;
// node_modules/@radix-ui/react-dialog/dist/index.mjs
var om = Object.defineProperty, sm = (e, t) => om(e, "name", {
	value: t,
	configurable: !0
}), cm = "Dialog", [lm, um] = /* @__PURE__ */ Ui(cm), [dm, fm] = lm(cm), pm = /* @__PURE__ */ sm((e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = x.useRef(null), c = x.useRef(null), { nodes: l, registry: u } = no(), [d, f] = $i({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: cm
	}), [p, m] = x.useState(0), [h, g] = x.useState(0);
	return /* @__PURE__ */ (0, S.jsx)(dm, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: bo(),
		titleId: bo(),
		descriptionId: bo(),
		titlePresent: p > 0,
		descriptionPresent: h > 0,
		setTitleCount: m,
		setDescriptionCount: g,
		open: d,
		onOpenChange: f,
		onOpenToggle: x.useCallback(() => f((e) => !e), [f]),
		modal: o,
		branchNodes: l,
		branchRegistry: u,
		children: n
	});
}, "Dialog"), mm = "DialogPortal", [hm, gm] = lm(mm, { forceMount: void 0 }), _m = /* @__PURE__ */ sm((e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = fm(mm, t);
	return /* @__PURE__ */ (0, S.jsx)(hm, {
		scope: t,
		forceMount: n,
		children: x.Children.map(r, (e) => /* @__PURE__ */ (0, S.jsx)(il, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, S.jsx)(el, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
}, "DialogPortal"), vm = "DialogOverlay", ym = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let n = gm(vm, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = fm(vm, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, S.jsx)(il, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, S.jsx)(xm, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), bm = /* @__PURE__ */ mn("DialogOverlay.RemoveScroll"), xm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = fm(vm, n), a = R(t, Fa());
	return /* @__PURE__ */ (0, S.jsx)(td, {
		as: bm,
		allowPinchZoom: !0,
		shards: x.useMemo(() => [i.contentRef, ...i.branchNodes.map((e) => ({ current: e }))], [i.contentRef, i.branchNodes]),
		children: /* @__PURE__ */ (0, S.jsx)(U.div, {
			"data-state": Mm(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}, "DialogOverlayImpl")), Sm = "DialogContent", Cm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let n = gm(Sm, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = fm(Sm, e.__scopeDialog);
	return /* @__PURE__ */ (0, S.jsx)(il, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, S.jsx)(wm, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, S.jsx)(Tm, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), wm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let n = fm(Sm, e.__scopeDialog), r = x.useRef(null), i = R(t, n.contentRef, r);
	return x.useEffect(() => {
		let e = r.current;
		if (e) return Yl(e);
	}, []), /* @__PURE__ */ (0, S.jsx)(Em, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: K(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: K(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: K(e.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), Tm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let n = fm(Sm, e.__scopeDialog), r = x.useRef(!1), i = x.useRef(!1);
	return /* @__PURE__ */ (0, S.jsx)(Em, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "DialogContentNonModal")), Em = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = fm(Sm, n);
	return Ka(), /* @__PURE__ */ (0, S.jsx)(to, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ (0, S.jsx)($a, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ (0, S.jsx)(Pa, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? jm(o, l.descriptionId) : o,
				"data-state": Mm(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), Dm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = fm("DialogTitle", n), { setTitleCount: a } = i;
	return Gi(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, S.jsx)(U.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), Om = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = fm("DialogDescription", n), { setDescriptionCount: a } = i;
	return Gi(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, S.jsx)(U.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), km = "DialogClose", Am = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ sm(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = fm(km, n);
	return /* @__PURE__ */ (0, S.jsx)(U.button, {
		type: "button",
		...r,
		ref: t,
		onClick: K(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function jm(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
sm(jm, "concatAriaDescribedby");
function Mm(e) {
	return e ? "open" : "closed";
}
sm(Mm, "getState");
// src/components/ui/dialog.tsx
var Nm = pm, Pm = (e) => /* @__PURE__ */ (0, S.jsx)(_m, {
	container: Mi(),
	...e
}), Fm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(ym, {
	ref: n,
	className: H("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
Fm.displayName = ym.displayName;
var Im = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(Pm, { children: /* @__PURE__ */ (0, S.jsx)(Fm, { children: /* @__PURE__ */ (0, S.jsxs)(Cm, {
	ref: r,
	"data-slot": "dialog-content",
	className: H("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", e),
	...n,
	children: [t, /* @__PURE__ */ (0, S.jsxs)(Am, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, S.jsx)(mp, { className: "h-4 w-4" }), /* @__PURE__ */ (0, S.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
}) }) }));
Im.displayName = Cm.displayName;
var Lm = ({ className: e, ...t }) => /* @__PURE__ */ (0, S.jsx)("div", {
	className: H("flex flex-col space-y-1.5 text-center sm:text-left", e),
	...t
});
Lm.displayName = "DialogHeader";
var Rm = ({ className: e, ...t }) => /* @__PURE__ */ (0, S.jsx)("div", {
	"data-slot": "dialog-footer",
	className: H("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
Rm.displayName = "DialogFooter";
var zm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Dm, {
	ref: n,
	className: H("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
zm.displayName = Dm.displayName;
var Bm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Om, {
	ref: n,
	className: H("text-sm text-muted-foreground", e),
	...t
}));
Bm.displayName = Om.displayName;
// node_modules/@radix-ui/number/dist/index.mjs
var Vm = Object.defineProperty, Hm = (e, t) => Vm(e, "name", {
	value: t,
	configurable: !0
});
function Um(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
Hm(Um, "clamp");
// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Wm = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), Gm = Object.defineProperty, $ = (e, t) => Gm(e, "name", {
	value: t,
	configurable: !0
}), Km = {
	ItemAligned: "item-aligned",
	Popper: "popper"
}, qm = {
	LTR: "ltr",
	RTL: "rtl"
}, Jm = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Ym = [" ", "Enter"], Xm = "Select", [Zm, Qm, $m] = /* @__PURE__ */ oa(Xm), [eh, th] = /* @__PURE__ */ Ui(Xm, [$m, Bc]), nh = Bc(), [rh, ih] = eh(Xm), [ah, oh] = eh(Xm);
function sh(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m, internal_do_not_use_render: h } = e, g = nh(t), [_, v] = x.useState(null), [y, b] = x.useState(null), [C, w] = x.useState(!1), T = Sa(l), [ee, E] = $i({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Xm
	}), [D, te] = $i({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: Xm
	}), O = x.useRef(null), k = x.useRef(!1), [A, ne] = x.useState(null), j = /* @__PURE__ */ $((e) => {
		ne({
			value: e,
			hasConsumerStoppedPropagation: k.current
		}), te(e);
	}, "handleUserSelect"), M = x.useRef(D);
	x.useEffect(() => {
		let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => te(M.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		m,
		_,
		te
	]);
	let N = !_ || !!m || !!_.closest("form"), [re, ie] = x.useState(/* @__PURE__ */ new Set()), ae = bo(), oe = Array.from(re).map((e) => e.props.value).join(";"), se = x.useCallback((e) => {
		ie((t) => new Set(t).add(e));
	}, []), ce = x.useCallback((e) => {
		ie((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), le = {
		required: p,
		trigger: _,
		onTriggerChange: v,
		valueNode: y,
		onValueNodeChange: b,
		valueNodeHasChildren: C,
		onValueNodeHasChildrenChange: w,
		contentId: ae,
		value: D,
		onValueChange: te,
		hasConsumerStoppedPropagationRef: k,
		userSelection: A,
		onUserSelect: j,
		open: ee,
		onOpenChange: E,
		dir: T,
		triggerPointerDownPosRef: O,
		disabled: f,
		name: u,
		autoComplete: d,
		form: m,
		nativeOptions: re,
		nativeSelectKey: oe,
		isFormControl: N
	};
	return /* @__PURE__ */ (0, S.jsx)(Uc, {
		...g,
		children: /* @__PURE__ */ (0, S.jsx)(rh, {
			scope: t,
			...le,
			children: /* @__PURE__ */ (0, S.jsx)(Zm.Provider, {
				scope: t,
				children: /* @__PURE__ */ (0, S.jsx)(ah, {
					scope: t,
					onNativeOptionAdd: se,
					onNativeOptionRemove: ce,
					children: Zh(h) ? h(le) : n
				})
			})
		})
	});
}
$(sh, "SelectProvider");
var ch = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(sh, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [n, e ? /* @__PURE__ */ (0, S.jsx)(Xh, { __scopeSelect: t }) : null] })
	});
}, "Select"), lh = "SelectTrigger", uh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = nh(n), o = ih(lh, n), s = o.disabled || r, c = R(t, o.onTriggerChange), l = Qm(n), u = x.useRef("touch"), [d, f, p] = $h((e) => {
		let t = l().filter((e) => !e.disabled), n = eg(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onUserSelect(n.value);
	}), m = /* @__PURE__ */ $((e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, S.jsx)(Gc, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, S.jsx)(U.button, {
			type: "button",
			role: "combobox",
			"aria-controls": o.open ? o.contentId : void 0,
			"aria-expanded": o.open,
			"aria-required": o.required,
			"aria-autocomplete": "none",
			dir: o.dir,
			"data-state": o.open ? "open" : "closed",
			disabled: s,
			"data-disabled": s ? "" : void 0,
			"data-placeholder": Qh(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: K(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: K(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: K(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && (o.hasConsumerStoppedPropagationRef.current = e.isPropagationStopped(), f(e.key)), !(t && e.key === " ") && Jm.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), dh = "SelectValue", fh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = ih(dh, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = R(t, c.onValueNodeChange);
	Gi(() => {
		l(u);
	}, [l, u]);
	let f = Qh(c.value);
	return /* @__PURE__ */ (0, S.jsx)(U.span, {
		...s,
		asChild: !f && s.asChild,
		ref: d,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, S.jsx)(x.Fragment, { children: f ? o : a }, f ? "placeholder" : "value")
	});
}, "SelectValue")), ph = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, S.jsx)(U.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [mh, hh] = eh("SelectPortal", { forceMount: void 0 }), gh = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(mh, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, S.jsx)(el, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), _h = "SelectContent", vh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = hh(_h, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = ih(_h, e.__scopeSelect), [o, s] = x.useState();
	return Gi(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, S.jsx)(il, {
		present: r || a.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, S.jsx)(wh, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, S.jsx)(yh, {
			...i,
			fragment: o
		})
	});
}, "SelectContent")), yh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? ft.createPortal(/* @__PURE__ */ (0, S.jsx)(xh, {
		scope: n,
		children: /* @__PURE__ */ (0, S.jsx)(Zm.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, S.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), bh = 10, [xh, Sh] = eh(_h), Ch = /* @__PURE__ */ mn("SelectContent.RemoveScroll"), wh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n } = e, { position: r = Km.ItemAligned, onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: m, hideWhenDetached: h, avoidCollisions: g, ..._ } = e, v = ih(_h, n), [y, b] = x.useState(null), [C, w] = x.useState(null), T = R(t, b), [ee, E] = x.useState(null), [D, te] = x.useState(null), O = Qm(n), [k, A] = x.useState(!1), ne = x.useRef(!1), j = x.useRef(!1), M = x.useRef(!1);
	x.useEffect(() => {
		if (y) return Yl(y);
	}, [y]), Ka();
	let N = x.useCallback((e) => {
		let [t, ...n] = O().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && C && (C.scrollTop = 0), n === r && C && (C.scrollTop = C.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [O, C]), re = x.useCallback(() => N([ee, y]), [
		N,
		ee,
		y
	]);
	x.useEffect(() => {
		k && re();
	}, [k, re]);
	let { onOpenChange: ie, triggerPointerDownPosRef: ae } = v;
	x.useEffect(() => {
		if (y) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ $((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (ae.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (ae.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ $((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(y) || ie(!1), document.removeEventListener("pointermove", t), ae.current = null;
			}, "handlePointerUp");
			return ae.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		y,
		ie,
		ae
	]), x.useEffect(() => {
		let e = /* @__PURE__ */ $(() => ie(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [ie]);
	let [oe, se] = $h((e) => {
		let t = O().filter((e) => !e.disabled), n = eg(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), ce = x.useCallback((e, t, n) => {
		let r = !j.current;
		r && (j.current = !0);
		let i = !ne.current && !n;
		v.value !== void 0 && v.value === t || i ? (E(e), i && (ne.current = !0)) : r && E(e);
	}, [v.value]), le = x.useCallback(() => y?.focus(), [y]), ue = x.useCallback((e, t, n) => {
		if (!e) return;
		let r = !M.current;
		r && (M.current = !0);
		let i = !ne.current && !n;
		(v.value !== void 0 && v.value === t || i || r) && te(e);
	}, [v.value]), de = r === Km.Popper ? Eh : Th, fe = de === Eh ? {
		side: s,
		sideOffset: c,
		align: l,
		alignOffset: u,
		arrowPadding: d,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: m,
		hideWhenDetached: h,
		avoidCollisions: g
	} : {};
	return /* @__PURE__ */ (0, S.jsx)(xh, {
		scope: n,
		content: y,
		viewport: C,
		onViewportChange: w,
		itemRefCallback: ce,
		selectedItem: ee,
		onItemLeave: le,
		itemTextRefCallback: ue,
		focusSelectedItem: re,
		selectedItemText: D,
		position: r,
		isPositioned: k,
		searchRef: oe,
		children: /* @__PURE__ */ (0, S.jsx)(td, {
			as: Ch,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, S.jsx)($a, {
				asChild: !0,
				trapped: v.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: K(i, (e) => {
					v.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, S.jsx)(Pa, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => v.onOpenChange(!1),
					children: /* @__PURE__ */ (0, S.jsx)(de, {
						role: "listbox",
						id: v.contentId,
						"data-state": v.open ? "open" : "closed",
						dir: v.dir,
						onContextMenu: (e) => e.preventDefault(),
						..._,
						...fe,
						onPlaced: () => A(!0),
						ref: T,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							..._.style
						},
						onKeyDown: K(_.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && se(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = O().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => N(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl")), Th = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = ih(_h, n), o = Sh(_h, n), [s, c] = x.useState(null), [l, u] = x.useState(null), d = R(t, u), f = Qm(n), p = x.useRef(!1), m = x.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = x.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== qm.RTL) {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - bh, d = Um(a, [bh, Math.max(bh, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - bh, d = Um(a, [bh, Math.max(bh, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - bh * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), ee = e.top + e.height / 2 - bh, E = c - ee, D = g.offsetHeight / 2, te = g.offsetTop + D, O = m + v + te, k = x - O;
			if (O <= ee) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = O + Math.max(E, D + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(ee, m + h.offsetTop + (e ? w : 0) + D) + k;
				s.style.height = t + "px", h.scrollTop = O - ee + h.offsetTop;
			}
			s.style.margin = `${bh}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		h,
		g,
		_,
		a.dir,
		r
	]);
	Gi(() => y(), [y]);
	let [b, C] = x.useState();
	Gi(() => {
		l && C(window.getComputedStyle(l).zIndex);
	}, [l]);
	let w = x.useCallback((e) => {
		e && m.current === !0 && (y(), v?.(), m.current = !1);
	}, [y, v]);
	return /* @__PURE__ */ (0, S.jsx)(Dh, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: w,
		children: /* @__PURE__ */ (0, S.jsx)("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: b
			},
			children: /* @__PURE__ */ (0, S.jsx)(U.div, {
				...i,
				ref: d,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition")), Eh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = bh, ...a } = e, o = nh(n);
	return /* @__PURE__ */ (0, S.jsx)(Yc, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition")), [Dh, Oh] = eh(_h, {}), kh = "SelectViewport", Ah = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = Sh(kh, n), o = Oh(kh, n), s = R(t, a.onViewportChange), c = x.useRef(0);
	return /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ (0, S.jsx)(Zm.Slot, {
		scope: n,
		children: /* @__PURE__ */ (0, S.jsx)(U.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...i,
			ref: s,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...i.style
			},
			onScroll: K(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - bh * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				c.current = t.scrollTop;
			})
		})
	})] });
}, "SelectViewport")), [jh, Mh] = eh("SelectGroup"), Nh = "SelectLabel", Ph = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e, i = Mh(Nh, n);
	return /* @__PURE__ */ (0, S.jsx)(U.div, {
		id: i.id,
		...r,
		ref: t
	});
}, "SelectLabel")), Fh = "SelectItem", [Ih, Lh] = eh(Fh), Rh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = ih(Fh, n), c = Sh(Fh, n), l = s.value === r, [u, d] = x.useState(a ?? ""), [f, p] = x.useState(!1), m = R(t, Ea((e) => c.itemRefCallback?.(e, r, i))), h = bo(), g = x.useRef("touch");
	function _(e) {
		s.hasConsumerStoppedPropagationRef.current = e.isPropagationStopped(), s.onUserSelect(r), s.onOpenChange(!1);
	}
	return $(_, "handleSelect"), /* @__PURE__ */ (0, S.jsx)(Ih, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: x.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, S.jsx)(Zm.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ (0, S.jsx)(U.div, {
				role: "option",
				"aria-labelledby": h,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: m,
				onFocus: K(o.onFocus, () => p(!0)),
				onBlur: K(o.onBlur, () => p(!1)),
				onClick: K(o.onClick, (e) => {
					i || g.current !== "mouse" && _(e);
				}),
				onPointerUp: K(o.onPointerUp, (e) => {
					i || g.current === "mouse" && _(e);
				}),
				onPointerDown: K(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: K(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: K(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: K(o.onKeyDown, (e) => {
					i || e.target !== e.currentTarget || (c.searchRef?.current === "" || e.key !== " ") && (Ym.includes(e.key) && _(e), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), zh = "SelectItemText", Bh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = ih(zh, n), s = Sh(zh, n), c = Lh(zh, n), l = oh(zh, n), [u, d] = x.useState(null), f = Ea((e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = R(t, d, c.onItemTextChange, f), m = u?.textContent, h = x.useMemo(() => /* @__PURE__ */ (0, S.jsx)("option", {
		value: c.value,
		disabled: c.disabled,
		children: m
	}, c.value), [
		c.disabled,
		c.value,
		m
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = l;
	return Gi(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(U.span, {
		id: c.textId,
		...a,
		ref: p
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren && !Qh(o.value) ? ft.createPortal(a.children, o.valueNode) : null] });
}, "SelectItemText")), Vh = "SelectItemIndicator", Hh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return Lh(Vh, n).isSelected ? /* @__PURE__ */ (0, S.jsx)(U.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), Uh = "SelectScrollUpButton", Wh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = Sh(Uh, e.__scopeSelect), r = Oh(Uh, e.__scopeSelect), [i, a] = x.useState(!1), o = R(t, r.onScrollButtonChange);
	return Gi(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				a(e);
			};
			$(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, S.jsx)(qh, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), Gh = "SelectScrollDownButton", Kh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = Sh(Gh, e.__scopeSelect), r = Oh(Gh, e.__scopeSelect), [i, a] = x.useState(!1), o = R(t, r.onScrollButtonChange);
	return Gi(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				a(n);
			};
			$(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, S.jsx)(qh, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), qh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = Sh("SelectScrollButton", n), o = x.useRef(null), s = Qm(n), c = x.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return x.useEffect(() => () => c(), [c]), Gi(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ (0, S.jsx)(U.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: K(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: K(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: K(i.onPointerLeave, () => {
			c();
		})
	});
}, "SelectScrollButtonImpl")), Jh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(U.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
}, "SelectSeparator")), Yh = "SelectBubbleInput", Xh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function({ __scopeSelect: e, ...t }, n) {
	let r = ih(Yh, e), { value: i, onValueChange: a, required: o, disabled: s, name: c, autoComplete: l, form: u, userSelection: d } = r, { nativeOptions: f, nativeSelectKey: p } = r, m = x.useRef(null), h = R(n, m), g = i ?? "", _ = x.useRef(g), v = x.useRef(d), y = x.useRef(!1), b = Array.from(f).some((e) => (e.props.value ?? "") === "");
	return x.useEffect(() => {
		let e = m.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set, r = d !== null && d !== v.current;
		v.current = d;
		let i = _.current !== g;
		_.current = g;
		let a = r && i;
		if (r && !i && d.value !== g && !d.hasConsumerStoppedPropagation && n) {
			y.current = !0;
			try {
				n.call(e, d.value), e.dispatchEvent(new Event("change", { bubbles: !0 }));
			} finally {
				y.current = !1, n.call(e, g);
			}
			return;
		}
		let o = a && !d.hasConsumerStoppedPropagation;
		if (i && n) {
			let t = new Event("change", { bubbles: o });
			n.call(e, g), e.dispatchEvent(t);
		}
	}, [g, d]), /* @__PURE__ */ (0, S.jsxs)(U.select, {
		"aria-hidden": !0,
		required: o,
		tabIndex: -1,
		name: c,
		autoComplete: l,
		disabled: s,
		form: u,
		onChange: (e) => {
			y.current || a(e.target.value);
		},
		...t,
		style: {
			...Wm,
			...t.style
		},
		ref: h,
		defaultValue: g,
		children: [Qh(i) && !b ? /* @__PURE__ */ (0, S.jsx)("option", { value: "" }) : null, Array.from(f)]
	}, p);
}, "SelectBubbleInput"));
function Zh(e) {
	return typeof e == "function";
}
$(Zh, "isFunction");
function Qh(e) {
	return e === "" || e === void 0;
}
$(Qh, "shouldShowPlaceholder");
function $h(e) {
	let t = Ea(e), n = x.useRef(""), r = x.useRef(0), i = x.useCallback((e) => {
		let i = n.current + e;
		t(i);
		function a(e) {
			n.current = e, window.clearTimeout(r.current), e !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
		}
		$(a, "updateSearch"), a(i);
	}, [t]), a = x.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return x.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
$($h, "useTypeaheadSearch");
function eg(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = tg(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
$(eg, "findNextItem");
function tg(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$(tg, "wrapArray");
// src/components/ui/select.tsx
var ng = ch, rg = fh, ig = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsxs)(uh, {
	ref: r,
	className: H("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ (0, S.jsx)(ph, {
		asChild: !0,
		children: /* @__PURE__ */ (0, S.jsx)(Gf, { className: "h-4 w-4 opacity-50" })
	})]
}));
ig.displayName = uh.displayName;
var ag = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Wh, {
	ref: n,
	className: H("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ (0, S.jsx)(qf, { className: "h-4 w-4" })
}));
ag.displayName = Wh.displayName;
var og = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Kh, {
	ref: n,
	className: H("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ (0, S.jsx)(Gf, { className: "h-4 w-4" })
}));
og.displayName = Kh.displayName;
var sg = x.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ (0, S.jsx)(gh, {
	container: Mi(),
	children: /* @__PURE__ */ (0, S.jsxs)(vh, {
		ref: i,
		className: H("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		...r,
		children: [
			/* @__PURE__ */ (0, S.jsx)(ag, {}),
			/* @__PURE__ */ (0, S.jsx)(Ah, {
				className: H("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
				children: t
			}),
			/* @__PURE__ */ (0, S.jsx)(og, {})
		]
	})
}));
sg.displayName = vh.displayName;
var cg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Ph, {
	ref: n,
	className: H("px-2 py-1.5 text-sm font-semibold", e),
	...t
}));
cg.displayName = Ph.displayName;
var lg = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsxs)(Rh, {
	ref: r,
	className: H("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, S.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, S.jsx)(Hh, { children: /* @__PURE__ */ (0, S.jsx)(Wf, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, S.jsx)(Bh, { children: t })]
}));
lg.displayName = Rh.displayName;
var ug = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Jh, {
	ref: n,
	className: H("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
// src/components/accounts-ui.tsx
ug.displayName = Jh.displayName, Jt();
function dg({ status: e, days: t }) {
	return e === "free" ? /* @__PURE__ */ (0, S.jsx)(vi, {
		variant: "outline",
		children: "Free"
	}) : e === "none" ? /* @__PURE__ */ (0, S.jsx)(vi, {
		variant: "outline",
		children: "No date"
	}) : e === "overdue" ? /* @__PURE__ */ (0, S.jsxs)(vi, {
		variant: "destructive",
		children: [
			"Overdue ",
			t,
			"d"
		]
	}) : e === "due_soon" ? /* @__PURE__ */ (0, S.jsxs)(vi, {
		className: "bg-amber-500 hover:bg-amber-500/90 text-white",
		children: [
			"Due in ",
			t,
			"d"
		]
	}) : /* @__PURE__ */ (0, S.jsx)(vi, {
		variant: "secondary",
		children: "Up to date"
	});
}
function fg({ members: e }) {
	let t = w(), n = lt({
		queryKey: ["accounts"],
		queryFn: () => Promise.resolve().then(() => (Vp(), Tp)).then((e) => e.listAccounts())
	}), [r, i] = (0, x.useState)(!1), [a, o] = (0, x.useState)(null), [s, c] = (0, x.useState)(null), [l, u] = (0, x.useState)(null), d = ut({
		mutationFn: (e) => jp({
			accountId: e,
			expectedDue: n.data?.find((t) => t.id === e)?.next_due_date ?? null
		}),
		onSuccess: () => {
			t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["account-payments"] }), t.invalidateQueries({ queryKey: ["dashboard-recent-payments"] }), I.success("One month paid");
		},
		onError: (e) => I.error(e.message)
	}), f = ut({
		mutationFn: (e) => Lp(e),
		onSuccess: () => {
			t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["members"] }), I.success("Account deleted");
		},
		onError: (e) => I.error(e.message)
	}), p = n.data ?? [], m = (0, x.useMemo)(() => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) n.account_id && t.set(n.account_id, (t.get(n.account_id) ?? 0) + 1);
		return t;
	}, [e]), h = p.map((e) => ({
		a: e,
		s: kp(e)
	})).filter((e) => e.s.status === "overdue");
	return /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [
		h.length > 0 && /* @__PURE__ */ (0, S.jsxs)(yi, {
			className: "border-destructive/50",
			children: [/* @__PURE__ */ (0, S.jsxs)(bi, { children: [/* @__PURE__ */ (0, S.jsxs)(xi, {
				className: "flex items-center gap-2 text-destructive",
				children: [
					/* @__PURE__ */ (0, S.jsx)(Jf, { className: "h-4 w-4" }),
					" Overdue accounts (",
					h.length,
					")"
				]
			}), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Billing accounts past their renewal date." })] }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: /* @__PURE__ */ (0, S.jsxs)(Ti, { children: [/* @__PURE__ */ (0, S.jsx)(Ei, { children: /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
				/* @__PURE__ */ (0, S.jsx)(W, { children: "Account" }),
				/* @__PURE__ */ (0, S.jsx)(W, { children: "Amount" }),
				/* @__PURE__ */ (0, S.jsx)(W, { children: "Due" }),
				/* @__PURE__ */ (0, S.jsx)(W, { children: "Late" }),
				/* @__PURE__ */ (0, S.jsx)(W, {
					className: "text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, S.jsx)(Di, { children: h.map(({ a: e, s: t }) => /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
				/* @__PURE__ */ (0, S.jsxs)(G, {
					className: "font-medium",
					children: [e.name, /* @__PURE__ */ (0, S.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [m.get(e.id) ?? 0, " member(s)"]
					})]
				}),
				/* @__PURE__ */ (0, S.jsx)(G, { children: Ap(e.amount_cents, e.currency) }),
				/* @__PURE__ */ (0, S.jsx)(G, {
					className: "font-mono text-xs",
					children: e.next_due_date ?? "—"
				}),
				/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsxs)(vi, {
					variant: "destructive",
					children: [
						Np(e),
						" month(s) · ",
						t.daysDiff,
						"d"
					]
				}) }),
				/* @__PURE__ */ (0, S.jsx)(G, {
					className: "text-right",
					children: /* @__PURE__ */ (0, S.jsxs)(si, {
						size: "sm",
						variant: "outline",
						onClick: () => d.mutate(e.id),
						disabled: d.isPending,
						children: [/* @__PURE__ */ (0, S.jsx)(Yf, { className: "mr-1 h-3 w-3" }), " Mark paid"]
					})
				})
			] }, e.id)) })] }) })]
		}),
		/* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsxs)(bi, {
			className: "flex flex-row items-center justify-between space-y-0",
			children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(xi, { children: "Billing accounts" }), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Group members into one bill. Each member belongs to a single account." })] }), /* @__PURE__ */ (0, S.jsxs)(si, {
				size: "sm",
				onClick: () => i(!0),
				children: [/* @__PURE__ */ (0, S.jsx)(sp, { className: "mr-1 h-3.5 w-3.5" }), " New account"]
			})]
		}), /* @__PURE__ */ (0, S.jsx)(Ci, { children: n.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading…"
		}) : n.error ? /* @__PURE__ */ (0, S.jsx)("p", {
			role: "alert",
			className: "text-sm text-destructive",
			children: n.error.message
		}) : p.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No accounts yet. Create one to group members under a single monthly bill."
		}) : /* @__PURE__ */ (0, S.jsxs)(Ti, { children: [/* @__PURE__ */ (0, S.jsx)(Ei, { children: /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Name" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Members" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Amount" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Billing day" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Next due" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Status" }),
			/* @__PURE__ */ (0, S.jsx)(W, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, S.jsx)(Di, { children: p.map((e) => {
			let t = kp(e);
			return /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
				/* @__PURE__ */ (0, S.jsx)(G, {
					className: "font-medium",
					children: e.name
				}),
				/* @__PURE__ */ (0, S.jsx)(G, { children: m.get(e.id) ?? 0 }),
				/* @__PURE__ */ (0, S.jsx)(G, { children: e.is_free ? /* @__PURE__ */ (0, S.jsx)("span", {
					className: "text-muted-foreground",
					children: "—"
				}) : Ap(e.amount_cents, e.currency) }),
				/* @__PURE__ */ (0, S.jsx)(G, { children: e.is_free ? "—" : `Day ${e.billing_day}` }),
				/* @__PURE__ */ (0, S.jsx)(G, {
					className: "font-mono text-xs",
					children: e.next_due_date ?? "—"
				}),
				/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(dg, {
					status: t.status,
					days: t.daysDiff
				}) }),
				/* @__PURE__ */ (0, S.jsx)(G, {
					className: "text-right",
					children: /* @__PURE__ */ (0, S.jsxs)("div", {
						className: "flex justify-end gap-1",
						children: [
							!e.is_free && /* @__PURE__ */ (0, S.jsx)(si, {
								size: "sm",
								variant: "outline",
								onClick: () => d.mutate(e.id),
								disabled: d.isPending,
								title: "Mark paid",
								children: /* @__PURE__ */ (0, S.jsx)(Yf, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(si, {
								size: "sm",
								variant: "ghost",
								onClick: () => c(e),
								title: "Manage members",
								children: /* @__PURE__ */ (0, S.jsx)(pp, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(si, {
								size: "sm",
								variant: "ghost",
								onClick: () => u(e),
								title: "History",
								children: /* @__PURE__ */ (0, S.jsx)(rp, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(si, {
								size: "sm",
								variant: "ghost",
								onClick: () => o(e),
								title: "Edit",
								children: /* @__PURE__ */ (0, S.jsx)(op, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(si, {
								size: "sm",
								variant: "ghost",
								className: "text-destructive hover:text-destructive",
								onClick: () => {
									confirm(`Delete account "${e.name}"? Members will be unassigned. Payment history will be removed.`) && f.mutate(e.id);
								},
								title: "Delete",
								children: /* @__PURE__ */ (0, S.jsx)(up, { className: "h-3 w-3" })
							})
						]
					})
				})
			] }, e.id);
		}) })] }) })] }),
		r && /* @__PURE__ */ (0, S.jsx)(pg, {
			open: r,
			onOpenChange: i,
			mode: "create",
			members: e,
			onSaved: () => {
				t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["members"] });
			}
		}),
		a && /* @__PURE__ */ (0, S.jsx)(pg, {
			open: !!a,
			onOpenChange: (e) => !e && o(null),
			mode: "edit",
			account: a,
			members: e,
			onSaved: () => {
				t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["members"] });
			}
		}, a.id),
		s && /* @__PURE__ */ (0, S.jsx)(mg, {
			open: !!s,
			onOpenChange: (e) => !e && c(null),
			account: s,
			members: e,
			onSaved: () => {
				t.invalidateQueries({ queryKey: ["members"] }), t.invalidateQueries({ queryKey: ["accounts"] });
			}
		}, s.id),
		l && /* @__PURE__ */ (0, S.jsx)(hg, {
			open: !!l,
			onOpenChange: (e) => !e && u(null),
			account: l
		}, l.id)
	] });
}
function pg({ open: e, onOpenChange: t, mode: n, account: r, members: i, onSaved: a }) {
	let [o, s] = (0, x.useState)(r?.name ?? ""), [c, l] = (0, x.useState)(r?.is_free ?? !1), [u, d] = (0, x.useState)((r?.amount_cents ?? 0) / 100), [f, p] = (0, x.useState)(r?.currency ?? "USD"), [m, h] = (0, x.useState)(r?.billing_day ?? (/* @__PURE__ */ new Date()).getDate()), [g, _] = (0, x.useState)(r?.next_due_date ?? ""), [v, y] = (0, x.useState)(/* @__PURE__ */ new Set()), [b, C] = (0, x.useState)(!1), w = async () => {
		if (!o.trim()) I.error("Name is required");
		else {
			C(!0);
			try {
				n === "create" ? (await Fp({
					name: o.trim(),
					isFree: c,
					amountCents: Math.round(u * 100),
					currency: f.toUpperCase().trim() || "USD",
					billingDay: Math.max(1, Math.min(31, Math.round(m))),
					memberIds: Array.from(v),
					nextDueDate: g || void 0
				}), I.success("Account created")) : r && (await Ip({
					id: r.id,
					name: o.trim(),
					isFree: c,
					amountCents: Math.round(u * 100),
					currency: f.toUpperCase().trim() || "USD",
					billingDay: Math.max(1, Math.min(31, Math.round(m))),
					nextDueDate: g || void 0
				}), I.success("Account updated")), a(), t(!1);
			} catch (e) {
				I.error(e instanceof Error ? e.message : String(e));
			} finally {
				C(!1);
			}
		}
	}, T = n === "create" ? i.filter((e) => e.status !== "removed" && !e.account_id) : [];
	return /* @__PURE__ */ (0, S.jsx)(Nm, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Im, {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, S.jsxs)(Lm, { children: [/* @__PURE__ */ (0, S.jsx)(zm, { children: n === "create" ? "New account" : `Edit — ${r?.name}` }), /* @__PURE__ */ (0, S.jsx)(Bm, { children: "One bill that covers one or more members." })] }),
				/* @__PURE__ */ (0, S.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(hi, {
							htmlFor: "name",
							children: "Account name"
						}), /* @__PURE__ */ (0, S.jsx)(ci, {
							id: "name",
							value: o,
							onChange: (e) => s(e.target.value),
							placeholder: "Maita Household"
						})] }),
						/* @__PURE__ */ (0, S.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(hi, {
								htmlFor: "free",
								children: "Free (no charge)"
							}), /* @__PURE__ */ (0, S.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "For family or comped accounts."
							})] }), /* @__PURE__ */ (0, S.jsx)(am, {
								id: "free",
								checked: c,
								onCheckedChange: l
							})]
						}),
						/* @__PURE__ */ (0, S.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(hi, {
								htmlFor: "amount",
								children: "Monthly amount"
							}), /* @__PURE__ */ (0, S.jsx)(ci, {
								id: "amount",
								type: "number",
								step: "0.01",
								min: "0",
								value: u,
								onChange: (e) => d(Number(e.target.value)),
								disabled: c
							})] }), /* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(hi, {
								htmlFor: "currency",
								children: "Currency"
							}), /* @__PURE__ */ (0, S.jsx)(ci, {
								id: "currency",
								value: f,
								maxLength: 3,
								onChange: (e) => p(e.target.value),
								disabled: c
							})] })]
						}),
						/* @__PURE__ */ (0, S.jsxs)("div", { children: [
							/* @__PURE__ */ (0, S.jsx)(hi, {
								htmlFor: "day",
								children: "Billing day (1–31)"
							}),
							/* @__PURE__ */ (0, S.jsx)(ci, {
								id: "day",
								type: "number",
								min: "1",
								max: "31",
								value: m,
								onChange: (e) => h(Number(e.target.value)),
								disabled: c
							}),
							/* @__PURE__ */ (0, S.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Days past month-end clamp to the last day (e.g. 31 → Feb 28)."
							})
						] }),
						!c && /* @__PURE__ */ (0, S.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, S.jsx)(hi, {
									htmlFor: "next-due",
									children: "Next unpaid month starts"
								}),
								/* @__PURE__ */ (0, S.jsx)(ci, {
									id: "next-due",
									type: "date",
									value: g,
									onInput: (e) => _(e.currentTarget.value),
									onChange: (e) => _(e.target.value)
								}),
								/* @__PURE__ */ (0, S.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Use a past date to enter an existing overdue balance. Leave blank to calculate from the billing day. This is the oldest unpaid period."
								})
							]
						}),
						n === "create" && T.length > 0 && /* @__PURE__ */ (0, S.jsxs)("div", { children: [
							/* @__PURE__ */ (0, S.jsx)(hi, { children: "Add members" }),
							/* @__PURE__ */ (0, S.jsx)("p", {
								className: "text-xs text-muted-foreground mb-2",
								children: "Active members without an account are shown. You can change members later."
							}),
							/* @__PURE__ */ (0, S.jsx)("div", {
								role: "group",
								"aria-label": "Available members",
								className: "px-member-list rounded border border-border",
								children: T.map((e) => /* @__PURE__ */ (0, S.jsxs)("label", {
									className: "flex cursor-pointer items-center gap-2 border-b border-border px-3 py-2 text-sm last:border-b-0 hover:bg-accent",
									children: [/* @__PURE__ */ (0, S.jsx)("input", {
										type: "checkbox",
										checked: v.has(e.id),
										onChange: (t) => {
											let n = new Set(v);
											t.target.checked ? n.add(e.id) : n.delete(e.id), y(n);
										}
									}), /* @__PURE__ */ (0, S.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, S.jsx)("span", {
											className: "block",
											children: e.display_name
										}), /* @__PURE__ */ (0, S.jsx)("span", {
											className: "block break-all font-mono text-xs text-muted-foreground",
											children: e.email
										})]
									})]
								}, e.id))
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, S.jsxs)(Rm, { children: [/* @__PURE__ */ (0, S.jsx)(si, {
					variant: "ghost",
					onClick: () => t(!1),
					disabled: b,
					children: "Cancel"
				}), /* @__PURE__ */ (0, S.jsx)(si, {
					onClick: w,
					disabled: b,
					children: b ? "Saving…" : "Save"
				})] })
			]
		})
	});
}
function mg({ open: e, onOpenChange: t, account: n, members: r, onSaved: i }) {
	let [a, o] = (0, x.useState)(new Set(r.filter((e) => e.status !== "removed" && e.account_id === n.id).map((e) => e.id))), [s, c] = (0, x.useState)(!1), l = async () => {
		c(!0);
		try {
			await zp(n.id, Array.from(a)), I.success("Members updated"), i(), t(!1);
		} catch (e) {
			I.error(e instanceof Error ? e.message : String(e));
		} finally {
			c(!1);
		}
	}, u = r.filter((e) => e.status !== "removed" && (!e.account_id || e.account_id === n.id));
	return /* @__PURE__ */ (0, S.jsx)(Nm, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Im, {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, S.jsxs)(Lm, { children: [/* @__PURE__ */ (0, S.jsxs)(zm, { children: ["Members — ", n.name] }), /* @__PURE__ */ (0, S.jsx)(Bm, { children: "Check who belongs to this account. Members already on another account aren't shown." })] }),
				/* @__PURE__ */ (0, S.jsx)("div", {
					role: "group",
					"aria-label": "Account members",
					className: "px-member-list rounded border border-border",
					children: u.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
						className: "p-3 text-sm text-muted-foreground",
						children: "No eligible members."
					}) : u.map((e) => /* @__PURE__ */ (0, S.jsxs)("label", {
						className: "flex cursor-pointer items-center gap-2 border-b border-border px-3 py-2 text-sm last:border-b-0 hover:bg-accent",
						children: [/* @__PURE__ */ (0, S.jsx)("input", {
							type: "checkbox",
							checked: a.has(e.id),
							onChange: (t) => {
								let n = new Set(a);
								t.target.checked ? n.add(e.id) : n.delete(e.id), o(n);
							}
						}), /* @__PURE__ */ (0, S.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, S.jsx)("span", {
								className: "block",
								children: e.display_name
							}), /* @__PURE__ */ (0, S.jsx)("span", {
								className: "block break-all font-mono text-xs text-muted-foreground",
								children: e.email
							})]
						})]
					}, e.id))
				}),
				/* @__PURE__ */ (0, S.jsxs)(Rm, { children: [/* @__PURE__ */ (0, S.jsx)(si, {
					variant: "ghost",
					onClick: () => t(!1),
					disabled: s,
					children: "Cancel"
				}), /* @__PURE__ */ (0, S.jsx)(si, {
					onClick: l,
					disabled: s,
					children: s ? "Saving…" : "Save"
				})] })
			]
		})
	});
}
function hg({ open: e, onOpenChange: t, account: n }) {
	let r = w(), i = lt({
		queryKey: ["account-payments", n.id],
		queryFn: () => Mp(n.id),
		enabled: e
	}), a = ut({
		mutationFn: (e) => Bp(e),
		onSuccess: () => {
			r.invalidateQueries({ queryKey: ["account-payments", n.id] }), r.invalidateQueries({ queryKey: ["accounts"] }), r.invalidateQueries({ queryKey: ["dashboard-recent-payments"] }), I.success("Payment undone; due date restored");
		},
		onError: (e) => I.error(e.message)
	}), o = ut({
		mutationFn: () => jp({
			accountId: n.id,
			expectedDue: (r.getQueryData(["accounts"])?.find((e) => e.id === n.id) ?? n).next_due_date
		}),
		onSuccess: () => {
			r.invalidateQueries({ queryKey: ["account-payments", n.id] }), r.invalidateQueries({ queryKey: ["accounts"] }), r.invalidateQueries({ queryKey: ["dashboard-recent-payments"] }), I.success("One month paid");
		},
		onError: (e) => I.error(e.message)
	});
	return /* @__PURE__ */ (0, S.jsx)(Nm, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Im, {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, S.jsxs)(Lm, { children: [/* @__PURE__ */ (0, S.jsxs)(zm, { children: ["Payment history — ", n.name] }), /* @__PURE__ */ (0, S.jsx)(Bm, { children: "All recorded payments for this account." })] }),
				i.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Loading…"
				}) : (i.data ?? []).length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No payments recorded yet."
				}) : /* @__PURE__ */ (0, S.jsxs)(Ti, { children: [/* @__PURE__ */ (0, S.jsx)(Ei, { children: /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
					/* @__PURE__ */ (0, S.jsx)(W, { children: "Paid" }),
					/* @__PURE__ */ (0, S.jsx)(W, { children: "Amount" }),
					/* @__PURE__ */ (0, S.jsx)(W, { children: "Period" }),
					/* @__PURE__ */ (0, S.jsx)(W, { children: "Note" }),
					/* @__PURE__ */ (0, S.jsx)(W, {})
				] }) }), /* @__PURE__ */ (0, S.jsx)(Di, { children: (i.data ?? []).map((e, t) => /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
					/* @__PURE__ */ (0, S.jsx)(G, {
						className: "font-mono text-xs",
						children: new Date(e.paid_at).toLocaleDateString()
					}),
					/* @__PURE__ */ (0, S.jsx)(G, { children: Ap(e.amount_cents, e.currency) }),
					/* @__PURE__ */ (0, S.jsxs)(G, {
						className: "font-mono text-xs",
						children: [
							e.period_start ?? "—",
							" → ",
							e.period_end ?? "—"
						]
					}),
					/* @__PURE__ */ (0, S.jsx)(G, {
						className: "text-xs",
						children: e.note ?? ""
					}),
					/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(si, {
						size: "sm",
						variant: "ghost",
						className: "text-destructive hover:text-destructive",
						"aria-label": "Undo latest payment",
						disabled: a.isPending || t > 0,
						title: t === 0 ? "Undo latest payment" : "Undo newer payments first",
						onClick: () => {
							confirm("Undo this payment and restore its due date? Only the latest payment can be undone.") && a.mutate(e.id);
						},
						children: /* @__PURE__ */ (0, S.jsx)(up, { className: "h-3 w-3" })
					}) })
				] }, e.id)) })] }),
				/* @__PURE__ */ (0, S.jsxs)(Rm, { children: [!n.is_free && /* @__PURE__ */ (0, S.jsx)(si, {
					variant: "outline",
					onClick: () => o.mutate(),
					disabled: o.isPending,
					children: "Record payment now"
				}), /* @__PURE__ */ (0, S.jsx)(si, {
					onClick: () => t(!1),
					children: "Close"
				})] })
			]
		})
	});
}
function gg({ member: e, accounts: t, onChanged: n }) {
	let [r, i] = (0, x.useState)(!1);
	return /* @__PURE__ */ (0, S.jsxs)(ng, {
		value: e.account_id ?? "__none__",
		onValueChange: async (t) => {
			i(!0);
			try {
				let r = t === "__none__" ? null : t, { error: i } = await L.from("plex_home_members").update({ account_id: r }).eq("id", e.id);
				if (i) throw i;
				n();
			} catch (e) {
				I.error(e instanceof Error ? e.message : String(e));
			} finally {
				i(!1);
			}
		},
		disabled: r,
		children: [/* @__PURE__ */ (0, S.jsx)(ig, {
			className: "h-8 w-[180px]",
			children: /* @__PURE__ */ (0, S.jsx)(rg, { placeholder: "Unassigned" })
		}), /* @__PURE__ */ (0, S.jsxs)(sg, { children: [/* @__PURE__ */ (0, S.jsx)(lg, {
			value: "__none__",
			children: "— Unassigned —"
		}), t.map((e) => /* @__PURE__ */ (0, S.jsxs)(lg, {
			value: e.id,
			children: [e.name, e.is_free ? " (Free)" : ""]
		}, e.id))] })]
	});
}
// node_modules/@radix-ui/react-tabs/dist/index.mjs
var _g = Object.defineProperty, vg = (e, t) => _g(e, "name", {
	value: t,
	configurable: !0
}), yg = {
	Automatic: "automatic",
	Manual: "manual"
}, bg = "Tabs", [xg, Sg] = /* @__PURE__ */ Ui(bg, [Dl]), Cg = Dl(), [wg, Tg] = xg(bg), Eg = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ vg(function(e, t) {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = yg.Automatic, ...l } = e, u = Sa(s), [d, f] = $i({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: bg
	});
	return /* @__PURE__ */ (0, S.jsx)(wg, {
		scope: n,
		baseId: bo(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ (0, S.jsx)(U.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
}, "Tabs")), Dg = "TabsList", Og = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ vg(function(e, t) {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Tg(Dg, n), o = Cg(n);
	return /* @__PURE__ */ (0, S.jsx)(Ml, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, S.jsx)(U.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
}, "TabsList")), kg = "TabsTrigger", Ag = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ vg(function(e, t) {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Tg(kg, n), s = Cg(n), c = Ng(o.baseId, r), l = Pg(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, S.jsx)(Fl, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, S.jsx)(U.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: K(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? (e.currentTarget.focus(), o.onValueChange(r)) : e.preventDefault();
			}),
			onKeyDown: K(e.onKeyDown, (e) => {
				i || e.target !== e.currentTarget || [" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: K(e.onFocus, () => {
				let e = o.activationMode !== yg.Manual;
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
}, "TabsTrigger")), jg = "TabsContent", Mg = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ vg(function(e, t) {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, s = Tg(jg, n), c = Ng(s.baseId, r), l = Pg(s.baseId, r), u = r === s.value, d = x.useRef(u);
	return x.useEffect(() => {
		let e = requestAnimationFrame(() => d.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, S.jsx)(il, {
		present: i || u,
		children: ({ present: n }) => /* @__PURE__ */ (0, S.jsx)(U.div, {
			"data-state": u ? "active" : "inactive",
			"data-orientation": s.orientation,
			role: "tabpanel",
			"aria-labelledby": c,
			hidden: !n,
			id: l,
			tabIndex: 0,
			...o,
			ref: t,
			style: {
				...e.style,
				animationDuration: d.current ? "0s" : void 0
			},
			children: n && a
		})
	});
}, "TabsContent"));
function Ng(e, t) {
	return `${e}-trigger-${t}`;
}
vg(Ng, "makeTriggerId");
function Pg(e, t) {
	return `${e}-content-${t}`;
}
vg(Pg, "makeContentId");
// src/components/ui/tabs.tsx
var Fg = Eg, Ig = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Og, {
	ref: n,
	className: H("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
	...t
}));
Ig.displayName = Og.displayName;
var Lg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Ag, {
	ref: n,
	className: H("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", e),
	...t
}));
Lg.displayName = Ag.displayName;
var Rg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Mg, {
	ref: n,
	className: H("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
	...t
}));
Rg.displayName = Mg.displayName, Jt(), Vp();
function zg({ members: e, accounts: t }) {
	let n = lt({
		queryKey: ["dashboard-recent-payments"],
		queryFn: async () => {
			let { data: e, error: t } = await L.from("plex_account_payments").select("id, account_id, amount_cents, currency, paid_at").order("paid_at", { ascending: !1 }).limit(5);
			if (t) throw t;
			return e ?? [];
		}
	}), r = e.filter((e) => e.status !== "removed"), i = e.filter((e) => e.status === "removed"), a = t.filter((e) => !e.is_free), o = t.filter((e) => e.is_free), s = (e) => {
		let t = {};
		for (let n of e) t[n.currency] = (t[n.currency] ?? 0) + n.amount_cents;
		return Object.entries(t).map(([e, t]) => Ap(t, e)).join(" · ") || "—";
	}, c = t.map((e) => ({
		a: e,
		...kp(e)
	})), l = c.filter((e) => e.status === "overdue"), u = s(l.map((e) => ({
		...e.a,
		amount_cents: e.a.amount_cents * Np(e.a)
	}))), d = c.filter((e) => e.status === "due_soon" || e.status === "paid" && e.daysDiff <= 7).sort((e, t) => e.daysDiff - t.daysDiff).slice(0, 5), f = new Map(t.map((e) => [e.id, e])), p = [...e].sort((e, t) => e.created_at < t.created_at ? 1 : -1).slice(0, 5);
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, S.jsx)(Bg, {
						icon: /* @__PURE__ */ (0, S.jsx)(pp, { className: "h-4 w-4" }),
						label: "Members",
						value: `${r.length} active`,
						hint: `${i.length} inactive · ${e.length} total`
					}),
					/* @__PURE__ */ (0, S.jsx)(Bg, {
						icon: /* @__PURE__ */ (0, S.jsx)(Xf, { className: "h-4 w-4" }),
						label: "Monthly billing",
						value: s(a),
						hint: `${a.length} paying · ${o.length} free`
					}),
					/* @__PURE__ */ (0, S.jsx)(Bg, {
						icon: /* @__PURE__ */ (0, S.jsx)(dp, { className: "h-4 w-4" }),
						label: "Overdue",
						value: String(l.length),
						hint: l.length ? `${u} overdue` : "All caught up",
						tone: l.length ? "danger" : "ok"
					}),
					/* @__PURE__ */ (0, S.jsx)(Bg, {
						icon: /* @__PURE__ */ (0, S.jsx)(Uf, { className: "h-4 w-4" }),
						label: "Accounts",
						value: String(t.length),
						hint: `${d.length} due within 7 days`
					})
				]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsxs)(bi, { children: [/* @__PURE__ */ (0, S.jsxs)(xi, {
					className: "flex items-center gap-2 text-base",
					children: [/* @__PURE__ */ (0, S.jsx)(Uf, { className: "h-4 w-4" }), " Coming up"]
				}), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Accounts due in the next 7 days." })] }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: d.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Nothing due soon."
				}) : /* @__PURE__ */ (0, S.jsx)("ul", {
					className: "space-y-2",
					children: d.map(({ a: e, daysDiff: t, status: n }) => /* @__PURE__ */ (0, S.jsxs)("li", {
						className: "flex items-center justify-between rounded-md border border-border px-3 py-2",
						children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)("p", {
							className: "text-sm font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, S.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								e.next_due_date,
								" · ",
								Ap(e.amount_cents, e.currency)
							]
						})] }), /* @__PURE__ */ (0, S.jsx)(vi, {
							variant: n === "due_soon" ? "secondary" : "outline",
							children: t === 0 ? "Today" : `${t}d`
						})]
					}, e.id))
				}) })] }), /* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsxs)(bi, { children: [/* @__PURE__ */ (0, S.jsxs)(xi, {
					className: "flex items-center gap-2 text-base",
					children: [/* @__PURE__ */ (0, S.jsx)(Hf, { className: "h-4 w-4" }), " Recent payments"]
				}), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Last 5 recorded payments." })] }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: n.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Loading…"
				}) : n.error ? /* @__PURE__ */ (0, S.jsx)("p", {
					role: "alert",
					className: "text-sm text-destructive",
					children: n.error.message
				}) : (n.data ?? []).length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No payments yet."
				}) : /* @__PURE__ */ (0, S.jsx)("ul", {
					className: "space-y-2",
					children: (n.data ?? []).map((e) => {
						let t = f.get(e.account_id);
						return /* @__PURE__ */ (0, S.jsxs)("li", {
							className: "flex items-center justify-between rounded-md border border-border px-3 py-2",
							children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)("p", {
								className: "text-sm font-medium",
								children: t?.name ?? "Unknown account"
							}), /* @__PURE__ */ (0, S.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: new Date(e.paid_at).toLocaleDateString()
							})] }), /* @__PURE__ */ (0, S.jsx)("span", {
								className: "text-sm font-mono",
								children: Ap(e.amount_cents, e.currency)
							})]
						}, e.id);
					})
				}) })] })]
			}),
			/* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsx)(bi, { children: /* @__PURE__ */ (0, S.jsx)(xi, {
				className: "text-base",
				children: "Recently added members"
			}) }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: p.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No members yet."
			}) : /* @__PURE__ */ (0, S.jsx)("ul", {
				className: "space-y-2",
				children: p.map((e) => /* @__PURE__ */ (0, S.jsxs)("li", {
					className: "flex items-center justify-between rounded-md border border-border px-3 py-2",
					children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)("p", {
						className: "text-sm font-medium",
						children: e.display_name
					}), /* @__PURE__ */ (0, S.jsx)("p", {
						className: "text-xs font-mono text-muted-foreground",
						children: e.email
					})] }), /* @__PURE__ */ (0, S.jsx)(vi, {
						variant: "outline",
						children: e.status.replace("_", " ")
					})]
				}, e.id))
			}) })] })
		]
	});
}
function Bg({ icon: e, label: t, value: n, hint: r, tone: i }) {
	return /* @__PURE__ */ (0, S.jsx)(yi, { children: /* @__PURE__ */ (0, S.jsxs)(Ci, {
		className: "pt-6",
		children: [
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, S.jsx)("span", {
					className: "text-xs uppercase tracking-wide text-muted-foreground",
					children: t
				}), /* @__PURE__ */ (0, S.jsx)("span", {
					className: i === "danger" ? "text-destructive" : "text-muted-foreground",
					children: e
				})]
			}),
			/* @__PURE__ */ (0, S.jsx)("p", {
				className: "mt-2 text-2xl font-semibold tracking-tight",
				children: n
			}),
			r && /* @__PURE__ */ (0, S.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: r
			})
		]
	}) });
}
// src/components/user-management-ui.tsx
Jt();
function Vg({ members: e }) {
	let [t, n] = (0, x.useState)(null), [r, i] = (0, x.useState)(""), a = e.filter((e) => {
		if (!r.trim()) return !0;
		let t = r.toLowerCase();
		return e.display_name.toLowerCase().includes(t) || e.email.toLowerCase().includes(t) || (e.plex_username ?? "").toLowerCase().includes(t);
	});
	return /* @__PURE__ */ (0, S.jsxs)(yi, { children: [
		/* @__PURE__ */ (0, S.jsx)(bi, { children: /* @__PURE__ */ (0, S.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsxs)(xi, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, S.jsx)(ip, { className: "h-4 w-4" }), " User credentials"]
			}), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Optional Plex credentials. Visible to Home Assistant administrators; nothing is pushed to Plex." })] }), /* @__PURE__ */ (0, S.jsx)(ci, {
				className: "w-full sm:w-64",
				placeholder: "Search name, email, username…",
				value: r,
				onChange: (e) => i(e.target.value)
			})]
		}) }),
		/* @__PURE__ */ (0, S.jsx)(Ci, { children: e.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No members yet."
		}) : /* @__PURE__ */ (0, S.jsxs)(Ti, { children: [/* @__PURE__ */ (0, S.jsx)(Ei, { children: /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Name" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Email" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Status" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Username" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "Password" }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: "PIN" }),
			/* @__PURE__ */ (0, S.jsx)(W, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, S.jsx)(Di, { children: a.map((e) => /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
			/* @__PURE__ */ (0, S.jsx)(G, {
				className: "font-medium",
				children: e.display_name
			}),
			/* @__PURE__ */ (0, S.jsx)(G, {
				className: "font-mono text-xs",
				children: e.email
			}),
			/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(vi, {
				variant: e.status === "removed" ? "outline" : "secondary",
				children: e.status.replace("_", " ")
			}) }),
			/* @__PURE__ */ (0, S.jsx)(G, {
				className: "font-mono text-xs",
				children: e.plex_username ? /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, S.jsx)("span", { children: e.plex_username }), /* @__PURE__ */ (0, S.jsx)(Ug, { value: e.plex_username })]
				}) : /* @__PURE__ */ (0, S.jsx)("span", {
					className: "text-muted-foreground",
					children: "—"
				})
			}),
			/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(Hg, { value: e.plex_password }) }),
			/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(Hg, {
				value: e.plex_pin,
				short: !0
			}) }),
			/* @__PURE__ */ (0, S.jsx)(G, {
				className: "text-right",
				children: /* @__PURE__ */ (0, S.jsxs)(si, {
					size: "sm",
					variant: "outline",
					onClick: () => n(e),
					children: [/* @__PURE__ */ (0, S.jsx)(op, { className: "mr-1 h-3 w-3" }), " Edit"]
				})
			})
		] }, e.id)) })] }) }),
		/* @__PURE__ */ (0, S.jsx)(Wg, {
			member: t,
			onOpenChange: (e) => !e && n(null)
		})
	] });
}
function Hg({ value: e, short: t }) {
	let [n, r] = (0, x.useState)(!1);
	return e ? /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ (0, S.jsx)("span", {
				className: "font-mono text-xs",
				children: n ? e : t ? "••••" : "••••••••"
			}),
			/* @__PURE__ */ (0, S.jsx)(si, {
				size: "sm",
				variant: "ghost",
				className: "h-6 w-6 p-0",
				onClick: () => r((e) => !e),
				"aria-label": n ? "Hide" : "Show",
				children: n ? /* @__PURE__ */ (0, S.jsx)(tp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, S.jsx)(np, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, S.jsx)(Ug, { value: e })
		]
	}) : /* @__PURE__ */ (0, S.jsx)("span", {
		className: "text-muted-foreground",
		children: "—"
	});
}
function Ug({ value: e }) {
	return /* @__PURE__ */ (0, S.jsx)(si, {
		size: "sm",
		variant: "ghost",
		className: "h-6 w-6 p-0",
		"aria-label": "Copy",
		onClick: () => {
			navigator.clipboard.writeText(e).then(() => I.success("Copied"), () => I.error("Copy failed"));
		},
		children: /* @__PURE__ */ (0, S.jsx)(Qf, { className: "h-3 w-3" })
	});
}
function Wg({ member: e, onOpenChange: t }) {
	let n = w(), [r, i] = (0, x.useState)(""), [a, o] = (0, x.useState)(""), [s, c] = (0, x.useState)(""), [l, u] = (0, x.useState)(""), [d, f] = (0, x.useState)(!1), p = !!e, [m, h] = (0, x.useState)(null);
	e && m !== e.id && (h(e.id), i(e.plex_username ?? ""), o(e.plex_password ?? ""), c(e.plex_pin ?? ""), u(e.credentials_note ?? ""), f(!1)), !e && m !== null && h(null);
	let g = ut({
		mutationFn: async () => {
			if (!e) return;
			let { error: t } = await L.from("plex_home_members").update({
				plex_username: r.trim() || null,
				plex_password: a || null,
				plex_pin: s.trim() || null,
				credentials_note: l.trim() || null
			}).eq("id", e.id);
			if (t) throw t;
		},
		onSuccess: () => {
			n.invalidateQueries({ queryKey: ["members"] }), I.success("Credentials saved"), t(!1);
		},
		onError: (e) => I.error(e.message)
	});
	return /* @__PURE__ */ (0, S.jsx)(Nm, {
		open: p,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Im, { children: [
			/* @__PURE__ */ (0, S.jsxs)(Lm, { children: [/* @__PURE__ */ (0, S.jsx)(zm, { children: "Edit credentials" }), /* @__PURE__ */ (0, S.jsx)(Bm, { children: e ? `${e.display_name} · ${e.email}` : "" })] }),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(hi, {
							htmlFor: "cred-username",
							children: "Plex username"
						}), /* @__PURE__ */ (0, S.jsx)(ci, {
							id: "cred-username",
							value: r,
							onChange: (e) => i(e.target.value),
							placeholder: "alexdoe",
							autoComplete: "off"
						})]
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(hi, {
							htmlFor: "cred-password",
							children: "Password"
						}), /* @__PURE__ */ (0, S.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, S.jsx)(ci, {
								id: "cred-password",
								type: d ? "text" : "password",
								value: a,
								onChange: (e) => o(e.target.value),
								autoComplete: "new-password"
							}), /* @__PURE__ */ (0, S.jsx)(si, {
								type: "button",
								size: "icon",
								variant: "outline",
								onClick: () => f((e) => !e),
								"aria-label": d ? "Hide password" : "Show password",
								children: d ? /* @__PURE__ */ (0, S.jsx)(tp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, S.jsx)(np, { className: "h-4 w-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(hi, {
							htmlFor: "cred-pin",
							children: "PIN"
						}), /* @__PURE__ */ (0, S.jsx)(ci, {
							id: "cred-pin",
							value: s,
							onChange: (e) => c(e.target.value),
							placeholder: "4-digit PIN",
							inputMode: "numeric",
							maxLength: 8,
							autoComplete: "off"
						})]
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(hi, {
							htmlFor: "cred-note",
							children: "Notes"
						}), /* @__PURE__ */ (0, S.jsx)(gi, {
							id: "cred-note",
							value: l,
							onChange: (e) => u(e.target.value),
							placeholder: "Recovery email, security question, etc.",
							rows: 3
						})]
					}),
					/* @__PURE__ */ (0, S.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Stored locally in Home Assistant and included in its backups. Accessible to administrators. Use a password manager for sensitive credentials."
					})
				]
			}),
			/* @__PURE__ */ (0, S.jsxs)(Rm, { children: [/* @__PURE__ */ (0, S.jsx)(si, {
				variant: "outline",
				onClick: () => t(!1),
				children: "Cancel"
			}), /* @__PURE__ */ (0, S.jsx)(si, {
				onClick: () => g.mutate(),
				disabled: g.isPending,
				children: g.isPending ? "Saving…" : "Save"
			})] })
		] })
	});
}
Jt(), Vp();
function Gg() {
	let e = w(), t = ut({
		mutationFn: (e) => Gt(e.remove ? "delete_member" : "set_member_active", e),
		onSuccess: () => {
			e.invalidateQueries({ queryKey: ["members"] }), I.success("Member updated");
		},
		onError: (e) => I.error(e.message)
	}), n = lt({
		queryKey: ["members"],
		queryFn: async () => {
			let { data: e, error: t } = await L.from("plex_home_members").select("id, display_name, email, status, invite_type, plex_user_id, notes, last_error, account_id, plex_username, plex_password, plex_pin, credentials_note, created_at").order("created_at", { ascending: !1 });
			if (t) throw t;
			return e ?? [];
		}
	}), r = lt({
		queryKey: ["accounts"],
		queryFn: Pp
	}).data ?? [], i = $t, a = en, o = tn, s = nn, c = rn, l = an, u = ut({
		mutationFn: (e) => a({ data: { memberId: e } }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? I.success("Plex invite sent") : I.error(`Invite failed: ${t.error}`);
		},
		onError: (e) => I.error(e.message)
	}), d = ut({
		mutationFn: (e) => l({ data: { memberId: e } }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? I.success("Invite revoked") : I.error(`Revoke failed: ${t.error}`);
		},
		onError: (e) => I.error(e.message)
	}), f = ut({
		mutationFn: (e) => o({ data: e }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? I.success("Done") : I.error(`Failed: ${t.error}`);
		},
		onError: (e) => I.error(e.message)
	}), p = ut({
		mutationFn: (e) => c({ data: e }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? I.success("Converted — Plex invite sent") : I.error(`Convert failed: ${t.error}`);
		},
		onError: (e) => I.error(e.message)
	}), m = ut({
		mutationFn: () => s({}),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? I.success(`Synced — ${t.updated} updated, ${t.imported} imported`) : I.error(`Sync failed: ${t.error}`);
		},
		onError: (e) => I.error(e.message)
	}), h = async () => {
		try {
			let e = await i({});
			e.ok ? I.success("Plex token works — account authenticated. Use Sync to load members.") : I.error(`Plex token failed: ${e.error}`);
		} catch (e) {
			I.error(e instanceof Error ? e.message : String(e));
		}
	}, g = n.data ?? [], _ = g.filter((e) => e.status !== "removed"), v = g.filter((e) => e.status === "removed"), y = g.map((e) => ({
		id: e.id,
		display_name: e.display_name,
		email: e.email,
		account_id: e.account_id,
		status: e.status
	})), b = g.map((e) => ({
		id: e.id,
		display_name: e.display_name,
		email: e.email,
		status: e.status,
		account_id: e.account_id,
		created_at: e.created_at
	})), x = g.filter((e) => e.service_type !== "iptv").map((e) => ({
		id: e.id,
		display_name: e.display_name,
		email: e.email,
		status: e.status,
		plex_username: e.plex_username,
		plex_password: e.plex_password,
		plex_pin: e.plex_pin,
		credentials_note: e.credentials_note
	})), C = new Map(r.map((e) => [e.id, e]));
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, S.jsx)("header", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, S.jsxs)("div", {
				className: "mx-auto flex flex-wrap max-w-6xl items-center justify-between gap-4 px-4 py-3",
				children: [/* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, S.jsx)("img", {
						src: "/px_account_manager_static/logo.jpg",
						alt: "",
						className: "h-9 w-9 rounded-md object-cover"
					}), /* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)("h1", {
						className: "text-lg font-semibold leading-tight tracking-tight",
						children: "PX Account Manager"
					}), /* @__PURE__ */ (0, S.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Members, billing, and credentials in one place."
					})] })]
				}), /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, S.jsx)(Zt, {}),
						/* @__PURE__ */ (0, S.jsx)(si, {
							variant: "outline",
							size: "sm",
							onClick: h,
							children: "Test token"
						}),
						/* @__PURE__ */ (0, S.jsxs)(si, {
							variant: "outline",
							size: "sm",
							onClick: () => m.mutate(),
							disabled: m.isPending,
							children: [/* @__PURE__ */ (0, S.jsx)(cp, { className: "mr-2 h-3.5 w-3.5" }), "Sync"]
						}),
						/* @__PURE__ */ (0, S.jsx)(si, {
							variant: "ghost",
							size: "sm",
							onClick: () => window.location.assign("/lovelace"),
							children: "Home Assistant"
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, S.jsx)("main", {
			className: "mx-auto max-w-6xl px-4 py-6",
			children: /* @__PURE__ */ (0, S.jsxs)(Fg, {
				defaultValue: "dashboard",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, S.jsxs)(Ig, {
						className: "grid w-full grid-cols-2 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, S.jsx)(Lg, {
								value: "dashboard",
								children: "Dashboard"
							}),
							/* @__PURE__ */ (0, S.jsx)(Lg, {
								value: "members",
								children: "Members"
							}),
							/* @__PURE__ */ (0, S.jsx)(Lg, {
								value: "billing",
								children: "Payment Control"
							}),
							/* @__PURE__ */ (0, S.jsx)(Lg, {
								value: "users",
								children: "User Management"
							})
						]
					}),
					/* @__PURE__ */ (0, S.jsx)(Rg, {
						value: "dashboard",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsx)(zg, {
							members: b,
							accounts: r
						})
					}),
					/* @__PURE__ */ (0, S.jsx)(Rg, {
						value: "members",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsxs)(Fg, {
							defaultValue: "list",
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, S.jsxs)(Ig, { children: [/* @__PURE__ */ (0, S.jsx)(Lg, {
									value: "list",
									children: "Members list"
								}), /* @__PURE__ */ (0, S.jsx)(Lg, {
									value: "new",
									children: "Add new"
								})] }),
								/* @__PURE__ */ (0, S.jsx)(Rg, {
									value: "new",
									children: /* @__PURE__ */ (0, S.jsx)(qg, { onCreated: () => e.invalidateQueries({ queryKey: ["members"] }) })
								}),
								/* @__PURE__ */ (0, S.jsxs)(Rg, {
									value: "list",
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsxs)(bi, { children: [/* @__PURE__ */ (0, S.jsx)(xi, { children: "Active members" }), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Plex and IPTV members. Assign each to a billing account." })] }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: n.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Loading…"
									}) : n.error ? /* @__PURE__ */ (0, S.jsx)("p", {
										className: "text-sm text-destructive",
										children: n.error.message
									}) : _.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "No active members yet. Use \"Add new\" to get started."
									}) : /* @__PURE__ */ (0, S.jsxs)(Ti, { children: [/* @__PURE__ */ (0, S.jsx)(Ei, { children: /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Name" }),
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Email" }),
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Type" }),
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Status" }),
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Account" }),
										/* @__PURE__ */ (0, S.jsx)(W, {
											className: "text-right",
											children: "Actions"
										})
									] }) }), /* @__PURE__ */ (0, S.jsx)(Di, { children: _.map((n) => {
										let i = n.account_id ? C.get(n.account_id) : null;
										return /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
											/* @__PURE__ */ (0, S.jsx)(G, {
												className: "font-medium",
												children: n.display_name
											}),
											/* @__PURE__ */ (0, S.jsx)(G, {
												className: "font-mono text-xs",
												children: n.email
											}),
											/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(vi, {
												variant: "outline",
												children: n.service_type === "iptv" ? "IPTV" : n.invite_type === "friend" ? "Friend" : "Home"
											}) }),
											/* @__PURE__ */ (0, S.jsxs)(G, { children: [n.service_type === "iptv" ? /* @__PURE__ */ (0, S.jsx)(vi, {
												variant: "secondary",
												children: "Active"
											}) : /* @__PURE__ */ (0, S.jsx)(Kg, { status: n.status }), n.last_error && /* @__PURE__ */ (0, S.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: n.last_error
											})] }),
											/* @__PURE__ */ (0, S.jsxs)(G, { children: [/* @__PURE__ */ (0, S.jsx)(gg, {
												member: {
													id: n.id,
													display_name: n.display_name,
													email: n.email,
													account_id: n.account_id,
													status: n.status
												},
												accounts: r,
												onChanged: () => {
													e.invalidateQueries({ queryKey: ["members"] }), e.invalidateQueries({ queryKey: ["accounts"] });
												}
											}), i?.is_free && /* @__PURE__ */ (0, S.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Free"
											})] }),
											/* @__PURE__ */ (0, S.jsx)(G, {
												className: "text-right",
												children: /* @__PURE__ */ (0, S.jsx)("div", {
													className: "flex justify-end gap-1",
													children: n.service_type === "iptv" ? /* @__PURE__ */ (0, S.jsx)(si, {
														size: "sm",
														variant: "outline",
														disabled: t.isPending,
														onClick: () => t.mutate({
															id: n.id,
															active: !1
														}),
														children: "Deactivate"
													}) : /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [n.status !== "accepted" && /* @__PURE__ */ (0, S.jsxs)(si, {
														size: "sm",
														variant: "outline",
														onClick: () => u.mutate(n.id),
														disabled: u.isPending,
														children: [/* @__PURE__ */ (0, S.jsx)(lp, { className: "mr-1 h-3 w-3" }), n.status === "invited" ? "Resend" : "Invite"]
													}), /* @__PURE__ */ (0, S.jsxs)(hp, { children: [/* @__PURE__ */ (0, S.jsx)(gp, {
														asChild: !0,
														children: /* @__PURE__ */ (0, S.jsx)(si, {
															size: "sm",
															variant: "ghost",
															children: /* @__PURE__ */ (0, S.jsx)($f, { className: "h-4 w-4" })
														})
													}), /* @__PURE__ */ (0, S.jsxs)(yp, {
														align: "end",
														className: "w-64",
														children: [
															n.status === "invited" && /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(bp, {
																onSelect: () => {
																	confirm(`Revoke the pending invite for ${n.display_name}?`) && d.mutate(n.id);
																},
																children: "Revoke pending invite"
															}), /* @__PURE__ */ (0, S.jsx)(wp, {})] }),
															n.invite_type === "friend" && /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [
																/* @__PURE__ */ (0, S.jsx)(Cp, { children: "Convert" }),
																/* @__PURE__ */ (0, S.jsx)(bp, {
																	onSelect: () => {
																		confirm(`Promote ${n.display_name} to your Plex Home? Their library share will be removed and a Home invite will be sent.`) && p.mutate({
																			memberId: n.id,
																			toType: "home"
																		});
																	},
																	children: "Promote to Plex Home"
																}),
																/* @__PURE__ */ (0, S.jsx)(wp, {})
															] }),
															/* @__PURE__ */ (0, S.jsx)(Cp, { children: "Remove" }),
															/* @__PURE__ */ (0, S.jsx)(bp, {
																onSelect: () => {
																	confirm(`Remove ${n.display_name} from your Plex Home only? Library access (friend share) is preserved if present.`) && f.mutate({
																		memberId: n.id,
																		scope: "home_only"
																	});
																},
																children: "Remove from Home only"
															}),
															/* @__PURE__ */ (0, S.jsx)(bp, {
																onSelect: () => {
																	confirm(`Revoke library access for ${n.display_name}? Their Home membership (if any) is kept.`) && f.mutate({
																		memberId: n.id,
																		scope: "friend_only"
																	});
																},
																children: "Revoke library access only"
															}),
															/* @__PURE__ */ (0, S.jsx)(bp, {
																className: "text-destructive focus:text-destructive",
																onSelect: () => {
																	confirm(`Fully remove ${n.display_name} from Plex (Home + library)? They will move to Inactive members.`) && f.mutate({
																		memberId: n.id,
																		scope: "plex"
																	});
																},
																children: "Remove completely (Home + library)"
															}),
															/* @__PURE__ */ (0, S.jsx)(wp, {}),
															/* @__PURE__ */ (0, S.jsx)(bp, {
																onSelect: () => {
																	confirm(`Remove ${n.display_name} from this panel only? Their Plex access stays untouched.`) && f.mutate({
																		memberId: n.id,
																		scope: "panel_only"
																	});
																},
																children: "Remove from panel only"
															})
														]
													})] })] })
												})
											})
										] }, n.id);
									}) })] }) })] }), v.length > 0 && /* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsxs)(bi, { children: [/* @__PURE__ */ (0, S.jsx)(xi, { children: "Inactive members" }), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Inactive members aren't available for new billing assignments. Reactivate an IPTV member or re-invite a Plex member to restore access." })] }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: /* @__PURE__ */ (0, S.jsxs)(Ti, { children: [/* @__PURE__ */ (0, S.jsx)(Ei, { children: /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Name" }),
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Email" }),
										/* @__PURE__ */ (0, S.jsx)(W, { children: "Last type" }),
										/* @__PURE__ */ (0, S.jsx)(W, {
											className: "text-right",
											children: "Actions"
										})
									] }) }), /* @__PURE__ */ (0, S.jsx)(Di, { children: v.map((e) => /* @__PURE__ */ (0, S.jsxs)(ki, { children: [
										/* @__PURE__ */ (0, S.jsx)(G, {
											className: "font-medium",
											children: e.display_name
										}),
										/* @__PURE__ */ (0, S.jsx)(G, {
											className: "font-mono text-xs",
											children: e.email
										}),
										/* @__PURE__ */ (0, S.jsx)(G, { children: /* @__PURE__ */ (0, S.jsx)(vi, {
											variant: "outline",
											children: e.service_type === "iptv" ? "IPTV" : e.invite_type === "friend" ? "Friend" : "Home"
										}) }),
										/* @__PURE__ */ (0, S.jsx)(G, {
											className: "text-right",
											children: /* @__PURE__ */ (0, S.jsxs)("div", {
												className: "flex justify-end gap-1",
												children: [/* @__PURE__ */ (0, S.jsxs)(si, {
													size: "sm",
													variant: "outline",
													onClick: () => e.service_type === "iptv" ? t.mutate({
														id: e.id,
														active: !0
													}) : u.mutate(e.id),
													disabled: u.isPending || t.isPending,
													children: [/* @__PURE__ */ (0, S.jsx)(lp, { className: "mr-1 h-3 w-3" }), e.service_type === "iptv" ? "Reactivate" : "Re-invite"]
												}), /* @__PURE__ */ (0, S.jsx)(si, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:text-destructive",
													onClick: () => {
														confirm(`Permanently remove ${e.display_name} from the panel?`) && (e.service_type === "iptv" ? t.mutate({
															id: e.id,
															remove: !0
														}) : f.mutate({
															memberId: e.id,
															scope: "panel_only"
														}));
													},
													children: "Delete from panel"
												})]
											})
										})
									] }, e.id)) })] }) })] })]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, S.jsx)(Rg, {
						value: "billing",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsx)(fg, { members: y })
					}),
					/* @__PURE__ */ (0, S.jsx)(Rg, {
						value: "users",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsx)(Vg, { members: x })
					})
				]
			})
		})]
	});
}
function Kg({ status: e }) {
	let t = {
		not_invited: {
			label: "Not invited",
			variant: "outline"
		},
		invited: {
			label: "Invited",
			variant: "secondary"
		},
		accepted: {
			label: "Accepted",
			variant: "default"
		},
		failed: {
			label: "Failed",
			variant: "destructive"
		},
		removed: {
			label: "Removed",
			variant: "outline"
		}
	}[e];
	return /* @__PURE__ */ (0, S.jsx)(vi, {
		variant: t.variant,
		children: t.label
	});
}
function qg({ onCreated: e }) {
	let [t, n] = (0, x.useState)(""), [r, i] = (0, x.useState)(""), [a, o] = (0, x.useState)(""), [s, c] = (0, x.useState)(""), [l, u] = (0, x.useState)("home"), [d, f] = (0, x.useState)("plex"), [p, m] = (0, x.useState)(!0), [h, g] = (0, x.useState)(!1), _ = t && p ? sn(t) : [];
	return /* @__PURE__ */ (0, S.jsxs)(yi, { children: [/* @__PURE__ */ (0, S.jsxs)(bi, { children: [/* @__PURE__ */ (0, S.jsxs)(xi, {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, S.jsx)(fp, { className: "h-4 w-4" }), " Add a new member"]
	}), /* @__PURE__ */ (0, S.jsx)(Si, { children: "Choose Plex Home, a Plex library share, or an IPTV-only member for local payment tracking." })] }), /* @__PURE__ */ (0, S.jsx)(Ci, { children: /* @__PURE__ */ (0, S.jsxs)("form", {
		onSubmit: async (r) => {
			r.preventDefault(), g(!0);
			let { data: u } = await L.auth.getUser(), f = u.user?.id;
			if (!f) {
				I.error("Not signed in"), g(!1);
				return;
			}
			let { error: p } = await L.from("plex_home_members").insert({
				owner_id: f,
				display_name: t.trim(),
				email: a.trim().toLowerCase(),
				invite_type: l,
				service_type: d,
				notes: s.trim() || null
			});
			g(!1), p ? I.error(p.message) : (n(""), i(""), o(""), c(""), e(), I.success("Member added"));
		},
		className: "grid gap-4 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2 md:col-span-2",
				children: [/* @__PURE__ */ (0, S.jsx)(hi, { children: "Member type" }), /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							onClick: () => {
								f("plex"), u("home");
							},
							className: `rounded-md border px-3 py-1.5 text-sm ${d === "plex" && l === "home" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-accent"}`,
							children: "Plex Home member"
						}),
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							onClick: () => {
								f("plex"), u("friend");
							},
							className: `rounded-md border px-3 py-1.5 text-sm ${d === "plex" && l === "friend" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-accent"}`,
							children: "Friend (library share)"
						}),
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							onClick: () => f("iptv"),
							className: `rounded-md border px-3 py-1.5 text-sm ${d === "iptv" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-accent"}`,
							children: "IPTV only"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, S.jsx)(hi, {
					htmlFor: "display",
					children: "Display name"
				}), /* @__PURE__ */ (0, S.jsx)(ci, {
					id: "display",
					required: !0,
					value: t,
					onChange: (e) => n(e.target.value),
					placeholder: "Alex Doe"
				})]
			}),
			d === "plex" && /* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, S.jsxs)(hi, {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, S.jsx)("input", {
						type: "checkbox",
						checked: p,
						onChange: (e) => m(e.target.checked),
						className: "h-3.5 w-3.5"
					}), "Create a new Outlook address"]
				}), p && /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, S.jsx)(ci, {
						id: "handle",
						value: r,
						onChange: (e) => i(e.target.value),
						placeholder: "alex.doe"
					}), /* @__PURE__ */ (0, S.jsxs)(si, {
						type: "button",
						variant: "outline",
						onClick: () => {
							r.trim() ? (window.open(on(r), "_blank", "noopener,noreferrer"), a || o(`${r.trim().toLowerCase()}@outlook.com`)) : I.error("Enter a desired handle first");
						},
						children: [/* @__PURE__ */ (0, S.jsx)(ep, { className: "mr-1 h-3.5 w-3.5" }), "Open signup"]
					})]
				}), _.length > 0 && /* @__PURE__ */ (0, S.jsx)("div", {
					className: "flex flex-wrap gap-1 pt-1",
					children: _.map((e) => /* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: "rounded border border-border px-2 py-0.5 text-xs text-muted-foreground hover:bg-accent",
						onClick: () => i(e),
						children: e
					}, e))
				})] })]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2 md:col-span-2",
				children: [
					/* @__PURE__ */ (0, S.jsx)(hi, {
						htmlFor: "email",
						children: d === "iptv" ? "Contact email (optional)" : "Final email address"
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, S.jsx)(ci, {
							id: "email",
							type: "email",
							required: d === "plex",
							value: a,
							onChange: (e) => o(e.target.value),
							placeholder: "alex.doe@outlook.com"
						}), /* @__PURE__ */ (0, S.jsx)(ap, { className: "mt-2 h-4 w-4 text-muted-foreground" })]
					}),
					/* @__PURE__ */ (0, S.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: d === "iptv" ? "Local billing record only. No Plex account or token is needed." : "Use the member's Plex account email address."
					})
				]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2 md:col-span-2",
				children: [/* @__PURE__ */ (0, S.jsx)(hi, {
					htmlFor: "notes",
					children: "Notes (optional)"
				}), /* @__PURE__ */ (0, S.jsx)(gi, {
					id: "notes",
					value: s,
					onChange: (e) => c(e.target.value),
					placeholder: "Relationship, libraries to share, password reminder location, etc.",
					rows: 2
				})]
			}),
			/* @__PURE__ */ (0, S.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, S.jsx)(si, {
					type: "submit",
					disabled: h,
					children: h ? "Saving…" : "Add member"
				})
			})
		]
	}) })] });
}
// src/styles.css?inline
var Jg = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial;--tw-space-x-reverse:0;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-amber-500:oklch(76.9% .188 70.08);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-2xl:42rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--background);--color-foreground:var(--foreground)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-color:var(--border)}body{background-color:var(--color-background);color:var(--color-foreground)}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.top-4{top:calc(var(--spacing) * 4)}.top-\\[50\\%\\]{top:50%}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.left-2{left:calc(var(--spacing) * 2)}.left-\\[50\\%\\]{left:50%}.z-50{z-index:50}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.m-4{margin:calc(var(--spacing) * 4)}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mr-1{margin-right:var(--spacing)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.table{display:table}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-px{height:1px}.max-h-\\(--radix-select-content-available-height\\){max-height:var(--radix-select-content-available-height)}.max-h-\\[var\\(--radix-dropdown-menu-content-available-height\\)\\]{max-height:var(--radix-dropdown-menu-content-available-height)}.min-h-\\[60px\\]{min-height:60px}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing) * 2)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-9{width:calc(var(--spacing) * 9)}.w-64{width:calc(var(--spacing) * 64)}.w-\\[180px\\]{width:180px}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-6xl{max-width:var(--container-6xl)}.max-w-44{max-width:calc(var(--spacing) * 44)}.max-w-lg{max-width:var(--container-lg)}.min-w-0{min-width:0}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.caption-bottom{caption-side:bottom}.origin-\\(--radix-dropdown-menu-content-transform-origin\\){transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.origin-\\(--radix-select-content-transform-origin\\){transform-origin:var(--radix-select-content-transform-origin)}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block:0}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-border{border-color:var(--border)}.border-destructive\\/50{border-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.border-destructive\\/50{border-color:color-mix(in oklab, var(--destructive) 50%, transparent)}}.border-input{border-color:var(--input)}.border-primary{border-color:var(--primary)}.border-transparent{border-color:#0000}.bg-amber-500{background-color:var(--color-amber-500)}.bg-background{background-color:var(--background)}.bg-black\\/80{background-color:#000c}@supports (color:color-mix(in lab, red, red)){.bg-black\\/80{background-color:color-mix(in oklab, var(--color-black) 80%, transparent)}}.bg-card{background-color:var(--card)}.bg-destructive{background-color:var(--destructive)}.bg-muted,.bg-muted\\/50{background-color:var(--muted)}@supports (color:color-mix(in lab, red, red)){.bg-muted\\/50{background-color:color-mix(in oklab, var(--muted) 50%, transparent)}}.bg-popover{background-color:var(--popover)}.bg-primary,.bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.bg-primary\\/10{background-color:color-mix(in oklab, var(--primary) 10%, transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-transparent{background-color:#0000}.fill-current{fill:currentColor}.object-cover{object-fit:cover}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-6{padding:calc(var(--spacing) * 6)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-6{padding-block:calc(var(--spacing) * 6)}.pt-0{padding-top:0}.pt-1{padding-top:var(--spacing)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-8{padding-left:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-card-foreground{color:var(--card-foreground)}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-offset-background{--tw-ring-offset-color:var(--background)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\\:bg-transparent::file-selector-button{background-color:#0000}.file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.file\\:text-foreground::file-selector-button{color:var(--foreground)}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-amber-500\\/90:hover{background-color:#f99c00e6}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-amber-500\\/90:hover{background-color:color-mix(in oklab, var(--color-amber-500) 90%, transparent)}}.hover\\:bg-destructive\\/80:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-destructive\\/80:hover{background-color:color-mix(in oklab, var(--destructive) 80%, transparent)}}.hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab, var(--destructive) 90%, transparent)}}.hover\\:bg-muted\\/50:hover{background-color:var(--muted)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-muted\\/50:hover{background-color:color-mix(in oklab, var(--muted) 50%, transparent)}}.hover\\:bg-primary\\/80:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/80:hover{background-color:color-mix(in oklab, var(--primary) 80%, transparent)}}.hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab, var(--primary) 90%, transparent)}}.hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab, var(--secondary) 80%, transparent)}}.hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.hover\\:text-destructive:hover{color:var(--destructive)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}}.focus\\:bg-accent:focus{background-color:var(--accent)}.focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.focus\\:text-destructive:focus{color:var(--destructive)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-1:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color:var(--ring)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-background:focus-visible{--tw-ring-offset-color:var(--background)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.data-\\[state\\=active\\]\\:bg-background[data-state=active]{background-color:var(--background)}.data-\\[state\\=active\\]\\:text-foreground[data-state=active]{color:var(--foreground)}.data-\\[state\\=active\\]\\:shadow[data-state=active]{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:var(--primary)}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected]{background-color:var(--muted)}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-input[data-state=unchecked]{background-color:var(--input)}@media (width>=40rem){.sm\\:w-64{width:calc(var(--spacing) * 64)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}@media (width>=48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (width>=64rem){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:size-4 svg{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.\\[\\&_tr\\]\\:border-b tr{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child{border-style:var(--tw-border-style);border-width:0}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]){padding-right:0}.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\]>[role=checkbox]{--tw-translate-y:2px;translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.\\[\\&\\>svg\\]\\:size-4>svg{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}.\\[\\&\\>tr\\]\\:last\\:border-b-0>tr:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}}@property --tw-animation-delay{syntax:\"*\";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:\"*\";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:\"*\";inherits:false}@property --tw-animation-fill-mode{syntax:\"*\";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:\"*\";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:\"*\";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:\"*\";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:\"*\";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:\"*\";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:\"*\";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:\"*\";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:\"*\";inherits:false;initial-value:0}:host{--radius:.625rem;--background:oklch(97% 0 0);--foreground:oklch(12.9% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(12.9% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(12.9% 0 0);--primary:oklch(20.8% 0 0);--primary-foreground:oklch(98.4% 0 0);--secondary:oklch(96.8% 0 0);--secondary-foreground:oklch(20.8% 0 0);--muted:oklch(96.8% 0 0);--muted-foreground:oklch(45% 0 0);--accent:oklch(96.8% 0 0);--accent-foreground:oklch(20.8% 0 0);--destructive:oklch(57.7% .245 27.325);--destructive-foreground:oklch(98.4% 0 0);--border:oklch(92.9% 0 0);--input:oklch(92.9% 0 0);--ring:oklch(70.4% 0 0);--chart-1:oklch(64.6% 0 0);--chart-2:oklch(60% 0 0);--chart-3:oklch(39.8% 0 0);--chart-4:oklch(82.8% 0 0);--chart-5:oklch(76.9% 0 0);--sidebar:oklch(98.4% 0 0);--sidebar-foreground:oklch(12.9% 0 0);--sidebar-primary:oklch(20.8% 0 0);--sidebar-primary-foreground:oklch(98.4% 0 0);--sidebar-accent:oklch(96.8% 0 0);--sidebar-accent-foreground:oklch(20.8% 0 0);--sidebar-border:oklch(92.9% 0 0);--sidebar-ring:oklch(70.4% 0 0)}:host(.dark){--background:oklch(0% 0 0);--foreground:oklch(100% 0 0);--card:oklch(17% 0 0);--card-foreground:oklch(98.4% 0 0);--popover:oklch(16% 0 0);--popover-foreground:oklch(98.4% 0 0);--primary:oklch(92.9% 0 0);--primary-foreground:oklch(20.8% 0 0);--secondary:oklch(27.9% 0 0);--secondary-foreground:oklch(98.4% 0 0);--muted:oklch(27.9% 0 0);--muted-foreground:oklch(70.4% 0 0);--accent:oklch(27.9% 0 0);--accent-foreground:oklch(98.4% 0 0);--destructive:oklch(70.4% .191 22.216);--destructive-foreground:oklch(98.4% 0 0);--border:oklch(48% 0 0);--input:oklch(40% 0 0);--ring:oklch(55.1% 0 0);--chart-1:oklch(48.8% 0 0);--chart-2:oklch(69.6% 0 0);--chart-3:oklch(76.9% 0 0);--chart-4:oklch(62.7% 0 0);--chart-5:oklch(64.5% 0 0);--sidebar:oklch(20.8% 0 0);--sidebar-foreground:oklch(98.4% 0 0);--sidebar-primary:oklch(48.8% 0 0);--sidebar-primary-foreground:oklch(98.4% 0 0);--sidebar-accent:oklch(27.9% 0 0);--sidebar-accent-foreground:oklch(98.4% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.1% 0 0)}:host{height:100%;color:var(--foreground);background:var(--background);font-family:system-ui,sans-serif;display:block;overflow:auto}[data-slot=dialog-content]{overscroll-behavior:contain;-webkit-overflow-scrolling:touch;width:calc(100% - 2rem);max-height:calc(100dvh - 2rem);overflow-y:auto}[data-slot=dialog-content] [data-slot=dialog-footer]{background:var(--background);z-index:1;padding:.75rem 0 1.5rem;position:sticky;bottom:-1.5rem}.px-member-list{overscroll-behavior:contain;-webkit-overflow-scrolling:touch;max-height:min(20rem,40dvh);overflow-y:auto}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}", Yg = "html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{width:var(--width);--gray1:#fcfcfc;--gray2:#f8f8f8;--gray3:#f3f3f3;--gray4:#ededed;--gray5:#e8e8e8;--gray6:#e2e2e2;--gray7:#dbdbdb;--gray8:#c7c7c7;--gray9:#8f8f8f;--gray10:#858585;--gray11:#6f6f6f;--gray12:#171717;--border-radius:8px;box-sizing:border-box;z-index:999999999;outline:none;margin:0;padding:0;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;list-style:none;transition:transform .4s;position:fixed}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);opacity:0;transform:var(--y);touch-action:none;box-sizing:border-box;overflow-wrap:anywhere;outline:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;position:absolute}[data-sonner-toast][data-styled=true]{background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);width:var(--width);align-items:center;gap:6px;padding:16px;font-size:13px;display:flex;box-shadow:0 4px 12px #0000001a}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap));top:0}[data-sonner-toast][data-y-position=bottom]{--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap));bottom:0}[data-sonner-toast][data-styled=true] [data-description]{color:#3f3f3f;font-weight:400;line-height:1.4}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{color:inherit;font-weight:500;line-height:1.5}[data-sonner-toast][data-styled=true] [data-icon]{width:16px;height:16px;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end);flex-shrink:0;justify-content:flex-start;align-items:center;display:flex;position:relative}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform-origin:50%;animation:.3s forwards sonner-fade-in;transform:scale(.8)}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{flex-direction:column;flex:1;gap:2px;min-width:0;display:flex}[data-sonner-toast][data-styled=true] [data-button]{height:24px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);cursor:pointer;border:none;border-radius:4px;outline:none;flex-shrink:0;align-items:center;padding-left:8px;padding-right:8px;font-size:12px;font-weight:500;transition:opacity .4s,box-shadow .2s;display:flex}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:#00000014}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:#ffffff4d}[data-sonner-toast][data-styled=true] [data-close-button]{left:var(--toast-close-button-start);right:var(--toast-close-button-end);width:20px;height:20px;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);cursor:pointer;z-index:1;border-radius:50%;justify-content:center;align-items:center;padding:0;transition:opacity .1s,background .2s,border-color .2s;display:flex;position:absolute;top:0}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:\"\";z-index:-1;height:100%;position:absolute;left:-100%;right:-100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3)translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3)translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:\"\";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]:after{content:\"\";height:calc(var(--gap) + 1px);width:100%;position:absolute;bottom:100%;left:0}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * .05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0px)) translateX(var(--swipe-amount-x,0px));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (width<=600px){[data-sonner-toaster]{right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%;position:fixed}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{width:calc(100% - var(--mobile-offset-left) * 2);left:0;right:0}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:#ecfdf3;--success-border:#bffcd9;--success-text:#008a2e;--info-bg:#f0f8ff;--info-border:#dde7fd;--info-text:#0973dc;--warning-bg:#fffcf0;--warning-border:#fbeeb1;--warning-text:#dc7609;--error-bg:#fff0f0;--error-border:#ffe0e1;--error-text:#e60000}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:#333;--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:#1f1f1f;--normal-border:#333;--normal-border-hover:#404040;--normal-text:var(--gray1);--success-bg:#001f0f;--success-border:#003d1c;--success-text:#59f3a6;--info-bg:#000d1f;--info-border:#19233e;--info-text:#5896f3;--warning-bg:#1d1f00;--warning-border:#2e2e00;--warning-text:#f3cf58;--error-bg:#2d0607;--error-border:#4d0408;--error-text:#ff9ea1}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);z-index:10;position:absolute;inset:0}.sonner-loading-wrapper[data-visible=false]{transform-origin:50%;animation:.2s forwards sonner-fade-out}.sonner-spinner{height:var(--size);width:var(--size);position:relative;top:50%;left:50%}.sonner-loading-bar{background:var(--gray11);border-radius:6px;width:24%;height:8%;animation:1.2s linear infinite sonner-spin;position:absolute;top:-3.9%;left:-10%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg)translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg)translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg)translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg)translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg)translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg)translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg)translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg)translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg)translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg)translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg)translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg)translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{transform-origin:50%;transition:opacity .2s,transform .2s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8)translate(-50%,-50%)}";
// src/main.tsx
Jt();
function Xg() {
	let [e, t] = x.useState(!1);
	return /* @__PURE__ */ (0, S.jsx)("button", {
		type: "button",
		disabled: e,
		className: "m-4 rounded-md border px-3 py-2 text-sm",
		onClick: async () => {
			t(!0);
			try {
				let e = await Gt("export"), t = URL.createObjectURL(new Blob([JSON.stringify(e, null, 2)], { type: "application/json" })), n = document.createElement("a");
				n.href = t, n.download = `px-accounts-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, n.click(), setTimeout(() => URL.revokeObjectURL(t), 1e3);
			} catch (e) {
				I.error(e instanceof Error ? e.message : "Backup failed");
			} finally {
				t(!1);
			}
		},
		children: "Download local backup"
	});
}
var Zg = class extends HTMLElement {
	root;
	mount = document.createElement("div");
	portals = document.createElement("div");
	client = new Xe({ defaultOptions: {
		queries: {
			retry: 1,
			staleTime: 15e3,
			refetchOnWindowFocus: !0
		},
		mutations: { retry: !1 }
	} });
	current;
	themePreference = "auto";
	constructor() {
		super();
		try {
			let e = localStorage.getItem(Yt);
			(e === "light" || e === "dark") && (this.themePreference = e);
		} catch {}
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = Jg + Yg, e.append(t, this.mount, this.portals);
	}
	set hass(e) {
		this.current = e, Wt(e), this.applyTheme(), this.render();
	}
	applyTheme() {
		let e = this.themePreference === "dark" || this.themePreference === "auto" && !!this.current?.themes?.darkMode;
		this.classList.toggle("dark", e), this.style.colorScheme = e ? "dark" : "light";
	}
	setTheme = (e) => {
		this.themePreference = e;
		try {
			localStorage.setItem(Yt, e);
		} catch {}
		this.applyTheme(), this.render();
	};
	connectedCallback() {
		this.render();
	}
	disconnectedCallback() {
		this.root?.unmount(), this.root = void 0, this.client.clear();
	}
	render() {
		this.isConnected && this.current && (this.root ??= (0, dt.createRoot)(this.mount), this.current.user?.is_admin ? this.root.render(/* @__PURE__ */ (0, S.jsx)(Xt.Provider, {
			value: {
				preference: this.themePreference,
				setPreference: this.setTheme
			},
			children: /* @__PURE__ */ (0, S.jsx)(ji.Provider, {
				value: this.portals,
				children: /* @__PURE__ */ (0, S.jsxs)(T, {
					client: this.client,
					children: [
						/* @__PURE__ */ (0, S.jsx)(Gg, {}),
						/* @__PURE__ */ (0, S.jsx)(Xg, {}),
						/* @__PURE__ */ (0, S.jsx)(Ut, {
							theme: this.classList.contains("dark") ? "dark" : "light",
							richColors: !0,
							position: "bottom-center"
						})
					]
				})
			})
		})) : (this.client.clear(), this.root.render(/* @__PURE__ */ (0, S.jsx)("p", { children: "Administrator access is required." }))));
	}
};
customElements.get("px-account-manager") || customElements.define("px-account-manager", Zg);
