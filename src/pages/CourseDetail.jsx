import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const CourseDetail = () => {
  useScrollReveal('.feature-box, .date-card, .course-card, .format-card, .expertise-item, .info-card');

  return (
    <div id="course-detail" className="page active">
      <section className="container">
        <h2>CLIL in Primary Education</h2>
        <p className="section-subtitle" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Practical Strategies for the Classroom</p>

        <div className="course-card" style={{ marginBottom: '2rem' }}>
          <h3>Course Overview</h3>
          <p style={{ color: 'var(--slate)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            This intensive course teaches primary school teachers how to implement Content and Language Integrated Learning (CLIL) across the curriculum. Participants will discover practical strategies for teaching subjects through a foreign language – including Maths, Science, Arts, Music, Physical Education, and Humanities.
          </p>
          <p style={{ padding: '1.5rem', background: 'var(--cream)', borderLeft: '4px solid var(--teal)', borderRadius: '6px', color: 'var(--slate)' }}>
            <strong>Key Emphasis:</strong> The course emphasises practical classroom applications across different subjects, making it directly transferable to participants' teaching contexts.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="course-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Learning Objectives</h3>
            <ul className="course-outcomes" style={{ margin: 0 }}>
              <li>Understand CLIL principles and their effectiveness in primary education</li>
              <li>Design coherent CLIL lessons across multiple subject areas</li>
              <li>Develop strategies for adapting language input to learner levels</li>
              <li>Create engaging, age-appropriate activities for young learners</li>
              <li>Manage classroom language effectively in CLIL contexts</li>
            </ul>
          </div>

          <div className="course-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Learning Outcomes</h3>
            <p style={{ color: 'var(--slate)', marginBottom: '1rem' }}>Upon completion, participants will be able to:</p>
            <ul className="course-outcomes" style={{ margin: 0 }}>
              <li>Design complete CLIL lessons for primary students</li>
              <li>Use subject-specific vocabulary effectively in a foreign language</li>
              <li>Adapt teaching strategies to different proficiency levels</li>
              <li>Apply theory to their own classroom practice</li>
            </ul>
          </div>
        </div>

        <div className="course-card">
          <h3>5-Day Programme</h3>
          <p style={{ color: 'var(--slate)', marginBottom: '2rem' }}>Each day combines theory, practical workshops, and classroom applications:</p>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--cream)', borderRadius: '6px', borderLeft: '4px solid var(--teal)' }}>
              <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--teal)' }}>Day 1: CLIL Fundamentals</h4>
              <p style={{ color: 'var(--slate)', margin: 0 }}>Introduction to CLIL methodology, principles, and benefits for primary learners. Exploring the 4 Cs (Content, Communication, Cognition, Culture).</p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--cream)', borderRadius: '6px', borderLeft: '4px solid var(--teal)' }}>
              <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--teal)' }}>Day 2: Maths & Science CLIL</h4>
              <p style={{ color: 'var(--slate)', margin: 0 }}>Practical strategies for teaching mathematical and scientific concepts through a foreign language. Vocabulary development and hands-on activities.</p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--cream)', borderRadius: '6px', borderLeft: '4px solid var(--teal)' }}>
              <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--teal)' }}>Day 3: Arts & Music CLIL</h4>
              <p style={{ color: 'var(--slate)', margin: 0 }}>Creative approaches to teaching arts and music through CLIL. Integrating cultural elements and fostering creative expression.</p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--cream)', borderRadius: '6px', borderLeft: '4px solid var(--teal)' }}>
              <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--teal)' }}>Day 4: Physical Education CLIL</h4>
              <p style={{ color: 'var(--slate)', margin: 0 }}>Language-rich PE lessons that combine movement, games, and language learning. Building vocabulary through physical activity.</p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--cream)', borderRadius: '6px', borderLeft: '4px solid var(--teal)' }}>
              <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--teal)' }}>Day 5: Humanities & Practice</h4>
              <p style={{ color: 'var(--slate)', margin: 0 }}>CLIL approaches to history, geography, and social studies. Lesson design workshop and peer practice with feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Erasmus+ Section */}
      <section className="container light">
        <h2>Erasmus+ Mobility Support</h2>
        <p className="section-subtitle">Perfect for teachers participating in Erasmus+ projects</p>

        <div className="erasmus-box">
          <h3>Why Choose This Course for Erasmus+?</h3>
          <p style={{ color: 'var(--slate)', marginBottom: '1.5rem' }}>
            Our course is specifically designed to meet the professional development needs of teachers in Erasmus+ mobility projects. The training directly supports the development of teaching competencies and innovation in European education.
          </p>

          <h4 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--teal)' }}>We Provide:</h4>
          <ul className="course-outcomes">
            <li>Detailed course programmes aligned with Erasmus+ competency frameworks</li>
            <li>Certificates of attendance for documentation</li>
            <li>Support documents for Erasmus+ applications and reports</li>
            <li>International cohort of European teachers</li>
            <li>Professional development in line with European education priorities</li>
          </ul>

          <p style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '6px', color: 'var(--slate)', fontWeight: 500 }}>
            <strong>Participants can use Erasmus+ funding to attend.</strong> Contact us to discuss how we can support your Erasmus+ application and mobility planning.
          </p>
        </div>
      </section>

      {/* Pricing & Practical Info */}
      <section className="container">
        <h2>Course Pricing & Details</h2>
        
        <div className="pricing-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="course-card" style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Daily Rate</div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--navy)' }}>80€</div>
            <div style={{ color: 'var(--slate)', marginBottom: '1.5rem' }}>per day</div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: 'var(--slate)', marginBottom: '1rem' }}>Example pricing for 5-day course:</p>
              <p style={{ fontSize: '1.3rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '2rem' }}>5 days = 400€</p>
            </div>
            <ul className="course-outcomes" style={{ textAlign: 'left' }}>
              <li>Professional training and facilitation</li>
              <li>Course materials and resources</li>
              <li>Certificate of attendance</li>
            </ul>
          </div>
        </div>

        <h3 style={{ textAlign: 'center', fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '2rem', marginTop: '3rem' }}>Practical Information</h3>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-card-label">Language</div>
            <div className="info-card-value">English</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Location</div>
            <div className="info-card-value"><a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>📍 Chartres, France<br/>(near Paris)</a></div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Group Size</div>
            <div className="info-card-value">8–15 participants</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Duration</div>
            <div className="info-card-value">3–5 days</div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="container light" style={{ textAlign: 'center' }}>
        <h2>Ready to Develop Your CLIL Skills?</h2>
        <p className="section-subtitle" style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Join other European primary teachers for intensive professional development. Gain practical classroom strategies you can implement immediately.
        </p>
        <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', marginTop: '1rem' }}>Register Your Interest</Link>
      </section>
    </div>
  );
};

export default CourseDetail;
