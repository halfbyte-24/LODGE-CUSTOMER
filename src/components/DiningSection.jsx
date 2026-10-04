import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ArrowRight, Clock } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/hotelData';
import { HOTEL_INFO } from '../config/hotelInfo';
import './DiningSection.css';

export default function DiningSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter items: for the homepage preview, show up to 6 representative items
  const filteredItems = (selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory)
  ).slice(0, 6);

  return (
    <section className="dining-home-section" id="restaurant">
      <div className="section-wrapper">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">CULINARY EXCELLENCE</span>
          <h2 className="section-title">Dining at Amontron</h2>
          <div className="section-title-line" />
          <p className="section-subtitle">
            Relish fresh aromas and rich authentic flavors crafted by our experienced culinary team. 
            Enjoy North Indian, Tandoor, Chinese specialties, and warm room delivery.
          </p>
        </div>

        {/* Restaurant Spotlight Banner */}
        <div className="dining-spotlight-card">
          <div className="spotlight-media-frame">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85" 
              alt="Amontron Restaurant Dining Hall" 
              className="spotlight-img"
              loading="lazy"
            />
            <div className="spotlight-overlay" />
            <div className="spotlight-badge">
              <span>AIR-CONDITIONED MULTI-CUISINE DINING</span>
            </div>
          </div>

          <div className="spotlight-info-box">
            <h3 className="spotlight-title">Amontron Multi-Cuisine Restaurant</h3>
            <p className="spotlight-desc">
              Welcoming hotel residents and visiting diners alike. Whether a crisp morning breakfast, 
              an aromatic Dum Biryani for lunch, or a family dinner, we assure attentive service and hygienic preparation.
            </p>

            <div className="spotlight-timings">
              <div className="timing-chip">
                <Clock size={13} className="text-gold" />
                <span>Breakfast: {HOTEL_INFO.timings.restaurantBreakfast}</span>
              </div>
              <div className="timing-chip">
                <Clock size={13} className="text-gold" />
                <span>Lunch: {HOTEL_INFO.timings.restaurantLunch}</span>
              </div>
              <div className="timing-chip">
                <Clock size={13} className="text-gold" />
                <span>Dinner: {HOTEL_INFO.timings.restaurantDinner}</span>
              </div>
            </div>

            <div className="spotlight-actions">
              <Link to="/restaurant" className="btn-gold">
                <span>VIEW COMPLETE MENU</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="menu-category-pills">
          {MENU_CATEGORIES.slice(0, 6).map((cat) => (
            <button
              key={cat}
              className={`menu-pill-btn ${selectedCategory === cat ? 'pill-btn-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Items Preview Grid */}
        <div className="food-items-preview-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="food-menu-card">
              
              <div className="food-card-media">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="food-card-img"
                  loading="lazy"
                />
                
                {/* Veg / Non-Veg Indicator */}
                <div className={`diet-indicator ${item.isVeg ? 'diet-veg' : 'diet-nonveg'}`}>
                  <span className="diet-dot" />
                </div>

                {!item.available && (
                  <div className="unavailable-overlay-badge">
                    CURRENTLY UNAVAILABLE
                  </div>
                )}
              </div>

              <div className="food-card-details">
                <div className="food-title-row">
                  <h4 className="food-name">{item.name}</h4>
                  <span className="food-price">₹{item.price}</span>
                </div>
                
                <p className="food-desc">{item.description}</p>
                <div className="food-cat-tag">{item.category}</div>
              </div>

            </div>
          ))}
        </div>

        {/* View Full Menu Footer Link */}
        <div className="dining-footer-cta">
          <Link to="/restaurant" className="btn-outline-gold">
            <UtensilsCrossed size={15} />
            <span>EXPLORE FULL MENU WITH ALL CATEGORIES</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
