import{o as d,p as ie,q as te,u as V,t as M,v as Y,w as re,j as e,I as U,x as ae,E as z,y as ne,n as t,P as N,r as A,z as _,g as se,A as de,C as oe,F as le,B as ce,l as pe}from"./index-02133d14.js";import{T as he}from"./TitlePage-665e5b9c.js";import{u as xe}from"./formik.esm-71f8af1b.js";import{c as me,b as D,a as ge}from"./index.esm-7e2c53b8.js";import{f as $,C as ue}from"./Calendar-4fadd5f8.js";import"./tiny-warning.esm-c932d744.js";const fe=d.div`
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
`,ye=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 166px;
  }
`,ve=d.div`
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
`,we=d.label`
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
`,P=d.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,S=d.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,R=d.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,be=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${P} {
    text-align: center;
  }

  ${S} {
    color: #efede880;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,je=d.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,H=d.div`
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

    ${P} {
      line-height: calc(32 / 24);
    }
  }
`,Ue=d(H)`
  width: 165px;
  @media screen and (min-width: 768px) {
    width: 209px;
  }
`,Ae=d.div`
  width: 100%;
  ${S} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media screen and (min-width: 768px) {
    ${S} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,Ce=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function ke(){const[s,{isLoading:o,isError:v,error:h}]=ie(),{data:C,isLoading:k,isError:w,error:x}=te(),B=V(),E=M(Y),p=M(re),b=async l=>{l.preventDefault();try{const m=l.target.files[0],j=await s(m).unwrap();B(ne(j))}catch(m){console.error(m)}};return e.jsxs(e.Fragment,{children:[e.jsxs(fe,{children:[e.jsxs(ye,{children:[e.jsxs(ve,{children:[p?e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:`
                      ${p.avatar_90x90}   90w,
                      ${p.avatar_150x150}   150w,
                      ${p.avatar_180x180} 180w,
                      ${p.avatar_300x300}   300w
                    `,sizes:"(min-width: 768px) 150px, (min-width: 375px) 90px, 90px, 100vw",type:"image/jpeg"}),e.jsx("img",{src:p.avatar_90x90,alt:"Your avatar",loading:"lazy"})]})}):e.jsx(U,{name:"user"}),e.jsxs(we,{htmlFor:"avatarUrls",children:[e.jsx("input",{type:"file",name:"avatar",id:"avatarUrls",accept:"image/*",onChange:b}),e.jsx(U,{name:"add_avatar"})]})]}),e.jsxs(be,{children:[e.jsx(P,{children:E}),e.jsx(S,{children:"User"})]})]}),e.jsxs(je,{children:[e.jsxs(H,{children:[e.jsxs(R,{children:[e.jsx(U,{name:"food"}),"Daily calorie intake"]}),e.jsx(P,{children:C||2200})]}),e.jsxs(Ue,{children:[e.jsxs(R,{children:[e.jsx(U,{name:"dumbbell"}),"Daily norm of sports"]}),e.jsx(P,{children:"110 min"})]})]}),e.jsx(Ae,{children:e.jsxs(S,{children:[e.jsx(U,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),e.jsx(Ce,{children:e.jsx(ae,{})})]}),e.jsx(z,{isLoading:o,isError:v,error:h}),e.jsx(z,{isLoading:k,isError:w,error:x})]})}const Be=new Date(2006,1,1);Be.getFullYear();const Ee=me({height:D().required("Please, enter your height").min(150).max(230),currentWeight:D().required("Please, enter your weight").min(35),desiredWeight:D().required("The field is required").min(35),blood:D().required("required"),sex:ge().required("required"),levelActivity:D().required("required")}),We=t.div`
  position: relative;
  width: 161px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:s})=>s.color.border};

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
`,Fe=t.p`
  color: ${({setColor:s})=>s==="full"?({theme:o})=>o.color.white:({theme:o})=>o.color.border};
  font-size: 16px;
  line-height: 1.5;
`,De=t.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:s})=>s.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;function O({selectedDate:s,setSelectedDate:o}){const[v,h]=A.useState(!0),C="Birthday",k=b=>{h(!1),o(b)},[w]=_();A.useEffect(()=>{(async()=>{var m,j;const{user:l}=await w().unwrap();(m=l==null?void 0:l.userParams)!=null&&m.birthday?(h(!1),o(new Date((j=l==null?void 0:l.userParams)==null?void 0:j.birthday))):h(!0)})()},[w,o]);const x=new Date,B=new Date(x.setFullYear(x.getFullYear()-18)),E=new Date(x.setFullYear(x.getFullYear()-100)),p=v?C:$(s,"dd.MM.yyyy");return e.jsx(e.Fragment,{children:e.jsx(ue,{maxDate:B,minDate:E,onChange:k,value:s,children:e.jsxs(We,{children:[e.jsx(Fe,{setColor:v?"":"full",children:p}),e.jsx(De,{children:e.jsx(U,{name:"calendar"})})]})})})}O.propTypes={selectedDate:N.instanceOf(Date).isRequired,setSelectedDate:N.func.isRequired};const ze=t.form`
  width: 335px;
  background-color: #0a0909;

  /* p {
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
`,Pe=t.div`
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
`,Se=t.div`
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
`,Le=t.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`,Q=t.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`,Me=t(Q)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`,qe=t.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,Ie=t.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`,G=t.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,$e=t(G)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
  }
`,Te=t.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`,Ne=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,Re=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,c=t.input`
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
`,Ve=t.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Ye=t.div`
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
`,_e={name:"",birthday:"",blood:"",currentWeight:"",desiredWeight:"",height:"",levelActivity:"",sex:""};function He(){const[s,o]=A.useState(new Date),v=V(),[h,{isLoading:C,isError:k,error:w}]=_(),[x,{isLoading:B,isError:E,error:p}]=se(),[b,{isLoading:l,isError:m,error:j}]=de(),W=M(Y),J=M(oe),[g,q]=A.useState(),[K,I]=A.useState(!1);A.useEffect(()=>{(async()=>{try{const{data:F}=await h();q({name:W,...F.user.userParams})}catch(F){q(_e),console.log(F)}})()},[h,W]);const{values:i,errors:n,touched:u,handleSubmit:X,handleBlur:r,handleChange:a,isValid:Z,isSubmitting:ee}=xe({initialValues:{...g},validationSchema:Ee,validateOnChange:!0,validateOnBlur:!0,enableReinitialize:!0,onSubmit:async({name:L,...F})=>{const f={...F,birthday:$(s,"yyyy-MM-dd")},T=f.birthday!==$(new Date(g.birthday),"yyyy-MM-dd")||f.blood!==g.blood||f.currentWeight!==g.currentWeight||f.desiredWeight!==g.desiredWeight||f.height!==g.height||f.levelActivity!==g.levelActivity||f.sex!==g.sex;if(L===W&&!T&&(I(!0),setTimeout(I,2e3,!1)),L!==W)try{const y=await b(L).unwrap();v(le(y))}catch(y){console.error(y)}if(T)try{const{user:y}=await x(f).unwrap();q({name:W,...y.userParams})}catch(y){console.log(y)}}});return e.jsxs(e.Fragment,{children:[e.jsxs(ze,{autoComplete:"off",onSubmit:X,children:[e.jsxs(Pe,{children:[e.jsxs("label",{htmlFor:"name",children:["Basic info",e.jsx("input",{id:"name",type:"text",name:"name",placeholder:"name",value:i.name||"",onChange:a,onBlur:r}),n.name&&u.name&&e.jsx("p",{children:n.name})]}),e.jsx("input",{id:"email",type:"email",name:"email",placeholder:"email",value:J||"",onChange:a,onBlur:r,disabled:!0}),n.email&&u.email&&e.jsx("p",{children:n.email})]}),e.jsxs(Se,{children:[e.jsxs(Le,{children:[e.jsxs(Q,{htmlFor:"height",children:["Height",e.jsx("input",{id:"height",type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:i.height||"",onChange:a,onBlur:r}),n.height&&u.height&&e.jsx("p",{children:n.height})]}),e.jsxs(Me,{htmlFor:"currentWeight",children:["Current Weight",e.jsx("input",{id:"currentWeight",type:"number",name:"currentWeight",placeholder:"0",min:"35",value:i.currentWeight||"",onChange:a,onBlur:r}),n.currentWeight&&u.currentWeight&&e.jsx("p",{children:n.currentWeight})]})]}),e.jsxs(Ie,{children:[e.jsxs(G,{htmlFor:"desiredWeight",children:["Desired Weight",e.jsx("input",{id:"desiredWeight",type:"number",name:"desiredWeight",placeholder:"0",min:"35",value:i.desiredWeight||"",onChange:a,onBlur:r}),n.desiredWeight&&u.desiredWeight&&e.jsx("p",{children:n.desiredWeight})]}),e.jsx($e,{children:e.jsx(O,{selectedDate:s,setSelectedDate:o,onChange:a,onBlur:r})})]})]}),e.jsxs(Te,{children:[e.jsx(qe,{children:" Blood "}),e.jsxs(Ve,{children:[e.jsxs(Ne,{children:[e.jsx(c,{type:"radio",name:"blood",id:"one",value:"1",onChange:a,onBlur:r,checked:i.blood===1||i.blood==="1"}),e.jsx("label",{htmlFor:"one",children:"1"}),n.blood&&u.blood&&e.jsx("p",{children:n.blood}),e.jsx(c,{type:"radio",name:"blood",id:"two",value:"2",onChange:a,onBlur:r,checked:i.blood===2||i.blood==="2"}),e.jsx("label",{htmlFor:"two",children:"2"}),e.jsx(c,{type:"radio",name:"blood",id:"three",value:"3",onChange:a,onBlur:r,checked:i.blood===3||i.blood==="3"}),e.jsx("label",{htmlFor:"three",children:"3"}),e.jsx(c,{type:"radio",name:"blood",id:"four",value:"4",onChange:a,onBlur:r,checked:i.blood===4||i.blood==="4"}),e.jsx("label",{htmlFor:"four",children:"4"})]}),e.jsxs(Re,{children:[e.jsxs("label",{children:[e.jsx(c,{type:"radio",name:"sex",id:"male",value:"male",onChange:a,onBlur:r,checked:i.sex==="male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(c,{type:"radio",name:"sex",id:"female",value:"female",onChange:a,onBlur:r,checked:i.sex==="female"}),"Female"]}),n.sex&&u.sex&&e.jsx("p",{children:n.sex})]})]}),e.jsxs(Ye,{children:[e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(c,{type:"radio",name:"levelActivity",id:"1",value:1,onChange:a,onBlur:r,checked:i.levelActivity===1||i.levelActivity==="1"})}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(c,{type:"radio",name:"levelActivity",id:"2",value:"2",onChange:a,onBlur:r,checked:i.levelActivity===2||i.levelActivity==="2"})}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(c,{type:"radio",name:"levelActivity",id:"3",value:"3",onChange:a,onBlur:r,checked:i.levelActivity===3||i.levelActivity==="3"})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(c,{type:"radio",name:"levelActivity",id:"4",value:"4",onChange:a,onBlur:r,checked:i.levelActivity===4||i.levelActivity==="4"})}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx("div",{children:e.jsx(c,{type:"radio",name:"levelActivity",id:"5",value:"5",onChange:a,onBlur:r,checked:i.levelActivity===5||i.levelActivity==="5"})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]}),n.levelActivity&&u.levelActivity&&e.jsx("p",{children:n.levelActivity})]}),e.jsx("button",{type:"submit",disabled:!Z||ee,children:"Save"})]}),K&&e.jsx(ce,{onClose:()=>I(!1),children:e.jsx(pe,{message:"No changes to update"})}),e.jsx(z,{isLoading:C,isError:k,error:w}),e.jsx(z,{isLoading:B,isError:E,error:p}),e.jsx(z,{isLoading:l,isError:m,error:j})]})}const Oe=t.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,Qe=t.div`
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
`;function ii(){return e.jsxs(Oe,{children:[e.jsx(he,{text:"Profile Settings"}),e.jsxs(Qe,{children:[e.jsx(ke,{}),e.jsx(He,{})]})]})}export{ii as Profile};