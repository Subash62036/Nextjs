import React from 'react';
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
    'text-grey-300',
  );

  const textClasses = classNames(
    labelClassName,
    'font-semibold',
  );

  return (
    <div className="flex flex-col">
      <Typography variant="p" className={labelClasses}>
        {label}
      </Typography>
      <Typography variant="p" className={textClasses}>
        {value}
      </Typography>
    </div>
  );
};

export { LabeledText };
