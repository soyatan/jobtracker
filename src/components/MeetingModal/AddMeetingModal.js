import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';

import getstyles from './styles';

import {
  colorNames,
  useThemedColors,
  useThemedStyles,
} from '../../modules/Theming';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState, useEffect} from 'react';
import MeetingNoteInput from '../JobInput/MeetingNoteInput';
import MeetingDateInput from '../DateInput/MeetingDateInput';

export default AddMeetingModal = ({
  modalVisible,
  setModalVisible,
  text,
  state,
}) => {
  const styles = useThemedStyles(getstyles);

  const colors = useThemedColors();
  const [meetingDate, setMeetingDate] = useState(Date.now());
  const [meetingNotes, setMeetingNotes] = useState();
  const [meetingCounter, setMeetingCounter] = useState(0);

  useEffect(() => {
    if (text) {
      if (!text.length < 1) {
        setMeetingCounter(text.length);
      }
    }
  }, []);
  const discardAndCloseModal = () => {
    setModalVisible(false);
  };
  const saveAndCloseModal = () => {
    setModalVisible(false);
  };

  const addNewMeeting = () => {
    state([...text, {id: meetingCounter + 1, date: Date.now()}]);
    setMeetingCounter(meetingCounter + 1);
  };
  const findMeeting = id => {
    return text.find(item => item.id === id);
  };

  const addMeetingNotes = (id, notes) => {
    const newState = text.map(item => {
      if (item.id === id) {
        return {...item, meetingnotes: notes};
      } else {
        return item;
      }
    });
    state(newState);
  };

  const addMeetingDates = (id, dates) => {
    const newState = text.map(item => {
      if (item.id === id) {
        return {...item, date: dates};
      } else {
        return item;
      }
    });
    state(newState);
  };

  const deleteMeeting = id => {
    const newState = text.filter(item => item.id != id);
    state(newState);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <FlatList
          inverted
          extraData={text}
          data={text}
          keyExtractor={(item, index) => index}
          renderItem={item => {
            return (
              <View style={styles.meetingcontainer}>
                <View style={styles.meetingheader}>
                  <Text style={{fontWeight: 'bold'}}>
                    Meeting No:{item.item.id}{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => deleteMeeting(item.item.id)}
                    style={styles.trashiconcontainer}>
                    <FontAwesome name="trash" size={24} />
                  </TouchableOpacity>
                </View>

                <MeetingDateInput
                  title={'Date'}
                  text={findMeeting(item.item.id).date}
                  state={setMeetingDate}
                  id={item.item.id}
                  add={addMeetingDates}
                />
                <MeetingNoteInput
                  title={'Notes'}
                  text={findMeeting(item.item.id).meetingnotes}
                  state={setMeetingNotes}
                  id={item.item.id}
                  add={addMeetingNotes}
                />
              </View>
            );
          }}
        />

        <View style={styles.modalBottom}>
          <Pressable style={styles.modalbutton} onPress={() => addNewMeeting()}>
            <Text style={styles.text}>Add New Meeting</Text>
          </Pressable>
        </View>

        <View style={styles.modalBottom}>
          <Pressable
            style={styles.modalbutton}
            onPress={() => saveAndCloseModal()}>
            <Text style={styles.text}>Save</Text>
          </Pressable>
          <Pressable
            style={styles.modalbutton}
            onPress={() => discardAndCloseModal()}>
            <Text style={styles.text}>Discard</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
