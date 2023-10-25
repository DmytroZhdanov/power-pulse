import{n as i,u as m,a as h,j as e,L as u,b as g,r as f,s as w}from"./index-6d601247.js";import{c as v,a as o,u as j,F as b,b as y,d as F,I as k}from"./index.esm-d5a5fd99.js";import{T as z}from"./TitlePage-6255ef30.js";const S=i.p`
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
`,T=i.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`,$=i.button`
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
`,C=i.div`
  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
  }

  color: ${a=>{switch(a.type){case"invalid":return"#D80027";case"valid":return"#3CBF61";default:return"rgba(239, 237, 232, 0.3)"}}};
  input {
    width: 100%;
    padding: 14px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: rgba(239, 237, 232, 0.6);
    background-color: transparent;
    border-radius: 12px;

    border: ${a=>{switch(a.type){case"invalid":return"1px solid #D80027";case"valid":return"1px solid #3CBF61";default:return"1px solid rgba(239, 237, 232, 0.3)"}}};

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
`,q=i.div`
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
`,A=i.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,E=v({name:o().min(3).matches("^^[а-яА-ЯёЁa-zA-Z0-9]+$","The name must start with a letter").required("This is a required field"),email:o().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:o().min(6).matches("^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$","Enter valid values").required("This is a required field")}),c=({label:a,helpText:l,...n})=>{const[r,t]=F(n),[s,d]=f.useState(!1),x=()=>d(!0),p=!!s&&r.value.trim().length>2||t.touched;return e.jsxs(C,{type:`${p?t.error?"invalid":"valid":""}`,children:[e.jsx("input",{...n,...r,onFocus:x}),e.jsx(q,{children:p?e.jsxs("div",{id:`${n.id}-feedback`,"aria-live":"polite",children:[e.jsx(k,{name:"checkmark"}),t.error?t.error:e.jsxs(e.Fragment,{children:["Success ",n.name]})]}):null})]})};function I(){const a=m(),[l,{isLoading:n}]=h(),r=j({initialValues:{name:"",email:"",password:""},onSubmit:async(t,{resetForm:s})=>{const d=await l(t).unwrap();a(w(d)),s()},validationSchema:E});return e.jsxs(e.Fragment,{children:[e.jsx(b,{value:r,children:e.jsxs(y,{autoComplete:"off",children:[e.jsx(S,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(T,{children:[e.jsx(c,{name:"name",type:"text",placeholder:"Name"}),e.jsx(c,{name:"email",type:"email",placeholder:"Email"}),e.jsx(c,{name:"password",type:"text",placeholder:"Password"})]}),e.jsx($,{type:"submit",children:"Sign Up"}),e.jsxs(A,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(u,{to:"/signin",children:"Sign In"})]})]})}),n&&e.jsx(g,{})]})}const U=i.div`
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
`;function _(){return e.jsxs(U,{children:[e.jsx(z,{text:"Sign Up"}),e.jsx(I,{})]})}export{_ as SignUp};
