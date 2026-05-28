import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const faqs = [
  {
    question: 'Who can apply to the Beyond ecosystem?',
    answer: 'Any founder, startup team, innovator, creator, or operator building something meaningful can apply. We accept applications across industries and stages — from idea-stage to scaling ventures. Both solo founders and teams are welcome.',
  },
  {
    question: 'Is Beyond only for startups?',
    answer: 'No. While a large portion of our community consists of startups, Beyond also welcomes established entrepreneurs, domain experts, operators, investors, and strategic collaborators who want to contribute to and benefit from a high-trust ecosystem.',
  },
  {
    question: 'How long does the review process take?',
    answer: 'Our internal team typically reviews submissions within 5–7 business days. Complex submissions that require deeper due diligence may take up to 2 weeks. You will receive a status update via email throughout the process.',
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. All submissions are treated with the highest level of confidentiality. Your information is never shared externally without your explicit consent. We take data privacy seriously and comply with applicable privacy regulations.',
  },
  {
    question: 'What happens after my submission is reviewed?',
    answer: 'If your submission is shortlisted, our team will reach out to schedule an introductory call. We'll then discuss next steps, which may include ecosystem onboarding, curated investor introductions, or mentorship matching — based on your specific needs.',
  },
  {
    question: 'Does Beyond guarantee funding?',
    answer: 'No. Beyond does not guarantee funding or any specific outcome. We are a facilitation and matchmaking ecosystem. We connect qualified founders with investors and mentors, but final decisions rest entirely with the individual investors and partners within our network.',
  },
];

function FaqItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
      className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm"
    >
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors duration-200 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
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
            transition={{ duration: 0.35, ease: EASE }}
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Common Questions
          </h2>
          <p className="mt-3 text-slate-500 text-sm">
            Everything you need to know before submitting your opportunity.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-xs text-slate-400 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Have more questions?{' '}
          <a href="mailto:contact@beyond.com" className="text-teal-600 hover:underline font-medium">
            Reach out to our team
          </a>
        </motion.p>

      </div>
    </section>
  );
}
