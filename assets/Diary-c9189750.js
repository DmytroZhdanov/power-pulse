import{n as i,o as F,j as e,p as r,r as T,L as S,P,h as M,q as Y,I as R}from"./index-200501a0.js";import{T as N}from"./TitlePage-c91c92c4.js";import{C as U,f as _}from"./Calendar-12806271.js";import"./tiny-warning.esm-c932d744.js";import"./setPrototypeOf-51e8cf87.js";const Q=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,V=i.ul`
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
`,o=i.li`
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
`,l=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,p=i.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,c=i.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${n=>n.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,j=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,G=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,J=i.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,K=i.svg`
  width: 24px;
  height: 24px;
`,X=i.p`
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
`;function Z(){const{data:n}=F();return e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsxs(o,{highlighted:!0,children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${r}#food`})}),e.jsx(c,{highlighted:!0,children:"Daily calory intake"})]}),e.jsx(j,{children:n||2200})]}),e.jsxs(o,{highlighted:!0,children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${r}#dumbbell`})}),e.jsx(c,{highlighted:!0,children:"Daily norm of sports"})]}),e.jsx(j,{children:"110 min"})]}),e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${r}#apple`})}),e.jsx(c,{children:"Calories consumed"})]}),e.jsx(j,{children:"707"})]}),e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${r}#fire`})}),e.jsx(c,{children:"Calories burned"})]}),e.jsx(j,{children:"855"})]}),e.jsxs(o,{caloriesOverConsumed:!0,children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${r}#bubble`})}),e.jsx(c,{children:"The rest of the calories"})]}),e.jsx(j,{children:"1493"})]}),e.jsxs(o,{caloriesOverBurned:!0,children:[e.jsxs(l,{children:[e.jsx(p,{children:e.jsx("use",{href:`${r}#running`})}),e.jsx(c,{children:"The rest of sports"})]}),e.jsx(j,{children:"85 min"})]})]}),e.jsxs(G,{children:[e.jsx(J,{children:e.jsx(K,{children:e.jsx("use",{href:`${r}#exclamation-mark`})})}),e.jsx(X,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}const ee=i.div`
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
`,m=i.tr`
 
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
  `,g=i.svg`
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

`;function ie(){const[n,h]=T.useState(window.innerWidth>=768),a=()=>{h(window.innerWidth>=768)};return T.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),e.jsx(e.Fragment,{children:e.jsx(ee,{children:n?e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsxs(C,{children:[e.jsxs(m,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(g,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(m,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(g,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(m,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(g,{children:e.jsx("use",{href:`${r}#delete`})})})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(g,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(g,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs($,{children:[e.jsx(D,{children:e.jsxs(B,{children:[e.jsx(s,{children:"Body Part"}),e.jsx(s,{children:"Equipment"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Burned Calories"}),e.jsx(s,{children:"Time"})]})}),e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(t,{children:"Waist"}),e.jsx(t,{children:"Body weight"}),e.jsx(t,{children:"3/4 sit-up"}),e.jsx(t,{children:"Abs"}),e.jsx(t,{children:"220"}),e.jsx(t,{children:"60"}),e.jsx("td",{children:e.jsx(f,{children:e.jsx(g,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]})]})})})}const ne=i.div`
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
`,te=i.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18/14};
`,de=i.div`
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
`,se=i(S)`
display:flex;
align-items: center;
gap: 8px
`,re=i.p`
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
`,xe=i.svg`
width:16px;
height: 16px;`;function he(){return e.jsxs(ne,{children:[e.jsxs(de,{children:[e.jsx(te,{children:"Exercises"}),e.jsxs(se,{to:"/exercises",children:[e.jsx(re,{children:"Add exercise"}),e.jsx(xe,{children:e.jsx("use",{href:`${r}#big_arrow`})})]})]}),e.jsx(ie,{})]})}const ae=i.div`
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
`,w=i.tr`
 
`,u=i.button`
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
  `,y=i.svg`
  width: 20px;
  height: 20px;
`,b=i.span`
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

`;function oe(){const[n,h]=T.useState(window.innerWidth>=768),a=()=>{h(window.innerWidth>=768)};return T.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),e.jsx(e.Fragment,{children:e.jsx(ae,{children:n?e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsxs(W,{children:[e.jsxs(w,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(b,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(u,{children:e.jsx(y,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(w,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(b,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(u,{children:e.jsx(y,{children:e.jsx("use",{href:`${r}#delete`})})})})]}),e.jsxs(w,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(b,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(u,{children:e.jsx(y,{children:e.jsx("use",{href:`${r}#delete`})})})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsx(W,{children:e.jsxs(w,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(b,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(u,{children:e.jsx(y,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsx(W,{children:e.jsxs(w,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(b,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(u,{children:e.jsx(y,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]}),e.jsxs(k,{children:[e.jsx(E,{children:e.jsxs(z,{children:[e.jsx(x,{children:"Title"}),e.jsx(x,{children:"Category"}),e.jsx(x,{children:"Calories"}),e.jsx(x,{children:"Weight"}),e.jsx(x,{children:"Recommend"})]})}),e.jsx(W,{children:e.jsxs(w,{children:[e.jsx(d,{children:"Bread Hercules grain"}),e.jsx(d,{children:"Cereals"}),e.jsx(d,{children:"289"}),e.jsx(d,{children:"100"}),e.jsxs(d,{children:[e.jsx(b,{Recom:!0}),"Yes"]}),e.jsx("td",{children:e.jsx(u,{children:e.jsx(y,{children:e.jsx("use",{href:`${r}#delete`})})})})]})})]})]})})})}const le=i.div`
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
`,pe=i.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18/14};
`,ce=i.div`
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
`,je=i(S)`
display:flex;
align-items: center;
gap: 8px
`,me=i.p`
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
`,fe=i.svg`
width:16px;
height: 16px;`;function ge(){return e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(pe,{children:"Products"}),e.jsxs(je,{to:"/Products",children:[e.jsx(me,{children:"Add product"}),e.jsx(fe,{children:e.jsx("use",{href:`${r}#big_arrow`})})]})]}),e.jsx(oe,{})]})}const we=i.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,ue=i.div`
  width: 125px;

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`,ye=i.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,be=i.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ve=i.div`
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
`;function A({selectedDate:n,setSelectedDate:h}){const a=new Date(M(Y)),L=()=>{const v=new Date(n);v.setDate(n.getDate()-1),h(v)},q=()=>{const v=new Date(n);v.setDate(n.getDate()+1),h(v)},H=n.toDateString()===a.toDateString(),O=n.toDateString()===new Date().toDateString();return e.jsxs(we,{children:[e.jsx(ue,{children:e.jsx(U,{onChange:h,value:n,minDate:a,maxDate:new Date,children:e.jsxs(ye,{children:[e.jsxs(be,{children:[" ",_(n,"dd/MM/yyyy")]}),e.jsx(ve,{children:e.jsx(R,{name:"calendar"})})]})})}),e.jsxs("div",{children:[e.jsx(I,{disabled:H,onClick:L,children:e.jsx(R,{name:"nav-arrow-left"})}),e.jsx(I,{disabled:O,onClick:q,children:e.jsx(R,{name:"nav-arrow-right"})})]})]})}A.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const Te=i.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,$e=i.div`
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
`,De=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Be=i.div`
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
`;function Re(){const[n,h]=T.useState(new Date);return e.jsxs(Te,{children:[e.jsxs($e,{children:[e.jsx(N,{text:"Diary"}),e.jsx(A,{selectedDate:n,setSelectedDate:h})]}),e.jsxs(De,{children:[e.jsx(Z,{}),e.jsxs(Be,{children:[e.jsx(ge,{}),e.jsx(he,{})]})]})]})}export{Re as Diary};
