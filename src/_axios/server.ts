import Axios from 'axios';
import getConfig from 'next/config';
import Cookie from 'js-cookie';
import { INextConfig } from 'types';

import { MOCK_API } from 'config';

const {
  serverRuntimeConfig: {
    authCookieName,
    authRefreshCookieName,
    apiBaseURL,
    siteBaseURL,
  },
} = getConfig() as INextConfig;

export const serverSideAxiosInstance = Axios.create({
  timeout: 5000,
  baseURL: apiBaseURL,
});

export const mockServerSideAxiosInstance = Axios.create({
  timeout: 5000,
  baseURL: `${siteBaseURL}${MOCK_API.BASE_URL}`,
});

type TAuthHeaders = {
  headers?: {
    Authorization: string,
    Cookies: {
      refreshToken: string
    }
  }
} | boolean

export const makeAuthHeaders = (cookies):TAuthHeaders => {
  const token = cookies.get(authCookieName);
  const refresh = cookies.get(authRefreshCookieName);
  if (!token) return false;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Cookies: {
        refreshToken: refresh,
      },
    },
  };
};

serverSideAxiosInstance.interceptors.response.use((response) => response, async (error) => {
  const status = error.response ? error.response.status : null;

  const { response } = error;
  const { config: originalRequest } = error;
  const refreshToken = originalRequest?.headers?.Cookies?.refreshToken;
  if (status === 401 && refreshToken) {
    const newTokenResponse = await serverSideAxiosInstance.post('/refresh-token', { refresh: refreshToken }).catch((e) => console.log(e));

    if (!newTokenResponse) {
      return {
        response,
      };
    }

    const { data: { access: newAccess } } = newTokenResponse;
    Cookie.set(authCookieName, newAccess, { path: '' });
    Cookie.remove(authRefreshCookieName, { path: '' });
    originalRequest.headers.Authorization = `Bearer ${newAccess}`;
    return serverSideAxiosInstance.request(originalRequest);
  }

  return response;
});
