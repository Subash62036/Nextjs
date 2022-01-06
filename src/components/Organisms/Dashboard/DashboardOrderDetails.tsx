import React, { useEffect, useState } from 'react';
import {
  Typography, Card, Button, LabeledText, LabeledTextRating, LoadingIndicator,
} from 'components';
import {
  useGetOrderDetailsQuery,
} from 'hooks';
import { epochToJsDate } from 'utils';
import { useRouter } from 'next/router';

export const DashboardOrderDetails = ():JSX.Element => {
  const { query } = useRouter();

  const { data } = useGetOrderDetailsQuery(query.detail);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (data) {
      setIsFetched(true);
      console.log(data);
    }
  }, [data]);

  const {
    id, tripDetails, captain, customer,
  } = isFetched && data.data;

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
                  <Button variant="primary" className="bg-green-400 text-white rounded-full h-6 disabled:transform-none cursor-default">{data.data.bookingStatus}</Button>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <LabeledText label="Trip Details" value={id} />
                  <LabeledText label="Date" value={epochToJsDate(data.data.createdAt)} />
                  <LabeledText label="From" value={data.data.fromAddress} />
                  <LabeledText label="To" value={data.data.toAddress} />
                  {/* <LabeledText label="Distance" value="data.data.distance" />
                  <LabeledText label="Time" value="data.data.time" />
                  <LabeledText label="Vehicle Number" value="data.data.vehicalNumber" /> */}
                  <LabeledText label="Model" value={data.data.model} />
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
                      <LabeledText label="Joining Date" value={epochToJsDate(customer.createdAt)} />
                      <LabeledTextRating label="Rating" icon value={customer.rating ? customer.rating : 0} />
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
                        {data.data.fare}
                      </Typography>
                    </div>
                  </Card>

                </div>
                <div className="w-1/2 ml-2">
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
                    <Typography className="" variant="h4">
                      Captain Details
                    </Typography>
                    {
                    captain
                      ? (
                        <div className="grid grid-cols-3 gap-4">
                          <LabeledText label="Full Name" value={captain.name} />
                          <LabeledText label="Mobile Number" value={captain.phone} />
                          <LabeledText label="Joining Date" value={epochToJsDate(captain.createdAt)} />
                          <LabeledTextRating label="Rating" icon value={captain.rating} />
                          <LabeledText label="City" value={captain.city} />
                          <LabeledText label="State" value={captain.state} />
                          <LabeledText label="Email" value={captain.email} />
                        </div>
                      )
                      : (
                        <div className="grid grid-cols-3 gap-4">
                          <LabeledText label="NA" value="" />
                        </div>
                      )

                  }
                  </Card>

                </div>
              </div>
            </>
          )
      }

    </section>
  );
};
