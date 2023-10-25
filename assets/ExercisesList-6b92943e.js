import{n as u,x as C,r as g,P as f,j as e,d as q}from"./index-6d601247.js";import{B as S}from"./BasicModalWindow-71d70701.js";const M=u.div`
  display: grid;
  border-radius: 12px;
  padding: 48px 16px;
  width: 335px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  gap: 40px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`,U=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    justify-content: space-between;
  }
`,N=u.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 270px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
`,V=u.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`,X=u.div`
  display: flex;
  gap: 8px;
`,_=u.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
`,H=u.p`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.29;
`,J=u.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,K=u.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`,O=u.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Q=u.p`
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
`,Y=u.button`
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
`;var I=typeof window>"u"?g.useEffect:g.useLayoutEffect,Z=({isPlaying:i,duration:t,startAt:a=0,updateInterval:n=0,onComplete:r,onUpdate:o})=>{let[s,c]=g.useState(a),d=g.useRef(0),m=g.useRef(a),h=g.useRef(a*-1e3),l=g.useRef(null),p=g.useRef(null),b=g.useRef(null),v=y=>{let x=y/1e3;if(p.current===null){p.current=x,l.current=requestAnimationFrame(v);return}let j=x-p.current,R=d.current+j;p.current=x,d.current=R;let T=m.current+(n===0?R:(R/n|0)*n),$=m.current+R,E=typeof t=="number"&&$>=t;c(E?t:T),E||(l.current=requestAnimationFrame(v))},w=()=>{l.current&&cancelAnimationFrame(l.current),b.current&&clearTimeout(b.current),p.current=null},k=g.useCallback(y=>{w(),d.current=0;let x=typeof y=="number"?y:a;m.current=x,c(x),i&&(l.current=requestAnimationFrame(v))},[i,a]);return I(()=>{if(o==null||o(s),t&&s>=t){h.current+=t*1e3;let{shouldRepeat:y=!1,delay:x=0,newStartAt:j}=(r==null?void 0:r(h.current/1e3))||{};y&&(b.current=setTimeout(()=>k(j),x*1e3))}},[s,t]),I(()=>(i&&(l.current=requestAnimationFrame(v)),w),[i,t,n]),{elapsedTime:s,reset:k}},ee=(i,t,a)=>{let n=i/2,r=t/2,o=n-r,s=2*o,c=a==="clockwise"?"1,0":"0,1",d=2*Math.PI*o;return{path:`m ${n},${r} a ${o},${o} 0 ${c} 0,${s} a ${o},${o} 0 ${c} 0,-${s}`,pathLength:d}},L=(i,t)=>i===0||i===t?0:typeof t=="number"?i-t:0,te=i=>({position:"relative",width:i,height:i}),ie={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},z=(i,t,a,n,r)=>{if(n===0)return t;let o=(r?n-i:i)/n;return t+a*o},A=i=>{var t,a;return(a=(t=i.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,r,o,s)=>`#${r}${r}${o}${o}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:t.map(n=>parseInt(n,16)))!=null?a:[]},re=(i,t)=>{var a;let{colors:n,colorsTime:r,isSmoothColorTransition:o=!0}=i;if(typeof n=="string")return n;let s=(a=r==null?void 0:r.findIndex((p,b)=>p>=t&&t>=r[b+1]))!=null?a:-1;if(!r||s===-1)return n[0];if(!o)return n[s];let c=r[s]-t,d=r[s]-r[s+1],m=A(n[s]),h=A(n[s+1]),l=!!i.isGrowing;return`rgb(${m.map((p,b)=>z(c,p,h[b]-p,d,l)|0).join(",")})`},ne=i=>{let{duration:t,initialRemainingTime:a,updateInterval:n,size:r=180,strokeWidth:o=12,trailStrokeWidth:s,isPlaying:c=!1,isGrowing:d=!1,rotation:m="clockwise",onComplete:h,onUpdate:l}=i,p=g.useRef(),b=Math.max(o,s??0),{path:v,pathLength:w}=ee(r,b,m),{elapsedTime:k}=Z({isPlaying:c,duration:t,startAt:L(t,a),updateInterval:n,onUpdate:typeof l=="function"?x=>{let j=Math.ceil(t-x);j!==p.current&&(p.current=j,l(j))}:void 0,onComplete:typeof h=="function"?x=>{var j;let{shouldRepeat:R,delay:T,newInitialRemainingTime:$}=(j=h(x))!=null?j:{};if(R)return{shouldRepeat:R,delay:T,newStartAt:L(t,$)}}:void 0}),y=t-k;return{elapsedTime:k,path:v,pathLength:w,remainingTime:Math.ceil(y),rotation:m,size:r,stroke:re(i,y),strokeDashoffset:z(k,0,w,t,d),strokeWidth:o}},D=i=>{let{children:t,strokeLinecap:a,trailColor:n,trailStrokeWidth:r}=i,{path:o,pathLength:s,stroke:c,strokeDashoffset:d,remainingTime:m,elapsedTime:h,size:l,strokeWidth:p}=ne(i);return C.createElement("div",{style:te(l)},C.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l,xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:o,fill:"none",stroke:n??"#d9d9d9",strokeWidth:r??p}),C.createElement("path",{d:o,fill:"none",stroke:c,strokeLinecap:a??"round",strokeWidth:p,strokeDasharray:s,strokeDashoffset:d})),typeof t=="function"&&C.createElement("div",{style:ie},t({remainingTime:m,elapsedTime:h,color:c})))};D.displayName="CountdownCircleTimer";const se=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,oe=u.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }
`,W=u.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`,ae=u.button`
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
`,le=u.div`
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
`,de=u.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;
  right: 50%;
  transform: translateX(50%);
`,P=({isRunning:i,animationDuration:t})=>e.jsx(le,{animationDuration:t,style:{animationPlayState:i?"":"paused"},children:e.jsx(de,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 7",children:e.jsx("circle",{cx:"3.5",cy:"3.5",r:"3.1",fill:"#E6533C",stroke:"#EF8964",strokeWidth:".8"})})});P.propTypes={isRunning:f.bool.isRequired,animationDuration:f.number.isRequired};const F=({duration:i,setTimer:t,roundsCount:a,setRoundsCount:n})=>{const[r,o]=g.useState(!1),s=()=>{o(!r)},c=({remainingTime:d})=>{const m=i-d,h=Math.floor(m/60),l=m%60;return e.jsxs(se,{children:[e.jsx(W,{children:`
        ${h.toString().padStart(2,"0")} :
        ${l.toString().padStart(2,"0")}
        `}),e.jsxs(W,{children:["Round: ",a]})]})};return e.jsxs(e.Fragment,{children:[e.jsxs(oe,{children:[e.jsx(D,{size:125,isPlaying:r,colors:"#E6533C",trailColor:"#262625",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:5,duration:i,isGrowing:!0,rotation:"counterclockwise",onComplete:()=>(n(d=>d+1),{shouldRepeat:!0}),onUpdate:d=>{t(i-d)},children:c}),e.jsx(P,{isRunning:r,animationDuration:i})]}),e.jsx(ae,{onClick:s,children:e.jsx("svg",{width:15,height:15,children:r?e.jsx("use",{href:q+"#pause"}):e.jsx("use",{href:q+"#play"})})})]})};F.propTypes={duration:f.number.isRequired,roundsCount:f.number.isRequired,setTimer:f.func.isRequired,setRoundsCount:f.func.isRequired};function B({exercise:i}){const{gifUrl:t,bodyPart:a,equipment:n,name:r,target:o,burnedCalories:s,time:c}=i,[d,m]=g.useState(0),[h,l]=g.useState(0),p=[{label:"Name",value:r},{label:"Target",value:o},{label:"Body Part",value:a},{label:"Equipment",value:n},{label:"Time",value:`${c} minutes`}],b={timerLabel:"Time",caloriesLabel:"Burned calories:",buttonName:"Add to diary"},v=s/c,w=Math.floor(d/60*v+h*s),k=()=>{const y={exerciseId:i._id.$oid,time:d+h*c*60,calories:w};console.log("collectedData:",y)};return e.jsxs(M,{children:[e.jsxs(U,{children:[e.jsx(N,{src:t,alt:"Exercise technique"}),e.jsx(V,{children:b.timerLabel}),e.jsx(F,{roundsCount:h,setRoundsCount:l,setTimer:m,duration:c*60}),e.jsxs(X,{children:[e.jsx(_,{children:b.caloriesLabel}),e.jsx(H,{children:w})]})]}),e.jsxs(G,{children:[e.jsx(J,{children:p.map(({label:y,value:x})=>e.jsxs(K,{children:[e.jsx(O,{children:y}),e.jsx(Q,{children:x})]},x))}),e.jsx(Y,{onClick:k,children:b.buttonName})]})]})}B.propTypes={exercise:f.shape({gifUrl:f.string.isRequired,bodyPart:f.string.isRequired,equipment:f.string.isRequired,name:f.string.isRequired,target:f.string.isRequired,burnedCalories:f.number.isRequired,time:f.number.isRequired}).isRequired};function ce(){return e.jsx("div",{children:"AddExerciseSuccess component"})}function ue(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"ExercisesItem component"}),e.jsx(S,{children:e.jsx(B,{})}),e.jsx(S,{children:e.jsx(ce,{})})]})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"ExercisesList component"}),e.jsx(ue,{})]})}export{he as ExercisesList};
