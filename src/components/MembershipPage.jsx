import React from 'react';
import MembershipHero from './membership/MembershipHero';
import BenefitsGrid from './membership/BenefitsGrid';
import AudienceSection from './membership/AudienceSection';
import MembershipProcess from './membership/MembershipProcess';
import MembershipForm from './membership/MembershipForm';
import ExperienceShowcase from './membership/ExperienceShowcase';
import TestimonialsSection from './membership/TestimonialsSection';
import FAQAccordion from './membership/FAQAccordion';
import MembershipFinalCTA from './membership/MembershipFinalCTA';

/**
 * MembershipPage
 *
 * Full-page assembly for the "Become a Member" flow.
 * Slot this between the existing Header and Footer in App.jsx.
 * Accessible at hash route  #/membership
 */
export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <MembershipHero />
      <BenefitsGrid />
      <AudienceSection />
      <MembershipProcess />
      <MembershipForm />
      <ExperienceShowcase />
      <TestimonialsSection />
      <FAQAccordion />
      <MembershipFinalCTA />
    </div>
  );
}
