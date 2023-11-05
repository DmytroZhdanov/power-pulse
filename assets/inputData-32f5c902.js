import{n as i,P as t,j as a}from"./index-942e5375.js";const g={hidden:{x:"-100%"},visible:{x:"0%"}},m={visible:e=>({opacity:1,x:0,transition:{delay:e*.2}}),hidden:{opacity:0,x:-300}},v=i.div`
  position: relative;
  z-index: 2;
`,y=i.label`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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
`,c=i.input`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,b=i.div`
  width: 140px;
  height: 10px;
  display: flex;
  align-content: center;

  svg {
    fill: green;
    width: 12px;
  }

  p {
    color: green;
    font-size: 11px;
  }
`,f=i.div`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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
  fieldset {
    position: relative;
  }
`,w=i.div`
  position: absolute;
  width: 150px;
  top: -15px;
  left: 0;
`,$=i.label`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
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
`,h=i.input`
  appearance: none;

  :checked ~ span::after {
    opacity: 1;
  }
`;function x({type:e,id:o,name:n,onChange:r,value:l,onBlur:s,placeholder:p,checked:d}){return a.jsxs(a.Fragment,{children:[e==="text"&&a.jsx(c,{id:o,type:e,name:n,value:l,onChange:r,onBlur:s,placeholder:p}),e==="radio"&&a.jsx(h,{id:o,type:e,name:n,value:l,onChange:r,checked:d})]})}x.propTypes={type:t.oneOf(["text","radio"]).isRequired,id:t.string.isRequired,name:t.string.isRequired,onChange:t.func.isRequired,value:t.oneOfType([t.string,t.number]).isRequired,onBlur:t.func,placeholder:t.string,checked:t.bool};const k=[{htmlFor:"height",type:"text",id:"height",name:"height",placeholder:"Current Height",span:"Height"},{htmlFor:"currentWeight",type:"text",id:"currentWeight",name:"currentWeight",placeholder:"Current Weight",span:"Weight"},{htmlFor:"desiredWeight",type:"text",id:"desiredWeight",name:"desiredWeight",placeholder:"Desired Weight",span:"Weight"}],F=[{type:"radio",id:"blood_1",name:"blood",value:"1"},{type:"radio",id:"blood_2",name:"blood",value:"2"},{type:"radio",id:"blood_3",name:"blood",value:"3"},{type:"radio",id:"blood_4",name:"blood",value:"4"}],D=[{htmlFor:"genderMale",type:"radio",id:"genderMale",name:"sex",value:"male",label:"Male"},{htmlFor:"genderFemale",type:"radio",id:"genderFemale",name:"sex",value:"female",label:"Female"}],z=[{type:"radio",value:1,id:"levelActivity_1",name:"levelActivity",valueText:"Sedentary lifestyle (little or no physical activity)"},{type:"radio",value:2,id:"levelActivity_2",name:"levelActivity",valueText:"Light activity (light exercises/sports 1-3 days per week)"},{type:"radio",value:3,id:"levelActivity_3",name:"levelActivity",valueText:"Moderately active (moderate exercises/sports 3-5 days per week)"},{type:"radio",value:4,id:"levelActivity_4",name:"levelActivity",valueText:"Very active (intense exercises/sports 6-7 days per week)"},{type:"radio",value:5,id:"levelActivity_5",name:"levelActivity",valueText:"Extremely active (very strenuous exercises/sports and physical work)"}];export{v as D,w as E,f as R,b as S,y as T,x as a,$ as b,D as c,z as d,m as l,F as r,g as s,k as t};
