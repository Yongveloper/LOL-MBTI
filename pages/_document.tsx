import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="CYaoNc6HqLsOSdLZsPQPSOUW2UTLv8D94DLu6H485HI"
          />
          <meta name="robots" content="ALL" />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="yongyong" />
          <meta name="reply-to" content="yongyong5766@gmail.com" />
          <meta name="content-language" content="kr" />
          <meta
            name="description"
            content="롤에서 알아보는 나의 MBTI 유형과 해당 유형에 맞는 나의 포지션은 어디일까?"
          />
          <meta
            name="keywords"
            content="롤 MBTI, 롤에서 알아보는 MBTI 유형, MBTI, 롤 포지션 찾기, 롤 MBTI, lol mbti, lol mbti 유형"
          />
          <meta
            name="naver-site-verification"
            content="34f935a8a20f82e88b62513a988146232cbd113c"
          />
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5623149944196012"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
