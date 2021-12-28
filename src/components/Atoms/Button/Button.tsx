import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  variant?: string,
  size?: string,
  classes?: string,
  children: React.ReactNode
  buttonType?: ButtonType,
  leftIcon?: React.ReactNode,
  [x:string]: any
}

const commonClasses = `px-4 py-2 font-medium leading-loose outline-none ease-linear transition-all duration-150
                      flex items-center space-x-2 
                      focus:outline-none hover:shadow-lg justify-center`;

const variantClasses = {
  primary: `text-black bg-primary-600 border border-primary-600 
            hover:border-primary-500 rounded-md
            active:bg-primary-600`,

  secondary: `cursor-pointer flex justify-center items-center 
  border border-gray-300 shadow-sm rounded-md
  text-sm text-gray-700 bg-white hover:bg-gray-50`,

  tertiary: `text-secondary-600 bg-transparent border border-transparent shadow-none
            hover:shadow-none hover:text-primary-500
            active:bg-gray-300`,

  cancel: `text-black bg-red-400 border-none shadow-none
            hover:shadow-none hover:bg-red-600 rounded-md
            active:bg-gray-300`,
  submit: `text-black bg-primary-950 border border-primary-999 
            hover:bg-primary-950 hover:border-primary-500 rounded-md
            active:bg-primary-600`,
  grid: 'disabled:opacity-50 flex-1 font-medium p-4 text-sm hover:bg-gray-300 hover:bg-opacity-50 transition-colors',
};

const sizeClasses = {
  small: 'text-xs',
  smedium: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
  xlarge: 'text-2xl',
};

const defaultSize = 'medium';
const getVariantClasses = (variant) => variantClasses[variant] || variantClasses.primary;
const getSizeClasses = (size) => sizeClasses[size] || sizeClasses[defaultSize];

export const Button: React.FC<ButtonProps> = ({
  children, className, variant, size, leftIcon, ...restProps
}) => {
  const { href, buttonType = 'button' } = restProps;
  const mergedClasses = classNames(
    className,
    (variant !== 'grid' ? commonClasses : ''),
    getVariantClasses(variant),
    (variant !== 'grid' ? getSizeClasses(size) : ''),
    'disabled:opacity-50',
  );

  const buttonContent = (
    <>
      { leftIcon || '' }
      <span>{children}</span>
    </>
  );

  let ButtonHTML = (
    <button
      type={buttonType}
      {...restProps}
      className={mergedClasses}
    >
      { buttonContent }
    </button>
  );
  if (href) {
    ButtonHTML = (
      <Link href={href} {...restProps}>
        <button className={mergedClasses}>
          { buttonContent }
        </button>
      </Link>
    );
  }
  return ButtonHTML;
};

Button.displayName = 'Button';
