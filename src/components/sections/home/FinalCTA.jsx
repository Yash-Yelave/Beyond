import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function FinalCTA() {
  return (
    <section className="bg-deep-slate relative overflow-hidden py-[100px] lg:py-[140px]">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
        <img 
          src="/uh_yeah_20101995-space-4660847.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        <div className="max-w-[980px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="w-12 h-[1px] bg-copper mx-auto mb-8" />
            
            <h2 className="font-serif text-[40px] leading-[1.2] lg:text-[56px] font-medium text-deep-slate-text tracking-[-0.02em] mb-6">
              Build relationships <br className="hidden md:block" /> beyond transactions.
            </h2>
            
            <p className="text-[16px] lg:text-[18px] leading-[1.7] text-deep-slate-text/70 mb-12 max-w-[560px] mx-auto font-medium">
              Join a highly curated network designed for ambitious founders, active investors, and seasoned operators.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link to="/membership" className="flex items-center justify-center w-full bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                  Apply for Membership
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link to="/submit-opportunity" className="flex items-center justify-center w-full bg-transparent border-[1.5px] border-deep-slate-text/20 text-deep-slate-text px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-deep-slate-text/5 hover:border-deep-slate-text/40 transition-colors">
                  Submit Opportunity
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
