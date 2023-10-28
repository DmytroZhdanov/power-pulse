import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import {
  Text,
  Inputs,
  Check,
  Message,
  Sign,
  Buttons,
} from './SignInForm.styled';
import Icon from '../common/IconsComp/Icon';
import { signInFormSchema } from './YupValidationForm';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'src/redux/auth/authSlice';
import { useLoginMutation } from 'src/redux/api';
import Loader from 'components/Loader/Loader';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import TimerWarning from 'components/common/TimerWarning/TimerWarning';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';

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
  const [login, { isLoading, error }] = useLoginMutation();

  const [showError, setShowError] = useState(false);
  const [showTimerWarning, setShowTimerWarning] = useState(false);

  useEffect(() => {
    let id;

    if (isLoading) {
      id = setTimeout(setShowTimerWarning, 5000, true);
    } else {
      setShowTimerWarning(false);
    }

    return clearTimeout(id);
  }, [isLoading]);

  const [hidePass, setHidePass] = useState();
  const [passBtn, setPassBtn] = useState(false);

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
      } catch {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
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
            <button type="submit">Sign Up</button>
            <button type="button" id="google">
              <Icon name={'google'} />
            </button>
          </Buttons>
          <Sign>
            <p>Don’t have an account? </p>
            <Link to="/signup">Sign Up</Link>
          </Sign>
        </Form>
      </FormikProvider>
      {isLoading && <Loader />}
      {isLoading && showTimerWarning && (
        <BasicModalWindow onClose={() => setShowTimerWarning(false)}>
          <TimerWarning />
        </BasicModalWindow>
      )}
      {showError && (
        <BasicModalWindow onClose={() => setShowError(false)}>
          <ErrorMessage message={error.data.message} />
        </BasicModalWindow>
      )}
    </>
  );
}
