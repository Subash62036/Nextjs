/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';

import {
  IAuthContext,
} from 'types';
import {
  DashboardMain,
} from 'components';

import DashboardLayout from 'layouts/DashboardLayout';
import { useAuth } from 'state';
import {
  useUserQuery, useAuthStorage,
} from 'hooks';

export default function UserDashboard():JSX.Element {
  const { actions: { checkIsAdmin } } = useAuth() as IAuthContext;
  const { data } = useUserQuery();
  const authStorage = useAuthStorage();
  const token = authStorage.getAuthToken();
  useEffect(() => {
    if (token == null) {
      checkIsAdmin();
    }
    if (data && data.data.roles[0].id === 3) {
      checkIsAdmin();
    }
  }, []);
  return (
    <section className="flex flex-wrap h-full">
      <DashboardMain />
    </section>
  );
}
UserDashboard.layout = DashboardLayout;
UserDashboard.pageTitle = 'User Dashboard';

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
