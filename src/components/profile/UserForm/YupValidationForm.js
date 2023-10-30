import * as Yup from 'yup';

const date = new Date(2006, 1, 1);
const curDate = date.getFullYear();

export const userFormSchema = Yup.object({
  name: Yup.string().min(4).required('The field is required'),
  email: Yup.string()
    .email('Please, enter a valid email (exemple@gmail.com) ')
    .required('The field is required'),
  height: Yup.number().required('Please, enter your height').min(150).max(230),
  curWeight: Yup.number().required('Please, enter your weight').min(35),
  desWeight: Yup.number().required('The field is required').min(35),
  birthday: Yup.date()
    .nullable()
    .max(`${curDate}`, 'your age must to be 18+')
    .required('the field is required'),
  blood: Yup.string().required('required'),
  gender: Yup.string().required(),
  lifestyle: Yup.string().required(),
});
