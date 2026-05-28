import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const metrics = [
  { value: '500+', label: 'Founders & Operators' },
  { value: '$250M+', label: 'Strategic Collaborations' },
  { value: '120+', label: 'Community Sessions' },
  { value: '45+', label: 'Ecosystem Reach (Countries)' },
];

export default function MetricsSection() {
  return (
    <section className="bg-slate-50 py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos / Partners */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-8">
            Trusted by Builders from Top Ecosystems
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo Placeholders */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center w-28 h-10">
                <div className="w-full h-8 bg-slate-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
