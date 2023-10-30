import * as Yup from 'yup';
import { DATA_STEPS } from 'src/utils';

export const handleNext = (step, formik, navigate) => {
  if (step === DATA_STEPS.FIRST) {
    if (
      !formik.values.currentHeight ||
      !formik.values.currentWeight ||
      !formik.values.desiredWeight ||
      // !formik.values.birthday
      // formik.errors.birthday
      formik.errors.currentHeight ||
      formik.errors.currentWeight ||
      formik.errors.desiredWeight
    ) {
      return console.log('object');
    } else {
      navigate(
        step === DATA_STEPS.FIRST ? DATA_STEPS.SECOND : DATA_STEPS.THIRD,
      );
      console.log('object1111111');
    }
  }
  if (step === DATA_STEPS.SECOND) {
    if (
      !formik.values.blood ||
      !formik.values.gender ||
      !formik.values.levelActivity ||
      formik.errors.blood ||
      formik.errors.gender ||
      formik.errors.levelActivity
    ) {
      return;
    } else {
      navigate(step === DATA_STEPS.FIRST ? DATA_STEPS.THIRD : DATA_STEPS.THIRD);
      console.log('object2222222');
    }
  }
};

export const handleBack = (step, navigate) =>
  navigate(step === DATA_STEPS.THIRD ? DATA_STEPS.SECOND : DATA_STEPS.FIRST);

const date = new Date(2006, 1, 1);
const curDate = date.getFullYear();
const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export const validationSchema = Yup.object().shape({
  currentHeight: Yup.number().moreThan(0).required('this is a required field'),
  currentWeight: Yup.number().moreThan(0).required('this is a required field'),
  desiredWeight: Yup.number().moreThan(0).required('this is a required field'),
  blood: Yup.string().required('this is a required field'),
  gender: Yup.string().required('this is a required field'),
  levelActivity: Yup.string().required('this is a required field'),
});
