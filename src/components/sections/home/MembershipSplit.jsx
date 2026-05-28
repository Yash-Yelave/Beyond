import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function MembershipSplit() {
  return (
    <section className="bg-pearl overflow-hidden lg:min-h-[90vh] flex flex-col justify-center py-24 lg:py-0">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        
        {/* Inner Content Wrapper */}
        <div className="max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Card: Membership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="bg-card p-10 lg:p-16 border border-line rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center text-forest mb-10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="font-serif text-[32px] lg:text-[40px] font-medium text-ink mb-6 tracking-[-0.02em]">
                  Become a Member
                </h2>
                <p className="text-[16px] leading-[1.7] text-slate mb-12 max-w-[480px] font-medium">
                  Join the ecosystem as a founder, investor, operator, or creator. Gain access to the curated network and exclusive strategic resources.
                </p>
              </div>
              <Link to="/membership" className="inline-flex items-center justify-center bg-forest text-card h-[52px] px-8 rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors w-max shadow-sm">
                Apply for Membership
              </Link>
            </motion.div>

            {/* Right Card: Opportunity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="bg-stone p-10 lg:p-16 border border-line rounded-2xl flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center text-copper mb-10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="font-serif text-[32px] lg:text-[40px] font-medium text-ink mb-6 tracking-[-0.02em]">
                  Submit Opportunity
                </h2>
                <p className="text-[16px] leading-[1.7] text-slate mb-12 max-w-[480px] font-medium">
                  Present your startup, project, or investment opportunity directly to the network for strategic support, funding, and collaborations.
                </p>
              </div>
              <Link to="/submit-opportunity" className="inline-flex items-center justify-center bg-card border-[1.5px] border-copper/40 text-copper h-[52px] px-8 rounded-lg font-semibold text-[15px] hover:bg-copper/5 hover:border-copper transition-colors w-max">
                Submit Opportunity
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
