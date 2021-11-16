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

export const LoginForm = ({ redirect }: ILoginFormProps):JSX.Element => {
  const { state: { loginError }, actions: { setLoginError } } = useGlobalUiContext() as IUIContext;

  const { actions: { handleLoginSuccess } } = useAuth() as IAuthContext;

  const logInMutation = useLoginMutation(setLoginError, handleLoginSuccess, redirect);
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          logInMutation.mutate(values);
        }}
      >
        {() => (
          <Form data-test-id="loginForm">
            <Typography variant="h3" className="">Log In</Typography>
            <LabeledInput
              name="email"
              label="Email Address"
              type="email"
              data-test-id="loginEmail"
            />
            <LabeledInput
              name="password"
              label="Password"
              type="password"
              data-test-id="loginPassword"
            />
            <div className="float-right cursor-pointer">
              <Button data-test-id="loginSubmit" variant="tertiary" size="small" onClick={() => router.push('/forgot-password')}>Forgot Password?</Button>
            </div>
            {loginError && (<GenericErrorMessage data-test-id="login-error">{loginError}</GenericErrorMessage>)}
            <Button data-test-id="loginSubmit" type="submit" className="mt-6 w-full">Log In</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
