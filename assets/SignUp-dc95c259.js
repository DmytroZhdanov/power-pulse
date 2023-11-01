import{n as t,u as k,d as F,r as h,j as e,I as o,L as S,E as C,c as z}from"./index-b281344d.js";import{u as P,F as $,a as T,b as q}from"./formik.esm-3d3051ec.js";import{c as B,a as x}from"./index.esm-e8c79e32.js";import{T as E}from"./TitlePage-bab8e410.js";import"./tiny-warning.esm-c932d744.js";const I=t.p`
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
`,A=t.div`
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
`,U=t.div`
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
`,D=t.div`
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
`,_=t.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,L=t.div`
  display: inline-flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    flex-direction: row;
    gap: 24px;
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

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }

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
`,H=B({name:x().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:x().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:x().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),m=({...i})=>{const[r,n]=q(i),[d,c]=h.useState(!1),p=()=>c(!0),a=!!d&&r.value.trim().length>0||n.touched;return e.jsxs(U,{type:`${a?n.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...r,onFocus:p}),e.jsx(D,{children:a?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(o,{name:"checkmark"}),n.error?n.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function M(){const i=k(),[r,{isLoading:n,isError:d,error:c}]=F(),[p,a]=h.useState(),[u,g]=h.useState(!1),w=()=>{g(!0)},s=document.querySelector("#password"),f=()=>{s&&(s.getAttribute("type")==="password"?(s.setAttribute("type","text"),a(!0)):(s.setAttribute("type","password"),a(!1)))},v=()=>{window.location.assign("https://power-pulse-api.onrender.com/api/users/google")},b=P({initialValues:{name:"",email:"",password:""},onSubmit:async(j,{resetForm:y})=>{try{const l=await r(j).unwrap();i(z(l)),y()}catch(l){console.error(l)}},validationSchema:H});return e.jsxs(e.Fragment,{children:[e.jsx($,{value:b,children:e.jsxs(T,{children:[e.jsx(I,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(A,{children:[e.jsx(m,{name:"name",type:"text",placeholder:"Name"}),e.jsx(m,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(m,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),u&&e.jsx("button",{type:"button",onClick:f,children:p?e.jsx(o,{name:"eye"}):e.jsx(o,{name:"eye-off"})})]})]}),e.jsxs(L,{children:[e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx("button",{type:"button",onClick:v,id:"google",children:e.jsx(o,{name:"google"})})]}),e.jsxs(_,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(S,{to:"/signin",children:"Sign In"})]})]})}),e.jsx(C,{isLoading:n,isError:d,error:c})]})}const N=t.div`
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
`;function K(){return e.jsxs(N,{children:[e.jsx(E,{text:"Sign Up"}),e.jsx(M,{})]})}export{K as SignUp};
