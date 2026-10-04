import React, { useState } from 'react';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ShieldCheck,
  Clock,
  Sparkles
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
  const [subject, setSubject] = useState('Private Reservation Inquiry');
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
          <span className="section-tag">PRIVATE CONCIERGE & ACCESS</span>
          <h2 className="section-title">The Alpine Rendezvous</h2>
          <div className="gold-divider" />
          <p className="section-description">
            Perched at 7,850 feet elevation in the Pennine Alps. Our dedicated private concierge coordinates 
            every facet of your journey from commercial hub to high-altitude sanctuary.
          </p>
        </div>

        {/* Location & Transport Cards */}
        <div className="location-cards-grid">
          
          <div className="loc-info-card glass-card">
            <div className="loc-icon-circle">
              <Compass size={22} className="text-gold" />
            </div>
            <h4>Celestial Coordinates</h4>
            <p className="loc-bold">{RESORT_INFO.coordinates}</p>
            <p className="loc-sub">{RESORT_INFO.location}</p>
            <div className="loc-tag">Private Licensed Helipad Available</div>
          </div>

          <div className="loc-info-card glass-card">
            <div className="loc-icon-circle">
              <Phone size={22} className="text-gold" />
            </div>
            <h4>Phone & WhatsApp</h4>
            <p className="loc-bold">{RESORT_INFO.phone}</p>
            <p className="loc-sub">Available 24 hours | Call or WhatsApp</p>
            <div className="loc-tag">Front Desk assistance anytime</div>
          </div>

          <div className="loc-info-card glass-card">
            <div className="loc-icon-circle">
              <Mail size={22} className="text-gold" />
            </div>
            <h4>Reservations Email</h4>
            <p className="loc-bold">{RESORT_INFO.reservationsEmail}</p>
            <p className="loc-sub">{RESORT_INFO.email}</p>
            <div className="loc-tag">We reply within a few hours</div>
          </div>

        </div>

        {/* Form and FAQs Split */}
        <div className="contact-split-grid">
          
          {/* Direct Concierge Form */}
          <div className="contact-form-column glass-panel">
            <span className="badge-gold">CONTACT US</span>
            <h3 className="form-column-title">Send Us a Message</h3>
            <p className="form-column-desc">
              Request bespoke helicopter transfer, private dining buyouts, or confidential VIP accommodations.
            </p>

            {!isSent ? (
              <form onSubmit={handleMessageSubmit} className="concierge-inquiry-form">
                <div className="form-row-2">
                  <div className="input-group">
                    <label className="input-label">Your Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Lord Julian Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email Address *</label>
                    <input 
                      type="email"
                      required
                      placeholder="julian@sterling.com"
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
                      placeholder="+41 27 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option value="Private Reservation Inquiry">Private Reservation Inquiry</option>
                      <option value="Helicopter Charter Request">Helicopter Charter Request</option>
                      <option value="Chalet Buyout & Private Event">Chalet Buyout & Private Event</option>
                      <option value="Thermal Spa & Wellness Booking">Thermal Spa & Wellness Booking</option>
                      <option value="Sommelier & Wine Cellar Access">Sommelier & Wine Cellar Access</option>
                    </select>
                  </div>
                </div>

                <div className="input-group mb-4">
                  <label className="input-label">Your Inquiry & Special Preferences *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about your desired arrival date, party requirements, or bespoke requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>Dispatching In Confidence...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Dispatch Inquiry to Concierge</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="sent-success-box">
                <CheckCircle2 size={46} className="text-success mb-2" />
                <h4>Inquiry Received in Confidence</h4>
                <p>
                  Thank you, <strong>{name}</strong>. Our Master Concierge has been alerted and will reach 
                  out to <strong>{email}</strong> within two hours.
                </p>
                <button className="btn-outline-gold mt-3" onClick={() => setIsSent(false)}>
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Interactive FAQs Accordion */}
          <div className="faqs-column">
            <span className="section-tag">ESSENTIAL GUEST PROTOCOLS</span>
            <h3 className="faq-heading">Frequently Addressed Inquiries</h3>
            
            <div className="faqs-accordion">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-item glass-card ${isOpen ? 'faq-item-open' : ''}`}>
                    <button 
                      className="faq-question-btn" 
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{faq.question}</span>
                      <span className="faq-toggle-icon">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p>{faq.answer}</p>
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
