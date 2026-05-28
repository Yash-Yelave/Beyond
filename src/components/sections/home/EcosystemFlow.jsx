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
    title: 'Internal Review & Alignment',
    desc: 'Our curation team reviews every application to ensure alignment with our ecosystem values.',
  },
  {
    num: '03',
    title: 'Strategic Matching & Access',
    desc: 'Gain entry to the platform and receive personalized introductions to relevant members.',
  },
  {
    num: '04',
    title: 'Long-Term Ecosystem Participation',
    desc: 'Engage in events, share insights, and build relationships that compound over decades.',
  }
];

export default function EcosystemFlow() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            How the Ecosystem Works
          </h2>
          <p className="text-lg text-slate-500">
            A deliberate, curated onboarding process to protect the quality of interactions.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-slate-100" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
                className="relative"
              >
                {/* Number Indicator */}
                <div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm mb-6 shadow-sm z-10 relative lg:mx-auto">
                  {step.num}
                </div>
                
                <div className="lg:text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
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
