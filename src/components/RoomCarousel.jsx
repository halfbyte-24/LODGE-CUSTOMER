import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { ROOMS, ROOM_CATEGORIES } from '../data/hotelData';
import './RoomShowcase.css';

export default function RoomCarousel({ onSelectRoom, onQuickView }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Filtered rooms
  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.id === activeCategory || r.category === activeCategory);

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
          <span className="section-tag">ACCOMMODATION</span>
          <h2 className="section-title">ROOMS &amp; SUITES</h2>
          <div className="gold-divider" />
          <p className="section-description">
            Experience restful stays in our thoughtfully furnished, air-conditioned rooms and suites. 
            Enjoy plush bedding, high-speed Wi-Fi, modern ensuite bathrooms, and 24-hour room service.
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
                          <CheckCircle2 size={12} className="text-success" />
                          <span>Available</span>
                        </span>
                        <div className="room-price-tag">
                          <span className="price-curr">₹</span>
                          <span className="price-val">{(room.pricePerNight || room.price).toLocaleString()}</span>
                          <span className="price-unit">/ night</span>
                        </div>
                      </div>

                      {/* Room Card Body */}
                      <div className="room-card-body">
                        <div className="room-card-top">
                          <span className="room-tagline">{room.floorInfo || room.tagline}</span>
                          <h3 className="room-name">{room.name}</h3>
                        </div>

                        {/* Room Specifications */}
                        <div className="room-specs-grid">
                          <div className="spec-item">
                            <Users size={14} className="spec-icon" />
                            <span>{room.capacity}</span>
                          </div>
                          <div className="spec-item">
                            <Bed size={14} className="spec-icon" />
                            <span>{room.bedType}</span>
                          </div>
                          <div className="spec-item">
                            <Maximize2 size={14} className="spec-icon" />
                            <span>{room.size || `${room.sqft} sq. ft.`}</span>
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className="room-desc-short" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '10px 0', lineHeight: 1.5 }}>
                          {room.description}
                        </p>

                        {/* Highlight Features */}
                        <div className="room-highlights-list">
                          {(room.features || []).slice(0, 3).map((feat, i) => (
                            <div key={i} className="highlight-row">
                              <Check size={14} className="highlight-check" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="room-card-actions">
                          <Link 
                            to={`/rooms/${room.id}`}
                            className="btn-outline-gold room-btn-details"
                            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            <span>VIEW DETAILS</span>
                          </Link>
                          <button 
                            className="btn-primary room-btn-reserve"
                            onClick={() => onSelectRoom(room)}
                          >
                            <span>BOOK NOW</span>
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
                    <CheckCircle2 size={12} className="text-success" />
                    <span>Available</span>
                  </span>
                  <div className="room-price-tag">
                    <span className="price-curr">₹</span>
                    <span className="price-val">{(room.pricePerNight || room.price).toLocaleString()}</span>
                    <span className="price-unit">/ night</span>
                  </div>
                </div>

                <div className="room-card-body">
                  <span className="room-tagline">{room.floorInfo || room.tagline}</span>
                  <h3 className="room-name">{room.name}</h3>

                  <div className="room-specs-grid">
                    <div className="spec-item">
                      <Users size={13} className="spec-icon" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="spec-item">
                      <Bed size={13} className="spec-icon" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  <p className="room-grid-desc" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '10px 0 16px', lineHeight: 1.5 }}>
                    {room.description}
                  </p>

                  <div className="room-card-actions mt-auto">
                    <Link 
                      to={`/rooms/${room.id}`}
                      className="btn-outline-gold room-btn-details"
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <span>VIEW DETAILS</span>
                    </Link>
                    <button 
                      className="btn-primary room-btn-reserve"
                      onClick={() => onSelectRoom(room)}
                    >
                      <span>BOOK NOW</span>
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
