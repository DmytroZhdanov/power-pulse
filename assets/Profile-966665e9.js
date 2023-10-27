import{d,e as T,f as I,r as s,j as e,I as h,g as P,n as i,P as k,h as $}from"./index-d4d582b8.js";import{T as U}from"./TitlePage-d4e8d25e.js";import{c as A,a as m,e as w,f as Y,u as M}from"./index.esm-1d032152.js";import{f as z,C as V}from"./Calendar-d99ca494.js";import"./tiny-warning.esm-c932d744.js";const L=d.div`
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
`,R=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media (min-width: 768px) {
    width: 166px;
  }
`,E=d.div`
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
`,H=d.button``,g=d.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,u=d.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,C=d.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,N=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${g} {
    text-align: center;
  }

  ${u} {
    color: #efede880;
  }

  @media (min-width: 768px) {
    gap: 8px;
  }
`,O=d.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,B=d.div`
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

    ${g} {
      line-height: calc(32 / 24);
    }
  }
`,G=d(B)`
  width: 165px;
  @media (min-width: 768px) {
    width: 209px;
  }
`,Q=d.div`
  width: 100%;
  ${u} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media (min-width: 768px) {
    ${u} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,J=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function K(){const n=T(I),[a,l]=s.useState(n||null),[p,f]=s.useState("Anna Rybachok"),[b,x]=s.useState(0),[t,r]=s.useState(0),y=()=>{};return e.jsxs(L,{children:[e.jsxs(R,{children:[e.jsxs(E,{children:[n?e.jsx("img",{src:a,alt:"Your avatar"}):e.jsx(h,{name:"user"}),e.jsx(H,{type:"button",onClick:y,children:e.jsx(h,{name:"add_avatar"})})]}),e.jsxs(N,{children:[e.jsx(g,{children:p}),e.jsx(u,{children:"User"})]})]}),e.jsxs(O,{children:[e.jsxs(B,{children:[e.jsxs(C,{children:[e.jsx(h,{name:"food"}),"Daily calorie intake"]}),e.jsx(g,{children:b})]}),e.jsxs(G,{children:[e.jsxs(C,{children:[e.jsx(h,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsxs(g,{children:[t," min"]})]})]}),e.jsx(Q,{children:e.jsxs(u,{children:[e.jsx(h,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(J,{children:e.jsx(P,{})})]})}const X=i.form`
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
`,Z=i.div`
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
`,ee=i.div`
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
`,ie=i.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`,S=i.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`,te=i(S)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,re=i.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,ne=i.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`,F=i.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,ae=i(F)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,de=i.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,oe=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,le=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,o=i.input`
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
`,se=i.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,pe=i.div`
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
`,ce=new Date(2006,1,1),he=ce.getFullYear(),xe=A({name:m().min(4).required("The field is required"),email:m().email("Please, enter a valid email (exemple@gmail.com) ").required("The field is required"),height:w().required("Please, enter your height").min(150).max(230),curWeight:w().required("Please, enter your weight").min(35),desWeight:w().required("The field is required").min(35),birthday:Y().nullable().max(`${he}`,"your age must to be 18+").required("the field is required"),blood:m().required("required"),gender:m().required(),lifestyle:m().required()}),me=i.div`
  position: relative;
  width: 161px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:n})=>n.color.border};

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
`,ge=i.input`
  position: absolute;
  opacity: 0;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  clip-path: inset(100%);
  white-space: nowrap;
  clip: rect(0 0 0 0);
`,ue=i.p`
  color: ${({setColor:n})=>n==="full"?({theme:a})=>a.color.white:({theme:a})=>a.color.border};
  font-size: 16px;
  line-height: 1.5;
`,fe=i.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:n})=>n.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;function D({selectedDate:n,setSelectedDate:a}){const[l,p]=s.useState(!0),f="Birthday",b=v=>{p(!1),a(v)},[x]=$();s.useEffect(()=>{(async()=>{var j,_;const{user:c}=await x().unwrap();(j=c==null?void 0:c.userParams)!=null&&j.birthday?(p(!1),a(new Date((_=c==null?void 0:c.userParams)==null?void 0:_.birthday))):p(!0)})()},[x,a]);const t=new Date,r=new Date(t.setFullYear(t.getFullYear()-18)),y=new Date(t.setFullYear(t.getFullYear()-100)),q=l?f:z(n,"yyyy-MM-dd"),W=l?f:z(n,"dd.MM.yyyy");return e.jsxs(e.Fragment,{children:[e.jsx(ge,{disabled:!0,type:"date",name:"birthday",defaultValue:q}),e.jsx(V,{maxDate:r,minDate:y,onChange:b,value:n,children:e.jsxs(me,{children:[e.jsx(ue,{setColor:l?"":"full",children:W}),e.jsx(fe,{children:e.jsx(h,{name:"calendar"})})]})})]})}D.propTypes={selectedDate:k.instanceOf(Date).isRequired,setSelectedDate:k.func.isRequired};const be=(n,a)=>{console.log(n),console.log(a)};function ye(){const[n,a]=s.useState(new Date),{values:l,errors:p,touched:f,isSubmitting:b,handleSubmit:x,handleBlur:t,handleChange:r}=M({initialValues:{name:"Sophy",email:"dfe@ukr.net",height:"",curWeight:"",desWeight:""},validationSchema:xe,onSubmit:be});return e.jsxs(X,{autoComplete:"off",onSubmit:x,children:[e.jsxs(Z,{children:[e.jsxs("label",{children:["Basic info",e.jsx("input",{type:"text",name:"name",placeholder:"name",value:l.name,onChange:r,onBlur:t})]}),e.jsx("input",{type:"email",name:"email",placeholder:"email",value:l.email,onChange:r,onBlur:t})]}),e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsxs(S,{htmlFor:"height",children:["Height",e.jsx("input",{type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:l.height,onChange:r,onBlur:t})]}),e.jsxs(te,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{type:"number",name:"curWeight",placeholder:"0",min:"35",value:l.curWeight,onChange:r,onBlur:t})]})]}),e.jsxs(ne,{children:[e.jsxs(F,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{type:"number",name:"desWeight",placeholder:"0",min:"35",value:l.desWeight,onChange:r,onBlur:t})]}),e.jsx(ae,{children:e.jsx(D,{selectedDate:n,setSelectedDate:a})})]})]}),e.jsxs(de,{children:[e.jsx(re,{children:" Blood "}),e.jsxs(se,{children:[e.jsxs(oe,{children:[e.jsx(o,{type:"radio",name:"blood",onChange:r,onBlur:t}),e.jsx("label",{htmlFor:"one",children:"1"}),e.jsx(o,{type:"radio",name:"blood",onChange:r,onBlur:t}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(o,{type:"radio",name:"blood",onChange:r,onBlur:t}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(o,{type:"radio",name:"blood",onChange:r,onBlur:t}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(le,{children:[e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:r}),"Male"]}),e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:r}),"Female"]})]})]}),e.jsxs(pe,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:r,onBlur:t})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:r,onBlur:t})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:r,onBlur:t})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:r,onBlur:t})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"lifestyle",onChange:r,onBlur:t})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})}const we=i.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,ve=i.div`
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
`;function Be(){return e.jsxs(we,{children:[e.jsx(U,{text:"Profile Settings"}),e.jsxs(ve,{children:[e.jsx(K,{}),e.jsx(ye,{})]})]})}export{Be as Profile};
