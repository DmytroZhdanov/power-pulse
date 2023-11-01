import { ErrorMessage } from 'formik';

import Icon from 'components/common/IconsComp/Icon';
import BirthdayInput from 'components/data/DataBirthday/DataBirthdayInput';
import DataInput from 'components/data/DataInput/DataInput';
import { textInputData } from 'components/data/helper/inputData';
import {
  SuccessMessageDiv,
  TextLabel,
} from 'components/data/DataForm/DataForm.style';
import { ItemLi, ListUl } from './FirstStep.styled';

export function FirstStep({
  formik,
  selectedDate,
  setSelectedDate,
  isDateSelected,
  setIsDateSelected,
}) {
  return (
    <ListUl>
      {textInputData.map(input => (
        <ItemLi htmlFor={input.htmlFor} key={input.id}>
          <TextLabel>
            <DataInput
              {...input}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values[input.name]}
            />

            <span>{input.span}</span>

            {formik.touched[input.name] && !formik.errors[input.name] && (
              <SuccessMessageDiv>
                <Icon name={'checkmark'} />

                <p> {input.span} is valid</p>
              </SuccessMessageDiv>
            )}

            <ErrorMessage name={input.name} component="div" />
          </TextLabel>
        </ItemLi>
      ))}

      <ItemLi>
        <label>
          <BirthdayInput
            setIsDateSelected={setIsDateSelected}
            isDateSelected={isDateSelected}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </label>
      </ItemLi>
    </ListUl>
  );
}
