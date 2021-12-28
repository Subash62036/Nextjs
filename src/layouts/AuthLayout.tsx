import React from 'react';
import PropTypes from 'prop-types';

// components
export default function AuthLayout({ children }):JSX.Element {
  return (
    <>
      <main className="h-full bg-gray-50">
        <section className="relative w-full h-full">
          {children}
        </section>
      </main>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
