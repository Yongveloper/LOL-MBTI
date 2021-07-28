import GlobalStyle from 'styles/GlobalStyle';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
