/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { MenuItem, Button } from 'components';
import { useAuth } from 'state';
import { IAuthContext } from 'types';

import { MAIN_NAV, ROUTES } from 'config';
import Rapido from '../../../../public/favico/android-chrome.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ProfileMenu = (dropDownMenuItems, handleLogout) => (
  <Menu as="div" className="ml-3 relative">
    <div>
      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
        <span className="sr-only">Open user menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {dropDownMenuItems.map(
          ({ text, href }) => (
            <MenuItem key={text} href={href} text={text} />
          ),
        )}
        <MenuItem action={handleLogout} text="Log Out" />
      </Menu.Items>
    </Transition>
  </Menu>
);

export const MainNav = () => {
  const { actions: { handleLogout }, user: { data } } = useAuth() as IAuthContext;
  let dropDownMenuItems = [];
  let mainMenuItems = [];
  if (data) {
    dropDownMenuItems = MAIN_NAV.LOGGED_IN.USER_DROPDOWN_MENU;
    mainMenuItems = MAIN_NAV.LOGGED_IN.MAIN_MENU_ITEMS;
  }
  const { route } = useRouter();
  return (
    <Disclosure as="nav" className="bg-white shadow z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ml-20">
                  <Link href={ROUTES.HOME}>
                    <span className="flex items-center">
                      <Image
                        className="cursor-pointer"
                        alt="RAPIDO"
                        width="100"
                        height="60"
                        src={Rapido}
                      />
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {mainMenuItems && mainMenuItems.map(({ text, href }) => (
                    <Link href={href}>
                      <span className={classNames(route === href ? 'border-primary-500' : '', 'cursor-pointer text-gray-900 inline-flex items-center px-1 pt-1 border-transparent border-b-4 hover:border-primary-300 text-sm font-medium transition-all')}>
                        {text}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {data && ProfileMenu(dropDownMenuItems, handleLogout)}
                {!data
                && (
                <>
                  <Button variant="primary" href={ROUTES.LOGIN}>Log In</Button>
                </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {mainMenuItems && mainMenuItems.map(({ text, href }) => (
                <a
                  href={href}
                  className={classNames(route === href ? 'border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium')}
                >
                  {text}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
