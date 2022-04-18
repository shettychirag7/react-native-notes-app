import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {Alert} from 'react-native';

import Home from '..';
import {ThemeProvider} from '../../../providers/theme';
import themes from '../../../constants/theme';
import {createStore} from '../../../redux/store';
import {act} from 'react-test-renderer';
import {Store} from 'redux';

const HomeComponent = ({store}: {store: Store}) => {
  return (
    <Provider store={store}>
      <ThemeProvider value={{theme: themes.base}}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

describe('Home Component Test', () => {
  jest.spyOn(Alert, 'alert');
  it('adds new category', () => {
    const store = createStore();
    const {getByTestId} = render(<HomeComponent store={store} />);

    expect(getByTestId('category_list').props.data.length).toEqual(0);

    fireEvent.press(getByTestId('fab_add'));

    expect(getByTestId('category_list').props.data.length).toEqual(1);
  });

  it('should edit existing category if name is different', async () => {
    const store = createStore();
    const {getByTestId} = render(<HomeComponent store={store} />);

    fireEvent.press(getByTestId('fab_add'));

    await act(async () => {
      await getByTestId('ip_field_0').props.onEndEditing({
        nativeEvent: {text: 'New category'},
      });
      expect(getByTestId('txt_field_0').props.children).toEqual('New category');
    });
  });

  it('should prompt error when edit existing category with same name', async () => {
    const store = createStore();
    const {getByTestId} = render(<HomeComponent store={store} />);

    await act(async () => {
      await fireEvent.press(getByTestId('fab_add'));
      await fireEvent.press(getByTestId('fab_add'));
      await getByTestId('ip_field_1').props.onEndEditing({
        nativeEvent: {text: 'Category 1'},
      });
      expect(Alert.alert).toHaveBeenLastCalledWith(
        'Category already exists',
        undefined,
        expect.any(Array),
      );
    });
  });

  it('should delete a category', async () => {
    const store = createStore();
    const {getByTestId} = render(<HomeComponent store={store} />);

    await act(async () => {
      await fireEvent.press(getByTestId('fab_add'));
      await fireEvent.press(getByTestId('fab_add'));
      await fireEvent(getByTestId('item_1'), 'onLongPress');
      expect(Alert.alert).toHaveBeenLastCalledWith(
        'Delete Category',
        'Are you sure you want to delete category?',
        expect.any(Array),
      );

      (Alert.alert as any).mock.calls[1][2][1].onPress();

      expect(getByTestId('category_list').props.data.length).toEqual(1);
    });
  });
});
