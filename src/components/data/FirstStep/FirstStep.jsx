import { ErrorMessage } from 'formik';
import Icon from '../../common/IconsComp/Icon';
import {
  FormContainer,
  SuccessMessage,
  TextLabel,
} from '../DataForm/DataForm.style';
import DataInput from '../DataInput/DataInput';
import { textInputData } from '../helper/inputData';
import { FirstStepContainer } from './FirstStep.styled';

import BirthdayInput from '../../data/DataBirthday/DataBirthdayInput';

export function FirstStep({ formik, selectedDate, setSelectedDate,isDateSelected,setIsDateSelected }) {
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
               setIsDateSelected={setIsDateSelected}
              isDateSelected={isDateSelected}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </label>
        </div>
      </FirstStepContainer>
    </FormContainer>
  );
}
