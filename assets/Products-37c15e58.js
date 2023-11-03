import{_ as Qt,V as lt,W as Zt,X as Jt,r as p,Y as y,Z as en,$ as ae,a0 as F,a1 as D,a2 as tn,a3 as ct,n as S,P,a4 as nn,j as h,f as ie,a5 as rn,I as on,a6 as an,L as un,R as sn,B as Ce,l as ln,a7 as cn,M as dn,E as ze}from"./index-d3b29107.js";import{T as pn}from"./TitlePage-0a8ce473.js";import{u as fn}from"./index-2568a3e4.js";import{f as dt,C as hn}from"./Calendar-282e415c.js";import"./tiny-warning.esm-c932d744.js";function mn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}const gn="/power-pulse/assets/bg_eating-391a2df6.jpg",vn="/power-pulse/assets/bg_eating@2x-9a4ec783.jpg",bn="/power-pulse/assets/bg_eating@3x-8653e571.jpg",xn="/power-pulse/assets/Alcoholicdrinks-486482f5.jpg",En="/power-pulse/assets/Berries-590d1129.jpg",Cn="/power-pulse/assets/Cereals-5593b81d.jpg",Sn="/power-pulse/assets/Dairy-b7076684.jpg",wn="/power-pulse/assets/Driedfruits-963d3720.jpg",yn="/power-pulse/assets/Eggs-12459143.jpg",Fn="/power-pulse/assets/Fish-05ac2864.jpg",Dn="/power-pulse/assets/Flour-12c71bd2.jpg",On="/power-pulse/assets/Fruits-e1566249.jpg",An="/power-pulse/assets/Meat-ab0145d5.jpg",In="/power-pulse/assets/Mushrooms-ec1a81b1.jpg",Mn="/power-pulse/assets/Nuts-f54973d6.jpg",Pn="/power-pulse/assets/Oilsandfats-e99bbb70.jpg",Vn="/power-pulse/assets/Poppy-bbcc307a.jpg",Rn="/power-pulse/assets/Sausage-c6a576ec.jpg",kn="/power-pulse/assets/Seeds-c88eb697.jpg",Ln="/power-pulse/assets/Sesame-109b0fb3.jpg",$n="/power-pulse/assets/Softdrinks-17da42b0.jpg",Tn="/power-pulse/assets/Vegetablesandherbs-73ff911b.jpg";function Me(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function pt(e,t){if(e){if(typeof e=="string")return Me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Me(e,t)}}function Bn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qt(e,t)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(e)}function jn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hn(e,t){if(t&&(lt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mn(e)}function zn(e){var t=jn();return function(){var i=fe(e),n;if(t){var a=fe(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Hn(this,n)}}function _n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Zt(i.key),i)}}function Nn(e,t,r){return t&&_e(e.prototype,t),r&&_e(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Un(e){if(Array.isArray(e))return e}function Wn(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var i,n,a,s,o=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(i=a.call(r)).done)&&(o.push(i.value),o.length!==t);u=!0);}catch(c){l=!0,n=c}finally{try{if(!u&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return o}}function qn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){return Un(e)||Wn(e,t)||pt(e,t)||qn()}function X(e,t){if(e==null)return{};var r=Jt(e,t),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var Gn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Yn(e){var t=e.defaultInputValue,r=t===void 0?"":t,i=e.defaultMenuIsOpen,n=i===void 0?!1:i,a=e.defaultValue,s=a===void 0?null:a,o=e.inputValue,u=e.menuIsOpen,l=e.onChange,c=e.onInputChange,d=e.onMenuClose,v=e.onMenuOpen,E=e.value,x=X(e,Gn),b=p.useState(o!==void 0?o:r),g=Y(b,2),m=g[0],f=g[1],C=p.useState(u!==void 0?u:n),O=Y(C,2),M=O[0],w=O[1],A=p.useState(E!==void 0?E:s),I=Y(A,2),R=I[0],j=I[1],_=p.useCallback(function(W,K){typeof l=="function"&&l(W,K),j(W)},[l]),T=p.useCallback(function(W,K){var Q;typeof c=="function"&&(Q=c(W,K)),f(Q!==void 0?Q:W)},[c]),N=p.useCallback(function(){typeof v=="function"&&v(),w(!0)},[v]),k=p.useCallback(function(){typeof d=="function"&&d(),w(!1)},[d]),L=o!==void 0?o:m,H=u!==void 0?u:M,U=E!==void 0?E:R;return y(y({},x),{},{inputValue:L,menuIsOpen:H,onChange:_,onInputChange:T,onMenuClose:k,onMenuOpen:N,value:U})}function Xn(e){if(Array.isArray(e))return Me(e)}function Kn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){return Xn(e)||Kn(e)||pt(e)||Qn()}function Zn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Jn=Math.min,er=Math.max,he=Math.round,ue=Math.floor,me=e=>({x:e,y:e});function tr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ht(e){return gt(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function mt(e){var t;return(t=(gt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gt(e){return e instanceof Node||e instanceof z(e).Node}function Pe(e){return e instanceof Element||e instanceof z(e).Element}function ke(e){return e instanceof HTMLElement||e instanceof z(e).HTMLElement}function Ne(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function vt(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=Le(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(n)}function nr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rr(e){return["html","body","#document"].includes(ht(e))}function Le(e){return z(e).getComputedStyle(e)}function ir(e){if(ht(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ne(e)&&e.host||mt(e);return Ne(t)?t.host:t}function bt(e){const t=ir(e);return rr(t)?e.ownerDocument?e.ownerDocument.body:e.body:ke(t)&&vt(t)?t:bt(t)}function ge(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const n=bt(e),a=n===((i=e.ownerDocument)==null?void 0:i.body),s=z(n);return a?t.concat(s,s.visualViewport||[],vt(n)?n:[],s.frameElement&&r?ge(s.frameElement):[]):t.concat(n,ge(n,[],r))}function or(e){const t=Le(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=ke(e),a=n?e.offsetWidth:r,s=n?e.offsetHeight:i,o=he(r)!==a||he(i)!==s;return o&&(r=a,i=s),{width:r,height:i,$:o}}function $e(e){return Pe(e)?e:e.contextElement}function Se(e){const t=$e(e);if(!ke(t))return me(1);const r=t.getBoundingClientRect(),{width:i,height:n,$:a}=or(t);let s=(a?he(r.width):r.width)/i,o=(a?he(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const ar=me(0);function ur(e){const t=z(e);return!nr()||!t.visualViewport?ar:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sr(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==z(e)?!1:t}function Ue(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=$e(e);let s=me(1);t&&(i?Pe(i)&&(s=Se(i)):s=Se(e));const o=sr(a,r,i)?ur(a):me(0);let u=(n.left+o.x)/s.x,l=(n.top+o.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const v=z(a),E=i&&Pe(i)?z(i):i;let x=v.frameElement;for(;x&&i&&E!==v;){const b=Se(x),g=x.getBoundingClientRect(),m=Le(x),f=g.left+(x.clientLeft+parseFloat(m.paddingLeft))*b.x,C=g.top+(x.clientTop+parseFloat(m.paddingTop))*b.y;u*=b.x,l*=b.y,c*=b.x,d*=b.y,u+=f,l+=C,x=z(x).frameElement}}return tr({width:c,height:d,x:u,y:l})}function lr(e,t){let r=null,i;const n=mt(e);function a(){clearTimeout(i),r&&r.disconnect(),r=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:v}=e.getBoundingClientRect();if(o||t(),!d||!v)return;const E=ue(c),x=ue(n.clientWidth-(l+d)),b=ue(n.clientHeight-(c+v)),g=ue(l),f={rootMargin:-E+"px "+-x+"px "+-b+"px "+-g+"px",threshold:er(0,Jn(1,u))||1};let C=!0;function O(M){const w=M[0].intersectionRatio;if(w!==u){if(!C)return s();w?s(!1,w):i=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{r=new IntersectionObserver(O,{...f,root:n.ownerDocument})}catch{r=new IntersectionObserver(O,f)}r.observe(e)}return s(!0),a}function cr(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,l=$e(e),c=n||a?[...l?ge(l):[],...ge(t)]:[];c.forEach(m=>{n&&m.addEventListener("scroll",r,{passive:!0}),a&&m.addEventListener("resize",r)});const d=l&&o?lr(l,r):null;let v=-1,E=null;s&&(E=new ResizeObserver(m=>{let[f]=m;f&&f.target===l&&E&&(E.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{E&&E.observe(t)})),r()}),l&&!u&&E.observe(l),E.observe(t));let x,b=u?Ue(e):null;u&&g();function g(){const m=Ue(e);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&r(),b=m,x=requestAnimationFrame(g)}return r(),()=>{c.forEach(m=>{n&&m.removeEventListener("scroll",r),a&&m.removeEventListener("resize",r)}),d&&d(),E&&E.disconnect(),E=null,u&&cancelAnimationFrame(x)}}var Ve=p.useLayoutEffect,dr=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function pr(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function fr(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var a=[].concat(i);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(pr(e,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var We=function(t){return Sr(t)?t.filter(Boolean):lt(t)==="object"&&t!==null?[t]:[]},xt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=X(t,dr);return y({},r)},V=function(t,r,i){var n=t.cx,a=t.getStyles,s=t.getClassNames,o=t.className;return{css:a(r,t),className:n(i??{},s(r,t),o)}};function Ee(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function hr(e){return Ee(e)?window.innerHeight:e.clientHeight}function Et(e){return Ee(e)?window.pageYOffset:e.scrollTop}function be(e,t){if(Ee(e)){window.scrollTo(0,t);return}e.scrollTop=t}function mr(e){var t=getComputedStyle(e),r=t.position==="absolute",i=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var n=e;n=n.parentElement;)if(t=getComputedStyle(n),!(r&&t.position==="static")&&i.test(t.overflow+t.overflowY+t.overflowX))return n;return document.documentElement}function gr(e,t,r,i){return r*((e=e/i-1)*e*e+1)+t}function se(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,n=Et(e),a=t-n,s=10,o=0;function u(){o+=s;var l=gr(o,n,a,r);be(e,l),o<r?window.requestAnimationFrame(u):i(e)}u()}function qe(e,t){var r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),n=t.offsetHeight/3;i.bottom+n>r.bottom?be(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+n,e.scrollHeight)):i.top-n<r.top&&be(e,Math.max(t.offsetTop-n,0))}function vr(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function br(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Ct=!1,xr={get passive(){return Ct=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",ve,xr),le.removeEventListener("p",ve,!1));var Er=Ct;function Cr(e){return e!=null}function Sr(e){return Array.isArray(e)}function ce(e,t,r){return e?t:r}var wr=function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var a=Object.entries(t).filter(function(s){var o=Y(s,1),u=o[0];return!i.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],c=u[1];return s[l]=c,s},{})},yr=["children","innerProps"],Fr=["children","innerProps"];function Dr(e){var t=e.maxHeight,r=e.menuEl,i=e.minHeight,n=e.placement,a=e.shouldScroll,s=e.isFixedPosition,o=e.controlHeight,u=mr(r),l={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),E=v.bottom,x=v.height,b=v.top,g=r.offsetParent.getBoundingClientRect(),m=g.top,f=s?window.innerHeight:hr(u),C=Et(u),O=parseInt(getComputedStyle(r).marginBottom,10),M=parseInt(getComputedStyle(r).marginTop,10),w=m-M,A=f-b,I=w+C,R=d-C-b,j=E-f+C+O,_=C+b-M,T=160;switch(n){case"auto":case"bottom":if(A>=x)return{placement:"bottom",maxHeight:t};if(R>=x&&!s)return a&&se(u,j,T),{placement:"bottom",maxHeight:t};if(!s&&R>=i||s&&A>=i){a&&se(u,j,T);var N=s?A-O:R-O;return{placement:"bottom",maxHeight:N}}if(n==="auto"||s){var k=t,L=s?w:I;return L>=i&&(k=Math.min(L-O-o,t)),{placement:"top",maxHeight:k}}if(n==="bottom")return a&&be(u,j),{placement:"bottom",maxHeight:t};break;case"top":if(w>=x)return{placement:"top",maxHeight:t};if(I>=x&&!s)return a&&se(u,_,T),{placement:"top",maxHeight:t};if(!s&&I>=i||s&&w>=i){var H=t;return(!s&&I>=i||s&&w>=i)&&(H=s?w-M:I-M),a&&se(u,_,T),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Or(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var St=function(t){return t==="auto"?"bottom":t},Ar=function(t,r){var i,n=t.placement,a=t.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return y((i={label:"menu"},ae(i,Or(n),"100%"),ae(i,"position","absolute"),ae(i,"width","100%"),ae(i,"zIndex",1),i),r?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},wt=p.createContext(null),Ir=function(t){var r=t.children,i=t.minMenuHeight,n=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,o=t.menuShouldScrollIntoView,u=t.theme,l=p.useContext(wt)||{},c=l.setPortalPlacement,d=p.useRef(null),v=p.useState(n),E=Y(v,2),x=E[0],b=E[1],g=p.useState(null),m=Y(g,2),f=m[0],C=m[1],O=u.spacing.controlHeight;return Ve(function(){var M=d.current;if(M){var w=s==="fixed",A=o&&!w,I=Dr({maxHeight:n,menuEl:M,minHeight:i,placement:a,shouldScroll:A,isFixedPosition:w,controlHeight:O});b(I.maxHeight),C(I.placement),c==null||c(I.placement)}},[n,a,s,o,i,c,O]),r({ref:d,placerProps:y(y({},t),{},{placement:f||St(a),maxHeight:x})})},Mr=function(t){var r=t.children,i=t.innerRef,n=t.innerProps;return F("div",D({},V(t,"menu",{menu:!0}),{ref:i},n),r)},Pr=Mr,Vr=function(t,r){var i=t.maxHeight,n=t.theme.spacing.baseUnit;return y({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},Rr=function(t){var r=t.children,i=t.innerProps,n=t.innerRef,a=t.isMulti;return F("div",D({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},i),r)},yt=function(t,r){var i=t.theme,n=i.spacing.baseUnit,a=i.colors;return y({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},kr=yt,Lr=yt,$r=function(t){var r=t.children,i=r===void 0?"No options":r,n=t.innerProps,a=X(t,yr);return F("div",D({},V(y(y({},a),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Tr=function(t){var r=t.children,i=r===void 0?"Loading...":r,n=t.innerProps,a=X(t,Fr);return F("div",D({},V(y(y({},a),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},Br=function(t){var r=t.rect,i=t.offset,n=t.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},jr=function(t){var r=t.appendTo,i=t.children,n=t.controlElement,a=t.innerProps,s=t.menuPlacement,o=t.menuPosition,u=p.useRef(null),l=p.useRef(null),c=p.useState(St(s)),d=Y(c,2),v=d[0],E=d[1],x=p.useMemo(function(){return{setPortalPlacement:E}},[]),b=p.useState(null),g=Y(b,2),m=g[0],f=g[1],C=p.useCallback(function(){if(n){var A=vr(n),I=o==="fixed"?0:window.pageYOffset,R=A[v]+I;(R!==(m==null?void 0:m.offset)||A.left!==(m==null?void 0:m.rect.left)||A.width!==(m==null?void 0:m.rect.width))&&f({offset:R,rect:A})}},[n,o,v,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Ve(function(){C()},[C]);var O=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&u.current&&(l.current=cr(n,u.current,C,{elementResize:"ResizeObserver"in window}))},[n,C]);Ve(function(){O()},[O]);var M=p.useCallback(function(A){u.current=A,O()},[O]);if(!r&&o!=="fixed"||!m)return null;var w=F("div",D({ref:M},V(y(y({},t),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),i);return F(wt.Provider,{value:x},r?tn.createPortal(w,r):w)},Hr=function(t){var r=t.isDisabled,i=t.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},zr=function(t){var r=t.children,i=t.innerProps,n=t.isDisabled,a=t.isRtl;return F("div",D({},V(t,"container",{"--is-disabled":n,"--is-rtl":a}),i),r)},_r=function(t,r){var i=t.theme.spacing,n=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Nr=function(t){var r=t.children,i=t.innerProps,n=t.isMulti,a=t.hasValue;return F("div",D({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),i),r)},Ur=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Wr=function(t){var r=t.children,i=t.innerProps;return F("div",D({},V(t,"indicatorsContainer",{indicators:!0}),i),r)},Ye,qr=["size"],Gr=["innerProps","isRtl","size"],Yr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(t){var r=t.size,i=X(t,qr);return F("svg",D({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Yr},i))},Te=function(t){return F(Ft,D({size:20},t),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Dt=function(t){return F(Ft,D({size:20},t),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ot=function(t,r){var i=t.isFocused,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?s.neutral60:s.neutral20,padding:a*2,":hover":{color:i?s.neutral80:s.neutral40}})},Xr=Ot,Kr=function(t){var r=t.children,i=t.innerProps;return F("div",D({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||F(Dt,null))},Qr=Ot,Zr=function(t){var r=t.children,i=t.innerProps;return F("div",D({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||F(Te,null))},Jr=function(t,r){var i=t.isDisabled,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},ei=function(t){var r=t.innerProps;return F("span",D({},r,V(t,"indicatorSeparator",{"indicator-separator":!0})))},ti=en(Ye||(Ye=Zn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ni=function(t,r){var i=t.isFocused,n=t.size,a=t.theme,s=a.colors,o=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?s.neutral60:s.neutral20,padding:o*2})},we=function(t){var r=t.delay,i=t.offset;return F("span",{css:ct({animation:"".concat(ti," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},ri=function(t){var r=t.innerProps,i=t.isRtl,n=t.size,a=n===void 0?4:n,s=X(t,Gr);return F("div",D({},V(y(y({},s),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),F(we,{delay:0,offset:i}),F(we,{delay:160,offset:!0}),F(we,{delay:320,offset:!i}))},ii=function(t,r){var i=t.isDisabled,n=t.isFocused,a=t.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:n?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},oi=function(t){var r=t.children,i=t.isDisabled,n=t.isFocused,a=t.innerRef,s=t.innerProps,o=t.menuIsOpen;return F("div",D({ref:a},V(t,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":o}),s,{"aria-disabled":i||void 0}),r)},ai=oi,ui=["data"],si=function(t,r){var i=t.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},li=function(t){var r=t.children,i=t.cx,n=t.getStyles,a=t.getClassNames,s=t.Heading,o=t.headingProps,u=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return F("div",D({},V(t,"group",{group:!0}),u),F(s,D({},o,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:i}),l),F("div",null,r))},ci=function(t,r){var i=t.theme,n=i.colors,a=i.spacing;return y({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},di=function(t){var r=xt(t);r.data;var i=X(r,ui);return F("div",D({},V(t,"groupHeading",{"group-heading":!0}),i))},pi=li,fi=["innerRef","isDisabled","isHidden","inputClassName"],hi=function(t,r){var i=t.isDisabled,n=t.value,a=t.theme,s=a.spacing,o=a.colors;return y(y({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},mi),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},At={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},mi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},At)},gi=function(t){return y({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},At)},vi=function(t){var r=t.cx,i=t.value,n=xt(t),a=n.innerRef,s=n.isDisabled,o=n.isHidden,u=n.inputClassName,l=X(n,fi);return F("div",D({},V(t,"input",{"input-container":!0}),{"data-value":i||""}),F("input",D({className:r({input:!0},u),ref:a,style:gi(o),disabled:s},l)))},bi=vi,xi=function(t,r){var i=t.theme,n=i.spacing,a=i.borderRadius,s=i.colors;return y({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},Ei=function(t,r){var i=t.theme,n=i.borderRadius,a=i.colors,s=t.cropWithEllipsis;return y({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ci=function(t,r){var i=t.theme,n=i.spacing,a=i.borderRadius,s=i.colors,o=t.isFocused;return y({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},It=function(t){var r=t.children,i=t.innerProps;return F("div",i,r)},Si=It,wi=It;function yi(e){var t=e.children,r=e.innerProps;return F("div",D({role:"button"},r),t||F(Te,{size:14}))}var Fi=function(t){var r=t.children,i=t.components,n=t.data,a=t.innerProps,s=t.isDisabled,o=t.removeProps,u=t.selectProps,l=i.Container,c=i.Label,d=i.Remove;return F(l,{data:n,innerProps:y(y({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},F(c,{data:n,innerProps:y({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},r),F(d,{data:n,innerProps:y(y({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},o),selectProps:u}))},Di=Fi,Oi=function(t,r){var i=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.theme,o=s.spacing,u=s.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?u.primary:n?u.primary25:"transparent",color:i?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?u.primary:u.primary50}})},Ai=function(t){var r=t.children,i=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.innerRef,o=t.innerProps;return F("div",D({},V(t,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":i},o),r)},Ii=Ai,Mi=function(t,r){var i=t.theme,n=i.spacing,a=i.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Pi=function(t){var r=t.children,i=t.innerProps;return F("div",D({},V(t,"placeholder",{placeholder:!0}),i),r)},Vi=Pi,Ri=function(t,r){var i=t.isDisabled,n=t.theme,a=n.spacing,s=n.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},ki=function(t){var r=t.children,i=t.isDisabled,n=t.innerProps;return F("div",D({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},Li=ki,$i={ClearIndicator:Zr,Control:ai,DropdownIndicator:Kr,DownChevron:Dt,CrossIcon:Te,Group:pi,GroupHeading:di,IndicatorsContainer:Wr,IndicatorSeparator:ei,Input:bi,LoadingIndicator:ri,Menu:Pr,MenuList:Rr,MenuPortal:jr,LoadingMessage:Tr,NoOptionsMessage:$r,MultiValue:Di,MultiValueContainer:Si,MultiValueLabel:wi,MultiValueRemove:yi,Option:Ii,Placeholder:Vi,SelectContainer:zr,SingleValue:Li,ValueContainer:Nr},Ti=function(t){return y(y({},$i),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Bi(e,t){return!!(e===t||Xe(e)&&Xe(t))}function ji(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Bi(e[r],t[r]))return!1;return!0}function Hi(e,t){t===void 0&&(t=ji);var r=null;function i(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&t(n,r.lastArgs))return r.lastResult;var s=e.apply(this,n);return r={lastResult:s,lastArgs:n,lastThis:this},s}return i.clear=function(){r=null},i}var zi={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},_i=function(t){return F("span",D({css:zi},t))},Ke=_i,Ni={guidance:function(t){var r=t.isSearchable,i=t.isMulti,n=t.isDisabled,a=t.tabSelectsValue,s=t.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(n?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,i=t.label,n=i===void 0?"":i,a=t.labels,s=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(t){var r=t.context,i=t.focused,n=t.options,a=t.label,s=a===void 0?"":a,o=t.selectValue,u=t.isDisabled,l=t.isSelected,c=function(x,b){return x&&x.length?"".concat(x.indexOf(b)+1," of ").concat(x.length):""};if(r==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,i),".");if(r==="menu"){var d=u?" disabled":"",v="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(v,", ").concat(c(n,i),".")}return""},onFilter:function(t){var r=t.inputValue,i=t.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Ui=function(t){var r=t.ariaSelection,i=t.focusedOption,n=t.focusedValue,a=t.focusableOptions,s=t.isFocused,o=t.selectValue,u=t.selectProps,l=t.id,c=u.ariaLiveMessages,d=u.getOptionLabel,v=u.inputValue,E=u.isMulti,x=u.isOptionDisabled,b=u.isSearchable,g=u.menuIsOpen,m=u.options,f=u.screenReaderStatus,C=u.tabSelectsValue,O=u["aria-label"],M=u["aria-live"],w=p.useMemo(function(){return y(y({},Ni),c||{})},[c]),A=p.useMemo(function(){var k="";if(r&&w.onChange){var L=r.option,H=r.options,U=r.removedValue,W=r.removedValues,K=r.value,Q=function(G){return Array.isArray(G)?null:G},ee=U||L||Q(K),$=ee?d(ee):"",B=H||W||void 0,Z=B?B.map(d):[],J=y({isDisabled:ee&&x(ee,o),label:$,labels:Z},r);k=w.onChange(J)}return k},[r,w,x,o,d]),I=p.useMemo(function(){var k="",L=i||n,H=!!(i&&o&&o.includes(i));if(L&&w.onFocus){var U={focused:L,label:d(L),isDisabled:x(L,o),isSelected:H,options:a,context:L===i?"menu":"value",selectValue:o};k=w.onFocus(U)}return k},[i,n,d,x,w,a,o]),R=p.useMemo(function(){var k="";if(g&&m.length&&w.onFilter){var L=f({count:a.length});k=w.onFilter({inputValue:v,resultsMessage:L})}return k},[a,v,g,w,m,f]),j=p.useMemo(function(){var k="";if(w.guidance){var L=n?"value":g?"menu":"input";k=w.guidance({"aria-label":O,context:L,isDisabled:i&&x(i,o),isMulti:E,isSearchable:b,tabSelectsValue:C})}return k},[O,i,n,E,x,b,g,w,o,C]),_="".concat(I," ").concat(R," ").concat(j),T=F(p.Fragment,null,F("span",{id:"aria-selection"},A),F("span",{id:"aria-context"},_)),N=(r==null?void 0:r.action)==="initial-input-focus";return F(p.Fragment,null,F(Ke,{id:l},N&&T),F(Ke,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!N&&T))},Wi=Ui,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],qi=new RegExp("["+Re.map(function(e){return e.letters}).join("")+"]","g"),Mt={};for(var ye=0;ye<Re.length;ye++)for(var Fe=Re[ye],De=0;De<Fe.letters.length;De++)Mt[Fe.letters[De]]=Fe.base;var Pt=function(t){return t.replace(qi,function(r){return Mt[r]})},Gi=Hi(Pt),Qe=function(t){return t.replace(/^\s+|\s+$/g,"")},Yi=function(t){return"".concat(t.label," ").concat(t.value)},Xi=function(t){return function(r,i){if(r.data.__isNew__)return!0;var n=y({ignoreCase:!0,ignoreAccents:!0,stringify:Yi,trim:!0,matchFrom:"any"},t),a=n.ignoreCase,s=n.ignoreAccents,o=n.stringify,u=n.trim,l=n.matchFrom,c=u?Qe(i):i,d=u?Qe(o(r)):o(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Gi(c),d=Pt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ki=["innerRef"];function Qi(e){var t=e.innerRef,r=X(e,Ki),i=wr(r,"onExited","in","enter","exit","appear");return F("input",D({ref:t},i,{css:ct({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Zi=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Ji(e){var t=e.isEnabled,r=e.onBottomArrive,i=e.onBottomLeave,n=e.onTopArrive,a=e.onTopLeave,s=p.useRef(!1),o=p.useRef(!1),u=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(g,m){if(l.current!==null){var f=l.current,C=f.scrollTop,O=f.scrollHeight,M=f.clientHeight,w=l.current,A=m>0,I=O-M-C,R=!1;I>m&&s.current&&(i&&i(g),s.current=!1),A&&o.current&&(a&&a(g),o.current=!1),A&&m>I?(r&&!s.current&&r(g),w.scrollTop=O,R=!0,s.current=!0):!A&&-m>C&&(n&&!o.current&&n(g),w.scrollTop=0,R=!0,o.current=!0),R&&Zi(g)}},[r,i,n,a]),d=p.useCallback(function(g){c(g,g.deltaY)},[c]),v=p.useCallback(function(g){u.current=g.changedTouches[0].clientY},[]),E=p.useCallback(function(g){var m=u.current-g.changedTouches[0].clientY;c(g,m)},[c]),x=p.useCallback(function(g){if(g){var m=Er?{passive:!1}:!1;g.addEventListener("wheel",d,m),g.addEventListener("touchstart",v,m),g.addEventListener("touchmove",E,m)}},[E,v,d]),b=p.useCallback(function(g){g&&(g.removeEventListener("wheel",d,!1),g.removeEventListener("touchstart",v,!1),g.removeEventListener("touchmove",E,!1))},[E,v,d]);return p.useEffect(function(){if(t){var g=l.current;return x(g),function(){b(g)}}},[t,x,b]),function(g){l.current=g}}var Ze=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(e){e.preventDefault()}function tt(e){e.stopPropagation()}function nt(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function rt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,te={capture:!1,passive:!1};function eo(e){var t=e.isEnabled,r=e.accountForScrollbars,i=r===void 0?!0:r,n=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;if(i&&Ze.forEach(function(x){var b=c&&c[x];n.current[x]=b}),i&&re<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,E=window.innerWidth-v+d||0;Object.keys(Je).forEach(function(x){var b=Je[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(E,"px"))}l&&rt()&&(l.addEventListener("touchmove",et,te),u&&(u.addEventListener("touchstart",nt,te),u.addEventListener("touchmove",tt,te))),re+=1}},[i]),o=p.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;re=Math.max(re-1,0),i&&re<1&&Ze.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),l&&rt()&&(l.removeEventListener("touchmove",et,te),u&&(u.removeEventListener("touchstart",nt,te),u.removeEventListener("touchmove",tt,te)))}},[i]);return p.useEffect(function(){if(t){var u=a.current;return s(u),function(){o(u)}}},[t,s,o]),function(u){a.current=u}}var to=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},no={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function ro(e){var t=e.children,r=e.lockEnabled,i=e.captureEnabled,n=i===void 0?!0:i,a=e.onBottomArrive,s=e.onBottomLeave,o=e.onTopArrive,u=e.onTopLeave,l=Ji({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),c=eo({isEnabled:r}),d=function(E){l(E),c(E)};return F(p.Fragment,null,r&&F("div",{onClick:to,css:no}),t(d))}var io={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},oo=function(t){var r=t.name,i=t.onFocus;return F("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:io,value:"",onChange:function(){}})},ao=oo,uo=function(t){return t.label},so=function(t){return t.label},lo=function(t){return t.value},co=function(t){return!!t.isDisabled},po={clearIndicator:Qr,container:Hr,control:ii,dropdownIndicator:Xr,group:si,groupHeading:ci,indicatorsContainer:Ur,indicatorSeparator:Jr,input:hi,loadingIndicator:ni,loadingMessage:Lr,menu:Ar,menuList:Vr,menuPortal:Br,multiValue:xi,multiValueLabel:Ei,multiValueRemove:Ci,noOptionsMessage:kr,option:Oi,placeholder:Mi,singleValue:Ri,valueContainer:_r},fo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},ho=4,Vt=4,mo=38,go=Vt*2,vo={baseUnit:Vt,controlHeight:mo,menuGutter:go},Oe={borderRadius:ho,colors:fo,spacing:vo},bo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Xi(),formatGroupLabel:uo,getOptionLabel:so,getOptionValue:lo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:co,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!br(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ot(e,t,r,i){var n=$t(e,t,r),a=Tt(e,t,r),s=Lt(e,t),o=xe(e,t);return{type:"option",data:t,isDisabled:n,isSelected:a,label:s,value:o,index:i}}function Rt(e,t){return e.options.map(function(r,i){if("options"in r){var n=r.options.map(function(s,o){return ot(e,s,t,o)}).filter(function(s){return at(e,s)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var a=ot(e,r,t,i);return at(e,a)?a:void 0}).filter(Cr)}function kt(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,ft(r.options.map(function(i){return i.data}))):t.push(r.data),t},[])}function xo(e,t){return kt(Rt(e,t))}function at(e,t){var r=e.inputValue,i=r===void 0?"":r,n=t.data,a=t.isSelected,s=t.label,o=t.value;return(!jt(e)||!a)&&Bt(e,{label:s,value:o,data:n},i)}function Eo(e,t){var r=e.focusedValue,i=e.selectValue,n=i.indexOf(r);if(n>-1){var a=t.indexOf(r);if(a>-1)return r;if(n<t.length)return t[n]}return null}function Co(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var Lt=function(t,r){return t.getOptionLabel(r)},xe=function(t,r){return t.getOptionValue(r)};function $t(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function Tt(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var i=xe(e,t);return r.some(function(n){return xe(e,n)===i})}function Bt(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var jt=function(t){var r=t.hideSelectedOptions,i=t.isMulti;return r===void 0?i:r},So=1,Ht=function(e){Bn(r,e);var t=zn(r);function r(i){var n;if(_n(this,r),n=t.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.instancePrefix="",n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,u){var l=n.props,c=l.onChange,d=l.name;u.name=d,n.ariaOnChange(o,u),c(o,u)},n.setValue=function(o,u,l){var c=n.props,d=c.closeMenuOnSelect,v=c.isMulti,E=c.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:E}),d&&(n.setState({inputIsHiddenAfterUpdate:!v}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:u,option:l})},n.selectOption=function(o){var u=n.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,v=n.state.selectValue,E=c&&n.isOptionSelected(o,v),x=n.isOptionDisabled(o,v);if(E){var b=n.getOptionValue(o);n.setValue(v.filter(function(g){return n.getOptionValue(g)!==b}),"deselect-option",o)}else if(!x)c?n.setValue([].concat(ft(v),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&n.blurInput()},n.removeValue=function(o){var u=n.props.isMulti,l=n.state.selectValue,c=n.getOptionValue(o),d=l.filter(function(E){return n.getOptionValue(E)!==c}),v=ce(u,d,d[0]||null);n.onChange(v,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(ce(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,u=n.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=ce(o,c,c[0]||null);n.onChange(d,{action:"pop-value",removedValue:l})},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return fr.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(o){return Lt(n.props,o)},n.getOptionValue=function(o){return xe(n.props,o)},n.getStyles=function(o,u){var l=n.props.unstyled,c=po[o](u,l);c.boxSizing="border-box";var d=n.props.styles[o];return d?d(c,u):c},n.getClassNames=function(o,u){var l,c;return(l=(c=n.props.classNames)[o])===null||l===void 0?void 0:l.call(c,u)},n.getElementId=function(o){return"".concat(n.instancePrefix,"-").concat(o)},n.getComponents=function(){return Ti(n.props)},n.buildCategorizedOptions=function(){return Rt(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return kt(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,u){n.setState({ariaSelection:y({value:o},u)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var u=n.props,l=u.isMulti,c=u.menuIsOpen;n.focusInput(),c?(n.setState({inputIsHiddenAfterUpdate:!l}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(n.initialTouchX=l.clientX,n.initialTouchY=l.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-n.initialTouchX),d=Math.abs(l.clientY-n.initialTouchY),v=5;n.userIsDragging=c>v||d>v}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var u=n.props.inputValue,l=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(l,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){n.blockOptionHover||n.state.focusedOption===o||n.setState({focusedOption:o})},n.shouldHideSelectedOptions=function(){return jt(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var u=n.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,v=u.inputValue,E=u.isClearable,x=u.isDisabled,b=u.menuIsOpen,g=u.onKeyDown,m=u.tabSelectsValue,f=u.openMenuOnFocus,C=n.state,O=C.focusedOption,M=C.focusedValue,w=C.selectValue;if(!x&&!(typeof g=="function"&&(g(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||v)return;n.focusValue("previous");break;case"ArrowRight":if(!l||v)return;n.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)n.removeValue(M);else{if(!c)return;l?n.popValue():E&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!b||!m||!O||f&&n.isOptionSelected(O,w))return;n.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(b){if(!O||n.isComposing)return;n.selectOption(O);break}return;case"Escape":b?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:v}),n.onMenuClose()):E&&d&&n.clearValue();break;case" ":if(v)return;if(!b){n.openMenu("first");break}if(!O)return;n.selectOption(O);break;case"ArrowUp":b?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":b?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!b)return;n.focusOption("pageup");break;case"PageDown":if(!b)return;n.focusOption("pagedown");break;case"Home":if(!b)return;n.focusOption("first");break;case"End":if(!b)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.instancePrefix="react-select-"+(n.props.instanceId||++So),n.state.selectValue=We(i.value),i.menuIsOpen&&n.state.selectValue.length){var a=n.buildFocusableOptions(),s=a.indexOf(n.state.selectValue[0]);n.state.focusedOption=a[s]}return n}return Nn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&qe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&n.isDisabled||u&&o&&!n.menuIsOpen)&&this.focusInput(),u&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(qe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(n){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),n==="up"?u=l>0?l-1:o.length-1:n==="down"?u=(l+1)%o.length:n==="pageup"?(u=l-a,u<0&&(u=0)):n==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):n==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):y(y({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,E=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:b,isMulti:v,isRtl:E,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return $t(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Tt(this.props,n,a)}},{key:"filterOption",value:function(n,a){return Bt(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,o=n.inputId,u=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,E=this.getComponents(),x=E.Input,b=this.state,g=b.inputIsHidden,m=b.ariaSelection,f=this.commonProps,C=o||this.getElementId("input"),O=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(x,D({},f,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:g,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},O)):p.createElement(Qi,D({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,E=this.props,x=E.controlShouldRenderValue,b=E.isDisabled,g=E.isMulti,m=E.inputValue,f=E.placeholder,C=this.state,O=C.selectValue,M=C.focusedValue,w=C.isFocused;if(!this.hasValue()||!x)return m?null:p.createElement(d,D({},v,{key:"placeholder",isDisabled:b,isFocused:w,innerProps:{id:this.getElementId("placeholder")}}),f);if(g)return O.map(function(I,R){var j=I===M,_="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return p.createElement(s,D({},v,{components:{Container:o,Label:u,Remove:l},isFocused:j,isDisabled:b,key:_,index:R,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(N){N.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(m)return null;var A=O[0];return p.createElement(c,D({},v,{data:A,isDisabled:b}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,D({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,D({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return p.createElement(s,D({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,D({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,E=a.Option,x=this.commonProps,b=this.state.focusedOption,g=this.props,m=g.captureMenuScroll,f=g.inputValue,C=g.isLoading,O=g.loadingMessage,M=g.minMenuHeight,w=g.maxMenuHeight,A=g.menuIsOpen,I=g.menuPlacement,R=g.menuPosition,j=g.menuPortalTarget,_=g.menuShouldBlockScroll,T=g.menuShouldScrollIntoView,N=g.noOptionsMessage,k=g.onMenuScrollToTop,L=g.onMenuScrollToBottom;if(!A)return null;var H=function(B,Z){var J=B.type,q=B.data,G=B.isDisabled,ne=B.isSelected,oe=B.label,Yt=B.value,Be=b===q,je=G?void 0:function(){return n.onOptionHover(q)},Xt=G?void 0:function(){return n.selectOption(q)},He="".concat(n.getElementId("option"),"-").concat(Z),Kt={id:He,onClick:Xt,onMouseMove:je,onMouseOver:je,tabIndex:-1};return p.createElement(E,D({},x,{innerProps:Kt,data:q,isDisabled:G,isSelected:ne,key:He,label:oe,type:J,value:Yt,isFocused:Be,innerRef:Be?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(B.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function($){if($.type==="group"){var B=$.data,Z=$.options,J=$.index,q="".concat(n.getElementId("group"),"-").concat(J),G="".concat(q,"-heading");return p.createElement(s,D({},x,{key:q,data:B,options:Z,Heading:o,headingProps:{id:G,data:$.data},label:n.formatGroupLabel($.data)}),$.options.map(function(ne){return H(ne,"".concat(J,"-").concat(ne.index))}))}else if($.type==="option")return H($,"".concat($.index))});else if(C){var W=O({inputValue:f});if(W===null)return null;U=p.createElement(d,x,W)}else{var K=N({inputValue:f});if(K===null)return null;U=p.createElement(v,x,K)}var Q={minMenuHeight:M,maxMenuHeight:w,menuPlacement:I,menuPosition:R,menuShouldScrollIntoView:T},ee=p.createElement(Ir,D({},x,Q),function($){var B=$.ref,Z=$.placerProps,J=Z.placement,q=Z.maxHeight;return p.createElement(u,D({},x,Q,{innerRef:B,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove,id:n.getElementId("listbox")},isLoading:C,placement:J}),p.createElement(ro,{captureEnabled:m,onTopArrive:k,onBottomArrive:L,lockEnabled:_},function(G){return p.createElement(l,D({},x,{innerRef:function(oe){n.getMenuListRef(oe),G(oe)},isLoading:C,maxHeight:q,focusedOption:b}),U)}))});return j||R==="fixed"?p.createElement(c,D({},x,{appendTo:j,controlElement:this.controlRef,menuPlacement:I,menuPosition:R}),ee):ee}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return p.createElement(ao,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var v=d.map(function(b){return n.getOptionValue(b)}).join(s);return p.createElement("input",{name:l,type:"hidden",value:v})}else{var E=d.length>0?d.map(function(b,g){return p.createElement("input",{key:"i-".concat(g),name:l,type:"hidden",value:n.getOptionValue(b)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,E)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Wi,D({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,o=n.SelectContainer,u=n.ValueContainer,l=this.props,c=l.className,d=l.id,v=l.isDisabled,E=l.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(o,D({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:x}),this.renderLiveRegion(),p.createElement(a,D({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:x,menuIsOpen:E}),p.createElement(u,D({},b,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,D({},b,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=n.options,E=n.value,x=n.menuIsOpen,b=n.inputValue,g=n.isMulti,m=We(E),f={};if(s&&(E!==s.value||v!==s.options||x!==s.menuIsOpen||b!==s.inputValue)){var C=x?xo(n,m):[],O=o?Eo(a,m):null,M=Co(a,C);f={selectValue:m,focusedOption:M,focusedValue:O,clearFocusValueOnUpdate:!1}}var w=u!=null&&n!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},A=l,I=c&&d;return c&&!I&&(A={value:ce(g,m,m[0]||null),options:m,action:"initial-input-focus"},I=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(A=null),y(y(y({},f),w),{},{prevProps:n,ariaSelection:A,prevWasFocused:I})}}]),r}(p.Component);Ht.defaultProps=bo;var wo=p.forwardRef(function(e,t){var r=Yn(e);return p.createElement(Ht,D({ref:t},r))}),yo=wo;const Fo=S.p`
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
`,Do=S.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    gap: 16px;
  }
`,Oo=S.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,Ao=S.input`
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
`,Io=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
`,Mo=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,Po=S.div`
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
`,st=S(yo)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);
`,{QUERY:de,RECOMMENDED:pe,CATEGORY:zt}=rn,Vo={[de]:"",[zt]:"",[pe]:""};function _t({onProductsChange:e}){const[t,r]=p.useState(Vo),[i,n]=p.useState(""),[a,s]=p.useState([]),{isSuccess:o,currentData:u}=nn();p.useEffect(()=>{if(o){const[f]=u,{productsCategories:C}=f;s(C)}},[u,o]),p.useEffect(()=>{e(t)},[t,e]);const l=()=>{n(""),r(f=>({...f,[de]:""}))},c=["All","Recommended","Not recommended"],[d,v]=p.useState(null),[E,x]=p.useState(null),b=f=>{r(C=>({...C,[de]:f.target.value.trim()})),n(f.target.value)},g=f=>{v(f),r(C=>({...C,[zt]:f.label}))},m=f=>{switch(x(f),f.label){case"Recommended":r(C=>({...C,[pe]:[!0]}));break;case"Not recommended":r(C=>({...C,[pe]:[!1]}));break;default:r(C=>({...C,[pe]:null}))}};return h.jsx(h.Fragment,{children:h.jsxs(Do,{children:[h.jsxs(Oo,{children:[h.jsx(Ao,{type:"text",value:t[de],onChange:b}),h.jsx(Io,{width:"18",height:"18",children:h.jsx("use",{href:`${ie}#search`})}),i.trim()&&h.jsx(Mo,{onClick:l,children:h.jsx("svg",{width:"18",height:"18",children:h.jsx("use",{href:`${ie}#x-clean`})})})]}),h.jsxs(Po,{children:[h.jsx(ut,{children:h.jsx(st,{styles:{option:f=>({...f,background:"#1C1C1C"}),control:f=>({...f,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:f=>({...f,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:f=>({...f,background:"#040404",borderRadius:"12px"}),menuList:f=>({...f,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:f=>({...f,display:"none"}),placeholder:f=>({...f,color:"#efede8"}),singleValue:f=>({...f,color:"#efede8",justifyContent:"center"}),container:f=>({...f,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:f=>({...f,fontSize:"14px"}),valueContainer:f=>({...f,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:g,options:a.map(f=>({label:f.charAt(0).toUpperCase()+f.slice(1)})),placeholder:"Categories"})}),h.jsx(ut,{children:h.jsx(st,{styles:{option:f=>({...f,background:"#1C1C1C"}),control:f=>({...f,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:f=>({...f,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:f=>({...f,background:"none",border:"none"}),menuList:f=>({...f,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:f=>({...f,display:"none"}),placeholder:f=>({...f,color:"#efede8"}),singleValue:f=>({...f,color:"#efede8",justifyContent:"center"}),container:f=>({...f,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:f=>({...f,fontSize:"14px"}),valueContainer:f=>({...f,"@media (min-width: 768px)":{width:"195px"}})},value:E,onChange:m,options:c.map(f=>({label:f})),placeholder:"All"})})]}),h.jsx(Fo,{children:"Filters"})]})})}_t.propTypes={onProductsChange:P.func.isRequired};const Ro=S.div`
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
`,ko=S.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
  }
`,Lo=S.div`
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
`;function Nt({selectedDate:e,setSelectedDate:t}){const r=dt(e,"dd.MM.yyyy");return h.jsx(hn,{maxDate:new Date,onChange:t,value:e,children:h.jsxs(Ro,{children:[h.jsx(ko,{children:r}),h.jsx(Lo,{children:h.jsx(on,{name:"calendar"})})]})})}Nt.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const $o=S.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 320px;
  }
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 48px 32px;
    width: auto;
  }
`,To=S.div`
  position: relative;
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 415px;
  }
`,Bo=S.input`
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
`,jo=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
  }
`,Ho=S.input`
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
`,zo=S.span`
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
`,No=S.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Uo=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,Wo=S.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    justify-content: flex-start;
  }
`,qo=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 64px;
  }
`,Go=S.button`
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
`,Yo=S.button`
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
`;function Ut(e){const[t,r]=p.useState(new Date),{onClose:i,addProdSuccess:n,addProdError:a,product:s}=e,{weight:o,calories:u,_id:l,title:c}=s,[d,v]=p.useState(o),E=d*u/100,[x]=an(),b={product_ID:l,date:dt(new Date(t),"yyyy-MM-dd"),amount:d,calories:E},g=async()=>{const{error:m}=await x(b);m?a(m.data.message):(i(),n(E))};return h.jsxs($o,{children:[h.jsxs(To,{children:[h.jsx(Bo,{type:"text",value:c,readOnly:!0,disabled:!0}),h.jsxs(jo,{children:[h.jsx(Ho,{type:"number",value:d,onChange:m=>v(m.target.value)}),h.jsx(zo,{children:"grams"})]})]}),h.jsxs(qo,{children:[h.jsx(Nt,{selectedDate:t,setSelectedDate:r}),h.jsxs(_o,{children:[h.jsx(No,{children:"Calories:"}),h.jsx(Uo,{children:E})]})]}),h.jsxs(Wo,{children:[h.jsx(Go,{onClick:g,children:"Add to diary"}),h.jsx(Yo,{onClick:i,children:"Cancel"})]})]})}Ut.propTypes={onClose:P.func.isRequired,addProdSuccess:P.func.isRequired,addProdError:P.func.isRequired,product:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,_id:P.string.isRequired,title:P.string.isRequired}).isRequired};const Xo="/power-pulse/assets/avocado-b622cf8b.png",Ko=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin: 22px 111px;
  }
`,Qo=S.div`
  background: url(${Xo}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 19px;
  }
`,Zo=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,Jo=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,ea=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,ta=S.span`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,na=S.button`
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
`,ra=S(un)`
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
`,ia=S.p`
  margin-right: 8px;
  transition: color 300ms ease-in-out;
`;function Wt({onClose:e,totalCalories:t}){return h.jsxs(Ko,{children:[h.jsx(Qo,{}),h.jsx(Zo,{children:"Well Done"}),h.jsxs(Jo,{children:[h.jsx(ea,{children:"Calories:"}),h.jsx(ta,{children:t})]}),h.jsx(na,{onClick:e,children:"Next product"}),h.jsxs(ra,{to:`/${sn.DIARY}`,children:[h.jsx(ia,{children:"To the diary"}),h.jsx("svg",{width:"16",height:"16",children:h.jsx("use",{href:ie+"#arrow-add-prod"})})]})]})}Wt.propTypes={totalCalories:P.number,onClose:P.func.isRequired};const oa=S.div`
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
`,aa=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,ua=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,sa=S.div`
  display: flex;
  align-items: center;
`,la=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({recommended:e,theme:t})=>e?t.color.circleGreen:t.color.circleRed};
`,ca=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,da=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,pa=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,fa=S.svg`
  width: 16px;
  height: 16px;
`,ha=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,ma=S.svg`
  width: 24px;
  height: 24px;
`,ga=S.h2`
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
`,va=S.div`
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
`;function qt({props:e,userGroupBlood:t}){const{weight:r,calories:i,category:n,title:a,groupBloodNotAllowed:s}=e,o=!s[t],[u,l]=p.useState(!1),[c,d]=p.useState(!1),[v,E]=p.useState(!1),[x,b]=p.useState(null),[g,m]=p.useState(""),f=()=>{l(!0)},C=()=>{l(!1),d(!1),E(!1)},O=w=>{d(!0),b(w)},M=w=>{E(!0),m(w)};return h.jsxs(h.Fragment,{children:[h.jsxs(oa,{children:[h.jsxs(aa,{children:[h.jsx(ua,{children:"DIET"}),h.jsxs(sa,{children:[h.jsx(la,{recommended:o}),h.jsx(ca,{children:o?"Recommended":"Not recommended"}),h.jsxs(da,{onClick:f,children:[h.jsx(pa,{children:"Add"}),h.jsx(fa,{children:h.jsx("use",{href:`${ie}#arrow-add-prod-orange`})})]})]})]}),h.jsxs(ha,{children:[h.jsx(ma,{children:h.jsx("use",{href:`${ie}#run-man`})}),h.jsx(ga,{children:a})]}),h.jsxs(va,{children:[h.jsxs(Ae,{children:["Calories:",h.jsx(Ie,{children:i})]}),h.jsxs(Ae,{category:!0,children:["Category:",h.jsx(Ie,{children:n})]}),h.jsxs(Ae,{children:["Weight:",h.jsx(Ie,{children:r})]})]})]}),h.jsx(Ce,{onClose:C,onShow:u,children:h.jsx(Ut,{onClose:C,addProdSuccess:O,product:e,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:c,children:h.jsx(Wt,{onClose:C,totalCalories:x,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:v,children:h.jsx(ln,{message:g,onClose:C})})]})}qt.propTypes={props:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,category:P.string.isRequired,title:P.string.isRequired,groupBloodNotAllowed:P.object.isRequired}).isRequired,userGroupBlood:P.number};const ba=S.ul`
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
`,xa=S.p`
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Ea=S.span`
  color: #e6533c;
`,Ca=S.span`
  margin-top: 16px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Gt({filter:e}){const[t,r]=p.useState([]),[i,n]=p.useState(null),[a,s]=p.useState(null),[o,u]=p.useState(1),[l,c]=p.useState(!0),d=p.useRef(),[v,{isLoading:E,isError:x,error:b}]=cn(),{isSuccess:g,data:m,isLoading:f,isError:C,error:O}=dn(),{ref:M}=fn({onChange:w=>{w&&l&&u(A=>A+1)}});return p.useEffect(()=>{g&&n(m)},[g,m]),p.useEffect(()=>{d.current&&(d.current.scrollTop=0),u(1),c(!0),s(e)},[e,M]),p.useEffect(()=>{l&&a&&(async()=>{try{const A=await v({page:o,...a}).unwrap();A.data.length<18&&c(!1),r(o===1?[...A.data]:I=>[...I,...A.data])}catch(A){console.error("Error fetching data:",A.message)}})()},[v,o,a,l]),h.jsxs(h.Fragment,{children:[t.length>0?h.jsx(ba,{ref:d,children:t.map((w,A)=>h.jsx("li",{ref:A===t.length-1?M:null,children:h.jsx(qt,{props:w,userGroupBlood:i},w._id)},A))}):h.jsxs(h.Fragment,{children:[h.jsxs(xa,{children:[h.jsx(Ea,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(Ca,{children:"Try changing the search parameters."})]}),h.jsx(ze,{isLoading:E,isError:x,error:b}),h.jsx(ze,{isLoading:f,isError:C,error:O})]})}Gt.propTypes={filter:P.shape({title:P.string.isRequired,category:P.string.isRequired,recommended:P.oneOfType([P.oneOf([""]),P.arrayOf(P.oneOf([!0,!1]))])})};const Sa={Alcoholicdrinks:`url(${xn})`,Berries:`url(${En})`,Cereals:`url(${Cn})`,Dairy:`url(${Sn})`,Driedfruits:`url(${wn})`,Eggs:`url(${yn})`,Fish:`url(${Fn})`,Flour:`url(${Dn})`,Fruits:`url(${On})`,Meat:`url(${An})`,Mushrooms:`url(${In})`,Nuts:`url(${Mn})`,Oilsandfats:`url(${Pn})`,Poppy:`url(${Vn})`,Sausage:`url(${Rn})`,Seeds:`url(${kn})`,Sesame:`url(${Ln})`,Softdrinks:`url(${$n})`,Vegetablesandherbs:`url(${Tn})`},wa=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: linear-gradient(90deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
    linear-gradient(180deg, #040404 1.1%, rgba(4, 4, 4, 0) 50.79%),
    ${e=>Sa[e==null?void 0:e.filter]||`image-set(
    url(${gn}) 1x,
    url(${vn}) 2x,
      url(${bn}) 3x)`},
    no-repeat;
  background-size: 428px 716px;
`,ya=S.div`
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
`;function Ma(){const[e,t]=p.useState(null),[r,i]=p.useState(window.innerWidth>=1440),n=()=>{i(window.innerWidth>=1440)};return p.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),h.jsxs(h.Fragment,{children:[r&&h.jsx(wa,{filter:e==null?void 0:e.category.split(" ").join("")}),h.jsxs(ya,{children:[h.jsx(pn,{text:"Products"}),h.jsx(_t,{onProductsChange:t})]}),h.jsx(Gt,{filter:e})]})}export{Ma as Products};
