/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';

import {
  DashboardCaptain,
} from 'components';

import DashboardLayout from 'layouts/DashboardLayout';
import {
  useAuthStorage,
} from 'hooks';
import {
  IAuthContext,
} from 'types';
import { useAuth } from 'state';

export default function CaptainDashboard():JSX.Element {
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
      <DashboardCaptain />
    </section>
  );
}
CaptainDashboard.layout = DashboardLayout;
CaptainDashboard.pageTitle = 'User Dashboard';
