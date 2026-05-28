import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const pillars = [
  {
    num: '01',
    title: 'Strategic Networking',
    desc: 'Connect with highly vetted peers who share your ambition. No cold outreach, just warm, relevant introductions.',
    color: 'border-forest text-forest',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Investor Access',
    desc: 'Direct channels to leading angels, VCs, and strategic partners actively looking to support visionary builders.',
    color: 'border-copper text-copper',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Founder Circles',
    desc: 'Intimate, curated peer groups that meet regularly to share knowledge, solve problems, and hold accountability.',
    color: 'border-forest text-forest',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Knowledge Exchange',
    desc: 'Exclusive insights, playbooks, and resources shared directly by ecosystem members who have "been there".',
    color: 'border-copper text-copper',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    num: '05',
    title: 'Strategic Partnerships',
    desc: 'Discover synergies and formalize partnerships with complementary companies within the Beyond network.',
    color: 'border-forest text-forest',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    num: '06',
    title: 'Community Experiences',
    desc: 'Invite-only dinners, retreats, and interactive workshops designed to foster genuine connection off-screen.',
    color: 'border-copper text-copper',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function EcosystemPillars() {
  return (
    <section className="bg-pearl py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="max-w-[620px] mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-forest" />
            <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
              Core Framework
            </span>
          </div>
          <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-6 tracking-[-0.02em]">
            The Pillars of Beyond.
          </h2>
          <p className="text-[16px] leading-[1.7] text-slate font-medium">
            A structured framework designed to maximize value, accelerate growth, and build lasting professional relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className={`bg-card p-8 lg:p-10 border border-line rounded-xl flex flex-col relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-1 h-full border-l-[3px] ${pillar.color}`} />
              
              <div className="flex items-center justify-between mb-8">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${pillar.color} bg-card text-[12px] font-bold`}>
                  {pillar.num}
                </div>
                <div className={`opacity-60 ${pillar.color.split(' ')[1]}`}>
                  {pillar.icon}
                </div>
              </div>
              
              <h3 className="font-serif text-[24px] font-medium text-ink mb-4">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-slate font-medium">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
