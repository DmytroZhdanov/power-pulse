import{r as p,x as L,n as r,P as h,j as t,I as V,a3 as xe,U as P,V as me,L as re,R as ge,p as A,a1 as fe,a0 as be,b as we,a4 as ye,a2 as ve,E as H}from"./index-1ea6f445.js";import{f as ne,C as je}from"./Calendar-69676c52.js";import"./tiny-warning.esm-c932d744.js";var G=new Map,q=new WeakMap,Y=0,ke=void 0;function $e(e){return e?(q.has(e)||(Y+=1,q.set(e,Y.toString())),q.get(e)):"0"}function Se(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?$e(e.root):e[i]}`).toString()}function Ee(e){let i=Se(e),l=G.get(i);if(!l){const n=new Map;let s;const a=new IntersectionObserver(o=>{o.forEach(c=>{var u;const x=c.isIntersecting&&s.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=x),(u=n.get(c.target))==null||u.forEach(f=>{f(x,c)})})},e);s=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:a,elements:n},G.set(i,l)}return l}function Re(e,i,l={},n=ke){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=e.getBoundingClientRect();return i(n,{isIntersecting:n,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:s,observer:a,elements:o}=Ee(l);let c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(i),a.observe(e),function(){c.splice(c.indexOf(i),1),c.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),G.delete(s))}}function Te({threshold:e,delay:i,trackVisibility:l,rootMargin:n,root:s,triggerOnce:a,skip:o,initialInView:c,fallbackInView:u,onChange:x}={}){var f;const[d,m]=p.useState(null),b=p.useRef(),[y,v]=p.useState({inView:!!c,entry:void 0});b.current=x,p.useEffect(()=>{if(o||!d)return;let w;return w=Re(d,($,S)=>{v({inView:$,entry:S}),b.current&&b.current($,S),S.isIntersecting&&a&&w&&(w(),w=void 0)},{root:s,rootMargin:n,threshold:e,trackVisibility:l,delay:i},u),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,d,s,n,a,o,l,u,i]);const j=(f=y.entry)==null?void 0:f.target,k=p.useRef();!d&&j&&!a&&!o&&k.current!==j&&(k.current=j,v({inView:!!c,entry:void 0}));const g=[m,y.inView,y.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var Q=typeof window>"u"?p.useEffect:p.useLayoutEffect,Ce=({isPlaying:e,duration:i,startAt:l=0,updateInterval:n=0,onComplete:s,onUpdate:a})=>{let[o,c]=p.useState(l),u=p.useRef(0),x=p.useRef(l),f=p.useRef(l*-1e3),d=p.useRef(null),m=p.useRef(null),b=p.useRef(null),y=k=>{let g=k/1e3;if(m.current===null){m.current=g,d.current=requestAnimationFrame(y);return}let w=g-m.current,$=u.current+w;m.current=g,u.current=$;let S=x.current+(n===0?$:($/n|0)*n),T=x.current+$,E=typeof i=="number"&&T>=i;c(E?i:S),E||(d.current=requestAnimationFrame(y))},v=()=>{d.current&&cancelAnimationFrame(d.current),b.current&&clearTimeout(b.current),m.current=null},j=p.useCallback(k=>{v(),u.current=0;let g=typeof k=="number"?k:l;x.current=g,c(g),e&&(d.current=requestAnimationFrame(y))},[e,l]);return Q(()=>{if(a==null||a(o),i&&o>=i){f.current+=i*1e3;let{shouldRepeat:k=!1,delay:g=0,newStartAt:w}=(s==null?void 0:s(f.current/1e3))||{};k&&(b.current=setTimeout(()=>j(w),g*1e3))}},[o,i]),Q(()=>(e&&(d.current=requestAnimationFrame(y)),v),[e,i,n]),{elapsedTime:o,reset:j}},De=(e,i,l)=>{let n=e/2,s=i/2,a=n-s,o=2*a,c=l==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${n},${s} a ${a},${a} 0 ${c} 0,${o} a ${a},${a} 0 ${c} 0,-${o}`,pathLength:u}},K=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,Le=e=>({position:"relative",width:e,height:e}),Ie={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},oe=(e,i,l,n,s)=>{if(n===0)return i;let a=(s?n-e:e)/n;return i+l*a},X=e=>{var i,l;return(l=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,s,a,o)=>`#${s}${s}${a}${a}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:i.map(n=>parseInt(n,16)))!=null?l:[]},Me=(e,i)=>{var l;let{colors:n,colorsTime:s,isSmoothColorTransition:a=!0}=e;if(typeof n=="string")return n;let o=(l=s==null?void 0:s.findIndex((m,b)=>m>=i&&i>=s[b+1]))!=null?l:-1;if(!s||o===-1)return n[0];if(!a)return n[o];let c=s[o]-i,u=s[o]-s[o+1],x=X(n[o]),f=X(n[o+1]),d=!!e.isGrowing;return`rgb(${x.map((m,b)=>oe(c,m,f[b]-m,u,d)|0).join(",")})`},Fe=e=>{let{duration:i,initialRemainingTime:l,updateInterval:n,size:s=180,strokeWidth:a=12,trailStrokeWidth:o,isPlaying:c=!1,isGrowing:u=!1,rotation:x="clockwise",onComplete:f,onUpdate:d}=e,m=p.useRef(),b=Math.max(a,o??0),{path:y,pathLength:v}=De(s,b,x),{elapsedTime:j}=Ce({isPlaying:c,duration:i,startAt:K(i,l),updateInterval:n,onUpdate:typeof d=="function"?g=>{let w=Math.ceil(i-g);w!==m.current&&(m.current=w,d(w))}:void 0,onComplete:typeof f=="function"?g=>{var w;let{shouldRepeat:$,delay:S,newInitialRemainingTime:T}=(w=f(g))!=null?w:{};if($)return{shouldRepeat:$,delay:S,newStartAt:K(i,T)}}:void 0}),k=i-j;return{elapsedTime:j,path:y,pathLength:v,remainingTime:Math.ceil(k),rotation:x,size:s,stroke:Me(e,k),strokeDashoffset:oe(j,0,v,i,u),strokeWidth:a}},se=e=>{let{children:i,strokeLinecap:l,trailColor:n,trailStrokeWidth:s}=e,{path:a,pathLength:o,stroke:c,strokeDashoffset:u,remainingTime:x,elapsedTime:f,size:d,strokeWidth:m}=Fe(e);return L.createElement("div",{style:Le(d)},L.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:n??"#d9d9d9",strokeWidth:s??m}),L.createElement("path",{d:a,fill:"none",stroke:c,strokeLinecap:l??"round",strokeWidth:m,strokeDasharray:o,strokeDashoffset:u})),typeof i=="function"&&L.createElement("div",{style:Ie},i({remainingTime:x,elapsedTime:f,color:c})))};se.displayName="CountdownCircleTimer";const ze=r.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 125px;
  height: 125px;
  top: 0;
  border-radius: 50%;
  position: absolute;

  animation: spin ${({animationDuration:e})=>e}s linear
    infinite;
`,qe=r.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ae=({isRunning:e,animationDuration:i})=>t.jsx(ze,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(qe,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ae.propTypes={isRunning:h.bool.isRequired,animationDuration:h.number.isRequired};const Pe=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,Ae=r.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,Be=r.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,J=r.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,We=r.button`
  background-color: #e6533c;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  margin-bottom: 8px;
  transition: transform 300ms ease-in-out;

  svg{
    width: 15px;
    height: 15px;
  }

  :hover {
    transform: scale(1.1);
  }
`,ce=({timerLabel:e,duration:i,setTimer:l,roundsCount:n,setRoundsCount:s,stopTimer:a,setStopTimer:o})=>{const[c,u]=p.useState(!1);p.useEffect(()=>{a&&(u(!a),o(!1))},[o,a]);const x=()=>{u(!c)},f=({remainingTime:d})=>{const m=i-d,b=Math.floor(m/60),y=m%60;return t.jsxs(Pe,{children:[t.jsx(J,{children:`
        ${b.toString().padStart(2,"0")} :
        ${y.toString().padStart(2,"0")}
        `}),t.jsxs(J,{children:["Round: ",n]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(Be,{children:e}),t.jsxs(Ae,{children:[t.jsx(se,{size:125,isPlaying:c,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(s(d=>d+1),{shouldRepeat:!0}),onUpdate:d=>{l(i-d)},children:f}),t.jsx(ae,{isRunning:c,animationDuration:i})]}),t.jsx(We,{onClick:x,children:c?t.jsx(V,{name:"pause"}):t.jsx(V,{name:"play"})})]})};ce.propTypes={timerLabel:h.string.isRequired,duration:h.number.isRequired,setTimer:h.func.isRequired,roundsCount:h.number.isRequired,setRoundsCount:h.func.isRequired,stopTimer:h.bool.isRequired,setStopTimer:h.func.isRequired};const Ne=r.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 25px;
  flex-direction: column;
`,Z=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`,ee=r.span`
  color: ${({theme:e})=>e.color.label};
  font-size: 16px;
  line-height: 1.29;
`,Ue=r.input`
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: rgba(0, 0, 0, 0.5);
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 167px;
    padding: 12px;
  }
`,Oe=r.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.color.border};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 167px;
    padding: 12px;
  }
`,Ve=r.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,Ge=r.div`
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
`,_e=r.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  line-height: 1.29;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;function le({onSubmit:e}){const[i,l]=p.useState(new Date),[n,s]=p.useState(""),a=x=>{s(x.target.value)},o=x=>{l(x)},c=()=>{e({time:Number(n),date:i})},u=ne(i,"dd.MM.yyyy");return t.jsxs(Ne,{children:[t.jsx("label",{children:t.jsxs(Z,{children:[t.jsx(ee,{children:"Add time"}),t.jsx(Ue,{placeholder:"min 60 sec.",type:"number",value:n,onChange:a})]})}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Choice day"}),t.jsx(je,{maxDate:new Date,onChange:o,value:i,children:t.jsxs(Oe,{children:[t.jsx(Ve,{children:u}),t.jsx(Ge,{children:t.jsx(V,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(_e,{onClick:c,children:"Add to diary"})})]})}le.propTypes={onSubmit:h.func.isRequired};const He=r.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 0;
  }
`,Ye=r.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Qe=r.p`
  color: ${({theme:e})=>e.color.white}66;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Ke=r.p`
  margin: auto 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  ::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,de=({exercise:e})=>{const{bodyPart:i,equipment:l,name:n,target:s,time:a}=e;return t.jsx(He,{children:[{label:"Name",value:n},{label:"Target",value:s},{label:"Body Part",value:i},{label:"Equipment",value:l},{label:"Time",value:`${a} minutes`}].map(({label:o,value:c})=>t.jsxs(Ye,{children:[t.jsx(Qe,{children:o}),t.jsx(Ke,{children:c})]},o+c))})};de.propTypes={exercise:h.shape({bodyPart:h.string.isRequired,equipment:h.string.isRequired,name:h.string.isRequired,target:h.string.isRequired,time:h.number.isRequired}).isRequired};const Xe=r.div`
  display: grid;
  padding: 48px 16px;
  width: 335px;
  height: 570px;
  gap: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    height: auto;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`,Je=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ze=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,et=r.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 270px;
  height: 270px;

  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
`,tt=r.div`
  display: flex;
  gap: 8px;
`,it=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,rt=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,nt=r.div`
  display: flex;
  gap: 20px;
`,ot=r.button`
  border: none;
  max-width: 150px;
  background-color: transparent;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: 1.5;
  }

  transition: color 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.white};
  }
`,st=r.button`
  border: none;
  display: inline-flex;
  padding: 12px 32px;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.hoverBorder};
  color: ${({theme:e})=>e.color.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: 1.5;
  }

  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }
`;function pe({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:l,setModalExerciseSuccessData:n}){const{_id:s,gifUrl:a,burnedCalories:o,time:c}=e,[u,x]=p.useState(!1),[f,d]=p.useState(!1),[m,b]=p.useState(""),[y,v]=p.useState(""),[j,k]=p.useState(0),[g,w]=p.useState(0),[$,S]=p.useState(!1),[T]=xe(),E=o/c,R=Math.floor(j/60*E+g*o),D=j+g*c*60,I=async({time:M=D,date:W=new Date})=>{S(!0);const F=Math.floor(M/60*E+g*o),z={exercise_ID:s,date:ne(W,"yyyy-MM-dd"),time:M,calories:F};if(z.time<60){b(`To achieve results, the training time should be more than one minute. Your time ${z.time} sec.`),v("Notice: "),d(!0);return}const{error:_}=await T(z);_?(v("Error: "),b(_.data.message),d(!0)):(i(),l(),n(z))},B=()=>{S(!0),x(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Xe,{children:[t.jsxs(Je,{children:[t.jsx(et,{src:a,alt:"Exercise technique"}),t.jsx(ce,{timerLabel:C.timerLabel,stopTimer:$,setStopTimer:S,roundsCount:g,setRoundsCount:w,setTimer:k,duration:c*60}),t.jsxs(tt,{children:[t.jsx(it,{children:C.caloriesLabel}),t.jsx(rt,{children:R})]})]}),t.jsxs(Ze,{children:[t.jsx(de,{exercise:e}),t.jsxs(nt,{children:[t.jsx(ot,{onClick:B,children:C.openPastDaysFormBtnName}),t.jsx(st,{onClick:I,children:C.addExerciseBtnName})]})]}),t.jsx(P,{onShow:u,onClose:()=>{x(!1)},children:t.jsx(le,{onSubmit:I})}),t.jsx(P,{onShow:f,onClose:()=>{d(!1)},children:t.jsx(me,{notificationType:y,message:m})})]})}pe.propTypes={openModalExerciseSuccess:h.func.isRequired,closeModalExerciseForm:h.func.isRequired,setModalExerciseSuccessData:h.func.isRequired,exercise:h.shape({gifUrl:h.string.isRequired,burnedCalories:h.number.isRequired,time:h.number.isRequired}).isRequired};const at=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  width: 335px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 64px;
    padding-bottom: 64px;
    width: 430px;
  }
`,ct=r.img`
  margin-bottom: 27px;
  width: 118px;
  height: 73px;

  @keyframes scale {
    0% {
      transform: scale(0.8);
    }
    33% {
      transform: scale(1.3);
    }
    66% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: scale 1500ms linear;
`,lt=r.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,dt=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,N=r.p`
  font-size: 14px;
  line-height: 1.29;
`,te=r.span`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
`,ie=r.span`
  color: ${({theme:e})=>e.color.orangeFirst};
`,pt=r.button`
  margin-bottom: 16px;
  padding: 12px 32px;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  color: ${({theme:e})=>e.color.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 1.5;
  }
`,ut=r(re)`
  color: ${({theme:e})=>e.color.grayFirst};
  display: flex;
  align-items: center;
  gap: 8px;
`,ht=r.svg`
  width: 16px;
  height: 16px;
`,xt="/power-pulse/assets/thumb-up-bc557cec.webp";function ue({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:l=0,calories:n=0}=i,s={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(at,{children:[t.jsx(ct,{src:xt,alt:"thumb up"}),t.jsx(lt,{children:s.wellDone}),t.jsxs(dt,{children:[t.jsxs(N,{children:[t.jsx(te,{children:s.timeText}),t.jsxs(ie,{children:[" ",l]})]}),t.jsxs(N,{children:[t.jsx(te,{children:s.caloriesText}),t.jsx(ie,{children:n})]})]}),t.jsx(pt,{onClick:e,type:"button",children:s.nextExerciseText}),t.jsxs(ut,{to:`/${ge.DIARY}`,children:[t.jsxs(N,{children:[" ",s.diaryLinkText]}),t.jsx(ht,{children:t.jsx("use",{href:`${A}#arrow-add-prod`})})]})]})}ue.propTypes={closeModalExerciseSuccess:h.func.isRequired,modalExerciseSuccessData:h.shape({time:h.number,calories:h.number})};const mt=r.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  max-height: 163px;

  &:hover,
  &:focus,
  &:active {
    background-image: url(${e=>e.gifUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    background-color: ${({theme:e})=>e.color.fullWhite};
  }

  &:hover p,
  &:hover span,
  &:hover h2 {
    color: ${({theme:e})=>e.color.black};
  }

  &:hover .start {
    color: ${({theme:e})=>e.color.orangeFirst};
    font-weight: 500;
  }

  &:hover h2 {
    max-width: 225px;
  }

  &:hover button {
  }

  &:hover span {
    font-weight: 500;
  }

  &:hover .target,
  &:hover .bodyPart {
    opacity: 0;
  }

  @media screen and (max-width: 374px) {
    max-width: 335px;
    &:hover h2 {
      max-width: 80px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 335px;

    &:hover h2 {
      max-width: 140px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 405px;

    &:hover .bodyPart {
      opacity: 1;
    }

    &:hover h2 {
      max-width: 225px;
    }
  }
`,gt=r.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 25px;
  }
`,ft=r.svg`
  max-width: 24px;
  max-height: 24px;
`,bt=r.svg`
  width: 16px;
  height: 16px;
`,wt=r.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,yt=r.div`
  display: flex;
  align-items: center;
`,vt=r.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,jt=r.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: 374px) {
    max-width: 205px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,kt=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 12px;
  }
`,$t=r.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 1px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-right: 152px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-right: 152px;
  }
`,St=r.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,U=r.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (max-width: 767px) {
    display: flex;
    gap: 4px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 4px;
  }
`,O=r.span`
  padding-left: 0;
  display: inline-block;
  color: ${({theme:e})=>e.color.white};

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) and (max-width: 1439px) {
    margin-left: 4px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0;
  }
`;function he(e){const{bodyPart:i,gifUrl:l,name:n,target:s,burnedCalories:a}=e,[o,c]=p.useState(!1),[u,x]=p.useState(!1),[f,d]=p.useState({}),m=()=>{c(!0)},b=()=>{x(!0)},y=()=>{c(!1)},v=()=>{x(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(mt,{gifUrl:l,children:[t.jsxs(gt,{children:[t.jsx(wt,{children:"WORKOUT"}),t.jsx(yt,{className:"start",children:t.jsxs($t,{onClick:m,children:[t.jsx(St,{className:"start",children:"Start"}),t.jsx(bt,{children:t.jsx("use",{href:`${A}#arrow-add-prod-orange`})})]})})]}),t.jsxs(kt,{children:[t.jsx(ft,{children:t.jsx("use",{href:`${A}#run-man`})}),t.jsx(jt,{children:n})]}),t.jsxs(vt,{children:[t.jsxs(U,{children:["Burned calories:",t.jsx(O,{children:a})]}),t.jsxs(U,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(O,{children:i})]}),t.jsxs(U,{className:"target",children:["Target:",t.jsx(O,{children:s})]})]})]}),t.jsx(P,{onShow:o,onClose:y,children:t.jsx(pe,{exercise:e,openModalExerciseSuccess:b,closeModalExerciseForm:y,setModalExerciseSuccessData:d})}),t.jsx(P,{onShow:u,onClose:v,children:t.jsx(ue,{modalExerciseSuccessData:f,closeModalExerciseSuccess:v})})]})}he.propTypes={bodyPart:h.string.isRequired,name:h.string.isRequired,target:h.string.isRequired,burnedCalories:h.number.isRequired};const Et=r.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    overflow-y: scroll;
    row-gap: 32px;
    column-gap: 16px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) and (max-width: 1439px) {
    max-height: 610px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 850px;
    max-height: 495px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`,Rt=r.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(24 / 16);
  }
`,Tt=r(re)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: -25px;
  left: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`,Ct=r.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,Dt=r.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    position: absolute;
    top: -72px;
    right: -95px;
    width: 600px;
    height: 715px;
    background-repeat: no-repeat;
    z-index: -2;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background:
      linear-gradient(to right, ${({theme:e})=>e.gradient.exersises}),
      url(${e=>e.img}),
      lightgray 0px -48px / 94.516% 105.335% no-repeat;
    background-size: cover;
    background-position: right;
  }
`;function Ft(){var T;const e=fe(),[i,l]=p.useState(1),[n,s]=p.useState(!0),[a,o]=p.useState([]),{subcategory:c}=be(),{ref:u}=Te({onChange:E=>E&&s(!0)}),x=we(),f=p.useRef(((T=x.state)==null?void 0:T.from)??"/exercises"),d=p.useRef(),[m,{isLoading:b,isError:y,error:v}]=ye(),{data:j,isFetching:k,isError:g,error:w}=ve(e),$=j&&j.filter(E=>E.name===c)[0],S=$?$.imgURL:null;return p.useEffect(()=>{n&&(async()=>{try{const R=await m({page:i,[e]:c}).unwrap();if(R.data.length===0)return;o(i===1?[...R.data]:D=>[...D,...R.data]),s(!1),l(i+1)}catch(R){console.log(R)}})()},[i,m,n,e,c]),t.jsxs("div",{children:[t.jsxs(Tt,{to:f.current,children:[t.jsx(Ct,{children:t.jsx("use",{href:`${A}#icon-arrow`})}),t.jsx(Rt,{children:"Back"})]}),t.jsx(Et,{ref:d,children:a==null?void 0:a.map(({_id:E,name:R,bodyPart:D,burnedCalories:I,target:B,gifUrl:C,time:M,equipment:W},F)=>t.jsx("li",{ref:F===a.length-1?u:null,children:t.jsx(he,{_id:E,bodyPart:D,equipment:W,gifUrl:C,name:R,target:B,burnedCalories:I,time:M},E)},F))}),t.jsx(Dt,{category:e,img:S}),t.jsx(H,{isLoading:k,isError:g,error:w}),t.jsx(H,{isLoading:b,isError:y,error:v})]})}export{Ft as ExercisesList};
