/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';

import {
  DashboardCustomerRideDetails,
} from 'components';
import {
  useAuthStorage,
} from 'hooks';
import {
  IAuthContext,
} from 'types';
import { useAuth } from 'state';

import DashboardLayout from 'layouts/DashboardLayout';

export default function CustomerOrderDetail():JSX.Element {
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
      <DashboardCustomerRideDetails />
    </section>
  );
}
CustomerOrderDetail.layout = DashboardLayout;
CustomerOrderDetail.pageTitle = 'User Dashboard';
