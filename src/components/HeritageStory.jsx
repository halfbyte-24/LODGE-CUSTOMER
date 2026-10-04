import React from 'react';
import { ShieldCheck, Compass, Trees, Sun, Award } from 'lucide-react';
import { RESORT_INFO } from '../data/lodgeData';
import './Story.css';

export default function HeritageStory() {
  return (
    <section id="story" className="story-section">
      <div className="section-wrapper">
        
        <div className="story-grid-layout">
          
          {/* Narrative Column */}
          <div className="story-text-column">
            <span className="section-tag">ARCHITECTURAL HERITAGE</span>
            <h2 className="story-main-heading">Monolithic Simplicity in the High Alps</h2>
            <div className="gold-divider story-left-divider" />
            
            <p className="story-lead-p">
              Founded on the belief that true luxury is silence, space, and unbroken communion with the wild, 
              Aura Lodge was conceived by Pritzker-winning alpine architects who spent four years mapping the celestial angles, 
              wind currents, and snow drifts at 7,850 feet elevation.
            </p>

            <p className="story-body-p">
              Every timber beam is reclaimed Swiss larch, charred using the ancient Japanese <em>yakisugi</em> method 
              to withstand extreme mountain freezes without chemical varnishes. The foundation is rooted directly into 
              prehistoric gneiss granite, creating an acoustic sanctuary where the howling blizzards outside dissolve into peaceful quietude.
            </p>

            {/* Sustainability & Pillars */}
            <div className="story-pillars-grid">
              <div className="pillar-item">
                <Trees size={22} className="text-gold" />
                <div>
                  <strong>Zero-Carbon Footprint</strong>
                  <span>100% heated by subterranean geothermal loops & high-altitude solar glazing.</span>
                </div>
              </div>

              <div className="pillar-item">
                <Sun size={22} className="text-gold" />
                <div>
                  <strong>Pure Glacial Aquifer</strong>
                  <span>Every tap and thermal pool flows with natural, untreated mineral snowmelt.</span>
                </div>
              </div>

              <div className="pillar-item">
                <ShieldCheck size={22} className="text-gold" />
                <div>
                  <strong>Heritage Preservation</strong>
                  <span>5% of every reservation funds the preservation of endangered alpine flora.</span>
                </div>
              </div>
            </div>

            {/* Awards Strip */}
            <div className="story-awards-bar">
              {RESORT_INFO.awards.map((award, i) => (
                <div key={i} className="award-badge-item">
                  <Award size={14} className="text-gold" />
                  <span>{award}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Visual Showcase Column */}
          <div className="story-visual-column">
            <div className="story-media-main glass-card">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" 
                alt="Aura Lodge Architecture at Twilight" 
                className="story-main-img" 
              />
              <div className="story-img-badge">
                <span className="elev-number">7,850 FT</span>
                <span className="elev-label">ELEVATION SANCTUARY</span>
              </div>
            </div>

            <div className="story-media-sub glass-card">
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" 
                alt="Subterranean Wine Vault" 
                className="story-sub-img" 
              />
              <div className="story-sub-overlay">
                <strong>Handcrafted Granite Vaults</strong>
                <span>4,000+ Vintage Bottles Carved in Rock</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
