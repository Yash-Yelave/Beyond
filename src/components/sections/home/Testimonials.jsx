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
    <section className="bg-ivory py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="max-w-[620px] mb-20">
          <div className="w-12 h-[1px] bg-gold mb-8" />
          <h2 className="font-serif text-[40px] leading-[50px] lg:text-[52px] lg:leading-[60px] font-light text-primary mb-6 tracking-[-0.02em]">
            Voices from the Ecosystem.
          </h2>
          <p className="text-[18px] leading-[34px] text-secondary">
            Hear from the ambitious people already building within Beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: EASE }}
              className="bg-card border border-border p-10 lg:p-14 rounded-sm flex flex-col"
            >
              <div className="flex-grow">
                <p className="font-serif text-[22px] leading-[38px] text-primary mb-12 italic tracking-tight">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="pt-8 border-t border-border/50 flex items-center gap-4">
                <div>
                  <h4 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-primary mb-1">{t.name}</h4>
                  <p className="text-[14px] text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
