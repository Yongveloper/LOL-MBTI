import { GetStaticProps, GetStaticPropsContext } from 'next';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Content from 'src/components/common/Content';
import types from 'src/data/result';
import ContentList from 'src/components/Mbti/ContentList';
import Button from 'src/components/common/Button';
import KakaoBtn from 'src/components/common/Buttons/KakaoBtn';
import CopyBtn from 'src/components/common/Buttons/CopyBtn';
import { useRouter } from 'next/router';

const SContent = styled(Content)`
  ${({ theme }) => {
    return css`
      padding: ${theme.padding.small} ${theme.padding.base};
    `;
  }}
`;

const Div = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: ${theme.padding.base} 0;
      line-height: 1.5;
      :not(:last-child) {
        border-bottom: 3px solid ${theme.color.borderColor};
      }

      p {
        :not(:last-child) {
          margin-bottom: ${theme.margin.base};
        }
      }
    `;
  }}
`;

const PositionText = styled.span`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.margin.small};
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.weight.large};
    `;
  }}
`;

const BoldText = styled.h3`
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.margin.base};
      font-weight: ${theme.font.weight.large};
    `;
  }}
`;

interface IProps {
  type: string;
}

const Type = ({ type }: IProps) => {
  const contents = types[type];
  const { position, image, content, note } = contents;
  const router = useRouter();

  const onRestartClick = () => router.push('/');

  return (
    <main>
      <SContent>
        <Div>
          {type}
          <h2>
            {position[0]}
            <PositionText>{position[1]}</PositionText>
          </h2>
          <Image src={image} width={100} height={100} alt="position" />
        </Div>
        <Div>
          <ContentList content={content} />
          <BoldText>
            {type} {position[1]}이(가) 주의할 점:
          </BoldText>
          <p>{note}</p>
        </Div>
        <Div>
          <BoldText>혹시 평소 MBTI와 다른가요?</BoldText>
          <p>
            롤을 할 때는 다른 인격이 나올 수 있어요!
            <br />
            결과의 라인대로 한번 플레이를 해보는 건 어떨까요!?
          </p>
        </Div>
      </SContent>
      <Button
        bgColor="lightBlue"
        fontColor="white"
        borderColor="lightBlue"
        onClick={onRestartClick}
      >
        다시하기!
      </Button>
      <Button fontColor="red" borderColor="pink">
        결과 저장하기
      </Button>
      <KakaoBtn />
      <CopyBtn />
    </main>
  );
};

export default Type;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const type = context.params?.type;
  return {
    props: {
      type,
    },
  };
};

export const getStaticPaths = async () => {
  const types = [
    'ISTJ',
    'ISFJ',
    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP',
    'ESTJ',
    'ESFJ',
    'INFJ',
    'INTJ',
    'INFP',
    'INTP',
    'ENFP',
    'ENTP',
    'ENFJ',
    'ENTJ',
  ];
  const paths = types.map((type) => ({
    params: { type },
  }));
  return {
    paths,
    fallback: false,
  };
};
