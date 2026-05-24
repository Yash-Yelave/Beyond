import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Beyond Wealth Creation: A Trusted Ecosystem for Mutual Growth, Knowledge, and Contribution.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
          Exclusive access to curated opportunities and an elite network designed for visionaries and intellectual authorities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/30">
            Join the Ecosystem
          </button>
          <button className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
