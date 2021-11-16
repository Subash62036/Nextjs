import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import { Label, Typography } from 'components';

export interface ILabeledTextProps {
  label: string
  className?: string
  labelClassName?: string
  [x:string]: any
}

const LabeledText = ({
  label, labelClassName, className, value, ...restProps
}: ILabeledTextProps):JSX.Element => {
  // @ts-ignore
  const classes = classNames(
    className,
    'mt-2 border-0 text-lg p-3 placeholder-secondary-300 text-secondary-700 rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
  );
  const labelClasses = classNames(
    labelClassName,
    'block mt-5 text-lg font-bold',
  );
  const textClasses = classNames(
    'block mt-5 text-lg ml-4',
  );

  return (
    <>
      <Label
        className={labelClasses}
        label={label}
      />
      <Typography className={textClasses} variant="h4">
        :
      </Typography>
      <Typography className={textClasses} variant="h4">
        {value}
      </Typography>
    </>
  );
};

export { LabeledText };
