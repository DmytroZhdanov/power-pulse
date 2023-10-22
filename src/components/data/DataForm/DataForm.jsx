import { useState } from 'react';
import Calendar from '../../Calendar/Calendar';

import { Field, Form, Formik, useFormik } from 'formik';
import DataBtns from '../DataBtns/DataBtns';
import {
  BirthdayInput,
  FormContainer,
  RadioContainer1,
  RadioInput,
  TextInput,
  TextLabel,
} from './DataForm.style';

const DataForm = ({ stepValue, setValueStep }) => {
  const [selected, setSelected] = useState();
  const handleNext = () => {
    setValueStep(stepValue + 1);
  };

  const handleBack = () => {
    setValueStep(stepValue - 1);
  };

  return (
    <Formik
      initialValues={{
        currentHeight: '',
        currentWeight: '',
        desiredWeight: '',
        // blood: "",
        // gender: "",
        // levelActivity: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(`Form submitted: ${JSON.stringify(values)}`);
        console.log('Form submitted', values);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit} id="form">
          {stepValue === 1 && (
            <FormContainer>
              <TextLabel htmlFor="currentHeight">
                <TextInput
                  type="text"
                  id="currentHeight"
                  name="currentHeight"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  placeholder="Desired Weight"
                />
                <span>Weight</span>
              </TextLabel>
              <BirthdayInput>
                <Calendar
                  inputText="Birthday"
                  selectedDate={selected}
                  setSelectedDate={setSelected}
                />
              </BirthdayInput>
              {/* <Calendar
                inputText="Birthday"
                selectedDate={selected}
                setSelectedDate={setSelected}
              /> */}
            </FormContainer>
          )}
          {stepValue === 2 && (
            <div>
              <RadioContainer1>
                <fieldset>
                  <legend>Blood:</legend>
                  <label>
                    <RadioInput type="radio" name="Blood" value="option1" />1
                  </label>
                  <label>
                    <RadioInput type="radio" name="Blood" value="option2" />2
                  </label>
                  <label>
                    <RadioInput type="radio" name="Blood" value="option3" />3
                  </label>
                  {/* <Field type="radio" name="Blood" value="option1" />
                  <Field type="radio" name="Blood" value="option2" />
                  <Field type="radio" name="Blood" value="option3" /> */}
                </fieldset>

                <fieldset>
                  <legend>Sex:</legend>
                  <label>
                    <RadioInput type="radio" name="Gender" value="male" />
                    Male
                  </label>

                  <label>
                    <RadioInput type="radio" name="Gender" value="female" />
                    Female
                  </label>
                  {/* <Field type="radio" name="Gender" value="male" />
                  <Field type="radio" name="Gender" value="female" /> */}
                </fieldset>
              </RadioContainer1>
              <RadioContainer1>
                <fieldset>
                  <legend>Level Activity:</legend>
                  <label>
                    <RadioInput
                      type="radio"
                      name="Level Activity:"
                      value="Sedentary lifestyle (little or no physical activity)"
                    />
                    Sedentary lifestyle (little or no physical activity)
                  </label>
                  <label>
                    <RadioInput
                      type="radio"
                      name="Level Activity:"
                      value="Light activity (light exercises/sports 1-3 days per week)"
                    />
                    Light activity (light exercises/sports 1-3 days per week)
                  </label>
                  <label>
                    <RadioInput
                      type="radio"
                      name="Level Activity:"
                      value="Moderately active (moderate exercises/sports 3-5 days per week)"
                    />
                    Moderately active (moderate exercises/sports 3-5 days per
                    week)
                  </label>
                  <label>
                    <RadioInput
                      type="radio"
                      name="Level Activity:"
                      value="Very active (intense exercises/sports 6-7 days per week)"
                    />
                    Very active (intense exercises/sports 6-7 days per week)
                  </label>
                  <label>
                    <RadioInput
                      type="radio"
                      name="Level Activity:"
                      value="Extremely active (very strenuous exercises/sports and physical work)"
                    />
                    Extremely active (very strenuous exercises/sports and
                    physical work)
                  </label>
                  {/* <Field
                    type="radio"
                    name="Level Activity:"
                    value="Sedentary lifestyle (little or no physical activity)"
                  />
                  <Field
                    type="radio"
                    name="Level Activity:"
                    value="Light activity (light exercises/sports 1-3 days per week)"
                  />
                  <Field
                    type="radio"
                    name="Level Activity:"
                    value="Moderately active (moderate exercises/sports 3-5 days per week)"
                  />
                  <Field
                    type="radio"
                    name="Level Activity:"
                    value="Very active (intense exercises/sports 6-7 days per week)"
                  />
                  <Field
                    type="radio"
                    name="Level Activity:"
                    value="Extremely active (very strenuous exercises/sports and physical work)"
                  /> */}
                </fieldset>
              </RadioContainer1>
            </div>
          )}
          <DataBtns
            handleNext={handleNext}
            handleBack={handleBack}
            stepValue={stepValue}
          />
        </Form>
      )}
    </Formik>
  );
};

export default DataForm;
