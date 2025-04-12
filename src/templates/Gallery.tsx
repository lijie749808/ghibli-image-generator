// 新建一个图库组件，展示已生成的精选图像

import React from 'react';

import { useLanguage } from '@/contexts/LanguageContext';
import { Section } from '@/layout/Section';
import { translations } from '@/utils/translations';

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section title={t.galleryTitle} description={t.galleryDescription}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 这里可以添加示例图片 */}
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src="/assets/images/sample1.jpg"
            alt={`${t.galleryTitle} 1`}
            className="size-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src="/assets/images/sample2.jpg"
            alt={`${t.galleryTitle} 2`}
            className="size-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src="/assets/images/sample3.jpg"
            alt={`${t.galleryTitle} 3`}
            className="size-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export { Gallery };
