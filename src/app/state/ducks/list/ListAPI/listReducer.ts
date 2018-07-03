import { Persons, Reducer } from '@types'
import { FETCH_USERS, FETCH_ADMINS } from '../actions'

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