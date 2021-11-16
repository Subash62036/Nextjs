import React from 'react';
import AuthLayout from 'layouts/AuthLayout';

import { RegisterForm, Card } from 'components';

export default function RegisterPage():JSX.Element {
  return (
    <div className="container mx-auto py-8">
      <Card className="bg-white px-4 shadow sm:rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm className="sm:mx-auto sm:w-full sm:max-w-md" />
      </Card>
    </div>
  );
}

RegisterPage.layout = AuthLayout;
