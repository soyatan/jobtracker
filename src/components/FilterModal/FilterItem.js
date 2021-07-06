import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import getstyles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useThemedStyles} from '../../modules/Theming';

import {useDispatch} from 'react-redux';
import {addJobRequest} from '../../redux/jobsReducer';

import Tick from '../icons/tick.svg';

export default FilterItem = ({
  item,

  mainFilter,
  setMainFilter,
  activeFilter,
}) => {
  useEffect(() => {
    if (mainFilter[0][activeFilter].find(e => e === item)) {
      console.log('item is there');
      setSelected(true);
    }
    //else setSelected(false)
  }, []);
  const styles = useThemedStyles(getstyles);
  const dispatch = useDispatch();

  const [isSelected, setSelected] = useState(false);

  const toggleChoice = () => {
    if (isSelected) {
      const newMainFilter = [...mainFilter];
      const filteredGroup = newMainFilter[0][activeFilter].filter(
        e => e !== item,
      );
      newMainFilter[0][activeFilter] = filteredGroup;
      setMainFilter(newMainFilter);
      setSelected(false);
    } else {
      const newMainFilter = [...mainFilter];
      const newGroup = newMainFilter[0][activeFilter];
      newGroup.push(item);

      newMainFilter[0][activeFilter] = newGroup;

      setMainFilter(newMainFilter);
      setSelected(true);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => toggleChoice()}
      style={styles.filtermodalbody}>
      <Text style={styles.header}>{item}</Text>
      {isSelected ? (
        <Tick
          width={styles.icondimensions.width}
          height={styles.icondimensions.height}
        />
      ) : null}
    </TouchableOpacity>
  );
};
