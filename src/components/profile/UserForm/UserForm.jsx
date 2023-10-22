import { useFormik } from 'formik';

import {
  Form,
  BasInfo,
  FirstInfo,
  AddInfo,
  SecondInfo,
  RadioBtn,
  Text,
  HealthInfo,
  Lifestyle,
} from './UserForm.styled';
import { userFormSchema } from './YupValidationForm';
// import Calendar from '../../Calendar/Calendar';

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
};

export default function UserForm() {
  const {
    values,
    errors,
    touched,
    // isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      name: 'Sophy',
      email: 'dfe@ukr.net',
      height: '',
      curWeight: '',
      desWeight: '',
      birthday: '',
      // checked: false,
      // blood: false,
      // gender: false,
      // lifestyle: false,
    },
    validationSchema: userFormSchema,
    onSubmit,
  });

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <BasInfo>
        <FirstInfo>
          <label>
            Basic info
            <div>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>
          </label>
        </FirstInfo>
        <AddInfo>
          <div>
            <label htmlFor="height">
              Height
              <input
                type="number"
                name="height"
                placeholder="0"
                min="150"
                max="230"
                value={values.height}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.height && touched.height && <p>{errors.height}</p>}
            </label>
            <label htmlFor="currentWeight">
              Current Weight
              <input
                type="number"
                name="curWeight"
                placeholder="0"
                min="35"
                value={values.curWeight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.curWeight && touched.curWeight && (
                <p>{errors.curWeight}</p>
              )}
            </label>
          </div>
          <div>
            <label htmlFor="desiredWeight">
              Desired Weight
              <input
                type="number"
                name="desWeight"
                placeholder="0"
                min="35"
                value={values.desWeight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.desWeight && touched.desWeight && (
                <p>{errors.desWeight}</p>
              )}
            </label>
            <label htmlFor="birthday">
              Birthday
              <input
                type="date"
                name="birthday"
                value={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Icon name="calendar" />
              {errors.birthday && touched.birthday && <p>{errors.birthday}</p>}
            </label>
          </div>
        </AddInfo>
      </BasInfo>
      <SecondInfo>
        <HealthInfo>
          <Text> Blood </Text>

          <label htmlFor="one">
            <RadioBtn
              type="radio"
              name="blood"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            1
          </label>

          <label htmlFor="two">
            <RadioBtn
              type="radio"
              name="blood"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            2
          </label>
          <label htmlFor="three">
            <RadioBtn
              type="radio"
              name="blood"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            3
          </label>
          <label htmlFor="four">
            <RadioBtn
              type="radio"
              name="blood"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            4
          </label>

          <label htmlFor="gender">
            <RadioBtn type="radio" name="gender" onChange={handleChange} />
            Male
          </label>
          <label htmlFor="gender">
            <RadioBtn type="radio" name="gender" onChange={handleChange} />
            Female
          </label>
        </HealthInfo>
        <Lifestyle>
          <label>
            <RadioBtn
              type="radio"
              name="lifestyle"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Sedentary lifestyle (little or no physical activity)
          </label>
          <label>
            <RadioBtn
              type="radio"
              name="lifestyle"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Light activity (light exercises/sports 1-3 days per week)
          </label>
          <label>
            <RadioBtn
              type="radio"
              name="lifestyle"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Moderately active (moderate exercises/sports 3-5 days per week)
          </label>
          <label>
            <RadioBtn
              type="radio"
              name="lifestyle"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Very active (intense exercises/sports 6-7 days per week)
          </label>
          <label>
            <RadioBtn
              type="radio"
              name="lifestyle"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Extremely active (very strenuous exercises/sports and physical work)
          </label>
        </Lifestyle>
      </SecondInfo>

      <button type="submit">Save</button>
    </Form>
  );
}
