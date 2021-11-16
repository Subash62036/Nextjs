import React from 'react';
import classNames from 'classnames';

interface IUploadButtonProps {
  className?: string
  onChange: (e) => void
  accept?: string
}

export const UploadButton = React.forwardRef<HTMLInputElement, IUploadButtonProps>(
  ({ className, onChange, accept }: IUploadButtonProps, ref) => {
    const classes = classNames(
      className,
      'text-primary-500 transition-colors w-64 flex flex-col items-center p-4 bg-white rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-primary-500 hover:text-white',
    );
    return (
    // <div className="flex w-full h-screen items-center justify-center bg-grey-lighter">
      <label htmlFor="file-upload" className={classes}>
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input accept={accept} ref={ref} id="file-upload" type="file" className="hidden" onChange={(e) => onChange(e)} />
      </label>
    // </div>;
    );
  },
);
