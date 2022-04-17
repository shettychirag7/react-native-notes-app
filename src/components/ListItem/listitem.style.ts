import {StyleSheet} from 'react-native';

import {createStylePickerHook, GeneratorProps} from '../../hooks/style';

const getStyleObject = ({theme}: GeneratorProps) =>
  StyleSheet.create({
    listitem: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: 'grey',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: theme.space.xs,
      elevation: theme.space.sm,
      flexDirection: 'row',
      justifyContent: 'space-between',

      padding: theme.space.md,
    },
    title: {
      marginVertical: theme.space.sm,
      marginHorizontal: theme.space.md,
    },
  });

const styles = createStylePickerHook(getStyleObject);

export default styles;
