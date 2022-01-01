import React from 'react';
import classNames from 'classnames';

export const LoadingIndicator = ({ className = '' }) => {
  const classes = classNames(
    className,
    'flex-no-shrink animate-spin',
  );
  return (
    <div className="flex h-screen items-center justify-center space-x-2 animate-bounce">
      <div className="w-8 h-8 bg-primary-400 rounded-full" />
      <div className="w-8 h-8 bg-primary-600 rounded-full" />
      <div className="w-8 h-8 bg-black rounded-full" />
    </div>
  );
};
