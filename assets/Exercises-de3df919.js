import{n,P as x,Y as u,Z as h,r as l,j as t,$ as s,b as E,a0 as b,O as f}from"./index-f9765042.js";import{T as j}from"./TitlePage-385fddd9.js";const C=n.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    gap: 32px;
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

  ${e=>e.selected&&`color: #EFEDE8;
    ::before {
      background-color: #EF8964; 
    }
  `}
`;function g({category:e,setCategory:a}){const r=u(),i=h();l.useEffect(()=>{r.pathname!=="/exercises"&&i("./")},[e]);const o=m=>{a(m.target.value)};return t.jsxs(C,{children:[t.jsx(p,{children:t.jsxs(d,{selected:e===s.BODY_PARTS,children:[t.jsx(c,{type:"radio",value:s.BODY_PARTS,checked:e===s.BODY_PARTS,onChange:o}),"Body parts"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===s.MUSCLES,children:[t.jsx(c,{type:"radio",value:s.MUSCLES,checked:e===s.MUSCLES,onChange:o}),"Muscles"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===s.EQUIPMENT,children:[t.jsx(c,{type:"radio",value:s.EQUIPMENT,checked:e===s.EQUIPMENT,onChange:o}),"Equipment"]})})]})}g.propTypes={category:x.string.isRequired,setCategory:x.func.isRequired};const v=n.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 64px;
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
`,S=n.div`
  position: relative;
`;function P(){const[e,a]=l.useState(s.BODY_PARTS),r=E(),{subcategory:i}=b(),o=r.pathname==="/exercises";return t.jsxs(S,{children:[t.jsxs(v,{margin:!!i,children:[t.jsx(j,{text:o?"Exercises":i}),t.jsx(g,{setCategory:a,category:e})]}),t.jsx(f,{context:e})]})}export{P as Exercises};
