import React from 'react'
import  { storey } from './src/redux/store'
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import MainScreen from './src/screens/Main/MainScreen'
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storey();

export default App=()=>{
  
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <MainScreen/>
      </PaperProvider>
      </PersistGate>
    </Provider>
  )
}