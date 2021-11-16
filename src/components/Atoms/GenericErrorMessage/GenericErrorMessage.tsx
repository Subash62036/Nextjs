import React from 'react';
import classNames from 'classnames';

interface IGenericErrorMessageProps {
  children: React.ReactNode
  className?: string
}

export const GenericErrorMessage = ({
  children,
  className,
  ...restProps
}: IGenericErrorMessageProps):JSX.Element => {
  const classes = classNames(
    className,
    'text-red-300 mt-4 text-sm uppercase',
  );
  return (
    <div {...restProps} className={classes}>{children}</div>
  );
};
