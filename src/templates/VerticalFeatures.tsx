import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="特色功能"
    description="探索我们的特色功能，为您提供无与伦比的体验"
  >
    <VerticalFeatureRow
      title="高质量吉卜力风格图像"
      description="我们的 AI 技术可以生成高质量的吉卜力风格图像，让您的创作更加精美"
      image="/assets/images/feature.svg"
      imageAlt="高质量吉卜力风格图像"
    />
    <VerticalFeatureRow
      title="简单易用的界面"
      description="我们的用户界面设计简洁明了，让您轻松上手，无需复杂的操作"
      image="/assets/images/feature2.svg"
      imageAlt="简单易用的界面"
      reverse
    />
    <VerticalFeatureRow
      title="快速生成"
      description="我们的 AI 技术可以在短时间内快速生成吉卜力风格图像，让您的创作更加高效"
      image="/assets/images/feature3.svg"
      imageAlt="快速生成"
    />
    <VerticalFeatureRow
      title="多样化的风格选项"
      description="我们提供多种不同的风格选项，让您可以根据自己的喜好生成不同风格的吉卜力风格图像"
      image="/assets/images/feature4.svg"
      imageAlt="多样化的风格选项"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
