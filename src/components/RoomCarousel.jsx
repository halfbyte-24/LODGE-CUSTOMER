import React, { useState, useRef, useEffect } from 'react';
import { 
  Users, 
  Maximize2, 
  Bed, 
  Eye, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  ArrowRight,
  Flame,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';
import { ROOMS, ROOM_CATEGORIES } from '../data/lodgeData';
import './RoomShowcase.css';

export default function RoomCarousel({ onSelectRoom, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Filtered rooms
  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    if (currentIndex < filteredRooms.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // loop around
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredRooms.length - 1); // loop
    }
  };

  return (
    <section id="rooms" className="rooms-section">
      <div className="section-wrapper">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">ARCHITECTURAL ACCOMMODATION</span>
          <h2 className="section-title">The Alpine Sanctuaries</h2>
          <div className="gold-divider" />
          <p className="section-description">
            Constructed of blackened larch, hand-chiseled Valais granite, and thermal triple-glazed panoramic glass. 
            Each sanctuary is an intimate redoubt of silence, tactile warmth, and unmatched peak views.
          </p>
        </div>

        {/* Filter Bar & View Toggle */}
        <div className="rooms-filter-container">
          <div className="category-pills">
            {ROOM_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'pill-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="view-mode-toggle">
            <button
              className={`view-btn ${viewMode === 'carousel' ? 'view-btn-active' : ''}`}
              onClick={() => setViewMode('carousel')}
              title="Carousel Mode"
            >
              <SlidersHorizontal size={16} />
              <span className="toggle-text">Carousel</span>
            </button>
            <button
              className={`view-btn ${viewMode === 'grid' ? 'view-btn-active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid Mode"
            >
              <LayoutGrid size={16} />
              <span className="toggle-text">All Suites</span>
            </button>
          </div>
        </div>

        {/* CAROUSEL VIEW */}
        {viewMode === 'carousel' && (
          <div className="carousel-viewport-wrapper">
            
            {/* Carousel Controls */}
            <div className="carousel-nav-arrows">
              <button 
                className="carousel-btn prev-btn" 
                onClick={handlePrev}
                aria-label="Previous suite"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="carousel-btn next-btn" 
                onClick={handleNext}
                aria-label="Next suite"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Track */}
            <div className="carousel-track-container">
              <div 
                className="carousel-slider-track"
                ref={trackRef}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {filteredRooms.map((room) => (
                  <div key={room.id} className="carousel-slide-item">
                    <div className="room-card glass-card">
                      
                      {/* Image Preview & Badge */}
                      <div className="room-card-media">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="room-card-img"
                          loading="lazy" 
                        />
                        <div className="room-card-gradient" />
                        <span className="room-view-badge">
                          <Eye size={12} />
                          {room.view}
                        </span>
                        <div className="room-price-tag">
                          <span className="price-curr">$</span>
                          <span className="price-val">{room.pricePerNight.toLocaleString()}</span>
                          <span className="price-unit">/ night</span>
                        </div>
                      </div>

                      {/* Room Card Body */}
                      <div className="room-card-body">
                        <div className="room-card-top">
                          <span className="room-tagline">{room.tagline}</span>
                          <h3 className="room-name">{room.name}</h3>
                        </div>

                        {/* Room Specifications */}
                        <div className="room-specs-grid">
                          <div className="spec-item">
                            <Maximize2 size={14} className="spec-icon" />
                            <span>{room.sqft} sq ft ({room.sqm} m²)</span>
                          </div>
                          <div className="spec-item">
                            <Users size={14} className="spec-icon" />
                            <span>Up to {room.maxAdults} Adults, {room.maxChildren} Kids</span>
                          </div>
                          <div className="spec-item">
                            <Bed size={14} className="spec-icon" />
                            <span>{room.bedType}</span>
                          </div>
                        </div>

                        {/* Highlight Features */}
                        <div className="room-highlights-list">
                          {room.features.slice(0, 3).map((feat, i) => (
                            <div key={i} className="highlight-row">
                              <Check size={14} className="highlight-check" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Amenity Badges */}
                        <div className="room-amenity-tags">
                          {room.amenities.slice(0, 4).map((a, i) => (
                            <span key={i} className="amenity-chip">{a}</span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="room-card-actions">
                          <button 
                            className="btn-outline-gold room-btn-details"
                            onClick={() => onQuickView(room)}
                          >
                            <span>Explore Details</span>
                          </button>
                          <button 
                            className="btn-primary room-btn-reserve"
                            onClick={() => onSelectRoom(room)}
                          >
                            <span>Reserve Suite</span>
                            <ArrowRight size={15} />
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dot Indicators */}
            <div className="carousel-dots-bar">
              {filteredRooms.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === currentIndex ? 'dot-active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="rooms-grid-container">
            {filteredRooms.map(room => (
              <div key={room.id} className="room-grid-card glass-card">
                <div className="room-card-media">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="room-card-img" 
                    loading="lazy"
                  />
                  <div className="room-card-gradient" />
                  <span className="room-view-badge">
                    <Eye size={12} />
                    {room.view}
                  </span>
                  <div className="room-price-tag">
                    <span className="price-curr">$</span>
                    <span className="price-val">{room.pricePerNight.toLocaleString()}</span>
                    <span className="price-unit">/ night</span>
                  </div>
                </div>

                <div className="room-card-body">
                  <span className="room-tagline">{room.tagline}</span>
                  <h3 className="room-name">{room.name}</h3>

                  <div className="room-specs-grid">
                    <div className="spec-item">
                      <Maximize2 size={13} className="spec-icon" />
                      <span>{room.sqft} sq ft</span>
                    </div>
                    <div className="spec-item">
                      <Users size={13} className="spec-icon" />
                      <span>{room.maxAdults} Guests</span>
                    </div>
                  </div>

                  <p className="room-grid-desc">{room.description.slice(0, 110)}...</p>

                  <div className="room-card-actions mt-auto">
                    <button 
                      className="btn-outline-gold room-btn-details"
                      onClick={() => onQuickView(room)}
                    >
                      <span>Details</span>
                    </button>
                    <button 
                      className="btn-primary room-btn-reserve"
                      onClick={() => onSelectRoom(room)}
                    >
                      <span>Reserve</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
