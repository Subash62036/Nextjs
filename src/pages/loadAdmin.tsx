import React, { useEffect, useState } from 'react';
import { useAuth, useGlobalUiContext } from 'state';
import AuthLayout from 'layouts/AuthLayout';
import { ROUTES } from 'config';
import { useRouter } from 'next/router';

import { IAuthContext, IUIContext } from 'types';
import {
  useUserQuery, useAuthStorage,
} from 'hooks';

import { LoadingIndicator, Typography } from 'components';

export default function LoadAdminPage():JSX.Element {
  const { actions: { checkIsAdmin, handleLogout } } = useAuth() as IAuthContext;
  const [isAdmin, setIsAdmin] = useState(false);
  const { data } = useUserQuery();
  const authStorage = useAuthStorage();
  const token = authStorage.getAuthToken();
  const router = useRouter();
  useEffect(() => {
    if (token == null) {
      checkIsAdmin();
    }

    if (data && data.data.roles) {
      if (data && data.data.roles[0].id !== 1) {
        checkIsAdmin();
      } else {
        setIsAdmin(true);
        router.push({
          pathname: ROUTES.DASHBOARD,
          query: { },
        });
      }
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-row min-h-screen">
        {
        !isAdmin
          ? (
            <div className="flex w-full justify-center">
              <LoadingIndicator className="h-20 w-20 text-center" />
            </div>
          )
          : (
            <div className="flex w-full justify-center">
              <LoadingIndicator className="h-20 w-20 text-center" />
            </div>
          )
}
      </div>

    </>
  );
}

LoadAdminPage.layout = AuthLayout;

LoadAdminPage.pageTitle = 'RAPIDO';
