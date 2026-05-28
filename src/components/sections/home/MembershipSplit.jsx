import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function MembershipSplit() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Left Card: Membership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="bg-white p-10 lg:p-14 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Become a Member
              </h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Join the ecosystem as a founder, investor, operator, creator, or mentor. Gain access to the network, events, and strategic resources.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/membership" className="inline-flex items-center justify-center w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                Apply for Membership
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Card: Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="bg-teal-50/50 p-10 lg:p-14 rounded-[2rem] border border-teal-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-white border border-teal-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Submit Opportunity
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Present your startup, project, or investment opportunity to the network for strategic support, funding, and collaborations.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/submit-opportunity" className="inline-flex items-center justify-center w-full bg-teal-500 text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                Submit Opportunity
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
