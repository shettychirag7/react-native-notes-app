import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '..';
import {ThemeProvider} from '../../../providers/theme';
import themes from '../../../constants/theme';

describe('Text component tests', () => {
  it('renders page title text', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <Text type={'pageTitle'}>{'Hello World'}</Text>
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders section title text', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <Text type={'sectionTitle'}>{'Hello World'}</Text>
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders body text', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <Text type={'body'}>{'Hello World'}</Text>
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders bold body text', () => {
    const {toJSON} = render(
      <ThemeProvider value={{theme: themes.base}}>
        <Text type={'boldBody'}>{'Hello World'}</Text>
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
