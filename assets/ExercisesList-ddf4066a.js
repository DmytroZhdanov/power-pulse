import{x as L,r as p,n as r,P as g,j as t,I as V,a3 as ue,U as A,V as he,L as re,R as me,p as B,a1 as ge,a0 as fe,b as be,a4 as we,a2 as ye,E as Y}from"./index-f9765042.js";import{f as ne,C as ve}from"./Calendar-246a5af0.js";import"./tiny-warning.esm-c932d744.js";var Q=typeof window>"u"?p.useEffect:p.useLayoutEffect,je=({isPlaying:e,duration:i,startAt:d=0,updateInterval:n=0,onComplete:o,onUpdate:a})=>{let[s,c]=p.useState(d),x=p.useRef(0),u=p.useRef(d),f=p.useRef(d*-1e3),l=p.useRef(null),h=p.useRef(null),b=p.useRef(null),y=S=>{let m=S/1e3;if(h.current===null){h.current=m,l.current=requestAnimationFrame(y);return}let w=m-h.current,E=x.current+w;h.current=m,x.current=E;let R=u.current+(n===0?E:(E/n|0)*n),T=u.current+E,k=typeof i=="number"&&T>=i;c(k?i:R),k||(l.current=requestAnimationFrame(y))},v=()=>{l.current&&cancelAnimationFrame(l.current),b.current&&clearTimeout(b.current),h.current=null},j=p.useCallback(S=>{v(),x.current=0;let m=typeof S=="number"?S:d;u.current=m,c(m),e&&(l.current=requestAnimationFrame(y))},[e,d]);return Q(()=>{if(a==null||a(s),i&&s>=i){f.current+=i*1e3;let{shouldRepeat:S=!1,delay:m=0,newStartAt:w}=(o==null?void 0:o(f.current/1e3))||{};S&&(b.current=setTimeout(()=>j(w),m*1e3))}},[s,i]),Q(()=>(e&&(l.current=requestAnimationFrame(y)),v),[e,i,n]),{elapsedTime:s,reset:j}},Se=(e,i,d)=>{let n=e/2,o=i/2,a=n-o,s=2*a,c=d==="clockwise"?"1,0":"0,1",x=2*Math.PI*a;return{path:`m ${n},${o} a ${a},${a} 0 ${c} 0,${s} a ${a},${a} 0 ${c} 0,-${s}`,pathLength:x}},H=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,Ee=e=>({position:"relative",width:e,height:e}),Re={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},se=(e,i,d,n,o)=>{if(n===0)return i;let a=(o?n-e:e)/n;return i+d*a},K=e=>{var i,d;return(d=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,o,a,s)=>`#${o}${o}${a}${a}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:i.map(n=>parseInt(n,16)))!=null?d:[]},ke=(e,i)=>{var d;let{colors:n,colorsTime:o,isSmoothColorTransition:a=!0}=e;if(typeof n=="string")return n;let s=(d=o==null?void 0:o.findIndex((h,b)=>h>=i&&i>=o[b+1]))!=null?d:-1;if(!o||s===-1)return n[0];if(!a)return n[s];let c=o[s]-i,x=o[s]-o[s+1],u=K(n[s]),f=K(n[s+1]),l=!!e.isGrowing;return`rgb(${u.map((h,b)=>se(c,h,f[b]-h,x,l)|0).join(",")})`},$e=e=>{let{duration:i,initialRemainingTime:d,updateInterval:n,size:o=180,strokeWidth:a=12,trailStrokeWidth:s,isPlaying:c=!1,isGrowing:x=!1,rotation:u="clockwise",onComplete:f,onUpdate:l}=e,h=p.useRef(),b=Math.max(a,s??0),{path:y,pathLength:v}=Se(o,b,u),{elapsedTime:j}=je({isPlaying:c,duration:i,startAt:H(i,d),updateInterval:n,onUpdate:typeof l=="function"?m=>{let w=Math.ceil(i-m);w!==h.current&&(h.current=w,l(w))}:void 0,onComplete:typeof f=="function"?m=>{var w;let{shouldRepeat:E,delay:R,newInitialRemainingTime:T}=(w=f(m))!=null?w:{};if(E)return{shouldRepeat:E,delay:R,newStartAt:H(i,T)}}:void 0}),S=i-j;return{elapsedTime:j,path:y,pathLength:v,remainingTime:Math.ceil(S),rotation:u,size:o,stroke:ke(e,S),strokeDashoffset:se(j,0,v,i,x),strokeWidth:a}},oe=e=>{let{children:i,strokeLinecap:d,trailColor:n,trailStrokeWidth:o}=e,{path:a,pathLength:s,stroke:c,strokeDashoffset:x,remainingTime:u,elapsedTime:f,size:l,strokeWidth:h}=$e(e);return L.createElement("div",{style:Ee(l)},L.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:a,fill:"none",stroke:n??"#d9d9d9",strokeWidth:o??h}),L.createElement("path",{d:a,fill:"none",stroke:c,strokeLinecap:d??"round",strokeWidth:h,strokeDasharray:s,strokeDashoffset:x})),typeof i=="function"&&L.createElement("div",{style:Re},i({remainingTime:u,elapsedTime:f,color:c})))};oe.displayName="CountdownCircleTimer";const Te=r.div`
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
`,Ce=r.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,ae=({isRunning:e,animationDuration:i})=>t.jsx(Te,{animationDuration:i,style:{animationPlayState:e?"":"paused"},children:t.jsx(Ce,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:t.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});ae.propTypes={isRunning:g.bool.isRequired,animationDuration:g.number.isRequired};const De=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,Le=r.div`
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
`,X=r.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,Ie=r.button`
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
`,ce=({timerLabel:e,duration:i,setTimer:d,roundsCount:n,setRoundsCount:o,stopTimer:a,setStopTimer:s})=>{const[c,x]=p.useState(!1);p.useEffect(()=>{a&&(x(!a),s(!1))},[s,a]);const u=()=>{x(!c)},f=({remainingTime:l})=>{const h=i-l,b=Math.floor(h/60),y=h%60;return t.jsxs(De,{children:[t.jsx(X,{children:`
        ${b.toString().padStart(2,"0")} :
        ${y.toString().padStart(2,"0")}
        `}),t.jsxs(X,{children:["Round: ",n]})]})};return t.jsxs(t.Fragment,{children:[t.jsx(Me,{children:e}),t.jsxs(Le,{children:[t.jsx(oe,{size:125,isPlaying:c,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(o(l=>l+1),{shouldRepeat:!0}),onUpdate:l=>{d(i-l)},children:f}),t.jsx(ae,{isRunning:c,animationDuration:i})]}),t.jsx(Ie,{onClick:u,children:c?t.jsx(V,{name:"pause"}):t.jsx(V,{name:"play"})})]})};ce.propTypes={timerLabel:g.string.isRequired,duration:g.number.isRequired,setTimer:g.func.isRequired,roundsCount:g.number.isRequired,setRoundsCount:g.func.isRequired,stopTimer:g.bool.isRequired,setStopTimer:g.func.isRequired};const ze=r.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 25px;
  flex-direction: column;
`,J=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`,Z=r.span`
  color: rgba(239, 237, 232, 0.5);
  font-size: 16px;
  line-height: 1.29;
`,Fe=r.input`
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
`,qe=r.div`
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
`,Ae=r.p`
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

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`,We=r.button`
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
`,de=({onSubmit:e})=>{const[i,d]=p.useState(new Date),[n,o]=p.useState(""),a=u=>{o(u.target.value)},s=u=>{d(u)},c=()=>{e({time:Number(n),date:i})},x=ne(i,"dd.MM.yyyy");return t.jsxs(ze,{children:[t.jsx("label",{children:t.jsxs(J,{children:[t.jsx(Z,{children:"Add time"}),t.jsx(Fe,{placeholder:"min 60 sec.",type:"number",value:n,onChange:a})]})}),t.jsxs(J,{children:[t.jsx(Z,{children:"Choice day"}),t.jsx(ve,{maxDate:new Date,onChange:s,value:i,children:t.jsxs(qe,{children:[t.jsx(Ae,{children:x}),t.jsx(Be,{children:t.jsx(V,{name:"calendar"})})]})})]}),t.jsx("div",{children:t.jsx(We,{onClick:c,children:"Add to diary"})})]})};de.propTypes={onSubmit:g.func.isRequired};const Pe=r.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,le=({exercise:e})=>{const{bodyPart:i,equipment:d,name:n,target:o,time:a}=e;return t.jsx(Pe,{children:[{label:"Name",value:n},{label:"Target",value:o},{label:"Body Part",value:i},{label:"Equipment",value:d},{label:"Time",value:`${a} minutes`}].map(({label:s,value:c})=>t.jsxs(Ne,{children:[t.jsx(Ue,{children:s}),t.jsx(Oe,{children:c})]},s+c))})};le.propTypes={exercise:g.shape({bodyPart:g.string.isRequired,equipment:g.string.isRequired,name:g.string.isRequired,target:g.string.isRequired,time:g.number.isRequired}).isRequired};const Ve=r.div`
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
`,Ge=r.div`
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
`,Ye=r.img`
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
`,Qe=r.div`
  display: flex;
  gap: 8px;
`,He=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`,Ke=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`,Xe=r.div`
  display: flex;
  gap: 20px;
`,Je=r.button`
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
`,Ze=r.button`
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
`;function pe({exercise:e,openModalExerciseSuccess:i,closeModalExerciseForm:d,setModalExerciseSuccessData:n}){const{_id:o,gifUrl:a,burnedCalories:s,time:c}=e,[x,u]=p.useState(!1),[f,l]=p.useState(!1),[h,b]=p.useState(""),[y,v]=p.useState(""),[j,S]=p.useState(0),[m,w]=p.useState(0),[E,R]=p.useState(!1),[T]=ue(),k=s/c,$=Math.floor(j/60*k+m*s),D=j+m*c*60,M=async({time:I=D,date:P=new Date})=>{R(!0);const z=Math.floor(I/60*k+m*s),F={exercise_ID:o,date:ne(P,"yyyy-MM-dd"),time:I,calories:z};if(F.time<60){b(`To achieve results, the training time should be more than one minute. Your time ${F.time} sec.`),v("Notice: "),l(!0);return}const{error:_}=await T(F);_?(v("Error: "),b(_.data.message),l(!0)):(i(),d(),n(F))},W=()=>{R(!0),u(!0)},C={timerLabel:"Time",caloriesLabel:"Burned calories:",addExerciseBtnName:"Add to diary",openPastDaysFormBtnName:"Missing exercises? Add them here"};return t.jsxs(Ve,{children:[t.jsxs(Ge,{children:[t.jsx(Ye,{src:a,alt:"Exercise technique"}),t.jsx(ce,{timerLabel:C.timerLabel,stopTimer:E,setStopTimer:R,roundsCount:m,setRoundsCount:w,setTimer:S,duration:c*60}),t.jsxs(Qe,{children:[t.jsx(He,{children:C.caloriesLabel}),t.jsx(Ke,{children:$})]})]}),t.jsxs(_e,{children:[t.jsx(le,{exercise:e}),t.jsxs(Xe,{children:[t.jsx(Je,{onClick:W,children:C.openPastDaysFormBtnName}),t.jsx(Ze,{onClick:M,children:C.addExerciseBtnName})]})]}),t.jsx(A,{onShow:x,onClose:()=>{u(!1)},children:t.jsx(de,{onSubmit:M})}),t.jsx(A,{onShow:f,onClose:()=>{l(!1)},children:t.jsx(he,{notificationType:y,message:h})})]})}pe.propTypes={openModalExerciseSuccess:g.func.isRequired,closeModalExerciseForm:g.func.isRequired,setModalExerciseSuccessData:g.func.isRequired,exercise:g.shape({gifUrl:g.string.isRequired,burnedCalories:g.number.isRequired,time:g.number.isRequired}).isRequired};const et=r.div`
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
`,ee=r.span`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
`,te=r.span`
  color: #e6533c;
`,nt=r.button`
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
`,st=r(re)`
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
`,ot=r.svg`
  width: 16px;
  height: 16px;
`,at="/power-pulse/assets/thumb-up-bc557cec.webp";function xe({closeModalExerciseSuccess:e,modalExerciseSuccessData:i}){const{time:d=0,calories:n=0}=i,o={wellDone:"Well done",timeText:"Your time:",caloriesText:"Burned calories:",nextExerciseText:"Next exercise",diaryLinkText:"To the diary"};return t.jsxs(et,{children:[t.jsx(tt,{src:at,alt:"thumb up"}),t.jsx(it,{children:o.wellDone}),t.jsxs(rt,{children:[t.jsxs(N,{children:[t.jsx(ee,{children:o.timeText}),t.jsxs(te,{children:[" ",d]})]}),t.jsxs(N,{children:[t.jsx(ee,{children:o.caloriesText}),t.jsx(te,{children:n})]})]}),t.jsx(nt,{onClick:e,type:"button",children:o.nextExerciseText}),t.jsxs(st,{to:`/${me.DIARY}`,children:[t.jsxs(N,{children:[" ",o.diaryLinkText]}),t.jsx(ot,{children:t.jsx("use",{href:`${B}#arrow-add-prod`})})]})]})}xe.propTypes={closeModalExerciseSuccess:g.func.isRequired,modalExerciseSuccessData:g.shape({time:g.number,calories:g.number})};const ct=r.div`
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

  @media screen and (min-width: 375px) {
    width: 335px;
    &:hover h2 {
      max-width: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`,lt=r.svg`
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
`,ut=r.div`
  display: flex;
  align-items: center;
`,ht=r.div`
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

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,gt=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`,ft=r.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 1px;
  @media screen and (min-width: 768px) {
    margin-right: 152px;
  }

  @media screen and (min-width: 1440px) {
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

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 4px;
  }

  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    margin-left: 4px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;function wt(e){const{bodyPart:i,gifUrl:d,name:n,target:o,burnedCalories:a}=e,[s,c]=p.useState(!1),[x,u]=p.useState(!1),[f,l]=p.useState({}),h=()=>{c(!0)},b=()=>{u(!0)},y=()=>{c(!1)},v=()=>{u(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(ct,{gifUrl:d,children:[t.jsxs(dt,{children:[t.jsx(xt,{children:"WORKOUT"}),t.jsx(ut,{className:"start",children:t.jsxs(ft,{onClick:h,children:[t.jsx(bt,{className:"start",children:"Start"}),t.jsx(pt,{children:t.jsx("use",{href:`${B}#arrow-add-prod-orange`})})]})})]}),t.jsxs(gt,{children:[t.jsx(lt,{children:t.jsx("use",{href:`${B}#run-man`})}),t.jsx(mt,{children:n})]}),t.jsxs(ht,{children:[t.jsxs(U,{children:["Burned calories:",t.jsx(O,{children:a})]}),t.jsxs(U,{className:"bodyPart",category:!0,children:["Body part:",t.jsx(O,{children:i})]}),t.jsxs(U,{className:"target",children:["Target:",t.jsx(O,{children:o})]})]})]}),t.jsx(A,{onShow:s,onClose:y,children:t.jsx(pe,{exercise:e,openModalExerciseSuccess:b,closeModalExerciseForm:y,setModalExerciseSuccessData:l})}),t.jsx(A,{onShow:x,onClose:v,children:t.jsx(xe,{modalExerciseSuccessData:f,closeModalExerciseSuccess:v})})]})}const yt=r.ul`
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
`,vt=r.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    line-height: calc(24 / 16);
  }
`,jt=r(re)`
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
`,St=r.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.grayThird};
`,Et=r.li``,Rt=r.div`
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
`,kt=r.div``;var G=new Map,q=new WeakMap,ie=0,$t=void 0;function Tt(e){return e?(q.has(e)||(ie+=1,q.set(e,ie.toString())),q.get(e)):"0"}function Ct(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?Tt(e.root):e[i]}`).toString()}function Dt(e){let i=Ct(e),d=G.get(i);if(!d){const n=new Map;let o;const a=new IntersectionObserver(s=>{s.forEach(c=>{var x;const u=c.isIntersecting&&o.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=u),(x=n.get(c.target))==null||x.forEach(f=>{f(u,c)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),d={id:i,observer:a,elements:n},G.set(i,d)}return d}function Lt(e,i,d={},n=$t){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const x=e.getBoundingClientRect();return i(n,{isIntersecting:n,target:e,intersectionRatio:typeof d.threshold=="number"?d.threshold:0,time:0,boundingClientRect:x,intersectionRect:x,rootBounds:x}),()=>{}}const{id:o,observer:a,elements:s}=Dt(d);let c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(i),a.observe(e),function(){c.splice(c.indexOf(i),1),c.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),G.delete(o))}}function Mt({threshold:e,delay:i,trackVisibility:d,rootMargin:n,root:o,triggerOnce:a,skip:s,initialInView:c,fallbackInView:x,onChange:u}={}){var f;const[l,h]=p.useState(null),b=p.useRef(),[y,v]=p.useState({inView:!!c,entry:void 0});b.current=u,p.useEffect(()=>{if(s||!l)return;let w;return w=Lt(l,(E,R)=>{v({inView:E,entry:R}),b.current&&b.current(E,R),R.isIntersecting&&a&&w&&(w(),w=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:d,delay:i},x),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,l,o,n,a,s,d,x,i]);const j=(f=y.entry)==null?void 0:f.target,S=p.useRef();!l&&j&&!a&&!s&&S.current!==j&&(S.current=j,v({inView:!!c,entry:void 0}));const m=[h,y.inView,y.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}function qt(){var T;const e=ge(),[i,d]=p.useState(1),[n,o]=p.useState(!0),[a,s]=p.useState([]),{subcategory:c}=fe(),{ref:x}=Mt({onChange:k=>k&&o(!0)}),u=be(),f=p.useRef(((T=u.state)==null?void 0:T.from)??"/exercises"),l=p.useRef(),[h,{isLoading:b,isError:y,error:v}]=we(),{data:j,isFetching:S,isError:m,error:w}=ye(e),E=j&&j.filter(k=>k.name===c)[0],R=E?E.imgURL:null;return p.useEffect(()=>{n&&(async()=>{try{const $=await h({page:i,[e]:c}).unwrap();if($.data.length===0)return;s(i===1?[...$.data]:D=>[...D,...$.data]),o(!1),d(i+1)}catch($){console.log($)}})()},[i,h,n,e,c]),t.jsxs(kt,{children:[t.jsxs(jt,{to:f.current,children:[t.jsx(St,{children:t.jsx("use",{href:`${B}#icon-arrow`})}),t.jsx(vt,{children:"Back"})]}),t.jsx(yt,{ref:l,children:a==null?void 0:a.map(({_id:k,name:$,bodyPart:D,burnedCalories:M,target:W,gifUrl:C,time:I,equipment:P},z)=>t.jsx(Et,{ref:z===a.length-1?x:null,children:t.jsx(wt,{_id:k,bodyPart:D,equipment:P,gifUrl:C,name:$,target:W,burnedCalories:M,time:I},k)},z))}),t.jsx(Rt,{category:e,img:R}),t.jsx(Y,{isLoading:S,isError:m,error:w}),t.jsx(Y,{isLoading:b,isError:y,error:v})]})}export{qt as ExercisesList};
