import { combineReducers } from 'redux'

import { Persons, Reducer } from '@types'

import types from './types'

export const adminsReducer: Reducer<Persons> = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_ADMINS:
            return action.payload.data
        default:
            return state
    }
}

export const usersReducer: Reducer<Persons> = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_USERS:
            return action.payload.data
        default:
            return state
    }
}

export default combineReducers({
    users: usersReducer,
    admins: adminsReducer
})