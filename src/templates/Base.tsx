import { Section } from '@/layout/Section';

import ImageGenerator from '../components/ImageGenerator';
import { useLanguage } from '../contexts/LanguageContext';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import { Hero } from './Hero';
import { HowToUse } from './HowToUse';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const { language } = useLanguage();

  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={AppConfig.title[language as keyof typeof AppConfig.title]}
        description={
          AppConfig.description[language as keyof typeof AppConfig.description]
        }
      />
      <Hero />
      <Section id="generator">
        <ImageGenerator />
      </Section>
      <Gallery />
      <HowToUse />
      <VerticalFeatures />
      <Footer />
    </div>
  );
};

export { Base };
