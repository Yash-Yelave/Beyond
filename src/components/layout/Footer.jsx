import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    heading: 'Ecosystem',
    links: [
      { label: 'Home',               to: '/' },
      { label: 'About',              to: '/about' },
      { label: 'Membership',         to: '/membership' },
      { label: 'Events',             to: '/events' },
      { label: 'Insights',           to: '/insights' },
    ],
  },
  {
    heading: 'Access',
    links: [
      { label: 'Submit Opportunity', to: '/submit-opportunity' },
      { label: 'Apply',              to: '/membership' },
      { label: 'Contact Us',         to: '/contact' },
      { label: 'Member Login',       to: '/dashboard' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',  to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Policy',   to: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep-slate border-t border-deep-slate-text/10 pt-16 pb-10">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-deep-slate-text/10">

          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="text-deep-slate-text font-serif text-[24px] font-medium tracking-tight hover:opacity-80 transition-opacity inline-block mb-4">
              Beyond.
            </Link>
            <p className="text-[14px] text-deep-slate-text/60 leading-[1.8] max-w-[320px]">
              A curated ecosystem connecting visionary founders, investors, and operators.
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[12px] font-semibold tracking-wider uppercase text-deep-slate-text/40 mb-6">
                  {col.heading}
                </p>
                <ul className="space-y-4">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-[14px] font-medium text-deep-slate-text/70 hover:text-deep-slate-text transition-colors duration-200">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-deep-slate-text/40 font-medium">
            © {new Date().getFullYear()} Beyond Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-deep-slate-text/40 hover:text-deep-slate-text/80 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-deep-slate-text/40 hover:text-deep-slate-text/80 transition-colors">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
