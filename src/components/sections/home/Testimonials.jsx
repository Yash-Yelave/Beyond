import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const testimonials = [
  {
    quote: "Beyond fundamentally changed how I approach fundraising. Instead of cold pitching, I built relationships with investors over months. When it was time to raise, the round closed in weeks.",
    name: "James Arthur",
    role: "Founder, Synthetix AI",
    type: "Founder",
    avatar: "/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
  },
  {
    quote: "The signal-to-noise ratio here is unmatched. As an investor, I’m looking for founders who are deliberate about how they build. This ecosystem naturally filters for that.",
    name: "Sophia Lin",
    role: "Partner, Horizon Ventures",
    type: "Investor",
    avatar: "/campaign-creators-gMsnXqILjp4-unsplash.jpg"
  },
  {
    quote: "I joined expecting a standard network, but found a brain trust. The quality of operators here means I can get an answer to a complex scaling problem within hours.",
    name: "David K.",
    role: "VP Eng, ScaleTech",
    type: "Operator",
    avatar: "/14995841-meeting-4784909.jpg"
  },
  {
    quote: "The community experiences are incredible. Finding true peers when you are building something novel is hard. Beyond gave me my inner circle.",
    name: "Maya Patel",
    role: "Creator & Builder",
    type: "Creator",
    avatar: "/quilia-1-aA2Fadydc-unsplash.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-stone py-24 lg:py-32 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="max-w-[620px] mb-20">
           <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-forest" />
            <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
              Member Insights
            </span>
          </div>
          <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-6 tracking-[-0.02em]">
            Voices from the Network.
          </h2>
          <p className="text-[16px] leading-[1.7] text-slate font-medium">
            Real outcomes and experiences from the people already building within the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="bg-card border border-line p-10 lg:p-12 rounded-xl flex flex-col shadow-sm"
            >
              <div className="flex-grow">
                <p className="font-serif text-[20px] leading-[1.6] text-ink mb-10">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-line/60">
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border border-line"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[14px] font-bold text-ink mb-0.5">{t.name}</h4>
                    <p className="text-[13px] text-slate font-medium">{t.role}</p>
                  </div>
                </div>
                <div className="hidden sm:block px-3 py-1 bg-surface rounded text-[11px] font-bold text-slate uppercase tracking-wider">
                  {t.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
