import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Fab from '..';
import {ThemeProvider} from '../../../providers/theme';
import themes from '../../../constants/theme';

describe('ListItem component test', () => {
  it('renders ListItem component', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <Fab icon="home" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('attaches onPress callback', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <Fab icon="home" testID="fab" onPress={mockOnPress} />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('fab'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
