import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/3580-172488178_tiny.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
          Beyond Wealth Creation: A Trusted Ecosystem for Mutual Growth, Knowledge, and Contribution.
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto drop-shadow">
          Exclusive access to curated opportunities and an elite network designed for visionaries and intellectual authorities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/30">
            Join the Ecosystem
          </button>
          <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
