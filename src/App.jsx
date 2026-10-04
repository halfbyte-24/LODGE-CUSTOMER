import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import RoomCarousel from './components/RoomCarousel';
import RoomModal from './components/RoomModal';
import BookingModal from './components/BookingModal';
import ManageBookingsModal from './components/ManageBookingsModal';
import DiningSection from './components/DiningSection';
import ExperienceSection from './components/ExperienceSection';
import WellnessSection from './components/WellnessSection';
import HeritageStory from './components/HeritageStory';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SupabaseInfoModal from './components/SupabaseInfoModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [quickViewRoom, setQuickViewRoom] = useState(null);
  const [isLookupOpen, setIsLookupOpen] = useState(false);
  const [isSupabaseInfoOpen, setIsSupabaseInfoOpen] = useState(false);

  // Open booking modal with optional initial configuration
  const handleOpenBooking = (initialData = {}) => {
    setBookingInitialData(initialData);
    setIsBookingOpen(true);
  };

  // When guest clicks "Reserve" on a specific room card
  const handleSelectRoom = (room) => {
    setBookingInitialData({ room });
    setIsBookingOpen(true);
  };

  // When guest clicks "Explore Details" / "Quick View"
  const handleQuickView = (room) => {
    setQuickViewRoom(room);
  };

  return (
    <div className="aura-lodge-app">
      {/* Sticky Translucent Glass Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        onOpenLookup={() => setIsLookupOpen(true)}
        onOpenSupabaseInfo={() => setIsSupabaseInfoOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Cinematic Multi-Slide Hero with Docked Fast Availability Check */}
        <HeroSlider 
          onOpenBooking={handleOpenBooking}
        />

        {/* Architectural Sanctuaries Showcase & Carousel */}
        <RoomCarousel 
          onSelectRoom={handleSelectRoom}
          onQuickView={handleQuickView}
        />

        {/* High Alpine Gastronomy, Interactive Menus & Table Reservations */}
        <DiningSection />

        {/* Curated Expeditions & Bespoke Mountain Adventures */}
        <ExperienceSection />

        {/* Thermal Springs, Hydrotherapy Circuit & Holistic Spa */}
        <WellnessSection 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* The Heritage, Architecture & Ecological Vision */}
        <HeritageStory />

        {/* International Acclaim & Verified Guest Impressions */}
        <ReviewsSection />

        {/* Private Concierge Dispatch, Coordinates & FAQs */}
        <ContactSection />
      </main>

      {/* Rich Footer with Alpine CET Clock & Newsletter */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenLookup={() => setIsLookupOpen(true)}
      />

      {/* MODALS */}
      {/* 1. Multi-Step Luxury Booking Engine */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingInitialData}
      />

      {/* 2. Room Specifications & Photo Gallery Modal */}
      <RoomModal 
        room={quickViewRoom}
        onClose={() => setQuickViewRoom(null)}
        onSelectRoom={handleSelectRoom}
      />

      {/* 3. Guest Concierge Portal / Find My Reservation */}
      <ManageBookingsModal 
        isOpen={isLookupOpen}
        onClose={() => setIsLookupOpen(false)}
      />

      {/* 4. Supabase Setup & Architecture Modal */}
      <SupabaseInfoModal 
        isOpen={isSupabaseInfoOpen}
        onClose={() => setIsSupabaseInfoOpen(false)}
      />
    </div>
  );
}
