import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, ChevronRight, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../config/hotelInfo';
import './Navbar.css';

export default function Navbar({ onOpenBookingModal, onOpenBooking, onOpenLookup, onOpenSupabaseInfo }) {
  const handleBooking = onOpenBooking || onOpenBookingModal;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ROOMS & SUITES', path: '/rooms' },
    { label: 'FACILITIES', path: '/facilities' },
    { label: 'RESTAURANT', path: '/restaurant' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'ABOUT', path: '/about' },
    { label: 'LOCATION', path: '/location' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.replace('/#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.replace('/#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className={`hotel-navbar ${isScrolled ? 'navbar-sticky' : 'navbar-transparent'}`}>
        <div className="navbar-container">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="navbar-brand">
            <span className="brand-primary-name">{HOTEL_INFO.name}</span>
            <span className="brand-sub-title">HOTEL & RESTAURANT</span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="desktop-nav-menu" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`desktop-nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: BOOK NOW */}
          <div className="navbar-action-right">
            <button 
              className="btn-gold nav-book-btn"
              onClick={handleBooking}
              aria-label="Open Room Booking Form"
            >
              <Calendar size={15} />
              <span>BOOK NOW</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'backdrop-visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <div>
              <div className="drawer-hotel-name">{HOTEL_INFO.name}</div>
              <div className="drawer-hotel-sub">HOTEL & RESTAURANT</div>
            </div>
            <button 
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-drawer-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`mobile-drawer-item ${isActive(link.path) ? 'item-active' : ''}`}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="drawer-arrow" />
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <button 
              className="btn-gold w-100 mb-3"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof handleBooking === 'function') handleBooking();
              }}
            >
              <Calendar size={16} />
              <span>ONLINE RESERVATION</span>
            </button>

            <a href={`tel:${HOTEL_INFO.phone}`} className="drawer-phone-btn">
              <Phone size={15} />
              <span>Call Front Desk: {HOTEL_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
