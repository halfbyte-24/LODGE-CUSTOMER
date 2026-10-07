import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WelcomeIntro.css';

export default function WelcomeIntro() {
  return (
    <section className="bengali-about-preview">
      {/* Background paper texture & alpana */}
      <div className="about-bg-texture"></div>
      <img src="/images/art7.jpg" className="about-bg-alpana" alt="" />
      
      <div className="section-wrapper">
        <div className="about-editorial-layout">
          
          {/* Left: Artwork Blend */}
          <div className="about-left-art">
            <img src="/images/art5.jpg" className="about-art-dancer" alt="Bengali Folk Dancer" />
            <img src="/images/art2.jpg" className="about-art-instrument" alt="Musical Instrument" />
          </div>

          {/* Center: Content */}
          <div className="about-center-content">
            <span className="section-eyebrow">ABOUT US</span>
            <h2 className="section-title">A Place Rooted <br /> in Bengali Hospitality</h2>
            
            <p className="about-description">
              Welcome to a sanctuary where the timeless elegance of Bengali culture 
              meets modern comfort. Our lodge is designed to immerse you in the 
              warmth of traditional hospitality, offering a serene escape adorned 
              with authentic folk art and rich heritage.
            </p>
            
            <Link to="/about" className="about-cta-link">
              OUR STORY <span className="cta-arrow">&rarr;</span>
            </Link>
          </div>

          {/* Right: Editorial Image Collage */}
          <div className="about-right-collage">
            <div className="editorial-frame main-frame">
              <img src="/images/art1.jpg" alt="Bengali Couple" />
            </div>
            <div className="editorial-frame accent-frame">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80" alt="Lodge Interior" />
            </div>
            <img src="/images/art3.jpg" className="collage-decor-motif" alt="Motif" />
          </div>

        </div>
      </div>
    </section>
  );
}
