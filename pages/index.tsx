import Head from 'next/head';
import Image from 'next/image';
import Content from 'src/components/common/Content';
import Layout from 'src/components/common/Layout';
import styled, { css } from 'styled-components';
import topIcon from 'public/images/position/top.png';
import jgIcon from 'public/images/position/jg.png';
import midIcon from 'public/images/position/mid.png';
import adIcon from 'public/images/position/ad.png';
import spIcon from 'public/images/position/sp.png';

type STextProps = {
  title: 'large' | 'base';
};

type STextColor = {
  color: 'yellow' | 'bluePuple' | 'lightBlue' | 'laime' | 'red';
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p<STextProps>`
  ${({ theme, title }) => {
    return css`
      font-size: ${title === 'large' && theme.font.size[title]};
      font-weight: ${title === 'large'
        ? theme.font.weight[title]
        : theme.font.weight.medium};
      margin-bottom: ${theme.margin.base};

      ${theme.device.mobileS} {
        font-size: ${title === 'large'
          ? theme.font.size.medium
          : theme.font.size.small};
      }
    `;
  }}
`;

const TextColor = styled.span<STextColor>`
  ${({ theme, color }) => {
    return css`
      color: ${theme.color[color]};
    `;
  }}
`;

const ImageContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>롤에서 알아보는 MBTI 유형 - 나에게 맞는 포지션은?</title>
      </Head>
      <Content>
        <Text title="large">
          <TextColor color="lightBlue">롤</TextColor>에서 알아보는
          <br />
          <TextColor color="red">M</TextColor>
          <TextColor color="yellow">B</TextColor>
          <TextColor color="laime">T</TextColor>
          <TextColor color="bluePuple">I</TextColor> 테스트
        </Text>
        <Text title="base">
          롤에서 알아보는 MBTI 유형과
          <br />
          나에게 맞는 포지션은 어디일까?
        </Text>
        <ImageContainer>
          <Image src={topIcon} alt="mid" width={50} height={50} />
          <Image src={jgIcon} alt="jungle" width={50} height={50} />
          <Image src={midIcon} alt="mid" width={50} height={50} />
          <Image src={adIcon} alt="AD" width={50} height={50} />
          <Image src={spIcon} alt="suppoter" width={50} height={50} />
        </ImageContainer>
      </Content>
    </Layout>
  );
}
