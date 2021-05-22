import {width as w, height as h} from '../../constants/Metrics';
import {StyleSheet} from 'react-native';

import {colorNames as cn, useThemedColors} from '../../modules/Theming';
//blob blogleft portraiticon blogright blogtitletext jobtext
export default styles = Colors =>
  StyleSheet.create({
    blog: {
      backgroundColor: Colors[cn.jobs.background],
      borderRadius: 15,
      padding: h * 0.015,
      margin: h * 0.008,
      alignItems: 'center',
      justifyContent: 'center',
      textAlignVertical: 'center',
      flexDirection: 'row',
    },
    blogmiddle: {
      justifyContent: 'center',

      flex: 8,
    },
    blogright: {
      justifyContent: 'center',

      flex: 8,
    },
    blogleft: {
      alignItems: 'center',
      alignContent: 'center',

      flex: 1,
      justifyContent: 'center',
    },

    blogtext: {
      textAlignVertical: 'center',
      color: Colors[cn.jobs.jobtextcolor],
    },
    blogtitletext: {
      textAlignVertical: 'center',
      fontWeight: 'bold',
      fontSize: h * 0.022,
      color: Colors[cn.jobs.jobtextcolor],
    },

    portraiticon: {
      color: Colors[cn.jobs.jobtextcolor],
    },

    jobtext: {
      textAlignVertical: 'center',

      color: Colors[cn.jobs.jobtextcolor2],
      fontSize: h * 0.018,
      borderRadius: 5,
    },
  });
