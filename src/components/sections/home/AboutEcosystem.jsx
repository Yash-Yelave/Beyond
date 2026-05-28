import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function AboutEcosystem() {
  return (
    <section className="bg-stone py-24 lg:py-32 overflow-hidden border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-copper" />
            <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
              The Platform
            </span>
          </div>
          
          <h2 className="font-serif text-[36px] leading-[1.2] lg:text-[48px] font-medium text-ink mb-8 tracking-[-0.02em]">
            A curated engine for growth and intelligence.
          </h2>
          
          <div className="space-y-6 text-slate text-[16px] leading-[1.7] font-medium mb-10">
            <p>
              Traditional networking relies on serendipity. Beyond replaces it with structured intentionality. We have built a high-trust environment where ambitious founders, active investors, and seasoned operators connect.
            </p>
            <p>
              By tightly curating our members, we ensure alignment in ambition and intent, creating a platform where relationships compound and opportunities scale rapidly.
            </p>
          </div>

          <Link to="/about" className="group inline-flex items-center gap-3 text-[14px] font-bold text-ink hover:text-forest transition-colors">
            Explore the Ecosystem
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Right Visual: Asymmetrical Image Composition */}
        <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] flex items-center justify-center">
          
          {/* Back Layer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: EASE }}
            className="absolute right-0 top-10 w-[70%] h-[60%] rounded-xl border border-line shadow-sm overflow-hidden flex flex-col group"
          >
            <div className="absolute inset-0 bg-copper/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="/campaign-creators-gMsnXqILjp4-unsplash.jpg" 
              alt="Collaborative workspace" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Front Layer */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="absolute left-0 bottom-10 w-[60%] h-[60%] rounded-xl border-4 border-card shadow-lg overflow-hidden flex flex-col group"
          >
            <div className="absolute inset-0 bg-forest/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="/annie-spratt-hCb3lIB8L8E-unsplash.jpg" 
              alt="Founder workspace" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
