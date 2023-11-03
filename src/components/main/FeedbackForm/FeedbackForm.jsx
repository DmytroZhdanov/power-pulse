import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik, FormikProvider, Form, useField } from 'formik';

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
  CheckboxInput,
  CheckboxLabel,
} from './FeedbackForm.styled';

import { selectUserEmail, selectUserName } from 'src/redux/auth/selectors';
import { feedbackFormSchema } from './YupValidationForm';

const InputFeedback = props => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 0) || meta.touched;

  return (
    <Check type={`${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
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
    <Check type={`${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
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

const CheckBox = props => {
  const [field] = useField(props);
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <>
      <CheckboxInput {...props} {...field} id="public" />

      <CheckboxLabel htmlFor="public" onClick={toggleCheckbox}>
        Make my feedback public
      </CheckboxLabel>
    </>
  );
};

export default function FeedbackForm({ onClose }) {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const [emailInput, setEmailInput] = useState(userEmail);

  const handleEmailChange = e => {
    setEmailInput(e.currentTarget.value.trim());
  };

  const formik = useFormik({
    initialValues: {
      name: userName || '',
      email: emailInput || '',
      feedback: '',
      public: true,
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: feedbackFormSchema,
  });

  return (
    <ContainerDiv>
      <TitleH2>
        You are welcome to leave a feedback for our team in the form below
      </TitleH2>

      <FormikProvider value={formik}>
        <Form>
          <InputFeedback name="name" disabled />

          <InputFeedback
            type="email"
            name="email"
            onChange={handleEmailChange}
            required
          />

          <TextareaFeedback
            name="feedback"
            rows="5"
            autoFocus
            placeholder="Your feedback..."
            required
          ></TextareaFeedback>

          <CheckBox type="checkbox" name="public" />

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
    </ContainerDiv>
  );
}
