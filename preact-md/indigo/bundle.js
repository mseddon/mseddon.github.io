/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var preact_1 = __webpack_require__(1);
	var AppBar_1 = __webpack_require__(2);
	var TextField_1 = __webpack_require__(8);
	var Toplevel_1 = __webpack_require__(9);
	var Button_1 = __webpack_require__(10);
	var Label_1 = __webpack_require__(13);
	var IconButton_1 = __webpack_require__(14);
	var MenuButton_1 = __webpack_require__(15);
	var Checkbox_1 = __webpack_require__(17);
	var Switch_1 = __webpack_require__(18);
	var RadioButton_1 = __webpack_require__(19);
	var ProgressBar_1 = __webpack_require__(20);
	var Spinner_1 = __webpack_require__(21);
	var Slider_1 = __webpack_require__(22);
	var Tabs_1 = __webpack_require__(23);
	var Menu_1 = __webpack_require__(24);
	var SplitPane_1 = __webpack_require__(25);
	var domutil_1 = __webpack_require__(12);
	domutil_1.waitForFonts(["Roboto", 'Material Icons'], function () {
	    if (({"DEBUG":true})["DEBUG"])
	        __webpack_require__(27);
	    var menu = preact_1.h(Menu_1.Menu, null,
	        preact_1.h(Menu_1.MenuItem, { label: "New", action: function () { return console.log("NEW!"); } }),
	        preact_1.h(Menu_1.MenuItem, { label: "Open..." }),
	        preact_1.h(Menu_1.MenuSeparator, null),
	        preact_1.h(Menu_1.MenuItem, { label: "Close" }),
	        preact_1.h(Menu_1.MenuItem, { label: "Save" }),
	        preact_1.h(Menu_1.MenuItem, { label: "Save As..." }),
	        preact_1.h(Menu_1.MenuSeparator, null),
	        preact_1.h(Menu_1.MenuItem, { label: "Sign Out" }));
	    preact_1.render(preact_1.h(Toplevel_1.Toplevel, null,
	        preact_1.h("div", { style: { display: "flex", flexDirection: "column", position: "fixed", top: "0", left: "0", width: "100%", height: "100%" } },
	            preact_1.h("div", { style: { flexGrow: "0" } },
	                preact_1.h(AppBar_1.AppBar, { title: "Hello!", leftButton: preact_1.h(IconButton_1.IconButton, null,
	                        preact_1.h("i", { className: "material-icons" }, "menu")), rightButtons: [preact_1.h(MenuButton_1.MenuButton, { menu: menu },
	                            preact_1.h("i", { className: "material-icons" }, "more_vert"))] })),
	            preact_1.h("div", { style: { flexGrow: "1", position: "relative" } },
	                preact_1.h(Tabs_1.TabStrip, { tabs: [
	                        { id: "1", title: preact_1.h("label", null, "Stuff"), component: preact_1.h("div", null,
	                                preact_1.h("p", null,
	                                    preact_1.h(Button_1.Button, { onClick: function () { return console.log("HR"); } }, "Button")),
	                                preact_1.h("p", null,
	                                    preact_1.h(Checkbox_1.Checkbox, { title: "Wee" })),
	                                preact_1.h("p", null,
	                                    preact_1.h(Switch_1.Switch, { title: "Wee", checked: true })),
	                                preact_1.h("p", null,
	                                    preact_1.h(RadioButton_1.RadioButton, { name: "buttons", title: "Radio 1", value: "1" })),
	                                preact_1.h("p", null,
	                                    preact_1.h(RadioButton_1.RadioButton, { name: "buttons", title: "Radio 2", value: "2" })),
	                                preact_1.h(TextField_1.TextField, { placeholder: "Hello", floatingLabel: true, value: "" }),
	                                preact_1.h("p", null,
	                                    preact_1.h(Slider_1.Slider, { min: 0, max: 100, value: 50 }))) },
	                        { id: "2", title: preact_1.h("label", null, "Load"), component: preact_1.h("div", null,
	                                preact_1.h("p", null,
	                                    preact_1.h(Label_1.Label, null, "indeterminate")),
	                                preact_1.h("p", null,
	                                    preact_1.h(ProgressBar_1.ProgressBar, { progress: 50, buffer: 80, indeterminate: true })),
	                                preact_1.h("p", null,
	                                    preact_1.h(Label_1.Label, null, "normal")),
	                                preact_1.h("p", null,
	                                    preact_1.h(ProgressBar_1.ProgressBar, { progress: 50 })),
	                                preact_1.h("p", null,
	                                    preact_1.h(Label_1.Label, null, "buffering")),
	                                preact_1.h("p", null,
	                                    preact_1.h(ProgressBar_1.ProgressBar, { progress: 50, buffer: 80 })),
	                                preact_1.h("p", null,
	                                    preact_1.h(Spinner_1.Spinner, null))) },
	                        { id: "3", title: preact_1.h("label", null, "Split"), component: preact_1.h(SplitPane_1.SplitPane, { first: preact_1.h("div", { style: { backgroundColor: "#0f0", position: "absolute", width: "100%", height: "100%" } }), second: preact_1.h("div", { style: { backgroundColor: "#f00", position: "absolute", width: "100%", height: "100%" } }), axis: "horizontal" }) }
	                    ], active: "2" })))), document.querySelector("#content"));
	    document.body.classList.remove("disable-animation");
	}, function () {
	    console.error("Oh dear");
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = [];
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !1) {
	            if ('number' == typeof child || child === !0) child = String(child);
	            simple = 'string' == typeof child;
	            if (simple && lastSimple) children[children.length - 1] += child; else {
	                children.push(child);
	                lastSimple = simple;
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.');
	        return function(e) {
	            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
	            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
	            obj[path[i]] = v;
	            component.setState(state);
	        };
	    }
	    function enqueueRender(component) {
	        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p._dirty) renderComponent(p);
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
	        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) node.innerHTML = value && value.__html || ''; else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = parent instanceof SVGElement;
	            hydrating = dom && !(ATTR_KEY in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (null == vnode) vnode = '';
	        if (isString(vnode)) {
	            if (dom && dom instanceof Text) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                if (dom) recollectNodeTree(dom);
	                dom = document.createTextNode(vnode);
	            }
	            dom[ATTR_KEY] = !0;
	            return dom;
	        }
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	            recollectNodeTree(dom);
	        }
	        var fc = out.firstChild, props = out[ATTR_KEY];
	        if (!props) {
	            out[ATTR_KEY] = props = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        diffAttributes(out, vnode.attributes, props);
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll);
	        if (originalAttributes && 'function' == typeof originalAttributes.ref) (props.ref = originalAttributes.ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (hydrating || props) children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
	                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
	                dom.insertBefore(child, originalChildren[i] || null);
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        while (min <= childrenLen) {
	            child = children[childrenLen--];
	            if (child) recollectNodeTree(child);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            var c;
	            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        for (var _name in old) if (!(attrs && _name in attrs) && null != old[_name]) setAccessor(dom, _name, old[_name], old[_name] = void 0, isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!('children' === _name2 || 'innerHTML' === _name2 || _name2 in old && attrs[_name2] === ('value' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2]))) setAccessor(dom, _name2, old[_name2], old[_name2] = attrs[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        Component.call(inst, props, context);
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component._disable) {
	            component._disable = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disable = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disable) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) {
	                c.nextBase = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component._disable = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            var c;
	            while (c = base.lastChild) recollectNodeTree(c, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this.context = context;
	        this.props = props;
	        if (!this.state) this.state = {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var stack = [];
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {});
	            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	var AppBar = (function (_super) {
	    __extends(AppBar, _super);
	    function AppBar() {
	        return _super.apply(this, arguments) || this;
	    }
	    AppBar.prototype.render = function () {
	        return preact_1.h("header", { className: "md-app-bar primary-bg" },
	            preact_1.h("div", { className: "left-icons" }, this.props.leftButton),
	            preact_1.h("h1", null, this.props.title),
	            preact_1.h("div", { className: "right-icons" }, this.props.rightButtons));
	    };
	    return AppBar;
	}(preact_1.Component));
	exports.AppBar = AppBar;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./styles.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./styles.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Material+Icons);", ""]);
	
	// module
	exports.push([module.id, "/***** Variable section- should probably be in a config.less or similar. *****/\n/***** Main stylesheet . *****/\n.no-user-select {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.disable-animation * {\n  transition: none !important;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n* {\n  font-family: Roboto, sans-serif;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.md-app-bar {\n  padding: 16px;\n  padding-left: 12px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n}\n.md-app-bar h1 {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal;\n  vertical-align: middle;\n  padding-left: 40px;\n}\n.md-app-bar i {\n  line-height: 24px;\n  vertical-align: middle;\n}\n.md-app-bar .right-icons {\n  position: absolute;\n  padding-right: 12px;\n  right: 0;\n  display: inline-block;\n}\n.md-app-bar .left-icons {\n  display: inline-block;\n}\n.md-field {\n  max-width: 100%;\n  position: relative;\n  line-height: 24px;\n}\n.md-field input {\n  color: #757575;\n  background-color: transparent;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  line-height: 24px;\n  font-size: 16px;\n  border: none;\n  width: 100%;\n}\n.md-field label {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  line-height: 24px;\n  padding: 0;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  font-size: 16px;\n  width: 100%;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 0.2s, color cubic-bezier(0.4, 0, 0.2, 1) 0.2s, font-size cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n  transform: translateY(0px);\n  transform-origin: 0% 0%;\n}\n.md-field .after {\n  display: inline-block;\n  position: absolute;\n  bottom: -1px;\n  height: 2px;\n  content: '';\n  left: 45%;\n  width: 20px;\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n  visibility: hidden;\n}\n.md-field span.underline {\n  line-height: 24px;\n  padding: 0;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  width: 100%;\n}\n.md-field.floating-label {\n  padding-top: 24px;\n}\n.md-field.floating-label label {\n  padding-top: 24px;\n}\n.md-field.is-focused .after {\n  left: 0;\n  width: 100%;\n  visibility: visible;\n}\n.md-field.has-content label,\n.md-field.is-focused label {\n  display: none;\n}\n.md-field.floating-label.has-content label,\n.md-field.floating-label.is-focused label {\n  transform: translateY(-18px);\n  font-size: 12px;\n  display: inline-block;\n}\ninput:focus {\n  outline: none;\n}\n.md-button {\n  display: inline-block;\n  position: relative;\n}\n.md-button button {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  border-radius: 2px;\n  text-transform: uppercase;\n  padding: 0 16px;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  line-height: 36px;\n  vertical-align: middle;\n  border: none;\n  position: relative;\n}\n.md-button button:disabled {\n  opacity: 0.65;\n}\n.md-button button:focus {\n  outline: none;\n}\n.md-button button:active {\n  border: none;\n  outline: none;\n}\n.ripple-box {\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.point-ripple {\n  top: -5px;\n  left: -8px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n.ripple-icon {\n  top: -4px;\n  left: -4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n.ripple {\n  position: absolute;\n  border-radius: 50%;\n  left: 0px;\n  top: 0px;\n  width: 4px;\n  height: 4px;\n  background-color: #fff;\n  opacity: 0.0;\n  transform: scale(1);\n  pointer-events: none;\n}\n.ripple.zoom {\n  animation-name: ripple-zoom;\n  animation-duration: 0.25s;\n  animation-fill-mode: forwards;\n}\n@keyframes ripple-zoom {\n  from {\n    opacity: 0.4;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.4;\n    transform: scale(100);\n  }\n}\n@keyframes ripple-fade {\n  from {\n    transform: scale(100);\n    opacity: 0.4;\n  }\n  to {\n    transform: scale(100);\n    opacity: 0;\n  }\n}\n.ripple.fade {\n  animation-name: ripple-fade;\n  animation-duration: 0.75s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.md-checkbox,\n.md-radio-button,\n.md-switch {\n  position: relative;\n  padding-left: 24px;\n  margin-left: 8px;\n  vertical-align: middle;\n  height: 24px;\n  display: inline-block;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.md-checkbox input[type=checkbox],\n.md-radio-button input[type=checkbox],\n.md-switch input[type=checkbox],\n.md-checkbox input[type=radio],\n.md-radio-button input[type=radio],\n.md-switch input[type=radio] {\n  position: absolute;\n  width: 0px;\n  height: 0px;\n  opacity: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.md-checkbox span.label,\n.md-radio-button span.label,\n.md-switch span.label {\n  font-size: 16px;\n  line-height: 24px;\n}\n.md-checkbox .check-item {\n  position: absolute;\n  left: -4px;\n  top: -1px;\n  transition: color cubic-bezier(0.4, 0, 0.2, 1) 0.28s, opacity cubic-bezier(0.4, 0, 0.2, 1) 0.28s;\n}\n.md-radio-button span.radio-circle {\n  position: absolute;\n  border-radius: 50%;\n  top: 3px;\n  left: 0px;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  transition: border cubic-bezier(0.4, 0, 0.2, 1) 0.28s, opacity cubic-bezier(0.4, 0, 0.2, 1) 0.28s;\n}\n.md-radio-button span.radio-dot {\n  position: absolute;\n  border-radius: 50%;\n  top: 7px;\n  left: 4px;\n  width: 8px;\n  height: 8px;\n  transform: scale(0);\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 0.28s;\n}\n.md-radio-button.is-checked span.radio-dot {\n  transform: scale(1);\n}\n.md-checkbox.is-checked span.box span.check {\n  opacity: 1;\n}\n.md-switch {\n  padding-left: 44px;\n}\n.md-switch .thumb {\n  position: absolute;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  left: 0px;\n  top: 1px;\n  border-radius: 50%;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);\n  transition: left cubic-bezier(0.4, 0, 0.2, 1) 0.28s, background-color cubic-bezier(0.4, 0, 0.2, 1) 0.28s;\n}\n.md-switch .thumb .point-ripple {\n  left: -6px;\n  top: -6px;\n}\n.md-switch .track {\n  position: absolute;\n  display: inline-block;\n  left: 0px;\n  top: 4px;\n  width: 36px;\n  height: 14px;\n  border-radius: 14px;\n  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 0.28s;\n}\n.md-switch .track.accent-bg {\n  opacity: 0.5;\n}\n.md-switch.is-checked .thumb {\n  left: 16px;\n}\n.md-icon {\n  vertical-align: middle;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-size: cover;\n}\n.md-progress-bar {\n  width: 500px;\n  max-width: 100%;\n  position: relative;\n  display: inline-block;\n  height: 4px;\n}\n.md-progress-bar .progress {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.md-progress-bar .background {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.md-progress-bar .buffer {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  background-repeat: repeat;\n  background-size: 10px 10px;\n  background-position: 0px;\n  animation: buffering 1s infinite linear;\n}\n.md-progress-bar.indeterminate .progress {\n  animation: indeterminate-progress 2s infinite linear running;\n}\n.md-progress-bar.indeterminate .buffer {\n  display: none;\n}\n@keyframes buffering {\n  0% {\n    background-position: 0;\n  }\n  100% {\n    background-position: -20px;\n  }\n}\n@keyframes indeterminate-progress {\n  0% {\n    left: 0%;\n    width: 0%;\n  }\n  50% {\n    left: 25%;\n    width: 75%;\n  }\n  75% {\n    left: 100%;\n    width: 0%;\n  }\n  100% {\n    left: 100%;\n    width: 0%;\n  }\n  100% {\n    left: 0%;\n    width: 0%;\n  }\n}\n.md-spinner {\n  width: 28px;\n  height: 28px;\n  display: inline-block;\n  position: relative;\n  animation: spinner-outer-rotate 1568.23529412ms linear infinite;\n}\n.md-spinner .spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.md-spinner .spinner-layer.spinner-1 {\n  border-color: #42a5f5;\n  animation: spinnner-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, spinner-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.md-spinner .spinner-layer.spinner-2 {\n  border-color: #f44336;\n  animation: spinnner-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, spinner-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.md-spinner .spinner-layer.spinner-3 {\n  border-color: #fdd835;\n  animation: spinnner-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, spinner-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.md-spinner .spinner-layer.spinner-4 {\n  border-color: #4caf50;\n  animation: spinnner-fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, spinner-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.md-spinner .spinner-layer .spinner-circle {\n  width: 200%;\n  height: 100%;\n  border-radius: 50%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.md-spinner .spinner-layer .clipper {\n  display: inline-block;\n  position: relative;\n  border-color: inherit;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n.md-spinner .spinner-layer .left {\n  float: left;\n  border-right-color: transparent !important;\n}\n.md-spinner .spinner-layer .left .spinner-circle {\n  animation: spinner-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  transform: rotate(129deg);\n}\n.md-spinner .spinner-layer .right {\n  float: right;\n  border-left-color: transparent !important;\n}\n.md-spinner .spinner-layer .right .spinner-circle {\n  animation: spinner-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  left: -100%;\n  transform: rotate(-129deg);\n}\n.md-spinner .spinner-layer .gap-patch {\n  position: absolute;\n  box-sizing: border-box;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n.md-spinner .spinner-layer .gap-patch .spinner-circle {\n  width: 1000%;\n  left: -450%;\n}\n@keyframes spinner-outer-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinnner-fill-unfill-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  to {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes spinner-left-spin {\n  from {\n    transform: rotate(130deg);\n  }\n  50% {\n    transform: rotate(-5deg);\n  }\n  to {\n    transform: rotate(130deg);\n  }\n}\n@keyframes spinner-right-spin {\n  from {\n    transform: rotate(-130deg);\n  }\n  50% {\n    transform: rotate(5deg);\n  }\n  to {\n    transform: rotate(-130deg);\n  }\n}\n@keyframes spinner-1-fade-in-out {\n  from {\n    opacity: 0.99;\n  }\n  25% {\n    opacity: 0.99;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0.99;\n  }\n  100% {\n    opacity: 0.99;\n  }\n}\n@keyframes spinner-2-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0.99;\n  }\n  50% {\n    opacity: 0.99;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n@keyframes spinner-3-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.99;\n  }\n  75% {\n    opacity: 0.99;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n@keyframes spinner-4-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 0.99;\n  }\n  90% {\n    opacity: 0.99;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.md-slider {\n  width: 500px;\n  max-width: 100%;\n  position: relative;\n  display: inline-block;\n  padding: 10px;\n}\n.md-slider .gutter {\n  position: relative;\n  width: 100%;\n  height: 2px;\n}\n.md-slider .gutter .filled {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.md-slider .gutter .thumbPivot {\n  position: absolute;\n}\n.md-slider .gutter .thumbPivot .thumb {\n  position: relative;\n  vertical-align: middle;\n  top: -5px;\n  left: -5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  transition: top 0.2s, left 0.2s, width 0.2s, height 0.2s;\n}\n.md-slider .gutter .thumbPivot .thumb.active {\n  top: -8px;\n  left: -8px;\n  width: 18px;\n  height: 18px;\n}\n.md-tab-strip {\n  height: 48px;\n  padding: 0 24px;\n  position: relative;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  flex-grow: 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.md-tab-strip.scrollable {\n  padding: 0 48px;\n}\n.md-tab-strip .left-scroll {\n  position: absolute;\n  visibility: hidden;\n  top: 11px;\n  left: 10px;\n}\n.md-tab-strip .right-scroll {\n  position: absolute;\n  visibility: hidden;\n  top: 11px;\n  right: 10px;\n}\n.md-tab-strip.left-clipped .left-scroll,\n.md-tab-strip.right-clipped .right-scroll {\n  visibility: visible;\n}\n.md-tab-strip .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  transition: left cubic-bezier(0.4, 0, 0.2, 1) 0.2s, width cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n}\n.md-tab-pane {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.md-tab {\n  position: relative;\n  display: inline-block;\n  padding: 0px 24px;\n  line-height: 48px;\n  height: 48px;\n  text-transform: uppercase;\n}\n.md-tab label {\n  opacity: 0.7;\n  font-size: 13px;\n}\n.md-tab.is-active label {\n  opacity: 1;\n}\n.md-tab-content {\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  bottom: 0px;\n}\n.md-tab-content-area {\n  position: relative;\n  overflow: hidden;\n  text-overflow: clip;\n  width: 100%;\n  flex-grow: 1;\n}\n.md-tab-scroller {\n  position: absolute;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  transition: left cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n}\n.md-icon-button {\n  position: relative;\n}\n.md-menu {\n  position: absolute;\n  padding: 8px 0;\n  background: #fff;\n  border-radius: 2px;\n  min-width: 124px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  animation: unfold-menu 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n@keyframes unfold-menu {\n  from {\n    transform: translateY(-24px);\n    max-height: 10px;\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0px);\n    max-height: 1024px;\n    opacity: 1;\n  }\n}\n.md-menu-item {\n  padding: 0 16px;\n  font-size: 15px;\n  height: 48px;\n  line-height: 48px;\n  white-space: nowrap;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  position: relative;\n}\n.md-menu-item:hover {\n  background-color: #eee;\n}\n.md-menu-item .ripple {\n  background-color: #999;\n}\n.md-menu-item label {\n  position: relative;\n  pointer-events: none;\n  z-index: 2;\n}\n.md-menu.md-cascading-menu {\n  padding: 16px 0;\n}\n.md-cascading-menu .md-menu-item {\n  height: 32px;\n  line-height: 32px;\n}\n.md-menu-separator {\n  margin: 8px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n#md-layer-menu {\n  position: fixed;\n  z-index: 4;\n  top: 0px;\n  left: 0px;\n}\n.md-layer-menu-mask {\n  z-index: 3;\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n.md-split-pane {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.md-split-pane > .first,\n.md-split-pane > .second {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.md-split-pane > .splitter {\n  position: absolute;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.md-split-pane.md-split-vertical > .splitter {\n  width: 100%;\n  height: 16px;\n  cursor: ns-resize;\n}\n.md-split-pane.md-split-horizontal > .splitter {\n  width: 16px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.md-label {\n  font-size: 16px;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var styles = document.createElement("style");
	var meta = document.createElement("meta");
	meta.setAttribute("name", "theme-color");
	var themeSet = false;
	var SWATCH_INDICES = {
	    "50": 0, "100": 1, "200": 2, "300": 3, "400": 4,
	    "500": 5, "600": 6, "700": 7, "800": 8, "900": 9,
	    "A100": 10, "A200": 11, "A400": 12, "A700": 13,
	};
	var FG_COMPLEMENT = {
	    "Red": [4, 1],
	    "Pink": [3, 1],
	    "Purple": [3, 1],
	    "Deep Purple": [3, 1],
	    "Indigo": [3, 1],
	    "Blue": [4, 1],
	    "Light Blue": [6, 3],
	    "Cyan": [7, 4],
	    "Teal": [5, 4],
	    "Green": [6, 4],
	    "Light Green": [7, 4],
	    "Lime": [9, 4],
	    "Yellow": [10, 4],
	    "Amber": [10, 4],
	    "Orange": [8, 4],
	    "Deep Orange": [5, 2],
	    "Brown": [3],
	    "Grey": [6],
	    "Blue Grey": [4]
	};
	var SWATCH = {
	    "Red": [0xFFEBEE, 0xFFCDD2, 0xEF9A9A, 0xE57373, 0xEF5350,
	        0xF44336, 0xE53935, 0xD32F2F, 0xC62828, 0xB71C1C,
	        0xFF8A80, 0xFF5252, 0xFF1744, 0xD50000],
	    "Pink": [0xFCE4EC, 0xF8BBD0, 0xF48FB1, 0xF06292, 0xEC407A,
	        0xE91E63, 0xD81B60, 0xC2185B, 0xAD1457, 0x880E4F,
	        0xFF80AB, 0xFF4081, 0xFF4081, 0xC51162],
	    "Purple": [0xF3E5F5, 0xE1BEE7, 0xCE93D8, 0xBA68C8, 0xAB47BC,
	        0x9C27B0, 0x8E24AA, 0x7B1FA2, 0x6A1B9A, 0x4A148C,
	        0xEA80FC, 0xE040FB, 0xD500F9, 0xAA00FF],
	    "Deep Purple": [0xEDE7F6, 0xD1C4E9, 0xB39DDB, 0x9575CD, 0x7E57C2,
	        0x673AB7, 0x5E35B1, 0x512DA8, 0x512DA8, 0x311B92,
	        0xB388FF, 0x7C4DFF, 0x651FFF, 0x6200EA],
	    "Indigo": [0xE8EAF6, 0xC5CAE9, 0x9FA8DA, 0x7986CB, 0x5C6BC0,
	        0x3F51B5, 0x3949AB, 0x303F9F, 0x283593, 0x1A237E,
	        0x8C9EFF, 0x536DFE, 0x3D5AFE, 0x304FFE],
	    "Blue": [0xE3F2FD, 0xBBDEFB, 0x90CAF9, 0x64B5F6, 0x42A5F5,
	        0x2196F3, 0x1E88E5, 0x1976D2, 0x1565C0, 0x0D47A1,
	        0x82B1FF, 0x448AFF, 0x2979FF, 0x2962FF],
	    "Light Blue": [0xE1F5FE, 0xB3E5FC, 0x81D4FA, 0x4FC3F7, 0x29B6F6,
	        0x03A9F4, 0x039BE5, 0x0288D1, 0x0277BD, 0x01579B,
	        0x80D8FF, 0x40C4FF, 0x00B0FF, 0x0091EA],
	    "Teal": [0xE0F2F1, 0xB2DFDB, 0x80CBC4, 0x4DB6AC, 0x26A69A,
	        0x009688, 0x00897B, 0x00796B, 0x00695C, 0x004D40,
	        0xA7FFEB, 0x64FFDA, 0x1DE9B6, 0x00BFA5],
	    "Green": [0xE8F5E9, 0xC8E6C9, 0xA5D6A7, 0x81C784, 0x66BB6A,
	        0x4CAF50, 0x43A047, 0x388E3C, 0x2E7D32, 0x1B5E20,
	        0xB9F6CA, 0x69F0AE, 0x00E676, 0x00C853],
	    "Light Green": [0xF1F8E9, 0xDCEDC8, 0xC5E1A5, 0xAED581, 0x9CCC65,
	        0x8BC34A, 0x7CB342, 0x689F38, 0x558B2F, 0x33691E,
	        0xCCFF90, 0xB2FF59, 0x76FF03, 0x64DD17],
	    "Lime": [0xF9FBE7, 0xF0F4C3, 0xE6EE9C, 0xDCE775, 0xD4E157,
	        0xCDDC39, 0xC0CA33, 0xAFB42B, 0x9E9D24, 0x827717,
	        0xF4FF81, 0xEEFF41, 0xC6FF00, 0xAEEA00],
	    "Yellow": [0xFFFDE7, 0xFFF9C4, 0xFFF59D, 0xFFF176, 0xFFEE58,
	        0xFFEB3B, 0xFDD835, 0xFBC02D, 0xF9A825, 0xF57F17,
	        0xFFFF8D, 0xFFFF00, 0xFFEA00, 0xFFD600],
	    "Amber": [0xFFF8E1, 0xFFECB3, 0xFFE082, 0xFFD54F, 0xFFCA28,
	        0xFFC107, 0xFFB300, 0xFFA000, 0xFF8F00, 0xFF6F00,
	        0xFFE57F, 0xFFD740, 0xFFC400, 0xFFAB00],
	    "Orange": [0xFFF3E0, 0xFFE0B2, 0xFFCC80, 0xFFB74D, 0xFFA726,
	        0xFF9800, 0xFB8C00, 0xF57C00, 0xEF6C00, 0xE65100,
	        0xFFD180, 0xFFAB40, 0xFF9100, 0xFF6D00],
	    "Deep Orange": [0xFBE9E7, 0xFFCCBC, 0xFFAB91, 0xFF8A65, 0xFF7043,
	        0xFF5722, 0xF4511E, 0xE64A19, 0xD84315, 0xBF360C,
	        0xFF9E80, 0xFF6E40, 0xFF3D00, 0xDD2C00],
	    "Brown": [0xEFEBE9, 0xD7CCC8, 0xBCAAA4, 0xA1887F, 0x8D6E63,
	        0x795548, 0x6D4C41, 0x5D4037, 0x4E342E, 0x3E2723],
	    "Grey": [0xFAFAFA, 0xF5F5F5, 0xEEEEEE, 0xE0E0E0, 0xBDBDBD,
	        0x9E9E9E, 0x757575, 0x616161, 0x424242, 0x212121],
	    "Blue Grey": [0xECEFF1, 0xCFD8DC, 0xB0BEC5, 0x90A4AE, 0x78909C,
	        0x607D8B, 0x546E7A, 0x455A64, 0x37474F, 0x263238]
	};
	var intToRGB = function (c) { return [(c >> 16) & 0xFF, (c >> 8) & 0xFF, c & 0xFF]; };
	exports.getColor = function (name, entry) {
	    return intToRGB(SWATCH[name][SWATCH_INDICES[entry]]);
	};
	exports.getForeground = function (name, entry) {
	    var index = SWATCH_INDICES[entry];
	    if (index > 10) {
	        index -= 10;
	        return index < FG_COMPLEMENT[name][1] ? [0, 0, 0] : [255, 255, 255];
	    }
	    else {
	        return index < FG_COMPLEMENT[name][0] ? [0, 0, 0] : [255, 255, 255];
	    }
	};
	exports.PINK = [233, 30, 99];
	exports.PURPLE = [156, 39, 176];
	exports.DEEP_PURPLE = [103, 58, 183];
	exports.INDIGO = exports.getColor("Indigo", "500");
	exports.BLUE = [33, 150, 243];
	exports.LIGHT_BLUE = [3, 169, 244];
	function RGBtoHSV(_a) {
	    var r = _a[0], g = _a[1], b = _a[2];
	    var Cmax = Math.max(r, g, b);
	    var Cmin = Math.min(r, g, b);
	    var delta = Cmax - Cmin;
	    var h;
	    if (delta == 0)
	        h = 0;
	    else if (Cmax == r)
	        h = 60 * ((g - b) / delta % 6);
	    else if (Cmax == g)
	        h = 60 * ((b - r) / delta + 2);
	    else
	        h = 60 * ((r - g) / delta + 4);
	    var s = Cmax == 0 ? 0 : delta / Cmax;
	    while (h < 0)
	        h += 360;
	    h %= 360;
	    return [h, s, Cmax];
	}
	exports.RGBtoHSV = RGBtoHSV;
	function HSVtoRGB(_a) {
	    var h = _a[0], s = _a[1], v = _a[2];
	    var C = v * s;
	    var X = C * (1 - Math.abs((h / 60) % 2 - 1));
	    var m = v - C;
	    if (h >= 0 && h < 60)
	        return [C + m, X + m, m];
	    else if (h >= 60 && h < 120)
	        return [X + m, C + m, m];
	    else if (h >= 120 && h < 180)
	        return [m, C + m, X + m];
	    else if (h >= 180 && h < 240)
	        return [m, X + m, C + m];
	    else if (h >= 240 && h < 300)
	        return [X + m, m, C + m];
	    return [C + m, m, X + m];
	}
	exports.HSVtoRGB = HSVtoRGB;
	function setTheme(theme) {
	    var primary = exports.getColor(theme.primary[0], theme.primary[1]);
	    var primaryForeground = exports.getForeground(theme.primary[0], theme.primary[1]);
	    var accent = exports.getColor(theme.accent[0], theme.accent[1]);
	    var accentForeground = exports.getForeground(theme.accent[0], theme.accent[1]);
	    var pageBackground = exports.getColor(theme.background[0], theme.background[1]);
	    var pageForeground = exports.getForeground(theme.background[0], theme.background[1]);
	    while (styles.firstChild)
	        styles.removeChild(styles.firstChild);
	    meta.setAttribute("content", "rgb(" + primary.join(',') + ")");
	    var hsv = RGBtoHSV(primary.map(function (x) { return x / 255; }));
	    var primaryLightHSV = hsv.slice();
	    var primaryXLightHSV = hsv.slice();
	    hsv = RGBtoHSV(accent.map(function (x) { return x / 255; }));
	    var accentLightHSV = hsv.slice();
	    var accentXLightHSV = hsv.slice();
	    primaryLightHSV[1] = Math.min(primaryLightHSV[1] * 0.4, 1);
	    primaryXLightHSV[1] = Math.min(primaryXLightHSV[1] * 0.3, 1);
	    primaryLightHSV[2] = Math.min(primaryLightHSV[2] * 1.5, 1);
	    primaryXLightHSV[2] = Math.min(primaryXLightHSV[2] * 1.7, 1);
	    accentLightHSV[1] = Math.min(accentLightHSV[1] * 0.4, 1);
	    accentXLightHSV[1] = Math.min(accentXLightHSV[1] * 0.3, 1);
	    accentLightHSV[2] = Math.min(accentLightHSV[2] * 1.5, 1);
	    accentXLightHSV[2] = Math.min(accentXLightHSV[2] * 1.7, 1);
	    var primaryColor = "rgb(" + primary.join(',') + ")";
	    var accentColor = "rgb(" + accent.join(',') + ")";
	    var accentFGColor = "rgb(" + accentForeground.join(',') + ")";
	    var foreColor = "rgb(" + primaryForeground.join(',') + ")";
	    var pageBGColor = "rgb(" + pageBackground.join(',') + ")";
	    var pageFGColor = "rgb(" + pageForeground.join(',') + ")";
	    var primaryLight = "rgb(" + HSVtoRGB(primaryLightHSV).map(function (x) { return (x * 255) | 0; }).join(',') + ")";
	    var primaryXLight = "rgb(" + HSVtoRGB(primaryXLightHSV).map(function (x) { return (x * 255) | 0; }).join(',') + ")";
	    var accentLight = "rgb(" + HSVtoRGB(accentLightHSV).map(function (x) { return (x * 255) | 0; }).join(',') + ")";
	    var accentXLight = "rgb(" + HSVtoRGB(accentXLightHSV).map(function (x) { return (x * 255) | 0; }).join(',') + ")";
	    var style = ".primary-border {\n        border-color: " + primaryColor + " !important;\n    }\n\n    .check-radio-border {\n        border-color: " + (theme.dark ? "#fff" : "#000") + " !important;\n        opacity: " + (theme.dark ? 0.7 : 0.54) + ";\n    }\n\n    .switch-track-off {\n        background-color: " + (theme.dark ? "#fff" : "#000") + ";\n        opacity: " + (theme.dark ? 0.3 : 0.38) + "\n    }\n\n    .switch-thumb-off {\n        background-color: " + (theme.dark ? "#bdbdbd" : "#fafafa") + "\n    }\n\n    .accent-buffer {\n        background: radial-gradient(" + accentXLight + " 0%, " + accentXLight + " 29%, rgba(0,0,0,0) 29.01%, rgba(0, 0, 0, 0) 100%);\n    }\n\n    .background-fg-border {\n        border-color: " + pageFGColor + " !important;\n    }\n\n    .primary-text {\n        color: " + (theme.dark ? "#fff" : "#000") + ";\n        opacity: " + (theme.dark ? 1 : 0.87) + ";\n    }\n\n    .secondary-text {\n        color: " + (theme.dark ? "#fff" : "000") + " !important;\n        opacity: " + (theme.dark ? 0.7 : 0.54) + ";\n    }\n\n    .hint-text {\n        color: " + (theme.dark ? "#fff" : "000") + " !important;\n        opacity: " + (theme.dark ? 0.5 : 0.38) + ";\n    }\n    \n    html {\n        background-color: " + pageBGColor + "\n    }\n\n    .primary-fg {\n        color: " + primaryColor + " !important;\n    }\n\n    .primary-bg {\n        background-color: " + primaryColor + " !important;\n        color: " + foreColor + "\n    }\n\n    .primary-bg-lt {\n        background-color: " + primaryLight + " !important;\n    }\n\n    .primary-bg-xlt {\n        background-color: " + primaryXLight + " !important;\n    }\n\n    .slider-track {\n        background-color: " + (theme.dark ? "#fff" : "000") + ";\n        opacity: " + (theme.dark ? 0.3 : 0.26) + "\n    }\n    \n    .accent-fg {\n        color: " + accentColor + " !important;\n    }\n\n    .accent-bg {\n        background-color: " + accentColor + " !important;\n        color: " + accentFGColor + ";\n    }\n\n    .accent-border {\n        border-color: " + accentColor + " !important;\n    }\n    .accent-bg-lt {\n        background-color: " + accentLight + " !important;\n    }\n\n    .accent-bg-xlt {\n        background-color: " + accentXLight + " !important;\n    }\n\n    .md-slider .gutter {\n        background-color: " + (theme.dark ? "rgba(255,255,255,.3)" : "rgba(0,0,0,.26)") + " ;\n    }\n\n    .md-field {\n        border-bottom: 1px solid " + (theme.dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.12)") + ";\n    }\n    ";
	    var textNode = document.createTextNode(style);
	    styles.insertBefore(textNode, styles.firstChild);
	}
	exports.setTheme = setTheme;
	exports.THEME_DARK = {
	    primary: ["Blue Grey", "900"],
	    accent: ["Blue", "500"],
	    background: ["Grey", "900"],
	    dark: true
	};
	exports.THEME_LIGHT = {
	    primary: ["Indigo", "500"],
	    accent: ["Pink", "500"],
	    background: ["Grey", "50"],
	    dark: false
	};
	document.addEventListener("DOMContentLoaded", function () {
	    if (!themeSet) {
	        setTheme(exports.THEME_LIGHT);
	        themeSet = true;
	    }
	    document.head.appendChild(styles);
	    document.head.appendChild(meta);
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	var TextField = (function (_super) {
	    __extends(TextField, _super);
	    function TextField(props) {
	        var _this = _super.call(this, props) || this;
	        _this.updateInput = function (e) {
	            _this.setState(__assign({}, _this.state, { value: e.target.value }));
	            if (_this.props.onInput)
	                _this.props.onInput(e);
	        };
	        _this.setFocus = function (e) {
	            _this.setState(__assign({}, _this.state, { focused: true }));
	        };
	        _this.clearFocus = function (e) {
	            _this.setState(__assign({}, _this.state, { focused: false }));
	        };
	        _this.setState({ focused: false, value: props.value });
	        return _this;
	    }
	    TextField.prototype.componentWillReceiveProps = function (props) {
	        this.setState(__assign({}, this.state, { value: props.value }));
	    };
	    TextField.prototype.render = function () {
	        return preact_1.h("div", { class: "md-field " + (this.props.floatingLabel ? "floating-label " : "") + (this.state.focused ? " is-focused" : "") + (this.state.value !== "" ? " has-content" : "") },
	            preact_1.h("input", { value: this.state.value, onFocus: this.setFocus, onBlur: this.clearFocus, onInput: this.updateInput, className: "text-primary" }),
	            preact_1.h("label", { className: (this.state.value === "" ? "show-placeholder" : "no-placeholder") + ((this.state.focused || this.state.value !== "") ? " accent-fg" : " hint-text") }, this.props.placeholder),
	            preact_1.h("span", { className: "underline" }),
	            preact_1.h("span", { className: "after accent-bg" }));
	    };
	    return TextField;
	}(preact_1.Component));
	exports.TextField = TextField;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	var Toplevel = (function (_super) {
	    __extends(Toplevel, _super);
	    function Toplevel() {
	        return _super.apply(this, arguments) || this;
	    }
	    Toplevel.prototype.render = function () {
	        return preact_1.h("div", { id: "md-content" },
	            preact_1.h("div", { id: "md-layer-content" }, this.props.children),
	            preact_1.h("div", { id: "md-layer-menu-mask" }),
	            preact_1.h("div", { id: "md-layer-menu" }));
	    };
	    return Toplevel;
	}(preact_1.Component));
	exports.Toplevel = Toplevel;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var RippleBox_1 = __webpack_require__(11);
	__webpack_require__(7);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button() {
	        return _super.apply(this, arguments) || this;
	    }
	    Button.prototype.render = function () {
	        return preact_1.h("div", { class: "md-button", onClick: this.props.onClick },
	            this.props.disabled ? null : preact_1.h(RippleBox_1.RippleBox, null),
	            preact_1.h("button", { onClick: this.props.onClick, disabled: this.props.disabled, className: "accent-bg" }, this.props.children));
	    };
	    return Button;
	}(preact_1.Component));
	exports.Button = Button;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var domutil_1 = __webpack_require__(12);
	__webpack_require__(7);
	var RippleBox = (function (_super) {
	    __extends(RippleBox, _super);
	    function RippleBox() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.storeRipple = function (ripple) {
	            _this.ripple = ripple;
	        };
	        _this.triggerRipple = function (event) {
	            if (_this.timer)
	                clearTimeout(_this.timer);
	            if (event instanceof MouseEvent) {
	                var _a = domutil_1.globalPosition(_this.rippleBox), x = _a.x, y = _a.y;
	                _this.ripple.style.left = (event.pageX - x - 2) + "px";
	                _this.ripple.style.top = (event.pageY - y - 2) + "px";
	                window.addEventListener("mouseup", _this.resetRipple);
	            }
	            else if (event instanceof TouchEvent) {
	                var touch = event.changedTouches.item(0);
	                var _b = domutil_1.globalPosition(_this.rippleBox), x = _b.x, y = _b.y;
	                _this.ripple.style.left = (touch.pageX - x - 2) + "px";
	                _this.ripple.style.top = (touch.pageY - y - 2) + "px";
	                window.addEventListener("touchend", _this.resetRipple);
	            }
	            _this.ripple.classList.add("zoom");
	            _this.ripple.classList.remove("fade");
	        };
	        _this.resetRipple = function (event) {
	            if (_this.timer)
	                clearTimeout(_this.timer);
	            _this.timer = setTimeout(function () {
	                if (_this.ripple) {
	                    _this.ripple.classList.remove("zoom");
	                    _this.ripple.classList.add("fade");
	                }
	            }, 100);
	            window.removeEventListener("mouseup", _this.resetRipple);
	            window.removeEventListener("touchend", _this.resetRipple);
	        };
	        return _this;
	    }
	    RippleBox.prototype.componentDidMount = function () {
	        this.ripple.classList.remove("fade");
	        this.ripple.classList.remove("zoom");
	    };
	    RippleBox.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("div", { className: "ripple-box" + (this.props.extraClasses ? " " + this.props.extraClasses : ""), ref: function (x) { return _this.rippleBox = x; }, onMouseDown: this.triggerRipple, onTouchStart: this.triggerRipple },
	            preact_1.h("span", { ref: this.storeRipple, className: "ripple" + (this.props.rippleClass ? " " + this.props.rippleClass : ""), style: this.props.rippleColor ? { backgroundColor: this.props.rippleColor } : {} }));
	    };
	    return RippleBox;
	}(preact_1.Component));
	exports.RippleBox = RippleBox;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var topLeftElement = document.createElement("div");
	topLeftElement.style.position = "absolute";
	topLeftElement.style.left = "0px";
	topLeftElement.style.top = "0px";
	topLeftElement.style.width = "0px";
	topLeftElement.style.height = "0px";
	function globalPosition(elem) {
	    var r0 = topLeftElement.getBoundingClientRect();
	    var r1 = elem.getBoundingClientRect();
	    return {
	        x: r1.left - r0.left,
	        y: r1.top - r0.top
	    };
	}
	exports.globalPosition = globalPosition;
	function globalRect(elem) {
	    var r0 = topLeftElement.getBoundingClientRect();
	    var r1 = elem.getBoundingClientRect();
	    return {
	        x: r1.left - r0.left,
	        y: r1.top - r0.top,
	        width: r1.width,
	        height: r1.height,
	    };
	}
	exports.globalRect = globalRect;
	function waitForFonts(familyName, success, failure) {
	    function fontTester(familyName) {
	        var tester = document.createElement("span");
	        tester.textContent = "BESbswy menu";
	        tester.style.cssText = 'position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-family:serif;';
	        tester.style.fontFamily = "\"" + familyName + "\", serif";
	        document.body.appendChild(tester);
	        return tester;
	    }
	    function execute() {
	        var time = Date.now();
	        var fallback = fontTester("serif");
	        var fallbackWidth = fallback.offsetWidth;
	        var total = familyName.length;
	        var loaders = familyName.map(fontTester);
	        function cleanup() {
	            document.body.removeChild(fallback);
	            loaders.forEach(function (x) { return document.body.removeChild(x); });
	        }
	        function smash() {
	            loaders.forEach(function (x) {
	                if (fallbackWidth != x.offsetWidth && !x["done"]) {
	                    total--;
	                    x["done"] = true;
	                }
	            });
	            if (total == 0) {
	                cleanup();
	                success();
	            }
	            else if (Date.now() - time > 3000) {
	                failure();
	            }
	            else {
	                setTimeout(smash, 50);
	            }
	        }
	        smash();
	    }
	    if (document.body)
	        execute();
	    else
	        document.addEventListener("DOMContentLoaded", execute);
	}
	exports.waitForFonts = waitForFonts;
	document.addEventListener("DOMContentLoaded", function () {
	    document.body.appendChild(topLeftElement);
	});


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	var Label = (function (_super) {
	    __extends(Label, _super);
	    function Label() {
	        return _super.apply(this, arguments) || this;
	    }
	    Label.prototype.render = function () {
	        return preact_1.h("label", { className: "md-label secondary-text" }, this.props.children);
	    };
	    return Label;
	}(preact_1.Component));
	exports.Label = Label;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var RippleBox_1 = __webpack_require__(11);
	__webpack_require__(7);
	var IconButton = (function (_super) {
	    __extends(IconButton, _super);
	    function IconButton() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.click = function () {
	            if (_this.props.onClick)
	                _this.props.onClick();
	        };
	        return _this;
	    }
	    IconButton.prototype.render = function () {
	        return preact_1.h("div", { class: "md-icon-button", "aria-role": "button", onMouseDown: this.click, onTouchStart: this.click },
	            this.props.children,
	            preact_1.h(RippleBox_1.RippleBox, { extraClasses: "ripple-icon" }));
	    };
	    return IconButton;
	}(preact_1.Component));
	exports.IconButton = IconButton;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	var Portal = __webpack_require__(16);
	__webpack_require__(3);
	var domutil_1 = __webpack_require__(12);
	var RippleBox_1 = __webpack_require__(11);
	__webpack_require__(7);
	var MenuButton = (function (_super) {
	    __extends(MenuButton, _super);
	    function MenuButton(props) {
	        var _this = _super.call(this, props) || this;
	        _this.myBox = { x: 0, y: 0, width: 0, height: 0 };
	        _this.click = function (e) {
	            e.preventDefault();
	            _this.myBox = domutil_1.globalRect(_this.myElem);
	            _this.myBox.x += _this.myBox.width;
	            _this.myBox.width = 0;
	            _this.setState({ open: true });
	        };
	        _this.closeMenu = function (e) {
	            e.preventDefault();
	            _this.setState(__assign({}, _this.state, { open: false }));
	        };
	        _this.state = { open: false };
	        return _this;
	    }
	    MenuButton.prototype.componentDidMount = function () {
	    };
	    MenuButton.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("div", { ref: function (x) { return _this.myElem = x; }, class: "md-icon-button", "aria-role": "button", onMouseDown: this.click, onTouchEnd: this.click },
	            this.props.children,
	            preact_1.h(RippleBox_1.RippleBox, { extraClasses: "ripple-icon" }),
	            this.state.open ? [preact_1.h(Portal, { into: "#md-layer-menu" }, preact_1.cloneElement(this.props.menu, __assign({}, this.myBox, { closeMenu: function () { return _this.setState(__assign({}, _this.state, { open: false })); } }))),
	                preact_1.h(Portal, { into: "body" },
	                    preact_1.h("div", { class: "md-layer-menu-mask", onClick: this.closeMenu, onTouchStart: this.closeMenu }))] : []);
	    };
	    return MenuButton;
	}(preact_1.Component));
	exports.MenuButton = MenuButton;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? module.exports = factory(__webpack_require__(1)) :
	  typeof define === 'function' && define.amd ? define(['preact'], factory) :
	  (global.preactPortal = factory(global.preact));
	}(this, (function (preact) { 'use strict';
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	var Portal = function (_Component) {
		inherits(Portal, _Component);
	
		function Portal() {
			classCallCheck(this, Portal);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
	
		Portal.prototype.componentDidUpdate = function componentDidUpdate(props) {
			for (var i in props) {
				if (props[i] !== this.props[i]) {
					return this.renderLayer();
				}
			}
		};
	
		Portal.prototype.componentDidMount = function componentDidMount() {
			this.renderLayer();
		};
	
		Portal.prototype.componentWillUnmount = function componentWillUnmount() {
			this.renderLayer(false);
			if (this.remote) this.remote.parentNode.removeChild(this.remote);
		};
	
		Portal.prototype.findNode = function findNode(node) {
			return typeof node === 'string' ? document.querySelector(node) : node;
		};
	
		Portal.prototype.renderLayer = function renderLayer() {
			var show = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
			if (this.props.into !== this.intoPointer) {
				this.intoPointer = this.props.into;
				if (this.into && this.remote) {
					this.remote = preact.render(preact.h(PortalProxy, null), this.into, this.remote);
				}
				this.into = this.findNode(this.props.into);
			}
	
			this.remote = preact.render(preact.h(
				PortalProxy,
				{ context: this.context },
				show && this.props.children || null
			), this.into, this.remote);
		};
	
		Portal.prototype.render = function render() {
			return null;
		};
	
		return Portal;
	}(preact.Component);
	
	var PortalProxy = function (_Component2) {
		inherits(PortalProxy, _Component2);
	
		function PortalProxy() {
			classCallCheck(this, PortalProxy);
			return possibleConstructorReturn(this, _Component2.apply(this, arguments));
		}
	
		PortalProxy.prototype.getChildContext = function getChildContext() {
			return this.props.context;
		};
	
		PortalProxy.prototype.render = function render(_ref) {
			var children = _ref.children;
	
			return children && children[0] || null;
		};
	
		return PortalProxy;
	}(preact.Component);
	
	return Portal;
	
	})));
	//# sourceMappingURL=preact-portal.js.map


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var RippleBox_1 = __webpack_require__(11);
	__webpack_require__(7);
	var Checkbox = (function (_super) {
	    __extends(Checkbox, _super);
	    function Checkbox(props) {
	        var _this = _super.call(this) || this;
	        _this.updateCheck = function () {
	            _this.setState(__assign({}, _this.state, { checked: _this.elem.checked }));
	        };
	        _this.state = { checked: props.checked };
	        return _this;
	    }
	    Checkbox.prototype.componentDidReceiveProps = function () {
	        this.setState(__assign({}, this.state, { checked: this.props.checked }));
	    };
	    Checkbox.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("label", { className: "md-checkbox" + (this.state.checked ? " is-checked" : "") },
	            preact_1.h("input", { ref: function (e) { return _this.elem = e; }, type: "checkbox", checked: this.state.checked, onChange: this.updateCheck }),
	            preact_1.h("i", { className: "material-icons check-item" + (this.state.checked ? " accent-fg" : " secondary-text") }, this.state.checked ? "check_box" : "check_box_outline_blank"),
	            preact_1.h("span", { className: "label secondary-text" }, this.props.title),
	            preact_1.h(RippleBox_1.RippleBox, { extraClasses: "point-ripple", rippleClass: "accent-bg" }));
	    };
	    return Checkbox;
	}(preact_1.Component));
	exports.Checkbox = Checkbox;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var RippleBox_1 = __webpack_require__(11);
	__webpack_require__(7);
	var Switch = (function (_super) {
	    __extends(Switch, _super);
	    function Switch(props) {
	        var _this = _super.call(this) || this;
	        _this.updateCheck = function () {
	            _this.setState(__assign({}, _this.state, { checked: _this.elem.checked }));
	        };
	        _this.state = { checked: props.checked };
	        return _this;
	    }
	    Switch.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("label", { className: "md-switch" + (this.state.checked ? " is-checked" : "") },
	            preact_1.h("input", { ref: function (e) { return _this.elem = e; }, type: "checkbox", checked: this.state.checked, onChange: this.updateCheck }),
	            preact_1.h("span", { className: "track" + (this.state.checked ? " accent-bg" : " switch-track-off") }),
	            preact_1.h("span", { className: "thumb" + (this.state.checked ? " accent-bg" : "  switch-thumb-off") },
	                preact_1.h(RippleBox_1.RippleBox, { extraClasses: "point-ripple", rippleClass: "accent-bg" })),
	            preact_1.h("span", { className: "label secondary-text" }, this.props.title));
	    };
	    return Switch;
	}(preact_1.Component));
	exports.Switch = Switch;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var RippleBox_1 = __webpack_require__(11);
	__webpack_require__(7);
	var radios = [];
	function updateCheck() {
	    radios.forEach(function (r) { r.setState(__assign({}, r.state, { checked: r.elem.checked })); });
	}
	var RadioButton = (function (_super) {
	    __extends(RadioButton, _super);
	    function RadioButton() {
	        return _super.apply(this, arguments) || this;
	    }
	    RadioButton.prototype.componentDidMount = function () {
	        radios.push(this);
	    };
	    RadioButton.prototype.componentDidUnmount = function () {
	        radios.splice(radios.indexOf(this), 1);
	    };
	    RadioButton.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("label", { className: "md-radio-button" + (this.state.checked ? " is-checked" : "") },
	            preact_1.h("input", { ref: function (e) { return _this.elem = e; }, name: this.props.name, type: "radio", value: this.props.value, onChange: updateCheck }),
	            preact_1.h("span", { className: "radio-circle" + (this.state.checked ? " accent-border" : " check-radio-border") }),
	            preact_1.h("span", { className: "radio-dot accent-bg" }),
	            preact_1.h("span", { className: "label secondary-text" }, this.props.title),
	            preact_1.h(RippleBox_1.RippleBox, { extraClasses: "point-ripple", rippleClass: "accent-bg" }));
	    };
	    return RadioButton;
	}(preact_1.Component));
	exports.RadioButton = RadioButton;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	var or100 = function (n) { return n === undefined ? 100 : n; };
	var ProgressBar = (function (_super) {
	    __extends(ProgressBar, _super);
	    function ProgressBar() {
	        return _super.apply(this, arguments) || this;
	    }
	    ProgressBar.prototype.render = function () {
	        return preact_1.h("div", { className: "md-progress-bar" + (this.props.indeterminate ? " indeterminate" : "") },
	            preact_1.h("div", { className: "background accent-bg-lt", style: { width: (this.props.indeterminate ? 100 : Math.max(0, Math.min(100, or100(this.props.buffer)))) + "%" } }),
	            preact_1.h("div", { className: "progress accent-bg", style: { width: Math.max(0, Math.min(100, this.props.progress)) + "%" } }),
	            preact_1.h("div", { className: "buffer accent-buffer", style: { width: (this.props.indeterminate ? 0 : Math.max(0, Math.min(100, 100 - or100(this.props.buffer)))) + "%" } }));
	    };
	    return ProgressBar;
	}(preact_1.Component));
	exports.ProgressBar = ProgressBar;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	var Spinner = (function (_super) {
	    __extends(Spinner, _super);
	    function Spinner() {
	        return _super.apply(this, arguments) || this;
	    }
	    Spinner.prototype.render = function () {
	        return preact_1.h("div", { className: "md-spinner" },
	            preact_1.h("div", { className: "spinner-layer spinner-1" },
	                preact_1.h("div", { className: "clipper left" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "gap-patch" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "clipper right" },
	                    preact_1.h("div", { className: "spinner-circle" }))),
	            preact_1.h("div", { className: "spinner-layer spinner-2" },
	                preact_1.h("div", { className: "clipper left" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "gap-patch" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "clipper right" },
	                    preact_1.h("div", { className: "spinner-circle" }))),
	            preact_1.h("div", { className: "spinner-layer spinner-3" },
	                preact_1.h("div", { className: "clipper left" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "gap-patch" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "clipper right" },
	                    preact_1.h("div", { className: "spinner-circle" }))),
	            preact_1.h("div", { className: "spinner-layer spinner-4" },
	                preact_1.h("div", { className: "clipper left" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "gap-patch" },
	                    preact_1.h("div", { className: "spinner-circle" })),
	                preact_1.h("div", { className: "clipper right" },
	                    preact_1.h("div", { className: "spinner-circle" }))));
	    };
	    return Spinner;
	}(preact_1.Component));
	exports.Spinner = Spinner;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	__webpack_require__(3);
	var domutil_1 = __webpack_require__(12);
	__webpack_require__(7);
	var Slider = (function (_super) {
	    __extends(Slider, _super);
	    function Slider(props) {
	        var _this = _super.call(this, props) || this;
	        _this.positionThumb = function () {
	            _this.thumbPivot.style.left = _this.getThumbPosition();
	        };
	        _this.xToValue = function (position) {
	            var _a = domutil_1.globalRect(_this.gutter), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	            return Math.max(_this.state.min, Math.min(_this.state.max, (position - x - _this.dragOffset) / width * (_this.state.max - _this.state.min) + _this.state.min));
	        };
	        _this.onDrag = function (event) {
	            if (event instanceof MouseEvent)
	                _this.setState(__assign({}, _this.state, { value: _this.xToValue(event.pageX) }));
	            else
	                _this.setState(__assign({}, _this.state, { value: _this.xToValue(event.changedTouches[0].pageX) }));
	        };
	        _this.endDrag = function () {
	            _this.thumb.classList.remove("active");
	            window.removeEventListener("mouseup", _this.endDrag);
	            window.removeEventListener("mousemove", _this.onDrag);
	            window.removeEventListener("touchend", _this.endDrag);
	            window.removeEventListener("touchmove", _this.onDrag);
	        };
	        _this.thumbDown = function (event) {
	            _this.thumb.classList.add("active");
	            event.preventDefault();
	            event.stopImmediatePropagation();
	            if (event instanceof MouseEvent) {
	                var _a = domutil_1.globalPosition(_this.thumbPivot), x = _a.x, y = _a.y;
	                _this.dragOffset = event.pageX - x;
	                window.addEventListener("mousemove", _this.onDrag);
	                window.addEventListener("mouseup", _this.endDrag);
	            }
	        };
	        _this.gutterDown = function (event) {
	            _this.thumb.classList.add("active");
	            event.preventDefault();
	            var _a = domutil_1.globalPosition(_this.thumbPivot), x = _a.x, y = _a.y;
	            _this.dragOffset = 0;
	            if (event instanceof MouseEvent) {
	                _this.setState(__assign({}, _this.state, { value: _this.xToValue(event.pageX) }));
	                window.addEventListener("mousemove", _this.onDrag);
	                window.addEventListener("mouseup", _this.endDrag);
	            }
	            else {
	                _this.setState(__assign({}, _this.state, { value: _this.xToValue(event.changedTouches[0].pageX) }));
	                window.addEventListener("touchmove", _this.onDrag);
	                window.addEventListener("touchend", _this.endDrag);
	            }
	        };
	        _this.state = __assign({}, props);
	        return _this;
	    }
	    Slider.prototype.getThumbPosition = function () {
	        return ((this.state.value - this.state.min) / (this.state.max - this.state.min)) * 100 + "%";
	    };
	    Slider.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("div", { className: "md-slider", onMouseDown: this.gutterDown, onTouchStart: this.gutterDown },
	            preact_1.h("div", { className: "gutter", ref: function (x) { return _this.gutter = x; } },
	                preact_1.h("div", { className: "filled accent-bg", style: { width: this.getThumbPosition() } }),
	                preact_1.h("div", { className: "thumbPivot", ref: function (x) { return _this.thumbPivot = x; }, style: { left: this.getThumbPosition() } },
	                    preact_1.h("div", { className: "thumb accent-bg", ref: function (x) { return _this.thumb = x; }, onMouseDown: this.thumbDown }))));
	    };
	    return Slider;
	}(preact_1.Component));
	exports.Slider = Slider;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(1);
	var domutil_1 = __webpack_require__(12);
	__webpack_require__(3);
	var RippleBox_1 = __webpack_require__(11);
	var TabStrip = (function (_super) {
	    __extends(TabStrip, _super);
	    function TabStrip(props) {
	        var _this = _super.call(this) || this;
	        _this.tabElements = {};
	        _this.tabComponents = {};
	        _this.selectTab = function (id) { return function (event) {
	            _this.setState({ active: id });
	        }; };
	        _this.state = { active: props.active };
	        return _this;
	    }
	    TabStrip.prototype.update = function () {
	        var thisRect = domutil_1.globalRect(this.elem);
	        var tabRect = domutil_1.globalRect(this.tabElements[this.state.active]);
	        var left = tabRect.x - thisRect.x;
	        this.indicator.style.left = left + "px";
	        this.indicator.style.width = tabRect.width + "px";
	        for (var i = 0; i < this.props.tabs.length; i++) {
	            if (this.props.tabs[i].id == this.state.active) {
	                this.scroller.style.left = -i * 100 + "%";
	            }
	        }
	    };
	    TabStrip.prototype.componentDidMount = function () {
	        this.update();
	    };
	    TabStrip.prototype.componentDidUpdate = function () {
	        this.update();
	    };
	    TabStrip.prototype.activeComponent = function () {
	        for (var i = 0; i < this.props.tabs.length; i++) {
	            if (this.props.tabs[i].id == this.state.active)
	                return this.props.tabs[i].component;
	        }
	    };
	    TabStrip.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("div", { className: "md-tab-pane" + (this.props.extraClasses ? " " + this.props.extraClasses : "") },
	            preact_1.h("div", { ref: function (x) { return _this.elem = x; }, className: "md-tab-strip primary-bg" + (this.props.scrollable ? " scrollable" : "") },
	                preact_1.h("i", { className: "material-icons left-scroll" }, "chevron_left"),
	                preact_1.h("i", { className: "material-icons right-scroll" }, "chevron_right"),
	                this.props.tabs.map(function (child) {
	                    return preact_1.h("div", { ref: function (x) { return _this.tabElements[child.id] = x; }, className: "md-tab" + (child.id == _this.state.active ? " is-active" : ""), onMouseDown: _this.selectTab(child.id), onTouchStart: _this.selectTab(child.id) },
	                        preact_1.h(RippleBox_1.RippleBox, null),
	                        child.title);
	                }),
	                preact_1.h("div", { ref: function (x) { return _this.indicator = x; }, className: "indicator accent-bg" })),
	            preact_1.h("div", { className: "md-tab-content-area" },
	                preact_1.h("div", { className: "md-tab-scroller", ref: function (x) { return _this.scroller = x; } }, this.props.tabs.map(function (tab, i) {
	                    return preact_1.h("div", { className: "md-tab-content", style: { left: (i * 100) + "%" } }, tab.component);
	                }))));
	    };
	    return TabStrip;
	}(preact_1.Component));
	exports.TabStrip = TabStrip;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	var RippleBox_1 = __webpack_require__(11);
	var domutil_1 = __webpack_require__(12);
	var Menu = (function (_super) {
	    __extends(Menu, _super);
	    function Menu(props) {
	        var _this = _super.call(this) || this;
	        _this.state = { visible: false, x: 0, y: 0 };
	        return _this;
	    }
	    Menu.prototype.componentDidMount = function () {
	        var myRect = domutil_1.globalRect(this.myElem);
	        var x = 0;
	        var y = 0;
	        if (myRect.width + this.props.x > window.innerWidth) {
	            x = this.props.x - myRect.width;
	        }
	        else {
	            x = this.props.x + this.props.width;
	        }
	        y = this.props.y;
	        this.setState(__assign({}, this.state, { visible: true, x: x, y: y }));
	    };
	    Menu.prototype.render = function (_a, _b) {
	        var _this = this;
	        var visible = _b.visible;
	        return preact_1.h("div", { ref: function (x) { return _this.myElem = x; }, style: { visibility: visible ? "visible" : "hidden", left: this.state.x + "px", top: this.state.y + "px" }, className: "md-menu md-cascading-menu" }, this.props.children.map(function (c) { return preact_1.cloneElement(c, { closeMenu: _this.props.closeMenu }); }));
	    };
	    return Menu;
	}(preact_1.Component));
	exports.Menu = Menu;
	var MenuItem = (function (_super) {
	    __extends(MenuItem, _super);
	    function MenuItem() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.trigger = function () {
	            if (_this.props.action)
	                _this.props.action();
	            if (_this.props.closeMenu)
	                _this.props.closeMenu();
	        };
	        return _this;
	    }
	    MenuItem.prototype.render = function () {
	        return preact_1.h("div", { className: "md-menu-item", onClick: this.trigger },
	            preact_1.h(RippleBox_1.RippleBox, null),
	            preact_1.h("label", null, this.props.label));
	    };
	    return MenuItem;
	}(preact_1.Component));
	exports.MenuItem = MenuItem;
	var MenuSeparator = (function (_super) {
	    __extends(MenuSeparator, _super);
	    function MenuSeparator() {
	        return _super.apply(this, arguments) || this;
	    }
	    MenuSeparator.prototype.render = function () {
	        return preact_1.h("div", { className: "md-menu-separator" });
	    };
	    return MenuSeparator;
	}(preact_1.Component));
	exports.MenuSeparator = MenuSeparator;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	var domutil_1 = __webpack_require__(12);
	var ResizeTrigger_1 = __webpack_require__(26);
	var SplitPane = (function (_super) {
	    __extends(SplitPane, _super);
	    function SplitPane() {
	        var _this = _super.call(this) || this;
	        _this.dragOffset = 0;
	        _this.onDrag = function (event) {
	            if (_this.props.axis == "vertical") {
	                if (event instanceof MouseEvent)
	                    _this.setState(__assign({}, _this.state, { splitPos: _this.yToValue(event.pageY) }));
	                else
	                    _this.setState(__assign({}, _this.state, { splitPos: _this.yToValue(event.changedTouches[0].pageY) }));
	            }
	            else {
	                if (event instanceof MouseEvent)
	                    _this.setState(__assign({}, _this.state, { splitPos: _this.xToValue(event.pageX) }));
	                else
	                    _this.setState(__assign({}, _this.state, { splitPos: _this.xToValue(event.changedTouches[0].pageX) }));
	            }
	        };
	        _this.startDrag = function (event) {
	            event.preventDefault();
	            var splitRect = domutil_1.globalRect(_this.splitter);
	            if (event instanceof MouseEvent) {
	                _this.dragOffset = _this.props.axis == "vertical" ? event.pageY - splitRect.y : event.pageX - splitRect.x;
	                window.addEventListener("mousemove", _this.onDrag);
	                window.addEventListener("mouseup", _this.endDrag);
	            }
	            else {
	                _this.dragOffset = _this.props.axis == "vertical" ? event.changedTouches[0].pageY - splitRect.y : event.changedTouches[0].pageX - splitRect.x;
	                window.addEventListener("touchmove", _this.onDrag);
	                window.addEventListener("touchend", _this.endDrag);
	            }
	        };
	        _this.endDrag = function () {
	            window.removeEventListener("mouseup", _this.endDrag);
	            window.removeEventListener("mousemove", _this.onDrag);
	            window.removeEventListener("touchend", _this.endDrag);
	            window.removeEventListener("touchmove", _this.onDrag);
	        };
	        _this.state = { splitPos: 0.5, myRect: { x: 0, y: 0, width: 0, height: 0 }, splitterRect: { x: 0, y: 0, width: 0, height: 0 } };
	        return _this;
	    }
	    SplitPane.prototype.xToValue = function (xPos) {
	        var _a = domutil_1.globalRect(this.myElem), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        return Math.max(0, Math.min(1, (xPos - x - this.dragOffset) / (width - this.splitter.offsetWidth)));
	    };
	    SplitPane.prototype.yToValue = function (yPos) {
	        var _a = domutil_1.globalRect(this.myElem), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        return Math.max(0, Math.min(1, (yPos - y - this.dragOffset) / (height - this.splitter.offsetHeight)));
	    };
	    SplitPane.prototype.computeSizes = function () {
	        if (!this.splitter) {
	            return {
	                firstRect: {},
	                splitterRect: {},
	                secondRect: {}
	            };
	        }
	        var myRect = this.state.myRect;
	        var splitPos = this.state.splitPos;
	        if (this.props.axis == "vertical") {
	            var h_1 = myRect.height - this.splitter.offsetHeight;
	            return {
	                firstRect: { top: "0px", height: (h_1 * splitPos) + "px" },
	                splitterRect: { top: (h_1 * splitPos) + "px" },
	                secondRect: { height: (h_1 * (1 - splitPos)) + "px", top: (h_1 * splitPos + this.splitter.offsetHeight) + "px" }
	            };
	        }
	        else {
	            var w = myRect.width - this.splitter.offsetWidth;
	            return {
	                firstRect: { left: "0px", width: (w * splitPos) + "px" },
	                splitterRect: { left: (w * splitPos) + "px" },
	                secondRect: { left: (w * splitPos + this.splitter.offsetWidth) + "px", width: (w * (1 - splitPos)) + "px" }
	            };
	        }
	    };
	    SplitPane.prototype.resizeChildren = function () {
	        this.setState(__assign({}, this.state, { myRect: domutil_1.globalRect(this.myElem), splitterRect: domutil_1.globalRect(this.splitter) }));
	    };
	    SplitPane.prototype.componentDidMount = function () {
	        this.resizeChildren();
	    };
	    SplitPane.prototype.render = function () {
	        var _this = this;
	        var _a = this.computeSizes(), firstRect = _a.firstRect, splitterRect = _a.splitterRect, secondRect = _a.secondRect;
	        return preact_1.h("div", { ref: function (x) { return _this.myElem = x; }, className: "md-split-pane md-split-" + this.props.axis },
	            preact_1.h(ResizeTrigger_1.ResizeTrigger, { onResize: function () { return _this.resizeChildren(); } }),
	            preact_1.h("div", { key: "first", style: firstRect, ref: function (x) { return _this.first = x; }, className: "first" }, this.props.first),
	            preact_1.h("div", { key: "second", style: secondRect, ref: function (x) { return _this.second = x; }, className: "second" }, this.props.second),
	            preact_1.h("div", { key: "split", style: splitterRect, ref: function (x) { return _this.splitter = x; }, className: "splitter" + (this.props.extraClasses ? " " + this.props.extraClasses : ""), onMouseDown: this.startDrag, onTouchStart: this.startDrag }, this.props.children));
	    };
	    return SplitPane;
	}(preact_1.Component));
	exports.SplitPane = SplitPane;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var preact_1 = __webpack_require__(1);
	var ResizeTrigger = (function (_super) {
	    __extends(ResizeTrigger, _super);
	    function ResizeTrigger() {
	        var _this = _super.call(this) || this;
	        _this.handleScroll = function () {
	            if (typeof window === undefined)
	                return;
	            var _a = _this.containerSize(), width = _a[0], height = _a[1];
	            if (width !== _this.state.lastWidth || height !== _this.state.lastHeight)
	                _this.props.onResize();
	            _this.reset(width, height);
	        };
	        createStyles();
	        _this.setState({ expandChildWidth: 0, expandChildHeight: 0, expandScrollLeft: 0, expandScrollTop: 0, contractScrollTop: 0, contractScrollLeft: 0, lastWidth: 0, lastHeight: 0 });
	        return _this;
	    }
	    ResizeTrigger.prototype.componentWillMount = function () {
	        this["forceUpdate"]();
	    };
	    ResizeTrigger.prototype.componentDidMount = function () {
	        var _a = this.containerSize(), width = _a[0], height = _a[1];
	        this.reset(width, height);
	    };
	    ResizeTrigger.prototype.shouldComponentUpdate = function (newProps) {
	        return this.props !== newProps;
	    };
	    ResizeTrigger.prototype.reset = function (width, height) {
	        if (typeof window === "undefined")
	            return;
	        var parent = this.myElem.parentElement;
	        if (getComputedStyle(parent).position == "static")
	            parent.style.position = "relative";
	        this.setState(__assign({}, this.state, { expandChildHeight: this.expand.offsetHeight + 10, expandChildWidth: this.expand.offsetWidth + 10, lastWidth: width, lastHeight: height }));
	    };
	    ResizeTrigger.prototype.componentDidUpdate = function () {
	        this.expand.scrollLeft = this.expand.scrollWidth;
	        this.expand.scrollTop = this.expand.scrollHeight;
	        this.contract.scrollLeft = this.contract.scrollWidth;
	        this.contract.scrollTop = this.contract.scrollHeight;
	    };
	    ResizeTrigger.prototype.containerSize = function () {
	        if (this.myElem)
	            return [this.myElem.parentElement.offsetWidth, this.myElem.parentElement.offsetHeight];
	        return [0, 0];
	    };
	    ResizeTrigger.prototype.render = function () {
	        var _this = this;
	        return preact_1.h("div", { className: "resize-triggers", ref: function (x) { return _this.myElem = x; } },
	            preact_1.h("div", { ref: function (x) { return _this.expand = x; }, onScroll: this.handleScroll, class: "expand-trigger" },
	                preact_1.h("div", { ref: function (x) { return _this.expandChild = x; }, style: { width: this.state.expandChildWidth + "px", height: this.state.expandChildHeight + "px" } })),
	            preact_1.h("div", { ref: function (x) { return _this.contract = x; }, onScroll: this.handleScroll, className: "contract-trigger" },
	                preact_1.h("div", null)));
	    };
	    return ResizeTrigger;
	}(preact_1.Component));
	exports.ResizeTrigger = ResizeTrigger;
	var stylesCreated = false;
	var createStyles = function () {
	    if (!stylesCreated) {
	        var css = '.resize-triggers { visibility: hidden; opacity: 0; } ' +
	            '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
	        style.type = 'text/css';
	        if (style["styleSheet"])
	            style["styleSheet"].cssText = css;
	        else
	            style.appendChild(document.createTextNode(css));
	        head.appendChild(style);
	        stylesCreated = true;
	    }
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(__webpack_require__(1)) :
	  typeof define === 'function' && define.amd ? define(['preact'], factory) :
	  (factory(global.preact));
	}(this, function (preact) { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.inherits = function (subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  };
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  var ATTR_KEY = typeof Symbol !== 'undefined' ? Symbol['for']('preactattr') : '__preactattr_';
	
	  /** @private is the given object a Function? */
	
	  function isFunction(obj) {
	  	return 'function' === typeof obj;
	  }
	
	  /** Check if a VNode is a reference to a stateless functional component.
	   *	A function component is represented as a VNode whose `nodeName` property is a reference to a function.
	   *	If that function is not a Component (ie, has no `.render()` method on a prototype), it is considered a stateless functional component.
	   *	@param {VNode} vnode	A VNode
	   *	@private
	   */
	
	  function isFunctionalComponent(vnode) {
	    var nodeName = vnode && vnode.nodeName;
	    return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	  }
	
	  /**
	   * Return a ReactElement-compatible object for the current state of a preact
	   * component.
	   */
	  function createReactElement(component) {
	  	return {
	  		type: component.constructor,
	  		key: component.key,
	  		ref: null, // Unsupported
	  		props: component.props
	  	};
	  }
	
	  /**
	   * Create a ReactDOMComponent-compatible object for a given DOM node rendered
	   * by preact.
	   *
	   * This implements the subset of the ReactDOMComponent interface that
	   * React DevTools requires in order to display DOM nodes in the inspector with
	   * the correct type and properties.
	   *
	   * @param {Node} node
	   */
	  function createReactDOMComponent(node) {
	  	var childNodes = node.nodeType === Node.ELEMENT_NODE ? Array.from(node.childNodes) : [];
	
	  	var isText = node.nodeType === Node.TEXT_NODE;
	
	  	return {
	  		// --- ReactDOMComponent interface
	  		_currentElement: isText ? node.textContent : {
	  			type: node.nodeName.toLowerCase(),
	  			props: node[ATTR_KEY]
	  		},
	  		_renderedChildren: childNodes.map(function (child) {
	  			if (child._component) {
	  				return updateReactComponent(child._component);
	  			}
	  			return updateReactComponent(child);
	  		}),
	  		_stringText: isText ? node.textContent : null,
	
	  		// --- Additional properties used by preact devtools
	
	  		// A flag indicating whether the devtools have been notified about the
	  		// existence of this component instance yet.
	  		// This is used to send the appropriate notifications when DOM components
	  		// are added or updated between composite component updates.
	  		_inDevTools: false,
	  		node: node
	  	};
	  }
	
	  /**
	   * Return the name of a component created by a `ReactElement`-like object.
	   *
	   * @param {ReactElement} element
	   */
	  function typeName(element) {
	  	if (typeof element.type === 'function') {
	  		return element.type.displayName || element.type.name;
	  	}
	  	return element.type;
	  }
	
	  /**
	   * Return a ReactCompositeComponent-compatible object for a given preact
	   * component instance.
	   *
	   * This implements the subset of the ReactCompositeComponent interface that
	   * the DevTools requires in order to walk the component tree and inspect the
	   * component's properties.
	   *
	   * See https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/getData.js
	   */
	  function createReactCompositeComponent(component) {
	  	var _currentElement = createReactElement(component);
	  	var node = component.base;
	
	  	var instance = {
	  		// --- ReactDOMComponent properties
	  		getName: function getName() {
	  			return typeName(_currentElement);
	  		},
	  		_currentElement: createReactElement(component),
	  		props: component.props,
	  		state: component.state,
	  		forceUpdate: component.forceUpdate.bind(component),
	  		setState: component.setState.bind(component),
	
	  		// --- Additional properties used by preact devtools
	  		node: node
	  	};
	
	  	// React DevTools exposes the `_instance` field of the selected item in the
	  	// component tree as `$r` in the console.  `_instance` must refer to a
	  	// React Component (or compatible) class instance with `props` and `state`
	  	// fields and `setState()`, `forceUpdate()` methods.
	  	instance._instance = component;
	
	  	// If the root node returned by this component instance's render function
	  	// was itself a composite component, there will be a `_component` property
	  	// containing the child component instance.
	  	if (component._component) {
	  		instance._renderedComponent = updateReactComponent(component._component);
	  	} else {
	  		// Otherwise, if the render() function returned an HTML/SVG element,
	  		// create a ReactDOMComponent-like object for the DOM node itself.
	  		instance._renderedComponent = updateReactComponent(node);
	  	}
	
	  	return instance;
	  }
	
	  /**
	   * Map of Component|Node to ReactDOMComponent|ReactCompositeComponent-like
	   * object.
	   *
	   * The same React*Component instance must be used when notifying devtools
	   * about the initial mount of a component and subsequent updates.
	   */
	  var instanceMap = new Map();
	
	  /**
	   * Update (and create if necessary) the ReactDOMComponent|ReactCompositeComponent-like
	   * instance for a given preact component instance or DOM Node.
	   *
	   * @param {Component|Node} componentOrNode
	   */
	  function updateReactComponent(componentOrNode) {
	  	var newInstance = componentOrNode instanceof Node ? createReactDOMComponent(componentOrNode) : createReactCompositeComponent(componentOrNode);
	  	if (instanceMap.has(componentOrNode)) {
	  		var inst = instanceMap.get(componentOrNode);
	  		Object.assign(inst, newInstance);
	  		return inst;
	  	}
	  	instanceMap.set(componentOrNode, newInstance);
	  	return newInstance;
	  }
	
	  function nextRootKey(roots) {
	  	return '.' + Object.keys(roots).length;
	  }
	
	  /**
	   * Find all root component instances rendered by preact in `node`'s children
	   * and add them to the `roots` map.
	   *
	   * @param {DOMElement} node
	   * @param {[key: string] => ReactDOMComponent|ReactCompositeComponent}
	   */
	  function findRoots(node, roots) {
	  	Array.from(node.childNodes).forEach(function (child) {
	  		if (child._component) {
	  			roots[nextRootKey(roots)] = updateReactComponent(child._component);
	  		} else {
	  			findRoots(child, roots);
	  		}
	  	});
	  }
	
	  /**
	   * Map of functional component name -> wrapper class.
	   */
	  var functionalComponentWrappers = new Map();
	
	  /**
	   * Wrap a functional component with a stateful component.
	   *
	   * preact does not record any information about the original hierarchy of
	   * functional components in the rendered DOM nodes. Wrapping functional components
	   * with a trivial wrapper allows us to recover information about the original
	   * component structure from the DOM.
	   *
	   * @param {VNode} vnode
	   */
	  function wrapFunctionalComponent(vnode) {
	  	var originalRender = vnode.nodeName;
	  	var name = vnode.nodeName.name || '(Function.name missing)';
	  	var wrappers = functionalComponentWrappers;
	  	if (!wrappers.has(originalRender)) {
	  		(function () {
	  			var wrapper = (function (_Component) {
	  				babelHelpers.inherits(wrapper, _Component);
	
	  				function wrapper() {
	  					babelHelpers.classCallCheck(this, wrapper);
	
	  					_Component.apply(this, arguments);
	  				}
	
	  				wrapper.prototype.render = function render(props, state, context) {
	  					return originalRender(props, context);
	  				};
	
	  				return wrapper;
	  			})(preact.Component);
	
	  			// Expose the original component name. React Dev Tools will use
	  			// this property if it exists or fall back to Function.name
	  			// otherwise.
	  			wrapper.displayName = name;
	
	  			wrappers.set(originalRender, wrapper);
	  		})();
	  	}
	  	vnode.nodeName = wrappers.get(originalRender);
	  }
	
	  /**
	   * Create a bridge for exposing preact's component tree to React DevTools.
	   *
	   * It creates implementations of the interfaces that ReactDOM passes to
	   * devtools to enable it to query the component tree and hook into component
	   * updates.
	   *
	   * See https://github.com/facebook/react/blob/59ff7749eda0cd858d5ee568315bcba1be75a1ca/src/renderers/dom/ReactDOM.js
	   * for how ReactDOM exports its internals for use by the devtools and
	   * the `attachRenderer()` function in
	   * https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/attachRenderer.js
	   * for how the devtools consumes the resulting objects.
	   */
	  function createDevToolsBridge() {
	  	// The devtools has different paths for interacting with the renderers from
	  	// React Native, legacy React DOM and current React DOM.
	  	//
	  	// Here we emulate the interface for the current React DOM (v15+) lib.
	
	  	// ReactDOMComponentTree-like object
	  	var ComponentTree = {
	  		getNodeFromInstance: function getNodeFromInstance(instance) {
	  			return instance.node;
	  		},
	  		getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
	  			while (node && !node._component) {
	  				node = node.parentNode;
	  			}
	  			return node ? updateReactComponent(node._component) : null;
	  		}
	  	};
	
	  	// Map of root ID (the ID is unimportant) to component instance.
	  	var roots = {};
	  	findRoots(document.body, roots);
	
	  	// ReactMount-like object
	  	//
	  	// Used by devtools to discover the list of root component instances and get
	  	// notified when new root components are rendered.
	  	var Mount = {
	  		_instancesByReactRootID: roots,
	
	  		// Stub - React DevTools expects to find this method and replace it
	  		// with a wrapper in order to observe new root components being added
	  		_renderNewRootComponent: function _renderNewRootComponent() /* instance, ... */{}
	  	};
	
	  	// ReactReconciler-like object
	  	var Reconciler = {
	  		// Stubs - React DevTools expects to find these methods and replace them
	  		// with wrappers in order to observe components being mounted, updated and
	  		// unmounted
	  		mountComponent: function mountComponent() /* instance, ... */{},
	  		performUpdateIfNecessary: function performUpdateIfNecessary() /* instance, ... */{},
	  		receiveComponent: function receiveComponent() /* instance, ... */{},
	  		unmountComponent: function unmountComponent() /* instance, ... */{}
	  	};
	
	  	/** Notify devtools that a new component instance has been mounted into the DOM. */
	  	var componentAdded = function componentAdded(component) {
	  		var instance = updateReactComponent(component);
	  		if (isRootComponent(component)) {
	  			instance._rootID = nextRootKey(roots);
	  			roots[instance._rootID] = instance;
	  			Mount._renderNewRootComponent(instance);
	  		}
	  		visitNonCompositeChildren(instance, function (childInst) {
	  			childInst._inDevTools = true;
	  			Reconciler.mountComponent(childInst);
	  		});
	  		Reconciler.mountComponent(instance);
	  	};
	
	  	/** Notify devtools that a component has been updated with new props/state. */
	  	var componentUpdated = function componentUpdated(component) {
	  		var prevRenderedChildren = [];
	  		visitNonCompositeChildren(instanceMap.get(component), function (childInst) {
	  			prevRenderedChildren.push(childInst);
	  		});
	
	  		// Notify devtools about updates to this component and any non-composite
	  		// children
	  		var instance = updateReactComponent(component);
	  		Reconciler.receiveComponent(instance);
	  		visitNonCompositeChildren(instance, function (childInst) {
	  			if (!childInst._inDevTools) {
	  				// New DOM child component
	  				childInst._inDevTools = true;
	  				Reconciler.mountComponent(childInst);
	  			} else {
	  				// Updated DOM child component
	  				Reconciler.receiveComponent(childInst);
	  			}
	  		});
	
	  		// For any non-composite children that were removed by the latest render,
	  		// remove the corresponding ReactDOMComponent-like instances and notify
	  		// the devtools
	  		prevRenderedChildren.forEach(function (childInst) {
	  			if (!document.body.contains(childInst.node)) {
	  				instanceMap['delete'](childInst.node);
	  				Reconciler.unmountComponent(childInst);
	  			}
	  		});
	  	};
	
	  	/** Notify devtools that a component has been unmounted from the DOM. */
	  	var componentRemoved = function componentRemoved(component) {
	  		var instance = updateReactComponent(component);
	  		visitNonCompositeChildren(function (childInst) {
	  			instanceMap['delete'](childInst.node);
	  			Reconciler.unmountComponent(childInst);
	  		});
	  		Reconciler.unmountComponent(instance);
	  		instanceMap['delete'](component);
	  		if (instance._rootID) {
	  			delete roots[instance._rootID];
	  		}
	  	};
	
	  	return {
	  		componentAdded: componentAdded,
	  		componentUpdated: componentUpdated,
	  		componentRemoved: componentRemoved,
	
	  		// Interfaces passed to devtools via __REACT_DEVTOOLS_GLOBAL_HOOK__.inject()
	  		ComponentTree: ComponentTree,
	  		Mount: Mount,
	  		Reconciler: Reconciler
	  	};
	  }
	
	  /**
	   * Return `true` if a preact component is a top level component rendered by
	   * `render()` into a container Element.
	   */
	  function isRootComponent(component) {
	  	return !component.base.parentElement || !component.base.parentElement[ATTR_KEY];
	  }
	
	  /**
	   * Visit all child instances of a ReactCompositeComponent-like object that are
	   * not composite components (ie. they represent DOM elements or text)
	   *
	   * @param {Component} component
	   * @param {(Component) => void} visitor
	   */
	  function visitNonCompositeChildren(component, visitor) {
	  	if (component._renderedComponent) {
	  		if (!component._renderedComponent._component) {
	  			visitor(component._renderedComponent);
	  			visitNonCompositeChildren(component._renderedComponent, visitor);
	  		}
	  	} else if (component._renderedChildren) {
	  		component._renderedChildren.forEach(function (child) {
	  			visitor(child);
	  			if (!child._component) visitNonCompositeChildren(child, visitor);
	  		});
	  	}
	  }
	
	  /**
	   * Create a bridge between the preact component tree and React's dev tools
	   * and register it.
	   *
	   * After this function is called, the React Dev Tools should be able to detect
	   * "React" on the page and show the component tree.
	   *
	   * This function hooks into preact VNode creation in order to expose functional
	   * components correctly, so it should be called before the root component(s)
	   * are rendered.
	   *
	   * Returns a cleanup function which unregisters the hooks.
	   */
	
	  function initDevTools() {
	  	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	  		// React DevTools are not installed
	  		return;
	  	}
	
	  	// Hook into preact element creation in order to wrap functional components
	  	// with stateful ones in order to make them visible in the devtools
	  	var nextVNode = preact.options.vnode;
	  	preact.options.vnode = function (vnode) {
	  		if (isFunctionalComponent(vnode)) wrapFunctionalComponent(vnode);
	  		if (nextVNode) return nextVNode(vnode);
	  	};
	
	  	// Notify devtools when preact components are mounted, updated or unmounted
	  	var bridge = createDevToolsBridge();
	
	  	var nextAfterMount = preact.options.afterMount;
	  	preact.options.afterMount = function (component) {
	  		bridge.componentAdded(component);
	  		if (nextAfterMount) nextAfterMount(component);
	  	};
	
	  	var nextAfterUpdate = preact.options.afterUpdate;
	  	preact.options.afterUpdate = function (component) {
	  		bridge.componentUpdated(component);
	  		if (nextAfterUpdate) nextAfterUpdate(component);
	  	};
	
	  	var nextBeforeUnmount = preact.options.beforeUnmount;
	  	preact.options.beforeUnmount = function (component) {
	  		bridge.componentRemoved(component);
	  		if (nextBeforeUnmount) nextBeforeUnmount(component);
	  	};
	
	  	// Notify devtools about this instance of "React"
	  	__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(bridge);
	
	  	return function () {
	  		preact.options.afterMount = nextAfterMount;
	  		preact.options.afterUpdate = nextAfterUpdate;
	  		preact.options.beforeUnmount = nextBeforeUnmount;
	  	};
	  }
	
	  initDevTools();
	
	}));
	//# sourceMappingURL=devtools.js.map


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map