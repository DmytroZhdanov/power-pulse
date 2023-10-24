import * as Yup from 'yup';

export const signInFormSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .matches(
      '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
      'Enter valid values',
    )
    .required('This is a required field'),
  password: Yup.string()
    .min(6)
    .matches(
      '^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$',
      'Enter valid values',
    )
    .required('This is a required field'),
});
