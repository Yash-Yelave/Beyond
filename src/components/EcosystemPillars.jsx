import React from 'react';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const pillars = [
  {
    title: 'Invest',
    items: [
      'Access to exclusive deal flow',
      'Private equity &amp; venture rounds',
      'Co-investment opportunities with top LPs',
    ],
  },
  {
    title: 'Innovate',
    items: [
      'Conversations with thought leaders',
      'Collaborative R&amp;D with portfolio companies',
      'Cutting-edge innovation sprints',
    ],
  },
  {
    title: 'Impact',
    items: [
      'Shaping the startup ecosystem',
      'Policy advocacy &amp; community building',
      'Mentorship for the next generation',
    ],
  },
];

export default function EcosystemPillars() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pre-heading */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
          What We Do
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Invest. Innovate. Impact.
        </h2>

        {/* Subtitle badge */}
        <div className="inline-flex items-center bg-slate-50 border border-slate-200 rounded-full px-5 py-2 mb-14">
          <span className="text-sm text-slate-600">
            Pillars that turn capital into collaboration.
          </span>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="border border-slate-100 p-8 rounded-xl hover:shadow-sm transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {pillar.title}
              </h3>
              <ul className="space-y-4">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-slate-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
