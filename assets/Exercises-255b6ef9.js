import{n as s,P as m,h,e as b,r as c,j as t,a8 as n,b as E,a9 as f,aa as j}from"./index-752ef398.js";import{T as C}from"./TitlePage-21a9ff63.js";const S=s.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    gap: 32px;
  }
`,d=s.input`
  display: none;
`,l=s.div`
  position: relative;
`,x=s.label`
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

  ${({selected:e,theme:a})=>e&&`color: #EFEDE8;
    ::before {
      background-color: ${a.color.orangeSecond}; 
    }
  `}
`;function g({category:e,setCategory:a}){const o=h(),i=b(),r=c.useRef(o.pathname);c.useEffect(()=>{r.current!=="/exercises"&&i("./")},[e,i]),c.useEffect(()=>{r.current=o.pathname},[o.pathname]);const p=u=>{a(u.target.value)};return t.jsxs(S,{children:[t.jsx(l,{children:t.jsxs(x,{selected:e===n.BODY_PARTS,children:[t.jsx(d,{type:"radio",value:n.BODY_PARTS,checked:e===n.BODY_PARTS,onChange:p}),"Body parts"]})}),t.jsx(l,{children:t.jsxs(x,{selected:e===n.MUSCLES,children:[t.jsx(d,{type:"radio",value:n.MUSCLES,checked:e===n.MUSCLES,onChange:p}),"Muscles"]})}),t.jsx(l,{children:t.jsxs(x,{selected:e===n.EQUIPMENT,children:[t.jsx(d,{type:"radio",value:n.EQUIPMENT,checked:e===n.EQUIPMENT,onChange:p}),"Equipment"]})})]})}g.propTypes={category:m.string.isRequired,setCategory:m.func.isRequired};const v=s.div`
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
`,y=s.div`
  position: relative;
`;function R(){const[e,a]=c.useState(n.BODY_PARTS),o=E(),{subcategory:i}=f(),r=o.pathname==="/exercises"||o.pathname==="/exercises/";return t.jsxs(y,{children:[t.jsxs(v,{margin:!!i,children:[t.jsx(C,{text:r?"Exercises":i}),t.jsx(g,{setCategory:a,category:e})]}),t.jsx(j,{context:e})]})}export{R as Exercises};
