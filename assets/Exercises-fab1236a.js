import{n as s,P as g,p as h,l as b,r as c,j as t,ae as o,b as f,af as E,ag as j}from"./index-a0934c00.js";import{T as C}from"./TitlePage-828feaf5.js";const S=s.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    gap: 32px;
  }
`,l=s.input`
  display: none;
`,d=s.div`
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
  
  &:hover {
    color: #efede8;
    
    ::before {
      background-color: ${({theme:e})=>e.color.orangeSecond};
    }
  }
`;function m({category:e,setCategory:a}){const n=h(),r=b(),i=c.useRef(n.pathname);c.useEffect(()=>{i.current!=="/exercises"&&r("./")},[e,r]),c.useEffect(()=>{i.current=n.pathname},[n.pathname]);const p=u=>{a(u.target.value)};return t.jsxs(S,{children:[t.jsx(d,{children:t.jsxs(x,{selected:e===o.BODY_PARTS,children:[t.jsx(l,{type:"radio",value:o.BODY_PARTS,checked:e===o.BODY_PARTS,onChange:p}),"Body parts"]})}),t.jsx(d,{children:t.jsxs(x,{selected:e===o.MUSCLES,children:[t.jsx(l,{type:"radio",value:o.MUSCLES,checked:e===o.MUSCLES,onChange:p}),"Muscles"]})}),t.jsx(d,{children:t.jsxs(x,{selected:e===o.EQUIPMENT,children:[t.jsx(l,{type:"radio",value:o.EQUIPMENT,checked:e===o.EQUIPMENT,onChange:p}),"Equipment"]})})]})}m.propTypes={category:g.string.isRequired,setCategory:g.func.isRequired};const v=s.div`
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
`;function R(){const[e,a]=c.useState(o.BODY_PARTS),n=f(),{subcategory:r}=E(),i=n.pathname==="/exercises"||n.pathname==="/exercises/";return t.jsxs(y,{children:[t.jsxs(v,{margin:!!r,children:[t.jsx(C,{text:i?"Exercises":r}),t.jsx(m,{setCategory:a,category:e})]}),t.jsx(j,{context:e})]})}export{R as Exercises};
