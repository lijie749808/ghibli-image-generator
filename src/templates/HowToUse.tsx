import React from 'react';

import { Section } from '@/layout/Section';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const HowToUse = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      title={t.howToUseTitle}
      description={t.howToUseDescription}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-500">
            1
          </div>
          <h3 className="text-xl font-semibold">{t.step1Title}</h3>
          <p className="mt-2">{t.step1Description}</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-500">
            2
          </div>
          <h3 className="text-xl font-semibold">{t.step2Title}</h3>
          <p className="mt-2">{t.step2Description}</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-500">
            3
          </div>
          <h3 className="text-xl font-semibold">{t.step3Title}</h3>
          <p className="mt-2">{t.step3Description}</p>
        </div>
      </div>
    </Section>
  );
};

export { HowToUse };
