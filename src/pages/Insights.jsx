import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const EASE = [0.25, 0.1, 0.25, 1];

const insights = [
  {
    category: 'Venture Capital',
    title: 'The Shift in Seed Stage Metrics for 2025',
    excerpt: 'Investors are increasingly looking beyond user growth, prioritizing early monetization and unit economics even at the seed stage.',
    readTime: '6 min read',
    date: 'Sep 28, 2024',
    image: '/annie-spratt-hCb3lIB8L8E-unsplash.jpg'
  },
  {
    category: 'Founder Well-being',
    title: 'Building Resilience in High-Pressure Markets',
    excerpt: 'Insights from our recent closed-door roundtable on how repeat founders manage stress and avoid burnout during critical scaling phases.',
    readTime: '8 min read',
    date: 'Oct 02, 2024',
    image: '/14995841-meeting-4784909.jpg'
  },
  {
    category: 'Ecosystem Playbook',
    title: 'Structuring Advisory Boards That Actually Work',
    excerpt: 'Stop giving away equity for logos. A tactical guide to selecting, compensating, and extracting value from startup advisors.',
    readTime: '12 min read',
    date: 'Oct 10, 2024',
    image: '/quilia-1-aA2Fadydc-unsplash.jpg'
  }
];

export default function Insights() {
  return (
    <div className="bg-pearl min-h-screen pt-[120px] pb-[100px] lg:pt-[160px] lg:pb-[140px]">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading 
            eyebrow="Insights & Perspectives" 
            title="Signals from the Ecosystem" 
            subtitle="Tactical advice, market observations, and learnings aggregated from the Beyond network."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {insights.map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="group flex flex-col bg-card rounded-2xl border border-line overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer h-full"
              >
                {/* Image Area */}
                <div className="w-full aspect-[16/10] bg-surface relative overflow-hidden border-b border-line">
                   <div className="absolute inset-0 bg-ink/5 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                   <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-2.5 py-1 rounded-full bg-forest/10 text-forest text-[11px] font-bold tracking-wider uppercase">
                      {article.category}
                    </span>
                    <span className="text-[12px] font-medium text-slate">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-[24px] font-medium text-ink mb-4 group-hover:text-forest transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[15px] leading-[1.6] text-slate font-medium mb-10 flex-grow max-w-[620px]">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-line/60 mt-auto">
                    <span className="text-[12px] font-bold text-slate uppercase tracking-wider">{article.date}</span>
                    <span className="inline-flex items-center gap-2 text-[14px] font-bold text-ink group-hover:text-copper transition-colors">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
