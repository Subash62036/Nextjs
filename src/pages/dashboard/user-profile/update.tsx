/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Cookies from 'cookies';
import { GetServerSideProps } from 'next';
import { AxiosRequestConfig } from 'axios';

import { IUserDetails } from 'types';
import { serverSideAxiosInstance, makeAuthHeaders } from '_axios';
import { UpdateUserForm, Card } from 'components';
import DashboardLayout from 'layouts/DashboardLayout';
import { API, URIS, ROUTES } from 'config';

const { DASHBOARD } = ROUTES;

interface IUserProfilePageProps {
  user: IUserDetails
}

const { ENDPOINTS } = API;
const { GET } = ENDPOINTS;

export default function UserProfileUpdatePage({ user }:IUserProfilePageProps):JSX.Element {
  return (
    <div className="container mx-auto mt-4">
      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <UpdateUserForm user={user} redirect={DASHBOARD} className="p-4" />
      </Card>
    </div>
  );
}

UserProfileUpdatePage.layout = DashboardLayout;
UserProfileUpdatePage.pageTitle = 'Update User Profile';

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
