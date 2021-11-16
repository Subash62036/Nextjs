import React from 'react';
import classNames from 'classnames';
import { Menu } from '@headlessui/react';

import { MenuItem } from 'components';

type TMenuItem = {
  href?: string;
  text: string;
  action?: () => void;
}

interface INavDropdownProps {
  className?: string;
  menuItems: TMenuItem[];
}

export const NavDropdown = ({ className, menuItems }:INavDropdownProps):JSX.Element => {
  const containerClasses = classNames(
    'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg',
    className,
  );
  return (
    <div className={containerClasses}>
      <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        {menuItems
        && menuItems.map(
          ({ text, href, action }) => <MenuItem text={text} href={href} action={action} />,
        )}
      </div>
    </div>
  );
};
