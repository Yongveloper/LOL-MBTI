import Button from '../Button';

const KakaoBtn = () => {
  console.log(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  return (
    <Button fontColor="yellow" borderColor="whiteYellow">
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoBtn;
