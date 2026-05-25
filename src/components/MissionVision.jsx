import React from 'react';

const cards = [
  {
    badge: '01',
    gradient: 'from-teal-400 to-blue-500',
    title: 'Mission',
    description:
      'Power high-growth ventures by synergizing elite networks and leveraging capital for mutual, exponential benefit.',
  },
  {
    badge: '02',
    gradient: 'from-blue-400 to-indigo-500',
    title: 'Vision',
    description:
      'Bridge the gap between visionary entrepreneurs and intellectual authorities by unlocking financial and technical resources globally.',
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Column: Community Image ── */}
          <div className="relative">
            {/* Teal under-glow */}
            <div
              className="absolute -inset-3 rounded-3xl opacity-20 blur-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at 60% 60%, #14b8a6 0%, #3b82f6 60%, transparent 100%)',
              }}
            />

            {/* Image container */}
            <div className="relative aspect-[4/3] bg-slate-100 rounded-3xl shadow-xl overflow-hidden border border-slate-200/60">
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200" />

              {/* Grid texture overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Placeholder label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm font-medium tracking-wide">
                  Community Event Photo
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Cards + CTA ── */}
          <div className="flex flex-col gap-6 justify-center">

            {cards.map((card) => (
              <div
                key={card.badge}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Badge */}
                <div
                  className={`bg-gradient-to-br ${card.gradient} text-white font-bold text-2xl h-16 w-16 flex items-center justify-center rounded-xl shrink-0 shadow-md`}
                >
                  {card.badge}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <button className="bg-teal-500 text-white font-bold py-4 px-10 rounded-lg shadow-md hover:bg-teal-600 hover:shadow-lg transition-all self-start mt-4 tracking-wide uppercase text-sm">
              Apply for Invite
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
