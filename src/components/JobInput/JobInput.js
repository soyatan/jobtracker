import FontAwesome from 'react-native-vector-icons/Entypo';

import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useThemedStyles} from '../../modules/Theming';
import getstyles from './styles';
import {WebLink, MailLink, MapLink} from '../../components/LinkButtons/WebLink';

export default JobInput = ({title, text, state, editable, linktype, url}) => {
  useEffect(() => {
    setValue(text);
  }, []);

  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(null);
  const sendstate = () => {
    state(value);
  };

  const styles = useThemedStyles(getstyles);

  return (
    <View style={styles.jobinputcontainer}>
      <Text style={styles.jobtitletext}>{title}</Text>

      <View style={styles.jobinputcontainerinside}>
        <View style={styles.jobinputtextcontainer}>
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
        </View>
        {linktype === 'URL' ? (
          <View style={styles.jobinputlinkcontainer}>
            <WebLink url={url} />
          </View>
        ) : linktype === 'EMAIL' ? (
          <View style={styles.jobinputlinkcontainer}>
            <MailLink url={url} />
          </View>
        ) : linktype === 'MAP' ? (
          <View style={styles.jobinputlinkcontainer}>
            <MapLink url={url} />
          </View>
        ) : null}
      </View>
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
