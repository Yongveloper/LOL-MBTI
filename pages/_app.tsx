import type { AppProps } from 'next/app';
import Layout from 'src/components/common/Layout';
import ThemeProvider from 'src/context/ThemeProvider';

declare global {
  interface Window {
    Kakao: any;
    gtag: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
