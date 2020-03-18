import {combineReducers} from 'redux';
import mealsReducer from './meal';
const rootReducer=combineReducers({
    mealsReducer,
})

export default rootReducer;