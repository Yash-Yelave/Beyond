import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MetricsBanner from './components/MetricsBanner';
import Portfolio from './components/Portfolio';
import MissionVision from './components/MissionVision';
import EcosystemPillars from './components/EcosystemPillars';
import CommunityReel from './components/CommunityReel';
import FAQ from './components/FAQ';
import FeaturedProjectsSlider from './components/FeaturedProjectsSlider';
import Footer from './components/Footer';
import SubmitOpportunityPage from './components/SubmitOpportunityPage';

function App() {
  const [page, setPage] = useState(
    () => window.location.hash === '#/submit' ? 'submit' : 'home'
  );

  useEffect(() => {
    const onHash = () => setPage(window.location.hash === '#/submit' ? 'submit' : 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        {page === 'submit' ? (
          <SubmitOpportunityPage />
        ) : (
          <>
            <Hero />
            <MetricsBanner />
            <Portfolio />
            <MissionVision />
            <EcosystemPillars />
            <CommunityReel />
            <FAQ />
            <FeaturedProjectsSlider />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
