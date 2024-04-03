"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[556],{164:(e,t,n)=>{var i=n(1380);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t,n){var r=n.previewAdapter;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.viewportPosition=0,this.id=t.id.replace("popup-",""),this.previewAdapter=r;var a=o((0,i.R2)("#link-".concat(this.id)),1);this.openLink=a[0];var l=o((0,i.R2)(this.element,"button.lightbox-close"),1);this.closeButton=l[0],this.videos=(0,i.R2)(this.element,".video"),this.handleKeyEvent=this.handleKeyEvent.bind(this),this.focusableElements=this.getFocusableElements();var s=o(this.focusableElements,1);this.firstFocusableEl=s[0],this.lastFocusableEl=this.focusableElements[this.focusableElements.length-1],this.openPopupButton=document.activeElement,(0,i.Oo)(this.openLink,"click",this.open.bind(this)),(0,i.Oo)(this.openLink,"keydown",this.open.bind(this)),(0,i.Oo)(this.element,"click",this._handleClick.bind(this))}var t,n;return t=e,(n=[{key:"close",value:function(){this.element.style.display="none",document.body.classList.remove("modal-on"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&window.scrollTo(0,this.viewportPosition),this.previewAdapter.onClose(),document.removeEventListener("keydown",this.handleKeyEvent),this.videos.forEach((function(e){e.src=""})),this.openPopupButton.focus()}},{key:"open",value:function(e){"keydown"===(e&&e.type)&&13!==e.keyCode&&32!==e.keyCode||(/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this.viewportPosition=window.pageYOffset,document.body.style.top="-".concat(this.viewportPosition,"px")),this.element.style.display="block",this.element.setAttribute("tabIndex","-1"),document.body.classList.add("modal-on"),this.openPopupButton=document.activeElement,this.previewAdapter.onOpen(),this.videos.forEach((function(e){e.src=e.getAttribute("data-src")})),this.element.focus(),document.addEventListener("keydown",this.handleKeyEvent))}},{key:"_handleClick",value:function(e){var t=e.target;t&&((0,i.wB)(t,".lightbox-dim")||this.closeButton.contains(t))&&this.close()}},{key:"handleKeyEvent",value:function(e){switch(e.keyCode){case 27:this.close();break;case 9:this.handleTabKeyDown(e)}}},{key:"handleTabKeyDown",value:function(e){1!==this.focusableElements.length?e.shiftKey?this.handleBackwardTab(e):this.handleForwardTab(e):e.preventDefault()}},{key:"getFocusableElements",value:function(){var e=this.element.querySelectorAll('a[href],a.btn, area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),t=[];return Array.prototype.push.apply(t,e),t}},{key:"handleBackwardTab",value:function(e){document.activeElement===this.firstFocusableEl&&(e.preventDefault(),this.lastFocusableEl.focus())}},{key:"handleForwardTab",value:function(e){document.activeElement===this.lastFocusableEl&&(e.preventDefault(),this.firstFocusableEl.focus())}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.id=this._parseElementHtmlId()}var t,n;return t=e,(n=[{key:"isPreview",value:function(){return"object"===s(window.previewMode)||i.E9.getPageData().preview}},{key:"onOpen",value:function(){var e=this.element.querySelector(".lightbox-content"),t=parseInt(e.style.marginTop,10)||0,n=e.clientHeight,i=e.offsetHeight,o=e.scrollHeight,r=e.clientWidth,a=e.offsetWidth,l=e.scrollWidth,s=e.offsetLeft,u=e.offsetTop,c={id:this.id,marginTop:t,dimensions:{clientHeight:n,offsetHeight:i,scrollHeight:o,clientWidth:r,offsetWidth:a,scrollWidth:l},position:{offsetLeft:s,offsetTop:u}};this._dispatchCustomEvent("init",{data:c}),this._dispatchCustomEvent("show",{data:c}),this._dispatchCustomEvent("shown",{data:c})}},{key:"onClose",value:function(){this._dispatchCustomEvent("hide",{id:this.id})}},{key:"_dispatchCustomEvent",value:function(e,t){var n=new CustomEvent("preview.popup.".concat(e),{detail:t});window.dispatchEvent(n)}},{key:"_parseElementHtmlId",value:function(){return this.element.id.split("-")[1]}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.id=this._parseElementHtmlId()}var t,n;return t=e,(n=[{key:"onOpen",value:function(){var e=this.element.querySelector(".lightbox-content"),t=parseInt(e.style.marginTop,10)||0,n=e.clientHeight,i=e.offsetHeight,o=e.scrollHeight,r=e.clientWidth,a=e.offsetWidth,l=e.scrollWidth,s={id:this.id,marginTop:t,dimensions:{clientHeight:n,offsetHeight:i,scrollHeight:o,clientWidth:r,offsetWidth:a,scrollWidth:l}};this._dispatchCustomEvent("init",{data:s}),this._dispatchCustomEvent("show",{data:s}),this._dispatchCustomEvent("shown",{data:s})}},{key:"onClose",value:function(){this._dispatchCustomEvent("hide",{id:this.id})}},{key:"_dispatchCustomEvent",value:function(e,t){var n=new CustomEvent("preview.popup.".concat(e),{detail:t});window.dispatchEvent(n)}},{key:"_parseElementHtmlId",value:function(){var e,t,n=this.element.id;return(e=/p-[a-z]-([a-z0-9]+)/gim.exec(n),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=/p-([a-z])-([a-z0-9]+)/gim,b=function(){function e(t,n){var i=n.previewAdapter;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.previewAdapter=i;var o=this.parseElementHtmlId(),r=o.variationId,a=o.popupId;this.id=a,this.variationId=r,new MutationObserver(this._onNodeChange.bind(this)).observe(this.element,{attributes:!0})}var t,n;return t=e,(n=[{key:"close",value:function(){var e="#p-".concat(this.variationId,"-").concat(this.id," .lightbox-dim"),t=d((0,i.R2)(e),1)[0];t&&t.click()}},{key:"open",value:function(){var e="#link-".concat(this.id),t=d((0,i.R2)(e),1)[0];t&&t.click()}},{key:"parseElementHtmlId",value:function(){var e=this.element.id,t=d(m.exec(e),3);return{variationId:t[1],popupId:t[2]}}},{key:"_onNodeChange",value:function(e){var t=e.find((function(e){return"hidden"===e.attributeName}));t&&(t.target.hidden?this.previewAdapter.onClose():this.previewAdapter.onOpen())}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"init",value:function(){var t=e.getPopups();i.Nd.get().on("closePopup",(function(e){var n=e.popupId;if(n){var i=t.find((function(e){return e.id===n}));i&&i.close()}})),i.Nd.get().on("openPopup",(function(e){var n=e.popupId;if(n){var i=t.find((function(e){return e.id===n}));i&&i.open()}}))}},{key:"getPopups",value:function(){var t=[],n=(0,i.S0)()?"amp-lightbox":"div.popup";return(0,i.R2)(n).forEach((function(n){t.push(e.createPopupInstance(n))})),t}},{key:"createPopupInstance",value:function(e){if((0,i.S0)()){var t=new p(e);return new b(e,{previewAdapter:t})}var n=new c(e);return new l(e,{previewAdapter:n})}},{key:"createPopupPreviewAdapter",value:function(e){return(0,i.S0)()?new p(e):new c(e)}}],null&&w(t.prototype,null),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();(0,i.hl)((function(){g.init(),(0,i.eH)("Popup")}))}},e=>{e(e.s=164)}]);