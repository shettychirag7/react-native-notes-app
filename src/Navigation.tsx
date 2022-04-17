import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from './providers/theme';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const {theme} = useContext(ThemeContext);

  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary[30],
      background: theme.colors.neutral.N10,
    },
  };

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary[30],
          },
          headerTintColor: theme.colors.neutral.black,
        }}>
        <Stack.Screen name="Home" component={() => null} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
