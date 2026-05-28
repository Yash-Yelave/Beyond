import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const events = [
  {
    title: 'Founder Roundtable: Scaling to Series B',
    date: 'Oct 15, 2024',
    time: '4:00 PM - 6:30 PM',
    location: 'Bengaluru, India (Invite Only)',
    type: 'In-Person',
    desc: 'An intimate, off-the-record discussion with founders who have recently crossed $5M ARR.',
    color: 'bg-teal-50 border-teal-100 text-teal-700',
  },
  {
    title: 'Investor Mixer: DeepTech & AI',
    date: 'Oct 22, 2024',
    time: '7:00 PM onwards',
    location: 'Mumbai, India',
    type: 'Mixer',
    desc: 'Curated networking evening for early-stage DeepTech founders and active seed/Series A investors.',
    color: 'bg-blue-50 border-blue-100 text-blue-700',
  },
  {
    title: 'Masterclass: Structuring Founder Equity',
    date: 'Nov 05, 2024',
    time: '11:00 AM - 12:30 PM',
    location: 'Virtual',
    type: 'Masterclass',
    desc: 'Expert-led session on cap tables, vesting schedules, and secondary sales for growth-stage founders.',
    color: 'bg-violet-50 border-violet-100 text-violet-700',
  }
];

export default function Events() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          eyebrow="Ecosystem Events" 
          title="Curated Gatherings" 
          subtitle="We design spaces for high-signal conversations and meaningful connections. Most events are exclusive to Beyond members."
        />

        <div className="space-y-6 mt-12">
          {events.map((e, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${e.color}`}>
                    {e.type}
                  </span>
                  <span className="text-sm font-medium text-slate-500">{e.date} • {e.time}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{e.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{e.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {e.location}
                </div>
              </div>
              <div className="shrink-0">
                <button className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
                  Request Invite
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-500 text-sm">
            Are you a Beyond member? <a href="/dashboard" className="text-teal-600 font-semibold hover:underline">Log in</a> to view the full private calendar.
          </p>
        </div>
      </div>
    </div>
  );
}
