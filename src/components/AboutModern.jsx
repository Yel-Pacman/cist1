import React, { useState, useEffect } from 'react';
import { Award, Globe, Heart, Users, CheckCircle } from 'lucide-react';

const AboutModern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Ontario Curriculum',
      description: '100% English instruction with Ontario curriculum standards',
    },
    {
      icon: Globe,
      title: 'Ministry Registered',
      description: 'Students registered with Ministry of Education of Ontario',
    },
    {
      icon: Users,
      title: 'Small Classes',
      description: '10:1 student to teacher ratio',
    },
    {
      icon: Heart,
      title: 'Holistic Care',
      description: 'Focus on overall development',
    },
  ];

  const stats = [
    { value: '15+', label: 'Nationalities' },
    { value: '98%', label: 'University Acceptance' },
    { value: '10:1', label: 'Student Ratio' },
    { value: '2010', label: 'Founded' },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We pursue academic excellence through rigorous Canadian curriculum standards and innovative teaching methods.',
    },
    {
      title: 'Community',
      description: 'We foster a supportive, inclusive community where every student feels valued and empowered to succeed.',
    },
    {
      title: 'Global Citizenship',
      description: 'We prepare students to become responsible global citizens with cross-cultural understanding.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <span
            style={{
              color: '#D32F2F',
              fontWeight: 600,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            About Us
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#1a1a1a',
              margin: '1rem 0',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            Shaping Tomorrow's Leaders Today
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Canadian International School Tangier stands as a beacon of educational excellence in North Africa,
            offering a comprehensive Canadian curriculum that prepares students for global success.
          </p>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Image Column */}
          <div
            style={{
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src="/src/assets/images/about us.png"
                alt="CIST Campus"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.parentElement.style.height = '400px';
                }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '1rem',
              }}
            >
              A World-Class Education in Tangier
            </h3>
            <p
              style={{
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              Our trilingual program in English, French, and Arabic ensures students develop strong
              linguistic skills while maintaining cultural connections. We combine innovative teaching
              methods with traditional values to create well-rounded, confident individuals.
            </p>

            {/* Features Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#FFF5F5',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#D32F2F',
                    }}
                  >
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1a1a1a' }}>
                      {feature.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#888' }}>{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            marginBottom: '4rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.6s',
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#D32F2F',
                  marginBottom: '0.25rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values Tabs */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.8s',
          }}
        >
          <h3
            style={{
              textAlign: 'center',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem',
            }}
          >
            Our Core Values
          </h3>

          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {values.map((value, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeTab === index ? '#D32F2F' : '#f0f0f0',
                  color: activeTab === index ? 'white' : '#666',
                  transition: 'all 0.3s ease',
                }}
              >
                {value.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
            }}
          >
            <CheckCircle
              size={40}
              style={{ color: '#D32F2F', marginBottom: '1rem' }}
            />
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {values[activeTab].title}
            </h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>{values[activeTab].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutModern;


