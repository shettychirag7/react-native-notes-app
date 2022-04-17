import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import ListItem from '..';
import {ThemeProvider} from '../../../providers/theme';
import themes from '../../../constants/theme';

describe('ListItem component test', () => {
  it('renders ListItem component', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <ListItem name="Category 1" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('attaches onPress callback', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <ListItem name="Category 1" testID="category_1" onPress={mockOnPress} />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('category_1'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('triggers onUpdate callback on text input', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <ListItem name="Category 1" onUpdate={mockOnPress} />
      </ThemeProvider>,
    );

    getByTestId('ip_field').props.onEndEditing({
      nativeEvent: {
        text: '123',
      },
    });

    expect(mockOnPress).toHaveBeenCalledWith('123');
  });
});
