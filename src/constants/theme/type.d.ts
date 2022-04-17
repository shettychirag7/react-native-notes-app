export type Theme = {
  fontFamily: {
    titleLight: string;
    titleRegular: string;
    titleBold: string;
    bodyLight: string;
    bodyBold: string;
    bodyRegular: string;
  };
  fontSize: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  space: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  colors: {
    primary: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
    };
    secondary: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
    };
    neutral: {
      N10: string;
      N20: string;
      N30: string;
      N40: string;
      N50: string;
      N60: string;
      N70: string;
      N80: string;
      white: string;
      black: string;
    };
  };
};
