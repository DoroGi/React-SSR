import { ActionFiller } from '@types'

import types from './types'

const fetchCurrentUser: ActionFiller = res => ({
    type: types.FETCH_CURRENT_USER,
    payload: res
})

export default {
    fetchCurrentUser
}