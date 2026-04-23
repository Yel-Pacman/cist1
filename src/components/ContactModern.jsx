import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactModern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setIsSubmitting(false);
        alert('There was an error submitting the form. Please try again.');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['Route du Charf, Km 5', 'Tangier 90000, Morocco'],
      color: '#D32F2F',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+212 665-696565'],
      color: '#4ECDC4',
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['contact@cist.ma'],
      color: '#667eea',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      color: '#F7B731',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/cis.ac.ma/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/cis_tangier/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://ma.linkedin.com/company/canadian-international-school-of-tangier', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" style={{ padding: '6rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
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
            Get In Touch
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '1rem 0',
            fontFamily: 'Playfair Display, serif',
          }}>
            Contact Us
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: info.color,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: 'white',
              }}>
                <info.icon size={28} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                color: '#1a1a1a',
              }}>
                {info.title}
              </h3>
              {info.content.map((line, i) => (
                <p key={i} style={{ color: '#666', marginBottom: '0.25rem' }}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Form */}
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '24px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease-out 0.4s',
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              color: '#1a1a1a',
            }}>
              Send us a Message
            </h3>
            <p style={{ color: '#888', marginBottom: '2rem' }}>
              Fill out the form below and we'll get back to you shortly.
            </p>

            {isSubmitted ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem',
                textAlign: 'center',
              }}>
                <CheckCircle size={60} color="#4CAF50" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h4>
                <p style={{ color: '#666' }}>Thank you for contacting us. We'll respond soon.</p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        borderRadius: '12px',
                        border: '2px solid #e0e0e0',
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#D32F2F'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        borderRadius: '12px',
                        border: '2px solid #e0e0e0',
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#D32F2F'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        borderRadius: '12px',
                        border: '2px solid #e0e0e0',
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#D32F2F'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        borderRadius: '12px',
                        border: '2px solid #e0e0e0',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'all 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D32F2F'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: isSubmitting ? '#ccc' : '#D32F2F',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>

          {/* Info Card */}
          <div style={{
            background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
            padding: '2.5rem',
            borderRadius: '24px',
            color: 'white',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease-out 0.5s',
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              Why Choose CIST?
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                'Canadian curriculum excellence',
                'Multilingual education (EN/FR/AR)',
                'Small class sizes (10:1 ratio)',
                'State-of-the-art facilities',
                'International exchange programs',
                '100% university acceptance rate',
              ].map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0',
                }}>
                  <CheckCircle size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>
              Follow Us
            </h4>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#D32F2F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactModern;
