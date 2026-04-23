import React, { useEffect, useState } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const MapSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('map-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // CIST Tangier coordinates - Al Irfane 2, Boukhalef
  const schoolLocation = {
    lat: 35.7267,
    lng: -5.9036,
    address: 'Canadian International School, Lots Albasatine, al irfane 2, Boukhalef – Tanger',
    name: 'Canadian International School Tangier'
  };

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5!2d${schoolLocation.lng}!3d${schoolLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b89b5f5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sCanadian%20International%20School%20Tangier!5e0!3m2!1sen!2sma!4v1609459200000!5m2!1sen!2sma`;
  
  const directionsUrl = 'https://maps.app.goo.gl/CfRE2FrXNx3VUhiH6';

  return (
    <section id="map-section" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}>
          <span style={{
            color: '#D32F2F',
            fontWeight: 600,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            Find Us
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '1rem 0',
            fontFamily: 'Playfair Display, serif',
          }}>
            Visit Our Campus
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Located in the beautiful city of Tangier, our campus is easily accessible and welcomes visitors for tours.
          </p>
        </div>

        {/* Map Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}>
          {/* Info Card */}
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '24px',
            padding: '2.5rem',
            color: 'white',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease-out 0.2s',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#D32F2F',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <MapPin size={35} color="white" />
            </div>

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              {schoolLocation.name}
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
            }}>
              {schoolLocation.address}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: 'auto',
            }}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem',
                  backgroundColor: '#D32F2F',
                  color: 'white',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B71C1C';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#D32F2F';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Navigation size={20} />
                Get Directions
              </a>

              <a
                href="https://maps.app.goo.gl/CfRE2FrXNx3VUhiH6"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'white';
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <ExternalLink size={20} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            height: '450px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease-out 0.3s',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5!2d-5.9036!3d35.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b89b5f5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sCanadian%20International%20School%20Tangier!5e0!3m2!1sen!2sma!4v1609459200000!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CIST Location"
            />
          </div>
        </div>

        {/* Quick Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}>
          {[
            { label: 'Distance from Airport', value: '8 km' },
            { label: 'Distance from City Center', value: '12 km' },
            { label: 'Campus Size', value: '5 hectares' },
            { label: 'Parking Available', value: 'Yes' },
          ].map((info, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '16px',
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${0.5 + index * 0.1}s`,
              }}
            >
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#D32F2F',
                marginBottom: '0.5rem',
              }}>
                {info.value}
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>
                {info.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
