import Button from 'src/components/common/Button';
import Content from 'src/components/common/Content';
import { questions } from 'src/data/questions';
import styled, { css } from 'styled-components';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';

const QestionText = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.regular};
`;

const SButton = styled(Button)`
  ${({ theme }) => {
    return css`
      :hover {
        background-color: ${theme.color.lightBlue};
        color: ${theme.color.white};
        border-color: transparent;
        transition: all 0.1s linear;
      }
    `;
  }}
`;

const QuestionView = () => {
  console.log(questions);
  return (
    <>
      <PrevNextBtn />
      <Progressbar />
      <Content>
        <QestionText>{questions[7].question}</QestionText>
      </Content>
      {questions[7].answers.map((answer, index) => (
        <SButton key={index}>{answer.answer}</SButton>
      ))}
    </>
  );
};

export default QuestionView;
