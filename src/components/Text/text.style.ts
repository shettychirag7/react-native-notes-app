import {StyleSheet} from 'react-native';

import {createStylePickerHook, GeneratorProps} from '../../hooks/style';

const getStyleObject = ({theme}: GeneratorProps) =>
  StyleSheet.create({
    pageTitle: {
      fontFamily: theme.fontFamily.titleBold,
      fontSize: theme.fontSize.xl,
      letterSpacing: 0.1,
      lineHeight: theme.fontSize.xl * 1.35,
      color: theme.colors.neutral.N70,
    },
    sectionTitle: {
      fontFamily: theme.fontFamily.titleRegular,
      fontSize: theme.fontSize.lg,
      letterSpacing: 0.1,
      lineHeight: theme.fontSize.lg * 1.35,
      color: theme.colors.neutral.N70,
    },
    body: {
      fontFamily: theme.fontFamily.bodyRegular,
      fontSize: theme.fontSize.md,
      letterSpacing: 0.1,
      color: theme.colors.neutral.N70,
    },
    boldBody: {
      fontFamily: theme.fontFamily.bodyBold,
      fontSize: theme.fontSize.md,
      letterSpacing: 0.1,
      color: theme.colors.neutral.N70,
    },
  });

const style = createStylePickerHook(getStyleObject);

export default style;
