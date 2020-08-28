//a function called `managePresents` that takes in the previous state and an action as its argument.
export function managePresents(state, action){

    switch(action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state 
    }

}
