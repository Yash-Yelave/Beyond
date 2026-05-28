import React from 'react';
import HeroSection from '../components/sections/home/HeroSection';
import MetricsSection from '../components/sections/home/MetricsSection';
import AboutEcosystem from '../components/sections/home/AboutEcosystem';
import EcosystemPillars from '../components/sections/home/EcosystemPillars';
import MemberExperience from '../components/sections/home/MemberExperience';
import FeaturedBuilders from '../components/sections/home/FeaturedBuilders';
import EcosystemFlow from '../components/sections/home/EcosystemFlow';
import MembershipSplit from '../components/sections/home/MembershipSplit';
import Testimonials from '../components/sections/home/Testimonials';
import FAQSection from '../components/sections/home/FAQSection';
import FinalCTA from '../components/sections/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <AboutEcosystem />
      <EcosystemPillars />
      <MemberExperience />
      <FeaturedBuilders />
      <EcosystemFlow />
      <MembershipSplit />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
