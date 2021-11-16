import React, { FC } from 'react';
import classNames from 'classnames';

export interface CardProps {
  size?: string
  variant?: string
  children: React.ReactNode
  className?: string
}

const responsivClass = 'relativebg-gray-100 ';

const variantClasses = {
  noborderRadius: `relative px-4 py-10 bg-white shadow-lg
   py-1 text-base leading-6 space-y-1 text-gray-700 sm:text-lg sm:leading-6`,

  borderRadius: `relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl
  py-4 text-base leading-6 space-y-1 text-gray-700 sm:text-lg sm:leading-6`,
};

const sizeClasses = {
  small: 'sm:p-10',
  medium: 'sm:p-20',
  large: 'sm:p-40',
};

const defaultSize = 'small';
const getVariantClasses = (variant) => variantClasses[variant] || variantClasses.noborderRadius;
const getSizeClasses = (size) => sizeClasses[size] || sizeClasses[defaultSize];

export const Card: FC<CardProps> = ({
  children,
  className,
  variant,
  size,
  ...restProps
}) => {
  const mergedClasses = classNames(
    className,
    responsivClass,
    getVariantClasses(variant),
    getSizeClasses(size),
  );
  return (
    <div className={mergedClasses} {...restProps}>
      {children}
    </div>
  );
};
