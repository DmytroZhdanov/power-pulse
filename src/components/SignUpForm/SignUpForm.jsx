import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { Text, Inputs, Input, Button, ErrorText } from './SignUpForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const signUpSchema = Yup.object().shape({
  name: Yup.string().required('This is a required field'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
  password: Yup.string().min(6).required('This is a required field'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <ErrorText>
          <>svg</>
          <>{message}</>
        </ErrorText>
      )}
    />
  );
};

export default function SignUpForm() {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    //передати на бек values
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
    >
      <Form autoComplete="off">
        <>
          <h2>Sign Up</h2>
          <Text>
            Thank you for your interest in our paragraphlatform. To complete the
            registration process, please provide us with the following
            information.
          </Text>
        </>
        <Inputs>
          <Input name="name" type="text" placeholder="Name" />
          <FormError name="name" />

          <Input name="email" type="email" placeholder="Email" />
          <FormError name="email" />

          <Input name="password" type="text" placeholder="Password" />
          <FormError name="password" />
        </Inputs>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
}
