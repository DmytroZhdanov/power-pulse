import{n,e as k,f as h,u as F,v as S,r as c,s as C,h as I,j as e,F as z,i as P,I as p,L as B,k as $,d as E}from"./index-942e5375.js";import{T as q}from"./TitlePage-65bc4017.js";const D=n.p`
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
`,T=n.div`
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
`,L=n.div`
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
`,_=n.div`
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
`,A=n.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,M=n.div`
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
`,G=k({email:h().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:h().min(6).required("This is a required field")}),u=({...i})=>{const[s,t]=$(i),[r,o]=c.useState(!1),l=()=>o(!0),a=!!r&&s.value.trim().length>2||t.touched;return e.jsxs(L,{type:`${a?t.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...s,onFocus:l}),e.jsx(_,{children:a?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(p,{name:"checkmark"}),t.error?t.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function H(){const i=F(),[s,{isLoading:t,isError:r,error:o}]=S(),[l,a]=c.useState(),[m,g]=c.useState(!1);c.useEffect(()=>{i(C({isLoading:t,isError:r,error:o}))},[i,o,r,t]);const w=()=>{g(!0)},d=document.querySelector("#password"),f=()=>{d&&(d.getAttribute("type")==="password"?(d.setAttribute("type","text"),a(!0)):(d.setAttribute("type","password"),a(!1)))},v=()=>{window.location.assign("https://power-pulse-api.onrender.com/api/users/google")},b=I({initialValues:{email:"",password:""},onSubmit:async(j,{resetForm:y})=>{try{const x=await s(j).unwrap();i(E(x)),y()}catch(x){console.error(x)}},validationSchema:G});return e.jsx(e.Fragment,{children:e.jsx(z,{value:b,children:e.jsxs(P,{children:[e.jsx(D,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(T,{children:[e.jsx(u,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(u,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),m&&e.jsx("button",{type:"button",onClick:f,children:l?e.jsx(p,{name:"eye"}):e.jsx(p,{name:"eye-off"})})]})]}),e.jsxs(M,{children:[e.jsx("button",{type:"submit",children:"Sign In"}),e.jsx("button",{type:"button",onClick:v,id:"google",children:e.jsx(p,{name:"google"})})]}),e.jsxs(A,{children:[e.jsx("p",{children:"Don’t have an account? "}),e.jsx(B,{to:"/signup",children:"Sign Up"})]})]})})})}const R=n.div`
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
`;function W(){return e.jsxs(R,{children:[e.jsx(q,{text:"Sign In"}),e.jsx(H,{})]})}export{W as SignIn};
