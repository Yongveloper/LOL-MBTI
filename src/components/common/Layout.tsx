import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import { size } from 'styles/theme';
import Footer from './Footer';
import DarkModeBtn from '../Buttons/DarkModeBtn';

const Wrapper = styled.div`
  width: 100%;
  max-width: ${size.mobile};
  min-height: 100vh;
  margin: auto;
  padding: ${({ theme }) => theme.padding.base};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <DarkModeBtn />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
