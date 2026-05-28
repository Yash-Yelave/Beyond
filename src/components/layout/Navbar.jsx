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
      className={`relative text-[12px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 group ${
        active ? 'text-primary' : 'text-secondary hover:text-primary'
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gold"
          transition={{ duration: 0.4, ease: EASE }}
        />
      )}
      <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
    </Link>
  );
}

const MenuIcon = ({ open }) => (
  <div className="w-6 h-5 flex flex-col justify-between">
    <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 9 : 0 }} transition={{ duration: 0.4, ease: EASE }}
      className="block h-[1px] w-full bg-primary origin-center" />
    <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.2 }}
      className="block h-[1px] w-full bg-primary" />
    <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -9 : 0 }} transition={{ duration: 0.4, ease: EASE }}
      className="block h-[1px] w-full bg-primary origin-center" />
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
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ivory/95 backdrop-blur-md border-b border-border shadow-sm shadow-stone/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-[90px] flex items-center justify-between gap-6">

          {/* Brand */}
          <Link to="/" className="text-primary font-serif font-medium text-2xl tracking-[0.1em] shrink-0 hover:opacity-70 transition-opacity">
            Beyond
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
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-secondary hover:text-primary transition-colors"
            >
              Member Login
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/membership"
                className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-ivory h-[46px] px-7 font-medium text-[13px] tracking-[0.05em] transition-all duration-300"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed top-[90px] inset-x-0 z-40 bg-ivory border-b border-border shadow-2xl lg:hidden h-[calc(100vh-90px)] overflow-y-auto"
          >
            <nav className="px-6 py-12 flex flex-col gap-6">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-xl font-serif tracking-wide transition-colors duration-300 ${
                      isActive(l.to)
                        ? 'text-gold'
                        : 'text-primary hover:text-gold-hover'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="border-t border-border mt-8 pt-8 flex flex-col gap-4"
              >
                <Link to="/membership" onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-gold text-ivory h-[52px] font-medium text-[13px] tracking-[0.05em] transition-all duration-300">
                  Apply for Membership
                </Link>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center border border-border text-primary h-[52px] font-medium text-[13px] tracking-[0.05em] transition-all duration-300">
                  Member Login
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[90px]" />
    </>
  );
}
