import{n as t,P,w as de,x as oe,u as N,y as L,z as G,A as le,r as l,s as R,j as i,I as A,B as ce,C as he,G as Q,e as pe,l as S,f as xe,p as me,H as ue,J as ge,h as be,K as we,M as V,N as _}from"./index-942e5375.js";import{T as fe}from"./TitlePage-65bc4017.js";import{f as I,C as ye}from"./Calendar-637e625f.js";const ve=t.div`
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
`,je=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 166px;
  }
`,ke=t.div`
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
`,$e=t.label`
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
`,q=t.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: ${({theme:e})=>e.color.white};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,H=t.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({theme:e})=>e.color.grayFirst};
`,O=t.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: ${({theme:e})=>e.color.white}cc;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    line-height: calc(18 / 12);
  }
`,Ue=t.div`
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
`,Fe=t.div`
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
`,J=t.div`
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
`,Be=t(J)`
  width: 165px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 209px;
  }
`,De=t.div`
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
`,Ae=t.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;function K({fetchBmr:e,setFetchBmr:r}){const[F,{isLoading:m,isError:u,error:v}]=de(),[j,{data:k,isLoading:$,isError:b,error:w}]=oe(),c=N(),C=L(G),h=L(le);l.useEffect(()=>{c(R({isLoading:m||$,isError:u||b,error:v||w}))},[c,w,b,$,u,m,v]),l.useEffect(()=>{e&&((async()=>{await j()})(),r(!1))},[e,j,r]);const B=async g=>{g.preventDefault();try{const d=g.target.files[0],D=await F(d).unwrap();c(he(D))}catch(d){console.error(d)}};return i.jsx(i.Fragment,{children:i.jsxs(ve,{children:[i.jsxs(je,{children:[i.jsxs(ke,{children:[h?i.jsx("div",{children:i.jsxs("picture",{children:[i.jsx("source",{srcSet:`
                      ${h.avatar_90x90}   90w,
                      ${h.avatar_150x150}   150w,
                      ${h.avatar_180x180} 180w,
                      ${h.avatar_300x300}   300w
                    `,sizes:"(min-width: 768px) 150px, (min-width: 375px) 90px, 90px, 100vw",type:"image/jpeg"}),i.jsx("img",{src:h.avatar_90x90,alt:"Your avatar",loading:"lazy"})]})}):i.jsx(A,{name:"user"}),i.jsxs($e,{htmlFor:"avatarUrls",children:[i.jsx("input",{type:"file",name:"avatar",id:"avatarUrls",accept:"image/*",onChange:B}),i.jsx(A,{name:"add_avatar"})]})]}),i.jsxs(Ue,{children:[i.jsx(q,{children:C}),i.jsx(H,{children:"User"})]})]}),i.jsxs(Fe,{children:[i.jsxs(J,{children:[i.jsxs(O,{children:[i.jsx(A,{name:"food"}),"Daily calorie intake"]}),i.jsx(q,{children:k||2200})]}),i.jsxs(Be,{children:[i.jsxs(O,{children:[i.jsx(A,{name:"dumbbell"}),"Daily norm of sports"]}),i.jsx(q,{children:"110 min"})]})]}),i.jsx(De,{children:i.jsxs(H,{children:[i.jsx(A,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),i.jsx(Ae,{children:i.jsx(ce,{})})]})})}K.propTypes={fetchBmr:P.bool.isRequired,setFetchBmr:P.func.isRequired};const Ce=t.div`
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
`,We=t.p`
  color: ${({setColor:e})=>e==="full"?({theme:r})=>r.color.white:({theme:r})=>r.color.border};
  font-size: 16px;
  line-height: 1.5;
`,Ee=t.div`
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
`;function X({selectedDate:e,setSelectedDate:r}){const F=N(),[m,u]=l.useState(!0),v="Birthday",j=g=>{u(!1),r(g)},[k,{isLoading:$,isError:b,error:w}]=Q();l.useEffect(()=>{F(R({isLoading:$,isError:b,error:w}))},[F,w,b,$]),l.useEffect(()=>{(async()=>{var D,p;const{user:d}=await k().unwrap();(D=d==null?void 0:d.userParams)!=null&&D.birthday?(u(!1),r(new Date((p=d==null?void 0:d.userParams)==null?void 0:p.birthday))):u(!0)})()},[k,r]);const c=new Date,C=new Date(c.setFullYear(c.getFullYear()-18)),h=new Date(c.setFullYear(c.getFullYear()-100)),B=m?v:I(e,"dd.MM.yyyy");return i.jsx(i.Fragment,{children:i.jsx(ye,{maxDate:C,minDate:h,onChange:j,value:e,children:i.jsxs(Ce,{children:[i.jsx(We,{setColor:m?"":"full",children:B}),i.jsx(Ee,{children:i.jsx(A,{name:"calendar"})})]})})})}X.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const Se=t.form`
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
`,Pe=t.div`
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
`,ze=t.div`
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
`,Le=t.div`
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
`,Z=t.label`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    input {
      width: 168px;
    }
  }
`,Te=t(Z)`
  input {
    width: 161px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    input {
      width: 159px;
    }
  }
`,Me=t.div`
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
`,ee=t.label`
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
`,Ie=t(ee)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 187px;
  }
`,Ne=t.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.white};
  }
`,Re=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`,Ye=t.div`
  display: flex;
  justify-content: center;
  gap: 7px;

  @media screen and (max-width: 374px) {
    margin-top: 20px;
  }
`,x=t.input`
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
`,Ve=t.div`
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
`,_e=t.div`
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
`,He=t.button`
  color: ${({disabled:e,theme:r})=>e?r.color.grayFifth:r.color.white};
`,Oe=new Date(2006,1,1);Oe.getFullYear();const Ge=pe({height:S().required("Please, enter your height").min(150).max(230),currentWeight:S().required("Please, enter your weight").min(35),desiredWeight:S().required("The field is required").min(35),blood:S().required("required"),sex:xe().required("required"),levelActivity:S().required("required")}),Qe={name:"",birthday:"",blood:"",currentWeight:"",desiredWeight:"",height:"",levelActivity:"",sex:""};function ie({setFetchBmr:e}){const[r,F]=l.useState(new Date),m=N(),[u,{isLoading:v,isError:j,error:k}]=Q(),[$,{isLoading:b,isError:w,error:c}]=me(),[C,{isLoading:h,isError:B,error:g}]=ue(),d=L(G),D=L(ge),[p,T]=l.useState(),[te,M]=l.useState(!1),[ae,W]=l.useState(!1);l.useEffect(()=>{m(R({isLoading:v||b||h,isError:j||w||B,error:k||c||g}))},[m,k,j,v,B,h,w,b,g,c]),l.useEffect(()=>{(async()=>{try{const{data:E}=await u();T({name:d,...E.user.userParams})}catch(E){T(Qe),console.log(E)}})()},[u,d]);const{values:a,errors:o,touched:f,handleSubmit:re,handleBlur:n,handleChange:s,isValid:ne,isSubmitting:se}=be({initialValues:{...p},validationSchema:Ge,validateOnChange:!0,validateOnBlur:!0,enableReinitialize:!0,onSubmit:async({name:z,...E})=>{const y={...E,birthday:I(r,"yyyy-MM-dd")},Y=y.birthday!==I(new Date(p.birthday),"yyyy-MM-dd")||y.blood!==p.blood||y.currentWeight!==p.currentWeight||y.desiredWeight!==p.desiredWeight||y.height!==p.height||y.levelActivity!==p.levelActivity||y.sex!==p.sex;if(z===d&&!Y&&(M(!0),setTimeout(M,2e3,!1)),z!==d)try{const U=await C(z).unwrap();m(we(U)),W(!0),setTimeout(W,2e3,!1)}catch(U){console.error(U)}if(Y)try{const{user:U}=await $(y).unwrap();T({name:d,...U.userParams}),e(!0),W(!0),setTimeout(W,2e3,!1)}catch(U){console.log(U)}}});return i.jsxs(i.Fragment,{children:[i.jsxs(Se,{autoComplete:"off",onSubmit:re,children:[i.jsxs(Pe,{children:[i.jsxs("label",{htmlFor:"name",children:["Basic info",i.jsx("input",{id:"name",type:"text",name:"name",placeholder:"name",value:a.name||"",onChange:s,onBlur:n}),o.name&&f.name&&i.jsx("p",{children:o.name})]}),i.jsx("input",{id:"email",type:"email",name:"email",placeholder:"email",value:D||"",onChange:s,onBlur:n,disabled:!0}),o.email&&f.email&&i.jsx("p",{children:o.email})]}),i.jsxs(ze,{children:[i.jsxs(Le,{children:[i.jsxs(Z,{htmlFor:"height",children:["Height",i.jsx("input",{id:"height",type:"number",name:"height",placeholder:"0",min:"150",max:"230",value:a.height||"",onChange:s,onBlur:n}),o.height&&f.height&&i.jsx("p",{children:o.height})]}),i.jsxs(Te,{htmlFor:"currentWeight",children:["Current Weight",i.jsx("input",{id:"currentWeight",type:"number",name:"currentWeight",placeholder:"0",min:"35",value:a.currentWeight||"",onChange:s,onBlur:n}),o.currentWeight&&f.currentWeight&&i.jsx("p",{children:o.currentWeight})]})]}),i.jsxs(qe,{children:[i.jsxs(ee,{htmlFor:"desiredWeight",children:["Desired Weight",i.jsx("input",{id:"desiredWeight",type:"number",name:"desiredWeight",placeholder:"0",min:"35",value:a.desiredWeight||"",onChange:s,onBlur:n}),o.desiredWeight&&f.desiredWeight&&i.jsx("p",{children:o.desiredWeight})]}),i.jsx(Ie,{children:i.jsx(X,{selectedDate:r,setSelectedDate:F,onChange:s,onBlur:n})})]})]}),i.jsxs(Ne,{children:[i.jsx(Me,{children:" Blood "}),i.jsxs(Ve,{children:[i.jsxs(Re,{children:[i.jsx(x,{type:"radio",name:"blood",id:"one",value:"1",onChange:s,onBlur:n,checked:a.blood===1||a.blood==="1"}),i.jsx("label",{htmlFor:"one",children:"1"}),o.blood&&f.blood&&i.jsx("p",{children:o.blood}),i.jsx(x,{type:"radio",name:"blood",id:"two",value:"2",onChange:s,onBlur:n,checked:a.blood===2||a.blood==="2"}),i.jsx("label",{htmlFor:"two",children:"2"}),i.jsx(x,{type:"radio",name:"blood",id:"three",value:"3",onChange:s,onBlur:n,checked:a.blood===3||a.blood==="3"}),i.jsx("label",{htmlFor:"three",children:"3"}),i.jsx(x,{type:"radio",name:"blood",id:"four",value:"4",onChange:s,onBlur:n,checked:a.blood===4||a.blood==="4"}),i.jsx("label",{htmlFor:"four",children:"4"})]}),i.jsxs(Ye,{children:[i.jsxs("label",{children:[i.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",onChange:s,onBlur:n,checked:a.sex==="male"}),"Male"]}),i.jsxs("label",{children:[i.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",onChange:s,onBlur:n,checked:a.sex==="female"}),"Female"]}),o.sex&&f.sex&&i.jsx("p",{children:o.sex})]})]}),i.jsxs(_e,{children:[i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(x,{type:"radio",name:"levelActivity",id:"1",value:1,onChange:s,onBlur:n,checked:a.levelActivity===1||a.levelActivity==="1"})}),"Sedentary lifestyle (little or no physical activity)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(x,{type:"radio",name:"levelActivity",id:"2",value:"2",onChange:s,onBlur:n,checked:a.levelActivity===2||a.levelActivity==="2"})}),"Light activity (light exercises/sports 1-3 days per week)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(x,{type:"radio",name:"levelActivity",id:"3",value:"3",onChange:s,onBlur:n,checked:a.levelActivity===3||a.levelActivity==="3"})}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(x,{type:"radio",name:"levelActivity",id:"4",value:"4",onChange:s,onBlur:n,checked:a.levelActivity===4||a.levelActivity==="4"})}),"Very active (intense exercises/sports 6-7 days per week)"]}),i.jsxs("label",{children:[i.jsx("div",{children:i.jsx(x,{type:"radio",name:"levelActivity",id:"5",value:"5",onChange:s,onBlur:n,checked:a.levelActivity===5||a.levelActivity==="5"})}),"Extremely active (very strenuous exercises/sports and physical work)"]})]}),o.levelActivity&&f.levelActivity&&i.jsx("p",{children:o.levelActivity})]}),i.jsx(He,{type:"submit",disabled:!ne||se,children:"Save"})]}),te&&i.jsx(V,{onClose:()=>M(!1),type:"Warning",children:i.jsx(_,{notificationType:"Warning:",message:"No changes to update"})}),ae&&i.jsx(V,{onClose:()=>W(!1),type:"Success",children:i.jsx(_,{notificationType:"Success:",message:"Your data successfully updated"})})]})}ie.propTypes={setFetchBmr:P.func.isRequired};const Je=t.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-bottom: 36px;
  }
`,Ke=t.div`
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
`;function ii(){const[e,r]=l.useState(!0);return i.jsxs(Je,{children:[i.jsx(fe,{text:"Profile Settings"}),i.jsxs(Ke,{children:[i.jsx(K,{fetchBmr:e,setFetchBmr:r}),i.jsx(ie,{setFetchBmr:r})]})]})}export{ii as Profile};
