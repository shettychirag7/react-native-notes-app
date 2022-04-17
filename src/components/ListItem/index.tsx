import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '../Text';
import useStylePicker from './listitem.style';

interface ListItemProps extends TouchableOpacityProps {
  name: string;
}

const ListItem = (props: ListItemProps) => {
  const {name, ...rest} = props;

  const styles = useStylePicker();

  return (
    <TouchableOpacity {...rest} style={styles.listitem}>
      <Text type="boldBody" style={styles.title}>
        {name}
      </Text>
      <Icon name="chevron-right" size={24} />
    </TouchableOpacity>
  );
};

export default ListItem;
