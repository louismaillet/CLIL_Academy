import React from 'react';
import { CheckCircle, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-light-alt-bg py-16 text-center">
    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">{title}</h1>
    {subtitle && <p className="mt-4 text-lg text-body-text max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-2xl font-display font-semibold text-primary mb-4">{title}</h3>
    {children}
  </div>
);

const About = () => {
  const { t } = useTranslation();
  useScrollReveal('.info-card, .expertise-item');

  return (
    <div>
      <PageHeader 
        title={t('about.header.title')}
        subtitle={t('about.header.subtitle')}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <InfoCard title={t('about.mission.title')}>
            <p className="text-body-text mb-4">
              {t('about.mission.desc1')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-accent w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>{t('about.mission.li1')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>{t('about.mission.li2')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-accent w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>{t('about.mission.li3')}</span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title={t('about.alignment.title')}>
            <p className="text-body-text">
              {t('about.alignment.desc')}
            </p>
          </InfoCard>
        </div>
      </section>

      <section className="bg-light-alt-bg py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t('about.trainer.title')}</h2>
            <p className="mt-4 text-lg text-body-text max-w-2xl mx-auto">
              {t('about.trainer.subtitle')}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="mx-auto w-48 h-48 rounded-full bg-light-alt-bg flex items-center justify-center">
                <User className="w-24 h-24 text-gray-400" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">{t('about.trainer.role')}</h3>
              <p className="text-body-text mb-6">
                {t('about.trainer.desc')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="expertise-item flex items-center bg-gray-100 p-3 rounded-md">
                  <CheckCircle className="text-accent w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{t('about.trainer.tag1')}</span>
                </div>
                <div className="expertise-item flex items-center bg-gray-100 p-3 rounded-md">
                  <CheckCircle className="text-accent w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{t('about.trainer.tag2')}</span>
                </div>
                <div className="expertise-item flex items-center bg-gray-100 p-3 rounded-md">
                  <CheckCircle className="text-accent w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{t('about.trainer.tag3')}</span>
                </div>
                <div className="expertise-item flex items-center bg-gray-100 p-3 rounded-md">
                  <CheckCircle className="text-accent w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{t('about.trainer.tag4')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
