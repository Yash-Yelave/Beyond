import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

/**
 * SectionHeading — consistent section header used across all pages.
 *
 * Props:
 *  eyebrow  – small uppercase label above the heading
 *  title    – main heading (supports JSX for <span> accents)
 *  subtitle – optional body text below heading
 *  center   – boolean, defaults to true
 *  className – extra classes on the wrapper
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      className={`mb-12 ${center ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-slate-500 text-base leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
