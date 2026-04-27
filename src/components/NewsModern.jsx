import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, ChevronRight } from 'lucide-react';

const NewsModern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
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

    const element = document.getElementById('news');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const filters = [
    { id: 'all', label: 'All News' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'events', label: 'Events' },
    { id: 'announcements', label: 'Announcements' },
  ];

  const newsItems = [
    {
      id: 1,
      category: 'achievements',
      categoryLabel: 'Achievement',
      date: 'March 15, 2024',
      readTime: '3 min',
      title: 'CIST Students Win International Science Fair',
      excerpt: 'Our Grade 10 students brought home gold medals from the International Science and Engineering Fair in Dubai.',
      author: 'Sarah Johnson',
      image: '/images/hero1.webp',
      content: 'We are incredibly proud to announce that our Grade 10 students represented CIST at the International Science and Engineering Fair in Dubai and won gold medals for their innovative renewable energy project. This achievement showcases the excellence of our STEM program.',
    },
    {
      id: 2,
      category: 'events',
      categoryLabel: 'Event',
      date: 'March 10, 2024',
      readTime: '2 min',
      title: 'New STEM Lab Opening Ceremony',
      excerpt: 'State-of-the-art STEM laboratory officially opened with special guests from Canadian Embassy.',
      author: 'Michael Chen',
      image: '/images/hero2.webp',
      content: 'We are excited to announce the grand opening of our new state-of-the-art STEM laboratory. The ceremony was attended by dignitaries from the Canadian Embassy and featured hands-on demonstrations by our students.',
    },
    {
      id: 3,
      category: 'announcements',
      categoryLabel: 'Announcement',
      date: 'March 5, 2024',
      readTime: '4 min',
      title: 'Holidays Calendar 2024-2025',
      excerpt: 'View all school holidays, breaks, and important dates for the upcoming academic year.',
      author: 'Admin Office',
      image: '/images/calendar.webp',
      content: 'The holidays calendar for the 2024-2025 school year is now available. Plan your family vacations and important events around school holidays, breaks, and professional development days.',
    },
    {
      id: 4,
      category: 'achievements',
      categoryLabel: 'Achievement',
      date: 'February 28, 2024',
      readTime: '3 min',
      title: 'Basketball Team Regional Champions',
      excerpt: 'Our varsity basketball team won the regional championship for the third consecutive year.',
      author: 'Coach David',
      image: '/images/hero3.webp',
      content: 'Congratulations to our varsity basketball team for winning the regional championship! This marks their third consecutive title, showcasing the strength of our athletics program.',
    },
    {
      id: 5,
      category: 'achievements',
      categoryLabel: 'Achievement',
      date: 'April 15, 2024',
      readTime: '3 min',
      title: 'Student Wins National Robotics Competition',
      excerpt: 'One of our talented students brought home the trophy from the National Robotics Championship.',
      author: 'Dr. Sarah Ahmed',
      image: '/images/achievment1.webp',
      content: 'We are thrilled to announce that one of our outstanding students has won the National Robotics Competition! This remarkable achievement showcases the excellence of our STEM and robotics program. The student demonstrated exceptional programming skills, engineering creativity, and problem-solving abilities. Congratulations to our champion!',
    },
    {
      id: 6,
      category: 'achievements',
      categoryLabel: 'Achievement',
      date: 'March 20, 2024',
      readTime: '3 min',
      title: 'CIST Students Win Ramadan Mini Football Tournament',
      excerpt: 'Our students brought home the championship trophy from the Ramadan Mini Football Tournament.',
      author: 'Coach Yassir',
      image: '/images/sport10.webp',
      content: 'Congratulations to our amazing students for winning the Ramadan Mini Football Tournament! The team showed exceptional skill, teamwork, and sportsmanship throughout the competition. This victory is a testament to their dedication and hard work in training. We are incredibly proud of their achievement!',
    },
  ];

  const upcomingEvents = [
    { date: 'Mar 25', title: 'Parent-Teacher Conference', time: '9:00 AM - 4:00 PM' },
    { date: 'Apr 5', title: 'Spring Festival', time: '2:00 PM - 6:00 PM' },
    { date: 'Apr 15', title: 'University Fair', time: '10:00 AM - 3:00 PM' },
    { date: 'May 1', title: 'International Day', time: '11:00 AM - 5:00 PM' },
  ];

  const filteredNews = activeFilter === 'all'
    ? (showMore ? newsItems : newsItems.slice(0, 5))
    : newsItems.filter(item => item.category === activeFilter);

  return (
    <section id="news" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
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
            News & Updates
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '1rem 0',
            fontFamily: 'Playfair Display, serif',
          }}>
            News & Events
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Stay updated with the latest happenings, achievements, and upcoming events.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>
          {/* News Column */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Filters */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => { setActiveFilter(filter.id); setShowMore(false); }}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    backgroundColor: activeFilter === filter.id ? '#D32F2F' : '#f0f0f0',
                    color: activeFilter === filter.id ? 'white' : '#666',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* News Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filteredNews.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease-out ${index * 0.1}s`,
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {/* Image - Clickable for calendar */}
                    <div 
                      onClick={() => item.id === 3 && setLightboxImage(item.image)}
                      style={{
                        width: '200px',
                        minHeight: '180px',
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0,
                        cursor: item.id === 3 ? 'pointer' : 'default',
                        position: 'relative',
                      }}
                    >
                      {item.id === 3 && (
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}>
                          Click to View
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, padding: '1.5rem', minWidth: '250px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.75rem',
                        flexWrap: 'wrap',
                      }}>
                        <span style={{
                          backgroundColor: '#FFF5F5',
                          color: '#D32F2F',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}>
                          {item.categoryLabel}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar size={14} />
                          {item.date}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={14} />
                          {item.readTime}
                        </span>
                      </div>

                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '0.5rem',
                      }}>
                        {item.title}
                      </h3>

                      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
                        {expandedArticle === item.id ? item.content : item.excerpt}
                      </p>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <span style={{
                          fontSize: '0.85rem',
                          color: '#888',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                        }}>
                          <User size={14} />
                          {item.author}
                        </span>

                        <button
                          onClick={() => setExpandedArticle(expandedArticle === item.id ? null : item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#D32F2F',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: '0.9rem',
                          }}
                        >
                          {expandedArticle === item.id ? 'Show Less' : 'Read More'}
                          <ChevronRight size={16} style={{
                            transform: expandedArticle === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s',
                          }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* View More/Less Button - Only for All filter */}
              {activeFilter === 'all' && newsItems.length > 5 && (
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
          </div>

          {/* Sidebar - Upcoming Events */}
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '20px',
            padding: '2rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.3s',
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#1a1a1a',
            }}>
              Upcoming Events
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(5px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    backgroundColor: '#D32F2F',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    minWidth: '60px',
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                      {event.date.split(' ')[0]}
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {event.date.split(' ')[1]}
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      marginBottom: '0.25rem',
                      color: '#1a1a1a',
                    }}>
                      {event.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#888' }}>{event.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button style={{
              width: '100%',
              marginTop: '1.5rem',
              padding: '0.875rem',
              backgroundColor: 'transparent',
              border: '2px solid #D32F2F',
              borderRadius: '12px',
              color: '#D32F2F',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#D32F2F';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#D32F2F';
            }}
            >
              View All Events
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Calendar */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer',
          }}
        >
          <img 
            src={lightboxImage}
            alt="Calendar"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'white',
            fontSize: '2rem',
            cursor: 'pointer',
          }}>
            ×
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsModern;
