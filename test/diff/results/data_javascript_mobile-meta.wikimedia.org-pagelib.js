"!function(e,t){\"object\"==typeof exports&&\"object\"==typeof module?module.exports=t():\"function\"==typeof define&&define.amd?define([],t):\"object\"==typeof exports?exports.pagelib=t():e.pagelib=t()}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=22)}([function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=\"undefined\"!=typeof window&&window.CustomEvent||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent(\"CustomEvent\");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};t.default={matchesSelector:function(e,t){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):!!e.webkitMatchesSelector&&e.webkitMatchesSelector(t)},querySelectorAll:function(e,t){return Array.prototype.slice.call(e.querySelectorAll(t))},CustomEvent:i}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i,r=n(0),a=(i=r)&&i.__esModule?i:{default:i};var l=function(e,t){var n=void 0;for(n=e.parentElement;n&&!a.default.matchesSelector(n,t);n=n.parentElement);return n};t.default={findClosestAncestor:l,isNestedInTable:function(e){return Boolean(l(e,\"table\"))},closestInlineStyle:function(e,t,n){for(var i=e;i;i=i.parentElement){var r=i.style[t];if(r){if(void 0===n)return i;if(n===r)return i}}},isVisible:function(e){return Boolean(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},copyAttributesToDataAttributes:function(e,t,n){n.filter(function(t){return e.hasAttribute(t)}).forEach(function(n){return t.setAttribute(\"data-\"+n,e.getAttribute(n))})},copyDataAttributesToAttributes:function(e,t,n){n.filter(function(t){return e.hasAttribute(\"data-\"+t)}).forEach(function(n){return t.setAttribute(n,e.getAttribute(\"data-\"+n))})}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),n(11);var i=l(n(1)),r=l(n(4)),a=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var o=r.default.NODE_TYPE,s=\"pagelib_collapse_table_icon\",u=\"pagelib_collapse_table_container\",c=\"pagelib_collapse_table_collapsed_container\",d=\"pagelib_collapse_table_collapsed\",f=\"pagelib_collapse_table_collapsed_bottom\",h=\"pagelib_collapse_table_collapse_text\",p=\"pagelib_collapse_table_expanded\",_=function(e){return e.childNodes&&a.default.querySelectorAll(e,\"a\").length<3},v=function(e){return e&&e.replace(/[\\s0-9]/g,\"\").length>0},g=function(e){var t=e.match(/\\w+/);if(t)return t[0]},m=function(e,t){var n=g(t),i=g(e.textContent);return!(!n||!i)&&n.toLowerCase()===i.toLowerCase()},y=function(e){return e.trim().replace(/\\s/g,\" \")},b=function(e){return e.nodeType===o.ELEMENT_NODE&&\"BR\"===e.tagName},E=function(e,t){t.parentNode.replaceChild(e.createTextNode(\" \"),t)},T=function(e,t,n){if(!_(t))return null;var i=e.createDocumentFragment();i.appendChild(t.cloneNode(!0));var l=i.querySelector(\"th\");a.default.querySelectorAll(l,\".geo, .coordinates, sup.reference, ol, ul, style, script\").forEach(function(e){return e.remove()});var o=Array.prototype.slice.call(l.childNodes);n&&o.filter(r.default.isNodeTypeElementOrText).filter(function(e){return m(e,n)}).forEach(function(e){return e.remove()}),o.filter(b).forEach(function(t){return E(e,t)});var s=l.textContent;return v(s)?y(s):null},L=function(e,t){var n=e.hasAttribute(\"scope\"),i=t.hasAttribute(\"scope\");return n&&i?0:n?-1:i?1:0},w=function(e,t,n){var i=[],r=a.default.querySelectorAll(t,\"th\");r.sort(L);for(var l=0;l<r.length;++l){var o=T(e,r[l],n);if(o&&-1===i.indexOf(o)&&(i.push(o),2===i.length))break}return i},A=function(e,t,n){var i=e.children[0],r=e.children[1],a=e.children[2],l=i.querySelector(\".app_table_collapsed_caption\"),o=\"none\"!==r.style.display;return o?(r.style.display=\"none\",i.classList.remove(d),i.classList.remove(s),i.classList.add(p),l&&(l.style.visibility=\"visible\"),a.style.display=\"none\",t===a&&n&&n(e)):(r.style.display=\"block\",i.classList.remove(p),i.classList.add(d),i.classList.add(s),l&&(l.style.visibility=\"hidden\"),a.style.display=\"block\"),o},P=function(e){var t=this.parentNode;return A(t,this,e)},S=function(e){var t=[\"navbox\",\"vertical-navbox\",\"navbox-inner\",\"metadata\",\"mbox-small\"].some(function(t){return e.classList.contains(t)});return\"none\"!==e.style.display&&!t},C=function(e){return e.classList.contains(\"infobox\")||e.classList.contains(\"infobox_v3\")},O=function(e,t){var n=e.createElement(\"div\");return n.classList.add(c),n.classList.add(p),n.appendChild(t),n},N=function(e,t){var n=e.createElement(\"div\");return n.classList.add(f),n.classList.add(s),n.innerHTML=t||\"\",n},k=function(e,t,n){var i=e.createDocumentFragment(),r=e.createElement(\"strong\");r.innerHTML=t,i.appendChild(r);var a=e.createElement(\"span\");return a.classList.add(h),n.length>0&&a.appendChild(e.createTextNode(\": \"+n[0])),n.length>1&&a.appendChild(e.createTextNode(\", \"+n[1])),n.length>0&&a.appendChild(e.createTextNode(\" …\")),i.appendChild(a),i},x=function(e,t,n,r,a){for(var l=e.querySelectorAll(\"table, .infobox_v3\"),o=0;o<l.length;++o){var s=l[o];if(!i.default.findClosestAncestor(s,\".\"+u)&&S(s)){var c=w(e,s,t);if(c.length||C(s)){var d=k(e,C(s)?n:r,c),f=e.createElement(\"div\");f.className=u,s.parentNode.insertBefore(f,s),s.parentNode.removeChild(s),s.style.marginTop=\"0px\",s.style.marginBottom=\"0px\";var h=O(e,d);h.style.display=\"block\";var p=N(e,a);p.style.display=\"none\",f.appendChild(h),f.appendChild(s),f.appendChild(p),s.style.display=\"none\"}}}},M=function(e){a.default.querySelectorAll(e,\".\"+u).forEach(function(e){A(e)})},D=function(e,t,n,i){var r=function(t){return e.dispatchEvent(new a.default.CustomEvent(\"section-toggled\",{collapsed:t}))};a.default.querySelectorAll(t,\".\"+c).forEach(function(e){e.onclick=function(){var t=P.bind(e)();r(t)}}),a.default.querySelectorAll(t,\".\"+f).forEach(function(e){e.onclick=function(){var t=P.bind(e,i)();r(t)}}),n||M(t)},j=function(e,t,n,i,r,a,l,o,s){i||(x(t,n,a,l,o),D(e,t,r,s))};t.default={SECTION_TOGGLED_EVENT_TYPE:\"section-toggled\",toggleCollapsedForAll:M,toggleCollapseClickCallback:P,collapseTables:function(e,t,n,i,r,a,l,o){j(e,t,n,i,!0,r,a,l,o)},adjustTables:j,prepareTables:x,setupEventHandling:D,expandCollapsedTableIfItContainsElement:function(e){if(e){var t='[class*=\"'+u+'\"]',n=i.default.findClosestAncestor(e,t);if(n){var r=n.firstElementChild;r&&r.classList.contains(p)&&r.click()}}},test:{elementScopeComparator:L,extractEligibleHeaderText:T,firstWordFromString:g,getTableHeaderTextArray:w,shouldTableBeCollapsed:S,isHeaderEligible:_,isHeaderTextEligible:v,isInfobox:C,newCollapsedHeaderDiv:O,newCollapsedFooterDiv:N,newCaptionFragment:k,isNodeTextContentSimilarToPageTitle:m,stringWithNormalizedWhitespace:y,replaceNodeWithBreakingSpaceTextNode:E}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this._window=t,this._period=n,this._function=i,this._context=void 0,this._arguments=void 0,this._result=void 0,this._timeout=0,this._timestamp=0}return i(e,null,[{key:\"wrap\",value:function(t,n,i){var r=new e(t,n,i),a=function(){return r.queue(this,arguments)};return a.result=function(){return r.result},a.pending=function(){return r.pending()},a.delay=function(){return r.delay()},a.cancel=function(){return r.cancel()},a.reset=function(){return r.reset()},a}}]),i(e,[{key:\"queue\",value:function(e,t){var n=this;return this._context=e,this._arguments=t,this.pending()||(this._timeout=this._window.setTimeout(function(){n._timeout=0,n._timestamp=Date.now(),n._result=n._function.apply(n._context,n._arguments)},this.delay())),this.result}},{key:\"pending\",value:function(){return Boolean(this._timeout)}},{key:\"delay\",value:function(){return this._timestamp?Math.max(0,this._period-(Date.now()-this._timestamp)):0}},{key:\"cancel\",value:function(){this._timeout&&this._window.clearTimeout(this._timeout),this._timeout=0}},{key:\"reset\",value:function(){this.cancel(),this._result=void 0,this._timestamp=0}},{key:\"result\",get:function(){return this._result}}]),e}();t.default=r},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i={ELEMENT_NODE:1,TEXT_NODE:3};t.default={isNodeTypeElementOrText:function(e){return e.nodeType===i.ELEMENT_NODE||e.nodeType===i.TEXT_NODE},NODE_TYPE:i}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),n(15);var i=n(6).default,r=n(1).default,a=n(0).default,l=[\"class\",\"style\",\"src\",\"srcset\",\"width\",\"height\",\"alt\",\"usemap\",\"data-file-width\",\"data-file-height\",\"data-image-gallery\"],o={px:50,ex:10,em:5};t.default={PLACEHOLDER_CLASS:\"pagelib_lazy_load_placeholder\",queryLazyLoadableImages:function(e){return a.querySelectorAll(e,\"img\").filter(function(e){return function(e){var t=i.from(e);if(!t.width||!t.height)return!0;var n=o[t.widthUnit]||1/0,r=o[t.heightUnit]||1/0;return t.widthValue>=n&&t.heightValue>=r}(e)})},convertImagesToPlaceholders:function(e,t){return t.map(function(t){return function(e,t){var n=e.createElement(\"span\");t.hasAttribute(\"class\")&&n.setAttribute(\"class\",t.getAttribute(\"class\")||\"\"),n.classList.add(\"pagelib_lazy_load_placeholder\"),n.classList.add(\"pagelib_lazy_load_placeholder_pending\");var a=i.from(t);a.width&&n.style.setProperty(\"width\",\"\"+a.width),r.copyAttributesToDataAttributes(t,n,l);var o=e.createElement(\"span\");if(a.width&&a.height){var s=a.heightValue/a.widthValue;o.style.setProperty(\"padding-top\",100*s+\"%\")}return n.appendChild(o),t.parentNode&&t.parentNode.replaceChild(n,t),n}(e,t)})},loadPlaceholder:function(e,t){t.classList.add(\"pagelib_lazy_load_placeholder_loading\"),t.classList.remove(\"pagelib_lazy_load_placeholder_pending\");var n=e.createElement(\"img\"),i=function(e){n.setAttribute(\"src\",n.getAttribute(\"src\")||\"\"),e.stopPropagation(),e.preventDefault()};return n.addEventListener(\"load\",function(){t.removeEventListener(\"click\",i),t.parentNode&&t.parentNode.replaceChild(n,t),n.classList.add(\"pagelib_lazy_load_image_loaded\"),n.classList.remove(\"pagelib_lazy_load_image_loading\")},{once:!0}),n.addEventListener(\"error\",function(){t.classList.add(\"pagelib_lazy_load_placeholder_error\"),t.classList.remove(\"pagelib_lazy_load_placeholder_loading\"),t.addEventListener(\"click\",i)},{once:!0}),r.copyDataAttributesToAttributes(t,n,l),n.classList.add(\"pagelib_lazy_load_image_loading\"),n}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}var a=function(){function e(t,n){r(this,e),this._value=Number(t),this._unit=n||\"px\"}return i(e,null,[{key:\"fromElement\",value:function(t,n){return t.style.getPropertyValue(n)&&e.fromStyle(t.style.getPropertyValue(n))||t.hasAttribute(n)&&new e(t.getAttribute(n))||void 0}},{key:\"fromStyle\",value:function(t){var n=t.match(/(-?\\d*\\.?\\d*)(\\D+)?/)||[];return new e(n[1],n[2])}}]),i(e,[{key:\"toString\",value:function(){return isNaN(this.value)?\"\":\"\"+this.value+this.unit}},{key:\"value\",get:function(){return this._value}},{key:\"unit\",get:function(){return this._unit}}]),e}(),l=function(){function e(t,n){r(this,e),this._width=t,this._height=n}return i(e,null,[{key:\"from\",value:function(t){return new e(a.fromElement(t,\"width\"),a.fromElement(t,\"height\"))}}]),i(e,[{key:\"width\",get:function(){return this._width}},{key:\"widthValue\",get:function(){return this._width&&!isNaN(this._width.value)?this._width.value:NaN}},{key:\"widthUnit\",get:function(){return this._width&&this._width.unit||\"px\"}},{key:\"height\",get:function(){return this._height}},{key:\"heightValue\",get:function(){return this._height&&!isNaN(this._height.value)?this._height.value:NaN}},{key:\"heightUnit\",get:function(){return this._height&&this._height.unit||\"px\"}}]),e}();t.default=l},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i={ANDROID:\"pagelib_platform_android\",IOS:\"pagelib_platform_ios\"};t.default={CLASS:i,classify:function(e){var t=e.document.querySelector(\"html\");(function(e){return/android/i.test(e.navigator.userAgent)})(e)&&t.classList.add(i.ANDROID),function(e){return/ipad|iphone|ipod/i.test(e.navigator.userAgent)}(e)&&t.classList.add(i.IOS)},setPlatform:function(e,t){e.querySelector(\"html\").classList.add(t)}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),n(16);var i=a(n(1)),r=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}var l={IMAGE_PRESUMES_WHITE_BACKGROUND:\"pagelib_theme_image_presumes_white_background\",DIV_DO_NOT_APPLY_BASELINE:\"pagelib_theme_div_do_not_apply_baseline\"},o={DEFAULT:\"pagelib_theme_default\",DARK:\"pagelib_theme_dark\",SEPIA:\"pagelib_theme_sepia\",BLACK:\"pagelib_theme_black\"},s=new RegExp(\"Kit_(body|socks|shorts|right_arm|left_arm)(.*).png$\"),u=function(e){return!s.test(e.src)&&(!e.classList.contains(\"mwe-math-fallback-image-inline\")&&!i.default.closestInlineStyle(e,\"background\"))};t.default={CONSTRAINT:l,THEME:o,setTheme:function(e,t){var n=e.querySelector(\"html\");for(var i in n.classList.add(t),o)Object.prototype.hasOwnProperty.call(o,i)&&o[i]!==t&&n.classList.remove(o[i])},classifyElements:function(e){r.default.querySelectorAll(e,\"img\").filter(u).forEach(function(e){e.classList.add(l.IMAGE_PRESUMES_WHITE_BACKGROUND)});var t=[\"div.color_swatch div\",'div[style*=\"position: absolute\"]','div.barbox table div[style*=\"background:\"]','div.chart div[style*=\"background-color\"]','div.chart ul li span[style*=\"background-color\"]',\"span.legend-color\",\"div.mw-highlight span\",\"code.mw-highlight span\",\".BrickChartTemplate div\",\".PieChartTemplate div\",\".BarChartTemplate div\",\".StackedBarTemplate td\",\".chess-board div\"].join();r.default.querySelectorAll(e,t).forEach(function(e){return e.classList.add(l.DIV_DO_NOT_APPLY_BASELINE)})}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});t.default={setPercentage:function(e,t){t&&(e.style[\"-webkit-text-size-adjust\"]=t,e.style[\"text-size-adjust\"]=t)}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});t.default={setMargins:function(e,t){void 0!==t.top&&(e.style.marginTop=t.top),void 0!==t.right&&(e.style.marginRight=t.right),void 0!==t.bottom&&(e.style.marginBottom=t.bottom),void 0!==t.left&&(e.style.marginLeft=t.left)},setPadding:function(e,t){void 0!==t.top&&(e.style.paddingTop=t.top),void 0!==t.right&&(e.style.paddingRight=t.right),void 0!==t.bottom&&(e.style.paddingBottom=t.bottom),void 0!==t.left&&(e.style.paddingLeft=t.left)}}},function(e,t,n){},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),n(13);var i=\"pagelib_dim_images\",r=function(e,t){e.querySelector(\"html\").classList[t?\"add\":\"remove\"](i)},a=function(e){return e.querySelector(\"html\").classList.contains(i)};t.default={CLASS:i,dim:function(e,t){return r(e.document,t)},isDim:function(e){return a(e.document)},dimImages:r,areImagesDimmed:a}},function(e,t,n){},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=s(n(2)),a=s(n(1)),l=s(n(5)),o=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}var u=[\"scroll\",\"resize\",r.default.SECTION_TOGGLED_EVENT_TYPE],c=100,d=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this._window=t,this._loadDistanceMultiplier=n,this._placeholders=[],this._registered=!1,this._throttledLoadPlaceholders=o.default.wrap(t,c,function(){return i._loadPlaceholders()})}return i(e,[{key:\"convertImagesToPlaceholders\",value:function(e){var t=l.default.queryLazyLoadableImages(e),n=l.default.convertImagesToPlaceholders(this._window.document,t);this._placeholders=this._placeholders.concat(n),this._register()}},{key:\"collectExistingPlaceholders\",value:function(e){var t=Array.from(e.querySelectorAll(\".\"+l.default.PLACEHOLDER_CLASS));this._placeholders=this._placeholders.concat(t),this._register()}},{key:\"loadPlaceholders\",value:function(){this._throttledLoadPlaceholders()}},{key:\"deregister\",value:function(){var e=this;this._registered&&(u.forEach(function(t){return e._window.removeEventListener(t,e._throttledLoadPlaceholders)}),this._throttledLoadPlaceholders.reset(),this._placeholders=[],this._registered=!1)}},{key:\"_register\",value:function(){var e=this;!this._registered&&this._placeholders.length&&(this._registered=!0,u.forEach(function(t){return e._window.addEventListener(t,e._throttledLoadPlaceholders)}))}},{key:\"_loadPlaceholders\",value:function(){var e=this;this._placeholders=this._placeholders.filter(function(t){var n=!0;return e._isPlaceholderEligibleToLoad(t)&&(l.default.loadPlaceholder(e._window.document,t),n=!1),n}),0===this._placeholders.length&&this.deregister()}},{key:\"_isPlaceholderEligibleToLoad\",value:function(e){return a.default.isVisible(e)&&this._isPlaceholderWithinLoadDistance(e)}},{key:\"_isPlaceholderWithinLoadDistance\",value:function(e){var t=e.getBoundingClientRect(),n=this._window.innerHeight*this._loadDistanceMultiplier;return!(t.top>n||t.bottom<-n)}}]),e}();t.default=d},function(e,t,n){},function(e,t,n){},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=0;t.default={setScrollTop:function(e){i=e},scrollWithDecorOffset:function(e){window.scrollTo(0,e.parentNode.offsetTop-i)},testing:{getScrollTop:function(){return i}}}},,,,,function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i,r=n(23),a=(i=r)&&i.__esModule?i:{default:i};t.default={c1:a.default}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=o(n(24)),r=o(n(25)),a=o(n(17)),l=o(n(26));function o(e){return e&&e.__esModule?e:{default:e}}t.default={Platforms:r.default,PageMods:i.default,Scroller:a.default,Themes:l.default}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=d(n(9)),r=d(n(10)),a=d(n(2)),l=d(n(12)),o=d(n(14)),s=d(n(7)),u=d(n(17)),c=d(n(8));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n=new o.default(e,2);n.collectExistingPlaceholders(t.body),n.loadPlaceholders(),a.default.setupEventHandling(e,t,!0,u.default.scrollWithDecorOffset)};document.addEventListener(\"DOMContentLoaded\",function(){return f(window,document)}),t.default={onPageLoad:f,setMulti:function(e,t,n){void 0!==t.platform&&s.default.setPlatform(e,t.platform),void 0!==t.theme&&c.default.setTheme(e,t.theme),void 0!==t.dimImages&&l.default.dimImages(e,t.dimImages),void 0!==t.margins&&r.default.setMargins(e.body,t.margins),t.areTablesCollapsed&&a.default.toggleCollapsedForAll(e.body),void 0!==t.scrollTop&&u.default.setScrollTop(t.scrollTop),void 0!==t.textSizeAdjustmentPercentage&&i.default.setPercentage(e.body,t.textSizeAdjustmentPercentage),n instanceof Function&&n()},setTheme:function(e,t,n){c.default.setTheme(e,t),n instanceof Function&&n()},setDimImages:function(e,t,n){l.default.dimImages(e,t),n instanceof Function&&n()},setMargins:function(e,t,n){r.default.setMargins(e.body,t),n instanceof Function&&n()},setScrollTop:function(e,t,n){u.default.setScrollTop(t),n instanceof Function&&n()},setTextSizeAdjustmentPercentage:function(e,t,n){i.default.setPercentage(e.body,t),n instanceof Function&&n()},testing:{getScroller:function(){return u.default}}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i,r=n(7);var a=((i=r)&&i.__esModule?i:{default:i}).default.CLASS;t.default={ANDROID:a.ANDROID,IOS:a.IOS}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i,r=n(8);var a=((i=r)&&i.__esModule?i:{default:i}).default.THEME;t.default={DEFAULT:a.DEFAULT,DARK:a.DARK,SEPIA:a.SEPIA,BLACK:a.BLACK}}]).default});\n//# sourceMappingURL=wikimedia-page-library-pcs.js.map"