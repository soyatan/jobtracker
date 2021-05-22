import {width as w, height as h} from '../../constants/Metrics';
import {StyleSheet} from 'react-native';



export default styles = Colors =>
  StyleSheet.create({
    text: {
      color: 'black',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#BB86FC',
      borderRadius: 10,
      margin: w * 0.03,
      height: h * 0.06,
      marginTop: h * 0.04,

      justifyContent: 'center',
      alignItems: 'center',
    },
    button2: {
      backgroundColor: '#268959',
      borderRadius: 10,
      margin: w * 0.03,
      height: h * 0.06,
      marginTop: h * 0.04,

      justifyContent: 'center',
      alignItems: 'center',
    },
  });
