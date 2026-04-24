import React, { useState } from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight, ChevronUp } from 'lucide-react';

const FooterModern = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '#about' },
      { name: 'Academics', href: '#academics' },
      { name: 'Admissions', href: '/enroll' },
      { name: 'Campus Life', href: '#campus-life' },
      { name: 'News & Events', href: '#news' },
      { name: 'Contact', href: '#contact' },
    ],
    'Resources': [
      { name: 'Academic Calendar', href: '#' },
      { name: 'School Policies', href: '#' },
      { name: 'Parent Portal', href: '#' },
      { name: 'Student Handbook', href: '#' },
      { name: 'Career Opportunities', href: '#' },
    ],
    'Contact': [
      { name: 'Route du Charf, Km 5', href: '#map-section' },
      { name: 'Tangier 90000, Morocco', href: '#map-section' },
      { name: '+212 665-696565', href: 'tel:+212665696565' },
      { name: 'contact@cist.ma', href: 'mailto:contact@cist.ma' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/cis.ac.ma/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/cis_tangier/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://ma.linkedin.com/company/canadian-international-school-of-tangier', label: 'LinkedIn' },
  ];

  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      {/* Main Footer */}
      <div style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 2' }}>
              {/* Logo Section */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                {/* Logo Image */}
                <img
                  src="/images/logo.webp"
                  alt="CIST"
                  style={{
                    height: '100px',
                    width: '180px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Icon */}
                <div
                  style={{
                    width: '180px',
                    height: '100px',
                    backgroundColor: '#D32F2F',
                    borderRadius: '8px',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={36} color="white" />
                </div>
                {/* Text under logo */}
                <div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>CIST</h3>
                  <p style={{ fontSize: '1rem', color: '#888', margin: '0.25rem 0 0 0' }}>Canadian International School Tangier</p>
                </div>
              </div>

              <p style={{
                color: '#888',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                maxWidth: '300px',
              }}>
                Nurturing global citizens with Canadian curriculum and international standards since 2010.
              </p>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#2a2a2a',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#888',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#D32F2F';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2a2a2a';
                      e.currentTarget.style.color = '#888';
                    }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  {title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {links.map((link, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      <a
                        href={link.href}
                        style={{
                          color: '#888',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#D32F2F'}
                        onMouseLeave={(e) => e.target.style.color = '#888'}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#2a2a2a',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Subscribe to Our Newsletter
              </h4>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                Stay updated with the latest news and events from CIST.
              </p>
            </div>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888',
                }} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '0.875rem 1rem 0.875rem 2.75rem',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: '#1a1a1a',
                    color: 'white',
                    width: '250px',
                    fontSize: '0.95rem',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '0.875rem 1.5rem',
                  backgroundColor: isSubscribed ? '#4CAF50' : '#D32F2F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid #2a2a2a',
        padding: '1.5rem 0',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}>
            <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>
              © {new Date().getFullYear()} Canadian International School Tangier. All rights reserved.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <a href="#" style={{ color: '#666', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#666', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</a>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#D32F2F',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(211,47,47,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
