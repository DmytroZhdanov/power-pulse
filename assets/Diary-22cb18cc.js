import{r as a,n as r,P as i,j as t,m as D,Q as ge,E as I,L as re,S as se,U as we,V as be,A as ye,W as je,X as De,I as O,Y as $e,Z as ke}from"./index-1cf9c013.js";import{T as Re}from"./TitlePage-736ee8fc.js";import{u as oe,f as ve,a as Ee,P as Te,L as qe,m as B}from"./motion-bc329481.js";import{C as Ce,f as Se}from"./Calendar-35ae6538.js";const N=(e,o)=>{const s=[];let d=new Date(e);const w=new Date(o);for(;d<=w;){const m=d.toDateString();s.push(m),d.setDate(d.getDate()+1)}return s.push(o.toDateString()),s};function ae(){const e=a.useRef(!1);return oe(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Le(){const e=ae(),[o,s]=a.useState(0),d=a.useCallback(()=>{e.current&&s(o+1)},[o]);return[a.useCallback(()=>ve.postRender(d),[d]),o]}class Pe extends a.Component{getSnapshotBeforeUpdate(o){const s=this.props.childRef.current;if(s&&o.isPresent&&!this.props.isPresent){const d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ze({children:e,isPresent:o}){const s=a.useId(),d=a.useRef(null),w=a.useRef({width:0,height:0,top:0,left:0});return a.useInsertionEffect(()=>{const{width:m,height:c,top:x,left:f}=w.current;if(o||!d.current||!m||!c)return;d.current.dataset.motionPopId=s;const g=document.createElement("style");return document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${c}px !important;
            top: ${x}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[o]),a.createElement(Pe,{isPresent:o,childRef:d,sizeRef:w},a.cloneElement(e,{ref:d}))}const W=({children:e,initial:o,isPresent:s,onExitComplete:d,custom:w,presenceAffectsLayout:m,mode:c})=>{const x=Ee(Ie),f=a.useId(),g=a.useMemo(()=>({id:f,initial:o,isPresent:s,custom:w,onExitComplete:l=>{x.set(l,!0);for(const n of x.values())if(!n)return;d&&d()},register:l=>(x.set(l,!1),()=>x.delete(l))}),m?void 0:[s]);return a.useMemo(()=>{x.forEach((l,n)=>x.set(n,!1))},[s]),a.useEffect(()=>{!s&&!x.size&&d&&d()},[s]),c==="popLayout"&&(e=a.createElement(ze,{isPresent:s},e)),a.createElement(Te.Provider,{value:g},e)};function Ie(){return new Map}function Be(e){return a.useEffect(()=>()=>e(),[])}const z=e=>e.key||"";function Ae(e,o){e.forEach(s=>{const d=z(s);o.set(d,s)})}function Fe(e){const o=[];return a.Children.forEach(e,s=>{a.isValidElement(s)&&o.push(s)}),o}const A=({children:e,custom:o,initial:s=!0,onExitComplete:d,exitBeforeEnter:w,presenceAffectsLayout:m=!0,mode:c="sync"})=>{const x=a.useContext(qe).forceRender||Le()[0],f=ae(),g=Fe(e);let l=g;const n=a.useRef(new Map).current,u=a.useRef(l),y=a.useRef(new Map).current,p=a.useRef(!0);if(oe(()=>{p.current=!1,Ae(g,y),u.current=l}),Be(()=>{p.current=!0,y.clear(),n.clear()}),p.current)return a.createElement(a.Fragment,null,l.map(h=>a.createElement(W,{key:z(h),isPresent:!0,initial:s?void 0:!1,presenceAffectsLayout:m,mode:c},h)));l=[...l];const j=u.current.map(z),E=g.map(z),_=j.length;for(let h=0;h<_;h++){const b=j[h];E.indexOf(b)===-1&&!n.has(b)&&n.set(b,void 0)}return c==="wait"&&n.size&&(l=[]),n.forEach((h,b)=>{if(E.indexOf(b)!==-1)return;const T=y.get(b);if(!T)return;const F=j.indexOf(b);let M=h;if(!M){const ue=()=>{y.delete(b),n.delete(b);const me=u.current.findIndex(fe=>fe.key===b);if(u.current.splice(me,1),!n.size){if(u.current=g,f.current===!1)return;x(),d&&d()}};M=a.createElement(W,{key:z(T),isPresent:!1,onExitComplete:ue,custom:o,presenceAffectsLayout:m,mode:c},T),n.set(b,M)}l.splice(F,0,M)}),l=l.map(h=>{const b=h.key;return n.has(b)?h:a.createElement(W,{key:z(h),isPresent:!0,presenceAffectsLayout:m,mode:c},h)}),a.createElement(a.Fragment,null,n.size?l:l.map(h=>a.cloneElement(h)))},Me=r.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 593px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 390px;
  }
`,_e=r.ul`
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 48px;
  }
`,q=r.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${({highlighted:e,theme:o})=>e?o.color.orangeFirst:o.color.grayFourth};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  ${({caloriesOverConsumed:e,theme:o})=>e&&`border-color: ${o.color.circleRed}`};
  ${({caloriesOverBurned:e,theme:o})=>e&&`border-color: ${o.color.inputSuccess}`};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 187px;
    padding: 18px;
  }
`,C=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,S=r.svg`
  width: 20px;
  height: 20px;
  fill: ${({theme:e})=>e.color.orangeSecond};
`,L=r.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${({highlighted:e,theme:o})=>e?"rgba(239, 237, 232, 0.8)":o.color.grayThird};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,P=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Oe=r.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,We=r.div`
  width: 24px;
  height: 24px;
  background-color: ${({theme:e})=>e.color.orangeThird};
  border-radius: 50%;
`,Ne=r.svg`
  width: 24px;
  height: 24px;
`,Ue=r.p`
  font-size: 14px;
  line-height: ${18/14};
  color: ${({theme:e})=>e.color.grayFirst};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24/16};
  }
`;function de({bmrData:e,diaryProducts:o,diaryExercises:s}){const[d,w]=a.useState(null),[m,c]=a.useState(null),[x,f]=a.useState(null);return a.useEffect(()=>{if(o.length===0){w(null);return}const l=o.map(n=>n.calories).reduce((n,u)=>n+u);w(l)},[o]),a.useEffect(()=>{if(s.length===0){c(null);return}const l=s.map(n=>n.calories).reduce((n,u)=>n+u);c(l)},[s]),a.useEffect(()=>{if(s.length===0){f(null);return}const l=s.map(u=>u.time).reduce((u,y)=>u+y),n=Math.trunc(l/60);f(n)},[s]),t.jsxs(Me,{children:[t.jsxs(_e,{children:[t.jsxs(q,{highlighted:!0,children:[t.jsxs(C,{children:[t.jsx(S,{children:t.jsx("use",{href:`${D}#food`})}),t.jsx(L,{highlighted:!0,children:"Daily calory intake"})]}),t.jsx(P,{children:e||2200})]}),t.jsxs(q,{highlighted:!0,children:[t.jsxs(C,{children:[t.jsx(S,{children:t.jsx("use",{href:`${D}#dumbbell`})}),t.jsx(L,{highlighted:!0,children:"Daily norm of sports"})]}),t.jsx(P,{children:"110 min"})]}),t.jsxs(q,{children:[t.jsxs(C,{children:[t.jsx(S,{children:t.jsx("use",{href:`${D}#apple`})}),t.jsx(L,{children:"Calories consumed"})]}),t.jsx(P,{children:d!==null?d:0})]}),t.jsxs(q,{children:[t.jsxs(C,{children:[t.jsx(S,{children:t.jsx("use",{href:`${D}#fire`})}),t.jsx(L,{children:"Calories burned"})]}),t.jsx(P,{children:m!==null?m:0})]}),t.jsxs(q,{caloriesOverConsumed:!(e-d>=0),children:[t.jsxs(C,{children:[t.jsx(S,{children:t.jsx("use",{href:`${D}#bubble`})}),t.jsx(L,{children:"The rest of the calories"})]}),t.jsx(P,{children:e?e-d:2200})]}),t.jsxs(q,{caloriesOverBurned:110-x<0,children:[t.jsxs(C,{children:[t.jsx(S,{children:t.jsx("use",{href:`${D}#running`})}),t.jsx(L,{children:"The rest of sports"})]}),t.jsxs(P,{children:[110-x," min"]})]})]}),t.jsxs(Oe,{children:[t.jsx(We,{children:t.jsx(Ne,{children:t.jsx("use",{href:`${D}#exclamation-mark`})})}),t.jsx(Ue,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}de.propTypes={bmrData:i.number,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const He=r.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 1000px;
    max-width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-height: 177px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 804px;
    padding: 0 8px;
  }
`,U=r.table`
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
`,H=r.thead`
  text-align: left;
`,Q=r.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: ${({theme:e})=>e.color.orangeSecond};
`,$=r.th`
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:nth-of-type(6) {
      top: 248px;
      left: 60%;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: relative;

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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }

    &:nth-of-type(6) {
      width: 102px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
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
`,G=r.tbody``,k=r.td`
  border-radius: 12px;
  color: ${({theme:e})=>e.color.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};

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
      width: 93.6%;
    }

    &:nth-of-type(4) {
      top: 274px;
      left: 3%;
      width: 25%;
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
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
`,Y=r.button`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 4px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-left: 12px;
  }
`,K=r.svg`
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.color.orangeSecond};
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`;function le({diaryExercises:e,setDiaryExercises:o}){const[s,{isLoading:d,isError:w,error:m}]=ge(),[c,x]=a.useState(window.innerWidth>=768),f=()=>{x(window.innerWidth>=768)};a.useEffect(()=>(window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}),[]);const g=async n=>{try{await s(n);const u=e.filter(y=>y._id!==n);o(u)}catch(u){console.log(u)}},l=n=>`${Math.floor(n/60)} min ${n%60===0?"":n%60+"s"}`;return t.jsxs(t.Fragment,{children:[t.jsx(He,{children:c?t.jsxs(U,{children:[t.jsx(H,{children:t.jsxs(Q,{children:[t.jsx($,{children:"Body Part"}),t.jsx($,{children:"Equipment"}),t.jsx($,{children:"Name"}),t.jsx($,{children:"Target"}),t.jsx($,{children:"Burned Calories"}),t.jsx($,{children:"Time"})]})}),t.jsx(A,{children:e.map(n=>t.jsx(G,{as:B.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:t.jsxs("tr",{children:[t.jsx(k,{children:n.bodyPart}),t.jsx(k,{children:n.equipment}),t.jsx(k,{children:n.name}),t.jsx(k,{children:n.target}),t.jsx(k,{children:n.calories}),t.jsx(k,{children:l(n.time)}),t.jsx("td",{children:t.jsx(Y,{onClick:()=>{g(n._id)},children:t.jsx(K,{children:t.jsx("use",{href:`${D}#delete`})})})})]})},n._id))})]}):t.jsx(t.Fragment,{children:t.jsx(A,{children:e.map(n=>t.jsxs(U,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:B.table,children:[t.jsx(H,{children:t.jsxs(Q,{children:[t.jsx($,{children:"Body Part"}),t.jsx($,{children:"Equipment"}),t.jsx($,{children:"Name"}),t.jsx($,{children:"Target"}),t.jsx($,{children:"Burned Calories"}),t.jsx($,{children:"Time"})]})}),t.jsx(G,{children:t.jsxs("tr",{children:[t.jsx(k,{children:n.bodyPart}),t.jsx(k,{children:n.equipment}),t.jsx(k,{children:n.name}),t.jsx(k,{children:n.target}),t.jsx(k,{children:n.calories}),t.jsx(k,{children:l(n.time)}),t.jsx("td",{children:t.jsx(Y,{onClick:()=>{g(n._id)},children:t.jsx(K,{children:t.jsx("use",{href:`${D}#delete`})})})})]})})]},n._id))})})}),t.jsx(I,{isLoading:d,isError:w,error:m,showLoader:!1})]})}le.propTypes={setDiaryExercises:i.func.isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const Qe=r.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  border-radius: 12px;
  background: ${({theme:e})=>e.color.grayFourth};

  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 1164px;
    padding-left: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 16px 8px;
    height: 234px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding: 16px;
  }
`,Ge=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18/14};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,Ye=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Ke=r.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,Ve=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding: 0;
  }
`,Xe=r(re)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ze=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18/14};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,Je=r.svg`
  width: 16px;
  height: 16px;
`;function ce({diaryExercises:e,setDiaryExercises:o,isLoading:s}){return t.jsxs(Qe,{children:[t.jsxs(Ve,{children:[t.jsx(Ke,{children:"Exercises"}),t.jsxs(Xe,{to:"/exercises",children:[t.jsx(Ze,{children:"Add exercise"}),t.jsx(Je,{children:t.jsx("use",{href:`${D}#big_arrow`})})]})]}),e&&e.length!==0?t.jsx(le,{diaryExercises:e,setDiaryExercises:o}):t.jsx(t.Fragment,{children:t.jsx(A,{children:s?t.jsx(Ye,{children:t.jsx(se,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):t.jsx(Ge,{as:B.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}ce.propTypes={isLoading:i.bool,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired,setDiaryExercises:i.func.isRequired};const et=r.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 762px;
    max-width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-height: 177px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
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
`,X=r.thead`
  text-align: left;
`,Z=r.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: ${({theme:e})=>e.color.orangeSecond};
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
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
`,J=r.tbody``,v=r.td`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${({theme:e})=>e.color.white};
  overflow: hidden;
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
      width: 26.2%;
    }

    &:nth-of-type(4) {
      top: 194px;
      left: 33.2%;
      width: 25.9%;
    }

    &:nth-of-type(5) {
      top: 194px;
      left: 63.2%;
      width: 24.6%;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
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
`,ee=r.button`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 4px;
  }
`,te=r.svg`
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.color.orangeSecond};
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`,ie=r.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${({recommended:e,theme:o})=>e?`background-color: ${o.color.circleGreen}`:`background-color: ${o.color.circleRed}`}
`;function pe({diaryProducts:e,setDiaryProducts:o}){const[s,{isLoading:d,isError:w,error:m}]=we(),{data:c,isFetching:x,isError:f,error:g}=be(),[l,n]=a.useState(window.innerWidth>=768);a.useEffect(()=>(window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}),[]);const u=()=>{n(window.innerWidth>=768)},y=async p=>{try{await s(p);const j=e.filter(E=>E._id!==p);o(j)}catch{alert("Ops...Something went wrong. Please try again.")}};return t.jsxs(t.Fragment,{children:[t.jsx(et,{children:l?t.jsxs(V,{children:[t.jsx(X,{children:t.jsxs(Z,{children:[t.jsx(R,{children:"Title"}),t.jsx(R,{children:"Category"}),t.jsx(R,{children:"Calories"}),t.jsx(R,{children:"Weight"}),t.jsx(R,{children:"Recommend"})]})}),t.jsx(A,{children:e&&e.length!==0&&e.map(p=>{const j=!p.groupBloodNotAllowed[c];return t.jsx(J,{as:B.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:t.jsxs("tr",{children:[t.jsx(v,{children:p.title}),t.jsx(v,{children:p.category}),t.jsx(v,{children:p.calories}),t.jsx(v,{children:p.amount}),t.jsxs(v,{children:[t.jsx(ie,{recommended:j}),j?"Yes":"No"]}),t.jsx("td",{children:t.jsx(ee,{onClick:()=>{y(p._id)},children:t.jsx(te,{children:t.jsx("use",{href:`${D}#delete`})})})})]})},p._id)})})]}):t.jsx(t.Fragment,{children:t.jsx(A,{children:e&&e.length!==0&&e.map(p=>{const j=p.groupBloodNotAllowed[c]===!1;return t.jsxs(V,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:B.table,children:[t.jsx(X,{children:t.jsxs(Z,{children:[t.jsx(R,{children:"Title"}),t.jsx(R,{children:"Category"}),t.jsx(R,{children:"Calories"}),t.jsx(R,{children:"Weight"}),t.jsx(R,{children:"Recommend"})]})}),t.jsx(J,{children:t.jsxs("tr",{children:[t.jsx(v,{children:p.title}),t.jsx(v,{children:p.category}),t.jsx(v,{children:p.calories}),t.jsx(v,{children:p.amount}),t.jsxs(v,{children:[t.jsx(ie,{recommended:j}),j?"Yes":"No"]}),t.jsx("td",{children:t.jsx(ee,{onClick:()=>{y(p._id)},children:t.jsx(te,{children:t.jsx("use",{href:`${D}#delete`})})})})]})})]},p._id)})})})}),t.jsx(I,{isLoading:d,isError:w,error:m,showLoader:!1}),t.jsx(I,{isLoading:x,isError:f,error:g,showLoader:!1})]})}pe.propTypes={diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const tt=r.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  border-radius: 12px;
  background: ${({theme:e})=>e.color.grayFourth};

  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 824px;
    padding-left: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    height: 234px;
    padding: 16px 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding: 16px;
  }
`,it=r.p`
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18/14};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,nt=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,rt=r.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,st=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding: 0;
  }
`,ot=r(re)`
  display: flex;
  align-items: center;
  gap: 8px;
`,at=r.p`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18/14};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24/16};
  }
`,dt=r.svg`
  width: 16px;
  height: 16px;
`;function he({diaryProducts:e,setDiaryProducts:o,isLoading:s}){return t.jsxs(tt,{children:[t.jsxs(st,{children:[t.jsx(rt,{children:"Products"}),t.jsxs(ot,{to:"/Products",children:[t.jsx(at,{children:"Add product"}),t.jsx(dt,{children:t.jsx("use",{href:`${D}#big_arrow`})})]})]}),e&&e.length!==0?t.jsx(pe,{setDiaryProducts:o,diaryProducts:e}):t.jsx(t.Fragment,{children:t.jsx(A,{children:s?t.jsx(nt,{children:t.jsx(se,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):t.jsx(it,{as:B.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}he.propTypes={isLoading:i.bool,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const lt=r.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 40px;
  }
`,ct=r.div`
  width: 125px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 161px;
  }
`,pt=r.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: scale 300ms ease-in-out;

  :hover {
    scale: 1.05;
    p {
      color: ${({theme:e})=>e.color.orangeSecond};
    }
    svg {
      stroke: ${({theme:e})=>e.color.white};
    }
  }
`,ht=r.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    scale 300ms ease-in-out;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }
`,xt=r.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:e})=>e.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      scale 300ms ease-in-out;

    @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`,ne=r.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({theme:e})=>e.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: ${({theme:e})=>e.color.orangeSecond};
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: ${({theme:e})=>e.color.grayDisabled};
  }
`;function xe({selectedDate:e,setSelectedDate:o}){const[s,d]=a.useState([]),[w,m]=a.useState(null),c=ye(je),[x,{data:f,isLoading:g,isError:l,error:n}]=De();a.useEffect(()=>{if(f&&f.length!==0){const b=[...new Set([...f,...N(c,new Date)])].map(F=>new Date(F).getTime()).sort(),T=b.indexOf(new Date(e.toDateString()).getTime());d(b),m(T)}else{const b=N(c,new Date).map(F=>new Date(F).getTime()).sort(),T=b.indexOf(new Date(e.toDateString()).getTime());d(b),m(T)}},[f,c,e]),a.useEffect(()=>{n||(async()=>{await x()})()},[n,x]);const u=({date:h,view:b})=>h.getTime()>new Date(c).getTime()||h.toDateString()===new Date(c).toDateString()||b!=="month"?!1:!f.includes(h.toDateString()),y=()=>{const h=new Date(s[w-1]);o(h)},p=()=>{const h=new Date(s[w+1]);o(h)},j=e.toDateString()===new Date().toDateString(),E=e.toDateString()===new Date(s[0]).toDateString(),_=n?{minDate:new Date(c)}:{minDate:f&&f.length!==0?new Date(s[0]):new Date(c),tileDisabled:u};return t.jsxs(lt,{children:[t.jsx(ct,{children:t.jsx(Ce,{..._,onChange:o,value:e,maxDate:new Date,children:t.jsxs(pt,{children:[t.jsxs(ht,{children:[" ",Se(e,"dd/MM/yyyy")]}),t.jsx(xt,{children:t.jsx(O,{name:"calendar"})})]})})}),t.jsxs("div",{children:[t.jsx(ne,{"aria-label":"PrevDate",disabled:E,onClick:y,children:t.jsx(O,{name:"nav-arrow-left"})}),t.jsx(ne,{"aria-label":"NextDate",disabled:j,onClick:p,children:t.jsx(O,{name:"nav-arrow-right"})})]}),t.jsx(I,{isLoading:g,isError:l,error:n,showLoader:!1})]})}xe.propTypes={selectedDate:i.instanceOf(Date).isRequired,setSelectedDate:i.func.isRequired};const ut=r.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-bottom: 68px;
  }
`,mt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    height: 64px;
    margin-bottom: 32px;

    & > :first-of-type {
      align-self: flex-end;
    }
    & > :last-of-type {
      align-self: flex-start;
    }
  }
`,ft=r.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,gt=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
    width: 826px;
  }
`;function Dt(){const[e,o]=a.useState(new Date),[s,d]=a.useState([]),[w,m]=a.useState([]),[c,{isLoading:x,isError:f,error:g}]=$e(),{data:l,isFetching:n,isError:u,error:y}=ke(),p=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return a.useEffect(()=>{(async()=>{const E=await c(p);m(E.data.exerciseResult),d(E.data.productResult)})()},[c,p]),t.jsxs(ut,{children:[t.jsxs(mt,{children:[t.jsx(Re,{text:"Diary"}),t.jsx(xe,{selectedDate:e,setSelectedDate:o})]}),t.jsxs(ft,{children:[t.jsx(de,{bmrData:l,diaryProducts:s,diaryExercises:w}),t.jsxs(gt,{children:[t.jsx(he,{isLoading:x,setDiaryProducts:d,diaryProducts:s}),t.jsx(ce,{isLoading:x,diaryExercises:w,setDiaryExercises:m})]})]}),t.jsx(I,{isLoading:x,isError:f,error:g,showLoader:!1}),t.jsx(I,{isLoading:n,isError:u,error:y,showLoader:!1})]})}export{Dt as Diary};
