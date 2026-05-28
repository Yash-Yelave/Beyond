import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * CTAButton — unified call-to-action button.
 *
 * Props:
 *  to       – react-router path (renders Link); if omitted renders <a> with href
 *  href     – external href fallback
 *  variant  – 'primary' | 'secondary' | 'ghost'
 *  size     – 'sm' | 'md' | 'lg'
 *  icon     – boolean, show arrow icon
 *  children
 *  className
 */

const variants = {
  primary:   'bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800',
  secondary: 'bg-teal-600 text-white shadow-lg shadow-teal-600/20 hover:bg-teal-500',
  ghost:     'bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-50',
  outline:   'bg-transparent text-white border border-white/20 hover:bg-white/10',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
};

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function CTAButton({
  to, href, variant = 'primary', size = 'md', icon = false, children, className = '', onClick,
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowIcon />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={base}>{content}</Link>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href || '#'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={base}
      onClick={onClick}
    >
      {content}
    </motion.a>
  );
}
