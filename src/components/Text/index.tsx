import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

import useStylePicker from './text.style';

interface TextProps extends RNTextProps {
  /**
   * type of text to render. Props is mandatory
   */
  type:
    | 'pageTitle'
    | 'sectionTitle'
    | 'cardTitle'
    | 'body'
    | 'boldBody'
    | 'bodyLight';
}

const Text = (props: TextProps) => {
  const {type, style: styleProps, ...rest} = props;

  const style = useStylePicker();

  return (
    <RNText style={[style[type], styleProps]} {...rest}>
      {props.children}
    </RNText>
  );
};

export default Text;
