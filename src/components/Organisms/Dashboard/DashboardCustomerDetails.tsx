import React from 'react';
import classNames from 'classnames';
import {
  Typography, Card, LabeledText, PaginationTableComponentForOrder,
} from 'components';
import { ROUTES } from 'config';

export const DashboardCustomerDetails = ():JSX.Element => {
  const customerDetails = [
    {
      label: 'Full name',
      value: 'Ankit Kumar',
    },
    {
      label: 'Mobile number',
      value: '9874652135',
    },
    {
      label: 'Email',
      value: 'xyz@abc.com',
    },
    {
      label: 'Joining Date',
      value: '17 Feb 2021',
    },
    {
      label: 'Total rides',
      value: '89',
    },
    {
      label: 'Rating',
      value: '3.5 (Star)',
    },
    {
      label: 'City',
      value: 'Ranchi',
    },
    {
      label: 'State',
      value: 'Jharkhand',
    },
  ];

  const or = [
    {
      fullName: 'Ankit Kumar',
      mobileNumber: '6587412984',
      email: 'abc@xyz.com',
      joiningDate: '17 Feb 2021',
      totalRides: '89',
      Rating: '3.5 (star)',
      city: 'Ranchi',
      state: 'Jharkhand',
    },
  ];

  return (
    <section className="m-6 w-full">
      <Typography className="mt-5" variant="p">
        Home / User /
        <b> Customer</b>
      </Typography>
      <Typography className="m-2" variant="h3">
        Customer Details
      </Typography>

      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y">
        <div className="flex justify-between">
          <Typography className="m-2" variant="h4">
            Personal information
          </Typography>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {customerDetails.map(({ label, value }) => (
            <LabeledText label={label} value={value} />
          ))}

        </div>
      </Card>

      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg mt-3">
        <Typography className="m-2" variant="h3">
          Ride list
        </Typography>
        <PaginationTableComponentForOrder route={ROUTES.CUSTOMER_DETAILS_RIDES} />
        {/* TODO: pass object in table and route to which eyeIcon will send */}
      </Card>

    </section>
  );
};
