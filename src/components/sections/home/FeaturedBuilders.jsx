import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const builders = [
  {
    name: 'Elena Rostova',
    project: 'Aura Health',
    desc: 'Scaling mental wellness through AI-driven personalized therapeutics.',
    industry: 'HealthTech',
    date: 'Oct 2024',
  },
  {
    name: 'Marcus Chen',
    project: 'Nexus Finance',
    desc: 'Building the next generation of borderless payment infrastructure.',
    industry: 'FinTech',
    date: 'Sep 2024',
  },
  {
    name: 'Sarah Jenkins',
    project: 'Lumina Energy',
    desc: 'Decentralized grid solutions for sustainable urban environments.',
    industry: 'ClimateTech',
    date: 'Aug 2024',
  }
];

export default function FeaturedBuilders() {
  return (
    <section className="bg-pearl py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-[620px]">
             <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-copper" />
              <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
                Featured Projects
              </span>
            </div>
            <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-6 tracking-[-0.02em]">
              Backed by Builders.
            </h2>
            <p className="text-[16px] leading-[1.7] text-slate font-medium">
              Discover the latest innovations and intelligence originating from the network.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-[14px] font-bold text-ink hover:text-forest transition-colors">
            View All Members
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {builders.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="group flex flex-col bg-card rounded-xl border border-line overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className="w-full aspect-[16/10] bg-surface relative overflow-hidden border-b border-line">
                 <div className="absolute inset-0 bg-line mix-blend-multiply opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-forest/10 text-forest text-[11px] font-bold tracking-wider uppercase">
                    {b.industry}
                  </span>
                  <span className="text-[12px] font-medium text-slate">
                    {b.date}
                  </span>
                </div>
                
                <h3 className="font-serif text-[24px] font-medium text-ink mb-2">
                  {b.project}
                </h3>
                <p className="text-[14px] text-slate mb-4 font-medium italic">
                  by {b.name}
                </p>
                <p className="text-[15px] leading-[1.6] text-slate mb-8 flex-grow">
                  {b.desc}
                </p>
                
                <button className="inline-flex items-center gap-2 text-[14px] font-bold text-ink group-hover:text-copper transition-colors mt-auto">
                  Explore Story 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
