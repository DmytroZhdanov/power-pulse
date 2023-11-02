import{_ as Qt,V as lt,W as Zt,X as Jt,r as p,Y as w,Z as en,$ as ae,a0 as F,a1 as D,a2 as tn,a3 as ct,n as S,P,a4 as nn,j as h,f as re,a5 as rn,I as on,a6 as an,L as un,R as sn,B as Ce,l as ln,a7 as cn,N as dn,E as ze}from"./index-dee65449.js";import{T as pn}from"./TitlePage-6ad41339.js";import{u as fn}from"./index-755d6c39.js";import{f as dt,C as hn}from"./Calendar-86fb2004.js";import"./tiny-warning.esm-c932d744.js";function mn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}const vn="/power-pulse/assets/bg_eating-526af03d.jpg",gn="/power-pulse/assets/bg_eating@2x-53f5e280.jpg",bn="/power-pulse/assets/bg_eating@3x-1df10d6d.jpg";function Me(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function pt(e,t){if(e){if(typeof e=="string")return Me(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Me(e,t)}}function xn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qt(e,t)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},fe(e)}function En(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Cn(e,t){if(t&&(lt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mn(e)}function Sn(e){var t=En();return function(){var r=fe(e),n;if(t){var a=fe(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Cn(this,n)}}function yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ue(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Zt(r.key),r)}}function wn(e,t,i){return t&&Ue(e.prototype,t),i&&Ue(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fn(e){if(Array.isArray(e))return e}function Dn(e,t){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var r,n,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(e)).next,t===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(c){l=!0,n=c}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw n}}return o}}function On(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){return Fn(e)||Dn(e,t)||pt(e,t)||On()}function X(e,t){if(e==null)return{};var i=Jt(e,t),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var An=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function In(e){var t=e.defaultInputValue,i=t===void 0?"":t,r=e.defaultMenuIsOpen,n=r===void 0?!1:r,a=e.defaultValue,s=a===void 0?null:a,o=e.inputValue,u=e.menuIsOpen,l=e.onChange,c=e.onInputChange,d=e.onMenuClose,g=e.onMenuOpen,E=e.value,x=X(e,An),b=p.useState(o!==void 0?o:i),v=Y(b,2),m=v[0],f=v[1],C=p.useState(u!==void 0?u:n),O=Y(C,2),M=O[0],y=O[1],A=p.useState(E!==void 0?E:s),I=Y(A,2),R=I[0],j=I[1],U=p.useCallback(function(W,K){typeof l=="function"&&l(W,K),j(W)},[l]),$=p.useCallback(function(W,K){var Q;typeof c=="function"&&(Q=c(W,K)),f(Q!==void 0?Q:W)},[c]),_=p.useCallback(function(){typeof g=="function"&&g(),y(!0)},[g]),k=p.useCallback(function(){typeof d=="function"&&d(),y(!1)},[d]),L=o!==void 0?o:m,H=u!==void 0?u:M,N=E!==void 0?E:R;return w(w({},x),{},{inputValue:L,menuIsOpen:H,onChange:U,onInputChange:$,onMenuClose:k,onMenuOpen:_,value:N})}function Mn(e){if(Array.isArray(e))return Me(e)}function Pn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){return Mn(e)||Pn(e)||pt(e)||Vn()}function Rn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const kn=Math.min,Ln=Math.max,he=Math.round,ue=Math.floor,me=e=>({x:e,y:e});function Tn(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ht(e){return vt(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function mt(e){var t;return(t=(vt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vt(e){return e instanceof Node||e instanceof z(e).Node}function Pe(e){return e instanceof Element||e instanceof z(e).Element}function ke(e){return e instanceof HTMLElement||e instanceof z(e).HTMLElement}function _e(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function gt(e){const{overflow:t,overflowX:i,overflowY:r,display:n}=Le(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(n)}function $n(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bn(e){return["html","body","#document"].includes(ht(e))}function Le(e){return z(e).getComputedStyle(e)}function jn(e){if(ht(e)==="html")return e;const t=e.assignedSlot||e.parentNode||_e(e)&&e.host||mt(e);return _e(t)?t.host:t}function bt(e){const t=jn(e);return Bn(t)?e.ownerDocument?e.ownerDocument.body:e.body:ke(t)&&gt(t)?t:bt(t)}function ve(e,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const n=bt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),s=z(n);return a?t.concat(s,s.visualViewport||[],gt(n)?n:[],s.frameElement&&i?ve(s.frameElement):[]):t.concat(n,ve(n,[],i))}function Hn(e){const t=Le(e);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=ke(e),a=n?e.offsetWidth:i,s=n?e.offsetHeight:r,o=he(i)!==a||he(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function Te(e){return Pe(e)?e:e.contextElement}function Se(e){const t=Te(e);if(!ke(t))return me(1);const i=t.getBoundingClientRect(),{width:r,height:n,$:a}=Hn(t);let s=(a?he(i.width):i.width)/r,o=(a?he(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const zn=me(0);function Un(e){const t=z(e);return!$n()||!t.visualViewport?zn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function _n(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==z(e)?!1:t}function Ne(e,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const n=e.getBoundingClientRect(),a=Te(e);let s=me(1);t&&(r?Pe(r)&&(s=Se(r)):s=Se(e));const o=_n(a,i,r)?Un(a):me(0);let u=(n.left+o.x)/s.x,l=(n.top+o.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const g=z(a),E=r&&Pe(r)?z(r):r;let x=g.frameElement;for(;x&&r&&E!==g;){const b=Se(x),v=x.getBoundingClientRect(),m=Le(x),f=v.left+(x.clientLeft+parseFloat(m.paddingLeft))*b.x,C=v.top+(x.clientTop+parseFloat(m.paddingTop))*b.y;u*=b.x,l*=b.y,c*=b.x,d*=b.y,u+=f,l+=C,x=z(x).frameElement}}return Tn({width:c,height:d,x:u,y:l})}function Nn(e,t){let i=null,r;const n=mt(e);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:g}=e.getBoundingClientRect();if(o||t(),!d||!g)return;const E=ue(c),x=ue(n.clientWidth-(l+d)),b=ue(n.clientHeight-(c+g)),v=ue(l),f={rootMargin:-E+"px "+-x+"px "+-b+"px "+-v+"px",threshold:Ln(0,kn(1,u))||1};let C=!0;function O(M){const y=M[0].intersectionRatio;if(y!==u){if(!C)return s();y?s(!1,y):r=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{i=new IntersectionObserver(O,{...f,root:n.ownerDocument})}catch{i=new IntersectionObserver(O,f)}i.observe(e)}return s(!0),a}function Wn(e,t,i,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=Te(e),c=n||a?[...l?ve(l):[],...ve(t)]:[];c.forEach(m=>{n&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&o?Nn(l,i):null;let g=-1,E=null;s&&(E=new ResizeObserver(m=>{let[f]=m;f&&f.target===l&&E&&(E.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{E&&E.observe(t)})),i()}),l&&!u&&E.observe(l),E.observe(t));let x,b=u?Ne(e):null;u&&v();function v(){const m=Ne(e);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&i(),b=m,x=requestAnimationFrame(v)}return i(),()=>{c.forEach(m=>{n&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),E&&E.disconnect(),E=null,u&&cancelAnimationFrame(x)}}var Ve=p.useLayoutEffect,qn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ge=function(){};function Gn(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function Yn(e,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var a=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(Gn(e,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var We=function(t){return ii(t)?t.filter(Boolean):lt(t)==="object"&&t!==null?[t]:[]},xt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,qn);return w({},i)},V=function(t,i,r){var n=t.cx,a=t.getStyles,s=t.getClassNames,o=t.className;return{css:a(i,t),className:n(r??{},s(i,t),o)}};function Ee(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Xn(e){return Ee(e)?window.innerHeight:e.clientHeight}function Et(e){return Ee(e)?window.pageYOffset:e.scrollTop}function be(e,t){if(Ee(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Kn(e){var t=getComputedStyle(e),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var n=e;n=n.parentElement;)if(t=getComputedStyle(n),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return n;return document.documentElement}function Qn(e,t,i,r){return i*((e=e/r-1)*e*e+1)+t}function se(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ge,n=Et(e),a=t-n,s=10,o=0;function u(){o+=s;var l=Qn(o,n,a,i);be(e,l),o<i?window.requestAnimationFrame(u):r(e)}u()}function qe(e,t){var i=e.getBoundingClientRect(),r=t.getBoundingClientRect(),n=t.offsetHeight/3;r.bottom+n>i.bottom?be(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+n,e.scrollHeight)):r.top-n<i.top&&be(e,Math.max(t.offsetTop-n,0))}function Zn(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Jn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Ct=!1,ei={get passive(){return Ct=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",ge,ei),le.removeEventListener("p",ge,!1));var ti=Ct;function ni(e){return e!=null}function ii(e){return Array.isArray(e)}function ce(e,t,i){return e?t:i}var ri=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var a=Object.entries(t).filter(function(s){var o=Y(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},oi=["children","innerProps"],ai=["children","innerProps"];function ui(e){var t=e.maxHeight,i=e.menuEl,r=e.minHeight,n=e.placement,a=e.shouldScroll,s=e.isFixedPosition,o=e.controlHeight,u=Kn(i),l={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,g=i.getBoundingClientRect(),E=g.bottom,x=g.height,b=g.top,v=i.offsetParent.getBoundingClientRect(),m=v.top,f=s?window.innerHeight:Xn(u),C=Et(u),O=parseInt(getComputedStyle(i).marginBottom,10),M=parseInt(getComputedStyle(i).marginTop,10),y=m-M,A=f-b,I=y+C,R=d-C-b,j=E-f+C+O,U=C+b-M,$=160;switch(n){case"auto":case"bottom":if(A>=x)return{placement:"bottom",maxHeight:t};if(R>=x&&!s)return a&&se(u,j,$),{placement:"bottom",maxHeight:t};if(!s&&R>=r||s&&A>=r){a&&se(u,j,$);var _=s?A-O:R-O;return{placement:"bottom",maxHeight:_}}if(n==="auto"||s){var k=t,L=s?y:I;return L>=r&&(k=Math.min(L-O-o,t)),{placement:"top",maxHeight:k}}if(n==="bottom")return a&&be(u,j),{placement:"bottom",maxHeight:t};break;case"top":if(y>=x)return{placement:"top",maxHeight:t};if(I>=x&&!s)return a&&se(u,U,$),{placement:"top",maxHeight:t};if(!s&&I>=r||s&&y>=r){var H=t;return(!s&&I>=r||s&&y>=r)&&(H=s?y-M:I-M),a&&se(u,U,$),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function si(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var St=function(t){return t==="auto"?"bottom":t},li=function(t,i){var r,n=t.placement,a=t.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return w((r={label:"menu"},ae(r,si(n),"100%"),ae(r,"position","absolute"),ae(r,"width","100%"),ae(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},yt=p.createContext(null),ci=function(t){var i=t.children,r=t.minMenuHeight,n=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,o=t.menuShouldScrollIntoView,u=t.theme,l=p.useContext(yt)||{},c=l.setPortalPlacement,d=p.useRef(null),g=p.useState(n),E=Y(g,2),x=E[0],b=E[1],v=p.useState(null),m=Y(v,2),f=m[0],C=m[1],O=u.spacing.controlHeight;return Ve(function(){var M=d.current;if(M){var y=s==="fixed",A=o&&!y,I=ui({maxHeight:n,menuEl:M,minHeight:r,placement:a,shouldScroll:A,isFixedPosition:y,controlHeight:O});b(I.maxHeight),C(I.placement),c==null||c(I.placement)}},[n,a,s,o,r,c,O]),i({ref:d,placerProps:w(w({},t),{},{placement:f||St(a),maxHeight:x})})},di=function(t){var i=t.children,r=t.innerRef,n=t.innerProps;return F("div",D({},V(t,"menu",{menu:!0}),{ref:r},n),i)},pi=di,fi=function(t,i){var r=t.maxHeight,n=t.theme.spacing.baseUnit;return w({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:n,paddingTop:n})},hi=function(t){var i=t.children,r=t.innerProps,n=t.innerRef,a=t.isMulti;return F("div",D({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},r),i)},wt=function(t,i){var r=t.theme,n=r.spacing.baseUnit,a=r.colors;return w({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},mi=wt,vi=wt,gi=function(t){var i=t.children,r=i===void 0?"No options":i,n=t.innerProps,a=X(t,oi);return F("div",D({},V(w(w({},a),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},bi=function(t){var i=t.children,r=i===void 0?"Loading...":i,n=t.innerProps,a=X(t,ai);return F("div",D({},V(w(w({},a),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},xi=function(t){var i=t.rect,r=t.offset,n=t.position;return{left:i.left,position:n,top:r,width:i.width,zIndex:1}},Ei=function(t){var i=t.appendTo,r=t.children,n=t.controlElement,a=t.innerProps,s=t.menuPlacement,o=t.menuPosition,u=p.useRef(null),l=p.useRef(null),c=p.useState(St(s)),d=Y(c,2),g=d[0],E=d[1],x=p.useMemo(function(){return{setPortalPlacement:E}},[]),b=p.useState(null),v=Y(b,2),m=v[0],f=v[1],C=p.useCallback(function(){if(n){var A=Zn(n),I=o==="fixed"?0:window.pageYOffset,R=A[g]+I;(R!==(m==null?void 0:m.offset)||A.left!==(m==null?void 0:m.rect.left)||A.width!==(m==null?void 0:m.rect.width))&&f({offset:R,rect:A})}},[n,o,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Ve(function(){C()},[C]);var O=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&u.current&&(l.current=Wn(n,u.current,C,{elementResize:"ResizeObserver"in window}))},[n,C]);Ve(function(){O()},[O]);var M=p.useCallback(function(A){u.current=A,O()},[O]);if(!i&&o!=="fixed"||!m)return null;var y=F("div",D({ref:M},V(w(w({},t),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),r);return F(yt.Provider,{value:x},i?tn.createPortal(y,i):y)},Ci=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Si=function(t){var i=t.children,r=t.innerProps,n=t.isDisabled,a=t.isRtl;return F("div",D({},V(t,"container",{"--is-disabled":n,"--is-rtl":a}),r),i)},yi=function(t,i){var r=t.theme.spacing,n=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},wi=function(t){var i=t.children,r=t.innerProps,n=t.isMulti,a=t.hasValue;return F("div",D({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),r),i)},Fi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Di=function(t){var i=t.children,r=t.innerProps;return F("div",D({},V(t,"indicatorsContainer",{indicators:!0}),r),i)},Ye,Oi=["size"],Ai=["innerProps","isRtl","size"],Ii={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(t){var i=t.size,r=X(t,Oi);return F("svg",D({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ii},r))},$e=function(t){return F(Ft,D({size:20},t),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Dt=function(t){return F(Ft,D({size:20},t),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ot=function(t,i){var r=t.isFocused,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},Mi=Ot,Pi=function(t){var i=t.children,r=t.innerProps;return F("div",D({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||F(Dt,null))},Vi=Ot,Ri=function(t){var i=t.children,r=t.innerProps;return F("div",D({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||F($e,null))},ki=function(t,i){var r=t.isDisabled,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Li=function(t){var i=t.innerProps;return F("span",D({},i,V(t,"indicatorSeparator",{"indicator-separator":!0})))},Ti=en(Ye||(Ye=Rn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),$i=function(t,i){var r=t.isFocused,n=t.size,a=t.theme,s=a.colors,o=a.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},ye=function(t){var i=t.delay,r=t.offset;return F("span",{css:ct({animation:"".concat(Ti," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Bi=function(t){var i=t.innerProps,r=t.isRtl,n=t.size,a=n===void 0?4:n,s=X(t,Ai);return F("div",D({},V(w(w({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),F(ye,{delay:0,offset:r}),F(ye,{delay:160,offset:!0}),F(ye,{delay:320,offset:!r}))},ji=function(t,i){var r=t.isDisabled,n=t.isFocused,a=t.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:n?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},Hi=function(t){var i=t.children,r=t.isDisabled,n=t.isFocused,a=t.innerRef,s=t.innerProps,o=t.menuIsOpen;return F("div",D({ref:a},V(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},zi=Hi,Ui=["data"],_i=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Ni=function(t){var i=t.children,r=t.cx,n=t.getStyles,a=t.getClassNames,s=t.Heading,o=t.headingProps,u=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return F("div",D({},V(t,"group",{group:!0}),u),F(s,D({},o,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:r}),l),F("div",null,i))},Wi=function(t,i){var r=t.theme,n=r.colors,a=r.spacing;return w({label:"group",cursor:"default",display:"block"},i?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},qi=function(t){var i=xt(t);i.data;var r=X(i,Ui);return F("div",D({},V(t,"groupHeading",{"group-heading":!0}),r))},Gi=Ni,Yi=["innerRef","isDisabled","isHidden","inputClassName"],Xi=function(t,i){var r=t.isDisabled,n=t.value,a=t.theme,s=a.spacing,o=a.colors;return w(w({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},Ki),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},At={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ki={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},At)},Qi=function(t){return w({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},At)},Zi=function(t){var i=t.cx,r=t.value,n=xt(t),a=n.innerRef,s=n.isDisabled,o=n.isHidden,u=n.inputClassName,l=X(n,Yi);return F("div",D({},V(t,"input",{"input-container":!0}),{"data-value":r||""}),F("input",D({className:i({input:!0},u),ref:a,style:Qi(o),disabled:s},l)))},Ji=Zi,er=function(t,i){var r=t.theme,n=r.spacing,a=r.borderRadius,s=r.colors;return w({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},tr=function(t,i){var r=t.theme,n=r.borderRadius,a=r.colors,s=t.cropWithEllipsis;return w({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},nr=function(t,i){var r=t.theme,n=r.spacing,a=r.borderRadius,s=r.colors,o=t.isFocused;return w({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},It=function(t){var i=t.children,r=t.innerProps;return F("div",r,i)},ir=It,rr=It;function or(e){var t=e.children,i=e.innerProps;return F("div",D({role:"button"},i),t||F($e,{size:14}))}var ar=function(t){var i=t.children,r=t.components,n=t.data,a=t.innerProps,s=t.isDisabled,o=t.removeProps,u=t.selectProps,l=r.Container,c=r.Label,d=r.Remove;return F(l,{data:n,innerProps:w(w({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},F(c,{data:n,innerProps:w({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),F(d,{data:n,innerProps:w(w({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},ur=ar,sr=function(t,i){var r=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.theme,o=s.spacing,u=s.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:n?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},lr=function(t){var i=t.children,r=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.innerRef,o=t.innerProps;return F("div",D({},V(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},cr=lr,dr=function(t,i){var r=t.theme,n=r.spacing,a=r.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},pr=function(t){var i=t.children,r=t.innerProps;return F("div",D({},V(t,"placeholder",{placeholder:!0}),r),i)},fr=pr,hr=function(t,i){var r=t.isDisabled,n=t.theme,a=n.spacing,s=n.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},mr=function(t){var i=t.children,r=t.isDisabled,n=t.innerProps;return F("div",D({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),i)},vr=mr,gr={ClearIndicator:Ri,Control:zi,DropdownIndicator:Pi,DownChevron:Dt,CrossIcon:$e,Group:Gi,GroupHeading:qi,IndicatorsContainer:Di,IndicatorSeparator:Li,Input:Ji,LoadingIndicator:Bi,Menu:pi,MenuList:hi,MenuPortal:Ei,LoadingMessage:bi,NoOptionsMessage:gi,MultiValue:ur,MultiValueContainer:ir,MultiValueLabel:rr,MultiValueRemove:or,Option:cr,Placeholder:fr,SelectContainer:Si,SingleValue:vr,ValueContainer:wi},br=function(t){return w(w({},gr),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function xr(e,t){return!!(e===t||Xe(e)&&Xe(t))}function Er(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!xr(e[i],t[i]))return!1;return!0}function Cr(e,t){t===void 0&&(t=Er);var i=null;function r(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(i&&i.lastThis===this&&t(n,i.lastArgs))return i.lastResult;var s=e.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return r.clear=function(){i=null},r}var Sr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},yr=function(t){return F("span",D({css:Sr},t))},Ke=yr,wr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,n=t.isDisabled,a=t.tabSelectsValue,s=t.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(n?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,n=r===void 0?"":r,a=t.labels,s=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,n=t.options,a=t.label,s=a===void 0?"":a,o=t.selectValue,u=t.isDisabled,l=t.isSelected,c=function(x,b){return x&&x.length?"".concat(x.indexOf(b)+1," of ").concat(x.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,r),".");if(i==="menu"){var d=u?" disabled":"",g="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(g,", ").concat(c(n,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Fr=function(t){var i=t.ariaSelection,r=t.focusedOption,n=t.focusedValue,a=t.focusableOptions,s=t.isFocused,o=t.selectValue,u=t.selectProps,l=t.id,c=u.ariaLiveMessages,d=u.getOptionLabel,g=u.inputValue,E=u.isMulti,x=u.isOptionDisabled,b=u.isSearchable,v=u.menuIsOpen,m=u.options,f=u.screenReaderStatus,C=u.tabSelectsValue,O=u["aria-label"],M=u["aria-live"],y=p.useMemo(function(){return w(w({},wr),c||{})},[c]),A=p.useMemo(function(){var k="";if(i&&y.onChange){var L=i.option,H=i.options,N=i.removedValue,W=i.removedValues,K=i.value,Q=function(G){return Array.isArray(G)?null:G},ee=N||L||Q(K),T=ee?d(ee):"",B=H||W||void 0,Z=B?B.map(d):[],J=w({isDisabled:ee&&x(ee,o),label:T,labels:Z},i);k=y.onChange(J)}return k},[i,y,x,o,d]),I=p.useMemo(function(){var k="",L=r||n,H=!!(r&&o&&o.includes(r));if(L&&y.onFocus){var N={focused:L,label:d(L),isDisabled:x(L,o),isSelected:H,options:a,context:L===r?"menu":"value",selectValue:o};k=y.onFocus(N)}return k},[r,n,d,x,y,a,o]),R=p.useMemo(function(){var k="";if(v&&m.length&&y.onFilter){var L=f({count:a.length});k=y.onFilter({inputValue:g,resultsMessage:L})}return k},[a,g,v,y,m,f]),j=p.useMemo(function(){var k="";if(y.guidance){var L=n?"value":v?"menu":"input";k=y.guidance({"aria-label":O,context:L,isDisabled:r&&x(r,o),isMulti:E,isSearchable:b,tabSelectsValue:C})}return k},[O,r,n,E,x,b,v,y,o,C]),U="".concat(I," ").concat(R," ").concat(j),$=F(p.Fragment,null,F("span",{id:"aria-selection"},A),F("span",{id:"aria-context"},U)),_=(i==null?void 0:i.action)==="initial-input-focus";return F(p.Fragment,null,F(Ke,{id:l},_&&$),F(Ke,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!_&&$))},Dr=Fr,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Or=new RegExp("["+Re.map(function(e){return e.letters}).join("")+"]","g"),Mt={};for(var we=0;we<Re.length;we++)for(var Fe=Re[we],De=0;De<Fe.letters.length;De++)Mt[Fe.letters[De]]=Fe.base;var Pt=function(t){return t.replace(Or,function(i){return Mt[i]})},Ar=Cr(Pt),Qe=function(t){return t.replace(/^\s+|\s+$/g,"")},Ir=function(t){return"".concat(t.label," ").concat(t.value)},Mr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var n=w({ignoreCase:!0,ignoreAccents:!0,stringify:Ir,trim:!0,matchFrom:"any"},t),a=n.ignoreCase,s=n.ignoreAccents,o=n.stringify,u=n.trim,l=n.matchFrom,c=u?Qe(r):r,d=u?Qe(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Ar(c),d=Pt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Pr=["innerRef"];function Vr(e){var t=e.innerRef,i=X(e,Pr),r=ri(i,"onExited","in","enter","exit","appear");return F("input",D({ref:t},r,{css:ct({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Rr=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function kr(e){var t=e.isEnabled,i=e.onBottomArrive,r=e.onBottomLeave,n=e.onTopArrive,a=e.onTopLeave,s=p.useRef(!1),o=p.useRef(!1),u=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(v,m){if(l.current!==null){var f=l.current,C=f.scrollTop,O=f.scrollHeight,M=f.clientHeight,y=l.current,A=m>0,I=O-M-C,R=!1;I>m&&s.current&&(r&&r(v),s.current=!1),A&&o.current&&(a&&a(v),o.current=!1),A&&m>I?(i&&!s.current&&i(v),y.scrollTop=O,R=!0,s.current=!0):!A&&-m>C&&(n&&!o.current&&n(v),y.scrollTop=0,R=!0,o.current=!0),R&&Rr(v)}},[i,r,n,a]),d=p.useCallback(function(v){c(v,v.deltaY)},[c]),g=p.useCallback(function(v){u.current=v.changedTouches[0].clientY},[]),E=p.useCallback(function(v){var m=u.current-v.changedTouches[0].clientY;c(v,m)},[c]),x=p.useCallback(function(v){if(v){var m=ti?{passive:!1}:!1;v.addEventListener("wheel",d,m),v.addEventListener("touchstart",g,m),v.addEventListener("touchmove",E,m)}},[E,g,d]),b=p.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",g,!1),v.removeEventListener("touchmove",E,!1))},[E,g,d]);return p.useEffect(function(){if(t){var v=l.current;return x(v),function(){b(v)}}},[t,x,b]),function(v){l.current=v}}var Ze=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(e){e.preventDefault()}function tt(e){e.stopPropagation()}function nt(){var e=this.scrollTop,t=this.scrollHeight,i=e+this.offsetHeight;e===0?this.scrollTop=1:i===t&&(this.scrollTop=e-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var rt=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function Lr(e){var t=e.isEnabled,i=e.accountForScrollbars,r=i===void 0?!0:i,n=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(u){if(rt){var l=document.body,c=l&&l.style;if(r&&Ze.forEach(function(x){var b=c&&c[x];n.current[x]=b}),r&&ie<1){var d=parseInt(n.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,E=window.innerWidth-g+d||0;Object.keys(Je).forEach(function(x){var b=Je[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(E,"px"))}l&&it()&&(l.addEventListener("touchmove",et,te),u&&(u.addEventListener("touchstart",nt,te),u.addEventListener("touchmove",tt,te))),ie+=1}},[r]),o=p.useCallback(function(u){if(rt){var l=document.body,c=l&&l.style;ie=Math.max(ie-1,0),r&&ie<1&&Ze.forEach(function(d){var g=n.current[d];c&&(c[d]=g)}),l&&it()&&(l.removeEventListener("touchmove",et,te),u&&(u.removeEventListener("touchstart",nt,te),u.removeEventListener("touchmove",tt,te)))}},[r]);return p.useEffect(function(){if(t){var u=a.current;return s(u),function(){o(u)}}},[t,s,o]),function(u){a.current=u}}var Tr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},$r={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Br(e){var t=e.children,i=e.lockEnabled,r=e.captureEnabled,n=r===void 0?!0:r,a=e.onBottomArrive,s=e.onBottomLeave,o=e.onTopArrive,u=e.onTopLeave,l=kr({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=Lr({isEnabled:i}),d=function(E){l(E),c(E)};return F(p.Fragment,null,i&&F("div",{onClick:Tr,css:$r}),t(d))}var jr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Hr=function(t){var i=t.name,r=t.onFocus;return F("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:jr,value:"",onChange:function(){}})},zr=Hr,Ur=function(t){return t.label},_r=function(t){return t.label},Nr=function(t){return t.value},Wr=function(t){return!!t.isDisabled},qr={clearIndicator:Vi,container:Ci,control:ji,dropdownIndicator:Mi,group:_i,groupHeading:Wi,indicatorsContainer:Fi,indicatorSeparator:ki,input:Xi,loadingIndicator:$i,loadingMessage:vi,menu:li,menuList:fi,menuPortal:xi,multiValue:er,multiValueLabel:tr,multiValueRemove:nr,noOptionsMessage:mi,option:sr,placeholder:dr,singleValue:hr,valueContainer:yi},Gr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Yr=4,Vt=4,Xr=38,Kr=Vt*2,Qr={baseUnit:Vt,controlHeight:Xr,menuGutter:Kr},Oe={borderRadius:Yr,colors:Gr,spacing:Qr},Zr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Mr(),formatGroupLabel:Ur,getOptionLabel:_r,getOptionValue:Nr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Wr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Jn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ot(e,t,i,r){var n=Tt(e,t,i),a=$t(e,t,i),s=Lt(e,t),o=xe(e,t);return{type:"option",data:t,isDisabled:n,isSelected:a,label:s,value:o,index:r}}function Rt(e,t){return e.options.map(function(i,r){if("options"in i){var n=i.options.map(function(s,o){return ot(e,s,t,o)}).filter(function(s){return at(e,s)});return n.length>0?{type:"group",data:i,options:n,index:r}:void 0}var a=ot(e,i,t,r);return at(e,a)?a:void 0}).filter(ni)}function kt(e){return e.reduce(function(t,i){return i.type==="group"?t.push.apply(t,ft(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function Jr(e,t){return kt(Rt(e,t))}function at(e,t){var i=e.inputValue,r=i===void 0?"":i,n=t.data,a=t.isSelected,s=t.label,o=t.value;return(!jt(e)||!a)&&Bt(e,{label:s,value:o,data:n},r)}function eo(e,t){var i=e.focusedValue,r=e.selectValue,n=r.indexOf(i);if(n>-1){var a=t.indexOf(i);if(a>-1)return i;if(n<t.length)return t[n]}return null}function to(e,t){var i=e.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Lt=function(t,i){return t.getOptionLabel(i)},xe=function(t,i){return t.getOptionValue(i)};function Tt(e,t,i){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,i):!1}function $t(e,t,i){if(i.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,i);var r=xe(e,t);return i.some(function(n){return xe(e,n)===r})}function Bt(e,t,i){return e.filterOption?e.filterOption(t,i):!0}var jt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},no=1,Ht=function(e){xn(i,e);var t=Sn(i);function i(r){var n;if(yn(this,i),n=t.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.instancePrefix="",n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,u){var l=n.props,c=l.onChange,d=l.name;u.name=d,n.ariaOnChange(o,u),c(o,u)},n.setValue=function(o,u,l){var c=n.props,d=c.closeMenuOnSelect,g=c.isMulti,E=c.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:E}),d&&(n.setState({inputIsHiddenAfterUpdate:!g}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:u,option:l})},n.selectOption=function(o){var u=n.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,g=n.state.selectValue,E=c&&n.isOptionSelected(o,g),x=n.isOptionDisabled(o,g);if(E){var b=n.getOptionValue(o);n.setValue(g.filter(function(v){return n.getOptionValue(v)!==b}),"deselect-option",o)}else if(!x)c?n.setValue([].concat(ft(g),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&n.blurInput()},n.removeValue=function(o){var u=n.props.isMulti,l=n.state.selectValue,c=n.getOptionValue(o),d=l.filter(function(E){return n.getOptionValue(E)!==c}),g=ce(u,d,d[0]||null);n.onChange(g,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(ce(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,u=n.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=ce(o,c,c[0]||null);n.onChange(d,{action:"pop-value",removedValue:l})},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return Yn.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(o){return Lt(n.props,o)},n.getOptionValue=function(o){return xe(n.props,o)},n.getStyles=function(o,u){var l=n.props.unstyled,c=qr[o](u,l);c.boxSizing="border-box";var d=n.props.styles[o];return d?d(c,u):c},n.getClassNames=function(o,u){var l,c;return(l=(c=n.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},n.getElementId=function(o){return"".concat(n.instancePrefix,"-").concat(o)},n.getComponents=function(){return br(n.props)},n.buildCategorizedOptions=function(){return Rt(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return kt(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,u){n.setState({ariaSelection:w({value:o},u)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var u=n.props,l=u.isMulti,c=u.menuIsOpen;n.focusInput(),c?(n.setState({inputIsHiddenAfterUpdate:!l}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(n.initialTouchX=l.clientX,n.initialTouchY=l.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-n.initialTouchX),d=Math.abs(l.clientY-n.initialTouchY),g=5;n.userIsDragging=c>g||d>g}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var u=n.props.inputValue,l=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(l,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){n.blockOptionHover||n.state.focusedOption===o||n.setState({focusedOption:o})},n.shouldHideSelectedOptions=function(){return jt(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var u=n.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,g=u.inputValue,E=u.isClearable,x=u.isDisabled,b=u.menuIsOpen,v=u.onKeyDown,m=u.tabSelectsValue,f=u.openMenuOnFocus,C=n.state,O=C.focusedOption,M=C.focusedValue,y=C.selectValue;if(!x&&!(typeof v=="function"&&(v(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||g)return;n.focusValue("previous");break;case"ArrowRight":if(!l||g)return;n.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(M)n.removeValue(M);else{if(!c)return;l?n.popValue():E&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!b||!m||!O||f&&n.isOptionSelected(O,y))return;n.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(b){if(!O||n.isComposing)return;n.selectOption(O);break}return;case"Escape":b?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:g}),n.onMenuClose()):E&&d&&n.clearValue();break;case" ":if(g)return;if(!b){n.openMenu("first");break}if(!O)return;n.selectOption(O);break;case"ArrowUp":b?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":b?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!b)return;n.focusOption("pageup");break;case"PageDown":if(!b)return;n.focusOption("pagedown");break;case"Home":if(!b)return;n.focusOption("first");break;case"End":if(!b)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.instancePrefix="react-select-"+(n.props.instanceId||++no),n.state.selectValue=We(r.value),r.menuIsOpen&&n.state.selectValue.length){var a=n.buildFocusableOptions(),s=a.indexOf(n.state.selectValue[0]);n.state.focusedOption=a[s]}return n}return wn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&qe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&n.isDisabled||u&&o&&!n.menuIsOpen)&&this.focusInput(),u&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(qe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(n){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),n==="up"?u=l>0?l-1:o.length-1:n==="down"?u=(l+1)%o.length:n==="pageup"?(u=l-a,u<0&&(u=0)):n==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):n==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):w(w({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,E=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:b,isMulti:g,isRtl:E,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return Tt(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return $t(this.props,n,a)}},{key:"filterOption",value:function(n,a){return Bt(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,o=n.inputId,u=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,g=n.required,E=this.getComponents(),x=E.Input,b=this.state,v=b.inputIsHidden,m=b.ariaSelection,f=this.commonProps,C=o||this.getElementId("input"),O=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(x,D({},f,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},O)):p.createElement(Vr,D({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ge,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,E=this.props,x=E.controlShouldRenderValue,b=E.isDisabled,v=E.isMulti,m=E.inputValue,f=E.placeholder,C=this.state,O=C.selectValue,M=C.focusedValue,y=C.isFocused;if(!this.hasValue()||!x)return m?null:p.createElement(d,D({},g,{key:"placeholder",isDisabled:b,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),f);if(v)return O.map(function(I,R){var j=I===M,U="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return p.createElement(s,D({},g,{components:{Container:o,Label:u,Remove:l},isFocused:j,isDisabled:b,key:U,index:R,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(_){_.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(m)return null;var A=O[0];return p.createElement(c,D({},g,{data:A,isDisabled:b}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,D({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,D({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return p.createElement(s,D({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,D({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,E=a.Option,x=this.commonProps,b=this.state.focusedOption,v=this.props,m=v.captureMenuScroll,f=v.inputValue,C=v.isLoading,O=v.loadingMessage,M=v.minMenuHeight,y=v.maxMenuHeight,A=v.menuIsOpen,I=v.menuPlacement,R=v.menuPosition,j=v.menuPortalTarget,U=v.menuShouldBlockScroll,$=v.menuShouldScrollIntoView,_=v.noOptionsMessage,k=v.onMenuScrollToTop,L=v.onMenuScrollToBottom;if(!A)return null;var H=function(B,Z){var J=B.type,q=B.data,G=B.isDisabled,ne=B.isSelected,oe=B.label,Yt=B.value,Be=b===q,je=G?void 0:function(){return n.onOptionHover(q)},Xt=G?void 0:function(){return n.selectOption(q)},He="".concat(n.getElementId("option"),"-").concat(Z),Kt={id:He,onClick:Xt,onMouseMove:je,onMouseOver:je,tabIndex:-1};return p.createElement(E,D({},x,{innerProps:Kt,data:q,isDisabled:G,isSelected:ne,key:He,label:oe,type:J,value:Yt,isFocused:Be,innerRef:Be?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(B.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var B=T.data,Z=T.options,J=T.index,q="".concat(n.getElementId("group"),"-").concat(J),G="".concat(q,"-heading");return p.createElement(s,D({},x,{key:q,data:B,options:Z,Heading:o,headingProps:{id:G,data:T.data},label:n.formatGroupLabel(T.data)}),T.options.map(function(ne){return H(ne,"".concat(J,"-").concat(ne.index))}))}else if(T.type==="option")return H(T,"".concat(T.index))});else if(C){var W=O({inputValue:f});if(W===null)return null;N=p.createElement(d,x,W)}else{var K=_({inputValue:f});if(K===null)return null;N=p.createElement(g,x,K)}var Q={minMenuHeight:M,maxMenuHeight:y,menuPlacement:I,menuPosition:R,menuShouldScrollIntoView:$},ee=p.createElement(ci,D({},x,Q),function(T){var B=T.ref,Z=T.placerProps,J=Z.placement,q=Z.maxHeight;return p.createElement(u,D({},x,Q,{innerRef:B,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove,id:n.getElementId("listbox")},isLoading:C,placement:J}),p.createElement(Br,{captureEnabled:m,onTopArrive:k,onBottomArrive:L,lockEnabled:U},function(G){return p.createElement(l,D({},x,{innerRef:function(oe){n.getMenuListRef(oe),G(oe)},isLoading:C,maxHeight:q,focusedOption:b}),N)}))});return j||R==="fixed"?p.createElement(c,D({},x,{appendTo:j,controlElement:this.controlRef,menuPlacement:I,menuPosition:R}),ee):ee}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return p.createElement(zr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var g=d.map(function(b){return n.getOptionValue(b)}).join(s);return p.createElement("input",{name:l,type:"hidden",value:g})}else{var E=d.length>0?d.map(function(b,v){return p.createElement("input",{key:"i-".concat(v),name:l,type:"hidden",value:n.getOptionValue(b)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,E)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Dr,D({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,o=n.SelectContainer,u=n.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,E=l.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(o,D({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:x}),this.renderLiveRegion(),p.createElement(a,D({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:x,menuIsOpen:E}),p.createElement(u,D({},b,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,D({},b,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=n.options,E=n.value,x=n.menuIsOpen,b=n.inputValue,v=n.isMulti,m=We(E),f={};if(s&&(E!==s.value||g!==s.options||x!==s.menuIsOpen||b!==s.inputValue)){var C=x?Jr(n,m):[],O=o?eo(a,m):null,M=to(a,C);f={selectValue:m,focusedOption:M,focusedValue:O,clearFocusValueOnUpdate:!1}}var y=u!=null&&n!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},A=l,I=c&&d;return c&&!I&&(A={value:ce(v,m,m[0]||null),options:m,action:"initial-input-focus"},I=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(A=null),w(w(w({},f),y),{},{prevProps:n,ariaSelection:A,prevWasFocused:I})}}]),i}(p.Component);Ht.defaultProps=Zr;var io=p.forwardRef(function(e,t){var i=In(e);return p.createElement(Ht,D({ref:t},i))}),ro=io;const oo=S.p`
  display: none;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    z-index: 1;
    display: block;
    position: relative;
    top: -28px;
    left: -65px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,ao=S.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    gap: 16px;
  }
`,uo=S.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,so=S.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  background-color: transparent;
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  &:focus {
    border: 1px solid ${({theme:e})=>e.color.orangeFirst};
    outline: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 236px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,lo=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
`,co=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,po=S.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,ut=S.div`
  flex: 1;
  z-index: 2;
  background-color: transparent;
`,st=S(ro)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);
`,{QUERY:de,RECOMMENDED:pe,CATEGORY:zt}=rn,fo={[de]:"",[zt]:"",[pe]:""};function Ut({onProductsChange:e}){const[t,i]=p.useState(fo),[r,n]=p.useState(""),[a,s]=p.useState([]),{isSuccess:o,currentData:u}=nn();p.useEffect(()=>{if(o){const[f]=u,{productsCategories:C}=f;s(C)}},[u,o]),p.useEffect(()=>{e(t)},[t,e]);const l=()=>{n(""),i(f=>({...f,[de]:""}))},c=["All","Recommended","Not recommended"],[d,g]=p.useState(null),[E,x]=p.useState(null),b=f=>{i(C=>({...C,[de]:f.target.value.trim()})),n(f.target.value)},v=f=>{g(f),i(C=>({...C,[zt]:f.label}))},m=f=>{switch(x(f),f.label){case"Recommended":i(C=>({...C,[pe]:[!1]}));break;case"Not recommended":i(C=>({...C,[pe]:[!0]}));break;default:i(C=>({...C,[pe]:null}))}};return h.jsx(h.Fragment,{children:h.jsxs(ao,{children:[h.jsxs(uo,{children:[h.jsx(so,{type:"text",value:t[de],onChange:b}),h.jsx(lo,{width:"18",height:"18",children:h.jsx("use",{href:`${re}#search`})}),r.trim()&&h.jsx(co,{onClick:l,children:h.jsx("svg",{width:"18",height:"18",children:h.jsx("use",{href:`${re}#x-clean`})})})]}),h.jsxs(po,{children:[h.jsx(ut,{children:h.jsx(st,{styles:{option:f=>({...f,background:"#1C1C1C"}),control:f=>({...f,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:f=>({...f,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:f=>({...f,background:"#040404",borderRadius:"12px"}),menuList:f=>({...f,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:f=>({...f,display:"none"}),placeholder:f=>({...f,color:"#efede8"}),singleValue:f=>({...f,color:"#efede8",justifyContent:"center"}),container:f=>({...f,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:f=>({...f,fontSize:"14px"}),valueContainer:f=>({...f,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:v,options:a.map(f=>({label:f.charAt(0).toUpperCase()+f.slice(1)})),placeholder:"Categories"})}),h.jsx(ut,{children:h.jsx(st,{styles:{option:f=>({...f,background:"#1C1C1C"}),control:f=>({...f,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:f=>({...f,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:f=>({...f,background:"none",border:"none"}),menuList:f=>({...f,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:f=>({...f,display:"none"}),placeholder:f=>({...f,color:"#efede8"}),singleValue:f=>({...f,color:"#efede8",justifyContent:"center"}),container:f=>({...f,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:f=>({...f,fontSize:"14px"}),valueContainer:f=>({...f,"@media (min-width: 768px)":{width:"195px"}})},value:E,onChange:m,options:c.map(f=>({label:f})),placeholder:"All"})})]}),h.jsx(oo,{children:"Filters"})]})})}Ut.propTypes={onProductsChange:P.func.isRequired};const ho=S.div`
  position: relative;
  width: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 171px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 244px;
  }
`,mo=S.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
  }
`,vo=S.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;function _t({selectedDate:e,setSelectedDate:t}){const i=dt(e,"dd.MM.yyyy");return h.jsx(hn,{maxDate:new Date,onChange:t,value:e,children:h.jsxs(ho,{children:[h.jsx(mo,{children:i}),h.jsx(vo,{children:h.jsx(on,{name:"calendar"})})]})})}_t.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const go=S.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 320px;
  }
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 48px 32px;
    width: auto;
  }
`,bo=S.div`
  position: relative;
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 415px;
  }
`,xo=S.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({theme:e})=>e.color.grayFirst};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Eo=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
  }
`,Co=S.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};
  background: rgba(0, 0, 0, 0.5);
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,So=S.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    right: 16px;
    top: 12px;
  }
`,yo=S.div`
  display: flex;
`,wo=S.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Fo=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,Do=S.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    justify-content: flex-start;
  }
`,Oo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 64px;
  }
`,Ao=S.button`
  padding: 12px 22px;
  border: none;
  color: ${({theme:e})=>e.color.white};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Io=S.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  background: transparent;
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Nt(e){const[t,i]=p.useState(new Date),{onClose:r,addProdSuccess:n,addProdError:a,product:s}=e,{weight:o,calories:u,_id:l,title:c}=s,[d,g]=p.useState(o),E=d*u/100,[x]=an(),b={product_ID:l,date:dt(new Date(t),"yyyy-MM-dd"),amount:d,calories:E},v=async()=>{const{error:m}=await x(b);m?a(m.data.message):(r(),n(E))};return h.jsxs(go,{children:[h.jsxs(bo,{children:[h.jsx(xo,{type:"text",value:c,readOnly:!0,disabled:!0}),h.jsxs(Eo,{children:[h.jsx(Co,{type:"number",value:d,onChange:m=>g(m.target.value)}),h.jsx(So,{children:"grams"})]})]}),h.jsxs(Oo,{children:[h.jsx(_t,{selectedDate:t,setSelectedDate:i}),h.jsxs(yo,{children:[h.jsx(wo,{children:"Calories:"}),h.jsx(Fo,{children:E})]})]}),h.jsxs(Do,{children:[h.jsx(Ao,{onClick:v,children:"Add to diary"}),h.jsx(Io,{onClick:r,children:"Cancel"})]})]})}Nt.propTypes={onClose:P.func.isRequired,addProdSuccess:P.func.isRequired,addProdError:P.func.isRequired,product:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,_id:P.string.isRequired,title:P.string.isRequired}).isRequired};const Mo="/power-pulse/assets/avocado-b622cf8b.png",Po=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin: 22px 111px;
  }
`,Vo=S.div`
  background: url(${Mo}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 19px;
  }
`,Ro=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,ko=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,Lo=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,To=S.span`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,$o=S.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color: ${({theme:e})=>e.color.white};
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: calc(24 / 16);
  }
`,Bo=S(un)`
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
  
  svg {
    stroke: ${({theme:e})=>e.color.grayFirst};
    transition: stroke 300ms ease-in-out;
  }

  :hover p,
  :hover svg {
    color: ${({theme:e})=>e.color.white};
    stroke: ${({theme:e})=>e.color.white};
  }
`,jo=S.p`
  margin-right: 8px;
  transition: color 300ms ease-in-out;
`;function Wt({onClose:e,totalCalories:t}){return h.jsxs(Po,{children:[h.jsx(Vo,{}),h.jsx(Ro,{children:"Well Done"}),h.jsxs(ko,{children:[h.jsx(Lo,{children:"Calories:"}),h.jsx(To,{children:t})]}),h.jsx($o,{onClick:e,children:"Next product"}),h.jsxs(Bo,{to:`/${sn.DIARY}`,children:[h.jsx(jo,{children:"To the diary"}),h.jsx("svg",{width:"16",height:"16",children:h.jsx("use",{href:re+"#arrow-add-prod"})})]})]})}Wt.propTypes={totalCalories:P.number,onClose:P.func.isRequired};const Ho=S.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  margin-bottom: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 405px;
  }
`,zo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,Uo=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,_o=S.div`
  display: flex;
  align-items: center;
`,No=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({recommended:e,theme:t})=>e?t.color.circleGreen:t.color.circleRed};
`,Wo=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,qo=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,Go=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,Yo=S.svg`
  width: 16px;
  height: 16px;
`,Xo=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,Ko=S.svg`
  width: 24px;
  height: 24px;
`,Qo=S.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Zo=S.div`
  display: flex;
  gap: 16px;
`,Ae=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${e=>e.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,Ie=S.span`
  color: ${({theme:e})=>e.color.white};
  padding-left: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 4px;
  }
`;function qt({props:e,userGroupBlood:t}){const{weight:i,calories:r,category:n,title:a,groupBloodNotAllowed:s}=e,o=s[t],[u,l]=p.useState(!1),[c,d]=p.useState(!1),[g,E]=p.useState(!1),[x,b]=p.useState(null),[v,m]=p.useState(""),f=()=>{l(!0)},C=()=>{l(!1),d(!1),E(!1)},O=y=>{d(!0),b(y)},M=y=>{E(!0),m(y)};return h.jsxs(h.Fragment,{children:[h.jsxs(Ho,{children:[h.jsxs(zo,{children:[h.jsx(Uo,{children:"DIET"}),h.jsxs(_o,{children:[h.jsx(No,{recommended:o}),h.jsx(Wo,{children:o?"Recommended":"Not recommended"}),h.jsxs(qo,{onClick:f,children:[h.jsx(Go,{children:"Add"}),h.jsx(Yo,{children:h.jsx("use",{href:`${re}#arrow-add-prod-orange`})})]})]})]}),h.jsxs(Xo,{children:[h.jsx(Ko,{children:h.jsx("use",{href:`${re}#run-man`})}),h.jsx(Qo,{children:a})]}),h.jsxs(Zo,{children:[h.jsxs(Ae,{children:["Calories:",h.jsx(Ie,{children:r})]}),h.jsxs(Ae,{category:!0,children:["Category:",h.jsx(Ie,{children:n})]}),h.jsxs(Ae,{children:["Weight:",h.jsx(Ie,{children:i})]})]})]}),h.jsx(Ce,{onClose:C,onShow:u,children:h.jsx(Nt,{onClose:C,addProdSuccess:O,product:e,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:c,children:h.jsx(Wt,{onClose:C,totalCalories:x,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:g,children:h.jsx(ln,{message:v,onClose:C})})]})}qt.propTypes={props:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,category:P.string.isRequired,title:P.string.isRequired,groupBloodNotAllowed:P.object.isRequired}).isRequired,userGroupBlood:P.number};const Jo=S.ul`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    height: 660px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;

    overflow-y: scroll;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 850px;
    height: 487px;
  }
`,ea=S.p`
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,ta=S.span`
  color: #e6533c;
`,na=S.span`
  margin-top: 16px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Gt({filter:e}){const[t,i]=p.useState([]),[r,n]=p.useState(null),[a,s]=p.useState(null),[o,u]=p.useState(1),[l,c]=p.useState(!0),d=p.useRef(),[g,{isLoading:E,isError:x,error:b}]=cn(),{isSuccess:v,data:m,isLoading:f,isError:C,error:O}=dn(),{ref:M}=fn({onChange:y=>{y&&l&&u(A=>A+1)}});return p.useEffect(()=>{v&&n(m)},[v,m]),p.useEffect(()=>{d.current&&(d.current.scrollTop=0),u(1),c(!0),s(e)},[e,M]),p.useEffect(()=>{l&&a&&(async()=>{try{const A=await g({page:o,...a}).unwrap();A.data.length<18&&c(!1),i(o===1?[...A.data]:I=>[...I,...A.data])}catch(A){console.error("Error fetching data:",A.message)}})()},[g,o,a,l]),h.jsxs(h.Fragment,{children:[t.length>0?h.jsx(Jo,{ref:d,children:t.map((y,A)=>h.jsx("li",{ref:A===t.length-1?M:null,children:h.jsx(qt,{props:y,userGroupBlood:r},y._id)},A))}):h.jsxs(h.Fragment,{children:[h.jsxs(ea,{children:[h.jsx(ta,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(na,{children:"Try changing the search parameters."})]}),h.jsx(ze,{isLoading:E,isError:x,error:b}),h.jsx(ze,{isLoading:f,isError:C,error:O})]})}Gt.propTypes={filter:P.shape({title:P.string.isRequired,category:P.string.isRequired,recommended:P.oneOfType([P.oneOf([""]),P.arrayOf(P.oneOf([!0,!1]))])})};const ia=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: image-set(
    url(${vn}) 1x,
    url(${gn}) 2x,
    url(${bn}) 3x
  );
  background-size: 428px 716px;
  border-radius: 12px;
`,ra=S.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 32px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
  }
`;function ca(){const[e,t]=p.useState(null),[i,r]=p.useState(window.innerWidth>=1440),n=()=>{r(window.innerWidth>=1440)};return p.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),h.jsxs(h.Fragment,{children:[i&&h.jsx(ia,{}),h.jsxs(ra,{children:[h.jsx(pn,{text:"Products"}),h.jsx(Ut,{onProductsChange:t})]}),h.jsx(Gt,{filter:e})]})}export{ca as Products};
