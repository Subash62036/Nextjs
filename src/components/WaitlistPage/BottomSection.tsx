import React from 'react';

interface IBottomSectionProps {
  className?: string
}

export const BottomSection = ({ className }:IBottomSectionProps):JSX.Element => (
  <div className={`${className} w-full absolute bottom-0 -z-10 overflow-hidden transition-all`}>
    <div className="relative">
      <div className="hidden lg:block fixed bottom-[-100px] xl:bottom-0 z-20 left-[-15%] xl:left-0" />
      <div className="fixed bottom-[-120px] md:bottom-[-8px] lg:bottom-[-120px] xl:bottom-[-8px] left-0 lg:left-[16.666%] xl:left-[50%] xl:ml-[-345px] z-10" />
      <div className="hidden lg:block fixed bottom-[-100px] xl:bottom-0 right-[-10%] xl:right-0 z-30" />
    </div>
  </div>
);
