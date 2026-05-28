import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const values = [
  { title: 'Curated Over Crowded', desc: 'We believe deeply in quality. Every member, every opportunity, every connection is evaluated for genuine fit and mutual value.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'Trust as Infrastructure', desc: 'High trust isn\'t a nice-to-have — it\'s the foundation on which every collaboration, introduction, and partnership is built.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Long-Term Thinking', desc: 'We optimize for relationships that compound over time, not transactions that expire. Every connection should create lasting value.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { title: 'Contribution First', desc: 'Members are expected to give before they get. The strongest ecosystems are built by people who lead with generosity.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
];

const team = [
  { name: 'Arjun Mehta', role: 'Founder & Ecosystem Lead', bio: 'Serial entrepreneur with 3 successful exits across FinTech and EdTech. Built and scaled multiple ventures in India and Southeast Asia.', initials: 'AM', color: 'bg-teal-100 text-teal-700' },
  { name: 'Priya Nair', role: 'Head of Investor Relations', bio: 'Former investment director at a Tier-1 VC with deep networks across angel, seed, and Series A ecosystem in South Asia.', initials: 'PN', color: 'bg-blue-100 text-blue-700' },
  { name: 'Rohit Kapoor', role: 'Community & Partnerships', bio: 'Built communities from the ground up across multiple ecosystems. Passionate about fostering meaningful collaboration at scale.', initials: 'RK', color: 'bg-violet-100 text-violet-700' },
];

const stats = [
  { value: '400+', label: 'Curated Members' },
  { value: '120+', label: 'Startups Supported' },
  { value: '₹50Cr+', label: 'Capital Facilitated' },
  { value: '18', label: 'Cities Represented' },
];

export default function About() {
  return (
    <div className="bg-white">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse,#14b8a6 0%,transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">About the Ecosystem</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-5">
              Built for Those Who Build
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Beyond was founded on a simple belief: the right relationships, built on trust, create more value than any tool, tactic, or transaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5">
                Building the Infrastructure for Trusted Growth
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                Beyond is a private, application-based ecosystem that connects the most ambitious founders, investors, operators, and creators building the future of business in India and beyond.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                We don't build communities for everyone. We build curated rooms for the right people — where conversations lead to collaborations, introductions lead to investments, and relationships outlast any single transaction.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }} className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-slate-900 mb-1">{s.value}</p>
                  <p className="text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Our Values" title="What We Stand For" subtitle="These aren't slogans. They're the operating principles that guide every decision we make." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d={v.icon} /></svg>
                </div>
                <div><h3 className="text-base font-semibold text-slate-900 mb-2">{v.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="The Team" title="People Behind Beyond" subtitle="A small, deeply invested team that cares about every member's journey." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="bg-slate-50 border border-slate-100 rounded-2xl p-7 shadow-sm">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-base font-bold mb-5 ${t.color}`}>{t.initials}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{t.name}</h3>
                <p className="text-xs text-teal-600 font-medium mb-3">{t.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse,#14b8a6 0%,transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
            <h2 className="text-3xl font-bold text-white mb-4">Join the Ecosystem</h2>
            <p className="text-slate-400 text-base mb-8">Whether you're a founder, investor, or operator — there's a place for you in Beyond.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/membership" className="inline-block bg-teal-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-teal-400 transition-colors">Apply for Membership</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-block bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors">Get in Touch</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
