import{d,r as m,j as e,e as _,n as r,P as b}from"./index-f32c8d64.js";import{T as z}from"./TitlePage-a9d64b21.js";import{I as g,c as k,a as s,e as u,f as C,u as B}from"./index.esm-bfa0afb6.js";import{f as S,C as F}from"./Calendar-2c01487d.js";const q=d.div`
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
`,W=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media (min-width: 768px) {
    width: 166px;
  }
`,D=d.div`
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
`,T=d.button``,c=d.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,h=d.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,f=d.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,I=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${c} {
    text-align: center;
  }

  ${h} {
    color: #efede880;
  }

  @media (min-width: 768px) {
    gap: 8px;
  }
`,$=d.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,y=d.div`
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

    ${c} {
      line-height: calc(32 / 24);
    }
  }
`,Y=d(y)`
  width: 165px;
  @media (min-width: 768px) {
    width: 209px;
  }
`,P=d.div`
  width: 100%;
  ${h} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media (min-width: 768px) {
    ${h} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,A=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
`,L="https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg";function M(){const[n,l]=m.useState(L),[x,a]=m.useState("Anna Rybachok"),[p,t]=m.useState(0),[i,oe]=m.useState(0);return e.jsxs(q,{children:[e.jsxs(W,{children:[e.jsxs(D,{children:[e.jsx("img",{src:n,alt:"Your avatar"}),e.jsx(T,{type:"button",children:e.jsx(g,{name:"add_avatar"})})]}),e.jsxs(I,{children:[e.jsx(c,{children:x}),e.jsx(h,{children:"User"})]})]}),e.jsxs($,{children:[e.jsxs(y,{children:[e.jsxs(f,{children:[e.jsx(g,{name:"food"}),"Daily calorie intake"]}),e.jsx(c,{children:p})]}),e.jsxs(Y,{children:[e.jsxs(f,{children:[e.jsx(g,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsxs(c,{children:[i," min"]})]})]}),e.jsx(P,{children:e.jsxs(h,{children:[e.jsx(g,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(A,{children:e.jsx(_,{})})]})}const R=r.form`
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
`,U=r.div`
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
`,E=r.div`
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
`,H=r.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`,w=r.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`,V=r(w)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,N=r.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,O=r.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`,v=r.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,G=r(v)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,J=r.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,K=r.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,Q=r.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,o=r.input`
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
`,X=r.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Z=r.div`
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
`,ee=new Date(2006,1,1),ie=ee.getFullYear(),te=k({name:s().min(4).required("The field is required"),email:s().email("Please, enter a valid email (exemple@gmail.com) ").required("The field is required"),height:u().required("Please, enter your height").min(150).max(230),curWeight:u().required("Please, enter your weight").min(35),desWeight:u().required("The field is required").min(35),birthday:C().nullable().max(`${ie}`,"your age must to be 18+").required("the field is required"),blood:s().required("required"),gender:s().required(),lifestyle:s().required()}),re=r.div`
  position: relative;
  width: 161px;
  height: 52px;
  border-radius: 12px;
  padding: 14px 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 187px;
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
`;function j({selectedDate:n,setSelectedDate:l}){const x="Choose birthday",a=new Date,p=new Date(a).setFullYear(a.getFullYear()-18),t=new Date(a).setFullYear(a.getFullYear()-100),i=n.toString()===new Date().toString()?x:S(n,"dd.MM.yyyy");return e.jsx(re,{children:e.jsx(F,{inputText:i,selected:n,onSelect:l,toDate:p,fromDate:t,captionLayout:"dropdown-buttons"})})}j.propTypes={selectedDate:b.instanceOf(Date).isRequired,setSelectedDate:b.func.isRequired};const ne=(n,l)=>{console.log(n),console.log(l)};function de(){const{values:n,errors:l,touched:x,isSubmitting:a,handleSubmit:p,handleBlur:t,handleChange:i}=B({initialValues:{name:"Sophy",email:"dfe@ukr.net",height:"",curWeight:"",desWeight:""},validationSchema:te,onSubmit:ne});return e.jsxs(R,{autoComplete:"off",onSubmit:p,children:[e.jsxs(U,{children:[e.jsxs("label",{children:["Basic info",e.jsx("input",{type:"text",name:"name",placeholder:"name",value:n.name,onChange:i,onBlur:t})]}),e.jsx("input",{type:"email",name:"email",placeholder:"email",value:n.email,onChange:i,onBlur:t})]}),e.jsxs(E,{children:[e.jsxs(H,{children:[e.jsxs(w,{htmlFor:"height",children:["Height",e.jsx("input",{type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:n.height,onChange:i,onBlur:t})]}),e.jsxs(V,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{type:"number",name:"curWeight",placeholder:"0",min:"35",value:n.curWeight,onChange:i,onBlur:t})]})]}),e.jsxs(O,{children:[e.jsxs(v,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{type:"number",name:"desWeight",placeholder:"0",min:"35",value:n.desWeight,onChange:i,onBlur:t})]}),e.jsx(G,{children:e.jsx(j,{})})]})]}),e.jsxs(J,{children:[e.jsx(N,{children:" Blood "}),e.jsxs(X,{children:[e.jsxs(K,{children:[e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:t}),e.jsx("label",{htmlFor:"one",children:"1"}),e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:t}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:t}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:t}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(Q,{children:[e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:i}),"Male"]}),e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:i}),"Female"]})]})]}),e.jsxs(Z,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:i,onBlur:t})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:i,onBlur:t})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:i,onBlur:t})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:i,onBlur:t})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:i,onBlur:t})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})}function ce(){return e.jsxs(e.Fragment,{children:[e.jsx(z,{text:"Profile Settings"}),e.jsx(M,{}),e.jsx(de,{})]})}export{ce as Profile};
