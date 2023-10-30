import{n,L as y,P as s,j as t,U as v,V as E,r as a,E as P}from"./index-db94a246.js";const k=n.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    max-width: 224px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 237px;
  }
`,L=n(y)`
  width: 100%;
`,S=n.div`
  position: relative;
  height: 206px;

  background-color: rgba(4, 4, 4, 0.5);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.5) 0%, rgba(4, 4, 4, 0.5) 100%),
    url(${e=>e.img}) center center no-repeat;

  background-size: cover;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,z=n.ul`
  color: white;
  text-align: center;
  z-index: 2;
`,C=n.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,R=n.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;function m({item:e}){function r(o){return o.charAt(0).toUpperCase()+o.slice(1)}return t.jsx(k,{children:t.jsx(L,{to:e.name,children:t.jsx(S,{img:e.imgURL,children:t.jsxs(z,{children:[t.jsx("li",{children:t.jsx(C,{children:r(e.name)})}),t.jsx("li",{children:t.jsx(R,{children:e.filter})})]})})})})}m.propTypes={ExercisesSubcategoriesItem:s.arrayOf(s.shape({name:s.string.isRequired,imgURL:s.string.isRequired,filter:s.string.isRequired}))};const U=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - 215px);
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 264px);
  }
  @media screen and (min-width: 1440px) {
    min-height: 0;
  }
`,I=n.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
    column-gap: 16px;
    flex-direction: row;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 15px;
  }
`,W=n.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,$=n.button`
  width: 14px;
  height: 14px;
  border: 1px solid
    ${e=>e.active?"#e6533c":"rgba(239, 237, 232, 0.10)"};
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin: 8px;
  background-color: black;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${e=>e.active?"#e6533c":"rgba(239, 237, 232, 0.10)"};
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  color: ${e=>e.active?"#e6533c":"rgba(239, 237, 232, 0.10)"};
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
`;function q(){const e=v(),{data:r,isLoading:o,isError:b,error:f}=E(e),[l,p]=a.useState(0),[w,g]=a.useState(0),[c,x]=a.useState(10),j=i=>{p(i*c),g(i)};a.useEffect(()=>{p(0),g(0)},[e]),a.useEffect(()=>{const i=()=>{(e==="bodyPart"||e==="target")&&window.innerWidth<=375?x(10):window.innerWidth<=1439?x(9):x(10)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[e]);const h=r?Math.ceil(r.length/c):0,u=r?r.slice(l,l+c):[];return t.jsxs(U,{children:[t.jsx(I,{children:u&&u.map(i=>t.jsx(m,{item:i},i._id))}),h>1&&t.jsx(W,{children:Array.from({length:h},(i,d)=>t.jsx("li",{children:t.jsx($,{onClick:()=>j(d),disabled:l/c===d,active:w===d})},d))}),t.jsx(P,{isLoading:o,isError:b,error:f})]})}export{q as ExercisesSubcategoriesList};
