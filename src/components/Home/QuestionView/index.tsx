import { useState } from 'react';
import Button from 'src/components/common/Button';
import Content from 'src/components/common/Content';
import { questions } from 'src/data/questions';
import styled, { css } from 'styled-components';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';
import LoadingModal from 'src/components/common/LoadingModal';

const QestionText = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.regular};
  line-height: 1.5;
`;

const SButton = styled(Button)`
  ${({ theme }) => {
    return css`
      :hover {
        border-color: ${theme.color.bluePuple};
        color: ${theme.color.bluePuple};
        transition: all 0.1s linear;
      }
    `;
  }}
`;

const ResultButton = styled(Button)<{ completed: boolean }>`
  opacity: ${({ completed }) => (completed ? 1 : 0.5)};
  cursor: ${({ completed }) => !completed && 'not-allowed'};
  transition: opacity 0.1s ease-in-out;
`;

const QuestionView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(0);

  const onAnswerClick = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(event.currentTarget.getAttribute('name'));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
    if (
      currentQuestion === completed &&
      currentQuestion <= questions.length - 1
    ) {
      setCompleted((prev) => prev + 1);
    }
  };
  console.log(completed);

  return (
    <>
      <PrevNextBtn
        completed={completed}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <Progressbar current={currentQuestion} />
      <Content>
        {questions[currentQuestion].question.split('\n').map((text) => (
          <QestionText key={text}>{text}</QestionText>
        ))}
      </Content>
      {questions[currentQuestion].answers.map((answer, index) => (
        <SButton key={index} name={answer.type} onClick={onAnswerClick}>
          {answer.answer}
        </SButton>
      ))}
      {currentQuestion === questions.length - 1 && (
        <ResultButton
          bgColor="lightBlue"
          fontColor="white"
          borderColor="lightBlue"
          completed={completed === questions.length}
        >
          결과 보기!
        </ResultButton>
      )}
      {/* <LoadingModal /> */}
    </>
  );
};

export default QuestionView;
