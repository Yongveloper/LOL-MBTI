import { useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import styled from 'styled-components';

const PrevNextBtnContainer = styled.div<{
  prevDisabled: boolean;
  nextDisabled: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:first-child {
      color: ${({ prevDisabled, theme }) =>
        prevDisabled && theme.color.darkGray};
      cursor: ${({ prevDisabled }) => prevDisabled && 'not-allowed'};
    }
    &:nth-child(2) {
      color: ${({ nextDisabled, theme }) =>
        nextDisabled && theme.color.darkGray};
      cursor: ${({ nextDisabled }) => nextDisabled && 'not-allowed'};
    }
  }
`;

interface IProps {
  completed: number;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

type ButtonType = 'prev' | 'next';

const PrevNextBtn = ({
  completed,
  currentQuestion,
  setCurrentQuestion,
}: IProps) => {
  const prevDisabled = currentQuestion === 0;
  const nextDisabled = completed === currentQuestion || currentQuestion === 11;

  const onClick = (type: ButtonType) => {
    if (type === 'prev' && !prevDisabled) {
      setCurrentQuestion((prev) => prev - 1);
    } else if (type === 'next' && !nextDisabled) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <PrevNextBtnContainer
      prevDisabled={prevDisabled}
      nextDisabled={nextDisabled}
    >
      <IoIosArrowDropleft onClick={() => onClick('prev')} />
      <IoIosArrowDropright onClick={() => onClick('next')} />
    </PrevNextBtnContainer>
  );
};

export default PrevNextBtn;
