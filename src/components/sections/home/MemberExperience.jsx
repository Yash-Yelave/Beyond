import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

export default function MemberExperience() {
  return (
    <section className="bg-stone py-24 lg:py-32 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-copper" />
              <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
                The Network in Motion
              </span>
            </div>
            <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-6 tracking-[-0.02em]">
              Real Interactions.<br />Genuine Relationships.
            </h2>
            <p className="text-[16px] leading-[1.7] text-slate font-medium">
              A dynamic, layered ecosystem where meaningful connections happen in real time, offline and online.
            </p>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="md:col-span-8 flex flex-col gap-4"
          >
            <div className="w-full aspect-[16/9] bg-card relative overflow-hidden rounded-xl border border-line group">
              <div className="absolute inset-0 bg-ink/5 mix-blend-multiply opacity-20 group-hover:bg-transparent transition-colors duration-[1s] ease-out z-10 pointer-events-none" />
              <img 
                src="/14995841-meeting-4784909.jpg" 
                alt="Founder Dinners" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-forest/10 text-forest text-[11px] font-bold uppercase tracking-wider">
                Founder Dinners
              </span>
              <span className="text-[14px] font-medium text-slate">New York City</span>
            </div>
          </motion.div>

          {/* Side Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="md:col-span-4 flex flex-col gap-4 md:mt-16 lg:mt-24"
          >
            <div className="w-full aspect-[3/4] bg-pearl relative overflow-hidden rounded-xl border border-line group">
              <div className="absolute inset-0 bg-surface mix-blend-multiply opacity-50 group-hover:bg-transparent transition-colors duration-[1s] ease-out z-10 pointer-events-none" />
              <img 
                src="/quilia-1-aA2Fadydc-unsplash.jpg" 
                alt="Strategic Circles" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-copper/10 text-copper text-[11px] font-bold uppercase tracking-wider">
                Strategic Circles
              </span>
              <span className="text-[14px] font-medium text-slate">Private Sessions</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
