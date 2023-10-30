import{n as t,u as y,e as k,r as x,j as e,I as o,L as F,E as S,c as I}from"./index-dc12d6c5.js";import{c as z,a as h,u as P,F as C,b as $,d as E}from"./index.esm-8244c629.js";import{T as B}from"./TitlePage-5e64e6ab.js";import"./tiny-warning.esm-c932d744.js";const q=t.p`
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
`,D=t.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  div {
    position: relative;
    width: 280px;

    @media screen and (min-width: 375px) {
      width: 335px;
    }

    @media screen and (min-width: 768px) {
      width: 364px;
    }
  }

  button {
    position: absolute;
    top: 14px;
    right: 12px;
    color: #efede8;
    background-color: transparent;
  }

  svg {
    width: 20px;
    height: 20px;

    fill: currentColor;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`,T=t.div`
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
`,A=t.div`
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
    min-width: 16px;
    min-height: 16px;
    fill: currentColor;
  }
`,L=t.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,_=t.div`
  display: inline-flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }

  button {
    height: 42px;
    color: #efede8;
    margin-top: 28px;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background-color: #e6533c;

    :hover,
    :active {
      background-color: #ef8964;
    }
  }

  #google {
    width: 32px;
    background-color: #efede8;
    :hover,
    :active {
      background-color: #ef8964;
    }
  }

  svg {
    min-width: 28px;
    height: 28px;
  }
`,H=z({email:h().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:h().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),u=({...i})=>{const[s,n]=E(i),[d,c]=x.useState(!1),p=()=>c(!0),a=!!d&&s.value.trim().length>2||n.touched;return e.jsxs(T,{type:`${a?n.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...s,onFocus:p}),e.jsx(A,{children:a?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(o,{name:"checkmark"}),n.error?n.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function M(){const i=y(),[s,{isLoading:n,isError:d,error:c}]=k(),[p,a]=x.useState(),[m,g]=x.useState(!1),w=()=>{g(!0)},r=document.querySelector("#password"),f=()=>{r&&(r.getAttribute("type")==="password"?(r.setAttribute("type","text"),a(!0)):(r.setAttribute("type","password"),a(!1)))},v=P({initialValues:{email:"",password:""},onSubmit:async(b,{resetForm:j})=>{try{const l=await s(b).unwrap();i(I(l)),j()}catch(l){console.error(l)}},validationSchema:H});return e.jsxs(e.Fragment,{children:[e.jsx(C,{value:v,children:e.jsxs($,{children:[e.jsx(q,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(D,{children:[e.jsx(u,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(u,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),m&&e.jsx("button",{type:"button",onClick:f,children:p?e.jsx(o,{name:"eye"}):e.jsx(o,{name:"eye-off"})})]})]}),e.jsxs(_,{children:[e.jsx("button",{type:"submit",children:"Sign In"}),e.jsx("button",{type:"button",id:"google",children:e.jsx(o,{name:"google"})})]}),e.jsxs(L,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(F,{to:"/signup",children:"Sign Up"})]})]})}),e.jsx(S,{isLoading:n,isError:d,error:c})]})}const R=t.div`
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
`;function G(){return e.jsxs(R,{children:[e.jsx(B,{text:"Sign In"}),e.jsx(M,{})]})}export{G as SignIn};
