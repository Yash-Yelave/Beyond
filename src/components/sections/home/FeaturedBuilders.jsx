import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const builders = [
  {
    name: 'Elena Rostova',
    project: 'Aura Health',
    desc: 'Scaling mental wellness through AI-driven personalized therapeutics.',
    industry: 'HealthTech',
    offset: 'mt-0',
  },
  {
    name: 'Marcus Chen',
    project: 'Nexus Finance',
    desc: 'Building the next generation of borderless payment infrastructure.',
    industry: 'FinTech',
    offset: 'lg:mt-16',
  },
  {
    name: 'Sarah Jenkins',
    project: 'Lumina Energy',
    desc: 'Decentralized grid solutions for sustainable urban environments.',
    industry: 'ClimateTech',
    offset: 'lg:mt-32',
  }
];

export default function FeaturedBuilders() {
  return (
    <section className="bg-stone py-20 lg:py-32 border-y border-border/50">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-[620px]">
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <h2 className="font-serif text-[40px] leading-[50px] lg:text-[52px] lg:leading-[60px] font-light text-primary mb-6 tracking-[-0.02em]">
              Backed by Builders.
            </h2>
            <p className="text-[18px] leading-[34px] text-secondary">
              Meet the visionary founders shaping the future within the Beyond ecosystem.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-gold transition-colors pb-2 border-b border-gold/30 hover:border-gold">
            View All Members
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {builders.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: EASE }}
              className={`group flex flex-col ${b.offset}`}
            >
              {/* Image Area */}
              <div className="w-full aspect-[4/5] bg-muted mb-8 overflow-hidden rounded-md border border-border/50 relative">
                 <div className="absolute inset-0 bg-[#D4CFC4] mix-blend-multiply opacity-20 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
              </div>

              {/* Content */}
              <div>
                <span className="block text-[11px] font-semibold tracking-[0.2em] text-gold uppercase mb-4">
                  {b.industry}
                </span>
                <h3 className="font-serif text-[28px] leading-[38px] font-light text-primary mb-2">
                  {b.project}
                </h3>
                <p className="text-[15px] text-secondary/80 mb-6 font-medium italic">
                  by {b.name}
                </p>
                <p className="text-[16px] leading-[30px] text-secondary mb-8">
                  {b.desc}
                </p>
                <button className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.05em] text-primary group-hover:text-gold transition-colors">
                  Explore Story 
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:hidden">
          <button className="w-full inline-flex items-center justify-center border border-border text-primary h-[52px] font-medium text-[13px] tracking-[0.05em] uppercase hover:bg-card transition-colors">
            View All Members
          </button>
        </div>

      </div>
    </section>
  );
}
