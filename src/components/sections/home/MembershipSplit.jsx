import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function MembershipSplit() {
  return (
    <section className="bg-stone py-20 lg:py-32 border-y border-border/50">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Left Card: Membership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="bg-card p-12 lg:p-16 border border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between"
          >
            <div>
              <div className="text-gold mb-10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="font-serif text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-light text-primary mb-6 tracking-[-0.02em]">
                Become a Member
              </h2>
              <p className="text-[18px] leading-[34px] text-secondary mb-12 max-w-[480px]">
                Join the ecosystem as a founder, investor, operator, creator, or mentor. Gain access to the network, events, and strategic resources.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link to="/membership" className="inline-flex items-center justify-center bg-gold text-ivory px-8 h-[52px] rounded-lg font-medium text-[15px] hover:bg-gold-hover transition-colors shadow-sm">
                Apply for Membership
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Card: Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="bg-ivory p-12 lg:p-16 border border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between"
          >
            <div>
              <div className="text-gold mb-10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="font-serif text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-light text-primary mb-6 tracking-[-0.02em]">
                Submit Opportunity
              </h2>
              <p className="text-[18px] leading-[34px] text-secondary mb-12 max-w-[480px]">
                Present your startup, project, or investment opportunity to the network for strategic support, funding, and collaborations.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link to="/submit-opportunity" className="inline-flex items-center justify-center bg-transparent border border-gold text-gold px-8 h-[52px] rounded-lg font-medium text-[15px] hover:bg-gold hover:text-ivory transition-colors">
                Submit Opportunity
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
