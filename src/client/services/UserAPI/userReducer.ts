import { GoogleUser, Reducer } from '@types'
import { FETCH_CURRENT_USER } from '../actions'

export const userReducer: Reducer<GoogleUser> = (state = null, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state
    }
}