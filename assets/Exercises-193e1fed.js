import{n,f as m,e as g,r as l,j as t,X as s,b as u,Y as h,O as E}from"./index-6cfb59fa.js";import{T as f}from"./TitlePage-8b242bc6.js";import{U as b}from"./UpperCase-e7ea7578.js";const j=n.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 32px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,c=n.input`
  display: none;
`,p=n.div`
  position: relative;
`,d=n.label`
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

  ${e=>e.selected&&`color: #EFEDE8;;
    ::before {
      background-color: #EF8964; 
    }
  `}
`;function C({category:e,setCategory:a}){const r=m(),i=g();l.useEffect(()=>{r.pathname!=="/exercises"&&i("./")},[e]);const o=x=>{a(x.target.value)};return t.jsxs(j,{children:[t.jsx(p,{children:t.jsxs(d,{selected:e===s.BODY_PARTS,children:[t.jsx(c,{type:"radio",value:s.BODY_PARTS,checked:e===s.BODY_PARTS,onChange:o}),"Body parts"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===s.MUSCLES,children:[t.jsx(c,{type:"radio",value:s.MUSCLES,checked:e===s.MUSCLES,onChange:o}),"Muscles"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===s.EQUIPMENT,children:[t.jsx(c,{type:"radio",value:s.EQUIPMENT,checked:e===s.EQUIPMENT,onChange:o}),"Equipment"]})})]})}const S=n.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${e=>e.margin&&"32px"};
    margin-top: ${e=>e.margin&&"72px"};
  }

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-bottom: 64px;
    margin-bottom: ${e=>e.margin&&"32px"};
  }
`,v=n.div`
  position: relative;
`;function O(){const[e,a]=l.useState(s.BODY_PARTS),r=u(),{subcategory:i}=h(),o=r.pathname==="/exercises";return t.jsxs(v,{children:[t.jsxs(S,{margin:!!i,children:[t.jsx(f,{text:o?"Exercises":b(i)}),t.jsx(C,{setCategory:a,category:e})]}),t.jsx(E,{context:e})]})}export{O as Exercises};
