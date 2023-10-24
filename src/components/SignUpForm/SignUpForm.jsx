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
} from './SignUpForm.styled';
import { signUpFormSchema } from './YupValidationForm';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Feedback = ({ ...props }) => {
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
    validationSchema: signUpFormSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Text>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </Text>

        <Inputs>
          <Feedback name="name" type="text" placeholder="Name" />
          <Feedback name="email" type="email" placeholder="Email" />
          <Feedback name="password" type="text" placeholder="Password" />
        </Inputs>
        <Button type="submit">Sign Up</Button>
        <Sign>
          <p>Already have account?</p>
          <Link to="/signin">Sign In</Link>
        </Sign>
      </Form>
    </FormikProvider>
  );
}
