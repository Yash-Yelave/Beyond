import React from 'react';
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
    <div className="min-h-screen bg-ivory font-sans text-primary flex flex-col antialiased selection:bg-gold/20 selection:text-gold-hover">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
