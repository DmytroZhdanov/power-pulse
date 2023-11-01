import{o as s,p as I,a as q,q as P,t as T,u as $,r as m,j as e,I as x,v as L,n as t,P as k,w as E}from"./index-a7ddf542.js";import{T as M}from"./TitlePage-63e521f7.js";import{u as R}from"./formik.esm-1740f73c.js";import{c as V,a as w,b as C,d as Y}from"./index.esm-ccf5d8a5.js";import{f as z,C as H}from"./Calendar-1d0e681b.js";import"./tiny-warning.esm-c932d744.js";const O=s.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: black;

  @media screen and (min-width: 768px) {
    width: 439px;
    gap: 32px;
  }
`,Q=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 166px;
  }
`,G=s.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 61px;
    height: 62px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    fill: inherit;
    border-radius: 50%;
    font-size: 14px;
    color: rgba(239, 237, 232, 30%);
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;

    svg {
      width: 102px;
      height: 102px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`,N=s.label`
  position: absolute;
  left: 50%;
  bottom: -11px;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border-style: none;
  border-radius: 50%;
  background-color: transparent;

  input {
    display: none;
    visibility: hidden;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    bottom: -14px;
  }
`,y=s.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,b=s.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,D=s.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,_=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${y} {
    text-align: center;
  }

  ${b} {
    color: #efede880;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,J=s.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,S=s.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 157px;
  padding: 14px 13px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 214px;
    padding: 14px 18px;

    ${y} {
      line-height: calc(32 / 24);
    }
  }
`,K=s(S)`
  width: 165px;
  @media screen and (min-width: 768px) {
    width: 209px;
  }
`,X=s.div`
  width: 100%;
  ${b} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media screen and (min-width: 768px) {
    ${b} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,Z=s.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function ee(){const[a]=I(),[r,{data:d,isLoading:c,isError:j}]=q(),l=P(T),g=$();console.log(l);const[p,u]=m.useState(l||{});console.log(p);const f=async n=>{n.preventDefault();const i={avatar:URL.createObjectURL(n.target.files[0])};u(i)};return m.useEffect(()=>{(async()=>{try{if(await r(),!p)return;const i=await a(p).unwrap();console.log(i),g(u(i)),await r()}catch(i){console.log(i)}finally{await r()}})()},[r,a]),e.jsx(e.Fragment,{children:d&&e.jsxs(O,{children:[e.jsxs(Q,{children:[e.jsxs(G,{children:[l?e.jsx("img",{src:d.user.avatarUrls,alt:"Your avatar"}):e.jsx(x,{name:"user"}),e.jsxs(N,{htmlFor:"avatarUrls",children:[e.jsx("input",{type:"file",name:"avatar",id:"avatarUrls",accept:"image/*",onChange:f}),e.jsx(x,{name:"add_avatar"})]})]}),e.jsxs(_,{children:[e.jsx(y,{children:d.user.name}),e.jsx(b,{children:"User"})]})]}),e.jsxs(J,{children:[e.jsxs(S,{children:[e.jsxs(D,{children:[e.jsx(x,{name:"food"}),"Daily calorie intake"]}),e.jsx(y,{children:"0"})]}),e.jsxs(K,{children:[e.jsxs(D,{children:[e.jsx(x,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsx(y,{children:"0 min"})]})]}),e.jsx(X,{children:e.jsxs(b,{children:[e.jsx(x,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(Z,{children:e.jsx(L,{})})]})})}const ie=t.form`
  width: 335px;
  background-color: #0a0909;
  /* 
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 10px;
    line-height: calc(12 / 10);
    color: #e6533c;
  } */

  button {
    width: 115px;
    padding: 12px 40px;
    font-size: 16px;
    line-height: calc(18 / 16);
    color: #efede899;
    border-radius: 12px;
    background-color: #e6533c;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 696px;

    button {
      width: 144px;
      padding: 16px 50px;
      font-size: 20px;
      line-height: calc(24 / 20);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 760px;
    padding-right: 64px;
    border-right: 1px solid #efede833;
  }
`,te=t.div`
  width: 100%;
  margin-bottom: 14px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
    input {
      margin: 4px 0 14px 0;
    }
  }

  input {
    padding: 14px;

    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
    width: 335px;
  }

  @media (min-width: 768px) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;
    label {
      width: 341px;
      display: block;
      font-size: 14px;
      line-height: calc(18 / 14);

      input {
        margin-top: 8px;
        margin-bottom: 0;
      }
    }

    input {
      font-size: 16px;
      line-height: calc(24 / 16);
      width: 341px;
      height: 52px;
    }
  }
`,ne=t.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
  }
  input {
    padding: 14px;
    margin-top: 4px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
    width: 160px;
  }

  @media (min-width: 768px) {
    width: 696px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    label {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input {
      margin-top: 8px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,ae=t.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`,U=t.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`,re=t(U)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,se=t.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,oe=t.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`,W=t.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,de=t(W)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,le=t.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,pe=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,ce=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,o=t.input`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: 2px solid #636366;
    background-color: black;
  }

  &:checked&::before {
    /* outline: thick double #0e0e0d; */
    background-color: #ef8964;
  }
`,he=t.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,xe=t.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 32px 0 38px 0;
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,me=new Date(2006,1,1),ge=me.getFullYear(),ue=V({name:w().min(4).required("The field is required"),email:w().email("Please, enter a valid email (exemple@gmail.com) ").required("The field is required"),height:C().required("Please, enter your height").min(150).max(230),curWeight:C().required("Please, enter your weight").min(35),desWeight:C().required("The field is required").min(35),birthday:Y().nullable().max(`${ge}`,"your age must to be 18+").required("the field is required"),blood:w().required("required"),gender:w().required(),lifestyle:w().required()}),fe=t.div`
  position: relative;
  width: 161px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:a})=>a.color.border};

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
`,we=t.input`
  position: absolute;
  opacity: 0;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  clip-path: inset(100%);
  white-space: nowrap;
  clip: rect(0 0 0 0);
`,ye=t.p`
  color: ${({setColor:a})=>a==="full"?({theme:r})=>r.color.white:({theme:r})=>r.color.border};
  font-size: 16px;
  line-height: 1.5;
`,be=t.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:a})=>a.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;function A({selectedDate:a,setSelectedDate:r}){const[d,c]=m.useState(!0),j="Birthday",l=v=>{c(!1),r(v)},[g]=E();m.useEffect(()=>{(async()=>{var B,F;const{user:h}=await g().unwrap();(B=h==null?void 0:h.userParams)!=null&&B.birthday?(c(!1),r(new Date((F=h==null?void 0:h.userParams)==null?void 0:F.birthday))):c(!0)})()},[g,r]);const p=new Date,u=new Date(p.setFullYear(p.getFullYear()-18)),f=new Date(p.setFullYear(p.getFullYear()-100)),n=d?j:z(a,"yyyy-MM-dd"),i=d?j:z(a,"dd.MM.yyyy");return e.jsxs(e.Fragment,{children:[e.jsx(we,{disabled:!0,type:"date",name:"birthday",defaultValue:n}),e.jsx(H,{maxDate:u,minDate:f,onChange:l,value:a,children:e.jsxs(fe,{children:[e.jsx(ye,{setColor:d?"":"full",children:i}),e.jsx(be,{children:e.jsx(x,{name:"calendar"})})]})})]})}A.propTypes={selectedDate:k.instanceOf(Date).isRequired,setSelectedDate:k.func.isRequired};const je=(a,r)=>{console.log(a),console.log(r)};function ve(){const[a,r]=m.useState(new Date),[d,{data:c,isError:j}]=q();m.useEffect(()=>{(async()=>{try{await d()}catch(h){console.log(h)}finally{}})()},[d]);const{values:l,errors:g,touched:p,isSubmitting:u,handleSubmit:f,handleBlur:n,handleChange:i}=R({initialValues:{height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},validationSchema:ue,onSubmit:je});return e.jsx(e.Fragment,{children:c&&e.jsxs(ie,{autoComplete:"off",onSubmit:f,children:[e.jsxs(te,{children:[e.jsxs("label",{children:["Basic info",e.jsx("input",{type:"text",name:"name",placeholder:"name",value:c.user.name,onChange:i,onBlur:n})]}),e.jsx("input",{type:"email",name:"email",placeholder:"email",value:c.user.email,onChange:i,onBlur:n})]}),e.jsxs(ne,{children:[e.jsxs(ae,{children:[e.jsxs(U,{htmlFor:"height",children:["Height",e.jsx("input",{type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:l.height,onChange:i,onBlur:n})]}),e.jsxs(re,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{type:"number",name:"curWeight",placeholder:"0",min:"35",value:l.curWeight,onChange:i,onBlur:n})]})]}),e.jsxs(oe,{children:[e.jsxs(W,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{type:"number",name:"desWeight",placeholder:"0",min:"35",value:l.desWeight,onChange:i,onBlur:n})]}),e.jsx(de,{children:e.jsx(A,{selectedDate:a,setSelectedDate:r})})]})]}),e.jsxs(le,{children:[e.jsx(se,{children:" Blood "}),e.jsxs(he,{children:[e.jsxs(pe,{children:[e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:n}),e.jsx("label",{htmlFor:"one",children:"1"}),e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:n}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:n}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(o,{type:"radio",name:"blood",onChange:i,onBlur:n}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(ce,{children:[e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:i}),"Male"]}),e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:i}),"Female"]})]})]}),e.jsxs(xe,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:i,onBlur:n})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:i,onBlur:n})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:i,onBlur:n})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:i,onBlur:n})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:i,onBlur:n})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})})}const Ce=t.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,Be=t.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 38px;
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 25px;
    margin-top: 32px;
  }
`;function Ue(){return e.jsxs(Ce,{children:[e.jsx(M,{text:"Profile Settings"}),e.jsxs(Be,{children:[e.jsx(ee,{}),e.jsx(ve,{})]})]})}export{Ue as Profile};
