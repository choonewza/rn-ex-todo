import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';

import placesReducer from './reducers/places'

const rootReducer = combineReducers({places: placesReducer})

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(logger))
}

export default configureStore