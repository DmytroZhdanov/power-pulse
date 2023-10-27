// import { updateData } from '../src/redux/dataPage/dataSlice';
// import * as Yup from 'yup';
import * as Yup from 'yup';

import { updateData } from '../../../redux/dataPage/dataSlice';
import { setStepValue } from '../../../redux/dataPage/stepValueSlice';

export const handleNext = (stepValue, dispatch, formik, setModalOpen) => {
  if (stepValue === 1) {
    if (
      !formik.values.currentHeight ||
      !formik.values.currentWeight ||
      !formik.values.desiredWeight ||
      formik.errors.currentHeight ||
      formik.errors.currentWeight ||
      formik.errors.desiredWeight
    ) {
      setModalOpen(true);
      return;
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
      setModalOpen(true);
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

export const validationSchema = Yup.object().shape({
  currentHeight: Yup.number().moreThan(0).required(),
  currentWeight: Yup.number().moreThan(0).required(),
  desiredWeight: Yup.number().moreThan(0).required(),
  // birthday: Yup.date().required(),
  blood: Yup.string().required(),
  gender: Yup.string().required(),
  levelActivity: Yup.string().required(),
});
