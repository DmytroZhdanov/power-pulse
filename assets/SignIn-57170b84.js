import{n as t,u as k,m as F,r as x,j as e,I as o,L as S,E as C,c as I}from"./index-790124cc.js";import{u as z,F as P,a as $,b as B}from"./formik.esm-6940485f.js";import{c as E,a as m}from"./index.esm-d1615933.js";import{T as q}from"./TitlePage-d4c8ded2.js";import"./tiny-warning.esm-c932d744.js";const D=t.p`
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
`,T=t.div`
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
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,L=t.div`
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
`,_=t.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,H=t.div`
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
`,M=E({email:m().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:m().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),h=({...i})=>{const[s,n]=B(i),[d,c]=x.useState(!1),p=()=>c(!0),a=!!d&&s.value.trim().length>2||n.touched;return e.jsxs(A,{type:`${a?n.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...s,onFocus:p}),e.jsx(L,{children:a?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(o,{name:"checkmark"}),n.error?n.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function G(){const i=k(),[s,{isLoading:n,isError:d,error:c}]=F(),[p,a]=x.useState(),[u,g]=x.useState(!1),w=()=>{g(!0)},r=document.querySelector("#password"),f=()=>{r&&(r.getAttribute("type")==="password"?(r.setAttribute("type","text"),a(!0)):(r.setAttribute("type","password"),a(!1)))},v=()=>{window.location.assign("https://power-pulse-api.onrender.com/api/users/google")},b=z({initialValues:{email:"",password:""},onSubmit:async(j,{resetForm:y})=>{try{const l=await s(j).unwrap();i(I(l)),y()}catch(l){console.error(l)}},validationSchema:M});return e.jsxs(e.Fragment,{children:[e.jsx(P,{value:b,children:e.jsxs($,{children:[e.jsx(D,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(T,{children:[e.jsx(h,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(h,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),u&&e.jsx("button",{type:"button",onClick:f,children:p?e.jsx(o,{name:"eye"}):e.jsx(o,{name:"eye-off"})})]})]}),e.jsxs(H,{children:[e.jsx("button",{type:"submit",children:"Sign In"}),e.jsx("button",{type:"button",onClick:v,id:"google",children:e.jsx(o,{name:"google"})})]}),e.jsxs(_,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(S,{to:"/signup",children:"Sign Up"})]})]})}),e.jsx(C,{isLoading:n,isError:d,error:c})]})}const R=t.div`
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
`;function K(){return e.jsxs(R,{children:[e.jsx(q,{text:"Sign In"}),e.jsx(G,{})]})}export{K as SignIn};
