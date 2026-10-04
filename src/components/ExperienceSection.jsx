import React, { useState } from 'react';
import { 
  Compass, 
  Clock, 
  Mountain, 
  Sparkles, 
  Calendar, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Send,
  X
} from 'lucide-react';
import { EXPERIENCES } from '../data/lodgeData';
import { sendContactMessage } from '../lib/supabaseClient';
import './Experiences.css';

export default function ExperienceSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedExp, setSelectedExp] = useState(null);
  const [expModalOpen, setExpModalOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [expSuccess, setExpSuccess] = useState(false);

  const categories = ['All', 'Adventure', 'Wellness', 'Romance & Wonder', 'Culinary', 'Mindfulness'];

  const filteredExperiences = activeCategory === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.category === activeCategory);

  const handleOpenExpModal = (exp) => {
    setSelectedExp(exp);
    setExpModalOpen(true);
    setExpSuccess(false);
  };

  const handleExpInquirySubmit = async (e) => {
    e.preventDefault();
    await sendContactMessage({
      name: guestName,
      email: guestEmail,
      subject: `Experience Booking Request: ${selectedExp.title}`,
      message: `Requesting to reserve ${selectedExp.title} for preferred date: ${preferredDate}`
    });
    setExpSuccess(true);
  };

  return (
    <section id="experiences" className="experiences-section">
      <div className="section-wrapper">
        
        <div className="section-header">
          <span className="section-tag">BESPOKE DISCOVERY</span>
          <h2 className="section-title">Curated Alpine Expeditions</h2>
          <div className="gold-divider" />
          <p className="section-description">
            From UIAGM helicopter-guided glacial descents to nocturnal stargazing sessions with our resident astrophysicist. 
            Immerse yourself in extraordinary high-altitude wonders.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="exp-filters-wrap">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`exp-cat-btn ${activeCategory === cat ? 'exp-btn-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="experiences-grid">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="experience-card glass-card">
              
              <div className="exp-media-wrap">
                <img src={exp.image} alt={exp.title} className="exp-img" loading="lazy" />
                <div className="exp-gradient-overlay" />
                <span className="exp-badge-top">{exp.badge}</span>
                <span className="exp-cat-chip">{exp.category}</span>
              </div>

              <div className="exp-body">
                <h3 className="exp-title">{exp.title}</h3>
                
                <div className="exp-meta-row">
                  <div className="exp-meta-item">
                    <Clock size={13} className="text-gold" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="exp-meta-item">
                    <Mountain size={13} className="text-gold" />
                    <span>{exp.difficulty}</span>
                  </div>
                  <div className="exp-meta-item">
                    <Calendar size={13} className="text-gold" />
                    <span>{exp.season}</span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-card-footer">
                  <button 
                    className="btn-outline-gold exp-cta-btn"
                    onClick={() => handleOpenExpModal(exp)}
                  >
                    <span>Reserve Expedition</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Experience Request Modal */}
      {expModalOpen && selectedExp && (
        <div className="modal-overlay" onClick={() => setExpModalOpen(false)}>
          <div className="modal-content exp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setExpModalOpen(false)}>
              <X size={20} />
            </button>

            {!expSuccess ? (
              <form onSubmit={handleExpInquirySubmit} className="exp-form-container">
                <span className="badge-gold">ALPINE EXPEDITION CONCIERGE</span>
                <h2 className="exp-modal-title">{selectedExp.title}</h2>
                <p className="exp-modal-sub">
                  Our private expedition team coordinates certified guides, equipment, and tailored mountain safety.
                </p>

                <div className="exp-summary-box">
                  <div><strong>Duration:</strong> {selectedExp.duration}</div>
                  <div><strong>Season:</strong> {selectedExp.season}</div>
                  <div><strong>Level:</strong> {selectedExp.difficulty}</div>
                </div>

                <div className="form-row-2">
                  <div className="input-group">
                    <label className="input-label">Preferred Date *</label>
                    <input 
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Guest Full Name *</label>
                    <input 
                      type="text"
                      placeholder="e.g. Marcus Sterling"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="input-group mb-4">
                  <label className="input-label">Guest Email Address *</label>
                  <input 
                    type="email"
                    placeholder="marcus@sterling.ch"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="modal-action-footer">
                  <button type="button" className="btn-secondary" onClick={() => setExpModalOpen(false)}>
                    Close
                  </button>
                  <button type="submit" className="btn-primary">
                    <Send size={15} />
                    <span>Dispatch Expedition Request</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="dining-confirm-container">
                <Sparkles size={50} className="confirm-icon text-gold" />
                <span className="badge-gold">INQUIRY DISPATCHED</span>
                <h2>Expedition Coordinated</h2>
                <p>
                  Chief Mountain Guide has received your request for <strong>{selectedExp.title}</strong>. 
                  Our private concierge will contact <strong>{guestEmail}</strong> with equipment fittings and flight itineraries.
                </p>
                <button className="btn-primary mt-3" onClick={() => setExpModalOpen(false)}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
