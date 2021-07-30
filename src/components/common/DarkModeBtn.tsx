import React from 'react';
import useDarkMode from 'src/hooks/useDarkMode';

const DarkModeBtn = () => {
  const [themeMode, switchMode] = useDarkMode();
  return <button onClick={switchMode}>{themeMode}</button>;
};

export default DarkModeBtn;
