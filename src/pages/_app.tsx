/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';

import {
  QueryClient, QueryClientProvider,
} from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { ReactQueryDevtools } from 'react-query/devtools';

import 'styles/tailwind.css';

import { SEO } from 'config';
// state
import { UIContextProvider, AuthContextProvider, AxiosProvider } from 'state';

interface IAppProps {
  pageProps: any;
  Component: React.ReactNode | any;
  pageTitle?: string;
}

export const MyApp = ({
  pageProps, Component, pageTitle,
}: IAppProps):JSX.Element => {
  const [queryClient] = React.useState(() => new QueryClient());
  // @ts-ignore
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  // @ts-ignore
  const title = pageTitle || Component.pageTitle || SEO.SITE_TITLE;
  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <UIContextProvider>
            <AuthContextProvider>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/favico/android-chrome.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favico/android-chrome.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favico/android-chrome.png" />
                <link rel="manifest" href="/favico/site.webmanifest" />
                <link rel="mask-icon" href="/favico/android-chrome.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <title>{title}</title>
              </Head>
              <Layout pageTitle={title}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
              </Layout>
            </AuthContextProvider>
          </UIContextProvider>
        </Hydrate>
      </QueryClientProvider>
    </AxiosProvider>
  );
};

export default MyApp;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
