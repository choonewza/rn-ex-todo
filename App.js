import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import MainApp from './src/Main'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );
  }
}
