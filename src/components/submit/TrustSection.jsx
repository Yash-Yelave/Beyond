import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const testimonials = [
  {
    quote: "Beyond gave us access to the right investors at exactly the right stage. The quality of introductions was unlike anything we'd experienced through conventional networks.",
    name: 'Arjun Mehta',
    role: 'Founder, NexusAI',
    initials: 'AM',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    quote: "The ecosystem here isn't transactional. The mentors actually care about your growth, and the peer founders challenge you to think bigger.",
    name: 'Priya Nair',
    role: 'CEO, CleanCircle',
    initials: 'PN',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    quote: "Within three months of joining, we closed our seed round with two investors from the Beyond network. This community is exceptional.",
    name: 'Rohan Kapoor',
    role: 'Co-Founder, EduStack',
    initials: 'RK',
    color: 'bg-violet-100 text-violet-700',
  },
];

const stats = [
  { value: '300+', label: 'Founders & Operators' },
  { value: '₹150 Cr+', label: 'Capital Deployed' },
  { value: '45', label: 'Ventures Funded' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const valueCards = [
  {
    title: 'Strategic Investor Access',
    description: 'Direct introductions to curated angels, VCs, and family offices who align with your sector.',
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Curated Founder Network',
    description: 'Build meaningful relationships with operators and builders who have walked your path.',
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'High-Trust Ecosystem',
    description: 'Every member is vetted. No noise — only deep, high-quality conversations that move you forward.',
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Collaborative Growth Environment',
    description: 'Co-create, partner, and grow with founders who are mission-aligned and highly motivated.',
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-900 mb-1">{s.value}</p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Value proposition cards */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">Why Beyond</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Built for Ambitious Builders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">Founder Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Trusted by Founders Like You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
