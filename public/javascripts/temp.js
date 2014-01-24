/*! jQuery v1.7.2 jquery.com | jquery.org/license */

function getUnicodeCharacter(n) {
    if (n >= 0 && n <= 55295 || n >= 57344 && n <= 65535) return String.fromCharCode(n);
    if (n >= 65536 && n <= 1114111) {
        n -= 65536;
        var i = ((1047552 & n) >> 10) + 55296,
            t = (1023 & n) + 56320;
        return String.fromCharCode(i) + String.fromCharCode(t)
    }
}
function loadUserSettingsPresentation() {
    var r, t, n, i;
    for (r in userSettings) t = userSettings[r], n = $("*[name=" + r + "]"), n.length > 0 && (n.is("input") ? (i = n.attr("type"), i == "text" ? n.val(t) : i == "checkbox" ? n.attr("checked", t) : i == "radio" && (n.attr("checked", !1), n.filter("[value=" + t + "]").attr("checked", !0))) : n.val(t))
}
function getUserSettingsFromForm() {
    var t = $("#userSettings input"),
        n = {};
    return t.each(function () {
        var i = $(this),
            r = i.attr("type"),
            u = i.attr("name"),
            t = null;
        r == "text" ? (t = i.val(), n[u] = t) : r == "checkbox" ? (t = i.attr("checked") ? !0 : !1, n[u] = t) : r == "radio" && i.attr("checked") && (t = i.val(), n[u] = t)
    }), n
}(function (n, t) {
    function lr(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    function vr(n) {
        if (!ht[n]) {
            var e = r.body,
                t = i("<" + n + ">").appendTo(e),
                u = t.css("display");
            t.remove(), (u === "none" || u === "") && (f || (f = r.createElement("iframe"), f.frameBorder = f.width = f.height = 0), e.appendChild(f), v && f.createElement || (v = (f.contentWindow || f.contentDocument).document, v.write((i.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), v.close()), t = v.createElement(n), v.body.appendChild(t), u = i.css(t, "display"), e.removeChild(f)), ht[n] = u
        }
        return ht[n]
    }
    function y(n, t) {
        var r = {};
        return i.each(b.concat.apply([], b.slice(0, t)), function () {
            r[this] = n
        }), r
    }
    function gr() {
        k = t
    }
    function cr() {
        return setTimeout(gr, 0), k = i.now()
    }
    function lu() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function ar() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function ou(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, f = v[0], h, y, u, o, e, c = 1; c < p; c++) {
            if (c === 1) for (l in n.converters) typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = f, f = v[c], f === "*") f = h;
            else if (h !== "*" && h !== f) {
                if (y = h + " " + f, u = s[y] || s["* " + f], !u) {
                    e = t;
                    for (o in s) if (a = o.split(" "), (a[0] === h || a[0] === "*") && (e = s[a[1] + " " + f], e)) {
                        o = s[o], o === !0 ? u = e : e === !0 && (u = o);
                        break
                    }
                }
                u || e || i.error("No conversion from " + y.replace(" ", " to ")), u !== !0 && (r = u ? u(r) : e(o(r)))
            }
        }
        return r
    }
    function hu(n, i, r) {
        var h = n.contents,
            f = n.dataTypes,
            c = n.responseFields,
            o, u, e, s;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o) for (u in h) if (h[u] && h[u].test(o)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }
    function vt(n, t, r, u) {
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || df.test(n) ? u(n, i) : vt(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else for (var f in t) vt(n + "[" + f + "]", t[f], r, u)
    }
    function pr(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function rt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
        for (var h = n[f], c = 0, l = h ? h.length : 0, s = n === ct, o; c < l && (s || !o); c++) o = h[c](i, r, u), typeof o == "string" && (!s || e[o] ? o = t : (i.dataTypes.unshift(o), o = rt(n, i, r, u, o, e)));
        return !s && o || e["*"] || (o = rt(n, i, r, u, "*", e)), o
    }
    function yr(n) {
        return function (t, r) {
            if (typeof t != "string" && (r = t, t = "*"), i.isFunction(r)) for (var s = t.toLowerCase().split(ai), e = 0, h = s.length, u, o, f; e < h; e++) u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
        }
    }
    function br(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight,
            f = t === "width" ? 1 : 0,
            e = 4;
        if (u > 0) {
            if (r !== "border") for (; f < e; f += 2) r || (u -= parseFloat(i.css(n, "padding" + h[f])) || 0), r === "margin" ? u += parseFloat(i.css(n, r + h[f])) || 0 : u -= parseFloat(i.css(n, "border" + h[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = l(n, t), (u < 0 || u == null) && (u = n.style[t]), ot.test(u)) return u;
        if (u = parseFloat(u) || 0, r) for (; f < e; f += 2) u += parseFloat(i.css(n, "padding" + h[f])) || 0, r !== "padding" && (u += parseFloat(i.css(n, "border" + h[f] + "Width")) || 0), r === "margin" && (u += parseFloat(i.css(n, r + h[f])) || 0);
        return u + "px"
    }
    function su(n) {
        var t = r.createElement("div");
        return at.appendChild(t), t.innerHTML = n.outerHTML, t.firstChild
    }
    function di(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? gi(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), gi)
    }
    function gi(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }
    function it(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }
    function nr(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? t.outerHTML = n.outerHTML : r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text) : (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)), t.removeAttribute(i.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }
    function wi(n, t) {
        if (t.nodeType === 1 && !! i.hasData(n)) {
            var e, f, o, s = i._data(n),
                r = i._data(t, s),
                u = s.events;
            if (u) {
                delete r.handle, r.events = {};
                for (e in u) for (f = 0, o = u[e].length; f < o; f++) i.event.add(t, e, u[e][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function eu(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function bi(n) {
        var i = kt.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t
    }
    function tr(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !! t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (sf.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function er(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function d() {
        return !0
    }
    function a() {
        return !1
    }
    function or(n, t, r) {
        var e = t + "defer",
            o = t + "queue",
            u = t + "mark",
            f = i._data(n, e);
        !f || r !== "queue" && i._data(n, o) || r !== "mark" && i._data(n, u) || setTimeout(function () {
            i._data(n, o) || i._data(n, u) || (i.removeData(n, e, !0), f.fire())
        }, 0)
    }
    function st(n) {
        for (var t in n) if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }
    function sr(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(ir, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? +u : rr.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }
    function dr(n) {
        var r = ur[n] = {}, t, i;
        for (n = n.split(/\s+/), t = 0, i = n.length; t < i; t++) r[n[t]] = !0;
        return r
    }
    var r = n.document,
        wf = n.navigator,
        vf = n.location,
        i = function () {
            function b() {
                if (!i.isReady) {
                    try {
                        r.documentElement.doScroll("left")
                    } catch (n) {
                        setTimeout(b, 1);
                        return
                    }
                    i.ready()
                }
            }
            var i = function (n, t) {
                return new i.fn.init(n, t, y)
            }, g = n.jQuery,
                it = n.$,
                y, tt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                p = /\S/,
                v = /^\s+/,
                w = /\s+$/,
                st = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                et = /^[\],:{}\s]*$/,
                ot = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                ft = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rt = /(?:^|:|,)(?:\s*\[)+/g,
                ut = /(webkit)[ \/]([\w.]+)/,
                nt = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                at = /(msie) ([\w.]+)/,
                vt = /(mozilla)(?:.*? rv:([\w.]+))?/,
                lt = /-([a-z]|[0-9])/ig,
                ht = /^-ms-/,
                ct = function (n, t) {
                    return (t + "").toUpperCase()
                }, k = wf.userAgent,
                e, o, u, d = Object.prototype.toString,
                h = Object.prototype.hasOwnProperty,
                s = Array.prototype.push,
                f = Array.prototype.slice,
                l = String.prototype.trim,
                a = Array.prototype.indexOf,
                c = {};
            return i.fn = i.prototype = {
                constructor: i,
                init: function (n, u, f) {
                    var o, s, e, h;
                    if (!n) return this;
                    if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
                    if (n === "body" && !u && r.body) return this.context = r, this[0] = r.body, this.selector = n, this.length = 1, this;
                    if (typeof n == "string") {
                        if (o = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? tt.exec(n) : [null, n, null], o && (o[1] || !u)) {
                            if (o[1]) return u = u instanceof i ? u[0] : u, h = u ? u.ownerDocument || u : r, e = st.exec(n), e ? i.isPlainObject(u) ? (n = [r.createElement(e[1])], i.fn.attr.call(n, u, !0)) : n = [h.createElement(e[1])] : (e = i.buildFragment([o[1]], [h]), n = (e.cacheable ? i.clone(e.fragment) : e.fragment).childNodes), i.merge(this, n);
                            if (s = r.getElementById(o[2]), s && s.parentNode) {
                                if (s.id !== o[2]) return f.find(n);
                                this.length = 1, this[0] = s
                            }
                            return this.context = r, this.selector = n, this
                        }
                        return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                    }
                    return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return f.call(this, 0)
                },
                get: function (n) {
                    return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
                },
                pushStack: function (n, t, r) {
                    var u = this.constructor();
                    return i.isArray(n) ? s.apply(u, n) : i.merge(u, n), u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
                },
                each: function (n, t) {
                    return i.each(this, n, t)
                },
                ready: function (n) {
                    return i.bindReady(), o.add(n), this
                },
                eq: function (n) {
                    return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
                },
                map: function (n) {
                    return this.pushStack(i.map(this, function (t, i) {
                        return n.call(t, i, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: s,
                sort: [].sort,
                splice: [].splice
            }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
                var s, e, u, r, h, c, n = arguments[0] || {}, f = 1,
                    l = arguments.length,
                    o = !1;
                for (typeof n == "boolean" && (o = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++) if ((s = arguments[f]) != null) for (e in s)(u = n[e], r = s[e], n !== r) && (o && r && (i.isPlainObject(r) || (h = i.isArray(r))) ? (h ? (h = !1, c = u && i.isArray(u) ? u : []) : c = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(o, c, r)) : r !== t && (n[e] = r));
                return n
            }, i.extend({
                noConflict: function (t) {
                    return n.$ === i && (n.$ = it), t && n.jQuery === i && (n.jQuery = g), i
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (n) {
                    n ? i.readyWait++ : i.ready(!0)
                },
                ready: function (n) {
                    if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                        if (!r.body) return setTimeout(i.ready, 1);
                        if (i.isReady = !0, n !== !0 && --i.readyWait > 0) return;
                        o.fireWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!o) {
                        if (o = i.Callbacks("once memory"), r.readyState === "complete") return setTimeout(i.ready, 1);
                        if (r.addEventListener) r.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", i.ready, !1);
                        else if (r.attachEvent) {
                            r.attachEvent("onreadystatechange", u), n.attachEvent("onload", i.ready);
                            var t = !1;
                            try {
                                t = n.frameElement == null
                            } catch (f) {}
                            r.documentElement.doScroll && t && b()
                        }
                    }
                },
                isFunction: function (n) {
                    return i.type(n) === "function"
                },
                isArray: Array.isArray || function (n) {
                    return i.type(n) === "array"
                },
                isWindow: function (n) {
                    return n != null && n == n.window
                },
                isNumeric: function (n) {
                    return !isNaN(parseFloat(n)) && isFinite(n)
                },
                type: function (n) {
                    return n == null ? String(n) : c[d.call(n)] || "object"
                },
                isPlainObject: function (n) {
                    if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
                    try {
                        if (n.constructor && !h.call(n, "constructor") && !h.call(n.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (u) {
                        return !1
                    }
                    var r;
                    for (r in n);
                    return r === t || h.call(n, r)
                },
                isEmptyObject: function (n) {
                    for (var t in n) return !1;
                    return !0
                },
                error: function (n) {
                    throw new Error(n);
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
                    if (et.test(t.replace(ot, "@").replace(ft, "]").replace(rt, ""))) return new Function("return " + t)();
                    i.error("Invalid JSON: " + t)
                },
                parseXML: function (r) {
                    if (typeof r != "string" || !r) return null;
                    var u, f;
                    try {
                        n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                    } catch (e) {
                        u = t
                    }
                    return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
                },
                noop: function () {},
                globalEval: function (t) {
                    t && p.test(t) && (n.execScript || function (t) {
                        n.eval.call(n, t)
                    })(t)
                },
                camelCase: function (n) {
                    return n.replace(ht, "ms-").replace(lt, ct)
                },
                nodeName: function (n, t) {
                    return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (n, r, u) {
                    var e, f = 0,
                        o = n.length,
                        s = o === t || i.isFunction(n);
                    if (u) {
                        if (s) {
                            for (e in n) if (r.apply(n[e], u) === !1) break
                        } else for (; f < o;) if (r.apply(n[f++], u) === !1) break
                    } else if (s) {
                        for (e in n) if (r.call(n[e], e, n[e]) === !1) break
                    } else for (; f < o;) if (r.call(n[f], f, n[f++]) === !1) break;
                    return n
                },
                trim: l ? function (n) {
                    return n == null ? "" : l.call(n)
                } : function (n) {
                    return n == null ? "" : (n + "").replace(v, "").replace(w, "")
                },
                makeArray: function (n, t) {
                    var u = t || [],
                        r;
                    return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? s.call(u, n) : i.merge(u, n)), u
                },
                inArray: function (n, t, i) {
                    var r;
                    if (t) {
                        if (a) return a.call(t, n, i);
                        for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++) if (i in t && t[i] === n) return i
                    }
                    return -1
                },
                merge: function (n, i) {
                    var u = n.length,
                        r = 0,
                        f;
                    if (typeof i.length == "number") for (f = i.length; r < f; r++) n[u++] = i[r];
                    else while (i[r] !== t) n[u++] = i[r++];
                    return n.length = u, n
                },
                grep: function (n, t, i) {
                    var f = [],
                        e, r, u;
                    for (i = !! i, r = 0, u = n.length; r < u; r++) e = !! t(n[r], r), i !== e && f.push(n[r]);
                    return f
                },
                map: function (n, r, u) {
                    var o, h, f = [],
                        s = 0,
                        e = n.length,
                        c = n instanceof i || e !== t && typeof e == "number" && (e > 0 && n[0] && n[e - 1] || e === 0 || i.isArray(n));
                    if (c) for (; s < e; s++) o = r(n[s], s, u), o != null && (f[f.length] = o);
                    else for (h in n) o = r(n[h], h, u), o != null && (f[f.length] = o);
                    return f.concat.apply([], f)
                },
                guid: 1,
                proxy: function (n, r) {
                    var e, o, u;
                    return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (o = f.call(arguments, 2), u = function () {
                        return n.apply(r, o.concat(f.call(arguments)))
                    }, u.guid = n.guid = n.guid || u.guid || i.guid++, u)
                },
                access: function (n, r, u, f, e, o, s) {
                    var c, a = u == null,
                        h = 0,
                        l = n.length;
                    if (u && typeof u == "object") {
                        for (h in u) i.access(n, r, h, u[h], 1, o, f);
                        e = 1
                    } else if (f !== t) {
                        if (c = s === t && i.isFunction(f), a && (c ? (c = r, r = function (n, t, r) {
                            return c.call(i(n), r)
                        }) : (r.call(n, f), r = null)), r) for (; h < l; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                        e = 1
                    }
                    return e ? n : a ? r.call(n) : l ? r(n[0], u) : o
                },
                now: function () {
                    return +new Date
                },
                uaMatch: function (n) {
                    n = n.toLowerCase();
                    var t = ut.exec(n) || nt.exec(n) || at.exec(n) || n.indexOf("compatible") < 0 && vt.exec(n) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function n(t, i) {
                        return new n.fn.init(t, i)
                    }
                    i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function (r, u) {
                        return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
                    }, n.fn.init.prototype = n.fn;
                    var t = n(r);
                    return n
                },
                browser: {}
            }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            }), e = i.uaMatch(k), e.browser && (i.browser[e.browser] = !0, i.browser.version = e.version), i.browser.webkit && (i.browser.safari = !0), p.test(" ") && (v = /^[\s\xA0]+/, w = /[\s\xA0]+$/), y = i(r), r.addEventListener ? u = function () {
                r.removeEventListener("DOMContentLoaded", u, !1), i.ready()
            } : r.attachEvent && (u = function () {
                r.readyState === "complete" && (r.detachEvent("onreadystatechange", u), i.ready())
            }), i
        }(),
        ur = {}, w, rr, ir, oi, p, tt, ei, c, et, ii, ut;
    i.Callbacks = function (n) {
        n = n ? ur[n] || dr(n) : {};
        var r = [],
            f = [],
            u, l, h, c, s, e, v = function (t) {
                for (var u, e, h, f = 0, s = t.length; f < s; f++) u = t[f], e = i.type(u), e === "array" ? v(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u)
            }, a = function (t, i) {
                for (i = i || [], u = !n.memory || [t, i], l = !0, h = !0, e = c || 0, c = 0, s = r.length; r && e < s; e++) if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                    u = !0;
                    break
                }
                h = !1, r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1])))
            }, o = {
                add: function () {
                    if (r) {
                        var n = r.length;
                        v(arguments), h ? s = r.length : u && u !== !0 && (c = n, a(u[0], u[1]))
                    }
                    return this
                },
                remove: function () {
                    var t;
                    if (r) for (var u = arguments, i = 0, f = u.length; i < f; i++) for (t = 0; t < r.length; t++) if (u[i] === r[t] && (h && t <= s && (s--, t <= e && e--), r.splice(t--, 1), n.unique)) break;
                    return this
                },
                has: function (n) {
                    if (r) for (var t = 0, i = r.length; t < i; t++) if (n === r[t]) return !0;
                    return !1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = f = u = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return f = t, u && u !== !0 || o.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (t, i) {
                    return f && (h ? n.once || f.push([t, i]) : (!n.once || !u) && a(t, i)), this
                },
                fire: function () {
                    return o.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!l
                }
            };
        return o
    }, w = [].slice, i.extend({
        Deferred: function (n) {
            var u = i.Callbacks("once memory"),
                o = i.Callbacks("once memory"),
                e = i.Callbacks("memory"),
                s = "pending",
                h = {
                    resolve: u,
                    reject: o,
                    notify: e
                }, f = {
                    done: u.add,
                    fail: o.add,
                    progress: e.add,
                    state: function () {
                        return s
                    },
                    isResolved: u.fired,
                    isRejected: o.fired,
                    then: function (n, i, r) {
                        return t.done(n).fail(i).progress(r), this
                    },
                    always: function () {
                        return t.done.apply(t, arguments).fail.apply(t, arguments), this
                    },
                    pipe: function (n, r, u) {
                        return i.Deferred(function (f) {
                            i.each({
                                done: [n, "resolve"],
                                fail: [r, "reject"],
                                progress: [u, "notify"]
                            }, function (n, r) {
                                var e = r[0],
                                    o = r[1],
                                    u;
                                i.isFunction(e) ? t[n](function () {
                                    u = e.apply(this, arguments), u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u])
                                }) : t[n](f[o])
                            })
                        }).promise()
                    },
                    promise: function (n) {
                        if (n == null) n = f;
                        else for (var t in f) n[t] = f[t];
                        return n
                    }
                }, t = f.promise({}),
                r;
            for (r in h) t[r] = h[r].fire, t[r + "With"] = h[r].fireWith;
            return t.done(function () {
                s = "resolved"
            }, o.disable, e.lock).fail(function () {
                s = "rejected"
            }, u.disable, e.lock), n && n.call(t, t), t
        },
        when: function (n) {
            function h(n) {
                return function (i) {
                    s[n] = arguments.length > 1 ? w.call(arguments, 0) : i, t.notifyWith(o, s)
                }
            }
            function c(n) {
                return function (i) {
                    r[n] = arguments.length > 1 ? w.call(arguments, 0) : i, --e || t.resolveWith(t, r)
                }
            }
            var r = w.call(arguments, 0),
                u = 0,
                f = r.length,
                s = Array(f),
                e = f,
                l = f,
                t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred(),
                o = t.promise();
            if (f > 1) {
                for (; u < f; u++) r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
                e || t.resolveWith(t, r)
            } else t !== n && t.resolveWith(t, f ? [n] : []);
            return o
        }
    }), i.support = function () {
        var u, v, s, l, a, f, e, h, b, c, y, o, t = r.createElement("div"),
            w = r.documentElement;
        if (t.setAttribute("className", "t"), t.innerHTML = "   <link/><table><\/table><a href='/a' style='top:1px;float:left;opacity:.55;'>a<\/a><input type='checkbox'/>", v = t.getElementsByTagName("*"), s = t.getElementsByTagName("a")[0], !v || !v.length || !s) return {};
        l = r.createElement("select"), a = l.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !! t.getElementsByTagName("link").length,
            style: /top/.test(s.getAttribute("style")),
            hrefNormalized: s.getAttribute("href") === "/a",
            opacity: /^0.55/.test(s.style.opacity),
            cssFloat: !! s.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: a.selected,
            getSetAttribute: t.className !== "t",
            enctype: !! r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, i.boxModel = u.boxModel = r.compatMode === "CSS1Compat", f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, l.disabled = !0, u.optDisabled = !a.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function () {
            u.noCloneEvent = !1
        }), t.cloneNode(!0).fireEvent("onclick")), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.attachEvent) for (y in {
            submit: 1,
            change: 1,
            focusin: 1
        }) c = "on" + y, o = c in t, o || (t.setAttribute(c, "return;"), o = typeof t[c] == "function"), u[y + "Bubbles"] = o;
        return e.removeChild(t), e = l = a = t = f = null, i(function () {
            var e, l, f, g, k, c, s, b, w, d, y, p, v, a = r.getElementsByTagName("body")[0];
            a && (b = 1, v = "padding:0;margin:0;border:", y = "position:absolute;top:0;left:0;width:1px;height:1px;", p = v + "0;visibility:hidden;", w = "style='" + y + v + "5px solid #000;", d = "<div " + w + "display:block;'><div style='" + v + "0;display:block;overflow:hidden;'><\/div><\/div><table " + w + "' cellpadding='0' cellspacing='0'><tr><td><\/td><\/tr><\/table>", e = r.createElement("div"), e.style.cssText = p + "width:0;height:0;position:static;top:0;margin-top:" + b + "px", a.insertBefore(e, a.firstChild), t = r.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td style='" + v + "0;display:none'><\/td><td>t<\/td><\/tr><\/table>", h = t.getElementsByTagName("td"), o = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", u.reliableHiddenOffsets = o && h[0].offsetHeight === 0, n.getComputedStyle && (t.innerHTML = "", s = r.createElement("div"), s.style.width = "0", s.style.marginRight = "0", t.style.width = "2px", t.appendChild(s), u.reliableMarginRight = (parseInt((n.getComputedStyle(s, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.width = t.style.padding = "1px", t.style.border = 0, t.style.overflow = "hidden", t.style.display = "inline", t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div style='width:5px;'><\/div>", u.shrinkWrapBlocks = t.offsetWidth !== 3), t.style.cssText = y + p, t.innerHTML = d, l = t.firstChild, f = l.firstChild, k = l.nextSibling.firstChild.firstChild, c = {
                doesNotAddBorder: f.offsetTop !== 5,
                doesAddBorderForTableAndCells: k.offsetTop === 5
            }, f.style.position = "fixed", f.style.top = "20px", c.fixedPosition = f.offsetTop === 20 || f.offsetTop === 15, f.style.position = f.style.top = "", l.style.overflow = "hidden", l.style.position = "relative", c.subtractsBorderForOverflowNotVisible = f.offsetTop === -5, c.doesNotIncludeMarginInBodyOffset = a.offsetTop !== b, n.getComputedStyle && (t.style.marginTop = "1%", u.pixelMargin = (n.getComputedStyle(t, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof e.style.zoom != "undefined" && (e.style.zoom = 1), a.removeChild(e), s = t = e = null, i.extend(u, c))
        }), u
    }(), rr = /^(?:\{.*\}|\[.*\])$/, ir = /([A-Z])/g, i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !! n && !st(n)
        },
        data: function (n, r, u, f) {
            if ( !! i.acceptData(n)) {
                var v, s, c, h = i.expando,
                    y = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[h] : n[h] && h,
                    a = r === "events";
                return (!e || !o[e] || !a && !f && !o[e].data) && y && u === t ? void 0 : (e || (l ? n[h] = e = ++i.uuid : e = h), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), v = s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a && !s[r]) ? v.events : (y ? (c = s[r], c == null && (c = s[i.camelCase(r)])) : c = s, c)
            }
        },
        removeData: function (n, t, r) {
            if ( !! i.acceptData(n)) {
                var e, s, c, o = i.expando,
                    h = n.nodeType,
                    u = h ? i.cache : n,
                    f = h ? n[o] : o;
                if (!u[f]) return;
                if (t && (e = r ? u[f] : u[f].data, e)) {
                    for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), s = 0, c = t.length; s < c; s++) delete e[t[s]];
                    if (!(r ? st : i.isEmptyObject)(e)) return
                }
                if (!r && (delete u[f].data, !st(u[f]))) return;
                i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null, h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null)
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t) return t !== !0 && n.getAttribute("classid") === t
            }
            return !0
        }
    }), i.fn.extend({
        data: function (n, r) {
            var u, s, c, o, l, e = this[0],
                h = 0,
                f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (c = e.attributes, l = c.length; h < l; h++) o = c[h].name, o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)), sr(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function (r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = sr(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r, this.each(function () {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u), i.data(this, n, r), t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    }), i.extend({
        _mark: function (n, t) {
            n && (t = (t || "fx") + "mark", i._data(n, t, (i._data(n, t) || 0) + 1))
        },
        _unmark: function (n, t, r) {
            if (n !== !0 && (r = t, t = n, n = !1), t) {
                r = r || "fx";
                var u = r + "mark",
                    f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0), or(t, r, "mark"))
            }
        },
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var u = i.queue(n, t),
                r = u.shift(),
                f = {};
            r === "inprogress" && (r = u.shift()), r && (t === "fx" && u.unshift("inprogress"), i._data(n, t + ".run", f), r.call(n, function () {
                i.dequeue(n, t)
            }, f)), u.length || (i.removeData(n, t + "queue " + t + ".run", !0), or(n, t, "queue"))
        }
    }), i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            function c() {
                --s || h.resolveWith(u, [u])
            }
            typeof n != "string" && (r = n, n = t), n = n || "fx";
            for (var h = i.Deferred(), u = this, f = u.length, s = 1, e = n + "defer", l = n + "queue", a = n + "mark", o; f--;)(o = i.data(u[f], e, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], e, i.Callbacks("once memory"), !0)) && (s++, o.add(c));
            return c(), h.promise(r)
        }
    });
    var fr = /[\n\t\r]/g,
        nt = /\s+/,
        fe = /\r/g,
        ne = /^(?:button|input)$/i,
        gf = /^(?:button|input|object|select|textarea)$/i,
        te = /^a(?:rea)?$/i,
        pi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ki = i.support.getSetAttribute,
        e, hr, wr;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t, delete this[n]
                } catch (i) {}
            })
        },
        addClass: function (n) {
            var u, e, s, t, f, r, o;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string") for (u = n.split(nt), e = 0, s = this.length; e < s; e++) if (t = this[e], t.nodeType === 1) if (t.className || u.length !== 1) {
                for (f = " " + t.className + " ", r = 0, o = u.length; r < o; r++)~f.indexOf(" " + u[r] + " ") || (f += u[r] + " ");
                t.className = i.trim(f)
            } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var o, e, h, r, u, f, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t) for (o = (n || "").split(nt), e = 0, h = this.length; e < h; e++) if (r = this[e], r.nodeType === 1 && r.className) if (n) {
                for (u = (" " + r.className + " ").replace(fr, " "), f = 0, s = o.length; f < s; f++) u = u.replace(" " + o[f] + " ", " ");
                r.className = i.trim(u)
            } else r.className = "";
            return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string") for (var e, h = 0, o = i(this), f = t, s = n.split(nt); e = s[h++];) f = u ? f : !o.hasClass(e), o[f ? "addClass" : "removeClass"](e);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var r = " " + n + " ", t = 0, i = this.length; t < i; t++) if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(fr, " ").indexOf(r) > -1) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return !arguments.length ? f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(fe, "") : u == null ? "" : u) : void 0 : (e = i.isFunction(n), this.each(function (u) {
                var o = i(this),
                    f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            }))
        }
    }), i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    var o, e, h, t, r = n.selectedIndex,
                        s = [],
                        u = n.options,
                        f = n.type === "select-one";
                    if (r < 0) return null;
                    for (e = f ? r : 0, h = f ? r + 1 : u.length; e < h; e++) if (t = u[e], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                        if (o = i(t).val(), f) return o;
                        s.push(o)
                    }
                    return f && !s.length && u.length ? i(u[r]).val() : s
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (n, r, u, f) {
            var s, o, c, h = n.nodeType;
            if ( !! n && h !== 3 && h !== 8 && h !== 2) {
                if (f && r in i.attrFn) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (c = h !== 1 || !i.isXMLDoc(n), c && (r = r.toLowerCase(), o = i.attrHooks[r] || (pi.test(r) ? hr : e)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return o && "set" in o && c && (s = o.set(n, u, r)) !== t ? s : (n.setAttribute(r, "" + u), u)
                }
                return o && "get" in o && c && (s = o.get(n, r)) !== null ? s : (s = n.getAttribute(r), s === null ? t : s)
            }
        },
        removeAttr: function (n, t) {
            var u, o, r, s, f, e = 0;
            if (t && n.nodeType === 1) for (o = t.toLowerCase().split(nt), s = o.length; e < s; e++) r = o[e], r && (u = i.propFix[r] || r, f = pi.test(r), f || i.attr(n, r, ""), n.removeAttribute(ki ? r : u), f && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (ne.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (e && i.nodeName(n, "button")) return e.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var o, f, s, e = n.nodeType;
            if ( !! n && e !== 3 && e !== 8 && e !== 2) return s = e !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get" in f && (o = f.get(n, r)) !== null ? o : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : gf.test(n.nodeName) || te.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }), i.attrHooks.tabindex = i.propHooks.tabIndex, hr = {
        get: function (n, r) {
            var f, u = i.prop(n, r);
            return u === !0 || typeof u != "boolean" && (f = n.getAttributeNode(r)) && f.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    }, ki || (wr = {
        name: !0,
        id: !0,
        coords: !0
    }, e = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (wr[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.nodeValue = t + ""
        }
    }, i.attrHooks.tabindex.set = e.set, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: e.get,
        set: function (n, t, i) {
            t === "" && (t = "false"), e.set(n, t, i)
        }
    }), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    }), i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = "" + t
        }
    }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    }), i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var yt = /^(?:textarea|input|select)$/i,
        kr = /^([^\.]*)?(?:\.(.+))?$/,
        wu = /(?:^|\s)hover(\.\S+)?\b/,
        ku = /^key/,
        uf = /^(?:mouse|contextmenu)|click/,
        yi = /^(?:focusinfocus|focusoutblur)$/,
        ff = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        ef = function (n) {
            var t = ff.exec(n);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        }, rf = function (n, t) {
            var i = n.attributes || {};
            return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
        }, wt = function (n) {
            return i.event.special.hover ? n : n.replace(wu, "mouseenter$1 mouseleave$1")
        };
    i.event = {
        add: function (n, r, u, f, e) {
            var v, h, a, w, p, o, b, l, y, k, c, s;
            if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(v = i._data(n)))) {
                for (u.handler && (y = u, u = y.handler, e = y.selector), u.guid || (u.guid = i.guid++), a = v.events, a || (v.events = a = {}), h = v.handle, h || (v.handle = h = function (n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : t
                }, h.elem = n), r = i.trim(wt(r)).split(" "), w = 0; w < r.length; w++) p = kr.exec(r[w]) || [], o = p[1], b = (p[2] || "").split(".").sort(), s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, l = i.extend({
                    type: o,
                    origType: p[1],
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    quick: e && ef(e),
                    namespace: b.join(".")
                }, y), c = a[o], c || (c = a[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, b, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function (n, t, r, u, f) {
            var y = i.hasData(n) && i._data(n),
                v, p, e, k, h, b, l, a, c, w, o, s;
            if ( !! y && !! (a = y.events)) {
                for (t = i.trim(wt(t || "")).split(" "), v = 0; v < t.length; v++) {
                    if (p = kr.exec(t[v]) || [], e = k = p[1], h = p[2], !e) {
                        for (e in a) i.event.remove(n, e + t[v], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = a[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < o.length; l++) s = o[l], (f || k === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(l--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                    o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle), delete a[e])
                }
                i.isEmptyObject(a) && (w = y.handle, w && (w.elem = null), i.removeData(n, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (r, u, f, e) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var o = r.type || r,
                    w = [],
                    p, k, c, s, h, a, l, v, y, b;
                if (yi.test(o + i.event.triggered)) return;
                if (o.indexOf("!") >= 0 && (o = o.slice(0, -1), k = !0), o.indexOf(".") >= 0 && (w = o.split("."), o = w.shift(), w.sort()), (!f || i.event.customEvent[o]) && !i.event.global[o]) return;
                if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o, r) : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = w.join("."), r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = o.indexOf(":") < 0 ? "on" + o : "", !f) {
                    p = i.cache;
                    for (c in p) p[c].events && p[c].events[o] && i.event.trigger(r, u, p[c].handle.elem, !0);
                    return
                }
                if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u) : [], u.unshift(r), l = i.event.special[o] || {}, l.trigger && l.trigger.apply(f, u) === !1) return;
                if (y = [
                    [f, l.bindType || o]
                ], !e && !l.noBubble && !i.isWindow(f)) {
                    for (b = l.delegateType || o, s = yi.test(b + o) ? f : f.parentNode, h = null; s; s = s.parentNode) y.push([s, b]), h = s;
                    h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
                }
                for (c = 0; c < y.length && !r.isPropagationStopped(); c++) s = y[c][0], r.type = y[c][1], v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"), v && v.apply(s, u), v = a && s[a], v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                return r.type = o, e || r.isDefaultPrevented() || l._default && l._default.apply(f.ownerDocument, u) !== !1 || o === "click" && i.nodeName(f, "a") || !i.acceptData(f) || !a || !f[o] || (o === "focus" || o === "blur") && r.target.offsetWidth === 0 || i.isWindow(f) || (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)), r.result
            }
        },
        dispatch: function (r) {
            r = i.event.fix(r || n.event);
            var v = (i._data(this, "events") || {})[r.type] || [],
                y = v.delegateCount,
                k = [].slice.call(arguments, 0),
                d = !r.exclusive && !r.namespace,
                p = i.event.special[r.type] || {}, b = [],
                e, w, f, c, a, l, s, h, u, o, g;
            if (k[0] = r, r.delegateTarget = this, !p.preDispatch || p.preDispatch.call(this, r) !== !1) {
                if (y && (!r.button || r.type !== "click")) for (c = i(this), c.context = this.ownerDocument || this, f = r.target; f != this; f = f.parentNode || this) if (f.disabled !== !0) {
                    for (l = {}, h = [], c[0] = f, e = 0; e < y; e++) u = v[e], o = u.selector, l[o] === t && (l[o] = u.quick ? rf(f, u.quick) : c.is(o)), l[o] && h.push(u);
                    h.length && b.push({
                        elem: f,
                        matches: h
                    })
                }
                for (v.length > y && b.push({
                    elem: this,
                    matches: v.slice(y)
                }), e = 0; e < b.length && !r.isPropagationStopped(); e++) for (s = b[e], r.currentTarget = s.elem, w = 0; w < s.matches.length && !r.isImmediatePropagationStopped(); w++) u = s.matches[w], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, a = ((i.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, k), a !== t && (r.result = a, a === !1 && (r.preventDefault(), r.stopPropagation())));
                return p.postDispatch && p.postDispatch.call(this, r), r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (n, i) {
                var s, f, u, e = i.button,
                    o = i.fromElement;
                return n.pageX == null && i.clientX != null && (s = n.target.ownerDocument || r, f = s.documentElement, u = s.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
            }
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var e, o, u = n,
                f = i.event.fixHooks[n.type] || {}, s = f.props ? this.props.concat(f.props) : this.props;
            for (n = i.Event(u), e = s.length; e;) o = s[--e], n[o] = u[o];
            return n.target || (n.target = u.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey === t && (n.metaKey = n.ctrlKey), f.filter ? f.filter(n, u) : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function (n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
        }
    }, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function (n, t, i) {
        n.detachEvent && n.detachEvent("on" + t, i)
    }, i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? d : a) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0
    }, i.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = d;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = d;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = d, this.stopPropagation()
        },
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a
    }, i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var e = this,
                    u = n.relatedTarget,
                    r = n.handleObj,
                    o = r.selector,
                    f;
                return u && (u === e || i.contains(e, u)) || (n.type = r.origType, f = r.handler.apply(this, arguments), n.type = t), f
            }
        }
    }), i.support.submitBubbles || (i.event.special.submit = {
        setup: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function (n) {
                var u = n.target,
                    r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !r._submit_attached && (i.event.add(r, "submit._submit", function (n) {
                    n._submit_bubble = !0
                }), r._submit_attached = !0)
            })
        },
        postDispatch: function (n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit")
        }
    }), i.support.changeBubbles || (i.event.special.change = {
        setup: function () {
            if (yt.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function (n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate("change", this, n, !0))
            })), !1;
            i.event.add(this, "beforeactivate._change", function (n) {
                var t = n.target;
                yt.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function (n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return i.event.remove(this, "._change"), yt.test(this.nodeName)
        }
    }), i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, t) {
        var f = 0,
            u = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function () {
                f++ == 0 && r.addEventListener(n, u, !0)
            },
            teardown: function () {
                --f == 0 && r.removeEventListener(n, u, !0)
            }
        }
    }), i.fn.extend({
        on: function (n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = a;
            else if (!f) return this;
            return e === 1 && (o = f, f = function (n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = a), this.each(function () {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function (n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function (n, t) {
            return this.off(n, null, t)
        },
        live: function (n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function (n, t) {
            return i(this.context).off(n, this.selector || "**", t), this
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function (n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
        },
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function (n, t) {
            if (this[0]) return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function (n) {
            var r = arguments,
                f = n.guid || i.guid++,
                t = 0,
                u = function (u) {
                    var f = (i._data(this, "lastToggle" + n.guid) || 0) % t;
                    return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), r[f].apply(this, arguments) || !1
                };
            for (u.guid = f; t < r.length;) r[t++].guid = f;
            return this.click(u)
        },
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }, i.attrFn && (i.attrFn[t] = !0), ku.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), uf.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
    function () {
        function nt(t, i, r, u, f, e) {
            for (var s, c, h = 0, l = u.length; h < l; h++) if (s = u[h], s) {
                for (c = !1, s = s[t]; s;) {
                    if (s[o] === r) {
                        c = u[s.sizset];
                        break
                    }
                    if (s.nodeType === 1) if (e || (s[o] = r, s.sizset = h), typeof i != "string") {
                        if (s === i) {
                            c = !0;
                            break
                        }
                    } else if (n.filter(i, [s]).length > 0) {
                        c = s;
                        break
                    }
                    s = s[t]
                }
                u[h] = c
            }
        }
        function k(n, t, i, r, u, f) {
            for (var e, h, s = 0, c = r.length; s < c; s++) if (e = r[s], e) {
                for (h = !1, e = e[n]; e;) {
                    if (e[o] === i) {
                        h = r[e.sizset];
                        break
                    }
                    if (e.nodeType !== 1 || f || (e[o] = i, e.sizset = s), e.nodeName.toLowerCase() === t) {
                        h = e;
                        break
                    }
                    e = e[n]
                }
                r[s] = h
            }
        }
        var w = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            o = "sizcache" + (Math.random() + "").replace(".", ""),
            p = 0,
            d = Object.prototype.toString,
            l = !1,
            g = !0,
            e = /\\/g,
            tt = /\r\n/g,
            c = /\W/,
            n, h, f, a, s, y;
        [0, 0].sort(function () {
            return g = !1, 0
        }), n = function (t, i, e, o) {
            var it;
            if (e = e || [], i = i || r, it = i, i.nodeType !== 1 && i.nodeType !== 9) return [];
            if (!t || typeof t != "string") return e;
            var v, a, h, nt, l, p, k, c, rt = !0,
                g = n.isXML(i),
                s = [],
                tt = t;
            do if (w.exec(""), v = w.exec(tt), v && (tt = v[3], s.push(v[1]), v[2])) {
                nt = v[3];
                break
            }
            while (v);
            if (s.length > 1 && b.exec(t)) if (s.length === 2 && u.relative[s[0]]) a = y(s[0] + s[1], i, o);
            else for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length;) t = s.shift(), u.relative[t] && (t += s.shift()), a = y(t, a, o);
            else if (!o && s.length > 1 && i.nodeType === 9 && !g && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, g), i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]), i) for (l = o ? {
                expr: s.pop(),
                set: f(o)
            } : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, g), a = l.expr ? n.filter(l.expr, l.set) : l.set, s.length > 0 ? h = f(a) : rt = !1; s.length;) p = s.pop(), k = p, u.relative[p] ? k = s.pop() : p = "", k == null && (k = i), u.relative[p](h, k, g);
            else h = s = [];
            if (h || (h = a), h || n.error(p || t), d.call(h) === "[object Array]") if (rt) if (i && i.nodeType === 1) for (c = 0; h[c] != null; c++) h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
            else for (c = 0; h[c] != null; c++) h[c] && h[c].nodeType === 1 && e.push(a[c]);
            else e.push.apply(e, h);
            else f(h, e);
            return nt && (n(nt, it, e, o), n.uniqueSort(e)), e
        }, n.uniqueSort = function (n) {
            if (a && (l = g, n.sort(a), l)) for (var t = 1; t < n.length; t++) n[t] === n[t - 1] && n.splice(t--, 1);
            return n
        }, n.matches = function (t, i) {
            return n(t, null, null, i)
        }, n.matchesSelector = function (t, i) {
            return n(i, null, null, [t]).length > 0
        }, n.find = function (n, t, i) {
            var f, s, c, r, o, h;
            if (!n) return [];
            for (s = 0, c = u.order.length; s < c; s++) if (o = u.order[s], (r = u.leftMatch[o].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(e, ""), f = u.find[o](r, t, i), f != null))) {
                n = n.replace(u.match[o], "");
                break
            }
            return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: f,
                expr: n
            }
        }, n.filter = function (i, r, f, e) {
            for (var o, c, h, v, y, b, p, l, w, k = i, a = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length;) {
                for (h in u.filter) if ((o = u.leftMatch[h].exec(i)) != null && o[2]) {
                    if (b = u.filter[h], p = o[1], c = !1, o.splice(1, 1), p.substr(p.length - 1) === "\\") continue;
                    if (s === a && (a = []), u.preFilter[h]) if (o = u.preFilter[h](o, s, f, a, e, d), o) {
                        if (o === !0) continue
                    } else c = v = !0;
                    if (o) for (l = 0;
                    (y = s[l]) != null; l++) y && (v = b(y, o, l, s), w = e ^ v, f && v != null ? w ? c = !0 : s[l] = !1 : w && (a.push(y), c = !0));
                    if (v !== t) {
                        if (f || (s = a), i = i.replace(u.match[h], ""), !c) return [];
                        break
                    }
                }
                if (i === k) if (c == null) n.error(i);
                else break;
                k = i
            }
            return s
        }, n.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        var v = n.getText = function (n) {
            var r, u, t = n.nodeType,
                i = "";
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    if (typeof n.innerText == "string") return n.innerText.replace(tt, "");
                    for (n = n.firstChild; n; n = n.nextSibling) i += v(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else for (r = 0; u = n[r]; r++) u.nodeType !== 8 && (i += v(u));
            return i
        }, u = n.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (n) {
                    return n.getAttribute("href")
                },
                type: function (n) {
                    return n.getAttribute("type")
                }
            },
            relative: {
                "+": function (t, i) {
                    var s = typeof i == "string",
                        e = s && !c.test(i),
                        o = s && !e,
                        u, f, r;
                    for (e && (i = i.toLowerCase()), u = 0, f = t.length; u < f; u++) if (r = t[u]) {
                        while ((r = r.previousSibling) && r.nodeType !== 1);
                        t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                    }
                    o && n.filter(i, t, !0)
                },
                ">": function (t, i) {
                    var u, e = typeof i == "string",
                        r = 0,
                        o = t.length,
                        f;
                    if (e && !c.test(i)) for (i = i.toLowerCase(); r < o; r++) u = t[r], u && (f = u.parentNode, t[r] = f.nodeName.toLowerCase() === i ? f : !1);
                    else {
                        for (; r < o; r++) u = t[r], u && (t[r] = e ? u.parentNode : u.parentNode === i);
                        e && n.filter(i, t, !0)
                    }
                },
                "": function (n, t, i) {
                    var u, f = p++,
                        r = nt;
                    typeof t != "string" || c.test(t) || (t = t.toLowerCase(), u = t, r = k), r("parentNode", t, f, n, u, i)
                },
                "~": function (n, t, i) {
                    var u, f = p++,
                        r = nt;
                    typeof t != "string" || c.test(t) || (t = t.toLowerCase(), u = t, r = k), r("previousSibling", t, f, n, u, i)
                }
            },
            find: {
                ID: function (n, t, i) {
                    if (typeof t.getElementById != "undefined" && !i) {
                        var r = t.getElementById(n[1]);
                        return r && r.parentNode ? [r] : []
                    }
                },
                NAME: function (n, t) {
                    var u, r, i, f;
                    if (typeof t.getElementsByName != "undefined") {
                        for (u = [], r = t.getElementsByName(n[1]), i = 0, f = r.length; i < f; i++) r[i].getAttribute("name") === n[1] && u.push(r[i]);
                        return u.length === 0 ? null : u
                    }
                },
                TAG: function (n, t) {
                    if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(n[1])
                }
            },
            preFilter: {
                CLASS: function (n, t, i, r, u, f) {
                    if (n = " " + n[1].replace(e, "") + " ", f) return n;
                    for (var s = 0, o;
                    (o = t[s]) != null; s++) o && (u ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(o) : i && (t[s] = !1));
                    return !1
                },
                ID: function (n) {
                    return n[1].replace(e, "")
                },
                TAG: function (n) {
                    return n[1].replace(e, "").toLowerCase()
                },
                CHILD: function (t) {
                    if (t[1] === "nth") {
                        t[2] || n.error(t[0]), t[2] = t[2].replace(/^\+|\s*/g, "");
                        var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                        t[2] = i[1] + (i[2] || 1) - 0, t[3] = i[3] - 0
                    } else t[2] && n.error(t[0]);
                    return t[0] = p++, t
                },
                ATTR: function (n, t, i, r, f, o) {
                    var s = n[1] = n[1].replace(e, "");
                    return !o && u.attrMap[s] && (n[1] = u.attrMap[s]), n[4] = (n[4] || n[5] || "").replace(e, ""), n[2] === "~=" && (n[4] = " " + n[4] + " "), n
                },
                PSEUDO: function (t, i, r, f, e) {
                    if (t[1] === "not") if ((w.exec(t[3]) || "").length > 1 || /^\w/.test(t[3])) t[3] = n(t[3], null, null, i);
                    else {
                        var o = n.filter(t[3], i, r, !0 ^ e);
                        return r || f.push.apply(f, o), !1
                    } else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0])) return !0;
                    return t
                },
                POS: function (n) {
                    return n.unshift(!0), n
                }
            },
            filters: {
                enabled: function (n) {
                    return n.disabled === !1 && n.type !== "hidden"
                },
                disabled: function (n) {
                    return n.disabled === !0
                },
                checked: function (n) {
                    return n.checked === !0
                },
                selected: function (n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                parent: function (n) {
                    return !!n.firstChild
                },
                empty: function (n) {
                    return !n.firstChild
                },
                has: function (t, i, r) {
                    return !!n(r[3], t).length
                },
                header: function (n) {
                    return /h\d/i.test(n.nodeName)
                },
                text: function (n) {
                    var i = n.getAttribute("type"),
                        t = n.type;
                    return n.nodeName.toLowerCase() === "input" && "text" === t && (i === t || i === null)
                },
                radio: function (n) {
                    return n.nodeName.toLowerCase() === "input" && "radio" === n.type
                },
                checkbox: function (n) {
                    return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
                },
                file: function (n) {
                    return n.nodeName.toLowerCase() === "input" && "file" === n.type
                },
                password: function (n) {
                    return n.nodeName.toLowerCase() === "input" && "password" === n.type
                },
                submit: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === n.type
                },
                image: function (n) {
                    return n.nodeName.toLowerCase() === "input" && "image" === n.type
                },
                reset: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === n.type
                },
                button: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && "button" === n.type || t === "button"
                },
                input: function (n) {
                    return /input|select|textarea|button/i.test(n.nodeName)
                },
                focus: function (n) {
                    return n === n.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (n, t) {
                    return t === 0
                },
                last: function (n, t, i, r) {
                    return t === r.length - 1
                },
                even: function (n, t) {
                    return t % 2 == 0
                },
                odd: function (n, t) {
                    return t % 2 == 1
                },
                lt: function (n, t, i) {
                    return t < i[3] - 0
                },
                gt: function (n, t, i) {
                    return t > i[3] - 0
                },
                nth: function (n, t, i) {
                    return i[3] - 0 === t
                },
                eq: function (n, t, i) {
                    return i[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (t, i, r, f) {
                    var o = i[1],
                        c = u.filters[o],
                        s, e, h;
                    if (c) return c(t, r, i, f);
                    if (o === "contains") return (t.textContent || t.innerText || v([t]) || "").indexOf(i[3]) >= 0;
                    if (o === "not") {
                        for (s = i[3], e = 0, h = s.length; e < h; e++) if (s[e] === t) return !1;
                        return !0
                    }
                    n.error(o)
                },
                CHILD: function (n, t) {
                    var r, e, s, u, l, c, f, h = t[1],
                        i = n;
                    switch (h) {
                        case "only":
                        case "first":
                            while (i = i.previousSibling) if (i.nodeType === 1) return !1;
                            if (h === "first") return !0;
                            i = n;
                        case "last":
                            while (i = i.nextSibling) if (i.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            if (r = t[2], e = t[3], r === 1 && e === 0) return !0;
                            if (s = t[0], u = n.parentNode, u && (u[o] !== s || !n.nodeIndex)) {
                                for (c = 0, i = u.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++c);
                                u[o] = s
                            }
                            return f = n.nodeIndex - e, r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                    }
                },
                ID: function (n, t) {
                    return n.nodeType === 1 && n.getAttribute("id") === t
                },
                TAG: function (n, t) {
                    return t === "*" && n.nodeType === 1 || !! n.nodeName && n.nodeName.toLowerCase() === t
                },
                CLASS: function (n, t) {
                    return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function (t, i) {
                    var o = i[1],
                        s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o),
                        f = s + "",
                        e = i[2],
                        r = i[4];
                    return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1
                },
                POS: function (n, t, i, r) {
                    var e = t[2],
                        f = u.setFilters[e];
                    if (f) return f(n, i, t, r)
                }
            }
        }, b = u.match.POS,
            it = function (n, t) {
                return "\\" + (+t + 1)
            };
        for (h in u.match) u.match[h] = new RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, it));
        u.match.globalPOS = b, f = function (n, t) {
            return (n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t) : n
        };
        try {
            Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
        } catch (rt) {
            f = function (n, t) {
                var i = 0,
                    r = t || [],
                    u;
                if (d.call(n) === "[object Array]") Array.prototype.push.apply(r, n);
                else if (typeof n.length == "number") for (u = n.length; i < u; i++) r.push(n[i]);
                else for (; n[i]; i++) r.push(n[i]);
                return r
            }
        }
        r.documentElement.compareDocumentPosition ? a = function (n, t) {
            return n === t ? (l = !0, 0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (a = function (n, t) {
            var i;
            if (n === t) return l = !0, 0;
            if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
            var o, c, f = [],
                u = [],
                h = n.parentNode,
                e = t.parentNode,
                r = h;
            if (h === e) return s(n, t);
            if (!h) return -1;
            if (!e) return 1;
            while (r) f.unshift(r), r = r.parentNode;
            for (r = e; r;) u.unshift(r), r = r.parentNode;
            for (o = f.length, c = u.length, i = 0; i < o && i < c; i++) if (f[i] !== u[i]) return s(f[i], u[i]);
            return i === o ? s(n, u[i], -1) : s(f[i], t, 1)
        }, s = function (n, t, i) {
            if (n === t) return i;
            for (var r = n.nextSibling; r;) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }),
        function () {
            var i = r.createElement("div"),
                f = "script" + +new Date,
                n = r.documentElement;
            i.innerHTML = "<a name='" + f + "'/>", n.insertBefore(i, n.firstChild), r.getElementById(f) && (u.find.ID = function (n, i, r) {
                if (typeof i.getElementById != "undefined" && !r) {
                    var u = i.getElementById(n[1]);
                    return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : []
                }
            }, u.filter.ID = function (n, t) {
                var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                return n.nodeType === 1 && i && i.nodeValue === t
            }), n.removeChild(i), n = i = null
        }(),
        function () {
            var n = r.createElement("div");
            n.appendChild(r.createComment("")), n.getElementsByTagName("*").length > 0 && (u.find.TAG = function (n, t) {
                var r = t.getElementsByTagName(n[1]),
                    u, i;
                if (n[1] === "*") {
                    for (u = [], i = 0; r[i]; i++) r[i].nodeType === 1 && u.push(r[i]);
                    r = u
                }
                return r
            }), n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function (n) {
                return n.getAttribute("href", 2)
            }), n = null
        }(), r.querySelectorAll && function () {
            var e = n,
                t = r.createElement("div"),
                o = "__sizzle__",
                i;
            if (t.innerHTML = "<p class='TEST'><\/p>", !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                n = function (t, i, s, h) {
                    var c, l;
                    if (i = i || r, !h && !n.isXML(i)) {
                        if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (i.nodeType === 1 || i.nodeType === 9)) {
                            if (c[1]) return f(i.getElementsByTagName(t), s);
                            if (c[2] && u.find.CLASS && i.getElementsByClassName) return f(i.getElementsByClassName(c[2]), s)
                        }
                        if (i.nodeType === 9) {
                            if (t === "body" && i.body) return f([i.body], s);
                            if (c && c[3]) {
                                if (l = i.getElementById(c[3]), !l || !l.parentNode) return f([], s);
                                if (l.id === c[3]) return f([l], s)
                            }
                            try {
                                return f(i.querySelectorAll(t), s)
                            } catch (k) {}
                        } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            var w = i,
                                v = i.getAttribute("id"),
                                a = v || o,
                                y = i.parentNode,
                                p = /^\s*[+~]/.test(t);
                            v ? a = a.replace(/'/g, "\\$&") : i.setAttribute("id", a), p && y && (i = i.parentNode);
                            try {
                                if (!p || y) return f(i.querySelectorAll("[id='" + a + "'] " + t), s)
                            } catch (b) {} finally {
                                v || w.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, i, s, h)
                };
                for (i in e) n[i] = e[i];
                t = null
            }
        }(),
        function () {
            var i = r.documentElement,
                t = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.msMatchesSelector,
                e, f;
            if (t) {
                e = !t.call(r.createElement("div"), "div"), f = !1;
                try {
                    t.call(r.documentElement, "[test!='']:sizzle")
                } catch (o) {
                    f = !0
                }
                n.matchesSelector = function (i, r) {
                    if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !n.isXML(i)) try {
                        if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                            var o = t.call(i, r);
                            if (o || !e || i.document && i.document.nodeType !== 11) return o
                        }
                    } catch (s) {}
                    return n(r, null, null, [i]).length > 0
                }
            }
        }(),
        function () {
            var n = r.createElement("div");
            if (n.innerHTML = "<div class='test e'><\/div><div class='test'><\/div>", !! n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                if (n.lastChild.className = "e", n.getElementsByClassName("e").length === 1) return;
                u.order.splice(1, 0, "CLASS"), u.find.CLASS = function (n, t, i) {
                    if (typeof t.getElementsByClassName != "undefined" && !i) return t.getElementsByClassName(n[1])
                }, n = null
            }
        }(), n.contains = r.documentElement.contains ? function (n, t) {
            return n !== t && (n.contains ? n.contains(t) : !0)
        } : r.documentElement.compareDocumentPosition ? function (n, t) {
            return !!(n.compareDocumentPosition(t) & 16)
        } : function () {
            return !1
        }, n.isXML = function (n) {
            var t = (n ? n.ownerDocument || n : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, y = function (t, i, r) {
            for (var s, h = [], c = "", e = i.nodeType ? [i] : i, f, o; s = u.match.PSEUDO.exec(t);) c += s[0], t = t.replace(u.match.PSEUDO, "");
            for (t = u.relative[t] ? t + "*" : t, f = 0, o = e.length; f < o; f++) n(t, e[f], h, r);
            return n.filter(c, h)
        }, n.attr = i.attr, n.selectors.attrMap = {}, i.find = n, i.expr = n.selectors, i.expr[":"] = i.expr.filters, i.unique = n.uniqueSort, i.text = n.getText, i.isXMLDoc = n.isXML, i.contains = n.contains
    }();
    var hf = /Until$/,
        cf = /^(?:parents|prevUntil|prevAll)/,
        of = /,/,
        sf = /^.[^:#\[\.,]*$/,
        bu = Array.prototype.slice,
        bt = i.expr.match.globalPOS,
        pu = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var s = this,
                t, e, r, o, u, f;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, e = s.length; t < e; t++) if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, e = this.length; t < e; t++) if (o = r.length, i.find(n, this[t], r), t > 0) for (u = o; u < r.length; u++) for (f = 0; f < o; f++) if (r[f] === r[u]) {
                r.splice(u--, 1);
                break
            }
            return r
        },
        has: function (n) {
            var t = i(n);
            return this.filter(function () {
                for (var n = 0, r = t.length; n < r; n++) if (i.contains(this, t[n])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(tr(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(tr(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? bt.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            var f = [],
                u, s, r = this[0],
                e, o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t;) {
                    for (u = 0; u < n.length; u++) i(r).is(n[u]) && f.push({
                        selector: n[u],
                        elem: r,
                        level: e
                    });
                    r = r.parentNode, e++
                }
                return f
            }
            for (o = bt.test(n) || typeof n != "string" ? i(n, t || this.context) : 0, u = 0, s = this.length; u < s; u++) for (r = this[u]; r;) {
                if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                    f.push(r);
                    break
                }
                if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11) break
            }
            return f = f.length > 1 ? i.unique(f) : f, this.pushStack(f, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(er(u[0]) || er(r[0]) ? r : i.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return i.nth(n, 2, "nextSibling")
        },
        prev: function (n) {
            return i.nth(n, 2, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return hf.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !pu[n] ? i.unique(f) : f, (this.length > 1 || of.test(u)) && cf.test(n) && (f = f.reverse()), this.pushStack(f, n, bu.call(arguments).join(","))
        }
    }), i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        nth: function (n, t, i) {
            t = t || 1;
            for (var u = 0; n; n = n[i]) if (n.nodeType === 1 && ++u === t) break;
            return n
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var kt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nf = / jQuery\d+="(?:\d+|null)"/g,
        lt = /^\s+/,
        pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        gt = /<([\w:]+)/,
        tf = /<tbody/i,
        du = /<|&#?\w+;/,
        gu = /<(?:script|style)/i,
        lf = /<(?:script|object|embed|option|style)/i,
        dt = new RegExp("<(?:" + kt + ")[\\s/>]", "i"),
        ti = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ni = /\/(java|ecma)script/i,
        ie = /^\s*<!(?:\[CDATA\[|\-\-)/,
        u = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            area: [1, "<map>", "<\/map>"],
            _default: [0, "", ""]
        }, at = bi(r);
    u.optgroup = u.option, u.tbody = u.tfoot = u.colgroup = u.caption = u.thead, u.th = u.td, i.support.htmlSerialize || (u._default = [1, "div<div>", "<\/div>"]), i.fn.extend({
        text: function (n) {
            return i.access(this, function (n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function (n) {
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var r = i(this),
                    t = r.contents();
                t.length ? t.wrapAll(n) : r.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (n) {
                this.nodeType === 1 && this.appendChild(n)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (n) {
                this.nodeType === 1 && this.insertBefore(n, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()), this.pushStack(n, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this.nextSibling)
            });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)), n
            }
        },
        remove: function (n, t) {
            for (var u = 0, r;
            (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function () {
            for (var t = 0, n;
            (n = this[t]) != null; t++) for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this
        },
        clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            return i.access(this, function (n) {
                var r = this[0] || {}, f = 0,
                    e = this.length;
                if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(nf, "") : null;
                if (typeof n == "string" && !gu.test(n) && (i.support.leadingWhitespace || !lt.test(n)) && !u[(gt.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(pt, "<$1><\/$2>");
                    try {
                        for (; f < e; f++) r = this[f] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                        r = 0
                    } catch (o) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function (n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function (t) {
                var r = i(this),
                    u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                var t = this.nextSibling,
                    r = this.parentNode;
                i(this).remove(), t ? i(t).before(n) : i(r).append(n)
            })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function (n) {
            return this.remove(n, !0)
        },
        domManip: function (n, r, u) {
            var c, o, f, h, e = n[0],
                a = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && ti.test(e)) return this.each(function () {
                i(this).domManip(n, r, u, !0)
            });
            if (i.isFunction(e)) return this.each(function (f) {
                var o = i(this);
                n[0] = e.call(this, f, r ? o.html() : t), o.domManip(n, r, u)
            });
            if (this[0]) {
                if (h = e && e.parentNode, c = i.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? {
                    fragment: h
                } : i.buildFragment(n, this, a), f = c.fragment, o = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild, o) {
                    r = r && i.nodeName(o, "tr");
                    for (var s = 0, l = this.length, v = l - 1; s < l; s++) u.call(r ? eu(this[s], o) : this[s], c.cacheable || l > 1 && s < v ? i.clone(f, !0, !0) : f)
                }
                a.length && i.each(a, function (n, t) {
                    t.src ? i.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ie, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), i.buildFragment = function (n, t, u) {
        var o, h, s, e, f = n[0];
        return t && t[0] && (e = t[0].ownerDocument || t[0]), e.createDocumentFragment || (e = r), n.length === 1 && typeof f == "string" && f.length < 512 && e === r && f.charAt(0) === "<" && !lf.test(f) && (i.support.checkClone || !ti.test(f)) && (i.support.html5Clone || !dt.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (o = s)), o || (o = e.createDocumentFragment(), i.clean(n, e, o, u)), h && (i.fragments[f] = s ? o : 1), {
            fragment: o,
            cacheable: h
        }
    }, i.fragments = {}, i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (r) {
            var o = [],
                u = i(r),
                s = this.length === 1 && this[0].parentNode,
                f, h, e;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && u.length === 1) return u[t](this[0]), this;
            for (f = 0, h = u.length; f < h; f++) e = (f > 0 ? this.clone(!0) : this).get(), i(u[f])[t](e), o = o.concat(e);
            return this.pushStack(o, n, u.selector)
        }
    }), i.extend({
        clone: function (n, t, r) {
            var f, e, u, o = i.support.html5Clone || i.isXMLDoc(n) || !dt.test("<" + n.nodeName + ">") ? n.cloneNode(!0) : su(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n)) for (nr(n, o), f = it(n), e = it(o), u = 0; f[u]; ++u) e[u] && nr(f[u], e[u]);
            if (t && (wi(n, o), r)) for (f = it(n), e = it(o), u = 0; f[u]; ++u) wi(f[u], e[u]);
            return f = e = null, o
        },
        clean: function (n, t, f, e) {
            var d, h, c, l = [],
                a, o, b, v, k, nt;
            for (t = t || r, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), a = 0;
            (o = n[a]) != null; a++) if (typeof o == "number" && (o += ""), o) {
                if (typeof o == "string") if (du.test(o)) {
                    o = o.replace(pt, "<$1><\/$2>");
                    var g = (gt.exec(o) || ["", ""])[1].toLowerCase(),
                        p = u[g] || u._default,
                        tt = p[0],
                        s = t.createElement("div"),
                        w = at.childNodes,
                        y;
                    for (t === r ? at.appendChild(s) : bi(t).appendChild(s), s.innerHTML = p[1] + o + p[2]; tt--;) s = s.lastChild;
                    if (!i.support.tbody) for (b = tf.test(o), v = g === "table" && !b ? s.firstChild && s.firstChild.childNodes : p[1] === "<table>" && !b ? s.childNodes : [], c = v.length - 1; c >= 0; --c) i.nodeName(v[c], "tbody") && !v[c].childNodes.length && v[c].parentNode.removeChild(v[c]);
                    !i.support.leadingWhitespace && lt.test(o) && s.insertBefore(t.createTextNode(lt.exec(o)[0]), s.firstChild), o = s.childNodes, s && (s.parentNode.removeChild(s), w.length > 0 && (y = w[w.length - 1], y && y.parentNode && y.parentNode.removeChild(y)))
                } else o = t.createTextNode(o);
                if (!i.support.appendChecked) if (o[0] && typeof (k = o.length) == "number") for (c = 0; c < k; c++) di(o[c]);
                else di(o);
                o.nodeType ? l.push(o) : l = i.merge(l, o)
            }
            if (f) for (d = function (n) {
                return !n.type || ni.test(n.type)
            }, a = 0; l[a]; a++) h = l[a], e && i.nodeName(h, "script") && (!h.type || ni.test(h.type)) ? e.push(h.parentNode ? h.parentNode.removeChild(h) : h) : (h.nodeType === 1 && (nt = i.grep(h.getElementsByTagName("script"), d), l.splice.apply(l, [a + 1, 0].concat(nt))), f.appendChild(h));
            return l
        },
        cleanData: function (n) {
            for (var r, f, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, u, e = 0;
            (t = n[e]) != null; e++) if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (f = t[i.expando], f)) {
                if (r = o[f], r && r.events) {
                    for (u in r.events) s[u] ? i.event.remove(t, u) : i.removeEvent(t, u, r.handle);
                    r.handle && (r.handle.elem = null)
                }
                h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando), delete o[f]
            }
        }
    });
    var ft = /alpha\([^)]*\)/i,
        ee = /opacity=([^)]*)/,
        re = /([A-Z]|^ms)/g,
        ue = /^[\-+]?(?:\d*\.)?\d+$/i,
        ot = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        yf = /^([\-+])=([\-+.\de]+)/,
        pf = /^margin/,
        af = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, h = ["Top", "Right", "Bottom", "Left"],
        l, ci, hi;
    i.fn.css = function (n, r) {
        return i.access(this, function (n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        }, n, r, arguments.length > 1)
    }, i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = l(n, "opacity");
                        return i === "" ? "1" : i
                    }
                    return n.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if ( !! n && n.nodeType !== 3 && n.nodeType !== 8 && !! n.style) {
                var s, o, h = i.camelCase(r),
                    c = n.style,
                    e = i.cssHooks[h];
                if (r = i.cssProps[h] || h, u === t) return e && "get" in e && (s = e.get(n, !1, f)) !== t ? s : c[r];
                if (o = typeof u, o === "string" && (s = yf.exec(u)) && (u = +(s[1] + 1) * +s[2] + parseFloat(i.css(n, r)), o = "number"), u == null || o === "number" && isNaN(u)) return;
                if (o !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u)) !== t) try {
                    c[r] = u
                } catch (l) {}
            }
        },
        css: function (n, r, u) {
            var e, f;
            return (r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === "cssFloat" && (r = "float"), f && "get" in f && (e = f.get(n, !0, u)) !== t) ? e : l ? l(n, r) : void 0
        },
        swap: function (n, t, i) {
            var u = {}, f, r;
            for (r in t) u[r] = n.style[r], n.style[r] = t[r];
            f = i.call(n);
            for (r in t) n.style[r] = u[r];
            return f
        }
    }), i.curCSS = i.css, r.defaultView && r.defaultView.getComputedStyle && (ci = function (n, t) {
        var r, e, u, o, f = n.style;
        return t = t.replace(re, "-$1").toLowerCase(), (e = n.ownerDocument.defaultView) && (u = e.getComputedStyle(n, null)) && (r = u.getPropertyValue(t), r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))), !i.support.pixelMargin && u && pf.test(t) && ot.test(r) && (o = f.width, f.width = r, r = u.width, f.width = o), r
    }), r.documentElement.currentStyle && (hi = function (n, t) {
        var e, u, f, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i == null && r && (f = r[t]) && (i = f), ot.test(i) && (e = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = e, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    }), l = ci || hi, i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r) return n.offsetWidth !== 0 ? br(n, t, u) : i.swap(n, af, function () {
                    return br(n, t, u)
                })
            },
            set: function (n, t) {
                return ue.test(t) ? t + "px" : t
            }
        }
    }), i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return ee.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var f = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                r = u && u.filter || f.filter || "";
            (f.zoom = 1, t >= 1 && i.trim(r.replace(ft, "")) === "" && (f.removeAttribute("filter"), u && !u.filter)) || (f.filter = ft.test(r) ? r.replace(ft, e) : r + " " + e)
        }
    }), i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    return t ? l(n, "margin-right") : n.style.marginRight
                })
            }
        })
    }), i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        var r = n.offsetWidth,
            t = n.offsetHeight;
        return r === 0 && t === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    }), i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + h[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }
    });
    var kf = /%20/g,
        df = /\[\]$/,
        li = /\r?\n/g,
        bf = /#.*$/,
        tu = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        nu = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        iu = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        uu = /^(?:GET|HEAD)$/,
        ru = /^\/\//,
        vi = /\?/,
        fu = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        au = /^(?:select|textarea)/i,
        ai = /\s+/,
        yu = /([?&])_=[^&]*/,
        si = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        ui = i.fn.load,
        ct = {}, ri = {}, o, s, fi = ["*/"] + ["*"];
    try {
        o = vf.href
    } catch (oe) {
        o = r.createElement("a"), o.href = "", o = o.href
    }
    s = si.exec(o.toLowerCase()) || [], i.fn.extend({
        load: function (n, r, u) {
            var f, s, o, e;
            return typeof n != "string" && ui ? ui.apply(this, arguments) : this.length ? (f = n.indexOf(" "), f >= 0 && (s = n.slice(f, n.length), n = n.slice(0, f)), o = "GET", r && (i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional), o = "POST")), e = this, i.ajax({
                url: n,
                type: o,
                dataType: "html",
                data: r,
                complete: function (n, t, r) {
                    r = n.responseText, n.isResolved() && (n.done(function (n) {
                        r = n
                    }), e.html(s ? i("<div>").append(r.replace(fu, "")).find(s) : r)), u && e.each(u, [r, t, n])
                }
            }), this) : this
        },
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || au.test(this.nodeName) || nu.test(this.type))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(li, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(li, "\r\n")
                }
            }).get()
        }
    }), i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    }), i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    }), i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function (n, t) {
            return t ? pr(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), pr(n, t), n
        },
        ajaxSettings: {
            url: o,
            isLocal: iu.test(s[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": fi
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: yr(ct),
        ajaxTransport: yr(ri),
        ajax: function (n, r) {
            function w(n, r, s, l) {
                if (e !== 2) {
                    e = 2, k && clearTimeout(k), c = t, nt = l || "", f.readyState = n > 0 ? 4 : 0;
                    var y, g, w, a = r,
                        ut = s ? hu(u, f, s) : t,
                        rt, tt;
                    if (n >= 200 && n < 300 || n === 304) if (u.ifModified && ((rt = f.getResponseHeader("Last-Modified")) && (i.lastModified[o] = rt), (tt = f.getResponseHeader("Etag")) && (i.etag[o] = tt)), n === 304) a = "notmodified", y = !0;
                    else try {
                        g = ou(u, ut), a = "success", y = !0
                    } catch (ft) {
                        a = "parsererror", w = ft
                    } else w = a, (!a || n) && (a = "error", n < 0 && (n = 0));
                    f.status = n, f.statusText = "" + (r || a), y ? b.resolveWith(h, [g, a, f]) : b.rejectWith(h, [f, a, w]), f.statusCode(p), p = t, v && d.trigger("ajax" + (y ? "Success" : "Error"), [f, u, y ? g : w]), it.fireWith(h, [f, a]), v && (d.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop"))
                }
            }
            var tt, g;
            typeof n == "object" && (r = n, n = t), r = r || {};
            var u = i.ajaxSetup({}, r),
                h = u.context || u,
                d = h !== u && (h.nodeType || h instanceof i) ? i(h) : i.event,
                b = i.Deferred(),
                it = i.Callbacks("once memory"),
                p = u.statusCode || {}, o, ut = {}, ft = {}, nt, y, c, k, l, e = 0,
                v, a, f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = ft[i] = ft[i] || n, ut[n] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? nt : null
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!y) for (y = {}; i = tu.exec(nt);) y[i[1].toLowerCase()] = i[2];
                            i = y[n.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this
                    },
                    abort: function (n) {
                        return n = n || "abort", c && c.abort(n), w(0, n), this
                    }
                };
            if (b.promise(f), f.success = f.done, f.error = f.fail, f.complete = it.add, f.statusCode = function (n) {
                if (n) {
                    var t;
                    if (e < 2) for (t in n) p[t] = [p[t], n[t]];
                    else t = n[f.status], f.then(t, t)
                }
                return this
            }, u.url = ((n || u.url) + "").replace(bf, "").replace(ru, s[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(ai), u.crossDomain == null && (l = si.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == s[1] && l[2] == s[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (s[3] || (s[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), rt(ct, u, r, f), e === 2) return !1;
            v = u.global, u.type = u.type.toUpperCase(), u.hasContent = !uu.test(u.type), v && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (vi.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), g = u.url.replace(yu, "$1_=" + tt), u.url = g + (g === u.url ? (vi.test(u.url) ? "&" : "?") + "_=" + tt : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + fi + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || e === 2)) return f.abort(), !1;
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) f[a](u[a]);
            if (c = rt(ri, u, r, f), c) {
                f.readyState = 1, v && d.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (k = setTimeout(function () {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    e = 1, c.send(ut, w)
                } catch (et) {
                    if (e < 2) w(-1, et);
                    else throw et;
                }
            } else w(-1, "No Transport");
            return f
        },
        param: function (n, r) {
            var f = [],
                e = function (n, t) {
                    t = i.isFunction(t) ? t() : t, f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                }, u;
            if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
                e(this.name, this.value)
            });
            else for (u in n) vt(u, n[u], r, e);
            return f.join("&").replace(kf, "+")
        }
    }), i.extend({
        active: 0,
        lastModified: {},
        etag: {}
    }), oi = i.now(), p = /(\=)\?(&|$)|\?\?/i, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return i.expando + "_" + oi++
        }
    }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var l = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (p.test(t.url) || l && p.test(t.data))) {
            var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                c = n[f],
                e = t.url,
                s = t.data,
                h = "$1" + f + "$2";
            return t.jsonp !== !1 && (e = e.replace(p, h), t.url === e && (l && (s = s.replace(p, h)), t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))), t.url = e, t.data = s, n[f] = function (n) {
                o = [n]
            }, u.always(function () {
                n[f] = c, o && i.isFunction(c) && n[f](o[0])
            }), t.converters["script json"] = function () {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function (n) {
        n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function (f, e) {
                    i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function (n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                    }, u.insertBefore(i, u.firstChild)
                },
                abort: function () {
                    i && i.onload(0, 1)
                }
            }
        }
    }), tt = n.ActiveXObject ? function () {
        for (var n in c) c[n](0, 1)
    } : !1, ei = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function () {
        return !this.isLocal && ar() || lu()
    } : ar,
    function (n) {
        i.extend(i.support, {
            ajax: !! n,
            cors: !! n && "withCredentials" in n
        })
    }(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function (r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function (f, e) {
                    var o = r.xhr(),
                        h, s;
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields) for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch (l) {}
                    o.send(r.hasContent && r.data || null), u = function (n, f) {
                        var l, v, y, s, a;
                        try {
                            if (u && (f || o.readyState === 4)) if (u = t, h && (o.onreadystatechange = i.noop, tt && delete c[h]), f) o.readyState !== 4 && o.abort();
                            else {
                                l = o.status, y = o.getAllResponseHeaders(), s = {}, a = o.responseXML, a && a.documentElement && (s.xml = a);
                                try {
                                    s.text = o.responseText
                                } catch (n) {}
                                try {
                                    v = o.statusText
                                } catch (w) {
                                    v = ""
                                }!l && r.isLocal && !r.crossDomain ? l = s.text ? 200 : 404 : l === 1223 && (l = 204)
                            }
                        } catch (p) {
                            f || e(-1, p)
                        }
                        s && e(l, v, s, y)
                    }, !r.async || o.readyState === 4 ? u() : (h = ++ei, tt && (c || (c = {}, i(n).unload(tt)), c[h] = u), o.onreadystatechange = u)
                },
                abort: function () {
                    u && u(0, 1)
                }
            }
        }
    });
    var ht = {}, f, v, cu = /^(?:toggle|show|hide)$/,
        vu = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        g, b = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        k;
    i.fn.extend({
        show: function (n, t, r) {
            var u, e, f, o;
            if (n || n === 0) return this.animate(y("show", 3), n, t, r);
            for (f = 0, o = this.length; f < o; f++) u = this[f], u.style && (e = u.style.display, !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""), (e === "" && i.css(u, "display") === "none" || !i.contains(u.ownerDocument.documentElement, u)) && i._data(u, "olddisplay", vr(u.nodeName)));
            for (f = 0; f < o; f++) u = this[f], u.style && (e = u.style.display, (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this
        },
        hide: function (n, t, r) {
            if (n || n === 0) return this.animate(y("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++) f = this[u], f.style && (e = i.css(f, "display"), e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++) this[u].style && (this[u].style.display = "none");
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function (n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function () {
                var t = u ? n : i(this).is(":hidden");
                i(this)[t ? "show" : "hide"]()
            }) : this.animate(y("toggle", 3), n, t, r), this
        },
        fadeTo: function (n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var e = i.extend({}, f),
                    w = this.nodeType === 1,
                    y = w && i(this).is(":hidden"),
                    r, u, t, o, v, p, c, s, h, l, a;
                e.animatedProperties = {};
                for (t in n) if (r = i.camelCase(t), t !== r && (n[r] = n[t], delete n[t]), (v = i.cssHooks[r]) && "expand" in v) {
                    p = v.expand(n[r]), delete n[r];
                    for (t in p) t in n || (n[t] = p[t])
                }
                for (r in n) {
                    if (u = n[r], i.isArray(u) ? (e.animatedProperties[r] = u[1], u = n[r] = u[0]) : e.animatedProperties[r] = e.specialEasing && e.specialEasing[r] || e.easing || "swing", u === "hide" && y || u === "show" && !y) return e.complete.call(this);
                    w && (r === "height" || r === "width") && (e.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || vr(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                e.overflow != null && (this.style.overflow = "hidden");
                for (t in n) o = new i.fx(this, e, t), u = n[t], cu.test(u) ? (a = i._data(this, "toggle" + t) || (u === "toggle" ? y ? "show" : "hide" : 0), a ? (i._data(this, "toggle" + t, a === "show" ? "hide" : "show"), o[a]()) : o[u]()) : (c = vu.exec(u), s = o.cur(), c ? (h = parseFloat(c[2]), l = c[3] || (i.cssNumber[t] ? "" : "px"), l !== "px" && (i.style(this, t, (h || 1) + l), s = (h || 1) / o.cur() * s, i.style(this, t, s + l)), c[1] && (h = (c[1] === "-=" ? -1 : 1) * h + s), o.custom(s, h, l)) : o.custom(s, u, ""));
                return !0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function (n, r, u) {
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                function e(n, t, r) {
                    var f = t[r];
                    i.removeData(n, r, !0), f.stop(u)
                }
                var t, o = !1,
                    f = i.timers,
                    r = i._data(this);
                if (u || i._unmark(!0, this), n == null) for (t in r) r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t);
                else r[t = n + ".run"] && r[t].stop && e(this, r, t);
                for (t = f.length; t--;) f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(), o = !0, f.splice(t, 1));
                u && o || i.dequeue(this, n)
            })
        }
    }), i.each({
        slideDown: y("show", 1),
        slideUp: y("hide", 1),
        slideToggle: y("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    }), i.extend({
        speed: function (n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function (n) {
                i.isFunction(u.old) && u.old.call(this), u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
            }, u
        },
        easing: {
            linear: function (n) {
                return n
            },
            swing: function (n) {
                return -Math.cos(n * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (n, t, i) {
            this.options = t, this.elem = n, this.prop = i, t.orig = t.orig || {}
        }
    }), i.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (i.fx.step[this.prop] || i.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t
        },
        custom: function (n, r, u) {
            function e(n) {
                return f.step(n)
            }
            var f = this,
                o = i.fx;
            this.startTime = k || cr(), this.end = r, this.now = this.start = n, this.pos = this.state = 0, this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function () {
                i._data(f.elem, "fxshow" + f.prop) === t && (f.options.hide ? i._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && i._data(f.elem, "fxshow" + f.prop, f.end))
            }, e() && i.timers.push(e) && !g && (g = setInterval(o.tick, o.interval))
        },
        show: function () {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop), this.options.show = !0, n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), i(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (n) {
            var r, e, f, o = k || cr(),
                s = !0,
                u = this.elem,
                t = this.options;
            if (n || o >= t.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties) t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow == null || i.support.shrinkWrapBlocks || i.each(["", "X", "Y"], function (n, i) {
                        u.style["overflow" + i] = t.overflow[n]
                    }), t.hide && i(u).hide(), t.hide || t.show) for (r in t.animatedProperties) i.style(u, r, t.orig[r]), i.removeData(u, "fxshow" + r, !0), i.removeData(u, "toggle" + r, !0);
                    f = t.complete, f && (t.complete = !1, f.call(u))
                }
                return !1
            }
            return t.duration == Infinity ? this.now = o : (e = o - this.startTime, this.state = e / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, e, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, i.extend(i.fx, {
        tick: function () {
            for (var r, t = i.timers, n = 0; n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(g), g = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (n) {
                i.style(n.elem, "opacity", n.now)
            },
            _default: function (n) {
                n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
            }
        }
    }), i.each(b.concat.apply([], b), function (n, t) {
        t.indexOf("margin") && (i.fx.step[t] = function (n) {
            i.style(n.elem, t, Math.max(0, n.now) + n.unit)
        })
    }), i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }), ii = /^t(?:able|d|h)$/i, ut = /^(?:body|html)$/i, et = "getBoundingClientRect" in r.documentElement ? function (n, t, r, u) {
        try {
            u = n.getBoundingClientRect()
        } catch (v) {}
        if (!u || !i.contains(r, n)) return u ? {
            top: u.top,
            left: u.left
        } : {
            top: 0,
            left: 0
        };
        var f = t.body,
            e = lr(t),
            c = r.clientTop || f.clientTop || 0,
            l = r.clientLeft || f.clientLeft || 0,
            a = e.pageYOffset || i.support.boxModel && r.scrollTop || f.scrollTop,
            o = e.pageXOffset || i.support.boxModel && r.scrollLeft || f.scrollLeft,
            s = u.top + a - c,
            h = u.left + o - l;
        return {
            top: s,
            left: h
        }
    } : function (n, t, r) {
        for (var e, c = n.offsetParent, l = n, s = t.body, h = t.defaultView, o = h ? h.getComputedStyle(n, null) : n.currentStyle, f = n.offsetTop, u = n.offsetLeft;
        (n = n.parentNode) && n !== s && n !== r;) {
            if (i.support.fixedPosition && o.position === "fixed") break;
            e = h ? h.getComputedStyle(n, null) : n.currentStyle, f -= n.scrollTop, u -= n.scrollLeft, n === c && (f += n.offsetTop, u += n.offsetLeft, i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !ii.test(n.nodeName)) && (f += parseFloat(e.borderTopWidth) || 0, u += parseFloat(e.borderLeftWidth) || 0), l = c, c = n.offsetParent), i.support.subtractsBorderForOverflowNotVisible && e.overflow !== "visible" && (f += parseFloat(e.borderTopWidth) || 0, u += parseFloat(e.borderLeftWidth) || 0), o = e
        }
        return (o.position === "relative" || o.position === "static") && (f += s.offsetTop, u += s.offsetLeft), i.support.fixedPosition && o.position === "fixed" && (f += Math.max(r.scrollTop, s.scrollTop), u += Math.max(r.scrollLeft, s.scrollLeft)), {
            top: f,
            left: u
        }
    }, i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var r = this[0],
            u = r && r.ownerDocument;
        return u ? r === u.body ? i.offset.bodyOffset(r) : et(r, u, u.documentElement) : null
    }, i.offset = {
        bodyOffset: function (n) {
            var r = n.offsetTop,
                t = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (r += parseFloat(i.css(n, "marginTop")) || 0, t += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: r,
                left: t
            }
        },
        setOffset: function (n, t, r) {
            var s = i.css(n, "position");
            s === "static" && (n.style.position = "relative");
            var h = i(n),
                c = h.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (s === "absolute" || s === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {}, e = {}, f, o;
            v ? (e = h.position(), f = e.top, o = e.left) : (f = parseFloat(l) || 0, o = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, c)), t.top != null && (u.top = t.top - c.top + f), t.left != null && (u.left = t.left - c.left + o), "using" in t ? t.using.call(n, u) : h.css(u)
        }
    }, i.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var u = this[0],
                r = this.offsetParent(),
                n = this.offset(),
                t = ut.test(r[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : r.offset();
            return n.top -= parseFloat(i.css(u, "marginTop")) || 0, n.left -= parseFloat(i.css(u, "marginLeft")) || 0, t.top += parseFloat(i.css(r[0], "borderTopWidth")) || 0, t.left += parseFloat(i.css(r[0], "borderLeftWidth")) || 0, {
                top: n.top - t.top,
                left: n.left - t.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !ut.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(this, function (n, f, e) {
                var o = lr(n);
                if (e === t) return o ? r in o ? o[r] : i.support.boxModel && o.document.documentElement[f] || o.document.body[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    }), i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        var u = "client" + n,
            f = "scroll" + n,
            e = "offset" + n;
        i.fn["inner" + n] = function () {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, r, "padding")) : this[r]() : null
        }, i.fn["outer" + n] = function (n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, r, n ? "margin" : "border")) : this[r]() : null
        }, i.fn[r] = function (n) {
            return i.access(this, function (n, r, o) {
                var s, l, c, h;
                if (i.isWindow(n)) return s = n.document, l = s.documentElement[u], i.support.boxModel && l || s.body && s.body[u] || l;
                if (n.nodeType === 9) return (s = n.documentElement, s[u] >= s[f]) ? s[u] : Math.max(n.body[f], s[f], n.body[e], s[e]);
                if (o === t) return c = i.css(n, r), h = parseFloat(c), i.isNumeric(h) ? h : c;
                i(n).css(r, o)
            }, r, n, arguments.length, null)
        }
    }), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window), MultiViewLang.Following = "Following", MultiViewLang.Unfollow = "Unfollow", MultiViewLang.Follow = "Follow", MultiViewLang.FollowRequested = "Requested", MultiViewLang.Liked = "Liked", MultiViewLang.Like = "Like", MultiViewLang.MonthsAgo = " month ago", MultiViewLang.WeeksAgo = " weeks ago", MultiViewLang.DaysAgo = " days ago", MultiViewLang.HoursAgo = " hours ago", MultiViewLang.MinutesAgo = " minuntes ago", MultiViewLang.SecondsAgo = " seconds ago", MultiViewLang.JustNow = " Just now", MultiViewLang.ConfirmDeleteMediaComment = "Are you sure to delete the comment? ", MultiViewLang.ConfirmDeleteMedia = "Are you sure to delete the photo? ", MultiViewLang.UserSettingsSaved = "Preferences saved", MultiViewLang.UserSettingsSaveFailed = "Saving preferences failed...", MultiViewLang.ShareInstagramPhoto = " #ShareIG ", MultiViewLang.PhotoBy = "Instagram photo by ", MultiViewLang.SharePinsta = "Explore Instagram online with great experience of Pinsta.me! Follow interesting people, post comment and share photo to Facebook, twitter and all other websites!", MultiViewLang.ShareUsersPinsta = MultiViewLang.SharePinsta, MultiViewLang.ShareMyPinsta = MultiViewLang.SharePinsta, MultiViewLang.LikedYourPhoto = "liked your photo.", MultiViewLang.LeftAComment = "left a comment on your photo: ";
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
this.jsviews || this.jQuery && jQuery.views || function (n, t) {
    function nt(n, t) {
        var u = "\\" + n.charAt(0),
            e = "\\" + n.charAt(1),
            i = "\\" + t.charAt(0),
            r = "\\" + t.charAt(1);
        return f.rTag = p = e + "(?:(?:(\\w+(?=[\\/\\s" + i + "]))|(?:(\\w+)?(:)|(>)|(\\*)))\\s*((?:[^" + i + "]|" + i + "(?!" + r + "))*?)", p = new RegExp(u + p + "(\\/)?|(?:\\/(\\w+)))" + i + r, "g"), tt = new RegExp("<.*>|" + n + ".*" + t), this
    }
    function g(n) {
        var i = this,
            r = i.tmpl.helpers || {};
        return n = (i.ctx[n] !== t ? i.ctx : r[n] !== t ? r : v[n] !== t ? v : {})[n], typeof n != "function" ? n : function () {
            return n.apply(i, arguments)
        }
    }
    function kt(n, t, i) {
        var r = t.tmpl.converters;
        return n = r && r[n] || c[n], n ? n.call(t, i) : i
    }
    function st(n, r, u, f, o) {
        var h, s = o.props && o.props.tmpl,
            v = r.tmpl.tags,
            y = r.tmpl.templates,
            c = arguments,
            l = v && v[n] || a[n];
        return l ? (f = f && r.tmpl.tmpls[f - 1], s = s || f || t, o.tmpl = "" + s === s ? y && y[s] || e[s] || e(s) : s, o.isTag = i, o.converter = u, o.view = r, o.renderContent = d, h = l.apply(o, c.length > 5 ? bt.call(c, 5) : []), h || (h == t ? "" : h.toString())) : ""
    }
    function s(n, i, r, f, e, o, s) {
        var c = r.views,
            h = {
                tmpl: e,
                path: i,
                parent: r,
                data: f,
                ctx: n,
                views: u.isArray(f) ? [] : {},
                _hlp: g,
                _onRender: s
            };
        return u.isArray(c) ? c.splice(h.key = h.index = o !== t ? o : c.length, 0, h) : (c[h.key = "_" + dt++] = h, h.index = r.index), h
    }
    function l(n, i, r, u, f) {
        var e, o;
        if (r && typeof r == "object" && !r.nodeType) {
            for (e in r) i(e, r[e]);
            return n
        }
        return r && u !== t ? "" + r === r && (u === null ? delete i[r] : (u = f ? f(r, u) : u) && (i[r] = u)) : f && (u = f(t, u || r)), (o = ut.onStoreItem) && o(i, r, u, f), u
    }
    function e(n, t) {
        return l(this, e, n, t, k)
    }
    function a(n, t) {
        return l(this, a, n, t)
    }
    function v(n, t) {
        return l(this, v, n, t)
    }
    function c(n, t) {
        return l(this, c, n, t)
    }
    function d(n, o, h, c, l, a) {
        var w, it, nt, p, ft, ut, tt, b, y, a, g, d, rt, v = this,
            k = "";
        if (c === i && (d = i, c = 0), v.isTag ? (y = v.tmpl, v.props && v.ctx && r(v.ctx, v.props), v.ctx && o && (o = r(v.ctx, o)), o = v.ctx || o, l = l || v.view, h = h || v.path, c = c || v.key, g = v.props) : y = v.jquery && v[0] || v, l = l || f.topView, b = l.ctx, y && (n === l && (n = l.data, rt = i), o = o && o === b ? b : o ? r(r({}, b), o) : b, y.fn || (y = e[y] || e(y)), a = a || l._onRender, y)) {
            if (u.isArray(n) && !rt) for (p = d ? l : c !== t && l || s(o, h, l, n, y, c, a), w = 0, it = n.length; w < it; w++) nt = n[w], tt = y.fn(nt, s(o, h, p, nt, y, (c || 0) + w, a), f), k += a ? a(tt, y, g) : tt;
            else p = d ? l : s(o, h, l, n, y, c, a), p._onRender = a, k += y.fn(n, p, f);
            return l.topKey = p.key, a ? a(k, y, g, p.key, h) : k
        }
        return ""
    }
    function h(n, t) {
        throw (t ? t.name + ': "' + t.message + '"' : "Syntax error") + (n ? " \n" + n : "");
    }
    function b(n, t, r) {
        function ot(t) {
            t -= y, t && o.push(n.substr(y, t).replace(ht, "\\n"))
        }
        function wt(t, u, f, s, h, c, l, v, p, w) {
            h && (s = ":", f = "html");
            var b = "",
                g = "",
                k = !v && !s && !r;
            if (u = u || s, ot(w), y = w + t.length, c ? a && o.push(["*", l.replace(ct, "$1")]) : u ? (u === "else" && (e[5] = n.substring(e[5], w), e = d.pop(), o = e[3], k = i), l = l ? et(l, r).replace(pt, function (n, t, i) {
                return t ? g += i + "," : b += i + ",", ""
            }) : "", b = b.slice(0, -1), l = l.slice(0, -1), ft = [u, f || "", l, k && [], "{" + (b ? "props:{" + b + "}," : "") + "path:'" + l + "'" + (g ? ",ctx:{" + g.slice(0, -1) + "}" : "") + "}"], k && (d.push(e), e = ft, e[5] = y), o.push(ft)) : p && (e[5] = n.substring(e[5], w), e = d.pop()), !e) throw "Expected block tag";
            o = e[3]
        }
        var ft, f, c, v, u, ut, st, at, tt, nt, rt, l, s, g, k, a, yt = t ? {
            allowCode: a = t.allowCode,
            debug: t.debug
        } : {}, vt = t && t.tmpls,
            w = [],
            y = 0,
            d = [],
            o = w,
            e = [, , , w],
            bt = 0;
        for (n = n.replace(lt, "\\$1"), n.replace(p, wt), ot(n.length), v = w.length, u = v ? "" : '"";', c = 0; c < v; c++) f = w[c], "" + f === f ? u += '"' + f + '"+' : f[0] === "*" ? u = u.slice(0, c ? -1 : -3) + ";" + f[1] + (c + 1 < v ? "ret+=" : "") : (rt = f[0], l = f[1], s = f[2], o = f[3], g = f[4], n = f[5], o && (k = it(n, yt, t, bt++), b(n, k), vt.push(k)), nt = nt || g.indexOf("view") > -1, u += (rt === ":" ? l === "html" ? (st = i, "e(" + s) : l ? (tt = i, 'c("' + l + '",view,' + s) : (at = i, "((v=" + s + ')!=u?v:""') : (ut = i, 't("' + rt + '",view,"' + (l || "") + '",' + (o ? vt.length : '""') + "," + g + (s ? "," : "") + s)) + ")+");
        u = ni + (at ? "v," : "") + (ut ? "t=j.tag," : "") + (tt ? "c=j.convert," : "") + (st ? "e=j.converters.html," : "") + "ret; try{\n\n" + (yt.debug ? "debugger;" : "") + (a ? "ret=" : "return ") + u.slice(0, -1) + ";\n\n" + (a ? "return ret;" : "") + "}catch(e){return j.err(e);}";
        try {
            u = new Function("data, view, j, b, u", u)
        } catch (kt) {
            h("Error in compiled template code:\n" + u, kt)
        }
        return t && (t.fn = u, t.useVw = tt || nt || ut), u
    }
    function et(n, t) {
        function s(n, s, c, l, a, v, p, w, b, k, d, g, nt, tt, it, rt) {
            function ft(n, t, i, r, u, f, e) {
                if (t) {
                    var s, o = (i ? 'view._hlp("' + i + '")' : r ? "view" : "data") + (e ? (u ? "." + u : i ? "" : r ? "" : "." + t) + (f || "") : (e = i ? "" : r ? u || "" : t, ""));
                    return s = e ? "." + e : "", ut || (o = o + s), o = o.slice(0, 9) === "view.data" ? o.slice(5) : o, ut && (o = "b(" + o + ',"' + e + '")' + s), o
                }
                return n
            }
            a = a || "", c = c || s || d, l = l || w, b = b || it || "", a = a || "";
            var ut = t && b !== "(";
            if (v) h();
            else return u ? (u = !g, u ? n : '"') : f ? (f = !nt, f ? n : '"') : (c ? (r++, c) : "") + (rt ? r ? "" : o ? (o = y, "\b") : "," : p ? (r && h(), o = i, "\b" + l + ":") : l ? l.replace(vt, ft) + (b ? (e[++r] = i, b) : a) : a ? n : tt ? (e[r--] = y, tt) + (b ? (e[++r] = i, b) : "") : k ? (e[r] || h(), ",") : s ? "" : (u = g, f = nt, '"'))
        }
        var o, e = {}, r = 0,
            f = y,
            u = y;
        return n = (n + " ").replace(yt, s)
    }
    function k(n, i, u, f) {
        function v(t) {
            if ("" + t === t || t.nodeType > 0) {
                try {
                    h = t.nodeType > 0 ? t : !tt.test(t) && o && o(t)[0]
                } catch (i) {}
                return h && h.type && (t = e[h.getAttribute(ft)], t || (n = n || "_" + gt++, h.setAttribute(ft, n), t = k(n, h.innerHTML, u, f), e[n] = t)), t
            }
        }
        var s, h, c, l, a;
        if (i = i || "", s = v(i), f = f || (i.markup ? i : {}), f.name = n, l = f.templates, !s && i.markup && (s = v(i.markup)) && s.fn && (s.debug !== i.debug || s.allowCode !== i.allowCode) && (s = s.markup), s !== t) {
            n && !u && (w[n] = function () {
                return i.render.apply(i, arguments)
            }), s.fn || i.fn ? s.fn && (i = n && n !== s.name ? r(r({}, s), f) : s) : (i = it(s, f, u, 0), b(s, i));
            for (c in l) a = l[c], a.name !== c && (l[c] = k(c, a, i));
            return i
        }
    }
    function it(n, t, i, u) {
        function e(n) {
            i[n] && (f[n] = r(r({}, i[n]), t[n]))
        }
        t = t || {};
        var f = {
            markup: n,
            tmpls: [],
            links: [],
            render: d
        };
        return i && (i.templates && (f.templates = r(r({}, i.templates), t.templates)), f.parent = i, f.name = i.name + "[" + u + "]", f.key = u), r(f, t), i && (e("templates"), e("tags"), e("helpers"), e("converters")), f
    }
    function ot(n) {
        return rt[n] || (rt[n] = "&#" + n.charCodeAt(0) + ";")
    }
    var at = "v1.0pre",
        u, p, tt, r, ut = {}, y = !1,
        i = !0,
        o = n.jQuery,
        vt = /^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.]*?)(?:[.[]([\w$]+)\]?)?|(['"]).*\8)$/g,
        yt = /(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g,
        ht = /\r?\n/g,
        ct = /\\(['"])/g,
        lt = /\\?(['"])/g,
        pt = /\x08(~)?([^\x08]+)\x08/g,
        dt = 0,
        gt = 0,
        rt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;"
        }, ft = "data-jsv-tmpl",
        ni = "var j=j||" + (o ? "jQuery." : "js") + "views,",
        wt = /[\x00"&'<>]/g,
        bt = Array.prototype.slice,
        w = {}, f = {
            jsviews: at,
            sub: ut,
            debugMode: i,
            err: function (n) {
                return f.debugMode ? "<br/><b>Error:<\/b> <em> " + (n.message || n) + ". <\/em>" : '""'
            },
            tmplFn: b,
            render: w,
            templates: e,
            tags: a,
            helpers: v,
            converters: c,
            View: s,
            convert: kt,
            delimiters: nt,
            tag: st
        };
    o ? (u = o, u.templates = e, u.render = w, u.views = f, u.fn.render = d) : (u = n.jsviews = f, u.extend = function (n, t) {
        var i;
        n = n || {};
        for (i in t) n[i] = t[i];
        return n
    }, u.isArray = Array && Array.isArray || function (n) {
        return Object.prototype.toString.call(n) === "[object Array]"
    }), r = u.extend, f.topView = {
        views: {},
        tmpl: {},
        _hlp: g,
        ctx: f.helpers
    }, a({
        "if": function () {
            var i = this,
                n = i.view;
            n.onElse = function (i, r) {
                for (var f = 0, u = r.length; u && !r[f++];) if (f === u) return "";
                return n.onElse = t, i.path = "", i.renderContent(n)
            };
            return n.onElse(this, arguments)
        },
        "else": function () {
            var n = this.view;
            return n.onElse ? n.onElse(this, arguments) : ""
        },
        "for": function () {
            var n, u = this,
                i = "",
                r = arguments,
                t = r.length;
            for (t === 0 && (t = 1), n = 0; n < t; n++) i += u.renderContent(r[n]);
            return i
        },
        "=": function (n) {
            return n
        },
        "*": function (n) {
            return n
        }
    }), c({
        html: function (n) {
            return n != t ? String(n).replace(wt, ot) : ""
        }
    }), nt("{{", "}}")
}(this);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.ui = n.ui || {};
    var u = /left|center|right/,
        f = /top|center|bottom/,
        i = "center",
        r = {}, o = n.fn.position,
        e = n.fn.offset;
    n.fn.position = function (t) {
        if (!t || !t.of) return o.apply(this, arguments);
        t = n.extend({}, t);
        var s = n(t.of),
            v = s[0],
            a = (t.collision || "flip").split(" "),
            h = t.offset ? t.offset.split(" ") : [0, 0],
            c, l, e;
        return v.nodeType === 9 ? (c = s.width(), l = s.height(), e = {
            top: 0,
            left: 0
        }) : v.setTimeout ? (c = s.width(), l = s.height(), e = {
            top: s.scrollTop(),
            left: s.scrollLeft()
        }) : v.preventDefault ? (t.at = "left top", c = l = 0, e = {
            top: t.of.pageY,
            left: t.of.pageX
        }) : (c = s.outerWidth(), l = s.outerHeight(), e = s.offset()), n.each(["my", "at"], function () {
            var n = (t[this] || "").split(" ");
            n.length === 1 && (n = u.test(n[0]) ? n.concat([i]) : f.test(n[0]) ? [i].concat(n) : [i, i]), n[0] = u.test(n[0]) ? n[0] : i, n[1] = f.test(n[1]) ? n[1] : i, t[this] = n
        }), a.length === 1 && (a[1] = a[0]), h[0] = parseInt(h[0], 10) || 0, h.length === 1 && (h[1] = h[0]), h[1] = parseInt(h[1], 10) || 0, t.at[0] === "right" ? e.left += c : t.at[0] === i && (e.left += c / 2), t.at[1] === "bottom" ? e.top += l : t.at[1] === i && (e.top += l / 2), e.left += h[0], e.top += h[1], this.each(function () {
            var f = n(this),
                s = f.outerWidth(),
                o = f.outerHeight(),
                p = parseInt(n.curCSS(this, "marginLeft", !0)) || 0,
                y = parseInt(n.curCSS(this, "marginTop", !0)) || 0,
                w = s + p + (parseInt(n.curCSS(this, "marginRight", !0)) || 0),
                b = o + y + (parseInt(n.curCSS(this, "marginBottom", !0)) || 0),
                u = n.extend({}, e),
                v;
            t.my[0] === "right" ? u.left -= s : t.my[0] === i && (u.left -= s / 2), t.my[1] === "bottom" ? u.top -= o : t.my[1] === i && (u.top -= o / 2), r.fractions || (u.left = Math.round(u.left), u.top = Math.round(u.top)), v = {
                left: u.left - p,
                top: u.top - y
            }, n.each(["left", "top"], function (i, r) {
                n.ui.position[a[i]] && n.ui.position[a[i]][r](u, {
                    targetWidth: c,
                    targetHeight: l,
                    elemWidth: s,
                    elemHeight: o,
                    collisionPosition: v,
                    collisionWidth: w,
                    collisionHeight: b,
                    offset: h,
                    my: t.my,
                    at: t.at
                })
            }), n.fn.bgiframe && f.bgiframe(), f.offset(n.extend(u, {
                using: t.using
            }))
        })
    }, n.ui.position = {
        fit: {
            left: function (t, i) {
                var u = n(window),
                    r = i.collisionPosition.left + i.collisionWidth - u.width() - u.scrollLeft();
                t.left = r > 0 ? t.left - r : Math.max(t.left - i.collisionPosition.left, t.left)
            },
            top: function (t, i) {
                var u = n(window),
                    r = i.collisionPosition.top + i.collisionHeight - u.height() - u.scrollTop();
                t.top = r > 0 ? t.top - r : Math.max(t.top - i.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function (t, r) {
                if (r.at[0] !== i) {
                    var e = n(window),
                        s = r.collisionPosition.left + r.collisionWidth - e.width() - e.scrollLeft(),
                        u = r.my[0] === "left" ? -r.elemWidth : r.my[0] === "right" ? r.elemWidth : 0,
                        f = r.at[0] === "left" ? r.targetWidth : -r.targetWidth,
                        o = -2 * r.offset[0];
                    t.left += r.collisionPosition.left < 0 ? u + f + o : s > 0 ? u + f + o : 0
                }
            },
            top: function (t, r) {
                if (r.at[1] !== i) {
                    var e = n(window),
                        s = r.collisionPosition.top + r.collisionHeight - e.height() - e.scrollTop(),
                        u = r.my[1] === "top" ? -r.elemHeight : r.my[1] === "bottom" ? r.elemHeight : 0,
                        f = r.at[1] === "top" ? r.targetHeight : -r.targetHeight,
                        o = -2 * r.offset[1];
                    t.top += r.collisionPosition.top < 0 ? u + f + o : s > 0 ? u + f + o : 0
                }
            }
        }
    }, n.offset.setOffset || (n.offset.setOffset = function (t, i) {
        /static/.test(n.curCSS(t, "position")) && (t.style.position = "relative");
        var f = n(t),
            u = f.offset(),
            e = parseInt(n.curCSS(t, "top", !0), 10) || 0,
            o = parseInt(n.curCSS(t, "left", !0), 10) || 0,
            r = {
                top: i.top - u.top + e,
                left: i.left - u.left + o
            };
        "using" in i ? i.using.call(t, r) : f.css(r)
    }, n.fn.offset = function (t) {
        var i = this[0];
        return !i || !i.ownerDocument ? null : t ? n.isFunction(t) ? this.each(function (i) {
            n(this).offset(t.call(this, i, n(this).offset()))
        }) : this.each(function () {
            n.offset.setOffset(this, t)
        }) : e.call(this)
    }),
    function () {
        var f = document.getElementsByTagName("body")[0],
            s = document.createElement("div"),
            t, u, i, h, e, o;
        t = document.createElement(f ? "div" : "body"), i = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, f && n.extend(i, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in i) t.style[o] = i[o];
        t.appendChild(s), u = f || document.documentElement, u.insertBefore(t, u.firstChild), s.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = n(s).offset(function (n, t) {
            return t
        }).offset(), t.innerHTML = "", u.removeChild(t), e = h.top + h.left + (f ? 2e3 : 0), r.fractions = e > 21 && e < 22
    }()
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects || function (n, t) {
    function e(t) {
        var i;
        return t && t.constructor == Array && t.length == 3 ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(i[1]) * 2.55, parseFloat(i[2]) * 2.55, parseFloat(i[3]) * 2.55] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(t)) ? f.transparent : f[n.trim(t).toLowerCase()]
    }
    function l(t, i) {
        var r;
        do {
            if (r = n.curCSS(t, i), r != "" && r != "transparent" || n.nodeName(t, "body")) break;
            i = "backgroundColor"
        } while (t = t.parentNode);
        return e(r)
    }
    function s() {
        var n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            r = {}, t, u, i;
        if (n && n.length && n[0] && n[n[0]]) for (i = n.length; i--;) t = n[i], typeof n[t] == "string" && (u = t.replace(/\-(\w)/g, function (n, t) {
            return t.toUpperCase()
        }), r[u] = n[t]);
        else for (t in n) typeof n[t] == "string" && (r[t] = n[t]);
        return r
    }
    function o(t) {
        var i, r;
        for (i in t) r = t[i], (r == null || n.isFunction(r) || i in h || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(r))) && delete t[i];
        return t
    }
    function c(n, t) {
        var r = {
            _: 0
        }, i;
        for (i in t) n[i] != t[i] && (r[i] = t[i]);
        return r
    }
    function i(t, i, r, u) {
        return typeof t == "object" && (u = i, r = null, i = t, t = i.effect), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i = i || {}, r = r || i.duration, r = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, u = u || i.complete, [t, i, r, u]
    }
    function r(t) {
        return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects[t] ? !0 : !1
    }
    n.effects = {}, n.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (t, i) {
        n.fx.step[i] = function (n) {
            n.colorInit || (n.start = l(n.elem, i), n.end = e(n.end), n.colorInit = !0), n.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(n.pos * (n.end[0] - n.start[0]) + n.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[1] - n.start[1]) + n.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[2] - n.start[2]) + n.start[2], 10), 255), 0) + ")"
        }
    });
    var f = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }, u = ["add", "remove", "toggle"],
        h = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    n.effects.animateClass = function (t, i, r, f) {
        return n.isFunction(r) && (f = r, r = null), this.queue(function () {
            var e = n(this),
                l = e.attr("style") || " ",
                v = o(s.call(this)),
                h, a = e.attr("class") || "";
            n.each(u, function (n, i) {
                t[i] && e[i + "Class"](t[i])
            }), h = o(s.call(this)), e.attr("class", a), e.animate(c(v, h), {
                queue: !1,
                duration: i,
                easing: r,
                complete: function () {
                    n.each(u, function (n, i) {
                        t[i] && e[i + "Class"](t[i])
                    }), typeof e.attr("style") == "object" ? (e.attr("style").cssText = "", e.attr("style").cssText = l) : e.attr("style", l), f && f.apply(this, arguments), n.dequeue(this)
                }
            })
        })
    }, n.fn.extend({
        _addClass: n.fn.addClass,
        addClass: function (t, i, r, u) {
            return i ? n.effects.animateClass.apply(this, [{
                add: t
            },
            i, r, u]) : this._addClass(t)
        },
        _removeClass: n.fn.removeClass,
        removeClass: function (t, i, r, u) {
            return i ? n.effects.animateClass.apply(this, [{
                remove: t
            },
            i, r, u]) : this._removeClass(t)
        },
        _toggleClass: n.fn.toggleClass,
        toggleClass: function (i, r, u, f, e) {
            return typeof r == "boolean" || r === t ? u ? n.effects.animateClass.apply(this, [r ? {
                add: i
            } : {
                remove: i
            },
            u, f, e]) : this._toggleClass(i, r) : n.effects.animateClass.apply(this, [{
                toggle: i
            },
            r, u, f])
        },
        switchClass: function (t, i, r, u, f) {
            return n.effects.animateClass.apply(this, [{
                add: i,
                remove: t
            },
            r, u, f])
        }
    }), n.extend(n.effects, {
        version: "1.8.21",
        save: function (n, t) {
            for (var i = 0; i < t.length; i++) t[i] !== null && n.data("ec.storage." + t[i], n[0].style[t[i]])
        },
        restore: function (n, t) {
            for (var i = 0; i < t.length; i++) t[i] !== null && n.css(t[i], n.data("ec.storage." + t[i]))
        },
        setMode: function (n, t) {
            return t == "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function (n, t) {
            var r, i;
            switch (n[0]) {
                case "top":
                    r = 0;
                    break;
                case "middle":
                    r = .5;
                    break;
                case "bottom":
                    r = 1;
                    break;
                default:
                    r = n[0] / t.height
            }
            switch (n[1]) {
                case "left":
                    i = 0;
                    break;
                case "center":
                    i = .5;
                    break;
                case "right":
                    i = 1;
                    break;
                default:
                    i = n[1] / t.width
            }
            return {
                x: i,
                y: r
            }
        },
        createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var r = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float")
            }, u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            }),
                i = document.activeElement;
            try {
                i.id
            } catch (f) {
                i = document.body
            }
            return t.wrap(u), (t[0] === i || n.contains(t[0], i)) && n(i).focus(), u = t.parent(), t.css("position") == "static" ? (u.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (n.extend(r, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), n.each(["top", "left", "bottom", "right"], function (n, i) {
                r[i] = t.css(i), isNaN(parseInt(r[i], 10)) && (r[i] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), u.css(r).show()
        },
        removeWrapper: function (t) {
            var r, i = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (r = t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus(), r) : t
        },
        setTransition: function (t, i, r, u) {
            return u = u || {}, n.each(i, function (n, i) {
                var f = t.cssUnit(i);
                f[0] > 0 && (u[i] = f[0] * r + f[1])
            }), u
        }
    }), n.fn.extend({
        effect: function (t) {
            var o = i.apply(this, arguments),
                e = {
                    options: o[1],
                    duration: o[2],
                    callback: o[3]
                }, h = e.options.mode,
                s = n.effects[t];
            return n.fx.off || !s ? h ? this[h](e.duration, e.callback) : this.each(function () {
                e.callback && e.callback.call(this)
            }) : s.call(this, e)
        },
        _show: n.fn.show,
        show: function (n) {
            if (r(n)) return this._show.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: n.fn.hide,
        hide: function (n) {
            if (r(n)) return this._hide.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: n.fn.toggle,
        toggle: function (t) {
            if (r(t) || typeof t == "boolean" || n.isFunction(t)) return this.__toggle.apply(this, arguments);
            var u = i.apply(this, arguments);
            return u[1].mode = "toggle", this.effect.apply(this, u)
        },
        cssUnit: function (t) {
            var r = this.css(t),
                i = [];
            return n.each(["em", "px", "%", "pt"], function (n, t) {
                r.indexOf(t) > 0 && (i = [parseFloat(r), t])
            }), i
        }
    }), n.easing.jswing = n.easing.swing, n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function (t, i, r, u, f) {
            return n.easing[n.easing.def](t, i, r, u, f)
        },
        easeInQuad: function (n, t, i, r, u) {
            return r * (t /= u) * t + i
        },
        easeOutQuad: function (n, t, i, r, u) {
            return -r * (t /= u) * (t - 2) + i
        },
        easeInOutQuad: function (n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function (n, t, i, r, u) {
            return r * (t /= u) * t * t + i
        },
        easeOutCubic: function (n, t, i, r, u) {
            return r * ((t = t / u - 1) * t * t + 1) + i
        },
        easeInOutCubic: function (n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function (n, t, i, r, u) {
            return r * (t /= u) * t * t * t + i
        },
        easeOutQuart: function (n, t, i, r, u) {
            return -r * ((t = t / u - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function (n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function (n, t, i, r, u) {
            return r * (t /= u) * t * t * t * t + i
        },
        easeOutQuint: function (n, t, i, r, u) {
            return r * ((t = t / u - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function (n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function (n, t, i, r, u) {
            return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
        },
        easeOutSine: function (n, t, i, r, u) {
            return r * Math.sin(t / u * (Math.PI / 2)) + i
        },
        easeInOutSine: function (n, t, i, r, u) {
            return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
        },
        easeInExpo: function (n, t, i, r, u) {
            return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
        },
        easeOutExpo: function (n, t, i, r, u) {
            return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i
        },
        easeInOutExpo: function (n, t, i, r, u) {
            return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function (n, t, i, r, u) {
            return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
        },
        easeOutCirc: function (n, t, i, r, u) {
            return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
        },
        easeInOutCirc: function (n, t, i, r, u) {
            return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function (n, t, i, r, u) {
            var o = 1.70158,
                f = 0,
                e = r;
            return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
        },
        easeOutElastic: function (n, t, i, r, u) {
            var o = 1.70158,
                f = 0,
                e = r;
            return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
        },
        easeInOutElastic: function (n, t, i, r, u) {
            var o = 1.70158,
                f = 0,
                e = r;
            return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), t < 1 ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i)
        },
        easeInBack: function (n, i, r, u, f, e) {
            return e == t && (e = 1.70158), u * (i /= f) * i * ((e + 1) * i - e) + r
        },
        easeOutBack: function (n, i, r, u, f, e) {
            return e == t && (e = 1.70158), u * ((i = i / f - 1) * i * ((e + 1) * i + e) + 1) + r
        },
        easeInOutBack: function (n, i, r, u, f, e) {
            return e == t && (e = 1.70158), (i /= f / 2) < 1 ? u / 2 * i * i * (((e *= 1.525) + 1) * i - e) + r : u / 2 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2) + r
        },
        easeInBounce: function (t, i, r, u, f) {
            return u - n.easing.easeOutBounce(t, f - i, 0, u, f) + r
        },
        easeOutBounce: function (n, t, i, r, u) {
            return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function (t, i, r, u, f) {
            return i < f / 2 ? n.easing.easeInBounce(t, i * 2, 0, u, f) * .5 + r : n.easing.easeOutBounce(t, i * 2 - f, 0, u, f) * .5 + u * .5 + r
        }
    })
}(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.blind.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.blind = function (t) {
        return this.queue(function () {
            var i = n(this),
                s = ["position", "top", "bottom", "left", "right"],
                f = n.effects.setMode(i, t.options.mode || "hide"),
                e = t.options.direction || "vertical",
                u;
            n.effects.save(i, s), i.show();
            var r = n.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                o = e == "vertical" ? "height" : "width",
                h = e == "vertical" ? r.height() : r.width();
            f == "show" && r.css(o, 0), u = {}, u[o] = f == "show" ? h : 0, r.animate(u, t.duration, t.options.easing, function () {
                f == "hide" && i.hide(), n.effects.restore(i, s), n.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.bounce.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.bounce = function (t) {
        return this.queue(function () {
            var i = n(this),
                a = ["position", "top", "bottom", "left", "right"],
                e = n.effects.setMode(i, t.options.mode || "effect"),
                l = t.options.direction || "up",
                r = t.options.distance || 20,
                v = t.options.times || 5,
                c = t.duration || 250,
                y, h, o, s;
            /show|hide/.test(e) && a.push("opacity"), n.effects.save(i, a), i.show(), n.effects.createWrapper(i);
            var u = l == "up" || l == "down" ? "top" : "left",
                f = l == "up" || l == "left" ? "pos" : "neg",
                r = t.options.distance || (u == "top" ? i.outerHeight({
                    margin: !0
                }) / 3 : i.outerWidth({
                    margin: !0
                }) / 3);
            for (e == "show" && i.css("opacity", 0).css(u, f == "pos" ? -r : r), e == "hide" && (r = r / (v * 2)), e != "hide" && v--, e == "show" && (h = {
                opacity: 1
            }, h[u] = (f == "pos" ? "+=" : "-=") + r, i.animate(h, c / 2, t.options.easing), r = r / 2, v--), y = 0; y < v; y++) o = {}, s = {}, o[u] = (f == "pos" ? "-=" : "+=") + r, s[u] = (f == "pos" ? "+=" : "-=") + r, i.animate(o, c / 2, t.options.easing).animate(s, c / 2, t.options.easing), r = e == "hide" ? r * 2 : r / 2;
            e == "hide" ? (h = {
                opacity: 0
            }, h[u] = (f == "pos" ? "-=" : "+=") + r, i.animate(h, c / 2, t.options.easing, function () {
                i.hide(), n.effects.restore(i, a), n.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
            })) : (o = {}, s = {}, o[u] = (f == "pos" ? "-=" : "+=") + r, s[u] = (f == "pos" ? "+=" : "-=") + r, i.animate(o, c / 2, t.options.easing).animate(s, c / 2, t.options.easing, function () {
                n.effects.restore(i, a), n.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
            })), i.queue("fx", function () {
                i.dequeue()
            }), i.dequeue()
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.clip.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.clip = function (t) {
        return this.queue(function () {
            var i = n(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                e = n.effects.setMode(i, t.options.mode || "hide"),
                s = t.options.direction || "vertical",
                u;
            n.effects.save(i, h), i.show();
            var c = n.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                r = i[0].tagName == "IMG" ? c : i,
                f = {
                    size: s == "vertical" ? "height" : "width",
                    position: s == "vertical" ? "top" : "left"
                }, o = s == "vertical" ? r.height() : r.width();
            e == "show" && (r.css(f.size, 0), r.css(f.position, o / 2)), u = {}, u[f.size] = e == "show" ? o : 0, u[f.position] = e == "show" ? 0 : o / 2, r.animate(u, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    e == "hide" && i.hide(), n.effects.restore(i, h), n.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                }
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.drop.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.drop = function (t) {
        return this.queue(function () {
            var i = n(this),
                h = ["position", "top", "bottom", "left", "right", "opacity"],
                u = n.effects.setMode(i, t.options.mode || "hide"),
                r = t.options.direction || "left",
                f;
            n.effects.save(i, h), i.show(), n.effects.createWrapper(i);
            var s = r == "up" || r == "down" ? "top" : "left",
                o = r == "up" || r == "left" ? "pos" : "neg",
                e = t.options.distance || (s == "top" ? i.outerHeight({
                    margin: !0
                }) / 2 : i.outerWidth({
                    margin: !0
                }) / 2);
            u == "show" && i.css("opacity", 0).css(s, o == "pos" ? -e : e), f = {
                opacity: u == "show" ? 1 : 0
            }, f[s] = (u == "show" ? o == "pos" ? "+=" : "-=" : o == "pos" ? "-=" : "+=") + e, i.animate(f, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    u == "hide" && i.hide(), n.effects.restore(i, h), n.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.explode.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.explode = function (t) {
        return this.queue(function () {
            var u = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                i, o, s, h, f, e;
            for (t.options.mode = t.options.mode == "toggle" ? n(this).is(":visible") ? "hide" : "show" : t.options.mode, i = n(this).show().css("visibility", "hidden"), o = i.offset(), o.top -= parseInt(i.css("marginTop"), 10) || 0, o.left -= parseInt(i.css("marginLeft"), 10) || 0, s = i.outerWidth(!0), h = i.outerHeight(!0), f = 0; f < u; f++) for (e = 0; e < r; e++) i.clone().appendTo("body").wrap("<div><\/div>").css({
                position: "absolute",
                visibility: "visible",
                left: -e * (s / r),
                top: -f * (h / u)
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: s / r,
                height: h / u,
                left: o.left + e * (s / r) + (t.options.mode == "show" ? (e - Math.floor(r / 2)) * (s / r) : 0),
                top: o.top + f * (h / u) + (t.options.mode == "show" ? (f - Math.floor(u / 2)) * (h / u) : 0),
                opacity: t.options.mode == "show" ? 0 : 1
            }).animate({
                left: o.left + e * (s / r) + (t.options.mode == "show" ? 0 : (e - Math.floor(r / 2)) * (s / r)),
                top: o.top + f * (h / u) + (t.options.mode == "show" ? 0 : (f - Math.floor(u / 2)) * (h / u)),
                opacity: t.options.mode == "show" ? 1 : 0
            }, t.duration || 500);
            setTimeout(function () {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide(), t.callback && t.callback.apply(i[0]), i.dequeue(), n("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fade.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.fade = function (t) {
        return this.queue(function () {
            var i = n(this),
                r = n.effects.setMode(i, t.options.mode || "hide");
            i.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fold.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.fold = function (t) {
        return this.queue(function () {
            var i = n(this),
                a = ["position", "top", "bottom", "left", "right"],
                u = n.effects.setMode(i, t.options.mode || "hide"),
                f = t.options.size || 15,
                c = !! t.options.horizFirst,
                y = t.duration ? t.duration / 2 : n.fx.speeds._default / 2,
                s, e;
            n.effects.save(i, a), i.show();
            var r = n.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                l = u == "show" != c,
                v = l ? ["width", "height"] : ["height", "width"],
                o = l ? [r.width(), r.height()] : [r.height(), r.width()],
                h = /([0-9]+)%/.exec(f);
            h && (f = parseInt(h[1], 10) / 100 * o[u == "hide" ? 0 : 1]), u == "show" && r.css(c ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            }), s = {}, e = {}, s[v[0]] = u == "show" ? o[0] : f, e[v[1]] = u == "show" ? o[1] : 0, r.animate(s, y, t.options.easing).animate(e, y, t.options.easing, function () {
                u == "hide" && i.hide(), n.effects.restore(i, a), n.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.highlight.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.highlight = function (t) {
        return this.queue(function () {
            var i = n(this),
                f = ["backgroundImage", "backgroundColor", "opacity"],
                r = n.effects.setMode(i, t.options.mode || "show"),
                u = {
                    backgroundColor: i.css("backgroundColor")
                };
            r == "hide" && (u.opacity = 0), n.effects.save(i, f), i.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(u, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    r == "hide" && i.hide(), n.effects.restore(i, f), r == "show" && !n.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.pulsate.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.pulsate = function (t) {
        return this.queue(function () {
            var i = n(this),
                o = n.effects.setMode(i, t.options.mode || "show"),
                s = (t.options.times || 5) * 2 - 1,
                e = t.duration ? t.duration / 2 : n.fx.speeds._default / 2,
                u = i.is(":visible"),
                r = 0,
                f;
            for (u || (i.css("opacity", 0).show(), r = 1), (o == "hide" && u || o == "show" && !u) && s--, f = 0; f < s; f++) i.animate({
                opacity: r
            }, e, t.options.easing), r = (r + 1) % 2;
            i.animate({
                opacity: r
            }, e, t.options.easing, function () {
                r == 0 && i.hide(), t.callback && t.callback.apply(this, arguments)
            }), i.queue("fx", function () {
                i.dequeue()
            }).dequeue()
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.scale.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.puff = function (t) {
        return this.queue(function () {
            var i = n(this),
                u = n.effects.setMode(i, t.options.mode || "hide"),
                f = parseInt(t.options.percent, 10) || 150,
                e = f / 100,
                r = {
                    height: i.height(),
                    width: i.width()
                };
            n.extend(t.options, {
                fade: !0,
                mode: u,
                percent: u == "hide" ? f : 100,
                from: u == "hide" ? r : {
                    height: r.height * e,
                    width: r.width * e
                }
            }), i.effect("scale", t.options, t.duration, t.callback), i.dequeue()
        })
    }, n.effects.scale = function (t) {
        return this.queue(function () {
            var i = n(this),
                u = n.extend(!0, {}, t.options),
                r = n.effects.setMode(i, t.options.mode || "effect"),
                o = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : r == "hide" ? 0 : 100),
                s = t.options.direction || "both",
                h = t.options.origin,
                f, e;
            r != "effect" && (u.origin = h || ["middle", "center"], u.restore = !0), f = {
                height: i.height(),
                width: i.width()
            }, i.from = t.options.from || (r == "show" ? {
                height: 0,
                width: 0
            } : f), e = {
                y: s != "horizontal" ? o / 100 : 1,
                x: s != "vertical" ? o / 100 : 1
            }, i.to = {
                height: f.height * e.y,
                width: f.width * e.x
            }, t.options.fade && (r == "show" && (i.from.opacity = 0, i.to.opacity = 1), r == "hide" && (i.from.opacity = 1, i.to.opacity = 0)), u.from = i.from, u.to = i.to, u.mode = r, i.effect("size", u, t.duration, t.callback), i.dequeue()
        })
    }, n.effects.size = function (t) {
        return this.queue(function () {
            var i = n(this),
                f = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                v = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                a = ["width", "height", "overflow"],
                c = ["fontSize"],
                e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = n.effects.setMode(i, t.options.mode || "effect"),
                l = t.options.restore || !1,
                s = t.options.scale || "both",
                y = t.options.origin,
                u = {
                    height: i.height(),
                    width: i.width()
                }, h, r;
            i.from = t.options.from || u, i.to = t.options.to || u, y && (h = n.effects.getBaseline(y, u), i.from.top = (u.height - i.from.height) * h.y, i.from.left = (u.width - i.from.width) * h.x, i.to.top = (u.height - i.to.height) * h.y, i.to.left = (u.width - i.to.width) * h.x), r = {
                from: {
                    y: i.from.height / u.height,
                    x: i.from.width / u.width
                },
                to: {
                    y: i.to.height / u.height,
                    x: i.to.width / u.width
                }
            }, (s == "box" || s == "both") && (r.from.y != r.to.y && (f = f.concat(e), i.from = n.effects.setTransition(i, e, r.from.y, i.from), i.to = n.effects.setTransition(i, e, r.to.y, i.to)), r.from.x != r.to.x && (f = f.concat(o), i.from = n.effects.setTransition(i, o, r.from.x, i.from), i.to = n.effects.setTransition(i, o, r.to.x, i.to))), (s == "content" || s == "both") && r.from.y != r.to.y && (f = f.concat(c), i.from = n.effects.setTransition(i, c, r.from.y, i.from), i.to = n.effects.setTransition(i, c, r.to.y, i.to)), n.effects.save(i, l ? f : v), i.show(), n.effects.createWrapper(i), i.css("overflow", "hidden").css(i.from), (s == "content" || s == "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(c), o = o.concat(["marginLeft", "marginRight"]), a = f.concat(e).concat(o), i.find("*[width]").each(function () {
                var i = n(this),
                    u;
                l && n.effects.save(i, a), u = {
                    height: i.height(),
                    width: i.width()
                }, i.from = {
                    height: u.height * r.from.y,
                    width: u.width * r.from.x
                }, i.to = {
                    height: u.height * r.to.y,
                    width: u.width * r.to.x
                }, r.from.y != r.to.y && (i.from = n.effects.setTransition(i, e, r.from.y, i.from), i.to = n.effects.setTransition(i, e, r.to.y, i.to)), r.from.x != r.to.x && (i.from = n.effects.setTransition(i, o, r.from.x, i.from), i.to = n.effects.setTransition(i, o, r.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.options.easing, function () {
                    l && n.effects.restore(i, a)
                })
            })), i.animate(i.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i.to.opacity === 0 && i.css("opacity", i.from.opacity), p == "hide" && i.hide(), n.effects.restore(i, l ? f : v), n.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.shake.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.shake = function (t) {
        return this.queue(function () {
            var i = n(this),
                a = ["position", "top", "bottom", "left", "right"],
                y = n.effects.setMode(i, t.options.mode || "effect"),
                u = t.options.direction || "left",
                c = t.options.distance || 20,
                v = t.options.times || 3,
                r = t.duration || t.options.duration || 140,
                e;
            n.effects.save(i, a), i.show(), n.effects.createWrapper(i);
            var h = u == "up" || u == "down" ? "top" : "left",
                f = u == "up" || u == "left" ? "pos" : "neg",
                s = {}, o = {}, l = {};
            for (s[h] = (f == "pos" ? "-=" : "+=") + c, o[h] = (f == "pos" ? "+=" : "-=") + c * 2, l[h] = (f == "pos" ? "-=" : "+=") + c * 2, i.animate(s, r, t.options.easing), e = 1; e < v; e++) i.animate(o, r, t.options.easing).animate(l, r, t.options.easing);
            i.animate(o, r, t.options.easing).animate(s, r / 2, t.options.easing, function () {
                n.effects.restore(i, a), n.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
            }), i.queue("fx", function () {
                i.dequeue()
            }), i.dequeue()
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.slide.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.slide = function (t) {
        return this.queue(function () {
            var i = n(this),
                h = ["position", "top", "bottom", "left", "right"],
                o = n.effects.setMode(i, t.options.mode || "show"),
                u = t.options.direction || "left",
                e;
            n.effects.save(i, h), i.show(), n.effects.createWrapper(i).css({
                overflow: "hidden"
            });
            var s = u == "up" || u == "down" ? "top" : "left",
                f = u == "up" || u == "left" ? "pos" : "neg",
                r = t.options.distance || (s == "top" ? i.outerHeight({
                    margin: !0
                }) : i.outerWidth({
                    margin: !0
                }));
            o == "show" && i.css(s, f == "pos" ? isNaN(r) ? "-" + r : -r : r), e = {}, e[s] = (o == "show" ? f == "pos" ? "+=" : "-=" : f == "pos" ? "-=" : "+=") + r, i.animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    o == "hide" && i.hide(), n.effects.restore(i, h), n.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.transfer.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */ (function (n) {
    n.effects.transfer = function (t) {
        return this.queue(function () {
            var i = n(this),
                r = n(t.options.to),
                f = r.offset(),
                o = {
                    top: f.top,
                    left: f.left,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                }, u = i.offset(),
                e = n('<div class="ui-effects-transfer"><\/div>').appendTo(document.body).addClass(t.options.className).css({
                    top: u.top,
                    left: u.left,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: "absolute"
                }).animate(o, t.duration, t.options.easing, function () {
                    e.remove(), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                })
        })
    }
})(jQuery);
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */ (function (n) {
    n.cookie = function (t, i, r) {
        var h, o, s, f, u, e;
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(i)) || i === null || i === undefined)) return r = n.extend({}, r), (i === null || i === undefined) && (r.expires = -1), typeof r.expires == "number" && (h = r.expires, o = r.expires = new Date, o.setDate(o.getDate() + h)), i = String(i), document.cookie = [encodeURIComponent(t), "=", r.raw ? i : encodeURIComponent(i), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("");
        for (r = i || {}, s = r.raw ? function (n) {
            return n
        } : decodeURIComponent, f = document.cookie.split("; "), u = 0; e = f[u] && f[u].split("="); u++) if (s(e[0]) === t) return s(e[1] || "");
        return null
    }
})(jQuery), ! function (n) {
    var t = function (t, i) {
        this.options = i, this.$element = n(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", n.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var t = this,
                i = n.Event("show");
            (this.$element.trigger(i), this.isShown || i.isDefaultPrevented()) || (n("body").addClass("modal-open"), this.isShown = !0, this.escape(), this.backdrop(function () {
                var i = n.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), i && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1).focus(), t.enforceFocus(), i ? t.$element.one(n.support.transition.end, function () {
                    t.$element.trigger("shown")
                }) : t.$element.trigger("shown")
            }))
        },
        hide: function (t) {
            t && t.preventDefault();
            var i = this;
            (t = n.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented()) && (this.isShown = !1, n("body").removeClass("modal-open"), this.escape(), n(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), n.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function () {
            var t = this;
            n(document).on("focusin.modal", function (n) {
                t.$element[0] === n.target || t.$element.has(n.target).length || t.$element.focus()
            })
        },
        escape: function () {
            var n = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (t) {
                t.which == 27 && n.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var t = this,
                i = setTimeout(function () {
                    t.$element.off(n.support.transition.end), t.hideModal()
                }, 500);
            this.$element.one(n.support.transition.end, function () {
                clearTimeout(i), t.hideModal()
            })
        },
        hideModal: function () {
            this.$element.hide().trigger("hidden"), this.backdrop()
        },
        removeBackdrop: function () {
            this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function (t) {
            var u = this,
                r = this.$element.hasClass("fade") ? "fade" : "",
                i;
            this.isShown && this.options.backdrop ? (i = n.support.transition && r, this.$backdrop = n('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.options.backdrop != "static" && this.$backdrop.click(n.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(n.support.transition.end, t) : t()) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(n.support.transition.end, n.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : t && t()
        }
    }, n.fn.modal = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("modal"),
                f = n.extend({}, n.fn.modal.defaults, u.data(), typeof i == "object" && i);
            r || u.data("modal", r = new t(this, f)), typeof i == "string" ? r[i]() : f.show && r.show()
        })
    }, n.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.fn.modal.Constructor = t, n(function () {
        n("body").on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
            var r = n(this),
                i = r.attr("href"),
                u = n(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                f = u.data("modal") ? "toggle" : n.extend({
                    remote: !/#/.test(i) && i
                }, u.data(), r.data());
            t.preventDefault(), u.modal(f).one("hide", function () {
                r.focus()
            })
        })
    })
}(window.jQuery), ! function (n) {
    function u() {
        i(n(r)).removeClass("open")
    }
    function i(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = n(i), r.length || (r = t.parent()), r
    }
    var r = "[data-toggle=dropdown]",
        t = function (t) {
            var i = n(t).on("click.dropdown.data-api", this.toggle);
            n("html").on("click.dropdown.data-api", function () {
                i.parent().removeClass("open")
            })
        };
    t.prototype = {
        constructor: t,
        toggle: function () {
            var f = n(this),
                r, e;
            if (!f.is(".disabled, :disabled")) return r = i(f), e = r.hasClass("open"), u(), e || (r.toggleClass("open"), f.focus()), !1
        },
        keydown: function (t) {
            var f, u, s, o, e, r;
            if (/(38|40|27)/.test(t.keyCode) && (f = n(this), t.preventDefault(), t.stopPropagation(), !f.is(".disabled, :disabled"))) {
                if (o = i(f), e = o.hasClass("open"), !e || e && t.keyCode == 27) return f.click();
                (u = n("[role=menu] li:not(.divider) a", o), u.length) && (r = u.index(u.filter(":focus")), t.keyCode == 38 && r > 0 && r--, t.keyCode == 40 && r < u.length - 1 && r++, ~r || (r = 0), u.eq(r).focus())
            }
        }
    }, n.fn.dropdown = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("dropdown");
            r || u.data("dropdown", r = new t(this)), typeof i == "string" && r[i].call(u)
        })
    }, n.fn.dropdown.Constructor = t, n(function () {
        n("html").on("click.dropdown.data-api touchstart.dropdown.data-api", u), n("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function (n) {
            n.stopPropagation()
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", r, t.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", r + ", [role=menu]", t.prototype.keydown)
    })
}(window.jQuery), ! function (n) {
    function t(t, i) {
        var u = n.proxy(this.process, this),
            f = n(t).is("body") ? n(window) : n(t),
            r;
        this.options = n.extend({}, n.fn.scrollspy.defaults, i), this.$scrollElement = f.on("scroll.scroll-spy.data-api", u), this.selector = (this.options.target || (r = n(t).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = n("body"), this.refresh(), this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function () {
            var t = this,
                i;
            this.offsets = n([]), this.targets = n([]), i = this.$body.find(this.selector).map(function () {
                var r = n(this),
                    i = r.data("target") || r.attr("href"),
                    t = /^#\w/.test(i) && n(i);
                return t && t.length && [
                    [t.position().top, i]
                ] || null
            }).sort(function (n, t) {
                return n[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        },
        process: function () {
            var i = this.$scrollElement.scrollTop() + this.options.offset,
                e = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                f = e - this.$scrollElement.height(),
                t = this.offsets,
                r = this.targets,
                u = this.activeTarget,
                n;
            if (i >= f) return u != (n = r.last()[0]) && this.activate(n);
            for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
        },
        activate: function (t) {
            var i, r;
            this.activeTarget = t, n(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = n(r).parent("li").addClass("active"), i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        }
    }, n.fn.scrollspy = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("scrollspy", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }, n.fn.scrollspy.Constructor = t, n.fn.scrollspy.defaults = {
        offset: 10
    }, n(window).on("load", function () {
        n('[data-spy="scroll"]').each(function () {
            var t = n(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), ! function (n) {
    var t = function (t) {
        this.element = n(t)
    };
    t.prototype = {
        constructor: t,
        show: function () {
            var t = this.element,
                e = t.closest("ul:not(.dropdown-menu)"),
                i = t.attr("data-target"),
                f, r, u;
            (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (f = e.find(".active a").last()[0], u = n.Event("show", {
                relatedTarget: f
            }), t.trigger(u), u.isDefaultPrevented()) || (r = n(i), this.activate(t.parent("li"), e), this.activate(r, r.parent(), function () {
                t.trigger({
                    type: "shown",
                    relatedTarget: f
                })
            }))
        },
        activate: function (t, i, r) {
            function e() {
                u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), f ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }
            var u = i.find("> .active"),
                f = r && n.support.transition && u.hasClass("fade");
            f ? u.one(n.support.transition.end, e) : e(), u.removeClass("in")
        }
    }, n.fn.tab = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("tab");
            r || u.data("tab", r = new t(this)), typeof i == "string" && r[i]()
        })
    }, n.fn.tab.Constructor = t, n(function () {
        n("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
            t.preventDefault(), n(this).tab("show")
        })
    })
}(window.jQuery), ! function (n) {
    var t = function (n, t) {
        this.init("tooltip", n, t)
    };
    t.prototype = {
        constructor: t,
        init: function (t, i, r) {
            var f, u;
            this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.enabled = !0, this.options.trigger == "click" ? this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this)) : this.options.trigger != "manual" && (f = this.options.trigger == "hover" ? "mouseenter" : "focus", u = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(f + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, n.proxy(this.leave, this))), this.options.selector ? this._options = n.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (t) {
            return t = n.extend({}, n.fn[this.type].defaults, t, this.$element.data()), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function (t) {
            var i = n(t.currentTarget)[this.type](this._options).data(this.type);
            if (!i.options.delay || !i.options.delay.show) return i.show();
            clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function () {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        },
        leave: function (t) {
            var i = n(t.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout && clearTimeout(this.timeout), !i.options.delay || !i.options.delay.hide) return i.hide();
            i.hoverState = "out", this.timeout = setTimeout(function () {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        },
        show: function () {
            var t, f, n, u, e, i, r;
            if (this.hasContent() && this.enabled) {
                t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), i = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, f = /in/.test(i), t.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(f ? this.$element : document.body), n = this.getPosition(f), u = t[0].offsetWidth, e = t[0].offsetHeight;
                switch (f ? i.split(" ")[1] : i) {
                    case "bottom":
                        r = {
                            top: n.top + n.height,
                            left: n.left + n.width / 2 - u / 2
                        };
                        break;
                    case "top":
                        r = {
                            top: n.top - e,
                            left: n.left + n.width / 2 - u / 2
                        };
                        break;
                    case "left":
                        r = {
                            top: n.top + n.height / 2 - e / 2,
                            left: n.left - u
                        };
                        break;
                    case "right":
                        r = {
                            top: n.top + n.height / 2 - e / 2,
                            left: n.left + n.width
                        }
                }
                t.css(r).addClass(i).addClass("in")
            }
        },
        setContent: function () {
            var n = this.tip(),
                t = this.getTitle();
            n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function i() {
                var i = setTimeout(function () {
                    t.off(n.support.transition.end).remove()
                }, 500);
                t.one(n.support.transition.end, function () {
                    clearTimeout(i), t.remove()
                })
            }
            var r = this,
                t = this.tip();
            return t.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? i() : t.remove(), this
        },
        fixTitle: function () {
            var n = this.$element;
            (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").removeAttr("title")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function (t) {
            return n.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function () {
            var t, i = this.$element,
                n = this.options;
            return t = i.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(i[0]) : n.title), t
        },
        tip: function () {
            return this.$tip = this.$tip || n(this.options.template)
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }, n.fn.tooltip = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("tooltip"),
                f = typeof i == "object" && i;
            r || u.data("tooltip", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }, n.fn.tooltip.Constructor = t, n.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0
    }
}(window.jQuery), ! function (n) {
    var t = function (n, t) {
        this.init("popover", n, t)
    };
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function () {
            var n = this.tip(),
                i = this.getTitle(),
                t = this.getContent();
            n.find(".popover-title")[this.options.html ? "html" : "text"](i), n.find(".popover-content > *")[this.options.html ? "html" : "text"](t), n.removeClass("fade top bottom left right in")
        },
        hasContent: function () {
            return this.getTitle() || this.getContent()
        },
        getContent: function () {
            var t, i = this.$element,
                n = this.options;
            return t = i.attr("data-content") || (typeof n.content == "function" ? n.content.call(i[0]) : n.content), t
        },
        tip: function () {
            return this.$tip || (this.$tip = n(this.options.template)), this.$tip
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }), n.fn.popover = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("popover"),
                f = typeof i == "object" && i;
            r || u.data("popover", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }, n.fn.popover.Constructor = t, n.fn.popover.defaults = n.extend({}, n.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"><\/div><div class="popover-inner"><h3 class="popover-title"><\/h3><div class="popover-content"><p><\/p><\/div><\/div><\/div>'
    })
}(window.jQuery), ! function (n) {
    var t = function (t, i) {
        this.options = n.extend({}, n.fn.affix.defaults, i), this.$window = n(window).on("scroll.affix.data-api", n.proxy(this.checkPosition, this)), this.$element = n(t), this.checkPosition()
    };
    t.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var o = n(document).height(),
                f = this.$window.scrollTop(),
                e = this.$element.offset(),
                i = this.options.offset,
                r = i.bottom,
                u = i.top,
                s = "affix affix-top affix-bottom",
                t;
            (typeof i != "object" && (r = u = i), typeof u == "function" && (u = i.top()), typeof r == "function" && (r = i.bottom()), t = this.unpin != null && f + this.unpin <= e.top ? !1 : r != null && e.top + this.$element.height() >= o - r ? "bottom" : u != null && f <= u ? "top" : !1, this.affixed !== t) && (this.affixed = t, this.unpin = t == "bottom" ? e.top - f : null, this.$element.removeClass(s).addClass("affix" + (t ? "-" + t : "")))
        }
    }, n.fn.affix = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("affix"),
                f = typeof i == "object" && i;
            r || u.data("affix", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }, n.fn.affix.Constructor = t, n.fn.affix.defaults = {
        offset: 0
    }, n(window).on("load", function () {
        n('[data-spy="affix"]').each(function () {
            var i = n(this),
                t = i.data();
            t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), i.affix(t)
        })
    })
}(window.jQuery), ! function (n) {
    var i = '[data-dismiss="alert"]',
        t = function (t) {
            n(t).on("click", i, this.close)
        };
    t.prototype.close = function (t) {
        function f() {
            i.trigger("closed").remove()
        }
        var u = n(this),
            r = u.attr("data-target"),
            i;
        (r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = n(r), t && t.preventDefault(), i.length || (i = u.hasClass("alert") ? u : u.parent()), i.trigger(t = n.Event("close")), t.isDefaultPrevented()) || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.on(n.support.transition.end, f) : f())
    }, n.fn.alert = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("alert");
            r || u.data("alert", r = new t(this)), typeof i == "string" && r[i].call(u)
        })
    }, n.fn.alert.Constructor = t, n(function () {
        n("body").on("click.alert.data-api", i, t.prototype.close)
    })
}(window.jQuery), ! function (n) {
    var t = function (t, i) {
        this.$element = n(t), this.options = n.extend({}, n.fn.button.defaults, i)
    };
    t.prototype.setState = function (n) {
        var i = "disabled",
            t = this.$element,
            u = t.data(),
            r = t.is("input") ? "val" : "html";
        n += "Text", u.resetText || t.data("resetText", t[r]()), t[r](u[n] || this.options[n]), setTimeout(function () {
            n == "loadingText" ? t.addClass(i).attr(i, i) : t.removeClass(i).removeAttr(i)
        }, 0)
    }, t.prototype.toggle = function () {
        var n = this.$element.closest('[data-toggle="buttons-radio"]');
        n && n.find(".active").removeClass("active"), this.$element.toggleClass("active")
    }, n.fn.button = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("button"),
                f = typeof i == "object" && i;
            r || u.data("button", r = new t(this, f)), i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }, n.fn.button.defaults = {
        loadingText: "loading..."
    }, n.fn.button.Constructor = t, n(function () {
        n("body").on("click.button.data-api", "[data-toggle^=button]", function (t) {
            var i = n(t.target);
            i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle")
        })
    })
}(window.jQuery), ! function (n) {
    var t = function (t, i) {
        this.$element = n(t), this.options = n.extend({}, n.fn.collapse.defaults, i), this.options.parent && (this.$parent = n(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t,
        dimension: function () {
            var n = this.$element.hasClass("width");
            return n ? "width" : "height"
        },
        show: function () {
            var r, u, t, i;
            if (!this.transitioning) {
                if (r = this.dimension(), u = n.camelCase(["scroll", r].join("-")), t = this.$parent && this.$parent.find("> .accordion-group > .in"), t && t.length) {
                    if (i = t.data("collapse"), i && i.transitioning) return;
                    t.collapse("hide"), i || t.data("collapse", null)
                }
                this.$element[r](0), this.transition("addClass", n.Event("show"), "shown"), n.support.transition && this.$element[r](this.$element[0][u])
            }
        },
        hide: function () {
            var t;
            this.transitioning || (t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", n.Event("hide"), "hidden"), this.$element[t](0))
        },
        reset: function (n) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](n || "auto")[0].offsetWidth, this.$element[n !== null ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function (t, i, r) {
            var u = this,
                f = function () {
                    i.type == "show" && u.reset(), u.transitioning = 0, u.$element.trigger(r)
                };
            (this.$element.trigger(i), i.isDefaultPrevented()) || (this.transitioning = 1, this.$element[t]("in"), n.support.transition && this.$element.hasClass("collapse") ? this.$element.one(n.support.transition.end, f) : f())
        },
        toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    }, n.fn.collapse = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("collapse"),
                f = typeof i == "object" && i;
            r || u.data("collapse", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }, n.fn.collapse.defaults = {
        toggle: !0
    }, n.fn.collapse.Constructor = t, n(function () {
        n("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
            var i = n(this),
                u, r = i.attr("data-target") || t.preventDefault() || (u = i.attr("href")) && u.replace(/.*(?=#[^\s]+$)/, ""),
                f = n(r).data("collapse") ? "toggle" : i.data();
            i[n(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), n(r).collapse(f)
        })
    })
}(window.jQuery), ! function (n) {
    var t = function (t, i) {
        this.$element = n(t), this.options = i, this.options.slide && this.slide(this.options.slide), this.options.pause == "hover" && this.$element.on("mouseenter", n.proxy(this.pause, this)).on("mouseleave", n.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function (t) {
            return t || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
        },
        to: function (t) {
            var u = this.$element.find(".item.active"),
                i = u.parent().children(),
                r = i.index(u),
                f = this;
            if (!(t > i.length - 1) && !(t < 0)) return this.sliding ? this.$element.one("slid", function () {
                f.to(t)
            }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", n(i[t]))
        },
        pause: function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition.end && (this.$element.trigger(n.support.transition.end), this.cycle()), clearInterval(this.interval), this.interval = null, this
        },
        next: function () {
            if (!this.sliding) return this.slide("next")
        },
        prev: function () {
            if (!this.sliding) return this.slide("prev")
        },
        slide: function (t, i) {
            var e = this.$element.find(".item.active"),
                r = i || e[t](),
                s = this.interval,
                u = t == "next" ? "left" : "right",
                h = t == "next" ? "first" : "last",
                o = this,
                f = n.Event("slide", {
                    relatedTarget: r[0]
                });
            if (this.sliding = !0, s && this.pause(), r = r.length ? r : this.$element.find(".item")[h](), !r.hasClass("active")) {
                if (n.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    r.addClass(t), r[0].offsetWidth, e.addClass(u), r.addClass(u), this.$element.one(n.support.transition.end, function () {
                        r.removeClass([t, u].join(" ")).addClass("active"), e.removeClass(["active", u].join(" ")), o.sliding = !1, setTimeout(function () {
                            o.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    e.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return s && this.cycle(), this
            }
        }
    }, n.fn.carousel = function (i) {
        return this.each(function () {
            var e = n(this),
                r = e.data("carousel"),
                u = n.extend({}, n.fn.carousel.defaults, typeof i == "object" && i),
                f = typeof i == "string" ? i : u.slide;
            r || e.data("carousel", r = new t(this, u)), typeof i == "number" ? r.to(i) : f ? r[f]() : u.interval && r.cycle()
        })
    }, n.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, n.fn.carousel.Constructor = t, n(function () {
        n("body").on("click.carousel.data-api", "[data-slide]", function (t) {
            var r = n(this),
                u, i = n(r.attr("data-target") || (u = r.attr("href")) && u.replace(/.*(?=#[^\s]+$)/, "")),
                f = !i.data("modal") && n.extend({}, i.data(), r.data());
            i.carousel(f), t.preventDefault()
        })
    })
}(window.jQuery), ! function (n) {
    var t = function (t, i) {
        this.$element = n(t), this.options = n.extend({}, n.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = n(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t,
        select: function () {
            var n = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(n)).change(), this.hide()
        },
        updater: function (n) {
            return n
        },
        show: function () {
            var t = n.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: t.top + t.height,
                left: t.left
            }), this.$menu.show(), this.shown = !0, this
        },
        hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function () {
            var i;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (i = n.isFunction(this.source) ? this.source(this.query, n.proxy(this.process, this)) : this.source, i ? this.process(i) : this)
        },
        process: function (t) {
            var i = this;
            return t = n.grep(t, function (n) {
                return i.matcher(n)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function (n) {
            return~n.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function (n) {
            for (var u = [], i = [], r = [], t; t = n.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : r.push(t) : u.push(t);
            return u.concat(i, r)
        },
        highlighter: function (n) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return n.replace(new RegExp("(" + t + ")", "ig"), function (n, t) {
                return "<strong>" + t + "<\/strong>"
            })
        },
        render: function (t) {
            var i = this;
            return t = n(t).map(function (t, r) {
                return t = n(i.options.item).attr("data-value", r), t.find("a").html(i.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },
        next: function () {
            var r = this.$menu.find(".active").removeClass("active"),
                i = r.next();
            i.length || (i = n(this.$menu.find("li")[0])), i.addClass("active")
        },
        prev: function () {
            var i = this.$menu.find(".active").removeClass("active"),
                t = i.prev();
            t.length || (t = this.$menu.find("li").last()), t.addClass("active")
        },
        listen: function () {
            this.$element.on("blur", n.proxy(this.blur, this)).on("keypress", n.proxy(this.keypress, this)).on("keyup", n.proxy(this.keyup, this)), (n.browser.chrome || n.browser.webkit || n.browser.msie) && this.$element.on("keydown", n.proxy(this.keydown, this)), this.$menu.on("click", n.proxy(this.click, this)).on("mouseenter", "li", n.proxy(this.mouseenter, this))
        },
        move: function (n) {
            if (this.shown) {
                switch (n.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        n.preventDefault();
                        break;
                    case 38:
                        n.preventDefault(), this.prev();
                        break;
                    case 40:
                        n.preventDefault(), this.next()
                }
                n.stopPropagation()
            }
        },
        keydown: function (t) {
            this.suppressKeyPressRepeat = !~n.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
        },
        keypress: function (n) {
            this.suppressKeyPressRepeat || this.move(n)
        },
        keyup: function (n) {
            switch (n.keyCode) {
                case 40:
                case 38:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            n.stopPropagation(), n.preventDefault()
        },
        blur: function () {
            var t = this;
            setTimeout(function () {
                t.hide()
            }, 150)
        },
        click: function (n) {
            n.stopPropagation(), n.preventDefault(), this.select()
        },
        mouseenter: function (t) {
            this.$menu.find(".active").removeClass("active"), n(t.currentTarget).addClass("active")
        }
    }, n.fn.typeahead = function (i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("typeahead"),
                f = typeof i == "object" && i;
            r || u.data("typeahead", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }, n.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"><\/ul>',
        item: '<li><a href="#"><\/a><\/li>',
        minLength: 1
    }, n.fn.typeahead.Constructor = t, n(function () {
        n("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (t) {
            var i = n(this);
            i.data("typeahead") || (t.preventDefault(), i.typeahead(i.data()))
        })
    })
}(window.jQuery), eval(function (n, t, i, r, u, f) {
    if (u = function (n) {
        return (n < t ? "" : u(parseInt(n / t))) + ((n = n % t) > 35 ? String.fromCharCode(n + 29) : n.toString(36))
    }, !"".replace(/^/, String)) {
        while (i--) f[u(i)] = r[i] || u(i);
        r = [function (n) {
            return f[n]
        }], u = function () {
            return "\\w+"
        }, i = 1
    }
    while (i--) r[i] && (n = n.replace(new RegExp("\\b" + u(i) + "\\b", "g"), r[i]));
    return n
}('6 1t;6 1A="1A";6 T="T";6 17=T;6 27=L;6 26=L;$(3(){$(\'#h l[v=m]\').2K(3(o){7(o.2L==13){o.2M();1u()}});$(\'#h\').K(3(o){6 g=$(o.g);7(g.1f(\'1r\')){D}6 l=$(\'#h l[v=m]\');6 15=l.11("2d");7(15!=B&&15!=""){1t=15}$(\'#h\').1C("21")});$(2s).K(3(o){6 g=$(o.g);7(g.11("2N")!="h"&&g.2J("#h").C<1){6 l=$(\'#h l[v=m]\');l.11("2d",1t);7(!27){$(\'#h\').1p("21")}}});$("#h .1F").1N({2I:x});$(".19 .1F").1h(3(){$(".19 .1F u").R();$(4).2E("u").z();7($(4).1f(\'2r\')){17=1A}s{17=T}$(\'#h l[v=m]\').2D()});7(26){$(".19 .2r").1h()}$(".2F").K(3(){1u()});$(".2G a").M(3(){$(4).n("p",0.8)},3(){$(4).n("p",1.0)}).1h(3(){$(".2H .2O-2C").2P()});$(".2X a").n("p",0.8).M(3(){$(4).n("p",1.0);1Q($(4).11("1N"),$(4))},3(){$(4).n("p",0.8);1S()}).K(3(){$(4).n("p",0.5)}).23(3(){$(4).n("p",0.5)});J N(".1H",".2Y");6 1w="<b 2Z=\'30\' 2k=\'1m-f: 2W; 1m-d: 2V;2R-f: 2Q 2S 2T;\'><\/b>";$(".1H").1V($(1w));J N(".2U",".31",B,"2y");J N(".1r",".2n");$(".1O").1V($(1w));J N(".1O",".2u");J N(".y",".1Z",{f:22,d:9-2w+2B-2z},B,x,3(){7(P.C>0){$(\'.j\').e(\'10\').1y();7($(".y").1f("1i")&&$(".y u").m()!="0"){$.28({1x:2e+"/18/2A",e:B,v:"2x",2c:3(e){$(".y u").m("0");$.29(\'/2f.1g\')},2i:3(e){}})}}});7(2v(2a)!=\'2t\'&&2a){1v()}$(".1r").M(1s,3(){});$(".2n").M(1s,3(){})});3 1s(){Y.1x=2m(3d);6 H="";3B(3C){1G 0:H=1q.3D;1k;1G 1:H=1q.3E;1k;1G 2:H=1q.3A;1k}Y.H=2m(H);Y.3z="3v://3u.3w/2h/3y/3G.3L";Y.3N=B}3 1u(){6 G=$.3P($(\'#h l[v=m]\').3O());G=G.1L("#","").1L("@","");7(G.C>0){7(17==T){16.1l.1M=3M+"/"+1K(G)}s{16.1l.1M=3H+"/"+1K(G)}}}6 3I=3J;3 32(){$(\'#1W\').1T({z:x});1P=x}3 3K(){$(\'#1W\').1T(\'R\');1P=L}6 F=-1;3 1Q(1B,r){7(!1B){D}7(F>-1){Z(F)}6 1R=$(".1n").m(1B).1e();6 W=r.1I();6 1J=r.1e();6 1a=r.25();6 d=W.d-1R/2.0;6 f=W.f+1a+5;$(".1n").z().n({p:1.0}).3s().3b({d:d,f:f},2g)}3 1S(){F=1b(3(){$(".1n").3a();Z(F);F=-1},3c)}3 3e(){16.1l.39()}6 1D={};3 N(t,k,I,q,Q,V){4.E=-1;4.U=-1;4.t=t;4.k=k;4.I=I;4.q=q;4.w=L;4.Q=Q;4.V=V;6 c=4;1D[k]=4;4.1c=3(){7(4.w||4.q&&$(16).33()==0){D}4.X();7(4.q){$(4.k).1C(4.q).z();4.w=x}s{6 r=$(4.t);6 W=r.1I();6 1J=r.1e();6 1a=r.25();6 f=12;6 d=W.d-12;7(c.I){f+=c.I.f;d+=c.I.d}$(4.k).n({f:f,d:d}).z();4.w=x}7(4.V){4.V()}};4.A=3(){7(4.w){6 1j=3f;7(c.Q){1j=0}4.E=1b(3(){7(c.q){$(c.k).R();$(4).1p(c.q).z()}s{$(c.k).R()}c.w=L;c.E=-1},1j)}};4.X=3(){7(4.E>-1){Z(4.E);4.E=-1}};7(Q){3 1d(2j,1o){6 2p=1o.1Y(0);6 S=2j;3g(S.C>0){7(S.1Y(0)==2p){D x}S=S.1o()}D L}$(4.t).K(3(){7(!c.w){c.X();c.1c()}s{c.A()}});$(2s).K(3(o){6 g=$(o.g);7(!1d(g,$(c.t))&&!1d(g,$(c.k))){c.A()}})}s{$(4.t).M(3(){c.X();c.U=1b(3(){c.1c()},2g)},3(){7(c.U>-1){Z(c.U);c.U=-1}c.A()});$(4.k).M(3(){c.X()},3(){c.A()}).23(3(){})}};3 3m(){1D[".1Z"].A()}3 3h(20){$(".j .1X").R();$(".j "+20).z();$(\'.j\').e(\'10\').1y()}3 1v(){7(!3k()){D}1z.1E("1v");$.28({1x:2e+"/18/3F",e:B,v:"3o",2c:3(e){1z.1E("35 14: "+e.C);P=e.38(P);2l();6 O=0;3t(6 i=0;i<P.C;i++){6 2b=P[i];7(!2b.3x){O+=1}}1z.1E("J 1X: "+O);7(O>0){$(".y").24("<u><\/u>").1C("1i");$(".y u").m(O);$.29(\'/2f.1g\',O,\'3l\',\'#3j\',\'#3i\')}s{$(".y").24(\'<3n 3r="/2h/18/3q.1g" 2k="1m:0;3p:0;" />\').1p("1i")}},2i:3(e){}})}3 2l(){6 14=$($(\'#37\').36(P));7($(\'.j\').e(\'10\')){$(".j .1U").2q();14.2o($(".j .1U"));$(\'.j\').e(\'10\').1y()}s{$(".j").2q();14.2o($(".j"));$(".j").34()}}', 62, 238, "|||function|this||var|if|||||self|left|data|top|target|search||userNotificationContent|popoverClass|input|text|css|event|opacity|classToToggle|element|else|navButtonClass|span|type|isShowingPopover|true|showNotificationButton|show|hideAccountPopover|null|length|return|hideAccountPopoverTimeoutID|hideTooltipTimeout|tag|title|positionOffset|new|mousedown|false|hover|setNavPopover|unreadCount|notificationsJson|useClickEvent|hide|elemParent|searchModeTag|showAccountPopoverTimeoutID|openCallback|eos|stopHideAccountPopover|addthisParams|clearTimeout|jsp|attr|||notifications|ph|window|searchMode|MultiView|searchOption|eHeight|setTimeout|showAccountPopover|isChildElement|width|hasClass|png|click|hasNew|timeout|break|location|margin|navButtonTip|parent|removeClass|MultiViewLang|navShareButton|resetPageShareInfo|searchBoxPlaceholder|doSearch|updateAndRenderNotificationPopover|caretHtml|url|reinitialise|console|searchModeUser|content|addClass|AdrianNavPopovers|log|btn|case|navButtonCurrentUser|offset|eWidth|encodeURI|replace|href|tooltip|navButtonExplore|showingLoginForm|showTooltip|ttWidth|hideTooltip|modal|jspPane|append|loginFormModal|notification|get|notificationPopover|clazz|searching||mouseup|html|height|isSearchingUser|isInSearchResultPage|ajax|faviconNotify|shouldUpdateUserNotifications|notiObj|success|placeholder|rootUrl|favicon|100|Content|error|elem|style|renderNotificationPopover|encodeURIComponent|sharePopover|appendTo|parentElem|empty|swtichSearchUser|document|undefined|explorePopover|typeof|115|POST|multiViewTopBannerToolbarPopover|50|MarkAllNotificationRead|49|load|focus|find|searchGoBtn|loginFormBody|instagramLogin|animation|parents|keydown|which|preventDefault|id|login|fadeIn|4px|border|solid|white|multiViewTopBanner|5px|9px|navButtons|accountPopover|class|caret|multiViewTopBannerToolbar|showLogin|scrollTop|jScrollPane|got|render|notificationTemplate|concat|reload|fadeOut|animate|200|pageInfoUrl|refreshContent|500|while|showNotificationByType|FFFFFF|000000|isUserLoggedIn|br|hideUserNotificationPopover|img|GET|padding|messages|src|stop|for|pinsta|http|me|IsRead|Images|image|ShareMyPinsta|switch|pageInfoShareType|SharePinsta|ShareUsersPinsta|UpdateAndGetNewNotifications|screenshot|searchUserBaseUrl|loginFormMarginTop|80|hideLogin|jpg|searchTagBaseUrl|description|val|trim".split("|"), 0, {}));
/*!

   Flowplayer v5.4.3 (Wednesday, 19. June 2013 11:34PM) | flowplayer.org/license

*/
! function (n) {
    function ct(t, i) {
        var u = "obj" + ("" + Math.random()).slice(2, 15),
            r = '<object class="fp-engine" id="' + u + '" name="' + u + '" ',
            f;
        return r += n.browser.msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + t + '" type="application/x-shockwave-flash">', f = {
            width: "100%",
            height: "100%",
            allowscriptaccess: "always",
            wmode: "transparent",
            quality: "high",
            flashvars: "",
            movie: t + (n.browser.msie ? "?" + u : ""),
            name: u
        }, n.each(i, function (n, t) {
            f.flashvars += n + "=" + t + "&"
        }), n.each(f, function (n, t) {
            r += '<param name="' + n + '" value="' + t + '"/>'
        }), r += "<\/object>", n(r)
    }
    function k(n) {
        return Math.round(100 * n) / 100
    }
    function w(n) {
        return /mpegurl/i.test(n) ? "application/x-mpegurl" : "video/" + n
    }
    function b(n) {
        return /^(video|application)/.test(n) || (n = w(n)), !! et.canPlayType(n).replace("no", "")
    }
    function st(t, i) {
        var r = n.grep(t, function (n) {
            return n.type === i
        });
        return r.length ? r[0] : null
    }
    function ut(n) {
        var r = n.attr("src"),
            t = n.attr("type") || "",
            i = r.split(o)[1];
        return t = /mpegurl/.test(t) ? "mpegurl" : t.replace("video/", ""), {
            src: r,
            suffix: i || t,
            type: t || i
        }
    }
    function rt(t) {
        var r = this,
            i = [];
        n("source", t).each(function () {
            i.push(ut(n(this)))
        }), i.length || i.push(ut(t)), r.initialSources = i, r.resolve = function (t) {
            return t ? (n.isArray(t) ? t = {
                sources: n.map(t, function (t) {
                    var r, i = n.extend({}, t);
                    return n.each(t, function (n) {
                        r = n
                    }), i.type = r, i.src = t[r], delete i[r], i
                })
            } : "string" == typeof t && (t = {
                src: t,
                sources: []
            }, n.each(i, function (n, i) {
                "flash" != i.type && t.sources.push({
                    type: i.type,
                    src: t.src.replace(o, "." + i.suffix + "$2")
                })
            })), t) : {
                sources: i
            }
        }
    }
    function f(n) {
        return n = parseInt(n, 10), n >= 10 ? n : "0" + n
    }
    function t(n) {
        n = n || 0;
        var i = Math.floor(n / 3600),
            t = Math.floor(n / 60);
        return n -= 60 * t, i >= 1 ? (t -= 60 * i, i + ":" + f(t) + ":" + f(n)) : f(t) + ":" + f(n)
    }
    var tt, o, v, h, r, d, c;
    ! function (n) {
        if (!n.browser) {
            var r = n.browser = {}, t = navigator.userAgent.toLowerCase(),
                i = /(chrome)[ \/]([\w.]+)/.exec(t) || /(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            i[1] && (r[i[1]] = !0, r.version = i[2] || "0")
        }
    }(jQuery), n(function () {
        "function" == typeof n.fn.flowplayer && n("video").parent(".flowplayer").flowplayer()
    });
    var p = [],
        it = [],
        u = window.navigator.userAgent;
    window.flowplayer = function (t) {
        return n.isFunction(t) ? it.push(t) : "number" == typeof t || void 0 === t ? p[t || 0] : n(t).data("flowplayer")
    }, n(window).on("beforeunload", function () {
        n.each(p, function (t, i) {
            i.conf.splash ? i.unload() : i.bind("error", function () {
                n(".flowplayer.is-error .fp-message").remove()
            })
        })
    }), n.extend(flowplayer, {
        version: "5.4.3",
        engine: {},
        conf: {},
        support: {},
        defaults: {
            debug: !1,
            disabled: !1,
            engine: "html5",
            fullscreen: window == window.top,
            keyboard: !0,
            ratio: 9 / 16,
            adaptiveRatio: !1,
            flashfit: !1,
            rtmp: 0,
            splash: !1,
            swf: "//releases.flowplayer.org/5.4.3/flowplayer.swf",
            speeds: [.25, .5, 1, 1.5, 2],
            tooltip: !0,
            volume: "object" != typeof localStorage ? 1 : "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1,
            errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],
            errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],
            playlist: []
        }
    }), tt = 1, n.fn.flowplayer = function (t, i) {
        return "string" == typeof t && (t = {
            swf: t
        }), n.isFunction(t) && (i = t, t = {}), !t && this.data("flowplayer") || this.each(function () {
            var v, e, u = n(this).addClass("is-loading"),
                f = n.extend({}, flowplayer.defaults, flowplayer.conf, t, u.data()),
                o = n("video", u).addClass("fp-engine").removeAttr("controls"),
                c = o.length ? new rt(o) : null,
                s = {}, l, y, h, a, r;
            f.playlist.length && (y = o.attr("preload"), o.length && o.replaceWith(l = n("<p />")), o = n("<video />").addClass("fp-engine"), l ? l.replaceWith(o) : u.prepend(o), o.attr("preload", y), "string" == typeof f.playlist[0] ? o.attr("src", f.playlist[0]) : n.each(f.playlist[0], function (t, i) {
                for (var r in i) i.hasOwnProperty(r) && o.append(n("<source />").attr({
                    type: "video/" + r,
                    src: i[r]
                }))
            }), c = new rt(o)), h = u.data("flowplayer"), h && h.unload(), u.data("fp-player_id", u.data("fp-player_id") || tt++);
            try {
                s = window.localStorage || s
            } catch (w) {}
            a = this.currentStyle && "rtl" === this.currentStyle.direction || window.getComputedStyle && "rtl" === window.getComputedStyle(this, null).getPropertyValue("direction"), a && u.addClass("is-rtl"), r = h || {
                conf: f,
                currentSpeed: 1,
                volumeLevel: "undefined" == typeof f.volume ? 1 * s.volume : f.volume,
                video: {},
                disabled: !1,
                finished: !1,
                loading: !1,
                muted: "true" == s.muted || f.muted,
                paused: !1,
                playing: !1,
                ready: !1,
                splash: !1,
                rtl: a,
                load: function (t, i) {
                    if (!(r.error || r.loading || r.disabled)) {
                        if (t = c.resolve(t), n.extend(t, e.pick(t.sources)), t.src) {
                            var f = n.Event("load");
                            u.trigger(f, [r, t, e]), f.isDefaultPrevented() ? r.loading = !1 : (e.load(t), n.isFunction(t) && (i = t), i && u.one("ready", i))
                        }
                        return r
                    }
                },
                pause: function (n) {
                    return !r.ready || r.seeking || r.disabled || r.loading || (e.pause(), r.one("pause", n)), r
                },
                resume: function () {
                    return r.ready && r.paused && !r.disabled && (e.resume(), r.finished && (r.trigger("resume"), r.finished = !1)), r
                },
                toggle: function () {
                    return r.ready ? r.paused ? r.resume() : r.pause() : r.load()
                },
                seek: function (t, i) {
                    var o, f;
                    return r.ready && ("boolean" == typeof t && (o = .1 * r.video.duration, t = r.video.time + (t ? o : -o)), t = v = Math.min(Math.max(t, 0), r.video.duration).toFixed(1), f = n.Event("beforeseek"), u.trigger(f, [r, t]), f.isDefaultPrevented() ? (r.seeking = !1, u.toggleClass("is-seeking", r.seeking)) : (e.seek(t), n.isFunction(i) && u.one("seek", i))), r
                },
                seekTo: function (n, t) {
                    var i = void 0 === n ? v : .1 * r.video.duration * n;
                    return r.seek(i, t)
                },
                mute: function (n) {
                    return void 0 === n && (n = !r.muted), s.muted = r.muted = n, s.volume = isNaN(s.volume) ? f.volume : s.volume, r.volume(n ? 0 : s.volume, !0), r.trigger("mute", n), r
                },
                volume: function (n, t) {
                    return r.ready && (n = Math.min(Math.max(n, 0), 1), t || (s.volume = n), e.volume(n)), r
                },
                speed: function (t, i) {
                    return r.ready && ("boolean" == typeof t && (t = f.speeds[n.inArray(r.currentSpeed, f.speeds) + (t ? 1 : -1)] || r.currentSpeed), e.speed(t), i && u.one("speed", i)), r
                },
                stop: function () {
                    return r.ready && (r.pause(), r.seek(0, function () {
                        u.trigger("stop")
                    })), r
                },
                unload: function () {
                    return u.hasClass("is-embedding") || (f.splash ? (r.trigger("unload"), e.unload()) : r.stop()), r
                },
                disable: function (n) {
                    return void 0 === n && (n = !r.disabled), n != r.disabled && (r.disabled = n, r.trigger("disable", n)), r
                }
            }, r.conf = n.extend(r.conf, f), n.each(["bind", "one", "unbind"], function (n, t) {
                r[t] = function (n, i) {
                    return u[t](n, i), r
                }
            }), r.trigger = function (n, t) {
                return u.trigger(n, [r, t]), r
            }, u.data("flowplayer") || u.bind("boot", function () {
                return n.each(["autoplay", "loop", "preload", "poster"], function (n, t) {
                    var i = o.attr(t);
                    void 0 !== i && (f[t] = i ? i : !0)
                }), (f.splash || u.hasClass("is-splash") || !flowplayer.support.firstframe) && (r.forcedSplash = !f.splash && !u.hasClass("is-splash"), r.splash = f.splash = f.autoplay = !0, u.addClass("is-splash"), o.attr("preload", "none")), n.each(it, function () {
                    this(r, u)
                }), e = flowplayer.engine[f.engine], e && (e = e(r, u)), e.pick(c.initialSources) ? r.engine = f.engine : n.each(flowplayer.engine, function (n) {
                    if (n != f.engine) return e = this(r, u), e.pick(c.initialSources) && (r.engine = n), !1
                }), p.push(r), r.engine ? (f.splash ? r.unload() : r.load(), f.disabled && r.disable(), e.volume(r.volumeLevel), u.one("ready", i), void 0) : r.trigger("error", {
                    code: flowplayer.support.flashVideo ? 5 : 10
                })
            }).bind("load", function (t, i) {
                f.splash && n(".flowplayer").filter(".is-ready, .is-loading").not(u).each(function () {
                    var t = n(this).data("flowplayer");
                    t.conf.splash && t.unload()
                }), u.addClass("is-loading"), i.loading = !0
            }).bind("ready", function (n, t, i) {
                function r() {
                    u.removeClass("is-loading"), t.loading = !1
                }
                i.time = 0, t.video = i, f.splash ? u.one("progress", r) : r(), t.muted ? t.mute(!0) : t.volume(t.volumeLevel)
            }).bind("unload", function () {
                f.splash && o.remove(), u.removeClass("is-loading"), r.loading = !1
            }).bind("ready unload", function (n) {
                var t = "ready" == n.type;
                u.toggleClass("is-splash", !t).toggleClass("is-ready", t), r.ready = t, r.splash = !t
            }).bind("progress", function (n, t, i) {
                t.video.time = i
            }).bind("speed", function (n, t, i) {
                t.currentSpeed = i
            }).bind("volume", function (n, t, i) {
                t.volumeLevel = Math.round(100 * i) / 100, t.muted ? i && t.mute(!1) : s.volume = i
            }).bind("beforeseek seek", function (n) {
                r.seeking = "beforeseek" == n.type, u.toggleClass("is-seeking", r.seeking)
            }).bind("ready pause resume unload finish stop", function (n, t, i) {
                r.paused = /pause|finish|unload|stop/.test(n.type), "ready" == n.type && (r.paused = "none" == f.preload, i && (r.paused = !i.duration || !f.autoplay && "none" != f.preload)), r.playing = !r.paused, u.toggleClass("is-paused", r.paused).toggleClass("is-playing", r.playing), r.load.ed || r.pause()
            }).bind("finish", function () {
                r.finished = !0
            }).bind("error", function () {
                o.remove()
            }), u.trigger("boot", [r, u]).data("flowplayer", r)
        })
    }, ! function () {
        var y = function (n) {
            var t = /Version\/(\d\.\d)/.exec(n);
            return t && t.length > 1 ? parseFloat(t[1], 10) : 0
        }, e = flowplayer.support,
            a = n.browser,
            l = n("<video loop autoplay preload/>")[0],
            h = a.msie,
            t = navigator.userAgent,
            r = /iPad|MeeGo/.test(t) && !/CriOS/.test(t),
            o = /iPad/.test(t) && /CriOS/.test(t),
            f = /iP(hone|od)/i.test(t) && !/iPad/.test(t),
            u = /Android/.test(t) && !/Firefox/.test(t),
            p = /Android/.test(t) && /Firefox/.test(t),
            c = /Silk/.test(t),
            s = /IEMobile/.test(t),
            v = (r ? y(t) : 0, u ? parseFloat(/Android\ (\d\.\d)/.exec(t)[1], 10) : 0),
            i;
        n.extend(e, {
            subtitles: !! l.addTextTrack,
            fullscreen: !u && ("function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(t) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen),
            inlineBlock: !(h && a.version < 8),
            touch: "ontouchstart" in window,
            dataload: !r && !f && !s,
            zeropreload: !h && !u,
            volume: !(r || u || f || c || o),
            cachedVideoTag: !(r || f || o || s),
            firstframe: !(f || r || u || c || o || s || p),
            inlineVideo: !f && !c && !s && (!u || v >= 3),
            hlsDuration: !a.safari || r || f || o,
            seekable: !r && !o
        });
        try {
            i = h ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : navigator.plugins["Shockwave Flash"].description, i = i.split(/\D+/), i.length && !i[0] && (i = i.slice(1)), e.flashVideo = i[0] > 9 || 9 == i[0] && i[3] >= 115
        } catch (b) {}
        try {
            e.video = !! l.canPlayType, e.video && l.canPlayType("video/mp4")
        } catch (w) {
            e.video = !1
        }
        e.animation = function () {
            for (var i = ["", "Webkit", "Moz", "O", "ms", "Khtml"], r = n("<p/>")[0], t = 0; t < i.length; t++) if ("undefined" !== r.style[i[t] + "AnimationName"]) return !0
        }()
    }(), window.attachEvent && window.attachEvent("onbeforeunload", function () {
        __flash_savedUnloadHandler = __flash_unloadHandler = function () {}
    }), flowplayer.engine.flash = function (t, i) {
        var f, s, r, u = t.conf,
            o, e;
        return t.video, o = {
            pick: function (t) {
                var r, u, i;
                if (flowplayer.support.flashVideo) {
                    if (r = n.grep(t, function (n) {
                        return "flash" == n.type
                    })[0], r) return r;
                    for (i = 0; i < t.length; i++) if (u = t[i], /mp4|flv/.test(u.type)) return u
                }
            },
            load: function (e) {
                function l(n) {
                    return n.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
                }
                var c = n("video", i),
                    h = l(e.src),
                    o;
                (is_absolute = /^https?:/.test(h), c.length > 0 && flowplayer.support.video && c[0].pause(), c.remove(), is_absolute || u.rtmp || (h = n("<img/>").attr("src", h)[0].src), r) ? r.__play(h) : (f = "fp" + ("" + Math.random()).slice(3, 15), o = {
                    hostname: u.embedded ? u.hostname : location.hostname,
                    url: h,
                    callback: "jQuery." + f
                }, i.data("origin") && (o.origin = i.data("origin")), is_absolute && delete u.rtmp, n.each(["key", "autoplay", "preload", "rtmp", "loop", "debug", "preload", "splash"], function (n, t) {
                    u[t] && (o[t] = u[t])
                }), o.rtmp && (o.rtmp = l(o.rtmp)), s = ct(u.swf, o), s.prependTo(i), r = s[0], setTimeout(function () {
                    try {
                        if (!r.PercentLoaded()) return i.trigger("error", [t, {
                            code: 7,
                            url: u.swf
                        }])
                    } catch (n) {}
                }, 5e3), n[f] = function (i, r) {
                    u.debug && "status" != i && console.log("--", i, r);
                    var f = n.Event(i);
                    switch (i) {
                        case "ready":
                            r = n.extend(e, r);
                            break;
                        case "click":
                            f.flash = !0;
                            break;
                        case "keydown":
                            f.which = r;
                            break;
                        case "seek":
                            e.time = r;
                            break;
                        case "buffered":
                            e.buffered = !0;
                            break;
                        case "status":
                            t.trigger("progress", r.time), r.buffer <= e.bytes && !e.buffered ? (e.buffer = r.buffer / e.bytes * e.duration, t.trigger("buffer", e.buffer)) : e.buffered && t.trigger("buffered")
                    }
                    setTimeout(function () {
                        t.trigger(f, r)
                    }, 1)
                })
            },
            speed: n.noop,
            unload: function () {
                r && r.__unload && r.__unload(), delete n[f], n("object", i).remove(), r = 0
            }
        }, n.each("pause,resume,seek,volume".split(","), function (n, i) {
            o[i] = function (n) {
                t.ready && ("seek" == i && t.video.time && !t.paused && t.trigger("beforeseek"), void 0 === n ? r["__" + i]() : r["__" + i](n))
            }
        }), e = n(window), t.bind("ready fullscreen fullscreen-exit", function (r) {
            var w = i.height(),
                p = i.width();
            if (t.conf.flashfit || /full/.test(r.type)) {
                var a, y, v = t.isFullscreen,
                    o = v && nt,
                    b = !flowplayer.support.inlineBlock,
                    h = v ? o ? screen.availWidth : e.width() : p,
                    s = v ? o ? screen.availHeight : e.height() : w,
                    c = o ? screen.width - screen.availWidth : 0,
                    l = o ? screen.height - screen.availHeight : 0,
                    f = b ? p : "",
                    u = b ? w : "";
                (t.conf.flashfit || "fullscreen" === r.type) && (a = t.video.width / t.video.height, y = t.video.height / t.video.width, u = Math.max(y * h), f = Math.max(a * s), u = u > s ? f * y : u, u = Math.min(Math.round(u), s), f = f > h ? u * a : f, f = Math.min(Math.round(f), h), l = Math.max(Math.round((s + l - u) / 2), 0), c = Math.max(Math.round((h + c - f) / 2), 0)), n("object", i).css({
                    width: f,
                    height: u,
                    marginTop: l,
                    marginLeft: c
                })
            }
        }), o
    };
    var e, et = n("<video/>")[0],
        ot = {
            ended: "finish",
            pause: "pause",
            play: "resume",
            progress: "buffer",
            timeupdate: "progress",
            volumechange: "volume",
            ratechange: "speed",
            seeked: "seek",
            loadeddata: "ready",
            error: "error",
            dataunavailable: "error"
        }, ht = function (t) {
            return e ? e.attr({
                type: w(t.type),
                src: t.src
            }) : e = n("<video/>", {
                src: t.src,
                type: w(t.type),
                "class": "fp-engine",
                autoplay: "autoplay",
                preload: "none",
                "x-webkit-airplay": "allow"
            })
        };
    flowplayer.engine.html5 = function (t, i) {
        function c(r, u, e) {
            r.listeners && r.listeners.hasOwnProperty(i.data("fp-player_id")) || ((r.listeners || (r.listeners = {}))[i.data("fp-player_id")] = !0, u.bind("error", function (i) {
                try {
                    if (i.originalEvent && n(i.originalEvent.originalTarget).is("img")) return i.preventDefault();
                    b(n(i.target).attr("type")) && t.trigger("error", {
                        code: 4
                    })
                } catch (r) {}
            }), n.each(ot, function (u, h) {
                r.addEventListener(u, function (c) {
                    var l, v, a;
                    if ("progress" == h && c.srcElement && 0 === c.srcElement.readyState && setTimeout(function () {
                        t.video.duration || (h = "error", t.trigger(h, {
                            code: 4
                        }))
                    }, 1e4), o.debug && !/progress/.test(h) && console.log(u, "->", h, c), (t.ready || /ready|error/.test(h)) && h && n("video", i).length) {
                        v = n.Event(h);
                        switch (h) {
                            case "ready":
                                l = n.extend(e, {
                                    duration: r.duration,
                                    width: r.videoWidth,
                                    height: r.videoHeight,
                                    url: r.currentSrc,
                                    src: r.currentSrc
                                });
                                try {
                                    l.seekable = r.seekable && r.seekable.end(null)
                                } catch (p) {}
                                if (s = s || setInterval(function () {
                                    try {
                                        l.buffer = r.buffered.end(null)
                                    } catch (n) {}
                                    l.buffer && (l.buffer <= l.duration && !l.buffered ? t.trigger("buffer", c) : l.buffered || (l.buffered = !0, t.trigger("buffer", c).trigger("buffered", c), clearInterval(s), s = 0))
                                }, 250), !l.duration && !f.hlsDuration && "loadeddata" === u) return a = function () {
                                    l.duration = r.duration;
                                    try {
                                        l.seekable = r.seekable && r.seekable.end(null)
                                    } catch (n) {}
                                    t.trigger(v, l), r.removeEventListener("durationchange", a)
                                }, r.addEventListener("durationchange", a), void 0;
                                break;
                            case "progress":
                            case "seek":
                                if (t.video.duration, r.currentTime > 0) {
                                    l = Math.max(r.currentTime, 0);
                                    break
                                }
                                if ("progress" == h) return;
                            case "speed":
                                l = k(r.playbackRate);
                                break;
                            case "volume":
                                l = k(r.volume);
                                break;
                            case "error":
                                try {
                                    l = (c.srcElement || c.originalTarget).error
                                } catch (y) {
                                    return
                                }
                        }
                        t.trigger(v, l)
                    }
                }, !1)
            }))
        }
        var l, s, r, u = n("video", i),
            f = flowplayer.support,
            h = n("track", u),
            o = t.conf;
        return l = {
            pick: function (n) {
                var i, t;
                if (f.video) {
                    if (o.videoTypePreference && (i = st(n, o.videoTypePreference), i)) return i;
                    for (t = 0; t < n.length; t++) if (b(n[t].type)) return n[t]
                }
            },
            load: function (e) {
                if (o.splash && !r) u = ht(e).prependTo(i), f.inlineVideo || u.css({
                    position: "absolute",
                    top: "-9999em"
                }), h.length && u.append(h.attr("default", "")), o.loop && u.attr("loop", "loop"), r = u[0];
                else {
                    r = u[0];
                    var s = u.find("source");
                    !r.src && s.length && (r.src = e.src, s.remove()), t.video.src && e.src != t.video.src ? (u.attr("autoplay", "autoplay"), r.src = e.src) : "none" != o.preload && f.dataload || (f.zeropreload ? t.trigger("ready", e).trigger("pause").one("ready", function () {
                        i.trigger("resume")
                    }) : t.one("ready", function () {
                        i.trigger("pause")
                    }))
                }
                c(r, n("source", u).add(u), e), "none" == o.preload && f.zeropreload && f.dataload || r.load(), o.splash && r.load()
            },
            pause: function () {
                r.pause()
            },
            resume: function () {
                r.play()
            },
            speed: function (n) {
                r.playbackRate = n
            },
            seek: function (n) {
                try {
                    var i = t.paused;
                    r.currentTime = n, i && r.pause()
                } catch (u) {}
            },
            volume: function (n) {
                r.volume = n
            },
            unload: function () {
                n("video.fp-engine", i).remove(), f.cachedVideoTag || (e = null), s = clearInterval(s), r = 0
            }
        }
    }, o = /\.(\w{3,4})(\?.*)?$/i, n.throttle = function (n, t) {
        var i;
        return function () {
            i || (n.apply(this, arguments), i = 1, setTimeout(function () {
                i = 0
            }, t))
        }
    }, n.fn.slider2 = function (t) {
        var i = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);
        return this.each(function () {
            var c, v, y, a, f, o, u, d, r = n(this),
                p = n(document),
                h = r.children(":last"),
                k = !1,
                s = function () {
                    v = r.offset(), y = r.width(), a = r.height(), o = f ? a : y, d = g(u)
                }, l = function (n) {
                    !c && n != e.value && (!u || u > n) && (r.trigger("slide", [n]), e.value = n)
                }, b = function (n) {
                    var u = n.pageX,
                        r, i;
                    return !u && n.originalEvent && n.originalEvent.touches && n.originalEvent.touches.length && (u = n.originalEvent.touches[0].pageX), r = f ? n.pageY - v.top : u - v.left, r = Math.max(0, Math.min(d || o, r)), i = r / o, f && (i = 1 - i), t && (i = 1 - i), w(i, 0, !0)
                }, w = function (n, t) {
                    void 0 === t && (t = 0), n > 1 && (n = 1);
                    var r = Math.round(1e3 * n) / 10 + "%";
                    return (!u || u >= n) && (i || h.stop(), k ? h.css("width", r) : h.animate(f ? {
                        height: r
                    } : {
                        width: r
                    }, t, "linear")), n
                }, g = function (n) {
                    return Math.max(0, Math.min(o, f ? (1 - n) * a : n * y))
                }, e = {
                    max: function (n) {
                        u = n
                    },
                    disable: function (n) {
                        c = n
                    },
                    slide: function (n, t, i) {
                        s(), i && l(n), w(n, t)
                    },
                    disableAnimation: function (n) {
                        k = n !== !1
                    }
                };
            s(), r.data("api", e).bind("mousedown.sld touchstart", function (t) {
                if (t.preventDefault(), !c) {
                    var i = n.throttle(l, 100);
                    s(), e.dragging = !0, r.addClass("is-dragging"), l(b(t)), p.bind("mousemove.sld touchmove", function (n) {
                        n.preventDefault(), i(b(n))
                    }).one("mouseup touchend", function () {
                        e.dragging = !1, r.removeClass("is-dragging"), p.unbind("mousemove.sld touchmove")
                    })
                }
            })
        })
    }, flowplayer(function (i, r) {
        function u(t) {
            return n(".fp-" + t, r)
        }
        function p(t) {
            ("0px" === r.css("width") || "0px" === r.css("height") || t !== flowplayer.defaults.ratio) && (parseInt(tt, 10) || l.css("paddingTop", 100 * t + "%")), v.inlineBlock || n("object", r).height(r.height())
        }
        function h(n) {
            r.toggleClass("is-mouseover", n).toggleClass("is-mouseout", !n)
        }
        var nt, e = i.conf,
            v = flowplayer.support,
            o, y;
        r.find(".fp-ratio,.fp-ui").remove(), r.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/><\/div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"><\/a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            <\/div>            <div class="volume">               <a class="mute"><\/a>               <div class="volumeslider">                  <div class="volumelevel"/>               <\/div>            <\/div>         <\/div>         <div class="time">            <em class="elapsed">00:00<\/em>            <em class="remaining"/>            <em class="duration">00:00<\/em>         <\/div>         <div class="message"><h2/><p/><\/div>      <\/div>'.replace(/class="/g, 'class="fp-'));
        var rt = u("progress"),
            a = u("buffer"),
            c = u("elapsed"),
            g = u("remaining"),
            ut = u("waiting"),
            l = u("ratio"),
            k = u("speed"),
            ft = u("duration"),
            tt = l.css("paddingTop"),
            d = u("timeline").slider2(i.rtl),
            f = d.data("api"),
            w = (u("volume"), u("fullscreen")),
            b = u("volumeslider").slider2(i.rtl),
            s = b.data("api"),
            it = r.is(".fixed-controls, .no-toggle");
        f.disableAnimation(r.hasClass("is-touch")), v.animation || ut.html("<p>loading &hellip;<\/p>"), p(e.ratio);
        try {
            e.fullscreen || w.remove()
        } catch (et) {
            w.remove()
        }
        i.bind("ready", function () {
            var n = i.video.duration;
            f.disable(i.disabled || !n), e.adaptiveRatio && p(i.video.height / i.video.width), ft.add(g).html(t(n)), n >= 3600 && r.addClass("is-long") || r.removeClass("is-long"), s.slide(i.volumeLevel)
        }).bind("unload", function () {
            tt || l.css("paddingTop", "")
        }).bind("buffer", function () {
            var t = i.video,
                n = t.buffer / t.duration;
            !t.seekable && v.seekable && f.max(n), 1 > n ? a.css("width", 100 * n + "%") : a.css({
                width: "100%"
            })
        }).bind("speed", function (n, t, i) {
            k.text(i + "x").addClass("fp-hilite"), setTimeout(function () {
                k.removeClass("fp-hilite")
            }, 1e3)
        }).bind("buffered", function () {
            a.css({
                width: "100%"
            }), f.max(1)
        }).bind("progress", function () {
            var n = i.video.time,
                r = i.video.duration;
            f.dragging || f.slide(n / r, i.seeking ? 0 : 250), c.html(t(n)), g.html("-" + t(r - n))
        }).bind("finish resume seek", function (n) {
            r.toggleClass("is-finished", "finish" == n.type)
        }).bind("stop", function () {
            c.html(t(0)), f.slide(0, 100)
        }).bind("finish", function () {
            c.html(t(i.video.duration)), f.slide(1, 100), r.removeClass("is-seeking")
        }).bind("beforeseek", function () {
            rt.stop()
        }).bind("volume", function () {
            s.slide(i.volumeLevel)
        }).bind("disable", function () {
            var n = i.disabled;
            f.disable(n), s.disable(n), r.toggleClass("is-disabled", i.disabled)
        }).bind("mute", function (n, t, i) {
            r.toggleClass("is-muted", i)
        }).bind("error", function (t, i, u) {
            if (r.removeClass("is-loading").addClass("is-error"), u) {
                u.message = e.errors[u.code], i.error = !0;
                var f = n(".fp-message", r);
                n("h2", f).text((i.engine || "html5") + ": " + u.message), n("p", f).text(u.url || i.video.url || i.video.src || e.errorUrls[u.code]), r.unbind("mouseenter click").removeClass("is-mouseover")
            }
        }).bind("mouseenter mouseleave", function (n) {
            if (!it) {
                var t, i = "mouseenter" == n.type;
                h(i), i ? (r.bind("pause.x mousemove.x volume.x", function () {
                    h(!0), t = new Date
                }), nt = setInterval(function () {
                    new Date - t > 5e3 && (h(!1), t = new Date)
                }, 100)) : (r.unbind(".x"), clearInterval(nt))
            }
        }).bind("mouseleave", function () {
            (f.dragging || s.dragging) && r.addClass("is-mouseover").removeClass("is-mouseout")
        }).bind("click.player", function (t) {
            if (n(t.target).is(".fp-ui, .fp-engine") || t.flash) return t.preventDefault(), i.toggle()
        }), e.poster && r.css("backgroundImage", "url(" + e.poster + ")"), o = r.css("backgroundColor"), y = "none" != r.css("backgroundImage") || o && "rgba(0, 0, 0, 0)" != o && "transparent" != o, !y || e.splash || e.autoplay || i.bind("ready stop", function () {
            r.addClass("is-poster").one("progress", function () {
                r.removeClass("is-poster")
            })
        }), !y && i.forcedSplash && r.css("backgroundColor", "#555"), n(".fp-toggle, .fp-play", r).click(i.toggle), n.each(["mute", "fullscreen", "unload"], function (n, t) {
            u(t).click(function () {
                i[t]()
            })
        }), d.bind("slide", function (n, t) {
            i.seeking = !0, i.seek(t * i.video.duration)
        }), b.bind("slide", function (n, t) {
            i.volume(t)
        }), u("time").click(function () {
            n(this).toggleClass("is-inverted")
        }), h(it)
    }), r = "is-help", n(document).bind("keydown.fp", function (t) {
        var i = v,
            e = t.ctrlKey || t.metaKey || t.altKey,
            u = t.which,
            f = i && i.conf;
        if (i && f.keyboard && !i.disabled) {
            if (-1 != n.inArray(u, [63, 187, 191, 219]) || 27 == u && h.hasClass(r)) return h.toggleClass(r), !1;
            if (!e && i.ready) {
                if (t.preventDefault(), t.shiftKey) return 39 == u ? i.speed(!0) : 37 == u && i.speed(!1), void 0;
                if (58 > u && u > 47) return i.seekTo(u - 48);
                switch (u) {
                    case 38:
                    case 75:
                        i.volume(i.volumeLevel + .15);
                        break;
                    case 40:
                    case 74:
                        i.volume(i.volumeLevel - .15);
                        break;
                    case 39:
                    case 76:
                        i.seeking = !0, i.seek(!0);
                        break;
                    case 37:
                    case 72:
                        i.seeking = !0, i.seek(!1);
                        break;
                    case 190:
                        i.seekTo();
                        break;
                    case 32:
                        i.toggle();
                        break;
                    case 70:
                        f.fullscreen && i.fullscreen();
                        break;
                    case 77:
                        i.mute();
                        break;
                    case 27:
                        i[i.isFullscreen ? "fullscreen" : "unload"]()
                }
            }
        }
    }), flowplayer(function (t, i) {
        t.conf.keyboard && (i.bind("mouseenter mouseleave", function (n) {
            v = t.disabled || "mouseenter" != n.type ? 0 : t, v && (h = i)
        }), i.append('      <div class="fp-help">         <a class="fp-close"><\/a>         <div class="fp-help-section fp-help-basics">            <p><em>space<\/em>play / pause<\/p>            <p><em>esc<\/em>stop<\/p>            <p><em>f<\/em>fullscreen<\/p>            <p><em>shift<\/em> + <em>&#8592;<\/em><em>&#8594;<\/em>slower / faster <small>(latest Chrome and Safari)<\/small><\/p>         <\/div>         <div class="fp-help-section">            <p><em>&#8593;<\/em><em>&#8595;<\/em>volume<\/p>            <p><em>m<\/em>mute<\/p>         <\/div>         <div class="fp-help-section">            <p><em>&#8592;<\/em><em>&#8594;<\/em>seek<\/p>            <p><em>&nbsp;. <\/em>seek to previous            <\/p><p><em>1<\/em><em>2<\/em>&hellip;<em>6<\/em> seek to 10%, 20%, &hellip;60% <\/p>         <\/div>      <\/div>   '), t.conf.tooltip && n(".fp-ui", i).attr("title", "Hit ? for help").on("mouseout.tip", function () {
            n(this).removeAttr("title").off("mouseout.tip")
        }), n(".fp-close", i).click(function () {
            i.toggleClass(r)
        }))
    });
    var i, s = n.browser.mozilla ? "moz" : "webkit",
        y = "fullscreen",
        a = "fullscreen-exit",
        nt = flowplayer.support.fullscreen,
        l = "function" == typeof document.exitFullscreen,
        g = navigator.userAgent.toLowerCase(),
        ft = /(safari)[ \/]([\w.]+)/.exec(g) && !/(chrome)[ \/]([\w.]+)/.exec(g);
    n(document).bind(l ? "fullscreenchange" : s + "fullscreenchange", function (t) {
        var r = n(document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || t.target);
        r.length && !i ? i = r.trigger(y, [r]) : (i.trigger(a, [i]), i = null)
    }), flowplayer(function (t, i) {
        var e, u, r, f;
        t.conf.fullscreen && (u = n(window), r = {
            pos: 0,
            play: !1
        }, t.isFullscreen = !1, t.fullscreen = function (n) {
            if (!t.disabled) return void 0 === n && (n = !t.isFullscreen), n && (e = u.scrollTop()), nt ? n ? l ? i[0].requestFullscreen() : (i[0][s + "RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT), !ft || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || i[0][s + "RequestFullScreen"]()) : l ? document.exitFullscreen() : document[s + "CancelFullScreen"]() : ("flash" === t.engine && t.conf.rtmp && (r = {
                pos: t.video.time,
                play: t.playing
            }), t.trigger(n ? y : a, [t])), t
        }, i.bind("mousedown.fs", function () {
            +new Date - f < 150 && t.ready && t.fullscreen(), f = +new Date
        }), t.bind(y, function () {
            i.addClass("is-fullscreen"), t.isFullscreen = !0
        }).bind(a, function () {
            i.removeClass("is-fullscreen"), t.isFullscreen = !1, u.scrollTop(e)
        }).bind("ready", function () {
            r.pos && !isNaN(r.pos) && setTimeout(function () {
                t.play(), t.seek(r.pos), r.play || setTimeout(function () {
                    t.pause()
                }, 100), r = {
                    pos: 0,
                    play: !1
                }
            }, 250)
        }))
    }), flowplayer(function (t, i) {
        function e() {
            return n(r.query, i)
        }
        function c() {
            return n(r.query + "." + f, i)
        }
        var r = n.extend({
            active: "is-active",
            advance: !0,
            query: ".fp-playlist a"
        }, t.conf),
            f = r.active,
            o, u, h, s;
        t.play = function (i) {
            return void 0 === i ? t.resume() : "number" != typeof i || t.conf.playlist[i] ? ("number" != typeof i && t.load.apply(null, arguments), t.unbind("resume.fromfirst"), t.video.index = i, t.load("string" == typeof t.conf.playlist[i] ? t.conf.playlist[i].toString() : n.map(t.conf.playlist[i], function (t) {
                return n.extend({}, t)
            })), t) : t
        }, t.next = function (n) {
            n && n.preventDefault();
            var i = t.video.index;
            return -1 != i && (i = i === t.conf.playlist.length - 1 ? 0 : i + 1, t.play(i)), t
        }, t.prev = function (n) {
            n && n.preventDefault();
            var i = t.video.index;
            return -1 != i && (i = 0 === i ? t.conf.playlist.length - 1 : i - 1, t.play(i)), t
        }, n(".fp-next", i).click(t.next), n(".fp-prev", i).click(t.prev), r.advance && i.unbind("finish.pl").bind("finish.pl", function (n, t) {
            var u = t.video.index + 1;
            u < t.conf.playlist.length || r.loop ? (u = u === t.conf.playlist.length ? 0 : u, i.removeClass("is-finished"), setTimeout(function () {
                t.play(u)
            })) : (i.addClass("is-playing"), t.conf.playlist.length > 1 && t.one("resume.fromfirst", function () {
                return t.play(0), !1
            }))
        }), o = !1, t.conf.playlist.length && (o = !0, u = i.find(".fp-playlist"), u.length || (u = n('<div class="fp-playlist"><\/div>'), h = n(".fp-next,.fp-prev", i).eq(0).before(u), h.length || n("video", i).after(u)), u.empty(), n.each(t.conf.playlist, function (t, i) {
            var f, r;
            if ("string" == typeof i) f = i;
            else for (r in i[0]) if (i[0].hasOwnProperty(r)) {
                f = i[0][r];
                break
            }
            u.append(n("<a />").attr({
                href: f,
                "data-index": t
            }))
        })), e().length && (o || (t.conf.playlist = [], e().each(function () {
            var i = n(this).attr("href");
            n(this).attr("data-index", t.conf.playlist.length), t.conf.playlist.push(i)
        })), i.on("click", r.query, function (i) {
            i.preventDefault();
            var f = n(i.target).closest(r.query),
                u = Number(f.attr("data-index")); - 1 != u && t.play(u)
        }), s = e().filter("[data-cuepoints]").length, t.bind("load", function (r, u, e) {
            var l = c().removeClass(f),
                v = l.attr("data-index"),
                o = e.index = t.video.index || 0,
                a = n('a[data-index="' + o + '"]', i).addClass(f),
                h = o == t.conf.playlist.length - 1;
            i.removeClass("video" + v).addClass("video" + o).toggleClass("last-video", h), e.index = u.video.index = o, e.is_last = u.video.is_last = h, s && (t.cuepoints = a.data("cuepoints"))
        }).bind("unload.pl", function () {
            c().toggleClass(f)
        })), t.conf.playlist.length && (t.conf.loop = !1)
    }), d = / ?cue\d+ ?/, flowplayer(function (t, i) {
        function u(n) {
            i[0].className = i[0].className.replace(d, " "), n >= 0 && i.addClass("cue" + n)
        }
        var r = 0;
        t.cuepoints = t.conf.cuepoints || [], t.bind("progress", function (n, f, e) {
            if (r && .015 > e - r) return r = e;
            r = e;
            for (var o, h = t.cuepoints || [], s = 0; s < h.length; s++) o = h[s], isNaN(o) || (o = {
                time: o
            }), o.time < 0 && (o.time = t.video.duration + o.time), o.index = s, Math.abs(o.time - e) < .125 * t.currentSpeed && (u(s), i.trigger("cuepoint", [t, o]))
        }).bind("unload seek", u), t.conf.generate_cuepoints && t.bind("load", function () {
            n(".fp-cuepoint", i).remove()
        }).bind("ready", function () {
            var f = t.cuepoints || [],
                r = t.video.duration,
                u = n(".fp-timeline", i).css("overflow", "visible");
            n.each(f, function (i, f) {
                var e = f.time || f,
                    o;
                0 > e && (e = r + f), o = n("<a/>").addClass("fp-cuepoint fp-cuepoint" + i).css("left", 100 * (e / r) + "%"), o.appendTo(u).mousedown(function () {
                    return t.seek(e), !1
                })
            })
        })
    }), flowplayer(function (t, i) {
        function s(n) {
            var t = n.split(":");
            return 2 == t.length && t.unshift(0), 3600 * t[0] + 60 * t[1] + parseFloat(t[2].replace(",", "."))
        }
        var e = n("track", i),
            o = t.conf,
            h, u, r, f;
        flowplayer.support.subtitles && (t.subtitles = e.length && e[0].track, o.nativesubtitles && "html5" == o.engine) || (e.remove(), h = /^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/, t.subtitles = [], u = e.attr("src"), u && (n.get(u, function (i) {
            for (var c, e, l, o, r = 0, u = i.split("\n"), a = u.length, f = {}; a > r; r++) if (e = h.exec(u[r])) {
                for (c = u[r - 1], l = "<p>" + u[++r] + "<\/p><br/>"; n.trim(u[++r]) && r < u.length;) l += "<p>" + u[r] + "<\/p><br/>";
                f = {
                    title: c,
                    startTime: s(e[1]),
                    endTime: s(e[2] || e[3]),
                    text: l
                }, o = {
                    time: f.startTime,
                    subtitle: f
                }, t.subtitles.push(f), t.cuepoints.push(o), t.cuepoints.push({
                    time: f.endTime,
                    subtitleEnd: c
                }), 0 === f.startTime && t.trigger("cuepoint", o)
            }
        }).fail(function () {
            return t.trigger("error", {
                code: 8,
                url: u
            }), !1
        }), f = n("<div class='fp-subtitle'/>", i).appendTo(i), t.bind("cuepoint", function (n, t, i) {
            i.subtitle ? (r = i.index, f.html(i.subtitle.text).addClass("fp-active")) : i.subtitleEnd && (f.removeClass("fp-active"), r = i.index)
        }).bind("seek", function (i, u, e) {
            r && t.cuepoints[r] && t.cuepoints[r].time > e && (f.removeClass("fp-active"), r = null), n.each(t.cuepoints || [], function (n, i) {
                var u = i.subtitle;
                u && r != i.index ? e >= i.time && (!u.endTime || e <= u.endTime) && t.trigger("cuepoint", i) : i.subtitleEnd && e >= i.time && i.index == r + 1 && t.trigger("cuepoint", i)
            })
        })))
    }), flowplayer(function (t, i) {
        function f() {
            if (r && "undefined" != typeof _gat) {
                var u = _gat._getTracker(e),
                    n = t.video;
                u._setAllowLinker(!0), u._trackEvent("Video / Seconds played", t.engine + "/" + n.type, i.attr("title") || n.src.split("/").slice(-1)[0].replace(o, ""), Math.round(r / 1e3)), r = 0
            }
        }
        var e = t.conf.analytics,
            r = 0,
            u = 0;
        e && ("undefined" == typeof _gat && n.getScript("//google-analytics.com/ga.js"), t.bind("load unload", f).bind("progress", function () {
            t.seeking || (r += u ? +new Date - u : 0, u = +new Date)
        }).bind("pause", function () {
            u = 0
        }), n(window).unload(f))
    }), c = /IEMobile/.test(u), (flowplayer.support.touch || c) && flowplayer(function (i, r) {
        var e = /Android/.test(u) && !/Firefox/.test(u) && !/Opera/.test(u),
            s = /Silk/.test(u),
            o, f;
        e && (i.conf.videoTypePreference = "mp4", o = i.load, i.load = function () {
            var n = o.apply(i, arguments);
            return i.trigger("ready", i, i.video), n
        }), flowplayer.support.volume || r.addClass("no-volume no-mute"), r.addClass("is-touch"), r.find(".fp-timeline").data("api").disableAnimation(), f = !1, r.bind("touchmove", function () {
            f = !0
        }).bind("touchend click", function () {
            return f ? (f = !1, void 0) : i.playing && !r.hasClass("is-mouseover") ? (r.addClass("is-mouseover").removeClass("is-mouseout"), !1) : (i.paused && r.hasClass("is-mouseout") && i.toggle(), i.paused && c && n("video", r)[0].play(), void 0)
        }), i.conf.native_fullscreen && (n.browser.webkit || n.browser.safari) && (i.fullscreen = function () {
            var t = n("video", r);
            t[0].webkitEnterFullScreen(), t.one("webkitendfullscreen", function () {
                t.prop("controls", !0).prop("controls", !1)
            })
        }), (e || s) && i.bind("ready", function () {
            var u = n("video", r);
            u.one("canplay", function () {
                u[0].play()
            }), u[0].play(), i.bind("progress.dur", function () {
                var f = u[0].duration;
                1 !== f && (i.video.duration = f, n(".fp-duration", r).html(t(f)), i.unbind("progress.dur"))
            })
        })
    }), flowplayer(function (t, i) {
        if (t.conf.embed !== !1) {
            var r = t.conf,
                f = n(".fp-ui", i),
                e = n("<a/>", {
                    "class": "fp-embed",
                    title: "Copy to your site"
                }).appendTo(f),
                o = n("<div/>", {
                    "class": "fp-embed-code"
                }).append("<label>Paste this HTML code on your site to embed.<\/label><textarea/>").appendTo(f),
                u = n("textarea", o);
            t.embedCode = function () {
                var e = t.video,
                    h = e.width || i.width(),
                    s = e.height || i.height(),
                    f = n("<div/>", {
                        "class": "flowplayer",
                        css: {
                            width: h,
                            height: s
                        }
                    }),
                    c = n("<video/>").appendTo(f),
                    u, o;
                return n.each(["origin", "analytics", "logo", "key", "rtmp"], function (n, t) {
                    r[t] && f.attr("data-" + t, r[t])
                }), n.each(e.sources, function (t, i) {
                    c.append(n("<source/>", {
                        type: "video/" + i.type,
                        src: i.src
                    }))
                }), u = {
                    src: "//embed.flowplayer.org/5.4.3/embed.min.js"
                }, n.isPlainObject(r.embed) && (u["data-swf"] = r.embed.swf, u["data-library"] = r.embed.library, u.src = r.embed.script || u.src, r.embed.skin && (u["data-skin"] = r.embed.skin)), o = n("<foo/>", u).append(f), n("<p/>").append(o).html().replace(/<(\/?)foo/g, "<$1script")
            }, i.fptip(".fp-embed", "is-embedding"), u.click(function () {
                this.select()
            }), e.click(function () {
                u.text(t.embedCode()), u[0].focus(), u[0].select()
            })
        }
    }), n.fn.fptip = function (t, i) {
        return this.each(function () {
            function u() {
                r.removeClass(i), n(document).unbind(".st")
            }
            var r = n(this);
            n(t || "a", this).click(function (t) {
                t.preventDefault(), r.toggleClass(i), r.hasClass(i) && n(document).bind("keydown.st", function (n) {
                    27 == n.which && u()
                }).bind("click.st", function (t) {
                    n(t.target).parents("." + i).length || u()
                })
            })
        })
    }
}(jQuery), flowplayer(function (n, t) {
    function s(n) {
        var t = f("<a/>")[0];
        return t.href = n, t.hostname
    }
    var f = jQuery,
        i = n.conf,
        r = i.swf.indexOf("flowplayer.org") && i.e && t.data("origin"),
        o = r ? s(r) : location.hostname,
        u = i.key,
        e;
    ("file:" == location.protocol && (o = "localhost"), n.load.ed = 1, i.hostname = o, i.origin = r || location.href, r && t.addClass("is-embedded"), "string" == typeof u && (u = u.split(/,\s*/)), u && "function" == typeof key_check && key_check(u, o)) ? i.logo && t.append(f("<a>", {
        "class": "fp-logo",
        href: r
    }).append(f("<img/>", {
        src: i.logo
    }))) : (e = f("<a/>").attr("href", "http://flowplayer.org").appendTo(t), f(".fp-controls", t), n.bind("pause resume finish unload", function (n, t) {
        var i = t.video.src ? t.video.src.indexOf("://my.flowplayer.org") : -1;
        /pause|resume/.test(n.type) && "flash" != t.engine && 4 != i && 5 != i ? (e.show().css({
            position: "absolute",
            left: 16,
            bottom: 36,
            zIndex: 99999,
            width: 100,
            height: 20,
            backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")"
        }), t.load.ed = e.is(":visible"), t.load.ed || t.pause()) : e.hide()
    }))
}), eval(function (n, t, i, r, u, f) {
    if (u = function (n) {
        return (n < t ? "" : u(parseInt(n / t))) + ((n = n % t) > 35 ? String.fromCharCode(n + 29) : n.toString(36))
    }, !"".replace(/^/, String)) {
        while (i--) f[u(i)] = r[i] || u(i);
        r = [function (n) {
            return f[n]
        }], u = function () {
            return "\\w+"
        }, i = 1
    }
    while (i--) r[i] && (n = n.replace(new RegExp("\\b" + u(i) + "\\b", "g"), r[i]));
    return n
}('9 1a=2Y;9 2M=20;9 5f=1;9 7N=1;9 2q=1a+2M;9 1M;9 3I;9 8S=0;9 1L=9H;9 6e;9 6f=50;9 2R=9C;9 1X=9F;9 2g=2Y;9 7i=9B;9 5t=C;9 2f=C;9 3a=R;9 3f=-1;9 3q=C;9 9T=C;9 5e=C;9 2T=R;9 7G=R;9 4i=C;9 3b=R;9 5D=C;9 7n=-1;9 5T=R;9 4m=-1;9 9P=1;9 9O=3;9 4Z=C;9 47=-1;9 5p=R;9 1J=R;9 2A=-1;9 4d=-1;9 8j=9S;9 6R=65.66.8i().6a(\'9M\')>-1&&65.66.8i().6a(\'9K\')>-1;9 1V=\'9I\';9 4j=\'16\';9 1z=1V;9 1I=R;9 9R=C;9 4y=w;9 36=C;9 5P=-1;9 6O=C;9 8u=-1;9 2p=R;9 49=[];$(7X);$(3w).9D(n(){j(36){E}6l();j(9E){j(!3i()||$.27(\'5V\')!=\'w\'){$(".9p").9G()}}6z()});n 6l(){j(2o.19<20){j(!3o){3K($(2e).2D())}}}n 8b(){j(5T){5T()}z{2H(w)}4m=-1;6G()}n 7X(){$.aO.aN({aM:n(5o){9 d=1O 2j(2k(5o.44(6,-2)));E 7V(d)},aP:n(5o){9 d=1O 2j(2k(5o.44(6,-2)));E 3u(d,"2l-m-d 41:2m:1Z")},aQ:n(6g){9 V=14+6g.x*5g;9 N=14+6g.y*5g;E"V:"+V+"2X; N:"+N+"2X; "},aS:n(5l){j(aR&&5l.6a("aL.aK")>-1){E"1A://4t.4a/O/9x?I="+5l}E 5l}});j(36){E}4y=w;j($.27(\'1z\')!=R||1z==1V){$(".3e .1r").1s("1x");9 1y=$.27(\'1z\');j(1y==R){1y=1z}j(1y==1V){4K(1y);$(".3e .aE").1m("1x")}z j(1y==4j){4K(1y);$(".3e .94").1m("1x")}}j($.27(\'2f\')==\'w\'&&2k($.27(\'1a\'))>=2g){2f=w;9 bw=2k($.27(\'1a\'));$(".2F .1r").1s("1x");j(bw==2g){1Q({bw:2g,U:C,1w:w,1W:w});$(".2F .7y").1m("1x")}z j(bw==2R){1Q({bw:2R,U:C,1w:w,1W:w});$(".2F .6y").1m("1x")}z j(bw==1X){1Q({bw:1X,U:C,1w:w,1W:w});$(".2F .7u").1m("1x");71()}z{2f=C;$(".2F .7E").1m("1x")}}z j(/aD|aC|aF|aG|aJ|aI/i.7S(65.66)){2f=w;$(".2F .1r").1s("1x");1Q({bw:2R,U:C,1w:w,1W:w});$(".2F .6y").1m("1x")}4z($(\'3h\'));48($(".aH"));9 2W=$(".q");4V(2W);2W.r(".7F").2d(n(){$(Q).G({2i:1.0})},n(){$(Q).G({2i:0.6})}).1q(n(){9 F=25($(Q).3S(".q").J("B"));2P(F)});$(".aU").11();2H(C);6E();$(\'.3X\').2d(n(){j(!$(Q).4v(\'aV\')){$(3w).b8(\'8l\',n(e){e.92()})}},n(){$(3w).3E(\'8l\')});2b(n(){$(2e).8d(n(){j(4m>0){2N(4m)}X.W("8d");4m=2b(8b,82)})},5d);7B();$(".2F .1r").1q(n(){$(".2F .1r").1s("1x");$(Q).1m("1x")});$(".3e .1r").1q(n(){$(".3e .1r").1s("1x");$(Q).1m("1x")});$(\'.7y\').1q(n(){1Q({bw:2g,U:C,1w:w,1W:w})});$(\'.6y\').1q(n(){1Q({bw:2R,U:C,1w:w,1W:w})});$(\'.7u\').1q(n(){1Q({bw:1X,U:C,1w:w,1W:w});71()});$(\'.7E\').1q(n(){2f=C;$.27(\'2f\',\'C\',{4p:30,4n:\'/\'});2H(w)});4y=C}n 7B(){$("3h").91(n(e){j(3q&&!4Z){j(e.7K==37){7w();$("3h").2w()}z j(e.7K==39){7t();$("3h").2w()}}});9g()}n 6z(){}n 6E(){9 4c=$(".4Q");j(46||4S){9 6w=46?1e.b7:1e.b6;4c.Y(6w).1s("1r-9c").1m("1r-17");4c.2d(n(){$(Q).Y(1e.b9).1s("1r-17").1m("1r-9q")},n(){$(Q).Y(6w).1s("1r-9q").1m("1r-17")})}z{4c.Y(1e.ba).1s("1r-17").1m("1r-9c");4c.3E("2d")}}n 2L(B){E $("#q-"+B)}n 3i(){E 40(3t)!="3n"&&3t!=R}n 5Y(){j(3i()){E 3t}E R}n 5V(){$.27(\'5V\',\'w\',{4p:30,4n:\'/\'});$(".9p").aZ()}n 5K(){$(".3k").3E(\'2d\').2d(n(){$(Q).r(".5S").1j();j(5e){$(Q).r(".3N").1j()}z{5Q=5Y();j(5Q&&5Q.1l==$(Q).J("b1")){$(Q).r(".3N").1j()}}},n(){$(Q).r(".5S").11();$(Q).r(".3N").11()});$(".5S").3E(\'1q\').1q(n(){9 8V="@"+$(Q).4G().r(".a5").Y()+" ";$(".1C").1K($(".1C").1K()+8V);$(\'.1C\').2w().7A()});$(".3N").3E(\'1q\').1q(n(){3N(R,$(Q).3S(".3k").J("3j"))})}n 2P(F,8C){j(!F)E;3a=F.1l;3f=8z(F.1l);j(!36&&2o.19-3f<10&&!5t){3K(0)}9 72,7g;j(!36){72=4f(3f-1);7g=4f(3f+1)}5e=C;9 5J=5Y();j(5J!=R&&5J.1l==F.3D.1l){5e=w}$(\'.4L\').9b();$($(\'#a8\').5w(F)).3L($(\'.4L\'));j(6R){}j(!36){$("#1D").3X({a9:w,ac:w,1j:w}).ab(\'aa\',n(){j(6R){$(".1T").G("a4","6I")}$(".4x").4I().8y();3q=C})}j(F.1E){76(F.1E,"a3")}9 q=2L(F.1l);9 1k=$(".4L").98(".1D");4z(1k);j(q.J("1Y")=="w"){1k.r(".2r").G("2i","0.7");1k.r(".2r .Y").Y(1e.6o);1k.r(".2r .3r").Y(q.r(".4o").Y())}1k.r(".4H 9X").52(n(e){j(e.3O==1){9 3P=3a;j(1J&&1J==3P){j(2A>0){2N(2A);2A=-1}2E(R,w);1J=R}z{1J=3P;2A=2b(n(){1J=R},32)}E C}});9 3R=[\'9W\',\'8L\'];1F(9 i=0;i<3R.19;i++){9 3g=3R[i];1k.r("."+3g).42(n(){48($(Q))})}n 6P(){9 4N=$(".9A").1d()-($(".9u").1N().N-$(".9A").1N().N)-$(".9u").1d();4N-=10;j(F.1E){4N-=$(".9Y").1d()}$(\'.2Q\').G({"1d":4N}).a0();$(\'.2Q\').u(\'5v\').8K(2u,w);5K()}6P();$(\'.1C\').91(n(2x){j(2x.3O==13){2x.92();6L();$(\'.1C\').93()}}).2w(n(){j(47>0){2N(47);47=-1}9 2U=$("#1D").1N();9 6S=$(\'.1C\').1N();$(".3B").G({N:6S.N-2U.N-90,V:6S.V-$(".3B").1c()-10});$(".3B").1j();4Z=w}).93(n(){47=2b(n(){$(".3B").11()},5d);4Z=C});j(F.1o.3r>F.1o.u.19){$(".4W").1j();$(".4W").1q(n(){$(".4W").11();$(".7q").1j();$.1R({I:1G+"/O/9i",u:{B:3a},29:"ad",17:n(u){$(".7q").11();$(".2Q .7a").9b();$($(\'#96\').5w(u)).3L($(\'.2Q .7a\'));6P();$(\'.2Q\').u(\'5v\').8M();F.1o.u=u},1b:n(u){X.W(\'1b:5E O/9i:\'+u);$(".7q").11()}})})}z{$(".4W").11()}$(\'.ae\').1q(6L);7k(F,C);$(".4H").2d(n(){$(Q).r(".8n").1j();$(Q).r(".9d").1j();j(F.9j.19>0){7h($(Q))}},n(){$(Q).r(".8n").11();$(Q).r(".9d").11();j(F.9j.19>0){7o($(Q))}});j(!8C){74(72);6X(7g)}z{74(R);6X(R)}n 7P(){$(".au .43").1q(n(){9 7D=5r.at[$(Q).J("85")];$(".1C").1K($(".1C").1K()+7D);$(\'.1C\').2w().7A()});$("#av a").1q(n(){$(\'.1C\').2w()})}j(6O==C){1F(9 c 7d 5r.8f){9 6J=5r.8f[c];9 1p="";1F(9 i 7d 6J){9 43=6J[i];9 77=43[0];9 3g=77;j(43[2]=="8g"){3g+=" 8g"}1p+=\'<2z aw="43 43\'+3g+\'" 85="\'+77+\'"><\/2z>\'}$("#"+c).az($(1p))}6O=w;7P()}$(\'#al a:aW\').ak(\'1j\');$(".3B").11();$(".3B").1q(n(){$(\'.1C\').2w()});6G();1k.r(\'.2r\').4e({7l:w});1k.r(\'.ap\').4e({7l:w});1k.r(".aj").2d(n(){7h(1k)},n(){7o(1k)});j(F.ai){$(".4x").4I();$(\'.4x .af-ag\').ah();$(\'.4x a\').42(n(){$("a[5h=\'1A://4I.aq\']").G({2i:0.ar})})}3q=w}n 7h(5k){j(3x>0){2N(3x)}5k.r(".7O .4e").42(n(){9 3d=$(Q);9 V=14+83(3d.J("ax"))*5g-3d.1c()*0.5;9 N=14+83(3d.J("ay"))*5g;3d.G({V:V,N:N});3d.4w("4F")})}9 3x=-1;n 7o(5k){j(3x>0){2N(3x)}3x=2b(n(){5k.r(".7O .4e").4b()},32)}n 6G(){j($(2e).1d()>=8j){$("#1D.3X").G({N:34})}z{$("#1D.3X").G({N:0})}}n 74(F){j(!F){$(".5z").11();E}z{$(".5z").1j()}$(".5z .8m").J("3W",F.3F.7r);$(".5z .7H").J("3W",F.3F.6q)}n 6X(F){j(!F){$(".57").11();E}z{$(".57").1j()}$(".57 .8m").J("3W",F.3F.7r);$(".57 .7H").J("3W",F.3F.6q)}n 7w(){9 F=4f(3f-1);j(F){2P(F);79(F.1l)}}n 7t(){9 F=4f(3f+1);j(F){2P(F);79(F.1l)}}n 79(B){9 4X=$("#q-"+B).1N().N;9 3I=$(2e).1d();$("1p:3V(:4D),3h:3V(:4D)").U({2D:4X-35},32)}n as(1v){9 4X=1v.1N().N;$("1p:3V(:4D),3h:3V(:4D)").U({2D:4X-34},32)}n 9g(){}n 6L(){j(!3i()){5n();E}9 2J=$.a1($(".1C").1K());j(2J==""){$(".1C").2w();E}9 3k={a2:"\\/2j("+1O 2j().5b()+")\\/",Y:2J,9Z:{6t:3t.6t,97:3t.97,1l:3t.1l}};9 2V=$($(\'#96\').5w(3k));2V.G("2i",0.5);2V.3L($(".2Q .7a"));48(2V.r(\'.8L\'));4z(2V);$(\'.2Q\').u(\'5v\').8M();$(\'.2Q\').u(\'5v\').8K(2u,w);$(".1C").1K("");$.1R({I:1G+"/O/5U",u:{B:3a,2J:2J},29:"2h",17:n(u){X.W(\'17:1i O/5U:\'+u);2V.G("2i",1.0).J("1l","8T"+u.1l);2V.J("3j",u.1l);3k.1l=u.1l;9 1o=25(3a).1o;1o.u.3M(3k);1o.3r+=1;5K()},1b:n(u){X.W(\'1b:1i O/5U:\'+u);2V.5B()}})}n 3N(B,3j){j(8w(1e.a6)){j(!B){B=3a}$("#8T"+3j).5B();$.1R({I:1G+"/O/5M",u:{B:B,3j:3j},29:"2h",17:n(u){X.W(\'17:1i O/5M:\'+u);9 1o=25(B).1o;9 5y=-1;1F(9 i=0;i<1o.u.19;i++){j(1o.u[i].1l==3j){5y=i}}j(5y>=0){1o.u.a7(5y,1);1o.3r-=1}},1b:n(u){X.W(\'1b:1i O/5M:\'+u)}})}}n 6m(B){9 k=0;7b(k==0){k=1f.1P(1f.aA()*10)}9 a=1f.1P(1f.W(k)/1f.W(2));9 b=k-1f.aB(2,a);9 3l=[];3l.3M(a.2y());3l.3M(b.2y());1F(9 i=0;i<B.19;i++){9 v=B[i];j(!84(v)){9 f=1f.1P(v/k);9 s=v%k;3l.3M(f.2y());3l.3M(s.2y())}z{3l.3M(v)}}E 3l.b2("")}n b3(){j(8w(1e.b0)){9 B=3a;9 q=2L(B);$.1R({I:1G+"/O/5O",u:{B:B},29:"2h",17:n(u){X.W(\'17:1i O/5O:\'+u)},1b:n(u){X.W(\'1b:1i O/5O:\'+u)}});8Z();q.4b()}}n 8Z(){$(".4x").4I().8y();$("#1D").3X(\'11\');3q=C}n 8z(B){j(36){E 0}1F(9 i=0;i<2o.19;i++){9 F=2o[i];j(F.1l==B){E i}}E-1}n 25(B){1F(9 i=0;i<2o.19;i++){9 F=2o[i];j(F.1l==B){E F}}E R}n 4f(55){j(55<0){E R}j(55>2o.19-1){E R}E 2o[55]}n 9U(5L){j(!3i()){5n();E}$(".4Q").J("4R","4R").3E("2d");9 9n=(46||4S)?"aX":"6r";$.1R({I:1G+"/O/"+9n,u:{5L:5L},29:"2h",17:n(u){$(".4Q").6b("4R");j(u.4P=="aY"){46=w}z{46=C}j(u.4P=="b4"){4S=w}z{4S=C}6E();X.W(\'17:1i O/(9k)6r:\'+u.4P)},1b:n(u){$(".4Q").6b("4R");X.W(\'17:1i O/(9k)6r:\'+u.4P)}})}n 2E(B,6s){j(!3i()){5n();E}j(B){9 q=2L(B);j(q.J("1Y")=="w"&&!6s){45(q,C)}z{45(q,w)}}z{9 1k=$(".4L").98(".1D");9 B=1k.J("B");9 q=2L(B);j(q.J("1Y")=="w"&&!6s){1k.r(".2r .Y").Y(1e.7L);1k.r(".2r").G("2i","1.0");7c(1k.r(".2r .3r"));45(q,C)}z{1k.r(".2r .Y").Y(1e.6o);1k.r(".2r").G("2i","0.5");j(q.J("1Y")!="w"){7j(1k.r(".2r .3r"))}45(q,w)}}}n 45(q,2E){9 B=q.J("B");9 F=25(B);F.6V=2E;j(2E&&q.J("1Y")!="w"){$.1R({I:1G+"/O/6p",u:{B:6m(B)},29:"2h",17:n(u){X.W(\'17:1i O/6p:\'+u)},1b:n(u){X.W(\'1b:1i O/6p:\'+u)}});7j(q.r(".4o"))}z j(!2E&&q.J("1Y")=="w"){$.1R({I:1G+"/O/6n",u:{B:6m(B)},29:"2h",17:n(u){X.W(\'17:1i O/6n:\'+u)},1b:n(u){X.W(\'1b:1i O/6n:\'+u)}});7c(q.r(".4o"))}70(q,2E)}n 70(q,1Y){j(1Y){q.r(".4B").1m("1Y");q.r(".4B 2z").Y(1e.6o);q.r(".4o").G("8a","I(\'1A://4t.4a/89/O/b5.88\') 7M-8k");q.J("1Y","w");j(!3o&&!4y){j(!3q){9 bb=$(".1T").1N();9 3v=q.1N();$(".3C").G({N:3v.N+q.r(".3D.bc").1d()+q.r(".2I").1d()/2.0,V:3v.V+q.1c()/2.0});$(".3C").4w("4F");2b(n(){$(".3C").4b()},7J)}z{9 2U=$("#1D").1N();$(".3C").G({N:2U.N+$("#1D").r(".4H").1d()/2.0-20,V:2U.V+$("#1D").r(".4H").1c()/2.0+20});$(".3C").4w("4F");2b(n(){$(".3C").4b()},7J)}}}z{q.r(".4B").1s("1Y");q.r(".4B 2z").Y(1e.7L);q.r(".4o").G("8a","I(\'"+1G+"/89/O/2E.88\') 7M-8k");q.J("1Y","")}}n 3k(B){j(!3i()){5n();E}9 F=25(B);2P(F)}n aT(B){9 q=2L(B);j(q.J("61")=="w"){4O(q,C)}z{4O(q,w)}}n 4O(q,69,4E){9 B=q.J("B");j(69){q.r(".7W 2z").Y("bd");q.J("61","w")}z{q.r(".7W 2z").Y("9Q");q.J("61","")}j(!4E){j(69){$.1R({I:1G+"/O/6u",u:{B:B},29:"2h",17:n(u){X.W(\'17:1i O/6u:\'+u)},1b:n(u){X.W(\'1b:1i O/6u:\'+u)}})}z{$.1R({I:1G+"/O/5R",u:{B:B},29:"2h",17:n(u){X.W(\'17:1i O/5R:\'+u)},1b:n(u){X.W(\'1b:1i O/5R:\'+u)}})}}}n 9J(B){9 q=2L(B);j(q.J("73")=="w"){4M(q,C)}z{4M(q,w)}}n 4M(q,11,4E){9 B=q.J("B");j(11){q.r(".8q 2z").Y("9N");q.J("73","w")}z{q.r(".8q 2z").Y("9L");q.J("73","")}j(!4E){j(11){$.1R({I:1G+"/O/6N",u:{B:B},29:"2h",17:n(u){X.W(\'17:1i O/6N:\'+u)},1b:n(u){X.W(\'1b:1i O/6N:\'+u)}})}z{$.1R({I:1G+"/O/7f",u:{B:B},29:"2h",17:n(u){X.W(\'17:1i O/7f:\'+u)},1b:n(u){X.W(\'1b:1i O/7f:\'+u)}})}}}9 6T=C;9 9V=C;9 6H=R;n bY(a){9 ao=$(a);6H=ao;9 1u=$(".1u");j(!3q){9 q=ao.3S(\'.q\');9 3z=ao.1N();9 3v=q.1N();1u.5B().3L(q);1u.G({6U:"7Z",V:3z.V-3v.V-38,N:3z.N-3v.N+33})}z{9 1D=$("#1D");9 3z=ao.1N();9 2U=1D.1N();1u.5B().3L(1D);1u.G({6U:"7Z",V:3z.V-2U.V-23,N:3z.N-2U.N+33})}1u.1j();n 78(8h,4G){9 8c=4G.5E(0);9 4r=8h;7b(4r.19>0){j(4r.5E(0)==8c){E w}4r=4r.4G()}E C}j(!6T){9 1u=$(".1u");1u.r("eB a").9a(n(){1u.11()});$(3w).52(n(2x){9 1u=$(".1u");j(1u.8x(":6I")){9 3y=$(2x.3y);j(!78(3y,$(".1u"))&&!78(3y,6H)){1u.11()}}});6T=w}}n 4V(16,1y){j(!1y)1y=1z;j(1y==1V){16.r(".1E").11();16.r(".1o").11()}z j(1y==\'16\'){16.r(".1E").1j();16.r(".1o").1j()}}n 4K(1y){4V($(".q"),1y);j(1y==1V){$(".1T").1m("1V")}z{$(".1T").1s("1V")}1z=1y;$.27(\'1z\',1z,{4p:30,4n:\'/\'});2p=R;j(!4y){2H(w,C)}}n 71(){4K(4j);$(".3e .1r").1s("1x");$(".3e .94").1m("1x")}n eA(el){}n 2H(U,2B){j($(\'.q\').19>6f){U=C}j(2B){U=w}1M=$(2e).1c();3I=$(2e).1d();9 7m=2k($("3h").G("9z"));j(1M<7m){1M=7m}j(7n>0){1M=7n}j(!2B&&!2f){j(1M>7i&&1a!=2R){1Q({bw:2R,U:C,1w:w});E}z j(1M<=7i&&1a!=2g){1Q({bw:2g,U:C,1w:w});E}}j(1a==2g){$(".1T").1m("8H")}z{$(".1T").1s("8H")}j(1a==1X){$(".1T").1m("8R")}z{$(".1T").1s("8R")}9 5N=1M-2*8S;9 2a=1f.1P(5N/2q);j((2a+1)*2q-2M<=5N){2a+=1}j(5P>0){2a=5P}j(1a==1X){2a=1}8u=2a;9 8r=2a*2q-2M;9 59=1f.1P((1M-8r)/2);9 3Z=59;j(1a==1X){3Z=1f.1P((1M-6c)/2)}j(3Z<0){3Z=0}$(".do").G({d7:3Z});$(".d6").G({df:3Z});9 1n=R;9 5W=0;j($(".1T").G("9m")!=R){5W=2k($(".1T").G("9m"))}j(!2B){1n=[];1F(9 i=0;i<2a;i++){1n[i]=5W}}z{1n=6e}9 c=0;9 16=R;j(!2B){16=$(".q")}z{16=$(".q:3V([4Y])")}9 2S=0;j(!2B&&$(".4s").19>0){9 3Q=2k($(".4s").G("9z"));9 68=2k($(".4s").G("1d"));9 6v=1f.de(3Q/2q);9 6x=0;9 2Z=6v*2q-2M;j(2Z<3Q){2Z=3Q}j(1z==4j){9 6D=2a-6v;9 4u=6D*2q+59;j(2Z<3Q){4u-=(3Q-2Z)}$(".4s").G({V:4u,N:6x,1c:2Z});1F(9 c=6D;c<2a;c++){1n[c]+=(68+18.75+5f)}}z{9 4u=(1M-2Z)/2.0;$(".4s").G({V:4u,N:6x,1c:2Z});1F(9 c=0;c<2a;c++){1n[c]+=(68+18.75+5f)}}}j(1z==1V&&1I!=R){1I.r(".1E").11();1I.r(".1o").11();1I.G("4k",2u);1I.1s("6W")}9 7T=$(".5i").19>0;j(2p==R||!2B){2p=!7T||1z==4j||1a==1X}X.W("2p: "+2p);16.42(n(){9 b=$(Q);9 62=b.4v("5i");j(62&&1a==1X){1Q({q:b,bw:2g,1w:C});b.U({N:14,V:(1M-1a)/2-2g-2M},1L);E}j(b.4v("8J")){E}j(2B){1Q({bw:1a,q:b,1w:C})}9 3U=0;j(!2p&&!62){3U=1}9 c=7Y(1n,3U);9 V=c*2q+59;9 N=1n[c];1n[c]+=(b.1d()+5f);j(1z==1V){1n[c]+=7N}j(1n[c]>2S){2S=1n[c]}j(c!=0&&!2p&&1n[c]>1n[0]){1n[0]=1n[c];2p=w}j(U){j(!2B){b.U({V:V,N:N},1L)}z{b.G({V:V,N:N+6c});b.U({V:V,N:N},1L)}}z{b.G({V:V,N:N})}j(1a==1X){9 3s=b.r(".3s");j(3s.19>0&&3s.J("6j")){3s.J("3W",3s.J("6j"));3s.6b("6j")}}c++;8I($(Q))});j(2S<1n[0]){2S=1n[0]}$(".6d").G({V:(1M-$(".6d").1c())/2.0,N:2S});2S+=$(".6d").1d()+20;$(".1T").G("1d",2S);6e=1n;X.W("2H dN")}n 7Y(5u,3U){9 3Y=0;j(3U){3Y=3U}1F(9 i=3Y+1;i<5u.19;i++){j(5u[i]<5u[3Y]){3Y=i}}E 3Y}n 1Q(2s){9 bw=2s.bw;9 q=2s.q;9 U=C;9 1w=w;9 1W=C;j(40(2s.U)!="3n"){U=2s.U}j(40(2s.1w)!="3n"){1w=2s.1w}j(40(2s.1W)!="3n"){1W=2s.1W;2f=1W;$.27(\'2f\',2f?\'w\':\'C\',{4p:30,4n:\'/\'});$.27(\'1a\',bw,{4p:30,4n:\'/\'})}j(!q&&bw==1a){E}j(!q){2p=R;j($(\'.q\').19>6f){U=C}9 16=$(".q:3V(.5i)");j(bw!=1X){16=$(".q")}j(U){9 1B={1c:bw};16.U(1B,1L);16.r(".3A").U(1B,1L);9 3G={1c:1B.1c-15};16.r(".3D").U(3G,1L);9 3H=6i+bw-2Y;16.r(".6h, .2J").U({1c:3H},1L);16.r(".3J").U(1B,1L);9 2v=32*14.0/2Y;16.r(".3J").G({1d:2v,64:bw+"2X "+2v+"2X"});9 2t=bw;16.r(".2I .63, .4U").U({1c:2t,1d:2t},1L);1a=bw;2q=1a+2M;j(1w){2b(n(){2H(U)},1L+82)}}z{9 1B={1c:bw};16.G(1B);16.r(".3A").G(1B);9 3G={1c:1B.1c-15};16.r(".3D").G(3G);9 3H=6i+bw-2Y;16.r(".6h, .2J").G({1c:3H});16.r(".3J").G(1B);9 2v=32*14.0/2Y;16.r(".3J").G({1d:2v,64:bw+"2X "+2v+"2X"});9 2t=bw;16.r(".2I .63, .4U").G({1c:2t,1d:2t});1a=bw;2q=1a+2M;2H(U)}}z{9 1B={1c:bw};q.G(1B);9 3G={1c:1B.1c-15};q.r(".3A").G(1B);q.r(".3D").G(3G);9 3H=6i+bw-2Y;q.r(".6h, .2J").G({1c:3H});q.r(".3J").G(1B);9 2v=32*14.0/2Y;q.r(".3J").G({1d:2v,64:bw+"2X "+2v+"2X"});9 2t=bw;q.r(".2I .63, .4U").G({1c:2t,1d:2t})}}9 3o=C;9 4l=-1;$(2e).dB(n(){j(4l>0){2N(4l)}4l=2b(n(){9 2D=$(2e).2D();9 3I=$(2e).1d();9 4h=3.0;j(1a==2g){4h=3.0}z j(1a==2R){4h=5.0}z j(1a==1X){4h=7.0}j(2D>=$(3w).1d()-4h*3I){j(!3o&&!36){3K(2D)}}9 5H=$(".5H");j(2D>3I){5H.4w()}z{5H.4b()}j(49){1F(9 i=0;i<49.19;i++){7z{49[i](2D)}7R(e){X.W("49 "+i+" dJ:"+e)}}}4l=-1},2u)});n 3K(4C){j(5t){E}3o=w;7x();9 5G={3r:24,dg:1O 2j().5b()};5G[6k]=56;j(8e){$.dp(5G,8e)}$.1R({I:1G+"/O/"+dr,u:5G,17:n(31){X.W(\'3K ec:\'+31);j(!31.5q&&!31.u){}z{j(31.5q){56=31.5q[6k];X.W("ee "+6k+" d9:"+56)}u=31.u;j(!u||!u.19||u.19<1||(31.5q&&!56)){5t=w}j(u&&u.19>0){7s(u,4C)}}5Z();3o=C;6l()},1b:n(u){X.W(\'1b:3K:\'+u);5Z();3o=C}})}n 7s(u,4C,7C){9 2W=$($(\'#e7\').5w(u));4V(2W);4z(2W);2W.r(".7F").2d(n(){$(Q).G({2i:1.0})},n(){$(Q).G({2i:0.6})}).1q(n(){9 F=25($(Q).3S(".q").J("B"));2P(F)});2W.3L($(\'.1T\')).G("N",4C);j(!7C){2o=2o.ed(u)}2H(w,w);6z()}n 7x(){$(".9s").4w("4F").U({9l:10},1L)}n 5Z(){$(".9s").U({9l:-80},1L)}n e4(B){2L(B).r(\'.6K\').1j(\'be\',{ey:\'em\'},5d)}9 ep={5X:"",8s:{"en":"8v","dl":"dk"},9h:w};n 7k(F,9h){9 1h=1e.dj;9 I="";9 2I="";j(F.4J){1h+=F.4J.Y}I="1A://4t.4a/p/"+F.1l;9 2I=F.3F.6q;9 22=1e.dq+F.3D.6t;K.I=51(I);K.1h=51(1h);K.1S=51(2I);K.22=51(22)}9 dh="d8-db";9 K={I:"1A://4t.4a",1h:"95",22:"95: an dc du dH dz",1S:"1A://ef.dD.dE.28/dG.dC"};n 3p(1H){K.1S="1A://4t.4a/O/9x?I="+K.1S;9 I="1A://dw.dx.28/dy/0.8/dP/"+1H+"/dQ?I="+K.I+"&1h="+K.1h+"&22="+K.22;j(1H=="9t"){I="1A://8E.9t.28/dR.8p?s=2u&p[1h]="+K.1h+"&p[I]="+K.I+"&p[5X]="+K.22+"&p[3F][0]="+K.1S}z j(1H=="dO"){I="8Y://dK.1U.28/3p?I="+K.I}z j(1H=="8A"){I="8Y://8A.28/dL/dM?Y="+K.1h+"&I="+K.I+"&&dv="+K.I}z j(1H=="8B"){I="1A://8B.28/da/di/dn/?I="+K.I+"&F="+K.1S+"&22="+K.1h}z j(1H=="8D"){I="1A://8E.8D.28/3p/dm?8o="+K.1S+"&4J="+K.1h+"&dS="+K.I}z j(1H=="dT"){I="1A://v.t.eo.28.cn/3p/3p.8p?1h="+K.1h+"&I="+K.I+"&8o=eq&8s=8v&2I="+K.1S+"&eh="}z j(1H=="8F"){I="1A://ei.8F.28/!1H/3p?1S="+K.1S+"&5h="+K.I+"&7v="+K.1h}z j(1H=="8G"){I="1A://ej.8G.ek.28/er-es/ez/ew?I="+K.I+"&1h="+K.1h+"&et="+K.1S+"&5X="+K.22}z j(1H=="8W"){I="1A://eu.8W.28/ev/3p?eC="+K.I+"&eg="+K.I+"&1h="+K.1h+"&2I="+K.1S+"&22="+K.22}z j(1H=="e0"){9 9e="/e1/e2?I="+K.I;$("#e3").J("3W",9e);$("#dZ").3X("1j");E}2e.8t(I,\'7p\');2e.2w()}n 8I(q){j(!q.J("4Y")&&!q.4v("5i")&&!q.4v("8J")){q.2d(n(){9 1t=$(Q);1t.G("4k",8U);5p=25(1t.J("B"));7k(5p,w);1t.r(".3A").1j();j(1z==1V){4d=2b(n(8X){j(8X==1I){1I.r(".1E").1j();1I.r(".1o").1j();1I.G("4k",8U);1I.r(\'.9v\').1m("6W")}},5d,1t);1I=1t}},n(){9 1t=$(Q);1t.G("4k",2u);5p=R;1t.r(".3A").11();1t.r(".3A .1r-dY").1s("8t");1t.r(".1u").11();j(1t.r(".6K").8x(\':6I\')){1t.r(".6K").11()}j(1z==1V){1t.r(".1E").11();1t.r(".1o").11();1t.G("4k",2u);j(4d>0){2N(4d);4d=-1}1t.r(\'.9v\').1s("6W");1I=R}});9 3T=25(q.J("B"));9 9y=3T.9y.u;j(40(3t)!=\'3n\'){9 6Z=C;j(40(3T.6V)!=\'3n\'){6Z=3T.6V}z{}j(6Z){70(q,w)}}j(3T.dU>0){4O(q,w,w)}j(3T.dV){4M(q,w,w)}q.r(".dW 2z,.dX,.e5").52(n(e){j(e.3O==1){9f($(Q));E C}});q.r(".4U").52(n(e){j(e.3O==1){9 3P=$(Q).3S(".q").J("B");j(1J&&1J==3P){j(2A>0){2N(2A);2A=-1}2E(1J,w);1J=R}z{1J=3P;2A=2b(n(){9 F=25(1J);1J=R;j(F!=R){2P(F)}},32)}E C}}).9a(n(e){j(e.3O==1){E C}}).1q(n(e){j(e.3O==1){E C}});9 3R=[\'4J\',\'2J\'];1F(9 i=0;i<3R.19;i++){9 3g=3R[i];q.r("."+3g).42(n(){48($(Q))})}q.r(\'.eb\').4e({7l:w});q.J("4Y","w")}z{q.J("4Y","w")}}n 9f(1v){9 B=1v.3S(".q").J("B");9 F=25(B);j(F!=R){2P(F)}}n 76(1E,6Y){9 2O=1E.5A;9 3c=1E.5C;9 86=1E.7v;3b=1E;9 87=12;9 58=4;7z{9 2C=1O 1U.26.5c(2O,3c);9 7I={ea:2C,e6:58,e8:w,e9:1U.26.dI.d4,bR:C};7G=6Y;9 2K=1O 1U.26.bQ(3w.bS(6Y),7I);9 bT=1O 1U.26.bU({6U:2C,2K:2K,1h:86});2T=2K;1U.26.2x.5F(2K,"bP",n(){5D=C;j(4i){E}9 2O=3b.5A;9 3c=3b.5C;9 2C=1O 1U.26.5c(2O,3c);2T.6M(2C);2T.6Q(87)});1U.26.2x.5F(2K,"bO",n(){5D=w;j(4i){E}9 2O=3b.5A;9 3c=3b.5C;9 2C=1O 1U.26.5c(2O,3c);2T.6M(2C);2T.6Q(58)});1U.26.2x.5F(2K,\'bK\',n(){4i=w});1U.26.2x.5F(2K,\'bJ\',n(){4i=C;j(5D){9 2O=3b.5A;9 3c=3b.5C;9 2C=1O 1U.26.5c(2O,3c);2T.6M(2C);2T.6Q(58)}})}7R(ex){X.W("76 bL:"+ex)}}n 48(1v){j(1v){9 1p=1v.1p();j(1p){1p=1p.5a(/@([^\\s#@.,:"!?~<>]*)/g,"<a 5h=\'"+bM+"/$1\' 3y=\'7p\'>@$1<\/a>");1p=1p.5a(/#([^\\s#@.,:"!?~<>]*)/g,"<a 5h=\'"+bN+"/$1\' 3y=\'7p\'>#$1<\/a>");1v.1p(1p)}}}n 7j(1v){9 5m=2k(1v.Y());1v.Y(5m+1)}n 7c(1v){9 5m=2k(1v.Y());1v.Y(5m-1)}9 3u=n(){9 8P=/d{1,4}|m{1,4}|5s(?:5s)?|([bV])\\1?|[bW]|"[^"]*"|\'[^\']*\'/g,9w=/\\b(?:[c5][c4]T|(?:c6|c7|c8|c3|c2) (?:d5|bX|bZ) c0|(?:c1|53)(?:[-+]\\d{4})?)\\b/g,9o=/[^-+\\dA-Z]/g,2n=n(1K,5j){1K=4q(1K);5j=5j||2;7b(1K.19<5j)1K="0"+1K;E 1K};E n(1g,2c,3m){9 dF=3u;j(bI.19==1&&bH.7U.2y.bo(1g)=="[bn 4q]"&&!/\\d/.7S(1g)){2c=1g;1g=3n}1g=1g?1O 2j(1g):1O 2j;j(84(1g))bp bq("br 1g");2c=4q(dF.6A[2c]||2c||dF.6A["8N"]);j(2c.44(0,4)=="53:"){2c=2c.44(4);3m=w}9 2G=3m?"bm":"5E",d=1g[2G+"2j"](),D=1g[2G+"bl"](),m=1g[2G+"bg"](),y=1g[2G+"bf"](),H=1g[2G+"bh"](),M=1g[2G+"bi"](),s=1g[2G+"bk"](),L=1g[2G+"bj"](),o=3m?0:1g.bs(),7e={d:d,dd:2n(d),8O:dF.4g.6C[D],8Q:dF.4g.6C[D+7],m:m+1,54:2n(m+1),5I:dF.4g.67[m],6F:dF.4g.67[m+12],5s:4q(y).44(2),2l:y,h:H%12||12,bt:2n(H%12||12),H:H,41:2n(H),M:M,2m:2n(M),s:s,1Z:2n(s),l:2n(L,3),L:2n(L>99?1f.bD(L/10):L),t:H<12?"a":"p",3d:H<12?"am":"bC",T:H<12?"A":"P",5x:H<12?"bE":"bF",Z:3m?"53":(4q(1g).bG(9w)||[""]).bB().5a(9o,""),o:(o>0?"-":"+")+2n(1f.1P(1f.9r(o)/60)*2u+1f.9r(o)%60,4),S:["bA","bv","bu","bx"][d%10>3?0:(d%2u-d%10!=10)*d%10]};E 2c.5a(8P,n($0){E $0 7d 7e?7e[$0]:$0.44(1,$0.19-1)})}}();3u.6A={"8N":"8O 5I dd 2l 41:2m:1Z",by:"m/d/5s",bz:"5I d, 2l",c9:"6F d, 2l",ca:"8Q, 6F d, 2l",cM:"h:2m 5x",cL:"h:2m:1Z 5x",cN:"h:2m:1Z 5x Z",cO:"2l-54-dd",cP:"41:2m:1Z",cK:"2l-54-dd\'T\'41:2m:1Z",cJ:"53:2l-54-dd\'T\'41:2m:1Z\'Z\'"};3u.4g={6C:["cF","cE","cG","cH","cI","cQ","cR","d0","cZ","d1","d2","d3","cY","cX"],67:["cT","cS","cU","cV","7Q","cW","cD","cC","cj","ci","ck","cl","cm","ch","cg","cc","7Q","cb","cd","ce","cf","co","cp","cy"]};2j.7U.cx=n(2c,3m){E 3u(Q,2c,3m)};n 7V(dt){9 81=(1O 2j()).5b()-dt.5b();9 1Z=1f.1P(81/6c);9 4T=1f.1P(1Z/60);9 4A=1f.1P(4T/60);9 ds=1f.1P(4A/24);9 cz=1f.1P(ds/7);9 cA=1f.1P(ds/30);j(ds>60){E 3u(dt,"2l/m/dd h:2m")}z j(ds>=30){E"1"+1e.cB}z j(ds>=21){E"3"+1e.6B}z j(ds>=14){E"2"+1e.6B}z j(ds>=7){E"1"+1e.6B}z j(ds>=1){E ds.2y()+1e.cw}z j(4A>=1){E 4A.2y()+1e.cv}z j(4T>=1){E 4T.2y()+1e.cr}z j(1Z>1){E 1Z.2y()+1e.cq}z{E 1e.cs}}n 4z(1v){1v.r(\'.ct\').42(n(){9 $Y=$(Q);9 1p=$Y.1p();$Y.1p(5r.cu(1p))})}', 62, 907, "|||||||||var||||||||||if||||function|||brick|find|||data||true|||else||mediaID|false||return|media|css||url|attr|addthisParams|||top|MultiView||this|null|||animate|left|log|console|text|||hide|||||bricks|success||length|brickWidth|error|width|height|MultiViewLang|Math|date|title|post|show|mediaElement|id|addClass|ys|comments|html|click|btn|removeClass|theBrick|shareDropDown|element|rearrange|active|vm|currentViewMode|http|cssWidth|addComment|mediaDetail|location|for|rootUrl|service|viewModeTightCurrentHoverBrick|justClickedPicLinkMediaID|val|animationTime|windowWidth|offset|new|floor|switchBrickWidth|ajax|image|wall|google|viewModeTight|force|fullBrickWidth|liked|ss|||description|||getMediaByID|maps|cookie|com|type|columnCount|setTimeout|mask|hover|window|userForceBrickWidth|smallBrickWidth|POST|opacity|Date|parseInt|yyyy|MM|pad|mediaJson|useFirstColumn|columnWidth|likeButton|option|mediaWidth|100|shadowHeight|focus|event|toString|span|doubleClickLikeTimeoutID|appending|myLatlng|scrollTop|like|photoSizeSwitch|_|rearrangeBricks|pic|commentText|map|getBrick|brickPaddingRight|clearTimeout|lat|showMediaDetail|detailComments|bigBrickWidth|maxY|theMap|mediaDetailOffset|newCommentElement|newBricks|px|224|adsNewWidth||resp|300||||isNotMultiView||||currentDetailMediaID|detailMapLocation|lon|tt|viewModeSwitch|currentDetailMediaIndex|clazz|body|isUserLoggedIn|commentID|comment|out|utc|undefined|isAppendingBatch|share|showingMediaDetail|count|picFull|instagramUserInfo|dateFormat|brickOffset|document|hideUsersInPhotoTooltipsTimeoutID|target|aoOffset|brickActions|emojiInput|likedAlert|user|unbind|images|userElementWidth|userNameWidth|windowHeight|shadow|appendBatch|appendTo|push|deleteComment|which|brickMediaID|adsWidth|tweetfyClasses|parents|theMedia|startIdx|not|src|modal|idx|navMargin|typeof|HH|each|emoji|slice|setBrickLike|following|emojiInputHideTimeout|tweetfyHtml|windowScrollHandlers|me|fadeOut|followButton|brickBodyHoverTimeoutID|tooltip|getMediaByIndex|i18n|windowHeightRatio|tempDisableMapZoomChange|viewModeBricks|zIndex|windowScrollHandlerTimeout|windowResizeTimeout|path|likesCount|expires|String|elemParent|upperRightAdsBrick|pinsta|adsLeft|hasClass|fadeIn|videoPlayer|isBooting|emojilize|hs|brickLike|scrollTopPos|animated|setStyleOnly|fast|parent|bigPhoto|flowplayer|caption|switchViewMode|mediaDetailContainer|setBrickPublicHidden|detailCommentsHeight|setBrickPromoted|outgoing_status|followBtn|disabled|followRequested|ms|picLink|initViewModeForBrick|showAllComments|brickTop|actionInit|tempDisableArrowKeyDetailPageSwitch||encodeURIComponent|mousedown|UTC|mm|index|nextMaxID|nextButton|zoomOutZoom|contentPaddingLeft|replace|getTime|LatLng|500|showingLoggedInUsersMediaDetail|brickPaddingBottom|612|href|profileBrick|len|container|imageUrl|value|showLogin|dtJson|currentHoverMedia|pagination|jEmoji|yy|noMoreContent|arr|jsp|render|TT|commentIndex|prevButton|latitude|detach|longitude|mouseIsOutOfMap|get|addListener|ajaxData|goTopButton|mmm|loggedInInstagramUser|initCommentsInDetail|userID|DeleteMediaComment|wallContentWidth|DeleteMedia|forceColumnCount|loggedInIGUser|UnpromoteMedia|mentionUser|windowResizeHanlderOverride|CommentMedia|hideNote|wallPaddingTop|summary|getLoggedInInstagramUserInfo|hideLoadingContent||promoted|isProfileBrick|picThumb|backgroundSize|navigator|userAgent|monthNames|adsHeight|promote|indexOf|removeAttr|1000|bottomAdsBrick|lastYs|animationMaxBrickCount|pos|userName|154|srcx|maxIDField|ensureEnoughMediaLoaded|hideMedia|UnlikeMedia|Liked|LikeMedia|standard_resolution|FollowUser|forceLike|username|PromoteMedia|adsColumns|buttonText|adsTop|mediumBricksBtn|setLazyLoad|masks|WeeksAgo|dayNames|adsLeftColumnIndex|initializeFollowButton|mmmm|updateMediaDetailTopPosition|showShareMenuTrigger|visible|emojiInCategory|brickShare|sendComment|setCenter|HideMedia|emojiInputContentLoaded|calculateResizeCommentsArea|setZoom|isWindowsChrome|addCommentOffset|initializedHideShareMenuEvent|position|user_has_liked|brickBodyHover|showNextMediaButton|containerID|alreadyLike|setBrickLikedStyle|switchToBrickMode|prevMedia|publicHidden|showPrevMediaButton||initializeGMap|unicode|isChildElement|scrollWindowToBrick|jspPane|while|minusOne|in|flags|UnhideMedia|nextMedia|showUsersInPhotoTooltips|windowWidthForBigBrick|addOne|resetJiaShareDataForMedia|animation|bodyMinWidth|forceWallWidth|hideUsersInPhotoTooltips|_blank|loadingComments|low_resolution|renderBricks|switchDetailNext|fullBricksBtn|name|switchDetailPrev|showLoadingContent|smallBricksBtn|try|caretToEnd|initPrevNextButtons|noConcatDataJson|emojiChar|autoBricksBtn|videoIcon|theMapElementID|big|myOptions|800|keyCode|Like|no|brickPaddingBottomGridMode|usersInPhotoTooltips|initEmojiInputEvents|May|catch|test|isUserPage|prototype|DateStringFromNow|brickPromote|boot|getMinValueIndex|absolute||mss|200|parseFloat|isNaN|code|locName|zoomInZoom|png|Content|background|windowResizeHanlder|parentElem|resize|appendExtensionParam|emojiByCategory|notFound|elem|toLowerCase|detailWithTopBarMinHeight|repeat|mousewheel|thumb|photoExtraInfo|source|php|brickHide|contentWidth|appkey|open|currentColumnCount|963619642|confirm|is|stop|getMediaIndexByID|twitter|pinterest|hideMediaDetailNavBtns|tumblr|www|douban|qzone|smallBrick|initBrick|adsBrick|scrollToPercentY|detailCommentText|reinitialise|default|ddd|token|dddd|fullBrick|wallPadding|detailComment_|990|toAppend|renren|args|https|hideMediaDetail||keydown|preventDefault|blur|viewModeBricksBtn|Pinsta|mediaDetailCommentTemplate|profile_picture|children||mouseup|empty|info|prevNextWrapper|qrCodeUrl|showItsMediaDetail|resizePrevNextButtons|hideMore|GetMediaComments|users_in_photo|Un|bottom|paddingTop|action|timezoneClip|note|danger|abs|loadingContent|facebook|addCommentContainer|brickBody|timezone|ImageProxy|likes|minWidth|detailSidebar|1600|306|ready|showNote|530|slideDown|400|tight|btnHideAllClicked|windows|Hide|chrome|Unhide|brickAdsCountLimit|brickAdsCount|Promote|hideMediaDetailNavButtons|676|showingLoginForm|followUser|isShowingShareMenu|detailCaption|img|detailMap|from|jScrollPane|trim|created_time|theDetailMap|visibility|commentUserName|ConfirmDeleteMediaComment|splice|mediaDetailTemplate|keyboard|hidden|on|backdrop|GET|sendButton|fp|embed|remove|videos|usersInPhotoDropDown|tab|myTab||||printBtn|org|00001|scrollToElement|charByCode|emojiInputContent|emojiInputTab|class|posx|posy|append|random|pow|webOS|Android|viewModeTightBtn|iPhone|iPad|profileBio|BlackBerry|iPod|net|fbcdn|formatDate|helpers|views|formatDateFull|getUserInPhotoPositionCss|detectFBCDN|useImageProxyIfNeeded|btnPromoteClicked|pageLoading|scrollable|last|UnfollowUser|follows|slideUp|ConfirmDeleteMedia|fromID|join|deleteMedia|requested|isliked|FollowRequested|Following|bind|Unfollow|Follow|wallOffset|owner|Unpromote|slide|FullYear|Month|Hours|Minutes|Milliseconds|Seconds|Day|getUTC|object|call|throw|SyntaxError|invalid|getTimezoneOffset|hh|nd|st||rd|shortDate|mediumDate|th|pop|pm|round|AM|PM|match|Object|arguments|dragend|dragstart|failed|userPageBaseUrl|searchTagBaseUrl|mouseout|mouseover|Map|mapTypeControl|getElementById|marker|Marker|HhMsTt|LloSZ|Daylight|showBrickShareMenu|Prevailing|Time|GMT|Atlantic|Eastern|SDP|PMCEA|Pacific|Mountain|Central|longDate|fullDate|June|April|July|August|September|March|February|Oct|Sep|Nov|Dec|January||October|November|SecondsAgo|MinutesAgo|JustNow|emojstext|unifiedToHTML|HoursAgo|DaysAgo|format|December|ws|months|MonthsAgo|Aug|Jul|Mon|Sun|Tue|Wed|Thu|isoUtcDateTime|isoDateTime|mediumTime|shortTime|longTime|isoDate|isoTime|Fri|Sat|Feb|Jan|Mar|Apr|Jun|Saturday|Friday|Monday|Sunday|Tuesday|Wednesday|Thursday|ROADMAP|Standard|navRight|marginLeft|ra|to|pin|50528ffc0e1602eb|awesome||ceil|marginRight|timstamp|addthisPubID|create|ShareInstagramPhoto|801127892|tqq|photo|button|navLeft|extend|PhotoBy|appendAction|||Instagram|original_referer|api|addthis|oexchange|viewer||scroll|jpg|s3|amazonaws||8067244c094711e2ae9122000a1fc2e8_6|web|MapTypeId|Error|plus|intent|tweet|finished|googleplus|forward|offer|sharer|click_thru|sinaweibo|PromoteWeight|PublicHidden|stats|locationLogo|group|qrCodeModal|qrcode|Commons|QrCodeForUrl|qrCodeImage|showShareBar|locationName|zoom|brickTemplate|disableDefaultUI|mapTypeId|center|tooltipBtn|returns|concat|updated|distilleryimage4|srcUrl|relateUid|shuo|sns|qq|maxWidth|easeOutQuint|tsina|sina|jiathis_config|bookmark|cgi|bin|pics|widget|dialog|cgi_qzshare_onekey||easing|qzshare|getWallActualWidthInMaxWidth|li|resourceUrl".split("|"), 0, {}));
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
this.jsviews || this.jQuery && jQuery.views || function (n, t) {
    function nt(n, t) {
        var u = "\\" + n.charAt(0),
            e = "\\" + n.charAt(1),
            i = "\\" + t.charAt(0),
            r = "\\" + t.charAt(1);
        return f.rTag = p = e + "(?:(?:(\\w+(?=[\\/\\s" + i + "]))|(?:(\\w+)?(:)|(>)|(\\*)))\\s*((?:[^" + i + "]|" + i + "(?!" + r + "))*?)", p = new RegExp(u + p + "(\\/)?|(?:\\/(\\w+)))" + i + r, "g"), tt = new RegExp("<.*>|" + n + ".*" + t), this
    }
    function g(n) {
        var i = this,
            r = i.tmpl.helpers || {};
        return n = (i.ctx[n] !== t ? i.ctx : r[n] !== t ? r : v[n] !== t ? v : {})[n], typeof n != "function" ? n : function () {
            return n.apply(i, arguments)
        }
    }
    function kt(n, t, i) {
        var r = t.tmpl.converters;
        return n = r && r[n] || c[n], n ? n.call(t, i) : i
    }
    function st(n, r, u, f, o) {
        var h, s = o.props && o.props.tmpl,
            v = r.tmpl.tags,
            y = r.tmpl.templates,
            c = arguments,
            l = v && v[n] || a[n];
        return l ? (f = f && r.tmpl.tmpls[f - 1], s = s || f || t, o.tmpl = "" + s === s ? y && y[s] || e[s] || e(s) : s, o.isTag = i, o.converter = u, o.view = r, o.renderContent = d, h = l.apply(o, c.length > 5 ? bt.call(c, 5) : []), h || (h == t ? "" : h.toString())) : ""
    }
    function s(n, i, r, f, e, o, s) {
        var c = r.views,
            h = {
                tmpl: e,
                path: i,
                parent: r,
                data: f,
                ctx: n,
                views: u.isArray(f) ? [] : {},
                _hlp: g,
                _onRender: s
            };
        return u.isArray(c) ? c.splice(h.key = h.index = o !== t ? o : c.length, 0, h) : (c[h.key = "_" + dt++] = h, h.index = r.index), h
    }
    function l(n, i, r, u, f) {
        var e, o;
        if (r && typeof r == "object" && !r.nodeType) {
            for (e in r) i(e, r[e]);
            return n
        }
        return r && u !== t ? "" + r === r && (u === null ? delete i[r] : (u = f ? f(r, u) : u) && (i[r] = u)) : f && (u = f(t, u || r)), (o = ut.onStoreItem) && o(i, r, u, f), u
    }
    function e(n, t) {
        return l(this, e, n, t, k)
    }
    function a(n, t) {
        return l(this, a, n, t)
    }
    function v(n, t) {
        return l(this, v, n, t)
    }
    function c(n, t) {
        return l(this, c, n, t)
    }
    function d(n, o, h, c, l, a) {
        var w, it, nt, p, ft, ut, tt, b, y, a, g, d, rt, v = this,
            k = "";
        if (c === i && (d = i, c = 0), v.isTag ? (y = v.tmpl, v.props && v.ctx && r(v.ctx, v.props), v.ctx && o && (o = r(v.ctx, o)), o = v.ctx || o, l = l || v.view, h = h || v.path, c = c || v.key, g = v.props) : y = v.jquery && v[0] || v, l = l || f.topView, b = l.ctx, y && (n === l && (n = l.data, rt = i), o = o && o === b ? b : o ? r(r({}, b), o) : b, y.fn || (y = e[y] || e(y)), a = a || l._onRender, y)) {
            if (u.isArray(n) && !rt) for (p = d ? l : c !== t && l || s(o, h, l, n, y, c, a), w = 0, it = n.length; w < it; w++) nt = n[w], tt = y.fn(nt, s(o, h, p, nt, y, (c || 0) + w, a), f), k += a ? a(tt, y, g) : tt;
            else p = d ? l : s(o, h, l, n, y, c, a), p._onRender = a, k += y.fn(n, p, f);
            return l.topKey = p.key, a ? a(k, y, g, p.key, h) : k
        }
        return ""
    }
    function h(n, t) {
        throw (t ? t.name + ': "' + t.message + '"' : "Syntax error") + (n ? " \n" + n : "");
    }
    function b(n, t, r) {
        function ot(t) {
            t -= y, t && o.push(n.substr(y, t).replace(ht, "\\n"))
        }
        function wt(t, u, f, s, h, c, l, v, p, w) {
            h && (s = ":", f = "html");
            var b = "",
                g = "",
                k = !v && !s && !r;
            if (u = u || s, ot(w), y = w + t.length, c ? a && o.push(["*", l.replace(ct, "$1")]) : u ? (u === "else" && (e[5] = n.substring(e[5], w), e = d.pop(), o = e[3], k = i), l = l ? et(l, r).replace(pt, function (n, t, i) {
                return t ? g += i + "," : b += i + ",", ""
            }) : "", b = b.slice(0, -1), l = l.slice(0, -1), ft = [u, f || "", l, k && [], "{" + (b ? "props:{" + b + "}," : "") + "path:'" + l + "'" + (g ? ",ctx:{" + g.slice(0, -1) + "}" : "") + "}"], k && (d.push(e), e = ft, e[5] = y), o.push(ft)) : p && (e[5] = n.substring(e[5], w), e = d.pop()), !e) throw "Expected block tag";
            o = e[3]
        }
        var ft, f, c, v, u, ut, st, at, tt, nt, rt, l, s, g, k, a, yt = t ? {
            allowCode: a = t.allowCode,
            debug: t.debug
        } : {}, vt = t && t.tmpls,
            w = [],
            y = 0,
            d = [],
            o = w,
            e = [, , , w],
            bt = 0;
        for (n = n.replace(lt, "\\$1"), n.replace(p, wt), ot(n.length), v = w.length, u = v ? "" : '"";', c = 0; c < v; c++) f = w[c], "" + f === f ? u += '"' + f + '"+' : f[0] === "*" ? u = u.slice(0, c ? -1 : -3) + ";" + f[1] + (c + 1 < v ? "ret+=" : "") : (rt = f[0], l = f[1], s = f[2], o = f[3], g = f[4], n = f[5], o && (k = it(n, yt, t, bt++), b(n, k), vt.push(k)), nt = nt || g.indexOf("view") > -1, u += (rt === ":" ? l === "html" ? (st = i, "e(" + s) : l ? (tt = i, 'c("' + l + '",view,' + s) : (at = i, "((v=" + s + ')!=u?v:""') : (ut = i, 't("' + rt + '",view,"' + (l || "") + '",' + (o ? vt.length : '""') + "," + g + (s ? "," : "") + s)) + ")+");
        u = ni + (at ? "v," : "") + (ut ? "t=j.tag," : "") + (tt ? "c=j.convert," : "") + (st ? "e=j.converters.html," : "") + "ret; try{\n\n" + (yt.debug ? "debugger;" : "") + (a ? "ret=" : "return ") + u.slice(0, -1) + ";\n\n" + (a ? "return ret;" : "") + "}catch(e){return j.err(e);}";
        try {
            u = new Function("data, view, j, b, u", u)
        } catch (kt) {
            h("Error in compiled template code:\n" + u, kt)
        }
        return t && (t.fn = u, t.useVw = tt || nt || ut), u
    }
    function et(n, t) {
        function s(n, s, c, l, a, v, p, w, b, k, d, g, nt, tt, it, rt) {
            function ft(n, t, i, r, u, f, e) {
                if (t) {
                    var s, o = (i ? 'view._hlp("' + i + '")' : r ? "view" : "data") + (e ? (u ? "." + u : i ? "" : r ? "" : "." + t) + (f || "") : (e = i ? "" : r ? u || "" : t, ""));
                    return s = e ? "." + e : "", ut || (o = o + s), o = o.slice(0, 9) === "view.data" ? o.slice(5) : o, ut && (o = "b(" + o + ',"' + e + '")' + s), o
                }
                return n
            }
            a = a || "", c = c || s || d, l = l || w, b = b || it || "", a = a || "";
            var ut = t && b !== "(";
            if (v) h();
            else return u ? (u = !g, u ? n : '"') : f ? (f = !nt, f ? n : '"') : (c ? (r++, c) : "") + (rt ? r ? "" : o ? (o = y, "\b") : "," : p ? (r && h(), o = i, "\b" + l + ":") : l ? l.replace(vt, ft) + (b ? (e[++r] = i, b) : a) : a ? n : tt ? (e[r--] = y, tt) + (b ? (e[++r] = i, b) : "") : k ? (e[r] || h(), ",") : s ? "" : (u = g, f = nt, '"'))
        }
        var o, e = {}, r = 0,
            f = y,
            u = y;
        return n = (n + " ").replace(yt, s)
    }
    function k(n, i, u, f) {
        function v(t) {
            if ("" + t === t || t.nodeType > 0) {
                try {
                    h = t.nodeType > 0 ? t : !tt.test(t) && o && o(t)[0]
                } catch (i) {}
                return h && h.type && (t = e[h.getAttribute(ft)], t || (n = n || "_" + gt++, h.setAttribute(ft, n), t = k(n, h.innerHTML, u, f), e[n] = t)), t
            }
        }
        var s, h, c, l, a;
        if (i = i || "", s = v(i), f = f || (i.markup ? i : {}), f.name = n, l = f.templates, !s && i.markup && (s = v(i.markup)) && s.fn && (s.debug !== i.debug || s.allowCode !== i.allowCode) && (s = s.markup), s !== t) {
            n && !u && (w[n] = function () {
                return i.render.apply(i, arguments)
            }), s.fn || i.fn ? s.fn && (i = n && n !== s.name ? r(r({}, s), f) : s) : (i = it(s, f, u, 0), b(s, i));
            for (c in l) a = l[c], a.name !== c && (l[c] = k(c, a, i));
            return i
        }
    }
    function it(n, t, i, u) {
        function e(n) {
            i[n] && (f[n] = r(r({}, i[n]), t[n]))
        }
        t = t || {};
        var f = {
            markup: n,
            tmpls: [],
            links: [],
            render: d
        };
        return i && (i.templates && (f.templates = r(r({}, i.templates), t.templates)), f.parent = i, f.name = i.name + "[" + u + "]", f.key = u), r(f, t), i && (e("templates"), e("tags"), e("helpers"), e("converters")), f
    }
    function ot(n) {
        return rt[n] || (rt[n] = "&#" + n.charCodeAt(0) + ";")
    }
    var at = "v1.0pre",
        u, p, tt, r, ut = {}, y = !1,
        i = !0,
        o = n.jQuery,
        vt = /^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.]*?)(?:[.[]([\w$]+)\]?)?|(['"]).*\8)$/g,
        yt = /(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g,
        ht = /\r?\n/g,
        ct = /\\(['"])/g,
        lt = /\\?(['"])/g,
        pt = /\x08(~)?([^\x08]+)\x08/g,
        dt = 0,
        gt = 0,
        rt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;"
        }, ft = "data-jsv-tmpl",
        ni = "var j=j||" + (o ? "jQuery." : "js") + "views,",
        wt = /[\x00"&'<>]/g,
        bt = Array.prototype.slice,
        w = {}, f = {
            jsviews: at,
            sub: ut,
            debugMode: i,
            err: function (n) {
                return f.debugMode ? "<br/><b>Error:<\/b> <em> " + (n.message || n) + ". <\/em>" : '""'
            },
            tmplFn: b,
            render: w,
            templates: e,
            tags: a,
            helpers: v,
            converters: c,
            View: s,
            convert: kt,
            delimiters: nt,
            tag: st
        };
    o ? (u = o, u.templates = e, u.render = w, u.views = f, u.fn.render = d) : (u = n.jsviews = f, u.extend = function (n, t) {
        var i;
        n = n || {};
        for (i in t) n[i] = t[i];
        return n
    }, u.isArray = Array && Array.isArray || function (n) {
        return Object.prototype.toString.call(n) === "[object Array]"
    }), r = u.extend, f.topView = {
        views: {},
        tmpl: {},
        _hlp: g,
        ctx: f.helpers
    }, a({
        "if": function () {
            var i = this,
                n = i.view;
            n.onElse = function (i, r) {
                for (var f = 0, u = r.length; u && !r[f++];) if (f === u) return "";
                return n.onElse = t, i.path = "", i.renderContent(n)
            };
            return n.onElse(this, arguments)
        },
        "else": function () {
            var n = this.view;
            return n.onElse ? n.onElse(this, arguments) : ""
        },
        "for": function () {
            var n, u = this,
                i = "",
                r = arguments,
                t = r.length;
            for (t === 0 && (t = 1), n = 0; n < t; n++) i += u.renderContent(r[n]);
            return i
        },
        "=": function (n) {
            return n
        },
        "*": function (n) {
            return n
        }
    }), c({
        html: function (n) {
            return n != t ? String(n).replace(wt, ot) : ""
        }
    }), nt("{{", "}}")
}(this), $.fn.emoji = function () {
    return this.each(function () {
        $(this).html($(this).html().replace(/([\ue001-\ue537])/g, $.fn.emoji.replacer))
    })
}, $.fn.emoji.replacer = function (n, t) {
    return t.charCodeAt(0).toString(16).toUpperCase().replace(/^([\da-f]+)$/i, '<img src="../Scripts/emoji/emoji-$1.png" alt="emoji" />')
},
function (n, t, i) {
    n.fn.jScrollPane = function (r) {
        function u(r, u) {
            function ci(t) {
                var w, nt, tt, u, c, p, d = !1,
                    g = !1;
                if (f = t, o === i) c = r.scrollTop(), p = r.scrollLeft(), r.css({
                    overflow: "hidden",
                    padding: 0
                }), h = r.innerWidth() + ct, s = r.innerHeight(), r.width(h), o = n('<div class="jspPane" />').css("padding", yi).append(r.children()), e = n('<div class="jspContainer" />').css({
                    width: h + "px",
                    height: s + "px"
                }).append(o).appendTo(r);
                else {
                    if (r.css("width", ""), d = f.stickToBottom && wr(), g = f.stickToRight && yr(), u = r.innerWidth() + ct != h || r.outerHeight() != s, u && (h = r.innerWidth() + ct, s = r.innerHeight(), e.css({
                        width: h + "px",
                        height: s + "px"
                    })), !u && pi == y && o.outerHeight() == v) {
                        r.width(h);
                        return
                    }
                    pi = y, o.css("width", ""), r.width(h), e.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                o.css("overflow", "auto"), y = t.contentWidth ? t.contentWidth : o[0].scrollWidth, v = o[0].scrollHeight, o.css("overflow", ""), li = y / h, ii = v / s, k = ii > 1, b = li > 1, b || k ? (r.addClass("jspScrollable"), w = f.maintainPosition && (l || a), w && (nt = ot(), tt = ft()), ar(), vr(), lr(), w && (vt(g ? y - h : nt, !1), rt(d ? v - s : tt, !1)), tr(), pr(), nr(), f.enableKeyboardNavigation && fr(), f.clickOnTrack && cr(), or(), f.hijackInternalLinks && sr()) : (r.removeClass("jspScrollable"), o.css({
                    top: 0,
                    width: e.width() - ct
                }), ir(), ur(), er(), gi()), f.autoReinitialise && !lt ? lt = setInterval(function () {
                    ci(f)
                }, f.autoReinitialiseDelay) : !f.autoReinitialise && lt && clearInterval(lt), c && r.scrollTop(0) && rt(c, !1), p && r.scrollLeft(0) && vt(p, !1), r.trigger("jsp-initialised", [b || k])
            }
            function ar() {
                k && (e.append(n('<div class="jspVerticalBar" />').append(n('<div class="jspCap jspCapTop" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragTop" />'), n('<div class="jspDragBottom" />'))), n('<div class="jspCap jspCapBottom" />'))), ti = e.find(">.jspVerticalBar"), nt = ti.find(">.jspTrack"), p = nt.find(">.jspDrag"), f.showArrows && (wt = n('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", it(0, -1)).bind("click.jsp", yt), dt = n('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", it(0, 1)).bind("click.jsp", yt), f.arrowScrollOnHover && (wt.bind("mouseover.jsp", it(0, -1, wt)), dt.bind("mouseover.jsp", it(0, 1, dt))), wi(nt, f.verticalArrowPositions, wt, dt)), pt = s, e.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    pt -= n(this).outerHeight()
                }), p.hover(function () {
                    p.addClass("jspHover")
                }, function () {
                    p.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    n("html").bind("dragstart.jsp selectstart.jsp", yt), p.addClass("jspActive");
                    var i = t.pageY - p.position().top;
                    return n("html").bind("mousemove.jsp", function (n) {
                        st(n.pageY - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", di), !1
                }), ki())
            }
            function ki() {
                nt.height(pt + "px"), l = 0, oi = f.verticalGutter + nt.outerWidth(), o.width(h - oi - ct);
                try {
                    ti.position().left === 0 && o.css("margin-left", oi + "px")
                } catch (n) {}
            }
            function vr() {
                b && (e.append(n('<div class="jspHorizontalBar" />').append(n('<div class="jspCap jspCapLeft" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragLeft" />'), n('<div class="jspDragRight" />'))), n('<div class="jspCap jspCapRight" />'))), fi = e.find(">.jspHorizontalBar"), g = fi.find(">.jspTrack"), w = g.find(">.jspDrag"), f.showArrows && (bt = n('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", it(-1, 0)).bind("click.jsp", yt), kt = n('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", it(1, 0)).bind("click.jsp", yt), f.arrowScrollOnHover && (bt.bind("mouseover.jsp", it(-1, 0, bt)), kt.bind("mouseover.jsp", it(1, 0, kt))), wi(g, f.horizontalArrowPositions, bt, kt)), w.hover(function () {
                    w.addClass("jspHover")
                }, function () {
                    w.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    n("html").bind("dragstart.jsp selectstart.jsp", yt), w.addClass("jspActive");
                    var i = t.pageX - w.position().left;
                    return n("html").bind("mousemove.jsp", function (n) {
                        at(n.pageX - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", di), !1
                }), ht = e.innerWidth(), bi())
            }
            function bi() {
                e.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    ht -= n(this).outerWidth()
                }), g.width(ht + "px"), a = 0
            }
            function lr() {
                if (b && k) {
                    var t = g.outerHeight(),
                        i = nt.outerWidth();
                    pt -= t, n(fi).find(">.jspCap:visible,>.jspArrow").each(function () {
                        ht += n(this).outerWidth()
                    }), ht -= i, s -= i, h -= t, g.parent().append(n('<div class="jspCorner" />').css("width", t + "px")), ki(), bi()
                }
                b && o.width(e.outerWidth() - ct + "px"), v = o.outerHeight(), ii = v / s, b && (tt = Math.ceil(1 / li * ht), tt > f.horizontalDragMaxWidth ? tt = f.horizontalDragMaxWidth : tt < f.horizontalDragMinWidth && (tt = f.horizontalDragMinWidth), w.width(tt + "px"), ut = ht - tt, hi(a)), k && (et = Math.ceil(1 / ii * pt), et > f.verticalDragMaxHeight ? et = f.verticalDragMaxHeight : et < f.verticalDragMinHeight && (et = f.verticalDragMinHeight), p.height(et + "px"), d = pt - et, si(l))
            }
            function wi(n, t, i, r) {
                var f = "before",
                    u = "after",
                    e;
                t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == f ? u = t : t == u && (f = t, e = i, i = r, r = e), n[f](i)[u](r)
            }
            function it(n, t, i) {
                return function () {
                    return hr(n, t, this, i), this.blur(), !1
                }
            }
            function hr(t, i, r, u) {
                r = n(r).addClass("jspActive");
                var o, e, h = !0,
                    s = function () {
                        t !== 0 && c.scrollByX(t * f.arrowButtonSpeed), i !== 0 && c.scrollByY(i * f.arrowButtonSpeed), e = setTimeout(s, h ? f.initialDelay : f.arrowRepeatFreq), h = !1
                    };
                s(), o = u ? "mouseout.jsp" : "mouseup.jsp", u = u || n("html"), u.bind(o, function () {
                    r.removeClass("jspActive"), e && clearTimeout(e), e = null, u.unbind(o)
                })
            }
            function cr() {
                gi(), k && nt.bind("mousedown.jsp", function (t) {
                    if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                        var a = n(this),
                            y = a.offset(),
                            e = t.pageY - y.top - l,
                            r, h = !0,
                            o = function () {
                                var p = a.offset(),
                                    n = t.pageY - p.top - et / 2,
                                    i = s * f.scrollPagePercent,
                                    y = d * i / (v - s);
                                if (e < 0) l - y > n ? c.scrollByY(-i) : st(n);
                                else if (e > 0) l + y < n ? c.scrollByY(i) : st(n);
                                else {
                                    u();
                                    return
                                }
                                r = setTimeout(o, h ? f.initialDelay : f.trackClickRepeatFreq), h = !1
                            }, u = function () {
                                r && clearTimeout(r), r = null, n(document).unbind("mouseup.jsp", u)
                            };
                        return o(), n(document).bind("mouseup.jsp", u), !1
                    }
                }), b && g.bind("mousedown.jsp", function (t) {
                    if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                        var l = n(this),
                            v = l.offset(),
                            e = t.pageX - v.left - a,
                            r, s = !0,
                            o = function () {
                                var p = l.offset(),
                                    n = t.pageX - p.left - tt / 2,
                                    i = h * f.scrollPagePercent,
                                    v = ut * i / (y - h);
                                if (e < 0) a - v > n ? c.scrollByX(-i) : at(n);
                                else if (e > 0) a + v < n ? c.scrollByX(i) : at(n);
                                else {
                                    u();
                                    return
                                }
                                r = setTimeout(o, s ? f.initialDelay : f.trackClickRepeatFreq), s = !1
                            }, u = function () {
                                r && clearTimeout(r), r = null, n(document).unbind("mouseup.jsp", u)
                            };
                        return o(), n(document).bind("mouseup.jsp", u), !1
                    }
                })
            }
            function gi() {
                g && g.unbind("mousedown.jsp"), nt && nt.unbind("mousedown.jsp")
            }
            function di() {
                n("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), p && p.removeClass("jspActive"), w && w.removeClass("jspActive")
            }
            function st(n, t) {
                k && (n < 0 ? n = 0 : n > d && (n = d), t === i && (t = f.animateScroll), t ? c.animate(p, "top", n, si) : (p.css("top", n), si(n)))
            }
            function si(n) {
                n === i && (n = p.position().top), e.scrollTop(0), l = n;
                var u = l === 0,
                    t = l == d,
                    h = n / d,
                    f = -h * (v - s);
                (ri != u || ei != t) && (ri = u, ei = t, r.trigger("jsp-arrow-change", [ri, ei, ui, gt])), br(u, t), o.css("top", f), r.trigger("jsp-scroll-y", [-f, u, t]).trigger("scroll")
            }
            function at(n, t) {
                b && (n < 0 ? n = 0 : n > ut && (n = ut), t === i && (t = f.animateScroll), t ? c.animate(w, "left", n, hi) : (w.css("left", n), hi(n)))
            }
            function hi(n) {
                n === i && (n = w.position().left), e.scrollTop(0), a = n;
                var u = a === 0,
                    t = a == ut,
                    s = n / ut,
                    f = -s * (y - h);
                (ui != u || gt != t) && (ui = u, gt = t, r.trigger("jsp-arrow-change", [ri, ei, ui, gt])), kr(u, t), o.css("left", f), r.trigger("jsp-scroll-x", [-f, u, t]).trigger("scroll")
            }
            function br(n, t) {
                f.showArrows && (wt[n ? "addClass" : "removeClass"]("jspDisabled"), dt[t ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function kr(n, t) {
                f.showArrows && (bt[n ? "addClass" : "removeClass"]("jspDisabled"), kt[t ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function rt(n, t) {
                var i = n / (v - s);
                st(i * d, t)
            }
            function vt(n, t) {
                var i = n / (y - h);
                at(i * ut, t)
            }
            function ni(t, i, r) {
                var u, p, v, o = 0,
                    c = 0,
                    w, y, b, k, a, l;
                try {
                    u = n(t)
                } catch (d) {
                    return
                }
                for (p = u.outerHeight(), v = u.outerWidth(), e.scrollTop(0), e.scrollLeft(0); !u.is(".jspPane");) if (o += u.position().top, c += u.position().left, u = u.offsetParent(), /^body|html$/i.test(u[0].nodeName)) return;
                w = ft(), b = w + s, o < w || i ? a = o - f.verticalGutter : o + p > b && (a = o - s + p + f.verticalGutter), a && rt(a, r), y = ot(), k = y + h, c < y || i ? l = c - f.horizontalGutter : c + v > k && (l = c - h + v + f.horizontalGutter), l && vt(l, r)
            }
            function ot() {
                return -o.position().left
            }
            function ft() {
                return -o.position().top
            }
            function wr() {
                var n = v - s;
                return n > 20 && n - ft() < 10
            }
            function yr() {
                var n = y - h;
                return n > 20 && n - ot() < 10
            }
            function pr() {
                e.unbind(vi).bind(vi, function (n, t, i, r) {
                    var e = a,
                        u = l;
                    return c.scrollBy(i * f.mouseWheelSpeed, -r * f.mouseWheelSpeed, !1), e == a && u == l
                })
            }
            function ir() {
                e.unbind(vi)
            }
            function yt() {
                return !1
            }
            function tr() {
                o.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (n) {
                    ni(n.target, !1)
                })
            }
            function ur() {
                o.find(":input,a").unbind("focus.jsp")
            }
            function fr() {
                function h() {
                    var r = a,
                        n = l;
                    switch (t) {
                        case 40:
                            c.scrollByY(f.keyboardSpeed, !1);
                            break;
                        case 38:
                            c.scrollByY(-f.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            c.scrollByY(s * f.scrollPagePercent, !1);
                            break;
                        case 33:
                            c.scrollByY(-s * f.scrollPagePercent, !1);
                            break;
                        case 39:
                            c.scrollByX(f.keyboardSpeed, !1);
                            break;
                        case 37:
                            c.scrollByX(-f.keyboardSpeed, !1)
                    }
                    return i = r != a || n != l
                }
                var t, i, u = [];
                b && u.push(fi[0]), k && u.push(ti[0]), o.focus(function () {
                    r.focus()
                }), r.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (r) {
                    if (r.target === this || u.length && n(r.target).closest(u).length) {
                        var e = a,
                            f = l;
                        switch (r.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                t = r.keyCode, h();
                                break;
                            case 35:
                                rt(v - s), t = null;
                                break;
                            case 36:
                                rt(0), t = null
                        }
                        return i = r.keyCode == t && e != a || f != l, !i
                    }
                }).bind("keypress.jsp", function (n) {
                    return n.keyCode == t && h(), !i
                }), f.hideFocus ? (r.css("outline", "none"), "hideFocus" in e[0] && r.attr("hideFocus", !0)) : (r.css("outline", ""), "hideFocus" in e[0] && r.attr("hideFocus", !1))
            }
            function er() {
                r.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }
            function or() {
                if (location.hash && location.hash.length > 1) {
                    var t, r, i = escape(location.hash.substr(1));
                    try {
                        t = n("#" + i + ', a[name="' + i + '"]')
                    } catch (u) {
                        return
                    }
                    t.length && o.find(i) && (e.scrollTop() === 0 ? r = setInterval(function () {
                        e.scrollTop() > 0 && (ni(t, !0), n(document).scrollTop(e.position().top), clearInterval(r))
                    }, 50) : (ni(t, !0), n(document).scrollTop(e.position().top)))
                }
            }
            function sr() {
                n(document.body).data("jspHijack") || (n(document.body).data("jspHijack", !0), n(document.body).delegate("a[href*=#]", "click", function (i) {
                    var c = this.href.substr(0, this.href.indexOf("#")),
                        h = location.href,
                        o, r, u, s, f, e;
                    if (location.href.indexOf("#") !== -1 && (h = location.href.substr(0, location.href.indexOf("#"))), c === h) {
                        o = escape(this.href.substr(this.href.indexOf("#") + 1)), r;
                        try {
                            r = n("#" + o + ', a[name="' + o + '"]')
                        } catch (l) {
                            return
                        }
                        r.length && (u = r.closest(".jspScrollable"), s = u.data("jsp"), s.scrollToElement(r, !0), u[0].scrollIntoView && (f = n(t).scrollTop(), e = r.offset().top, (e < f || e > f + n(t).height()) && u[0].scrollIntoView()), i.preventDefault())
                    }
                }))
            }
            function nr() {
                var u, f, r, t, n, i = !1;
                e.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (e) {
                    var o = e.originalEvent.touches[0];
                    u = ot(), f = ft(), r = o.pageX, t = o.pageY, n = !1, i = !0
                }).bind("touchmove.jsp", function (e) {
                    if (i) {
                        var o = e.originalEvent.touches[0],
                            h = a,
                            s = l;
                        return c.scrollTo(u + r - o.pageX, f + t - o.pageY), n = n || Math.abs(r - o.pageX) > 5 || Math.abs(t - o.pageY) > 5, h == a && s == l
                    }
                }).bind("touchend.jsp", function () {
                    i = !1
                }).bind("click.jsp-touchclick", function () {
                    if (n) return n = !1, !1
                })
            }
            function rr() {
                var t = ft(),
                    n = ot();
                r.removeClass("jspScrollable").unbind(".jsp"), r.replaceWith(ai.append(o.children())), ai.scrollTop(t), ai.scrollLeft(n), lt && clearInterval(lt)
            }
            var f, c = this,
                o, h, s, e, y, v, li, ii, k, b, p, d, l, w, ut, a, ti, nt, oi, pt, et, wt, dt, fi, g, ht, tt, bt, kt, lt, yi, ct, pi, ri = !0,
                ui = !0,
                ei = !1,
                gt = !1,
                ai = r.clone(!1, !1).empty(),
                vi = n.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            yi = r.css("paddingTop") + " " + r.css("paddingRight") + " " + r.css("paddingBottom") + " " + r.css("paddingLeft"), ct = (parseInt(r.css("paddingLeft"), 10) || 0) + (parseInt(r.css("paddingRight"), 10) || 0), n.extend(c, {
                reinitialise: function (t) {
                    t = n.extend({}, f, t), ci(t)
                },
                scrollToElement: function (n, t, i) {
                    ni(n, t, i)
                },
                scrollTo: function (n, t, i) {
                    vt(n, i), rt(t, i)
                },
                scrollToX: function (n, t) {
                    vt(n, t)
                },
                scrollToY: function (n, t) {
                    rt(n, t)
                },
                scrollToPercentX: function (n, t) {
                    vt(n * (y - h), t)
                },
                scrollToPercentY: function (n, t) {
                    rt(n * (v - s), t)
                },
                scrollBy: function (n, t, i) {
                    c.scrollByX(n, i), c.scrollByY(t, i)
                },
                scrollByX: function (n, t) {
                    var r = ot() + Math[n < 0 ? "floor" : "ceil"](n),
                        i = r / (y - h);
                    at(i * ut, t)
                },
                scrollByY: function (n, t) {
                    var r = ft() + Math[n < 0 ? "floor" : "ceil"](n),
                        i = r / (v - s);
                    st(i * d, t)
                },
                positionDragX: function (n, t) {
                    at(n, t)
                },
                positionDragY: function (n, t) {
                    st(n, t)
                },
                animate: function (n, t, i, r) {
                    var u = {};
                    u[t] = i, n.animate(u, {
                        duration: f.animateDuration,
                        easing: f.animateEase,
                        queue: !1,
                        step: r
                    })
                },
                getContentPositionX: function () {
                    return ot()
                },
                getContentPositionY: function () {
                    return ft()
                },
                getContentWidth: function () {
                    return y
                },
                getContentHeight: function () {
                    return v
                },
                getPercentScrolledX: function () {
                    return ot() / (y - h)
                },
                getPercentScrolledY: function () {
                    return ft() / (v - s)
                },
                getIsScrollableH: function () {
                    return b
                },
                getIsScrollableV: function () {
                    return k
                },
                getContentPane: function () {
                    return o
                },
                scrollToBottom: function (n) {
                    st(d, n)
                },
                hijackInternalLinks: n.noop,
                destroy: function () {
                    rr()
                }
            }), ci(u)
        }
        return r = n.extend({}, n.fn.jScrollPane.defaults, r), n.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            r[this] = r[this] || r.speed
        }), this.each(function () {
            var i = n(this),
                t = i.data("jsp");
            t ? t.reinitialise(r) : (t = new u(i, r), i.data("jsp", t))
        })
    }, n.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: i,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}(jQuery, this);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */ (function (n) {
    function i(t) {
        var i = t || window.event,
            e = [].slice.call(arguments, 1),
            r = 0,
            o = !0,
            f = 0,
            u = 0;
        return t = n.event.fix(i), t.type = "mousewheel", i.wheelDelta && (r = i.wheelDelta / 120), i.detail && (r = -i.detail / 3), u = r, i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0, f = -1 * r), i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120), i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / -120), e.unshift(t, r, f, u), (n.event.dispatch || n.event.handle).apply(this, e)
    }
    var t = ["DOMMouseScroll", "mousewheel"],
        r;
    if (n.event.fixHooks) for (r = t.length; r;) n.event.fixHooks[t[--r]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var n = t.length; n;) this.addEventListener(t[--n], i, !1);
            else this.onmousewheel = i
        },
        teardown: function () {
            if (this.removeEventListener) for (var n = t.length; n;) this.removeEventListener(t[--n], i, !1);
            else this.onmousewheel = null
        }
    }, n.fn.extend({
        mousewheel: function (n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function (n) {
            return this.unbind("mousewheel", n)
        }
    })
})(jQuery),
function (n) {
    n.caretTo = function (n, t) {
        if (n.createTextRange) {
            var i = n.createTextRange();
            i.move("character", t), i.select()
        } else n.selectionStart != null && (n.focus(), n.setSelectionRange(t, t))
    }, n.caretPos = function (n) {
        if ("selection" in document) {
            var t = n.createTextRange();
            try {
                t.setEndPoint("EndToStart", document.selection.createRange())
            } catch (i) {
                return 0
            }
            return t.text.length
        }
        if (n.selectionStart != null) return n.selectionStart
    }, n.fn.caret = function (t, i) {
        return typeof t == "undefined" ? n.caretPos(this.get(0)) : this.queue(function (r) {
            if (isNaN(t)) {
                var u = n(this).val().indexOf(t);
                i === !0 ? u += t.length : typeof i != "undefined" && (u += i), n.caretTo(this, u)
            } else n.caretTo(this, t);
            r()
        })
    }, n.fn.caretToStart = function () {
        return this.caret(0)
    }, n.fn.caretToEnd = function () {
        return this.queue(function (t) {
            n.caretTo(this, n(this).val().length), t()
        })
    }
}(jQuery);
/*!
 * emoji
 *
 * This file auto create by `bin/create_emoji_js.py`.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 * 
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */
Object.keys || (Object.keys = function () {
    var t = Object.prototype.hasOwnProperty,
        r = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        i = n.length;
    return function (u) {
        var e, o, f;
        if (typeof u != "object" && typeof u != "function" || u === null) throw new TypeError("Object.keys called on non-object");
        e = [];
        for (o in u) t.call(u, o) && e.push(o);
        if (r) for (f = 0; f < i; f++) t.call(u, n[f]) && e.push(n[f]);
        return e
    }
}()),
function (n, t) {
    var r = typeof define == "function",
        i = typeof module != "undefined" && module.exports;
    r ? define(t) : i ? module.exports = t() : this[n] = t()
}("jEmoji", function () {
    function f(n) {
        var t = Object.keys(n);
        return t.sort(function (n, t) {
            return t.length - n.length
        }), new RegExp("(" + t.join("|") + ")", "g")
    }
    function ht(n) {
        return e || (e = f(u)), n.replace(e, function (n, t) {
            var i = u[t];
            return '<span class="emoji emoji' + i[2] + '" title="' + i[1] + '"><\/span>'
        })
    }
    function st(n) {
        return o || (o = f(k)), n.replace(o, function (n, t) {
            return k[t]
        })
    }
    function et(n) {
        return c || (c = f(d)), n.replace(c, function (n, t) {
            return d[t]
        })
    }
    function ft(n) {
        return s || (s = f(v)), n.replace(s, function (n, t) {
            return v[t]
        })
    }
    function ut(n) {
        return h || (h = f(a)), n.replace(h, function (n, t) {
            return a[t]
        })
    }
    var n = {}, ct = "AppleColorEmoji",
        u, tt, g, l, b, i, r, w, e, p, rt, t, o, c, s, h;
    n.emojiByCategory = {
        emoji_mark: [
            ["3120e3", "KEYCAP 1"],
            ["3220e3", "KEYCAP 2"],
            ["3320e3", "KEYCAP 3"],
            ["3420e3", "KEYCAP 4"],
            ["3520e3", "KEYCAP 5"],
            ["3620e3", "KEYCAP 6"],
            ["3720e3", "KEYCAP 7"],
            ["3820e3", "KEYCAP 8"],
            ["3920e3", "KEYCAP 9"],
            ["3020e3", "KEYCAP 0"],
            ["1f51f", "KEYCAP TEN"],
            ["1f522", "INPUT SYMBOL FOR NUMBERS"],
            ["2320e3", "HASH KEY"],
            ["1f523", "INPUT SYMBOL FOR SYMBOLS"],
            ["2b06", "UPWARDS BLACK ARROW"],
            ["2b07", "DOWNWARDS BLACK ARROW"],
            ["2b05", "LEFTWARDS BLACK ARROW"],
            ["27a1", "BLACK RIGHTWARDS ARROW"],
            ["1f520", "INPUT SYMBOL FOR LATIN CAPITAL LETTERS"],
            ["1f521", "INPUT SYMBOL FOR LATIN SMALL LETTERS"],
            ["1f524", "INPUT SYMBOL FOR LATIN LETTERS"],
            ["2197", "NORTH EAST ARROW"],
            ["2196", "NORTH WEST ARROW"],
            ["2198", "SOUTH EAST ARROW"],
            ["2199", "SOUTH WEST ARROW"],
            ["2194", "LEFT RIGHT ARROW"],
            ["2195", "UP DOWN ARROW"],
            ["1f504", "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"],
            ["25c0", "BLACK LEFT-POINTING TRIANGLE"],
            ["25b6", "BLACK RIGHT-POINTING TRIANGLE"],
            ["1f53c", "UP-POINTING SMALL RED TRIANGLE"],
            ["1f53d", "DOWN-POINTING SMALL RED TRIANGLE"],
            ["21a9", "LEFTWARDS ARROW WITH HOOK"],
            ["21aa", "RIGHTWARDS ARROW WITH HOOK"],
            ["2139", "INFORMATION SOURCE"],
            ["23ea", "BLACK LEFT-POINTING DOUBLE TRIANGLE"],
            ["23e9", "BLACK RIGHT-POINTING DOUBLE TRIANGLE"],
            ["23eb", "BLACK UP-POINTING DOUBLE TRIANGLE"],
            ["23ec", "BLACK DOWN-POINTING DOUBLE TRIANGLE"],
            ["2935", "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS"],
            ["2934", "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS"],
            ["1f197", "SQUARED OK"],
            ["1f500", "TWISTED RIGHTWARDS ARROWS"],
            ["1f501", "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS"],
            ["1f502", "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY"],
            ["1f195", "SQUARED NEW"],
            ["1f199", "SQUARED UP WITH EXCLAMATION MARK"],
            ["1f192", "SQUARED COOL"],
            ["1f193", "SQUARED FREE"],
            ["1f196", "SQUARED NG"],
            ["1f4f6", "ANTENNA WITH BARS"],
            ["1f3a6", "CINEMA"],
            ["1f201", "SQUARED KATAKANA KOKO"],
            ["1f22f", "SQUARED CJK UNIFIED IDEOGRAPH-6307"],
            ["1f233", "SQUARED CJK UNIFIED IDEOGRAPH-7A7A"],
            ["1f235", "SQUARED CJK UNIFIED IDEOGRAPH-6E80"],
            ["1f234", "SQUARED CJK UNIFIED IDEOGRAPH-5408"],
            ["1f232", "SQUARED CJK UNIFIED IDEOGRAPH-7981"],
            ["1f250", "CIRCLED IDEOGRAPH ADVANTAGE"],
            ["1f239", "SQUARED CJK UNIFIED IDEOGRAPH-5272"],
            ["1f23a", "SQUARED CJK UNIFIED IDEOGRAPH-55B6"],
            ["1f236", "SQUARED CJK UNIFIED IDEOGRAPH-6709"],
            ["1f21a", "SQUARED CJK UNIFIED IDEOGRAPH-7121"],
            ["1f6bb", "RESTROOM"],
            ["1f6b9", "MENS SYMBOL"],
            ["1f6ba", "WOMENS SYMBOL"],
            ["1f6bc", "BABY SYMBOL"],
            ["1f6be", "WATER CLOSET"],
            ["1f6b0", "POTABLE WATER SYMBOL"],
            ["1f6ae", "PUT LITTER IN ITS PLACE SYMBOL"],
            ["1f17f", "NEGATIVE SQUARED LATIN CAPITAL LETTER P"],
            ["267f", "WHEELCHAIR SYMBOL"],
            ["1f6ad", "NO SMOKING SYMBOL"],
            ["1f237", "SQUARED CJK UNIFIED IDEOGRAPH-6708"],
            ["1f238", "SQUARED CJK UNIFIED IDEOGRAPH-7533"],
            ["1f202", "SQUARED KATAKANA SA"],
            ["24c2", "CIRCLED LATIN CAPITAL LETTER M"],
            ["1f6c2", "PASSPORT CONTROL"],
            ["1f6c4", "BAGGAGE CLAIM"],
            ["1f6c5", "LEFT LUGGAGE"],
            ["1f6c3", "CUSTOMS"],
            ["1f251", "CIRCLED IDEOGRAPH ACCEPT"],
            ["3299", "CIRCLED IDEOGRAPH SECRET"],
            ["3297", "CIRCLED IDEOGRAPH CONGRATULATION"],
            ["1f191", "SQUARED CL"],
            ["1f198", "SQUARED SOS"],
            ["1f194", "SQUARED ID"],
            ["1f6ab", "NO ENTRY SIGN"],
            ["1f51e", "NO ONE UNDER EIGHTEEN SYMBOL"],
            ["1f4f5", "NO MOBILE PHONES"],
            ["1f6af", "DO NOT LITTER SYMBOL"],
            ["1f6b1", "NON-POTABLE WATER SYMBOL"],
            ["1f6b3", "NO BICYCLES"],
            ["1f6b7", "NO PEDESTRIANS"],
            ["1f6b8", "CHILDREN CROSSING"],
            ["26d4", "NO ENTRY"],
            ["2733", "EIGHT SPOKED ASTERISK"],
            ["2747", "SPARKLE"],
            ["274e", "NEGATIVE SQUARED CROSS MARK"],
            ["2705", "WHITE HEAVY CHECK MARK"],
            ["2734", "EIGHT POINTED BLACK STAR"],
            ["1f49f", "HEART DECORATION"],
            ["1f19a", "SQUARED VS"],
            ["1f4f3", "VIBRATION MODE"],
            ["1f4f4", "MOBILE PHONE OFF"],
            ["1f170", "NEGATIVE SQUARED LATIN CAPITAL LETTER A"],
            ["1f171", "NEGATIVE SQUARED LATIN CAPITAL LETTER B"],
            ["1f18e", "NEGATIVE SQUARED AB"],
            ["1f17e", "NEGATIVE SQUARED LATIN CAPITAL LETTER O"],
            ["1f4a0", "DIAMOND SHAPE WITH A DOT INSIDE"],
            ["27bf", "DOUBLE CURLY LOOP"],
            ["267b", "BLACK UNIVERSAL RECYCLING SYMBOL"],
            ["2648", "ARIES"],
            ["2649", "TAURUS"],
            ["264a", "GEMINI"],
            ["264b", "CANCER"],
            ["264c", "LEO"],
            ["264d", "VIRGO"],
            ["264e", "LIBRA"],
            ["264f", "SCORPIUS"],
            ["2650", "SAGITTARIUS"],
            ["2651", "CAPRICORN"],
            ["2652", "AQUARIUS"],
            ["2653", "PISCES"],
            ["26ce", "OPHIUCHUS"],
            ["1f52f", "SIX POINTED STAR WITH MIDDLE DOT"],
            ["1f3e7", "AUTOMATED TELLER MACHINE"],
            ["1f4b9", "CHART WITH UPWARDS TREND AND YEN SIGN"],
            ["1f4b2", "HEAVY DOLLAR SIGN"],
            ["1f4b1", "CURRENCY EXCHANGE"],
            ["a9", "COPYRIGHT SIGN"],
            ["ae", "REGISTERED SIGN"],
            ["2122", "TRADE MARK SIGN"],
            ["274c", "CROSS MARK"],
            ["203c", "DOUBLE EXCLAMATION MARK"],
            ["2049", "EXCLAMATION QUESTION MARK"],
            ["2757", "HEAVY EXCLAMATION MARK SYMBOL"],
            ["2753", "BLACK QUESTION MARK ORNAMENT"],
            ["2755", "WHITE EXCLAMATION MARK ORNAMENT"],
            ["2754", "WHITE QUESTION MARK ORNAMENT"],
            ["2b55", "HEAVY LARGE CIRCLE"],
            ["1f51d", "TOP WITH UPWARDS ARROW ABOVE"],
            ["1f51a", "END WITH LEFTWARDS ARROW ABOVE"],
            ["1f519", "BACK WITH LEFTWARDS ARROW ABOVE"],
            ["1f51b", "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE"],
            ["1f51c", "SOON WITH RIGHTWARDS ARROW ABOVE"],
            ["1f503", "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"],
            ["1f55b", "CLOCK FACE TWELVE OCLOCK"],
            ["1f567", "CLOCK FACE TWELVE-THIRTY"],
            ["1f550", "CLOCK FACE ONE OCLOCK"],
            ["1f55c", "CLOCK FACE ONE-THIRTY"],
            ["1f551", "CLOCK FACE TWO OCLOCK"],
            ["1f55d", "CLOCK FACE TWO-THIRTY"],
            ["1f552", "CLOCK FACE THREE OCLOCK"],
            ["1f55e", "CLOCK FACE THREE-THIRTY"],
            ["1f553", "CLOCK FACE FOUR OCLOCK"],
            ["1f55f", "CLOCK FACE FOUR-THIRTY"],
            ["1f554", "CLOCK FACE FIVE OCLOCK"],
            ["1f560", "CLOCK FACE FIVE-THIRTY"],
            ["1f555", "CLOCK FACE SIX OCLOCK"],
            ["1f556", "CLOCK FACE SEVEN OCLOCK"],
            ["1f557", "CLOCK FACE EIGHT OCLOCK"],
            ["1f558", "CLOCK FACE NINE OCLOCK"],
            ["1f559", "CLOCK FACE TEN OCLOCK"],
            ["1f55a", "CLOCK FACE ELEVEN OCLOCK"],
            ["1f561", "CLOCK FACE SIX-THIRTY"],
            ["1f562", "CLOCK FACE SEVEN-THIRTY"],
            ["1f563", "CLOCK FACE EIGHT-THIRTY"],
            ["1f564", "CLOCK FACE NINE-THIRTY"],
            ["1f565", "CLOCK FACE TEN-THIRTY"],
            ["1f566", "CLOCK FACE ELEVEN-THIRTY"],
            ["2716", "HEAVY MULTIPLICATION X"],
            ["2795", "HEAVY PLUS SIGN"],
            ["2796", "HEAVY MINUS SIGN"],
            ["2797", "HEAVY DIVISION SIGN"],
            ["2660", "BLACK SPADE SUIT"],
            ["2665", "BLACK HEART SUIT"],
            ["2663", "BLACK CLUB SUIT"],
            ["2666", "BLACK DIAMOND SUIT"],
            ["1f4ae", "WHITE FLOWER"],
            ["1f4af", "HUNDRED POINTS SYMBOL"],
            ["2714", "HEAVY CHECK MARK"],
            ["2611", "BALLOT BOX WITH CHECK"],
            ["1f518", "RADIO BUTTON"],
            ["1f517", "LINK SYMBOL"],
            ["27b0", "CURLY LOOP"],
            ["3030", "WAVY DASH"],
            ["303d", "PART ALTERNATION MARK"],
            ["1f531", "TRIDENT EMBLEM"],
            ["25fc", "BLACK MEDIUM SQUARE"],
            ["25fb", "WHITE MEDIUM SQUARE"],
            ["25fe", "BLACK MEDIUM SMALL SQUARE"],
            ["25fd", "WHITE MEDIUM SMALL SQUARE"],
            ["25aa", "BLACK SMALL SQUARE"],
            ["25ab", "WHITE SMALL SQUARE"],
            ["1f53a", "UP-POINTING RED TRIANGLE"],
            ["1f532", "BLACK SQUARE BUTTON"],
            ["1f533", "WHITE SQUARE BUTTON"],
            ["26ab", "MEDIUM BLACK CIRCLE"],
            ["26aa", "MEDIUM WHITE CIRCLE"],
            ["1f534", "LARGE RED CIRCLE"],
            ["1f535", "LARGE BLUE CIRCLE"],
            ["1f53b", "DOWN-POINTING RED TRIANGLE"],
            ["2b1c", "WHITE LARGE SQUARE"],
            ["2b1b", "BLACK LARGE SQUARE"],
            ["1f536", "LARGE ORANGE DIAMOND"],
            ["1f537", "LARGE BLUE DIAMOND"],
            ["1f538", "SMALL ORANGE DIAMOND"],
            ["1f539", "SMALL BLUE DIAMOND"]
        ],
        emoji_flower: [
            ["1f436", "DOG FACE"],
            ["1f43a", "WOLF FACE"],
            ["1f431", "CAT FACE"],
            ["1f42d", "MOUSE FACE"],
            ["1f439", "HAMSTER FACE"],
            ["1f430", "RABBIT FACE"],
            ["1f438", "FROG FACE"],
            ["1f42f", "TIGER FACE"],
            ["1f428", "KOALA"],
            ["1f43b", "BEAR FACE"],
            ["1f437", "PIG FACE"],
            ["1f43d", "PIG NOSE"],
            ["1f42e", "COW FACE"],
            ["1f417", "BOAR"],
            ["1f435", "MONKEY FACE"],
            ["1f412", "MONKEY"],
            ["1f434", "HORSE FACE"],
            ["1f411", "SHEEP"],
            ["1f418", "ELEPHANT"],
            ["1f43c", "PANDA FACE"],
            ["1f427", "PENGUIN"],
            ["1f426", "BIRD"],
            ["1f424", "BABY CHICK"],
            ["1f425", "FRONT-FACING BABY CHICK"],
            ["1f423", "HATCHING CHICK"],
            ["1f414", "CHICKEN"],
            ["1f40d", "SNAKE"],
            ["1f422", "TURTLE"],
            ["1f41b", "BUG"],
            ["1f41d", "HONEYBEE"],
            ["1f41c", "ANT"],
            ["1f41e", "LADY BEETLE"],
            ["1f40c", "SNAIL"],
            ["1f419", "OCTOPUS"],
            ["1f41a", "SPIRAL SHELL"],
            ["1f420", "TROPICAL FISH"],
            ["1f41f", "FISH"],
            ["1f42c", "DOLPHIN"],
            ["1f433", "SPOUTING WHALE"],
            ["1f40b", "WHALE"],
            ["1f404", "COW"],
            ["1f40f", "RAM"],
            ["1f400", "RAT"],
            ["1f403", "WATER BUFFALO"],
            ["1f405", "TIGER"],
            ["1f407", "RABBIT"],
            ["1f409", "DRAGON"],
            ["1f40e", "HORSE"],
            ["1f410", "GOAT"],
            ["1f413", "ROOSTER"],
            ["1f415", "DOG"],
            ["1f416", "PIG"],
            ["1f401", "MOUSE"],
            ["1f402", "OX"],
            ["1f432", "DRAGON FACE"],
            ["1f421", "BLOWFISH"],
            ["1f40a", "CROCODILE"],
            ["1f42b", "BACTRIAN CAMEL"],
            ["1f42a", "DROMEDARY CAMEL"],
            ["1f406", "LEOPARD"],
            ["1f408", "CAT"],
            ["1f429", "POODLE"],
            ["1f43e", "PAW PRINTS"],
            ["1f490", "BOUQUET"],
            ["1f338", "CHERRY BLOSSOM"],
            ["1f337", "TULIP"],
            ["1f340", "FOUR LEAF CLOVER"],
            ["1f339", "ROSE"],
            ["1f33b", "SUNFLOWER"],
            ["1f33a", "HIBISCUS"],
            ["1f341", "MAPLE LEAF"],
            ["1f343", "LEAF FLUTTERING IN WIND"],
            ["1f342", "FALLEN LEAF"],
            ["1f33f", "HERB"],
            ["1f33e", "EAR OF RICE"],
            ["1f344", "MUSHROOM"],
            ["1f335", "CACTUS"],
            ["1f334", "PALM TREE"],
            ["1f332", "EVERGREEN TREE"],
            ["1f333", "DECIDUOUS TREE"],
            ["1f330", "CHESTNUT"],
            ["1f331", "SEEDLING"],
            ["1f33c", "BLOSSOM"],
            ["1f310", "GLOBE WITH MERIDIANS"],
            ["1f31e", "SUN WITH FACE"],
            ["1f31d", "FULL MOON WITH FACE"],
            ["1f31a", "NEW MOON WITH FACE"],
            ["1f311", "NEW MOON SYMBOL"],
            ["1f312", "WAXING CRESCENT MOON SYMBOL"],
            ["1f313", "FIRST QUARTER MOON SYMBOL"],
            ["1f314", "WAXING GIBBOUS MOON SYMBOL"],
            ["1f315", "FULL MOON SYMBOL"],
            ["1f316", "WANING GIBBOUS MOON SYMBOL"],
            ["1f317", "LAST QUARTER MOON SYMBOL"],
            ["1f318", "WANING CRESCENT MOON SYMBOL"],
            ["1f31c", "LAST QUARTER MOON WITH FACE"],
            ["1f31b", "FIRST QUARTER MOON WITH FACE"],
            ["1f319", "CRESCENT MOON"],
            ["1f30d", "EARTH GLOBE EUROPE-AFRICA"],
            ["1f30e", "EARTH GLOBE AMERICAS"],
            ["1f30f", "EARTH GLOBE ASIA-AUSTRALIA"],
            ["1f30b", "VOLCANO"],
            ["1f30c", "MILKY WAY"],
            ["1f320", "SHOOTING STAR"],
            ["2b50", "WHITE MEDIUM STAR"],
            ["2600", "BLACK SUN WITH RAYS"],
            ["26c5", "SUN BEHIND CLOUD"],
            ["2601", "CLOUD"],
            ["26a1", "HIGH VOLTAGE SIGN"],
            ["2614", "UMBRELLA WITH RAIN DROPS"],
            ["2744", "SNOWFLAKE"],
            ["26c4", "SNOWMAN WITHOUT SNOW"],
            ["1f300", "CYCLONE"],
            ["1f301", "FOGGY"],
            ["1f308", "RAINBOW"],
            ["1f30a", "WATER WAVE"]
        ],
        emoji_bell: [
            ["1f38d", "PINE DECORATION"],
            ["1f49d", "HEART WITH RIBBON"],
            ["1f38e", "JAPANESE DOLLS"],
            ["1f392", "SCHOOL SATCHEL"],
            ["1f393", "GRADUATION CAP"],
            ["1f38f", "CARP STREAMER"],
            ["1f386", "FIREWORKS"],
            ["1f387", "FIREWORK SPARKLER"],
            ["1f390", "WIND CHIME"],
            ["1f391", "MOON VIEWING CEREMONY"],
            ["1f383", "JACK-O-LANTERN"],
            ["1f47b", "GHOST"],
            ["1f385", "FATHER CHRISTMAS"],
            ["1f384", "CHRISTMAS TREE"],
            ["1f381", "WRAPPED PRESENT"],
            ["1f38b", "TANABATA TREE"],
            ["1f389", "PARTY POPPER"],
            ["1f38a", "CONFETTI BALL"],
            ["1f388", "BALLOON"],
            ["1f38c", "CROSSED FLAGS"],
            ["1f52e", "CRYSTAL BALL"],
            ["1f3a5", "MOVIE CAMERA"],
            ["1f4f7", "CAMERA"],
            ["1f4f9", "VIDEO CAMERA"],
            ["1f4fc", "VIDEOCASSETTE"],
            ["1f4bf", "OPTICAL DISC"],
            ["1f4c0", "DVD"],
            ["1f4bd", "MINIDISC"],
            ["1f4be", "FLOPPY DISK"],
            ["1f4bb", "PERSONAL COMPUTER"],
            ["1f4f1", "MOBILE PHONE"],
            ["260e", "BLACK TELEPHONE"],
            ["1f4de", "TELEPHONE RECEIVER"],
            ["1f4df", "PAGER"],
            ["1f4e0", "FAX MACHINE"],
            ["1f4e1", "SATELLITE ANTENNA"],
            ["1f4fa", "TELEVISION"],
            ["1f4fb", "RADIO"],
            ["1f50a", "SPEAKER WITH THREE SOUND WAVES"],
            ["1f509", "SPEAKER WITH ONE SOUND WAVE"],
            ["1f508", "SPEAKER"],
            ["1f507", "SPEAKER WITH CANCELLATION STROKE"],
            ["1f514", "BELL"],
            ["1f515", "BELL WITH CANCELLATION STROKE"],
            ["1f4e2", "PUBLIC ADDRESS LOUDSPEAKER"],
            ["1f4e3", "CHEERING MEGAPHONE"],
            ["23f3", "HOURGLASS WITH FLOWING SAND"],
            ["231b", "HOURGLASS"],
            ["23f0", "ALARM CLOCK"],
            ["231a", "WATCH"],
            ["1f513", "OPEN LOCK"],
            ["1f512", "LOCK"],
            ["1f50f", "LOCK WITH INK PEN"],
            ["1f510", "CLOSED LOCK WITH KEY"],
            ["1f511", "KEY"],
            ["1f50e", "RIGHT-POINTING MAGNIFYING GLASS"],
            ["1f4a1", "ELECTRIC LIGHT BULB"],
            ["1f526", "ELECTRIC TORCH"],
            ["1f506", "HIGH BRIGHTNESS SYMBOL"],
            ["1f505", "LOW BRIGHTNESS SYMBOL"],
            ["1f50c", "ELECTRIC PLUG"],
            ["1f50b", "BATTERY"],
            ["1f50d", "LEFT-POINTING MAGNIFYING GLASS"],
            ["1f6c1", "BATHTUB"],
            ["1f6c0", "BATH"],
            ["1f6bf", "SHOWER"],
            ["1f6bd", "TOILET"],
            ["1f527", "WRENCH"],
            ["1f529", "NUT AND BOLT"],
            ["1f528", "HAMMER"],
            ["1f6aa", "DOOR"],
            ["1f6ac", "SMOKING SYMBOL"],
            ["1f4a3", "BOMB"],
            ["1f52b", "PISTOL"],
            ["1f52a", "HOCHO"],
            ["1f48a", "PILL"],
            ["1f489", "SYRINGE"],
            ["1f4b0", "MONEY BAG"],
            ["1f4b4", "BANKNOTE WITH YEN SIGN"],
            ["1f4b5", "BANKNOTE WITH DOLLAR SIGN"],
            ["1f4b7", "BANKNOTE WITH POUND SIGN"],
            ["1f4b6", "BANKNOTE WITH EURO SIGN"],
            ["1f4b3", "CREDIT CARD"],
            ["1f4b8", "MONEY WITH WINGS"],
            ["1f4f2", "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT"],
            ["1f4e7", "E-MAIL SYMBOL"],
            ["1f4e5", "INBOX TRAY"],
            ["1f4e4", "OUTBOX TRAY"],
            ["2709", "ENVELOPE"],
            ["1f4e9", "ENVELOPE WITH DOWNWARDS ARROW ABOVE"],
            ["1f4e8", "INCOMING ENVELOPE"],
            ["1f4ef", "POSTAL HORN"],
            ["1f4eb", "CLOSED MAILBOX WITH RAISED FLAG"],
            ["1f4ea", "CLOSED MAILBOX WITH LOWERED FLAG"],
            ["1f4ec", "OPEN MAILBOX WITH RAISED FLAG"],
            ["1f4ed", "OPEN MAILBOX WITH LOWERED FLAG"],
            ["1f4ee", "POSTBOX"],
            ["1f4e6", "PACKAGE"],
            ["1f4dd", "MEMO"],
            ["1f4c4", "PAGE FACING UP"],
            ["1f4c3", "PAGE WITH CURL"],
            ["1f4d1", "BOOKMARK TABS"],
            ["1f4ca", "BAR CHART"],
            ["1f4c8", "CHART WITH UPWARDS TREND"],
            ["1f4c9", "CHART WITH DOWNWARDS TREND"],
            ["1f4dc", "SCROLL"],
            ["1f4cb", "CLIPBOARD"],
            ["1f4c5", "CALENDAR"],
            ["1f4c6", "TEAR-OFF CALENDAR"],
            ["1f4c7", "CARD INDEX"],
            ["1f4c1", "FILE FOLDER"],
            ["1f4c2", "OPEN FILE FOLDER"],
            ["2702", "BLACK SCISSORS"],
            ["1f4cc", "PUSHPIN"],
            ["1f4ce", "PAPERCLIP"],
            ["2712", "BLACK NIB"],
            ["270f", "PENCIL"],
            ["1f4cf", "STRAIGHT RULER"],
            ["1f4d0", "TRIANGULAR RULER"],
            ["1f4d5", "CLOSED BOOK"],
            ["1f4d7", "GREEN BOOK"],
            ["1f4d8", "BLUE BOOK"],
            ["1f4d9", "ORANGE BOOK"],
            ["1f4d3", "NOTEBOOK"],
            ["1f4d4", "NOTEBOOK WITH DECORATIVE COVER"],
            ["1f4d2", "LEDGER"],
            ["1f4da", "BOOKS"],
            ["1f4d6", "OPEN BOOK"],
            ["1f516", "BOOKMARK"],
            ["1f4db", "NAME BADGE"],
            ["1f52c", "MICROSCOPE"],
            ["1f52d", "TELESCOPE"],
            ["1f4f0", "NEWSPAPER"],
            ["1f3a8", "ARTIST PALETTE"],
            ["1f3ac", "CLAPPER BOARD"],
            ["1f3a4", "MICROPHONE"],
            ["1f3a7", "HEADPHONE"],
            ["1f3bc", "MUSICAL SCORE"],
            ["1f3b5", "MUSICAL NOTE"],
            ["1f3b6", "MULTIPLE MUSICAL NOTES"],
            ["1f3b9", "MUSICAL KEYBOARD"],
            ["1f3bb", "VIOLIN"],
            ["1f3ba", "TRUMPET"],
            ["1f3b7", "SAXOPHONE"],
            ["1f3b8", "GUITAR"],
            ["1f47e", "ALIEN MONSTER"],
            ["1f3ae", "VIDEO GAME"],
            ["1f0cf", "PLAYING CARD BLACK JOKER"],
            ["1f3b4", "FLOWER PLAYING CARDS"],
            ["1f004", "MAHJONG TILE RED DRAGON"],
            ["1f3b2", "GAME DIE"],
            ["1f3af", "DIRECT HIT"],
            ["1f3c8", "AMERICAN FOOTBALL"],
            ["1f3c0", "BASKETBALL AND HOOP"],
            ["26bd", "SOCCER BALL"],
            ["26be", "BASEBALL"],
            ["1f3be", "TENNIS RACQUET AND BALL"],
            ["1f3b1", "BILLIARDS"],
            ["1f3c9", "RUGBY FOOTBALL"],
            ["1f3b3", "BOWLING"],
            ["26f3", "FLAG IN HOLE"],
            ["1f6b5", "MOUNTAIN BICYCLIST"],
            ["1f6b4", "BICYCLIST"],
            ["1f3c1", "CHEQUERED FLAG"],
            ["1f3c7", "HORSE RACING"],
            ["1f3c6", "TROPHY"],
            ["1f3bf", "SKI AND SKI BOOT"],
            ["1f3c2", "SNOWBOARDER"],
            ["1f3ca", "SWIMMER"],
            ["1f3c4", "SURFER"],
            ["1f3a3", "FISHING POLE AND FISH"],
            ["2615", "HOT BEVERAGE"],
            ["1f375", "TEACUP WITHOUT HANDLE"],
            ["1f376", "SAKE BOTTLE AND CUP"],
            ["1f37c", "BABY BOTTLE"],
            ["1f37a", "BEER MUG"],
            ["1f37b", "CLINKING BEER MUGS"],
            ["1f378", "COCKTAIL GLASS"],
            ["1f379", "TROPICAL DRINK"],
            ["1f377", "WINE GLASS"],
            ["1f374", "FORK AND KNIFE"],
            ["1f355", "SLICE OF PIZZA"],
            ["1f354", "HAMBURGER"],
            ["1f35f", "FRENCH FRIES"],
            ["1f357", "POULTRY LEG"],
            ["1f356", "MEAT ON BONE"],
            ["1f35d", "SPAGHETTI"],
            ["1f35b", "CURRY AND RICE"],
            ["1f364", "FRIED SHRIMP"],
            ["1f371", "BENTO BOX"],
            ["1f363", "SUSHI"],
            ["1f365", "FISH CAKE WITH SWIRL DESIGN"],
            ["1f359", "RICE BALL"],
            ["1f358", "RICE CRACKER"],
            ["1f35a", "COOKED RICE"],
            ["1f35c", "STEAMING BOWL"],
            ["1f372", "POT OF FOOD"],
            ["1f362", "ODEN"],
            ["1f361", "DANGO"],
            ["1f373", "COOKING"],
            ["1f35e", "BREAD"],
            ["1f369", "DOUGHNUT"],
            ["1f36e", "CUSTARD"],
            ["1f366", "SOFT ICE CREAM"],
            ["1f368", "ICE CREAM"],
            ["1f367", "SHAVED ICE"],
            ["1f382", "BIRTHDAY CAKE"],
            ["1f370", "SHORTCAKE"],
            ["1f36a", "COOKIE"],
            ["1f36b", "CHOCOLATE BAR"],
            ["1f36c", "CANDY"],
            ["1f36d", "LOLLIPOP"],
            ["1f36f", "HONEY POT"],
            ["1f34e", "RED APPLE"],
            ["1f34f", "GREEN APPLE"],
            ["1f34a", "TANGERINE"],
            ["1f34b", "LEMON"],
            ["1f352", "CHERRIES"],
            ["1f347", "GRAPES"],
            ["1f349", "WATERMELON"],
            ["1f353", "STRAWBERRY"],
            ["1f351", "PEACH"],
            ["1f348", "MELON"],
            ["1f34c", "BANANA"],
            ["1f350", "PEAR"],
            ["1f34d", "PINEAPPLE"],
            ["1f360", "ROASTED SWEET POTATO"],
            ["1f346", "AUBERGINE"],
            ["1f345", "TOMATO"],
            ["1f33d", "EAR OF MAIZE"]
        ],
        emoji_car: [
            ["1f3e0", "HOUSE BUILDING"],
            ["1f3e1", "HOUSE WITH GARDEN"],
            ["1f3eb", "SCHOOL"],
            ["1f3e2", "OFFICE BUILDING"],
            ["1f3e3", "JAPANESE POST OFFICE"],
            ["1f3e5", "HOSPITAL"],
            ["1f3e6", "BANK"],
            ["1f3ea", "CONVENIENCE STORE"],
            ["1f3e9", "LOVE HOTEL"],
            ["1f3e8", "HOTEL"],
            ["1f492", "WEDDING"],
            ["26ea", "CHURCH"],
            ["1f3ec", "DEPARTMENT STORE"],
            ["1f3e4", "EUROPEAN POST OFFICE"],
            ["1f307", "SUNSET OVER BUILDINGS"],
            ["1f306", "CITYSCAPE AT DUSK"],
            ["1f3ef", "JAPANESE CASTLE"],
            ["1f3f0", "EUROPEAN CASTLE"],
            ["26fa", "TENT"],
            ["1f3ed", "FACTORY"],
            ["1f5fc", "TOKYO TOWER"],
            ["1f5fe", "SILHOUETTE OF JAPAN"],
            ["1f5fb", "MOUNT FUJI"],
            ["1f304", "SUNRISE OVER MOUNTAINS"],
            ["1f305", "SUNRISE"],
            ["1f303", "NIGHT WITH STARS"],
            ["1f5fd", "STATUE OF LIBERTY"],
            ["1f309", "BRIDGE AT NIGHT"],
            ["1f3a0", "CAROUSEL HORSE"],
            ["1f3a1", "FERRIS WHEEL"],
            ["26f2", "FOUNTAIN"],
            ["1f3a2", "ROLLER COASTER"],
            ["1f6a2", "SHIP"],
            ["26f5", "SAILBOAT"],
            ["1f6a4", "SPEEDBOAT"],
            ["1f6a3", "ROWBOAT"],
            ["2693", "ANCHOR"],
            ["1f680", "ROCKET"],
            ["2708", "AIRPLANE"],
            ["1f4ba", "SEAT"],
            ["1f681", "HELICOPTER"],
            ["1f682", "STEAM LOCOMOTIVE"],
            ["1f68a", "TRAM"],
            ["1f689", "STATION"],
            ["1f69e", "MOUNTAIN RAILWAY"],
            ["1f686", "TRAIN"],
            ["1f684", "HIGH-SPEED TRAIN"],
            ["1f685", "HIGH-SPEED TRAIN WITH BULLET NOSE"],
            ["1f688", "LIGHT RAIL"],
            ["1f687", "METRO"],
            ["1f69d", "MONORAIL"],
            ["1f68b", "TRAM CAR"],
            ["1f683", "RAILWAY CAR"],
            ["1f68e", "TROLLEYBUS"],
            ["1f68c", "BUS"],
            ["1f68d", "ONCOMING BUS"],
            ["1f699", "RECREATIONAL VEHICLE"],
            ["1f698", "ONCOMING AUTOMOBILE"],
            ["1f697", "AUTOMOBILE"],
            ["1f695", "TAXI"],
            ["1f696", "ONCOMING TAXI"],
            ["1f69b", "ARTICULATED LORRY"],
            ["1f69a", "DELIVERY TRUCK"],
            ["1f6a8", "POLICE CARS REVOLVING LIGHT"],
            ["1f693", "POLICE CAR"],
            ["1f694", "ONCOMING POLICE CAR"],
            ["1f692", "FIRE ENGINE"],
            ["1f691", "AMBULANCE"],
            ["1f690", "MINIBUS"],
            ["1f6b2", "BICYCLE"],
            ["1f6a1", "AERIAL TRAMWAY"],
            ["1f69f", "SUSPENSION RAILWAY"],
            ["1f6a0", "MOUNTAIN CABLEWAY"],
            ["1f69c", "TRACTOR"],
            ["1f488", "BARBER POLE"],
            ["1f68f", "BUS STOP"],
            ["1f3ab", "TICKET"],
            ["1f6a6", "VERTICAL TRAFFIC LIGHT"],
            ["1f6a5", "HORIZONTAL TRAFFIC LIGHT"],
            ["26a0", "WARNING SIGN"],
            ["1f6a7", "CONSTRUCTION SIGN"],
            ["1f530", "JAPANESE SYMBOL FOR BEGINNER"],
            ["26fd", "FUEL PUMP"],
            ["1f3ee", "IZAKAYA LANTERN"],
            ["1f3b0", "SLOT MACHINE"],
            ["2668", "HOT SPRINGS"],
            ["1f5ff", "MOYAI"],
            ["1f3aa", "CIRCUS TENT"],
            ["1f3ad", "PERFORMING ARTS"],
            ["1f4cd", "ROUND PUSHPIN"],
            ["1f6a9", "TRIANGULAR FLAG ON POST"],
            ["1f1ef;1f1f5", "REGIONAL INDICATOR SYMBOL LETTERS JP"],
            ["1f1f0;1f1f7", "REGIONAL INDICATOR SYMBOL LETTERS KR"],
            ["1f1e9;1f1ea", "REGIONAL INDICATOR SYMBOL LETTERS DE"],
            ["1f1e8;1f1f3", "REGIONAL INDICATOR SYMBOL LETTERS CN"],
            ["1f1fa;1f1f8", "REGIONAL INDICATOR SYMBOL LETTERS US"],
            ["1f1eb;1f1f7", "REGIONAL INDICATOR SYMBOL LETTERS FR"],
            ["1f1ea;1f1f8", "REGIONAL INDICATOR SYMBOL LETTERS ES"],
            ["1f1ee;1f1f9", "REGIONAL INDICATOR SYMBOL LETTERS IT"],
            ["1f1f7;1f1fa", "REGIONAL INDICATOR SYMBOL LETTERS RU"],
            ["1f1ec;1f1e7", "REGIONAL INDICATOR SYMBOL LETTERS GB"]
        ],
        emoji_face: [
            ["1f604", "SMILING FACE WITH OPEN MOUTH AND SMILING EYES"],
            ["1f603", "SMILING FACE WITH OPEN MOUTH"],
            ["1f600", "GRINNING FACE"],
            ["1f60a", "SMILING FACE WITH SMILING EYES"],
            ["263a", "WHITE SMILING FACE"],
            ["1f609", "WINKING FACE"],
            ["1f60d", "SMILING FACE WITH HEART-SHAPED EYES"],
            ["1f618", "FACE THROWING A KISS"],
            ["1f61a", "KISSING FACE WITH CLOSED EYES"],
            ["1f617", "KISSING FACE"],
            ["1f619", "KISSING FACE WITH SMILING EYES"],
            ["1f61c", "FACE WITH STUCK-OUT TONGUE AND WINKING EYE"],
            ["1f61d", "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES"],
            ["1f61b", "FACE WITH STUCK-OUT TONGUE"],
            ["1f633", "FLUSHED FACE"],
            ["1f601", "GRINNING FACE WITH SMILING EYES"],
            ["1f614", "PENSIVE FACE"],
            ["1f60c", "RELIEVED FACE"],
            ["1f612", "UNAMUSED FACE"],
            ["1f61e", "DISAPPOINTED FACE"],
            ["1f623", "PERSEVERING FACE"],
            ["1f622", "CRYING FACE"],
            ["1f602", "FACE WITH TEARS OF JOY"],
            ["1f62d", "LOUDLY CRYING FACE"],
            ["1f62a", "SLEEPY FACE"],
            ["1f625", "DISAPPOINTED BUT RELIEVED FACE"],
            ["1f630", "FACE WITH OPEN MOUTH AND COLD SWEAT"],
            ["1f605", "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT"],
            ["1f613", "FACE WITH COLD SWEAT"],
            ["1f629", "WEARY FACE"],
            ["1f62b", "TIRED FACE"],
            ["1f628", "FEARFUL FACE"],
            ["1f631", "FACE SCREAMING IN FEAR"],
            ["1f620", "ANGRY FACE"],
            ["1f621", "POUTING FACE"],
            ["1f624", "FACE WITH LOOK OF TRIUMPH"],
            ["1f616", "CONFOUNDED FACE"],
            ["1f606", "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"],
            ["1f60b", "FACE SAVOURING DELICIOUS FOOD"],
            ["1f637", "FACE WITH MEDICAL MASK"],
            ["1f60e", "SMILING FACE WITH SUNGLASSES"],
            ["1f634", "SLEEPING FACE"],
            ["1f635", "DIZZY FACE"],
            ["1f632", "ASTONISHED FACE"],
            ["1f61f", "WORRIED FACE"],
            ["1f626", "FROWNING FACE WITH OPEN MOUTH"],
            ["1f627", "ANGUISHED FACE"],
            ["1f608", "SMILING FACE WITH HORNS"],
            ["1f47f", "IMP"],
            ["1f62e", "FACE WITH OPEN MOUTH"],
            ["1f62c", "GRIMACING FACE"],
            ["1f610", "NEUTRAL FACE"],
            ["1f615", "CONFUSED FACE"],
            ["1f62f", "HUSHED FACE"],
            ["1f636", "FACE WITHOUT MOUTH"],
            ["1f607", "SMILING FACE WITH HALO"],
            ["1f60f", "SMIRKING FACE"],
            ["1f611", "EXPRESSIONLESS FACE"],
            ["1f472", "MAN WITH GUA PI MAO"],
            ["1f473", "MAN WITH TURBAN"],
            ["1f46e", "POLICE OFFICER"],
            ["1f477", "CONSTRUCTION WORKER"],
            ["1f482", "GUARDSMAN"],
            ["1f476", "BABY"],
            ["1f466", "BOY"],
            ["1f467", "GIRL"],
            ["1f468", "MAN"],
            ["1f469", "WOMAN"],
            ["1f474", "OLDER MAN"],
            ["1f475", "OLDER WOMAN"],
            ["1f471", "PERSON WITH BLOND HAIR"],
            ["1f47c", "BABY ANGEL"],
            ["1f478", "PRINCESS"],
            ["1f63a", "SMILING CAT FACE WITH OPEN MOUTH"],
            ["1f638", "GRINNING CAT FACE WITH SMILING EYES"],
            ["1f63b", "SMILING CAT FACE WITH HEART-SHAPED EYES"],
            ["1f63d", "KISSING CAT FACE WITH CLOSED EYES"],
            ["1f63c", "CAT FACE WITH WRY SMILE"],
            ["1f640", "WEARY CAT FACE"],
            ["1f63f", "CRYING CAT FACE"],
            ["1f639", "CAT FACE WITH TEARS OF JOY"],
            ["1f63e", "POUTING CAT FACE"],
            ["1f479", "JAPANESE OGRE"],
            ["1f47a", "JAPANESE GOBLIN"],
            ["1f648", "SEE-NO-EVIL MONKEY"],
            ["1f649", "HEAR-NO-EVIL MONKEY"],
            ["1f64a", "SPEAK-NO-EVIL MONKEY"],
            ["1f480", "SKULL"],
            ["1f47d", "EXTRATERRESTRIAL ALIEN"],
            ["1f4a9", "PILE OF POO"],
            ["1f525", "FIRE"],
            ["2728", "SPARKLES"],
            ["1f31f", "GLOWING STAR"],
            ["1f4ab", "DIZZY SYMBOL"],
            ["1f4a5", "COLLISION SYMBOL"],
            ["1f4a2", "ANGER SYMBOL"],
            ["1f4a6", "SPLASHING SWEAT SYMBOL"],
            ["1f4a7", "DROPLET"],
            ["1f4a4", "SLEEPING SYMBOL"],
            ["1f4a8", "DASH SYMBOL"],
            ["1f442", "EAR"],
            ["1f440", "EYES"],
            ["1f443", "NOSE"],
            ["1f445", "TONGUE"],
            ["1f444", "MOUTH"],
            ["1f44d", "THUMBS UP SIGN"],
            ["1f44e", "THUMBS DOWN SIGN"],
            ["1f44c", "OK HAND SIGN"],
            ["1f44a", "FISTED HAND SIGN"],
            ["270a", "RAISED FIST"],
            ["270c", "VICTORY HAND"],
            ["1f44b", "WAVING HAND SIGN"],
            ["270b", "RAISED HAND"],
            ["1f450", "OPEN HANDS SIGN"],
            ["1f446", "WHITE UP POINTING BACKHAND INDEX"],
            ["1f447", "WHITE DOWN POINTING BACKHAND INDEX"],
            ["1f449", "WHITE RIGHT POINTING BACKHAND INDEX"],
            ["1f448", "WHITE LEFT POINTING BACKHAND INDEX"],
            ["1f64c", "PERSON RAISING BOTH HANDS IN CELEBRATION"],
            ["1f64f", "PERSON WITH FOLDED HANDS"],
            ["261d", "WHITE UP POINTING INDEX"],
            ["1f44f", "CLAPPING HANDS SIGN"],
            ["1f4aa", "FLEXED BICEPS"],
            ["1f6b6", "PEDESTRIAN"],
            ["1f3c3", "RUNNER"],
            ["1f483", "DANCER"],
            ["1f46b", "MAN AND WOMAN HOLDING HANDS"],
            ["1f46a", "FAMILY"],
            ["1f46c", "TWO MEN HOLDING HANDS"],
            ["1f46d", "TWO WOMEN HOLDING HANDS"],
            ["1f48f", "KISS"],
            ["1f491", "COUPLE WITH HEART"],
            ["1f46f", "WOMAN WITH BUNNY EARS"],
            ["1f646", "FACE WITH OK GESTURE"],
            ["1f645", "FACE WITH NO GOOD GESTURE"],
            ["1f481", "INFORMATION DESK PERSON"],
            ["1f64b", "HAPPY PERSON RAISING ONE HAND"],
            ["1f486", "FACE MASSAGE"],
            ["1f487", "HAIRCUT"],
            ["1f485", "NAIL POLISH"],
            ["1f470", "BRIDE WITH VEIL"],
            ["1f64e", "PERSON WITH POUTING FACE"],
            ["1f64d", "PERSON FROWNING"],
            ["1f647", "PERSON BOWING DEEPLY"],
            ["1f3a9", "TOP HAT"],
            ["1f451", "CROWN"],
            ["1f452", "WOMANS HAT"],
            ["1f45f", "ATHLETIC SHOE"],
            ["1f45e", "MANS SHOE"],
            ["1f461", "WOMANS SANDAL"],
            ["1f460", "HIGH-HEELED SHOE"],
            ["1f462", "WOMANS BOOTS"],
            ["1f455", "T-SHIRT"],
            ["1f454", "NECKTIE"],
            ["1f45a", "WOMANS CLOTHES"],
            ["1f457", "DRESS"],
            ["1f3bd", "RUNNING SHIRT WITH SASH"],
            ["1f456", "JEANS"],
            ["1f458", "KIMONO"],
            ["1f459", "BIKINI"],
            ["1f4bc", "BRIEFCASE"],
            ["1f45c", "HANDBAG"],
            ["1f45d", "POUCH"],
            ["1f45b", "PURSE"],
            ["1f453", "EYEGLASSES"],
            ["1f380", "RIBBON"],
            ["1f302", "CLOSED UMBRELLA"],
            ["1f484", "LIPSTICK"],
            ["1f49b", "YELLOW HEART"],
            ["1f499", "BLUE HEART"],
            ["1f49c", "PURPLE HEART"],
            ["1f49a", "GREEN HEART"],
            ["2764", "HEAVY BLACK HEART"],
            ["1f494", "BROKEN HEART"],
            ["1f497", "GROWING HEART"],
            ["1f493", "BEATING HEART"],
            ["1f495", "TWO HEARTS"],
            ["1f496", "SPARKLING HEART"],
            ["1f49e", "REVOLVING HEARTS"],
            ["1f498", "HEART WITH ARROW"],
            ["1f48c", "LOVE LETTER"],
            ["1f48b", "KISS MARK"],
            ["1f48d", "RING"],
            ["1f48e", "GEM STONE"],
            ["1f464", "BUST IN SILHOUETTE"],
            ["1f465", "BUSTS IN SILHOUETTE"],
            ["1f4ac", "SPEECH BALLOON"],
            ["1f463", "FOOTPRINTS"],
            ["1f4ad", "THOUGHT BALLOON"]
        ]
    }, u = n.EMOJI_MAP = {
        "👬": ["U+1F46C", "man and man holding hands", "1f46c", ["-", "-"],
            ["-", "-"],
            ["", "U+E428"],
            ["󾆠", "U+FE1A0"]
        ],
        "👭": ["U+1F46D", "woman and woman holding hands", "1f46d", ["-", "-"],
            ["-", "-"],
            ["", "U+E428"],
            ["󾆠", "U+FE1A0"]
        ],
        "🌲": ["U+1F332", "evergreen tree", "1f332", ["-", "-"],
            ["", "U+EB49"],
            ["", "U+E305"],
            ["󾁍", "U+FE04D"]
        ],
        "🌳": ["U+1F333", "deciduous tree", "1f333", ["-", "-"],
            ["", "U+EB49"],
            ["", "U+E305"],
            ["󾁍", "U+FE04D"]
        ],
        "🍋": ["U+1F34B", "lemon", "1f34b", ["-", "-"],
            ["", "U+EABA"],
            ["", "U+E346"],
            ["󾁒", "U+FE052"]
        ],
        "😎": ["U+1F60E", "smiling face with sunglasses", "1f60e", ["", "U+E726"],
            ["", "U+E5C4"],
            ["", "U+E106"],
            ["󾌧", "U+FE327"]
        ],
        "😀": ["U+1F600", "grinning face", "1f600", ["", "U+E753"],
            ["", "U+EB80"],
            ["", "U+E404"],
            ["󾌳", "U+FE333"]
        ],
        "☁": ["U+2601", "cloud", "2601", ["", "U+E63F"],
            ["", "U+E48D"],
            ["", "U+E049"],
            ["󾀁", "U+FE001"]
        ],
        "☔": ["U+2614", "umbrella with rain drops", "2614", ["", "U+E640"],
            ["", "U+E48C"],
            ["", "U+E04B"],
            ["󾀂", "U+FE002"]
        ],
        "⛄": ["U+26C4", "snowman without snow", "26c4", ["", "U+E641"],
            ["", "U+E485"],
            ["", "U+E048"],
            ["󾀃", "U+FE003"]
        ],
        "⚡": ["U+26A1", "high voltage sign", "26a1", ["", "U+E642"],
            ["", "U+E487"],
            ["", "U+E13D"],
            ["󾀄", "U+FE004"]
        ],
        "🌀": ["U+1F300", "cyclone", "1f300", ["", "U+E643"],
            ["", "U+E469"],
            ["", "U+E443"],
            ["󾀅", "U+FE005"]
        ],
        "🌁": ["U+1F301", "foggy", "1f301", ["", "U+E644"],
            ["", "U+E598"],
            ["-", "-"],
            ["󾀆", "U+FE006"]
        ],
        "🌂": ["U+1F302", "closed umbrella", "1f302", ["", "U+E645"],
            ["", "U+EAE8"],
            ["", "U+E43C"],
            ["󾀇", "U+FE007"]
        ],
        "🌃": ["U+1F303", "night with stars", "1f303", ["", "U+E6B3"],
            ["", "U+EAF1"],
            ["", "U+E44B"],
            ["󾀈", "U+FE008"]
        ],
        "🌄": ["U+1F304", "sunrise over mountains", "1f304", ["", "U+E63E"],
            ["", "U+EAF4"],
            ["", "U+E04D"],
            ["󾀉", "U+FE009"]
        ],
        "🌅": ["U+1F305", "sunrise", "1f305", ["", "U+E63E"],
            ["", "U+EAF4"],
            ["", "U+E449"],
            ["󾀊", "U+FE00A"]
        ],
        "🌆": ["U+1F306", "cityscape at dusk", "1f306", ["-", "-"],
            ["", "U+E5DA"],
            ["", "U+E146"],
            ["󾀋", "U+FE00B"]
        ],
        "🌇": ["U+1F307", "sunset over buildings", "1f307", ["", "U+E63E"],
            ["", "U+E5DA"],
            ["", "U+E44A"],
            ["󾀌", "U+FE00C"]
        ],
        "🌈": ["U+1F308", "rainbow", "1f308", ["-", "-"],
            ["", "U+EAF2"],
            ["", "U+E44C"],
            ["󾀍", "U+FE00D"]
        ],
        "❄": ["U+2744", "snowflake", "2744", ["-", "-"],
            ["", "U+E48A"],
            ["-", "-"],
            ["󾀎", "U+FE00E"]
        ],
        "⛅": ["U+26C5", "sun behind cloud", "26c5", ["", "U+E63E U+E63F"],
            ["", "U+E48E"],
            ["", "U+E04A U+E049"],
            ["󾀏", "U+FE00F"]
        ],
        "🌉": ["U+1F309", "bridge at night", "1f309", ["", "U+E6B3"],
            ["", "U+E4BF"],
            ["", "U+E44B"],
            ["󾀐", "U+FE010"]
        ],
        "🌊": ["U+1F30A", "water wave", "1f30a", ["", "U+E73F"],
            ["", "U+EB7C"],
            ["", "U+E43E"],
            ["󾀸", "U+FE038"]
        ],
        "🌋": ["U+1F30B", "volcano", "1f30b", ["-", "-"],
            ["", "U+EB53"],
            ["-", "-"],
            ["󾀺", "U+FE03A"]
        ],
        "🌌": ["U+1F30C", "milky way", "1f30c", ["", "U+E6B3"],
            ["", "U+EB5F"],
            ["", "U+E44B"],
            ["󾀻", "U+FE03B"]
        ],
        "🌏": ["U+1F30F", "earth globe asia-australia", "1f30f", ["-", "-"],
            ["", "U+E5B3"],
            ["-", "-"],
            ["󾀹", "U+FE039"]
        ],
        "🌑": ["U+1F311", "new moon symbol", "1f311", ["", "U+E69C"],
            ["", "U+E5A8"],
            ["-", "-"],
            ["󾀑", "U+FE011"]
        ],
        "🌔": ["U+1F314", "waxing gibbous moon symbol", "1f314", ["", "U+E69D"],
            ["", "U+E5A9"],
            ["", "U+E04C"],
            ["󾀒", "U+FE012"]
        ],
        "🌓": ["U+1F313", "first quarter moon symbol", "1f313", ["", "U+E69E"],
            ["", "U+E5AA"],
            ["", "U+E04C"],
            ["󾀓", "U+FE013"]
        ],
        "🌙": ["U+1F319", "crescent moon", "1f319", ["", "U+E69F"],
            ["", "U+E486"],
            ["", "U+E04C"],
            ["󾀔", "U+FE014"]
        ],
        "🌕": ["U+1F315", "full moon symbol", "1f315", ["", "U+E6A0"],
            ["-", "-"],
            ["-", "-"],
            ["󾀕", "U+FE015"]
        ],
        "🌛": ["U+1F31B", "first quarter moon with face", "1f31b", ["", "U+E69E"],
            ["", "U+E489"],
            ["", "U+E04C"],
            ["󾀖", "U+FE016"]
        ],
        "🌟": ["U+1F31F", "glowing star", "1f31f", ["-", "-"],
            ["", "U+E48B"],
            ["", "U+E335"],
            ["󾭩", "U+FEB69"]
        ],
        "🌠": ["U+1F320", "shooting star", "1f320", ["-", "-"],
            ["", "U+E468"],
            ["-", "-"],
            ["󾭪", "U+FEB6A"]
        ],
        "🕐": ["U+1F550", "clock face one oclock", "1f550", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E024"],
            ["󾀞", "U+FE01E"]
        ],
        "🕑": ["U+1F551", "clock face two oclock", "1f551", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E025"],
            ["󾀟", "U+FE01F"]
        ],
        "🕒": ["U+1F552", "clock face three oclock", "1f552", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E026"],
            ["󾀠", "U+FE020"]
        ],
        "🕓": ["U+1F553", "clock face four oclock", "1f553", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E027"],
            ["󾀡", "U+FE021"]
        ],
        "🕔": ["U+1F554", "clock face five oclock", "1f554", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E028"],
            ["󾀢", "U+FE022"]
        ],
        "🕕": ["U+1F555", "clock face six oclock", "1f555", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E029"],
            ["󾀣", "U+FE023"]
        ],
        "🕖": ["U+1F556", "clock face seven oclock", "1f556", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02A"],
            ["󾀤", "U+FE024"]
        ],
        "🕗": ["U+1F557", "clock face eight oclock", "1f557", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02B"],
            ["󾀥", "U+FE025"]
        ],
        "🕘": ["U+1F558", "clock face nine oclock", "1f558", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02C"],
            ["󾀦", "U+FE026"]
        ],
        "🕙": ["U+1F559", "clock face ten oclock", "1f559", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02D"],
            ["󾀧", "U+FE027"]
        ],
        "🕚": ["U+1F55A", "clock face eleven oclock", "1f55a", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02E"],
            ["󾀨", "U+FE028"]
        ],
        "🕛": ["U+1F55B", "clock face twelve oclock", "1f55b", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02F"],
            ["󾀩", "U+FE029"]
        ],
        "⌚": ["U+231A", "watch", "231a", ["", "U+E71F"],
            ["", "U+E57A"],
            ["-", "-"],
            ["󾀝", "U+FE01D"]
        ],
        "⌛": ["U+231B", "hourglass", "231b", ["", "U+E71C"],
            ["", "U+E57B"],
            ["-", "-"],
            ["󾀜", "U+FE01C"]
        ],
        "⏰": ["U+23F0", "alarm clock", "23f0", ["", "U+E6BA"],
            ["", "U+E594"],
            ["", "U+E02D"],
            ["󾀪", "U+FE02A"]
        ],
        "⏳": ["U+23F3", "hourglass with flowing sand", "23f3", ["", "U+E71C"],
            ["", "U+E47C"],
            ["-", "-"],
            ["󾀛", "U+FE01B"]
        ],
        "♈": ["U+2648", "aries", "2648", ["", "U+E646"],
            ["", "U+E48F"],
            ["", "U+E23F"],
            ["󾀫", "U+FE02B"]
        ],
        "♉": ["U+2649", "taurus", "2649", ["", "U+E647"],
            ["", "U+E490"],
            ["", "U+E240"],
            ["󾀬", "U+FE02C"]
        ],
        "♊": ["U+264A", "gemini", "264a", ["", "U+E648"],
            ["", "U+E491"],
            ["", "U+E241"],
            ["󾀭", "U+FE02D"]
        ],
        "♋": ["U+264B", "cancer", "264b", ["", "U+E649"],
            ["", "U+E492"],
            ["", "U+E242"],
            ["󾀮", "U+FE02E"]
        ],
        "♌": ["U+264C", "leo", "264c", ["", "U+E64A"],
            ["", "U+E493"],
            ["", "U+E243"],
            ["󾀯", "U+FE02F"]
        ],
        "♍": ["U+264D", "virgo", "264d", ["", "U+E64B"],
            ["", "U+E494"],
            ["", "U+E244"],
            ["󾀰", "U+FE030"]
        ],
        "♎": ["U+264E", "libra", "264e", ["", "U+E64C"],
            ["", "U+E495"],
            ["", "U+E245"],
            ["󾀱", "U+FE031"]
        ],
        "♏": ["U+264F", "scorpius", "264f", ["", "U+E64D"],
            ["", "U+E496"],
            ["", "U+E246"],
            ["󾀲", "U+FE032"]
        ],
        "♐": ["U+2650", "sagittarius", "2650", ["", "U+E64E"],
            ["", "U+E497"],
            ["", "U+E247"],
            ["󾀳", "U+FE033"]
        ],
        "♑": ["U+2651", "capricorn", "2651", ["", "U+E64F"],
            ["", "U+E498"],
            ["", "U+E248"],
            ["󾀴", "U+FE034"]
        ],
        "♒": ["U+2652", "aquarius", "2652", ["", "U+E650"],
            ["", "U+E499"],
            ["", "U+E249"],
            ["󾀵", "U+FE035"]
        ],
        "♓": ["U+2653", "pisces", "2653", ["", "U+E651"],
            ["", "U+E49A"],
            ["", "U+E24A"],
            ["󾀶", "U+FE036"]
        ],
        "⛎": ["U+26CE", "ophiuchus", "26ce", ["-", "-"],
            ["", "U+E49B"],
            ["", "U+E24B"],
            ["󾀷", "U+FE037"]
        ],
        "🍀": ["U+1F340", "four leaf clover", "1f340", ["", "U+E741"],
            ["", "U+E513"],
            ["", "U+E110"],
            ["󾀼", "U+FE03C"]
        ],
        "🌷": ["U+1F337", "tulip", "1f337", ["", "U+E743"],
            ["", "U+E4E4"],
            ["", "U+E304"],
            ["󾀽", "U+FE03D"]
        ],
        "🌱": ["U+1F331", "seedling", "1f331", ["", "U+E746"],
            ["", "U+EB7D"],
            ["", "U+E110"],
            ["󾀾", "U+FE03E"]
        ],
        "🍁": ["U+1F341", "maple leaf", "1f341", ["", "U+E747"],
            ["", "U+E4CE"],
            ["", "U+E118"],
            ["󾀿", "U+FE03F"]
        ],
        "🌸": ["U+1F338", "cherry blossom", "1f338", ["", "U+E748"],
            ["", "U+E4CA"],
            ["", "U+E030"],
            ["󾁀", "U+FE040"]
        ],
        "🌹": ["U+1F339", "rose", "1f339", ["-", "-"],
            ["", "U+E5BA"],
            ["", "U+E032"],
            ["󾁁", "U+FE041"]
        ],
        "🍂": ["U+1F342", "fallen leaf", "1f342", ["", "U+E747"],
            ["", "U+E5CD"],
            ["", "U+E119"],
            ["󾁂", "U+FE042"]
        ],
        "🍃": ["U+1F343", "leaf fluttering in wind", "1f343", ["-", "-"],
            ["", "U+E5CD"],
            ["", "U+E447"],
            ["󾁃", "U+FE043"]
        ],
        "🌺": ["U+1F33A", "hibiscus", "1f33a", ["-", "-"],
            ["", "U+EA94"],
            ["", "U+E303"],
            ["󾁅", "U+FE045"]
        ],
        "🌻": ["U+1F33B", "sunflower", "1f33b", ["-", "-"],
            ["", "U+E4E3"],
            ["", "U+E305"],
            ["󾁆", "U+FE046"]
        ],
        "🌴": ["U+1F334", "palm tree", "1f334", ["-", "-"],
            ["", "U+E4E2"],
            ["", "U+E307"],
            ["󾁇", "U+FE047"]
        ],
        "🌵": ["U+1F335", "cactus", "1f335", ["-", "-"],
            ["", "U+EA96"],
            ["", "U+E308"],
            ["󾁈", "U+FE048"]
        ],
        "🌾": ["U+1F33E", "ear of rice", "1f33e", ["-", "-"],
            ["-", "-"],
            ["", "U+E444"],
            ["󾁉", "U+FE049"]
        ],
        "🌽": ["U+1F33D", "ear of maize", "1f33d", ["-", "-"],
            ["", "U+EB36"],
            ["-", "-"],
            ["󾁊", "U+FE04A"]
        ],
        "🍄": ["U+1F344", "mushroom", "1f344", ["-", "-"],
            ["", "U+EB37"],
            ["-", "-"],
            ["󾁋", "U+FE04B"]
        ],
        "🌰": ["U+1F330", "chestnut", "1f330", ["-", "-"],
            ["", "U+EB38"],
            ["-", "-"],
            ["󾁌", "U+FE04C"]
        ],
        "🌼": ["U+1F33C", "blossom", "1f33c", ["-", "-"],
            ["", "U+EB49"],
            ["", "U+E305"],
            ["󾁍", "U+FE04D"]
        ],
        "🌿": ["U+1F33F", "herb", "1f33f", ["", "U+E741"],
            ["", "U+EB82"],
            ["", "U+E110"],
            ["󾁎", "U+FE04E"]
        ],
        "🍒": ["U+1F352", "cherries", "1f352", ["", "U+E742"],
            ["", "U+E4D2"],
            ["-", "-"],
            ["󾁏", "U+FE04F"]
        ],
        "🍌": ["U+1F34C", "banana", "1f34c", ["", "U+E744"],
            ["", "U+EB35"],
            ["-", "-"],
            ["󾁐", "U+FE050"]
        ],
        "🍎": ["U+1F34E", "red apple", "1f34e", ["", "U+E745"],
            ["", "U+EAB9"],
            ["", "U+E345"],
            ["󾁑", "U+FE051"]
        ],
        "🍊": ["U+1F34A", "tangerine", "1f34a", ["-", "-"],
            ["", "U+EABA"],
            ["", "U+E346"],
            ["󾁒", "U+FE052"]
        ],
        "🍓": ["U+1F353", "strawberry", "1f353", ["-", "-"],
            ["", "U+E4D4"],
            ["", "U+E347"],
            ["󾁓", "U+FE053"]
        ],
        "🍉": ["U+1F349", "watermelon", "1f349", ["-", "-"],
            ["", "U+E4CD"],
            ["", "U+E348"],
            ["󾁔", "U+FE054"]
        ],
        "🍅": ["U+1F345", "tomato", "1f345", ["-", "-"],
            ["", "U+EABB"],
            ["", "U+E349"],
            ["󾁕", "U+FE055"]
        ],
        "🍆": ["U+1F346", "aubergine", "1f346", ["-", "-"],
            ["", "U+EABC"],
            ["", "U+E34A"],
            ["󾁖", "U+FE056"]
        ],
        "🍈": ["U+1F348", "melon", "1f348", ["-", "-"],
            ["", "U+EB32"],
            ["-", "-"],
            ["󾁗", "U+FE057"]
        ],
        "🍍": ["U+1F34D", "pineapple", "1f34d", ["-", "-"],
            ["", "U+EB33"],
            ["-", "-"],
            ["󾁘", "U+FE058"]
        ],
        "🍇": ["U+1F347", "grapes", "1f347", ["-", "-"],
            ["", "U+EB34"],
            ["-", "-"],
            ["󾁙", "U+FE059"]
        ],
        "🍑": ["U+1F351", "peach", "1f351", ["-", "-"],
            ["", "U+EB39"],
            ["-", "-"],
            ["󾁚", "U+FE05A"]
        ],
        "🍏": ["U+1F34F", "green apple", "1f34f", ["", "U+E745"],
            ["", "U+EB5A"],
            ["", "U+E345"],
            ["󾁛", "U+FE05B"]
        ],
        "👀": ["U+1F440", "eyes", "1f440", ["", "U+E691"],
            ["", "U+E5A4"],
            ["", "U+E419"],
            ["󾆐", "U+FE190"]
        ],
        "👂": ["U+1F442", "ear", "1f442", ["", "U+E692"],
            ["", "U+E5A5"],
            ["", "U+E41B"],
            ["󾆑", "U+FE191"]
        ],
        "👃": ["U+1F443", "nose", "1f443", ["-", "-"],
            ["", "U+EAD0"],
            ["", "U+E41A"],
            ["󾆒", "U+FE192"]
        ],
        "👄": ["U+1F444", "mouth", "1f444", ["", "U+E6F9"],
            ["", "U+EAD1"],
            ["", "U+E41C"],
            ["󾆓", "U+FE193"]
        ],
        "👅": ["U+1F445", "tongue", "1f445", ["", "U+E728"],
            ["", "U+EB47"],
            ["", "U+E409"],
            ["󾆔", "U+FE194"]
        ],
        "💄": ["U+1F484", "lipstick", "1f484", ["", "U+E710"],
            ["", "U+E509"],
            ["", "U+E31C"],
            ["󾆕", "U+FE195"]
        ],
        "💅": ["U+1F485", "nail polish", "1f485", ["-", "-"],
            ["", "U+EAA0"],
            ["", "U+E31D"],
            ["󾆖", "U+FE196"]
        ],
        "💆": ["U+1F486", "face massage", "1f486", ["-", "-"],
            ["", "U+E50B"],
            ["", "U+E31E"],
            ["󾆗", "U+FE197"]
        ],
        "💇": ["U+1F487", "haircut", "1f487", ["", "U+E675"],
            ["", "U+EAA1"],
            ["", "U+E31F"],
            ["󾆘", "U+FE198"]
        ],
        "💈": ["U+1F488", "barber pole", "1f488", ["-", "-"],
            ["", "U+EAA2"],
            ["", "U+E320"],
            ["󾆙", "U+FE199"]
        ],
        "👤": ["U+1F464", "bust in silhouette", "1f464", ["", "U+E6B1"],
            ["-", "-"],
            ["-", "-"],
            ["󾆚", "U+FE19A"]
        ],
        "👦": ["U+1F466", "boy", "1f466", ["", "U+E6F0"],
            ["", "U+E4FC"],
            ["", "U+E001"],
            ["󾆛", "U+FE19B"]
        ],
        "👧": ["U+1F467", "girl", "1f467", ["", "U+E6F0"],
            ["", "U+E4FA"],
            ["", "U+E002"],
            ["󾆜", "U+FE19C"]
        ],
        "👨": ["U+1F468", "man", "1f468", ["", "U+E6F0"],
            ["", "U+E4FC"],
            ["", "U+E004"],
            ["󾆝", "U+FE19D"]
        ],
        "👩": ["U+1F469", "woman", "1f469", ["", "U+E6F0"],
            ["", "U+E4FA"],
            ["", "U+E005"],
            ["󾆞", "U+FE19E"]
        ],
        "👪": ["U+1F46A", "family", "1f46a", ["-", "-"],
            ["", "U+E501"],
            ["-", "-"],
            ["󾆟", "U+FE19F"]
        ],
        "👫": ["U+1F46B", "man and woman holding hands", "1f46b", ["-", "-"],
            ["-", "-"],
            ["", "U+E428"],
            ["󾆠", "U+FE1A0"]
        ],
        "👮": ["U+1F46E", "police officer", "1f46e", ["-", "-"],
            ["", "U+E5DD"],
            ["", "U+E152"],
            ["󾆡", "U+FE1A1"]
        ],
        "👯": ["U+1F46F", "woman with bunny ears", "1f46f", ["-", "-"],
            ["", "U+EADB"],
            ["", "U+E429"],
            ["󾆢", "U+FE1A2"]
        ],
        "👰": ["U+1F470", "bride with veil", "1f470", ["-", "-"],
            ["", "U+EAE9"],
            ["-", "-"],
            ["󾆣", "U+FE1A3"]
        ],
        "👱": ["U+1F471", "person with blond hair", "1f471", ["-", "-"],
            ["", "U+EB13"],
            ["", "U+E515"],
            ["󾆤", "U+FE1A4"]
        ],
        "👲": ["U+1F472", "man with gua pi mao", "1f472", ["-", "-"],
            ["", "U+EB14"],
            ["", "U+E516"],
            ["󾆥", "U+FE1A5"]
        ],
        "👳": ["U+1F473", "man with turban", "1f473", ["-", "-"],
            ["", "U+EB15"],
            ["", "U+E517"],
            ["󾆦", "U+FE1A6"]
        ],
        "👴": ["U+1F474", "older man", "1f474", ["-", "-"],
            ["", "U+EB16"],
            ["", "U+E518"],
            ["󾆧", "U+FE1A7"]
        ],
        "👵": ["U+1F475", "older woman", "1f475", ["-", "-"],
            ["", "U+EB17"],
            ["", "U+E519"],
            ["󾆨", "U+FE1A8"]
        ],
        "👶": ["U+1F476", "baby", "1f476", ["-", "-"],
            ["", "U+EB18"],
            ["", "U+E51A"],
            ["󾆩", "U+FE1A9"]
        ],
        "👷": ["U+1F477", "construction worker", "1f477", ["-", "-"],
            ["", "U+EB19"],
            ["", "U+E51B"],
            ["󾆪", "U+FE1AA"]
        ],
        "👸": ["U+1F478", "princess", "1f478", ["-", "-"],
            ["", "U+EB1A"],
            ["", "U+E51C"],
            ["󾆫", "U+FE1AB"]
        ],
        "👹": ["U+1F479", "japanese ogre", "1f479", ["-", "-"],
            ["", "U+EB44"],
            ["-", "-"],
            ["󾆬", "U+FE1AC"]
        ],
        "👺": ["U+1F47A", "japanese goblin", "1f47a", ["-", "-"],
            ["", "U+EB45"],
            ["-", "-"],
            ["󾆭", "U+FE1AD"]
        ],
        "👻": ["U+1F47B", "ghost", "1f47b", ["-", "-"],
            ["", "U+E4CB"],
            ["", "U+E11B"],
            ["󾆮", "U+FE1AE"]
        ],
        "👼": ["U+1F47C", "baby angel", "1f47c", ["-", "-"],
            ["", "U+E5BF"],
            ["", "U+E04E"],
            ["󾆯", "U+FE1AF"]
        ],
        "👽": ["U+1F47D", "extraterrestrial alien", "1f47d", ["-", "-"],
            ["", "U+E50E"],
            ["", "U+E10C"],
            ["󾆰", "U+FE1B0"]
        ],
        "👾": ["U+1F47E", "alien monster", "1f47e", ["-", "-"],
            ["", "U+E4EC"],
            ["", "U+E12B"],
            ["󾆱", "U+FE1B1"]
        ],
        "👿": ["U+1F47F", "imp", "1f47f", ["-", "-"],
            ["", "U+E4EF"],
            ["", "U+E11A"],
            ["󾆲", "U+FE1B2"]
        ],
        "💀": ["U+1F480", "skull", "1f480", ["-", "-"],
            ["", "U+E4F8"],
            ["", "U+E11C"],
            ["󾆳", "U+FE1B3"]
        ],
        "💁": ["U+1F481", "information desk person", "1f481", ["-", "-"],
            ["-", "-"],
            ["", "U+E253"],
            ["󾆴", "U+FE1B4"]
        ],
        "💂": ["U+1F482", "guardsman", "1f482", ["-", "-"],
            ["-", "-"],
            ["", "U+E51E"],
            ["󾆵", "U+FE1B5"]
        ],
        "💃": ["U+1F483", "dancer", "1f483", ["-", "-"],
            ["", "U+EB1C"],
            ["", "U+E51F"],
            ["󾆶", "U+FE1B6"]
        ],
        "🐌": ["U+1F40C", "snail", "1f40c", ["", "U+E74E"],
            ["", "U+EB7E"],
            ["-", "-"],
            ["󾆹", "U+FE1B9"]
        ],
        "🐍": ["U+1F40D", "snake", "1f40d", ["-", "-"],
            ["", "U+EB22"],
            ["", "U+E52D"],
            ["󾇓", "U+FE1D3"]
        ],
        "🐎": ["U+1F40E", "horse", "1f40e", ["", "U+E754"],
            ["", "U+E4D8"],
            ["", "U+E134"],
            ["󾟜", "U+FE7DC"]
        ],
        "🐔": ["U+1F414", "chicken", "1f414", ["-", "-"],
            ["", "U+EB23"],
            ["", "U+E52E"],
            ["󾇔", "U+FE1D4"]
        ],
        "🐗": ["U+1F417", "boar", "1f417", ["-", "-"],
            ["", "U+EB24"],
            ["", "U+E52F"],
            ["󾇕", "U+FE1D5"]
        ],
        "🐫": ["U+1F42B", "bactrian camel", "1f42b", ["-", "-"],
            ["", "U+EB25"],
            ["", "U+E530"],
            ["󾇖", "U+FE1D6"]
        ],
        "🐘": ["U+1F418", "elephant", "1f418", ["-", "-"],
            ["", "U+EB1F"],
            ["", "U+E526"],
            ["󾇌", "U+FE1CC"]
        ],
        "🐨": ["U+1F428", "koala", "1f428", ["-", "-"],
            ["", "U+EB20"],
            ["", "U+E527"],
            ["󾇍", "U+FE1CD"]
        ],
        "🐒": ["U+1F412", "monkey", "1f412", ["-", "-"],
            ["", "U+E4D9"],
            ["", "U+E528"],
            ["󾇎", "U+FE1CE"]
        ],
        "🐑": ["U+1F411", "sheep", "1f411", ["-", "-"],
            ["", "U+E48F"],
            ["", "U+E529"],
            ["󾇏", "U+FE1CF"]
        ],
        "🐙": ["U+1F419", "octopus", "1f419", ["-", "-"],
            ["", "U+E5C7"],
            ["", "U+E10A"],
            ["󾇅", "U+FE1C5"]
        ],
        "🐚": ["U+1F41A", "spiral shell", "1f41a", ["-", "-"],
            ["", "U+EAEC"],
            ["", "U+E441"],
            ["󾇆", "U+FE1C6"]
        ],
        "🐛": ["U+1F41B", "bug", "1f41b", ["-", "-"],
            ["", "U+EB1E"],
            ["", "U+E525"],
            ["󾇋", "U+FE1CB"]
        ],
        "🐜": ["U+1F41C", "ant", "1f41c", ["-", "-"],
            ["", "U+E4DD"],
            ["-", "-"],
            ["󾇚", "U+FE1DA"]
        ],
        "🐝": ["U+1F41D", "honeybee", "1f41d", ["-", "-"],
            ["", "U+EB57"],
            ["-", "-"],
            ["󾇡", "U+FE1E1"]
        ],
        "🐞": ["U+1F41E", "lady beetle", "1f41e", ["-", "-"],
            ["", "U+EB58"],
            ["-", "-"],
            ["󾇢", "U+FE1E2"]
        ],