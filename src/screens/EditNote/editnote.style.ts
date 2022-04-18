import {StyleSheet} from 'react-native';

import {createStylePickerHook, GeneratorProps} from '../../hooks/style';

const getStyleObject = ({theme}: GeneratorProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.space.sm,
    },
    header: {
      marginTop: theme.space.md,
    },
    category: {
      marginVertical: theme.space.sm,
    },
    body: {
      flex: 1,
      marginVertical: theme.space.lg,
    },
  });

const styles = createStylePickerHook(getStyleObject);

export default styles;
