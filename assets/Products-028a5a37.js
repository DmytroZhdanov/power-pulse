import{_ as ut,w as _t,r as f,y as C,z as Ut,A as re,C as S,v as F,F as Nt,G as st,n as E,H as Wt,j as m,J as Gt,o as je,B as He,K as Yt}from"./index-26373dec.js";import{T as qt}from"./TitlePage-ecbd41e3.js";import{_ as Kt,a as Xt}from"./setPrototypeOf-51e8cf87.js";const Qt="/power-pulse/assets/bg_eating-526af03d.jpg",Jt="/power-pulse/assets/bg_eating@2x-53f5e280.jpg",Zt="/power-pulse/assets/bg_eating@3x-1df10d6d.jpg";function Oe(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function lt(n,e){if(n){if(typeof n=="string")return Oe(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Oe(n,e)}}function en(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Kt(n,e)}function de(n){return de=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},de(n)}function nn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rn(n,e){if(e&&(ut(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return en(n)}function on(n){var e=nn();return function(){var r=de(n),t;if(e){var a=de(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return rn(this,t)}}function an(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function $e(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,_t(r.key),r)}}function un(n,e,i){return e&&$e(n.prototype,e),i&&$e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function sn(n){if(Array.isArray(n))return n}function ln(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,t,a,s,o=[],u=!0,l=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;u=!1}else for(;!(u=(r=a.call(i)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(d){l=!0,t=d}finally{try{if(!u&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(l)throw t}}return o}}function cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return sn(n)||ln(n,e)||lt(n,e)||cn()}function q(n,e){if(n==null)return{};var i=Xt(n,e),r,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var dn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function pn(n){var e=n.defaultInputValue,i=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,a=n.defaultValue,s=a===void 0?null:a,o=n.inputValue,u=n.menuIsOpen,l=n.onChange,d=n.onInputChange,p=n.onMenuClose,v=n.onMenuOpen,x=n.value,b=q(n,dn),g=f.useState(o!==void 0?o:i),h=Y(g,2),c=h[0],y=h[1],O=f.useState(u!==void 0?u:t),D=Y(O,2),M=D[0],w=D[1],I=f.useState(x!==void 0?x:s),A=Y(I,2),P=A[0],j=A[1],z=f.useCallback(function(N,K){typeof l=="function"&&l(N,K),j(N)},[l]),k=f.useCallback(function(N,K){var X;typeof d=="function"&&(X=d(N,K)),y(X!==void 0?X:N)},[d]),_=f.useCallback(function(){typeof v=="function"&&v(),w(!0)},[v]),R=f.useCallback(function(){typeof p=="function"&&p(),w(!1)},[p]),L=o!==void 0?o:c,H=u!==void 0?u:M,U=x!==void 0?x:P;return C(C({},b),{},{inputValue:L,menuIsOpen:H,onChange:z,onInputChange:k,onMenuClose:R,onMenuOpen:_,value:U})}function fn(n){if(Array.isArray(n))return Oe(n)}function hn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(n){return fn(n)||hn(n)||lt(n)||mn()}function vn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const gn=Math.min,bn=Math.max,pe=Math.round,oe=Math.floor,fe=n=>({x:n,y:n});function xn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function dt(n){return ft(n)?(n.nodeName||"").toLowerCase():"#document"}function $(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function pt(n){var e;return(e=(ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ft(n){return n instanceof Node||n instanceof $(n).Node}function Ae(n){return n instanceof Element||n instanceof $(n).Element}function Ve(n){return n instanceof HTMLElement||n instanceof $(n).HTMLElement}function ze(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof $(n).ShadowRoot}function ht(n){const{overflow:e,overflowX:i,overflowY:r,display:t}=Pe(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(t)}function En(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Cn(n){return["html","body","#document"].includes(dt(n))}function Pe(n){return $(n).getComputedStyle(n)}function Sn(n){if(dt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||ze(n)&&n.host||pt(n);return ze(e)?e.host:e}function mt(n){const e=Sn(n);return Cn(e)?n.ownerDocument?n.ownerDocument.body:n.body:Ve(e)&&ht(e)?e:mt(e)}function he(n,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=mt(n),a=t===((r=n.ownerDocument)==null?void 0:r.body),s=$(t);return a?e.concat(s,s.visualViewport||[],ht(t)?t:[],s.frameElement&&i?he(s.frameElement):[]):e.concat(t,he(t,[],i))}function Fn(n){const e=Pe(n);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=Ve(n),a=t?n.offsetWidth:i,s=t?n.offsetHeight:r,o=pe(i)!==a||pe(r)!==s;return o&&(i=a,r=s),{width:i,height:r,$:o}}function Re(n){return Ae(n)?n:n.contextElement}function xe(n){const e=Re(n);if(!Ve(e))return fe(1);const i=e.getBoundingClientRect(),{width:r,height:t,$:a}=Fn(e);let s=(a?pe(i.width):i.width)/r,o=(a?pe(i.height):i.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const yn=fe(0);function wn(n){const e=$(n);return!En()||!e.visualViewport?yn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Dn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==$(n)?!1:e}function _e(n,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=Re(n);let s=fe(1);e&&(r?Ae(r)&&(s=xe(r)):s=xe(n));const o=Dn(a,i,r)?wn(a):fe(0);let u=(t.left+o.x)/s.x,l=(t.top+o.y)/s.y,d=t.width/s.x,p=t.height/s.y;if(a){const v=$(a),x=r&&Ae(r)?$(r):r;let b=v.frameElement;for(;b&&r&&x!==v;){const g=xe(b),h=b.getBoundingClientRect(),c=Pe(b),y=h.left+(b.clientLeft+parseFloat(c.paddingLeft))*g.x,O=h.top+(b.clientTop+parseFloat(c.paddingTop))*g.y;u*=g.x,l*=g.y,d*=g.x,p*=g.y,u+=y,l+=O,b=$(b).frameElement}}return xn({width:d,height:p,x:u,y:l})}function On(n,e){let i=null,r;const t=pt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const{left:l,top:d,width:p,height:v}=n.getBoundingClientRect();if(o||e(),!p||!v)return;const x=oe(d),b=oe(t.clientWidth-(l+p)),g=oe(t.clientHeight-(d+v)),h=oe(l),y={rootMargin:-x+"px "+-b+"px "+-g+"px "+-h+"px",threshold:bn(0,gn(1,u))||1};let O=!0;function D(M){const w=M[0].intersectionRatio;if(w!==u){if(!O)return s();w?s(!1,w):r=setTimeout(()=>{s(!1,1e-7)},100)}O=!1}try{i=new IntersectionObserver(D,{...y,root:t.ownerDocument})}catch{i=new IntersectionObserver(D,y)}i.observe(n)}return s(!0),a}function An(n,e,i,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=Re(n),d=t||a?[...l?he(l):[],...he(e)]:[];d.forEach(c=>{t&&c.addEventListener("scroll",i,{passive:!0}),a&&c.addEventListener("resize",i)});const p=l&&o?On(l,i):null;let v=-1,x=null;s&&(x=new ResizeObserver(c=>{let[y]=c;y&&y.target===l&&x&&(x.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{x&&x.observe(e)})),i()}),l&&!u&&x.observe(l),x.observe(e));let b,g=u?_e(n):null;u&&h();function h(){const c=_e(n);g&&(c.x!==g.x||c.y!==g.y||c.width!==g.width||c.height!==g.height)&&i(),g=c,b=requestAnimationFrame(h)}return i(),()=>{d.forEach(c=>{t&&c.removeEventListener("scroll",i),a&&c.removeEventListener("resize",i)}),p&&p(),x&&x.disconnect(),x=null,u&&cancelAnimationFrame(b)}}var Ie=f.useLayoutEffect,In=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function Mn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Vn(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),t=2;t<i;t++)r[t-2]=arguments[t];var a=[].concat(r);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Mn(n,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var Ue=function(e){return $n(e)?e.filter(Boolean):ut(e)==="object"&&e!==null?[e]:[]},vt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=q(e,In);return C({},i)},V=function(e,i,r){var t=e.cx,a=e.getStyles,s=e.getClassNames,o=e.className;return{css:a(i,e),className:t(r??{},s(i,e),o)}};function be(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Pn(n){return be(n)?window.innerHeight:n.clientHeight}function gt(n){return be(n)?window.pageYOffset:n.scrollTop}function ve(n,e){if(be(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Rn(n){var e=getComputedStyle(n),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Ln(n,e,i,r){return i*((n=n/r-1)*n*n+1)+e}function ae(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,t=gt(n),a=e-t,s=10,o=0;function u(){o+=s;var l=Ln(o,t,a,i);ve(n,l),o<i?window.requestAnimationFrame(u):r(n)}u()}function Ne(n,e){var i=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>i.bottom?ve(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<i.top&&ve(n,Math.max(e.offsetTop-t,0))}function Tn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function We(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function kn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bt=!1,Bn={get passive(){return bt=!0}},ue=typeof window<"u"?window:{};ue.addEventListener&&ue.removeEventListener&&(ue.addEventListener("p",me,Bn),ue.removeEventListener("p",me,!1));var jn=bt;function Hn(n){return n!=null}function $n(n){return Array.isArray(n)}function se(n,e,i){return n?e:i}var zn=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var o=Y(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=Y(o,2),l=u[0],d=u[1];return s[l]=d,s},{})},_n=["children","innerProps"],Un=["children","innerProps"];function Nn(n){var e=n.maxHeight,i=n.menuEl,r=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,o=n.controlHeight,u=Rn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var d=u.getBoundingClientRect(),p=d.height,v=i.getBoundingClientRect(),x=v.bottom,b=v.height,g=v.top,h=i.offsetParent.getBoundingClientRect(),c=h.top,y=s?window.innerHeight:Pn(u),O=gt(u),D=parseInt(getComputedStyle(i).marginBottom,10),M=parseInt(getComputedStyle(i).marginTop,10),w=c-M,I=y-g,A=w+O,P=p-O-g,j=x-y+O+D,z=O+g-M,k=160;switch(t){case"auto":case"bottom":if(I>=b)return{placement:"bottom",maxHeight:e};if(P>=b&&!s)return a&&ae(u,j,k),{placement:"bottom",maxHeight:e};if(!s&&P>=r||s&&I>=r){a&&ae(u,j,k);var _=s?I-D:P-D;return{placement:"bottom",maxHeight:_}}if(t==="auto"||s){var R=e,L=s?w:A;return L>=r&&(R=Math.min(L-D-o,e)),{placement:"top",maxHeight:R}}if(t==="bottom")return a&&ve(u,j),{placement:"bottom",maxHeight:e};break;case"top":if(w>=b)return{placement:"top",maxHeight:e};if(A>=b&&!s)return a&&ae(u,z,k),{placement:"top",maxHeight:e};if(!s&&A>=r||s&&w>=r){var H=e;return(!s&&A>=r||s&&w>=r)&&(H=s?w-M:A-M),a&&ae(u,z,k),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function Wn(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var xt=function(e){return e==="auto"?"bottom":e},Gn=function(e,i){var r,t=e.placement,a=e.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return C((r={label:"menu"},re(r,Wn(t),"100%"),re(r,"position","absolute"),re(r,"width","100%"),re(r,"zIndex",1),r),i?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},Et=f.createContext(null),Yn=function(e){var i=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,o=e.menuShouldScrollIntoView,u=e.theme,l=f.useContext(Et)||{},d=l.setPortalPlacement,p=f.useRef(null),v=f.useState(t),x=Y(v,2),b=x[0],g=x[1],h=f.useState(null),c=Y(h,2),y=c[0],O=c[1],D=u.spacing.controlHeight;return Ie(function(){var M=p.current;if(M){var w=s==="fixed",I=o&&!w,A=Nn({maxHeight:t,menuEl:M,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:w,controlHeight:D});g(A.maxHeight),O(A.placement),d==null||d(A.placement)}},[t,a,s,o,r,d,D]),i({ref:p,placerProps:C(C({},e),{},{placement:y||xt(a),maxHeight:b})})},qn=function(e){var i=e.children,r=e.innerRef,t=e.innerProps;return S("div",F({},V(e,"menu",{menu:!0}),{ref:r},t),i)},Kn=qn,Xn=function(e,i){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},Qn=function(e){var i=e.children,r=e.innerProps,t=e.innerRef,a=e.isMulti;return S("div",F({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},r),i)},Ct=function(e,i){var r=e.theme,t=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Jn=Ct,Zn=Ct,ei=function(e){var i=e.children,r=i===void 0?"No options":i,t=e.innerProps,a=q(e,_n);return S("div",F({},V(C(C({},a),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},ti=function(e){var i=e.children,r=i===void 0?"Loading...":i,t=e.innerProps,a=q(e,Un);return S("div",F({},V(C(C({},a),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},ni=function(e){var i=e.rect,r=e.offset,t=e.position;return{left:i.left,position:t,top:r,width:i.width,zIndex:1}},ii=function(e){var i=e.appendTo,r=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,o=e.menuPosition,u=f.useRef(null),l=f.useRef(null),d=f.useState(xt(s)),p=Y(d,2),v=p[0],x=p[1],b=f.useMemo(function(){return{setPortalPlacement:x}},[]),g=f.useState(null),h=Y(g,2),c=h[0],y=h[1],O=f.useCallback(function(){if(t){var I=Tn(t),A=o==="fixed"?0:window.pageYOffset,P=I[v]+A;(P!==(c==null?void 0:c.offset)||I.left!==(c==null?void 0:c.rect.left)||I.width!==(c==null?void 0:c.rect.width))&&y({offset:P,rect:I})}},[t,o,v,c==null?void 0:c.offset,c==null?void 0:c.rect.left,c==null?void 0:c.rect.width]);Ie(function(){O()},[O]);var D=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&u.current&&(l.current=An(t,u.current,O,{elementResize:"ResizeObserver"in window}))},[t,O]);Ie(function(){D()},[D]);var M=f.useCallback(function(I){u.current=I,D()},[D]);if(!i&&o!=="fixed"||!c)return null;var w=S("div",F({ref:M},V(C(C({},e),{},{offset:c.offset,position:o,rect:c.rect}),"menuPortal",{"menu-portal":!0}),a),r);return S(Et.Provider,{value:b},i?Nt.createPortal(w,i):w)},ri=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},oi=function(e){var i=e.children,r=e.innerProps,t=e.isDisabled,a=e.isRtl;return S("div",F({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),r),i)},ai=function(e,i){var r=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},ui=function(e){var i=e.children,r=e.innerProps,t=e.isMulti,a=e.hasValue;return S("div",F({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),r),i)},si=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},li=function(e){var i=e.children,r=e.innerProps;return S("div",F({},V(e,"indicatorsContainer",{indicators:!0}),r),i)},Ge,ci=["size"],di=["innerProps","isRtl","size"],pi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},St=function(e){var i=e.size,r=q(e,ci);return S("svg",F({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:pi},r))},Le=function(e){return S(St,F({size:20},e),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ft=function(e){return S(St,F({size:20},e),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},yt=function(e,i){var r=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},fi=yt,hi=function(e){var i=e.children,r=e.innerProps;return S("div",F({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||S(Ft,null))},mi=yt,vi=function(e){var i=e.children,r=e.innerProps;return S("div",F({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||S(Le,null))},gi=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},bi=function(e){var i=e.innerProps;return S("span",F({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},xi=Ut(Ge||(Ge=vn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ei=function(e,i){var r=e.isFocused,t=e.size,a=e.theme,s=a.colors,o=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},Ee=function(e){var i=e.delay,r=e.offset;return S("span",{css:st({animation:"".concat(xi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ci=function(e){var i=e.innerProps,r=e.isRtl,t=e.size,a=t===void 0?4:t,s=q(e,di);return S("div",F({},V(C(C({},s),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(Ee,{delay:0,offset:r}),S(Ee,{delay:160,offset:!0}),S(Ee,{delay:320,offset:!r}))},Si=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:t?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},Fi=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,o=e.menuIsOpen;return S("div",F({ref:a},V(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),i)},yi=Fi,wi=["data"],Di=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Oi=function(e){var i=e.children,r=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,o=e.headingProps,u=e.innerProps,l=e.label,d=e.theme,p=e.selectProps;return S("div",F({},V(e,"group",{group:!0}),u),S(s,F({},o,{selectProps:p,theme:d,getStyles:t,getClassNames:a,cx:r}),l),S("div",null,i))},Ai=function(e,i){var r=e.theme,t=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ii=function(e){var i=vt(e);i.data;var r=q(i,wi);return S("div",F({},V(e,"groupHeading",{"group-heading":!0}),r))},Mi=Oi,Vi=["innerRef","isDisabled","isHidden","inputClassName"],Pi=function(e,i){var r=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,o=a.colors;return C(C({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Ri),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},wt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ri={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wt)},Li=function(e){return C({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},wt)},Ti=function(e){var i=e.cx,r=e.value,t=vt(e),a=t.innerRef,s=t.isDisabled,o=t.isHidden,u=t.inputClassName,l=q(t,Vi);return S("div",F({},V(e,"input",{"input-container":!0}),{"data-value":r||""}),S("input",F({className:i({input:!0},u),ref:a,style:Li(o),disabled:s},l)))},ki=Ti,Bi=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},ji=function(e,i){var r=e.theme,t=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return C({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Hi=function(e,i){var r=e.theme,t=r.spacing,a=r.borderRadius,s=r.colors,o=e.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Dt=function(e){var i=e.children,r=e.innerProps;return S("div",r,i)},$i=Dt,zi=Dt;function _i(n){var e=n.children,i=n.innerProps;return S("div",F({role:"button"},i),e||S(Le,{size:14}))}var Ui=function(e){var i=e.children,r=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,o=e.removeProps,u=e.selectProps,l=r.Container,d=r.Label,p=r.Remove;return S(l,{data:t,innerProps:C(C({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},S(d,{data:t,innerProps:C({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},i),S(p,{data:t,innerProps:C(C({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:u}))},Ni=Ui,Wi=function(e,i){var r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,o=s.spacing,u=s.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?u.primary:t?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},Gi=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,o=e.innerProps;return S("div",F({},V(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),i)},Yi=Gi,qi=function(e,i){var r=e.theme,t=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Ki=function(e){var i=e.children,r=e.innerProps;return S("div",F({},V(e,"placeholder",{placeholder:!0}),r),i)},Xi=Ki,Qi=function(e,i){var r=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Ji=function(e){var i=e.children,r=e.isDisabled,t=e.innerProps;return S("div",F({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),i)},Zi=Ji,er={ClearIndicator:vi,Control:yi,DropdownIndicator:hi,DownChevron:Ft,CrossIcon:Le,Group:Mi,GroupHeading:Ii,IndicatorsContainer:li,IndicatorSeparator:bi,Input:ki,LoadingIndicator:Ci,Menu:Kn,MenuList:Qn,MenuPortal:ii,LoadingMessage:ti,NoOptionsMessage:ei,MultiValue:Ni,MultiValueContainer:$i,MultiValueLabel:zi,MultiValueRemove:_i,Option:Yi,Placeholder:Xi,SelectContainer:oi,SingleValue:Zi,ValueContainer:ui},tr=function(e){return C(C({},er),e.components)},Ye=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function nr(n,e){return!!(n===e||Ye(n)&&Ye(e))}function ir(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!nr(n[i],e[i]))return!1;return!0}function rr(n,e){e===void 0&&(e=ir);var i=null;function r(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var s=n.apply(this,t);return i={lastResult:s,lastArgs:t,lastThis:this},s}return r.clear=function(){i=null},r}var or={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ar=function(e){return S("span",F({css:or},e))},qe=ar,ur={guidance:function(e){var i=e.isSearchable,r=e.isMulti,t=e.isDisabled,a=e.tabSelectsValue,s=e.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(t?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,t=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,o=e.selectValue,u=e.isDisabled,l=e.isSelected,d=function(b,g){return b&&b.length?"".concat(b.indexOf(g)+1," of ").concat(b.length):""};if(i==="value"&&o)return"value ".concat(s," focused, ").concat(d(o,r),".");if(i==="menu"){var p=u?" disabled":"",v="".concat(l?"selected":"focused").concat(p);return"option ".concat(s," ").concat(v,", ").concat(d(t,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},sr=function(e){var i=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,o=e.selectValue,u=e.selectProps,l=e.id,d=u.ariaLiveMessages,p=u.getOptionLabel,v=u.inputValue,x=u.isMulti,b=u.isOptionDisabled,g=u.isSearchable,h=u.menuIsOpen,c=u.options,y=u.screenReaderStatus,O=u.tabSelectsValue,D=u["aria-label"],M=u["aria-live"],w=f.useMemo(function(){return C(C({},ur),d||{})},[d]),I=f.useMemo(function(){var R="";if(i&&w.onChange){var L=i.option,H=i.options,U=i.removedValue,N=i.removedValues,K=i.value,X=function(G){return Array.isArray(G)?null:G},Z=U||L||X(K),T=Z?p(Z):"",B=H||N||void 0,Q=B?B.map(p):[],J=C({isDisabled:Z&&b(Z,o),label:T,labels:Q},i);R=w.onChange(J)}return R},[i,w,b,o,p]),A=f.useMemo(function(){var R="",L=r||t,H=!!(r&&o&&o.includes(r));if(L&&w.onFocus){var U={focused:L,label:p(L),isDisabled:b(L,o),isSelected:H,options:a,context:L===r?"menu":"value",selectValue:o};R=w.onFocus(U)}return R},[r,t,p,b,w,a,o]),P=f.useMemo(function(){var R="";if(h&&c.length&&w.onFilter){var L=y({count:a.length});R=w.onFilter({inputValue:v,resultsMessage:L})}return R},[a,v,h,w,c,y]),j=f.useMemo(function(){var R="";if(w.guidance){var L=t?"value":h?"menu":"input";R=w.guidance({"aria-label":D,context:L,isDisabled:r&&b(r,o),isMulti:x,isSearchable:g,tabSelectsValue:O})}return R},[D,r,t,x,b,g,h,w,o,O]),z="".concat(A," ").concat(P," ").concat(j),k=S(f.Fragment,null,S("span",{id:"aria-selection"},I),S("span",{id:"aria-context"},z)),_=(i==null?void 0:i.action)==="initial-input-focus";return S(f.Fragment,null,S(qe,{id:l},_&&k),S(qe,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!_&&k))},lr=sr,Me=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],cr=new RegExp("["+Me.map(function(n){return n.letters}).join("")+"]","g"),Ot={};for(var Ce=0;Ce<Me.length;Ce++)for(var Se=Me[Ce],Fe=0;Fe<Se.letters.length;Fe++)Ot[Se.letters[Fe]]=Se.base;var At=function(e){return e.replace(cr,function(i){return Ot[i]})},dr=rr(At),Ke=function(e){return e.replace(/^\s+|\s+$/g,"")},pr=function(e){return"".concat(e.label," ").concat(e.value)},fr=function(e){return function(i,r){if(i.data.__isNew__)return!0;var t=C({ignoreCase:!0,ignoreAccents:!0,stringify:pr,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,o=t.stringify,u=t.trim,l=t.matchFrom,d=u?Ke(r):r,p=u?Ke(o(i)):o(i);return a&&(d=d.toLowerCase(),p=p.toLowerCase()),s&&(d=dr(d),p=At(p)),l==="start"?p.substr(0,d.length)===d:p.indexOf(d)>-1}},hr=["innerRef"];function mr(n){var e=n.innerRef,i=q(n,hr),r=zn(i,"onExited","in","enter","exit","appear");return S("input",F({ref:e},r,{css:st({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var vr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function gr(n){var e=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=f.useRef(!1),o=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),d=f.useCallback(function(h,c){if(l.current!==null){var y=l.current,O=y.scrollTop,D=y.scrollHeight,M=y.clientHeight,w=l.current,I=c>0,A=D-M-O,P=!1;A>c&&s.current&&(r&&r(h),s.current=!1),I&&o.current&&(a&&a(h),o.current=!1),I&&c>A?(i&&!s.current&&i(h),w.scrollTop=D,P=!0,s.current=!0):!I&&-c>O&&(t&&!o.current&&t(h),w.scrollTop=0,P=!0,o.current=!0),P&&vr(h)}},[i,r,t,a]),p=f.useCallback(function(h){d(h,h.deltaY)},[d]),v=f.useCallback(function(h){u.current=h.changedTouches[0].clientY},[]),x=f.useCallback(function(h){var c=u.current-h.changedTouches[0].clientY;d(h,c)},[d]),b=f.useCallback(function(h){if(h){var c=jn?{passive:!1}:!1;h.addEventListener("wheel",p,c),h.addEventListener("touchstart",v,c),h.addEventListener("touchmove",x,c)}},[x,v,p]),g=f.useCallback(function(h){h&&(h.removeEventListener("wheel",p,!1),h.removeEventListener("touchstart",v,!1),h.removeEventListener("touchmove",x,!1))},[x,v,p]);return f.useEffect(function(){if(e){var h=l.current;return b(h),function(){g(h)}}},[e,b,g]),function(h){l.current=h}}var Xe=["boxSizing","height","overflow","paddingRight","position"],Qe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Je(n){n.preventDefault()}function Ze(n){n.stopPropagation()}function et(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function tt(){return"ontouchstart"in window||navigator.maxTouchPoints}var nt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,ee={capture:!1,passive:!1};function br(n){var e=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,t=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(nt){var l=document.body,d=l&&l.style;if(r&&Xe.forEach(function(b){var g=d&&d[b];t.current[b]=g}),r&&ne<1){var p=parseInt(t.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,x=window.innerWidth-v+p||0;Object.keys(Qe).forEach(function(b){var g=Qe[b];d&&(d[b]=g)}),d&&(d.paddingRight="".concat(x,"px"))}l&&tt()&&(l.addEventListener("touchmove",Je,ee),u&&(u.addEventListener("touchstart",et,ee),u.addEventListener("touchmove",Ze,ee))),ne+=1}},[r]),o=f.useCallback(function(u){if(nt){var l=document.body,d=l&&l.style;ne=Math.max(ne-1,0),r&&ne<1&&Xe.forEach(function(p){var v=t.current[p];d&&(d[p]=v)}),l&&tt()&&(l.removeEventListener("touchmove",Je,ee),u&&(u.removeEventListener("touchstart",et,ee),u.removeEventListener("touchmove",Ze,ee)))}},[r]);return f.useEffect(function(){if(e){var u=a.current;return s(u),function(){o(u)}}},[e,s,o]),function(u){a.current=u}}var xr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Er={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Cr(n){var e=n.children,i=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,a=n.onBottomArrive,s=n.onBottomLeave,o=n.onTopArrive,u=n.onTopLeave,l=gr({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),d=br({isEnabled:i}),p=function(x){l(x),d(x)};return S(f.Fragment,null,i&&S("div",{onClick:xr,css:Er}),e(p))}var Sr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Fr=function(e){var i=e.name,r=e.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Sr,value:"",onChange:function(){}})},yr=Fr,wr=function(e){return e.label},Dr=function(e){return e.label},Or=function(e){return e.value},Ar=function(e){return!!e.isDisabled},Ir={clearIndicator:mi,container:ri,control:Si,dropdownIndicator:fi,group:Di,groupHeading:Ai,indicatorsContainer:si,indicatorSeparator:gi,input:Pi,loadingIndicator:Ei,loadingMessage:Zn,menu:Gn,menuList:Xn,menuPortal:ni,multiValue:Bi,multiValueLabel:ji,multiValueRemove:Hi,noOptionsMessage:Jn,option:Wi,placeholder:qi,singleValue:Qi,valueContainer:ai},Mr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Vr=4,It=4,Pr=38,Rr=It*2,Lr={baseUnit:It,controlHeight:Pr,menuGutter:Rr},ye={borderRadius:Vr,colors:Mr,spacing:Lr},Tr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:We(),captureMenuScroll:!We(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:fr(),formatGroupLabel:wr,getOptionLabel:Dr,getOptionValue:Or,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ar,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!kn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function it(n,e,i,r){var t=Rt(n,e,i),a=Lt(n,e,i),s=Pt(n,e),o=ge(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:o,index:r}}function Mt(n,e){return n.options.map(function(i,r){if("options"in i){var t=i.options.map(function(s,o){return it(n,s,e,o)}).filter(function(s){return rt(n,s)});return t.length>0?{type:"group",data:i,options:t,index:r}:void 0}var a=it(n,i,e,r);return rt(n,a)?a:void 0}).filter(Hn)}function Vt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ct(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function kr(n,e){return Vt(Mt(n,e))}function rt(n,e){var i=n.inputValue,r=i===void 0?"":i,t=e.data,a=e.isSelected,s=e.label,o=e.value;return(!kt(n)||!a)&&Tt(n,{label:s,value:o,data:t},r)}function Br(n,e){var i=n.focusedValue,r=n.selectValue,t=r.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function jr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Pt=function(e,i){return e.getOptionLabel(i)},ge=function(e,i){return e.getOptionValue(i)};function Rt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Lt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var r=ge(n,e);return i.some(function(t){return ge(n,t)===r})}function Tt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var kt=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},Hr=1,Bt=function(n){tn(i,n);var e=on(i);function i(r){var t;if(an(this,i),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.instancePrefix="",t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,u){var l=t.props,d=l.onChange,p=l.name;u.name=p,t.ariaOnChange(o,u),d(o,u)},t.setValue=function(o,u,l){var d=t.props,p=d.closeMenuOnSelect,v=d.isMulti,x=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),p&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:u,option:l})},t.selectOption=function(o){var u=t.props,l=u.blurInputOnSelect,d=u.isMulti,p=u.name,v=t.state.selectValue,x=d&&t.isOptionSelected(o,v),b=t.isOptionDisabled(o,v);if(x){var g=t.getOptionValue(o);t.setValue(v.filter(function(h){return t.getOptionValue(h)!==g}),"deselect-option",o)}else if(!b)d?t.setValue([].concat(ct(v),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:p});return}l&&t.blurInput()},t.removeValue=function(o){var u=t.props.isMulti,l=t.state.selectValue,d=t.getOptionValue(o),p=l.filter(function(x){return t.getOptionValue(x)!==d}),v=se(u,p,p[0]||null);t.onChange(v,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(se(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,u=t.state.selectValue,l=u[u.length-1],d=u.slice(0,u.length-1),p=se(o,d,d[0]||null);t.onChange(p,{action:"pop-value",removedValue:l})},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];return Vn.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(o){return Pt(t.props,o)},t.getOptionValue=function(o){return ge(t.props,o)},t.getStyles=function(o,u){var l=t.props.unstyled,d=Ir[o](u,l);d.boxSizing="border-box";var p=t.props.styles[o];return p?p(d,u):d},t.getClassNames=function(o,u){var l,d;return(l=(d=t.props.classNames)[o])===null||l===void 0?void 0:l.call(d,u)},t.getElementId=function(o){return"".concat(t.instancePrefix,"-").concat(o)},t.getComponents=function(){return tr(t.props)},t.buildCategorizedOptions=function(){return Mt(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Vt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,u){t.setState({ariaSelection:C({value:o},u)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var u=t.props,l=u.isMulti,d=u.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!l}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&be(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var u=o.touches,l=u&&u.item(0);l&&(t.initialTouchX=l.clientX,t.initialTouchY=l.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var u=o.touches,l=u&&u.item(0);if(l){var d=Math.abs(l.clientX-t.initialTouchX),p=Math.abs(l.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||p>v}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var u=t.props.inputValue,l=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(l,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){t.blockOptionHover||t.state.focusedOption===o||t.setState({focusedOption:o})},t.shouldHideSelectedOptions=function(){return kt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var u=t.props,l=u.isMulti,d=u.backspaceRemovesValue,p=u.escapeClearsValue,v=u.inputValue,x=u.isClearable,b=u.isDisabled,g=u.menuIsOpen,h=u.onKeyDown,c=u.tabSelectsValue,y=u.openMenuOnFocus,O=t.state,D=O.focusedOption,M=O.focusedValue,w=O.selectValue;if(!b&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||v)return;t.focusValue("previous");break;case"ArrowRight":if(!l||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)t.removeValue(M);else{if(!d)return;l?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!g||!c||!D||y&&t.isOptionSelected(D,w))return;t.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(g){if(!D||t.isComposing)return;t.selectOption(D);break}return;case"Escape":g?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):x&&p&&t.clearValue();break;case" ":if(v)return;if(!g){t.openMenu("first");break}if(!D)return;t.selectOption(D);break;case"ArrowUp":g?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":g?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!g)return;t.focusOption("pageup");break;case"PageDown":if(!g)return;t.focusOption("pagedown");break;case"Home":if(!g)return;t.focusOption("first");break;case"End":if(!g)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.instancePrefix="react-select-"+(t.props.instanceId||++Hr),t.state.selectValue=Ue(r.value),r.menuIsOpen&&t.state.selectValue.length){var a=t.buildFocusableOptions(),s=a.indexOf(t.state.selectValue[0]);t.state.focusedOption=a[s]}return t}return un(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ne(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&t.isDisabled||u&&o&&!t.menuIsOpen)&&this.focusInput(),u&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ne(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),d=t==="first"?0:l.length-1;if(!this.props.isMulti){var p=l.indexOf(o[0]);p>-1&&(d=p)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[d]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var l=s.length-1,d=-1;if(s.length){switch(t){case"previous":u===0?d=0:u===-1?d=l:d=u-1;break;case"next":u>-1&&u<l&&(d=u+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:s[d]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,l=o.indexOf(s);s||(l=-1),t==="up"?u=l>0?l-1:o.length-1:t==="down"?u=(l+1)%o.length:t==="pageup"?(u=l-a,u<0&&(u=0)):t==="pagedown"?(u=l+a,u>o.length-1&&(u=o.length-1)):t==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):C(C({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,l=this.selectOption,d=this.setValue,p=this.props,v=p.isMulti,x=p.isRtl,b=p.options,g=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:g,isMulti:v,isRtl:x,options:b,selectOption:l,selectProps:p,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return Rt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Lt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Tt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,o=t.inputId,u=t.inputValue,l=t.tabIndex,d=t.form,p=t.menuIsOpen,v=t.required,x=this.getComponents(),b=x.Input,g=this.state,h=g.inputIsHidden,c=g.ariaSelection,y=this.commonProps,O=o||this.getElementId("input"),D=C(C(C({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox"},p&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(c==null?void 0:c.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(b,F({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:d,type:"text",value:u},D)):f.createElement(mr,F({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:d,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,d=a.SingleValue,p=a.Placeholder,v=this.commonProps,x=this.props,b=x.controlShouldRenderValue,g=x.isDisabled,h=x.isMulti,c=x.inputValue,y=x.placeholder,O=this.state,D=O.selectValue,M=O.focusedValue,w=O.isFocused;if(!this.hasValue()||!b)return c?null:f.createElement(p,F({},v,{key:"placeholder",isDisabled:g,isFocused:w,innerProps:{id:this.getElementId("placeholder")}}),y);if(h)return D.map(function(A,P){var j=A===M,z="".concat(t.getOptionLabel(A),"-").concat(t.getOptionValue(A));return f.createElement(s,F({},v,{components:{Container:o,Label:u,Remove:l},isFocused:j,isDisabled:g,key:z,index:P,removeProps:{onClick:function(){return t.removeValue(A)},onTouchEnd:function(){return t.removeValue(A)},onMouseDown:function(_){_.preventDefault()}},data:A}),t.formatOptionLabel(A,"value"))});if(c)return null;var I=D[0];return f.createElement(d,F({},v,{data:I,isDisabled:g}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,d=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,F({},s,{innerProps:p,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,l=o.isLoading,d=this.state.isFocused;if(!a||!l)return null;var p={"aria-hidden":"true"};return f.createElement(a,F({},s,{innerProps:p,isDisabled:u,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,F({},o,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,F({},s,{innerProps:l,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,l=a.MenuList,d=a.MenuPortal,p=a.LoadingMessage,v=a.NoOptionsMessage,x=a.Option,b=this.commonProps,g=this.state.focusedOption,h=this.props,c=h.captureMenuScroll,y=h.inputValue,O=h.isLoading,D=h.loadingMessage,M=h.minMenuHeight,w=h.maxMenuHeight,I=h.menuIsOpen,A=h.menuPlacement,P=h.menuPosition,j=h.menuPortalTarget,z=h.menuShouldBlockScroll,k=h.menuShouldScrollIntoView,_=h.noOptionsMessage,R=h.onMenuScrollToTop,L=h.onMenuScrollToBottom;if(!I)return null;var H=function(B,Q){var J=B.type,W=B.data,G=B.isDisabled,te=B.isSelected,ie=B.label,Ht=B.value,Te=g===W,ke=G?void 0:function(){return t.onOptionHover(W)},$t=G?void 0:function(){return t.selectOption(W)},Be="".concat(t.getElementId("option"),"-").concat(Q),zt={id:Be,onClick:$t,onMouseMove:ke,onMouseOver:ke,tabIndex:-1};return f.createElement(x,F({},b,{innerProps:zt,data:W,isDisabled:G,isSelected:te,key:Be,label:ie,type:J,value:Ht,isFocused:Te,innerRef:Te?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(B.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var B=T.data,Q=T.options,J=T.index,W="".concat(t.getElementId("group"),"-").concat(J),G="".concat(W,"-heading");return f.createElement(s,F({},b,{key:W,data:B,options:Q,Heading:o,headingProps:{id:G,data:T.data},label:t.formatGroupLabel(T.data)}),T.options.map(function(te){return H(te,"".concat(J,"-").concat(te.index))}))}else if(T.type==="option")return H(T,"".concat(T.index))});else if(O){var N=D({inputValue:y});if(N===null)return null;U=f.createElement(p,b,N)}else{var K=_({inputValue:y});if(K===null)return null;U=f.createElement(v,b,K)}var X={minMenuHeight:M,maxMenuHeight:w,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:k},Z=f.createElement(Yn,F({},b,X),function(T){var B=T.ref,Q=T.placerProps,J=Q.placement,W=Q.maxHeight;return f.createElement(u,F({},b,X,{innerRef:B,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove,id:t.getElementId("listbox")},isLoading:O,placement:J}),f.createElement(Cr,{captureEnabled:c,onTopArrive:R,onBottomArrive:L,lockEnabled:z},function(G){return f.createElement(l,F({},b,{innerRef:function(ie){t.getMenuListRef(ie),G(ie)},isLoading:O,maxHeight:W,focusedOption:g}),U)}))});return j||P==="fixed"?f.createElement(d,F({},b,{appendTo:j,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),Z):Z}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,l=a.name,d=a.required,p=this.state.selectValue;if(d&&!this.hasValue()&&!o)return f.createElement(yr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(u)if(s){var v=p.map(function(g){return t.getOptionValue(g)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:v})}else{var x=p.length>0?p.map(function(g,h){return f.createElement("input",{key:"i-".concat(h),name:l,type:"hidden",value:t.getOptionValue(g)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,x)}else{var b=p[0]?this.getOptionValue(p[0]):"";return f.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,l=a.isFocused,d=a.selectValue,p=this.getFocusableOptions();return f.createElement(lr,F({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:l,selectValue:d,focusableOptions:p}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,o=t.SelectContainer,u=t.ValueContainer,l=this.props,d=l.className,p=l.id,v=l.isDisabled,x=l.menuIsOpen,b=this.state.isFocused,g=this.commonProps=this.getCommonProps();return f.createElement(o,F({},g,{className:d,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),f.createElement(a,F({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:x}),f.createElement(u,F({},g,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,F({},g,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,d=a.isFocused,p=a.prevWasFocused,v=t.options,x=t.value,b=t.menuIsOpen,g=t.inputValue,h=t.isMulti,c=Ue(x),y={};if(s&&(x!==s.value||v!==s.options||b!==s.menuIsOpen||g!==s.inputValue)){var O=b?kr(t,c):[],D=o?Br(a,c):null,M=jr(a,O);y={selectValue:c,focusedOption:M,focusedValue:D,clearFocusValueOnUpdate:!1}}var w=u!=null&&t!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},I=l,A=d&&p;return d&&!A&&(I={value:se(h,c,c[0]||null),options:c,action:"initial-input-focus"},A=!p),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),C(C(C({},y),w),{},{prevProps:t,ariaSelection:I,prevWasFocused:A})}}]),i}(f.Component);Bt.defaultProps=Tr;var $r=f.forwardRef(function(n,e){var i=pn(n);return f.createElement(Bt,F({ref:e},i))}),zr=$r;const _r=E.h1`
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
`,Ur=E.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`,Nr=E.div`
  @media screen and (min-width: 320px) {
    position: relative;
    margin-bottom: 16px;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Wr=E.input`
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
`,Gr=E.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`,Yr=E.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,qr=E.div`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ot=E.div`
  flex: 1;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`,at=E(zr)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
`;E.div``;const{QUERY:le,RECOMMENDED:ce,CATEGORY:jt}=Gt,Kr={[le]:"",[jt]:"",[ce]:""};function Xr({onProductsChange:n}){const[e,i]=f.useState(Kr),[r,t]=f.useState(""),[a,s]=f.useState([]),o=Wt();f.useEffect(()=>{if(o.isSuccess){const[c]=o.data;s(c.productsCategories)}},[o]),f.useEffect(()=>{n(e)},[e,n]);const u=()=>{t(""),i(c=>({...c,[le]:""}))},l=["All","Recommended","Not recommended"],[d,p]=f.useState(null),[v,x]=f.useState(null),b=c=>{i(y=>({...y,[le]:c.target.value.trim()})),t(c.target.value)},g=c=>{p(c),i(y=>({...y,[jt]:c.label}))},h=c=>{switch(x(c),c.label){case"Recommended":i(y=>({...y,[ce]:[!0]}));break;case"Not recommended":i(y=>({...y,[ce]:[!1]}));break;default:i(y=>({...y,[ce]:null}))}};return m.jsx(m.Fragment,{children:m.jsxs(Ur,{children:[m.jsxs(Nr,{children:[m.jsx(Wr,{type:"text",value:e[le],onChange:b}),m.jsx(Gr,{width:"18",height:"18",children:m.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#search"})}),r.trim()&&m.jsx(Yr,{onClick:u,children:m.jsx("svg",{width:"18",height:"18",children:m.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#x-clean"})})})]}),m.jsxs(qr,{children:[m.jsx(ot,{children:m.jsx(at,{styles:{option:c=>({...c,background:"#1C1C1C"}),control:c=>({...c,width:"100%",background:"#040404",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:c=>({...c,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:c=>({...c,background:"#040404",border:"none"}),menuList:c=>({...c,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:c=>({...c,display:"none"}),placeholder:c=>({...c,color:"#efede8"}),singleValue:c=>({...c,color:"#efede8",justifyContent:"center"}),container:c=>({...c,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:c=>({...c,fontSize:"14px"}),valueContainer:c=>({...c,"@media (min-width: 768px)":{width:"146px"}})},value:d,onChange:g,options:a.map(c=>({label:c.charAt(0).toUpperCase()+c.slice(1)})),placeholder:"Categories"})}),m.jsx(ot,{children:m.jsx(at,{styles:{option:c=>({...c,background:"#1C1C1C"}),control:c=>({...c,width:"100%",background:"#040404",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:c=>({...c,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:c=>({...c,background:"#040404",border:"none"}),menuList:c=>({...c,maxHeight:"228px",borderRadius:"12px",pading:"14px"}),indicatorSeparator:c=>({...c,display:"none"}),placeholder:c=>({...c,color:"#efede8"}),singleValue:c=>({...c,color:"#efede8",justifyContent:"center"}),container:c=>({...c,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:c=>({...c,fontSize:"14px"}),valueContainer:c=>({...c,"@media (min-width: 768px)":{width:"195px"}})},value:v,onChange:h,options:l.map(c=>({label:c})),placeholder:"All"})})]}),m.jsx(_r,{children:"Filters"})]})})}const Qr=E.div`
  margin: 48px 24px;

  @media screen and (min-width: 768px) {
    margin: 48px 32px;
  }
`,Jr=E.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,Zr=E.input`
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
`,eo=E.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,to=E.input`
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
`,no=E.span`
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
`,io=E.div`
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,ro=E.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,oo=E.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,ao=E.div``,uo=E.button`
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
`,so=E.button`
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
`;function lo(n){const{onClose:e,addProdSuccess:i,product:r}=n,[t,a]=f.useState(100),s=t*r.calories,o=()=>{e(),i(s)};return m.jsxs(Qr,{children:[m.jsxs(Jr,{children:[m.jsx(Zr,{type:"text",value:r.title,readOnly:!0}),m.jsxs(eo,{children:[m.jsx(to,{type:"number",value:t,onChange:u=>a(u.target.value)}),m.jsx(no,{children:"grams"})]})]}),m.jsxs(io,{children:[m.jsx(ro,{children:"Calories:"}),m.jsx(oo,{children:s})]}),m.jsxs(ao,{children:[m.jsx(uo,{onClick:o,children:"Add to diary"}),m.jsx(so,{onClick:e,children:"Cancel"})]})]})}const co=E.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 22px 111px;
  }
`,po=E.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,fo=E.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,ho=E.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,mo=E.p`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,vo=E.span`
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,go=E.button`
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
`,bo=E.a`
  justify-content: center;
  display: flex;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,xo=E.p`
  margin-right: 8px;
`;function Eo(n){const{onClose:e,totalCalories:i}=n;return m.jsxs(co,{children:[m.jsx(po,{}),m.jsx(fo,{children:"Well Done"}),m.jsxs(ho,{children:[m.jsx(mo,{children:"Calories:"}),m.jsx(vo,{children:i})]}),m.jsx(go,{onClick:e,children:"Next product"}),m.jsxs(bo,{href:"Diary",children:[m.jsx(xo,{children:"To the diary"}),m.jsx("svg",{width:"16",height:"16",children:m.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const Co=E.li`
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
`,So=E.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,Fo=E.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`,yo=E.div`
  display: flex;
  align-items: center;
`,wo=E.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${n=>n.recommended?"#419B09":"#E9101D"};
`,Do=E.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,Oo=E.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,Ao=E.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Io=E.svg`
  width: 16px;
  height: 16px;
`,Mo=E.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,Vo=E.svg`
  width: 24px;
  height: 24px;
`,Po=E.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Ro=E.div`
  display: flex;
  gap: 16px;
`,we=E.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${n=>n.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,De=E.span`
  color: #efede8;
  padding-left: 8px;

  @media (min-width: 768px) {
    padding-left: 4px;
  }
`;function Lo({props:n}){const{weight:i,calories:r,category:t,title:a}=n,[s,o]=f.useState(!1),[u,l]=f.useState(!1),[d,p]=f.useState(null),v=()=>{o(!0)},x=()=>{o(!1),l(!1)},b=g=>{l(!0),p(g)};return m.jsxs(m.Fragment,{children:[m.jsxs(Co,{children:[m.jsxs(So,{children:[m.jsx(Fo,{children:"DIET"}),m.jsxs(yo,{children:[m.jsx(wo,{recommended:!0}),m.jsx(Do,{children:"Recommended"}),m.jsxs(Oo,{onClick:v,children:[m.jsx(Ao,{children:"Add"}),m.jsx(Io,{children:m.jsx("use",{href:`${je}#arrow-add-prod-orange`})})]})]})]}),m.jsxs(Mo,{children:[m.jsx(Vo,{children:m.jsx("use",{href:`${je}#run-man`})}),m.jsx(Po,{children:a})]}),m.jsxs(Ro,{children:[m.jsxs(we,{children:["Calories:",m.jsx(De,{children:r})]}),m.jsxs(we,{category:!0,children:["Category:",m.jsx(De,{children:t})]}),m.jsxs(we,{children:["Weight:",m.jsx(De,{children:i})]})]})]}),s&&m.jsx(He,{onClose:x,children:m.jsx(lo,{onClose:x,addProdSuccess:b,product:n})}),u&&m.jsx(He,{onClose:x,children:m.jsx(Eo,{onClose:x,totalCalories:d})})]})}const To=E.div`
  @media (min-width: 768px) {
    height: 660px;
  }
  @media (min-width: 1440px) {
    height: 487px;
  }
`,ko=E.ul`
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
`,Bo=E.p`
  margin-bottom: 16px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,jo=E.span`
  color: #e6533c;
`,Ho=E.span`
  margin-top: 16px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function $o({filter:n}){const[e,i]=f.useState([]),[r]=Yt();return f.useEffect(()=>{(async()=>{try{const a=await r(n).unwrap();i(a)}catch(a){console.error("Error fetching data:",a.message)}})()},[n]),m.jsx(To,{children:e.length>0?m.jsx(ko,{children:e.map(({_id:t,...a})=>m.jsx(Lo,{props:a},t))}):m.jsxs(m.Fragment,{children:[m.jsxs(Bo,{children:[m.jsx(jo,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),m.jsx(Ho,{children:"Try changing the search parameters."})]})})}const zo=E.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: image-set(
    url(${Qt}) 1x,
    url(${Jt}) 2x,
    url(${Zt}) 3x
  );
  background-size: 428px 716px;
`,_o=E.div`
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
`;function Go(){const[n,e]=f.useState([]),[i,r]=f.useState(window.innerWidth>=1440),t=()=>{r(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),m.jsxs(m.Fragment,{children:[i&&m.jsx(zo,{}),m.jsxs(_o,{children:[m.jsx(qt,{text:"Products"}),m.jsx(Xr,{onProductsChange:e})]}),m.jsx($o,{filter:n})]})}export{Go as Products};
