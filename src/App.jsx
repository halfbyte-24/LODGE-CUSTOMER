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
import ErrorBoundary from './components/ErrorBoundary';

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
    <div className="amontron-app">
      {/* Sticky Translucent Glass Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        onOpenLookup={() => setIsLookupOpen(true)}
        onOpenSupabaseInfo={() => setIsSupabaseInfoOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Slider */}
        <ErrorBoundary>
          <HeroSlider 
            onOpenBooking={handleOpenBooking}
          />
        </ErrorBoundary>

        {/* Rooms & Suites */}
        <ErrorBoundary>
          <RoomCarousel 
            onSelectRoom={handleSelectRoom}
            onQuickView={handleQuickView}
          />
        </ErrorBoundary>

        {/* Restaurant & Dining */}
        <ErrorBoundary>
          <DiningSection />
        </ErrorBoundary>

        {/* Hotel Services & Amenities */}
        <ErrorBoundary>
          <ExperienceSection />
        </ErrorBoundary>

        {/* Additional Facilities */}
        <ErrorBoundary>
          <WellnessSection 
            onOpenBooking={() => handleOpenBooking()}
          />
        </ErrorBoundary>

        {/* Our Story */}
        <ErrorBoundary>
          <HeritageStory />
        </ErrorBoundary>

        {/* Guest Reviews */}
        <ErrorBoundary>
          <ReviewsSection />
        </ErrorBoundary>

        {/* Contact & FAQs */}
        <ErrorBoundary>
          <ContactSection />
        </ErrorBoundary>
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
