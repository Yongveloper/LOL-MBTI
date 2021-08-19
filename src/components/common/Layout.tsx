import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import { size } from 'styles/theme';
import Footer from './Footer';
import DarkModeBtn from '../Buttons/DarkModeBtn';
import { useEffect } from 'react';

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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);
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
