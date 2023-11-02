import{n as s,j as t,D as r,e as y,f as $,r as n,g as E,R as g,h as W,i as k,k as C,B as F,T as H,l as A}from"./index-57bee70f.js";import{u as q,F as z,a as B}from"./formik.esm-96004613.js";import{s as R,S as P}from"./SecondStep-d9cd2f9f.js";import{m as u}from"./motion-1fc21928.js";import{FirstStep as N}from"./FirstStep-109b7dc1.js";import{c as M,b as v,a as w}from"./index.esm-0def62c4.js";import{D as O}from"./inputData-e015a254.js";import{f as U}from"./Calendar-340c13ef.js";import"./tiny-warning.esm-c932d744.js";const L=s.div`
  max-width: 375px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: calc(28 / 24);
    color: ${({theme:e})=>e.color.white};
    margin-bottom: 14px;
  }

  p {
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.grayFirst};
    margin-bottom: 28px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 496px;

    h1 {
      font-size: 32px;
      line-height: calc(44 / 32);
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      line-height: calc(24 / 16);
      margin-bottom: 64px;
    }
  }
`;function G({step:e}){return t.jsx(u.div,{variants:R,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.4},children:t.jsxs(L,{children:[e===r.FIRST&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Get closer to your goals!"}),t.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e===r.SECOND&&t.jsx(t.Fragment,{children:t.jsx("h1",{children:"Get closer to your goals!"})}),e===r.THIRD&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Dear user"}),t.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]})]})},e)}const X=s.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Y=s.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border: none;
  color: ${({theme:e})=>e.color.white};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: all ${({theme:e})=>e.transition.main};
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    box-shadow: ${({theme:e})=>e.boxShadow.dataIndicator};
    transform: translateX(3px);
    background-color: ${({theme:e})=>e.color.black};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Q=s.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border: none;
  color: ${({theme:e})=>e.color.grayFifth};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: all ${({theme:e})=>e.transition.main};
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    box-shadow: ${({theme:e})=>e.boxShadow.dataIndicator};
    transform: translateX(3px);
    background-color: ${({theme:e})=>e.color.black};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,I=s.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.orangeFirst};

  svg {
    width: 75%;
    height: 75%;
    stroke: currentColor;
  }
`,V=s.button`
  padding: 12px 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  color: ${({theme:e})=>e.color.white};
  background-color: ${({theme:e})=>e.color.orangeFirst};
  border-radius: 12px;
  border: none;
  transition: background-color ${({theme:e})=>e.transition.main};

  &:hover {
    background-color: ${({theme:e})=>e.color.hover};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 16px 75px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`,_=(e,i,o)=>{if(e===r.FIRST)if(!i.values.height||!i.values.currentWeight||!i.values.desiredWeight){i.setFieldTouched("height",!0,!0),i.setFieldTouched("currentWeight",!0,!0),i.setFieldTouched("desiredWeight",!0,!0);return}else o(e===r.FIRST?r.SECOND:r.THIRD);if(e===r.SECOND)if(!i.values.blood||!i.values.sex||!i.values.levelActivity){i.setFieldTouched("blood",!0,!0),i.setFieldTouched("sex",!0,!0),i.setFieldTouched("levelActivity",!0,!0);return}else o(e===r.FIRST?r.THIRD:r.THIRD)},J=(e,i)=>i(e===r.THIRD?r.SECOND:r.FIRST),K=M({height:v().typeError("Height must be a number").moreThan(150,"Height must be greater than 150").required("Height is a required field"),currentWeight:v().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),desiredWeight:v().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),blood:w().required("Blood is a required field"),sex:w().required("Sex is a required field"),levelActivity:w().required("Level Activity is a required field")}),Z=({step:e,formik:i})=>{const o=y();return t.jsxs(X,{children:[e===r.THIRD&&t.jsx(u.div,{whileHover:{scale:1.02},whileTap:{scale:.9},children:t.jsx(V,{type:"submit",id:"btn",children:"Go"})}),e!==r.FIRST&&t.jsx(u.div,{whileHover:{translateX:-2},children:t.jsxs(Q,{type:"button",onClick:()=>{J(e,o)},children:[t.jsx(I,{children:t.jsx("svg",{children:t.jsx("use",{href:`${$}#big-arrow-left`})})}),"Back"]})}),e!==r.THIRD&&t.jsx(u.div,{children:t.jsxs(Y,{type:"button",onClick:()=>{_(e,i,o)},children:["Next",t.jsx(I,{children:t.jsx("svg",{children:t.jsx("use",{href:`${$}#big-arrow-right`})})})]})})]})},ee=({userParams:e,step:i})=>{const[o,m]=n.useState(new Date),[l,f]=n.useState(!1),b=y(),[x]=E(),a=q({initialValues:e,validationSchema:K,onSubmit:async h=>{const c={...h,birthday:U(o,"yyyy-MM-dd")};await x(c),a.resetForm(),b(`../${g.DIARY}`)}});return t.jsx(u.div,{variants:R,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.5},children:t.jsxs(O,{children:[t.jsx(G,{step:i}),t.jsx(z,{value:a,children:t.jsxs(B,{children:[i===r.FIRST&&t.jsx(N,{setIsDateSelected:f,isDateSelected:l,selectedDate:o,setSelectedDate:m,formik:a}),i===r.SECOND&&t.jsx(P,{formik:a}),t.jsx(Z,{step:i,formik:a})]})})]})},i)},te=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding-top: 127px;
  padding-bottom: 20px;
  height: 812px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
    padding-bottom: 32px;
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
    height: 800px;
  }
`,ie=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: auto;
`,j=s.div`
  width: 50px;
  height: 4px;
  border-radius: 2px;

  :nth-of-type(1) {
    background-color: ${({theme:e})=>e.color.hover};
    box-shadow: ${({theme:e})=>e.boxShadow.dataIndicator};
  }

  :nth-of-type(2) {
    background-color: ${({theme:e,step:i})=>i!==r.FIRST?e.color.hover:e.color.default};
    box-shadow: ${({theme:e,step:i})=>i!==r.FIRST?e.boxShadow.dataIndicator:"none"};
  }

  :nth-of-type(3) {
    background-color: ${({theme:e,step:i})=>i===r.THIRD?e.color.hover:e.color.default};
    box-shadow: ${({theme:e,step:i})=>i===r.THIRD?e.boxShadow.dataIndicator:"none"};
  }

  @media screen and (min-width: 768px) {
    width: 80px;
  }
`,re={height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""};function xe(){var T;const[e,i]=n.useState(!1),[o,m]=n.useState(re),[l,f]=n.useState(),[b,x]=n.useState(!1),a=y(),{pathname:h}=W(),{data:c,isFetching:p,isError:S,error:d}=k();return n.useEffect(()=>{let D;return p?D=setTimeout(i,5e3,!0):i(!1),clearTimeout(D)},[p]),n.useEffect(()=>{x(S)},[S]),n.useEffect(()=>{if((d==null?void 0:d.status)===401&&a(`../${g.WELCOME}`),c!=null&&c.user.userParams)return a(`../${g.DIARY}`)},[c,d,a]),n.useEffect(()=>{f(h.split("/")[2]),h===`/${g.DATA}`&&a(`${r.FIRST}`)},[a,h]),t.jsxs(te,{children:[t.jsx(ee,{step:l,userParams:o,setUserParams:m}),t.jsxs(ie,{children:[t.jsx(j,{step:l}),t.jsx(j,{step:l}),t.jsx(j,{step:l})]}),p&&t.jsx(C,{}),p&&e&&t.jsx(F,{onClose:()=>i(!1),children:t.jsx(H,{})}),b&&t.jsx(F,{onClose:()=>x(!1),children:t.jsx(A,{message:(T=d==null?void 0:d.data)==null?void 0:T.message})})]})}export{xe as Data};
