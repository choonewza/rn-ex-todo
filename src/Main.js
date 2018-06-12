import {connect} from 'react-redux'
import {StyleSheet, View, Platform} from 'react-native';
import React, {Component} from 'react'

import {addPlace, deletePlace, selectPlace, deselectPlace} from './store/actions'
import ListItem from './components/ListItem/ListItem'
import PlaceDetail from './components/PlaceDetail/PlaceDetail'
import PlaceInput from './components/PlaceInput/PlaceInput'
import PlaceList from './components/PlaceList/PlaceList'

import placeImage from './assets/image.jpg'

class Main extends React.Component {
  
    placeAddedHandler = placeName => {
      this.props.onAddPlace(placeName)
    }
  
    onItemDeletedHandler = key => {
      this.setState(prevState => {
        return {
          places: prevState
            .places
            .filter(place => {
              return place.key !== key
            })
        }
      })
    }
  
    placeDeletedHandler = () => {
      this.props.onDeletePlace()
      
    }
  
    modalClosedHandler = () => {
      this.props.onDeselectPlace()
    }
  
    placeSelectedHandler = key => {
      this.props.onSelectPlace(key)
    }
  
    render() {
      const {places, selectedPlace} = this.props
      return (
        <View style={styles.container}>
          <PlaceDetail
            selectedPlace={selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModelClosed={this.modalClosedHandler}/>
          <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList
            places={places}
            onItemDeleted={this.placeSelectedHandler}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === 'ios' ? 0 : 25,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20
    }
  });
  
  const mapStateToProps = state => {
    return{
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
      onAddPlace: (name) => dispatch(addPlace(name)),
      onDeletePlace: () => dispatch(deletePlace()),
      onSelectPlace: (key) => dispatch(selectPlace(key)),
      onDeselectPlace: () => dispatch(deselectPlace())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Main)
  
