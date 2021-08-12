import { useRef } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Clipboard = styled.input.attrs({ type: 'text' })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const CopyBtn = () => {
  const copyUrlRef = useRef<HTMLInputElement>(null);
  let currentUrl = '';

  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  const copyHandler = () => {
    if (!document.queryCommandSupported('copy')) {
      return alert('복사하기가 지원되지 않는 브라우저입니다.');
    }
    if (copyUrlRef && copyUrlRef.current) {
      copyUrlRef.current.select();
      document.execCommand('copy');
      alert('현재 주소가 클립보드에 복사되었습니다.');
    }
  };

  return (
    <>
      <Button onClick={copyHandler}>링크 복사하기</Button>
      <Clipboard ref={copyUrlRef} value={currentUrl} readOnly />
    </>
  );
};

export default CopyBtn;
