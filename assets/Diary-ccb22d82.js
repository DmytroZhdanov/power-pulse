import{n as i,i as B,j as e,k as r,r as v,L as z,P as T,e as E,l as P}from"./index-bbe383fe.js";import{T as W}from"./TitlePage-219bc12b.js";import{C as S,f as I}from"./Calendar-6b3865a3.js";const H=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,O=i.ul`
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
`,x=i.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${t=>t.highlighted?"#E6533C":"rgba(239, 237, 232, 0.05)"};
  border-radius: 12px;
  border: 1px solid
    ${t=>(t.highlighted,"rgba(239, 237, 232, 0.2)")};
  ${t=>t.caloriesOverConsumed&&"border-color: #E9101D"};
  ${t=>t.caloriesOverBurned&&"border-color: #3CBF61"};

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
`,a=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,h=i.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,o=i.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${t=>t.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,c=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Y=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,F=i.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,L=i.svg`
  width: 24px;
  height: 24px;
`,A=i.p`
  font-size: 14px;
  line-height: ${18/14};
  color: rgba(239, 237, 232, 0.3);

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`;function M(){const{data:t}=B();return e.jsxs(H,{children:[e.jsxs(O,{children:[e.jsxs(x,{highlighted:!0,children:[e.jsxs(a,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#food`})}),e.jsx(o,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(c,{children:t||2200})]}),e.jsxs(x,{highlighted:!0,children:[e.jsxs(a,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#dumbbell`})}),e.jsx(o,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(c,{children:"110 min"})]}),e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#apple`})}),e.jsx(o,{children:"Calories consumed"})]}),e.jsx(c,{children:"707"})]}),e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#fire`})}),e.jsx(o,{children:"Calories burned"})]}),e.jsx(c,{children:"855"})]}),e.jsxs(x,{caloriesOverConsumed:!0,children:[e.jsxs(a,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#bubble`})}),e.jsx(o,{children:"The rest of the calories"})]}),e.jsx(c,{children:"1493"})]}),e.jsxs(x,{caloriesOverBurned:!0,children:[e.jsxs(a,{children:[e.jsx(h,{children:e.jsx("use",{href:`${r}#running`})}),e.jsx(o,{children:"The rest of sports"})]}),e.jsx(c,{children:"85 min"})]})]}),e.jsxs(Y,{children:[e.jsx(F,{children:e.jsx(L,{children:e.jsx("use",{href:`${r}#exclamation-mark`})})}),e.jsx(A,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}function U(){return e.jsx("div",{children:"ExercisesTable component"})}function q(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"DayExercises component"}),e.jsx(U,{})]})}const N=i.div`
  @media screen and (max-width: 767px) {
    max-height: 762px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 178px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px
  }
  scroll-behavior: auto;
  overflow-y: auto;
  // overflow-y: hidden;
  overflow-x: hidden;
`,w=i.table`
border-spacing: 8px ;
border-collapse: separate;
@media screen and (max-width: 767px) {
  position: relative;
    height: 264px;
    width: 100%;
    &:last-child {
      height: 234px;
    }
  }
`,u=i.thead`
text-align: left;
`,b=i.tr`
font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,s=i.th`
@media screen and (max-width: 767px) {
  position: absolute; 
  &:nth-of-type(2) {
    top: 88px;
  }
  &:nth-of-type(3) {
    top: 168px;
  }
  &:nth-of-type(4) {
    top: 168px;
    left: 105px;
  }
  &:nth-of-type(5) {
    top: 168px;
    left: 201px;
  }
}

@media screen and (min-width: 768px) {
  &:first-of-type {
    width: 204px;
  }
  &:nth-of-type(2) {
    width: 128px;
  }
  &:nth-of-type(3) {
    width: 90px;
  }
  &:nth-of-type(4) {
    width: 90px;
  }
  &:nth-of-type(5) {
    width: 80px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 212px;
  }
  &:nth-of-type(2) {
    width: 166px;
  }
  &:nth-of-type(3) {
    width: 105px;
  }
  &:nth-of-type(4) {
    width: 105px;
  }
  &:nth-of-type(5) {
    width: 110px;
  }
`,l=i.tr`
 
`,p=i.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 203px;
    left: 285px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px
  }
  `,m=i.svg`
  width: 20px;
  height: 20px;
`,j=i.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${t=>t.Recom?"background-color: #419B09":"background-color: #E9101D"}
`,y=i.tbody`

`,n=i.td`
border-radius: 12px;
color: #efede8;
border: 1px solid rgba(239, 237, 232, 0.3);
@media screen and (max-width: 767px) {
  position: absolute; 
  padding: 10px 14px;
  font-size: 14px;
  line-height: ${18/14};
  &:first-of-type {
    top: 34px;
    width: 297px;
  }
  &:nth-of-type(2) {
    top: 114px;
    width: 297px;
  }
  &:nth-of-type(3) {
    top: 194px;
    width: 81px;
  }
  &:nth-of-type(4) {
    top: 194px;
    left: 105px;
    width: 80px;
  }
  &:nth-of-type(5) {
    top: 194px;
    left: 201px;
    width: 76px;
  }
}

@media screen and (min-width: 768px) {
  position: relative;
  font-size: 16px;
  line-height: ${24/16};
  padding: 8px 14px;
  &:first-of-type {
    width: 204px;
  }
  &:nth-of-type(2) {
    width: 128px;
  }
  &:nth-of-type(3) {
    width: 90px;
  }
  &:nth-of-type(4) {
    width: 90px;
  }
  &:nth-of-type(5) {
    width: 80px;
  }
}
@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 212px;
  }
  &:nth-of-type(2) {
    width: 166px;
  }
  &:nth-of-type(3) {
    width: 105px;
  }
  &:nth-of-type(4) {
    width: 105px;
  }
  &:nth-of-type(5) {
    width: 110px;
  }
  }
}

`;function Q(){const[t,d]=v.useState(window.innerWidth>=768),g=()=>{d(window.innerWidth>=768)};return v.useEffect(()=>(window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}),[]),e.jsx(e.Fragment,{children:e.jsx(N,{children:t?e.jsxs(w,{children:[e.jsx(u,{children:e.jsxs(b,{children:[e.jsx(s,{children:"Title"}),e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Calories"}),e.jsx(s,{children:"Weight"}),e.jsx(s,{children:"Recommend"})]})}),e.jsxs(y,{children:[e.jsxs(l,{children:[e.jsx(n,{children:"Bread Hercules grain"}),e.jsx(n,{children:"Cereals"}),e.jsx(n,{children:"289"}),e.jsx(n,{children:"100"}),e.jsxs(n,{children:[e.jsx(j,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(p,{children:e.jsx(m,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Bread Hercules grain"}),e.jsx(n,{children:"Cereals"}),e.jsx(n,{children:"289"}),e.jsx(n,{children:"100"}),e.jsxs(n,{children:[e.jsx(j,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(p,{children:e.jsx(m,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Bread Hercules grain"}),e.jsx(n,{children:"Cereals"}),e.jsx(n,{children:"289"}),e.jsx(n,{children:"100"}),e.jsxs(n,{children:[e.jsx(j,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(p,{children:e.jsx(m,{children:e.jsx("use",{href:`${r}#delete`})})})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(u,{children:e.jsxs(b,{children:[e.jsx(s,{children:"Title"}),e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Calories"}),e.jsx(s,{children:"Weight"}),e.jsx(s,{children:"Recommend"})]})}),e.jsx(y,{children:e.jsxs(l,{children:[e.jsx(n,{children:"Bread Hercules grain"}),e.jsx(n,{children:"Cereals"}),e.jsx(n,{children:"289"}),e.jsx(n,{children:"100"}),e.jsxs(n,{children:[e.jsx(j,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(p,{children:e.jsx(m,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs(w,{children:[e.jsx(u,{children:e.jsxs(b,{children:[e.jsx(s,{children:"Title"}),e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Calories"}),e.jsx(s,{children:"Weight"}),e.jsx(s,{children:"Recommend"})]})}),e.jsx(y,{children:e.jsxs(l,{children:[e.jsx(n,{children:"Bread Hercules grain"}),e.jsx(n,{children:"Cereals"}),e.jsx(n,{children:"289"}),e.jsx(n,{children:"100"}),e.jsxs(n,{children:[e.jsx(j,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(p,{children:e.jsx(m,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs(w,{children:[e.jsx(u,{children:e.jsxs(b,{children:[e.jsx(s,{children:"Title"}),e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Calories"}),e.jsx(s,{children:"Weight"}),e.jsx(s,{children:"Recommend"})]})}),e.jsx(y,{children:e.jsxs(l,{children:[e.jsx(n,{children:"Bread Hercules grain"}),e.jsx(n,{children:"Cereals"}),e.jsx(n,{children:"289"}),e.jsx(n,{children:"100"}),e.jsxs(n,{children:[e.jsx(j,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(p,{children:e.jsx(m,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]})]})})})}const V=i.div`
@media screen and (max-width: 767px) {
    max-height:824px;
    padding: 16px ;
    padding-left: 8px ;
  }
  @media screen and (min-width: 768px) {
    padding: 16px ;
    padding-bottom:8px;
    max-height:234px
  }
  @media screen and (min-width: 1440px) {
    padding: 16px ;
  }
border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
`,_=i.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18/14};
`,G=i.ul`
@media screen and (max-width: 767px) {
    margin-bottom: 14px;
    padding-left: 8px ;
}

@media screen and (min-width: 768px)  {
      margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 ;
  }
display:flex;
justify-content: space-between;
align-items: center;
`,J=i(z)`
display:flex;
align-items: center;
gap: 8px
`,K=i.p`
@media screen and (max-width: 767px) {
    font-size: 14px;
line-height: ${18/14};
}

@media screen and (min-width: 768px)  {
      font-size: 16px;
      line-height: ${24/16};
  }
color:#E6533C;
font-weight: 500;
`,X=i.svg`
width:16px;
height: 16px;`;function Z(){return e.jsxs(V,{children:[e.jsxs(G,{children:[e.jsx(_,{children:"Products"}),e.jsxs(J,{to:"/Products",children:[e.jsx(K,{children:"Add product"}),e.jsx(X,{children:e.jsx("use",{href:`${r}#big_arrow`})})]})]}),e.jsx(Q,{})]})}const ee=i.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,ie=i.div`
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
`,D=i.button`
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
`;function $({selectedDate:t,setSelectedDate:d}){const g=new Date(E(P)),k=()=>{const f=new Date(t);f.setDate(t.getDate()-1),d(f)},C=()=>{const f=new Date(t);f.setDate(t.getDate()+1),d(f)},R=t.toDateString()===g.toDateString();return e.jsxs(ee,{children:[e.jsx(ie,{children:e.jsx(S,{inputText:I(t,"dd/MM/yyyy"),selected:t,onSelect:d,fromDate:g})}),e.jsxs("div",{children:[e.jsx(D,{disabled:R,onClick:k,children:e.jsx("svg",{children:e.jsx("use",{href:r+"#nav-arrow-left"})})}),e.jsx(D,{onClick:C,children:e.jsx("svg",{children:e.jsx("use",{href:r+"#nav-arrow-right"})})})]})]})}$.propTypes={selectedDate:T.instanceOf(Date).isRequired,setSelectedDate:T.func.isRequired};const ne=i.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,te=i.div`
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
`,se=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,re=i.div`
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
`;function he(){const[t,d]=v.useState(new Date);return e.jsxs(ne,{children:[e.jsxs(te,{children:[e.jsx(W,{text:"Diary"}),e.jsx($,{selectedDate:t,setSelectedDate:d})]}),e.jsxs(se,{children:[e.jsx(M,{}),e.jsxs(re,{children:[e.jsx(Z,{}),e.jsx(q,{})]})]})]})}export{he as Diary};
