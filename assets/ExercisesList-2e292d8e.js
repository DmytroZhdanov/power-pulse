import{n as o,x as E,r as g,P as u,j as e,l as $,L as V,R as O,B as L}from"./index-ef227d0b.js";const Y=o.div`
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
`,_=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,X=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    justify-content: space-between;
  }
`,H=o.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 270px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
`,J=o.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,K=o.div`
  display: flex;
  gap: 8px;
`,Q=o.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
`,Z=o.p`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.29;
`,ee=o.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,te=o.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`,ie=o.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,ne=o.p`
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
`,re=o.button`
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
`;var D=typeof window>"u"?g.useEffect:g.useLayoutEffect,se=({isPlaying:i,duration:t,startAt:a=0,updateInterval:r=0,onComplete:n,onUpdate:l})=>{let[s,m]=g.useState(a),c=g.useRef(0),p=g.useRef(a),x=g.useRef(a*-1e3),d=g.useRef(null),h=g.useRef(null),b=g.useRef(null),v=j=>{let f=j/1e3;if(h.current===null){h.current=f,d.current=requestAnimationFrame(v);return}let y=f-h.current,w=c.current+y;h.current=f,c.current=w;let T=p.current+(r===0?w:(w/r|0)*r),S=p.current+w,q=typeof t=="number"&&S>=t;m(q?t:T),q||(d.current=requestAnimationFrame(v))},k=()=>{d.current&&cancelAnimationFrame(d.current),b.current&&clearTimeout(b.current),h.current=null},R=g.useCallback(j=>{k(),c.current=0;let f=typeof j=="number"?j:a;p.current=f,m(f),i&&(d.current=requestAnimationFrame(v))},[i,a]);return D(()=>{if(l==null||l(s),t&&s>=t){x.current+=t*1e3;let{shouldRepeat:j=!1,delay:f=0,newStartAt:y}=(n==null?void 0:n(x.current/1e3))||{};j&&(b.current=setTimeout(()=>R(y),f*1e3))}},[s,t]),D(()=>(i&&(d.current=requestAnimationFrame(v)),k),[i,t,r]),{elapsedTime:s,reset:R}},oe=(i,t,a)=>{let r=i/2,n=t/2,l=r-n,s=2*l,m=a==="clockwise"?"1,0":"0,1",c=2*Math.PI*l;return{path:`m ${r},${n} a ${l},${l} 0 ${m} 0,${s} a ${l},${l} 0 ${m} 0,-${s}`,pathLength:c}},I=(i,t)=>i===0||i===t?0:typeof t=="number"?i-t:0,ae=i=>({position:"relative",width:i,height:i}),le={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},A=(i,t,a,r,n)=>{if(r===0)return t;let l=(n?r-i:i)/r;return t+a*l},M=i=>{var t,a;return(a=(t=i.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,n,l,s)=>`#${n}${n}${l}${l}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:t.map(r=>parseInt(r,16)))!=null?a:[]},ce=(i,t)=>{var a;let{colors:r,colorsTime:n,isSmoothColorTransition:l=!0}=i;if(typeof r=="string")return r;let s=(a=n==null?void 0:n.findIndex((h,b)=>h>=t&&t>=n[b+1]))!=null?a:-1;if(!n||s===-1)return r[0];if(!l)return r[s];let m=n[s]-t,c=n[s]-n[s+1],p=M(r[s]),x=M(r[s+1]),d=!!i.isGrowing;return`rgb(${p.map((h,b)=>A(m,h,x[b]-h,c,d)|0).join(",")})`},de=i=>{let{duration:t,initialRemainingTime:a,updateInterval:r,size:n=180,strokeWidth:l=12,trailStrokeWidth:s,isPlaying:m=!1,isGrowing:c=!1,rotation:p="clockwise",onComplete:x,onUpdate:d}=i,h=g.useRef(),b=Math.max(l,s??0),{path:v,pathLength:k}=oe(n,b,p),{elapsedTime:R}=se({isPlaying:m,duration:t,startAt:I(t,a),updateInterval:r,onUpdate:typeof d=="function"?f=>{let y=Math.ceil(t-f);y!==h.current&&(h.current=y,d(y))}:void 0,onComplete:typeof x=="function"?f=>{var y;let{shouldRepeat:w,delay:T,newInitialRemainingTime:S}=(y=x(f))!=null?y:{};if(w)return{shouldRepeat:w,delay:T,newStartAt:I(t,S)}}:void 0}),j=t-R;return{elapsedTime:R,path:v,pathLength:k,remainingTime:Math.ceil(j),rotation:p,size:n,stroke:ce(i,j),strokeDashoffset:A(R,0,k,t,c),strokeWidth:l}},P=i=>{let{children:t,strokeLinecap:a,trailColor:r,trailStrokeWidth:n}=i,{path:l,pathLength:s,stroke:m,strokeDashoffset:c,remainingTime:p,elapsedTime:x,size:d,strokeWidth:h}=de(i);return E.createElement("div",{style:ae(d)},E.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},E.createElement("path",{d:l,fill:"none",stroke:r??"#d9d9d9",strokeWidth:n??h}),E.createElement("path",{d:l,fill:"none",stroke:m,strokeLinecap:a??"round",strokeWidth:h,strokeDasharray:s,strokeDashoffset:c})),typeof t=="function"&&E.createElement("div",{style:le},t({remainingTime:p,elapsedTime:x,color:m})))};P.displayName="CountdownCircleTimer";const ue=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,pe=o.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,W=o.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,me=o.button`
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
`,xe=o.div`
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

  animation: spin ${({animationDuration:i})=>i}s linear
    infinite;
`,he=o.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,B=({isRunning:i,animationDuration:t})=>e.jsx(xe,{animationDuration:t,style:{animationPlayState:i?"":"paused"},children:e.jsx(he,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:e.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});B.propTypes={isRunning:u.bool.isRequired,animationDuration:u.number.isRequired};const U=({duration:i,setTimer:t,roundsCount:a,setRoundsCount:r})=>{const[n,l]=g.useState(!1),s=()=>{l(!n)},m=({remainingTime:c})=>{const p=i-c,x=Math.floor(p/60),d=p%60;return e.jsxs(ue,{children:[e.jsx(W,{children:`
        ${x.toString().padStart(2,"0")} :
        ${d.toString().padStart(2,"0")}
        `}),e.jsxs(W,{children:["Round: ",a]})]})};return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{children:[e.jsx(P,{size:125,isPlaying:n,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(r(c=>c+1),{shouldRepeat:!0}),onUpdate:c=>{t(i-c)},children:m}),e.jsx(B,{isRunning:n,animationDuration:i})]}),e.jsx(me,{onClick:s,children:e.jsx("svg",{width:15,height:15,children:n?e.jsx("use",{href:$+"#pause"}):e.jsx("use",{href:$+"#play"})})})]})};U.propTypes={duration:u.number.isRequired,roundsCount:u.number.isRequired,setTimer:u.func.isRequired,setRoundsCount:u.func.isRequired};function G({exercise:i,openModalExerciseSuccess:t,closeModalExerciseForm:a,setModalExerciseSuccessData:r}){const{gifUrl:n,bodyPart:l,equipment:s,name:m,target:c,burnedCalories:p,time:x}=i,[d,h]=g.useState(0),[b,v]=g.useState(0),k=[{label:"Name",value:m},{label:"Target",value:c},{label:"Body Part",value:l},{label:"Equipment",value:s},{label:"Time",value:`${x} minutes`}],R={timerLabel:"Time",caloriesLabel:"Burned calories:",buttonName:"Add to diary"},j=p/x,f=Math.floor(d/60*j+b*p),y=()=>{const w={exerciseId:i._id.$oid,time:d+b*x*60,calories:f};t(),a(),r(w),console.log("collectedData:",w)};return e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsx(H,{src:n,alt:"Exercise technique"}),e.jsx(J,{children:R.timerLabel}),e.jsx(U,{roundsCount:b,setRoundsCount:v,setTimer:h,duration:x*60}),e.jsxs(K,{children:[e.jsx(Q,{children:R.caloriesLabel}),e.jsx(Z,{children:f})]})]}),e.jsxs(X,{children:[e.jsx(ee,{children:k.map(({label:w,value:T})=>e.jsxs(te,{children:[e.jsx(ie,{children:w}),e.jsx(ne,{children:T})]},T))}),e.jsx(re,{onClick:y,children:R.buttonName})]})]})}G.propTypes={openModalExerciseSuccess:u.func.isRequired,closeModalExerciseForm:u.func.isRequired,setModalExerciseSuccessData:u.func.isRequired,exercise:u.shape({gifUrl:u.string.isRequired,bodyPart:u.string.isRequired,equipment:u.string.isRequired,name:u.string.isRequired,target:u.string.isRequired,burnedCalories:u.number.isRequired,time:u.number.isRequired}).isRequired};const ge=o.div`
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
`,fe=o.img`
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
`,be=o.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,ye=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,C=o.p`
  font-size: 14px;
  line-height: 1.29;
`,z=o.span`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
`,F=o.span`
  color: #e6533c;
`,we=o.button`
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
`,je=o(V)`
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
`,Re=o.svg`
  width: 16px;
  height: 16px;
`,ve="/power-pulse/assets/thumb-up-bc557cec.webp";function N({closeModalExerciseSuccess:i,modalExerciseSuccessData:t}){const{time:a,calories:r}=t,n={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return e.jsxs(ge,{children:[e.jsx(fe,{src:ve,alt:"thumb up"}),e.jsx(be,{children:n.wellDone}),e.jsxs(ye,{children:[e.jsxs(C,{children:[e.jsx(z,{children:n.timeText}),e.jsxs(F,{children:[" ",a]})]}),e.jsxs(C,{children:[e.jsx(z,{children:n.caloriesText}),e.jsx(F,{children:r})]})]}),e.jsx(we,{onClick:i,type:"button",children:n.nextExerciseText}),e.jsxs(je,{to:`/${O.DIARY}`,children:[e.jsxs(C,{children:[" ",n.diaryLinkText]}),e.jsx(Re,{children:e.jsx("use",{href:`${$}#arrow-add-prod`})})]})]})}N.propTypes={closeModalExerciseSuccess:u.func.isRequired,modalExerciseSuccessData:u.shape({time:u.number.isRequired,calories:u.number.isRequired})};function ke(){const[i,t]=g.useState(!1),[a,r]=g.useState(!1),[n,l]=g.useState({}),s=()=>{t(!0)},m=()=>{r(!0)},c=()=>{t(!1)},p=()=>{r(!1)},x={_id:{$oid:"64f2458d6f67bc34bae4f7f7"},bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,type:"button",children:"show"}),i&&e.jsx(L,{onClose:c,children:e.jsx(G,{exercise:x,openModalExerciseSuccess:m,closeModalExerciseForm:c,setModalExerciseSuccessData:l})}),a&&e.jsx(L,{onClose:p,children:e.jsx(N,{modalExerciseSuccessData:n,closeModalExerciseSuccess:p})})]})}function Ee(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"ExercisesList component"}),e.jsx(ke,{})]})}export{Ee as ExercisesList};
