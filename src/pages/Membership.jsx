import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import MembershipForm from '../components/sections/membership/MembershipForm';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

// ── Benefits ──────────────────────────────────────────────────────────────────
const benefits = [
  { title: 'Strategic Networking', desc: 'Build lasting relationships with high-calibre peers who elevate your thinking and open doors that matter.', path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: 'text-teal-600 bg-teal-50 border-teal-100' },
  { title: 'Investor Access', desc: 'Direct introductions to curated angels, family offices, and VCs actively seeking aligned opportunities.', path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { title: 'Founder Circles', desc: 'Join intimate peer groups of founders at similar stages who share learnings, accountability, and support.', path: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'text-violet-600 bg-violet-50 border-violet-100' },
  { title: 'Mentorship & Guidance', desc: 'Access experienced operators and domain experts who offer structured guidance at your current stage.', path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', color: 'text-amber-600 bg-amber-50 border-amber-100' },
  { title: 'Curated Opportunities', desc: 'From co-investment deals to GTM partnerships — access deal flow unavailable in public networks.', path: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'text-rose-600 bg-rose-50 border-rose-100' },
  { title: 'Private Events', desc: 'Invite-only roundtables, curated dinners, and immersive retreats designed for meaningful off-screen connection.', path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'text-slate-600 bg-slate-100 border-slate-200' },
];

// ── Process ───────────────────────────────────────────────────────────────────
const processSteps = [
  { n: '01', title: 'Submit Application', desc: 'Complete our structured membership form with your background, motivations, and interests.' },
  { n: '02', title: 'Internal Review', desc: 'Our team evaluates each application for cultural alignment, expertise, and contribution potential.' },
  { n: '03', title: 'Community Alignment', desc: 'Shortlisted applicants have a brief introductory call to ensure mutual value and fit.' },
  { n: '04', title: 'Ecosystem Access', desc: 'Approved members are onboarded with curated introductions, circle placement, and full access.' },
];

// ── Audience tabs ─────────────────────────────────────────────────────────────
const audiences = [
  { id: 'founders', label: '🚀 Founders', why: 'You are building something that challenges the status quo.', receives: ['Curated investor introductions', 'Founder Circles for peer accountability', 'GTM, product, and hiring support', 'Co-investment opportunities'], contributes: 'Bold ambition and new ventures that energize the entire ecosystem.' },
  { id: 'investors', label: '💼 Investors', why: 'You deploy capital thoughtfully and seek high-quality deal flow.', receives: ['Vetted, curated startup deal flow', 'Co-investment opportunities', 'Sector-specific founder roundtables', 'Emerging market trend insights'], contributes: 'Capital, conviction, and experience that catalyze founders to build faster.' },
  { id: 'operators', label: '⚙️ Operators', why: 'You have built things at scale and understand what execution looks like.', receives: ['Advisory opportunities with high-growth startups', 'Exclusive community events', 'Strategic partnership introductions', 'Visibility within a high-trust network'], contributes: 'Operational depth that turns founder vision into scalable reality.' },
  { id: 'mentors', label: '🧭 Mentors', why: 'You have walked the path and want to guide those coming after you.', receives: ['Matched mentorship program', 'Advisory equity opportunities', 'Exclusive mentor retreats', 'Peer recognition within community'], contributes: 'Wisdom that compresses founders\' timelines and raises success probability.' },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  { quote: `Beyond isn't a community — it's a carefully assembled room of people serious about building. Within my first month, I had three warm intros that shaped our Series A strategy.`, name: 'Vikram Anand', role: 'Founder & CEO', company: 'PulseFinance', initials: 'VA', color: 'bg-teal-100 text-teal-700' },
  { quote: `I've been part of many networks over 15 years of investing. Beyond is the rare one where I consistently leave conversations with genuine insight — not just another pitch deck.`, name: 'Meera Krishnamurthy', role: 'Partner', company: 'Horizon Capital', initials: 'MK', color: 'bg-blue-100 text-blue-700' },
  { quote: `As a creator building in the startup space, Beyond gave me collaborators, not just followers — and that's changed everything about how I build in public.`, name: 'Aditya Sharma', role: 'Creator & Founder', company: 'BuildPublic', initials: 'AS', color: 'bg-violet-100 text-violet-700' },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Who can apply to become a Beyond member?', a: 'Beyond is open to founders, investors, operators, creators, mentors, and industry experts who are actively building, investing, or contributing value in their domain.' },
  { q: 'Is there a membership fee?', a: 'Membership details — including any associated fees or tiers — are shared after your application is reviewed and shortlisted. We do not charge a fee to apply.' },
  { q: 'How long does the review process take?', a: 'Our team reviews applications within 5–7 business days. The full onboarding process typically takes 10–14 days.' },
  { q: 'Is Beyond only for startup founders?', a: 'No. While founders are a core part of our community, Beyond is equally built for investors, operators, creators, mentors, and domain experts.' },
  { q: 'What happens after my application is approved?', a: 'Approved members are personally onboarded with curated introductions, placement in a relevant Founder Circle, and access to the full event calendar and community channels.' },
  { q: 'Can I contribute as a mentor or investor?', a: 'Absolutely. Beyond actively seeks experienced mentors and investors. If applying in this capacity, indicate it clearly — we have a dedicated onboarding path for you.' },
];

function FAQAccordion({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.45, ease: EASE, delay: i * 0.05 }} className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none">
            <span className="font-semibold text-slate-900 text-sm">{item.q}</span>
            <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </motion.div>
          </button>
          {open === i && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
              <div className="px-6 pb-5 border-t border-slate-50"><p className="text-sm text-slate-500 leading-relaxed pt-4">{item.a}</p></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Membership() {
  const [activeTab, setActiveTab] = React.useState('founders');
  const active = audiences.find(a => a.id === activeTab);

  return (
    <div className="bg-white">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse,#14b8a6 0%,transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Membership</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-5">
              Become Part of <span className="text-teal-400">Beyond</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
              Join a curated ecosystem of visionary founders, investors, creators, and operators building meaningful growth together.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {['Curated Community', 'High-Trust Network', 'Founder-Led', 'Strategic Connections'].map(b => (
                <div key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span className="text-xs font-semibold text-slate-300">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a href="#membership-form" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                Apply for Membership
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/" className="inline-block bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition-colors">
                  Explore Ecosystem
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Member Benefits" title="Why Join Beyond" subtitle="An ecosystem engineered for compounding relationships and long-term collaborative growth." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }} whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm flex flex-col gap-4 transition-all duration-300 cursor-default group">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${b.color}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d={b.path} /></svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
                <div className="h-[2px] w-8 bg-teal-400 rounded-full mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Who Is This For" title="Built for the Ambitious" subtitle="Beyond is designed for people who create value, not just consume it." />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {audiences.map(a => (
              <button key={a.id} onClick={() => setActiveTab(a.id)} className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${activeTab === a.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'}`}>{a.label}</button>
            ))}
          </div>
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-8"><p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">Why You Belong</p><p className="text-sm text-slate-700 leading-relaxed font-medium">{active.why}</p></div>
              <div className="p-8"><p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">What You Receive</p><ul className="space-y-3">{active.receives.map((r, i) => <li key={i} className="flex items-start gap-2.5"><svg className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-sm text-slate-600">{r}</span></li>)}</ul></div>
              <div className="p-8 flex flex-col justify-between"><div><p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">How You Contribute</p><p className="text-sm text-slate-700 leading-relaxed">{active.contributes}</p></div><a href="#membership-form" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group">Apply Now <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="The Process" title="How Membership Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-slate-900/20">{s.n}</div>
                <div><h3 className="text-sm font-semibold text-slate-900 mb-2">{s.title}</h3><p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p></div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-10 max-w-lg mx-auto">We prioritize alignment, contribution, and long-term collaboration over mass membership.</p>
        </div>
      </section>

      {/* ── Membership Form ─────────────────────────────────────────── */}
      <section id="membership-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="Application" title="Apply for Membership" subtitle="Takes 4–6 minutes. Every field helps us understand you better." />
          <MembershipForm />
          <p className="text-center text-xs text-slate-400 mt-5">Our team carefully reviews every application to maintain the quality and integrity of the ecosystem.</p>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Member Stories" title="Heard From the Community" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm flex flex-col gap-5 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.company}</span>
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <svg key={j} className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow"><span className="text-slate-300 text-3xl font-serif leading-none mr-1">"</span>{t.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.color}`}>{t.initials}</div>
                  <div><p className="text-sm font-semibold text-slate-900">{t.name}</p><p className="text-xs text-slate-400">{t.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="FAQs" title="Questions, Answered" subtitle="Everything you need to know about becoming a Beyond member." />
          <FAQAccordion items={faqs} />
          <p className="text-center text-xs text-slate-400 mt-10">
            Still have questions?{' '}
            <Link to="/contact" className="text-teal-600 hover:underline font-medium">Write to our team</Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse,#14b8a6 0%,transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Build Relationships Beyond Transactions</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">Join a network designed for meaningful collaboration, long-term growth, and trusted connections.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a href="#membership-form" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block bg-teal-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-teal-400 transition-colors">Apply for Membership</motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/submit-opportunity" className="inline-block bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors">Submit Opportunity</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
