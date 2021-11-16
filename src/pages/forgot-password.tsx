import React from 'react';
import { ResetPasswordForm } from 'components';

import AuthLayout from 'layouts/AuthLayout';

export default function ForgotPassword(): JSX.Element {
  return (
    <div className="flex w-full justify-center">
      <ResetPasswordForm />
    </div>
  );
}

ForgotPassword.layout = AuthLayout;
