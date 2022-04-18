import React from 'react';
import {TextInput, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '../Text';
import useStylePicker from './listitem.style';

interface ListItemProps extends TouchableOpacityProps {
  id: number;
  name: string;
  onUpdate?: (value: string) => void;
}

const ListItem = (props: ListItemProps) => {
  const {id, name, onUpdate, ...rest} = props;

  const styles = useStylePicker();

  return (
    <TouchableOpacity {...rest} style={styles.listitem}>
      <TextInput
        testID={`ip_field_${id}`}
        selectTextOnFocus={true}
        style={styles.title}
        onEndEditing={e =>
          e.nativeEvent.text !== name && onUpdate?.(e.nativeEvent.text)
        }>
        <Text testID={`txt_field_${id}`} type={'boldBody'}>
          {name}
        </Text>
      </TextInput>
      <Icon name="chevron-right" size={24} />
    </TouchableOpacity>
  );
};

export default ListItem;
