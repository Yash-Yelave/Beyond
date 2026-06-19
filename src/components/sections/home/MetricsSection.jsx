import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const metrics = [
  { value: '500+', label: 'Founders & Operators', sub: 'Highly vetted ecosystem' },
  { value: '$250M+', label: 'Collaborations', sub: 'Funding and strategic deals' },
  { value: '120+', label: 'Curated Sessions', sub: 'Interactive community events' },
  { value: '45+', label: 'Global Reach', sub: 'Cross-border intelligence' },
];

export default function MetricsSection() {
  return (
    <section className="bg-card py-16 border-y border-line relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Compact Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="bg-pearl p-8 rounded-xl border border-line flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-forest/0 group-hover:bg-forest transition-colors duration-300" />
              
              <div className="font-serif text-[36px] font-medium text-ink mb-2">
                {metric.value}
              </div>
              <div className="text-[13px] font-bold tracking-wide text-ink uppercase mb-2">
                {metric.label}
              </div>
              <div className="w-6 h-[1.5px] bg-line mb-3 group-hover:bg-copper transition-colors duration-300" />
              <div className="text-[13px] font-medium text-slate">
                {metric.sub}
              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
