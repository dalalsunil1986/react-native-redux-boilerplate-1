// It is a good practice to have a single file per "section" of the Store.
// In our case, a dedicated file for the user part of the store.

// Import the type of actions that the Reducer is going to handle
import {
  CHANGE_USER_NAME,
} from '../actions/actions';

// The default value that is in the constructor would set up the store by default to those values.
// Every time an action is called, the correspondant case in the reducer would be trigger.
// Reducers are pure function, meaning, that it should return the same answer for the same input,
// avoid time calculations or other types that might vary results for the same input.
export default function UserReducer(state = {name: "New User", error: null}, action) {

  switch(action.type) {
    case CHANGE_USER_NAME:
      return {name: action.payload}
    default:
      return state;
  }
}
