import{n as s,u as T,f as C,r as a,j as e,I as l,L as z,b as I,B as m,T as P,E,s as $}from"./index-82dd9861.js";import{c as B,a as g,u as q,F as D,b as L,d as W}from"./index.esm-26433411.js";import{T as A}from"./TitlePage-b27b6d58.js";import"./tiny-warning.esm-c932d744.js";const M=s.p`
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
`,_=s.div`
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
`,U=s.div`
  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
  }

  color: ${t=>{switch(t.type){case"invalid":return"#D80027";case"valid":return"#3CBF61";default:return"rgba(239, 237, 232, 0.3)"}}};

  input {
    width: 100%;
    padding: 14px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: rgba(239, 237, 232, 0.6);
    background-color: transparent;
    border-radius: 12px;

    border: ${t=>{switch(t.type){case"invalid":return"1px solid #D80027";case"valid":return"1px solid #3CBF61";default:return"1px solid rgba(239, 237, 232, 0.3)"}}};

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
`,H=s.div`
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
`,R=s.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,V=s.div`
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
`,Z=B({email:g().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:g().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),w=({...t})=>{const[r,i]=W(t),[p,x]=a.useState(!1),n=()=>x(!0),o=!!p&&r.value.trim().length>2||i.touched;return e.jsxs(U,{type:`${o?i.error?"invalid":"valid":""}`,children:[e.jsx("input",{...t,...r,onFocus:n}),e.jsx(H,{children:o?e.jsxs("div",{id:`${t.id}-feedback`,"aria-live":"polite",children:[e.jsx(l,{name:"checkmark"}),i.error?i.error:e.jsxs(e.Fragment,{children:["Success ",t.name]})]}):null})]})};function G(){const t=T(),[r,{isLoading:i,error:p}]=C(),[x,n]=a.useState(!1),[o,h]=a.useState(!1);a.useEffect(()=>{let c;return i?c=setTimeout(h,5e3,!0):h(!1),clearTimeout(c)},[i]);const[f,u]=a.useState(),[j,b]=a.useState(!1),v=()=>{b(!0)},d=document.querySelector("#password"),y=()=>{d&&(d.getAttribute("type")==="password"?(d.setAttribute("type","text"),u(!0)):(d.setAttribute("type","password"),u(!1)))},S=q({initialValues:{email:"",password:""},onSubmit:async(c,{resetForm:k})=>{try{const F=await r(c).unwrap();t($(F)),k()}catch{n(!0),setTimeout(()=>n(!1),2e3)}},validationSchema:Z});return e.jsxs(e.Fragment,{children:[e.jsx(D,{value:S,children:e.jsxs(L,{children:[e.jsx(M,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(_,{children:[e.jsx(w,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(w,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:v}),j&&e.jsx("button",{type:"button",onClick:y,children:f?e.jsx(l,{name:"eye"}):e.jsx(l,{name:"eye-off"})})]})]}),e.jsxs(V,{children:[e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx("button",{type:"button",id:"google",children:e.jsx(l,{name:"google"})})]}),e.jsxs(R,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(z,{to:"/signup",children:"Sign Up"})]})]})}),i&&e.jsx(I,{}),i&&o&&e.jsx(m,{onClose:()=>h(!1),children:e.jsx(P,{})}),x&&e.jsx(m,{onClose:()=>n(!1),children:e.jsx(E,{message:p.data.message})})]})}const J=s.div`
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
`;function X(){return e.jsxs(J,{children:[e.jsx(A,{text:"Sign In"}),e.jsx(G,{})]})}export{X as SignIn};
