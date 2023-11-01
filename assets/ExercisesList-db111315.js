import{U as L,r as p,n as r,P as x,j as t,I as z,ad as pe,B as P,l as xe,L as ee,R as he,f as B,ab as ue,a9 as me,b as ge,ae as fe,ac as be,E as G}from"./index-07072d94.js";import{u as we}from"./index-032c003b.js";import{f as te,C as ye}from"./Calendar-567d7c26.js";import"./tiny-warning.esm-c932d744.js";var H=typeof window>"u"?p.useEffect:p.useLayoutEffect,ve=({isPlaying:e,duration:i,startAt:l=0,updateInterval:o=0,onComplete:n,onUpdate:a})=>{let[s,d]=p.useState(l),m=p.useRef(0),u=p.useRef(l),b=p.useRef(l*-1e3),c=p.useRef(null),h=p.useRef(null),f=p.useRef(null),w=k=>{let g=k/1e3;if(h.current===null){h.current=g,c.current=requestAnimationFrame(w);return}let y=g-h.current,S=m.current+y;h.current=g,m.current=S;let E=u.current+(o===0?S:(S/o|0)*o),R=u.current+S,j=typeof i=="number"&&R>=i;d(j?i:E),j||(c.current=requestAnimationFrame(w))},v=()=>{c.current&&cancelAnimationFrame(c.current),f.current&&clearTimeout(f.current),h.current=null},$=p.useCallback(k=>{v(),m.current=0;let g=typeof k=="number"?k:l;u.current=g,d(g),e&&(c.current=requestAnimationFrame(w))},[e,l]);return H(()=>{if(a==null||a(s),i&&s>=i){b.current+=i*1e3;let{shouldRepeat:k=!1,delay:g=0,newStartAt:y}=(n==null?void 0:n(b.current/1e3))||{};k&&(f.current=setTimeout(()=>$(y),g*1e3))}},[s,i]),H(()=>(e&&(c.current=requestAnimationFrame(w)),v),[e,i,o]),{elapsedTime:s,reset:$}},ke=(e,i,l)=>{let o=e/2,n=i/2,a=o-n,s=2*a,d=l==="clockwise"?"1,0":"0,1",m=2*Math.PI*a;return{path:`m ${o},${n} a ${a},${a} 0 ${d} 0,${s} a ${a},${a} 0 ${d} 0,-${s}`,pathLength:m}},Y=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,je=e=>({position:"relative",width:e,height:e}),$e={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(e,i,l,o,n)=>{if(o===0)return i;let a=(n?o-e:e)/o;return i+l*a},Q=e=>{var i,l;return(l=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,n,a,s)=>`#${n}${n}${a}${a}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:i.map(o=>parseInt(o,16)))!=null?l:[]},Se=(e,i)=>{var l;let{colors:o,colorsTime:n,isSmoothColorTransition:a=!0}=e;if(typeof o=="string")return o;let s=(l=n==null?void 0:n.findIndex((h,f)=>h>=i&&i>=n[f+1]))!=null?l:-1;if(!n||s===-1)return o[0];if(!a)return o[s];let d=n[s]-i,m=n[s]-n[s+1],u=Q(o[s]),b=Q(o[s+1]),c=!!e.isGrowing;return`rgb(${u.map((h,f)=>ie(d,h,b[f]-h,m,c)|0).join(",")})`},Ee=e=>{let{duration:i,initialRemainingTime:l,updateInterval:o,size:n=180,strokeWidth:a=12,trailStrokeWidth:s,isPlaying:d=!1,isGrowing:m=!1,rotation:u="clockwise",onComplete:b,onUpdate:c}=e,h=p.useRef(),f=Math.max(a,s??0),{path:w,pathLength:v}=ke(n,f,u),{elapsedTime:$}=ve({isPlaying:d,duration:i,startAt:Y(i,l),updateInterval:o,onUpdate:typeof c=="function"?g=>{let y=Math.ceil(i-g);y!==h.current&&(h.current=y,c(y))}:void 0,onComplete:typeof b=="function"?g=>{var y;let{shouldRepeat:S,delay:E,newInitialRemainingTime:R}=(y=b(g))!=null?y:{};if(S)return{shouldRepeat:S,delay:E,newStartAt:Y(i,R)}}:void 0}),k=i-$;return{elapsedTime:$,path:w,pathLength:v,remainingTime:Math.ceil(k),rotation:u,size:n,stroke:Se(e,k),strokeDashoffset:ie($,0,v,i,m),strokeWidth:a}},re=e=>{let{children:i,strokeLinecap:l,trailColor:o,trailStrokeWidth:n}=e,{path:a,pathLength:s,stroke:d,strokeDashoffset:m,remainingTime:u,elapsedTime:b,size:c,strokeWidth:h}=Ee(e);return L.createElement("div",{style:je(c)},L.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:o??"#d9d9d9",strokeWidth:n??h}),L.createElement("path",{d:a,fill:"none",stroke:d,strokeLinecap:l??"round",strokeWidth:h,strokeDasharray:s,strokeDashoffset:m})),typeof i=="function"&&L.createElement("div",{style:$e},i({remainingTime:u,elapsedTime:b,color:d})))};re.displayName="CountdownCircleTimer";const Te=r.div`
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
`,Re=r.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ne=({isRunning:e,animationDuration:i})=>t.jsx(Te,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(Re,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ne.propTypes={isRunning:x.bool.isRequired,animationDuration:x.number.isRequired};const Ce=r.div`
  position: absolute;
  rotate: 180deg;
  z-index: -1;
  top: 50%;
  left: 52%;
  translate: -50% -50%;

  svg {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    stroke: #5b5a5a;
    fill: #262625;

    transition:
      scale 200ms ease-in-out,
      opacity 200ms ease-in-out;
  }
`,De=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  z-index: 100;
`,Le=r.div`
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
`,ze=r.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,K=r.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
  user-select: none;
`,Fe=r.button`
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
`,oe=({timerLabel:e,duration:i,setTimer:l,roundsCount:o,setRoundsCount:n,stopTimer:a,setStopTimer:s})=>{const[d,m]=p.useState(!1);p.useEffect(()=>{a&&(m(!a),s(!1))},[s,a]);const u=()=>{m(!d)},b=({remainingTime:c})=>{const h=i-c,f=Math.floor(h/60),w=h%60;return t.jsxs(De,{onClick:u,children:[t.jsx(Ce,{className:"timer-display-icon",children:d?t.jsx(z,{name:"pause"}):t.jsx(z,{name:"play"})}),t.jsx(K,{children:`
        ${f.toString().padStart(2,"0")} :
        ${w.toString().padStart(2,"0")}
        `}),t.jsxs(K,{children:["Round: ",o]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(ze,{children:e}),t.jsxs(Le,{children:[t.jsx(re,{size:125,isPlaying:d,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(n(c=>c+1),{shouldRepeat:!0}),onUpdate:c=>{l(i-c)},children:b}),t.jsx(ne,{isRunning:d,animationDuration:i})]}),t.jsx(Fe,{onClick:u,children:d?t.jsx(z,{name:"pause"}):t.jsx(z,{name:"play"})})]})};oe.propTypes={timerLabel:x.string.isRequired,duration:x.number.isRequired,setTimer:x.func.isRequired,roundsCount:x.number.isRequired,setRoundsCount:x.func.isRequired,stopTimer:x.bool.isRequired,setStopTimer:x.func.isRequired};const Me=r.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 25px;
  flex-direction: column;
`,X=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`,_=r.span`
  color: ${({theme:e})=>e.color.label};
  font-size: 16px;
  line-height: 1.29;
`,qe=r.input`
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
`,Ie=r.div`
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
`,Pe=r.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,Be=r.div`
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
`,Ae=r.button`
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
`;function se({onSubmit:e}){const[i,l]=p.useState(new Date),[o,n]=p.useState(""),a=u=>{n(u.target.value)},s=u=>{l(u)},d=()=>{e({time:Number(o),date:i})},m=te(i,"dd.MM.yyyy");return t.jsxs(Me,{children:[t.jsx("label",{children:t.jsxs(X,{children:[t.jsx(_,{children:"Add time"}),t.jsx(qe,{placeholder:"min 60 sec.",type:"number",value:o,onChange:a})]})}),t.jsxs(X,{children:[t.jsx(_,{children:"Choice day"}),t.jsx(ye,{maxDate:new Date,onChange:s,value:i,children:t.jsxs(Ie,{children:[t.jsx(Pe,{children:m}),t.jsx(Be,{children:t.jsx(z,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(Ae,{onClick:d,children:"Add to diary"})})]})}se.propTypes={onSubmit:x.func.isRequired};const We=r.ul`
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
`,Ne=r.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Ue=r.p`
  color: ${({theme:e})=>e.color.white}66;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Oe=r.p`
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
`,ae=({exercise:e})=>{const{bodyPart:i,equipment:l,name:o,target:n,time:a}=e;return t.jsx(We,{children:[{label:"Name",value:o},{label:"Target",value:n},{label:"Body Part",value:i},{label:"Equipment",value:l},{label:"Time",value:`${a} minutes`}].map(({label:s,value:d})=>t.jsxs(Ne,{children:[t.jsx(Ue,{children:s}),t.jsx(Oe,{children:d})]},s+d))})};ae.propTypes={exercise:x.shape({bodyPart:x.string.isRequired,equipment:x.string.isRequired,name:x.string.isRequired,target:x.string.isRequired,time:x.number.isRequired}).isRequired};const Ve=r.div`
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
`,Ge=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,He=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,Ye=r.img`
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
`,Qe=r.div`
  display: flex;
  gap: 8px;
`,Ke=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,Xe=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,_e=r.div`
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
`,Je=r.button`
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
`,Ze=r.button`
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
`;function le({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:l,setModalExerciseSuccessData:o}){const{_id:n,gifUrl:a,burnedCalories:s,time:d}=e,[m,u]=p.useState(!1),[b,c]=p.useState(!1),[h,f]=p.useState(""),[w,v]=p.useState(""),[$,k]=p.useState(0),[g,y]=p.useState(0),[S,E]=p.useState(!1),[R]=pe(),j=s/d,T=Math.floor($/60*j+g*s),D=$+g*d*60,F=async({time:M=D,date:W=new Date})=>{E(!0);const q=Math.floor(M/60*j+g*s),I={exercise_ID:n,date:te(W,"yyyy-MM-dd"),time:M,calories:q};if(I.time<60){f(`To achieve results, the training time should be more than one minute. Your time ${I.time} sec.`),v("Notice: "),c(!0);return}const{error:V}=await R(I);V?(v("Error: "),f(V.data.message),c(!0)):(i(),l(),o(I))},A=()=>{E(!0),u(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Ve,{children:[t.jsxs(Ge,{children:[t.jsx(Ye,{src:a,alt:"Exercise technique"}),t.jsx(oe,{timerLabel:C.timerLabel,stopTimer:S,setStopTimer:E,roundsCount:g,setRoundsCount:y,setTimer:k,duration:d*60}),t.jsxs(Qe,{children:[t.jsx(Ke,{children:C.caloriesLabel}),t.jsx(Xe,{children:T})]})]}),t.jsxs(He,{children:[t.jsx(ae,{exercise:e}),t.jsxs(_e,{children:[t.jsx(Je,{onClick:A,children:C.openPastDaysFormBtnName}),t.jsx(Ze,{onClick:F,children:C.addExerciseBtnName})]})]}),t.jsx(P,{onShow:m,onClose:()=>{u(!1)},children:t.jsx(se,{onSubmit:F})}),t.jsx(P,{onShow:b,onClose:()=>{c(!1)},children:t.jsx(xe,{notificationType:w,message:h})})]})}le.propTypes={openModalExerciseSuccess:x.func.isRequired,closeModalExerciseForm:x.func.isRequired,setModalExerciseSuccessData:x.func.isRequired,exercise:x.shape({gifUrl:x.string.isRequired,burnedCalories:x.number.isRequired,time:x.number.isRequired}).isRequired};const et=r.div`
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
`,tt=r.img`
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
`,it=r.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,rt=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,N=r.p`
  font-size: 14px;
  line-height: 1.29;
`,J=r.span`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
`,Z=r.span`
  color: ${({theme:e})=>e.color.orangeFirst};
`,nt=r.button`
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
`,ot=r(ee)`
  color: ${({theme:e})=>e.color.grayFirst};
  display: flex;
  align-items: center;
  gap: 8px;
`,st=r.svg`
  width: 16px;
  height: 16px;
`,at="/power-pulse/assets/thumb-up-bc557cec.webp";function de({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:l=0,calories:o=0}=i,n={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(et,{children:[t.jsx(tt,{src:at,alt:"thumb up"}),t.jsx(it,{children:n.wellDone}),t.jsxs(rt,{children:[t.jsxs(N,{children:[t.jsx(J,{children:n.timeText}),t.jsxs(Z,{children:[" ",l]})]}),t.jsxs(N,{children:[t.jsx(J,{children:n.caloriesText}),t.jsx(Z,{children:o})]})]}),t.jsx(nt,{onClick:e,type:"button",children:n.nextExerciseText}),t.jsxs(ot,{to:`/${he.DIARY}`,children:[t.jsxs(N,{children:[" ",n.diaryLinkText]}),t.jsx(st,{children:t.jsx("use",{href:`${B}#arrow-add-prod`})})]})]})}de.propTypes={closeModalExerciseSuccess:x.func.isRequired,modalExerciseSuccessData:x.shape({time:x.number,calories:x.number})};const lt=r.div`
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
`,dt=r.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 25px;
  }
`,ct=r.svg`
  max-width: 24px;
  max-height: 24px;
`,pt=r.svg`
  width: 16px;
  height: 16px;
`,xt=r.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,ht=r.div`
  display: flex;
  align-items: center;
`,ut=r.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,mt=r.h2`
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
`,gt=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 12px;
  }
`,ft=r.button`
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
`,bt=r.p`
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
`;function ce(e){const{bodyPart:i,gifUrl:l,name:o,target:n,burnedCalories:a}=e,[s,d]=p.useState(!1),[m,u]=p.useState(!1),[b,c]=p.useState({}),h=()=>{d(!0)},f=()=>{u(!0)},w=()=>{d(!1)},v=()=>{u(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(lt,{gifUrl:l,children:[t.jsxs(dt,{children:[t.jsx(xt,{children:"WORKOUT"}),t.jsx(ht,{className:"start",children:t.jsxs(ft,{onClick:h,children:[t.jsx(bt,{className:"start",children:"Start"}),t.jsx(pt,{children:t.jsx("use",{href:`${B}#arrow-add-prod-orange`})})]})})]}),t.jsxs(gt,{children:[t.jsx(ct,{children:t.jsx("use",{href:`${B}#run-man`})}),t.jsx(mt,{children:o})]}),t.jsxs(ut,{children:[t.jsxs(U,{children:["Burned calories:",t.jsx(O,{children:a})]}),t.jsxs(U,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(O,{children:i})]}),t.jsxs(U,{className:"target",children:["Target:",t.jsx(O,{children:n})]})]})]}),t.jsx(P,{onShow:s,onClose:w,children:t.jsx(le,{exercise:e,openModalExerciseSuccess:f,closeModalExerciseForm:w,setModalExerciseSuccessData:c})}),t.jsx(P,{onShow:m,onClose:v,children:t.jsx(de,{modalExerciseSuccessData:b,closeModalExerciseSuccess:v})})]})}ce.propTypes={bodyPart:x.string.isRequired,name:x.string.isRequired,target:x.string.isRequired,burnedCalories:x.number.isRequired};const wt=r.ul`
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
`,yt=r.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(24 / 16);
  }
`,vt=r(ee)`
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
`,kt=r.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,jt=r.div`
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
`;function Rt(){var R;const e=ue(),[i,l]=p.useState(1),[o,n]=p.useState(!0),[a,s]=p.useState([]),{subcategory:d}=me(),{ref:m}=we({onChange:j=>j&&n(!0)}),u=ge(),b=p.useRef(((R=u.state)==null?void 0:R.from)??"/exercises"),c=p.useRef(),[h,{isLoading:f,isError:w,error:v}]=fe(),{data:$,isFetching:k,isError:g,error:y}=be(e),S=$&&$.filter(j=>j.name===d)[0],E=S?S.imgURL:null;return p.useEffect(()=>{o&&(async()=>{try{const T=await h({page:i,[e]:d}).unwrap();if(T.data.length===0)return;s(i===1?[...T.data]:D=>[...D,...T.data]),n(!1),l(i+1)}catch(T){console.log(T)}})()},[i,h,o,e,d]),t.jsxs("div",{children:[t.jsxs(vt,{to:b.current,children:[t.jsx(kt,{children:t.jsx("use",{href:`${B}#icon-arrow`})}),t.jsx(yt,{children:"Back"})]}),t.jsx(wt,{ref:c,children:a==null?void 0:a.map(({_id:j,name:T,bodyPart:D,burnedCalories:F,target:A,gifUrl:C,time:M,equipment:W},q)=>t.jsx("li",{ref:q===a.length-1?m:null,children:t.jsx(ce,{_id:j,bodyPart:D,equipment:W,gifUrl:C,name:T,target:A,burnedCalories:F,time:M},j)},q))}),t.jsx(jt,{category:e,img:E}),t.jsx(G,{isLoading:k,isError:g,error:y}),t.jsx(G,{isLoading:f,isError:w,error:v})]})}export{Rt as ExercisesList};