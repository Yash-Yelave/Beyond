import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    heading: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Membership', to: '/membership' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Access',
    links: [
      { label: 'Apply for Membership', to: '/membership' },
      { label: 'Member Login', to: '/dashboard' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep-slate border-t border-deep-slate-text/10 pt-16 pb-10">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-deep-slate-text/10">
          <div className="md:col-span-5 lg:col-span-5">
            <Link to="/" className="text-deep-slate-text font-serif text-[24px] font-medium tracking-tight hover:opacity-80 transition-opacity inline-block mb-4">
              Beyond
            </Link>
            <p className="text-[14px] text-deep-slate-text/60 leading-[1.8] max-w-[360px]">
              Where Infinity Forum wisdom becomes opportunity.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 gap-8">
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

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-deep-slate-text/40 font-medium">
            © {new Date().getFullYear()} Beyond. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
