import {useContext, useLayoutEffect, useState} from 'react';
import {
  Dimensions,
  ImageStyle,
  ScaledSize,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Theme} from '../../constants/theme/type';
import {ThemeContext} from '../../providers/theme';

export interface GeneratorProps {
  theme: Theme;
  screen: ScaledSize;
}

type Style<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
type Generator<T> = (props: GeneratorProps) => Style<T>;

export const createStylePickerHook = <T>(generator: Generator<T>) => {
  const useStylePicker = () => {
    const {theme} = useContext(ThemeContext);
    const [screen, setScreen] = useState(Dimensions.get('screen'));

    useLayoutEffect(() => {
      const listener = ({screen: s}: {screen: ScaledSize}) => setScreen(s);
      const subscription = Dimensions.addEventListener('change', listener);
      return () => subscription.remove();
    }, []);

    return generator({theme, screen});
  };

  return useStylePicker;
};
