import React from 'react';

interface IFooterSmallProps {
  className?: string
}

export const FooterSmall = ({ className }: IFooterSmallProps):JSX.Element => (
  <footer className={`bg-white ${className}`}>
    <p className="pt-6 text-center text-base text-gray-400">
      Copyright ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      RAPIDO
    </p>

  </footer>
);
