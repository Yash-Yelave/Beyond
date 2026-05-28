import React from 'react';
import SubmitHero from './submit/SubmitHero';
import ProcessSection from './submit/ProcessSection';
import FundingForm from './submit/FundingForm';
import TrustSection from './submit/TrustSection';
import FAQSection from './submit/FAQSection';
import FinalCTA from './submit/FinalCTA';

/**
 * SubmitOpportunityPage
 *
 * Full-page assembly for the "Submit Opportunity / Want Funding" flow.
 * Uses the existing Header and Footer from the main App — import this
 * component into your router or App.jsx and render it between them.
 */
export default function SubmitOpportunityPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <SubmitHero />
      <ProcessSection />
      <FundingForm />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
