import { GetStaticProps, GetStaticPropsContext } from 'next';
import types from 'src/data/result';

interface IProps {
  type: string;
}

const Type = ({ type }: IProps) => {
  const contents = types[type];
  console.log(contents);
  return (
    <div>
      {contents.positon}
      <ul>
        {contents.content.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <p>{contents.note}</p>
    </div>
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
