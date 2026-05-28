import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const navLinks = [
  { label: 'Home',              to: '/' },
  { label: 'Ecosystem',         to: '/about' },
  { label: 'Membership',        to: '/membership' },
  { label: 'Events',            to: '/events' },
  { label: 'Insights',          to: '/insights' },
  { label: 'Submit Opportunity',to: '/submit-opportunity' },
];

function NavLink({ to, label, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-200 group ${
        active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-teal-500 rounded-full"
          transition={{ duration: 0.3, ease: EASE }}
        />
      )}
    </Link>
  );
}

const MenuIcon = ({ open }) => (
  <div className="w-5 h-4 flex flex-col justify-between">
    <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} transition={{ duration: 0.3 }}
      className="block h-[2px] w-full bg-slate-900 rounded-full origin-center" />
    <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} transition={{ duration: 0.2 }}
      className="block h-[2px] w-full bg-slate-900 rounded-full" />
    <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -10 : 0 }} transition={{ duration: 0.3 }}
      className="block h-[2px] w-full bg-slate-900 rounded-full origin-center" />
  </div>
);

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

          {/* Brand */}
          <Link to="/" className="text-slate-900 font-bold text-xl tracking-[0.15em] uppercase shrink-0 hover:opacity-80 transition-opacity">
            Beyond
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink key={l.to} {...l} active={isActive(l.to)} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/dashboard"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors px-3 py-2"
            >
              Login
            </Link>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/membership"
                className="bg-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-400 transition-colors shadow-sm shadow-teal-500/20"
              >
                Apply
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <MenuIcon open={mobileOpen} />
          </button>

        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed top-16 inset-x-0 z-40 bg-white border-b border-slate-100 shadow-xl lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04, ease: EASE }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${
                      isActive(l.to)
                        ? 'bg-teal-50/50 text-teal-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-slate-100 mt-3 pt-3 flex gap-3">
                <Link to="/dashboard" onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center text-sm font-medium text-slate-600 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                  Login
                </Link>
                <Link to="/membership" onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center text-sm font-semibold bg-teal-500 text-white py-3 rounded-xl hover:bg-teal-400 transition-colors">
                  Apply
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-16" />
    </>
  );
}
