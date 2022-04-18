import {StyleSheet} from 'react-native';

import {createStylePickerHook, GeneratorProps} from '../../hooks/style';

const OFFSET_MARGIN = 16;

const getStyleObject = ({theme, screen}: GeneratorProps) =>
  StyleSheet.create({
    cardview: {
      width: screen.width / 2 - OFFSET_MARGIN,
      alignItems: 'center',
      backgroundColor: theme.colors.neutral.white,
      borderRadius: theme.space.md,
      shadowColor: theme.colors.neutral.N30,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: theme.space.sm,
      elevation: theme.space.sm,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: theme.space.sm,
      padding: theme.space.md,
    },
    spacing: {
      marginVertical: 4,
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    bottomItem: {},
  });

const styles = createStylePickerHook(getStyleObject);

export default styles;
