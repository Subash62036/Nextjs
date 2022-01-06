import React, { useEffect } from 'react';
import { useAuth, useGlobalUiContext } from 'state';
import AuthLayout from 'layouts/AuthLayout';
import {
  LoginForm, Typography, OTPForm,
} from 'components';
import { IAuthContext, IUIContext } from 'types';
import Rapido from '../../public/favico/android-chrome.png';
import RapidoArt from '../../public/favico/bro.png';

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
      <div className="flex flex-row min-h-screen">

        <div className="flex flex-col justify-center content-center bg-grey-50 min-h-screen w-2/3 item-center">
          <div className="grid justify-items-center">
            <img alt="img" className="w-42 h-100 cursor-pointer" src="https://admin-dashboard-image.s3.ap-south-1.amazonaws.com/bro.png" />
          </div>
        </div>
        <div className="flex flex-col min-h-screen justify-center content-center h-full w-1/3">
          <div className="bg-white h-full sm:px-10 sm:mx-auto mb-32">
            <img alt="img" className="w-30 h-40 cursor-pointer" src="https://admin-dashboard-image.s3.ap-south-1.amazonaws.com/android-chrome.png" />
          </div>
          <div className="bg-white h-full sm:px-10 sm:mx-auto sm:w-full sm:max-w-md w-full mb-40">
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

LoginPage.pageTitle = 'RAPIDO';
