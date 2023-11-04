import{_ as L,r as c,n as i,P as h,j as t,I as M,aj as pe,ak as he,B as P,v as xe,L as ee,R as ue,m as B,ah as me,af as ge,b as fe,al as be,ai as we,E as G}from"./index-734bbc70.js";import{u as ye}from"./index-526f95b4.js";import{f as te,C as ve}from"./Calendar-35467989.js";var H=typeof window>"u"?c.useEffect:c.useLayoutEffect,ke=({isPlaying:e,duration:r,startAt:d=0,updateInterval:o=0,onComplete:n,onUpdate:a})=>{let[s,l]=c.useState(d),x=c.useRef(0),m=c.useRef(d),b=c.useRef(d*-1e3),p=c.useRef(null),u=c.useRef(null),g=c.useRef(null),f=k=>{let w=k/1e3;if(u.current===null){u.current=w,p.current=requestAnimationFrame(f);return}let y=w-u.current,S=x.current+y;u.current=w,x.current=S;let E=m.current+(o===0?S:(S/o|0)*o),R=m.current+S,j=typeof r=="number"&&R>=r;l(j?r:E),j||(p.current=requestAnimationFrame(f))},v=()=>{p.current&&cancelAnimationFrame(p.current),g.current&&clearTimeout(g.current),u.current=null},$=c.useCallback(k=>{v(),x.current=0;let w=typeof k=="number"?k:d;m.current=w,l(w),e&&(p.current=requestAnimationFrame(f))},[e,d]);return H(()=>{if(a==null||a(s),r&&s>=r){b.current+=r*1e3;let{shouldRepeat:k=!1,delay:w=0,newStartAt:y}=(n==null?void 0:n(b.current/1e3))||{};k&&(g.current=setTimeout(()=>$(y),w*1e3))}},[s,r]),H(()=>(e&&(p.current=requestAnimationFrame(f)),v),[e,r,o]),{elapsedTime:s,reset:$}},je=(e,r,d)=>{let o=e/2,n=r/2,a=o-n,s=2*a,l=d==="clockwise"?"1,0":"0,1",x=2*Math.PI*a;return{path:`m ${o},${n} a ${a},${a} 0 ${l} 0,${s} a ${a},${a} 0 ${l} 0,-${s}`,pathLength:x}},Y=(e,r)=>e===0||e===r?0:typeof r=="number"?e-r:0,$e=e=>({position:"relative",width:e,height:e}),Se={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(e,r,d,o,n)=>{if(o===0)return r;let a=(n?o-e:e)/o;return r+d*a},Q=e=>{var r,d;return(d=(r=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,n,a,s)=>`#${n}${n}${a}${a}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:r.map(o=>parseInt(o,16)))!=null?d:[]},Ee=(e,r)=>{var d;let{colors:o,colorsTime:n,isSmoothColorTransition:a=!0}=e;if(typeof o=="string")return o;let s=(d=n==null?void 0:n.findIndex((u,g)=>u>=r&&r>=n[g+1]))!=null?d:-1;if(!n||s===-1)return o[0];if(!a)return o[s];let l=n[s]-r,x=n[s]-n[s+1],m=Q(o[s]),b=Q(o[s+1]),p=!!e.isGrowing;return`rgb(${m.map((u,g)=>ie(l,u,b[g]-u,x,p)|0).join(",")})`},Te=e=>{let{duration:r,initialRemainingTime:d,updateInterval:o,size:n=180,strokeWidth:a=12,trailStrokeWidth:s,isPlaying:l=!1,isGrowing:x=!1,rotation:m="clockwise",onComplete:b,onUpdate:p}=e,u=c.useRef(),g=Math.max(a,s??0),{path:f,pathLength:v}=je(n,g,m),{elapsedTime:$}=ke({isPlaying:l,duration:r,startAt:Y(r,d),updateInterval:o,onUpdate:typeof p=="function"?w=>{let y=Math.ceil(r-w);y!==u.current&&(u.current=y,p(y))}:void 0,onComplete:typeof b=="function"?w=>{var y;let{shouldRepeat:S,delay:E,newInitialRemainingTime:R}=(y=b(w))!=null?y:{};if(S)return{shouldRepeat:S,delay:E,newStartAt:Y(r,R)}}:void 0}),k=r-$;return{elapsedTime:$,path:f,pathLength:v,remainingTime:Math.ceil(k),rotation:m,size:n,stroke:Ee(e,k),strokeDashoffset:ie($,0,v,r,x),strokeWidth:a}},re=e=>{let{children:r,strokeLinecap:d,trailColor:o,trailStrokeWidth:n}=e,{path:a,pathLength:s,stroke:l,strokeDashoffset:x,remainingTime:m,elapsedTime:b,size:p,strokeWidth:u}=Te(e);return L.createElement("div",{style:$e(p)},L.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:o??"#d9d9d9",strokeWidth:n??u}),L.createElement("path",{d:a,fill:"none",stroke:l,strokeLinecap:d??"round",strokeWidth:u,strokeDasharray:s,strokeDashoffset:x})),typeof r=="function"&&L.createElement("div",{style:Se},r({remainingTime:m,elapsedTime:b,color:l})))};re.displayName="CountdownCircleTimer";const Re=i.div`
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
`,Ce=i.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ne=({isRunning:e,animationDuration:r})=>t.jsx(Re,{animationDuration:r,style:{animationPlayState:e?"":"paused"},children:t.jsx(Ce,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ne.propTypes={isRunning:h.bool.isRequired,animationDuration:h.number.isRequired};const De=i.div`
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
`,Le=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  z-index: 100;
`,Me=i.div`
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
`,Fe=i.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,_=i.p`
  color: #efede8;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  user-select: none;
`,ze=i.button`
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
`,oe=({timerLabel:e,duration:r,setTimer:d,roundsCount:o,setRoundsCount:n,stopTimer:a,setStopTimer:s})=>{const[l,x]=c.useState(!1);c.useEffect(()=>{a&&(x(!a),s(!1))},[s,a]);const m=()=>{x(!l)},b=({remainingTime:p})=>{const u=r-p,g=Math.floor(u/60),f=u%60;return t.jsxs(Le,{onClick:m,children:[t.jsx(De,{className:"timer-display-icon",children:l?t.jsx(M,{name:"pause"}):t.jsx(M,{name:"play"})}),t.jsx(_,{children:`
        ${g.toString().padStart(2,"0")} :
        ${f.toString().padStart(2,"0")}
        `}),t.jsxs(_,{children:["Round: ",o]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(Fe,{children:e}),t.jsxs(Me,{children:[t.jsx(re,{size:125,isPlaying:l,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:r,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(n(p=>p+1),{shouldRepeat:!0}),onUpdate:p=>{d(r-p)},children:b}),t.jsx(ne,{isRunning:l,animationDuration:r})]}),t.jsx(ze,{onClick:m,children:l?t.jsx(M,{name:"pause"}):t.jsx(M,{name:"play"})})]})};oe.propTypes={timerLabel:h.string.isRequired,duration:h.number.isRequired,setTimer:h.func.isRequired,roundsCount:h.number.isRequired,setRoundsCount:h.func.isRequired,stopTimer:h.bool.isRequired,setStopTimer:h.func.isRequired};const Ie=i.div`
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
`,qe=i.input`
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
`,Pe=i.span`
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
`,Be=i.span`
  position: absolute;
  right: 15px;
  bottom: 12px;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    right: 15px;
    bottom: 16px;
  }
`,Ae=i.div`
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
`,We=i.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,Ne=i.div`
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
`,Ue=i.button`
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
`;function se({onSubmit:e}){const[r,d]=c.useState(new Date),[o,n]=c.useState(""),[a,s]=c.useState(!1),l=c.useRef(null),x=c.useRef(null),m=g=>{const f=g.target.value;x.current&&clearTimeout(x.current),!(f.length>11)&&(/^[0-9]*$/.test(f)||f===""?(n(f),s(!1)):(s(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{s(!1)},3e3)))};c.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const b=g=>{d(g)},p=()=>{e({time:Number(o),date:r})},u=te(r,"dd.MM.yyyy");return t.jsxs(Ie,{children:[t.jsx("label",{children:t.jsxs(K,{children:[t.jsx(X,{children:"Add time"}),t.jsx(qe,{placeholder:"min 60 sec.",type:"text",value:o,onChange:m}),t.jsx(Be,{children:"sec."}),t.jsx(pe,{in:a,nodeRef:l,timeout:300,classNames:"error-message",unmountOnExit:!0,children:t.jsx(Pe,{ref:l,children:"Enter a number"})})]})}),t.jsxs(K,{children:[t.jsx(X,{children:"Choice day"}),t.jsx(ve,{maxDate:new Date,onChange:b,value:r,children:t.jsxs(Ae,{children:[t.jsx(We,{children:u}),t.jsx(Ne,{children:t.jsx(M,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(Ue,{onClick:p,children:"Add to diary"})})]})}se.propTypes={onSubmit:h.func.isRequired};const Oe=i.ul`
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
`,Ve=i.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Ge=i.p`
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
`,ae=({exercise:e})=>{const{bodyPart:r,equipment:d,name:o,target:n,time:a}=e;return t.jsx(Oe,{children:[{label:"Name",value:o},{label:"Target",value:n},{label:"Body Part",value:r},{label:"Equipment",value:d},{label:"Time",value:`${a} minutes`}].map(({label:s,value:l})=>t.jsxs(Ve,{children:[t.jsx(Ge,{children:s}),t.jsx(He,{children:l})]},s+l))})};ae.propTypes={exercise:h.shape({bodyPart:h.string.isRequired,equipment:h.string.isRequired,name:h.string.isRequired,target:h.string.isRequired,time:h.number.isRequired}).isRequired};const Ye=i.div`
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
`,Qe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,_e=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,Ke=i.img`
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
`,Xe=i.div`
  display: flex;
  gap: 8px;
`,Je=i.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,Ze=i.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,et=i.div`
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
`,tt=i.button`
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
`,it=i.button`
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
`;function le({exercise:e,openModalExerciseSuccess:r,closeModalExerciseForm:d,setModalExerciseSuccessData:o}){const{_id:n,gifUrl:a,burnedCalories:s,time:l}=e,[x,m]=c.useState(!1),[b,p]=c.useState(!1),[u,g]=c.useState(""),[f,v]=c.useState(""),[$,k]=c.useState(0),[w,y]=c.useState(0),[S,E]=c.useState(!1),[R]=he(),j=s/l,T=Math.floor($/60*j+w*s),D=$+w*l*60,F=async({time:z=D,date:W=new Date})=>{E(!0);const I=Math.floor(z/60*j+w*s),q={exercise_ID:n,date:te(W,"yyyy-MM-dd"),time:z,calories:I};if(q.time<60){g(`To achieve results, the training time should be more than one minute. Your time ${q.time} sec.`),v("Notice: "),p(!0);return}const{error:V}=await R(q);V?(v("Error: "),g(V.data.message),p(!0)):(r(),d(),o(q))},A=()=>{E(!0),m(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Ke,{src:a,alt:"Exercise technique"}),t.jsx(oe,{timerLabel:C.timerLabel,stopTimer:S,setStopTimer:E,roundsCount:w,setRoundsCount:y,setTimer:k,duration:l*60}),t.jsxs(Xe,{children:[t.jsx(Je,{children:C.caloriesLabel}),t.jsx(Ze,{children:T})]})]}),t.jsxs(_e,{children:[t.jsx(ae,{exercise:e}),t.jsxs(et,{children:[t.jsx(tt,{onClick:A,children:C.openPastDaysFormBtnName}),t.jsx(it,{onClick:F,children:C.addExerciseBtnName})]})]}),t.jsx(P,{onShow:x,onClose:()=>{m(!1)},children:t.jsx(se,{onSubmit:F})}),t.jsx(P,{onShow:b,onClose:()=>{p(!1)},children:t.jsx(xe,{notificationType:f,message:u})})]})}le.propTypes={openModalExerciseSuccess:h.func.isRequired,closeModalExerciseForm:h.func.isRequired,setModalExerciseSuccessData:h.func.isRequired,exercise:h.shape({gifUrl:h.string.isRequired,burnedCalories:h.number.isRequired,time:h.number.isRequired}).isRequired};const rt=i.div`
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
`,nt=i.img`
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
`,ot=i.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,st=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,J=i.span`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
`,Z=i.span`
  color: ${({theme:e})=>e.color.orangeFirst};
`,at=i.button`
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
`,lt=i(ee)`
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
`,ct=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayFirst};
  transition: stroke 300ms ease-in-out;
`,dt="/power-pulse/assets/thumb-up-bc557cec.webp";function ce({closeModalExerciseSuccess:e,modalExerciseSuccessData:r}){const{time:d=0,calories:o=0}=r,n={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(rt,{children:[t.jsx(nt,{src:dt,alt:"thumb up"}),t.jsx(ot,{children:n.wellDone}),t.jsxs(st,{children:[t.jsxs(N,{children:[t.jsx(J,{children:n.timeText}),t.jsxs(Z,{children:[" ",d]})]}),t.jsxs(N,{children:[t.jsx(J,{children:n.caloriesText}),t.jsx(Z,{children:o})]})]}),t.jsx(at,{onClick:e,type:"button",children:n.nextExerciseText}),t.jsxs(lt,{to:`/${ue.DIARY}`,children:[t.jsxs(N,{children:[" ",n.diaryLinkText]}),t.jsx(ct,{children:t.jsx("use",{href:`${B}#arrow-add-prod`})})]})]})}ce.propTypes={closeModalExerciseSuccess:h.func.isRequired,modalExerciseSuccessData:h.shape({time:h.number,calories:h.number})};const pt=i.div`
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
`,ht=i.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 25px;
  }
`,xt=i.svg`
  max-width: 24px;
  max-height: 24px;
`,ut=i.svg`
  width: 16px;
  height: 16px;
`,mt=i.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,gt=i.div`
  display: flex;
  align-items: center;
`,ft=i.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,bt=i.h2`
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
`,wt=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 12px;
  }
`,yt=i.button`
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
`,vt=i.p`
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
`;function de(e){const{bodyPart:r,gifUrl:d,name:o,target:n,burnedCalories:a}=e,[s,l]=c.useState(!1),[x,m]=c.useState(!1),[b,p]=c.useState({}),u=()=>{l(!0)},g=()=>{m(!0)},f=()=>{l(!1)},v=()=>{m(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(pt,{gifUrl:d,children:[t.jsxs(ht,{children:[t.jsx(mt,{children:"WORKOUT"}),t.jsx(gt,{className:"start",children:t.jsxs(yt,{onClick:u,children:[t.jsx(vt,{className:"start",children:"Start"}),t.jsx(ut,{children:t.jsx("use",{href:`${B}#arrow-add-prod-orange`})})]})})]}),t.jsxs(wt,{children:[t.jsx(xt,{children:t.jsx("use",{href:`${B}#run-man`})}),t.jsx(bt,{children:o})]}),t.jsxs(ft,{children:[t.jsxs(U,{children:["Burned calories:",t.jsx(O,{children:a})]}),t.jsxs(U,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(O,{children:r})]}),t.jsxs(U,{className:"target",children:["Target:",t.jsx(O,{children:n})]})]})]}),t.jsx(P,{onShow:s,onClose:f,children:t.jsx(le,{exercise:e,openModalExerciseSuccess:g,closeModalExerciseForm:f,setModalExerciseSuccessData:p})}),t.jsx(P,{onShow:x,onClose:v,children:t.jsx(ce,{modalExerciseSuccessData:b,closeModalExerciseSuccess:v})})]})}de.propTypes={bodyPart:h.string.isRequired,name:h.string.isRequired,target:h.string.isRequired,burnedCalories:h.number.isRequired};const kt=i.ul`
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
`,jt=i.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(24 / 16);
  }
`,$t=i(ee)`
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
`,St=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,Et=i.div`
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
`;function Dt(){var R;const e=me(),[r,d]=c.useState(1),[o,n]=c.useState(!0),[a,s]=c.useState([]),{subcategory:l}=ge(),{ref:x}=ye({onChange:j=>j&&n(!0)}),m=fe(),b=c.useRef(((R=m.state)==null?void 0:R.from)??"/exercises"),p=c.useRef(),[u,{isLoading:g,isError:f,error:v}]=be(),{data:$,isFetching:k,isError:w,error:y}=we(e),S=$&&$.filter(j=>j.name===l)[0],E=S?S.imgURL:null;return c.useEffect(()=>{o&&(async()=>{try{const T=await u({page:r,[e]:l}).unwrap();if(T.data.length===0)return;s(r===1?[...T.data]:D=>[...D,...T.data]),n(!1),d(r+1)}catch(T){console.log(T)}})()},[r,u,o,e,l]),t.jsxs("div",{children:[t.jsxs($t,{to:b.current,children:[t.jsx(St,{children:t.jsx("use",{href:`${B}#icon-arrow`})}),t.jsx(jt,{children:"Back"})]}),t.jsx(kt,{ref:p,children:a==null?void 0:a.map(({_id:j,name:T,bodyPart:D,burnedCalories:F,target:A,gifUrl:C,time:z,equipment:W},I)=>t.jsx("li",{ref:I===a.length-1?x:null,children:t.jsx(de,{_id:j,bodyPart:D,equipment:W,gifUrl:C,name:T,target:A,burnedCalories:F,time:z},j)},I))}),t.jsx(Et,{category:e,img:E}),t.jsx(G,{isLoading:k,isError:w,error:y}),t.jsx(G,{isLoading:g,isError:f,error:v})]})}export{Dt as ExercisesList};
