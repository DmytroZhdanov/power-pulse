import{n as t,u as y,d as k,r as m,j as e,I as o,L as F,E as S,c as z}from"./index-0a601491.js";import{c as C,a as x,u as P,F as $,b as T,d as q}from"./index.esm-e803b0dc.js";import{T as E}from"./TitlePage-7eaad833.js";import"./tiny-warning.esm-c932d744.js";const I=t.p`
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
`,B=t.div`
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
`,A=t.div`
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
`,U=t.div`
  margin-top: 4px;

  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.12px;

  div {
    display: flex;
    gap: 4px;
  }

  svg {
    min-width: 16px;
    min-height: 16px;
    fill: currentColor;
  }
`,D=t.div`
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
`,L=C({name:x().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:x().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:x().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),h=({...i})=>{const[r,a]=q(i),[d,c]=m.useState(!1),p=()=>c(!0),n=!!d&&r.value.trim().length>0||a.touched;return e.jsxs(A,{type:`${n?a.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...r,onFocus:p}),e.jsx(U,{children:n?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(o,{name:"checkmark"}),a.error?a.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function H(){const i=y(),[r,{isLoading:a,isError:d,error:c}]=k(),[p,n]=m.useState(),[u,g]=m.useState(!1),w=()=>{g(!0)},s=document.querySelector("#password"),f=()=>{s&&(s.getAttribute("type")==="password"?(s.setAttribute("type","text"),n(!0)):(s.setAttribute("type","password"),n(!1)))},v=P({initialValues:{name:"",email:"",password:""},onSubmit:async(b,{resetForm:j})=>{try{const l=await r(b).unwrap();i(z(l)),j()}catch(l){console.error(l)}},validationSchema:L});return e.jsxs(e.Fragment,{children:[e.jsx($,{value:v,children:e.jsxs(T,{children:[e.jsx(I,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(B,{children:[e.jsx(h,{name:"name",type:"text",placeholder:"Name"}),e.jsx(h,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(h,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),u&&e.jsx("button",{type:"button",onClick:f,children:p?e.jsx(o,{name:"eye"}):e.jsx(o,{name:"eye-off"})})]})]}),e.jsxs(_,{children:[e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx("button",{type:"button",id:"google",children:e.jsx(o,{name:"google"})})]}),e.jsxs(D,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(F,{to:"/signin",children:"Sign In"})]})]})}),e.jsx(S,{isLoading:a,isError:d,error:c})]})}const M=t.div`
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
`;function G(){return e.jsxs(M,{children:[e.jsx(E,{text:"Sign Up"}),e.jsx(H,{})]})}export{G as SignUp};
