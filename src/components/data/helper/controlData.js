import * as Yup from 'yup';

import { updateData } from '../../../redux/dataPage/dataSlice';
import { setStepValue } from '../../../redux/dataPage/stepValueSlice';

export const handleNext = (
  stepValue,
  dispatch,
  formik,
  setShowError,
  selectedDate,
) => {
  if (stepValue === 1) {
    if (
      !formik.values.currentHeight ||
      !formik.values.currentWeight ||
      !formik.values.desiredWeight ||
      // !formik.values.birthday ||
      // formik.errors.birthday ||
      formik.errors.currentHeight ||
      formik.errors.currentWeight ||
      formik.errors.desiredWeight
    ) {
      // console.log(formik.errors.birthday);
      // console.log(formik.values.birthday);

      setShowError(true);
      return;
    } else {
      const handleBirthdayChange = selectedDate => {
        formik.setFieldValue('birthday', selectedDate.toISOString(), true);
        // console.log(formik.values.birthday);
      };
      handleBirthdayChange(selectedDate);
      // console.log(formik.errors.birthday);
      // console.log(formik.values.birthday);
      dispatch(
        updateData({
          ...formik.values,
          birthday: selectedDate.toISOString(),
        }),
      );
    }
  }
  if (stepValue === 2) {
    if (
      !formik.values.blood ||
      !formik.values.gender ||
      !formik.values.levelActivity ||
      formik.errors.blood ||
      formik.errors.gender ||
      formik.errors.levelActivity
    ) {
      setShowError(true);
      return;
    } else {
      dispatch(
        updateData({
          ...formik.values,
        }),
      );
    }
  }
  dispatch(setStepValue(stepValue + 1));
};

export const handleBack = (stepValue, dispatch) => {
  dispatch(setStepValue(stepValue - 1));
};

const date = new Date(2006, 1, 1);
const curDate = date.getFullYear();
const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export const validationSchema = Yup.object().shape({
  currentHeight: Yup.number().moreThan(0).required(),
  currentWeight: Yup.number().moreThan(0).required(),
  desiredWeight: Yup.number().moreThan(0).required(),
  // birthday: Yup.string.required(),
  // birthday: Yup.date()
  // .nullable()
  // .max(eighteenYearsAgo, 'your age must to be 18+')
  // .required('the field is required'),
  birthday: Yup.date()
    .nullable()
    .max(`${curDate}`, 'your age must to be 18+')
    .required('the field is required'),
  blood: Yup.string().required(),
  gender: Yup.string().required(),
  levelActivity: Yup.string().required(),
});
