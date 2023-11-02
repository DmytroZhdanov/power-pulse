import{r,n as s,P as i,j as t,f as j,J as je,L as ce,K as pe,M as De,N as he,t as $e,O as ke,Q as Re,I as U,u as ve,S as Te,q as qe,c as Ee,U as Ce,B as K,T as Se,l as Pe}from"./index-451995e9.js";import{T as ze}from"./TitlePage-7e62eb09.js";import{u as xe,f as Ie,a as Le,P as Be,L as Ae,m as A}from"./motion-0422a68e.js";import{C as Me,f as Fe}from"./Calendar-a47072aa.js";import"./tiny-warning.esm-c932d744.js";const Y=(e,a)=>{const o=[];let d=new Date(e);const f=new Date(a);for(;d<=f;){const m=d.toDateString();o.push(m),d.setDate(d.getDate()+1)}return o.push(a.toDateString()),o};function ue(){const e=r.useRef(!1);return xe(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function _e(){const e=ue(),[a,o]=r.useState(0),d=r.useCallback(()=>{e.current&&o(a+1)},[a]);return[r.useCallback(()=>Ie.postRender(d),[d]),a]}class Oe extends r.Component{getSnapshotBeforeUpdate(a){const o=this.props.childRef.current;if(o&&a.isPresent&&!this.props.isPresent){const d=this.props.sizeRef.current;d.height=o.offsetHeight||0,d.width=o.offsetWidth||0,d.top=o.offsetTop,d.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function We({children:e,isPresent:a}){const o=r.useId(),d=r.useRef(null),f=r.useRef({width:0,height:0,top:0,left:0});return r.useInsertionEffect(()=>{const{width:m,height:h,top:u,left:n}=f.current;if(a||!d.current||!m||!h)return;d.current.dataset.motionPopId=o;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            top: ${u}px !important;
            left: ${n}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[a]),r.createElement(Oe,{isPresent:a,childRef:d,sizeRef:f},r.cloneElement(e,{ref:d}))}const H=({children:e,initial:a,isPresent:o,onExitComplete:d,custom:f,presenceAffectsLayout:m,mode:h})=>{const u=Le(Ne),n=r.useId(),l=r.useMemo(()=>({id:n,initial:a,isPresent:o,custom:f,onExitComplete:c=>{u.set(c,!0);for(const p of u.values())if(!p)return;d&&d()},register:c=>(u.set(c,!1),()=>u.delete(c))}),m?void 0:[o]);return r.useMemo(()=>{u.forEach((c,p)=>u.set(p,!1))},[o]),r.useEffect(()=>{!o&&!u.size&&d&&d()},[o]),h==="popLayout"&&(e=r.createElement(We,{isPresent:o},e)),r.createElement(Be.Provider,{value:l},e)};function Ne(){return new Map}function Ue(e){return r.useEffect(()=>()=>e(),[])}const B=e=>e.key||"";function He(e,a){e.forEach(o=>{const d=B(o);a.set(d,o)})}function Qe(e){const a=[];return r.Children.forEach(e,o=>{r.isValidElement(o)&&a.push(o)}),a}const M=({children:e,custom:a,initial:o=!0,onExitComplete:d,exitBeforeEnter:f,presenceAffectsLayout:m=!0,mode:h="sync"})=>{const u=r.useContext(Ae).forceRender||_e()[0],n=ue(),l=Qe(e);let c=l;const p=r.useRef(new Map).current,g=r.useRef(c),v=r.useRef(new Map).current,y=r.useRef(!0);if(xe(()=>{y.current=!1,He(l,v),g.current=c}),Ue(()=>{y.current=!0,v.clear(),p.clear()}),y.current)return r.createElement(r.Fragment,null,c.map(x=>r.createElement(H,{key:B(x),isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:m,mode:h},x)));c=[...c];const E=g.current.map(B),b=l.map(B),D=E.length;for(let x=0;x<D;x++){const w=E[x];b.indexOf(w)===-1&&!p.has(w)&&p.set(w,void 0)}return h==="wait"&&p.size&&(c=[]),p.forEach((x,w)=>{if(b.indexOf(w)!==-1)return;const C=v.get(w);if(!C)return;const F=E.indexOf(w);let $=x;if(!$){const _=()=>{v.delete(w),p.delete(w);const O=g.current.findIndex(W=>W.key===w);if(g.current.splice(O,1),!p.size){if(g.current=l,n.current===!1)return;u(),d&&d()}};$=r.createElement(H,{key:B(C),isPresent:!1,onExitComplete:_,custom:a,presenceAffectsLayout:m,mode:h},C),p.set(w,$)}c.splice(F,0,$)}),c=c.map(x=>{const w=x.key;return p.has(w)?x:r.createElement(H,{key:B(x),isPresent:!0,presenceAffectsLayout:m,mode:h},x)}),r.createElement(r.Fragment,null,p.size?c:c.map(x=>r.cloneElement(x)))},Ge=s.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 593px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 390px;
  }
`,Ke=s.ul`
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
`,S=s.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${({highlighted:e,theme:a})=>e?a.color.orangeFirst:a.color.grayFourth};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  ${({caloriesOverConsumed:e,theme:a})=>e&&`border-color: ${a.color.circleRed}`};
  ${({caloriesOverBurned:e,theme:a})=>e&&`border-color: ${a.color.inputSuccess}`};

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
`,P=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,z=s.svg`
  width: 20px;
  height: 20px;
  fill: ${({theme:e})=>e.color.orangeSecond};
`,I=s.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${({highlighted:e,theme:a})=>e?"rgba(239, 237, 232, 0.8)":a.color.grayThird};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,L=s.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Ye=s.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ve=s.div`
  width: 24px;
  height: 24px;
  background-color: ${({theme:e})=>e.color.orangeThird};
  border-radius: 50%;
`,Je=s.svg`
  width: 24px;
  height: 24px;
`,Xe=s.p`
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
`;function me({bmrData:e,diaryProducts:a,diaryExercises:o}){const[d,f]=r.useState(null),[m,h]=r.useState(null),[u,n]=r.useState(null);return r.useEffect(()=>{if(a.length===0){f(null);return}const c=a.map(p=>p.calories).reduce((p,g)=>p+g);f(c)},[a]),r.useEffect(()=>{if(o.length===0){h(null);return}const c=o.map(p=>p.calories).reduce((p,g)=>p+g);h(c)},[o]),r.useEffect(()=>{if(o.length===0){n(null);return}const c=o.map(g=>g.time).reduce((g,v)=>g+v),p=Math.trunc(c/60);n(p)},[o]),t.jsxs(Ge,{children:[t.jsxs(Ke,{children:[t.jsxs(S,{highlighted:!0,children:[t.jsxs(P,{children:[t.jsx(z,{children:t.jsx("use",{href:`${j}#food`})}),t.jsx(I,{highlighted:!0,children:"Daily calory intake"})]}),t.jsx(L,{children:e||2200})]}),t.jsxs(S,{highlighted:!0,children:[t.jsxs(P,{children:[t.jsx(z,{children:t.jsx("use",{href:`${j}#dumbbell`})}),t.jsx(I,{highlighted:!0,children:"Daily norm of sports"})]}),t.jsx(L,{children:"110 min"})]}),t.jsxs(S,{children:[t.jsxs(P,{children:[t.jsx(z,{children:t.jsx("use",{href:`${j}#apple`})}),t.jsx(I,{children:"Calories consumed"})]}),t.jsx(L,{children:d!==null?d:0})]}),t.jsxs(S,{children:[t.jsxs(P,{children:[t.jsx(z,{children:t.jsx("use",{href:`${j}#fire`})}),t.jsx(I,{children:"Calories burned"})]}),t.jsx(L,{children:m!==null?m:0})]}),t.jsxs(S,{caloriesOverConsumed:!(e-d>=0),children:[t.jsxs(P,{children:[t.jsx(z,{children:t.jsx("use",{href:`${j}#bubble`})}),t.jsx(I,{children:"The rest of the calories"})]}),t.jsx(L,{children:e?e-d:2200})]}),t.jsxs(S,{caloriesOverBurned:110-u<0,children:[t.jsxs(P,{children:[t.jsx(z,{children:t.jsx("use",{href:`${j}#running`})}),t.jsx(I,{children:"The rest of sports"})]}),t.jsxs(L,{children:[110-u," min"]})]})]}),t.jsxs(Ye,{children:[t.jsx(Ve,{children:t.jsx(Je,{children:t.jsx("use",{href:`${j}#exclamation-mark`})})}),t.jsx(Xe,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}me.propTypes={bmrData:i.number,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const Ze=s.div`
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
`,V=s.table`
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
`,J=s.thead`
  text-align: left;
`,X=s.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: ${({theme:e})=>e.color.orangeSecond};
`,k=s.th`
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
`,Z=s.tbody``,R=s.td`
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
`,ee=s.button`
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
`,te=s.svg`
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
`;function fe({diaryExercises:e,setDiaryExercises:a}){const[o]=je(),[d,f]=r.useState(window.innerWidth>=768),m=()=>{f(window.innerWidth>=768)};r.useEffect(()=>(window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[]);const h=async n=>{try{await o(n);const l=e.filter(c=>c._id!==n);a(l)}catch(l){console.log(l)}},u=n=>`${Math.floor(n/60)} min ${n%60===0?"":n%60+"s"}`;return t.jsx(t.Fragment,{children:t.jsx(Ze,{children:d?t.jsxs(V,{children:[t.jsx(J,{children:t.jsxs(X,{children:[t.jsx(k,{children:"Body Part"}),t.jsx(k,{children:"Equipment"}),t.jsx(k,{children:"Name"}),t.jsx(k,{children:"Target"}),t.jsx(k,{children:"Burned Calories"}),t.jsx(k,{children:"Time"})]})}),t.jsx(M,{children:e.map(n=>t.jsx(Z,{as:A.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:t.jsxs("tr",{children:[t.jsx(R,{children:n.bodyPart}),t.jsx(R,{children:n.equipment}),t.jsx(R,{children:n.name}),t.jsx(R,{children:n.target}),t.jsx(R,{children:n.calories}),t.jsx(R,{children:u(n.time)}),t.jsx("td",{children:t.jsx(ee,{onClick:()=>{h(n._id)},children:t.jsx(te,{children:t.jsx("use",{href:`${j}#delete`})})})})]})},n._id))})]}):t.jsx(t.Fragment,{children:t.jsx(M,{children:e.map(n=>t.jsxs(V,{initial:{x:1300},animate:{x:0},transition:{duration:.5},exit:{x:-1700},as:A.table,children:[t.jsx(J,{children:t.jsxs(X,{children:[t.jsx(k,{children:"Body Part"}),t.jsx(k,{children:"Equipment"}),t.jsx(k,{children:"Name"}),t.jsx(k,{children:"Target"}),t.jsx(k,{children:"Burned Calories"}),t.jsx(k,{children:"Time"})]})}),t.jsx(Z,{children:t.jsxs("tr",{children:[t.jsx(R,{children:n.bodyPart}),t.jsx(R,{children:n.equipment}),t.jsx(R,{children:n.name}),t.jsx(R,{children:n.target}),t.jsx(R,{children:n.calories}),t.jsx(R,{children:u(n.time)}),t.jsx("td",{children:t.jsx(ee,{onClick:()=>{h(n._id)},children:t.jsx(te,{children:t.jsx("use",{href:`${j}#delete`})})})})]})})]},n._id))})})})})}fe.propTypes={setDiaryExercises:i.func.isRequired,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired};const et=s.div`
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
`,tt=s.p`
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
`,it=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,nt=s.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,rt=s.div`
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
`,st=s(ce)`
  display: flex;
  align-items: center;
  gap: 8px;
`,ot=s.p`
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
`,at=s.svg`
  width: 16px;
  height: 16px;
`;function ge({diaryExercises:e,setDiaryExercises:a,isLoading:o}){return t.jsxs(et,{children:[t.jsxs(rt,{children:[t.jsx(nt,{children:"Exercises"}),t.jsxs(st,{to:"/exercises",children:[t.jsx(ot,{children:"Add exercise"}),t.jsx(at,{children:t.jsx("use",{href:`${j}#big_arrow`})})]})]}),e&&e.length!==0?t.jsx(fe,{diaryExercises:e,setDiaryExercises:a}):t.jsx(t.Fragment,{children:t.jsx(M,{children:o?t.jsx(it,{children:t.jsx(pe,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):t.jsx(tt,{as:A.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found exercises"})})})]})}ge.propTypes={isLoading:i.bool,diaryExercises:i.arrayOf(i.shape({bodyPart:i.string.isRequired,calories:i.number.isRequired,date:i.string.isRequired,equipment:i.string.isRequired,exercise_ID:i.string.isRequired,name:i.string.isRequired,target:i.string.isRequired,time:i.number.isRequired,_id:i.string.isRequired})).isRequired,setDiaryExercises:i.func.isRequired};const dt=s.div`
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
`,ie=s.table`
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
`,ne=s.thead`
  text-align: left;
`,re=s.tr`
  font-size: 12px;
  line-height: ${18/12};
  color: ${({theme:e})=>e.color.orangeSecond};
`,T=s.th`
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
`,se=s.tbody``,q=s.td`
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
`,oe=s.button`
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
`,ae=s.svg`
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
`,de=s.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${({recommended:e,theme:a})=>e?`background-color: ${a.color.circleGreen}`:`background-color: ${a.color.circleRed}`}
`;function we({diaryProducts:e,setDiaryProducts:a,blood:o}){const[d]=De(),[f,m]=r.useState(window.innerWidth>=768),h=()=>{m(window.innerWidth>=768)};r.useEffect(()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]);const u=async n=>{try{await d(n);const l=e.filter(c=>c._id!==n);a(l)}catch{alert("Ops...Something went wrong. Please try again.")}};return t.jsx(t.Fragment,{children:t.jsx(dt,{children:f?t.jsxs(ie,{children:[t.jsx(ne,{children:t.jsxs(re,{children:[t.jsx(T,{children:"Title"}),t.jsx(T,{children:"Category"}),t.jsx(T,{children:"Calories"}),t.jsx(T,{children:"Weight"}),t.jsx(T,{children:"Recommend"})]})}),t.jsx(M,{children:e&&e.length!==0&&e.map(n=>{const l=!n.groupBloodNotAllowed[o];return t.jsx(se,{as:A.tbody,initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},children:t.jsxs("tr",{children:[t.jsx(q,{children:n.title}),t.jsx(q,{children:n.category}),t.jsx(q,{children:n.calories}),t.jsx(q,{children:n.amount}),t.jsxs(q,{children:[t.jsx(de,{recommended:l}),l?"Yes":"No"]}),t.jsx("td",{children:t.jsx(oe,{onClick:()=>{u(n._id)},children:t.jsx(ae,{children:t.jsx("use",{href:`${j}#delete`})})})})]})},n._id)})})]}):t.jsx(t.Fragment,{children:t.jsx(M,{children:e&&e.length!==0&&e.map(n=>{const l=n.groupBloodNotAllowed[o]===!1;return t.jsxs(ie,{initial:{x:900},animate:{x:0},transition:{duration:.3},exit:{x:-900},as:A.table,children:[t.jsx(ne,{children:t.jsxs(re,{children:[t.jsx(T,{children:"Title"}),t.jsx(T,{children:"Category"}),t.jsx(T,{children:"Calories"}),t.jsx(T,{children:"Weight"}),t.jsx(T,{children:"Recommend"})]})}),t.jsx(se,{children:t.jsxs("tr",{children:[t.jsx(q,{children:n.title}),t.jsx(q,{children:n.category}),t.jsx(q,{children:n.calories}),t.jsx(q,{children:n.amount}),t.jsxs(q,{children:[t.jsx(de,{recommended:l}),l?"Yes":"No"]}),t.jsx("td",{children:t.jsx(oe,{onClick:()=>{u(n._id)},children:t.jsx(ae,{children:t.jsx("use",{href:`${j}#delete`})})})})]})})]},n._id)})})})})})}we.propTypes={blood:i.number,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const lt=s.div`
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
`,ct=s.p`
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
`,pt=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,ht=s.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18/14};
`,xt=s.div`
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
`,ut=s(ce)`
  display: flex;
  align-items: center;
  gap: 8px;
`,mt=s.p`
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
`,ft=s.svg`
  width: 16px;
  height: 16px;
`;function be({diaryProducts:e,setDiaryProducts:a,isLoading:o}){const{data:d}=he();return t.jsxs(lt,{children:[t.jsxs(xt,{children:[t.jsx(ht,{children:"Products"}),t.jsxs(ut,{to:"/Products",children:[t.jsx(mt,{children:"Add product"}),t.jsx(ft,{children:t.jsx("use",{href:`${j}#big_arrow`})})]})]}),e&&e.length!==0?t.jsx(we,{setDiaryProducts:a,blood:d,diaryProducts:e}):t.jsx(t.Fragment,{children:t.jsx(M,{children:o?t.jsx(pt,{children:t.jsx(pe,{color:"#E6533C",ariaLabel:"three-dots-loading"})}):t.jsx(ct,{as:A.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:"Not found products"})})})]})}be.propTypes={isLoading:i.bool,diaryProducts:i.arrayOf(i.shape({amount:i.number.isRequired,calories:i.number.isRequired,date:i.string.isRequired,groupBloodNotAllowed:i.shape({1:i.bool.isRequired,2:i.bool.isRequired,3:i.bool.isRequired,4:i.bool.isRequired}),product_ID:i.string.isRequired,title:i.string.isRequired,_id:i.string.isRequired})).isRequired,setDiaryProducts:i.func.isRequired};const gt=s.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 40px;
  }
`,wt=s.div`
  width: 125px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 161px;
  }
`,bt=s.div`
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
`,yt=s.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    scale 300ms ease-in-out;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }
`,jt=s.div`
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
`,le=s.button`
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
`;function ye({selectedDate:e,setSelectedDate:a}){const[o,d]=r.useState([]),[f,m]=r.useState(null),h=$e(ke),[u,{data:n,error:l}]=Re();r.useEffect(()=>{if(n&&n.length!==0){const D=[...new Set([...n,...Y(h,new Date)])].map(w=>new Date(w).getTime()).sort(),x=D.indexOf(new Date(e.toDateString()).getTime());d(D),m(x)}else{const D=Y(h,new Date).map(w=>new Date(w).getTime()).sort(),x=D.indexOf(new Date(e.toDateString()).getTime());d(D),m(x)}},[n,h,e]),r.useEffect(()=>{l||(async()=>{await u()})()},[l,u]);const c=({date:b,view:D})=>b.getTime()>new Date(h).getTime()||b.toDateString()===new Date(h).toDateString()||D!=="month"?!1:!n.includes(b.toDateString()),p=()=>{const b=new Date(o[f-1]);a(b)},g=()=>{const b=new Date(o[f+1]);a(b)},v=e.toDateString()===new Date().toDateString(),y=e.toDateString()===new Date(o[0]).toDateString(),E=l?{minDate:new Date(h)}:{minDate:n&&n.length!==0?new Date(o[0]):new Date(h),tileDisabled:c};return t.jsxs(gt,{children:[t.jsx(wt,{children:t.jsx(Me,{...E,onChange:a,value:e,maxDate:new Date,children:t.jsxs(bt,{children:[t.jsxs(yt,{children:[" ",Fe(e,"dd/MM/yyyy")]}),t.jsx(jt,{children:t.jsx(U,{name:"calendar"})})]})})}),t.jsxs("div",{children:[t.jsx(le,{"aria-label":"PrevDate",disabled:y,onClick:p,children:t.jsx(U,{name:"nav-arrow-left"})}),t.jsx(le,{"aria-label":"NextDate",disabled:v,onClick:g,children:t.jsx(U,{name:"nav-arrow-right"})})]})]})}ye.propTypes={selectedDate:i.instanceOf(Date).isRequired,setSelectedDate:i.func.isRequired};const Dt=s.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-bottom: 68px;
  }
`,$t=s.div`
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
`,kt=s.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Rt=s.div`
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
`;function St(){var O,W,Q;const[e,a]=r.useState(new Date),[o,d]=r.useState([]),[f,m]=r.useState([]),[h,u]=r.useState(!1),[n,l]=r.useState(!1),c=ve(),[p,{isLoading:g,isError:v,error:y}]=Te(),{data:E,isLoading:b,isError:D,error:x}=qe(),{data:w,isLoading:C,isError:F,error:$}=he(),_=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return r.useEffect(()=>{(async()=>{const G=await p(_);m(G.data.exerciseResult),d(G.data.productResult)})()},[p,_]),r.useEffect(()=>{let N;return(g||b||C)&&(N=setTimeout(u,3e3,!0)),clearTimeout(N)},[b,g,C]),r.useEffect(()=>{(v||D||F)&&(l(!0),setTimeout(l,2e3,!1))},[D,v,F]),r.useEffect(()=>{((y==null?void 0:y.status)===401||(x==null?void 0:x.status)===401||($==null?void 0:$.status)===401)&&c(Ee(Ce))},[x,y,c,$]),t.jsxs(Dt,{children:[t.jsxs($t,{children:[t.jsx(ze,{text:"Diary"}),t.jsx(ye,{selectedDate:e,setSelectedDate:a})]}),t.jsxs(kt,{children:[t.jsx(me,{bmrData:E,diaryProducts:o,diaryExercises:f}),t.jsxs(Rt,{children:[t.jsx(be,{isLoading:g,setDiaryProducts:d,diaryProducts:o,blood:w}),t.jsx(ge,{isLoading:g,diaryExercises:f,setDiaryExercises:m})]})]}),t.jsx(K,{onShow:(g||b||C)&&h,onClose:()=>u(!1),children:t.jsx(Se,{})}),t.jsx(K,{onShow:n,onClose:()=>l(!1),children:t.jsx(Pe,{message:((O=y==null?void 0:y.data)==null?void 0:O.message)||((W=x==null?void 0:x.data)==null?void 0:W.message)||((Q=$==null?void 0:$.data)==null?void 0:Q.message)})})]})}export{St as Diary};
