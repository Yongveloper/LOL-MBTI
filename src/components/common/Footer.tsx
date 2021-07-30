import styled, { css } from 'styled-components';

const Wrapper = styled.footer`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      justify-content: center;
      & span {
        font-size: ${theme.font.size.micro};
        color: ${theme.color.darkGray};
      }
    `;
  }}
`;

const Footer = () => (
  <Wrapper>
    <span>Contact: yongyong5766@gmail.com</span>
  </Wrapper>
);

export default Footer;
