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
  password: Yup.string()
<<<<<<< HEAD
    .min(8)
    .max(32)
=======
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    .matches(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$',
      'Password must be 8-32 characters long and include at least one digit, one lowercase letter, one uppercase letter and one special character',
    )
    .required('This is a required field'),
});
