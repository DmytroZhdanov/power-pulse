import{n as t,P,o as ae,p as re,u as Y,q as S,t as _,v as ne,r as u,j as i,I as $,w as se,E as W,x as oe,y as H,g as de,z as le,A as ce,C as he,B as pe,l as xe}from"./index-aff1b4d6.js";import{T as me}from"./TitlePage-8139844a.js";import{u as ge}from"./formik.esm-3cee484c.js";import{f as T,C as ue}from"./Calendar-8803fcda.js";import{c as be,b as E,a as we}from"./index.esm-97a5b3ff.js";import"./tiny-warning.esm-c932d744.js";const fe=t.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 439px;
    gap: 32px;
  }
`,ye=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 166px;
  }
`,ve=t.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};
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
    color: ${({theme:e})=>e.color.grayFirst};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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
`,je=t.label`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 32px;
    height: 32px;
    bottom: -14px;
  }
`,I=t.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: ${({theme:e})=>e.color.white};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,N=t.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({theme:e})=>e.color.grayFirst};
`,V=t.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: ${({theme:e})=>e.color.white}cc;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(18 / 12);
  }
`,ke=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    text-align: center;
  }

  p {
    color: ${({theme:e})=>e.color.white}80;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 8px;
  }
`,$e=t.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (max-width: 374px) {
    max-width: 100%;

    div {
      width: calc((100vw - 60px) / 2);
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 16px;
  }
`,O=t.div`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 214px;
    padding: 14px 18px;

    p {
      line-height: calc(32 / 24);
    }
  }
`,Ue=t(O)`
  width: 165px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 209px;
  }
`,Fe=t.div`
  width: 100%;

  p {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    p {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,Be=t.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function Q({fetchBmr:e,setFetchBmr:r}){const[y,{isLoading:b,isError:v,error:U}]=ae(),[w,{data:p,isLoading:F,isError:B,error:D}]=re(),j=Y(),c=S(_),d=S(ne);u.useEffect(()=>{e&&((async()=>{await w()})(),r(!1))},[e,w,r]);const k=async A=>{A.preventDefault();try{const h=A.target.files[0],L=await y(h).unwrap();j(oe(L))}catch(h){console.error(h)}};return i.jsxs(i.Fragment,{children:[i.jsxs(fe,{children:[i.jsxs(ye,{children:[i.jsxs(ve,{children:[d?i.jsx("div",{children:i.jsxs("picture",{children:[i.jsx("source",{srcSet:`
                      ${d.avatar_90x90}   90w,
                      ${d.avatar_150x150}   150w,
                      ${d.avatar_180x180} 180w,
                      ${d.avatar_300x300}   300w
                    `,sizes:"(min-width: 768px) 150px, (min-width: 375px) 90px, 90px, 100vw",type:"image/jpeg"}),i.jsx("img",{src:d.avatar_90x90,alt:"Your avatar",loading:"lazy"})]})}):i.jsx($,{name:"user"}),i.jsxs(je,{htmlFor:"avatarUrls",children:[i.jsx("input",{type:"file",name:"avatar",id:"avatarUrls",accept:"image/*",onChange:k}),i.jsx($,{name:"add_avatar"})]})]}),i.jsxs(ke,{children:[i.jsx(I,{children:c}),i.jsx(N,{children:"User"})]})]}),i.jsxs($e,{children:[i.jsxs(O,{children:[i.jsxs(V,{children:[i.jsx($,{name:"food"}),"Daily calorie intake"]}),i.jsx(I,{children:p||2200})]}),i.jsxs(Ue,{children:[i.jsxs(V,{children:[i.jsx($,{name:"dumbbell"}),"Daily norm of sports"]}),i.jsx(I,{children:"110 min"})]})]}),i.jsx(Fe,{children:i.jsxs(N,{children:[i.jsx($,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),i.jsx(Be,{children:i.jsx(se,{})})]}),i.jsx(W,{isLoading:b,isError:v,error:U}),i.jsx(W,{isLoading:F,isError:B,error:D})]})}Q.propTypes={fetchBmr:P.bool.isRequired,setFetchBmr:P.func.isRequired};const De=t.div`
  position: relative;
  width: 161px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.color.border};

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
`,Ae=t.p`
  color: ${({setColor:e})=>e==="full"?({theme:r})=>r.color.white:({theme:r})=>r.color.border};
  font-size: 16px;
  line-height: 1.5;
`,Ce=t.div`
  width: 18px;
  height: 18px;

  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;function G({selectedDate:e,setSelectedDate:r}){const[y,b]=u.useState(!0),v="Birthday",U=j=>{b(!1),r(j)},[w]=H();u.useEffect(()=>{(async()=>{var d,k;const{user:c}=await w().unwrap();(d=c==null?void 0:c.userParams)!=null&&d.birthday?(b(!1),r(new Date((k=c==null?void 0:c.userParams)==null?void 0:k.birthday))):b(!0)})()},[w,r]);const p=new Date,F=new Date(p.setFullYear(p.getFullYear()-18)),B=new Date(p.setFullYear(p.getFullYear()-100)),D=y?v:T(e,"dd.MM.yyyy");return i.jsx(i.Fragment,{children:i.jsx(ue,{maxDate:F,minDate:B,onChange:U,value:e,children:i.jsxs(De,{children:[i.jsx(Ae,{setColor:y?"":"full",children:D}),i.jsx(Ce,{children:i.jsx($,{name:"calendar"})})]})})})}G.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const Ee=t.form`
  button {
    width: 115px;
    padding: 12px 40px;
    font-size: 16px;
    line-height: calc(18 / 16);
    border-radius: 12px;
    background-color: ${({theme:e})=>e.color.orangeFirst};
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 696px;

    button {
      width: 144px;
      padding: 16px 50px;
      font-size: 20px;
      line-height: calc(24 / 20);
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 760px;
    padding-right: 64px;
    border-right: 1px solid ${({theme:e})=>e.color.grayDisabled};
  }
`,We=t.div`
  #email {
    color: ${({theme:e})=>e.color.grayFifth};
  }

  margin-bottom: 14px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: rgba(239, 237, 232, 0.502);

    input {
      margin: 4px 0 14px 0;
    }
  }

  input {
    padding: 14px;

    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.white};
    border: 1px solid ${({theme:e})=>e.color.grayFirst};
    border-radius: 12px;
    background-color: transparent;
    width: 335px;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;

    label {
      width: 100%;
    }

    input {
      max-width: 100%;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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
`,Pe=t.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: rgba(239, 237, 232, 0.502);
  }

  input {
    padding: 14px;
    margin-top: 4px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.white};
    border: 1px solid ${({theme:e})=>e.color.grayFirst};
    border-radius: 12px;
    background-color: transparent;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;

    label,
    input,
    #currentWeight {
      width: calc((100vw - 60px) / 2);
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    flex-direction: column;
    width: 335px;

    input {
      width: 160px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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
`,ze=t.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media screen and (max-width: 374px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: calc((696px - 14px) / 2);
  }
`,J=t.label`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    input {
      width: 168px;
    }
  }
`,Se=t(J)`
  input {
    width: 161px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    input {
      width: 159px;
    }
  }
`,Le=t.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: rgba(239, 237, 232, 0.502);
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,qe=t.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;

  @media screen and (max-width: 374px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;

    label,
    input,
    & > div {
      width: calc((100vw - 60px) / 2);
    }
  }
`,K=t.label`
  @media screen and (max-width: 374px) {
    max-width: 160px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 160px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 140px;

    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`,Me=t(K)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 187px;
  }
`,Ie=t.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.white};
  }
`,Te=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,Re=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;

  @media screen and (max-width: 374px) {
    margin-top: 20px;
  }
`,l=t.input`
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
    background-color: ${({theme:e})=>e.color.black};
  }

  &:checked&::before {
    /* outline: thick double #0e0e0d; */
    background-color: ${({theme:e})=>e.color.orangeSecond};
  }
`,Ne=t.div`
  @media screen and (max-width: 374px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  width: 335px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 32px;
  }
`,Ve=t.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin: 32px 0 38px 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 48px;
  }
`,Ye=t.button`
  color: ${({disabled:e,theme:r})=>e?r.color.grayFifth:r.color.white};
`,_e=new Date(2006,1,1);_e.getFullYear();const He=be({height:E().required("Please, enter your height").min(150).max(230),currentWeight:E().required("Please, enter your weight").min(35),desiredWeight:E().required("The field is required").min(35),blood:E().required("required"),sex:we().required("required"),levelActivity:E().required("required")}),Oe={name:"",birthday:"",blood:"",currentWeight:"",desiredWeight:"",height:"",levelActivity:"",sex:""};function X({setFetchBmr:e}){const[r,y]=u.useState(new Date),b=Y(),[v,{isLoading:U,isError:w,error:p}]=H(),[F,{isLoading:B,isError:D,error:j}]=de(),[c,{isLoading:d,isError:k,error:A}]=le(),h=S(_),L=S(ce),[x,q]=u.useState(),[Z,M]=u.useState(!1);u.useEffect(()=>{(async()=>{try{const{data:C}=await v();q({name:h,...C.user.userParams})}catch(C){q(Oe),console.log(C)}})()},[v,h]);const{values:a,errors:o,touched:m,handleSubmit:ee,handleBlur:n,handleChange:s,isValid:ie,isSubmitting:te}=ge({initialValues:{...x},validationSchema:He,validateOnChange:!0,validateOnBlur:!0,enableReinitialize:!0,onSubmit:async({name:z,...C})=>{const g={...C,birthday:T(r,"yyyy-MM-dd")},R=g.birthday!==T(new Date(x.birthday),"yyyy-MM-dd")||g.blood!==x.blood||g.currentWeight!==x.currentWeight||g.desiredWeight!==x.desiredWeight||g.height!==x.height||g.levelActivity!==x.levelActivity||g.sex!==x.sex;if(z===h&&!R&&(M(!0),setTimeout(M,2e3,!1)),z!==h)try{const f=await c(z).unwrap();b(he(f))}catch(f){console.error(f)}if(R)try{const{user:f}=await F(g).unwrap();q({name:h,...f.userParams}),e(!0)}catch(f){console.log(f)}}});return i.jsxs(i.Fragment,{children:[i.jsxs(Ee,{autoComplete:"off",onSubmit:ee,children:[i.jsxs(We,{children:[i.jsxs("label",{htmlFor:"name",children:["Basic info",i.jsx("input",{id:"name",type:"text",name:"name",placeholder:"name",value:a.name||"",onChange:s,onBlur:n}),o.name&&m.name&&i.jsx("p",{children:o.name})]}),i.jsx("input",{id:"email",type:"email",name:"email",placeholder:"email",value:L||"",onChange:s,onBlur:n,disabled:!0}),o.email&&m.email&&i.jsx("p",{children:o.email})]}),i.jsxs(Pe,{children:[i.jsxs(ze,{children:[i.jsxs(J,{htmlFor:"height",children:["Height",i.jsx("input",{id:"height",type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:a.height||"",onChange:s,onBlur:n}),o.height&&m.height&&i.jsx("p",{children:o.height})]}),i.jsxs(Se,{htmlFor:"currentWeight",children:["Current Weight",i.jsx("input",{id:"currentWeight",type:"number",name:"currentWeight",placeholder:"0",min:"35",value:a.currentWeight||"",onChange:s,onBlur:n}),o.currentWeight&&m.currentWeight&&i.jsx("p",{children:o.currentWeight})]})]}),i.jsxs(qe,{children:[i.jsxs(K,{htmlFor:"desiredWeight",children:["Desired Weight",i.jsx("input",{id:"desiredWeight",type:"number",name:"desiredWeight",placeholder:"0",min:"35",value:a.desiredWeight||"",onChange:s,onBlur:n}),o.desiredWeight&&m.desiredWeight&&i.jsx("p",{children:o.desiredWeight})]}),i.jsx(Me,{children:i.jsx(G,{selectedDate:r,setSelectedDate:y,onChange:s,onBlur:n})})]})]}),i.jsxs(Ie,{children:[i.jsx(Le,{children:" Blood "}),i.jsxs(Ne,{children:[i.jsxs(Te,{children:[i.jsx(l,{type:"radio",name:"blood",id:"one",value:"1",onChange:s,onBlur:n,checked:a.blood===1||a.blood==="1"}),i.jsx("label",{htmlFor:"one",children:"1"}),o.blood&&m.blood&&i.jsx("p",{children:o.blood}),i.jsx(l,{type:"radio",name:"blood",id:"two",value:"2",onChange:s,onBlur:n,checked:a.blood===2||a.blood==="2"}),i.jsx("label",{htmlFor:"two",children:"2"}),i.jsx(l,{type:"radio",name:"blood",id:"three",value:"3",onChange:s,onBlur:n,checked:a.blood===3||a.blood==="3"}),i.jsx("label",{htmlFor:"three",children:"3"}),i.jsx(l,{type:"radio",name:"blood",id:"four",value:"4",onChange:s,onBlur:n,checked:a.blood===4||a.blood==="4"}),i.jsx("label",{htmlFor:"four",children:"4"})]}),i.jsxs(Re,{children:[i.jsxs("label",{children:[i.jsx(l,{type:"radio",name:"sex",id:"male",value:"male",onChange:s,onBlur:n,checked:a.sex==="male"}),"Male"]}),i.jsxs("label",{children:[i.jsx(l,{type:"radio",name:"sex",id:"female",value:"female",onChange:s,onBlur:n,checked:a.sex==="female"}),"Female"]}),o.sex&&m.sex&&i.jsx("p",{children:o.sex})]})]}),i.jsxs(Ve,{children:[i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(l,{type:"radio",name:"levelActivity",id:"1",value:1,onChange:s,onBlur:n,checked:a.levelActivity===1||a.levelActivity==="1"})}),"Sedentary lifestyle (little or no physical activity)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(l,{type:"radio",name:"levelActivity",id:"2",value:"2",onChange:s,onBlur:n,checked:a.levelActivity===2||a.levelActivity==="2"})}),"Light activity (light exercises/sports 1-3 days per week)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(l,{type:"radio",name:"levelActivity",id:"3",value:"3",onChange:s,onBlur:n,checked:a.levelActivity===3||a.levelActivity==="3"})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(l,{type:"radio",name:"levelActivity",id:"4",value:"4",onChange:s,onBlur:n,checked:a.levelActivity===4||a.levelActivity==="4"})}),"Very active (intense exercises/sports 6-7 days per week)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(l,{type:"radio",name:"levelActivity",id:"5",value:"5",onChange:s,onBlur:n,checked:a.levelActivity===5||a.levelActivity==="5"})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]}),o.levelActivity&&m.levelActivity&&i.jsx("p",{children:o.levelActivity})]}),i.jsx(Ye,{type:"submit",disabled:!ie||te,children:"Save"})]}),Z&&i.jsx(pe,{onClose:()=>M(!1),children:i.jsx(xe,{message:"No changes to update"})}),i.jsx(W,{isLoading:U,isError:w,error:p}),i.jsx(W,{isLoading:B,isError:D,error:j}),i.jsx(W,{isLoading:d,isError:k,error:A})]})}X.propTypes={setFetchBmr:P.func.isRequired};const Qe=t.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-bottom: 36px;
  }
`,Ge=t.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 40px;
  align-items: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 38px;
    margin-top: 64px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 25px;
    margin-top: 32px;
  }
`;function ti(){const[e,r]=u.useState(!0);return i.jsxs(Qe,{children:[i.jsx(me,{text:"Profile Settings"}),i.jsxs(Ge,{children:[i.jsx(Q,{fetchBmr:e,setFetchBmr:r}),i.jsx(X,{setFetchBmr:r})]})]})}export{ti as Profile};
