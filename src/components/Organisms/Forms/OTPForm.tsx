import React, { useState } from 'react';
import {
  Formik, Form,
} from 'formik';
import { useRouter } from 'next/router';
import { useAuth, useGlobalUiContext } from 'state';
import { useLoginOTPMutation, useAuthStorage } from 'hooks';
import {
  LabeledInput, Button, Typography, GenericErrorMessage,
} from 'components';
import {
  IUIContext, IAuthContext,
} from 'types';
import { OTPSchema, ROUTES } from 'config';
import OtpInput from 'react-otp-input';

export const OTPForm = ():JSX.Element => {
  const {
    state: { loginOTPError },
    actions: { setLoginOTPError },
  } = useGlobalUiContext() as IUIContext;
  const authStorage = useAuthStorage();
  const { actions: { handleLoginOTPSuccess } } = useAuth() as IAuthContext;
  const loginToken = authStorage.getLoginAuthToken();
  const logInOTPMutation = useLoginOTPMutation(
    setLoginOTPError, handleLoginOTPSuccess, ROUTES.DASHBOARD,
  );

  const sendForm = (e) => {
    e.token = authStorage.getLoginAuthToken();
    logInOTPMutation.mutate(e);
  };

  const router = useRouter();
  return (
    <>
      <Formik
        initialValues={{
          otp: '',
          token: '',
        }}
        validateOnBlur
        validationSchema={OTPSchema}
        onSubmit={(values) => {
          sendForm(values);
        }}
      >
        {() => (
          <Form data-test-id="loginForm">
            <Typography variant="h3" className="">Enter OTP</Typography>
            <LabeledInput
              name="otp"
              label="OTP"
              type="number"
              data-test-id="otpLogin"
            />
            {loginOTPError && (<GenericErrorMessage data-test-id="login-error">{loginOTPError}</GenericErrorMessage>)}
            <Button data-test-id="loginSubmit" type="submit" className="mt-6 w-full">Log In</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
