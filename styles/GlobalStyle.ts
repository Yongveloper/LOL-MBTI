import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.lightGray};
    font-family: 'Noto Sans KR', sans-serif;
    font-size: ${({ theme }) => theme.font.size.regular};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
