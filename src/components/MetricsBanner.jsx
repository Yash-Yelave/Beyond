import React from 'react';

const metrics = [
  { value: '300+',        label: 'Members' },
  { value: '₹150 Cr+',   label: 'Capital Deployed' },
  { value: '45',          label: 'Ventures Funded' },
  { value: '1,200+',      label: 'Opportunities Evaluated' },
];

export default function MetricsBanner() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
            >
              <span className="text-4xl font-bold text-white leading-none tracking-tight">
                {m.value}
              </span>
              <span className="mt-2 text-sm font-medium text-teal-400 uppercase tracking-wide">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
