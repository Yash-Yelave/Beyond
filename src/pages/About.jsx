import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const journey = [
  ['WISDOM', 'Learn continuously.'],
  ['BEYOND', 'Execute with purpose.'],
  ['IMPACT', 'Create a legacy that benefits families, communities, and future generations.'],
];

const founderNoteParagraphs = [
  <>BEYOND is part of the Infinity Forum ecosystem. If you are new to our community, begin with the <a href="https://infinityforum.club" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-forest transition-colors font-bold">Infinity Forum Founder's Note</a> to discover the vision that inspired this platform.</>,
  'BEYOND is the next step in the Infinity Forum journey. At Infinity Forum, lasting success begins with WISDOM: learning from exceptional people, broadening perspectives, and developing the judgment to make better decisions.',
  'But wisdom reaches its fullest potential only when it is put into action. That is the purpose of BEYOND.',
  'BEYOND is the execution platform of Infinity Forum, bringing together curated investment opportunities, innovative technologies, AI-powered tools, trusted advisors, experienced operators, and a global network of entrepreneurs, investors, and family office leaders to help members achieve extraordinary outcomes.',
  'Throughout her own journey, Usha has learned from remarkable communities such as Tiger 21, the Stanford Intelligent Investors Forum, and the Indian School of Future. Through ISF, she has worked alongside visionary leaders such as J.A. Chowdary and Siddharth Reddy, supporting entrepreneurship, innovation, Janana, Junicorns, and initiatives that create opportunities for startups and rural communities across India.',
  'These experiences reinforced the belief that when wisdom is combined with collaboration, execution, and a spirit of giving back, extraordinary outcomes become possible.',
  'BEYOND extends that philosophy by bringing together exceptional people, trusted relationships, innovative ideas, investment opportunities, AI-powered resources, and strategic partnerships that help members transform wisdom into purposeful action.',
  'The future belongs to those who continue learning, embrace innovation, build trusted relationships, and execute with intention. Whether your ambition is to build wealth, invest in transformative companies, launch a business, leverage artificial intelligence, serve on boards, expand your network, or create lasting impact, BEYOND is designed to help accelerate your journey.',
];

export default function About() {
  return (
    <div className="bg-pearl min-h-screen">
      <section className="pt-[120px] pb-[100px] lg:pt-[160px] lg:pb-[140px] bg-stone border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-[1080px] mx-auto"
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-[1px] bg-copper" />
              <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Founder's Note</span>
            </div>
            <blockquote className="font-serif text-[30px] md:text-[44px] font-medium text-ink tracking-[-0.02em] leading-[1.2] mb-10">
              "The future belongs to those who continuously learn, build trusted relationships, and execute with purpose. BEYOND is where wisdom meets execution."
            </blockquote>
            <div className="border-t border-line pt-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-line pb-8 mb-8">
                <div>
                  <p className="font-serif text-[28px] text-ink mb-2">Usha Nandigala</p>
                  <p className="text-[12px] font-bold tracking-wider uppercase text-slate">Founder, BEYOND</p>
                </div>
                <div className="w-16 h-[1px] bg-copper sm:mb-4" />
              </div>
              <div className="max-w-[860px] mx-auto space-y-5 text-[16px] leading-[1.8] text-slate font-medium">
                {founderNoteParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-10">
                {journey.map(([title, copy]) => (
                  <div key={title} className="bg-card border border-line rounded-xl p-4">
                    <p className="text-[12px] font-bold tracking-widest text-copper mb-2">{title}</p>
                    <p className="text-[13px] leading-[1.55] text-slate font-semibold">{copy}</p>
                  </div>
                ))}
              </div>
              <p className="font-serif text-[22px] leading-[1.45] text-ink pt-8 max-w-[860px] mx-auto">
                I look forward to building, investing, and creating lasting impact together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
