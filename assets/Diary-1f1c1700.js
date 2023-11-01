import{r as s,n,j as e,f as j,z as me,L as se,A as re,C as fe,F as ue,P as F,q as ge,G as we,H as je,I as L,J as ye}from"./index-eacbb6df.js";import{T as be}from"./TitlePage-7136aeb1.js";import{u as oe,f as ve,a as De,P as Te,L as Ce,m as P}from"./motion-d3bd6b0f.js";import{C as $e,f as Ee}from"./Calendar-94f6f844.js";import"./tiny-warning.esm-c932d744.js";function ae(){const t=s.useRef(!1);return oe(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ke(){const t=ae(),[d,i]=s.useState(0),o=s.useCallback(()=>{t.current&&i(d+1)},[d]);return[s.useCallback(()=>ve.postRender(o),[o]),d]}class ze extends s.Component{getSnapshotBeforeUpdate(d){const i=this.props.childRef.current;if(i&&d.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Re({children:t,isPresent:d}){const i=s.useId(),o=s.useRef(null),f=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:x,height:h,top:r,left:a}=f.current;if(d||!o.current||!x||!h)return;o.current.dataset.motionPopId=i;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${h}px !important;
            top: ${r}px !important;
            left: ${a}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[d]),s.createElement(ze,{isPresent:d,childRef:o,sizeRef:f},s.cloneElement(t,{ref:o}))}const O=({children:t,initial:d,isPresent:i,onExitComplete:o,custom:f,presenceAffectsLayout:x,mode:h})=>{const r=De(Pe),a=s.useId(),p=s.useMemo(()=>({id:a,initial:d,isPresent:i,custom:f,onExitComplete:l=>{r.set(l,!0);for(const c of r.values())if(!c)return;o&&o()},register:l=>(r.set(l,!1),()=>r.delete(l))}),x?void 0:[i]);return s.useMemo(()=>{r.forEach((l,c)=>r.set(c,!1))},[i]),s.useEffect(()=>{!i&&!r.size&&o&&o()},[i]),h==="popLayout"&&(t=s.createElement(Re,{isPresent:i},t)),s.createElement(Te.Provider,{value:p},t)};function Pe(){return new Map}function Se(t){return s.useEffect(()=>()=>t(),[])}const R=t=>t.key||"";function Be(t,d){t.forEach(i=>{const o=R(i);d.set(o,i)})}function Ae(t){const d=[];return s.Children.forEach(t,i=>{s.isValidElement(i)&&d.push(i)}),d}const S=({children:t,custom:d,initial:i=!0,onExitComplete:o,exitBeforeEnter:f,presenceAffectsLayout:x=!0,mode:h="sync"})=>{const r=s.useContext(Ce).forceRender||ke()[0],a=ae(),p=Ae(t);let l=p;const c=s.useRef(new Map).current,m=s.useRef(l),y=s.useRef(new Map).current,g=s.useRef(!0);if(oe(()=>{g.current=!1,Be(p,y),m.current=l}),Se(()=>{g.current=!0,y.clear(),c.clear()}),g.current)return s.createElement(s.Fragment,null,l.map(u=>s.createElement(O,{key:R(u),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:x,mode:h},u)));l=[...l];const B=m.current.map(R),I=p.map(R),le=B.length;for(let u=0;u<le;u++){const w=B[u];I.indexOf(w)===-1&&!c.has(w)&&c.set(w,void 0)}return h==="wait"&&c.size&&(l=[]),c.forEach((u,w)=>{if(I.indexOf(w)!==-1)return;const M=y.get(w);if(!M)return;const pe=B.indexOf(w);let A=u;if(!A){const xe=()=>{y.delete(w),c.delete(w);const he=m.current.findIndex(ce=>ce.key===w);if(m.current.splice(he,1),!c.size){if(m.current=p,a.current===!1)return;r(),o&&o()}};A=s.createElement(O,{key:R(M),isPresent:!1,onExitComplete:xe,custom:d,presenceAffectsLayout:x,mode:h},M),c.set(w,A)}l.splice(pe,0,A)}),l=l.map(u=>{const w=u.key;return c.has(w)?u:s.createElement(O,{key:R(u),isPresent:!0,presenceAffectsLayout:x,mode:h},u)}),s.createElement(s.Fragment,null,c.size?l:l.map(u=>s.cloneElement(u)))},Ie=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Me=n.ul`
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
`,$=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,E=n.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,k=n.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${t=>t.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,z=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Le=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Oe=n.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,Fe=n.svg`
  width: 24px;
  height: 24px;
`,We=n.p`
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
`;function _e({bmrData:t,diaryProducts:d,diaryExercises:i}){const[o,f]=s.useState(null),[x,h]=s.useState(null),[r,a]=s.useState(null);return s.useEffect(()=>{if(d.length===0){f(null);return}const l=d.map(c=>c.calories).reduce((c,m)=>c+m);f(l)}),s.useEffect(()=>{if(i.length===0){h(null),a(null);return}const l=i.map(m=>m.calories).reduce((m,y)=>m+y);i.map(m=>m.time).reduce((m,y)=>m+y),h(l)}),s.useEffect(()=>{if(i.length===0){a(null);return}const l=i.map(m=>m.time).reduce((m,y)=>m+y),c=Math.trunc(l/60);a(c)}),e.jsxs(Ie,{children:[e.jsxs(Me,{children:[e.jsxs(C,{highlighted:!0,children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#food`})}),e.jsx(k,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(z,{children:t||2200})]}),e.jsxs(C,{highlighted:!0,children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#dumbbell`})}),e.jsx(k,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(z,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#apple`})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(z,{children:o!==null?o:0})]}),e.jsxs(C,{children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#fire`})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(z,{children:x!==null?x:0})]}),e.jsxs(C,{caloriesOverConsumed:!(t-o>=0),children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#bubble`})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(z,{children:t-o})]}),e.jsxs(C,{caloriesOverBurned:110-r<0,children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#running`})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(z,{children:[110-r," min"]})]})]}),e.jsxs(Le,{children:[e.jsx(Oe,{children:e.jsx(Fe,{children:e.jsx("use",{href:`${j}#exclamation-mark`})})}),e.jsx(We,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}const Ne=n.div`
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
`,W=n.table`
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
`,_=n.thead`
  text-align: left;
`,N=n.tr`
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
`,U=n.tbody``,q=n.tr``,v=n.td`
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
`,G=n.td``,H=n.button`
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
  `,K=n.svg`
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
`;function Ue({diaryExercises:t,setDiaryExercises:d}){const[i]=me(),[o,f]=s.useState(window.innerWidth>=768),x=()=>{f(window.innerWidth>=768)};s.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]);const h=async r=>{try{await i(r);const a=t.filter(p=>p._id!==r);d(a)}catch(a){console.log(a)}};return e.jsx(e.Fragment,{children:e.jsx(Ne,{children:o?e.jsxs(W,{children:[e.jsx(_,{children:e.jsxs(N,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"})]})}),e.jsx(S,{children:t.map(r=>e.jsx(U,{as:P.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(q,{children:[e.jsx(v,{children:r.bodyPart}),e.jsx(v,{children:r.equipment}),e.jsx(v,{children:r.name}),e.jsx(v,{children:r.target}),e.jsx(v,{children:r.calories}),e.jsx(v,{children:r.time}),e.jsx(G,{children:e.jsx(H,{onClick:()=>{h(r._id)},children:e.jsx(K,{children:e.jsx("use",{href:`${j}#delete`})})})})]})},r._id))})]}):e.jsx(e.Fragment,{children:e.jsx(S,{children:t.map(r=>e.jsxs(W,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:P.table,children:[e.jsx(_,{children:e.jsxs(N,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"})]})}),e.jsx(U,{children:e.jsxs(q,{children:[e.jsx(v,{children:r.bodyPart}),e.jsx(v,{children:r.equipment}),e.jsx(v,{children:r.name}),e.jsx(v,{children:r.target}),e.jsx(v,{children:r.calories}),e.jsx(v,{children:r.time}),e.jsx(G,{children:e.jsx(H,{onClick:()=>{h(r._id)},children:e.jsx(K,{children:e.jsx("use",{href:`${j}#delete`})})})})]})})]},r._id))})})})})}const qe=n.div`
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
`,He=n.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Ke=n.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,Qe=n.div`
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
`,Ye=n(se)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ve=n.p`
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
`,Je=n.svg`
  width: 16px;
  height: 16px;
`;function Xe({diaryExercises:t,setDiaryExercises:d,isLoading:i}){return e.jsxs(qe,{children:[e.jsxs(Qe,{children:[e.jsx(Ke,{children:"Exercises"}),e.jsxs(Ye,{to:"/exercises",children:[e.jsx(Ve,{children:"Add exercise"}),e.jsx(Je,{children:e.jsx("use",{href:`${j}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(Ue,{diaryExercises:t,setDiaryExercises:d}):e.jsx(e.Fragment,{children:e.jsx(S,{children:i?e.jsx(He,{children:e.jsx(re,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(Ge,{as:P.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}const Ze=n.div`
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
`,Q=n.table`
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
`,Y=n.thead`
  text-align: left;
`,V=n.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,D=n.th`
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
  `,J=n.tbody``,X=n.tr``,T=n.td`
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
`,Z=n.td``,ee=n.button`
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
`,te=n.svg`
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
`,ne=n.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${t=>t.Recom?"background-color: #419B09":"background-color: #E9101D"}
`;function et({diaryProducts:t,setDiaryProducts:d,blood:i}){const[o]=fe(),[f,x]=s.useState(window.innerWidth>=768),h=()=>{x(window.innerWidth>=768)};s.useEffect(()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]);const r=async a=>{try{await o(a);const p=t.filter(l=>l._id!==a);d(p)}catch{alert("Ops...Something went wrong. Please try again.")}};return e.jsx(e.Fragment,{children:e.jsx(Ze,{children:f?e.jsxs(Q,{children:[e.jsx(Y,{children:e.jsxs(V,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"})]})}),e.jsx(S,{children:t&&t.length!==0&&t.map(a=>{const p=!a.groupBloodNotAllowed[i];return e.jsx(J,{as:P.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(X,{children:[e.jsx(T,{children:a.title}),e.jsx(T,{children:a.category}),e.jsx(T,{children:a.calories}),e.jsx(T,{children:a.amount}),e.jsxs(T,{children:[e.jsx(ne,{Recom:p}),p?"Yes":"No"]}),e.jsx(Z,{children:e.jsx(ee,{onClick:()=>{r(a._id)},children:e.jsx(te,{children:e.jsx("use",{href:`${j}#delete`})})})})]})},a._id)})})]}):e.jsx(e.Fragment,{children:e.jsx(S,{children:t&&t.length!==0&&t.map(a=>{const p=a.groupBloodNotAllowed[i]===!1;return e.jsxs(Q,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:P.table,children:[e.jsx(Y,{children:e.jsxs(V,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"})]})}),e.jsx(J,{children:e.jsxs(X,{children:[e.jsx(T,{children:a.title}),e.jsx(T,{children:a.category}),e.jsx(T,{children:a.calories}),e.jsx(T,{children:a.amount}),e.jsxs(T,{children:[e.jsx(ne,{Recom:p}),p?"Yes":"No"]}),e.jsx(Z,{children:e.jsx(ee,{onClick:()=>{r(a._id)},children:e.jsx(te,{children:e.jsx("use",{href:`${j}#delete`})})})})]})})]},a._id)})})})})})}const tt=n.div`
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
`,nt=n.h2`
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
`,it=n.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,st=n.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,rt=n.div`
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
`,ot=n(se)`
  display: flex;
  align-items: center;
  gap: 8px;
`,at=n.p`
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
`,dt=n.svg`
  width: 16px;
  height: 16px;
`;function lt({diaryProducts:t,setDiaryProducts:d,isLoading:i}){const{data:o}=ue();return e.jsxs(tt,{children:[e.jsxs(rt,{children:[e.jsx(st,{children:"Products"}),e.jsxs(ot,{to:"/Products",children:[e.jsx(at,{children:"Add product"}),e.jsx(dt,{children:e.jsx("use",{href:`${j}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(et,{setDiaryProducts:d,blood:o,diaryProducts:t}):e.jsx(e.Fragment,{children:e.jsx(S,{children:i?e.jsx(it,{children:e.jsx(re,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(nt,{as:P.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}const pt=n.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,xt=n.div`
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`,ht=n.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ct=n.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,mt=n.div`
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
`,ie=n.button`
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
`;function de({selectedDate:t,setSelectedDate:d}){const i=new Date(ge(we)),[o,{data:f,error:x}]=je();s.useEffect(()=>{if(x)return;(async()=>{await o()})()},[x,o]);const h=({date:g,view:B})=>g.getTime()>i.getTime()||g.toDateString()===i.toDateString()||B!=="month"?!1:!f.includes(g.toDateString()),r=()=>{const g=new Date(t);g.setDate(t.getDate()-1),d(g)},a=()=>{const g=new Date(t);g.setDate(t.getDate()+1),d(g)},p=t.toDateString()===i.toDateString(),l=t.toDateString()===new Date().toDateString(),c=p||t.getTime()<i.getTime(),m=l||t.getTime()<i.getTime()&&t.toDateString()!==i.toDateString(),y=x?{minDate:i}:{tileDisabled:h};return e.jsxs(pt,{children:[e.jsx(xt,{children:e.jsx($e,{...y,onChange:d,value:t,maxDate:new Date,children:e.jsxs(ht,{children:[e.jsxs(ct,{children:[" ",Ee(t,"dd/MM/yyyy")]}),e.jsx(mt,{children:e.jsx(L,{name:"calendar"})})]})})}),e.jsxs("div",{children:[e.jsx(ie,{disabled:c,onClick:r,children:e.jsx(L,{name:"nav-arrow-left"})}),e.jsx(ie,{disabled:m,onClick:a,children:e.jsx(L,{name:"nav-arrow-right"})})]})]})}de.propTypes={selectedDate:F.instanceOf(Date).isRequired,setSelectedDate:F.func.isRequired};const ft=n.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,ut=n.div`
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
`,gt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,wt=n.div`
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
`;function Tt(){const[t,d]=s.useState(new Date),[i,o]=s.useState([]),[f,x]=s.useState([]),[h,{isLoading:r}]=ye(),a=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return s.useEffect(()=>{(async()=>{const l=await h(a);x(l.data.exerciseResult),o(l.data.productResult)})()},[h,a]),e.jsxs(ft,{children:[e.jsxs(ut,{children:[e.jsx(be,{text:"Diary"}),e.jsx(de,{selectedDate:t,setSelectedDate:d})]}),e.jsxs(gt,{children:[e.jsx(_e,{bmrData:userParams&&userParams.data.bmr,diaryProducts:i,diaryExercises:f}),e.jsxs(wt,{children:[e.jsx(lt,{isLoading:r,setDiaryProducts:o,diaryProducts:i,blood:userParams&&userParams.data.user.userParams.blood}),e.jsx(Xe,{isLoading:r,diaryExercises:f,setDiaryExercises:x})]})]})]})}export{Tt as Diary};
