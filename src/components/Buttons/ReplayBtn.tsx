import Button from '../common/Button';
import styled from 'styled-components';
import Link from 'next/link';

const SButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  a {
    width: 100%;
  }
  a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

const ReplayBtn = () => {
  return (
    <SButton bgColor="lightBlue" fontColor="white" borderColor="lightBlue">
      <Link href="/">
        <a>테스트 하기</a>
      </Link>
    </SButton>
  );
};

export default ReplayBtn;
