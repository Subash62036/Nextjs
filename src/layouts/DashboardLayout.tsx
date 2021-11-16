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
    <main className="h-full bg-gray-50">
      <div className="">
        <MainNav />
      </div>
      <section className="relative w-full min-h-full container mx-auto pb-12">
        <UserDashboardHeader pageTitle={pageTitle} />
        {children}
      </section>
      <FooterSmall />
    </main>
  );
}
