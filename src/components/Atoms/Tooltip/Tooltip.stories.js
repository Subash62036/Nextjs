import React from 'react';
import '../../../styles/tailwind.css';

import { Tooltip } from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
};

const Template = ({
    content,
    triggerType,
    className,
    position
}) => <div className='w-96 m-48'>
  <Tooltip className={className} content={content} triggerType={triggerType} position={position}>
        <div className='inline border border-black'>
          Hello World to all the worlds in the universe!
        </div>
    </Tooltip>
</div>;

export const TooltipDefault = Template.bind({});
TooltipDefault.args = {
  content: 'This is tooltip'
};

export const TooltipOnClick = Template.bind({});
TooltipOnClick.args = {
  content: 'This is a tooltip',
  triggerType: 'click'
};

export const TooltipHTMLContent = Template.bind({});
TooltipHTMLContent.args = {
  content: <div className='text-red-500'>This is an HTML content</div>
};

export const TooltipTop = Template.bind({});
TooltipTop.args = {
  content: <div className='text-red-500'>This is a TOP tooltip</div>,
  position: 'top'
};

export const TooltipRight = Template.bind({});
TooltipRight.args = {
  content: <div className='text-red-500'>This is an RIGHT tooltip</div>,
  position: 'right'
};

export const TooltipLeft = Template.bind({});
TooltipLeft.args = {
  content: <div className='text-red-500'>This is an LEFT tooltip</div>,
  position: 'left'
};
