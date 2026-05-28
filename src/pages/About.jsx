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
  { name: 'Arjun Mehta', role: 'Founder & Ecosystem Lead', bio: 'Serial entrepreneur with 3 successful exits across FinTech and EdTech. Built and scaled multiple ventures in India and Southeast Asia.', initials: 'AM' },
  { name: 'Priya Nair', role: 'Head of Investor Relations', bio: 'Former investment director at a Tier-1 VC with deep networks across angel, seed, and Series A ecosystem in South Asia.', initials: 'PN' },
  { name: 'Rohit Kapoor', role: 'Community & Partnerships', bio: 'Built communities from the ground up across multiple ecosystems. Passionate about fostering meaningful collaboration at scale.', initials: 'RK' },
];

const stats = [
  { value: '400+', label: 'Curated Members' },
  { value: '120+', label: 'Startups Supported' },
  { value: '₹50Cr+', label: 'Capital Facilitated' },
  { value: '18', label: 'Cities Represented' },
];

export default function About() {
  return (
    <div className="bg-pearl min-h-screen">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative pt-[120px] pb-24 lg:pt-[160px] lg:pb-32 overflow-hidden border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-copper" />
              <span className="text-[12px] font-bold tracking-widest text-slate uppercase">
                About the Ecosystem
              </span>
            </div>
            <h1 className="font-serif text-[44px] md:text-[64px] font-medium text-ink tracking-[-0.02em] leading-[1.12] mb-6">
              Built for <br className="hidden md:block"/> Those Who Build.
            </h1>
            <p className="text-[16px] lg:text-[18px] text-slate font-medium leading-[1.7] max-w-[540px]">
              Beyond was founded on a simple belief: the right relationships, built on trust, create more value than any tool, tactic, or transaction.
            </p>
          </motion.div>

          <div className="lg:col-span-6 relative h-[400px] lg:h-[500px] hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="absolute inset-0 w-full h-full bg-stone border border-line rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-forest/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <img 
                src="/campaign-creators-gMsnXqILjp4-unsplash.jpg" 
                alt="Ecosystem workspace" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                loading="lazy"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }} className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Our Mission</span>
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-ink tracking-[-0.02em] mb-8 leading-[1.2]">
                Infrastructure for <br/> Trusted Growth.
              </h2>
              <div className="space-y-6 text-[16px] text-slate font-medium leading-[1.7] max-w-[540px]">
                <p>
                  Beyond is a private, application-based ecosystem that connects the most ambitious founders, investors, operators, and creators building the future of business in India and beyond.
                </p>
                <p>
                  We don't build communities for everyone. We build curated rooms for the right people — where conversations lead to collaborations, introductions lead to investments, and relationships outlast any single transaction.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }} className="lg:col-span-6 grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-stone border border-line rounded-xl p-8 flex flex-col items-center justify-center text-center">
                  <p className="font-serif text-[32px] md:text-[40px] font-medium text-ink mb-2">{s.value}</p>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-slate">{s.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-stone border-y border-line">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Our Values" title="What We Stand For" subtitle="These aren't slogans. They're the operating principles that guide every decision we make." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }} className="bg-card border border-line rounded-xl p-8 shadow-sm flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={v.icon} /></svg>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] font-medium text-ink mb-3">{v.title}</h3>
                  <p className="text-[15px] text-slate font-medium leading-[1.7]">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="The Team" title="People Behind Beyond" subtitle="A small, deeply invested team that cares about every member's journey." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="bg-card border border-line rounded-xl p-8 shadow-sm group">
                <div className={`w-14 h-14 rounded-full bg-forest/5 text-forest flex items-center justify-center text-[16px] font-bold tracking-wider mb-6 group-hover:scale-105 transition-transform`}>{t.initials}</div>
                <h3 className="font-serif text-[24px] font-medium text-ink mb-1">{t.name}</h3>
                <p className="text-[12px] text-copper font-bold uppercase tracking-wider mb-4">{t.role}</p>
                <p className="text-[15px] text-slate font-medium leading-[1.7]">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-deep-slate py-32 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
          <img src="/uh_yeah_20101995-space-4660847.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative max-w-[800px] mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
            <div className="w-12 h-[1px] bg-copper mx-auto mb-8" />
            <h2 className="font-serif text-[40px] md:text-[56px] font-medium text-deep-slate-text tracking-[-0.02em] mb-6 leading-[1.2]">Join the Ecosystem</h2>
            <p className="text-[16px] lg:text-[18px] text-deep-slate-text/70 font-medium max-w-[540px] mx-auto leading-[1.7] mb-12">Whether you're a founder, investor, or operator — there's a place for you in Beyond.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/membership" className="flex items-center justify-center w-full sm:w-auto bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                Apply for Membership
              </Link>
              <Link to="/contact" className="flex items-center justify-center w-full sm:w-auto bg-transparent border-[1.5px] border-deep-slate-text/20 text-deep-slate-text px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-deep-slate-text/5 hover:border-deep-slate-text/40 transition-colors">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
