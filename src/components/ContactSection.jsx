import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock,
} from 'lucide-react';
import { RESORT_INFO, FAQS } from '../data/lodgeData';
import { sendContactMessage } from '../lib/supabaseClient';
import './Contact.css';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Room Reservation Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactMessage({
        name,
        email,
        phone,
        subject,
        message
      });
      setIsSubmitting(false);
      setIsSent(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrapper">
        
        <div className="section-header">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title">Contact AMONTRON</h2>
          <div className="gold-divider" />
          <p className="section-description">
            We're here to help — whether you have a question about availability, want to make a reservation, 
            or need assistance planning your visit. Reach us anytime.
          </p>
        </div>

        {/* Location & Contact Cards */}
        <div className="location-cards-grid">
          
          <div className="loc-info-card glass-card">
            <div className="loc-icon-circle">
              <MapPin size={22} className="text-gold" />
            </div>
            <h4>Our Address</h4>
            <p className="loc-bold">{RESORT_INFO.address}</p>
            <p className="loc-sub">{RESORT_INFO.city}, {RESORT_INFO.state} — {RESORT_INFO.pincode}</p>
            <div className="loc-tag">Free parking available on premises</div>
          </div>

          <div className="loc-info-card glass-card">
            <div className="loc-icon-circle">
              <Phone size={22} className="text-gold" />
            </div>
            <h4>Phone & WhatsApp</h4>
            <p className="loc-bold">{RESORT_INFO.phone}</p>
            <p className="loc-sub">Available 24 hours · Call or WhatsApp</p>
            <div className="loc-tag">Front Desk assistance anytime</div>
          </div>

          <div className="loc-info-card glass-card">
            <div className="loc-icon-circle">
              <Mail size={22} className="text-gold" />
            </div>
            <h4>Email Us</h4>
            <p className="loc-bold">{RESORT_INFO.reservationsEmail}</p>
            <p className="loc-sub">{RESORT_INFO.email}</p>
            <div className="loc-tag">We reply within a few hours</div>
          </div>

        </div>

        {/* Check-in / Check-out timings strip */}
        <div className="checkin-strip glass-card" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', padding: '1rem 1.5rem', marginBottom: '2.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} className="text-gold" />
            <span style={{ fontWeight: 600 }}>Check-In:</span>
            <span>{RESORT_INFO.checkInTime}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} className="text-gold" />
            <span style={{ fontWeight: 600 }}>Check-Out:</span>
            <span>{RESORT_INFO.checkOutTime}</span>
          </div>
        </div>

        {/* Form and FAQs Split */}
        <div className="contact-split-grid">
          
          {/* Contact Form */}
          <div className="contact-form-column glass-panel">
            <span className="badge-gold">SEND A MESSAGE</span>
            <h3 className="form-column-title">We'd Love to Hear From You</h3>
            <p className="form-column-desc">
              Fill in the form below for reservations, group bookings, event enquiries, or any other assistance.
            </p>

            {!isSent ? (
              <form onSubmit={handleMessageSubmit} className="concierge-inquiry-form">
                <div className="form-row-2">
                  <div className="input-group">
                    <label className="input-label">Your Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Subir Ghosh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email Address *</label>
                    <input 
                      type="email"
                      required
                      placeholder="yourname@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="input-group">
                    <label className="input-label">Phone / WhatsApp</label>
                    <input 
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option value="Room Reservation Enquiry">Room Reservation Enquiry</option>
                      <option value="Group Booking Request">Group Booking Request</option>
                      <option value="Event & Banquet Enquiry">Event &amp; Banquet Enquiry</option>
                      <option value="Restaurant / Dining Enquiry">Restaurant / Dining Enquiry</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="input-group mb-4">
                  <label className="input-label">Your Message *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us your preferred dates, number of guests, or any special requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>Sending your message...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="sent-success-box">
                <CheckCircle2 size={46} className="text-success mb-2" />
                <h4>Message Received!</h4>
                <p>
                  Thank you, <strong>{name}</strong>. Our team will get back to you at{' '}
                  <strong>{email}</strong> within a few hours.
                </p>
                <button className="btn-outline-gold mt-3" onClick={() => setIsSent(false)}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Interactive FAQs Accordion */}
          <div className="faqs-column">
            <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h3 className="faq-heading">Common Guest Questions</h3>
            
            <div className="faqs-accordion">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                // Support both {q, a} and {question, answer} key shapes
                const question = faq.question || faq.q;
                const answer = faq.answer || faq.a;
                return (
                  <div key={index} className={`faq-item glass-card ${isOpen ? 'faq-item-open' : ''}`}>
                    <button 
                      className="faq-question-btn" 
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{question}</span>
                      <span className="faq-toggle-icon">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p>{answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
