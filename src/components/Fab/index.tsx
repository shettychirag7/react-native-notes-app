import React, {useContext} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../providers/theme';
import useStylePicker from './fab.style';

interface FabProps extends TouchableOpacityProps {
  icon: string;
}

const Fab = ({icon, style, ...rest}: FabProps) => {
  const styles = useStylePicker();
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity style={[styles.fab, style]} {...rest}>
      <Icon name={icon} color={theme.colors.neutral.white} size={30} />
    </TouchableOpacity>
  );
};

export default Fab;
