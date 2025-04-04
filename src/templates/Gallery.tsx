// 新建一个图库组件，展示已生成的精选图像

import React from 'react';

import { Section } from '@/layout/Section';

const Gallery = () => {
  return (
    <Section
      title="图库展示"
      description="欣赏由我们的 AI 生成的精选吉卜力风格图像"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 这里可以添加示例图片 */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="/assets/images/sample1.jpg"
            alt="示例图片1"
            className="w-full"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/assets/images/sample2.jpg"
            alt="示例图片2"
            className="w-full"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/assets/images/sample3.jpg"
            alt="示例图片3"
            className="w-full"
          />
        </div>
      </div>
    </Section>
  );
};

export { Gallery };
