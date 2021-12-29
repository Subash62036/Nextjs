import React from 'react';
import {
  Typography, Card, Button, LabeledText, LabeledTextRating,
} from 'components';
import classNames from 'classnames';
import { sentenceCase } from 'utils';

export const DashboardCustomerRideDetails = ():JSX.Element => {
  // temp data for testing
  const data = {
    tripDetails: {
      tripId: '00989793',
      date: '16 Dec 2021',
      from: '16 Dec 2021',
      to: 'Dhanbad',
      distance: '152 km',
      time: '4 Hours',
      vehicalNumber: 'JH-07-0682',
      model: 'Hyundai Xcent',
    },
    customerDetails: {
      fullName: 'Ankit Kumar',
      mobileNumber: '6587412984',
      email: 'abc@xyz.com',
      joiningDate: '17 Feb 2021',
      rating: '3.5',
      city: 'Ranchi',
      state: 'Jharkhand',
    },
    captainDetails: {
      fullName: 'Ankit Kumar',
      mobileNumber: '6587412984',
      email: 'abc@xyz.com',
      joiningDate: '17 Feb 2021',
      rating: '3.5',
      city: 'Ranchi',
      state: 'Jharkhand',
    },
    paymentDetails: {
      amount: '₹ 299.00',
      baseFare: '₹ 299.00',
      distanceFare: '₹ 299.00',
      discount: 'N/A',
      waitingCharges: '₹ 299.00',
      dynamicFare: '₹ 299.00',
      tip: '₹ 299.00',
      insurance: '₹ 299.00',
      cashback: '₹ 299.00',
      cash: '₹ 299.00',
      totalFareCollected: '₹ 299.00',
    },
  };

  const {
    tripDetails, customerDetails, captainDetails, paymentDetails,
  } = data;

  const invoiceDetails = [
    {
      label: 'Amount',
      value: '₹ 299.00',
    },
    {
      label: 'Base fare',
      value: '₹ 299.00',
    },
    {
      label: 'Distance fare',
      value: '₹ 299.00',
    },
    {
      label: 'Discount',
      value: 'N/A',
    },
    {
      label: 'Waiting charges',
      value: '₹ 299.00',
    },
    {
      label: 'Dynamic fare',
      value: '₹ 299.00',
    },
    {
      label: 'Tip',
      value: '₹ 299.00',
    },
    {
      label: 'Insurance',
      value: '₹ 299.00',
    },
    {
      label: 'Cashback',
      value: '₹ 299.00',
    },
    {
      label: 'Cash(to be collected)',
      value: '₹ 299.00',
    },
    {
      label: 'Total fare collected',
      value: '₹ 299.00',
    },
  ];

  const or = [
    {
      tripdetails: {
        tripId: '00989793',
        date: '16 Dec 2021',
        from: '16 Dec 2021',
        to: 'Dhanbad',
        distance: '152 km',
        time: '4 Hours',
        vehicalNumber: 'JH-07-0682',
        model: 'Hyundai Xcent',
      },
      customerDetails: {
        fullName: 'Ankit Kumar',
        mobileNumber: '6587412984',
        email: 'abc@xyz.com',
        joiningDate: '17 Feb 2021',
        Rating: '3.5 (star)',
        city: 'Ranchi',
        state: 'Jharkhand',
      },
      captainDetails: {
        fullName: 'Ankit Kumar',
        mobileNumber: '6587412984',
        email: 'abc@xyz.com',
        joiningDate: '17 Feb 2021',
        Rating: '3.5 (star)',
        city: 'Ranchi',
        state: 'Jharkhand',
      },
      paymentDetails: {
        amount: '₹ 299.00',
        baseFare: '₹ 299.00',
        distanceFare: '₹ 299.00',
        discount: 'N/A',
        waitingCharges: '₹ 299.00',
        dynamicFare: '₹ 299.00',
        tip: '₹ 299.00',
        insurance: '₹ 299.00',
        cashback: '₹ 299.00',
        cash: '₹ 299.00',
        totalFareCollected: '₹ 299.00',
      },
    },
  ];

  const a = {
    tripId: '00989793',
    date: '16 Dec 2021',
    from: '16 Dec 2021',
    to: 'Dhanbad',
    distance: '152 km',
    time: '4 Hours',
    vehicalNumber: 'JH-07-0682',
    model: 'Hyundai Xcent',
  };

  // temp data for testing

  return (
    <section className="m-6 w-full">
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
          {/* {Object.entries(a).map(([key, value]) => (
            <LabeledText label={sentenceCase(key)} value={value} />
          ))} */}
          <LabeledText label="Trip Details" value={tripDetails.tripId} />
          <LabeledText label="Date" value={tripDetails.date} />
          <LabeledText label="From" value={tripDetails.from} />
          <LabeledText label="To" value={tripDetails.to} />
          <LabeledText label="Distance" value={tripDetails.distance} />
          <LabeledText label="Time" value={tripDetails.time} />
          <LabeledText label="Vehicle Number" value={tripDetails.vehicalNumber} />
          <LabeledText label="Model" value={tripDetails.model} />

        </div>
      </Card>
      <div className="flex">
        <div className="w-1/2 mr-2">
          <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
            <Typography className="" variant="h4">
              Captain Details
            </Typography>
            <div className="grid grid-cols-3 gap-4">
              <LabeledText label="Full Name" value={captainDetails.fullName} />
              <LabeledText label="Mobile Number" value={captainDetails.mobileNumber} />
              <LabeledText label="Email" value={captainDetails.email} />
              <LabeledText label="Joining Date" value={captainDetails.joiningDate} />
              <LabeledTextRating label="Rating" icon value={customerDetails.rating} />
              <LabeledText label="City" value={captainDetails.city} />
              <LabeledText label="State" value={captainDetails.state} />
            </div>
          </Card>
        </div>
        <div className="w-1/2 ml-2">
          <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
            <div className="flex justify-between">
              <Typography className="" variant="h4">
                Payment Details
              </Typography>
              <Button variant="primary" className="bg-blue-500 text-white rounded-full h-6 disabled:transform-none cursor-default">INVOICE</Button>
            </div>

            {invoiceDetails.map(({ label, value }, i, row) => (
              <div className="flex justify-between ">
                <Typography className="text-grey-400 mt-2" variant="h4">
                  {label}
                </Typography>
                <Typography
                  className={classNames(
                    i + 1 === row.length
                      ? 'text-green-400 mt-2'
                      : 'mt-2',
                  )}
                  variant="h4"
                >
                  {value}
                </Typography>
              </div>
            ))}

          </Card>
        </div>
      </div>

    </section>
  );
};
