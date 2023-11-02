import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import Icon from 'components/common/IconsComp/Icon';
import BirthdayInput from 'components/data/DataBirthday/DataBirthdayInput';
import DataInput from 'components/data/DataInput/DataInput';
import { textInputData } from 'components/data/helper/inputData';
import {
  SuccessMessageDiv,
  TextLabel,
} from 'components/data/DataForm/DataForm.style';
import { ItemLi, ListUl } from './FirstStep.styled';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../helper/motion';

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
              <motion.ul
                key={formik.values[input.name]}
                variants={slideInFromLeft}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
              >
                <SuccessMessageDiv>
                  <Icon name={'checkmark'} />

                  <p> {input.span} is valid</p>
                </SuccessMessageDiv>
              </motion.ul>
            )}
            <motion.ul
              key={formik.errors[input.name]}
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              <ErrorMessage name={input.name} component="div" />
            </motion.ul>
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

          <motion.div
            key={formik.errors.birthday}
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            {!isDateSelected && (
              <ErrorMessage
                name="birthday"
                component="div"
                style={{
                  color: '#D80027',
                  fontSize: '10px',
                  marginLeft: '4px',
                  paddingTop: '2px',
                }}
              />
            )}
          </motion.div>
        </label>
      </ItemLi>
    </ListUl>
  );
}

FirstStep.propTypes = {
  formik: PropTypes.shape({
    errors: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    touched: PropTypes.object,
    values: PropTypes.object.isRequired,
  }),
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  isDateSelected: PropTypes.bool,
  setIsDateSelected: PropTypes.func,
};
