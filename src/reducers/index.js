import { combineReducers } from 'redux';

// Import all the reducers created for each part of the store
import UserReducer  from './UserReducer';

export default combineReducers({
   user: UserReducer,
   // fieldInStore: Reducer
});
