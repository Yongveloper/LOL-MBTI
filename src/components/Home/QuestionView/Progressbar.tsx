import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: 6px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightBlue};
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 25%
  );
  background-size: 1rem 1rem;
  animation: ${animation} 1s linear infinite;
  transition: width 0.5s ease;
`;
const Progressbar = () => {
  return (
    <Container>
      <Bar />
    </Container>
  );
};

export default Progressbar;
