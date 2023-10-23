import { useState } from 'react';
import Calendar from '../../Calendar/Calendar';
import { Field, Form, Formik, useFormik } from 'formik';
import DataBtns from '../DataBtns/DataBtns';
import {
  BirthdayInput,
  FormContainer,
  TextInput,
  TextLabel,
} from './DataForm.style';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../redux/dataPage/dataSlice';
const DataForm = ({ stepValue, setValueStep }) => {
  const formDataSelector = useSelector(state => state.data);
  const [selected, setSelected] = useState();
  const [formData, setFormData] = useState({
    currentHeight: formDataSelector.currentHeight,
    currentWeight: formDataSelector.currentWeight,
    desiredWeight: formDataSelector.desiredWeight,
    blood: formDataSelector.blood,
    gender: formDataSelector.gender,
    levelActivity: formDataSelector.levelActivity,
  });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: formData,

    onSubmit: values => {
      // dispatch(updateData(values));

      // localStorage.setItem('formData', JSON.stringify(values));
      alert(`Form submitted: ${JSON.stringify(values)}`);
    },
  });
  const handleNext = () => {
    dispatch(updateData(formData));
    setValueStep(stepValue + 1);
  };

  const handleBack = () => {
    setValueStep(stepValue - 1);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      {stepValue === 1 && (
        <FormContainer>
          <TextLabel htmlFor="currentHeight">
            <TextInput
              type="text"
              id="currentHeight"
              name="currentHeight"
              onChange={e => {
                formik.handleChange(e);
                setFormData({ ...formData, currentHeight: e.target.value });
              }}
              value={formik.values.currentHeight}
              onBlur={formik.handleBlur}
              placeholder="Current Height"
            />
            <span>Height</span>
          </TextLabel>

          <TextLabel htmlFor="currentWeight">
            <TextInput
              style={{ width: '172px' }}
              type="text"
              id="currentWeight"
              name="currentWeight"
              onChange={e => {
                formik.handleChange(e);
                setFormData({ ...formData, currentWeight: e.target.value });
              }}
              value={formik.values.currentWeight}
              onBlur={formik.handleBlur}
              placeholder="Current Weight"
            />
            <span>Weight</span>
          </TextLabel>

          <TextLabel htmlFor="desiredWeight">
            <TextInput
              style={{ width: '174px' }}
              type="text"
              id="desiredWeight"
              name="desiredWeight"
              onChange={e => {
                formik.handleChange(e);
                setFormData({ ...formData, desiredWeight: e.target.value });
              }}
              value={formik.values.desiredWeight}
              onBlur={formik.handleBlur}
              placeholder="Desired Weight"
            />
            <span>Weight</span>
          </TextLabel>
          <BirthdayInput>
            {/* <Calendar
              height="18px"
              width="18px"
              stroke="#EFEDE8"
              inputText="Birthday"
              selectedDate={selected}
              setSelectedDate={setSelected}
            /> */}
          </BirthdayInput>
        </FormContainer>
      )}
      {/* {stepValue === 2 && (
        <div>
          <RadioContainer1>
            <fieldset>
              <legend>Blood:</legend>
              <label>
                <RadioInput
                  id="blood"
                  type="radio"
                  name="Blood"
                  onChange={formik.handleChange}
                  value={formik.values.blood}
                />
                1
              </label>
              <label>
                <RadioInput
                  id="blood"
                  type="radio"
                  name="Blood"
                  onChange={formik.handleChange}
                  value={formik.values.blood}
                />
                2
              </label>
              <label>
                <RadioInput
                  id="blood"
                  type="radio"
                  name="Blood"
                  onChange={formik.handleChange}
                  value={formik.values.blood}
                />
                3
              </label>
            </fieldset>

            <fieldset>
              <legend>Sex:</legend>
              <label>
                <RadioInput
                  id="gender"
                  type="radio"
                  name="Gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                />
                Male
              </label>

              <label>
                <RadioInput
                  id="gender"
                  type="radio"
                  name="Gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                />
                Female
              </label>
            </fieldset>
          </RadioContainer1>
          <RadioContainer1>
            <fieldset>
              <legend>Level Activity:</legend>
              <label>
                <RadioInput
                  id="levelActivity"
                  type="radio"
                  name="Level Activity:"
                  onChange={formik.handleChange}
                  value={formik.values.levelActivity}
                />
                Sedentary lifestyle (little or no physical activity)
              </label>
              <label>
                <RadioInput
                  id="levelActivity"
                  type="radio"
                  name="Level Activity:"
                  onChange={formik.handleChange}
                  value={formik.values.levelActivity}
                />
                Light activity (light exercises/sports 1-3 days per week)
              </label>
              <label>
                <RadioInput
                  id="levelActivity"
                  type="radio"
                  name="Level Activity:"
                  onChange={formik.handleChange}
                  value={formik.values.levelActivity}
                />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>
              <label>
                <RadioInput
                  id="levelActivity"
                  type="radio"
                  name="Level Activity:"
                  onChange={formik.handleChange}
                  value={formik.values.levelActivity}
                />
                Very active (intense exercises/sports 6-7 days per week)
              </label>
              <label>
                <RadioInput
                  id="levelActivity"
                  type="radio"
                  name="Level Activity:"
                  onChange={formik.handleChange}
                  value={formik.values.levelActivity}
                />
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </fieldset>
          </RadioContainer1>
        </div>
      )} */}

      <DataBtns
        handleNext={handleNext}
        handleBack={handleBack}
        stepValue={stepValue}
      />
    </form>
  );
};

export default DataForm;
