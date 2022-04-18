import {StyleSheet} from 'react-native';

import {createStylePickerHook, GeneratorProps} from '../../hooks/style';

const getStyleObject = ({theme}: GeneratorProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    footer: {
      position: 'absolute',
      right: 25,
      bottom: 25,
    },
  });

const styles = createStylePickerHook(getStyleObject);

export default styles;
