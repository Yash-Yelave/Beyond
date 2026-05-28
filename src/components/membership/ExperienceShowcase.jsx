import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const experiences = [
  {
    label: 'Founder Meetups',
    description: 'Intimate gatherings where founders share openly and build real relationships.',
    tag: 'Monthly',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-100',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    size: 'md:col-span-2',
  },
  {
    label: 'Investor Roundtables',
    description: 'Curated conversations between founders and investors in intimate table formats.',
    tag: 'Quarterly',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    size: '',
  },
  {
    label: 'Community Discussions',
    description: 'Async & live conversations on the topics that matter to builders.',
    tag: 'Ongoing',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    size: '',
  },
  {
    label: 'Private Dinners',
    description: 'Exclusive invite-only dinners with the ecosystem\'s most impactful members.',
    tag: 'Selective',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    size: '',
  },
  {
    label: 'Workshops & Sprints',
    description: 'Hands-on skill-building sessions led by domain experts in the community.',
    tag: 'Bi-Monthly',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    size: '',
  },
  {
    label: 'Collaboration Sessions',
    description: 'Structured co-working and problem-solving sessions across the ecosystem.',
    tag: 'Weekly',
    tagColor: 'bg-rose-50 text-rose-700 border-rose-100',
    icon: 'M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z',
    size: 'md:col-span-2',
  },
];

export default function ExperienceShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">Member Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Life Inside the Ecosystem
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-lg mx-auto">
            Every format is carefully designed to create depth, not surface-level networking.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }}
              className={`bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4 transition-all duration-300 group ${exp.size}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="w-11 h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={exp.icon} />
                  </svg>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.tagColor}`}>{exp.tag}</span>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors duration-200">{exp.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{exp.description}</p>
              </div>
              {/* Placeholder visual strip */}
              <div className="mt-auto rounded-xl bg-slate-100 border border-slate-100 h-20 flex items-center justify-center overflow-hidden">
                <div className="flex gap-2 px-4">
                  {Array.from({ length: exp.size ? 5 : 3 }).map((_, j) => (
                    <div key={j} className="w-8 h-8 rounded-full bg-slate-200 shrink-0" style={{ opacity: 1 - j * 0.15 }} />
                  ))}
                  {exp.size && <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-slate-400 font-semibold">+</span>
                  </div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
