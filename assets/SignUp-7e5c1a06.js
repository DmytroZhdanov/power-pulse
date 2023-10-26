import{n as s,u as j,a as v,r as o,j as e,L as b,b as y,B as h,T as F,E as S,I as k,s as T}from"./index-fbd30101.js";import{c as z,a as p,u as E,F as $,b as C,d as q}from"./index.esm-6694093b.js";import{T as B}from"./TitlePage-3b8cb392.js";const I=s.p`
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
`,U=s.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`,D=s.button`
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
`,L=s.div`
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
`,M=s.div`
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
`,P=s.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,W=z({name:p().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:p().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:p().min(8).max(32).matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),x=({...i})=>{const[r,a]=q(i),[n,d]=o.useState(!1),c=()=>d(!0),t=!!n&&r.value.trim().length>2||a.touched;return e.jsxs(L,{type:`${t?a.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...r,onFocus:c}),e.jsx(M,{children:t?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(k,{name:"checkmark"}),a.error?a.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function _(){const i=j(),[r,a]=v(),{isLoading:n,error:d}=a;console.log(a);const[c,t]=o.useState(!1),[m,l]=o.useState(!1);o.useEffect(()=>(n?setTimeout(()=>{l(!0)},5e3):l(!1),()=>l(!1)),[n]);const u=E({initialValues:{name:"",email:"",password:""},onSubmit:async(g,{resetForm:f})=>{try{const w=await r(g).unwrap();i(T(w)),f()}catch{t(!0),setTimeout(()=>t(!1),2e3)}},validationSchema:W});return e.jsxs(e.Fragment,{children:[e.jsx($,{value:u,children:e.jsxs(C,{children:[e.jsx(I,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(U,{children:[e.jsx(x,{name:"name",type:"text",placeholder:"Name"}),e.jsx(x,{name:"email",type:"email",placeholder:"Email"}),e.jsx(x,{name:"password",type:"text",placeholder:"Password"})]}),e.jsx(D,{type:"submit",children:"Sign Up"}),e.jsxs(P,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(b,{to:"/signin",children:"Sign In"})]})]})}),n&&e.jsx(y,{}),n&&m&&e.jsx(h,{onClose:()=>m(!1),children:e.jsx(F,{})}),c&&e.jsx(h,{onClose:()=>t(!1),children:e.jsx(S,{message:d.data.message})})]})}const A=s.div`
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
`;function Z(){return e.jsxs(A,{children:[e.jsx(B,{text:"Sign Up"}),e.jsx(_,{})]})}export{Z as SignUp};
