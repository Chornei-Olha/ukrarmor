'use client';
import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from '../components/ui/Hero';
import AboutText from '../components/ui/AboutText';
import FollowFeed from '../components/ui/FollowFeed';
import Footer from '../components/ui/Footer';

// import DirectionsSection from '../components/ui/DirectionsSection';
// import BoardSlider from '../components/ui/BoardSlider';
import { FeatherIcon } from 'lucide-react';
import FeaturedCollections from '../components/ui/FeaturedCollections';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutText />
      <FeaturedCollections />
      <FollowFeed />
      {/* <BoardSlider />
      <DirectionsSection /> */}
      <Footer />
    </div>
  );
};
export default LandingPage;
