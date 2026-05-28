import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const steps = [
  {
    num: '01',
    title: 'Apply or Submit',
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
    desc: 'Gain entry to the platform and receive personalized introductions to relevant nodes.',
  },
  {
    num: '04',
    title: 'Long-Term Growth',
    desc: 'Engage in events, share insights, and build relationships that compound over decades.',
  }
];

export default function EcosystemFlow() {
  return (
    <section className="bg-stone border-y border-line overflow-hidden lg:min-h-[90vh] flex flex-col justify-center py-24 lg:py-0">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        
        {/* Inner Content Wrapper */}
        <div className="max-w-[1200px] mx-auto">
          
          <div className="max-w-[620px] mb-24">
             <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-forest" />
              <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
                Network Pathways
              </span>
            </div>
            <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-6 tracking-[-0.02em]">
              How the Ecosystem Works.
            </h2>
            <p className="text-[16px] leading-[1.7] text-slate font-medium">
              A deliberate, curated onboarding process to protect the quality of interactions across the network.
            </p>
          </div>

          <div className="relative">
            {/* Pathway Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-10 w-[calc(100%-80px)] h-[2px] bg-line border-dashed z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
                  className="relative flex flex-col items-start bg-card p-8 lg:p-10 rounded-2xl border border-line shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                >
                  {/* Node Indicator */}
                  <div className="w-12 h-12 bg-forest/10 border-[2px] border-card shadow-[0_0_0_2px_rgba(42,77,69,0.2)] text-forest rounded-full flex items-center justify-center font-bold text-[14px] mb-8 absolute -top-6 left-8">
                    {step.num}
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-serif text-[20px] font-medium text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-slate font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
