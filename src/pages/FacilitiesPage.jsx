import React from 'react';
import { 
  Wind, 
  Wifi, 
  UtensilsCrossed, 
  Clock, 
  Sparkles, 
  Car, 
  Zap, 
  Users, 
  ShieldCheck, 
  Droplets,
  ArrowRight
} from 'lucide-react';
import { FACILITIES } from '../data/hotelData';
import './Pages.css';

export default function FacilitiesPage({ onOpenBooking }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wind': return <Wind size={28} className="text-gold" />;
      case 'Wifi': return <Wifi size={28} className="text-gold" />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={28} className="text-gold" />;
      case 'Clock': return <Clock size={28} className="text-gold" />;
      case 'Sparkles': return <Sparkles size={28} className="text-gold" />;
      case 'Car': return <Car size={28} className="text-gold" />;
      case 'Zap': return <Zap size={28} className="text-gold" />;
      case 'Users': return <Users size={28} className="text-gold" />;
      case 'ShieldCheck': return <ShieldCheck size={28} className="text-gold" />;
      case 'Droplets': return <Droplets size={28} className="text-gold" />;
      default: return <Sparkles size={28} className="text-gold" />;
    }
  };

  return (
    <div className="inner-page facilities-page">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">HOSPITALITY &amp; CONVENIENCE</span>
          <h1 className="page-main-title">Facilities &amp; Amenities</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            Thoughtfully planned amenities and seamless services ensuring every comfort and convenience throughout your stay.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="facilities-content-section">
        <div className="section-wrapper">
          <div className="facilities-extended-grid">
            {FACILITIES.map((fac) => (
              <div key={fac.id} className="facility-extended-card glass-card">
                <div className="facility-icon-wrap">
                  {getIcon(fac.icon)}
                </div>
                <div className="facility-card-info">
                  <h3 className="facility-title">{fac.name}</h3>
                  <p className="facility-detail">{fac.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="facilities-highlights-strip">
        <div className="section-wrapper">
          <div className="highlight-banner glass-card">
            <div className="highlight-text">
              <h2>Need a Custom Setup for Your Group or Family?</h2>
              <p>Contact our front desk team for conference arrangements, group bookings, or special dining requests.</p>
            </div>
            <div className="highlight-action">
              <button className="btn-primary" onClick={() => onOpenBooking({})}>
                <span>Make a Reservation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
