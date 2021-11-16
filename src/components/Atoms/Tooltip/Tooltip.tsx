import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export type TooltipTriggerType = 'click' | 'hover'
export type TooltipPositionType = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps {
  content: string | React.ReactNode,
  triggerType?: TooltipTriggerType,
  className?: string,
  position?: TooltipPositionType,
  [x:string]: any
}

export const Tooltip = ({
  children,
  content,
  triggerType,
  className,
  position,
} : TooltipProps):JSX.Element => {
  const isTriggerOnClick = triggerType === 'click';
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOnClick = () => {
    if (isTriggerOnClick) setShowTooltip(!showTooltip);
  };
  const handleOnMouseEnter = () => {
    if (!isTriggerOnClick) setShowTooltip(true);
  };
  const handleOnMouseLeave = () => {
    if (!isTriggerOnClick) setShowTooltip(false);
  };

  const getPositionClasses = (pos) => {
    switch (pos) {
      case 'top': return 'top-0 left-2/4 -translate-x-1/2 -translate-y-full';
      case 'right': return 'right-0 top-2/4 translate-x-full -translate-y-1/2';
      case 'bottom': return 'bottom-0 left-2/4 -translate-x-1/2 translate-y-full';
      case 'left': return 'left-0 top-2/4 -translate-x-full -translate-y-1/2';
      default: return 'bottom-0 left-2/4 -translate-x-1/2 translate-y-full';
    }
  };

  const getTooltipClasses = (pos) => {
    const commonClasses = getPositionClasses(pos);

    switch (pos) {
      case 'top': return classNames(commonClasses, '-mt-3');
      case 'right': return classNames(commonClasses, '-mr-3');
      case 'bottom': return classNames(commonClasses, '-mb-3');
      case 'left': return classNames(commonClasses, '-ml-3');
      default: return classNames(commonClasses, '-mb-3');
    }
  };

  const getCaretClasses = (pos) => {
    const commonClassName = 'absolute border border-gray-200 w-3 h-3 bg-white rotate-45';

    switch (pos) {
      case 'top': return classNames(commonClassName, 'bottom-0 left-2/4 -translate-x-1/2 border-l-transparent border-t-transparent translate-y-1.5');
      case 'right': return classNames(commonClassName, 'top-2/4 left-0 -translate-y-1/2 border-r-transparent border-t-transparent -translate-x-1.5');
      case 'bottom': return classNames(commonClassName, 'top-0 left-2/4 -translate-x-1/2 border-r-transparent border-b-transparent -translate-y-1.5');
      case 'left': return classNames(commonClassName, 'top-2/4 right-0 -translate-y-1/2 border-l-transparent border-b-transparent translate-x-1.5');
      default: return classNames(commonClassName, 'top-0 left-2/4 -translate-x-1/2 -mt-1.5 border-r-transparent border-b-transparent');
    }
  };

  const tooltipMergedClasses = classNames(
    'absolute bg-white shadow p-2',
    showTooltip ? 'block' : 'hidden',
    getTooltipClasses(position),
    className,
  );

  return (
    <div className="relative">
      <div
        role="presentation"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
      >
        {children}
      </div>

      <div className={tooltipMergedClasses}>
        <span>
          {content}
        </span>

        <div className={getCaretClasses(position)} />
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  triggerType: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
};
