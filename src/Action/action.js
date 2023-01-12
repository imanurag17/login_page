import * as action from './types'

export const onSignupData = data => ({
    type: action.ONSIGNUP_DATA,
    payload: data
})

export const onSignin = data => ({
    type: action.ON_SIGNIN,
})

export const updatePassword = data => ({
    type: action.UPDATE_PASSWORD,
    payload: data
})

