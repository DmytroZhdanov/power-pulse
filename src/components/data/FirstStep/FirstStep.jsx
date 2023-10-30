import { textInputData } from '../helper/inputData';
import DataInput from '../DataInput/DataInput';
import { FormContainer, TextLabel } from '../DataForm/DataForm.style';
// import { motion } from 'framer-motion';
import { FirstStepContainer } from './FirstStep.styled';
import { useState } from 'react';
import BirthdayInput from '../DataBirthdayInput/DataBirthdayInput';

export function FirstStep({ formik }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
          {/* {errors.birthday && touched.birthday && <p>{errors.birthday}</p>} */}
        </div>
      </FirstStepContainer>
    </FormContainer>
  );
}
