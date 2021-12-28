/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Cookies from 'cookies';
import { AxiosRequestConfig } from 'axios';
import { GetServerSideProps } from 'next';
import {
  IUserDetails,
} from 'types';
import { makeAuthHeaders, serverSideAxiosInstance } from '_axios';
import {
  DashboardOrderDetails,
} from 'components';

import { API, URIS } from 'config';
import DashboardLayout from 'layouts/DashboardLayout';

const { ENDPOINTS } = API;
const { GET } = ENDPOINTS;

export default function OrderDetail():JSX.Element {
  return (
    <section className="flex flex-wrap h-full w-full">
      <DashboardOrderDetails />
    </section>
  );
}
OrderDetail.layout = DashboardLayout;
OrderDetail.pageTitle = 'User Dashboard';

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
