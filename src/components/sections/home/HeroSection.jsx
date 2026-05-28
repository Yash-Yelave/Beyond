import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function HeroSection() {
  return (
    <section className="relative bg-pearl min-h-screen flex items-center overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 py-16 lg:py-0">
        
        {/* Inner Content Wrapper for Grid Alignment */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="w-full lg:w-[55%] flex flex-col items-start"
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

            <p className="text-[16px] lg:text-[18px] leading-[1.7] text-slate mb-12 max-w-[560px] font-medium">
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
          
          {/* Right Visual Video Panel */}
          <div className="w-full lg:w-[45%] relative hidden md:flex items-center justify-end">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="relative w-full aspect-[16/10] bg-stone border border-line rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col group"
            >
              <div className="absolute inset-0 bg-ink/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <video
                src="/3580-172488178_tiny.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover z-0"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
