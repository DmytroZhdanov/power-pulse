import{_ as qt,N as st,O as Yt,Q as Xt,r as f,S as F,U as Kt,V as oe,W as y,X as w,Y as Qt,Z as lt,n as S,P as T,$ as Zt,j as v,f as pe,a0 as Jt,a1 as en,B as Ce,l as tn,a2 as nn,F as rn,E as on}from"./index-a7ddf542.js";import{T as an}from"./TitlePage-63e521f7.js";import{u as un}from"./index-501fa918.js";function sn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}const ln="/power-pulse/assets/bg_eating-526af03d.jpg",cn="/power-pulse/assets/bg_eating@2x-53f5e280.jpg",dn="/power-pulse/assets/bg_eating@3x-1df10d6d.jpg";function Me(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function ct(n,e){if(n){if(typeof n=="string")return Me(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Me(n,e)}}function pn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&qt(n,e)}function fe(n){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},fe(n)}function fn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hn(n,e){if(e&&(st(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sn(n)}function mn(n){var e=fn();return function(){var r=fe(n),t;if(e){var a=fe(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return hn(this,t)}}function vn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Yt(r.key),r)}}function gn(n,e,i){return e&&ze(n.prototype,e),i&&ze(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function bn(n){if(Array.isArray(n))return n}function xn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,t,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(c){l=!0,t=c}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw t}}return o}}function En(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return bn(n)||xn(n,e)||ct(n,e)||En()}function X(n,e){if(n==null)return{};var i=Xt(n,e),r,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var Cn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Sn(n){var e=n.defaultInputValue,i=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,a=n.defaultValue,s=a===void 0?null:a,o=n.inputValue,u=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,b=n.onMenuOpen,E=n.value,x=X(n,Cn),g=f.useState(o!==void 0?o:i),m=Y(g,2),h=m[0],p=m[1],C=f.useState(u!==void 0?u:t),O=Y(C,2),I=O[0],D=O[1],M=f.useState(E!==void 0?E:s),A=Y(M,2),P=A[0],H=A[1],_=f.useCallback(function(W,K){typeof l=="function"&&l(W,K),H(W)},[l]),B=f.useCallback(function(W,K){var Q;typeof c=="function"&&(Q=c(W,K)),p(Q!==void 0?Q:W)},[c]),N=f.useCallback(function(){typeof b=="function"&&b(),D(!0)},[b]),R=f.useCallback(function(){typeof d=="function"&&d(),D(!1)},[d]),L=o!==void 0?o:h,$=u!==void 0?u:I,U=E!==void 0?E:P;return F(F({},x),{},{inputValue:L,menuIsOpen:$,onChange:_,onInputChange:B,onMenuClose:R,onMenuOpen:N,value:U})}function Fn(n){if(Array.isArray(n))return Me(n)}function yn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n){return Fn(n)||yn(n)||ct(n)||wn()}function Dn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const On=Math.min,An=Math.max,he=Math.round,ae=Math.floor,me=n=>({x:n,y:n});function In(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function pt(n){return ht(n)?(n.nodeName||"").toLowerCase():"#document"}function z(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function ft(n){var e;return(e=(ht(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ht(n){return n instanceof Node||n instanceof z(n).Node}function Ve(n){return n instanceof Element||n instanceof z(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof z(n).HTMLElement}function _e(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof z(n).ShadowRoot}function mt(n){const{overflow:e,overflowX:i,overflowY:r,display:t}=Te(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(t)}function Mn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vn(n){return["html","body","#document"].includes(pt(n))}function Te(n){return z(n).getComputedStyle(n)}function Pn(n){if(pt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||_e(n)&&n.host||ft(n);return _e(e)?e.host:e}function vt(n){const e=Pn(n);return Vn(e)?n.ownerDocument?n.ownerDocument.body:n.body:Le(e)&&mt(e)?e:vt(e)}function ve(n,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=vt(n),a=t===((r=n.ownerDocument)==null?void 0:r.body),s=z(t);return a?e.concat(s,s.visualViewport||[],mt(t)?t:[],s.frameElement&&i?ve(s.frameElement):[]):e.concat(t,ve(t,[],i))}function Rn(n){const e=Te(n);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=Le(n),a=t?n.offsetWidth:i,s=t?n.offsetHeight:r,o=he(i)!==a||he(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function ke(n){return Ve(n)?n:n.contextElement}function Se(n){const e=ke(n);if(!Le(e))return me(1);const i=e.getBoundingClientRect(),{width:r,height:t,$:a}=Rn(e);let s=(a?he(i.width):i.width)/r,o=(a?he(i.height):i.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const Ln=me(0);function Tn(n){const e=z(n);return!Mn()||!e.visualViewport?Ln:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function kn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==z(n)?!1:e}function Ne(n,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=ke(n);let s=me(1);e&&(r?Ve(r)&&(s=Se(r)):s=Se(n));const o=kn(a,i,r)?Tn(a):me(0);let u=(t.left+o.x)/s.x,l=(t.top+o.y)/s.y,c=t.width/s.x,d=t.height/s.y;if(a){const b=z(a),E=r&&Ve(r)?z(r):r;let x=b.frameElement;for(;x&&r&&E!==b;){const g=Se(x),m=x.getBoundingClientRect(),h=Te(x),p=m.left+(x.clientLeft+parseFloat(h.paddingLeft))*g.x,C=m.top+(x.clientTop+parseFloat(h.paddingTop))*g.y;u*=g.x,l*=g.y,c*=g.x,d*=g.y,u+=p,l+=C,x=z(x).frameElement}}return In({width:c,height:d,x:u,y:l})}function Bn(n,e){let i=null,r;const t=ft(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:b}=n.getBoundingClientRect();if(o||e(),!d||!b)return;const E=ae(c),x=ae(t.clientWidth-(l+d)),g=ae(t.clientHeight-(c+b)),m=ae(l),p={rootMargin:-E+"px "+-x+"px "+-g+"px "+-m+"px",threshold:An(0,On(1,u))||1};let C=!0;function O(I){const D=I[0].intersectionRatio;if(D!==u){if(!C)return s();D?s(!1,D):r=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{i=new IntersectionObserver(O,{...p,root:t.ownerDocument})}catch{i=new IntersectionObserver(O,p)}i.observe(n)}return s(!0),a}function jn(n,e,i,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=ke(n),c=t||a?[...l?ve(l):[],...ve(e)]:[];c.forEach(h=>{t&&h.addEventListener("scroll",i,{passive:!0}),a&&h.addEventListener("resize",i)});const d=l&&o?Bn(l,i):null;let b=-1,E=null;s&&(E=new ResizeObserver(h=>{let[p]=h;p&&p.target===l&&E&&(E.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{E&&E.observe(e)})),i()}),l&&!u&&E.observe(l),E.observe(e));let x,g=u?Ne(n):null;u&&m();function m(){const h=Ne(n);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&i(),g=h,x=requestAnimationFrame(m)}return i(),()=>{c.forEach(h=>{t&&h.removeEventListener("scroll",i),a&&h.removeEventListener("resize",i)}),d&&d(),E&&E.disconnect(),E=null,u&&cancelAnimationFrame(x)}}var Pe=f.useLayoutEffect,Hn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ge=function(){};function $n(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function zn(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),t=2;t<i;t++)r[t-2]=arguments[t];var a=[].concat(r);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat($n(n,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var Ue=function(e){return Kn(e)?e.filter(Boolean):st(e)==="object"&&e!==null?[e]:[]},gt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=X(e,Hn);return F({},i)},V=function(e,i,r){var t=e.cx,a=e.getStyles,s=e.getClassNames,o=e.className;return{css:a(i,e),className:t(r??{},s(i,e),o)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function _n(n){return Ee(n)?window.innerHeight:n.clientHeight}function bt(n){return Ee(n)?window.pageYOffset:n.scrollTop}function be(n,e){if(Ee(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Nn(n){var e=getComputedStyle(n),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Un(n,e,i,r){return i*((n=n/r-1)*n*n+1)+e}function ue(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ge,t=bt(n),a=e-t,s=10,o=0;function u(){o+=s;var l=Un(o,t,a,i);be(n,l),o<i?window.requestAnimationFrame(u):r(n)}u()}function We(n,e){var i=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>i.bottom?be(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<i.top&&be(n,Math.max(e.offsetTop-t,0))}function Wn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Gn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var xt=!1,qn={get passive(){return xt=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",ge,qn),se.removeEventListener("p",ge,!1));var Yn=xt;function Xn(n){return n!=null}function Kn(n){return Array.isArray(n)}function le(n,e,i){return n?e:i}var Qn=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var o=Y(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},Zn=["children","innerProps"],Jn=["children","innerProps"];function ei(n){var e=n.maxHeight,i=n.menuEl,r=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,o=n.controlHeight,u=Nn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,b=i.getBoundingClientRect(),E=b.bottom,x=b.height,g=b.top,m=i.offsetParent.getBoundingClientRect(),h=m.top,p=s?window.innerHeight:_n(u),C=bt(u),O=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),D=h-I,M=p-g,A=D+C,P=d-C-g,H=E-p+C+O,_=C+g-I,B=160;switch(t){case"auto":case"bottom":if(M>=x)return{placement:"bottom",maxHeight:e};if(P>=x&&!s)return a&&ue(u,H,B),{placement:"bottom",maxHeight:e};if(!s&&P>=r||s&&M>=r){a&&ue(u,H,B);var N=s?M-O:P-O;return{placement:"bottom",maxHeight:N}}if(t==="auto"||s){var R=e,L=s?D:A;return L>=r&&(R=Math.min(L-O-o,e)),{placement:"top",maxHeight:R}}if(t==="bottom")return a&&be(u,H),{placement:"bottom",maxHeight:e};break;case"top":if(D>=x)return{placement:"top",maxHeight:e};if(A>=x&&!s)return a&&ue(u,_,B),{placement:"top",maxHeight:e};if(!s&&A>=r||s&&D>=r){var $=e;return(!s&&A>=r||s&&D>=r)&&($=s?D-I:A-I),a&&ue(u,_,B),{placement:"top",maxHeight:$}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function ti(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Et=function(e){return e==="auto"?"bottom":e},ni=function(e,i){var r,t=e.placement,a=e.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return F((r={label:"menu"},oe(r,ti(t),"100%"),oe(r,"position","absolute"),oe(r,"width","100%"),oe(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},Ct=f.createContext(null),ii=function(e){var i=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,o=e.menuShouldScrollIntoView,u=e.theme,l=f.useContext(Ct)||{},c=l.setPortalPlacement,d=f.useRef(null),b=f.useState(t),E=Y(b,2),x=E[0],g=E[1],m=f.useState(null),h=Y(m,2),p=h[0],C=h[1],O=u.spacing.controlHeight;return Pe(function(){var I=d.current;if(I){var D=s==="fixed",M=o&&!D,A=ei({maxHeight:t,menuEl:I,minHeight:r,placement:a,shouldScroll:M,isFixedPosition:D,controlHeight:O});g(A.maxHeight),C(A.placement),c==null||c(A.placement)}},[t,a,s,o,r,c,O]),i({ref:d,placerProps:F(F({},e),{},{placement:p||Et(a),maxHeight:x})})},ri=function(e){var i=e.children,r=e.innerRef,t=e.innerProps;return y("div",w({},V(e,"menu",{menu:!0}),{ref:r},t),i)},oi=ri,ai=function(e,i){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return F({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},ui=function(e){var i=e.children,r=e.innerProps,t=e.innerRef,a=e.isMulti;return y("div",w({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},r),i)},St=function(e,i){var r=e.theme,t=r.spacing.baseUnit,a=r.colors;return F({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},si=St,li=St,ci=function(e){var i=e.children,r=i===void 0?"No options":i,t=e.innerProps,a=X(e,Zn);return y("div",w({},V(F(F({},a),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},di=function(e){var i=e.children,r=i===void 0?"Loading...":i,t=e.innerProps,a=X(e,Jn);return y("div",w({},V(F(F({},a),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},pi=function(e){var i=e.rect,r=e.offset,t=e.position;return{left:i.left,position:t,top:r,width:i.width,zIndex:1}},fi=function(e){var i=e.appendTo,r=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,o=e.menuPosition,u=f.useRef(null),l=f.useRef(null),c=f.useState(Et(s)),d=Y(c,2),b=d[0],E=d[1],x=f.useMemo(function(){return{setPortalPlacement:E}},[]),g=f.useState(null),m=Y(g,2),h=m[0],p=m[1],C=f.useCallback(function(){if(t){var M=Wn(t),A=o==="fixed"?0:window.pageYOffset,P=M[b]+A;(P!==(h==null?void 0:h.offset)||M.left!==(h==null?void 0:h.rect.left)||M.width!==(h==null?void 0:h.rect.width))&&p({offset:P,rect:M})}},[t,o,b,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Pe(function(){C()},[C]);var O=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&u.current&&(l.current=jn(t,u.current,C,{elementResize:"ResizeObserver"in window}))},[t,C]);Pe(function(){O()},[O]);var I=f.useCallback(function(M){u.current=M,O()},[O]);if(!i&&o!=="fixed"||!h)return null;var D=y("div",w({ref:I},V(F(F({},e),{},{offset:h.offset,position:o,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),r);return y(Ct.Provider,{value:x},i?Qt.createPortal(D,i):D)},hi=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},mi=function(e){var i=e.children,r=e.innerProps,t=e.isDisabled,a=e.isRtl;return y("div",w({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),r),i)},vi=function(e,i){var r=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return F({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},gi=function(e){var i=e.children,r=e.innerProps,t=e.isMulti,a=e.hasValue;return y("div",w({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),r),i)},bi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},xi=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"indicatorsContainer",{indicators:!0}),r),i)},qe,Ei=["size"],Ci=["innerProps","isRtl","size"],Si={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(e){var i=e.size,r=X(e,Ei);return y("svg",w({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Si},r))},Be=function(e){return y(Ft,w({size:20},e),y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yt=function(e){return y(Ft,w({size:20},e),y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wt=function(e,i){var r=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return F({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},Fi=wt,yi=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||y(yt,null))},wi=wt,Di=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||y(Be,null))},Oi=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return F({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Ai=function(e){var i=e.innerProps;return y("span",w({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Ii=Kt(qe||(qe=Dn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Mi=function(e,i){var r=e.isFocused,t=e.size,a=e.theme,s=a.colors,o=a.spacing.baseUnit;return F({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},Fe=function(e){var i=e.delay,r=e.offset;return y("span",{css:lt({animation:"".concat(Ii," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Vi=function(e){var i=e.innerProps,r=e.isRtl,t=e.size,a=t===void 0?4:t,s=X(e,Ci);return y("div",w({},V(F(F({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),y(Fe,{delay:0,offset:r}),y(Fe,{delay:160,offset:!0}),y(Fe,{delay:320,offset:!r}))},Pi=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return F({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:t?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},Ri=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,o=e.menuIsOpen;return y("div",w({ref:a},V(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},Li=Ri,Ti=["data"],ki=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Bi=function(e){var i=e.children,r=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,o=e.headingProps,u=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return y("div",w({},V(e,"group",{group:!0}),u),y(s,w({},o,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:r}),l),y("div",null,i))},ji=function(e,i){var r=e.theme,t=r.colors,a=r.spacing;return F({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Hi=function(e){var i=gt(e);i.data;var r=X(i,Ti);return y("div",w({},V(e,"groupHeading",{"group-heading":!0}),r))},$i=Bi,zi=["innerRef","isDisabled","isHidden","inputClassName"],_i=function(e,i){var r=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,o=a.colors;return F(F({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Ni),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},Dt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ni={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":F({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Dt)},Ui=function(e){return F({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Dt)},Wi=function(e){var i=e.cx,r=e.value,t=gt(e),a=t.innerRef,s=t.isDisabled,o=t.isHidden,u=t.inputClassName,l=X(t,zi);return y("div",w({},V(e,"input",{"input-container":!0}),{"data-value":r||""}),y("input",w({className:i({input:!0},u),ref:a,style:Ui(o),disabled:s},l)))},Gi=Wi,qi=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors;return F({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Yi=function(e,i){var r=e.theme,t=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return F({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Xi=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors,o=e.isFocused;return F({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ot=function(e){var i=e.children,r=e.innerProps;return y("div",r,i)},Ki=Ot,Qi=Ot;function Zi(n){var e=n.children,i=n.innerProps;return y("div",w({role:"button"},i),e||y(Be,{size:14}))}var Ji=function(e){var i=e.children,r=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,o=e.removeProps,u=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return y(l,{data:t,innerProps:F(F({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},y(c,{data:t,innerProps:F({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),y(d,{data:t,innerProps:F(F({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},er=Ji,tr=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,o=s.spacing,u=s.colors;return F({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:t?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},nr=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,o=e.innerProps;return y("div",w({},V(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},ir=nr,rr=function(e,i){var r=e.theme,t=r.spacing,a=r.colors;return F({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},or=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"placeholder",{placeholder:!0}),r),i)},ar=or,ur=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return F({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},sr=function(e){var i=e.children,r=e.isDisabled,t=e.innerProps;return y("div",w({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),i)},lr=sr,cr={ClearIndicator:Di,Control:Li,DropdownIndicator:yi,DownChevron:yt,CrossIcon:Be,Group:$i,GroupHeading:Hi,IndicatorsContainer:xi,IndicatorSeparator:Ai,Input:Gi,LoadingIndicator:Vi,Menu:oi,MenuList:ui,MenuPortal:fi,LoadingMessage:di,NoOptionsMessage:ci,MultiValue:er,MultiValueContainer:Ki,MultiValueLabel:Qi,MultiValueRemove:Zi,Option:ir,Placeholder:ar,SelectContainer:mi,SingleValue:lr,ValueContainer:gi},dr=function(e){return F(F({},cr),e.components)},Ye=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function pr(n,e){return!!(n===e||Ye(n)&&Ye(e))}function fr(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!pr(n[i],e[i]))return!1;return!0}function hr(n,e){e===void 0&&(e=fr);var i=null;function r(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var s=n.apply(this,t);return i={lastResult:s,lastArgs:t,lastThis:this},s}return r.clear=function(){i=null},r}var mr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},vr=function(e){return y("span",w({css:mr},e))},Xe=vr,gr={guidance:function(e){var i=e.isSearchable,r=e.isMulti,t=e.isDisabled,a=e.tabSelectsValue,s=e.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(t?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,t=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,o=e.selectValue,u=e.isDisabled,l=e.isSelected,c=function(x,g){return x&&x.length?"".concat(x.indexOf(g)+1," of ").concat(x.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,r),".");if(i==="menu"){var d=u?" disabled":"",b="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(b,", ").concat(c(t,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},br=function(e){var i=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,o=e.selectValue,u=e.selectProps,l=e.id,c=u.ariaLiveMessages,d=u.getOptionLabel,b=u.inputValue,E=u.isMulti,x=u.isOptionDisabled,g=u.isSearchable,m=u.menuIsOpen,h=u.options,p=u.screenReaderStatus,C=u.tabSelectsValue,O=u["aria-label"],I=u["aria-live"],D=f.useMemo(function(){return F(F({},gr),c||{})},[c]),M=f.useMemo(function(){var R="";if(i&&D.onChange){var L=i.option,$=i.options,U=i.removedValue,W=i.removedValues,K=i.value,Q=function(q){return Array.isArray(q)?null:q},ee=U||L||Q(K),k=ee?d(ee):"",j=$||W||void 0,Z=j?j.map(d):[],J=F({isDisabled:ee&&x(ee,o),label:k,labels:Z},i);R=D.onChange(J)}return R},[i,D,x,o,d]),A=f.useMemo(function(){var R="",L=r||t,$=!!(r&&o&&o.includes(r));if(L&&D.onFocus){var U={focused:L,label:d(L),isDisabled:x(L,o),isSelected:$,options:a,context:L===r?"menu":"value",selectValue:o};R=D.onFocus(U)}return R},[r,t,d,x,D,a,o]),P=f.useMemo(function(){var R="";if(m&&h.length&&D.onFilter){var L=p({count:a.length});R=D.onFilter({inputValue:b,resultsMessage:L})}return R},[a,b,m,D,h,p]),H=f.useMemo(function(){var R="";if(D.guidance){var L=t?"value":m?"menu":"input";R=D.guidance({"aria-label":O,context:L,isDisabled:r&&x(r,o),isMulti:E,isSearchable:g,tabSelectsValue:C})}return R},[O,r,t,E,x,g,m,D,o,C]),_="".concat(A," ").concat(P," ").concat(H),B=y(f.Fragment,null,y("span",{id:"aria-selection"},M),y("span",{id:"aria-context"},_)),N=(i==null?void 0:i.action)==="initial-input-focus";return y(f.Fragment,null,y(Xe,{id:l},N&&B),y(Xe,{"aria-live":I,"aria-atomic":"false","aria-relevant":"additions text"},s&&!N&&B))},xr=br,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Er=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),At={};for(var ye=0;ye<Re.length;ye++)for(var we=Re[ye],De=0;De<we.letters.length;De++)At[we.letters[De]]=we.base;var It=function(e){return e.replace(Er,function(i){return At[i]})},Cr=hr(It),Ke=function(e){return e.replace(/^\s+|\s+$/g,"")},Sr=function(e){return"".concat(e.label," ").concat(e.value)},Fr=function(e){return function(i,r){if(i.data.__isNew__)return!0;var t=F({ignoreCase:!0,ignoreAccents:!0,stringify:Sr,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,o=t.stringify,u=t.trim,l=t.matchFrom,c=u?Ke(r):r,d=u?Ke(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Cr(c),d=It(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},yr=["innerRef"];function wr(n){var e=n.innerRef,i=X(n,yr),r=Qn(i,"onExited","in","enter","exit","appear");return y("input",w({ref:e},r,{css:lt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Dr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Or(n){var e=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(m,h){if(l.current!==null){var p=l.current,C=p.scrollTop,O=p.scrollHeight,I=p.clientHeight,D=l.current,M=h>0,A=O-I-C,P=!1;A>h&&s.current&&(r&&r(m),s.current=!1),M&&o.current&&(a&&a(m),o.current=!1),M&&h>A?(i&&!s.current&&i(m),D.scrollTop=O,P=!0,s.current=!0):!M&&-h>C&&(t&&!o.current&&t(m),D.scrollTop=0,P=!0,o.current=!0),P&&Dr(m)}},[i,r,t,a]),d=f.useCallback(function(m){c(m,m.deltaY)},[c]),b=f.useCallback(function(m){u.current=m.changedTouches[0].clientY},[]),E=f.useCallback(function(m){var h=u.current-m.changedTouches[0].clientY;c(m,h)},[c]),x=f.useCallback(function(m){if(m){var h=Yn?{passive:!1}:!1;m.addEventListener("wheel",d,h),m.addEventListener("touchstart",b,h),m.addEventListener("touchmove",E,h)}},[E,b,d]),g=f.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",b,!1),m.removeEventListener("touchmove",E,!1))},[E,b,d]);return f.useEffect(function(){if(e){var m=l.current;return x(m),function(){g(m)}}},[e,x,g]),function(m){l.current=m}}var Qe=["boxSizing","height","overflow","paddingRight","position"],Ze={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Je(n){n.preventDefault()}function et(n){n.stopPropagation()}function tt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function nt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function Ar(n){var e=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,t=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;if(r&&Qe.forEach(function(x){var g=c&&c[x];t.current[x]=g}),r&&ie<1){var d=parseInt(t.current.paddingRight,10)||0,b=document.body?document.body.clientWidth:0,E=window.innerWidth-b+d||0;Object.keys(Ze).forEach(function(x){var g=Ze[x];c&&(c[x]=g)}),c&&(c.paddingRight="".concat(E,"px"))}l&&nt()&&(l.addEventListener("touchmove",Je,te),u&&(u.addEventListener("touchstart",tt,te),u.addEventListener("touchmove",et,te))),ie+=1}},[r]),o=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;ie=Math.max(ie-1,0),r&&ie<1&&Qe.forEach(function(d){var b=t.current[d];c&&(c[d]=b)}),l&&nt()&&(l.removeEventListener("touchmove",Je,te),u&&(u.removeEventListener("touchstart",tt,te),u.removeEventListener("touchmove",et,te)))}},[r]);return f.useEffect(function(){if(e){var u=a.current;return s(u),function(){o(u)}}},[e,s,o]),function(u){a.current=u}}var Ir=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Mr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Vr(n){var e=n.children,i=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,a=n.onBottomArrive,s=n.onBottomLeave,o=n.onTopArrive,u=n.onTopLeave,l=Or({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=Ar({isEnabled:i}),d=function(E){l(E),c(E)};return y(f.Fragment,null,i&&y("div",{onClick:Ir,css:Mr}),e(d))}var Pr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Rr=function(e){var i=e.name,r=e.onFocus;return y("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Pr,value:"",onChange:function(){}})},Lr=Rr,Tr=function(e){return e.label},kr=function(e){return e.label},Br=function(e){return e.value},jr=function(e){return!!e.isDisabled},Hr={clearIndicator:wi,container:hi,control:Pi,dropdownIndicator:Fi,group:ki,groupHeading:ji,indicatorsContainer:bi,indicatorSeparator:Oi,input:_i,loadingIndicator:Mi,loadingMessage:li,menu:ni,menuList:ai,menuPortal:pi,multiValue:qi,multiValueLabel:Yi,multiValueRemove:Xi,noOptionsMessage:si,option:tr,placeholder:rr,singleValue:ur,valueContainer:vi},$r={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},zr=4,Mt=4,_r=38,Nr=Mt*2,Ur={baseUnit:Mt,controlHeight:_r,menuGutter:Nr},Oe={borderRadius:zr,colors:$r,spacing:Ur},Wr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Fr(),formatGroupLabel:Tr,getOptionLabel:kr,getOptionValue:Br,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:jr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Gn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,e,i,r){var t=Lt(n,e,i),a=Tt(n,e,i),s=Rt(n,e),o=xe(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:o,index:r}}function Vt(n,e){return n.options.map(function(i,r){if("options"in i){var t=i.options.map(function(s,o){return rt(n,s,e,o)}).filter(function(s){return ot(n,s)});return t.length>0?{type:"group",data:i,options:t,index:r}:void 0}var a=rt(n,i,e,r);return ot(n,a)?a:void 0}).filter(Xn)}function Pt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,dt(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Gr(n,e){return Pt(Vt(n,e))}function ot(n,e){var i=n.inputValue,r=i===void 0?"":i,t=e.data,a=e.isSelected,s=e.label,o=e.value;return(!Bt(n)||!a)&&kt(n,{label:s,value:o,data:t},r)}function qr(n,e){var i=n.focusedValue,r=n.selectValue,t=r.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function Yr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Rt=function(e,i){return e.getOptionLabel(i)},xe=function(e,i){return e.getOptionValue(i)};function Lt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Tt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var r=xe(n,e);return i.some(function(t){return xe(n,t)===r})}function kt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Bt=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},Xr=1,jt=function(n){pn(i,n);var e=mn(i);function i(r){var t;if(vn(this,i),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.instancePrefix="",t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,u){var l=t.props,c=l.onChange,d=l.name;u.name=d,t.ariaOnChange(o,u),c(o,u)},t.setValue=function(o,u,l){var c=t.props,d=c.closeMenuOnSelect,b=c.isMulti,E=c.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:E}),d&&(t.setState({inputIsHiddenAfterUpdate:!b}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:u,option:l})},t.selectOption=function(o){var u=t.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,b=t.state.selectValue,E=c&&t.isOptionSelected(o,b),x=t.isOptionDisabled(o,b);if(E){var g=t.getOptionValue(o);t.setValue(b.filter(function(m){return t.getOptionValue(m)!==g}),"deselect-option",o)}else if(!x)c?t.setValue([].concat(dt(b),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&t.blurInput()},t.removeValue=function(o){var u=t.props.isMulti,l=t.state.selectValue,c=t.getOptionValue(o),d=l.filter(function(E){return t.getOptionValue(E)!==c}),b=le(u,d,d[0]||null);t.onChange(b,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(le(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,u=t.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=le(o,c,c[0]||null);t.onChange(d,{action:"pop-value",removedValue:l})},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return zn.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(o){return Rt(t.props,o)},t.getOptionValue=function(o){return xe(t.props,o)},t.getStyles=function(o,u){var l=t.props.unstyled,c=Hr[o](u,l);c.boxSizing="border-box";var d=t.props.styles[o];return d?d(c,u):c},t.getClassNames=function(o,u){var l,c;return(l=(c=t.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},t.getElementId=function(o){return"".concat(t.instancePrefix,"-").concat(o)},t.getComponents=function(){return dr(t.props)},t.buildCategorizedOptions=function(){return Vt(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Pt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,u){t.setState({ariaSelection:F({value:o},u)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var u=t.props,l=u.isMulti,c=u.menuIsOpen;t.focusInput(),c?(t.setState({inputIsHiddenAfterUpdate:!l}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(t.initialTouchX=l.clientX,t.initialTouchY=l.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-t.initialTouchX),d=Math.abs(l.clientY-t.initialTouchY),b=5;t.userIsDragging=c>b||d>b}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var u=t.props.inputValue,l=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(l,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){t.blockOptionHover||t.state.focusedOption===o||t.setState({focusedOption:o})},t.shouldHideSelectedOptions=function(){return Bt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var u=t.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,b=u.inputValue,E=u.isClearable,x=u.isDisabled,g=u.menuIsOpen,m=u.onKeyDown,h=u.tabSelectsValue,p=u.openMenuOnFocus,C=t.state,O=C.focusedOption,I=C.focusedValue,D=C.selectValue;if(!x&&!(typeof m=="function"&&(m(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||b)return;t.focusValue("previous");break;case"ArrowRight":if(!l||b)return;t.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(I)t.removeValue(I);else{if(!c)return;l?t.popValue():E&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!g||!h||!O||p&&t.isOptionSelected(O,D))return;t.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(g){if(!O||t.isComposing)return;t.selectOption(O);break}return;case"Escape":g?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:b}),t.onMenuClose()):E&&d&&t.clearValue();break;case" ":if(b)return;if(!g){t.openMenu("first");break}if(!O)return;t.selectOption(O);break;case"ArrowUp":g?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":g?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!g)return;t.focusOption("pageup");break;case"PageDown":if(!g)return;t.focusOption("pagedown");break;case"Home":if(!g)return;t.focusOption("first");break;case"End":if(!g)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.instancePrefix="react-select-"+(t.props.instanceId||++Xr),t.state.selectValue=Ue(r.value),r.menuIsOpen&&t.state.selectValue.length){var a=t.buildFocusableOptions(),s=a.indexOf(t.state.selectValue[0]);t.state.focusedOption=a[s]}return t}return gn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&We(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&t.isDisabled||u&&o&&!t.menuIsOpen)&&this.focusInput(),u&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(We(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(t){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),t==="up"?u=l>0?l-1:o.length-1:t==="down"?u=(l+1)%o.length:t==="pageup"?(u=l-a,u<0&&(u=0)):t==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):t==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):F(F({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,b=d.isMulti,E=d.isRtl,x=d.options,g=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:g,isMulti:b,isRtl:E,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return Lt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Tt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return kt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,o=t.inputId,u=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,b=t.required,E=this.getComponents(),x=E.Input,g=this.state,m=g.inputIsHidden,h=g.ariaSelection,p=this.commonProps,C=o||this.getElementId("input"),O=F(F(F({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":b,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(x,w({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},O)):f.createElement(wr,w({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ge,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,b=this.commonProps,E=this.props,x=E.controlShouldRenderValue,g=E.isDisabled,m=E.isMulti,h=E.inputValue,p=E.placeholder,C=this.state,O=C.selectValue,I=C.focusedValue,D=C.isFocused;if(!this.hasValue()||!x)return h?null:f.createElement(d,w({},b,{key:"placeholder",isDisabled:g,isFocused:D,innerProps:{id:this.getElementId("placeholder")}}),p);if(m)return O.map(function(A,P){var H=A===I,_="".concat(t.getOptionLabel(A),"-").concat(t.getOptionValue(A));return f.createElement(s,w({},b,{components:{Container:o,Label:u,Remove:l},isFocused:H,isDisabled:g,key:_,index:P,removeProps:{onClick:function(){return t.removeValue(A)},onTouchEnd:function(){return t.removeValue(A)},onMouseDown:function(N){N.preventDefault()}},data:A}),t.formatOptionLabel(A,"value"))});if(h)return null;var M=O[0];return f.createElement(c,w({},b,{data:M,isDisabled:g}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,w({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,b=a.NoOptionsMessage,E=a.Option,x=this.commonProps,g=this.state.focusedOption,m=this.props,h=m.captureMenuScroll,p=m.inputValue,C=m.isLoading,O=m.loadingMessage,I=m.minMenuHeight,D=m.maxMenuHeight,M=m.menuIsOpen,A=m.menuPlacement,P=m.menuPosition,H=m.menuPortalTarget,_=m.menuShouldBlockScroll,B=m.menuShouldScrollIntoView,N=m.noOptionsMessage,R=m.onMenuScrollToTop,L=m.onMenuScrollToBottom;if(!M)return null;var $=function(j,Z){var J=j.type,G=j.data,q=j.isDisabled,ne=j.isSelected,re=j.label,Ut=j.value,je=g===G,He=q?void 0:function(){return t.onOptionHover(G)},Wt=q?void 0:function(){return t.selectOption(G)},$e="".concat(t.getElementId("option"),"-").concat(Z),Gt={id:$e,onClick:Wt,onMouseMove:He,onMouseOver:He,tabIndex:-1};return f.createElement(E,w({},x,{innerProps:Gt,data:G,isDisabled:q,isSelected:ne,key:$e,label:re,type:J,value:Ut,isFocused:je,innerRef:je?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(j.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(k){if(k.type==="group"){var j=k.data,Z=k.options,J=k.index,G="".concat(t.getElementId("group"),"-").concat(J),q="".concat(G,"-heading");return f.createElement(s,w({},x,{key:G,data:j,options:Z,Heading:o,headingProps:{id:q,data:k.data},label:t.formatGroupLabel(k.data)}),k.options.map(function(ne){return $(ne,"".concat(J,"-").concat(ne.index))}))}else if(k.type==="option")return $(k,"".concat(k.index))});else if(C){var W=O({inputValue:p});if(W===null)return null;U=f.createElement(d,x,W)}else{var K=N({inputValue:p});if(K===null)return null;U=f.createElement(b,x,K)}var Q={minMenuHeight:I,maxMenuHeight:D,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:B},ee=f.createElement(ii,w({},x,Q),function(k){var j=k.ref,Z=k.placerProps,J=Z.placement,G=Z.maxHeight;return f.createElement(u,w({},x,Q,{innerRef:j,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove,id:t.getElementId("listbox")},isLoading:C,placement:J}),f.createElement(Vr,{captureEnabled:h,onTopArrive:R,onBottomArrive:L,lockEnabled:_},function(q){return f.createElement(l,w({},x,{innerRef:function(re){t.getMenuListRef(re),q(re)},isLoading:C,maxHeight:G,focusedOption:g}),U)}))});return H||P==="fixed"?f.createElement(c,w({},x,{appendTo:H,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),ee):ee}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return f.createElement(Lr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var b=d.map(function(g){return t.getOptionValue(g)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:b})}else{var E=d.length>0?d.map(function(g,m){return f.createElement("input",{key:"i-".concat(m),name:l,type:"hidden",value:t.getOptionValue(g)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,E)}else{var x=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(xr,w({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,o=t.SelectContainer,u=t.ValueContainer,l=this.props,c=l.className,d=l.id,b=l.isDisabled,E=l.menuIsOpen,x=this.state.isFocused,g=this.commonProps=this.getCommonProps();return f.createElement(o,w({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:b,isFocused:x}),this.renderLiveRegion(),f.createElement(a,w({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:b,isFocused:x,menuIsOpen:E}),f.createElement(u,w({},g,{isDisabled:b}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,w({},g,{isDisabled:b}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,b=t.options,E=t.value,x=t.menuIsOpen,g=t.inputValue,m=t.isMulti,h=Ue(E),p={};if(s&&(E!==s.value||b!==s.options||x!==s.menuIsOpen||g!==s.inputValue)){var C=x?Gr(t,h):[],O=o?qr(a,h):null,I=Yr(a,C);p={selectValue:h,focusedOption:I,focusedValue:O,clearFocusValueOnUpdate:!1}}var D=u!=null&&t!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},M=l,A=c&&d;return c&&!A&&(M={value:le(m,h,h[0]||null),options:h,action:"initial-input-focus"},A=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(M=null),F(F(F({},p),D),{},{prevProps:t,ariaSelection:M,prevWasFocused:A})}}]),i}(f.Component);jt.defaultProps=Wr;var Kr=f.forwardRef(function(n,e){var i=Sn(n);return f.createElement(jt,w({ref:e},i))}),Qr=Kr;const Zr=S.h1`
  display: none;
  @media screen and (min-width: 1440px) {
    z-index: 1;
    display: block;
    position: relative;
    top: -28px;
    left: -65px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,Jr=S.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`,eo=S.div`
  @media screen and (min-width: 320px) {
    position: relative;
    margin-bottom: 16px;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,to=S.input`
  @media screen and (min-width: 320px) {
    width: 100%;
    &::-webkit-inner-spin-button {
      appearance: none;
    }
    text-align: left;
    padding: 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background-color: transparent;
    color: #efede8;
    font-size: 14px;
    line-height: calc(18 / 14);

    &:focus {
      border: 1px solid #e6533c;
      outline: none;
    }
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,no=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`,io=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,ro=S.div`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,at=S.div`
  flex: 1;
  z-index: 2;
  background-color: transparent;
`,ut=S(Qr)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  /*background: rgba(0, 0, 0, 0.5);*/
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  .css-18hi8su {
    background: transparent;
  }
`;S.div``;const{QUERY:ce,RECOMMENDED:de,CATEGORY:Ht}=Jt,oo={[ce]:"",[Ht]:"",[de]:""};function $t({onProductsChange:n}){const[e,i]=f.useState(oo),[r,t]=f.useState(""),[a,s]=f.useState([]),{isSuccess:o,currentData:u}=Zt();f.useEffect(()=>{if(o){const[p]=u,{productsCategories:C}=p;s(C)}},[u,o]),f.useEffect(()=>{n(e)},[e,n]);const l=()=>{t(""),i(p=>({...p,[ce]:""}))},c=["All","Recommended","Not recommended"],[d,b]=f.useState(null),[E,x]=f.useState(null),g=p=>{i(C=>({...C,[ce]:p.target.value.trim()})),t(p.target.value)},m=p=>{b(p),i(C=>({...C,[Ht]:p.label}))},h=p=>{switch(x(p),p.label){case"Recommended":i(C=>({...C,[de]:[!1]}));break;case"Not recommended":i(C=>({...C,[de]:[!0]}));break;default:i(C=>({...C,[de]:null}))}};return v.jsx(v.Fragment,{children:v.jsxs(Jr,{children:[v.jsxs(eo,{children:[v.jsx(to,{type:"text",value:e[ce],onChange:g}),v.jsx(no,{width:"18",height:"18",children:v.jsx("use",{href:`${pe}#search`})}),r.trim()&&v.jsx(io,{onClick:l,children:v.jsx("svg",{width:"18",height:"18",children:v.jsx("use",{href:`${pe}#x-clean`})})})]}),v.jsxs(ro,{children:[v.jsx(at,{children:v.jsx(ut,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"#040404",borderRadius:"12px"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:m,options:a.map(p=>({label:p.charAt(0).toUpperCase()+p.slice(1)})),placeholder:"Categories"})}),v.jsx(at,{children:v.jsx(ut,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"none",border:"none"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"195px"}})},value:E,onChange:h,options:c.map(p=>({label:p})),placeholder:"All"})})]}),v.jsx(Zr,{children:"Filters"})]})})}$t.propTypes={onProductsChange:T.func.isRequired};const ao=S.div`
  margin: 48px 24px;

  @media screen and (min-width: 768px) {
    margin: 48px 32px;
  }
`,uo=S.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,so=S.input`
  width: 287px;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #e6533c;
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,lo=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,co=S.input`
  width: 287px;
  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  background: rgba(0, 0, 0, 0.5);
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,po=S.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 12px;
  }
`,fo=S.div`
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,ho=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,mo=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,vo=S.div``,go=S.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: #efede8;
  margin-right: 14px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: #e6533c;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    margin-right: 16px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,bo=S.button`
  width: 121px;
  padding: 12px 36px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function zt(n){const{onClose:e,addProdSuccess:i,addProdError:r,product:t}=n,{weight:a,calories:s,_id:o,title:u}=t,[l,c]=f.useState(a),d=l*s/100,[b]=en(),E={product_ID:o,date:new Date,amount:d,calories:s},x=async()=>{const{error:g}=await b(E);g?r(g.data.message):(e(),i(d))};return v.jsxs(ao,{children:[v.jsxs(uo,{children:[v.jsx(so,{type:"text",value:u,readOnly:!0,disabled:!0}),v.jsxs(lo,{children:[v.jsx(co,{type:"number",value:l,onChange:g=>c(g.target.value)}),v.jsx(po,{children:"grams"})]})]}),v.jsxs(fo,{children:[v.jsx(ho,{children:"Calories:"}),v.jsx(mo,{children:d})]}),v.jsxs(vo,{children:[v.jsx(go,{onClick:x,children:"Add to diary"}),v.jsx(bo,{onClick:e,children:"Cancel"})]})]})}zt.propTypes={onClose:T.func.isRequired,addProdSuccess:T.func.isRequired,addProdError:T.func.isRequired,product:T.shape({weight:T.number.isRequired,calories:T.number.isRequired,_id:T.string.isRequired,title:T.string.isRequired}).isRequired};const xo=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 22px 111px;
  }
`,Eo=S.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Co=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,So=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Fo=S.p`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,yo=S.span`
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,wo=S.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: #e6533c;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: calc(24 / 16);
  }
`,Do=S.a`
  justify-content: center;
  display: flex;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,Oo=S.p`
  margin-right: 8px;
`;function Ao(n){const{onClose:e,totalCalories:i}=n;return v.jsxs(xo,{children:[v.jsx(Eo,{}),v.jsx(Co,{children:"Well Done"}),v.jsxs(So,{children:[v.jsx(Fo,{children:"Calories:"}),v.jsx(yo,{children:i})]}),v.jsx(wo,{onClick:e,children:"Next product"}),v.jsxs(Do,{href:"Diary",children:[v.jsx(Oo,{children:"To the diary"}),v.jsx("svg",{width:"16",height:"16",children:v.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const Io=S.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  margin-bottom: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Mo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,Vo=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`,Po=S.div`
  display: flex;
  align-items: center;
`,Ro=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${n=>n.recommended?"#419B09":"#E9101D"};
`,Lo=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,To=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,ko=S.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Bo=S.svg`
  width: 16px;
  height: 16px;
`,jo=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,Ho=S.svg`
  width: 24px;
  height: 24px;
`,$o=S.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,zo=S.div`
  display: flex;
  gap: 16px;
`,Ae=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${n=>n.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,Ie=S.span`
  color: #efede8;
  padding-left: 8px;

  @media (min-width: 768px) {
    padding-left: 4px;
  }
`;function _t({props:n,userGroupBlood:e}){const{weight:i,calories:r,category:t,title:a,groupBloodNotAllowed:s}=n,o=s[e],[u,l]=f.useState(!1),[c,d]=f.useState(!1),[b,E]=f.useState(!1),[x,g]=f.useState(null),[m,h]=f.useState(""),p=()=>{l(!0)},C=()=>{l(!1),d(!1),E(!1)},O=D=>{d(!0),g(D)},I=D=>{E(!0),h(D)};return v.jsxs(v.Fragment,{children:[v.jsxs(Io,{children:[v.jsxs(Mo,{children:[v.jsx(Vo,{children:"DIET"}),v.jsxs(Po,{children:[v.jsx(Ro,{recommended:o}),v.jsx(Lo,{children:o?"Recommended":"Not recommended"}),v.jsxs(To,{onClick:p,children:[v.jsx(ko,{children:"Add"}),v.jsx(Bo,{children:v.jsx("use",{href:`${pe}#arrow-add-prod-orange`})})]})]})]}),v.jsxs(jo,{children:[v.jsx(Ho,{children:v.jsx("use",{href:`${pe}#run-man`})}),v.jsx($o,{children:a})]}),v.jsxs(zo,{children:[v.jsxs(Ae,{children:["Calories:",v.jsx(Ie,{children:r})]}),v.jsxs(Ae,{category:!0,children:["Category:",v.jsx(Ie,{children:t})]}),v.jsxs(Ae,{children:["Weight:",v.jsx(Ie,{children:i})]})]})]}),v.jsx(Ce,{onClose:C,onShow:u,children:v.jsx(zt,{onClose:C,addProdSuccess:O,product:n,addProdError:I})}),v.jsx(Ce,{onClose:C,onShow:c,children:v.jsx(Ao,{onClose:C,totalCalories:x,addProdError:I})}),v.jsx(Ce,{onClose:C,onShow:b,children:v.jsx(tn,{message:m,onClose:C})})]})}_t.propTypes={props:T.shape({weight:T.number.isRequired,calories:T.number.isRequired,category:T.string.isRequired,title:T.string.isRequired,groupBloodNotAllowed:T.object.isRequired}).isRequired,userGroupBlood:T.number};const _o=S.ul`
  @media (min-width: 768px) {
    height: 660px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;

    overflow-y: scroll;
  }
  @media (min-width: 1440px) {
    width: 850px;
    height: 487px;
  }
`,No=S.li``,Uo=S.p`
  margin-bottom: 16px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Wo=S.span`
  color: #e6533c;
`,Go=S.span`
  margin-top: 16px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Nt({filter:n}){const[e,i]=f.useState([]),[r,t]=f.useState(null),[a,s]=f.useState(n),[o,u]=f.useState(1),[l,{isLoading:c,isError:d,error:b}]=nn(),E=rn(),{isSuccess:x,data:g}=E,{ref:m}=un({onChange:h=>{h&&u(p=>p+1)}});return f.useEffect(()=>{x&&t(g)},[g,x]),f.useEffect(()=>{n!==a&&(s(n),u(1)),(async()=>{try{const p=await l({page:o,...a}).unwrap();i(o===1?[...p.data]:C=>[...C,...p.data])}catch(p){console.error("Error fetching data:",p.message)}})()},[a,l,o,n]),v.jsxs(v.Fragment,{children:[e.length>0?v.jsx(_o,{children:e.map((h,p)=>v.jsx(No,{ref:p===e.length-1?m:null,children:v.jsx(_t,{props:h,userGroupBlood:r},h._id)},p))}):v.jsxs(v.Fragment,{children:[v.jsxs(Uo,{children:[v.jsx(Wo,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),v.jsx(Go,{children:"Try changing the search parameters."})]}),v.jsx(on,{isLoading:c,isError:d,error:b})]})}Nt.propTypes={filter:T.object};const qo=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: image-set(
    url(${ln}) 1x,
    url(${cn}) 2x,
    url(${dn}) 3x
  );
  background-size: 428px 716px;
`,Yo=S.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
    gap: 32px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.desktop}) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
  }
`;function Zo(){const[n,e]=f.useState(null),[i,r]=f.useState(window.innerWidth>=1440),t=()=>{r(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),v.jsxs(v.Fragment,{children:[i&&v.jsx(qo,{}),v.jsxs(Yo,{children:[v.jsx(an,{text:"Products"}),v.jsx($t,{onProductsChange:e})]}),v.jsx(Nt,{filter:n})]})}export{Zo as Products};
