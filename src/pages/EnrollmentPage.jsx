import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, User, Phone, Mail, Users, MessageCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavbarModern from '../components/NavbarModern';
import FooterModern from '../components/FooterModern';

const EnrollmentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    gradeApplying: '',
    parentName: '',
    phone: '',
    whatsapp: '',
    email: ''
  });

  const [agreementChecked, setAgreementChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formDataObj = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj).toString()
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  };

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '3rem',
          textAlign: 'center',
          maxWidth: '500px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#4CAF50',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <CheckCircle size={40} color="white" />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#1a1a1a' }}>
            Pre-Registration Submitted!
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
            Thank you for your interest in Canadian International School Tangier. 
            We have received your pre-registration and will contact you within 24-48 hours.
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <ArrowLeft size={20} />
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
      <NavbarModern scrolled={true} />
      
      {/* Header - with margin to clear navbar */}
      <div style={{
        background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
        color: 'white',
        padding: '2rem 0',
        marginTop: '70px'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
                Pre-Registration
              </h1>
              <p style={{ margin: '0.25rem 0 0 0', opacity: 0.9 }}>
                Canadian International School Tangier
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Form */}
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
        <form name="pre-registration" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="pre-registration" />
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={24} color="#D32F2F" />
              Student Information
            </h2>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter student's full name"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  Grade Applying For *
                </label>
                <select
                  name="gradeApplying"
                  value={formData.gradeApplying}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Grade</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
              </div>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={24} color="#D32F2F" />
              Parent / Guardian Information
            </h2>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter parent's full name"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                    <Phone size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone number"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="WhatsApp number (optional)"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  <Mail size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter email address"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="agreement"
                  checked={agreementChecked}
                  onChange={(e) => setAgreementChecked(e.target.checked)}
                  required
                  style={{ marginTop: '0.25rem', width: '18px', height: '18px', cursor: 'pointer', accentColor: '#D32F2F' }}
                />
                <span style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.5 }}>
                  I have read and agree to the{' '}
                  <a
                    href="/pdfs/parent-school-agreement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#D32F2F', fontWeight: 600, textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    PARENT-SCHOOL AGREEMENT
                    <FileText size={14} />
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreementChecked}
              style={{
                width: '100%',
                background: agreementChecked 
                  ? 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)' 
                  : 'linear-gradient(135deg, #ccc 0%, #999 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: agreementChecked ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                opacity: agreementChecked ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (agreementChecked) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(211, 47, 47, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Submit Pre-Registration
            </button>
          </div>
        </form>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=212665696565&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          zIndex: 9999,
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 30px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
        }}
      >
        <MessageCircle size={32} color="white" fill="white" />
      </a>
      
      <FooterModern />
    </div>
  );
};

export default EnrollmentPage;