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
import Icon from 'components/common/IconsComp/Icon';
import { signUpFormSchema } from './YupValidationForm';
import { useRegisterMutation } from 'src/redux/api';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'src/redux/auth/authSlice';
import Loader from 'components/Loader/Loader';

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
            <Icon name={'checkmark'} />
            {meta.error ? meta.error : <>Success {props.name}</>}
          </div>
        ) : null}
      </Message>
    </Check>
  );
};

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const [hidePass, setHidePass] = useState();
  const [passBtn, setPassBtn] = useState(false);

  const handleInput = e => {
    setPassBtn(true);
  };

  const inputPassword = document.querySelector('#password');

  const onClickPassBtn = () => {
    if (inputPassword) {
      if (inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text');
        setHidePass(true);
      } else {
        inputPassword.setAttribute('type', 'password');
        setHidePass(false);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const data = await register(values).unwrap();
      dispatch(setCredentials(data));
      resetForm();
    },
    validationSchema: signUpFormSchema,
  });

  return (
    <>
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
            <Feedback
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              onInput={handleInput}
            />
            {passBtn && (
              <button type="button" onClick={onClickPassBtn}>
                {hidePass ? <Icon name={'eye'} /> : <Icon name={'eye-off'} />}
              </button>
            )}
          </Inputs>
          <Button type="submit">Sign Up</Button>
          <Sign>
            <p>Already have account?</p>
            <Link to="/signin">Sign In</Link>
          </Sign>
        </Form>
      </FormikProvider>
      {isLoading && <Loader />}
    </>
  );
}
