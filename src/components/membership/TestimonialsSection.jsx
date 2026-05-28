import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const testimonials = [
  {
    quote: `Beyond isn't a community — it's a carefully assembled room of people who are serious about building. Within my first month, I had three warm intros that directly shaped our Series A strategy.`,
    name: 'Vikram Anand',
    role: 'Founder & CEO',
    company: 'PulseFinance',
    initials: 'VA',
    color: 'bg-teal-100 text-teal-700',
    perspective: 'Founder',
  },
  {
    quote: `I've been part of many networks over 15 years of investing. Beyond is the rare one where I consistently leave conversations with genuine insight — not just another pitch deck in my inbox.`,
    name: 'Meera Krishnamurthy',
    role: 'Partner',
    company: 'Horizon Capital',
    initials: 'MK',
    color: 'bg-blue-100 text-blue-700',
    perspective: 'Investor',
  },
  {
    quote: `As a creator building in the startup space, I was looking for a network that understood both worlds. Beyond gave me collaborators, not just followers — and that's changed everything.`,
    name: 'Aditya Sharma',
    role: 'Creator & Founder',
    company: 'BuildPublic',
    initials: 'AS',
    color: 'bg-violet-100 text-violet-700',
    perspective: 'Creator',
  },
];

const Star = () => (
  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimonialsSection() {
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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">Member Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Heard From the Community
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }}
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm flex flex-col gap-5 transition-all duration-300"
            >
              {/* Perspective tag */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.perspective}</span>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}</div>
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                <span className="text-slate-300 text-3xl font-serif leading-none mr-1">"</span>
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-xs text-slate-400 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          All member testimonials reflect personal experiences within the Beyond ecosystem.
        </motion.p>

      </div>
    </section>
  );
}
