import * as yup from 'yup';

const date = new Date(2006, 1, 1);
const curDate = date.getFullYear();

export const userFormSchema = yup.object({
  name: yup.string().min(4).required('The field is required'),
  email: yup
    .string()
    .email('Please, enter a valid email (exemple@gmail.com) ')
    .required('The field is required'),
  height: yup.number().required('Please, enter your height').min(150).max(230),
  curWeight: yup.number().required('Please, enter your weight').min(35),
  desWeight: yup.number().required('The field is required').min(35),
  birthday: yup
    .date()
    .nullable()
    .max(`${curDate}`, 'your age must to be 18+')
    .required('the field is required'),
  blood: yup.string().required('required'),
  gender: yup.string().required(),
  lifestyle: yup.string().required(),
});
