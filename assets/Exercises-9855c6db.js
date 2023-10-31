import{n,P as l,Y as u,Z as h,r as x,j as t,$ as o,b,a0 as E,O as f}from"./index-a24aba2f.js";import{T as j}from"./TitlePage-8803fa2a.js";const C=n.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    gap: 32px;
  }
`,c=n.input`
  display: none;
`,p=n.div`
  position: relative;
`,d=n.label`
  color: ${({theme:e})=>e.color.grayThird};
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: ${({theme:e})=>e.color.orangeSecond};
    background-color: transparent;
  }

  ${e=>e.selected&&`color: #EFEDE8;
    ::before {
      background-color: ${({theme:s})=>s.color.orangeSecond}; 
    }
  `}
`;function g({category:e,setCategory:s}){const r=u(),i=h();x.useEffect(()=>{r.pathname!=="/exercises"&&i("./")},[e,i,r.pathname]);const a=m=>{s(m.target.value)};return t.jsxs(C,{children:[t.jsx(p,{children:t.jsxs(d,{selected:e===o.BODY_PARTS,children:[t.jsx(c,{type:"radio",value:o.BODY_PARTS,checked:e===o.BODY_PARTS,onChange:a}),"Body parts"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===o.MUSCLES,children:[t.jsx(c,{type:"radio",value:o.MUSCLES,checked:e===o.MUSCLES,onChange:a}),"Muscles"]})}),t.jsx(p,{children:t.jsxs(d,{selected:e===o.EQUIPMENT,children:[t.jsx(c,{type:"radio",value:o.EQUIPMENT,checked:e===o.EQUIPMENT,onChange:a}),"Equipment"]})})]})}g.propTypes={category:l.string.isRequired,setCategory:l.func.isRequired};const S=n.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-top: 72px;
    margin-bottom: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${e=>e.margin&&"32px"};
    margin-top: ${e=>e.margin&&"72px"};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-top: 72px;
    margin-bottom: 64px;
    margin-bottom: ${e=>e.margin&&"32px"};
  }
`,v=n.div`
  position: relative;
`;function P(){const[e,s]=x.useState(o.BODY_PARTS),r=b(),{subcategory:i}=E(),a=r.pathname==="/exercises";return t.jsxs(v,{children:[t.jsxs(S,{margin:!!i,children:[t.jsx(j,{text:a?"Exercises":i}),t.jsx(g,{setCategory:s,category:e})]}),t.jsx(f,{context:e})]})}export{P as Exercises};
