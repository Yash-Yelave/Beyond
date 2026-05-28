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
    <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about the ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white border transition-colors duration-300 rounded-2xl overflow-hidden ${
                  isOpen ? 'border-teal-200 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-[15px] font-medium pr-8 transition-colors ${isOpen ? 'text-teal-700' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'}`}>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
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
