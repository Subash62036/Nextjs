import React from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
import { emailCaptureSchema } from 'config';

import { LabeledInput, Button } from 'components';

interface IUpdateUserFormProps {
  className?: string
}

export const EmailCaptureForm = ({ className }): JSX.Element => {
  const classes = classNames(className, '');

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validateOnBlur
      validationSchema={emailCaptureSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form data-test-id="emailCaptureForm" className={classes}>
        <LabeledInput
          name="email"
          label="Enter Email Address"
          type="email"
          data-test-id="updateUserEmail"
        />
        <div className="flex justify-center items-center">
          <Button type="submit" size="small" className="mt-6 w-full">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
