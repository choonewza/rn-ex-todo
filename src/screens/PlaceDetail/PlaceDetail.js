import React, {Component} from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import {white, red} from '../../utils/colors'
import {deletePlace} from '../../store/actions'

class PlaceDetail extends Component {

    placeDeletedHandler = () => {
        //delete
        this
            .props
            .onDeletePlace(this.props.selectedPlace.key)

        //close
        this
            .props
            .navigator
            .pop()
    }

    render() {
        let {selectedPlace} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.detailContainer}>
                    <Image style={styles.placeImage} source={selectedPlace.image}/>
                    <Text style={styles.placeName}>{selectedPlace.name}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button title="Delete" color={red} onPress={this.placeDeletedHandler}/>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    detailContainer: {
        flex: 1
    },
    btnContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    deleteBtn: {
        alignItems: 'center'
    }
})

const nBtnStyles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 5,
        width: 170,
        flexDirection: 'row'
    },
    text: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail)