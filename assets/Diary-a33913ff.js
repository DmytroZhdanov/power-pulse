import{n,j as e,f as r,P as h,r as j}from"./index-caebc7c7.js";import{T as w}from"./TitlePage-aa889883.js";import{C as b,f as v}from"./Calendar-aa5b99ec.js";const y=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,D=n.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,t=n.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${i=>i.highlighted?"#E6533C":"rgba(239, 237, 232, 0.05)"};
  border-radius: 12px;
  border: 1px solid
    ${i=>(i.highlighted,"rgba(239, 237, 232, 0.2)")};
  ${i=>i.caloriesOverConsumed&&"border-color: #E9101D"};
  ${i=>i.caloriesOverBurned&&"border-color: #3CBF61"};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 18px;
  }
`,s=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,a=n.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,d=n.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${i=>i.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,o=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,k=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,$=n.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,T=n.svg`
  width: 24px;
  height: 24px;
`,C=n.p`
  font-size: 14px;
  line-height: ${18/14};
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`;function E(){return e.jsxs(y,{children:[e.jsxs(D,{children:[e.jsxs(t,{highlighted:!0,children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx("use",{href:`${r}#food`})}),e.jsx(d,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(o,{children:"2200"})]}),e.jsxs(t,{highlighted:!0,children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx("use",{href:`${r}#dumbbell`})}),e.jsx(d,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(o,{children:"110 min"})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx("use",{href:`${r}#apple`})}),e.jsx(d,{children:"Calories consumed"})]}),e.jsx(o,{children:"707"})]}),e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx("use",{href:`${r}#fire`})}),e.jsx(d,{children:"Calories burned"})]}),e.jsx(o,{children:"855"})]}),e.jsxs(t,{caloriesOverConsumed:!0,children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx("use",{href:`${r}#bubble`})}),e.jsx(d,{children:"The rest of the calories"})]}),e.jsx(o,{children:"1493"})]}),e.jsxs(t,{caloriesOverBurned:!0,children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx("use",{href:`${r}#running`})}),e.jsx(d,{children:"The rest of sports"})]}),e.jsx(o,{children:"85 min"})]})]}),e.jsxs(k,{children:[e.jsx($,{children:e.jsx(T,{children:e.jsx("use",{href:`${r}#exclamation-mark`})})}),e.jsx(C,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}function P(){return e.jsx("div",{children:"ExercisesTable component"})}function S(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"DayExercises component"}),e.jsx(P,{})]})}function W(){return e.jsx("div",{children:"ProductsTable component"})}function z(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"DayProducts component"}),e.jsx(W,{})]})}const O=n.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,B=n.div`
  width: 125px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 161px;
  }

  div:hover > .calendar-svg,
  div:hover > .calendar-input-text {
    transform: scale(1.02);
    stroke: #efede8;
    color: #ef8964;
  }

  .calendar-svg {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .calendar-input-text {
    user-select: none;
    font-size: 18px;
    font-weight: 700;
    transition:
      color 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`,p=n.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: #efede8;
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: #ef8964;
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: rgba(239, 237, 232, 0.2);
  }
`;function m({selectedDate:i,setSelectedDate:x}){const l=new Date(2023,9,18,10,58),g=()=>{const c=new Date(i);c.setDate(i.getDate()-1),x(c)},f=()=>{const c=new Date(i);c.setDate(i.getDate()+1),x(c)},u=i.toDateString()===l.toDateString();return e.jsxs(O,{children:[e.jsx(B,{children:e.jsx(b,{inputText:v(i,"dd/MM/yyyy"),selected:i,onSelect:x,fromDate:l})}),e.jsxs("div",{children:[e.jsx(p,{disabled:u,onClick:g,children:e.jsx("svg",{children:e.jsx("use",{href:r+"#nav-arrow-left"})})}),e.jsx(p,{onClick:f,children:e.jsx("svg",{children:e.jsx("use",{href:r+"#nav-arrow-right"})})})]})]})}m.propTypes={selectedDate:h.instanceOf(Date).isRequired,setSelectedDate:h.func.isRequired};const R=n.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,I=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    & > :first-of-type {
      align-self: flex-end;
    }
    & > :last-of-type {
      align-self: flex-start;
    }
  }
`,F=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,q=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;function L(){const[i,x]=j.useState(new Date);return e.jsxs(R,{children:[e.jsxs(I,{children:[e.jsx(w,{text:"Diary"}),e.jsx(m,{selectedDate:i,setSelectedDate:x})]}),e.jsxs(F,{children:[e.jsx(E,{}),e.jsxs(q,{children:[e.jsx(z,{}),e.jsx(S,{})]})]})]})}export{L as Diary};
