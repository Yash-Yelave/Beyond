import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const steps = [
  {
    number: '01',
    title: 'Submit Application',
    description: 'Complete our structured membership form with your background, motivations, and ecosystem interests.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    number: '02',
    title: 'Internal Review',
    description: 'Our team evaluates each application for cultural alignment, expertise, and contribution potential.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  },
  {
    number: '03',
    title: 'Community Alignment',
    description: 'Shortlisted applicants have a brief introductory call to ensure mutual value and fit.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    number: '04',
    title: 'Private Ecosystem Access',
    description: 'Approved members are onboarded with curated introductions, circle placement, and full community access.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
];

export default function MembershipProcess() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            How Membership Works
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[42px] left-[12.5%] right-[12.5%] h-[1px] bg-slate-100 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
              className="relative z-10 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              {/* Number ring */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-900/20">
                  <span className="text-xs font-bold tracking-wider">{step.number}</span>
                </div>
                <div className="w-10 h-10 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-xs text-slate-400 mt-10 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We prioritize alignment, contribution, and long-term collaboration over mass membership. Quality over quantity is our founding principle.
        </motion.p>

      </div>
    </section>
  );
}
