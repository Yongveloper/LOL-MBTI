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

  ${({ theme }) => {
    return styled.css`
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.color.lightGray};
        font-family: ${theme.font.family.base};
        font-size: ${theme.font.size.regular};
      }
    `;
  }}

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
