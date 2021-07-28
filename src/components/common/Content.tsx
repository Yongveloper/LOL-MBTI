import styled, { css } from 'styled-components';
import { size } from 'styles/theme';

const Container = styled.main`
  ${({ theme }) => {
    return css`
      max-width: 500px;
      width: 100%;
      background-color: ${theme.color.white};
      border: 1px solid ${theme.color.whiteGray};
    `;
  }}
`;

interface IProps {
  children: React.ReactNode;
}

const Content = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default Content;
