import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GraduationCap, BookOpen, Globe, Target, Hand, Users, Euro, MessageSquare, Award } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import europeMap from '/images/Carte vectorielle de l\'Europe en bleu.png';

// Reusable Button Component
const Button = ({ to, children, variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-block px-8 py-3 text-center font-semibold rounded-md transition-transform transform hover:scale-105';
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-accent text-white',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="feature-box bg-white p-6 rounded-lg shadow-sm text-center">
      <div className="flex justify-center items-center mb-4 w-12 h-12 mx-auto bg-secondary/20 text-secondary rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-display mb-2">{title}</h3>
      <p className="text-body-text">{children}</p>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation();
  useScrollReveal('.feature-box, .course-card, .info-card');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light-alt-bg py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-semibold max-w-3xl mx-auto mb-4">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-body-text max-w-3xl mx-auto mb-8">
            {t('home.hero.description')}
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/courses">{t('home.hero.btn_courses')}</Button>
            <Button to="/contact" variant="outline">{t('home.hero.btn_contact')}</Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.welcome.title')}</h2>
          <p className="text-body-text max-w-3xl mx-auto mb-12">
            {t('home.welcome.desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<GraduationCap size={24} />} title={t('home.feat1.title')}>
              {t('home.feat1.desc')}
            </FeatureCard>
            <FeatureCard icon={<BookOpen size={24} />} title={t('home.feat2.title')}>
              {t('home.feat2.desc')}
            </FeatureCard>
            <FeatureCard icon={<Globe size={24} />} title={t('home.feat3.title')}>
              {t('home.feat3.desc')}
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Erasmus+ Section */}
      <section className="bg-light-alt-bg py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-bold text-secondary uppercase">{t('home.erasmus.tag')}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">{t('home.erasmus.title')}</h2>
            <p className="text-body-text mb-6">
              {t('home.erasmus.desc')}
            </p>
            <Button to="/courses" variant="secondary">{t('home.erasmus.btn')}</Button>
          </div>
          <div className="relative">
            <img src={europeMap} alt="Map of Europe" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.why.title')}</h2>
            <p className="text-body-text max-w-2xl mx-auto">
              {t('home.why.desc')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Target size={24} />} title={t('home.why.1')} />
            <FeatureCard icon={<Hand size={24} />} title={t('home.why.2')} />
            <FeatureCard icon={<Users size={24} />} title={t('home.why.3')} />
            <FeatureCard icon={<Euro size={24} />} title={t('home.why.4')} />
            <FeatureCard icon={<MessageSquare size={24} />} title={t('home.why.5')} />
            <FeatureCard icon={<Award size={24} />} title={t('home.why.6')} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
