import { FETCH_USERS, FETCH_ADMINS } from '../actions'
import IStoreState from '../../../helpers/store/IStoreState'
import { Action } from '../../../helpers/UtilTypes'

export const adminsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data
        default:
            return state
    }
}

export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data
        default:
            return state
    }
}