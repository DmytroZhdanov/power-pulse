import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import {
  Form,
  FirstInfo,
  AddInfo,
  Data,
  Height,
  CurWeight,
  Calendar,
  DesWeight,
  Birthday,
  SecondInfo,
  Blood,
  Gender,
  RadioBox,
  Text,
  HealthInfo,
  Lifestyle,
} from './UserForm.styled';
import { userFormSchema } from './YupValidationForm';
import BirthdayInput from '../BirthdayInput/BirthdayInput';
import { useLazyRefreshQuery } from 'src/redux/api';

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
};

export default function UserForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [refresh, { data, isError }] = useLazyRefreshQuery();
  // console.log(data);
  // const { name, email } = data;

  useEffect(() => {
    const fetch = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetch();
  }, [refresh]);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      // name: 'Sophy',
      // email: 'dfe@ukr.net',
      height: '',
      currentWeight: '',
      desiredWeight: '',
      birthday: '',
      blood: '',
      sex: '',
      levelActivity: '',
    },
    validationSchema: userFormSchema,
    onSubmit,
  });

  // const handleSubmit = (values) => {
  //   console.log(values);
  // };
  return (
    <>
      {data && (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FirstInfo>
            <label>
              Basic info
              <input
                type="text"
                name="name"
                placeholder="name"
                value={data.user.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {errors.name && touched.name && <p>{errors.name}</p>} */}
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={data.user.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* {errors.email && touched.email && <p>{errors.email}</p>} */}
          </FirstInfo>
          <AddInfo>
            <Data>
              <Height htmlFor="height">
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
                {/* {errors.height && touched.height && <p>{errors.height}</p>} */}
              </Height>
              <CurWeight htmlFor="currentWeight">
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
                {/* {errors.curWeight && touched.curWeight && <p>{errors.curWeight}</p>} */}
              </CurWeight>
            </Data>
            <Calendar>
              <DesWeight htmlFor="desiredWeight">
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
                {/* {errors.desWeight && touched.desWeight && <p>{errors.desWeight}</p>} */}
              </DesWeight>

              <Birthday>
                <BirthdayInput
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </Birthday>
              {/* {errors.birthday && touched.birthday && <p>{errors.birthday}</p>} */}
            </Calendar>
          </AddInfo>
          <SecondInfo>
            <Text> Blood </Text>
            <HealthInfo>
              <Blood>
                <RadioBox
                  type="radio"
                  name="blood"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="one">1</label>

                <RadioBox
                  type="radio"
                  name="blood"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="two">2</label>

                <RadioBox
                  type="radio"
                  name="blood"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="three">3</label>

                <RadioBox
                  type="radio"
                  name="blood"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="four">4</label>
              </Blood>
              <Gender>
                <label htmlFor="gender">
                  <RadioBox
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                  />
                  Male
                </label>

                <label htmlFor="gender">
                  <RadioBox
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                  />
                  Female
                </label>
              </Gender>
            </HealthInfo>
            <Lifestyle>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                Sedentary lifestyle (little or no physical activity)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                Light activity (light exercises/sports 1-3 days per week)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                Very active (intense exercises/sports 6-7 days per week)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </Lifestyle>
          </SecondInfo>

          <button type="submit">Save</button>
        </Form>
      )}
    </>
  );
}

// const FieldAImg = ({ ...props }) => {
//   const [field, meta] = useField(props);
//   console.log(field, meta);

//   return (
//     <>
//       <input {...field} {...props} />
//       {meta.touched && meta.error ? <div>{meta.error}</div> : null}
//     </>
//   );
// };
