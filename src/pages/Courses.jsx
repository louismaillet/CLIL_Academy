import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, Users, Target, Languages, Calendar, MapPin } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-light-alt-bg py-16 text-center">
    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">{title}</h1>
    {subtitle && <p className="mt-4 text-lg text-body-text max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const CourseDetailItem = ({ icon, label, value }) => (
  <div className="flex items-center text-sm">
    {icon}
    <span className="ml-2"><strong>{label}:</strong> {value}</span>
  </div>
);

const Courses = () => {
  const { t } = useTranslation();
  useScrollReveal('.course-card, .date-card, .format-card');

  return (
    <div>
      <PageHeader 
        title={t('courses.header.title')}
        subtitle={t('courses.header.subtitle')}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="course-card bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
              {t('courses.detail.title')}
            </h3>
            
            <p className="text-body-text mb-8">
              {t('courses.detail.desc')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <CourseDetailItem icon={<Clock className="text-accent w-5 h-5"/>} label={t('courses.lbl.duration')} value={t('courses.val.duration')} />
              <CourseDetailItem icon={<Target className="text-accent w-5 h-5"/>} label={t('courses.lbl.audience')} value={t('courses.val.audience')} />
              <CourseDetailItem icon={<Users className="text-accent w-5 h-5"/>} label={t('courses.lbl.group')} value={t('courses.val.group')} />
              <CourseDetailItem icon={<Languages className="text-accent w-5 h-5"/>} label={t('courses.lbl.language')} value={t('courses.val.language')} />
            </div>

            <div className="bg-light-alt-bg p-6 rounded-md mb-8">
              <h4 className="font-display font-semibold text-xl text-dark-text mb-3">{t('courses.outcomes.title')}</h4>
              <ul className="list-disc list-inside text-body-text space-y-2">
                <li>{t('courses.outcomes.li1')}</li>
                <li>{t('courses.outcomes.li2')}</li>
                <li>{t('courses.outcomes.li3')}</li>
                <li>{t('courses.outcomes.li4')}</li>
              </ul>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h4 className="font-display font-bold text-2xl text-primary mb-6">{t('courses.program.title')}</h4>
              <div className="space-y-4">
                <div className="p-4 border rounded-md border-gray-200">
                  <h5 className="font-bold text-lg text-secondary">{t('courses.program.day1')}</h5>
                  <p className="text-body-text">{t('courses.program.day1_desc')}</p>
                </div>
                <div className="p-4 border rounded-md border-gray-200">
                  <h5 className="font-bold text-lg text-secondary">{t('courses.program.day2')}</h5>
                  <p className="text-body-text">{t('courses.program.day2_desc')}</p>
                </div>
                <div className="p-4 border rounded-md border-gray-200">
                  <h5 className="font-bold text-lg text-secondary">{t('courses.program.day3')}</h5>
                  <p className="text-body-text">{t('courses.program.day3_desc')}</p>
                </div>
                <div className="p-4 border rounded-md border-gray-200">
                  <h5 className="font-bold text-lg text-secondary">{t('courses.program.day4')}</h5>
                  <p className="text-body-text">{t('courses.program.day4_desc')}</p>
                </div>
                <div className="p-4 border rounded-md border-gray-200">
                  <h5 className="font-bold text-lg text-secondary">{t('courses.program.day5')}</h5>
                  <p className="text-body-text">{t('courses.program.day5_desc')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 p-6 rounded-md text-primary pt-8">
               <h4 className="font-display font-bold text-xl mb-2">{t('courses.fin.title')}</h4>
               <p className="text-body-text"><strong>{t('courses.fin.price_lbl')}</strong> {t('courses.fin.price_val')}</p>
               <p className="text-body-text mt-2"><strong>{t('courses.fin.inc_lbl')}</strong> {t('courses.fin.inc_val')}</p>
               <p className="text-body-text mt-2"><strong>{t('courses.fin.loc_lbl')}</strong> {t('courses.fin.loc_val')}</p>
               <p className="text-body-text mt-2"><strong>{t('courses.fin.era_lbl')}</strong> {t('courses.fin.era_val')}</p>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/contact" className="inline-block px-8 py-3 text-center font-semibold rounded-md transition-transform transform hover:scale-105 bg-primary text-white">
                {t('courses.btn_register')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-alt-bg py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t('courses.upcoming.title')}</h2>
            <p className="mt-4 text-lg text-body-text">{t('courses.upcoming.subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="date-card bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="mx-auto text-secondary w-10 h-10 mb-3" />
              <h4 className="font-display text-xl font-semibold">{t('courses.upcoming.d1.title')}</h4>
              <p className="text-body-text">{t('courses.upcoming.d1.date')}</p>
              <span className="inline-block bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full mt-3">{t('courses.upcoming.btn')}</span>
            </div>
            <div className="date-card bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="mx-auto text-secondary w-10 h-10 mb-3" />
              <h4 className="font-display text-xl font-semibold">{t('courses.upcoming.d2.title')}</h4>
              <p className="text-body-text">{t('courses.upcoming.d2.date')}</p>
              <span className="inline-block bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full mt-3">{t('courses.upcoming.btn')}</span>
            </div>
            <div className="date-card bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="mx-auto text-secondary w-10 h-10 mb-3" />
              <h4 className="font-display text-xl font-semibold">{t('courses.upcoming.d3.title')}</h4>
              <p className="text-body-text">{t('courses.upcoming.d3.date')}</p>
              <span className="inline-block bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full mt-3">{t('courses.upcoming.btn')}</span>
            </div>
          </div>
          <div className="text-center mt-12 bg-white p-6 rounded-lg border">
            <p className="text-body-text"><strong>{t('courses.custom.text')}</strong> {t('courses.custom.desc')} <Link to="/contact" className="font-semibold text-primary hover:underline">{t('courses.custom.link')}</Link> {t('courses.custom.end')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t('courses.format.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="format-card bg-white p-8 rounded-lg shadow-lg border">
              <MapPin className="text-accent w-10 h-10 mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-3">{t('courses.format.inperson.title')}</h3>
              <p className="text-body-text">{t('courses.format.inperson.desc')}</p>
            </div>
            <div className="format-card bg-white p-8 rounded-lg shadow-lg border">
              <Users className="text-accent w-10 h-10 mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-3">{t('courses.format.onsite.title')}</h3>
              <p className="text-body-text">{t('courses.format.onsite.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
