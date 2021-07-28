import { DefaultTheme } from 'styled-components';

export const size = {
  pc: '1200px',
  tab: '900px',
  mobile: '500px',
  mobileS: '370px',
};

const theme: DefaultTheme = {
  color: {
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
  },

  font: {
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
  },

  window: {
    pc: `@media screen and (max-width: ${size.pc})`,
    tab: `@media screen and (max-width: ${size.tab})`,
    mobile: `@media screen and (max-width: ${size.mobile})`,
    mobileS: `@media screen and (max-width: ${size.mobileS})`,
  },
};

export default theme;
