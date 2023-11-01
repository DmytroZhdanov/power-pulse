import{n as w,r as g,j as d,o as U,x as Hi,p as yr,L as Ki,T as _i,q as vr,P as Tn,h as wr,t as br,v as Tr,I as ve,w as Pr,l as Sr}from"./index-2cbc4b9b.js";import{T as Cr}from"./TitlePage-6789ba23.js";import{C as Vr,f as Dr}from"./Calendar-44fbaaf1.js";import"./tiny-warning.esm-c932d744.js";const jr=w.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ar=w.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,vt=w.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${t=>t.highlighted?"#E6533C":"rgba(239, 237, 232, 0.05)"};
  border-radius: 12px;
  border: 1px solid
    ${t=>(t.highlighted,"rgba(239, 237, 232, 0.2)")};
  ${t=>t.caloriesOverConsumed&&"border-color: #E9101D"};
  ${t=>t.caloriesOverBurned&&"border-color: #3CBF61"};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 18px;
  }
`,wt=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,bt=w.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,Tt=w.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${t=>t.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,Pt=w.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Mr=w.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Rr=w.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,Lr=w.svg`
  width: 24px;
  height: 24px;
`,Er=w.p`
  font-size: 14px;
  line-height: ${18/14};
  color: rgba(239, 237, 232, 0.3);

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`;function kr({bmrData:t,diaryProducts:e,diaryExercises:n}){const[i,s]=g.useState(null),[o,r]=g.useState(null),[a,l]=g.useState(null);return g.useEffect(()=>{if(e.length===0){s(null);return}const u=e.map(h=>h.calories).reduce((h,f)=>h+f);s(u)}),g.useEffect(()=>{if(n.length===0){r(null),l(null);return}const u=n.map(f=>f.calories).reduce((f,p)=>f+p);n.map(f=>f.time).reduce((f,p)=>f+p),r(u)}),g.useEffect(()=>{if(n.length===0){l(null);return}const u=n.map(f=>f.time).reduce((f,p)=>f+p),h=Math.trunc(u/60);l(h)}),d.jsxs(jr,{children:[d.jsxs(Ar,{children:[d.jsxs(vt,{highlighted:!0,children:[d.jsxs(wt,{children:[d.jsx(bt,{children:d.jsx("use",{href:`${U}#food`})}),d.jsx(Tt,{highlighted:!0,children:"Daily calory intake"})]}),d.jsx(Pt,{children:t||2200})]}),d.jsxs(vt,{highlighted:!0,children:[d.jsxs(wt,{children:[d.jsx(bt,{children:d.jsx("use",{href:`${U}#dumbbell`})}),d.jsx(Tt,{highlighted:!0,children:"Daily norm of sports"})]}),d.jsx(Pt,{children:"110 min"})]}),d.jsxs(vt,{children:[d.jsxs(wt,{children:[d.jsx(bt,{children:d.jsx("use",{href:`${U}#apple`})}),d.jsx(Tt,{children:"Calories consumed"})]}),d.jsx(Pt,{children:i!==null?i:0})]}),d.jsxs(vt,{children:[d.jsxs(wt,{children:[d.jsx(bt,{children:d.jsx("use",{href:`${U}#fire`})}),d.jsx(Tt,{children:"Calories burned"})]}),d.jsx(Pt,{children:o!==null?o:0})]}),d.jsxs(vt,{caloriesOverConsumed:!(t-i>=0),children:[d.jsxs(wt,{children:[d.jsx(bt,{children:d.jsx("use",{href:`${U}#bubble`})}),d.jsx(Tt,{children:"The rest of the calories"})]}),d.jsx(Pt,{children:t-i})]}),d.jsxs(vt,{caloriesOverBurned:110-a<0,children:[d.jsxs(wt,{children:[d.jsx(bt,{children:d.jsx("use",{href:`${U}#running`})}),d.jsx(Tt,{children:"The rest of sports"})]}),d.jsxs(Pt,{children:[110-a," min"]})]})]}),d.jsxs(Mr,{children:[d.jsx(Rr,{children:d.jsx(Lr,{children:d.jsx("use",{href:`${U}#exclamation-mark`})})}),d.jsx(Er,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}const qi=g.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),ue=g.createContext({}),he=g.createContext(null),de=typeof document<"u",Ke=de?g.useLayoutEffect:g.useEffect,Yi=g.createContext({strict:!1});function Br(t,e,n,i){const{visualElement:s}=g.useContext(ue),o=g.useContext(Yi),r=g.useContext(he),a=g.useContext(qi).reducedMotion,l=g.useRef();i=i||o.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:s,props:n,presenceContext:r,blockInitialAnimation:r?r.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;g.useInsertionEffect(()=>{c&&c.update(n,r)});const u=g.useRef(!!window.HandoffAppearAnimations);return Ke(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),g.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),window.HandoffAppearAnimations=void 0,u.current=!1)}),c}function Ct(t){return typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Fr(t,e,n){return g.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ct(n)&&(n.current=i))},[e])}function Nt(t){return typeof t=="string"||Array.isArray(t)}function fe(t){return typeof t=="object"&&typeof t.start=="function"}const _e=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qe=["initial",..._e];function pe(t){return fe(t.animate)||qe.some(e=>Nt(t[e]))}function Xi(t){return!!(pe(t)||t.variants)}function Ir(t,e){if(pe(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Nt(n)?n:void 0,animate:Nt(i)?i:void 0}}return t.inherit!==!1?e:{}}function Or(t){const{initial:e,animate:n}=Ir(t,g.useContext(ue));return g.useMemo(()=>({initial:e,animate:n}),[Pn(e),Pn(n)])}function Pn(t){return Array.isArray(t)?t.join(" "):t}const Sn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Wt={};for(const t in Sn)Wt[t]={isEnabled:e=>Sn[t].some(n=>!!e[n])};function $r(t){for(const e in t)Wt[e]={...Wt[e],...t[e]}}const Ye=g.createContext({}),Zi=g.createContext({}),Ur=Symbol.for("motionComponentSymbol");function zr({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){t&&$r(t);function o(a,l){let c;const u={...g.useContext(qi),...a,layoutId:Nr(a)},{isStatic:h}=u,f=Or(a),p=i(a,h);if(!h&&de){f.visualElement=Br(s,p,u,e);const m=g.useContext(Zi),v=g.useContext(Yi).strict;f.visualElement&&(c=f.visualElement.loadFeatures(u,v,t,m))}return g.createElement(ue.Provider,{value:f},c&&f.visualElement?g.createElement(c,{visualElement:f.visualElement,...u}):null,n(s,a,Fr(p,f.visualElement,l),p,h,f.visualElement))}const r=g.forwardRef(o);return r[Ur]=s,r}function Nr({layoutId:t}){const e=g.useContext(Ye).id;return e&&t!==void 0?e+"-"+t:t}function Wr(t){function e(i,s={}){return zr(t(i,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const Gr=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xe(t){return typeof t!="string"||t.includes("-")?!1:!!(Gr.indexOf(t)>-1||/[A-Z]/.test(t))}const ne={};function Hr(t){Object.assign(ne,t)}const Ht=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gt=new Set(Ht);function Qi(t,{layout:e,layoutId:n}){return gt.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ne[t]||t==="opacity")}const $=t=>!!(t&&t.getVelocity),Kr={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_r=Ht.length;function qr(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,s){let o="";for(let r=0;r<_r;r++){const a=Ht[r];if(t[a]!==void 0){const l=Kr[a]||a;o+=`${l}(${t[a]}) `}}return e&&!t.z&&(o+="translateZ(0)"),o=o.trim(),s?o=s(t,i?"":o):n&&i&&(o="none"),o}const Ji=t=>e=>typeof e=="string"&&e.startsWith(t),ts=Ji("--"),Ee=Ji("var(--"),Yr=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Xr=(t,e)=>e&&typeof t=="number"?e.transform(t):t,lt=(t,e,n)=>Math.min(Math.max(n,t),e),xt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ot={...xt,transform:t=>lt(0,1,t)},Xt={...xt,default:1},$t=t=>Math.round(t*1e5)/1e5,me=/(-)?([\d]*\.?[\d])+/g,es=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Zr=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Kt(t){return typeof t=="string"}const _t=t=>({test:e=>Kt(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),st=_t("deg"),q=_t("%"),T=_t("px"),Qr=_t("vh"),Jr=_t("vw"),Cn={...q,parse:t=>q.parse(t)/100,transform:t=>q.transform(t*100)},Vn={...xt,transform:Math.round},ns={borderWidth:T,borderTopWidth:T,borderRightWidth:T,borderBottomWidth:T,borderLeftWidth:T,borderRadius:T,radius:T,borderTopLeftRadius:T,borderTopRightRadius:T,borderBottomRightRadius:T,borderBottomLeftRadius:T,width:T,maxWidth:T,height:T,maxHeight:T,size:T,top:T,right:T,bottom:T,left:T,padding:T,paddingTop:T,paddingRight:T,paddingBottom:T,paddingLeft:T,margin:T,marginTop:T,marginRight:T,marginBottom:T,marginLeft:T,rotate:st,rotateX:st,rotateY:st,rotateZ:st,scale:Xt,scaleX:Xt,scaleY:Xt,scaleZ:Xt,skew:st,skewX:st,skewY:st,distance:T,translateX:T,translateY:T,translateZ:T,x:T,y:T,z:T,perspective:T,transformPerspective:T,opacity:Ot,originX:Cn,originY:Cn,originZ:T,zIndex:Vn,fillOpacity:Ot,strokeOpacity:Ot,numOctaves:Vn};function Ze(t,e,n,i){const{style:s,vars:o,transform:r,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const h in e){const f=e[h];if(ts(h)){o[h]=f;continue}const p=ns[h],m=Xr(f,p);if(gt.has(h)){if(l=!0,r[h]=m,!u)continue;f!==(p.default||0)&&(u=!1)}else h.startsWith("origin")?(c=!0,a[h]=m):s[h]=m}if(e.transform||(l||i?s.transform=qr(t.transform,n,u,i):s.transform&&(s.transform="none")),c){const{originX:h="50%",originY:f="50%",originZ:p=0}=a;s.transformOrigin=`${h} ${f} ${p}`}}const Qe=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function is(t,e,n){for(const i in e)!$(e[i])&&!Qi(i,n)&&(t[i]=e[i])}function to({transformTemplate:t},e,n){return g.useMemo(()=>{const i=Qe();return Ze(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function eo(t,e,n){const i=t.style||{},s={};return is(s,i,t),Object.assign(s,to(t,e,n)),t.transformValues?t.transformValues(s):s}function no(t,e,n){const i={},s=eo(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const io=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function ie(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||io.has(t)}let ss=t=>!ie(t);function so(t){t&&(ss=e=>e.startsWith("on")?!ie(e):t(e))}try{so(require("@emotion/is-prop-valid").default)}catch{}function ro(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(ss(s)||n===!0&&ie(s)||!e&&!ie(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function Dn(t,e,n){return typeof t=="string"?t:T.transform(e+n*t)}function oo(t,e,n){const i=Dn(e,t.x,t.width),s=Dn(n,t.y,t.height);return`${i} ${s}`}const ao={offset:"stroke-dashoffset",array:"stroke-dasharray"},lo={offset:"strokeDashoffset",array:"strokeDasharray"};function co(t,e,n=1,i=0,s=!0){t.pathLength=1;const o=s?ao:lo;t[o.offset]=T.transform(-i);const r=T.transform(e),a=T.transform(n);t[o.array]=`${r} ${a}`}function Je(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:o,pathLength:r,pathSpacing:a=1,pathOffset:l=0,...c},u,h,f){if(Ze(t,c,u,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:m,dimensions:v}=t;p.transform&&(v&&(m.transform=p.transform),delete p.transform),v&&(s!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=oo(v,s!==void 0?s:.5,o!==void 0?o:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),r!==void 0&&co(p,r,a,l,!1)}const rs=()=>({...Qe(),attrs:{}}),tn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function uo(t,e,n,i){const s=g.useMemo(()=>{const o=rs();return Je(o,e,{enableHardwareAcceleration:!1},tn(i),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};is(o,t.style,t),s.style={...o,...s.style}}return s}function ho(t=!1){return(n,i,s,{latestValues:o},r)=>{const l=(Xe(n)?uo:no)(i,o,r,n),u={...ro(i,typeof n=="string",t),...l,ref:s},{children:h}=i,f=g.useMemo(()=>$(h)?h.get():h,[h]);return g.createElement(n,{...u,children:f})}}const en=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function os(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}const as=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ls(t,e,n,i){os(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(as.has(s)?s:en(s),e.attrs[s])}function nn(t,e){const{style:n}=t,i={};for(const s in n)($(n[s])||e.style&&$(e.style[s])||Qi(s,t))&&(i[s]=n[s]);return i}function cs(t,e){const n=nn(t,e);for(const i in t)if($(t[i])||$(e[i])){const s=Ht.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[s]=t[i]}return n}function sn(t,e,n,i={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,s)),e}function us(t){const e=g.useRef(null);return e.current===null&&(e.current=t()),e.current}const se=t=>Array.isArray(t),fo=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),po=t=>se(t)?t[t.length-1]||0:t;function te(t){const e=$(t)?t.get():t;return fo(e)?e.toValue():e}function mo({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,s,o){const r={latestValues:go(i,s,o,t),renderState:e()};return n&&(r.mount=a=>n(i,a,r)),r}const hs=t=>(e,n)=>{const i=g.useContext(ue),s=g.useContext(he),o=()=>mo(t,e,i,s);return n?o():us(o)};function go(t,e,n,i){const s={},o=i(t,{});for(const f in o)s[f]=te(o[f]);let{initial:r,animate:a}=t;const l=pe(t),c=Xi(t);e&&c&&!l&&t.inherit!==!1&&(r===void 0&&(r=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||r===!1;const h=u?a:r;return h&&typeof h!="boolean"&&!fe(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const m=sn(t,p);if(!m)return;const{transitionEnd:v,transition:b,...C}=m;for(const y in C){let x=C[y];if(Array.isArray(x)){const P=u?x.length-1:0;x=x[P]}x!==null&&(s[y]=x)}for(const y in v)s[y]=v[y]}),s}const L=t=>t;class jn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function xo(t){let e=new jn,n=new jn,i=0,s=!1,o=!1;const r=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const h=u&&s,f=h?e:n;return c&&r.add(l),f.add(l)&&h&&s&&(i=e.order.length),l},cancel:l=>{n.remove(l),r.delete(l)},process:l=>{if(s){o=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];u(l),r.has(u)&&(a.schedule(u),t())}s=!1,o&&(o=!1,a.process(l))}};return a}const Zt=["prepare","read","update","preRender","render","postRender"],yo=40;function vo(t,e){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},o=Zt.reduce((h,f)=>(h[f]=xo(()=>n=!0),h),{}),r=h=>o[h].process(s),a=()=>{const h=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(h-s.timestamp,yo),1),s.timestamp=h,s.isProcessing=!0,Zt.forEach(r),s.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,s.isProcessing||t(a)};return{schedule:Zt.reduce((h,f)=>{const p=o[f];return h[f]=(m,v=!1,b=!1)=>(n||l(),p.schedule(m,v,b)),h},{}),cancel:h=>Zt.forEach(f=>o[f].cancel(h)),state:s,steps:o}}const{schedule:D,cancel:tt,state:I,steps:we}=vo(typeof requestAnimationFrame<"u"?requestAnimationFrame:L,!0),wo={useVisualState:hs({scrapeMotionValuesFromProps:cs,createRenderState:rs,onMount:(t,e,{renderState:n,latestValues:i})=>{D.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),D.render(()=>{Je(n,i,{enableHardwareAcceleration:!1},tn(e.tagName),t.transformTemplate),ls(e,n)})}})},bo={useVisualState:hs({scrapeMotionValuesFromProps:nn,createRenderState:Qe})};function To(t,{forwardMotionProps:e=!1},n,i){return{...Xe(t)?wo:bo,preloadedFeatures:n,useRender:ho(e),createVisualElement:i,Component:t}}function Z(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const ds=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function ge(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Po=t=>e=>ds(e)&&t(e,ge(e));function Q(t,e,n,i){return Z(t,e,Po(n),i)}const So=(t,e)=>n=>e(t(n)),ot=(...t)=>t.reduce(So);function fs(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const An=fs("dragHorizontal"),Mn=fs("dragVertical");function ps(t){let e=!1;if(t==="y")e=Mn();else if(t==="x")e=An();else{const n=An(),i=Mn();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function ms(){const t=ps(!0);return t?(t(),!1):!0}class ut{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Rn(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(o,r)=>{if(o.type==="touch"||ms())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&D.update(()=>a[i](o,r))};return Q(t.current,n,s,{passive:!t.getProps()[i]})}class Co extends ut{mount(){this.unmount=ot(Rn(this.node,!0),Rn(this.node,!1))}unmount(){}}class Vo extends ut{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ot(Z(this.node.current,"focus",()=>this.onFocus()),Z(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gs=(t,e)=>e?t===e?!0:gs(t,e.parentElement):!1;function be(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,ge(n))}class Do extends ut{constructor(){super(...arguments),this.removeStartListeners=L,this.removeEndListeners=L,this.removeAccessibleListeners=L,this.startPointerPress=(e,n)=>{if(this.removeEndListeners(),this.isPressing)return;const i=this.node.getProps(),o=Q(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u}=this.node.getProps();D.update(()=>{gs(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),r=Q(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=ot(o,r),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const r=a=>{a.key!=="Enter"||!this.checkPressEnd()||be("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&D.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Z(this.node.current,"keyup",r),be("down",(a,l)=>{this.startPress(a,l)})},n=Z(this.node.current,"keydown",e),i=()=>{this.isPressing&&be("cancel",(o,r)=>this.cancelPress(o,r))},s=Z(this.node.current,"blur",i);this.removeAccessibleListeners=ot(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&D.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ms()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&D.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Q(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Z(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ot(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ke=new WeakMap,Te=new WeakMap,jo=t=>{const e=ke.get(t.target);e&&e(t)},Ao=t=>{t.forEach(jo)};function Mo({root:t,...e}){const n=t||document;Te.has(n)||Te.set(n,{});const i=Te.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Ao,{root:t,...e})),i[s]}function Ro(t,e,n){const i=Mo(e);return ke.set(t,n),i.observe(t),()=>{ke.delete(t),i.unobserve(t)}}const Lo={some:0,all:1};class Eo extends ut{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:o}=e,r={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Lo[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=c?u:h;f&&f(l)};return Ro(this.node.current,r,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(ko(e,n))&&this.startObserver()}unmount(){}}function ko({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Bo={inView:{Feature:Eo},tap:{Feature:Do},focus:{Feature:Vo},hover:{Feature:Co}};function xs(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Fo(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function Io(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function xe(t,e,n){const i=t.getProps();return sn(i,e,n!==void 0?n:i.custom,Fo(t),Io(t))}const Oo="framerAppearId",$o="data-"+en(Oo);let Uo=L,rn=L;const at=t=>t*1e3,J=t=>t/1e3,zo={current:!1},ys=t=>Array.isArray(t)&&typeof t[0]=="number";function vs(t){return!!(!t||typeof t=="string"&&ws[t]||ys(t)||Array.isArray(t)&&t.every(vs))}const It=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,ws={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:It([0,.65,.55,1]),circOut:It([.55,0,1,.45]),backIn:It([.31,.01,.66,-.59]),backOut:It([.33,1.53,.69,.99])};function bs(t){if(t)return ys(t)?It(t):Array.isArray(t)?t.map(bs):ws[t]}function No(t,e,n,{delay:i=0,duration:s,repeat:o=0,repeatType:r="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=bs(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:r==="reverse"?"alternate":"normal"})}function Wo(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Ts=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Go=1e-7,Ho=12;function Ko(t,e,n,i,s){let o,r,a=0;do r=e+(n-e)/2,o=Ts(r,i,s)-t,o>0?n=r:e=r;while(Math.abs(o)>Go&&++a<Ho);return r}function qt(t,e,n,i){if(t===e&&n===i)return L;const s=o=>Ko(o,0,1,t,n);return o=>o===0||o===1?o:Ts(s(o),e,i)}const _o=qt(.42,0,1,1),qo=qt(0,0,.58,1),Ps=qt(.42,0,.58,1),Yo=t=>Array.isArray(t)&&typeof t[0]!="number",Ss=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Cs=t=>e=>1-t(1-e),Vs=t=>1-Math.sin(Math.acos(t)),on=Cs(Vs),Xo=Ss(on),Ds=qt(.33,1.53,.69,.99),an=Cs(Ds),Zo=Ss(an),Qo=t=>(t*=2)<1?.5*an(t):.5*(2-Math.pow(2,-10*(t-1))),Jo={linear:L,easeIn:_o,easeInOut:Ps,easeOut:qo,circIn:Vs,circInOut:Xo,circOut:on,backIn:an,backInOut:Zo,backOut:Ds,anticipate:Qo},Ln=t=>{if(Array.isArray(t)){rn(t.length===4);const[e,n,i,s]=t;return qt(e,n,i,s)}else if(typeof t=="string")return Jo[t];return t},ln=(t,e)=>n=>!!(Kt(n)&&Zr.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),js=(t,e,n)=>i=>{if(!Kt(i))return i;const[s,o,r,a]=i.match(me);return{[t]:parseFloat(s),[e]:parseFloat(o),[n]:parseFloat(r),alpha:a!==void 0?parseFloat(a):1}},ta=t=>lt(0,255,t),Pe={...xt,transform:t=>Math.round(ta(t))},mt={test:ln("rgb","red"),parse:js("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Pe.transform(t)+", "+Pe.transform(e)+", "+Pe.transform(n)+", "+$t(Ot.transform(i))+")"};function ea(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Be={test:ln("#"),parse:ea,transform:mt.transform},Vt={test:ln("hsl","hue"),parse:js("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+q.transform($t(e))+", "+q.transform($t(n))+", "+$t(Ot.transform(i))+")"},O={test:t=>mt.test(t)||Be.test(t)||Vt.test(t),parse:t=>mt.test(t)?mt.parse(t):Vt.test(t)?Vt.parse(t):Be.parse(t),transform:t=>Kt(t)?t:t.hasOwnProperty("red")?mt.transform(t):Vt.transform(t)},R=(t,e,n)=>-n*t+n*e+t;function Se(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function na({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,o=0,r=0;if(!e)s=o=r=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=Se(l,a,t+1/3),o=Se(l,a,t),r=Se(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(o*255),blue:Math.round(r*255),alpha:i}}const Ce=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},ia=[Be,mt,Vt],sa=t=>ia.find(e=>e.test(t));function En(t){const e=sa(t);let n=e.parse(t);return e===Vt&&(n=na(n)),n}const As=(t,e)=>{const n=En(t),i=En(e),s={...n};return o=>(s.red=Ce(n.red,i.red,o),s.green=Ce(n.green,i.green,o),s.blue=Ce(n.blue,i.blue,o),s.alpha=R(n.alpha,i.alpha,o),mt.transform(s))};function ra(t){var e,n;return isNaN(t)&&Kt(t)&&(((e=t.match(me))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(es))===null||n===void 0?void 0:n.length)||0)>0}const Ms={regex:Yr,countKey:"Vars",token:"${v}",parse:L},Rs={regex:es,countKey:"Colors",token:"${c}",parse:O.parse},Ls={regex:me,countKey:"Numbers",token:"${n}",parse:xt.parse};function Ve(t,{regex:e,countKey:n,token:i,parse:s}){const o=t.tokenised.match(e);o&&(t["num"+n]=o.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...o.map(s)))}function re(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ve(n,Ms),Ve(n,Rs),Ve(n,Ls),n}function Es(t){return re(t).values}function ks(t){const{values:e,numColors:n,numVars:i,tokenised:s}=re(t),o=e.length;return r=>{let a=s;for(let l=0;l<o;l++)l<i?a=a.replace(Ms.token,r[l]):l<i+n?a=a.replace(Rs.token,O.transform(r[l])):a=a.replace(Ls.token,$t(r[l]));return a}}const oa=t=>typeof t=="number"?0:t;function aa(t){const e=Es(t);return ks(t)(e.map(oa))}const ct={test:ra,parse:Es,createTransformer:ks,getAnimatableNone:aa},Bs=(t,e)=>n=>`${n>0?e:t}`;function Fs(t,e){return typeof t=="number"?n=>R(t,e,n):O.test(t)?As(t,e):t.startsWith("var(")?Bs(t,e):Os(t,e)}const Is=(t,e)=>{const n=[...t],i=n.length,s=t.map((o,r)=>Fs(o,e[r]));return o=>{for(let r=0;r<i;r++)n[r]=s[r](o);return n}},la=(t,e)=>{const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=Fs(t[s],e[s]));return s=>{for(const o in i)n[o]=i[o](s);return n}},Os=(t,e)=>{const n=ct.createTransformer(e),i=re(t),s=re(e);return i.numVars===s.numVars&&i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?ot(Is(i.values,s.values),n):Bs(t,e)},Gt=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},kn=(t,e)=>n=>R(t,e,n);function ca(t){return typeof t=="number"?kn:typeof t=="string"?O.test(t)?As:Os:Array.isArray(t)?Is:typeof t=="object"?la:kn}function ua(t,e,n){const i=[],s=n||ca(t[0]),o=t.length-1;for(let r=0;r<o;r++){let a=s(t[r],t[r+1]);if(e){const l=Array.isArray(e)?e[r]||L:e;a=ot(l,a)}i.push(a)}return i}function $s(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const o=t.length;if(rn(o===e.length),o===1)return()=>e[0];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const r=ua(e,i,s),a=r.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const h=Gt(t[u],t[u+1],c);return r[u](h)};return n?c=>l(lt(t[0],t[o-1],c)):l}function ha(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=Gt(0,e,i);t.push(R(n,1,s))}}function da(t){const e=[0];return ha(e,t.length-1),e}function fa(t,e){return t.map(n=>n*e)}function pa(t,e){return t.map(()=>e||Ps).splice(0,t.length-1)}function oe({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=Yo(i)?i.map(Ln):Ln(i),o={done:!1,value:e[0]},r=fa(n&&n.length===e.length?n:da(e),t),a=$s(r,e,{ease:Array.isArray(s)?s:pa(e,s)});return{calculatedDuration:t,next:l=>(o.value=a(l),o.done=l>=t,o)}}function Us(t,e){return e?t*(1e3/e):0}const ma=5;function zs(t,e,n){const i=Math.max(e-ma,0);return Us(n-t(i),e-i)}const De=.001,ga=.01,Bn=10,xa=.05,ya=1;function va({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let s,o;Uo(t<=at(Bn));let r=1-e;r=lt(xa,ya,r),t=lt(ga,Bn,J(t)),r<1?(s=c=>{const u=c*r,h=u*t,f=u-n,p=Fe(c,r),m=Math.exp(-h);return De-f/p*m},o=c=>{const h=c*r*t,f=h*n+n,p=Math.pow(r,2)*Math.pow(c,2)*t,m=Math.exp(-h),v=Fe(Math.pow(c,2),r);return(-s(c)+De>0?-1:1)*((f-p)*m)/v}):(s=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-De+u*h},o=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=ba(s,o,a);if(t=at(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:r*2*Math.sqrt(i*c),duration:t}}}const wa=12;function ba(t,e,n){let i=n;for(let s=1;s<wa;s++)i=i-t(i)/e(i);return i}function Fe(t,e){return t*Math.sqrt(1-e*e)}const Ta=["duration","bounce"],Pa=["stiffness","damping","mass"];function Fn(t,e){return e.some(n=>t[n]!==void 0)}function Sa(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Fn(t,Pa)&&Fn(t,Ta)){const n=va(t);e={...e,...n,velocity:0,mass:1},e.isResolvedFromDuration=!0}return e}function Ns({keyframes:t,restDelta:e,restSpeed:n,...i}){const s=t[0],o=t[t.length-1],r={done:!1,value:s},{stiffness:a,damping:l,mass:c,velocity:u,duration:h,isResolvedFromDuration:f}=Sa(i),p=u?-J(u):0,m=l/(2*Math.sqrt(a*c)),v=o-s,b=J(Math.sqrt(a/c)),C=Math.abs(v)<5;n||(n=C?.01:2),e||(e=C?.005:.5);let y;if(m<1){const x=Fe(b,m);y=P=>{const S=Math.exp(-m*b*P);return o-S*((p+m*b*v)/x*Math.sin(x*P)+v*Math.cos(x*P))}}else if(m===1)y=x=>o-Math.exp(-b*x)*(v+(p+b*v)*x);else{const x=b*Math.sqrt(m*m-1);y=P=>{const S=Math.exp(-m*b*P),E=Math.min(x*P,300);return o-S*((p+m*b*v)*Math.sinh(E)+x*v*Math.cosh(E))/x}}return{calculatedDuration:f&&h||null,next:x=>{const P=y(x);if(f)r.done=x>=h;else{let S=p;x!==0&&(m<1?S=zs(y,x,P):S=0);const E=Math.abs(S)<=n,j=Math.abs(o-P)<=e;r.done=E&&j}return r.value=r.done?o:P,r}}}function In({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:o=500,modifyTarget:r,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],f={done:!1,value:h},p=V=>a!==void 0&&V<a||l!==void 0&&V>l,m=V=>a===void 0?l:l===void 0||Math.abs(a-V)<Math.abs(l-V)?a:l;let v=n*e;const b=h+v,C=r===void 0?b:r(b);C!==b&&(v=C-h);const y=V=>-v*Math.exp(-V/i),x=V=>C+y(V),P=V=>{const A=y(V),Y=x(V);f.done=Math.abs(A)<=c,f.value=f.done?C:Y};let S,E;const j=V=>{p(f.value)&&(S=V,E=Ns({keyframes:[f.value,m(f.value)],velocity:zs(x,V,f.value),damping:s,stiffness:o,restDelta:c,restSpeed:u}))};return j(0),{calculatedDuration:null,next:V=>{let A=!1;return!E&&S===void 0&&(A=!0,P(V),j(V)),S!==void 0&&V>S?E.next(V-S):(!A&&P(V),f)}}}const Ca=t=>{const e=({timestamp:n})=>t(n);return{start:()=>D.update(e,!0),stop:()=>tt(e),now:()=>I.isProcessing?I.timestamp:performance.now()}},On=2e4;function $n(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<On;)e+=n,i=t.next(e);return e>=On?1/0:e}const Va={decay:In,inertia:In,tween:oe,keyframes:oe,spring:Ns};function ae({autoplay:t=!0,delay:e=0,driver:n=Ca,keyframes:i,type:s="keyframes",repeat:o=0,repeatDelay:r=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:h,...f}){let p=1,m=!1,v,b;const C=()=>{b=new Promise(M=>{v=M})};C();let y;const x=Va[s]||oe;let P;x!==oe&&typeof i[0]!="number"&&(P=$s([0,100],i,{clamp:!1}),i=[0,100]);const S=x({...f,keyframes:i});let E;a==="mirror"&&(E=x({...f,keyframes:[...i].reverse(),velocity:-(f.velocity||0)}));let j="idle",V=null,A=null,Y=null;S.calculatedDuration===null&&o&&(S.calculatedDuration=$n(S));const{calculatedDuration:X}=S;let et=1/0,nt=1/0;X!==null&&(et=X+r,nt=et*(o+1)-r);let F=0;const B=M=>{if(A===null)return;p>0&&(A=Math.min(A,M)),p<0&&(A=Math.min(M-nt/p,A)),V!==null?F=V:F=Math.round(M-A)*p;const Et=F-e*(p>=0?1:-1),gn=p>=0?Et<0:Et>nt;F=Math.max(Et,0),j==="finished"&&V===null&&(F=nt);let xn=F,yn=S;if(o){const ye=F/et;let Yt=Math.floor(ye),ht=ye%1;!ht&&ye>=1&&(ht=1),ht===1&&Yt--,Yt=Math.min(Yt,o+1);const wn=!!(Yt%2);wn&&(a==="reverse"?(ht=1-ht,r&&(ht-=r/et)):a==="mirror"&&(yn=E));let bn=lt(0,1,ht);F>nt&&(bn=a==="reverse"&&wn?1:0),xn=bn*et}const kt=gn?{done:!1,value:i[0]}:yn.next(xn);P&&(kt.value=P(kt.value));let{done:vn}=kt;!gn&&X!==null&&(vn=p>=0?F>=nt:F<=0);const xr=V===null&&(j==="finished"||j==="running"&&vn);return h&&h(kt.value),xr&&gr(),kt},it=()=>{y&&y.stop(),y=void 0},yt=()=>{j="idle",it(),v(),C(),A=Y=null},gr=()=>{j="finished",u&&u(),it(),v()},pn=()=>{if(m)return;y||(y=n(B));const M=y.now();l&&l(),V!==null?A=M-V:(!A||j==="finished")&&(A=M),j==="finished"&&C(),Y=A,V=null,j="running",y.start()};t&&pn();const mn={then(M,Et){return b.then(M,Et)},get time(){return J(F)},set time(M){M=at(M),F=M,V!==null||!y||p===0?V=M:A=y.now()-M/p},get duration(){const M=S.calculatedDuration===null?$n(S):S.calculatedDuration;return J(M)},get speed(){return p},set speed(M){M===p||!y||(p=M,mn.time=J(F))},get state(){return j},play:pn,pause:()=>{j="paused",V=F},stop:()=>{m=!0,j!=="idle"&&(j="idle",c&&c(),yt())},cancel:()=>{Y!==null&&B(Y),yt()},complete:()=>{j="finished"},sample:M=>(A=0,B(M))};return mn}function Da(t){let e;return()=>(e===void 0&&(e=t()),e)}const ja=Da(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Aa=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qt=10,Ma=2e4,Ra=(t,e)=>e.type==="spring"||t==="backgroundColor"||!vs(e.ease);function La(t,e,{onUpdate:n,onComplete:i,...s}){if(!(ja()&&Aa.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let r=!1,a,l;const c=()=>{l=new Promise(y=>{a=y})};c();let{keyframes:u,duration:h=300,ease:f,times:p}=s;if(Ra(e,s)){const y=ae({...s,repeat:0,delay:0});let x={done:!1,value:u[0]};const P=[];let S=0;for(;!x.done&&S<Ma;)x=y.sample(S),P.push(x.value),S+=Qt;p=void 0,u=P,h=S-Qt,f="linear"}const m=No(t.owner.current,e,u,{...s,duration:h,ease:f,times:p});s.syncStart&&(m.startTime=I.isProcessing?I.timestamp:document.timeline?document.timeline.currentTime:performance.now());const v=()=>m.cancel(),b=()=>{D.update(v),a(),c()};return m.onfinish=()=>{t.set(Wo(u,s)),i&&i(),b()},{then(y,x){return l.then(y,x)},attachTimeline(y){return m.timeline=y,m.onfinish=null,L},get time(){return J(m.currentTime||0)},set time(y){m.currentTime=at(y)},get speed(){return m.playbackRate},set speed(y){m.playbackRate=y},get duration(){return J(h)},play:()=>{r||(m.play(),tt(v))},pause:()=>m.pause(),stop:()=>{if(r=!0,m.playState==="idle")return;const{currentTime:y}=m;if(y){const x=ae({...s,autoplay:!1});t.setWithVelocity(x.sample(y-Qt).value,x.sample(y).value,Qt)}b()},complete:()=>m.finish(),cancel:b}}function Ea({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const s=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:L,pause:L,stop:L,then:o=>(o(),Promise.resolve()),cancel:L,complete:L});return e?ae({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const ka={type:"spring",stiffness:500,damping:25,restSpeed:10},Ba=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Fa={type:"keyframes",duration:.8},Ia={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Oa=(t,{keyframes:e})=>e.length>2?Fa:gt.has(t)?t.startsWith("scale")?Ba(e[1]):ka:Ia,Ie=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ct.test(e)||e==="0")&&!e.startsWith("url(")),$a=new Set(["brightness","contrast","saturate","opacity"]);function Ua(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(me)||[];if(!i)return t;const s=n.replace(i,"");let o=$a.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+s+")"}const za=/([a-z-]*)\(.*?\)/g,Oe={...ct,getAnimatableNone:t=>{const e=t.match(za);return e?e.map(Ua).join(" "):t}},Na={...ns,color:O,backgroundColor:O,outlineColor:O,fill:O,stroke:O,borderColor:O,borderTopColor:O,borderRightColor:O,borderBottomColor:O,borderLeftColor:O,filter:Oe,WebkitFilter:Oe},cn=t=>Na[t];function Ws(t,e){let n=cn(t);return n!==Oe&&(n=ct),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Gs=t=>/^0[^.\s]+$/.test(t);function Wa(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Gs(t)}function Ga(t,e,n,i){const s=Ie(e,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const r=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?r:o[c-1]),Wa(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(a=o[c]);if(s&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];o[u]=Ws(e,a)}return o}function Ha({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:o,repeatType:r,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Hs(t,e){return t[e]||t.default||t}const un=(t,e,n,i={})=>s=>{const o=Hs(i,t)||{},r=o.delay||i.delay||0;let{elapsed:a=0}=i;a=a-at(r);const l=Ga(e,t,n,o),c=l[0],u=l[l.length-1],h=Ie(t,c),f=Ie(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:m=>{e.set(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{s(),o.onComplete&&o.onComplete()}};if(Ha(o)||(p={...p,...Oa(t,p)}),p.duration&&(p.duration=at(p.duration)),p.repeatDelay&&(p.repeatDelay=at(p.repeatDelay)),!h||!f||zo.current||o.type===!1)return Ea(p);if(e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=La(e,t,p);if(m)return m}return ae(p)};function le(t){return!!($(t)&&t.add)}const Ks=t=>/^\-?\d*\.?\d+$/.test(t);function hn(t,e){t.indexOf(e)===-1&&t.push(e)}function dn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class fn{constructor(){this.subscriptions=[]}add(e){return hn(this.subscriptions,e),()=>dn(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let o=0;o<s;o++){const r=this.subscriptions[o];r&&r(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ka=t=>!isNaN(parseFloat(t));class _a{constructor(e,n={}){this.version="10.16.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{this.prev=this.current,this.current=i;const{delta:o,timestamp:r}=I;this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r,D.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>D.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=Ka(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new fn);const i=this.events[e].add(n);return e==="change"?()=>{i(),D.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Us(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function At(t,e){return new _a(t,e)}const _s=t=>e=>e.test(t),qa={test:t=>t==="auto",parse:t=>t},qs=[xt,T,q,st,Jr,Qr,qa],Bt=t=>qs.find(_s(t)),Ya=[...qs,O,ct],Xa=t=>Ya.find(_s(t));function Za(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,At(n))}function Qa(t,e){const n=xe(t,e);let{transitionEnd:i={},transition:s={},...o}=n?t.makeTargetAnimatable(n,!1):{};o={...o,...i};for(const r in o){const a=po(o[r]);Za(t,r,a)}}function Ja(t,e,n){var i,s;const o=Object.keys(e).filter(a=>!t.hasValue(a)),r=o.length;if(r)for(let a=0;a<r;a++){const l=o[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(s=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&s!==void 0?s:e[l]),u!=null&&(typeof u=="string"&&(Ks(u)||Gs(u))?u=parseFloat(u):!Xa(u)&&ct.test(c)&&(u=Ws(l,c)),t.addValue(l,At(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function tl(t,e){return e?(e[t]||e.default||e).from:void 0}function el(t,e,n){const i={};for(const s in t){const o=tl(s,e);if(o!==void 0)i[s]=o;else{const r=n.getValue(s);r&&(i[s]=r.get())}}return i}function nl({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Ys(t,e,{delay:n=0,transitionOverride:i,type:s}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:r,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(o=i);const c=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const h in a){const f=t.getValue(h),p=a[h];if(!f||p===void 0||u&&nl(u,h))continue;const m={delay:n,elapsed:0,...o};if(window.HandoffAppearAnimations&&!f.hasAnimated){const b=t.getProps()[$o];b&&(m.elapsed=window.HandoffAppearAnimations(b,h,f,D),m.syncStart=!0)}f.start(un(h,f,p,t.shouldReduceMotion&&gt.has(h)?{type:!1}:m));const v=f.animation;le(l)&&(l.add(h),v.then(()=>l.remove(h))),c.push(v)}return r&&Promise.all(c).then(()=>{r&&Qa(t,r)}),c}function $e(t,e,n={}){const i=xe(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(Ys(t,i,n)):()=>Promise.resolve(),r=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:h}=s;return il(t,e,c+l,u,h,n)}:()=>Promise.resolve(),{when:a}=s;if(a){const[l,c]=a==="beforeChildren"?[o,r]:[r,o];return l().then(()=>c())}else return Promise.all([o(),r(n.delay)])}function il(t,e,n=0,i=0,s=1,o){const r=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(sl).forEach((c,u)=>{c.notify("AnimationStart",e),r.push($e(c,e,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(r)}function sl(t,e){return t.sortNodePosition(e)}function rl(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(o=>$e(t,o,n));i=Promise.all(s)}else if(typeof e=="string")i=$e(t,e,n);else{const s=typeof e=="function"?xe(t,e,n.custom):e;i=Promise.all(Ys(t,s,n))}return i.then(()=>t.notify("AnimationComplete",e))}const ol=[..._e].reverse(),al=_e.length;function ll(t){return e=>Promise.all(e.map(({animation:n,options:i})=>rl(t,n,i)))}function cl(t){let e=ll(t);const n=hl();let i=!0;const s=(l,c)=>{const u=xe(t,c);if(u){const{transition:h,transitionEnd:f,...p}=u;l={...l,...p,...f}}return l};function o(l){e=l(t)}function r(l,c){const u=t.getProps(),h=t.getVariantContext(!0)||{},f=[],p=new Set;let m={},v=1/0;for(let C=0;C<al;C++){const y=ol[C],x=n[y],P=u[y]!==void 0?u[y]:h[y],S=Nt(P),E=y===c?x.isActive:null;E===!1&&(v=C);let j=P===h[y]&&P!==u[y]&&S;if(j&&i&&t.manuallyAnimateOnMount&&(j=!1),x.protectedKeys={...m},!x.isActive&&E===null||!P&&!x.prevProp||fe(P)||typeof P=="boolean")continue;const V=ul(x.prevProp,P);let A=V||y===c&&x.isActive&&!j&&S||C>v&&S;const Y=Array.isArray(P)?P:[P];let X=Y.reduce(s,{});E===!1&&(X={});const{prevResolvedValues:et={}}=x,nt={...et,...X},F=B=>{A=!0,p.delete(B),x.needsAnimating[B]=!0};for(const B in nt){const it=X[B],yt=et[B];m.hasOwnProperty(B)||(it!==yt?se(it)&&se(yt)?!xs(it,yt)||V?F(B):x.protectedKeys[B]=!0:it!==void 0?F(B):p.add(B):it!==void 0&&p.has(B)?F(B):x.protectedKeys[B]=!0)}x.prevProp=P,x.prevResolvedValues=X,x.isActive&&(m={...m,...X}),i&&t.blockInitialAnimation&&(A=!1),A&&!j&&f.push(...Y.map(B=>({animation:B,options:{type:y,...l}})))}if(p.size){const C={};p.forEach(y=>{const x=t.getBaseTarget(y);x!==void 0&&(C[y]=x)}),f.push({animation:C})}let b=!!f.length;return i&&u.initial===!1&&!t.manuallyAnimateOnMount&&(b=!1),i=!1,b?e(f):Promise.resolve()}function a(l,c,u){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),n[l].isActive=c;const f=r(u,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:r,setActive:a,setAnimateFunction:o,getState:()=>n}}function ul(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!xs(e,t):!1}function dt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hl(){return{animate:dt(!0),whileInView:dt(),whileHover:dt(),whileTap:dt(),whileDrag:dt(),whileFocus:dt(),exit:dt()}}class dl extends ut{constructor(e){super(e),e.animationState||(e.animationState=cl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),fe(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let fl=0;class pl extends ut{constructor(){super(...arguments),this.id=fl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const o=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&o.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const ml={animation:{Feature:dl},exit:{Feature:pl}},Un=(t,e)=>Math.abs(t-e);function gl(t,e){const n=Un(t.x,e.x),i=Un(t.y,e.y);return Math.sqrt(n**2+i**2)}class Xs{constructor(e,n,{transformPagePoint:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=Ae(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,h=gl(c.offset,{x:0,y:0})>=3;if(!u&&!h)return;const{point:f}=c,{timestamp:p}=I;this.history.push({...f,timestamp:p});const{onStart:m,onMove:v}=this.handlers;u||(m&&m(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,c)},this.handlePointerMove=(c,u)=>{this.lastMoveEvent=c,this.lastMoveEventInfo=je(u,this.transformPagePoint),D.update(this.updatePoint,!0)},this.handlePointerUp=(c,u)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:h,onSessionEnd:f}=this.handlers,p=Ae(c.type==="pointercancel"?this.lastMoveEventInfo:je(u,this.transformPagePoint),this.history);this.startEvent&&h&&h(c,p),f&&f(c,p)},!ds(e))return;this.handlers=n,this.transformPagePoint=i;const s=ge(e),o=je(s,this.transformPagePoint),{point:r}=o,{timestamp:a}=I;this.history=[{...r,timestamp:a}];const{onSessionStart:l}=n;l&&l(e,Ae(o,this.history)),this.removeListeners=ot(Q(window,"pointermove",this.handlePointerMove),Q(window,"pointerup",this.handlePointerUp),Q(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tt(this.updatePoint)}}function je(t,e){return e?{point:e(t.point)}:t}function zn(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ae({point:t},e){return{point:t,delta:zn(t,Zs(e)),offset:zn(t,xl(e)),velocity:yl(e,.1)}}function xl(t){return t[0]}function Zs(t){return t[t.length-1]}function yl(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=Zs(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>at(e)));)n--;if(!i)return{x:0,y:0};const o=J(s.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const r={x:(s.x-i.x)/o,y:(s.y-i.y)/o};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function z(t){return t.max-t.min}function Ue(t,e=0,n=.01){return Math.abs(t-e)<=n}function Nn(t,e,n,i=.5){t.origin=i,t.originPoint=R(e.min,e.max,t.origin),t.scale=z(n)/z(e),(Ue(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=R(n.min,n.max,t.origin)-t.originPoint,(Ue(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Ut(t,e,n,i){Nn(t.x,e.x,n.x,i?i.originX:void 0),Nn(t.y,e.y,n.y,i?i.originY:void 0)}function Wn(t,e,n){t.min=n.min+e.min,t.max=t.min+z(e)}function vl(t,e,n){Wn(t.x,e.x,n.x),Wn(t.y,e.y,n.y)}function Gn(t,e,n){t.min=e.min-n.min,t.max=t.min+z(e)}function zt(t,e,n){Gn(t.x,e.x,n.x),Gn(t.y,e.y,n.y)}function wl(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?R(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?R(n,t,i.max):Math.min(t,n)),t}function Hn(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function bl(t,{top:e,left:n,bottom:i,right:s}){return{x:Hn(t.x,n,s),y:Hn(t.y,e,i)}}function Kn(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Tl(t,e){return{x:Kn(t.x,e.x),y:Kn(t.y,e.y)}}function Pl(t,e){let n=.5;const i=z(t),s=z(e);return s>i?n=Gt(e.min,e.max-i,t.min):i>s&&(n=Gt(t.min,t.max-s,e.min)),lt(0,1,n)}function Sl(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const ze=.35;function Cl(t=ze){return t===!1?t=0:t===!0&&(t=ze),{x:_n(t,"left","right"),y:_n(t,"top","bottom")}}function _n(t,e,n){return{min:qn(t,e),max:qn(t,n)}}function qn(t,e){return typeof t=="number"?t:t[e]||0}const Yn=()=>({translate:0,scale:1,origin:0,originPoint:0}),Dt=()=>({x:Yn(),y:Yn()}),Xn=()=>({min:0,max:0}),k=()=>({x:Xn(),y:Xn()});function _(t){return[t("x"),t("y")]}function Qs({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Vl({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Dl(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Me(t){return t===void 0||t===1}function Ne({scale:t,scaleX:e,scaleY:n}){return!Me(t)||!Me(e)||!Me(n)}function ft(t){return Ne(t)||Js(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Js(t){return Zn(t.x)||Zn(t.y)}function Zn(t){return t&&t!=="0%"}function ce(t,e,n){const i=t-n,s=e*i;return n+s}function Qn(t,e,n,i,s){return s!==void 0&&(t=ce(t,s,i)),ce(t,n,i)+e}function We(t,e=0,n=1,i,s){t.min=Qn(t.min,e,n,i,s),t.max=Qn(t.max,e,n,i,s)}function tr(t,{x:e,y:n}){We(t.x,e.translate,e.scale,e.originPoint),We(t.y,n.translate,n.scale,n.originPoint)}function jl(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let o,r;for(let a=0;a<s;a++){o=n[a],r=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&jt(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,tr(t,r)),i&&ft(o.latestValues)&&jt(t,o.latestValues))}e.x=Jn(e.x),e.y=Jn(e.y)}function Jn(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function rt(t,e){t.min=t.min+e,t.max=t.max+e}function ti(t,e,[n,i,s]){const o=e[s]!==void 0?e[s]:.5,r=R(t.min,t.max,o);We(t,e[n],e[i],r,e.scale)}const Al=["x","scaleX","originX"],Ml=["y","scaleY","originY"];function jt(t,e){ti(t.x,e,Al),ti(t.y,e,Ml)}function er(t,e){return Qs(Dl(t.getBoundingClientRect(),e))}function Rl(t,e,n){const i=er(t,n),{scroll:s}=e;return s&&(rt(i.x,s.offset.x),rt(i.y,s.offset.y)),i}const Ll=new WeakMap;class El{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=k(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=l=>{this.stopAnimation(),n&&this.snapToCursor(ge(l,"page").point)},o=(l,c)=>{const{drag:u,dragPropagation:h,onDragStart:f}=this.getProps();if(u&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ps(u),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_(m=>{let v=this.getAxisMotionValue(m).get()||0;if(q.test(v)){const{projection:b}=this.visualElement;if(b&&b.layout){const C=b.layout.layoutBox[m];C&&(v=z(C)*(parseFloat(v)/100))}}this.originPoint[m]=v}),f&&D.update(()=>f(l,c),!1,!0);const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},r=(l,c)=>{const{dragPropagation:u,dragDirectionLock:h,onDirectionLock:f,onDrag:p}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:m}=c;if(h&&this.currentDirection===null){this.currentDirection=kl(m),this.currentDirection!==null&&f&&f(this.currentDirection);return}this.updateAxis("x",c.point,m),this.updateAxis("y",c.point,m),this.visualElement.render(),p&&p(l,c)},a=(l,c)=>this.stop(l,c);this.panSession=new Xs(e,{onSessionStart:s,onStart:o,onMove:r,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:o}=this.getProps();o&&D.update(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!Jt(e,s,this.currentDirection))return;const o=this.getAxisMotionValue(e);let r=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(r=wl(r,this.constraints[e],this.elastic[e])),o.set(r)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),{layout:i}=this.visualElement.projection||{},s=this.constraints;e&&Ct(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=bl(i.layoutBox,e):this.constraints=!1,this.elastic=Cl(n),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&_(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Sl(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ct(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const o=Rl(i,s.root,this.visualElement.getTransformPagePoint());let r=Tl(s.layout.layoutBox,o);if(n){const a=n(Vl(r));this.hasMutatedConstraints=!!a,a&&(r=Qs(a))}return r}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:o,dragSnapToOrigin:r,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=_(u=>{if(!Jt(u,n,this.currentDirection))return;let h=l&&l[u]||{};r&&(h={min:0,max:0});const f=s?200:1e6,p=s?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(un(e,i,0,n))}stopAnimation(){_(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){_(n=>{const{drag:i}=this.getProps();if(!Jt(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,o=this.getAxisMotionValue(n);if(s&&s.layout){const{min:r,max:a}=s.layout.layoutBox[n];o.set(e[n]-R(r,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ct(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};_(r=>{const a=this.getAxisMotionValue(r);if(a){const l=a.get();s[r]=Pl({min:l,max:l},this.constraints[r])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),_(r=>{if(!Jt(r,e,null))return;const a=this.getAxisMotionValue(r),{min:l,max:c}=this.constraints[r];a.set(R(l,c,s[r]))})}addListeners(){if(!this.visualElement.current)return;Ll.set(this.visualElement,this);const e=this.visualElement.current,n=Q(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ct(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const r=Z(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(_(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{r(),n(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:o=!1,dragElastic:r=ze,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:o,dragElastic:r,dragMomentum:a}}}function Jt(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function kl(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Bl extends ut{constructor(e){super(e),this.removeGroupControls=L,this.removeListeners=L,this.controls=new El(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||L}unmount(){this.removeGroupControls(),this.removeListeners()}}const ei=t=>(e,n)=>{t&&D.update(()=>t(e,n))};class Fl extends ut{constructor(){super(...arguments),this.removePointerDownListener=L}onPointerDown(e){this.session=new Xs(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ei(e),onStart:ei(n),onMove:i,onEnd:(o,r)=>{delete this.session,s&&D.update(()=>s(o,r))}}}mount(){this.removePointerDownListener=Q(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Il(){const t=g.useContext(he);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,s=g.useId();return g.useEffect(()=>i(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const ee={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ni(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ft={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(T.test(t))t=parseFloat(t);else return t;const n=ni(t,e.target.x),i=ni(t,e.target.y);return`${n}% ${i}%`}},Ol={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=ct.parse(t);if(s.length>5)return i;const o=ct.createTransformer(t),r=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+r]/=a,s[1+r]/=l;const c=R(a,l,.5);return typeof s[2+r]=="number"&&(s[2+r]/=c),typeof s[3+r]=="number"&&(s[3+r]/=c),o(s)}};class $l extends Hi.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:o}=e;Hr(Ul),o&&(n.group&&n.group.add(o),i&&i.register&&s&&i.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ee.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:o}=this.props,r=i.projection;return r&&(r.isPresent=o,s||e.layoutDependency!==n||n===void 0?r.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?r.promote():r.relegate()||D.postRender(()=>{const a=r.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nr(t){const[e,n]=Il(),i=g.useContext(Ye);return Hi.createElement($l,{...t,layoutGroup:i,switchLayoutGroup:g.useContext(Zi),isPresent:e,safeToRemove:n})}const Ul={borderRadius:{...Ft,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ft,borderTopRightRadius:Ft,borderBottomLeftRadius:Ft,borderBottomRightRadius:Ft,boxShadow:Ol},ir=["TopLeft","TopRight","BottomLeft","BottomRight"],zl=ir.length,ii=t=>typeof t=="string"?parseFloat(t):t,si=t=>typeof t=="number"||T.test(t);function Nl(t,e,n,i,s,o){s?(t.opacity=R(0,n.opacity!==void 0?n.opacity:1,Wl(i)),t.opacityExit=R(e.opacity!==void 0?e.opacity:1,0,Gl(i))):o&&(t.opacity=R(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let r=0;r<zl;r++){const a=`border${ir[r]}Radius`;let l=ri(e,a),c=ri(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||si(l)===si(c)?(t[a]=Math.max(R(ii(l),ii(c),i),0),(q.test(c)||q.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=R(e.rotate||0,n.rotate||0,i))}function ri(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Wl=sr(0,.5,on),Gl=sr(.5,.95,L);function sr(t,e,n){return i=>i<t?0:i>e?1:n(Gt(t,e,i))}function oi(t,e){t.min=e.min,t.max=e.max}function N(t,e){oi(t.x,e.x),oi(t.y,e.y)}function ai(t,e,n,i,s){return t-=e,t=ce(t,1/n,i),s!==void 0&&(t=ce(t,1/s,i)),t}function Hl(t,e=0,n=1,i=.5,s,o=t,r=t){if(q.test(e)&&(e=parseFloat(e),e=R(r.min,r.max,e/100)-r.min),typeof e!="number")return;let a=R(o.min,o.max,i);t===o&&(a-=e),t.min=ai(t.min,e,n,a,s),t.max=ai(t.max,e,n,a,s)}function li(t,e,[n,i,s],o,r){Hl(t,e[n],e[i],e[s],e.scale,o,r)}const Kl=["x","scaleX","originX"],_l=["y","scaleY","originY"];function ci(t,e,n,i){li(t.x,e,Kl,n?n.x:void 0,i?i.x:void 0),li(t.y,e,_l,n?n.y:void 0,i?i.y:void 0)}function ui(t){return t.translate===0&&t.scale===1}function rr(t){return ui(t.x)&&ui(t.y)}function ql(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function or(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function hi(t){return z(t.x)/z(t.y)}class Yl{constructor(){this.members=[]}add(e){hn(this.members,e),e.scheduleRender()}remove(e){if(dn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1){i=o;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function di(t,e,n){let i="";const s=t.x.translate/e.x,o=t.y.translate/e.y;if((s||o)&&(i=`translate3d(${s}px, ${o}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const r=t.x.scale*e.x,a=t.y.scale*e.y;return(r!==1||a!==1)&&(i+=`scale(${r}, ${a})`),i||"none"}const Xl=(t,e)=>t.depth-e.depth;class Zl{constructor(){this.children=[],this.isDirty=!1}add(e){hn(this.children,e),this.isDirty=!0}remove(e){dn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Xl),this.isDirty=!1,this.children.forEach(e)}}function Ql(t,e){const n=performance.now(),i=({timestamp:s})=>{const o=s-n;o>=e&&(tt(i),t(o-e))};return D.read(i,!0),()=>tt(i)}function Jl(t){window.MotionDebug&&window.MotionDebug.record(t)}function tc(t){return t instanceof SVGElement&&t.tagName!=="svg"}function ec(t,e,n){const i=$(t)?t:At(t);return i.start(un("",i,e,n)),i.animation}const fi=["","X","Y","Z"],pi=1e3;let nc=0;const pt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ar({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(r={},a=e==null?void 0:e()){this.id=nc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{pt.totalNodes=pt.resolvedTargetDeltas=pt.recalculatedProjection=0,this.nodes.forEach(rc),this.nodes.forEach(uc),this.nodes.forEach(hc),this.nodes.forEach(oc),Jl(pt)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Zl)}addEventListener(r,a){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new fn),this.eventHandlers.get(r).add(a)}notifyListeners(r,...a){const l=this.eventHandlers.get(r);l&&l.notify(...a)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=tc(r),this.instance=r;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const f=()=>this.root.updateBlockedByResize=!1;t(r,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=Ql(f,250),ee.hasAnimatedSinceResize&&(ee.hasAnimatedSinceResize=!1,this.nodes.forEach(gi))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||gc,{onLayoutAnimationStart:b,onLayoutAnimationComplete:C}=u.getProps(),y=!this.targetLayout||!or(this.targetLayout,m)||p,x=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||f&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,x);const P={...Hs(v,"layout"),onPlay:b,onComplete:C};(u.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P)}else f||gi(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dc),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mi);return}this.isUpdating||this.nodes.forEach(lc),this.isUpdating=!1,this.nodes.forEach(cc),this.nodes.forEach(ic),this.nodes.forEach(sc),this.clearAllSnapshots();const a=performance.now();I.delta=lt(0,1e3/60,a-I.timestamp),I.timestamp=a,I.isProcessing=!0,we.update.process(I),we.preRender.process(I),we.render.process(I),I.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ac),this.sharedNodes.forEach(fc)}scheduleUpdateProjection(){D.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){D.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=k(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:r,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const r=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!rr(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;r&&(a||ft(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return r&&(l=this.removeTransform(l)),xc(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:r}=this.options;if(!r)return k();const a=r.measureViewportBox(),{scroll:l}=this.root;return l&&(rt(a.x,l.offset.x),rt(a.y,l.offset.y)),a}removeElementScroll(r){const a=k();N(a,r);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;if(c!==this.root&&u&&h.layoutScroll){if(u.isRoot){N(a,r);const{scroll:f}=this.root;f&&(rt(a.x,-f.offset.x),rt(a.y,-f.offset.y))}rt(a.x,u.offset.x),rt(a.y,u.offset.y)}}return a}applyTransform(r,a=!1){const l=k();N(l,r);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&jt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ft(u.latestValues)&&jt(l,u.latestValues)}return ft(this.latestValues)&&jt(l,this.latestValues),l}removeTransform(r){const a=k();N(a,r);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ft(c.latestValues))continue;Ne(c.latestValues)&&c.updateSnapshot();const u=k(),h=c.measurePageBox();N(u,h),ci(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ft(this.latestValues)&&ci(a,this.latestValues),a}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==I.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(r||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=I.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=k(),this.relativeTargetOrigin=k(),zt(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),N(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=k(),this.targetWithTransforms=k()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vl(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):N(this.target,this.layout.layoutBox),tr(this.target,this.targetDelta)):N(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=k(),this.relativeTargetOrigin=k(),zt(this.relativeTargetOrigin,this.target,p.target),N(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}pt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ne(this.parent.latestValues)||Js(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===I.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;N(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;jl(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=Dt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Dt(),this.projectionDeltaWithTransform=Dt());const v=this.projectionTransform;Ut(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=di(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),pt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),r){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(r,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=Dt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=k(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,v=p!==m,b=this.getStack(),C=!b||b.members.length<=1,y=!!(v&&!C&&this.options.crossfade===!0&&!this.path.some(mc));this.animationProgress=0;let x;this.mixTargetDelta=P=>{const S=P/1e3;xi(h.x,r.x,S),xi(h.y,r.y,S),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zt(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),pc(this.relativeTarget,this.relativeTargetOrigin,f,S),x&&ql(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=k()),N(x,this.relativeTarget)),v&&(this.animationValues=u,Nl(u,c,this.latestValues,S,y,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=D.update(()=>{ee.hasAnimatedSinceResize=!0,this.currentAnimation=ec(0,pi,{...r,onUpdate:a=>{this.mixTargetDelta(a),r.onUpdate&&r.onUpdate(a)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pi),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=r;if(!(!a||!l||!c)){if(this!==r&&this.layout&&c&&lr(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||k();const h=z(this.layout.layoutBox.x);l.x.min=r.target.x.min,l.x.max=l.x.min+h;const f=z(this.layout.layoutBox.y);l.y.min=r.target.y.min,l.y.max=l.y.min+f}N(a,l),jt(a,u),Ut(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(r,a){this.sharedNodes.has(r)||this.sharedNodes.set(r,new Yl),this.sharedNodes.get(r).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:a}=this.options;return a?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:a}=this.options;return a?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),r&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetRotation(){const{visualElement:r}=this.options;if(!r)return;let a=!1;const{latestValues:l}=r;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<fi.length;u++){const h="rotate"+fi[u];l[h]&&(c[h]=l[h],r.setStaticValue(h,0))}r.render();for(const u in c)r.setStaticValue(u,c[u]);r.scheduleRender()}getProjectionStyles(r={}){var a,l;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=te(r.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=te(r.pointerEvents)||""),this.hasProjected&&!ft(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=di(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:m}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const v in ne){if(f[v]===void 0)continue;const{correct:b,applyTo:C}=ne[v],y=c.transform==="none"?f[v]:b(f[v],h);if(C){const x=C.length;for(let P=0;P<x;P++)c[C[P]]=y}else c[v]=y}return this.options.layoutId&&(c.pointerEvents=h===this?te(r.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var a;return(a=r.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(mi),this.root.sharedNodes.clear()}}}function ic(t){t.updateLayout()}function sc(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:o}=t.options,r=n.source!==t.layout.source;o==="size"?_(h=>{const f=r?n.measuredBox[h]:n.layoutBox[h],p=z(f);f.min=i[h].min,f.max=f.min+p}):lr(o,n.layoutBox,i)&&_(h=>{const f=r?n.measuredBox[h]:n.layoutBox[h],p=z(i[h]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const a=Dt();Ut(a,i,n.layoutBox);const l=Dt();r?Ut(l,t.applyTransform(s,!0),n.measuredBox):Ut(l,i,n.layoutBox);const c=!rr(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const m=k();zt(m,n.layoutBox,f.layoutBox);const v=k();zt(v,i,p.layoutBox),or(m,v)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=m,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function rc(t){pt.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oc(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ac(t){t.clearSnapshot()}function mi(t){t.clearMeasurements()}function lc(t){t.isLayoutDirty=!1}function cc(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function gi(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function uc(t){t.resolveTargetDelta()}function hc(t){t.calcProjection()}function dc(t){t.resetRotation()}function fc(t){t.removeLeadSnapshot()}function xi(t,e,n){t.translate=R(e.translate,0,n),t.scale=R(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function yi(t,e,n,i){t.min=R(e.min,n.min,i),t.max=R(e.max,n.max,i)}function pc(t,e,n,i){yi(t.x,e.x,n.x,i),yi(t.y,e.y,n.y,i)}function mc(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const gc={duration:.45,ease:[.4,0,.1,1]},vi=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),wi=vi("applewebkit/")&&!vi("chrome/")?Math.round:L;function bi(t){t.min=wi(t.min),t.max=wi(t.max)}function xc(t){bi(t.x),bi(t.y)}function lr(t,e,n){return t==="position"||t==="preserve-aspect"&&!Ue(hi(e),hi(n),.2)}const yc=ar({attachResizeListener:(t,e)=>Z(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Re={current:void 0},cr=ar({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Re.current){const t=new yc({});t.mount(window),t.setOptions({layoutScroll:!0}),Re.current=t}return Re.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),vc={pan:{Feature:Fl},drag:{Feature:Bl,ProjectionNode:cr,MeasureLayout:nr}},wc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function bc(t){const e=wc.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Ge(t,e,n=1){const[i,s]=bc(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const r=o.trim();return Ks(r)?parseFloat(r):r}else return Ee(s)?Ge(s,e,n+1):s}function Tc(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const o=s.get();if(!Ee(o))return;const r=Ge(o,i);r&&s.set(r)});for(const s in e){const o=e[s];if(!Ee(o))continue;const r=Ge(o,i);r&&(e[s]=r,n||(n={}),n[s]===void 0&&(n[s]=o))}return{target:e,transitionEnd:n}}const Pc=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ur=t=>Pc.has(t),Sc=t=>Object.keys(t).some(ur),Ti=t=>t===xt||t===T,Pi=(t,e)=>parseFloat(t.split(", ")[e]),Si=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return Pi(s[1],e);{const o=i.match(/^matrix\((.+)\)$/);return o?Pi(o[1],t):0}},Cc=new Set(["x","y","z"]),Vc=Ht.filter(t=>!Cc.has(t));function Dc(t){const e=[];return Vc.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Mt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Si(4,13),y:Si(5,14)};Mt.translateX=Mt.x;Mt.translateY=Mt.y;const jc=(t,e,n)=>{const i=e.measureViewportBox(),s=e.current,o=getComputedStyle(s),{display:r}=o,a={};r==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=Mt[c](i,o)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=Mt[c](l,o)}),t},Ac=(t,e,n={},i={})=>{e={...e},i={...i};const s=Object.keys(e).filter(ur);let o=[],r=!1;const a=[];if(s.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],h=Bt(u);const f=e[l];let p;if(se(f)){const m=f.length,v=f[0]===null?1:0;u=f[v],h=Bt(u);for(let b=v;b<m&&f[b]!==null;b++)p?rn(Bt(f[b])===p):p=Bt(f[b])}else p=Bt(f);if(h!==p)if(Ti(h)&&Ti(p)){const m=c.get();typeof m=="string"&&c.set(parseFloat(m)),typeof f=="string"?e[l]=parseFloat(f):Array.isArray(f)&&p===T&&(e[l]=f.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(u===0||f===0)?u===0?c.set(p.transform(u)):e[l]=h.transform(f):(r||(o=Dc(t),r=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=jc(e,t,a);return o.length&&o.forEach(([u,h])=>{t.getValue(u).set(h)}),t.render(),de&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function Mc(t,e,n,i){return Sc(e)?Ac(t,e,n,i):{target:e,transitionEnd:i}}const Rc=(t,e,n,i)=>{const s=Tc(t,e,i);return e=s.target,i=s.transitionEnd,Mc(t,e,n,i)},He={current:null},hr={current:!1};function Lc(){if(hr.current=!0,!!de)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>He.current=t.matches;t.addListener(e),e()}else He.current=!1}function Ec(t,e,n){const{willChange:i}=e;for(const s in e){const o=e[s],r=n[s];if($(o))t.addValue(s,o),le(i)&&i.add(s);else if($(r))t.addValue(s,At(o,{owner:t})),le(i)&&i.remove(s);else if(r!==o)if(t.hasValue(s)){const a=t.getValue(s);!a.hasAnimated&&a.set(o)}else{const a=t.getStaticValue(s);t.addValue(s,At(a!==void 0?a:o,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Ci=new WeakMap,dr=Object.keys(Wt),kc=dr.length,Vi=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Bc=qe.length;class Fc{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,visualState:o},r={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>D.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=r,this.isControllingVariants=pe(n),this.isVariantNode=Xi(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const h in u){const f=u[h];a[h]!==void 0&&$(f)&&(f.set(a[h],!1),le(c)&&c.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Ci.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),hr.current||Lc(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:He.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ci.delete(this.current),this.projection&&this.projection.unmount(),tt(this.notifyUpdate),tt(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=gt.has(e),s=n.on("change",r=>{this.latestValues[e]=r,this.props.onUpdate&&D.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,s,o){let r,a;for(let l=0;l<kc;l++){const c=dr[l],{isEnabled:u,Feature:h,ProjectionNode:f,MeasureLayout:p}=Wt[c];f&&(r=f),u(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),p&&(a=p))}if(!this.projection&&r){this.projection=new r(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:h,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||h&&Ct(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):k()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Vi.length;i++){const s=Vi[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const o=e["on"+s];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=Ec(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Bc;i++){const s=qe[i],o=this.props[s];(Nt(o)||o===!1)&&(n[s]=o)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=At(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(n=sn(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!$(o)?o:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new fn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class fr extends Fc{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:s},o){let r=el(i,e||{},this);if(s&&(n&&(n=s(n)),i&&(i=s(i)),r&&(r=s(r))),o){Ja(this,i,r);const a=Rc(this,i,r,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function Ic(t){return window.getComputedStyle(t)}class Oc extends fr{readValueFromInstance(e,n){if(gt.has(n)){const i=cn(n);return i&&i.default||0}else{const i=Ic(e),s=(ts(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return er(e,n)}build(e,n,i,s){Ze(e,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return nn(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,s){os(e,n,i,s)}}class $c extends fr{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(gt.has(n)){const i=cn(n);return i&&i.default||0}return n=as.has(n)?n:en(n),e.getAttribute(n)}measureInstanceViewportBox(){return k()}scrapeMotionValuesFromProps(e,n){return cs(e,n)}build(e,n,i,s){Je(e,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,i,s){ls(e,n,i,s)}mount(e){this.isSVGTag=tn(e.tagName),super.mount(e)}}const Uc=(t,e)=>Xe(t)?new $c(e,{enableHardwareAcceleration:!1}):new Oc(e,{enableHardwareAcceleration:!0}),zc={layout:{ProjectionNode:cr,MeasureLayout:nr}},Nc={...ml,...Bo,...vc,...zc},Rt=Wr((t,e)=>To(t,e,Nc,Uc));function pr(){const t=g.useRef(!1);return Ke(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Wc(){const t=pr(),[e,n]=g.useState(0),i=g.useCallback(()=>{t.current&&n(e+1)},[e]);return[g.useCallback(()=>D.postRender(i),[i]),e]}class Gc extends g.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Hc({children:t,isPresent:e}){const n=g.useId(),i=g.useRef(null),s=g.useRef({width:0,height:0,top:0,left:0});return g.useInsertionEffect(()=>{const{width:o,height:r,top:a,left:l}=s.current;if(e||!i.current||!o||!r)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),g.createElement(Gc,{isPresent:e,childRef:i,sizeRef:s},g.cloneElement(t,{ref:i}))}const Le=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:o,mode:r})=>{const a=us(Kc),l=g.useId(),c=g.useMemo(()=>({id:l,initial:e,isPresent:n,custom:s,onExitComplete:u=>{a.set(u,!0);for(const h of a.values())if(!h)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),o?void 0:[n]);return g.useMemo(()=>{a.forEach((u,h)=>a.set(h,!1))},[n]),g.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),r==="popLayout"&&(t=g.createElement(Hc,{isPresent:n},t)),g.createElement(he.Provider,{value:c},t)};function Kc(){return new Map}function _c(t){return g.useEffect(()=>()=>t(),[])}const St=t=>t.key||"";function qc(t,e){t.forEach(n=>{const i=St(n);e.set(i,n)})}function Yc(t){const e=[];return g.Children.forEach(t,n=>{g.isValidElement(n)&&e.push(n)}),e}const Lt=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:o=!0,mode:r="sync"})=>{const a=g.useContext(Ye).forceRender||Wc()[0],l=pr(),c=Yc(t);let u=c;const h=g.useRef(new Map).current,f=g.useRef(u),p=g.useRef(new Map).current,m=g.useRef(!0);if(Ke(()=>{m.current=!1,qc(c,p),f.current=u}),_c(()=>{m.current=!0,p.clear(),h.clear()}),m.current)return g.createElement(g.Fragment,null,u.map(y=>g.createElement(Le,{key:St(y),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:r},y)));u=[...u];const v=f.current.map(St),b=c.map(St),C=v.length;for(let y=0;y<C;y++){const x=v[y];b.indexOf(x)===-1&&!h.has(x)&&h.set(x,void 0)}return r==="wait"&&h.size&&(u=[]),h.forEach((y,x)=>{if(b.indexOf(x)!==-1)return;const P=p.get(x);if(!P)return;const S=v.indexOf(x);let E=y;if(!E){const j=()=>{p.delete(x),h.delete(x);const V=f.current.findIndex(A=>A.key===x);if(f.current.splice(V,1),!h.size){if(f.current=c,l.current===!1)return;a(),i&&i()}};E=g.createElement(Le,{key:St(P),isPresent:!1,onExitComplete:j,custom:e,presenceAffectsLayout:o,mode:r},P),h.set(x,E)}u.splice(S,0,E)}),u=u.map(y=>{const x=y.key;return h.has(x)?y:g.createElement(Le,{key:St(y),isPresent:!0,presenceAffectsLayout:o,mode:r},y)}),g.createElement(g.Fragment,null,h.size?u:u.map(y=>g.cloneElement(y)))},Xc=w.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (max-width: 767px) {
    max-height: 1000px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }
`,Di=w.table`
  border-spacing: 8px;
  border-collapse: separate;
  @media screen and (max-width: 767px) {
    position: relative;
    height: 342px;
    width: 100%;
    &:last-child {
      height: 314px;
    }
  }
`,ji=w.thead`
  text-align: left;
`,Ai=w.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,W=w.th`
@media screen and (max-width: 767px) {
  position: absolute; 
  &:nth-of-type(2) {
    top: 88px;
  }
  &:nth-of-type(3) {
    top: 168px;
  }
  &:nth-of-type(4) {
    top: 248px;
    left: 8px;
  }
  &:nth-of-type(5) {
    top: 248px;
    left: 105px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80px;
  }
  &:nth-of-type(6) {
    top: 248px;
    left: 201px;
  }
}

@media screen and (min-width: 768px) {
  &:first-of-type {
    width: 90px;
  }
  &:nth-of-type(2) {
    width: 132px;
  }
  &:nth-of-type(3) {
    width: 128px;
  }
  &:nth-of-type(4) {
    width: 84px;
  }
  &:nth-of-type(5) {
    width: 78px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  &:nth-of-type(6) {
    width: 72px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 115px;
  }
  &:nth-of-type(2) {
    width: 157px;
  }
  &:nth-of-type(3) {
    width: 131px;
  }
  &:nth-of-type(4) {
    width: 106px;
  }
  &:nth-of-type(5) {
    width: 91px;
  }
  &:nth-of-type(6) {
    width: 82px;
  }
}  
`,Mi=w.tbody``,Ri=w.tr``,G=w.td`
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(239, 237, 232, 0.3);
  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18/14};
    &:first-of-type {
      top: 34px;
      width: 297px;
    }
    &:nth-of-type(2) {
      top: 114px;
      width: 297px;
    }
    &:nth-of-type(3) {
      top: 194px;
      width: 297px;
    }
    &:nth-of-type(4) {
      top: 274px;
      left: 8px;
      width: 81px;
    }
    &:nth-of-type(5) {
      top: 274px;
      left: 105px;
      width: 80px;
    }
    &:nth-of-type(6) {
      top: 274px;
      left: 201px;
      width: 76px;
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    font-size: 16px;
    line-height: ${24/16};
    padding: 7px 14px;
    &:first-of-type {
      max-width: 90px;
    }
    &:nth-of-type(2) {
     max-width: 132px;
    }
    &:nth-of-type(3) {
      max-width: 128px;
    }
    &:nth-of-type(4) {
      max-width: 84px;
    }
    &:nth-of-type(5) {
     max-width: 78px;
    }
    &:nth-of-type(6) {
      max-width: 72px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:first-of-type {
      max-width: 115px;
    }
    &:nth-of-type(2) {
      max-width: 157px;
    }
    &:nth-of-type(3) {
      max-width: 131px;
    }
    &:nth-of-type(4) {
     max-width: 106px;
    }
    &:nth-of-type(5) {
      max-width: 91px;
    }
    &:nth-of-type(6) {
      max-width: 82px;
    }
  }
} 
`,Li=w.td``,Ei=w.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 283px;
    left: 285px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 12px;
  }
  `,ki=w.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
  stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
  fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`;function Zc({diaryExercises:t,setDiaryExercises:e}){const[n]=yr(),[i,s]=g.useState(window.innerWidth>=768),o=()=>{s(window.innerWidth>=768)};g.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]);const r=async a=>{try{await n(a);const l=t.filter(c=>c._id!==a);e(l)}catch(l){console.log(l)}};return d.jsx(d.Fragment,{children:d.jsx(Xc,{children:i?d.jsxs(Di,{children:[d.jsx(ji,{children:d.jsxs(Ai,{children:[d.jsx(W,{children:"Body Part"}),d.jsx(W,{children:"Equipment"}),d.jsx(W,{children:"Name"}),d.jsx(W,{children:"Target"}),d.jsx(W,{children:"Burned Calories"}),d.jsx(W,{children:"Time"})]})}),d.jsx(Lt,{children:t.map(a=>d.jsx(Mi,{as:Rt.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:d.jsxs(Ri,{children:[d.jsx(G,{children:a.bodyPart}),d.jsx(G,{children:a.equipment}),d.jsx(G,{children:a.name}),d.jsx(G,{children:a.target}),d.jsx(G,{children:a.calories}),d.jsx(G,{children:a.time}),d.jsx(Li,{children:d.jsx(Ei,{onClick:()=>{r(a._id)},children:d.jsx(ki,{children:d.jsx("use",{href:`${U}#delete`})})})})]})},a._id))})]}):d.jsx(d.Fragment,{children:d.jsx(Lt,{children:t.map(a=>d.jsxs(Di,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:Rt.table,children:[d.jsx(ji,{children:d.jsxs(Ai,{children:[d.jsx(W,{children:"Body Part"}),d.jsx(W,{children:"Equipment"}),d.jsx(W,{children:"Name"}),d.jsx(W,{children:"Target"}),d.jsx(W,{children:"Burned Calories"}),d.jsx(W,{children:"Time"})]})}),d.jsx(Mi,{children:d.jsxs(Ri,{children:[d.jsx(G,{children:a.bodyPart}),d.jsx(G,{children:a.equipment}),d.jsx(G,{children:a.name}),d.jsx(G,{children:a.target}),d.jsx(G,{children:a.calories}),d.jsx(G,{children:a.time}),d.jsx(Li,{children:d.jsx(Ei,{onClick:()=>{r(a._id)},children:d.jsx(ki,{children:d.jsx("use",{href:`${U}#delete`})})})})]})})]},a._id))})})})})}const Qc=w.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 1164px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 8px;
    height: 234px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
  }
`,Jc=w.h2`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18/14};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,tu=w.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,eu=w.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,nu=w.div`
display: flex;
justify-content: space-between;
align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`,iu=w(Ki)`
  display: flex;
  align-items: center;
  gap: 8px;
`,su=w.p`
color: #e6533c;
font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18/14};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,ru=w.svg`
  width: 16px;
  height: 16px;
`;function ou({diaryExercises:t,setDiaryExercises:e,isLoading:n}){return d.jsxs(Qc,{children:[d.jsxs(nu,{children:[d.jsx(eu,{children:"Exercises"}),d.jsxs(iu,{to:"/exercises",children:[d.jsx(su,{children:"Add exercise"}),d.jsx(ru,{children:d.jsx("use",{href:`${U}#big_arrow`})})]})]}),t&&t.length!==0?d.jsx(Zc,{diaryExercises:t,setDiaryExercises:e}):d.jsx(d.Fragment,{children:d.jsx(Lt,{children:n?d.jsx(tu,{children:d.jsx(_i,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):d.jsx(Jc,{as:Rt.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}const au=w.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 762px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }
`,Bi=w.table`
  border-spacing: 8px;
  border-collapse: separate;
  @media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width: 100%;
    &:last-child {
      height: 234px;
    }
  }
`,Fi=w.thead`
  text-align: left;
`,Ii=w.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,H=w.th`
  @media screen and (max-width: 767px) {
    position: absolute;
    &:nth-of-type(2) {
      top: 88px;
    }
    &:nth-of-type(3) {
      top: 168px;
    }
    &:nth-of-type(4) {
      top: 168px;
      left: 105px;
    }
    &:nth-of-type(5) {
      top: 168px;
      left: 201px;
    }
  }

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 204px;
    }
    &:nth-of-type(2) {
      width: 128px;
    }
    &:nth-of-type(3) {
      width: 90px;
    }
    &:nth-of-type(4) {
      width: 90px;
    }
    &:nth-of-type(5) {
      width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }
    &:nth-of-type(2) {
      width: 166px;
    }
    &:nth-of-type(3) {
      width: 105px;
    }
    &:nth-of-type(4) {
      width: 105px;
    }
    &:nth-of-type(5) {
      width: 110px;
    }
  }
  `,Oi=w.tbody``,$i=w.tr``,K=w.td`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 
@media screen and (max-width: 767px) {
  position: absolute; 
  padding: 10px 14px;
  font-size: 14px;
  line-height: ${18/14};
  &:first-of-type {
    top: 34px;
    width: 297px;
  }
  &:nth-of-type(2) {
    top: 114px;
    width: 297px;
  }
  &:nth-of-type(3) {
    top: 194px;
    width: 81px;
  }
  &:nth-of-type(4) {
    top: 194px;
    left: 105px;
    width: 80px;
  }
  &:nth-of-type(5) {
    top: 194px;
    left: 201px;
    width: 76px;
  }
}

@media screen and (min-width: 768px) {
  position: relative;
  font-size: 16px;
  line-height: ${24/16};
  padding: 7px 14px;
  &:first-of-type {
    max-width: 204px;
  }
  &:nth-of-type(2) {
    max-width: 128px;
  }
  &:nth-of-type(3) {
    max-width: 90px;
  }
  &:nth-of-type(4) {
    max-width: 90px;
  }
  &:nth-of-type(5) {
    max-width: 80px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    max-width: 212px;
  }
  &:nth-of-type(2) {
    max-width: 166px;
  }
  &:nth-of-type(3) {
    max-width: 105px;
  }
  &:nth-of-type(4) {
    max-width: 105px;
  }
  &:nth-of-type(5) {
    max-width: 110px;
  }
}
}
`,Ui=w.td``,zi=w.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 203px;
    left: 285px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
`,Ni=w.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`,Wi=w.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${t=>t.Recom?"background-color: #419B09":"background-color: #E9101D"}
`;function lu({diaryProducts:t,setDiaryProducts:e,blood:n}){const[i]=vr(),[s,o]=g.useState(window.innerWidth>=768),r=()=>{o(window.innerWidth>=768)};g.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]);const a=async l=>{try{await i(l);const c=t.filter(u=>u._id!==l);e(c)}catch{alert("Ops...Something went wrong. Please try again.")}};return d.jsx(d.Fragment,{children:d.jsx(au,{children:s?d.jsxs(Bi,{children:[d.jsx(Fi,{children:d.jsxs(Ii,{children:[d.jsx(H,{children:"Title"}),d.jsx(H,{children:"Category"}),d.jsx(H,{children:"Calories"}),d.jsx(H,{children:"Weight"}),d.jsx(H,{children:"Recommend"})]})}),d.jsx(Lt,{children:t&&t.length!==0&&t.map(l=>{const c=!l.groupBloodNotAllowed[n];return d.jsx(Oi,{as:Rt.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:d.jsxs($i,{children:[d.jsx(K,{children:l.title}),d.jsx(K,{children:l.category}),d.jsx(K,{children:l.calories}),d.jsx(K,{children:l.amount}),d.jsxs(K,{children:[d.jsx(Wi,{Recom:c}),c?"Yes":"No"]}),d.jsx(Ui,{children:d.jsx(zi,{onClick:()=>{a(l._id)},children:d.jsx(Ni,{children:d.jsx("use",{href:`${U}#delete`})})})})]})},l._id)})})]}):d.jsx(d.Fragment,{children:d.jsx(Lt,{children:t&&t.length!==0&&t.map(l=>{const c=l.groupBloodNotAllowed[n]===!1;return d.jsxs(Bi,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:Rt.table,children:[d.jsx(Fi,{children:d.jsxs(Ii,{children:[d.jsx(H,{children:"Title"}),d.jsx(H,{children:"Category"}),d.jsx(H,{children:"Calories"}),d.jsx(H,{children:"Weight"}),d.jsx(H,{children:"Recommend"})]})}),d.jsx(Oi,{children:d.jsxs($i,{children:[d.jsx(K,{children:l.title}),d.jsx(K,{children:l.category}),d.jsx(K,{children:l.calories}),d.jsx(K,{children:l.amount}),d.jsxs(K,{children:[d.jsx(Wi,{Recom:c}),c?"Yes":"No"]}),d.jsx(Ui,{children:d.jsx(zi,{onClick:()=>{a(l._id)},children:d.jsx(Ni,{children:d.jsx("use",{href:`${U}#delete`})})})})]})})]},l._id)})})})})})}const cu=w.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 824px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    height: 234px;
    padding: 16px 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
    
  }
`,uu=w.h2`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18/14};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,hu=w.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,du=w.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,fu=w.div`
display: flex;
justify-content: space-between;
align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`,pu=w(Ki)`
  display: flex;
  align-items: center;
  gap: 8px;
`,mu=w.p`
color: #e6533c;
font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18/14};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,gu=w.svg`
  width: 16px;
  height: 16px;
`;function xu({diaryProducts:t,setDiaryProducts:e,blood:n,isLoading:i}){return d.jsxs(cu,{children:[d.jsxs(fu,{children:[d.jsx(du,{children:"Products"}),d.jsxs(pu,{to:"/Products",children:[d.jsx(mu,{children:"Add product"}),d.jsx(gu,{children:d.jsx("use",{href:`${U}#big_arrow`})})]})]}),t&&t.length!==0?d.jsx(lu,{setDiaryProducts:e,blood:n,diaryProducts:t}):d.jsx(d.Fragment,{children:d.jsx(Lt,{children:i?d.jsx(hu,{children:d.jsx(_i,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):d.jsx(uu,{as:Rt.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}const yu=w.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,vu=w.div`
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`,wu=w.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bu=w.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Tu=w.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:t})=>t.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`,Gi=w.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({theme:t})=>t.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: ${({theme:t})=>t.color.orangeSecond};
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: ${({theme:t})=>t.color.grayDisabled};
  }
`;function mr({selectedDate:t,setSelectedDate:e}){const n=new Date(wr(br)),[i,{data:s,error:o}]=Tr();g.useEffect(()=>{if(o)return;(async()=>{await i()})()},[o,i]);const r=({date:m,view:v})=>m.getTime()>n.getTime()||m.toDateString()===n.toDateString()||v!=="month"?!1:!s.includes(m.toDateString()),a=()=>{const m=new Date(t);m.setDate(t.getDate()-1),e(m)},l=()=>{const m=new Date(t);m.setDate(t.getDate()+1),e(m)},c=t.toDateString()===n.toDateString(),u=t.toDateString()===new Date().toDateString(),h=c||t.getTime()<n.getTime(),f=u||t.getTime()<n.getTime()&&t.toDateString()!==n.toDateString(),p=o?{minDate:n}:{tileDisabled:r};return d.jsxs(yu,{children:[d.jsx(vu,{children:d.jsx(Vr,{...p,onChange:e,value:t,maxDate:new Date,children:d.jsxs(wu,{children:[d.jsxs(bu,{children:[" ",Dr(t,"dd/MM/yyyy")]}),d.jsx(Tu,{children:d.jsx(ve,{name:"calendar"})})]})})}),d.jsxs("div",{children:[d.jsx(Gi,{disabled:h,onClick:a,children:d.jsx(ve,{name:"nav-arrow-left"})}),d.jsx(Gi,{disabled:f,onClick:l,children:d.jsx(ve,{name:"nav-arrow-right"})})]})]})}mr.propTypes={selectedDate:Tn.instanceOf(Date).isRequired,setSelectedDate:Tn.func.isRequired};const Pu=w.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,Su=w.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    & > :first-of-type {
      align-self: flex-end;
    }
    & > :last-of-type {
      align-self: flex-start;
    }
  }
`,Cu=w.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Vu=w.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 826px;
  }
`;function Lu(){const[t,e]=g.useState(new Date),[n,{isLoading:i}]=Pr(),[s]=Sr(),[o,r]=g.useState(null),[a,l]=g.useState([]),[c,u]=g.useState([]),h=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return g.useEffect(()=>{(async()=>{const p=await s();r(p)})()},[s]),g.useEffect(()=>{(async()=>{const p=await n(h);u(p.data.exerciseResult),l(p.data.productResult)})()},[n,h]),d.jsxs(Pu,{children:[d.jsxs(Su,{children:[d.jsx(Cr,{text:"Diary"}),d.jsx(mr,{selectedDate:t,setSelectedDate:e})]}),d.jsxs(Cu,{children:[d.jsx(kr,{bmrData:o&&o.data.bmr,diaryProducts:a,diaryExercises:c}),d.jsxs(Vu,{children:[d.jsx(xu,{isLoading:i,setDiaryProducts:l,diaryProducts:a,blood:o&&o.data.user.userParams.blood}),d.jsx(ou,{isLoading:i,diaryExercises:c,setDiaryExercises:u})]})]})]})}export{Lu as Diary};
