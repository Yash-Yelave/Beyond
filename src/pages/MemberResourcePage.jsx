import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const pages = {
  'private-deal-flow': {
    eyebrow: 'Private Deal Flow',
    title: 'Private Deal Examples',
    status: 'Member review',
    intro: 'Beyond members may review curated private-market opportunities sourced through Tiger 21 relationships, family offices, and high-net-worth investor networks in the U.S. and India.',
    sections: [
      {
        title: 'Singularity Access One',
        copy: 'An example opportunity with exposure to private technology companies such as SpaceX, Anthropic, OpenAI, and other leading private companies.',
      },
      {
        title: 'Anomaly Ventures',
        copy: 'A frontier-technology venture example focused on outlier founders working across AI, medicine, platforms, consumer health, and wellness.',
      },
      {
        title: 'India Opportunities',
        copy: 'India-focused conversations may include VC funds, hedge fund strategies, macro education, and founder networks connected to Junicorns.',
      },
    ],
    note: 'These are examples for member discussion only. They are not guarantees of access, performance, or recommendations to invest.',
  },
  'beyond-2027': {
    eyebrow: 'Syndicate Access',
    title: 'Beyond 2027 Fund',
    status: 'Coming soon',
    intro: 'A member-focused syndicate fund concept is being developed for 2027. The goal is to give aligned members a clear way to review and participate in select opportunities together.',
    sections: [
      {
        title: 'Collective participation',
        copy: 'The planned structure will support coordinated member participation while keeping each opportunity and decision clearly documented.',
      },
      {
        title: 'Structure before launch',
        copy: 'Strategy, eligibility, minimums, governance, legal requirements, and the launch timeline will be published only after formal review.',
      },
      {
        title: 'Member updates',
        copy: 'Approved details and next steps will be shared with members as the fund structure is finalized.',
      },
    ],
    note: 'This page is an early notice only. It is not an offer to sell securities or a recommendation to invest.',
  },
  'manifestation-resources': {
    eyebrow: 'Life and Executive Coaching',
    title: 'Manifestation & Healing Resources',
    status: 'Resources coming soon',
    intro: 'A curated library of practical resources for reflection, goal-setting, personal development, and well-being is being prepared for members.',
    sections: [
      {
        title: 'Clarify your goals',
        copy: 'Prompts and exercises will help members define meaningful personal and professional outcomes.',
      },
      {
        title: 'Build consistent practices',
        copy: 'The library will focus on repeatable reflection and well-being practices rather than quick promises.',
      },
      {
        title: 'Curated guidance',
        copy: 'Recommended books, teachers, exercises, and other resources will be added after review.',
      },
    ],
    note: 'These materials are educational and are not a substitute for medical or mental-health care.',
  },
  'member-support': {
    eyebrow: 'Member Support',
    title: 'Dedicated Executive Assistant Support',
    status: 'For members',
    intro: 'Members receive direct virtual-assistant support from India for practical coordination involving both the member and their family.',
    person: 'Kiran Kumar Yerriboina',
    personRole: 'India-based member support and executive-assistant coordination',
    sections: [
      {
        title: 'Paperwork & submissions',
        copy: 'Support with organizing paperwork and coordinating online submissions in India or the United States.',
      },
      {
        title: 'Research & follow-up',
        copy: 'Focused research, scheduling, status checks, and follow-up on practical member requests.',
      },
      {
        title: 'Family support in India',
        copy: 'When arranged and appropriate, help coordinate local visits or services such as Rapido for loved ones in India.',
      },
    ],
    note: 'Requests are subject to availability, authorization, safety, and applicable laws. Support does not replace legal, tax, financial, or medical professionals.',
  },
  'impact-allocation': {
    eyebrow: 'Impact Allocation',
    title: 'Where Membership Fees Create Impact',
    status: 'Transparent model',
    intro: 'Approximately 50% of membership fees support operations, member resources, and the development of the Junicorns Platform.',
    sections: [
      {
        title: 'Operations support',
        copy: 'A portion of fees funds coordination, research, member support, programming, and the practical work required to operate the community.',
      },
      {
        title: 'Junicorns Platform',
        copy: 'The platform is focused on helping rural students become successful entrepreneurs through education, mentorship, innovation camps, and exposure.',
      },
      {
        title: 'Visible impact',
        copy: 'Beyond helps members see how wisdom, opportunity, wealth creation, and giving back can work together.',
      },
    ],
    note: 'Impact allocation details may evolve as operations, programming, and platform needs are finalized.',
  },
  'research-resources': {
    eyebrow: 'Research & Diligence',
    title: 'Member Research Resources',
    status: 'Resource library',
    intro: 'A starting set of third-party tools for market research, company screening, event probabilities, investment ideas, and AI-assisted financial analysis.',
    resources: [
      {
        name: 'Yahoo Finance',
        href: 'https://finance.yahoo.com/',
        copy: 'Market news, quotes, company information, screeners, and portfolio tools.',
      },
      {
        name: 'Kalshi',
        href: 'https://kalshi.com/',
        copy: 'Event-contract markets and market-implied views on economic and public outcomes.',
      },
      {
        name: 'Seeking Alpha',
        href: 'https://seekingalpha.com/',
        copy: 'Contributor research, earnings analysis, ratings, and investment commentary.',
      },
      {
        name: 'Finviz',
        href: 'https://finviz.com/',
        copy: 'Equity screening, visualization, heat maps, charts, and market snapshots.',
      },
      {
        name: 'Dub',
        href: 'https://www.dubapp.com/',
        copy: 'A social investing platform for discovering and following investment strategies.',
      },
      {
        name: 'Fiscal.ai',
        href: 'https://fiscal.ai/',
        copy: 'AI-assisted public-company research, financial data, filings, and investor workflows.',
      },
    ],
    note: 'These are independent third-party resources, not endorsements. Verify source data, terms, risks, and suitability before acting on any information.',
  },
};

function ArrowIcon({ external = false }) {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={external ? 'M7 17L17 7M9 7h8v8' : 'M15 19l-7-7 7-7'}
      />
    </svg>
  );
}

export default function MemberResourcePage({ pageKey }) {
  const page = pages[pageKey];

  if (!page) return null;

  return (
    <div className="bg-pearl min-h-screen">
      <section className="pt-[92px] pb-[72px] lg:pt-[120px] lg:pb-[92px] border-b border-line">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/membership" className="inline-flex items-center gap-2 text-[13px] font-bold text-copper hover:text-forest transition-colors mb-10">
            <ArrowIcon />
            Back to membership
          </Link>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[12px] font-bold uppercase tracking-widest text-copper">{page.eyebrow}</span>
              <span className="h-1 w-1 rounded-full bg-slate/50" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest border border-forest/30 rounded-full px-3 py-1">{page.status}</span>
            </div>
            <h1 className="font-serif text-[42px] md:text-[60px] font-medium text-ink leading-[1.12] max-w-[850px] mb-6">{page.title}</h1>
            <p className="text-[17px] md:text-[19px] text-slate font-medium leading-[1.75] max-w-[820px]">{page.intro}</p>
          </motion.div>
        </div>
      </section>

      {page.person && (
        <section className="py-10 bg-deep-slate border-b border-line">
          <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-copper mb-2">Your member-support contact</p>
              <h2 className="font-serif text-[30px] text-deep-slate-text">{page.person}</h2>
            </div>
            <p className="text-[14px] text-deep-slate-text/65 font-medium max-w-[460px] md:text-right">{page.personRole}</p>
          </div>
        </section>
      )}

      {page.sections && (
        <section className="py-[72px] lg:py-[96px] bg-card border-b border-line">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {page.sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
                  className="bg-pearl border border-line rounded-xl p-6 min-h-[210px]"
                >
                  <p className="text-[11px] font-bold tracking-widest text-copper mb-7">{String(index + 1).padStart(2, '0')}</p>
                  <h2 className="font-serif text-[25px] text-ink mb-3">{section.title}</h2>
                  <p className="text-[14px] text-slate font-medium leading-[1.7]">{section.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.resources && (
        <section className="py-[72px] lg:py-[96px] bg-card border-b border-line">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.resources.map((resource, index) => (
                <motion.a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.015, y: -3 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.35, ease: EASE, delay: index * 0.04 }}
                  className="bg-pearl border border-line hover:border-copper rounded-xl p-6 min-h-[210px] flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                >
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="text-[11px] font-bold tracking-widest text-copper">RESOURCE</span>
                    <span className="text-copper"><ArrowIcon external /></span>
                  </div>
                  <h2 className="font-serif text-[25px] text-ink mb-3">{resource.name}</h2>
                  <p className="text-[14px] text-slate font-medium leading-[1.7]">{resource.copy}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-stone">
        <div className="max-w-[1120px] mx-auto px-6">
          <p className="text-[13px] text-slate/75 font-medium leading-[1.7] max-w-[900px]">{page.note}</p>
        </div>
      </section>
    </div>
  );
}
