import React, { useState } from 'react';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import { ResetPasswordSchema } from 'config';
import { useAuth, useGlobalUiContext } from 'state';
import { IUIContext, IAuthContext } from 'types';
import {
  LabeledInput,
  Button,
  Typography,
  GenericSuccessMessage,
  GenericErrorMessage,
} from 'components';
import { useResetPasswordMutation } from 'hooks';
import { OneTimePasswordForm } from './OneTimePasswordForm';

interface IResetPasswordFromProps {
  className?: string
}

export const ResetPasswordForm = ({
  className,
}: IResetPasswordFromProps): JSX.Element => {
  const classes = classNames(className, '');
  const {
    state: { forgotPasswordError },
    actions: { setForgotPasswordError },
  } = useGlobalUiContext() as IUIContext;
  const {
    actions: { onForgotPasswordFlowSuccess },
  } = useAuth() as IAuthContext;
  const {
    state: { isOneTimePassword },
    actions: { setIsOneTimePassword },
  } = useGlobalUiContext() as IUIContext;
  const mutation = useResetPasswordMutation(
    setForgotPasswordError,
    onForgotPasswordFlowSuccess,
  );

  return (
    <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-2 w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {!isOneTimePassword && (
          <div>
            <Typography
              variant="h3"
              className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
            >
              Reset your password
            </Typography>
            {forgotPasswordError && (
              <GenericErrorMessage className="mt-6 text-center">
                {forgotPasswordError}
              </GenericErrorMessage>
            )}
          </div>
        )}
        {isOneTimePassword && (
          <div>
            <Typography
              variant="h3"
              className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
            >
              Enter your OTP
            </Typography>
          </div>
        )}
      </div>
      {!isOneTimePassword && (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik
              initialValues={{
                username: '',
                email: '',
              }}
              validationSchema={ResetPasswordSchema}
              validateOnChange
              onSubmit={async (values) => {
                mutation.mutate(values);
              }}
            >
              {() => (
                <Form data-test-id="resetPasswordForm" className={classes}>
                  <div className="mt-6">
                    <LabeledInput
                      name="username"
                      label="User Name"
                      type="text"
                      data-test-id="resetUserName"
                    />
                    <LabeledInput
                      name="email"
                      label="Email Address"
                      type="email"
                      data-test-id="resetEmail"
                    />
                    <Button
                      data-test-id="resetPasswordSubmit"
                      type="submit"
                      className="mt-6 w-full"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      {isOneTimePassword && <OneTimePasswordForm redirect="/password-creation" />}
    </div>
  );
};
