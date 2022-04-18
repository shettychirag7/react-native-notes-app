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
import {Provider} from 'react-redux';

import Navigation from './Navigation';
import themes from './constants/theme';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider value={{theme: themes.base}}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
