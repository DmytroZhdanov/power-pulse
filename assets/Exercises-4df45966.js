import{n,P as x,W as u,X as h,r as l,j as t,Y as s,b as E,Z as b,O as f}from"./index-ad7fd61b.js";import{T as C}from"./TitlePage-bbb3b444.js";import{u as j}from"./upperCase-5e800fdd.js";const v=n.fieldset`
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
`;function m({category:e,setCategory:a}){const r=u(),i=h();l.useEffect(()=>{r.pathname!=="/exercises"&&i("./")},[e]);const o=g=>{a(g.target.value)};return t.jsxs(v,{children:[t.jsx(p,{children:t.jsxs(d,{selected:e===s.BODY_PARTS,children:[t.jsx(c,{type:"radio",value:s.BODY_PARTS,checked:e===s.BODY_PARTS,onChange:o}),"Body parts"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===s.MUSCLES,children:[t.jsx(c,{type:"radio",value:s.MUSCLES,checked:e===s.MUSCLES,onChange:o}),"Muscles"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===s.EQUIPMENT,children:[t.jsx(c,{type:"radio",value:s.EQUIPMENT,checked:e===s.EQUIPMENT,onChange:o}),"Equipment"]})})]})}m.propTypes={category:x.string.isRequired,setCategory:x.func.isRequired};const S=n.div`
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
`,y=n.div`
  position: relative;
`;function O(){const[e,a]=l.useState(s.BODY_PARTS),r=E(),{subcategory:i}=b(),o=r.pathname==="/exercises";return t.jsxs(y,{children:[t.jsxs(S,{margin:!!i,children:[t.jsx(C,{text:o?"Exercises":j(i)}),t.jsx(m,{setCategory:a,category:e})]}),t.jsx(f,{context:e})]})}export{O as Exercises};
