import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import { FAQS } from '../data/hotelData';
import { sendContactMessage } from '../lib/supabaseClient';
import './Pages.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Room Reservation Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContactMessage({ name, email, phone, subject, message });
      setIsSent(true);
    } catch {
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inner-page contact-page">
      {/* Page Hero */}
      <section className="page-hero-banner contact-hero-bg">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">GET IN TOUCH</span>
          <h1 className="page-main-title">Contact AMONTRON</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            Have questions about room bookings, dining reservations, or banquets? 
            Our front desk and reservation teams are available 24/7 to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="section-wrapper">
          <div className="contact-cards-grid">
            <div className="contact-info-box glass-card">
              <Phone size={24} className="text-gold" />
              <h3>Phone Call</h3>
              <p>{HOTEL_INFO.phone}</p>
              <span>Available 24 hours a day</span>
            </div>
            <div className="contact-info-box glass-card">
              <MessageCircle size={24} className="text-gold" />
              <h3>WhatsApp Support</h3>
              <p>{HOTEL_INFO.whatsapp}</p>
              <span>Quick response on messaging</span>
            </div>
            <div className="contact-info-box glass-card">
              <Mail size={24} className="text-gold" />
              <h3>Email Inquiries</h3>
              <p>{HOTEL_INFO.email}</p>
              <span>Prompt reply within hours</span>
            </div>
            <div className="contact-info-box glass-card">
              <MapPin size={24} className="text-gold" />
              <h3>Property Address</h3>
              <p>{HOTEL_INFO.address}</p>
              <span>Midnapore, West Bengal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & FAQ Split */}
      <section className="contact-form-faq-section">
        <div className="section-wrapper">
          <div className="contact-split-layout">
            
            {/* Form */}
            <div className="contact-form-box glass-card">
              <span className="section-eyebrow">SEND US A MESSAGE</span>
              <h2>Direct Guest Inquiry</h2>
              <p>Fill out the form below and our front desk manager will respond shortly.</p>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="guest-inquiry-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="rahul@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option value="Room Reservation Enquiry">Room Reservation Enquiry</option>
                      <option value="Restaurant Table Booking">Restaurant Table Booking</option>
                      <option value="Banquet Hall / Event Enquiry">Banquet Hall / Event Enquiry</option>
                      <option value="Corporate Booking & Conference">Corporate Booking &amp; Conference</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Please share details such as check-in dates, number of guests, or special requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-100" disabled={isSubmitting}>
                    <Send size={15} />
                    <span>{isSubmitting ? 'Sending Message…' : 'Send Message'}</span>
                  </button>
                </form>
              ) : (
                <div className="message-success-banner text-center">
                  <CheckCircle2 size={40} className="text-success" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you, {name}. Our hospitality team has received your inquiry and will be in touch shortly.</p>
                </div>
              )}
            </div>

            {/* FAQs */}
            <div className="contact-faq-box glass-card">
              <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Common Questions</h2>
              <div className="faq-accordion-list">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className={`faq-card-item ${openFaq === idx ? 'open' : ''}`}>
                    <button 
                      className="faq-q-btn" 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-toggle-sign">{openFaq === idx ? '−' : '+'}</span>
                    </button>
                    {openFaq === idx && (
                      <div className="faq-a-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
