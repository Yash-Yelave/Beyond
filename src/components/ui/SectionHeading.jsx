import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

/**
 * SectionHeading — consistent section header used across all pages.
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center mx-auto' : ''} ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      {eyebrow && (
        <div className={`flex items-center gap-4 mb-6 ${center ? 'justify-center' : ''}`}>
          <span className="w-8 h-[1px] bg-copper" />
          <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
            {eyebrow}
          </span>
          {center && <span className="w-8 h-[1px] bg-copper" />}
        </div>
      )}
      <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-ink tracking-[-0.02em] leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-[16px] text-slate font-medium leading-[1.7] ${center ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
