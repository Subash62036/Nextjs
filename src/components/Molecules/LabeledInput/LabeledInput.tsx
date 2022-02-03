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
    'appearance-none text-black block w-full px-1 py-2 border-0 border-b-2 border-gray-300 placeholder-black focus:outline-none focus:border-primary-500 sm:text-sm',
  );
  const labelClasses = classNames(
    labelClassName,
    'block text-md text-black',
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
        && <textarea {...field} cols={60} rows={10} className={classNames(classes, 'resize-y border rounded-md text-black')} />}
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
