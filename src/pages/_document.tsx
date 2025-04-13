import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          {/* Google Analytics 跟踪代码 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SN2C0Z7V7S"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SN2C0Z7V7S');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          {/* 这是主页 */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
