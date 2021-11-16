import React from 'react';
import { IUserDetails } from 'types';

import { PasswordCreationForm } from 'components';
import AuthLayout from 'layouts/AuthLayout';
import { ROUTES } from 'config';

const { DASHBOARD } = ROUTES;

interface PasswordCreationProps {
  user?: IUserDetails
}

export default function PasswordCreation({
  user,
}: PasswordCreationProps): JSX.Element {
  return (
    <div className="flex w-full justify-center">
      <PasswordCreationForm redirect={DASHBOARD} />
    </div>
  );
}

PasswordCreation.layout = AuthLayout;
