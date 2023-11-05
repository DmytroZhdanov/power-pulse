import{n as i,L as v,P as o,j as t,af as y,u as $,ag as P,r as s,s as E,ah as L}from"./index-942e5375.js";const S=i.li`
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
`,z=i(v)`
  width: 100%;
`,R=i.div`
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
`,C=i.ul`
  color: white;
  text-align: center;
  z-index: 2;
`,D=i.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
  }
`,I=i.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: 1.5;
`;function w({item:e}){return t.jsx(S,{children:t.jsx(z,{to:e.name,children:t.jsx(R,{img:e.imgURL,children:t.jsxs(C,{children:[t.jsx("li",{children:t.jsx(D,{className:"hoverText",children:e.name})}),t.jsx("li",{children:t.jsx(I,{children:e.filter})})]})})})})}w.propTypes={item:o.shape({_id:o.string.isRequired,name:o.string.isRequired,imgURL:o.string.isRequired,filter:o.string.isRequired})};const T=i.div`
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
`,U=i.ul`
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
`,W=i.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,q=i.button`
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
`;function _(){const e=y(),n=$(),{data:a,isLoading:l,isError:p,error:x}=P(e),[h,m]=s.useState(0),[k,u]=s.useState(0),[c,g]=s.useState(10);s.useEffect(()=>{n(E({isLoading:l,isError:p,error:x}))},[n,x,p,l]);const j=r=>{m(r*c),u(r)};s.useEffect(()=>{m(0),u(0)},[e]),s.useEffect(()=>{const r=()=>{(e==="bodyPart"||e==="target")&&window.innerWidth<=375?g(10):window.innerWidth<1440?g(9):g(10)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[e]);const b=a?Math.ceil(a.length/c):0,f=a?a.slice(h,h+c):[];return t.jsxs(T,{children:[t.jsx(U,{children:f&&f.map(r=>t.jsx(w,{item:r},r._id))}),b>1&&t.jsx(W,{children:Array.from({length:b},(r,d)=>t.jsx("li",{children:t.jsx(q,{onClick:()=>j(d),disabled:h/c===d,active:k===d})},d))}),t.jsx(L,{isLoading:l,isError:p,error:x})]})}export{_ as ExercisesSubcategoriesList};
