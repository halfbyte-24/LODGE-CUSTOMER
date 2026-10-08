import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HERO_ART_SETS = [
  {
    main: '/images/art1.jpg',
    secondary: '/images/art2.jpg',
    motif: '/images/art4.jpg',
    decor: '/images/art3.jpg',
    title: 'Bengali Folk Heritage'
  },
  {
    main: '/images/art7.jpg',
    secondary: '/images/art5.jpg',
    motif: '/images/art2.jpg',
    decor: '/images/art1.jpg',
    title: 'Traditional Bengali Festivities'
  },
  {
    main: '/images/art5.jpg',
    secondary: '/images/art1.jpg',
    motif: '/images/art3.jpg',
    decor: '/images/art4.jpg',
    title: 'Cultural Rhythm of Bengal'
  }
];

export default function HeroSlider({ onOpenBooking }) {
  const [activeSetIndex, setActiveSetIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add('hero-loaded');
    const interval = setInterval(() => {
      setActiveSetIndex((prev) => (prev + 1) % HERO_ART_SETS.length);
    }, 5500);

    return () => {
      document.body.classList.remove('hero-loaded');
      clearInterval(interval);
    };
  }, []);

  const currentSet = HERO_ART_SETS[activeSetIndex] || HERO_ART_SETS[0];

  return (
    <section className="bengali-hero">
      {/* Background Texture Overlay */}
      <div className="hero-texture-overlay"></div>
      
      {/* Huge subtle background motif */}
      <img 
        src="/images/art7.jpg" 
        className="hero-bg-motif" 
        alt="" 
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      
      <div className="hero-container section-wrapper">
        <div className="hero-grid">
          
          {/* Left Side: Content */}
          <div className="hero-content">
            <span className="hero-eyebrow">YOUR HOME AWAY FROM HOME</span>
            <h1 className="hero-headline">
              <span className="hero-lead-text">Experience</span> <br />
              <span className="text-red-accent">Comfort &amp; Taste</span> <br />
              <span className="hero-green-text">in the Heart of Bengal</span>
            </h1>
            <p className="hero-description">
              Comfortable rooms, delicious traditional food, and a warm Bengali hospitality — all at one place.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn-terracotta"
                onClick={() => onOpenBooking ? onOpenBooking() : null}
              >
                BOOK A ROOM <span>&rarr;</span>
              </button>
              <a href="/restaurant" className="btn-outline-gold">
                VIEW MENU <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Side: Artistic Composition with smooth transition */}
          <div className="hero-artwork-composition">
            {/* Base brush/color splash behind artwork */}
            <div className="artwork-backdrop"></div>
            
            <div key={activeSetIndex} className="hero-artwork-layer crossfade-layer">
              <img 
                src={currentSet.main} 
                className="artwork-element couple-art" 
                alt="Bengali Cultural Art" 
                onError={(e) => { e.currentTarget.src = '/images/art1.jpg'; }}
              />
              
              <img 
                src={currentSet.secondary} 
                className="artwork-element instrument-art" 
                alt="Musical Instrument" 
                onError={(e) => { e.currentTarget.src = '/images/art2.jpg'; }}
              />
              
              <img 
                src={currentSet.motif} 
                className="artwork-element festival-art" 
                alt="Festival Motif" 
                onError={(e) => { e.currentTarget.src = '/images/art4.jpg'; }}
              />
              
              <img 
                src={currentSet.decor} 
                className="artwork-element folk-decor" 
                alt="Folk Decoration" 
                onError={(e) => { e.currentTarget.src = '/images/art3.jpg'; }}
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Bottom Strip spanning full width */}
      <div className="hero-bottom-strip">
        <img 
          src="/images/art6.jpg" 
          alt="Decorative Bengali Border" 
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
    </section>
  );
}
