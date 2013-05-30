/*! bbUI VERSION: 0.9.6.117 | github.com/blackberry/bbUI.js/blob/master/LICENSE !*/ bb = {
	scroller: null,
	screens: [],
	dropdownScrollers: [],
	windowListeners: [],
	documentListeners: [],
	transparentPixel: "data:image/png;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
	imageList: null,
	activityIndicator: null,
	fileInput: null,
	button: null,
	scrollPanel: null,
	bbmBubble: null,
	dropdown: null,
	textInput: null,
	roundPanel: null,
	grid: null,
	pillButtons: null,
	labelControlContainers: null,
	slider: null,
	radio: null,
	progress: null,
	checkbox: null,
	toggle: null,
	init: function(t) {
		if (t) for (var e in t) bb.options[e] = t[e];
		window.blackberry && blackberry.system && blackberry.system.event && blackberry.system.event.onHardwareKey && (bb.options.onbackkey ? blackberry.system.event.onHardwareKey(blackberry.system.event.KEY_BACK, bb.options.onbackkey) : blackberry.system.event.onHardwareKey(blackberry.system.event.KEY_BACK, bb.popScreen)), bb.device.isRipple = navigator.userAgent.indexOf("Ripple") >= 0 || window.tinyHippos, bb.device.isPlayBook = navigator.userAgent.indexOf("PlayBook") >= 0 || 1024 == window.innerWidth && 600 == window.innerHeight || 600 == window.innerWidth && 1024 == window.innerHeight, bb.device.isBB10 = bb.device.isPlayBook && bb.options.bb10ForPlayBook ? !0 : navigator.userAgent.indexOf("BB10") >= 0, bb.device.isBB7 = navigator.userAgent.indexOf("7.0.0") >= 0 || navigator.userAgent.indexOf("7.1.0") >= 0, bb.device.isBB6 = navigator.userAgent.indexOf("6.0.0") >= 0, bb.device.isBB5 = navigator.userAgent.indexOf("5.0.0") >= 0, bb.device.is1024x600 = bb.device.isPlayBook, bb.device.is1280x768 = 1280 == window.innerWidth && 768 == window.innerHeight || 768 == window.innerWidth && 1280 == window.innerHeight, bb.device.is720x720 = 720 == window.innerWidth && 720 == window.innerHeight, bb.device.is1280x720 = 1280 == window.innerWidth && 720 == window.innerHeight || 720 == window.innerWidth && 1280 == window.innerHeight, bb.device.isHiRes = bb.device.isRipple ? window.innerHeight > 480 || window.innerWidth > 480 : screen.width > 480 || screen.height > 480;
		var e, i = document.head.querySelectorAll("meta[name=viewport]");
		for (e = 0; i.length > e; e++) try {
				document.head.removeChild(i[e])
		} catch (n) {}
		var o = document.createElement("meta");
		o.setAttribute("name", "viewport"), bb.device.isBB10 && !bb.device.is1024x600 ? o.setAttribute("content", "initial-scale=" + 1 / window.devicePixelRatio + ",user-scalable=no") : o.setAttribute("content", "initial-scale=1.0,width=device-width,user-scalable=no,target-densitydpi=device-dpi"), document.head.appendChild(o);
		var r = parseInt(bb.cutHex(bb.options.highlightColor).substring(0, 2), 16),
			s = parseInt(bb.cutHex(bb.options.highlightColor).substring(2, 4), 16),
			l = parseInt(bb.cutHex(bb.options.highlightColor).substring(4, 6), 16);
		if (bb.options.shades = {
			R: r,
			G: s,
			B: l,
			darkHighlight: "rgb(" + (r - 120) + ", " + (s - 120) + ", " + (l - 120) + ")",
			mediumHighlight: "rgb(" + (r - 60) + ", " + (s - 60) + ", " + (l - 60) + ")",
			darkOutline: "rgb(" + (r - 32) + ", " + (s - 32) + ", " + (l - 32) + ")",
			darkDarkHighlight: "rgb(" + (r - 140) + ", " + (s - 140) + ", " + (l - 140) + ")"
		}, document.styleSheets && document.styleSheets.length) try {
				document.styleSheets[0].insertRule(".bb10Highlight {background-color:" + bb.options.highlightColor + ";background-image:none;}", 0), document.styleSheets[0].insertRule(".bbProgressHighlight {background-color:#92B43B;background-image:none;}", 0), document.styleSheets[0].insertRule(".bb10-button-highlight {color:White;background-image: -webkit-gradient(linear, center top, center bottom, from(" + bb.options.shades.darkHighlight + "), to(" + bb.options.highlightColor + "));border-color:#53514F;}", 0), document.styleSheets[0].insertRule(".pb-button-light-highlight {color:" + bb.options.shades.darkHighlight + ";background-image: -webkit-gradient(linear, center top, center bottom, from(" + bb.options.highlightColor + "), to(" + bb.options.shades.darkHighlight + "));}", 0), document.styleSheets[0].insertRule(".pb-button-dark-highlight {color:" + bb.options.highlightColor + ";background-image: -webkit-gradient(linear, center top, center bottom, from(" + bb.options.highlightColor + "), to(" + bb.options.shades.darkHighlight + "));}", 0), document.styleSheets[0].insertRule(".bb10Accent {background-color:" + bb.options.shades.darkHighlight + ";}", 0), document.styleSheets[0].insertRule(".bb10-title-colored {color:white;text-shadow: 0px 2px black;background-image: -webkit-gradient(linear, center top, center bottom, from(" + bb.options.highlightColor + "), to(" + bb.options.shades.darkHighlight + "));}", 0), document.styleSheets[0].insertRule(".bb10-title-button-container-colored {color:white;text-shadow: 0px 2px black;border-color: " + bb.options.shades.darkDarkHighlight + ";background-color: " + bb.options.shades.darkHighlight + ";}", 0), document.styleSheets[0].insertRule(".bb10-title-button-colored {border-color: " + bb.options.shades.darkDarkHighlight + ";background-image: -webkit-gradient(linear, center top, center bottom, from(" + bb.options.highlightColor + "), to(" + bb.options.shades.mediumHighlight + "));}", 0), document.styleSheets[0].insertRule(".bb10-title-button-colored-highlight {border-color: " + bb.options.shades.darkDarkHighlight + ";background-color: " + bb.options.shades.darkHighlight + ";}", 0)
		} catch (n) {
			console.log(n.message)
		}
		bb.screen.controlColor = bb.options.controlsDark ? "dark" : "light", bb.screen.listColor = bb.options.listsDark ? "dark" : "light", bb.device.isBB10 ? (bb.imageList = _bb10_imageList, bb.activityIndicator = _bb10_activityIndicator, bb.fileInput = _bb10_fileInput, bb.button = _bb10_button, bb.scrollPanel = _bb_PlayBook_10_scrollPanel, bb.bbmBubble = _bb_bbmBubble, bb.dropdown = _bb10_dropdown, bb.textInput = _bb10_textInput, bb.roundPanel = _bb10_roundPanel, bb.grid = _bb10_grid, bb.pillButtons = _bb10_pillButtons, bb.labelControlContainers = _bb10_labelControlContainers, bb.slider = _bb10_slider, bb.radio = _bb10_radio, bb.progress = _bb_progress, bb.checkbox = _bb10_checkbox, bb.toggle = _bb10_toggle) : bb.device.isBB5 ? (bb.imageList = _bb_5_6_7_imageList, bb.button = _bb5_button, bb.bbmBubble = _bb_bbmBubble, bb.roundPanel = _bb_5_6_7_roundPanel, bb.pillButtons = _bb5_pillButtons, bb.labelControlContainers = _bb5_labelControlContainers, bb.progress = _bb_progress) : bb.device.isPlayBook ? (bb.imageList = _bbPlayBook_imageList, bb.button = _bbPlayBook_button, bb.bbmBubble = _bb_bbmBubble, bb.dropdown = _bb_6_7_PlayBook_dropdown, bb.textInput = _bbPlayBook_textInput, bb.pillButtons = _bb_6_7_PlayBook_pillButtons, bb.labelControlContainers = _bb_6_7_PlayBook_labelControlContainers, bb.progress = _bb_progress, bb.scrollPanel = _bb_PlayBook_10_scrollPanel, bb.roundPanel = _bbPlayBook_roundPanel, bb.activityIndicator = _bbPlayBook_activityIndicator) : (bb.imageList = _bb_5_6_7_imageList, bb.button = _bb_6_7_button, bb.bbmBubble = _bb_bbmBubble, bb.dropdown = _bb_6_7_PlayBook_dropdown, bb.textInput = _bb_6_7_textInput, bb.pillButtons = _bb_6_7_PlayBook_pillButtons, bb.labelControlContainers = _bb_6_7_PlayBook_labelControlContainers, bb.progress = _bb_progress, bb.roundPanel = _bb_5_6_7_roundPanel), !bb.device.isBB10 || bb.device.isPlayBook || bb.device.isRipple || bb.device.is720x720 || (blackberry.event.addEventListener("keyboardOpening", function() {
			bb.screen.currentScreen.actionBar && bb.screen.currentScreen.actionBar.hide()
		}), blackberry.event.addEventListener("keyboardOpened", function() {
			bb.screen.currentScreen.actionBar && bb.screen.focusedInput && (bb.screen.focusedInput.container ? bb.screen.focusedInput.container.scrollIntoView(!1) : bb.screen.focusedInput.scrollIntoView(!1))
		}), blackberry.event.addEventListener("keyboardClosed", function() {
			bb.screen.currentScreen.actionBar && bb.screen.currentScreen.actionBar.show()
		}))
	},
	doLoad: function(t) {
		var e = t || document.body;
		bb.screen.apply(e.querySelectorAll("[data-bb-type=screen]")), bb.style(e), bb.screen.reAdjustHeight()
	},
	style: function(t) {
		bb.scrollPanel && bb.scrollPanel.apply(t.querySelectorAll("[data-bb-type=scroll-panel]")), bb.textInput && bb.textInput.apply(t.querySelectorAll("input[type=text], [type=password], [type=tel], [type=url], [type=email], [type=number], [type=date], [type=time], [type=datetime], [type=month], [type=datetime-local], [type=color], [type=search]")), bb.dropdown && bb.dropdown.apply(t.querySelectorAll("select")), bb.roundPanel && bb.roundPanel.apply(t.querySelectorAll("[data-bb-type=round-panel]")), bb.imageList && bb.imageList.apply(t.querySelectorAll("[data-bb-type=image-list]")), bb.grid && bb.grid.apply(t.querySelectorAll("[data-bb-type=grid-layout]")), bb.bbmBubble && bb.bbmBubble.apply(t.querySelectorAll("[data-bb-type=bbm-bubble]")), bb.pillButtons && bb.pillButtons.apply(t.querySelectorAll("[data-bb-type=pill-buttons]")), bb.labelControlContainers && bb.labelControlContainers.apply(t.querySelectorAll("[data-bb-type=label-control-container]")), bb.button && bb.button.apply(t.querySelectorAll("[data-bb-type=button]")), bb.fileInput && bb.fileInput.apply(t.querySelectorAll("input[type=file]")), bb.slider && bb.slider.apply(t.querySelectorAll("input[type=range]")), bb.progress && bb.progress.apply(t.querySelectorAll("progress")), bb.radio && bb.radio.apply(t.querySelectorAll("input[type=radio]")), bb.activityIndicator && bb.activityIndicator.apply(t.querySelectorAll("[data-bb-type=activity-indicator]")), bb.checkbox && bb.checkbox.apply(t.querySelectorAll("input[type=checkbox]")), bb.toggle && bb.toggle.apply(t.querySelectorAll("[data-bb-type=toggle]"))
	},
	device: {
		isHiRes: !1,
		isBB5: !1,
		isBB6: !1,
		isBB7: !1,
		isBB10: !1,
		isPlayBook: !1,
		isRipple: !1,
		is1024x600: !1,
		is1280x768: !1,
		is720x720: !1,
		is1280x720: !1
	},
	options: {
		onbackkey: null,
		onscreenready: null,
		ondomready: null,
		controlsDark: !1,
		coloredTitleBar: !1,
		listsDark: !1,
		highlightColor: "#00A8DF",
		bb10ForPlayBook: !1
	},
	loadScreen: function(url, id, popping, guid, params, screenRecord) {
		var xhr = new XMLHttpRequest,
			container = document.createElement("div"),
			_reduce = function(t, e, i) {
				var n = i;
				return Array.prototype.forEach.apply(t, [
					function(t) {
						n = e(n, t)
					}
				]), n
			}, whereScript = function(t, e) {
				return "SCRIPT" === e.nodeName && t.push(e), _reduce(e.childNodes, whereScript, t)
			}, i, scripts = [],
			newScriptTags = [];
		xhr.open("GET", url, !1), xhr.send(), container.setAttribute("id", guid), container.innerHTML = xhr.responseText, scripts = _reduce(container.childNodes, whereScript, []), container.scriptIds = [], screenRecord && (screenRecord.scripts = []), scripts.forEach(function(script) {
			var scriptTag = document.createElement("script"),
				type = script.getAttribute("type");
			if (!type || "text/javascript" == type.toLowerCase()) {
				if (script.text) return eval(script.text), void 0;
				var scriptGuid = bb.guidGenerator();
				screenRecord ? screenRecord.scripts.push({
					id: scriptGuid,
					onunload: script.getAttribute("onunload")
				}) : container.scriptIds.push({
					id: scriptGuid,
					onunload: script.getAttribute("onunload")
				}), scriptTag.setAttribute("type", "text/javascript"), scriptTag.setAttribute("src", script.getAttribute("src")), scriptTag.setAttribute("id", scriptGuid), newScriptTags.push(scriptTag), script.parentNode.removeChild(script)
			}
		}), container.getElementById = function(t, e) {
			var i = null;
			if (e || (e = this), e.getAttribute("id") == t) return e;
			for (var n = 0; e.childNodes.length > n; n++) {
				var o = e.childNodes[n];
				if (1 == o.nodeType && (i = this.getElementById(t, o))) break
			}
			return i
		}, bb.screen.scriptCounter = 0, bb.screen.totalScripts = newScriptTags.length;
		for (var i = 0; newScriptTags.length > i; i++) document.body.appendChild(newScriptTags[i]), newScriptTags[i].onload = function() {
				bb.screen.scriptCounter++, bb.screen.scriptCounter == bb.screen.totalScripts && bb.initContainer(container, id, popping, params)
		};
		return 0 === bb.screen.totalScripts && setTimeout(function() {
			bb.initContainer(container, id, popping, params)
		}, 0), container
	},
	initContainer: function(t, e, i, n) {
		bb.options.onscreenready && bb.options.onscreenready(t, e, n), bb.doLoad(t), document.body.appendChild(t);
		var o, r, s, l = t.querySelectorAll("[data-bb-type=screen]"),
			a = null;
		if (l.length > 0) {
			if (l = l[0], i) {
				var b, d = bb.screens[bb.screens.length - 1].container;
				o = d.querySelectorAll("[data-bb-type=screen]")[0], b = o.hasAttribute("data-bb-effect") ? o.getAttribute("data-bb-effect") : void 0, b && (l.style["z-index"] = "-100", "fade" == b.toLowerCase() ? o.setAttribute("data-bb-effect", "fade-out") : "slide-left" == b.toLowerCase() ? o.setAttribute("data-bb-effect", "slide-out-right") : "slide-right" == b.toLowerCase() ? o.setAttribute("data-bb-effect", "slide-out-left") : "slide-up" == b.toLowerCase() ? o.setAttribute("data-bb-effect", "slide-out-down") : "slide-down" == b.toLowerCase() && o.setAttribute("data-bb-effect", "slide-out-up"))
			} else o = l; if (o.popping = i, o.hasAttribute("data-bb-effect") && !bb.device.isBB5 && !bb.device.isBB6 && (r = o.getAttribute("data-bb-effect"))) {
				if (r = r.toLowerCase(), "fade" == r) a = bb.screen.fadeIn;
				else if ("fade-out" == r) a = bb.screen.fadeOut;
				else if (!bb.device.isBB7) switch (r) {
						case "slide-left":
							a = bb.screen.slideLeft;
							break;
						case "slide-out-left":
							a = bb.screen.slideOutLeft;
							break;
						case "slide-right":
							a = bb.screen.slideRight;
							break;
						case "slide-out-right":
							a = bb.screen.slideOutRight;
							break;
						case "slide-up":
							a = bb.screen.slideUp;
							break;
						case "slide-out-up":
							a = bb.screen.slideOutUp;
							break;
						case "slide-down":
							a = bb.screen.slideDown;
							break;
						case "slide-out-down":
							a = bb.screen.slideOutDown
				}
				o.style.display = "inline", a && (s = document.createElement("div"), o.overlay = s, s.setAttribute("class", "bb-transition-overlay"), document.body.appendChild(s), bb.screen.animating = !0, o.doEndAnimation = function() {
					var e = this.style;
					bb.screen.animating = !1, document.body.removeChild(this.overlay), this.overlay = null, bb.screens.length > 1 ? this.popping ? (this.style.display = "none", this.parentNode.parentNode.removeChild(this.parentNode), bb.screens.pop(), l.style["z-index"] = "", bb.screens[bb.screens.length - 1].container = t) : (bb.removePreviousScreenFromDom(), e.left = "", e.right = "", e.top = "", e.bottom = "", e.width = "", e.height = "", e["-webkit-animation-name"] = "", e["-webkit-animation-duration"] = "", e["-webkit-animation-timing-function"] = "", e["-webkit-transform"] = "") : 1 >= bb.screens.length && (e.left = "", e.right = "", e.top = "", e.bottom = "", e.width = "", e.height = "", e["-webkit-animation-name"] = "", e["-webkit-animation-duration"] = "", e["-webkit-animation-timing-function"] = "", e["-webkit-transform"] = ""), this.removeEventListener("webkitAnimationEnd", this.doEndAnimation), bb.createScreenScroller(l)
				}, o.doEndAnimation = o.doEndAnimation.bind(o), o.addEventListener("webkitAnimationEnd", o.doEndAnimation), a.call(this, o))
			}
		}
		if (bb.options.ondomready ? (bb.domready.container = t, bb.domready.id = e, bb.domready.params = n, setTimeout(bb.domready.fire, 1)) : setTimeout(bb.domready.fireEventsOnly, 1), !a) {
			if (i) {
				if (i) {
					l.style["z-index"] = "";
					var c = bb.screens[bb.screens.length - 1].container;
					c.parentNode.removeChild(c), bb.screens.pop(), bb.screens[bb.screens.length - 1].container = t
				}
			} else(bb.device.isBB5 || bb.device.isBB6 || bb.device.isBB7) && bb.screens.length > 0 ? bb.removePreviousScreenFromDom() : bb.screens.length > 1 && bb.removePreviousScreenFromDom();
			bb.createScreenScroller(l)
		}
	},
	domready: {
		container: null,
		id: null,
		params: null,
		fire: function() {
			if (bb.screen.animating) return setTimeout(bb.domready.fire, 250), void 0;
			var t = document.createEvent("Events");
			t.initEvent("bbuidomready", !0, !0), document.dispatchEvent(t), t = document.createEvent("Events"), t.initEvent("bbuilistready", !0, !0), document.dispatchEvent(t), bb.options.ondomready(bb.domready.container, bb.domready.id, bb.domready.params), bb.domready.container = null, bb.domready.id = null, bb.domready.params = null, t = document.createEvent("Events"), t.initEvent("bbuidomprocessed", !0, !0), document.dispatchEvent(t)
		},
		fireEventsOnly: function() {
			if (bb.screen.animating) return setTimeout(bb.domready.fireEventsOnly, 250), void 0;
			var t = document.createEvent("Events");
			t.initEvent("bbuidomready", !0, !0), document.dispatchEvent(t), t = document.createEvent("Events"), t.initEvent("bbuilistready", !0, !0), document.dispatchEvent(t), t = document.createEvent("Events"), t.initEvent("bbuidomprocessed", !0, !0), document.dispatchEvent(t)
		}
	},
	createScreenScroller: function(t) {
		var e = t.bbUIscrollWrapper;
		if (e) if (bb.device.isPlayBook) {
				var i = {
					hideScrollbar: !0,
					fadeScrollbar: !0,
					onBeforeScrollStart: function(t) {
						var e = t.target;
						if (!e.parentNode || "bb-bb10-dropdown-items" != e.parentNode.getAttribute("class")) {
							for (; 1 != e.nodeType;) e = e.parentNode;
							if ("SELECT" != e.tagName && "INPUT" != e.tagName && "TEXTAREA" != e.tagName && "AUDIO" != e.tagName && "VIDEO" != e.tagName) {
								t.preventDefault();
								var i = document.activeElement;
								i && ("SELECT" == i.tagName || "INPUT" == i.tagName || "TEXTAREA" == i.tagName || "AUDIO" == i.tagName || "VIDEO" == i.tagName) && i.blur()
							}
						}
					},
					onScrollEnd: function() {
						evt = document.createEvent("Events"), evt.initEvent("bbuiscrolling", !0, !0), document.dispatchEvent(evt)
					},
					onScrollMove: function(e) {
						t.onscroll && t.onscroll(e), evt = document.createEvent("Events"), evt.initEvent("bbuiscrolling", !0, !0), document.dispatchEvent(evt)
					}
				};
				bb.scroller = new iScroll(e, i)
			} else bb.device.isBB10 && (bb.scroller = null, e.style["-webkit-overflow-scrolling"] = "-blackberry-touch", e.onscroll = function(e) {
					t.onscroll && t.onscroll(e)
				})
	},
	clearScrollers: function() {
		for (var t, e = bb.dropdownScrollers - 1; e > -1; e--) t = bb.dropdownScrollers[e], t.destroy(), t = null, bb.dropdownScrollers.pop()
	},
	removeTopMostScreenFromDom: function() {
		var t = bb.screens.length,
			e = document.getElementById(bb.screens[t - 1].guid);
		document.body.removeChild(e)
	},
	removePreviousScreenFromDom: function() {
		var t, e, i = bb.screens.length;
		1 != i && (e = i > 1 ? 2 : 1, t = document.getElementById(bb.screens[i - e].guid), t && document.body.removeChild(t))
	},
	pushScreen: function(t, e, i) {
		bb.removeLoadedScripts(), bb.menuBar.clearMenu();
		var n, o = bb.screens.length;
		o > 0 && (bb.screen.overlay = null, bb.screen.tabOverlay = null, bb.clearScrollers(), (bb.device.isBB5 || bb.device.isBB6 || bb.device.isBB7) && (n = document.getElementById(bb.screens[o - 1].guid), n.style.display = "none", window.scroll(0, 0)));
		var r = bb.guidGenerator(),
			s = bb.loadScreen(t, e, !1, r, i);
		bb.screens.push({
			id: e,
			url: t,
			scripts: s.scriptIds,
			container: s,
			guid: r,
			params: i
		})
	},
	popScreen: function() {
		var t, e, i = bb.screens.length;
		if (i > 1) {
			for (bb.removeLoadedScripts(), bb.clearScrollers(), bb.menuBar.clearMenu(), bb.screen.overlay = null, bb.screen.tabOverlay = null, t = 0; bb.windowListeners.length > t; t++) e = bb.windowListeners[t], window.removeEventListener(e.name, e.eventHandler, !1);
			for (bb.windowListners = [], t = 0; bb.documentListeners.length > t; t++) e = bb.documentListeners[t], document.removeEventListener(e.name, e.eventHandler, !1);
			bb.documentListeners = [];
			var n = bb.screens[i - 2];
			bb.loadScreen(n.url, n.id, !0, n.guid, n.params, n), (bb.device.isBB5 || bb.device.isBB6 || bb.device.isBB7) && window.scroll(0, 0)
		} else blackberry && blackberry.app.exit()
	},
	removeLoadedScripts: function() {
		var numItems = bb.screens.length;
		if (numItems > 0) for (var currentStackItem = bb.screens[numItems - 1], current = document.getElementById(currentStackItem.guid), i = 0; currentStackItem.scripts.length > i; i++) {
				var bbScript = currentStackItem.scripts[i],
					scriptTag = document.getElementById(bbScript.id);
				bbScript.onunload && eval(bbScript.onunload), scriptTag && document.body.removeChild(scriptTag)
		}
	},
	innerHeight: function() {
		return bb.device.isPlayBook ? window.orientation ? 0 == window.orientation || 180 == window.orientation ? 600 : -90 == window.orientation || 90 == window.orientation ? 1024 : void 0 : window.innerHeight : window.innerHeight
	},
	innerWidth: function() {
		return bb.device.isPlayBook ? window.orientation ? 0 == window.orientation || 180 == window.orientation ? 1024 : -90 == window.orientation || 90 == window.orientation ? 600 : void 0 : window.innerWidth : window.innerWidth
	},
	getOrientation: function() {
		if (bb.device.is720x720) return "portrait";
		if (bb.device.isPlayBook) {
			if (!window.orientation) return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
			if (0 == window.orientation || 180 == window.orientation) return "landscape";
			if (-90 == window.orientation || 90 == window.orientation) return "portrait"
		} else {
			if (void 0 == window.orientation) return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
			if (0 == window.orientation || 180 == window.orientation) return "portrait";
			if (-90 == window.orientation || 90 == window.orientation) return "landscape"
		}
	},
	cutHex: function(t) {
		return "#" == t.charAt(0) ? t.substring(1, 7) : t
	},
	guidGenerator: function() {
		var t = function() {
			return (0 | 65536 * (1 + Math.random())).toString(16).substring(1)
		};
		return t() + t() + t() + t() + t() + t() + t() + t()
	},
	refresh: function() {
		bb.scroller && bb.scroller.refresh()
	},
	isScrolledIntoView: function(t) {
		var e = 0,
			i = t;
		if (i.offsetParent) do e += i.offsetTop, i.scrollTop && (e -= i.scrollTop), bb.device.isPlayBook && (i.scroller ? e += i.scroller.y : i.bbUIscrollWrapper && (e += bb.scroller.y));
		while (i = i.offsetParent);
		return bb.innerHeight() > e
	}
}, Function.prototype.bind = function(t) {
	var e = this;
	return function() {
		return e.apply(t, arguments)
	}
}, bb.actionBar = {
	apply: function(t, e) {
		var i, n, o, r, s, l, a, b = t.querySelectorAll("[data-bb-type=action]"),
			d = [],
			c = [],
			h = [],
			u = [],
			p = t,
			m = "1280x768-1280x720",
			g = bb.getOrientation();
		for (bb.device.is1024x600 ? m = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? m = "1280x768-1280x720" : bb.device.is720x720 && (m = "720x720"), t.res = m, t.isVisible = !0, t.setAttribute("class", "bb-bb10-action-bar-" + m + " bb-bb10-action-bar-" + g + "-" + m + " bb-bb10-action-bar-dark"), t.mainBarTabs = h, t.mainBarButtons = d, t.overflowButtons = c, t.overflowTabs = u, a = 0; b.length > a; a++) i = b[a], i.hasAttribute("data-bb-style") && (r = i.getAttribute("data-bb-style").toLowerCase(), "button" == r ? i.hasAttribute("data-bb-overflow") && "true" == i.getAttribute("data-bb-overflow").toLowerCase() ? c.push(i) : d.push(i) : i.hasAttribute("data-bb-overflow") && "true" == i.getAttribute("data-bb-overflow").toLowerCase() ? u.push(i) : h.push(i));
		if (t.hasAttribute("data-bb-back-caption") && 0 == t.querySelectorAll("[data-bb-style=tab]").length) {
			var v, f, y, w;
			s = document.createElement("div"), s.setAttribute("class", "bb-bb10-action-bar-back-button-" + m + " bb-bb10-action-bar-back-button-" + m + "-dark bb-bb10-action-bar-back-button-" + g + "-" + m), s.onclick = function() {
				window.setTimeout(bb.popScreen, 0)
			}, t.backBtn = s, v = document.createElement("div"), v.setAttribute("class", "bb-bb10-action-bar-back-chevron-" + m + "-dark"), s.appendChild(v), f = document.createElement("div"), f.setAttribute("class", "bb-bb10-action-bar-back-text-" + m + " bb-bb10-action-bar-back-text-" + g + "-" + m), f.innerHTML = t.getAttribute("data-bb-back-caption"), s.backCaption = f, s.appendChild(f), w = document.createElement("div"), w.setAttribute("class", "bb-bb10-action-bar-back-button-highlight"), w.style.position = "absolute", w.style.width = bb.device.is1024x600 ? "4px" : "8px", w.style["background-color"] = "transparent", s.updateHighlightDimensions = function(t) {
				bb.device.is1024x600 ? (w.style.height = "portrait" == t ? "57px" : "57px", w.style.top = "8px") : bb.device.is1280x768 || bb.device.is1280x720 ? (w.style.height = "portrait" == t ? "110px" : "70px", w.style.top = "15px") : bb.device.is720x720 ? (w.style.height = "78px", w.style.top = "15px") : (w.style.height = "portrait" == t ? "110px" : "110px", w.style.top = "15px")
			}, s.updateHighlightDimensions = s.updateHighlightDimensions.bind(s), s.backHighlight = w, s.updateHighlightDimensions(g), s.appendChild(w), s.ontouchstart = function() {
				this.backHighlight.style["background-color"] = bb.options.highlightColor
			}, s.ontouchend = function() {
				this.backHighlight.style["background-color"] = "transparent"
			}, y = document.createElement("div"), y.setAttribute("class", "bb-bb10-action-bar-back-slash-" + m + "-dark bb-bb10-action-bar-back-slash-" + g + "-" + m), s.backslash = y;
			var E = document.createElement("table"),
				x = document.createElement("tr"),
				k = document.createElement("td");
			for (t.appendChild(E), E.appendChild(x), E.setAttribute("class", "bb-bb10-action-bar-table"), k.style.width = bb.device.is1024x600 ? bb.actionBar.getBackBtnWidth(s) - 16 + "px" : bb.actionBar.getBackBtnWidth(s) - 33 + "px", x.appendChild(k), s.innerChevron = k, k.appendChild(s), k = document.createElement("td"), k.style.width = bb.device.is1024x600 ? "16px" : "33px", y.style["background-color"] = bb.options.shades.darkOutline, x.appendChild(k), k.appendChild(y), k = document.createElement("td"), k.style.width = "100%", x.appendChild(k), p = k, a = 0; b.length > a; a++) i = b[a], k.appendChild(i)
		}
		if (u.length > 0 && (t.tabOverflowMenu = bb.tabOverflow.create(e), t.tabOverflowMenu.actionBar = t, i = document.createElement("div"), i.actionBar = t, i.tabOverflowMenu = t.tabOverflowMenu, i.setAttribute("data-bb-type", "action"), i.setAttribute("data-bb-style", "tab"), i.setAttribute("data-bb-img", "overflow"), i.onclick = function() {
			this.tabOverflowMenu.show()
		}, t.tabOverflowBtn = i, p.insertBefore(i, p.firstChild)), c.length > 0 && (t.menu = bb.contextMenu.create(e), t.appendChild(t.menu), i = document.createElement("div"), i.menu = t.menu, i.menu.actionBar = t, i.setAttribute("data-bb-type", "action"), i.setAttribute("data-bb-style", "button"), i.setAttribute("data-bb-img", "overflow"), i.onclick = function() {
			this.menu.show()
		}, t.actionOverflowBtn = i, p.appendChild(i)), t.getUsableWidth = function() {
			return bb.innerWidth() - bb.actionBar.getBackBtnWidth(this.backBtn) - bb.actionBar.getActionOverflowBtnWidth(this.actionOverflowBtn) - bb.actionBar.getTabOverflowBtnWidth(this.tabOverflowBtn)
		}, t.getUsableWidth = t.getUsableWidth.bind(t), t.switchOrientationCSS = function(t) {
			if (t) {
				var e = bb.getOrientation();
				t = "portrait" == e ? t.replace("landscape", "portrait") : t.replace("portrait", "landscape")
			}
			return t
		}, t.switchOrientationCSS = t.switchOrientationCSS.bind(t), t.reLayoutActionBar = function() {
			var t, e, i, n, o = "button",
				r = 0,
				s = 5,
				l = 0,
				a = 0,
				b = 0,
				d = bb.getOrientation();
			for (this.actionOverflowBtn && s--, this.backBtn && s--, this.tabOverflowBtn && s--, t = 0; this.mainBarTabs.length > t && l != s; t++) i = this.mainBarTabs[t], 1 == i.visible && l++;
			for (t = 0; this.mainBarButtons.length > t && l != s; t++) e = this.mainBarButtons[t], 1 == e.visible && l++;
			for (l = 0 == l ? 1 : l, r = Math.floor(this.getUsableWidth() / l), n = this.getAttribute("class"), n = this.switchOrientationCSS(n), this.setAttribute("class", n), this.isVisible && (bb.screen.currentScreen.outerScrollArea.style.bottom = bb.screen.getActionBarHeight() + "px", bb.scroller && bb.scroller.refresh()), this.backBtn && (n = this.backBtn.getAttribute("class"), n = this.switchOrientationCSS(n), this.backBtn.setAttribute("class", n), this.backBtn.updateHighlightDimensions(d), n = this.backBtn.backCaption.getAttribute("class"), n = this.switchOrientationCSS(n), this.backBtn.backCaption.setAttribute("class", n), n = this.backBtn.backslash.getAttribute("class"), n = this.switchOrientationCSS(n), this.backBtn.backslash.setAttribute("class", n), this.backBtn.innerChevron.style.width = bb.device.is1024x600 ? bb.actionBar.getBackBtnWidth(this.backBtn) - 16 + "px" : bb.actionBar.getBackBtnWidth(this.backBtn) - 33 + "px"), l = 0, b = r - 2, t = 0; this.mainBarTabs.length > t; t++) i = this.mainBarTabs[t], s > l && 1 == i.visible ? (a += b, i.style.width = b + "px", i.normal = this.switchOrientationCSS(i.normal), i.highlight = this.switchOrientationCSS(i.highlight), n = i.getAttribute("class"), n = this.switchOrientationCSS(n), i.setAttribute("class", n), n = i.display.getAttribute("class"), n = this.switchOrientationCSS(n), i.display.setAttribute("class", n), o = "tab", l++) : (i.style.display = "none", i.visible = !1);
			for (b = r - 1, t = 0; this.mainBarButtons.length > t; t++) e = this.mainBarButtons[t], s > l && 1 == e.visible ? (a += b, e.style.width = b + "px", e.highlight.style.width = .6 * r + "px", e.highlight.style["margin-left"] = .2 * r + "px", e.normal = "tab" == o ? "bb-bb10-action-bar-action-" + e.res + " bb-bb10-action-bar-action-" + d + "-" + e.res + " bb-bb10-action-bar-button-dark bb-bb10-action-bar-button-tab-left-" + e.res + "-dark" : "bb-bb10-action-bar-action-" + e.res + " bb-bb10-action-bar-action-" + d + "-" + e.res + " bb-bb10-action-bar-button-dark", e.setAttribute("class", e.normal), e.normal = this.switchOrientationCSS(e.normal), n = e.getAttribute("class"), n = this.switchOrientationCSS(n), e.setAttribute("class", n), o = "button", l++) : (e.style.display = "none", e.visible = !1);
			this.actionOverflowBtn && (this.actionOverflowBtn.normal = "tab" == o ? "bb-bb10-action-bar-action-" + this.actionOverflowBtn.res + " bb-bb10-action-bar-action-" + d + "-" + this.actionOverflowBtn.res + " bb-bb10-action-bar-button-dark bb-bb10-action-bar-button-tab-left-" + this.actionOverflowBtn.res + "-dark" : "bb-bb10-action-bar-action-" + this.actionOverflowBtn.res + " bb-bb10-action-bar-action-" + d + "-" + this.actionOverflowBtn.res + " bb-bb10-action-bar-button-dark", this.actionOverflowBtn.style.width = bb.actionBar.getActionOverflowBtnWidth(this.actionOverflowBtn) - 1 + "px", this.actionOverflowBtn.highlight.style.width = .6 * bb.actionBar.getActionOverflowBtnWidth(this.actionOverflowBtn) + "px", this.actionOverflowBtn.highlight.style["margin-left"] = .2 * bb.actionBar.getActionOverflowBtnWidth(this.actionOverflowBtn) + "px", this.actionOverflowBtn.style.float = "right", this.actionOverflowBtn.setAttribute("class", this.actionOverflowBtn.normal), this.actionOverflowBtn.normal = this.switchOrientationCSS(this.actionOverflowBtn.normal), n = this.actionOverflowBtn.getAttribute("class"), n = this.switchOrientationCSS(n), this.actionOverflowBtn.setAttribute("class", n), n = this.actionOverflowBtn.icon.getAttribute("class"), n = this.switchOrientationCSS(n), this.actionOverflowBtn.icon.setAttribute("class", n)), this.tabOverflowBtn && (this.tabOverflowBtn.style.width = bb.actionBar.getTabOverflowBtnWidth(this.tabOverflowBtn) - 1 + "px", this.tabOverflowBtn.normal = this.switchOrientationCSS(this.tabOverflowBtn.normal), this.tabOverflowBtn.highlight = this.switchOrientationCSS(this.tabOverflowBtn.highlight), n = this.tabOverflowBtn.getAttribute("class"), n = this.switchOrientationCSS(n), this.tabOverflowBtn.setAttribute("class", n), n = this.tabOverflowBtn.tabHighlight.getAttribute("class"), n = this.switchOrientationCSS(n), this.tabOverflowBtn.tabHighlight.setAttribute("class", n), n = this.tabOverflowBtn.display.getAttribute("class"), n = this.switchOrientationCSS(n), this.tabOverflowBtn.display.setAttribute("class", n), this.tabOverflowBtn.icon.normal = this.switchOrientationCSS(this.tabOverflowBtn.icon.normal), n = this.tabOverflowBtn.icon.getAttribute("class"), n = this.switchOrientationCSS(n), this.tabOverflowBtn.icon.setAttribute("class", n))
		}, t.reLayoutActionBar = t.reLayoutActionBar.bind(t), window.addEventListener("orientationchange", t.reLayoutActionBar, !1), bb.windowListeners.push({
			name: "orientationchange",
			eventHandler: t.reLayoutActionBar
		}), t.setBackCaption = function(t) {
			this.setAttribute("data-bb-back-caption", t), f.innerHTML = t
		}, t.setBackCaption = t.setBackCaption.bind(t), t.setSelectedTab = function(t) {
			"tab" == t.getAttribute("data-bb-style") && (bb.actionBar.highlightAction(t), t.onclick && t.onclick())
		}, t.setSelectedTab = t.setSelectedTab.bind(t), t.hide = function() {
			this.isVisible && (this.style.display = "none", bb.screen.currentScreen.outerScrollArea.style.bottom = "0px", this.isVisible = !1, bb.scroller && bb.scroller.refresh())
		}, t.hide = t.hide.bind(t), t.show = function() {
			this.isVisible || (this.style.display = "", bb.screen.currentScreen.outerScrollArea.style.bottom = bb.screen.getActionBarHeight() + "px", this.isVisible = !0, bb.scroller && bb.scroller.refresh())
		}, t.show = t.show.bind(t), u.length > 0) {
			var A;
			for (a = 0; h.length > a; a++) i = h[a], "overflow" != i.getAttribute("data-bb-img") && (A = i.cloneNode(!0), A.visibleTab = i, A.res = m, A.actionBar = t, t.tabOverflowMenu.add(A));
			for (a = 0; u.length > a; a++) i = u[a], i.res = m, i.actionBar = t, t.tabOverflowMenu.add(i)
		}
		for (a = 0; c.length > a; a++) i = c[a], i.res = m, t.menu.add(i);
		var C;
		for (a = 0; h.length > a; a++) C = h[a], C.res = m, n = C.innerHTML, C.actionBar = t, C.visible = !0, C.innerHTML = "", C.normal = "bb-bb10-action-bar-action-" + m + " bb-bb10-action-bar-action-" + g + "-" + m + " bb-bb10-action-bar-tab-dark bb-bb10-action-bar-tab-normal-dark", C.highlight = C.normal + " bb-bb10-action-bar-tab-selected-dark", C.setAttribute("class", C.normal), C.visible = !0, C.hasAttribute("data-bb-visible") && "false" == C.getAttribute("data-bb-visible").toLowerCase() && (C.visible = !1), l = document.createElement("img"), l.setAttribute("class", "bb-bb10-action-bar-icon-" + m), l.setAttribute("src", C.getAttribute("data-bb-img")), C.icon = l, C.appendChild(l), o = document.createElement("div"), o.setAttribute("class", "bb-bb10-action-bar-action-display-" + m + " bb-bb10-action-bar-action-display-" + g + "-" + m), o.innerHTML = n, C.display = o, C.appendChild(o), C.hasAttribute("data-bb-selected") && "true" == C.getAttribute("data-bb-selected").toLowerCase() && bb.actionBar.highlightAction(C), C.addEventListener("click", function() {
				bb.actionBar.highlightAction(this)
			}, !1), C.setCaption = function(t) {
				if (this.display.innerHTML = t, this.actionBar.tabOverflowMenu) {
					var e, i, n = this.actionBar.tabOverflowMenu.actions;
					for (e = 0; n.length > e; e++) i = n[e], i.visibleTab == this && i.setCaption(t)
				}
		}, C.setCaption = C.setCaption.bind(C), C.getCaption = function() {
			return this.display.innerHTML
		}, C.getCaption = C.getCaption.bind(C), C.setImage = function(t) {
			if (this.icon.setAttribute("src", t), this.actionBar.tabOverflowMenu) {
				var e, i, n = this.actionBar.tabOverflowMenu.actions;
				for (e = 0; n.length > e; e++) i = n[e], i.visibleTab == this && i.setImage(t)
			}
		}, C.setImage = C.setImage.bind(C), C.getImage = function() {
			return this.icon.getAttribute("src")
		}, C.getImage = C.getImage.bind(C), C.hide = bb.actionBar.actionHide, C.hide = C.hide.bind(C), C.show = bb.actionBar.actionShow, C.show = C.show.bind(C);
		var B;
		t.tabOverflowBtn && (B = t.tabOverflowBtn, B.res = m, n = B.innerHTML, B.actionBar = t, B.visible = !0, B.innerHTML = "", B.normal = "bb-bb10-action-bar-action-" + m + " bb-bb10-action-bar-action-" + g + "-" + m + " bb-bb10-action-bar-tab-dark bb-bb10-action-bar-tab-normal-dark", B.highlight = B.normal + " bb-bb10-action-bar-tab-selected-dark", B.setAttribute("class", B.normal), l = document.createElement("img"), l.setAttribute("class", "bb-bb10-action-bar-icon-" + m), l.setAttribute("src", bb.transparentPixel), l.normal = "bb-bb10-action-bar-icon-" + m + " bb-bb10-action-bar-tab-overflow-" + m + "-dark bb-bb10-action-bar-tab-overflow-" + g + "-" + m, l.highlight = "bb-bb10-action-bar-icon-" + m, l.setAttribute("class", l.normal), B.appendChild(l), o = document.createElement("div"), o.setAttribute("class", "bb-bb10-action-bar-action-display-" + m + " bb-bb10-action-bar-action-display-" + g + "-" + m), o.innerHTML = n, B.display = o, B.appendChild(o), B.icon = l, o.innerHTML = "&nbsp;", B.display = o, B.tabHighlight = document.createElement("div"), B.tabHighlight.setAttribute("class", "bb-bb10-action-bar-tab-overflow-" + m + "-dark bb-bb10-action-bar-tab-overflow-highlight-" + m + " bb-bb10-action-bar-tab-overflow-highlight-" + g + "-" + m), B.appendChild(B.tabHighlight), B.style.width = bb.actionBar.getTabOverflowBtnWidth(B) - 1 + "px", B.reset = function() {
			this.icon.setAttribute("src", bb.transparentPixel), this.icon.setAttribute("class", this.icon.normal), this.tabHighlight.style.display = "none", this.display.innerHTML = "&nbsp;"
		}, B.reset = B.reset.bind(B));
		var S;
		for (a = 0; d.length > a; a++) S = d[a], S.res = m, S.actionBar = t, n = S.innerHTML, l = document.createElement("img"), l.setAttribute("src", S.getAttribute("data-bb-img")), l.setAttribute("class", "bb-bb10-action-bar-icon-" + m), S.normal = "bb-bb10-action-bar-action-" + m + " bb-bb10-action-bar-action-" + g + "-" + m + " bb-bb10-action-bar-button-dark", S.visible = !0, S.hasAttribute("data-bb-visible") && "false" == S.getAttribute("data-bb-visible").toLowerCase() && (S.visible = !1), S.icon = l, S.innerHTML = "", S.setAttribute("class", S.normal), S.appendChild(l), o = document.createElement("div"), o.setAttribute("class", "bb-bb10-action-bar-action-display-" + m), o.innerHTML = n, S.display = o, S.appendChild(o), S.highlight = document.createElement("div"), S.highlight.setAttribute("class", "bb-bb10-action-bar-action-highlight"), S.highlight.style.height = bb.device.is1024x600 ? "4px" : "8px", S.highlight.style["background-color"] = "transparent", S.appendChild(S.highlight), S.setCaption = function(t) {
				this.display.innerHTML = t
		}, S.setCaption = S.setCaption.bind(S), S.getCaption = function() {
			return this.display.innerHTML
		}, S.getCaption = S.getCaption.bind(S), S.setImage = function(t) {
			this.icon.setAttribute("src", t)
		}, S.setImage = S.setImage.bind(S), S.getImage = function() {
			return this.icon.getAttribute("src")
		}, S.getImage = S.getImage.bind(S), S.hide = bb.actionBar.actionHide, S.hide = S.hide.bind(S), S.show = bb.actionBar.actionShow, S.show = S.show.bind(S), S.ontouchstart = function() {
			this.highlight.style["background-color"] = bb.options.highlightColor
		}, S.ontouchend = function() {
			this.highlight.style["background-color"] = "transparent"
		};
		if (t.actionOverflowBtn) {
			actionOverflow = t.actionOverflowBtn, actionOverflow.res = m, actionOverflow.actionBar = t, actionOverflow.visible = !0, n = actionOverflow.innerHTML, l = document.createElement("img"), l.setAttribute("src", bb.transparentPixel), l.setAttribute("class", "bb-bb10-action-bar-icon-" + m + " bb-bb10-action-bar-overflow-button-" + m + "-dark bb-bb10-action-bar-overflow-button-" + g + "-" + m), actionOverflow.icon = l, actionOverflow.normal = "bb-bb10-action-bar-action-" + m + " bb-bb10-action-bar-action-" + g + "-" + m + " bb-bb10-action-bar-button-dark", actionOverflow.innerHTML = "", actionOverflow.setAttribute("class", actionOverflow.normal), actionOverflow.appendChild(l);
			var o = document.createElement("div");
			o.setAttribute("class", "bb-bb10-action-bar-action-display-" + m), o.innerHTML = n, actionOverflow.display = o, actionOverflow.appendChild(o), actionOverflow.highlight = document.createElement("div"), actionOverflow.highlight.setAttribute("class", "bb-bb10-action-bar-action-highlight"), actionOverflow.highlight.style.height = bb.device.is1024x600 ? "4px" : "8px", actionOverflow.highlight.style["background-color"] = "transparent", actionOverflow.appendChild(actionOverflow.highlight), actionOverflow.ontouchstart = function() {
				this.highlight.style["background-color"] = bb.options.highlightColor
			}, actionOverflow.ontouchend = function() {
				this.highlight.style["background-color"] = "transparent"
			}
		}
		t.menu && t.menu.centerMenuItems(), t.tabOverflowMenu && (t.tabOverflowMenu.centerMenuItems(), t.tabOverflowMenu.initSelected()), t.reLayoutActionBar()
	},
	actionShow: function() {
		this.visible || (this.style.display = "", this.visible = !0, this.actionBar.reLayoutActionBar())
	},
	actionHide: function() {
		this.visible && (this.style.display = "none", this.visible = !1, this.actionBar.reLayoutActionBar())
	},
	getTabOverflowBtnWidth: function(t) {
		return t ? bb.device.is1024x600 ? "portrait" == bb.getOrientation() ? 77 : 123 : bb.device.is1280x768 || bb.device.is1280x720 ? "portrait" == bb.getOrientation() ? 154 : 256 : bb.device.is720x720 ? 144 : "portrait" == bb.getOrientation() ? 154 : 256 : 0
	},
	getActionOverflowBtnWidth: function(t) {
		return t ? bb.device.is1024x600 ? "portrait" == bb.getOrientation() ? 77 : 123 : bb.device.is1280x768 || bb.device.is1280x720 ? "portrait" == bb.getOrientation() ? 154 : 256 : bb.device.is720x720 ? 144 : "portrait" == bb.getOrientation() ? 154 : 256 : 0
	},
	getBackBtnWidth: function(t) {
		return t ? bb.device.is1024x600 ? "portrait" == bb.getOrientation() ? 93 : 150 : bb.device.is1280x768 || bb.device.is1280x720 ? "portrait" == bb.getOrientation() ? 187 : 300 : bb.device.is720x720 ? 174 : "portrait" == bb.getOrientation() ? 187 : 300 : 0
	},
	highlightAction: function(t, e) {
		var i, n, o = t.actionBar.mainBarTabs;
		for (i = 0; o.length > i; i++) n = o[i], n != t && bb.actionBar.unhighlightAction(n);
		if (t.actionBar.tabOverflowMenu) {
			for (o = t.actionBar.tabOverflowMenu.actions, i = 0; o.length > i; i++) n = o[i], n != e && bb.actionBar.unhighlightAction(n);
			t.actionBar.tabOverflowBtn.style["border-top-color"] = "", t.actionBar.tabOverflowBtn.setAttribute("class", t.actionBar.tabOverflowBtn.normal)
		}
		if (t.style["border-top-color"] = bb.options.highlightColor, t.setAttribute("class", t.highlight), e && e.setAttribute("class", e.normal + " bb10Highlight"), t.actionBar.tabOverflowMenu && !e) if (t.actionBar.tabOverflowBtn && t == t.actionBar.tabOverflowBtn) e.setAttribute("class", e.normal + " bb10Highlight");
			else for (o = t.actionBar.tabOverflowMenu.actions, i = 0; o.length > i; i++) n = o[i], n.visibleTab == t && n.setAttribute("class", n.normal + " bb10Highlight");
		t.actionBar.tabOverflowBtn && t.actionBar.tabOverflowBtn.reset && t.actionBar.tabOverflowBtn.reset()
	},
	unhighlightAction: function(t) {
		var e;
		if (t.style["border-top-color"] = "", t.setAttribute("class", t.normal), t.actionBar && t.actionBar.tabOverflowMenu) for (tabs = t.actionBar.tabOverflowMenu.actions, i = 0; tabs.length > i; i++) e = tabs[i], e.setAttribute("class", e.normal)
	}
}, _bb_bbmBubble = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.bbmBubble.style(t[e])
	},
	style: function(t) {
		if (t.hasAttribute("data-bb-style")) {
			var e, i = t.getAttribute("data-bb-style").toLowerCase();
			"left" == i ? t.setAttribute("class", "bb-bbm-bubble-left") : t.setAttribute("class", "bb-bbm-bubble-right");
			var n = t.querySelectorAll("[data-bb-type=item]");
			for (e = 0; e > n.length; e++) t.removeChild(n[e]);
			var o = document.createElement("div");
			o.setAttribute("class", "top-left image"), t.appendChild(o), o = document.createElement("div"), o.setAttribute("class", "top-right image"), t.appendChild(o), o = document.createElement("div"), o.setAttribute("class", "inside"), t.appendChild(o);
			var r = document.createElement("div");
			for (r.setAttribute("class", "nogap"), o.appendChild(r), o = document.createElement("div"), o.setAttribute("class", "bottom-left image"), t.appendChild(o), o = document.createElement("div"), o.setAttribute("class", "bottom-right image"), t.appendChild(o), e = 0; n.length > e; e++) {
				var s = n[e],
					l = s.innerHTML;
				s.innerHTML = '<img src="' + s.getAttribute("data-bb-img") + '" />\n' + '<div class="details">' + l + "</div>\n", r.appendChild(s)
			}
		}
		return t.getStyle = function() {
			return this.getAttribute("data-bb-style")
		}, t.getStyle = t.getStyle.bind(t), t.setStyle = function(t) {
			"left" == t ? (this.setAttribute("data-bb-style", t), this.setAttribute("class", "bb-bbm-bubble-left")) : "right" == t && (this.setAttribute("data-bb-style", t), this.setAttribute("class", "bb-bbm-bubble-right")), bb.refresh()
		}, t.setStyle = t.setStyle.bind(t), t.show = function() {
			this.style.display = "block", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, t.remove = t.remove.bind(t), t
	}
}, bb.contextMenu = {
	create: function(t) {
		var e, i = "1280x768-1280x720";
		bb.device.is1024x600 ? (i = "1024x600", e = 100) : (bb.device.is1280x768 || bb.device.is1280x720) && (i = "1280x768-1280x720", e = 300);
		var n, o = document.createElement("div"),
			r = document.createElement("div"),
			s = document.createElement("div");
		return o.setAttribute("class", "bb-bb10-context-menu bb-bb10-context-menu-" + i + "-dark"), o.actions = [], o.hideEvents = [], o.res = i, o.threshold = e, o.visible = !1, o.overlay = document.createElement("div"), o.overlay.threshold = e, o.overlay.setAttribute("class", "bb-bb10-context-menu-overlay"), o.overlay.menu = o, t.appendChild(o.overlay), o.overlay.ontouchmove = function(t) {
			if (this.menu.peeking) {
				var e = t.touches[0];
				this.startPos && this.startPos - e.pageX > this.threshold && (this.menu.show(this.menu.selected), this.closeMenu = !1)
			}
		}, o.overlay.ontouchend = function() {
			this.closeMenu && (this.menu.hide(), event.preventDefault())
		}, o.overlay.ontouchstart = function(t) {
			if (this.closeMenu = !0, !this.menu.peeking && this.menu.visible) t.preventDefault();
			else if (!this.menu.peeking) return;
			var e = t.touches[0];
			this.startPos = e.pageX, t.preventDefault()
		}, n = document.createElement("div"), n.setAttribute("class", "bb-bb10-context-menu-item-" + i + " bb-bb10-context-menu-header-dark"), o.header = n, o.appendChild(n), r.setAttribute("class", "bb-bb10-context-menu-header-title-" + i + " bb-bb10-context-menu-header-title-dark"), r.style.width = bb.contextMenu.getWidth() - 20 + "px", o.topTitle = r, n.appendChild(r), s.setAttribute("class", "bb-bb10-context-menu-header-description-" + i), s.style.width = bb.contextMenu.getWidth() - 20 + "px", o.description = s, n.appendChild(s), o.scrollContainer = document.createElement("div"), o.scrollContainer.setAttribute("class", "bb-bb10-context-menu-scroller"), o.appendChild(o.scrollContainer), o.style.left = bb.contextMenu.getLeft(), o.show = function(t) {
			t ? (this.header.style.display = "", this.header.style.visibility = "", t.title && (this.topTitle.innerHTML = t.title), t.description && (this.description.innerHTML = t.description), this.selected = t, o.scrollContainer.style.top = bb.device.isPlayBook ? "64px" : "130px") : (this.header.style.display = "none", this.selected = void 0, o.scrollContainer.style.top = "0px"), o.scrollContainer.style["overflow-y"] = "scroll", o.scrollContainer.style["overflow-x"] = "hidden", o.scrollContainer.style["-webkit-overflow-scrolling"] = "-blackberry-touch", this.peeking = !1, this.overlay.style.display = "inline", this.style["-webkit-transition"] = "all 0.3s ease-in-out", this.style["-webkit-transform"] = "translate(-" + bb.contextMenu.getWidth() + "px, 0)", this.style["-webkit-backface-visibility"] = "hidden", this.style["-webkit-perspective"] = "1000", this.addEventListener("touchstart", this.touchHandler, !1), this.onclick = function() {
				this.hide()
			}, this.header.addEventListener("click", this.hide, !1), this.style.visibility = "visible", this.visible = !0
		}, o.show = o.show.bind(o), o.hide = function() {
			this.overlay.style.display = "none", this.removeEventListener("touchstart", this.touchHandler, !1), this.removeEventListener("touchmove", this.touchMoveHandler, !1), this.style["-webkit-transition"] = "all 0.5s ease-in-out", this.style["-webkit-transform"] = "translate(" + bb.contextMenu.getWidth() + "px, 0px)", this.style["-webkit-backface-visibility"] = "hidden", this.style["-webkit-perspective"] = "1000", this.peeking || this.header.removeEventListener("click", this.hide, !1), this.peeking = !1, this.visible = !1, o.scrollContainer.style["overflow-y"] = "", o.scrollContainer.style["overflow-x"] = "", o.scrollContainer.style["-webkit-overflow-scrolling"] = "";
			for (var t = o.hideEvents.length - 1; t >= 0; t--) o.hideEvents[t](), o.hideEvents.pop();
			if (bb.device.isPlayBook) for (var t = 0; this.actions.length > t; t++) this.actions[t].ontouchend()
		}, o.hide = o.hide.bind(o), o.peek = function(t) {
			t ? (this.header.style.display = "", t.title && (this.topTitle.innerHTML = t.title), t.description && (this.description.innerHTML = t.description), this.selected = t, o.scrollContainer.style.top = bb.device.isPlayBook ? "64px" : "130px") : o.scrollContainer.style.top = "0px", this.header.style.visibility = "hidden", this.header.style["margin-bottom"] = "-" + Math.floor(this.header.offsetHeight / 2) + "px", this.peeking = !0, this.overlay.style.display = "inline", this.style["-webkit-transition"] = "all 0.3s ease-in-out", this.style["-webkit-transform"] = "translate(-" + bb.contextMenu.getPeekWidth() + ", 0)", this.style["-webkit-backface-visibility"] = "hidden", this.style["-webkit-perspective"] = "1000", this.addEventListener("touchstart", this.touchHandler, !1), this.addEventListener("touchmove", this.touchMoveHandler, !1), this.onclick = function(t) {
				(t.target == this || t.target == this.scrollContainer) && this.show(this.selected)
			}, this.header.removeEventListener("click", this.hide, !1), this.style.visibility = "visible", this.visible = !0
		}, o.peek = o.peek.bind(o), o.touchHandler = function(t) {
			if (this.peeking) {
				var e = t.touches[0];
				this.startPos = e.pageX, t.target == this.scrollContainer || t.target.parentNode == this.scrollContainer && t.target != this.header && (t.preventDefault(), t.stopPropagation())
			}
		}, o.touchHandler = o.touchHandler.bind(o), o.touchMoveHandler = function(t) {
			if (this.peeking) {
				var e = t.touches[0];
				this.startPos && this.startPos - e.pageX > this.threshold && this.show(this.selected)
			}
		}, o.touchMoveHandler = o.touchMoveHandler.bind(o), o.onclick = function(t) {
			this.peeking && (this.show(this.selected), t.stopPropagation())
		}, o.centerMenuItems = function() {
			var t, e, i = bb.innerHeight(),
				n = bb.device.isPlayBook ? 53 : 111,
				o = 0,
				r = void 0 == this.actionBar ? n : 0;
			for (e = 0; this.actions.length > e; e++) 1 == this.actions[e].visible && o++;
			o = this.pinnedAction ? o - 1 : o, t = i - Math.floor(i / 2) - Math.floor(o * n / 2) - r, 0 > t && (t = 0), this.scrollContainer.style["padding-top"] = t + "px"
		}, o.centerMenuItems = o.centerMenuItems.bind(o), o.orientationChanged = function() {
			this.style["-webkit-transition"] = "", this.style.left = bb.innerWidth() + "px", this.style.height = bb.innerHeight() + "px", this.centerMenuItems()
		}, o.orientationChanged = o.orientationChanged.bind(o), window.addEventListener("orientationchange", o.orientationChanged, !1), bb.windowListeners.push({
			name: "orientationchange",
			eventHandler: o.orientationChanged
		}), o.addEventListener("webkitTransitionEnd", function() {
			this.visible || (this.style.visibility = "hidden")
		}), o.add = function(t) {
			var e, i, n = t.innerHTML,
				o = !1;
			e = "bb-bb10-context-menu-item-" + this.res + " bb-bb10-context-menu-item-" + this.res + "-dark", t.hasAttribute("data-bb-visible") && "false" == t.getAttribute("data-bb-visible").toLowerCase() ? (t.visible = !1, t.style.display = "none") : (t.visible = !0, this.actions.push(t)), o = t.hasAttribute("data-bb-pin") && "true" == t.getAttribute("data-bb-pin").toLowerCase(), o && !this.pinnedAction ? (e = e + " bb-bb10-context-menu-item-first-" + this.res + "-dark", t.style.bottom = "-2px", t.style.position = "absolute", t.style.width = "100%", this.pinnedAction = t, this.appendChild(t), this.scrollContainer.style.bottom = bb.device.isPlayBook ? "64px" : "130px") : this.scrollContainer.appendChild(t), 1 == this.actions.length && (e = e + " bb-bb10-context-menu-item-first-" + this.res + "-dark"), i = e + " bb-bb10-context-menu-item-hover-" + this.res, t.normal = e, t.highlight = i, t.innerHTML = "";
			var r = document.createElement("div"),
				s = document.createElement("img");
			s.setAttribute("src", t.getAttribute("data-bb-img")), s.setAttribute("class", "bb-bb10-context-menu-item-image-" + this.res), t.img = s, t.appendChild(s), r.setAttribute("class", "bb-bb10-context-menu-item-inner-" + this.res), t.appendChild(r), r.innerHTML = n, t.display = r, t.menu = this, t.setAttribute("class", e), t.ontouchstart = function(t) {
				if (this.menu.peeking ? this.style["border-left-color"] = bb.options.highlightColor : this.style["background-color"] = bb.options.highlightColor, t.stopPropagation(), bb.device.isPlayBook) {
					var e, i;
					for (i = 0; this.menu.actions.length > i; i++) e = this.menu.actions[i], e != this && e.ontouchend()
				}
			}, t.ontouchend = function() {
				this.menu.peeking ? this.style["border-left-color"] = "transparent" : this.style["background-color"] = ""
			}, t.addEventListener("click", this.hide, !1), t.setCaption = function(t) {
				this.display.innerHTML = t
			}, t.setCaption = t.setCaption.bind(t), t.setImage = function(t) {
				this.img.setAttribute("src", t)
			}, t.setImage = t.setImage.bind(t), t.hide = function() {
				if (this.visible) {
					this.visible = !1;
					var t = this.menu.actions.indexOf(this);
					this.menu.actions.splice(t, 1), this.style.display = "none", this.menu.centerMenuItems()
				}
			}, t.hide = t.hide.bind(t), t.show = function() {
				this.visible || (this.visible = !0, this.menu.actions.push(this), this.style.display = "", this.menu.centerMenuItems())
			}, t.show = t.show.bind(t)
		}, o.add = o.add.bind(o), o
	},
	getWidth: function() {
		return bb.device.isPlayBook ? "300" : "563"
	},
	getPeekWidth: function() {
		return bb.device.isPlayBook ? "55px" : "121px"
	},
	getLeft: function() {
		return window.innerWidth + 3 + "px"
	}
},
function() {
	var t = Math,
		e = function(t) {
			return t >> 0
		}, i = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : /trident/i.test(navigator.userAgent) ? "ms" : "opera" in window ? "O" : "",
		n = /android/gi.test(navigator.appVersion),
		o = /iphone|ipad/gi.test(navigator.appVersion),
		r = /playbook/gi.test(navigator.appVersion),
		s = /hp-tablet/gi.test(navigator.appVersion),
		l = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
		a = "ontouchstart" in window && !s,
		b = i + "Transform" in document.documentElement.style,
		d = o || r,
		c = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
				return setTimeout(t, 1)
			}
		}(),
		h = function() {
			return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
		}(),
		u = "onorientationchange" in window ? "orientationchange" : "resize",
		p = a ? "touchstart" : "mousedown",
		m = a ? "touchmove" : "mousemove",
		g = a ? "touchend" : "mouseup",
		v = a ? "touchcancel" : "mouseup",
		f = "Moz" == i ? "DOMMouseScroll" : "mousewheel",
		y = "translate" + (l ? "3d(" : "("),
		w = l ? ",0)" : ")",
		E = function(t, e) {
			var r, s = this,
				c = document;
			s.wrapper = "object" == typeof t ? t : c.getElementById(t), s.wrapper.style.overflow = "hidden", s.scroller = s.wrapper.children[0], s.options = {
				hScroll: !0,
				vScroll: !0,
				x: 0,
				y: 0,
				bounce: !0,
				bounceLock: !1,
				momentum: !0,
				lockDirection: !0,
				useTransform: !0,
				useTransition: !1,
				topOffset: 0,
				checkDOMChanges: !1,
				hScrollbar: !0,
				vScrollbar: !0,
				fixedScrollbar: n,
				hideScrollbar: o,
				fadeScrollbar: o && l,
				scrollbarClass: "",
				zoom: !1,
				zoomMin: 1,
				zoomMax: 4,
				doubleTapZoom: 2,
				wheelAction: "scroll",
				snap: !1,
				snapThreshold: 1,
				onRefresh: null,
				onBeforeScrollStart: function(t) {
					t.preventDefault()
				},
				onScrollStart: null,
				onBeforeScrollMove: null,
				onScrollMove: null,
				onBeforeScrollEnd: null,
				onScrollEnd: null,
				onTouchEnd: null,
				onDestroy: null,
				onZoomStart: null,
				onZoom: null,
				onZoomEnd: null
			};
			for (r in e) s.options[r] = e[r];
			s.x = s.options.x, s.y = s.options.y, s.options.useTransform = b ? s.options.useTransform : !1, s.options.hScrollbar = s.options.hScroll && s.options.hScrollbar, s.options.vScrollbar = s.options.vScroll && s.options.vScrollbar, s.options.zoom = s.options.useTransform && s.options.zoom, s.options.useTransition = d && s.options.useTransition, s.options.zoom && n && (y = "translate(", w = ")"), s.scroller.style[i + "TransitionProperty"] = s.options.useTransform ? "-" + i.toLowerCase() + "-transform" : "top left", s.scroller.style[i + "TransitionDuration"] = "0", s.scroller.style[i + "TransformOrigin"] = "0 0", s.options.useTransition && (s.scroller.style[i + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"), s.options.useTransform ? s.scroller.style[i + "Transform"] = y + s.x + "px," + s.y + "px" + w : s.scroller.style.cssText += ";position:absolute;top:" + s.y + "px;left:" + s.x + "px", s.options.useTransition && (s.options.fixedScrollbar = !0), s.refresh(), s._bind(u, window), s._bind(p), a || (s._bind("mouseout", s.wrapper), "none" != s.options.wheelAction && s._bind(f)), s.options.checkDOMChanges && (s.checkDOMTime = setInterval(function() {
				s._checkDOMChanges()
			}, 500))
		};
	E.prototype = {
		enabled: !0,
		x: 0,
		y: 0,
		steps: [],
		scale: 1,
		currPageX: 0,
		currPageY: 0,
		pagesX: [],
		pagesY: [],
		aniTime: null,
		wheelZoomCount: 0,
		handleEvent: function(t) {
			var e = this;
			switch (t.type) {
				case p:
					if (!a && 0 !== t.button) return;
					e._start(t);
					break;
				case m:
					e._move(t);
					break;
				case g:
				case v:
					e._end(t);
					break;
				case u:
					e._resize();
					break;
				case f:
					e._wheel(t);
					break;
				case "mouseout":
					e._mouseout(t);
					break;
				case "webkitTransitionEnd":
					e._transitionEnd(t)
			}
		},
		_checkDOMChanges: function() {
			this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
		},
		_scrollbar: function(n) {
			var o, r = this,
				s = document;
			return r[n + "Scrollbar"] ? (r[n + "ScrollbarWrapper"] || (o = s.createElement("div"), r.options.scrollbarClass ? o.className = r.options.scrollbarClass + n.toUpperCase() : o.style.cssText = "position:absolute;z-index:100;" + ("h" == n ? "height:7px;bottom:1px;left:2px;right:" + (r.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (r.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), o.style.cssText += ";pointer-events:none;-" + i + "-transition-property:opacity;-" + i + "-transition-duration:" + (r.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (r.options.hideScrollbar ? "0" : "1"), r.wrapper.appendChild(o), r[n + "ScrollbarWrapper"] = o, o = s.createElement("div"), r.options.scrollbarClass || (o.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.9);-" + i + "-background-clip:padding-box;-" + i + "-box-sizing:border-box;" + ("h" == n ? "height:100%" : "width:100%") + ";-" + i + "-border-radius:3px;border-radius:3px"), o.style.cssText += ";pointer-events:none;-" + i + "-transition-property:-" + i + "-transform;-" + i + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-" + i + "-transition-duration:0;-" + i + "-transform:" + y + "0,0" + w, r.options.useTransition && (o.style.cssText += ";-" + i + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), r[n + "ScrollbarWrapper"].appendChild(o), r[n + "ScrollbarIndicator"] = o), "h" == n ? (r.hScrollbarSize = r.hScrollbarWrapper.clientWidth, r.hScrollbarIndicatorSize = t.max(e(r.hScrollbarSize * r.hScrollbarSize / r.scrollerW), 8), r.hScrollbarIndicator.style.width = r.hScrollbarIndicatorSize + "px", r.hScrollbarMaxScroll = r.hScrollbarSize - r.hScrollbarIndicatorSize, r.hScrollbarProp = r.hScrollbarMaxScroll / r.maxScrollX) : (r.vScrollbarSize = r.vScrollbarWrapper.clientHeight, r.vScrollbarIndicatorSize = t.max(e(r.vScrollbarSize * r.vScrollbarSize / r.scrollerH), 8), r.vScrollbarIndicator.style.height = r.vScrollbarIndicatorSize + "px", r.vScrollbarMaxScroll = r.vScrollbarSize - r.vScrollbarIndicatorSize, r.vScrollbarProp = r.vScrollbarMaxScroll / r.maxScrollY), r._scrollbarPos(n, !0), void 0) : (r[n + "ScrollbarWrapper"] && (b && (r[n + "ScrollbarIndicator"].style[i + "Transform"] = ""), r[n + "ScrollbarWrapper"].parentNode.removeChild(r[n + "ScrollbarWrapper"]), r[n + "ScrollbarWrapper"] = null, r[n + "ScrollbarIndicator"] = null), void 0)
		},
		_resize: function() {
			var t = this;
			setTimeout(function() {
				t.refresh()
			}, n ? 200 : 0)
		},
		_pos: function(t, n) {
			t = this.hScroll ? t : 0, n = this.vScroll ? n : 0, this.options.useTransform ? this.scroller.style[i + "Transform"] = y + t + "px," + n + "px" + w + " scale(" + this.scale + ")" : (t = e(t), n = e(n), this.scroller.style.left = t + "px", this.scroller.style.top = n + "px"), this.x = t, this.y = n, this._scrollbarPos("h"), this._scrollbarPos("v")
		},
		_scrollbarPos: function(t, n) {
			var o, r = this,
				s = "h" == t ? r.x : r.y;
			r[t + "Scrollbar"] && (s = r[t + "ScrollbarProp"] * s, 0 > s ? (r.options.fixedScrollbar || (o = r[t + "ScrollbarIndicatorSize"] + e(3 * s), 8 > o && (o = 8), r[t + "ScrollbarIndicator"].style["h" == t ? "width" : "height"] = o + "px"), s = 0) : s > r[t + "ScrollbarMaxScroll"] && (r.options.fixedScrollbar ? s = r[t + "ScrollbarMaxScroll"] : (o = r[t + "ScrollbarIndicatorSize"] - e(3 * (s - r[t + "ScrollbarMaxScroll"])), 8 > o && (o = 8), r[t + "ScrollbarIndicator"].style["h" == t ? "width" : "height"] = o + "px", s = r[t + "ScrollbarMaxScroll"] + (r[t + "ScrollbarIndicatorSize"] - o))), r[t + "ScrollbarWrapper"].style[i + "TransitionDelay"] = "0", r[t + "ScrollbarWrapper"].style.opacity = n && r.options.hideScrollbar ? "0" : "1", r[t + "ScrollbarIndicator"].style[i + "Transform"] = y + ("h" == t ? s + "px,0" : "0," + s + "px") + w)
		},
		_start: function(e) {
			var n, o, r, s, l, b = this,
				d = a ? e.touches[0] : e;
			b.enabled && (b.options.onBeforeScrollStart && b.options.onBeforeScrollStart.call(b, e), (b.options.useTransition || b.options.zoom) && b._transitionTime(0), b.moved = !1, b.animating = !1, b.zoomed = !1, b.distX = 0, b.distY = 0, b.absDistX = 0, b.absDistY = 0, b.dirX = 0, b.dirY = 0, b.options.zoom && a && e.touches.length > 1 && (s = t.abs(e.touches[0].pageX - e.touches[1].pageX), l = t.abs(e.touches[0].pageY - e.touches[1].pageY), b.touchesDistStart = t.sqrt(s * s + l * l), b.originX = t.abs(e.touches[0].pageX + e.touches[1].pageX - 2 * b.wrapperOffsetLeft) / 2 - b.x, b.originY = t.abs(e.touches[0].pageY + e.touches[1].pageY - 2 * b.wrapperOffsetTop) / 2 - b.y, b.options.onZoomStart && b.options.onZoomStart.call(b, e)), b.options.momentum && (b.options.useTransform ? (n = getComputedStyle(b.scroller, null)[i + "Transform"].replace(/[^0-9-.,]/g, "").split(","), o = 1 * n[4], r = 1 * n[5]) : (o = 1 * getComputedStyle(b.scroller, null).left.replace(/[^0-9-]/g, ""), r = 1 * getComputedStyle(b.scroller, null).top.replace(/[^0-9-]/g, "")), (o != b.x || r != b.y) && (b.options.useTransition ? b._unbind("webkitTransitionEnd") : h(b.aniTime), b.steps = [], b._pos(o, r))), b.absStartX = b.x, b.absStartY = b.y, b.startX = b.x, b.startY = b.y, b.pointX = d.pageX, b.pointY = d.pageY, b.startTime = e.timeStamp || Date.now(), b.options.onScrollStart && b.options.onScrollStart.call(b, e), b._bind(m), b._bind(g), b._bind(v))
		},
		_move: function(e) {
			var n, o, r, s = this,
				l = a ? e.touches[0] : e,
				b = l.pageX - s.pointX,
				d = l.pageY - s.pointY,
				c = s.x + b,
				h = s.y + d,
				u = e.timeStamp || Date.now();
			return s.options.onBeforeScrollMove && s.options.onBeforeScrollMove.call(s, e), s.options.zoom && a && e.touches.length > 1 ? (n = t.abs(e.touches[0].pageX - e.touches[1].pageX), o = t.abs(e.touches[0].pageY - e.touches[1].pageY), s.touchesDist = t.sqrt(n * n + o * o), s.zoomed = !0, r = 1 / s.touchesDistStart * s.touchesDist * this.scale, s.options.zoomMin > r ? r = .5 * s.options.zoomMin * Math.pow(2, r / s.options.zoomMin) : r > s.options.zoomMax && (r = 2 * s.options.zoomMax * Math.pow(.5, s.options.zoomMax / r)), s.lastScale = r / this.scale, c = this.originX - this.originX * s.lastScale + this.x, h = this.originY - this.originY * s.lastScale + this.y, this.scroller.style[i + "Transform"] = y + c + "px," + h + "px" + w + " scale(" + r + ")", s.options.onZoom && s.options.onZoom.call(s, e), void 0) : (s.pointX = l.pageX, s.pointY = l.pageY, (c > 0 || s.maxScrollX > c) && (c = s.options.bounce ? s.x + b / 2 : c >= 0 || s.maxScrollX >= 0 ? 0 : s.maxScrollX), (h > s.minScrollY || s.maxScrollY > h) && (h = s.options.bounce ? s.y + d / 2 : h >= s.minScrollY || s.maxScrollY >= 0 ? s.minScrollY : s.maxScrollY), s.distX += b, s.distY += d, s.absDistX = t.abs(s.distX), s.absDistY = t.abs(s.distY), 6 > s.absDistX && 6 > s.absDistY || (s.options.lockDirection && (s.absDistX > s.absDistY + 5 ? (h = s.y, d = 0) : s.absDistY > s.absDistX + 5 && (c = s.x, b = 0)), s.moved = !0, s._pos(c, h), s.dirX = b > 0 ? -1 : 0 > b ? 1 : 0, s.dirY = d > 0 ? -1 : 0 > d ? 1 : 0, u - s.startTime > 300 && (s.startTime = u, s.startX = s.x, s.startY = s.y), s.options.onScrollMove && s.options.onScrollMove.call(s, e)), void 0)
		},
		_end: function(n) {
			if (!a || 0 == n.touches.length) {
				var o, r, s, l, b, d, c, h = this,
					u = a ? n.changedTouches[0] : n,
					p = {
						dist: 0,
						time: 0
					}, f = {
						dist: 0,
						time: 0
					}, E = (n.timeStamp || Date.now()) - h.startTime,
					x = h.x,
					k = h.y;
				if (h._unbind(m), h._unbind(g), h._unbind(v), h.options.onBeforeScrollEnd && h.options.onBeforeScrollEnd.call(h, n), h.zoomed) return c = h.scale * h.lastScale, c = Math.max(h.options.zoomMin, c), c = Math.min(h.options.zoomMax, c), h.lastScale = c / h.scale, h.scale = c, h.x = h.originX - h.originX * h.lastScale + h.x, h.y = h.originY - h.originY * h.lastScale + h.y, h.scroller.style[i + "TransitionDuration"] = "200ms", h.scroller.style[i + "Transform"] = y + h.x + "px," + h.y + "px" + w + " scale(" + h.scale + ")", h.zoomed = !1, h.refresh(), h.options.onZoomEnd && h.options.onZoomEnd.call(h, n), void 0;
				if (!h.moved) return a && (h.doubleTapTimer && h.options.zoom ? (clearTimeout(h.doubleTapTimer), h.doubleTapTimer = null, h.options.onZoomStart && h.options.onZoomStart.call(h, n), h.zoom(h.pointX, h.pointY, 1 == h.scale ? h.options.doubleTapZoom : 1), h.options.onZoomEnd && setTimeout(function() {
						h.options.onZoomEnd.call(h, n)
					}, 200)) : h.doubleTapTimer = setTimeout(function() {
						for (h.doubleTapTimer = null, o = u.target; 1 != o.nodeType;) o = o.parentNode;
						"SELECT" != o.tagName && "INPUT" != o.tagName && "TEXTAREA" != o.tagName && (r = document.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, n.view, 1, u.screenX, u.screenY, u.clientX, u.clientY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, 0, null), r._fake = !0, o.dispatchEvent(r))
					}, h.options.zoom ? 250 : 0)), h._resetPos(200), h.options.onTouchEnd && h.options.onTouchEnd.call(h, n), void 0;
				if (300 > E && h.options.momentum && (p = x ? h._momentum(x - h.startX, E, -h.x, h.scrollerW - h.wrapperW + h.x, h.options.bounce ? h.wrapperW : 0) : p, f = k ? h._momentum(k - h.startY, E, -h.y, 0 > h.maxScrollY ? h.scrollerH - h.wrapperH + h.y - h.minScrollY : 0, h.options.bounce ? h.wrapperH : 0) : f, x = h.x + p.dist, k = h.y + f.dist, (h.x > 0 && x > 0 || h.x < h.maxScrollX && h.maxScrollX > x) && (p = {
					dist: 0,
					time: 0
				}), (h.y > h.minScrollY && k > h.minScrollY || h.y < h.maxScrollY && h.maxScrollY > k) && (f = {
					dist: 0,
					time: 0
				})), p.dist || f.dist) return b = t.max(t.max(p.time, f.time), 10), h.options.snap && (s = x - h.absStartX, l = k - h.absStartY, t.abs(s) < h.options.snapThreshold && t.abs(l) < h.options.snapThreshold ? h.scrollTo(h.absStartX, h.absStartY, 200) : (d = h._snap(x, k), x = d.x, k = d.y, b = t.max(d.time, b))), h.scrollTo(e(x), e(k), b), h.options.onTouchEnd && h.options.onTouchEnd.call(h, n), void 0;
				if (h.options.snap) return s = x - h.absStartX, l = k - h.absStartY, t.abs(s) < h.options.snapThreshold && t.abs(l) < h.options.snapThreshold ? h.scrollTo(h.absStartX, h.absStartY, 200) : (d = h._snap(h.x, h.y), (d.x != h.x || d.y != h.y) && h.scrollTo(d.x, d.y, d.time)), h.options.onTouchEnd && h.options.onTouchEnd.call(h, n), void 0;
				h._resetPos(200), h.options.onTouchEnd && h.options.onTouchEnd.call(h, n)
			}
		},
		_resetPos: function(t) {
			var e = this,
				n = e.x >= 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x,
				o = e.y >= e.minScrollY || e.maxScrollY > 0 ? e.minScrollY : e.y < e.maxScrollY ? e.maxScrollY : e.y;
			return n == e.x && o == e.y ? (e.moved && (e.moved = !1, e.options.onScrollEnd && e.options.onScrollEnd.call(e)), e.hScrollbar && e.options.hideScrollbar && ("webkit" == i && (e.hScrollbarWrapper.style[i + "TransitionDelay"] = "300ms"), e.hScrollbarWrapper.style.opacity = "0"), e.vScrollbar && e.options.hideScrollbar && ("webkit" == i && (e.vScrollbarWrapper.style[i + "TransitionDelay"] = "300ms"), e.vScrollbarWrapper.style.opacity = "0"), void 0) : (e.scrollTo(n, o, t || 0), void 0)
		},
		_wheel: function(t) {
			var e, i, n, o, r, s = this;
			if ("wheelDeltaX" in t) e = t.wheelDeltaX / 12, i = t.wheelDeltaY / 12;
			else if ("wheelDelta" in t) e = i = t.wheelDelta / 12;
			else {
				if (!("detail" in t)) return;
				e = i = 3 * -t.detail
			}
			return "zoom" == s.options.wheelAction ? (r = s.scale * Math.pow(2, 1 / 3 * (i ? i / Math.abs(i) : 0)), s.options.zoomMin > r && (r = s.options.zoomMin), r > s.options.zoomMax && (r = s.options.zoomMax), r != s.scale && (!s.wheelZoomCount && s.options.onZoomStart && s.options.onZoomStart.call(s, t), s.wheelZoomCount++, s.zoom(t.pageX, t.pageY, r, 400), setTimeout(function() {
				s.wheelZoomCount--, !s.wheelZoomCount && s.options.onZoomEnd && s.options.onZoomEnd.call(s, t)
			}, 400)), void 0) : (n = s.x + e, o = s.y + i, n > 0 ? n = 0 : s.maxScrollX > n && (n = s.maxScrollX), o > s.minScrollY ? o = s.minScrollY : s.maxScrollY > o && (o = s.maxScrollY), s.scrollTo(n, o, 0), void 0)
		},
		_mouseout: function(t) {
			var e = t.relatedTarget;
			if (!e) return this._end(t), void 0;
			for (; e = e.parentNode;) if (e == this.wrapper) return;
			this._end(t)
		},
		_transitionEnd: function(t) {
			var e = this;
			t.target == e.scroller && (e._unbind("webkitTransitionEnd"), e._startAni())
		},
		_startAni: function() {
			var e, i, n, o = this,
				r = o.x,
				s = o.y,
				l = Date.now();
			if (!o.animating) {
				if (!o.steps.length) return o._resetPos(400), void 0;
				if (e = o.steps.shift(), e.x == r && e.y == s && (e.time = 0), o.animating = !0, o.moved = !0, o.options.useTransition) return o._transitionTime(e.time), o._pos(e.x, e.y), o.animating = !1, e.time ? o._bind("webkitTransitionEnd") : o._resetPos(0), void 0;
				n = function() {
					var a, b, d = Date.now();
					return d >= l + e.time ? (o._pos(e.x, e.y), o.animating = !1, o.options.onAnimationEnd && o.options.onAnimationEnd.call(o), o._startAni(), void 0) : (d = (d - l) / e.time - 1, i = t.sqrt(1 - d * d), a = (e.x - r) * i + r, b = (e.y - s) * i + s, o._pos(a, b), o.animating && (o.aniTime = c(n)), void 0)
				}, n()
			}
		},
		_transitionTime: function(t) {
			t += "ms", this.scroller.style[i + "TransitionDuration"] = t, this.hScrollbar && (this.hScrollbarIndicator.style[i + "TransitionDuration"] = t), this.vScrollbar && (this.vScrollbarIndicator.style[i + "TransitionDuration"] = t)
		},
		_momentum: function(i, n, o, r, s) {
			var l = 6e-4,
				a = t.abs(i) / n,
				b = a * a / (2 * l),
				d = 0,
				c = 0;
			return i > 0 && b > o ? (c = s / (6 / (b / a * l)), o += c, a = a * o / b, b = o) : 0 > i && b > r && (c = s / (6 / (b / a * l)), r += c, a = a * r / b, b = r), b *= 0 > i ? -1 : 1, d = a / l, {
				dist: b,
				time: e(d)
			}
		},
		_offset: function(t) {
			for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
			return t != this.wrapper && (e *= this.scale, i *= this.scale), {
				left: e,
				top: i
			}
		},
		_snap: function(i, n) {
			var o, r, s, l, a, b, d = this;
			for (s = d.pagesX.length - 1, o = 0, r = d.pagesX.length; r > o; o++) if (i >= d.pagesX[o]) {
					s = o;
					break
				}
			for (s == d.currPageX && s > 0 && 0 > d.dirX && s--, i = d.pagesX[s], a = t.abs(i - d.pagesX[d.currPageX]), a = a ? 500 * (t.abs(d.x - i) / a) : 0, d.currPageX = s, s = d.pagesY.length - 1, o = 0; s > o; o++) if (n >= d.pagesY[o]) {
					s = o;
					break
				}
			return s == d.currPageY && s > 0 && 0 > d.dirY && s--, n = d.pagesY[s], b = t.abs(n - d.pagesY[d.currPageY]), b = b ? 500 * (t.abs(d.y - n) / b) : 0, d.currPageY = s, l = e(t.max(a, b)) || 200, {
				x: i,
				y: n,
				time: l
			}
		},
		_bind: function(t, e, i) {
			(e || this.scroller).addEventListener(t, this, !! i)
		},
		_unbind: function(t, e, i) {
			(e || this.scroller).removeEventListener(t, this, !! i)
		},
		destroy: function() {
			var t = this;
			t.scroller.style[i + "Transform"] = "", t.hScrollbar = !1, t.vScrollbar = !1, t._scrollbar("h"), t._scrollbar("v"), t._unbind(u, window), t._unbind(p), t._unbind(m), t._unbind(g), t._unbind(v), t.options.hasTouch || (t._unbind("mouseout", t.wrapper), t._unbind(f)), t.options.useTransition && t._unbind("webkitTransitionEnd"), t.options.checkDOMChanges && clearInterval(t.checkDOMTime), t.options.onDestroy && t.options.onDestroy.call(t)
		},
		refresh: function() {
			var t, n, o, r, s = this,
				l = 0,
				a = 0;
			if (s.scale < s.options.zoomMin && (s.scale = s.options.zoomMin), s.wrapperW = s.wrapper.clientWidth || 1, s.wrapperH = s.wrapper.clientHeight || 1, s.minScrollY = -s.options.topOffset || 0, s.scrollerW = e(s.scroller.offsetWidth * s.scale), s.scrollerH = e((s.scroller.offsetHeight + s.minScrollY) * s.scale), s.maxScrollX = s.wrapperW - s.scrollerW, s.maxScrollY = s.wrapperH - s.scrollerH + s.minScrollY, s.dirX = 0, s.dirY = 0, s.options.onRefresh && s.options.onRefresh.call(s), s.hScroll = s.options.hScroll && 0 > s.maxScrollX, s.vScroll = s.options.vScroll && (!s.options.bounceLock && !s.hScroll || s.scrollerH > s.wrapperH), s.hScrollbar = s.hScroll && s.options.hScrollbar, s.vScrollbar = s.vScroll && s.options.vScrollbar && s.scrollerH > s.wrapperH, t = s._offset(s.wrapper), s.wrapperOffsetLeft = -t.left, s.wrapperOffsetTop = -t.top, "string" == typeof s.options.snap) for (s.pagesX = [], s.pagesY = [], r = s.scroller.querySelectorAll(s.options.snap), n = 0, o = r.length; o > n; n++) l = s._offset(r[n]), l.left += s.wrapperOffsetLeft, l.top += s.wrapperOffsetTop, s.pagesX[n] = l.left < s.maxScrollX ? s.maxScrollX : l.left * s.scale, s.pagesY[n] = l.top < s.maxScrollY ? s.maxScrollY : l.top * s.scale;
			else if (s.options.snap) {
				for (s.pagesX = []; l >= s.maxScrollX;) s.pagesX[a] = l, l -= s.wrapperW, a++;
				for (s.maxScrollX % s.wrapperW && (s.pagesX[s.pagesX.length] = s.maxScrollX - s.pagesX[s.pagesX.length - 1] + s.pagesX[s.pagesX.length - 1]), l = 0, a = 0, s.pagesY = []; l >= s.maxScrollY;) s.pagesY[a] = l, l -= s.wrapperH, a++;
				s.maxScrollY % s.wrapperH && (s.pagesY[s.pagesY.length] = s.maxScrollY - s.pagesY[s.pagesY.length - 1] + s.pagesY[s.pagesY.length - 1])
			}
			s._scrollbar("h"), s._scrollbar("v"), s.zoomed || (s.scroller.style[i + "TransitionDuration"] = "0", s._resetPos(200))
		},
		scrollTo: function(t, e, i, n) {
			var o, r, s = this,
				l = t;
			for (s.stop(), l.length || (l = [{
					x: t,
					y: e,
					time: i,
					relative: n
				}
			]), o = 0, r = l.length; r > o; o++) l[o].relative && (l[o].x = s.x - l[o].x, l[o].y = s.y - l[o].y), s.steps.push({
					x: l[o].x,
					y: l[o].y,
					time: l[o].time || 0
				});
			s._startAni()
		},
		scrollToElement: function(e, i) {
			var n, o = this;
			e = e.nodeType ? e : o.scroller.querySelector(e), e && (n = o._offset(e), n.left += o.wrapperOffsetLeft, n.top += o.wrapperOffsetTop, n.left = n.left > 0 ? 0 : n.left < o.maxScrollX ? o.maxScrollX : n.left, n.top = n.top > o.minScrollY ? o.minScrollY : n.top < o.maxScrollY ? o.maxScrollY : n.top, i = void 0 === i ? t.max(2 * t.abs(n.left), 2 * t.abs(n.top)) : i, o.scrollTo(n.left, n.top, i))
		},
		scrollToPage: function(t, e, i) {
			var n, o, r = this;
			i = void 0 === i ? 400 : i, r.options.onScrollStart && r.options.onScrollStart.call(r), r.options.snap ? (t = "next" == t ? r.currPageX + 1 : "prev" == t ? r.currPageX - 1 : t, e = "next" == e ? r.currPageY + 1 : "prev" == e ? r.currPageY - 1 : e, t = 0 > t ? 0 : t > r.pagesX.length - 1 ? r.pagesX.length - 1 : t, e = 0 > e ? 0 : e > r.pagesY.length - 1 ? r.pagesY.length - 1 : e, r.currPageX = t, r.currPageY = e, n = r.pagesX[t], o = r.pagesY[e]) : (n = -r.wrapperW * t, o = -r.wrapperH * e, r.maxScrollX > n && (n = r.maxScrollX), r.maxScrollY > o && (o = r.maxScrollY)), r.scrollTo(n, o, i)
		},
		disable: function() {
			this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(m), this._unbind(g), this._unbind(v)
		},
		enable: function() {
			this.enabled = !0
		},
		stop: function() {
			this.options.useTransition ? this._unbind("webkitTransitionEnd") : h(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
		},
		zoom: function(t, e, n, o) {
			var r = this,
				s = n / r.scale;
			r.options.useTransform && (r.zoomed = !0, o = void 0 === o ? 200 : o, t = t - r.wrapperOffsetLeft - r.x, e = e - r.wrapperOffsetTop - r.y, r.x = t - t * s + r.x, r.y = e - e * s + r.y, r.scale = n, r.refresh(), r.x = r.x > 0 ? 0 : r.x < r.maxScrollX ? r.maxScrollX : r.x, r.y = r.y > r.minScrollY ? r.minScrollY : r.y < r.maxScrollY ? r.maxScrollY : r.y, r.scroller.style[i + "TransitionDuration"] = o + "ms", r.scroller.style[i + "Transform"] = y + r.x + "px," + r.y + "px" + w + " scale(" + n + ")", r.zoomed = !1)
		},
		isReady: function() {
			return !this.moved && !this.zoomed && !this.animating
		}
	}, "undefined" != typeof exports ? exports.iScroll = E : window.iScroll = E
}(), bb.menuBar = {
	height: 100,
	menuOpen: !1,
	menu: !1,
	apply: function(t, e) {
		bb.device.isPlayBook || bb.device.isBB10 ? (bb.menuBar.createSwipeMenu(t, e), t.parentNode.removeChild(t), window.blackberry && (bb.device.isPlayBook && blackberry.app.event ? blackberry.app.event.onSwipeDown(bb.menuBar.showMenuBar) : bb.device.isBB10 && blackberry.app && blackberry.event.addEventListener("swipedown", bb.menuBar.showMenuBar))) : window.blackberry && blackberry.ui.menu ? (bb.menuBar.createBlackberryMenu(t), t.parentNode.removeChild(t)) : console.log("Unable to create Blackberry/onSwipeDown menu.")
	},
	createBlackberryMenu: function(t) {
		var e, i, n, o;
		e = t.getElementsByTagName("div");
		for (var r = 0; e.length > r; r++) o = e[r], "menu-item" === o.getAttribute("data-bb-type") ? (n = o.innerHTML, n ? (i = new blackberry.ui.menu.MenuItem(!1, r, n, o.onclick), blackberry.ui.menu.addMenuItem(i), o.hasAttribute("data-bb-selected") && "true" === o.getAttribute("data-bb-selected") && blackberry.ui.menu.setDefaultMenuItem(i)) : console.log("can't add menu item without data-bb-caption")) : "menu-separator" === o.getAttribute("data-bb-type") ? (i = new blackberry.ui.menu.MenuItem(!0, r), blackberry.ui.menu.addMenuItem(i)) : console.log("invalid menu item type")
	},
	createSwipeMenu: function(t, e) {
		if (bb.device.isBB10) {
			var i, n, o, r, s, l, a, b, d, c = document.createElement("div"),
				h = "1280x768-1280x720",
				u = [];
			if (bb.device.is1024x600 ? (h = "1024x600", bb.menuBar.height = 100) : bb.device.is1280x768 || bb.device.is1280x720 ? (h = "1280x768-1280x720", bb.menuBar.height = 140) : bb.device.is720x720 && (h = "720x720", bb.menuBar.height = 110), c.setAttribute("class", "bb-bb10-menu-bar-" + h + " bb-bb10-menu-bar-dark"), p = t.querySelectorAll("[data-bb-type=menu-item]"), p.length > 0) for (i = 0; p.length > i; i++) o = p[i], n = o.hasAttribute("data-bb-type") ? o.getAttribute("data-bb-type").toLowerCase() : void 0, "menu-item" == n ? (l = o.innerHTML, s = o.getAttribute("data-bb-img"), l && s && 5 > u.length ? (d = document.createElement("div"), u.push(d), d.setAttribute("class", "bb-bb10-menu-bar-item-" + h), o.innerHTML = "", r = document.createElement("img"), r.setAttribute("src", s), d.appendChild(r), a = document.createElement("div"), a.setAttribute("class", "bb-bb10-menu-bar-item-caption-" + h), a.innerHTML = l, d.appendChild(a), d.onclick = o.onclick, c.appendChild(d)) : u.length >= 5 ? console.log("too many menu items.") : console.log("missing menu item caption or image.")) : console.log("invalid menu item type for bb10");
			if (u.length > 0) for (b = Math.floor(100 / u.length), i = 0; u.length > i; i++) o = u[i], i == u.length - 1 ? (o.style.width = b - 1 + "%", o.style.float = "right") : o.style.width = b + "%";
			else c.style.display = "none", bb.menuBar.menu = null;
			c.style["-webkit-transform"] = "translate(0,0)", c.addEventListener("click", bb.menuBar.onMenuBarClicked, !1), document.body.appendChild(c), bb.menuBar.menu = c
		} else {
			var p, m, g, o, r, v, a, f, y = document.createElement("div");
			if (y.setAttribute("class", "pb-menu-bar"), p = t.getElementsByTagName("div"), p.length > 0) for (m = document.createElement("ul"), y.appendChild(m), g = 0; p.length > g; g++) o = p[g], "menu-item" === o.getAttribute("data-bb-type") ? (v = o.innerHTML, iconPath = o.getAttribute("data-bb-img"), v && iconPath && (f = document.createElement("li"), o.innerHTML = "", r = new Image, r.src = iconPath, f.appendChild(r), a = document.createElement("div"), a.setAttribute("class", "pb-menu-bar-caption"), a.innerText = v, f.appendChild(a), f.onclick = o.onclick, m.appendChild(f))) : "menu-separator" === o.getAttribute("data-bb-type") ? (m = document.createElement("ul"), y.appendChild(m)) : console.log("invalid menu item type");
			y.style["-webkit-transform"] = "translate(0,0)", y.addEventListener("click", bb.menuBar.onMenuBarClicked, !1), document.body.appendChild(y), bb.menuBar.menu = y
		}
		bb.screen.overlay || (bb.screen.overlay = document.createElement("div"), bb.screen.overlay.setAttribute("class", "bb-bb10-context-menu-overlay")), e.appendChild(bb.screen.overlay), bb.menuBar.menu.overlay = bb.screen.overlay
	},
	showMenuBar: function() {
		bb.menuBar.menuOpen || (bb.menuBar.menu.overlay.style.display = "inline", bb.device.isPlayBook ? blackberry.app.event.onSwipeDown(bb.menuBar.hideMenuBar) : bb.device.isBB10 && (blackberry.event.removeEventListener("swipedown", bb.menuBar.showMenuBar), blackberry.event.addEventListener("swipedown", bb.menuBar.hideMenuBar)), bb.menuBar.menu.style["-webkit-transition"] = "all 0.5s ease-in-out", bb.menuBar.menu.style["-webkit-transform"] = "translate(0, " + (bb.menuBar.height + 3) + "px)", bb.menuBar.menuOpen = !0, bb.menuBar.menu.overlay.addEventListener("touchstart", bb.menuBar.overlayTouchHandler, !1))
	},
	hideMenuBar: function() {
		bb.menuBar.menuOpen && (bb.menuBar.menu.overlay.style.display = "none", bb.device.isPlayBook ? blackberry.app.event.onSwipeDown(bb.menuBar.showMenuBar) : bb.device.isBB10 && (blackberry.event.removeEventListener("swipedown", bb.menuBar.hideMenuBar), blackberry.event.addEventListener("swipedown", bb.menuBar.showMenuBar)), bb.menuBar.menu.style["-webkit-transition"] = "all 0.5s ease-in-out", bb.menuBar.menu.style["-webkit-transform"] = "translate(0, -" + (bb.menuBar.height + 3) + "px)", bb.menuBar.menuOpen = !1, bb.menuBar.menu.overlay.removeEventListener("touchstart", bb.menuBar.overlayTouchHandler, !1))
	},
	overlayTouchHandler: function(t) {
		t.preventDefault(), t.stopPropagation(), bb.menuBar.hideMenuBar()
	},
	onMenuBarClicked: function() {
		bb.menuBar.hideMenuBar()
	},
	clearMenu: function() {
		window.blackberry && (bb.menuBar.menu && (bb.device.isPlayBook || bb.device.isBB10) ? (bb.device.isPlayBook && blackberry.app.event ? blackberry.app.event.onSwipeDown("") : bb.device.isBB10 && blackberry.app && (blackberry.event.removeEventListener("swipedown", bb.menuBar.showMenuBar), blackberry.event.removeEventListener("swipedown", bb.menuBar.hideMenuBar)), bb.menuBar.menu.parentNode.removeChild(bb.menuBar.menu), bb.menuBar.menu = !1, bb.menuBar.menuOpen = !1) : blackberry.ui && blackberry.ui.menu && blackberry.ui.menu.clearMenuItems())
	}
}, _bb_progress = {
	NORMAL: 0,
	PAUSED: 1,
	ERROR: 2,
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.progress.style(t[e], !0)
	},
	style: function(t, e) {
		var i, n, o;
		return bb.device.isBB10 ? (i = bb.screen.controlColor, n = bb.options.highlightColor, o = bb.options.shades.darkHighlight) : (i = "light", n = bb.device.isPlayBook ? bb.options.highlightColor : "#92B43B", o = "#8FB03B"), outerElement = document.createElement("div"), outerElement.progress = t, outerElement.state = bb.progress.NORMAL, t.parentNode && t.parentNode.insertBefore(outerElement, t), t.style.display = "none", outerElement.appendChild(t), outerElement.maxValue = t.hasAttribute("max") ? parseInt(t.getAttribute("max")) : 0, outerElement.value = t.hasAttribute("value") ? parseInt(t.getAttribute("value")) : 0, outerElement.className = "bb-progress", outerElement.outer = document.createElement("div"), outerElement.outer.setAttribute("class", "outer bb-progress-outer-" + i + " bb-progress-outer-idle-background-" + i), outerElement.appendChild(outerElement.outer), outerElement.fill = document.createElement("div"), outerElement.fill.normal = bb.device.isBB10 ? "bb-progress-fill bb10Highlight" : "bb-progress-fill bbProgressHighlight", outerElement.fill.setAttribute("class", outerElement.fill.normal), outerElement.outer.appendChild(outerElement.fill), outerElement.inner = document.createElement("div"), outerElement.inner.className = "inner", outerElement.outer.appendChild(outerElement.inner), t.outerElement = outerElement, t.setValue = function(t) {
			var e, r = 0;
			t && 0 > t || t && t > parseInt(this.outerElement.maxValue) || (t ? (this.outerElement.value = t, this.value = t) : 0 == t ? (this.outerElement.value = 0, this.value = 0) : t = parseInt(this.outerElement.value), t == this.outerElement.maxValue ? (this.outerElement.fill.style.background = "-webkit-gradient(linear, center top, center bottom, from(" + o + "), to(" + n + "))", r = 1) : 0 == t ? this.outerElement.outer.setAttribute("class", "outer bb-progress-outer-" + i + " bb-progress-outer-idle-background-" + i) : (this.outerElement.state == bb.progress.PAUSED ? this.outerElement.fill.style.background = "-webkit-gradient(linear, center top, center bottom, from(#EDC842), to(#BA991E))" : this.outerElement.state == bb.progress.ERROR ? this.outerElement.fill.style.background = "-webkit-gradient(linear, center top, center bottom, from( #E04242), to(#D91111))" : (this.outerElement.outer.setAttribute("class", "outer bb-progress-outer-" + i), this.outerElement.fill.setAttribute("class", this.outerElement.fill.normal), this.outerElement.fill.style.background = ""), r = this.outerElement.value / parseInt(this.outerElement.maxValue)), e = Math.floor(parseInt(window.getComputedStyle(this.outerElement.outer).width) * r), this.outerElement.fill.style.width = e + "px")
		}, t.setValue = t.setValue.bind(t), t.setState = function(t) {
			this.outerElement.state = t, this.setValue()
		}, t.setState = t.setState.bind(t), t.show = function() {
			this.outerElement.style.display = "block", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.outerElement.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.outerElement.parentNode.removeChild(this.outerElement), bb.refresh()
		}, t.remove = t.remove.bind(t), t.setMax = function(t) {
			!t || 0 > t || t == this.max || (this.max = t, this.outerElement.maxValue = t)
		}, t.setMax = t.setMax.bind(t), e ? (t.onbbuidomready = function() {
			this.setValue(), document.removeEventListener("bbuidomready", this.onbbuidomready, !1)
		}, t.onbbuidomready = t.onbbuidomready.bind(t), document.addEventListener("bbuidomready", t.onbbuidomready, !1)) : window.setTimeout(t.setValue, 0), outerElement.doOrientationChange = function() {
			window.setTimeout(this.progress.setValue, 0)
		}, outerElement.doOrientationChange = outerElement.doOrientationChange.bind(outerElement), window.addEventListener("resize", outerElement.doOrientationChange, !1), bb.windowListeners.push({
			name: "resize",
			eventHandler: outerElement.doOrientationChange
		}), outerElement
	}
}, bb.screen = {
	scriptCounter: 0,
	totalScripts: 0,
	controlColor: "light",
	listColor: "light",
	overlay: null,
	tabOverlay: null,
	contextMenu: null,
	currentScreen: null,
	focusedInput: null,
	animating: !1,
	apply: function(t) {
		var e, i;
		bb.screen.contextMenu = null, bb.device.isBB10 && bb.device.isPlayBook ? e = "bb-bb10-1024x600-screen" : bb.device.isBB10 && (bb.device.is1280x768 || bb.device.is1280x720) ? e = "bb-bb10-1280x768-1280x720-screen" : bb.device.isBB10 && bb.device.is720x720 ? e = "bb-bb10-720x720-screen" : bb.device.isHiRes && (e = "bb-hires-screen");
		for (var n = 0; t.length > n; n++) {
			i = t[n], bb.screen.currentScreen = i, i.setAttribute("class", e);
			var o = i.querySelectorAll("[data-bb-type=menu]");
			if (o.length > 0 && (o = o[0], bb.menuBar.apply(o, i)), bb.device.isBB10) {
				var r, s, l, a = i.querySelectorAll("[data-bb-type=title]"),
					b = i.querySelectorAll("[data-bb-type=action-bar]"),
					d = i.querySelectorAll("[data-bb-type=context-menu]"),
					c = [],
					h = null,
					u = bb.screen.getActionBarHeight(),
					p = bb.screen.getTitleBarHeight();
				for (a.length > 0 ? (a = a[0], i.titleBar = a) : a = null, b.length > 0 ? (b = b[0], i.actionBar = b) : b = null, r = document.createElement("div"), i.appendChild(r), i.hasAttribute("data-bb-scroll-effect") && "off" == i.getAttribute("data-bb-scroll-effect").toLowerCase() || (i.bbUIscrollWrapper = r), s = document.createElement("div"), r.appendChild(s), l = 0; i.childNodes.length - 1 > l; l++) h = i.childNodes[l], h != b && h != o && h != a && c.push(h);
				for (l = 0; c.length > l; l++) s.appendChild(c[l]);
				if (i.actionBarHeight = u, i.titleBarHeight = p, i.outerScrollArea = r, r.addEventListener("scroll", function() {
					evt = document.createEvent("Events"), evt.initEvent("bbuiscrolling", !0, !0), document.dispatchEvent(evt)
				}, !1), i.getAttribute("data-bb-indicator")) {
					var m = document.createElement("div"),
						g = document.createElement("div");
					r.scrollArea = s, r.overlay = m, m.style.position = "absolute", m.style.bottom = "0px", m.style.top = "0px", m.style.left = "0px", m.style.right = "0px", m.touchstart = function(t) {
						t.preventDefault(), t.stopPropagation()
					}, m.touchend = function(t) {
						t.preventDefault(), t.stopPropagation()
					}, m.click = function(t) {
						t.preventDefault(), t.stopPropagation()
					}, r.appendChild(m), s.style.display = "none", g.setAttribute("data-bb-type", "activity-indicator"), g.setAttribute("data-bb-size", "large"), g.style.margin = bb.device.is720x720 ? "30% auto 0px auto" : "landscape" == bb.getOrientation().toLowerCase() ? "20% auto 0px auto" : "60% auto 0px auto", m.appendChild(g), r.bbuidomprocessed = function() {
						this.scrollArea.style.display = "", this.removeChild(this.overlay), document.removeEventListener("bbuidomprocessed", this.bbuidomprocessed, !1), bb.device.isPlayBook && bb.scroller && bb.scroller.refresh()
					}, r.bbuidomprocessed = r.bbuidomprocessed.bind(r), document.addEventListener("bbuidomprocessed", r.bbuidomprocessed, !1)
				}
				a && b ? (r.style.overflow = "auto", r.style.position = "absolute", r.style.bottom = u + "px", r.style.top = p + "px", r.style.left = "0px", r.style.right = "0px") : a ? (r.style.overflow = "auto", r.style.position = "absolute", r.style.bottom = "0px", r.style.top = p + "px", r.style.left = "0px", r.style.right = "0px") : b ? (r.style.overflow = "auto", r.style.position = "absolute", r.style.bottom = u + "px", r.style.top = "0px", r.style.left = "0px", r.style.right = "0px") : (r.setAttribute("style", "overflow:auto;bottom:0px;position:absolute;top:0px;left:0px;right:0px;"), r.style.overflow = "auto", r.style.position = "absolute", r.style.bottom = "0px", r.style.top = "0px", r.style.left = "0px", r.style.right = "0px"), a && bb.titleBar.apply(a), b && bb.actionBar.apply(b, i), d.length > 0 ? bb.screen.processContext(d[0], i) : d = null
			} else if (bb.device.isPlayBook) {
				var r, s, l, a = i.querySelectorAll("[data-bb-type=title]"),
					c = [],
					h = null,
					b = i.querySelectorAll("[data-bb-type=action-bar]"),
					d = i.querySelectorAll("[data-bb-type=context-menu]");
				for (l = 0; b.length > l; l++) b[l].style.display = "none";
				for (l = 0; d.length > l; l++) d[l].style.display = "none";
				for (a = a.length > 0 ? a[0] : null, r = document.createElement("div"), i.appendChild(r), i.hasAttribute("data-bb-scroll-effect") && "off" == i.getAttribute("data-bb-scroll-effect").toLowerCase() || (i.bbUIscrollWrapper = r), s = document.createElement("div"), r.appendChild(s), l = 0; i.childNodes.length - 1 > l; l++) h = i.childNodes[l], h != a && c.push(h);
				for (l = 0; c.length > l; l++) s.appendChild(c[l]);
				a ? (r.style.overflow = "auto", r.style.bottom = "0px", r.style.position = "absolute", r.style.top = "55px", r.style.left = "0px", r.style.right = "0px", bb.titleBar.apply(a)) : (r.setAttribute("style", "overflow:auto;bottom:0px;position:absolute;top:0px;left:0px;right:0px;"), r.style.overflow = "auto", r.style.bottom = "0px", r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.right = "0px")
			} else {
				var a = i.querySelectorAll("[data-bb-type=title]"),
					b = i.querySelectorAll("[data-bb-type=action-bar]"),
					d = i.querySelectorAll("[data-bb-type=context-menu]");
				for (l = 0; b.length > l; l++) b[l].style.display = "none";
				for (l = 0; d.length > l; l++) d[l].style.display = "none";
				a.length > 0 && (a = a[0], bb.titleBar.apply(a))
			}
			i.refresh = function() {
				bb.scroller && bb.scroller.refresh()
			}, i.refresh = i.refresh.bind(i), i.scrollTo = function(t, e) {
				bb.scroller ? bb.scroller.scrollTo(t, e) : bb.device.isBB10 && (this.bbUIscrollWrapper.scrollTop = t)
			}, i.scrollTo = i.scrollTo.bind(i), i.scrollToElement = function(t) {
				if (bb.scroller) bb.scroller.scrollToElement(t);
				else if (bb.device.isBB10) {
					if (!t) return;
					var e = 0,
						i = t;
					if (i.offsetParent) do e += i.offsetTop;
					while (i = i.offsetParent);
					bb.screen.currentScreen.titleBar && (e -= bb.screen.currentScreen.titleBarHeight), bb.screen.currentScreen.actionBar && (e -= bb.screen.getActionBarHeight()), this.scrollTo(e)
				}
			}, i.scrollToElement = i.scrollToElement.bind(i)
		}
	},
	processContext: function(t, e) {
		e.appendChild(t), t.menu = bb.contextMenu.create(e), t.appendChild(t.menu), bb.screen.contextMenu = t.menu;
		var i, n = t.querySelectorAll("[data-bb-type=action]");
		for (i = 0; n.length > i; i++) t.menu.add(n[i]);
		t.menu.centerMenuItems()
	},
	fadeIn: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n["-webkit-animation-name"] = "bbUI-fade-in", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	fadeOut: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n["-webkit-animation-name"] = "bbUI-fade-out", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideLeft: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.width = bb.innerWidth() + "px", n["-webkit-animation-name"] = "bbUI-slide-left", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideOutLeft: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.width = bb.innerWidth() + "px", n["-webkit-animation-name"] = "bbUI-slide-out-left", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideRight: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.width = bb.innerWidth() + "px", n["-webkit-animation-name"] = "bbUI-slide-right", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideOutRight: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.width = bb.innerWidth() + "px", n["-webkit-animation-name"] = "bbUI-slide-out-right", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideUp: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.height = bb.innerHeight() + "px", n["-webkit-animation-name"] = "bbUI-slide-up", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideOutUp: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.height = bb.innerHeight() + "px", n["-webkit-animation-name"] = "bbUI-slide-out-up", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideDown: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.height = bb.innerHeight() + "px", n["-webkit-animation-name"] = "bbUI-slide-down", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	slideOutDown: function(t) {
		var e = .3,
			i = "ease-out",
			n = t.style;
		n.height = bb.innerHeight() + "px", n["-webkit-animation-name"] = "bbUI-slide-out-down", n["-webkit-animation-duration"] = e + "s", n["-webkit-animation-timing-function"] = i, n["-webkit-transform"] = "translate3d(0,0,0)", n["-webkit-backface-visibility"] = "hidden"
	},
	reAdjustHeight: function() {
		bb.device.isBB5 ? document.body.style.height = screen.height - 27 + "px" : bb.device.isBB6 ? document.body.style.height = screen.height - 17 + "px" : bb.device.isBB7 && 0 > navigator.appVersion.indexOf("Ripple") && (document.body.style.height = screen.height + "px")
	},
	getActionBarHeight: function() {
		return bb.device.is1024x600 ? "portrait" == bb.getOrientation().toLowerCase() ? 73 : 73 : bb.device.is1280x768 || bb.device.is1280x720 ? "portrait" == bb.getOrientation().toLowerCase() ? 139 : 99 : bb.device.is720x720 ? 109 : "portrait" == bb.getOrientation().toLowerCase() ? 139 : 99
	},
	getTitleBarHeight: function() {
		return bb.device.is1024x600 ? 65 : bb.device.is1280x768 || bb.device.is1280x720 ? 111 : bb.device.is720x720 ? 95 : 111
	}
}, bb.tabOverflow = {
	create: function(t) {
		var e, i = document.createElement("div");
		return i.screen = t, i.itemClicked = !1, i.visible = !1, i.actions = [], i.tabOverflowState = {
			display: void 0,
			img: void 0,
			style: void 0,
			caption: void 0
		}, i.res = bb.device.is1024x600 ? "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? "1280x768-1280x720" : "1280x768-1280x720", i.setAttribute("class", "bb-bb10-tab-overflow-menu bb-bb10-tab-overflow-menu-dark"), t.parentNode.appendChild(i), i.style["z-index"] = "-100", i.style.display = "none", i.style.width = i.width + "px", bb.screen.tabOverlay || (e = document.createElement("div"), e.menu = i, bb.screen.tabOverlay = e, e.setAttribute("class", "bb-bb10-tab-overflow-menu-overlay "), t.appendChild(e), e.ontouchstart = function(t) {
			t.preventDefault(), t.stopPropagation(), this.menu.hide()
		}), i.overlay = bb.screen.tabOverlay, i.doEndTransition = function() {
			this.visible ? this.style["z-index"] = "" : (this.style.display = "none", this.style.width = "0px", this.screen.removeEventListener("webkitTransitionEnd", i.doEndTransition), this.screen.style["-webkit-transition"] = "", this.screen.style["-webkit-transform"] = "", this.screen.style["-webkit-backface-visibility"] = "")
		}, i.doEndTransition = i.doEndTransition.bind(i), i.show = function() {
			this.itemClicked = !1, this.visible = !0;
			var t = this.actionBar.tabOverflowBtn;
			this.tabOverflowState.display = t.tabHighlight.style.display, this.tabOverflowState.img = t.icon.src, this.tabOverflowState.caption = t.display.innerHTML, this.tabOverflowState.style = t.icon.getAttribute("class"), this.screen.addEventListener("webkitTransitionEnd", i.doEndTransition), this.setDimensions(), t.reset()
		}, i.show = i.show.bind(i), i.setDimensions = function() {
			this.style.display = "", this.style.width = bb.tabOverflow.getWidth() + "px", this.screen.parentNode.style.position = "absolute", this.screen.parentNode.style.left = "0px", this.screen.parentNode.style.top = "0px", this.screen.parentNode.style.bottom = "0px", this.screen.parentNode.style.right = "0px", this.screen.parentNode.style.width = "100%", this.screen.parentNode.style.overflow = "hidden", this.overlay.style.display = "block", this.screen.style["-webkit-transition"] = "0.2s ease-out", this.screen.style["-webkit-transform"] = "translate3d(" + bb.tabOverflow.getWidth() + "px,0px,0px)", this.screen.style["-webkit-backface-visibility"] = "hidden"
		}, i.setDimensions = i.setDimensions.bind(i), i.hide = function() {
			if (this.visible = !1, this.style["z-index"] = "-100", this.screen.style["-webkit-transform"] = "translate3d(0px,0px,0px)", this.overlay.style.display = "none", !this.itemClicked) {
				var t = this.actionBar.tabOverflowBtn;
				t.icon.setAttribute("src", this.tabOverflowState.img), t.icon.setAttribute("class", this.tabOverflowState.style), t.tabHighlight.style.display = this.tabOverflowState.display, t.display.innerHTML = this.tabOverflowState.caption
			}
		}, i.hide = i.hide.bind(i), i.onclick = function() {
			this.hide()
		}, i.centerMenuItems = function() {
			var t, e = bb.innerHeight(),
				i = 111;
			bb.device.is1024x600 ? i = 53 : (bb.device.is1280x768 || bb.device.is1280x720) && (i = 111), t = e - Math.floor(e / 2) - Math.floor(this.actions.length * i / 2) - i, 0 > t && (t = 0), this.actions[0].style["margin-top"] = t + "px"
		}, i.centerMenuItems = i.centerMenuItems.bind(i), i.initSelected = function() {
			var t, e;
			for (t = 0; this.actions.length > t; t++) if (e = this.actions[t], e.initialSelected) {
					e.setOverflowTab(!0);
					break
				}
		}, i.initSelected = i.initSelected.bind(i), i.orientationChanged = function() {
			this.centerMenuItems(), this.visible && this.setDimensions()
		}, i.orientationChanged = i.orientationChanged.bind(i), window.addEventListener("orientationchange", i.orientationChanged, !1), bb.windowListeners.push({
			name: "orientationchange",
			eventHandler: i.orientationChanged
		}), i.add = function(t) {
			var e, i, n, o, r = t.innerHTML,
				s = t.getAttribute("data-bb-accent-text"),
				l = document.createElement("div"),
				a = "bb-bb10-tab-overflow-menu-item-inner-" + this.res,
				b = document.createElement("img");
			e = "bb-bb10-tab-overflow-menu-item-" + this.res + " bb-bb10-tab-overflow-menu-item-" + this.res + "-dark", this.appendChild(t), t.hasAttribute("data-bb-visible") && "false" == t.getAttribute("data-bb-visible").toLowerCase() ? (t.visible = !1, t.style.display = "none") : (t.visible = !0, this.actions.push(t)), 1 == this.actions.length && (e = e + " bb-bb10-tab-overflow-menu-item-first-" + this.res + "-dark"), t.normal = e, t.accentText = null, t.menu = this, t.caption = r, t.setAttribute("class", t.normal), t.innerHTML = "", t.visibleTab || (t.visibleTab = t.actionBar.tabOverflowBtn), i = document.createElement("table"), n = document.createElement("tr"), i.appendChild(n), t.appendChild(i), o = document.createElement("td"), b.setAttribute("src", t.getAttribute("data-bb-img")), b.setAttribute("class", "bb-bb10-tab-overflow-menu-item-image-" + this.res), t.img = b, o.appendChild(b), n.appendChild(o), o = document.createElement("td"), l.innerHTML = r, t.display = l, o.appendChild(l), s ? (t.accentText = document.createElement("div"), t.accentText.innerHTML = s, t.accentText.setAttribute("class", "tab-accent-text"), o.appendChild(t.accentText), a = a + " bb-bb10-tab-overflow-menu-item-double-" + this.res) : a = a + " bb-bb10-tab-overflow-menu-item-single-" + this.res, l.setAttribute("class", a), n.appendChild(o), t.setOverflowTab = function(t) {
				var e = this.actionBar.tabOverflowBtn;
				t && bb.actionBar.highlightAction(this.visibleTab, this), this.visibleTab == e && (e.icon.setAttribute("src", this.img.src), e.icon.setAttribute("class", e.icon.highlight), e.tabHighlight.style.display = "block", e.display.innerHTML = this.caption)
			}, t.setOverflowTab = t.setOverflowTab.bind(t), t.initialSelected = t.hasAttribute("data-bb-selected") && "true" == t.getAttribute("data-bb-selected").toLowerCase(), t.oldClick = t.onclick, t.onclick = function() {
				var t = this.actionBar.tabOverflowBtn;
				this.menu.itemClicked = !0, bb.actionBar.highlightAction(this.visibleTab, this), this.visibleTab == t && this.setOverflowTab(!1), this.oldClick && this.oldClick()
			}, t.setCaption = function(t) {
				this.display.innerHTML = t
			}, t.setCaption = t.setCaption.bind(t), t.setImage = function(t) {
				this.img.setAttribute("src", t)
			}, t.setImage = t.setImage.bind(t), t.show = function() {
				this.visible || (this.visible = !0, this.menu.actions.push(this), this.style.display = "", this.menu.centerMenuItems())
			}, t.show = t.show.bind(t), t.hide = function() {
				if (this.visible) {
					this.visible = !1;
					var t = this.menu.actions.indexOf(this);
					this.menu.actions.splice(t, 1), this.style.display = "none", this.menu.centerMenuItems()
				}
			}, t.hide = t.hide.bind(t)
		}, i.add = i.add.bind(i), i
	},
	getWidth: function() {
		return bb.device.is1024x600 ? "portrait" == bb.getOrientation() ? bb.innerWidth() - 77 : 400 : bb.device.is1280x768 || bb.device.is1280x720 ? "portrait" == bb.getOrientation() ? bb.innerWidth() - 154 : 700 : "portrait" == bb.getOrientation() ? bb.innerWidth() - 154 : 700
	}
}, bb.titleBar = {
	apply: function(titleBar) {
		if (bb.device.isBB10) {
			var res = "1280x768-1280x720",
				orientation = bb.getOrientation(),
				button, caption, titleBarClass, details, topTitleArea = document.createElement("div"),
				img, accentText;
			bb.device.is1024x600 ? res = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? res = "1280x768-1280x720" : bb.device.is720x720 && (res = "720x720"), titleBar.topTitleArea = topTitleArea, titleBar.appendChild(topTitleArea), titleBarClass = bb.options.coloredTitleBar ? "bb-bb10-title-bar-" + res + " bb-bb10-title-bar-" + orientation + "-" + res + " bb10-title-colored" : "bb-bb10-title-bar-" + res + " bb-bb10-title-bar-" + orientation + "-" + res + " bb-bb10-title-bar-" + bb.screen.controlColor, topTitleArea.setAttribute("class", titleBarClass), caption = document.createElement("div"), titleBar.caption = caption, caption.setAttribute("class", "bb-bb10-title-bar-caption-" + res + " bb-bb10-title-bar-caption-" + orientation + "-" + res), caption.innerHTML = titleBar.getAttribute("data-bb-caption"), topTitleArea.appendChild(caption), titleBar.hasAttribute("data-bb-back-caption") && (button = document.createElement("div"), button.innerHTML = titleBar.getAttribute("data-bb-back-caption"), topTitleArea.appendChild(button), titleBar.backButton = button, button.onclick = bb.popScreen, bb.titleBar.styleBB10Button(button), button.style.left = "0px"), titleBar.hasAttribute("data-bb-action-caption") && (button = document.createElement("div"), button.innerHTML = titleBar.getAttribute("data-bb-action-caption"), titleBar.hasAttribute("onactionclick") ? (button.titleBar = titleBar, button.onactionclick = titleBar.getAttribute("onactionclick"), titleBar.onactionclick = function() {
				eval(this.actionButton.onactionclick)
			}, button.onclick = function() {
				this.titleBar.onactionclick && this.titleBar.onactionclick()
			}) : titleBar.onactionclick && (button.onclick = titleBar.onactionclick), bb.titleBar.styleBB10Button(button), button.style.right = "0px", topTitleArea.appendChild(button), titleBar.actionButton = button), (titleBar.actionButton || titleBar.backButton) && (titleBar.evenButtonWidths = function() {
				var t, e = this.backButton ? parseInt(window.getComputedStyle(this.backButton).width) : 0,
					i = this.actionButton ? parseInt(window.getComputedStyle(this.actionButton).width) : 0;
				this.actionButton && this.backButton ? (t = e > i ? e : i, this.backButton.style.width = t + "px", this.actionButton.style.width = t + "px", this.caption.style["margin-left"] = t + 24 + "px", this.caption.style["margin-right"] = t + 24 + "px") : this.actionButton ? (this.caption.style["margin-left"] = "0px", this.caption.style["margin-right"] = i + 24 + "px") : this.backButton && (this.caption.style["margin-right"] = "0px", this.caption.style["margin-left"] = e + 24 + "px")
			}, titleBar.evenButtonWidths = titleBar.evenButtonWidths.bind(titleBar), window.setTimeout(titleBar.evenButtonWidths, 0)), titleBar.actionButton || titleBar.backButton || !titleBar.hasAttribute("data-bb-img") && !titleBar.hasAttribute("data-bb-accent-text") || (caption.setAttribute("class", "bb-bb10-title-bar-caption-left-" + res), details = document.createElement("div"), titleBar.details = details, topTitleArea.appendChild(details), details.appendChild(caption), titleBar.hasAttribute("data-bb-img") && (img = document.createElement("img"), titleBar.img = img, topTitleArea.insertBefore(img, details), details.setAttribute("class", "bb-bb10-title-bar-caption-details-img-" + res), img.style.opacity = "0", img.style["-webkit-transition"] = "opacity 0.5s linear", img.style["-webkit-backface-visibility"] = "hidden", img.style["-webkit-perspective"] = 1e3, img.style["-webkit-transform"] = "translate3d(0,0,0)", titleBar.onbbuidomready = function() {
				this.img.onload = function() {
					this.style.opacity = "1.0"
				}, this.img.src = this.getAttribute("data-bb-img"), document.removeEventListener("bbuidomready", this.onbbuidomready, !1)
			}, titleBar.onbbuidomready = titleBar.onbbuidomready.bind(titleBar), document.addEventListener("bbuidomready", titleBar.onbbuidomready, !1)), titleBar.hasAttribute("data-bb-accent-text") && (caption.style["line-height"] = bb.device.is1024x600 ? "40px" : bb.device.is1280x768 || bb.device.is1280x720 ? "70px" : bb.device.is720x720 ? "55px" : "70px", accentText = document.createElement("div"), accentText.setAttribute("class", "bb-bb10-title-bar-accent-text-" + res), bb.options.coloredTitleBar && (accentText.style.color = "silver"), titleBar.accentText = accentText, accentText.innerHTML = titleBar.getAttribute("data-bb-accent-text"), details.appendChild(accentText))), titleBar.setCaption = function(t) {
				this.caption.innerHTML = t
			}, titleBar.setCaption = titleBar.setCaption.bind(titleBar), titleBar.getCaption = function() {
				return this.caption.innerHTML
			}, titleBar.getCaption = titleBar.getCaption.bind(titleBar), titleBar.setBackCaption = function(t) {
				this.backButton.firstChild.innerHTML = t, this.actionButton && (this.backButton.style.width = "", this.evenButtonWidths())
			}, titleBar.setBackCaption = titleBar.setBackCaption.bind(titleBar), titleBar.getBackCaption = function() {
				return this.backButton.firstChild.innerHTML
			}, titleBar.getBackCaption = titleBar.getBackCaption.bind(titleBar), titleBar.setActionCaption = function(t) {
				this.actionButton.firstChild.innerHTML = t, this.backButton && (this.actionButton.style.width = "", this.evenButtonWidths())
			}, titleBar.setActionCaption = titleBar.setActionCaption.bind(titleBar), titleBar.getActionCaption = function() {
				return this.actionButton.firstChild.innerHTML
			}, titleBar.getActionCaption = titleBar.getActionCaption.bind(titleBar), titleBar.getAccentText = function() {
				return this.accentText.innerHTML
			}, titleBar.getAccentText = titleBar.getAccentText.bind(titleBar)
		} else if (bb.device.isPlayBook) {
			if (titleBar.setAttribute("class", "pb-title-bar"), titleBar.innerHTML = titleBar.getAttribute("data-bb-caption"), titleBar.hasAttribute("data-bb-back-caption")) {
				var button = document.createElement("div"),
					buttonInner = document.createElement("div");
				button.setAttribute("class", "pb-title-bar-back"), button.onclick = bb.popScreen, buttonInner.setAttribute("class", "pb-title-bar-back-inner"), buttonInner.innerHTML = titleBar.getAttribute("data-bb-back-caption"), button.appendChild(buttonInner), titleBar.appendChild(button)
			}
		} else titleBar.setCaption = function(t) {
				return t ? (this.setAttribute("data-bb-caption", t), this.innerHTML = t, void 0) : (t = this.getAttribute("data-bb-caption"), this.innerHTML = t, void 0)
		}, titleBar.setCaption = titleBar.setCaption.bind(titleBar), titleBar.getCaption = function() {
			return this.innerHTML
		}, titleBar.getCaption = titleBar.getCaption.bind(titleBar), titleBar.hasAttribute("data-bb-caption") && (bb.device.isHiRes ? titleBar.setAttribute("class", "bb-hires-screen-title") : titleBar.setAttribute("class", "bb-lowres-screen-title"), titleBar.innerHTML = titleBar.getAttribute("data-bb-caption"))
	},
	styleBB10Button: function(t) {
		var e, i, n, o = "1280x768-1280x720",
			r = document.createElement("div");
		bb.device.is1024x600 ? o = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? o = "1280x768-1280x720" : bb.device.is720x720 && (o = "720x720"), bb.options.coloredTitleBar ? (e = "bb-bb10-titlebar-button bb-bb10-titlebar-button-" + o + " bb10-title-button-colored", i = "bb-bb10-titlebar-button bb-bb10-titlebar-button-" + o + " bb10-title-button-colored-highlight", n = "bb-bb10-titlebar-button-container-" + o + " bb10-title-button-container-colored") : (e = "bb-bb10-titlebar-button bb-bb10-titlebar-button-" + o + " bb-bb10-titlebar-button-" + bb.screen.controlColor, i = "bb-bb10-titlebar-button bb-bb10-titlebar-button-" + o + " bb-bb10-titlebar-button-highlight-" + bb.screen.controlColor, n = "bb-bb10-titlebar-button-container-" + o + " bb-bb10-titlebar-button-container-" + bb.screen.controlColor), t.enabled = !0, r.innerHTML = t.innerHTML, t.innerHTML = "", t.appendChild(r), r.setAttribute("class", e), t.setAttribute("class", n), t.outerNormal = n, t.innerElement = r, r.normal = e, r.highlight = i, t.ontouchstart = function() {
			this.innerElement.setAttribute("class", this.innerElement.highlight)
		}, t.ontouchend = function() {
			this.innerElement.setAttribute("class", this.innerElement.normal)
		}, t.trappedClick = t.onclick, t.onclick = void 0, null !== t.trappedClick && t.addEventListener("click", function() {
			this.enabled && this.trappedClick()
		}, !1)
	}
}, _bb10_activityIndicator = {
	apply: function(t) {
		var e, i, n, o, r, s, l, a = bb.screen.controlColor,
			b = "1280x768-1280x720";
		if (bb.device.is1024x600 ? b = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? b = "1280x768-1280x720" : bb.device.is720x720 && (b = "720x720"), t.length > 0) {
			var d, c, h = document.createElement("canvas");
			h.setAttribute("height", "184px"), h.setAttribute("width", "184px"), d = h.getContext("2d"), d.beginPath(), d.moveTo(92, 154), d.arcTo(154, 154, 154, 92, 62), d.arcTo(154, 30, 92, 30, 62), d.arcTo(81, 30, 81, 20, 10), d.arcTo(81, 10, 91, 10, 10), d.arcTo(173, 10, 173, 92, 82), d.arcTo(173, 173, 92, 173, 82), d.arcTo(81, 173, 81, 164, 10), d.arcTo(81, 154, 92, 154, 10), d.closePath(), d.strokeStyle = "transparent", d.stroke();
			var c = d.createLinearGradient(0, 50, 0, 154);
			c.addColorStop(0, "transparent"), c.addColorStop(1, bb.options.highlightColor), d.fillStyle = c, d.fill(), l = h.toDataURL()
		}
		for (e = 0; t.length > e; e++) i = t[e], r = i.hasAttribute("data-bb-size") ? i.getAttribute("data-bb-size").toLowerCase() : "medium", "large" == r ? s = bb.device.is1024x600 ? "93px" : bb.device.is1280x768 || bb.device.is1280x720 ? "184px" : bb.device.is720x720 ? "170px" : "184px" : "small" == r ? s = bb.device.is1024x600 ? "21px" : bb.device.is1280x768 || bb.device.is1280x720 ? "41px" : "41px" : (r = "medium", s = bb.device.is1024x600 ? "46px" : bb.device.is1280x768 || bb.device.is1280x720 ? "93px" : bb.device.is720x720 ? "88px" : "93px"), i.style.width = s, o = document.createElement("div"), o.setAttribute("class", "bb-bb10-activity-margin-" + b + " bb-bb10-activity-" + r + "-" + b + " bb-activity-" + a), i.appendChild(o), n = document.createElement("div"), n.setAttribute("class", "bb-bb10-activity-" + r + "-" + b), n.style["background-image"] = 'url("' + l + '")', o.appendChild(n), n.style["-webkit-animation-name"] = "activity-rotate", n.style["-webkit-animation-duration"] = "0.8s", n.style["-webkit-animation-iteration-count"] = "infinite", n.style["-webkit-animation-timing-function"] = "linear", i.show = function() {
				this.style.display = "", bb.refresh()
		}, i.show = i.show.bind(i), i.hide = function() {
			this.style.display = "none", bb.refresh()
		}, i.hide = i.hide.bind(i), i.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, i.remove = i.remove.bind(i)
	}
}, _bb10_button = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.button.style(t[e])
	},
	style: function(t) {
		var e = "1280x768-1280x720";
		bb.device.is1024x600 ? e = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? e = "1280x768-1280x720" : bb.device.is720x720 && (e = "720x720");
		var i, n, o, r, s = document.createElement("div"),
			l = document.createElement("div");
		if (disabled = t.hasAttribute("data-bb-disabled"), normal = "bb-bb10-button bb-bb10-button-" + e, highlight = "bb-bb10-button bb-bb10-button-" + e + " bb10-button-highlight", outerNormal = "bb-bb10-button-container-" + e + " bb-bb10-button-container-" + bb.screen.controlColor, outerNormalWithoutImageOnly = outerNormal, t.isImageOnly = !1, t.enabled = !disabled, o = t.innerHTML, s.innerHTML = o, t.innerHTML = "", t.stretched = !1, t.captionElement = s, t.appendChild(l), t.innerElement = l, t.hasAttribute("data-bb-style")) {
			var a = t.getAttribute("data-bb-style");
			"stretch" == a && (outerNormal += " bb-bb10-button-stretch", t.stretched = !0)
		}
		return n = t.hasAttribute("data-bb-img") ? t.getAttribute("data-bb-img") : void 0, n && (o && 0 != o.length ? (s.setAttribute("class", "bb-bb10-button-caption-with-image-" + e), r = document.createElement("div"), t.imgElement = r, r.setAttribute("class", "bb-bb10-button-image-" + e), r.style["background-image"] = 'url("' + n + '")', l.appendChild(r)) : (outerNormal = outerNormal + " bb-bb10-button-container-image-only-" + e, s.style["background-image"] = 'url("' + n + '")', t.style["line-height"] = "0px", s.setAttribute("class", "bb-bb10-button-caption-with-image-only-" + e), t.isImageOnly = !0)), l.appendChild(s), i = normal + " bb-bb10-button-disabled-" + bb.screen.controlColor, normal = normal + " bb-bb10-button-" + bb.screen.controlColor, disabled ? (t.removeAttribute("data-bb-disabled"), l.setAttribute("class", i)) : l.setAttribute("class", normal), t.setAttribute("class", outerNormal), t.outerNormal = outerNormal, t.outerNormalWithoutImageOnly = outerNormalWithoutImageOnly, t.innerElement = l, l.normal = normal, l.highlight = highlight, l.disabledStyle = i, disabled || (t.ontouchstart = function() {
			this.innerElement.setAttribute("class", this.innerElement.highlight)
		}, t.ontouchend = function() {
			this.innerElement.setAttribute("class", this.innerElement.normal)
		}), t.trappedClick = t.onclick, t.onclick = void 0, null !== t.trappedClick && t.addEventListener("click", function() {
			this.enabled && this.trappedClick()
		}, !1), t.setCaption = function(t) {
			if (this.isImageOnly && t.length > 0) {
				this.captionElement.setAttribute("class", "bb-bb10-button-caption-with-image-" + e);
				var i = document.createElement("div");
				this.imgElement = i, i.setAttribute("class", "bb-bb10-button-image-" + e), i.style["background-image"] = this.captionElement.style["background-image"], this.innerElement.removeChild(this.captionElement), this.innerElement.appendChild(i), this.innerElement.appendChild(this.captionElement), this.setAttribute("class", this.outerNormalWithoutImageOnly), this.captionElement.style["background-image"] = "", this.isImageOnly = !1
			} else 0 == t.length && this.imgElement && (this.captionElement.setAttribute("class", "bb-bb10-button-caption-with-image-only-" + e), this.setAttribute("class", this.outerNormalWithoutImageOnly + " bb-bb10-button-container-image-only-" + e), this.captionElement.style["background-image"] = this.imgElement.style["background-image"], this.isImageOnly = !0, this.innerElement.removeChild(this.imgElement), this.imgElement = null);
			this.captionElement.innerHTML = t
		}, t.getCaption = function() {
			return this.captionElement.innerHTML
		}, t.getCaption = t.getCaption.bind(t), t.setImage = function(t) {
			if (this.isImageOnly) this.captionElement.style["background-image"] = 'url("' + t + '")';
			else if (this.imgElement && t.length > 0) this.imgElement.style["background-image"] = 'url("' + t + '")';
			else if (t.length > 0) {
				this.captionElement.setAttribute("class", "bb-bb10-button-caption-with-image-" + e);
				var i = document.createElement("div");
				this.imgElement = i, i.setAttribute("class", "bb-bb10-button-image-" + e), i.style["background-image"] = 'url("' + t + '")', this.innerElement.removeChild(this.captionElement), this.innerElement.appendChild(i), this.innerElement.appendChild(this.captionElement)
			} else this.imgElement && 0 == t.length && (this.innerElement.removeChild(this.imgElement), this.imgElement = null, this.captionElement.setAttribute("class", ""))
		}, t.getImage = function() {
			return this.isImageOnly ? this.captionElement.style["background-image"].slice(4, -1) : this.imgElement ? this.imgElement.style["background-image"].slice(4, -1) : ""
		}, t.getImage = t.getImage.bind(t), t.enable = function() {
			this.enabled || (this.innerElement.setAttribute("class", this.innerElement.normal), this.ontouchstart = function() {
				this.innerElement.setAttribute("class", this.innerElement.highlight)
			}, this.ontouchend = function() {
				this.innerElement.setAttribute("class", this.innerElement.normal)
			}, this.enabled = !0)
		}, t.enable = t.enable.bind(t), t.disable = function() {
			this.enabled && (this.innerElement.setAttribute("class", this.innerElement.disabledStyle), this.ontouchstart = null, this.ontouchend = null, this.enabled = !1)
		}, t.disable = t.disable.bind(t), t.show = function() {
			this.style.display = this.stretched ? "block" : "inline-block", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, t.remove = t.remove.bind(t), t
	}
}, _bb10_checkbox = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.checkbox.style(t[e])
	},
	style: function(t) {
		var e, i, n, o, r = "1280x768-1280x720",
			s = bb.screen.controlColor;
		return bb.device.is1024x600 ? r = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (r = "1280x768-1280x720"), e = document.createElement("div"), e.setAttribute("class", "bb-bb10-checkbox-target-" + r), t.parentNode && t.parentNode.insertBefore(e, t), t.style.display = "none", e.appendChild(t), e.input = t, t.touchTarget = e, i = document.createElement("div"), i.setAttribute("class", "bb-bb10-checkbox-outer-" + r + " bb-bb10-checkbox-outer-" + s), e.appendChild(i), n = document.createElement("div"), n.normal = "bb-bb10-checkbox-inner-" + r + " bb-bb10-checkbox-inner-" + s, n.setAttribute("class", n.normal), i.appendChild(n), o = document.createElement("div"), o.hiddenClass = "bb-bb10-checkbox-check-hidden-" + r + " bb-bb10-checkbox-check-image", o.displayClass = "bb-bb10-checkbox-check-display-" + r + " bb-bb10-checkbox-check-image", o.setAttribute("class", o.hiddenClass), o.style["-webkit-transition-property"] = "all", o.style["-webkit-transition-duration"] = "0.1s", n.appendChild(o), e.checkElement = o, e.innerElement = n, e.highlight = "-webkit-linear-gradient(top,  rgb(" + (bb.options.shades.R + 32) + ", " + (bb.options.shades.G + 32) + ", " + (bb.options.shades.B + 32) + ") 0%, rgb(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ") 100%)", e.touchHighlight = "-webkit-linear-gradient(top,  rgba(" + (bb.options.shades.R - 64) + ", " + (bb.options.shades.G - 64) + ", " + (bb.options.shades.B - 64) + ",0.25) 0%, rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ",0.25) 100%)", e.ontouchstart = function() {
			this.input.checked || this.input.disabled || (this.innerElement.style.background = this.touchHighlight)
		}, e.ontouchend = function() {
			this.input.checked || this.input.disabled || (this.innerElement.style.background = "")
		}, e.onclick = function() {
			if (!this.input.disabled) {
				var t = document.createEvent("HTMLEvents");
				t.initEvent("change", !1, !0), this.input.checked = !this.input.checked, this.drawChecked(), this.input.dispatchEvent(t)
			}
		}, e.drawChecked = function() {
			this.input.checked ? (this.checkElement.setAttribute("class", this.checkElement.displayClass), this.innerElement.style["background-image"] = e.highlight) : (this.checkElement.setAttribute("class", this.checkElement.hiddenClass), this.innerElement.style["background-image"] = ""), this.input.disabled ? (this.innerElement.parentNode.setAttribute("class", "bb-bb10-checkbox-outer-" + r + " bb-bb10-checkbox-outer-disabled-" + s), this.innerElement.setAttribute("class", "bb-bb10-checkbox-inner-" + r + " bb-bb10-checkbox-inner-disabled-" + s), this.innerElement.style.background = "#c0c0c0") : (this.innerElement.parentNode.setAttribute("class", "bb-bb10-checkbox-outer-" + r + " bb-bb10-checkbox-outer-" + s), this.innerElement.setAttribute("class", "bb-bb10-checkbox-inner-" + r + " bb-bb10-checkbox-inner-" + s))
		}, e.drawChecked = e.drawChecked.bind(e), t.setChecked = function(t) {
			t != this.checked && (this.checked = t, this.touchTarget.drawChecked())
		}, t.setChecked = t.setChecked.bind(t), t.getChecked = function() {
			return this.checked
		}, t.getChecked = t.getChecked.bind(t), t.enable = function() {
			this.removeAttribute("disabled"), this.enabled = !0, this.touchTarget.drawChecked()
		}, t.enable = t.enable.bind(t), t.disable = function() {
			this.enabled = !1, this.setAttribute("disabled", "disabled"), this.touchTarget.drawChecked()
		}, t.disable = t.disable.bind(t), t.show = function() {
			this.touchTarget.style.display = "block", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.touchTarget.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.touchTarget.parentNode.removeChild(this.touchTarget), bb.refresh()
		}, t.remove = t.remove.bind(t), e.drawChecked(), e
	}
}, _bb10_dropdown = {
	apply: function(t) {
		for (i = 0; t.length > i; i++) bb.dropdown.style(t[i])
	},
	style: function(t) {
		var e = "1280x768-1280x720";
		bb.device.is1024x600 ? e = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? e = "1280x768-1280x720" : bb.device.is720x720 && (e = "720x720");
		var i, n, o, r, s, l, a, b, d, c = !t.hasAttribute("disabled"),
			h = "bb-bb10-dropdown bb-bb10-dropdown-" + e + " bb-bb10-dropdown-" + bb.screen.controlColor + " bb-bb10-dropdown-" + e,
			u = "bb-bb10-dropdown bb-bb10-dropdown-" + e + " bb-bb10-dropdown-highlight-" + bb.screen.controlColor + " bb10Highlight bb-bb10-dropdown-" + e,
			p = "bb-bb10-dropdown-container-" + e + " bb-bb10-dropdown-container-" + bb.screen.controlColor + " bb-bb10-dropdown-container-" + e,
			m = "bb-bb10-dropdown-container-inner-" + e + " bb-bb10-dropdown-container-inner-" + bb.screen.controlColor,
			g = "bb-bb10-dropdown-inner-" + e + " bb-bb10-dropdown-inner-" + bb.screen.controlColor;
		if (t.style.display = "none", t.enabled = c, l = document.createElement("div"), l.select = t, l.items = [], l.setAttribute("data-bb-type", "dropdown"), t.dropdown = l, t.parentNode && t.parentNode.insertBefore(l, t), l.appendChild(t), r = document.createElement("div"), r.setAttribute("class", m), l.appendChild(r), t.hasAttribute("data-bb-style")) {
			var v = t.getAttribute("data-bb-style");
			"stretch" == v && (h += " bb-bb10-dropdown-stretch", u += " bb-bb10-dropdown-stretch")
		}
		s = document.createElement("div"), t.enabled ? s.setAttribute("class", h) : s.setAttribute("class", h + " bb-bb10-dropdown-disabled-" + bb.screen.controlColor), r.appendChild(s), o = document.createElement("div"), o.setAttribute("class", g), s.appendChild(o), a = document.createElement("div"), l.labelElement = a, a.setAttribute("class", "bb-bb10-dropdown-label-" + e), t.hasAttribute("data-bb-label") && (a.innerHTML = t.getAttribute("data-bb-label")), o.appendChild(a), i = document.createElement("div"), i.setAttribute("class", "bb-bb10-dropdown-arrow-" + e + "-" + bb.screen.controlColor), o.appendChild(i), l.img = i, b = document.createElement("div"), l.captionElement = b, b.setAttribute("class", "bb-bb10-dropdown-caption-" + e), o.appendChild(b);
		var f = document.createElement("div");
		f.style.position = "relative", f.style["margin-top"] = "10px", f.style.overflow = "hidden", r.appendChild(f);
		var y = document.createElement("div");
		return f.appendChild(y), d = document.createElement("div"), l.itemsElement = d, d.setAttribute("class", "bb-bb10-dropdown-items"), y.appendChild(d), l.refreshOptions = function() {
			var o, r, s, l, a, d, c = t.getElementsByTagName("option"),
				h = "";
			for (this.itemsElement.innerHTML = "", this.items = [], this.options = c, n = 0; c.length > n; n++) o = c[n], r = document.createElement("div"), this.items.push(r), r.selectedStyle = "bb-bb10-dropdown-item-" + e + " bb-bb10-dropdown-item-" + bb.screen.controlColor + " bb-bb10-dropdown-item-selected-" + bb.screen.controlColor, r.normalStyle = "bb-bb10-dropdown-item-" + e + " bb-bb10-dropdown-item-" + bb.screen.controlColor, r.index = n, r.select = this.select, r.dropdown = this, r.dropdown.selected || (r.dropdown.selected = r), a = document.createElement("div"), a.setAttribute("class", "primary-text"), a.innerHTML = o.innerHTML, s = document.createElement("div"), s.setAttribute("class", "text-container"), s.appendChild(a), l = document.createElement("span"), l.setAttribute("class", "text-align"), r.appendChild(l), r.appendChild(s), this.itemsElement.appendChild(r), o.hasAttribute("data-bb-accent-text") && (d = document.createElement("div"), d.setAttribute("class", "accent-text"), d.innerHTML = o.getAttribute("data-bb-accent-text"), r.accentText = d, s.appendChild(d)), i = document.createElement("div"), i.setAttribute("class", "bb-bb10-dropdown-selected-image-" + e + "-" + bb.screen.controlColor), r.img = i, r.appendChild(i), o.hasAttribute("selected") || o.selected ? (h = o.innerHTML, r.setAttribute("class", r.selectedStyle), i.style.visibility = "visible", r.dropdown.selected = r) : r.setAttribute("class", r.normalStyle), r.ontouchstart = function() {
					this.style["background-color"] = bb.options.highlightColor, this.style.color = "white", this.accentText && (this.accentText.style.color = "white")
			}, r.ontouchend = function() {
				this.style["background-color"] = "transparent", this.style.color = "", this.accentText && (this.accentText.style.color = "")
			}, r.onclick = function() {
				this.select.setSelectedItem(this.index)
			};
			"" == h && c.length > 0 && (h = c[0].innerHTML), "" != h && (b.innerHTML = h)
		}, l.refreshOptions = l.refreshOptions.bind(l), l.refreshOptions(), l.setAttribute("class", p), l.buttonOuter = s, l.isRefreshed = !1, l.caption = b, s.dropdown = l, l.open = !1, s.normal = h, s.highlight = u, l.scroller = new iScroll(f, {
			vScrollbar: !1,
			onBeforeScrollStart: function(t) {
				bb.scroller && bb.scroller.disable(), t.preventDefault()
			},
			onBeforeScrollEnd: function() {
				bb.scroller && bb.scroller.enable()
			}
		}), bb.dropdownScrollers.push(l.scroller), l.scrollArea = f, s.dotouchstart = function() {
			this.setAttribute("class", this.highlight)
		}, s.dotouchend = function() {
			this.setAttribute("class", this.normal)
		}, s.doclick = function() {
			this.dropdown.open ? this.dropdown.internalHide() : this.dropdown.internalShow()
		}, t.enabled && (s.ontouchstart = s.dotouchstart, s.ontouchend = s.dotouchend, s.onclick = s.doclick), l.internalShow = function() {
			var t;
			this.open = !0, this.numItems = bb.device.is720x720 && this.options.length > 4 ? 3 : this.options.length > 5 ? 5 : this.options.length, bb.device.is1024x600 ? (t = 43 * this.numItems, this.style.height = 45 + t + "px") : bb.device.is1280x768 || bb.device.is1280x720 ? (t = 99 * this.numItems, this.style.height = 95 + t + "px") : bb.device.is720x720 ? (t = 85 * this.numItems, this.style.height = 77 + t + "px") : (t = 99 * this.numItems, this.style.height = 95 + t + "px"), this.scrollArea.style.height = t - 10 + "px", this.isRefreshed || (this.scroller.refresh(), this.isRefreshed = !0), this.scroller.scrollToElement(this.selected, 0), this.caption.style.opacity = "0.0", this.caption.style["-webkit-transition"] = "opacity 0.5s linear", this.caption.style["-webkit-backface-visibility"] = "hidden", this.caption.style["-webkit-perspective"] = 1e3, this.caption.style["-webkit-transform"] = "translate3d(0,0,0)", this.img.style.opacity = "1.0", this.img.style["-webkit-transition"] = "all 0.5s ease-in-out", this.img.style["-webkit-transform"] = "rotate(-360deg)", bb.scroller && bb.scroller.refresh(), this.scrollIntoView(!1)
		}, l.internalShow = l.internalShow.bind(l), l.internalHide = function() {
			this.open = !1, this.style.height = "59px", this.style.height = bb.device.is1024x600 ? "43px" : bb.device.is1280x768 || bb.device.is1280x720 ? "95px" : bb.device.is720x720 ? "77px" : "95px", this.caption.style.opacity = "1.0", this.caption.style["-webkit-transition"] = "opacity 0.5s linear", this.caption.style["-webkit-backface-visibility"] = "hidden", this.caption.style["-webkit-perspective"] = 1e3, this.img.style.opacity = "0.0", this.img.style["-webkit-transition"] = "all 0.5s ease-in-out", this.img.style["-webkit-transform"] = "rotate(0deg)", bb.scroller && bb.scroller.refresh()
		}, l.internalHide = l.internalHide.bind(l), t.setSelectedItem = function(t) {
			if (this.selectedIndex != t) {
				var e = this.dropdown.items[t];
				if (!e) return;
				this.dropdown.selected && (this.dropdown.selected.setAttribute("class", e.normalStyle), this.dropdown.selected.img.style.visibility = "hidden"), e.setAttribute("class", e.selectedStyle), e.img.style.visibility = "visible", this.dropdown.selected = e, this.selectedIndex = t, this.dropdown.caption.innerHTML = this.options[t].text, this.dropdown.internalHide(), window.setTimeout(this.fireEvent, 0)
			}
		}, t.setSelectedItem = t.setSelectedItem.bind(t), t.setSelectedText = function(t) {
			for (var e = 0; this.options.length > e; e++) if (this.options[e].text == t) return this.setSelectedItem(e), void 0
		}, t.setSelectedText = t.setSelectedText.bind(t), t.fireEvent = function() {
			var t = document.createEvent("HTMLEvents");
			t.initEvent("change", !1, !0), this.dispatchEvent(t)
		}, t.fireEvent = t.fireEvent.bind(t), t.enable = function() {
			this.enabled || (this.dropdown.buttonOuter.ontouchstart = this.dropdown.buttonOuter.dotouchstart, this.dropdown.buttonOuter.ontouchend = this.dropdown.buttonOuter.dotouchend, this.dropdown.buttonOuter.onclick = this.dropdown.buttonOuter.doclick, this.dropdown.buttonOuter.setAttribute("class", h), this.removeAttribute("disabled"), this.enabled = !0)
		}, t.enable = t.enable.bind(t), t.disable = function() {
			t.enabled && (this.dropdown.internalHide(), this.dropdown.buttonOuter.ontouchstart = null, this.dropdown.buttonOuter.ontouchend = null, this.dropdown.buttonOuter.onclick = null, this.dropdown.buttonOuter.setAttribute("class", h + " bb-bb10-dropdown-disabled-" + bb.screen.controlColor), this.enabled = !1, this.setAttribute("disabled", "disabled"))
		}, t.disable = t.disable.bind(t), t.show = function() {
			this.dropdown.style.display = "block", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.dropdown.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.dropdown.parentNode.removeChild(this.dropdown), bb.refresh()
		}, t.remove = t.remove.bind(t), t.refresh = function() {
			this.dropdown.internalHide(), this.dropdown.isRefreshed = !1, this.dropdown.refreshOptions()
		}, t.refresh = t.refresh.bind(t), t.setCaption = function(t) {
			this.dropdown.labelElement.innerHTML = t, this.setAttribute("data-bb-label", t)
		}, t.setCaption = t.setCaption.bind(t), t.getCaption = function() {
			return this.dropdown.labelElement.innerHTML
		}, t.getCaption = t.getCaption.bind(t), l
	}
}, _bb10_fileInput = {
	apply: function(t) {
		var e, i, n, o = "1280x768-1280x720";
		for (bb.device.is1024x600 ? o = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (o = "1280x768-1280x720"), e = 0; t.length > e; e++) i = t[e], i.setAttribute("class", "bb-bb10-file-button-" + o), n = document.createElement("div"), n.setAttribute("data-bb-type", "button"), n.innerHTML = i.hasAttribute("data-bb-caption") ? i.getAttribute("data-bb-caption") : "Choose File", n.origCaption = n.innerHTML, bb.button.apply([n]), n.input = i, i.parentNode.insertBefore(n, i), n.appendChild(i), n.handleChange = function() {
				this.input.value ? this.setCaption(this.input.value.replace(/^.*[\\\/]/, "")) : this.setCaption(this.origCaption)
		}, n.handleChange = n.handleChange.bind(n), i.addEventListener("change", n.handleChange, !1)
	}
}, _bb10_grid = {
	apply: function(t) {
		var e, i = "1280x768-1280x720",
			n = !1;
		bb.device.is1024x600 ? i = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (i = "1280x768-1280x720");
		for (var o = 0; t.length > o; o++) {
			var r, s, l, a, b, d, c = t[o];
			for (c.setAttribute("class", "bb-bb10-grid-" + i), c.isSquare = c.hasAttribute("data-bb-style") && "square" == c.getAttribute("data-bb-style").toLowerCase(), n = c.hasAttribute("data-bb-header-style") ? "solid" == c.getAttribute("data-bb-header-style").toLowerCase() : !1, e = c.hasAttribute("data-bb-header-justify") ? c.getAttribute("data-bb-header-justify").toLowerCase() : "center", c.hasAttribute("data-bb-context") && "true" == c.getAttribute("data-bb-context").toLowerCase() && (d = bb.screen.contextMenu), s = c.querySelectorAll("[data-bb-type=group], [data-bb-type=row]"), r = 0; s.length > r; r++) if (b = s[r], b.hasAttribute("data-bb-type")) if (l = b.getAttribute("data-bb-type").toLowerCase(), "group" == l && b.hasAttribute("data-bb-title")) a = document.createElement("div"), a.normal = "bb-bb10-grid-header-" + i, a.innerHTML = "<p>" + b.getAttribute("data-bb-title") + "</p>", n ? (a.normal = a.normal + " bb10Accent", a.style.color = "white", a.style["border-bottom-color"] = "transparent") : (a.normal = a.normal + " bb-bb10-grid-header-normal-" + bb.screen.listColor, a.style["border-bottom-color"] = bb.options.shades.darkOutline), a.normal = "left" == e ? a.normal + " bb-bb10-grid-header-left-" + i : "right" == e ? a.normal + " bb-bb10-grid-header-right-" + i : a.normal + " bb-bb10-grid-header-center", a.setAttribute("class", a.normal), b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a);
					else
			if ("row" == l) {
				var h, u, p, m, g, v, f, y, w, f, E, x, k, A = 0,
					C = -1,
					B = b.querySelectorAll("[data-bb-type=item]");
				if (g = B.length, 0 == g) continue;
				for (b.hasAttribute("data-bb-columns") && (C = b.getAttribute("data-bb-columns")), u = document.createElement("table"), u.style.width = "100%", b.appendChild(u), p = document.createElement("tr"), u.appendChild(p), C > 0 ? B.length > C && !bb.device.isPlayBook ? (b.style["overflow-y"] = "hidden", b.style["overflow-x"] = "scroll", x = window.innerWidth / (parseInt(C) + .5)) : x = window.innerWidth / C - 6 : x = window.innerWidth / g - 6, h = 0; g > h; h++) v = B[h], bb.device.isPlayBook && C > 0 && h > C - 1 ? v.style.display = "none" : (f = v.innerHTML, a = v.getAttribute("data-bb-title"), k = f || a, v.innerHTML = "", m = document.createElement("td"), p.appendChild(m), m.appendChild(v), A++, E = c.isSquare ? x : Math.ceil(.5625 * x), v.style.width = x + "px", v.style.height = E + "px", y = document.createElement("img"), y.style.height = E + "px", y.style.width = x + "px", y.style.opacity = "0", y.style["-webkit-transition"] = "opacity 0.5s linear", y.style["-webkit-transform"] = "translate3d(0,0,0)", y.itemNode = v, v.image = y, v.appendChild(y), v.onbbuidomready = function() {
						bb.isScrolledIntoView(this) ? (this.image.onload = function() {
							this.style.opacity = "1.0"
						}, this.image.src = this.getAttribute("data-bb-img")) : (document.addEventListener("bbuiscrolling", this.onbbuiscrolling, !1), this.listener = {
							name: "bbuiscrolling",
							eventHandler: this.onbbuiscrolling
						}, bb.documentListeners.push(this.listener)), document.removeEventListener("bbuidomready", this.onbbuidomready, !1)
					}, v.onbbuidomready = v.onbbuidomready.bind(v), document.addEventListener("bbuidomready", v.onbbuidomready, !1), v.onbbuiscrolling = function() {
						if (bb.isScrolledIntoView(this)) {
							this.image.onload = function() {
								this.style.opacity = "1.0"
							}, this.image.src = this.getAttribute("data-bb-img"), document.removeEventListener("bbuiscrolling", this.onbbuiscrolling, !1);
							var t = bb.documentListeners.indexOf(this.listener);
							t >= 0 && bb.documentListeners.splice(t, 1)
						}
					}, v.onbbuiscrolling = v.onbbuiscrolling.bind(v), k ? (w = document.createElement("div"), a && f ? (w.setAttribute("class", "bb-bb10-grid-item-overlay-" + i + " bb-bb10-grid-item-overlay-two-rows-" + i), w.innerHTML = '<div><p class="title title-two-rows">' + a + "<br/>" + f + "</p></div>") : a ? (w.setAttribute("class", "bb-bb10-grid-item-overlay-" + i + " bb-bb10-grid-item-overlay-one-row-" + i), w.innerHTML = '<div><p class="title title-one-row">' + a + "</p></div>") : f && (w.setAttribute("class", "bb-bb10-grid-item-overlay-" + i + " bb-bb10-grid-item-overlay-one-row-" + i), w.innerHTML = '<div><p class="title title-one-row">' + f + "</p></div>"), v.appendChild(w)) : w = null, v.overlay = w, v.title = a, v.description = f, v.fingerDown = !1, v.contextShown = !1, v.contextMenu = d, v.ontouchstart = function() {
						if (this.overlay && (this.overlay.style.opacity = "1.0", this.overlay.style["background-color"] = bb.options.highlightColor), v.fingerDown = !0, v.contextShown = !1, v.contextMenu) {
							window.setTimeout(this.touchTimer, 667);
							var t = bb.getCurScreen();
							v.touchstartx = t.bbUIscrollWrapper.scrollTop
						}
					}, v.ontouchend = function() {
						this.overlay && (this.overlay.style.opacity = "", this.overlay.style["background-color"] = ""), v.fingerDown = !1, v.contextShown && (event.preventDefault(), event.stopPropagation())
					}, v.touchTimer = function() {
						var t = bb.getCurScreen(),
							e = t.bbUIscrollWrapper.scrollTop;
						v.fingerDown && 50 > Math.abs(v.touchstartx - e) && (v.contextShown = !0, v.contextMenu.peek({
							title: this.title,
							description: this.description,
							selected: this
						}))
					}, v.touchTimer = v.touchTimer.bind(v));
				if (C > 0 && C > A) {
					var S = C - A;
					for (b.extraColumns = [], h = 0; S > h; h++) m = document.createElement("td"), p.appendChild(m), m.style.width = x + "px", b.extraColumns.push(m)
				}
			}
			c.orientationChanged = function() {
				var t, e, i, n, o, r, s, l, a = this.querySelectorAll("[data-bb-type=row]");
				for (t = 0; a.length > t; t++) {
					var b = -1;
					for (n = a[t], i = n.querySelectorAll("[data-bb-type=item]"), o = i.length, n.hasAttribute("data-bb-columns") && (b = n.getAttribute("data-bb-columns")), s = b > 0 ? i.length > b && !bb.device.isPlayBook ? window.innerWidth / (parseInt(b) + .5) : window.innerWidth / b - 6 : window.innerWidth / o - 6, e = 0; o > e; e++) r = i[e], l = c.isSquare ? s : Math.ceil(.5625 * s), r.image.style.height = l + "px", r.image.style.width = s + "px", r.image.style["-webkit-transition-property"] = "all", r.image.style["-webkit-transition-duration"] = "0.2s", r.image.style["-webkit-transition-timing-function"] = "linear", r.image.style["-webkit-transform"] = "translate3d(0,0,0)", r.style.width = s + "px", r.style.height = l + "px", r.style["-webkit-transition-property"] = "all", r.style["-webkit-transition-duration"] = "0.2s", r.style["-webkit-transition-timing-function"] = "linear", r.style["-webkit-transform"] = "translate3d(0,0,0)";
					if (n.extraColumns) for (e = 0; n.extraColumns.length > e; e++) n.extraColumns[e].style.width = s + "px"
				}
			}, c.orientationChanged = c.orientationChanged.bind(c), window.addEventListener("resize", c.orientationChanged, !1), bb.windowListeners.push({
				name: "resize",
				eventHandler: c.orientationChanged
			}), c.show = function() {
				this.style.display = "block", bb.refresh()
			}, c.show = c.show.bind(c), c.hide = function() {
				this.style.display = "none", bb.refresh()
			}, c.hide = c.hide.bind(c), c.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, c.remove = c.remove.bind(c)
		}
	}
}, _bb10_imageList = {
	apply: function(elements) {
		var res = "1280x768-1280x720",
			i, j, outerElement, items;
		for (bb.device.is1024x600 ? res = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? res = "1280x768-1280x720" : bb.device.is720x720 && (res = "720x720"), i = 0; elements.length > i; i++) {
			outerElement = elements[i], outerElement.items = [], outerElement.setAttribute("class", "bb-bb10-image-list"), outerElement.hideImages = outerElement.hasAttribute("data-bb-images") ? "none" == outerElement.getAttribute("data-bb-images").toLowerCase() : !1, outerElement.hideImages || (outerElement.imageEffect = outerElement.hasAttribute("data-bb-image-effect") ? outerElement.getAttribute("data-bb-image-effect").toLowerCase() : void 0, outerElement.imagePlaceholder = outerElement.hasAttribute("data-bb-image-placeholder") ? outerElement.getAttribute("data-bb-image-placeholder") : void 0), outerElement.listStyle = outerElement.hasAttribute("data-bb-style") ? outerElement.getAttribute("data-bb-style").toLowerCase() : "default", outerElement.solidHeader = outerElement.hasAttribute("data-bb-header-style") ? "solid" == outerElement.getAttribute("data-bb-header-style").toLowerCase() : !1, outerElement.headerJustify = outerElement.hasAttribute("data-bb-header-justify") ? outerElement.getAttribute("data-bb-header-justify").toLowerCase() : "center", outerElement.hasAttribute("data-bb-context") && "true" == outerElement.getAttribute("data-bb-context").toLowerCase() && (outerElement.contextMenu = bb.screen.contextMenu), outerElement.styleItem = function(innerChildNode) {
				if (innerChildNode.hasAttribute("data-bb-type")) {
					var type = innerChildNode.getAttribute("data-bb-type").toLowerCase(),
						description = innerChildNode.innerHTML,
						title, overlay, accentText, img, details, detailsClass, descriptionDiv, btn, btnBorder, highlight, normal, btnInner;
					"header" == type ? (normal = "bb-bb10-image-list-header bb-bb10-image-list-header-" + res, this.solidHeader ? (normal += " bb10Accent", innerChildNode.style.color = "white", innerChildNode.style["border-bottom-color"] = "transparent") : (normal = normal + " bb-bb10-image-list-header-normal-" + bb.screen.listColor, innerChildNode.style["border-bottom-color"] = bb.options.shades.darkOutline), "left" == this.headerJustify ? normal = normal + " bb-bb10-image-list-header-left-" + res : "right" == this.headerJustify ? normal = normal + " bb-bb10-image-list-header-right-" + res : normal += " bb-bb10-image-list-header-center", innerChildNode.normal = normal, innerChildNode.innerHTML = "<p>" + description + "</p>", innerChildNode.setAttribute("class", normal)) : "item" == type && (normal = "bb-bb10-image-list-item bb-bb10-image-list-item-" + bb.screen.listColor + " bb-bb10-image-list-item-" + res, highlight = normal + " bb-bb10-image-list-item-hover bb10Highlight", innerChildNode.normal = normal, innerChildNode.highlight = highlight, innerChildNode.setAttribute("class", normal), innerChildNode.innerHTML = "", this.hideImages || (img = document.createElement("img"), img.outerElement = this, innerChildNode.img = img, this.imagePlaceholder ? (img.placeholder = this.imagePlaceholder, img.path = innerChildNode.hasAttribute("data-bb-img") ? innerChildNode.getAttribute("data-bb-img") : this.imagePlaceholder) : img.path = innerChildNode.getAttribute("data-bb-img"), innerChildNode.appendChild(img), this.imageEffect ? (img.style.opacity = "0", img.style["-webkit-transition"] = "opacity 0.5s linear", innerChildNode.imageList = this, innerChildNode.bbuilistready = function() {
						this.img.onload = function() {
							this.style.opacity = "1.0"
						}, this.img.src = this.img.path, this.imageList.imagePlaceholder && (this.img.onerror = function() {
							this.src != this.placeholder && (this.src = this.placeholder)
						}), document.removeEventListener("bbuilistready", this.bbuilistready, !1)
					}, innerChildNode.bbuilistready = innerChildNode.bbuilistready.bind(innerChildNode), document.addEventListener("bbuilistready", innerChildNode.bbuilistready, !1)) : (img.src = img.path, this.imagePlaceholder && (img.onerror = function() {
						this.src != this.placeholder && (this.src = this.placeholder, this.outerElement.imageEffect && this.show())
					}))), details = document.createElement("div"), details.innerChildNode = innerChildNode, innerChildNode.details = details, innerChildNode.appendChild(details), detailsClass = "bb-bb10-image-list-item-details-" + res, this.hideImages && (detailsClass = detailsClass + " bb-bb10-image-list-item-noimage-" + res), title = document.createElement("div"), title.setAttribute("class", "title"), title.innerHTML = innerChildNode.getAttribute("data-bb-title"), details.title = title, 0 == title.innerHTML.length && (title.innerHTML = "&nbsp;"), details.appendChild(title), descriptionDiv = document.createElement("div"), descriptionDiv.setAttribute("class", "description bb-bb10-image-list-description-" + bb.screen.listColor), details.description = descriptionDiv, details.appendChild(descriptionDiv), overlay = document.createElement("div"), overlay.setAttribute("class", "bb-bb10-image-list-item-overlay-" + res), innerChildNode.appendChild(overlay), "arrowlist" == this.listStyle || "arrowbuttons" == this.listStyle || "addbuttons" == this.listStyle || "removebuttons" == this.listStyle ? (btn = document.createElement("div"), innerChildNode.appendChild(btn), innerChildNode.btn = btn, btn.outerElement = this, btn.innerChildNode = innerChildNode, innerChildNode.onbtnclick ? btn.onbtnclick = innerChildNode.onbtnclick : innerChildNode.hasAttribute("onbtnclick") && (innerChildNode.onbtnclick = innerChildNode.getAttribute("onbtnclick"), btn.onbtnclick = function() {
						eval(this.innerChildNode.onbtnclick)
					}), detailsClass += " details-button-margin", btn.setAttribute("class", "button"), btnBorder = document.createElement("div"), btnBorder.normal = "bb-bb10-image-list-item-button-border-" + res + " bb-bb10-image-list-item-button-" + bb.screen.listColor, btnBorder.setAttribute("class", btnBorder.normal), btn.btnBorder = btnBorder, btn.appendChild(btnBorder), btnInner = document.createElement("div"), btnInner.normal = "bb-bb10-image-list-item-button-inner-" + res, btnInner.highlight = btnInner.normal, btn.btnInner = btnInner, btnBorder.appendChild(btnInner), "arrowlist" !== this.listStyle ? ("arrowbuttons" == this.listStyle ? (btnInner.normal = btnInner.normal + " bb-image-list-item-chevron-" + bb.screen.listColor, btnInner.highlight = btnInner.highlight + " bb-image-list-item-chevron-dark") : "addbuttons" == this.listStyle ? (btnInner.normal = btnInner.normal + " bb-image-list-item-add-" + bb.screen.listColor, btnInner.highlight = btnInner.highlight + " bb-image-list-item-add-dark") : "removebuttons" == this.listStyle && (btnInner.normal = btnInner.normal + " bb-image-list-item-remove-" + bb.screen.listColor, btnInner.highlight = btnInner.highlight + " bb-image-list-item-remove-dark"), btn.ontouchstart = function() {
						this.onbtnclick && (this.btnInner.setAttribute("class", this.btnInner.highlight), this.btnBorder.style.background = "-webkit-gradient(linear, center top, center bottom, from(rgb(" + (bb.options.shades.R + 32) + "," + (bb.options.shades.G + 32) + "," + (bb.options.shades.B + 32) + ")), to(" + bb.options.highlightColor + "))")
					}, btn.ontouchend = function() {
						this.onbtnclick && (this.btnBorder.style.background = "", this.btnInner.setAttribute("class", this.btnInner.normal))
					}, btn.onclick = function(t) {
						t.stopPropagation(), this.onbtnclick && (this.outerElement.selected = this.innerChildNode, this.onbtnclick())
					}) : (btnInner.normal = btnInner.normal + " bb-image-list-item-chevron-" + bb.screen.listColor, btnBorder.style.background = "transparent", btnBorder.style["border-color"] = "transparent"), btnInner.setAttribute("class", btnInner.normal)) : innerChildNode.hasAttribute("data-bb-accent-text") && (accentText = document.createElement("div"), accentText.setAttribute("class", "accent-text bb-bb10-image-list-accent-text-" + bb.screen.listColor), accentText.innerHTML = innerChildNode.getAttribute("data-bb-accent-text"), details.appendChild(accentText), details.accentText = accentText), 0 == description.length && (description = "&nbsp;", descriptionDiv.style.visibilty = "hidden", bb.device.is1024x600 ? (title.style["margin-top"] = "16px", overlay.style["margin-top"] = "-72px") : bb.device.is1280x768 || bb.device.is1280x720 ? (title.style["margin-top"] = "-7px", overlay.style["margin-top"] = "-121px") : bb.device.is720x720 ? (title.style["margin-top"] = "-14px", overlay.style["margin-top"] = "-108px") : (title.style["margin-top"] = "-7px", overlay.style["margin-top"] = "-121px"), accentText && (accentText.style["margin-top"] = bb.device.is1024x600 ? "-52px" : bb.device.is1280x768 || bb.device.is1280x720 ? "-82px" : bb.device.is720x720 ? "-82px" : "-82px")), descriptionDiv.innerHTML = description, details.setAttribute("class", detailsClass), innerChildNode.fingerDown = !1, innerChildNode.contextShown = !1, innerChildNode.overlay = overlay, innerChildNode.contextMenu = this.contextMenu, innerChildNode.description = description, innerChildNode.title = title.innerHTML, innerChildNode.ontouchstart = function() {
						if ((innerChildNode.trappedClick || this.contextMenu) && (innerChildNode.fingerDown = !0, innerChildNode.contextShown = !1, innerChildNode.contextMenu)) {
							window.setTimeout(this.touchTimer, 667);
							var t = bb.getCurScreen();
							innerChildNode.touchstartx = t.bbUIscrollWrapper.scrollTop
						}
					}, innerChildNode.ontouchend = function(t) {
						(innerChildNode.trappedClick || this.contextMenu) && (this.overlay.style["border-color"] = "transparent", innerChildNode.fingerDown = !1, innerChildNode.contextShown && (t.preventDefault(), t.stopPropagation()))
					}, innerChildNode.touchTimer = function() {
						var t = bb.getCurScreen(),
							e = t.bbUIscrollWrapper.scrollTop;
						innerChildNode.fingerDown && 50 > Math.abs(innerChildNode.touchstartx - e) && (innerChildNode.contextShown = !0, this.setAttribute("class", this.highlight), this.overlay.style["border-color"] = bb.options.shades.darkOutline, innerChildNode.contextMenu.hideEvents.push(this.finishHighlight), innerChildNode.contextMenu.peek({
							title: this.title,
							description: this.description,
							selected: this
						}))
					}, innerChildNode.touchTimer = innerChildNode.touchTimer.bind(innerChildNode), innerChildNode.trappedClick = innerChildNode.onclick, innerChildNode.onclick = void 0, innerChildNode.outerElement = this, innerChildNode.addEventListener("click", function() {
						innerChildNode.trappedClick && (this.outerElement.selected = this, this.trappedClick && setTimeout(this.trappedClick, 0))
					}, !1), innerChildNode.finishHighlight = function() {
						bb.screen.animating ? setTimeout(this.finishHighlight, 250) : this.setAttribute("class", this.normal)
					}, innerChildNode.finishHighlight = innerChildNode.finishHighlight.bind(innerChildNode), innerChildNode.remove = function() {
						this.style.height = "0px", this.style.opacity = "0.0", this.style["-webkit-transition-property"] = "all", this.style["-webkit-transition-duration"] = "0.1s", this.style["-webkit-transition-timing-function"] = "linear", this.style["-webkit-transform"] = "translate3d(0,0,0)", bb.scroller && bb.scroller.refresh(), window.setTimeout(this.details.performRemove, 100)
					}, innerChildNode.remove = innerChildNode.remove.bind(innerChildNode), details.performRemove = function() {
						var t = this.innerChildNode.parentNode,
							e = t.items.indexOf(this.innerChildNode);
						t.removeChild(this.innerChildNode), t.items.splice(e, 1)
					}, details.performRemove = details.performRemove.bind(details), innerChildNode.getTitle = function() {
						return this.title
					}, innerChildNode.getTitle = innerChildNode.getTitle.bind(innerChildNode), innerChildNode.getDescription = function() {
						return this.details.description.innerHTML
					}, innerChildNode.getDescription = innerChildNode.getDescription.bind(innerChildNode), innerChildNode.getAccentText = function() {
						return this.details.accentText ? this.details.accentText.innerHTML : void 0
					}, innerChildNode.getAccentText = innerChildNode.getAccentText.bind(innerChildNode), innerChildNode.getImage = function() {
						return this.img ? this.img.getAttribute("src") : void 0
					}, innerChildNode.getImage = innerChildNode.getImage.bind(innerChildNode))
				}
			}, outerElement.styleItem = outerElement.styleItem.bind(outerElement), outerElement.appendItem = function(t) {
				this.styleItem(t), this.appendChild(t), this.items.push(t);
				var e = document.createEvent("Events");
				e.initEvent("bbuilistready", !0, !0), document.dispatchEvent(e), bb.scroller && bb.scroller.refresh()
			}, outerElement.appendItem = outerElement.appendItem.bind(outerElement), outerElement.refresh = function(t) {
				if (t && t.length && !(0 >= t.length)) {
					var e, i, n = document.createElement("div");
					for (this.items = [], e = 0; t.length > e; e++) i = t[e], this.styleItem(i), this.items.push(i), n.appendChild(i);
					this.innerHTML = "", this.appendChild(n);
					var o = document.createEvent("Events");
					o.initEvent("bbuilistready", !0, !0), document.dispatchEvent(o)
				}
			}, outerElement.refresh = outerElement.refresh.bind(outerElement), outerElement.insertItemBefore = function(t, e) {
				this.styleItem(t), this.insertBefore(t, e), this.items.splice(this.items.indexOf(e), 0, t);
				var i = document.createEvent("Events");
				i.initEvent("bbuilistready", !0, !0), document.dispatchEvent(i), bb.scroller && bb.scroller.refresh()
			}, outerElement.insertItemBefore = outerElement.insertItemBefore.bind(outerElement), outerElement.getItems = function() {
				var t, e = [];
				for (t = 0; this.items.length > t; t++) e.push(this.items[t]);
				return e
			}, outerElement.getItems = outerElement.getItems.bind(outerElement), outerElement.clear = function() {
				this.items = [], outerElement.innerHTML = "", bb.scroller && bb.scroller.refresh()
			}, outerElement.clear = outerElement.clear.bind(outerElement), outerElement.show = function() {
				this.style.display = "block", bb.refresh()
			}, outerElement.show = outerElement.show.bind(outerElement), outerElement.hide = function() {
				this.style.display = "none", bb.refresh()
			}, outerElement.hide = outerElement.hide.bind(outerElement), outerElement.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, outerElement.remove = outerElement.remove.bind(outerElement), items = outerElement.querySelectorAll("[data-bb-type=item], [data-bb-type=header]");
			var item;
			for (j = 0; items.length > j; j++) item = items[j], outerElement.styleItem(item), outerElement.items.push(item)
		}
	}
}, _bb10_labelControlContainers = {
	apply: function(t) {
		var e, i, n, o, r, s, l, a, b, d, c, h = "1280x768-1280x720";
		for (bb.device.is1024x600 ? h = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? h = "1280x768-1280x720" : bb.device.is720x720 && (h = "720x720"), e = 0; t.length > e; e++) {
			if (i = t[e], n = i.querySelectorAll("[data-bb-type=row]"), n.length > 0) for (o = document.createElement("table"), o.setAttribute("class", "bb-bb10-label-control-rows"), i.insertBefore(o, n[0]), r = 0; n.length > r; r++) s = n[r], l = document.createElement("tr"), l.setAttribute("class", "bb-bb10-label-control-label-row-" + h), o.appendChild(l), a = document.createElement("td"), l.appendChild(a), b = s.querySelectorAll("[data-bb-type=label]")[0], b.setAttribute("class", "bb-bb10-label-control-label-" + h), s.removeChild(b), a.appendChild(b), l = document.createElement("tr"), o.appendChild(l), d = document.createElement("td"), l.appendChild(d), c = s.querySelectorAll("[data-bb-type=button],[data-bb-type=input],[data-bb-type=dropdown],textarea,input[type=file]")[0], c && (s.removeChild(c), d.appendChild(c)), i.removeChild(s);
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i)
		}
	}
}, _bb10_pillButtons = {
	apply: function(t) {
		var e, i;
		for (e = 0; t.length > e; e++) i = t[e], bb.pillButtons.style(i, !0)
	},
	style: function(t, e) {
		var i = "1280x768-1280x720";
		bb.device.is1024x600 ? i = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (i = "1280x768-1280x720");
		var n, o, r, s, l, a, b, d = "bb-bb10-pill-buttons-container-" + i + " bb-bb10-pill-buttons-container-" + bb.screen.controlColor,
			c = "bb-bb10-pill-button-" + i,
			h = t.querySelectorAll("[data-bb-type=pill-button]"),
			u = Math.floor(100 / h.length),
			p = 10;
		for (t.sidePadding = p, t.setAttribute("class", "bb-bb10-pill-buttons-" + i), n = document.createElement("div"), t.appendChild(n), n.setAttribute("class", d), t.selectedColor = "dark" == bb.screen.controlColor ? "#909090" : "#555555", pill = document.createElement("div"), pillInner = document.createElement("div"), pill.appendChild(pillInner), pill.setAttribute("class", c + " bb-bb10-pill-button-selected-" + i + "-" + bb.screen.controlColor + " bb-bb10-pill-buttons-pill"), pillInner.setAttribute("class", "bb-bb10-pill-button-inner-" + i + " bb-bb10-pill-button-inner-selected-" + i + "-" + bb.screen.controlColor), pill.style.opacity = "0", t.pill = pill, n.appendChild(pill), t.style["padding-left"] = p + "px", t.style["padding-right"] = p + "px", s = document.createElement("table"), t.table = s, l = document.createElement("tr"), s.tr = l, s.appendChild(l), s.setAttribute("class", "bb-bb10-pill-buttons-table"), s.style.opacity = "0", n.appendChild(s), t.styleButton = function(e) {
			return e.isSelected = !1, o = document.createElement("div"), o.innerHTML = e.innerHTML, e.innerHTML = "", e.appendChild(o), e.border = o, e.outerElement = t, "true" == e.getAttribute("data-bb-selected") && (e.isSelected = !0, t.selected = e, e.style.color = t.selectedColor), e.setAttribute("class", c), o.setAttribute("class", "bb-bb10-pill-button-inner-" + i), e.style["z-index"] = 4, e.style.width = "100%", e.dotouchstart = function() {
				if (!this.isSelected) {
					var t = this.outerElement.selected;
					t.style.color = "", "light" == bb.screen.controlColor && (this.outerElement.pill.style["background-color"] = "#DDDDDD"), this.outerElement.setPillLeft(this)
				}
			}, e.dotouchstart = e.dotouchstart.bind(e), e.dotouchend = function() {
				if (!this.isSelected) {
					var t = this.outerElement.selected;
					t.isSelected = !1, this.isSelected = !0, this.outerElement.selected = this, this.style.color = this.outerElement.selectedColor, "light" == bb.screen.controlColor && (this.outerElement.pill.style["background-color"] = "");
					var e = document.createEvent("MouseEvents");
					e.initMouseEvent("click", !0, !0), e.doClick = !0, this.dispatchEvent(e)
				}
			}, e.dotouchend = e.dotouchend.bind(e), bb.device.isRipple ? (e.onmousedown = e.dotouchstart, e.onmouseup = e.dotouchend) : (e.ontouchstart = e.dotouchstart, e.ontouchend = e.dotouchend), e.addEventListener("click", function(t) {
				t.stopPropagation()
			}, !0), e
		}, t.styleButton = t.styleButton.bind(t), b = 0; h.length > b; b++) r = h[b], r = t.styleButton(r), a = document.createElement("td"), l.appendChild(a), a.appendChild(r), a.style.width = u + "%";
		return t.recalculateSize = function() {
			var t, e = this.table.querySelectorAll("td"),
				i = parseInt(window.getComputedStyle(this).width) - this.sidePadding,
				n = Math.floor((i - 4 * e.length) / e.length) + "px";
			for (t = 0; e.length > t; t++) e[t].style.width = n;
			this.table.style.width = i + "px", this.pill.style.width = n
		}, t.recalculateSize = t.recalculateSize.bind(t), t.setPillLeft = function(t) {
			if (!t && (t = this.selected, !t)) {
				var e = this.table.querySelectorAll("[data-bb-type=pill-button]");
				e.length > 0 && (t = e[0], this.selected = t)
			}
			t && (this.pill.style["-webkit-transform"] = "translate3d(" + t.parentNode.offsetLeft + "px,0px,0px)")
		}, t.setPillLeft = t.setPillLeft.bind(t), t.initialize = function() {
			this.recalculateSize(), this.setPillLeft(), this.table.style.opacity = "1", this.table.style["-webkit-transition"] = "opacity 0.1s linear", this.pill.style.opacity = "1"
		}, t.initialize = t.initialize.bind(t), e ? (t.onbbuidomready = function() {
			this.initialize(), document.removeEventListener("bbuidomprocessed", this.onbbuidomready, !1)
		}, t.onbbuidomready = t.onbbuidomready.bind(t), document.addEventListener("bbuidomprocessed", t.onbbuidomready, !1)) : window.setTimeout(t.initialize, 0), t.doOrientationChange = function() {
			this.recalculateSize(), this.setPillLeft()
		}, t.doOrientationChange = t.doOrientationChange.bind(t), window.addEventListener("resize", t.doOrientationChange, !1), bb.windowListeners.push({
			name: "resize",
			eventHandler: t.doOrientationChange
		}), t.show = function() {
			this.style.display = "block", this.recalculateSize(), this.setPillLeft(), bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, t.remove = t.remove.bind(t), t.clear = function() {
			var t, e = this.table.querySelectorAll("td");
			for (t = 0; e.length > t; t++) this.table.tr.removeChild(e[t]);
			this.pill.style.opacity = "0"
		}, t.clear = t.clear.bind(t), t.appendButton = function(e) {
			e = t.styleButton(e);
			var i = document.createElement("td");
			this.table.tr.appendChild(i), i.appendChild(e), this.initialize()
		}, t.appendButton = t.appendButton.bind(t), t.getButtons = function() {
			for (var t = this.parentNode.querySelectorAll("[data-bb-type=pill-button]"), e = Array(), i = 0; t.length > i; i++) e[i] = t[i].firstChild.innerHTML;
			return e
		}, t.getButtons = t.getButtons.bind(t), t
	}
}, _bb10_radio = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.radio.style(t[e])
	},
	style: function(t) {
		var t, e, i, n = "1280x768-1280x720",
			o = bb.screen.controlColor,
			r = t;
		return bb.device.is1024x600 ? n = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (n = "1280x768-1280x720"), t = document.createElement("div"), t.setAttribute("class", "bb-bb10-radio-container-" + n + "-" + o), t.input = r, r.outerElement = t, r.res = n, r.style.display = "none", r.radio = t, r.parentNode && r.parentNode.insertBefore(t, r), t.appendChild(r), e = document.createElement("div"), e.setAttribute("class", "bb-bb10-radio-dot-" + n), e.highlight = "-webkit-linear-gradient(top,  rgb(" + (bb.options.shades.R + 32) + ", " + (bb.options.shades.G + 32) + ", " + (bb.options.shades.B + 32) + ") 0%, rgb(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ") 100%)", e.touchHighlight = "-webkit-linear-gradient(top,  rgba(" + (bb.options.shades.R - 64) + ", " + (bb.options.shades.G - 64) + ", " + (bb.options.shades.B - 64) + ",0.25) 0%, rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ",0.25) 100%)", r.checked && (e.style.background = e.highlight), t.dotDiv = e, t.appendChild(e), i = document.createElement("div"), i.setAttribute("class", "bb-bb10-radio-dot-center-" + n), r.checked || bb.radio.resetDot(i), e.appendChild(i), e.centerDotDiv = i, e.slideOutUp = function() {
			bb.device.is1024x600 ? (this.style.height = "0px", this.style.width = "10px", this.style.top = "9px", this.style.left = "15px") : (this.style.height = "0px", this.style.width = "20px", this.style.top = "18px", this.style.left = "30px"), bb.radio.resetDot(this.centerDotDiv), this.style["-webkit-transition-property"] = "all", this.style["-webkit-transition-duration"] = "0.1s", this.style["-webkit-transition-timing-function"] = "linear", this.style["-webkit-backface-visibility"] = "hidden", this.style["-webkit-perspective"] = 1e3, this.style["-webkit-transform"] = "translate3d(0,0,0)"
		}, e.slideOutUp = e.slideOutUp.bind(e), e.slideOutDown = function() {
			bb.device.is1024x600 ? (this.style.height = "0px", this.style.width = "10px", this.style.top = "30px", this.style.left = "15px") : (this.style.height = "0px", this.style.width = "20px", this.style.top = "60px", this.style.left = "30px"), bb.radio.resetDot(this.centerDotDiv), this.style["-webkit-transition-property"] = "all", this.style["-webkit-transition-duration"] = "0.1s", this.style["-webkit-transition-timing-function"] = "linear", this.style["-webkit-backface-visibility"] = "hidden", this.style["-webkit-perspective"] = 1e3, this.style["-webkit-transform"] = "translate3d(0,0,0)"
		}, e.slideOutDown = e.slideOutDown.bind(e), e.slideIn = function() {
			bb.device.is1024x600 ? (this.style.height = "20px", this.style.width = "20px", this.style.top = "10px", this.style.left = "9px", this.centerDotDiv.style.height = "10px", this.centerDotDiv.style.width = "10px", this.centerDotDiv.style.top = "5px", this.centerDotDiv.style.left = "5px") : (this.style.height = "40px", this.style.width = "40px", this.style.top = "19px", this.style.left = "19px", this.centerDotDiv.style.height = "18px", this.centerDotDiv.style.width = "18px", this.centerDotDiv.style.top = "11px", this.centerDotDiv.style.left = "11px"), this.style["-webkit-transition-property"] = "all", this.style["-webkit-transition-duration"] = "0.1s", this.style["-webkit-transition-timing-function"] = "ease-in", this.style["-webkit-backface-visibility"] = "hidden", this.style["-webkit-perspective"] = 1e3, this.style["-webkit-transform"] = "translate3d(0,0,0)", this.centerDotDiv.style["-webkit-transition-delay"] = "0.1s", this.centerDotDiv.style["-webkit-transition-property"] = "all", this.centerDotDiv.style["-webkit-transition-duration"] = "0.1s", this.centerDotDiv.style["-webkit-transition-timing-function"] = "ease-in", this.centerDotDiv.style["-webkit-perspective"] = 1e3, this.centerDotDiv.style["-webkit-transform"] = "translate3d(0,0,0)"
		}, e.slideIn = e.slideIn.bind(e), t.selectedRadio = void 0, t.slideFromTop = !0, t.ontouchstart = function() {
			this.input.checked || (this.slideFromTop = !0, this.selectedRadio = this.getCurrentlyChecked(), this.selectedRadio && this.getTop(this.selectedRadio.radio) >= this.getTop(this) && (this.slideFromTop = !1), this.dotDiv.style["-webkit-transition"] = "none", bb.device.is1024x600 ? (this.dotDiv.style.height = "20px", this.dotDiv.style.width = "20px", this.dotDiv.style.top = "10px", this.dotDiv.style.left = "9px") : (this.dotDiv.style.height = "40px", this.dotDiv.style.width = "40px", this.dotDiv.style.top = "19px", this.dotDiv.style.left = "19px"), bb.radio.resetDot(this.dotDiv.centerDotDiv), this.dotDiv.style.background = this.dotDiv.touchHighlight)
		}, t.ontouchend = function() {
			this.input.checked || (this.dotDiv.style["-webkit-transition"] = "none", bb.device.is1024x600 ? (this.dotDiv.style.height = "0px", this.dotDiv.style.width = "9px", this.dotDiv.style.left = "16px") : (this.dotDiv.style.height = "0px", this.dotDiv.style.width = "18px", this.dotDiv.style.left = "32px"), this.dotDiv.style.top = this.slideFromTop ? bb.device.is1024x600 ? "9px" : "18px" : bb.device.is1024x600 ? "30px" : "60px", window.setTimeout(this.doclick, 0))
		}, t.doclick = function() {
			if (!this.input.checked && !this.input.disabled) {
				var t = document.createEvent("HTMLEvents");
				t.initEvent("change", !1, !0), this.dotDiv.style.background = this.dotDiv.highlight, this.dotDiv.slideIn(), this.selectedRadio && (this.selectedRadio.removeAttribute("checked"), this.selectedRadio.dispatchEvent(t), this.slideFromTop ? this.selectedRadio.radio.dotDiv.slideOutDown() : this.selectedRadio.radio.dotDiv.slideOutUp()), this.input.setAttribute("checked", "true"), this.input.dispatchEvent(t)
			}
		}, t.doclick = t.doclick.bind(t), t.getCurrentlyChecked = function() {
			var t = document.querySelectorAll("input[type=radio][name=" + this.input.name + "][checked=true]");
			return t.length > 0 ? t[0] : void 0
		}, t.getCurrentlyChecked = t.getCurrentlyChecked.bind(t), t.getTop = function(t) {
			for (var e = 0; t;) e += t.offsetTop, t = t.offsetParent;
			return e
		}, r.setChecked = function() {
			this.checked || (this.slideFromTop = !0, this.outerElement.selectedRadio = this.outerElement.getCurrentlyChecked(), this.outerElement.selectedRadio && this.outerElement.getTop(this.outerElement.selectedRadio.radio) >= this.outerElement.getTop(this.outerElement) && (this.outerElement.slideFromTop = !1), this.outerElement.dotDiv.style["-webkit-transition"] = "none", bb.device.is1024x600 ? (this.outerElement.dotDiv.style.height = "0px", this.outerElement.dotDiv.style.width = "9px", this.outerElement.dotDiv.style.left = "16px") : (this.outerElement.dotDiv.style.height = "0px", this.outerElement.dotDiv.style.width = "18px", this.outerElement.dotDiv.style.left = "32px"), this.outerElement.dotDiv.style.top = this.outerElement.slideFromTop ? bb.device.is1024x600 ? "9px" : "18px" : bb.device.is1024x600 ? "30px" : "60px", window.setTimeout(this.outerElement.doclick, 0))
		}, r.setChecked = r.setChecked.bind(r), r.getChecked = function() {
			return this.checked
		}, r.setChecked = r.setChecked.bind(r), r.enable = function() {
			this.disabled && (this.disabled = !1, this.outerElement.dotDiv.setAttribute("class", "bb-bb10-radio-dot-" + this.res))
		}, r.enable = r.enable.bind(r), r.disable = function() {
			this.disabled || (this.disabled = !0, this.outerElement.dotDiv.setAttribute("class", "bb-bb10-radio-dot-" + this.res + "-disabled"))
		}, r.disable = r.disable.bind(r), r.isEnabled = function() {
			return !this.disabled
		}, r.isEnabled = r.isEnabled.bind(r), r.show = function() {
			this.outerElement.style.display = "block", bb.refresh()
		}, r.show = r.show.bind(r), r.hide = function() {
			this.outerElement.style.display = "none", bb.refresh()
		}, r.hide = r.hide.bind(r), r.remove = function() {
			this.outerElement.parentNode.removeChild(this.outerElement), bb.refresh()
		}, r.remove = r.remove.bind(r), t
	},
	resetDot: function(t) {
		t.style["-webkit-transition"] = "none", bb.device.is1024x600 ? (t.style.height = "0px", t.style.width = "0px", t.style.top = "10px", t.style.left = "9px") : (t.style.height = "0px", t.style.width = "0px", t.style.top = "20px", t.style.left = "20px")
	},
	enableGroup: function(t) {
		var e = document.getElementsByName(t);
		for (i = 0; e.length > i; i++) "radio" === e[i].type && e[i].enable()
	},
	disableGroup: function(t) {
		var e = document.getElementsByName(t);
		for (i = 0; e.length > i; i++) "radio" === e[i].type && e[i].disable()
	}
}, _bb10_roundPanel = {
	apply: function(t) {
		if (bb.device.isBB10) {
			var e, i, n, o, r, s = "1280x768-1280x720",
				l = bb.screen.listColor;
			for (bb.device.is1024x600 ? s = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (s = "1280x768-1280x720"), e = 0; t.length > e; e++) {
				for (n = t[e], n.setAttribute("class", "bb-bb10-round-panel-" + s), o = n.querySelectorAll("[data-bb-type=panel-header]"), i = 0; o.length > i; i++) r = o[i], r.setAttribute("class", "bb-bb10-panel-header-" + s + " bb-bb10-panel-header-" + s + "-" + l), r.style["border-bottom-color"] = bb.options.shades.darkOutline;
				n.show = function() {
					this.style.display = "block", bb.refresh()
				}, n.show = n.show.bind(n), n.hide = function() {
					this.style.display = "none", bb.refresh()
				}, n.hide = n.hide.bind(n), n.remove = function() {
					this.parentNode.removeChild(this), bb.refresh()
				}, n.remove = n.remove.bind(n)
			}
		} else for (var e = 0; t.length > e; e++) {
				var n = t[e];
				n.setAttribute("class", "bb-playbook-round-panel");
				for (var o = n.querySelectorAll("[data-bb-type=panel-header]"), i = 0; o.length > i; i++) bb.device.isHiRes ? o[i].setAttribute("class", "bb-hires-panel-header") : o[i].setAttribute("class", "bb-lowres-panel-header");
				n.show = function() {
					this.style.display = "block", bb.refresh()
				}, n.show = n.show.bind(n), n.hide = function() {
					this.style.display = "none", bb.refresh()
				}, n.hide = n.hide.bind(n), n.remove = function() {
					this.parentNode.removeChild(this), bb.refresh()
				}, n.remove = n.remove.bind(n)
		}
	}
}, _bb10_slider = {
	apply: function(t) {
		var e, i, n, o = bb.screen.controlColor,
			n = "1280x768-1280x720";
		for (bb.device.is1024x600 ? n = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (n = "1280x768-1280x720"), e = 0; t.length > e; e++) i = t[e], outerElement = document.createElement("div"), outerElement.range = i, i.parentNode.insertBefore(outerElement, i), i.style.display = "none", outerElement.appendChild(i), outerElement.minValue = i.hasAttribute("min") ? parseInt(i.getAttribute("min")) : 0, outerElement.maxValue = i.hasAttribute("max") ? parseInt(i.getAttribute("max")) : 0, outerElement.value = i.hasAttribute("value") ? parseInt(i.getAttribute("value")) : 0, outerElement.step = i.hasAttribute("step") ? parseInt(i.getAttribute("step")) : 0, outerElement.isActivated = !1, outerElement.initialXPos = 0, outerElement.currentXPos = 0, outerElement.transientXPos = 0, outerElement.className = "bb-bb10-slider-" + n, outerElement.outer = document.createElement("div"), outerElement.outer.setAttribute("class", "outer bb-bb10-slider-outer-" + o), outerElement.appendChild(outerElement.outer), outerElement.fill = document.createElement("div"), outerElement.fill.className = "fill", outerElement.fill.active = "-webkit-linear-gradient(top, rgb(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ") 0%, rgb(" + (bb.options.shades.R + 16) + ", " + (bb.options.shades.G + 16) + ", " + (bb.options.shades.B + 16) + ") 100%)", outerElement.fill.dormant = "-webkit-linear-gradient(top, " + bb.options.highlightColor + " 0%, " + bb.options.shades.darkHighlight + " 100%)", outerElement.fill.style.background = outerElement.fill.dormant, outerElement.outer.appendChild(outerElement.fill), outerElement.inner = document.createElement("div"), outerElement.inner.className = "inner", outerElement.inner.outerElement = outerElement, outerElement.outer.appendChild(outerElement.inner), outerElement.halo = document.createElement("div"), outerElement.halo.className = "halo", outerElement.halo.style.background = "-webkit-gradient(radial, 50% 50%, 0, 50% 50%, 43, from(rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ", 0.15)), color-stop(0.8, rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ", 0.15)), to(rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ", 0.7)))", outerElement.inner.appendChild(outerElement.halo), outerElement.indicator = document.createElement("div"), outerElement.indicator.setAttribute("class", "indicator bb-bb10-slider-indicator-" + o), outerElement.inner.appendChild(outerElement.indicator), i.outerElement = outerElement, i.setValue = function(t) {
				var e, i = 0;
				t && (parseInt(this.outerElement.minValue) > t || t > parseInt(this.outerElement.maxValue)) || (t && (this.outerElement.value = t, this.value = t, e = document.createEvent("HTMLEvents"), e.initEvent("change", !1, !0), this.dispatchEvent(e)), i = this.outerElement.value == this.outerElement.maxValue ? 1 : this.outerElement.value / (parseInt(this.outerElement.maxValue) + parseInt(this.outerElement.minValue)), this.outerElement.currentXPos = Math.floor(parseInt(window.getComputedStyle(this.outerElement.outer).width) * i), this.outerElement.fill.style.width = this.outerElement.currentXPos + "px", this.outerElement.inner.style["-webkit-transform"] = "translate3d(" + this.outerElement.currentXPos + "px,0px,0px)")
		}, i.setValue = i.setValue.bind(i), window.setTimeout(i.setValue, 0), outerElement.inner.animateBegin = function(t) {
			this.outerElement.isActivated === !1 && (this.outerElement.isActivated = !0, this.outerElement.initialXPos = t.touches[0].pageX, this.outerElement.halo.style["-webkit-transform"] = "scale(1)", this.outerElement.halo.style["-webkit-animation-name"] = "explode", this.outerElement.indicator.setAttribute("class", "indicator bb-bb10-slider-indicator-" + o + " indicator-hover-" + o), this.outerElement.indicator.style.background = "-webkit-linear-gradient(top, rgb(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ") 0%, rgb(" + (bb.options.shades.R + 16) + ", " + (bb.options.shades.G + 16) + ", " + (bb.options.shades.B + 16) + ") 100%)", this.outerElement.fill.style.background = this.outerElement.fill.active)
		}, outerElement.inner.animateBegin = outerElement.inner.animateBegin.bind(outerElement.inner), outerElement.inner.addEventListener("touchstart", outerElement.inner.animateBegin, !1), outerElement.inner.animateEnd = function() {
			this.outerElement.isActivated === !0 && (this.outerElement.isActivated = !1, this.outerElement.currentXPos = this.outerElement.transientXPos, this.outerElement.value = parseInt(this.outerElement.range.value), this.outerElement.halo.style["-webkit-transform"] = "scale(0)", this.outerElement.halo.style["-webkit-animation-name"] = "implode", this.outerElement.indicator.setAttribute("class", "indicator bb-bb10-slider-indicator-" + o), this.outerElement.indicator.style.background = "", this.outerElement.fill.style.background = this.outerElement.fill.dormant)
		}, outerElement.inner.animateEnd = outerElement.inner.animateEnd.bind(outerElement.inner), outerElement.inner.addEventListener("touchend", outerElement.inner.animateEnd, !1), outerElement.moveSlider = function(t) {
			this.isActivated === !0 && (t.stopPropagation(), t.preventDefault(), this.transientXPos = this.currentXPos + t.touches[0].pageX - this.initialXPos, this.transientXPos = Math.max(0, Math.min(this.transientXPos, parseInt(window.getComputedStyle(this.outer).width))), this.notifyUpdated(), this.fill.style.width = this.transientXPos + "px", this.inner.style["-webkit-transform"] = "translate3d(" + this.transientXPos + "px,0px,0px)")
		}, outerElement.moveSlider = outerElement.moveSlider.bind(outerElement), outerElement.notifyUpdated = function() {
			var t = this.transientXPos / parseInt(window.getComputedStyle(this.outer).width),
				e = Math.ceil((parseInt(this.minValue) + parseInt(this.maxValue)) * t);
			if (Math.abs(e - parseInt(this.range.value)) > this.step) {
				this.range.value = e;
				var i = document.createEvent("HTMLEvents");
				i.initEvent("change", !1, !0), this.range.dispatchEvent(i)
			}
		}, outerElement.notifyUpdated = outerElement.notifyUpdated.bind(outerElement), outerElement.doOrientationChange = function() {
			window.setTimeout(outerElement.range.setValue, 0)
		}, outerElement.doOrientationChange = outerElement.doOrientationChange.bind(outerElement), document.addEventListener("touchmove", outerElement.moveSlider, !1), bb.documentListeners.push({
			name: "touchmove",
			eventHandler: outerElement.moveSlider
		}), document.addEventListener("touchend", outerElement.inner.animateEnd, !1), bb.documentListeners.push({
			name: "touchend",
			eventHandler: outerElement.inner.animateEnd
		}), window.addEventListener("resize", outerElement.doOrientationChange, !1), bb.windowListeners.push({
			name: "resize",
			eventHandler: outerElement.doOrientationChange
		})
	}
}, _bb10_textInput = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.textInput.style(t[e])
	},
	style: function(t) {
		var e = "1280x768-1280x720",
			i = "",
			n = document.createElement("div");
		if (bb.device.is1024x600 ? e = "1024x600" : bb.device.is1280x768 || bb.device.is1280x720 ? e = "1280x768-1280x720" : bb.device.is720x720 && (e = "720x720"), t.hasAttribute("class") && (i = t.getAttribute("class")), t.parentNode && t.parentNode.insertBefore(n, t), n.appendChild(t), n.input = t, n.setAttribute("data-bb-type", "input"), n.normal = "bb-bb10-input-container bb-bb10-input-container-" + e, t.normal = i + " bb-bb10-input bb-bb10-input-" + e, t.focused = i + " bb-bb10-input bb-bb10-input-focused-" + e, t.disabled ? t.setAttribute("class", t.normal + " bb-bb10-input-disabled") : t.setAttribute("class", t.normal), t.isFocused = !1, t.clickCount = 0, t.container = n, t.clearBtn = "none" != t.getAttribute("data-bb-clear"), t.hasClearBtn = !1, t.type) {
			var o = t.type.toLowerCase();
			("date" == o || "time" == o || "datetime" == o || "month" == o || "datetime-local" == o || "color" == o || "search" == o) && (t.clearBtn = !1)
		}
		return t.disabled ? n.setAttribute("class", n.normal + " bb-bb10-input-container-disabled") : n.setAttribute("class", n.normal), t.doFocus = function() {
			0 == this.readOnly && (this.container.setAttribute("class", this.container.normal + " bb-bb10-input-cancel-button bb-bb10-input-container-focused-" + e), this.clearBtn && this.value ? (this.setAttribute("class", this.focused), this.hasClearBtn = !0) : (this.setAttribute("class", this.normal), this.hasClearBtn = !1), this.container.style["border-color"] = bb.options.highlightColor, this.isFocused = !0, this.clickCount = 0, bb.screen.focusedInput = this)
		}, t.doFocus = t.doFocus.bind(t), t.addEventListener("focus", t.doFocus, !1), t.doBlur = function() {
			this.container.setAttribute("class", this.container.normal), this.clearBtn && this.setAttribute("class", this.normal), this.container.style["border-color"] = "", this.isFocused = !1, bb.screen.focusedInput = null
		}, t.doBlur = t.doBlur.bind(t), t.addEventListener("blur", t.doBlur, !1), t.updateClearButton = function() {
			this.clearBtn && (0 == this.value.length && this.hasClearBtn || this.value.length > 0 && !this.hasClearBtn) && t.doFocus()
		}, t.updateClearButton = t.updateClearButton.bind(t), t.addEventListener("input", t.updateClearButton, !1), t.clearBtn && (t.container.ontouchstart = function(e) {
			e.target == this && (e.preventDefault(), e.stopPropagation(), this.input.value = "", t.doFocus())
		}), t.show = function() {
			this.container.style.display = ""
		}, t.show = t.show.bind(t), t.hide = function() {
			this.container.style.display = "none"
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.container.parentNode && this.container.parentNode.removeChild(this.container)
		}, t.remove = t.remove.bind(t), t.enable = function() {
			this.disabled && (this.disabled = !1, this.container.setAttribute("class", this.container.normal), this.setAttribute("class", this.normal))
		}, t.enable = t.enable.bind(t), t.disable = function() {
			this.disabled || (this.disabled = !0, this.container.setAttribute("class", this.container.normal + " bb-bb10-input-container-disabled"), this.setAttribute("class", this.normal + " bb-bb10-input-disabled"))
		}, t.disable = t.disable.bind(t), n
	}
}, _bb10_toggle = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.toggle.style(t[e], !0)
	},
	style: function(outerElement, offdom) {
		var res = "1280x768-1280x720",
			table, tr, td, color = bb.screen.controlColor;
		return bb.device.is1024x600 ? res = "1024x600" : (bb.device.is1280x768 || bb.device.is1280x720) && (res = "1280x768-1280x720"), outerElement.checked = !1, outerElement.enabled = !0, outerElement.buffer = bb.device.is1024x600 ? 35 : 70, outerElement.isActivated = !1, outerElement.initialXPos = 0, outerElement.currentXPos = 0, outerElement.transientXPos = 0, outerElement.movedWithSlider = !1, outerElement.startValue = !1, outerElement.hasAttribute("data-bb-disabled") && (outerElement.enabled = !("true" == outerElement.getAttribute("data-bb-disabled").toLowerCase())), outerElement.className = "bb-bb10-toggle-" + res, outerElement.outer = document.createElement("div"), outerElement.normal = outerElement.enabled ? "outer bb-bb10-toggle-outer-" + color + " bb-bb10-toggle-outer-enabled-" + color : "outer bb-bb10-toggle-outer-" + color + " bb-bb10-toggle-outer-disabled", outerElement.outer.setAttribute("class", outerElement.normal), outerElement.appendChild(outerElement.outer), outerElement.fill = document.createElement("div"), outerElement.fill.className = "fill", outerElement.fill.style.background = outerElement.fill.dormant, outerElement.outer.appendChild(outerElement.fill), outerElement.inner = document.createElement("div"), outerElement.inner.className = "inner", outerElement.inner.outerElement = outerElement, outerElement.fill.appendChild(outerElement.inner), table = document.createElement("table"), table.className = "table", tr = document.createElement("tr"), table.appendChild(tr), outerElement.inner.appendChild(table), td = document.createElement("td"), td.className = "left", tr.appendChild(td), outerElement.yes = document.createElement("div"), outerElement.yes.className = "yes", outerElement.yes.innerHTML = outerElement.getAttribute("data-bb-on"), td.appendChild(outerElement.yes), td = document.createElement("td"), td.className = "center", tr.appendChild(td), td = document.createElement("td"), td.className = "right", tr.appendChild(td), outerElement.no = document.createElement("div"), outerElement.no.className = "no", outerElement.no.innerHTML = outerElement.getAttribute("data-bb-off"), td.appendChild(outerElement.no), outerElement.container = document.createElement("div"), outerElement.container.className = "indicator-container", outerElement.appendChild(outerElement.container), outerElement.halo = document.createElement("div"), outerElement.halo.className = "halo", outerElement.halo.style.background = "-webkit-gradient(radial, 50% 50%, 0, 50% 50%, 43, from(rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ", 0.15)), color-stop(0.8, rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ", 0.15)), to(rgba(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ", 0.7)))", outerElement.container.appendChild(outerElement.halo), outerElement.indicator = document.createElement("div"), outerElement.indicator.normal = outerElement.enabled ? "indicator bb-bb10-toggle-indicator-enabled-" + color : "indicator bb-bb10-toggle-indicator-disabled-" + color, outerElement.indicator.setAttribute("class", outerElement.indicator.normal), outerElement.container.appendChild(outerElement.indicator), outerElement.hasAttribute("onchange") && (outerElement.onchangeEval = outerElement.getAttribute("onchange"), outerElement.onchange = function() {
			eval(this.onchangeEval)
		}), outerElement.inner.animateBegin = function(t) {
			this.outerElement.enabled && this.outerElement.isActivated === !1 && (this.outerElement.startValue = this.outerElement.checked, this.outerElement.movedWithSlider = !1, this.outerElement.isActivated = !0, this.outerElement.initialXPos = t.touches[0].pageX, this.outerElement.halo.style["-webkit-transform"] = "scale(1)", this.outerElement.halo.style["-webkit-animation-name"] = "explode", this.outerElement.indicator.setAttribute("class", "indicator bb-bb10-toggle-indicator-enabled-" + color + " indicator-hover-" + color), this.outerElement.indicator.style.background = "-webkit-linear-gradient(top, rgb(" + bb.options.shades.R + ", " + bb.options.shades.G + ", " + bb.options.shades.B + ") 0%, rgb(" + (bb.options.shades.R + 16) + ", " + (bb.options.shades.G + 16) + ", " + (bb.options.shades.B + 16) + ") 100%)")
		}, outerElement.inner.animateBegin = outerElement.inner.animateBegin.bind(outerElement.inner), outerElement.inner.addEventListener("touchstart", outerElement.inner.animateBegin, !1), outerElement.container.addEventListener("touchstart", outerElement.inner.animateBegin, !1), outerElement.inner.animateEnd = function() {
			this.outerElement.enabled && this.outerElement.isActivated === !0 && (this.outerElement.isActivated = !1, this.outerElement.currentXPos = this.outerElement.transientXPos, this.outerElement.halo.style["-webkit-transform"] = "scale(0)", this.outerElement.halo.style["-webkit-animation-name"] = "implode", this.outerElement.indicator.setAttribute("class", "indicator bb-bb10-toggle-indicator-enabled-" + color), this.outerElement.indicator.style.background = "", this.outerElement.positionButton(), this.outerElement.movedWithSlider && this.outerElement.startValue != this.outerElement.checked && this.outerElement.onchange && this.outerElement.onchange())
		}, outerElement.inner.animateEnd = outerElement.inner.animateEnd.bind(outerElement.inner), outerElement.addEventListener("touchend", outerElement.inner.animateEnd, !1), outerElement.moveToggle = function(t) {
			if (this.enabled && this.isActivated === !0) {
				this.movedWithSlider = !0, t.stopPropagation(), t.preventDefault();
				var e, i = parseInt(window.getComputedStyle(this.fill).width) - this.buffer;
				this.transientXPos = this.currentXPos + t.touches[0].pageX - this.initialXPos, this.transientXPos = Math.max(0, Math.min(this.transientXPos, i)), this.inner.style["-webkit-transform"] = "translate3d(" + this.transientXPos + "px,0px,0px)", this.container.style["-webkit-transform"] = "translate3d(" + this.transientXPos + "px,0px,0px)", e = this.transientXPos / i, this.checked = e > .5
			}
		}, outerElement.moveToggle = outerElement.moveToggle.bind(outerElement), outerElement.doClick = function() {
			this.enabled && (this.movedWithSlider || this.setChecked(!this.checked))
		}, outerElement.doClick = outerElement.doClick.bind(outerElement), outerElement.addEventListener("click", outerElement.doClick, !1), outerElement.positionButton = function() {
			var t = this.checked ? parseInt(window.getComputedStyle(this.fill).width) - this.buffer : 0;
			this.inner.style["-webkit-transform"] = "translate3d(" + t + "px,0px,0px)", this.inner.style["-webkit-transition-duration"] = "0.1s", this.inner.style["-webkit-transition-timing-function"] = "linear", this.inner.addEventListener("webkitTransitionEnd", function() {
				this.style["-webkit-transition"] = ""
			}), this.container.style["-webkit-transform"] = "translate3d(" + t + "px,0px,0px)", this.container.style["-webkit-transition-duration"] = "0.1s", this.container.style["-webkit-transition-timing-function"] = "linear", this.container.addEventListener("webkitTransitionEnd", function() {
				this.style["-webkit-transition"] = ""
			}), this.indicator.style["background-image"] = this.checked && this.enabled ? "-webkit-linear-gradient(top, " + bb.options.highlightColor + " 0%, " + bb.options.shades.darkHighlight + " 100%)" : "", this.currentXPos = t
		}, outerElement.positionButton = outerElement.positionButton.bind(outerElement), outerElement.setChecked = function(t) {
			t != this.checked && (this.checked = t, this.onchange && this.onchange()), this.positionButton()
		}, outerElement.setChecked = outerElement.setChecked.bind(outerElement), outerElement.getChecked = function() {
			return this.checked
		}, outerElement.getChecked = outerElement.getChecked.bind(outerElement), outerElement.show = function() {
			this.style.display = "block", bb.refresh()
		}, outerElement.show = outerElement.show.bind(outerElement), outerElement.hide = function() {
			this.style.display = "none", bb.refresh()
		}, outerElement.hide = outerElement.hide.bind(outerElement), outerElement.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, outerElement.remove = outerElement.remove.bind(outerElement), outerElement.setOnCaption = function(t) {
			this.yes.innerHTML = t
		}, outerElement.setOnCaption = outerElement.setOnCaption.bind(outerElement), outerElement.setOffCaption = function(t) {
			this.no.innerHTML = t
		}, outerElement.setOffCaption = outerElement.setOffCaption.bind(outerElement), outerElement.getOnCaption = function() {
			return this.yes.innerHTML
		}, outerElement.getOnCaption = outerElement.getOnCaption.bind(outerElement), outerElement.getOffCaption = function() {
			return this.no.innerHTML
		}, outerElement.getOffCaption = outerElement.getOffCaption.bind(outerElement), outerElement.enable = function() {
			this.enabled || (this.enabled = !0, this.indicator.normal = "indicator bb-bb10-toggle-indicator-enabled-" + color, this.indicator.setAttribute("class", this.indicator.normal), this.normal = "outer bb-bb10-toggle-outer-" + color + " bb-bb10-toggle-outer-enabled-" + color, this.outer.setAttribute("class", this.normal), this.positionButton())
		}, outerElement.enable = outerElement.enable.bind(outerElement), outerElement.disable = function() {
			this.enabled && (this.enabled = !1, this.indicator.normal = "indicator bb-bb10-toggle-indicator-disabled-" + color, this.indicator.setAttribute("class", this.indicator.normal), this.normal = "outer bb-bb10-toggle-outer-" + color + " bb-bb10-toggle-outer-disabled", this.outer.setAttribute("class", this.normal), this.positionButton())
		}, outerElement.disable = outerElement.disable.bind(outerElement), outerElement.checked = outerElement.hasAttribute("data-bb-checked") ? "true" == outerElement.getAttribute("data-bb-checked").toLowerCase() : !1, offdom ? (outerElement.onbbuidomready = function() {
			this.positionButton(), document.removeEventListener("bbuidomready", this.onbbuidomready, !1)
		}, outerElement.onbbuidomready = outerElement.onbbuidomready.bind(outerElement), document.addEventListener("bbuidomready", outerElement.onbbuidomready, !1)) : setTimeout(outerElement.positionButton, 0), document.addEventListener("touchmove", outerElement.moveToggle, !1), bb.documentListeners.push({
			name: "touchmove",
			eventHandler: outerElement.moveToggle
		}), document.addEventListener("touchend", outerElement.inner.animateEnd, !1), bb.documentListeners.push({
			name: "touchend",
			eventHandler: outerElement.inner.animateEnd
		}), outerElement
	}
}, _bb5_button = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e],
				n = i.innerHTML,
				o = "bb5-button",
				r = "bb5-button-highlight";
			i.innerHTML = "", i.setAttribute("class", "bb-bb5-button");
			var s = document.createElement("a");
			s.setAttribute("class", o), s.setAttribute("x-blackberry-focusable", "true"), s.setAttribute("onmouseover", "this.setAttribute('class','" + r + "')"), s.setAttribute("onmouseout", "this.setAttribute('class','" + o + "')"), i.appendChild(s);
			var l = document.createElement("span");
			l.innerHTML = n, s.appendChild(l)
		}
	}
}, _bb5_labelControlContainers = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e];
			i.setAttribute("class", "bb-label-control-horizontal-row");
			for (var n = i.querySelectorAll("[data-bb-type=label]"), o = 0; n.length > o; o++) {
				var r = n[o];
				r.setAttribute("class", "bb-label")
			}
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i)
		}
	}
}, _bb5_pillButtons = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e];
			i.setAttribute("class", "bb-pill-buttons");
			for (var n = i.querySelectorAll("[data-bb-type=pill-button]"), o = 0; n.length > o; o++) {
				var r = n[o];
				r.setAttribute("x-blackberry-focusable", "true");
				var s = r.innerHTML;
				r.innerHTML = "<span>" + s + "</span>", 0 === o ? r.setAttribute("class", "buttonLeft") : o == n.length - 1 ? r.setAttribute("class", "buttonRight") : r.setAttribute("class", "buttonMiddle"), r.hasAttribute("data-bb-selected") && "true" == r.getAttribute("data-bb-selected").toLowerCase() && bb.pillButtons.selectButton(r), r.onmousedown = function() {
					bb.pillButtons.selectButton(this);
					for (var t = this.parentNode.querySelectorAll("[data-bb-type=pill-button]"), e = 0; t.length > e; e++) {
						var i = t[e];
						i != this && bb.pillButtons.deSelectButton(i)
					}
				}
			}
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i)
		}
	}
}, _bbPlayBook_activityIndicator = {
	apply: function(t) {
		var e, i, n, o, r, s, l, a = bb.screen.controlColor;
		if (t.length > 0) {
			var b, d, c = document.createElement("canvas");
			c.setAttribute("height", "184px"), c.setAttribute("width", "184px"), b = c.getContext("2d"), b.beginPath(), b.moveTo(92, 154), b.arcTo(154, 154, 154, 92, 62), b.arcTo(154, 30, 92, 30, 62), b.arcTo(81, 30, 81, 20, 10), b.arcTo(81, 10, 91, 10, 10), b.arcTo(173, 10, 173, 92, 82), b.arcTo(173, 173, 92, 173, 82), b.arcTo(81, 173, 81, 164, 10), b.arcTo(81, 154, 92, 154, 10), b.closePath(), b.strokeStyle = "transparent", b.stroke();
			var d = b.createLinearGradient(0, 50, 0, 154);
			d.addColorStop(0, "transparent"), d.addColorStop(1, bb.options.highlightColor), b.fillStyle = d, b.fill(), l = c.toDataURL()
		}
		for (e = 0; t.length > e; e++) return i = t[e], r = i.hasAttribute("data-bb-size") ? i.getAttribute("data-bb-size").toLowerCase() : "medium", "large" == r ? s = "93px" : "small" == r ? s = "21px" : (r = "medium", s = "46px"), i.style.width = s, o = document.createElement("div"), o.setAttribute("class", "bb-pb-activity-margin bb-pb-activity-" + r + " bb-activity-" + a), i.appendChild(o), n = document.createElement("div"), n.setAttribute("class", "bb-pb-activity-" + r), n.style["background-image"] = 'url("' + l + '")', o.appendChild(n), n.style["-webkit-animation-name"] = "activity-rotate", n.style["-webkit-animation-duration"] = "0.8s", n.style["-webkit-animation-iteration-count"] = "infinite", n.style["-webkit-animation-timing-function"] = "linear", i.show = function() {
				this.style.display = "", bb.refresh()
		}, i.show = i.show.bind(i), i.hide = function() {
			this.style.display = "none", bb.refresh()
		}, i.hide = i.hide.bind(i), i.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, i.remove = i.remove.bind(i), i
	}
}, _bbPlayBook_button = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.button.style(t[e])
	},
	style: function(t) {
		var e, i, n, o, r = document.createElement("div"),
			s = document.createElement("div");
		if (disabled = t.hasAttribute("data-bb-disabled"), normal = "bb-pb-button", highlight = "bb-pb-button-container bb-pb-button-container-" + bb.screen.controlColor + " pb-button-" + bb.screen.controlColor + "-highlight", outerNormal = "bb-pb-button-container bb-pb-button-container-" + bb.screen.controlColor + " bb-pb-button-font-" + bb.screen.controlColor, outerNormalWithoutImageOnly = outerNormal, t.isImageOnly = !1, t.enabled = !disabled, n = t.innerHTML, r.innerHTML = n, t.innerHTML = "", t.stretched = !1, t.captionElement = r, t.appendChild(s), t.innerElement = s, t.hasAttribute("data-bb-style")) {
			var l = t.getAttribute("data-bb-style");
			"stretch" == l && (t.stretched = !0, outerNormal += " bb-pb-button-stretch", highlight += " bb-pb-button-stretch")
		}
		return i = t.hasAttribute("data-bb-img") ? t.getAttribute("data-bb-img") : void 0, i && (n && 0 != n.length ? (r.setAttribute("class", "bb-pb-button-caption-with-image"), o = document.createElement("div"), t.imgElement = o, o.setAttribute("class", "bb-pb-button-image"), o.style["background-image"] = 'url("' + i + '")', s.appendChild(o)) : (outerNormal += " bb-pb-button-container-image-only", highlight += " bb-pb-button-container-image-only", r.style["background-image"] = 'url("' + i + '")', t.style["line-height"] = "0px", r.setAttribute("class", "bb-pb-button-caption-with-image-only"), t.isImageOnly = !0)), s.appendChild(r), e = normal + " bb-pb-button-disabled-" + bb.screen.controlColor, normal = normal + " bb-pb-button-" + bb.screen.controlColor, disabled ? (t.removeAttribute("data-bb-disabled"), s.setAttribute("class", e)) : s.setAttribute("class", normal), t.setAttribute("class", outerNormal), t.outerNormal = outerNormal, t.highlight = highlight, t.outerNormalWithoutImageOnly = outerNormalWithoutImageOnly, t.innerElement = s, s.normal = normal, s.disabledStyle = e, disabled || (t.ontouchstart = function() {
			this.setAttribute("class", this.highlight)
		}, t.ontouchend = function() {
			this.setAttribute("class", this.outerNormal), this.style.color = ""
		}), t.trappedClick = t.onclick, t.onclick = void 0, null !== t.trappedClick && t.addEventListener("click", function() {
			this.enabled && this.trappedClick()
		}, !1), t.setCaption = function(t) {
			if (this.isImageOnly && t.length > 0) {
				this.captionElement.setAttribute("class", "bb-pb-button-caption-with-image");
				var e = document.createElement("div");
				this.imgElement = e, e.setAttribute("class", "bb-pb-button-image"), e.style["background-image"] = this.captionElement.style["background-image"], this.innerElement.removeChild(this.captionElement), this.innerElement.appendChild(e), this.innerElement.appendChild(this.captionElement), this.setAttribute("class", this.outerNormalWithoutImageOnly), this.captionElement.style["background-image"] = "", this.isImageOnly = !1
			} else 0 == t.length && this.imgElement && (this.captionElement.setAttribute("class", "bb-pb-button-caption-with-image-only"), this.setAttribute("class", this.outerNormalWithoutImageOnly + " bb-pb-button-container-image-only"), this.captionElement.style["background-image"] = this.imgElement.style["background-image"], this.isImageOnly = !0, this.innerElement.removeChild(this.imgElement), this.imgElement = null);
			this.captionElement.innerHTML = t
		}, t.getCaption = function() {
			return this.captionElement.innerHTML
		}, t.getCaption = t.getCaption.bind(t), t.setImage = function(t) {
			if (this.isImageOnly) this.captionElement.style["background-image"] = 'url("' + t + '")';
			else if (this.imgElement && t.length > 0) this.imgElement.style["background-image"] = 'url("' + t + '")';
			else if (t.length > 0) {
				this.captionElement.setAttribute("class", "bb-pb-button-caption-with-image");
				var e = document.createElement("div");
				this.imgElement = e, e.setAttribute("class", "bb-pb-button-image"), e.style["background-image"] = 'url("' + t + '")', this.innerElement.removeChild(this.captionElement), this.innerElement.appendChild(e), this.innerElement.appendChild(this.captionElement)
			} else this.imgElement && 0 == t.length && (this.innerElement.removeChild(this.imgElement), this.imgElement = null, this.captionElement.setAttribute("class", ""))
		}, t.getImage = function() {
			return this.isImageOnly ? this.captionElement.style["background-image"].slice(4, -1) : this.imgElement ? this.imgElement.style["background-image"].slice(4, -1) : ""
		}, t.getImage = t.getImage.bind(t), t.enable = function() {
			this.enabled || (this.innerElement.setAttribute("class", this.innerElement.normal), this.ontouchstart = function() {
				this.setAttribute("class", this.highlight)
			}, this.ontouchend = function() {
				this.setAttribute("class", this.outerNormal)
			}, this.enabled = !0)
		}, t.enable = t.enable.bind(t), t.disable = function() {
			this.enabled && (this.innerElement.setAttribute("class", this.innerElement.disabledStyle), this.ontouchstart = null, this.ontouchend = null, this.enabled = !1)
		}, t.disable = t.disable.bind(t), t.show = function() {
			this.style.display = this.stretched ? "block" : "inline-block", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, t.remove = t.remove.bind(t), t
	}
}, _bbPlayBook_imageList = {
	apply: function(t) {
		for (var e, i, n, o, e = 0; t.length > e; e++) {
			n = t[e], n.items = [], n.hideImages = n.hasAttribute("data-bb-images") ? "none" == n.getAttribute("data-bb-images").toLowerCase() : !1, n.hideImages || (n.imagePlaceholder = n.hasAttribute("data-bb-image-placeholder") ? n.getAttribute("data-bb-image-placeholder") : void 0), n.headerJustify = n.hasAttribute("data-bb-header-justify") ? n.getAttribute("data-bb-header-justify").toLowerCase() : "center", n.listStyle = n.hasAttribute("data-bb-style") ? n.getAttribute("data-bb-style").toLowerCase() : "default", n.headerStyle = n.hasAttribute("data-bb-header-style") ? n.getAttribute("data-bb-header-style").toLowerCase() : "default", n.setAttribute("class", "bb-pb-image-list"), n.styleItem = function(t) {
				var t, e, i, o, r, s, l, a, b, d, c, h, u, p;
				t.hasAttribute("data-bb-type") && (e = t.getAttribute("data-bb-type").toLowerCase(), i = t.innerHTML, o = "", t.hasAttribute("data-bb-accent-text") && (o = t.getAttribute("data-bb-accent-text")), "header" == e ? (r = "bb-pb-image-list-header", s = "bb-pb-image-list-header-hover bb10Highlight", r += "solid" == n.headerStyle ? " bb-pb-image-list-header-solid bb10Accent" : " bb-pb-image-list-header-default", "left" == this.headerJustify ? (r += " bb-pb-image-list-header-left", s += " bb-pb-image-list-header-left") : "right" == this.headerJustify ? (r += " bb-pb-image-list-header-right", s += " bb-pb-image-list-header-right") : (r = r + " bb-" + res + "-image-list-header-center", s += " bb-pb-image-list-header-center"), t.normal = r, t.highlight = s, t.innerHTML = "<p>" + i + "</p>", t.setAttribute("class", r), t.ontouchstart = function() {
					this.setAttribute("class", this.highlight)
				}, t.ontouchend = function() {
					this.setAttribute("class", this.normal)
				}) : "item" == e && (t.normal = "bb-pb-image-list-item", t.highlight = "bb-pb-image-list-item bb-pb-image-list-item-hover bb10Highlight", t.innerHTML = "", t.setAttribute("class", "bb-pb-image-list-item"), t.ontouchstart = function() {
					this.setAttribute("class", this.highlight)
				}, t.ontouchend = function() {
					this.setAttribute("class", this.normal)
				}, this.hideImages || (c = document.createElement("img"), t.img = c, this.imagePlaceholder ? (c.placeholder = this.imagePlaceholder, c.src = t.hasAttribute("data-bb-img") ? t.getAttribute("data-bb-img") : this.imagePlaceholder, c.onerror = function() {
					this.src != this.placeholder && (this.src = this.placeholder)
				}) : c.setAttribute("src", t.getAttribute("data-bb-img")), t.appendChild(c)), l = document.createElement("div"), t.appendChild(l), l.normal = this.hideImages ? "bb-pb-image-list-details bb-pb-image-list-noimage" : "bb-pb-image-list-details", a = document.createElement("div"), a.innerHTML = t.getAttribute("data-bb-title"), a.className = "title", t.titleDiv = a, l.appendChild(a), "arrowlist" == this.listStyle ? (l.normal = l.normal + " details-button-margin", h = document.createElement("div"), t.appendChild(h), t.btn = h, h.setAttribute("class", "button"), u = document.createElement("div"), u.normal = "bb-pb-image-list-item-button-border", u.setAttribute("class", u.normal), h.appendChild(u), p = document.createElement("div"), p.setAttribute("class", "bb-pb-image-list-item-button-inner bb-image-list-item-chevron-light"), u.appendChild(p)) : (d = document.createElement("div"), d.innerHTML = o, d.className = "accent-text", t.accentDiv = d, l.appendChild(d)), l.setAttribute("class", l.normal), b = document.createElement("div"), b.className = "description", t.descriptionDiv = b, l.appendChild(b), 0 == i.length && (i = "&nbsp;", b.style.visibilty = "hidden", a.style["margin-top"] = "19px", d && (d.style["margin-top"] = "-23px"), "arrowlist" == this.listStyle && (h.style["margin-top"] = "-69px")), b.innerHTML = i, t.remove = function() {
					var t = this.parentNode,
						e = t.items.indexOf(this);
					this.parentNode.removeChild(this), t.items.splice(e, 1), bb.scroller && bb.scroller.refresh()
				}, t.remove = t.remove.bind(t), t.trappedClick = t.onclick, t.onclick = void 0, t.outerElement = this, t.addEventListener("click", function() {
					this.outerElement.selected = this, this.trappedClick && this.trappedClick()
				}, !1), t.getTitle = function() {
					return this.titleDiv.innerHTML
				}, t.getTitle = t.getTitle.bind(t), t.getDescription = function() {
					return this.descriptionDiv.innerHTML
				}, t.getDescription = t.getDescription.bind(t), t.getAccentText = function() {
					return this.accentDiv ? this.accentDiv.innerHTML : void 0
				}, t.getAccentText = t.getAccentText.bind(t), t.getImage = function() {
					return this.img ? this.img.getAttribute("src") : void 0
				}, t.getImage = t.getImage.bind(t)))
			}, n.styleItem = n.styleItem.bind(n), n.appendItem = function(t) {
				this.styleItem(t), this.appendChild(t), this.items.push(t), bb.scroller && bb.scroller.refresh()
			}, n.appendItem = n.appendItem.bind(n), n.refresh = function(t) {
				if (t && t.length && !(0 >= t.length)) {
					var e, i, n = document.createElement("div");
					for (this.items = [], e = 0; t.length > e; e++) i = t[e], this.styleItem(i), this.items.push(i), n.appendChild(i);
					this.innerHTML = "", this.appendChild(n)
				}
			}, n.refresh = n.refresh.bind(n), n.insertItemBefore = function(t, e) {
				this.styleItem(t), this.insertBefore(t, e), this.items.splice(this.items.indexOf(e), 0, t), bb.scroller && bb.scroller.refresh()
			}, n.insertItemBefore = n.insertItemBefore.bind(n), n.getItems = function() {
				var t, e = [];
				for (t = 0; this.items.length > t; t++) e.push(this.items[t]);
				return e
			}, n.getItems = n.getItems.bind(n), n.clear = function() {
				this.items = [], n.innerHTML = "", bb.scroller && bb.scroller.refresh()
			}, n.clear = n.clear.bind(n), n.show = function() {
				this.style.display = "block", bb.scroller && bb.scroller.refresh()
			}, n.show = n.show.bind(n), n.hide = function() {
				this.style.display = "none", bb.scroller && bb.scroller.refresh()
			}, n.hide = n.hide.bind(n), n.remove = function() {
				this.parentNode.removeChild(this), bb.scroller && bb.scroller.refresh()
			}, n.remove = n.remove.bind(n), o = n.querySelectorAll("[data-bb-type=item], [data-bb-type=header]");
			var r;
			for (i = 0; o.length > i; i++) r = o[i], n.styleItem(r), n.items.push(r)
		}
	}
}, _bbPlayBook_roundPanel = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e];
			i.setAttribute("class", "bb-playbook-round-panel");
			for (var n = i.querySelectorAll("[data-bb-type=panel-header]"), o = 0; n.length > o; o++) bb.device.isHiRes ? n[o].setAttribute("class", "bb-hires-panel-header") : n[o].setAttribute("class", "bb-lowres-panel-header");
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i)
		}
	}
}, _bbPlayBook_textInput = {
	apply: function(t) {
		var e, i, n;
		for (e = 0; t.length > e; e++) i = t[e], n = "", i.hasAttribute("class") && (n = i.getAttribute("class")), i.normal = n + " bb-pb-input", i.focused = n + " bb-pb-input-focused bb-pb-input", i.setAttribute("class", i.normal), i.isFocused = !1, i.clickCount = 0, i.addEventListener("focus", function() {
				0 == this.readOnly && (this.setAttribute("class", this.focused), this.isFocused = !0, this.clickCount = 0)
			}, !1), i.addEventListener("blur", function() {
				this.setAttribute("class", this.normal), this.isFocused = !1, this.removeEventListener("click", i.handleDeleteClick, !1)
			}, !1), i.addEventListener("click", function(t) {
				if (0 == this.clickCount) return this.clickCount++, void 0;
				if (t.target == this && this.isFocused) {
					var e = !1;
					t.clientX > this.clientWidth - 40 && 0 == this.readOnly && (e = !0), e && (this.value = "")
				}
			}, !1)
	}
}, _bb_5_6_7_imageList = {
	apply: function(t) {
		for (var e, i, n, o, e = 0; t.length > e; e++) {
			n = t[e], n.items = [], n.hideImages = n.hasAttribute("data-bb-images") ? "none" == n.getAttribute("data-bb-images").toLowerCase() : !1, n.hideImages || (n.imagePlaceholder = n.hasAttribute("data-bb-image-placeholder") ? n.getAttribute("data-bb-image-placeholder") : void 0), n.headerJustify = n.hasAttribute("data-bb-header-justify") ? n.getAttribute("data-bb-header-justify").toLowerCase() : "center", n.listStyle = n.hasAttribute("data-bb-style") ? n.getAttribute("data-bb-style").toLowerCase() : "default", bb.device.isHiRes ? n.setAttribute("class", "bb-hires-image-list") : n.setAttribute("class", "bb-lowres-image-list"), n.styleItem = function(t) {
				var t, e, i, n, o, r, s, l, a, b, d, c, h, u, p = bb.device.isHiRes ? "hires" : "lowres";
				t.hasAttribute("data-bb-type") && (e = t.getAttribute("data-bb-type").toLowerCase(), i = t.innerHTML, n = "", t.hasAttribute("data-bb-accent-text") && (n = t.getAttribute("data-bb-accent-text")), "header" == e ? (o = "bb-" + p + "-image-list-header", r = "bb-" + p + "-image-list-header-hover", "left" == this.headerJustify ? (o = o + " bb-" + p + "-image-list-header-left", r = r + " bb-" + p + "-image-list-header-left") : "right" == this.headerJustify ? (o = o + " bb-" + p + "-image-list-header-right", r = r + " bb-" + p + "-image-list-header-right") : (o = o + " bb-" + p + "-image-list-header-center", r = r + " bb-" + p + "-image-list-header-center"), t.normal = o, t.highlight = r, t.innerHTML = "<p>" + i + "</p>", t.setAttribute("x-blackberry-focusable", "true"), t.setAttribute("class", o), t.setAttribute("onmouseover", "this.setAttribute('class',this.highlight)"), t.setAttribute("onmouseout", "this.setAttribute('class',this.normal)")) : "item" == e && (t.innerHTML = "", t.setAttribute("class", "bb-" + p + "-image-list-item"), t.setAttribute("onmouseover", "this.setAttribute('class','bb-" + p + "-image-list-item bb-" + p + "-image-list-item-hover')"), t.setAttribute("onmouseout", "this.setAttribute('class','bb-" + p + "-image-list-item')"), t.setAttribute("x-blackberry-focusable", "true"), this.hideImages || (d = document.createElement("img"), t.img = d, this.imagePlaceholder ? (d.placeholder = this.imagePlaceholder, d.src = t.hasAttribute("data-bb-img") ? t.getAttribute("data-bb-img") : this.imagePlaceholder, d.onerror = function() {
					this.src != this.placeholder && (this.src = this.placeholder)
				}) : d.setAttribute("src", t.getAttribute("data-bb-img")), t.appendChild(d)), s = document.createElement("div"), t.appendChild(s), s.normal = this.hideImages ? "bb-" + p + "-image-list-details bb-" + p + "-image-list-noimage" : "bb-" + p + "-image-list-details", l = document.createElement("div"), l.innerHTML = t.getAttribute("data-bb-title"), l.className = "title", t.titleDiv = l, s.appendChild(l), "arrowlist" == this.listStyle ? (s.normal = s.normal + " details-button-margin", c = document.createElement("div"), t.appendChild(c), t.btn = c, c.setAttribute("class", "button"), h = document.createElement("div"), h.normal = "bb-" + p + "-image-list-item-button-border", h.setAttribute("class", h.normal), c.appendChild(h), u = document.createElement("div"), u.setAttribute("class", "bb-" + p + "-image-list-item-button-inner bb-image-list-item-chevron-light"), h.appendChild(u)) : (b = document.createElement("div"), b.innerHTML = n, b.className = "accent-text", t.accentDiv = b, s.appendChild(b)), s.setAttribute("class", s.normal), a = document.createElement("div"), a.className = "description", t.descriptionDiv = a, s.appendChild(a), 0 == i.length && (i = "&nbsp;", a.style.visibilty = "hidden", l.style["margin-top"] = bb.device.isHiRes ? "14px" : "18px", b && (b.style["margin-top"] = bb.device.isHiRes ? "-32px" : "-25px"), "arrowlist" == this.listStyle && (c.style["margin-top"] = bb.device.isHiRes ? "-73px" : "-70px")), a.innerHTML = i, t.remove = function() {
					var t = this.parentNode,
						e = t.items.indexOf(this);
					this.parentNode.removeChild(this), t.items.splice(e, 1), bb.scroller && bb.scroller.refresh()
				}, t.remove = t.remove.bind(t), t.trappedClick = t.onclick, t.onclick = void 0, t.outerElement = this, t.addEventListener("click", function() {
					this.outerElement.selected = this, this.trappedClick && this.trappedClick()
				}, !1), t.getTitle = function() {
					return this.titleDiv.innerHTML
				}, t.getTitle = t.getTitle.bind(t), t.getDescription = function() {
					return this.descriptionDiv.innerHTML
				}, t.getDescription = t.getDescription.bind(t), t.getAccentText = function() {
					return this.accentDiv ? this.accentDiv.innerHTML : void 0
				}, t.getAccentText = t.getAccentText.bind(t), t.getImage = function() {
					return this.img ? this.img.getAttribute("src") : void 0
				}, t.getImage = t.getImage.bind(t)))
			}, n.styleItem = n.styleItem.bind(n), n.appendItem = function(t) {
				this.styleItem(t), this.appendChild(t), this.items.push(t), bb.scroller && bb.scroller.refresh()
			}, n.appendItem = n.appendItem.bind(n), n.refresh = function(t) {
				if (t && t.length && !(0 >= t.length)) {
					var e, i, n = document.createElement("div");
					for (this.items = [], e = 0; t.length > e; e++) i = t[e], this.styleItem(i), this.items.push(i), n.appendChild(i);
					this.innerHTML = "", this.appendChild(n)
				}
			}, n.refresh = n.refresh.bind(n), n.insertItemBefore = function(t, e) {
				this.styleItem(t), this.insertBefore(t, e), this.items.splice(this.items.indexOf(e), 0, t), bb.scroller && bb.scroller.refresh()
			}, n.insertItemBefore = n.insertItemBefore.bind(n), n.getItems = function() {
				var t, e = [];
				for (t = 0; this.items.length > t; t++) e.push(this.items[t]);
				return e
			}, n.getItems = n.getItems.bind(n), n.clear = function() {
				this.items = [], n.innerHTML = "", bb.scroller && bb.scroller.refresh()
			}, n.clear = n.clear.bind(n), n.show = function() {
				this.style.display = "block", bb.scroller && bb.scroller.refresh()
			}, n.show = n.show.bind(n), n.hide = function() {
				this.style.display = "none", bb.scroller && bb.scroller.refresh()
			}, n.hide = n.hide.bind(n), n.remove = function() {
				this.parentNode.removeChild(this), bb.scroller && bb.scroller.refresh()
			}, n.remove = n.remove.bind(n), o = n.querySelectorAll("[data-bb-type=item], [data-bb-type=header]");
			var r;
			for (i = 0; o.length > i; i++) r = o[i], n.styleItem(r), n.items.push(r)
		}
	}
}, _bb_5_6_7_roundPanel = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e];
			if (i.setAttribute("class", "bb-round-panel"), i.hasChildNodes()) {
				for (var n = [], o = i.childNodes.length, r = 0; o > r; r++) n.push(i.childNodes[r]);
				for (var r = o - 1; r >= 0; r--) i.removeChild(i.childNodes[r]);
				var s = document.createElement("div");
				s.setAttribute("class", "bb-round-panel-top-left bb-round-panel-background "), i.appendChild(s), s = document.createElement("div"), s.setAttribute("class", "bb-round-panel-top-right bb-round-panel-background "), i.appendChild(s);
				var l = document.createElement("div");
				l.setAttribute("class", "bb-round-panel-inside"), i.appendChild(l), s = document.createElement("div"), s.setAttribute("class", "bb-round-panel-bottom-left bb-round-panel-background "), i.appendChild(s), s = document.createElement("div"), s.setAttribute("class", "bb-round-panel-bottom-right bb-round-panel-background "), i.appendChild(s);
				for (var r = 0; n.length > r; r++) l.appendChild(n[r])
			}
			for (var a = i.querySelectorAll("[data-bb-type=panel-header]"), r = 0; a.length > r; r++) a[r].setAttribute("class", "bb-lowres-panel-header");
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i)
		}
	}
}, _bb_6_7_button = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.button.style(t[e])
	},
	style: function(t) {
		var e = t.hasAttribute("data-bb-disabled"),
			i = "bb-bb7-button",
			n = "bb-bb7-button-highlight";
		if (t.stretched = !1, t.enabled = !e, e && (i = "bb-bb7-button-disabled", t.removeAttribute("data-bb-disabled")), bb.device.isHiRes ? (i += " bb-bb7-button-hires", n += " bb-bb7-button-hires") : (i += " bb-bb7-button-lowres", n += " bb-bb7-button-lowres"), t.hasAttribute("data-bb-style")) {
			var o = t.getAttribute("data-bb-style");
			"stretch" == o && (t.stretched = !0, i += " button-stretch", n += " button-stretch")
		}
		return t.highlight = n, t.normal = i, t.setAttribute("class", i), e || (t.setAttribute("x-blackberry-focusable", "true"), t.onmouseover = function() {
			this.setAttribute("class", this.highlight)
		}, t.onmouseout = function() {
			this.setAttribute("class", this.normal)
		}), t.trappedClick = t.onclick, t.onclick = void 0, null !== t.trappedClick && t.addEventListener("click", function() {
			this.enabled && this.trappedClick()
		}, !1), t.setCaption = function(t) {
			this.innerHTML = t
		}, t.setCaption = t.setCaption.bind(t), t.getCaption = function() {
			return this.innerHTML
		}, t.getCaption = t.getCaption.bind(t), t.setImage = function() {}, t.setImage = t.setImage.bind(t), t.getImage = function() {
			return ""
		}, t.getImage = t.getImage.bind(t), t.enable = function() {
			this.enabled || (this.setAttribute("class", i), this.setAttribute("x-blackberry-focusable", "true"), this.onmouseover = function() {
				this.setAttribute("class", this.highlight)
			}, this.onmouseout = function() {
				this.setAttribute("class", this.normal)
			}, this.enabled = !0)
		}, t.enable = t.enable.bind(t), t.disable = function() {
			if (this.enabled) {
				var t = "bb-bb7-button-disabled";
				if (t += bb.device.isHiRes ? " bb-bb7-button-hires" : " bb-bb7-button-lowres", this.hasAttribute("data-bb-style")) {
					var e = this.getAttribute("data-bb-style");
					"stretch" == e && (t += " button-stretch", n += " button-stretch")
				}
				this.setAttribute("class", t), this.removeAttribute("x-blackberry-focusable"), this.onmouseover = null, this.onmouseout = null, this.enabled = !1
			}
		}, t.disable = t.disable.bind(t), t.show = function() {
			this.style.display = this.stretched ? "block" : "inline-block"
		}, t.show = t.show.bind(t), t.hide = function() {
			this.style.display = "none"
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.parentNode.removeChild(this), bb.refresh()
		}, t.remove = t.remove.bind(t), t
	}
}, _bb_6_7_PlayBook_dropdown = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) bb.dropdown.style(t[e])
	},
	style: function(t) {
		var e, i, n = t.getElementsByTagName("option"),
			o = "",
			r = !t.hasAttribute("disabled");
		bb.device.isPlayBook ? (e = "ontouchstart", i = "ontouchend") : (e = "onmouseover", i = "onmouseout"), t.style.display = "none", t.stretch = !1, t.enabled = r, n.length > 0 && (o = n[0].innerHTML);
		for (var s = 0; n.length > s; s++) if (n[s].hasAttribute("selected")) {
				o = n[s].innerHTML;
				break
			}
		var l = document.createElement("div");
		l.innerHTML = '<div data-bb-type="caption"><span>' + o + "</span></div>", t.dropdown = l;
		var a = "bb-bb7-dropdown",
			b = "bb-bb7-dropdown-highlight";
		if (bb.device.isHiRes ? (a += " bb-bb7-dropdown-hires", b += " bb-bb7-dropdown-hires") : (a += " bb-bb7-dropdown-lowres", b += " bb-bb7-dropdown-lowres"), t.hasAttribute("data-bb-style")) {
			var d = t.getAttribute("data-bb-style");
			"stretch" == d && (t.stretch = !0, a += " dropdown-stretch", b += " dropdown-stretch")
		}
		return l.setAttribute("data-bb-type", "dropdown"), t.enabled ? l.setAttribute("class", a) : l.setAttribute("class", a + " bb-bb7-dropdown-disabled"), l.setAttribute("x-blackberry-focusable", "true"), l.inEvent = "this.setAttribute('class','" + b + "')", l.outEvent = "this.setAttribute('class','" + a + "')", t.parentNode && t.parentNode.insertBefore(l, t), l.appendChild(t), l.doclick = function() {
			var t = this.getElementsByTagName("select")[0];
			if (bb.device.isPlayBook || bb.device.isRipple) {
				var e = document.createElement("div");
				e.setAttribute("id", "ripple-dropdown-overlay"), e.style.position = "absolute", e.style.left = "0px", e.style.top = document.body.scrollTop + "px", e.style.width = "100%", e.style.height = "100%", e.style["z-index"] = "1000000", e.onclick = function() {
					null !== this.parentNode && this.parentNode.removeChild(this)
				};
				var i = document.createElement("div");
				bb.device.isHiRes ? i.setAttribute("class", "ripple-dropdown-dialog bb-hires-screen") : i.setAttribute("class", "ripple-dropdown-dialog"), e.appendChild(i), i.onclick = function() {
					this.parentNode.parentNode.removeChild(this.parentNode)
				};
				for (var n = 0; t.options.length > n; n++) {
					var o = t.options[n],
						r = document.createElement("div");
					i.appendChild(r);
					var s = document.createElement("div");
					o.selected ? (s.setAttribute("class", "item selected"), r.setAttribute("class", "backgroundHighlight backgroundSelected")) : (s.setAttribute("class", "item"), r.setAttribute("class", "backgroundHighlight")), s.innerHTML = "<span>" + o.text + "</span>", s.setAttribute("x-blackberry-focusable", "true"), s.setAttribute("data-bb-index", n), s.dropdown = this, s.onclick = function() {
						var t = this.getAttribute("data-bb-index"),
							e = this.dropdown.getElementsByTagName("select")[0];
						e && e.setSelectedItem(t)
					}, r.appendChild(s)
				}
				var l = 45 * t.options.length + 20,
					a = window.innerHeight - 80;
				l > a && (l = a, i.style.height = a + "px");
				var b = window.innerHeight / 2 - l / 2;
				i.style.top = b + "px", document.body.appendChild(e)
			} else {
				for (var d = [], n = 0; t.options.length > n; n++) d[n] = {
						label: t.options[n].text,
						selected: n == t.selectedIndex,
						enabled: !0,
						type: "option"
				};
				try {
					blackberry.ui.dialog.selectAsync(!1, d, function(e) {
						e.length > 0 && e[0] < t.options.length && t.setSelectedItem(e[0])
					})
				} catch (c) {
					console.log("Exception in selectAsync: " + c)
				}
			}
		}, t.enabled && (l.onclick = l.doclick, l.setAttribute(e, l.inEvent), l.setAttribute(i, l.outEvent)), t.setSelectedItem = function(t) {
			var e = this.dropdown.getElementsByTagName("select")[0];
			if (e && e.selectedIndex != t) {
				e.selectedIndex = t;
				var i = this.dropdown.querySelectorAll("[data-bb-type=caption]")[0];
				i && (i.innerHTML = "<span>" + e.options[t].text + "</span>");
				var n = document.createEvent("HTMLEvents");
				n.initEvent("change", !1, !0), e.dispatchEvent(n)
			}
		}, t.setSelectedText = function(t) {
			for (var e = 0; this.options.length > e; e++) if (this.options[e].text == t) return this.setSelectedItem(e), void 0
		}, t.setSelectedText = t.setSelectedText.bind(t), t.fireEvent = function() {
			var t = document.createEvent("HTMLEvents");
			t.initEvent("change", !1, !0), this.dispatchEvent(t)
		}, t.fireEvent = t.fireEvent.bind(t), t.enable = function() {
			this.enabled || (this.dropdown.onclick = this.dropdown.doclick, this.dropdown.setAttribute(e, l.inEvent), this.dropdown.setAttribute(i, l.outEvent), this.dropdown.setAttribute("class", a), this.removeAttribute("disabled"), this.enabled = !0)
		}, t.enable = t.enable.bind(t), t.disable = function() {
			t.enabled && (this.dropdown.onclick = null, this.dropdown.removeAttribute(e), this.dropdown.removeAttribute(i), this.dropdown.setAttribute("class", a + " bb-bb7-dropdown-disabled"), this.enabled = !1, this.setAttribute("disabled", "disabled"))
		}, t.disable = t.disable.bind(t), t.show = function() {
			this.dropdown.style.display = this.stretch ? "block" : "table-cell", bb.refresh()
		}, t.show = t.show.bind(t), t.hide = function() {
			this.dropdown.style.display = "none", bb.refresh()
		}, t.hide = t.hide.bind(t), t.remove = function() {
			this.dropdown.parentNode.removeChild(this.dropdown), bb.refresh()
		}, t.remove = t.remove.bind(t), t.refresh = function() {
			var t, e = this.getElementsByTagName("option"),
				i = "";
			e.length > 0 && (i = e[0].innerHTML);
			for (var n = 0; e.length > n; n++) if (e[n].hasAttribute("selected")) {
					i = e[n].innerHTML;
					break
				}
			t = this.dropdown.querySelectorAll("[data-bb-type=caption]")[0], t && (t.innerHTML = "<span>" + i + "</span>")
		}, t.refresh = t.refresh.bind(t), t.setCaption = function() {
			console && console.log("WARNING: setCaption is not supported on BlackBerry 5/6/7/PlayBook")
		}, t.setCaption = t.setCaption.bind(t), l
	}
}, _bb_6_7_PlayBook_labelControlContainers = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e],
				n = i.querySelectorAll("[data-bb-type=row]");
			if (n.length > 0) {
				var o = document.createElement("table");
				o.setAttribute("class", "bb-bb7-label-control-rows"), i.insertBefore(o, n[0]);
				for (var r = 0; n.length > r; r++) {
					var s = n[r],
						l = document.createElement("tr");
					o.appendChild(l);
					var a = document.createElement("td");
					l.appendChild(a);
					var b = s.querySelectorAll("[data-bb-type=label]")[0];
					s.removeChild(b), a.appendChild(b);
					var d = document.createElement("td");
					l.appendChild(d);
					var c = s.querySelectorAll("[data-bb-type=button],input,[data-bb-type=dropdown],textarea")[0];
					s.removeChild(c), d.appendChild(c), i.removeChild(s);
					var h = c.getAttribute("data-bb-type");
					"button" == h || "dropdown" == h ? c.style.float = "right" : "INPUT" == c.tagName && (c.style.width = "100%")
				}
			}
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i)
		}
	}
}, _bb_6_7_PlayBook_pillButtons = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e],
				n = "bb-bb7-pill-buttons",
				o = "";
			bb.device.isHiRes ? (n += " bb-bb7-pill-buttons-hires", o = "bb-bb7-pill-button-hires") : (n += " bb-bb7-pill-buttons-lowres", o = "bb-bb7-pill-button-lowres"), i.setAttribute("class", n);
			var r, s, l = i.querySelectorAll("[data-bb-type=pill-button]"),
				a = Math.floor(98 / l.length),
				b = 102 - a * l.length;
			bb.device.isPlayBook ? (r = "ontouchstart", s = "ontouchend") : (r = "onmouseover", s = "onmouseout"), i.style["padding-left"] = b + "%", i.style["padding-right"] = b + "%";
			for (var d = 0; l.length > d; d++) {
				var c = l[d];
				c.setAttribute("x-blackberry-focusable", "true"), 0 === d ? "true" == c.getAttribute("data-bb-selected") ? c.setAttribute("class", "bb-bb7-pill-button-highlight bb-bb7-pill-button-left " + o) : (c.setAttribute("class", "bb-bb7-pill-button bb-bb7-pill-button-left " + o), c.setAttribute(r, "this.setAttribute('class','bb-bb7-pill-button-highlight bb-bb7-pill-button-left " + o + "')"), c.setAttribute(s, "this.setAttribute('class','bb-bb7-pill-button bb-bb7-pill-button-left " + o + "')")) : d == l.length - 1 ? "true" == c.getAttribute("data-bb-selected") ? c.setAttribute("class", "bb-bb7-pill-button-highlight bb-bb7-pill-button-right " + o) : (c.setAttribute("class", "bb-bb7-pill-button bb-bb7-pill-button-right " + o), c.setAttribute(r, "this.setAttribute('class','bb-bb7-pill-button-highlight bb-bb7-pill-button-right " + o + "')"), c.setAttribute(s, "this.setAttribute('class','bb-bb7-pill-button bb-bb7-pill-button-right " + o + "')")) : "true" == c.getAttribute("data-bb-selected") ? c.setAttribute("class", "bb-bb7-pill-button-highlight " + o) : (c.setAttribute("class", "bb-bb7-pill-button " + o), c.setAttribute(r, "this.setAttribute('class','bb-bb7-pill-button-highlight " + o + "')"), c.setAttribute(s, "this.setAttribute('class','bb-bb7-pill-button " + o + "')")), c.style.width = a + "%", c.addEventListener("click", function() {
					var t, e, i = this.parentNode.querySelectorAll("[data-bb-type=pill-button]");
					bb.device.isPlayBook ? (t = "ontouchstart", e = "ontouchend") : (t = "onmouseover", e = "onmouseout");
					for (var n = 0; i.length > n; n++) {
						var r = i[n];
						0 === n ? r == this ? (r.setAttribute("class", "bb-bb7-pill-button-highlight bb-bb7-pill-button-left " + o), r.onmouseover = null, r.onmouseout = null) : (r.setAttribute("class", "bb-bb7-pill-button bb-bb7-pill-button-left " + o), r.setAttribute(t, "this.setAttribute('class','bb-bb7-pill-button-highlight bb-bb7-pill-button-left " + o + "')"), r.setAttribute(e, "this.setAttribute('class','bb-bb7-pill-button bb-bb7-pill-button-left " + o + "')")) : n == i.length - 1 ? r == this ? (r.setAttribute("class", "bb-bb7-pill-button-highlight bb-bb7-pill-button-right " + o), r.onmouseover = null, r.onmouseout = null) : (r.setAttribute("class", "bb-bb7-pill-button bb-bb7-pill-button-right " + o), r.setAttribute(t, "this.setAttribute('class','bb-bb7-pill-button-highlight bb-bb7-pill-button-right " + o + "')"), r.setAttribute(e, "this.setAttribute('class','bb-bb7-pill-button bb-bb7-pill-button-right " + o + "')")) : r == this ? (r.setAttribute("class", "bb-bb7-pill-button-highlight " + o), r.onmouseover = null, r.onmouseout = null) : (r.setAttribute("class", "bb-bb7-pill-button " + o), r.setAttribute(t, "this.setAttribute('class','bb-bb7-pill-button-highlight " + o + "')"), r.setAttribute(e, "this.setAttribute('class','bb-bb7-pill-button " + o + "')"))
					}
				}, !1)
			}
			i.show = function() {
				this.style.display = "block", bb.refresh()
			}, i.show = i.show.bind(i), i.hide = function() {
				this.style.display = "none", bb.refresh()
			}, i.hide = i.hide.bind(i), i.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, i.remove = i.remove.bind(i), i.getButtons = function() {
				for (var t = this.querySelectorAll("[data-bb-type=pill-button]"), e = Array(), i = 0; t.length > i; i++) e[i] = t[i].innerHTML;
				return e
			}, i.getButtons = i.getButtons.bind(i)
		}
	}
}, _bb_6_7_textInput = {
	apply: function(t) {
		for (var e = 0; t.length > e; e++) {
			var i = t[e],
				n = i.getAttribute("class");
			n += " bb-bb7-input", n += bb.device.isHiRes ? " bb-bb7-input-hires" : " bb-bb7-input-lowres", i.setAttribute("class", n)
		}
	}
}, _bb_PlayBook_10_scrollPanel = {
	apply: function(t) {
		var e, i, n, o, r;
		for (e = 0; t.length > e; e++) {
			for (n = t[e], r = [], o = document.createElement("div"), n.appendChild(o), i = 0; n.childNodes.length - 1 > i; i++) r.push(n.childNodes[i]);
			for (i = 0; r.length > i; i++) o.appendChild(r[i]);
			bb.device.isPlayBook ? n.scroller = new iScroll(n, {
				vScrollbar: !0,
				hideScrollbar: !0,
				fadeScrollbar: !0,
				onBeforeScrollStart: function(t) {
					bb.scroller && bb.scroller.disable(), t.preventDefault()
				},
				onBeforeScrollEnd: function() {
					bb.scroller && bb.scroller.enable()
				},
				onScrollEnd: function() {
					evt = document.createEvent("Events"), evt.initEvent("bbuiscrolling", !0, !0), document.dispatchEvent(evt)
				},
				onScrollMove: function(t) {
					n.onscroll && n.onscroll(t), evt = document.createEvent("Events"), evt.initEvent("bbuiscrolling", !0, !0), document.dispatchEvent(evt)
				}
			}) : (n.scroller = null, n.style["-webkit-overflow-scrolling"] = "-blackberry-touch", n.addEventListener("scroll", function() {
				evt = document.createEvent("Events"), evt.initEvent("bbuiscrolling", !0, !0), document.dispatchEvent(evt)
			}, !1)), n.show = function() {
				this.style.display = "block", bb.refresh()
			}, n.show = n.show.bind(n), n.hide = function() {
				this.style.display = "none", bb.refresh()
			}, n.hide = n.hide.bind(n), n.remove = function() {
				this.parentNode.removeChild(this), bb.refresh()
			}, n.remove = n.remove.bind(n), n.refresh = function() {
				this.scroller && this.scroller.refresh()
			}, n.refresh = n.refresh.bind(n), setTimeout(n.refresh, 0), n.scrollTo = function(t, e) {
				this.scroller ? this.scroller.scrollTo(t, e) : this.scrollTop = t
			}, n.scrollTo = n.scrollTo.bind(n), n.scrollToElement = function(t) {
				if (this.scroller) this.scroller.scrollToElement(t);
				else {
					if (!t) return;
					var e = 0,
						i = t;
					if (i.offsetParent) do e += i.offsetTop;
					while (i = i.offsetParent);
					this.scrollTo(e, 0)
				}
			}, n.scrollToElement = n.scrollToElement.bind(n), n.setAttribute("class", "bb-scroll-panel")
		}
	}
};