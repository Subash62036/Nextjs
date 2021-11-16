import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Typography, Button } from 'components';
import { useAuth, useGlobalUiContext } from 'state';
import { IAuthContext } from 'types';
import { UI_CONFIG, ROUTES } from 'config';

const { CONTENT: { EDIT_MODE } } = UI_CONFIG;

export const UserDashboardHeader = ({ pageTitle = 'Your Dashboard', subTitle = '' }):JSX.Element => {
  const { user: userData } = useAuth() as IAuthContext;
  const { route } = useRouter();
  const containerClasses = classNames(
    'mt-4 z-10 rounded-lg bg-white overflow-hidden shadow container mx-auto',
  );
  return (
    <>
      <div className={containerClasses}>
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white p-4">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex sm:space-x-5 sm:w-1/3 justify-start">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {userData.firstName}
                  {' '}
                  {userData.lastName}
                </p>
                <p className="text-sm font-medium text-gray-600">{userData.email}</p>
              </div>
            </div>
            <div className="text-center sm:w-1/3">
              <Typography variant="h1">{pageTitle}</Typography>
              {subTitle
              && <Typography variant="h4">{subTitle}</Typography>}
            </div>
            <div className="mt-5 flex sm:mt-0 sm:w-1/3 justify-end">
              {route === '/dashboard/user-profile' && <Button variant="secondary" href={ROUTES.USER_PROFILE_UPDATE}>Edit Profile</Button>}
            </div>
          </div>
        </div>

      </div>

    </>
  );
};
