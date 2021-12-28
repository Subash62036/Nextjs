import React from 'react';

import {
  MainNav, DashboardInterface,
} from 'components';

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }:IDashboardLayoutProps):JSX.Element {
  return (
    <main className="h-full bg-gray-100">
      <div>
        <MainNav />
      </div>
      <section className="relative flex w-full min-h-full mx-0 pb-12">
        <DashboardInterface />
        {children}
      </section>
    </main>
  );
}
