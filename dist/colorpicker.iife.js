var cn=Object.defineProperty;var ln=(X,I,U)=>I in X?cn(X,I,{enumerable:!0,configurable:!0,writable:!0,value:U}):X[I]=U;var E=(X,I,U)=>ln(X,typeof I!="symbol"?I+"":I,U);(function(X){"use strict";function I(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U={exports:{}},re=typeof Reflect=="object"?Reflect:null,Ve=re&&typeof re.apply=="function"?re.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},ye;re&&typeof re.ownKeys=="function"?ye=re.ownKeys:Object.getOwnPropertySymbols?ye=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:ye=function(e){return Object.getOwnPropertyNames(e)};function kt(t){console&&console.warn&&console.warn(t)}var Xe=Number.isNaN||function(e){return e!==e};function m(){m.init.call(this)}U.exports=m,U.exports.once=Rt,m.EventEmitter=m,m.prototype._events=void 0,m.prototype._eventsCount=0,m.prototype._maxListeners=void 0;var Ue=10;function we(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(m,"defaultMaxListeners",{enumerable:!0,get:function(){return Ue},set:function(t){if(typeof t!="number"||t<0||Xe(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ue=t}}),m.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},m.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Xe(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Ye(t){return t._maxListeners===void 0?m.defaultMaxListeners:t._maxListeners}m.prototype.getMaxListeners=function(){return Ye(this)},m.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var i=e==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var s;if(r.length>0&&(s=r[0]),s instanceof Error)throw s;var c=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw c.context=s,c}var a=o[e];if(a===void 0)return!1;if(typeof a=="function")Ve(a,this,r);else for(var u=a.length,l=Je(a,u),n=0;n<u;++n)Ve(l[n],this,r);return!0};function ze(t,e,r,n){var i,o,s;if(we(r),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),s=o[e]),s===void 0)s=o[e]=r,++t._eventsCount;else if(typeof s=="function"?s=o[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),i=Ye(t),i>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=s.length,kt(c)}return t}m.prototype.addListener=function(e,r){return ze(this,e,r,!1)},m.prototype.on=m.prototype.addListener,m.prototype.prependListener=function(e,r){return ze(this,e,r,!0)};function Dt(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Ke(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=Dt.bind(n);return i.listener=r,n.wrapFn=i,i}m.prototype.once=function(e,r){return we(r),this.on(e,Ke(this,e,r)),this},m.prototype.prependOnceListener=function(e,r){return we(r),this.prependListener(e,Ke(this,e,r)),this},m.prototype.removeListener=function(e,r){var n,i,o,s,c;if(we(r),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(o=-1,s=n.length-1;s>=0;s--)if(n[s]===r||n[s].listener===r){c=n[s].listener,o=s;break}if(o<0)return this;o===0?n.shift():Mt(n,o),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,c||r)}return this},m.prototype.off=m.prototype.removeListener,m.prototype.removeAllListeners=function(e){var r,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var o=Object.keys(n),s;for(i=0;i<o.length;++i)s=o[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(i=r.length-1;i>=0;i--)this.removeListener(e,r[i]);return this};function Ze(t,e,r){var n=t._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?r?[i.listener||i]:[i]:r?jt(i):Je(i,i.length)}m.prototype.listeners=function(e){return Ze(this,e,!0)},m.prototype.rawListeners=function(e){return Ze(this,e,!1)},m.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Ge.call(t,e)},m.prototype.listenerCount=Ge;function Ge(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}m.prototype.eventNames=function(){return this._eventsCount>0?ye(this._events):[]};function Je(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function Mt(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function jt(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function Rt(t,e){return new Promise(function(r,n){function i(s){t.removeListener(e,o),n(s)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",i),r([].slice.call(arguments))}Qe(t,e,o,{once:!0}),e!=="error"&&Bt(t,i,{once:!0})})}function Bt(t,e,r){typeof t.on=="function"&&Qe(t,"error",e,r)}function Qe(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(o){n.once&&t.removeEventListener(e,i),r(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var et=U.exports;const Tt=I(et);var k="top",R="bottom",B="right",D="left",Se="auto",le=[k,R,B,D],ne="start",ue="end",Ft="clippingParents",tt="viewport",fe="popper",Ht="reference",rt=le.reduce(function(t,e){return t.concat([e+"-"+ne,e+"-"+ue])},[]),nt=[].concat(le,[Se]).reduce(function(t,e){return t.concat([e,e+"-"+ne,e+"-"+ue])},[]),Nt="beforeRead",Wt="read",It="afterRead",qt="beforeMain",Vt="main",Xt="afterMain",Ut="beforeWrite",Yt="write",zt="afterWrite",Kt=[Nt,Wt,It,qt,Vt,Xt,Ut,Yt,zt];function N(t){return t?(t.nodeName||"").toLowerCase():null}function M(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){var e=M(t).Element;return t instanceof e||t instanceof Element}function T(t){var e=M(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pe(t){if(typeof ShadowRoot>"u")return!1;var e=M(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Zt(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},i=e.attributes[r]||{},o=e.elements[r];!T(o)||!N(o)||(Object.assign(o.style,n),Object.keys(i).forEach(function(s){var c=i[s];c===!1?o.removeAttribute(s):o.setAttribute(s,c===!0?"":c)}))})}function Gt(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],o=e.attributes[n]||{},s=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),c=s.reduce(function(a,u){return a[u]="",a},{});!T(i)||!N(i)||(Object.assign(i.style,c),Object.keys(o).forEach(function(a){i.removeAttribute(a)}))})}}const Jt={name:"applyStyles",enabled:!0,phase:"write",fn:Zt,effect:Gt,requires:["computeStyles"]};function W(t){return t.split("-")[0]}var Z=Math.max,be=Math.min,ie=Math.round;function ke(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function it(){return!/^((?!chrome|android).)*safari/i.test(ke())}function oe(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),i=1,o=1;e&&T(t)&&(i=t.offsetWidth>0&&ie(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&ie(n.height)/t.offsetHeight||1);var s=K(t)?M(t):window,c=s.visualViewport,a=!it()&&r,u=(n.left+(a&&c?c.offsetLeft:0))/i,l=(n.top+(a&&c?c.offsetTop:0))/o,v=n.width/i,w=n.height/o;return{width:v,height:w,top:l,right:u+v,bottom:l+w,left:u,x:u,y:l}}function De(t){var e=oe(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function ot(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Pe(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function q(t){return M(t).getComputedStyle(t)}function Qt(t){return["table","td","th"].indexOf(N(t))>=0}function Y(t){return((K(t)?t.ownerDocument:t.document)||window.document).documentElement}function xe(t){return N(t)==="html"?t:t.assignedSlot||t.parentNode||(Pe(t)?t.host:null)||Y(t)}function st(t){return!T(t)||q(t).position==="fixed"?null:t.offsetParent}function er(t){var e=/firefox/i.test(ke()),r=/Trident/i.test(ke());if(r&&T(t)){var n=q(t);if(n.position==="fixed")return null}var i=xe(t);for(Pe(i)&&(i=i.host);T(i)&&["html","body"].indexOf(N(i))<0;){var o=q(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function pe(t){for(var e=M(t),r=st(t);r&&Qt(r)&&q(r).position==="static";)r=st(r);return r&&(N(r)==="html"||N(r)==="body"&&q(r).position==="static")?e:r||er(t)||e}function Me(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function de(t,e,r){return Z(t,be(e,r))}function tr(t,e,r){var n=de(t,e,r);return n>r?r:n}function at(){return{top:0,right:0,bottom:0,left:0}}function ct(t){return Object.assign({},at(),t)}function lt(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var rr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ct(typeof e!="number"?e:lt(e,le))};function nr(t){var e,r=t.state,n=t.name,i=t.options,o=r.elements.arrow,s=r.modifiersData.popperOffsets,c=W(r.placement),a=Me(c),u=[D,B].indexOf(c)>=0,l=u?"height":"width";if(!(!o||!s)){var v=rr(i.padding,r),w=De(o),f=a==="y"?k:D,x=a==="y"?R:B,h=r.rects.reference[l]+r.rects.reference[a]-s[a]-r.rects.popper[l],d=s[a]-r.rects.reference[a],b=pe(o),_=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,L=h/2-d/2,p=v[f],g=_-w[l]-v[x],y=_/2-w[l]/2+L,O=de(p,y,g),A=a;r.modifiersData[n]=(e={},e[A]=O,e.centerOffset=O-y,e)}}function ir(t){var e=t.state,r=t.options,n=r.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||ot(e.elements.popper,i)&&(e.elements.arrow=i))}const or={name:"arrow",enabled:!0,phase:"main",fn:nr,effect:ir,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(t){return t.split("-")[1]}var sr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ar(t,e){var r=t.x,n=t.y,i=e.devicePixelRatio||1;return{x:ie(r*i)/i||0,y:ie(n*i)/i||0}}function ut(t){var e,r=t.popper,n=t.popperRect,i=t.placement,o=t.variation,s=t.offsets,c=t.position,a=t.gpuAcceleration,u=t.adaptive,l=t.roundOffsets,v=t.isFixed,w=s.x,f=w===void 0?0:w,x=s.y,h=x===void 0?0:x,d=typeof l=="function"?l({x:f,y:h}):{x:f,y:h};f=d.x,h=d.y;var b=s.hasOwnProperty("x"),_=s.hasOwnProperty("y"),L=D,p=k,g=window;if(u){var y=pe(r),O="clientHeight",A="clientWidth";if(y===M(r)&&(y=Y(r),q(y).position!=="static"&&c==="absolute"&&(O="scrollHeight",A="scrollWidth")),y=y,i===k||(i===D||i===B)&&o===ue){p=R;var C=v&&y===g&&g.visualViewport?g.visualViewport.height:y[O];h-=C-n.height,h*=a?1:-1}if(i===D||(i===k||i===R)&&o===ue){L=B;var $=v&&y===g&&g.visualViewport?g.visualViewport.width:y[A];f-=$-n.width,f*=a?1:-1}}var S=Object.assign({position:c},u&&sr),F=l===!0?ar({x:f,y:h},M(r)):{x:f,y:h};if(f=F.x,h=F.y,a){var P;return Object.assign({},S,(P={},P[p]=_?"0":"",P[L]=b?"0":"",P.transform=(g.devicePixelRatio||1)<=1?"translate("+f+"px, "+h+"px)":"translate3d("+f+"px, "+h+"px, 0)",P))}return Object.assign({},S,(e={},e[p]=_?h+"px":"",e[L]=b?f+"px":"",e.transform="",e))}function cr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,i=n===void 0?!0:n,o=r.adaptive,s=o===void 0?!0:o,c=r.roundOffsets,a=c===void 0?!0:c,u={placement:W(e.placement),variation:se(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:a})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const lr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:cr,data:{}};var Oe={passive:!0};function ur(t){var e=t.state,r=t.instance,n=t.options,i=n.scroll,o=i===void 0?!0:i,s=n.resize,c=s===void 0?!0:s,a=M(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(l){l.addEventListener("scroll",r.update,Oe)}),c&&a.addEventListener("resize",r.update,Oe),function(){o&&u.forEach(function(l){l.removeEventListener("scroll",r.update,Oe)}),c&&a.removeEventListener("resize",r.update,Oe)}}const fr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ur,data:{}};var pr={left:"right",right:"left",bottom:"top",top:"bottom"};function _e(t){return t.replace(/left|right|bottom|top/g,function(e){return pr[e]})}var dr={start:"end",end:"start"};function ft(t){return t.replace(/start|end/g,function(e){return dr[e]})}function je(t){var e=M(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Re(t){return oe(Y(t)).left+je(t).scrollLeft}function hr(t,e){var r=M(t),n=Y(t),i=r.visualViewport,o=n.clientWidth,s=n.clientHeight,c=0,a=0;if(i){o=i.width,s=i.height;var u=it();(u||!u&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:c+Re(t),y:a}}function vr(t){var e,r=Y(t),n=je(t),i=(e=t.ownerDocument)==null?void 0:e.body,o=Z(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=Z(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-n.scrollLeft+Re(t),a=-n.scrollTop;return q(i||r).direction==="rtl"&&(c+=Z(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:c,y:a}}function Be(t){var e=q(t),r=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function pt(t){return["html","body","#document"].indexOf(N(t))>=0?t.ownerDocument.body:T(t)&&Be(t)?t:pt(xe(t))}function he(t,e){var r;e===void 0&&(e=[]);var n=pt(t),i=n===((r=t.ownerDocument)==null?void 0:r.body),o=M(n),s=i?[o].concat(o.visualViewport||[],Be(n)?n:[]):n,c=e.concat(s);return i?c:c.concat(he(xe(s)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function mr(t,e){var r=oe(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function dt(t,e,r){return e===tt?Te(hr(t,r)):K(e)?mr(e,r):Te(vr(Y(t)))}function gr(t){var e=he(xe(t)),r=["absolute","fixed"].indexOf(q(t).position)>=0,n=r&&T(t)?pe(t):t;return K(n)?e.filter(function(i){return K(i)&&ot(i,n)&&N(i)!=="body"}):[]}function yr(t,e,r,n){var i=e==="clippingParents"?gr(t):[].concat(e),o=[].concat(i,[r]),s=o[0],c=o.reduce(function(a,u){var l=dt(t,u,n);return a.top=Z(l.top,a.top),a.right=be(l.right,a.right),a.bottom=be(l.bottom,a.bottom),a.left=Z(l.left,a.left),a},dt(t,s,n));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ht(t){var e=t.reference,r=t.element,n=t.placement,i=n?W(n):null,o=n?se(n):null,s=e.x+e.width/2-r.width/2,c=e.y+e.height/2-r.height/2,a;switch(i){case k:a={x:s,y:e.y-r.height};break;case R:a={x:s,y:e.y+e.height};break;case B:a={x:e.x+e.width,y:c};break;case D:a={x:e.x-r.width,y:c};break;default:a={x:e.x,y:e.y}}var u=i?Me(i):null;if(u!=null){var l=u==="y"?"height":"width";switch(o){case ne:a[u]=a[u]-(e[l]/2-r[l]/2);break;case ue:a[u]=a[u]+(e[l]/2-r[l]/2);break}}return a}function ve(t,e){e===void 0&&(e={});var r=e,n=r.placement,i=n===void 0?t.placement:n,o=r.strategy,s=o===void 0?t.strategy:o,c=r.boundary,a=c===void 0?Ft:c,u=r.rootBoundary,l=u===void 0?tt:u,v=r.elementContext,w=v===void 0?fe:v,f=r.altBoundary,x=f===void 0?!1:f,h=r.padding,d=h===void 0?0:h,b=ct(typeof d!="number"?d:lt(d,le)),_=w===fe?Ht:fe,L=t.rects.popper,p=t.elements[x?_:w],g=yr(K(p)?p:p.contextElement||Y(t.elements.popper),a,l,s),y=oe(t.elements.reference),O=ht({reference:y,element:L,strategy:"absolute",placement:i}),A=Te(Object.assign({},L,O)),C=w===fe?A:y,$={top:g.top-C.top+b.top,bottom:C.bottom-g.bottom+b.bottom,left:g.left-C.left+b.left,right:C.right-g.right+b.right},S=t.modifiersData.offset;if(w===fe&&S){var F=S[i];Object.keys($).forEach(function(P){var G=[B,R].indexOf(P)>=0?1:-1,J=[k,R].indexOf(P)>=0?"y":"x";$[P]+=F[J]*G})}return $}function wr(t,e){e===void 0&&(e={});var r=e,n=r.placement,i=r.boundary,o=r.rootBoundary,s=r.padding,c=r.flipVariations,a=r.allowedAutoPlacements,u=a===void 0?nt:a,l=se(n),v=l?c?rt:rt.filter(function(x){return se(x)===l}):le,w=v.filter(function(x){return u.indexOf(x)>=0});w.length===0&&(w=v);var f=w.reduce(function(x,h){return x[h]=ve(t,{placement:h,boundary:i,rootBoundary:o,padding:s})[W(h)],x},{});return Object.keys(f).sort(function(x,h){return f[x]-f[h]})}function br(t){if(W(t)===Se)return[];var e=_e(t);return[ft(t),e,ft(e)]}function xr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,c=s===void 0?!0:s,a=r.fallbackPlacements,u=r.padding,l=r.boundary,v=r.rootBoundary,w=r.altBoundary,f=r.flipVariations,x=f===void 0?!0:f,h=r.allowedAutoPlacements,d=e.options.placement,b=W(d),_=b===d,L=a||(_||!x?[_e(d)]:br(d)),p=[d].concat(L).reduce(function(ce,z){return ce.concat(W(z)===Se?wr(e,{placement:z,boundary:l,rootBoundary:v,padding:u,flipVariations:x,allowedAutoPlacements:h}):z)},[]),g=e.rects.reference,y=e.rects.popper,O=new Map,A=!0,C=p[0],$=0;$<p.length;$++){var S=p[$],F=W(S),P=se(S)===ne,G=[k,R].indexOf(F)>=0,J=G?"width":"height",j=ve(e,{placement:S,boundary:l,rootBoundary:v,altBoundary:w,padding:u}),H=G?P?B:D:P?R:k;g[J]>y[J]&&(H=_e(H));var Le=_e(H),Q=[];if(o&&Q.push(j[F]<=0),c&&Q.push(j[H]<=0,j[Le]<=0),Q.every(function(ce){return ce})){C=S,A=!1;break}O.set(S,Q)}if(A)for(var Ee=x?3:1,Ne=function(z){var ge=p.find(function(Ce){var ee=O.get(Ce);if(ee)return ee.slice(0,z).every(function(We){return We})});if(ge)return C=ge,"break"},me=Ee;me>0;me--){var $e=Ne(me);if($e==="break")break}e.placement!==C&&(e.modifiersData[n]._skip=!0,e.placement=C,e.reset=!0)}}const Or={name:"flip",enabled:!0,phase:"main",fn:xr,requiresIfExists:["offset"],data:{_skip:!1}};function vt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function mt(t){return[k,B,R,D].some(function(e){return t[e]>=0})}function _r(t){var e=t.state,r=t.name,n=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,s=ve(e,{elementContext:"reference"}),c=ve(e,{altBoundary:!0}),a=vt(s,n),u=vt(c,i,o),l=mt(a),v=mt(u);e.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const Lr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_r};function Er(t,e,r){var n=W(t),i=[D,k].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,s=o[0],c=o[1];return s=s||0,c=(c||0)*i,[D,B].indexOf(n)>=0?{x:c,y:s}:{x:s,y:c}}function $r(t){var e=t.state,r=t.options,n=t.name,i=r.offset,o=i===void 0?[0,0]:i,s=nt.reduce(function(l,v){return l[v]=Er(v,e.rects,o),l},{}),c=s[e.placement],a=c.x,u=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=a,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=s}const Cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:$r};function Ar(t){var e=t.state,r=t.name;e.modifiersData[r]=ht({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Sr={name:"popperOffsets",enabled:!0,phase:"read",fn:Ar,data:{}};function Pr(t){return t==="x"?"y":"x"}function kr(t){var e=t.state,r=t.options,n=t.name,i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,c=s===void 0?!1:s,a=r.boundary,u=r.rootBoundary,l=r.altBoundary,v=r.padding,w=r.tether,f=w===void 0?!0:w,x=r.tetherOffset,h=x===void 0?0:x,d=ve(e,{boundary:a,rootBoundary:u,padding:v,altBoundary:l}),b=W(e.placement),_=se(e.placement),L=!_,p=Me(b),g=Pr(p),y=e.modifiersData.popperOffsets,O=e.rects.reference,A=e.rects.popper,C=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,$=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,F={x:0,y:0};if(y){if(o){var P,G=p==="y"?k:D,J=p==="y"?R:B,j=p==="y"?"height":"width",H=y[p],Le=H+d[G],Q=H-d[J],Ee=f?-A[j]/2:0,Ne=_===ne?O[j]:A[j],me=_===ne?-A[j]:-O[j],$e=e.elements.arrow,ce=f&&$e?De($e):{width:0,height:0},z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:at(),ge=z[G],Ce=z[J],ee=de(0,O[j],ce[j]),We=L?O[j]/2-Ee-ee-ge-$.mainAxis:Ne-ee-ge-$.mainAxis,tn=L?-O[j]/2+Ee+ee+Ce+$.mainAxis:me+ee+Ce+$.mainAxis,Ie=e.elements.arrow&&pe(e.elements.arrow),rn=Ie?p==="y"?Ie.clientTop||0:Ie.clientLeft||0:0,Ot=(P=S==null?void 0:S[p])!=null?P:0,nn=H+We-Ot-rn,on=H+tn-Ot,_t=de(f?be(Le,nn):Le,H,f?Z(Q,on):Q);y[p]=_t,F[p]=_t-H}if(c){var Lt,sn=p==="x"?k:D,an=p==="x"?R:B,te=y[g],Ae=g==="y"?"height":"width",Et=te+d[sn],$t=te-d[an],qe=[k,D].indexOf(b)!==-1,Ct=(Lt=S==null?void 0:S[g])!=null?Lt:0,At=qe?Et:te-O[Ae]-A[Ae]-Ct+$.altAxis,St=qe?te+O[Ae]+A[Ae]-Ct-$.altAxis:$t,Pt=f&&qe?tr(At,te,St):de(f?At:Et,te,f?St:$t);y[g]=Pt,F[g]=Pt-te}e.modifiersData[n]=F}}const Dr={name:"preventOverflow",enabled:!0,phase:"main",fn:kr,requiresIfExists:["offset"]};function Mr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function jr(t){return t===M(t)||!T(t)?je(t):Mr(t)}function Rr(t){var e=t.getBoundingClientRect(),r=ie(e.width)/t.offsetWidth||1,n=ie(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Br(t,e,r){r===void 0&&(r=!1);var n=T(e),i=T(e)&&Rr(e),o=Y(e),s=oe(t,i,r),c={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((N(e)!=="body"||Be(o))&&(c=jr(e)),T(e)?(a=oe(e,!0),a.x+=e.clientLeft,a.y+=e.clientTop):o&&(a.x=Re(o))),{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function Tr(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function i(o){r.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(c){if(!r.has(c)){var a=e.get(c);a&&i(a)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||i(o)}),n}function Fr(t){var e=Tr(t);return Kt.reduce(function(r,n){return r.concat(e.filter(function(i){return i.phase===n}))},[])}function Hr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Nr(t){var e=t.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var gt={placement:"bottom",modifiers:[],strategy:"absolute"};function yt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Wr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,i=e.defaultOptions,o=i===void 0?gt:i;return function(c,a,u){u===void 0&&(u=o);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},gt,o),modifiersData:{},elements:{reference:c,popper:a},attributes:{},styles:{}},v=[],w=!1,f={state:l,setOptions:function(b){var _=typeof b=="function"?b(l.options):b;h(),l.options=Object.assign({},o,l.options,_),l.scrollParents={reference:K(c)?he(c):c.contextElement?he(c.contextElement):[],popper:he(a)};var L=Fr(Nr([].concat(n,l.options.modifiers)));return l.orderedModifiers=L.filter(function(p){return p.enabled}),x(),f.update()},forceUpdate:function(){if(!w){var b=l.elements,_=b.reference,L=b.popper;if(yt(_,L)){l.rects={reference:Br(_,pe(L),l.options.strategy==="fixed"),popper:De(L)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function($){return l.modifiersData[$.name]=Object.assign({},$.data)});for(var p=0;p<l.orderedModifiers.length;p++){if(l.reset===!0){l.reset=!1,p=-1;continue}var g=l.orderedModifiers[p],y=g.fn,O=g.options,A=O===void 0?{}:O,C=g.name;typeof y=="function"&&(l=y({state:l,options:A,name:C,instance:f})||l)}}}},update:Hr(function(){return new Promise(function(d){f.forceUpdate(),d(l)})}),destroy:function(){h(),w=!0}};if(!yt(c,a))return f;f.setOptions(u).then(function(d){!w&&u.onFirstUpdate&&u.onFirstUpdate(d)});function x(){l.orderedModifiers.forEach(function(d){var b=d.name,_=d.options,L=_===void 0?{}:_,p=d.effect;if(typeof p=="function"){var g=p({state:l,name:b,instance:f,options:L}),y=function(){};v.push(g||y)}})}function h(){v.forEach(function(d){return d()}),v=[]}return f}}var Ir=[fr,Sr,lr,Jt,Cr,Or,Dr,or,Lr],qr=Wr({defaultModifiers:Ir});const Vr=([t,e,r,n])=>{const i=Math.max(t,e,r),o=i-Math.min(t,e,r),s=o&&(i==t?(e-r)/o:i==e?2+(r-t)/o:4+(t-e)/o);return[60*(s<0?s+6:s),i&&o/i,i,n]},wt=t=>t.replace(/[^0-9%.,]/g,"").split(",").map(e=>parseFloat(e)/(e.endsWith("%")?100:1)),Xr=t=>{const e=document.createElement("span");e.style.display="none",e.style.color=t,document.body.append(e);const{color:r}=getComputedStyle(e);if(e.remove(),!r)return null;const[n,i,o,s]=wt(r);return Vr([n/255,i/255,o/255,s])},Ur=t=>{const e=wt(t).map((r,n)=>Math.min(r,n?1:255));return e.length<3||e.some(r=>isNaN(r))?null:e},bt=t=>{let e;/^hsva?\(/.test(t)?e="hsv":/^hsla?\(/.test(t)?e="hsl":/^rgba?\(/.test(t)?e="rgb":e="hex";const r=e==="hsv"?Ur(t):Xr(t);if(!r)throw new Error("Color could not be parsed!");return r[3]=r[3]??1,{color:r,format:e}},ae=t=>t.toFixed(),Yr=(t,e)=>(""+ +t.toFixed(e)).replace(/^0\./g,"."),zr=([t,e,r,n])=>{const i=r-r*e/2,o=Math.min(i,1-i);return[t,o?(r-i)/o:0,i,n]},xt=([t,e,r,n])=>{const i=(o,s=(o+t/60)%6)=>r-r*e*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1),n]},Fe=([t,e,r,n],i)=>{const o=n<1?"a":"",s=i.startsWith("hs")?[ae(t),ae(e*100)+"%",ae(r*100)+"%"]:[ae(t*255),ae(e*255),ae(r*255)];return o&&s.push(Yr(n,2)),`${i}${o}(${s.join()})`},Kr=t=>"#"+t.slice(0,t[3]<1?4:3).map(e=>Math.round(e*255).toString(16).padStart(2,"0")).join(""),Zr=(t,e)=>e==="hsv"?Fe(t,e):e==="hsl"?Fe(zr(t),e):e==="rgb"?Fe(xt(t),e):Kr(xt(t));class V{constructor(e){E(this,"color");if(!e)this.color=[0,0,0,1];else if(e instanceof V)this.color=[...e.color];else if(Array.isArray(e)){const[r=0,n=0,i=0,o=1]=e;this.color=[r,n,i,o]}else this.color=bt(e).color}getSet(e,r){if(r===void 0)return this.color[e];const n=[...this.color];return n[e]=r,new V(n)}hue(e){return this.getSet(0,e)}saturation(e){return this.getSet(1,e)}value(e){return this.getSet(2,e)}alpha(e){return this.getSet(3,e)}string(e){return Zr(this.color,e)}toString(){return this.string("hex")}clone(){return new V(this)}}class He extends Tt{constructor(r){super();E(this,"$track");E(this,"$thumb");this.$track=r,this.$thumb=r.querySelector(".cp_thumb"),this.$track.addEventListener("pointerdown",n=>{this.$track.setPointerCapture(n.pointerId),this.handleDrag(n)}),this.$track.addEventListener("pointermove",n=>{this.$track.hasPointerCapture(n.pointerId)&&this.handleDrag(n)}),this.$track.addEventListener("pointerup",n=>{this.$track.releasePointerCapture(n.pointerId)})}handleDrag(r){const n=this.$track.getBoundingClientRect();let i=(r.clientX-n.x)/n.width;i<0&&(i=0),i>1&&(i=1);let o=(r.clientY-n.y)/n.height;o<0&&(o=0),o>1&&(o=1),this.emit("drag",i,o)}moveThumb(r,n){r!==void 0&&(this.$thumb.style.left=`${r*100}%`),n!==void 0&&(this.$thumb.style.top=`${n*100}%`)}}const Gr={theme:null,toggleStyle:"button",animationDuration:150,defaultColor:null,swatches:["#D95D5D","#DB8525","#E8C43C","#BED649","#9ECBDB","#6399A5","#C771A1","#FFFFFF","#000000"],enableAlpha:!0,enableEyedropper:!0,formats:["hex","rgb","hsv","hsl"],defaultFormat:"hex",commitMode:"confirm",showSubmitButton:!0,showClearButton:!0,dismissOnOutsideClick:!0,dismissOnEscape:!0},Jr='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"/></svg>',Qr=`<div class="cp_dialog">
  <div class="cp_area cp_area-hsv">
    <div class="cp_inner"></div>
    <div class="cp_thumb"></div>
  </div>
  <div class="cp_dialog-inner">
    <div class="cp_slider-hue cp_slider">
      <div class="cp_thumb"></div>
    </div>
    <div class="cp_slider cp_slider-alpha">
      <div class="cp_inner"></div>
      <div class="cp_thumb"></div>
    </div>
    <div class="cp_swatches"></div>
    <div class="cp_formats"></div>
    <div class="cp_input-group">
      <button class="cp_action cp_eyedrop">
        <!-- prettier-ignore -->
        <svg class="cp_icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="m207.8 87.6l-25.37 25.53l4.89 4.88a16 16 0 0 1 0 22.64l-9 9a8 8 0 0 1-11.32 0l-60.68-60.7a8 8 0 0 1 0-11.32l9-9a16 16 0 0 1 22.63 0l4.88 4.89l25-25.11c10.79-10.79 28.37-11.45 39.45-1a28 28 0 0 1 .52 40.19" opacity="0.2"/><path d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34ZM202.13 82l-25.37 25.52a8 8 0 0 0 0 11.3l4.89 4.89a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34a8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"/></g></svg>
      </button>
      <input class="cp_input" value="#ff0000" autocomplete="false" spellcheck="false" />
      <button class="cp_action cp_clear">
        <!-- prettier-ignore -->
        <svg class="cp_icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 56v144a8 8 0 0 1-8 8H68.53a8 8 0 0 1-6.86-3.88L16 128l45.67-76.12A8 8 0 0 1 68.53 48H216a8 8 0 0 1 8 8" opacity="0.2"/><path d="M216 40H68.53a16.08 16.08 0 0 0-13.72 7.77L9.14 123.88a8 8 0 0 0 0 8.24l45.67 76.11A16.08 16.08 0 0 0 68.53 216H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M61.67 204.12l6.86-4.12ZM216 200H68.53l-43.2-72l43.2-72H216Zm-109.66-53.66L124.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L136 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L147.31 128l18.35 18.34a8 8 0 0 1-11.32 11.32L136 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32"/></g></svg>
      </button>
      <button class="cp_action cp_submit">
        <!-- prettier-ignore -->
        <svg class="cp_icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32" opacity="0.2"/><path d="m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z"/></g></svg>
      </button>
    </div>
  </div>
</div>
`;class en extends et.EventEmitter{constructor(r,n={}){var s;super();E(this,"_open",!1);E(this,"_unset",!0);E(this,"_format");E(this,"_color");E(this,"_appliedColor");E(this,"config");E(this,"popper");E(this,"$root");E(this,"$dialog");E(this,"$button");E(this,"$input");E(this,"hsvSlider");E(this,"hueSlider");E(this,"alphaSlider");E(this,"$formats");E(this,"$colorInput");if(this.config={...Gr,...n},r?typeof r=="string"&&(r=document.querySelector(r)):r=document.createElement("div"),!r)throw new Error("Element is null.");r instanceof HTMLInputElement?this.$input=r:r instanceof HTMLButtonElement?this.$button=r:this.$root=r,this.$root||(this.$root=document.createElement("div"),r.insertAdjacentElement("beforebegin",this.$root),(s=r.parentElement)==null||s.removeChild(r)),this.$root.classList.add("cp_root"),this.$button=this.$button??document.createElement("button"),this.$button.classList.add("cp_toggle"),this.$input=this.$input??document.createElement("input"),this.$input.tabIndex=-1;const i=document.createElement("div");i.className="cp_caret",i.innerHTML=Jr,this.$root.append(this.$button),this.$button.append(this.$input,i),this.$root.insertAdjacentHTML("afterbegin",Qr),this.$dialog=this.$root.querySelector(".cp_dialog"),this.$colorInput=this.$root.querySelector(".cp_input"),this.close(),this.populateDialog(),this.bindDialog(),this.setFormat(this.config.defaultFormat,!1);const o=this.config.defaultColor??this.$input.value;this._setAppliedColor(new V(o),!1),o||this.clear(!1),this.$root.style.setProperty("--cp-delay",`${this.config.animationDuration}ms`),this.config.toggleStyle==="input"&&this.$button.classList.add("cp_wide"),this.$button.addEventListener("click",()=>this.toggle()),this.config.dismissOnOutsideClick&&window.addEventListener("pointerdown",c=>{if(!this._open)return;c.target.closest(".cp_root")||this.close()}),this.config.dismissOnEscape&&window.addEventListener("keydown",c=>{if(!this._open||c.key!=="Escape")return;const a=document.querySelector(":focus");(!a||a.closest(".cp_root"))&&this.close()})}get isOpen(){return this._open}get color(){return this._unset?null:this._appliedColor}get selectedColor(){return this._color}get format(){return this._format}get element(){return this.$root}get input(){return this.$input}toggle(r=!this._open,n=!0){r?this.open(n):this.close(n)}open(r=!0){var n;this._open=!0,(n=window.cp_openPicker)==null||n.close(),window.cp_openPicker=this,this.$dialog.style.removeProperty("display"),setTimeout(()=>this.$root.classList.add("cp_open")),this.popper=qr(this.$button,this.$dialog,{placement:"top",strategy:"absolute",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),r&&this.emit("open")}populateDialog(){if(this.config.swatches){const r=this.config.swatches.map(n=>{const i=document.createElement("button");i.className="cp_swatch",i.style.setProperty("--cp-color",n),i.dataset.color=n;const o=new V(i.dataset.color);return i.addEventListener("click",()=>this._setColor(o)),i});this.$root.querySelector(".cp_swatches").append(...r)}this.config.formats&&(this.$formats=this.config.formats.map(r=>{const n=document.createElement("button");return n.className="cp_format",n.dataset.format=r,n.textContent=r.toUpperCase(),n.addEventListener("click",()=>this.setFormat(r)),n}),this.$root.querySelector(".cp_formats").append(...this.$formats))}bindDialog(){const r=this.$root.querySelector(".cp_area-hsv");this.hsvSlider=new He(r),this.hsvSlider.on("drag",(a,u)=>{this._setColor(this._color.saturation(a).value(1-u))});const n=this.$root.querySelector(".cp_slider-hue");this.hueSlider=new He(n),this.hueSlider.on("drag",a=>{this._setColor(this._color.hue(a*360))});const i=this.$root.querySelector(".cp_slider-alpha");this.config.enableAlpha?(this.alphaSlider=new He(i),this.alphaSlider.on("drag",a=>{this._setColor(this._color.alpha(a),!0)})):i.remove(),this.$colorInput.addEventListener("input",()=>{try{const{color:a,format:u}=bt(this.$colorInput.value);this.setFormat(u,!1),this._setColor(new V(a),!1)}catch{}});const o=this.$root.querySelector(".cp_eyedrop");this.config.enableEyedropper&&"EyeDropper"in window?o.addEventListener("click",()=>{new EyeDropper().open().then(a=>{const u=new V(a.sRGBHex);this._setColor(u)}).catch(()=>{})}):o.remove();const s=this.$root.querySelector(".cp_submit");this.config.showSubmitButton?s.addEventListener("click",()=>{this._setAppliedColor(this._color),this.close()}):s.remove();const c=this.$root.querySelector(".cp_clear");this.config.showClearButton?c.addEventListener("click",()=>{this.clear(),this.close()}):c.remove()}close(r=!0){this._open=!1,window.cp_openPicker=void 0,this.$root.classList.remove("cp_open"),setTimeout(()=>{var n;this.$dialog.style.display="none",(n=this.popper)==null||n.destroy(),this.popper=void 0},this.config.animationDuration),r&&this.emit("close")}clear(r=!0){this._unset=!0,this.updateAppliedColor(r)}setColor(r,n=!0){if(!r)return this.clear(n);this._setAppliedColor(new V(r),n)}setFormat(r,n=!0){this._format=r,this.updateFormat(),n&&(this.updateColor(),this.updateAppliedColor())}_setColor(r,n=!0){if(this.config.commitMode==="instant")return this._setAppliedColor(r);this._color=r,this.updateColor(n)}_setAppliedColor(r,n=!0){this._unset=!1,this._color=r,this._appliedColor=r,this.updateColor(!0),this.updateAppliedColor(n)}updateColor(r=!0){var n;this.$root.style.setProperty("--cp-color",this._color.toString()),this.$root.style.setProperty("--cp-hue",this._color.hue().toString()),this.$root.style.setProperty("--cp-alpha",this._color.alpha().toString()),this.hsvSlider.moveThumb(this._color.saturation(),1-this._color.value()),this.hueSlider.moveThumb(this._color.hue()/360),(n=this.alphaSlider)==null||n.moveThumb(this._color.alpha()),r&&(this.$colorInput.value=this._color.string(this._format))}updateAppliedColor(r=!0){var i;this.$root.classList.toggle("cp_unset",this._unset),this.$root.style.setProperty("--cp-applied",((i=this.color)==null?void 0:i.toString())??"transparent");const n=this._appliedColor.string(this._format);this.$input.value=this._unset?"-":n,r&&this.emit("pick",this.color)}updateFormat(){if(!this.$formats)return;this.$formats.forEach(n=>n.removeAttribute("aria-checked"));const r=this.$formats.find(n=>n.dataset.format===this._format);r&&(r.ariaChecked="true")}}X.ColorPicker=en,Object.defineProperty(X,Symbol.toStringTag,{value:"Module"})})(this.window=this.window||{});