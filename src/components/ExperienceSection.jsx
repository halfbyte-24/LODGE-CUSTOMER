import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Bed, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { ROOMS } from '../data/hotelData'; // Fallback
import './Experiences.css';

export default function ExperienceSection({ onSelectRoom, onQuickView }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const { data, error } = await supabase
          .from('rooms')
          .select('*')
          .limit(2); // Just show 2 for editorial layout

        if (error) throw error;
        
        if (data && data.length > 0) {
          setRooms(data);
        } else {
          setRooms(ROOMS.slice(0, 2));
        }
      } catch (err) {
        console.error('Error fetching rooms:', err);
        setRooms(ROOMS.slice(0, 2)); // Fallback
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  return (
    <section className="bengali-experience-section">
      <div className="section-wrapper">
        <div className="experience-editorial-grid">
          
          {/* Left: Rooms Info */}
          <div className="experience-rooms-text">
            <span className="section-eyebrow">OUR ROOMS</span>
            <h2 className="section-title">Stay in Comfort</h2>
            <p className="experience-desc">
              Experience the perfect blend of traditional Bengali aesthetics 
              and modern luxury in our thoughtfully designed rooms.
            </p>
            <Link to="/rooms" className="about-cta-link mt-4">
              EXPLORE ROOMS <span className="cta-arrow">&rarr;</span>
            </Link>
          </div>

          {/* Center: Rooms from Supabase */}
          <div className="experience-rooms-display">
            {loading ? (
              <p>Loading rooms...</p>
            ) : (
              rooms.map((room) => (
                <div key={room.id} className="editorial-room-card">
                  <div className="room-image-wrapper">
                    <img src={room.image_url || room.image} alt={room.name || room.room_number} />
                    <div className="room-price-tag">₹{(room.price || 0).toLocaleString()} / night</div>
                  </div>
                  <div className="room-card-info">
                    <h3>{room.name || `Room ${room.room_number}`}</h3>
                    <div className="room-specs">
                      <span><Users size={14}/> {room.capacity || '2 Guests'}</span>
                      <span><Bed size={14}/> {room.bedType || '1 Double Bed'}</span>
                    </div>
                    <button 
                      className="btn-terracotta btn-full"
                      onClick={() => onSelectRoom ? onSelectRoom(room) : null}
                    >
                      <Calendar size={14} className="mr-2"/> BOOK NOW
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right: Restaurant Info */}
          <div className="experience-restaurant-text">
            <span className="section-eyebrow">OUR RESTAURANT</span>
            <h2 className="section-title">Taste the Tradition</h2>
            <p className="experience-desc">
              Savor authentic Bengali cuisine and multi-cuisine delicacies 
              prepared with traditional spices and culinary mastery.
            </p>
            <div className="restaurant-art-frame">
               <img src="/images/art4.jpg" className="restaurant-mask-art" alt="Bengali Food Art" />
            </div>
            <Link to="/restaurant" className="about-cta-link mt-4">
              VIEW MENU <span className="cta-arrow">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
