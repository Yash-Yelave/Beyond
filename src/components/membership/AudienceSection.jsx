import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const audiences = [
  {
    id: 'founders',
    label: 'Startup Founders',
    emoji: '🚀',
    color: 'border-teal-200 bg-teal-50 text-teal-700',
    activeColor: 'bg-teal-600 text-white border-teal-600',
    why: 'You are building something that challenges the status quo.',
    receives: [
      'Curated investor introductions at your stage',
      'Access to Founder Circles for peer accountability',
      'GTM, product, and hiring support from operators',
      'Co-investment and partnership opportunities',
    ],
    contributes: 'You bring fresh thinking, bold ambition, and new ventures that energize the ecosystem.',
  },
  {
    id: 'investors',
    label: 'Investors',
    emoji: '💼',
    color: 'border-blue-200 bg-blue-50 text-blue-700',
    activeColor: 'bg-blue-600 text-white border-blue-600',
    why: 'You deploy capital thoughtfully and seek high-quality deal flow.',
    receives: [
      'Early access to vetted, curated startup deal flow',
      'Co-investment opportunities with aligned investors',
      'Sector-specific founder roundtables',
      'Insight into emerging market trends',
    ],
    contributes: 'Your capital, network, and conviction catalyze founders to build faster and smarter.',
  },
  {
    id: 'operators',
    label: 'Operators',
    emoji: '⚙️',
    color: 'border-slate-200 bg-slate-100 text-slate-700',
    activeColor: 'bg-slate-800 text-white border-slate-800',
    why: 'You have built things at scale and understand what execution looks like.',
    receives: [
      'Advisory opportunities with high-growth startups',
      'Access to exclusive community events and dinners',
      'Strategic partnership introductions',
      'Visibility within a high-trust network',
    ],
    contributes: 'Your operational depth is the backbone that turns founder vision into scalable reality.',
  },
  {
    id: 'creators',
    label: 'Creators',
    emoji: '✨',
    color: 'border-amber-200 bg-amber-50 text-amber-700',
    activeColor: 'bg-amber-500 text-white border-amber-500',
    why: 'You shape narratives, build audiences, and move culture forward.',
    receives: [
      'Brand and collaboration opportunities with startups',
      'Access to a curated professional network',
      'Speaking and content creation opportunities',
      'Partnership deals within the ecosystem',
    ],
    contributes: `Your creative lens amplifies the ecosystem's stories and attracts aligned talent.`,
  },
  {
    id: 'mentors',
    label: 'Mentors',
    emoji: '🧭',
    color: 'border-violet-200 bg-violet-50 text-violet-700',
    activeColor: 'bg-violet-600 text-white border-violet-600',
    why: 'You have walked the path and want to guide those coming after you.',
    receives: [
      'Structured mentorship program with matched founders',
      'Advisory equity and compensation opportunities',
      'Exclusive mentor retreats and roundtables',
      'Peer recognition within the community',
    ],
    contributes: 'Your wisdom compresses founders\' timelines and significantly raises their probability of success.',
  },
  {
    id: 'experts',
    label: 'Industry Experts',
    emoji: '🏛️',
    color: 'border-rose-200 bg-rose-50 text-rose-700',
    activeColor: 'bg-rose-600 text-white border-rose-600',
    why: 'You possess deep domain expertise that most founders desperately need.',
    receives: [
      'Consulting and advisory opportunities',
      'Access to a curated network of peers',
      'Speaking at private Beyond events',
      'Co-authoring thought leadership content',
    ],
    contributes: 'Your specialized knowledge fills critical gaps and gives founders an unfair advantage.',
  },
];

export default function AudienceSection() {
  const [activeId, setActiveId] = useState('founders');
  const active = audiences.find((a) => a.id === activeId);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">Who Is This For</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Built for the Ambitious
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
            Beyond is designed for people who create value, not just consume it.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        >
          {audiences.map((a) => (
            <button
              key={a.id}
              onClick={() => setActiveId(a.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                activeId === a.id ? a.activeColor : a.color + ' hover:opacity-80'
              }`}
            >
              <span>{a.emoji}</span>
              {a.label}
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

              {/* Why you belong */}
              <div className="p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">Why You Belong</p>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{active.why}</p>
              </div>

              {/* What you receive */}
              <div className="p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">What You Receive</p>
                <ul className="space-y-3">
                  {active.receives.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How you contribute */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">How You Contribute</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{active.contributes}</p>
                </div>
                <a
                  href="#membership-form"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group"
                >
                  Apply as {active.label}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
