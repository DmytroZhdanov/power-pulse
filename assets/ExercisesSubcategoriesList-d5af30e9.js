import{n as r,L as f,j as t,X as w,Y as j,r as o}from"./index-48028d6f.js";const v=r.li`
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
`,y=r(f)`
  width: 100%;
`,k=r.div`
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
`,L=r.div`
  color: white;
  text-align: center;
  z-index: 2;
`,E=r.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;
`,P=r.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;function S({it:e}){function s(i){return i.charAt(0).toUpperCase()+i.slice(1)}return t.jsx(v,{children:t.jsx(y,{to:e.name,children:t.jsx(k,{img:e.imgURL,children:t.jsxs(L,{children:[t.jsx(E,{children:s(e.name)}),t.jsx(P,{children:e.filter})]})})})})}const z=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`,C=r.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
    column-gap: 16px;
    flex-direction: row;
  }
`,I=r.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`,W=r.button`
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
`;function R(){const e=w(),{data:s,error:i,isLoading:h}=j(e),[d,x]=o.useState(0),[m,g]=o.useState(0),[a,l]=o.useState(10),b=n=>{x(n*a),g(n)};if(o.useEffect(()=>{x(0),g(0)},[e]),o.useEffect(()=>{const n=()=>{(e==="bodyPart"||e==="target")&&window.innerWidth<=375?l(10):window.innerWidth<=1439?l(9):l(10)};return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[e]),h)return t.jsx("div",{children:"Loading..."});if(i)return t.jsxs("div",{children:["Error: ",i.message]});const p=Math.ceil(s.length/a),u=s.slice(d,d+a);return t.jsxs(z,{children:[t.jsx(C,{children:u&&u.map(n=>t.jsx(S,{it:n},n._id))}),p>1&&t.jsx(I,{children:Array.from({length:p},(n,c)=>t.jsx("li",{children:t.jsx(W,{onClick:()=>b(c),disabled:d/a===c,active:m===c})},c))})]})}export{R as ExercisesSubcategoriesList};
