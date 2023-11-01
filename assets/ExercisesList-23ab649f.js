import{M as L,r as p,n as r,P as x,j as t,I as O,a8 as pe,B as I,l as xe,L as ee,R as he,f as P,a6 as ue,a4 as me,b as ge,a9 as fe,a7 as be,E as G}from"./index-e9fedd03.js";import{u as we}from"./index-636f0d93.js";import{f as te,C as ye}from"./Calendar-4d0f1d17.js";import"./tiny-warning.esm-c932d744.js";var H=typeof window>"u"?p.useEffect:p.useLayoutEffect,ke=({isPlaying:e,duration:i,startAt:l=0,updateInterval:o=0,onComplete:n,onUpdate:a})=>{let[s,d]=p.useState(l),m=p.useRef(0),u=p.useRef(l),b=p.useRef(l*-1e3),c=p.useRef(null),h=p.useRef(null),f=p.useRef(null),w=j=>{let g=j/1e3;if(h.current===null){h.current=g,c.current=requestAnimationFrame(w);return}let y=g-h.current,S=m.current+y;h.current=g,m.current=S;let E=u.current+(o===0?S:(S/o|0)*o),T=u.current+S,v=typeof i=="number"&&T>=i;d(v?i:E),v||(c.current=requestAnimationFrame(w))},k=()=>{c.current&&cancelAnimationFrame(c.current),f.current&&clearTimeout(f.current),h.current=null},$=p.useCallback(j=>{k(),m.current=0;let g=typeof j=="number"?j:l;u.current=g,d(g),e&&(c.current=requestAnimationFrame(w))},[e,l]);return H(()=>{if(a==null||a(s),i&&s>=i){b.current+=i*1e3;let{shouldRepeat:j=!1,delay:g=0,newStartAt:y}=(n==null?void 0:n(b.current/1e3))||{};j&&(f.current=setTimeout(()=>$(y),g*1e3))}},[s,i]),H(()=>(e&&(c.current=requestAnimationFrame(w)),k),[e,i,o]),{elapsedTime:s,reset:$}},je=(e,i,l)=>{let o=e/2,n=i/2,a=o-n,s=2*a,d=l==="clockwise"?"1,0":"0,1",m=2*Math.PI*a;return{path:`m ${o},${n} a ${a},${a} 0 ${d} 0,${s} a ${a},${a} 0 ${d} 0,-${s}`,pathLength:m}},Y=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,ve=e=>({position:"relative",width:e,height:e}),$e={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(e,i,l,o,n)=>{if(o===0)return i;let a=(n?o-e:e)/o;return i+l*a},Q=e=>{var i,l;return(l=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,n,a,s)=>`#${n}${n}${a}${a}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:i.map(o=>parseInt(o,16)))!=null?l:[]},Se=(e,i)=>{var l;let{colors:o,colorsTime:n,isSmoothColorTransition:a=!0}=e;if(typeof o=="string")return o;let s=(l=n==null?void 0:n.findIndex((h,f)=>h>=i&&i>=n[f+1]))!=null?l:-1;if(!n||s===-1)return o[0];if(!a)return o[s];let d=n[s]-i,m=n[s]-n[s+1],u=Q(o[s]),b=Q(o[s+1]),c=!!e.isGrowing;return`rgb(${u.map((h,f)=>ie(d,h,b[f]-h,m,c)|0).join(",")})`},Ee=e=>{let{duration:i,initialRemainingTime:l,updateInterval:o,size:n=180,strokeWidth:a=12,trailStrokeWidth:s,isPlaying:d=!1,isGrowing:m=!1,rotation:u="clockwise",onComplete:b,onUpdate:c}=e,h=p.useRef(),f=Math.max(a,s??0),{path:w,pathLength:k}=je(n,f,u),{elapsedTime:$}=ke({isPlaying:d,duration:i,startAt:Y(i,l),updateInterval:o,onUpdate:typeof c=="function"?g=>{let y=Math.ceil(i-g);y!==h.current&&(h.current=y,c(y))}:void 0,onComplete:typeof b=="function"?g=>{var y;let{shouldRepeat:S,delay:E,newInitialRemainingTime:T}=(y=b(g))!=null?y:{};if(S)return{shouldRepeat:S,delay:E,newStartAt:Y(i,T)}}:void 0}),j=i-$;return{elapsedTime:$,path:w,pathLength:k,remainingTime:Math.ceil(j),rotation:u,size:n,stroke:Se(e,j),strokeDashoffset:ie($,0,k,i,m),strokeWidth:a}},re=e=>{let{children:i,strokeLinecap:l,trailColor:o,trailStrokeWidth:n}=e,{path:a,pathLength:s,stroke:d,strokeDashoffset:m,remainingTime:u,elapsedTime:b,size:c,strokeWidth:h}=Ee(e);return L.createElement("div",{style:ve(c)},L.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:o??"#d9d9d9",strokeWidth:n??h}),L.createElement("path",{d:a,fill:"none",stroke:d,strokeLinecap:l??"round",strokeWidth:h,strokeDasharray:s,strokeDashoffset:m})),typeof i=="function"&&L.createElement("div",{style:$e},i({remainingTime:u,elapsedTime:b,color:d})))};re.displayName="CountdownCircleTimer";const Re=r.div`
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
`,Te=r.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ne=({isRunning:e,animationDuration:i})=>t.jsx(Re,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(Te,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ne.propTypes={isRunning:x.bool.isRequired,animationDuration:x.number.isRequired};const Ce=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,De=r.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,Le=r.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,K=r.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
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

  svg{
    width: 15px;
    height: 15px;
  }

  :hover {
    transform: scale(1.1);
  }
`,oe=({timerLabel:e,duration:i,setTimer:l,roundsCount:o,setRoundsCount:n,stopTimer:a,setStopTimer:s})=>{const[d,m]=p.useState(!1);p.useEffect(()=>{a&&(m(!a),s(!1))},[s,a]);const u=()=>{m(!d)},b=({remainingTime:c})=>{const h=i-c,f=Math.floor(h/60),w=h%60;return t.jsxs(Ce,{children:[t.jsx(K,{children:`
        ${f.toString().padStart(2,"0")} :
        ${w.toString().padStart(2,"0")}
        `}),t.jsxs(K,{children:["Round: ",o]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(Le,{children:e}),t.jsxs(De,{children:[t.jsx(re,{size:125,isPlaying:d,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(n(c=>c+1),{shouldRepeat:!0}),onUpdate:c=>{l(i-c)},children:b}),t.jsx(ne,{isRunning:d,animationDuration:i})]}),t.jsx(Fe,{onClick:u,children:d?t.jsx(O,{name:"pause"}):t.jsx(O,{name:"play"})})]})};oe.propTypes={timerLabel:x.string.isRequired,duration:x.number.isRequired,setTimer:x.func.isRequired,roundsCount:x.number.isRequired,setRoundsCount:x.func.isRequired,stopTimer:x.bool.isRequired,setStopTimer:x.func.isRequired};const Me=r.div`
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
`,ze=r.div`
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
`,Ie=r.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,Pe=r.div`
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
`,Be=r.button`
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
`;function se({onSubmit:e}){const[i,l]=p.useState(new Date),[o,n]=p.useState(""),a=u=>{n(u.target.value)},s=u=>{l(u)},d=()=>{e({time:Number(o),date:i})},m=te(i,"dd.MM.yyyy");return t.jsxs(Me,{children:[t.jsx("label",{children:t.jsxs(X,{children:[t.jsx(_,{children:"Add time"}),t.jsx(qe,{placeholder:"min 60 sec.",type:"number",value:o,onChange:a})]})}),t.jsxs(X,{children:[t.jsx(_,{children:"Choice day"}),t.jsx(ye,{maxDate:new Date,onChange:s,value:i,children:t.jsxs(ze,{children:[t.jsx(Ie,{children:m}),t.jsx(Pe,{children:t.jsx(O,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(Be,{onClick:d,children:"Add to diary"})})]})}se.propTypes={onSubmit:x.func.isRequired};const Ae=r.ul`
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
`,We=r.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Ne=r.p`
  color: ${({theme:e})=>e.color.white}66;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Ue=r.p`
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
`,ae=({exercise:e})=>{const{bodyPart:i,equipment:l,name:o,target:n,time:a}=e;return t.jsx(Ae,{children:[{label:"Name",value:o},{label:"Target",value:n},{label:"Body Part",value:i},{label:"Equipment",value:l},{label:"Time",value:`${a} minutes`}].map(({label:s,value:d})=>t.jsxs(We,{children:[t.jsx(Ne,{children:s}),t.jsx(Ue,{children:d})]},s+d))})};ae.propTypes={exercise:x.shape({bodyPart:x.string.isRequired,equipment:x.string.isRequired,name:x.string.isRequired,target:x.string.isRequired,time:x.number.isRequired}).isRequired};const Oe=r.div`
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
`,Ve=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ge=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,He=r.img`
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
`,Ye=r.div`
  display: flex;
  gap: 8px;
`,Qe=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,Ke=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,Xe=r.div`
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
`,_e=r.button`
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
`,Je=r.button`
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
`;function le({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:l,setModalExerciseSuccessData:o}){const{_id:n,gifUrl:a,burnedCalories:s,time:d}=e,[m,u]=p.useState(!1),[b,c]=p.useState(!1),[h,f]=p.useState(""),[w,k]=p.useState(""),[$,j]=p.useState(0),[g,y]=p.useState(0),[S,E]=p.useState(!1),[T]=pe(),v=s/d,R=Math.floor($/60*v+g*s),D=$+g*d*60,F=async({time:M=D,date:A=new Date})=>{E(!0);const q=Math.floor(M/60*v+g*s),z={exercise_ID:n,date:te(A,"yyyy-MM-dd"),time:M,calories:q};if(z.time<60){f(`To achieve results, the training time should be more than one minute. Your time ${z.time} sec.`),k("Notice: "),c(!0);return}const{error:V}=await T(z);V?(k("Error: "),f(V.data.message),c(!0)):(i(),l(),o(z))},B=()=>{E(!0),u(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Oe,{children:[t.jsxs(Ve,{children:[t.jsx(He,{src:a,alt:"Exercise technique"}),t.jsx(oe,{timerLabel:C.timerLabel,stopTimer:S,setStopTimer:E,roundsCount:g,setRoundsCount:y,setTimer:j,duration:d*60}),t.jsxs(Ye,{children:[t.jsx(Qe,{children:C.caloriesLabel}),t.jsx(Ke,{children:R})]})]}),t.jsxs(Ge,{children:[t.jsx(ae,{exercise:e}),t.jsxs(Xe,{children:[t.jsx(_e,{onClick:B,children:C.openPastDaysFormBtnName}),t.jsx(Je,{onClick:F,children:C.addExerciseBtnName})]})]}),t.jsx(I,{onShow:m,onClose:()=>{u(!1)},children:t.jsx(se,{onSubmit:F})}),t.jsx(I,{onShow:b,onClose:()=>{c(!1)},children:t.jsx(xe,{notificationType:w,message:h})})]})}le.propTypes={openModalExerciseSuccess:x.func.isRequired,closeModalExerciseForm:x.func.isRequired,setModalExerciseSuccessData:x.func.isRequired,exercise:x.shape({gifUrl:x.string.isRequired,burnedCalories:x.number.isRequired,time:x.number.isRequired}).isRequired};const Ze=r.div`
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
`,et=r.img`
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
`,tt=r.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,it=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,W=r.p`
  font-size: 14px;
  line-height: 1.29;
`,J=r.span`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
`,Z=r.span`
  color: ${({theme:e})=>e.color.orangeFirst};
`,rt=r.button`
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
`,nt=r(ee)`
  color: ${({theme:e})=>e.color.grayFirst};
  display: flex;
  align-items: center;
  gap: 8px;
`,ot=r.svg`
  width: 16px;
  height: 16px;
`,st="/power-pulse/assets/thumb-up-bc557cec.webp";function de({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:l=0,calories:o=0}=i,n={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(Ze,{children:[t.jsx(et,{src:st,alt:"thumb up"}),t.jsx(tt,{children:n.wellDone}),t.jsxs(it,{children:[t.jsxs(W,{children:[t.jsx(J,{children:n.timeText}),t.jsxs(Z,{children:[" ",l]})]}),t.jsxs(W,{children:[t.jsx(J,{children:n.caloriesText}),t.jsx(Z,{children:o})]})]}),t.jsx(rt,{onClick:e,type:"button",children:n.nextExerciseText}),t.jsxs(nt,{to:`/${he.DIARY}`,children:[t.jsxs(W,{children:[" ",n.diaryLinkText]}),t.jsx(ot,{children:t.jsx("use",{href:`${P}#arrow-add-prod`})})]})]})}de.propTypes={closeModalExerciseSuccess:x.func.isRequired,modalExerciseSuccessData:x.shape({time:x.number,calories:x.number})};const at=r.div`
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
`,lt=r.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 25px;
  }
`,dt=r.svg`
  max-width: 24px;
  max-height: 24px;
`,ct=r.svg`
  width: 16px;
  height: 16px;
`,pt=r.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,xt=r.div`
  display: flex;
  align-items: center;
`,ht=r.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,ut=r.h2`
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
`,mt=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 12px;
  }
`,gt=r.button`
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
`,ft=r.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,N=r.p`
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
`,U=r.span`
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
`;function ce(e){const{bodyPart:i,gifUrl:l,name:o,target:n,burnedCalories:a}=e,[s,d]=p.useState(!1),[m,u]=p.useState(!1),[b,c]=p.useState({}),h=()=>{d(!0)},f=()=>{u(!0)},w=()=>{d(!1)},k=()=>{u(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(at,{gifUrl:l,children:[t.jsxs(lt,{children:[t.jsx(pt,{children:"WORKOUT"}),t.jsx(xt,{className:"start",children:t.jsxs(gt,{onClick:h,children:[t.jsx(ft,{className:"start",children:"Start"}),t.jsx(ct,{children:t.jsx("use",{href:`${P}#arrow-add-prod-orange`})})]})})]}),t.jsxs(mt,{children:[t.jsx(dt,{children:t.jsx("use",{href:`${P}#run-man`})}),t.jsx(ut,{children:o})]}),t.jsxs(ht,{children:[t.jsxs(N,{children:["Burned calories:",t.jsx(U,{children:a})]}),t.jsxs(N,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(U,{children:i})]}),t.jsxs(N,{className:"target",children:["Target:",t.jsx(U,{children:n})]})]})]}),t.jsx(I,{onShow:s,onClose:w,children:t.jsx(le,{exercise:e,openModalExerciseSuccess:f,closeModalExerciseForm:w,setModalExerciseSuccessData:c})}),t.jsx(I,{onShow:m,onClose:k,children:t.jsx(de,{modalExerciseSuccessData:b,closeModalExerciseSuccess:k})})]})}ce.propTypes={bodyPart:x.string.isRequired,name:x.string.isRequired,target:x.string.isRequired,burnedCalories:x.number.isRequired};const bt=r.ul`
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
`,wt=r.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(24 / 16);
  }
`,yt=r(ee)`
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
`;function Rt(){var T;const e=ue(),[i,l]=p.useState(1),[o,n]=p.useState(!0),[a,s]=p.useState([]),{subcategory:d}=me(),{ref:m}=we({onChange:v=>v&&n(!0)}),u=ge(),b=p.useRef(((T=u.state)==null?void 0:T.from)??"/exercises"),c=p.useRef(),[h,{isLoading:f,isError:w,error:k}]=fe(),{data:$,isFetching:j,isError:g,error:y}=be(e),S=$&&$.filter(v=>v.name===d)[0],E=S?S.imgURL:null;return p.useEffect(()=>{o&&(async()=>{try{const R=await h({page:i,[e]:d}).unwrap();if(R.data.length===0)return;s(i===1?[...R.data]:D=>[...D,...R.data]),n(!1),l(i+1)}catch(R){console.log(R)}})()},[i,h,o,e,d]),t.jsxs("div",{children:[t.jsxs(yt,{to:b.current,children:[t.jsx(kt,{children:t.jsx("use",{href:`${P}#icon-arrow`})}),t.jsx(wt,{children:"Back"})]}),t.jsx(bt,{ref:c,children:a==null?void 0:a.map(({_id:v,name:R,bodyPart:D,burnedCalories:F,target:B,gifUrl:C,time:M,equipment:A},q)=>t.jsx("li",{ref:q===a.length-1?m:null,children:t.jsx(ce,{_id:v,bodyPart:D,equipment:A,gifUrl:C,name:R,target:B,burnedCalories:F,time:M},v)},q))}),t.jsx(jt,{category:e,img:E}),t.jsx(G,{isLoading:j,isError:g,error:y}),t.jsx(G,{isLoading:f,isError:w,error:k})]})}export{Rt as ExercisesList};
