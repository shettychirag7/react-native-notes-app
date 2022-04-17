/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from './providers/theme';

import Navigation from './Navigation';
import themes from './constants/theme';

const App = () => {
  return (
    <ThemeProvider value={{theme: themes.base}}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
