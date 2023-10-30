import{n,x as $,r as u,P as v,j as t,p as T,L as G,R as ie,K as A,V as re,U as ne,b as se,X as oe,W as ae,E as ce}from"./index-d6ddc6b2.js";import{U as D}from"./UpperCase-e7ea7578.js";const le=n.div`
  display: grid;
  padding: 48px 16px;
  width: 335px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`,de=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,pe=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    justify-content: space-between;
  }
`,ue=n.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 270px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
`,xe=n.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,he=n.div`
  display: flex;
  gap: 8px;
`,me=n.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
`,ge=n.p`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.29;
`,fe=n.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,be=n.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`,we=n.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,ve=n.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  ::first-letter {
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ye=n.button`
  border: none;
  display: inline-flex;
  padding: 12px 32px;
  border-radius: 12px;
  background: #e6533c;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;var F=typeof window>"u"?u.useEffect:u.useLayoutEffect,je=({isPlaying:e,duration:i,startAt:c=0,updateInterval:s=0,onComplete:r,onUpdate:o})=>{let[a,l]=u.useState(c),d=u.useRef(0),h=u.useRef(c),x=u.useRef(c*-1e3),p=u.useRef(null),m=u.useRef(null),b=u.useRef(null),y=j=>{let g=j/1e3;if(m.current===null){m.current=g,p.current=requestAnimationFrame(y);return}let w=g-m.current,f=d.current+w;m.current=g,d.current=f;let R=h.current+(s===0?f:(f/s|0)*s),E=h.current+f,C=typeof i=="number"&&E>=i;l(C?i:R),C||(p.current=requestAnimationFrame(y))},S=()=>{p.current&&cancelAnimationFrame(p.current),b.current&&clearTimeout(b.current),m.current=null},k=u.useCallback(j=>{S(),d.current=0;let g=typeof j=="number"?j:c;h.current=g,l(g),e&&(p.current=requestAnimationFrame(y))},[e,c]);return F(()=>{if(o==null||o(a),i&&a>=i){x.current+=i*1e3;let{shouldRepeat:j=!1,delay:g=0,newStartAt:w}=(r==null?void 0:r(x.current/1e3))||{};j&&(b.current=setTimeout(()=>k(w),g*1e3))}},[a,i]),F(()=>(e&&(p.current=requestAnimationFrame(y)),S),[e,i,s]),{elapsedTime:a,reset:k}},Re=(e,i,c)=>{let s=e/2,r=i/2,o=s-r,a=2*o,l=c==="clockwise"?"1,0":"0,1",d=2*Math.PI*o;return{path:`m ${s},${r} a ${o},${o} 0 ${l} 0,${a} a ${o},${o} 0 ${l} 0,-${a}`,pathLength:d}},B=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,ke=e=>({position:"relative",width:e,height:e}),Se={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},_=(e,i,c,s,r)=>{if(s===0)return i;let o=(r?s-e:e)/s;return i+c*o},P=e=>{var i,c;return(c=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,r,o,a)=>`#${r}${r}${o}${o}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?c:[]},Ee=(e,i)=>{var c;let{colors:s,colorsTime:r,isSmoothColorTransition:o=!0}=e;if(typeof s=="string")return s;let a=(c=r==null?void 0:r.findIndex((m,b)=>m>=i&&i>=r[b+1]))!=null?c:-1;if(!r||a===-1)return s[0];if(!o)return s[a];let l=r[a]-i,d=r[a]-r[a+1],h=P(s[a]),x=P(s[a+1]),p=!!e.isGrowing;return`rgb(${h.map((m,b)=>_(l,m,x[b]-m,d,p)|0).join(",")})`},Te=e=>{let{duration:i,initialRemainingTime:c,updateInterval:s,size:r=180,strokeWidth:o=12,trailStrokeWidth:a,isPlaying:l=!1,isGrowing:d=!1,rotation:h="clockwise",onComplete:x,onUpdate:p}=e,m=u.useRef(),b=Math.max(o,a??0),{path:y,pathLength:S}=Re(r,b,h),{elapsedTime:k}=je({isPlaying:l,duration:i,startAt:B(i,c),updateInterval:s,onUpdate:typeof p=="function"?g=>{let w=Math.ceil(i-g);w!==m.current&&(m.current=w,p(w))}:void 0,onComplete:typeof x=="function"?g=>{var w;let{shouldRepeat:f,delay:R,newInitialRemainingTime:E}=(w=x(g))!=null?w:{};if(f)return{shouldRepeat:f,delay:R,newStartAt:B(i,E)}}:void 0}),j=i-k;return{elapsedTime:k,path:y,pathLength:S,remainingTime:Math.ceil(j),rotation:h,size:r,stroke:Ee(e,j),strokeDashoffset:_(k,0,S,i,d),strokeWidth:o}},K=e=>{let{children:i,strokeLinecap:c,trailColor:s,trailStrokeWidth:r}=e,{path:o,pathLength:a,stroke:l,strokeDashoffset:d,remainingTime:h,elapsedTime:x,size:p,strokeWidth:m}=Te(e);return $.createElement("div",{style:ke(p)},$.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:o,fill:"none",stroke:s??"#d9d9d9",strokeWidth:r??m}),$.createElement("path",{d:o,fill:"none",stroke:l,strokeLinecap:c??"round",strokeWidth:m,strokeDasharray:a,strokeDashoffset:d})),typeof i=="function"&&$.createElement("div",{style:Se},i({remainingTime:h,elapsedTime:x,color:l})))};K.displayName="CountdownCircleTimer";const $e=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,Ce=n.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,U=n.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,Le=n.button`
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

  :hover {
    transform: scale(1.1);
  }
`,De=n.div`
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
`,Ie=n.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,Q=({isRunning:e,animationDuration:i})=>t.jsx(De,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(Ie,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});Q.propTypes={isRunning:v.bool.isRequired,animationDuration:v.number.isRequired};const X=({duration:e,setTimer:i,roundsCount:c,setRoundsCount:s})=>{const[r,o]=u.useState(!1),a=()=>{o(!r)},l=({remainingTime:d})=>{const h=e-d,x=Math.floor(h/60),p=h%60;return t.jsxs($e,{children:[t.jsx(U,{children:`
        ${x.toString().padStart(2,"0")} :
        ${p.toString().padStart(2,"0")}
        `}),t.jsxs(U,{children:["Round: ",c]})]})};return t.jsxs(t.Fragment,{children:[t.jsxs(Ce,{children:[t.jsx(K,{size:125,isPlaying:r,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:e,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(s(d=>d+1),{shouldRepeat:!0}),onUpdate:d=>{i(e-d)},children:l}),t.jsx(Q,{isRunning:r,animationDuration:e})]}),t.jsx(Le,{onClick:a,children:t.jsx("svg",{width:15,height:15,children:r?t.jsx("use",{href:T+"#pause"}):t.jsx("use",{href:T+"#play"})})})]})};X.propTypes={duration:v.number.isRequired,roundsCount:v.number.isRequired,setTimer:v.func.isRequired,setRoundsCount:v.func.isRequired};function Y({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:c,setModalExerciseSuccessData:s}){const{gifUrl:r,bodyPart:o,equipment:a,name:l,target:d,burnedCalories:h,time:x}=e,[p,m]=u.useState(0),[b,y]=u.useState(0),S=[{label:"Name",value:l},{label:"Target",value:d},{label:"Body Part",value:o},{label:"Equipment",value:a},{label:"Time",value:`${x} minutes`}],k={timerLabel:"Time",caloriesLabel:"Burned calories:",buttonName:"Add to diary"},j=h/x,g=Math.floor(p/60*j+b*h),w=()=>{const f={exerciseId:e._id.$oid,time:p+b*x*60,calories:g};i(),c(),s(f),console.log("collectedData:",f)};return t.jsxs(le,{children:[t.jsxs(de,{children:[t.jsx(ue,{src:r,alt:"Exercise technique"}),t.jsx(xe,{children:k.timerLabel}),t.jsx(X,{roundsCount:b,setRoundsCount:y,setTimer:m,duration:x*60}),t.jsxs(he,{children:[t.jsx(me,{children:k.caloriesLabel}),t.jsx(ge,{children:g})]})]}),t.jsxs(pe,{children:[t.jsx(fe,{children:S.map(({label:f,value:R})=>t.jsxs(be,{children:[t.jsx(we,{children:f}),t.jsx(ve,{children:R})]},R))}),t.jsx(ye,{onClick:w,children:k.buttonName})]})]})}Y.propTypes={openModalExerciseSuccess:v.func.isRequired,closeModalExerciseForm:v.func.isRequired,setModalExerciseSuccessData:v.func.isRequired,exercise:v.shape({gifUrl:v.string.isRequired,bodyPart:v.string.isRequired,equipment:v.string.isRequired,name:v.string.isRequired,target:v.string.isRequired,burnedCalories:v.number.isRequired,time:v.number.isRequired}).isRequired};const qe=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  width: 335px;

  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
    width: 430px;
  }
`,ze=n.img`
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
`,Me=n.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,We=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,I=n.p`
  font-size: 14px;
  line-height: 1.29;
`,V=n.span`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
`,N=n.span`
  color: #e6533c;
`,Ae=n.button`
  margin-bottom: 16px;
  padding: 12px 32px;
  border-radius: 12px;
  background: #e6533c;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media screen and (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 1.5;
  }
`,Fe=n(G)`
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
`,Be=n.svg`
  width: 16px;
  height: 16px;
`,Pe="/power-pulse/assets/thumb-up-bc557cec.webp";function H({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:c,calories:s}=i,r={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(qe,{children:[t.jsx(ze,{src:Pe,alt:"thumb up"}),t.jsx(Me,{children:r.wellDone}),t.jsxs(We,{children:[t.jsxs(I,{children:[t.jsx(V,{children:r.timeText}),t.jsxs(N,{children:[" ",c]})]}),t.jsxs(I,{children:[t.jsx(V,{children:r.caloriesText}),t.jsx(N,{children:s})]})]}),t.jsx(Ae,{onClick:e,type:"button",children:r.nextExerciseText}),t.jsxs(Fe,{to:`/${ie.DIARY}`,children:[t.jsxs(I,{children:[" ",r.diaryLinkText]}),t.jsx(Be,{children:t.jsx("use",{href:`${T}#arrow-add-prod`})})]})]})}H.propTypes={closeModalExerciseSuccess:v.func.isRequired,modalExerciseSuccessData:v.shape({time:v.number.isRequired,calories:v.number.isRequired})};const Ue=n.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  max-height: 163px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    &:hover {
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

    &:hover h2 {
      max-width: 225px;
    }
    &:hover button {
      margin-right: 152px;
    }
    &:hover span {
      font-weight: 500;
    }

    &:hover .target {
      opacity: 0;
    }
    &:hover .start {
      color: ${({theme:e})=>e.color.orangeFirst};
      font-weight: 500;
    }
  }
`,Ve=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`,Ne=n.svg`
  max-width: 24px;
  max-height: 24px;
`,Oe=n.svg`
  width: 16px;
  height: 16px;
`,Ge=n.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,_e=n.div`
  display: flex;
  align-items: center;
`,Ke=n.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,Qe=n.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Xe=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`,Ye=n.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,He=n.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,q=n.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 4px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 4px;
  }
`,z=n.span`
  padding-left: 0;
  color: ${({theme:e})=>e.color.white};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    margin-left: 4px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;function Je(e){const{bodyPart:i,gifUrl:c,name:s,target:r,burnedCalories:o}=e,[a,l]=u.useState(!1),[d,h]=u.useState(!1),[x,p]=u.useState({}),m=()=>{l(!0)},b=()=>{h(!0)},y=()=>{l(!1)},S=()=>{h(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(Ue,{gifUrl:c,children:[t.jsxs(Ve,{children:[t.jsx(Ge,{children:"WORKOUT"}),t.jsx(_e,{className:"start",children:t.jsxs(Ye,{onClick:m,children:[t.jsx(He,{className:"start",children:"Start"}),t.jsx(Oe,{children:t.jsx("use",{href:`${T}#arrow-add-prod-orange`})})]})})]}),t.jsxs(Xe,{children:[t.jsx(Ne,{children:t.jsx("use",{href:`${T}#run-man`})}),t.jsx(Qe,{children:D(s)})]}),t.jsxs(Ke,{children:[t.jsxs(q,{children:["Burned calories:",t.jsx(z,{children:o})]}),t.jsxs(q,{category:!0,children:["Body part:",t.jsx(z,{children:D(i)})]}),t.jsxs(q,{className:"target",children:["Target:",t.jsx(z,{children:D(r)})]})]})]}),a&&t.jsx(A,{onClose:y,children:t.jsx(Y,{exercise:e,openModalExerciseSuccess:b,closeModalExerciseForm:y,setModalExerciseSuccessData:p})}),d&&t.jsx(A,{onClose:S,children:t.jsx(H,{modalExerciseSuccessData:x,closeModalExerciseSuccess:S})})]})}const Ze=n.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 768px) {
    overflow-y: scroll;
    row-gap: 32px;
    column-gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    max-height: 610px;
  }

  @media (min-width: 1440px) {
    max-width: 850px;
    max-height: 495px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`,et=n.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    line-height: calc(24 / 16);
  }
`,tt=n(G)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: -25px;
  left: 0;

  @media (min-width: 768px) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`,it=n.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,rt=n.li``,nt=n.div`
  @media screen and (min-width: 1440px) {
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
`,st=n.div``;var M=new Map,L=new WeakMap,O=0,ot=void 0;function at(e){return e?(L.has(e)||(O+=1,L.set(e,O.toString())),L.get(e)):"0"}function ct(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?at(e.root):e[i]}`).toString()}function lt(e){let i=ct(e),c=M.get(i);if(!c){const s=new Map;let r;const o=new IntersectionObserver(a=>{a.forEach(l=>{var d;const h=l.isIntersecting&&r.some(x=>l.intersectionRatio>=x);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=h),(d=s.get(l.target))==null||d.forEach(x=>{x(h,l)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),c={id:i,observer:o,elements:s},M.set(i,c)}return c}function dt(e,i,c={},s=ot){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const d=e.getBoundingClientRect();return i(s,{isIntersecting:s,target:e,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:r,observer:o,elements:a}=lt(c);let l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(i),o.observe(e),function(){l.splice(l.indexOf(i),1),l.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),M.delete(r))}}function pt({threshold:e,delay:i,trackVisibility:c,rootMargin:s,root:r,triggerOnce:o,skip:a,initialInView:l,fallbackInView:d,onChange:h}={}){var x;const[p,m]=u.useState(null),b=u.useRef(),[y,S]=u.useState({inView:!!l,entry:void 0});b.current=h,u.useEffect(()=>{if(a||!p)return;let w;return w=dt(p,(f,R)=>{S({inView:f,entry:R}),b.current&&b.current(f,R),R.isIntersecting&&o&&w&&(w(),w=void 0)},{root:r,rootMargin:s,threshold:e,trackVisibility:c,delay:i},d),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,p,r,s,o,a,c,d,i]);const k=(x=y.entry)==null?void 0:x.target,j=u.useRef();!p&&k&&!o&&!a&&j.current!==k&&(j.current=k,S({inView:!!l,entry:void 0}));const g=[m,y.inView,y.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}function ht(){var w;const e=re(),[i,c]=u.useState(1),[s,r]=u.useState(!0),[o,a]=u.useState([]),{subcategory:l}=ne(),{ref:d}=pt({onChange:f=>f&&r(!0)}),h=se(),x=u.useRef(((w=h.state)==null?void 0:w.from)??"/exercises"),p=u.useRef(),[m]=oe(),{data:b,isFetching:y,isError:S,error:k}=ae(e),j=b&&b.filter(f=>f.name===l)[0],g=j?j.imgURL:null;return u.useEffect(()=>{s&&(async()=>{try{const R=await m({page:i,[e]:l}).unwrap();a(i===1?[...R]:E=>[...E,...R]),r(!1),c(i+1)}catch(R){console.log(R)}})()},[i,m,s,e,l]),t.jsxs(st,{children:[t.jsxs(tt,{to:x.current,children:[t.jsx(it,{children:t.jsx("use",{href:`${T}#icon-arrow`})}),t.jsx(et,{children:"Back"})]}),t.jsx(Ze,{ref:p,children:o==null?void 0:o.map(({_id:f,name:R,bodyPart:E,burnedCalories:C,target:J,gifUrl:Z,time:ee,equipment:te},W)=>t.jsx(rt,{ref:W===o.length-1?d:null,children:t.jsx(Je,{_id:f,bodyPart:E,equipment:te,gifUrl:Z,name:R,target:J,burnedCalories:C,time:ee},f)},W))}),t.jsx(nt,{category:e,img:g}),t.jsx(ce,{isFetching:y,isError:S,error:k})]})}export{ht as ExercisesList};
