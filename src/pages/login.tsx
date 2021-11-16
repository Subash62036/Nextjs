import React, { useEffect } from 'react';
import { useAuth } from 'state';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import AuthLayout from 'layouts/AuthLayout';
import { ROUTES } from 'config';
import { LoginForm, Typography, Card } from 'components';
import { IAuthContext } from 'types';

interface ILoginPageProps {
  username?: string;
  loggedout?: boolean;
}

export default function LoginPage({ username, loggedout }:ILoginPageProps):JSX.Element {
  const { actions: { handleLogout } } = useAuth() as IAuthContext;
  useEffect(() => {
    if (loggedout) {
      handleLogout(false);
    }
  }, []);
  return (
    <>
      {username && (
      <div className="mt-2 pb-4 max-w-md mx-auto text-center">
        <Typography variant="p">
          {username}
          , you have been logged out.
        </Typography>
      </div>
      )}
      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm redirect={ROUTES.DASHBOARD} />
        <div className="mt-4">
          <Typography variant="p"><Link href={ROUTES.REGISTER}>Register New Account</Link></Typography>
        </div>
      </Card>

    </>
  );
}

LoginPage.layout = AuthLayout;

export const getServerSideProps:GetServerSideProps = async ({ query }) => ({
  props: {
    username: query.username || null,
    loggedout: query.logout || null,
  },
});
