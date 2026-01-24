'use client';
import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/ui/AboutSection';
import DirectionsSection from '../components/ui/DirectionsSection';
// import HowWeWork from '../components/ui/HowWeWork';
import WhyUs from '../components/ui/WhyUs';
import Footer from '../components/ui/Footer';
import BoardSlider from '../components/ui/BoardSlider';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Header />
      <HeroSection />
      <BoardSlider />
      <AboutSection />
      <DirectionsSection />
      {/* <HowWeWork /> */}
      <WhyUs />
      <Footer />
    </div>
  );
};
export default LandingPage;
