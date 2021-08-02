import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  ${({ theme }) => {
    return styled.css`
      body {
        background-color: ${theme.color.mainBackground};
        font-family: ${theme.font.family.base};
        font-size: ${theme.font.size.medium};
        color: ${theme.color.mainFontColor};
        user-select: none;
        transition: all 0.25s linear;

        ${theme.device.mobileS} {
          padding: ${theme.padding.base} 0;
        }
      }
    `;
  }}

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
