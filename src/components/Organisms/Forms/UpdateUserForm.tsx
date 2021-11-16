import React, { useState } from 'react';
import classNames from 'classnames';
import { useAuth, useGlobalUiContext } from 'state';
import {
  IUIContext, IAuthContext,
  IUserDetails,
} from 'types';
import {
  Formik, Form,
} from 'formik';
import { UpdateUserSchema, ROUTES } from 'config';
import {
  LabeledInput, Button, GenericErrorMessage,
} from 'components';
import { useUserUpdateMutation } from 'hooks';

import { useRouter } from 'next/router';

interface IUpdateUserFormProps {
  className?: string,
  user?: IUserDetails
  redirect?: string
}

export const UpdateUserForm = ({ className, user, redirect }:IUpdateUserFormProps):JSX.Element => {
  const classes = classNames(
    className,
    '',
  );

  const {
    state: { userUpdateError },
    actions: { setUserUpdateError },
  } = useGlobalUiContext() as IUIContext;
  const { actions: { onUpdateUserSuccess } } = useAuth() as IAuthContext;

  const userDetails = user;

  const UpdateUser = useUserUpdateMutation(
    setUserUpdateError,
    onUpdateUserSuccess,
    redirect,
  );

  return (
    <Formik
      initialValues={{
        lastName: userDetails.lastName,
        firstName: userDetails.firstName,
        username: userDetails.username, // will be fetched from auth
        email: userDetails.email,
        phonenumber: userDetails.phonenumber,
        experience: userDetails.experience,
        functionalRole: userDetails.functionalRole,
        operationModes: [],
        userId: userDetails.userId,
      }}
      validationSchema={UpdateUserSchema}
      validateOnChange
      onSubmit={async (values) => {
        UpdateUser.mutate(values);
      }}
    >
      {() => (
        <Form data-test-id="updateUserForm" className={classes}>
          <LabeledInput
            name="firstName"
            label="First Name"
            type="text"
            data-test-id="updateUserFirstName"
          />
          <LabeledInput
            name="lastName"
            label="Last Name"
            type="text"
            data-test-id="updateUserLastName"
          />
          <LabeledInput
            name="email"
            label="Email Address"
            type="email"
            data-test-id="updateUserEmail"
          />
          <LabeledInput
            name="phonenumber"
            label="Phone number"
            type="number"
            data-test-id="updateUserphonenumber"
          />
          <LabeledInput
            name="experience"
            label="Experience"
            type="number"
            data-test-id="updateUserExperience"
          />
          <LabeledInput
            name="functionalRole"
            label="Functional Role"
            type="text"
            data-test-id="updateUserFunctionalRole"
          />
          {userUpdateError && (<GenericErrorMessage data-test-id="updateUserError">{userUpdateError}</GenericErrorMessage>)}
          <Button data-test-id="updateUserSubmit" className="mt-4 w-full" type="submit">Update</Button>
          <Button data-test-id="updateUserCancel" className="mt-4 w-full" variant="cancel" href={ROUTES.USER_PROFILE}>Cancel</Button>

        </Form>
      )}
    </Formik>
  );
};
