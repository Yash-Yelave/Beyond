import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-slate-900 py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-md"
    >
      <a href="#/" className="text-white font-bold text-2xl tracking-widest uppercase hover:opacity-80 transition-opacity">
        Beyond
      </a>
      <nav className="hidden md:flex space-x-8 text-slate-300 font-medium text-sm">
        <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
        <a href="#investment-hubs" className="hover:text-white transition-colors">Investment Hubs</a>
        <a href="#mentorship" className="hover:text-white transition-colors">Mentorship</a>
        <a href="#events" className="hover:text-white transition-colors">Events</a>
        <a href="#/membership" className="text-teal-300 hover:text-teal-200 transition-colors font-semibold">Become a Member</a>
        <a href="#/submit" className="text-teal-400 hover:text-teal-300 transition-colors">Submit Opportunity</a>
      </nav>
      <div>
        <motion.a
          href="#/submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-teal-500 text-white px-6 py-2.5 rounded-full hover:bg-teal-400 transition-colors font-semibold text-sm shadow-sm shadow-teal-500/20"
        >
          Submit Opportunity
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
