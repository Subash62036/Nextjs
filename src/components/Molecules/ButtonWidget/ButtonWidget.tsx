import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircleIcon } from '@heroicons/react/solid';

export interface ButtonWidgetProps {
  bottomText: string,
  onWidgetClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const ButtonWidget = ({ bottomText, onWidgetClick }: ButtonWidgetProps):JSX.Element => (
  <>
    <button
      tabIndex={-1}
      className="text-xs border-dashed rounded-lg border-gray-300 border-2 bg-white px-4 py-8 flex flex-col justify-center items-center space-y-2 cursor-pointer"
      onClick={(e) => onWidgetClick(e)}
    >
      <PlusCircleIcon className="h-8 w-8" />
      <span className="text-center text-gray-400">{bottomText}</span>
    </button>
  </>
);

ButtonWidget.propTypes = {
  bottomText: PropTypes.string,
  onWidgetClick: PropTypes.func,
};
