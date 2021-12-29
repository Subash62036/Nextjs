import React, { useState } from 'react';
import {
  Typography, Card, LabeledText, PaginationTableComponentForOrder, Modal, DisableForm,
} from 'components';
import { Switch } from '@headlessui/react';
import { ROUTES } from 'config';
import { useGlobalUiContext } from 'state';
import {
  IUIContext,
} from 'types';

export const DashboardCustomerDetails = ():JSX.Element => {
  const {
    state: { openDisableModal },
    actions: { setOpenDisableModal },
  } = useGlobalUiContext() as IUIContext;

  const active = true; // TODO: this value will be extracted from customer status obj
  const [enabled, setEnabled] = useState(active);

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

  const toggle = (e) => {
    if (e) {
      setEnabled(e);
      // TODO : call mutation to enable captain
    } else {
      // TODO : On open modal, input disable reason and call mutation to disable captain
      setEnabled(e);
      setOpenDisableModal(true);
    }
  };

  return (
    <section className="m-6 w-full">
      <Modal
        setOpen={setOpenDisableModal}
        size="xlarge"
        open={openDisableModal}
        showCloseButton={false}
        id="1"
      >

        <DisableForm />
        {/* TODO: pass customer id in form */}
      </Modal>

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
          <span className="flex">
            <Typography variant="p">
              { enabled ? 'ACTIVE' : 'INACTIVE'}
            </Typography>

            <Switch
              checked={enabled}
              onChange={(e) => toggle(e)}
              className={`${
                enabled ? 'bg-grey-600' : 'bg-gray-200'
              } relative inline-flex items-center h-6 rounded-full w-11 border-black m-2`}
            >
              <span
                className={`${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </span>
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
