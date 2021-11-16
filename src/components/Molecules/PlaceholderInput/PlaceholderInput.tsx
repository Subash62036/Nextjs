import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { GenericErrorMessage } from 'components';

export interface IPlaceholderInputProps {
  className?: string
  placeholderText?: string
  isTextArea?: boolean
  textAreaRows?: number
  textAreaCols?: number
  onChangeHandler?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  name: string
}

export const PlaceholderInput = ({
  className, placeholderText, isTextArea, textAreaRows, textAreaCols, onChangeHandler, name,
}: IPlaceholderInputProps):JSX.Element => {
  // @ts-ignore
  const classes = classNames(
    'mt-2 border-0 p-3 placeholder-secondary-300 text-secondary-700 rounded-lg text-base focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
    className,
  );

  const [field, meta] = useField(name);

  return (
    <>
      {
        isTextArea
          ? (
            <textarea
              className={classes}
              placeholder={placeholderText}
              rows={textAreaRows}
              cols={textAreaCols}
              onChange={onChangeHandler}
              {...field}
              name={name}
            />
          )
          : (
            <input
              className={classes}
              placeholder={placeholderText}
              onChange={onChangeHandler}
              {...field}
              name={name}
            />
          )
      }
      {meta.error && meta.touched && (<GenericErrorMessage>{meta.error}</GenericErrorMessage>)}
    </>
  );
};

PlaceholderInput.propTypes = {
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  isTextArea: PropTypes.bool,
  textAreaRows: PropTypes.number,
  textAreaCols: PropTypes.number,
  name: PropTypes.string,
  onChangeHandler: PropTypes.func,
};
