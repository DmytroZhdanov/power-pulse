import { textInputData } from '../helper/inputData';
import DataInput from '../DataInput/DataInput';
import { FormContainer, TextLabel } from '../DataForm/DataForm.style';
import { FirstStepContainer } from './FirstStep.styled';

import BirthdayInput from '../../profile/BirthdayInput/BirthdayInput';

export function FirstStep({ formik, selectedDate, setSelectedDate }) {


  return (
    <FormContainer>
      <FirstStepContainer>
        {textInputData.map(input => (
          <TextLabel htmlFor={input.htmlFor} key={input.id}>
            <DataInput
              {...input}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values[input.name]}
            />
            <span>{input.span}</span>
            {formik.touched[input.name] && formik.errors[input.name] && (
              <div>{input.errorText}</div>
            )}
          </TextLabel>
        ))}
        <div>
          <label>
            <BirthdayInput
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </label>
        </div>
      </FirstStepContainer>
    </FormContainer>
  );
}
