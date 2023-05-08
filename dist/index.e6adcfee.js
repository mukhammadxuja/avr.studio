/*! For license information please see ScrollTrigger.min.js.LICENSE.txt */ !function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("ScrollTrigger", [], e) : "object" == typeof exports ? exports.ScrollTrigger = e() : t.ScrollTrigger = e();
}(self, ()=>(()=>{
        var t = {
            91: ()=>{
                Array.prototype.each = function(t) {
                    for(var e = this.length, i = 0; i < e; i++){
                        var n = this[i];
                        n && t(n, i);
                    }
                }, NodeList.prototype.each = Array.prototype.each, NodeList.prototype.filter = Array.prototype.filter;
            },
            160: (t)=>{
                t.exports = function t(e, i) {
                    return null == e || null == i || Object.keys(i).forEach(function(n) {
                        "[object Object]" == Object.prototype.toString.call(i[n]) ? "[object Object]" != Object.prototype.toString.call(e[n]) ? e[n] = i[n] : e[n] = t(e[n], i[n]) : e[n] = i[n];
                    }), e;
                };
            }
        }, e = {};
        function i(n) {
            var o = e[n];
            if (void 0 !== o) return o.exports;
            var r = e[n] = {
                exports: {}
            };
            return t[n](r, r.exports, i), r.exports;
        }
        i.n = (t)=>{
            var e = t && t.__esModule ? ()=>t.default : ()=>t;
            return i.d(e, {
                a: e
            }), e;
        }, i.d = (t, e)=>{
            for(var n in e)i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            });
        }, i.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e), i.r = (t)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        };
        var n = {};
        return (()=>{
            "use strict";
            function t() {
                this.trigger = {
                    once: !1,
                    offset: {
                        viewport: {
                            x: 0,
                            y: 0
                        },
                        element: {
                            x: 0,
                            y: 0
                        }
                    },
                    toggle: {
                        class: {
                            in: "visible",
                            out: "invisible"
                        },
                        callback: {
                            in: null,
                            visible: null,
                            out: null
                        }
                    }
                }, this.scroll = {
                    sustain: 300,
                    element: window,
                    callback: function() {},
                    start: function() {},
                    stop: function() {},
                    directionChange: function() {}
                };
            }
            i.r(n), i.d(n, {
                ScrollAnimationLoop: ()=>b,
                Trigger: ()=>v,
                TriggerCollection: ()=>m,
                default: ()=>d
            });
            var e = i(160), o = i.n(e);
            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, r(t);
            }
            function s(t, e) {
                for(var i = 0; i < e.length; i++){
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = function(t, e) {
                        if ("object" !== r(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, "string");
                            if ("object" !== r(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    }(n.key), "symbol" === r(o) ? o : String(o)), n);
                }
                var o;
            }
            function l(t) {
                return Number(t) === t && t % 1 == 0;
            }
            function c(t) {
                return Number(t) === t && t % 1 != 0;
            }
            i(91);
            var a = function() {
                function e(i, n) {
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.element = i, n = o()((new t).trigger, n), this.offset = n.offset, this.toggle = n.toggle, this.once = n.once, this.visible = null, this.active = !0;
                }
                var i, n;
                return i = e, n = [
                    {
                        key: "checkVisibility",
                        value: function(t, e) {
                            if (!this.active) return this.visible;
                            var i = {
                                w: t.offsetWidth || t.innerWidth || 0,
                                h: t.offsetHeight || t.innerHeight || 0
                            }, n = this.getBounds(), o = this._checkVisibility(n, i, e);
                            if (o !== this.visible) {
                                this.visible = o;
                                var r = this._toggleCallback();
                                r instanceof Promise ? r.then(this._toggleClass.bind(this)).catch(function(t) {
                                    console.error("Trigger promise failed"), console.error(t);
                                }) : this._toggleClass(), this.visible && this.once && (this.active = !1);
                            } else if (o && "function" == typeof this.toggle.callback.visible) return this.toggle.callback.visible.call(this.element, this);
                            return o;
                        }
                    },
                    {
                        key: "getBounds",
                        value: function() {
                            return this.element.getBoundingClientRect();
                        }
                    },
                    {
                        key: "_getElementOffset",
                        value: function(t, e) {
                            var i = {
                                x: 0,
                                y: 0
                            };
                            return "function" == typeof this.offset.element.x ? i.x = t.width * this.offset.element.x(this, t, e) : c(this.offset.element.x) ? i.x = t.width * this.offset.element.x : l(this.offset.element.x) && (i.x = this.offset.element.x), "function" == typeof this.offset.element.y ? i.y = t.height * this.offset.element.y(this, t, e) : c(this.offset.element.y) ? i.y = t.height * this.offset.element.y : l(this.offset.element.y) && (i.y = this.offset.element.y), i;
                        }
                    },
                    {
                        key: "_getViewportOffset",
                        value: function(t, e) {
                            var i = {
                                x: 0,
                                y: 0
                            };
                            return "function" == typeof this.offset.viewport.x ? i.x = t.w * this.offset.viewport.x(this, t, e) : c(this.offset.viewport.x) ? i.x = t.w * this.offset.viewport.x : l(this.offset.viewport.x) && (i.x = this.offset.viewport.x), "function" == typeof this.offset.viewport.y ? i.y = t.h * this.offset.viewport.y(this, t, e) : c(this.offset.viewport.y) ? i.y = t.h * this.offset.viewport.y : l(this.offset.viewport.y) && (i.y = this.offset.viewport.y), i;
                        }
                    },
                    {
                        key: "_checkVisibility",
                        value: function(t, e, i) {
                            var n = this._getElementOffset(t, i), o = this._getViewportOffset(e, i), r = !0;
                            return t.left - o.x < -(t.width - n.x) && (r = !1), t.left + o.x > e.w - n.x && (r = !1), t.top - o.y < -(t.height - n.y) && (r = !1), t.top + o.y > e.h - n.y && (r = !1), r;
                        }
                    },
                    {
                        key: "_toggleClass",
                        value: function() {
                            var t = this;
                            if (this.visible) return Array.isArray(this.toggle.class.in) ? this.toggle.class.in.each(function(e) {
                                t.element.classList.add(e);
                            }) : this.element.classList.add(this.toggle.class.in), void (Array.isArray(this.toggle.class.out) ? this.toggle.class.out.each(function(e) {
                                t.element.classList.remove(e);
                            }) : this.element.classList.remove(this.toggle.class.out));
                            Array.isArray(this.toggle.class.in) ? this.toggle.class.in.each(function(e) {
                                t.element.classList.remove(e);
                            }) : this.element.classList.remove(this.toggle.class.in), Array.isArray(this.toggle.class.out) ? this.toggle.class.out.each(function(e) {
                                t.element.classList.add(e);
                            }) : this.element.classList.add(this.toggle.class.out);
                        }
                    },
                    {
                        key: "_toggleCallback",
                        value: function() {
                            if (this.visible) {
                                if ("function" == typeof this.toggle.callback.in) return this.toggle.callback.in.call(this.element, this);
                            } else if ("function" == typeof this.toggle.callback.out) return this.toggle.callback.out.call(this.element, this);
                        }
                    }
                ], s(i.prototype, n), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), e;
            }();
            function u(t) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, u(t);
            }
            function f(t, e) {
                for(var i = 0; i < e.length; i++){
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = function(t, e) {
                        if ("object" !== u(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, "string");
                            if ("object" !== u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    }(n.key), "symbol" === u(o) ? o : String(o)), n);
                }
                var o;
            }
            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, h(t);
            }
            function y(t, e) {
                for(var i = 0; i < e.length; i++){
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = function(t, e) {
                        if ("object" !== h(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, "string");
                            if ("object" !== h(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    }(n.key), "symbol" === h(o) ? o : String(o)), n);
                }
                var o;
            }
            function p(t) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, p(t);
            }
            function g(t, e) {
                for(var i = 0; i < e.length; i++){
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = function(t, e) {
                        if ("object" !== p(t) || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, "string");
                            if ("object" !== p(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    }(n.key), "symbol" === p(o) ? o : String(o)), n);
                }
                var o;
            }
            var v = a, m = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.triggers = e instanceof Array ? e : [];
                }
                var e, i;
                return e = t, i = [
                    {
                        key: "add",
                        value: function(t) {
                            var e = this;
                            if (t instanceof a) return this.triggers.push(t);
                            t.each(function(t) {
                                t instanceof a ? e.triggers.push(t) : console.error("Object added to TriggerCollection is not a Trigger. Object: ", t);
                            });
                        }
                    },
                    {
                        key: "remove",
                        value: function(t) {
                            t instanceof a && (t = [
                                t
                            ]), this.triggers = this.triggers.filter(function(e) {
                                var i = !1;
                                return t.each(function(t) {
                                    t == e && (i = !0);
                                }), !i;
                            });
                        }
                    },
                    {
                        key: "query",
                        value: function(t) {
                            return this.triggers.filter(function(e) {
                                var i = e.element, n = i.parentNode;
                                return [].slice.call(n.querySelectorAll(t)).indexOf(i) > -1;
                            });
                        }
                    },
                    {
                        key: "search",
                        value: function(t) {
                            var e = this.triggers.filter(function(e) {
                                if (t instanceof NodeList || Array.isArray(t)) {
                                    var i = !1;
                                    return t.each(function(t) {
                                        e.element == t && (i = !0);
                                    }), i;
                                }
                                return e.element == t;
                            });
                            return 0 == e.length ? null : e.length > 1 ? e : e[0];
                        }
                    },
                    {
                        key: "call",
                        value: function(t) {
                            this.triggers.each(t);
                        }
                    }
                ], f(e.prototype, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t;
            }(), b = function() {
                function e(t, i) {
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this._parseOptions(t), "function" == typeof i && (this.callback = i), this.direction = "none", this.position = this.getPosition(), this.lastAction = this._getTimestamp(), this._startRun(), this._boundListener = this._didScroll.bind(this), this.element.addEventListener("scroll", this._boundListener);
                }
                var i, n;
                return i = e, n = [
                    {
                        key: "_parseOptions",
                        value: function(e) {
                            var i = (new t).scroll;
                            "function" != typeof e ? (i.callback = function() {}, i = o()(i, e)) : i.callback = e, this.element = i.element, this.sustain = i.sustain, this.callback = i.callback, this.startCallback = i.start, this.stopCallback = i.stop, this.directionChange = i.directionChange;
                        }
                    },
                    {
                        key: "_didScroll",
                        value: function() {
                            var t = this.getPosition();
                            if (this.position !== t) {
                                var e = this.direction;
                                (e = t.x !== this.position.x ? t.x > this.position.x ? "right" : "left" : t.y !== this.position.y ? t.y > this.position.y ? "bottom" : "top" : "none") !== this.direction && (this.direction = e, "function" == typeof this.directionChange && this.directionChange(this.direction)), this.position = t, this.lastAction = this._getTimestamp();
                            } else this.direction = "none";
                            this.running || this._startRun();
                        }
                    },
                    {
                        key: "_startRun",
                        value: function() {
                            this.running = !0, "function" == typeof this.startCallback && this.startCallback(), this._loop();
                        }
                    },
                    {
                        key: "_stopRun",
                        value: function() {
                            this.running = !1, "function" == typeof this.stopCallback && this.stopCallback();
                        }
                    },
                    {
                        key: "getPosition",
                        value: function() {
                            return {
                                x: this.element.pageXOffset || this.element.scrollLeft || document.documentElement.scrollLeft || 0,
                                y: this.element.pageYOffset || this.element.scrollTop || document.documentElement.scrollTop || 0
                            };
                        }
                    },
                    {
                        key: "_getTimestamp",
                        value: function() {
                            return Number(Date.now());
                        }
                    },
                    {
                        key: "_tick",
                        value: function() {
                            this.callback(this.position, this.direction), this._getTimestamp() - this.lastAction > this.sustain && this._stopRun(), this.running && this._loop();
                        }
                    },
                    {
                        key: "_loop",
                        value: function() {
                            (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                                setTimeout(t, 1e3 / 60);
                            })(this._tick.bind(this));
                        }
                    },
                    {
                        key: "kill",
                        value: function() {
                            this.running = !1, this.element.removeEventListener("scroll", this._boundListener);
                        }
                    }
                ], y(i.prototype, n), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), e;
            }(), d = function() {
                function e(t) {
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this._parseOptions(t), this._initCollection(), this._initLoop();
                }
                var i, n;
                return i = e, n = [
                    {
                        key: "_parseOptions",
                        value: function(e) {
                            e = o()(new t, e), this.defaultTrigger = e.trigger, this.scrollOptions = e.scroll;
                        }
                    },
                    {
                        key: "_initCollection",
                        value: function() {
                            var t = document.querySelectorAll("[data-scroll]"), e = [];
                            t.length > 0 && (e = this.createTriggers(t)), this.collection = new m(e);
                        }
                    },
                    {
                        key: "_initLoop",
                        value: function() {
                            var t = this;
                            this.loop = new b({
                                sustain: this.scrollOptions.sustain,
                                element: this.scrollOptions.element,
                                callback: function(e, i) {
                                    t._scrollCallback(e, i);
                                },
                                start: function() {
                                    t._scrollStart();
                                },
                                stop: function() {
                                    t._scrollStop();
                                },
                                directionChange: function(e) {
                                    t._scrollDirectionChange(e);
                                }
                            });
                        }
                    },
                    {
                        key: "_scrollCallback",
                        value: function(t, e) {
                            var i = this;
                            this.collection.call(function(t) {
                                t.checkVisibility(i.scrollOptions.element, e);
                            }), this.scrollOptions.callback(t, e);
                        }
                    },
                    {
                        key: "_scrollStart",
                        value: function() {
                            this.scrollOptions.start();
                        }
                    },
                    {
                        key: "_scrollStop",
                        value: function() {
                            this.scrollOptions.stop();
                        }
                    },
                    {
                        key: "_scrollDirectionChange",
                        value: function(t) {
                            this.scrollOptions.directionChange(t);
                        }
                    },
                    {
                        key: "createTrigger",
                        value: function(t, e) {
                            return new v(t, o()(this.defaultTrigger, e));
                        }
                    },
                    {
                        key: "createTriggers",
                        value: function(t, e) {
                            var i = this, n = [];
                            return t.each(function(t) {
                                n.push(i.createTrigger(t, e));
                            }), n;
                        }
                    },
                    {
                        key: "add",
                        value: function(t, e) {
                            return t instanceof HTMLElement ? (this.collection.add(this.createTrigger(t, e)), this) : t instanceof v ? (this.collection.add(t), this) : t instanceof NodeList ? (this.collection.add(this.createTriggers(t, e)), this) : Array.isArray(t) && t.length && t[0] instanceof v ? (this.collection.add(t), this) : Array.isArray(t) && t.length && t[0] instanceof HTMLElement ? (this.collection.add(this.createTriggers(t, e)), this) : (this.collection.add(this.createTriggers(document.querySelectorAll(t), e)), this);
                        }
                    },
                    {
                        key: "remove",
                        value: function(t) {
                            return t instanceof v || Array.isArray(t) && t.length && t[0] instanceof v ? (this.collection.remove(t), this) : t instanceof HTMLElement || Array.isArray(t) && t.length && t[0] instanceof HTMLElement || t instanceof NodeList ? (this.collection.remove(this.search(t)), this) : Array.isArray(t) && t.length && t[0] instanceof v ? (this.collection.remove(t), this) : (this.collection.remove(this.query(t.toString())), this);
                        }
                    },
                    {
                        key: "query",
                        value: function(t) {
                            return this.collection.query(t);
                        }
                    },
                    {
                        key: "search",
                        value: function(t) {
                            return this.collection.search(t);
                        }
                    },
                    {
                        key: "listen",
                        value: function() {
                            this.loop || this._initLoop();
                        }
                    },
                    {
                        key: "kill",
                        value: function() {
                            this.loop.kill(), this.loop = null;
                        }
                    }
                ], g(i.prototype, n), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), e;
            }();
        })(), n;
    })()); //# sourceMappingURL=ScrollTrigger.min.js.map

//# sourceMappingURL=index.e6adcfee.js.map