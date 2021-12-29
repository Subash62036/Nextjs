import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import {
  Typography, LabeledText, Card, Modal, DisableForm,
} from 'components';
import { useGlobalUiContext } from 'state';
import {
  IUIContext,
} from 'types';

export const DashboardCaptainDetails = ():JSX.Element => {
  const {
    state: { openDisableModal },
    actions: { setOpenDisableModal },
  } = useGlobalUiContext() as IUIContext;

  const active = true; // TODO: this value will be extracted from captain status obj
  const [enabled, setEnabled] = useState(active);
  const captainDetails = [
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

  const aadhaarDetails = [
    {
      label: 'Full name',
      value: 'Ankit Kumar',
    },
    {
      label: 'Date of birth',
      value: '10 Jan 1991',
    },
    {
      label: 'Gender',
      value: 'Male',
    },
    {
      label: 'Aadhaar number',
      value: '1234 4566 7898',
    },

  ];

  const vehicleDetails = [
    {
      label: 'Number',
      value: 'JH-07-0682',
    },
    {
      label: 'Model',
      value: 'Hyundai Xcent',
    },
    {
      label: 'Color',
      value: 'White',
    },
    {
      label: 'Registration number',
      value: '1234W4566PE7898',
    },
    {
      label: 'Registration state',
      value: 'Jharkhand',
    },
    {
      label: 'Registration Date',
      value: '10 Jan 1991',
    },

  ];

  const drivingLicenceDetails = [
    {
      label: 'Registration state',
      value: 'Jharkhand',
    },
  ];

  const registrationDetails = [
    {
      label: 'DL Number',
      value: 'JH-07-0682',
    },
    {
      label: 'DL issue on',
      value: '10 Jan 1991',
    },
    {
      label: 'Expire on',
      value: '10 Jan 1991',
    },
  ];

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

      <Modal
        setOpen={setOpenDisableModal}
        size="xlarge"
        open={openDisableModal}
        showCloseButton={false}
        id="1" // TODO: pass captain id
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
          {captainDetails.map(({ label, value }) => (
            <LabeledText label={label} value={value} />
          ))}

        </div>
      </Card>

      <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
        <div className="flex justify-between">
          <Typography className="m-2" variant="h4">
            Aadhaar Details
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            {aadhaarDetails.map(({ label, value }) => (
              <LabeledText label={label} value={value} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <LabeledText label="Front" value="" />
            <LabeledText label="Back" value="" />
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
              {/* TODO: add verify button */}
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {vehicleDetails.map(({ label, value }) => (
                  <LabeledText label={label} value={value} />
                ))}
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
              {drivingLicenceDetails.map(({ label, value }) => (
                <LabeledText label={label} value={value} />
              ))}
              <LabeledText label="Front" value="" />
              {/* TODO: add image */}
            </div>
          </Card>
        </div>

        <div className="w-1/2 ml-2">
          <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
            <div className="flex justify-between">
              <Typography className="m-2" variant="h4">
                Driving Licence Details
              </Typography>
              {/* TODO: add verify button */}
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {drivingLicenceDetails.map(({ label, value }) => (
                  <LabeledText label={label} value={value} />
                ))}
              </div>
              <LabeledText label="Front" value="" />
              {/* TODO: add image */}
            </div>
          </Card>
        </div>
      </div>

    </section>
  );
};
