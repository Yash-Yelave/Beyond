import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the expected timeline for an exit?",
      answer: "Typically, a 2-3 year horizon is expected for private equity startup investments to see meaningful returns before the next funding round."
    },
    {
      question: "How are Impact Tokens utilized?",
      answer: "Tokens represent your standing in our Contribution Economy. They are earned through mentoring founders and can be redeemed for exclusive events and bespoke requests."
    },
    {
      question: "How do I request a bespoke event?",
      answer: "Members can utilize the Member Request Portal in their active dashboard to submit parameters for curated networking opportunities."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-8">
          WISDOM Framework & General FAQs
        </h2>
        
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search the WISDOM Knowledge Base..."
            className="w-full bg-transparent border-b border-slate-300 py-4 text-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-slate-500 ml-4 text-2xl font-light"
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div 
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
