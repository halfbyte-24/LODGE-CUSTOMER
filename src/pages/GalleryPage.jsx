import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';
import './Pages.css';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Hotel', 'Rooms', 'Restaurant', 'Facilities'];

  const filtered = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="inner-page gallery-page">
      {/* Page Hero */}
      <section className="page-hero-banner gallery-hero-bg">
        <div className="section-wrapper text-center">
          <span className="page-eyebrow">VISUAL SHOWCASE</span>
          <h1 className="page-main-title">Photo Gallery</h1>
          <div className="gold-divider center-divider" />
          <p className="page-hero-desc">
            Explore glimpses of AMONTRON HOTEL &amp; RESTAURANT — our elegant rooms, dining halls, banquets, and modern facilities.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="gallery-filter-strip">
        <div className="section-wrapper">
          <div className="category-pills center-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'pill-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="section-wrapper">
          <div className="gallery-masonry-grid">
            {filtered.map((item, idx) => (
              <div 
                key={item.id || idx} 
                className="gallery-item-frame glass-card"
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-item-hover">
                  <Maximize2 size={24} className="text-gold" />
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
            <button className="lightbox-close-btn" onClick={() => setLightboxIndex(null)}>
              <X size={24} />
            </button>
            <img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title} />
            <div className="lightbox-caption">
              <h3>{filtered[lightboxIndex].title}</h3>
              <p>{filtered[lightboxIndex].category}</p>
            </div>
            <button 
              className="lightbox-nav-btn prev"
              onClick={() => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              className="lightbox-nav-btn next"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % filtered.length)}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
