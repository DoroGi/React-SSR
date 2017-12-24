import { FETCH_CURRENT_USER } from '../actions'
import { Action, GoogleUser } from '../../../helpers/UtilTypes'
import IStoreState from '../../../helpers/store/IStoreState'
import { Reducer } from 'redux'

export const userReducer: Reducer<GoogleUser> = (state = null, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state
    }
}