import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import {
  Text,
  Inputs,
  Check,
<<<<<<< HEAD
  Button,
  Message,
  Sign,
=======
  Message,
  Sign,
  Buttons,
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
} from './SignUpForm.styled';
import Icon from 'components/common/IconsComp/Icon';
import { signUpFormSchema } from './YupValidationForm';
import { useRegisterMutation } from 'src/redux/api';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'src/redux/auth/authSlice';
import Loader from 'components/Loader/Loader';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';
import TimerWarning from 'components/common/TimerWarning/TimerWarning';

const Feedback = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
<<<<<<< HEAD
    (!!didFocus && field.value.trim().length > 2) || meta.touched;
=======
    (!!didFocus && field.value.trim().length > 0) || meta.touched;
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9

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
  const [register, data] = useRegisterMutation();
  const { isLoading, error } = data;

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

<<<<<<< HEAD
=======
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

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = await register(values).unwrap();
        dispatch(setCredentials(data));
        resetForm();
      } catch {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      }
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
<<<<<<< HEAD

          <Inputs>
            <Feedback name="name" type="text" placeholder="Name" />
            <Feedback name="email" type="email" placeholder="Email" />
            <Feedback name="password" type="text" placeholder="Password" />
          </Inputs>
          <Button type="submit">Sign Up</Button>
=======
          <Inputs>
            <Feedback name="name" type="text" placeholder="Name" />
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
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
          <Sign>
            <p>Already have account?</p>
            <Link to="/signin">Sign In</Link>
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
