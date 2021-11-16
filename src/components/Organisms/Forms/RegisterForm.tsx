import React from 'react';
import classNames from 'classnames';
import {
  Formik, Form,
} from 'formik';
import { RegisterSchema, ROUTES } from 'config';
import {
  LabeledInput, Button, Typography, GenericErrorMessage,
} from 'components';
import { useAuth, useGlobalUiContext } from 'state';
import { useRegisterUserMutation } from 'hooks';
import { IAuthContext, IUIContext } from 'types';

interface IRegisterFormProps {
  className?: string
}

export const RegisterForm = ({ className }:IRegisterFormProps):JSX.Element => {
  const classes = classNames(
    className,
    '',
  );
  const { actions: { onRegisterSuccess } } = useAuth() as IAuthContext;
  const {
    actions: {
      setRegisterError,
    },
    state: {
      registerError,
    },
  } = useGlobalUiContext() as IUIContext;
  const onRegisterError = (e) => {
    setRegisterError(e);
  };

  const registerAccount = useRegisterUserMutation(onRegisterError, onRegisterSuccess);

  return (
    <Formik
      initialValues={{
        lastName: '',
        firstName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={RegisterSchema}
      validateOnChange
      onSubmit={async (values) => {
        registerAccount.mutate(values);
      }}
    >
      {() => (
        <Form data-test-id="registerForm" className={classes}>
          <Typography variant="h3" className="pb-4">Create New Account</Typography>
          <LabeledInput
            name="firstName"
            label="First Name"
            type="text"
            data-test-id="registerFirstName"
          />
          <LabeledInput
            name="lastName"
            label="Last Name"
            type="text"
            data-test-id="registerLastName"
          />
          <LabeledInput
            name="email"
            label="Email Address"
            type="email"
            data-test-id="registerEmail"
          />
          <LabeledInput
            name="username"
            label="Username"
            type="text"
            data-test-id="registerUserName"
          />
          <LabeledInput
            name="password"
            label="Password"
            type="password"
            data-test-id="registerPassword"
          />
          <LabeledInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            data-test-id="registerConfirmPassword"
          />
          {registerError && (<GenericErrorMessage data-test-id="registerError">{registerError}</GenericErrorMessage>)}
          <Button data-test-id="registerSubmit" type="submit" className="mt-6 w-full">Register</Button>
        </Form>
      )}
    </Formik>
  );
};
