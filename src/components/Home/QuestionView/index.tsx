import { useState } from 'react';
import Button from 'src/components/common/Button';
import Content from 'src/components/common/Content';
import { questions } from 'src/data/questions';
import styled, { css } from 'styled-components';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';

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
      currentQuestion < questions.length - 1
    ) {
      setCompleted((prev) => prev + 1);
    }
  };

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
        <Button bgColor="lightBlue" fontColor="white" borderColor="lightBlue">
          결과 보기!
        </Button>
      )}
    </>
  );
};

export default QuestionView;
