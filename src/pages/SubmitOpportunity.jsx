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
    <div className="space-y-0 border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-8 text-left focus:outline-none group">
              <span className={`font-sans text-[18px] font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{item.q}</span>
              <div className="shrink-0 flex items-center justify-center">
                <svg className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-forest' : 'rotate-0 text-slate group-hover:text-ink'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />}
                </svg>
              </div>
            </button>
            {isOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
                <div className="pb-8 text-[15px] leading-[1.7] text-slate font-medium max-w-[720px]">{item.a}</div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SubmitOpportunity() {
  return (
    <div className="bg-pearl min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-[100px] pb-[100px] lg:pt-[140px] lg:pb-[140px] overflow-hidden border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-16 items-center justify-between">
            
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="w-full lg:w-[55%]">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Submit Opportunity</span>
              </div>
              <h1 className="font-serif text-[44px] md:text-[64px] font-medium text-ink tracking-[-0.02em] leading-[1.12] mb-6">
                Bring Your Vision <br className="hidden md:block" /> to Beyond.
              </h1>
              <p className="text-[16px] lg:text-[18px] text-slate font-medium leading-[1.7] max-w-[560px] mb-12">
                Whether you're seeking funding, strategic partnerships, mentorship, or investor introductions — share your opportunity with our curated ecosystem.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {['Funding Access', 'Investor Matching', 'Strategic Partnerships', 'Mentorship', 'Ecosystem Support'].map((tag) => (
                  <span key={tag} className="bg-forest/5 border border-forest/10 text-forest text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded">{tag}</span>
                ))}
              </div>
            </motion.div>
            
            <div className="w-full lg:w-[45%] relative hidden md:flex items-center justify-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                className="relative w-full aspect-[16/10] bg-stone border border-line rounded-2xl overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              >
                <div className="absolute inset-0 bg-ink/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                <img 
                  src="/annie-spratt-hCb3lIB8L8E-unsplash.jpg" 
                  alt="Founder workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                  loading="lazy"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────────────────── */}
      <section className="bg-stone py-[80px] lg:py-[100px] border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {signals.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }} className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <span className="text-[13px] font-bold text-slate uppercase tracking-wider leading-snug">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process flow ──────────────────────────────────────────────── */}
      <section className="py-[100px] lg:py-[140px] bg-pearl">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <SectionHeading eyebrow="How It Works" title="Our Review Process" subtitle="A structured, respectful approach to evaluating every submission." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="relative flex flex-col items-start bg-card p-8 lg:p-10 rounded-2xl border border-line shadow-[0_4px_12px_rgba(0,0,0,0.02)] mt-6">
                  <div className="w-12 h-12 bg-forest/10 border-[2px] border-card shadow-[0_0_0_2px_rgba(42,77,69,0.2)] text-forest rounded-full flex items-center justify-center font-bold text-[14px] mb-6 absolute -top-6 left-8">
                    {s.n}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-[20px] font-medium text-ink mb-3">{s.title}</h3>
                    <p className="text-[14px] text-slate font-medium leading-[1.6]">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-[14px] text-slate font-medium mt-16 max-w-lg mx-auto">We prioritize alignment, contribution, and long-term collaboration over mass submission.</p>
          </div>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────────── */}
      <section id="submit-form" className="py-[100px] lg:py-[140px] bg-stone border-y border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[980px] mx-auto">
            <SectionHeading eyebrow="Application" title="Submit Your Opportunity" subtitle="Takes 6–8 minutes. Every field helps us understand your vision better." />
            <FundingForm />
            <p className="text-center text-[13px] text-slate font-medium mt-8 max-w-[620px] mx-auto">Our team carefully reviews every submission to maintain ecosystem quality and integrity.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-[100px] lg:py-[140px] bg-card">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[980px] mx-auto">
            <SectionHeading eyebrow="FAQs" title="Common Questions" subtitle="Everything you need to know before submitting." />
            <FAQAccordion items={faqs} />
            <p className="text-center text-[14px] text-slate font-medium mt-12">
              Have more questions?{' '}
              <Link to="/contact" className="text-copper hover:underline font-bold">Reach out to our team</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="bg-deep-slate py-[100px] lg:py-[140px] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
          <img src="/uh_yeah_20101995-space-4660847.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative max-w-[980px] mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
            <div className="w-12 h-[1px] bg-copper mx-auto mb-8" />
            <h2 className="font-serif text-[40px] md:text-[56px] font-medium text-deep-slate-text tracking-[-0.02em] mb-6 leading-[1.2]">Ready to grow beyond?</h2>
            <p className="text-[16px] lg:text-[18px] text-deep-slate-text/70 font-medium max-w-[560px] mx-auto leading-[1.7] mb-12">Join a curated network where the right introductions change everything.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href="#submit-form" className="flex items-center justify-center w-full sm:w-auto bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                Submit Your Opportunity
              </a>
              <Link to="/membership" className="flex items-center justify-center w-full sm:w-auto bg-transparent border-[1.5px] border-deep-slate-text/20 text-deep-slate-text px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-deep-slate-text/5 hover:border-deep-slate-text/40 transition-colors">
                Apply for Membership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
