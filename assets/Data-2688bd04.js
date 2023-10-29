import{n as p,D as r,r as s,c as $,d as j,e as I,R as m,j as a,O as R,b as v,B as w,T as W,E as k}from"./index-82dd9861.js";const D=p.div`
  position: relative;
`,y=p.div`
  position: absolute;
  z-index: 2;
  bottom: -170px; // Will be amended after forms implementation
  display: flex;
  gap: 14px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    bottom: -110px; // Will be amended after forms implementation
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    bottom: 32px; // Will be amended after forms implementation
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    bottom: 0; // Will be amended after forms implementation
  }
`,f=p.div`
  width: 50px;
  height: 4px;
  border-radius: 2px;

  :nth-of-type(1) {
    background-color: ${({theme:e})=>e.color.hover};
    box-shadow: ${({theme:e})=>e.boxShadow.dataIndicator};
  }

  :nth-of-type(2) {
    background-color: ${({theme:e,step:t})=>t!==r.FIRST?e.color.hover:e.color.default};
    box-shadow: ${({theme:e,step:t})=>t!==r.FIRST?e.boxShadow.dataIndicator:"none"};
  }

  :nth-of-type(3) {
    background-color: ${({theme:e,step:t})=>t===r.THIRD?e.color.hover:e.color.default};
    box-shadow: ${({theme:e,step:t})=>t===r.THIRD?e.boxShadow.dataIndicator:"none"};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 80px;
  }
`,P={};function F(){var h;const[e,t]=s.useState(!1),[S,E]=s.useState(P),[l,T]=s.useState(),[g,u]=s.useState(!1),n=$(),{pathname:c}=j(),{data:i,isFetching:d,isError:x,error:o}=I();return s.useEffect(()=>{let b;return d?b=setTimeout(t,5e3,!0):t(!1),clearTimeout(b)},[d]),s.useEffect(()=>{u(x)},[x]),s.useEffect(()=>{if((o==null?void 0:o.status)===401&&n(`../${m.WELCOME}`),i!=null&&i.user.userParams)return n(`../${m.DIARY}`)},[i,o,n]),s.useEffect(()=>{T(c.split("/")[2]),c===`/${m.DATA}`&&n(`${r.FIRST}`)},[n,c]),a.jsxs(D,{children:[a.jsx(R,{context:[S,E]}),a.jsxs(y,{children:[a.jsx(f,{step:l}),a.jsx(f,{step:l}),a.jsx(f,{step:l})]}),d&&a.jsx(v,{}),d&&e&&a.jsx(w,{onClose:()=>t(!1),children:a.jsx(W,{})}),g&&a.jsx(w,{onClose:()=>u(!1),children:a.jsx(k,{message:(h=o==null?void 0:o.data)==null?void 0:h.message})})]})}export{F as Data};
