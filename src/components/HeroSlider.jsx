import React, { useEffect } from 'react';
import './HeroSlider.css';

export default function HeroSlider({ onOpenBooking }) {
  useEffect(() => {
    document.body.classList.add('hero-loaded');
    return () => document.body.classList.remove('hero-loaded');
  }, []);

  return (
    <section className="bengali-hero">
      {/* Background Texture Overlay */}
      <div className="hero-texture-overlay"></div>
      
      {/* Huge subtle background motif */}
      <img src="/images/art7.jpg" className="hero-bg-motif" alt="" />
      
      <div className="hero-container section-wrapper">
        <div className="hero-grid">
          
          {/* Left Side: Content */}
          <div className="hero-content">
            <span className="hero-eyebrow">YOUR HOME AWAY FROM HOME</span>
            <h1 className="hero-headline">
              Experience <br />
              <span className="text-terracotta">Comfort & Taste</span> <br />
              in the Heart of Bengal
            </h1>
            <p className="hero-description">
              Comfortable rooms, delicious traditional food, and warm Bengali hospitality — all at one place.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn-terracotta"
                onClick={() => onOpenBooking()}
              >
                BOOK A ROOM <span>&rarr;</span>
              </button>
              <a href="/restaurant" className="btn-outline-gold">
                VIEW MENU <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Side: Artistic Composition */}
          <div className="hero-artwork-composition">
            {/* Base brush/color splash behind artwork */}
            <div className="artwork-backdrop"></div>
            
            <img 
              src="/images/art1.jpg" 
              className="artwork-element couple-art" 
              alt="Bengali Couple" 
            />
            
            <img 
              src="/images/art2.jpg" 
              className="artwork-element instrument-art" 
              alt="Musical Instrument" 
            />
            
            <img 
              src="/images/art4.jpg" 
              className="artwork-element festival-art" 
              alt="Festival Motif" 
            />
            
            <img 
              src="/images/art3.jpg" 
              className="artwork-element folk-decor" 
              alt="Folk Decoration" 
            />
          </div>

        </div>
      </div>
      
      {/* Decorative Bottom Strip spanning full width */}
      <div className="hero-bottom-strip">
        <img src="/images/art6.jpg" alt="Decorative Border" />
      </div>
    </section>
  );
}
