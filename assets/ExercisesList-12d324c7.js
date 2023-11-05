import{Y as F,r as l,n as i,P as h,j as t,I as z,ai as de,aj as pe,M as q,N as he,L as Z,R as ue,o as P,af as xe,ad as me,b as ge,ak as fe,ag as be,u as we,s as ye}from"./index-942e5375.js";import{u as ve}from"./index-43ad004c.js";import{f as ee,C as ke}from"./Calendar-637e625f.js";var G=typeof window>"u"?l.useEffect:l.useLayoutEffect,je=({isPlaying:e,duration:r,startAt:d=0,updateInterval:o=0,onComplete:n,onUpdate:a})=>{let[s,c]=l.useState(d),u=l.useRef(0),m=l.useRef(d),w=l.useRef(d*-1e3),p=l.useRef(null),x=l.useRef(null),g=l.useRef(null),f=k=>{let b=k/1e3;if(x.current===null){x.current=b,p.current=requestAnimationFrame(f);return}let y=b-x.current,$=u.current+y;x.current=b,u.current=$;let S=m.current+(o===0?$:($/o|0)*o),C=m.current+$,R=typeof r=="number"&&C>=r;c(R?r:S),R||(p.current=requestAnimationFrame(f))},v=()=>{p.current&&cancelAnimationFrame(p.current),g.current&&clearTimeout(g.current),x.current=null},j=l.useCallback(k=>{v(),u.current=0;let b=typeof k=="number"?k:d;m.current=b,c(b),e&&(p.current=requestAnimationFrame(f))},[e,d]);return G(()=>{if(a==null||a(s),r&&s>=r){w.current+=r*1e3;let{shouldRepeat:k=!1,delay:b=0,newStartAt:y}=(n==null?void 0:n(w.current/1e3))||{};k&&(g.current=setTimeout(()=>j(y),b*1e3))}},[s,r]),G(()=>(e&&(p.current=requestAnimationFrame(f)),v),[e,r,o]),{elapsedTime:s,reset:j}},$e=(e,r,d)=>{let o=e/2,n=r/2,a=o-n,s=2*a,c=d==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${o},${n} a ${a},${a} 0 ${c} 0,${s} a ${a},${a} 0 ${c} 0,-${s}`,pathLength:u}},Y=(e,r)=>e===0||e===r?0:typeof r=="number"?e-r:0,Se=e=>({position:"relative",width:e,height:e}),Ee={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},te=(e,r,d,o,n)=>{if(o===0)return r;let a=(n?o-e:e)/o;return r+d*a},H=e=>{var r,d;return(d=(r=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,n,a,s)=>`#${n}${n}${a}${a}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:r.map(o=>parseInt(o,16)))!=null?d:[]},Te=(e,r)=>{var d;let{colors:o,colorsTime:n,isSmoothColorTransition:a=!0}=e;if(typeof o=="string")return o;let s=(d=n==null?void 0:n.findIndex((x,g)=>x>=r&&r>=n[g+1]))!=null?d:-1;if(!n||s===-1)return o[0];if(!a)return o[s];let c=n[s]-r,u=n[s]-n[s+1],m=H(o[s]),w=H(o[s+1]),p=!!e.isGrowing;return`rgb(${m.map((x,g)=>te(c,x,w[g]-x,u,p)|0).join(",")})`},Re=e=>{let{duration:r,initialRemainingTime:d,updateInterval:o,size:n=180,strokeWidth:a=12,trailStrokeWidth:s,isPlaying:c=!1,isGrowing:u=!1,rotation:m="clockwise",onComplete:w,onUpdate:p}=e,x=l.useRef(),g=Math.max(a,s??0),{path:f,pathLength:v}=$e(n,g,m),{elapsedTime:j}=je({isPlaying:c,duration:r,startAt:Y(r,d),updateInterval:o,onUpdate:typeof p=="function"?b=>{let y=Math.ceil(r-b);y!==x.current&&(x.current=y,p(y))}:void 0,onComplete:typeof w=="function"?b=>{var y;let{shouldRepeat:$,delay:S,newInitialRemainingTime:C}=(y=w(b))!=null?y:{};if($)return{shouldRepeat:$,delay:S,newStartAt:Y(r,C)}}:void 0}),k=r-j;return{elapsedTime:j,path:f,pathLength:v,remainingTime:Math.ceil(k),rotation:m,size:n,stroke:Te(e,k),strokeDashoffset:te(j,0,v,r,u),strokeWidth:a}},ie=e=>{let{children:r,strokeLinecap:d,trailColor:o,trailStrokeWidth:n}=e,{path:a,pathLength:s,stroke:c,strokeDashoffset:u,remainingTime:m,elapsedTime:w,size:p,strokeWidth:x}=Re(e);return F.createElement("div",{style:Se(p)},F.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},F.createElement("path",{d:a,fill:"none",stroke:o??"#d9d9d9",strokeWidth:n??x}),F.createElement("path",{d:a,fill:"none",stroke:c,strokeLinecap:d??"round",strokeWidth:x,strokeDasharray:s,strokeDashoffset:u})),typeof r=="function"&&F.createElement("div",{style:Ee},r({remainingTime:m,elapsedTime:w,color:c})))};ie.displayName="CountdownCircleTimer";const Ce=i.div`
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
`,De=i.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,re=({isRunning:e,animationDuration:r})=>t.jsx(Ce,{animationDuration:r,style:{animationPlayState:e?"":"paused"},children:t.jsx(De,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});re.propTypes={isRunning:h.bool.isRequired,animationDuration:h.number.isRequired};const Le=i.div`
  position: absolute;
  rotate: 180deg;
  z-index: -1;
  top: 50%;
  left: 52%;
  translate: -50% -50%;
  cursor: pointer;

  svg {
    cursor: pointer;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    stroke: #5b5a5a;
    fill: #262625;

    transition:
      scale 200ms ease-in-out,
      opacity 200ms ease-in-out;
  }
`,Me=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  z-index: 100;
`,Fe=i.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }

  :hover {
    .timer-display-icon svg {
      scale: 1.05;
      opacity: 0.8;
    }
  }
`,ze=i.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,Q=i.p`
  color: #efede8;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  user-select: none;
`,Ie=i.button`
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

  svg {
    width: 15px;
    height: 15px;
    stroke: #efede8;
    fill: #efede8;
  }

  :hover {
    transform: scale(1.1);
  }
`,ne=({timerLabel:e,duration:r,setTimer:d,roundsCount:o,setRoundsCount:n,stopTimer:a,setStopTimer:s})=>{const[c,u]=l.useState(!1);l.useEffect(()=>{a&&(u(!a),s(!1))},[s,a]);const m=()=>{u(!c)},w=({remainingTime:p})=>{const x=r-p,g=Math.floor(x/60),f=x%60;return t.jsxs(Me,{onClick:m,children:[t.jsx(Le,{className:"timer-display-icon",children:c?t.jsx(z,{name:"pause"}):t.jsx(z,{name:"play"})}),t.jsx(Q,{children:`
        ${g.toString().padStart(2,"0")} :
        ${f.toString().padStart(2,"0")}
        `}),t.jsxs(Q,{children:["Round: ",o]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(ze,{children:e}),t.jsxs(Fe,{children:[t.jsx(ie,{size:125,isPlaying:c,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:r,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(n(p=>p+1),{shouldRepeat:!0}),onUpdate:p=>{d(r-p)},children:w}),t.jsx(re,{isRunning:c,animationDuration:r})]}),t.jsx(Ie,{onClick:m,children:c?t.jsx(z,{name:"pause"}):t.jsx(z,{name:"play"})})]})};ne.propTypes={timerLabel:h.string.isRequired,duration:h.number.isRequired,setTimer:h.func.isRequired,roundsCount:h.number.isRequired,setRoundsCount:h.func.isRequired,stopTimer:h.bool.isRequired,setStopTimer:h.func.isRequired};const qe=i.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 35px;
  flex-direction: column;
`,K=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`,X=i.span`
  color: ${({theme:e})=>e.color.label};
  font-size: 16px;
  line-height: 1.29;
`,Pe=i.input`
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: rgba(0, 0, 0, 0.5);
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: 1.29;

  &:not(:placeholder-shown) + span {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 167px;
    padding: 12px;
  }
`,Be=i.span`
  position: absolute;
  right: 5px;
  bottom: -22px;
  color: #D80027;

  &.error-message-enter {
    opacity: 0;
  }

  &.error-message-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  &.error-message-exit {
    opacity: 1;
  }

  &.error-message-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
`,Ae=i.span`
  position: absolute;
  right: 15px;
  bottom: 12px;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    right: 15px;
    bottom: 16px;
  }
`,We=i.div`
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
`,Ne=i.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,Ue=i.div`
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
`,Oe=i.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  line-height: 1.29;

  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;function oe({onSubmit:e}){const[r,d]=l.useState(new Date),[o,n]=l.useState(""),[a,s]=l.useState(!1),c=l.useRef(null),u=l.useRef(null),m=g=>{const f=g.target.value;u.current&&clearTimeout(u.current),!(f.length>11)&&(/^[0-9]*$/.test(f)||f===""?(n(f),s(!1)):(s(!0),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{s(!1)},3e3)))};l.useEffect(()=>()=>{u.current&&clearTimeout(u.current)},[]);const w=g=>{d(g)},p=()=>{e({time:Number(o),date:r})},x=ee(r,"dd.MM.yyyy");return t.jsxs(qe,{children:[t.jsx("label",{children:t.jsxs(K,{children:[t.jsx(X,{children:"Add time"}),t.jsx(Pe,{placeholder:"min 60 sec.",type:"text",value:o,onChange:m}),t.jsx(Ae,{children:"sec."}),t.jsx(de,{in:a,nodeRef:c,timeout:300,classNames:"error-message",unmountOnExit:!0,children:t.jsx(Be,{ref:c,children:"Enter a number"})})]})}),t.jsxs(K,{children:[t.jsx(X,{children:"Choice day"}),t.jsx(ke,{maxDate:new Date,onChange:w,value:r,children:t.jsxs(We,{children:[t.jsx(Ne,{children:x}),t.jsx(Ue,{children:t.jsx(z,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(Oe,{onClick:p,children:"Add to diary"})})]})}oe.propTypes={onSubmit:h.func.isRequired};const Ve=i.ul`
  margin-bottom: 24px;
  display: grid;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 0;
  }
`,Ge=i.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Ye=i.p`
  color: ${({theme:e})=>e.color.white}66;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
    line-height: 1.5;
  }
`,He=i.p`
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
`,se=({exercise:e})=>{const{bodyPart:r,equipment:d,name:o,target:n,time:a}=e;return t.jsx(Ve,{children:[{label:"Name",value:o},{label:"Target",value:n},{label:"Body Part",value:r},{label:"Equipment",value:d},{label:"Time",value:`${a} minutes`}].map(({label:s,value:c})=>t.jsxs(Ge,{children:[t.jsx(Ye,{children:s}),t.jsx(He,{children:c})]},s+c))})};se.propTypes={exercise:h.shape({bodyPart:h.string.isRequired,equipment:h.string.isRequired,name:h.string.isRequired,target:h.string.isRequired,time:h.number.isRequired}).isRequired};const Qe=i.div`
  display: grid;
  padding: 48px 16px;
  width: 280px;
  height: 280px;
  gap: 40px;

  @media screen and (min-height: 450px) {
    height: 400px;
  }

  @media screen and (min-height: 550px) {
    height: 500px;
  }

  @media screen and (min-height: 650px) {
    height: 570px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    height: auto;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`,Ke=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Xe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,_e=i.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 230px;
  height: 230px;

  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 270px;
    height: 270px;
  }
`,Je=i.div`
  display: flex;
  gap: 8px;
`,Ze=i.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,et=i.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,tt=i.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  width: 100%;

  & > :first-of-type {
    align-self: flex-start;
  }
  & > :last-of-type {
    align-self: flex-end;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    justify-content: space-between;
    flex-direction: row;
  }
`,it=i.button`
  border: none;
  max-width: 140px;
  background-color: transparent;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 150px;
    font-size: 16px;
    line-height: 1.5;
  }

  transition: color 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.white};
  }
`,rt=i.button`
  border: none;
  display: inline-flex;
  padding: 12px 28px;
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
`;function ae({exercise:e,openModalExerciseSuccess:r,closeModalExerciseForm:d,setModalExerciseSuccessData:o}){const{_id:n,gifUrl:a,burnedCalories:s,time:c}=e,[u,m]=l.useState(!1),[w,p]=l.useState(!1),[x,g]=l.useState(""),[f,v]=l.useState(""),[j,k]=l.useState(0),[b,y]=l.useState(0),[$,S]=l.useState(!1),[C]=pe(),R=s/c,E=Math.floor(j/60*R+b*s),T=j+b*c*60,L=async({time:I=T,date:A=new Date})=>{S(!0);const W=Math.floor(I/60*R+b*s),D={exercise_ID:n,date:ee(A,"yyyy-MM-dd"),time:I,calories:W};if(D.time<60){g(`To achieve results, the training time should be more than one minute. Your time ${D.time} sec.`),v("Notice: "),p(!0);return}const{error:V}=await C(D);V?(v("Error: "),g(V.data.message),p(!0)):(r(),d(),o(D))},B=()=>{S(!0),m(!0)},M={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Qe,{children:[t.jsxs(Ke,{children:[t.jsx(_e,{src:a,alt:"Exercise technique"}),t.jsx(ne,{timerLabel:M.timerLabel,stopTimer:$,setStopTimer:S,roundsCount:b,setRoundsCount:y,setTimer:k,duration:c*60}),t.jsxs(Je,{children:[t.jsx(Ze,{children:M.caloriesLabel}),t.jsx(et,{children:E})]})]}),t.jsxs(Xe,{children:[t.jsx(se,{exercise:e}),t.jsxs(tt,{children:[t.jsx(it,{onClick:B,children:M.openPastDaysFormBtnName}),t.jsx(rt,{onClick:L,children:M.addExerciseBtnName})]})]}),t.jsx(q,{onShow:u,onClose:()=>{m(!1)},children:t.jsx(oe,{onSubmit:L})}),t.jsx(q,{onShow:w,onClose:()=>{p(!1)},children:t.jsx(he,{notificationType:f,message:x})})]})}ae.propTypes={openModalExerciseSuccess:h.func.isRequired,closeModalExerciseForm:h.func.isRequired,setModalExerciseSuccessData:h.func.isRequired,exercise:h.shape({gifUrl:h.string.isRequired,burnedCalories:h.number.isRequired,time:h.number.isRequired}).isRequired};const nt=i.div`
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
`,ot=i.img`
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
`,st=i.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,at=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,_=i.span`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
`,J=i.span`
  color: ${({theme:e})=>e.color.orangeFirst};
`,lt=i.button`
  margin-bottom: 16px;
  padding: 12px 32px;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  color: ${({theme:e})=>e.color.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 1.5;
  }
`,ct=i(Z)`
  display: flex;
  align-items: center;
  gap: 8px;
  
  :hover p,
  :hover svg {
    color: ${({theme:e})=>e.color.white};
    stroke: ${({theme:e})=>e.color.white};
  }
`,N=i.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
  transition: color 300ms ease-in-out;
`,dt=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayFirst};
  transition: stroke 300ms ease-in-out;
`,pt="/power-pulse/assets/thumb-up-bc557cec.webp";function le({closeModalExerciseSuccess:e,modalExerciseSuccessData:r}){const{time:d=0,calories:o=0}=r,n={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(nt,{children:[t.jsx(ot,{src:pt,alt:"thumb up"}),t.jsx(st,{children:n.wellDone}),t.jsxs(at,{children:[t.jsxs(N,{children:[t.jsx(_,{children:n.timeText}),t.jsxs(J,{children:[" ",d]})]}),t.jsxs(N,{children:[t.jsx(_,{children:n.caloriesText}),t.jsx(J,{children:o})]})]}),t.jsx(lt,{onClick:e,type:"button",children:n.nextExerciseText}),t.jsxs(ct,{to:`/${ue.DIARY}`,children:[t.jsxs(N,{children:[" ",n.diaryLinkText]}),t.jsx(dt,{children:t.jsx("use",{href:`${P}#arrow-add-prod`})})]})]})}le.propTypes={closeModalExerciseSuccess:h.func.isRequired,modalExerciseSuccessData:h.shape({time:h.number,calories:h.number})};const ht=i.div`
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
`,ut=i.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 25px;
  }
`,xt=i.svg`
  max-width: 24px;
  max-height: 24px;
`,mt=i.svg`
  width: 16px;
  height: 16px;
`,gt=i.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,ft=i.div`
  display: flex;
  align-items: center;
`,bt=i.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,wt=i.h2`
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
`,yt=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 12px;
  }
`,vt=i.button`
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
`,kt=i.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,U=i.p`
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
`,O=i.span`
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
`;function ce(e){const{bodyPart:r,gifUrl:d,name:o,target:n,burnedCalories:a}=e,[s,c]=l.useState(!1),[u,m]=l.useState(!1),[w,p]=l.useState({}),x=()=>{c(!0)},g=()=>{m(!0)},f=()=>{c(!1)},v=()=>{m(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(ht,{gifUrl:d,children:[t.jsxs(ut,{children:[t.jsx(gt,{children:"WORKOUT"}),t.jsx(ft,{className:"start",children:t.jsxs(vt,{onClick:x,children:[t.jsx(kt,{className:"start",children:"Start"}),t.jsx(mt,{children:t.jsx("use",{href:`${P}#arrow-add-prod-orange`})})]})})]}),t.jsxs(yt,{children:[t.jsx(xt,{children:t.jsx("use",{href:`${P}#run-man`})}),t.jsx(wt,{children:o})]}),t.jsxs(bt,{children:[t.jsxs(U,{children:["Burned calories:",t.jsx(O,{children:a})]}),t.jsxs(U,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(O,{children:r})]}),t.jsxs(U,{className:"target",children:["Target:",t.jsx(O,{children:n})]})]})]}),t.jsx(q,{onShow:s,onClose:f,children:t.jsx(ae,{exercise:e,openModalExerciseSuccess:g,closeModalExerciseForm:f,setModalExerciseSuccessData:p})}),t.jsx(q,{onShow:u,onClose:v,children:t.jsx(le,{modalExerciseSuccessData:w,closeModalExerciseSuccess:v})})]})}ce.propTypes={bodyPart:h.string.isRequired,name:h.string.isRequired,target:h.string.isRequired,burnedCalories:h.number.isRequired};const jt=i.ul`
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
`,$t=i.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(24 / 16);
  }
`,St=i(Z)`
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
`,Et=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,Tt=i.div`
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
`;function Lt(){var R;const e=xe(),[r,d]=l.useState(1),[o,n]=l.useState(!0),[a,s]=l.useState([]),{subcategory:c}=me(),{ref:u}=ve({onChange:E=>E&&n(!0)}),m=ge(),w=l.useRef(((R=m.state)==null?void 0:R.from)??"/exercises"),p=l.useRef(),[x,{isLoading:g,isError:f,error:v}]=fe(),{data:j,isFetching:k,isError:b,error:y}=be(e),$=we(),S=j&&j.filter(E=>E.name===c)[0],C=S?S.imgURL:null;return l.useEffect(()=>{$(ye({isLoading:g||k,isError:f||b,error:v||y}))},[g,$,k,f,b,v,y]),l.useEffect(()=>{o&&(async()=>{try{const T=await x({page:r,[e]:c}).unwrap();if(T.data.length===0)return;s(r===1?[...T.data]:L=>[...L,...T.data]),n(!1),d(r+1)}catch(T){console.log(T)}})()},[r,x,o,e,c]),t.jsxs("div",{children:[t.jsxs(St,{to:w.current,children:[t.jsx(Et,{children:t.jsx("use",{href:`${P}#icon-arrow`})}),t.jsx($t,{children:"Back"})]}),t.jsx(jt,{ref:p,children:a==null?void 0:a.map(({_id:E,name:T,bodyPart:L,burnedCalories:B,target:M,gifUrl:I,time:A,equipment:W},D)=>t.jsx("li",{ref:D===a.length-1?u:null,children:t.jsx(ce,{_id:E,bodyPart:L,equipment:W,gifUrl:I,name:T,target:M,burnedCalories:B,time:A},E)},D))}),t.jsx(Tt,{category:e,img:C})]})}export{Lt as ExercisesList};
