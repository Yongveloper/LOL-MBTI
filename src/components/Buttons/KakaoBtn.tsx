import Button from '../common/Button';
import KakaoIcon from 'public/images/kakaotalk_logo_icon_147272.svg';

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
      <KakaoIcon
        viewBox="0 0 60 55"
        width="30px"
        height="30px"
        style={{ marginRight: '8px' }}
      />
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoBtn;
