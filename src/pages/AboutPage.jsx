import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, ArrowRight } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="bengali-page">
      {/* Editorial Page Hero */}
      <section className="bengali-page-hero editorial-hero">
        <div className="hero-texture-overlay"></div>
        <img src="/images/art7.jpg" className="editorial-hero-bg" alt="Alpana Motif" />
        
        <div className="section-wrapper text-center relative z-2">
          <span className="page-eyebrow">ROOTED IN BENGAL</span>
          <h1 className="page-title">A Place of Warmth, Tradition & Hospitality</h1>
          <p className="page-description">
            A sanctuary of thoughtful hospitality, modern accommodations, and culinary brilliance in the heart of Midnapore.
          </p>
        </div>
      </section>

      {/* Main Story & Values - Editorial Layout */}
      <section className="editorial-about-story">
        <img src="/images/art4.jpg" className="about-decor-dancer left-dancer" alt="Folk Dancer" />
        <img src="/images/art4.jpg" className="about-decor-dancer right-dancer" alt="Folk Dancer" />
        
        <div className="section-wrapper">
          <div className="editorial-about-grid">
            <div className="about-editorial-text">
              <span className="section-eyebrow">WELCOME TO AMONTRON</span>
              <h2 className="about-heading">Delivering Memorable Experiences & Uncompromised Comfort</h2>
              
              <p className="about-paragraph lead">
                AMONTRON HOTEL & RESTAURANT was established with a singular vision: to deliver premier hospitality, 
                sparkling clean and comfortable guest rooms, and wholesome multi-cuisine dining to leisure travelers, families, 
                and corporate delegates.
              </p>
              <p className="about-paragraph">
                Our property spans three thoughtfully structured floors featuring 9 well-appointed rooms in Standard, Deluxe, 
                and Super Deluxe categories. Every room is equipped with whisper-quiet split air-conditioning, high-speed Wi-Fi, 
                flat-screen televisions, sanitized linens, and round-the-clock hot water.
              </p>
              <p className="about-paragraph">
                Complementing our rooms is our signature in-house restaurant, known across the region for its authentic Indian, 
                Tandoor, Chinese, and regional specialties. Whether you are visiting for an overnight business stopover, a family 
                celebration, or an extended holiday, our dedicated staff ensures you feel completely at home.
              </p>

              <div className="about-stats-grid">
                <div className="editorial-stat-box">
                  <span className="stat-num">3</span>
                  <span className="stat-label">Floors</span>
                </div>
                <div className="editorial-stat-box">
                  <span className="stat-num">9</span>
                  <span className="stat-label">Rooms</span>
                </div>
                <div className="editorial-stat-box">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label">Service</span>
                </div>
              </div>
            </div>

            <div className="about-editorial-images">
              <div className="editorial-image-frame main-art-frame">
                <img src="/images/art5.jpg" alt="Bengali Couple" />
              </div>
              <img src="/images/art3.jpg" className="editorial-art-overlay" alt="Decorative Overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Hospitality - Editorial */}
      <section className="editorial-pillars-section">
        <div className="section-wrapper">
          <div className="text-center mb-10">
            <span className="section-eyebrow">OUR COMMITMENTS</span>
            <h2 className="section-title">The Amontron Promise</h2>
          </div>

          <div className="pillars-grid">
            <div className="editorial-pillar-card">
              <div className="pillar-icon-wrap">
                <ShieldCheck size={28} className="text-terracotta" />
              </div>
              <h3>Immaculate Cleanliness</h3>
              <p>Rigorous hygiene and disinfection protocols. Fresh, crisp linens and spotless bathrooms in every room.</p>
            </div>
            <div className="editorial-pillar-card">
              <div className="pillar-icon-wrap">
                <Heart size={28} className="text-terracotta" />
              </div>
              <h3>Warm Personal Care</h3>
              <p>Round-the-clock front desk and prompt room service ensuring every guest requirement is promptly met.</p>
            </div>
            <div className="editorial-pillar-card">
              <div className="pillar-icon-wrap">
                <Award size={28} className="text-terracotta" />
              </div>
              <h3>Exceptional Dining</h3>
              <p>Fresh ingredients, authentic recipes, and hygienic preparation in our in-house multi-cuisine restaurant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-cta-banner">
        <img src="/images/art6.jpg" className="cta-bg-art" alt=""/>
        <div className="cta-overlay"></div>
        <div className="section-wrapper text-center relative z-2">
          <h2 className="cta-heading">Ready to Experience Amontron?</h2>
          <p className="cta-desc">Book your stay directly with us for guaranteed best rates and personalized service.</p>
          <div className="cta-actions">
            <Link to="/rooms" className="btn-outline-gold">VIEW ACCOMMODATIONS</Link>
            <button className="btn-terracotta" onClick={() => onOpenBooking({})}>
              BOOK YOUR STAY <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
