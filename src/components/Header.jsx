import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const navLinkClasses = (path) => {
    const baseClasses = "block py-2 pr-4 pl-3 text-body-text rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0";
    const activeClasses = "text-primary";
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    return `${baseClasses} ${isActive ? activeClasses : ''}`;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className={`bg-light-bg/90 backdrop-blur-lg sticky top-0 z-50 border-b border-border-gray/60 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div >
          <Link to="/" className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="European CLIL Academy Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto"
              aria-hidden="true"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center text-body-text hover:text-primary focus:outline-none bg-gray-100/50 hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4 mr-2" />
              {i18n.language?.toUpperCase().substring(0,2) || 'EN'}
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-50 border border-gray-100">
                <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left font-sans">English</button>
                <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left font-sans">Français</button>
                <button onClick={() => changeLanguage('es')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-left font-sans">Español</button>
              </div>
            )}
          </div>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md hover:bg-gray-200 transition-all duration-300 md:hidden"
          >
            Menu
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/" className={navLinkClasses('/')} onClick={closeMenu}>{t('nav.home')}</Link>
            </li>
            <li>
              <Link to="/about" className={navLinkClasses('/about')} onClick={closeMenu}>{t('nav.about')}</Link>
            </li>
            <li>
              <Link to="/courses" className={navLinkClasses('/courses')} onClick={closeMenu}>{t('nav.courses')}</Link>
            </li>
            <li>
              <Link to="/contact" className={navLinkClasses('/contact')} onClick={closeMenu}>{t('nav.contact')}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
