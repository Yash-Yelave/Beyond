import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const principles = [
  ['Impact first', 'Beyond is focused on the philanthropic and entrepreneurial impact side of the Infinity Forum vision.'],
  ['Built for students', 'The work supports the Junicorns Platform, helping rural students learn how to become successful entrepreneurs.'],
  ['Connected to capital', 'Members can connect wealth, learning, and investing conversations to practical long-term impact.'],
];

function Principle({ title, copy, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
      className="border-t border-line pt-6"
    >
      <p className="text-[12px] font-bold tracking-widest text-copper uppercase mb-3">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="font-serif text-[24px] font-medium text-ink mb-3">{title}</h3>
      <p className="text-[15px] text-slate font-medium leading-[1.7]">{copy}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-pearl min-h-screen">
      <section className="pt-[100px] pb-[90px] lg:pt-[150px] lg:pb-[130px] border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Impact Initiative of Infinity Forum</span>
              </div>
              <h1 className="font-serif text-[46px] md:text-[72px] font-medium text-ink tracking-[-0.02em] leading-[1.05] mb-8 max-w-[880px]">
                Beyond is where Infinity Forum turns wealth into impact.
              </h1>
              <p className="text-[17px] lg:text-[20px] text-slate font-medium leading-[1.75] max-w-[720px] mb-10">
                Beyond focuses on the impact part of Infinity Forum: supporting entrepreneurial education, rural student opportunity, and giving members a clear way to connect wealth creation with giving back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership" className="inline-flex items-center justify-center bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
                  Read Membership Details
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-copper/40 text-copper px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-copper/5 hover:border-copper transition-colors">
                  Contact Usha
                </Link>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="bg-card border border-line rounded-2xl p-8 lg:p-10"
            >
              <p className="text-[12px] font-bold tracking-widest text-slate uppercase mb-8">Founder Note</p>
              <p className="font-serif text-[26px] leading-[1.45] text-ink mb-8">
                "I believe wealth creation and giving back belong in the same conversation."
              </p>
              <div className="border-t border-line pt-6">
                <p className="font-serif text-[22px] text-ink mb-1">Usha Nandigala</p>
                <p className="text-[12px] font-bold tracking-wider uppercase text-slate">Founder, Beyond</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="py-[90px] lg:py-[120px] bg-card border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-14">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.55, ease: EASE }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-copper" />
                <span className="text-[12px] font-bold tracking-widest text-slate uppercase">Why Beyond Exists</span>
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-ink tracking-[-0.02em] leading-[1.2]">
                The impact layer needs its own home.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map(([title, copy], index) => (
                <Principle key={title} title={title} copy={copy} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] lg:py-[120px] bg-stone">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-[12px] font-bold tracking-widest text-slate uppercase mb-4">Next Step</p>
          <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-ink tracking-[-0.02em] leading-[1.2] mb-6">
            The details live on the membership page.
          </h2>
          <p className="text-[16px] text-slate font-medium leading-[1.7] max-w-[620px] mx-auto mb-10">
            The membership page explains how Beyond connects the broader Infinity Forum membership structure to impact, member benefits, and the application process.
          </p>
          <Link to="/membership" className="inline-flex items-center justify-center bg-forest text-card px-8 h-[52px] rounded-lg font-semibold text-[15px] hover:bg-forest-hover transition-colors shadow-sm">
            Go to Membership
          </Link>
        </div>
      </section>
    </div>
  );
}
