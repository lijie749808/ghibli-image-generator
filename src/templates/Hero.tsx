import Link from 'next/link';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as 'zh' | 'en' | 'ja')}
              className="rounded border border-gray-300 bg-white px-2 py-1 text-gray-800"
            >
              <option value="zh">{t.chinese}</option>
              <option value="en">{t.english}</option>
              <option value="ja">{t.japanese}</option>
            </select>
          </li>
          <li>
            <Link href="/">{t.signIn}</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {t.heroTitle.split('\n')[0]}
              <br />
              <span className="text-primary-500">{t.heroTitle.split('\n')[1]}</span>
            </>
          }
          description={t.heroDescription}
          button={
            <>
              <div className="mx-auto mb-6 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder={t.promptPlaceholder}
                    className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 pr-10 text-gray-700 shadow-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <Link href="#generator">
                <Button xl>{t.startCreating}</Button>
              </Link>
            </>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
