import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';

import getstyles from './styles';

import {useThemedStyles} from '../../modules/Theming';
import _ from 'lodash';

import Right from '../icons/right.svg';

export default FilterSubText = ({
  title,
  state,
  isChoosing,
  activeState,
  dbKey,
  data,
}) => {
  const styles = useThemedStyles(getstyles);

  const _onPress = () => {
    state(data);
    activeState(dbKey);
    isChoosing(true);
  }

    return (
      <TouchableOpacity
        onPress={() => _onPress()}
        style={styles.filtermodalbody}>
        <Text style={styles.header}>{title}</Text>
        <Right
          width={styles.icondimensions.width}
          height={styles.icondimensions.height}
        />
      </TouchableOpacity>
    );
  };

