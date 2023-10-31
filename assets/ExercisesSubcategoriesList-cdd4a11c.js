import{n,L as j,P as o,j as t,a1 as y,a2 as v,r as a,E as $}from"./index-a24aba2f.js";const E=n.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 335px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 224px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 237px;
  }
`,P=n(j)`
  width: 100%;
`,L=n.div`
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
`,S=n.ul`
  color: white;
  text-align: center;
  z-index: 2;
`,z=n.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }
`,C=n.p`
  color: ${({theme:e})=>e.color.greyThird};
  font-size: 12px;
  line-height: 1.5;
`;function m({item:e}){function r(s){return s.charAt(0).toUpperCase()+s.slice(1)}return t.jsx(E,{children:t.jsx(P,{to:e.name,children:t.jsx(L,{img:e.imgURL,children:t.jsxs(S,{children:[t.jsx("li",{children:t.jsx(z,{children:r(e.name)})}),t.jsx("li",{children:t.jsx(C,{children:e.filter})})]})})})})}m.propTypes={ExercisesSubcategoriesItem:o.arrayOf(o.shape({name:o.string.isRequired,imgURL:o.string.isRequired,filter:o.string.isRequired}))};const R=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - 215px);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    min-height: calc(100vh - 264px);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    min-height: 0;
  }
`,I=n.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    row-gap: 32px;
    column-gap: 16px;
    flex-direction: row;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    column-gap: 15px;
  }
`,U=n.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,W=n.button`
  width: 14px;
  height: 14px;
  border: 1px solid
    ${({active:e,theme:r})=>e?r.color.hoverBorder:"rgba(239, 237, 232, 0.10)"};
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

  color: ${({active:e,theme:r})=>e?r.color.hoverBorder:"rgba(239, 237, 232, 0.10)"};
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
`;function D(){const e=y(),{data:r,isLoading:s,isError:b,error:f}=v(e),[l,x]=a.useState(0),[w,h]=a.useState(0),[c,p]=a.useState(10),k=i=>{x(i*c),h(i)};a.useEffect(()=>{x(0),h(0)},[e]),a.useEffect(()=>{const i=()=>{(e==="bodyPart"||e==="target")&&window.innerWidth<=375?p(10):window.innerWidth<1440?p(9):p(10)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[e]);const g=r?Math.ceil(r.length/c):0,u=r?r.slice(l,l+c):[];return t.jsxs(R,{children:[t.jsx(I,{children:u&&u.map(i=>t.jsx(m,{item:i},i._id))}),g>1&&t.jsx(U,{children:Array.from({length:g},(i,d)=>t.jsx("li",{children:t.jsx(W,{onClick:()=>k(d),disabled:l/c===d,active:w===d})},d))}),t.jsx($,{isLoading:s,isError:b,error:f})]})}export{D as ExercisesSubcategoriesList};
