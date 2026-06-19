import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import MembershipForm from '../components/sections/membership/MembershipForm';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const benefits = [
  {
    title: 'Private Deal Flow',
    copy: 'Curated private investment opportunities from Tiger 21, family offices, and investor networks in the U.S. and India.',
    icon: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
  {
    title: 'Syndicate Access',
    copy: 'A way for members to review select private deals together and participate collectively when appropriate.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Life and Executive Coaching',
    copy: 'Manifestation and healing techniques to achieve your goals.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Wealth Strategy',
    copy: 'Personalized discussions around wealth creation, tax efficiency, estate planning, and income growth.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z',
  },
  {
    title: 'Member Support',
    copy: 'Dedicated coordination, research, scheduling, and follow-up support through an India-based assistant.',
    icon: 'M18 8a6 6 0 01-12 0m12 8a6 6 0 01-12 0M5 8h14M5 16h14',
  },
  {
    title: 'Research & Diligence',
    copy: 'Access to curated research, diligence notes, investment insights, and materials for deeper review.',
    icon: 'M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z',
  },
  {
    title: 'W.I.S.D.O.M. Learning',
    copy: 'Continued learning across wealth, investments, well-being, innovation, legacy, mentorship, and giving back.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253',
  },
  {
    title: 'Impact Allocation',
    copy: 'Approximately half of membership fees support operations and the Junicorns Platform for rural student entrepreneurs.',
    icon: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
];

const wisdomItems = [
  {
    title: 'Wealth & Estate Planning',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v10m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Investments',
    icon: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
  {
    title: 'Spirituality & Well-being',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Disruptions & Innovation',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Ownership & Legacy',
    icon: 'M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z',
  },
  {
    title: 'Mentorship & Giving Back',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

const fundTerms = [
  ['Minimum Investment', '$250,000'],
  ['Initial Capital Call', 'Approximately 35% on June 25'],
  ['Remaining Capital', 'Called quarterly through 2027'],
  ['Fund Term', 'Five years'],
  ['Portfolio', 'SpaceX, Anthropic, OpenAI, and other private technology companies'],
];

const anomalyTerms = [
  ['Fund', 'Anomaly Ventures Fund I LP'],
  ['Target Fund Size', '$50M-$100M'],
  ['Stage', 'Early-stage frontier technology, AI agents, platforms, consumer health, and wellness'],
  ['Liquidity Strategy', 'Structured DPI-first terms such as dividends, royalties, and revenue share'],
  ['Fund Term', '5-year investment period, 10-year max plus LP-approved extension'],
  ['GP Alignment', 'Approximately $10M of GP warehoused equity into Fund I'],
];

const anomalyHighlights = [
  'Focused on outlier founders at the intersection of technology, AI, and medicine.',
  'Built around earlier paths to liquidity while still pursuing venture-scale outcomes.',
  'Led by Vasudev Bailey, PhD, with deep AI, biotech, healthcare, and academic networks.',
  'Uses Anomaly Network Partners to surround founders with operators, strategics, academics, and capital support.',
];

const indiaOpportunities = [
  {
    label: 'Private Markets',
    title: 'VC Funds in India',
    copy: 'Growth-stage and early-stage venture exposure through India-focused managers such as 108 Capital and Ecosystem Ventures.',
  },
  {
    label: 'Public Markets',
    title: 'Hedge Fund Strategies',
    copy: 'SEBI-registered Category III AIF strategies across bonds, equities, derivatives, and benchmark indices.',
  },
  {
    label: 'Macro Thesis',
    title: "India's GDP Vision",
    copy: 'Investor education on India’s demographic dividend, converging technologies, and long-term macro trajectory.',
  },
  {
    label: 'Impact Channel',
    title: 'ISF Junicorns',
    copy: 'A platform aimed at helping 100,000 rural youth ages 8-25 across India build innovation and entrepreneurship skills.',
  },
];

const indiaLeaders = [
  ['Usha Nandigala', 'Tiger 21 DET04 member, founder of Infinity Forum, co-founder of Megha AI, and former Amazon and GM executive.'],
  ['Poondla Siddharth Reddy', 'Group CEO of International Startup Foundation, leading ISF Junicorns and impact-token work.'],
  ['Sreekanth Perepu', 'Founding Partner at 108 Capital, with experience across venture capital, investment banking, and consulting.'],
  ['Abhishek Sanghvi', 'Co-founder of Ecosystem Ventures, focused on early-stage Indian ventures and structured investment instruments.'],
  ['Puneet Sharma', 'Fund Manager and CEO of Whitespace Alpha, a SEBI-registered Category III AIF.'],
  ['Sreekanth K Arimanithaya', 'CEO of Singularity University and Xarpie Labs, focused on AI, exponential technologies, and India growth.'],
];

const faqs = [
  {
    q: 'What is the planned 2027 membership fee?',
    a: 'The planned Infinity Forum structure is a $5,000 joining fee and a $3,000 annual membership fee. Beyond represents the impact-focused side of that membership vision.',
  },
  {
    q: 'What do membership fees support?',
    a: 'Approximately 50% supports operations and development of the Junicorns Platform, the philanthropic initiative behind Beyond that helps rural students become successful entrepreneurs.',
  },
  {
    q: 'What will members receive?',
    a: 'Members receive the impact-focused Beyond layer alongside curated investment conversations, wealth strategy discussions, member support, research, due diligence, and learning through the W.I.S.D.O.M. Framework.',
  },
  {
    q: 'Is the Singularity Access One Fund a guaranteed opportunity?',
    a: 'No. It is an example of the type of opportunity members may review. Members should review official materials, risks, valuations, and suitability before making any investment decision.',
  },
];

function FeeCard({ label, value, note }) {
  return (
    <div className="bg-card border border-line rounded-2xl p-6">
      <p className="text-[12px] font-bold uppercase tracking-wider text-slate mb-2">{label}</p>
      <p className="font-serif text-[34px] text-ink">{value}</p>
      {note && <p className="text-[13px] text-slate font-medium leading-[1.6] mt-3">{note}</p>}
    </div>
  );
}

function FAQAccordion({ items }) {
  const [open, setOpen] = React.useState(null);

  return (
    <div className="space-y-0 border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between py-8 text-left focus:outline-none group">
              <span className={`font-sans text-[18px] font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{item.q}</span>
              <svg className={`w-5 h-5 shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-forest' : 'text-slate group-hover:text-ink'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />}
              </svg>
            </button>
            {isOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
                <div className="pb-8 text-[15px] leading-[1.7] text-slate font-medium max-w-[760px]">{item.a}</div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Membership() {
  return (
    <div className="bg-pearl min-h-screen">
      <section className="relative pt-[100px] pb-[80px] lg:pt-[140px] lg:pb-[110px] overflow-hidden border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Beyond | Impact Side of Infinity Forum</span>
              </div>
              <h1 className="font-serif text-[44px] md:text-[64px] font-medium text-ink tracking-[-0.02em] leading-[1.12] mb-6">
                Invest together. <br className="hidden md:block" /> Create impact together.
              </h1>
              <p className="text-[16px] lg:text-[18px] text-slate font-medium leading-[1.7] max-w-[620px] mb-10">
                Beyond is focused on the impact part of Infinity Forum: helping members connect wealth creation, learning, and giving back through the Junicorns Platform.
              </p>
              <a href="#membership-form" className="inline-flex items-center justify-center bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                Apply for Membership
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }} className="grid grid-cols-1 gap-4">
              <FeeCard label="Joining Fee" value="$5,000" />
              <FeeCard label="Annual Membership" value="$3,000" />
              <FeeCard label="Impact Allocation" value="50%" note="Approximately half of membership fees support operations and the Junicorns Platform for rural student entrepreneurs." />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-[60px] lg:py-[76px] bg-card border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <SectionHeading eyebrow="Membership" title="What Beyond Adds" subtitle="Beyond makes the impact side visible, organized, and actionable." className="mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                  className="rounded-2xl border border-line bg-pearl p-6 min-h-[205px] flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-card text-forest border border-line">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest mb-3 text-copper">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-serif text-[26px] font-medium mb-3 text-ink">{benefit.title}</h3>
                    <p className="text-[15px] font-medium leading-[1.7] text-slate">{benefit.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[56px] lg:py-[72px] bg-stone border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <motion.a
              href="https://infinityforum.club"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: EASE }}
              className="block bg-card border border-line rounded-2xl p-6 lg:p-8 hover:border-copper/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-widest text-copper mb-3">Linked Framework</p>
                  <h3 className="font-serif text-[34px] md:text-[44px] font-medium text-ink tracking-[-0.02em]">W.I.S.D.O.M. Framework</h3>
                </div>
                <span className="inline-flex items-center gap-2 text-[14px] font-bold text-forest">
                  Open infinityforum.club
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {wisdomItems.map((item) => (
                  <div key={item.title} className="bg-stone border border-line rounded-xl px-4 py-3 flex items-center gap-3 text-[14px] font-bold text-slate">
                    <span className="w-9 h-9 rounded-lg bg-forest/5 text-forest flex items-center justify-center shrink-0">
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="py-[90px] lg:py-[120px] bg-deep-slate text-deep-slate-text">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-copper mb-4">Example Opportunity</p>
              <h2 className="font-serif text-[34px] md:text-[46px] font-medium mb-5">Singularity Access One Fund</h2>
              <p className="text-[15px] leading-[1.7] text-deep-slate-text/75">
                Through Tiger 21 relationships, Infinity Forum members may review opportunities such as Singularity Access One. Beyond keeps the impact focus visible alongside these conversations. Usha Nandigala has personally committed $750,000 from her Roth IRA. The fund includes exposure to SpaceX, Anthropic, OpenAI, and other private technology companies, with approximately $2 million of remaining capacity.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {fundTerms.map(([label, value]) => (
                  <div key={label} className="border border-deep-slate-text/10 bg-deep-slate-text/5 rounded-xl p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-deep-slate-text/50 mb-1">{label}</p>
                    <p className="text-[14px] font-semibold leading-[1.5]">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] leading-[1.6] text-deep-slate-text/55">
                This is an example, not a guarantee of return or a recommendation to invest. Members should review official materials, valuations, risks, and suitability before making any investment decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] lg:py-[120px] bg-card border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start mb-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.6, ease: EASE }}>
                <p className="text-[12px] font-bold uppercase tracking-widest text-copper mb-4">Another Example Opportunity</p>
                <h2 className="font-serif text-[34px] md:text-[46px] font-medium text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Anomaly Ventures Fund I
                </h2>
                <p className="text-[15px] leading-[1.8] text-slate font-medium mb-6">
                  Anomaly is a venture fund focused on outlier founders working at the intersection of technology, AI, and medicine. The strategy pairs venture upside with structured terms designed to create earlier paths to liquidity.
                </p>
                <p className="text-[13px] leading-[1.7] text-slate/75 font-medium">
                  This is included as an example of the kind of private-market diligence members may review. Official offering documents and suitability review should control any investment decision.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.6, ease: EASE, delay: 0.08 }} className="bg-stone border border-line rounded-2xl p-7 lg:p-8">
                <h3 className="font-serif text-[26px] font-medium text-ink mb-6">Why It May Fit the Conversation</h3>
                <div className="space-y-4">
                  {anomalyHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-copper shrink-0" />
                      <p className="text-[15px] leading-[1.7] text-slate font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {anomalyTerms.map(([label, value], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, ease: EASE, delay: i * 0.04 }}
                  className="bg-pearl border border-line rounded-xl p-5"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-copper mb-2">{label}</p>
                  <p className="text-[14px] font-semibold leading-[1.55] text-ink">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] lg:py-[120px] bg-stone border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-12 items-start mb-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.6, ease: EASE }}>
                <p className="text-[12px] font-bold uppercase tracking-widest text-copper mb-4">India Investment Opportunities</p>
                <h2 className="font-serif text-[34px] md:text-[46px] font-medium text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  India-focused private, public, macro, and impact conversations
                </h2>
                <p className="text-[15px] leading-[1.8] text-slate font-medium mb-6">
                  Tiger 21 materials outline an India opportunity track that spans VC funds, hedge fund strategies, the country&apos;s GDP growth thesis, and the ISF Junicorns impact platform. Beyond can use this as a curated lens for members who want India exposure connected to measurable impact.
                </p>
                <div className="rounded-2xl border border-line bg-card p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-copper mb-3">Impact Example</p>
                  <p className="text-[15px] leading-[1.7] text-slate font-medium">
                    ISF Junicorns is presented as a flagship initiative for rural youth across India, with innovation camps, mentorship, global exposure, and an impact-token concept tied to measurable social and planetary contribution.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {indiaOpportunities.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.45, ease: EASE, delay: i * 0.04 }}
                    className="bg-card border border-line rounded-2xl p-6 min-h-[270px] flex flex-col"
                  >
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-copper">{item.label}</p>
                      <span className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center border border-line">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={i === 0 ? 'M3 17l6-6 4 4 8-8M14 7h7v7' : i === 1 ? 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 11v-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' : i === 2 ? 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10z' : 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253'} />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-[25px] font-medium text-ink mb-3">{item.title}</h3>
                      <p className="text-[14px] leading-[1.7] text-slate font-medium">{item.copy}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.6, ease: EASE }} className="bg-card border border-line rounded-2xl p-7 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-7">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-widest text-copper mb-3">People and Platforms Mentioned</p>
                  <h3 className="font-serif text-[30px] md:text-[38px] font-medium text-ink tracking-[-0.02em]">India opportunity network</h3>
                </div>
                <p className="max-w-[380px] text-[12px] leading-[1.6] text-slate/75 font-medium lg:text-right">
                  Included for member discussion only. Official materials, risks, tax treatment, and suitability should guide any investment decision.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {indiaLeaders.map(([name, role]) => (
                  <div key={name} className="bg-pearl border border-line rounded-xl p-5">
                    <p className="font-serif text-[21px] font-medium text-ink mb-2">{name}</p>
                    <p className="text-[13px] leading-[1.65] text-slate font-medium">{role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="membership-form" className="py-[90px] lg:py-[120px] bg-pearl border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[980px] mx-auto">
            <SectionHeading eyebrow="Application" title="Apply for Membership" subtitle="Tell us who you are and what you hope to contribute." />
            <MembershipForm />
          </div>
        </div>
      </section>

      <section className="py-[90px] lg:py-[120px] bg-card">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[980px] mx-auto">
            <SectionHeading eyebrow="FAQs" title="Questions, Answered" />
            <FAQAccordion items={faqs} />
            <p className="text-center text-[14px] text-slate font-medium mt-12">
              Still have questions?{' '}
              <Link to="/contact" className="text-copper hover:underline font-bold">Write to our team</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
