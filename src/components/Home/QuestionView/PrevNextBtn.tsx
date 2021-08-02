import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import styled from 'styled-components';

const PrevNextBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
`;

const PrevNextBtn = () => {
  return (
    <PrevNextBtnContainer>
      <IoIosArrowDropleft />
      <IoIosArrowDropright />
    </PrevNextBtnContainer>
  );
};

export default PrevNextBtn;
