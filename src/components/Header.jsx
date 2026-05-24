import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-slate-900 py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="text-white font-bold text-2xl tracking-widest uppercase">
        Beyond
      </div>
      <nav className="hidden md:flex space-x-8 text-slate-300 font-medium text-sm">
        <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
        <a href="#investment-hubs" className="hover:text-white transition-colors">Investment Hubs</a>
        <a href="#mentorship" className="hover:text-white transition-colors">Mentorship</a>
        <a href="#events" className="hover:text-white transition-colors">Events</a>
        <a href="#wisdom" className="hover:text-white transition-colors">Wisdom</a>
      </nav>
      <div>
        <button className="border border-white text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-slate-900 transition-colors font-semibold text-sm">
          Bespoke Request
        </button>
      </div>
    </header>
  );
};

export default Header;
