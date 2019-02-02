import { ADD_TODO, REMOVE_TODO} from './actionCreators.js'

const initialState = {
    todos: [
        { 
          id: 1,
          text: 'eat'
        },
        { 
          id: 2,
          text: 'sleep'
        },
        { 
          id: 3,
          text: 'rave'
        },
        { 
          id: 4,
          text: 'repeat'
        },
      ],
      id: 5
}

export default function rootReducer(state = initialState, action){
    let newState = {...state};
    switch(action.type){
        case ADD_TODO:
            newState.todos.push(action.todo);
            newState.id++
            return newState;
        case REMOVE_TODO:
            newState.todos = newState.todos.filter(todo => (todo.id !== +action.id))
            return newState;
        default:
            return newState;
    }
}