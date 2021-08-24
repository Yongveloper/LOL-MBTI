import { useEffect, useState, useRef } from 'react';

interface IProps {
  initialClass: string;
  width: string;
  height: string;
  unit: string;
}

const KakaoAdfit = ({ initialClass, width, height, unit }: IProps) => {
  return (
    <>
      <div className={initialClass}>
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
      </div>
    </>
  );
};

export default KakaoAdfit;
