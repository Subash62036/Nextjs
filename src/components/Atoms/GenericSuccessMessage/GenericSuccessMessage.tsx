import React from 'react';
import classNames from 'classnames';

interface IGenericSuccessMessageProps {
  children: React.ReactNode
  className?: string
}

export const GenericSuccessMessage = ({
  children,
  className,
  ...restProps
}: IGenericSuccessMessageProps):JSX.Element => {
  const classes = classNames(
    className,
    'text-emerald-500 text-sm uppercase',
  );
  return (
    <div {...restProps} className={classes}>{children}</div>
  );
};
