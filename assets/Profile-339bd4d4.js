import{f as d,g as A,a as D,h as I,i as P,u as T,r as m,j as e,I as x,k as $,n as i,P as C,l as L}from"./index-db94a246.js";import{T as Y}from"./TitlePage-a24630e2.js";import{c as E,a as b,e as _,f as M,u as R}from"./index.esm-480c6cff.js";import{f as B,C as V}from"./Calendar-2e5c5967.js";import"./tiny-warning.esm-c932d744.js";const H=d.div`
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
`,O=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 166px;
  }
`,Q=d.div`
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
`,G=d.label`
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
`,y=d.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,w=d.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,F=d.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,N=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${y} {
    text-align: center;
  }

  ${w} {
    color: #efede880;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,J=d.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,S=d.div`
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
`,K=d(S)`
  width: 165px;
  @media screen and (min-width: 768px) {
    width: 209px;
  }
`,X=d.div`
  width: 100%;
  ${w} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media screen and (min-width: 768px) {
    ${w} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,Z=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function ee(){const[n]=A(),[a,{data:l,isLoading:c,isError:v}]=D(),s=I(P),g=T();console.log(s);const[p,u]=m.useState(s||{});console.log(p);const f=async r=>{r.preventDefault();const t={avatar:URL.createObjectURL(r.target.files[0])};u(t)};return m.useEffect(()=>{(async()=>{try{if(await a(),!p)return;const t=await n(p).unwrap();console.log(t),g(u(t)),await a()}catch(t){console.log(t)}finally{await a()}})()},[a,n]),e.jsx(e.Fragment,{children:l&&e.jsxs(H,{children:[e.jsxs(O,{children:[e.jsxs(Q,{children:[s?e.jsx("img",{src:l.user.avatarUrls,alt:"Your avatar"}):e.jsx(x,{name:"user"}),e.jsxs(G,{htmlFor:"avatarUrls",children:[e.jsx("input",{type:"file",name:"avatar",id:"avatarUrls",accept:"image/*",onChange:f}),e.jsx(x,{name:"add_avatar"})]})]}),e.jsxs(N,{children:[e.jsx(y,{children:l.user.name}),e.jsx(w,{children:"User"})]})]}),e.jsxs(J,{children:[e.jsxs(S,{children:[e.jsxs(F,{children:[e.jsx(x,{name:"food"}),"Daily calorie intake"]}),e.jsx(y,{children:"0"})]}),e.jsxs(K,{children:[e.jsxs(F,{children:[e.jsx(x,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsx(y,{children:"0 min"})]})]}),e.jsx(X,{children:e.jsxs(w,{children:[e.jsx(x,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(Z,{children:e.jsx($,{})})]})})}const te=i.form`
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
`,ie=i.div`
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
`,re=i.div`
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
`,ne=i.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`,U=i.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`,ae=i(U)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,de=i.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,oe=i.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`,q=i.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,le=i(q)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,se=i.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,pe=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,ce=i.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,o=i.input`
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
`,he=i.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,xe=i.div`
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
`,me=new Date(2006,1,1),ge=me.getFullYear(),ue=E({name:b().min(4).required("The field is required"),email:b().email("Please, enter a valid email (exemple@gmail.com) ").required("The field is required"),height:_().required("Please, enter your height").min(150).max(230),curWeight:_().required("Please, enter your weight").min(35),desWeight:_().required("The field is required").min(35),birthday:M().nullable().max(`${ge}`,"your age must to be 18+").required("the field is required"),blood:b().required("required"),gender:b().required(),lifestyle:b().required()}),fe=i.div`
  position: relative;
  width: 161px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:n})=>n.color.border};

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
`,be=i.input`
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
`,ye=i.p`
  color: ${({setColor:n})=>n==="full"?({theme:a})=>a.color.white:({theme:a})=>a.color.border};
  font-size: 16px;
  line-height: 1.5;
`,we=i.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:n})=>n.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;function W({selectedDate:n,setSelectedDate:a}){const[l,c]=m.useState(!0),v="Birthday",s=j=>{c(!1),a(j)},[g]=L();m.useEffect(()=>{(async()=>{var z,k;const{user:h}=await g().unwrap();(z=h==null?void 0:h.userParams)!=null&&z.birthday?(c(!1),a(new Date((k=h==null?void 0:h.userParams)==null?void 0:k.birthday))):c(!0)})()},[g,a]);const p=new Date,u=new Date(p.setFullYear(p.getFullYear()-18)),f=new Date(p.setFullYear(p.getFullYear()-100)),r=l?v:B(n,"yyyy-MM-dd"),t=l?v:B(n,"dd.MM.yyyy");return e.jsxs(e.Fragment,{children:[e.jsx(be,{disabled:!0,type:"date",name:"birthday",defaultValue:r}),e.jsx(V,{maxDate:u,minDate:f,onChange:s,value:n,children:e.jsxs(fe,{children:[e.jsx(ye,{setColor:l?"":"full",children:t}),e.jsx(we,{children:e.jsx(x,{name:"calendar"})})]})})]})}W.propTypes={selectedDate:C.instanceOf(Date).isRequired,setSelectedDate:C.func.isRequired};const ve=(n,a)=>{console.log(n),console.log(a)};function je(){const[n,a]=m.useState(new Date),[l,{data:c,isError:v}]=D();m.useEffect(()=>{(async()=>{try{await l()}catch(h){console.log(h)}finally{}})()},[l]);const{values:s,errors:g,touched:p,isSubmitting:u,handleSubmit:f,handleBlur:r,handleChange:t}=R({initialValues:{height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},validationSchema:ue,onSubmit:ve});return e.jsx(e.Fragment,{children:c&&e.jsxs(te,{autoComplete:"off",onSubmit:f,children:[e.jsxs(ie,{children:[e.jsxs("label",{children:["Basic info",e.jsx("input",{type:"text",name:"name",placeholder:"name",value:c.user.name,onChange:t,onBlur:r})]}),e.jsx("input",{type:"email",name:"email",placeholder:"email",value:c.user.email,onChange:t,onBlur:r})]}),e.jsxs(re,{children:[e.jsxs(ne,{children:[e.jsxs(U,{htmlFor:"height",children:["Height",e.jsx("input",{type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:s.height,onChange:t,onBlur:r})]}),e.jsxs(ae,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{type:"number",name:"curWeight",placeholder:"0",min:"35",value:s.curWeight,onChange:t,onBlur:r})]})]}),e.jsxs(oe,{children:[e.jsxs(q,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{type:"number",name:"desWeight",placeholder:"0",min:"35",value:s.desWeight,onChange:t,onBlur:r})]}),e.jsx(le,{children:e.jsx(W,{selectedDate:n,setSelectedDate:a})})]})]}),e.jsxs(se,{children:[e.jsx(de,{children:" Blood "}),e.jsxs(he,{children:[e.jsxs(pe,{children:[e.jsx(o,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"one",children:"1"}),e.jsx(o,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(o,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(o,{type:"radio",name:"blood",onChange:t,onBlur:r}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(ce,{children:[e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:t}),"Male"]}),e.jsxs("label",{htmlFor:"gender",children:[e.jsx(o,{type:"radio",name:"gender",onChange:t}),"Female"]})]})]}),e.jsxs(xe,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:t,onBlur:r})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:t,onBlur:r})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:t,onBlur:r})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:t,onBlur:r})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(o,{type:"radio",name:"levelActivity",onChange:t,onBlur:r})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]})]}),e.jsx("button",{type:"submit",children:"Save"})]})})}const _e=i.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,ze=i.div`
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
`;function Se(){return e.jsxs(_e,{children:[e.jsx(Y,{text:"Profile Settings"}),e.jsxs(ze,{children:[e.jsx(ee,{}),e.jsx(je,{})]})]})}export{Se as Profile};
