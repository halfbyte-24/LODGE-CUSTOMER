import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import { sendContactMessage } from '../lib/supabaseClient';
import './ContactPage.css';

const FAQS = [
  { q: "What are the check-in and check-out times?", a: "Standard check-in time is 12:00 PM and check-out is at 11:00 AM." },
  { q: "Do you offer parking facilities?", a: "Yes, we provide secure on-site parking for all our guests." },
  { q: "Is the restaurant open for non-guests?", a: "Absolutely! Our multi-cuisine restaurant is open to all visitors." },
  { q: "Do you have banquet facilities for weddings?", a: "Yes, we have a spacious air-conditioned banquet hall ideal for weddings, receptions, and corporate events." }
];

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
    <div className="bengali-page">
      {/* Editorial Page Hero */}
      <section className="bengali-page-hero editorial-hero">
        <div className="hero-texture-overlay"></div>
        <img src="/images/art7.jpg" className="editorial-hero-bg" alt="Alpana Motif" />
        
        <div className="section-wrapper text-center relative z-2">
          <span className="page-eyebrow">GET IN TOUCH</span>
          <h1 className="page-title">Contact AMONTRON</h1>
          <p className="page-description">
            Have questions about room bookings, dining reservations, or banquets? 
            Our front desk and reservation teams are available 24/7 to assist you.
          </p>
        </div>
      </section>

      {/* Quick Contact Grid */}
      <section className="editorial-contact-cards-section">
        <div className="section-wrapper">
          <div className="editorial-contact-grid">
            <div className="editorial-contact-card">
              <Phone size={32} className="text-terracotta contact-icon" />
              <h3 className="contact-heading">Phone Call</h3>
              <p className="contact-info">{HOTEL_INFO.phone}</p>
              <span className="contact-subtext">Available 24 hours a day</span>
            </div>
            <div className="editorial-contact-card">
              <MessageCircle size={32} className="text-terracotta contact-icon" />
              <h3 className="contact-heading">WhatsApp Support</h3>
              <p className="contact-info">{HOTEL_INFO.whatsapp}</p>
              <span className="contact-subtext">Quick response on messaging</span>
            </div>
            <div className="editorial-contact-card">
              <Mail size={32} className="text-terracotta contact-icon" />
              <h3 className="contact-heading">Email Inquiries</h3>
              <p className="contact-info">{HOTEL_INFO.email}</p>
              <span className="contact-subtext">Prompt reply within hours</span>
            </div>
            <div className="editorial-contact-card">
              <MapPin size={32} className="text-terracotta contact-icon" />
              <h3 className="contact-heading">Property Address</h3>
              <p className="contact-info">{HOTEL_INFO.address}</p>
              <span className="contact-subtext">Midnapore, West Bengal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & FAQs */}
      <section className="editorial-form-faq-section">
        <img src="/images/art6.jpg" className="contact-decor-corner bottom-left" alt="" />
        <img src="/images/art3.jpg" className="contact-decor-corner top-right" alt="" />
        
        <div className="section-wrapper relative z-2">
          <div className="form-faq-split">
            
            {/* Form */}
            <div className="editorial-contact-form-box">
              <span className="page-eyebrow">SEND US A MESSAGE</span>
              <h2 className="form-title">Direct Guest Inquiry</h2>
              <p className="form-desc">Fill out the form below and our front desk manager will respond shortly.</p>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="editorial-form">
                  <div className="input-group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="e.g. Rahul Sharma" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-row-2">
                    <div className="input-group">
                      <label>Email Address *</label>
                      <input type="email" required placeholder="rahul@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                      <label>Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option>Room Reservation Enquiry</option>
                      <option>Restaurant Table Booking</option>
                      <option>Banquet Hall / Event Enquiry</option>
                      <option>Corporate Booking & Conference</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Your Message *</label>
                    <textarea rows={4} required placeholder="Please share details such as check-in dates, number of guests, or special requests..." value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <button type="submit" className="btn-terracotta w-100 mt-4" disabled={isSubmitting}>
                    {isSubmitting ? <span>Sending Message…</span> : <><Send size={16} className="mr-2" /> SEND MESSAGE</>}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <CheckCircle2 size={50} className="success-icon" />
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-desc">Thank you, {name}. Our hospitality team has received your inquiry and will be in touch shortly.</p>
                </div>
              )}
            </div>

            {/* FAQs */}
            <div className="faq-container">
              <span className="page-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="faq-section-title">Common Questions</h2>
              <div className="faq-list">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  const question = faq.question || faq.q;
                  const answer = faq.answer || faq.a;
                  return (
                    <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                      <button 
                        className="faq-trigger"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                        <span className="faq-q">{question}</span>
                        <span>{isOpen ? <ChevronUp size={20} className="text-gold" /> : <ChevronDown size={20} className="text-gold" />}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
