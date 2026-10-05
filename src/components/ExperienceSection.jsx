import React, { useState } from 'react';
import { 
  Utensils,
  Wifi,
  Car,
  BellRing,
  Users,
  CalendarDays,
  ArrowRight,
  Check
} from 'lucide-react';
import './Experiences.css';

// AMONTRON Hotel Services — safe static data (EXPERIENCES from lodgeData is intentionally empty)
const AMONTRON_SERVICES = [
  {
    id: 'dining',
    icon: Utensils,
    category: 'Dining',
    badge: 'POPULAR',
    title: 'Multi-Cuisine Restaurant',
    description: 'Savour authentic North Indian, Tandoor, Chinese, and Bengali specialties prepared daily by our experienced culinary team.',
    highlights: ['Breakfast, Lunch & Dinner', 'In-Room Dining Available', 'Veg & Non-Veg Options'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'events',
    icon: CalendarDays,
    category: 'Events',
    badge: 'BANQUET',
    title: 'Banquet & Conference Hall',
    description: 'Host weddings, receptions, corporate meetings, and social events in our spacious and well-equipped banquet facilities.',
    highlights: ['AV Equipment Available', 'Customisable Catering', 'Up to 200 Guests'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wifi',
    icon: Wifi,
    category: 'Connectivity',
    badge: 'FREE',
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected throughout your stay with complimentary high-speed Wi-Fi available in all rooms and common areas.',
    highlights: ['All Rooms Covered', 'High-Speed Broadband', 'No Time Limit'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parking',
    icon: Car,
    category: 'Parking',
    badge: 'FREE',
    title: 'Secure On-Site Parking',
    description: 'Complimentary dedicated parking for all registered guests with 24-hour security supervision.',
    highlights: ['Open 24 Hours', 'CCTV Monitored', 'Valet on Request'],
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'room-service',
    icon: BellRing,
    category: 'Room Service',
    badge: '24/7',
    title: '24-Hour Room Service',
    description: 'Order from our comprehensive menu at any hour. Hot, freshly prepared food delivered directly to your room.',
    highlights: ['Full Menu Available', 'Express Delivery', 'Available All Night'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c4eacf6b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corporate',
    icon: Users,
    category: 'Corporate',
    badge: 'BUSINESS',
    title: 'Corporate Stay Packages',
    description: 'Tailored packages for business travellers with extended stay discounts, meeting room access, and flexible checkout.',
    highlights: ['Group Booking Discounts', 'Meeting Room Access', 'Flexible Checkout'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  }
];

const ALL_CATEGORIES = ['All', 'Dining', 'Events', 'Connectivity', 'Parking', 'Room Service', 'Corporate'];

export default function ExperienceSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? AMONTRON_SERVICES
    : AMONTRON_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="experiences" className="experiences-section">
      <div className="section-wrapper">
        
        <div className="section-header">
          <span className="section-tag">SERVICES & AMENITIES</span>
          <h2 className="section-title">Everything You Need</h2>
          <div className="gold-divider" />
          <p className="section-description">
            From our multi-cuisine restaurant and 24-hour room service to conference facilities and free parking — 
            AMONTRON ensures a comfortable and convenient stay for every guest.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="exp-filters-wrap">
          {ALL_CATEGORIES.map((cat, i) => (
            <button
              key={i}
              className={`exp-cat-btn ${activeCategory === cat ? 'exp-btn-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="experiences-grid">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="experience-card glass-card">
                
                <div className="exp-media-wrap">
                  <img src={svc.image} alt={svc.title} className="exp-img" loading="lazy" />
                  <div className="exp-gradient-overlay" />
                  <span className="exp-badge-top">{svc.badge}</span>
                  <span className="exp-cat-chip">{svc.category}</span>
                </div>

                <div className="exp-body">
                  <h3 className="exp-title">{svc.title}</h3>
                  
                  <p className="exp-desc">{svc.description}</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {(Array.isArray(svc.highlights) ? svc.highlights : []).map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <Check size={13} className="text-gold" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-card-footer">
                    <a href="#contact" className="btn-outline-gold exp-cta-btn" style={{ textDecoration: 'none' }}>
                      <span>Enquire Now</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
