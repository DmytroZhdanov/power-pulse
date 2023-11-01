import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { userFormSchema } from './YupValidationForm';
import BirthdayInput from '../BirthdayInput/BirthdayInput';
import { selectUserEmail, selectUserName } from '../../../redux/auth/selectors';
import {
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
import { setUserName } from '../../../redux/auth/authSlice';
import BasicModalWindow from '../../common/BasicModalWindow/BasicModalWindow';
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage';
import ErrorHandler from '../../common/ErrorHandler/ErrorHandler';

const defaultUserData = {
  name: '',
  birthday: '',
  blood: '',
  currentWeight: '',
  desiredWeight: '',
  height: '',
  levelActivity: '',
  sex: '',
};

export default function UserForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [
    fetchUserParams,
    {
      isLoading: isFetchUserParamsLoading,
      isError: isFetchUserParamsError,
      error: fetchUserParamsError,
    },
  ] = useLazyFetchUserParamsQuery();
  const [
    updateUserParams,
    {
      isLoading: isUpdateUserParamsLoading,
      isError: isUpdateUserParamsError,
      error: updateUserParamsError,
    },
  ] = useUpdateUserParamsMutation();
  const [
    updateUserName,
    {
      isLoading: isUpdateUserNameLoading,
      isError: isUpdateUserNameError,
      error: updateUserNameError,
    },
  ] = useUpdateUserNameMutation();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const [userData, setUserData] = useState();
  const [showUpdateError, setShowUpdateError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchUserParams();
        setUserData({ name: userName, ...data.user.userParams });
      } catch (error) {
        setUserData(defaultUserData);
        console.log(error);
      }
    };
    fetch();
  }, [fetchUserParams, userName]);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: { ...userData },
    validationSchema: userFormSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: async ({ name, ...values }) => {
      const userValues = {
        ...values,
        birthday: format(selectedDate, 'yyyy-MM-dd'),
      };

      const shouldUpdateParams =
        userValues.birthday !== userData.birthday ||
        userValues.blood !== userData.blood ||
        userValues.currentWeight !== userData.currentWeight ||
        userValues.desiredWeight !== userData.desiredWeight ||
        userValues.height !== userData.height ||
        userValues.levelActivity !== userData.levelActivity ||
        userValues.sex !== userData.sex;

      if (name === userName && !shouldUpdateParams) {
        setShowUpdateError(true);
        setTimeout(setShowUpdateError, 2000, false);
      }

      if (name !== userName) {
        try {
          const newName = await updateUserName(name).unwrap();
          setUserName(newName);
        } catch (error) {
          console.error(error);
        }
      }

      if (shouldUpdateParams) {
        try {
          const { user } = await updateUserParams(userValues).unwrap();
          setUserData({ name: userName, ...user.userParams });
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  return (
    <>
      <Forms autoComplete="off" onSubmit={handleSubmit}>
        <FirstInfo>
          <label htmlFor="name">
            Basic info
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              value={values.name}
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
            value={userEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={true}
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

      {showUpdateError && (
        <BasicModalWindow onClose={() => setShowUpdateError(false)}>
          <ErrorMessage message={'No changes to update'} />
        </BasicModalWindow>
      )}

      <ErrorHandler
        isLoading={isFetchUserParamsLoading}
        isError={isFetchUserParamsError}
        error={fetchUserParamsError}
      />

      <ErrorHandler
        isLoading={isUpdateUserParamsLoading}
        isError={isUpdateUserParamsError}
        error={updateUserParamsError}
      />

      <ErrorHandler
        isLoading={isUpdateUserNameLoading}
        isError={isUpdateUserNameError}
        error={updateUserNameError}
      />
    </>
  );
}
