import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import {
  Text,
  Inputs,
  Check,
  Button,
  Message,
  Sign,
} from './SignInForm.styled';
import { signInFormSchema } from './YupValidationForm';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Feedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <Check type={`${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
      <input {...props} {...field} onFocus={handleFocus} />

      <Message>
        {showFeedback ? (
          <div id={`${props.id}-feedback`} aria-live="polite">
            <svg>
              <use href="../../../src/assets/images/sprite/sprite.svg#checkmark"></use>
            </svg>
            {meta.error ? meta.error : <>Success {props.name}</>}
          </div>
        ) : null}
      </Message>
    </Check>
  );
};

export default function SignInForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
      //передати на бек values
      resetForm();
    },
    validationSchema: signInFormSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off">
        <Text>
          Welcome! Please enter your credentials to login to the platform:
        </Text>

        <Inputs>
          <Feedback name="email" type="email" placeholder="Email" />
          <Feedback name="password" type="text" placeholder="Password" />
        </Inputs>
        <Button type="submit">Sign Up</Button>
        <Sign>
          <p>Don’t have an account? </p>
          <Link to="/signup">Sign Up</Link>
        </Sign>
      </Form>
    </FormikProvider>
  );
}
