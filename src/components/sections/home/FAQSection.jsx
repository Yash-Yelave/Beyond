import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "What exactly is Beyond?",
    a: "Beyond is a curated ecosystem connecting founders, investors, operators, and creators. We prioritize long-term, high-trust relationships and intentional introductions over noisy, transactional networking."
  },
  {
    q: "Who is eligible to join?",
    a: "Membership is open to ambitious builders, visionary founders, active investors, and seasoned operators who align with our values of meaningful collaboration and value creation."
  },
  {
    q: "Is Beyond restricted to startups?",
    a: "While startups are a core focus, the ecosystem is not exclusively for them. We welcome creators, independent operators, subject matter experts, and investors who bring unique perspectives to the network."
  },
  {
    q: "How does the curation process work?",
    a: "Every application is reviewed by our internal curation team. We evaluate alignment in ambition, past experiences, and the intent behind joining to ensure a high signal-to-noise ratio."
  },
  {
    q: "What happens after I apply?",
    a: "Once you submit your application, our team will review it within 1-2 weeks. If aligned, you will receive an invitation to join the platform, access member-only resources, and begin strategic matching."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-pearl py-24 lg:py-32">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-copper" />
            <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
              Information
            </span>
          </div>
          <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-6 tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-0 border-t border-line">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-line">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                >
                  <span className={`font-sans text-[18px] font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>
                    {faq.q}
                  </span>
                  <div className="shrink-0 flex items-center justify-center">
                    <svg
                      className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-forest' : 'rotate-0 text-slate group-hover:text-ink'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-[15px] leading-[1.7] text-slate font-medium max-w-[680px]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
