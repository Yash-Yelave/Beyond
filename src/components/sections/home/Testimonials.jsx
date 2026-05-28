import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const testimonials = [
  {
    quote: "Beyond fundamentally changed how I approach fundraising. Instead of cold pitching, I built relationships with investors over months. When it was time to raise, the round closed in weeks.",
    name: "James Arthur",
    role: "Founder, Synthetix AI",
    type: "Founder",
  },
  {
    quote: "The signal-to-noise ratio here is unmatched. As an investor, I’m looking for founders who are deliberate about how they build. This ecosystem naturally filters for that.",
    name: "Sophia Lin",
    role: "Partner, Horizon Ventures",
    type: "Investor",
  },
  {
    quote: "I joined expecting a standard network, but found a brain trust. The quality of operators here means I can get an answer to a complex scaling problem within hours.",
    name: "David K.",
    role: "VP Eng, ScaleTech",
    type: "Operator",
  },
  {
    quote: "The community experiences are incredible. Finding true peers when you are building something novel is hard. Beyond gave me my inner circle.",
    name: "Maya Patel",
    role: "Creator & Builder",
    type: "Creator",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Voices from the Ecosystem
          </h2>
          <p className="text-lg text-slate-500">
            Hear from the ambitious people already building within Beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.02)] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="flex-grow">
                {/* Quote Icon */}
                <svg className="w-8 h-8 text-teal-100 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-slate-50 flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 shrink-0">
                   <span className="text-slate-400 text-xs font-semibold">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
