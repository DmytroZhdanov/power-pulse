import{d as e,r as a,j as i,e as p}from"./index-09dd7419.js";import{T as h}from"./TitlePage-e5728ba6.js";import{I as s}from"./Icon-a522985d.js";const m=e.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: black;

  @media (min-width: 768px) {
    width: 440px;
    gap: 32px;
  }
`,g=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media (min-width: 768px) {
    width: 166px;
  }
`,u=e.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;

  div {
  }

  img {
    display: block;
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    font-size: 14px;
    color: rgba(239, 237, 232, 30%);
  }

  button {
    position: absolute;
    left: 50%;
    bottom: -11px;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border-style: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;

    img {
    }
    button {
      width: 32px;
      height: 32px;
      bottom: -14px;
    }
  }
`,f=e.button``,t=e.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,n=e.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`,o=e.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,j=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${t} {
    text-align: center;
  }

  ${n} {
    color: #efede880;
  }

  @media (min-width: 768px) {
    gap: 8px;
  }
`,w=e.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,r=e.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 157px;
  padding: 14px 13px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    width: 214px;
    padding: 14px 18px;

    ${t} {
      line-height: calc(32 / 24);
    }
  }
`,b=e(r)`
  width: 165px;
  @media (min-width: 768px) {
    width: 209px;
  }
`,v=e.div`
  width: 100%;
  ${n} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media (min-width: 768px) {
    ${n} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,y=e.div`
  width: 100%;
  display: flex;
  justify-content: end;
`,S="https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg";function T(){const[d,z]=a.useState(S),[x,U]=a.useState("Anna Rybachok"),[l,$]=a.useState(0),[c,A]=a.useState(0);return i.jsxs(m,{children:[i.jsxs(g,{children:[i.jsxs(u,{children:[i.jsx("img",{src:d,alt:"Your avatar"}),i.jsx(f,{type:"button",children:i.jsx(s,{name:"add_avatar"})})]}),i.jsxs(j,{children:[i.jsx(t,{children:x}),i.jsx(n,{children:"User"})]})]}),i.jsxs(w,{children:[i.jsxs(r,{children:[i.jsxs(o,{children:[i.jsx(s,{name:"food"}),"Daily calorie intake"]}),i.jsx(t,{children:l})]}),i.jsxs(b,{children:[i.jsxs(o,{children:[i.jsx(s,{name:"dumbbell"}),"Daily norm of sports"]}),i.jsxs(t,{children:[c," min"]})]})]}),i.jsx(v,{children:i.jsxs(n,{children:[i.jsx(s,{name:"note"}),"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."]})}),i.jsx(y,{children:i.jsx(p,{})})]})}function k(){return i.jsx("div",{children:"UserForm component"})}function F(){return i.jsxs(i.Fragment,{children:[i.jsx(h,{text:"Profile Settings"}),i.jsx(T,{}),i.jsx(k,{})]})}export{F as Profile};
