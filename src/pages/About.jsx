import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal('.feature-box, .date-card, .course-card, .format-card, .expertise-item, .info-card');

  return (
    <div id="about" className="page active">
      <section className="container">
        <h2>About European CLIL Academy</h2>
        <div className="about-content">
          <div className="about-text">
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              European CLIL Academy provides professional development courses for primary school teachers who want to implement Content and Language Integrated Learning (CLIL) in their classrooms.
            </p>
            
            <h3>Our Goals</h3>
            <ul className="goals-list">
              <li><strong>Strengthen teachers' confidence</strong> in teaching through a foreign language with evidence-based strategies</li>
              <li><strong>Provide practical, ready-to-use classroom strategies</strong> that teachers can implement immediately</li>
              <li><strong>Support meaningful and engaging learning</strong> experiences for young learners</li>
            </ul>

            <h3>Our Alignment</h3>
            <p>All courses are aligned with European educational priorities and can be integrated into Erasmus+ mobility projects. We recognize the importance of professional development in implementing innovative teaching methodologies across Europe.</p>
          </div>

          <div className="goals-list">
            <h3 style={{ marginTop: 0 }}>What We Offer</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '1.5rem', paddingLeft: 0 }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>CLIL Expertise</span>
                <p style={{ color: 'var(--slate)', marginTop: '0.3rem' }}>Specialized knowledge in Content and Language Integrated Learning methodologies</p>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: 0 }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>Teacher Training</span>
                <p style={{ color: 'var(--slate)', marginTop: '0.3rem' }}>Professional development courses designed for primary school contexts</p>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: 0 }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>European Standards</span>
                <p style={{ color: 'var(--slate)', marginTop: '0.3rem' }}>Courses aligned with European educational frameworks</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="container light">
        <h2>About the Trainer</h2>
        <p className="section-subtitle">Training sessions are led by an experienced primary education specialist</p>
        
        <div className="trainer-card">
          <h3>Experienced Pedagogical Advisor</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--slate)', lineHeight: 1.8 }}>
            Our training sessions are facilitated by a dedicated primary education specialist and pedagogical advisor with strong expertise in CLIL methodology and foreign language teaching.
          </p>

          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Key Expertise</h3>
          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="expertise-icon">◆</div>
              <p><strong>Master's Degree</strong> in CLIL and Bilingual Education</p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">◆</div>
              <p><strong>Teacher Training Experience</strong> with educators across Europe</p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">◆</div>
              <p><strong>Primary Context Knowledge</strong> of classroom realities and student needs</p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">◆</div>
              <p><strong>Practical Strategies</strong> developed through years of classroom experience</p>
            </div>
          </div>

          <p style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--cream)', borderLeft: '3px solid var(--teal)', borderRadius: '6px', color: 'var(--slate)' }}>
            <strong>Our approach combines theory, practice, and reflection</strong> – ensuring that teachers not only understand CLIL principles but can immediately apply them in their classrooms with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
