import { DefaultTheme } from 'styled-components';

export const size = {
  pc: '75em', // 1200px
  tab: '56.25em', // 900px
  mobile: '31.25em', // 500px
  mobileS: '23.125em', // 370px
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
  window: {
    pc: `@media screen and (max-width: ${size.pc}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    mobileS: `@media screen and (max-width: ${size.mobileS}px)`,
  },
};

export default theme;
