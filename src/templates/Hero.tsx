import Link from 'next/link';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="/">Sign in</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'用AI创建\n'}
              <span className="text-primary-500">吉卜力风格的梦幻艺术</span>
            </>
          }
          description="只需输入提示词，即可生成宫崎骏风格的精美图像"
          button={
            <>
              <div className="mx-auto mb-6 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="输入提示词，例如：森林中的小屋，阳光透过树叶"
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
                <Button xl>开始创作</Button>
              </Link>
            </>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
