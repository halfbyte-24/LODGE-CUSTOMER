import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';
import './GalleryPage.css';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Hotel', 'Rooms', 'Restaurant', 'Facilities'];

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  // Determine span class based on index to create an asymmetric layout
  const getSpanClass = (index) => {
    // 0: large square, 1: tall, 2: wide, 3: normal, 4: normal, etc.
    const pattern = index % 5;
    if (pattern === 0) return 'span-large';
    if (pattern === 1) return 'span-tall';
    if (pattern === 2) return 'span-wide';
    return 'span-normal';
  };

  return (
    <div className="bengali-page">
      {/* Editorial Page Hero */}
      <section className="bengali-page-hero editorial-hero">
        <div className="hero-texture-overlay"></div>
        <img src="/images/art7.jpg" className="editorial-hero-bg" alt="Alpana Motif" />
        
        <div className="section-wrapper text-center relative z-2">
          <span className="page-eyebrow">VISUAL SHOWCASE</span>
          <h1 className="page-title">Photo Gallery</h1>
          <p className="page-description">
            Explore glimpses of AMONTRON HOTEL & RESTAURANT — our elegant rooms, dining halls, banquets, and modern facilities.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="page-filter-strip">
        <div className="section-wrapper">
          <div className="bengali-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`bengali-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Gallery Grid */}
      <section className="editorial-gallery-section">
        <img src="/images/art3.jpg" className="gallery-decor-left" alt="" />
        <img src="/images/art6.jpg" className="gallery-decor-right" alt="" />
        
        <div className="section-wrapper relative z-2">
          <div className="editorial-gallery-grid">
            {filtered.map((item, idx) => (
              <div 
                key={item.id || idx} 
                className={`editorial-gallery-item ${getSpanClass(idx)}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-hover-overlay">
                  <Maximize2 size={24} className="text-terracotta mb-2" />
                  <h4>{item.title}</h4>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="gallery-lightbox-modal" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
              <X size={32} />
            </button>
            <img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title} />
            <div className="lightbox-caption">
              <h3>{filtered[lightboxIndex].title}</h3>
              <p>{filtered[lightboxIndex].category}</p>
            </div>
            
            <button 
              className="lightbox-nav nav-prev"
              onClick={() => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)}
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              className="lightbox-nav nav-next"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % filtered.length)}
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
