import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const steps = [
  {
    number: '01',
    title: 'Submit Your Opportunity',
    description: 'Fill out our structured application with your startup details, traction, and what support you need.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Internal Evaluation',
    description: 'Our core team reviews each submission for fit, potential, and alignment with the ecosystem.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Investor & Mentor Matching',
    description: 'Qualified startups are matched with relevant investors, mentors, and strategic operators.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Strategic Ecosystem Access',
    description: 'Gain access to the Beyond network — curated intros, exclusive events, and collaborative resources.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={VIEWPORT}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            From Submission to Ecosystem
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
            A structured, high-trust process designed to connect ambitious founders with the right people.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              viewport={VIEWPORT}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm transition-all duration-300 cursor-default"
            >
              {/* Number + Icon row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 tracking-widest">{step.number}</span>
                <div className="w-11 h-11 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-[2px] w-8 bg-teal-500 rounded-full mt-auto" />
            </motion.div>
          ))}
        </div>

        {/* Connecting arrow (desktop) */}
        <div className="hidden lg:flex justify-center mt-10">
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Each step is managed by our core team with full transparency and discretion.
          </p>
        </div>

      </div>
    </section>
  );
}
