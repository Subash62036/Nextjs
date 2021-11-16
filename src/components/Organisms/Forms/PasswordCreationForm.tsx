import React, { useState } from 'react';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import { PasswordCreationSchema } from 'config';
import { useCreatePasswordMutation } from 'hooks';
import { useAuth, useGlobalUiContext } from 'state';
import { IUIContext, IAuthContext } from 'types';
import {
  LabeledInput,
  Button,
  Typography,
  GenericErrorMessage,
} from 'components';

interface IPasswordCreationFormProps {
  className?: string;
  redirect?: string;
}

export const PasswordCreationForm = ({
  className,
  redirect,
}: IPasswordCreationFormProps): JSX.Element => {
  const {
    state: { passwordCreationError },
    actions: { setPasswordCreationError },
  } = useGlobalUiContext() as IUIContext;
  const {
    actions: { onPasswordCreationSuccess },
  } = useAuth() as IAuthContext;

  const classes = classNames(className, '');

  const mutation = useCreatePasswordMutation(
    setPasswordCreationError,
    onPasswordCreationSuccess,
    redirect,
  );
  return (
    <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-2 w-full">
      {passwordCreationError && (
        <GenericErrorMessage className="mt-6 text-center">
          {passwordCreationError}
        </GenericErrorMessage>
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Typography
          variant="h3"
          className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Create password
        </Typography>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={PasswordCreationSchema}
            validateOnChange
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            {() => (
              <Form data-test-id="createPasswordForm" className={classes}>
                <div className="mt-6">
                  <LabeledInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    data-test-id="createCurrentPassword"
                  />
                  <LabeledInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    data-test-id="createConfirmPassword"
                  />
                  <Button
                    data-test-id="createPasswordSubmit"
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
    </div>
  );
};
