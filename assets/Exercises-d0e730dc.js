import{n,c as h,b as u,r as d,j as e,S as s,O as m}from"./index-27f671e2.js";import{T as E}from"./TitlePage-da3477cd.js";const g=n.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 32px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,a=n.input`
  display: none;
`,r=n.div`
  position: relative;
`,c=n.label`
  color: rgba(239, 237, 232, 0.4);
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #ef8964;
    background-color: transparent;
  }

  ${t=>t.selected&&`color: #EFEDE8;;
    ::before {
      background-color: #EF8964; 
    }
  `}
`;function f({category:t,setCategory:i}){const l=h(),p=u();d.useEffect(()=>{l.pathname!=="/exercises"&&p("./")},[t]);const o=x=>{i(x.target.value)};return e.jsxs(g,{children:[e.jsx(r,{children:e.jsxs(c,{selected:t===s.BODY_PARTS,children:[e.jsx(a,{type:"radio",value:s.BODY_PARTS,checked:t===s.BODY_PARTS,onChange:o}),"Body parts"]})}),e.jsx(r,{children:e.jsxs(c,{selected:t===s.MUSCLES,children:[e.jsx(a,{type:"radio",value:s.MUSCLES,checked:t===s.MUSCLES,onChange:o}),"Muscles"]})}),e.jsx(r,{children:e.jsxs(c,{selected:t===s.EQUIPMENT,children:[e.jsx(a,{type:"radio",value:s.EQUIPMENT,checked:t===s.EQUIPMENT,onChange:o}),"Equipment"]})})]})}const j=n.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-bottom: 64px;
  }
`;function S(){const[t,i]=d.useState(s.BODY_PARTS);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(E,{text:"Exercises"}),e.jsx(f,{setCategory:i,category:t})]}),e.jsx(m,{context:t})]})}export{S as Exercises};
