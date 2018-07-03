import { combineReducers } from 'redux'

import { GoogleUser, Reducer } from '@types'

import types from './types'

export const userReducer: Reducer<GoogleUser> = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state
    }
}

export default combineReducers({
    user: userReducer
})