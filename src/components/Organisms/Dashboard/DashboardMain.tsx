import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Typography, Button, Card } from 'components';
import { useAuth, useGlobalUiContext } from 'state';
import { IAuthContext } from 'types';
import { UI_CONFIG, ROUTES } from 'config';

const { CONTENT: { EDIT_MODE } } = UI_CONFIG;

export const DashboardMain = ({ pageTitle = 'Your Dashboard', subTitle = '' }):JSX.Element => {
  const { user: userData } = useAuth() as IAuthContext;
  const { route } = useRouter();

  return (
    <section className="m-6">
      <Typography className="block mt-5" variant="h1">
        Welcome Admin
      </Typography>

      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y">
        <Typography className="m-2" variant="h3">
          Overview
        </Typography>

        <div className="grid grid-cols-4 gap-4 p-4 mt-10">
          <Card className="bg-white py-4 px-4 border-2 border-grey-200 w-46">
            <Typography className="m-2 text-grey-400" variant="h3">
              Total number of Customers
            </Typography>
            <Typography className="m-2 text-black" variant="h3">
              123
            </Typography>
          </Card>

          <Card className="bg-white py-4 px-4 border-2 border-grey-200 w-46">
            <Typography className="m-2 font text-grey-400" variant="h3">
              Total number of Captains
            </Typography>
            <Typography className="m-2 text-black" variant="h3">
              45
            </Typography>
          </Card>

          <Card className="bg-white py-4 px-4 border-2 border-grey-200 w-46">
            <Typography className="m-2 text-grey-400" variant="h3">
              Pending Captain approval
            </Typography>
            <Typography className="m-2 text-black" variant="h3">
              5
            </Typography>
          </Card>

          <Card className="bg-white py-4 px-4 border-2 border-grey-200 w-46">
            <Typography className="m-2 text-grey-400" variant="h3">
              Total rides
            </Typography>
            <Typography className="m-2 text-black" variant="h3">
              200
            </Typography>
          </Card>

        </div>

      </Card>

    </section>
  );
};
