import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplet, 
  Wind, 
  Sun, 
  Check, 
  Clock, 
  Heart,
  ArrowRight
} from 'lucide-react';
import './Wellness.css';

export default function WellnessSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('hydrotherapy');

  const spaTreatments = [
    {
      id: "alpine-arnica",
      title: "Glacial Arnica & Obsidian Stone Therapy",
      duration: "90 Minutes",
      price: "$340",
      description: "Heated basalt river stones anointed with hand-harvested Valais arnica and pine resin to release deep muscle tension after high-altitude skiing."
    },
    {
      id: "botanical-detox",
      title: "Wild Juniper & Birch Leaf Herbal Wrap",
      duration: "75 Minutes",
      price: "$290",
      description: "Gentle lymphatic dry-brushing followed by an intoxicating warm wrap of foraged alpine herbs, organic clay, and mountain birch oils."
    },
    {
      id: "cellular-facial",
      title: "Swiss Edelweiss Cellular Radiance Facial",
      duration: "60 Minutes",
      price: "$310",
      description: "Potent high-altitude Edelweiss stem cells and cryo-sculpting oxygen spheres restore moisture barrier and luminous alpine radiance."
    }
  ];

  return (
    <section id="wellness" className="wellness-section">
      <div className="section-wrapper">
        
        <div className="section-header">
          <span className="section-tag">SANCTUARY OF THE ELEMENTS</span>
          <h2 className="section-title">The Alpine Thermal Spa & Springs</h2>
          <div className="gold-divider" />
          <p className="section-description">
            Subterranean thermal grottos heated naturally by deep alpine aquifers to 38°C. 
            Immerse yourself in mineral-dense mountain waters while heavy powder snow drifts across the granite summits.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="wellness-feature-grid">
          
          <div className="wellness-highlight-card glass-card">
            <div className="highlight-icon-box">
              <Droplet size={26} className="text-gold" />
            </div>
            <h3>Heated Mineral Infinity Pool</h3>
            <p>
              Suspended over the valley edge at 38°C (100°F). Pure thermal mineral water rich in magnesium, calcium, and sulfur for accelerated cellular recovery.
            </p>
            <ul className="highlight-list">
              <li><Check size={14} className="text-gold" /> Constant thermal circulation</li>
              <li><Check size={14} className="text-gold" /> Panoramic Matterhorn ridge views</li>
              <li><Check size={14} className="text-gold" /> Evening firepit illumination</li>
            </ul>
          </div>

          <div className="wellness-highlight-card glass-card">
            <div className="highlight-icon-box">
              <Wind size={26} className="text-gold" />
            </div>
            <h3>Obsidian Steam & Cedar Saunas</h3>
            <p>
              Hand-built Finnish dry saunas lined with 200-year-old aged cedarwood, alongside black obsidian steam grottos infused with mountain pine and eucalyptus vapor.
            </p>
            <ul className="highlight-list">
              <li><Check size={14} className="text-gold" /> 90°C Finnish Dry Birch Sauna</li>
              <li><Check size={14} className="text-gold" /> 45°C 100% Humidity Herbal Steam</li>
              <li><Check size={14} className="text-gold" /> Cryo Ice Fall & Cold Plunge (8°C)</li>
            </ul>
          </div>

          <div className="wellness-highlight-card glass-card">
            <div className="highlight-icon-box">
              <Sun size={26} className="text-gold" />
            </div>
            <h3>Acoustic Sound Sanctum</h3>
            <p>
              Soundproof cocoon lined with acoustic charred timber. Daily restorative Tibetan bowl meditations, guided breathwork, and zero-gravity waterbeds.
            </p>
            <ul className="highlight-list">
              <li><Check size={14} className="text-gold" /> 432 Hz Solfeggio sound immersion</li>
              <li><Check size={14} className="text-gold" /> Handcrafted Himalayan bronze bowls</li>
              <li><Check size={14} className="text-gold" /> High-altitude sleep optimization</li>
            </ul>
          </div>

        </div>

        {/* Treatments Showcase */}
        <div className="wellness-treatments-box glass-panel">
          <div className="treatments-header">
            <div>
              <span className="badge-gold">SPA MENU HIGHLIGHTS</span>
              <h3 className="treatments-title">Signature Holistic Therapies</h3>
            </div>
            <button className="btn-primary" onClick={() => onOpenBooking()}>
              <Heart size={15} />
              <span>Book Spa Stay</span>
            </button>
          </div>

          <div className="treatments-list">
            {spaTreatments.map((t) => (
              <div key={t.id} className="treatment-item">
                <div className="treatment-top">
                  <h4 className="treatment-name">{t.title}</h4>
                  <div className="treatment-dots" />
                  <div className="treatment-price-wrap">
                    <span className="t-duration">{t.duration}</span>
                    <span className="t-price">{t.price}</span>
                  </div>
                </div>
                <p className="treatment-desc">{t.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
