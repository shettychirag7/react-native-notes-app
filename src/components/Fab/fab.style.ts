import {StyleSheet} from 'react-native';

import {createStylePickerHook, GeneratorProps} from '../../hooks/style';

const getStyleObject = ({theme}: GeneratorProps) =>
  StyleSheet.create({
    fab: {
      opacity: 0.8,
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.neutral.N50,
      shadowColor: theme.colors.neutral.N80,
      shadowOffset: {width: 0, height: -1},
      shadowOpacity: 0.5,
      elevation: 5,
      borderRadius: 50,
    },
  });

const styles = createStylePickerHook(getStyleObject);

export default styles;
