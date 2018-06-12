import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class NButton extends Component {
  render() {
    const {onPress, style, color, children} = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
        style, {
          backgroundColor: color
        }
      ]}>
        {children}
      </TouchableOpacity>
    )
  }
}
