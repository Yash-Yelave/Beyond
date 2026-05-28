import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function FinalCTA() {
  return (
    <section className="bg-white py-32 lg:py-48 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[400px] bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Build Relationships <br className="hidden md:block" /> Beyond Transactions
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            Join a curated ecosystem designed for ambitious people building long-term impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/membership" className="flex items-center justify-center w-full bg-slate-900 text-white px-10 py-4 rounded-xl font-medium text-[15px] hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/10">
                Apply for Membership
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/submit-opportunity" className="flex items-center justify-center w-full bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-medium text-[15px] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Submit Opportunity
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
