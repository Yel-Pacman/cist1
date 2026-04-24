import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavbarModern = ({ scrolled }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Campus', href: '#campus-life' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'campus-life', 'news', 'contact', 'map-section'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? '#ffffff' : 'transparent',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
      padding: scrolled ? '0' : '0.125rem 0',
      transition: 'all 0.3s ease',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo.webp"
              alt="CIST"
              style={{
                height: '100px',
                width: '180px',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '8px',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback Icon - Hidden by default */}
            <div
              style={{
                width: '180px',
                height: '100px',
                background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <GraduationCap size={36} color="white" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={{ 
            display: 'none',
            alignItems: 'center', 
            gap: '0.25rem',
          }} className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                style={{
                  color: activeSection === item.href.slice(1) ? '#D32F2F' : scrolled ? '#333' : '#fff',
                  fontWeight: activeSection === item.href.slice(1) ? 600 : 500,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.href.slice(1)) {
                    e.target.style.backgroundColor = scrolled ? '#f5f5f5' : 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => navigate('/enroll')}
              style={{
                background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                color: '#fff',
                padding: '0.6rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                marginLeft: '0.5rem',
                boxShadow: '0 4px 15px rgba(211,47,47,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(211,47,47,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(211,47,47,0.3)';
              }}
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: scrolled ? '#f5f5f5' : 'rgba(255,255,255,0.1)',
              border: 'none',
              cursor: 'pointer',
              color: scrolled ? '#333' : '#fff',
              padding: '0.5rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '16px',
            marginTop: '1rem',
            padding: '1rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          }} className="mobile-nav">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                style={{
                  padding: '0.875rem 1rem',
                  textAlign: 'left',
                  background: activeSection === item.href.slice(1) ? '#FFF5F5' : 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  color: activeSection === item.href.slice(1) ? '#D32F2F' : '#333',
                  fontWeight: activeSection === item.href.slice(1) ? 600 : 500,
                  cursor: 'pointer',
                  borderRadius: '8px',
                  marginBottom: '0.25rem',
                }}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => {
                navigate('/enroll');
                setIsMenuOpen(false);
              }}
              style={{
                background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                color: '#fff',
                padding: '0.875rem',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '0.5rem',
              }}
            >
              Register Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarModern;
