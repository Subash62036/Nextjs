import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

export interface IInputProps {
  className?: string
  shadowSize?: string
  [x:string]: any
}

const shadowClass = {
  none: '',
  small: 'shadow',
  medium: 'shadow-md',
  large: 'shadow-lg',
  xlarge: 'shadow-xl',
  xxl: 'shadow-2xl',
};

const getShadowClass = (shadowSize = 'small') => shadowClass[shadowSize] || 'shadow';

const Input = ({
  shadowSize, className, ...restProps
}: IInputProps):JSX.Element => {
  // @ts-ignore
  const [field, meta] = useField(restProps);
  const classes = classNames(
    className,
    getShadowClass(shadowSize),
    'mt-2 border-0 p-3 placeholder-secondary-300 text-secondary-700 rounded text-base focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
  );
  return (
    <>
      <input {...field} {...restProps} className={classes} />
      {meta.error && meta.touched && (
        <div className="text-red-500 -mt-8 mb-8 pr-4">
          *
          {' '}
          {meta.error}
        </div>
      )}
    </>
  );
};

export { Input };
