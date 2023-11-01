import * as Yup from 'yup';

export const signUpFormSchema = Yup.object({
  name: Yup.string()
    .trim('Name must not have leading or trailing spaces')
    .strict()
    .min(1)
    .required('This is a required field'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
      'Enter valid values',
    )
    .required('This is a required field'),
  password: Yup.string().min(6).required('This is a required field'),
});
