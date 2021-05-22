import FontAwesome from 'react-native-vector-icons/Entypo';

import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useThemedStyles} from '../../modules/Theming';
import getstyles from './styles';

export default MeetingNoteInput = ({title, text, state, editable, id, add}) => {
  useEffect(() => {
    setValue(text);
  }, []);

  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(null);
  const sendstate = () => {
    add(id, value);
  };

  const styles = useThemedStyles(getstyles);

  return (
    <View style={styles.jobinputcontainer}>
      <Text style={styles.jobtitletext}>{title}</Text>

      <TextInput
        returnKeyType="done"
        editable={editable}
        style={styles.jobtext}
        value={value}
        onChangeText={value => setValue(value)}
        onBlur={() => setEditing(false)}
        multiline={true}
        blurOnSubmit={true}
        onEndEditing={() => sendstate()}
      />
      <TouchableOpacity
        onPress={() => {
          setValue(null);
          sendstate();
        }}>
        {editable !== false ? (
          <FontAwesome name={'ccw'} size={15} color={'white'} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
