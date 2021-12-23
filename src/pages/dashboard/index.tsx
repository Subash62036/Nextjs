/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Cookies from 'cookies';
import { AxiosRequestConfig } from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import {
  IUserDetails,
} from 'types';
import { makeAuthHeaders, serverSideAxiosInstance } from '_axios';
import {
  Typography,
} from 'components';

import { API, URIS } from 'config';
import DashboardLayout from 'layouts/DashboardLayout';

interface IDashboardProps {
  user?: IUserDetails
}

const { ENDPOINTS } = API;
const { GET } = ENDPOINTS;

export default function UserDashboard({ user }: IDashboardProps):JSX.Element {
  return (
    <section className="items-center flex flex-wrap h-full mt-4">
      <Typography variant="h2">
        LANDING
        {' '}
      </Typography>
    </section>
  );
}
UserDashboard.layout = DashboardLayout;
UserDashboard.pageTitle = 'User Dashboard';

// export const getServerSideProps:GetServerSideProps = async (ctx) => {
//   const { req, res } = ctx;
//   const cookies = new Cookies(req, res);
//   const authHeaders = makeAuthHeaders(cookies) as AxiosRequestConfig;
//   try {
//     if (!authHeaders) throw Error();
//     const [userDetails] = await Promise.all([
//       serverSideAxiosInstance.get(`${GET.USER_DETAILS}`, authHeaders),
//     ]);
//     return {
//       props: {
//         user: userDetails?.data,
//       },
//     };
//   } catch (error) {
//     return {
//       redirect: {
//         destination: URIS.LOGOUT_REDIRECT,
//         statusCode: 302,
//       },
//     };
//   }
// };
