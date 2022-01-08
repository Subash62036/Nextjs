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
  useGetCaptainDetailsQuery, useEnableDisableUserMutation,
  useVerifyDocumentMutation,
} from 'hooks';
import { epochToJsDate, onErrorResponse } from 'utils';
import { useRouter } from 'next/router';

import { useQueryClient } from 'react-query';

export const DashboardCaptainDetails = ():JSX.Element => {
  const {
    state: { openDisableModal },
    actions: { setOpenDisableModal },
  } = useGlobalUiContext() as IUIContext;
  const { query } = useRouter();

  const { data } = useGetCaptainDetailsQuery(query.detail);
  const [isFetched, setIsFetched] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const {
    vehicle, licence, aadhar, captain,
  } = isFetched && data.data;
  const [error, setError] = useState('');
  const userId = query.detail;
  const queryClient = useQueryClient();

  const handleSuccess = (e) => {
    queryClient.refetchQueries('captainById');
    setError('');
    // setOpenDisableModal(false);
  };

  useEffect(() => {
    if (data) {
      setIsFetched(true);
    }
  }, [data]);

  useEffect(() => {
    if (error !== '') {
      setInterval(() => {
        setError('');
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (captain) setEnabled(captain.active);
  }, [captain]);

  const onError = (e) => {
    const textError = onErrorResponse(e);
    setError('Something went wrong');
    setEnabled(captain.active);
    queryClient.refetchQueries('captainById');
  };

  const userStatusMutation = useEnableDisableUserMutation(onError, handleSuccess);
  const verifyDoc = useVerifyDocumentMutation(onError, handleSuccess);

  const toggle = (e) => {
    if (e) {
      setEnabled(e);
      const values = {
        formdata: {
          active: e,
        },
        id: userId,
      };
      userStatusMutation.mutate(values);
    } else {
      setEnabled(e);
      const values = {
        formdata: {
          active: e,
        },
        id: userId,
      };
      userStatusMutation.mutate(values);
      // setOpenDisableModal(true);
    }
  };

  const onVerify = (e) => {
    const form = {
      formdata: {
        documentType: e,
        status: true,
      },
      id: userId,
    };
    verifyDoc.mutate(form);
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

                <DisableForm id={query.detail} />
              </Modal>

              <Typography className="mt-5" variant="p">
                Home / User /
                <b> Captain</b>
              </Typography>

              <Typography className="m-2" variant="h3">
                Captain Details
              </Typography>

              <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y">
                <div className="flex justify-between">
                  <Typography className="m-2" variant="h4">
                    Personal information
                  </Typography>
                  <span className="flex">
                    {error
                    && (
                    <Typography variant="p" className="text-red-500 pr-4">
                      { error}
                    </Typography>
                    )}
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
                  <LabeledText label="Full Name" value={captain.name} />
                  <LabeledText label="Phone" value={captain.phone} />
                  <LabeledText label="Joining Date" value={epochToJsDate(captain.createdAt)} />
                  {
                    captain.rating ? <LabeledTextRating label="Rating" icon value={captain.rating} />
                      : <LabeledTextRating label="Rating" icon value={0} />
                  }
                  <LabeledText label="City" value={captain.city} />
                  <LabeledText label="State" value={captain.state} />
                  <LabeledText label="Email" value={captain.email} />

                </div>
              </Card>

              <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                <div className="flex justify-between">
                  <Typography className="" variant="h4">
                    Aadhaar Details
                  </Typography>
                </div>
                <div className="flex flex-wrap justify-between">
                  <LabeledText label="Number" value={aadhar.aadharNumber} />
                  <div className="flex flex-col">
                    <LabeledText label="Front" value="" />
                    {
                      aadhar.aadharFrontImage ? <img alt="img" className="w-90 h-64" src={aadhar.aadharFrontImage} /> : 'NA'
                    }
                  </div>
                  <div className="flex flex-col">
                    <LabeledText label="Back" value="" />
                    {
                      aadhar.aadharFrontImage ? <img alt="img" className="w-90 h-64" src={aadhar.aadharBackImage} /> : 'NA'
                    }

                  </div>
                </div>
              </Card>

              <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                <div className="flex justify-between">
                  <Typography className="" variant="h4">
                    Driving Licence Details
                  </Typography>
                  {
                    !licence.verificationStatus && <Button variant="primary" className="bg-green-500 text-white rounded-md h-6 disabled:transform-none cursor-default" onClick={() => onVerify('DL')}>VERIFY</Button>
                      }
                </div>
                <div className="flex flex-col flex-wrap justify-between">
                  <div className="flex flex-wrap justify-start gap-20">
                    <LabeledText label="Number" value={licence.licenceNumber} />
                    <LabeledText label="Expiry Date" value={licence.licenceExpiryDate} />
                    <LabeledText label="Verified By" value={licence.verifiedBy} />

                  </div>
                  <div className="flex flex-wrap justify-start gap-20">
                    <div className="flex flex-col">
                      <LabeledText label="Front" value="" />
                      {
                      licence.licenceFrontImage ? <img alt="img" className="w-90 h-64" src={licence.licenceFrontImage} /> : 'NA'
                    }
                    </div>
                    <div className="flex flex-col">
                      <LabeledText label="Back" value="" />
                      {
                      licence.licenceBackImage ? <img alt="img" className="w-90 h-64" src={licence.licenceBackImage} /> : 'NA'
                    }

                    </div>
                  </div>

                </div>

                {
                    licence.verificationStatus && (
                    <span className="text-green-400 mt-3">
                      Verified by
                      {' '}
                      {licence.verifiedBy}
                      {' '}
                      at
                      {' '}
                      {epochToJsDate(licence.verifiedAt)}
                    </span>
                    )
                      }
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
                        <LabeledText label="Color" value={vehicle.vehicleColor} />
                        <LabeledText label="Model" value={vehicle.vehicleModel} />
                        <LabeledText label="Type" value={vehicle.vehicleType} />
                      </div>
                      <div className="flex flex-col">
                        <LabeledText label="Back" value="" />
                        {
                      vehicle.vehicleImage ? <img alt="img" className="w-80 h-64" src={vehicle.vehicleImage} /> : 'NA'
                    }
                      </div>

                    </div>
                  </Card>
                </div>

                <div className="w-1/2 ml-2">
                  <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-3">
                    <div className="flex justify-between">
                      <Typography className="m-2" variant="h4">
                        Registration Details
                      </Typography>
                      {
                    !vehicle.verificationStatus && <Button variant="primary" className="bg-green-500 text-white rounded-md h-6 disabled:transform-none cursor-default" onClick={() => onVerify('RC')}>VERIFY</Button>
                      }
                    </div>
                    <div>
                      <LabeledText label="Registration Year" value={vehicle.vehicleRegistrationYear} />

                      <div className="flex flex-col">
                        <LabeledText label="Back" value="" />
                        {
                      vehicle.vehicleRegistrationFrontImage ? <img alt="img" className="w-80 h-64" src={vehicle.vehicleRegistrationFrontImage} /> : 'NA'
                    }
                      </div>
                      <div className="flex flex-col">
                        <LabeledText label="Back" value="" />
                        {
                      vehicle.vehicleRegistrationBackImage ? <img alt="img" className="w-80 h-64" src={vehicle.vehicleRegistrationBackImage} /> : 'NA'
                    }
                      </div>
                      {
                    vehicle.verificationStatus && (
                    <span className="text-green-400 mt-3">
                      Verified by
                      {' '}
                      {vehicle.verifiedBy}
                      {' '}
                      at
                      {' '}
                      {epochToJsDate(vehicle.verifiedAt)}
                    </span>
                    )
                      }
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
