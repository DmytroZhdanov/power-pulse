import{_ as qt,V as st,W as Yt,X as Xt,r as f,Y as y,Z as Kt,$ as oe,a0 as F,a1 as D,a2 as Qt,a3 as lt,n as S,P as T,a4 as Zt,j as h,f as pe,a5 as Jt,I as en,a6 as tn,B as Ce,l as nn,a7 as rn,N as on,E as an}from"./index-790124cc.js";import{T as un}from"./TitlePage-d4c8ded2.js";import{f as sn,C as ln}from"./Calendar-519f30c6.js";import{u as cn}from"./index-af454c0f.js";import"./tiny-warning.esm-c932d744.js";function dn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}const pn="/power-pulse/assets/bg_eating-526af03d.jpg",fn="/power-pulse/assets/bg_eating@2x-53f5e280.jpg",hn="/power-pulse/assets/bg_eating@3x-1df10d6d.jpg";function Me(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function ct(n,e){if(n){if(typeof n=="string")return Me(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Me(n,e)}}function mn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&qt(n,e)}function fe(n){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},fe(n)}function vn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gn(n,e){if(e&&(st(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dn(n)}function bn(n){var e=vn();return function(){var r=fe(n),t;if(e){var a=fe(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return gn(this,t)}}function xn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Yt(r.key),r)}}function En(n,e,i){return e&&ze(n.prototype,e),i&&ze(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function Cn(n){if(Array.isArray(n))return n}function Sn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,t,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(c){l=!0,t=c}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw t}}return o}}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return Cn(n)||Sn(n,e)||ct(n,e)||wn()}function X(n,e){if(n==null)return{};var i=Xt(n,e),r,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var yn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Fn(n){var e=n.defaultInputValue,i=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,a=n.defaultValue,s=a===void 0?null:a,o=n.inputValue,u=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,x=n.value,E=X(n,yn),b=f.useState(o!==void 0?o:i),v=Y(b,2),m=v[0],p=v[1],C=f.useState(u!==void 0?u:t),O=Y(C,2),A=O[0],w=O[1],I=f.useState(x!==void 0?x:s),M=Y(I,2),P=M[0],$=M[1],_=f.useCallback(function(W,K){typeof l=="function"&&l(W,K),$(W)},[l]),B=f.useCallback(function(W,K){var Q;typeof c=="function"&&(Q=c(W,K)),p(Q!==void 0?Q:W)},[c]),N=f.useCallback(function(){typeof g=="function"&&g(),w(!0)},[g]),R=f.useCallback(function(){typeof d=="function"&&d(),w(!1)},[d]),L=o!==void 0?o:m,H=u!==void 0?u:A,U=x!==void 0?x:P;return y(y({},E),{},{inputValue:L,menuIsOpen:H,onChange:_,onInputChange:B,onMenuClose:R,onMenuOpen:N,value:U})}function Dn(n){if(Array.isArray(n))return Me(n)}function On(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function An(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(n){return Dn(n)||On(n)||ct(n)||An()}function In(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Mn=Math.min,Vn=Math.max,he=Math.round,ae=Math.floor,me=n=>({x:n,y:n});function Pn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function pt(n){return ht(n)?(n.nodeName||"").toLowerCase():"#document"}function z(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function ft(n){var e;return(e=(ht(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ht(n){return n instanceof Node||n instanceof z(n).Node}function Ve(n){return n instanceof Element||n instanceof z(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof z(n).HTMLElement}function _e(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof z(n).ShadowRoot}function mt(n){const{overflow:e,overflowX:i,overflowY:r,display:t}=Te(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(t)}function Rn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ln(n){return["html","body","#document"].includes(pt(n))}function Te(n){return z(n).getComputedStyle(n)}function Tn(n){if(pt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||_e(n)&&n.host||ft(n);return _e(e)?e.host:e}function vt(n){const e=Tn(n);return Ln(e)?n.ownerDocument?n.ownerDocument.body:n.body:Le(e)&&mt(e)?e:vt(e)}function ve(n,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=vt(n),a=t===((r=n.ownerDocument)==null?void 0:r.body),s=z(t);return a?e.concat(s,s.visualViewport||[],mt(t)?t:[],s.frameElement&&i?ve(s.frameElement):[]):e.concat(t,ve(t,[],i))}function kn(n){const e=Te(n);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=Le(n),a=t?n.offsetWidth:i,s=t?n.offsetHeight:r,o=he(i)!==a||he(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function ke(n){return Ve(n)?n:n.contextElement}function Se(n){const e=ke(n);if(!Le(e))return me(1);const i=e.getBoundingClientRect(),{width:r,height:t,$:a}=kn(e);let s=(a?he(i.width):i.width)/r,o=(a?he(i.height):i.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const Bn=me(0);function jn(n){const e=z(n);return!Rn()||!e.visualViewport?Bn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $n(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==z(n)?!1:e}function Ne(n,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=ke(n);let s=me(1);e&&(r?Ve(r)&&(s=Se(r)):s=Se(n));const o=$n(a,i,r)?jn(a):me(0);let u=(t.left+o.x)/s.x,l=(t.top+o.y)/s.y,c=t.width/s.x,d=t.height/s.y;if(a){const g=z(a),x=r&&Ve(r)?z(r):r;let E=g.frameElement;for(;E&&r&&x!==g;){const b=Se(E),v=E.getBoundingClientRect(),m=Te(E),p=v.left+(E.clientLeft+parseFloat(m.paddingLeft))*b.x,C=v.top+(E.clientTop+parseFloat(m.paddingTop))*b.y;u*=b.x,l*=b.y,c*=b.x,d*=b.y,u+=p,l+=C,E=z(E).frameElement}}return Pn({width:c,height:d,x:u,y:l})}function Hn(n,e){let i=null,r;const t=ft(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:g}=n.getBoundingClientRect();if(o||e(),!d||!g)return;const x=ae(c),E=ae(t.clientWidth-(l+d)),b=ae(t.clientHeight-(c+g)),v=ae(l),p={rootMargin:-x+"px "+-E+"px "+-b+"px "+-v+"px",threshold:Vn(0,Mn(1,u))||1};let C=!0;function O(A){const w=A[0].intersectionRatio;if(w!==u){if(!C)return s();w?s(!1,w):r=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{i=new IntersectionObserver(O,{...p,root:t.ownerDocument})}catch{i=new IntersectionObserver(O,p)}i.observe(n)}return s(!0),a}function zn(n,e,i,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=ke(n),c=t||a?[...l?ve(l):[],...ve(e)]:[];c.forEach(m=>{t&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&o?Hn(l,i):null;let g=-1,x=null;s&&(x=new ResizeObserver(m=>{let[p]=m;p&&p.target===l&&x&&(x.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{x&&x.observe(e)})),i()}),l&&!u&&x.observe(l),x.observe(e));let E,b=u?Ne(n):null;u&&v();function v(){const m=Ne(n);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&i(),b=m,E=requestAnimationFrame(v)}return i(),()=>{c.forEach(m=>{t&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),x&&x.disconnect(),x=null,u&&cancelAnimationFrame(E)}}var Pe=f.useLayoutEffect,_n=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ge=function(){};function Nn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Un(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),t=2;t<i;t++)r[t-2]=arguments[t];var a=[].concat(r);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Nn(n,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var Ue=function(e){return Jn(e)?e.filter(Boolean):st(e)==="object"&&e!==null?[e]:[]},gt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=X(e,_n);return y({},i)},V=function(e,i,r){var t=e.cx,a=e.getStyles,s=e.getClassNames,o=e.className;return{css:a(i,e),className:t(r??{},s(i,e),o)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Wn(n){return Ee(n)?window.innerHeight:n.clientHeight}function bt(n){return Ee(n)?window.pageYOffset:n.scrollTop}function be(n,e){if(Ee(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Gn(n){var e=getComputedStyle(n),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function qn(n,e,i,r){return i*((n=n/r-1)*n*n+1)+e}function ue(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ge,t=bt(n),a=e-t,s=10,o=0;function u(){o+=s;var l=qn(o,t,a,i);be(n,l),o<i?window.requestAnimationFrame(u):r(n)}u()}function We(n,e){var i=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>i.bottom?be(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<i.top&&be(n,Math.max(e.offsetTop-t,0))}function Yn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Xn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var xt=!1,Kn={get passive(){return xt=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",ge,Kn),se.removeEventListener("p",ge,!1));var Qn=xt;function Zn(n){return n!=null}function Jn(n){return Array.isArray(n)}function le(n,e,i){return n?e:i}var ei=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var o=Y(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},ti=["children","innerProps"],ni=["children","innerProps"];function ii(n){var e=n.maxHeight,i=n.menuEl,r=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,o=n.controlHeight,u=Gn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,g=i.getBoundingClientRect(),x=g.bottom,E=g.height,b=g.top,v=i.offsetParent.getBoundingClientRect(),m=v.top,p=s?window.innerHeight:Wn(u),C=bt(u),O=parseInt(getComputedStyle(i).marginBottom,10),A=parseInt(getComputedStyle(i).marginTop,10),w=m-A,I=p-b,M=w+C,P=d-C-b,$=x-p+C+O,_=C+b-A,B=160;switch(t){case"auto":case"bottom":if(I>=E)return{placement:"bottom",maxHeight:e};if(P>=E&&!s)return a&&ue(u,$,B),{placement:"bottom",maxHeight:e};if(!s&&P>=r||s&&I>=r){a&&ue(u,$,B);var N=s?I-O:P-O;return{placement:"bottom",maxHeight:N}}if(t==="auto"||s){var R=e,L=s?w:M;return L>=r&&(R=Math.min(L-O-o,e)),{placement:"top",maxHeight:R}}if(t==="bottom")return a&&be(u,$),{placement:"bottom",maxHeight:e};break;case"top":if(w>=E)return{placement:"top",maxHeight:e};if(M>=E&&!s)return a&&ue(u,_,B),{placement:"top",maxHeight:e};if(!s&&M>=r||s&&w>=r){var H=e;return(!s&&M>=r||s&&w>=r)&&(H=s?w-A:M-A),a&&ue(u,_,B),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function ri(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Et=function(e){return e==="auto"?"bottom":e},oi=function(e,i){var r,t=e.placement,a=e.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return y((r={label:"menu"},oe(r,ri(t),"100%"),oe(r,"position","absolute"),oe(r,"width","100%"),oe(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},Ct=f.createContext(null),ai=function(e){var i=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,o=e.menuShouldScrollIntoView,u=e.theme,l=f.useContext(Ct)||{},c=l.setPortalPlacement,d=f.useRef(null),g=f.useState(t),x=Y(g,2),E=x[0],b=x[1],v=f.useState(null),m=Y(v,2),p=m[0],C=m[1],O=u.spacing.controlHeight;return Pe(function(){var A=d.current;if(A){var w=s==="fixed",I=o&&!w,M=ii({maxHeight:t,menuEl:A,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:w,controlHeight:O});b(M.maxHeight),C(M.placement),c==null||c(M.placement)}},[t,a,s,o,r,c,O]),i({ref:d,placerProps:y(y({},e),{},{placement:p||Et(a),maxHeight:E})})},ui=function(e){var i=e.children,r=e.innerRef,t=e.innerProps;return F("div",D({},V(e,"menu",{menu:!0}),{ref:r},t),i)},si=ui,li=function(e,i){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return y({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},ci=function(e){var i=e.children,r=e.innerProps,t=e.innerRef,a=e.isMulti;return F("div",D({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},r),i)},St=function(e,i){var r=e.theme,t=r.spacing.baseUnit,a=r.colors;return y({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},di=St,pi=St,fi=function(e){var i=e.children,r=i===void 0?"No options":i,t=e.innerProps,a=X(e,ti);return F("div",D({},V(y(y({},a),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},hi=function(e){var i=e.children,r=i===void 0?"Loading...":i,t=e.innerProps,a=X(e,ni);return F("div",D({},V(y(y({},a),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},mi=function(e){var i=e.rect,r=e.offset,t=e.position;return{left:i.left,position:t,top:r,width:i.width,zIndex:1}},vi=function(e){var i=e.appendTo,r=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,o=e.menuPosition,u=f.useRef(null),l=f.useRef(null),c=f.useState(Et(s)),d=Y(c,2),g=d[0],x=d[1],E=f.useMemo(function(){return{setPortalPlacement:x}},[]),b=f.useState(null),v=Y(b,2),m=v[0],p=v[1],C=f.useCallback(function(){if(t){var I=Yn(t),M=o==="fixed"?0:window.pageYOffset,P=I[g]+M;(P!==(m==null?void 0:m.offset)||I.left!==(m==null?void 0:m.rect.left)||I.width!==(m==null?void 0:m.rect.width))&&p({offset:P,rect:I})}},[t,o,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Pe(function(){C()},[C]);var O=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&u.current&&(l.current=zn(t,u.current,C,{elementResize:"ResizeObserver"in window}))},[t,C]);Pe(function(){O()},[O]);var A=f.useCallback(function(I){u.current=I,O()},[O]);if(!i&&o!=="fixed"||!m)return null;var w=F("div",D({ref:A},V(y(y({},e),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),r);return F(Ct.Provider,{value:E},i?Qt.createPortal(w,i):w)},gi=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},bi=function(e){var i=e.children,r=e.innerProps,t=e.isDisabled,a=e.isRtl;return F("div",D({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),r),i)},xi=function(e,i){var r=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Ei=function(e){var i=e.children,r=e.innerProps,t=e.isMulti,a=e.hasValue;return F("div",D({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),r),i)},Ci=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Si=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"indicatorsContainer",{indicators:!0}),r),i)},qe,wi=["size"],yi=["innerProps","isRtl","size"],Fi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},wt=function(e){var i=e.size,r=X(e,wi);return F("svg",D({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Fi},r))},Be=function(e){return F(wt,D({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yt=function(e){return F(wt,D({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ft=function(e,i){var r=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},Di=Ft,Oi=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||F(yt,null))},Ai=Ft,Ii=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||F(Be,null))},Mi=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Vi=function(e){var i=e.innerProps;return F("span",D({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Pi=Kt(qe||(qe=In([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ri=function(e,i){var r=e.isFocused,t=e.size,a=e.theme,s=a.colors,o=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},we=function(e){var i=e.delay,r=e.offset;return F("span",{css:lt({animation:"".concat(Pi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Li=function(e){var i=e.innerProps,r=e.isRtl,t=e.size,a=t===void 0?4:t,s=X(e,yi);return F("div",D({},V(y(y({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),F(we,{delay:0,offset:r}),F(we,{delay:160,offset:!0}),F(we,{delay:320,offset:!r}))},Ti=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:t?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},ki=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,o=e.menuIsOpen;return F("div",D({ref:a},V(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},Bi=ki,ji=["data"],$i=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Hi=function(e){var i=e.children,r=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,o=e.headingProps,u=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return F("div",D({},V(e,"group",{group:!0}),u),F(s,D({},o,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:r}),l),F("div",null,i))},zi=function(e,i){var r=e.theme,t=r.colors,a=r.spacing;return y({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},_i=function(e){var i=gt(e);i.data;var r=X(i,ji);return F("div",D({},V(e,"groupHeading",{"group-heading":!0}),r))},Ni=Hi,Ui=["innerRef","isDisabled","isHidden","inputClassName"],Wi=function(e,i){var r=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,o=a.colors;return y(y({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Gi),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},Dt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Gi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Dt)},qi=function(e){return y({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Dt)},Yi=function(e){var i=e.cx,r=e.value,t=gt(e),a=t.innerRef,s=t.isDisabled,o=t.isHidden,u=t.inputClassName,l=X(t,Ui);return F("div",D({},V(e,"input",{"input-container":!0}),{"data-value":r||""}),F("input",D({className:i({input:!0},u),ref:a,style:qi(o),disabled:s},l)))},Xi=Yi,Ki=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors;return y({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Qi=function(e,i){var r=e.theme,t=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return y({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Zi=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors,o=e.isFocused;return y({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ot=function(e){var i=e.children,r=e.innerProps;return F("div",r,i)},Ji=Ot,er=Ot;function tr(n){var e=n.children,i=n.innerProps;return F("div",D({role:"button"},i),e||F(Be,{size:14}))}var nr=function(e){var i=e.children,r=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,o=e.removeProps,u=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return F(l,{data:t,innerProps:y(y({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},F(c,{data:t,innerProps:y({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),F(d,{data:t,innerProps:y(y({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},ir=nr,rr=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,o=s.spacing,u=s.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:t?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},or=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,o=e.innerProps;return F("div",D({},V(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},ar=or,ur=function(e,i){var r=e.theme,t=r.spacing,a=r.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},sr=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"placeholder",{placeholder:!0}),r),i)},lr=sr,cr=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},dr=function(e){var i=e.children,r=e.isDisabled,t=e.innerProps;return F("div",D({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),i)},pr=dr,fr={ClearIndicator:Ii,Control:Bi,DropdownIndicator:Oi,DownChevron:yt,CrossIcon:Be,Group:Ni,GroupHeading:_i,IndicatorsContainer:Si,IndicatorSeparator:Vi,Input:Xi,LoadingIndicator:Li,Menu:si,MenuList:ci,MenuPortal:vi,LoadingMessage:hi,NoOptionsMessage:fi,MultiValue:ir,MultiValueContainer:Ji,MultiValueLabel:er,MultiValueRemove:tr,Option:ar,Placeholder:lr,SelectContainer:bi,SingleValue:pr,ValueContainer:Ei},hr=function(e){return y(y({},fr),e.components)},Ye=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function mr(n,e){return!!(n===e||Ye(n)&&Ye(e))}function vr(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!mr(n[i],e[i]))return!1;return!0}function gr(n,e){e===void 0&&(e=vr);var i=null;function r(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var s=n.apply(this,t);return i={lastResult:s,lastArgs:t,lastThis:this},s}return r.clear=function(){i=null},r}var br={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},xr=function(e){return F("span",D({css:br},e))},Xe=xr,Er={guidance:function(e){var i=e.isSearchable,r=e.isMulti,t=e.isDisabled,a=e.tabSelectsValue,s=e.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(t?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,t=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,o=e.selectValue,u=e.isDisabled,l=e.isSelected,c=function(E,b){return E&&E.length?"".concat(E.indexOf(b)+1," of ").concat(E.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,r),".");if(i==="menu"){var d=u?" disabled":"",g="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(g,", ").concat(c(t,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Cr=function(e){var i=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,o=e.selectValue,u=e.selectProps,l=e.id,c=u.ariaLiveMessages,d=u.getOptionLabel,g=u.inputValue,x=u.isMulti,E=u.isOptionDisabled,b=u.isSearchable,v=u.menuIsOpen,m=u.options,p=u.screenReaderStatus,C=u.tabSelectsValue,O=u["aria-label"],A=u["aria-live"],w=f.useMemo(function(){return y(y({},Er),c||{})},[c]),I=f.useMemo(function(){var R="";if(i&&w.onChange){var L=i.option,H=i.options,U=i.removedValue,W=i.removedValues,K=i.value,Q=function(q){return Array.isArray(q)?null:q},ee=U||L||Q(K),k=ee?d(ee):"",j=H||W||void 0,Z=j?j.map(d):[],J=y({isDisabled:ee&&E(ee,o),label:k,labels:Z},i);R=w.onChange(J)}return R},[i,w,E,o,d]),M=f.useMemo(function(){var R="",L=r||t,H=!!(r&&o&&o.includes(r));if(L&&w.onFocus){var U={focused:L,label:d(L),isDisabled:E(L,o),isSelected:H,options:a,context:L===r?"menu":"value",selectValue:o};R=w.onFocus(U)}return R},[r,t,d,E,w,a,o]),P=f.useMemo(function(){var R="";if(v&&m.length&&w.onFilter){var L=p({count:a.length});R=w.onFilter({inputValue:g,resultsMessage:L})}return R},[a,g,v,w,m,p]),$=f.useMemo(function(){var R="";if(w.guidance){var L=t?"value":v?"menu":"input";R=w.guidance({"aria-label":O,context:L,isDisabled:r&&E(r,o),isMulti:x,isSearchable:b,tabSelectsValue:C})}return R},[O,r,t,x,E,b,v,w,o,C]),_="".concat(M," ").concat(P," ").concat($),B=F(f.Fragment,null,F("span",{id:"aria-selection"},I),F("span",{id:"aria-context"},_)),N=(i==null?void 0:i.action)==="initial-input-focus";return F(f.Fragment,null,F(Xe,{id:l},N&&B),F(Xe,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text"},s&&!N&&B))},Sr=Cr,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],wr=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),At={};for(var ye=0;ye<Re.length;ye++)for(var Fe=Re[ye],De=0;De<Fe.letters.length;De++)At[Fe.letters[De]]=Fe.base;var It=function(e){return e.replace(wr,function(i){return At[i]})},yr=gr(It),Ke=function(e){return e.replace(/^\s+|\s+$/g,"")},Fr=function(e){return"".concat(e.label," ").concat(e.value)},Dr=function(e){return function(i,r){if(i.data.__isNew__)return!0;var t=y({ignoreCase:!0,ignoreAccents:!0,stringify:Fr,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,o=t.stringify,u=t.trim,l=t.matchFrom,c=u?Ke(r):r,d=u?Ke(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=yr(c),d=It(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Or=["innerRef"];function Ar(n){var e=n.innerRef,i=X(n,Or),r=ei(i,"onExited","in","enter","exit","appear");return F("input",D({ref:e},r,{css:lt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ir=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Mr(n){var e=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(v,m){if(l.current!==null){var p=l.current,C=p.scrollTop,O=p.scrollHeight,A=p.clientHeight,w=l.current,I=m>0,M=O-A-C,P=!1;M>m&&s.current&&(r&&r(v),s.current=!1),I&&o.current&&(a&&a(v),o.current=!1),I&&m>M?(i&&!s.current&&i(v),w.scrollTop=O,P=!0,s.current=!0):!I&&-m>C&&(t&&!o.current&&t(v),w.scrollTop=0,P=!0,o.current=!0),P&&Ir(v)}},[i,r,t,a]),d=f.useCallback(function(v){c(v,v.deltaY)},[c]),g=f.useCallback(function(v){u.current=v.changedTouches[0].clientY},[]),x=f.useCallback(function(v){var m=u.current-v.changedTouches[0].clientY;c(v,m)},[c]),E=f.useCallback(function(v){if(v){var m=Qn?{passive:!1}:!1;v.addEventListener("wheel",d,m),v.addEventListener("touchstart",g,m),v.addEventListener("touchmove",x,m)}},[x,g,d]),b=f.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",g,!1),v.removeEventListener("touchmove",x,!1))},[x,g,d]);return f.useEffect(function(){if(e){var v=l.current;return E(v),function(){b(v)}}},[e,E,b]),function(v){l.current=v}}var Qe=["boxSizing","height","overflow","paddingRight","position"],Ze={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Je(n){n.preventDefault()}function et(n){n.stopPropagation()}function tt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function nt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function Vr(n){var e=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,t=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;if(r&&Qe.forEach(function(E){var b=c&&c[E];t.current[E]=b}),r&&ie<1){var d=parseInt(t.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,x=window.innerWidth-g+d||0;Object.keys(Ze).forEach(function(E){var b=Ze[E];c&&(c[E]=b)}),c&&(c.paddingRight="".concat(x,"px"))}l&&nt()&&(l.addEventListener("touchmove",Je,te),u&&(u.addEventListener("touchstart",tt,te),u.addEventListener("touchmove",et,te))),ie+=1}},[r]),o=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;ie=Math.max(ie-1,0),r&&ie<1&&Qe.forEach(function(d){var g=t.current[d];c&&(c[d]=g)}),l&&nt()&&(l.removeEventListener("touchmove",Je,te),u&&(u.removeEventListener("touchstart",tt,te),u.removeEventListener("touchmove",et,te)))}},[r]);return f.useEffect(function(){if(e){var u=a.current;return s(u),function(){o(u)}}},[e,s,o]),function(u){a.current=u}}var Pr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Rr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Lr(n){var e=n.children,i=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,a=n.onBottomArrive,s=n.onBottomLeave,o=n.onTopArrive,u=n.onTopLeave,l=Mr({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=Vr({isEnabled:i}),d=function(x){l(x),c(x)};return F(f.Fragment,null,i&&F("div",{onClick:Pr,css:Rr}),e(d))}var Tr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},kr=function(e){var i=e.name,r=e.onFocus;return F("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Tr,value:"",onChange:function(){}})},Br=kr,jr=function(e){return e.label},$r=function(e){return e.label},Hr=function(e){return e.value},zr=function(e){return!!e.isDisabled},_r={clearIndicator:Ai,container:gi,control:Ti,dropdownIndicator:Di,group:$i,groupHeading:zi,indicatorsContainer:Ci,indicatorSeparator:Mi,input:Wi,loadingIndicator:Ri,loadingMessage:pi,menu:oi,menuList:li,menuPortal:mi,multiValue:Ki,multiValueLabel:Qi,multiValueRemove:Zi,noOptionsMessage:di,option:rr,placeholder:ur,singleValue:cr,valueContainer:xi},Nr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ur=4,Mt=4,Wr=38,Gr=Mt*2,qr={baseUnit:Mt,controlHeight:Wr,menuGutter:Gr},Oe={borderRadius:Ur,colors:Nr,spacing:qr},Yr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Dr(),formatGroupLabel:jr,getOptionLabel:$r,getOptionValue:Hr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:zr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Xn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,e,i,r){var t=Lt(n,e,i),a=Tt(n,e,i),s=Rt(n,e),o=xe(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:o,index:r}}function Vt(n,e){return n.options.map(function(i,r){if("options"in i){var t=i.options.map(function(s,o){return rt(n,s,e,o)}).filter(function(s){return ot(n,s)});return t.length>0?{type:"group",data:i,options:t,index:r}:void 0}var a=rt(n,i,e,r);return ot(n,a)?a:void 0}).filter(Zn)}function Pt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,dt(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Xr(n,e){return Pt(Vt(n,e))}function ot(n,e){var i=n.inputValue,r=i===void 0?"":i,t=e.data,a=e.isSelected,s=e.label,o=e.value;return(!Bt(n)||!a)&&kt(n,{label:s,value:o,data:t},r)}function Kr(n,e){var i=n.focusedValue,r=n.selectValue,t=r.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function Qr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Rt=function(e,i){return e.getOptionLabel(i)},xe=function(e,i){return e.getOptionValue(i)};function Lt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Tt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var r=xe(n,e);return i.some(function(t){return xe(n,t)===r})}function kt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Bt=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},Zr=1,jt=function(n){mn(i,n);var e=bn(i);function i(r){var t;if(xn(this,i),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.instancePrefix="",t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,u){var l=t.props,c=l.onChange,d=l.name;u.name=d,t.ariaOnChange(o,u),c(o,u)},t.setValue=function(o,u,l){var c=t.props,d=c.closeMenuOnSelect,g=c.isMulti,x=c.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),d&&(t.setState({inputIsHiddenAfterUpdate:!g}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:u,option:l})},t.selectOption=function(o){var u=t.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,g=t.state.selectValue,x=c&&t.isOptionSelected(o,g),E=t.isOptionDisabled(o,g);if(x){var b=t.getOptionValue(o);t.setValue(g.filter(function(v){return t.getOptionValue(v)!==b}),"deselect-option",o)}else if(!E)c?t.setValue([].concat(dt(g),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&t.blurInput()},t.removeValue=function(o){var u=t.props.isMulti,l=t.state.selectValue,c=t.getOptionValue(o),d=l.filter(function(x){return t.getOptionValue(x)!==c}),g=le(u,d,d[0]||null);t.onChange(g,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(le(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,u=t.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=le(o,c,c[0]||null);t.onChange(d,{action:"pop-value",removedValue:l})},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return Un.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(o){return Rt(t.props,o)},t.getOptionValue=function(o){return xe(t.props,o)},t.getStyles=function(o,u){var l=t.props.unstyled,c=_r[o](u,l);c.boxSizing="border-box";var d=t.props.styles[o];return d?d(c,u):c},t.getClassNames=function(o,u){var l,c;return(l=(c=t.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},t.getElementId=function(o){return"".concat(t.instancePrefix,"-").concat(o)},t.getComponents=function(){return hr(t.props)},t.buildCategorizedOptions=function(){return Vt(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Pt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,u){t.setState({ariaSelection:y({value:o},u)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var u=t.props,l=u.isMulti,c=u.menuIsOpen;t.focusInput(),c?(t.setState({inputIsHiddenAfterUpdate:!l}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(t.initialTouchX=l.clientX,t.initialTouchY=l.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-t.initialTouchX),d=Math.abs(l.clientY-t.initialTouchY),g=5;t.userIsDragging=c>g||d>g}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var u=t.props.inputValue,l=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(l,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){t.blockOptionHover||t.state.focusedOption===o||t.setState({focusedOption:o})},t.shouldHideSelectedOptions=function(){return Bt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var u=t.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,g=u.inputValue,x=u.isClearable,E=u.isDisabled,b=u.menuIsOpen,v=u.onKeyDown,m=u.tabSelectsValue,p=u.openMenuOnFocus,C=t.state,O=C.focusedOption,A=C.focusedValue,w=C.selectValue;if(!E&&!(typeof v=="function"&&(v(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||g)return;t.focusValue("previous");break;case"ArrowRight":if(!l||g)return;t.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(A)t.removeValue(A);else{if(!c)return;l?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!b||!m||!O||p&&t.isOptionSelected(O,w))return;t.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(b){if(!O||t.isComposing)return;t.selectOption(O);break}return;case"Escape":b?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:g}),t.onMenuClose()):x&&d&&t.clearValue();break;case" ":if(g)return;if(!b){t.openMenu("first");break}if(!O)return;t.selectOption(O);break;case"ArrowUp":b?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":b?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!b)return;t.focusOption("pageup");break;case"PageDown":if(!b)return;t.focusOption("pagedown");break;case"Home":if(!b)return;t.focusOption("first");break;case"End":if(!b)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.instancePrefix="react-select-"+(t.props.instanceId||++Zr),t.state.selectValue=Ue(r.value),r.menuIsOpen&&t.state.selectValue.length){var a=t.buildFocusableOptions(),s=a.indexOf(t.state.selectValue[0]);t.state.focusedOption=a[s]}return t}return En(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&We(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&t.isDisabled||u&&o&&!t.menuIsOpen)&&this.focusInput(),u&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(We(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(t){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),t==="up"?u=l>0?l-1:o.length-1:t==="down"?u=(l+1)%o.length:t==="pageup"?(u=l-a,u<0&&(u=0)):t==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):t==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):y(y({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,x=d.isRtl,E=d.options,b=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:b,isMulti:g,isRtl:x,options:E,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return Lt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Tt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return kt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,o=t.inputId,u=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,g=t.required,x=this.getComponents(),E=x.Input,b=this.state,v=b.inputIsHidden,m=b.ariaSelection,p=this.commonProps,C=o||this.getElementId("input"),O=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(E,D({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},O)):f.createElement(Ar,D({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ge,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,x=this.props,E=x.controlShouldRenderValue,b=x.isDisabled,v=x.isMulti,m=x.inputValue,p=x.placeholder,C=this.state,O=C.selectValue,A=C.focusedValue,w=C.isFocused;if(!this.hasValue()||!E)return m?null:f.createElement(d,D({},g,{key:"placeholder",isDisabled:b,isFocused:w,innerProps:{id:this.getElementId("placeholder")}}),p);if(v)return O.map(function(M,P){var $=M===A,_="".concat(t.getOptionLabel(M),"-").concat(t.getOptionValue(M));return f.createElement(s,D({},g,{components:{Container:o,Label:u,Remove:l},isFocused:$,isDisabled:b,key:_,index:P,removeProps:{onClick:function(){return t.removeValue(M)},onTouchEnd:function(){return t.removeValue(M)},onMouseDown:function(N){N.preventDefault()}},data:M}),t.formatOptionLabel(M,"value"))});if(m)return null;var I=O[0];return f.createElement(c,D({},g,{data:I,isDisabled:b}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,D({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,x=a.Option,E=this.commonProps,b=this.state.focusedOption,v=this.props,m=v.captureMenuScroll,p=v.inputValue,C=v.isLoading,O=v.loadingMessage,A=v.minMenuHeight,w=v.maxMenuHeight,I=v.menuIsOpen,M=v.menuPlacement,P=v.menuPosition,$=v.menuPortalTarget,_=v.menuShouldBlockScroll,B=v.menuShouldScrollIntoView,N=v.noOptionsMessage,R=v.onMenuScrollToTop,L=v.onMenuScrollToBottom;if(!I)return null;var H=function(j,Z){var J=j.type,G=j.data,q=j.isDisabled,ne=j.isSelected,re=j.label,Ut=j.value,je=b===G,$e=q?void 0:function(){return t.onOptionHover(G)},Wt=q?void 0:function(){return t.selectOption(G)},He="".concat(t.getElementId("option"),"-").concat(Z),Gt={id:He,onClick:Wt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1};return f.createElement(x,D({},E,{innerProps:Gt,data:G,isDisabled:q,isSelected:ne,key:He,label:re,type:J,value:Ut,isFocused:je,innerRef:je?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(j.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(k){if(k.type==="group"){var j=k.data,Z=k.options,J=k.index,G="".concat(t.getElementId("group"),"-").concat(J),q="".concat(G,"-heading");return f.createElement(s,D({},E,{key:G,data:j,options:Z,Heading:o,headingProps:{id:q,data:k.data},label:t.formatGroupLabel(k.data)}),k.options.map(function(ne){return H(ne,"".concat(J,"-").concat(ne.index))}))}else if(k.type==="option")return H(k,"".concat(k.index))});else if(C){var W=O({inputValue:p});if(W===null)return null;U=f.createElement(d,E,W)}else{var K=N({inputValue:p});if(K===null)return null;U=f.createElement(g,E,K)}var Q={minMenuHeight:A,maxMenuHeight:w,menuPlacement:M,menuPosition:P,menuShouldScrollIntoView:B},ee=f.createElement(ai,D({},E,Q),function(k){var j=k.ref,Z=k.placerProps,J=Z.placement,G=Z.maxHeight;return f.createElement(u,D({},E,Q,{innerRef:j,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove,id:t.getElementId("listbox")},isLoading:C,placement:J}),f.createElement(Lr,{captureEnabled:m,onTopArrive:R,onBottomArrive:L,lockEnabled:_},function(q){return f.createElement(l,D({},E,{innerRef:function(re){t.getMenuListRef(re),q(re)},isLoading:C,maxHeight:G,focusedOption:b}),U)}))});return $||P==="fixed"?f.createElement(c,D({},E,{appendTo:$,controlElement:this.controlRef,menuPlacement:M,menuPosition:P}),ee):ee}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return f.createElement(Br,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var g=d.map(function(b){return t.getOptionValue(b)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:g})}else{var x=d.length>0?d.map(function(b,v){return f.createElement("input",{key:"i-".concat(v),name:l,type:"hidden",value:t.getOptionValue(b)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,x)}else{var E=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:E})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(Sr,D({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,o=t.SelectContainer,u=t.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,x=l.menuIsOpen,E=this.state.isFocused,b=this.commonProps=this.getCommonProps();return f.createElement(o,D({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:E}),this.renderLiveRegion(),f.createElement(a,D({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:E,menuIsOpen:x}),f.createElement(u,D({},b,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,D({},b,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=t.options,x=t.value,E=t.menuIsOpen,b=t.inputValue,v=t.isMulti,m=Ue(x),p={};if(s&&(x!==s.value||g!==s.options||E!==s.menuIsOpen||b!==s.inputValue)){var C=E?Xr(t,m):[],O=o?Kr(a,m):null,A=Qr(a,C);p={selectValue:m,focusedOption:A,focusedValue:O,clearFocusValueOnUpdate:!1}}var w=u!=null&&t!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},I=l,M=c&&d;return c&&!M&&(I={value:le(v,m,m[0]||null),options:m,action:"initial-input-focus"},M=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),y(y(y({},p),w),{},{prevProps:t,ariaSelection:I,prevWasFocused:M})}}]),i}(f.Component);jt.defaultProps=Yr;var Jr=f.forwardRef(function(n,e){var i=Fn(n);return f.createElement(jt,D({ref:e},i))}),eo=Jr;const to=S.h1`
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
`,no=S.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`,io=S.div`
  @media screen and (min-width: 320px) {
    position: relative;
    margin-bottom: 16px;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ro=S.input`
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
`,oo=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`,ao=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,uo=S.div`
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
`,ut=S(eo)`
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
`;S.div``;const{QUERY:ce,RECOMMENDED:de,CATEGORY:$t}=Jt,so={[ce]:"",[$t]:"",[de]:""};function Ht({onProductsChange:n}){const[e,i]=f.useState(so),[r,t]=f.useState(""),[a,s]=f.useState([]),{isSuccess:o,currentData:u}=Zt();f.useEffect(()=>{if(o){const[p]=u,{productsCategories:C}=p;s(C)}},[u,o]),f.useEffect(()=>{n(e)},[e,n]);const l=()=>{t(""),i(p=>({...p,[ce]:""}))},c=["All","Recommended","Not recommended"],[d,g]=f.useState(null),[x,E]=f.useState(null),b=p=>{i(C=>({...C,[ce]:p.target.value.trim()})),t(p.target.value)},v=p=>{g(p),i(C=>({...C,[$t]:p.label}))},m=p=>{switch(E(p),p.label){case"Recommended":i(C=>({...C,[de]:[!1]}));break;case"Not recommended":i(C=>({...C,[de]:[!0]}));break;default:i(C=>({...C,[de]:null}))}};return h.jsx(h.Fragment,{children:h.jsxs(no,{children:[h.jsxs(io,{children:[h.jsx(ro,{type:"text",value:e[ce],onChange:b}),h.jsx(oo,{width:"18",height:"18",children:h.jsx("use",{href:`${pe}#search`})}),r.trim()&&h.jsx(ao,{onClick:l,children:h.jsx("svg",{width:"18",height:"18",children:h.jsx("use",{href:`${pe}#x-clean`})})})]}),h.jsxs(uo,{children:[h.jsx(at,{children:h.jsx(ut,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"#040404",borderRadius:"12px"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:v,options:a.map(p=>({label:p.charAt(0).toUpperCase()+p.slice(1)})),placeholder:"Categories"})}),h.jsx(at,{children:h.jsx(ut,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"none",border:"none"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"195px"}})},value:x,onChange:m,options:c.map(p=>({label:p})),placeholder:"All"})})]}),h.jsx(to,{children:"Filters"})]})})}Ht.propTypes={onProductsChange:T.func.isRequired};const lo=S.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: 375px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    width: auto;
  }
`,co=S.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,po=S.input`
  width: 100%;
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
`,fo=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,ho=S.input`
  width: 100%;
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
`,mo=S.span`
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
`,vo=S.div`
  display: flex;
`,go=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,bo=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,xo=S.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Eo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Co=S.button`
  padding: 12px 22px;
  border: none;
  color: #efede8;

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: #e6533c;
  line-height: calc(18 / 16);

  @media screen and (min-width: 375px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,So=S.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  color: #efede8;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  @media screen and (min-width: 375px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,wo=S.div`
  position: relative;
  width: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid ${({theme:n})=>n.color.orangeFirst};

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.mobile}) {
    width: 171px;
  }

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
    width: 244px;
  }
`,yo=S.p`
  color: ${({theme:n})=>n.color.white};

  font-size: 14px;
  line-height: 1.5;
  @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
    font-size: 16px;
  }
`,Fo=S.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:n})=>n.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;function Do({selectedDate:n,setSelectedDate:e}){const i=sn(n,"dd.MM.yyyy");return h.jsx(ln,{maxDate:new Date,onChange:e,value:n,children:h.jsxs(wo,{children:[h.jsx(yo,{children:i}),h.jsx(Fo,{children:h.jsx(en,{name:"calendar"})})]})})}function zt(n){const[e,i]=f.useState(new Date),{onClose:r,addProdSuccess:t,addProdError:a,product:s}=n,{weight:o,calories:u,_id:l,title:c}=s,[d,g]=f.useState(o),x=d*u/100,[E]=tn(),b={product_ID:l,date:new Date(e),amount:x,calories:u},v=async()=>{const{error:m}=await E(b);m?a(m.data.message):(r(),t(x))};return h.jsxs(lo,{children:[h.jsxs(co,{children:[h.jsx(po,{type:"text",value:c,readOnly:!0,disabled:!0}),h.jsxs(fo,{children:[h.jsx(ho,{type:"number",value:d,onChange:m=>g(m.target.value)}),h.jsx(mo,{children:"grams"})]})]}),h.jsxs(Eo,{children:[h.jsx(Do,{selectedDate:e,setSelectedDate:i}),h.jsxs(vo,{children:[h.jsx(go,{children:"Calories:"}),h.jsx(bo,{children:x})]})]}),h.jsxs(xo,{children:[h.jsx(Co,{onClick:v,children:"Add to diary"}),h.jsx(So,{onClick:r,children:"Cancel"})]})]})}zt.propTypes={onClose:T.func.isRequired,addProdSuccess:T.func.isRequired,addProdError:T.func.isRequired,product:T.shape({weight:T.number.isRequired,calories:T.number.isRequired,_id:T.string.isRequired,title:T.string.isRequired}).isRequired};const Oo=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 22px 111px;
  }
`,Ao=S.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,Io=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,Mo=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Vo=S.p`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,Po=S.span`
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Ro=S.button`
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
`,Lo=S.a`
  justify-content: center;
  display: flex;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,To=S.p`
  margin-right: 8px;
`;function ko(n){const{onClose:e,totalCalories:i}=n;return h.jsxs(Oo,{children:[h.jsx(Ao,{}),h.jsx(Io,{children:"Well Done"}),h.jsxs(Mo,{children:[h.jsx(Vo,{children:"Calories:"}),h.jsx(Po,{children:i})]}),h.jsx(Ro,{onClick:e,children:"Next product"}),h.jsxs(Lo,{href:"Diary",children:[h.jsx(To,{children:"To the diary"}),h.jsx("svg",{width:"16",height:"16",children:h.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const Bo=S.div`
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
`,jo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,$o=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`,Ho=S.div`
  display: flex;
  align-items: center;
`,zo=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${n=>n.recommended?"#419B09":"#E9101D"};
`,_o=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,No=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,Uo=S.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Wo=S.svg`
  width: 16px;
  height: 16px;
`,Go=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,qo=S.svg`
  width: 24px;
  height: 24px;
`,Yo=S.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Xo=S.div`
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
`;function _t({props:n,userGroupBlood:e}){const{weight:i,calories:r,category:t,title:a,groupBloodNotAllowed:s}=n,o=s[e],[u,l]=f.useState(!1),[c,d]=f.useState(!1),[g,x]=f.useState(!1),[E,b]=f.useState(null),[v,m]=f.useState(""),p=()=>{l(!0)},C=()=>{l(!1),d(!1),x(!1)},O=w=>{d(!0),b(w)},A=w=>{x(!0),m(w)};return h.jsxs(h.Fragment,{children:[h.jsxs(Bo,{children:[h.jsxs(jo,{children:[h.jsx($o,{children:"DIET"}),h.jsxs(Ho,{children:[h.jsx(zo,{recommended:o}),h.jsx(_o,{children:o?"Recommended":"Not recommended"}),h.jsxs(No,{onClick:p,children:[h.jsx(Uo,{children:"Add"}),h.jsx(Wo,{children:h.jsx("use",{href:`${pe}#arrow-add-prod-orange`})})]})]})]}),h.jsxs(Go,{children:[h.jsx(qo,{children:h.jsx("use",{href:`${pe}#run-man`})}),h.jsx(Yo,{children:a})]}),h.jsxs(Xo,{children:[h.jsxs(Ae,{children:["Calories:",h.jsx(Ie,{children:r})]}),h.jsxs(Ae,{category:!0,children:["Category:",h.jsx(Ie,{children:t})]}),h.jsxs(Ae,{children:["Weight:",h.jsx(Ie,{children:i})]})]})]}),h.jsx(Ce,{onClose:C,onShow:u,children:h.jsx(zt,{onClose:C,addProdSuccess:O,product:n,addProdError:A})}),h.jsx(Ce,{onClose:C,onShow:c,children:h.jsx(ko,{onClose:C,totalCalories:E,addProdError:A})}),h.jsx(Ce,{onClose:C,onShow:g,children:h.jsx(nn,{message:v,onClose:C})})]})}_t.propTypes={props:T.shape({weight:T.number.isRequired,calories:T.number.isRequired,category:T.string.isRequired,title:T.string.isRequired,groupBloodNotAllowed:T.object.isRequired}).isRequired,userGroupBlood:T.number};const Ko=S.ul`
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
`,Qo=S.li``,Zo=S.p`
  margin-bottom: 16px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Jo=S.span`
  color: #e6533c;
`,ea=S.span`
  margin-top: 16px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Nt({filter:n}){const[e,i]=f.useState([]),[r,t]=f.useState(null),[a,s]=f.useState(n),[o,u]=f.useState(1),[l,c]=f.useState(18),[d,g]=f.useState(1e3),[x,{isLoading:E,isError:b,error:v}]=rn(),m=on(),{isSuccess:p,data:C}=m,{ref:O}=cn({onChange:A=>{A&&u(w=>w+1)}});return f.useEffect(()=>{p&&t(C)},[C,p]),f.useEffect(()=>{if(n!==a&&(c(18),g(1e3),s(n),u(1)),d/l<o)return;(async()=>{try{const I=await x({page:o,...a}).unwrap();g(I.total),c(I.limit),i(o===1?[...I.data]:M=>[...M,...I.data])}catch(I){console.error("Error fetching data:",I.message)}})()},[a,x,o,n,d,l]),h.jsxs(h.Fragment,{children:[e.length>0?h.jsx(Ko,{children:e.map((A,w)=>h.jsx(Qo,{ref:w===e.length-1?O:null,children:h.jsx(_t,{props:A,userGroupBlood:r},A._id)},w))}):h.jsxs(h.Fragment,{children:[h.jsxs(Zo,{children:[h.jsx(Jo,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(ea,{children:"Try changing the search parameters."})]}),h.jsx(an,{isLoading:E,isError:b,error:v})]})}Nt.propTypes={filter:T.object};const ta=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: image-set(
    url(${pn}) 1x,
    url(${fn}) 2x,
    url(${hn}) 3x
  );
  background-size: 428px 716px;
`,na=S.div`
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
`;function sa(){const[n,e]=f.useState(null),[i,r]=f.useState(window.innerWidth>=1440),t=()=>{r(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),h.jsxs(h.Fragment,{children:[i&&h.jsx(ta,{}),h.jsxs(na,{children:[h.jsx(un,{text:"Products"}),h.jsx(Ht,{onProductsChange:e})]}),h.jsx(Nt,{filter:n})]})}export{sa as Products};
