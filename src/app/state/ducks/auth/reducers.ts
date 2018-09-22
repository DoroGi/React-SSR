import { GoogleUser, Reducer } from '@types'

import types from './types'

const userReducer: Reducer<GoogleUser | boolean> = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state
    }
}

export default { user: userReducer }
