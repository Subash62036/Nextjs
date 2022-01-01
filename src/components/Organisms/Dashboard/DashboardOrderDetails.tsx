import React, { useEffect, useState } from 'react';
import {
  Typography, Card, Button, LabeledText, LabeledTextRating, LoadingIndicator,
} from 'components';
import {
  useGetOrderDetailsQuery,
} from 'hooks';

export const DashboardOrderDetails = ():JSX.Element => {
  const { data } = useGetOrderDetailsQuery();
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (data) {
      setIsFetched(true);
    }
  }, [data]);

  const { tripDetails, captain, customer } = isFetched && data.data;

  return (
    <section className="m-6 w-full">
      {
        !isFetched
          ? <LoadingIndicator className="h-20 w-20 text-center" />
          : (
            <>
              <Typography className="mt-5" variant="p">
                Home /
                <b> Orders</b>
              </Typography>
              <Typography className="m-2" variant="h3">
                Order Details
              </Typography>

              <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y">
                <div className="flex justify-between">
                  <Typography className="m-2" variant="h4">
                    Trip Details
                  </Typography>
                  <Button variant="primary" className="bg-green-400 text-white rounded-full h-6 disabled:transform-none cursor-default">COMPLETE</Button>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <LabeledText label="Trip Details" value={tripDetails.id} />
                  <LabeledText label="Date" value={tripDetails.createdAt} />
                  <LabeledText label="From" value={tripDetails.fromAddress} />
                  <LabeledText label="To" value={tripDetails.toAddress} />
                  <LabeledText label="Distance" value="tripDetails.distance" />
                  <LabeledText label="Time" value="tripDetails.time" />
                  <LabeledText label="Vehicle Number" value="tripDetails.vehicalNumber" />
                  <LabeledText label="Model" value={tripDetails.model} />
                </div>
              </Card>
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
                    <Typography className="" variant="h4">
                      Customer Details
                    </Typography>
                    <div className="grid grid-cols-3 gap-4">
                      <LabeledText label="Full Name" value={customer.name} />
                      <LabeledText label="Mobile Number" value={customer.phone} />
                      <LabeledText label="Joining Date" value={customer.createdAt} />
                      <LabeledTextRating label="Rating" icon value={customer.rating} />
                      <LabeledText label="City" value={customer.city} />
                      <LabeledText label="State" value={customer.state} />
                      <LabeledText label="Email" value={customer.email} />
                    </div>
                  </Card>

                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
                    <div className="flex justify-between">
                      <Typography className="" variant="h4">
                        Payment Details
                      </Typography>
                      <Button variant="primary" className="bg-blue-500 text-white rounded-full h-6 disabled:transform-none cursor-default">INVOICE</Button>
                    </div>

                    <div className="flex justify-between ">
                      <Typography className="text-grey-400 mt-2" variant="h4">
                        Fare
                      </Typography>
                      <Typography className="text-green-400 mt-2" variant="h4">
                        {tripDetails.fare}
                      </Typography>
                    </div>
                  </Card>

                </div>
                <div className="w-1/2 ml-2">
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
                    <Typography className="" variant="h4">
                      Captain Details
                    </Typography>
                    <div className="grid grid-cols-3 gap-4">
                      <LabeledText label="Full Name" value={captain.name} />
                      <LabeledText label="Mobile Number" value={captain.phone} />
                      <LabeledText label="Joining Date" value={captain.createdAt} />
                      <LabeledTextRating label="Rating" icon value={captain.rating} />
                      <LabeledText label="City" value={captain.city} />
                      <LabeledText label="State" value={captain.state} />
                      <LabeledText label="Email" value={captain.email} />
                    </div>
                  </Card>

                </div>
              </div>
            </>
          )
      }

    </section>
  );
};
