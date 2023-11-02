import{n as i,P as p,j as t,I as m}from"./index-ccfc92b3.js";import{E as y}from"./formik.esm-7a3e4cf5.js";import{f as c,C as b}from"./Calendar-41328102.js";import{t as w,T as v,a as I,S as C}from"./inputData-14676d8d.js";import"./tiny-warning.esm-c932d744.js";const D=i.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 14px;
  border: 1px solid ${({theme:e})=>e.color.border};
`,$=i.input`
  position: absolute;
  opacity: 0;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  clip-path: inset(100%);
  white-space: nowrap;
  clip: rect(0 0 0 0);
`,F=i.p`
  color: ${({setColor:e,theme:a})=>e==="full"?a.color.white:"rgb(117 117 117)"};
  transition:
    color ${({theme:e})=>e.transition.main},
    transform ${({theme:e})=>e.transition.main};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,M=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${({setColor:e,theme:a})=>e==="full"?a.color.white:"rgb(117 117 117)"};
  transition:
    color ${({theme:e})=>e.transition.main},
    transform ${({theme:e})=>e.transition.main};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
  }
`;function x({selectedDate:e,setSelectedDate:a,setIsDateSelected:l,isDateSelected:r}){const s="Birthday",n=j=>{l(!0),a(j)},o=new Date,h=new Date(o.setFullYear(o.getFullYear()-18)),u=new Date(o.setFullYear(o.getFullYear()-100)),g=r?c(e,"yyyy-MM-dd"):s,f=r?c(e,"dd.MM.yyyy"):s;return t.jsxs(t.Fragment,{children:[t.jsx($,{disabled:!0,type:"date",name:"birthday",defaultValue:g}),t.jsx(b,{maxDate:h,minDate:u,onChange:n,value:e,children:t.jsxs(D,{children:[t.jsx(F,{setColor:r?"full":"",children:f}),t.jsx(M,{setColor:r?"full":"",children:t.jsx(m,{name:"calendar-data"})})]})})]})}x.propTypes={selectedDate:p.instanceOf(Date).isRequired,setSelectedDate:p.func.isRequired};const T=i.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 14px;
  margin-top: 50px;
  margin-bottom: 29px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 528px;
    justify-content: flex-start;
    gap: 14px;
    margin-top: 54px;
    margin-bottom: 32px;
  }
`,d=i.li`
  flex-basis: calc((100% - 10px) / 2);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-basis: 31%;
  }
`;function R({formik:e,selectedDate:a,setSelectedDate:l,isDateSelected:r,setIsDateSelected:s}){return t.jsxs(T,{children:[w.map(n=>t.jsx(d,{htmlFor:n.htmlFor,children:t.jsxs(v,{children:[t.jsx(I,{...n,onBlur:e.handleBlur,onChange:e.handleChange,value:e.values[n.name]}),t.jsx("span",{children:n.span}),e.touched[n.name]&&!e.errors[n.name]&&t.jsxs(C,{children:[t.jsx(m,{name:"checkmark"}),t.jsxs("p",{children:[" ",n.span," is valid"]})]}),t.jsx(y,{name:n.name,component:"div"})]})},n.id)),t.jsx(d,{children:t.jsx("label",{children:t.jsx(x,{setIsDateSelected:s,isDateSelected:r,selectedDate:a,setSelectedDate:l})})})]})}export{R as FirstStep};
