import{d as n,e as C,f as S,r as h,j as e,I as s,g as B,n as i,P as y}from"./index-382f5aab.js";import{T as F}from"./TitlePage-20607d39.js";import{c as q,a as c,e as f,f as D,u as W}from"./index.esm-e4cf659e.js";import{f as T,C as $}from"./Calendar-bf2b5149.js";const A=n.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: black;

  @media (min-width: 768px) {
    width: 439px;
    gap: 32px;
  }
`,I=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media (min-width: 768px) {
    width: 166px;
  }
`,Y=n.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 61px;
    height: 62px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    fill: inherit;
    border-radius: 50%;
    font-size: 14px;
    color: rgba(239, 237, 232, 30%);
  }

  button {
    position: absolute;
    left: 50%;
    bottom: -11px;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border-style: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;

    svg {
      width: 102px;
      height: 102px;
    }

    img {
      width: 100%;
      height: 100%;
    }
    button {
      width: 32px;
      height: 32px;
      bottom: -14px;
    }
  }
`,P=n.button``,x=n.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,m=n.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,w=n.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,U=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${x} {
    text-align: center;
  }

  ${m} {
    color: #efede880;
  }

  @media (min-width: 768px) {
    gap: 8px;
  }
`,L=n.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,v=n.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 157px;
  padding: 14px 13px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    width: 214px;
    padding: 14px 18px;

    ${x} {
      line-height: calc(32 / 24);
    }
  }
`,M=n(v)`
  width: 165px;
  @media (min-width: 768px) {
    width: 209px;
  }
`,R=n.div`
  width: 100%;
  ${m} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media (min-width: 768px) {
    ${m} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,E=n.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function H(){const d=C(S),[l,o]=h.useState(d||null),[p,b]=h.useState("Anna Rybachok"),[g,u]=h.useState(0),[r,t]=h.useState(0),z=()=>{};return e.jsxs(A,{children:[e.jsxs(I,{children:[e.jsxs(Y,{children:[d?e.jsx("img",{src:l,alt:"Your avatar"}):e.jsx(s,{name:"user"}),e.jsx(P,{type:"button",onClick:z,children:e.jsx(s,{name:"add_avatar"})})]}),e.jsxs(U,{children:[e.jsx(x,{children:p}),e.jsx(m,{children:"User"})]})]}),e.jsxs(L,{children:[e.jsxs(v,{children:[e.jsxs(w,{children:[e.jsx(s,{name:"food"}),"Daily calorie intake"]}),e.jsx(x,{children:g})]}),e.jsxs(M,{children:[e.jsxs(w,{children:[e.jsx(s,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsxs(x,{children:[r," min"]})]})]}),e.jsx(R,{children:e.jsxs(m,{children:[e.jsx(s,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(E,{children:e.jsx(B,{})})]})}const V=i.form`
  width: 335px;
  background-color: #0a0909;
  /* 
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 10px;
    line-height: calc(12 / 10);
    color: #e6533c;
  } */

  button {
    width: 115px;
    padding: 12px 40px;
    font-size: 16px;
    line-height: calc(18 / 16);
    color: #efede899;
    border-radius: 12px;
    background-color: #e6533c;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 696px;

    button {
      width: 144px;
      padding: 16px 50px;
      font-size: 20px;
      line-height: calc(24 / 20);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 760px;
    padding-right: 64px;
    border-right: 1px solid #efede833;
  }
`,N=i.div`
  width: 100%;
  margin-bottom: 14px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
    input {
      margin: 4px 0 14px 0;
    }
  }

  input {
    padding: 14px;

    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
    width: 335px;
  }

  @media (min-width: 768px) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;
    label {
      width: 341px;
      display: block;
      font-size: 14px;
      line-height: calc(18 / 14);

      input {
        margin-top: 8px;
        margin-bottom: 0;
      }
    }

    input {
      font-size: 16px;
      line-height: calc(24 / 16);
      width: 341px;
      height: 52px;
    }
  }
`,O=i.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
  }
  input {
    padding: 14px;
    margin-top: 4px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
    width: 160px;
  }

  @media (min-width: 768px) {
    width: 696px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    label {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input {
      margin-top: 8px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,G=i.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`,j=i.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`,J=i(j)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,K=i.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,Q=i.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`,_=i.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,X=i(_)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,Z=i.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,ee=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,ie=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,a=i.input`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: 2px solid #636366;
    background-color: black;
  }

  &:checked&::before {
    /* outline: thick double #0e0e0d; */
    background-color: #ef8964;
  }
`,te=i.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,re=i.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 32px 0 38px 0;
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,ne=new Date(2006,1,1),de=ne.getFullYear(),ae=q({name:c().min(4).required("The field is required"),email:c().email("Please, enter a valid email (exemple@gmail.com) ").required("The field is required"),height:f().required("Please, enter your height").min(150).max(230),curWeight:f().required("Please, enter your weight").min(35),desWeight:f().required("The field is required").min(35),birthday:D().nullable().max(`${de}`,"your age must to be 18+").required("the field is required"),blood:c().required("required"),gender:c().required(),lifestyle:c().required()}),oe=i.div`
  position: relative;
  width: 161px;

  border-radius: 12px;
  padding: 11px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }

  .calendar-svg {
    width: 18px;
    height: 18px;
    stroke: #efede8;
  }

  .calendar-input-text {
    color: #efede8;
    font-size: 16px;
    line-height: 1.5;
  }
`;function k({selectedDate:d,setSelectedDate:l}){const o="Birthday",p=new Date,b=new Date(p).setFullYear(p.getFullYear()-18),g=new Date(p).setFullYear(p.getFullYear()-100),u=d.toString()===new Date().toString()?o:T(d,"dd.MM.yyyy");return e.jsx(oe,{children:e.jsx($,{inputText:u,selected:d,onSelect:l,toDate:b,fromDate:g,captionLayout:"dropdown-buttons"})})}k.propTypes={selectedDate:y.instanceOf(Date).isRequired,setSelectedDate:y.func.isRequired};const le=(d,l)=>{console.log(d),console.log(l)};function pe(){const[d,l]=h.useState(new Date),{values:o,errors:p,touched:b,isSubmitting:g,handleSubmit:u,handleBlur:r,handleChange:t}=W({initialValues:{name:"Sophy",email:"dfe@ukr.net",height:"",curWeight:"",desWeight:""},validationSchema:ae,onSubmit:le});return e.jsxs(V,{autoComplete:"off",onSubmit:u,children:[e.jsxs(N,{children:[e.jsxs("label",{children:["Basic info",e.jsx("input",{type:"text",name:"name",placeholder:"name",value:o.name,onChange:t,onBlur:r})]}),e.jsx("input",{type:"email",name:"email",placeholder:"email",value:o.email,onChange:t,onBlur:r})]}),e.jsxs(O,{children:[e.jsxs(G,{children:[e.jsxs(j,{htmlFor:"height",children:["Height",e.jsx("input",{type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:o.height,onChange:t,onBlur:r})]}),e.jsxs(J,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{type:"number",name:"curWeight",placeholder:"0",min:"35",value:o.curWeight,onChange:t,onBlur:r})]})]}),e.jsxs(Q,{children:[e.jsxs(_,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{type:"number",name:"desWeight",placeholder:"0",min:"35",value:o.desWeight,onChange:t,onBlur:r})]}),e.jsx(X,{children:e.jsx(k,{selectedDate:d,setSelectedDate:l})})]})]}),e.jsxs(Z,{children:[e.jsx(K,{children:" Blood "}),e.jsxs(te,{children:[e.jsxs(ee,{children:[e.jsx(a,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"one",children:"1"}),e.jsx(a,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(a,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(a,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(ie,{children:[e.jsxs("label",{htmlFor:"gender",children:[e.jsx(a,{type:"radio",name:"gender",onChange:t}),"Male"]}),e.jsxs("label",{htmlFor:"gender",children:[e.jsx(a,{type:"radio",name:"gender",onChange:t}),"Female"]})]})]}),e.jsxs(re,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(a,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(a,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(a,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(a,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(a,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})}const se=i.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,ce=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 38px;
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 25px;
    margin-top: 32px;
  }
`;function ue(){return e.jsxs(se,{children:[e.jsx(F,{text:"Profile Settings"}),e.jsxs(ce,{children:[e.jsx(H,{}),e.jsx(pe,{})]})]})}export{ue as Profile};
