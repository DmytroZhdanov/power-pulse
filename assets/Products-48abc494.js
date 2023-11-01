import{_ as Yt,V as lt,W as Xt,X as Kt,r as f,Y as y,Z as Qt,$ as oe,a0 as F,a1 as D,a2 as Zt,a3 as ct,n as S,P as k,a4 as Jt,j as h,f as pe,a5 as en,I as tn,a6 as nn,B as Ce,l as rn,a7 as on,N as an,E as ze}from"./index-fb06eb7c.js";import{T as un}from"./TitlePage-a734713c.js";import{u as sn}from"./index-50ffa737.js";import{f as ln,C as cn}from"./Calendar-fd3ea405.js";import"./tiny-warning.esm-c932d744.js";function dn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}const pn="/power-pulse/assets/bg_eating-526af03d.jpg",fn="/power-pulse/assets/bg_eating@2x-53f5e280.jpg",hn="/power-pulse/assets/bg_eating@3x-1df10d6d.jpg";function Pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function dt(t,e){if(t){if(typeof t=="string")return Pe(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Pe(t,e)}}function mn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Yt(t,e)}function fe(t){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},fe(t)}function vn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gn(t,e){if(e&&(lt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dn(t)}function bn(t){var e=vn();return function(){var r=fe(t),n;if(e){var a=fe(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return gn(this,n)}}function xn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ue(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Xt(r.key),r)}}function En(t,e,i){return e&&Ue(t.prototype,e),i&&Ue(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Cn(t){if(Array.isArray(t))return t}function Sn(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var r,n,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(t)).next,e===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(c){l=!0,n=c}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw n}}return o}}function yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(t,e){return Cn(t)||Sn(t,e)||dt(t,e)||yn()}function X(t,e){if(t==null)return{};var i=Kt(t,e),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var Fn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function wn(t){var e=t.defaultInputValue,i=e===void 0?"":e,r=t.defaultMenuIsOpen,n=r===void 0?!1:r,a=t.defaultValue,s=a===void 0?null:a,o=t.inputValue,u=t.menuIsOpen,l=t.onChange,c=t.onInputChange,d=t.onMenuClose,g=t.onMenuOpen,x=t.value,E=X(t,Fn),b=f.useState(o!==void 0?o:i),v=Y(b,2),m=v[0],p=v[1],C=f.useState(u!==void 0?u:n),O=Y(C,2),P=O[0],w=O[1],I=f.useState(x!==void 0?x:s),A=Y(I,2),M=A[0],$=A[1],U=f.useCallback(function(W,K){typeof l=="function"&&l(W,K),$(W)},[l]),B=f.useCallback(function(W,K){var Q;typeof c=="function"&&(Q=c(W,K)),p(Q!==void 0?Q:W)},[c]),_=f.useCallback(function(){typeof g=="function"&&g(),w(!0)},[g]),R=f.useCallback(function(){typeof d=="function"&&d(),w(!1)},[d]),L=o!==void 0?o:m,H=u!==void 0?u:P,N=x!==void 0?x:M;return y(y({},E),{},{inputValue:L,menuIsOpen:H,onChange:U,onInputChange:B,onMenuClose:R,onMenuOpen:_,value:N})}function Dn(t){if(Array.isArray(t))return Pe(t)}function On(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function An(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(t){return Dn(t)||On(t)||dt(t)||An()}function In(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const Pn=Math.min,Mn=Math.max,he=Math.round,ae=Math.floor,me=t=>({x:t,y:t});function Vn(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ft(t){return mt(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ht(t){var e;return(e=(mt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function mt(t){return t instanceof Node||t instanceof z(t).Node}function Me(t){return t instanceof Element||t instanceof z(t).Element}function Le(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function _e(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function vt(t){const{overflow:e,overflowX:i,overflowY:r,display:n}=ke(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(n)}function Rn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ln(t){return["html","body","#document"].includes(ft(t))}function ke(t){return z(t).getComputedStyle(t)}function kn(t){if(ft(t)==="html")return t;const e=t.assignedSlot||t.parentNode||_e(t)&&t.host||ht(t);return _e(e)?e.host:e}function gt(t){const e=kn(t);return Ln(e)?t.ownerDocument?t.ownerDocument.body:t.body:Le(e)&&vt(e)?e:gt(e)}function ve(t,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const n=gt(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),s=z(n);return a?e.concat(s,s.visualViewport||[],vt(n)?n:[],s.frameElement&&i?ve(s.frameElement):[]):e.concat(n,ve(n,[],i))}function Tn(t){const e=ke(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=Le(t),a=n?t.offsetWidth:i,s=n?t.offsetHeight:r,o=he(i)!==a||he(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function Te(t){return Me(t)?t:t.contextElement}function Se(t){const e=Te(t);if(!Le(e))return me(1);const i=e.getBoundingClientRect(),{width:r,height:n,$:a}=Tn(e);let s=(a?he(i.width):i.width)/r,o=(a?he(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const $n=me(0);function Bn(t){const e=z(t);return!Rn()||!e.visualViewport?$n:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function jn(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==z(t)?!1:e}function Ne(t,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),a=Te(t);let s=me(1);e&&(r?Me(r)&&(s=Se(r)):s=Se(t));const o=jn(a,i,r)?Bn(a):me(0);let u=(n.left+o.x)/s.x,l=(n.top+o.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const g=z(a),x=r&&Me(r)?z(r):r;let E=g.frameElement;for(;E&&r&&x!==g;){const b=Se(E),v=E.getBoundingClientRect(),m=ke(E),p=v.left+(E.clientLeft+parseFloat(m.paddingLeft))*b.x,C=v.top+(E.clientTop+parseFloat(m.paddingTop))*b.y;u*=b.x,l*=b.y,c*=b.x,d*=b.y,u+=p,l+=C,E=z(E).frameElement}}return Vn({width:c,height:d,x:u,y:l})}function Hn(t,e){let i=null,r;const n=ht(t);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:g}=t.getBoundingClientRect();if(o||e(),!d||!g)return;const x=ae(c),E=ae(n.clientWidth-(l+d)),b=ae(n.clientHeight-(c+g)),v=ae(l),p={rootMargin:-x+"px "+-E+"px "+-b+"px "+-v+"px",threshold:Mn(0,Pn(1,u))||1};let C=!0;function O(P){const w=P[0].intersectionRatio;if(w!==u){if(!C)return s();w?s(!1,w):r=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{i=new IntersectionObserver(O,{...p,root:n.ownerDocument})}catch{i=new IntersectionObserver(O,p)}i.observe(t)}return s(!0),a}function zn(t,e,i,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=Te(t),c=n||a?[...l?ve(l):[],...ve(e)]:[];c.forEach(m=>{n&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&o?Hn(l,i):null;let g=-1,x=null;s&&(x=new ResizeObserver(m=>{let[p]=m;p&&p.target===l&&x&&(x.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{x&&x.observe(e)})),i()}),l&&!u&&x.observe(l),x.observe(e));let E,b=u?Ne(t):null;u&&v();function v(){const m=Ne(t);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&i(),b=m,E=requestAnimationFrame(v)}return i(),()=>{c.forEach(m=>{n&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),x&&x.disconnect(),x=null,u&&cancelAnimationFrame(E)}}var Ve=f.useLayoutEffect,Un=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ge=function(){};function _n(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Nn(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var a=[].concat(r);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(_n(t,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var We=function(e){return Jn(e)?e.filter(Boolean):lt(e)==="object"&&e!==null?[e]:[]},bt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=X(e,Un);return y({},i)},V=function(e,i,r){var n=e.cx,a=e.getStyles,s=e.getClassNames,o=e.className;return{css:a(i,e),className:n(r??{},s(i,e),o)}};function Ee(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Wn(t){return Ee(t)?window.innerHeight:t.clientHeight}function xt(t){return Ee(t)?window.pageYOffset:t.scrollTop}function be(t,e){if(Ee(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Gn(t){var e=getComputedStyle(t),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function qn(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e}function ue(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ge,n=xt(t),a=e-n,s=10,o=0;function u(){o+=s;var l=qn(o,n,a,i);be(t,l),o<i?window.requestAnimationFrame(u):r(t)}u()}function Ge(t,e){var i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=e.offsetHeight/3;r.bottom+n>i.bottom?be(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):r.top-n<i.top&&be(t,Math.max(e.offsetTop-n,0))}function Yn(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function qe(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Xn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Et=!1,Kn={get passive(){return Et=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",ge,Kn),se.removeEventListener("p",ge,!1));var Qn=Et;function Zn(t){return t!=null}function Jn(t){return Array.isArray(t)}function le(t,e,i){return t?e:i}var ei=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var a=Object.entries(e).filter(function(s){var o=Y(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},ti=["children","innerProps"],ni=["children","innerProps"];function ii(t){var e=t.maxHeight,i=t.menuEl,r=t.minHeight,n=t.placement,a=t.shouldScroll,s=t.isFixedPosition,o=t.controlHeight,u=Gn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,g=i.getBoundingClientRect(),x=g.bottom,E=g.height,b=g.top,v=i.offsetParent.getBoundingClientRect(),m=v.top,p=s?window.innerHeight:Wn(u),C=xt(u),O=parseInt(getComputedStyle(i).marginBottom,10),P=parseInt(getComputedStyle(i).marginTop,10),w=m-P,I=p-b,A=w+C,M=d-C-b,$=x-p+C+O,U=C+b-P,B=160;switch(n){case"auto":case"bottom":if(I>=E)return{placement:"bottom",maxHeight:e};if(M>=E&&!s)return a&&ue(u,$,B),{placement:"bottom",maxHeight:e};if(!s&&M>=r||s&&I>=r){a&&ue(u,$,B);var _=s?I-O:M-O;return{placement:"bottom",maxHeight:_}}if(n==="auto"||s){var R=e,L=s?w:A;return L>=r&&(R=Math.min(L-O-o,e)),{placement:"top",maxHeight:R}}if(n==="bottom")return a&&be(u,$),{placement:"bottom",maxHeight:e};break;case"top":if(w>=E)return{placement:"top",maxHeight:e};if(A>=E&&!s)return a&&ue(u,U,B),{placement:"top",maxHeight:e};if(!s&&A>=r||s&&w>=r){var H=e;return(!s&&A>=r||s&&w>=r)&&(H=s?w-P:A-P),a&&ue(u,U,B),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function ri(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Ct=function(e){return e==="auto"?"bottom":e},oi=function(e,i){var r,n=e.placement,a=e.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return y((r={label:"menu"},oe(r,ri(n),"100%"),oe(r,"position","absolute"),oe(r,"width","100%"),oe(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},St=f.createContext(null),ai=function(e){var i=e.children,r=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,o=e.menuShouldScrollIntoView,u=e.theme,l=f.useContext(St)||{},c=l.setPortalPlacement,d=f.useRef(null),g=f.useState(n),x=Y(g,2),E=x[0],b=x[1],v=f.useState(null),m=Y(v,2),p=m[0],C=m[1],O=u.spacing.controlHeight;return Ve(function(){var P=d.current;if(P){var w=s==="fixed",I=o&&!w,A=ii({maxHeight:n,menuEl:P,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:w,controlHeight:O});b(A.maxHeight),C(A.placement),c==null||c(A.placement)}},[n,a,s,o,r,c,O]),i({ref:d,placerProps:y(y({},e),{},{placement:p||Ct(a),maxHeight:E})})},ui=function(e){var i=e.children,r=e.innerRef,n=e.innerProps;return F("div",D({},V(e,"menu",{menu:!0}),{ref:r},n),i)},si=ui,li=function(e,i){var r=e.maxHeight,n=e.theme.spacing.baseUnit;return y({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:n,paddingTop:n})},ci=function(e){var i=e.children,r=e.innerProps,n=e.innerRef,a=e.isMulti;return F("div",D({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},r),i)},yt=function(e,i){var r=e.theme,n=r.spacing.baseUnit,a=r.colors;return y({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},di=yt,pi=yt,fi=function(e){var i=e.children,r=i===void 0?"No options":i,n=e.innerProps,a=X(e,ti);return F("div",D({},V(y(y({},a),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},hi=function(e){var i=e.children,r=i===void 0?"Loading...":i,n=e.innerProps,a=X(e,ni);return F("div",D({},V(y(y({},a),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},mi=function(e){var i=e.rect,r=e.offset,n=e.position;return{left:i.left,position:n,top:r,width:i.width,zIndex:1}},vi=function(e){var i=e.appendTo,r=e.children,n=e.controlElement,a=e.innerProps,s=e.menuPlacement,o=e.menuPosition,u=f.useRef(null),l=f.useRef(null),c=f.useState(Ct(s)),d=Y(c,2),g=d[0],x=d[1],E=f.useMemo(function(){return{setPortalPlacement:x}},[]),b=f.useState(null),v=Y(b,2),m=v[0],p=v[1],C=f.useCallback(function(){if(n){var I=Yn(n),A=o==="fixed"?0:window.pageYOffset,M=I[g]+A;(M!==(m==null?void 0:m.offset)||I.left!==(m==null?void 0:m.rect.left)||I.width!==(m==null?void 0:m.rect.width))&&p({offset:M,rect:I})}},[n,o,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Ve(function(){C()},[C]);var O=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&u.current&&(l.current=zn(n,u.current,C,{elementResize:"ResizeObserver"in window}))},[n,C]);Ve(function(){O()},[O]);var P=f.useCallback(function(I){u.current=I,O()},[O]);if(!i&&o!=="fixed"||!m)return null;var w=F("div",D({ref:P},V(y(y({},e),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),r);return F(St.Provider,{value:E},i?Zt.createPortal(w,i):w)},gi=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},bi=function(e){var i=e.children,r=e.innerProps,n=e.isDisabled,a=e.isRtl;return F("div",D({},V(e,"container",{"--is-disabled":n,"--is-rtl":a}),r),i)},xi=function(e,i){var r=e.theme.spacing,n=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Ei=function(e){var i=e.children,r=e.innerProps,n=e.isMulti,a=e.hasValue;return F("div",D({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),r),i)},Ci=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Si=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"indicatorsContainer",{indicators:!0}),r),i)},Ye,yi=["size"],Fi=["innerProps","isRtl","size"],wi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(e){var i=e.size,r=X(e,yi);return F("svg",D({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:wi},r))},$e=function(e){return F(Ft,D({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},wt=function(e){return F(Ft,D({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Dt=function(e,i){var r=e.isFocused,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},Di=Dt,Oi=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||F(wt,null))},Ai=Dt,Ii=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||F($e,null))},Pi=function(e,i){var r=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Mi=function(e){var i=e.innerProps;return F("span",D({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Vi=Qt(Ye||(Ye=In([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ri=function(e,i){var r=e.isFocused,n=e.size,a=e.theme,s=a.colors,o=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},ye=function(e){var i=e.delay,r=e.offset;return F("span",{css:ct({animation:"".concat(Vi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Li=function(e){var i=e.innerProps,r=e.isRtl,n=e.size,a=n===void 0?4:n,s=X(e,Fi);return F("div",D({},V(y(y({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),F(ye,{delay:0,offset:r}),F(ye,{delay:160,offset:!0}),F(ye,{delay:320,offset:!r}))},ki=function(e,i){var r=e.isDisabled,n=e.isFocused,a=e.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:n?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},Ti=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,a=e.innerRef,s=e.innerProps,o=e.menuIsOpen;return F("div",D({ref:a},V(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},$i=Ti,Bi=["data"],ji=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Hi=function(e){var i=e.children,r=e.cx,n=e.getStyles,a=e.getClassNames,s=e.Heading,o=e.headingProps,u=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return F("div",D({},V(e,"group",{group:!0}),u),F(s,D({},o,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:r}),l),F("div",null,i))},zi=function(e,i){var r=e.theme,n=r.colors,a=r.spacing;return y({label:"group",cursor:"default",display:"block"},i?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ui=function(e){var i=bt(e);i.data;var r=X(i,Bi);return F("div",D({},V(e,"groupHeading",{"group-heading":!0}),r))},_i=Hi,Ni=["innerRef","isDisabled","isHidden","inputClassName"],Wi=function(e,i){var r=e.isDisabled,n=e.value,a=e.theme,s=a.spacing,o=a.colors;return y(y({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},Gi),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},Ot={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Gi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ot)},qi=function(e){return y({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Ot)},Yi=function(e){var i=e.cx,r=e.value,n=bt(e),a=n.innerRef,s=n.isDisabled,o=n.isHidden,u=n.inputClassName,l=X(n,Ni);return F("div",D({},V(e,"input",{"input-container":!0}),{"data-value":r||""}),F("input",D({className:i({input:!0},u),ref:a,style:qi(o),disabled:s},l)))},Xi=Yi,Ki=function(e,i){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors;return y({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},Qi=function(e,i){var r=e.theme,n=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return y({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Zi=function(e,i){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors,o=e.isFocused;return y({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},At=function(e){var i=e.children,r=e.innerProps;return F("div",r,i)},Ji=At,er=At;function tr(t){var e=t.children,i=t.innerProps;return F("div",D({role:"button"},i),e||F($e,{size:14}))}var nr=function(e){var i=e.children,r=e.components,n=e.data,a=e.innerProps,s=e.isDisabled,o=e.removeProps,u=e.selectProps,l=r.Container,c=r.Label,d=r.Remove;return F(l,{data:n,innerProps:y(y({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},F(c,{data:n,innerProps:y({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),F(d,{data:n,innerProps:y(y({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},ir=nr,rr=function(e,i){var r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.theme,o=s.spacing,u=s.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:n?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},or=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.innerRef,o=e.innerProps;return F("div",D({},V(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},ar=or,ur=function(e,i){var r=e.theme,n=r.spacing,a=r.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},sr=function(e){var i=e.children,r=e.innerProps;return F("div",D({},V(e,"placeholder",{placeholder:!0}),r),i)},lr=sr,cr=function(e,i){var r=e.isDisabled,n=e.theme,a=n.spacing,s=n.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},dr=function(e){var i=e.children,r=e.isDisabled,n=e.innerProps;return F("div",D({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),i)},pr=dr,fr={ClearIndicator:Ii,Control:$i,DropdownIndicator:Oi,DownChevron:wt,CrossIcon:$e,Group:_i,GroupHeading:Ui,IndicatorsContainer:Si,IndicatorSeparator:Mi,Input:Xi,LoadingIndicator:Li,Menu:si,MenuList:ci,MenuPortal:vi,LoadingMessage:hi,NoOptionsMessage:fi,MultiValue:ir,MultiValueContainer:Ji,MultiValueLabel:er,MultiValueRemove:tr,Option:ar,Placeholder:lr,SelectContainer:bi,SingleValue:pr,ValueContainer:Ei},hr=function(e){return y(y({},fr),e.components)},Xe=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function mr(t,e){return!!(t===e||Xe(t)&&Xe(e))}function vr(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!mr(t[i],e[i]))return!1;return!0}function gr(t,e){e===void 0&&(e=vr);var i=null;function r(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return r.clear=function(){i=null},r}var br={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},xr=function(e){return F("span",D({css:br},e))},Ke=xr,Er={guidance:function(e){var i=e.isSearchable,r=e.isMulti,n=e.isDisabled,a=e.tabSelectsValue,s=e.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(n?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,n=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,n=e.options,a=e.label,s=a===void 0?"":a,o=e.selectValue,u=e.isDisabled,l=e.isSelected,c=function(E,b){return E&&E.length?"".concat(E.indexOf(b)+1," of ").concat(E.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,r),".");if(i==="menu"){var d=u?" disabled":"",g="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(g,", ").concat(c(n,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Cr=function(e){var i=e.ariaSelection,r=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,s=e.isFocused,o=e.selectValue,u=e.selectProps,l=e.id,c=u.ariaLiveMessages,d=u.getOptionLabel,g=u.inputValue,x=u.isMulti,E=u.isOptionDisabled,b=u.isSearchable,v=u.menuIsOpen,m=u.options,p=u.screenReaderStatus,C=u.tabSelectsValue,O=u["aria-label"],P=u["aria-live"],w=f.useMemo(function(){return y(y({},Er),c||{})},[c]),I=f.useMemo(function(){var R="";if(i&&w.onChange){var L=i.option,H=i.options,N=i.removedValue,W=i.removedValues,K=i.value,Q=function(q){return Array.isArray(q)?null:q},ee=N||L||Q(K),T=ee?d(ee):"",j=H||W||void 0,Z=j?j.map(d):[],J=y({isDisabled:ee&&E(ee,o),label:T,labels:Z},i);R=w.onChange(J)}return R},[i,w,E,o,d]),A=f.useMemo(function(){var R="",L=r||n,H=!!(r&&o&&o.includes(r));if(L&&w.onFocus){var N={focused:L,label:d(L),isDisabled:E(L,o),isSelected:H,options:a,context:L===r?"menu":"value",selectValue:o};R=w.onFocus(N)}return R},[r,n,d,E,w,a,o]),M=f.useMemo(function(){var R="";if(v&&m.length&&w.onFilter){var L=p({count:a.length});R=w.onFilter({inputValue:g,resultsMessage:L})}return R},[a,g,v,w,m,p]),$=f.useMemo(function(){var R="";if(w.guidance){var L=n?"value":v?"menu":"input";R=w.guidance({"aria-label":O,context:L,isDisabled:r&&E(r,o),isMulti:x,isSearchable:b,tabSelectsValue:C})}return R},[O,r,n,x,E,b,v,w,o,C]),U="".concat(A," ").concat(M," ").concat($),B=F(f.Fragment,null,F("span",{id:"aria-selection"},I),F("span",{id:"aria-context"},U)),_=(i==null?void 0:i.action)==="initial-input-focus";return F(f.Fragment,null,F(Ke,{id:l},_&&B),F(Ke,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text"},s&&!_&&B))},Sr=Cr,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],yr=new RegExp("["+Re.map(function(t){return t.letters}).join("")+"]","g"),It={};for(var Fe=0;Fe<Re.length;Fe++)for(var we=Re[Fe],De=0;De<we.letters.length;De++)It[we.letters[De]]=we.base;var Pt=function(e){return e.replace(yr,function(i){return It[i]})},Fr=gr(Pt),Qe=function(e){return e.replace(/^\s+|\s+$/g,"")},wr=function(e){return"".concat(e.label," ").concat(e.value)},Dr=function(e){return function(i,r){if(i.data.__isNew__)return!0;var n=y({ignoreCase:!0,ignoreAccents:!0,stringify:wr,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,s=n.ignoreAccents,o=n.stringify,u=n.trim,l=n.matchFrom,c=u?Qe(r):r,d=u?Qe(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Fr(c),d=Pt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Or=["innerRef"];function Ar(t){var e=t.innerRef,i=X(t,Or),r=ei(i,"onExited","in","enter","exit","appear");return F("input",D({ref:e},r,{css:ct({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ir=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Pr(t){var e=t.isEnabled,i=t.onBottomArrive,r=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(v,m){if(l.current!==null){var p=l.current,C=p.scrollTop,O=p.scrollHeight,P=p.clientHeight,w=l.current,I=m>0,A=O-P-C,M=!1;A>m&&s.current&&(r&&r(v),s.current=!1),I&&o.current&&(a&&a(v),o.current=!1),I&&m>A?(i&&!s.current&&i(v),w.scrollTop=O,M=!0,s.current=!0):!I&&-m>C&&(n&&!o.current&&n(v),w.scrollTop=0,M=!0,o.current=!0),M&&Ir(v)}},[i,r,n,a]),d=f.useCallback(function(v){c(v,v.deltaY)},[c]),g=f.useCallback(function(v){u.current=v.changedTouches[0].clientY},[]),x=f.useCallback(function(v){var m=u.current-v.changedTouches[0].clientY;c(v,m)},[c]),E=f.useCallback(function(v){if(v){var m=Qn?{passive:!1}:!1;v.addEventListener("wheel",d,m),v.addEventListener("touchstart",g,m),v.addEventListener("touchmove",x,m)}},[x,g,d]),b=f.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",g,!1),v.removeEventListener("touchmove",x,!1))},[x,g,d]);return f.useEffect(function(){if(e){var v=l.current;return E(v),function(){b(v)}}},[e,E,b]),function(v){l.current=v}}var Ze=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(t){t.preventDefault()}function tt(t){t.stopPropagation()}function nt(){var t=this.scrollTop,e=this.scrollHeight,i=t+this.offsetHeight;t===0?this.scrollTop=1:i===e&&(this.scrollTop=t-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var rt=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function Mr(t){var e=t.isEnabled,i=t.accountForScrollbars,r=i===void 0?!0:i,n=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(rt){var l=document.body,c=l&&l.style;if(r&&Ze.forEach(function(E){var b=c&&c[E];n.current[E]=b}),r&&ie<1){var d=parseInt(n.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,x=window.innerWidth-g+d||0;Object.keys(Je).forEach(function(E){var b=Je[E];c&&(c[E]=b)}),c&&(c.paddingRight="".concat(x,"px"))}l&&it()&&(l.addEventListener("touchmove",et,te),u&&(u.addEventListener("touchstart",nt,te),u.addEventListener("touchmove",tt,te))),ie+=1}},[r]),o=f.useCallback(function(u){if(rt){var l=document.body,c=l&&l.style;ie=Math.max(ie-1,0),r&&ie<1&&Ze.forEach(function(d){var g=n.current[d];c&&(c[d]=g)}),l&&it()&&(l.removeEventListener("touchmove",et,te),u&&(u.removeEventListener("touchstart",nt,te),u.removeEventListener("touchmove",tt,te)))}},[r]);return f.useEffect(function(){if(e){var u=a.current;return s(u),function(){o(u)}}},[e,s,o]),function(u){a.current=u}}var Vr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Rr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Lr(t){var e=t.children,i=t.lockEnabled,r=t.captureEnabled,n=r===void 0?!0:r,a=t.onBottomArrive,s=t.onBottomLeave,o=t.onTopArrive,u=t.onTopLeave,l=Pr({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=Mr({isEnabled:i}),d=function(x){l(x),c(x)};return F(f.Fragment,null,i&&F("div",{onClick:Vr,css:Rr}),e(d))}var kr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Tr=function(e){var i=e.name,r=e.onFocus;return F("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:kr,value:"",onChange:function(){}})},$r=Tr,Br=function(e){return e.label},jr=function(e){return e.label},Hr=function(e){return e.value},zr=function(e){return!!e.isDisabled},Ur={clearIndicator:Ai,container:gi,control:ki,dropdownIndicator:Di,group:ji,groupHeading:zi,indicatorsContainer:Ci,indicatorSeparator:Pi,input:Wi,loadingIndicator:Ri,loadingMessage:pi,menu:oi,menuList:li,menuPortal:mi,multiValue:Ki,multiValueLabel:Qi,multiValueRemove:Zi,noOptionsMessage:di,option:rr,placeholder:ur,singleValue:cr,valueContainer:xi},_r={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Nr=4,Mt=4,Wr=38,Gr=Mt*2,qr={baseUnit:Mt,controlHeight:Wr,menuGutter:Gr},Oe={borderRadius:Nr,colors:_r,spacing:qr},Yr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:qe(),captureMenuScroll:!qe(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Dr(),formatGroupLabel:Br,getOptionLabel:jr,getOptionValue:Hr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:zr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Xn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ot(t,e,i,r){var n=kt(t,e,i),a=Tt(t,e,i),s=Lt(t,e),o=xe(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:s,value:o,index:r}}function Vt(t,e){return t.options.map(function(i,r){if("options"in i){var n=i.options.map(function(s,o){return ot(t,s,e,o)}).filter(function(s){return at(t,s)});return n.length>0?{type:"group",data:i,options:n,index:r}:void 0}var a=ot(t,i,e,r);return at(t,a)?a:void 0}).filter(Zn)}function Rt(t){return t.reduce(function(e,i){return i.type==="group"?e.push.apply(e,pt(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Xr(t,e){return Rt(Vt(t,e))}function at(t,e){var i=t.inputValue,r=i===void 0?"":i,n=e.data,a=e.isSelected,s=e.label,o=e.value;return(!Bt(t)||!a)&&$t(t,{label:s,value:o,data:n},r)}function Kr(t,e){var i=t.focusedValue,r=t.selectValue,n=r.indexOf(i);if(n>-1){var a=e.indexOf(i);if(a>-1)return i;if(n<e.length)return e[n]}return null}function Qr(t,e){var i=t.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Lt=function(e,i){return e.getOptionLabel(i)},xe=function(e,i){return e.getOptionValue(i)};function kt(t,e,i){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,i):!1}function Tt(t,e,i){if(i.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,i);var r=xe(t,e);return i.some(function(n){return xe(t,n)===r})}function $t(t,e,i){return t.filterOption?t.filterOption(e,i):!0}var Bt=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},Zr=1,jt=function(t){mn(i,t);var e=bn(i);function i(r){var n;if(xn(this,i),n=e.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.instancePrefix="",n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,u){var l=n.props,c=l.onChange,d=l.name;u.name=d,n.ariaOnChange(o,u),c(o,u)},n.setValue=function(o,u,l){var c=n.props,d=c.closeMenuOnSelect,g=c.isMulti,x=c.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:x}),d&&(n.setState({inputIsHiddenAfterUpdate:!g}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:u,option:l})},n.selectOption=function(o){var u=n.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,g=n.state.selectValue,x=c&&n.isOptionSelected(o,g),E=n.isOptionDisabled(o,g);if(x){var b=n.getOptionValue(o);n.setValue(g.filter(function(v){return n.getOptionValue(v)!==b}),"deselect-option",o)}else if(!E)c?n.setValue([].concat(pt(g),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&n.blurInput()},n.removeValue=function(o){var u=n.props.isMulti,l=n.state.selectValue,c=n.getOptionValue(o),d=l.filter(function(x){return n.getOptionValue(x)!==c}),g=le(u,d,d[0]||null);n.onChange(g,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(le(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,u=n.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=le(o,c,c[0]||null);n.onChange(d,{action:"pop-value",removedValue:l})},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return Nn.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(o){return Lt(n.props,o)},n.getOptionValue=function(o){return xe(n.props,o)},n.getStyles=function(o,u){var l=n.props.unstyled,c=Ur[o](u,l);c.boxSizing="border-box";var d=n.props.styles[o];return d?d(c,u):c},n.getClassNames=function(o,u){var l,c;return(l=(c=n.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},n.getElementId=function(o){return"".concat(n.instancePrefix,"-").concat(o)},n.getComponents=function(){return hr(n.props)},n.buildCategorizedOptions=function(){return Vt(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Rt(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,u){n.setState({ariaSelection:y({value:o},u)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var u=n.props,l=u.isMulti,c=u.menuIsOpen;n.focusInput(),c?(n.setState({inputIsHiddenAfterUpdate:!l}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(n.initialTouchX=l.clientX,n.initialTouchY=l.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-n.initialTouchX),d=Math.abs(l.clientY-n.initialTouchY),g=5;n.userIsDragging=c>g||d>g}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var u=n.props.inputValue,l=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(l,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){n.blockOptionHover||n.state.focusedOption===o||n.setState({focusedOption:o})},n.shouldHideSelectedOptions=function(){return Bt(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var u=n.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,g=u.inputValue,x=u.isClearable,E=u.isDisabled,b=u.menuIsOpen,v=u.onKeyDown,m=u.tabSelectsValue,p=u.openMenuOnFocus,C=n.state,O=C.focusedOption,P=C.focusedValue,w=C.selectValue;if(!E&&!(typeof v=="function"&&(v(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||g)return;n.focusValue("previous");break;case"ArrowRight":if(!l||g)return;n.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(P)n.removeValue(P);else{if(!c)return;l?n.popValue():x&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!b||!m||!O||p&&n.isOptionSelected(O,w))return;n.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(b){if(!O||n.isComposing)return;n.selectOption(O);break}return;case"Escape":b?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:g}),n.onMenuClose()):x&&d&&n.clearValue();break;case" ":if(g)return;if(!b){n.openMenu("first");break}if(!O)return;n.selectOption(O);break;case"ArrowUp":b?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":b?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!b)return;n.focusOption("pageup");break;case"PageDown":if(!b)return;n.focusOption("pagedown");break;case"Home":if(!b)return;n.focusOption("first");break;case"End":if(!b)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.instancePrefix="react-select-"+(n.props.instanceId||++Zr),n.state.selectValue=We(r.value),r.menuIsOpen&&n.state.selectValue.length){var a=n.buildFocusableOptions(),s=a.indexOf(n.state.selectValue[0]);n.state.focusedOption=a[s]}return n}return En(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&n.isDisabled||u&&o&&!n.menuIsOpen)&&this.focusInput(),u&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(n){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),n==="up"?u=l>0?l-1:o.length-1:n==="down"?u=(l+1)%o.length:n==="pageup"?(u=l-a,u<0&&(u=0)):n==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):n==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):y(y({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,x=d.isRtl,E=d.options,b=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:b,isMulti:g,isRtl:x,options:E,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return kt(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Tt(this.props,n,a)}},{key:"filterOption",value:function(n,a){return $t(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,o=n.inputId,u=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,g=n.required,x=this.getComponents(),E=x.Input,b=this.state,v=b.inputIsHidden,m=b.ariaSelection,p=this.commonProps,C=o||this.getElementId("input"),O=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(E,D({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},O)):f.createElement(Ar,D({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ge,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,x=this.props,E=x.controlShouldRenderValue,b=x.isDisabled,v=x.isMulti,m=x.inputValue,p=x.placeholder,C=this.state,O=C.selectValue,P=C.focusedValue,w=C.isFocused;if(!this.hasValue()||!E)return m?null:f.createElement(d,D({},g,{key:"placeholder",isDisabled:b,isFocused:w,innerProps:{id:this.getElementId("placeholder")}}),p);if(v)return O.map(function(A,M){var $=A===P,U="".concat(n.getOptionLabel(A),"-").concat(n.getOptionValue(A));return f.createElement(s,D({},g,{components:{Container:o,Label:u,Remove:l},isFocused:$,isDisabled:b,key:U,index:M,removeProps:{onClick:function(){return n.removeValue(A)},onTouchEnd:function(){return n.removeValue(A)},onMouseDown:function(_){_.preventDefault()}},data:A}),n.formatOptionLabel(A,"value"))});if(m)return null;var I=O[0];return f.createElement(c,D({},g,{data:I,isDisabled:b}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,D({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,x=a.Option,E=this.commonProps,b=this.state.focusedOption,v=this.props,m=v.captureMenuScroll,p=v.inputValue,C=v.isLoading,O=v.loadingMessage,P=v.minMenuHeight,w=v.maxMenuHeight,I=v.menuIsOpen,A=v.menuPlacement,M=v.menuPosition,$=v.menuPortalTarget,U=v.menuShouldBlockScroll,B=v.menuShouldScrollIntoView,_=v.noOptionsMessage,R=v.onMenuScrollToTop,L=v.onMenuScrollToBottom;if(!I)return null;var H=function(j,Z){var J=j.type,G=j.data,q=j.isDisabled,ne=j.isSelected,re=j.label,Wt=j.value,Be=b===G,je=q?void 0:function(){return n.onOptionHover(G)},Gt=q?void 0:function(){return n.selectOption(G)},He="".concat(n.getElementId("option"),"-").concat(Z),qt={id:He,onClick:Gt,onMouseMove:je,onMouseOver:je,tabIndex:-1};return f.createElement(x,D({},E,{innerProps:qt,data:G,isDisabled:q,isSelected:ne,key:He,label:re,type:J,value:Wt,isFocused:Be,innerRef:Be?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(j.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var j=T.data,Z=T.options,J=T.index,G="".concat(n.getElementId("group"),"-").concat(J),q="".concat(G,"-heading");return f.createElement(s,D({},E,{key:G,data:j,options:Z,Heading:o,headingProps:{id:q,data:T.data},label:n.formatGroupLabel(T.data)}),T.options.map(function(ne){return H(ne,"".concat(J,"-").concat(ne.index))}))}else if(T.type==="option")return H(T,"".concat(T.index))});else if(C){var W=O({inputValue:p});if(W===null)return null;N=f.createElement(d,E,W)}else{var K=_({inputValue:p});if(K===null)return null;N=f.createElement(g,E,K)}var Q={minMenuHeight:P,maxMenuHeight:w,menuPlacement:A,menuPosition:M,menuShouldScrollIntoView:B},ee=f.createElement(ai,D({},E,Q),function(T){var j=T.ref,Z=T.placerProps,J=Z.placement,G=Z.maxHeight;return f.createElement(u,D({},E,Q,{innerRef:j,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove,id:n.getElementId("listbox")},isLoading:C,placement:J}),f.createElement(Lr,{captureEnabled:m,onTopArrive:R,onBottomArrive:L,lockEnabled:U},function(q){return f.createElement(l,D({},E,{innerRef:function(re){n.getMenuListRef(re),q(re)},isLoading:C,maxHeight:G,focusedOption:b}),N)}))});return $||M==="fixed"?f.createElement(c,D({},E,{appendTo:$,controlElement:this.controlRef,menuPlacement:A,menuPosition:M}),ee):ee}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return f.createElement($r,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var g=d.map(function(b){return n.getOptionValue(b)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:g})}else{var x=d.length>0?d.map(function(b,v){return f.createElement("input",{key:"i-".concat(v),name:l,type:"hidden",value:n.getOptionValue(b)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,x)}else{var E=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:E})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(Sr,D({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,o=n.SelectContainer,u=n.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,x=l.menuIsOpen,E=this.state.isFocused,b=this.commonProps=this.getCommonProps();return f.createElement(o,D({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:E}),this.renderLiveRegion(),f.createElement(a,D({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:E,menuIsOpen:x}),f.createElement(u,D({},b,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,D({},b,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=n.options,x=n.value,E=n.menuIsOpen,b=n.inputValue,v=n.isMulti,m=We(x),p={};if(s&&(x!==s.value||g!==s.options||E!==s.menuIsOpen||b!==s.inputValue)){var C=E?Xr(n,m):[],O=o?Kr(a,m):null,P=Qr(a,C);p={selectValue:m,focusedOption:P,focusedValue:O,clearFocusValueOnUpdate:!1}}var w=u!=null&&n!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},I=l,A=c&&d;return c&&!A&&(I={value:le(v,m,m[0]||null),options:m,action:"initial-input-focus"},A=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),y(y(y({},p),w),{},{prevProps:n,ariaSelection:I,prevWasFocused:A})}}]),i}(f.Component);jt.defaultProps=Yr;var Jr=f.forwardRef(function(t,e){var i=wn(t);return f.createElement(jt,D({ref:e},i))}),eo=Jr;const to=S.p`
  display: none;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
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
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    display: flex;
    gap: 16px;
  }
`,io=S.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,ro=S.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.color.grayFirst};
  background-color: transparent;
  color: ${({theme:t})=>t.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  &:focus {
    border: 1px solid ${({theme:t})=>t.color.orangeFirst};
    outline: none;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 236px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,oo=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: ${({theme:t})=>t.color.grayThird};
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
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,ut=S.div`
  flex: 1;
  z-index: 2;
  background-color: transparent;
`,st=S(eo)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.color.grayFirst};
  /*background: rgba(0, 0, 0, 0.5);*/
  color: ${({theme:t})=>t.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  .css-18hi8su {
    background: transparent;
  }
`,{QUERY:ce,RECOMMENDED:de,CATEGORY:Ht}=en,so={[ce]:"",[Ht]:"",[de]:""};function zt({onProductsChange:t}){const[e,i]=f.useState(so),[r,n]=f.useState(""),[a,s]=f.useState([]),{isSuccess:o,currentData:u}=Jt();f.useEffect(()=>{if(o){const[p]=u,{productsCategories:C}=p;s(C)}},[u,o]),f.useEffect(()=>{t(e)},[e,t]);const l=()=>{n(""),i(p=>({...p,[ce]:""}))},c=["All","Recommended","Not recommended"],[d,g]=f.useState(null),[x,E]=f.useState(null),b=p=>{i(C=>({...C,[ce]:p.target.value.trim()})),n(p.target.value)},v=p=>{g(p),i(C=>({...C,[Ht]:p.label}))},m=p=>{switch(E(p),p.label){case"Recommended":i(C=>({...C,[de]:[!1]}));break;case"Not recommended":i(C=>({...C,[de]:[!0]}));break;default:i(C=>({...C,[de]:null}))}};return h.jsx(h.Fragment,{children:h.jsxs(no,{children:[h.jsxs(io,{children:[h.jsx(ro,{type:"text",value:e[ce],onChange:b}),h.jsx(oo,{width:"18",height:"18",children:h.jsx("use",{href:`${pe}#search`})}),r.trim()&&h.jsx(ao,{onClick:l,children:h.jsx("svg",{width:"18",height:"18",children:h.jsx("use",{href:`${pe}#x-clean`})})})]}),h.jsxs(uo,{children:[h.jsx(ut,{children:h.jsx(st,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"#040404",borderRadius:"12px"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:v,options:a.map(p=>({label:p.charAt(0).toUpperCase()+p.slice(1)})),placeholder:"Categories"})}),h.jsx(ut,{children:h.jsx(st,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"none",border:"none"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"195px"}})},value:x,onChange:m,options:c.map(p=>({label:p})),placeholder:"All"})})]}),h.jsx(to,{children:"Filters"})]})})}zt.propTypes={onProductsChange:k.func.isRequired};const lo=S.div`
  position: relative;
  width: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid ${({theme:t})=>t.color.orangeFirst};

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.mobile}) {
    width: 171px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 244px;
  }
`,co=S.p`
  color: ${({theme:t})=>t.color.white};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    font-size: 16px;
  }
`,po=S.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:t})=>t.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;function fo({selectedDate:t,setSelectedDate:e}){const i=ln(t,"dd.MM.yyyy");return h.jsx(cn,{maxDate:new Date,onChange:e,value:t,children:h.jsxs(lo,{children:[h.jsx(co,{children:i}),h.jsx(po,{children:h.jsx(tn,{name:"calendar"})})]})})}const ho=S.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.mobile}) {
    width: 320px;
  }
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding: 48px 32px;
    width: auto;
  }
`,mo=S.div`
  position: relative;
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 415px;
  }
`,vo=S.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${({theme:t})=>t.color.orangeFirst};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({theme:t})=>t.color.grayFirst};

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,go=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    display: inline-block;
  }
`,bo=S.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.color.orangeFirst};
  background: rgba(0, 0, 0, 0.5);
  color: ${({theme:t})=>t.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,xo=S.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${({theme:t})=>t.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    right: 16px;
    top: 12px;
  }
`,Eo=S.div`
  display: flex;
`,Co=S.p`
  color: ${({theme:t})=>t.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,So=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,yo=S.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    justify-content: flex-start;
  }
`,Fo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin-bottom: 64px;
  }
`,wo=S.button`
  padding: 12px 22px;
  border: none;
  color: ${({theme:t})=>t.color.white};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:t})=>t.color.orangeFirst};
  line-height: calc(18 / 16);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Do=S.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.color.grayFirst};
  background: transparent;
  color: ${({theme:t})=>t.color.white};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Ut(t){const[e,i]=f.useState(new Date),{onClose:r,addProdSuccess:n,addProdError:a,product:s}=t,{weight:o,calories:u,_id:l,title:c}=s,[d,g]=f.useState(o),x=d*u/100,[E]=nn(),b={product_ID:l,date:new Date(e),amount:x,calories:u},v=async()=>{const{error:m}=await E(b);m?a(m.data.message):(r(),n(x))};return h.jsxs(ho,{children:[h.jsxs(mo,{children:[h.jsx(vo,{type:"text",value:c,readOnly:!0,disabled:!0}),h.jsxs(go,{children:[h.jsx(bo,{type:"number",value:d,onChange:m=>g(m.target.value)}),h.jsx(xo,{children:"grams"})]})]}),h.jsxs(Fo,{children:[h.jsx(fo,{selectedDate:e,setSelectedDate:i}),h.jsxs(Eo,{children:[h.jsx(Co,{children:"Calories:"}),h.jsx(So,{children:x})]})]}),h.jsxs(yo,{children:[h.jsx(wo,{onClick:v,children:"Add to diary"}),h.jsx(Do,{onClick:r,children:"Cancel"})]})]})}Ut.propTypes={onClose:k.func.isRequired,addProdSuccess:k.func.isRequired,addProdError:k.func.isRequired,product:k.shape({weight:k.number.isRequired,calories:k.number.isRequired,_id:k.string.isRequired,title:k.string.isRequired}).isRequired};const Oo=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin: 22px 111px;
  }
`,Ao=S.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin-bottom: 19px;
  }
`,Io=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,Po=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,Mo=S.p`
  margin-right: 8px;
  color: ${({theme:t})=>t.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,Vo=S.span`
  color: ${({theme:t})=>t.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,Ro=S.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color: ${({theme:t})=>t.color.white};
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:t})=>t.color.orangeFirst};
  line-height: calc(18 / 16);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: calc(24 / 16);
  }
`,Lo=S.a`
  justify-content: center;
  display: flex;
  color: ${({theme:t})=>t.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,ko=S.p`
  margin-right: 8px;
`;function To({onClose:t,totalCalories:e}){return h.jsxs(Oo,{children:[h.jsx(Ao,{}),h.jsx(Io,{children:"Well Done"}),h.jsxs(Po,{children:[h.jsx(Mo,{children:"Calories:"}),h.jsx(Vo,{children:e})]}),h.jsx(Ro,{onClick:t,children:"Next product"}),h.jsxs(Lo,{href:"Diary",children:[h.jsx(ko,{children:"To the diary"}),h.jsx("svg",{width:"16",height:"16",children:h.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const $o=S.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t.color.grayDisabled};
  margin-bottom: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    width: 405px;
  }
`,Bo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,jo=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:t})=>t.color.grayFourth};
  color: ${({theme:t})=>t.color.fullWhite};
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
  background-color: ${({recommended:t,theme:e})=>t?e.color.circleGreen:e.color.circleRed};
`,Uo=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,_o=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,No=S.p`
  margin-right: 8px;
  color: ${({theme:t})=>t.color.orangeFirst};
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

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
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

  ${t=>t.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,Ie=S.span`
  color: ${({theme:t})=>t.color.white};
  padding-left: 8px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-left: 4px;
  }
`;function _t({props:t,userGroupBlood:e}){const{weight:i,calories:r,category:n,title:a,groupBloodNotAllowed:s}=t,o=s[e],[u,l]=f.useState(!1),[c,d]=f.useState(!1),[g,x]=f.useState(!1),[E,b]=f.useState(null),[v,m]=f.useState(""),p=()=>{l(!0)},C=()=>{l(!1),d(!1),x(!1)},O=w=>{d(!0),b(w)},P=w=>{x(!0),m(w)};return h.jsxs(h.Fragment,{children:[h.jsxs($o,{children:[h.jsxs(Bo,{children:[h.jsx(jo,{children:"DIET"}),h.jsxs(Ho,{children:[h.jsx(zo,{recommended:o}),h.jsx(Uo,{children:o?"Recommended":"Not recommended"}),h.jsxs(_o,{onClick:p,children:[h.jsx(No,{children:"Add"}),h.jsx(Wo,{children:h.jsx("use",{href:`${pe}#arrow-add-prod-orange`})})]})]})]}),h.jsxs(Go,{children:[h.jsx(qo,{children:h.jsx("use",{href:`${pe}#run-man`})}),h.jsx(Yo,{children:a})]}),h.jsxs(Xo,{children:[h.jsxs(Ae,{children:["Calories:",h.jsx(Ie,{children:r})]}),h.jsxs(Ae,{category:!0,children:["Category:",h.jsx(Ie,{children:n})]}),h.jsxs(Ae,{children:["Weight:",h.jsx(Ie,{children:i})]})]})]}),h.jsx(Ce,{onClose:C,onShow:u,children:h.jsx(Ut,{onClose:C,addProdSuccess:O,product:t,addProdError:P})}),h.jsx(Ce,{onClose:C,onShow:c,children:h.jsx(To,{onClose:C,totalCalories:E,addProdError:P})}),h.jsx(Ce,{onClose:C,onShow:g,children:h.jsx(rn,{message:v,onClose:C})})]})}_t.propTypes={props:k.shape({weight:k.number.isRequired,calories:k.number.isRequired,category:k.string.isRequired,title:k.string.isRequired,groupBloodNotAllowed:k.object.isRequired}).isRequired,userGroupBlood:k.number};const Ko=S.ul`
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    height: 660px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;

    overflow-y: scroll;
  }
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    width: 850px;
    height: 487px;
  }
`,Qo=S.p`
  margin-bottom: 16px;
  color: ${({theme:t})=>t.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Zo=S.span`
  color: #e6533c;
`,Jo=S.span`
  margin-top: 16px;
  color: ${({theme:t})=>t.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Nt({filter:t}){const[e,i]=f.useState([]),[r,n]=f.useState(null),[a,s]=f.useState(t),[o,u]=f.useState(1),[l,c]=f.useState(18),[d,g]=f.useState(1e3),[x,{isLoading:E,isError:b,error:v}]=on(),{isSuccess:m,data:p,isLoading:C,isError:O,error:P}=an(),{ref:w}=sn({onChange:I=>{I&&u(A=>A+1)}});return f.useEffect(()=>{m&&n(p)},[m,p]),f.useEffect(()=>{if(t!==a&&(c(18),g(1e3),s(t),u(1)),d/l<o)return;(async()=>{try{const M=await x({page:o,...a}).unwrap();g(M.total),c(M.limit),i(o===1?[...M.data]:$=>[...$,...M.data])}catch(M){console.error("Error fetching data:",M.message)}})()},[a,x,o,t,d,l]),h.jsxs(h.Fragment,{children:[e.length>0?h.jsx(Ko,{children:e.map((I,A)=>h.jsx("li",{ref:A===e.length-1?w:null,children:h.jsx(_t,{props:I,userGroupBlood:r},I._id)},A))}):h.jsxs(h.Fragment,{children:[h.jsxs(Qo,{children:[h.jsx(Zo,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(Jo,{children:"Try changing the search parameters."})]}),h.jsx(ze,{isLoading:E,isError:b,error:v}),h.jsx(ze,{isLoading:C,isError:O,error:P})]})}Nt.propTypes={filter:k.object};const ea=S.div`
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
`,ta=S.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    gap: 32px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
  }
`;function ua(){const[t,e]=f.useState(null),[i,r]=f.useState(window.innerWidth>=1440),n=()=>{r(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),h.jsxs(h.Fragment,{children:[i&&h.jsx(ea,{}),h.jsxs(ta,{children:[h.jsx(un,{text:"Products"}),h.jsx(zt,{onProductsChange:e})]}),h.jsx(Nt,{filter:t})]})}export{ua as Products};
