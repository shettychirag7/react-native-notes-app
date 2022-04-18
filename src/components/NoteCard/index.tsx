import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';

import Text from '../Text';

import useStylePicker from './notecard.style';

export interface NoteCardProps extends TouchableOpacityProps {
  /**
   * title of note
   */
  title: string;
  /**
   * description of note
   */
  description: string;
  /**
   * Category type of notes.
   */
  category: string;
}

const NoteCard = (props: NoteCardProps) => {
  const {title, category, description, ...rest} = props;

  const styles = useStylePicker();

  return (
    <TouchableOpacity style={styles.cardview} {...rest}>
      <View>
        <Text type="cardTitle" style={styles.spacing}>
          {title}
        </Text>
        <Text
          type="body"
          style={styles.spacing}
          numberOfLines={3}
          ellipsizeMode={'tail'}>
          {description}
        </Text>
        <Text type="bodyLight" numberOfLines={1}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
