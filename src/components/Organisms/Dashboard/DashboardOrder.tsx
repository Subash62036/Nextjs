import React from 'react';

import {
  Typography, Button, Card, PaginationTableComponentForOrder,
} from 'components';
import { ROUTES } from 'config';

export const DashboardOrder = ():JSX.Element => (
  <section className="m-6 w-full">
    <Typography className="mt-5" variant="p">
      Home /
      <b> Orders</b>
    </Typography>

    <Card className="bg-white py-8 px-4 shadow sm:rounded-lg">
      <Typography className="m-2" variant="h3">
        Order List
      </Typography>
      <PaginationTableComponentForOrder route={ROUTES.ORDER_DETAILS} />
    </Card>

  </section>
);
