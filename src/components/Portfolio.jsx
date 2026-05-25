import React from 'react';

const ventures = [
  {
    name: 'DeepTech Visionaries',
    description:
      'Pioneering frontier technologies in AI, quantum computing, and advanced materials to reshape the next decade of industry.',
    logoIcon: '🔬',
  },
  {
    name: 'EdTech Innovators',
    description:
      'Reimagining education at scale — from K-12 personalised learning to enterprise upskilling platforms across Bharat.',
    logoIcon: '🎓',
  },
  {
    name: 'CleanTech Collective',
    description:
      'Backing ventures at the intersection of clean energy, circular economy, and sustainable infrastructure for India.',
    logoIcon: '🌱',
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Curated Portfolio
          </h2>
          <p className="mt-3 text-slate-500 text-base">
            Ventures &amp; Builders we back
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Logo placeholder */}
              <div className="h-32 bg-slate-100 flex items-center justify-center text-slate-400 text-5xl">
                {v.logoIcon}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {v.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {v.description}
                </p>
              </div>

              {/* CTA */}
              <button className="w-full bg-teal-50 text-teal-700 hover:bg-teal-100 py-3 font-semibold text-sm transition-colors duration-200 border-t border-teal-100">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
