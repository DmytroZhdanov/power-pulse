import{n as t,u as C,a as z,r,j as e,I as l,L as E,b as P,B as w,T as $,E as B,s as q}from"./index-200501a0.js";import{c as I,a as m,u as A,F as U,b as D,d as L}from"./index.esm-8be518f3.js";import{T as M}from"./TitlePage-c91c92c4.js";import"./tiny-warning.esm-c932d744.js";const W=t.p`
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
`,_=t.div`
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
`,N=t.div`
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
`,R=t.div`
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
`,H=t.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,V=t.div`
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
`,Z=I({name:m().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:m().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:m().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),u=({...i})=>{const[o,a]=L(i),[s,p]=r.useState(!1),x=()=>p(!0),n=!!s&&o.value.trim().length>0||a.touched;return e.jsxs(N,{type:`${n?a.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...o,onFocus:x}),e.jsx(R,{children:n?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(l,{name:"checkmark"}),a.error?a.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function G(){const i=C(),[o,a]=z(),{isLoading:s,error:p}=a,[x,n]=r.useState(!1),[f,h]=r.useState(!1);r.useEffect(()=>{let c;return s?c=setTimeout(h,5e3,!0):h(!1),clearTimeout(c)},[s]);const[j,g]=r.useState(),[v,b]=r.useState(!1),y=()=>{b(!0)},d=document.querySelector("#password"),k=()=>{d&&(d.getAttribute("type")==="password"?(d.setAttribute("type","text"),g(!0)):(d.setAttribute("type","password"),g(!1)))},S=A({initialValues:{name:"",email:"",password:""},onSubmit:async(c,{resetForm:F})=>{try{const T=await o(c).unwrap();i(q(T)),F()}catch{n(!0),setTimeout(()=>n(!1),2e3)}},validationSchema:Z});return e.jsxs(e.Fragment,{children:[e.jsx(U,{value:S,children:e.jsxs(D,{children:[e.jsx(W,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(_,{children:[e.jsx(u,{name:"name",type:"text",placeholder:"Name"}),e.jsx(u,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(u,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:y}),v&&e.jsx("button",{type:"button",onClick:k,children:j?e.jsx(l,{name:"eye"}):e.jsx(l,{name:"eye-off"})})]})]}),e.jsxs(V,{children:[e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx("button",{type:"button",id:"google",children:e.jsx(l,{name:"google"})})]}),e.jsxs(H,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(E,{to:"/signin",children:"Sign In"})]})]})}),s&&e.jsx(P,{}),s&&f&&e.jsx(w,{onClose:()=>h(!1),children:e.jsx($,{})}),x&&e.jsx(w,{onClose:()=>n(!1),children:e.jsx(B,{message:p.data.message})})]})}const J=t.div`
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
`;function Y(){return e.jsxs(J,{children:[e.jsx(M,{text:"Sign Up"}),e.jsx(G,{})]})}export{Y as SignUp};
