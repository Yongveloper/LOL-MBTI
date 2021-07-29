import { DefaultTheme } from 'styled-components';

export const size = {
  pc: '1200px',
  tab: '900px',
  mobile: '480px',
  mobileS: '370px',
};

const margin = {
  small: '.5rem',
  base: '1rem',
  large: '2rem',
  xLarge: '3rem',
};

const padding = {
  small: '.5rem',
  base: '1rem',
  large: '2rem',
  xLarge: '3rem',
};

const color = {
  white: '#ffffff',
  whiteYellow: '#f7e7b4',
  yellow: '#f9d462',
  bluePuple: '#5e17eb',
  lightBlue: '#6558f5',
  lightGray: '#f7f9fa',
  whiteGray: '#cbc9f9',
  darkGray: '#afb6bb',
  laime: '#c9e265',
  lightRed: '#d65267',
  pink: '#ecc3ca',
  red: '#ff1616',
};

const font = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
  },
  size: {
    large: '48px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    micro: '14px',
  },
  weight: {
    normal: 400,
    medium: 500,
    large: 700,
  },
};

const device = {
  pc: `@media screen and (max-width: ${size.pc})`,
  tab: `@media screen and (max-width: ${size.tab})`,
  mobile: `@media screen and (max-width: ${size.mobile})`,
  mobileS: `@media screen and (max-width: ${size.mobileS})`,
};

const theme: DefaultTheme = {
  margin,
  padding,
  color,
  font,
  device,
};

export default theme;
