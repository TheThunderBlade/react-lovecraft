const SET_USER = 'SET_USER'
const  REMOVE_USER = 'REMOVE_USER'

const initState ={
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = initState, action){
    switch (action.type){
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case REMOVE_USER:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default: return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const removeUser = () => ({type: REMOVE_USER})