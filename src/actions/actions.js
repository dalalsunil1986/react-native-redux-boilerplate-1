
/*
  Every Action in the Store has a type. It is a good practice to avoid
  hardcoding the types. Use constants instead
 */
export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';


/******************************************************************************
* User ACTIONS
******************************************************************************/

export function change_user_name(newUserName){
  return{
    type: CHANGE_USER_NAME,
    payload: newUserName,
  }
}
