import React from 'react';
import classNames from 'classnames';
import { StarIcon } from '@heroicons/react/solid';

import { Label, Typography } from 'components';

export interface ILabeledTextRatingProps {
  label: string
  className?: string
  labelClassName?: string
  [x:string]: any,
  icon : boolean
}

const LabeledTextRating = ({
  label, labelClassName, className, value, icon, ...restProps
}: ILabeledTextRatingProps):JSX.Element => {
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
      <span className="flex items-end">
        <Typography variant="p" className={textClasses}>
          {value}
        </Typography>
        {
        icon && <StarIcon className="text-primary-400 w-5 h-5 ml-2 mb-1" />

      }
      </span>
    </div>
  );
};

export { LabeledTextRating };
