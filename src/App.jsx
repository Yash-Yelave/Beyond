import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureGrid />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
