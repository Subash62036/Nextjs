import React, { useState } from 'react';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import { OneTimePasswordSchema } from 'config';
import { useRouter } from 'next/router';
import { LabeledInput, Button, GenericErrorMessage } from 'components';
import { useOneTimePassworddMutation } from 'hooks';
import { useAuth, useGlobalUiContext } from 'state';
import { IUIContext, IAuthContext } from 'types';

interface IOneTimePasswordFormProps {
  className?: string;
  redirect?: string;
}

export const OneTimePasswordForm = ({
  redirect,
  className,
}: IOneTimePasswordFormProps): JSX.Element => {
  const router = useRouter();
  const classes = classNames(className, '');

  const {
    state: { oneTimePasswordError },
    actions: { setOneTimePasswordError },
  } = useGlobalUiContext() as IUIContext;
  const {
    actions: { onOneTimePasswordSuccess },
  } = useAuth() as IAuthContext;

  const mutation = useOneTimePassworddMutation(
    setOneTimePasswordError,
    onOneTimePasswordSuccess,
    redirect,
  );
  return (
    <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8  w-full">
      {oneTimePasswordError && (
        <GenericErrorMessage className="mt-6 text-center">
          {oneTimePasswordError}
        </GenericErrorMessage>
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              tempToken: '',
            }}
            validationSchema={OneTimePasswordSchema}
            validateOnChange
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            {() => (
              <Form data-test-id="changePasswordForm" className={classes}>
                <div className="mt-6">
                  <LabeledInput
                    name="tempToken"
                    label="One Time Password"
                    type="password"
                    data-test-id="changeOneTimePassword"
                  />
                  <Button
                    data-test-id="changePasswordSubmit"
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
