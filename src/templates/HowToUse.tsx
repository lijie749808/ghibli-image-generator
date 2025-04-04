import React from 'react';

import { Section } from '@/layout/Section';

const HowToUse = () => {
  return (
    <Section
      title="如何使用"
      description="按照以下简单步骤，开始创建您的吉卜力风格图像"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-500">
            1
          </div>
          <h3 className="text-xl font-semibold">输入提示词</h3>
          <p className="mt-2">在输入框中输入您想要生成的图像描述</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-500">
            2
          </div>
          <h3 className="text-xl font-semibold">点击生成</h3>
          <p className="mt-2">点击{'生成'}按钮，等待 AI 创建您的图像</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-500">
            3
          </div>
          <h3 className="text-xl font-semibold">下载或分享</h3>
          <p className="mt-2">下载生成的图像或分享到社交媒体</p>
        </div>
      </div>
    </Section>
  );
};

export { HowToUse };
