import{n as d,D as a,r,c as m,d as p,R as b,j as o,O as x}from"./index-09f53457.js";const h=d.div`
  position: relative;
`,f=d.div`
  position: absolute;
  z-index: 2;
  bottom: -170px; // Will be amended after forms implementation
  display: flex;
  gap: 14px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.mobile}) {
    bottom: -110px; // Will be amended after forms implementation
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    bottom: 32px; // Will be amended after forms implementation
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    bottom: 0; // Will be amended after forms implementation
  }
`,s=d.div`
  width: 50px;
  height: 4px;
  border-radius: 2px;

  :nth-of-type(1) {
    background-color: ${({theme:t})=>t.color.hover};
    box-shadow: ${({theme:t})=>t.boxShadow.dataIndicator};
  }

  :nth-of-type(2) {
    background-color: ${({theme:t,step:e})=>e!==a.FIRST?t.color.hover:t.color.default};
    box-shadow: ${({theme:t,step:e})=>e!==a.FIRST?t.boxShadow.dataIndicator:"none"};
  }

  :nth-of-type(3) {
    background-color: ${({theme:t,step:e})=>e===a.THIRD?t.color.hover:t.color.default};
    box-shadow: ${({theme:t,step:e})=>e===a.THIRD?t.boxShadow.dataIndicator:"none"};
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 80px;
  }
`,u={};function S(){const[t,e]=r.useState(u),[n,c]=r.useState(),l=m(),{pathname:i}=p();return r.useEffect(()=>{c(i.split("/")[2]),i===`/${b.DATA}`&&l(`${a.FIRST}`)},[l,i]),o.jsxs(h,{children:[o.jsx(x,{context:[t,e]}),o.jsxs(f,{children:[o.jsx(s,{step:n}),o.jsx(s,{step:n}),o.jsx(s,{step:n})]})]})}export{S as Data};
