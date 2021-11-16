import React, { FC } from 'react';
import { Circles } from '@agney/react-loading';
import classNames from 'classnames';

export interface LoadingProps {
  primary: any
  color: string
  width: number
  label: string
  className?: string
}

export const Loader: FC<LoadingProps> = ({
  primary,
  color,
  width,
  label,
  className,
  ...props
}) => {
  const mode = primary
    ? 'storybook-Loader--primary'
    : 'storybook-Loader--secondary';

  const classes = classNames(
    ['storybook-Loader', mode].join(' '),
    className,
  );
  return (
    // @ts-ignore
    <Circles
      className={classes}
      style={color && { color }}
      width={width}
      {...props}
    >
      {label}
    </Circles>
  );
};
