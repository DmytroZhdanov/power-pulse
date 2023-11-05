import{r,n,P as i,j as t,o as $,O as we,u as _,s as O,L as se,T as oe,Q as be,S as ye,y as je,U as De,V as $e,I as W,W as ke,X as Re}from"./index-942e5375.js";import{T as ve}from"./TitlePage-65bc4017.js";import{u as ae,f as Ee,a as Te,P as qe,L as Ce,m as F}from"./motion-33755778.js";import{C as Se,f as Pe}from"./Calendar-637e625f.js";const U=(e,o)=>{const s=[];let d=new Date(e);const g=new Date(o);for(;d<=g;){const u=d.toDateString();s.push(u),d.setDate(d.getDate()+1)}return s.push(o.toDateString()),s};function de(){const e=r.useRef(!1);return ae(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ze(){const e=de(),[o,s]=r.useState(0),d=r.useCallback(()=>{e.current&&s(o+1)},[o]);return[r.useCallback(()=>Ee.postRender(d),[d]),o]}class Le extends r.Component{getSnapshotBeforeUpdate(o){const s=this.props.childRef.current;if(s&&o.isPresent&&!this.props.isPresent){const d=this.props.sizeRef.current;d.height=s.offsetHeight||0,d.width=s.offsetWidth||0,d.top=s.offsetTop,d.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ie({children:e,isPresent:o}){const s=r.useId(),d=r.useRef(null),g=r.useRef({width:0,height:0,top:0,left:0});return r.useInsertionEffect(()=>{const{width:u,height:m,top:h,left:w}=g.current;if(o||!d.current||!u||!m)return;d.current.dataset.motionPopId=s;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${m}px !important;
            top: ${h}px !important;
            left: ${w}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[o]),r.createElement(Le,{isPresent:o,childRef:d,sizeRef:g},r.cloneElement(e,{ref:d}))}const N=({children:e,initial:o,isPresent:s,onExitComplete:d,custom:g,presenceAffectsLayout:u,mode:m})=>{const h=Te(Be),w=r.useId(),p=r.useMemo(()=>({id:w,initial:o,isPresent:s,custom:g,onExitComplete:l=>{h.set(l,!0);for(const c of h.values())if(!c)return;d&&d()},register:l=>(h.set(l,!1),()=>h.delete(l))}),u?void 0:[s]);return r.useMemo(()=>{h.forEach((l,c)=>h.set(c,!1))},[s]),r.useEffect(()=>{!s&&!h.size&&d&&d()},[s]),m==="popLayout"&&(e=r.createElement(Ie,{isPresent:s},e)),r.createElement(qe.Provider,{value:p},e)};function Be(){return new Map}function Ae(e){return r.useEffect(()=>()=>e(),[])}const A=e=>e.key||"";function Fe(e,o){e.forEach(s=>{const d=A(s);o.set(d,s)})}function Me(e){const o=[];return r.Children.forEach(e,s=>{r.isValidElement(s)&&o.push(s)}),o}const M=({children:e,custom:o,initial:s=!0,onExitComplete:d,exitBeforeEnter:g,presenceAffectsLayout:u=!0,mode:m="sync"})=>{const h=r.useContext(Ce).forceRender||ze()[0],w=de(),p=Me(e);let l=p;const c=r.useRef(new Map).current,a=r.useRef(l),b=r.useRef(new Map).current,D=r.useRef(!0);if(ae(()=>{D.current=!1,Fe(p,b),a.current=l}),Ae(()=>{D.current=!0,b.clear(),c.clear()}),D.current)return r.createElement(r.Fragment,null,l.map(y=>r.createElement(N,{key:A(y),isPresent:!0,initial:s?void 0:!1,presenceAffectsLayout:u,mode:m},y)));l=[...l];const x=a.current.map(A),j=p.map(A),q=x.length;for(let y=0;y<q;y++){const f=x[y];j.indexOf(f)===-1&&!c.has(f)&&c.set(f,void 0)}return m==="wait"&&c.size&&(l=[]),c.forEach((y,f)=>{if(j.indexOf(f)!==-1)return;const v=b.get(f);if(!v)return;const S=x.indexOf(f);let C=y;if(!C){const me=()=>{b.delete(f),c.delete(f);const fe=a.current.findIndex(ge=>ge.key===f);if(a.current.splice(fe,1),!c.size){if(a.current=p,w.current===!1)return;h(),d&&d()}};C=r.createElement(N,{key:A(v),isPresent:!1,onExitComplete:me,custom:o,presenceAffectsLayout:u,mode:m},v),c.set(f,C)}l.splice(S,0,C)}),l=l.map(y=>{const f=y.key;return c.has(f)?y:r.createElement(N,{key:A(y),isPresent:!0,presenceAffectsLayout:u,mode:m},y)}),r.createElement(r.Fragment,null,c.size?l:l.map(y=>r.cloneElement(y)))},_e=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 593px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 390px;
  }
`,Oe=n.ul`
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
`,P=n.li`
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
`,z=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,L=n.svg`
  width: 20px;
  height: 20px;
  fill: ${({theme:e})=>e.color.orangeSecond};
`,I=n.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${({highlighted:e,theme:o})=>e?"rgba(239, 237, 232, 0.8)":o.color.grayThird};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,B=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,We=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ne=n.div`
  width: 24px;
  height: 24px;
  background-color: ${({theme:e})=>e.color.orangeThird};
  border-radius: 50%;
`,Ue=n.svg`
  width: 24px;
  height: 24px;
`,He=n.p`
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
`;function le({bmrData:e,diaryProducts:o,diaryExercises:s}){const[d,g]=r.useState(null),[u,m]=r.useState(null),[h,w]=r.useState(null);return r.useEffect(()=>{if(o.length===0){g(null);return}const l=o.map(c=>c.calories).reduce((c,a)=>c+a);g(l)},[o]),r.useEffect(()=>{if(s.length===0){m(null);return}const l=s.map(c=>c.calories).reduce((c,a)=>c+a);m(l)},[s]),r.useEffect(()=>{if(s.length===0){w(null);return}const l=s.map(a=>a.time).reduce((a,b)=>a+b),c=Math.trunc(l/60);w(c)},[s]),t.jsxs(_e,{children:[t.jsxs(Oe,{children:[t.jsxs(P,{highlighted:!0,children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx("use",{href:`${$}#food`})}),t.jsx(I,{highlighted:!0,children:"Daily calory intake"})]}),t.jsx(B,{children:e||2200})]}),t.jsxs(P,{highlighted:!0,children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx("use",{href:`${$}#dumbbell`})}),t.jsx(I,{highlighted:!0,children:"Daily norm of sports"})]}),t.jsx(B,{children:"110 min"})]}),t.jsxs(P,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx("use",{href:`${$}#apple`})}),t.jsx(I,{children:"Calories consumed"})]}),t.jsx(B,{children:d!==null?d:0})]}),t.jsxs(P,{children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx("use",{href:`${$}#fire`})}),t.jsx(I,{children:"Calories burned"})]}),t.jsx(B,{children:u!==null?u:0})]}),t.jsxs(P,{caloriesOverConsumed:!(e-d>=0),children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx("use",{href:`${$}#bubble`})}),t.jsx(I,{children:"The rest of the calories"})]}),t.jsx(B,{children:e?e-d:2200})]}),t.jsxs(P,{caloriesOverBurned:110-h<0,children:[t.jsxs(z,{children:[t.jsx(L,{children:t.jsx("use",{href:`${$}#running`})}),t.jsx(I,{children:"The rest of sports"})]}),t.jsxs(B,{children:[110-h," min"]})]})]}),t.jsxs(We,{children:[t.jsx(Ne,{children:t.jsx(Ue,{children:t.jsx("use",{href:`${$}#exclamation-mark`})})}),t.jsx(He,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}le.propTypes={bmrData:i.number,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const Qe=n.div`
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
`,H=n.table`
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
`,Q=n.thead`
  text-align: left;
`,G=n.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: ${({theme:e})=>e.color.orangeSecond};
`,k=n.th`
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
`,K=n.tbody``,R=n.td`
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
`,V=n.button`
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
`,Y=n.svg`
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
`;function ce({diaryExercises:e,setDiaryExercises:o}){const[s,{isLoading:d,isError:g,error:u}]=we(),m=_(),[h,w]=r.useState(window.innerWidth>=768);r.useEffect(()=>{m(O({isLoading:d,isError:g,error:u}))},[m,u,g,d]);const p=()=>{w(window.innerWidth>=768)};r.useEffect(()=>(window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]);const l=async a=>{try{await s(a);const b=e.filter(D=>D._id!==a);o(b)}catch(b){console.log(b)}},c=a=>`${Math.floor(a/60)} min ${a%60===0?"":a%60+"s"}`;return t.jsx(t.Fragment,{children:t.jsx(Qe,{children:h?t.jsxs(H,{children:[t.jsx(Q,{children:t.jsxs(G,{children:[t.jsx(k,{children:"Body Part"}),t.jsx(k,{children:"Equipment"}),t.jsx(k,{children:"Name"}),t.jsx(k,{children:"Target"}),t.jsx(k,{children:"Burned Calories"}),t.jsx(k,{children:"Time"})]})}),t.jsx(M,{children:e.map(a=>t.jsx(K,{as:F.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:t.jsxs("tr",{children:[t.jsx(R,{children:a.bodyPart}),t.jsx(R,{children:a.equipment}),t.jsx(R,{children:a.name}),t.jsx(R,{children:a.target}),t.jsx(R,{children:a.calories}),t.jsx(R,{children:c(a.time)}),t.jsx("td",{children:t.jsx(V,{onClick:()=>{l(a._id)},children:t.jsx(Y,{children:t.jsx("use",{href:`${$}#delete`})})})})]})},a._id))})]}):t.jsx(t.Fragment,{children:t.jsx(M,{children:e.map(a=>t.jsxs(H,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:F.table,children:[t.jsx(Q,{children:t.jsxs(G,{children:[t.jsx(k,{children:"Body Part"}),t.jsx(k,{children:"Equipment"}),t.jsx(k,{children:"Name"}),t.jsx(k,{children:"Target"}),t.jsx(k,{children:"Burned Calories"}),t.jsx(k,{children:"Time"})]})}),t.jsx(K,{children:t.jsxs("tr",{children:[t.jsx(R,{children:a.bodyPart}),t.jsx(R,{children:a.equipment}),t.jsx(R,{children:a.name}),t.jsx(R,{children:a.target}),t.jsx(R,{children:a.calories}),t.jsx(R,{children:c(a.time)}),t.jsx("td",{children:t.jsx(V,{onClick:()=>{l(a._id)},children:t.jsx(Y,{children:t.jsx("use",{href:`${$}#delete`})})})})]})})]},a._id))})})})})}ce.propTypes={setDiaryExercises:i.func.isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const Ge=n.div`
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
`,Ke=n.p`
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
`,Ve=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Ye=n.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,Xe=n.div`
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
`,Je=n(se)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ze=n.p`
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
`,et=n.svg`
  width: 16px;
  height: 16px;
`;function pe({diaryExercises:e,setDiaryExercises:o,isLoading:s}){return t.jsxs(Ge,{children:[t.jsxs(Xe,{children:[t.jsx(Ye,{children:"Exercises"}),t.jsxs(Je,{to:"/exercises",children:[t.jsx(Ze,{children:"Add exercise"}),t.jsx(et,{children:t.jsx("use",{href:`${$}#big_arrow`})})]})]}),e&&e.length!==0?t.jsx(ce,{diaryExercises:e,setDiaryExercises:o}):t.jsx(t.Fragment,{children:t.jsx(M,{children:s?t.jsx(Ve,{children:t.jsx(oe,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):t.jsx(Ke,{as:F.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}pe.propTypes={isLoading:i.bool,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired,setDiaryExercises:i.func.isRequired};const tt=n.div`
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
`,X=n.table`
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
`,Z=n.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: ${({theme:e})=>e.color.orangeSecond};
`,E=n.th`
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
`,ee=n.tbody``,T=n.td`
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
`,te=n.button`
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
`,ie=n.svg`
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
`,ne=n.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${({recommended:e,theme:o})=>e?`background-color: ${o.color.circleGreen}`:`background-color: ${o.color.circleRed}`}
`;function he({diaryProducts:e,setDiaryProducts:o}){const[s,{isLoading:d,isError:g,error:u}]=be(),{data:m,isFetching:h,isError:w,error:p}=ye(),l=_(),[c,a]=r.useState(window.innerWidth>=768);r.useEffect(()=>{l(O({isLoading:d||h,isError:g||w,error:u||p}))},[u,l,g,d,w,h,p]),r.useEffect(()=>(window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}),[]);const b=()=>{a(window.innerWidth>=768)},D=async x=>{try{await s(x);const j=e.filter(q=>q._id!==x);o(j)}catch{alert("Ops...Something went wrong. Please try again.")}};return t.jsx(t.Fragment,{children:t.jsx(tt,{children:c?t.jsxs(X,{children:[t.jsx(J,{children:t.jsxs(Z,{children:[t.jsx(E,{children:"Title"}),t.jsx(E,{children:"Category"}),t.jsx(E,{children:"Calories"}),t.jsx(E,{children:"Weight"}),t.jsx(E,{children:"Recommend"})]})}),t.jsx(M,{children:e&&e.length!==0&&e.map(x=>{const j=!x.groupBloodNotAllowed[m];return t.jsx(ee,{as:F.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:t.jsxs("tr",{children:[t.jsx(T,{children:x.title}),t.jsx(T,{children:x.category}),t.jsx(T,{children:x.calories}),t.jsx(T,{children:x.amount}),t.jsxs(T,{children:[t.jsx(ne,{recommended:j}),j?"Yes":"No"]}),t.jsx("td",{children:t.jsx(te,{onClick:()=>{D(x._id)},children:t.jsx(ie,{children:t.jsx("use",{href:`${$}#delete`})})})})]})},x._id)})})]}):t.jsx(t.Fragment,{children:t.jsx(M,{children:e&&e.length!==0&&e.map(x=>{const j=x.groupBloodNotAllowed[m]===!1;return t.jsxs(X,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:F.table,children:[t.jsx(J,{children:t.jsxs(Z,{children:[t.jsx(E,{children:"Title"}),t.jsx(E,{children:"Category"}),t.jsx(E,{children:"Calories"}),t.jsx(E,{children:"Weight"}),t.jsx(E,{children:"Recommend"})]})}),t.jsx(ee,{children:t.jsxs("tr",{children:[t.jsx(T,{children:x.title}),t.jsx(T,{children:x.category}),t.jsx(T,{children:x.calories}),t.jsx(T,{children:x.amount}),t.jsxs(T,{children:[t.jsx(ne,{recommended:j}),j?"Yes":"No"]}),t.jsx("td",{children:t.jsx(te,{onClick:()=>{D(x._id)},children:t.jsx(ie,{children:t.jsx("use",{href:`${$}#delete`})})})})]})})]},x._id)})})})})})}he.propTypes={diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const it=n.div`
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
`,nt=n.p`
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
`,rt=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,st=n.h2`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding: 0;
  }
`,at=n(se)`
  display: flex;
  align-items: center;
  gap: 8px;
`,dt=n.p`
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
`,lt=n.svg`
  width: 16px;
  height: 16px;
`;function xe({diaryProducts:e,setDiaryProducts:o,isLoading:s}){return t.jsxs(it,{children:[t.jsxs(ot,{children:[t.jsx(st,{children:"Products"}),t.jsxs(at,{to:"/Products",children:[t.jsx(dt,{children:"Add product"}),t.jsx(lt,{children:t.jsx("use",{href:`${$}#big_arrow`})})]})]}),e&&e.length!==0?t.jsx(he,{setDiaryProducts:o,diaryProducts:e}):t.jsx(t.Fragment,{children:t.jsx(M,{children:s?t.jsx(rt,{children:t.jsx(oe,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):t.jsx(nt,{as:F.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}xe.propTypes={isLoading:i.bool,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const ct=n.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 40px;
  }
`,pt=n.div`
  width: 125px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 161px;
  }
`,ht=n.div`
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
`,xt=n.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    scale 300ms ease-in-out;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }
`,ut=n.div`
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
`,re=n.button`
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
`;function ue({selectedDate:e,setSelectedDate:o}){const[s,d]=r.useState([]),[g,u]=r.useState(null),m=_(),h=je(De),[w,{data:p,isLoading:l,isError:c,error:a}]=$e();r.useEffect(()=>{m(O({isLoading:l,isError:c,error:a}))},[m,a,c,l]),r.useEffect(()=>{if(p&&p.length!==0){const v=[...new Set([...p,...U(h,new Date)])].map(C=>new Date(C).getTime()).sort(),S=v.indexOf(new Date(e.toDateString()).getTime());d(v),u(S)}else{const v=U(h,new Date).map(C=>new Date(C).getTime()).sort(),S=v.indexOf(new Date(e.toDateString()).getTime());d(v),u(S)}},[p,h,e]),r.useEffect(()=>{a||(async()=>{await w()})()},[a,w]);const b=({date:f,view:v})=>f.getTime()>new Date(h).getTime()||f.toDateString()===new Date(h).toDateString()||v!=="month"?!1:!p.includes(f.toDateString()),D=()=>{const f=new Date(s[g-1]);o(f)},x=()=>{const f=new Date(s[g+1]);o(f)},j=e.toDateString()===new Date().toDateString(),q=e.toDateString()===new Date(s[0]).toDateString(),y=a?{minDate:new Date(h)}:{minDate:p&&p.length!==0?new Date(s[0]):new Date(h),tileDisabled:b};return t.jsxs(ct,{children:[t.jsx(pt,{children:t.jsx(Se,{...y,onChange:o,value:e,maxDate:new Date,children:t.jsxs(ht,{children:[t.jsxs(xt,{children:[" ",Pe(e,"dd/MM/yyyy")]}),t.jsx(ut,{children:t.jsx(W,{name:"calendar"})})]})})}),t.jsxs("div",{children:[t.jsx(re,{"aria-label":"PrevDate",disabled:q,onClick:D,children:t.jsx(W,{name:"nav-arrow-left"})}),t.jsx(re,{"aria-label":"NextDate",disabled:j,onClick:x,children:t.jsx(W,{name:"nav-arrow-right"})})]})]})}ue.propTypes={selectedDate:i.instanceOf(Date).isRequired,setSelectedDate:i.func.isRequired};const mt=n.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-bottom: 68px;
  }
`,ft=n.div`
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
`,gt=n.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,wt=n.div`
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
`;function $t(){const[e,o]=r.useState(new Date),[s,d]=r.useState([]),[g,u]=r.useState([]),m=_(),[h,{isLoading:w,isError:p,error:l}]=ke(),{data:c,isFetching:a,isError:b,error:D}=Re(),x=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return r.useEffect(()=>{m(O({isLoading:w||a,isError:p||b,error:l||D}))},[D,l,m,b,a,p,w]),r.useEffect(()=>{(async()=>{const q=await h(x);u(q.data.exerciseResult),d(q.data.productResult)})()},[h,x]),t.jsxs(mt,{children:[t.jsxs(ft,{children:[t.jsx(ve,{text:"Diary"}),t.jsx(ue,{selectedDate:e,setSelectedDate:o})]}),t.jsxs(gt,{children:[t.jsx(le,{bmrData:c,diaryProducts:s,diaryExercises:g}),t.jsxs(wt,{children:[t.jsx(xe,{isLoading:w,setDiaryProducts:d,diaryProducts:s}),t.jsx(pe,{isLoading:w,diaryExercises:g,setDiaryExercises:u})]})]})]})}export{$t as Diary};
