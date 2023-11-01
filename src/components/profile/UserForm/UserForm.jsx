import { Formik, useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { userFormSchema } from './YupValidationForm';
import BirthdayInput from '../BirthdayInput/BirthdayInput';
import { selectUserName } from '../../../redux/auth/selectors';
import {
  useLazyRefreshQuery,
  useUpdateUserParamsMutation,
  useUpdateUserNameMutation,
  useLazyFetchUserParamsQuery,
} from 'src/redux/api';

import {
  Forms,
  FirstInfo,
  AddInfo,
  Data,
  Height,
  CurWeight,
  CalendarI,
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
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

export default function UserForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [fetchUserParams, { data }] = useLazyFetchUserParamsQuery();
  const [updateUserParams] = useUpdateUserParamsMutation();
  const userName = useSelector(selectUserName);
  // const userEmail = useSelector();
  const [updatedUserName, setUpdatedUserName] = useState(userName);
  const [userData, setUserData] = useState();
  // console.log(userName);
  console.log(userData);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchUserParams();
        const userParams = data.user.userParams;
        console.log(userParams);
        setUserData(userParams);
        setValues({ userData });
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetch();
  }, [fetchUserParams]);

  // const initialValues = {
  //   height: '',
  //   currentWeight: '',
  //   desiredWeight: '',
  //   birthday: '',
  //   blood: '',
  //   sex: '',
  //   levelActivity: '',
  // };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setValues,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: { ...userData },
    validationSchema: userFormSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: async values => {
      const userValues = {
        ...values,
        birthday: format(selectedDate, 'yyyy-MM-dd'),
      };

      try {
        if (!userValues) {
          return;
        }
        setUserData(userValues);

        await updateUserParams(userValues).unwrap();
        // setValues(userValues);
      } catch (error) {
        console.log(error);
      }
    },
  });

  // console.log(initialValues);
  console.log(userData);

  return (
    <>
      {data && (
        <Forms autoComplete="off" onSubmit={handleSubmit}>
          <FirstInfo>
            <label htmlFor="name">
              Basic info
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                value={userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              // value={data.user.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </FirstInfo>
          <AddInfo>
            <Data>
              <Height htmlFor="height">
                Height
                <input
                  id="height"
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
              </Height>
              <CurWeight htmlFor="currentWeight">
                Current Weight
                <input
                  id="currentWeight"
                  type="number"
                  name="currentWeight"
                  placeholder="0"
                  min="35"
                  value={values.currentWeight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.currentWeight && touched.currentWeight && (
                  <p>{errors.currentWeight}</p>
                )}
              </CurWeight>
            </Data>
            <CalendarI>
              <DesWeight htmlFor="desiredWeight">
                Desired Weight
                <input
                  id="desiredWeight"
                  type="number"
                  name="desiredWeight"
                  placeholder="0"
                  min="35"
                  value={values.desiredWeight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.desiredWeight && touched.desiredWeight && (
                  <p>{errors.desiredWeight}</p>
                )}
              </DesWeight>

              <Birthday>
                <BirthdayInput
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  // value={format(selectedDate, 'yyyy-MM-dd')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Birthday>
              {errors.birthday && touched.birthday && <p>{errors.birthday}</p>}
            </CalendarI>
          </AddInfo>
          <SecondInfo>
            <Text> Blood </Text>
            <HealthInfo>
              <Blood>
                <RadioBox
                  type="radio"
                  name="blood"
                  id="one"
                  value="1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.blood === 1 || values.blood === '1'}
                />
                <label htmlFor="one">1</label>
                {errors.blood && touched.blood && <p>{errors.blood}</p>}

                <RadioBox
                  type="radio"
                  name="blood"
                  id="two"
                  value="2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.blood === 2 || values.blood === '2'}
                />
                <label htmlFor="two">2</label>

                <RadioBox
                  type="radio"
                  name="blood"
                  id="three"
                  value="3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.blood === 3 || values.blood === '3'}
                />
                <label htmlFor="three">3</label>

                <RadioBox
                  type="radio"
                  name="blood"
                  id="four"
                  value="4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.blood === 4 || values.blood === '4'}
                />
                <label htmlFor="four">4</label>
              </Blood>
              <Gender>
                <label>
                  <RadioBox
                    type="radio"
                    name="sex"
                    id="male"
                    value="male"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.sex === 'male'}
                  />
                  Male
                </label>

                <label>
                  <RadioBox
                    type="radio"
                    name="sex"
                    id="female"
                    value="female"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.sex === 'female'}
                  />
                  Female
                </label>
                {errors.sex && touched.sex && <p>{errors.sex}</p>}
              </Gender>
            </HealthInfo>
            <Lifestyle>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    id="1"
                    value={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={
                      values.levelActivity === 1 || values.levelActivity === '1'
                    }
                  />
                </div>
                Sedentary lifestyle (little or no physical activity)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    id="2"
                    value="2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={
                      values.levelActivity === 2 || values.levelActivity === '2'
                    }
                  />
                </div>
                Light activity (light exercises/sports 1-3 days per week)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    id="3"
                    value="3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={
                      values.levelActivity === 3 || values.levelActivity === '3'
                    }
                  />
                </div>
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    id="4"
                    value="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={
                      values.levelActivity === 4 || values.levelActivity === '4'
                    }
                  />
                </div>
                Very active (intense exercises/sports 6-7 days per week)
              </label>
              <label>
                <div>
                  <RadioBox
                    type="radio"
                    name="levelActivity"
                    id="5"
                    value="5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={
                      values.levelActivity === 5 || values.levelActivity === '5'
                    }
                  />
                </div>
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </Lifestyle>
            {errors.levelActivity && touched.levelActivity && (
              <p>{errors.levelActivity}</p>
            )}
          </SecondInfo>
          <button type="submit" disabled={!isValid || isSubmitting}>
            Save
          </button>
        </Forms>
      )}
    </>
  );
}
