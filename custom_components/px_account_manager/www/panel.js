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
	function ne(e, t) {
		return typeof e == "object" && e && e.key != null ? O("" + e.key) : t.toString(36);
	}
	function re(e) {
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
	function A(e, r, i, a, o) {
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
				case d: return c = e._init, A(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + ne(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(k, "$&/") + "/"), A(o, r, i, "", function(e) {
			return e;
		})) : o != null && (te(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(k, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + ne(a, u), c += A(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + ne(a, u++), c += A(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return A(re(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function j(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return A(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function M(e) {
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
	var ie = typeof reportError == "function" ? reportError : function(e) {
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
	function ae(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, ie);
		} catch (e) {
			ie(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function oe(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else ae(oe.bind(null, e));
	}
	var se = {
		map: j,
		forEach: function(e, t, n) {
			j(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return j(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return j(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!te(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = se, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = oe, e.cache = function(e) {
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
			_init: M
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = ae, e.unstable_useCacheRefresh = function() {
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
	var E = Object.assign, D = Symbol.for("react.element"), te = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), j = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), le = Symbol.for("react.legacy_hidden"), ue = Symbol.for("react.memo_cache_sentinel"), de = Symbol.for("react.view_transition"), fe = Symbol.for("react.recoverable"), pe = Symbol.iterator;
	function me(e) {
		return typeof e != "object" || !e ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var he = Symbol.for("react.client.reference");
	function ge(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === he ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case k: return "Fragment";
			case re: return "Profiler";
			case ne: return "StrictMode";
			case ie: return "Suspense";
			case ae: return "SuspenseList";
			case ce: return "Activity";
			case de: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case O: return "Portal";
			case j: return e.displayName || "Context";
			case A: return (e._context.displayName || "Context") + ".Consumer";
			case M:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case oe: return t = e.displayName || null, t === null ? ge(e.type) || "Memo" : t;
			case se:
				t = e._payload, e = e._init;
				try {
					return ge(e(t));
				} catch {}
		}
		return null;
	}
	var _e = Array.isArray, N = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ve = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, ye = [], be = -1;
	function xe(e) {
		return { current: e };
	}
	function Se(e) {
		0 > be || (e.current = ye[be], ye[be] = null, be--);
	}
	function Ce(e, t) {
		be++, ye[be] = e.current, e.current = t;
	}
	var we = xe(null), Te = xe(null), Ee = xe(null), De = xe(null);
	function Oe(e, t) {
		switch (Ce(Ee, t), Ce(Te, e), Ce(we, null), t.nodeType) {
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
		Se(we), Ce(we, e);
	}
	function ke() {
		Se(we), Se(Te), Se(Ee);
	}
	function Ae(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, Ce(De, e)), t = we.current;
		var n = fp(t, e.type);
		t !== n && (Ce(Te, e), Ce(we, n));
	}
	function je(e) {
		Te.current === e && (Se(we), Se(Te)), De.current === e && (Se(De), sh._currentValue = ve);
	}
	var Me, Ne;
	function Pe(e) {
		if (Me === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Me = t && t[1] || "", Ne = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Me + e + Ne;
	}
	var Fe = !1;
	function Ie(e, t) {
		if (!e || Fe) return "";
		Fe = !0;
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
			Fe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Pe(n) : "";
	}
	function Le(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Pe(e.type);
			case 16: return Pe("Lazy");
			case 13: return e.child !== t && t !== null ? Pe("Suspense Fallback") : Pe("Suspense");
			case 19: return Pe("SuspenseList");
			case 0:
			case 15: return Ie(e.type, !1);
			case 11: return Ie(e.type.render, !1);
			case 1: return Ie(e.type, !0);
			case 31: return Pe("Activity");
			case 30: return Pe("ViewTransition");
			default: return "";
		}
	}
	function Re(e) {
		try {
			var t = "", n = null;
			do
				t += Le(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var ze = Object.prototype.hasOwnProperty, Be = t.unstable_scheduleCallback, Ve = t.unstable_cancelCallback, He = t.unstable_shouldYield, Ue = t.unstable_requestPaint, We = t.unstable_now, Ge = t.unstable_getCurrentPriorityLevel, Ke = t.unstable_ImmediatePriority, qe = t.unstable_UserBlockingPriority, Je = t.unstable_NormalPriority, Ye = t.unstable_LowPriority, Xe = t.unstable_IdlePriority, Ze = t.log, Qe = t.unstable_setDisableYieldValue, $e = null, et = null;
	function tt(e) {
		if (typeof Ze == "function" && Qe(e), et && typeof et.setStrictMode == "function") try {
			et.setStrictMode($e, e);
		} catch {}
	}
	var nt = Math.clz32 ? Math.clz32 : at, rt = Math.log, it = Math.LN2;
	function at(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (rt(e) / it | 0) | 0;
	}
	var ot = 256, st = 262144, ct = 4194304;
	function lt(e) {
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
	function ut(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = lt(n))) : i = lt(o) : i = lt(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = lt(n))) : i = lt(o)) : i = lt(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function dt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function ft(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - nt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function pt(e, t) {
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
	function mt() {
		var e = ct;
		return ct <<= 1, !(ct & 62914560) && (ct = 4194304), e;
	}
	function ht(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function gt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function _t(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - nt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && vt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function vt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - nt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function yt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - nt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function bt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : xt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function xt(e) {
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
	function St(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function Ct() {
		var e = P.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function wt(e, t) {
		var n = P.p;
		try {
			return P.p = e, t();
		} finally {
			P.p = n;
		}
	}
	var Tt = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Tt, Dt = "__reactProps$" + Tt, Ot = "__reactContainer$" + Tt, kt = "__reactEvents$" + Tt, F = "__reactListeners$" + Tt, At = "__reactHandles$" + Tt, jt = "__reactResources$" + Tt, Mt = "__reactMarker$" + Tt, Nt = "__reactLoad$" + Tt;
	function Pt(e) {
		delete e[Et], delete e[Dt], delete e[F], delete e[At];
	}
	function Ft(e) {
		var t;
		if (t = e[Et]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Ot] || n[Et]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = pm(e); e !== null;) {
					if (n = e[Et]) return n;
					e = pm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function It(e) {
		if (e = e[Et] || e[Ot]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Lt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Rt(e) {
		var t = e[jt];
		return t ||= e[jt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function zt(e) {
		e[Mt] = !0;
	}
	function Bt(e) {
		e[Nt] = void 0;
	}
	var Vt = /* @__PURE__ */ new Set(), Ht = {};
	function Ut(e, t) {
		Wt(e, t), Wt(e + "Capture", t);
	}
	function Wt(e, t) {
		for (Ht[e] = t, e = 0; e < t.length; e++) Vt.add(t[e]);
	}
	var Gt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Kt = {}, qt = {};
	function Jt(e) {
		return ze.call(qt, e) ? !0 : ze.call(Kt, e) ? !1 : Gt.test(e) ? qt[e] = !0 : (Kt[e] = !0, !1);
	}
	var I = !1;
	function Yt() {
		var e = I;
		return I = !1, e;
	}
	function Xt(e, t, n) {
		if (Jt(t)) {
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
	function Zt(e, t, n) {
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
	function Qt(e, t, n, r) {
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
	function $t(e) {
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
	function en(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function tn(e, t, n) {
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
	function nn(e) {
		if (!e._valueTracker) {
			var t = en(e) ? "checked" : "value";
			e._valueTracker = tn(e, t, "" + e[t]);
		}
	}
	function rn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = en(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var an = /[\n"\\]/g;
	function on(e) {
		return e.replace(an, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function sn(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + $t(t)) : e.value !== "" + $t(t) && (e.value = "" + $t(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : ln(e, $t(n)) : o === "number" && e.value == t ? ln(e, $t(e.value)) : ln(e, $t(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + $t(s) : e.removeAttribute("name");
	}
	function cn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				nn(e);
				return;
			}
			n = n == null ? "" : "" + $t(n), t = t == null ? n : "" + $t(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), nn(e);
	}
	function ln(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function L(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
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
		t != null && (t = "" + $t(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + $t(n);
	}
	function dn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (_e(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = $t(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), nn(e);
	}
	function fn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var pn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function mn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || pn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function hn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", I = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (mn(e, a, r), I = !0);
		} else for (var o in t) t.hasOwnProperty(o) && mn(e, o, t[o]);
	}
	function gn(e) {
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
	var _n = /* @__PURE__ */ new Map([
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
	]), vn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function yn(e) {
		return vn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function bn() {}
	var xn = null;
	function Sn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Cn = null, wn = null;
	function Tn(e) {
		var t = It(e);
		if (t && (e = t.stateNode)) {
			var n = e[Dt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (sn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + on("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Dt] || null;
								if (!a) throw Error(i(90));
								sn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && rn(r);
					}
					break a;
				case "textarea":
					un(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && L(e, !!n.multiple, t, !1);
			}
		}
	}
	var En = !1;
	function Dn(e, t, n) {
		if (En) return e(t, n);
		En = !0;
		try {
			return e(t);
		} finally {
			if (En = !1, (Cn !== null || wn !== null) && (Rd(), Cn && (t = Cn, e = wn, wn = Cn = null, Tn(t), e))) for (t = 0; t < e.length; t++) Tn(e[t]);
		}
	}
	function On(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Dt] || null;
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
	var kn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, An = !1;
	if (kn) try {
		var jn = {};
		Object.defineProperty(jn, "passive", { get: function() {
			An = !0;
		} }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
	} catch {
		An = !1;
	}
	var Mn = null, Nn = null, Pn = null;
	function Fn() {
		if (Pn) return Pn;
		var e, t = Nn, n = t.length, r, i = "value" in Mn ? Mn.value : Mn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Pn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function In(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Ln() {
		return !0;
	}
	function Rn() {
		return !1;
	}
	function zn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Ln : Rn, this.isPropagationStopped = Rn, this;
		}
		return E(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ln);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ln);
			},
			persist: function() {},
			isPersistent: Ln
		}), t;
	}
	var Bn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Vn = zn(Bn), Hn = E({}, Bn, {
		view: 0,
		detail: 0
	}), Un = zn(Hn), Wn, Gn, Kn, qn = E({}, Hn, {
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
		getModifierState: ir,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Wn = e.screenX - Kn.screenX, Gn = e.screenY - Kn.screenY) : Gn = Wn = 0, Kn = e), Wn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Gn;
		}
	}), Jn = zn(qn), Yn = zn(E({}, qn, { dataTransfer: 0 })), Xn = zn(E({}, Hn, { relatedTarget: 0 })), Zn = zn(E({}, Bn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = zn(E({}, Bn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), $n = zn(E({}, Bn, { data: 0 })), er = {
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
	}, tr = {
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
	}, nr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function rr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = nr[e]) ? !!t[e] : !1;
	}
	function ir() {
		return rr;
	}
	var ar = zn(E({}, Hn, {
		key: function(e) {
			if (e.key) {
				var t = er[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ir,
		charCode: function(e) {
			return e.type === "keypress" ? In(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), or = zn(E({}, qn, {
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
	})), sr = zn(E({}, Bn, { submitter: 0 })), cr = zn(E({}, Hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ir
	})), lr = zn(E({}, Bn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ur = zn(E({}, qn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), dr = zn(E({}, Bn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), fr = [
		9,
		13,
		27,
		32
	], pr = kn && "CompositionEvent" in window, mr = null;
	kn && "documentMode" in document && (mr = document.documentMode);
	var hr = kn && "TextEvent" in window && !mr, gr = kn && (!pr || mr && 8 < mr && 11 >= mr), _r = " ", vr = !1;
	function yr(e, t) {
		switch (e) {
			case "keyup": return fr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function br(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var xr = !1;
	function R(e, t) {
		switch (e) {
			case "compositionend": return br(t);
			case "keypress": return t.which === 32 ? (vr = !0, _r) : null;
			case "textInput": return e = t.data, e === _r && vr ? null : e;
			default: return null;
		}
	}
	function Sr(e, t) {
		if (xr) return e === "compositionend" || !pr && yr(e, t) ? (e = Fn(), Pn = Nn = Mn = null, xr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return gr && t.locale !== "ko" ? null : t.data;
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
	function wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Cr[e.type] : t === "textarea";
	}
	function Tr(e, t, n, r) {
		Cn ? wn ? wn.push(r) : wn = [r] : Cn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new Vn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Er = null, Dr = null;
	function Or(e) {
		Vf(e, 0);
	}
	function kr(e) {
		if (rn(Lt(e))) return e;
	}
	function Ar(e, t) {
		if (e === "change") return t;
	}
	var jr = !1;
	if (kn) {
		var Mr;
		if (kn) {
			var z = "oninput" in document;
			if (!z) {
				var Nr = document.createElement("div");
				Nr.setAttribute("oninput", "return;"), z = typeof Nr.oninput == "function";
			}
			Mr = z;
		} else Mr = !1;
		jr = Mr && (!document.documentMode || 9 < document.documentMode);
	}
	function Pr() {
		Er && (Er.detachEvent("onpropertychange", Fr), Dr = Er = null);
	}
	function Fr(e) {
		if (e.propertyName === "value" && kr(Dr)) {
			var t = [];
			Tr(t, Dr, e, Sn(e)), Dn(Or, t);
		}
	}
	function Ir(e, t, n) {
		e === "focusin" ? (Pr(), Er = t, Dr = n, Er.attachEvent("onpropertychange", Fr)) : e === "focusout" && Pr();
	}
	function Lr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return kr(Dr);
	}
	function Rr(e, t) {
		if (e === "click") return kr(t);
	}
	function zr(e, t) {
		if (e === "input" || e === "change") return kr(t);
	}
	function B(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Br = typeof Object.is == "function" ? Object.is : B;
	function Vr(e, t) {
		if (Br(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!ze.call(t, i) || !Br(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Hr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Ur(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Wr(e, t) {
		var n = Ur(e);
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
			n = Ur(n);
		}
	}
	function Gr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Kr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Hr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Hr(e.document);
		}
		return t;
	}
	function qr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Jr = kn && "documentMode" in document && 11 >= document.documentMode, Yr = null, Xr = null, Zr = null, Qr = !1;
	function $r(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Qr || Yr == null || Yr !== Hr(r) || (r = Yr, "selectionStart" in r && qr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Zr && Vr(Zr, r) || (Zr = r, r = Jf(Xr, "onSelect"), 0 < r.length && (t = new Vn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Yr)));
	}
	function ei(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ti = {
		animationend: ei("Animation", "AnimationEnd"),
		animationiteration: ei("Animation", "AnimationIteration"),
		animationstart: ei("Animation", "AnimationStart"),
		transitionrun: ei("Transition", "TransitionRun"),
		transitionstart: ei("Transition", "TransitionStart"),
		transitioncancel: ei("Transition", "TransitionCancel"),
		transitionend: ei("Transition", "TransitionEnd")
	}, ni = {}, ri = {};
	kn && (ri = document.createElement("div").style, "AnimationEvent" in window || (delete ti.animationend.animation, delete ti.animationiteration.animation, delete ti.animationstart.animation), "TransitionEvent" in window || delete ti.transitionend.transition);
	function V(e) {
		if (ni[e]) return ni[e];
		if (!ti[e]) return e;
		var t = ti[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ri) return ni[e] = t[n];
		return e;
	}
	var ii = V("animationend"), ai = V("animationiteration"), oi = V("animationstart"), si = V("transitionrun"), ci = V("transitionstart"), H = V("transitioncancel"), li = V("transitionend"), ui = /* @__PURE__ */ new Map(), di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	di.push("scrollEnd");
	function fi(e, t) {
		ui.set(e, t), Ut(t, [e]);
	}
	var pi = 0;
	function mi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = yd.identifierPrefix;
		var n = pi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function hi(e) {
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
	function gi(e, t) {
		return e = hi(e), t = hi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var _i = typeof reportError == "function" ? reportError : function(e) {
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
	}, vi = [], yi = 0, bi = 0;
	function xi() {
		for (var e = yi, t = bi = yi = 0; t < e;) {
			var n = vi[t];
			vi[t++] = null;
			var r = vi[t];
			vi[t++] = null;
			var i = vi[t];
			vi[t++] = null;
			var a = vi[t];
			if (vi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Ti(n, i, a);
		}
	}
	function Si(e, t, n, r) {
		vi[yi++] = e, vi[yi++] = t, vi[yi++] = n, vi[yi++] = r, bi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Ci(e, t, n, r) {
		return Si(e, t, n, r), Ei(e);
	}
	function wi(e, t) {
		return Si(e, null, null, t), Ei(e);
	}
	function Ti(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - nt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ei(e) {
		if (50 < Od) throw Od = 0, kd = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Di = {};
	function U(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function W(e, t, n, r) {
		return new U(e, t, n, r);
	}
	function Oi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ki(e, t) {
		var n = e.alternate;
		return n === null ? (n = W(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ai(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ji(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Oi(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, we.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case ce: return e = W(31, n, t, a), e.elementType = ce, e.lanes = o, e;
			case k: return Mi(n.children, a, o, t);
			case ne:
				s = 8, a |= 24;
				break;
			case re: return e = W(12, n, t, a | 2), e.elementType = re, e.lanes = o, e;
			case ie: return e = W(13, n, t, a), e.elementType = ie, e.lanes = o, e;
			case ae: return e = W(19, n, t, a), e.elementType = ae, e.lanes = o, e;
			case le:
			case de: return e = a | 32, e = W(30, n, t, e), e.elementType = de, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case j:
						s = 10;
						break a;
					case A:
						s = 9;
						break a;
					case M:
						s = 11;
						break a;
					case oe:
						s = 14;
						break a;
					case se:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = W(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Mi(e, t, n, r) {
		return e = W(7, e, r, t), e.lanes = n, e;
	}
	function Ni(e, t, n) {
		return e = W(6, e, null, t), e.lanes = n, e;
	}
	function G(e) {
		var t = W(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Pi(e, t, n) {
		return t = W(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Fi = /* @__PURE__ */ new WeakMap();
	function Ii(e, t) {
		if (typeof e == "object" && e) {
			var n = Fi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Re(t)
			}, Fi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Re(t)
		};
	}
	var Li = [], Ri = 0, zi = null, Bi = 0, Vi = [], Hi = 0, Ui = null, Wi = 1, Gi = "";
	function Ki(e, t) {
		Li[Ri++] = Bi, Li[Ri++] = zi, zi = e, Bi = t;
	}
	function qi(e, t, n) {
		Vi[Hi++] = Wi, Vi[Hi++] = Gi, Vi[Hi++] = Ui, Ui = e;
		var r = Wi;
		e = Gi;
		var i = 32 - nt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - nt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Wi = 1 << 32 - nt(t) + i | n << i | r, Gi = a + e;
		} else Wi = 1 << a | n << i | r, Gi = e;
	}
	function Ji(e) {
		e.return !== null && (Ki(e, 1), qi(e, 1, 0));
	}
	function Yi(e) {
		for (; e === zi;) zi = Li[--Ri], Li[Ri] = null, Bi = Li[--Ri], Li[Ri] = null;
		for (; e === Ui;) Ui = Vi[--Hi], Vi[Hi] = null, Gi = Vi[--Hi], Vi[Hi] = null, Wi = Vi[--Hi], Vi[Hi] = null;
	}
	function Xi(e, t) {
		Vi[Hi++] = Wi, Vi[Hi++] = Gi, Vi[Hi++] = Ui, Wi = t.id, Gi = t.overflow, Ui = e;
	}
	var Zi = null, K = null, q = !1, Qi = null, $i = !1, ea = Error(i(519));
	function ta(e) {
		throw sa(Ii(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ea;
	}
	function na(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Et] = e, t[Dt] = r, n) {
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
				Q("invalid", t), cn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), dn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = bn), t = !0) : t = !1, t || ta(e, !0);
	}
	function ra(e) {
		for (Zi = e.return; Zi;) switch (Zi.tag) {
			case 5:
			case 31:
			case 13:
				$i = !1;
				return;
			case 27:
			case 3:
				$i = !0;
				return;
			default: Zi = Zi.return;
		}
	}
	function ia(e) {
		if (e !== Zi) return !1;
		if (!q) return ra(e), q = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || mp(e.type, e.memoizedProps)), n = !n), n && K && ta(e), ra(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			K = fm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			K = fm(e);
		} else t === 27 ? (t = K, Cp(e.type) ? (e = dm, dm = null, K = e) : K = t) : K = Zi ? um(e.stateNode.nextSibling) : null;
		return !0;
	}
	function aa() {
		K = Zi = null, q = !1;
	}
	function oa() {
		var e = Qi;
		return e !== null && (dd === null ? dd = e : dd.push.apply(dd, e), Qi = null), e;
	}
	function sa(e) {
		Qi === null ? Qi = [e] : Qi.push(e);
	}
	var ca = xe(null), la = null, ua = null;
	function da(e, t, n) {
		Ce(ca, t._currentValue), t._currentValue = n;
	}
	function fa(e) {
		e._currentValue = ca.current, Se(ca);
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
			} else if (a === De.current) {
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
		$$typeof: j,
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
	var La = N.S;
	N.S = function(e, t) {
		if (md = We(), typeof t == "object" && t && typeof t.then == "function" && Pa(e, t), Oa !== null) for (var n = bf; n !== null;) Da(n, Oa), n = n.next;
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
	var Ra = xe(null);
	function za() {
		var e = Ra.current;
		return e === null ? Qu.pooledCache : e;
	}
	function Ba(e, t) {
		t === null ? Ce(Ra, Ra.current) : Ce(Ra, t.pool);
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
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bn, bn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Za(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(bn, bn);
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
			return e = ki(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Ni(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === k ? (e = d(e, t, n.props.children, r, n.key), to(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === se && Ja(i) === t.type) ? (t = a(t, n.props), to(t, n), t.return = e, t) : (t = ji(n.type, n.key, n.props, null, e.mode, r), to(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Pi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Mi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Ni("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case te: return n = ji(t.type, t.key, t.props, null, e.mode, n), to(n, t), n.return = e, n;
					case O: return t = Pi(t, e.mode, n), t.return = e, t;
					case se: return t = Ja(t), f(e, t, n);
				}
				if (_e(t) || me(t)) return t = Mi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, eo(t), n);
				if (t.$$typeof === j) return f(e, ya(e, t), n);
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
					case se: return n = Ja(n), p(e, t, n, r);
				}
				if (_e(n) || me(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, eo(n), r);
				if (n.$$typeof === j) return p(e, t, ya(e, n), r);
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
					case se: return r = Ja(r), m(e, t, n, r, i);
				}
				if (_e(r) || me(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, eo(r), i);
				if (r.$$typeof === j) return m(e, t, n, ya(t, r), i);
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
			if (h === s.length) return n(i, d), q && Ki(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return q && Ki(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), q && Ki(i, h), l;
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
			if (v.done) return n(a, h), q && Ki(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return q && Ki(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), q && Ki(a, g), u;
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
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === se && Ja(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), to(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === k ? (c = Mi(o.props.children, e.mode, c, o.key), to(c, o), c.return = e, e = c) : (c = ji(o.type, o.key, o.props, null, e.mode, c), to(c, o), c.return = e, e = c);
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
					case se: return o = Ja(o), _(e, r, o, c);
				}
				if (_e(o)) return h(e, r, o, c);
				if (me(o)) {
					if (l = me(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, eo(o), c);
				if (o.$$typeof === j) return _(e, r, ya(e, o), c);
				no(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Ni(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				$a = 0;
				var i = _(e, t, n, r);
				return Qa = null, i;
			} catch (t) {
				if (t === Ha || t === Wa) throw t;
				var a = W(29, t, null, e.mode);
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
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ei(e), Ti(e, null, n), t;
		}
		return Si(e, r, t, n), Ei(e);
	}
	function fo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, yt(e, n);
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
	var yo = xe(null), bo = xe(0);
	function xo(e, t) {
		e = rd, Ce(bo, e), Ce(yo, t), rd = e | t.baseLanes;
	}
	function So() {
		Ce(bo, rd), Ce(yo, yo.current);
	}
	function Co() {
		rd = bo.current, Se(yo), Se(bo);
	}
	var wo = xe(null), To = null;
	function Eo(e) {
		var t = e.alternate;
		Ce(jo, jo.current & 1), Ce(wo, e), To === null && (t === null || yo.current !== null || t.memoizedState !== null) && (To = e);
	}
	function Do(e) {
		Ce(jo, jo.current), Ce(wo, e), To === null && (To = e);
	}
	function Oo(e) {
		e.tag === 22 ? (Ce(jo, jo.current), Ce(wo, e), To === null && (To = e)) : ko();
	}
	function ko() {
		Ce(jo, jo.current), Ce(wo, wo.current);
	}
	function Ao(e) {
		Se(wo), To === e && (To = null), Se(jo);
	}
	var jo = xe(0);
	function Mo(e, t) {
		Ce(wo, wo.current), Ce(jo, t);
	}
	function No(e) {
		Se(jo), Se(wo), To === e && (To = null);
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
		return Fo = a, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? uc : dc, Bo = !1, a = n(r, i), Bo = !1, zo && (a = Yo(t, n, r, i)), Jo(e), a;
	}
	function Jo(e) {
		N.H = lc;
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
			N.H = fc, o = t(n, r);
		} while (zo);
		return o;
	}
	function Xo() {
		var e = N.H, t = e.useState()[0];
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
		return Ho += 1, Uo === null && (Uo = []), e = qa(Uo, e, t), t = J, (Lo === null ? t.memoizedState : Lo.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? uc : dc), e;
	}
	function is(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return rs(e);
			if (e.$$typeof === fe) return;
			if (e.$$typeof === j) return va(e);
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
		}, n === null && (n = ns(), J.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ue;
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
		var t = wi(e, 2);
		t !== null && Nd(t, e, 2);
	}
	function gs(e) {
		var t = es();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Bo) {
				tt(!0);
				try {
					n();
				} finally {
					tt(!1);
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
			N.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, ys(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function ys(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = N.T, o = {};
			o.types = a === null ? null : a.types, N.T = o;
			try {
				var s = n(i, r), c = N.S;
				c !== null && c(o, s), bs(e, t, s);
			} catch (n) {
				Ss(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), N.T = a;
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
						if (K) {
							b: {
								for (var i = K, a = $i; i.nodeType !== 8;) if (!a || (i = um(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								K = um(i.nextSibling), r = i.data === "F!";
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
			tt(!0);
			try {
				e();
			} finally {
				tt(!1);
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
		var a = P.p;
		P.p = a !== 0 && 8 > a ? a : 8;
		var o = N.T, s = {};
		s.types = o === null ? null : o.types, N.T = s, ac(e, !1, t, n);
		try {
			var c = i(), l = N.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? ic(e, t, Ia(c, r), Ad(e)) : ic(e, t, r, Ad(e));
		} catch (n) {
			ic(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Ad());
		} finally {
			P.p = a, o !== null && s.types !== null && (o.types = s.types), N.T = o;
		}
	}
	function Js() {}
	function Ys(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Xs(e).queue;
		qs(e, a, t, ve, n === null ? Js : function() {
			return Zs(e), n(r);
		});
	}
	function Xs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ve,
			baseState: ve,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: ve
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
		}, oc(e) ? sc(t, n) : (n = Ci(e, t, n, r), n !== null && (Nd(n, e, r), cc(n, t, r)));
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
				if (i.hasEagerState = !0, i.eagerState = s, Br(s, o)) return Si(e, t, i, 0), Qu === null && xi(), !1;
			} catch {}
			if (n = Ci(e, t, i, r), n !== null) return Nd(n, e, r), cc(n, t, r), !0;
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
		} else t = Ci(e, n, r, 2), t !== null && Nd(t, e, 2);
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
			r &= e.pendingLanes, n |= r, t.lanes = n, yt(e, n);
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
				tt(!0);
				try {
					e();
				} finally {
					tt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = es();
			if (n !== void 0) {
				var i = n(t);
				if (Bo) {
					tt(!0);
					try {
						n(t);
					} finally {
						tt(!1);
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
				var n = Gi, r = Wi;
				n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Vo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
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
		_i(e);
	}
	function yc(e) {
		console.error(e);
	}
	function bc(e) {
		_i(e);
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
		if (q) return t = wo.current, t === null ? (r !== ea && (t = Error(i(423), { cause: r }), sa(Ii(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Ii(r, n), a = Cc(e.stateNode, r, a), po(e, a), id !== 4 && (id = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ea && (e = Error(i(422), { cause: r }), sa(Ii(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Ii(o, n), ud === null ? ud = [o] : ud.push(o), id !== 4 && (id = 2), t === null) return !0;
		r = Ii(r, n), n = t;
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
		return _a(t), r = qo(e, t, n, o, a, i), s = Zo(), e !== null && !Oc ? (Qo(e, t, i), il(e, t, i)) : (q && s && Ji(t), t.flags |= 1, kc(e, t, r, i), t.child);
	}
	function jc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Oi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Mc(e, t, a, r, i)) : (e = ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !al(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Vr : n, n(o, r) && e.ref === t.ref) return il(e, t, i);
		}
		return t.flags |= 1, e = ki(a, r), e.ref = t.ref, e.return = t, t.child = e;
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
				if (Do(t), (e = K) ? (e = om(e, $i), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ui === null ? null : {
						id: Wi,
						overflow: Gi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = G(e), n.return = t, t.child = n, Zi = t, K = null)) : e = null, e === null) throw ta(t);
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
					if (r = Qu, r !== null && (s = bt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, wi(e, s), Nd(r, e, s), Dc;
					Gd();
				}
				t = Lc(e, t, n);
			} else e = o.treeContext, K = um(s.nextSibling), Zi = t, q = !0, Qi = null, $i = !1, e !== null && Xi(t, e), t = Ic(t, r), t.flags |= 134221824;
			return t;
		}
		return e = ki(e.child, {
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
		return _a(t), n = qo(e, t, n, r, void 0, i), r = Zo(), e !== null && !Oc ? (Qo(e, t, i), il(e, t, i)) : (q && r && Ji(t), t.flags |= 1, kc(e, t, n, i), t.child);
	}
	function Vc(e, t, n, r, i, a) {
		return _a(t), t.updateQueue = null, n = Yo(t, r, n, i), Jo(e), r = Zo(), e !== null && !Oc ? (Qo(e, t, a), il(e, t, a)) : (q && r && Ji(t), t.flags |= 1, kc(e, t, n, a), t.child);
	}
	function Hc(e, t, n, r, i) {
		if (_a(t), t.stateNode === null) {
			var a = Di, o = n.contextType;
			typeof o == "object" && o && (a = va(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = mc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, so(t), o = n.contextType, a.context = typeof o == "object" && o ? va(o) : Di, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (pc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && mc.enqueueReplaceState(a, a.state, null), go(t, r, a, i), ho(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = _c(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Di, typeof u == "object" && u && (o = va(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && gc(t, a, r, o), oo = !1;
			var f = t.memoizedState;
			a.state = f, go(t, r, a, i), ho(), l = t.memoizedState, s || f !== l || oo ? (typeof d == "function" && (pc(t, n, d, r), l = t.memoizedState), (c = oo || hc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, co(e, t), o = t.memoizedProps, u = _c(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Di, typeof l == "object" && l && (c = va(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && gc(t, a, r, c), oo = !1, f = t.memoizedState, a.state = f, go(t, r, a, i), ho();
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
				if (i ? Eo(t) : ko(), (e = K) ? (e = om(e, $i), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ui === null ? null : {
						id: Wi,
						overflow: Gi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = G(e), n.return = t, t.child = n, Zi = t, K = null)) : e = null, e === null) throw ta(t);
				return t.lanes = cm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (ko(), i = t.mode, a = Yc({
				mode: "hidden",
				children: a
			}, i), r = Mi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Gc(n), r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(null, r)) : (Eo(t), Jc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return Zc(e, t, a, o, r, c, s, n);
		}
		return i ? (ko(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = ki(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Mi(i, a, n, null), i.flags |= 2) : i = ki(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Pc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Gc(n) : (a = i.cachePool, a === null ? a = Va() : (s = wa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(e.child, r)) : (Eo(t), n = e.child, e = n.sibling, n = ki(n, {
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
		return e = W(22, e, null, t), e.lanes = 0, e;
	}
	function Xc(e, t, n) {
		return io(t, e.child, null, n), e = Jc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Eo(t), t.flags &= -257, Xc(e, t, c)) : t.memoizedState === null ? (ko(), o = a.fallback, s = t.mode, a = Yc({
			mode: "visible",
			children: a.children
		}, s), o = Mi(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, io(t, e.child, null, c), a = t.child, a.memoizedState = Gc(c), a.childLanes = Kc(e, r, c), t.memoizedState = Wc, Pc(null, a)) : (ko(), t.child = e.child, t.flags |= 128, null);
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
			if (r = Qu, r !== null && (a = bt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, wi(e, a), Nd(r, e, a), Dc;
			return sm(o) || Gd(), Xc(e, t, c);
		}
		return sm(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, K = um(o.nextSibling), Zi = t, q = !0, Qi = null, $i = !1, e !== null && Xi(t, e), t = Jc(t, a.children), t.flags |= 134221824, t);
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
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Mo(t, o), i === "backwards" && e !== null ? (tl(e), kc(e, t, r, n), tl(e)) : kc(e, t, r, n), r = q ? Bi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
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
			for (e = t.child, n = ki(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ki(e, e.pendingProps), n.return = t;
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
				Oe(t, t.stateNode.containerInfo), da(t, wa, e.memoizedState.cache), aa();
				break;
			case 27:
			case 5:
				Ae(t);
				break;
			case 4:
				Oe(t, t.stateNode.containerInfo);
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
		} else Oc = !1, q && t.flags & 1048576 && qi(t, Bi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ja(t.elementType), t.type = e, typeof e == "function") Oi(e) ? (r = _c(e, r), t.tag = 1, t = Hc(null, t, e, r, n)) : (t.tag = 0, t = Bc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === M) {
								t.tag = 11, t = Ac(null, t, e, r, n);
								break a;
							}
							if (a === oe) {
								t.tag = 14, t = jc(null, t, e, r, n);
								break a;
							}
							if (a === j) {
								t.tag = 10, t.type = e, t = rl(null, t, n);
								break a;
							}
						}
						throw t = ge(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Bc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = _c(r, t.pendingProps), Hc(e, t, r, a, n);
			case 3:
				a: {
					if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
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
							a = Ii(Error(i(424)), t), sa(a), t = Uc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (K = um(e.firstChild), Zi = t, q = !0, Qi = null, $i = !0, n = ao(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
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
			case 26: return zc(e, t), e === null ? (n = Pm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : q || (t.stateNode = pp(t.type, t.pendingProps, Ee.current, t)) : t.memoizedState = Pm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Ae(t), e === null && q && (r = t.stateNode = gm(t.type, t.pendingProps, Ee.current), Zi = t, $i = !0, a = K, Cp(t.type) ? (dm = a, K = um(r.firstChild)) : K = a), kc(e, t, t.pendingProps.children, n), zc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && q && ((a = r = K) && (r = im(r, t.type, t.pendingProps, $i), r === null ? a = !1 : (t.stateNode = r, Zi = t, K = um(r.firstChild), $i = !1, a = !0)), a || ta(t)), Ae(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, mp(a, o) ? r = null : s !== null && mp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = qo(e, t, Xo, null, null, n), sh._currentValue = a), zc(e, t), kc(e, t, r, n), t.child;
			case 6: return e === null && q && ((e = n = K) && (n = am(n, t.pendingProps, $i), n === null ? e = !1 : (t.stateNode = n, Zi = t, K = null, e = !0)), e || ta(t)), null;
			case 13: return qc(e, t, n);
			case 4: return Oe(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = io(t, null, r, n) : kc(e, t, r, n), t.child;
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
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : q && Ji(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : zc(e, t), kc(e, t, r.children, n), t.child;
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
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : mt(), e.lanes |= t, ld |= t);
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
		switch (Yi(t), t.tag) {
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
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), fa(wa), ke(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ia(t) ? cl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, oa())), pl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (cl(t), o === null ? (pl(t), ll(t, a, null, r, n)) : (pl(t), ul(t, o))) : o ? o === e.memoizedState ? (pl(t), t.flags &= -16777217) : (cl(t), pl(t), ul(t, o)) : (e = e.memoizedProps, e !== r && cl(t), pl(t), ll(t, a, e, r, n)), null;
			case 27:
				if (je(t), n = Ee.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					e = we.current, ia(t) ? na(t, e) : (e = gm(a, r, n), t.stateNode = e, cl(t));
				}
				return pl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (je(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = we.current, ia(t)) na(t, o);
					else {
						var s = up(Ee.current);
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
						o[Et] = t, o[Dt] = r;
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
					if (e = Ee.current, ia(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Zi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[Et] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || ta(t, !0);
					} else e = up(e).createTextNode(r), e[Et] = t, t.stateNode = e;
				}
				return pl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ia(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[Et] = t;
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
							a[Et] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), a = !1;
					} else a = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null);
				}
				return Ao(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dl(t, t.updateQueue), pl(t), null);
			case 4: return ke(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, pl(t), null;
			case 10: return fa(t.type), pl(t), null;
			case 19:
				if (No(t), r = t.memoizedState, r === null) return pl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) fl(r, !1);
					else {
						if (id !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Po(e), o !== null) {
								for (t.flags |= 128, fl(r, !1), e = o.updateQueue, t.updateQueue = e, dl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ai(n, e), n = n.sibling;
								return Mo(t, jo.current & 1 | 2), q && Ki(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && We() > hd && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Po(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, dl(t, e), fl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !q) return pl(t), null;
						} else 2 * We() - r.renderingStartTime > hd && n !== 536870912 && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
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
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = We(), e.sibling = null, o = jo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || q ? Mo(t, o) : (n = o, Ce(wo, t), Ce(jo, n), To === null && (To = t)), q && Ki(t, r.treeForkCount), e;
				}
				return pl(t), null;
			case 22:
			case 23: return Ao(t), Co(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (pl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pl(t), n = t.updateQueue, n !== null && dl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Se(Ra), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), fa(wa), pl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, pl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function hl(e, t) {
		switch (Yi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return fa(wa), ke(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return je(t), null;
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
			case 4: return ke(), null;
			case 10: return fa(t.type), null;
			case 22:
			case 23: return Ao(t), Co(), e !== null && Se(Ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return fa(wa), null;
			case 25: return null;
			default: return null;
		}
	}
	function gl(e, t) {
		switch (Yi(t), t.tag) {
			case 3:
				fa(wa), ke();
				break;
			case 26:
			case 27:
			case 5:
				je(t);
				break;
			case 4:
				ke();
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
				Ao(t), Co(), e !== null && Se(Ra);
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
						var i = e.stateNode, a = mi(e.memoizedProps, i);
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
			ap(r, e.type, n, t), r[Dt] = t;
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
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bn)), Cl(e, r), I = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, Cp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ml(e, t, n, r), e = e.sibling; e !== null;) Ml(e, t, n, r), e = e.sibling;
	}
	function Nl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Cl(e, r), I = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, Cp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Nl(e, t, n, r), e = e.sibling; e !== null;) Nl(e, t, n, r), e = e.sibling;
	}
	function Pl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			rp(t, r, n), t[Et] = e, t[Dt] = n;
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
				t = gi(t.default, t.share), t !== "none" && (Vl(e, n, t, null, !1) || Ul(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Gl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = mi(r, n), a = gi(r.default, n.paired ? r.share : r.enter);
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
								var a = gi(n.default, n.share);
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
			var t = e.memoizedProps, n = mi(t, e.stateNode), r = Il === null ? void 0 : Il.get(n), i = gi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Vl(e, n, i, null, !1) ? r === void 0 ? Md(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Il.delete(n), Md(e, t.onShare)) : Ul(e.child, !1)), Il !== null && Kl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ql(e), e = e.sibling;
		else Il !== null && Kl(e);
	}
	function Jl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = mi(t, e.stateNode);
				t = gi(t.default, t.update), e.flags &= -5, t !== "none" && Vl(e, n, t, e.memoizedState = [], !1);
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
				var n = e.memoizedProps, r = e.stateNode, i = mi(n, r), a = gi(n.default, n.update);
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
		if (e = e.containerInfo, cp = gh, e = Kr(e), qr(e)) {
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
					n && r !== null && (n = mi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = gi(a.default, a.update), a !== "none" && Vl(r, n, a, r.memoizedState = [], !0));
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
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, I = !0;
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
		t !== null && (e.alternate = null, gu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var _u = null, vu = !1;
	function yu(e, t, n) {
		for (n = n.child; n !== null;) bu(e, t, n), n = n.sibling;
	}
	function bu(e, t, n) {
		if (et && typeof et.onCommitFiberUnmount == "function") try {
			et.onCommitFiberUnmount($e, n);
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
						(_u.nodeType === 9 ? _u.body : _u.nodeName === "HTML" ? _u.ownerDocument.body : _u).removeChild(n.stateNode), I = !0;
					} catch (e) {
						pf(n, t, e);
					}
					else try {
						_u.removeChild(n.stateNode), I = !0;
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
												r = a.getElementsByTagName("title")[0], (!r || r[Mt] || r[Et] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), rp(r, t, n), r[Et] = e, zt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), rp(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), rp(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[Et] = e, zt(r), t = r;
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
						fn(t, ""), I = !0;
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
						n.nodeValue = t, I = !0;
					} catch (t) {
						pf(e, e.return, t);
					}
				}
				break;
			case 3:
				if (I = !1, Wm = null, o = Eu, Eu = xm(t.containerInfo), Tu(t, e, n), Eu = o, Ou(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					pf(e, e.return, t);
				}
				ru && (ru = !1, ku(e)), I = !1;
				break;
			case 4:
				a = nu, nu = eu, r = Yt(), o = Eu, Eu = xm(e.stateNode.containerInfo), Tu(t, e, n), Ou(e), Eu = o, I && su && (cu = !0), I = r, nu = a;
				break;
			case 12:
				Tu(t, e, n), Ou(e);
				break;
			case 31:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 13:
				Tu(t, e, n), Ou(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (pd = We()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
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
				a & 512 && (tu || r === null || Sl(r, r.return)), a = Yt(), o = su, s = (n & 335544064) === n, c = e.memoizedProps, su = s && gi(c.default, c.update) !== "none", Tu(t, e, n), Ou(e), s && r !== null && I && (e.flags |= 4), su = o, I = a;
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
						n.flags & 32 && (fn(l, ""), n.flags &= -33), Nl(e, jl(e), l, s);
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
				t = mi(a, o), o = mi(n.memoizedProps, o);
				var s = gi(a.default, a.update);
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
	}, Xu = typeof WeakMap == "function" ? WeakMap : Map, Zu = 0, Qu = null, Y = null, X = 0, $u = 0, Z = null, ed = !1, td = !1, nd = !1, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = null, dd = null, fd = !1, pd = 0, md = 0, hd = Infinity, gd = null, _d = null, vd = 0, yd = null, bd = null, xd = 0, Sd = 0, Cd = null, wd = null, Td = null, Ed = null, Dd = null, Od = 0, kd = null;
	function Ad() {
		return Zu & 2 && X !== 0 ? X & -X : N.T === null ? Ct() : Pf();
	}
	function jd() {
		if (cd === 0) {
			if (!(X & 536870912) || q) {
				var e = st;
				st <<= 1, !(st & 3932160) && (st = 262144), cd = e;
			} else cd = 536870912;
		}
		return e = wo.current, e !== null && (e.flags |= 32), cd;
	}
	function Md(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Fp(mi(e.memoizedProps, n))), Ed === null && (Ed = []), Ed.push(t.bind(null, r));
		}
	}
	function Nd(e, t, n) {
		(e === Qu && ($u === 2 || $u === 9) || e.cancelPendingCommit !== null) && (Bd(e, 0), Ld(e, X, cd, !1)), gt(e, n), Zu & 2 && e === Qu || (e === Qu && (!(Zu & 2) && (od |= n), id === 4 && Ld(e, X, cd, !1)), Ef(e));
	}
	function Pd(e, t, n) {
		if (Zu & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || dt(e, t), a = r ? Jd(e, t) : Kd(e, t, !0), o = r;
		do {
			if (a === 0) {
				td && !r && Ld(e, t, 0, !1);
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
								if (nd && !l) {
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
							Ld(r, t, cd, !ed);
							break a;
						case 2:
							dd = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = pd + 300 - We(), 10 < a)) {
						if (Ld(r, t, cd, !ed), ut(r, 0, !0) !== 0) break a;
						xd = t, r.timeoutHandle = _p(Fd.bind(null, r, n, dd, gd, fd, t, cd, od, ld, ed, o, "Throttled", -0, 0), a);
						break a;
					}
					Fd(r, n, dd, gd, fd, t, cd, od, ld, ed, o, null, -0, 0);
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
			unsuspend: bn
		}, Il = null, Uu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? pd - We() : (a & 4194048) === a ? md - We() : 0, m = eh(d, m), m !== null) ? (xd = a, e.cancelPendingCommit = m(tf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Ld(e, a, o, !l)) : tf(e, t, a, n, r, i, o, s, c, l, u, d);
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
		t = ft(e, t), t &= ~sd, t &= ~od, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - nt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && vt(e, n, t);
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
		return n !== -1 && (e.timeoutHandle = -1, vp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), xd = 0, zd(), Qu = e, Y = n = ki(e.current, null), X = t, $u = 0, Z = null, ed = !1, td = dt(e, t), nd = !1, ld = cd = sd = od = ad = id = 0, dd = ud = null, fd = !1, rd = ft(e, t), xi(), n;
	}
	function Vd(e, t) {
		J = null, N.H = lc, t === Ha || t === Wa ? (t = Xa(), $u = 3) : t === Ua ? (t = Xa(), $u = 4) : $u = t === Dc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Z = t, Y === null && (id = 1, xc(e, Ii(t, e.current)));
	}
	function Hd() {
		var e = wo.current;
		return e === null ? !0 : (X & 4194048) === X ? To === null : (X & 62914560) === X || X & 536870912 ? e === To : !1;
	}
	function Ud() {
		var e = N.H;
		return N.H = lc, e === null ? lc : e;
	}
	function Wd() {
		var e = N.A;
		return N.A = Yu, e;
	}
	function Gd() {
		id = 4, ed || (X & 4194048) !== X && wo.current !== null || (td = !0), !(ad & 134217727) && !(od & 134217727) || Qu === null || Ld(Qu, X, cd, !1);
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
					var s = Y, c = Z;
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
							if ($u = 0, Z = null, Qd(e, s, c, l), n && td) {
								o = 0;
								break a;
							}
							break;
						default: l = $u, $u = 0, Z = null, Qd(e, s, c, l);
					}
				}
				qd(), o = id;
				break;
			} catch (t) {
				Vd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ua = la = null, Zu = r, N.H = i, N.A = a, Y === null && (Qu = null, X = 0, xi()), o;
	}
	function qd() {
		for (; Y !== null;) Xd(Y);
	}
	function Jd(e, t) {
		var n = Zu;
		Zu |= 2;
		var r = Ud(), a = Wd();
		Qu !== e || X !== t ? (gd = null, hd = We() + 500, Bd(e, t)) : td = dt(e, t);
		a: do
			try {
				if ($u !== 0 && Y !== null) {
					t = Y;
					var o = Z;
					b: switch ($u) {
						case 1:
							$u = 0, Z = null, Qd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ka(o)) {
								$u = 0, Z = null, Zd(t);
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
							Ka(o) ? ($u = 0, Z = null, Zd(t)) : ($u = 0, Z = null, Qd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Y.tag) {
								case 26: s = Y.memoizedState;
								case 5:
								case 27:
									var c = Y;
									if (s ? Ym(s) : c.stateNode.complete) {
										$u = 0, Z = null;
										var l = c.sibling;
										if (l !== null) Y = l;
										else {
											var u = c.return;
											u === null ? Y = null : (Y = u, $d(u));
										}
										break b;
									}
							}
							$u = 0, Z = null, Qd(e, t, o, 5);
							break;
						case 6:
							$u = 0, Z = null, Qd(e, t, o, 6);
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
		return ua = la = null, N.H = r, N.A = a, Zu = n, Y === null ? (Qu = null, X = 0, xi(), id) : 0;
	}
	function Yd() {
		for (; Y !== null && !He();) Xd(Y);
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
				r === Zi && (q ? (ra(r), r.tag === 5 && r.stateNode != null && (K = r.stateNode)) : (ra(r), q = !0));
			default: gl(n, t), t = Y = Ai(t, rd), t = sl(n, t, rd);
		}
		e.memoizedProps = e.pendingProps, t === null ? $d(e) : Y = t;
	}
	function Qd(e, t, n, r) {
		ua = la = null, $o(t), Qa = null, $a = 0;
		var i = t.return;
		try {
			if (Ec(e, i, t, n, X)) {
				id = 1, xc(e, Ii(n, e.current)), Y = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Y = i, t;
			id = 1, xc(e, Ii(n, e.current)), Y = null;
			return;
		}
		t.flags & 32768 ? (q || r === 1 ? e = !0 : td || X & 536870912 ? e = !1 : (ed = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = wo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), ef(t, e)) : $d(t);
	}
	function $d(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				ef(t, ed);
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
		if (Sd = s, s |= bi, _t(e, n, s, r, i, a), Ed = null, (n & 335544064) === n ? (Dd = ka(e), r = 10262) : (Dd = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Je, function() {
			return df(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Fl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = N.T, N.T = null, i = P.p, P.p = 2, a = Zu, Zu |= 4;
			try {
				uu(e, t, n);
			} finally {
				Zu = a, P.p = i, N.T = r;
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
				r = N.T, N.T = null;
				var i = P.p;
				P.p = 2;
				var a = Zu;
				Zu |= 4;
				try {
					su = cu = !1, Du(t, e, n), n = lp;
					var o = Kr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Gr(s.ownerDocument.documentElement, s)) {
						if (c !== null && qr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Wr(s, h), v = Wr(s, g);
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
					Zu = a, P.p = i, N.T = r;
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
				n = N.T, N.T = null;
				var r = P.p;
				P.p = 2;
				var i = Zu;
				Zu |= 4;
				try {
					fu(e, t.alternate, t);
				} finally {
					Zu = i, P.p = r, N.T = n;
				}
			}
			vd = 3;
		}
	}
	function cf() {
		if (vd === 4 || vd === 3) {
			vd = 0;
			var e = Td;
			Td = null, Ue();
			var t = yd, n = bd, r = xd, i = wd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? vd = 5 : (vd = 0, bd = yd = null, lf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (_d = null), St(r), n = n.stateNode, et && typeof et.onCommitFiberRoot == "function") try {
				et.onCommitFiberRoot($e, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = N.T, a = P.p, P.p = 2, N.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					N.T = n, P.p = a;
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
		var n = St(xd), r = N.T, a = P.p;
		try {
			P.p = 32 > n ? 32 : n, N.T = null, n = Cd, Cd = null;
			var o = yd, s = xd;
			if (vd = 0, bd = yd = null, xd = 0, Zu & 6) throw Error(i(331));
			var c = Zu;
			if (Zu |= 4, Ku(o.current), Ru(o, o.current, s, n), Zu = c, Df(0, !1), et && typeof et.onPostCommitFiberRoot == "function") try {
				et.onPostCommitFiberRoot($e, o);
			} catch {}
			return !0;
		} finally {
			P.p = a, N.T = r, lf(e, t);
		}
	}
	function ff(e, t, n) {
		t = Ii(n, t), t = Cc(e.stateNode, t, 2), e = uo(e, t, 2), e !== null && (gt(e, 2), Ef(e));
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
					e = Ii(n, e), n = wc(2), r = uo(t, n, 2), r !== null && (Tc(n, r, t, e), gt(r, 2), Ef(r));
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
		i.has(n) || (nd = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Qu === e && (X & n) === n && (id === 4 || id === 3 && (X & 62914560) === X && 300 > We() - pd ? Zu & 2 ? sd |= n : Bd(e, 0) : sd |= n, ld === X && (ld = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = mt()), e = wi(e, t), e !== null && (gt(e, t), Ef(e));
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
		return Be(e, t);
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
								a = (1 << 31 - nt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = X, a = ut(r, r === Qu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || dt(r, a) || (n = !0, Mf(r, a));
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
		for (var t = We(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		vd !== 0 && vd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - nt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = pt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Qu, n = X, n = ut(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && ($u === 2 || $u === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ve(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || dt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ve(r), St(n)) {
				case 2:
				case 8:
					n = qe;
					break;
				case 32:
					n = Je;
					break;
				case 268435456:
					n = Xe;
					break;
				default: n = Je;
			}
			return r = jf.bind(null, e), n = Be(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ve(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (vd !== 0 && vd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (uf() && e.callbackNode !== n) return null;
		var r = X;
		return r = ut(e, e === Qu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Pd(e, r, t), Af(e, We()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (uf()) return null;
		Pd(e, t, !0);
	}
	function Nf() {
		xp(function() {
			Zu & 6 ? Be(Ke, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = Ma;
			e === 0 && (e = ot, ot <<= 1, !(ot & 261888) && (ot = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Dt] || null).action), o = r.submitter;
			o && (t = (t = o[Dt] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Vn("action", "action", null, r, i);
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
	for (var Lf = 0; Lf < di.length; Lf++) {
		var Rf = di[Lf];
		fi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	fi(ii, "onAnimationEnd"), fi(ai, "onAnimationIteration"), fi(oi, "onAnimationStart"), fi("dblclick", "onDoubleClick"), fi("focusin", "onFocus"), fi("focusout", "onBlur"), fi(si, "onTransitionRun"), fi(ci, "onTransitionStart"), fi(H, "onTransitionCancel"), fi(li, "onTransitionEnd"), Wt("onMouseEnter", ["mouseout", "mouseover"]), Wt("onMouseLeave", ["mouseout", "mouseover"]), Wt("onPointerEnter", ["pointerout", "pointerover"]), Wt("onPointerLeave", ["pointerout", "pointerover"]), Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ut("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
						_i(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						_i(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[kt];
		n === void 0 && (n = t[kt] = /* @__PURE__ */ new Set());
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
			e[Uf] = !0, Vt.forEach(function(t) {
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
		n = i.bind(null, t, n, e), i = void 0, !An || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
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
					if (s = Ft(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Dn(function() {
			var r = a, i = Sn(n), s = [];
			a: {
				var c = ui.get(e);
				if (c !== void 0) {
					var l = Vn, u = e;
					switch (e) {
						case "keypress": if (In(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = ar;
							break;
						case "focusin":
							u = "focus", l = Xn;
							break;
						case "focusout":
							u = "blur", l = Xn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Xn;
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
							l = Jn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Yn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = cr;
							break;
						case ii:
						case ai:
						case oi:
							l = Zn;
							break;
						case li:
							l = lr;
							break;
						case "scroll":
						case "scrollend":
							l = Un;
							break;
						case "wheel":
							l = ur;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = or;
							break;
						case "submit":
							l = sr;
							break;
						case "toggle":
						case "beforetoggle": l = dr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = On(m, p), g != null && d.push(qf(m, g, h))), f) break;
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
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== xn && (u = n.relatedTarget || n.fromElement) && (Ft(u) || u[Ot])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ft(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Jn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = or, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : Lt(c), h = l == null ? u : Lt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Ft(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? ee(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? Lt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Ar;
					else if (wr(c)) {
						if (jr) _ = zr;
						else {
							_ = Lr;
							var v = Ir;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && gn(r.elementType) && (_ = Ar) : _ = Rr;
					if (_ &&= _(e, r)) {
						Tr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? Lt(r) : window, e) {
					case "focusin":
						(wr(v) || v.contentEditable === "true") && (Yr = v, Xr = r, Zr = null);
						break;
					case "focusout":
						Zr = Xr = Yr = null;
						break;
					case "mousedown":
						Qr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Qr = !1, $r(s, n, i);
						break;
					case "selectionchange": if (Jr) break;
					case "keydown":
					case "keyup": $r(s, n, i);
				}
				var y;
				if (pr) b: {
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
				else xr ? yr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (gr && n.locale !== "ko" && (xr || b !== "onCompositionStart" ? b === "onCompositionEnd" && xr && (y = Fn()) : (Mn = i, Nn = "value" in Mn ? Mn.value : Mn.textContent, xr = !0)), v = Jf(r, b), 0 < v.length && (b = new $n(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = br(n), y !== null && (b.data = y)))), (y = hr ? R(e, n) : Sr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new $n("onBeforeInput", "beforeinput", null, n, i), s.push({
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
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = On(e, n), i != null && r.unshift(qf(e, i, a)), i = On(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
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
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = On(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = On(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
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
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || fn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && fn(e, "" + r);
				else return;
				break;
			case "className":
				Zt(e, "class", r);
				break;
			case "tabIndex":
				Zt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Zt(e, n, r);
				break;
			case "style":
				hn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Zt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = yn(r), e.setAttribute(n, r);
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
				r = yn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = bn);
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
				n = yn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
				Q("beforetoggle", e), Q("toggle", e), Xt(e, "popover", r);
				break;
			case "xlinkActuate":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Xt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = _n.get(n) || n, Xt(e, n, r);
			else return;
		}
		I = !0;
	}
	function np(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				hn(e, r, o);
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
				if (typeof r == "string") fn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") fn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Ht.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Dt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					I = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Xt(e, n, r);
				}
				return;
		}
		I = !0;
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
				cn(e, o, c, l, u, s, a, !1);
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
				t = o, n = s, e.multiple = !!r, t == null ? n != null && L(e, !!r, n, !0) : L(e, !!r, t, !1);
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
			default: if (gn(t)) {
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
							m !== f && (I = !0), o = m;
							break;
						case "name":
							m !== f && (I = !0), a = m;
							break;
						case "checked":
							m !== f && (I = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (I = !0), d = m;
							break;
						case "value":
							m !== f && (I = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (I = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && tp(e, t, p, m, r, f);
					}
				}
				sn(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || tp(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (I = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (I = !0), c = o;
						break;
					case "multiple": o !== l && (I = !0), s = o;
					default: o !== l && tp(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? L(e, !!n, n ? [] : "", !1) : L(e, !!n, t, !0)) : L(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: tp(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (I = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (I = !0), m = a;
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
						p !== m && (I = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
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
			default: if (gn(t)) {
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
		return n = up(n).createElement(e), n[Et] = r, n[Dt] = t, rp(n, e, t), zt(n), n;
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
						a[Mt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
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
		var a = Ft(i);
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
					rm(n), Pt(n);
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
			} else if (!e[Mt]) switch (t) {
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
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === bn && (e.onclick = null), Pt(e);
	}
	function vm(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Pt(e);
	}
	var ym = /* @__PURE__ */ new Map(), bm = /* @__PURE__ */ new Set();
	function xm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var Sm = P.d;
	P.d = {
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
		var t = It(e);
		t !== null && t.tag === 5 && t.type === "form" ? Zs(t) : Sm.r(e);
	}
	var Tm = typeof document > "u" ? null : document;
	function Em(e, t, n) {
		var r = Tm;
		if (r && typeof t == "string" && t) {
			var i = on(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), bm.has(i) || (bm.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), rp(t, "link", e), zt(t), r.head.appendChild(t)));
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
			var i = "link[rel=\"preload\"][as=\"" + on(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + on(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + on(n.imageSizes) + "\"]")) : i += "[href=\"" + on(e) + "\"]";
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
				rp(o, "link", e), t === "style" && (o[Nt] = !0, o.onload = o.onerror = function() {
					Bt(o);
				}), zt(o), r.head.appendChild(o);
			}
		}
	}
	function Am(e, t) {
		Sm.m(e, t);
		var n = Tm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + on(r) + "\"][href=\"" + on(e) + "\"]", a = i;
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
				r = n.createElement("link"), rp(r, "link", e), zt(r), n.head.appendChild(r);
			}
		}
	}
	function jm(e, t, n) {
		Sm.S(e, t, n);
		var r = Tm;
		if (r && e) {
			var i = Rt(r).hoistableStyles, a = Fm(e);
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
					}, n), (n = ym.get(a)) && $(e, n);
					var c = o = r.createElement("link");
					zt(c), rp(c, "link", e), c._p = new Promise(function(e, t) {
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
			var r = Rt(n).hoistableScripts, i = zm(e), a = r.get(i);
			a || (a = n.querySelector(Bm(i)), a || (e = E({
				src: e,
				async: !0
			}, t), (t = ym.get(i)) && Um(e, t), a = n.createElement("script"), zt(a), rp(a, "link", e), n.head.appendChild(a)), a = {
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
			var r = Rt(n).hoistableScripts, i = zm(e), a = r.get(i);
			a || (a = n.querySelector(Bm(i)), a || (e = E({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = ym.get(i)) && Um(e, t), a = n.createElement("script"), zt(a), rp(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Pm(e, t, n, r) {
		var a = (a = Ee.current) ? xm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Fm(n.href), t = Rt(a).hoistableStyles, r = t.get(n), r || (r = {
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
					var o = Rt(a).hoistableStyles, s = o.get(e);
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
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = zm(n), t = Rt(a).hoistableScripts, r = t.get(n), r || (r = {
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
		return "href=\"" + on(e) + "\"";
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
			if (!0 !== t[Nt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Nt] = !0, t.onload = t.onerror = Bt.bind(null, t), rp(t, "link", n), zt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function zm(e) {
		return "[src=\"" + on(e) + "\"]";
	}
	function Bm(e) {
		return "script[async]" + e;
	}
	function Vm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + on(n.href) + "\"]");
				if (r) return t.instance = r, zt(r), r;
				var a = E({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), zt(r), rp(r, "style", a), Hm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Fm(n.href);
				var o = e.querySelector(Im(a));
				if (o) return t.state.loading |= 4, t.instance = o, zt(o), o;
				r = Lm(n), (a = ym.get(a)) && $(r, a), o = (e.ownerDocument || e).createElement("link"), zt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), rp(o, "link", r), t.state.loading |= 4, Hm(o, n.precedence, e), t.instance = o;
			case "script": return o = zm(n.src), (a = e.querySelector(Bm(o))) ? (t.instance = a, zt(a), a) : (r = n, (a = ym.get(o)) && (r = E({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), zt(a), rp(a, "link", r), e.head.appendChild(a), t.instance = a);
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
	function $(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Mt] || a[Et] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
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
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, zt(a);
					return;
				}
				a = t.ownerDocument || t, r = Lm(r), (i = ym.get(i)) && $(r, i), a = a.createElement("link"), zt(a);
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
		$$typeof: j,
		Provider: null,
		Consumer: null,
		_currentValue: ve,
		_currentValue2: ve,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ht(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ht(0), this.hiddenUpdates = ht(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = W(3, null, null, t), e.current = a, a.stateNode = e, t = Ta(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, so(a), e;
	}
	function uh(e) {
		return e ? (e = Di, e) : Di;
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
			var t = wi(e, 67108864);
			t !== null && Nd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ad();
			t = xt(t);
			var n = wi(e, t);
			n !== null && Nd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = N.T;
		N.T = null;
		var a = P.p;
		try {
			P.p = 2, yh(e, t, n, r);
		} finally {
			P.p = a, N.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = N.T;
		N.T = null;
		var a = P.p;
		try {
			P.p = 8, yh(e, t, n, r);
		} finally {
			P.p = a, N.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = It(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = lt(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - nt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(Zu & 6) && (hd = We() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = wi(a, 2), s !== null && Nd(s, a, 2), Rd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Sn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Ft(e), e !== null) {
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
			case "message": switch (Ge()) {
				case Ke: return 2;
				case qe: return 8;
				case Je:
				case Ye: return 32;
				case Xe: return 268435456;
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
		}, t !== null && (t = It(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
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
		var t = Ft(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, wt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, wt(e.priority, function() {
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
				xn = r, n.target.dispatchEvent(r), xn = null;
			} else return t = It(n), t !== null && mh(t), e.blockedOn = n, !1;
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
				var a = It(n);
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
			var i = n[r], a = n[r + 1], o = i[Dt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Dt] || null) s = o.formAction;
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
			dh(e.current, 2, null, e, null, null), Rd(), t[Ot] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Ct();
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
	P.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: N,
		reconcilerVersion: "19.3.1"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			$e = Jh.inject(qh), et = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = vc, s = yc, c = bc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[Ot] = t.current, Wf(e), new Wh(t);
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
function ne(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function re(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function A(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function j(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== ie(o, t.options)) return !1;
		} else if (!oe(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function M(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (ae(t.options.mutationKey) !== ae(a)) return !1;
		} else if (!oe(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function ie(e, t) {
	return (t?.queryKeyHashFn || ae)(e);
}
function ae(e) {
	return JSON.stringify(e, (e, t) => de(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function oe(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (Array.isArray(e) && Array.isArray(t)) {
			if (t.length > e.length) return !1;
			for (let n = 0; n < t.length; n++) if (!oe(e[n], t[n])) return !1;
			return !0;
		}
		let n = Object.keys(t);
		for (let r of n) if (!oe(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var se = Object.prototype.hasOwnProperty;
function ce(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = ue(e) && ue(t);
	if (!r && !(de(e) && de(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : se.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = ce(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function le(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function ue(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function de(e) {
	if (!fe(e)) return !1;
	let t = Object.getPrototypeOf(e), n = t?.constructor;
	if (n === void 0) return !0;
	if (typeof n != "function") return !1;
	let r = n.prototype;
	return !(!fe(r) || !r.hasOwnProperty("isPrototypeOf") || t !== Object.prototype);
}
function fe(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function pe(e) {
	return new Promise((t) => {
		E.setTimeout(t, e);
	});
}
function me(e, t, n) {
	return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : ce(e, t);
}
function he(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function ge(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var _e = Symbol();
function N(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === _e ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function P(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function ve(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r || (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 })), i)
	}), e;
}
// node_modules/@tanstack/query-core/build/modern/environmentManager.js
var ye = () => te, be = () => ye(), xe = class {
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
}, Se = new class extends xe {
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
}(), Ce = D;
function we() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = Ce, a = (r) => {
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
var Te = we(), Ee = new class extends xe {
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
function De(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function Oe(e) {
	return (e ?? "online") !== "online" || Ee.isOnline();
}
var ke = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function Ae(e) {
	let t = !1, n = 0, r, i = "pending", a, o, s = new Promise((e, t) => {
		a = e, o = t;
	});
	s.catch(O);
	let c = () => i !== "pending", l = (t) => {
		if (!c()) {
			let n = new ke(t);
			h(n), e.onCancel?.(n);
		}
	}, u = () => {
		t = !0;
	}, d = () => {
		t = !1;
	}, f = () => Se.isFocused() && (e.networkMode === "always" || Ee.isOnline()) && e.canRun(), p = () => Oe(e.networkMode) && e.canRun(), m = (e) => {
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
			let i = e.retry ?? (be() ? 0 : 3), a = e.retryDelay ?? De, o = typeof a == "function" ? a(n, r) : a, s = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			t || !s ? h(r) : (n++, e.onFail?.(n, r), pe(o).then(() => f() ? void 0 : g(f)).then(() => {
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
var je = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), ne(this.gcTime) && (this.#e = E.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (be() ? Infinity : 3e5));
	}
	clearGcTimeout() {
		this.#e !== void 0 && (E.clearTimeout(this.#e), this.#e = void 0);
	}
};
// node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function Me(e) {
	return { onFetch: (t, n) => {
		let r = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], o = t.state.data?.pageParams || [], s = {
			pages: [],
			pageParams: []
		}, c = 0, l = async () => {
			let n = !1, l = (e) => {
				ve(e, () => t.signal, () => n = !0);
			}, u = N(t.options, t.fetchOptions), d = async (e, r, i) => {
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
				})(), o = await u(a), { maxPages: s } = t.options, c = i ? ge : he;
				return {
					pages: c(e.pages, o, s),
					pageParams: c(e.pageParams, r, s)
				};
			};
			if (i && a.length) {
				let e = i === "backward", t = e ? Pe : Ne, n = {
					pages: a,
					pageParams: o
				};
				s = await d(n, t(r, n), e);
			} else {
				let t = e ?? a.length;
				do {
					let e = c === 0 ? o[0] === void 0 ? r.initialPageParam : o[0] : Ne(r, s);
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
function Ne(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Pe(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
// node_modules/@tanstack/query-core/build/modern/query.js
var Fe = class extends je {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e) {
		super(), this.#s = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#r = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = Re(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
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
			let e = Re(this.options);
			e.data !== void 0 && (this.setState(Le(e.data, e.dataUpdatedAt)), this.#t = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
	}
	setData(e, t) {
		let n = me(this.state.data, e, this.options);
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
		return this.observers.some((e) => A(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === _e || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => A(e.options.staleTime, this) === "static");
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !re(this.state.dataUpdatedAt, e);
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
			let e = N(this.options, t), n = (() => {
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
		(this.#e === "infinite" ? Me(this.options.pages) : this.options.behavior)?.onFetch(a, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#c({
			type: "fetch",
			meta: a.fetchOptions?.meta
		});
		let o = this.#a = Ae({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof ke && e.revert && this.setState({
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
			if (e instanceof ke) {
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
					...Ie(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...Le(e.data, e.dataUpdatedAt),
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
		this.state = t(this.state), Te.batch(() => {
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
function Ie(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Oe(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function Le(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function Re(e) {
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
var ze = class extends xe {
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
		this.listeners.size === 1 && (this.#t.addObserver(this), Ve(this.#t, this.options) ? this.#m() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return He(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return He(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof A(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !le(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && Ue(this.#t, n, this.options, t) && this.#m(), this.updateResult(), r && (this.#t !== n || A(this.options.enabled, this.#t) !== A(t.enabled, this.#t) || A(this.options.staleTime, this.#t) !== A(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || A(this.options.enabled, this.#t) !== A(t.enabled, this.#t) || i !== this.#f) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return le(this.getCurrentResult(), n) || (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
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
		return !be() && A(this.options.enabled, this.#t) !== !1 && ne(e);
	}
	#g() {
		this.#b();
		let e = A(this.options.staleTime, this.#t);
		if (this.#r.isStale || !this.#h(e)) return;
		let t = re(this.#r.dataUpdatedAt, e) + 1;
		this.#u = E.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return A(this.options.refetchInterval, this.#t) ?? !1;
	}
	#v(e) {
		this.#x(), this.#f = e, this.#f !== 0 && this.#h(this.#f) && (this.#d = E.setInterval(() => {
			(this.options.refetchIntervalInBackground || Se.isFocused()) && this.#m();
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
			let i = this.hasListeners(), a = !i && Ve(e, t), o = i && Ue(e, n, t, r);
			(a || o) && (l = {
				...l,
				...Ie(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: p, status: m } = l;
		d = l.data;
		let h = !1;
		if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#l?.state.data, this.#l) : t.placeholderData, e !== void 0 && (m = "success", d = me(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !h) {
			if (i && d === a?.data && t.select === this.#s) d = this.#c;
			else try {
				this.#s = t.select, d = t.select(d), d = me(i?.data, d, t), this.#c = d, this.#o = null;
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
			isStale: We(e, t),
			refetch: this.refetch,
			isEnabled: A(t.enabled, e) !== !1
		};
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		if (this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#l = this.#t), le(t, e)) return;
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
		Te.batch(() => {
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
function Be(e, t) {
	return A(t.enabled, e) !== !1 && e.state.data === void 0 && (e.state.status !== "error" || A(t.retryOnMount, e) !== !1);
}
function Ve(e, t) {
	return Be(e, t) || e.state.data !== void 0 && He(e, t, t.refetchOnMount);
}
function He(e, t, n) {
	if (A(t.enabled, e) !== !1 && A(t.staleTime, e) !== "static") {
		let r = A(n, e);
		return r === "always" || r !== !1 && We(e, t);
	}
	return !1;
}
function Ue(e, t, n, r) {
	return (e !== t || A(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && We(e, n);
}
function We(e, t) {
	return A(t.enabled, e) !== !1 && e.isStaleByTime(A(t.staleTime, e));
}
// node_modules/@tanstack/query-core/build/modern/mutation.js
var Ge = class extends je {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || Ke(), this.setOptions(e.options), this.scheduleGc();
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
		}, r = this.#r = Ae({
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
		this.state = t(this.state), Te.batch(() => {
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
function Ke() {
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
var qe = class extends xe {
	#e;
	#t;
	#n;
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	build(e, t, n) {
		let r = new Ge({
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
		let t = Je(e);
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
			let t = Je(e);
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
		let t = Je(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		let t = Je(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		Te.batch(() => {
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
		return this.getAll().find((e) => M(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => M(e, t));
	}
	notify(e) {
		Te.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return Te.batch(() => Promise.all(e.map((e) => e.continue().catch(O))));
	}
};
function Je(e) {
	return e.options.scope?.id;
}
// node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var Ye = class extends xe {
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
		this.options = this.#e.defaultMutationOptions(e), le(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && ae(t.mutationKey) !== ae(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
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
		let e = this.#n?.state ?? Ke();
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
		Te.batch(() => {
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
}, Xe = class extends xe {
	#e;
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? ie(r, t), a = this.get(i);
		return a || (a = new Fe({
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
		Te.batch(() => {
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
		return this.getAll().find((e) => j(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => j(e, t)) : t;
	}
	notify(e) {
		Te.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		Te.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		Te.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, Ze = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new Xe(), this.#t = e.mutationCache || new qe(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = Se.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = Ee.subscribe(async (e) => {
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
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(A(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
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
		return Te.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		Te.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return Te.batch(() => {
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
		}, r = Te.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(O).catch(O);
	}
	invalidateQueries(e, t = {}) {
		return Te.batch(() => (this.#e.findAll(e).forEach((e) => {
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
		}, r = Te.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(O)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(O);
	}
	async query(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t), r = n.isStaleByTime(A(t.staleTime, n)) ? await n.fetch(t) : n.state.data, i = t.select;
		return i ? i(r) : r;
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(A(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
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
		return Ee.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
		this.#r.set(ae(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			oe(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(ae(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			oe(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
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
		return t.queryHash ||= ie(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === _e && (t.enabled = !1), t;
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
}, Qe = x.createContext(!1), $e = () => x.useContext(Qe);
Qe.Provider;
// node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function et() {
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
var tt = x.createContext(et()), nt = () => x.useContext(tt), rt = (e, t, n) => {
	let r = n?.state.status === "error" && typeof e.throwOnError == "function" ? P(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || r) && (t.isReset() || (e.retryOnMount = !1));
}, it = (e) => {
	x.useEffect(() => {
		e.clearReset();
	}, [e]);
}, at = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || P(n, [e.error, r])), ot = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, st = (e, t) => e?.suspense && t.isPending, ct = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
// node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function lt(e, t, n) {
	let r = $e(), i = nt(), a = w(n), o = a.defaultQueryOptions(e), s = a.getQueryCache().get(o.queryHash), c = e.subscribed !== !1;
	o._optimisticResults = r ? "isRestoring" : c ? "optimistic" : void 0, ot(o), rt(o, i, s), it(i);
	let [l] = x.useState(() => new t(a, o)), u = l.getOptimisticResult(o), d = !r && c;
	if (x.useSyncExternalStore(x.useCallback((e) => {
		let t = d ? l.subscribe(Te.batchCalls(e)) : O;
		return l.updateResult(), t;
	}, [l, d]), () => l.getCurrentResult(), () => l.getCurrentResult()), x.useEffect(() => {
		l.setOptions(o);
	}, [o, l]), st(o, u)) throw ct(o, l, i);
	if (at({
		result: u,
		errorResetBoundary: i,
		throwOnError: o.throwOnError,
		query: s,
		suspense: o.suspense
	})) throw u.error;
	return o.notifyOnChangeProps ? u : l.trackResult(u);
}
// node_modules/@tanstack/react-query/build/modern/useQuery.js
function ut(e, t) {
	return lt(e, ze, t);
}
// node_modules/@tanstack/react-query/build/modern/useMutation.js
function dt(e, t) {
	let n = w(t), [r] = x.useState(() => new Ye(n, e));
	x.useEffect(() => {
		r.setOptions(e);
	}, [r, e]);
	let i = x.useSyncExternalStore(x.useCallback((e) => r.subscribe(Te.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), a = x.useCallback((...e) => {
		r.mutate(e[0], e[1]).catch(O);
	}, [r]);
	if (i.error && P(r.options.throwOnError, [i.error])) throw i.error;
	return {
		...i,
		mutate: a,
		mutateAsync: i.mutate
	};
}
// node_modules/sonner/dist/index.mjs
var ft = v(), pt = /* @__PURE__ */ u(g(), 1);
function mt(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var ht = (e) => {
	switch (e) {
		case "success": return vt;
		case "info": return bt;
		case "warning": return yt;
		case "error": return xt;
		default: return null;
	}
}, gt = Array(12).fill(0), _t = ({ visible: e, className: t }) => /*#__PURE__*/ x.createElement("div", {
	className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
	"data-visible": e
}, /*#__PURE__*/ x.createElement("div", { className: "sonner-spinner" }, gt.map((e, t) => /*#__PURE__*/ x.createElement("div", {
	className: "sonner-loading-bar",
	key: `spinner-bar-${t}`
})))), vt = /*#__PURE__*/ x.createElement("svg", {
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
})), yt = /*#__PURE__*/ x.createElement("svg", {
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
})), bt = /*#__PURE__*/ x.createElement("svg", {
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
})), xt = /*#__PURE__*/ x.createElement("svg", {
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
})), St = /*#__PURE__*/ x.createElement("svg", {
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
})), Ct = () => {
	let [e, t] = x.useState(document.hidden);
	return x.useEffect(() => {
		let e = () => {
			t(document.hidden);
		};
		return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e);
	}, []), e;
}, wt = 1, Tt = 100, Et = (e) => typeof e?.id == "number" || e?.id?.length > 0 ? e.id : wt++, Dt = new class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), this.getActiveToasts().forEach((t) => e(t)), () => {
			let t = this.subscribers.indexOf(e);
			this.subscribers.splice(t, 1);
		}), this.publish = (e) => {
			this.subscribers.forEach((t) => t(e));
		}, this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e], this.trimHistory();
		}, this.trimHistory = () => {
			let e = this.toasts.length - Tt;
			e <= 0 || (this.toasts = this.toasts.filter((t) => e > 0 && this.dismissedToasts.has(t.id) ? (this.dismissedToasts.delete(t.id), e--, !1) : !0));
		}, this.create = (e) => {
			let { message: t, ...n } = e, r = Et(e), i = this.pendingDismissals.get(r);
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
				else if (kt(e) && !e.ok) {
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
			let n = Et(t);
			return this.create({
				...t,
				jsx: e(n),
				id: n,
				type: void 0
			}), n;
		}, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set(), this.pendingDismissals = /* @__PURE__ */ new Map();
	}
}(), Ot = (e, t) => Dt.message(e, t), kt = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", F = Object.assign(Ot, {
	success: Dt.success,
	info: Dt.info,
	warning: Dt.warning,
	error: Dt.error,
	custom: Dt.custom,
	message: Dt.message,
	promise: Dt.promise,
	dismiss: Dt.dismiss,
	loading: Dt.loading
}, {
	getHistory: () => Dt.toasts,
	getToasts: () => Dt.getActiveToasts()
});
mt("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function At(e) {
	return e.label !== void 0;
}
var jt = 3, Mt = "24px", Nt = "16px", Pt = 4e3, Ft = 356, It = 14, Lt = 45, Rt = 200;
function zt(...e) {
	return e.filter(Boolean).join(" ");
}
function Bt(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
var Vt = (e) => {
	let { invert: t, toast: n, unstyled: r, interacting: i, setHeights: a, visibleToasts: o, heights: s, index: c, toasts: l, expanded: u, removeToast: d, defaultRichColors: f, closeButton: p, style: m, cancelButtonStyle: h, actionButtonStyle: g, className: _ = "", descriptionClassName: v = "", duration: y, position: b, gap: S, expandByDefault: C, classNames: w, icons: T, closeButtonAriaLabel: ee = "Close toast" } = e, [E, D] = x.useState(null), [te, O] = x.useState(null), [k, ne] = x.useState(!1), [re, A] = x.useState(!1), [j, M] = x.useState(!1), [ie, ae] = x.useState(!1), [oe, se] = x.useState(!1), [ce, le] = x.useState(0), [ue, de] = x.useState(0), fe = x.useRef(n.duration || y || Pt), pe = x.useRef(null), me = x.useRef(null), he = c === 0, ge = c + 1 <= o, _e = n.type, N = _e ?? "default", P = n.dismissible !== !1, ve = n.className || "", ye = n.descriptionClassName || "", be = x.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]), xe = x.useMemo(() => n.closeButton ?? p, [n.closeButton, p]), Se = x.useMemo(() => n.duration || y || Pt, [n.duration, y]), Ce = x.useRef(0), we = x.useRef(0), Te = x.useRef(0), Ee = x.useRef(null), [De, Oe] = b.split("-"), ke = x.useMemo(() => s.reduce((e, t, n) => n >= be ? e : e + t.height, 0), [s, be]), Ae = Ct(), je = x.useMemo(() => e.swipeDirections ?? Bt(b), [e.swipeDirections, b]), Me = n.invert || t, Ne = _e === "loading";
	we.current = x.useMemo(() => be * S + ke, [be, ke]), x.useEffect(() => {
		fe.current = Se;
	}, [Se]), x.useEffect(() => {
		ne(!0);
	}, []), x.useEffect(() => {
		let e = me.current;
		if (e) {
			let t = e.getBoundingClientRect().height;
			return de(t), a((e) => [{
				toastId: n.id,
				height: t,
				position: n.position
			}, ...e]), () => a((e) => e.filter((e) => e.toastId !== n.id));
		}
	}, [a, n.id]), x.useLayoutEffect(() => {
		if (!k) return;
		let e = me.current, t = e.style.height;
		e.style.height = "auto";
		let r = e.getBoundingClientRect().height;
		e.style.height = t, de(r), a((e) => e.find((e) => e.toastId === n.id) ? e.map((e) => e.toastId === n.id ? {
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
	let Pe = x.useCallback(() => {
		A(!0), le(we.current), a((e) => e.filter((e) => e.toastId !== n.id)), setTimeout(() => {
			d(n);
		}, Rt);
	}, [
		n,
		d,
		a,
		we
	]);
	x.useEffect(() => {
		if (n.promise && _e === "loading" || n.duration === Infinity || n.type === "loading") return;
		let e;
		return u || i || Ae ? (() => {
			if (Te.current < Ce.current) {
				let e = (/* @__PURE__ */ new Date()).getTime() - Ce.current;
				fe.current -= e;
			}
			Te.current = (/* @__PURE__ */ new Date()).getTime();
		})() : fe.current !== Infinity && (Ce.current = (/* @__PURE__ */ new Date()).getTime(), e = setTimeout(() => {
			n.onAutoClose == null || n.onAutoClose.call(n, n), Pe();
		}, fe.current)), () => clearTimeout(e);
	}, [
		u,
		i,
		n,
		_e,
		Ae,
		Pe
	]), x.useEffect(() => {
		n.delete && (Pe(), n.onDismiss == null || n.onDismiss.call(n, n));
	}, [Pe, n.delete]);
	function Fe() {
		return T?.loading ? /*#__PURE__*/ x.createElement("div", {
			className: zt(w?.loader, n?.classNames?.loader, "sonner-loader"),
			"data-visible": _e === "loading"
		}, T.loading) : /*#__PURE__*/ x.createElement(_t, {
			className: zt(w?.loader, n?.classNames?.loader),
			visible: _e === "loading"
		});
	}
	let Ie = n.icon || T?.[_e] || ht(_e);
	return /*#__PURE__*/ x.createElement("li", {
		tabIndex: 0,
		ref: me,
		className: zt(_, ve, w?.toast, n?.classNames?.toast, w?.[N], n?.classNames?.[N]),
		"data-sonner-toast": "",
		"data-rich-colors": n.richColors ?? f,
		"data-styled": !(n.jsx || n.unstyled || r),
		"data-mounted": k,
		"data-promise": !!n.promise,
		"data-swiped": oe,
		"data-removed": re,
		"data-visible": ge,
		"data-y-position": De,
		"data-x-position": Oe,
		"data-index": c,
		"data-front": he,
		"data-swiping": j,
		"data-dismissible": P,
		"data-type": _e,
		"data-invert": Me,
		"data-swipe-out": ie,
		"data-swipe-direction": te,
		"data-expanded": !!(u || C && k),
		"data-testid": n.testId,
		style: {
			"--index": c,
			"--toasts-before": c,
			"--z-index": l.length - c,
			"--offset": `${re ? ce : we.current}px`,
			"--initial-height": C ? "auto" : `${ue}px`,
			...m,
			...n.style
		},
		onDragEnd: () => {
			M(!1), D(null), Ee.current = null;
		},
		onPointerDown: (e) => {
			e.button !== 2 && !Ne && P && (pe.current = /* @__PURE__ */ new Date(), le(we.current), e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (M(!0), Ee.current = {
				x: e.clientX,
				y: e.clientY
			}));
		},
		onPointerUp: () => {
			if (ie || !P) return;
			Ee.current = null;
			let e = Number(me.current?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(me.current?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), r = (/* @__PURE__ */ new Date()).getTime() - pe.current?.getTime(), i = E === "x" ? e : t, a = Math.abs(i) / r;
			if ((E === "x" ? je.includes(e > 0 ? "right" : "left") : je.includes(t > 0 ? "bottom" : "top")) && (Math.abs(i) >= Lt || a > .11)) le(we.current), n.onDismiss == null || n.onDismiss.call(n, n), O(E === "x" ? e > 0 ? "right" : "left" : t > 0 ? "down" : "up"), Pe(), ae(!0);
			else {
				var o, s;
				(o = me.current) == null || o.style.setProperty("--swipe-amount-x", "0px"), (s = me.current) == null || s.style.setProperty("--swipe-amount-y", "0px"), se(!1), M(!1), D(null);
			}
		},
		onPointerMove: (e) => {
			var t, n;
			if (!Ee.current || !P || window.getSelection()?.toString().length > 0) return;
			let r = e.clientY - Ee.current.y, i = e.clientX - Ee.current.x;
			!E && (Math.abs(i) > 1 || Math.abs(r) > 1) && D(Math.abs(i) > Math.abs(r) ? "x" : "y");
			let a = {
				x: 0,
				y: 0
			}, o = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (E === "y") {
				if (je.includes("top") || je.includes("bottom")) {
					if (je.includes("top") && r < 0 || je.includes("bottom") && r > 0) a.y = r;
					else {
						let e = r * o(r);
						a.y = Math.abs(e) < Math.abs(r) ? e : r;
					}
				}
			} else if (E === "x" && (je.includes("left") || je.includes("right"))) {
				if (je.includes("left") && i < 0 || je.includes("right") && i > 0) a.x = i;
				else {
					let e = i * o(i);
					a.x = Math.abs(e) < Math.abs(i) ? e : i;
				}
			}
			(Math.abs(a.x) > 0 || Math.abs(a.y) > 0) && se(!0), (t = me.current) == null || t.style.setProperty("--swipe-amount-x", `${a.x}px`), (n = me.current) == null || n.style.setProperty("--swipe-amount-y", `${a.y}px`);
		}
	}, xe && !n.jsx && _e !== "loading" ? /*#__PURE__*/ x.createElement("button", {
		"aria-label": ee,
		"data-disabled": Ne,
		"data-close-button": !0,
		onClick: Ne || !P ? () => {} : () => {
			Pe(), n.onDismiss == null || n.onDismiss.call(n, n);
		},
		className: zt(w?.closeButton, n?.classNames?.closeButton)
	}, T?.close ?? St) : null, (_e || n.icon || n.promise) && n.icon !== null && (T?.[_e] !== null || n.icon) ? /*#__PURE__*/ x.createElement("div", {
		"data-icon": "",
		className: zt(w?.icon, n?.classNames?.icon)
	}, _e === "loading" ? n.icon || Fe() : n.promise ? Fe() : null, _e === "loading" ? null : Ie) : null, /*#__PURE__*/ x.createElement("div", {
		"data-content": "",
		className: zt(w?.content, n?.classNames?.content)
	}, /*#__PURE__*/ x.createElement("div", {
		"data-title": "",
		className: zt(w?.title, n?.classNames?.title)
	}, n.jsx ? n.jsx : typeof n.title == "function" ? n.title() : n.title), n.description ? /*#__PURE__*/ x.createElement("div", {
		"data-description": "",
		className: zt(v, ye, w?.description, n?.classNames?.description)
	}, typeof n.description == "function" ? n.description() : n.description) : null), /*#__PURE__*/ x.isValidElement(n.cancel) ? n.cancel : n.cancel && At(n.cancel) ? /*#__PURE__*/ x.createElement("button", {
		"data-button": !0,
		"data-cancel": !0,
		style: n.cancelButtonStyle || h,
		onClick: (e) => {
			At(n.cancel) && P && (n.cancel.onClick == null || n.cancel.onClick.call(n.cancel, e), Pe());
		},
		className: zt(w?.cancelButton, n?.classNames?.cancelButton)
	}, n.cancel.label) : null, /*#__PURE__*/ x.isValidElement(n.action) ? n.action : n.action && At(n.action) ? /*#__PURE__*/ x.createElement("button", {
		"data-button": !0,
		"data-action": !0,
		style: n.actionButtonStyle || g,
		onClick: (e) => {
			At(n.action) && (n.action.onClick == null || n.action.onClick.call(n.action, e), !e.defaultPrevented && Pe());
		},
		className: zt(w?.actionButton, n?.classNames?.actionButton)
	}, n.action.label) : null);
};
function Ht() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Ut(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? Nt : Mt;
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
var Wt = /*#__PURE__*/ x.forwardRef(function(e, t) {
	let { id: n, invert: r, position: i = "bottom-right", hotkey: a = ["altKey", "KeyT"], expand: o, closeButton: s, className: c, offset: l, mobileOffset: u, theme: d = "light", richColors: f, duration: p, style: m, visibleToasts: h = jt, toastOptions: g, dir: _ = Ht(), gap: v = It, icons: y, customAriaLabel: b, containerAriaLabel: S = "Notifications" } = e, [C, w] = x.useState([]), T = x.useMemo(() => n ? C.filter((e) => e.toasterId === n) : C.filter((e) => !e.toasterId), [C, n]), ee = x.useMemo(() => Array.from(new Set([i].concat(T.filter((e) => e.position).map((e) => e.position)))), [T, i]), [E, D] = x.useState([]), [te, O] = x.useState(!1), [k, ne] = x.useState(!1), [re, A] = x.useState(d === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : d), j = x.useRef(null), M = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), ie = x.useRef(null), ae = x.useRef(!1), oe = x.useCallback((e) => {
		w((t) => (t.find((t) => t.id === e.id)?.delete || Dt.dismiss(e.id), t.filter(({ id: t }) => t !== e.id)));
	}, []);
	return x.useEffect(() => Dt.subscribe((e) => {
		e.dismiss ? requestAnimationFrame(() => {
			w((t) => t.map((t) => t.id === e.id ? {
				...t,
				delete: !0
			} : t));
		}) : setTimeout(() => {
			pt.flushSync(() => {
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
			A(d);
			return;
		}
		if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? A("dark") : A("light")), typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			e.addEventListener("change", ({ matches: e }) => {
				A(e ? "dark" : "light");
			});
		} catch {
			e.addListener(({ matches: e }) => {
				try {
					A(e ? "dark" : "light");
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
				O(!0), (t = j.current) == null || t.focus();
			}
			e.code === "Escape" && (document.activeElement === j.current || j.current?.contains(document.activeElement)) && O(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [a]), x.useEffect(() => {
		if (j.current) return () => {
			ie.current && (ie.current.focus({ preventScroll: !0 }), ie.current = null, ae.current = !1);
		};
	}, [j.current]), /*#__PURE__*/ x.createElement("section", {
		ref: t,
		"aria-label": b ?? `${S} ${M}`,
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
			dir: _ === "auto" ? Ht() : _,
			tabIndex: -1,
			ref: j,
			className: c,
			"data-sonner-toaster": !0,
			"data-sonner-theme": re,
			"data-y-position": i,
			"data-x-position": a,
			style: {
				"--front-toast-height": `${E[0]?.height || 0}px`,
				"--width": `${Ft}px`,
				"--gap": `${v}px`,
				...m,
				...Ut(l, u)
			},
			onBlur: (e) => {
				ae.current && !e.currentTarget.contains(e.relatedTarget) && (ae.current = !1, ie.current &&= (ie.current.focus({ preventScroll: !0 }), null));
			},
			onFocus: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || ae.current || (ae.current = !0, ie.current = e.relatedTarget);
			},
			onMouseEnter: () => O(!0),
			onMouseMove: () => O(!0),
			onMouseLeave: () => {
				k || O(!1);
			},
			onDragEnd: () => O(!1),
			onPointerDown: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || ne(!0);
			},
			onPointerUp: () => ne(!1)
		}, T.filter((e) => !e.position && n === 0 || e.position === t).map((n, i) => /*#__PURE__*/ x.createElement(Vt, {
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
			removeToast: oe,
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
function Gt(e) {
	qt = e;
}
async function Kt(e, t = {}) {
	if (!qt?.user?.is_admin) throw Error("Home Assistant administrator access is required");
	try {
		return await qt.callWS({
			type: "px_account_manager/command",
			action: e,
			args: t
		});
	} catch (e) {
		throw Error(e?.message || "Home Assistant connection failed");
	}
}
var qt, Jt, I, Yt = o((() => {
	Jt = class {
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
					let e = await Kt("list", { table: this.table });
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
					data: await Kt(this.operation === "insert" ? "create_member" : this.operation === "update" ? "update_member" : "delete_member", this.operation === "insert" ? this.values : {
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
	}, I = {
		from: (e) => new Jt(e),
		auth: { getUser: async () => ({ data: { user: qt.user } }) }
	};
}));
// src/lib/plex.functions.ts
Yt();
var Xt = (e) => (t) => Kt("plex", {
	operation: e,
	...t.data
}), Zt = Xt("test"), Qt = Xt("invite"), $t = Xt("remove"), en = Xt("sync"), tn = Xt("convert"), nn = Xt("revoke");
// src/lib/outlook-signup.ts
function rn(e) {
	let t = e.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
	return `https://signup.live.com/signup?${new URLSearchParams({
		lic: "1",
		username: t
	}).toString()}`;
}
function an(e) {
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
var on = Object.defineProperty, sn = (e, t) => on(e, "name", {
	value: t,
	configurable: !0
});
function cn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
sn(cn, "setRef");
function ln(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = cn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : cn(e[t], null);
			}
		};
	};
}
sn(ln, "composeRefs");
function L(...e) {
	return x.useCallback(ln(...e), e);
}
sn(L, "useComposedRefs");
// node_modules/@radix-ui/react-slot/dist/index.mjs
var un = Object.defineProperty, dn = (e, t) => un(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function fn(e) {
	let t = x.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		r = Cn(r), x.Children.forEach(r, (e) => {
			if (yn(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				for (; xn(n) && typeof Dn == "function";) n = Dn(n._payload);
				a = gn(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = x.cloneElement(a, void 0, s) : !o && x.Children.count(r) === 1 && x.isValidElement(r) && (a = r);
		let c = a ? vn(a) : void 0, l = L(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? En(e) : Tn(e));
			return r;
		}
		let u = _n(i, a.props ?? {});
		return a.type !== x.Fragment && (u.ref = n ? l : c), x.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
dn(fn, "createSlot");
var pn = /* @__PURE__ */ fn("Slot"), mn = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function hn(e) {
	let t = /* @__PURE__ */ dn((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = mn, t;
}
dn(hn, "createSlottable");
var gn = /* @__PURE__ */ dn((e, t) => "child" in e.props ? x.isValidElement(t) ? x.cloneElement(t, void 0, e.props.children(t.props.children)) : null : x.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function _n(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = wn(a, i));
	}
	return {
		...e,
		...n
	};
}
dn(_n, "mergeProps");
function vn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
dn(vn, "getElementRef");
function yn(e) {
	return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mn;
}
dn(yn, "isSlottable");
var bn = Symbol.for("react.lazy");
function xn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === bn && "_payload" in e && Sn(e._payload);
}
dn(xn, "isLazyComponent");
function Sn(e) {
	return typeof e == "object" && !!e && "then" in e;
}
dn(Sn, "isPromiseLike");
function Cn(e) {
	let t = e;
	for (; xn(t) && typeof Dn == "function";) t = Dn(t._payload);
	return t;
}
dn(Cn, "useUnwrappedLazy");
function wn(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
dn(wn, "concatAriaDescribedby");
var Tn = /* @__PURE__ */ dn((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), En = /* @__PURE__ */ dn((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Dn = x.use;
// node_modules/clsx/dist/clsx.mjs
function On(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = On(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function kn() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = On(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/class-variance-authority/dist/index.mjs
var An = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, jn = kn, Mn = (e, t) => (n) => {
	if (t?.variants == null) return jn(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = An(t) || An(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return jn(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, Nn = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Pn = (e, t) => ({
	classGroupId: e,
	validator: t
}), Fn = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), In = "-", Ln = [], Rn = "arbitrary..", zn = (e) => {
	let t = Hn(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Vn(e);
			let n = e.split(In);
			return Bn(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Nn(i, t) : t : i || Ln;
			}
			return n[e] || Ln;
		}
	};
}, Bn = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Bn(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(In) : e.slice(t).join(In), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Vn = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Rn + r : void 0;
})(), Hn = (e) => {
	let { theme: t, classGroups: n } = e;
	return Un(n, t);
}, Un = (e, t) => {
	let n = Fn();
	for (let r in e) {
		let i = e[r];
		Wn(i, n, r, t);
	}
	return n;
}, Wn = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Gn(i, t, n, r);
	}
}, Gn = (e, t, n, r) => {
	typeof e == "string" ? Kn(e, t, n) : typeof e == "function" ? qn(e, t, n, r) : Jn(e, t, n, r);
}, Kn = (e, t, n) => {
	let r = e === "" ? t : Yn(t, e);
	r.classGroupId = n;
}, qn = (e, t, n, r) => {
	Xn(e) ? Wn(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(Pn(n, e)));
}, Jn = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Wn(o, Yn(t, a), n, r);
	}
}, Yn = (e, t) => {
	let n = e, r = t.split(In), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Fn(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Xn = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Zn = (e) => {
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
}, Qn = "!", $n = ":", er = [], tr = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), nr = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === $n) {
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
		s.endsWith(Qn) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Qn) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return tr(t, l, c, u);
	};
	if (t) {
		let e = t + $n, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : tr(er, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, rr = (e) => {
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
}, ir = (e) => ({
	cache: Zn(e.cacheSize),
	parseClassName: nr(e),
	sortModifiers: rr(e),
	postfixLookupClassGroupIds: ar(e),
	...zn(e)
}), ar = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, or = /\s+/, sr = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(or), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Qn : _, y = v + g;
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
}, cr = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = lr(n)) && (i && (i += " "), i += r);
	return i;
}, lr = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = lr(e[r])) && (n && (n += " "), n += t);
	return n;
}, ur = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = ir(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = sr(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(cr(...e));
}, dr = [], fr = (e) => {
	let t = (t) => t[e] || dr;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, pr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, hr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, gr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _r = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, yr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, br = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xr = (e) => hr.test(e), R = (e) => !!e && !Number.isNaN(Number(e)), Sr = (e) => !!e && Number.isInteger(Number(e)), Cr = (e) => e.endsWith("%") && R(e.slice(0, -1)), wr = (e) => gr.test(e), Tr = () => !0, Er = (e) => _r.test(e) && !vr.test(e), Dr = () => !1, Or = (e) => yr.test(e), kr = (e) => br.test(e), Ar = (e) => !z(e) && !B(e), jr = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Mr = (e) => qr(e, Zr, Dr), z = (e) => pr.test(e), Nr = (e) => qr(e, Qr, Er), Pr = (e) => qr(e, $r, R), Fr = (e) => qr(e, ti, Tr), Ir = (e) => qr(e, ei, Dr), Lr = (e) => qr(e, Yr, Dr), Rr = (e) => qr(e, Xr, kr), zr = (e) => qr(e, ni, Or), B = (e) => mr.test(e), Br = (e) => Jr(e, Qr), Vr = (e) => Jr(e, ei), Hr = (e) => Jr(e, Yr), Ur = (e) => Jr(e, Zr), Wr = (e) => Jr(e, Xr), Gr = (e) => Jr(e, ni, !0), Kr = (e) => Jr(e, ti, !0), qr = (e, t, n) => {
	let r = pr.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Jr = (e, t, n = !1) => {
	let r = mr.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Yr = (e) => e === "position" || e === "percentage", Xr = (e) => e === "image" || e === "url", Zr = (e) => e === "length" || e === "size" || e === "bg-size", Qr = (e) => e === "length", $r = (e) => e === "number", ei = (e) => e === "family-name", ti = (e) => e === "number" || e === "weight", ni = (e) => e === "shadow", ri = /*#__PURE__*/ ur(() => {
	let e = fr("color"), t = fr("font"), n = fr("text"), r = fr("font-weight"), i = fr("tracking"), a = fr("leading"), o = fr("breakpoint"), s = fr("container"), c = fr("spacing"), l = fr("radius"), u = fr("shadow"), d = fr("inset-shadow"), f = fr("text-shadow"), p = fr("drop-shadow"), m = fr("blur"), h = fr("perspective"), g = fr("aspect"), _ = fr("ease"), v = fr("animate"), y = () => [
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
		B,
		z
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
		B,
		z,
		c
	], T = () => [
		xr,
		"full",
		"auto",
		...w()
	], ee = () => [
		Sr,
		"none",
		"subgrid",
		B,
		z
	], E = () => [
		"auto",
		{ span: [
			"full",
			Sr,
			B,
			z
		] },
		Sr,
		B,
		z
	], D = () => [
		Sr,
		"auto",
		B,
		z
	], te = () => [
		"auto",
		"min",
		"max",
		"fr",
		B,
		z
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
	], ne = () => ["auto", ...w()], re = () => [
		xr,
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
	], A = () => [
		s,
		xr,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		xr,
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
	], M = () => [
		e,
		B,
		z
	], ie = () => [
		...b(),
		Hr,
		Lr,
		{ position: [B, z] }
	], ae = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], oe = () => [
		"auto",
		"cover",
		"contain",
		Ur,
		Mr,
		{ size: [B, z] }
	], se = () => [
		Cr,
		Br,
		Nr
	], ce = () => [
		"",
		"none",
		"full",
		l,
		B,
		z
	], le = () => [
		"",
		R,
		Br,
		Nr
	], ue = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], de = () => [
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
	], fe = () => [
		R,
		Cr,
		Hr,
		Lr
	], pe = () => [
		"",
		"none",
		m,
		B,
		z
	], me = () => [
		"none",
		R,
		B,
		z
	], he = () => [
		"none",
		R,
		B,
		z
	], ge = () => [
		R,
		B,
		z
	], _e = () => [
		xr,
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
			blur: [wr],
			breakpoint: [wr],
			color: [Tr],
			container: [wr],
			"drop-shadow": [wr],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ar],
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
			"inset-shadow": [wr],
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
			radius: [wr],
			shadow: [wr],
			spacing: ["px", R],
			text: [wr],
			"text-shadow": [wr],
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
				xr,
				z,
				B,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				B,
				z
			] }],
			"container-named": [jr],
			columns: [{ columns: [
				R,
				"auto",
				z,
				B,
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
				Sr,
				"auto",
				B,
				z
			] }],
			basis: [{ basis: [
				xr,
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
				R,
				xr,
				"auto",
				"initial",
				"none",
				z
			] }],
			grow: [{ grow: [
				"",
				R,
				B,
				z
			] }],
			shrink: [{ shrink: [
				"",
				R,
				B,
				z
			] }],
			order: [{ order: [
				Sr,
				"first",
				"last",
				"none",
				B,
				z
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
			m: [{ m: ne() }],
			mx: [{ mx: ne() }],
			my: [{ my: ne() }],
			ms: [{ ms: ne() }],
			me: [{ me: ne() }],
			mbs: [{ mbs: ne() }],
			mbe: [{ mbe: ne() }],
			mt: [{ mt: ne() }],
			mr: [{ mr: ne() }],
			mb: [{ mb: ne() }],
			ml: [{ ml: ne() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: re() }],
			"inline-size": [{ inline: ["auto", ...A()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...A()] }],
			"max-inline-size": [{ "max-inline": ["none", ...A()] }],
			"block-size": [{ block: ["auto", ...j()] }],
			"min-block-size": [{ "min-block": ["auto", ...j()] }],
			"max-block-size": [{ "max-block": ["none", ...j()] }],
			w: [{ w: [
				s,
				"screen",
				...re()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...re()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...re()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...re()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...re()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...re()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Br,
				Nr
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Kr,
				Fr
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
				Cr,
				z
			] }],
			"font-family": [{ font: [
				Vr,
				Ir,
				t
			] }],
			"font-features": [{ "font-features": [z] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				B,
				z
			] }],
			"line-clamp": [{ "line-clamp": [
				R,
				"none",
				B,
				Pr
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				B,
				z
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				B,
				z
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: M() }],
			"text-color": [{ text: M() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ue(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				R,
				"from-font",
				"auto",
				B,
				Nr
			] }],
			"text-decoration-color": [{ decoration: M() }],
			"underline-offset": [{ "underline-offset": [
				R,
				"auto",
				B,
				z
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
				Sr,
				B,
				z
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
				B,
				z
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
				B,
				z
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
			"bg-position": [{ bg: ie() }],
			"bg-repeat": [{ bg: ae() }],
			"bg-size": [{ bg: oe() }],
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
						Sr,
						B,
						z
					],
					radial: [
						"",
						B,
						z
					],
					conic: [
						"",
						Sr,
						B,
						z
					]
				},
				Wr,
				Rr
			] }],
			"bg-color": [{ bg: M() }],
			"gradient-from-pos": [{ from: se() }],
			"gradient-via-pos": [{ via: se() }],
			"gradient-to-pos": [{ to: se() }],
			"gradient-from": [{ from: M() }],
			"gradient-via": [{ via: M() }],
			"gradient-to": [{ to: M() }],
			rounded: [{ rounded: ce() }],
			"rounded-s": [{ "rounded-s": ce() }],
			"rounded-e": [{ "rounded-e": ce() }],
			"rounded-t": [{ "rounded-t": ce() }],
			"rounded-r": [{ "rounded-r": ce() }],
			"rounded-b": [{ "rounded-b": ce() }],
			"rounded-l": [{ "rounded-l": ce() }],
			"rounded-ss": [{ "rounded-ss": ce() }],
			"rounded-se": [{ "rounded-se": ce() }],
			"rounded-ee": [{ "rounded-ee": ce() }],
			"rounded-es": [{ "rounded-es": ce() }],
			"rounded-tl": [{ "rounded-tl": ce() }],
			"rounded-tr": [{ "rounded-tr": ce() }],
			"rounded-br": [{ "rounded-br": ce() }],
			"rounded-bl": [{ "rounded-bl": ce() }],
			"border-w": [{ border: le() }],
			"border-w-x": [{ "border-x": le() }],
			"border-w-y": [{ "border-y": le() }],
			"border-w-s": [{ "border-s": le() }],
			"border-w-e": [{ "border-e": le() }],
			"border-w-bs": [{ "border-bs": le() }],
			"border-w-be": [{ "border-be": le() }],
			"border-w-t": [{ "border-t": le() }],
			"border-w-r": [{ "border-r": le() }],
			"border-w-b": [{ "border-b": le() }],
			"border-w-l": [{ "border-l": le() }],
			"divide-x": [{ "divide-x": le() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": le() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ue(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ue(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: M() }],
			"border-color-x": [{ "border-x": M() }],
			"border-color-y": [{ "border-y": M() }],
			"border-color-s": [{ "border-s": M() }],
			"border-color-e": [{ "border-e": M() }],
			"border-color-bs": [{ "border-bs": M() }],
			"border-color-be": [{ "border-be": M() }],
			"border-color-t": [{ "border-t": M() }],
			"border-color-r": [{ "border-r": M() }],
			"border-color-b": [{ "border-b": M() }],
			"border-color-l": [{ "border-l": M() }],
			"divide-color": [{ divide: M() }],
			"outline-style": [{ outline: [
				...ue(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				R,
				B,
				z
			] }],
			"outline-w": [{ outline: [
				"",
				R,
				Br,
				Nr
			] }],
			"outline-color": [{ outline: M() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				Gr,
				zr
			] }],
			"shadow-color": [{ shadow: M() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Gr,
				zr
			] }],
			"inset-shadow-color": [{ "inset-shadow": M() }],
			"ring-w": [{ ring: le() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: M() }],
			"ring-offset-w": [{ "ring-offset": [R, Nr] }],
			"ring-offset-color": [{ "ring-offset": M() }],
			"inset-ring-w": [{ "inset-ring": le() }],
			"inset-ring-color": [{ "inset-ring": M() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Gr,
				zr
			] }],
			"text-shadow-color": [{ "text-shadow": M() }],
			opacity: [{ opacity: [
				R,
				B,
				z
			] }],
			"mix-blend": [{ "mix-blend": [
				...de(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": de() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [R] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": fe() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": fe() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": M() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": M() }],
			"mask-image-t-from-pos": [{ "mask-t-from": fe() }],
			"mask-image-t-to-pos": [{ "mask-t-to": fe() }],
			"mask-image-t-from-color": [{ "mask-t-from": M() }],
			"mask-image-t-to-color": [{ "mask-t-to": M() }],
			"mask-image-r-from-pos": [{ "mask-r-from": fe() }],
			"mask-image-r-to-pos": [{ "mask-r-to": fe() }],
			"mask-image-r-from-color": [{ "mask-r-from": M() }],
			"mask-image-r-to-color": [{ "mask-r-to": M() }],
			"mask-image-b-from-pos": [{ "mask-b-from": fe() }],
			"mask-image-b-to-pos": [{ "mask-b-to": fe() }],
			"mask-image-b-from-color": [{ "mask-b-from": M() }],
			"mask-image-b-to-color": [{ "mask-b-to": M() }],
			"mask-image-l-from-pos": [{ "mask-l-from": fe() }],
			"mask-image-l-to-pos": [{ "mask-l-to": fe() }],
			"mask-image-l-from-color": [{ "mask-l-from": M() }],
			"mask-image-l-to-color": [{ "mask-l-to": M() }],
			"mask-image-x-from-pos": [{ "mask-x-from": fe() }],
			"mask-image-x-to-pos": [{ "mask-x-to": fe() }],
			"mask-image-x-from-color": [{ "mask-x-from": M() }],
			"mask-image-x-to-color": [{ "mask-x-to": M() }],
			"mask-image-y-from-pos": [{ "mask-y-from": fe() }],
			"mask-image-y-to-pos": [{ "mask-y-to": fe() }],
			"mask-image-y-from-color": [{ "mask-y-from": M() }],
			"mask-image-y-to-color": [{ "mask-y-to": M() }],
			"mask-image-radial": [{ "mask-radial": [B, z] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": fe() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": fe() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": M() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": M() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [R] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": fe() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": fe() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": M() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": M() }],
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
			"mask-position": [{ mask: ie() }],
			"mask-repeat": [{ mask: ae() }],
			"mask-size": [{ mask: oe() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				B,
				z
			] }],
			filter: [{ filter: [
				"",
				"none",
				B,
				z
			] }],
			blur: [{ blur: pe() }],
			brightness: [{ brightness: [
				R,
				B,
				z
			] }],
			contrast: [{ contrast: [
				R,
				B,
				z
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Gr,
				zr
			] }],
			"drop-shadow-color": [{ "drop-shadow": M() }],
			grayscale: [{ grayscale: [
				"",
				R,
				B,
				z
			] }],
			"hue-rotate": [{ "hue-rotate": [
				R,
				B,
				z
			] }],
			invert: [{ invert: [
				"",
				R,
				B,
				z
			] }],
			saturate: [{ saturate: [
				R,
				B,
				z
			] }],
			sepia: [{ sepia: [
				"",
				R,
				B,
				z
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				B,
				z
			] }],
			"backdrop-blur": [{ "backdrop-blur": pe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				R,
				B,
				z
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				R,
				B,
				z
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				R,
				B,
				z
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				R,
				B,
				z
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				R,
				B,
				z
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				R,
				B,
				z
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				R,
				B,
				z
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				R,
				B,
				z
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
				B,
				z
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				R,
				"initial",
				B,
				z
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				B,
				z
			] }],
			delay: [{ delay: [
				R,
				B,
				z
			] }],
			animate: [{ animate: [
				"none",
				v,
				B,
				z
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				B,
				z
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: me() }],
			"rotate-x": [{ "rotate-x": me() }],
			"rotate-y": [{ "rotate-y": me() }],
			"rotate-z": [{ "rotate-z": me() }],
			scale: [{ scale: he() }],
			"scale-x": [{ "scale-x": he() }],
			"scale-y": [{ "scale-y": he() }],
			"scale-z": [{ "scale-z": he() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ge() }],
			"skew-x": [{ "skew-x": ge() }],
			"skew-y": [{ "skew-y": ge() }],
			transform: [{ transform: [
				B,
				z,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: _e() }],
			"translate-x": [{ "translate-x": _e() }],
			"translate-y": [{ "translate-y": _e() }],
			"translate-z": [{ "translate-z": _e() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				Sr,
				B,
				z
			] }],
			accent: [{ accent: M() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: M() }],
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
				B,
				z
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": M() }],
			"scrollbar-track-color": [{ "scrollbar-track": M() }],
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
				B,
				z
			] }],
			fill: [{ fill: ["none", ...M()] }],
			"stroke-w": [{ stroke: [
				R,
				Br,
				Nr,
				Pr
			] }],
			stroke: [{ stroke: ["none", ...M()] }],
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
function V(...e) {
	return ri(kn(e));
}
// src/components/ui/button.tsx
var ii = Mn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
}), ai = x.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ (0, S.jsx)(r ? pn : "button", {
	className: V(ii({
		variant: t,
		size: n,
		className: e
	})),
	ref: a,
	...i
}));
ai.displayName = "Button";
// src/components/ui/input.tsx
var oi = x.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)("input", {
	type: t,
	className: V("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	ref: r,
	...n
}));
oi.displayName = "Input";
// node_modules/@radix-ui/react-primitive/dist/index.mjs
var si = Object.defineProperty, ci = (e, t) => si(e, "name", {
	value: t,
	configurable: !0
}), H = [
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
	let n = /* @__PURE__ */ fn(`Primitive.${t}`), r = x.forwardRef((e, r) => {
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
function li(e, t) {
	e && pt.flushSync(() => e.dispatchEvent(t));
}
ci(li, "dispatchDiscreteCustomEvent");
// node_modules/@radix-ui/react-label/dist/index.mjs
var ui = Object.defineProperty, di = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ ((e, t) => ui(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ (0, S.jsx)(H.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), fi = Mn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), pi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(di, {
	ref: n,
	className: V(fi(), e),
	...t
}));
pi.displayName = di.displayName;
// src/components/ui/textarea.tsx
var mi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("textarea", {
	className: V("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	ref: n,
	...t
}));
mi.displayName = "Textarea";
// src/components/ui/badge.tsx
var hi = Mn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function gi({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ (0, S.jsx)("div", {
		className: V(hi({ variant: t }), e),
		...n
	});
}
// src/components/ui/card.tsx
var _i = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: V("rounded-xl border bg-card text-card-foreground shadow", e),
	...t
}));
_i.displayName = "Card";
var vi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: V("flex flex-col space-y-1.5 p-6", e),
	...t
}));
vi.displayName = "CardHeader";
var yi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: V("font-semibold leading-none tracking-tight", e),
	...t
}));
yi.displayName = "CardTitle";
var bi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: V("text-sm text-muted-foreground", e),
	...t
}));
bi.displayName = "CardDescription";
var xi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: V("p-6 pt-0", e),
	...t
}));
xi.displayName = "CardContent";
var Si = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	ref: n,
	className: V("flex items-center p-6 pt-0", e),
	...t
}));
Si.displayName = "CardFooter";
// src/components/ui/table.tsx
var Ci = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, S.jsx)("table", {
		ref: n,
		className: V("w-full caption-bottom text-sm", e),
		...t
	})
}));
Ci.displayName = "Table";
var wi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("thead", {
	ref: n,
	className: V("[&_tr]:border-b", e),
	...t
}));
wi.displayName = "TableHeader";
var Ti = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("tbody", {
	ref: n,
	className: V("[&_tr:last-child]:border-0", e),
	...t
}));
Ti.displayName = "TableBody";
var Ei = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("tfoot", {
	ref: n,
	className: V("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
	...t
}));
Ei.displayName = "TableFooter";
var Di = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("tr", {
	ref: n,
	className: V("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
	...t
}));
Di.displayName = "TableRow";
var U = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("th", {
	ref: n,
	className: V("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
	...t
}));
U.displayName = "TableHead";
var W = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("td", {
	ref: n,
	className: V("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
	...t
}));
W.displayName = "TableCell";
var Oi = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)("caption", {
	ref: n,
	className: V("mt-4 text-sm text-muted-foreground", e),
	...t
}));
Oi.displayName = "TableCaption";
// src/portal.tsx
var ki = (0, x.createContext)(void 0), Ai = () => (0, x.useContext)(ki), ji = Object.defineProperty, Mi = (e, t) => ji(e, "name", {
	value: t,
	configurable: !0
}), Ni = !!(typeof window < "u" && window.document && window.document.createElement);
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Mi(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Mi(G, "composeEventHandlers");
function Pi(e) {
	if (!Ni) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Mi(Pi, "getOwnerWindow");
function Fi(e) {
	if (!Ni) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Mi(Fi, "getOwnerDocument");
function Ii(e, t = !1) {
	let { activeElement: n } = Fi(e);
	if (!n?.nodeName) return null;
	if (Li(n) && n.contentDocument) return Ii(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Fi(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Mi(Ii, "getActiveElement");
function Li(e) {
	return e.tagName === "IFRAME";
}
Mi(Li, "isFrame");
// node_modules/@radix-ui/react-context/dist/index.mjs
var Ri = Object.defineProperty, zi = (e, t) => Ri(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
	let n = x.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ zi((e) => {
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
	return zi(i, "useContext"), [r, i];
}
zi(Bi, "createContext");
// @__NO_SIDE_EFFECTS__
function Vi(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = x.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ zi((t) => {
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
		return zi(s, "useContext"), [o, s];
	}
	zi(r, "createContext");
	let i = /* @__PURE__ */ zi(() => {
		let t = n.map((e) => x.createContext(e));
		return /* @__PURE__ */ zi(function(n) {
			let r = n?.[e] || t;
			return x.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, Hi(i, ...t)];
}
zi(Vi, "createContextScope");
function Hi(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ zi(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ zi(function(e) {
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
zi(Hi, "composeContextScopes");
// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Ui = globalThis?.document ? x.useLayoutEffect : () => {}, Wi = Object.defineProperty, Gi = (e, t) => Wi(e, "name", {
	value: t,
	configurable: !0
}), Ki = x.useEffectEvent, qi = x.useInsertionEffect;
function Ji(e) {
	if (typeof Ki == "function") return Ki(e);
	let t = x.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof qi == "function" ? qi(() => {
		t.current = e;
	}) : Ui(() => {
		t.current = e;
	}), x.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Gi(Ji, "useEffectEvent");
// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Yi = Object.defineProperty, Xi = (e, t) => Yi(e, "name", {
	value: t,
	configurable: !0
}), Zi = x.useInsertionEffect || Ui;
function K({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ Xi(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = q({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, x.useCallback((t) => {
		if (s) {
			let n = Qi(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
Xi(K, "useControllableState");
function q({ defaultProp: e, onChange: t }) {
	let [n, r] = x.useState(e), i = x.useRef(n), a = x.useRef(t);
	return Zi(() => {
		a.current = t;
	}, [t]), x.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
Xi(q, "useUncontrolledState");
function Qi(e) {
	return typeof e == "function";
}
Xi(Qi, "isFunction");
var $i = Symbol("RADIX:SYNC_STATE");
function ea(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Ji(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = x.useReducer((t, n) => {
		if (n.type === $i) return {
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
			type: $i,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [h, f];
}
Xi(ea, "useControllableStateReducer");
// node_modules/@radix-ui/react-collection/dist/index.mjs
var ta = Object.defineProperty, na = (e, t) => ta(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function ra(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Vi(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = /* @__PURE__ */ na((e) => {
		let { scope: t, children: n } = e, r = x.useRef(null), a = x.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, S.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ fn(s), l = x.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = L(t, a(s, n).collectionRef);
		return /* @__PURE__ */ (0, S.jsx)(c, {
			ref: i,
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ fn(u), p = x.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = x.useRef(null), s = L(t, o), c = a(u, n);
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
	return na(m, "useCollection"), [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
na(ra, "createCollection");
var ia = /* @__PURE__ */ new WeakMap(), aa = class e extends Map {
	static {
		na(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], ia.set(this, !0);
	}
	set(e, t) {
		return ia.get(this) && !this.has(e) && this.#e.push(e), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = r ? this.size : this.size + 1, a = ca(e), o = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
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
		let t = oa(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = oa(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return oa(this.#e, e);
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
function oa(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = sa(e, t);
	return n === -1 ? void 0 : e[n];
}
na(oa, "at");
function sa(e, t) {
	let n = e.length, r = ca(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
na(sa, "toSafeIndex");
function ca(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
na(ca, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function la(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Vi(t), [i, a] = n(t);
	i.displayName = e + "CollectionStableContextProvider";
	let [o, s] = n(t);
	o.displayName = e + "CollectionStatefulContextProvider";
	let c = /* @__PURE__ */ na(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, S.jsx)(u, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, S.jsx)(l, { ...t }), "CollectionProvider");
	c.displayName = t;
	let l = /* @__PURE__ */ na((e) => {
		let t = _();
		return /* @__PURE__ */ (0, S.jsx)(u, {
			...e,
			state: t
		});
	}, "CollectionInit");
	l.displayName = e + "CollectionInit";
	let u = /* @__PURE__ */ na((e) => {
		let { scope: t, children: n, state: r } = e, a = x.useRef(null), [s, c] = x.useState(null), l = L(a, c), [u, d] = r, f = x.useRef(new aa()), p = x.useCallback(() => {
			let e = f.current;
			return fa(e) || e.sort(pa), e;
		}, []);
		return x.useEffect(() => {
			if (!s) return;
			let e = ma(() => {
				d((e) => {
					let t = e.toSorted(pa);
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
	let d = e + "CollectionSlot", f = /* @__PURE__ */ fn(d), p = x.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = L(t, a(d, n).collectionElementRef);
		return /* @__PURE__ */ (0, S.jsx)(f, {
			ref: i,
			children: r
		});
	});
	p.displayName = d;
	let m = e + "CollectionItemSlot", h = /* @__PURE__ */ fn(m), g = x.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = x.useRef(null), { setCollection: s, registryRef: c } = a(m, n), l = x.useRef(i);
		ua(l.current, i) || (l.current = i);
		let u = l.current, d = L(t, x.useCallback((e) => {
			let t = c.current;
			e ? t.set(e, {
				...l.current,
				element: e
			}) : o.current && t.delete(o.current);
		}, [c]), o);
		Ui(() => {
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
				let r = new aa(n);
				return t && t.element !== e && r.delete(t.element), e && r.set(e, {
					...u,
					element: e
				}), r.sort(pa);
			}));
		}), x.useEffect(() => () => {
			let e = f.current;
			f.current = null, e && s((t) => {
				if (!t.has(e.element)) return t;
				let n = new aa(t);
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
		return x.useState(new aa());
	}
	na(_, "useInitCollection");
	function v(t) {
		let { collection: n } = s(e + "CollectionConsumer", t);
		return n;
	}
	na(v, "useCollection");
	function y(t) {
		let { getCollection: n } = a(e + "CollectionConsumer", t);
		return n;
	}
	return na(y, "useGetCollection"), [{
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
na(la, "createCollection");
function ua(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
na(ua, "shallowEqual");
function da(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
na(da, "isElementPreceding");
function fa(e) {
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
na(fa, "isInDocumentOrder");
function pa(e, t) {
	return !e[1].element || !t[1].element ? 0 : da(e[1].element, t[1].element) ? -1 : 1;
}
na(pa, "sortByDocumentPosition");
function ma(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
na(ma, "getChildListObserver");
// node_modules/@radix-ui/react-direction/dist/index.mjs
var ha = Object.defineProperty, ga = (e, t) => ha(e, "name", {
	value: t,
	configurable: !0
}), _a = {
	LTR: "ltr",
	RTL: "rtl"
}, va = x.createContext(void 0);
function ya(e) {
	let t = x.useContext(va);
	return e || t || _a.LTR;
}
ga(ya, "useDirection");
// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var ba = Object.defineProperty, xa = (e, t) => ba(e, "name", {
	value: t,
	configurable: !0
}), Sa = x.useInsertionEffect;
function Ca(e) {
	let t = x.useRef(e);
	return typeof Sa == "function" ? Sa(() => {
		t.current = e;
	}) : Ui(() => {
		t.current = e;
	}), x.useMemo(() => ((...e) => t.current?.(...e)), []);
}
xa(Ca, "useCallbackRef");
// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var wa = Object.defineProperty, Ta = (e, t) => wa(e, "name", {
	value: t,
	configurable: !0
}), Ea = "dismissableLayer.update", Da = "dismissableLayer.pointerDownOutside", Oa = "dismissableLayer.focusOutside", ka, Aa = x.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), ja = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Ta(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = x.useContext(Aa), [d, f] = x.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = x.useState({}), h = L(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = _ ? g.indexOf(_) : -1, y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= v, w = x.useRef(!1), T = Pa((e) => {
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
	}), ee = Fa((e) => {
		if (r && w.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), E = d ? y === g.length - 1 : !1, D = Ca((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return x.useEffect(() => {
		if (E) return p.addEventListener("keydown", D, { capture: !0 }), () => p.removeEventListener("keydown", D, { capture: !0 });
	}, [
		p,
		E,
		D
	]), x.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ka = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Ia(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = ka));
		};
	}, [
		d,
		p,
		n,
		u
	]), x.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Ia());
	}, [d, u]), x.useEffect(() => {
		let e = /* @__PURE__ */ Ta(() => m({}), "handleUpdate");
		return document.addEventListener(Ea, e), () => document.removeEventListener(Ea, e);
	}, []), /* @__PURE__ */ (0, S.jsx)(H.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? C ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: G(e.onFocusCapture, ee.onFocusCapture),
		onBlurCapture: G(e.onBlurCapture, ee.onBlurCapture),
		onPointerDownCapture: G(e.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function Ma() {
	let e = x.useContext(Aa), [t, n] = x.useState(null);
	return x.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
Ta(Ma, "useDismissableLayerSurface");
var Na = /* @__PURE__ */ Ta(() => !0, "IS_TRUE");
function Pa(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = Na } = t, s = Ca(e), c = x.useRef(!1), l = x.useRef(!1), u = x.useRef(/* @__PURE__ */ new Map()), d = x.useRef(() => {});
	return x.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		Ta(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		Ta(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		Ta(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		Ta(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Ta((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || La(Da, s, p, { discrete: !0 });
				};
				if (Ta(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ Ta(() => c.current = !0, "onPointerDownCapture") };
}
Ta(Pa, "usePointerDownOutside");
function Fa(e, t = globalThis?.document) {
	let n = Ca(e), r = x.useRef(!1);
	return x.useEffect(() => {
		let e = /* @__PURE__ */ Ta((e) => {
			e.target && !r.current && La(Oa, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ Ta(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Ta(() => r.current = !1, "onBlurCapture")
	};
}
Ta(Fa, "useFocusOutside");
function Ia() {
	let e = new CustomEvent(Ea);
	document.dispatchEvent(e);
}
Ta(Ia, "dispatchUpdate");
function La(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? li(i, a) : i.dispatchEvent(a);
}
Ta(La, "handleAndDispatchCustomEvent");
// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Ra = Object.defineProperty, za = (e, t) => Ra(e, "name", {
	value: t,
	configurable: !0
}), Ba = 0, Va = null;
function Ha(e) {
	return Ua(), e.children;
}
za(Ha, "FocusGuards");
function Ua() {
	x.useEffect(() => {
		Va ||= {
			start: Wa(),
			end: Wa()
		};
		let { start: e, end: t } = Va;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Ba++, () => {
			Ba === 1 && (Va?.start.remove(), Va?.end.remove(), Va = null), Ba = Math.max(0, Ba - 1);
		};
	}, []);
}
za(Ua, "useFocusGuards");
function Wa() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
za(Wa, "createFocusGuard");
// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Ga = Object.defineProperty, Ka = (e, t) => Ga(e, "name", {
	value: t,
	configurable: !0
}), qa = "focusScope.autoFocusOnMount", Ja = "focusScope.autoFocusOnUnmount", Ya = {
	bubbles: !1,
	cancelable: !0
}, Xa = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Ka(function(e, t) {
	let { loop: n = !1, trapped: r = !1, branches: i, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [c, l] = x.useState(null), u = Ca(a), d = Ca(o), f = x.useRef(null), p = L(t, l), m = x.useRef(i);
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
				h(t) ? f.current = t : so(f.current, { select: !0 });
			}, t = function(e) {
				if (g.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (h(t) || so(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && so(c);
			};
			Ka(e, "handleFocusIn"), Ka(t, "handleFocusOut"), Ka(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
			co.add(g);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(qa, Ya);
				c.addEventListener(qa, u), c.dispatchEvent(t), t.defaultPrevented || (to(fo(ro(c)), { select: !0 }), document.activeElement === e && so(c));
			}
			return () => {
				c.removeEventListener(qa, u);
				let t = c.ownerDocument, n = CustomEvent;
				setTimeout(() => {
					let r = new n(Ja, Ya);
					c.addEventListener(Ja, d), c.dispatchEvent(r), r.defaultPrevented || so(e ?? t.body, { select: !0 }), c.removeEventListener(Ja, d), co.remove(g);
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
			let t = e.currentTarget, [r, a] = no(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && so(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && so(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		g.paused
	]);
	return /* @__PURE__ */ (0, S.jsx)(H.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: _
	});
}, "FocusScope")), Za = x.createContext(null);
function Qa({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ (0, S.jsx)(Za.Provider, {
		value: e,
		children: t
	}) : t;
}
Ka(Qa, "FocusScopeBranchProvider");
function $a() {
	let [e, t] = x.useState([]);
	return {
		nodes: e,
		registry: x.useMemo(() => ({
			add: /* @__PURE__ */ Ka((e) => t((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Ka((e) => t((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Ka($a, "useFocusScopeBranchRegistry");
function eo(e) {
	let t = x.useContext(Za);
	x.useEffect(() => {
		if (e && t) return t.add(e), () => t.remove(e);
	}, [e, t]);
}
Ka(eo, "useFocusScopeBranch");
function to(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (so(r, { select: t }), document.activeElement !== n) return;
}
Ka(to, "focusFirst");
function no(e) {
	let t = ro(e);
	return [io(t, e), io(t.reverse(), e)];
}
Ka(no, "getTabbableEdges");
function ro(e) {
	let t = [], n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Ka((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Ka(ro, "getTabbableCandidates");
function io(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : ao(r, { upTo: t }))) return r;
}
Ka(io, "findVisible");
function ao(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Ka(ao, "isHidden");
function oo(e) {
	return e.tagName === "INPUT" && typeof e.select == "function";
}
Ka(oo, "isSelectableInput");
function so(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = (e.ownerDocument ?? document).activeElement;
		e.focus({ preventScroll: !0 }), e !== n && oo(e) && t && e.select();
	}
}
Ka(so, "focus");
var co = lo();
function lo() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = uo(e, t), e.unshift(t);
		},
		remove(t) {
			e = uo(e, t), e[0]?.resume();
		}
	};
}
Ka(lo, "createFocusScopesStack");
function uo(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Ka(uo, "arrayRemove");
function fo(e) {
	return e.filter((e) => e.tagName !== "A");
}
Ka(fo, "removeLinks");
// node_modules/@radix-ui/react-id/dist/index.mjs
var po = Object.defineProperty, mo = (e, t) => po(e, "name", {
	value: t,
	configurable: !0
}), ho = x.useId || (() => void 0), go = 0;
function _o(e) {
	let [t, n] = x.useState(ho());
	return Ui(() => {
		e || n((e) => e ?? String(go++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
mo(_o, "useId");
// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var vo = [
	"top",
	"right",
	"bottom",
	"left"
], yo = Math.min, bo = Math.max, xo = Math.round, So = Math.floor, Co = (e) => ({
	x: e,
	y: e
}), wo = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function To(e, t, n) {
	return bo(e, yo(t, n));
}
function Eo(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Do(e) {
	return e.split("-")[0];
}
function Oo(e) {
	return e.split("-")[1];
}
function ko(e) {
	return e === "x" ? "y" : "x";
}
function Ao(e) {
	return e === "y" ? "height" : "width";
}
function jo(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Mo(e) {
	return ko(jo(e));
}
function No(e, t, n) {
	n === void 0 && (n = !1);
	let r = Oo(e), i = Mo(e), a = Ao(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Vo(o)), [o, Vo(o)];
}
function Po(e) {
	let t = Vo(e);
	return [
		Fo(e),
		t,
		Fo(t)
	];
}
function Fo(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var J = ["left", "right"], Io = ["right", "left"], Lo = ["top", "bottom"], Ro = ["bottom", "top"];
function zo(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Io : J : t ? J : Io;
		case "left":
		case "right": return t ? Lo : Ro;
		default: return [];
	}
}
function Bo(e, t, n, r) {
	let i = Oo(e), a = zo(Do(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Fo)))), a;
}
function Vo(e) {
	let t = Do(e);
	return wo[t] + e.slice(t.length);
}
function Ho(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Uo(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ho(e);
}
function Wo(e) {
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
function Go(e, t, n) {
	let { reference: r, floating: i } = e, a = jo(t), o = Mo(t), s = Ao(o), c = Do(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Oo(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Ko(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Eo(t, e), p = Uo(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Wo(await i.getClippingRect({
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
	}, y = Wo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var qo = 50, Jo = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ko
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Go(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < qo && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Go(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Yo = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Eo(e, t) || {};
		if (l == null) return {};
		let d = Uo(u), f = {
			x: n,
			y: r
		}, p = Mo(i), m = Ao(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		C && await (o.isElement == null ? void 0 : o.isElement(S)) || (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, ee = yo(d[_], T), E = yo(d[v], T), D = C - h[m] - E, te = C / 2 - h[m] / 2 + w, O = To(ee, te, D), k = !c.arrow && Oo(i) != null && te !== O && a.reference[m] / 2 - (te < ee ? ee : E) - h[m] / 2 < 0, ne = k ? te < ee ? te - ee : te - D : 0;
		return {
			[p]: f[p] + ne,
			data: {
				[p]: O,
				centerOffset: te - O - ne,
				...k && { alignmentOffset: ne }
			},
			reset: k
		};
	}
}), Xo = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Eo(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Do(r), _ = jo(o), v = Do(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Vo(o)] : Po(o)), x = p !== "none";
			!d && x && b.push(...Bo(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = No(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === jo(t) || T.every((e) => jo(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = jo(e.placement);
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
function Zo(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Qo(e) {
	return vo.some((t) => e[t] >= 0);
}
var $o = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Eo(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Zo(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Qo(e)
					} };
				}
				case "escaped": {
					let e = Zo(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Qo(e)
					} };
				}
				default: return {};
			}
		}
	};
}, es = /*#__PURE__*/ new Set(["left", "top"]);
async function ts(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Do(n), s = Oo(n), c = jo(n) === "y", l = es.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Eo(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var ns = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ts(t, e);
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
}, rs = function(e) {
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
			} }, ...l } = Eo(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = jo(i), p = ko(f), m = u[p], h = u[f], g = (e, t) => To(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, is = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Eo(e, t), u = {
				x: n,
				y: r
			}, d = jo(i), f = ko(d), p = u[f], m = u[d], h = Eo(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = es.has(Do(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, as = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Eo(e, t), c = await i.detectOverflow(t, s), l = Do(n), u = Oo(n), d = jo(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = yo(p - c[m], g), y = yo(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * bo(c.left, c.right) : S = p - 2 * bo(c.top, c.bottom)), await o({
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
function os() {
	return typeof window < "u";
}
function ss(e) {
	return us(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function cs(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ls(e) {
	return ((us(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function us(e) {
	return os() ? e instanceof Node || e instanceof cs(e).Node : !1;
}
function ds(e) {
	return os() ? e instanceof Element || e instanceof cs(e).Element : !1;
}
function fs(e) {
	return os() ? e instanceof HTMLElement || e instanceof cs(e).HTMLElement : !1;
}
function ps(e) {
	return !os() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof cs(e).ShadowRoot;
}
function ms(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Ts(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function hs(e) {
	return /^(table|td|th)$/.test(ss(e));
}
function gs(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var _s = /transform|translate|scale|rotate|perspective|filter/, vs = /paint|layout|strict|content/, ys = (e) => !!e && e !== "none", bs;
function xs(e) {
	let t = ds(e) ? Ts(e) : e;
	return ys(t.transform) || ys(t.translate) || ys(t.scale) || ys(t.rotate) || ys(t.perspective) || !Cs() && (ys(t.backdropFilter) || ys(t.filter)) || _s.test(t.willChange || "") || vs.test(t.contain || "");
}
function Ss(e) {
	let t = Ds(e);
	for (; fs(t) && !ws(t);) {
		if (xs(t)) return t;
		if (gs(t)) return null;
		t = Ds(t);
	}
	return null;
}
function Cs() {
	return bs ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), bs;
}
function ws(e) {
	return /^(html|body|#document)$/.test(ss(e));
}
function Ts(e) {
	return cs(e).getComputedStyle(e);
}
function Es(e) {
	return ds(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ds(e) {
	if (ss(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ps(e) && e.host || ls(e);
	return ps(t) ? t.host : t;
}
function Os(e) {
	let t = Ds(e);
	return ws(t) ? (e.ownerDocument || e).body : fs(t) && ms(t) ? t : Os(t);
}
function ks(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Os(e), i = r === e.ownerDocument?.body, a = cs(r);
	if (i) {
		let e = As(a);
		return t.concat(a, a.visualViewport || [], ms(r) ? r : [], e && n ? ks(e) : []);
	}
	return t.concat(r, ks(r, [], n));
}
function As(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function js(e) {
	let t = Ts(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = fs(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = xo(n) !== a || xo(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Ms(e) {
	return ds(e) ? e : e.contextElement;
}
function Ns(e) {
	let t = Ms(e);
	if (!fs(t)) return Co(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = js(t), o = (a ? xo(n.width) : n.width) / r, s = (a ? xo(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var Ps = /*#__PURE__*/ Co(0);
function Fs(e) {
	let t = cs(e);
	return !Cs() || !t.visualViewport ? Ps : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Is(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === cs(e);
}
function Ls(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Ms(e), o = Co(1);
	t && (r ? ds(r) && (o = Ns(r)) : o = Ns(e));
	let s = Is(a, n, r) ? Fs(a) : Co(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = cs(a), t = ds(r) ? cs(r) : r, n = e, i = As(n);
		for (; i && t !== n;) {
			let e = Ns(i), t = i.getBoundingClientRect(), r = Ts(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = cs(i), i = As(n);
		}
	}
	return Wo({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Rs(e, t) {
	let n = Es(e).scrollLeft;
	return t ? t.left + n : Ls(ls(e)).left + n;
}
function zs(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Rs(e, n),
		y: n.top + t.scrollTop
	};
}
function Bs(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = ls(r), s = t ? gs(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Co(1), u = Co(0), d = fs(r);
	if ((d || !a) && ((ss(r) !== "body" || ms(o)) && (c = Es(r)), d)) {
		let e = Ls(r);
		l = Ns(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? zs(o, c) : Co(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Vs(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Hs(e) {
	let t = Es(e), n = e.ownerDocument.body, r = bo(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = bo(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Rs(e), o = -t.scrollTop;
	return Ts(n).direction === "rtl" && (a += bo(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Us = 25;
function Ws(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = cs(e), a = ls(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Cs() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Rs(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Us && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Gs(e, t) {
	let n = Ls(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ns(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ks(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Ws(e, n, t);
	else if (t === "document") r = Hs(ls(e));
	else if (ds(t)) r = Gs(t, n);
	else {
		let n = Fs(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Wo(r);
}
function qs(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = ks(e, [], !1).filter((e) => ds(e) && ss(e) !== "body"), i = null, a = Ts(e).position === "fixed", o = a ? Ds(e) : e;
	for (; ds(o) && !ws(o);) {
		let e = Ts(o), t = xs(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Ds(o);
	}
	return t.set(e, r), r;
}
function Js(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? gs(t) ? [] : qs(t, this._c) : [].concat(n), r], o = Ks(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ks(t, a[e], i);
		s = bo(n.top, s), c = yo(n.right, c), l = yo(n.bottom, l), u = bo(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Ys(e) {
	let { width: t, height: n } = js(e);
	return {
		width: t,
		height: n
	};
}
function Xs(e, t, n) {
	let r = fs(t), i = ls(t), a = n === "fixed", o = Ls(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Co(0);
	if ((r || !a) && ((ss(t) !== "body" || ms(i)) && (s = Es(t)), r)) {
		let e = Ls(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Rs(i));
	let l = i && !r && !a ? zs(i, s) : Co(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Zs(e) {
	return Ts(e).position === "static";
}
function Qs(e, t) {
	if (!fs(e) || Ts(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return ls(e) === n && (n = n.ownerDocument.body), n;
}
function $s(e, t) {
	let n = cs(e);
	if (gs(e)) return n;
	if (!fs(e)) {
		let t = Ds(e);
		for (; t && !ws(t);) {
			if (ds(t) && !Zs(t)) return t;
			t = Ds(t);
		}
		return n;
	}
	let r = Qs(e, t);
	for (; r && hs(r) && Zs(r);) r = Qs(r, t);
	return r && ws(r) && Zs(r) && !xs(r) ? n : r || Ss(e) || n;
}
var ec = async function(e) {
	let t = this.getOffsetParent || $s, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Xs(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function tc(e) {
	return Ts(e).direction === "rtl";
}
var nc = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Bs,
	getDocumentElement: ls,
	getClippingRect: Js,
	getOffsetParent: $s,
	getElementRects: ec,
	getClientRects: Vs,
	getDimensions: Ys,
	getScale: Ns,
	isElement: ds,
	isRTL: tc
};
function rc(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ic(e, t, n) {
	let r = null, i, a = ls(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = So(d), h = So(a.clientWidth - (u + f)), g = So(a.clientHeight - (d + p)), _ = So(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: bo(0, yo(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!rc(l, e.getBoundingClientRect())) return s();
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
	let c = cs(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function ac(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ms(e), u = i || a ? [...l ? ks(l) : [], ...t ? ks(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ic(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Ls(e) : null;
	c && g();
	function g() {
		let t = Ls(e);
		h && !rc(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var oc = ns, sc = rs, cc = Xo, lc = as, uc = $o, dc = Yo, fc = is, pc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...nc,
		...i.platform,
		_c: r
	};
	return Jo(e, t, {
		...i,
		platform: a
	});
}, mc = typeof document < "u" ? x.useLayoutEffect : function() {};
function hc(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!hc(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !hc(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function gc(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _c(e, t) {
	let n = gc(e);
	return Math.round(t * n) / n;
}
function vc(e) {
	let t = x.useRef(e);
	return mc(() => {
		t.current = e;
	}), t;
}
function yc(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = x.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = x.useState(r);
	hc(f, r) || p(r);
	let [m, h] = x.useState(null), [g, _] = x.useState(null), v = x.useCallback((e) => {
		e !== C.current && (C.current = e, h(e));
	}, []), y = x.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), b = a || m, S = o || g, C = x.useRef(null), w = x.useRef(null), T = x.useRef(u), ee = c != null, E = vc(c), D = vc(i), te = vc(l), O = x.useCallback(() => {
		if (!C.current || !w.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), pc(C.current, w.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: te.current !== !1
			};
			k.current && !hc(T.current, t) && (T.current = t, pt.flushSync(() => {
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
	mc(() => {
		l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let k = x.useRef(!1);
	mc(() => (k.current = !0, () => {
		k.current = !1;
	}), []), mc(() => {
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
	let ne = x.useMemo(() => ({
		reference: C,
		floating: w,
		setReference: v,
		setFloating: y
	}), [v, y]), re = x.useMemo(() => ({
		reference: b,
		floating: S
	}), [b, S]), A = x.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!re.floating) return e;
		let t = _c(re.floating, u.x), r = _c(re.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...gc(re.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		re.floating,
		u.x,
		u.y
	]);
	return x.useMemo(() => ({
		...u,
		update: O,
		refs: ne,
		elements: re,
		floatingStyles: A
	}), [
		u,
		O,
		ne,
		re,
		A
	]);
}
var bc = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : dc({
				element: r.current,
				padding: i
			}).fn(n) : r ? dc({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, xc = (e, t) => {
	let n = oc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Sc = (e, t) => {
	let n = sc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Cc = (e, t) => ({
	fn: fc(e).fn,
	options: [e, t]
}), wc = (e, t) => {
	let n = cc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Tc = (e, t) => {
	let n = lc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ec = (e, t) => {
	let n = uc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Dc = (e, t) => {
	let n = bc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Oc = Object.defineProperty, kc = (e, t) => Oc(e, "name", {
	value: t,
	configurable: !0
});
function Ac(e) {
	let [t, n] = x.useState(void 0);
	return Ui(() => {
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
kc(Ac, "useSize");
// node_modules/@radix-ui/react-popper/dist/index.mjs
var jc = Object.defineProperty, Mc = (e, t) => jc(e, "name", {
	value: t,
	configurable: !0
}), Nc = {
	Partial: "partial",
	Always: "always"
}, Pc = {
	Optimized: "optimized",
	Always: "always"
}, Fc = "Popper", [Ic, Lc] = /* @__PURE__ */ Vi(Fc), [Rc, zc] = Ic(Fc), Bc = /* @__PURE__ */ Mc((e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = x.useState(null), [a, o] = x.useState(void 0);
	return /* @__PURE__ */ (0, S.jsx)(Rc, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
}, "Popper"), Vc = "PopperAnchor", Hc = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Mc(function(e, t) {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = zc(Vc, n), o = x.useRef(null), s = a.onAnchorChange, c = L(t, x.useCallback((e) => {
		o.current = e, e && s(e);
	}, [s])), l = x.useRef(null);
	x.useEffect(() => {
		if (!r) return;
		let e = l.current;
		l.current = r.current, e !== l.current && s(l.current);
	});
	let u = a.placementState && Yc(a.placementState), d = u?.[0], f = u?.[1];
	return r ? null : /* @__PURE__ */ (0, S.jsx)(H.div, {
		"data-radix-popper-side": d,
		"data-radix-popper-align": f,
		...i,
		ref: c
	});
}, "PopperAnchor")), Uc = "PopperContent", [Wc, Gc] = Ic(Uc), Kc = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Mc(function(e, t) {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = Nc.Partial, hideWhenDetached: f = !1, updatePositionStrategy: p = Pc.Optimized, onPlaced: m, ...h } = e, g = zc(Uc, n), [_, v] = x.useState(null), y = L(t, v), [b, C] = x.useState(null), w = Ac(b), T = w?.width ?? 0, ee = w?.height ?? 0, E = r + (a === "center" ? "" : "-" + a), D = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, te = Array.isArray(l) ? l : [l], O = te.length > 0, k = {
		padding: D,
		boundary: te.filter(qc),
		altBoundary: O
	}, { refs: ne, floatingStyles: re, placement: A, isPositioned: j, middlewareData: M } = yc({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: /* @__PURE__ */ Mc((...e) => ac(...e, { animationFrame: p === Pc.Always }), "whileElementsMounted"),
		elements: { reference: g.anchor },
		middleware: [
			xc({
				mainAxis: i + ee,
				alignmentAxis: o
			}),
			c && Sc({
				mainAxis: !0,
				crossAxis: !1,
				...d === Nc.Partial ? { limiter: Cc() } : {},
				...k
			}),
			c && wc({ ...k }),
			Tc({
				...k,
				apply: /* @__PURE__ */ Mc(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			b && Dc({
				element: b,
				padding: s
			}),
			Jc({
				arrowWidth: T,
				arrowHeight: ee
			}),
			f && Ec(O ? {
				strategy: "referenceHidden",
				...k
			} : {
				strategy: "referenceHidden",
				padding: k.padding,
				altBoundary: k.altBoundary
			})
		]
	}), ie = g.setPlacementState;
	Ui(() => (ie(A), () => {
		ie(void 0);
	}), [A, ie]);
	let [ae, oe] = Yc(A), se = Ca(m);
	Ui(() => {
		j && se?.();
	}, [j, se]);
	let ce = M.arrow?.x, le = M.arrow?.y, ue = M.arrow?.centerOffset !== 0, [de, fe] = x.useState();
	return Ui(() => {
		_ && fe(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ (0, S.jsx)("div", {
		ref: ne.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...re,
			transform: j ? re.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: de,
			"--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
			...M.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, S.jsx)(Wc, {
			scope: n,
			placedSide: ae,
			placedAlign: oe,
			onArrowChange: C,
			arrowX: ce,
			arrowY: le,
			shouldHideArrow: ue,
			children: /* @__PURE__ */ (0, S.jsx)(H.div, {
				"data-side": ae,
				"data-align": oe,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: j ? h.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function qc(e) {
	return e !== null;
}
Mc(qc, "isNotNull");
var Jc = /* @__PURE__ */ Mc((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Yc(n), u = {
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
function Yc(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Mc(Yc, "getSideAndAlignFromPlacement");
// node_modules/@radix-ui/react-portal/dist/index.mjs
var Xc = Object.defineProperty, Zc = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ ((e, t) => Xc(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = x.useState(!1);
	Ui(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? pt.createPortal(/* @__PURE__ */ (0, S.jsx)(H.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), Qc = Object.defineProperty, $c = (e, t) => Qc(e, "name", {
	value: t,
	configurable: !0
});
function el(e, t) {
	return x.useReducer((e, n) => t[e][n] ?? e, e);
}
$c(el, "useStateMachine");
var tl = /* @__PURE__ */ $c((e) => {
	let { present: t, children: n } = e, r = nl(t), i = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), a = il(r.ref, ol(i));
	return typeof n == "function" || r.isPresent ? x.cloneElement(i, { ref: a }) : null;
}, "Presence");
function nl(e) {
	let [t, n] = x.useState(), r = x.useRef(null), i = x.useRef(e), a = x.useRef("none"), o = x.useRef(void 0), [s, c] = el(e ? "mounted" : "unmounted", {
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
		s === "mounted" ? (a.current = o.current ?? al(r.current), o.current = void 0) : a.current = "none";
	}, [s]), Ui(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = al(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), Ui(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ $c((a) => {
				let o = al(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ $c((e) => {
				e.target === t && (a.current = al(r.current));
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
				r.current = t, o.current = al(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
$c(nl, "usePresence");
function rl(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
$c(rl, "setRef");
function il(...e) {
	let t = x.useRef(e);
	return t.current = e, x.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = rl(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : rl(n[e], null);
			}
		};
	}, []);
}
$c(il, "useStableComposedRefs");
function al(e) {
	return e?.animationName || "none";
}
$c(al, "getAnimationName");
function ol(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
$c(ol, "getElementRef");
// node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var sl = Object.defineProperty, cl = (e, t) => sl(e, "name", {
	value: t,
	configurable: !0
}), ll = !1;
function ul() {
	let [e, t] = x.useState(ll);
	return x.useEffect(() => {
		ll || (ll = !0, t(!0));
	}, []), e;
}
cl(ul, "useIsHydrated");
var dl = x.useSyncExternalStore;
function fl() {
	return () => {};
}
cl(fl, "subscribe");
function pl() {
	return dl(fl, () => !0, () => !1);
}
cl(pl, "useIsHydratedModern");
var ml = typeof dl == "function" ? pl : ul, hl = Object.defineProperty, gl = (e, t) => hl(e, "name", {
	value: t,
	configurable: !0
}), _l = "rovingFocusGroup.onEntryFocus", vl = {
	bubbles: !1,
	cancelable: !0
}, yl = "RovingFocusGroup", [bl, xl, Sl] = /* @__PURE__ */ ra(yl), [Cl, wl] = /* @__PURE__ */ Vi(yl, [Sl]), Tl = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, El = {
	LTR: "ltr",
	RTL: "rtl"
}, [Dl, Ol] = Cl(yl), kl = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ gl(function(e, t) {
	return /* @__PURE__ */ (0, S.jsx)(bl.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, S.jsx)(bl.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, S.jsx)(Al, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), Al = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ gl(function(e, t) {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: i = !1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, preventScrollOnEntryFocus: u = !1, ...d } = e, f = x.useRef(null), p = L(t, f), m = ya(a), [h, g] = K({
		prop: o,
		defaultProp: s ?? null,
		onChange: c,
		caller: yl
	}), [_, v] = x.useState(!1), y = Ca(l), b = xl(n), C = x.useRef(!1), [w, T] = x.useState(0);
	return x.useEffect(() => {
		let e = f.current;
		if (e) return e.addEventListener(_l, y), () => e.removeEventListener(_l, y);
	}, [y]), /* @__PURE__ */ (0, S.jsx)(Dl, {
		scope: n,
		orientation: r,
		dir: m,
		loop: i,
		currentTabStopId: h,
		onItemFocus: x.useCallback((e) => g(e), [g]),
		onItemShiftTab: x.useCallback(() => v(!0), []),
		onFocusableItemAdd: x.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: x.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ (0, S.jsx)(H.div, {
			tabIndex: _ || w === 0 ? -1 : 0,
			"data-orientation": r,
			...d,
			ref: p,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: G(e.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: G(e.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !_) {
					let t = new CustomEvent(_l, vl);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = b().filter((e) => e.focusable);
						Il([
							e.find((e) => e.active),
							e.find((e) => e.id === h),
							...e
						].filter(Boolean).map((e) => e.ref.current), u);
					}
				}
				C.current = !1;
			}),
			onBlur: G(e.onBlur, () => v(!1))
		})
	});
}, "RovingFocusGroupImpl")), jl = "RovingFocusGroupItem", Ml = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ gl(function(e, t) {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = _o(), l = a || c, u = Ol(jl, n), d = u.currentTabStopId === l, f = xl(n), { onFocusableItemAdd: p, onFocusableItemRemove: m, currentTabStopId: h } = u, g = ml();
	return Ui(() => {
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
	]), /* @__PURE__ */ (0, S.jsx)(bl.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, S.jsx)(H.span, {
			tabIndex: d ? 0 : -1,
			"data-orientation": u.orientation,
			...s,
			ref: t,
			onMouseDown: G(e.onMouseDown, (e) => {
				r ? u.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: G(e.onFocus, () => u.onItemFocus(l)),
			onKeyDown: G(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					u.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = Fl(e, u.orientation, u.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = f().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = u.loop ? Ll(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Il(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: d,
				hasTabStop: h != null
			}) : o
		})
	});
}, "RovingFocusGroupItem")), Nl = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Pl(e, t) {
	return t === El.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
gl(Pl, "getDirectionAwareKey");
function Fl(e, t, n) {
	let r = Pl(e.key, n);
	if (!(t === Tl.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === Tl.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return Nl[r];
}
gl(Fl, "getFocusIntent");
function Il(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
gl(Il, "focusFirst");
function Ll(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
gl(Ll, "wrapArray");
// node_modules/aria-hidden/dist/es2015/index.js
var Rl = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, zl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), Vl = {}, Hl = 0, Ul = function(e) {
	return e && (e.host || Ul(e.parentNode));
}, Wl = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ul(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Gl = function(e, t, n, r) {
	var i = Wl(t, Array.isArray(e) ? e : [e]);
	Vl[n] || (Vl[n] = /* @__PURE__ */ new WeakMap());
	var a = Vl[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (zl.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				zl.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Bl.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Hl++, function() {
		o.forEach(function(e) {
			var t = zl.get(e) - 1, i = a.get(e) - 1;
			zl.set(e, t), a.set(e, i), t || (Bl.has(e) || e.removeAttribute(r), Bl.delete(e)), i || e.removeAttribute(n);
		}), Hl--, Hl || (zl = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), Vl = {});
	};
}, Kl = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Rl(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Gl(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, ql = function() {
	return ql = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, ql.apply(this, arguments);
};
function Jl(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Yl(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Xl = "right-scroll-bar-position", Zl = "width-before-scroll-bar", Ql = "with-scroll-bars-hidden", $l = "--removed-body-scroll-bar-size";
// node_modules/use-callback-ref/dist/es2015/assignRef.js
function eu(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/use-callback-ref/dist/es2015/useRef.js
function tu(e, t) {
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
var nu = typeof window < "u" ? x.useLayoutEffect : x.useEffect, ru = /* @__PURE__ */ new WeakMap();
function iu(e, t) {
	var n = tu(t || null, function(t) {
		return e.forEach(function(e) {
			return eu(e, t);
		});
	});
	return nu(function() {
		var t = ru.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || eu(e, null);
			}), i.forEach(function(e) {
				r.has(e) || eu(e, a);
			});
		}
		ru.set(n, e);
	}, [e]), n;
}
// node_modules/use-sidecar/dist/es2015/medium.js
function au(e) {
	return e;
}
function ou(e, t) {
	t === void 0 && (t = au);
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
function su(e) {
	e === void 0 && (e = {});
	var t = ou(null);
	return t.options = ql({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/use-sidecar/dist/es2015/exports.js
var cu = function(e) {
	var t = e.sideCar, n = Jl(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return x.createElement(r, ql({}, n));
};
cu.isSideCarExport = !0;
function lu(e, t) {
	return e.useMedium(t), cu;
}
// node_modules/react-remove-scroll/dist/es2015/medium.js
var uu = su(), du = function() {}, fu = x.forwardRef(function(e, t) {
	var n = x.useRef(null), r = x.useState({
		onScrollCapture: du,
		onWheelCapture: du,
		onTouchMoveCapture: du
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = Jl(e, [
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
	]), S = f, C = iu([n, t]), w = ql(ql({}, b), i);
	return x.createElement(x.Fragment, null, u && x.createElement(S, {
		sideCar: uu,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? x.cloneElement(x.Children.only(s), ql(ql({}, w), { ref: C })) : x.createElement(v, ql({}, w, {
		className: c,
		ref: C
	}), s));
});
fu.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, fu.classNames = {
	fullWidth: Zl,
	zeroRight: Xl
};
// node_modules/get-nonce/dist/es2015/index.js
var pu = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/react-style-singleton/dist/es2015/singleton.js
function mu() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = pu();
	return t && e.setAttribute("nonce", t), e;
}
function hu(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function gu(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var _u = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = mu()) && (hu(t, n), gu(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, vu = function() {
	var e = _u();
	return function(t, n) {
		x.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, yu = function() {
	var e = vu();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, bu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, xu = function(e) {
	return parseInt(e || "", 10) || 0;
}, Su = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		xu(n),
		xu(r),
		xu(i)
	];
}, Cu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return bu;
	var t = Su(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, wu = yu(), Tu = "data-scroll-locked", Eu = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Ql} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Tu}] {
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
  
  .${Xl} {
    right: ${s}px ${r};
  }
  
  .${Zl} {
    margin-right: ${s}px ${r};
  }
  
  .${Xl} .${Xl} {
    right: 0 ${r};
  }
  
  .${Zl} .${Zl} {
    margin-right: 0 ${r};
  }
  
  body[${Tu}] {
    ${$l}: ${s}px;
  }
`;
}, Du = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Ou = function() {
	x.useEffect(function() {
		return document.body.setAttribute(Tu, (Du() + 1).toString()), function() {
			var e = Du() - 1;
			e <= 0 ? document.body.removeAttribute(Tu) : document.body.setAttribute(Tu, e.toString());
		};
	}, []);
}, ku = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Ou();
	var a = x.useMemo(function() {
		return Cu(i);
	}, [i]);
	return x.createElement(wu, { styles: Eu(a, !t, i, n ? "" : "!important") });
}, Au = !1;
if (typeof window < "u") try {
	var ju = Object.defineProperty({}, "passive", { get: function() {
		return Au = !0, !0;
	} });
	window.addEventListener("test", ju, ju), window.removeEventListener("test", ju, ju);
} catch {
	Au = !1;
}
var Mu = Au ? { passive: !1 } : !1, Nu = function(e) {
	return e.tagName === "TEXTAREA";
}, Pu = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Nu(e) && n[t] === "visible");
}, Fu = function(e) {
	return Pu(e, "overflowY");
}, Iu = function(e) {
	return Pu(e, "overflowX");
}, Lu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Bu(e, r)) {
			var i = Vu(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ru = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, zu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Bu = function(e, t) {
	return e === "v" ? Fu(t) : Iu(t);
}, Vu = function(e, t) {
	return e === "v" ? Ru(t) : zu(t);
}, Hu = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Uu = function(e, t, n, r, i) {
	var a = Hu(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Vu(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Bu(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Wu = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gu = function(e) {
	return [e.deltaX, e.deltaY];
}, Ku = function(e) {
	return e && "current" in e ? e.current : e;
}, qu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Ju = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Yu = 0, Xu = [];
function Zu(e) {
	var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), i = x.useState(Yu++)[0], a = x.useState(yu)[0], o = x.useRef(e);
	x.useEffect(function() {
		o.current = e;
	}, [e]), x.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Yl([e.lockRef.current], (e.shards || []).map(Ku), !0).filter(Boolean);
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
		var i = Wu(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Lu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Lu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Uu(h, t, e, h === "h" ? s : c, !0);
	}, []), c = x.useCallback(function(e) {
		var n = e;
		if (Xu.length && Xu[Xu.length - 1] === a) {
			var r = "deltaY" in n ? Gu(n) : Wu(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && qu(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
				var c = (o.current.shards || []).map(Ku).filter(Boolean).filter(function(e) {
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
			shadowParent: Qu(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = x.useCallback(function(e) {
		n.current = Wu(e), r.current = void 0;
	}, []), d = x.useCallback(function(t) {
		l(t.type, Gu(t), t.target, s(t, e.lockRef.current));
	}, []), f = x.useCallback(function(t) {
		l(t.type, Wu(t), t.target, s(t, e.lockRef.current));
	}, []);
	x.useEffect(function() {
		return Xu.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, Mu), document.addEventListener("touchmove", c, Mu), document.addEventListener("touchstart", u, Mu), function() {
			Xu = Xu.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Mu), document.removeEventListener("touchmove", c, Mu), document.removeEventListener("touchstart", u, Mu);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return x.createElement(x.Fragment, null, m ? x.createElement(a, { styles: Ju(i) }) : null, p ? x.createElement(ku, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Qu(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Y = lu(uu, Zu), X = x.forwardRef(function(e, t) {
	return x.createElement(fu, ql({}, e, {
		ref: t,
		sideCar: Y
	}));
});
X.classNames = fu.classNames;
// node_modules/@radix-ui/react-menu/dist/index.mjs
var $u = Object.defineProperty, Z = (e, t) => $u(e, "name", {
	value: t,
	configurable: !0
}), ed = {
	LTR: "ltr",
	RTL: "rtl"
}, td = ["Enter", " "], nd = [
	"ArrowDown",
	"PageUp",
	"Home"
], rd = [
	"ArrowUp",
	"PageDown",
	"End"
], id = [...nd, ...rd], ad = {
	ltr: [...td, "ArrowRight"],
	rtl: [...td, "ArrowLeft"]
}, od = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, sd = "Menu", [cd, ld, ud] = /* @__PURE__ */ ra(sd), [dd, fd] = /* @__PURE__ */ Vi(sd, [
	ud,
	Lc,
	wl
]), pd = Lc(), md = wl(), [hd, gd] = dd(sd), [_d, vd] = dd(sd), yd = /* @__PURE__ */ Z((e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = pd(t), [c, l] = x.useState(null), u = x.useRef(!1), d = Ca(a), f = ya(i);
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
	}, [n, d]), /* @__PURE__ */ (0, S.jsx)(Bc, {
		...s,
		children: /* @__PURE__ */ (0, S.jsx)(hd, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ (0, S.jsx)(_d, {
				scope: t,
				onClose: x.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
}, "Menu"), bd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = pd(n);
	return /* @__PURE__ */ (0, S.jsx)(Hc, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), xd = "MenuPortal", [Sd, Cd] = dd(xd, { forceMount: void 0 }), wd = /* @__PURE__ */ Z((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = gd(xd, t);
	return /* @__PURE__ */ (0, S.jsx)(Sd, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, S.jsx)(tl, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, S.jsx)(Zc, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), Td = "MenuContent", [Ed, Dd] = dd(Td), Od = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = Cd(Td, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = gd(Td, e.__scopeMenu), o = vd(Td, e.__scopeMenu);
	return /* @__PURE__ */ (0, S.jsx)(cd.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, S.jsx)(tl, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, S.jsx)(cd.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, S.jsx)(kd, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, S.jsx)(Ad, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), kd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = gd(Td, e.__scopeMenu), r = x.useRef(null), i = L(t, r);
	return x.useEffect(() => {
		let e = r.current;
		if (e) return Kl(e);
	}, []), /* @__PURE__ */ (0, S.jsx)(Md, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: G(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentModal")), Ad = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = gd(Td, e.__scopeMenu);
	return /* @__PURE__ */ (0, S.jsx)(Md, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), jd = /* @__PURE__ */ fn("MenuContent.ScrollLock"), Md = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, loop: r = !1, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...h } = e, g = gd(Td, n), _ = vd(Td, n), v = pd(n), y = md(n), b = ld(n), [C, w] = x.useState(null), T = x.useRef(null), [ee, E] = x.useState(null);
	eo(ee);
	let { nodes: D, registry: te } = $a(), O = !!(i || m), k = L(t, T, g.onContentChange, E), ne = x.useRef(0), re = x.useRef(""), A = x.useRef(0), j = x.useRef(null), M = x.useRef("right"), ie = x.useRef(0), ae = x.useMemo(() => m ? [T, ...D.map((e) => ({ current: e }))] : [], [
		T,
		D,
		m
	]), oe = m ? X : x.Fragment, se = m ? {
		as: jd,
		allowPinchZoom: !0,
		shards: ae
	} : void 0, ce = /* @__PURE__ */ Z((e) => {
		let t = re.current + e, n = b().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = of(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		function s(e) {
			re.current = e, window.clearTimeout(ne.current), e !== "" && (ne.current = window.setTimeout(() => s(""), 1e3));
		}
		Z(s, "updateSearch"), s(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	x.useEffect(() => () => window.clearTimeout(ne.current), []), Ua();
	let le = x.useCallback((e) => M.current === j.current?.side && cf(e, j.current?.area), []);
	return /* @__PURE__ */ (0, S.jsx)(Ed, {
		scope: n,
		searchRef: re,
		onItemEnter: x.useCallback((e) => {
			le(e) && e.preventDefault();
		}, [le]),
		onItemLeave: x.useCallback((e) => {
			le(e) || (T.current?.focus(), w(null));
		}, [le]),
		onTriggerLeave: x.useCallback((e) => {
			le(e) && e.preventDefault();
		}, [le]),
		pointerGraceTimerRef: A,
		onPointerGraceIntentChange: x.useCallback((e) => {
			j.current = e;
		}, []),
		children: /* @__PURE__ */ (0, S.jsx)(Qa, {
			registry: O ? te : null,
			children: /* @__PURE__ */ (0, S.jsx)(oe, {
				...se,
				children: /* @__PURE__ */ (0, S.jsx)(Xa, {
					asChild: !0,
					trapped: i,
					branches: D,
					onMountAutoFocus: G(a, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: o,
					children: /* @__PURE__ */ (0, S.jsx)(ja, {
						asChild: !0,
						disableOutsidePointerEvents: s,
						onEscapeKeyDown: l,
						onPointerDownOutside: u,
						onFocusOutside: d,
						onInteractOutside: f,
						onDismiss: p,
						children: /* @__PURE__ */ (0, S.jsx)(kl, {
							asChild: !0,
							...y,
							dir: _.dir,
							orientation: "vertical",
							loop: r,
							currentTabStopId: C,
							onCurrentTabStopIdChange: w,
							onEntryFocus: G(c, (e) => {
								_.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ (0, S.jsx)(Kc, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": ef(g.open),
								"data-radix-menu-content": "",
								dir: _.dir,
								...v,
								...h,
								ref: k,
								style: {
									outline: "none",
									...h.style
								},
								onKeyDown: G(h.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && ce(e.key));
									let i = T.current;
									if (e.target !== i || !id.includes(e.key)) return;
									e.preventDefault();
									let a = b().filter((e) => !e.disabled).map((e) => e.ref.current);
									rd.includes(e.key) && a.reverse(), rf(a);
								}),
								onBlur: G(e.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(ne.current), re.current = "");
								}),
								onPointerMove: G(e.onPointerMove, lf((e) => {
									let t = e.target, n = ie.current !== e.clientX;
									if (e.currentTarget.contains(t) && n) {
										let t = e.clientX > ie.current ? "right" : "left";
										M.current = t, ie.current = e.clientX;
									}
								}))
							})
						})
					})
				})
			})
		})
	});
}, "MenuContentImpl")), Nd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(H.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), Pd = "MenuItem", Fd = "menu.itemSelect", Id = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = x.useRef(null), o = vd(Pd, e.__scopeMenu), s = Dd(Pd, e.__scopeMenu), c = L(t, a), l = x.useRef(!1), u = /* @__PURE__ */ Z(() => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(Fd, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Fd, (e) => r?.(e), { once: !0 }), li(e, t), t.defaultPrevented ? l.current = !1 : o.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ (0, S.jsx)(Ld, {
		...i,
		ref: c,
		disabled: n,
		onClick: G(e.onClick, u),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), l.current = !0;
		},
		onPointerUp: G(e.onPointerUp, (e) => {
			l.current || e.currentTarget?.click();
		}),
		onKeyDown: G(e.onKeyDown, (e) => {
			n || e.target !== e.currentTarget || (s.searchRef.current === "" || e.key !== " ") && td.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Ld = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = Dd(Pd, n), s = md(n), c = x.useRef(null), l = L(t, c), [u, d] = x.useState(!1), [f, p] = x.useState("");
	return x.useEffect(() => {
		let e = c.current;
		e && p((e.textContent ?? "").trim());
	}, [a.children]), /* @__PURE__ */ (0, S.jsx)(cd.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: i ?? f,
		children: /* @__PURE__ */ (0, S.jsx)(Ml, {
			asChild: !0,
			...s,
			focusable: !r,
			children: /* @__PURE__ */ (0, S.jsx)(H.div, {
				role: "menuitem",
				"data-highlighted": u ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...a,
				ref: l,
				onPointerMove: G(e.onPointerMove, lf((e) => {
					r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: G(e.onPointerLeave, lf((e) => o.onItemLeave(e))),
				onFocus: G(e.onFocus, () => d(!0)),
				onBlur: G(e.onBlur, () => d(!1))
			})
		})
	});
}, "MenuItemImpl")), Rd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, S.jsx)(Wd, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, S.jsx)(Id, {
			role: "menuitemcheckbox",
			"aria-checked": tf(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": nf(n),
			onSelect: G(i.onSelect, () => r?.(tf(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [zd, Bd] = dd("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Z(() => {}, "onValueChange")
}), Vd = "MenuRadioItem", Hd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { value: n, ...r } = e, i = Bd(Vd, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, S.jsx)(Wd, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, S.jsx)(Id, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": nf(a),
			onSelect: G(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), Ud = "MenuItemIndicator", [Wd, Gd] = dd(Ud, { checked: !1 }), Kd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Gd(Ud, n);
	return /* @__PURE__ */ (0, S.jsx)(tl, {
		present: r || tf(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, S.jsx)(H.span, {
			...i,
			ref: t,
			"data-state": nf(a.checked)
		})
	});
}, "MenuItemIndicator")), qd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(H.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), [Jd, Yd] = dd("MenuSub"), Xd = "MenuSubTrigger", Zd = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = gd(Xd, e.__scopeMenu), r = vd(Xd, e.__scopeMenu), i = Yd(Xd, e.__scopeMenu), a = Dd(Xd, e.__scopeMenu), o = x.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = x.useCallback(() => {
		o.current && window.clearTimeout(o.current), o.current = null;
	}, []);
	x.useEffect(() => u, [u]), x.useEffect(() => {
		let e = s.current;
		return () => {
			window.clearTimeout(e), c(null);
		};
	}, [s, c]);
	let d = L(t, i.onTriggerChange);
	return /* @__PURE__ */ (0, S.jsx)(bd, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ (0, S.jsx)(Ld, {
			id: i.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": n.open ? i.contentId : void 0,
			"data-state": ef(n.open),
			...e,
			ref: d,
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: G(e.onPointerMove, lf((t) => {
				a.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || o.current || (a.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
					n.onOpenChange(!0), u();
				}, 100));
			})),
			onPointerLeave: G(e.onPointerLeave, lf((e) => {
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
			onKeyDown: G(e.onKeyDown, (t) => {
				e.disabled || t.target !== t.currentTarget || (a.searchRef.current === "" || t.key !== " ") && ad[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), Qd = "MenuSubContent", $d = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Z(function(e, t) {
	let n = Cd(Td, e.__scopeMenu), { forceMount: r = n.forceMount, align: i = "start", ...a } = e, o = gd(Td, e.__scopeMenu), s = vd(Td, e.__scopeMenu), c = Yd(Qd, e.__scopeMenu), l = x.useRef(null), u = L(t, l);
	return /* @__PURE__ */ (0, S.jsx)(cd.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, S.jsx)(tl, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, S.jsx)(cd.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, S.jsx)(Md, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: i,
					side: s.dir === ed.RTL ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: G(e.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: G(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: G(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = od[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function ef(e) {
	return e ? "open" : "closed";
}
Z(ef, "getOpenState");
function tf(e) {
	return e === "indeterminate";
}
Z(tf, "isIndeterminate");
function nf(e) {
	return tf(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Z(nf, "getCheckedState");
function rf(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Z(rf, "focusFirst");
function af(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Z(af, "wrapArray");
function of(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = af(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Z(of, "getNextMatch");
function sf(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Z(sf, "isPointInPolygon");
function cf(e, t) {
	return t ? sf({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Z(cf, "isPointerInGraceArea");
function lf(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Z(lf, "whenMouse");
// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var uf = Object.defineProperty, df = (e, t) => uf(e, "name", {
	value: t,
	configurable: !0
}), ff = "DropdownMenu", [pf, mf] = /* @__PURE__ */ Vi(ff, [fd]), hf = fd(), [gf, _f] = pf(ff), vf = /* @__PURE__ */ df((e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = hf(t), l = x.useRef(null), [u, d] = K({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: ff
	});
	return /* @__PURE__ */ (0, S.jsx)(gf, {
		scope: t,
		triggerId: _o(),
		triggerRef: l,
		contentId: _o(),
		open: u,
		onOpenChange: d,
		onOpenToggle: x.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ (0, S.jsx)(yd, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
}, "DropdownMenu"), yf = "DropdownMenuTrigger", bf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = _f(yf, n), o = hf(n), s = L(t, a.triggerRef);
	return /* @__PURE__ */ (0, S.jsx)(bd, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, S.jsx)(H.button, {
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
			onPointerDown: G(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: G(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), xf = /* @__PURE__ */ df((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = hf(t);
	return /* @__PURE__ */ (0, S.jsx)(wd, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), Sf = "DropdownMenuContent", Cf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = _f(Sf, n), a = hf(n), o = x.useRef(!1);
	return /* @__PURE__ */ (0, S.jsx)(Od, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: G(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: G(e.onInteractOutside, (e) => {
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
}, "DropdownMenuContent")), wf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(Nd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), Tf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(Id, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), Ef = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(Rd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), Df = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(Hd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), Of = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(Kd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItemIndicator")), kf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(qd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), Af = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)(Zd, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), jf = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ df(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = hf(n);
	return /* @__PURE__ */ (0, S.jsx)($d, {
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
}, "DropdownMenuSubContent")), Mf = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Nf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Pf = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Ff = (e) => {
	let t = Pf(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, If = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Lf = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Rf = (0, x.forwardRef)(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => (0, x.createElement)("svg", {
	ref: c,
	...If,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: Mf("lucide", i),
	...!a && !Lf(s) && { "aria-hidden": "true" },
	...s
}, [...o.map(([e, t]) => (0, x.createElement)(e, t)), ...Array.isArray(a) ? a : [a]])), zf = (e, t) => {
	let n = (0, x.forwardRef)(({ className: n, ...r }, i) => (0, x.createElement)(Rf, {
		ref: i,
		iconNode: t,
		className: Mf(`lucide-${Nf(Ff(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Ff(e), n;
}, Bf = zf("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), Vf = zf("calendar-clock", [
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
]), Q = zf("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Hf = zf("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Uf = zf("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Wf = zf("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Gf = zf("circle-alert", [
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
]), Kf = zf("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), qf = zf("circle-dollar-sign", [
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
]), Jf = zf("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Yf = zf("copy", [["rect", {
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
}]]), Xf = zf("ellipsis", [
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
]), Zf = zf("external-link", [
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
]), Qf = zf("eye-off", [
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
]), $f = zf("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), ep = zf("history", [
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
]), tp = zf("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]), np = zf("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), rp = zf("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), ip = zf("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), ap = zf("refresh-cw", [
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
]), op = zf("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), sp = zf("trash-2", [
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
]), cp = zf("triangle-alert", [
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
]), lp = zf("user-plus", [
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
]), up = zf("users", [
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
]), dp = zf("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), fp = vf, pp = bf, mp = x.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ (0, S.jsxs)(Af, {
	ref: i,
	className: V("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ (0, S.jsx)(Uf, { className: "ml-auto" })]
}));
mp.displayName = Af.displayName;
var hp = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(jf, {
	ref: n,
	className: V("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", e),
	...t
}));
hp.displayName = jf.displayName;
var gp = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(xf, {
	container: Ai(),
	children: /* @__PURE__ */ (0, S.jsx)(Cf, {
		ref: r,
		sideOffset: t,
		className: V("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", e),
		...n
	})
}));
gp.displayName = Cf.displayName;
var _p = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(Tf, {
	ref: r,
	className: V("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e),
	...n
}));
_p.displayName = Tf.displayName;
var vp = x.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ (0, S.jsxs)(Ef, {
	ref: i,
	className: V("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ (0, S.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, S.jsx)(Of, { children: /* @__PURE__ */ (0, S.jsx)(Q, { className: "h-4 w-4" }) })
	}), t]
}));
vp.displayName = Ef.displayName;
var yp = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsxs)(Df, {
	ref: r,
	className: V("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, S.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, S.jsx)(Of, { children: /* @__PURE__ */ (0, S.jsx)(Jf, { className: "h-2 w-2 fill-current" }) })
	}), t]
}));
yp.displayName = Df.displayName;
var bp = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(wf, {
	ref: r,
	className: V("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
	...n
}));
bp.displayName = wf.displayName;
var xp = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(kf, {
	ref: n,
	className: V("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
xp.displayName = kf.displayName;
var Sp = /* @__PURE__ */ c({
	computeNextDue: () => Tp,
	createAccount: () => Mp,
	deleteAccount: () => Pp,
	deleteAccountPayment: () => Lp,
	formatMoney: () => Dp,
	listAccountPayments: () => kp,
	listAccounts: () => jp,
	overdueMonths: () => Ap,
	recordAccountPayment: () => Op,
	setAccountMembers: () => Ip,
	setMemberAccount: () => Fp,
	statusFor: () => Ep,
	updateAccount: () => Np
});
function Cp(e, t, n) {
	let r = new Date(e, t + 1, 0).getDate();
	return Math.min(n, r);
}
function wp(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Tp(e, t = /* @__PURE__ */ new Date()) {
	let n = new Date(t.getFullYear(), t.getMonth(), Cp(t.getFullYear(), t.getMonth(), e));
	if (n <= t) {
		let n = t.getMonth() === 11 ? t.getFullYear() + 1 : t.getFullYear(), r = (t.getMonth() + 1) % 12;
		return wp(new Date(n, r, Cp(n, r, e)));
	}
	return wp(n);
}
function Ep(e) {
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
function Dp(e, t = "USD") {
	try {
		return new Intl.NumberFormat(void 0, {
			style: "currency",
			currency: t
		}).format(e / 100);
	} catch {
		return `${(e / 100).toFixed(2)} ${t}`;
	}
}
async function Op(e) {
	if (!(await jp()).find((t) => t.id === e.accountId)) throw Error("Account not found");
	await Kt("record_payment", {
		...e,
		requestId: crypto.randomUUID()
	});
}
async function kp(e) {
	return (await Kt("list", { table: "plex_account_payments" })).filter((t) => t.account_id === e).reverse();
}
function Ap(e, t = /* @__PURE__ */ new Date()) {
	if (e.is_free || !e.next_due_date) return 0;
	let n = /* @__PURE__ */ new Date(e.next_due_date + "T00:00:00"), r = new Date(t.getFullYear(), t.getMonth(), t.getDate()), i = 0;
	for (; n < r && i < 12e3;) {
		i++;
		let t = n.getFullYear() + +(n.getMonth() === 11), r = (n.getMonth() + 1) % 12;
		n = new Date(t, r, Cp(t, r, e.billing_day));
	}
	return i;
}
var jp, Mp, Np, Pp, Fp, Ip, Lp, Rp = o((() => {
	Yt(), jp = () => Kt("list", { table: "plex_billing_accounts" }), Mp = (e) => Kt("create_account", e), Np = (e) => Kt("update_account", e), Pp = (e) => Kt("delete_account", { id: e }), Fp = (e, t) => Kt("update_member", {
		id: e,
		values: { account_id: t }
	}), Ip = (e, t) => Kt("assign_members", {
		accountId: e,
		memberIds: t
	}), Lp = (e) => Kt("delete_payment", { id: e });
}));
// node_modules/@radix-ui/react-switch/dist/index.mjs
Rp();
var zp = Object.defineProperty, Bp = (e, t) => zp(e, "name", {
	value: t,
	configurable: !0
}), Vp = "Switch", [Hp, Up] = /* @__PURE__ */ Vi(Vp), [Wp, Gp] = Hp(Vp);
function Kp(e) {
	let { __scopeSwitch: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u = "on", internal_do_not_use_render: d } = e, [f, p] = K({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: Vp
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
	return /* @__PURE__ */ (0, S.jsx)(Wp, {
		scope: t,
		...b,
		children: em(d) ? d(b) : r
	});
}
Bp(Kp, "SwitchProvider");
var qp = "SwitchTrigger", Jp = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Bp(function({ __scopeSwitch: e, onClick: t, ...n }, r) {
	let { control: i, form: a, value: o, disabled: s, checked: c, required: l, setControl: u, setChecked: d, onUserClick: f, isFormControl: p, bubbleInput: m } = Gp(qp, e), h = L(r, u), g = x.useRef(c);
	return x.useEffect(() => {
		let e = a ? i?.ownerDocument.getElementById(a) : i?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ Bp(() => d(g.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		i,
		a,
		d
	]), /* @__PURE__ */ (0, S.jsx)(H.button, {
		type: "button",
		role: "switch",
		"aria-checked": c,
		"aria-required": l,
		"data-state": tm(c),
		"data-disabled": s ? "" : void 0,
		disabled: s,
		value: o,
		...n,
		ref: h,
		onClick: G(t, (e) => {
			let t = e.isPropagationStopped();
			f({
				requestedChecked: !c,
				hasConsumerStoppedPropagation: t
			}), d((e) => !e), m && p && (t || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), Yp = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Bp(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ (0, S.jsx)(Kp, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(Jp, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ (0, S.jsx)($p, { __scopeSwitch: n })] })
	});
}, "Switch")), Xp = "SwitchThumb", Zp = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Bp(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = Gp(Xp, n);
	return /* @__PURE__ */ (0, S.jsx)(H.span, {
		"data-state": tm(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), Qp = "SwitchBubbleInput", $p = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Bp(function({ __scopeSwitch: e, onClick: t, ...n }, r) {
	let { control: i, userClick: a, checked: o, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = Gp(Qp, e), h = L(r, m), g = Ac(i), _ = x.useRef(!1), v = x.useRef(o), y = x.useRef(a), b = x.useRef(null);
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
	return /* @__PURE__ */ (0, S.jsx)(H.input, {
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
		onClick: G(t, (e) => {
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
function em(e) {
	return typeof e == "function";
}
Bp(em, "isFunction");
function tm(e) {
	return e ? "checked" : "unchecked";
}
Bp(tm, "getState");
// src/components/ui/switch.tsx
var nm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Yp, {
	className: V("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
	...t,
	ref: n,
	children: /* @__PURE__ */ (0, S.jsx)(Zp, { className: V("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
nm.displayName = Yp.displayName;
// node_modules/@radix-ui/react-dialog/dist/index.mjs
var rm = Object.defineProperty, im = (e, t) => rm(e, "name", {
	value: t,
	configurable: !0
}), am = "Dialog", [om, sm] = /* @__PURE__ */ Vi(am), [cm, lm] = om(am), um = /* @__PURE__ */ im((e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = x.useRef(null), c = x.useRef(null), { nodes: l, registry: u } = $a(), [d, f] = K({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: am
	}), [p, m] = x.useState(0), [h, g] = x.useState(0);
	return /* @__PURE__ */ (0, S.jsx)(cm, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: _o(),
		titleId: _o(),
		descriptionId: _o(),
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
}, "Dialog"), dm = "DialogPortal", [fm, pm] = om(dm, { forceMount: void 0 }), mm = /* @__PURE__ */ im((e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = lm(dm, t);
	return /* @__PURE__ */ (0, S.jsx)(fm, {
		scope: t,
		forceMount: n,
		children: x.Children.map(r, (e) => /* @__PURE__ */ (0, S.jsx)(tl, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, S.jsx)(Zc, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
}, "DialogPortal"), hm = "DialogOverlay", gm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let n = pm(hm, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = lm(hm, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, S.jsx)(tl, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, S.jsx)(vm, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), _m = /* @__PURE__ */ fn("DialogOverlay.RemoveScroll"), vm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = lm(hm, n), a = L(t, Ma());
	return /* @__PURE__ */ (0, S.jsx)(X, {
		as: _m,
		allowPinchZoom: !0,
		shards: x.useMemo(() => [i.contentRef, ...i.branchNodes.map((e) => ({ current: e }))], [i.contentRef, i.branchNodes]),
		children: /* @__PURE__ */ (0, S.jsx)(H.div, {
			"data-state": km(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}, "DialogOverlayImpl")), ym = "DialogContent", bm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let n = pm(ym, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = lm(ym, e.__scopeDialog);
	return /* @__PURE__ */ (0, S.jsx)(tl, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, S.jsx)(xm, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, S.jsx)(Sm, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), xm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let n = lm(ym, e.__scopeDialog), r = x.useRef(null), i = L(t, n.contentRef, r);
	return x.useEffect(() => {
		let e = r.current;
		if (e) return Kl(e);
	}, []), /* @__PURE__ */ (0, S.jsx)(Cm, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: G(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: G(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: G(e.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), Sm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let n = lm(ym, e.__scopeDialog), r = x.useRef(!1), i = x.useRef(!1);
	return /* @__PURE__ */ (0, S.jsx)(Cm, {
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
}, "DialogContentNonModal")), Cm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = lm(ym, n);
	return Ua(), /* @__PURE__ */ (0, S.jsx)(Qa, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ (0, S.jsx)(Xa, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ (0, S.jsx)(ja, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? Om(o, l.descriptionId) : o,
				"data-state": km(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), wm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = lm("DialogTitle", n), { setTitleCount: a } = i;
	return Ui(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, S.jsx)(H.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), Tm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = lm("DialogDescription", n), { setDescriptionCount: a } = i;
	return Ui(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, S.jsx)(H.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), Em = "DialogClose", Dm = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ im(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = lm(Em, n);
	return /* @__PURE__ */ (0, S.jsx)(H.button, {
		type: "button",
		...r,
		ref: t,
		onClick: G(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function Om(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
im(Om, "concatAriaDescribedby");
function km(e) {
	return e ? "open" : "closed";
}
im(km, "getState");
// src/components/ui/dialog.tsx
var Am = um, jm = (e) => /* @__PURE__ */ (0, S.jsx)(mm, {
	container: Ai(),
	...e
}), Mm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(gm, {
	ref: n,
	className: V("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
Mm.displayName = gm.displayName;
var Nm = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsx)(jm, { children: /* @__PURE__ */ (0, S.jsx)(Mm, { children: /* @__PURE__ */ (0, S.jsxs)(bm, {
	ref: r,
	"data-slot": "dialog-content",
	className: V("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", e),
	...n,
	children: [t, /* @__PURE__ */ (0, S.jsxs)(Dm, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, S.jsx)(dp, { className: "h-4 w-4" }), /* @__PURE__ */ (0, S.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
}) }) }));
Nm.displayName = bm.displayName;
var Pm = ({ className: e, ...t }) => /* @__PURE__ */ (0, S.jsx)("div", {
	className: V("flex flex-col space-y-1.5 text-center sm:text-left", e),
	...t
});
Pm.displayName = "DialogHeader";
var Fm = ({ className: e, ...t }) => /* @__PURE__ */ (0, S.jsx)("div", {
	"data-slot": "dialog-footer",
	className: V("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
Fm.displayName = "DialogFooter";
var Im = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(wm, {
	ref: n,
	className: V("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
Im.displayName = wm.displayName;
var Lm = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Tm, {
	ref: n,
	className: V("text-sm text-muted-foreground", e),
	...t
}));
Lm.displayName = Tm.displayName;
// node_modules/@radix-ui/number/dist/index.mjs
var Rm = Object.defineProperty, zm = (e, t) => Rm(e, "name", {
	value: t,
	configurable: !0
});
function Bm(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
zm(Bm, "clamp");
// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Vm = Object.freeze({
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
}), Hm = Object.defineProperty, $ = (e, t) => Hm(e, "name", {
	value: t,
	configurable: !0
}), Um = {
	ItemAligned: "item-aligned",
	Popper: "popper"
}, Wm = {
	LTR: "ltr",
	RTL: "rtl"
}, Gm = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Km = [" ", "Enter"], qm = "Select", [Jm, Ym, Xm] = /* @__PURE__ */ ra(qm), [Zm, Qm] = /* @__PURE__ */ Vi(qm, [Xm, Lc]), $m = Lc(), [eh, th] = Zm(qm), [nh, rh] = Zm(qm);
function ih(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m, internal_do_not_use_render: h } = e, g = $m(t), [_, v] = x.useState(null), [y, b] = x.useState(null), [C, w] = x.useState(!1), T = ya(l), [ee, E] = K({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: qm
	}), [D, te] = K({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: qm
	}), O = x.useRef(null), k = x.useRef(!1), [ne, re] = x.useState(null), A = /* @__PURE__ */ $((e) => {
		re({
			value: e,
			hasConsumerStoppedPropagation: k.current
		}), te(e);
	}, "handleUserSelect"), j = x.useRef(D);
	x.useEffect(() => {
		let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => te(j.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		m,
		_,
		te
	]);
	let M = !_ || !!m || !!_.closest("form"), [ie, ae] = x.useState(/* @__PURE__ */ new Set()), oe = _o(), se = Array.from(ie).map((e) => e.props.value).join(";"), ce = x.useCallback((e) => {
		ae((t) => new Set(t).add(e));
	}, []), le = x.useCallback((e) => {
		ae((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), ue = {
		required: p,
		trigger: _,
		onTriggerChange: v,
		valueNode: y,
		onValueNodeChange: b,
		valueNodeHasChildren: C,
		onValueNodeHasChildrenChange: w,
		contentId: oe,
		value: D,
		onValueChange: te,
		hasConsumerStoppedPropagationRef: k,
		userSelection: ne,
		onUserSelect: A,
		open: ee,
		onOpenChange: E,
		dir: T,
		triggerPointerDownPosRef: O,
		disabled: f,
		name: u,
		autoComplete: d,
		form: m,
		nativeOptions: ie,
		nativeSelectKey: se,
		isFormControl: M
	};
	return /* @__PURE__ */ (0, S.jsx)(Bc, {
		...g,
		children: /* @__PURE__ */ (0, S.jsx)(eh, {
			scope: t,
			...ue,
			children: /* @__PURE__ */ (0, S.jsx)(Jm.Provider, {
				scope: t,
				children: /* @__PURE__ */ (0, S.jsx)(nh, {
					scope: t,
					onNativeOptionAdd: ce,
					onNativeOptionRemove: le,
					children: Jh(h) ? h(ue) : n
				})
			})
		})
	});
}
$(ih, "SelectProvider");
var ah = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(ih, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [n, e ? /* @__PURE__ */ (0, S.jsx)(qh, { __scopeSelect: t }) : null] })
	});
}, "Select"), oh = "SelectTrigger", sh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = $m(n), o = th(oh, n), s = o.disabled || r, c = L(t, o.onTriggerChange), l = Ym(n), u = x.useRef("touch"), [d, f, p] = Xh((e) => {
		let t = l().filter((e) => !e.disabled), n = Zh(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onUserSelect(n.value);
	}), m = /* @__PURE__ */ $((e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, S.jsx)(Hc, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, S.jsx)(H.button, {
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
			"data-placeholder": Yh(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: G(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: G(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: G(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && (o.hasConsumerStoppedPropagationRef.current = e.isPropagationStopped(), f(e.key)), !(t && e.key === " ") && Gm.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), ch = "SelectValue", lh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = th(ch, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = L(t, c.onValueNodeChange);
	Ui(() => {
		l(u);
	}, [l, u]);
	let f = Yh(c.value);
	return /* @__PURE__ */ (0, S.jsx)(H.span, {
		...s,
		asChild: !f && s.asChild,
		ref: d,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, S.jsx)(x.Fragment, { children: f ? o : a }, f ? "placeholder" : "value")
	});
}, "SelectValue")), uh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, S.jsx)(H.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [dh, fh] = Zm("SelectPortal", { forceMount: void 0 }), ph = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(dh, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, S.jsx)(Zc, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), mh = "SelectContent", hh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = fh(mh, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = th(mh, e.__scopeSelect), [o, s] = x.useState();
	return Ui(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, S.jsx)(tl, {
		present: r || a.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, S.jsx)(xh, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, S.jsx)(gh, {
			...i,
			fragment: o
		})
	});
}, "SelectContent")), gh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? pt.createPortal(/* @__PURE__ */ (0, S.jsx)(vh, {
		scope: n,
		children: /* @__PURE__ */ (0, S.jsx)(Jm.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, S.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), _h = 10, [vh, yh] = Zm(mh), bh = /* @__PURE__ */ fn("SelectContent.RemoveScroll"), xh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n } = e, { position: r = Um.ItemAligned, onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: m, hideWhenDetached: h, avoidCollisions: g, ..._ } = e, v = th(mh, n), [y, b] = x.useState(null), [C, w] = x.useState(null), T = L(t, b), [ee, E] = x.useState(null), [D, te] = x.useState(null), O = Ym(n), [k, ne] = x.useState(!1), re = x.useRef(!1), A = x.useRef(!1), j = x.useRef(!1);
	x.useEffect(() => {
		if (y) return Kl(y);
	}, [y]), Ua();
	let M = x.useCallback((e) => {
		let [t, ...n] = O().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && C && (C.scrollTop = 0), n === r && C && (C.scrollTop = C.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [O, C]), ie = x.useCallback(() => M([ee, y]), [
		M,
		ee,
		y
	]);
	x.useEffect(() => {
		k && ie();
	}, [k, ie]);
	let { onOpenChange: ae, triggerPointerDownPosRef: oe } = v;
	x.useEffect(() => {
		if (y) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ $((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (oe.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (oe.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ $((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(y) || ae(!1), document.removeEventListener("pointermove", t), oe.current = null;
			}, "handlePointerUp");
			return oe.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		y,
		ae,
		oe
	]), x.useEffect(() => {
		let e = /* @__PURE__ */ $(() => ae(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [ae]);
	let [se, ce] = Xh((e) => {
		let t = O().filter((e) => !e.disabled), n = Zh(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), le = x.useCallback((e, t, n) => {
		let r = !A.current;
		r && (A.current = !0);
		let i = !re.current && !n;
		v.value !== void 0 && v.value === t || i ? (E(e), i && (re.current = !0)) : r && E(e);
	}, [v.value]), ue = x.useCallback(() => y?.focus(), [y]), de = x.useCallback((e, t, n) => {
		if (!e) return;
		let r = !j.current;
		r && (j.current = !0);
		let i = !re.current && !n;
		(v.value !== void 0 && v.value === t || i || r) && te(e);
	}, [v.value]), fe = r === Um.Popper ? Ch : Sh, pe = fe === Ch ? {
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
	return /* @__PURE__ */ (0, S.jsx)(vh, {
		scope: n,
		content: y,
		viewport: C,
		onViewportChange: w,
		itemRefCallback: le,
		selectedItem: ee,
		onItemLeave: ue,
		itemTextRefCallback: de,
		focusSelectedItem: ie,
		selectedItemText: D,
		position: r,
		isPositioned: k,
		searchRef: se,
		children: /* @__PURE__ */ (0, S.jsx)(X, {
			as: bh,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, S.jsx)(Xa, {
				asChild: !0,
				trapped: v.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: G(i, (e) => {
					v.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, S.jsx)(ja, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => v.onOpenChange(!1),
					children: /* @__PURE__ */ (0, S.jsx)(fe, {
						role: "listbox",
						id: v.contentId,
						"data-state": v.open ? "open" : "closed",
						dir: v.dir,
						onContextMenu: (e) => e.preventDefault(),
						..._,
						...pe,
						onPlaced: () => ne(!0),
						ref: T,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							..._.style
						},
						onKeyDown: G(_.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && ce(e.key), [
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
								setTimeout(() => M(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl")), Sh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = th(mh, n), o = yh(mh, n), [s, c] = x.useState(null), [l, u] = x.useState(null), d = L(t, u), f = Ym(n), p = x.useRef(!1), m = x.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = x.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== Wm.RTL) {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - _h, d = Bm(a, [_h, Math.max(_h, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - _h, d = Bm(a, [_h, Math.max(_h, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - _h * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), ee = e.top + e.height / 2 - _h, E = c - ee, D = g.offsetHeight / 2, te = g.offsetTop + D, O = m + v + te, k = x - O;
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
			s.style.margin = `${_h}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
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
	Ui(() => y(), [y]);
	let [b, C] = x.useState();
	Ui(() => {
		l && C(window.getComputedStyle(l).zIndex);
	}, [l]);
	let w = x.useCallback((e) => {
		e && m.current === !0 && (y(), v?.(), m.current = !1);
	}, [y, v]);
	return /* @__PURE__ */ (0, S.jsx)(wh, {
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
			children: /* @__PURE__ */ (0, S.jsx)(H.div, {
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
}, "SelectItemAlignedPosition")), Ch = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = _h, ...a } = e, o = $m(n);
	return /* @__PURE__ */ (0, S.jsx)(Kc, {
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
}, "SelectPopperPosition")), [wh, Th] = Zm(mh, {}), Eh = "SelectViewport", Dh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = yh(Eh, n), o = Th(Eh, n), s = L(t, a.onViewportChange), c = x.useRef(0);
	return /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ (0, S.jsx)(Jm.Slot, {
		scope: n,
		children: /* @__PURE__ */ (0, S.jsx)(H.div, {
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
			onScroll: G(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - _h * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
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
}, "SelectViewport")), [Oh, kh] = Zm("SelectGroup"), Ah = "SelectLabel", jh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e, i = kh(Ah, n);
	return /* @__PURE__ */ (0, S.jsx)(H.div, {
		id: i.id,
		...r,
		ref: t
	});
}, "SelectLabel")), Mh = "SelectItem", [Nh, Ph] = Zm(Mh), Fh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = th(Mh, n), c = yh(Mh, n), l = s.value === r, [u, d] = x.useState(a ?? ""), [f, p] = x.useState(!1), m = L(t, Ca((e) => c.itemRefCallback?.(e, r, i))), h = _o(), g = x.useRef("touch");
	function _(e) {
		s.hasConsumerStoppedPropagationRef.current = e.isPropagationStopped(), s.onUserSelect(r), s.onOpenChange(!1);
	}
	return $(_, "handleSelect"), /* @__PURE__ */ (0, S.jsx)(Nh, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: x.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, S.jsx)(Jm.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ (0, S.jsx)(H.div, {
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
				onFocus: G(o.onFocus, () => p(!0)),
				onBlur: G(o.onBlur, () => p(!1)),
				onClick: G(o.onClick, (e) => {
					i || g.current !== "mouse" && _(e);
				}),
				onPointerUp: G(o.onPointerUp, (e) => {
					i || g.current === "mouse" && _(e);
				}),
				onPointerDown: G(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: G(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: G(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: G(o.onKeyDown, (e) => {
					i || e.target !== e.currentTarget || (c.searchRef?.current === "" || e.key !== " ") && (Km.includes(e.key) && _(e), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), Ih = "SelectItemText", Lh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = th(Ih, n), s = yh(Ih, n), c = Ph(Ih, n), l = rh(Ih, n), [u, d] = x.useState(null), f = Ca((e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = L(t, d, c.onItemTextChange, f), m = u?.textContent, h = x.useMemo(() => /* @__PURE__ */ (0, S.jsx)("option", {
		value: c.value,
		disabled: c.disabled,
		children: m
	}, c.value), [
		c.disabled,
		c.value,
		m
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = l;
	return Ui(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(H.span, {
		id: c.textId,
		...a,
		ref: p
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren && !Yh(o.value) ? pt.createPortal(a.children, o.valueNode) : null] });
}, "SelectItemText")), Rh = "SelectItemIndicator", zh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return Ph(Rh, n).isSelected ? /* @__PURE__ */ (0, S.jsx)(H.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), Bh = "SelectScrollUpButton", Vh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = yh(Bh, e.__scopeSelect), r = Th(Bh, e.__scopeSelect), [i, a] = x.useState(!1), o = L(t, r.onScrollButtonChange);
	return Ui(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				a(e);
			};
			$(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, S.jsx)(Wh, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), Hh = "SelectScrollDownButton", Uh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = yh(Hh, e.__scopeSelect), r = Th(Hh, e.__scopeSelect), [i, a] = x.useState(!1), o = L(t, r.onScrollButtonChange);
	return Ui(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				a(n);
			};
			$(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, S.jsx)(Wh, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), Wh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = yh("SelectScrollButton", n), o = x.useRef(null), s = Ym(n), c = x.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return x.useEffect(() => () => c(), [c]), Ui(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ (0, S.jsx)(H.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: G(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: G(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: G(i.onPointerLeave, () => {
			c();
		})
	});
}, "SelectScrollButtonImpl")), Gh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ (0, S.jsx)(H.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
}, "SelectSeparator")), Kh = "SelectBubbleInput", qh = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function({ __scopeSelect: e, ...t }, n) {
	let r = th(Kh, e), { value: i, onValueChange: a, required: o, disabled: s, name: c, autoComplete: l, form: u, userSelection: d } = r, { nativeOptions: f, nativeSelectKey: p } = r, m = x.useRef(null), h = L(n, m), g = i ?? "", _ = x.useRef(g), v = x.useRef(d), y = x.useRef(!1), b = Array.from(f).some((e) => (e.props.value ?? "") === "");
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
	}, [g, d]), /* @__PURE__ */ (0, S.jsxs)(H.select, {
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
			...Vm,
			...t.style
		},
		ref: h,
		defaultValue: g,
		children: [Yh(i) && !b ? /* @__PURE__ */ (0, S.jsx)("option", { value: "" }) : null, Array.from(f)]
	}, p);
}, "SelectBubbleInput"));
function Jh(e) {
	return typeof e == "function";
}
$(Jh, "isFunction");
function Yh(e) {
	return e === "" || e === void 0;
}
$(Yh, "shouldShowPlaceholder");
function Xh(e) {
	let t = Ca(e), n = x.useRef(""), r = x.useRef(0), i = x.useCallback((e) => {
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
$(Xh, "useTypeaheadSearch");
function Zh(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Qh(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
$(Zh, "findNextItem");
function Qh(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$(Qh, "wrapArray");
// src/components/ui/select.tsx
var $h = ah, eg = lh, tg = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsxs)(sh, {
	ref: r,
	className: V("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ (0, S.jsx)(uh, {
		asChild: !0,
		children: /* @__PURE__ */ (0, S.jsx)(Hf, { className: "h-4 w-4 opacity-50" })
	})]
}));
tg.displayName = sh.displayName;
var ng = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Vh, {
	ref: n,
	className: V("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ (0, S.jsx)(Wf, { className: "h-4 w-4" })
}));
ng.displayName = Vh.displayName;
var rg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Uh, {
	ref: n,
	className: V("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ (0, S.jsx)(Hf, { className: "h-4 w-4" })
}));
rg.displayName = Uh.displayName;
var ig = x.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ (0, S.jsx)(ph, {
	container: Ai(),
	children: /* @__PURE__ */ (0, S.jsxs)(hh, {
		ref: i,
		className: V("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		...r,
		children: [
			/* @__PURE__ */ (0, S.jsx)(ng, {}),
			/* @__PURE__ */ (0, S.jsx)(Dh, {
				className: V("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
				children: t
			}),
			/* @__PURE__ */ (0, S.jsx)(rg, {})
		]
	})
}));
ig.displayName = hh.displayName;
var ag = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(jh, {
	ref: n,
	className: V("px-2 py-1.5 text-sm font-semibold", e),
	...t
}));
ag.displayName = jh.displayName;
var og = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, S.jsxs)(Fh, {
	ref: r,
	className: V("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, S.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, S.jsx)(zh, { children: /* @__PURE__ */ (0, S.jsx)(Q, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, S.jsx)(Lh, { children: t })]
}));
og.displayName = Fh.displayName;
var sg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Gh, {
	ref: n,
	className: V("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
// src/components/accounts-ui.tsx
sg.displayName = Gh.displayName, Yt();
function cg({ status: e, days: t }) {
	return e === "free" ? /* @__PURE__ */ (0, S.jsx)(gi, {
		variant: "outline",
		children: "Free"
	}) : e === "none" ? /* @__PURE__ */ (0, S.jsx)(gi, {
		variant: "outline",
		children: "No date"
	}) : e === "overdue" ? /* @__PURE__ */ (0, S.jsxs)(gi, {
		variant: "destructive",
		children: [
			"Overdue ",
			t,
			"d"
		]
	}) : e === "due_soon" ? /* @__PURE__ */ (0, S.jsxs)(gi, {
		className: "bg-amber-500 hover:bg-amber-500/90 text-white",
		children: [
			"Due in ",
			t,
			"d"
		]
	}) : /* @__PURE__ */ (0, S.jsx)(gi, {
		variant: "secondary",
		children: "Up to date"
	});
}
function lg({ members: e }) {
	let t = w(), n = ut({
		queryKey: ["accounts"],
		queryFn: () => Promise.resolve().then(() => (Rp(), Sp)).then((e) => e.listAccounts())
	}), [r, i] = (0, x.useState)(!1), [a, o] = (0, x.useState)(null), [s, c] = (0, x.useState)(null), [l, u] = (0, x.useState)(null), d = dt({
		mutationFn: (e) => Op({
			accountId: e,
			expectedDue: n.data?.find((t) => t.id === e)?.next_due_date ?? null
		}),
		onSuccess: () => {
			t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["account-payments"] }), t.invalidateQueries({ queryKey: ["dashboard-recent-payments"] }), F.success("One month paid");
		},
		onError: (e) => F.error(e.message)
	}), f = dt({
		mutationFn: (e) => Pp(e),
		onSuccess: () => {
			t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["members"] }), F.success("Account deleted");
		},
		onError: (e) => F.error(e.message)
	}), p = n.data ?? [], m = (0, x.useMemo)(() => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) n.account_id && t.set(n.account_id, (t.get(n.account_id) ?? 0) + 1);
		return t;
	}, [e]), h = p.map((e) => ({
		a: e,
		s: Ep(e)
	})).filter((e) => e.s.status === "overdue");
	return /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [
		h.length > 0 && /* @__PURE__ */ (0, S.jsxs)(_i, {
			className: "border-destructive/50",
			children: [/* @__PURE__ */ (0, S.jsxs)(vi, { children: [/* @__PURE__ */ (0, S.jsxs)(yi, {
				className: "flex items-center gap-2 text-destructive",
				children: [
					/* @__PURE__ */ (0, S.jsx)(Gf, { className: "h-4 w-4" }),
					" Overdue accounts (",
					h.length,
					")"
				]
			}), /* @__PURE__ */ (0, S.jsx)(bi, { children: "Billing accounts past their renewal date." })] }), /* @__PURE__ */ (0, S.jsx)(xi, { children: /* @__PURE__ */ (0, S.jsxs)(Ci, { children: [/* @__PURE__ */ (0, S.jsx)(wi, { children: /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
				/* @__PURE__ */ (0, S.jsx)(U, { children: "Account" }),
				/* @__PURE__ */ (0, S.jsx)(U, { children: "Amount" }),
				/* @__PURE__ */ (0, S.jsx)(U, { children: "Due" }),
				/* @__PURE__ */ (0, S.jsx)(U, { children: "Late" }),
				/* @__PURE__ */ (0, S.jsx)(U, {
					className: "text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, S.jsx)(Ti, { children: h.map(({ a: e, s: t }) => /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
				/* @__PURE__ */ (0, S.jsxs)(W, {
					className: "font-medium",
					children: [e.name, /* @__PURE__ */ (0, S.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [m.get(e.id) ?? 0, " member(s)"]
					})]
				}),
				/* @__PURE__ */ (0, S.jsx)(W, { children: Dp(e.amount_cents, e.currency) }),
				/* @__PURE__ */ (0, S.jsx)(W, {
					className: "font-mono text-xs",
					children: e.next_due_date ?? "—"
				}),
				/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsxs)(gi, {
					variant: "destructive",
					children: [
						Ap(e),
						" month(s) · ",
						t.daysDiff,
						"d"
					]
				}) }),
				/* @__PURE__ */ (0, S.jsx)(W, {
					className: "text-right",
					children: /* @__PURE__ */ (0, S.jsxs)(ai, {
						size: "sm",
						variant: "outline",
						onClick: () => d.mutate(e.id),
						disabled: d.isPending,
						children: [/* @__PURE__ */ (0, S.jsx)(Kf, { className: "mr-1 h-3 w-3" }), " Mark paid"]
					})
				})
			] }, e.id)) })] }) })]
		}),
		/* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsxs)(vi, {
			className: "flex flex-row items-center justify-between space-y-0",
			children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(yi, { children: "Billing accounts" }), /* @__PURE__ */ (0, S.jsx)(bi, { children: "Group members into one bill. Each member belongs to a single account." })] }), /* @__PURE__ */ (0, S.jsxs)(ai, {
				size: "sm",
				onClick: () => i(!0),
				children: [/* @__PURE__ */ (0, S.jsx)(ip, { className: "mr-1 h-3.5 w-3.5" }), " New account"]
			})]
		}), /* @__PURE__ */ (0, S.jsx)(xi, { children: n.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading…"
		}) : n.error ? /* @__PURE__ */ (0, S.jsx)("p", {
			role: "alert",
			className: "text-sm text-destructive",
			children: n.error.message
		}) : p.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No accounts yet. Create one to group members under a single monthly bill."
		}) : /* @__PURE__ */ (0, S.jsxs)(Ci, { children: [/* @__PURE__ */ (0, S.jsx)(wi, { children: /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Name" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Members" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Amount" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Billing day" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Next due" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Status" }),
			/* @__PURE__ */ (0, S.jsx)(U, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, S.jsx)(Ti, { children: p.map((e) => {
			let t = Ep(e);
			return /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
				/* @__PURE__ */ (0, S.jsx)(W, {
					className: "font-medium",
					children: e.name
				}),
				/* @__PURE__ */ (0, S.jsx)(W, { children: m.get(e.id) ?? 0 }),
				/* @__PURE__ */ (0, S.jsx)(W, { children: e.is_free ? /* @__PURE__ */ (0, S.jsx)("span", {
					className: "text-muted-foreground",
					children: "—"
				}) : Dp(e.amount_cents, e.currency) }),
				/* @__PURE__ */ (0, S.jsx)(W, { children: e.is_free ? "—" : `Day ${e.billing_day}` }),
				/* @__PURE__ */ (0, S.jsx)(W, {
					className: "font-mono text-xs",
					children: e.next_due_date ?? "—"
				}),
				/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(cg, {
					status: t.status,
					days: t.daysDiff
				}) }),
				/* @__PURE__ */ (0, S.jsx)(W, {
					className: "text-right",
					children: /* @__PURE__ */ (0, S.jsxs)("div", {
						className: "flex justify-end gap-1",
						children: [
							!e.is_free && /* @__PURE__ */ (0, S.jsx)(ai, {
								size: "sm",
								variant: "outline",
								onClick: () => d.mutate(e.id),
								disabled: d.isPending,
								title: "Mark paid",
								children: /* @__PURE__ */ (0, S.jsx)(Kf, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(ai, {
								size: "sm",
								variant: "ghost",
								onClick: () => c(e),
								title: "Manage members",
								children: /* @__PURE__ */ (0, S.jsx)(up, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(ai, {
								size: "sm",
								variant: "ghost",
								onClick: () => u(e),
								title: "History",
								children: /* @__PURE__ */ (0, S.jsx)(ep, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(ai, {
								size: "sm",
								variant: "ghost",
								onClick: () => o(e),
								title: "Edit",
								children: /* @__PURE__ */ (0, S.jsx)(rp, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, S.jsx)(ai, {
								size: "sm",
								variant: "ghost",
								className: "text-destructive hover:text-destructive",
								onClick: () => {
									confirm(`Delete account "${e.name}"? Members will be unassigned. Payment history will be removed.`) && f.mutate(e.id);
								},
								title: "Delete",
								children: /* @__PURE__ */ (0, S.jsx)(sp, { className: "h-3 w-3" })
							})
						]
					})
				})
			] }, e.id);
		}) })] }) })] }),
		/* @__PURE__ */ (0, S.jsx)(ug, {
			open: r,
			onOpenChange: i,
			mode: "create",
			members: e,
			onSaved: () => {
				t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["members"] });
			}
		}),
		a && /* @__PURE__ */ (0, S.jsx)(ug, {
			open: !!a,
			onOpenChange: (e) => !e && o(null),
			mode: "edit",
			account: a,
			members: e,
			onSaved: () => {
				t.invalidateQueries({ queryKey: ["accounts"] }), t.invalidateQueries({ queryKey: ["members"] });
			}
		}, a.id),
		s && /* @__PURE__ */ (0, S.jsx)(dg, {
			open: !!s,
			onOpenChange: (e) => !e && c(null),
			account: s,
			members: e,
			onSaved: () => {
				t.invalidateQueries({ queryKey: ["members"] }), t.invalidateQueries({ queryKey: ["accounts"] });
			}
		}, s.id),
		l && /* @__PURE__ */ (0, S.jsx)(fg, {
			open: !!l,
			onOpenChange: (e) => !e && u(null),
			account: l
		}, l.id)
	] });
}
function ug({ open: e, onOpenChange: t, mode: n, account: r, members: i, onSaved: a }) {
	let [o, s] = (0, x.useState)(r?.name ?? ""), [c, l] = (0, x.useState)(r?.is_free ?? !1), [u, d] = (0, x.useState)((r?.amount_cents ?? 0) / 100), [f, p] = (0, x.useState)(r?.currency ?? "USD"), [m, h] = (0, x.useState)(r?.billing_day ?? (/* @__PURE__ */ new Date()).getDate()), [g, _] = (0, x.useState)(r?.next_due_date ?? ""), [v, y] = (0, x.useState)(/* @__PURE__ */ new Set()), [b, C] = (0, x.useState)(!1);
	(0, x.useEffect)(() => {
		e && n === "create" && y(/* @__PURE__ */ new Set());
	}, [e, n]);
	let w = async () => {
		if (!o.trim()) F.error("Name is required");
		else {
			C(!0);
			try {
				n === "create" ? (await Mp({
					name: o.trim(),
					isFree: c,
					amountCents: Math.round(u * 100),
					currency: f.toUpperCase().trim() || "USD",
					billingDay: Math.max(1, Math.min(31, Math.round(m))),
					memberIds: Array.from(v),
					nextDueDate: g || void 0
				}), F.success("Account created")) : r && (await Np({
					id: r.id,
					name: o.trim(),
					isFree: c,
					amountCents: Math.round(u * 100),
					currency: f.toUpperCase().trim() || "USD",
					billingDay: Math.max(1, Math.min(31, Math.round(m))),
					nextDueDate: g || void 0
				}), F.success("Account updated")), a(), t(!1);
			} catch (e) {
				F.error(e instanceof Error ? e.message : String(e));
			} finally {
				C(!1);
			}
		}
	}, T = n === "create" ? i.filter((e) => !e.account_id) : [];
	return /* @__PURE__ */ (0, S.jsx)(Am, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Nm, {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, S.jsxs)(Pm, { children: [/* @__PURE__ */ (0, S.jsx)(Im, { children: n === "create" ? "New account" : `Edit — ${r?.name}` }), /* @__PURE__ */ (0, S.jsx)(Lm, { children: "One bill that covers one or more members." })] }),
				/* @__PURE__ */ (0, S.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(pi, {
							htmlFor: "name",
							children: "Account name"
						}), /* @__PURE__ */ (0, S.jsx)(oi, {
							id: "name",
							value: o,
							onChange: (e) => s(e.target.value),
							placeholder: "Maita Household"
						})] }),
						/* @__PURE__ */ (0, S.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(pi, {
								htmlFor: "free",
								children: "Free (no charge)"
							}), /* @__PURE__ */ (0, S.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "For family or comped accounts."
							})] }), /* @__PURE__ */ (0, S.jsx)(nm, {
								id: "free",
								checked: c,
								onCheckedChange: l
							})]
						}),
						/* @__PURE__ */ (0, S.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(pi, {
								htmlFor: "amount",
								children: "Monthly amount"
							}), /* @__PURE__ */ (0, S.jsx)(oi, {
								id: "amount",
								type: "number",
								step: "0.01",
								min: "0",
								value: u,
								onChange: (e) => d(Number(e.target.value)),
								disabled: c
							})] }), /* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsx)(pi, {
								htmlFor: "currency",
								children: "Currency"
							}), /* @__PURE__ */ (0, S.jsx)(oi, {
								id: "currency",
								value: f,
								maxLength: 3,
								onChange: (e) => p(e.target.value),
								disabled: c
							})] })]
						}),
						/* @__PURE__ */ (0, S.jsxs)("div", { children: [
							/* @__PURE__ */ (0, S.jsx)(pi, {
								htmlFor: "day",
								children: "Billing day (1–31)"
							}),
							/* @__PURE__ */ (0, S.jsx)(oi, {
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
								/* @__PURE__ */ (0, S.jsx)(pi, {
									htmlFor: "next-due",
									children: "Next unpaid month starts"
								}),
								/* @__PURE__ */ (0, S.jsx)(oi, {
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
							/* @__PURE__ */ (0, S.jsx)(pi, { children: "Add members" }),
							/* @__PURE__ */ (0, S.jsx)("p", {
								className: "text-xs text-muted-foreground mb-2",
								children: "Only members without an account are shown. You can change members later."
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
				/* @__PURE__ */ (0, S.jsxs)(Fm, { children: [/* @__PURE__ */ (0, S.jsx)(ai, {
					variant: "ghost",
					onClick: () => t(!1),
					disabled: b,
					children: "Cancel"
				}), /* @__PURE__ */ (0, S.jsx)(ai, {
					onClick: w,
					disabled: b,
					children: b ? "Saving…" : "Save"
				})] })
			]
		})
	});
}
function dg({ open: e, onOpenChange: t, account: n, members: r, onSaved: i }) {
	let [a, o] = (0, x.useState)(new Set(r.filter((e) => e.account_id === n.id).map((e) => e.id))), [s, c] = (0, x.useState)(!1), l = async () => {
		c(!0);
		try {
			await Ip(n.id, Array.from(a)), F.success("Members updated"), i(), t(!1);
		} catch (e) {
			F.error(e instanceof Error ? e.message : String(e));
		} finally {
			c(!1);
		}
	}, u = r.filter((e) => !e.account_id || e.account_id === n.id);
	return /* @__PURE__ */ (0, S.jsx)(Am, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Nm, {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ (0, S.jsxs)(Pm, { children: [/* @__PURE__ */ (0, S.jsxs)(Im, { children: ["Members — ", n.name] }), /* @__PURE__ */ (0, S.jsx)(Lm, { children: "Check who belongs to this account. Members already on another account aren't shown." })] }),
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
				/* @__PURE__ */ (0, S.jsxs)(Fm, { children: [/* @__PURE__ */ (0, S.jsx)(ai, {
					variant: "ghost",
					onClick: () => t(!1),
					disabled: s,
					children: "Cancel"
				}), /* @__PURE__ */ (0, S.jsx)(ai, {
					onClick: l,
					disabled: s,
					children: s ? "Saving…" : "Save"
				})] })
			]
		})
	});
}
function fg({ open: e, onOpenChange: t, account: n }) {
	let r = w(), i = ut({
		queryKey: ["account-payments", n.id],
		queryFn: () => kp(n.id),
		enabled: e
	}), a = dt({
		mutationFn: (e) => Lp(e),
		onSuccess: () => {
			r.invalidateQueries({ queryKey: ["account-payments", n.id] }), r.invalidateQueries({ queryKey: ["accounts"] }), r.invalidateQueries({ queryKey: ["dashboard-recent-payments"] }), F.success("Payment undone; due date restored");
		},
		onError: (e) => F.error(e.message)
	}), o = dt({
		mutationFn: () => Op({
			accountId: n.id,
			expectedDue: (r.getQueryData(["accounts"])?.find((e) => e.id === n.id) ?? n).next_due_date
		}),
		onSuccess: () => {
			r.invalidateQueries({ queryKey: ["account-payments", n.id] }), r.invalidateQueries({ queryKey: ["accounts"] }), r.invalidateQueries({ queryKey: ["dashboard-recent-payments"] }), F.success("One month paid");
		},
		onError: (e) => F.error(e.message)
	});
	return /* @__PURE__ */ (0, S.jsx)(Am, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Nm, {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, S.jsxs)(Pm, { children: [/* @__PURE__ */ (0, S.jsxs)(Im, { children: ["Payment history — ", n.name] }), /* @__PURE__ */ (0, S.jsx)(Lm, { children: "All recorded payments for this account." })] }),
				i.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Loading…"
				}) : (i.data ?? []).length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No payments recorded yet."
				}) : /* @__PURE__ */ (0, S.jsxs)(Ci, { children: [/* @__PURE__ */ (0, S.jsx)(wi, { children: /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
					/* @__PURE__ */ (0, S.jsx)(U, { children: "Paid" }),
					/* @__PURE__ */ (0, S.jsx)(U, { children: "Amount" }),
					/* @__PURE__ */ (0, S.jsx)(U, { children: "Period" }),
					/* @__PURE__ */ (0, S.jsx)(U, { children: "Note" }),
					/* @__PURE__ */ (0, S.jsx)(U, {})
				] }) }), /* @__PURE__ */ (0, S.jsx)(Ti, { children: (i.data ?? []).map((e, t) => /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
					/* @__PURE__ */ (0, S.jsx)(W, {
						className: "font-mono text-xs",
						children: new Date(e.paid_at).toLocaleDateString()
					}),
					/* @__PURE__ */ (0, S.jsx)(W, { children: Dp(e.amount_cents, e.currency) }),
					/* @__PURE__ */ (0, S.jsxs)(W, {
						className: "font-mono text-xs",
						children: [
							e.period_start ?? "—",
							" → ",
							e.period_end ?? "—"
						]
					}),
					/* @__PURE__ */ (0, S.jsx)(W, {
						className: "text-xs",
						children: e.note ?? ""
					}),
					/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(ai, {
						size: "sm",
						variant: "ghost",
						className: "text-destructive hover:text-destructive",
						"aria-label": "Undo latest payment",
						disabled: a.isPending || t > 0,
						title: t === 0 ? "Undo latest payment" : "Undo newer payments first",
						onClick: () => {
							confirm("Undo this payment and restore its due date? Only the latest payment can be undone.") && a.mutate(e.id);
						},
						children: /* @__PURE__ */ (0, S.jsx)(sp, { className: "h-3 w-3" })
					}) })
				] }, e.id)) })] }),
				/* @__PURE__ */ (0, S.jsxs)(Fm, { children: [!n.is_free && /* @__PURE__ */ (0, S.jsx)(ai, {
					variant: "outline",
					onClick: () => o.mutate(),
					disabled: o.isPending,
					children: "Record payment now"
				}), /* @__PURE__ */ (0, S.jsx)(ai, {
					onClick: () => t(!1),
					children: "Close"
				})] })
			]
		})
	});
}
function pg({ member: e, accounts: t, onChanged: n }) {
	let [r, i] = (0, x.useState)(!1);
	return /* @__PURE__ */ (0, S.jsxs)($h, {
		value: e.account_id ?? "__none__",
		onValueChange: async (t) => {
			i(!0);
			try {
				let r = t === "__none__" ? null : t, { error: i } = await I.from("plex_home_members").update({ account_id: r }).eq("id", e.id);
				if (i) throw i;
				n();
			} catch (e) {
				F.error(e instanceof Error ? e.message : String(e));
			} finally {
				i(!1);
			}
		},
		disabled: r,
		children: [/* @__PURE__ */ (0, S.jsx)(tg, {
			className: "h-8 w-[180px]",
			children: /* @__PURE__ */ (0, S.jsx)(eg, { placeholder: "Unassigned" })
		}), /* @__PURE__ */ (0, S.jsxs)(ig, { children: [/* @__PURE__ */ (0, S.jsx)(og, {
			value: "__none__",
			children: "— Unassigned —"
		}), t.map((e) => /* @__PURE__ */ (0, S.jsxs)(og, {
			value: e.id,
			children: [e.name, e.is_free ? " (Free)" : ""]
		}, e.id))] })]
	});
}
// node_modules/@radix-ui/react-tabs/dist/index.mjs
var mg = Object.defineProperty, hg = (e, t) => mg(e, "name", {
	value: t,
	configurable: !0
}), gg = {
	Automatic: "automatic",
	Manual: "manual"
}, _g = "Tabs", [vg, yg] = /* @__PURE__ */ Vi(_g, [wl]), bg = wl(), [xg, Sg] = vg(_g), Cg = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ hg(function(e, t) {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = gg.Automatic, ...l } = e, u = ya(s), [d, f] = K({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: _g
	});
	return /* @__PURE__ */ (0, S.jsx)(xg, {
		scope: n,
		baseId: _o(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ (0, S.jsx)(H.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
}, "Tabs")), wg = "TabsList", Tg = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ hg(function(e, t) {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Sg(wg, n), o = bg(n);
	return /* @__PURE__ */ (0, S.jsx)(kl, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, S.jsx)(H.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
}, "TabsList")), Eg = "TabsTrigger", Dg = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ hg(function(e, t) {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Sg(Eg, n), s = bg(n), c = Ag(o.baseId, r), l = jg(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, S.jsx)(Ml, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, S.jsx)(H.button, {
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
			onMouseDown: G(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? (e.currentTarget.focus(), o.onValueChange(r)) : e.preventDefault();
			}),
			onKeyDown: G(e.onKeyDown, (e) => {
				i || e.target !== e.currentTarget || [" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: G(e.onFocus, () => {
				let e = o.activationMode !== gg.Manual;
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
}, "TabsTrigger")), Og = "TabsContent", kg = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ hg(function(e, t) {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, s = Sg(Og, n), c = Ag(s.baseId, r), l = jg(s.baseId, r), u = r === s.value, d = x.useRef(u);
	return x.useEffect(() => {
		let e = requestAnimationFrame(() => d.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, S.jsx)(tl, {
		present: i || u,
		children: ({ present: n }) => /* @__PURE__ */ (0, S.jsx)(H.div, {
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
function Ag(e, t) {
	return `${e}-trigger-${t}`;
}
hg(Ag, "makeTriggerId");
function jg(e, t) {
	return `${e}-content-${t}`;
}
hg(jg, "makeContentId");
// src/components/ui/tabs.tsx
var Mg = Cg, Ng = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Tg, {
	ref: n,
	className: V("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
	...t
}));
Ng.displayName = Tg.displayName;
var Pg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(Dg, {
	ref: n,
	className: V("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", e),
	...t
}));
Pg.displayName = Dg.displayName;
var Fg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, S.jsx)(kg, {
	ref: n,
	className: V("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
	...t
}));
Fg.displayName = kg.displayName, Yt(), Rp();
function Ig({ members: e, accounts: t }) {
	let n = ut({
		queryKey: ["dashboard-recent-payments"],
		queryFn: async () => {
			let { data: e, error: t } = await I.from("plex_account_payments").select("id, account_id, amount_cents, currency, paid_at").order("paid_at", { ascending: !1 }).limit(5);
			if (t) throw t;
			return e ?? [];
		}
	}), r = e.filter((e) => e.status !== "removed"), i = e.filter((e) => e.status === "removed"), a = t.filter((e) => !e.is_free), o = t.filter((e) => e.is_free), s = (e) => {
		let t = {};
		for (let n of e) t[n.currency] = (t[n.currency] ?? 0) + n.amount_cents;
		return Object.entries(t).map(([e, t]) => Dp(t, e)).join(" · ") || "—";
	}, c = t.map((e) => ({
		a: e,
		...Ep(e)
	})), l = c.filter((e) => e.status === "overdue"), u = s(l.map((e) => ({
		...e.a,
		amount_cents: e.a.amount_cents * Ap(e.a)
	}))), d = c.filter((e) => e.status === "due_soon" || e.status === "paid" && e.daysDiff <= 7).sort((e, t) => e.daysDiff - t.daysDiff).slice(0, 5), f = new Map(t.map((e) => [e.id, e])), p = [...e].sort((e, t) => e.created_at < t.created_at ? 1 : -1).slice(0, 5);
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, S.jsx)(Lg, {
						icon: /* @__PURE__ */ (0, S.jsx)(up, { className: "h-4 w-4" }),
						label: "Members",
						value: `${r.length} active`,
						hint: `${i.length} inactive · ${e.length} total`
					}),
					/* @__PURE__ */ (0, S.jsx)(Lg, {
						icon: /* @__PURE__ */ (0, S.jsx)(qf, { className: "h-4 w-4" }),
						label: "Monthly billing",
						value: s(a),
						hint: `${a.length} paying · ${o.length} free`
					}),
					/* @__PURE__ */ (0, S.jsx)(Lg, {
						icon: /* @__PURE__ */ (0, S.jsx)(cp, { className: "h-4 w-4" }),
						label: "Overdue",
						value: String(l.length),
						hint: l.length ? `${u} overdue` : "All caught up",
						tone: l.length ? "danger" : "ok"
					}),
					/* @__PURE__ */ (0, S.jsx)(Lg, {
						icon: /* @__PURE__ */ (0, S.jsx)(Vf, { className: "h-4 w-4" }),
						label: "Accounts",
						value: String(t.length),
						hint: `${d.length} due within 7 days`
					})
				]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsxs)(vi, { children: [/* @__PURE__ */ (0, S.jsxs)(yi, {
					className: "flex items-center gap-2 text-base",
					children: [/* @__PURE__ */ (0, S.jsx)(Vf, { className: "h-4 w-4" }), " Coming up"]
				}), /* @__PURE__ */ (0, S.jsx)(bi, { children: "Accounts due in the next 7 days." })] }), /* @__PURE__ */ (0, S.jsx)(xi, { children: d.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
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
								Dp(e.amount_cents, e.currency)
							]
						})] }), /* @__PURE__ */ (0, S.jsx)(gi, {
							variant: n === "due_soon" ? "secondary" : "outline",
							children: t === 0 ? "Today" : `${t}d`
						})]
					}, e.id))
				}) })] }), /* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsxs)(vi, { children: [/* @__PURE__ */ (0, S.jsxs)(yi, {
					className: "flex items-center gap-2 text-base",
					children: [/* @__PURE__ */ (0, S.jsx)(Bf, { className: "h-4 w-4" }), " Recent payments"]
				}), /* @__PURE__ */ (0, S.jsx)(bi, { children: "Last 5 recorded payments." })] }), /* @__PURE__ */ (0, S.jsx)(xi, { children: n.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
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
								children: Dp(e.amount_cents, e.currency)
							})]
						}, e.id);
					})
				}) })] })]
			}),
			/* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsx)(vi, { children: /* @__PURE__ */ (0, S.jsx)(yi, {
				className: "text-base",
				children: "Recently added members"
			}) }), /* @__PURE__ */ (0, S.jsx)(xi, { children: p.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
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
					})] }), /* @__PURE__ */ (0, S.jsx)(gi, {
						variant: "outline",
						children: e.status.replace("_", " ")
					})]
				}, e.id))
			}) })] })
		]
	});
}
function Lg({ icon: e, label: t, value: n, hint: r, tone: i }) {
	return /* @__PURE__ */ (0, S.jsx)(_i, { children: /* @__PURE__ */ (0, S.jsxs)(xi, {
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
Yt();
function Rg({ members: e }) {
	let [t, n] = (0, x.useState)(null), [r, i] = (0, x.useState)(""), a = e.filter((e) => {
		if (!r.trim()) return !0;
		let t = r.toLowerCase();
		return e.display_name.toLowerCase().includes(t) || e.email.toLowerCase().includes(t) || (e.plex_username ?? "").toLowerCase().includes(t);
	});
	return /* @__PURE__ */ (0, S.jsxs)(_i, { children: [
		/* @__PURE__ */ (0, S.jsx)(vi, { children: /* @__PURE__ */ (0, S.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, S.jsxs)("div", { children: [/* @__PURE__ */ (0, S.jsxs)(yi, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, S.jsx)(tp, { className: "h-4 w-4" }), " User credentials"]
			}), /* @__PURE__ */ (0, S.jsx)(bi, { children: "Optional Plex credentials. Visible to Home Assistant administrators; nothing is pushed to Plex." })] }), /* @__PURE__ */ (0, S.jsx)(oi, {
				className: "w-full sm:w-64",
				placeholder: "Search name, email, username…",
				value: r,
				onChange: (e) => i(e.target.value)
			})]
		}) }),
		/* @__PURE__ */ (0, S.jsx)(xi, { children: e.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No members yet."
		}) : /* @__PURE__ */ (0, S.jsxs)(Ci, { children: [/* @__PURE__ */ (0, S.jsx)(wi, { children: /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Name" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Email" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Status" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Username" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "Password" }),
			/* @__PURE__ */ (0, S.jsx)(U, { children: "PIN" }),
			/* @__PURE__ */ (0, S.jsx)(U, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, S.jsx)(Ti, { children: a.map((e) => /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
			/* @__PURE__ */ (0, S.jsx)(W, {
				className: "font-medium",
				children: e.display_name
			}),
			/* @__PURE__ */ (0, S.jsx)(W, {
				className: "font-mono text-xs",
				children: e.email
			}),
			/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(gi, {
				variant: e.status === "removed" ? "outline" : "secondary",
				children: e.status.replace("_", " ")
			}) }),
			/* @__PURE__ */ (0, S.jsx)(W, {
				className: "font-mono text-xs",
				children: e.plex_username ? /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, S.jsx)("span", { children: e.plex_username }), /* @__PURE__ */ (0, S.jsx)(Bg, { value: e.plex_username })]
				}) : /* @__PURE__ */ (0, S.jsx)("span", {
					className: "text-muted-foreground",
					children: "—"
				})
			}),
			/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(zg, { value: e.plex_password }) }),
			/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(zg, {
				value: e.plex_pin,
				short: !0
			}) }),
			/* @__PURE__ */ (0, S.jsx)(W, {
				className: "text-right",
				children: /* @__PURE__ */ (0, S.jsxs)(ai, {
					size: "sm",
					variant: "outline",
					onClick: () => n(e),
					children: [/* @__PURE__ */ (0, S.jsx)(rp, { className: "mr-1 h-3 w-3" }), " Edit"]
				})
			})
		] }, e.id)) })] }) }),
		/* @__PURE__ */ (0, S.jsx)(Vg, {
			member: t,
			onOpenChange: (e) => !e && n(null)
		})
	] });
}
function zg({ value: e, short: t }) {
	let [n, r] = (0, x.useState)(!1);
	return e ? /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ (0, S.jsx)("span", {
				className: "font-mono text-xs",
				children: n ? e : t ? "••••" : "••••••••"
			}),
			/* @__PURE__ */ (0, S.jsx)(ai, {
				size: "sm",
				variant: "ghost",
				className: "h-6 w-6 p-0",
				onClick: () => r((e) => !e),
				"aria-label": n ? "Hide" : "Show",
				children: n ? /* @__PURE__ */ (0, S.jsx)(Qf, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, S.jsx)($f, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, S.jsx)(Bg, { value: e })
		]
	}) : /* @__PURE__ */ (0, S.jsx)("span", {
		className: "text-muted-foreground",
		children: "—"
	});
}
function Bg({ value: e }) {
	return /* @__PURE__ */ (0, S.jsx)(ai, {
		size: "sm",
		variant: "ghost",
		className: "h-6 w-6 p-0",
		"aria-label": "Copy",
		onClick: () => {
			navigator.clipboard.writeText(e).then(() => F.success("Copied"), () => F.error("Copy failed"));
		},
		children: /* @__PURE__ */ (0, S.jsx)(Yf, { className: "h-3 w-3" })
	});
}
function Vg({ member: e, onOpenChange: t }) {
	let n = w(), [r, i] = (0, x.useState)(""), [a, o] = (0, x.useState)(""), [s, c] = (0, x.useState)(""), [l, u] = (0, x.useState)(""), [d, f] = (0, x.useState)(!1), p = !!e, [m, h] = (0, x.useState)(null);
	e && m !== e.id && (h(e.id), i(e.plex_username ?? ""), o(e.plex_password ?? ""), c(e.plex_pin ?? ""), u(e.credentials_note ?? ""), f(!1)), !e && m !== null && h(null);
	let g = dt({
		mutationFn: async () => {
			if (!e) return;
			let { error: t } = await I.from("plex_home_members").update({
				plex_username: r.trim() || null,
				plex_password: a || null,
				plex_pin: s.trim() || null,
				credentials_note: l.trim() || null
			}).eq("id", e.id);
			if (t) throw t;
		},
		onSuccess: () => {
			n.invalidateQueries({ queryKey: ["members"] }), F.success("Credentials saved"), t(!1);
		},
		onError: (e) => F.error(e.message)
	});
	return /* @__PURE__ */ (0, S.jsx)(Am, {
		open: p,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, S.jsxs)(Nm, { children: [
			/* @__PURE__ */ (0, S.jsxs)(Pm, { children: [/* @__PURE__ */ (0, S.jsx)(Im, { children: "Edit credentials" }), /* @__PURE__ */ (0, S.jsx)(Lm, { children: e ? `${e.display_name} · ${e.email}` : "" })] }),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(pi, {
							htmlFor: "cred-username",
							children: "Plex username"
						}), /* @__PURE__ */ (0, S.jsx)(oi, {
							id: "cred-username",
							value: r,
							onChange: (e) => i(e.target.value),
							placeholder: "alexdoe",
							autoComplete: "off"
						})]
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(pi, {
							htmlFor: "cred-password",
							children: "Password"
						}), /* @__PURE__ */ (0, S.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, S.jsx)(oi, {
								id: "cred-password",
								type: d ? "text" : "password",
								value: a,
								onChange: (e) => o(e.target.value),
								autoComplete: "new-password"
							}), /* @__PURE__ */ (0, S.jsx)(ai, {
								type: "button",
								size: "icon",
								variant: "outline",
								onClick: () => f((e) => !e),
								"aria-label": d ? "Hide password" : "Show password",
								children: d ? /* @__PURE__ */ (0, S.jsx)(Qf, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, S.jsx)($f, { className: "h-4 w-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, S.jsx)(pi, {
							htmlFor: "cred-pin",
							children: "PIN"
						}), /* @__PURE__ */ (0, S.jsx)(oi, {
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
						children: [/* @__PURE__ */ (0, S.jsx)(pi, {
							htmlFor: "cred-note",
							children: "Notes"
						}), /* @__PURE__ */ (0, S.jsx)(mi, {
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
			/* @__PURE__ */ (0, S.jsxs)(Fm, { children: [/* @__PURE__ */ (0, S.jsx)(ai, {
				variant: "outline",
				onClick: () => t(!1),
				children: "Cancel"
			}), /* @__PURE__ */ (0, S.jsx)(ai, {
				onClick: () => g.mutate(),
				disabled: g.isPending,
				children: g.isPending ? "Saving…" : "Save"
			})] })
		] })
	});
}
Yt(), Rp();
function Hg() {
	let e = w(), t = ut({
		queryKey: ["members"],
		queryFn: async () => {
			let { data: e, error: t } = await I.from("plex_home_members").select("id, display_name, email, status, invite_type, plex_user_id, notes, last_error, account_id, plex_username, plex_password, plex_pin, credentials_note, created_at").order("created_at", { ascending: !1 });
			if (t) throw t;
			return e ?? [];
		}
	}), n = ut({
		queryKey: ["accounts"],
		queryFn: jp
	}).data ?? [], r = Zt, i = Qt, a = $t, o = en, s = tn, c = nn, l = dt({
		mutationFn: (e) => i({ data: { memberId: e } }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? F.success("Plex invite sent") : F.error(`Invite failed: ${t.error}`);
		},
		onError: (e) => F.error(e.message)
	}), u = dt({
		mutationFn: (e) => c({ data: { memberId: e } }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? F.success("Invite revoked") : F.error(`Revoke failed: ${t.error}`);
		},
		onError: (e) => F.error(e.message)
	}), d = dt({
		mutationFn: (e) => a({ data: e }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? F.success("Done") : F.error(`Failed: ${t.error}`);
		},
		onError: (e) => F.error(e.message)
	}), f = dt({
		mutationFn: (e) => s({ data: e }),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? F.success("Converted — Plex invite sent") : F.error(`Convert failed: ${t.error}`);
		},
		onError: (e) => F.error(e.message)
	}), p = dt({
		mutationFn: () => o({}),
		onSuccess: (t) => {
			e.invalidateQueries({ queryKey: ["members"] }), t.ok ? F.success(`Synced — ${t.updated} updated, ${t.imported} imported`) : F.error(`Sync failed: ${t.error}`);
		},
		onError: (e) => F.error(e.message)
	}), m = async () => {
		try {
			let e = await r({});
			e.ok ? F.success("Plex token works — account authenticated. Use Sync to load members.") : F.error(`Plex token failed: ${e.error}`);
		} catch (e) {
			F.error(e instanceof Error ? e.message : String(e));
		}
	}, h = t.data ?? [], g = h.filter((e) => e.status !== "removed"), _ = h.filter((e) => e.status === "removed"), v = h.map((e) => ({
		id: e.id,
		display_name: e.display_name,
		email: e.email,
		account_id: e.account_id
	})), y = h.map((e) => ({
		id: e.id,
		display_name: e.display_name,
		email: e.email,
		status: e.status,
		account_id: e.account_id,
		created_at: e.created_at
	})), b = h.map((e) => ({
		id: e.id,
		display_name: e.display_name,
		email: e.email,
		status: e.status,
		plex_username: e.plex_username,
		plex_password: e.plex_password,
		plex_pin: e.plex_pin,
		credentials_note: e.credentials_note
	})), x = new Map(n.map((e) => [e.id, e]));
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
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, S.jsx)(ai, {
							variant: "outline",
							size: "sm",
							onClick: m,
							children: "Test token"
						}),
						/* @__PURE__ */ (0, S.jsxs)(ai, {
							variant: "outline",
							size: "sm",
							onClick: () => p.mutate(),
							disabled: p.isPending,
							children: [/* @__PURE__ */ (0, S.jsx)(ap, { className: "mr-2 h-3.5 w-3.5" }), "Sync"]
						}),
						/* @__PURE__ */ (0, S.jsx)(ai, {
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
			children: /* @__PURE__ */ (0, S.jsxs)(Mg, {
				defaultValue: "dashboard",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, S.jsxs)(Ng, {
						className: "grid w-full grid-cols-2 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, S.jsx)(Pg, {
								value: "dashboard",
								children: "Dashboard"
							}),
							/* @__PURE__ */ (0, S.jsx)(Pg, {
								value: "members",
								children: "Members"
							}),
							/* @__PURE__ */ (0, S.jsx)(Pg, {
								value: "billing",
								children: "Payment Control"
							}),
							/* @__PURE__ */ (0, S.jsx)(Pg, {
								value: "users",
								children: "User Management"
							})
						]
					}),
					/* @__PURE__ */ (0, S.jsx)(Fg, {
						value: "dashboard",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsx)(Ig, {
							members: y,
							accounts: n
						})
					}),
					/* @__PURE__ */ (0, S.jsx)(Fg, {
						value: "members",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsxs)(Mg, {
							defaultValue: "list",
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, S.jsxs)(Ng, { children: [/* @__PURE__ */ (0, S.jsx)(Pg, {
									value: "list",
									children: "Members list"
								}), /* @__PURE__ */ (0, S.jsx)(Pg, {
									value: "new",
									children: "Add new"
								})] }),
								/* @__PURE__ */ (0, S.jsx)(Fg, {
									value: "new",
									children: /* @__PURE__ */ (0, S.jsx)(Wg, { onCreated: () => e.invalidateQueries({ queryKey: ["members"] }) })
								}),
								/* @__PURE__ */ (0, S.jsxs)(Fg, {
									value: "list",
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsxs)(vi, { children: [/* @__PURE__ */ (0, S.jsx)(yi, { children: "Active members" }), /* @__PURE__ */ (0, S.jsx)(bi, { children: "People you're onboarding to your Plex Home. Assign each to a billing account." })] }), /* @__PURE__ */ (0, S.jsx)(xi, { children: t.isLoading ? /* @__PURE__ */ (0, S.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Loading…"
									}) : t.error ? /* @__PURE__ */ (0, S.jsx)("p", {
										className: "text-sm text-destructive",
										children: t.error.message
									}) : g.length === 0 ? /* @__PURE__ */ (0, S.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "No active members yet. Use \"Add new\" to get started."
									}) : /* @__PURE__ */ (0, S.jsxs)(Ci, { children: [/* @__PURE__ */ (0, S.jsx)(wi, { children: /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Name" }),
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Email" }),
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Type" }),
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Status" }),
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Account" }),
										/* @__PURE__ */ (0, S.jsx)(U, {
											className: "text-right",
											children: "Actions"
										})
									] }) }), /* @__PURE__ */ (0, S.jsx)(Ti, { children: g.map((t) => {
										let r = t.account_id ? x.get(t.account_id) : null;
										return /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
											/* @__PURE__ */ (0, S.jsx)(W, {
												className: "font-medium",
												children: t.display_name
											}),
											/* @__PURE__ */ (0, S.jsx)(W, {
												className: "font-mono text-xs",
												children: t.email
											}),
											/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(gi, {
												variant: "outline",
												children: t.invite_type === "friend" ? "Friend" : "Home"
											}) }),
											/* @__PURE__ */ (0, S.jsxs)(W, { children: [/* @__PURE__ */ (0, S.jsx)(Ug, { status: t.status }), t.last_error && /* @__PURE__ */ (0, S.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: t.last_error
											})] }),
											/* @__PURE__ */ (0, S.jsxs)(W, { children: [/* @__PURE__ */ (0, S.jsx)(pg, {
												member: {
													id: t.id,
													display_name: t.display_name,
													email: t.email,
													account_id: t.account_id
												},
												accounts: n,
												onChanged: () => {
													e.invalidateQueries({ queryKey: ["members"] }), e.invalidateQueries({ queryKey: ["accounts"] });
												}
											}), r?.is_free && /* @__PURE__ */ (0, S.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Free"
											})] }),
											/* @__PURE__ */ (0, S.jsx)(W, {
												className: "text-right",
												children: /* @__PURE__ */ (0, S.jsxs)("div", {
													className: "flex justify-end gap-1",
													children: [t.status !== "accepted" && /* @__PURE__ */ (0, S.jsxs)(ai, {
														size: "sm",
														variant: "outline",
														onClick: () => l.mutate(t.id),
														disabled: l.isPending,
														children: [/* @__PURE__ */ (0, S.jsx)(op, { className: "mr-1 h-3 w-3" }), t.status === "invited" ? "Resend" : "Invite"]
													}), /* @__PURE__ */ (0, S.jsxs)(fp, { children: [/* @__PURE__ */ (0, S.jsx)(pp, {
														asChild: !0,
														children: /* @__PURE__ */ (0, S.jsx)(ai, {
															size: "sm",
															variant: "ghost",
															children: /* @__PURE__ */ (0, S.jsx)(Xf, { className: "h-4 w-4" })
														})
													}), /* @__PURE__ */ (0, S.jsxs)(gp, {
														align: "end",
														className: "w-64",
														children: [
															t.status === "invited" && /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(_p, {
																onSelect: () => {
																	confirm(`Revoke the pending invite for ${t.display_name}?`) && u.mutate(t.id);
																},
																children: "Revoke pending invite"
															}), /* @__PURE__ */ (0, S.jsx)(xp, {})] }),
															t.invite_type === "friend" && /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [
																/* @__PURE__ */ (0, S.jsx)(bp, { children: "Convert" }),
																/* @__PURE__ */ (0, S.jsx)(_p, {
																	onSelect: () => {
																		confirm(`Promote ${t.display_name} to your Plex Home? Their library share will be removed and a Home invite will be sent.`) && f.mutate({
																			memberId: t.id,
																			toType: "home"
																		});
																	},
																	children: "Promote to Plex Home"
																}),
																/* @__PURE__ */ (0, S.jsx)(xp, {})
															] }),
															/* @__PURE__ */ (0, S.jsx)(bp, { children: "Remove" }),
															/* @__PURE__ */ (0, S.jsx)(_p, {
																onSelect: () => {
																	confirm(`Remove ${t.display_name} from your Plex Home only? Library access (friend share) is preserved if present.`) && d.mutate({
																		memberId: t.id,
																		scope: "home_only"
																	});
																},
																children: "Remove from Home only"
															}),
															/* @__PURE__ */ (0, S.jsx)(_p, {
																onSelect: () => {
																	confirm(`Revoke library access for ${t.display_name}? Their Home membership (if any) is kept.`) && d.mutate({
																		memberId: t.id,
																		scope: "friend_only"
																	});
																},
																children: "Revoke library access only"
															}),
															/* @__PURE__ */ (0, S.jsx)(_p, {
																className: "text-destructive focus:text-destructive",
																onSelect: () => {
																	confirm(`Fully remove ${t.display_name} from Plex (Home + library)? They will move to Inactive members.`) && d.mutate({
																		memberId: t.id,
																		scope: "plex"
																	});
																},
																children: "Remove completely (Home + library)"
															}),
															/* @__PURE__ */ (0, S.jsx)(xp, {}),
															/* @__PURE__ */ (0, S.jsx)(_p, {
																onSelect: () => {
																	confirm(`Remove ${t.display_name} from this panel only? Their Plex access stays untouched.`) && d.mutate({
																		memberId: t.id,
																		scope: "panel_only"
																	});
																},
																children: "Remove from panel only"
															})
														]
													})] })]
												})
											})
										] }, t.id);
									}) })] }) })] }), _.length > 0 && /* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsxs)(vi, { children: [/* @__PURE__ */ (0, S.jsx)(yi, { children: "Inactive members" }), /* @__PURE__ */ (0, S.jsx)(bi, { children: "Removed from your Plex Home and library. Re-invite to restore access or remove them from the panel entirely." })] }), /* @__PURE__ */ (0, S.jsx)(xi, { children: /* @__PURE__ */ (0, S.jsxs)(Ci, { children: [/* @__PURE__ */ (0, S.jsx)(wi, { children: /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Name" }),
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Email" }),
										/* @__PURE__ */ (0, S.jsx)(U, { children: "Last type" }),
										/* @__PURE__ */ (0, S.jsx)(U, {
											className: "text-right",
											children: "Actions"
										})
									] }) }), /* @__PURE__ */ (0, S.jsx)(Ti, { children: _.map((e) => /* @__PURE__ */ (0, S.jsxs)(Di, { children: [
										/* @__PURE__ */ (0, S.jsx)(W, {
											className: "font-medium",
											children: e.display_name
										}),
										/* @__PURE__ */ (0, S.jsx)(W, {
											className: "font-mono text-xs",
											children: e.email
										}),
										/* @__PURE__ */ (0, S.jsx)(W, { children: /* @__PURE__ */ (0, S.jsx)(gi, {
											variant: "outline",
											children: e.invite_type === "friend" ? "Friend" : "Home"
										}) }),
										/* @__PURE__ */ (0, S.jsx)(W, {
											className: "text-right",
											children: /* @__PURE__ */ (0, S.jsxs)("div", {
												className: "flex justify-end gap-1",
												children: [/* @__PURE__ */ (0, S.jsxs)(ai, {
													size: "sm",
													variant: "outline",
													onClick: () => l.mutate(e.id),
													disabled: l.isPending,
													children: [/* @__PURE__ */ (0, S.jsx)(op, { className: "mr-1 h-3 w-3" }), "Re-invite"]
												}), /* @__PURE__ */ (0, S.jsx)(ai, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:text-destructive",
													onClick: () => {
														confirm(`Permanently remove ${e.display_name} from the panel?`) && d.mutate({
															memberId: e.id,
															scope: "panel_only"
														});
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
					/* @__PURE__ */ (0, S.jsx)(Fg, {
						value: "billing",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsx)(lg, { members: v })
					}),
					/* @__PURE__ */ (0, S.jsx)(Fg, {
						value: "users",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, S.jsx)(Rg, { members: b })
					})
				]
			})
		})]
	});
}
function Ug({ status: e }) {
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
	return /* @__PURE__ */ (0, S.jsx)(gi, {
		variant: t.variant,
		children: t.label
	});
}
function Wg({ onCreated: e }) {
	let [t, n] = (0, x.useState)(""), [r, i] = (0, x.useState)(""), [a, o] = (0, x.useState)(""), [s, c] = (0, x.useState)(""), [l, u] = (0, x.useState)("home"), [d, f] = (0, x.useState)(!0), [p, m] = (0, x.useState)(!1), h = t && d ? an(t) : [];
	return /* @__PURE__ */ (0, S.jsxs)(_i, { children: [/* @__PURE__ */ (0, S.jsxs)(vi, { children: [/* @__PURE__ */ (0, S.jsxs)(yi, {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, S.jsx)(lp, { className: "h-4 w-4" }), " Add a new member"]
	}), /* @__PURE__ */ (0, S.jsxs)(bi, { children: [
		"Choose ",
		/* @__PURE__ */ (0, S.jsx)("strong", { children: "Plex Home" }),
		" (full home member, ~15 slot limit) or",
		" ",
		/* @__PURE__ */ (0, S.jsx)("strong", { children: "Friend / library share" }),
		" (no slot, just library access). If they need a new mailbox, leave \"Create Outlook address\" on and use the signup helper."
	] })] }), /* @__PURE__ */ (0, S.jsx)(xi, { children: /* @__PURE__ */ (0, S.jsxs)("form", {
		onSubmit: async (r) => {
			r.preventDefault(), m(!0);
			let { data: u } = await I.auth.getUser(), d = u.user?.id;
			if (!d) {
				F.error("Not signed in"), m(!1);
				return;
			}
			let { error: f } = await I.from("plex_home_members").insert({
				owner_id: d,
				display_name: t.trim(),
				email: a.trim().toLowerCase(),
				invite_type: l,
				notes: s.trim() || null
			});
			m(!1), f ? F.error(f.message) : (n(""), i(""), o(""), c(""), e(), F.success("Member added"));
		},
		className: "grid gap-4 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2 md:col-span-2",
				children: [/* @__PURE__ */ (0, S.jsx)(pi, { children: "Invite type" }), /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						onClick: () => u("home"),
						className: `rounded-md border px-3 py-1.5 text-sm ${l === "home" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-accent"}`,
						children: "Plex Home member"
					}), /* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						onClick: () => u("friend"),
						className: `rounded-md border px-3 py-1.5 text-sm ${l === "friend" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-accent"}`,
						children: "Friend (library share)"
					})]
				})]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, S.jsx)(pi, {
					htmlFor: "display",
					children: "Display name"
				}), /* @__PURE__ */ (0, S.jsx)(oi, {
					id: "display",
					required: !0,
					value: t,
					onChange: (e) => n(e.target.value),
					placeholder: "Alex Doe"
				})]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, S.jsxs)(pi, {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, S.jsx)("input", {
						type: "checkbox",
						checked: d,
						onChange: (e) => f(e.target.checked),
						className: "h-3.5 w-3.5"
					}), "Create a new Outlook address"]
				}), d && /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, S.jsx)(oi, {
						id: "handle",
						value: r,
						onChange: (e) => i(e.target.value),
						placeholder: "alex.doe"
					}), /* @__PURE__ */ (0, S.jsxs)(ai, {
						type: "button",
						variant: "outline",
						onClick: () => {
							r.trim() ? (window.open(rn(r), "_blank", "noopener,noreferrer"), a || o(`${r.trim().toLowerCase()}@outlook.com`)) : F.error("Enter a desired handle first");
						},
						children: [/* @__PURE__ */ (0, S.jsx)(Zf, { className: "mr-1 h-3.5 w-3.5" }), "Open signup"]
					})]
				}), h.length > 0 && /* @__PURE__ */ (0, S.jsx)("div", {
					className: "flex flex-wrap gap-1 pt-1",
					children: h.map((e) => /* @__PURE__ */ (0, S.jsx)("button", {
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
					/* @__PURE__ */ (0, S.jsx)(pi, {
						htmlFor: "email",
						children: "Final email address"
					}),
					/* @__PURE__ */ (0, S.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, S.jsx)(oi, {
							id: "email",
							type: "email",
							required: !0,
							value: a,
							onChange: (e) => o(e.target.value),
							placeholder: "alex.doe@outlook.com"
						}), /* @__PURE__ */ (0, S.jsx)(np, { className: "mt-2 h-4 w-4 text-muted-foreground" })]
					}),
					/* @__PURE__ */ (0, S.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Paste the address you actually created during the Outlook signup."
					})
				]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "space-y-2 md:col-span-2",
				children: [/* @__PURE__ */ (0, S.jsx)(pi, {
					htmlFor: "notes",
					children: "Notes (optional)"
				}), /* @__PURE__ */ (0, S.jsx)(mi, {
					id: "notes",
					value: s,
					onChange: (e) => c(e.target.value),
					placeholder: "Relationship, libraries to share, password reminder location, etc.",
					rows: 2
				})]
			}),
			/* @__PURE__ */ (0, S.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, S.jsx)(ai, {
					type: "submit",
					disabled: p,
					children: p ? "Saving…" : "Add member"
				})
			})
		]
	}) })] });
}
// src/styles.css?inline
var Gg = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial;--tw-space-x-reverse:0;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-amber-500:oklch(76.9% .188 70.08);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-2xl:42rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--background);--color-foreground:var(--foreground);--color-border:var(--border)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--color-border)}body{background-color:var(--color-background);color:var(--color-foreground)}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:0}.top-4{top:calc(var(--spacing) * 4)}.top-\\[50\\%\\]{top:50%}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.left-2{left:calc(var(--spacing) * 2)}.left-\\[50\\%\\]{left:50%}.z-50{z-index:50}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.m-4{margin:calc(var(--spacing) * 4)}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mr-1{margin-right:var(--spacing)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.table{display:table}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-px{height:1px}.max-h-\\(--radix-select-content-available-height\\){max-height:var(--radix-select-content-available-height)}.max-h-\\[var\\(--radix-dropdown-menu-content-available-height\\)\\]{max-height:var(--radix-dropdown-menu-content-available-height)}.min-h-\\[60px\\]{min-height:60px}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing) * 2)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-9{width:calc(var(--spacing) * 9)}.w-64{width:calc(var(--spacing) * 64)}.w-\\[180px\\]{width:180px}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-6xl{max-width:var(--container-6xl)}.max-w-lg{max-width:var(--container-lg)}.min-w-0{min-width:0}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.caption-bottom{caption-side:bottom}.origin-\\(--radix-dropdown-menu-content-transform-origin\\){transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.origin-\\(--radix-select-content-transform-origin\\){transform-origin:var(--radix-select-content-transform-origin)}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block:0}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-border{border-color:var(--border)}.border-destructive\\/50{border-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.border-destructive\\/50{border-color:color-mix(in oklab, var(--destructive) 50%, transparent)}}.border-input{border-color:var(--input)}.border-primary{border-color:var(--primary)}.border-transparent{border-color:#0000}.bg-amber-500{background-color:var(--color-amber-500)}.bg-background{background-color:var(--background)}.bg-black\\/80{background-color:#000c}@supports (color:color-mix(in lab, red, red)){.bg-black\\/80{background-color:color-mix(in oklab, var(--color-black) 80%, transparent)}}.bg-card{background-color:var(--card)}.bg-destructive{background-color:var(--destructive)}.bg-muted,.bg-muted\\/50{background-color:var(--muted)}@supports (color:color-mix(in lab, red, red)){.bg-muted\\/50{background-color:color-mix(in oklab, var(--muted) 50%, transparent)}}.bg-popover{background-color:var(--popover)}.bg-primary,.bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.bg-primary\\/10{background-color:color-mix(in oklab, var(--primary) 10%, transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-transparent{background-color:#0000}.fill-current{fill:currentColor}.object-cover{object-fit:cover}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-6{padding:calc(var(--spacing) * 6)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-6{padding-block:calc(var(--spacing) * 6)}.pt-0{padding-top:0}.pt-1{padding-top:var(--spacing)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-8{padding-left:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-card-foreground{color:var(--card-foreground)}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-offset-background{--tw-ring-offset-color:var(--background)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\\:bg-transparent::file-selector-button{background-color:#0000}.file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.file\\:text-foreground::file-selector-button{color:var(--foreground)}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-amber-500\\/90:hover{background-color:#f99c00e6}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-amber-500\\/90:hover{background-color:color-mix(in oklab, var(--color-amber-500) 90%, transparent)}}.hover\\:bg-destructive\\/80:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-destructive\\/80:hover{background-color:color-mix(in oklab, var(--destructive) 80%, transparent)}}.hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab, var(--destructive) 90%, transparent)}}.hover\\:bg-muted\\/50:hover{background-color:var(--muted)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-muted\\/50:hover{background-color:color-mix(in oklab, var(--muted) 50%, transparent)}}.hover\\:bg-primary\\/80:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/80:hover{background-color:color-mix(in oklab, var(--primary) 80%, transparent)}}.hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab, var(--primary) 90%, transparent)}}.hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab, var(--secondary) 80%, transparent)}}.hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.hover\\:text-destructive:hover{color:var(--destructive)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}}.focus\\:bg-accent:focus{background-color:var(--accent)}.focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.focus\\:text-destructive:focus{color:var(--destructive)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-1:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color:var(--ring)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-background:focus-visible{--tw-ring-offset-color:var(--background)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.data-\\[state\\=active\\]\\:bg-background[data-state=active]{background-color:var(--background)}.data-\\[state\\=active\\]\\:text-foreground[data-state=active]{color:var(--foreground)}.data-\\[state\\=active\\]\\:shadow[data-state=active]{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:var(--primary)}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected]{background-color:var(--muted)}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-input[data-state=unchecked]{background-color:var(--input)}@media (width>=40rem){.sm\\:w-64{width:calc(var(--spacing) * 64)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}@media (width>=48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (width>=64rem){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:size-4 svg{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.\\[\\&_tr\\]\\:border-b tr{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child{border-style:var(--tw-border-style);border-width:0}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]){padding-right:0}.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\]>[role=checkbox]{--tw-translate-y:2px;translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.\\[\\&\\>svg\\]\\:size-4>svg{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}.\\[\\&\\>tr\\]\\:last\\:border-b-0>tr:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}}@property --tw-animation-delay{syntax:\"*\";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:\"*\";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:\"*\";inherits:false}@property --tw-animation-fill-mode{syntax:\"*\";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:\"*\";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:\"*\";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:\"*\";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:\"*\";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:\"*\";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:\"*\";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:\"*\";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:\"*\";inherits:false;initial-value:0}:host{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(12.9% .042 264.695);--card:oklch(100% 0 0);--card-foreground:oklch(12.9% .042 264.695);--popover:oklch(100% 0 0);--popover-foreground:oklch(12.9% .042 264.695);--primary:oklch(20.8% .042 265.755);--primary-foreground:oklch(98.4% .003 247.858);--secondary:oklch(96.8% .007 247.896);--secondary-foreground:oklch(20.8% .042 265.755);--muted:oklch(96.8% .007 247.896);--muted-foreground:oklch(55.4% .046 257.417);--accent:oklch(96.8% .007 247.896);--accent-foreground:oklch(20.8% .042 265.755);--destructive:oklch(57.7% .245 27.325);--destructive-foreground:oklch(98.4% .003 247.858);--border:oklch(92.9% .013 255.508);--input:oklch(92.9% .013 255.508);--ring:oklch(70.4% .04 256.788);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.4% .003 247.858);--sidebar-foreground:oklch(12.9% .042 264.695);--sidebar-primary:oklch(20.8% .042 265.755);--sidebar-primary-foreground:oklch(98.4% .003 247.858);--sidebar-accent:oklch(96.8% .007 247.896);--sidebar-accent-foreground:oklch(20.8% .042 265.755);--sidebar-border:oklch(92.9% .013 255.508);--sidebar-ring:oklch(70.4% .04 256.788)}:host(.dark){--background:oklch(12.9% .042 264.695);--foreground:oklch(98.4% .003 247.858);--card:oklch(20.8% .042 265.755);--card-foreground:oklch(98.4% .003 247.858);--popover:oklch(20.8% .042 265.755);--popover-foreground:oklch(98.4% .003 247.858);--primary:oklch(92.9% .013 255.508);--primary-foreground:oklch(20.8% .042 265.755);--secondary:oklch(27.9% .041 260.031);--secondary-foreground:oklch(98.4% .003 247.858);--muted:oklch(27.9% .041 260.031);--muted-foreground:oklch(70.4% .04 256.788);--accent:oklch(27.9% .041 260.031);--accent-foreground:oklch(98.4% .003 247.858);--destructive:oklch(70.4% .191 22.216);--destructive-foreground:oklch(98.4% .003 247.858);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.1% .027 264.364);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.8% .042 265.755);--sidebar-foreground:oklch(98.4% .003 247.858);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.4% .003 247.858);--sidebar-accent:oklch(27.9% .041 260.031);--sidebar-accent-foreground:oklch(98.4% .003 247.858);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.1% .027 264.364)}:host{height:100%;color:var(--foreground);background:var(--background);font-family:system-ui,sans-serif;display:block;overflow:auto}[data-slot=dialog-content]{overscroll-behavior:contain;-webkit-overflow-scrolling:touch;width:calc(100% - 2rem);max-height:calc(100dvh - 2rem);overflow-y:auto}[data-slot=dialog-content] [data-slot=dialog-footer]{background:var(--background);z-index:1;padding:.75rem 0 1.5rem;position:sticky;bottom:-1.5rem}.px-member-list{overscroll-behavior:contain;-webkit-overflow-scrolling:touch;max-height:min(20rem,40dvh);overflow-y:auto}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}", Kg = "html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{width:var(--width);--gray1:#fcfcfc;--gray2:#f8f8f8;--gray3:#f3f3f3;--gray4:#ededed;--gray5:#e8e8e8;--gray6:#e2e2e2;--gray7:#dbdbdb;--gray8:#c7c7c7;--gray9:#8f8f8f;--gray10:#858585;--gray11:#6f6f6f;--gray12:#171717;--border-radius:8px;box-sizing:border-box;z-index:999999999;outline:none;margin:0;padding:0;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;list-style:none;transition:transform .4s;position:fixed}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);opacity:0;transform:var(--y);touch-action:none;box-sizing:border-box;overflow-wrap:anywhere;outline:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;position:absolute}[data-sonner-toast][data-styled=true]{background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);width:var(--width);align-items:center;gap:6px;padding:16px;font-size:13px;display:flex;box-shadow:0 4px 12px #0000001a}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap));top:0}[data-sonner-toast][data-y-position=bottom]{--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap));bottom:0}[data-sonner-toast][data-styled=true] [data-description]{color:#3f3f3f;font-weight:400;line-height:1.4}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{color:inherit;font-weight:500;line-height:1.5}[data-sonner-toast][data-styled=true] [data-icon]{width:16px;height:16px;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end);flex-shrink:0;justify-content:flex-start;align-items:center;display:flex;position:relative}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform-origin:50%;animation:.3s forwards sonner-fade-in;transform:scale(.8)}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{flex-direction:column;flex:1;gap:2px;min-width:0;display:flex}[data-sonner-toast][data-styled=true] [data-button]{height:24px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);cursor:pointer;border:none;border-radius:4px;outline:none;flex-shrink:0;align-items:center;padding-left:8px;padding-right:8px;font-size:12px;font-weight:500;transition:opacity .4s,box-shadow .2s;display:flex}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:#00000014}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:#ffffff4d}[data-sonner-toast][data-styled=true] [data-close-button]{left:var(--toast-close-button-start);right:var(--toast-close-button-end);width:20px;height:20px;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);cursor:pointer;z-index:1;border-radius:50%;justify-content:center;align-items:center;padding:0;transition:opacity .1s,background .2s,border-color .2s;display:flex;position:absolute;top:0}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:\"\";z-index:-1;height:100%;position:absolute;left:-100%;right:-100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3)translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3)translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:\"\";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]:after{content:\"\";height:calc(var(--gap) + 1px);width:100%;position:absolute;bottom:100%;left:0}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * .05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0px)) translateX(var(--swipe-amount-x,0px));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (width<=600px){[data-sonner-toaster]{right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%;position:fixed}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{width:calc(100% - var(--mobile-offset-left) * 2);left:0;right:0}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:#ecfdf3;--success-border:#bffcd9;--success-text:#008a2e;--info-bg:#f0f8ff;--info-border:#dde7fd;--info-text:#0973dc;--warning-bg:#fffcf0;--warning-border:#fbeeb1;--warning-text:#dc7609;--error-bg:#fff0f0;--error-border:#ffe0e1;--error-text:#e60000}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:#333;--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:#1f1f1f;--normal-border:#333;--normal-border-hover:#404040;--normal-text:var(--gray1);--success-bg:#001f0f;--success-border:#003d1c;--success-text:#59f3a6;--info-bg:#000d1f;--info-border:#19233e;--info-text:#5896f3;--warning-bg:#1d1f00;--warning-border:#2e2e00;--warning-text:#f3cf58;--error-bg:#2d0607;--error-border:#4d0408;--error-text:#ff9ea1}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);z-index:10;position:absolute;inset:0}.sonner-loading-wrapper[data-visible=false]{transform-origin:50%;animation:.2s forwards sonner-fade-out}.sonner-spinner{height:var(--size);width:var(--size);position:relative;top:50%;left:50%}.sonner-loading-bar{background:var(--gray11);border-radius:6px;width:24%;height:8%;animation:1.2s linear infinite sonner-spin;position:absolute;top:-3.9%;left:-10%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg)translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg)translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg)translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg)translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg)translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg)translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg)translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg)translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg)translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg)translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg)translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg)translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{transform-origin:50%;transition:opacity .2s,transform .2s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8)translate(-50%,-50%)}";
// src/main.tsx
Yt();
function qg() {
	let [e, t] = x.useState(!1);
	return /* @__PURE__ */ (0, S.jsx)("button", {
		type: "button",
		disabled: e,
		className: "m-4 rounded-md border px-3 py-2 text-sm",
		onClick: async () => {
			t(!0);
			try {
				let e = await Kt("export"), t = URL.createObjectURL(new Blob([JSON.stringify(e, null, 2)], { type: "application/json" })), n = document.createElement("a");
				n.href = t, n.download = `px-accounts-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, n.click(), setTimeout(() => URL.revokeObjectURL(t), 1e3);
			} catch (e) {
				F.error(e instanceof Error ? e.message : "Backup failed");
			} finally {
				t(!1);
			}
		},
		children: "Download local backup"
	});
}
var Jg = class extends HTMLElement {
	root;
	mount = document.createElement("div");
	portals = document.createElement("div");
	client = new Ze({ defaultOptions: {
		queries: {
			retry: 1,
			staleTime: 15e3,
			refetchOnWindowFocus: !0
		},
		mutations: { retry: !1 }
	} });
	current;
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = Gg + Kg, e.append(t, this.mount, this.portals);
	}
	set hass(e) {
		this.current = e, Gt(e), this.classList.toggle("dark", !!e.themes?.darkMode), this.render();
	}
	connectedCallback() {
		this.render();
	}
	disconnectedCallback() {
		this.root?.unmount(), this.root = void 0, this.client.clear();
	}
	render() {
		this.isConnected && this.current && (this.root ??= (0, ft.createRoot)(this.mount), this.current.user?.is_admin ? this.root.render(/* @__PURE__ */ (0, S.jsx)(ki.Provider, {
			value: this.portals,
			children: /* @__PURE__ */ (0, S.jsxs)(T, {
				client: this.client,
				children: [
					/* @__PURE__ */ (0, S.jsx)(Hg, {}),
					/* @__PURE__ */ (0, S.jsx)(qg, {}),
					/* @__PURE__ */ (0, S.jsx)(Wt, {
						richColors: !0,
						position: "bottom-center"
					})
				]
			})
		})) : (this.client.clear(), this.root.render(/* @__PURE__ */ (0, S.jsx)("p", { children: "Administrator access is required." }))));
	}
};
customElements.get("px-account-manager") || customElements.define("px-account-manager", Jg);
