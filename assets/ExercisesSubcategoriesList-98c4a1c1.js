import{n as i,L as j,P as o,j as t,ab as v,ac as y,r as s,E as $}from"./index-810ba1c4.js";const P=i.li`
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
`,E=i(j)`
  width: 100%;
`,L=i.div`
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

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`,z=i.ul`
  color: white;
  text-align: center;
  z-index: 2;
`,R=i.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }
`,S=i.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: 1.5;
`;function m({item:e}){return t.jsx(P,{children:t.jsx(E,{to:e.name,children:t.jsx(L,{img:e.imgURL,children:t.jsxs(z,{children:[t.jsx("li",{children:t.jsx(R,{className:"hoverText",children:e.name})}),t.jsx("li",{children:t.jsx(S,{children:e.filter})})]})})})})}m.propTypes={item:o.shape({_id:o.string.isRequired,name:o.string.isRequired,imgURL:o.string.isRequired,filter:o.string.isRequired})};const C=i.div`
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
`,I=i.ul`
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
`,T=i.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,U=i.button`
  width: 14px;
  height: 14px;
  border: 1px solid
    ${({active:e,theme:n})=>e?n.color.hoverBorder:"rgba(239, 237, 232, 0.10)"};
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

  color: ${({active:e,theme:n})=>e?n.color.hoverBorder:"rgba(239, 237, 232, 0.10)"};
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
`;function q(){const e=v(),{data:n,isLoading:u,isError:b,error:f}=y(e),[d,p]=s.useState(0),[w,x]=s.useState(0),[a,l]=s.useState(10),k=r=>{p(r*a),x(r)};s.useEffect(()=>{p(0),x(0)},[e]),s.useEffect(()=>{const r=()=>{(e==="bodyPart"||e==="target")&&window.innerWidth<=375?l(10):window.innerWidth<1440?l(9):l(10)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[e]);const h=n?Math.ceil(n.length/a):0,g=n?n.slice(d,d+a):[];return t.jsxs(C,{children:[t.jsx(I,{children:g&&g.map(r=>t.jsx(m,{item:r},r._id))}),h>1&&t.jsx(T,{children:Array.from({length:h},(r,c)=>t.jsx("li",{children:t.jsx(U,{onClick:()=>k(c),disabled:d/a===c,active:w===c})},c))}),t.jsx($,{isLoading:u,isError:b,error:f})]})}export{q as ExercisesSubcategoriesList};
