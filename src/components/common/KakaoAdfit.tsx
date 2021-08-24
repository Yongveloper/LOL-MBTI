import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.margin.base};
  }
`;

interface IProps {
  width: string;
  height: string;
  unit: string;
}

const KakaoAdfit = ({ width, height, unit }: IProps) => {
  return (
    <>
      <Container>
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit={unit}
          data-ad-width={width}
          data-ad-height={height}
        ></ins>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        ></script>
      </Container>
    </>
  );
};

export default KakaoAdfit;
