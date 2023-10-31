import { RadioContainer1, RadioLabel } from '../DataForm/DataForm.style';
import DataInput from '../DataInput/DataInput';
import {
  radioInputActivityData,
  radioInputBloodData,
  radioInputSexData,
} from '../helper/inputData';
import { SecondStepContainer } from './SecondStep.styled';

export function SecondStep({ formik }) {
  return (
    <SecondStepContainer>
      <RadioContainer1>
        <fieldset>
          <legend>Blood:</legend>
          {radioInputBloodData.map(input => (
            <RadioLabel key={input.id}>
              <DataInput
                {...input}
                onChange={formik.handleChange}
                checked={formik.values.blood === input.value}
              />
              <span></span>
              {input.value}
            </RadioLabel>
          ))}
        </fieldset>

        <fieldset>
          <legend>Sex:</legend>
          {radioInputSexData.map(input => (
            <RadioLabel htmlFor={input.htmlFor} key={input.id}>
              <DataInput
                {...input}
                onChange={formik.handleChange}
                checked={formik.values.gender === input.value}
              />
              <span></span>
              {input.label}
            </RadioLabel>
          ))}
        </fieldset>
      </RadioContainer1>

      <RadioContainer1>
        <fieldset>
          <legend>Level Activity:</legend>
          {radioInputActivityData.map(input => (
            <RadioLabel htmlFor={input.htmlFor} key={input.id}>
              <DataInput
                {...input}
                onChange={formik.handleChange}
                checked={formik.values.levelActivity === input.value}
              />
              <span></span>
              {input.valueText}
            </RadioLabel>
          ))}
        </fieldset>
      </RadioContainer1>
    </SecondStepContainer>
  );
}
