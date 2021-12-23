import React, { useEffect } from 'react';
import { useAuth, useGlobalUiContext } from 'state';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import AuthLayout from 'layouts/AuthLayout';
import { ROUTES } from 'config';
import {
  LoginForm, Typography, Card, OTPForm,
} from 'components';
import { IAuthContext, IUIContext } from 'types';
import Rapido from '../../public/favico/android-chrome.png';

interface ILoginPageProps {
  username?: string;
  loggedout?: boolean;
}

export default function LoginPage({ username, loggedout }:ILoginPageProps):JSX.Element {
  const { actions: { handleLogout } } = useAuth() as IAuthContext;
  const { state: { loginSuccess } } = useGlobalUiContext() as IUIContext;

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
      <div className="flex flex-row min-h-screen">

        <div className="bg-grey-200 min-h-screen w-2/3 item-center">image here</div>
        <div className="flex flex-col min-h-screen justify-center content-center h-full w-1/3">
          <div className="bg-white h-full sm:px-10 sm:mx-auto sm:w-full sm:max-w-md w-full">
            <Image src={Rapido} className="w-12" />
          </div>
          <div className="bg-white h-full sm:px-10 sm:mx-auto sm:w-full sm:max-w-md w-full">
            {
            !loginSuccess ? <LoginForm /> : <OTPForm />
          }
          </div>

        </div>

      </div>

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

LoginPage.pageTitle = 'RAPIDO';
