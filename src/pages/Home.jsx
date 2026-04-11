import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
  useScrollReveal('.feature-box, .date-card, .course-card, .format-card, .expertise-item, .info-card');

  return (
    <div id="home" className="page active">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>European CLIL Academy</h1>
          <p className="subtitle">CLIL Training for Primary School Teachers across Europe</p>
          <p className="hero-description">Develop your teaching skills through practical CLIL strategies designed for primary education.</p>
          <div className="hero-highlight">
            Erasmus+ compatible courses • Hands-on, classroom-ready approaches • Designed by an experienced pedagogical advisor
          </div>
          <div className="cta-buttons">
            <Link to="/courses" className="btn btn-primary">Discover Our Courses</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="container">
        <h2>Welcome to European CLIL Academy</h2>
        <p className="section-subtitle" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          We provide professional development courses for primary school teachers who want to implement Content and Language Integrated Learning (CLIL) in their classrooms.
        </p>
        
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">🎓</div>
            <h3>Strengthen Confidence</h3>
            <p>Build confidence in teaching through a foreign language with proven strategies</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">📚</div>
            <h3>Practical Strategies</h3>
            <p>Ready-to-use classroom approaches that work immediately with your students</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🌍</div>
            <h3>Engaging Learning</h3>
            <p>Support meaningful, engaging learning experiences for young learners</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="container light">
        <h2>Why Choose European CLIL Academy</h2>
        <div className="features-grid" style={{ marginTop: '2rem' }}>
          <div className="feature-box">
            <div className="feature-icon">🎯</div>
            <h3>Primary Education Specialist</h3>
            <p>Specialized expertise in primary school contexts and pedagogy</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">✋</div>
            <h3>Practical Application</h3>
            <p>Focus on immediate classroom implementation</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">👥</div>
            <h3>Small Groups</h3>
            <p>Intimate learning groups for personalized attention</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🌐</div>
            <h3>European & Intercultural</h3>
            <p>Aligned with European educational standards and priorities</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">💬</div>
            <h3>Interactive Sessions</h3>
            <p>Engaging, participatory learning formats</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">✈️</div>
            <h3>Erasmus+ Compatible</h3>
            <p>Designed to fit perfectly into Erasmus+ mobility programs</p>
          </div>
        </div>
      </section>

      {/* Upcoming Dates Preview */}
      <section className="container">
        <h2>Upcoming Courses</h2>
        <p className="section-subtitle">Join us in Chartres, France for intensive professional development</p>
        <div className="dates-container">
          <div className="date-card">
            <h4>Autumn Session</h4>
            <p>19–23 October 2026</p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" className="date-badge">📍 Chartres, France</a>
          </div>
          <div className="date-card">
            <h4>Winter Session</h4>
            <p>22–26 February 2027</p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" className="date-badge">📍 Chartres, France</a>
          </div>
          <div className="date-card">
            <h4>Spring Session</h4>
            <p>19–23 April 2027</p>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" className="date-badge">📍 Chartres, France</a>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--medium-text)', marginTop: '2rem' }}>Other sessions may be opened on demand. Contact us for custom training arrangements.</p>
      </section>
    </div>
  );
};

export default Home;
