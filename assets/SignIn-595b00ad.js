import{n as i,u as m,c as h,j as e,L as u,b as g,r as f,s as w}from"./index-6d601247.js";import{c as v,a as l,u as j,F as b,b as F,d as y,I as k}from"./index.esm-d5a5fd99.js";import{T as S}from"./TitlePage-6255ef30.js";const z=i.p`
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
`,I=i.div`
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
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,T=i.div`
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
`,D=i.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,E=v({email:l().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:l().min(6).matches("^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$","Enter valid values").required("This is a required field")}),p=({label:a,helpText:o,...n})=>{const[s,t]=y(n),[r,d]=f.useState(!1),x=()=>d(!0),c=!!r&&s.value.trim().length>2||t.touched;return e.jsxs(C,{type:`${c?t.error?"invalid":"valid":""}`,children:[e.jsx("input",{...n,...s,onFocus:x}),e.jsx(T,{children:c?e.jsxs("div",{id:`${n.id}-feedback`,"aria-live":"polite",children:[e.jsx(k,{name:"checkmark"}),t.error?t.error:e.jsxs(e.Fragment,{children:["Success ",n.name]})]}):null})]})};function L(){const a=m(),[o,{isLoading:n}]=h(),s=j({initialValues:{email:"",password:""},onSubmit:async(t,{resetForm:r})=>{const d=await o(t).unwrap();a(w(d)),r()},validationSchema:E});return e.jsxs(e.Fragment,{children:[e.jsx(b,{value:s,children:e.jsxs(F,{autoComplete:"off",children:[e.jsx(z,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(I,{children:[e.jsx(p,{name:"email",type:"email",placeholder:"Email"}),e.jsx(p,{name:"password",type:"text",placeholder:"Password"})]}),e.jsx($,{type:"submit",children:"Sign Up"}),e.jsxs(D,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(u,{to:"/signup",children:"Sign Up"})]})]})}),n&&e.jsx(g,{})]})}const q=i.div`
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
`;function B(){return e.jsxs(q,{children:[e.jsx(S,{text:"Sign In"}),e.jsx(L,{})]})}export{B as SignIn};
