import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal('.feature-box, .date-card, .course-card, .format-card, .expertise-item, .info-card');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon at the email address you provided.');
    event.target.reset();
  };

  return (
    <div id="contact" className="page active">
      <section className="container">
        <h2>Contact European CLIL Academy</h2>
        <p className="section-subtitle">Get in touch to discuss courses, register, or arrange custom training</p>

        <div className="contact-container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div className="contact-email">
              <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '1rem', color: 'var(--teal)' }}>Email Us</h3>
              <p>Contact us directly for course information and registration</p>
              <a href="mailto:info@eclilacademy.eu" style={{ color: 'var(--teal)', fontWeight: 600 }}>info@eclilacademy.eu</a>
            </div>

            <div className="contact-form">
              <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--teal)' }}>Quick Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--slate)' }}>Your Name</label>
                  <input 
                    type="text" 
                    required 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--sand)', background: 'white' }} 
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--slate)' }}>Email Address</label>
                  <input 
                    type="email" 
                    required 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--sand)', background: 'white' }} 
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--slate)' }}>Message</label>
                  <textarea 
                    required 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--sand)', background: 'white', minHeight: '120px' }} 
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Send Message</button>
              </form>
            </div>
          </div>

          <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginTop: '2.5rem', border: '1px solid var(--sand)' }}>
            <h3 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>Our Location</h3>
            <p style={{ color: 'var(--slate)' }}>European CLIL Academy<br/>Chartres, France<br/>(Near Paris, Île-de-France)</p>
            <p style={{ color: 'var(--muted)', marginTop: '0.8rem', fontSize: '0.9rem' }}>Serving teachers across Europe with Erasmus+ compatible training</p>
            <div style={{ marginTop: '1.5rem', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--sand)' }}>
              <iframe 
                src="https://maps.google.com/maps?q=48.4469,1.4833(Chartres,+France)&t=&z=8&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="280" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              >
              </iframe>
            </div>
            <a href="https://www.google.com/maps/place/Chartres,+France" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.2rem', fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: 'var(--teal)', textDecoration: 'none', padding: '0.5rem 1.2rem', border: '1.5px solid var(--teal)', borderRadius: 'var(--radius-pill)', transition: 'all 0.25s' }}>
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
