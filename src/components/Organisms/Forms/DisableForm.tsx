import React, { Fragment, useState } from 'react';
import {
  Formik, Form,
} from 'formik';
import { useRouter } from 'next/router';
import { useGlobalUiContext } from 'state';
import {
  LabeledInput, Button, Typography, GenericErrorMessage,
} from 'components';
import {
  IUIContext, IAuthContext,
} from 'types';
import { DisableSchema } from 'config';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Listbox, Transition } from '@headlessui/react';

export const DisableForm = ():JSX.Element => {
  const reasonsList = [
    { name: 'Some reason', key: 10 },
    { name: 'Some other reason', key: 20 },
    { name: 'Some other reason again', key: 30 }, // TODO: ask for the values make this a constant
  ];

  const [selectedList, setSelectedList] = useState(reasonsList[0]);
  const [error, setError] = useState('');
  const {
    actions: { setOpenDisableModal },
  } = useGlobalUiContext() as IUIContext;

  const submitForm = (formData) => {
    const form = formData;
    form.reason = selectedList.name;
    console.log(form);
    // TODO: call mutation to submit data
    // if(type=captain) call captainDisableMutation
    // elseif(type==customer) call customerDisableMutation
    // setError if mutation fails
    setOpenDisableModal(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          reason: selectedList.name,
          remarks: '',
        }}
        validateOnBlur
        validationSchema={DisableSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {() => (
          <Form data-test-id="disableForm">
            <Typography variant="h3" className="">Customer Deactivate</Typography>

            <Listbox value={selectedList} onChange={setSelectedList}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selectedList.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {reasonsList.map((person, personIdx) => (
                      <Listbox.Option
                        key={person.key}
                        className={({ active }) => `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`}
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? 'font-medium' : 'font-normal'
                              } block truncate`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? 'text-amber-600' : 'text-amber-600'
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <LabeledInput
              name="remarks"
              label="Remarks"
              type="string"
              placeholderText="Remarks"
              className="bg-grey-50"
              isTextArea
              textAreaRows={2}
            />
            {error && (<GenericErrorMessage data-test-id="login-error">{error}</GenericErrorMessage>)}
            <Button data-test-id="loginSubmit" type="submit" className="mt-6 w-full">Deactivate</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
