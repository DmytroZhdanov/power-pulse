import{n as d,P as a,j as t,D as r,e as j,f as F,r as n,g as q,R as f,h as A,i as C,k as H,B as $,T as z,l as P}from"./index-810ba1c4.js";import{u as B,F as N,a as M}from"./formik.esm-05732012.js";import{s as R,D as O}from"./inputData-0f4d6b09.js";import{m as g}from"./motion-59ca71b2.js";import{FirstStep as U}from"./FirstStep-ca3b7b8a.js";import{SecondStep as L}from"./SecondStep-12119ece.js";import{c as G,b as x,a as X}from"./index.esm-46b9b58e.js";import{f as Y}from"./Calendar-bba8bcb8.js";import"./tiny-warning.esm-c932d744.js";const Q=d.div`
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
`;function W({step:e}){return t.jsx(g.div,{variants:R,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.4},children:t.jsxs(Q,{children:[e===r.FIRST&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Get closer to your goals!"}),t.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e===r.SECOND&&t.jsx(t.Fragment,{children:t.jsx("h1",{children:"Get closer to your goals!"})}),e===r.THIRD&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Dear user"}),t.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]})]})},e)}W.propTypes={step:a.string};const V=d.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,_=d.button`
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
`,J=d.button`
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
`,I=d.div`
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
`,K=d.button`
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
`,Z=(e,i,s,l)=>{if(e===r.FIRST)if(!i.values.height||!i.values.currentWeight||!i.values.desiredWeight||!l){i.setFieldTouched("height",!0,!0),i.setFieldTouched("currentWeight",!0,!0),i.setFieldTouched("desiredWeight",!0,!0),i.setFieldTouched("birthday",!0,!0);return}else s(e===r.FIRST?r.SECOND:r.THIRD);if(e===r.SECOND)if(!i.values.blood||!i.values.sex||!i.values.levelActivity){i.setFieldTouched("blood",!0,!0),i.setFieldTouched("sex",!0,!0),i.setFieldTouched("levelActivity",!0,!0);return}else s(e===r.FIRST?r.THIRD:r.THIRD)},ee=(e,i)=>i(e===r.THIRD?r.SECOND:r.FIRST),te=G({height:x().typeError("Height must be a number").moreThan(150,"Height must be greater than 150").required("Height is a required field"),currentWeight:x().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),desiredWeight:x().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),blood:x().required("Blood is a required field"),sex:X().required("Sex is a required field"),levelActivity:x().required("Level Activity is a required field")}),E=({step:e,formik:i,isDateSelected:s})=>{const l=j();return t.jsxs(V,{children:[e===r.THIRD&&t.jsx(g.div,{whileHover:{scale:1.02},whileTap:{scale:.9},children:t.jsx(K,{type:"submit",id:"btn",children:"Go"})}),e!==r.FIRST&&t.jsx(g.div,{whileHover:{translateX:-2},children:t.jsxs(J,{type:"button",onClick:()=>{ee(e,l)},children:[t.jsx(I,{children:t.jsx("svg",{children:t.jsx("use",{href:`${F}#big-arrow-left`})})}),"Back"]})}),e!==r.THIRD&&t.jsx(g.div,{children:t.jsxs(_,{type:"button",onClick:()=>{Z(e,i,l,s)},children:["Next",t.jsx(I,{children:t.jsx("svg",{children:t.jsx("use",{href:`${F}#big-arrow-right`})})})]})})]})};E.propTypes={step:a.string,formik:a.object,isDateSelected:a.bool.isRequired};function k({userParams:e,step:i}){const[s,l]=n.useState(new Date),[c,v]=n.useState(!1),w=j(),[m]=q(),o=B({initialValues:e,validationSchema:te,onSubmit:async p=>{const u={...p,birthday:Y(s,"yyyy-MM-dd")};await m(u),o.resetForm(),w(`../${f.DIARY}`)}});return t.jsx(g.div,{variants:R,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.5},children:t.jsxs(O,{children:[t.jsx(W,{step:i}),t.jsx(N,{value:o,children:t.jsxs(M,{children:[i===r.FIRST&&t.jsx(U,{setIsDateSelected:v,isDateSelected:c,selectedDate:s,setSelectedDate:l,formik:o}),i===r.SECOND&&t.jsx(L,{formik:o}),t.jsx(E,{step:i,formik:o,isDateSelected:c})]})})]})},i)}k.propTypes={userParams:a.shape({height:a.string,currentWeight:a.string,desiredWeight:a.string,birthday:a.string,blood:a.string,sex:a.string,levelActivity:a.string}).isRequired,step:a.string};const ie=d.div`
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
`,re=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: auto;
`,y=d.div`
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
`,ae={height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""};function xe(){var S;const[e,i]=n.useState(!1),[s,l]=n.useState(ae),[c,v]=n.useState(),[w,m]=n.useState(!1),o=j(),{pathname:p}=A(),{data:u,isFetching:b,isError:T,error:h}=C();return n.useEffect(()=>{let D;return b?D=setTimeout(i,5e3,!0):i(!1),clearTimeout(D)},[b]),n.useEffect(()=>{m(T)},[T]),n.useEffect(()=>{if((h==null?void 0:h.status)===401&&o(`../${f.WELCOME}`),u!=null&&u.user.userParams)return o(`../${f.DIARY}`)},[u,h,o]),n.useEffect(()=>{v(p.split("/")[2]),p===`/${f.DATA}`&&o(`${r.FIRST}`)},[o,p]),t.jsxs(ie,{children:[t.jsx(k,{step:c,userParams:s,setUserParams:l}),t.jsxs(re,{children:[t.jsx(y,{step:c}),t.jsx(y,{step:c}),t.jsx(y,{step:c})]}),b&&t.jsx(H,{}),b&&e&&t.jsx($,{onClose:()=>i(!1),children:t.jsx(z,{})}),w&&t.jsx($,{onClose:()=>m(!1),children:t.jsx(P,{message:(S=h==null?void 0:h.data)==null?void 0:S.message})})]})}export{xe as Data};
