import React from 'react';
import classNames from 'classnames';

export interface ILabelProps {
  label: string
  className?: string
  labelClassName?: string
  children?: React.ReactNode
  [x: string]: any
}

const Label = ({
  label,
  className,
  htmlFor,
  children,
  ...restProps
}: ILabelProps): JSX.Element => {
  const classes = classNames(
    className,
    'block mt-4 text-sm font-bold',
  );
  return (
    <>
      <label className={classes} htmlFor={htmlFor} {...restProps}>
        {label}
        {children}
      </label>
    </>
  );
};

export { Label };
