import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowUp,
  Hotel,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/lodgeData';
import { subscribeNewsletter } from '../lib/supabaseClient';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Home',               to: '/' },
  { label: 'About',              to: '/about' },
  { label: 'Accommodation',      to: '/rooms' },
  { label: 'Service & Amenities',to: '/facilities' },
  { label: 'Dining',             to: '/restaurant' },
  { label: 'Events & Offers',    to: '/events' },
  { label: 'Gallery',            to: '/gallery' },
  { label: 'Location',           to: '/location' },
  { label: 'Contact',            to: '/contact' },
];

export default function Footer({ onOpenBooking }) {
  const [email, setEmail]           = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [busy, setBusy]             = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setBusy(true);
    try {
      await subscribeNewsletter(email.trim());
      setSubscribed(true);
    } catch {
      setSubscribed(true); // still show success to user
    } finally {
      setBusy(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer" role="contentinfo">

      {/* ── Newsletter strip ── */}
      <div className="footer-newsletter-strip">
        <div className="footer-container newsletter-inner">
          <div className="newsletter-text">
            <h3>Stay Updated</h3>
            <p>Get exclusive offers and news from AMONTRON HOTEL & RESTAURANT.</p>
          </div>
          {!subscribed ? (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" className="footer-subscribe-btn" disabled={busy}>
                <span>{busy ? 'Subscribing…' : 'Subscribe'}</span>
                <Send size={14} />
              </button>
            </form>
          ) : (
            <div className="sub-success">
              <CheckCircle2 size={18} />
              <span>Thank you! You're now subscribed.</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="footer-main">
        <div className="footer-container footer-grid">

          {/* Brand column */}
          <div className="footer-col footer-brand-col">
            <div className="footer-logo">
              <Hotel size={30} className="footer-logo-icon" />
              <div className="footer-logo-text">
                <span className="footer-brand-name">AMONTRON</span>
                <span className="footer-brand-sub">HOTEL &amp; RESTAURANT</span>
              </div>
            </div>

            <p className="footer-description">
              {HOTEL_INFO.description}
            </p>

            <div className="footer-contact-list">
              <a href={`tel:${HOTEL_INFO.phone}`} className="footer-contact-item">
                <Phone size={15} />
                <span>{HOTEL_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp?.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
              <a href={`mailto:${HOTEL_INFO.email}`} className="footer-contact-item">
                <Mail size={15} />
                <span>{HOTEL_INFO.email}</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={15} />
                <span>{HOTEL_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/facilities">AC Rooms</a></li>
              <li><a href="/restaurant">Restaurant &amp; Dining</a></li>
              <li><a href="/facilities">Conference Hall</a></li>
              <li><a href="/facilities">Free Parking</a></li>
              <li><a href="/facilities">24/7 Room Service</a></li>
              <li><a href="/facilities">Laundry</a></li>
              <li><a href="/events">Events &amp; Banquet</a></li>
            </ul>
          </div>

          {/* Book Now */}
          <div className="footer-col">
            <h4 className="footer-heading">Reservations</h4>
            <p className="footer-reserve-text">
              Book directly with us for the best rates and personalised service.
            </p>
            <button
              className="footer-book-btn"
              onClick={() => typeof onOpenBooking === 'function' && onOpenBooking()}
            >
              Online Reservation
            </button>
            <div className="footer-timing">
              <p><strong>Check-In:</strong> {HOTEL_INFO.checkInTime}</p>
              <p><strong>Check-Out:</strong> {HOTEL_INFO.checkOutTime}</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} AMONTRON HOTEL &amp; RESTAURANT. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/contact">Privacy Policy</a>
            <span>•</span>
            <a href="/contact">Terms &amp; Conditions</a>
          </div>
          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

    </footer>
  );
}
