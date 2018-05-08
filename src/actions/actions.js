

// Every Action in the Store has a type. It is a good practice to avoid
// hardcoding the types. Use constants instead
export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';


/******************************************************************************
* User ACTIONS
******************************************************************************/

// Actions are required to have a type and it is a good practice to pass the data
// as payload.
export function change_user_name(newUserName){
  return{
    type: CHANGE_USER_NAME,
    payload: newUserName,
  }
}
