
// const state = {
//     numberOfPresents: 0
// }

// const action = {
//     type: 'INCREASE'
// }
// export function manageFriends(state, action){
//     switch (action.type) {
//         case 'INCREASE':
//         return {numberOfPresents: state.numberOfPresents + 1 }
//     default:
//         return state
//     }
// 
// }
export function manageFriends(state={friends: []}, action) {
    switch (action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            return {friends: state.friends.filter(friend => friend.id !== action.id)}
        default:
            return state
    }
}