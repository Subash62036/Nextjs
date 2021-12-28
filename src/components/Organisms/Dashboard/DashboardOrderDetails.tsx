import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Typography, Button, Card } from 'components';
import { useAuth, useGlobalUiContext } from 'state';
import { IAuthContext } from 'types';
import { UI_CONFIG, ROUTES } from 'config';

const { CONTENT: { EDIT_MODE } } = UI_CONFIG;

export const DashboardOrderDetails = ():JSX.Element => {
  const { user: userData } = useAuth() as IAuthContext;
  const { route } = useRouter();

  return (
    <section className="m-6 w-full">
      <Typography className="mt-5" variant="p">
        Home /
        <b> Order</b>
      </Typography>

      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y">
        <Typography className="m-2" variant="h3">
          Order Details
        </Typography>

      </Card>

    </section>
  );
};
