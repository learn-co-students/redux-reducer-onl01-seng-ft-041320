export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      let newFriends =  state.friends

      return {friends: newFriends}
    default:
      return state;
  }
}
