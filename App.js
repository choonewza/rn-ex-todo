import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import MainApp from './src/Main'

import {Navigation} from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import configureStore from './src/store/configureStore'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

const store = configureStore()

//Register Screens
Navigation.registerComponent("rn-ex-todo.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("rn-ex-todo.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("rn-ex-todo.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("rn-ex-todo.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("rn-ex-todo.SideDrawer", () => SideDrawer, store, Provider);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "rn-ex-todo.AuthScreen",
    title: "Login"
  }
})