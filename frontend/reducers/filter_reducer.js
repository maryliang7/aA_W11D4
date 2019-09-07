import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defBounds = {
    northEast: { lat: 37.80971, lng: -122.39208 },
    southWest: { lat: 37.74187, lng: -122.47791 }
}

const filterReducer = (state = defBounds, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_BOUNDS:
            return Object.assign({}, state, action.bounds);
        default:
            return state;
    }
}

export default filterReducer;