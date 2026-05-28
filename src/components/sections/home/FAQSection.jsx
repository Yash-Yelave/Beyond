import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "What is Beyond?",
    a: "Beyond is a curated ecosystem connecting founders, investors, operators, and creators. We prioritize long-term, high-trust relationships over transactional networking."
  },
  {
    q: "Who can join?",
    a: "Membership is open to ambitious builders, visionary founders, active investors, and seasoned operators who align with our values of meaningful collaboration and value creation."
  },
  {
    q: "Is Beyond startup-only?",
    a: "While startups are a core focus, the ecosystem is not exclusively for them. We welcome creators, independent operators, subject matter experts, and investors who bring unique perspectives and value."
  },
  {
    q: "How does approval work?",
    a: "Every application is reviewed by our internal curation team. We look for alignment in ambition, past experiences, and the intent behind joining. Wait times can vary based on volume."
  },
  {
    q: "Is membership curated?",
    a: "Yes. Curation is the core of Beyond. We strictly manage ecosystem entry to ensure the signal-to-noise ratio remains extremely high for all members."
  },
  {
    q: "What happens after applying?",
    a: "Once you submit your application, our team will review it within 1-2 weeks. If aligned, you will receive an invitation to join the platform and access member-only resources."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-stone py-20 lg:py-32 border-y border-border/50">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="font-serif text-[40px] leading-[50px] lg:text-[52px] lg:leading-[60px] font-light text-primary mb-6 tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
          <div className="w-full h-[1px] bg-border mt-12" />
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-border">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                >
                  <span className={`font-serif text-[22px] leading-[32px] pr-8 transition-colors duration-500 ${isOpen ? 'text-gold' : 'text-primary group-hover:text-gold'}`}>
                    {faq.q}
                  </span>
                  <div className="shrink-0 flex items-center justify-center">
                    <svg
                      className={`w-6 h-6 text-primary transition-transform duration-500 ${isOpen ? 'rotate-180 text-gold' : 'rotate-0'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
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
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 text-[18px] leading-[34px] text-secondary max-w-[620px]">
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
