import Button from 'src/components/common/Button';
import CopyBtn from 'src/components/common/Buttons/CopyBtn';
import KakaoBtn from 'src/components/common/Buttons/KakaoBtn';
import Title from './Title';

interface IProps {
  startHandler: () => void;
}

const MainView = ({ startHandler }: IProps) => {
  return (
    <main>
      <Title />
      <Button
        bgColor="lightBlue"
        fontColor="white"
        borderColor="lightBlue"
        onClick={startHandler}
      >
        시작 하기!
      </Button>
      <KakaoBtn />
      <CopyBtn />
    </main>
  );
};

export default MainView;
