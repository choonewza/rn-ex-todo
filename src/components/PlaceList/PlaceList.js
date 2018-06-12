import React, {Component} from 'react'
import {StyleSheet, FlatList, View} from 'react-native';
import ListItem from '../ListItem/ListItem'

export default class PlaceList extends Component {

    render() {
        const {places} = this.props
        return (
            <FlatList
                style={styles.container}
                data={places}
                renderItem={({item}) => (<ListItem
                placeName={item.name}
                placeImage={item.image}
                onItemPressed={() => this.props.onItemDeleted(item.key)}/>)}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});