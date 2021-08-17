import { useEffect } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.footer`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & span {
        font-size: ${theme.font.size.micro};
        color: ${theme.color.darkGray};
        margin-top: ${theme.margin.base};
      }
    `;
  }}
`;

const Footer = () => {
  useEffect(() => {
    const adfitContainer = document.querySelector('.adfit');
    const ins = document.createElement('ins');
    const script = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style.display = 'none';
    script.async = true;
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '300');
    ins.setAttribute('data-ad-height', '250');
    ins.setAttribute('data-ad-unit', 'DAN-kNNgmAXByO4ajNL6');
    if (adfitContainer) {
      adfitContainer.appendChild(ins);
      adfitContainer.appendChild(script);
    }
  }, []);
  return (
    <Wrapper>
      <div className="adfit" />
      <span>Contact: yongyong5766@gmail.com</span>
    </Wrapper>
  );
};

export default Footer;
