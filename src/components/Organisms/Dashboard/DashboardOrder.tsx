import React from 'react';

import { Typography, Button, Card } from 'components';
import { UI_CONFIG, ROUTES } from 'config';

const { CONTENT: { EDIT_MODE } } = UI_CONFIG;

export const DashboardOrder = ():JSX.Element => (
  <section className="m-6">
    <Typography className="mt-5" variant="p">
      Home /
      <b> Orders</b>
    </Typography>

    <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y">
      <Typography className="m-2" variant="h3">
        Order List
      </Typography>

    </Card>

  </section>
);
