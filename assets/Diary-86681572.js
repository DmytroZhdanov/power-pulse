import{r as o,n as r,P as i,j as e,f as b,J as je,L as oe,K as ae,M as De,N as de,t as Re,O as ve,Q as qe,I as O,S as Te,q as $e}from"./index-c86ad4e7.js";import{T as Ee}from"./TitlePage-cded356c.js";import{u as le,f as Ce,a as ke,P as ze,L as Se,m as P}from"./motion-8d7f8d18.js";import{C as Pe,f as Ie}from"./Calendar-a840f8d8.js";import"./tiny-warning.esm-c932d744.js";const F=(t,d)=>{const s=[];let a=new Date(t);const m=new Date(d);for(;a<=m;){const u=a.toDateString();s.push(u),a.setDate(a.getDate()+1)}return s.push(d.toDateString()),s};function ce(){const t=o.useRef(!1);return le(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Be(){const t=ce(),[d,s]=o.useState(0),a=o.useCallback(()=>{t.current&&s(d+1)},[d]);return[o.useCallback(()=>Ce.postRender(a),[a]),d]}class Ae extends o.Component{getSnapshotBeforeUpdate(d){const s=this.props.childRef.current;if(s&&d.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=s.offsetHeight||0,a.width=s.offsetWidth||0,a.top=s.offsetTop,a.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Me({children:t,isPresent:d}){const s=o.useId(),a=o.useRef(null),m=o.useRef({width:0,height:0,top:0,left:0});return o.useInsertionEffect(()=>{const{width:u,height:p,top:x,left:n}=m.current;if(d||!a.current||!u||!p)return;a.current.dataset.motionPopId=s;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${p}px !important;
            top: ${x}px !important;
            left: ${n}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[d]),o.createElement(Ae,{isPresent:d,childRef:a,sizeRef:m},o.cloneElement(t,{ref:a}))}const _=({children:t,initial:d,isPresent:s,onExitComplete:a,custom:m,presenceAffectsLayout:u,mode:p})=>{const x=ke(Le),n=o.useId(),l=o.useMemo(()=>({id:n,initial:d,isPresent:s,custom:m,onExitComplete:c=>{x.set(c,!0);for(const h of x.values())if(!h)return;a&&a()},register:c=>(x.set(c,!1),()=>x.delete(c))}),u?void 0:[s]);return o.useMemo(()=>{x.forEach((c,h)=>x.set(h,!1))},[s]),o.useEffect(()=>{!s&&!x.size&&a&&a()},[s]),p==="popLayout"&&(t=o.createElement(Me,{isPresent:s},t)),o.createElement(ze.Provider,{value:l},t)};function Le(){return new Map}function Oe(t){return o.useEffect(()=>()=>t(),[])}const S=t=>t.key||"";function _e(t,d){t.forEach(s=>{const a=S(s);d.set(a,s)})}function Fe(t){const d=[];return o.Children.forEach(t,s=>{o.isValidElement(s)&&d.push(s)}),d}const I=({children:t,custom:d,initial:s=!0,onExitComplete:a,exitBeforeEnter:m,presenceAffectsLayout:u=!0,mode:p="sync"})=>{const x=o.useContext(Se).forceRender||Be()[0],n=ce(),l=Fe(t);let c=l;const h=o.useRef(new Map).current,g=o.useRef(c),T=o.useRef(new Map).current,B=o.useRef(!0);if(le(()=>{B.current=!1,_e(l,T),g.current=c}),Oe(()=>{B.current=!0,T.clear(),h.clear()}),B.current)return o.createElement(o.Fragment,null,c.map(f=>o.createElement(_,{key:S(f),isPresent:!0,initial:s?void 0:!1,presenceAffectsLayout:u,mode:p},f)));c=[...c];const A=g.current.map(S),y=l.map(S),q=A.length;for(let f=0;f<q;f++){const w=A[f];y.indexOf(w)===-1&&!h.has(w)&&h.set(w,void 0)}return p==="wait"&&h.size&&(c=[]),h.forEach((f,w)=>{if(y.indexOf(w)!==-1)return;const L=T.get(w);if(!L)return;const ge=A.indexOf(w);let M=f;if(!M){const we=()=>{T.delete(w),h.delete(w);const ye=g.current.findIndex(be=>be.key===w);if(g.current.splice(ye,1),!h.size){if(g.current=l,n.current===!1)return;x(),a&&a()}};M=o.createElement(_,{key:S(L),isPresent:!1,onExitComplete:we,custom:d,presenceAffectsLayout:u,mode:p},L),h.set(w,M)}c.splice(ge,0,M)}),c=c.map(f=>{const w=f.key;return h.has(w)?f:o.createElement(_,{key:S(f),isPresent:!0,presenceAffectsLayout:u,mode:p},f)}),o.createElement(o.Fragment,null,h.size?c:c.map(f=>o.cloneElement(f)))},We=r.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ne=r.ul`
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
`,$=r.li`
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
`,E=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,C=r.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,k=r.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${t=>t.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,z=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Ue=r.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Qe=r.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,Ke=r.svg`
  width: 24px;
  height: 24px;
`,Ge=r.p`
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
`;function pe({bmrData:t,diaryProducts:d,diaryExercises:s}){const[a,m]=o.useState(null),[u,p]=o.useState(null),[x,n]=o.useState(null);return o.useEffect(()=>{if(d.length===0){m(null);return}const c=d.map(h=>h.calories).reduce((h,g)=>h+g);m(c)},[d]),o.useEffect(()=>{if(s.length===0){p(null);return}const c=s.map(h=>h.calories).reduce((h,g)=>h+g);p(c)},[s]),o.useEffect(()=>{if(s.length===0){n(null);return}const c=s.map(g=>g.time).reduce((g,T)=>g+T),h=Math.trunc(c/60);n(h)},[s]),e.jsxs(We,{children:[e.jsxs(Ne,{children:[e.jsxs($,{highlighted:!0,children:[e.jsxs(E,{children:[e.jsx(C,{children:e.jsx("use",{href:`${b}#food`})}),e.jsx(k,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(z,{children:t||2200})]}),e.jsxs($,{highlighted:!0,children:[e.jsxs(E,{children:[e.jsx(C,{children:e.jsx("use",{href:`${b}#dumbbell`})}),e.jsx(k,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(z,{children:"110 min"})]}),e.jsxs($,{children:[e.jsxs(E,{children:[e.jsx(C,{children:e.jsx("use",{href:`${b}#apple`})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(z,{children:a!==null?a:0})]}),e.jsxs($,{children:[e.jsxs(E,{children:[e.jsx(C,{children:e.jsx("use",{href:`${b}#fire`})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(z,{children:u!==null?u:0})]}),e.jsxs($,{caloriesOverConsumed:!(t-a>=0),children:[e.jsxs(E,{children:[e.jsx(C,{children:e.jsx("use",{href:`${b}#bubble`})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(z,{children:t?t-a:2200})]}),e.jsxs($,{caloriesOverBurned:110-x<0,children:[e.jsxs(E,{children:[e.jsx(C,{children:e.jsx("use",{href:`${b}#running`})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(z,{children:[110-x," min"]})]})]}),e.jsxs(Ue,{children:[e.jsx(Qe,{children:e.jsx(Ke,{children:e.jsx("use",{href:`${b}#exclamation-mark`})})}),e.jsx(Ge,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}pe.propTypes={bmrData:i.number,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const Ye=r.div`
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
`,W=r.table`
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
`,N=r.thead`
  text-align: left;
`,U=r.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,j=r.th`
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
    left: 3%;
  }
  &:nth-of-type(5) {
    top: 248px;
    left: 33%;
    width: 22%;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:nth-of-type(6) {
    top: 248px;
    left: 60%;
  }
}

@media screen and (min-width: 768px) {
  position:relative;
  &:first-of-type {
    width: 90px;
  }
  &:nth-of-type(2) {
    width: 122px;
  }
  &:nth-of-type(3) {
    width: 118px;
  }
  &:nth-of-type(4) {
    width: 84px;
  }
  &:nth-of-type(5) {
    width: 68px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  &:nth-of-type(6) {
    width: 102px;
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
    width: 96px;
  }
  &:nth-of-type(5) {
    width: 76px;
  }
  &:nth-of-type(6) {
    width: 106px;
  }
}  
`,Q=r.tbody``,K=r.tr``,D=r.td`
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(239, 237, 232, 0.3);
  &::first-letter {
    text-transform: uppercase;
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18/14};
    &:first-of-type {
      top: 34px;
      width: 93.6%;
    }
    &:nth-of-type(2) {
      top: 114px;
      width: 93.6%;;
    }
    &:nth-of-type(3) {
      top: 194px;
      width:93.6%;;
    }
    &:nth-of-type(4) {
      top: 274px;
      left: 3%;
      width: 25%;;
    }
    &:nth-of-type(5) {
      top: 274px;
      left: 32%;
      width: 22%;
    }
    &:nth-of-type(6) {
      top: 274px;
      left: 58%;
      width: 30%;
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
     max-width: 122px;
    }
    &:nth-of-type(3) {
      max-width: 118px;
    }
    &:nth-of-type(4) {
      max-width: 84px;
    }
    &:nth-of-type(5) {
     max-width: 68px;
    }
    &:nth-of-type(6) {
      max-width: 102px;
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
`,G=r.td``,Y=r.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 283px;
    left: 91%;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 12px;
  }
  `,H=r.svg`
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
`;function he({diaryExercises:t,setDiaryExercises:d}){const[s]=je(),[a,m]=o.useState(window.innerWidth>=768),u=()=>{m(window.innerWidth>=768)};o.useEffect(()=>(window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}),[]);const p=async n=>{try{await s(n);const l=t.filter(c=>c._id!==n);d(l)}catch(l){console.log(l)}},x=n=>`${Math.floor(n/60)} min ${n%60===0?"":n%60+"s"}`;return e.jsx(e.Fragment,{children:e.jsx(Ye,{children:a?e.jsxs(W,{children:[e.jsx(N,{children:e.jsxs(U,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:"Target"}),e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:"Time"})]})}),e.jsx(I,{children:t.map(n=>e.jsx(Q,{as:P.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(K,{children:[e.jsx(D,{children:n.bodyPart}),e.jsx(D,{children:n.equipment}),e.jsx(D,{children:n.name}),e.jsx(D,{children:n.target}),e.jsx(D,{children:n.calories}),e.jsx(D,{children:x(n.time)}),e.jsx(G,{children:e.jsx(Y,{onClick:()=>{p(n._id)},children:e.jsx(H,{children:e.jsx("use",{href:`${b}#delete`})})})})]})},n._id))})]}):e.jsx(e.Fragment,{children:e.jsx(I,{children:t.map(n=>e.jsxs(W,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:P.table,children:[e.jsx(N,{children:e.jsxs(U,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:"Target"}),e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:"Time"})]})}),e.jsx(Q,{children:e.jsxs(K,{children:[e.jsx(D,{children:n.bodyPart}),e.jsx(D,{children:n.equipment}),e.jsx(D,{children:n.name}),e.jsx(D,{children:n.target}),e.jsx(D,{children:n.calories}),e.jsx(D,{children:x(n.time)}),e.jsx(G,{children:e.jsx(Y,{onClick:()=>{p(n._id)},children:e.jsx(H,{children:e.jsx("use",{href:`${b}#delete`})})})})]})})]},n._id))})})})})}he.propTypes={setDiaryExercises:i.func.isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const He=r.div`
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
`,Ve=r.h2`
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
`,Je=r.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Xe=r.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,Ze=r.div`
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
`,et=r(oe)`
  display: flex;
  align-items: center;
  gap: 8px;
`,tt=r.p`
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
`,it=r.svg`
  width: 16px;
  height: 16px;
`;function xe({diaryExercises:t,setDiaryExercises:d,isLoading:s}){return e.jsxs(He,{children:[e.jsxs(Ze,{children:[e.jsx(Xe,{children:"Exercises"}),e.jsxs(et,{to:"/exercises",children:[e.jsx(tt,{children:"Add exercise"}),e.jsx(it,{children:e.jsx("use",{href:`${b}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(he,{diaryExercises:t,setDiaryExercises:d}):e.jsx(e.Fragment,{children:e.jsx(I,{children:s?e.jsx(Je,{children:e.jsx(ae,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(Ve,{as:P.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}xe.propTypes={isLoading:i.bool,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired,setDiaryExercises:i.func.isRequired};const nt=r.div`
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
`,V=r.table`
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
`,J=r.thead`
  text-align: left;
`,X=r.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,R=r.th`
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
      left: 33.2%;
    }
    &:nth-of-type(5) {
      top: 168px;
      left: 63.2%;
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
  `,Z=r.tbody``,ee=r.tr``,v=r.td`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::first-letter {
    text-transform: uppercase;
  }
 
@media screen and (max-width: 767px) {
  position: absolute; 
  padding: 10px 14px;
  font-size: 14px;
  line-height: ${18/14};
  &:first-of-type {
    top: 34px;
    width: 93.6%;
  }
  &:nth-of-type(2) {
    top: 114px;
    width: 93.6%;
  }
  &:nth-of-type(3) {
    top: 194px;
    width: 26.2%;;
  }
  &:nth-of-type(4) {
    top: 194px;
    left: 33.2%;
    width: 25.9%;;
  }
  &:nth-of-type(5) {
    top: 194px;
    left: 63.2%;
    width: 24.6%;
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
`,te=r.td``,ie=r.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 203px;
    left: 91%;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
`,ne=r.svg`
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
`,re=r.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${t=>t.Recom?"background-color: #419B09":"background-color: #E9101D"}
`;function ue({diaryProducts:t,setDiaryProducts:d,blood:s}){const[a]=De(),[m,u]=o.useState(window.innerWidth>=768),p=()=>{u(window.innerWidth>=768)};o.useEffect(()=>(window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]);const x=async n=>{try{await a(n);const l=t.filter(c=>c._id!==n);d(l)}catch{alert("Ops...Something went wrong. Please try again.")}};return e.jsx(e.Fragment,{children:e.jsx(nt,{children:m?e.jsxs(V,{children:[e.jsx(J,{children:e.jsxs(X,{children:[e.jsx(R,{children:"Title"}),e.jsx(R,{children:"Category"}),e.jsx(R,{children:"Calories"}),e.jsx(R,{children:"Weight"}),e.jsx(R,{children:"Recommend"})]})}),e.jsx(I,{children:t&&t.length!==0&&t.map(n=>{const l=!n.groupBloodNotAllowed[s];return e.jsx(Z,{as:P.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:e.jsxs(ee,{children:[e.jsx(v,{children:n.title}),e.jsx(v,{children:n.category}),e.jsx(v,{children:n.calories}),e.jsx(v,{children:n.amount}),e.jsxs(v,{children:[e.jsx(re,{Recom:l}),l?"Yes":"No"]}),e.jsx(te,{children:e.jsx(ie,{onClick:()=>{x(n._id)},children:e.jsx(ne,{children:e.jsx("use",{href:`${b}#delete`})})})})]})},n._id)})})]}):e.jsx(e.Fragment,{children:e.jsx(I,{children:t&&t.length!==0&&t.map(n=>{const l=n.groupBloodNotAllowed[s]===!1;return e.jsxs(V,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:P.table,children:[e.jsx(J,{children:e.jsxs(X,{children:[e.jsx(R,{children:"Title"}),e.jsx(R,{children:"Category"}),e.jsx(R,{children:"Calories"}),e.jsx(R,{children:"Weight"}),e.jsx(R,{children:"Recommend"})]})}),e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsx(v,{children:n.title}),e.jsx(v,{children:n.category}),e.jsx(v,{children:n.calories}),e.jsx(v,{children:n.amount}),e.jsxs(v,{children:[e.jsx(re,{Recom:l}),l?"Yes":"No"]}),e.jsx(te,{children:e.jsx(ie,{onClick:()=>{x(n._id)},children:e.jsx(ne,{children:e.jsx("use",{href:`${b}#delete`})})})})]})})]},n._id)})})})})})}ue.propTypes={blood:i.number,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const rt=r.div`
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
`,st=r.h2`
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
`,ot=r.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,at=r.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,dt=r.div`
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
`,lt=r(oe)`
  display: flex;
  align-items: center;
  gap: 8px;
`,ct=r.p`
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
`,pt=r.svg`
  width: 16px;
  height: 16px;
`;function me({diaryProducts:t,setDiaryProducts:d,isLoading:s}){const{data:a}=de();return e.jsxs(rt,{children:[e.jsxs(dt,{children:[e.jsx(at,{children:"Products"}),e.jsxs(lt,{to:"/Products",children:[e.jsx(ct,{children:"Add product"}),e.jsx(pt,{children:e.jsx("use",{href:`${b}#big_arrow`})})]})]}),t&&t.length!==0?e.jsx(ue,{setDiaryProducts:d,blood:a,diaryProducts:t}):e.jsx(e.Fragment,{children:e.jsx(I,{children:s?e.jsx(ot,{children:e.jsx(ae,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):e.jsx(st,{as:P.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}me.propTypes={isLoading:i.bool,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const ht=r.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,xt=r.div`
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`,ut=r.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: scale 300ms ease-in-out;

  :hover {
    scale: 1.05;
    p {
      color: ${({theme:t})=>t.color.orangeSecond};
    }
    svg {
      stroke: ${({theme:t})=>t.color.white};
    }
  }
`,mt=r.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    scale 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ft=r.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:t})=>t.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      scale 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`,se=r.button`
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
`;function fe({selectedDate:t,setSelectedDate:d}){const[s,a]=o.useState([]),[m,u]=o.useState(null),p=Re(ve),[x,{data:n,error:l}]=qe();o.useEffect(()=>{if(n&&n.length!==0){const q=[...new Set([...n,...F(p,new Date)])].map(w=>new Date(w).getTime()).sort(),f=q.indexOf(new Date(t.toDateString()).getTime());a(q),u(f)}else{const q=F(p,new Date).map(w=>new Date(w).getTime()).sort(),f=q.indexOf(new Date(t.toDateString()).getTime());a(q),u(f)}},[n,p,t]),o.useEffect(()=>{if(l)return;(async()=>{await x()})()},[l,x]);const c=({date:y,view:q})=>y.getTime()>new Date(p).getTime()||y.toDateString()===new Date(p).toDateString()||q!=="month"?!1:!n.includes(y.toDateString()),h=()=>{const y=new Date(s[m-1]);d(y)},g=()=>{const y=new Date(s[m+1]);d(y)},T=t.toDateString()===new Date().toDateString(),B=t.toDateString()===new Date(s[0]).toDateString(),A=l?{minDate:new Date(p)}:{minDate:n&&n.length!==0?new Date(s[0]):new Date(p),tileDisabled:c};return e.jsxs(ht,{children:[e.jsx(xt,{children:e.jsx(Pe,{...A,onChange:d,value:t,maxDate:new Date,children:e.jsxs(ut,{children:[e.jsxs(mt,{children:[" ",Ie(t,"dd/MM/yyyy")]}),e.jsx(ft,{children:e.jsx(O,{name:"calendar"})})]})})}),e.jsxs("div",{children:[e.jsx(se,{"aria-label":"PrevDate",disabled:B,onClick:h,children:e.jsx(O,{name:"nav-arrow-left"})}),e.jsx(se,{"aria-label":"NextDate",disabled:T,onClick:g,children:e.jsx(O,{name:"nav-arrow-right"})})]})]})}fe.propTypes={selectedDate:i.instanceOf(Date).isRequired,setSelectedDate:i.func.isRequired};const gt=r.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,wt=r.div`
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
`,yt=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,bt=r.div`
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
`;function Tt(){const[t,d]=o.useState(new Date),[s,a]=o.useState([]),[m,u]=o.useState([]),[p,{isLoading:x}]=Te(),{data:n}=$e(),{data:l}=de(),c=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return o.useEffect(()=>{(async()=>{const g=await p(c);u(g.data.exerciseResult),a(g.data.productResult)})()},[p,c]),e.jsxs(gt,{children:[e.jsxs(wt,{children:[e.jsx(Ee,{text:"Diary"}),e.jsx(fe,{selectedDate:t,setSelectedDate:d})]}),e.jsxs(yt,{children:[e.jsx(pe,{bmrData:n,diaryProducts:s,diaryExercises:m}),e.jsxs(bt,{children:[e.jsx(me,{isLoading:x,setDiaryProducts:a,diaryProducts:s,blood:l}),e.jsx(xe,{isLoading:x,diaryExercises:m,setDiaryExercises:u})]})]})]})}export{Tt as Diary};
