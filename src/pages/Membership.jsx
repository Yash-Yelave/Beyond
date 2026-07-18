import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import MembershipForm from '../components/sections/membership/MembershipForm';
import { scrollToElementId } from '../utils/smoothScroll';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const benefits = [
  {
    title: 'Public Markets Edge',
    copy: 'AI-powered market insights, investing strategies, portfolio reviews, and guidance for better decisions.',
    icon: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  },
  {
    title: 'Invest Like Billionaires',
    copy: 'Curated venture capital, private equity, syndicates, and exclusive opportunities through trusted relationships.',
    icon: 'M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z',
  },
  {
    title: "India's Innovation Advantage",
    copy: 'Curated access to Indian startups, real estate, private investments, and strategic partner networks.',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10z',
  },
  {
    title: 'Business Growth & Board Access',
    copy: 'Strategic partnerships, board opportunities, founder collaborations, acquisitions, and trusted business relationships.',
    icon: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1M14 13h1M14 17h1',
  },
  {
    title: 'WISDOM Perspectives',
    copy: 'Exclusive conversations with founders, investors, CEOs, and thought leaders sharing timeless lessons for success.',
    icon: 'M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.832L3 20l1.395-3.488A7.49 7.49 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Executive & Life Coaching',
    copy: 'Personalized coaching to strengthen leadership, decision-making, relationships, and overall fulfillment.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Curated Member Connections',
    copy: 'Trusted introductions to accomplished entrepreneurs, investors, executives, and professionals who can open doors.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101',
  },
  {
    title: 'Member Success Advisor',
    copy: 'A dedicated guide helps match members with the right people, opportunities, resources, and experiences.',
    icon: 'M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z',
  },
  {
    title: 'AI Wealth Advantage',
    copy: 'A wealth dashboard, research agents, alerts, automation, and tools for smarter investing.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Purpose Beyond Success',
    copy: 'Philanthropy, mentorship, and initiatives that strengthen families, communities, and legacy.',
    icon: 'M12 21s-7-4.438-7-10a4 4 0 017-2.646A4 4 0 0119 10.354C19 16.562 12 21 12 21z',
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

const accessPortfolio = [
  {
    label: 'Pre-IPO Technology',
    title: 'SpaceX',
    copy: 'Private-market exposure members may be able to review through curated access vehicles and partner relationships.',
    logo: 'portfolio-logos/spacex.svg',
    logoAlt: 'SpaceX logo',
    logoSize: 'wide',
  },
  {
    label: 'Pre-IPO AI',
    title: 'Anthropic',
    copy: 'Potential exposure to leading artificial intelligence infrastructure through select private-market opportunities.',
    logo: 'portfolio-logos/anthropic.svg',
    logoAlt: 'Anthropic logo',
  },
  {
    label: 'Pre-IPO AI',
    title: 'OpenAI',
    copy: 'Member review access may include private-company exposure to foundational AI platforms when capacity is available.',
    logo: 'portfolio-logos/openai.png',
    logoAlt: 'OpenAI logo',
    logoSize: 'wide',
  },
  {
    label: 'India Venture',
    title: '108 Capital / Ecosystem Ventures',
    copy: 'India-focused venture exposure through early-stage and growth-stage manager relationships.',
    logo: 'portfolio-logos/108-capital.png',
    logoAlt: '108 Capital logo',
    logoSize: 'square',
  },
  {
    label: 'India Public Markets',
    title: 'Whitespace Alpha',
    copy: 'SEBI-registered Category III AIF strategies across bonds, equities, derivatives, and benchmark indices.',
    logo: 'portfolio-logos/whitespace-alpha.png',
    logoAlt: 'Whitespace Alpha logo',
    logoSize: 'compact',
  },
  {
    label: 'Impact Platform',
    title: 'ISF Junicorns',
    copy: 'A rural youth entrepreneurship platform connected to mentorship, innovation camps, scholarships, and measurable impact.',
    logo: 'portfolio-logos/junicorn.png',
    logoAlt: 'Junicorn logo',
    logoSize: 'wide',
  },
  {
    label: 'India Consumer Brand',
    title: "Sid's Farm",
    copy: 'Premium dairy company delivering fresh, pure, minimally processed milk and dairy products through an integrated farm-to-doorstep supply chain.',
    logo: 'portfolio-logos/sids-farm-mark.png',
    logoAlt: "Sid's Farm logo",
    logoSize: 'square',
  },
  {
    label: 'India Opportunity',
    title: 'Earthscape',
    copy: 'Potential India opportunity under review for members as part of the private-market pipeline.',
    logo: 'portfolio-logos/earthscape.png',
    logoAlt: 'Earthscape logo',
    logoSize: 'compact',
  },
  {
    label: 'Private Opportunity',
    title: 'Zero Pearl',
    copy: 'Potential private-market opportunity under review for members.',
    logo: 'portfolio-logos/zero-pearl.png',
    logoAlt: 'Zero Pearl logo',
    logoSize: 'compact',
  },
  {
    label: 'India Consumer Tech',
    title: 'Swiggy',
    copy: 'Potential India consumer-technology opportunity under review, subject to official terms and availability.',
    logo: 'portfolio-logos/swiggy.svg',
    logoAlt: 'Swiggy logo',
  },
];

const faqs = [
  {
    q: 'What is the planned 2027 membership fee?',
    a: 'The planned Infinity Forum structure is a $5,000 joining fee and a $3,000 annual membership fee. Beyond is the opportunity layer where members apply wisdom through investments, relationships, and resources.',
  },
  {
    q: 'What do membership fees support?',
    a: 'Approximately 50% supports operations, member resources, and development of the Junicorns Platform, a philanthropic initiative helping rural students become successful entrepreneurs.',
  },
  {
    q: 'What will members receive?',
    a: 'Members receive curated investment conversations, wealth strategy discussions, member support, research, due diligence, relationship access, and learning through the W.I.S.D.O.M. Framework.',
  },
  {
    q: 'Are the access portfolio examples guaranteed opportunities?',
    a: 'No. They are examples of the types of companies, managers, and platforms members may review. Members should review official materials, risks, valuations, and suitability before making any investment decision.',
  },
];

const logoSrc = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const logoSizeClasses = {
  wide: 'max-h-20 max-w-[84%]',
  square: 'h-24 w-auto max-w-[58%]',
  compact: 'h-20 w-auto max-w-[72%]',
  default: 'max-h-20 max-w-full',
};

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
  const location = useLocation();
  const [showAllPortfolio, setShowAllPortfolio] = React.useState(false);
  const visiblePortfolio = showAllPortfolio ? accessPortfolio : accessPortfolio.slice(0, 6);

  React.useEffect(() => {
    const targetId = location.state?.scrollTo || location.hash.slice(1);
    if (!targetId) return;

    window.setTimeout(() => scrollToElementId(targetId, { duration: 1050 }), 180);
  }, [location.hash, location.state]);

  return (
    <div className="bg-pearl min-h-screen">
      <section className="relative pt-[100px] pb-[80px] lg:pt-[140px] lg:pb-[110px] overflow-hidden border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Beyond | Opportunity Layer of Infinity Forum</span>
              </div>
              <h1 className="font-serif text-[44px] md:text-[64px] font-medium text-ink tracking-[-0.02em] leading-[1.12] mb-6">
                From capital to legacy.
              </h1>
              <p className="text-[16px] lg:text-[18px] text-slate font-medium leading-[1.7] max-w-[620px] mb-10">
                Beyond helps members apply Infinity Forum wisdom through investments, trusted relationships, private opportunities, and practical resources.
              </p>
              <button type="button" onClick={() => scrollToElementId('membership-form', { duration: 1050 })} className="inline-flex items-center justify-center bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                Apply for Membership
              </button>
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
            <SectionHeading eyebrow="Membership" title="What Beyond Adds" subtitle="Ten practical pathways for applying wisdom through markets, relationships, business growth, and resources." className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xl:auto-rows-fr gap-4">
              {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.16, ease: 'easeOut', delay: 0 } }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                    className="rounded-2xl border border-line bg-pearl p-5 min-h-[230px] h-full flex flex-col transition-[border-color,background-color,box-shadow] duration-150 hover:border-copper hover:bg-card hover:shadow-[0_14px_30px_rgba(245,158,11,0.12)]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-card text-forest border border-line">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-copper">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-serif text-[22px] xl:text-[21px] font-medium leading-[1.18] mb-3 text-ink">{benefit.title}</h3>
                      <p className="text-[14px] font-medium leading-[1.6] text-slate">{benefit.copy}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wisdom-framework" className="scroll-mt-24 py-[56px] lg:py-[72px] bg-stone border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: EASE }}
              className="bg-card border border-line rounded-2xl p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-widest text-copper mb-3">Linked Framework</p>
                  <h3 className="font-serif text-[34px] md:text-[44px] font-medium text-ink tracking-[-0.02em]">
                    <a
                      href="https://infinityforum.club"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-copper hover:text-forest transition-colors"
                    >
                      W.I.S.D.O.M.
                    </a>{' '}
                    Framework
                  </h3>
                </div>
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
            </motion.div>
          </div>
        </div>
      </section>

      <section id="private-deals" className="scroll-mt-24 py-[90px] lg:py-[120px] bg-[#f8fafc] text-[#111827] border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.65, ease: EASE }}
              className="text-center mx-auto max-w-[760px] mb-10"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-[#b45309] uppercase">Access</span>
                <span className="w-8 h-[1px] bg-copper" />
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-[#111827] tracking-[-0.02em] leading-[1.2]">
                Portfolio
              </h2>
              <p className="mt-6 text-[16px] text-[#475569] font-medium leading-[1.7]">
                A consolidated view of private-company, fund-manager, public-market, and purpose-driven opportunities members can evaluate through Beyond.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-7">
              {visiblePortfolio.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.025, y: -4, transition: { duration: 0.16, ease: 'easeOut', delay: 0 } }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, ease: EASE, delay: i * 0.03 }}
                  className="group overflow-hidden border border-[#e2e8f0] bg-white rounded-2xl min-h-[390px] flex flex-col shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow] duration-150 hover:border-[#f59e0b] hover:shadow-[0_20px_48px_rgba(245,158,11,0.16)]"
                >
                  <div className="h-36 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-center px-8">
                    <img src={logoSrc(item.logo)} alt={item.logoAlt} className={`${logoSizeClasses[item.logoSize] || logoSizeClasses.default} object-contain`} />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#b45309] mb-3">{item.label}</p>
                    <h3 className="font-serif text-[26px] font-medium mb-4 text-[#111827]">{item.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-[#475569] font-medium">{item.copy}</p>
                    <span className="mt-auto pt-7">
                      <span className="inline-flex w-full h-11 items-center justify-center rounded-lg bg-[#0f172a] text-white text-[13px] font-bold transition-colors duration-150 group-hover:bg-[#f59e0b] group-hover:text-[#111827]">
                        Potential Opportunity
                      </span>
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {accessPortfolio.length > 6 && (
              <div className="flex justify-center mb-10">
                <button
                  type="button"
                  onClick={() => setShowAllPortfolio((current) => !current)}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-[#f59e0b]/50 bg-[#0f172a] px-7 text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-[border-color,background-color,color,transform] duration-150 hover:border-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#111827] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
                >
                  {showAllPortfolio ? 'Show Less' : 'View More Opportunities'}
                </button>
              </div>
            )}

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.55, ease: EASE }} className="border border-[#e2e8f0] bg-white rounded-xl p-5 shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-copper mb-2">How participation works</p>
                  <h3 className="font-serif text-[26px] font-medium mb-3 text-[#111827]">Members review, opt in, and indicate interest.</h3>
                </div>
                <div>
                  <p className="text-[14px] font-semibold leading-[1.65] mb-2 text-[#334155]">
                    For private and pre-IPO opportunities, members can opt in and suggest the amount they may want to invest.
                  </p>
                  <p className="text-[12px] leading-[1.6] text-[#64748b]">
                    Final participation depends on official terms, availability, accreditation, documentation, risk review, and suitability. These examples are not investment advice, return guarantees, or offers to sell securities.
                  </p>
                </div>
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
