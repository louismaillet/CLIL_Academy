import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p><strong>European CLIL Academy</strong></p>
        <p>Professional Development for Primary Teachers through CLIL</p>
        <p style={{ marginTop: '1rem' }}>
          Chartres, France | <a href="mailto:info@eclilacademy.eu">info@eclilacademy.eu</a>
        </p>
        <p style={{ marginTop: '2rem', fontSize: '0.85rem', opacity: 0.7 }}>
          © 2026 European CLIL Academy. All rights reserved. Erasmus+ compatible training for European educators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
