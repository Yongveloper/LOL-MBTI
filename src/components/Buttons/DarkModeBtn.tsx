import styled, { css } from 'styled-components';
import useDarkMode from 'src/hooks/useDarkMode';
import SunnyIcon from 'public/images/sunny.svg';
import MoonIcon from 'public/images/moon.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.margin.base};
`;

const Button = styled.button<{ themeMode: string | undefined }>`
  ${({ theme, themeMode }) => {
    return css`
      width: 80px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      padding: ${theme.padding.small};
      background: ${theme.color.gradient};
      border: 2px solid ${theme.color.borderColor};
      border-radius: 30px;
      cursor: pointer;

      svg {
        width: 1.5rem;
        height: auto;
        transition: all 0.25s linear;

        &:first-child {
          transform: ${themeMode === 'light'
            ? 'translateY(0)'
            : 'translateY(100px)'};
        }

        &:nth-child(2) {
          transform: ${themeMode === 'light'
            ? 'translateY(-100px)'
            : 'translateY(0)'};
        }
      }
    `;
  }}
`;

const DarkModeBtn = () => {
  const [themeMode, switchMode] = useDarkMode();
  return (
    <Wrapper>
      <Button themeMode={themeMode} onClick={switchMode}>
        <SunnyIcon />
        <MoonIcon />
      </Button>
    </Wrapper>
  );
};

export default DarkModeBtn;
