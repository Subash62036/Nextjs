import Cookie from 'js-cookie';
import getConfig from 'next/config';

export const useSessionStorage = ():typeof sessionStorage => {
  if (typeof sessionStorage === 'undefined') {
    return {
      key: (index: number) => '',
      getItem: (key: string) => null,
      setItem: (key: string, item: any) => null,
      length: 0,
      clear: () => null,
      removeItem: (itemkey: string) => null,
    };
  }
  return sessionStorage;
};

export const useAuthStorage = () => {
  const { publicRuntimeConfig } = getConfig();
  const sessionStorage = useSessionStorage();
  return Object.freeze({
    getAuthToken() {
      return sessionStorage.getItem(publicRuntimeConfig.authCookieName);
    },
    getRefreshToken() {
      return sessionStorage.getItem(publicRuntimeConfig.authRefreshCookieName);
    },
    setTokens(data) {
      sessionStorage.setItem(publicRuntimeConfig.authCookieName, data.accessToken);
      sessionStorage.setItem(publicRuntimeConfig.authRefreshCookieName, data.refreshToken);
      Cookie.set(publicRuntimeConfig.authCookieName, data.accessToken);
      Cookie.set(publicRuntimeConfig.authRefreshCookieName, data.refreshToken);
    },
    removeTokens() {
      Cookie.remove(publicRuntimeConfig.authCookieName);
      Cookie.remove(publicRuntimeConfig.authRefreshCookieName);
      sessionStorage.removeItem(publicRuntimeConfig.authCookieName);
      sessionStorage.removeItem(publicRuntimeConfig.authRefreshCookieName);
    },
  });
};
