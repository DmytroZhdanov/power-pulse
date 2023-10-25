import{j as e,n as i,r as x}from"./index-6da7884e.js";import{T as y}from"./TitlePage-af4cbd20.js";import{B as m}from"./BasicModalWindow-0fc76d5e.js";function C(){return e.jsx("div",{children:"ProductsFilters component"})}const z=i.input`
  width: 287px;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;

  border: 1px solid #e6533c;
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,k=i.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,P=i.input`
  width: 287px;
  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  background: rgba(0, 0, 0, 0.5);
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,A=i.span`
  position: relative;
  right: 50px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`,B=i.div`
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,D=i.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,$=i.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,S=i.div``,T=i.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: #efede8;
  margin-right: 14px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: #e6533c;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    margin-right: 16px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,N=i.button`
  width: 121px;
  padding: 12px 36px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function I(t){const{onClose:o,addProdSuccess:n,calories:r}=t,[d,a]=x.useState(100),s="name of product",l=d*r,c=()=>{o(),n(l)};return e.jsxs(e.Fragment,{children:[e.jsx(z,{type:"text",value:s,readOnly:!0}),e.jsxs(k,{children:[e.jsx(P,{type:"number",value:d,onChange:h=>a(h.target.value)}),e.jsx(A,{children:"grams"})]}),e.jsxs(B,{children:[e.jsx(D,{children:"Calories:"}),e.jsx($,{children:l})]}),e.jsxs(S,{children:[e.jsx(T,{onClick:c,children:"Add to diary"}),e.jsx(N,{onClick:o,children:"Cancel"})]})]})}const _=i.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 22px 111px;
  }
`,F=i.div`
  background: url('/src/assets/images/Avocado/avocado.png') no-repeat center
    center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
`,L=i.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,M=i.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,E=i.p`
  margin-right: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,O=i.span`
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,R=i.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: #e6533c;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: calc(24 / 16);
  }
`,W=i.a`
  justify-content: center;
  display: flex;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);
`,V=i.p`
  margin-right: 8px;
`;function G(t){const{onClose:o,totalCalories:n}=t;return e.jsxs(_,{children:[e.jsx(F,{}),e.jsx(L,{children:"Well Done"}),e.jsxs(M,{children:[e.jsx(E,{children:"Calories:"}),e.jsx(O,{children:n})]}),e.jsx(R,{onClick:o,children:"Next product"}),e.jsxs(W,{href:"Diary",children:[e.jsx(V,{children:"To the diary"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod"})})]})]})}const H=i.li`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,q=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,J=i.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`,K=i.div`
  display: flex;
  align-items: center;
`,Q=i.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${t=>t.recommended?"#419B09":"#E9101D"};
`,U=i.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,X=i.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,Y=i.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`,Z=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,ee=i.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,ie=i.div`
  display: flex;
  gap: 16px;
`,g=i.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${t=>t.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,f=i.span`
  color: #efede8;
  padding-left: 8px;

  @media (min-width: 768px) {
    padding-left: 4px;
  }
`;function u({weight:t,calories:o,category:n,title:r}){const[a,s]=x.useState(!1),[l,c]=x.useState(!1),[h,w]=x.useState(null),b=()=>{s(!0)},p=()=>{s(!1),c(!1)},j=v=>{c(!0),w(v)};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsxs(q,{children:[e.jsx(J,{children:"DIET"}),e.jsxs(K,{children:[e.jsx(Q,{recommended:!0}),e.jsx(U,{children:"Recommended"}),e.jsxs(X,{onClick:b,children:[e.jsx(Y,{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#arrow-add-prod-orange"})})]})]})]}),e.jsxs(Z,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:"/src/assets/images/sprite/sprite.svg#run-man"})}),e.jsx(ee,{children:r})]}),e.jsxs(ie,{children:[e.jsxs(g,{children:["Calories:",e.jsx(f,{children:o})]}),e.jsxs(g,{category:!0,children:["Category:",e.jsx(f,{children:n})]}),e.jsxs(g,{children:["Weight:",e.jsx(f,{children:t})]})]})]}),a&&e.jsx(m,{onClose:p,children:e.jsx(I,{onClose:p,addProdSuccess:j,calories:o})}),l&&e.jsx(m,{onClose:p,children:e.jsx(G,{onClose:p,totalCalories:h})})]})}const te=i.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
    height: 660px;
    overflow-y: scroll;
  }
  @media (min-width: 1440px) {
    width: 850px;
    /* height: 487px; */
    height: ${window.innerHeight-313}px;
  }
`;function oe({products:t}){return e.jsxs(te,{children:[t.map(({_id:o,weight:n,calories:r,category:d,title:a,groupBloodNotAllowed:s})=>e.jsx(u,{title:a,weight:n,calories:r,category:d,groupBloodNotAllowed:s},o.$oid)),e.jsx(u,{})]})}const ne=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff590d"},weight:100,calories:232,category:"meat",title:"Lamb ham",groupBloodNotAllowed:{1:!1,2:!0,3:!1,4:!0}},{_id:{$oid:"5d51694902b2373622ff5b65"},weight:100,calories:112,category:"fish",title:"langoustine",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5726"},weight:100,calories:282,category:"dairy",title:"Cheese Artis for pan frying and grilling 45%",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}}];function ae(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Products page"}),e.jsx(y,{}),e.jsx(C,{}),e.jsx(oe,{products:ne})]})}export{ae as Products};
