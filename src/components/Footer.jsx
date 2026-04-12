import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-screen-xl mx-auto p-8 md:p-12">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/images/Logo.png" 
                alt="European CLIL Academy Logo" 
                className="h-12 md:h-16 lg:h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">{t('footer.navigate')}</h2>
              <ul className="text-gray-300 font-light space-y-2">
                <li><Link to="/about" className="hover:underline">{t('footer.about_us')}</Link></li>
                <li><Link to="/courses" className="hover:underline">{t('footer.our_courses')}</Link></li>
                <li><Link to="/contact" className="hover:underline">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">{t('footer.legal')}</h2>
              <ul className="text-gray-300 font-light space-y-2">
                <li><a href="#" className="hover:underline">{t('footer.privacy_policy')}</a></li>
                <li><a href="#" className="hover:underline">{t('footer.terms')}</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">{t('nav.contact')}</h2>
              <ul className="text-gray-300 font-light space-y-2">
                <li>Chartres, France</li>
                <li><a href="mailto:info@eclilacademy.eu" className="hover:underline">info@eclilacademy.eu</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200/30 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2026 <Link to="/" className="hover:underline">European CLIL Academy™</Link>. {t('footer.all_rights_reserved')}.
          </span>
          {/* Social media icons can be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
