import * as actions from '../Action/types'

const initialState = {
    loginData: [],
    loggedin: false,
}
export function reducer(state = initialState, action){
    switch(action.type){
        case actions.ONSIGNUP_DATA:
            return {
                ...state,
                loginData: action.payload
            }

        case actions.ON_SIGNIN:
            return {
                ...state,
                loggedin: true
            }

        case actions.UPDATE_PASSWORD:
            return {
                ...state,
                loginData: action.payload
            }
        default:
            return state;
    }
}