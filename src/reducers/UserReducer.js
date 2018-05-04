// Import the type of actions that the Reducer is going to handle
import {
  CHANGE_USER_NAME,
} from '../actions/actions';


export default function UserReducer(state = {name: "New User", error: null}, action) {

  switch(action.type) {
    case CHANGE_USER_NAME:
      return {name: action.payload}
    default:
      return state;
  }
}
