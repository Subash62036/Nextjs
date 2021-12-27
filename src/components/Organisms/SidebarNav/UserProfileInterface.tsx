import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { KeyIcon, UserCircleIcon } from '@heroicons/react/outline';
import { UserProfile, ChangePasswordForm } from 'components';

export const UserProfileInterface = ({ user }) => {
  const [tabNav, setTabNav] = useState(true);
  const [tabName, setTabName] = useState('Profile');
  const sidebarNavigation = [
    {
      name: 'Profile',
      href: '#',
      icon: UserCircleIcon,
      current: tabNav,
    },
    {
      name: 'Password',
      href: '#',
      icon: KeyIcon,
      current: !tabNav,
    },
  ];

  const changeRoutes = (item) => {
    if (item.name !== tabName) {
      setTabNav((prev) => !prev);
      setTabName(item.name);
    }
  };

  return (
    <main className="relative mt-32">
      <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            <aside className="py-6 lg:col-span-3">
              <nav className="space-y-1">
                {sidebarNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => changeRoutes(item)}
                    className={classNames(
                      item.current
                        ? 'bg-primary-50 border-primary-500 text-primary-700 hover:bg-primary-50 hover:text-primary-700'
                        : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                      'group border-l-4 px-3 py-2 flex items-center text-sm font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-primary-500 group-hover:text-primary-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>
            <div className="divide-y divide-gray-200 lg:col-span-9">
              <div className="p-4">
                {tabName === 'Profile' && (
                  <UserProfile user={user} />
                )}
                {tabName === 'Password' && (
                  <ChangePasswordForm />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
