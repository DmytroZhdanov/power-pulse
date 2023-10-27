import{n as a,u as j,a as v,r as o,j as e,L as b,b as y,B as h,T as F,E as S,I as T,s as k}from"./index-d4d582b8.js";import{c as z,a as x,u as E,F as $,b as C,d as q}from"./index.esm-1d032152.js";import{T as B}from"./TitlePage-d4e8d25e.js";import"./tiny-warning.esm-c932d744.js";const I=a.p`
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
`,U=a.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`,D=a.button`
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
`,L=a.div`
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
`,M=a.div`
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
`,P=a.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,W=z({name:x().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:x().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:x().min(8).max(32).matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),m=({...i})=>{const[r,t]=q(i),[s,c]=o.useState(!1),l=()=>c(!0),n=!!s&&r.value.trim().length>2||t.touched;return e.jsxs(L,{type:`${n?t.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...r,onFocus:l}),e.jsx(M,{children:n?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(T,{name:"checkmark"}),t.error?t.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function _(){const i=j(),[r,t]=v(),{isLoading:s,error:c}=t,[l,n]=o.useState(!1),[u,p]=o.useState(!1);o.useEffect(()=>{let d;return s?d=setTimeout(p,5e3,!0):p(!1),clearTimeout(d)},[s]);const g=E({initialValues:{name:"",email:"",password:""},onSubmit:async(d,{resetForm:f})=>{try{const w=await r(d).unwrap();i(k(w)),f()}catch{n(!0),setTimeout(()=>n(!1),2e3)}},validationSchema:W});return e.jsxs(e.Fragment,{children:[e.jsx($,{value:g,children:e.jsxs(C,{children:[e.jsx(I,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(U,{children:[e.jsx(m,{name:"name",type:"text",placeholder:"Name"}),e.jsx(m,{name:"email",type:"email",placeholder:"Email"}),e.jsx(m,{name:"password",type:"text",placeholder:"Password"})]}),e.jsx(D,{type:"submit",children:"Sign Up"}),e.jsxs(P,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(b,{to:"/signin",children:"Sign In"})]})]})}),s&&e.jsx(y,{}),s&&u&&e.jsx(h,{onClose:()=>p(!1),children:e.jsx(F,{})}),l&&e.jsx(h,{onClose:()=>n(!1),children:e.jsx(S,{message:c.data.message})})]})}const A=a.div`
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
`;function G(){return e.jsxs(A,{children:[e.jsx(B,{text:"Sign Up"}),e.jsx(_,{})]})}export{G as SignUp};
