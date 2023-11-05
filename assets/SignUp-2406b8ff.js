import{n,e as k,f as h,u as F,g as S,r as p,s as C,h as z,j as e,F as P,i as T,I as c,L as q,k as B,d as I}from"./index-942e5375.js";import{T as $}from"./TitlePage-65bc4017.js";const E=n.p`
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
`,U=n.div`
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
`,A=n.div`
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
`,D=n.div`
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
`,_=n.div`
  margin-top: 12px;
  display: flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`,L=n.div`
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
`,M=k({name:h().trim("Name must not have leading or trailing spaces").strict().min(1).required("This is a required field"),email:h().email("Invalid email").matches("^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$","Enter valid values").required("This is a required field"),password:h().min(6).required("This is a required field")}),m=({...i})=>{const[s,t]=B(i),[r,o]=p.useState(!1),l=()=>o(!0),a=!!r&&s.value.trim().length>0||t.touched;return e.jsxs(A,{type:`${a?t.error?"invalid":"valid":""}`,children:[e.jsx("input",{...i,...s,onFocus:l}),e.jsx(D,{children:a?e.jsxs("div",{id:`${i.id}-feedback`,"aria-live":"polite",children:[e.jsx(c,{name:"checkmark"}),t.error?t.error:e.jsxs(e.Fragment,{children:["Success ",i.name]})]}):null})]})};function N(){const i=F(),[s,{isLoading:t,isError:r,error:o}]=S(),[l,a]=p.useState(),[u,g]=p.useState(!1);p.useEffect(()=>{i(C({isLoading:t,isError:r,error:o}))},[i,o,r,t]);const w=()=>{g(!0)},d=document.querySelector("#password"),f=()=>{d&&(d.getAttribute("type")==="password"?(d.setAttribute("type","text"),a(!0)):(d.setAttribute("type","password"),a(!1)))},v=()=>{window.location.assign("https://power-pulse-api.onrender.com/api/users/google")},b=z({initialValues:{name:"",email:"",password:""},onSubmit:async(j,{resetForm:y})=>{try{const x=await s(j).unwrap();i(I(x)),y()}catch(x){console.error(x)}},validationSchema:M});return e.jsx(e.Fragment,{children:e.jsx(P,{value:b,children:e.jsxs(T,{children:[e.jsx(E,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(U,{children:[e.jsx(m,{name:"name",type:"text",placeholder:"Name"}),e.jsx(m,{name:"email",type:"email",placeholder:"Email"}),e.jsxs("div",{children:[e.jsx(m,{name:"password",type:"password",placeholder:"Password",id:"password",onInput:w}),u&&e.jsx("button",{type:"button",onClick:f,children:l?e.jsx(c,{name:"eye"}):e.jsx(c,{name:"eye-off"})})]})]}),e.jsxs(L,{children:[e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx("button",{type:"button",onClick:v,id:"google",children:e.jsx(c,{name:"google"})})]}),e.jsxs(_,{children:[e.jsx("p",{children:"Already have account?"}),e.jsx(q,{to:"/signin",children:"Sign In"})]})]})})})}const R=n.div`
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
`;function V(){return e.jsxs(R,{children:[e.jsx($,{text:"Sign Up"}),e.jsx(N,{})]})}export{V as SignUp};
