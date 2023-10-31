import{n as i,o as Q,j as e,p as r,r as T,L as A,P as S,h as V,q as G,I as R}from"./index-327ef6c4.js";import{T as J}from"./TitlePage-6bfbe2d2.js";import{C as K,f as P}from"./Calendar-a21c55e4.js";import"./tiny-warning.esm-c932d744.js";const X=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Z=i.ul`
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
`,l=i.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${n=>n.highlighted?"#E6533C":"rgba(239, 237, 232, 0.05)"};
  border-radius: 12px;
  border: 1px solid
    ${n=>(n.highlighted,"rgba(239, 237, 232, 0.2)")};
  ${n=>n.caloriesOverConsumed&&"border-color: #E9101D"};
  ${n=>n.caloriesOverBurned&&"border-color: #3CBF61"};

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
`,p=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,c=i.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,j=i.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${n=>n.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,m=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,ee=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ie=i.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,ne=i.svg`
  width: 24px;
  height: 24px;
`,te=i.p`
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
`;function de(){const{data:n}=Q();return e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsxs(l,{highlighted:!0,children:[e.jsxs(p,{children:[e.jsx(c,{children:e.jsx("use",{href:`${r}#food`})}),e.jsx(j,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(m,{children:n||2200})]}),e.jsxs(l,{highlighted:!0,children:[e.jsxs(p,{children:[e.jsx(c,{children:e.jsx("use",{href:`${r}#dumbbell`})}),e.jsx(j,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(m,{children:"110 min"})]}),e.jsxs(l,{children:[e.jsxs(p,{children:[e.jsx(c,{children:e.jsx("use",{href:`${r}#apple`})}),e.jsx(j,{children:"Calories consumed"})]}),e.jsx(m,{children:"707"})]}),e.jsxs(l,{children:[e.jsxs(p,{children:[e.jsx(c,{children:e.jsx("use",{href:`${r}#fire`})}),e.jsx(j,{children:"Calories burned"})]}),e.jsx(m,{children:"855"})]}),e.jsxs(l,{caloriesOverConsumed:!0,children:[e.jsxs(p,{children:[e.jsx(c,{children:e.jsx("use",{href:`${r}#bubble`})}),e.jsx(j,{children:"The rest of the calories"})]}),e.jsx(m,{children:"1493"})]}),e.jsxs(l,{caloriesOverBurned:!0,children:[e.jsxs(p,{children:[e.jsx(c,{children:e.jsx("use",{href:`${r}#running`})}),e.jsx(j,{children:"The rest of sports"})]}),e.jsx(m,{children:"85 min"})]})]}),e.jsxs(ee,{children:[e.jsx(ie,{children:e.jsx(ne,{children:e.jsx("use",{href:`${r}#exclamation-mark`})})}),e.jsx(te,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}const se=i.div`
  @media screen and (max-width: 767px) {
    max-height: 1000px;
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
`,$=i.table`
border-spacing: 8px ;
border-collapse: separate;
@media screen and (max-width: 767px) {
  position: relative;
    height: 342px;
    width: 100%;
    &:last-child {
      height: 314px;
    }
  }
`,D=i.thead`
text-align: left;
`,B=i.tr`
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
    left: 8px;
    top: 248px;
  }
  &:nth-of-type(5) {
    top: 248px;
    left: 105px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80px;
  }
  &:nth-of-type(6) {
    top: 248px;
    left: 201px;
  }
}

@media screen and (min-width: 768px) {
  &:first-of-type {
    width: 90px;
  }
  &:nth-of-type(2) {
    width: 132px;
  }
  &:nth-of-type(3) {
    width: 128px;
  }
  &:nth-of-type(4) {
    width: 84px;
  }
  &:nth-of-type(5) {
    width: 78px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  &:nth-of-type(6) {
    width: 72px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 115px;
  }
  &:nth-of-type(2) {
    width: 157px;
  }
  &:nth-of-type(3) {
    width: 131px;
  }
  &:nth-of-type(4) {
    width: 106px;
  }
  &:nth-of-type(5) {
    width: 91px;
  }
  &:nth-of-type(6) {
    width: 82px;
  }
`,g=i.tr`
 
`,f=i.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 283px;
    left: 285px;
  }
  @media screen and (min-width: 768px) {
    padding-left:  4px
  }
  @media screen and (min-width: 1440px) {
    padding-left:  12px

  }
  `,w=i.svg`
  width: 20px;
  height: 20px;
`,C=i.tbody`

`,t=i.td`
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
    width: 297px;
  }
  &:nth-of-type(4) {
    top: 274px;
    left: 8px;
    width: 81px;
  }
  &:nth-of-type(5) {
    top: 274px;
    left: 105px;
    width: 80px;
  }
  &:nth-of-type(6) {
    top: 274px;
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
    width: 90px;
  }
  &:nth-of-type(2) {
    width: 132px;
  }
  &:nth-of-type(3) {
    width: 128px;
  }
  &:nth-of-type(4) {
    width: 84px;
  }
  &:nth-of-type(5) {
    width: 78px;
  }
  &:nth-of-type(6) {
    width: 72px;
  }
}
@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 115px;
  }
  &:nth-of-type(2) {
    width: 157px;
  }
  &:nth-of-type(3) {
    width: 131px;
  }
  &:nth-of-type(4) {
    width: 106px;
  }
  &:nth-of-type(5) {
    width: 91px;
  }
  &:nth-of-type(6) {
    width: 82px;
  }
  }
}

`;function re(){const[n,a]=T.useState(window.innerWidth>=768),h=()=>{a(window.innerWidth>=768)};return T.useEffect(()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]),e.jsx(e.Fragment,{children:e.jsx(se,{children:n?e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsxs(C,{children:[e.jsxs(g,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(g,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(g,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#delete`})})})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(w,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]})]})})})}const xe=i.div`
@media screen and (max-width: 767px) {
    max-height:1164px;
    padding: 16px ;
    padding-left: 8px ;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 16px 8px 8px ;
    max-height:234px
  }
  @media screen and (min-width: 1440px) {
    padding: 16px ;
  }
border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
`,he=i.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18/14};
`,ae=i.div`
@media screen and (max-width: 767px) {
    margin-bottom: 14px;
    padding-left: 8px ;
}

@media screen and (min-width: 768px)  {
      margin-bottom: 8px;
      padding-left: 8px ;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 ;
  }
display:flex;
justify-content: space-between;
align-items: center;
`,oe=i(A)`
display:flex;
align-items: center;
gap: 8px
`,le=i.p`
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
`,pe=i.svg`
width:16px;
height: 16px;`;function ce(){return e.jsxs(xe,{children:[e.jsxs(ae,{children:[e.jsx(he,{children:"Exercises"}),e.jsxs(oe,{to:"/exercises",children:[e.jsx(le,{children:"Add exercise"}),e.jsx(pe,{children:e.jsx("use",{href:`${r}#big_arrow`})})]})]}),e.jsx(re,{})]})}const je=i.div`
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
`,k=i.table`
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
`,E=i.thead`
text-align: left;
`,z=i.tr`
font-size: 12px;
  line-height: ${18/12};
  color: #ef8964;
`,x=i.th`
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
`,u=i.tr`
 
`,y=i.button`
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
  `,b=i.svg`
  width: 20px;
  height: 20px;
`,v=i.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${n=>n.Recom?"background-color: #419B09":"background-color: #E9101D"}
`,W=i.tbody`

`,d=i.td`
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

`;function me(){const[n,a]=T.useState(window.innerWidth>=768),h=()=>{a(window.innerWidth>=768)};return T.useEffect(()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]),e.jsx(e.Fragment,{children:e.jsx(je,{children:n?e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsxs(W,{children:[e.jsxs(u,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(v,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(y,{children:e.jsx(b,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(u,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(v,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(y,{children:e.jsx(b,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(u,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(v,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(y,{children:e.jsx(b,{children:e.jsx("use",{href:`${r}#delete`})})})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsx(W,{children:e.jsxs(u,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(v,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(y,{children:e.jsx(b,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsx(W,{children:e.jsxs(u,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(v,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(y,{children:e.jsx(b,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsx(W,{children:e.jsxs(u,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(v,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(y,{children:e.jsx(b,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]})]})})})}const ge=i.div`
@media screen and (max-width: 767px) {
    max-height:824px;
    padding: 16px ;
    padding-left: 8px ;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 16px 8px 8px ;
    max-height:234px
  }
  @media screen and (min-width: 1440px) {
    padding: 16px ;
  }
border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
`,fe=i.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18/14};
`,we=i.div`
@media screen and (max-width: 767px) {
    margin-bottom: 14px;
    padding-left: 8px ;
  }
  
  @media screen and (min-width: 768px)  {
    margin-bottom: 8px;
    padding-left: 8px ;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 ;
  }
display:flex;
justify-content: space-between;
align-items: center;
`,ue=i(A)`
display:flex;
align-items: center;
gap: 8px
`,ye=i.p`
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
`,be=i.svg`
width:16px;
height: 16px;`;function ve(){return e.jsxs(ge,{children:[e.jsxs(we,{children:[e.jsx(fe,{children:"Products"}),e.jsxs(ue,{to:"/Products",children:[e.jsx(ye,{children:"Add product"}),e.jsx(be,{children:e.jsx("use",{href:`${r}#big_arrow`})})]})]}),e.jsx(me,{})]})}const Te=i.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,$e=i.div`
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`,De=i.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Be=i.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Ce=i.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme:n})=>n.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`,I=i.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({theme:n})=>n.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: ${({theme:n})=>n.color.orangeSecond};
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: ${({theme:n})=>n.color.grayDisabled};
  }
`;function L({selectedDate:n,setSelectedDate:a}){const h=new Date(V(G)),M=["2023-10-09","2023-10-15","2023-10-23","2023-10-24"],q=()=>{const o=new Date(n);o.setDate(n.getDate()-1),a(o)},H=()=>{const o=new Date(n);o.setDate(n.getDate()+1),a(o)},O=n.toDateString()===h.toDateString(),F=n.toDateString()===new Date().toDateString(),N=({date:o,view:_})=>o.getTime()>h.getTime()||o.toDateString()===h.toDateString()||_!=="month"?!1:!M.includes(P(o,"yyyy-MM-dd")),Y=O||n.getTime()<h.getTime(),U=F||n.getTime()<h.getTime()&&n.toDateString()!==h.toDateString();return e.jsxs(Te,{children:[e.jsx($e,{children:e.jsx(K,{tileDisabled:N,onChange:a,value:n,maxDate:new Date,children:e.jsxs(De,{children:[e.jsxs(Be,{children:[" ",P(n,"dd/MM/yyyy")]}),e.jsx(Ce,{children:e.jsx(R,{name:"calendar"})})]})})}),e.jsxs("div",{children:[e.jsx(I,{disabled:Y,onClick:q,children:e.jsx(R,{name:"nav-arrow-left"})}),e.jsx(I,{disabled:U,onClick:H,children:e.jsx(R,{name:"nav-arrow-right"})})]})]})}L.propTypes={selectedDate:S.instanceOf(Date).isRequired,setSelectedDate:S.func.isRequired};const ke=i.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,Ee=i.div`
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
`,ze=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,We=i.div`
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
`;function Le(){const[n,a]=T.useState(new Date);return e.jsxs(ke,{children:[e.jsxs(Ee,{children:[e.jsx(J,{text:"Diary"}),e.jsx(L,{selectedDate:n,setSelectedDate:a})]}),e.jsxs(ze,{children:[e.jsx(de,{}),e.jsxs(We,{children:[e.jsx(ve,{}),e.jsx(ce,{})]})]})]})}export{Le as Diary};
