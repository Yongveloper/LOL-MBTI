import styled, { css } from 'styled-components';

const Container = styled.main`
  ${({ theme }) => {
    return css`
      width: 100%;
      padding: ${theme.padding.xLarge} 0;
      margin-bottom: ${theme.margin.xLarge};
      background-color: ${theme.color.white};
      box-shadow: ${theme.shadow.base};
      border: 1px solid ${theme.color.whiteGray};
      text-align: center;
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
