import React, {
  createContext, useContext, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

import { useGlobalUiContext } from 'state';
import {
  useUserQuery, useLogoutMutation, useAuthStorage,
} from 'hooks';
import {
  TAuthToken, IUIContext, IUserDetails,
} from 'types';
import { URIS } from 'config';

interface IAuthContextProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext({});

const AuthContextProvider = ({ children }: IAuthContextProviderProps):JSX.Element => {
  const authStorage = useAuthStorage();
  const authToken = authStorage.getAuthToken();
  const [isLoggedIn, setLoggedIn] = useState(!!authToken);
  const queryClient = useQueryClient();
  const { data: userData } = useUserQuery(null, isLoggedIn);
  const { actions } = useGlobalUiContext() as IUIContext;
  const logoutMutation = useLogoutMutation();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      queryClient.removeQueries('user');
      return;
    }
    queryClient.fetchQuery('user');
  }, [isLoggedIn]);

  const handleLogout = useCallback(async (redirect = true) => {
    // logoutMutation.mutate('logout', {
    //   onSuccess: () => {
    //     authStorage.removeTokens();
    //     setLoggedIn(false);
    //     if (redirect) {
    //       router.push({
    //         pathname: URIS.LOGOUT_REDIRECT,
    //         query: { },
    //       });
    //     }
    //   },
    // });

    authStorage.removeTokens();
    actions.setLoginSuccess(false);
    setLoggedIn(false);
    if (redirect) {
      router.push({
        pathname: URIS.LOGOUT_REDIRECT,
        query: { },
      });
    }
  }, []);

  const handleLoginOTPSuccess = useCallback((data, redirect: string):void => {
    actions.setLoginError('');
    // if (data.detail) {
    //   actions.setLoginError(data.detail);
    //   return;
    // }
    actions.setLoginModalOpen(false);
    authStorage.setTokens(data.data);
    setLoggedIn(true);
    if (redirect) router.push(redirect);
  }, []);

  const onForgotPasswordFlowSuccess = useCallback((data, redirect: string):void => {
    actions.setForgotPasswordError('');
    if (data.detail) {
      return actions.setForgotPasswordError(data.detail);
    }
    actions.setIsOneTimePassword(true);
    return null;
  }, []);

  const onUpdateUserSuccess = useCallback((data, redirect: string):void => {
    actions.setUserUpdateError('');
    if (data.detail) {
      return actions.setUserUpdateError(data);
    }
    if (redirect) router.push(redirect);
    return null;
  }, []);

  const onOneTimePasswordSuccess = useCallback((data, redirect: string):void => {
    actions.setOneTimePasswordError('');
    if (data.detail) {
      return actions.setOneTimePasswordError(data.detail);
    }
    const dataT = {
      accessToken: data.temp_access_token,
      tokenType: data.token_type,
    };
    authStorage.setTokens(dataT);
    if (redirect) router.push(redirect);
    return null;
  }, []);

  const onPasswordCreationSuccess = useCallback((data, redirect: string):void => {
    actions.setPasswordCreationError('');
    if (data.detail) {
      return actions.setPasswordCreationError(data.detail);
    }
    authStorage.setTokens(data);
    if (redirect) router.push(redirect);
    return setLoggedIn(true);
  }, []);

  const onChangePasswordSuccess = useCallback((data, redirect: string): void => {
    actions.setUserChangePasswordError('');
    if (data.detail) {
      return actions.setUserChangePasswordError(data.detail);
    }
    authStorage.setTokens(data);
    if (redirect) router.push(redirect);
    return setLoggedIn(true);
  }, []);

  const onLoginSuccess = useCallback((data, redirect: string):void => {
    if (data.detail) {
      return actions.setOneTimePasswordError(data.detail);
    }
    const dataT = {
      loginAccessToken: data.data.token,
    };
    authStorage.setLoginTokens(dataT);
    if (redirect) router.push(redirect);
    return null;
  }, []);

  const authState = {
    user: {
      ...userData,
    },
    actions: {
      handleLogout,
      handleLoginOTPSuccess,
      onForgotPasswordFlowSuccess,
      onUpdateUserSuccess,
      onOneTimePasswordSuccess,
      onPasswordCreationSuccess,
      onChangePasswordSuccess,
      onLoginSuccess,
    },
  };

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

export { AuthContext };
export { AuthContextProvider };
export default AuthContextProvider;
