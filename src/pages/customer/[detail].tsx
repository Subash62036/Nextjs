/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import {
  DashboardCustomerDetails,
} from 'components';

import DashboardLayout from 'layouts/DashboardLayout';
import {
  useAuthStorage,
} from 'hooks';
import {
  IAuthContext,
} from 'types';
import { useAuth } from 'state';

export default function CustomerDetail():JSX.Element {
  const { actions: { checkIsAdmin } } = useAuth() as IAuthContext;
  const authStorage = useAuthStorage();
  const token = authStorage.getAuthToken();
  useEffect(() => {
    if (token == null) {
      checkIsAdmin();
    }
  }, []);
  return (
    <section className="flex flex-wrap h-full w-full">
      <DashboardCustomerDetails />
    </section>
  );
}
CustomerDetail.layout = DashboardLayout;
CustomerDetail.pageTitle = 'User Dashboard';
