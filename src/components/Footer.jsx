import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 py-12 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-slate-900 font-bold text-2xl tracking-widest uppercase mb-6 md:mb-0">
          Beyond
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-slate-500 font-medium mb-6 md:mb-0 text-sm">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact Support</a>
        </div>
        <div className="text-slate-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Beyond Ecosystem. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
