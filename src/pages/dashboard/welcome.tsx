/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Cookies from 'cookies';
import { GetServerSideProps } from 'next';
import { AxiosRequestConfig } from 'axios';

import { IUserDetails } from 'types';
import { serverSideAxiosInstance, makeAuthHeaders } from '_axios';
import { API, URIS, ROUTES } from 'config';
import { useUserQuery } from 'hooks';

interface IUserProfilePageProps {
  user: IUserDetails
}

const { ENDPOINTS } = API;
const { GET } = ENDPOINTS;

export default function UserProfilePage({ user }:IUserProfilePageProps):JSX.Element {
  const { data: userData, isFetched } = useUserQuery(user, true);
  const bgImageSource = 'https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80';
  return (
    <div className="bg-black h-[100vh]">
      <div className="relative h-full">
        <div className="absolute inset-x-0 bottom-0 h-full" />
        <div className="w-full h-full mx-auto">
          <div className="flex items-center h-full relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0 h-full">
              <img className="h-[100vh] w-full object-cover" src={bgImageSource} alt="7 star hotel" />
            </div>
            <div className="lg:px-8 max-w-2xl mt-6 mx-auto py-2 relative rounded-lg sm:px-6">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                {isFetched
                && (
                <span className="block text-white">
                  Welcome,
                  <span className="text-white">
                    {' '}
                    {userData.firstName}
                  </span>
                </span>
                )}
              </h1>
              <div className="opacity-100  rounded-lg p-2 flex-col items-center justify-center text-center text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
