import React, { useState } from 'react';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import { ChangePasswordSchema } from 'config';
import { useChangePasswordMutation } from 'hooks';
import { useAuth, useGlobalUiContext } from 'state';
import { IUIContext, IAuthContext, ILoginFormProps } from 'types';
import {
  LabeledInput,
  Button,
  Typography,
  GenericSuccessMessage,
  GenericErrorMessage,
} from 'components';

interface IChangePasswordFormProps {
  className?: string
}

export const ChangePasswordForm = ({
  className,
}: IChangePasswordFormProps): JSX.Element => {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isErrorMsgVisible, setIsErrorMessageVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const classes = classNames(className, '');

  const {
    state: { userChangePasswordError },
    actions: { setUserChangePasswordError },
  } = useGlobalUiContext() as IUIContext;
  const {
    actions: { onChangePasswordSuccess },
  } = useAuth() as IAuthContext;
  // const onSuccess = (data) => {
  //   console.log(data)
  //   setIsSuccessMessageVisible(true);
  //   setSuccessMessage(data?.message);
  // };

  // const onError = (e, v, c) => {
  //   setIsErrorMessageVisible(true);
  //   setErrorMessage(e?.message);
  // };

  const mutation = useChangePasswordMutation(
    setUserChangePasswordError,
    onChangePasswordSuccess,
  );
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-2 w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Typography
          variant="h3"
          className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Change your password
        </Typography>
        {/* {isSuccessMessageVisible && (
          <GenericSuccessMessage className="mt-6 text-center">
            {userChangePasswordError}
          </GenericSuccessMessage>
        )} */}
        {userChangePasswordError && (
          <GenericErrorMessage className="mt-6 text-center">
            {userChangePasswordError}
          </GenericErrorMessage>
          // TODO: on submit error handle redirect
        )}
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={ChangePasswordSchema}
            validateOnChange
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            {() => (
              <Form data-test-id="changePasswordForm" className={classes}>
                <div className="mt-6">
                  <LabeledInput
                    name="oldPassword"
                    label="Current Password"
                    type="password"
                    data-test-id="changeCurrentPassword"
                  />
                  <LabeledInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    data-test-id="changeNewPassword"
                  />
                  <LabeledInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    data-test-id="changeConfirmPassword"
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
