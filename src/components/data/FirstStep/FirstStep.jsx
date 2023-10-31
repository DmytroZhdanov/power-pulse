import { textInputData } from '../helper/inputData';
import DataInput from '../DataInput/DataInput';
import {
  FormContainer,
  TextLabel,
  SuccessMessage,
} from '../DataForm/DataForm.style';
import { FirstStepContainer } from './FirstStep.styled';
import { ErrorMessage } from 'formik';
import Icon from '../../common/IconsComp/Icon';

import BirthdayInput from '../../data/DataBirthday/DataBirthdayInput';

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
            {formik.touched[input.name] && !formik.errors[input.name] && (
              <SuccessMessage>
                <Icon name={'checkmark'} />
                <p> {input.span} is valid</p>
              </SuccessMessage>
            )}
            <ErrorMessage name={input.name} component="div" />
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
