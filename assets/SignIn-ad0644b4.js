import{n as s,u as T,e as C,r as a,j as e,I as m,L as I,b as z,B as h,T as P,E,s as $}from"./index-bfb0d5fc.js";import{c as B,a as g,u as q,F as D,b as L,d as W}from"./index.esm-83225a33.js";import{T as A}from"./TitlePage-45ee6cfd.js";import"./tiny-warning.esm-c932d744.js";const M=s.p`
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

    @media screen and (max-width: 375px) {
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
`,H=s.button`
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
`,R=s.div`
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
`,U=s.div`
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
`,V=s.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,Z=B({email:g().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:g().matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$","Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character").required("This is a required field")}),w=({...t})=>{const[r,i]=W(t),[l,p]=a.useState(!1),n=()=>p(!0),o=!!l&&r.value.trim().length>2||i.touched;return e.jsxs(R,{type:`${o?i.error?"invalid":"valid":""}`,children:[e.jsx("input",{...t,...r,onFocus:n}),e.jsx(U,{children:o?e.jsxs("div",{id:`${t.id}-feedback`,"aria-live":"polite",children:[e.jsx(m,{name:"checkmark"}),i.error?i.error:e.jsxs(e.Fragment,{children:["Success ",t.name]})]}):null})]})};function G(){const t=T(),[r,{isLoading:i,error:l}]=C(),[p,n]=a.useState(!1),[o,x]=a.useState(!1);a.useEffect(()=>{let c;return i?c=setTimeout(x,5e3,!0):x(!1),clearTimeout(c)},[i]);const[f,u]=a.useState(),[j,b]=a.useState(!1),v=()=>{b(!0)},d=document.querySelector("#password"),y=()=>{d&&(d.getAttribute("type")==="password"?(d.setAttribute("type","text"),u(!0)):(d.setAttribute("type","password"),u(!1)))},S=q({initialValues:{email:"",password:""},onSubmit:async(c,{resetForm:F})=>{try{const k=await r(c).unwrap();t($(k)),F()}catch{n(!0),setTimeout(()=>n(!1),2e3)}},validationSchema:Z});return e.jsxs(e.Fragment,{children:[e.jsx(D,{value:S,children:e.jsxs(L,{children:[e.jsx(M,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(_,{children:[e.jsx(w,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(w,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:v}),j&&e.jsx("button",{type:"button",onClick:y,children:f?e.jsx(m,{name:"eye"}):e.jsx(m,{name:"eye-off"})})]})]}),e.jsx(H,{type:"submit",children:"Sign In"}),e.jsxs(V,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(I,{to:"/signup",children:"Sign Up"})]})]})}),i&&e.jsx(z,{}),i&&o&&e.jsx(h,{onClose:()=>x(!1),children:e.jsx(P,{})}),p&&e.jsx(h,{onClose:()=>n(!1),children:e.jsx(E,{message:l.data.message})})]})}const J=s.div`
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
