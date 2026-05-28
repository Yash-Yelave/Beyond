import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function FinalCTA() {
  return (
    <section className="bg-charcoal py-32 lg:py-48 relative overflow-hidden">
      <div className="relative max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="w-12 h-[1px] bg-gold mx-auto mb-10" />
          
          <h2 className="font-serif text-[48px] leading-[58px] lg:text-[72px] lg:leading-[82px] font-light text-charcoal-text tracking-[-0.03em] mb-10">
            Build Relationships <br className="hidden md:block" /> Beyond Transactions.
          </h2>
          
          <p className="text-[18px] leading-[34px] text-charcoal-text/60 mb-16 max-w-[620px] mx-auto">
            Join a curated ecosystem designed for ambitious people building long-term impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/membership" className="flex items-center justify-center w-full bg-gold text-ivory px-10 h-[52px] rounded-lg font-medium text-[15px] hover:bg-gold-hover transition-colors shadow-sm">
                Apply for Membership
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/submit-opportunity" className="flex items-center justify-center w-full bg-transparent border border-gold text-gold px-10 h-[52px] rounded-lg font-medium text-[15px] hover:bg-gold hover:text-ivory transition-colors">
                Submit Opportunity
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
