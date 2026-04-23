import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, User, Phone, Mail, Home, Calendar, Heart, Users, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnrollmentPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    lastName: '',
    firstName: '',
    middleName: '',
    gender: '',
    dateOfBirth: '',
    age: '',
    citizenship: '',
    motherTongue: '',
    homeAddress: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    studentEmail: '',
    recentGrade: '',
    applyingGrade: '',
    program: '',
    currentSchool: '',
    
    // Parent/Guardian 1
    parent1Name: '',
    parent1Relationship: '',
    parent1Phone: '',
    parent1Email: '',
    parent1Occupation: '',
    parent1Employer: '',
    
    // Parent/Guardian 2
    parent2Name: '',
    parent2Relationship: '',
    parent2Phone: '',
    parent2Email: '',
    parent2Occupation: '',
    parent2Employer: '',
    
    // Marital Status & Custody
    maritalStatus: '',
    legalCustody: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    emergencyAltPhone: '',
    
    // Medical Information
    hasMedicalCondition: '',
    medicalDescription: '',
    takesMedication: '',
    medicationDetails: '',
    familyDoctor: '',
    
    // WhatsApp Consent
    whatsappConsent: '',
    whatsappNumber: ''
  });

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

  const steps = [
    { number: 1, title: 'Student Information', icon: User },
    { number: 2, title: 'Parent/Guardian', icon: Users },
    { number: 3, title: 'Emergency & Medical', icon: Heart },
    { number: 4, title: 'Consent & Submit', icon: CheckCircle },
  ];

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
            Application Submitted!
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
            Thank you for your interest in Canadian International School Tangier. 
            We have received your application and will contact you within 3-5 business days.
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
        color: 'white',
        padding: '2rem 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
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
                Student Registration
              </h1>
              <p style={{ margin: '0.25rem 0 0 0', opacity: 0.9 }}>
                Canadian International School Tangier
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem'
          }}>
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <button
                  key={step.number}
                  onClick={() => setCurrentStep(step.number)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: isActive ? 'white' : isCompleted ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                    color: isActive ? '#D32F2F' : 'white',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  <Icon size={18} />
                  {step.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container" style={{ padding: '2rem 0' }}>
        <form name="enrollment" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="enrollment" />
          {/* Step 1: Student Information */}
          {currentStep === 1 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>
                1. Student Information
              </h2>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Name Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Legal Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                {/* Middle Name & Gender */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Middle Name / Initial
                    </label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
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
                        padding: '0.75rem',
                        borderRadius: '8px',
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

                {/* DOB & Age */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Age at Registration *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                {/* Citizenship & Mother Tongue */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Citizenship *
                    </label>
                    <input
                      type="text"
                      name="citizenship"
                      value={formData.citizenship}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Mother Tongue *
                    </label>
                    <input
                      type="text"
                      name="motherTongue"
                      value={formData.motherTongue}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                    Home Address *
                  </label>
                  <input
                    type="text"
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                {/* City & Postal Code */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Student Email *
                    </label>
                    <input
                      type="email"
                      name="studentEmail"
                      value={formData.studentEmail}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                {/* Grade & Program */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Most Recent Grade Completed *
                    </label>
                    <input
                      type="text"
                      name="recentGrade"
                      value={formData.recentGrade}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Grade Applying For *
                    </label>
                    <select
                      name="applyingGrade"
                      value={formData.applyingGrade}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
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

                {/* Program & Current School */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Program *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Select Program</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="primary">Primary School</option>
                      <option value="secondary">Secondary School</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Current School *
                    </label>
                    <input
                      type="text"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  style={{
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Parent/Guardian Information */}
          {currentStep === 2 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>
                2. Parent / Guardian Information
              </h2>

              {/* Parent/Guardian 1 */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#D32F2F' }}>
                  Parent / Guardian 1
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="parent1Name"
                      value={formData.parent1Name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent1Relationship"
                        value="mother"
                        checked={formData.parent1Relationship === 'mother'}
                        onChange={handleInputChange}
                      />
                      Mother
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent1Relationship"
                        value="father"
                        checked={formData.parent1Relationship === 'father'}
                        onChange={handleInputChange}
                      />
                      Father
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent1Relationship"
                        value="guardian"
                        checked={formData.parent1Relationship === 'guardian'}
                        onChange={handleInputChange}
                      />
                      Legal Guardian
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent1Relationship"
                        value="other"
                        checked={formData.parent1Relationship === 'other'}
                        onChange={handleInputChange}
                      />
                      Other
                    </label>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="parent1Phone"
                        value={formData.parent1Phone}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="parent1Email"
                        value={formData.parent1Email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="parent1Occupation"
                        value={formData.parent1Occupation}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Employer
                      </label>
                      <input
                        type="text"
                        name="parent1Employer"
                        value={formData.parent1Employer}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian 2 */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#D32F2F' }}>
                  Parent / Guardian 2 (Optional)
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="parent2Name"
                      value={formData.parent2Name}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent2Relationship"
                        value="mother"
                        checked={formData.parent2Relationship === 'mother'}
                        onChange={handleInputChange}
                      />
                      Mother
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent2Relationship"
                        value="father"
                        checked={formData.parent2Relationship === 'father'}
                        onChange={handleInputChange}
                      />
                      Father
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent2Relationship"
                        value="guardian"
                        checked={formData.parent2Relationship === 'guardian'}
                        onChange={handleInputChange}
                      />
                      Legal Guardian
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="parent2Relationship"
                        value="other"
                        checked={formData.parent2Relationship === 'other'}
                        onChange={handleInputChange}
                      />
                      Other
                    </label>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="parent2Phone"
                        value={formData.parent2Phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="parent2Email"
                        value={formData.parent2Email}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="parent2Occupation"
                        value={formData.parent2Occupation}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Employer
                      </label>
                      <input
                        type="text"
                        name="parent2Employer"
                        value={formData.parent2Employer}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Marital Status */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#D32F2F' }}>
                  Family Information
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: '#333' }}>
                    Current Marital Status of Parents/Legal Guardians *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="married_together"
                        checked={formData.maritalStatus === 'married_together'}
                        onChange={handleInputChange}
                        required
                      />
                      Married (living together)
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="married_separate"
                        checked={formData.maritalStatus === 'married_separate'}
                        onChange={handleInputChange}
                      />
                      Married (living separately)
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="divorced"
                        checked={formData.maritalStatus === 'divorced'}
                        onChange={handleInputChange}
                      />
                      Divorced
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="separated"
                        checked={formData.maritalStatus === 'separated'}
                        onChange={handleInputChange}
                      />
                      Separated
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="widowed"
                        checked={formData.maritalStatus === 'widowed'}
                        onChange={handleInputChange}
                      />
                      Widowed
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="single_parent"
                        checked={formData.maritalStatus === 'single_parent'}
                        onChange={handleInputChange}
                      />
                      Single Parent
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: '#333' }}>
                    Who has legal custody of the student? *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="legalCustody"
                        value="both_parents"
                        checked={formData.legalCustody === 'both_parents'}
                        onChange={handleInputChange}
                        required
                      />
                      Both parents
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="legalCustody"
                        value="mother_only"
                        checked={formData.legalCustody === 'mother_only'}
                        onChange={handleInputChange}
                      />
                      Mother only
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="legalCustody"
                        value="father_only"
                        checked={formData.legalCustody === 'father_only'}
                        onChange={handleInputChange}
                      />
                      Father only
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="legalCustody"
                        value="legal_guardian"
                        checked={formData.legalCustody === 'legal_guardian'}
                        onChange={handleInputChange}
                      />
                      Legal Guardian
                    </label>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#D32F2F',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: '2px solid #D32F2F',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  style={{
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Emergency & Medical */}
          {currentStep === 3 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>
                3. Emergency Contact & Medical Information
              </h2>

              {/* Emergency Contact */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#D32F2F' }}>
                  Emergency Contact
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Emergency Contact Name *
                      </label>
                      <input
                        type="text"
                        name="emergencyName"
                        value={formData.emergencyName}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Relationship to Student *
                      </label>
                      <input
                        type="text"
                        name="emergencyRelationship"
                        value={formData.emergencyRelationship}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                        Alternative Phone Number
                      </label>
                      <input
                        type="tel"
                        name="emergencyAltPhone"
                        value={formData.emergencyAltPhone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#D32F2F' }}>
                  Medical Information
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: '#333' }}>
                    Does the student have any medical condition, allergy, disability, or learning difficulty? *
                  </label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="hasMedicalCondition"
                        value="yes"
                        checked={formData.hasMedicalCondition === 'yes'}
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="hasMedicalCondition"
                        value="no"
                        checked={formData.hasMedicalCondition === 'no'}
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                {formData.hasMedicalCondition === 'yes' && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      If yes, please describe:
                    </label>
                    <textarea
                      name="medicalDescription"
                      value={formData.medicalDescription}
                      onChange={handleInputChange}
                      rows="3"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: '#333' }}>
                    Does the student take medication at school? *
                  </label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="takesMedication"
                        value="yes"
                        checked={formData.takesMedication === 'yes'}
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="takesMedication"
                        value="no"
                        checked={formData.takesMedication === 'no'}
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                {formData.takesMedication === 'yes' && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                      Medication details:
                    </label>
                    <textarea
                      name="medicationDetails"
                      value={formData.medicationDetails}
                      onChange={handleInputChange}
                      rows="2"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                    Family Doctor Name
                  </label>
                  <input
                    type="text"
                    name="familyDoctor"
                    value={formData.familyDoctor}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#D32F2F',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: '2px solid #D32F2F',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  style={{
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Consent & Submit */}
          {currentStep === 4 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>
                4. WhatsApp Communication Consent
              </h2>

              <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '1.5rem', 
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: '#333' }}>
                  The Canadian International School of Tangier communicates important information through 
                  WhatsApp groups such as announcements, homework reminders, schedule changes, and school updates.
                </p>
                <p style={{ lineHeight: 1.6, color: '#333' }}>
                  I agree that the school may add my phone number to official school WhatsApp groups used for parent communication.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: '#333' }}>
                  WhatsApp Consent *
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="whatsappConsent"
                      value="yes"
                      checked={formData.whatsappConsent === 'yes'}
                      onChange={handleInputChange}
                      required
                    />
                    Yes, I consent to be added to the school WhatsApp communication group.
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="whatsappConsent"
                      value="no"
                      checked={formData.whatsappConsent === 'no'}
                      onChange={handleInputChange}
                    />
                    No, I do not wish to receive WhatsApp communications.
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
                  Parent Phone Number for WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ 
                backgroundColor: '#FFF5F5', 
                padding: '1rem', 
                borderRadius: '8px',
                marginBottom: '2rem',
                borderLeft: '4px solid #D32F2F'
              }}>
                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                  By submitting this form, you confirm that all information provided is accurate and complete. 
                  You understand that submission of this form does not guarantee admission.
                </p>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#D32F2F',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: '2px solid #D32F2F',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ← Previous
                </button>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    color: 'white',
                    padding: '1rem 3rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle size={20} />
                  Submit Application
                </button>
              </div>
            </div>
          )}
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
    </div>
  );
};

export default EnrollmentPage;
