import React from 'react';
import { useRouter } from 'next/router';

import {
  Typography, Card, PaginationTableComponentForCaptain,
} from 'components';
import { useAuth } from 'state';
import { IAuthContext } from 'types';

export const DashboardCaptain = ():JSX.Element => (
  <section className="m-6 w-full">
    <Typography className="mt-5" variant="p">
      Home / User /
      <b> Captain</b>
    </Typography>

    <Card className="bg-white py-8 px-4 shadow sm:rounded-lg">
      <Typography className="m-2" variant="h3">
        Captain List
      </Typography>
      <PaginationTableComponentForCaptain />
    </Card>

  </section>
);
