import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image
} from 'react-native';

export default class ListItem extends Component {
  render() {
    const {placeName, onItemPressed, placeImage} = this.props
    return (
      <TouchableOpacity onPress={onItemPressed}>
        <View style={styles.container}>
          <Image resizeMode={"cover"} source={placeImage} style={styles.placeImage}/>
          <Text>{placeName}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    flexDirection: 'row',
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});
