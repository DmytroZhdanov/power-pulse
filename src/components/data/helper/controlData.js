import * as Yup from 'yup';
import { DATA_STEPS } from 'src/utils';

export const handleNext = (step, formik, navigate) => {
  if (step === DATA_STEPS.FIRST) {
    if (
      !formik.values.height ||
      !formik.values.currentWeight ||
      !formik.values.desiredWeight
      // !formik.values.birthday
    ) {
      formik.setFieldTouched('height', true, true);
      formik.setFieldTouched('currentWeight', true, true);
      formik.setFieldTouched('desiredWeight', true, true);
      return;
    } else {
      navigate(
        step === DATA_STEPS.FIRST ? DATA_STEPS.SECOND : DATA_STEPS.THIRD,
      );
    }
  }
  if (step === DATA_STEPS.SECOND) {
    if (
      !formik.values.blood ||
      !formik.values.sex ||
      !formik.values.levelActivity
    ) {
      formik.setFieldTouched('blood', true, true);
      formik.setFieldTouched('sex', true, true);
      formik.setFieldTouched('levelActivity', true, true);
      return;
    } else {
      navigate(step === DATA_STEPS.FIRST ? DATA_STEPS.THIRD : DATA_STEPS.THIRD);
    }
  }
};

export const handleBack = (step, navigate) =>
  navigate(step === DATA_STEPS.THIRD ? DATA_STEPS.SECOND : DATA_STEPS.FIRST);

const date = new Date(2006, 1, 1);
const curDate = date.getFullYear();

export const validationSchema = Yup.object({
  height: Yup.number()
    .typeError('Height must be a number')
    .moreThan(150, 'Height must be greater than 150')
    .required('Height is a required field'),
  currentWeight: Yup.number()
    .typeError('Weight must be a number')
    .moreThan(35, 'Weight must be greater than 35')
    .required('Weight is a required field'),
  desiredWeight: Yup.number()
    .typeError('Weight must be a number')
    .moreThan(35, 'Weight must be greater than 35')
    .required('Weight is a required field'),
  // birthday: Yup.date()
  //   .nullable()
  //   .max(`${curDate}`, 'your age must to be 18+')
  //   .required('The field is required'),
  blood: Yup.string().required('Blood is a required field'),
  sex: Yup.string().required('Sex is a required field'),
  levelActivity: Yup.string().required('Level Activity is a required field'),
});
