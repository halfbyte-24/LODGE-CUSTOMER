import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Maximize2, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { ROOM_TYPES, ROOM_CATEGORIES } from '../data/hotelData';
import './Pages.css';

export default function RoomsPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRooms = activeCategory === 'all'
    ? ROOM_TYPES
    : ROOM_TYPES.filter(r => r.id === activeCategory);

  return (
    <div className="inner-page rooms-listing-page">
      {/* Page Hero Header */}
      <section className="page-hero-banner">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">AMONTRON ACCOMMODATIONS</span>
          <h1 className="page-main-title">Rooms &amp; Suites</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            Discover thoughtfully curated living spaces designed for ultimate relaxation and productivity. 
            Choose between our Standard, Deluxe, and Super Deluxe categories across three elegant floors.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="rooms-filter-strip">
        <div className="section-wrapper">
          <div className="category-pills center-pills">
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
        </div>
      </section>

      {/* Room Cards Grid */}
      <section className="rooms-catalog-section">
        <div className="section-wrapper">
          <div className="rooms-catalog-grid">
            {filteredRooms.map(room => (
              <div key={room.id} className="room-catalog-card glass-card">
                <div className="catalog-media-box">
                  <img src={room.image} alt={room.name} className="catalog-room-img" />
                  <div className="catalog-img-gradient" />
                  <div className="catalog-status-pill">
                    <CheckCircle2 size={12} className="text-success" />
                    <span>Available</span>
                  </div>
                  <div className="catalog-price-badge">
                    <span className="cur">₹</span>
                    <span className="val">{(room.pricePerNight || room.price).toLocaleString()}</span>
                    <span className="unit">/ night</span>
                  </div>
                </div>

                <div className="catalog-content-box">
                  <div className="catalog-floor-tag">{room.floorInfo || 'AMONTRON HOTEL'}</div>
                  <h2 className="catalog-room-title">{room.name}</h2>
                  <p className="catalog-desc">{room.description}</p>

                  <div className="catalog-specs-row">
                    <div className="spec-bubble">
                      <Users size={14} className="text-gold" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="spec-bubble">
                      <Bed size={14} className="text-gold" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="spec-bubble">
                      <Maximize2 size={14} className="text-gold" />
                      <span>{room.size || `${room.sqft} sq. ft.`}</span>
                    </div>
                  </div>

                  <div className="catalog-features-list">
                    {(room.features || []).slice(0, 4).map((feat, i) => (
                      <div key={i} className="catalog-feature-item">
                        <Check size={14} className="text-gold" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="catalog-actions-row">
                    <Link to={`/rooms/${room.id}`} className="btn-outline-gold w-50 text-center">
                      <span>VIEW DETAILS</span>
                    </Link>
                    <button 
                      className="btn-primary w-50"
                      onClick={() => onOpenBooking({ room })}
                    >
                      <span>BOOK NOW</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
