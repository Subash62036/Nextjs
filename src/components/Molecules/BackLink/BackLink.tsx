import React from 'react';
import Link from 'next/link';
import { ArrowCircleLeftIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

interface IBackLinkProps {
  href?: string;
  text: string;
  className?: string;
  onClick?: () => void
}

export const BackLink = ({
  text, href, className, onClick,
}:IBackLinkProps):JSX.Element => {
  const classes = classNames(
    className,
    'mt-4 hover:text-primary-500 transition-colors cursor-pointer',
  );
  return (
    <>
      {onClick
    && (
    <button className={classes} onClick={() => onClick()}>
      <span className="flex items-center">
        <ArrowCircleLeftIcon className="mr-1 w-5 h-5" />
        {text}
      </span>
    </button>
    )}
      {href
    && (
    <div className={classes}>
      <Link href={href}>
        <span className="flex items-center">
          <ArrowCircleLeftIcon className="mr-1 w-5 h-5" />
          {text}
        </span>
      </Link>
    </div>
    )}
    </>
  );
};
