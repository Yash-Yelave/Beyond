import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import MembershipForm from '../components/sections/membership/MembershipForm';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

// ── Benefits ──────────────────────────────────────────────────────────────────
const benefits = [
  { title: 'Strategic Networking', desc: 'Build lasting relationships with high-calibre peers who elevate your thinking and open doors that matter.', path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: 'Investor Access', desc: 'Direct introductions to curated angels, family offices, and VCs actively seeking aligned opportunities.', path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Founder Circles', desc: 'Join intimate peer groups of founders at similar stages who share learnings, accountability, and support.', path: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { title: 'Mentorship & Guidance', desc: 'Access experienced operators and domain experts who offer structured guidance at your current stage.', path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { title: 'Curated Opportunities', desc: 'From co-investment deals to GTM partnerships — access deal flow unavailable in public networks.', path: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { title: 'Private Events', desc: 'Invite-only roundtables, curated dinners, and immersive retreats designed for meaningful off-screen connection.', path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
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
  { quote: `Beyond isn't a community — it's a carefully assembled room of people serious about building. Within my first month, I had three warm intros that shaped our Series A strategy.`, name: 'Vikram Anand', role: 'Founder & CEO', company: 'PulseFinance', initials: 'VA' },
  { quote: `I've been part of many networks over 15 years of investing. Beyond is the rare one where I consistently leave conversations with genuine insight — not just another pitch deck.`, name: 'Meera Krishnamurthy', role: 'Partner', company: 'Horizon Capital', initials: 'MK' },
  { quote: `As a creator building in the startup space, Beyond gave me collaborators, not just followers — and that's changed everything about how I build in public.`, name: 'Aditya Sharma', role: 'Creator & Founder', company: 'BuildPublic', initials: 'AS' },
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
                <div className="pb-8 text-[15px] leading-[1.7] text-slate font-medium max-w-[680px]">{item.a}</div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Membership() {
  const [activeTab, setActiveTab] = React.useState('founders');
  const active = audiences.find(a => a.id === activeTab);

  return (
    <div className="bg-pearl min-h-screen">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative pt-[120px] pb-24 lg:pt-[160px] lg:pb-32 overflow-hidden border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-copper" />
              <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Membership</span>
            </div>
            <h1 className="font-serif text-[44px] md:text-[64px] font-medium text-ink tracking-[-0.02em] leading-[1.12] mb-6">
              Become Part of <br/> <span className="text-forest">Beyond</span>.
            </h1>
            <p className="text-[16px] lg:text-[18px] text-slate font-medium leading-[1.7] max-w-[540px] mb-12">
              Join a curated ecosystem of visionary founders, investors, creators, and operators building meaningful growth together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <a href="#membership-form" className="flex items-center justify-center w-full sm:w-auto bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                Apply for Membership
              </a>
              <Link to="/" className="flex items-center justify-center w-full sm:w-auto bg-transparent border-[1.5px] border-copper/40 text-copper px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-copper/5 hover:border-copper transition-colors">
                Explore Ecosystem
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-6 relative h-[400px] lg:h-[500px] hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="absolute inset-0 w-full h-full bg-stone border border-line rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-ink/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <img 
                src="/14995841-meeting-4784909.jpg" 
                alt="Ecosystem members" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                loading="lazy"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Benefits ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-stone border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Member Benefits" title="Why Join Beyond" subtitle="An ecosystem engineered for compounding relationships and long-term collaborative growth." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }} className="bg-card border border-line rounded-xl p-8 shadow-sm flex flex-col gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={b.path} /></svg>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] font-medium text-ink mb-3">{b.title}</h3>
                  <p className="text-[15px] text-slate font-medium leading-[1.7]">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Who Is This For" title="Built for the Ambitious" subtitle="Beyond is designed for people who create value, not just consume it." />
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {audiences.map(a => (
              <button 
                key={a.id} 
                onClick={() => setActiveTab(a.id)} 
                className={`px-6 py-3 rounded-lg border text-[14px] font-bold transition-colors duration-300 ${activeTab === a.id ? 'bg-forest text-card border-forest' : 'bg-stone text-slate border-line hover:border-slate/40'}`}
              >
                {a.label}
              </button>
            ))}
          </div>
          
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} className="bg-stone border border-line rounded-xl overflow-hidden shadow-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
              <div className="p-10">
                <p className="text-[12px] font-bold tracking-widest uppercase text-slate mb-6">Why You Belong</p>
                <p className="text-[15px] text-ink font-medium leading-[1.7]">{active.why}</p>
              </div>
              <div className="p-10">
                <p className="text-[12px] font-bold tracking-widest uppercase text-slate mb-6">What You Receive</p>
                <ul className="space-y-4">
                  {active.receives.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-copper shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span className="text-[14px] text-slate font-medium leading-[1.6]">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[12px] font-bold tracking-widest uppercase text-slate mb-6">How You Contribute</p>
                  <p className="text-[15px] text-slate font-medium leading-[1.7]">{active.contributes}</p>
                </div>
                <a href="#membership-form" className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-ink hover:text-copper transition-colors group">
                  Apply Now 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-stone border-y border-line">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="The Process" title="How Membership Works" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="relative flex flex-col items-start bg-card p-8 rounded-xl border border-line shadow-sm mt-6">
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
          <p className="text-center text-[14px] text-slate font-medium mt-16 max-w-lg mx-auto">We prioritize alignment, contribution, and long-term collaboration over mass membership.</p>
        </div>
      </section>

      {/* ── Membership Form ─────────────────────────────────────────── */}
      <section id="membership-form" className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="Application" title="Apply for Membership" subtitle="Takes 4–6 minutes. Every field helps us understand you better." />
          <MembershipForm />
          <p className="text-center text-[13px] text-slate font-medium mt-8">Our team carefully reviews every application to maintain the quality and integrity of the ecosystem.</p>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-stone border-y border-line">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Member Stories" title="Heard From the Community" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }} className="bg-card border border-line p-10 rounded-xl flex flex-col shadow-sm">
                <div className="flex-grow">
                  <p className="font-serif text-[18px] leading-[1.6] text-ink mb-10">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-line/60">
                  <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center text-[14px] font-bold shrink-0">{t.initials}</div>
                  <div>
                    <h4 className="text-[14px] font-bold text-ink mb-0.5">{t.name}</h4>
                    <p className="text-[13px] text-slate font-medium">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading eyebrow="FAQs" title="Questions, Answered" subtitle="Everything you need to know about becoming a Beyond member." />
          <FAQAccordion items={faqs} />
          <p className="text-center text-[14px] text-slate font-medium mt-12">
            Still have questions?{' '}
            <Link to="/contact" className="text-copper hover:underline font-bold">Write to our team</Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="bg-deep-slate py-32 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
          <img src="/uh_yeah_20101995-space-4660847.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative max-w-[800px] mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
            <div className="w-12 h-[1px] bg-copper mx-auto mb-8" />
            <h2 className="font-serif text-[40px] md:text-[56px] font-medium text-deep-slate-text tracking-[-0.02em] mb-6 leading-[1.2]">Build Relationships Beyond Transactions</h2>
            <p className="text-[16px] lg:text-[18px] text-deep-slate-text/70 font-medium max-w-[540px] mx-auto leading-[1.7] mb-12">Join a network designed for meaningful collaboration, long-term growth, and trusted connections.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href="#membership-form" className="flex items-center justify-center w-full sm:w-auto bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                Apply for Membership
              </a>
              <Link to="/submit-opportunity" className="flex items-center justify-center w-full sm:w-auto bg-transparent border-[1.5px] border-deep-slate-text/20 text-deep-slate-text px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-deep-slate-text/5 hover:border-deep-slate-text/40 transition-colors">
                Submit Opportunity
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
