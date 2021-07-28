import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      whiteYellow: string;
      yellow: string;
      bluePuple: string;
      lightBlue: string;
      lightGray: string;
      whiteGray: string;
      darkGray: string;
      laime: string;
      lightRed: string;
      pink: string;
    };
    font: {
      size: {
        large: string;
        medium: string;
        regular: string;
        small: string;
        micro: string;
      };
      weight: {
        normal: number;
        medium: number;
        large: number;
      };
    };
    window: {
      pc: string;
      tab: string;
      mobile: string;
      mobileS: string;
    };
  }
}
