const ADD = 'ADD';
const DELETE = 'DELETE';
const IMPORTANT = 'IMPORTANT';
const DONE = 'DONE';
const DELETE_ALL = 'DELETE_ALL';
const EDIT = 'EDIT';
const EDIT_2 = 'EDIT_2'


const initialState = {
    todos: [],

    count: 0
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
       
        case ADD: {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    isDelete: false,
                    isImportance: false,
                    isDone: false,
                    change: false,
                    id: Math.floor(Math.random() * 1000000)
                }

                ],
                count: state.count + 1

            }
        }

        case DELETE: {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id),
                count: state.count - 1
            }
        }
        case IMPORTANT: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item, isImportance: !item.isImportance
                        }
                    }
                    return item
                })
            }
        }
        case DONE: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item, isDone: !item.isDone
                        }
                    }
                    return item
                })
            }
        }
        case DELETE_ALL: {
            return {
                ...state,
                todos: [],
                count: 0
            }
        }

        case EDIT: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, title: action.text, change: !item.change }
                    } else {
                        return item
                    }
                })
            }


        }

        case EDIT_2: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item, change: !item.change
                        }
                    } else {
                        return item
                    }
                })
            }
        }

        default: return state
    }
}


export const addTodo = (title) => {
    return (dispatch) => {
        if(title.trim().length !== 0)
        return dispatch({
            type: ADD,
            title
        })
    }

}


export const deleteTodo = (id) => {
    return (dispatch) => {
        return dispatch({
            type: DELETE,
            id
        })
    }
}

export const makeImportant = (id) => {
    return (dispatch) => {
        return dispatch({
            type: IMPORTANT,
            id

        })
    }
}

export const makeDone = (id) => {
    return (dispatch) => {
        return dispatch({
            type: DONE,
            id
        })
    }
}


export const deleteAll = () => {
    return (dispatch) => {
        return dispatch({
            type: DELETE_ALL
        })
    }
}

export const changeTodo = (id, text, change) => {
    return (dispatch) => {
        if (change === true) {
            return dispatch({
                type: EDIT,
                id,
                 text
            })
        } else {
            return dispatch({ type: EDIT_2, id })
        }
    }
}