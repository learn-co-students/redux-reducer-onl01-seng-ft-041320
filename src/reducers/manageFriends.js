export function manageFriends(state, action){
    switch (action.type) {
        //is the action.type ADD_FRIEND?
        case 'ADD_FRIEND':
            //add and return the friend the the friends array
          return { friends: [...state.friends, action.friend] };
          //is the action.type REMOVE_FRIEND?
        case 'REMOVE_FRIEND':
          return {
                //filter and return the friends array by id
            friends: state.friends.filter(friend => friend.id !== action.id)
          };
        default:
            //If there is no match, the default code block is executed.
          return state;
      }
    }	
