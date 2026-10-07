import React from 'react';
import HeroSlider from '../components/HeroSlider';
import WelcomeIntro from '../components/WelcomeIntro';
import ExperienceSection from '../components/ExperienceSection';
import FacilitiesSection from '../components/FacilitiesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenBooking, onSelectRoom, onQuickView }) {
  return (
    <div className="homepage-content">
      <HeroSlider onOpenBooking={onOpenBooking} />
      <WelcomeIntro />
      <ExperienceSection 
        onSelectRoom={onSelectRoom}
        onQuickView={onQuickView}
      />
      <FacilitiesSection />
      <ContactSection />
    </div>
  );
}
