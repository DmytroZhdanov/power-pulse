import{_ as Zt,Z as ct,$ as Jt,a0 as en,r as f,a1 as w,a2 as tn,a3 as ae,a4 as F,a5 as D,a6 as nn,a7 as dt,n as S,P,u as ke,a8 as rn,s as Le,j as h,o as ie,a9 as on,I as an,aa as un,L as sn,R as ln,M as Ce,N as cn,ab as dn,S as pn}from"./index-942e5375.js";import{T as fn}from"./TitlePage-65bc4017.js";import{u as hn}from"./index-43ad004c.js";import{f as pt,C as mn}from"./Calendar-637e625f.js";function gn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}const vn="/power-pulse/assets/bg_eating-391a2df6.jpg",bn="/power-pulse/assets/bg_eating@2x-9a4ec783.jpg",xn="/power-pulse/assets/bg_eating@3x-8653e571.jpg",En="/power-pulse/assets/Alcoholicdrinks-486482f5.jpg",Cn="/power-pulse/assets/Berries-590d1129.jpg",Sn="/power-pulse/assets/Cereals-5593b81d.jpg",wn="/power-pulse/assets/Dairy-b7076684.jpg",yn="/power-pulse/assets/Driedfruits-963d3720.jpg",Fn="/power-pulse/assets/Eggs-12459143.jpg",Dn="/power-pulse/assets/Fish-05ac2864.jpg",On="/power-pulse/assets/Flour-12c71bd2.jpg",An="/power-pulse/assets/Fruits-e1566249.jpg",In="/power-pulse/assets/Meat-ab0145d5.jpg",Mn="/power-pulse/assets/Mushrooms-ec1a81b1.jpg",Pn="/power-pulse/assets/Nuts-f54973d6.jpg",Vn="/power-pulse/assets/Oilsandfats-e99bbb70.jpg",Rn="/power-pulse/assets/Poppy-bbcc307a.jpg",kn="/power-pulse/assets/Sausage-c6a576ec.jpg",Ln="/power-pulse/assets/Seeds-c88eb697.jpg",$n="/power-pulse/assets/Sesame-109b0fb3.jpg",Tn="/power-pulse/assets/Softdrinks-17da42b0.jpg",Bn="/power-pulse/assets/Vegetablesandherbs-73ff911b.jpg";function Me(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function ft(e,t){if(e){if(typeof e=="string")return Me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Me(e,t)}}function jn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zt(e,t)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(e)}function Hn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zn(e,t){if(t&&(ct(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gn(e)}function Nn(e){var t=Hn();return function(){var i=fe(e),n;if(t){var a=fe(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return zn(this,n)}}function _n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Jt(i.key),i)}}function Un(e,t,r){return t&&_e(e.prototype,t),r&&_e(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wn(e){if(Array.isArray(e))return e}function qn(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var i,n,a,s,o=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(i=a.call(r)).done)&&(o.push(i.value),o.length!==t);u=!0);}catch(c){l=!0,n=c}finally{try{if(!u&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return o}}function Gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){return Wn(e)||qn(e,t)||ft(e,t)||Gn()}function X(e,t){if(e==null)return{};var r=en(e,t),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var Yn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Xn(e){var t=e.defaultInputValue,r=t===void 0?"":t,i=e.defaultMenuIsOpen,n=i===void 0?!1:i,a=e.defaultValue,s=a===void 0?null:a,o=e.inputValue,u=e.menuIsOpen,l=e.onChange,c=e.onInputChange,d=e.onMenuClose,v=e.onMenuOpen,E=e.value,b=X(e,Yn),x=f.useState(o!==void 0?o:r),m=Y(x,2),g=m[0],A=m[1],C=f.useState(u!==void 0?u:n),y=Y(C,2),M=y[0],p=y[1],O=f.useState(E!==void 0?E:s),I=Y(O,2),V=I[0],j=I[1],N=f.useCallback(function(W,K){typeof l=="function"&&l(W,K),j(W)},[l]),T=f.useCallback(function(W,K){var Q;typeof c=="function"&&(Q=c(W,K)),A(Q!==void 0?Q:W)},[c]),_=f.useCallback(function(){typeof v=="function"&&v(),p(!0)},[v]),k=f.useCallback(function(){typeof d=="function"&&d(),p(!1)},[d]),L=o!==void 0?o:g,H=u!==void 0?u:M,U=E!==void 0?E:V;return w(w({},b),{},{inputValue:L,menuIsOpen:H,onChange:N,onInputChange:T,onMenuClose:k,onMenuOpen:_,value:U})}function Kn(e){if(Array.isArray(e))return Me(e)}function Qn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e){return Kn(e)||Qn(e)||ft(e)||Zn()}function Jn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const er=Math.min,tr=Math.max,he=Math.round,ue=Math.floor,me=e=>({x:e,y:e});function nr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function mt(e){return vt(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function gt(e){var t;return(t=(vt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vt(e){return e instanceof Node||e instanceof z(e).Node}function Pe(e){return e instanceof Element||e instanceof z(e).Element}function $e(e){return e instanceof HTMLElement||e instanceof z(e).HTMLElement}function Ue(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function bt(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=Te(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(n)}function rr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ir(e){return["html","body","#document"].includes(mt(e))}function Te(e){return z(e).getComputedStyle(e)}function or(e){if(mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ue(e)&&e.host||gt(e);return Ue(t)?t.host:t}function xt(e){const t=or(e);return ir(t)?e.ownerDocument?e.ownerDocument.body:e.body:$e(t)&&bt(t)?t:xt(t)}function ge(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const n=xt(e),a=n===((i=e.ownerDocument)==null?void 0:i.body),s=z(n);return a?t.concat(s,s.visualViewport||[],bt(n)?n:[],s.frameElement&&r?ge(s.frameElement):[]):t.concat(n,ge(n,[],r))}function ar(e){const t=Te(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=$e(e),a=n?e.offsetWidth:r,s=n?e.offsetHeight:i,o=he(r)!==a||he(i)!==s;return o&&(r=a,i=s),{width:r,height:i,$:o}}function Be(e){return Pe(e)?e:e.contextElement}function Se(e){const t=Be(e);if(!$e(t))return me(1);const r=t.getBoundingClientRect(),{width:i,height:n,$:a}=ar(t);let s=(a?he(r.width):r.width)/i,o=(a?he(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const ur=me(0);function sr(e){const t=z(e);return!rr()||!t.visualViewport?ur:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lr(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==z(e)?!1:t}function We(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=Be(e);let s=me(1);t&&(i?Pe(i)&&(s=Se(i)):s=Se(e));const o=lr(a,r,i)?sr(a):me(0);let u=(n.left+o.x)/s.x,l=(n.top+o.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const v=z(a),E=i&&Pe(i)?z(i):i;let b=v.frameElement;for(;b&&i&&E!==v;){const x=Se(b),m=b.getBoundingClientRect(),g=Te(b),A=m.left+(b.clientLeft+parseFloat(g.paddingLeft))*x.x,C=m.top+(b.clientTop+parseFloat(g.paddingTop))*x.y;u*=x.x,l*=x.y,c*=x.x,d*=x.y,u+=A,l+=C,b=z(b).frameElement}}return nr({width:c,height:d,x:u,y:l})}function cr(e,t){let r=null,i;const n=gt(e);function a(){clearTimeout(i),r&&r.disconnect(),r=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:v}=e.getBoundingClientRect();if(o||t(),!d||!v)return;const E=ue(c),b=ue(n.clientWidth-(l+d)),x=ue(n.clientHeight-(c+v)),m=ue(l),A={rootMargin:-E+"px "+-b+"px "+-x+"px "+-m+"px",threshold:tr(0,er(1,u))||1};let C=!0;function y(M){const p=M[0].intersectionRatio;if(p!==u){if(!C)return s();p?s(!1,p):i=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{r=new IntersectionObserver(y,{...A,root:n.ownerDocument})}catch{r=new IntersectionObserver(y,A)}r.observe(e)}return s(!0),a}function dr(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,l=Be(e),c=n||a?[...l?ge(l):[],...ge(t)]:[];c.forEach(g=>{n&&g.addEventListener("scroll",r,{passive:!0}),a&&g.addEventListener("resize",r)});const d=l&&o?cr(l,r):null;let v=-1,E=null;s&&(E=new ResizeObserver(g=>{let[A]=g;A&&A.target===l&&E&&(E.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{E&&E.observe(t)})),r()}),l&&!u&&E.observe(l),E.observe(t));let b,x=u?We(e):null;u&&m();function m(){const g=We(e);x&&(g.x!==x.x||g.y!==x.y||g.width!==x.width||g.height!==x.height)&&r(),x=g,b=requestAnimationFrame(m)}return r(),()=>{c.forEach(g=>{n&&g.removeEventListener("scroll",r),a&&g.removeEventListener("resize",r)}),d&&d(),E&&E.disconnect(),E=null,u&&cancelAnimationFrame(b)}}var Ve=f.useLayoutEffect,pr=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function fr(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function hr(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var a=[].concat(i);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(fr(e,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var qe=function(t){return wr(t)?t.filter(Boolean):ct(t)==="object"&&t!==null?[t]:[]},Et=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=X(t,pr);return w({},r)},R=function(t,r,i){var n=t.cx,a=t.getStyles,s=t.getClassNames,o=t.className;return{css:a(r,t),className:n(i??{},s(r,t),o)}};function Ee(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function mr(e){return Ee(e)?window.innerHeight:e.clientHeight}function Ct(e){return Ee(e)?window.pageYOffset:e.scrollTop}function be(e,t){if(Ee(e)){window.scrollTo(0,t);return}e.scrollTop=t}function gr(e){var t=getComputedStyle(e),r=t.position==="absolute",i=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var n=e;n=n.parentElement;)if(t=getComputedStyle(n),!(r&&t.position==="static")&&i.test(t.overflow+t.overflowY+t.overflowX))return n;return document.documentElement}function vr(e,t,r,i){return r*((e=e/i-1)*e*e+1)+t}function se(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,n=Ct(e),a=t-n,s=10,o=0;function u(){o+=s;var l=vr(o,n,a,r);be(e,l),o<r?window.requestAnimationFrame(u):i(e)}u()}function Ge(e,t){var r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),n=t.offsetHeight/3;i.bottom+n>r.bottom?be(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+n,e.scrollHeight)):i.top-n<r.top&&be(e,Math.max(t.offsetTop-n,0))}function br(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ye(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function xr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var St=!1,Er={get passive(){return St=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",ve,Er),le.removeEventListener("p",ve,!1));var Cr=St;function Sr(e){return e!=null}function wr(e){return Array.isArray(e)}function ce(e,t,r){return e?t:r}var yr=function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var a=Object.entries(t).filter(function(s){var o=Y(s,1),u=o[0];return!i.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},Fr=["children","innerProps"],Dr=["children","innerProps"];function Or(e){var t=e.maxHeight,r=e.menuEl,i=e.minHeight,n=e.placement,a=e.shouldScroll,s=e.isFixedPosition,o=e.controlHeight,u=gr(r),l={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),E=v.bottom,b=v.height,x=v.top,m=r.offsetParent.getBoundingClientRect(),g=m.top,A=s?window.innerHeight:mr(u),C=Ct(u),y=parseInt(getComputedStyle(r).marginBottom,10),M=parseInt(getComputedStyle(r).marginTop,10),p=g-M,O=A-x,I=p+C,V=d-C-x,j=E-A+C+y,N=C+x-M,T=160;switch(n){case"auto":case"bottom":if(O>=b)return{placement:"bottom",maxHeight:t};if(V>=b&&!s)return a&&se(u,j,T),{placement:"bottom",maxHeight:t};if(!s&&V>=i||s&&O>=i){a&&se(u,j,T);var _=s?O-y:V-y;return{placement:"bottom",maxHeight:_}}if(n==="auto"||s){var k=t,L=s?p:I;return L>=i&&(k=Math.min(L-y-o,t)),{placement:"top",maxHeight:k}}if(n==="bottom")return a&&be(u,j),{placement:"bottom",maxHeight:t};break;case"top":if(p>=b)return{placement:"top",maxHeight:t};if(I>=b&&!s)return a&&se(u,N,T),{placement:"top",maxHeight:t};if(!s&&I>=i||s&&p>=i){var H=t;return(!s&&I>=i||s&&p>=i)&&(H=s?p-M:I-M),a&&se(u,N,T),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Ar(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var wt=function(t){return t==="auto"?"bottom":t},Ir=function(t,r){var i,n=t.placement,a=t.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return w((i={label:"menu"},ae(i,Ar(n),"100%"),ae(i,"position","absolute"),ae(i,"width","100%"),ae(i,"zIndex",1),i),r?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},yt=f.createContext(null),Mr=function(t){var r=t.children,i=t.minMenuHeight,n=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,o=t.menuShouldScrollIntoView,u=t.theme,l=f.useContext(yt)||{},c=l.setPortalPlacement,d=f.useRef(null),v=f.useState(n),E=Y(v,2),b=E[0],x=E[1],m=f.useState(null),g=Y(m,2),A=g[0],C=g[1],y=u.spacing.controlHeight;return Ve(function(){var M=d.current;if(M){var p=s==="fixed",O=o&&!p,I=Or({maxHeight:n,menuEl:M,minHeight:i,placement:a,shouldScroll:O,isFixedPosition:p,controlHeight:y});x(I.maxHeight),C(I.placement),c==null||c(I.placement)}},[n,a,s,o,i,c,y]),r({ref:d,placerProps:w(w({},t),{},{placement:A||wt(a),maxHeight:b})})},Pr=function(t){var r=t.children,i=t.innerRef,n=t.innerProps;return F("div",D({},R(t,"menu",{menu:!0}),{ref:i},n),r)},Vr=Pr,Rr=function(t,r){var i=t.maxHeight,n=t.theme.spacing.baseUnit;return w({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},kr=function(t){var r=t.children,i=t.innerProps,n=t.innerRef,a=t.isMulti;return F("div",D({},R(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},i),r)},Ft=function(t,r){var i=t.theme,n=i.spacing.baseUnit,a=i.colors;return w({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Lr=Ft,$r=Ft,Tr=function(t){var r=t.children,i=r===void 0?"No options":r,n=t.innerProps,a=X(t,Fr);return F("div",D({},R(w(w({},a),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Br=function(t){var r=t.children,i=r===void 0?"Loading...":r,n=t.innerProps,a=X(t,Dr);return F("div",D({},R(w(w({},a),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},jr=function(t){var r=t.rect,i=t.offset,n=t.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},Hr=function(t){var r=t.appendTo,i=t.children,n=t.controlElement,a=t.innerProps,s=t.menuPlacement,o=t.menuPosition,u=f.useRef(null),l=f.useRef(null),c=f.useState(wt(s)),d=Y(c,2),v=d[0],E=d[1],b=f.useMemo(function(){return{setPortalPlacement:E}},[]),x=f.useState(null),m=Y(x,2),g=m[0],A=m[1],C=f.useCallback(function(){if(n){var O=br(n),I=o==="fixed"?0:window.pageYOffset,V=O[v]+I;(V!==(g==null?void 0:g.offset)||O.left!==(g==null?void 0:g.rect.left)||O.width!==(g==null?void 0:g.rect.width))&&A({offset:V,rect:O})}},[n,o,v,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Ve(function(){C()},[C]);var y=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&u.current&&(l.current=dr(n,u.current,C,{elementResize:"ResizeObserver"in window}))},[n,C]);Ve(function(){y()},[y]);var M=f.useCallback(function(O){u.current=O,y()},[y]);if(!r&&o!=="fixed"||!g)return null;var p=F("div",D({ref:M},R(w(w({},t),{},{offset:g.offset,position:o,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),i);return F(yt.Provider,{value:b},r?nn.createPortal(p,r):p)},zr=function(t){var r=t.isDisabled,i=t.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Nr=function(t){var r=t.children,i=t.innerProps,n=t.isDisabled,a=t.isRtl;return F("div",D({},R(t,"container",{"--is-disabled":n,"--is-rtl":a}),i),r)},_r=function(t,r){var i=t.theme.spacing,n=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Ur=function(t){var r=t.children,i=t.innerProps,n=t.isMulti,a=t.hasValue;return F("div",D({},R(t,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),i),r)},Wr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},qr=function(t){var r=t.children,i=t.innerProps;return F("div",D({},R(t,"indicatorsContainer",{indicators:!0}),i),r)},Xe,Gr=["size"],Yr=["innerProps","isRtl","size"],Xr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dt=function(t){var r=t.size,i=X(t,Gr);return F("svg",D({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Xr},i))},je=function(t){return F(Dt,D({size:20},t),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ot=function(t){return F(Dt,D({size:20},t),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},At=function(t,r){var i=t.isFocused,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?s.neutral60:s.neutral20,padding:a*2,":hover":{color:i?s.neutral80:s.neutral40}})},Kr=At,Qr=function(t){var r=t.children,i=t.innerProps;return F("div",D({},R(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||F(Ot,null))},Zr=At,Jr=function(t){var r=t.children,i=t.innerProps;return F("div",D({},R(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||F(je,null))},ei=function(t,r){var i=t.isDisabled,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},ti=function(t){var r=t.innerProps;return F("span",D({},r,R(t,"indicatorSeparator",{"indicator-separator":!0})))},ni=tn(Xe||(Xe=Jn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ri=function(t,r){var i=t.isFocused,n=t.size,a=t.theme,s=a.colors,o=a.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?s.neutral60:s.neutral20,padding:o*2})},we=function(t){var r=t.delay,i=t.offset;return F("span",{css:dt({animation:"".concat(ni," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},ii=function(t){var r=t.innerProps,i=t.isRtl,n=t.size,a=n===void 0?4:n,s=X(t,Yr);return F("div",D({},R(w(w({},s),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),F(we,{delay:0,offset:i}),F(we,{delay:160,offset:!0}),F(we,{delay:320,offset:!i}))},oi=function(t,r){var i=t.isDisabled,n=t.isFocused,a=t.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:n?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},ai=function(t){var r=t.children,i=t.isDisabled,n=t.isFocused,a=t.innerRef,s=t.innerProps,o=t.menuIsOpen;return F("div",D({ref:a},R(t,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":o}),s,{"aria-disabled":i||void 0}),r)},ui=ai,si=["data"],li=function(t,r){var i=t.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},ci=function(t){var r=t.children,i=t.cx,n=t.getStyles,a=t.getClassNames,s=t.Heading,o=t.headingProps,u=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return F("div",D({},R(t,"group",{group:!0}),u),F(s,D({},o,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:i}),l),F("div",null,r))},di=function(t,r){var i=t.theme,n=i.colors,a=i.spacing;return w({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},pi=function(t){var r=Et(t);r.data;var i=X(r,si);return F("div",D({},R(t,"groupHeading",{"group-heading":!0}),i))},fi=ci,hi=["innerRef","isDisabled","isHidden","inputClassName"],mi=function(t,r){var i=t.isDisabled,n=t.value,a=t.theme,s=a.spacing,o=a.colors;return w(w({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},gi),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},It={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},gi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},It)},vi=function(t){return w({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},It)},bi=function(t){var r=t.cx,i=t.value,n=Et(t),a=n.innerRef,s=n.isDisabled,o=n.isHidden,u=n.inputClassName,l=X(n,hi);return F("div",D({},R(t,"input",{"input-container":!0}),{"data-value":i||""}),F("input",D({className:r({input:!0},u),ref:a,style:vi(o),disabled:s},l)))},xi=bi,Ei=function(t,r){var i=t.theme,n=i.spacing,a=i.borderRadius,s=i.colors;return w({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},Ci=function(t,r){var i=t.theme,n=i.borderRadius,a=i.colors,s=t.cropWithEllipsis;return w({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Si=function(t,r){var i=t.theme,n=i.spacing,a=i.borderRadius,s=i.colors,o=t.isFocused;return w({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Mt=function(t){var r=t.children,i=t.innerProps;return F("div",i,r)},wi=Mt,yi=Mt;function Fi(e){var t=e.children,r=e.innerProps;return F("div",D({role:"button"},r),t||F(je,{size:14}))}var Di=function(t){var r=t.children,i=t.components,n=t.data,a=t.innerProps,s=t.isDisabled,o=t.removeProps,u=t.selectProps,l=i.Container,c=i.Label,d=i.Remove;return F(l,{data:n,innerProps:w(w({},R(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},F(c,{data:n,innerProps:w({},R(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},r),F(d,{data:n,innerProps:w(w({},R(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},o),selectProps:u}))},Oi=Di,Ai=function(t,r){var i=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.theme,o=s.spacing,u=s.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?u.primary:n?u.primary25:"transparent",color:i?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?u.primary:u.primary50}})},Ii=function(t){var r=t.children,i=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.innerRef,o=t.innerProps;return F("div",D({},R(t,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":i},o),r)},Mi=Ii,Pi=function(t,r){var i=t.theme,n=i.spacing,a=i.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Vi=function(t){var r=t.children,i=t.innerProps;return F("div",D({},R(t,"placeholder",{placeholder:!0}),i),r)},Ri=Vi,ki=function(t,r){var i=t.isDisabled,n=t.theme,a=n.spacing,s=n.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Li=function(t){var r=t.children,i=t.isDisabled,n=t.innerProps;return F("div",D({},R(t,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},$i=Li,Ti={ClearIndicator:Jr,Control:ui,DropdownIndicator:Qr,DownChevron:Ot,CrossIcon:je,Group:fi,GroupHeading:pi,IndicatorsContainer:qr,IndicatorSeparator:ti,Input:xi,LoadingIndicator:ii,Menu:Vr,MenuList:kr,MenuPortal:Hr,LoadingMessage:Br,NoOptionsMessage:Tr,MultiValue:Oi,MultiValueContainer:wi,MultiValueLabel:yi,MultiValueRemove:Fi,Option:Mi,Placeholder:Ri,SelectContainer:Nr,SingleValue:$i,ValueContainer:Ur},Bi=function(t){return w(w({},Ti),t.components)},Ke=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ji(e,t){return!!(e===t||Ke(e)&&Ke(t))}function Hi(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ji(e[r],t[r]))return!1;return!0}function zi(e,t){t===void 0&&(t=Hi);var r=null;function i(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&t(n,r.lastArgs))return r.lastResult;var s=e.apply(this,n);return r={lastResult:s,lastArgs:n,lastThis:this},s}return i.clear=function(){r=null},i}var Ni={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},_i=function(t){return F("span",D({css:Ni},t))},Qe=_i,Ui={guidance:function(t){var r=t.isSearchable,i=t.isMulti,n=t.isDisabled,a=t.tabSelectsValue,s=t.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(n?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,i=t.label,n=i===void 0?"":i,a=t.labels,s=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(t){var r=t.context,i=t.focused,n=t.options,a=t.label,s=a===void 0?"":a,o=t.selectValue,u=t.isDisabled,l=t.isSelected,c=function(b,x){return b&&b.length?"".concat(b.indexOf(x)+1," of ").concat(b.length):""};if(r==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,i),".");if(r==="menu"){var d=u?" disabled":"",v="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(v,", ").concat(c(n,i),".")}return""},onFilter:function(t){var r=t.inputValue,i=t.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Wi=function(t){var r=t.ariaSelection,i=t.focusedOption,n=t.focusedValue,a=t.focusableOptions,s=t.isFocused,o=t.selectValue,u=t.selectProps,l=t.id,c=u.ariaLiveMessages,d=u.getOptionLabel,v=u.inputValue,E=u.isMulti,b=u.isOptionDisabled,x=u.isSearchable,m=u.menuIsOpen,g=u.options,A=u.screenReaderStatus,C=u.tabSelectsValue,y=u["aria-label"],M=u["aria-live"],p=f.useMemo(function(){return w(w({},Ui),c||{})},[c]),O=f.useMemo(function(){var k="";if(r&&p.onChange){var L=r.option,H=r.options,U=r.removedValue,W=r.removedValues,K=r.value,Q=function(G){return Array.isArray(G)?null:G},ee=U||L||Q(K),$=ee?d(ee):"",B=H||W||void 0,Z=B?B.map(d):[],J=w({isDisabled:ee&&b(ee,o),label:$,labels:Z},r);k=p.onChange(J)}return k},[r,p,b,o,d]),I=f.useMemo(function(){var k="",L=i||n,H=!!(i&&o&&o.includes(i));if(L&&p.onFocus){var U={focused:L,label:d(L),isDisabled:b(L,o),isSelected:H,options:a,context:L===i?"menu":"value",selectValue:o};k=p.onFocus(U)}return k},[i,n,d,b,p,a,o]),V=f.useMemo(function(){var k="";if(m&&g.length&&p.onFilter){var L=A({count:a.length});k=p.onFilter({inputValue:v,resultsMessage:L})}return k},[a,v,m,p,g,A]),j=f.useMemo(function(){var k="";if(p.guidance){var L=n?"value":m?"menu":"input";k=p.guidance({"aria-label":y,context:L,isDisabled:i&&b(i,o),isMulti:E,isSearchable:x,tabSelectsValue:C})}return k},[y,i,n,E,b,x,m,p,o,C]),N="".concat(I," ").concat(V," ").concat(j),T=F(f.Fragment,null,F("span",{id:"aria-selection"},O),F("span",{id:"aria-context"},N)),_=(r==null?void 0:r.action)==="initial-input-focus";return F(f.Fragment,null,F(Qe,{id:l},_&&T),F(Qe,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!_&&T))},qi=Wi,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Gi=new RegExp("["+Re.map(function(e){return e.letters}).join("")+"]","g"),Pt={};for(var ye=0;ye<Re.length;ye++)for(var Fe=Re[ye],De=0;De<Fe.letters.length;De++)Pt[Fe.letters[De]]=Fe.base;var Vt=function(t){return t.replace(Gi,function(r){return Pt[r]})},Yi=zi(Vt),Ze=function(t){return t.replace(/^\s+|\s+$/g,"")},Xi=function(t){return"".concat(t.label," ").concat(t.value)},Ki=function(t){return function(r,i){if(r.data.__isNew__)return!0;var n=w({ignoreCase:!0,ignoreAccents:!0,stringify:Xi,trim:!0,matchFrom:"any"},t),a=n.ignoreCase,s=n.ignoreAccents,o=n.stringify,u=n.trim,l=n.matchFrom,c=u?Ze(i):i,d=u?Ze(o(r)):o(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Yi(c),d=Vt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Qi=["innerRef"];function Zi(e){var t=e.innerRef,r=X(e,Qi),i=yr(r,"onExited","in","enter","exit","appear");return F("input",D({ref:t},i,{css:dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ji=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function eo(e){var t=e.isEnabled,r=e.onBottomArrive,i=e.onBottomLeave,n=e.onTopArrive,a=e.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(m,g){if(l.current!==null){var A=l.current,C=A.scrollTop,y=A.scrollHeight,M=A.clientHeight,p=l.current,O=g>0,I=y-M-C,V=!1;I>g&&s.current&&(i&&i(m),s.current=!1),O&&o.current&&(a&&a(m),o.current=!1),O&&g>I?(r&&!s.current&&r(m),p.scrollTop=y,V=!0,s.current=!0):!O&&-g>C&&(n&&!o.current&&n(m),p.scrollTop=0,V=!0,o.current=!0),V&&Ji(m)}},[r,i,n,a]),d=f.useCallback(function(m){c(m,m.deltaY)},[c]),v=f.useCallback(function(m){u.current=m.changedTouches[0].clientY},[]),E=f.useCallback(function(m){var g=u.current-m.changedTouches[0].clientY;c(m,g)},[c]),b=f.useCallback(function(m){if(m){var g=Cr?{passive:!1}:!1;m.addEventListener("wheel",d,g),m.addEventListener("touchstart",v,g),m.addEventListener("touchmove",E,g)}},[E,v,d]),x=f.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",v,!1),m.removeEventListener("touchmove",E,!1))},[E,v,d]);return f.useEffect(function(){if(t){var m=l.current;return b(m),function(){x(m)}}},[t,b,x]),function(m){l.current=m}}var Je=["boxSizing","height","overflow","paddingRight","position"],et={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function tt(e){e.preventDefault()}function nt(e){e.stopPropagation()}function rt(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var ot=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,te={capture:!1,passive:!1};function to(e){var t=e.isEnabled,r=e.accountForScrollbars,i=r===void 0?!0:r,n=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(ot){var l=document.body,c=l&&l.style;if(i&&Je.forEach(function(b){var x=c&&c[b];n.current[b]=x}),i&&re<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,E=window.innerWidth-v+d||0;Object.keys(et).forEach(function(b){var x=et[b];c&&(c[b]=x)}),c&&(c.paddingRight="".concat(E,"px"))}l&&it()&&(l.addEventListener("touchmove",tt,te),u&&(u.addEventListener("touchstart",rt,te),u.addEventListener("touchmove",nt,te))),re+=1}},[i]),o=f.useCallback(function(u){if(ot){var l=document.body,c=l&&l.style;re=Math.max(re-1,0),i&&re<1&&Je.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),l&&it()&&(l.removeEventListener("touchmove",tt,te),u&&(u.removeEventListener("touchstart",rt,te),u.removeEventListener("touchmove",nt,te)))}},[i]);return f.useEffect(function(){if(t){var u=a.current;return s(u),function(){o(u)}}},[t,s,o]),function(u){a.current=u}}var no=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},ro={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function io(e){var t=e.children,r=e.lockEnabled,i=e.captureEnabled,n=i===void 0?!0:i,a=e.onBottomArrive,s=e.onBottomLeave,o=e.onTopArrive,u=e.onTopLeave,l=eo({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=to({isEnabled:r}),d=function(E){l(E),c(E)};return F(f.Fragment,null,r&&F("div",{onClick:no,css:ro}),t(d))}var oo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ao=function(t){var r=t.name,i=t.onFocus;return F("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:oo,value:"",onChange:function(){}})},uo=ao,so=function(t){return t.label},lo=function(t){return t.label},co=function(t){return t.value},po=function(t){return!!t.isDisabled},fo={clearIndicator:Zr,container:zr,control:oi,dropdownIndicator:Kr,group:li,groupHeading:di,indicatorsContainer:Wr,indicatorSeparator:ei,input:mi,loadingIndicator:ri,loadingMessage:$r,menu:Ir,menuList:Rr,menuPortal:jr,multiValue:Ei,multiValueLabel:Ci,multiValueRemove:Si,noOptionsMessage:Lr,option:Ai,placeholder:Pi,singleValue:ki,valueContainer:_r},ho={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},mo=4,Rt=4,go=38,vo=Rt*2,bo={baseUnit:Rt,controlHeight:go,menuGutter:vo},Oe={borderRadius:mo,colors:ho,spacing:bo},xo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ye(),captureMenuScroll:!Ye(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ki(),formatGroupLabel:so,getOptionLabel:lo,getOptionValue:co,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:po,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!xr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function at(e,t,r,i){var n=Tt(e,t,r),a=Bt(e,t,r),s=$t(e,t),o=xe(e,t);return{type:"option",data:t,isDisabled:n,isSelected:a,label:s,value:o,index:i}}function kt(e,t){return e.options.map(function(r,i){if("options"in r){var n=r.options.map(function(s,o){return at(e,s,t,o)}).filter(function(s){return ut(e,s)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var a=at(e,r,t,i);return ut(e,a)?a:void 0}).filter(Sr)}function Lt(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,ht(r.options.map(function(i){return i.data}))):t.push(r.data),t},[])}function Eo(e,t){return Lt(kt(e,t))}function ut(e,t){var r=e.inputValue,i=r===void 0?"":r,n=t.data,a=t.isSelected,s=t.label,o=t.value;return(!Ht(e)||!a)&&jt(e,{label:s,value:o,data:n},i)}function Co(e,t){var r=e.focusedValue,i=e.selectValue,n=i.indexOf(r);if(n>-1){var a=t.indexOf(r);if(a>-1)return r;if(n<t.length)return t[n]}return null}function So(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var $t=function(t,r){return t.getOptionLabel(r)},xe=function(t,r){return t.getOptionValue(r)};function Tt(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function Bt(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var i=xe(e,t);return r.some(function(n){return xe(e,n)===i})}function jt(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var Ht=function(t){var r=t.hideSelectedOptions,i=t.isMulti;return r===void 0?i:r},wo=1,zt=function(e){jn(r,e);var t=Nn(r);function r(i){var n;if(_n(this,r),n=t.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.instancePrefix="",n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,u){var l=n.props,c=l.onChange,d=l.name;u.name=d,n.ariaOnChange(o,u),c(o,u)},n.setValue=function(o,u,l){var c=n.props,d=c.closeMenuOnSelect,v=c.isMulti,E=c.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:E}),d&&(n.setState({inputIsHiddenAfterUpdate:!v}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:u,option:l})},n.selectOption=function(o){var u=n.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,v=n.state.selectValue,E=c&&n.isOptionSelected(o,v),b=n.isOptionDisabled(o,v);if(E){var x=n.getOptionValue(o);n.setValue(v.filter(function(m){return n.getOptionValue(m)!==x}),"deselect-option",o)}else if(!b)c?n.setValue([].concat(ht(v),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&n.blurInput()},n.removeValue=function(o){var u=n.props.isMulti,l=n.state.selectValue,c=n.getOptionValue(o),d=l.filter(function(E){return n.getOptionValue(E)!==c}),v=ce(u,d,d[0]||null);n.onChange(v,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(ce(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,u=n.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=ce(o,c,c[0]||null);n.onChange(d,{action:"pop-value",removedValue:l})},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return hr.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(o){return $t(n.props,o)},n.getOptionValue=function(o){return xe(n.props,o)},n.getStyles=function(o,u){var l=n.props.unstyled,c=fo[o](u,l);c.boxSizing="border-box";var d=n.props.styles[o];return d?d(c,u):c},n.getClassNames=function(o,u){var l,c;return(l=(c=n.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},n.getElementId=function(o){return"".concat(n.instancePrefix,"-").concat(o)},n.getComponents=function(){return Bi(n.props)},n.buildCategorizedOptions=function(){return kt(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Lt(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,u){n.setState({ariaSelection:w({value:o},u)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var u=n.props,l=u.isMulti,c=u.menuIsOpen;n.focusInput(),c?(n.setState({inputIsHiddenAfterUpdate:!l}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(n.initialTouchX=l.clientX,n.initialTouchY=l.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-n.initialTouchX),d=Math.abs(l.clientY-n.initialTouchY),v=5;n.userIsDragging=c>v||d>v}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var u=n.props.inputValue,l=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(l,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){n.blockOptionHover||n.state.focusedOption===o||n.setState({focusedOption:o})},n.shouldHideSelectedOptions=function(){return Ht(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var u=n.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,v=u.inputValue,E=u.isClearable,b=u.isDisabled,x=u.menuIsOpen,m=u.onKeyDown,g=u.tabSelectsValue,A=u.openMenuOnFocus,C=n.state,y=C.focusedOption,M=C.focusedValue,p=C.selectValue;if(!b&&!(typeof m=="function"&&(m(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||v)return;n.focusValue("previous");break;case"ArrowRight":if(!l||v)return;n.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)n.removeValue(M);else{if(!c)return;l?n.popValue():E&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!x||!g||!y||A&&n.isOptionSelected(y,p))return;n.selectOption(y);break;case"Enter":if(o.keyCode===229)break;if(x){if(!y||n.isComposing)return;n.selectOption(y);break}return;case"Escape":x?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:v}),n.onMenuClose()):E&&d&&n.clearValue();break;case" ":if(v)return;if(!x){n.openMenu("first");break}if(!y)return;n.selectOption(y);break;case"ArrowUp":x?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":x?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!x)return;n.focusOption("pageup");break;case"PageDown":if(!x)return;n.focusOption("pagedown");break;case"Home":if(!x)return;n.focusOption("first");break;case"End":if(!x)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.instancePrefix="react-select-"+(n.props.instanceId||++wo),n.state.selectValue=qe(i.value),i.menuIsOpen&&n.state.selectValue.length){var a=n.buildFocusableOptions(),s=a.indexOf(n.state.selectValue[0]);n.state.focusedOption=a[s]}return n}return Un(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&n.isDisabled||u&&o&&!n.menuIsOpen)&&this.focusInput(),u&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(n){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),n==="up"?u=l>0?l-1:o.length-1:n==="down"?u=(l+1)%o.length:n==="pageup"?(u=l-a,u<0&&(u=0)):n==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):n==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):w(w({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,E=d.isRtl,b=d.options,x=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:x,isMulti:v,isRtl:E,options:b,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return Tt(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Bt(this.props,n,a)}},{key:"filterOption",value:function(n,a){return jt(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,o=n.inputId,u=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,E=this.getComponents(),b=E.Input,x=this.state,m=x.inputIsHidden,g=x.ariaSelection,A=this.commonProps,C=o||this.getElementId("input"),y=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(b,D({},A,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},y)):f.createElement(Zi,D({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},y))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,E=this.props,b=E.controlShouldRenderValue,x=E.isDisabled,m=E.isMulti,g=E.inputValue,A=E.placeholder,C=this.state,y=C.selectValue,M=C.focusedValue,p=C.isFocused;if(!this.hasValue()||!b)return g?null:f.createElement(d,D({},v,{key:"placeholder",isDisabled:x,isFocused:p,innerProps:{id:this.getElementId("placeholder")}}),A);if(m)return y.map(function(I,V){var j=I===M,N="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return f.createElement(s,D({},v,{components:{Container:o,Label:u,Remove:l},isFocused:j,isDisabled:x,key:N,index:V,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(_){_.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(g)return null;var O=y[0];return f.createElement(c,D({},v,{data:O,isDisabled:x}),this.formatOptionLabel(O,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,D({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,E=a.Option,b=this.commonProps,x=this.state.focusedOption,m=this.props,g=m.captureMenuScroll,A=m.inputValue,C=m.isLoading,y=m.loadingMessage,M=m.minMenuHeight,p=m.maxMenuHeight,O=m.menuIsOpen,I=m.menuPlacement,V=m.menuPosition,j=m.menuPortalTarget,N=m.menuShouldBlockScroll,T=m.menuShouldScrollIntoView,_=m.noOptionsMessage,k=m.onMenuScrollToTop,L=m.onMenuScrollToBottom;if(!O)return null;var H=function(B,Z){var J=B.type,q=B.data,G=B.isDisabled,ne=B.isSelected,oe=B.label,Xt=B.value,He=x===q,ze=G?void 0:function(){return n.onOptionHover(q)},Kt=G?void 0:function(){return n.selectOption(q)},Ne="".concat(n.getElementId("option"),"-").concat(Z),Qt={id:Ne,onClick:Kt,onMouseMove:ze,onMouseOver:ze,tabIndex:-1};return f.createElement(E,D({},b,{innerProps:Qt,data:q,isDisabled:G,isSelected:ne,key:Ne,label:oe,type:J,value:Xt,isFocused:He,innerRef:He?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(B.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function($){if($.type==="group"){var B=$.data,Z=$.options,J=$.index,q="".concat(n.getElementId("group"),"-").concat(J),G="".concat(q,"-heading");return f.createElement(s,D({},b,{key:q,data:B,options:Z,Heading:o,headingProps:{id:G,data:$.data},label:n.formatGroupLabel($.data)}),$.options.map(function(ne){return H(ne,"".concat(J,"-").concat(ne.index))}))}else if($.type==="option")return H($,"".concat($.index))});else if(C){var W=y({inputValue:A});if(W===null)return null;U=f.createElement(d,b,W)}else{var K=_({inputValue:A});if(K===null)return null;U=f.createElement(v,b,K)}var Q={minMenuHeight:M,maxMenuHeight:p,menuPlacement:I,menuPosition:V,menuShouldScrollIntoView:T},ee=f.createElement(Mr,D({},b,Q),function($){var B=$.ref,Z=$.placerProps,J=Z.placement,q=Z.maxHeight;return f.createElement(u,D({},b,Q,{innerRef:B,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove,id:n.getElementId("listbox")},isLoading:C,placement:J}),f.createElement(io,{captureEnabled:g,onTopArrive:k,onBottomArrive:L,lockEnabled:N},function(G){return f.createElement(l,D({},b,{innerRef:function(oe){n.getMenuListRef(oe),G(oe)},isLoading:C,maxHeight:q,focusedOption:x}),U)}))});return j||V==="fixed"?f.createElement(c,D({},b,{appendTo:j,controlElement:this.controlRef,menuPlacement:I,menuPosition:V}),ee):ee}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return f.createElement(uo,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var v=d.map(function(x){return n.getOptionValue(x)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:v})}else{var E=d.length>0?d.map(function(x,m){return f.createElement("input",{key:"i-".concat(m),name:l,type:"hidden",value:n.getOptionValue(x)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,E)}else{var b=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(qi,D({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,o=n.SelectContainer,u=n.ValueContainer,l=this.props,c=l.className,d=l.id,v=l.isDisabled,E=l.menuIsOpen,b=this.state.isFocused,x=this.commonProps=this.getCommonProps();return f.createElement(o,D({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),f.createElement(a,D({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:E}),f.createElement(u,D({},x,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,D({},x,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=n.options,E=n.value,b=n.menuIsOpen,x=n.inputValue,m=n.isMulti,g=qe(E),A={};if(s&&(E!==s.value||v!==s.options||b!==s.menuIsOpen||x!==s.inputValue)){var C=b?Eo(n,g):[],y=o?Co(a,g):null,M=So(a,C);A={selectValue:g,focusedOption:M,focusedValue:y,clearFocusValueOnUpdate:!1}}var p=u!=null&&n!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},O=l,I=c&&d;return c&&!I&&(O={value:ce(m,g,g[0]||null),options:g,action:"initial-input-focus"},I=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(O=null),w(w(w({},A),p),{},{prevProps:n,ariaSelection:O,prevWasFocused:I})}}]),r}(f.Component);zt.defaultProps=xo;var yo=f.forwardRef(function(e,t){var r=Xn(e);return f.createElement(zt,D({ref:t},r))}),Fo=yo;const Do=S.p`
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
`,Oo=S.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    gap: 16px;
  }
`,Ao=S.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,Io=S.input`
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
`,Mo=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
`,Po=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,Vo=S.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,st=S.div`
  flex: 1;
  z-index: 2;
  background-color: transparent;
`,lt=S(Fo)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);
`,{QUERY:de,RECOMMENDED:pe,CATEGORY:Nt}=on,Ro={[de]:"",[Nt]:"",[pe]:""};function _t({onProductsChange:e}){const[t,r]=f.useState(Ro),[i,n]=f.useState(""),[a,s]=f.useState([]),o=ke(),{isSuccess:u,currentData:l,isFetching:c,isError:d,error:v}=rn();f.useEffect(()=>{o(Le({isLoading:c,isError:d,error:v}))},[o,v,d,c]),f.useEffect(()=>{if(u){const[p]=l,{productsCategories:O}=p;s(O)}},[l,u]),f.useEffect(()=>{e(t)},[t,e]);const E=()=>{n(""),r(p=>({...p,[de]:""}))},b=["All","Recommended","Not recommended"],[x,m]=f.useState(null),[g,A]=f.useState(null),C=p=>{r(O=>({...O,[de]:p.target.value.trim()})),n(p.target.value)},y=p=>{m(p),r(O=>({...O,[Nt]:p.label}))},M=p=>{switch(A(p),p.label){case"Recommended":r(O=>({...O,[pe]:[!0]}));break;case"Not recommended":r(O=>({...O,[pe]:[!1]}));break;default:r(O=>({...O,[pe]:null}))}};return h.jsx(h.Fragment,{children:h.jsxs(Oo,{children:[h.jsxs(Ao,{children:[h.jsx(Io,{type:"text",value:t[de],onChange:C}),h.jsx(Mo,{width:"18",height:"18",children:h.jsx("use",{href:`${ie}#search`})}),i.trim()&&h.jsx(Po,{onClick:E,children:h.jsx("svg",{width:"18",height:"18",children:h.jsx("use",{href:`${ie}#x-clean`})})})]}),h.jsxs(Vo,{children:[h.jsx(st,{children:h.jsx(lt,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"#040404",borderRadius:"12px"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"146px"}})},value:x,onChange:y,options:a.map(p=>({label:p.charAt(0).toUpperCase()+p.slice(1)})),placeholder:"Categories"})}),h.jsx(st,{children:h.jsx(lt,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"none",border:"none"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"195px"}})},value:g,onChange:M,options:b.map(p=>({label:p})),placeholder:"All"})})]}),h.jsx(Do,{children:"Filters"})]})})}_t.propTypes={onProductsChange:P.func.isRequired};const ko=S.div`
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
`,Lo=S.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
  }
`,$o=S.div`
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
`;function Ut({selectedDate:e,setSelectedDate:t}){const r=pt(e,"dd.MM.yyyy");return h.jsx(mn,{maxDate:new Date,onChange:t,value:e,children:h.jsxs(ko,{children:[h.jsx(Lo,{children:r}),h.jsx($o,{children:h.jsx(an,{name:"calendar"})})]})})}Ut.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const To=S.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 320px;
  }
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 48px 32px;
    width: auto;
  }
`,Bo=S.div`
  position: relative;
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 415px;
  }
`,jo=S.input`
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
`,Ho=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
  }
`,zo=S.input`
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
`,No=S.span`
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
`,_o=S.div`
  display: flex;
`,Uo=S.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Wo=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,qo=S.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    justify-content: flex-start;
  }
`,Go=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 64px;
  }
`,Yo=S.button`
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
`,Xo=S.button`
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
`;function Wt(e){const[t,r]=f.useState(new Date),i=ke(),{onClose:n,addProdSuccess:a,addProdError:s,product:o}=e,{weight:u,calories:l,_id:c,title:d}=o,[v,E]=f.useState(u),b=v*l/100,[x,{isLoading:m,isError:g,error:A}]=un(),C={product_ID:c,date:pt(new Date(t),"yyyy-MM-dd"),amount:v,calories:b};f.useEffect(()=>{i(Le({isLoading:m,isError:g,error:A}))},[i,A,g,m]);const y=async()=>{const{error:M}=await x(C);M?s(M.data.message):(n(),a(b))};return h.jsxs(To,{children:[h.jsxs(Bo,{children:[h.jsx(jo,{type:"text",value:d,readOnly:!0,disabled:!0}),h.jsxs(Ho,{children:[h.jsx(zo,{type:"number",value:v,onChange:M=>E(M.target.value)}),h.jsx(No,{children:"grams"})]})]}),h.jsxs(Go,{children:[h.jsx(Ut,{selectedDate:t,setSelectedDate:r}),h.jsxs(_o,{children:[h.jsx(Uo,{children:"Calories:"}),h.jsx(Wo,{children:b})]})]}),h.jsxs(qo,{children:[h.jsx(Yo,{onClick:y,children:"Add to diary"}),h.jsx(Xo,{onClick:n,children:"Cancel"})]})]})}Wt.propTypes={onClose:P.func.isRequired,addProdSuccess:P.func.isRequired,addProdError:P.func.isRequired,product:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,_id:P.string.isRequired,title:P.string.isRequired}).isRequired};const Ko="/power-pulse/assets/avocado-b622cf8b.png",Qo=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin: 22px 111px;
  }
`,Zo=S.div`
  background: url(${Ko}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 19px;
  }
`,Jo=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,ea=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,ta=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,na=S.span`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,ra=S.button`
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
`,ia=S(sn)`
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
`,oa=S.p`
  margin-right: 8px;
  transition: color 300ms ease-in-out;
`;function qt({onClose:e,totalCalories:t}){return h.jsxs(Qo,{children:[h.jsx(Zo,{}),h.jsx(Jo,{children:"Well Done"}),h.jsxs(ea,{children:[h.jsx(ta,{children:"Calories:"}),h.jsx(na,{children:t})]}),h.jsx(ra,{onClick:e,children:"Next product"}),h.jsxs(ia,{to:`/${ln.DIARY}`,children:[h.jsx(oa,{children:"To the diary"}),h.jsx("svg",{width:"16",height:"16",children:h.jsx("use",{href:ie+"#arrow-add-prod"})})]})]})}qt.propTypes={totalCalories:P.number,onClose:P.func.isRequired};const aa=S.div`
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
`,ua=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,sa=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,la=S.div`
  display: flex;
  align-items: center;
`,ca=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({recommended:e,theme:t})=>e?t.color.circleGreen:t.color.circleRed};
`,da=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,pa=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,fa=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,ha=S.svg`
  width: 16px;
  height: 16px;
`,ma=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,ga=S.svg`
  width: 24px;
  height: 24px;
`,va=S.h2`
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
`,ba=S.div`
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
`;function Gt({props:e,userGroupBlood:t}){const{weight:r,calories:i,category:n,title:a,groupBloodNotAllowed:s}=e,o=!s[t],[u,l]=f.useState(!1),[c,d]=f.useState(!1),[v,E]=f.useState(!1),[b,x]=f.useState(null),[m,g]=f.useState(""),A=()=>{l(!0)},C=()=>{l(!1),d(!1),E(!1)},y=p=>{d(!0),x(p)},M=p=>{E(!0),g(p)};return h.jsxs(h.Fragment,{children:[h.jsxs(aa,{children:[h.jsxs(ua,{children:[h.jsx(sa,{children:"DIET"}),h.jsxs(la,{children:[h.jsx(ca,{recommended:o}),h.jsx(da,{children:o?"Recommended":"Not recommended"}),h.jsxs(pa,{onClick:A,children:[h.jsx(fa,{children:"Add"}),h.jsx(ha,{children:h.jsx("use",{href:`${ie}#arrow-add-prod-orange`})})]})]})]}),h.jsxs(ma,{children:[h.jsx(ga,{children:h.jsx("use",{href:`${ie}#run-man`})}),h.jsx(va,{children:a})]}),h.jsxs(ba,{children:[h.jsxs(Ae,{children:["Calories:",h.jsx(Ie,{children:i})]}),h.jsxs(Ae,{category:!0,children:["Category:",h.jsx(Ie,{children:n})]}),h.jsxs(Ae,{children:["Weight:",h.jsx(Ie,{children:r})]})]})]}),h.jsx(Ce,{onClose:C,onShow:u,children:h.jsx(Wt,{onClose:C,addProdSuccess:y,product:e,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:c,children:h.jsx(qt,{onClose:C,totalCalories:b,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:v,children:h.jsx(cn,{message:m,onClose:C})})]})}Gt.propTypes={props:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,category:P.string.isRequired,title:P.string.isRequired,groupBloodNotAllowed:P.object.isRequired}).isRequired,userGroupBlood:P.number};const xa=S.ul`
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
`,Ea=S.p`
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Ca=S.span`
  color: #e6533c;
`,Sa=S.span`
  margin-top: 16px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Yt({filter:e}){const[t,r]=f.useState([]),[i,n]=f.useState(null),[a,s]=f.useState(null),[o,u]=f.useState(1),[l,c]=f.useState(!0),d=f.useRef(),v=ke(),[E,{isLoading:b,isError:x,error:m}]=dn(),{isSuccess:g,data:A,isLoading:C,isError:y,error:M}=pn(),{ref:p}=hn({onChange:O=>{O&&l&&u(I=>I+1)}});return f.useEffect(()=>{v(Le({isLoading:b||C,isError:x||y,error:m||M}))},[v,x,b,y,C,m,M]),f.useEffect(()=>{g&&n(A)},[g,A]),f.useEffect(()=>{d.current&&(d.current.scrollTop=0),u(1),c(!0),s(e)},[e,p]),f.useEffect(()=>{l&&a&&(async()=>{try{const I=await E({page:o,...a}).unwrap();I.data.length<18&&c(!1),r(o===1?[...I.data]:V=>[...V,...I.data])}catch(I){console.error("Error fetching data:",I.message)}})()},[E,o,a,l]),h.jsx(h.Fragment,{children:t.length>0?h.jsx(xa,{ref:d,children:t.map((O,I)=>h.jsx("li",{ref:I===t.length-1?p:null,children:h.jsx(Gt,{props:O,userGroupBlood:i},O._id)},I))}):h.jsxs(h.Fragment,{children:[h.jsxs(Ea,{children:[h.jsx(Ca,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(Sa,{children:"Try changing the search parameters."})]})})}Yt.propTypes={filter:P.shape({title:P.string.isRequired,category:P.string.isRequired,recommended:P.oneOfType([P.oneOf([""]),P.arrayOf(P.oneOf([!0,!1]))])})};const wa={Alcoholicdrinks:`url(${En})`,Berries:`url(${Cn})`,Cereals:`url(${Sn})`,Dairy:`url(${wn})`,Driedfruits:`url(${yn})`,Eggs:`url(${Fn})`,Fish:`url(${Dn})`,Flour:`url(${On})`,Fruits:`url(${An})`,Meat:`url(${In})`,Mushrooms:`url(${Mn})`,Nuts:`url(${Pn})`,Oilsandfats:`url(${Vn})`,Poppy:`url(${Rn})`,Sausage:`url(${kn})`,Seeds:`url(${Ln})`,Sesame:`url(${$n})`,Softdrinks:`url(${Tn})`,Vegetablesandherbs:`url(${Bn})`},ya=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: linear-gradient(90deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
    linear-gradient(180deg, #040404 1.1%, rgba(4, 4, 4, 0) 50.79%),
    ${e=>wa[e==null?void 0:e.filter]||`image-set(
    url(${vn}) 1x,
    url(${bn}) 2x,
      url(${xn}) 3x)`},
    no-repeat;
  background-size: 428px 716px;
`,Fa=S.div`
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
`;function Ma(){const[e,t]=f.useState(null),[r,i]=f.useState(window.innerWidth>=1440),n=()=>{i(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),h.jsxs(h.Fragment,{children:[r&&h.jsx(ya,{filter:e==null?void 0:e.category.split(" ").join("")}),h.jsxs(Fa,{children:[h.jsx(fn,{text:"Products"}),h.jsx(_t,{onProductsChange:t})]}),h.jsx(Yt,{filter:e})]})}export{Ma as Products};
