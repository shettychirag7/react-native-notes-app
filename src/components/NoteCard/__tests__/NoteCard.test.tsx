import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NoteCard from '..';
import {ThemeProvider} from '../../../providers/theme';
import themes from '../../../constants/theme';

describe('NoteCard component tests', () => {
  it('renders NoteCard component', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <NoteCard
          title="Hello"
          description="Hello World"
          category="General"
          creationDate="12 Mar '22"
        />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('attaches onPress back', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <NoteCard
          testID="note_card"
          title="Hello"
          description="Hello World"
          category="General"
          creationDate="12 Mar '22"
          onPress={mockOnPress}
        />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('note_card'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
