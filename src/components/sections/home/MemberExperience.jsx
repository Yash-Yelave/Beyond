import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

export default function MemberExperience() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-20">
          <div className="w-12 h-[1px] bg-gold mb-8" />
          <h2 className="font-serif text-[40px] leading-[50px] lg:text-[52px] lg:leading-[60px] font-light text-primary mb-6 tracking-[-0.02em]">
            Real Interactions.<br />Genuine Relationships.
          </h2>
          <p className="text-[18px] leading-[34px] text-secondary max-w-[620px]">
            Beyond is not just a digital platform. It’s a living, breathing community where meaningful connections happen in real time, offline and online.
          </p>
        </div>

        {/* Staggered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Large Landscape */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="md:col-span-8 flex flex-col gap-4"
          >
            <div className="w-full aspect-[16/9] bg-stone relative overflow-hidden rounded-md border border-border">
              <div className="absolute inset-0 bg-[#E5DFD3] mix-blend-multiply opacity-30" />
            </div>
            <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-secondary">
              <span className="w-6 h-[1px] bg-gold" />
              <span>Founder Dinners • New York</span>
            </div>
          </motion.div>

          {/* Portrait Crop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="md:col-span-4 flex flex-col gap-4 md:mt-24 lg:mt-32"
          >
            <div className="w-full aspect-[3/4] bg-muted relative overflow-hidden rounded-md border border-border">
              <div className="absolute inset-0 bg-[#D4CFC4] mix-blend-multiply opacity-20" />
            </div>
            <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-secondary">
              <span className="w-6 h-[1px] bg-gold" />
              <span>Investor Roundtables</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
