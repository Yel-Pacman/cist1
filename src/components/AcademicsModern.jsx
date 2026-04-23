import React, { useState, useEffect } from 'react';
import { BookOpen, Users, GraduationCap, ChevronRight, Star, Clock, Award } from 'lucide-react';

const AcademicsModern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProgram, setExpandedProgram] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('academics');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const programs = [
    {
      id: 'kindergarten',
      icon: BookOpen,
      title: 'Kindergarten (Coming Soon)',
      subtitle: 'Ages 3-5',
      color: '#FF6B9D',
      gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)',
      image: '/src/assets/images/kindergarten.png',
      description: 'A nurturing environment where young learners discover the joy of education through play-based learning. Opening soon!',
      features: [
        '100% English instruction',
        'Ontario curriculum foundation',
        'Play-based learning approach',
        'Social and emotional development',
        'Coming in 2025',
      ],
      stats: { students: 'Coming', teachers: 'Soon', ratio: '8:1' },
    },
    {
      id: 'primary',
      icon: Users,
      title: 'Primary School',
      subtitle: 'Grades 1-6',
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      image: '/src/assets/images/primary.png',
      description: 'Building strong foundations with Ontario curriculum while fostering critical thinking and creativity.',
      features: [
        '100% English instruction',
        'Ontario curriculum standards',
        'Ministry of Education of Ontario registered',
        'STEM integration',
        'Project-based learning',
      ],
      stats: { students: '250', teachers: '25', ratio: '10:1' },
    },
    {
      id: 'secondary',
      icon: GraduationCap,
      title: 'Secondary School',
      subtitle: 'Grades 7-12',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: '/src/assets/images/hero3.png',
      description: 'Preparing students for global success with rigorous Ontario curriculum and university preparation.',
      features: [
        '100% English instruction',
        'Ontario secondary school diploma',
        'Ministry of Education of Ontario registered',
        'Advanced Placement courses',
        'University preparation programs',
      ],
      stats: { students: '180', teachers: '22', ratio: '8:1' },
    },
  ];

  const highlights = [
    { icon: Award, title: 'Ontario Curriculum', desc: '100% English instruction, Ministry registered' },
    { icon: Star, title: 'Excellence', desc: 'Academic rigor and innovation' },
    { icon: Clock, title: 'Flexible Programs', desc: 'After-school activities & support' },
  ];

  return (
    <section
      id="academics"
      style={{
        padding: '6rem 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        {/* Header */}
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
            Academics
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
            Academic Programs
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
            Discover our comprehensive educational programs designed to nurture excellence from early childhood through university preparation.
          </p>
        </div>

        {/* Program Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {programs.map((program, index) => (
            <div
              key={program.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s ease-out ${index * 0.15}s`,
                cursor: 'pointer',
              }}
              onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  background: program.gradient,
                  padding: '2rem',
                  color: 'white',
                  position: 'relative',
                  minHeight: '200px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundImage: `url(${program.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3,
                  }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <program.icon size={30} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    {program.title}
                  </h3>
                  <p style={{ opacity: 0.9 }}>{program.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {program.description}
                </p>

                {/* Stats */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                  }}
                >
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div key={key} style={{ textAlign: 'center', flex: 1 }}>
                      <div style={{ fontWeight: 700, color: program.color, fontSize: '1.25rem' }}>
                        {value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'capitalize' }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expandable Features */}
                <div
                  style={{
                    maxHeight: expandedProgram === program.id ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'maxHeight 0.5s ease',
                  }}
                >
                  <div style={{ paddingTop: '1rem' }}>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#1a1a1a' }}>
                      Key Features:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {program.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 0',
                            color: '#666',
                            fontSize: '0.9rem',
                          }}
                        >
                          <ChevronRight size={16} style={{ color: program.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'transparent',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    color: '#666',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = program.color;
                    e.target.style.color = program.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e0e0e0';
                    e.target.style.color = '#666';
                  }}
                >
                  {expandedProgram === program.id ? 'Show Less' : 'Learn More'}
                  <ChevronRight
                    size={18}
                    style={{
                      transform: expandedProgram === program.id ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.6s',
          }}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFF5F5';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#D32F2F',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                }}
              >
                <item.icon size={32} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>
                {item.title}
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsModern;
