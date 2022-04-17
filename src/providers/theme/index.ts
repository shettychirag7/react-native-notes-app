import {createContext} from 'react';
import themes from '../../constants/theme';

export const ThemeContext = createContext({
  theme: themes.base,
});

export const ThemeProvider = ThemeContext.Provider;
