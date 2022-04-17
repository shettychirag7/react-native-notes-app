import {Theme} from './type';
import {fonts} from '../fonts';

const base: Theme = {
  fontFamily: {
    titleLight: fonts.montserrat.light,
    titleRegular: fonts.montserrat.semiBold,
    titleBold: fonts.montserrat.bold,
    bodyLight: fonts.montserrat.thin,
    bodyBold: fonts.montserrat.medium,
    bodyRegular: fonts.montserrat.regular,
  },
  fontSize: {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  colors: {
    primary: {
      10: '#aceef5',
      20: '#70e3f0',
      30: '#00d7ea',
      40: '#00cee6',
      50: '#00c4e1',
      60: '#00b4ce',
      70: '#009fb3',
      80: '#008b9a',
      90: '#00676c',
    },
    secondary: {
      10: '#f5f5f5',
      20: '#eeeeee',
      30: '#e0e0e0',
      40: '#bebebe',
      50: '#9f9f9f',
      60: '#767676',
      70: '#626262',
      80: '#424242',
      90: '#212121',
    },
    neutral: {
      N10: '#F7F7F7',
      N20: '#E1E1E1',
      N30: '#A8A8A8',
      N40: '#757575',
      N50: '#565656',
      N60: '#3B3B3B',
      N70: '#222222',
      N80: '#121212',
      white: '#FFFFFF',
      black: '#000000',
    },
  },
};

export default base;
