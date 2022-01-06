/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';

import { DashboardOrder } from 'components';

import DashboardLayout from 'layouts/DashboardLayout';
import {
  useAuthStorage,
} from 'hooks';
import {
  IAuthContext,
} from 'types';
import { useAuth } from 'state';

export default function OrderDashboard():JSX.Element {
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
      <DashboardOrder />
    </section>
  );
}
OrderDashboard.layout = DashboardLayout;
OrderDashboard.pageTitle = 'User Dashboard';
