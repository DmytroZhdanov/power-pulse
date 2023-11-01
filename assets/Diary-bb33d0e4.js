import{r as s,n,j as e,f as j,z as fe,L as se,A as re,C as ue,F as oe,P as O,q as ge,G as we,H as je,I as L,J as ye,K as be}from"./index-e9fedd03.js";import{T as ve}from"./TitlePage-c01ab088.js";import{u as ae,f as De,a as Te,P as Ce,L as $e,m as S}from"./motion-8254b113.js";import{C as Ee,f as ke}from"./Calendar-4d0f1d17.js";import"./tiny-warning.esm-c932d744.js";function de(){const t=s.useRef(!1);return ae(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ze(){const t=de(),[a,i]=s.useState(0),o=s.useCallback(()=>{t.current&&i(a+1)},[a]);return[s.useCallback(()=>De.postRender(o),[o]),a]}class Re extends s.Component{getSnapshotBeforeUpdate(a){const i=this.props.childRef.current;if(i&&a.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Se({children:t,isPresent:a}){const i=s.useId(),o=s.useRef(null),f=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:c,height:m,top:r,left:d}=f.current;if(a||!o.current||!c||!m)return;o.current.dataset.motionPopId=i;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${m}px !important;
            top: ${r}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[a]),s.createElement(Re,{isPresent:a,childRef:o,sizeRef:f},s.cloneElement(t,{ref:o}))}const F=({children:t,initial:a,isPresent:i,onExitComplete:o,custom:f,presenceAffectsLayout:c,mode:m})=>{const r=Te(Be),d=s.useId(),p=s.useMemo(()=>({id:d,initial:a,isPresent:i,custom:f,onExitComplete:l=>{r.set(l,!0);for(const x of r.values())if(!x)return;o&&o()},register:l=>(r.set(l,!1),()=>r.delete(l))}),c?void 0:[i]);return s.useMemo(()=>{r.forEach((l,x)=>r.set(x,!1))},[i]),s.useEffect(()=>{!i&&!r.size&&o&&o()},[i]),m==="popLayout"&&(t=s.createElement(Se,{isPresent:i},t)),s.createElement(Ce.Provider,{value:p},t)};function Be(){return new Map}function Ae(t){return s.useEffect(()=>()=>t(),[])}const R=t=>t.key||"";function Pe(t,a){t.forEach(i=>{const o=R(i);a.set(o,i)})}function Ie(t){const a=[];return s.Children.forEach(t,i=>{s.isValidElement(i)&&a.push(i)}),a}const B=({children:t,custom:a,initial:i=!0,onExitComplete:o,exitBeforeEnter:f,presenceAffectsLayout:c=!0,mode:m="sync"})=>{const r=s.useContext($e).forceRender||ze()[0],d=de(),p=Ie(t);let l=p;const x=s.useRef(new Map).current,h=s.useRef(l),y=s.useRef(new Map).current,g=s.useRef(!0);if(ae(()=>{g.current=!1,Pe(p,y),h.current=l}),Ae(()=>{g.current=!0,y.clear(),x.clear()}),g.current)return s.createElement(s.Fragment,null,l.map(u=>s.createElement(F,{key:R(u),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:c,mode:m},u)));l=[...l];const A=h.current.map(R),I=p.map(R),pe=A.length;for(let u=0;u<pe;u++){const w=A[u];I.indexOf(w)===-1&&!x.has(w)&&x.set(w,void 0)}return m==="wait"&&x.size&&(l=[]),x.forEach((u,w)=>{if(I.indexOf(w)!==-1)return;const M=y.get(w);if(!M)return;const xe=A.indexOf(w);let P=u;if(!P){const he=()=>{y.delete(w),x.delete(w);const ce=h.current.findIndex(me=>me.key===w);if(h.current.splice(ce,1),!x.size){if(h.current=p,d.current===!1)return;r(),o&&o()}};P=s.createElement(F,{key:R(M),isPresent:!1,onExitComplete:he,custom:a,presenceAffectsLayout:c,mode:m},M),x.set(w,P)}l.splice(xe,0,P)}),l=l.map(u=>{const w=u.key;return x.has(w)?u:s.createElement(F,{key:R(u),isPresent:!0,presenceAffectsLayout:c,mode:m},u)}),s.createElement(s.Fragment,null,x.size?l:l.map(u=>s.cloneElement(u)))},Me=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Le=n.ul`
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
`,Fe=n.div`
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
`,We=n.svg`
  width: 24px;
  height: 24px;
`,_e=n.p`
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
`;function Ne({bmrData:t,diaryProducts:a,diaryExercises:i}){const[o,f]=s.useState(null),[c,m]=s.useState(null),[r,d]=s.useState(null);return s.useEffect(()=>{if(a.length===0){f(null);return}const l=a.map(x=>x.calories).reduce((x,h)=>x+h);f(l)},[a]),s.useEffect(()=>{if(i.length===0){m(null),d(null);return}const l=i.map(h=>h.calories).reduce((h,y)=>h+y);i.map(h=>h.time).reduce((h,y)=>h+y),m(l)},[i]),s.useEffect(()=>{if(i.length===0){d(null);return}const l=i.map(h=>h.time).reduce((h,y)=>h+y),x=Math.trunc(l/60);d(x)},[i]),e.jsxs(Me,{children:[e.jsxs(Le,{children:[e.jsxs(C,{highlighted:!0,children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#food`})}),e.jsx(k,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(z,{children:t||2200})]}),e.jsxs(C,{highlighted:!0,children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#dumbbell`})}),e.jsx(k,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(z,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#apple`})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(z,{children:o!==null?o:0})]}),e.jsxs(C,{children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#fire`})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(z,{children:c!==null?c:0})]}),e.jsxs(C,{caloriesOverConsumed:!(t-o>=0),children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#bubble`})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(z,{children:t-o})]}),e.jsxs(C,{caloriesOverBurned:110-r<0,children:[e.jsxs($,{children:[e.jsx(E,{children:e.jsx("use",{href:`${j}#running`})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(z,{children:[110-r," min"]})]})]}),e.jsxs(Fe,{children:[e.jsx(Oe,{children:e.jsx(We,{children:e.jsx("use",{href:`${j}#exclamation-mark`})})}),e.jsx(_e,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}const Ue=n.div`
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
`,G=n.td``,K=n.button`
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
  `,Q=n.svg`
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
`;function qe({diaryExercises:t,setDiaryExercises:a}){const[i]=fe(),[o,f]=s.useState(window.innerWidth>=768),c=()=>{f(window.innerWidth>=768)};s.useEffect(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]);const m=async r=>{try{await i(r);const d=t.filter(p=>p._id!==r);a(d)}catch(d){console.log(d)}};return e.jsx(e.Fragment,{children:e.jsx(Ue,{children:o?e.jsxs(W,{children:[e.jsx(_,{children:e.jsxs(N,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"})]})}),e.jsx(B,{children:t.map(r=>e.jsx(U,{as:S.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(q,{children:[e.jsx(v,{children:r.bodyPart}),e.jsx(v,{children:r.equipment}),e.jsx(v,{children:r.name}),e.jsx(v,{children:r.target}),e.jsx(v,{children:r.calories}),e.jsx(v,{children:r.time}),e.jsx(G,{children:e.jsx(K,{onClick:()=>{m(r._id)},children:e.jsx(Q,{children:e.jsx("use",{href:`${j}#delete`})})})})]})},r._id))})]}):e.jsx(e.Fragment,{children:e.jsx(B,{children:t.map(r=>e.jsxs(W,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:S.table,children:[e.jsx(_,{children:e.jsxs(N,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"})]})}),e.jsx(U,{children:e.jsxs(q,{children:[e.jsx(v,{children:r.bodyPart}),e.jsx(v,{children:r.equipment}),e.jsx(v,{children:r.name}),e.jsx(v,{children:r.target}),e.jsx(v,{children:r.calories}),e.jsx(v,{children:r.time}),e.jsx(G,{children:e.jsx(K,{onClick:()=>{m(r._id)},children:e.jsx(Q,{children:e.jsx("use",{href:`${j}#delete`})})})})]})})]},r._id))})})})})}const Ge=n.div`
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
`,Ke=n.h2`
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
`,Qe=n.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,He=n.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,Ye=n.div`
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
`,Ve=n(se)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Je=n.p`
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
`,Xe=n.svg`
  width: 16px;
  height: 16px;
`;function Ze({diaryExercises:t,setDiaryExercises:a,isLoading:i}){return e.jsxs(Ge,{children:[e.jsxs(Ye,{children:[e.jsx(He,{children:"Exercises"}),e.jsxs(Ve,{to:"/exercises",children:[e.jsx(Je,{children:"Add exercise"}),e.jsx(Xe,{children:e.jsx("use",{href:`${j}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(qe,{diaryExercises:t,setDiaryExercises:a}):e.jsx(e.Fragment,{children:e.jsx(B,{children:i?e.jsx(Qe,{children:e.jsx(re,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(Ke,{as:S.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}const et=n.div`
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
`,H=n.table`
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
`;function tt({diaryProducts:t,setDiaryProducts:a,blood:i}){const[o]=ue(),[f,c]=s.useState(window.innerWidth>=768),m=()=>{c(window.innerWidth>=768)};s.useEffect(()=>(window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[]);const r=async d=>{try{await o(d);const p=t.filter(l=>l._id!==d);a(p)}catch{alert("Ops...Something went wrong. Please try again.")}};return e.jsx(e.Fragment,{children:e.jsx(et,{children:f?e.jsxs(H,{children:[e.jsx(Y,{children:e.jsxs(V,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"})]})}),e.jsx(B,{children:t&&t.length!==0&&t.map(d=>{const p=!d.groupBloodNotAllowed[i];return e.jsx(J,{as:S.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(X,{children:[e.jsx(T,{children:d.title}),e.jsx(T,{children:d.category}),e.jsx(T,{children:d.calories}),e.jsx(T,{children:d.amount}),e.jsxs(T,{children:[e.jsx(ne,{Recom:p}),p?"Yes":"No"]}),e.jsx(Z,{children:e.jsx(ee,{onClick:()=>{r(d._id)},children:e.jsx(te,{children:e.jsx("use",{href:`${j}#delete`})})})})]})},d._id)})})]}):e.jsx(e.Fragment,{children:e.jsx(B,{children:t&&t.length!==0&&t.map(d=>{const p=d.groupBloodNotAllowed[i]===!1;return e.jsxs(H,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:S.table,children:[e.jsx(Y,{children:e.jsxs(V,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"})]})}),e.jsx(J,{children:e.jsxs(X,{children:[e.jsx(T,{children:d.title}),e.jsx(T,{children:d.category}),e.jsx(T,{children:d.calories}),e.jsx(T,{children:d.amount}),e.jsxs(T,{children:[e.jsx(ne,{Recom:p}),p?"Yes":"No"]}),e.jsx(Z,{children:e.jsx(ee,{onClick:()=>{r(d._id)},children:e.jsx(te,{children:e.jsx("use",{href:`${j}#delete`})})})})]})})]},d._id)})})})})})}const nt=n.div`
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
`,it=n.h2`
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
`,st=n.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,rt=n.h2`
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
`,at=n(se)`
  display: flex;
  align-items: center;
  gap: 8px;
`,dt=n.p`
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
`,lt=n.svg`
  width: 16px;
  height: 16px;
`;function pt({diaryProducts:t,setDiaryProducts:a,isLoading:i}){const{data:o}=oe();return e.jsxs(nt,{children:[e.jsxs(ot,{children:[e.jsx(rt,{children:"Products"}),e.jsxs(at,{to:"/Products",children:[e.jsx(dt,{children:"Add product"}),e.jsx(lt,{children:e.jsx("use",{href:`${j}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(tt,{setDiaryProducts:a,blood:o,diaryProducts:t}):e.jsx(e.Fragment,{children:e.jsx(B,{children:i?e.jsx(st,{children:e.jsx(re,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(it,{as:S.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}const xt=n.div`
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
`,ct=n.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,mt=n.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ft=n.div`
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
`;function le({selectedDate:t,setSelectedDate:a}){const i=new Date(ge(we)),[o,{data:f,error:c}]=je();s.useEffect(()=>{if(c)return;(async()=>{await o()})()},[c,o]);const m=({date:g,view:A})=>g.getTime()>i.getTime()||g.toDateString()===i.toDateString()||A!=="month"?!1:!f.includes(g.toDateString()),r=()=>{const g=new Date(t);g.setDate(t.getDate()-1),a(g)},d=()=>{const g=new Date(t);g.setDate(t.getDate()+1),a(g)},p=t.toDateString()===i.toDateString(),l=t.toDateString()===new Date().toDateString(),x=p||t.getTime()<i.getTime(),h=l||t.getTime()<i.getTime()&&t.toDateString()!==i.toDateString(),y=c?{minDate:i}:{tileDisabled:m};return e.jsxs(xt,{children:[e.jsx(ht,{children:e.jsx(Ee,{...y,onChange:a,value:t,maxDate:new Date,children:e.jsxs(ct,{children:[e.jsxs(mt,{children:[" ",ke(t,"dd/MM/yyyy")]}),e.jsx(ft,{children:e.jsx(L,{name:"calendar"})})]})})}),e.jsxs("div",{children:[e.jsx(ie,{disabled:x,onClick:r,children:e.jsx(L,{name:"nav-arrow-left"})}),e.jsx(ie,{disabled:h,onClick:d,children:e.jsx(L,{name:"nav-arrow-right"})})]})]})}le.propTypes={selectedDate:O.instanceOf(Date).isRequired,setSelectedDate:O.func.isRequired};const ut=n.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,gt=n.div`
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
`,wt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,jt=n.div`
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
`;function Ct(){const[t,a]=s.useState(new Date),[i,o]=s.useState([]),[f,c]=s.useState([]),[m,{isLoading:r}]=ye(),{data:d}=be(),{data:p}=oe(),l=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return s.useEffect(()=>{(async()=>{const h=await m(l);c(h.data.exerciseResult),o(h.data.productResult)})()},[m,l]),e.jsxs(ut,{children:[e.jsxs(gt,{children:[e.jsx(ve,{text:"Diary"}),e.jsx(le,{selectedDate:t,setSelectedDate:a})]}),e.jsxs(wt,{children:[e.jsx(Ne,{bmrData:d,diaryProducts:i,diaryExercises:f}),e.jsxs(jt,{children:[e.jsx(pt,{isLoading:r,setDiaryProducts:o,diaryProducts:i,blood:p}),e.jsx(Ze,{isLoading:r,diaryExercises:f,setDiaryExercises:c})]})]})]})}export{Ct as Diary};
