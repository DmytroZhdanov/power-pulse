import{n,u as w,c as j,r as o,j as e,L as v,b,B as x,T as F,E as S,I as y,s as k}from"./index-382f5aab.js";import{c as T,a as m,u as z,F as E,b as $,d as C}from"./index.esm-e4cf659e.js";import{T as I}from"./TitlePage-20607d39.js";const B=n.p`
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
`,D=n.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`,L=n.button`
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
`,P=n.div`
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
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,W=n.div`
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
`,q=n.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,M=T({email:m().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:m().min(8).max(32).matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),h=({...i})=>{const[t,a]=C(i),[c,l]=o.useState(!1),s=()=>l(!0),r=!!c&&t.value.trim().length>2||a.touched;return e.jsxs(P,{type:`${r?a.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...t,onFocus:s}),e.jsx(W,{children:r?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(y,{name:"checkmark"}),a.error?a.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function _(){const i=w(),[t,{isLoading:a,error:c}]=j(),[l,s]=o.useState(!1),[r,p]=o.useState(!1);o.useEffect(()=>{let d;return a?d=setTimeout(p,5e3,!0):p(!1),clearTimeout(d)},[a]);const u=z({initialValues:{email:"",password:""},onSubmit:async(d,{resetForm:g})=>{try{const f=await t(d).unwrap();i(k(f)),g()}catch{s(!0),setTimeout(()=>s(!1),2e3)}},validationSchema:M});return e.jsxs(e.Fragment,{children:[e.jsx(E,{value:u,children:e.jsxs($,{children:[e.jsx(B,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(D,{children:[e.jsx(h,{name:"email",type:"email",placeholder:"Email"}),e.jsx(h,{name:"password",type:"text",placeholder:"Password"})]}),e.jsx(L,{type:"submit",children:"Sign Up"}),e.jsxs(q,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(v,{to:"/signup",children:"Sign Up"})]})]})}),a&&e.jsx(b,{}),a&&r&&e.jsx(x,{onClose:()=>p(!1),children:e.jsx(F,{})}),l&&e.jsx(x,{onClose:()=>s(!1),children:e.jsx(S,{message:c.data.message})})]})}const U=n.div`
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
`;function Z(){return e.jsxs(U,{children:[e.jsx(I,{text:"Sign In"}),e.jsx(_,{})]})}export{Z as SignIn};
