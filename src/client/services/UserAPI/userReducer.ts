import { FETCH_CURRENT_USER } from '../actions'
import { Action } from '../../../helpers/UtilTypes'
import IStoreState from '../../../helpers/store/IStoreState'
import { Reducer } from 'redux'

export const userReducer: Reducer<IStoreState> = (state = null, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state
    }
}