import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-light-alt-bg py-16 text-center">
    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">{title}</h1>
    {subtitle && <p className="mt-4 text-lg text-body-text max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  useScrollReveal('.contact-card, .form-group');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(t('contact.form.success'));
    event.target.reset();
  };

  return (
    <div>
      <PageHeader 
        title={t('contact.header.title')}
        subtitle={t('contact.header.subtitle')}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="contact-card bg-white p-8 rounded-lg shadow-md border">
                <Mail className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2">{t('contact.email.title')}</h3>
                <p className="text-body-text mb-4">{t('contact.email.desc')}</p>
                <a href="mailto:info@eclilacademy.eu" className="font-semibold text-primary hover:underline">
                  info@eclilacademy.eu
                </a>
              </div>
              <div className="contact-card bg-white p-8 rounded-lg shadow-md border">
                <MapPin className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2">{t('contact.loc.title')}</h3>
                <p className="text-body-text">
                  {t('contact.loc.p1')}<br />
                  {t('contact.loc.p2')}<br />
                  {t('contact.loc.p3')}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="font-display text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-dark-text">{t('contact.form.name')}</label>
                  <input type="text" id="name" required className="bg-gray-50 border border-border-gray text-dark-text text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-text">{t('contact.form.email')}</label>
                  <input type="email" id="email" required className="bg-gray-50 border border-border-gray text-dark-text text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-dark-text">{t('contact.form.message')}</label>
                  <textarea id="message" rows="4" required className="bg-gray-50 border border-border-gray text-dark-text text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-3 text-center font-semibold rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50">
                  {t('contact.form.btn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
