import{d as n,r as h,j as e,I as u,e as k,n as i,P as y}from"./index-14125159.js";import{T as C}from"./TitlePage-6ca0a8d6.js";import{c as B,a as c,e as f,f as S,u as F}from"./index.esm-2440d4c7.js";import{f as q,C as D}from"./Calendar-fe569948.js";const W=n.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: black;

  @media (min-width: 768px) {
    width: 440px;
    gap: 32px;
  }
`,T=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media (min-width: 768px) {
    width: 166px;
  }
`,I=n.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;

  div {
  }

  img {
    display: block;
    margin: 0;
    max-width: 100%;
    max-height: 100%;
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

    img {
    }
    button {
      width: 32px;
      height: 32px;
      bottom: -14px;
    }
  }
`,$=n.button``,x=n.p`
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
`,Y=n.div`
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
`,P=n.div`
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
`,A=n(v)`
  width: 165px;
  @media (min-width: 768px) {
    width: 209px;
  }
`,L=n.div`
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
`,M=n.div`
  width: 100%;
  display: flex;
  justify-content: end;
`,R="https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg";function U(){const[o,l]=h.useState(R),[a,p]=h.useState("Anna Rybachok"),[g,b]=h.useState(0),[s,r]=h.useState(0);return e.jsxs(W,{children:[e.jsxs(T,{children:[e.jsxs(I,{children:[e.jsx("img",{src:o,alt:"Your avatar"}),e.jsx($,{type:"button",children:e.jsx(u,{name:"add_avatar"})})]}),e.jsxs(Y,{children:[e.jsx(x,{children:a}),e.jsx(m,{children:"User"})]})]}),e.jsxs(P,{children:[e.jsxs(v,{children:[e.jsxs(w,{children:[e.jsx(u,{name:"food"}),"Daily calorie intake"]}),e.jsx(x,{children:g})]}),e.jsxs(A,{children:[e.jsxs(w,{children:[e.jsx(u,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsxs(x,{children:[s," min"]})]})]}),e.jsx(L,{children:e.jsxs(m,{children:[e.jsx(u,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(M,{children:e.jsx(k,{})})]})}const E=i.form`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
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
`,H=i.div`
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
`,V=i.div`
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
`,N=i.div`
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
`,O=i(j)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,G=i.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,J=i.div`
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
`,K=i(_)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,Q=i.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,X=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,Z=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,d=i.input`
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
    border: 2px solid #636366;
    background-color: black;
  }

  &:checked&::before {
    border: thick double #0e0e0d;
    background-color: #ef8964;
  }
`,ee=i.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,ie=i.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 32px 0 38px 0;
  }
  @media (min-width: 1200px) {
    margin-bottom: 48px;
  }
`,te=new Date(2006,1,1),re=te.getFullYear(),ne=B({name:c().min(4).required("The field is required"),email:c().email("Please, enter a valid email (exemple@gmail.com) ").required("The field is required"),height:f().required("Please, enter your height").min(150).max(230),curWeight:f().required("Please, enter your weight").min(35),desWeight:f().required("The field is required").min(35),birthday:S().nullable().max(`${re}`,"your age must to be 18+").required("the field is required"),blood:c().required("required"),gender:c().required(),lifestyle:c().required()}),de=i.div`
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
`;function z({selectedDate:o,setSelectedDate:l}){const a="Birthday",p=new Date,g=new Date(p).setFullYear(p.getFullYear()-18),b=new Date(p).setFullYear(p.getFullYear()-100),s=o.toString()===new Date().toString()?a:q(o,"dd.MM.yyyy");return e.jsx(de,{children:e.jsx(D,{inputText:s,selected:o,onSelect:l,toDate:g,fromDate:b,captionLayout:"dropdown-buttons"})})}z.propTypes={selectedDate:y.instanceOf(Date).isRequired,setSelectedDate:y.func.isRequired};const oe=(o,l)=>{console.log(o),console.log(l)};function ae(){const[o,l]=h.useState(new Date),{values:a,errors:p,touched:g,isSubmitting:b,handleSubmit:s,handleBlur:r,handleChange:t}=F({initialValues:{name:"Sophy",email:"dfe@ukr.net",height:"",curWeight:"",desWeight:""},validationSchema:ne,onSubmit:oe});return e.jsxs(E,{autoComplete:"off",onSubmit:s,children:[e.jsxs(H,{children:[e.jsxs("label",{children:["Basic info",e.jsx("input",{type:"text",name:"name",placeholder:"name",value:a.name,onChange:t,onBlur:r})]}),e.jsx("input",{type:"email",name:"email",placeholder:"email",value:a.email,onChange:t,onBlur:r})]}),e.jsxs(V,{children:[e.jsxs(N,{children:[e.jsxs(j,{htmlFor:"height",children:["Height",e.jsx("input",{type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:a.height,onChange:t,onBlur:r})]}),e.jsxs(O,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{type:"number",name:"curWeight",placeholder:"0",min:"35",value:a.curWeight,onChange:t,onBlur:r})]})]}),e.jsxs(J,{children:[e.jsxs(_,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{type:"number",name:"desWeight",placeholder:"0",min:"35",value:a.desWeight,onChange:t,onBlur:r})]}),e.jsx(K,{children:e.jsx(z,{selectedDate:o,setSelectedDate:l})})]})]}),e.jsxs(Q,{children:[e.jsx(G,{children:" Blood "}),e.jsxs(ee,{children:[e.jsxs(X,{children:[e.jsx(d,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"one",children:"1"}),e.jsx(d,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(d,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(d,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(Z,{children:[e.jsxs("label",{htmlFor:"gender",children:[e.jsx(d,{type:"radio",name:"gender",onChange:t}),"Male"]}),e.jsxs("label",{htmlFor:"gender",children:[e.jsx(d,{type:"radio",name:"gender",onChange:t}),"Female"]})]})]}),e.jsxs(ie,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(d,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(d,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(d,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(d,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(d,{type:"radio",name:"lifestyle",onChange:t,onBlur:r})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{text:"Profile Settings"}),e.jsx(U,{}),e.jsx(ae,{})]})}export{he as Profile};
