import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Bed, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Calendar,
  ShieldCheck,
  Coffee,
  Check
} from 'lucide-react';
import { getRoomById, getAllRoomTypes } from '../lib/roomService';
import './Pages.css';

export default function RoomDetailPage({ onOpenBooking }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [allRooms, setAllRooms] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    getRoomById(id).then(res => {
      if (res.data) {
        setRoom(res.data);
      } else {
        // Fallback to first room type if id not found
        getAllRoomTypes().then(r => setRoom(r.data[0]));
      }
    });
    getAllRoomTypes().then(res => setAllRooms(res.data || []));
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!room) {
    return (
      <div className="page-loading-wrap">
        <div className="loading-spinner" />
        <p>Loading room details...</p>
      </div>
    );
  }

  const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
  const relatedRooms = allRooms.filter(r => r.id !== room.id);

  return (
    <div className="room-detail-page">
      {/* Breadcrumb strip */}
      <div className="detail-breadcrumb-strip">
        <div className="section-wrapper breadcrumb-inner">
          <Link to="/rooms" className="back-link">
            <ArrowLeft size={16} />
            <span>All Accommodations</span>
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{room.name}</span>
        </div>
      </div>

      <div className="section-wrapper detail-main-layout">
        
        {/* Gallery & Media Area */}
        <div className="detail-gallery-column">
          <div className="detail-main-img-box glass-card">
            <img 
              src={gallery[activeImageIndex]} 
              alt={room.name} 
              className="detail-main-photo" 
            />
            {gallery.length > 1 && (
              <>
                <button 
                  className="gallery-nav-btn prev"
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="gallery-nav-btn next"
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % gallery.length)}
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            <div className="detail-photo-counter">
              {activeImageIndex + 1} / {gallery.length}
            </div>
          </div>

          {/* Thumbnails */}
          {gallery.length > 1 && (
            <div className="detail-thumb-grid">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  className={`detail-thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={imgUrl} alt={`${room.name} thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}

          {/* Full Room Description */}
          <div className="detail-desc-card glass-card">
            <h3 className="detail-section-title">About This Room</h3>
            <p className="detail-full-desc">{room.description}</p>
            <p className="detail-sub-desc">
              Every detail has been curated to provide unmatched relaxation, impeccable hygiene, and 
              contemporary conveniences. Our housekeeping team ensures the highest standard of sanitization.
            </p>
          </div>

          {/* Amenities & Inclusions */}
          <div className="detail-amenities-card glass-card">
            <h3 className="detail-section-title">Room Features &amp; Amenities</h3>
            <div className="amenities-two-col">
              {(room.features || room.amenities || []).map((feat, i) => (
                <div key={i} className="amenity-detail-row">
                  <Check size={16} className="text-gold" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Privileges */}
          <div className="privileges-card glass-card">
            <h3 className="detail-section-title">
              <Sparkles size={18} className="text-gold" />
              <span>Complimentary Amontron Privileges</span>
            </h3>
            <div className="privileges-grid">
              <div className="privilege-box">
                <Coffee size={18} className="text-gold" />
                <div>
                  <strong>Morning Tea &amp; Coffee</strong>
                  <span>In-room electric kettle with premium tea kits</span>
                </div>
              </div>
              <div className="privilege-box">
                <ShieldCheck size={18} className="text-gold" />
                <div>
                  <strong>24/7 Front Desk &amp; Security</strong>
                  <span>Round-the-clock reception and security monitoring</span>
                </div>
              </div>
              <div className="privilege-box">
                <Users size={18} className="text-gold" />
                <div>
                  <strong>24-Hour Room Service</strong>
                  <span>Fresh delicacies delivered directly to your door</span>
                </div>
              </div>
              <div className="privilege-box">
                <CheckCircle2 size={18} className="text-gold" />
                <div>
                  <strong>High-Speed Wi-Fi</strong>
                  <span>Unrestricted high-speed internet throughout your stay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary & Booking Box */}
        <aside className="detail-sidebar-column">
          <div className="booking-summary-box glass-card sticky-sidebar">
            <div className="sidebar-eyebrow">{room.floorInfo || 'AMONTRON ACCOMMODATION'}</div>
            <h1 className="sidebar-room-name">{room.name}</h1>
            
            <div className="availability-status-pill">
              <CheckCircle2 size={14} className="text-success" />
              <span>Available for Booking • Instant Confirmation</span>
            </div>

            <div className="sidebar-pricing">
              <div className="price-main">
                <span className="sidebar-currency">₹</span>
                <span className="sidebar-amount">{(room.pricePerNight || room.price).toLocaleString()}</span>
                <span className="sidebar-period">/ night</span>
              </div>
              {room.originalPrice && (
                <div className="sidebar-original-price">
                  <span>Regular: ₹{room.originalPrice.toLocaleString()}</span>
                  <span className="discount-tag">Special Direct Rate</span>
                </div>
              )}
            </div>

            {/* Spec chips */}
            <div className="sidebar-specs-list">
              <div className="sidebar-spec-row">
                <span className="spec-label">Capacity</span>
                <span className="spec-val"><Users size={14} /> {room.capacity}</span>
              </div>
              <div className="sidebar-spec-row">
                <span className="spec-label">Bed Configuration</span>
                <span className="spec-val"><Bed size={14} /> {room.bedType}</span>
              </div>
              <div className="sidebar-spec-row">
                <span className="spec-label">Room Area</span>
                <span className="spec-val"><Maximize2 size={14} /> {room.size || `${room.sqft} sq. ft.`}</span>
              </div>
              <div className="sidebar-spec-row">
                <span className="spec-label">Location</span>
                <span className="spec-val">{room.floorInfo || 'Floor 1, 2, or 3'}</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              className="btn-primary w-100 sidebar-book-btn"
              onClick={() => onOpenBooking({ room })}
            >
              <Calendar size={16} />
              <span>BOOK THIS ROOM</span>
            </button>

            <div className="sidebar-guarantees">
              <div className="guarantee-item">
                <CheckCircle2 size={14} className="text-gold" />
                <span>Best Rate Guaranteed Online</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={14} className="text-gold" />
                <span>Zero Hidden Reservation Fees</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={14} className="text-gold" />
                <span>Flexible Cancellation Available</span>
              </div>
            </div>

            <div className="direct-call-help">
              <p>Prefer to reserve by phone?</p>
              <a href="tel:+910000000000" className="call-link">+91 00000 00000</a>
            </div>
          </div>
        </aside>

      </div>

      {/* Related Rooms Section */}
      {relatedRooms.length > 0 && (
        <section className="related-rooms-section">
          <div className="section-wrapper">
            <div className="section-header text-center">
              <span className="section-eyebrow">EXPLORE ALTERNATIVES</span>
              <h2 className="section-title">Other Room Types</h2>
              <div className="section-title-line center" />
            </div>

            <div className="related-rooms-grid">
              {relatedRooms.map((relRoom) => (
                <div key={relRoom.id} className="related-room-card glass-card">
                  <div className="rel-media">
                    <img src={relRoom.image} alt={relRoom.name} />
                    <span className="rel-price-badge">₹{(relRoom.pricePerNight || relRoom.price).toLocaleString()} / night</span>
                  </div>
                  <div className="rel-body">
                    <h4 className="rel-name">{relRoom.name}</h4>
                    <p className="rel-spec">{relRoom.capacity} • {relRoom.bedType}</p>
                    <div className="rel-actions">
                      <Link to={`/rooms/${relRoom.id}`} className="btn-outline-gold btn-sm">
                        <span>VIEW DETAILS</span>
                      </Link>
                      <button 
                        className="btn-primary btn-sm"
                        onClick={() => onOpenBooking({ room: relRoom })}
                      >
                        <span>BOOK NOW</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
