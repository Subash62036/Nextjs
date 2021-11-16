import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useAuth } from 'state';
import { IAuthContext } from 'types';

interface IMenuItemProps {
  className?: string;
  href?: string;
  action?: () => void;
  text: string;
}

export const MenuItem = ({
  className, href, text, action,
}:IMenuItemProps):JSX.Element => {
  const { user: { username } } = useAuth() as IAuthContext;
  const classes = classNames(
    'rounded cursor-pointer block py-2 px-4 text-sm leading-5 text-gray-900 hover:text-primary-500 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out',
    className,
  );
  let link = href;
  if (href === '/api/logout') {
    link += `?username=${username}`;
  }
  return (
    <>
      {action
    && (
    <div tabIndex={-1} className={classes} role="menuitem" onClick={() => action()} onKeyUp={() => action()}>
      {text}
    </div>
    )}
      {!action && (
      <div className={classes} role="menuitem">
        {!link && text}
        {link && <Link href={link}>{text}</Link>}
      </div>
      )}
    </>
  );
};
