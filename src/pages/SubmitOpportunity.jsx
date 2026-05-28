import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import FundingForm from '../components/sections/submit/FundingForm';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

// ── Process steps ─────────────────────────────────────────────────────────────
const steps = [
  { n: '01', title: 'Submit Application', desc: 'Complete our structured form with your startup details, team info, and growth metrics.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { n: '02', title: 'Internal Review', desc: 'Our team evaluates alignment, market fit, and opportunity for ecosystem support.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { n: '03', title: 'Introductory Call', desc: 'Shortlisted founders are invited for a focused conversation with our ecosystem team.', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { n: '04', title: 'Ecosystem Access', desc: 'Approved opportunities receive curated investor introductions, mentorship, and strategic support.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

// ── Trust signals ─────────────────────────────────────────────────────────────
const signals = [
  { label: 'Curated Investor Network', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Confidential Review Process', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { label: 'Strategic Mentorship Access', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { label: 'No Mass-Pitch Approach', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Who can submit an opportunity?', a: 'Any founder, startup team, innovator, or operator building something meaningful can apply. We accept submissions across industries and stages — from idea-stage to scaling ventures.' },
  { q: 'Is Beyond only for startups?', a: 'No. While startups form a core part of our community, Beyond also welcomes established entrepreneurs, domain experts, and strategic collaborators seeking high-trust ecosystem connections.' },
  { q: 'How long does the review process take?', a: 'Our team typically reviews submissions within 5–7 business days. You will receive a status update via email throughout the process.' },
  { q: 'Is my information kept confidential?', a: 'Absolutely. All submissions are treated with the highest confidentiality. Your information is never shared without your explicit consent.' },
  { q: 'Does Beyond guarantee funding?', a: 'No. Beyond is a facilitation and matchmaking ecosystem. We connect qualified founders with investors and mentors, but final decisions rest entirely with the individual investors and partners.' },
];

function FAQAccordion({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }} className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none">
            <span className="font-semibold text-slate-900 text-sm">{item.q}</span>
            <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </motion.div>
          </button>
          {open === i && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
              <div className="px-6 pb-5 border-t border-slate-50"><p className="text-sm text-slate-500 leading-relaxed pt-4">{item.a}</p></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function SubmitOpportunity() {
  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse,#14b8a6 0%,transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Submit Opportunity</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-5">
              Bring Your Opportunity to Beyond
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you're seeking funding, strategic partnerships, mentorship, or investor introductions — share your opportunity with our curated ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Funding Access', 'Investor Matching', 'Strategic Partnerships', 'Mentorship', 'Ecosystem Support'].map((tag) => (
                <span key={tag} className="bg-white/8 border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {signals.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <span className="text-xs font-semibold text-slate-600 leading-snug">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process flow ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="How It Works" title="Our Review Process" subtitle="A structured, respectful approach to evaluating every submission." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-slate-900/20">{s.n}</div>
                  <div className="w-9 h-9 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                  </div>
                </div>
                <div><h3 className="text-sm font-semibold text-slate-900 mb-1.5">{s.title}</h3><p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p></div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-10 max-w-lg mx-auto">We prioritize alignment, contribution, and long-term collaboration over mass submission.</p>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────────── */}
      <section id="submit-form" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading eyebrow="Application" title="Submit Your Opportunity" subtitle="Takes 6–8 minutes. Every field helps us understand your vision better." />
          <FundingForm />
          <p className="text-center text-xs text-slate-400 mt-5">Our team carefully reviews every submission to maintain ecosystem quality and integrity.</p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="FAQs" title="Common Questions" subtitle="Everything you need to know before submitting." />
          <FAQAccordion items={faqs} />
          <p className="text-center text-xs text-slate-400 mt-10">
            Have more questions?{' '}
            <Link to="/contact" className="text-teal-600 hover:underline font-medium">Reach out to our team</Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse,#14b8a6 0%,transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Ready to grow beyond?</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">Join a curated network where the right introductions change everything.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a href="#submit-form" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block bg-teal-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-teal-400 transition-colors">Submit Your Opportunity</motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/membership" className="inline-block bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors">Apply for Membership</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
