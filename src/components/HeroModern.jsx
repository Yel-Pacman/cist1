import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroModern = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    { image: '/images/hero1.png', alt: 'School Campus' },
    { image: '/images/hero2.png', alt: 'Students Learning' },
    { image: '/images/hero3.png', alt: 'School Activities' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
          }}
        >
          {/* Gradient Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(211,47,47,0.3) 100%)',
            zIndex: 1,
          }} />
          
          {/* Image */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.8)',
          }} 
          onError={(e) => {
            e.target.style.backgroundColor = '#1a1a2e';
          }}
          />
        </div>
      ))}

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        color: 'white',
        padding: '0 1.5rem',
        maxWidth: '900px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}>
        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          lineHeight: 1.1,
          fontFamily: 'Playfair Display, serif',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}>
          Excellence in
          <span style={{ color: '#FF6B6B', display: 'block' }}>Education</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          Canadian International School Tangier - Nurturing global citizens 
          with Canadian curriculum and international standards
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          <button
            onClick={() => navigate('/enroll')}
            style={{
              background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(211,47,47,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 8px 25px rgba(211,47,47,0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(211,47,47,0.4)';
            }}
          >
            Register Now
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => scrollToSection('about')}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: '2px solid rgba(255,255,255,0.5)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.target.style.borderColor = 'rgba(255,255,255,0.8)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
          >
            <Play size={18} />
            Watch Video
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '2rem',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {[
            { value: '15+', label: 'Years' },
            { value: '500+', label: 'Students' },
            { value: '40+', label: 'Teachers' },
            { value: '3', label: 'Languages' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#FF6B6B',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.875rem',
                opacity: 0.8,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.75rem',
        zIndex: 20,
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: index === currentSlide ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: index === currentSlide ? '#D32F2F' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Scroll Down */}
      <button
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          zIndex: 20,
          animation: 'bounce 2s infinite',
        }}
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default HeroModern;
