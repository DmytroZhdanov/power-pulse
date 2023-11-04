import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik, FormikProvider, Form, useField } from 'formik';

import Icon from 'components/common/IconsComp/Icon';
import {
  Text,
  Inputs,
  Check,
  Message,
  Sign,
  Buttons,
} from './SignInForm.styled';

import { signInFormSchema } from './YupValidationForm';
import { setCredentials } from 'src/redux/auth/authSlice';
import { useLoginMutation } from 'src/redux/api';
import { setStates } from 'src/redux/states/statesSlice';

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

export default function SignInForm() {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const [hidePass, setHidePass] = useState();
  const [passBtn, setPassBtn] = useState(false);

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

  const handleInput = () => {
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

  const onClickGoogleBtn = () => {
    window.location.assign(
      'https://power-pulse-api.onrender.com/api/users/google',
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = await login(values).unwrap();
        dispatch(setCredentials(data));
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
    validationSchema: signInFormSchema,
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form>
          <Text>
            Welcome! Please enter your credentials to login to the platform:
          </Text>

          <Inputs>
            <Feedback name="email" type="email" placeholder="Email" />
            <div>
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
            </div>
          </Inputs>
          <Buttons>
            <button type="submit">Sign In</button>
            <button type="button" onClick={onClickGoogleBtn} id="google">
              <Icon name={'google'} />
            </button>
          </Buttons>
          <Sign>
            <p>Don’t have an account? </p>
            <Link to="/signup">Sign Up</Link>
          </Sign>
        </Form>
      </FormikProvider>
    </>
  );
}
