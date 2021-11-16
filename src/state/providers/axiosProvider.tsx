import React, {
  useMemo, createContext, useContext,
} from 'react';
import Axios, { AxiosInstance } from 'axios';
import Cookie from 'js-cookie';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { INextConfig } from 'types';

import { API, URIS, MOCK_API } from 'config';

import { useAuthStorage } from 'hooks';

export const AxiosContext = createContext<AxiosInstance>(undefined);

const { publicRuntimeConfig } = getConfig() as INextConfig;

const { ENDPOINTS } = API;
const { POST } = ENDPOINTS;

export function AxiosProvider({ children }):JSX.Element {
  const authStorage = useAuthStorage();
  const router = useRouter();
  const refreshToken = authStorage.getRefreshToken();
  const axios = useMemo(() => {
    const axiosInstance = Axios.create({
      baseURL: publicRuntimeConfig.apiBaseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    axiosInstance.interceptors.request.use((config) => {
      const updatedConfig = {
        ...config,
      };
      const authToken = authStorage.getAuthToken();
      if (authToken) {
        updatedConfig.headers.Authorization = `Bearer ${authToken}`;
      }
      return updatedConfig;
    });

    axiosInstance.interceptors.response.use((response) => response, async (error) => {
      const status = error.response ? error.response.status : null;
      const originalRequest = error.config;
      const { url } = originalRequest;
      if (url === POST.LOGIN) {
        return error.response;
      }

      if (status === 401 && refreshToken) {
        const newTokenResponse = await axiosInstance.post(`${POST.REFRESH}`, { refresh: refreshToken }).catch();

        if (!newTokenResponse) return router.push(URIS.LOGOUT_REDIRECT);

        const { data: { access: newAccess } } = newTokenResponse;

        Cookie.set(publicRuntimeConfig.authCookieName, newAccess);
        Cookie.remove(publicRuntimeConfig.authRefreshCookieName);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return axiosInstance.request(originalRequest);
      }

      return error.response;
    });

    return axiosInstance;
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

const mockAxiosInstance = Axios.create({
  baseURL: MOCK_API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Pass true to return axios instance with base url of /api/mock/
 * @param isMock defaults to false
 * @returns axiosInstance or mockAxiosInstance
 */
export const useAxios = (isMock = false):AxiosInstance => (
  isMock
    ? mockAxiosInstance : useContext(AxiosContext)
);
