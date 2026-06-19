import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];

const events = [
  {
    title: 'Founder Roundtable: Scaling to Series B',
    date: 'Oct 15, 2024',
    time: '4:00 PM - 6:30 PM',
    location: 'Bengaluru, India (Invite Only)',
    type: 'In-Person',
    desc: 'An intimate, off-the-record discussion with founders who have recently crossed $5M ARR.',
    image: '/14995841-meeting-4784909.jpg'
  },
  {
    title: 'Investor Mixer: DeepTech & AI',
    date: 'Oct 22, 2024',
    time: '7:00 PM onwards',
    location: 'Mumbai, India',
    type: 'Mixer',
    desc: 'Curated networking evening for early-stage DeepTech founders and active seed/Series A investors.',
    image: '/campaign-creators-gMsnXqILjp4-unsplash.jpg'
  },
  {
    title: 'Masterclass: Structuring Founder Equity',
    date: 'Nov 05, 2024',
    time: '11:00 AM - 12:30 PM',
    location: 'Virtual',
    type: 'Masterclass',
    desc: 'Expert-led session on cap tables, vesting schedules, and secondary sales for growth-stage founders.',
    image: '/annie-spratt-hCb3lIB8L8E-unsplash.jpg'
  }
];

export default function Events() {
  return (
    <div className="bg-stone min-h-screen pt-[120px] pb-[100px] lg:pt-[160px] lg:pb-[140px]">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading 
            eyebrow="Ecosystem Events" 
            title="Curated Gatherings" 
            subtitle="We design spaces for high-signal conversations and meaningful connections. Most events are exclusive to Beyond members."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {events.map((e, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="group flex flex-col bg-card rounded-2xl border border-line overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 h-full"
              >
                {/* Image Area */}
                <div className="w-full aspect-[16/10] bg-surface relative overflow-hidden border-b border-line">
                   <div className="absolute inset-0 bg-ink/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                   <img 
                      src={e.image} 
                      alt={e.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                </div>

                {/* Content Area */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-2.5 py-1 rounded-full bg-forest/10 text-forest text-[11px] font-bold tracking-wider uppercase">
                      {e.type}
                    </span>
                    <span className="text-[12px] font-medium text-slate">
                      {e.date}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-[24px] font-medium text-ink mb-3 line-clamp-2">
                    {e.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[13px] font-bold text-copper uppercase tracking-wider mb-6">
                    {e.time}
                  </div>
                  
                  <p className="text-[15px] text-slate font-medium leading-[1.6] mb-10 flex-grow max-w-[620px]">
                    {e.desc}
                  </p>
                  
                  <div className="flex flex-col gap-5 mt-auto border-t border-line/60 pt-8">
                    <div className="flex items-center gap-2 text-[13px] font-medium text-slate">
                      <svg className="w-4 h-4 text-slate/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {e.location}
                    </div>
                    <button className="w-full bg-forest text-card py-3 rounded-lg text-[14px] font-semibold hover:bg-forest-hover transition-colors shadow-sm">
                      Request Invite
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center max-w-[720px] mx-auto">
            <p className="text-[14px] text-slate font-medium">
              Are you a Beyond member? <Link to="/dashboard" className="text-copper font-bold hover:underline">Log in</Link> to view the full private calendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
