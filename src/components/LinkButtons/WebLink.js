import React,{useEffect,useCallback} from 'react'
import { View,Text, TouchableOpacity,FlatList,Linking,Alert, Button} from 'react-native'
import { useThemedStyles } from '../../modules/Theming';
import Globe from '../icons/globe.svg'
import Map from '../icons/map.svg'
import Email from '../icons/email.svg'
import getstyles from './styles';




export const WebLink = ({ url, children }) => {
  
  const styles=useThemedStyles(getstyles);
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`not a valid URL: ${url}`);
      }
    }, [url]);
  
    return <Globe onPress={handlePress} height={styles.icondimensions.width} />;
  };
  
  
export const MailLink = ({ url, children }) => {
  const styles=useThemedStyles(getstyles);
  const handlePress = useCallback(async () => {
   
      await Linking.openURL('mailto:'+url);
    }
    
  , [url]);

  return <Email onPress={handlePress} height={styles.icondimensions.width} />;
};

export const MapLink = ({ url, children }) => {
 
  const urltogo='https://www.google.com/maps/place/'+url
  const styles=useThemedStyles(getstyles);
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(urltogo);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(urltogo);
      } else {
        Alert.alert(`not a valid URL: ${urltogo}`);
      }
    }, [url]);
  
    return <Map onPress={handlePress} height={styles.icondimensions.width} />;
  };