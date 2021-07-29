import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import { size } from 'styles/theme';

const Wrapper = styled.div`
  width: 100%;
  max-width: ${size.mobile};
  min-height: 100vh;
  margin: auto;
  padding: 0 ${({ theme }) => theme.padding.base};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
);

export default Layout;
