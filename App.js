import React from 'react'
import store from './src/redux/store'
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import MainScreen from './src/screens/Main/MainScreen'



export default App=()=>{
  return(
    <Provider store={store}>
      <PaperProvider>
        <MainScreen/>
      </PaperProvider>
    </Provider>
  )
}