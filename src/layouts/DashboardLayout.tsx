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
      <section className="flex w-full min-h-full mx-0">
        <DashboardInterface />
        {children}
      </section>
    </main>
  );
}
