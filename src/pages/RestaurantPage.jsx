import React, { useState } from 'react';
import { UtensilsCrossed, Clock, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/hotelData';
import { HOTEL_INFO } from '../config/hotelInfo';
import './Pages.css';

export default function RestaurantPage({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [reserved, setReserved] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [partySize, setPartySize] = useState('2');
  const [diningTime, setDiningTime] = useState('Dinner (08:00 PM)');

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const handleTableReserve = (e) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <div className="inner-page restaurant-page">
      {/* Page Hero */}
      <section className="page-hero-banner restaurant-hero-bg">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">CULINARY EXCELLENCE</span>
          <h1 className="page-main-title">DINING AT AMONTRON</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            Experience delightful multi-cuisine dining at AMONTRON RESTAURANT. From fragrant Indian biryanis 
            and smoky tandoor specialties to zesty Chinese delicacies and comforting breakfast spreads.
          </p>
        </div>
      </section>

      {/* Timings & Highlights Strip */}
      <section className="restaurant-timings-strip">
        <div className="section-wrapper">
          <div className="timings-grid">
            <div className="timing-box glass-card">
              <Clock size={22} className="text-gold" />
              <h4>Breakfast</h4>
              <p>{HOTEL_INFO.timings.restaurantBreakfast}</p>
              <span>Buffet &amp; A La Carte</span>
            </div>
            <div className="timing-box glass-card">
              <Clock size={22} className="text-gold" />
              <h4>Lunch</h4>
              <p>{HOTEL_INFO.timings.restaurantLunch}</p>
              <span>Thali &amp; Multi-Cuisine</span>
            </div>
            <div className="timing-box glass-card">
              <Clock size={22} className="text-gold" />
              <h4>Dinner</h4>
              <p>{HOTEL_INFO.timings.restaurantDinner}</p>
              <span>Tandoor &amp; Fine Dining</span>
            </div>
            <div className="timing-box glass-card">
              <UtensilsCrossed size={22} className="text-gold" />
              <h4>Room Service</h4>
              <p>24 Hours Active</p>
              <span>Bedside Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="restaurant-menu-section">
        <div className="section-wrapper">
          <div className="section-header text-center">
            <span className="section-eyebrow">OUR CURATED MENU</span>
            <h2 className="section-title">Amontron Multi-Cuisine Menu</h2>
            <div className="section-title-line center" />
          </div>

          {/* Category Tabs */}
          <div className="category-pills center-pills">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${selectedCategory === cat ? 'pill-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="menu-items-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-item-card glass-card">
                <div className="menu-item-media">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="menu-item-price">₹{item.price}</span>
                  {item.isVeg !== undefined && (
                    <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                      {item.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
                    </span>
                  )}
                </div>
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="item-name">{item.name}</h3>
                  </div>
                  <p className="item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation & Inquiries */}
      <section className="table-reservation-section">
        <div className="section-wrapper">
          <div className="reservation-card glass-card">
            <div className="reservation-info-col">
              <span className="section-eyebrow">RESERVE A TABLE</span>
              <h2 className="res-title">Table Reservations at Amontron</h2>
              <p className="res-desc">
                Planning a special lunch, business dinner, or family gathering? Reserve your preferred table in advance 
                and enjoy priority hospitality.
              </p>
              <div className="res-contact-direct">
                <Phone size={18} className="text-gold" />
                <span>Direct Restaurant Phone: <strong>+91 00000 00000</strong></span>
              </div>
            </div>

            <div className="reservation-form-col">
              {!reserved ? (
                <form onSubmit={handleTableReserve} className="table-form">
                  <div className="form-group">
                    <label>Guest Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Amit Banerjee"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Guests</label>
                      <select value={partySize} onChange={(e) => setPartySize(e.target.value)}>
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="6">6+ Persons</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Time</label>
                      <select value={diningTime} onChange={(e) => setDiningTime(e.target.value)}>
                        <option value="Breakfast">Breakfast (08:30 AM)</option>
                        <option value="Lunch">Lunch (01:30 PM)</option>
                        <option value="Dinner">Dinner (08:00 PM)</option>
                        <option value="Late Dinner">Late Dinner (09:30 PM)</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-100">
                    <Calendar size={15} />
                    <span>Confirm Table Request</span>
                  </button>
                </form>
              ) : (
                <div className="table-success-box text-center">
                  <CheckCircle2 size={40} className="text-success" />
                  <h3>Table Request Received!</h3>
                  <p>Thank you, {guestName}. Our restaurant captain will reserve your table and attend to you upon arrival.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
