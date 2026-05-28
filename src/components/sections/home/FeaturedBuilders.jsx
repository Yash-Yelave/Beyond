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
    image: '/quilia-1-aA2Fadydc-unsplash.jpg'
  },
  {
    name: 'Marcus Chen',
    project: 'Nexus Finance',
    desc: 'Building the next generation of borderless payment infrastructure.',
    industry: 'FinTech',
    date: 'Sep 2024',
    image: '/annie-spratt-hCb3lIB8L8E-unsplash.jpg'
  },
  {
    name: 'Sarah Jenkins',
    project: 'Lumina Energy',
    desc: 'Decentralized grid solutions for sustainable urban environments.',
    industry: 'ClimateTech',
    date: 'Aug 2024',
    image: '/campaign-creators-gMsnXqILjp4-unsplash.jpg'
  }
];

export default function FeaturedBuilders() {
  return (
    <section className="bg-stone border-y border-line py-[100px] lg:py-[140px]">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        
        {/* Inner Content Wrapper */}
        <div className="max-w-[1240px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-[620px]">
               <div className="flex items-center gap-4 mb-4">
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
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                className="group flex flex-col bg-card rounded-2xl border border-line overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 h-full"
              >
                {/* Image Area */}
                <div className="w-full aspect-[16/10] bg-surface relative overflow-hidden border-b border-line">
                   <div className="absolute inset-0 bg-ink/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                   <img 
                      src={b.image} 
                      alt={b.project} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
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
                  <p className="text-[14px] text-slate mb-6 font-medium italic">
                    by {b.name}
                  </p>
                  <p className="text-[15px] leading-[1.6] text-slate mb-10 flex-grow max-w-[620px]">
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
      </div>
    </section>
  );
}
