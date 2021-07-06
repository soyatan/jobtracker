import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Texts, useLocalization} from '../../modules/Localization';

import {useThemedStyles} from '../../modules/Theming';

import getstyles from './styles';

export default AuthButton = ({label, onPress}) => {
  const loc = useLocalization();
  const styles = useThemedStyles(getstyles);
  return (
    <TouchableOpacity
      style={label === loc.t(Texts.signup) ? styles.button2 : styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
