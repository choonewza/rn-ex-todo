import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes'
import {makeid} from '../../utils/helpers'

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [
                    ...state.places, {
                        key: makeid(),
                        name: action.placeName,
                        image: {
                            uri: "https://media.vogue.in/wp-content/uploads/2018/01/5-global-trends-that-will-chan" +
                                    "ge-beauty-in-2018-simpler-habits-and-J-beauty-vogue-india-866x487.jpg"
                        }
                    }
                ]
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state
                    .places
                    .filter(place => {
                        return place.key !== action.placeKey
                    })
            }
        default:
            return state
    }
}

export default reducer