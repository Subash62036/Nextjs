import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import {
  KeyIcon, UserCircleIcon, ArchiveIcon, UserIcon, HomeIcon,
} from '@heroicons/react/outline';
import {
  UserProfile, ChangePasswordForm,
  Typography,
  DashboardMain, DashboardCaptain, DashboardOrder, DashboardCustomer,
} from 'components';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { API, URIS } from 'config';
import DashboardLayout from 'layouts/DashboardLayout';

export const DashboardInterface = () => {
  const [tabName, setTabName] = useState('Dashboard');
  const sidebarNavigation = [
    {
      name: 'Customer',
      href: '#',
      icon: HomeIcon,
    },
    {
      name: 'Captain',
      href: '#',
      icon: HomeIcon,
    },
  ];

  const changeRoutes = (item) => {
    if (item !== tabName) {
      setTabName(item);
    }
  };

  const selected = classNames(
    'bg-primary-50 border-primary-500 text-primary-700 hover:bg-primary-50 hover:text-primary-700 w-full',
  );
  const unselected = classNames(
    'border-transparent text-black hover:bg-primary-200 hover:text-black w-full',
  );

  const classes = classNames('group border-l-4 px-3 py-2 flex items-center text-sm font-medium');

  const selectedIcon = classNames(
    'text-primary-700 group-hover:text-primary-500',
  );
  const unselectedIcon = classNames(
    'text-black ',
  );

  const classesIcon = classNames('flex-shrink-0 -ml-1 mr-3 h-6 w-6');

  return (
    <>
      <aside className="py-6 w-1/6 bg-white">
        <nav className="space-y-1">
          <button
            key="Dashboard"
            onClick={() => changeRoutes('Dashboard')}
            className={classNames(
              tabName === 'Dashboard'
                ? selected
                : unselected,
              classes,
            )}
            aria-current={tabName === 'Dashboard' ? 'page' : undefined}
          >
            <HomeIcon
              className={classNames(
                tabName === 'Dashboard'
                  ? selectedIcon
                  : unselectedIcon,
                classesIcon,
              )}
              aria-hidden="true"
            />
            <span className="truncate">Dashboard</span>
          </button>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={classNames(
                    open
                      ? selected
                      : unselected,
                    classes, 'justify-between',
                  )}
                >

                  <span className="flex">
                    {' '}
                    <UserIcon
                      className={classNames(
                        open
                          ? selectedIcon
                          : unselectedIcon,
                        classesIcon,
                      )}
                      aria-hidden="true"
                    />
                    User
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180 text-primary-500' : ''
                    } w-5 h-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {sidebarNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => changeRoutes(item.name)}
                      className={classNames(
                        item.name === tabName
                          ? selected
                          : unselected,
                        classes,
                      )}
                      aria-current={item.name === tabName ? 'page' : undefined}
                    >

                      <span className="truncate">{item.name}</span>
                    </a>

                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <button
            key="Order"
            onClick={() => changeRoutes('Order')}
            className={classNames(
              tabName === 'Order'
                ? selected
                : unselected,
              classes,
            )}
            aria-current={tabName === 'Order' ? 'page' : undefined}
          >
            <ArchiveIcon
              className={classNames(
                tabName === 'Order'
                  ? selectedIcon
                  : unselectedIcon,
                classesIcon,
              )}
              aria-hidden="true"
            />
            <span className="truncate">Order</span>
          </button>
        </nav>
      </aside>
      <div className="w-5/6 h-screen ">
        {tabName === 'Dashboard' && (
        <DashboardMain />
        )}
        {tabName === 'Captain' && (
        <DashboardCaptain />
        )}
        {tabName === 'Customer' && (
        <DashboardCustomer />
        )}
        {tabName === 'Order' && (
        <DashboardOrder />
        )}
      </div>
    </>
  );
};
