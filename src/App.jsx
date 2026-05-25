import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MetricsBanner from './components/MetricsBanner';
import Portfolio from './components/Portfolio';
import EcosystemPillars from './components/EcosystemPillars';
import CommunityReel from './components/CommunityReel';
import FAQ from './components/FAQ';
import FeaturedProjectsSlider from './components/FeaturedProjectsSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MetricsBanner />
        <Portfolio />
        <EcosystemPillars />
        <CommunityReel />
        <FAQ />
        <FeaturedProjectsSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
