import React from 'react';

import {
  MainNav, FooterSmall, UserDashboardHeader,
} from 'components';

interface IDashboardLayoutProps {
  children: React.ReactNode;
  pageTitle: string
}

export default function DashboardLayout({ children, pageTitle }:IDashboardLayoutProps):JSX.Element {
  return (
    <main className="h-full bg-gray-100">
      <div>
        <MainNav />
      </div>
      <section className="relative w-full min-h-full mx-0 pb-12">
        {children}
      </section>
    </main>
  );
}
