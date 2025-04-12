import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { translations } from '../utils/translations';
import { Logo } from './Logo';

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const languageMenuRef = useRef<HTMLLIElement>(null);

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageSelect = (lang: 'zh' | 'en' | 'ja') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // 点击外部区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="relative" ref={languageMenuRef}>
            <button
              className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-primary-500"
              onClick={toggleLanguageMenu}
            >
              <span>{t.language}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-1 w-32 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all">
                <div className="flex flex-col">
                  <button
                    onClick={() => handleLanguageSelect('zh')}
                    className={`px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50 hover:text-primary-500 ${language === 'zh' ? 'bg-gray-50 text-primary-500' : 'text-gray-700'}`}
                  >
                    {t.chinese}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className={`px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50 hover:text-primary-500 ${language === 'en' ? 'bg-gray-50 text-primary-500' : 'text-gray-700'}`}
                  >
                    {t.english}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('ja')}
                    className={`px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50 hover:text-primary-500 ${language === 'ja' ? 'bg-gray-50 text-primary-500' : 'text-gray-700'}`}
                  >
                    {t.japanese}
                  </button>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              href="/"
              className="text-gray-700 transition-colors hover:text-primary-500"
            >
              {t.signIn}
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {t.heroTitle.split('\n')[0]}
              <br />
              <span className="text-primary-500">
                {t.heroTitle.split('\n')[1]}
              </span>
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
