import {connect} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react'

import {addPlace} from '../../store/actions'
import PlaceInput from '../../components/PlaceInput/PlaceInput'

export class SharePlaceScreen extends Component {

    constructor(props) {
        super(props)
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress"){
            if(event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    placeAddedHandler = placeName => {
        this
            .props
            .onAddPlace(placeName)
    }

    render() {
        const {onAddPlace} = this.props
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

// const mapStateToProps = state => {     return {places: state.places.places,
// selectedPlace: state.places.selectedPlace} }

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
