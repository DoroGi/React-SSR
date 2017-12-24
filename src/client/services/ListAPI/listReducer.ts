import { FETCH_USERS, FETCH_ADMINS } from '../actions'
import IStoreState from '../../../helpers/store/IStoreState'
import { Action, Persons } from '../../../helpers/UtilTypes'
import { Reducer } from 'redux';

export const adminsReducer: Reducer<Persons> = (state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data
        default:
            return state
    }
}

export const usersReducer: Reducer<Persons> = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data
        default:
            return state
    }
}