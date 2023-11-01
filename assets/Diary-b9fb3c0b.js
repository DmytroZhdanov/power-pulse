import{r as s,n,j as e,f as j,J as ue,L as ae,K as oe,M as ge,N as de,P as W,t as we,O as je,Q as ye,I as O,S as be,q as De}from"./index-05f5c63f.js";import{T as ve}from"./TitlePage-10d036d3.js";import{u as le,f as Te,a as $e,P as Ce,L as Ee,m as B}from"./motion-b39e0529.js";import{C as ke,f as ze}from"./Calendar-02be2ae9.js";import"./tiny-warning.esm-c932d744.js";const _=(t,d)=>{const i=[];let r=new Date(t);const f=new Date(d);for(;r<=f;){const c=r.toDateString();i.push(c),r.setDate(r.getDate()+1)}return i.push(d.toDateString()),i};function pe(){const t=s.useRef(!1);return le(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Re(){const t=pe(),[d,i]=s.useState(0),r=s.useCallback(()=>{t.current&&i(d+1)},[d]);return[s.useCallback(()=>Te.postRender(r),[r]),d]}class Se extends s.Component{getSnapshotBeforeUpdate(d){const i=this.props.childRef.current;if(i&&d.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=i.offsetHeight||0,r.width=i.offsetWidth||0,r.top=i.offsetTop,r.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Be({children:t,isPresent:d}){const i=s.useId(),r=s.useRef(null),f=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:c,height:x,top:a,left:o}=f.current;if(d||!r.current||!c||!x)return;r.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${x}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[d]),s.createElement(Se,{isPresent:d,childRef:r,sizeRef:f},s.cloneElement(t,{ref:r}))}const F=({children:t,initial:d,isPresent:i,onExitComplete:r,custom:f,presenceAffectsLayout:c,mode:x})=>{const a=$e(Pe),o=s.useId(),l=s.useMemo(()=>({id:o,initial:d,isPresent:i,custom:f,onExitComplete:p=>{a.set(p,!0);for(const h of a.values())if(!h)return;r&&r()},register:p=>(a.set(p,!1),()=>a.delete(p))}),c?void 0:[i]);return s.useMemo(()=>{a.forEach((p,h)=>a.set(h,!1))},[i]),s.useEffect(()=>{!i&&!a.size&&r&&r()},[i]),x==="popLayout"&&(t=s.createElement(Be,{isPresent:i},t)),s.createElement(Ce.Provider,{value:l},t)};function Pe(){return new Map}function Ie(t){return s.useEffect(()=>()=>t(),[])}const S=t=>t.key||"";function Ae(t,d){t.forEach(i=>{const r=S(i);d.set(r,i)})}function Me(t){const d=[];return s.Children.forEach(t,i=>{s.isValidElement(i)&&d.push(i)}),d}const P=({children:t,custom:d,initial:i=!0,onExitComplete:r,exitBeforeEnter:f,presenceAffectsLayout:c=!0,mode:x="sync"})=>{const a=s.useContext(Ee).forceRender||Re()[0],o=pe(),l=Me(t);let p=l;const h=s.useRef(new Map).current,m=s.useRef(p),y=s.useRef(new Map).current,I=s.useRef(!0);if(le(()=>{I.current=!1,Ae(l,y),m.current=p}),Ie(()=>{I.current=!0,y.clear(),h.clear()}),I.current)return s.createElement(s.Fragment,null,p.map(u=>s.createElement(F,{key:S(u),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:c,mode:x},u)));p=[...p];const A=m.current.map(S),w=l.map(S),$=A.length;for(let u=0;u<$;u++){const g=A[u];w.indexOf(g)===-1&&!h.has(g)&&h.set(g,void 0)}return x==="wait"&&h.size&&(p=[]),h.forEach((u,g)=>{if(w.indexOf(g)!==-1)return;const L=y.get(g);if(!L)return;const ce=A.indexOf(g);let M=u;if(!M){const he=()=>{y.delete(g),h.delete(g);const me=m.current.findIndex(fe=>fe.key===g);if(m.current.splice(me,1),!h.size){if(m.current=l,o.current===!1)return;a(),r&&r()}};M=s.createElement(F,{key:S(L),isPresent:!1,onExitComplete:he,custom:d,presenceAffectsLayout:c,mode:x},L),h.set(g,M)}p.splice(ce,0,M)}),p=p.map(u=>{const g=u.key;return h.has(g)?u:s.createElement(F,{key:S(u),isPresent:!0,presenceAffectsLayout:c,mode:x},u)}),s.createElement(s.Fragment,null,h.size?p:p.map(u=>s.cloneElement(u)))},Le=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Oe=n.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,C=n.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${t=>t.highlighted?"#E6533C":"rgba(239, 237, 232, 0.05)"};
  border-radius: 12px;
  border: 1px solid
    ${t=>(t.highlighted,"rgba(239, 237, 232, 0.2)")};
  ${t=>t.caloriesOverConsumed&&"border-color: #E9101D"};
  ${t=>t.caloriesOverBurned&&"border-color: #3CBF61"};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 18px;
  }
`,E=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,k=n.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,z=n.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${t=>t.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,R=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Fe=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,We=n.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,_e=n.svg`
  width: 24px;
  height: 24px;
`,Ne=n.p`
  font-size: 14px;
  line-height: ${18/14};
  color: rgba(239, 237, 232, 0.3);

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`;function qe({bmrData:t,diaryProducts:d,diaryExercises:i}){const[r,f]=s.useState(null),[c,x]=s.useState(null),[a,o]=s.useState(null);return s.useEffect(()=>{if(d.length===0){f(null);return}const p=d.map(h=>h.calories).reduce((h,m)=>h+m);f(p)},[d]),s.useEffect(()=>{if(i.length===0){x(null),o(null);return}const p=i.map(m=>m.calories).reduce((m,y)=>m+y);i.map(m=>m.time).reduce((m,y)=>m+y),x(p)},[i]),s.useEffect(()=>{if(i.length===0){o(null);return}const p=i.map(m=>m.time).reduce((m,y)=>m+y),h=Math.trunc(p/60);o(h)},[i]),e.jsxs(Le,{children:[e.jsxs(Oe,{children:[e.jsxs(C,{highlighted:!0,children:[e.jsxs(E,{children:[e.jsx(k,{children:e.jsx("use",{href:`${j}#food`})}),e.jsx(z,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(R,{children:t||2200})]}),e.jsxs(C,{highlighted:!0,children:[e.jsxs(E,{children:[e.jsx(k,{children:e.jsx("use",{href:`${j}#dumbbell`})}),e.jsx(z,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(R,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(k,{children:e.jsx("use",{href:`${j}#apple`})}),e.jsx(z,{children:"Calories consumed"})]}),e.jsx(R,{children:r!==null?r:0})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(k,{children:e.jsx("use",{href:`${j}#fire`})}),e.jsx(z,{children:"Calories burned"})]}),e.jsx(R,{children:c!==null?c:0})]}),e.jsxs(C,{caloriesOverConsumed:!(t-r>=0),children:[e.jsxs(E,{children:[e.jsx(k,{children:e.jsx("use",{href:`${j}#bubble`})}),e.jsx(z,{children:"The rest of the calories"})]}),e.jsx(R,{children:t-r})]}),e.jsxs(C,{caloriesOverBurned:110-a<0,children:[e.jsxs(E,{children:[e.jsx(k,{children:e.jsx("use",{href:`${j}#running`})}),e.jsx(z,{children:"The rest of sports"})]}),e.jsxs(R,{children:[110-a," min"]})]})]}),e.jsxs(Fe,{children:[e.jsx(We,{children:e.jsx(_e,{children:e.jsx("use",{href:`${j}#exclamation-mark`})})}),e.jsx(Ne,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}const Ue=n.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (max-width: 767px) {
    max-height: 1000px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }
`,N=n.table`
  border-spacing: 8px;
  border-collapse: separate;
  @media screen and (max-width: 767px) {
    position: relative;
    height: 342px;
    width: 100%;
    &:last-child {
      height: 314px;
    }
  }
`,q=n.thead`
  text-align: left;
`,U=n.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,b=n.th`
@media screen and (max-width: 767px) {
  position: absolute; 
  &:nth-of-type(2) {
    top: 88px;
  }
  &:nth-of-type(3) {
    top: 168px;
  }
  &:nth-of-type(4) {
    top: 248px;
    left: 8px;
  }
  &:nth-of-type(5) {
    top: 248px;
    left: 105px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80px;
  }
  &:nth-of-type(6) {
    top: 248px;
    left: 201px;
  }
}

@media screen and (min-width: 768px) {
  &:first-of-type {
    width: 90px;
  }
  &:nth-of-type(2) {
    width: 132px;
  }
  &:nth-of-type(3) {
    width: 128px;
  }
  &:nth-of-type(4) {
    width: 84px;
  }
  &:nth-of-type(5) {
    width: 78px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  &:nth-of-type(6) {
    width: 72px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 115px;
  }
  &:nth-of-type(2) {
    width: 157px;
  }
  &:nth-of-type(3) {
    width: 131px;
  }
  &:nth-of-type(4) {
    width: 106px;
  }
  &:nth-of-type(5) {
    width: 91px;
  }
  &:nth-of-type(6) {
    width: 82px;
  }
}  
`,Q=n.tbody``,K=n.tr``,D=n.td`
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(239, 237, 232, 0.3);
  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18/14};
    &:first-of-type {
      top: 34px;
      width: 297px;
    }
    &:nth-of-type(2) {
      top: 114px;
      width: 297px;
    }
    &:nth-of-type(3) {
      top: 194px;
      width: 297px;
    }
    &:nth-of-type(4) {
      top: 274px;
      left: 8px;
      width: 81px;
    }
    &:nth-of-type(5) {
      top: 274px;
      left: 105px;
      width: 80px;
    }
    &:nth-of-type(6) {
      top: 274px;
      left: 201px;
      width: 76px;
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    font-size: 16px;
    line-height: ${24/16};
    padding: 7px 14px;
    &:first-of-type {
      max-width: 90px;
    }
    &:nth-of-type(2) {
     max-width: 132px;
    }
    &:nth-of-type(3) {
      max-width: 128px;
    }
    &:nth-of-type(4) {
      max-width: 84px;
    }
    &:nth-of-type(5) {
     max-width: 78px;
    }
    &:nth-of-type(6) {
      max-width: 72px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:first-of-type {
      max-width: 115px;
    }
    &:nth-of-type(2) {
      max-width: 157px;
    }
    &:nth-of-type(3) {
      max-width: 131px;
    }
    &:nth-of-type(4) {
     max-width: 106px;
    }
    &:nth-of-type(5) {
      max-width: 91px;
    }
    &:nth-of-type(6) {
      max-width: 82px;
    }
  }
} 
`,G=n.td``,Y=n.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 283px;
    left: 285px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 12px;
  }
  `,H=n.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
  stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
  fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`;function Qe({diaryExercises:t,setDiaryExercises:d}){const[i]=ue(),[r,f]=s.useState(window.innerWidth>=768),c=()=>{f(window.innerWidth>=768)};s.useEffect(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]);const x=async a=>{try{await i(a);const o=t.filter(l=>l._id!==a);d(o)}catch(o){console.log(o)}};return e.jsx(e.Fragment,{children:e.jsx(Ue,{children:r?e.jsxs(N,{children:[e.jsx(q,{children:e.jsxs(U,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"})]})}),e.jsx(P,{children:t.map(a=>e.jsx(Q,{as:B.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(K,{children:[e.jsx(D,{children:a.bodyPart}),e.jsx(D,{children:a.equipment}),e.jsx(D,{children:a.name}),e.jsx(D,{children:a.target}),e.jsx(D,{children:a.calories}),e.jsx(D,{children:a.time}),e.jsx(G,{children:e.jsx(Y,{onClick:()=>{x(a._id)},children:e.jsx(H,{children:e.jsx("use",{href:`${j}#delete`})})})})]})},a._id))})]}):e.jsx(e.Fragment,{children:e.jsx(P,{children:t.map(a=>e.jsxs(N,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:B.table,children:[e.jsx(q,{children:e.jsxs(U,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"})]})}),e.jsx(Q,{children:e.jsxs(K,{children:[e.jsx(D,{children:a.bodyPart}),e.jsx(D,{children:a.equipment}),e.jsx(D,{children:a.name}),e.jsx(D,{children:a.target}),e.jsx(D,{children:a.calories}),e.jsx(D,{children:a.time}),e.jsx(G,{children:e.jsx(Y,{onClick:()=>{x(a._id)},children:e.jsx(H,{children:e.jsx("use",{href:`${j}#delete`})})})})]})})]},a._id))})})})})}const Ke=n.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 1164px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 8px;
    height: 234px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
  }
`,Ge=n.h2`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18/14};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,Ye=n.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,He=n.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,Ve=n.div`
display: flex;
justify-content: space-between;
align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`,Je=n(ae)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Xe=n.p`
color: #e6533c;
font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18/14};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,Ze=n.svg`
  width: 16px;
  height: 16px;
`;function et({diaryExercises:t,setDiaryExercises:d,isLoading:i}){return e.jsxs(Ke,{children:[e.jsxs(Ve,{children:[e.jsx(He,{children:"Exercises"}),e.jsxs(Je,{to:"/exercises",children:[e.jsx(Xe,{children:"Add exercise"}),e.jsx(Ze,{children:e.jsx("use",{href:`${j}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(Qe,{diaryExercises:t,setDiaryExercises:d}):e.jsx(e.Fragment,{children:e.jsx(P,{children:i?e.jsx(Ye,{children:e.jsx(oe,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(Ge,{as:B.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}const tt=n.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 762px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }
`,V=n.table`
  border-spacing: 8px;
  border-collapse: separate;
  @media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width: 100%;
    &:last-child {
      height: 234px;
    }
  }
`,J=n.thead`
  text-align: left;
`,X=n.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,v=n.th`
  @media screen and (max-width: 767px) {
    position: absolute;
    &:nth-of-type(2) {
      top: 88px;
    }
    &:nth-of-type(3) {
      top: 168px;
    }
    &:nth-of-type(4) {
      top: 168px;
      left: 105px;
    }
    &:nth-of-type(5) {
      top: 168px;
      left: 201px;
    }
  }

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 204px;
    }
    &:nth-of-type(2) {
      width: 128px;
    }
    &:nth-of-type(3) {
      width: 90px;
    }
    &:nth-of-type(4) {
      width: 90px;
    }
    &:nth-of-type(5) {
      width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }
    &:nth-of-type(2) {
      width: 166px;
    }
    &:nth-of-type(3) {
      width: 105px;
    }
    &:nth-of-type(4) {
      width: 105px;
    }
    &:nth-of-type(5) {
      width: 110px;
    }
  }
  `,Z=n.tbody``,ee=n.tr``,T=n.td`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 
@media screen and (max-width: 767px) {
  position: absolute; 
  padding: 10px 14px;
  font-size: 14px;
  line-height: ${18/14};
  &:first-of-type {
    top: 34px;
    width: 297px;
  }
  &:nth-of-type(2) {
    top: 114px;
    width: 297px;
  }
  &:nth-of-type(3) {
    top: 194px;
    width: 81px;
  }
  &:nth-of-type(4) {
    top: 194px;
    left: 105px;
    width: 80px;
  }
  &:nth-of-type(5) {
    top: 194px;
    left: 201px;
    width: 76px;
  }
}

@media screen and (min-width: 768px) {
  position: relative;
  font-size: 16px;
  line-height: ${24/16};
  padding: 7px 14px;
  &:first-of-type {
    max-width: 204px;
  }
  &:nth-of-type(2) {
    max-width: 128px;
  }
  &:nth-of-type(3) {
    max-width: 90px;
  }
  &:nth-of-type(4) {
    max-width: 90px;
  }
  &:nth-of-type(5) {
    max-width: 80px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    max-width: 212px;
  }
  &:nth-of-type(2) {
    max-width: 166px;
  }
  &:nth-of-type(3) {
    max-width: 105px;
  }
  &:nth-of-type(4) {
    max-width: 105px;
  }
  &:nth-of-type(5) {
    max-width: 110px;
  }
}
}
`,te=n.td``,ne=n.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 203px;
    left: 285px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
`,ie=n.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`,se=n.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${t=>t.Recom?"background-color: #419B09":"background-color: #E9101D"}
`;function nt({diaryProducts:t,setDiaryProducts:d,blood:i}){const[r]=ge(),[f,c]=s.useState(window.innerWidth>=768),x=()=>{c(window.innerWidth>=768)};s.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]);const a=async o=>{try{await r(o);const l=t.filter(p=>p._id!==o);d(l)}catch{alert("Ops...Something went wrong. Please try again.")}};return e.jsx(e.Fragment,{children:e.jsx(tt,{children:f?e.jsxs(V,{children:[e.jsx(J,{children:e.jsxs(X,{children:[e.jsx(v,{children:"Title"}),e.jsx(v,{children:"Category"}),e.jsx(v,{children:"Calories"}),e.jsx(v,{children:"Weight"}),e.jsx(v,{children:"Recommend"})]})}),e.jsx(P,{children:t&&t.length!==0&&t.map(o=>{const l=!o.groupBloodNotAllowed[i];return e.jsx(Z,{as:B.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(ee,{children:[e.jsx(T,{children:o.title}),e.jsx(T,{children:o.category}),e.jsx(T,{children:o.calories}),e.jsx(T,{children:o.amount}),e.jsxs(T,{children:[e.jsx(se,{Recom:l}),l?"Yes":"No"]}),e.jsx(te,{children:e.jsx(ne,{onClick:()=>{a(o._id)},children:e.jsx(ie,{children:e.jsx("use",{href:`${j}#delete`})})})})]})},o._id)})})]}):e.jsx(e.Fragment,{children:e.jsx(P,{children:t&&t.length!==0&&t.map(o=>{const l=o.groupBloodNotAllowed[i]===!1;return e.jsxs(V,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:B.table,children:[e.jsx(J,{children:e.jsxs(X,{children:[e.jsx(v,{children:"Title"}),e.jsx(v,{children:"Category"}),e.jsx(v,{children:"Calories"}),e.jsx(v,{children:"Weight"}),e.jsx(v,{children:"Recommend"})]})}),e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsx(T,{children:o.title}),e.jsx(T,{children:o.category}),e.jsx(T,{children:o.calories}),e.jsx(T,{children:o.amount}),e.jsxs(T,{children:[e.jsx(se,{Recom:l}),l?"Yes":"No"]}),e.jsx(te,{children:e.jsx(ne,{onClick:()=>{a(o._id)},children:e.jsx(ie,{children:e.jsx("use",{href:`${j}#delete`})})})})]})})]},o._id)})})})})})}const it=n.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 824px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    height: 234px;
    padding: 16px 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
    
  }
`,st=n.h2`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18/14};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,rt=n.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,at=n.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,ot=n.div`
display: flex;
justify-content: space-between;
align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`,dt=n(ae)`
  display: flex;
  align-items: center;
  gap: 8px;
`,lt=n.p`
color: #e6533c;
font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18/14};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,pt=n.svg`
  width: 16px;
  height: 16px;
`;function xt({diaryProducts:t,setDiaryProducts:d,isLoading:i}){const{data:r}=de();return e.jsxs(it,{children:[e.jsxs(ot,{children:[e.jsx(at,{children:"Products"}),e.jsxs(dt,{to:"/Products",children:[e.jsx(lt,{children:"Add product"}),e.jsx(pt,{children:e.jsx("use",{href:`${j}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(nt,{setDiaryProducts:d,blood:r,diaryProducts:t}):e.jsx(e.Fragment,{children:e.jsx(P,{children:i?e.jsx(rt,{children:e.jsx(oe,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(st,{as:B.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}const ct=n.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,ht=n.div`
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`,mt=n.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ft=n.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ut=n.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:t})=>t.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`,re=n.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({theme:t})=>t.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: ${({theme:t})=>t.color.orangeSecond};
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: ${({theme:t})=>t.color.grayDisabled};
  }
`;function xe({selectedDate:t,setSelectedDate:d}){const[i,r]=s.useState([]),[f,c]=s.useState(null),x=we(je),[a,{data:o,error:l}]=ye();s.useEffect(()=>{if(o&&o.length!==0){const $=[...new Set([...o,..._(x,new Date)])].map(g=>new Date(g).getTime()).sort(),u=$.indexOf(new Date(t.toDateString()).getTime());r($),c(u)}else{const $=_(x,new Date).map(g=>new Date(g).getTime()).sort(),u=$.indexOf(new Date(t.toDateString()).getTime());r($),c(u)}},[o,x,t]),s.useEffect(()=>{if(l)return;(async()=>{await a()})()},[l,a]);const p=({date:w,view:$})=>w.getTime()>new Date(x).getTime()||w.toDateString()===new Date(x).toDateString()||$!=="month"?!1:!o.includes(w.toDateString()),h=()=>{const w=new Date(i[f-1]);d(w)},m=()=>{const w=new Date(i[f+1]);d(w)},y=t.toDateString()===new Date().toDateString(),I=t.toDateString()===new Date(i[0]).toDateString(),A=l?{minDate:new Date(x)}:{minDate:o&&o.length!==0?new Date(i[0]):new Date(x),tileDisabled:p};return e.jsxs(ct,{children:[e.jsx(ht,{children:e.jsx(ke,{...A,onChange:d,value:t,maxDate:new Date,children:e.jsxs(mt,{children:[e.jsxs(ft,{children:[" ",ze(t,"dd/MM/yyyy")]}),e.jsx(ut,{children:e.jsx(O,{name:"calendar"})})]})})}),e.jsxs("div",{children:[e.jsx(re,{"aria-label":"PrevDate",disabled:I,onClick:h,children:e.jsx(O,{name:"nav-arrow-left"})}),e.jsx(re,{"aria-label":"NextDate",disabled:y,onClick:m,children:e.jsx(O,{name:"nav-arrow-right"})})]})]})}xe.propTypes={selectedDate:W.instanceOf(Date).isRequired,setSelectedDate:W.func.isRequired};const gt=n.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,wt=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    & > :first-of-type {
      align-self: flex-end;
    }
    & > :last-of-type {
      align-self: flex-start;
    }
  }
`,jt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,yt=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 826px;
  }
`;function Ct(){const[t,d]=s.useState(new Date),[i,r]=s.useState([]),[f,c]=s.useState([]),[x,{isLoading:a}]=be(),{data:o}=De(),{data:l}=de(),p=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return s.useEffect(()=>{(async()=>{const m=await x(p);c(m.data.exerciseResult),r(m.data.productResult)})()},[x,p]),e.jsxs(gt,{children:[e.jsxs(wt,{children:[e.jsx(ve,{text:"Diary"}),e.jsx(xe,{selectedDate:t,setSelectedDate:d})]}),e.jsxs(jt,{children:[e.jsx(qe,{bmrData:o,diaryProducts:i,diaryExercises:f}),e.jsxs(yt,{children:[e.jsx(xt,{isLoading:a,setDiaryProducts:r,diaryProducts:i,blood:l}),e.jsx(et,{isLoading:a,diaryExercises:f,setDiaryExercises:c})]})]})]})}export{Ct as Diary};
