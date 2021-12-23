import React from 'react';
import PropTypes from 'prop-types';

// components
import { MainNav, FooterSmall } from 'components';

export default function AuthLayout({ children }):JSX.Element {
  return (
    <>
      <main className="h-full bg-gray-50">
        {/* <MainNav /> */}
        <section className="relative w-full h-full">
          {children}
        </section>
        {/* <FooterSmall /> */}
      </main>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
