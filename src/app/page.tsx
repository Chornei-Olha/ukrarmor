'use client';
import React from 'react';
import Header from '../components/ui/Header';
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
import Footer from '../components/ui/Footer';

// import DirectionsSection from '../components/ui/DirectionsSection';
// import BoardSlider from '../components/ui/BoardSlider';
import { FeatherIcon } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Header />
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
      {/* <BoardSlider />
      <DirectionsSection /> */}
      <Footer />
    </div>
  );
};
export default LandingPage;
