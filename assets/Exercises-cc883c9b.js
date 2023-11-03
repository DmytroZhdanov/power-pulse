import{n as a,P as g,h,e as b,r as c,j as t,a8 as o,b as f,a9 as E,aa as j}from"./index-d3b29107.js";import{T as C}from"./TitlePage-0a8ce473.js";const S=a.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    gap: 32px;
  }
`,d=a.input`
  display: none;
`,l=a.div`
  position: relative;
`,x=a.label`
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
  
  &:hover {
    color: #efede8;
    
    ::before {
      background-color: ${({theme:e})=>e.color.orangeSecond};
    }
  }
`;function m({category:e,setCategory:s}){const n=h(),r=b(),i=c.useRef(n.pathname);c.useEffect(()=>{i.current!=="/exercises"&&r("./")},[e,r]),c.useEffect(()=>{i.current=n.pathname},[n.pathname]);const p=u=>{s(u.target.value)};return t.jsxs(S,{children:[t.jsx(l,{children:t.jsxs(x,{selected:e===o.BODY_PARTS,children:[t.jsx(d,{type:"radio",value:o.BODY_PARTS,checked:e===o.BODY_PARTS,onChange:p}),"Body parts"]})}),t.jsx(l,{children:t.jsxs(x,{selected:e===o.MUSCLES,children:[t.jsx(d,{type:"radio",value:o.MUSCLES,checked:e===o.MUSCLES,onChange:p}),"Muscles"]})}),t.jsx(l,{children:t.jsxs(x,{selected:e===o.EQUIPMENT,children:[t.jsx(d,{type:"radio",value:o.EQUIPMENT,checked:e===o.EQUIPMENT,onChange:p}),"Equipment"]})})]})}m.propTypes={category:g.string.isRequired,setCategory:g.func.isRequired};const v=a.div`
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
`,y=a.div`
  position: relative;
`;function R(){const[e,s]=c.useState(o.BODY_PARTS),n=f(),{subcategory:r}=E(),i=n.pathname==="/exercises"||n.pathname==="/exercises/";return t.jsxs(y,{children:[t.jsxs(v,{margin:!!r,children:[t.jsx(C,{text:i?"Exercises":r}),t.jsx(m,{setCategory:s,category:e})]}),t.jsx(j,{context:e})]})}export{R as Exercises};
