import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import { Label } from 'components';

export interface ILabeledInputProps {
  label: string
  className?: string
  labelClassName?: string
  isTextArea?: true
  [x:string]: any
}

const LabeledInput = ({
  label, labelClassName, className, isTextArea, ...restProps
}: ILabeledInputProps):JSX.Element => {
  // @ts-ignore
  const [field, meta] = useField(restProps);
  const classes = classNames(
    className,
    'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
  );
  const labelClasses = classNames(
    labelClassName,
    'block text-sm font-medium text-gray-700',
  );
  return (
    <>
      <Label
        className={labelClasses}
        htmlFor={field.name}
        label={label}
      >
        {!isTextArea
        && <input {...field} {...restProps} className={classes} />}
        {isTextArea
        && <textarea {...field} cols={60} rows={10} className={classNames(classes, 'resize-y border rounded-md')} />}
        {meta.error && meta.touched && (
        <div className="text-red-500 mt-2">
          *
          {' '}
          {meta.error}
        </div>
        )}
      </Label>
    </>
  );
};

export { LabeledInput };
