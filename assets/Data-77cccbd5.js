import{n,P as o,j as t,D as r,e as k,l as g,f as A,m as w,o as T,r as d,u as S,p as H,h as z,s as F,F as C,i as P,R as y,q as B,t as N}from"./index-942e5375.js";import{s as $,D as O}from"./inputData-32f5c902.js";import{m}from"./motion-33755778.js";import{FirstStep as U}from"./FirstStep-3eb9e906.js";import{SecondStep as L}from"./SecondStep-6073fe8c.js";import{f as G}from"./Calendar-637e625f.js";const M=n.div`
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
`;function I({step:e}){return t.jsx(m.div,{variants:$,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.4},children:t.jsxs(M,{children:[e===r.FIRST&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Get closer to your goals!"}),t.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e===r.SECOND&&t.jsx(t.Fragment,{children:t.jsx("h1",{children:"Get closer to your goals!"})}),e===r.THIRD&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Dear user"}),t.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]})]})},e)}I.propTypes={step:o.string};const X=n.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Y=n.button`
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
`,Q=n.button`
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
`,D=n.div`
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
`,V=n.button`
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
`,_=(e,i,a,s)=>{if(e===r.FIRST)if(!i.values.height||!i.values.currentWeight||!i.values.desiredWeight||!s){i.setFieldTouched("height",!0,!0),i.setFieldTouched("currentWeight",!0,!0),i.setFieldTouched("desiredWeight",!0,!0),i.setFieldTouched("birthday",!0,!0);return}else a(e===r.FIRST?r.SECOND:r.THIRD);if(e===r.SECOND)if(!i.values.blood||!i.values.sex||!i.values.levelActivity){i.setFieldTouched("blood",!0,!0),i.setFieldTouched("sex",!0,!0),i.setFieldTouched("levelActivity",!0,!0);return}else a(e===r.FIRST?r.THIRD:r.THIRD)},J=(e,i)=>i(e===r.THIRD?r.SECOND:r.FIRST),K=k({height:g().typeError("Height must be a number").moreThan(150,"Height must be greater than 150").required("Height is a required field"),currentWeight:g().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),desiredWeight:g().typeError("Weight must be a number").moreThan(35,"Weight must be greater than 35").required("Weight is a required field"),blood:g().required("Blood is a required field"),sex:A().required("Sex is a required field"),levelActivity:g().required("Level Activity is a required field")}),R=({step:e,formik:i,isDateSelected:a})=>{const s=w();return t.jsxs(X,{children:[e===r.THIRD&&t.jsx(m.div,{whileHover:{scale:1.02},whileTap:{scale:.9},children:t.jsx(V,{type:"submit",id:"btn",children:"Go"})}),e!==r.FIRST&&t.jsx(m.div,{whileHover:{translateX:-2},children:t.jsxs(Q,{type:"button",onClick:()=>{J(e,s)},children:[t.jsx(D,{children:t.jsx("svg",{children:t.jsx("use",{href:`${T}#big-arrow-left`})})}),"Back"]})}),e!==r.THIRD&&t.jsx(m.div,{children:t.jsxs(Y,{type:"button",onClick:()=>{_(e,i,s,a)},children:["Next",t.jsx(D,{children:t.jsx("svg",{children:t.jsx("use",{href:`${T}#big-arrow-right`})})})]})})]})};R.propTypes={step:o.string,formik:o.object,isDateSelected:o.bool.isRequired};function E({userParams:e,step:i}){const[a,s]=d.useState(new Date),[c,b]=d.useState(!1),h=w(),l=S(),[f,{isLoading:u,isError:p,error:j}]=H(),x=z({initialValues:e,validationSchema:K,onSubmit:async W=>{const q={...W,birthday:G(a,"yyyy-MM-dd")};await f(q),x.resetForm(),h(`../${y.DIARY}`)}});return d.useEffect(()=>{l(F({isLoading:u,isError:p,error:j}))},[l,j,p,u]),t.jsx(m.div,{variants:$,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.5},children:t.jsxs(O,{children:[t.jsx(I,{step:i}),t.jsx(C,{value:x,children:t.jsxs(P,{children:[i===r.FIRST&&t.jsx(U,{setIsDateSelected:b,isDateSelected:c,selectedDate:a,setSelectedDate:s,formik:x}),i===r.SECOND&&t.jsx(L,{formik:x}),t.jsx(R,{step:i,formik:x,isDateSelected:c})]})})]})},i)}E.propTypes={userParams:o.shape({height:o.string,currentWeight:o.string,desiredWeight:o.string,birthday:o.string,blood:o.string,sex:o.string,levelActivity:o.string}).isRequired,step:o.string};const Z=n.div`
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
`,ee=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: auto;
`,v=n.div`
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
`,te={height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""};function de(){const[e,i]=d.useState(te),[a,s]=d.useState(),c=w(),b=S(),{pathname:h}=B(),{data:l,isFetching:f,isError:u,error:p}=N();return d.useEffect(()=>{b(F({isLoading:f,isError:u,error:p}))},[b,p,u,f]),d.useEffect(()=>{if(l!=null&&l.user.userParams)return c(`../${y.DIARY}`)},[l,c]),d.useEffect(()=>{s(h.split("/")[2]),h===`/${y.DATA}`&&c(`${r.FIRST}`)},[c,h]),t.jsxs(Z,{children:[t.jsx(E,{step:a,userParams:e,setUserParams:i}),t.jsxs(ee,{children:[t.jsx(v,{step:a}),t.jsx(v,{step:a}),t.jsx(v,{step:a})]})]})}export{de as Data};
