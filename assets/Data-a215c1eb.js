import{n as d,P as a,j as t,D as r,e as T,f as F,r as n,g as A,R as b,h as C,i as H,k as z,B as I,T as P,l as B}from"./index-0fa7f3da.js";import{u as N,F as M,a as O}from"./formik.esm-ef471f25.js";import{s as W,D as U}from"./inputData-b4e61c63.js";import{m as x}from"./motion-463808c1.js";import{FirstStep as L}from"./FirstStep-a272ff11.js";import{SecondStep as G}from"./SecondStep-70e9ecb1.js";import{c as X,b as y,d as Y,a as w}from"./index.esm-8942a050.js";import{f as Q}from"./Calendar-e0b0b156.js";import"./tiny-warning.esm-c932d744.js";const V=d.div`
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
`;function E({step:e}){return t.jsx(x.div,{variants:W,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.4},children:t.jsxs(V,{children:[e===r.FIRST&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Get closer to your goals!"}),t.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e===r.SECOND&&t.jsx(t.Fragment,{children:t.jsx("h1",{children:"Get closer to your goals!"})}),e===r.THIRD&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Dear user"}),t.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]})]})},e)}E.propTypes={step:a.string};const _=d.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,J=d.button`
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
`,K=d.button`
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
`,R=d.div`
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
`,Z=d.button`
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
`,ee=(e,i,s,l)=>{if(e===r.FIRST)if(!i.values.height||!i.values.currentWeight||!i.values.desiredWeight||!l){i.setFieldTouched("height",!0,!0),i.setFieldTouched("currentWeight",!0,!0),i.setFieldTouched("desiredWeight",!0,!0),i.setFieldTouched("birthday",!0,!0);return}else s(e===r.FIRST?r.SECOND:r.THIRD);if(e===r.SECOND)if(!i.values.blood||!i.values.sex||!i.values.levelActivity){i.setFieldTouched("blood",!0,!0),i.setFieldTouched("sex",!0,!0),i.setFieldTouched("levelActivity",!0,!0);return}else s(e===r.FIRST?r.THIRD:r.THIRD)},te=(e,i)=>i(e===r.THIRD?r.SECOND:r.FIRST),ie=new Date(2006,1,1),re=ie.getFullYear(),ae=X({height:y().typeError("Height must be a number").moreThan(150,"Height must be greater than 150").required("Height is a required field"),currentWeight:y().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),desiredWeight:y().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),birthday:Y().nullable().max(`${re}`,"your age must to be 18+").required("the field is required"),blood:w().required("Blood is a required field"),sex:w().required("Sex is a required field"),levelActivity:w().required("Level Activity is a required field")}),q=({step:e,formik:i,isDateSelected:s})=>{const l=T();return t.jsxs(_,{children:[e===r.THIRD&&t.jsx(x.div,{whileHover:{scale:1.02},whileTap:{scale:.9},children:t.jsx(Z,{type:"submit",id:"btn",children:"Go"})}),e!==r.FIRST&&t.jsx(x.div,{whileHover:{translateX:-2},children:t.jsxs(K,{type:"button",onClick:()=>{te(e,l)},children:[t.jsx(R,{children:t.jsx("svg",{children:t.jsx("use",{href:`${F}#big-arrow-left`})})}),"Back"]})}),e!==r.THIRD&&t.jsx(x.div,{children:t.jsxs(J,{type:"button",onClick:()=>{ee(e,i,l,s)},children:["Next",t.jsx(R,{children:t.jsx("svg",{children:t.jsx("use",{href:`${F}#big-arrow-right`})})})]})})]})};q.propTypes={step:a.string,formik:a.object,isDateSelected:a.bool.isRequired};function k({userParams:e,step:i}){const[s,l]=n.useState(new Date),[c,f]=n.useState(!1),v=T(),[g]=A(),o=N({initialValues:e,validationSchema:ae,onSubmit:async p=>{const u={...p,birthday:Q(s,"yyyy-MM-dd")};await g(u),o.resetForm(),v(`../${b.DIARY}`)}});return t.jsx(x.div,{variants:W,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.5},children:t.jsxs(U,{children:[t.jsx(E,{step:i}),t.jsx(M,{value:o,children:t.jsxs(O,{children:[i===r.FIRST&&t.jsx(L,{setIsDateSelected:f,isDateSelected:c,selectedDate:s,setSelectedDate:l,formik:o}),i===r.SECOND&&t.jsx(G,{formik:o}),t.jsx(q,{step:i,formik:o,isDateSelected:c})]})})]})},i)}k.propTypes={userParams:a.shape({height:a.string,currentWeight:a.string,desiredWeight:a.string,birthday:a.string,blood:a.string,sex:a.string,levelActivity:a.string}).isRequired,step:a.string};const oe=d.div`
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
`,ne=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: auto;
`,j=d.div`
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
`,se={height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""};function be(){var D;const[e,i]=n.useState(!1),[s,l]=n.useState(se),[c,f]=n.useState(),[v,g]=n.useState(!1),o=T(),{pathname:p}=C(),{data:u,isFetching:m,isError:S,error:h}=H();return n.useEffect(()=>{let $;return m?$=setTimeout(i,5e3,!0):i(!1),clearTimeout($)},[m]),n.useEffect(()=>{g(S)},[S]),n.useEffect(()=>{if((h==null?void 0:h.status)===401&&o(`../${b.WELCOME}`),u!=null&&u.user.userParams)return o(`../${b.DIARY}`)},[u,h,o]),n.useEffect(()=>{f(p.split("/")[2]),p===`/${b.DATA}`&&o(`${r.FIRST}`)},[o,p]),t.jsxs(oe,{children:[t.jsx(k,{step:c,userParams:s,setUserParams:l}),t.jsxs(ne,{children:[t.jsx(j,{step:c}),t.jsx(j,{step:c}),t.jsx(j,{step:c})]}),m&&t.jsx(z,{}),m&&e&&t.jsx(I,{onClose:()=>i(!1),children:t.jsx(P,{})}),v&&t.jsx(I,{onClose:()=>g(!1),children:t.jsx(B,{message:(D=h==null?void 0:h.data)==null?void 0:D.message})})]})}export{be as Data};
