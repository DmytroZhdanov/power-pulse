import{r as p,x as L,n as r,P as g,j as t,I as V,a3 as he,U as q,V as xe,L as re,R as me,p as A,a1 as ge,a0 as fe,b as be,a4 as we,a2 as ye,E as H}from"./index-c516ffb8.js";import{f as ne,C as ve}from"./Calendar-a23121be.js";import"./tiny-warning.esm-c932d744.js";var G=new Map,P=new WeakMap,Y=0,je=void 0;function ke(e){return e?(P.has(e)||(Y+=1,P.set(e,Y.toString())),P.get(e)):"0"}function $e(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?ke(e.root):e[i]}`).toString()}function Se(e){let i=$e(e),l=G.get(i);if(!l){const n=new Map;let s;const a=new IntersectionObserver(o=>{o.forEach(c=>{var u;const h=c.isIntersecting&&s.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=h),(u=n.get(c.target))==null||u.forEach(f=>{f(h,c)})})},e);s=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:a,elements:n},G.set(i,l)}return l}function Ee(e,i,l={},n=je){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=e.getBoundingClientRect();return i(n,{isIntersecting:n,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:s,observer:a,elements:o}=Se(l);let c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(i),a.observe(e),function(){c.splice(c.indexOf(i),1),c.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),G.delete(s))}}function Re({threshold:e,delay:i,trackVisibility:l,rootMargin:n,root:s,triggerOnce:a,skip:o,initialInView:c,fallbackInView:u,onChange:h}={}){var f;const[d,x]=p.useState(null),b=p.useRef(),[y,v]=p.useState({inView:!!c,entry:void 0});b.current=h,p.useEffect(()=>{if(o||!d)return;let w;return w=Ee(d,($,S)=>{v({inView:$,entry:S}),b.current&&b.current($,S),S.isIntersecting&&a&&w&&(w(),w=void 0)},{root:s,rootMargin:n,threshold:e,trackVisibility:l,delay:i},u),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,d,s,n,a,o,l,u,i]);const j=(f=y.entry)==null?void 0:f.target,k=p.useRef();!d&&j&&!a&&!o&&k.current!==j&&(k.current=j,v({inView:!!c,entry:void 0}));const m=[x,y.inView,y.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}var Q=typeof window>"u"?p.useEffect:p.useLayoutEffect,Te=({isPlaying:e,duration:i,startAt:l=0,updateInterval:n=0,onComplete:s,onUpdate:a})=>{let[o,c]=p.useState(l),u=p.useRef(0),h=p.useRef(l),f=p.useRef(l*-1e3),d=p.useRef(null),x=p.useRef(null),b=p.useRef(null),y=k=>{let m=k/1e3;if(x.current===null){x.current=m,d.current=requestAnimationFrame(y);return}let w=m-x.current,$=u.current+w;x.current=m,u.current=$;let S=h.current+(n===0?$:($/n|0)*n),T=h.current+$,E=typeof i=="number"&&T>=i;c(E?i:S),E||(d.current=requestAnimationFrame(y))},v=()=>{d.current&&cancelAnimationFrame(d.current),b.current&&clearTimeout(b.current),x.current=null},j=p.useCallback(k=>{v(),u.current=0;let m=typeof k=="number"?k:l;h.current=m,c(m),e&&(d.current=requestAnimationFrame(y))},[e,l]);return Q(()=>{if(a==null||a(o),i&&o>=i){f.current+=i*1e3;let{shouldRepeat:k=!1,delay:m=0,newStartAt:w}=(s==null?void 0:s(f.current/1e3))||{};k&&(b.current=setTimeout(()=>j(w),m*1e3))}},[o,i]),Q(()=>(e&&(d.current=requestAnimationFrame(y)),v),[e,i,n]),{elapsedTime:o,reset:j}},Ce=(e,i,l)=>{let n=e/2,s=i/2,a=n-s,o=2*a,c=l==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${n},${s} a ${a},${a} 0 ${c} 0,${o} a ${a},${a} 0 ${c} 0,-${o}`,pathLength:u}},K=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,De=e=>({position:"relative",width:e,height:e}),Le={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},oe=(e,i,l,n,s)=>{if(n===0)return i;let a=(s?n-e:e)/n;return i+l*a},X=e=>{var i,l;return(l=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,s,a,o)=>`#${s}${s}${a}${a}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:i.map(n=>parseInt(n,16)))!=null?l:[]},Ie=(e,i)=>{var l;let{colors:n,colorsTime:s,isSmoothColorTransition:a=!0}=e;if(typeof n=="string")return n;let o=(l=s==null?void 0:s.findIndex((x,b)=>x>=i&&i>=s[b+1]))!=null?l:-1;if(!s||o===-1)return n[0];if(!a)return n[o];let c=s[o]-i,u=s[o]-s[o+1],h=X(n[o]),f=X(n[o+1]),d=!!e.isGrowing;return`rgb(${h.map((x,b)=>oe(c,x,f[b]-x,u,d)|0).join(",")})`},Me=e=>{let{duration:i,initialRemainingTime:l,updateInterval:n,size:s=180,strokeWidth:a=12,trailStrokeWidth:o,isPlaying:c=!1,isGrowing:u=!1,rotation:h="clockwise",onComplete:f,onUpdate:d}=e,x=p.useRef(),b=Math.max(a,o??0),{path:y,pathLength:v}=Ce(s,b,h),{elapsedTime:j}=Te({isPlaying:c,duration:i,startAt:K(i,l),updateInterval:n,onUpdate:typeof d=="function"?m=>{let w=Math.ceil(i-m);w!==x.current&&(x.current=w,d(w))}:void 0,onComplete:typeof f=="function"?m=>{var w;let{shouldRepeat:$,delay:S,newInitialRemainingTime:T}=(w=f(m))!=null?w:{};if($)return{shouldRepeat:$,delay:S,newStartAt:K(i,T)}}:void 0}),k=i-j;return{elapsedTime:j,path:y,pathLength:v,remainingTime:Math.ceil(k),rotation:h,size:s,stroke:Ie(e,k),strokeDashoffset:oe(j,0,v,i,u),strokeWidth:a}},se=e=>{let{children:i,strokeLinecap:l,trailColor:n,trailStrokeWidth:s}=e,{path:a,pathLength:o,stroke:c,strokeDashoffset:u,remainingTime:h,elapsedTime:f,size:d,strokeWidth:x}=Me(e);return L.createElement("div",{style:De(d)},L.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:n??"#d9d9d9",strokeWidth:s??x}),L.createElement("path",{d:a,fill:"none",stroke:c,strokeLinecap:l??"round",strokeWidth:x,strokeDasharray:o,strokeDashoffset:u})),typeof i=="function"&&L.createElement("div",{style:Le},i({remainingTime:h,elapsedTime:f,color:c})))};se.displayName="CountdownCircleTimer";const Fe=r.div`
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
`,ze=r.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ae=({isRunning:e,animationDuration:i})=>t.jsx(Fe,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(ze,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ae.propTypes={isRunning:g.bool.isRequired,animationDuration:g.number.isRequired};const Pe=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,qe=r.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,Ae=r.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,J=r.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,Be=r.button`
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
`,ce=({timerLabel:e,duration:i,setTimer:l,roundsCount:n,setRoundsCount:s,stopTimer:a,setStopTimer:o})=>{const[c,u]=p.useState(!1);p.useEffect(()=>{a&&(u(!a),o(!1))},[o,a]);const h=()=>{u(!c)},f=({remainingTime:d})=>{const x=i-d,b=Math.floor(x/60),y=x%60;return t.jsxs(Pe,{children:[t.jsx(J,{children:`
        ${b.toString().padStart(2,"0")} :
        ${y.toString().padStart(2,"0")}
        `}),t.jsxs(J,{children:["Round: ",n]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(Ae,{children:e}),t.jsxs(qe,{children:[t.jsx(se,{size:125,isPlaying:c,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(s(d=>d+1),{shouldRepeat:!0}),onUpdate:d=>{l(i-d)},children:f}),t.jsx(ae,{isRunning:c,animationDuration:i})]}),t.jsx(Be,{onClick:h,children:c?t.jsx(V,{name:"pause"}):t.jsx(V,{name:"play"})})]})};ce.propTypes={timerLabel:g.string.isRequired,duration:g.number.isRequired,setTimer:g.func.isRequired,roundsCount:g.number.isRequired,setRoundsCount:g.func.isRequired,stopTimer:g.bool.isRequired,setStopTimer:g.func.isRequired};const We=r.div`
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
`,Ne=r.input`
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
`,Ue=r.div`
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
`,Oe=r.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,Ve=r.div`
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
`,Ge=r.button`
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
`;function le({onSubmit:e}){const[i,l]=p.useState(new Date),[n,s]=p.useState(""),a=h=>{s(h.target.value)},o=h=>{l(h)},c=()=>{e({time:Number(n),date:i})},u=ne(i,"dd.MM.yyyy");return t.jsxs(We,{children:[t.jsx("label",{children:t.jsxs(Z,{children:[t.jsx(ee,{children:"Add time"}),t.jsx(Ne,{placeholder:"min 60 sec.",type:"number",value:n,onChange:a})]})}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Choice day"}),t.jsx(ve,{maxDate:new Date,onChange:o,value:i,children:t.jsxs(Ue,{children:[t.jsx(Oe,{children:u}),t.jsx(Ve,{children:t.jsx(V,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(Ge,{onClick:c,children:"Add to diary"})})]})}le.propTypes={onSubmit:g.func.isRequired};const _e=r.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 0;
  }
`,He=r.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Ye=r.p`
  color: ${({theme:e})=>e.color.white}66;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Qe=r.p`
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
`,de=({exercise:e})=>{const{bodyPart:i,equipment:l,name:n,target:s,time:a}=e;return t.jsx(_e,{children:[{label:"Name",value:n},{label:"Target",value:s},{label:"Body Part",value:i},{label:"Equipment",value:l},{label:"Time",value:`${a} minutes`}].map(({label:o,value:c})=>t.jsxs(He,{children:[t.jsx(Ye,{children:o}),t.jsx(Qe,{children:c})]},o+c))})};de.propTypes={exercise:g.shape({bodyPart:g.string.isRequired,equipment:g.string.isRequired,name:g.string.isRequired,target:g.string.isRequired,time:g.number.isRequired}).isRequired};const Ke=r.div`
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
`,Xe=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Je=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,Ze=r.img`
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
`,et=r.div`
  display: flex;
  gap: 8px;
`,tt=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,it=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,rt=r.div`
  display: flex;
  gap: 20px;
`,nt=r.button`
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
`,ot=r.button`
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
`;function pe({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:l,setModalExerciseSuccessData:n}){const{_id:s,gifUrl:a,burnedCalories:o,time:c}=e,[u,h]=p.useState(!1),[f,d]=p.useState(!1),[x,b]=p.useState(""),[y,v]=p.useState(""),[j,k]=p.useState(0),[m,w]=p.useState(0),[$,S]=p.useState(!1),[T]=he(),E=o/c,R=Math.floor(j/60*E+m*o),D=j+m*c*60,I=async({time:M=D,date:W=new Date})=>{S(!0);const F=Math.floor(M/60*E+m*o),z={exercise_ID:s,date:ne(W,"yyyy-MM-dd"),time:M,calories:F};if(z.time<60){b(`To achieve results, the training time should be more than one minute. Your time ${z.time} sec.`),v("Notice: "),d(!0);return}const{error:_}=await T(z);_?(v("Error: "),b(_.data.message),d(!0)):(i(),l(),n(z))},B=()=>{S(!0),h(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Ke,{children:[t.jsxs(Xe,{children:[t.jsx(Ze,{src:a,alt:"Exercise technique"}),t.jsx(ce,{timerLabel:C.timerLabel,stopTimer:$,setStopTimer:S,roundsCount:m,setRoundsCount:w,setTimer:k,duration:c*60}),t.jsxs(et,{children:[t.jsx(tt,{children:C.caloriesLabel}),t.jsx(it,{children:R})]})]}),t.jsxs(Je,{children:[t.jsx(de,{exercise:e}),t.jsxs(rt,{children:[t.jsx(nt,{onClick:B,children:C.openPastDaysFormBtnName}),t.jsx(ot,{onClick:I,children:C.addExerciseBtnName})]})]}),t.jsx(q,{onShow:u,onClose:()=>{h(!1)},children:t.jsx(le,{onSubmit:I})}),t.jsx(q,{onShow:f,onClose:()=>{d(!1)},children:t.jsx(xe,{notificationType:y,message:x})})]})}pe.propTypes={openModalExerciseSuccess:g.func.isRequired,closeModalExerciseForm:g.func.isRequired,setModalExerciseSuccessData:g.func.isRequired,exercise:g.shape({gifUrl:g.string.isRequired,burnedCalories:g.number.isRequired,time:g.number.isRequired}).isRequired};const st=r.div`
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
`,at=r.img`
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
`,ct=r.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,lt=r.div`
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
`,dt=r.button`
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
`,pt=r(re)`
  color: ${({theme:e})=>e.color.grayFirst};
  display: flex;
  align-items: center;
  gap: 8px;
`,ut=r.svg`
  width: 16px;
  height: 16px;
`,ht="/power-pulse/assets/thumb-up-bc557cec.webp";function ue({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:l=0,calories:n=0}=i,s={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(st,{children:[t.jsx(at,{src:ht,alt:"thumb up"}),t.jsx(ct,{children:s.wellDone}),t.jsxs(lt,{children:[t.jsxs(N,{children:[t.jsx(te,{children:s.timeText}),t.jsxs(ie,{children:[" ",l]})]}),t.jsxs(N,{children:[t.jsx(te,{children:s.caloriesText}),t.jsx(ie,{children:n})]})]}),t.jsx(dt,{onClick:e,type:"button",children:s.nextExerciseText}),t.jsxs(pt,{to:`/${me.DIARY}`,children:[t.jsxs(N,{children:[" ",s.diaryLinkText]}),t.jsx(ut,{children:t.jsx("use",{href:`${A}#arrow-add-prod`})})]})]})}ue.propTypes={closeModalExerciseSuccess:g.func.isRequired,modalExerciseSuccessData:g.shape({time:g.number,calories:g.number})};const xt=r.div`
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
`,mt=r.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 25px;
  }
`,gt=r.svg`
  max-width: 24px;
  max-height: 24px;
`,ft=r.svg`
  width: 16px;
  height: 16px;
`,bt=r.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,wt=r.div`
  display: flex;
  align-items: center;
`,yt=r.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,vt=r.h2`
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
`,jt=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 12px;
  }
`,kt=r.button`
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
`,$t=r.p`
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
`;function St(e){const{bodyPart:i,gifUrl:l,name:n,target:s,burnedCalories:a}=e,[o,c]=p.useState(!1),[u,h]=p.useState(!1),[f,d]=p.useState({}),x=()=>{c(!0)},b=()=>{h(!0)},y=()=>{c(!1)},v=()=>{h(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(xt,{gifUrl:l,children:[t.jsxs(mt,{children:[t.jsx(bt,{children:"WORKOUT"}),t.jsx(wt,{className:"start",children:t.jsxs(kt,{onClick:x,children:[t.jsx($t,{className:"start",children:"Start"}),t.jsx(ft,{children:t.jsx("use",{href:`${A}#arrow-add-prod-orange`})})]})})]}),t.jsxs(jt,{children:[t.jsx(gt,{children:t.jsx("use",{href:`${A}#run-man`})}),t.jsx(vt,{children:n})]}),t.jsxs(yt,{children:[t.jsxs(U,{children:["Burned calories:",t.jsx(O,{children:a})]}),t.jsxs(U,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(O,{children:i})]}),t.jsxs(U,{className:"target",children:["Target:",t.jsx(O,{children:s})]})]})]}),t.jsx(q,{onShow:o,onClose:y,children:t.jsx(pe,{exercise:e,openModalExerciseSuccess:b,closeModalExerciseForm:y,setModalExerciseSuccessData:d})}),t.jsx(q,{onShow:u,onClose:v,children:t.jsx(ue,{modalExerciseSuccessData:f,closeModalExerciseSuccess:v})})]})}const Et=r.ul`
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
`;function Ft(){var T;const e=ge(),[i,l]=p.useState(1),[n,s]=p.useState(!0),[a,o]=p.useState([]),{subcategory:c}=fe(),{ref:u}=Re({onChange:E=>E&&s(!0)}),h=be(),f=p.useRef(((T=h.state)==null?void 0:T.from)??"/exercises"),d=p.useRef(),[x,{isLoading:b,isError:y,error:v}]=we(),{data:j,isFetching:k,isError:m,error:w}=ye(e),$=j&&j.filter(E=>E.name===c)[0],S=$?$.imgURL:null;return p.useEffect(()=>{n&&(async()=>{try{const R=await x({page:i,[e]:c}).unwrap();if(R.data.length===0)return;o(i===1?[...R.data]:D=>[...D,...R.data]),s(!1),l(i+1)}catch(R){console.log(R)}})()},[i,x,n,e,c]),t.jsxs("div",{children:[t.jsxs(Tt,{to:f.current,children:[t.jsx(Ct,{children:t.jsx("use",{href:`${A}#icon-arrow`})}),t.jsx(Rt,{children:"Back"})]}),t.jsx(Et,{ref:d,children:a==null?void 0:a.map(({_id:E,name:R,bodyPart:D,burnedCalories:I,target:B,gifUrl:C,time:M,equipment:W},F)=>t.jsx("li",{ref:F===a.length-1?u:null,children:t.jsx(St,{_id:E,bodyPart:D,equipment:W,gifUrl:C,name:R,target:B,burnedCalories:I,time:M},E)},F))}),t.jsx(Dt,{category:e,img:S}),t.jsx(H,{isLoading:k,isError:m,error:w}),t.jsx(H,{isLoading:b,isError:y,error:v})]})}export{Ft as ExercisesList};
