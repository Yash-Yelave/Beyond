import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const experiences = [
  {
    title: 'Founder Dinners',
    desc: 'Intimate, off-the-record conversations with peers at similar growth stages.',
    imgClass: 'bg-slate-200'
  },
  {
    title: 'Investor Roundtables',
    desc: 'Direct Q&A and pitch feedback from active ecosystem investors.',
    imgClass: 'bg-slate-200'
  },
  {
    title: 'Strategic Meetups',
    desc: 'City-based gatherings to strengthen local network density.',
    imgClass: 'bg-slate-200'
  }
];

export default function MemberExperience() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Real Interactions. <br className="hidden sm:block" /> Genuine Relationships.
          </h2>
          <p className="text-lg text-slate-500">
            Beyond is not just a digital platform. It’s a living, breathing community where meaningful connections happen in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative border border-slate-100 ${exp.imgClass}`}>
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-slate-100 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
