import React from 'react';
import {
  Formik, Form,
} from 'formik';
import { useRouter } from 'next/router';
import { useAuth, useGlobalUiContext } from 'state';
import { useLoginMutation } from 'hooks';
import {
  LabeledInput, Button, Typography, GenericErrorMessage,
} from 'components';
import {
  IUIContext, IAuthContext, ILoginFormProps,
} from 'types';
import { LoginSchema } from 'config';

export const LoginForm = ():JSX.Element => {
  const {
    state: { loginError, loginSuccess },
    actions: { setLoginError, setLoginSuccess },
  } = useGlobalUiContext() as IUIContext;

  const handleLoginSuccess = (e) => {
    setLoginSuccess(true);
  };

  const logInMutation = useLoginMutation(setLoginError, handleLoginSuccess);
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          phone: '',
          countryCode: 91,
          appHash: '',
        }}
        validateOnBlur
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          logInMutation.mutate(values);
          console.log(values);
        }}
      >
        {() => (
          <Form data-test-id="loginForm">
            <Typography variant="h3" className="">Log In</Typography>
            <LabeledInput
              name="phone"
              label="Phone Number"
              type="number"
              data-test-id="loginPhoneNumber"
            />
            {loginError && (<GenericErrorMessage data-test-id="login-error">{loginError}</GenericErrorMessage>)}
            <Button data-test-id="loginSubmit" type="submit" className="mt-6 w-full">Log In</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
