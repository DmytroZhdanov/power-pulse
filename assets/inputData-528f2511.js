import{n as t,j as i}from"./index-03bacd2c.js";const h=t.div`
  position: relative;
  z-index: 2;
`,g=t.label`
  position: relative;
  display: inline-block;

  span {
    position: absolute;
    top: 0;
    left: 0;
    transition: all ${({theme:e})=>e.transition.main};
    opacity: 0;
    color: ${({theme:e})=>e.color.graySecond};

    font-size: 12px;
    line-height: calc(18 / 12);
  }

  input:focus + span,
  input:not(:placeholder-shown) + span {
    opacity: 1;
    transform: scale(0.75) translateY(-22px) translateX(0);
  }

  div {
    position: absolute;
    top: 102%;
    left: 4px;
    color: ${({theme:e})=>e.color.inputError};

    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    span {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input:focus + span,
    input:not(:placeholder-shown) + span {
      opacity: 1;
      transform: scale(0.75) translateY(-26px) translateX(0);
    }
  }
`,d=t.input`
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({theme:e})=>e.color.input};
  width: 100%;
  background-color: transparent;

  &:hover,
  &:focus {
    border: 1px solid ${({theme:e})=>e.color.orangeFirst};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,m=t.div`
  width: 140px;
  height: 10px;
  display: flex;
  align-content: center;
  /* margin: 5px 0; */
  svg {
    fill: green;
    width: 12px;
  }

  p {
    color: green;
    font-size: 11px;
  }
`,u=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 64px;
  margin-top: 28px;
  margin-bottom: 28px;

  legend {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.white};
  }

  label {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({theme:e})=>e.color.white};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;

    legend {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    label {
      margin-bottom: 8px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`,v=t.div`
  position: absolute;
  width: 150px;
  top: -10%;
  left: 0;
`,y=t.label`
  input {
    display: none;
  }

  span {
    flex: none;
    position: relative;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 2px solid ${({theme:e})=>e.color.input};

    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      width: 9px;
      height: 9px;
      opacity: 0;
      background-color: ${({theme:e})=>e.color.orangeSecond};

      transition: all ${({theme:e})=>e.transition.main};
    }
  }

  input:checked + span {
    border: 2px solid ${({theme:e})=>e.color.orangeSecond};
  }

  @media screen and (min-width: 768px) {
    span {
      padding: 2px;
      width: 24px;
      height: 24px;

      ::after {
        width: 12px;
        height: 12px;
      }
    }
  }
`,c=t.input`
  appearance: none;
  :checked ~ span::after {
    opacity: 1;
  }
`,b=({type:e,id:a,name:o,onChange:n,value:l,onBlur:r,placeholder:s,checked:p})=>i.jsxs(i.Fragment,{children:[e==="text"&&i.jsx(d,{id:a,type:e,name:o,value:l,onChange:n,onBlur:r,placeholder:s}),e==="radio"&&i.jsx(c,{id:a,type:e,name:o,value:l,onChange:n,checked:p})]}),f=[{htmlFor:"height",type:"text",id:"height",name:"height",placeholder:"Current Height",span:"Height"},{htmlFor:"currentWeight",type:"text",id:"currentWeight",name:"currentWeight",placeholder:"Current Weight",span:"Weight"},{htmlFor:"desiredWeight",type:"text",id:"desiredWeight",name:"desiredWeight",placeholder:"Desired Weight",span:"Weight"}],w=[{type:"radio",id:"blood_1",name:"blood",value:"1"},{type:"radio",id:"blood_2",name:"blood",value:"2"},{type:"radio",id:"blood_3",name:"blood",value:"3"},{type:"radio",id:"blood_4",name:"blood",value:"4"}],F=[{htmlFor:"genderMale",type:"radio",id:"genderMale",name:"sex",value:"male",label:"Male"},{htmlFor:"genderFemale",type:"radio",id:"genderFemale",name:"sex",value:"female",label:"Female"}],$=[{type:"radio",value:1,id:"levelActivity_1",name:"levelActivity",valueText:"Sedentary lifestyle (little or no physical activity)"},{type:"radio",value:2,id:"levelActivity_2",name:"levelActivity",valueText:"Light activity (light exercises/sports 1-3 days per week)"},{type:"radio",value:3,id:"levelActivity_3",name:"levelActivity",valueText:"Moderately active (moderate exercises/sports 3-5 days per week)"},{type:"radio",value:4,id:"levelActivity_4",name:"levelActivity",valueText:"Very active (intense exercises/sports 6-7 days per week)"},{type:"radio",value:5,id:"levelActivity_5",name:"levelActivity",valueText:"Extremely active (very strenuous exercises/sports and physical work)"}];export{h as D,v as E,u as R,m as S,g as T,b as a,y as b,F as c,$ as d,w as r,f as t};
