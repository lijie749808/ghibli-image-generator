export const AppConfig = {
  site_name: {
    zh: '吉卜力风格图像生成器',
    en: 'Ghibli Style Image Generator',
    ja: 'ジブリスタイル画像ジェネレーター'
  },
  title: {
    zh: '吉卜力风格图像生成器 | AI 生成吉卜力风格图像',
    en: 'Ghibli Style Image Generator | AI Generated Ghibli Style Images',
    ja: 'ジブリスタイル画像ジェネレーター | AIで生成するジブリスタイル画像'
  },
  description: {
    zh: '使用人工智能生成宫崎骏吉卜力风格的图像，只需输入提示词即可创建梦幻般的艺术作品',
    en: 'Generate Miyazaki Ghibli style images using artificial intelligence, just enter a prompt to create dreamlike artwork',
    ja: '人工知能を使用して宮崎駿ジブリスタイルの画像を生成し、プロンプトを入力するだけで夢のようなアートワークを作成できます'
  },
  locale: 'zh', // 默认语言
  
  // 获取当前语言的配置
  getConfig(language: 'zh' | 'en' | 'ja') {
    return {
      site_name: this.site_name[language],
      title: this.title[language],
      description: this.description[language],
      locale: language
    };
  }
};
