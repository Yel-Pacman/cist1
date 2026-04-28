import React, { useState, useEffect } from 'react';
import { Camera, X, Trophy, Music, BookOpen, Heart, MapPin } from 'lucide-react';

const CampusLifeModern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('campus-life');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'sports', name: 'Sports', icon: Trophy },
    { id: 'arts', name: 'Arts', icon: Music },
    { id: 'academics', name: 'Academics', icon: BookOpen },
    { id: 'community', name: 'Community', icon: Heart },
  ];

  const galleryItems = [
    // Sports
    { id: 1, src: '/images/sport1.webp', category: 'sports', title: 'Football Tournament' },
    { id: 2, src: '/images/sport2.webp', category: 'sports', title: 'Football Match' },
    { id: 3, src: '/images/sport3.webp', category: 'sports', title: 'Football Championship' },
    { id: 10, src: '/images/sport6.webp', category: 'sports', title: 'Football Competition' },
    { id: 14, src: '/images/sport10.webp', category: 'sports', title: 'Football Championship' },
    // Community
    { id: 4, src: '/images/graduation1.webp', category: 'community', title: 'Graduation Celebration' },
    { id: 7, src: '/images/graduation2.webp', category: 'community', title: 'Graduation Ceremony' },
    { id: 8, src: '/images/graduation3.webp', category: 'community', title: 'Class of 2024' },
    { id: 9, src: '/images/easter1.webp', category: 'community', title: 'Easter Celebration' },
    { id: 17, src: '/images/students.webp', category: 'community', title: 'Student Life' },
    { id: 18, src: '/images/graduation0.webp', category: 'community', title: 'Graduation Day' },
    // Arts (using graduation/student images as arts placeholders)
    { id: 101, src: '/images/graduation1.webp', category: 'arts', title: 'Art Exhibition' },
    { id: 102, src: '/images/graduation2.webp', category: 'arts', title: 'Music Performance' },
    { id: 103, src: '/images/students.webp', category: 'arts', title: 'Drama Club' },
    // Academics (using student images as academics placeholders)
    { id: 201, src: '/images/students.webp', category: 'academics', title: 'Science Fair' },
    { id: 202, src: '/images/graduation3.webp', category: 'academics', title: 'Robotics Club' },
    { id: 203, src: '/images/easter1.webp', category: 'academics', title: 'Debate Team' },
  ];

  const activities = [
    {
      title: 'Sports & Athletics',
      icon: Trophy,
      items: ['Basketball', 'Soccer', 'Swimming', 'Track & Field'],
      color: '#FF6B6B',
    },
    {
      title: 'Arts & Culture',
      icon: Music,
      items: ['Visual Arts', 'Music', 'Drama', 'Dance'],
      color: '#4ECDC4',
    },
    {
      title: 'Academic Clubs',
      icon: BookOpen,
      items: ['Robotics', 'Debate', 'Chess', 'Science Club'],
      color: '#667eea',
    },
    {
      title: 'Community Service',
      icon: Heart,
      items: ['Volunteering', 'Environmental', 'Charity', 'Mentoring'],
      color: '#F7B731',
    },
  ];

  // Get one representative item from each category for "All" view
  const getMixedGalleryItems = () => {
    const sports = galleryItems.filter(item => item.category === 'sports');
    const community = galleryItems.filter(item => item.category === 'community');
    const arts = galleryItems.filter(item => item.category === 'arts');
    const academics = galleryItems.filter(item => item.category === 'academics');
    
    // Pick one from each category (6 total, with 2 extra from most populated categories)
    const mixed = [
      sports[0],           // 1 sport
      community[0],      // 1 community
      arts[0],           // 1 arts
      academics[0],      // 1 academics
      sports[1] || community[1],  // 5th item
      community[1] || sports[2],  // 6th item
    ].filter(Boolean); // Remove any undefined
    
    return mixed;
  };

  const filteredItems = selectedCategory === 'all'
    ? (showMore ? galleryItems : getMixedGalleryItems())
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section
      id="campus-life"
      style={{
        padding: '6rem 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
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
            Campus Life
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
            Beyond the Classroom
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
            Discover the vibrant community and diverse activities that make CIST a truly enriching experience.
          </p>
        </div>

        {/* Gallery Section */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '4rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          {/* Category Filter */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setShowMore(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat.id ? '#D32F2F' : '#f0f0f0',
                  color: selectedCategory === cat.id ? 'white' : '#666',
                  transition: 'all 0.3s ease',
                }}
              >
                <cat.icon size={18} />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: '250px',
                  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="gallery-overlay"
                >
                  <h4 style={{ color: 'white', fontWeight: 600 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button - Only for All category */}
          {selectedCategory === 'all' && galleryItems.length > 6 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => setShowMore(!showMore)}
                style={{
                  background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(211, 47, 47, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(211, 47, 47, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(211, 47, 47, 0.3)';
                }}
              >
                {showMore ? 'View Less' : 'View More'}
              </button>
            </div>
          )}
        </div>

        {/* Activities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.4s',
          }}
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: activity.color,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: 'white',
                }}
              >
                <activity.icon size={28} />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>
                {activity.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {activity.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.4rem 0',
                      color: '#666',
                      fontSize: '0.9rem',
                    }}
                  >
                    <MapPin size={14} style={{ color: activity.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                maxWidth: '90%',
                maxHeight: '80vh',
                borderRadius: '12px',
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        .gallery-overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default CampusLifeModern;
