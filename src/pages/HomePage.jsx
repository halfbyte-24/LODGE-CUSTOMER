import React from 'react';
import HeroSlider from '../components/HeroSlider';
import WelcomeIntro from '../components/WelcomeIntro';
import RoomCarousel from '../components/RoomCarousel';
import DiningSection from '../components/DiningSection';
import FacilitiesSection from '../components/FacilitiesSection';
import EventsOffersSection from '../components/EventsOffersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenBooking, onSelectRoom, onQuickView }) {
  return (
    <div className="homepage-content">
      {/* 1. Hero Slider with Fast Check-in Dock */}
      <HeroSlider onOpenBooking={onOpenBooking} />

      {/* 2. Welcome & Introduction */}
      <WelcomeIntro />

      {/* 3. Public Accommodation: Rooms & Suites */}
      <RoomCarousel 
        onSelectRoom={onSelectRoom}
        onQuickView={onQuickView}
      />

      {/* 4. Dining at Amontron */}
      <DiningSection />

      {/* 5. Facilities & Amenities */}
      <FacilitiesSection />

      {/* 6. Banquets & Events */}
      <EventsOffersSection onEnquireEvent={(title) => onOpenBooking({ eventTitle: title })} />

      {/* 7. Guest Testimonials */}
      <TestimonialsSection />

      {/* 8. Contact & Access Coordinates */}
      <ContactSection />
    </div>
  );
}
