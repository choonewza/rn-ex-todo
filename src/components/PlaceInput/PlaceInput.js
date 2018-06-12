import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class PlaceInput extends Component {
    state = {
        placeName: ''
    }

    placeNameChangedHandler = placeName => {
        this.setState({placeName})
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this
            .props
            .onPlaceAdded(this.state.placeName.trim())
    }
    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.placeInput}
                    onChangeText={this.placeNameChangedHandler}
                    value={this.state.placeName}
                    placeholder="Please input your a place name."/>
                <Button
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                    title="Add"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%',
        height: 50
    },
    placeButton: {
        width: '70%'
    }
});