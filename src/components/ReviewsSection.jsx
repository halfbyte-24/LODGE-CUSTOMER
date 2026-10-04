import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/lodgeData';
import './Reviews.css';

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="section-wrapper">
        
        <div className="section-header">
          <span className="section-tag">INTERNATIONAL ACCLAIM</span>
          <h2 className="section-title">Enduring Impressions</h2>
          <div className="gold-divider" />
          <p className="section-description">
            Critically lauded by global arbiters of luxury architecture and discerning private travelers.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="review-card glass-card">
              <div className="review-card-top">
                <Quote size={32} className="quote-icon text-gold" />
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#cba358" color="#cba358" />
                  ))}
                </div>
              </div>

              <p className="review-quote-text">"{rev.quote}"</p>

              <div className="review-author-meta">
                <strong className="author-name">{rev.author}</strong>
                <span className="author-title">{rev.title}</span>
                <span className="author-pub">{rev.publication} • {rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Bar */}
        <div className="accreditations-banner glass-panel">
          <div className="accred-item">
            <span className="accred-star">★ ★ ★ ★ ★</span>
            <strong>FORBES TRAVEL GUIDE</strong>
            <small>Five-Star Mountain Sanctuary</small>
          </div>
          <div className="accred-divider" />
          <div className="accred-item">
            <span className="accred-key">🔑 🔑 🔑</span>
            <strong>MICHELIN GUIDE 2026</strong>
            <small>Three Michelin Keys of Distinction</small>
          </div>
          <div className="accred-divider" />
          <div className="accred-item">
            <span className="accred-star">★ ★ ★ ★ ★</span>
            <strong>CONDÉ NAST TRAVELER</strong>
            <small>Gold List 2025 Best Alpine Retreat</small>
          </div>
        </div>

      </div>
    </section>
  );
}
