import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import MainNavigator from './navigation/DrawerNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
}

const store = createStore(rootReducer)

const App = () => {

  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {

    return (<AppLoading startAsync={fetchFonts} onFinish={() => { setFontLoaded(true) }} />)
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>


  )
}
export default App;