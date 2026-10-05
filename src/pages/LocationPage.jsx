import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import './Pages.css';

export default function LocationPage() {
  return (
    <div className="inner-page location-page">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">DIRECTIONS &amp; ACCESS</span>
          <h1 className="page-main-title">Location &amp; How to Reach</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            Conveniently situated in Midnapore, West Bengal — easily accessible from the railway station, 
            bus terminus, and major highways.
          </p>
        </div>
      </section>

      {/* Main Location Content */}
      <section className="location-content-section">
        <div className="section-wrapper">
          <div className="location-split-grid">
            
            {/* Contact & Landmarks */}
            <div className="location-info-col">
              <div className="location-address-card glass-card">
                <MapPin size={28} className="text-gold" />
                <h3>AMONTRON HOTEL &amp; RESTAURANT</h3>
                <p className="loc-addr-text">{HOTEL_INFO.address}</p>
                <div className="loc-contact-strip">
                  <div>
                    <Phone size={16} className="text-gold" />
                    <span>{HOTEL_INFO.phone}</span>
                  </div>
                  <div>
                    <Mail size={16} className="text-gold" />
                    <span>{HOTEL_INFO.email}</span>
                  </div>
                </div>
              </div>

              <div className="transit-landmarks-card glass-card">
                <h3>Key Transit Landmarks</h3>
                <div className="transit-list">
                  <div className="transit-item">
                    <Navigation size={18} className="text-gold" />
                    <div>
                      <strong>Midnapore Railway Station</strong>
                      <p>Approx. 10 - 15 minutes by auto or taxi</p>
                    </div>
                  </div>
                  <div className="transit-item">
                    <Navigation size={18} className="text-gold" />
                    <div>
                      <strong>Central Bus Terminus</strong>
                      <p>Approx. 8 - 10 minutes drive</p>
                    </div>
                  </div>
                  <div className="transit-item">
                    <Navigation size={18} className="text-gold" />
                    <div>
                      <strong>Kolkata Airport (CCU)</strong>
                      <p>Approx. 2.5 - 3 hours via National Highway 16</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkin-timing-card glass-card">
                <Clock size={20} className="text-gold" />
                <div>
                  <strong>Check-in &amp; Check-out Schedule</strong>
                  <p>Check-in: <strong>{HOTEL_INFO.checkInTime}</strong> | Check-out: <strong>{HOTEL_INFO.checkOutTime}</strong></p>
                  <span>24-Hour reception desk available for late arrivals</span>
                </div>
              </div>
            </div>

            {/* Google Map Embed Frame */}
            <div className="location-map-col">
              <div className="map-frame-box glass-card">
                <iframe
                  title="Amontron Hotel Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118029.0886884025!2d87.24151741695286!3d22.422204918731308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440263f350c9%3A0xb3f5ea5582f3ef65!2sMidnapore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-caption">
                  <CheckCircle2 size={16} className="text-success" />
                  <span>Ample on-site secure vehicle parking available for guests</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
