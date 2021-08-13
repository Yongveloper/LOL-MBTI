import Button from '../common/Button';

const KakaoBtn = () => {
  const onClick = () => {
    if (typeof window == 'undefined') {
      return '카카오로 공유하기에 실패했습니다.';
    }
    const { Kakao, location } = window;
    Kakao.Link.sendScrap({
      requestUrl: location.href,
    });
  };
  return (
    <Button fontColor="yellow" borderColor="whiteYellow" onClick={onClick}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoBtn;
