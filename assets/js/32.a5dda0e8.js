(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{477:function(t,e,i){
/*!
 * Viewer.js v1.10.1
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-08-01T13:35:49.731Z
 */
t.exports=function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function e(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},r="undefined"!=typeof window&&void 0!==window.document,l=r?window:{},h=!(!r||!l.document.documentElement)&&"ontouchstart"in l.document.documentElement,c=!!r&&"PointerEvent"in l,u="".concat("viewer","-active"),d="".concat("viewer","-close"),m="".concat("viewer","-fade"),v="".concat("viewer","-fixed"),f="".concat("viewer","-fullscreen"),g="".concat("viewer","-fullscreen-exit"),p="".concat("viewer","-hide"),w="".concat("viewer","-hide-md-down"),b="".concat("viewer","-hide-sm-down"),y="".concat("viewer","-hide-xs-down"),x="".concat("viewer","-in"),k="".concat("viewer","-invisible"),z="".concat("viewer","-loading"),D="".concat("viewer","-move"),E="".concat("viewer","-open"),T="".concat("viewer","-show"),I="".concat("viewer","-transition"),A=h?"touchend touchcancel":"mouseup",S=h?"touchmove":"mousemove",O=h?"touchstart":"mousedown",C=c?"pointerdown":O,L=c?"pointermove":S,R=c?"pointerup pointercancel":A,F="".concat("viewer","Action"),N=/\s\s*/,Y=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function X(t){return"string"==typeof t}var M=Number.isNaN||l.isNaN;function q(t){return"number"==typeof t&&!M(t)}function P(t){return void 0===t}function W(t){return"object"===i(t)&&null!==t}var j=Object.prototype.hasOwnProperty;function H(t){if(!W(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&j.call(i,"isPrototypeOf")}catch(t){return!1}}function B(t){return"function"==typeof t}function V(t,e){if(t&&B(e))if(Array.isArray(t)||q(t.length)){var i,n=t.length;for(i=0;i<n&&!1!==e.call(t,t[i],i,t);i+=1);}else W(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}));return t}var U=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return W(t)&&i.length>0&&i.forEach((function(e){W(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},K=/^(?:width|height|left|top|marginLeft|marginTop)$/;function Z(t,e){var i=t.style;V(e,(function(t,e){K.test(e)&&q(t)&&(t+="px"),i[e]=t}))}function $(t){return X(t)?t.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):t}function J(t,e){return!(!t||!e)&&(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)}function _(t,e){if(t&&e)if(q(t.length))V(t,(function(t){_(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function G(t,e){t&&e&&(q(t.length)?V(t,(function(t){G(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function Q(t,e,i){e&&(q(t.length)?V(t,(function(t){Q(t,e,i)})):i?_(t,e):G(t,e))}var tt=/([a-z\d])([A-Z])/g;function et(t){return t.replace(tt,"$1-$2").toLowerCase()}function it(t,e){return W(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(et(e)))}function nt(t,e,i){W(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(et(e)),i)}var ot=function(){var t=!1;if(r){var e=!1,i=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});l.addEventListener("test",i,n),l.removeEventListener("test",i,n)}return t}();function st(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i;e.trim().split(N).forEach((function(e){if(!ot){var s=t.listeners;s&&s[e]&&s[e][i]&&(o=s[e][i],delete s[e][i],0===Object.keys(s[e]).length&&delete s[e],0===Object.keys(s).length&&delete t.listeners)}t.removeEventListener(e,o,n)}))}function at(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i;e.trim().split(N).forEach((function(e){if(n.once&&!ot){var s=t.listeners,a=void 0===s?{}:s;o=function(){delete a[e][i],t.removeEventListener(e,o,n);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];i.apply(t,r)},a[e]||(a[e]={}),a[e][i]&&t.removeEventListener(e,a[e][i],n),a[e][i]=o,t.listeners=a}t.addEventListener(e,o,n)}))}function rt(t,i,n,o){var s;return B(Event)&&B(CustomEvent)?s=new CustomEvent(i,e({bubbles:!0,cancelable:!0,detail:n},o)):(s=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,n),t.dispatchEvent(s)}function lt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}function ht(t){var e=t.rotate,i=t.scaleX,n=t.scaleY,o=t.translateX,s=t.translateY,a=[];q(o)&&0!==o&&a.push("translateX(".concat(o,"px)")),q(s)&&0!==s&&a.push("translateY(".concat(s,"px)")),q(e)&&0!==e&&a.push("rotate(".concat(e,"deg)")),q(i)&&1!==i&&a.push("scaleX(".concat(i,")")),q(n)&&1!==n&&a.push("scaleY(".concat(n,")"));var r=a.length?a.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}var ct=l.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(l.navigator.userAgent);function ut(t,e,i){var n=document.createElement("img");if(t.naturalWidth&&!ct)return i(t.naturalWidth,t.naturalHeight),n;var o=document.body||document.documentElement;return n.onload=function(){i(n.width,n.height),ct||o.removeChild(n)},V(e.inheritedAttributes,(function(e){var i=t.getAttribute(e);null!==i&&n.setAttribute(e,i)})),n.src=t.src,ct||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n)),n}function dt(t){switch(t){case 2:return y;case 3:return b;case 4:return w;default:return""}}function mt(t,i){var n=t.pageX,o=t.pageY,s={endX:n,endY:o};return i?s:e({timeStamp:Date.now(),startX:n,startY:o},s)}function vt(t){var e=0,i=0,n=0;return V(t,(function(t){var o=t.startX,s=t.startY;e+=o,i+=s,n+=1})),{pageX:e/=n,pageY:i/=n}}var ft,gt={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,e=t.body||t.documentElement;this.body=e,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=e.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(e).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t,e=this.options,i=this.parent;e.inline&&(t={width:Math.max(i.offsetWidth,e.minWidth),height:Math.max(i.offsetHeight,e.minHeight)},this.parentData=t),!this.fulled&&t||(t=this.containerData),this.viewerData=U({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&Z(this.viewer,this.viewerData)},initList:function(){var t=this,e=this.element,i=this.options,n=this.list,o=[];n.innerHTML="",V(this.images,(function(e,s){var a=e.src,r=e.alt||function(t){return X(t)?decodeURIComponent(t.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}(a),l=t.getImageURL(e);if(a||l){var h=document.createElement("li"),c=document.createElement("img");V(i.inheritedAttributes,(function(t){var i=e.getAttribute(t);null!==i&&c.setAttribute(t,i)})),c.src=a||l,c.alt=r,c.setAttribute("data-original-url",l||a),h.setAttribute("data-index",s),h.setAttribute("data-viewer-action","view"),h.setAttribute("role","button"),i.keyboard&&h.setAttribute("tabindex",0),h.appendChild(c),n.appendChild(h),o.push(h)}})),this.items=o,V(o,(function(e){var n=e.firstElementChild;nt(n,"filled",!0),i.loading&&_(e,z),at(n,"load",(function(n){i.loading&&G(e,z),t.loadImage(n)}),{once:!0})})),i.transition&&at(e,"viewed",(function(){_(n,I)}),{once:!0})},renderList:function(){var t=this.index,e=this.items[t],i=e.nextElementSibling,n=parseInt(window.getComputedStyle(i||e).marginLeft,10),o=e.offsetWidth,s=o+n;Z(this.list,U({width:s*this.length-n},ht({translateX:(this.viewerData.width-o)/2-s*t})))},resetList:function(){var t=this.list;t.innerHTML="",G(t,I),Z(t,ht({translateX:0}))},initImage:function(t){var e,i=this,n=this.options,o=this.image,s=this.viewerData,a=this.footer.offsetHeight,r=s.width,l=Math.max(s.height-a,a),h=this.imageData||{};this.imageInitializing={abort:function(){e.onload=null}},e=ut(o,n,(function(e,o){var s=e/o,a=r,c=l;i.imageInitializing=!1,l*s>r?c=r/s:a=l*s,a=Math.min(.9*a,e),c=Math.min(.9*c,o);var u=(r-a)/2,d=(l-c)/2,m={left:u,top:d,x:u,y:d,width:a,height:c,oldRatio:1,ratio:a/e,aspectRatio:s,naturalWidth:e,naturalHeight:o},v=U({},m);n.rotatable&&(m.rotate=h.rotate||0,v.rotate=0),n.scalable&&(m.scaleX=h.scaleX||1,m.scaleY=h.scaleY||1,v.scaleX=1,v.scaleY=1),i.imageData=m,i.initialImageData=v,t&&t()}))},renderImage:function(t){var e=this,i=this.image,n=this.imageData;if(Z(i,U({width:n.width,height:n.height,marginLeft:n.x,marginTop:n.y},ht(n))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&J(i,I)){var o=function(){e.imageRendering=!1,t()};this.imageRendering={abort:function(){st(i,"transitionend",o)}},at(i,"transitionend",o,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},pt={bind:function(){var t=this.options,e=this.viewer,i=this.canvas,n=this.element.ownerDocument;at(e,"click",this.onClick=this.click.bind(this)),at(e,"dragstart",this.onDragStart=this.dragstart.bind(this)),at(i,C,this.onPointerDown=this.pointerdown.bind(this)),at(n,L,this.onPointerMove=this.pointermove.bind(this)),at(n,R,this.onPointerUp=this.pointerup.bind(this)),at(n,"keydown",this.onKeyDown=this.keydown.bind(this)),at(window,"resize",this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&at(e,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&at(i,"dblclick",this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,e=this.viewer,i=this.canvas,n=this.element.ownerDocument;st(e,"click",this.onClick),st(e,"dragstart",this.onDragStart),st(i,C,this.onPointerDown),st(n,L,this.onPointerMove),st(n,R,this.onPointerUp),st(n,"keydown",this.onKeyDown),st(window,"resize",this.onResize),t.zoomable&&t.zoomOnWheel&&st(e,"wheel",this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&st(i,"dblclick",this.onDblclick)}},wt={click:function(t){var e=this.options,i=this.imageData,n=t.target,o=it(n,F);switch(o||"img"!==n.localName||"li"!==n.parentElement.localName||(o=it(n=n.parentElement,F)),h&&t.isTrusted&&n===this.canvas&&clearTimeout(this.clickCanvasTimeout),o){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(it(n,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-i.scaleX||-1);break;case"flip-vertical":this.scaleY(-i.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(h&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var e=this.element,i=this.options,n=this.image,o=this.index,s=this.viewerData;G(n,k),i.loading&&G(this.canvas,z),n.style.cssText="height:0;"+"margin-left:".concat(s.width/2,"px;")+"margin-top:".concat(s.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage((function(){Q(n,D,i.movable),Q(n,I,i.transition),t.renderImage((function(){t.viewed=!0,t.viewing=!1,B(i.viewed)&&at(e,"viewed",i.viewed,{once:!0}),rt(e,"viewed",{originalImage:t.images[o],index:o,image:n},{cancelable:!1})}))}))},loadImage:function(t){var e=t.target,i=e.parentNode,n=i.offsetWidth||30,o=i.offsetHeight||50,s=!!it(e,"filled");ut(e,this.options,(function(t,i){var a=t/i,r=n,l=o;o*a>n?s?r=o*a:l=n/a:s?l=n/a:r=o*a,Z(e,U({width:r,height:l},ht({translateX:(n-r)/2,translateY:(o-l)/2})))}))},keydown:function(t){var e=this.options;if(e.keyboard){var i=t.keyCode||t.which||t.charCode;switch(i){case 13:this.viewer.contains(t.target)&&this.click(t)}if(this.fulled)switch(i){case 27:this.played?this.stop():e.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(e.loop);break;case 38:t.preventDefault(),this.zoom(e.zoomRatio,!0);break;case 39:this.next(e.loop);break;case 40:t.preventDefault(),this.zoom(-e.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle())}}},dragstart:function(t){"img"===t.target.localName&&t.preventDefault()},pointerdown:function(t){var e=this.options,i=this.pointers,n=t.buttons,o=t.button;if(!(!this.viewed||this.showing||this.viewing||this.hiding||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(q(n)&&1!==n||q(o)&&0!==o||t.ctrlKey))){t.preventDefault(),t.changedTouches?V(t.changedTouches,(function(t){i[t.identifier]=mt(t)})):i[t.pointerId||0]=mt(t);var s=!!e.movable&&"move";e.zoomOnTouch&&e.zoomable&&Object.keys(i).length>1?s="zoom":e.slideOnTouch&&("touch"===t.pointerType||"touchstart"===t.type)&&this.isSwitchable()&&(s="switch"),!e.transition||"move"!==s&&"zoom"!==s||G(this.image,I),this.action=s}},pointermove:function(t){var e=this.pointers,i=this.action;this.viewed&&i&&(t.preventDefault(),t.changedTouches?V(t.changedTouches,(function(t){U(e[t.identifier]||{},mt(t,!0))})):U(e[t.pointerId||0]||{},mt(t,!0)),this.change(t))},pointerup:function(t){var e,i=this,n=this.options,o=this.action,s=this.pointers;t.changedTouches?V(t.changedTouches,(function(t){e=s[t.identifier],delete s[t.identifier]})):(e=s[t.pointerId||0],delete s[t.pointerId||0]),o&&(t.preventDefault(),!n.transition||"move"!==o&&"zoom"!==o||_(this.image,I),this.action=!1,h&&"zoom"!==o&&e&&Date.now()-e.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),n.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout((function(){rt(i.image,"dblclick")}),50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout((function(){i.imageClicked=!1}),500)):(this.imageClicked=!1,n.backdrop&&"static"!==n.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout((function(){rt(i.canvas,"click")}),50)))))},resize:function(){var t=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage((function(){t.renderImage()})),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();V(this.player.getElementsByTagName("img"),(function(e){at(e,"load",t.loadImage.bind(t),{once:!0}),rt(e,"load")}))}},wheel:function(t){var e=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50);var i=Number(this.options.zoomRatio)||.1,n=1;t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*i,!0,t)}}},bt={show:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.element,i=this.options;if(i.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(B(i.show)&&at(e,"show",i.show,{once:!0}),!1===rt(e,"show")||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var n=this.viewer;if(G(n,p),n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby",this.title.id),n.setAttribute("aria-modal",!0),n.removeAttribute("aria-hidden"),i.transition&&!t){var o=this.shown.bind(this);this.transitioning={abort:function(){st(n,"transitionend",o),G(n,x)}},_(n,I),n.initialOffsetWidth=n.offsetWidth,at(n,"transitionend",o,{once:!0}),_(n,x)}else _(n,x),this.shown();return this},hide:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.element,n=this.options;if(n.inline||this.hiding||!this.isShown&&!this.showing)return this;if(B(n.hide)&&at(i,"hide",n.hide,{once:!0}),!1===rt(i,"hide"))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var o=this.viewer,s=this.image,a=function(){G(o,x),t.hidden()};if(n.transition&&!e){var r=function e(i){i&&i.target===o&&(st(o,"transitionend",e),t.hidden())},l=function(){J(o,I)?(at(o,"transitionend",r),G(o,x)):a()};this.transitioning={abort:function(){t.viewed&&J(s,I)?st(s,"transitionend",l):J(o,I)&&st(o,"transitionend",r)}},this.viewed&&J(s,I)?(at(s,"transitionend",l,{once:!0}),this.zoomTo(0,!1,null,!0)):l()}else a();return this},view:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;if(e=Number(e)||0,this.hiding||this.played||e<0||e>=this.length||this.viewed&&e===this.index)return this;if(!this.isShown)return this.index=e,this.show();this.viewing&&this.viewing.abort();var i=this.element,n=this.options,o=this.title,s=this.canvas,a=this.items[e],r=a.querySelector("img"),l=it(r,"originalUrl"),h=r.getAttribute("alt"),c=document.createElement("img");if(V(n.inheritedAttributes,(function(t){var e=r.getAttribute(t);null!==e&&c.setAttribute(t,e)})),c.src=l,c.alt=h,B(n.view)&&at(i,"view",n.view,{once:!0}),!1===rt(i,"view",{originalImage:this.images[e],index:e,image:c})||!this.isShown||this.hiding||this.played)return this;var d=this.items[this.index];d&&(G(d,u),d.removeAttribute("aria-selected")),_(a,u),a.setAttribute("aria-selected",!0),n.focus&&a.focus(),this.image=c,this.viewed=!1,this.index=e,this.imageData={},_(c,k),n.loading&&_(s,z),s.innerHTML="",s.appendChild(c),this.renderList(),o.innerHTML="";var m,v=function(){var e=t.imageData,i=Array.isArray(n.title)?n.title[1]:n.title;o.innerHTML=$(B(i)?i.call(t,c,e):"".concat(h," (").concat(e.naturalWidth," × ").concat(e.naturalHeight,")"))};return at(i,"viewed",v,{once:!0}),this.viewing={abort:function(){st(i,"viewed",v),c.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(c.src="",st(c,"load",m),t.timeout&&clearTimeout(t.timeout))}},c.complete?this.load():(at(c,"load",m=this.load.bind(this),{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){G(c,k),t.timeout=!1}),1e3)),this},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.index-1;return e<0&&(e=t?this.length-1:0),this.view(e),this},next:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.length-1,i=this.index+1;return i>e&&(i=t?0:e),this.view(i),this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData;return this.moveTo(P(t)?t:i.x+Number(t),P(e)?e:i.y+Number(e)),this},moveTo:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=this.element,s=this.options,a=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&s.movable){var r=a.x,l=a.y,h=!1;if(q(t)?h=!0:t=r,q(i)?h=!0:i=l,h){if(B(s.move)&&at(o,"move",s.move,{once:!0}),!1===rt(o,"move",{x:t,y:i,oldX:r,oldY:l,originalEvent:n}))return this;a.x=t,a.y=i,a.left=t,a.top=i,this.moving=!0,this.renderImage((function(){e.moving=!1,B(s.moved)&&at(o,"moved",s.moved,{once:!0}),rt(o,"moved",{x:t,y:i,oldX:r,oldY:l,originalEvent:n},{cancelable:!1})}))}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var e=this,i=this.element,n=this.options,o=this.imageData;if(q(t=Number(t))&&this.viewed&&!this.played&&n.rotatable){var s=o.rotate;if(B(n.rotate)&&at(i,"rotate",n.rotate,{once:!0}),!1===rt(i,"rotate",{degree:t,oldDegree:s}))return this;o.rotate=t,this.rotating=!0,this.renderImage((function(){e.rotating=!1,B(n.rotated)&&at(i,"rotated",n.rotated,{once:!0}),rt(i,"rotated",{degree:t,oldDegree:s},{cancelable:!1})}))}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.element,o=this.options,s=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&o.scalable){var a=s.scaleX,r=s.scaleY,l=!1;if(q(t)?l=!0:t=a,q(i)?l=!0:i=r,l){if(B(o.scale)&&at(n,"scale",o.scale,{once:!0}),!1===rt(n,"scale",{scaleX:t,scaleY:i,oldScaleX:a,oldScaleY:r}))return this;s.scaleX=t,s.scaleY=i,this.scaling=!0,this.renderImage((function(){e.scaling=!1,B(o.scaled)&&at(n,"scaled",o.scaled,{once:!0}),rt(n,"scaled",{scaleX:t,scaleY:i,oldScaleX:a,oldScaleY:r},{cancelable:!1})}))}}return this},zoom:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=this.imageData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(n.width*t/n.naturalWidth,e,i),this},zoomTo:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.element,a=this.options,r=this.pointers,l=this.imageData,h=l.x,c=l.y,u=l.width,d=l.height,m=l.naturalWidth,v=l.naturalHeight;if(q(t=Math.max(0,t))&&this.viewed&&!this.played&&(o||a.zoomable)){if(!o){var f=Math.max(.01,a.minZoomRatio),g=Math.min(100,a.maxZoomRatio);t=Math.min(Math.max(t,f),g)}n&&a.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);var p=m*t,w=v*t,b=p-u,y=w-d,x=l.ratio;if(B(a.zoom)&&at(s,"zoom",a.zoom,{once:!0}),!1===rt(s,"zoom",{ratio:t,oldRatio:x,originalEvent:n}))return this;if(this.zooming=!0,n){var k=lt(this.viewer),z=r&&Object.keys(r).length?vt(r):{pageX:n.pageX,pageY:n.pageY};l.x-=b*((z.pageX-k.left-h)/u),l.y-=y*((z.pageY-k.top-c)/d)}else l.x-=b/2,l.y-=y/2;l.left=l.x,l.top=l.y,l.width=p,l.height=w,l.oldRatio=x,l.ratio=t,this.renderImage((function(){e.zooming=!1,B(a.zoomed)&&at(s,"zoomed",a.zoomed,{once:!0}),rt(s,"zoomed",{ratio:t,oldRatio:x,originalEvent:n},{cancelable:!1})})),i&&this.tooltip()}return this},play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isShown||this.played)return this;var i=this.element,n=this.options;if(B(n.play)&&at(i,"play",n.play,{once:!0}),!1===rt(i,"play"))return this;var o=this.player,s=this.loadImage.bind(this),a=[],r=0,l=0;if(this.played=!0,this.onLoadWhenPlay=s,e&&this.requestFullscreen(e),_(o,T),V(this.items,(function(t,e){var i=t.querySelector("img"),h=document.createElement("img");h.src=it(i,"originalUrl"),h.alt=i.getAttribute("alt"),h.referrerPolicy=i.referrerPolicy,r+=1,_(h,m),Q(h,I,n.transition),J(t,u)&&(_(h,x),l=e),a.push(h),at(h,"load",s,{once:!0}),o.appendChild(h)})),q(n.interval)&&n.interval>0){var h=function e(){t.playing=setTimeout((function(){G(a[l],x),_(a[l=(l+=1)<r?l:0],x),e()}),n.interval)};r>1&&h()}return this},stop:function(){var t=this;if(!this.played)return this;var e=this.element,i=this.options;if(B(i.stop)&&at(e,"stop",i.stop,{once:!0}),!1===rt(e,"stop"))return this;var n=this.player;return this.played=!1,clearTimeout(this.playing),V(n.getElementsByTagName("img"),(function(e){st(e,"load",t.onLoadWhenPlay)})),G(n,T),n.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,e=this.options,i=this.viewer,n=this.image,o=this.list;return!this.isShown||this.played||this.fulled||!e.inline||(this.fulled=!0,this.open(),_(this.button,g),e.transition&&(G(o,I),this.viewed&&G(n,I)),_(i,v),i.setAttribute("role","dialog"),i.setAttribute("aria-labelledby",this.title.id),i.setAttribute("aria-modal",!0),i.removeAttribute("style"),Z(i,{zIndex:e.zIndex}),e.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=U({},this.containerData),this.renderList(),this.viewed&&this.initImage((function(){t.renderImage((function(){e.transition&&setTimeout((function(){_(n,I),_(o,I)}),0)}))}))),this},exit:function(){var t=this,e=this.options,i=this.viewer,n=this.image,o=this.list;return this.isShown&&!this.played&&this.fulled&&e.inline?(this.fulled=!1,this.close(),G(this.button,g),e.transition&&(G(o,I),this.viewed&&G(n,I)),e.focus&&this.clearEnforceFocus(),i.removeAttribute("role"),i.removeAttribute("aria-labelledby"),i.removeAttribute("aria-modal"),G(i,v),Z(i,{zIndex:e.zIndexInline}),this.viewerData=U({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage((function(){t.renderImage((function(){e.transition&&setTimeout((function(){_(n,I),_(o,I)}),0)}))})),this):this},tooltip:function(){var t=this,e=this.options,i=this.tooltipBox,n=this.imageData;return this.viewed&&!this.played&&e.tooltip?(i.textContent="".concat(Math.round(100*n.ratio),"%"),this.tooltipping?clearTimeout(this.tooltipping):e.transition?(this.fading&&rt(i,"transitionend"),_(i,T),_(i,m),_(i,I),i.removeAttribute("aria-hidden"),i.initialOffsetWidth=i.offsetWidth,_(i,x)):(_(i,T),i.removeAttribute("aria-hidden")),this.tooltipping=setTimeout((function(){e.transition?(at(i,"transitionend",(function(){G(i,T),G(i,m),G(i,I),i.setAttribute("aria-hidden",!0),t.fading=!1}),{once:!0}),G(i,x),t.fading=!0):(G(i,T),i.setAttribute("aria-hidden",!0)),t.tooltipping=!1}),1e3),this):this},toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 1===this.imageData.ratio?this.zoomTo(this.imageData.oldRatio,!0,t):this.zoomTo(1,!0,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=U({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,e=this.element,i=this.options,n=this.isImg;if(n&&!e.parentNode)return this.destroy();var o=[];if(V(n?[e]:e.querySelectorAll("img"),(function(e){B(i.filter)?i.filter.call(t,e)&&o.push(e):t.getImageURL(e)&&o.push(e)})),!o.length)return this;if(this.images=o,this.length=o.length,this.ready){var s=[];if(V(this.items,(function(t,e){var i=t.querySelector("img"),n=o[e];n&&i&&n.src===i.src&&n.alt===i.alt||s.push(e)})),Z(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var a=s.indexOf(this.index);if(a>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-a,this.length-1),0));else{var r=this.items[this.index];_(r,u),r.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,e=this.options;return t.viewer?(this.destroyed=!0,this.ready?(this.played&&this.stop(),e.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):e.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),e.inline||st(t,"click",this.onStart),t.viewer=void 0,this):this}},yt={getImageURL:function(t){var e=this.options.url;return e=X(e)?t.getAttribute(e):B(e)?e.call(this,t):""},enforceFocus:function(){var t=this;this.clearEnforceFocus(),at(document,"focusin",this.onFocusin=function(e){var i=t.viewer,n=e.target;n===document||n===i||i.contains(n)||null!==n.getAttribute("tabindex")&&"true"===n.getAttribute("aria-modal")||i.focus()})},clearEnforceFocus:function(){this.onFocusin&&(st(document,"focusin",this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;_(t,E),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px")},close:function(){var t=this.body;G(t,E),t.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var t=this.element,e=this.options,i=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,e.focus&&(i.focus(),this.enforceFocus()),B(e.shown)&&at(t,"shown",e.shown,{once:!0}),!1!==rt(t,"shown")&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,e=this.options,i=this.viewer;e.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),_(i,p),i.removeAttribute("role"),i.removeAttribute("aria-labelledby"),i.removeAttribute("aria-modal"),i.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(B(e.hidden)&&at(t,"hidden",e.hidden,{once:!0}),rt(t,"hidden",null,{cancelable:!1}))},requestFullscreen:function(t){var e=this.element.ownerDocument;if(this.fulled&&!(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)){var i=e.documentElement;i.requestFullscreen?H(t)?i.requestFullscreen(t):i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i=this.options,n=this.pointers,o=n[Object.keys(n)[0]];if(o){var s=o.endX-o.startX,a=o.endY-o.startY;switch(this.action){case"move":this.move(s,a,t);break;case"zoom":this.zoom(function(t){var i=e({},t),n=[];return V(t,(function(t,e){delete i[e],V(i,(function(e){var i=Math.abs(t.startX-e.startX),o=Math.abs(t.startY-e.startY),s=Math.abs(t.endX-e.endX),a=Math.abs(t.endY-e.endY),r=Math.sqrt(i*i+o*o),l=(Math.sqrt(s*s+a*a)-r)/r;n.push(l)}))})),n.sort((function(t,e){return Math.abs(t)<Math.abs(e)})),n[0]}(n),!1,t);break;case"switch":this.action="switched";var r=Math.abs(s);r>1&&r>Math.abs(a)&&(this.pointers={},s>1?this.prev(i.loop):s<-1&&this.next(i.loop))}V(n,(function(t){t.startX=t.endX,t.startY=t.endY}))}},isSwitchable:function(){var t=this.imageData,e=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=e.width&&t.height<=e.height}},xt=l.Viewer,kt=(ft=-1,function(){return ft+=1}),zt=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,t),!e||1!==e.nodeType)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=U({},a,H(i)&&i),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.id=kt(),this.init()}var e,i,s;return e=t,s=[{key:"noConflict",value:function(){return window.Viewer=xt,t}},{key:"setDefaults",value:function(t){U(a,H(t)&&t)}}],(i=[{key:"init",value:function(){var t=this,e=this.element,i=this.options;if(!e.viewer){e.viewer=this,i.focus&&!i.keyboard&&(i.focus=!1);var n="img"===e.localName,o=[];if(V(n?[e]:e.querySelectorAll("img"),(function(e){B(i.filter)?i.filter.call(t,e)&&o.push(e):t.getImageURL(e)&&o.push(e)})),this.isImg=n,this.length=o.length,this.images=o,this.initBody(),P(document.createElement("viewer").style.transition)&&(i.transition=!1),i.inline){var s=0,a=function(){var e;(s+=1)===t.length&&(t.initializing=!1,t.delaying={abort:function(){clearTimeout(e)}},e=setTimeout((function(){t.delaying=!1,t.build()}),0))};this.initializing={abort:function(){V(o,(function(t){t.complete||st(t,"load",a)}))}},V(o,(function(t){t.complete?a():at(t,"load",a,{once:!0})}))}else at(e,"click",this.onStart=function(e){var n=e.target;"img"!==n.localName||B(i.filter)&&!i.filter.call(t,n)||t.view(t.images.indexOf(n))})}}},{key:"build",value:function(){if(!this.ready){var t=this.element,e=this.options,i=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';var o=n.querySelector(".".concat("viewer","-container")),s=o.querySelector(".".concat("viewer","-title")),a=o.querySelector(".".concat("viewer","-toolbar")),r=o.querySelector(".".concat("viewer","-navbar")),l=o.querySelector(".".concat("viewer","-button")),h=o.querySelector(".".concat("viewer","-canvas"));if(this.parent=i,this.viewer=o,this.title=s,this.toolbar=a,this.navbar=r,this.button=l,this.canvas=h,this.footer=o.querySelector(".".concat("viewer","-footer")),this.tooltipBox=o.querySelector(".".concat("viewer","-tooltip")),this.player=o.querySelector(".".concat("viewer","-player")),this.list=o.querySelector(".".concat("viewer","-list")),o.id="".concat("viewer").concat(this.id),s.id="".concat("viewer","Title").concat(this.id),_(s,e.title?dt(Array.isArray(e.title)?e.title[0]:e.title):p),_(r,e.navbar?dt(e.navbar):p),Q(l,p,!e.button),e.keyboard&&l.setAttribute("tabindex",0),e.backdrop&&(_(o,"".concat("viewer","-backdrop")),e.inline||"static"===e.backdrop||nt(h,F,"hide")),X(e.className)&&e.className&&e.className.split(N).forEach((function(t){_(o,t)})),e.toolbar){var c=document.createElement("ul"),u=H(e.toolbar),g=Y.slice(0,3),w=Y.slice(7,9),b=Y.slice(9);u||_(a,dt(e.toolbar)),V(u?e.toolbar:Y,(function(t,i){var n=u&&H(t),o=u?et(i):t,s=n&&!P(t.show)?t.show:t;if(s&&(e.zoomable||-1===g.indexOf(o))&&(e.rotatable||-1===w.indexOf(o))&&(e.scalable||-1===b.indexOf(o))){var a=n&&!P(t.size)?t.size:t,r=n&&!P(t.click)?t.click:t,l=document.createElement("li");e.keyboard&&l.setAttribute("tabindex",0),l.setAttribute("role","button"),_(l,"".concat("viewer","-").concat(o)),B(r)||nt(l,F,o),q(s)&&_(l,dt(s)),-1!==["small","large"].indexOf(a)?_(l,"".concat("viewer","-").concat(a)):"play"===o&&_(l,"".concat("viewer","-large")),B(r)&&at(l,"click",r),c.appendChild(l)}})),a.appendChild(c)}else _(a,p);if(!e.rotatable){var y=a.querySelectorAll('li[class*="rotate"]');_(y,k),V(y,(function(t){a.appendChild(t)}))}if(e.inline)_(l,f),Z(o,{zIndex:e.zIndexInline}),"static"===window.getComputedStyle(i).position&&Z(i,{position:"relative"}),i.insertBefore(o,t.nextSibling);else{_(l,d),_(o,v),_(o,m),_(o,p),Z(o,{zIndex:e.zIndex});var x=e.container;X(x)&&(x=t.ownerDocument.querySelector(x)),x||(x=this.body),x.appendChild(o)}e.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,B(e.ready)&&at(t,"ready",e.ready,{once:!0}),!1!==rt(t,"ready")?this.ready&&e.inline&&this.view(this.index):this.ready=!1}}}])&&o(e.prototype,i),s&&o(e,s),t}();return U(zt.prototype,gt,pt,wt,bt,yt),zt}()}}]);