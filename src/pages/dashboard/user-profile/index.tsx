/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Cookies from 'cookies';
import { GetServerSideProps } from 'next';
import { AxiosRequestConfig } from 'axios';

import { IUserDetails } from 'types';
import { serverSideAxiosInstance, makeAuthHeaders } from '_axios';
import DashboardLayout from 'layouts/DashboardLayout';
import { API, URIS } from 'config';
import { useUserQuery } from 'hooks';
import { UserProfileInterface } from 'components';

interface IUserProfilePageProps {
  user: IUserDetails
}

const { ENDPOINTS } = API;
const { GET } = ENDPOINTS;

export default function UserProfilePage({ user }:IUserProfilePageProps):JSX.Element {
  const { data: userData } = useUserQuery(user);

  return (
    <div className="h-auto">
      <UserProfileInterface user={user} />
    </div>
  );
}

UserProfilePage.layout = DashboardLayout;
UserProfilePage.pageTitle = 'User Profile';

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const cookies = new Cookies(req, res);
  const authHeaders = makeAuthHeaders(cookies) as AxiosRequestConfig;
  try {
    if (!authHeaders) throw Error();
    const response = await serverSideAxiosInstance.get(`${GET.USER_DETAILS}`, authHeaders);
    if (response.status !== 200) throw Error();
    return {
      props: {
        user: response?.data,
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
