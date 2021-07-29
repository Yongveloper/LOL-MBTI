import Head from 'next/head';
import Content from 'src/components/common/Content';
import Layout from 'src/components/common/Layout';
import { MainView } from 'src/components/Home';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>롤에서 알아보는 MBTI 유형 - 나에게 맞는 포지션은?</title>
      </Head>
      <Content>
        <MainView />
      </Content>
    </Layout>
  );
}
