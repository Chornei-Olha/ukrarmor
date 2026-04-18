'use client';
import React from 'react';
import HeroSection from '../components/ui/Hero';
import ChallengesSection from '../components/ui/ChallengesSection';
import HeroBPLA from '../components/ui/HeroBPLA';
import ComparativeSection from '../components/ui/ComparativeSection';
import PriorityObjectsSection from '../components/ui/PriorityObjectsSection';
import { EngineeringServicesLeft } from '../components/ui/EngineeringServicesLeft';
import { EngineeringServicesRight } from '../components/ui/EngineeringServicesRight';
import FrameVariants from '../components/ui/FrameVariants';
import CableNetSystems from '../components/ui/CableNetSystems';
import StrengthCalculation from '../components/ui/StrengthCalculation';
import ComplexApproach from '../components/ui/ComplexApproach';
import ProcessSteps from '../components/ui/ProcessSteps';
import CableProtectionSection from '../components/ui/CableProtectionSection';
import ContactForm from '../components/ui/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* ✅ JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'UkrArmor',
            url: 'https://ukrarmor.kiev.ua/',
            logo: 'https://ukrarmor.kiev.ua/logo.png',
            email: 'ukrarmor.kiev@ukr.net',
            telephone: '+380509999514',
            areaServed: 'UA',
            description: "Інженерні рішення захисту від БПЛА для промислових об'єктів",
          }),
        }}
      />

      <div className="min-h-screen font-inter overflow-x-hidden">
        <HeroSection />
        <ChallengesSection />
        <HeroBPLA />
        <ComparativeSection />
        <CableProtectionSection />
        <PriorityObjectsSection />
        <EngineeringServicesLeft />
        <EngineeringServicesRight />
        <FrameVariants />
        <CableNetSystems />
        <StrengthCalculation />
        <ComplexApproach />
        <ProcessSteps />

        <div id="contact-form" className="my-16 scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
