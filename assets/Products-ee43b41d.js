import{_ as ut,w as Ut,r as f,y as E,z as Nt,A as re,C,v as S,F as _t,G as st,n as F,H as Wt,j as x,J as Gt,o as He,B as je,K as Yt}from"./index-d1a0c715.js";import{T as qt}from"./TitlePage-b83884ee.js";import{_ as Kt,a as Xt}from"./setPrototypeOf-51e8cf87.js";function Oe(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function lt(n,e){if(n){if(typeof n=="string")return Oe(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Oe(n,e)}}function Qt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Jt(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Kt(n,e)}function de(n){return de=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},de(n)}function Zt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function en(n,e){if(e&&(ut(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Qt(n)}function tn(n){var e=Zt();return function(){var r=de(n),t;if(e){var a=de(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return en(this,t)}}function nn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function $e(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Ut(r.key),r)}}function rn(n,e,i){return e&&$e(n.prototype,e),i&&$e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function on(n){if(Array.isArray(n))return n}function an(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,t,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(d){l=!0,t=d}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw t}}return o}}function un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return on(n)||an(n,e)||lt(n,e)||un()}function q(n,e){if(n==null)return{};var i=Xt(n,e),r,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var sn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ln(n){var e=n.defaultInputValue,i=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,a=n.defaultValue,s=a===void 0?null:a,o=n.inputValue,u=n.menuIsOpen,l=n.onChange,d=n.onInputChange,p=n.onMenuClose,m=n.onMenuOpen,b=n.value,g=q(n,sn),v=f.useState(o!==void 0?o:i),h=Y(v,2),c=h[0],y=h[1],O=f.useState(u!==void 0?u:t),D=Y(O,2),M=D[0],w=D[1],I=f.useState(b!==void 0?b:s),A=Y(I,2),P=A[0],H=A[1],z=f.useCallback(function(_,K){typeof l=="function"&&l(_,K),H(_)},[l]),k=f.useCallback(function(_,K){var X;typeof d=="function"&&(X=d(_,K)),y(X!==void 0?X:_)},[d]),U=f.useCallback(function(){typeof m=="function"&&m(),w(!0)},[m]),R=f.useCallback(function(){typeof p=="function"&&p(),w(!1)},[p]),L=o!==void 0?o:c,j=u!==void 0?u:M,N=b!==void 0?b:P;return E(E({},g),{},{inputValue:L,menuIsOpen:j,onChange:z,onInputChange:k,onMenuClose:R,onMenuOpen:U,value:N})}function cn(n){if(Array.isArray(n))return Oe(n)}function dn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function pn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(n){return cn(n)||dn(n)||lt(n)||pn()}function fn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const hn=Math.min,mn=Math.max,pe=Math.round,oe=Math.floor,fe=n=>({x:n,y:n});function vn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function dt(n){return ft(n)?(n.nodeName||"").toLowerCase():"#document"}function $(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function pt(n){var e;return(e=(ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ft(n){return n instanceof Node||n instanceof $(n).Node}function Ae(n){return n instanceof Element||n instanceof $(n).Element}function Ve(n){return n instanceof HTMLElement||n instanceof $(n).HTMLElement}function ze(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof $(n).ShadowRoot}function ht(n){const{overflow:e,overflowX:i,overflowY:r,display:t}=Pe(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(t)}function gn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function bn(n){return["html","body","#document"].includes(dt(n))}function Pe(n){return $(n).getComputedStyle(n)}function xn(n){if(dt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||ze(n)&&n.host||pt(n);return ze(e)?e.host:e}function mt(n){const e=xn(n);return bn(e)?n.ownerDocument?n.ownerDocument.body:n.body:Ve(e)&&ht(e)?e:mt(e)}function he(n,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=mt(n),a=t===((r=n.ownerDocument)==null?void 0:r.body),s=$(t);return a?e.concat(s,s.visualViewport||[],ht(t)?t:[],s.frameElement&&i?he(s.frameElement):[]):e.concat(t,he(t,[],i))}function En(n){const e=Pe(n);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=Ve(n),a=t?n.offsetWidth:i,s=t?n.offsetHeight:r,o=pe(i)!==a||pe(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function Re(n){return Ae(n)?n:n.contextElement}function xe(n){const e=Re(n);if(!Ve(e))return fe(1);const i=e.getBoundingClientRect(),{width:r,height:t,$:a}=En(e);let s=(a?pe(i.width):i.width)/r,o=(a?pe(i.height):i.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const Cn=fe(0);function Sn(n){const e=$(n);return!gn()||!e.visualViewport?Cn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==$(n)?!1:e}function Ue(n,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=Re(n);let s=fe(1);e&&(r?Ae(r)&&(s=xe(r)):s=xe(n));const o=Fn(a,i,r)?Sn(a):fe(0);let u=(t.left+o.x)/s.x,l=(t.top+o.y)/s.y,d=t.width/s.x,p=t.height/s.y;if(a){const m=$(a),b=r&&Ae(r)?$(r):r;let g=m.frameElement;for(;g&&r&&b!==m;){const v=xe(g),h=g.getBoundingClientRect(),c=Pe(g),y=h.left+(g.clientLeft+parseFloat(c.paddingLeft))*v.x,O=h.top+(g.clientTop+parseFloat(c.paddingTop))*v.y;u*=v.x,l*=v.y,d*=v.x,p*=v.y,u+=y,l+=O,g=$(g).frameElement}}return vn({width:d,height:p,x:u,y:l})}function yn(n,e){let i=null,r;const t=pt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:d,width:p,height:m}=n.getBoundingClientRect();if(o||e(),!p||!m)return;const b=oe(d),g=oe(t.clientWidth-(l+p)),v=oe(t.clientHeight-(d+m)),h=oe(l),y={rootMargin:-b+"px "+-g+"px "+-v+"px "+-h+"px",threshold:mn(0,hn(1,u))||1};let O=!0;function D(M){const w=M[0].intersectionRatio;if(w!==u){if(!O)return s();w?s(!1,w):r=setTimeout(()=>{s(!1,1e-7)},100)}O=!1}try{i=new IntersectionObserver(D,{...y,root:t.ownerDocument})}catch{i=new IntersectionObserver(D,y)}i.observe(n)}return s(!0),a}function wn(n,e,i,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=Re(n),d=t||a?[...l?he(l):[],...he(e)]:[];d.forEach(c=>{t&&c.addEventListener("scroll",i,{passive:!0}),a&&c.addEventListener("resize",i)});const p=l&&o?yn(l,i):null;let m=-1,b=null;s&&(b=new ResizeObserver(c=>{let[y]=c;y&&y.target===l&&b&&(b.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{b&&b.observe(e)})),i()}),l&&!u&&b.observe(l),b.observe(e));let g,v=u?Ue(n):null;u&&h();function h(){const c=Ue(n);v&&(c.x!==v.x||c.y!==v.y||c.width!==v.width||c.height!==v.height)&&i(),v=c,g=requestAnimationFrame(h)}return i(),()=>{d.forEach(c=>{t&&c.removeEventListener("scroll",i),a&&c.removeEventListener("resize",i)}),p&&p(),b&&b.disconnect(),b=null,u&&cancelAnimationFrame(g)}}var Ie=f.useLayoutEffect,Dn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function On(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function An(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),t=2;t<i;t++)r[t-2]=arguments[t];var a=[].concat(r);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(On(n,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var Ne=function(e){return Bn(e)?e.filter(Boolean):ut(e)==="object"&&e!==null?[e]:[]},vt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=q(e,Dn);return E({},i)},V=function(e,i,r){var t=e.cx,a=e.getStyles,s=e.getClassNames,o=e.className;return{css:a(i,e),className:t(r??{},s(i,e),o)}};function be(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function In(n){return be(n)?window.innerHeight:n.clientHeight}function gt(n){return be(n)?window.pageYOffset:n.scrollTop}function ve(n,e){if(be(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Mn(n){var e=getComputedStyle(n),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Vn(n,e,i,r){return i*((n=n/r-1)*n*n+1)+e}function ae(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,t=gt(n),a=e-t,s=10,o=0;function u(){o+=s;var l=Vn(o,t,a,i);ve(n,l),o<i?window.requestAnimationFrame(u):r(n)}u()}function _e(n,e){var i=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>i.bottom?ve(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<i.top&&ve(n,Math.max(e.offsetTop-t,0))}function Pn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function We(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Rn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bt=!1,Ln={get passive(){return bt=!0}},ue=typeof window<"u"?window:{};ue.addEventListener&&ue.removeEventListener&&(ue.addEventListener("p",me,Ln),ue.removeEventListener("p",me,!1));var Tn=bt;function kn(n){return n!=null}function Bn(n){return Array.isArray(n)}function se(n,e,i){return n?e:i}var Hn=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var o=Y(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],d=u[1];return s[l]=d,s},{})},jn=["children","innerProps"],$n=["children","innerProps"];function zn(n){var e=n.maxHeight,i=n.menuEl,r=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,o=n.controlHeight,u=Mn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var d=u.getBoundingClientRect(),p=d.height,m=i.getBoundingClientRect(),b=m.bottom,g=m.height,v=m.top,h=i.offsetParent.getBoundingClientRect(),c=h.top,y=s?window.innerHeight:In(u),O=gt(u),D=parseInt(getComputedStyle(i).marginBottom,10),M=parseInt(getComputedStyle(i).marginTop,10),w=c-M,I=y-v,A=w+O,P=p-O-v,H=b-y+O+D,z=O+v-M,k=160;switch(t){case"auto":case"bottom":if(I>=g)return{placement:"bottom",maxHeight:e};if(P>=g&&!s)return a&&ae(u,H,k),{placement:"bottom",maxHeight:e};if(!s&&P>=r||s&&I>=r){a&&ae(u,H,k);var U=s?I-D:P-D;return{placement:"bottom",maxHeight:U}}if(t==="auto"||s){var R=e,L=s?w:A;return L>=r&&(R=Math.min(L-D-o,e)),{placement:"top",maxHeight:R}}if(t==="bottom")return a&&ve(u,H),{placement:"bottom",maxHeight:e};break;case"top":if(w>=g)return{placement:"top",maxHeight:e};if(A>=g&&!s)return a&&ae(u,z,k),{placement:"top",maxHeight:e};if(!s&&A>=r||s&&w>=r){var j=e;return(!s&&A>=r||s&&w>=r)&&(j=s?w-M:A-M),a&&ae(u,z,k),{placement:"top",maxHeight:j}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Un(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var xt=function(e){return e==="auto"?"bottom":e},Nn=function(e,i){var r,t=e.placement,a=e.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return E((r={label:"menu"},re(r,Un(t),"100%"),re(r,"position","absolute"),re(r,"width","100%"),re(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},Et=f.createContext(null),_n=function(e){var i=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,o=e.menuShouldScrollIntoView,u=e.theme,l=f.useContext(Et)||{},d=l.setPortalPlacement,p=f.useRef(null),m=f.useState(t),b=Y(m,2),g=b[0],v=b[1],h=f.useState(null),c=Y(h,2),y=c[0],O=c[1],D=u.spacing.controlHeight;return Ie(function(){var M=p.current;if(M){var w=s==="fixed",I=o&&!w,A=zn({maxHeight:t,menuEl:M,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:w,controlHeight:D});v(A.maxHeight),O(A.placement),d==null||d(A.placement)}},[t,a,s,o,r,d,D]),i({ref:p,placerProps:E(E({},e),{},{placement:y||xt(a),maxHeight:g})})},Wn=function(e){var i=e.children,r=e.innerRef,t=e.innerProps;return C("div",S({},V(e,"menu",{menu:!0}),{ref:r},t),i)},Gn=Wn,Yn=function(e,i){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return E({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},qn=function(e){var i=e.children,r=e.innerProps,t=e.innerRef,a=e.isMulti;return C("div",S({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},r),i)},Ct=function(e,i){var r=e.theme,t=r.spacing.baseUnit,a=r.colors;return E({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Kn=Ct,Xn=Ct,Qn=function(e){var i=e.children,r=i===void 0?"No options":i,t=e.innerProps,a=q(e,jn);return C("div",S({},V(E(E({},a),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},Jn=function(e){var i=e.children,r=i===void 0?"Loading...":i,t=e.innerProps,a=q(e,$n);return C("div",S({},V(E(E({},a),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},Zn=function(e){var i=e.rect,r=e.offset,t=e.position;return{left:i.left,position:t,top:r,width:i.width,zIndex:1}},ei=function(e){var i=e.appendTo,r=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,o=e.menuPosition,u=f.useRef(null),l=f.useRef(null),d=f.useState(xt(s)),p=Y(d,2),m=p[0],b=p[1],g=f.useMemo(function(){return{setPortalPlacement:b}},[]),v=f.useState(null),h=Y(v,2),c=h[0],y=h[1],O=f.useCallback(function(){if(t){var I=Pn(t),A=o==="fixed"?0:window.pageYOffset,P=I[m]+A;(P!==(c==null?void 0:c.offset)||I.left!==(c==null?void 0:c.rect.left)||I.width!==(c==null?void 0:c.rect.width))&&y({offset:P,rect:I})}},[t,o,m,c==null?void 0:c.offset,c==null?void 0:c.rect.left,c==null?void 0:c.rect.width]);Ie(function(){O()},[O]);var D=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&u.current&&(l.current=wn(t,u.current,O,{elementResize:"ResizeObserver"in window}))},[t,O]);Ie(function(){D()},[D]);var M=f.useCallback(function(I){u.current=I,D()},[D]);if(!i&&o!=="fixed"||!c)return null;var w=C("div",S({ref:M},V(E(E({},e),{},{offset:c.offset,position:o,rect:c.rect}),"menuPortal",{"menu-portal":!0}),a),r);return C(Et.Provider,{value:g},i?_t.createPortal(w,i):w)},ti=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},ni=function(e){var i=e.children,r=e.innerProps,t=e.isDisabled,a=e.isRtl;return C("div",S({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),r),i)},ii=function(e,i){var r=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return E({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},ri=function(e){var i=e.children,r=e.innerProps,t=e.isMulti,a=e.hasValue;return C("div",S({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),r),i)},oi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ai=function(e){var i=e.children,r=e.innerProps;return C("div",S({},V(e,"indicatorsContainer",{indicators:!0}),r),i)},Ge,ui=["size"],si=["innerProps","isRtl","size"],li={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},St=function(e){var i=e.size,r=q(e,ui);return C("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:li},r))},Le=function(e){return C(St,S({size:20},e),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ft=function(e){return C(St,S({size:20},e),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},yt=function(e,i){var r=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return E({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},ci=yt,di=function(e){var i=e.children,r=e.innerProps;return C("div",S({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||C(Ft,null))},pi=yt,fi=function(e){var i=e.children,r=e.innerProps;return C("div",S({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||C(Le,null))},hi=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return E({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},mi=function(e){var i=e.innerProps;return C("span",S({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},vi=Nt(Ge||(Ge=fn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),gi=function(e,i){var r=e.isFocused,t=e.size,a=e.theme,s=a.colors,o=a.spacing.baseUnit;return E({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},Ee=function(e){var i=e.delay,r=e.offset;return C("span",{css:st({animation:"".concat(vi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},bi=function(e){var i=e.innerProps,r=e.isRtl,t=e.size,a=t===void 0?4:t,s=q(e,si);return C("div",S({},V(E(E({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),C(Ee,{delay:0,offset:r}),C(Ee,{delay:160,offset:!0}),C(Ee,{delay:320,offset:!r}))},xi=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return E({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:t?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},Ei=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,o=e.menuIsOpen;return C("div",S({ref:a},V(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},Ci=Ei,Si=["data"],Fi=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},yi=function(e){var i=e.children,r=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,o=e.headingProps,u=e.innerProps,l=e.label,d=e.theme,p=e.selectProps;return C("div",S({},V(e,"group",{group:!0}),u),C(s,S({},o,{selectProps:p,theme:d,getStyles:t,getClassNames:a,cx:r}),l),C("div",null,i))},wi=function(e,i){var r=e.theme,t=r.colors,a=r.spacing;return E({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Di=function(e){var i=vt(e);i.data;var r=q(i,Si);return C("div",S({},V(e,"groupHeading",{"group-heading":!0}),r))},Oi=yi,Ai=["innerRef","isDisabled","isHidden","inputClassName"],Ii=function(e,i){var r=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,o=a.colors;return E(E({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Mi),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},wt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Mi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":E({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wt)},Vi=function(e){return E({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},wt)},Pi=function(e){var i=e.cx,r=e.value,t=vt(e),a=t.innerRef,s=t.isDisabled,o=t.isHidden,u=t.inputClassName,l=q(t,Ai);return C("div",S({},V(e,"input",{"input-container":!0}),{"data-value":r||""}),C("input",S({className:i({input:!0},u),ref:a,style:Vi(o),disabled:s},l)))},Ri=Pi,Li=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors;return E({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Ti=function(e,i){var r=e.theme,t=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return E({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ki=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors,o=e.isFocused;return E({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Dt=function(e){var i=e.children,r=e.innerProps;return C("div",r,i)},Bi=Dt,Hi=Dt;function ji(n){var e=n.children,i=n.innerProps;return C("div",S({role:"button"},i),e||C(Le,{size:14}))}var $i=function(e){var i=e.children,r=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,o=e.removeProps,u=e.selectProps,l=r.Container,d=r.Label,p=r.Remove;return C(l,{data:t,innerProps:E(E({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},C(d,{data:t,innerProps:E({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),C(p,{data:t,innerProps:E(E({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},zi=$i,Ui=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,o=s.spacing,u=s.colors;return E({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:t?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},Ni=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,o=e.innerProps;return C("div",S({},V(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},_i=Ni,Wi=function(e,i){var r=e.theme,t=r.spacing,a=r.colors;return E({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Gi=function(e){var i=e.children,r=e.innerProps;return C("div",S({},V(e,"placeholder",{placeholder:!0}),r),i)},Yi=Gi,qi=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return E({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Ki=function(e){var i=e.children,r=e.isDisabled,t=e.innerProps;return C("div",S({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),i)},Xi=Ki,Qi={ClearIndicator:fi,Control:Ci,DropdownIndicator:di,DownChevron:Ft,CrossIcon:Le,Group:Oi,GroupHeading:Di,IndicatorsContainer:ai,IndicatorSeparator:mi,Input:Ri,LoadingIndicator:bi,Menu:Gn,MenuList:qn,MenuPortal:ei,LoadingMessage:Jn,NoOptionsMessage:Qn,MultiValue:zi,MultiValueContainer:Bi,MultiValueLabel:Hi,MultiValueRemove:ji,Option:_i,Placeholder:Yi,SelectContainer:ni,SingleValue:Xi,ValueContainer:ri},Ji=function(e){return E(E({},Qi),e.components)},Ye=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Zi(n,e){return!!(n===e||Ye(n)&&Ye(e))}function er(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!Zi(n[i],e[i]))return!1;return!0}function tr(n,e){e===void 0&&(e=er);var i=null;function r(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var s=n.apply(this,t);return i={lastResult:s,lastArgs:t,lastThis:this},s}return r.clear=function(){i=null},r}var nr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ir=function(e){return C("span",S({css:nr},e))},qe=ir,rr={guidance:function(e){var i=e.isSearchable,r=e.isMulti,t=e.isDisabled,a=e.tabSelectsValue,s=e.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(t?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,t=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,o=e.selectValue,u=e.isDisabled,l=e.isSelected,d=function(g,v){return g&&g.length?"".concat(g.indexOf(v)+1," of ").concat(g.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(d(o,r),".");if(i==="menu"){var p=u?" disabled":"",m="".concat(l?"selected":"focused").concat(p);return"option ".concat(s," ").concat(m,", ").concat(d(t,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},or=function(e){var i=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,o=e.selectValue,u=e.selectProps,l=e.id,d=u.ariaLiveMessages,p=u.getOptionLabel,m=u.inputValue,b=u.isMulti,g=u.isOptionDisabled,v=u.isSearchable,h=u.menuIsOpen,c=u.options,y=u.screenReaderStatus,O=u.tabSelectsValue,D=u["aria-label"],M=u["aria-live"],w=f.useMemo(function(){return E(E({},rr),d||{})},[d]),I=f.useMemo(function(){var R="";if(i&&w.onChange){var L=i.option,j=i.options,N=i.removedValue,_=i.removedValues,K=i.value,X=function(G){return Array.isArray(G)?null:G},Z=N||L||X(K),T=Z?p(Z):"",B=j||_||void 0,Q=B?B.map(p):[],J=E({isDisabled:Z&&g(Z,o),label:T,labels:Q},i);R=w.onChange(J)}return R},[i,w,g,o,p]),A=f.useMemo(function(){var R="",L=r||t,j=!!(r&&o&&o.includes(r));if(L&&w.onFocus){var N={focused:L,label:p(L),isDisabled:g(L,o),isSelected:j,options:a,context:L===r?"menu":"value",selectValue:o};R=w.onFocus(N)}return R},[r,t,p,g,w,a,o]),P=f.useMemo(function(){var R="";if(h&&c.length&&w.onFilter){var L=y({count:a.length});R=w.onFilter({inputValue:m,resultsMessage:L})}return R},[a,m,h,w,c,y]),H=f.useMemo(function(){var R="";if(w.guidance){var L=t?"value":h?"menu":"input";R=w.guidance({"aria-label":D,context:L,isDisabled:r&&g(r,o),isMulti:b,isSearchable:v,tabSelectsValue:O})}return R},[D,r,t,b,g,v,h,w,o,O]),z="".concat(A," ").concat(P," ").concat(H),k=C(f.Fragment,null,C("span",{id:"aria-selection"},I),C("span",{id:"aria-context"},z)),U=(i==null?void 0:i.action)==="initial-input-focus";return C(f.Fragment,null,C(qe,{id:l},U&&k),C(qe,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!U&&k))},ar=or,Me=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ur=new RegExp("["+Me.map(function(n){return n.letters}).join("")+"]","g"),Ot={};for(var Ce=0;Ce<Me.length;Ce++)for(var Se=Me[Ce],Fe=0;Fe<Se.letters.length;Fe++)Ot[Se.letters[Fe]]=Se.base;var At=function(e){return e.replace(ur,function(i){return Ot[i]})},sr=tr(At),Ke=function(e){return e.replace(/^\s+|\s+$/g,"")},lr=function(e){return"".concat(e.label," ").concat(e.value)},cr=function(e){return function(i,r){if(i.data.__isNew__)return!0;var t=E({ignoreCase:!0,ignoreAccents:!0,stringify:lr,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,o=t.stringify,u=t.trim,l=t.matchFrom,d=u?Ke(r):r,p=u?Ke(o(i)):o(i);return a&&(d=d.toLowerCase(),p=p.toLowerCase()),s&&(d=sr(d),p=At(p)),l==="start"?p.substr(0,d.length)===d:p.indexOf(d)>-1}},dr=["innerRef"];function pr(n){var e=n.innerRef,i=q(n,dr),r=Hn(i,"onExited","in","enter","exit","appear");return C("input",S({ref:e},r,{css:st({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var fr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function hr(n){var e=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),d=f.useCallback(function(h,c){if(l.current!==null){var y=l.current,O=y.scrollTop,D=y.scrollHeight,M=y.clientHeight,w=l.current,I=c>0,A=D-M-O,P=!1;A>c&&s.current&&(r&&r(h),s.current=!1),I&&o.current&&(a&&a(h),o.current=!1),I&&c>A?(i&&!s.current&&i(h),w.scrollTop=D,P=!0,s.current=!0):!I&&-c>O&&(t&&!o.current&&t(h),w.scrollTop=0,P=!0,o.current=!0),P&&fr(h)}},[i,r,t,a]),p=f.useCallback(function(h){d(h,h.deltaY)},[d]),m=f.useCallback(function(h){u.current=h.changedTouches[0].clientY},[]),b=f.useCallback(function(h){var c=u.current-h.changedTouches[0].clientY;d(h,c)},[d]),g=f.useCallback(function(h){if(h){var c=Tn?{passive:!1}:!1;h.addEventListener("wheel",p,c),h.addEventListener("touchstart",m,c),h.addEventListener("touchmove",b,c)}},[b,m,p]),v=f.useCallback(function(h){h&&(h.removeEventListener("wheel",p,!1),h.removeEventListener("touchstart",m,!1),h.removeEventListener("touchmove",b,!1))},[b,m,p]);return f.useEffect(function(){if(e){var h=l.current;return g(h),function(){v(h)}}},[e,g,v]),function(h){l.current=h}}var Xe=["boxSizing","height","overflow","paddingRight","position"],Qe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Je(n){n.preventDefault()}function Ze(n){n.stopPropagation()}function et(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function tt(){return"ontouchstart"in window||navigator.maxTouchPoints}var nt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,ee={capture:!1,passive:!1};function mr(n){var e=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,t=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(nt){var l=document.body,d=l&&l.style;if(r&&Xe.forEach(function(g){var v=d&&d[g];t.current[g]=v}),r&&ne<1){var p=parseInt(t.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,b=window.innerWidth-m+p||0;Object.keys(Qe).forEach(function(g){var v=Qe[g];d&&(d[g]=v)}),d&&(d.paddingRight="".concat(b,"px"))}l&&tt()&&(l.addEventListener("touchmove",Je,ee),u&&(u.addEventListener("touchstart",et,ee),u.addEventListener("touchmove",Ze,ee))),ne+=1}},[r]),o=f.useCallback(function(u){if(nt){var l=document.body,d=l&&l.style;ne=Math.max(ne-1,0),r&&ne<1&&Xe.forEach(function(p){var m=t.current[p];d&&(d[p]=m)}),l&&tt()&&(l.removeEventListener("touchmove",Je,ee),u&&(u.removeEventListener("touchstart",et,ee),u.removeEventListener("touchmove",Ze,ee)))}},[r]);return f.useEffect(function(){if(e){var u=a.current;return s(u),function(){o(u)}}},[e,s,o]),function(u){a.current=u}}var vr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},gr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function br(n){var e=n.children,i=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,a=n.onBottomArrive,s=n.onBottomLeave,o=n.onTopArrive,u=n.onTopLeave,l=hr({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),d=mr({isEnabled:i}),p=function(b){l(b),d(b)};return C(f.Fragment,null,i&&C("div",{onClick:vr,css:gr}),e(p))}var xr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Er=function(e){var i=e.name,r=e.onFocus;return C("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:xr,value:"",onChange:function(){}})},Cr=Er,Sr=function(e){return e.label},Fr=function(e){return e.label},yr=function(e){return e.value},wr=function(e){return!!e.isDisabled},Dr={clearIndicator:pi,container:ti,control:xi,dropdownIndicator:ci,group:Fi,groupHeading:wi,indicatorsContainer:oi,indicatorSeparator:hi,input:Ii,loadingIndicator:gi,loadingMessage:Xn,menu:Nn,menuList:Yn,menuPortal:Zn,multiValue:Li,multiValueLabel:Ti,multiValueRemove:ki,noOptionsMessage:Kn,option:Ui,placeholder:Wi,singleValue:qi,valueContainer:ii},Or={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ar=4,It=4,Ir=38,Mr=It*2,Vr={baseUnit:It,controlHeight:Ir,menuGutter:Mr},ye={borderRadius:Ar,colors:Or,spacing:Vr},Pr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:We(),captureMenuScroll:!We(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:cr(),formatGroupLabel:Sr,getOptionLabel:Fr,getOptionValue:yr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:wr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Rn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function it(n,e,i,r){var t=Rt(n,e,i),a=Lt(n,e,i),s=Pt(n,e),o=ge(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:o,index:r}}function Mt(n,e){return n.options.map(function(i,r){if("options"in i){var t=i.options.map(function(s,o){return it(n,s,e,o)}).filter(function(s){return rt(n,s)});return t.length>0?{type:"group",data:i,options:t,index:r}:void 0}var a=it(n,i,e,r);return rt(n,a)?a:void 0}).filter(kn)}function Vt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ct(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Rr(n,e){return Vt(Mt(n,e))}function rt(n,e){var i=n.inputValue,r=i===void 0?"":i,t=e.data,a=e.isSelected,s=e.label,o=e.value;return(!kt(n)||!a)&&Tt(n,{label:s,value:o,data:t},r)}function Lr(n,e){var i=n.focusedValue,r=n.selectValue,t=r.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function Tr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Pt=function(e,i){return e.getOptionLabel(i)},ge=function(e,i){return e.getOptionValue(i)};function Rt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Lt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var r=ge(n,e);return i.some(function(t){return ge(n,t)===r})}function Tt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var kt=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},kr=1,Bt=function(n){Jt(i,n);var e=tn(i);function i(r){var t;if(nn(this,i),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.instancePrefix="",t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,u){var l=t.props,d=l.onChange,p=l.name;u.name=p,t.ariaOnChange(o,u),d(o,u)},t.setValue=function(o,u,l){var d=t.props,p=d.closeMenuOnSelect,m=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),p&&(t.setState({inputIsHiddenAfterUpdate:!m}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:u,option:l})},t.selectOption=function(o){var u=t.props,l=u.blurInputOnSelect,d=u.isMulti,p=u.name,m=t.state.selectValue,b=d&&t.isOptionSelected(o,m),g=t.isOptionDisabled(o,m);if(b){var v=t.getOptionValue(o);t.setValue(m.filter(function(h){return t.getOptionValue(h)!==v}),"deselect-option",o)}else if(!g)d?t.setValue([].concat(ct(m),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:p});return}l&&t.blurInput()},t.removeValue=function(o){var u=t.props.isMulti,l=t.state.selectValue,d=t.getOptionValue(o),p=l.filter(function(b){return t.getOptionValue(b)!==d}),m=se(u,p,p[0]||null);t.onChange(m,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(se(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,u=t.state.selectValue,l=u[u.length-1],d=u.slice(0,u.length-1),p=se(o,d,d[0]||null);t.onChange(p,{action:"pop-value",removedValue:l})},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return An.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(o){return Pt(t.props,o)},t.getOptionValue=function(o){return ge(t.props,o)},t.getStyles=function(o,u){var l=t.props.unstyled,d=Dr[o](u,l);d.boxSizing="border-box";var p=t.props.styles[o];return p?p(d,u):d},t.getClassNames=function(o,u){var l,d;return(l=(d=t.props.classNames)[o])===null||l===void 0?void 0:l.call(d,u)},t.getElementId=function(o){return"".concat(t.instancePrefix,"-").concat(o)},t.getComponents=function(){return Ji(t.props)},t.buildCategorizedOptions=function(){return Mt(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Vt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,u){t.setState({ariaSelection:E({value:o},u)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var u=t.props,l=u.isMulti,d=u.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!l}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&be(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(t.initialTouchX=l.clientX,t.initialTouchY=l.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var d=Math.abs(l.clientX-t.initialTouchX),p=Math.abs(l.clientY-t.initialTouchY),m=5;t.userIsDragging=d>m||p>m}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var u=t.props.inputValue,l=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(l,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){t.blockOptionHover||t.state.focusedOption===o||t.setState({focusedOption:o})},t.shouldHideSelectedOptions=function(){return kt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var u=t.props,l=u.isMulti,d=u.backspaceRemovesValue,p=u.escapeClearsValue,m=u.inputValue,b=u.isClearable,g=u.isDisabled,v=u.menuIsOpen,h=u.onKeyDown,c=u.tabSelectsValue,y=u.openMenuOnFocus,O=t.state,D=O.focusedOption,M=O.focusedValue,w=O.selectValue;if(!g&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||m)return;t.focusValue("previous");break;case"ArrowRight":if(!l||m)return;t.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(M)t.removeValue(M);else{if(!d)return;l?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!v||!c||!D||y&&t.isOptionSelected(D,w))return;t.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(v){if(!D||t.isComposing)return;t.selectOption(D);break}return;case"Escape":v?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:m}),t.onMenuClose()):b&&p&&t.clearValue();break;case" ":if(m)return;if(!v){t.openMenu("first");break}if(!D)return;t.selectOption(D);break;case"ArrowUp":v?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":v?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!v)return;t.focusOption("pageup");break;case"PageDown":if(!v)return;t.focusOption("pagedown");break;case"Home":if(!v)return;t.focusOption("first");break;case"End":if(!v)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.instancePrefix="react-select-"+(t.props.instanceId||++kr),t.state.selectValue=Ne(r.value),r.menuIsOpen&&t.state.selectValue.length){var a=t.buildFocusableOptions(),s=a.indexOf(t.state.selectValue[0]);t.state.focusedOption=a[s]}return t}return rn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&_e(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&t.isDisabled||u&&o&&!t.menuIsOpen)&&this.focusInput(),u&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(_e(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),d=t==="first"?0:l.length-1;if(!this.props.isMulti){var p=l.indexOf(o[0]);p>-1&&(d=p)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[d]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,d=-1;if(s.length){switch(t){case"previous":u===0?d=0:u===-1?d=l:d=u-1;break;case"next":u>-1&&u<l&&(d=u+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:s[d]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),t==="up"?u=l>0?l-1:o.length-1:t==="down"?u=(l+1)%o.length:t==="pageup"?(u=l-a,u<0&&(u=0)):t==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):t==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):E(E({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,d=this.setValue,p=this.props,m=p.isMulti,b=p.isRtl,g=p.options,v=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:v,isMulti:m,isRtl:b,options:g,selectOption:l,selectProps:p,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return Rt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Lt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Tt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,o=t.inputId,u=t.inputValue,l=t.tabIndex,d=t.form,p=t.menuIsOpen,m=t.required,b=this.getComponents(),g=b.Input,v=this.state,h=v.inputIsHidden,c=v.ariaSelection,y=this.commonProps,O=o||this.getElementId("input"),D=E(E(E({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox"},p&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(c==null?void 0:c.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(g,S({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:d,type:"text",value:u},D)):f.createElement(pr,S({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:d,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,d=a.SingleValue,p=a.Placeholder,m=this.commonProps,b=this.props,g=b.controlShouldRenderValue,v=b.isDisabled,h=b.isMulti,c=b.inputValue,y=b.placeholder,O=this.state,D=O.selectValue,M=O.focusedValue,w=O.isFocused;if(!this.hasValue()||!g)return c?null:f.createElement(p,S({},m,{key:"placeholder",isDisabled:v,isFocused:w,innerProps:{id:this.getElementId("placeholder")}}),y);if(h)return D.map(function(A,P){var H=A===M,z="".concat(t.getOptionLabel(A),"-").concat(t.getOptionValue(A));return f.createElement(s,S({},m,{components:{Container:o,Label:u,Remove:l},isFocused:H,isDisabled:v,key:z,index:P,removeProps:{onClick:function(){return t.removeValue(A)},onTouchEnd:function(){return t.removeValue(A)},onMouseDown:function(U){U.preventDefault()}},data:A}),t.formatOptionLabel(A,"value"))});if(c)return null;var I=D[0];return f.createElement(d,S({},m,{data:I,isDisabled:v}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,d=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,S({},s,{innerProps:p,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,d=this.state.isFocused;if(!a||!l)return null;var p={"aria-hidden":"true"};return f.createElement(a,S({},s,{innerProps:p,isDisabled:u,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,S({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,S({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,d=a.MenuPortal,p=a.LoadingMessage,m=a.NoOptionsMessage,b=a.Option,g=this.commonProps,v=this.state.focusedOption,h=this.props,c=h.captureMenuScroll,y=h.inputValue,O=h.isLoading,D=h.loadingMessage,M=h.minMenuHeight,w=h.maxMenuHeight,I=h.menuIsOpen,A=h.menuPlacement,P=h.menuPosition,H=h.menuPortalTarget,z=h.menuShouldBlockScroll,k=h.menuShouldScrollIntoView,U=h.noOptionsMessage,R=h.onMenuScrollToTop,L=h.onMenuScrollToBottom;if(!I)return null;var j=function(B,Q){var J=B.type,W=B.data,G=B.isDisabled,te=B.isSelected,ie=B.label,jt=B.value,Te=v===W,ke=G?void 0:function(){return t.onOptionHover(W)},$t=G?void 0:function(){return t.selectOption(W)},Be="".concat(t.getElementId("option"),"-").concat(Q),zt={id:Be,onClick:$t,onMouseMove:ke,onMouseOver:ke,tabIndex:-1};return f.createElement(b,S({},g,{innerProps:zt,data:W,isDisabled:G,isSelected:te,key:Be,label:ie,type:J,value:jt,isFocused:Te,innerRef:Te?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(B.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var B=T.data,Q=T.options,J=T.index,W="".concat(t.getElementId("group"),"-").concat(J),G="".concat(W,"-heading");return f.createElement(s,S({},g,{key:W,data:B,options:Q,Heading:o,headingProps:{id:G,data:T.data},label:t.formatGroupLabel(T.data)}),T.options.map(function(te){return j(te,"".concat(J,"-").concat(te.index))}))}else if(T.type==="option")return j(T,"".concat(T.index))});else if(O){var _=D({inputValue:y});if(_===null)return null;N=f.createElement(p,g,_)}else{var K=U({inputValue:y});if(K===null)return null;N=f.createElement(m,g,K)}var X={minMenuHeight:M,maxMenuHeight:w,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:k},Z=f.createElement(_n,S({},g,X),function(T){var B=T.ref,Q=T.placerProps,J=Q.placement,W=Q.maxHeight;return f.createElement(u,S({},g,X,{innerRef:B,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove,id:t.getElementId("listbox")},isLoading:O,placement:J}),f.createElement(br,{captureEnabled:c,onTopArrive:R,onBottomArrive:L,lockEnabled:z},function(G){return f.createElement(l,S({},g,{innerRef:function(ie){t.getMenuListRef(ie),G(ie)},isLoading:O,maxHeight:W,focusedOption:v}),N)}))});return H||P==="fixed"?f.createElement(d,S({},g,{appendTo:H,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),Z):Z}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,d=a.required,p=this.state.selectValue;if(d&&!this.hasValue()&&!o)return f.createElement(Cr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var m=p.map(function(v){return t.getOptionValue(v)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:m})}else{var b=p.length>0?p.map(function(v,h){return f.createElement("input",{key:"i-".concat(h),name:l,type:"hidden",value:t.getOptionValue(v)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,b)}else{var g=p[0]?this.getOptionValue(p[0]):"";return f.createElement("input",{name:l,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,d=a.selectValue,p=this.getFocusableOptions();return f.createElement(ar,S({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:d,focusableOptions:p}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,o=t.SelectContainer,u=t.ValueContainer,l=this.props,d=l.className,p=l.id,m=l.isDisabled,b=l.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return f.createElement(o,S({},v,{className:d,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),f.createElement(a,S({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:b}),f.createElement(u,S({},v,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,S({},v,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,d=a.isFocused,p=a.prevWasFocused,m=t.options,b=t.value,g=t.menuIsOpen,v=t.inputValue,h=t.isMulti,c=Ne(b),y={};if(s&&(b!==s.value||m!==s.options||g!==s.menuIsOpen||v!==s.inputValue)){var O=g?Rr(t,c):[],D=o?Lr(a,c):null,M=Tr(a,O);y={selectValue:c,focusedOption:M,focusedValue:D,clearFocusValueOnUpdate:!1}}var w=u!=null&&t!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},I=l,A=d&&p;return d&&!A&&(I={value:se(h,c,c[0]||null),options:c,action:"initial-input-focus"},A=!p),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),E(E(E({},y),w),{},{prevProps:t,ariaSelection:I,prevWasFocused:A})}}]),i}(f.Component);Bt.defaultProps=Pr;var Br=f.forwardRef(function(n,e){var i=ln(n);return f.createElement(Bt,S({ref:e},i))}),Hr=Br;const jr=F.div`
  @media screen and (min-width: 320px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`,$r=F.div`
  @media screen and (min-width: 320px) {
    position: relative;
    margin-bottom: 16px;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,zr=F.input`
  @media screen and (min-width: 320px) {
    width: 100%;
    &::-webkit-inner-spin-button {
      appearance: none;
    }
    text-align: left;
    padding: 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: rgba(0, 0, 0, 0.5);
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
`,Ur=F.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`,Nr=F.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,_r=F.div`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ot=F.div`
  flex: 1;
  /*padding: 14px;*/
  background: rgba(0, 0, 0, 0.5);
`,at=F(Hr)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
`;F.div``;const{QUERY:le,RECOMMENDED:ce,CATEGORY:Ht}=Gt,Wr={[le]:"",[Ht]:"",[ce]:""};function Gr({onProductsChange:n}){const[e,i]=f.useState(Wr),[r,t]=f.useState(""),[a,s]=f.useState([]),o=Wt();f.useEffect(()=>{if(o.isSuccess){const[c]=o.data;s(c.productsCategories)}},[o]),f.useEffect(()=>{n(e)},[e]);const u=()=>{t(""),i(c=>({...c,[le]:""}))},l=["All","Recommended","Not recommended"],[d,p]=f.useState(null),[m,b]=f.useState(null),g=c=>{i(y=>({...y,[le]:c.target.value.trim()})),t(c.target.value)},v=c=>{p(c),i(y=>({...y,[Ht]:c.label}))},h=c=>{switch(b(c),c.label){case"Recommended":i(y=>({...y,[ce]:[!0]}));break;case"Not recommended":i(y=>({...y,[ce]:[!1]}));break;default:i(y=>({...y,[ce]:null}))}};return x.jsx(x.Fragment,{children:x.jsxs(jr,{children:[x.jsxs($r,{children:[x.jsx(zr,{type:"text",value:e[le],onChange:g}),x.jsx(Ur,{width:"18",height:"18",children:x.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#search"})}),r.trim()&&x.jsx(Nr,{onClick:u,children:x.jsx("svg",{width:"18",height:"18",children:x.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#x-clean"})})})]}),x.jsxs(_r,{children:[x.jsx(ot,{children:x.jsx(at,{styles:{option:c=>({...c,background:"#1C1C1C"}),control:c=>({...c,width:"100%",background:"#040404",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:c=>({...c,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:c=>({...c,background:"#040404",border:"none"}),menuList:c=>({...c,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:c=>({...c,display:"none"}),placeholder:c=>({...c,color:"#efede8"}),singleValue:c=>({...c,color:"#efede8",justifyContent:"center"}),container:c=>({...c,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:c=>({...c,fontSize:"14px"}),valueContainer:c=>({...c,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:v,options:a.map(c=>({label:c})),placeholder:"Categories"})}),x.jsx(ot,{children:x.jsx(at,{styles:{option:c=>({...c,background:"#1C1C1C"}),control:c=>({...c,width:"100%",background:"#040404",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:c=>({...c,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:c=>({...c,background:"#040404",border:"none"}),menuList:c=>({...c,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:c=>({...c,display:"none"}),placeholder:c=>({...c,color:"#efede8"}),singleValue:c=>({...c,color:"#efede8"}),container:c=>({...c,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:c=>({...c,fontSize:"14px"}),valueContainer:c=>({...c,"@media (min-width: 768px)":{width:"195px"}})},value:m,onChange:h,options:l.map(c=>({label:c})),placeholder:"All"})})]})]})})}const Yr=F.div`
  margin: 48px 24px;

  @media screen and (min-width: 768px) {
    margin: 48px 32px;
  }
`,qr=F.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,Kr=F.input`
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
`,Xr=F.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,Qr=F.input`
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
`,Jr=F.span`
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
`,Zr=F.div`
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,eo=F.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,to=F.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,no=F.div``,io=F.button`
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
`,ro=F.button`
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
`;function oo(n){const{onClose:e,addProdSuccess:i,product:r}=n,[t,a]=f.useState(100),s=t*r.calories,o=()=>{e(),i(s)};return x.jsxs(Yr,{children:[x.jsxs(qr,{children:[x.jsx(Kr,{type:"text",value:r.title,readOnly:!0}),x.jsxs(Xr,{children:[x.jsx(Qr,{type:"number",value:t,onChange:u=>a(u.target.value)}),x.jsx(Jr,{children:"grams"})]})]}),x.jsxs(Zr,{children:[x.jsx(eo,{children:"Calories:"}),x.jsx(to,{children:s})]}),x.jsxs(no,{children:[x.jsx(io,{onClick:o,children:"Add to diary"}),x.jsx(ro,{onClick:e,children:"Cancel"})]})]})}const ao=F.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 22px 111px;
  }
`,uo=F.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,so=F.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,lo=F.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,co=F.p`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,po=F.span`
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,fo=F.button`
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
`,ho=F.a`
  justify-content: center;
  display: flex;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,mo=F.p`
  margin-right: 8px;
`;function vo(n){const{onClose:e,totalCalories:i}=n;return x.jsxs(ao,{children:[x.jsx(uo,{}),x.jsx(so,{children:"Well Done"}),x.jsxs(lo,{children:[x.jsx(co,{children:"Calories:"}),x.jsx(po,{children:i})]}),x.jsx(fo,{onClick:e,children:"Next product"}),x.jsxs(ho,{href:"Diary",children:[x.jsx(mo,{children:"To the diary"}),x.jsx("svg",{width:"16",height:"16",children:x.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const go=F.li`
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
`,bo=F.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,xo=F.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`,Eo=F.div`
  display: flex;
  align-items: center;
`,Co=F.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${n=>n.recommended?"#419B09":"#E9101D"};
`,So=F.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,Fo=F.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,yo=F.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,wo=F.svg`
  width: 16px;
  height: 16px;
`,Do=F.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,Oo=F.svg`
  width: 24px;
  height: 24px;
`,Ao=F.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Io=F.div`
  display: flex;
  gap: 16px;
`,we=F.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${n=>n.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,De=F.span`
  color: #efede8;
  padding-left: 8px;

  @media (min-width: 768px) {
    padding-left: 4px;
  }
`;function Mo({props:n}){const{weight:i,calories:r,category:t,title:a}=n,[s,o]=f.useState(!1),[u,l]=f.useState(!1),[d,p]=f.useState(null),m=()=>{o(!0)},b=()=>{o(!1),l(!1)},g=v=>{l(!0),p(v)};return x.jsxs(x.Fragment,{children:[x.jsxs(go,{children:[x.jsxs(bo,{children:[x.jsx(xo,{children:"DIET"}),x.jsxs(Eo,{children:[x.jsx(Co,{recommended:!0}),x.jsx(So,{children:"Recommended"}),x.jsxs(Fo,{onClick:m,children:[x.jsx(yo,{children:"Add"}),x.jsx(wo,{children:x.jsx("use",{href:`${He}#arrow-add-prod-orange`})})]})]})]}),x.jsxs(Do,{children:[x.jsx(Oo,{children:x.jsx("use",{href:`${He}#run-man`})}),x.jsx(Ao,{children:a})]}),x.jsxs(Io,{children:[x.jsxs(we,{children:["Calories:",x.jsx(De,{children:r})]}),x.jsxs(we,{category:!0,children:["Category:",x.jsx(De,{children:t})]}),x.jsxs(we,{children:["Weight:",x.jsx(De,{children:i})]})]})]}),s&&x.jsx(je,{onClose:b,children:x.jsx(oo,{onClose:b,addProdSuccess:g,product:n})}),u&&x.jsx(je,{onClose:b,children:x.jsx(vo,{onClose:b,totalCalories:d})})]})}const Vo=F.div`
  @media (min-width: 768px) {
    height: 660px;
  }
  @media (min-width: 1440px) {
    height: 487px;
  }
`,Po=F.ul`
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
`;function Ro({filter:n}){const[e,i]=f.useState([]),[r]=Yt();return f.useEffect(()=>{(async()=>{try{const a=await r(n).unwrap();i(a)}catch(a){console.error("Error fetching data:",a.message)}})()},[n]),x.jsx(Vo,{children:x.jsx(Po,{children:e.map(({_id:t,...a})=>x.jsx(Mo,{props:a},t))})})}function Bo(){const[n,e]=f.useState([]);return x.jsxs(x.Fragment,{children:[x.jsx(qt,{text:"Products"}),x.jsx(Gr,{onProductsChange:e}),x.jsx(Ro,{filter:n})]})}export{Bo as Products};
