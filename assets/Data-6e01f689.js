import{n as i,D as a,r as d,j as e,O as s}from"./index-db94a246.js";const l=i.div`
  position: relative;
`,m=i.div`
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
`,r=i.div`
  width: 50px;
  height: 4px;
  border-radius: 2px;

  :nth-of-type(1) {
    background-color: ${({theme:t})=>t.color.hover};
    box-shadow: ${({theme:t})=>t.boxShadow.dataIndicator};
  }

  :nth-of-type(2) {
    background-color: ${({theme:t,step:o})=>o!==a.FIRST?t.color.hover:t.color.default};
    box-shadow: ${({theme:t,step:o})=>o!==a.FIRST?t.boxShadow.dataIndicator:"none"};
  }

  :nth-of-type(3) {
    background-color: ${({theme:t,step:o})=>o===a.THIRD?t.color.hover:t.color.default};
    box-shadow: ${({theme:t,step:o})=>o===a.THIRD?t.boxShadow.dataIndicator:"none"};
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 80px;
  }
`,c={};function x(){const[t,o]=d.useState(c),[n,p]=d.useState();return e.jsxs(l,{children:[e.jsx(s,{context:[t,o]}),e.jsxs(m,{children:[e.jsx(r,{step:n}),e.jsx(r,{step:n}),e.jsx(r,{step:n})]})]})}export{x as Data};
