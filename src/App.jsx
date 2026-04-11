import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for legacy .html paths */}
          <Route path="/index.html" element={<Home />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/courses.html" element={<Courses />} />
          <Route path="/contact.html" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
