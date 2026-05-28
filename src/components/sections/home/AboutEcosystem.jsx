import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function AboutEcosystem() {
  return (
    <section className="bg-ivory py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="w-12 h-[1px] bg-gold mb-10" />
          
          <h2 className="font-serif text-[40px] leading-[50px] lg:text-[52px] lg:leading-[60px] font-light text-primary mb-10 tracking-[-0.02em]">
            Not just another social network. A curated engine for growth.
          </h2>
          
          <div className="space-y-8 text-secondary text-[18px] leading-[34px] mb-12">
            <p>
              Traditional networking is transactional, noisy, and inefficient. Beyond is built differently. It's a high-trust environment where every interaction is intentional and highly relevant.
            </p>
            <p>
              We curate our members to ensure alignment in ambition and values. Inside, members contribute, collaborate, and grow together—focusing on long-term relationships that compound over time.
            </p>
          </div>

          <Link to="/about" className="group inline-flex items-center gap-4 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-gold transition-colors">
            <span>Explore the Ecosystem</span>
            <span className="w-8 h-[1px] bg-primary group-hover:bg-gold transition-colors" />
          </Link>

        </motion.div>

        {/* Right Visual: Offset Image Stack */}
        <div className="lg:col-span-7 relative h-[600px] lg:h-[800px] flex items-center justify-center">
          
          {/* Back Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="absolute right-0 top-10 w-[70%] h-[60%] lg:h-[70%] bg-muted rounded-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-border/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#D4CFC4] mix-blend-multiply opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="font-serif text-6xl tracking-widest text-primary">BEYOND</span>
            </div>
          </motion.div>

          {/* Front Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            className="absolute left-0 bottom-10 w-[65%] h-[55%] lg:h-[65%] bg-stone rounded-md shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#E5DFD3] mix-blend-multiply opacity-30" />
            <div className="w-full h-full border border-white/20 m-4 rounded-sm" style={{ width: 'calc(100% - 32px)', height: 'calc(100% - 32px)' }} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
