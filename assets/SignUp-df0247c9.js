import{n as a,u as p,a as x,j as e,L as m,b as h,r as u,s as g}from"./index-be352dae.js";import{c as w,a as c,u as f,F as v,b as j,d as b,I as y}from"./index.esm-4ebd04b0.js";import{T as F}from"./TitlePage-546070f1.js";const k=a.p`
  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
  }

  margin-top: 14px;

  line-height: calc(24 / 16);
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 496px;
    margin-top: 16px;
  }
`,S=a.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`,z=a.button`
  color: #efede8;
  margin-top: 28px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #e6533c;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  :hover {
    background-color: #ef8964;
  }
`,$=a.div`
  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
  }

  color: ${i=>{switch(i.type){case"invalid":return"#D80027";case"valid":return"#3CBF61";default:return"rgba(239, 237, 232, 0.3)"}}};
  input {
    width: 100%;
    padding: 14px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: rgba(239, 237, 232, 0.6);
    background-color: transparent;
    border-radius: 12px;

    border: ${i=>{switch(i.type){case"invalid":return"1px solid #D80027";case"valid":return"1px solid #3CBF61";default:return"1px solid rgba(239, 237, 232, 0.3)"}}};

    &:hover,
    &:focus {
      border: 1px solid #e6533c;
    }

    @media screen and (min-width: 375px) {
      width: 335px;
    }
    @media screen and (min-width: 768px) {
      width: 364px;
    }
  }
`,T=a.div`
  margin-top: 4px;

  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`,q=a.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,C=w({name:c().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:c().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:c().min(8).max(32).matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),l=({...i})=>{const[t,n]=b(i),[s,d]=u.useState(!1),o=()=>d(!0),r=!!s&&t.value.trim().length>2||n.touched;return e.jsxs($,{type:`${r?n.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...t,onFocus:o}),e.jsx(T,{children:r?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(y,{name:"checkmark"}),n.error?n.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function I(){const i=p(),[t,{isLoading:n}]=x(),s=f({initialValues:{name:"",email:"",password:""},onSubmit:async(d,{resetForm:o})=>{const r=await t(d).unwrap();i(g(r)),o()},validationSchema:C});return e.jsxs(e.Fragment,{children:[e.jsx(v,{value:s,children:e.jsxs(j,{children:[e.jsx(k,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(S,{children:[e.jsx(l,{name:"name",type:"text",placeholder:"Name"}),e.jsx(l,{name:"email",type:"email",placeholder:"Email"}),e.jsx(l,{name:"password",type:"text",placeholder:"Password"})]}),e.jsx(z,{type:"submit",children:"Sign Up"}),e.jsxs(q,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(m,{to:"/signin",children:"Sign In"})]})]})}),n&&e.jsx(h,{})]})}const U=a.div`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 2;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
    padding-top: 200px;
  }
`;function P(){return e.jsxs(U,{children:[e.jsx(F,{text:"Sign Up"}),e.jsx(I,{})]})}export{P as SignUp};
