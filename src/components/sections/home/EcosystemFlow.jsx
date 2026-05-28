import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const steps = [
  {
    num: '01',
    title: 'Apply or Submit Opportunity',
    desc: 'Tell us about your background, vision, or the specific project you are building.',
  },
  {
    num: '02',
    title: 'Internal Review',
    desc: 'Our curation team reviews every application to ensure alignment with our values.',
  },
  {
    num: '03',
    title: 'Strategic Matching',
    desc: 'Gain entry to the platform and receive personalized introductions to relevant members.',
  },
  {
    num: '04',
    title: 'Long-Term Growth',
    desc: 'Engage in events, share insights, and build relationships that compound over decades.',
  }
];

export default function EcosystemFlow() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="max-w-[620px] mb-24">
          <div className="w-12 h-[1px] bg-gold mb-8" />
          <h2 className="font-serif text-[40px] leading-[50px] lg:text-[52px] lg:leading-[60px] font-light text-primary mb-6 tracking-[-0.02em]">
            How the Ecosystem Works.
          </h2>
          <p className="text-[18px] leading-[34px] text-secondary">
            A deliberate, curated onboarding process to protect the quality of interactions.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-border/60" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: EASE }}
                className="relative flex flex-col items-start"
              >
                {/* Number Indicator */}
                <div className="w-14 h-14 bg-ivory border border-border text-primary rounded-full flex items-center justify-center font-serif text-[22px] mb-8 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.02)] z-10 relative">
                  {step.num}
                </div>
                
                <div>
                  <h3 className="font-serif text-[24px] leading-[34px] font-light text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[30px] text-secondary">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
