import{n as t,d as k,e as x,u as F,f as S,r as m,g as C,j as e,F as z,h as P,I as o,L as T,E as q,i as B,c as E}from"./index-e7c81fe3.js";import{T as I}from"./TitlePage-deec8f84.js";const $=t.p`
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
`,U=t.div`
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
  flex-direction: row;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
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
`,H=k({name:x().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:x().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:x().min(6).required("This is a required field")}),h=({...i})=>{const[s,n]=B(i),[d,p]=m.useState(!1),c=()=>p(!0),a=!!d&&s.value.trim().length>0||n.touched;return e.jsxs(A,{type:`${a?n.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...s,onFocus:c}),e.jsx(D,{children:a?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(o,{name:"checkmark"}),n.error?n.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function M(){const i=F(),[s,{isLoading:n,isError:d,error:p}]=S(),[c,a]=m.useState(),[u,g]=m.useState(!1),w=()=>{g(!0)},r=document.querySelector("#password"),f=()=>{r&&(r.getAttribute("type")==="password"?(r.setAttribute("type","text"),a(!0)):(r.setAttribute("type","password"),a(!1)))},v=()=>{window.location.assign("https://power-pulse-api.onrender.com/api/users/google")},j=C({initialValues:{name:"",email:"",password:""},onSubmit:async(b,{resetForm:y})=>{try{const l=await s(b).unwrap();i(E(l)),y()}catch(l){console.error(l)}},validationSchema:H});return e.jsxs(e.Fragment,{children:[e.jsx(z,{value:j,children:e.jsxs(P,{children:[e.jsx($,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(U,{children:[e.jsx(h,{name:"name",type:"text",placeholder:"Name"}),e.jsx(h,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(h,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),u&&e.jsx("button",{type:"button",onClick:f,children:c?e.jsx(o,{name:"eye"}):e.jsx(o,{name:"eye-off"})})]})]}),e.jsxs(L,{children:[e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx("button",{type:"button",onClick:v,id:"google",children:e.jsx(o,{name:"google"})})]}),e.jsxs(_,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(T,{to:"/signin",children:"Sign In"})]})]})}),e.jsx(q,{isLoading:n,isError:d,error:p})]})}const N=t.div`
  padding-top: 127px;
  height: 812px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
    height: 1024px;
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 2;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
    padding-top: 200px;
    height: 800px;
  }
`;function V(){return e.jsxs(N,{children:[e.jsx(I,{text:"Sign Up"}),e.jsx(M,{})]})}export{V as SignUp};
