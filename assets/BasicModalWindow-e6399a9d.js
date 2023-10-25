import{n as t,r as c,k as l,j as o,f as p}from"./index-be352dae.js";const h=t.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,x=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  overflow-y: auto;
`,u=t.button`
  width: 26px;
  height: 26px;
  color: #efede8;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: absolute;
  top: 14px;
  right: 14px;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }
`,f=t.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
`;function w(i){const{onClose:e,children:d}=i,a=document.querySelector("#modal-root");return c.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()},s=r=>{document.body.style.overflow=r?"hidden":"auto"};return window.addEventListener("keydown",n),s(!0),()=>{window.removeEventListener("keydown",n),s(!1)}},[e]),l.createPortal(o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:e}),o.jsxs(x,{children:[o.jsx(u,{onClick:e,children:o.jsx(f,{width:26,height:26,children:o.jsx("use",{href:`${p}#close`})})}),d]})]}),a)}export{w as B};
