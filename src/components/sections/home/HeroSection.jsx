import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function HeroSection() {
  return (
    <section className="relative bg-ivory min-h-screen flex items-center overflow-hidden pt-[90px]">
      
      {/* Background Layer: Soft Cinematic Overlay or Pattern (optional, keeping minimal for luxury) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1E1E1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 py-20 lg:py-32 flex flex-col justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-[720px]"
        >
          {/* Label with divider */}
          <div className="mb-10">
            <div className="w-12 h-[1px] bg-gold mb-4" />
            <span className="text-[12px] font-semibold tracking-[0.18em] text-secondary uppercase">
              Private Ecosystem for Builders & Visionaries
            </span>
          </div>

          <h1 className="font-serif text-[48px] leading-[58px] lg:text-[72px] lg:leading-[82px] font-light text-primary tracking-[-0.03em] mb-8">
            Beyond Traditional <br className="hidden lg:block" /> Networking.
          </h1>

          <p className="text-[18px] leading-[34px] text-secondary mb-12 max-w-[620px]">
            A curated ecosystem connecting founders, investors, creators, and operators through meaningful collaboration, strategic access, and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full sm:w-auto">
              <Link to="/membership" className="flex items-center justify-center w-full bg-gold text-ivory px-8 h-[52px] rounded-lg font-medium text-[15px] hover:bg-gold-hover transition-colors shadow-sm">
                Apply for Membership
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full sm:w-auto">
              <Link to="/submit-opportunity" className="flex items-center justify-center w-full bg-transparent border border-gold text-gold px-8 h-[52px] rounded-lg font-medium text-[15px] hover:bg-gold hover:text-ivory transition-colors">
                Submit Opportunity
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] tracking-[0.05em] text-secondary/70">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-border rounded-full" />
              <span>Curated Ecosystem</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-border rounded-full" />
              <span>Founder-Led</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-border rounded-full" />
              <span>Strategic Access</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
