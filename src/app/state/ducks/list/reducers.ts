import { Persons, Reducer } from '@types'

import types from './types'

const adminsReducer: Reducer<Persons> = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_ADMINS:
            return action.payload.data
        default:
            return state
    }
}

const usersReducer: Reducer<Persons> = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_USERS:
            return action.payload.data
        default:
            return state
    }
}

export default {
    users: usersReducer,
    admins: adminsReducer
}
