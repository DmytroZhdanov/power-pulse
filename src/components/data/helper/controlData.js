// import { updateData } from '../src/redux/dataPage/dataSlice';
// import * as Yup from 'yup';
import * as Yup from 'yup';

import { updateData } from '../../../redux/dataPage/dataSlice';

export const handleNext = (stepValue, setValueStep, dispatch, formik) => {
  if (stepValue === 1) {
    if (
      !formik.values.currentHeight ||
      !formik.values.currentWeight ||
      !formik.values.desiredWeight ||
      formik.errors.currentHeight ||
      formik.errors.currentWeight ||
      formik.errors.desiredWeight
    ) {
      return alert('All fields must be required and contain valid data');
    } else {
      dispatch(
        updateData({
          ...formik.values,
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
      return alert('All fields must be required and contain valid data');
    } else {
      dispatch(
        updateData({
          ...formik.values,
        }),
      );
    }
  }
  setValueStep(stepValue + 1);
};

export const handleBack = (stepValue, setValueStep) => {
  setValueStep(stepValue - 1);
};

export const validationSchema = Yup.object().shape({
  currentHeight: Yup.number().moreThan(0).required(),
  currentWeight: Yup.number().moreThan(0).required(),
  desiredWeight: Yup.number().moreThan(0).required(),
  // birthday: Yup.date().required(),
  blood: Yup.string().required(),
  gender: Yup.string().required(),
  levelActivity: Yup.string().required(),
});
