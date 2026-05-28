import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const builders = [
  {
    name: 'Elena Rostova',
    project: 'Aura Health',
    desc: 'Scaling mental wellness through AI-driven personalized therapeutics.',
    industry: 'HealthTech',
  },
  {
    name: 'Marcus Chen',
    project: 'Nexus Finance',
    desc: 'Building the next generation of borderless payment infrastructure.',
    industry: 'FinTech',
  },
  {
    name: 'Sarah Jenkins',
    project: 'Lumina Energy',
    desc: 'Decentralized grid solutions for sustainable urban environments.',
    industry: 'ClimateTech',
  }
];

export default function FeaturedBuilders() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Backed by Builders
            </h2>
            <p className="text-lg text-slate-500">
              Meet the visionary founders shaping the future within the Beyond ecosystem.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            View All Members
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {builders.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: EASE }}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold px-3 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-full">
                  {b.industry}
                </span>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                  <span className="text-slate-400 text-xs font-medium">{b.name.charAt(0)}</span>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{b.project}</h3>
                <p className="text-sm font-medium text-slate-400 mb-4">by {b.name}</p>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {b.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50">
                <button className="flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
                  View Story
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="w-full mt-8 py-4 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors md:hidden">
          View All Members
        </button>

      </div>
    </section>
  );
}
