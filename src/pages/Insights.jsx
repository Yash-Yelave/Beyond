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
    date: 'Sep 28, 2024'
  },
  {
    category: 'Founder Well-being',
    title: 'Building Resilience in High-Pressure Markets',
    excerpt: 'Insights from our recent closed-door roundtable on how repeat founders manage stress and avoid burnout during critical scaling phases.',
    readTime: '8 min read',
    date: 'Oct 02, 2024'
  },
  {
    category: 'Ecosystem Playbook',
    title: 'Structuring Advisory Boards That Actually Work',
    excerpt: 'Stop giving away equity for logos. A tactical guide to selecting, compensating, and extracting value from startup advisors.',
    readTime: '12 min read',
    date: 'Oct 10, 2024'
  }
];

export default function Insights() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          eyebrow="Insights & Perspectives" 
          title="Signals from the Ecosystem" 
          subtitle="Tactical advice, market observations, and learnings aggregated from the Beyond network."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {insights.map((article, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col h-full border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
                <div className="w-full h-full bg-gradient-to-br from-teal-50 to-slate-200" />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-xs font-medium text-slate-400">{article.date}</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors flex items-center gap-1">
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
  );
}
