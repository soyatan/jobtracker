import React from 'react';
import {TouchableOpacity} from 'react-native';
import getstyles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useThemedStyles} from '../../modules/Theming';

export default AddJobButton = ({name, color, onPress, size}) => {
  const styles = useThemedStyles(getstyles);
  return (
    <TouchableOpacity style={styles.addbutton} onPress={onPress}>
      <FontAwesome name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
