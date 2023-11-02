import{n as s,P as a,j as t,I as u}from"./index-aff1b4d6.js";import{E as m}from"./formik.esm-3cee484c.js";import{f as x,C as w}from"./Calendar-8803fcda.js";import{t as D,T as I,a as C,s as c,S as $}from"./inputData-e2f6a0fd.js";import{m as p}from"./motion-f0f44714.js";import"./tiny-warning.esm-c932d744.js";const F=s.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 14px;
  border: 1px solid ${({theme:e})=>e.color.border};
`,T=s.input`
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
`,S=s.p`
  color: ${({setColor:e,theme:i})=>e==="full"?i.color.white:"rgb(117 117 117)"};
  transition:
    color ${({theme:e})=>e.transition.main},
    transform ${({theme:e})=>e.transition.main};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,M=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${({setColor:e,theme:i})=>e==="full"?i.color.white:"rgb(117 117 117)"};
  transition:
    color ${({theme:e})=>e.transition.main},
    transform ${({theme:e})=>e.transition.main};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
  }
`;function f({selectedDate:e,setSelectedDate:i,setIsDateSelected:d,isDateSelected:r}){const o="Birthday",n=v=>{d(!0),i(v)},l=new Date,g=new Date(l.setFullYear(l.getFullYear()-18)),j=new Date(l.setFullYear(l.getFullYear()-100)),b=r?x(e,"yyyy-MM-dd"):o,y=r?x(e,"dd.MM.yyyy"):o;return t.jsxs(t.Fragment,{children:[t.jsx(T,{disabled:!0,type:"date",name:"birthday",defaultValue:b}),t.jsx(w,{maxDate:g,minDate:j,onChange:n,value:e,children:t.jsxs(F,{children:[t.jsx(S,{setColor:r?"full":"",children:y}),t.jsx(M,{setColor:r?"full":"",children:t.jsx(u,{name:"calendar-data"})})]})})]})}f.propTypes={selectedDate:a.instanceOf(Date).isRequired,setSelectedDate:a.func.isRequired,setIsDateSelected:a.func.isRequired,isDateSelected:a.bool.isRequired};const L=s.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 28px;
  margin-top: 50px;
  margin-bottom: 29px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 528px;
    justify-content: flex-start;
    gap: 14px;
    margin-top: 54px;
    margin-bottom: 32px;
  }
`,h=s.li`
  flex-basis: calc((100% - 10px) / 2);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-basis: 31%;
  }
`;function R({formik:e,selectedDate:i,setSelectedDate:d,isDateSelected:r,setIsDateSelected:o}){return t.jsxs(L,{children:[D.map(n=>t.jsx(h,{htmlFor:n.htmlFor,children:t.jsxs(I,{children:[t.jsx(C,{...n,onBlur:e.handleBlur,onChange:e.handleChange,value:e.values[n.name]}),t.jsx("span",{children:n.span}),e.touched[n.name]&&!e.errors[n.name]&&t.jsx(p.ul,{variants:c,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:t.jsxs($,{children:[t.jsx(u,{name:"checkmark"}),t.jsxs("p",{children:[" ",n.span," is valid"]})]})},e.values[n.name]),t.jsx(p.ul,{variants:c,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:t.jsx(m,{name:n.name,component:"div"})},e.errors[n.name])]})},n.id)),t.jsx(h,{children:t.jsxs("label",{children:[t.jsx(f,{setIsDateSelected:o,isDateSelected:r,selectedDate:i,setSelectedDate:d}),t.jsx(p.div,{variants:c,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:!r&&t.jsx(m,{name:"birthday",component:"div",style:{color:"#D80027",fontSize:"10px",marginLeft:"4px",paddingTop:"2px"}})},e.errors.birthday)]})})]})}R.propTypes={formik:a.object,selectedDate:a.instanceOf(Date),setSelectedDate:a.func,isDateSelected:a.bool,setIsDateSelected:a.func};export{R as FirstStep};
