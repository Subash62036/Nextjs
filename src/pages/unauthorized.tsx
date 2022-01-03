import React from 'react';

export default function Error404():JSX.Element {
  return (
    <main
      className="min-h-screen bg-cover bg-top sm:bg-top bg-gradient-to-r from-primary-300 via-primary-500 to-primary-700"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <h1 className="mt-2 text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
          Unauthorized
        </h1>
        <p className="mt-2 text-lg font-medium text-black text-opacity-50">
          It looks like you are not authorized to access the application.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
