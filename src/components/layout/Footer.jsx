import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    heading: 'Platform',
    links: [
      { label: 'Home',               to: '/' },
      { label: 'About the Ecosystem', to: '/about' },
      { label: 'Membership',          to: '/membership' },
      { label: 'Events',              to: '/events' },
      { label: 'Insights',            to: '/insights' },
    ],
  },
  {
    heading: 'Actions',
    links: [
      { label: 'Submit Opportunity', to: '/submit-opportunity' },
      { label: 'Apply for Membership', to: '/membership' },
      { label: 'Contact Us',          to: '/contact' },
      { label: 'Member Login',        to: '/dashboard' },
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

const socials = [
  { label: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Twitter',  href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { label: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="text-white font-bold text-xl tracking-[0.15em] uppercase hover:opacity-80 transition-opacity">
              Beyond
            </Link>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              A curated ecosystem for visionary founders, investors, and operators building meaningful growth together.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Beyond Ecosystem. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 italic">
            Built for builders who create beyond boundaries.
          </p>
        </div>

      </div>
    </footer>
  );
}
