import{n as r,P as n,j as t,I as u,E as h}from"./index-942e5375.js";import{f as x,C as w}from"./Calendar-637e625f.js";import{t as D,T as I,a as C,s as c,S as $}from"./inputData-32f5c902.js";import{m as p}from"./motion-33755778.js";const F=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 14px;
  border: 1px solid ${({theme:e})=>e.color.border};
`,T=r.input`
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
`,S=r.p`
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
`,M=r.div`
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
`;function f({selectedDate:e,setSelectedDate:i,setIsDateSelected:d,isDateSelected:s}){const o="Birthday",a=v=>{d(!0),i(v)},l=new Date,g=new Date(l.setFullYear(l.getFullYear()-18)),j=new Date(l.setFullYear(l.getFullYear()-100)),b=s?x(e,"yyyy-MM-dd"):o,y=s?x(e,"dd.MM.yyyy"):o;return t.jsxs(t.Fragment,{children:[t.jsx(T,{disabled:!0,type:"date",name:"birthday",defaultValue:b}),t.jsx(w,{maxDate:g,minDate:j,onChange:a,value:e,children:t.jsxs(F,{children:[t.jsx(S,{setColor:s?"full":"",children:y}),t.jsx(M,{setColor:s?"full":"",children:t.jsx(u,{name:"calendar-data"})})]})})]})}f.propTypes={selectedDate:n.instanceOf(Date).isRequired,setSelectedDate:n.func.isRequired,setIsDateSelected:n.func.isRequired,isDateSelected:n.bool.isRequired};const R=r.ul`
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
`,m=r.li`
  flex-basis: calc((100% - 10px) / 2);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-basis: 31%;
  }
`;function q({formik:e,selectedDate:i,setSelectedDate:d,isDateSelected:s,setIsDateSelected:o}){return t.jsxs(R,{children:[D.map(a=>t.jsx(m,{htmlFor:a.htmlFor,children:t.jsxs(I,{children:[t.jsx(C,{...a,onBlur:e.handleBlur,onChange:e.handleChange,value:e.values[a.name]}),t.jsx("span",{children:a.span}),e.touched[a.name]&&!e.errors[a.name]&&t.jsx(p.ul,{variants:c,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:t.jsxs($,{children:[t.jsx(u,{name:"checkmark"}),t.jsxs("p",{children:[" ",a.span," is valid"]})]})},e.values[a.name]),t.jsx(p.ul,{variants:c,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:t.jsx(h,{name:a.name,component:"div"})},e.errors[a.name])]})},a.id)),t.jsx(m,{children:t.jsxs("label",{children:[t.jsx(f,{setIsDateSelected:o,isDateSelected:s,selectedDate:i,setSelectedDate:d}),t.jsx(p.div,{variants:c,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:!s&&t.jsx(h,{name:"birthday",component:"div",style:{color:"#D80027",fontSize:"10px",marginLeft:"4px",paddingTop:"2px"}})},e.errors.birthday)]})})]})}q.propTypes={formik:n.shape({errors:n.object,handleBlur:n.func,handleChange:n.func,touched:n.object,values:n.object.isRequired}),selectedDate:n.instanceOf(Date),setSelectedDate:n.func,isDateSelected:n.bool,setIsDateSelected:n.func};export{q as FirstStep};
