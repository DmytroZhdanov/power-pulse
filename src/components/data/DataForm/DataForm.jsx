import { useState } from 'react';
import Calendar from '../../Calendar/Calendar';
import { useFormik } from 'formik';
import DataBtns from '../DataBtns/DataBtns';
import {
  BirthdayContainer,
  FormContainer,
  RadioContainer1,
  RadioLabel,
  TextLabel,
} from './DataForm.style';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../redux/dataPage/dataSlice';
import { motion } from 'framer-motion';
import DataInput from '../DataInput/DataInput';
import {
  radioInputActivityData,
  radioInputBloodData,
  radioInputSexData,
  textInputData,
} from '../../data/helper/inputData';
import { validationSchema } from '../../data/helper/controlData';
import BasicModalWindow from '../../common/BasicModalWindow/BasicModalWindow';
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage';
import { userFormSchema } from '../../profile/UserForm/YupValidationForm';
import BirthdayInput from '../../profile/BirthdayInput/BirthdayInput';

export const slideInFromLeft = {
  hidden: { x: '-100%' },
  visible: { x: '0%' },
};

const DataForm = ({ stepValue }) => {
  const formDataSelector = useSelector(state => state.data);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showError, setShowError] = useState(false);
  const message = 'All fields required and contain valid data';

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      currentHeight: formDataSelector.currentHeight,
      currentWeight: formDataSelector.currentWeight,
      desiredWeight: formDataSelector.desiredWeight,
      birthday: formDataSelector.birthday,
      blood: formDataSelector.blood,
      gender: formDataSelector.gender,
      levelActivity: formDataSelector.levelActivity,
    },

    validationSchema: validationSchema,

    onSubmit: values => {
      alert(`Form submitted: ${JSON.stringify(values)}`);

      dispatch(
        updateData({
          currentHeight: '',
          currentWeight: '',
          desiredWeight: '',
          birthday: '',
          blood: '',
          gender: '',
          levelActivity: '',
        }),
      );
      // router.push('/anywhere');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {stepValue === 1 && (
        <FormContainer>
          <div style={{ display: 'flex', gap: '10px' }}>
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
                  <motion.div
                    variants={slideInFromLeft}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {input.errorText}
                  </motion.div>
                )}
              </TextLabel>
            ))}
          </div>

          <label>
            <BirthdayInput
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              value={formik.values.birthday}
            />
          </label>
          {/* <BirthdayContainer>
            <Calendar
              inputText={inputText}
              selected={selectedDate}
              onSelect={setSelectedDate}
              toDate={eighteenYearsAgo}
              fromDate={maximumAge}
              captionLayout="dropdown-buttons"
            />
          </BirthdayContainer> */}
        </FormContainer>
      )}
      {stepValue === 2 && (
        <div>
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
                  {input.value}
                </RadioLabel>
              ))}
            </fieldset>
          </RadioContainer1>
        </div>
      )}

      {showError && (
        <BasicModalWindow onClose={() => setShowError(false)}>
          <ErrorMessage message={message} />
        </BasicModalWindow>
      )}
      <DataBtns
        selectedDate={selectedDate}
        setShowError={setShowError}
        stepValue={stepValue}
        formik={formik}
      />
    </form>
  );
};

export default DataForm;
