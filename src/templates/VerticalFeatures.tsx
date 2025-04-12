import { useLanguage } from '../contexts/LanguageContext';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  const { language } = useLanguage();

  // 多语言内容
  const content = {
    zh: {
      title: '特色功能',
      description: '探索我们的特色功能，为您提供无与伦比的体验',
      features: [
        {
          title: '高质量吉卜力风格图像',
          description:
            '我们的 AI 技术可以生成高质量的吉卜力风格图像，让您的创作更加精美',
          image: '/assets/images/feature.svg',
          imageAlt: '高质量吉卜力风格图像',
        },
        {
          title: '简单易用的界面',
          description:
            '我们的用户界面设计简洁明了，让您轻松上手，无需复杂的操作',
          image: '/assets/images/feature2.svg',
          imageAlt: '简单易用的界面',
        },
        {
          title: '快速生成',
          description:
            '我们的 AI 技术可以在短时间内快速生成吉卜力风格图像，让您的创作更加高效',
          image: '/assets/images/feature3.svg',
          imageAlt: '快速生成',
        },
      ],
    },
    en: {
      title: 'Features',
      description:
        'Explore our features that provide an unparalleled experience',
      features: [
        {
          title: 'High-Quality Ghibli Style Images',
          description:
            'Our AI technology generates high-quality Ghibli style images to make your creations more beautiful',
          image: '/assets/images/feature.svg',
          imageAlt: 'High-Quality Ghibli Style Images',
        },
        {
          title: 'User-Friendly Interface',
          description:
            'Our user interface is designed to be clean and intuitive, allowing you to get started easily without complex operations',
          image: '/assets/images/feature2.svg',
          imageAlt: 'User-Friendly Interface',
        },
        {
          title: 'Fast Generation',
          description:
            'Our AI technology can quickly generate Ghibli style images in a short time, making your creation process more efficient',
          image: '/assets/images/feature3.svg',
          imageAlt: 'Fast Generation',
        },
      ],
    },
    ja: {
      title: '特徴',
      description: '比類のない体験を提供する特徴をご覧ください',
      features: [
        {
          title: '高品質なジブリスタイルの画像',
          description:
            '私たちのAI技術は、高品質なジブリスタイルの画像を生成し、あなたの創作をより美しくします',
          image: '/assets/images/feature.svg',
          imageAlt: '高品質なジブリスタイルの画像',
        },
        {
          title: '使いやすいインターフェース',
          description:
            'ユーザーインターフェースはシンプルで直感的に設計されており、複雑な操作なしで簡単に始められます',
          image: '/assets/images/feature2.svg',
          imageAlt: '使いやすいインターフェース',
        },
        {
          title: '高速生成',
          description:
            '私たちのAI技術は短時間で素早くジブリスタイルの画像を生成し、より効率的な創作を可能にします',
          image: '/assets/images/feature3.svg',
          imageAlt: '高速生成',
        },
      ],
    },
  };

  // 获取当前语言的内容
  const currentContent = content[language];

  return (
    <Section
      title={currentContent.title}
      description={currentContent.description}
    >
      {currentContent.features.map((feature, index) => (
        <VerticalFeatureRow
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          imageAlt={feature.imageAlt}
          reverse={index % 2 === 1}
        />
      ))}
    </Section>
  );
};

export { VerticalFeatures };
