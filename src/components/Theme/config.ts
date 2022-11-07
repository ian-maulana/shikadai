import { createTheme, css } from '@mui/system';

export class AppSize {
  static s0: string = '0px';
  static s5: string = '5px';
  static s10: string = '10px';
  static s16: string = '16px';
  static s20: string = '20px';
  static s24: string = '24px';
  static s32: string = '32px';
  static s36: string = '36px';
  static s48: string = '48px';
  static s60: string = '60px';
  static s80: string = '80px';
  static s100: string = '100px';
  static s120: string = '120px';
  static s150: string = '150px';
  static s180: string = '180px';
  static s240: string = '240px';
  static s270: string = '270px';
}

export class AppFontFamily {
  static quicksand: string = 'Quicksand';
}

export class AppFontWeight {
  static light: number = 300;
  static regular: number = 400;
  static medium: number = 500;
  static semiBold: number = 600;
  static bold: number = 700;
}

export class AppFontSize {
  static s8: string = '8px';
  static s9: string = '9px';
  static s10: string = '10px';
  static s12: string = '12px';
  static s14: string = '14px';
  static s16: string = '16px';
  static s18: string = '18px';
  static s24: string = '24px';
  static s28: string = '28px';
  static s32: string = '32px';
  static s36: string = '36px';
  static s48: string = '48px';
}

export class AppColor {
  static primary: string = '#5781af';
  static default: string = '#f6f7f9';
  static secondary: string = '#3c3f43';
  static secondary100: string = '#b3c7dc';
  static secondary200: string = '#b0bac9';
  static black: string = '#06080a';
  static white: string = '#ffffff';
}

export class AppScreen {
  static maxWidth: string = '1320px';
  static minWidth: string = '280px';
  static xs: string = '576px';
  static sm: string = '768px';
  static md: string = '992px';
  static lg: string = '1200px';
  static xl: string = '1400px';
}

export const theme = createTheme({
  palette: {
    background: {
      white: AppColor.white,
    },
    text: {
      primary: AppColor.primary,
      secondary: AppColor.secondary,
    },
  },
});

export const config = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: ${AppFontWeight.regular};
    font-size: 1rem;
    background-color: ${AppColor.white};
    line-height: 1.5;
    color: ${AppColor.black};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
