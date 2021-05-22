import {width as w, height as h} from '../../constants/Metrics';
import {StyleSheet} from 'react-native';

import {colorNames as cn, useThemedColors} from '../../modules/Theming';

export default styles = Colors =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      padding: 5,
    },
    button: {
      backgroundColor: Colors[cn.jobs.modalbuttonbackground],

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 15,
      borderWidth: 1,
      height: h * 0.05,
    },
    icondimensions: {
      width: h * 0.05,
      height: h * 0.04,
    },
    headercontainer: {
      marginBottom: 10,
      flexDirection: 'row',
      padding: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
    },
    filteritemcontainer: {
      paddingBottom: 5,
      flex: 15,
    },
    filterfootercontainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors[cn.jobs.modalbuttonbackground],
      borderRadius: 15,
      borderWidth: 0.5,

      justifyContent: 'center',
      alignItems: 'center',
    },

    filtermodalbody: {
      backgroundColor: Colors[cn.drawer.itembackground],

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 0.3,
      marginBottom: 10,
      height: h * 0.09,
    },
    header: {
      marginRight: 10,
      marginLeft: 10,
      fontWeight: 'bold',
    },

    addjobcontainer: {},
    meetingstext: {
      color: 'black',
      paddingLeft: w * 0.01,
      fontWeight: 'bold',
      fontSize: w * 0.04,
    },
    meetingicon: {
      width: w * 0.04,
      height: w * 0.04,
    },

    modalBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      alignSelf: 'flex-end',
      marginTop: h * 0.01,
    },
    modalbutton: {
      backgroundColor: Colors[cn.jobs.modalbuttonbackground],
      alignSelf: 'stretch',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: h * 0.01,
      borderRadius: 15,
      borderWidth: 1,
      height: h * 0.05,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
    },
    jobinputcontainer: {
      backgroundColor: Colors[cn.jobs.background],
      margin: h * 0.01,
      padding: h * 0.015,
      justifyContent: 'center',
      borderRadius: 15,
      textAlignVertical: 'center',
    },
    jobtext: {
      color: Colors[cn.jobs.jobtextcolor2],
      fontSize: 14,
    },
    jobtitletext: {
      textAlignVertical: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      color: Colors[cn.jobs.jobtextcolor],
    },
  });
