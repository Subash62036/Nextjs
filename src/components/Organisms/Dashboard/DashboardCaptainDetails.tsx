import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import {
  Typography, LabeledText, Card, Modal, DisableForm, LabeledTextRating, LoadingIndicator, Button,
} from 'components';
import { useGlobalUiContext } from 'state';
import {
  IUIContext,
} from 'types';
import {
  useGetCaptainDetailsQuery,
} from 'hooks';

export const DashboardCaptainDetails = ():JSX.Element => {
  const {
    state: { openDisableModal },
    actions: { setOpenDisableModal },
  } = useGlobalUiContext() as IUIContext;

  const { data } = useGetCaptainDetailsQuery();
  const [isFetched, setIsFetched] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const {
    name, active, phone, email, createdAt, rating, city, state, id, vehicle, licence, aadhar,
  } = isFetched && data.data;

  useEffect(() => {
    if (data) {
      setIsFetched(true);
      setEnabled(active);
    }
  }, [data]);

  const or = [
    {
      captainDetails: {
        fullName: 'Ankit Kumar',
        mobileNumber: '6587412984',
        email: 'abc@xyz.com',
        joiningDate: '17 Feb 2021',
        Rating: '3.5 (star)',
        totalRides: '50',
        city: 'Ranchi',
        state: 'Jharkhand',
        active: true,
      },
      aadhaarDetails: {
        fullName: 'Ankit Kumar',
        dateOfBirth: '10 Jan 1991',
        gender: 'Male',
        aadhaarNumber: '1234 5678 9854',
        aadhaarFrontPhoto: 'url',
        aadhaarBackPhoto: 'url',
        verified: true,
      },
      vehicleDetails: {
        number: 'JH-07-0872',
        model: 'Hyndai Xcent',
        color: 'white',
        registrationNumber: '1234W4566PE7898',
        registrationState: 'Jharkhand',
        registrationDate: '10 Jan 1991',
        vehicleImage: 'url',
      },
      drivingLicenceDetails: {
        registrationState: 'Jharkhand',
        frontImage: 'url',
        backmage: 'url',
        verified: true,
      },
      registrationDetails: {
        number: 'JH-07-0682',
        issuedOn: '10 Jan 1991',
        expiresOn: '10 Jan 1991',
        vehicleImage: 'url',
        verified: true,
      },
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

      {
        !isFetched
          ? <LoadingIndicator className="h-20 w-20 text-center" />
          : (
            <>

              <Modal
                setOpen={setOpenDisableModal}
                size="xlarge"
                open={openDisableModal}
                showCloseButton={false}
                id="1"
              >

                <DisableForm />
                {/* TODO: pass captain id in form */}
              </Modal>

              <Typography className="mt-5" variant="p">
                Home / User /
                <b> Captain</b>
              </Typography>

              <Typography className="m-2" variant="h3">
                Captain Details
              </Typography>
              {/* TODO: add active disable dropdown here */}

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
                      } relative inline-flex items-center h-6 
                      rounded-full w-11 border-black m-2`}
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
                  <LabeledText label="Joining Date" value={createdAt} />
                  <LabeledTextRating label="Rating" icon value={rating} />
                  <LabeledText label="City" value={city} />
                  <LabeledText label="State" value={state} />
                  <LabeledText label="Email" value={email} />

                </div>
              </Card>

              <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                <div className="flex justify-between">
                  <Typography className="" variant="h4">
                    Aadhaar Details
                  </Typography>
                  {/* TODO: aadhar.verificationStatus is false ,onclick button verify aadhaar */}
                  {
                    aadhar.verificationStatus && <Button variant="primary" className="bg-green-500 text-white rounded-md h-6 disabled:transform-none cursor-default">VERIFY</Button>
                  }

                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <LabeledText label="Number" value={aadhar.aadhaarNumber} />
                    <LabeledText label="Front" value="" />
                    <LabeledText label="Back" value="" />
                    <LabeledText label="Verified By" value={aadhar.verifiedBy} />

                  </div>
                </div>
              </Card>

              <div className="flex">
                <div className="w-1/2 ml-2">
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                    <div className="flex justify-between">
                      <Typography className="m-2" variant="h4">
                        Vehical Details
                      </Typography>

                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-4">
                        <LabeledText label="Number" value={vehicle.numberPlate} />
                        <LabeledText label="Color" value={vehicle.color} />
                        <LabeledText label="Model" value={vehicle.model} />
                        <LabeledText label="Type" value={vehicle.type} />
                        <LabeledText label="Color" value={vehicle.color} />

                      </div>
                      <LabeledText label="Front" value="" />
                      {/* TODO: add image */}
                    </div>
                  </Card>
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                    <div className="flex justify-between">
                      <Typography className="m-2" variant="h4">
                        Registration Details
                      </Typography>
                      {/* TODO: add verify button */}
                    </div>
                    <div>
                      <LabeledText label="Registration Year" value={vehicle.vehicleRegistrationYear} />

                      <LabeledText label="Front" value="" />
                      <LabeledText label="Back" value="" />
                      {/* TODO: add image */}
                    </div>
                  </Card>
                </div>

                <div className="w-1/2 ml-2">
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                    <div className="flex justify-between">
                      <Typography className="" variant="h4">
                        Driving Licence Details
                      </Typography>
                      {
                    licence.verificationStatus && <Button variant="primary" className="bg-green-500 text-white rounded-md h-6 disabled:transform-none cursor-default">VERIFY</Button>
                  }
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-4">
                        <LabeledText label="Number" value={licence.licenceNumber} />
                        <LabeledText label="Expiry Date" value={licence.licenceExpiryDate} />
                        <LabeledText label="Verified By" value={licence.verifiedBy} />

                      </div>
                      <LabeledText label="Front" value="" />
                      <LabeledText label="Back" value="" />
                      {/* TODO: add image */}
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
