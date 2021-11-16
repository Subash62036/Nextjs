import React from 'react';
import classNames from 'classnames';

export interface IInputOrphanProps {
  className?: string
  [x:string]: any
}

export const InputOrphan = ({
  className, ...restProps
}: IInputOrphanProps):JSX.Element => {
  // @ts-ignore
  const classes = classNames(
    className,
    'mt-2 border-0 p-3 placeholder-secondary-300 text-secondary-700 rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
  );
  return (
    <>
      <input {...restProps} className={classes} />
    </>
  );
};
