import Button from 'src/components/common/Button';
import CopyBtn from 'src/components/common/Buttons/CopyBtn';
import KakaoBtn from 'src/components/common/Buttons/KakaoBtn';
import Title from './Title';

interface IProps {
  startTest: () => void;
}

const MainView = ({ startTest }: IProps) => {
  return (
    <main>
      <Title />
      <Button
        bgColor="lightBlue"
        fontColor="white"
        borderColor="lightBlue"
        onClick={startTest}
      >
        시작 하기!
      </Button>
      <KakaoBtn />
      <CopyBtn />
    </main>
  );
};

export default MainView;
