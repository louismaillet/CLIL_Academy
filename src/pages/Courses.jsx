import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const Courses = () => {
  useScrollReveal('.feature-box, .date-card, .course-card, .format-card, .expertise-item, .info-card');

  return (
    <div id="courses" className="page active">
      <section className="container">
        <h2>Our CLIL Courses</h2>
        <div className="courses-intro">
          <p className="section-subtitle">We offer short-term intensive training courses for European teachers</p>
        </div>

        <div className="course-card">
          <h3>CLIL in Primary Education – Practical Strategies for the Classroom</h3>
          
          <p style={{ color: 'var(--slate)', margin: '1.5rem 0', lineHeight: 1.8 }}>
            Teaching subjects through CLIL empowers students to learn meaningful content while developing language skills. This intensive course equips primary teachers with practical methodologies across all subject areas.
          </p>

          <div className="course-details">
            <div className="course-detail">
              <div className="course-detail-label">Duration</div>
              <div className="course-detail-value">3 to 5 days</div>
            </div>
            <div className="course-detail">
              <div className="course-detail-label">Target Audience</div>
              <div className="course-detail-value">Primary School Teachers</div>
            </div>
            <div className="course-detail">
              <div className="course-detail-label">Group Size</div>
              <div className="course-detail-value">8–15 participants</div>
            </div>
            <div className="course-detail">
              <div className="course-detail-label">Language</div>
              <div className="course-detail-value">English</div>
            </div>
          </div>

          <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--teal)' }}>Participants Will:</h4>
          <ul className="course-outcomes">
            <li>Understand CLIL principles and their application in primary education</li>
            <li>Design effective CLIL lessons across multiple subject areas</li>
            <li>Develop classroom language strategies for young learners</li>
            <li>Explore interactive activities that engage students</li>
            <li>Apply theory to real classroom contexts immediately</li>
          </ul>

          <div className="course-cta">
            <Link to="/course-detail" className="btn btn-primary">View Full Course Details</Link>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <h2 style={{ marginTop: '3rem' }}>Upcoming Training Sessions</h2>
        <div className="dates-container">
          <div className="date-card">
            <h4>October Session 2026</h4>
            <p><strong>19–23 October 2026</strong></p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'var(--slate)', textDecoration: 'none' }}>📍 Chartres, France (near Paris)</a>
            <span className="date-badge">5 Days</span>
          </div>
          <div className="date-card">
            <h4>February Session 2027</h4>
            <p><strong>22–26 February 2027</strong></p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'var(--slate)', textDecoration: 'none' }}>📍 Chartres, France (near Paris)</a>
            <span className="date-badge">5 Days</span>
          </div>
          <div className="date-card">
            <h4>April Session 2027</h4>
            <p><strong>19–23 April 2027</strong></p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'var(--slate)', textDecoration: 'none' }}>📍 Chartres, France (near Paris)</a>
            <span className="date-badge">5 Days</span>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--slate)', marginTop: '2rem', padding: '1.5rem', background: 'var(--cream)', borderRadius: '6px' }}>
          <strong>Other sessions may be opened on demand.</strong> Contact us to discuss custom training arrangements for your school or group of teachers.
        </p>
      </section>

      {/* Training Formats */}
      <section className="container light">
        <h2>Flexible Training Formats</h2>
        <p className="section-subtitle">Choose the format that works best for you</p>
        
        <div className="formats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="format-card" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', border: '1px solid var(--sand)' }}>
            <h3>In-Person Training in France</h3>
            <p>Join us in Chartres, near Paris, for our intensive 3–5 day professional development courses. Perfect for international groups and Erasmus+ participants.</p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--teal)', fontWeight: 600, textDecoration: 'none' }}>📍 Chartres, France</a>
          </div>
          <div className="format-card" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', border: '1px solid var(--sand)' }}>
            <h3>On-Site Training at Your School</h3>
            <p>We offer tailored training sessions directly in your school or district. Customize the content to match your specific needs and context.</p>
            <p style={{ marginTop: '1rem', color: 'var(--teal)', fontWeight: 600 }}>📧 On Request</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
