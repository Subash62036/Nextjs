/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import Cookies from 'cookies';
import { AxiosRequestConfig } from 'axios';
import { GetServerSideProps } from 'next';
import {
  IUserDetails,
  IAuthContext,
} from 'types';
import { makeAuthHeaders, serverSideAxiosInstance } from '_axios';
import {
  DashboardMain,
} from 'components';

import { API, URIS } from 'config';
import DashboardLayout from 'layouts/DashboardLayout';
import { useAuth } from 'state';

const { ENDPOINTS } = API;
const { GET } = ENDPOINTS;

export default function UserDashboard(user):JSX.Element {
  const { actions: { checkIsAdmin } } = useAuth() as IAuthContext;

  useEffect(() => {
    if (user.user.data.roles[0].id === 3) {
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

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const cookies = new Cookies(req, res);
  const authHeaders = makeAuthHeaders(cookies) as AxiosRequestConfig;
  try {
    if (!authHeaders) throw Error();
    const [userDetails] = await Promise.all([
      serverSideAxiosInstance.get(`${GET.USER_DETAILS}`, authHeaders),
    ]);
    return {
      props: {
        user: userDetails?.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: URIS.LOGOUT_REDIRECT,
        statusCode: 302,
      },
    };
  }
};
