import React from 'react';
import Hero from '../components/sections/home/Hero';
import MetricsBanner from '../components/sections/home/MetricsBanner';
import Portfolio from '../components/sections/home/Portfolio';
import MissionVision from '../components/sections/home/MissionVision';
import EcosystemPillars from '../components/sections/home/EcosystemPillars';
import CommunityReel from '../components/sections/home/CommunityReel';
import FAQ from '../components/sections/home/FAQ';
import FeaturedProjectsSlider from '../components/sections/home/FeaturedProjectsSlider';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

function HomeFinalCTA() {
  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #14b8a6 0%, transparent 70%)' }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-3">The Beyond Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
            Build Relationships Beyond Transactions
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Join a network designed for meaningful collaboration, long-term growth, and trusted connections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/membership" className="inline-block bg-teal-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                Apply for Membership
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/submit-opportunity" className="inline-block bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors">
                Submit Opportunity
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsBanner />
      <Portfolio />
      <MissionVision />
      <EcosystemPillars />
      <CommunityReel />
      <FeaturedProjectsSlider />
      <FAQ />
      <HomeFinalCTA />
    </>
  );
}
