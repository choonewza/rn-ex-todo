import React, {Component} from 'react'
import {
    Modal,
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    ScrollView
} from 'react-native'

export default class PlaceDetail extends Component {
    render() {
        let {selectedPlace, onModelClosed, onItemDeleted} = this.props
        let modalContent = null
        if (selectedPlace) {
            modalContent = (
                <View style={styles.detailContainer}>
                    <Image style={styles.placeImage} source={selectedPlace.image}/>
                    <Text style={styles.placeName}>{selectedPlace.name}</Text> 
                </View>
            )
        }
        return (
            <Modal onRequestClose={onModelClosed} animationType="slide" visible={selectedPlace !== null}>
                <View style={styles.container}>
                    {modalContent}
                    <View style={styles.btnContainer}>
                        <Button title="Delete" color="red" onPress={onItemDeleted}/>
                        <Button title="Close" onPress={onModelClosed}/>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 22
    },
    placeImage:{
        width: '100%',
        height: 200
    },
    placeName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    detailContainer:{
        flex: 1,
    },
    btnContainer: {
        flex: 1,
        justifyContent: "flex-end"
    }
});
