import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const metrics = [
  { value: '500+', label: 'Founders & Operators' },
  { value: '$250M+', label: 'Strategic Collaborations' },
  { value: '120+', label: 'Community Sessions' },
  { value: '45+', label: 'Ecosystem Reach' },
];

export default function MetricsSection() {
  return (
    <section className="bg-ivory py-16 md:py-20 lg:py-32 border-y border-border/50 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: EASE }}
              className={`flex flex-col items-center text-center lg:border-r border-border/40 last:border-0 ${idx % 2 === 0 ? 'md:border-r' : 'md:border-0 lg:border-r'}`}
            >
              <div className="font-serif text-[48px] md:text-[64px] leading-none text-primary mb-6 font-light tracking-[-0.02em]">
                {metric.value}
              </div>
              <div className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase">
                {metric.label}
              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
