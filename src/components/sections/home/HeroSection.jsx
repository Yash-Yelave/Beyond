import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function HeroSection() {
  return (
    <section className="relative bg-pearl min-h-screen flex items-center pt-[80px] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto w-full px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-copper" />
            <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
              Curated Private Network
            </span>
          </div>

          <h1 className="font-serif text-[44px] leading-[1.15] lg:text-[64px] font-medium text-ink tracking-[-0.02em] mb-8">
            The next generation of <br className="hidden lg:block" /> builders & visionaries.
          </h1>

          <p className="text-[16px] lg:text-[18px] leading-[1.7] text-slate mb-12 max-w-[540px] font-medium">
            Beyond is a structured ecosystem connecting ambitious founders, active investors, and seasoned operators through intentional, high-trust pathways.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-14 w-full sm:w-auto">
            <Link to="/membership" className="w-full sm:w-auto flex items-center justify-center bg-forest text-card px-8 h-[48px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
              Apply for Membership
            </Link>
            <Link to="/submit-opportunity" className="w-full sm:w-auto flex items-center justify-center bg-transparent border-[1.5px] border-copper/40 text-copper px-8 h-[48px] rounded-lg font-semibold text-[15px] hover:bg-copper/5 hover:border-copper transition-colors">
              Submit Opportunity
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] font-medium text-slate/80">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-forest rounded-sm" />
              <span>Vetted Members</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-forest rounded-sm" />
              <span>Strategic Connections</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-forest rounded-sm" />
              <span>Founder-Led</span>
            </div>
          </div>
        </motion.div>
        
        {/* Right Visual Ecosystem Layers */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-[600px] hidden md:flex items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="absolute inset-0 right-0 w-[80%] h-[80%] ml-auto mt-auto bg-stone border border-line rounded-xl shadow-sm flex flex-col p-6"
          >
            <div className="w-full h-1/2 border-b border-line border-dashed flex items-end pb-4">
              <span className="text-[12px] font-bold text-slate/50 uppercase tracking-widest">Network Nodes</span>
            </div>
            <div className="w-full h-1/2 flex items-start pt-4 gap-4">
              <div className="w-12 h-12 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center text-forest text-[10px] font-bold">INV</div>
              <div className="w-12 h-12 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center text-copper text-[10px] font-bold">FND</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="absolute top-10 left-0 w-[60%] h-[60%] bg-card border border-line rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-6 z-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-1 bg-forest mb-6 rounded-full" />
              <div className="w-3/4 h-3 bg-surface rounded-sm mb-3" />
              <div className="w-1/2 h-3 bg-surface rounded-sm" />
            </div>
            <div className="flex justify-between items-end">
              <div className="w-10 h-10 bg-surface rounded-full" />
              <div className="w-24 h-8 bg-surface rounded-md" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
