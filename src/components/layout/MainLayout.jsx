import React, { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * MainLayout — wraps every public page with the shared Navbar and Footer.
 * React Router's <Outlet /> renders the matched child page inside.
 * <ScrollRestoration /> resets scroll position on route changes.
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-pearl font-sans text-ink flex flex-col antialiased selection:bg-forest/20 selection:text-forest">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center text-forest font-medium">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
