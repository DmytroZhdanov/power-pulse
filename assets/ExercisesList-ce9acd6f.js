import{W as L,r as p,n as r,P as m,j as t,I as G,X as xe,J as A,Y as he,L as ne,R as me,p as B,U as ge,T as fe,b as be,Z as we,V as ye,E as Q}from"./index-a7c8c01f.js";import{u as N}from"./upperCase-5e800fdd.js";import{f as ve,C as je}from"./Calendar-9806edc4.js";import"./tiny-warning.esm-c932d744.js";var X=typeof window>"u"?p.useEffect:p.useLayoutEffect,Se=({isPlaying:e,duration:i,startAt:d=0,updateInterval:n=0,onComplete:o,onUpdate:a})=>{let[s,c]=p.useState(d),u=p.useRef(0),x=p.useRef(d),f=p.useRef(d*-1e3),l=p.useRef(null),h=p.useRef(null),b=p.useRef(null),y=S=>{let g=S/1e3;if(h.current===null){h.current=g,l.current=requestAnimationFrame(y);return}let w=g-h.current,E=u.current+w;h.current=g,u.current=E;let R=x.current+(n===0?E:(E/n|0)*n),T=x.current+E,k=typeof i=="number"&&T>=i;c(k?i:R),k||(l.current=requestAnimationFrame(y))},v=()=>{l.current&&cancelAnimationFrame(l.current),b.current&&clearTimeout(b.current),h.current=null},j=p.useCallback(S=>{v(),u.current=0;let g=typeof S=="number"?S:d;x.current=g,c(g),e&&(l.current=requestAnimationFrame(y))},[e,d]);return X(()=>{if(a==null||a(s),i&&s>=i){f.current+=i*1e3;let{shouldRepeat:S=!1,delay:g=0,newStartAt:w}=(o==null?void 0:o(f.current/1e3))||{};S&&(b.current=setTimeout(()=>j(w),g*1e3))}},[s,i]),X(()=>(e&&(l.current=requestAnimationFrame(y)),v),[e,i,n]),{elapsedTime:s,reset:j}},Ee=(e,i,d)=>{let n=e/2,o=i/2,a=n-o,s=2*a,c=d==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${n},${o} a ${a},${a} 0 ${c} 0,${s} a ${a},${a} 0 ${c} 0,-${s}`,pathLength:u}},H=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,Re=e=>({position:"relative",width:e,height:e}),ke={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},se=(e,i,d,n,o)=>{if(n===0)return i;let a=(o?n-e:e)/n;return i+d*a},J=e=>{var i,d;return(d=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,o,a,s)=>`#${o}${o}${a}${a}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:i.map(n=>parseInt(n,16)))!=null?d:[]},$e=(e,i)=>{var d;let{colors:n,colorsTime:o,isSmoothColorTransition:a=!0}=e;if(typeof n=="string")return n;let s=(d=o==null?void 0:o.findIndex((h,b)=>h>=i&&i>=o[b+1]))!=null?d:-1;if(!o||s===-1)return n[0];if(!a)return n[s];let c=o[s]-i,u=o[s]-o[s+1],x=J(n[s]),f=J(n[s+1]),l=!!e.isGrowing;return`rgb(${x.map((h,b)=>se(c,h,f[b]-h,u,l)|0).join(",")})`},Te=e=>{let{duration:i,initialRemainingTime:d,updateInterval:n,size:o=180,strokeWidth:a=12,trailStrokeWidth:s,isPlaying:c=!1,isGrowing:u=!1,rotation:x="clockwise",onComplete:f,onUpdate:l}=e,h=p.useRef(),b=Math.max(a,s??0),{path:y,pathLength:v}=Ee(o,b,x),{elapsedTime:j}=Se({isPlaying:c,duration:i,startAt:H(i,d),updateInterval:n,onUpdate:typeof l=="function"?g=>{let w=Math.ceil(i-g);w!==h.current&&(h.current=w,l(w))}:void 0,onComplete:typeof f=="function"?g=>{var w;let{shouldRepeat:E,delay:R,newInitialRemainingTime:T}=(w=f(g))!=null?w:{};if(E)return{shouldRepeat:E,delay:R,newStartAt:H(i,T)}}:void 0}),S=i-j;return{elapsedTime:j,path:y,pathLength:v,remainingTime:Math.ceil(S),rotation:x,size:o,stroke:$e(e,S),strokeDashoffset:se(j,0,v,i,u),strokeWidth:a}},oe=e=>{let{children:i,strokeLinecap:d,trailColor:n,trailStrokeWidth:o}=e,{path:a,pathLength:s,stroke:c,strokeDashoffset:u,remainingTime:x,elapsedTime:f,size:l,strokeWidth:h}=Te(e);return L.createElement("div",{style:Re(l)},L.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:n??"#d9d9d9",strokeWidth:o??h}),L.createElement("path",{d:a,fill:"none",stroke:c,strokeLinecap:d??"round",strokeWidth:h,strokeDasharray:s,strokeDashoffset:u})),typeof i=="function"&&L.createElement("div",{style:ke},i({remainingTime:x,elapsedTime:f,color:c})))};oe.displayName="CountdownCircleTimer";const Ce=r.div`
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
`,De=r.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ae=({isRunning:e,animationDuration:i})=>t.jsx(Ce,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(De,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ae.propTypes={isRunning:m.bool.isRequired,animationDuration:m.number.isRequired};const Le=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,Ie=r.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,Me=r.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,K=r.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,ze=r.button`
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
`,ce=({timerLabel:e,duration:i,setTimer:d,roundsCount:n,setRoundsCount:o,stopTimer:a,setStopTimer:s})=>{const[c,u]=p.useState(!1);p.useEffect(()=>{a&&(u(!a),s(!1))},[s,a]);const x=()=>{u(!c)},f=({remainingTime:l})=>{const h=i-l,b=Math.floor(h/60),y=h%60;return t.jsxs(Le,{children:[t.jsx(K,{children:`
        ${b.toString().padStart(2,"0")} :
        ${y.toString().padStart(2,"0")}
        `}),t.jsxs(K,{children:["Round: ",n]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(Me,{children:e}),t.jsxs(Ie,{children:[t.jsx(oe,{size:125,isPlaying:c,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(o(l=>l+1),{shouldRepeat:!0}),onUpdate:l=>{d(i-l)},children:f}),t.jsx(ae,{isRunning:c,animationDuration:i})]}),t.jsx(ze,{onClick:x,children:c?t.jsx(G,{name:"pause"}):t.jsx(G,{name:"play"})})]})};ce.propTypes={timerLabel:m.string.isRequired,duration:m.number.isRequired,setTimer:m.func.isRequired,roundsCount:m.number.isRequired,setRoundsCount:m.func.isRequired,stopTimer:m.bool.isRequired,setStopTimer:m.func.isRequired};const Fe=r.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 25px;
  flex-direction: column;
`,Z=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`,ee=r.span`
  color: rgba(239, 237, 232, 0.5);
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
`,Ae=r.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.color.border};

  @media screen and (min-width: 768px) {
    width: 167px;
    padding: 12px;
  }
`,Be=r.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 16px;
  line-height: 1.5;
`,We=r.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`,Pe=r.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: ${({theme:e})=>e.color.white} ;

  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background:  ${({theme:e})=>e.color.orangeFirst} ;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`,de=({onSubmit:e})=>{const[i,d]=p.useState(new Date),[n,o]=p.useState(""),a=x=>{o(x.target.value)},s=x=>{d(x)},c=()=>{e({time:Number(n),date:i})},u=ve(i,"dd.MM.yyyy");return t.jsxs(Fe,{children:[t.jsx("label",{children:t.jsxs(Z,{children:[t.jsx(ee,{children:"Add time"}),t.jsx(qe,{placeholder:"min 60 sec.",type:"number",value:n,onChange:a})]})}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Choice day"}),t.jsx(je,{maxDate:new Date,onChange:s,value:i,children:t.jsxs(Ae,{children:[t.jsx(Be,{children:u}),t.jsx(We,{children:t.jsx(G,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(Pe,{onClick:c,children:"Add to diary"})})]})};de.propTypes={onSubmit:m.func.isRequired,onClose:m.func.isRequired};const Ne=r.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,Ue=r.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  background: ${({theme:e})=>e.color.white}0d;
`,Oe=r.p`
  color: ${({theme:e})=>e.color.white}66;
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Ve=r.p`
  margin: auto 0;
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
`,le=({exercise:e})=>{const{bodyPart:i,equipment:d,name:n,target:o,time:a}=e;return t.jsx(Ne,{children:[{label:"Name",value:n},{label:"Target",value:o},{label:"Body Part",value:i},{label:"Equipment",value:d},{label:"Time",value:`${a} minutes`}].map(({label:s,value:c})=>t.jsxs(Ue,{children:[t.jsx(Oe,{children:s}),t.jsx(Ve,{children:c})]},s+c))})};le.propTypes={exercise:m.shape({bodyPart:m.string.isRequired,equipment:m.string.isRequired,name:m.string.isRequired,target:m.string.isRequired,time:m.number.isRequired}).isRequired};const Ge=r.div`
  display: grid;
  padding: 48px 16px;
  width: 335px;
  height: 570px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    height: auto;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`,Ye=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,_e=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`,Qe=r.img`
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
`,Xe=r.div`
  display: flex;
  gap: 8px;
`,He=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,Je=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,Ke=r.div`
  display: flex;
  gap: 20px;
`,Ze=r.button`
  border: none;
  max-width: 150px;
  background-color: transparent;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  transition: color 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.white};
  }
`,et=r.button`
  border: none;
  display: inline-flex;
  padding: 12px 32px;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.hoverBorder};
  color: ${({theme:e})=>e.color.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
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
`;function pe({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:d,setModalExerciseSuccessData:n}){const{_id:o,gifUrl:a,burnedCalories:s,time:c}=e,[u,x]=p.useState(!1),[f,l]=p.useState(!1),[h,b]=p.useState(""),[y,v]=p.useState(""),[j,S]=p.useState(0),[g,w]=p.useState(0),[E,R]=p.useState(!1),[T]=xe(),k=s/c,$=Math.floor(j/60*k+g*s),D=j+g*c*60,I=async({time:M=D,date:P=new Date})=>{R(!0);const z=Math.floor(M/60*k+g*s),F={exercise_ID:o,date:P,time:M,calories:z};if(F.time<60){b(`To achieve results, the training time should be more than one minute. Your time ${F.time} sec.`),v("Notice: "),l(!0);return}const{error:_}=await T(F);_?(v("Error: "),b(_.data.message),l(!0)):(i(),d(),n(F))},W=()=>{R(!0),x(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Ge,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{src:a,alt:"Exercise technique"}),t.jsx(ce,{timerLabel:C.timerLabel,stopTimer:E,setStopTimer:R,roundsCount:g,setRoundsCount:w,setTimer:S,duration:c*60}),t.jsxs(Xe,{children:[t.jsx(He,{children:C.caloriesLabel}),t.jsx(Je,{children:$})]})]}),t.jsxs(_e,{children:[t.jsx(le,{exercise:e}),t.jsxs(Ke,{children:[t.jsx(Ze,{onClick:W,children:C.openPastDaysFormBtnName}),t.jsx(et,{onClick:I,children:C.addExerciseBtnName})]})]}),t.jsx(A,{onShow:u,onClose:()=>{x(!1)},children:t.jsx(de,{onClose:()=>{x(!1)},onSubmit:I})}),t.jsx(A,{onShow:f,onClose:()=>{l(!1)},children:t.jsx(he,{notificationType:y,message:h})})]})}pe.propTypes={openModalExerciseSuccess:m.func.isRequired,closeModalExerciseForm:m.func.isRequired,setModalExerciseSuccessData:m.func.isRequired,exercise:m.shape({gifUrl:m.string.isRequired,burnedCalories:m.number.isRequired,time:m.number.isRequired}).isRequired};const tt=r.div`
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
`,it=r.img`
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
`,rt=r.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`,nt=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`,U=r.p`
  font-size: 14px;
  line-height: 1.29;
`,te=r.span`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
`,ie=r.span`
  color: #e6533c;
`,st=r.button`
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
`,ot=r(ne)`
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
`,at=r.svg`
  width: 16px;
  height: 16px;
`,ct="/power-pulse/assets/thumb-up-bc557cec.webp";function ue({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:d=0,calories:n=0}=i,o={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(tt,{children:[t.jsx(it,{src:ct,alt:"thumb up"}),t.jsx(rt,{children:o.wellDone}),t.jsxs(nt,{children:[t.jsxs(U,{children:[t.jsx(te,{children:o.timeText}),t.jsxs(ie,{children:[" ",d]})]}),t.jsxs(U,{children:[t.jsx(te,{children:o.caloriesText}),t.jsx(ie,{children:n})]})]}),t.jsx(st,{onClick:e,type:"button",children:o.nextExerciseText}),t.jsxs(ot,{to:`/${me.DIARY}`,children:[t.jsxs(U,{children:[" ",o.diaryLinkText]}),t.jsx(at,{children:t.jsx("use",{href:`${B}#arrow-add-prod`})})]})]})}ue.propTypes={closeModalExerciseSuccess:m.func.isRequired,modalExerciseSuccessData:m.shape({time:m.number,calories:m.number})};const dt=r.div`
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
`,lt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`,pt=r.svg`
  max-width: 24px;
  max-height: 24px;
`,ut=r.svg`
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
`,mt=r.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`,gt=r.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,ft=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`,bt=r.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,wt=r.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,O=r.p`
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
`,V=r.span`
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
`;function yt(e){const{bodyPart:i,gifUrl:d,name:n,target:o,burnedCalories:a}=e,[s,c]=p.useState(!1),[u,x]=p.useState(!1),[f,l]=p.useState({}),h=()=>{c(!0)},b=()=>{x(!0)},y=()=>{c(!1)},v=()=>{x(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(dt,{gifUrl:d,children:[t.jsxs(lt,{children:[t.jsx(xt,{children:"WORKOUT"}),t.jsx(ht,{className:"start",children:t.jsxs(bt,{onClick:h,children:[t.jsx(wt,{className:"start",children:"Start"}),t.jsx(ut,{children:t.jsx("use",{href:`${B}#arrow-add-prod-orange`})})]})})]}),t.jsxs(ft,{children:[t.jsx(pt,{children:t.jsx("use",{href:`${B}#run-man`})}),t.jsx(gt,{children:N(n)})]}),t.jsxs(mt,{children:[t.jsxs(O,{children:["Burned calories:",t.jsx(V,{children:a})]}),t.jsxs(O,{category:!0,children:["Body part:",t.jsx(V,{children:N(i)})]}),t.jsxs(O,{className:"target",children:["Target:",t.jsx(V,{children:N(o)})]})]})]}),t.jsx(A,{onShow:s,onClose:y,children:t.jsx(pe,{exercise:e,openModalExerciseSuccess:b,closeModalExerciseForm:y,setModalExerciseSuccessData:l})}),t.jsx(A,{onShow:u,onClose:v,children:t.jsx(ue,{modalExerciseSuccessData:f,closeModalExerciseSuccess:v})})]})}const vt=r.ul`
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
`,jt=r.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    line-height: calc(24 / 16);
  }
`,St=r(ne)`
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
`,Et=r.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,Rt=r.li``,kt=r.div`
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
`,$t=r.div``;var Y=new Map,q=new WeakMap,re=0,Tt=void 0;function Ct(e){return e?(q.has(e)||(re+=1,q.set(e,re.toString())),q.get(e)):"0"}function Dt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?Ct(e.root):e[i]}`).toString()}function Lt(e){let i=Dt(e),d=Y.get(i);if(!d){const n=new Map;let o;const a=new IntersectionObserver(s=>{s.forEach(c=>{var u;const x=c.isIntersecting&&o.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=x),(u=n.get(c.target))==null||u.forEach(f=>{f(x,c)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),d={id:i,observer:a,elements:n},Y.set(i,d)}return d}function It(e,i,d={},n=Tt){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=e.getBoundingClientRect();return i(n,{isIntersecting:n,target:e,intersectionRatio:typeof d.threshold=="number"?d.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:o,observer:a,elements:s}=Lt(d);let c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(i),a.observe(e),function(){c.splice(c.indexOf(i),1),c.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),Y.delete(o))}}function Mt({threshold:e,delay:i,trackVisibility:d,rootMargin:n,root:o,triggerOnce:a,skip:s,initialInView:c,fallbackInView:u,onChange:x}={}){var f;const[l,h]=p.useState(null),b=p.useRef(),[y,v]=p.useState({inView:!!c,entry:void 0});b.current=x,p.useEffect(()=>{if(s||!l)return;let w;return w=It(l,(E,R)=>{v({inView:E,entry:R}),b.current&&b.current(E,R),R.isIntersecting&&a&&w&&(w(),w=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:d,delay:i},u),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,l,o,n,a,s,d,u,i]);const j=(f=y.entry)==null?void 0:f.target,S=p.useRef();!l&&j&&!a&&!s&&S.current!==j&&(S.current=j,v({inView:!!c,entry:void 0}));const g=[h,y.inView,y.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}function Bt(){var T;const e=ge(),[i,d]=p.useState(1),[n,o]=p.useState(!0),[a,s]=p.useState([]),{subcategory:c}=fe(),{ref:u}=Mt({onChange:k=>k&&o(!0)}),x=be(),f=p.useRef(((T=x.state)==null?void 0:T.from)??"/exercises"),l=p.useRef(),[h,{isLoading:b,isError:y,error:v}]=we(),{data:j,isFetching:S,isError:g,error:w}=ye(e),E=j&&j.filter(k=>k.name===c)[0],R=E?E.imgURL:null;return p.useEffect(()=>{n&&(async()=>{try{const $=await h({page:i,[e]:c}).unwrap();if($.data.length===0)return;s(i===1?[...$.data]:D=>[...D,...$.data]),o(!1),d(i+1)}catch($){console.log($)}})()},[i,h,n,e,c]),t.jsxs($t,{children:[t.jsxs(St,{to:f.current,children:[t.jsx(Et,{children:t.jsx("use",{href:`${B}#icon-arrow`})}),t.jsx(jt,{children:"Back"})]}),t.jsx(vt,{ref:l,children:a==null?void 0:a.map(({_id:k,name:$,bodyPart:D,burnedCalories:I,target:W,gifUrl:C,time:M,equipment:P},z)=>t.jsx(Rt,{ref:z===a.length-1?u:null,children:t.jsx(yt,{_id:k,bodyPart:D,equipment:P,gifUrl:C,name:$,target:W,burnedCalories:I,time:M},k)},z))}),t.jsx(kt,{category:e,img:R}),t.jsx(Q,{isLoading:S,isError:g,error:w}),t.jsx(Q,{isLoading:b,isError:y,error:v})]})}export{Bt as ExercisesList};
