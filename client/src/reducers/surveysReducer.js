import { FETCH_SURVEYS, DELETE_SURVEY } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        case DELETE_SURVEY:
            const newState = [...state];
            const filterSurveys = newState.filter(
                survey => survey._id !== action.payload
            );
            return filterSurveys;
        default:
            return state;
    }
}
