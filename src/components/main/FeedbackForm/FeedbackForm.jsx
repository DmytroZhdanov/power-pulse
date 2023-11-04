import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import axios from 'axios';

import Icon from 'components/common/IconsComp/Icon';
import {
  Button,
  Check,
  ContainerDiv,
  IconDiv,
  Input,
  Message,
  Textarea,
  TextP,
  TitleH2,
  TextWrapperDiv,
  ButtonWrapperDiv,
} from './FeedbackForm.styled';

import { selectUserEmail, selectUserName } from 'src/redux/auth/selectors';
import { feedbackFormSchema } from './YupValidationForm';
import Loader from '../../Loader/Loader';
import BasicModalWindow from '../../common/BasicModalWindow/BasicModalWindow';
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage';

const InputFeedback = props => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 0) || meta.touched;

  return (
    <Check
      required={props.required}
      theme={props.theme}
      type={`${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}
    >
      <Input {...props} {...field} onFocus={handleFocus} />

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

const TextareaFeedback = props => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 0) || meta.touched;

  return (
    <Check
      required={props.required}
      theme={props.theme}
      type={`${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}
    >
      <Textarea {...props} {...field} onFocus={handleFocus} />

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

export default function FeedbackForm({ onClose }) {
  const userName = useSelector(selectUserName).trim();
  const userEmail = useSelector(selectUserEmail);

  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: userName || '',
      email: userEmail || '',
      phone: '',
      message: '',
    },

    onSubmit: async (values, { resetForm }) => {
      setShowLoader(true);
      try {
        await axios.post(
          'https://formsubmit.co/2bb952d25cb75825e9bf472086dfb9b9',
          {
            registeredName: userName,
            registeredEmail: userEmail,
            ...values,
          },
        );
        setShowSuccess(true);
        setTimeout(setShowSuccess, 2000, false);
      } catch (error) {
        setShowError(true);
        setTimeout(setShowError, 2000, false);
      } finally {
        setShowLoader(false);
        resetForm();
        onClose();
      }
    },
    validationSchema: feedbackFormSchema,
  });

  return (
    <ContainerDiv>
      <TitleH2>Have any problem?</TitleH2>

      <TextP>Fill the form below to contact us</TextP>

      <FormikProvider value={formik}>
        <Form>
          <InputFeedback name="name" required />

          <InputFeedback type="email" name="email" required />

          <InputFeedback
            type="tel"
            name="phone"
            placeholder="Your phone number"
          />

          <TextareaFeedback
            name="message"
            rows="5"
            autoFocus
            placeholder="Leave your message here..."
            required
          ></TextareaFeedback>

          <ButtonWrapperDiv>
            <Button type="submit">Send</Button>

            <Button type="button" onClick={() => onClose()}>
              Cancel
            </Button>
          </ButtonWrapperDiv>
        </Form>
      </FormikProvider>

      <TextWrapperDiv>
        <IconDiv>
          <Icon name="exclamation-mark" />
        </IconDiv>

        <TextP>
          Note: If you want to receive a reply message you have to add your
          valid email address
        </TextP>
      </TextWrapperDiv>

      {showLoader && <Loader />}

      <BasicModalWindow
        onShow={showError || showSuccess}
        type={showError ? 'Error' : showSuccess ? 'Success' : null}
        onClose={
          showError
            ? () => {
                setShowSuccess(false);
              }
            : showSuccess
            ? () => {
                setShowError(false);
              }
            : null
        }
      >
        <ErrorMessage
          type={showError ? 'Error' : showSuccess ? 'Success' : null}
          message={
            showError
              ? 'Failed to send message. Please try again later'
              : showSuccess
              ? 'Your message have been send'
              : null
          }
        />
      </BasicModalWindow>
    </ContainerDiv>
  );
}
