import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const faqs = [
  {
    question: 'Who can apply to become a Beyond member?',
    answer: `Beyond is open to founders, investors, operators, creators, mentors, and industry experts who are actively building, investing, or contributing value in their domain. We look for people who are serious about collaboration, not just networking.`,
  },
  {
    question: 'Is there a membership fee?',
    answer: `Beyond is an invite and application-based community. Membership details — including any associated fees or tiers — are shared after your application is reviewed and shortlisted. We do not charge a fee to apply.`,
  },
  {
    question: 'How long does the review process take?',
    answer: `Our team reviews applications within 5–7 business days. If shortlisted, you'll receive an invitation for a brief alignment call before formal onboarding. The full process typically takes 10–14 days.`,
  },
  {
    question: 'Is Beyond only for startup founders?',
    answer: `No. While founders are a core part of our community, Beyond is equally built for investors, operators, creators, mentors, and domain experts. What unites all members is a commitment to building meaningful things and contributing to others' growth.`,
  },
  {
    question: 'What happens after my application is approved?',
    answer: `Approved members are personally onboarded by our community team. You'll receive curated introductions based on your profile, placement in a relevant Founder Circle or peer group, and access to the full event calendar, community channels, and opportunity feed.`,
  },
  {
    question: 'Can I contribute as a mentor or investor without being a founder?',
    answer: `Absolutely. Beyond actively seeks experienced mentors and investors who can add genuine value to our startup community. If you're applying as a mentor or investor, please indicate this clearly in your application — we have a dedicated onboarding path for you.`,
  },
];

function FaqItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.07 }}
      className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors duration-200 focus:outline-none"
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-500"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-slate-50">
              <p className="text-sm text-slate-500 leading-relaxed pt-4">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Questions, Answered
          </h2>
          <p className="mt-3 text-slate-500 text-sm">Everything you need to know about becoming a Beyond member.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-slate-400 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Still have questions?{' '}
          <a href="mailto:hello@beyond.com" className="text-teal-600 hover:underline font-medium">
            Write to our team
          </a>
        </motion.p>
      </div>
    </section>
  );
}
