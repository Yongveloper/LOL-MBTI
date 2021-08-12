import { lightTheme, darkTheme } from '../../styles/theme';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export interface Theme {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<Theme | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState('light');
  const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    setThemeMode(window.localStorage.getItem('theme') || 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
