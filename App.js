import React from 'react';
import List from './List';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import QuestionsScreenStack from './components/screenNavigator';

export default function App () {

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <QuestionsScreenStack />
      </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}