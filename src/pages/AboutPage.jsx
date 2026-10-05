import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, Users, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import './Pages.css';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="inner-page about-page">
      {/* Page Hero */}
      <section className="page-hero-banner about-hero-bg">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">OUR STORY &amp; VALUES</span>
          <h1 className="page-main-title">About AMONTRON</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            A sanctuary of thoughtful hospitality, modern accommodations, and culinary brilliance in the heart of Midnapore.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="about-content-section">
        <div className="section-wrapper">
          <div className="about-split-grid">
            <div className="about-text-col">
              <span className="section-eyebrow">WELCOME TO AMONTRON</span>
              <h2 className="about-heading">Delivering Memorable Experiences &amp; Uncompromised Comfort</h2>
              <div className="gold-divider" />
              <p className="lead-paragraph">
                AMONTRON HOTEL &amp; RESTAURANT was established with a singular vision: to deliver premier hospitality, 
                sparkling clean and comfortable guest rooms, and wholesome multi-cuisine dining to leisure travelers, families, 
                and corporate delegates.
              </p>
              <p className="body-paragraph">
                Our property spans three thoughtfully structured floors featuring 9 well-appointed rooms in Standard, Deluxe, 
                and Super Deluxe categories. Every room is equipped with whisper-quiet split air-conditioning, high-speed Wi-Fi, 
                flat-screen televisions, sanitized linens, and round-the-clock hot water.
              </p>
              <p className="body-paragraph">
                Complementing our rooms is our signature in-house restaurant, known across the region for its authentic Indian, 
                Tandoor, Chinese, and regional specialties. Whether you are visiting for an overnight business stopover, a family 
                celebration, or an extended holiday, our dedicated staff ensures you feel completely at home.
              </p>

              <div className="about-stats-row">
                <div className="stat-card glass-card">
                  <span className="stat-number">3</span>
                  <span className="stat-lbl">Structured Floors</span>
                </div>
                <div className="stat-card glass-card">
                  <span className="stat-number">9</span>
                  <span className="stat-lbl">Boutique Rooms</span>
                </div>
                <div className="stat-card glass-card">
                  <span className="stat-number">24/7</span>
                  <span className="stat-lbl">Attentive Service</span>
                </div>
              </div>
            </div>

            <div className="about-visual-col">
              <div className="about-img-frame glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85" 
                  alt="Amontron Hotel Exterior"
                  className="about-feature-img"
                />
              </div>
              <div className="about-sub-img-frame glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85" 
                  alt="Amontron Restaurant Interior"
                  className="about-sub-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Hospitality */}
      <section className="about-pillars-section">
        <div className="section-wrapper">
          <div className="section-header text-center">
            <span className="section-eyebrow">OUR COMMITMENTS</span>
            <h2 className="section-title">The Amontron Promise</h2>
            <div className="section-title-line center" />
          </div>

          <div className="pillars-grid-3">
            <div className="pillar-box glass-card">
              <ShieldCheck size={28} className="text-gold" />
              <h3>Immaculate Cleanliness</h3>
              <p>Rigorous hygiene and disinfection protocols. Fresh, crisp linens and spotless bathrooms in every room.</p>
            </div>
            <div className="pillar-box glass-card">
              <Heart size={28} className="text-gold" />
              <h3>Warm Personal Care</h3>
              <p>Round-the-clock front desk and prompt room service ensuring every guest requirement is promptly met.</p>
            </div>
            <div className="pillar-box glass-card">
              <Award size={28} className="text-gold" />
              <h3>Exceptional Dining</h3>
              <p>Fresh ingredients, authentic recipes, and hygienic preparation in our in-house multi-cuisine restaurant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="about-cta-strip">
        <div className="section-wrapper text-center">
          <h2>Ready to Experience Amontron?</h2>
          <p>Book your stay directly with us for guaranteed best rates and personalized service.</p>
          <div className="about-cta-btns">
            <Link to="/rooms" className="btn-outline-gold">
              <span>View Accommodations</span>
            </Link>
            <button className="btn-primary" onClick={() => onOpenBooking({})}>
              <span>Book Your Stay</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
