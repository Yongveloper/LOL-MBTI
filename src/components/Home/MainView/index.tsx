import Button from 'src/components/common/Button';
import Title from './Title';

const MainView = () => {
  return (
    <>
      <Title />
      <Button bgColor="lightBlue" fontColor="white" borderColor="lightBlue">
        시작 하기!
      </Button>
      <Button fontColor="yellow" borderColor="whiteYellow">
        카카오톡 공유하기
      </Button>
      <Button>링크 복사하기</Button>
    </>
  );
};

export default MainView;
