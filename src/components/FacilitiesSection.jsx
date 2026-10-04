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
  Droplets 
} from 'lucide-react';
import { FACILITIES } from '../data/hotelData';
import './FacilitiesSection.css';

export default function FacilitiesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wind': return <Wind size={24} />;
      case 'Wifi': return <Wifi size={24} />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={24} />;
      case 'Clock': return <Clock size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'Car': return <Car size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Users': return <Users size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Droplets': return <Droplets size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section className="facilities-section" id="facilities">
      <div className="section-wrapper">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">HOSPITALITY & CONVENIENCE</span>
          <h2 className="section-title">Facilities & Amenities</h2>
          <div className="section-title-line" />
          <p className="section-subtitle">
            Thoughtfully planned services ensuring every comfort during your stay at Amontron Hotel & Restaurant.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-hotel-grid">
          {FACILITIES.map((facility) => (
            <div key={facility.id} className="facility-card">
              <div className="facility-icon-circle">
                {getIcon(facility.icon)}
              </div>
              <h3 className="facility-name">{facility.name}</h3>
              <p className="facility-desc">{facility.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
