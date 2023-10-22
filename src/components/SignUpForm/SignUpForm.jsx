import React from 'react';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import {
  Text,
  Inputs,
  Check,
  Button,
  Message,
  Sign,
} from './SignUpForm.styled';
import * as Yup from 'yup';
import TitlePage from '../common/TitlePage/TitlePage';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Feedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <Check type={`${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
      <input {...props} {...field} onFocus={handleFocus} />

      <Message>
        {showFeedback ? (
          <div id={`${props.id}-feedback`} aria-live="polite">
            <>svg </>
            {meta.error ? meta.error : <>Success {props.name}</>}
          </div>
        ) : null}
      </Message>
    </Check>
  );
};

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
      //передати на бек values
      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .matches(
          '^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z0-9-_.]$',
          'The name must start with a letter',
        )
        .required('This is a required field'),
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
          '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).*$',
          'Enter valid values',
        )
        .required('This is a required field'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off">
        <>
          <TitlePage text={'Sign Up'}></TitlePage>
          <Text>
            Thank you for your interest in our paragraphlatform. To complete the
            registration process, please provide us with the following
            information.
          </Text>
        </>
        <Inputs>
          <Feedback name="name" type="text" placeholder="Name" />
          <Feedback name="email" type="email" placeholder="Email" />
          <Feedback name="password" type="text" placeholder="Password" />
        </Inputs>
        <Button type="submit">Sign Up</Button>
        <Sign>
          <p>Already have account?</p>
          <a href="">Sign In</a>
        </Sign>
      </Form>
    </FormikProvider>
  );
}
