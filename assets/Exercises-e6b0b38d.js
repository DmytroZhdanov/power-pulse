import{n as o,P as m,Y as h,Z as b,r as c,j as t,$ as n,b as E,a0 as f,O as j}from"./index-c516ffb8.js";import{T as C}from"./TitlePage-3dcab65f.js";const S=o.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    gap: 32px;
  }
`,d=o.input`
  display: none;
`,l=o.div`
  position: relative;
`,x=o.label`
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

  ${({selected:e,theme:s})=>e&&`color: #EFEDE8;
    ::before {
      background-color: ${s.color.orangeSecond}; 
    }
  `}
`;function g({category:e,setCategory:s}){const a=h(),i=b(),r=c.useRef(a.pathname);c.useEffect(()=>{r.current!=="/exercises"&&i("./")},[e,i]),c.useEffect(()=>{r.current=a.pathname},[a.pathname]);const p=u=>{s(u.target.value)};return t.jsxs(S,{children:[t.jsx(l,{children:t.jsxs(x,{selected:e===n.BODY_PARTS,children:[t.jsx(d,{type:"radio",value:n.BODY_PARTS,checked:e===n.BODY_PARTS,onChange:p}),"Body parts"]})}),t.jsx(l,{children:t.jsxs(x,{selected:e===n.MUSCLES,children:[t.jsx(d,{type:"radio",value:n.MUSCLES,checked:e===n.MUSCLES,onChange:p}),"Muscles"]})}),t.jsx(l,{children:t.jsxs(x,{selected:e===n.EQUIPMENT,children:[t.jsx(d,{type:"radio",value:n.EQUIPMENT,checked:e===n.EQUIPMENT,onChange:p}),"Equipment"]})})]})}g.propTypes={category:m.string.isRequired,setCategory:m.func.isRequired};const v=o.div`
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
`,y=o.div`
  position: relative;
`;function R(){const[e,s]=c.useState(n.BODY_PARTS),a=E(),{subcategory:i}=f(),r=a.pathname==="/exercises";return t.jsxs(y,{children:[t.jsxs(v,{margin:!!i,children:[t.jsx(C,{text:r?"Exercises":i}),t.jsx(g,{setCategory:s,category:e})]}),t.jsx(j,{context:e})]})}export{R as Exercises};
