import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function AboutEcosystem() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Visual Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative h-[400px] lg:h-[500px] bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-center shadow-inner"
        >
          {/* Abstract Ecosystem Representation */}
          <div className="relative w-full h-full flex items-center justify-center p-10">
            <div className="w-full h-full border border-dashed border-slate-300 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
              <div className="w-3/4 h-3/4 border border-dashed border-slate-200 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                <div className="w-1/2 h-1/2 bg-teal-50 rounded-full border border-teal-100 flex items-center justify-center shadow-lg shadow-teal-500/10">
                  <div className="w-1/2 h-1/2 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
            {/* Nodes */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white border border-slate-200 rounded-full shadow-sm" />
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-sm" />
            <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-teal-400 rounded-full shadow-md shadow-teal-500/20" />
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-white border border-slate-200 rounded-full shadow-sm" />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Not just another social network. A curated engine for growth.
          </h2>
          
          <div className="space-y-6 text-slate-500 leading-relaxed text-lg mb-10">
            <p>
              Traditional networking is transactional, noisy, and inefficient. Beyond is built differently. It's a high-trust environment where every interaction is intentional.
            </p>
            <p>
              We curate our members to ensure alignment in ambition and values. Inside, members contribute, collaborate, and grow together—focusing on long-term relationships that compound over time.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors bg-teal-50 hover:bg-teal-100 px-6 py-3 rounded-xl">
              Explore the Ecosystem
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
