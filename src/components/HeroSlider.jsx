import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, BedDouble, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, ROOM_CATEGORIES } from '../data/lodgeData';
import './HeroSlider.css';

// Guaranteed fallback — used only if HERO_SLIDES is empty or broken
const FALLBACK_SLIDES = [
  {
    id: 'f1',
    tag: 'WELCOME TO AMONTRON',
    title: 'AMONTRON HOTEL & RESTAURANT',
    subtitle: 'Comfort. Hospitality. Convenience.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'View Rooms',
    ctaSecondary: 'Book Now',
  },
  {
    id: 'f2',
    tag: 'COMFORTABLE ACCOMMODATION',
    title: 'Rooms Designed for Rest & Relaxation',
    subtitle: 'Modern amenities and warm hospitality — every stay at AMONTRON is memorable.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'Explore Rooms',
    ctaSecondary: 'Reserve Now',
  },
];

// Resolve the slides to use — always falls back safely
const resolveSlides = () => {
  if (Array.isArray(HERO_SLIDES) && HERO_SLIDES.length > 0) return HERO_SLIDES;
  return FALLBACK_SLIDES;
};

export default function HeroSlider({ onOpenBooking }) {
  const slides = resolveSlides();
  const total = slides.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused]         = useState(false);
  const timerRef = useRef(null);

  // Booking bar state
  const [checkIn, setCheckIn]           = useState('');
  const [checkOut, setCheckOut]         = useState('');
  const [guests, setGuests]             = useState('2');
  const [roomType, setRoomType]         = useState('all');

  // Set default dates on mount
  useEffect(() => {
    const today  = new Date();
    const inDate = new Date(today);
    inDate.setDate(today.getDate() + 1);
    const outDate = new Date(inDate);
    outDate.setDate(inDate.getDate() + 3);
    setCheckIn(inDate.toISOString().split('T')[0]);
    setCheckOut(outDate.toISOString().split('T')[0]);
  }, []);

  // Clamp index if slides array ever changes length
  useEffect(() => {
    setCurrentIndex((prev) => (total > 0 ? Math.min(prev, total - 1) : 0));
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (!isPaused && total > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 5500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, total]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goTo   = (i) => setCurrentIndex(i);

  const handleBookNow = (e) => {
    e.preventDefault();
    if (typeof onOpenBooking === 'function') {
      onOpenBooking({ checkIn, checkOut, guests: parseInt(guests, 10), roomType });
    }
  };

  // Safe slide — never undefined
  const slide = slides[currentIndex] ?? slides[0] ?? FALLBACK_SLIDES[0];

  if (!slide) return null; // absolute last resort — should never happen

  return (
    <section
      id="home"
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background Slides ── */}
      <div className="hero-slides-wrapper" aria-hidden="true">
        {slides.map((item, idx) => (
          <div
            key={item.id ?? idx}
            className={`hero-slide${idx === currentIndex ? ' slide-active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="hero-overlay" />
          </div>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="hero-content-container">
        <div className="hero-text-block" key={slide.id ?? currentIndex}>
          {slide.tag && (
            <span className="hero-slide-tag">{slide.tag}</span>
          )}
          <h1 className="hero-slide-title">{slide.title}</h1>
          <p className="hero-slide-subtitle">{slide.subtitle}</p>

          <div className="hero-cta-group">
            <button
              className="hero-btn-primary"
              onClick={() => typeof onOpenBooking === 'function' && onOpenBooking({})}
              aria-label="Book now"
            >
              <span>{slide.ctaSecondary || 'Book Now'}</span>
              <ArrowRight size={16} />
            </button>
            <a href="#rooms" className="hero-btn-secondary" aria-label="View rooms">
              <span>{slide.ctaPrimary || 'View Rooms'}</span>
            </a>
          </div>
        </div>

        {/* ── Nav Controls ── */}
        {total > 1 && (
          <div className="hero-nav-controls">
            <div className="hero-arrows">
              <button
                className="hero-arrow-btn"
                onClick={goPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="hero-arrow-btn"
                onClick={goNext}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="hero-indicators">
              {slides.map((s, idx) => (
                <button
                  key={s.id ?? idx}
                  onClick={() => goTo(idx)}
                  className={`hero-indicator-bar${idx === currentIndex ? ' indicator-active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className="indicator-progress" />
                </button>
              ))}
            </div>

            <div className="hero-slide-counter" aria-live="polite">
              <span className="current-num">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="sep"> / </span>
              <span className="total-num">{String(total).padStart(2, '0')}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Booking Bar ── */}
      <div className="hero-booking-bar-dock">
        <form className="booking-bar-form" onSubmit={handleBookNow}>

          <div className="booking-bar-col">
            <label className="bar-label" htmlFor="hero-checkin">
              <Calendar size={14} className="bar-icon" />
              <span>Check-In</span>
            </label>
            <input
              id="hero-checkin"
              type="date"
              className="bar-input"
              value={checkIn}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="booking-bar-col">
            <label className="bar-label" htmlFor="hero-checkout">
              <Calendar size={14} className="bar-icon" />
              <span>Check-Out</span>
            </label>
            <input
              id="hero-checkout"
              type="date"
              className="bar-input"
              value={checkOut}
              min={checkIn || new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="booking-bar-col">
            <label className="bar-label" htmlFor="hero-guests">
              <Users size={14} className="bar-icon" />
              <span>Guests</span>
            </label>
            <select
              id="hero-guests"
              className="bar-input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          <div className="booking-bar-col">
            <label className="bar-label" htmlFor="hero-roomtype">
              <BedDouble size={14} className="bar-icon" />
              <span>Room Type</span>
            </label>
            <select
              id="hero-roomtype"
              className="bar-input"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              {ROOM_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="booking-bar-col btn-col">
            <button type="submit" className="hero-btn-primary bar-submit-btn">
              <span>Book Now</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
