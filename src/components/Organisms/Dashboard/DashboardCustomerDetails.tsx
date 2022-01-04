import React, { useState, useEffect } from 'react';
import {
  Typography, Card, LabeledText, PaginationTableComponentForCustomerRides, Modal, DisableForm,
  LabeledTextRating, LoadingIndicator,
} from 'components';
import { Switch } from '@headlessui/react';
import { ROUTES } from 'config';
import { useGlobalUiContext } from 'state';
import {
  IUIContext,
} from 'types';
import {
  useGetCustomerDetailsQuery,
} from 'hooks';
import { epochToJsDate } from 'utils';
import { useRouter } from 'next/router';

export const DashboardCustomerDetails = ():JSX.Element => {
  const { query } = useRouter();
  const {
    state: { openDisableModal },
    actions: { setOpenDisableModal },
  } = useGlobalUiContext() as IUIContext;

  const { data } = useGetCustomerDetailsQuery(query.detail);
  const [isFetched, setIsFetched] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const {
    name, active, phone, email, createdAt, rating, city, state, id,
  } = isFetched && data.data;

  useEffect(() => {
    if (data) {
      setIsFetched(true);
      setEnabled(active);
      console.log(data);
    }
  }, [data]);

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
      {
        !isFetched
          ? <LoadingIndicator className="h-20 w-20 text-center" />
          : (
            <>
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
                  <LabeledText label="Full Name" value={name} />
                  <LabeledText label="Phone" value={phone} />
                  <LabeledText label="Joining Date" value={epochToJsDate(createdAt)} />
                  <LabeledTextRating label="Rating" icon value={rating} />
                  <LabeledText label="City" value={city} />
                  <LabeledText label="State" value={state} />
                  <LabeledText label="Email" value={email} />
                </div>
              </Card>

              <Card className="bg-white py-8 px-4 shadow sm:rounded-lg mt-3">
                <Typography className="m-2" variant="h3">
                  Ride list
                </Typography>
                <PaginationTableComponentForCustomerRides route={ROUTES.CUSTOMER_DETAILS_RIDES} />
                {/* TODO: pass object in table and route to which eyeIcon will send */}
              </Card>

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
            </>
          )
}

    </section>
  );
};
