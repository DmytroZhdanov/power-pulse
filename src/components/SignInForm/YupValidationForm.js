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
    .matches(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$',
      'Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character',
    )
    .required('This is a required field'),
});
