import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UtensilsCrossed, BedDouble, MapPin, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import './WelcomeIntro.css';

export default function WelcomeIntro() {
  return (
    <section className="welcome-intro-section" id="about">
      <div className="section-wrapper">
        <div className="welcome-grid">
          
          {/* Narrative Column */}
          <div className="welcome-text-col">
            <span className="section-eyebrow">WELCOME TO AMONTRON</span>
            <h2 className="welcome-heading">Comfort Designed Around Your Stay</h2>
            <div className="welcome-heading-line" />

            <p className="welcome-lead">
              Situated in Midnapore, <strong>{HOTEL_INFO.fullName}</strong> is crafted to offer travelers 
              a peaceful retreat blending thoughtful comfort, attentive hospitality, and delicious dining.
            </p>

            <p className="welcome-body">
              Whether you are visiting for commercial assignments, family vacations, or social celebrations, 
              our well-furnished air-conditioned rooms, round-the-clock front desk, and in-house restaurant 
              ensure your stay is relaxing, convenient, and memorable.
            </p>

            {/* Feature Highlights Grid */}
            <div className="welcome-highlights-grid">
              <div className="welcome-highlight-item">
                <div className="highlight-icon-wrap">
                  <BedDouble size={20} className="hl-icon" />
                </div>
                <div>
                  <h4>Spacious AC Rooms</h4>
                  <p>Quality bedding, smart amenities, and clean sanitized bathrooms.</p>
                </div>
              </div>

              <div className="welcome-highlight-item">
                <div className="highlight-icon-wrap">
                  <UtensilsCrossed size={20} className="hl-icon" />
                </div>
                <div>
                  <h4>Multi-Cuisine Dining</h4>
                  <p>Authentic North Indian, Tandoori, Chinese, and regional delicacies.</p>
                </div>
              </div>

              <div className="welcome-highlight-item">
                <div className="highlight-icon-wrap">
                  <MapPin size={20} className="hl-icon" />
                </div>
                <div>
                  <h4>Prime Accessible Location</h4>
                  <p>Convenient access to railway station, town center, and highway routes.</p>
                </div>
              </div>

              <div className="welcome-highlight-item">
                <div className="highlight-icon-wrap">
                  <ShieldCheck size={20} className="hl-icon" />
                </div>
                <div>
                  <h4>24/7 Courteous Support</h4>
                  <p>Always available front desk and room service for your every need.</p>
                </div>
              </div>
            </div>

            <div className="welcome-actions">
              <Link to="/about" className="btn-outline-gold">
                <span>DISCOVER OUR STORY</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Visual Editorial Column */}
          <div className="welcome-media-col">
            <div className="welcome-primary-frame">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85" 
                alt="Amontron Hotel Hospitality" 
                className="welcome-main-img"
                loading="lazy"
              />
              <div className="welcome-badge-float">
                <span className="badge-big-text">24/7</span>
                <span className="badge-sub-text">HOSPITALITY DESK</span>
              </div>
            </div>

            <div className="welcome-secondary-frame">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="Amontron Dining Experience" 
                className="welcome-sub-img"
                loading="lazy"
              />
              <div className="welcome-sub-caption">
                <span>FINE DINING RESTAURANT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
