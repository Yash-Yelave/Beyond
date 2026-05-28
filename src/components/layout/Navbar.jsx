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
      className={`relative text-[14px] font-medium transition-colors duration-300 ${
        active ? 'text-ink' : 'text-slate hover:text-ink'
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="nav-pill"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-forest"
          transition={{ duration: 0.4, ease: EASE }}
        />
      )}
    </Link>
  );
}

const MenuIcon = ({ open }) => (
  <div className="w-6 h-5 flex flex-col justify-between">
    <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 9 : 0 }} transition={{ duration: 0.4, ease: EASE }}
      className="block h-[1.5px] w-full bg-ink origin-center" />
    <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.2 }}
      className="block h-[1.5px] w-full bg-ink" />
    <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -9 : 0 }} transition={{ duration: 0.4, ease: EASE }}
      className="block h-[1.5px] w-full bg-ink origin-center" />
  </div>
);

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-pearl/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

          {/* Brand */}
          <Link to="/" className="text-ink font-serif font-medium text-[22px] tracking-tight shrink-0 hover:opacity-80 transition-opacity">
            Beyond.
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <NavLink key={l.to} {...l} active={isActive(l.to)} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link
              to="/dashboard"
              className="text-[14px] font-semibold text-slate hover:text-ink transition-colors"
            >
              Log In
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/membership"
                className="inline-flex items-center justify-center border border-forest/30 text-forest hover:border-forest hover:bg-forest/5 h-[42px] px-6 rounded-lg font-semibold text-[13px] transition-all duration-200"
              >
                Apply
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed top-[72px] inset-x-0 z-40 bg-card border-b border-line shadow-lg lg:hidden h-[calc(100vh-72px)] overflow-y-auto"
          >
            <nav className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-[18px] font-medium transition-colors duration-200 ${
                      isActive(l.to)
                        ? 'text-forest'
                        : 'text-ink hover:text-forest'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="border-t border-line mt-6 pt-8 flex flex-col gap-4"
              >
                <Link to="/membership" onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-forest text-card h-[48px] rounded-lg font-semibold text-[14px] transition-all duration-200">
                  Apply for Membership
                </Link>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center border border-line text-ink h-[48px] rounded-lg font-semibold text-[14px] transition-all duration-200">
                  Log In
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
