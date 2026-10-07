import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Camera, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import './Footer.css';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bengali-footer">
      <div className="footer-top-border"></div>
      
      <div className="footer-container section-wrapper">
        <div className="footer-grid">
          
          {/* Brand & Story */}
          <div className="footer-brand-section">
            <h2 className="footer-brand-name">{HOTEL_INFO.name}</h2>
            <div className="footer-brand-subtitle">LODGE & RESTAURANT</div>
            <p className="footer-brand-story">
              Rooted in the rich cultural heritage of Bengal, offering a premium 
              hospitality experience where tradition meets modern comfort.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><Globe size={20} /></a>
              <a href="#" aria-label="Instagram"><Camera size={20} /></a>
              <a href="#" aria-label="Twitter"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rooms">Rooms & Suites</Link></li>
              <li><Link to="/restaurant">Restaurant</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-section">
            <h3 className="footer-heading">Reach Us</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>{HOTEL_INFO.address.street}, {HOTEL_INFO.address.city}, {HOTEL_INFO.address.state} - {HOTEL_INFO.address.pinCode}</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span><a href={`tel:${HOTEL_INFO.phone}`}>{HOTEL_INFO.phoneDisplay}</a></span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span><a href={`mailto:${HOTEL_INFO.email}`}>{HOTEL_INFO.email}</a></span>
              </li>
            </ul>
            <button className="btn-outline-gold mt-4" onClick={() => onOpenBooking()}>
              BOOK YOUR STAY
            </button>
          </div>

          {/* Decoration */}
          <div className="footer-decoration">
            <img src="/images/art6.jpg" alt="Bengali Folk Art Decoration" />
          </div>

        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
        <p className="footer-credits">Designed with Bengali Heritage</p>
      </div>
    </footer>
  );
}
