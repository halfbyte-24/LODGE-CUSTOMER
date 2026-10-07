import React from 'react';
import { Wind, Wifi, UtensilsCrossed, Clock, Sparkles, Car, Zap, Users, ShieldCheck, Droplets } from 'lucide-react';
import { FACILITIES } from '../data/hotelData';
import './FacilitiesSection.css';

export default function FacilitiesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wind': return <Wind size={28} />;
      case 'Wifi': return <Wifi size={28} />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={28} />;
      case 'Clock': return <Clock size={28} />;
      case 'Car': return <Car size={28} />;
      case 'Zap': return <Zap size={28} />;
      case 'Users': return <Users size={28} />;
      case 'ShieldCheck': return <ShieldCheck size={28} />;
      case 'Droplets': return <Droplets size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <section className="bengali-facilities-section" id="facilities">
      <div className="section-wrapper">
        
        <div className="facilities-header">
          <span className="section-eyebrow">HOSPITALITY & CONVENIENCE</span>
          <h2 className="section-title">Facilities & Amenities</h2>
          <div className="section-title-line" />
          <p className="facilities-description">
            Thoughtfully planned services ensuring every comfort during your stay. We blend 
            modern amenities with our traditional warmth.
          </p>
        </div>

        <div className="facilities-grid">
          {FACILITIES.map((facility) => (
            <div key={facility.id} className="bengali-facility-card">
              <div className="facility-icon">
                {getIcon(facility.icon)}
              </div>
              <h3 className="facility-name">{facility.name}</h3>
              <p className="facility-desc">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="facilities-decoration">
          <img src="/images/art4.jpg" alt="Folk art dancer" />
        </div>

      </div>
    </section>
  );
}
