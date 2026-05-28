import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Private Ecosystem for Builders & Visionaries
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Beyond Traditional <br className="hidden lg:block" /> Networking
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            A curated ecosystem connecting founders, investors, creators, and operators through meaningful collaboration, strategic access, and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/membership" className="flex items-center justify-center w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                Apply for Membership
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/submit-opportunity" className="flex items-center justify-center w-full bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Submit Opportunity
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              <span>Curated community</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              <span>Founder-led ecosystem</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              <span>High-trust network</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract Premium Visual Component */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex items-center justify-center">
            {/* Soft decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            
            {/* Center geometric anchor */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 border border-white/60 bg-white/40 backdrop-blur-xl rounded-full shadow-lg flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 border border-white/80 bg-white/60 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-inner flex items-center justify-center">
                   <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
