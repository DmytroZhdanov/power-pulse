import{_ as Gt,t as st,v as Yt,w as qt,r as f,x as F,y as Kt,z as oe,A as y,B as w,C as Xt,F as lt,n as S,P as Y,G as Qt,j as v,p as pe,H as Jt,J as $e,K as Zt,M as en}from"./index-327ef6c4.js";import{T as tn}from"./TitlePage-6bfbe2d2.js";const nn="/power-pulse/assets/bg_eating-526af03d.jpg",rn="/power-pulse/assets/bg_eating@2x-53f5e280.jpg",on="/power-pulse/assets/bg_eating@3x-1df10d6d.jpg";function an(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ie(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function ct(n,e){if(n){if(typeof n=="string")return Ie(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ie(n,e)}}function un(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Gt(n,e)}function fe(n){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},fe(n)}function sn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ln(n,e){if(e&&(st(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return an(n)}function cn(n){var e=sn();return function(){var r=fe(n),t;if(e){var a=fe(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return ln(this,t)}}function dn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Yt(r.key),r)}}function pn(n,e,i){return e&&ze(n.prototype,e),i&&ze(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function fn(n){if(Array.isArray(n))return n}function hn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,t,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(c){l=!0,t=c}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw t}}return o}}function mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,e){return fn(n)||hn(n,e)||ct(n,e)||mn()}function K(n,e){if(n==null)return{};var i=qt(n,e),r,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var vn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function gn(n){var e=n.defaultInputValue,i=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,a=n.defaultValue,s=a===void 0?null:a,o=n.inputValue,u=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,b=n.onMenuOpen,E=n.value,x=K(n,vn),g=f.useState(o!==void 0?o:i),h=q(g,2),m=h[0],p=h[1],C=f.useState(u!==void 0?u:t),O=q(C,2),M=O[0],D=O[1],I=f.useState(E!==void 0?E:s),A=q(I,2),P=A[0],j=A[1],z=f.useCallback(function(_,X){typeof l=="function"&&l(_,X),j(_)},[l]),k=f.useCallback(function(_,X){var Q;typeof c=="function"&&(Q=c(_,X)),p(Q!==void 0?Q:_)},[c]),N=f.useCallback(function(){typeof b=="function"&&b(),D(!0)},[b]),R=f.useCallback(function(){typeof d=="function"&&d(),D(!1)},[d]),L=o!==void 0?o:m,H=u!==void 0?u:M,U=E!==void 0?E:P;return F(F({},x),{},{inputValue:L,menuIsOpen:H,onChange:z,onInputChange:k,onMenuClose:R,onMenuOpen:N,value:U})}function bn(n){if(Array.isArray(n))return Ie(n)}function xn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n){return bn(n)||xn(n)||ct(n)||En()}function Cn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Sn=Math.min,Fn=Math.max,he=Math.round,ae=Math.floor,me=n=>({x:n,y:n});function yn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function pt(n){return ht(n)?(n.nodeName||"").toLowerCase():"#document"}function $(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function ft(n){var e;return(e=(ht(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ht(n){return n instanceof Node||n instanceof $(n).Node}function Me(n){return n instanceof Element||n instanceof $(n).Element}function Re(n){return n instanceof HTMLElement||n instanceof $(n).HTMLElement}function Ne(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof $(n).ShadowRoot}function mt(n){const{overflow:e,overflowX:i,overflowY:r,display:t}=Le(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(t)}function wn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Dn(n){return["html","body","#document"].includes(pt(n))}function Le(n){return $(n).getComputedStyle(n)}function On(n){if(pt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Ne(n)&&n.host||ft(n);return Ne(e)?e.host:e}function vt(n){const e=On(n);return Dn(e)?n.ownerDocument?n.ownerDocument.body:n.body:Re(e)&&mt(e)?e:vt(e)}function ve(n,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=vt(n),a=t===((r=n.ownerDocument)==null?void 0:r.body),s=$(t);return a?e.concat(s,s.visualViewport||[],mt(t)?t:[],s.frameElement&&i?ve(s.frameElement):[]):e.concat(t,ve(t,[],i))}function An(n){const e=Le(n);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=Re(n),a=t?n.offsetWidth:i,s=t?n.offsetHeight:r,o=he(i)!==a||he(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function Te(n){return Me(n)?n:n.contextElement}function Ce(n){const e=Te(n);if(!Re(e))return me(1);const i=e.getBoundingClientRect(),{width:r,height:t,$:a}=An(e);let s=(a?he(i.width):i.width)/r,o=(a?he(i.height):i.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const In=me(0);function Mn(n){const e=$(n);return!wn()||!e.visualViewport?In:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==$(n)?!1:e}function Ue(n,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=Te(n);let s=me(1);e&&(r?Me(r)&&(s=Ce(r)):s=Ce(n));const o=Vn(a,i,r)?Mn(a):me(0);let u=(t.left+o.x)/s.x,l=(t.top+o.y)/s.y,c=t.width/s.x,d=t.height/s.y;if(a){const b=$(a),E=r&&Me(r)?$(r):r;let x=b.frameElement;for(;x&&r&&E!==b;){const g=Ce(x),h=x.getBoundingClientRect(),m=Le(x),p=h.left+(x.clientLeft+parseFloat(m.paddingLeft))*g.x,C=h.top+(x.clientTop+parseFloat(m.paddingTop))*g.y;u*=g.x,l*=g.y,c*=g.x,d*=g.y,u+=p,l+=C,x=$(x).frameElement}}return yn({width:c,height:d,x:u,y:l})}function Pn(n,e){let i=null,r;const t=ft(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:b}=n.getBoundingClientRect();if(o||e(),!d||!b)return;const E=ae(c),x=ae(t.clientWidth-(l+d)),g=ae(t.clientHeight-(c+b)),h=ae(l),p={rootMargin:-E+"px "+-x+"px "+-g+"px "+-h+"px",threshold:Fn(0,Sn(1,u))||1};let C=!0;function O(M){const D=M[0].intersectionRatio;if(D!==u){if(!C)return s();D?s(!1,D):r=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{i=new IntersectionObserver(O,{...p,root:t.ownerDocument})}catch{i=new IntersectionObserver(O,p)}i.observe(n)}return s(!0),a}function Rn(n,e,i,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=Te(n),c=t||a?[...l?ve(l):[],...ve(e)]:[];c.forEach(m=>{t&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&o?Pn(l,i):null;let b=-1,E=null;s&&(E=new ResizeObserver(m=>{let[p]=m;p&&p.target===l&&E&&(E.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{E&&E.observe(e)})),i()}),l&&!u&&E.observe(l),E.observe(e));let x,g=u?Ue(n):null;u&&h();function h(){const m=Ue(n);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&i(),g=m,x=requestAnimationFrame(h)}return i(),()=>{c.forEach(m=>{t&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),E&&E.disconnect(),E=null,u&&cancelAnimationFrame(x)}}var Ve=f.useLayoutEffect,Ln=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ge=function(){};function Tn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function kn(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),t=2;t<i;t++)r[t-2]=arguments[t];var a=[].concat(r);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Tn(n,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var _e=function(e){return Wn(e)?e.filter(Boolean):st(e)==="object"&&e!==null?[e]:[]},gt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=K(e,Ln);return F({},i)},V=function(e,i,r){var t=e.cx,a=e.getStyles,s=e.getClassNames,o=e.className;return{css:a(i,e),className:t(r??{},s(i,e),o)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Bn(n){return Ee(n)?window.innerHeight:n.clientHeight}function bt(n){return Ee(n)?window.pageYOffset:n.scrollTop}function be(n,e){if(Ee(n)){window.scrollTo(0,e);return}n.scrollTop=e}function jn(n){var e=getComputedStyle(n),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Hn(n,e,i,r){return i*((n=n/r-1)*n*n+1)+e}function ue(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ge,t=bt(n),a=e-t,s=10,o=0;function u(){o+=s;var l=Hn(o,t,a,i);be(n,l),o<i?window.requestAnimationFrame(u):r(n)}u()}function We(n,e){var i=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>i.bottom?be(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<i.top&&be(n,Math.max(e.offsetTop-t,0))}function $n(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function zn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var xt=!1,Nn={get passive(){return xt=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",ge,Nn),se.removeEventListener("p",ge,!1));var Un=xt;function _n(n){return n!=null}function Wn(n){return Array.isArray(n)}function le(n,e,i){return n?e:i}var Gn=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var o=q(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=q(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},Yn=["children","innerProps"],qn=["children","innerProps"];function Kn(n){var e=n.maxHeight,i=n.menuEl,r=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,o=n.controlHeight,u=jn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,b=i.getBoundingClientRect(),E=b.bottom,x=b.height,g=b.top,h=i.offsetParent.getBoundingClientRect(),m=h.top,p=s?window.innerHeight:Bn(u),C=bt(u),O=parseInt(getComputedStyle(i).marginBottom,10),M=parseInt(getComputedStyle(i).marginTop,10),D=m-M,I=p-g,A=D+C,P=d-C-g,j=E-p+C+O,z=C+g-M,k=160;switch(t){case"auto":case"bottom":if(I>=x)return{placement:"bottom",maxHeight:e};if(P>=x&&!s)return a&&ue(u,j,k),{placement:"bottom",maxHeight:e};if(!s&&P>=r||s&&I>=r){a&&ue(u,j,k);var N=s?I-O:P-O;return{placement:"bottom",maxHeight:N}}if(t==="auto"||s){var R=e,L=s?D:A;return L>=r&&(R=Math.min(L-O-o,e)),{placement:"top",maxHeight:R}}if(t==="bottom")return a&&be(u,j),{placement:"bottom",maxHeight:e};break;case"top":if(D>=x)return{placement:"top",maxHeight:e};if(A>=x&&!s)return a&&ue(u,z,k),{placement:"top",maxHeight:e};if(!s&&A>=r||s&&D>=r){var H=e;return(!s&&A>=r||s&&D>=r)&&(H=s?D-M:A-M),a&&ue(u,z,k),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Xn(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Et=function(e){return e==="auto"?"bottom":e},Qn=function(e,i){var r,t=e.placement,a=e.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return F((r={label:"menu"},oe(r,Xn(t),"100%"),oe(r,"position","absolute"),oe(r,"width","100%"),oe(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},Ct=f.createContext(null),Jn=function(e){var i=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,o=e.menuShouldScrollIntoView,u=e.theme,l=f.useContext(Ct)||{},c=l.setPortalPlacement,d=f.useRef(null),b=f.useState(t),E=q(b,2),x=E[0],g=E[1],h=f.useState(null),m=q(h,2),p=m[0],C=m[1],O=u.spacing.controlHeight;return Ve(function(){var M=d.current;if(M){var D=s==="fixed",I=o&&!D,A=Kn({maxHeight:t,menuEl:M,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:D,controlHeight:O});g(A.maxHeight),C(A.placement),c==null||c(A.placement)}},[t,a,s,o,r,c,O]),i({ref:d,placerProps:F(F({},e),{},{placement:p||Et(a),maxHeight:x})})},Zn=function(e){var i=e.children,r=e.innerRef,t=e.innerProps;return y("div",w({},V(e,"menu",{menu:!0}),{ref:r},t),i)},ei=Zn,ti=function(e,i){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return F({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},ni=function(e){var i=e.children,r=e.innerProps,t=e.innerRef,a=e.isMulti;return y("div",w({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},r),i)},St=function(e,i){var r=e.theme,t=r.spacing.baseUnit,a=r.colors;return F({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},ii=St,ri=St,oi=function(e){var i=e.children,r=i===void 0?"No options":i,t=e.innerProps,a=K(e,Yn);return y("div",w({},V(F(F({},a),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},ai=function(e){var i=e.children,r=i===void 0?"Loading...":i,t=e.innerProps,a=K(e,qn);return y("div",w({},V(F(F({},a),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},ui=function(e){var i=e.rect,r=e.offset,t=e.position;return{left:i.left,position:t,top:r,width:i.width,zIndex:1}},si=function(e){var i=e.appendTo,r=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,o=e.menuPosition,u=f.useRef(null),l=f.useRef(null),c=f.useState(Et(s)),d=q(c,2),b=d[0],E=d[1],x=f.useMemo(function(){return{setPortalPlacement:E}},[]),g=f.useState(null),h=q(g,2),m=h[0],p=h[1],C=f.useCallback(function(){if(t){var I=$n(t),A=o==="fixed"?0:window.pageYOffset,P=I[b]+A;(P!==(m==null?void 0:m.offset)||I.left!==(m==null?void 0:m.rect.left)||I.width!==(m==null?void 0:m.rect.width))&&p({offset:P,rect:I})}},[t,o,b,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Ve(function(){C()},[C]);var O=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&u.current&&(l.current=Rn(t,u.current,C,{elementResize:"ResizeObserver"in window}))},[t,C]);Ve(function(){O()},[O]);var M=f.useCallback(function(I){u.current=I,O()},[O]);if(!i&&o!=="fixed"||!m)return null;var D=y("div",w({ref:M},V(F(F({},e),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),r);return y(Ct.Provider,{value:x},i?Xt.createPortal(D,i):D)},li=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},ci=function(e){var i=e.children,r=e.innerProps,t=e.isDisabled,a=e.isRtl;return y("div",w({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),r),i)},di=function(e,i){var r=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return F({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},pi=function(e){var i=e.children,r=e.innerProps,t=e.isMulti,a=e.hasValue;return y("div",w({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),r),i)},fi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},hi=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"indicatorsContainer",{indicators:!0}),r),i)},Ye,mi=["size"],vi=["innerProps","isRtl","size"],gi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(e){var i=e.size,r=K(e,mi);return y("svg",w({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:gi},r))},ke=function(e){return y(Ft,w({size:20},e),y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yt=function(e){return y(Ft,w({size:20},e),y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wt=function(e,i){var r=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return F({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},bi=wt,xi=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||y(yt,null))},Ei=wt,Ci=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||y(ke,null))},Si=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return F({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Fi=function(e){var i=e.innerProps;return y("span",w({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},yi=Kt(Ye||(Ye=Cn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),wi=function(e,i){var r=e.isFocused,t=e.size,a=e.theme,s=a.colors,o=a.spacing.baseUnit;return F({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},Se=function(e){var i=e.delay,r=e.offset;return y("span",{css:lt({animation:"".concat(yi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Di=function(e){var i=e.innerProps,r=e.isRtl,t=e.size,a=t===void 0?4:t,s=K(e,vi);return y("div",w({},V(F(F({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),y(Se,{delay:0,offset:r}),y(Se,{delay:160,offset:!0}),y(Se,{delay:320,offset:!r}))},Oi=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return F({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:t?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},Ai=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,o=e.menuIsOpen;return y("div",w({ref:a},V(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},Ii=Ai,Mi=["data"],Vi=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Pi=function(e){var i=e.children,r=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,o=e.headingProps,u=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return y("div",w({},V(e,"group",{group:!0}),u),y(s,w({},o,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:r}),l),y("div",null,i))},Ri=function(e,i){var r=e.theme,t=r.colors,a=r.spacing;return F({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Li=function(e){var i=gt(e);i.data;var r=K(i,Mi);return y("div",w({},V(e,"groupHeading",{"group-heading":!0}),r))},Ti=Pi,ki=["innerRef","isDisabled","isHidden","inputClassName"],Bi=function(e,i){var r=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,o=a.colors;return F(F({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},ji),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},Dt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ji={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":F({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Dt)},Hi=function(e){return F({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Dt)},$i=function(e){var i=e.cx,r=e.value,t=gt(e),a=t.innerRef,s=t.isDisabled,o=t.isHidden,u=t.inputClassName,l=K(t,ki);return y("div",w({},V(e,"input",{"input-container":!0}),{"data-value":r||""}),y("input",w({className:i({input:!0},u),ref:a,style:Hi(o),disabled:s},l)))},zi=$i,Ni=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors;return F({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Ui=function(e,i){var r=e.theme,t=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return F({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},_i=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors,o=e.isFocused;return F({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ot=function(e){var i=e.children,r=e.innerProps;return y("div",r,i)},Wi=Ot,Gi=Ot;function Yi(n){var e=n.children,i=n.innerProps;return y("div",w({role:"button"},i),e||y(ke,{size:14}))}var qi=function(e){var i=e.children,r=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,o=e.removeProps,u=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return y(l,{data:t,innerProps:F(F({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},y(c,{data:t,innerProps:F({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),y(d,{data:t,innerProps:F(F({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},Ki=qi,Xi=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,o=s.spacing,u=s.colors;return F({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:t?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},Qi=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,o=e.innerProps;return y("div",w({},V(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},Ji=Qi,Zi=function(e,i){var r=e.theme,t=r.spacing,a=r.colors;return F({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},er=function(e){var i=e.children,r=e.innerProps;return y("div",w({},V(e,"placeholder",{placeholder:!0}),r),i)},tr=er,nr=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return F({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},ir=function(e){var i=e.children,r=e.isDisabled,t=e.innerProps;return y("div",w({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),i)},rr=ir,or={ClearIndicator:Ci,Control:Ii,DropdownIndicator:xi,DownChevron:yt,CrossIcon:ke,Group:Ti,GroupHeading:Li,IndicatorsContainer:hi,IndicatorSeparator:Fi,Input:zi,LoadingIndicator:Di,Menu:ei,MenuList:ni,MenuPortal:si,LoadingMessage:ai,NoOptionsMessage:oi,MultiValue:Ki,MultiValueContainer:Wi,MultiValueLabel:Gi,MultiValueRemove:Yi,Option:Ji,Placeholder:tr,SelectContainer:ci,SingleValue:rr,ValueContainer:pi},ar=function(e){return F(F({},or),e.components)},qe=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ur(n,e){return!!(n===e||qe(n)&&qe(e))}function sr(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!ur(n[i],e[i]))return!1;return!0}function lr(n,e){e===void 0&&(e=sr);var i=null;function r(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var s=n.apply(this,t);return i={lastResult:s,lastArgs:t,lastThis:this},s}return r.clear=function(){i=null},r}var cr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dr=function(e){return y("span",w({css:cr},e))},Ke=dr,pr={guidance:function(e){var i=e.isSearchable,r=e.isMulti,t=e.isDisabled,a=e.tabSelectsValue,s=e.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(t?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,t=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,o=e.selectValue,u=e.isDisabled,l=e.isSelected,c=function(x,g){return x&&x.length?"".concat(x.indexOf(g)+1," of ").concat(x.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,r),".");if(i==="menu"){var d=u?" disabled":"",b="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(b,", ").concat(c(t,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},fr=function(e){var i=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,o=e.selectValue,u=e.selectProps,l=e.id,c=u.ariaLiveMessages,d=u.getOptionLabel,b=u.inputValue,E=u.isMulti,x=u.isOptionDisabled,g=u.isSearchable,h=u.menuIsOpen,m=u.options,p=u.screenReaderStatus,C=u.tabSelectsValue,O=u["aria-label"],M=u["aria-live"],D=f.useMemo(function(){return F(F({},pr),c||{})},[c]),I=f.useMemo(function(){var R="";if(i&&D.onChange){var L=i.option,H=i.options,U=i.removedValue,_=i.removedValues,X=i.value,Q=function(G){return Array.isArray(G)?null:G},ee=U||L||Q(X),T=ee?d(ee):"",B=H||_||void 0,J=B?B.map(d):[],Z=F({isDisabled:ee&&x(ee,o),label:T,labels:J},i);R=D.onChange(Z)}return R},[i,D,x,o,d]),A=f.useMemo(function(){var R="",L=r||t,H=!!(r&&o&&o.includes(r));if(L&&D.onFocus){var U={focused:L,label:d(L),isDisabled:x(L,o),isSelected:H,options:a,context:L===r?"menu":"value",selectValue:o};R=D.onFocus(U)}return R},[r,t,d,x,D,a,o]),P=f.useMemo(function(){var R="";if(h&&m.length&&D.onFilter){var L=p({count:a.length});R=D.onFilter({inputValue:b,resultsMessage:L})}return R},[a,b,h,D,m,p]),j=f.useMemo(function(){var R="";if(D.guidance){var L=t?"value":h?"menu":"input";R=D.guidance({"aria-label":O,context:L,isDisabled:r&&x(r,o),isMulti:E,isSearchable:g,tabSelectsValue:C})}return R},[O,r,t,E,x,g,h,D,o,C]),z="".concat(A," ").concat(P," ").concat(j),k=y(f.Fragment,null,y("span",{id:"aria-selection"},I),y("span",{id:"aria-context"},z)),N=(i==null?void 0:i.action)==="initial-input-focus";return y(f.Fragment,null,y(Ke,{id:l},N&&k),y(Ke,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!N&&k))},hr=fr,Pe=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],mr=new RegExp("["+Pe.map(function(n){return n.letters}).join("")+"]","g"),At={};for(var Fe=0;Fe<Pe.length;Fe++)for(var ye=Pe[Fe],we=0;we<ye.letters.length;we++)At[ye.letters[we]]=ye.base;var It=function(e){return e.replace(mr,function(i){return At[i]})},vr=lr(It),Xe=function(e){return e.replace(/^\s+|\s+$/g,"")},gr=function(e){return"".concat(e.label," ").concat(e.value)},br=function(e){return function(i,r){if(i.data.__isNew__)return!0;var t=F({ignoreCase:!0,ignoreAccents:!0,stringify:gr,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,o=t.stringify,u=t.trim,l=t.matchFrom,c=u?Xe(r):r,d=u?Xe(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=vr(c),d=It(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},xr=["innerRef"];function Er(n){var e=n.innerRef,i=K(n,xr),r=Gn(i,"onExited","in","enter","exit","appear");return y("input",w({ref:e},r,{css:lt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Cr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Sr(n){var e=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(h,m){if(l.current!==null){var p=l.current,C=p.scrollTop,O=p.scrollHeight,M=p.clientHeight,D=l.current,I=m>0,A=O-M-C,P=!1;A>m&&s.current&&(r&&r(h),s.current=!1),I&&o.current&&(a&&a(h),o.current=!1),I&&m>A?(i&&!s.current&&i(h),D.scrollTop=O,P=!0,s.current=!0):!I&&-m>C&&(t&&!o.current&&t(h),D.scrollTop=0,P=!0,o.current=!0),P&&Cr(h)}},[i,r,t,a]),d=f.useCallback(function(h){c(h,h.deltaY)},[c]),b=f.useCallback(function(h){u.current=h.changedTouches[0].clientY},[]),E=f.useCallback(function(h){var m=u.current-h.changedTouches[0].clientY;c(h,m)},[c]),x=f.useCallback(function(h){if(h){var m=Un?{passive:!1}:!1;h.addEventListener("wheel",d,m),h.addEventListener("touchstart",b,m),h.addEventListener("touchmove",E,m)}},[E,b,d]),g=f.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",b,!1),h.removeEventListener("touchmove",E,!1))},[E,b,d]);return f.useEffect(function(){if(e){var h=l.current;return x(h),function(){g(h)}}},[e,x,g]),function(h){l.current=h}}var Qe=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ze(n){n.preventDefault()}function et(n){n.stopPropagation()}function tt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function nt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function Fr(n){var e=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,t=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;if(r&&Qe.forEach(function(x){var g=c&&c[x];t.current[x]=g}),r&&ie<1){var d=parseInt(t.current.paddingRight,10)||0,b=document.body?document.body.clientWidth:0,E=window.innerWidth-b+d||0;Object.keys(Je).forEach(function(x){var g=Je[x];c&&(c[x]=g)}),c&&(c.paddingRight="".concat(E,"px"))}l&&nt()&&(l.addEventListener("touchmove",Ze,te),u&&(u.addEventListener("touchstart",tt,te),u.addEventListener("touchmove",et,te))),ie+=1}},[r]),o=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;ie=Math.max(ie-1,0),r&&ie<1&&Qe.forEach(function(d){var b=t.current[d];c&&(c[d]=b)}),l&&nt()&&(l.removeEventListener("touchmove",Ze,te),u&&(u.removeEventListener("touchstart",tt,te),u.removeEventListener("touchmove",et,te)))}},[r]);return f.useEffect(function(){if(e){var u=a.current;return s(u),function(){o(u)}}},[e,s,o]),function(u){a.current=u}}var yr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},wr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Dr(n){var e=n.children,i=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,a=n.onBottomArrive,s=n.onBottomLeave,o=n.onTopArrive,u=n.onTopLeave,l=Sr({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=Fr({isEnabled:i}),d=function(E){l(E),c(E)};return y(f.Fragment,null,i&&y("div",{onClick:yr,css:wr}),e(d))}var Or={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Ar=function(e){var i=e.name,r=e.onFocus;return y("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Or,value:"",onChange:function(){}})},Ir=Ar,Mr=function(e){return e.label},Vr=function(e){return e.label},Pr=function(e){return e.value},Rr=function(e){return!!e.isDisabled},Lr={clearIndicator:Ei,container:li,control:Oi,dropdownIndicator:bi,group:Vi,groupHeading:Ri,indicatorsContainer:fi,indicatorSeparator:Si,input:Bi,loadingIndicator:wi,loadingMessage:ri,menu:Qn,menuList:ti,menuPortal:ui,multiValue:Ni,multiValueLabel:Ui,multiValueRemove:_i,noOptionsMessage:ii,option:Xi,placeholder:Zi,singleValue:nr,valueContainer:di},Tr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},kr=4,Mt=4,Br=38,jr=Mt*2,Hr={baseUnit:Mt,controlHeight:Br,menuGutter:jr},De={borderRadius:kr,colors:Tr,spacing:Hr},$r={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:br(),formatGroupLabel:Mr,getOptionLabel:Vr,getOptionValue:Pr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Rr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!zn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,e,i,r){var t=Lt(n,e,i),a=Tt(n,e,i),s=Rt(n,e),o=xe(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:o,index:r}}function Vt(n,e){return n.options.map(function(i,r){if("options"in i){var t=i.options.map(function(s,o){return rt(n,s,e,o)}).filter(function(s){return ot(n,s)});return t.length>0?{type:"group",data:i,options:t,index:r}:void 0}var a=rt(n,i,e,r);return ot(n,a)?a:void 0}).filter(_n)}function Pt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,dt(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function zr(n,e){return Pt(Vt(n,e))}function ot(n,e){var i=n.inputValue,r=i===void 0?"":i,t=e.data,a=e.isSelected,s=e.label,o=e.value;return(!Bt(n)||!a)&&kt(n,{label:s,value:o,data:t},r)}function Nr(n,e){var i=n.focusedValue,r=n.selectValue,t=r.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function Ur(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Rt=function(e,i){return e.getOptionLabel(i)},xe=function(e,i){return e.getOptionValue(i)};function Lt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Tt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var r=xe(n,e);return i.some(function(t){return xe(n,t)===r})}function kt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Bt=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},_r=1,jt=function(n){un(i,n);var e=cn(i);function i(r){var t;if(dn(this,i),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.instancePrefix="",t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,u){var l=t.props,c=l.onChange,d=l.name;u.name=d,t.ariaOnChange(o,u),c(o,u)},t.setValue=function(o,u,l){var c=t.props,d=c.closeMenuOnSelect,b=c.isMulti,E=c.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:E}),d&&(t.setState({inputIsHiddenAfterUpdate:!b}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:u,option:l})},t.selectOption=function(o){var u=t.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,b=t.state.selectValue,E=c&&t.isOptionSelected(o,b),x=t.isOptionDisabled(o,b);if(E){var g=t.getOptionValue(o);t.setValue(b.filter(function(h){return t.getOptionValue(h)!==g}),"deselect-option",o)}else if(!x)c?t.setValue([].concat(dt(b),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&t.blurInput()},t.removeValue=function(o){var u=t.props.isMulti,l=t.state.selectValue,c=t.getOptionValue(o),d=l.filter(function(E){return t.getOptionValue(E)!==c}),b=le(u,d,d[0]||null);t.onChange(b,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(le(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,u=t.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=le(o,c,c[0]||null);t.onChange(d,{action:"pop-value",removedValue:l})},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return kn.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(o){return Rt(t.props,o)},t.getOptionValue=function(o){return xe(t.props,o)},t.getStyles=function(o,u){var l=t.props.unstyled,c=Lr[o](u,l);c.boxSizing="border-box";var d=t.props.styles[o];return d?d(c,u):c},t.getClassNames=function(o,u){var l,c;return(l=(c=t.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},t.getElementId=function(o){return"".concat(t.instancePrefix,"-").concat(o)},t.getComponents=function(){return ar(t.props)},t.buildCategorizedOptions=function(){return Vt(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Pt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,u){t.setState({ariaSelection:F({value:o},u)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var u=t.props,l=u.isMulti,c=u.menuIsOpen;t.focusInput(),c?(t.setState({inputIsHiddenAfterUpdate:!l}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(t.initialTouchX=l.clientX,t.initialTouchY=l.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-t.initialTouchX),d=Math.abs(l.clientY-t.initialTouchY),b=5;t.userIsDragging=c>b||d>b}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var u=t.props.inputValue,l=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(l,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){t.blockOptionHover||t.state.focusedOption===o||t.setState({focusedOption:o})},t.shouldHideSelectedOptions=function(){return Bt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var u=t.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,b=u.inputValue,E=u.isClearable,x=u.isDisabled,g=u.menuIsOpen,h=u.onKeyDown,m=u.tabSelectsValue,p=u.openMenuOnFocus,C=t.state,O=C.focusedOption,M=C.focusedValue,D=C.selectValue;if(!x&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||b)return;t.focusValue("previous");break;case"ArrowRight":if(!l||b)return;t.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(M)t.removeValue(M);else{if(!c)return;l?t.popValue():E&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!g||!m||!O||p&&t.isOptionSelected(O,D))return;t.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(g){if(!O||t.isComposing)return;t.selectOption(O);break}return;case"Escape":g?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:b}),t.onMenuClose()):E&&d&&t.clearValue();break;case" ":if(b)return;if(!g){t.openMenu("first");break}if(!O)return;t.selectOption(O);break;case"ArrowUp":g?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":g?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!g)return;t.focusOption("pageup");break;case"PageDown":if(!g)return;t.focusOption("pagedown");break;case"Home":if(!g)return;t.focusOption("first");break;case"End":if(!g)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.instancePrefix="react-select-"+(t.props.instanceId||++_r),t.state.selectValue=_e(r.value),r.menuIsOpen&&t.state.selectValue.length){var a=t.buildFocusableOptions(),s=a.indexOf(t.state.selectValue[0]);t.state.focusedOption=a[s]}return t}return pn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&We(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&t.isDisabled||u&&o&&!t.menuIsOpen)&&this.focusInput(),u&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(We(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(t){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),t==="up"?u=l>0?l-1:o.length-1:t==="down"?u=(l+1)%o.length:t==="pageup"?(u=l-a,u<0&&(u=0)):t==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):t==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(De):F(F({},De),this.props.theme):De}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,b=d.isMulti,E=d.isRtl,x=d.options,g=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:g,isMulti:b,isRtl:E,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return Lt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Tt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return kt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,o=t.inputId,u=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,b=t.required,E=this.getComponents(),x=E.Input,g=this.state,h=g.inputIsHidden,m=g.ariaSelection,p=this.commonProps,C=o||this.getElementId("input"),O=F(F(F({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":b,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(x,w({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},O)):f.createElement(Er,w({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ge,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,b=this.commonProps,E=this.props,x=E.controlShouldRenderValue,g=E.isDisabled,h=E.isMulti,m=E.inputValue,p=E.placeholder,C=this.state,O=C.selectValue,M=C.focusedValue,D=C.isFocused;if(!this.hasValue()||!x)return m?null:f.createElement(d,w({},b,{key:"placeholder",isDisabled:g,isFocused:D,innerProps:{id:this.getElementId("placeholder")}}),p);if(h)return O.map(function(A,P){var j=A===M,z="".concat(t.getOptionLabel(A),"-").concat(t.getOptionValue(A));return f.createElement(s,w({},b,{components:{Container:o,Label:u,Remove:l},isFocused:j,isDisabled:g,key:z,index:P,removeProps:{onClick:function(){return t.removeValue(A)},onTouchEnd:function(){return t.removeValue(A)},onMouseDown:function(N){N.preventDefault()}},data:A}),t.formatOptionLabel(A,"value"))});if(m)return null;var I=O[0];return f.createElement(c,w({},b,{data:I,isDisabled:g}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,w({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,b=a.NoOptionsMessage,E=a.Option,x=this.commonProps,g=this.state.focusedOption,h=this.props,m=h.captureMenuScroll,p=h.inputValue,C=h.isLoading,O=h.loadingMessage,M=h.minMenuHeight,D=h.maxMenuHeight,I=h.menuIsOpen,A=h.menuPlacement,P=h.menuPosition,j=h.menuPortalTarget,z=h.menuShouldBlockScroll,k=h.menuShouldScrollIntoView,N=h.noOptionsMessage,R=h.onMenuScrollToTop,L=h.onMenuScrollToBottom;if(!I)return null;var H=function(B,J){var Z=B.type,W=B.data,G=B.isDisabled,ne=B.isSelected,re=B.label,Ut=B.value,Be=g===W,je=G?void 0:function(){return t.onOptionHover(W)},_t=G?void 0:function(){return t.selectOption(W)},He="".concat(t.getElementId("option"),"-").concat(J),Wt={id:He,onClick:_t,onMouseMove:je,onMouseOver:je,tabIndex:-1};return f.createElement(E,w({},x,{innerProps:Wt,data:W,isDisabled:G,isSelected:ne,key:He,label:re,type:Z,value:Ut,isFocused:Be,innerRef:Be?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(B.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var B=T.data,J=T.options,Z=T.index,W="".concat(t.getElementId("group"),"-").concat(Z),G="".concat(W,"-heading");return f.createElement(s,w({},x,{key:W,data:B,options:J,Heading:o,headingProps:{id:G,data:T.data},label:t.formatGroupLabel(T.data)}),T.options.map(function(ne){return H(ne,"".concat(Z,"-").concat(ne.index))}))}else if(T.type==="option")return H(T,"".concat(T.index))});else if(C){var _=O({inputValue:p});if(_===null)return null;U=f.createElement(d,x,_)}else{var X=N({inputValue:p});if(X===null)return null;U=f.createElement(b,x,X)}var Q={minMenuHeight:M,maxMenuHeight:D,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:k},ee=f.createElement(Jn,w({},x,Q),function(T){var B=T.ref,J=T.placerProps,Z=J.placement,W=J.maxHeight;return f.createElement(u,w({},x,Q,{innerRef:B,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove,id:t.getElementId("listbox")},isLoading:C,placement:Z}),f.createElement(Dr,{captureEnabled:m,onTopArrive:R,onBottomArrive:L,lockEnabled:z},function(G){return f.createElement(l,w({},x,{innerRef:function(re){t.getMenuListRef(re),G(re)},isLoading:C,maxHeight:W,focusedOption:g}),U)}))});return j||P==="fixed"?f.createElement(c,w({},x,{appendTo:j,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),ee):ee}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return f.createElement(Ir,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var b=d.map(function(g){return t.getOptionValue(g)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:b})}else{var E=d.length>0?d.map(function(g,h){return f.createElement("input",{key:"i-".concat(h),name:l,type:"hidden",value:t.getOptionValue(g)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,E)}else{var x=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(hr,w({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,o=t.SelectContainer,u=t.ValueContainer,l=this.props,c=l.className,d=l.id,b=l.isDisabled,E=l.menuIsOpen,x=this.state.isFocused,g=this.commonProps=this.getCommonProps();return f.createElement(o,w({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:b,isFocused:x}),this.renderLiveRegion(),f.createElement(a,w({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:b,isFocused:x,menuIsOpen:E}),f.createElement(u,w({},g,{isDisabled:b}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,w({},g,{isDisabled:b}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,b=t.options,E=t.value,x=t.menuIsOpen,g=t.inputValue,h=t.isMulti,m=_e(E),p={};if(s&&(E!==s.value||b!==s.options||x!==s.menuIsOpen||g!==s.inputValue)){var C=x?zr(t,m):[],O=o?Nr(a,m):null,M=Ur(a,C);p={selectValue:m,focusedOption:M,focusedValue:O,clearFocusValueOnUpdate:!1}}var D=u!=null&&t!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},I=l,A=c&&d;return c&&!A&&(I={value:le(h,m,m[0]||null),options:m,action:"initial-input-focus"},A=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),F(F(F({},p),D),{},{prevProps:t,ariaSelection:I,prevWasFocused:A})}}]),i}(f.Component);jt.defaultProps=$r;var Wr=f.forwardRef(function(n,e){var i=gn(n);return f.createElement(jt,w({ref:e},i))}),Gr=Wr;const Yr=S.h1`
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
`,qr=S.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`,Kr=S.div`
  @media screen and (min-width: 320px) {
    position: relative;
    margin-bottom: 16px;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Xr=S.input`
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
`,Qr=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`,Jr=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,Zr=S.div`
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
`,ut=S(Gr)`
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
`;S.div``;const{QUERY:ce,RECOMMENDED:de,CATEGORY:Ht}=Jt,eo={[ce]:"",[Ht]:"",[de]:""};function $t({onProductsChange:n}){const[e,i]=f.useState(eo),[r,t]=f.useState(""),[a,s]=f.useState([]),{isSuccess:o,currentData:u}=Qt();f.useEffect(()=>{if(o){const[p]=u,{productsCategories:C}=p;s(C)}},[u,o]),f.useEffect(()=>{n(e)},[e,n]);const l=()=>{t(""),i(p=>({...p,[ce]:""}))},c=["All","Recommended","Not recommended"],[d,b]=f.useState(null),[E,x]=f.useState(null),g=p=>{i(C=>({...C,[ce]:p.target.value.trim()})),t(p.target.value)},h=p=>{b(p),i(C=>({...C,[Ht]:p.label}))},m=p=>{switch(x(p),p.label){case"Recommended":i(C=>({...C,[de]:[!0]}));break;case"Not recommended":i(C=>({...C,[de]:[!1]}));break;default:i(C=>({...C,[de]:null}))}};return v.jsx(v.Fragment,{children:v.jsxs(qr,{children:[v.jsxs(Kr,{children:[v.jsx(Xr,{type:"text",value:e[ce],onChange:g}),v.jsx(Qr,{width:"18",height:"18",children:v.jsx("use",{href:`${pe}#search`})}),r.trim()&&v.jsx(Jr,{onClick:l,children:v.jsx("svg",{width:"18",height:"18",children:v.jsx("use",{href:`${pe}#x-clean`})})})]}),v.jsxs(Zr,{children:[v.jsx(at,{children:v.jsx(ut,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"#040404",borderRadius:"12px"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:h,options:a.map(p=>({label:p.charAt(0).toUpperCase()+p.slice(1)})),placeholder:"Categories"})}),v.jsx(at,{children:v.jsx(ut,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"none",border:"none"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"195px"}})},value:E,onChange:m,options:c.map(p=>({label:p})),placeholder:"All"})})]}),v.jsx(Yr,{children:"Filters"})]})})}$t.propTypes={onProductsChange:Y.func.isRequired};const to=S.div`
  margin: 48px 24px;

  @media screen and (min-width: 768px) {
    margin: 48px 32px;
  }
`,no=S.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,io=S.input`
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
`,ro=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,oo=S.input`
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
`,ao=S.span`
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
`,uo=S.div`
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,so=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,lo=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,co=S.div``,po=S.button`
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
`,fo=S.button`
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
`;function ho(n){const{onClose:e,addProdSuccess:i,product:r}=n,[t,a]=f.useState(100),s=t*r.calories,o=()=>{e(),i(s)};return v.jsxs(to,{children:[v.jsxs(no,{children:[v.jsx(io,{type:"text",value:r.title,readOnly:!0}),v.jsxs(ro,{children:[v.jsx(oo,{type:"number",value:t,onChange:u=>a(u.target.value)}),v.jsx(ao,{children:"grams"})]})]}),v.jsxs(uo,{children:[v.jsx(so,{children:"Calories:"}),v.jsx(lo,{children:s})]}),v.jsxs(co,{children:[v.jsx(po,{onClick:o,children:"Add to diary"}),v.jsx(fo,{onClick:e,children:"Cancel"})]})]})}const mo=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 22px 111px;
  }
`,vo=S.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,go=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,bo=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,xo=S.p`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,Eo=S.span`
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Co=S.button`
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
`,So=S.a`
  justify-content: center;
  display: flex;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,Fo=S.p`
  margin-right: 8px;
`;function yo(n){const{onClose:e,totalCalories:i}=n;return v.jsxs(mo,{children:[v.jsx(vo,{}),v.jsx(go,{children:"Well Done"}),v.jsxs(bo,{children:[v.jsx(xo,{children:"Calories:"}),v.jsx(Eo,{children:i})]}),v.jsx(Co,{onClick:e,children:"Next product"}),v.jsxs(So,{href:"Diary",children:[v.jsx(Fo,{children:"To the diary"}),v.jsx("svg",{width:"16",height:"16",children:v.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const wo=S.li`
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
`,Do=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,Oo=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`,Ao=S.div`
  display: flex;
  align-items: center;
`,Io=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${n=>n.recommended?"#419B09":"#E9101D"};
`,Mo=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,Vo=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,Po=S.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Ro=S.svg`
  width: 16px;
  height: 16px;
`,Lo=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,To=S.svg`
  width: 24px;
  height: 24px;
`,ko=S.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Bo=S.div`
  display: flex;
  gap: 16px;
`,Oe=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${n=>n.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,Ae=S.span`
  color: #efede8;
  padding-left: 8px;

  @media (min-width: 768px) {
    padding-left: 4px;
  }
`;function zt({props:n,userGroupBlood:e}){const{weight:i,calories:r,category:t,title:a,groupBloodNotAllowed:s}=n,o=s[e],[u,l]=f.useState(!1),[c,d]=f.useState(!1),[b,E]=f.useState(null),x=()=>{l(!0)},g=()=>{l(!1),d(!1)},h=m=>{d(!0),E(m)};return v.jsxs(v.Fragment,{children:[v.jsxs(wo,{children:[v.jsxs(Do,{children:[v.jsx(Oo,{children:"DIET"}),v.jsxs(Ao,{children:[v.jsx(Io,{recommended:!o}),v.jsx(Mo,{children:o?"Not recommended":"Recommended"}),v.jsxs(Vo,{onClick:x,children:[v.jsx(Po,{children:"Add"}),v.jsx(Ro,{children:v.jsx("use",{href:`${pe}#arrow-add-prod-orange`})})]})]})]}),v.jsxs(Lo,{children:[v.jsx(To,{children:v.jsx("use",{href:`${pe}#run-man`})}),v.jsx(ko,{children:a})]}),v.jsxs(Bo,{children:[v.jsxs(Oe,{children:["Calories:",v.jsx(Ae,{children:r})]}),v.jsxs(Oe,{category:!0,children:["Category:",v.jsx(Ae,{children:t})]}),v.jsxs(Oe,{children:["Weight:",v.jsx(Ae,{children:i})]})]})]}),v.jsx($e,{onClose:g,onShow:u,children:v.jsx(ho,{onClose:g,addProdSuccess:h,product:n})}),v.jsx($e,{onClose:g,onShow:c,children:v.jsx(yo,{onClose:g,totalCalories:b})})]})}zt.propTypes={props:Y.shape({weight:Y.number.isRequired,calories:Y.number.isRequired,category:Y.string.isRequired,title:Y.string.isRequired,groupBloodNotAllowed:Y.object.isRequired}).isRequired,userGroupBlood:Y.number};const jo=S.div`
  @media (min-width: 768px) {
    height: 660px;
  }
  @media (min-width: 1440px) {
    height: 487px;
  }
`,Ho=S.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;

    overflow-y: scroll;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`,$o=S.p`
  margin-bottom: 16px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,zo=S.span`
  color: #e6533c;
`,No=S.span`
  margin-top: 16px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Nt({filter:n}){const[e,i]=f.useState([]),[r,t]=f.useState(null),[a]=Zt(),s=en(),{isSuccess:o,data:u}=s;return f.useEffect(()=>{o&&t(u)},[u,o]),f.useEffect(()=>{(async()=>{try{const{data:c}=await a(n).unwrap();i(c)}catch(c){console.error("Error fetching data:",c.message)}})()},[n,a]),v.jsx(jo,{children:e.length>0?v.jsx(Ho,{children:e.map(({_id:l,...c})=>v.jsx(zt,{props:c,userGroupBlood:r},l))}):v.jsxs(v.Fragment,{children:[v.jsxs($o,{children:[v.jsx(zo,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),v.jsx(No,{children:"Try changing the search parameters."})]})})}Nt.propTypes={filter:Y.object};const Uo=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: image-set(
    url(${nn}) 1x,
    url(${rn}) 2x,
    url(${on}) 3x
  );
  background-size: 428px 716px;
`,_o=S.div`
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
`;function Yo(){const[n,e]=f.useState(null),[i,r]=f.useState(window.innerWidth>=1440),t=()=>{r(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),v.jsxs(v.Fragment,{children:[i&&v.jsx(Uo,{}),v.jsxs(_o,{children:[v.jsx(tn,{text:"Products"}),v.jsx($t,{onProductsChange:e})]}),v.jsx(Nt,{filter:n})]})}export{Yo as Products};
