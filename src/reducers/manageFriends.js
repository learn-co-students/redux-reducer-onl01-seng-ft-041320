export function manageFriends(state, action){
  let friends
  switch(action.type) {
    case 'ADD_FRIEND':
      friends = state.friends
      let newFriend = action.friend
      let newFriends = [...friends, newFriend]
      
      return {...state, 
        friends: newFriends}
        
        case 'REMOVE_FRIEND':
      friends = state.friends
      
       let i = friends.findIndex(friend => friend.id === action.id)
       
        return {...state,
        friends: [...friends.slice(0,i), ...friends.slice(i+1)]
      }
      
    default:
      return state;
  }
}