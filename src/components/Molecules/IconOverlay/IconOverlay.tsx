import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface IconOverlayProps {
  bgColor?: string,
  size?: string,
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
  onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void,
  caption: string
}

const iconSizeClasses = {
  small: 'w-8 h-8',
  medium: 'w-12 h-12',
  large: 'w-20 h-20',
  xlarge: 'w-28 h-28',
};

const defaultSize = 'medium';
const getIconSizeClasses = (size) => iconSizeClasses[size] || iconSizeClasses[defaultSize];

export const IconOverlay = ({
  bgColor, Icon, size, caption, onClickHandler,
}: IconOverlayProps):JSX.Element => {
  const mergedContainerClasses = classNames(
    'bg-transparent w-full h-full flex flex-col justify-center items-center rounded-lg cursor-pointer space-y-2 p-4',
    bgColor,
  );

  const mergedIconClasses = classNames(
    getIconSizeClasses(size),
  );

  return (
    <>
      <button
        className={mergedContainerClasses}
        onClick={(e) => onClickHandler && onClickHandler(e)}
      >
        {/* @ts-ignore */}
        { Icon && <Icon className={mergedIconClasses} /> }
        <span className="text-xs">{caption}</span>
      </button>
    </>
  );
};

IconOverlay.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.string,
  Icon: PropTypes.func,
  caption: PropTypes.string,
  onClickHandler: PropTypes.func,
};
