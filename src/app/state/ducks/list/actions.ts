import { ActionFiller } from '@types'
import types from './types'

const fetchUsers: ActionFiller = res => ({
    type: types.FETCH_USERS,
    payload: res
})

const fetchAdmins: ActionFiller = res => ({
    type: types.FETCH_ADMINS,
    payload: res
})

export default {
    fetchUsers,
    fetchAdmins
}
